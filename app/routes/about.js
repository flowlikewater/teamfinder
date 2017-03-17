import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    transTo(isplayer, params) {
      if (isplayer === true) {
        this.transitionTo('player', params);
      } else {
        this.transitionTo('team', params);
      }
    }
  }
});
