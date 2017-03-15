import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    deleteplayer(teammates) {
      var byeplayer = this.get('byeplayer');
      var obj = this.findProperty(teammates, byeplayer)
      this.sendAction('deleteplayer');
    }
  }
});
