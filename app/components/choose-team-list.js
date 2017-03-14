import Ember from 'ember';

export default Ember.Component.extend({
  credentials: Ember.inject.service(),
  actions: {
    selectTeam(team){
      this.get('credentials').addTeam(team)
    }
  }
});
