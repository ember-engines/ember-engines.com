/*jshint node:true*/
var EngineAddon = require('ember-engines/lib/engine-addon');
module.exports = EngineAddon.extend({
  name: 'guide',

  isDevelopingAddon: function() {
    return true;
  },

  lazyLoading: true
});
