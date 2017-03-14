import Ember from 'ember';

export default Ember.Service.extend({
  player: null,
  name: null,
  addPlayer(player){
    this.set('name', player.get('name'));
    debugger;
  }
});
