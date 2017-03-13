import Ember from 'ember';

export default Ember.Component.extend({
  openMessageForm: false,
  actions: {
    MessageFormShow() {
      this.set('openMessageForm', true);
    },
    sendMessage() {
     var params = {
       name: this.get('name'),
       message: this.get('message'),
       time: this.get('time'),
       team: this.get('team')
     };
     this.set('openMessageForm', false);
     this.sendAction('sendMessage', params);
   }
  }
});
