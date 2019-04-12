/*jshint node:true*/
const EngineAddon = require('ember-engines/lib/engine-addon');
module.exports = EngineAddon.extend({
  name: 'guide',

  isDevelopingAddon: function() {
    return true;
  },

  lazyLoading: Object.freeze({
    enabled: true
  })
});
