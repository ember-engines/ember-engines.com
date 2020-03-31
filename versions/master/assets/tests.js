'use strict';

define("dummy/tests/helpers/ember-cli-clipboard", ["exports", "ember-cli-clipboard/test-support"], function (_exports, _testSupport) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.triggerSuccess = triggerSuccess;
  _exports.triggerError = triggerError;
  _exports.default = _default;

  const getOwnerFromContext = c => c.container || c.owner;
  /* === Legacy Integration Test Helpers === */

  /**
   * Fires `success` action for an instance of a copy-button component
   * @function triggerSuccess
   * @param {Object} context - integration test’s this context
   * @param {String} selector - css selector of the copy-button instance
   * @returns {Void}
   */


  function triggerSuccess(context, selector) {
    const owner = getOwnerFromContext(context);
    (0, _testSupport._fireComponentAction)(owner, selector, 'success');
  }
  /**
   * Fires `error` action for an instance of a copy-button component
   * @function triggerError
   * @param {Object} context - integration test’s this context
   * @param {String} selector - css selector of the copy-button instance
   * @returns {Void}
   */


  function triggerError(context, selector) {
    const owner = getOwnerFromContext(context);
    (0, _testSupport._fireComponentAction)(owner, selector, 'error');
  }
  /* === Register Legacy Acceptance Test Helpers === */


  function _default() {
    Ember.Test.registerAsyncHelper('triggerCopySuccess', function (app, selector) {
      const owner = app.__container__;
      (0, _testSupport._fireComponentAction)(owner, selector, 'success');
    });
    Ember.Test.registerAsyncHelper('triggerCopyError', function (app, selector) {
      const owner = app.__container__;
      (0, _testSupport._fireComponentAction)(owner, selector, 'error');
    });
  }
});
define("dummy/tests/test-helper", ["dummy/app", "dummy/config/environment", "@ember/test-helpers", "ember-qunit"], function (_app, _environment, _testHelpers, _emberQunit) {
  "use strict";

  (0, _testHelpers.setApplication)(_app.default.create(_environment.default.APP));
  (0, _emberQunit.start)();
});
define('dummy/config/environment', [], function() {
  var prefix = 'dummy';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(decodeURIComponent(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

require('dummy/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
