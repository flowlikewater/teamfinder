import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      teams: this.store.findAll('team'),
      players: this.store.findAll('player')
    })
  }
});
