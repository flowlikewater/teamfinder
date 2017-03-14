import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      teams: this.store.findAll('team'),
      messages: this.store.findAll('message'),
      players: this.store.findAll('player')
    });
  },
  signUpTeam: false,
  actions: {
    signUpFormShow() {
      this.controller.set('signUpTeam', true);
    },
    saveSignUp() {
      var params = {
        name: this.controller.get('name'),
        category: this.controller.get('category'),
        loginid: this.controller.get('loginid'),
        loginpassword: this.controller.get('loginpassword'),
        description: this.controller.get('description'),
        totalplayers: this.controller.get('totalplayers'),
        playerswanted: this.controller.get('playerswanted'),
        agerange: this.controller.get('agerange'),
        location: this.controller.get('location')
      };
      var newTeam = this.store.createRecord('team',params);
      newTeam.save();
      this.transitionTo('index');
    }
     //this.set('signUpPlayer', false);
     //this.sendAction('saveSignUp', params);
  }
});
