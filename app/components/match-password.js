import Ember from 'ember';

export default Ember.Component.extend({
  credentials: Ember.inject.service(),
  correctUser: false,
  actions: {
    submitPassword(){
      var enterpasswordyo = this.get('enterpasswordyo');
      if (this.get('credentials').get('password') === enterpasswordyo) {
        this.set('correctUser', true);
      }
    }
  }
});
