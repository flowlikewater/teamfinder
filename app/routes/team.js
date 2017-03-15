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
      var newMessage = this.store.createRecord('message',params);
      var team = params.team;
      team.get('messages').addObject(newMessage);
      newMessage.save().then(function(){
        return team.save();
      });
    }
  }
});
