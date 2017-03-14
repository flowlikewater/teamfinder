import Ember from 'ember';

export default Ember.Component.extend({
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
        location: this.get('location')
      };
      this.set('signUpTeam', false);
      this.sendAction('saveSignUpTeam', params)
    }
  }
});
