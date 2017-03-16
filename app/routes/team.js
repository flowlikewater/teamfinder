import Ember from 'ember';

export default Ember.Route.extend({
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
    sendMessage(params) {
      var newMessage = this.store.createRecord('message', params);
      var team = params.team;
      team.get('messages').addObject(newMessage);
      newMessage.save().then(function() {
        return team.save();
      });
    },
    addplayer(messages, team, player) {
      var newteammate = this.store.findAll('player').then(function(teammates) {
        var filteredTeammates = teammates.filter(function(player) {
          return player.get('name') === messages;
        });
        if (team.get('teammates').includes(filteredTeammates[0].get('name'))) {
          return 0;
        }
        team.get('teammates').push(filteredTeammates[0].get('name'));
        team.save();
        filteredTeammates[0].get('joinedteams').push(team.get('name'));
        player.save();
      });
    },
    editTeam(team, params) {
      team.save();
    },
    deleteteammate(teammate, team, player) {
      team.get('teammates').removeObject(teammate);
      team.save();
      var deletethisguy = this.store.findAll('player').then(function(teammates) {
        var filteredguys = teammates.filter(function(player) {
          return player.get('name') === teammate;
        });
        filteredguys[0].get('joinedteams').removeObject(team.get('name'));
        player.save();
      });
    },
    linktoteammate(teammate, player) {
      var self=this;
      var linktothisguy = this.store.findAll('player').then(function(teammates) {
        var filteredguys = teammates.filter(function(player) {
          return player.get('name') === teammate;
        });
        debugger;
        var i = filteredguys[0].get('id');
        self.transitionTo('player', i);
      });
    }
  }
});
