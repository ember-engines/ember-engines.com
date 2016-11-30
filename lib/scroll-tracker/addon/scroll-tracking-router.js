import Ember from 'ember';
import scrollTracker from './index';

export default Ember.Router.extend({
  willTransition() {
    this._super(...arguments);
    scrollTracker.capture();
  }
});
