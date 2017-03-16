import Ember from 'ember';

export default Ember.Component.extend({
  credentials: Ember.inject.service(),
  actions: {
    gotoprofile(){
      this.transitionTo('team','1');
    }
  }
});
