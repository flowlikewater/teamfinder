import Ember from 'ember';

export default Ember.Service.extend({
  player: false,
  tempname: "",
  tempid: "",
  loggedin:false,

  addPlayer(player){
    this.set('tempname', player.get('name'));
    this.set('tempid', player.get('id'));
    this.set('player', true);
    this.set('loggedin', true);
  },
  addTeam(team){
    this.set('tempname', team.get('name'));
    this.set('tempid', team.get('id'));
    this.set('player', false);
    this.set('loggedin', true);
  }

});
