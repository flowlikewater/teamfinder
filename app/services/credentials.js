import Ember from 'ember';

export default Ember.Service.extend({
  player: false,
  tempname: "",
  tempid: "",
  loggedin:false,
  password: "",

  addPlayer(player){
    this.set('tempname', player.get('name'));
    this.set('tempid', player.get('id'));
    this.set('player', true);
    this.set('loggedin', true);
    this.set('password',player.get('loginpassword'))
  },
  addTeam(team){
    this.set('tempname', team.get('name'));
    this.set('tempid', team.get('id'));
    this.set('player', false);
    this.set('loggedin', true);
    this.set('password',team.get('loginpassword'))
  },
  newPlayer() {
    this.set('player', true);
  },
  newTeam() {
    this.set('player', false);
  },
});
