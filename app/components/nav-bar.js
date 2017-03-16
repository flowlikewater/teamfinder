import Ember from 'ember';

export default Ember.Component.extend({
  credentials: Ember.inject.service(),
  actions: {
    gotoprofile(){
      var isplayer = this.get('credentials.player');
      var params = this.get('credentials.tempid');
      this.sendAction('transTo', isplayer , params);
    }
  }
});
