import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('football');
  this.route('basketball');
  this.route('bodybuilding');
  this.route('gym');
  this.route('team',{path:'/team/:team_id'});
  this.route('player',{path:'/player/:player_id'});
  this.route('homepage');
});

export default Router;
