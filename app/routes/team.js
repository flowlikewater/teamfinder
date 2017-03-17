import Ember from 'ember';

export default Ember.Route.extend({
  credentials: Ember.inject.service(),
  model(params) {
    return Ember.RSVP.hash({
      teams: this.store.findRecord('team', params.team_id),
      players: this.store.findAll('player'),
      messages: this.store.findAll('message'),
      basketball: this.store.query('team', {
        orderBy: 'category',
        equalTo: 'basketball'
      }),
      gym: this.store.query('team', {
        orderBy: 'category',
        equalTo: 'gym'
      }),
      football: this.store.query('team', {
        orderBy: 'category',
        equalTo: 'football'
      })
    });
  },

  actions: {
    test(){
      debugger;
    },
    sendMessage(params) {
      var newMessage = this.store.createRecord('message', params);
      var team = params.team;
      team.get('messages').addObject(newMessage);
      newMessage.save().then(function() {
        return team.save();
      });
    },
    addplayer(messages, team, player) {
      if (((this.get('credentials.player')) === false) && (this.get('credentials.tempid')) === (team.id)) {
          var newteammate = this.store.findAll('player').then(function(teammates) {
            var filteredTeammates = teammates.filter(function(player) {
              return player.get('name') === messages;
            });
            if(team.get('teammates')==null){
                team.teammates = [filteredTeammates[0].get('name')];
                team.save();
                if (filteredTeammates[0].get('joinedteams')==null){
                  filteredTeammates[0].joinedteams = [team.get('name')];
                  player.save();
                }
            }
            else if (team.get('teammates').includes(filteredTeammates[0].get('name'))) {
              return 0;
            }
            else {
              team.get('teammates').push(filteredTeammates[0].get('name'));
              team.save();
              if (filteredTeammates[0].get('joinedteams')==null){
                filteredTeammates[0].joinedteams = [team.get('name')];
                player.save();
              }
              else {
                filteredTeammates[0].get('joinedteams').push(team.get('name'));
                player.save();
              }
        }
      });
    }
        else {
          alert('This is not your team');
        }
      },
    editTeam(team, params) {
      team.save();
    },
    deleteteammate(teammate, team, player) {
      if (((this.get('credentials.player')) == false) && (this.get('credentials.tempid') == (team.id))) {
      team.get('teammates').removeObject(teammate);
      team.save();
      var deletethisguy = this.store.findAll('player').then(function(teammates) {
        var filteredguys = teammates.filter(function(player) {
          return player.get('name') === teammate;
        });
        filteredguys[0].get('joinedteams').removeObject(team.get('name'));
        player.save();
      });
      }
      else {
        alert('This is not your team');
      }
    },
    linktoteammate(teammate, player) {
      var self=this;
      var linktothisguy = this.store.findAll('player').then(function(teammates) {
        var filteredguys = teammates.filter(function(player) {
          return player.get('name') === teammate;
        });
        var i = filteredguys[0].get('id');
        self.transitionTo('player', i);
      });
  },
}
});
