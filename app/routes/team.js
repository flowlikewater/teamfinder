import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return Ember.RSVP.hash({
      teams: this.store.findRecord('team', params.team_id)
    });
  }
});
