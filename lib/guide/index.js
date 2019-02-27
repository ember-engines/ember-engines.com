/*jshint node:true*/
const EngineAddon = require('ember-engines/lib/engine-addon');
module.exports = EngineAddon.extend({
  name: 'guide',

  isDevelopingAddon: function() {
    return true;
  },

  // eslint-disable-next-line ember/avoid-leaking-state-in-ember-objects
  lazyLoading: {
    enabled: true
  }
});
