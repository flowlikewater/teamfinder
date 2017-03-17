import Ember from 'ember';

export default Ember.Component.extend({
  credentials: Ember.inject.service(),
  signUpTeam: false,
  actions: {
    signUpFormShowTeam() {
      this.set('signUpTeam', true);
    },
    saveSignUpTeam() {
      var params = {
        name: this.get('name'),
        category: this.get('category'),
        loginid: this.get('loginid'),
        loginpassword: this.get('loginpassword'),
        description: this.get('description'),
        totalplayers: this.get('totalplayers'),
        playerswanted: this.get('playerswanted'),
        agerange: this.get('agerange'),
        location: this.get('location'),
        teammates: []
      };
      this.set('signUpTeam', false);
      this.sendAction('saveSignUpTeam', params);
      this.send('saveNewTeam');
    },
    saveNewTeam() {
      this.get('credentials').newTeam();
      alert("Your account has now been created, please sign in below");
    }
  }
});
