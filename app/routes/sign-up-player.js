import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      teams: this.store.findAll('team'),
      messages: this.store.findAll('message'),
      players: this.store.findAll('player')
    });
  },
  signUpPlayer: false,
  actions: {
    signUpFormShow() {
      this.controller.set('signUpPlayer', true);
    },
    saveSignUp() {
      var params = {
        name: this.controller.get('name'),
        sex: this.controller.get('sex'),
        description: this.controller.get('description'),
        build: this.controller.get('build'),
        age: this.controller.get('age'),
        location: this.controller.get('location'),
        email: this.controller.get('email')
      };
      var newPlayer = this.store.createRecord('player',params);
      newPlayer.save();
      this.transitionTo('index');
    }
     //this.set('signUpPlayer', false);
     //this.sendAction('saveSignUp', params);
  }
});
