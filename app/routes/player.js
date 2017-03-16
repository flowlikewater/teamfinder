import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return Ember.RSVP.hash({
      teams: this.store.findAll('team'),
      players: this.store.findRecord('player',params.player_id),
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
      var newMessage = this.store.createRecord('message',params);
      var player = params.player;
      player.get('messages').addObject(newMessage);
      newMessage.save().then(function(){
        return player.save();
      });
    },
    linktoteam(joinedteam, team) {
      var self=this;
      var linktothisteam = this.store.findAll('team').then(function(joinedteams) {
        var filteredteams = joinedteams.filter(function(team) {
          return team.get('name') === joinedteam;
        });
        debugger;
        var i = filteredteams[0].get('id');
        self.transitionTo('team', i);
      });
    }
  }
});
