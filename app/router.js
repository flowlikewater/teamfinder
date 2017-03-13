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
});

export default Router;
