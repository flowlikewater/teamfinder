import Ember from 'ember';

export default Ember.Service.extend({
  player: "",
  tempname: "",
  tempid: "",

  addPlayer(player){
    this.set('tempname', player.get('name'));
    this.set('tempid', player.get('id'));
    debugger;
  }
});
