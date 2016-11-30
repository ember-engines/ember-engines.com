import config from './config/environment';
import ScrollTrackingRouter from 'scroll-tracker/scroll-tracking-router';

const Router = ScrollTrackingRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.mount('guide');
});

export default Router;
