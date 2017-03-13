import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('team', {path:'/team/:team_id'});
  this.route('football');
  this.route('basketball');
  this.route('bodybuilding');
});

export default Router;
