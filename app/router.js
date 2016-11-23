import Ember from 'ember';
import config from './config/environment';
import scrollTracker from './utils/scroll-tracker';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL,
  willTransition() {
    this._super(...arguments);
    scrollTracker.capture();
  }
});

Router.map(function() {
  this.route('guide', function() {
    this.route('page', { path: '/:page' });
  });
});

export default Router;
