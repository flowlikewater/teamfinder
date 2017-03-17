import Ember from 'ember';

export default Ember.Component.extend({
  credentials: Ember.inject.service(),
  editteamnow: false,
  actions:{
    editTeam(team) {
      var params = {
        editname: this.get('editname'),
        category: this.get('category'),
        loginid: this.get('loginid'),
        loginpassword: this.get('loginpassword'),
        description: this.get('description'),
        totalplayers: this.get('totalplayers'),
        playerswanted: this.get('playerswanted'),
        agerange: this.get('agerange'),
        location: this.get('location')
      };
      this.sendAction('editTeam',team, params);
      this.set('editteamnow',false)
    },
    showformyo(){
      this.set('editteamnow',true)
    }
  }
});
