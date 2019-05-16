import EmberRouter from '@ember/routing/router';
import scrollTracker from './index';

export default EmberRouter.extend({
  init() {
    this._super(...arguments);
    this.on('routeWillChange', () => {
      scrollTracker.capture();
    });
  }
});
