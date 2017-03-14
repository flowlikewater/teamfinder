import Ember from 'ember';

export default Ember.Service.extend({
  player: false,
  name: "Joe",
  id: "0",
  addPlayer(player){
    this.set('name', player.get('name'));
    debugger;
  }
});
