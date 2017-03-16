import Ember from 'ember';

export default Ember.Component.extend({
  credentials: Ember.inject.service(),
  openMessageForm: false,
  actions: {
    MessageFormShow() {
      this.set('openMessageForm', true);
    },
    sendMessage() {
     var params = {
       name: this.get('credentials.tempname'),
       message: this.get('message'),
       time: moment().format('lll'),
       team: this.get('team'),
     };
     debugger;
     this.set('openMessageForm', false);
     this.sendAction('sendMessage', params);
   }
  }
});
