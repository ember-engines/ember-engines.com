import config from './config/environment';
import ScrollTrackingRouter from 'scroll-tracker/scroll-tracking-router';

const Router = ScrollTrackingRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('guide', function() {
    this.route('page', { path: '/:page' });
  });
});

export default Router;
