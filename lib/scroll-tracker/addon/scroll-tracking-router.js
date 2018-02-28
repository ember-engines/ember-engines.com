import EmberRouter from '@ember/routing/router';
import scrollTracker from './index';

export default EmberRouter.extend({
  willTransition() {
    this._super(...arguments);
    scrollTracker.capture();
  }
});
