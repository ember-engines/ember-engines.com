'use strict';



;define("dummy/adapters/-addon-docs", ["exports", "ember-cli-addon-docs/adapters/-addon-docs"], function (_exports, _addonDocs) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _addonDocs.default;
    }
  });
});
;define("dummy/adapters/-json-api", ["exports", "@ember-data/adapter/json-api"], function (_exports, _jsonApi) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _jsonApi.default;
    }
  });
});
;define("dummy/adapters/class", ["exports", "ember-cli-addon-docs/adapters/class"], function (_exports, _class) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _class.default;
    }
  });
});
;define("dummy/adapters/component", ["exports", "ember-cli-addon-docs/adapters/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
;define("dummy/adapters/module", ["exports", "ember-cli-addon-docs/adapters/module"], function (_exports, _module) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _module.default;
    }
  });
});
;define("dummy/adapters/project", ["exports", "ember-cli-addon-docs/adapters/project"], function (_exports, _project) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _project.default;
    }
  });
});
;define("dummy/app", ["exports", "ember-resolver", "ember-load-initializers", "dummy/config/environment"], function (_exports, _emberResolver, _emberLoadInitializers, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  const App = Ember.Application.extend({
    modulePrefix: _environment.default.modulePrefix,
    podModulePrefix: _environment.default.podModulePrefix,
    Resolver: _emberResolver.default
  });
  (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);
  var _default = App;
  _exports.default = _default;
});
;define("dummy/breakpoints", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = {
    mobile: '(max-width: 767px)',
    tablet: '(min-width: 768px) and (max-width: 991px)',
    desktop: '(min-width: 992px) and (max-width: 1200px)',
    jumbo: '(min-width: 1201px)'
  };
  _exports.default = _default;
});
;define("dummy/component-managers/glimmer", ["exports", "@glimmer/component/-private/ember-component-manager"], function (_exports, _emberComponentManager) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _emberComponentManager.default;
    }
  });
});
;define("dummy/components/-lf-get-outlet-state", ["exports", "liquid-fire/components/-lf-get-outlet-state"], function (_exports, _lfGetOutletState) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _lfGetOutletState.default;
    }
  });
});
;define("dummy/components/api/x-class", ["exports", "ember-cli-addon-docs/components/api/x-class/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
;define("dummy/components/api/x-component", ["exports", "ember-cli-addon-docs/components/api/x-component/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
;define("dummy/components/api/x-import-path", ["exports", "ember-cli-addon-docs/components/api/x-import-path/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
;define("dummy/components/api/x-meta-panel", ["exports", "ember-cli-addon-docs/components/api/x-meta-panel/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
;define("dummy/components/api/x-meta-panel/header", ["exports", "ember-cli-addon-docs/components/api/x-meta-panel/header/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
;define("dummy/components/api/x-module", ["exports", "ember-cli-addon-docs/components/api/x-module/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
;define("dummy/components/api/x-section", ["exports", "ember-cli-addon-docs/components/api/x-section/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
;define("dummy/components/api/x-sections", ["exports", "ember-cli-addon-docs/components/api/x-sections/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
;define("dummy/components/api/x-toggles", ["exports", "ember-cli-addon-docs/components/api/x-toggles/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
;define("dummy/components/copy-button", ["exports", "ember-cli-clipboard/components/copy-button"], function (_exports, _copyButton) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _copyButton.default;
    }
  });
});
;define("dummy/components/docs-code-highlight", ["exports", "ember-cli-addon-docs/components/docs-code-highlight/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
;define("dummy/components/docs-demo", ["exports", "ember-cli-addon-docs/components/docs-demo/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
;define("dummy/components/docs-demo/x-example", ["exports", "ember-cli-addon-docs/components/docs-demo/x-example/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
;define("dummy/components/docs-demo/x-snippet", ["exports", "ember-cli-addon-docs/components/docs-demo/x-snippet/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
;define("dummy/components/docs-header", ["exports", "ember-cli-addon-docs/components/docs-header/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
;define("dummy/components/docs-header/link", ["exports", "ember-cli-addon-docs/components/docs-header/link/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
;define("dummy/components/docs-header/search-box", ["exports", "ember-cli-addon-docs/components/docs-header/search-box/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
;define("dummy/components/docs-header/search-result", ["exports", "ember-cli-addon-docs/components/docs-header/search-result/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
;define("dummy/components/docs-header/search-results", ["exports", "ember-cli-addon-docs/components/docs-header/search-results/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
;define("dummy/components/docs-header/version-selector", ["exports", "ember-cli-addon-docs/components/docs-header/version-selector/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
;define("dummy/components/docs-hero", ["exports", "ember-cli-addon-docs/components/docs-hero/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
;define("dummy/components/docs-keyboard-shortcuts", ["exports", "ember-cli-addon-docs/components/docs-keyboard-shortcuts/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
;define("dummy/components/docs-link", ["exports", "ember-cli-addon-docs/components/docs-link/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
;define("dummy/components/docs-logo", ["exports", "ember-cli-addon-docs/components/docs-logo/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
;define("dummy/components/docs-snippet", ["exports", "ember-cli-addon-docs/components/docs-snippet/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
;define("dummy/components/docs-svg-icon", ["exports", "ember-cli-addon-docs/components/docs-svg-icon/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
;define("dummy/components/docs-viewer", ["exports", "ember-cli-addon-docs/components/docs-viewer/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
;define("dummy/components/docs-viewer/x-autogenerated-api-docs", ["exports", "ember-cli-addon-docs/components/docs-viewer/x-autogenerated-api-docs/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
;define("dummy/components/docs-viewer/x-autogenerated-api-docs/module-nav", ["exports", "ember-cli-addon-docs/components/docs-viewer/x-autogenerated-api-docs/module-nav/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
;define("dummy/components/docs-viewer/x-current-page-index", ["exports", "ember-cli-addon-docs/components/docs-viewer/x-current-page-index/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
;define("dummy/components/docs-viewer/x-main", ["exports", "ember-cli-addon-docs/components/docs-viewer/x-main/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
;define("dummy/components/docs-viewer/x-nav-item", ["exports", "ember-cli-addon-docs/components/docs-viewer/x-nav-item/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
;define("dummy/components/docs-viewer/x-nav-list", ["exports", "ember-cli-addon-docs/components/docs-viewer/x-nav-list/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
;define("dummy/components/docs-viewer/x-nav", ["exports", "ember-cli-addon-docs/components/docs-viewer/x-nav/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
;define("dummy/components/docs-viewer/x-section", ["exports", "ember-cli-addon-docs/components/docs-viewer/x-section/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
;define("dummy/components/ember-modal-dialog-positioned-container", ["exports", "ember-modal-dialog/components/positioned-container"], function (_exports, _positionedContainer) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _positionedContainer.default;
    }
  });
});
;define("dummy/components/ember-modal-dialog/-basic-dialog", ["exports", "ember-modal-dialog/components/basic-dialog"], function (_exports, _basicDialog) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _basicDialog.default;
    }
  });
});
;define("dummy/components/ember-modal-dialog/-in-place-dialog", ["exports", "ember-modal-dialog/components/in-place-dialog"], function (_exports, _inPlaceDialog) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _inPlaceDialog.default;
    }
  });
});
;define("dummy/components/ember-modal-dialog/-liquid-dialog", ["exports", "ember-modal-dialog/components/liquid-dialog"], function (_exports, _liquidDialog) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _liquidDialog.default;
    }
  });
});
;define("dummy/components/ember-modal-dialog/-liquid-tether-dialog", ["exports", "ember-modal-dialog/components/liquid-tether-dialog"], function (_exports, _liquidTetherDialog) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _liquidTetherDialog.default;
    }
  });
});
;define("dummy/components/ember-modal-dialog/-tether-dialog", ["exports", "ember-modal-dialog/components/tether-dialog"], function (_exports, _tetherDialog) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _tetherDialog.default;
    }
  });
});
;define("dummy/components/ember-tether", ["exports", "ember-tether/components/ember-tether"], function (_exports, _emberTether) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _emberTether.default;
    }
  });
});
;define("dummy/components/ember-wormhole", ["exports", "ember-wormhole/components/ember-wormhole"], function (_exports, _emberWormhole) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _emberWormhole.default;
    }
  });
});
;define("dummy/components/illiquid-model", ["exports", "liquid-fire/components/illiquid-model"], function (_exports, _illiquidModel) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _illiquidModel.default;
    }
  });
});
;define("dummy/components/liquid-bind", ["exports", "liquid-fire/components/liquid-bind"], function (_exports, _liquidBind) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _liquidBind.default;
    }
  });
});
;define("dummy/components/liquid-child", ["exports", "liquid-fire/components/liquid-child"], function (_exports, _liquidChild) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _liquidChild.default;
    }
  });
});
;define("dummy/components/liquid-container", ["exports", "liquid-fire/components/liquid-container"], function (_exports, _liquidContainer) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _liquidContainer.default;
    }
  });
});
;define("dummy/components/liquid-if", ["exports", "liquid-fire/components/liquid-if"], function (_exports, _liquidIf) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _liquidIf.default;
    }
  });
});
;define("dummy/components/liquid-measured", ["exports", "liquid-fire/components/liquid-measured"], function (_exports, _liquidMeasured) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _liquidMeasured.default;
    }
  });
  Object.defineProperty(_exports, "measure", {
    enumerable: true,
    get: function () {
      return _liquidMeasured.measure;
    }
  });
});
;define("dummy/components/liquid-outlet", ["exports", "liquid-fire/components/liquid-outlet"], function (_exports, _liquidOutlet) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _liquidOutlet.default;
    }
  });
});
;define("dummy/components/liquid-spacer", ["exports", "liquid-fire/components/liquid-spacer"], function (_exports, _liquidSpacer) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _liquidSpacer.default;
    }
  });
});
;define("dummy/components/liquid-sync", ["exports", "liquid-fire/components/liquid-sync"], function (_exports, _liquidSync) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _liquidSync.default;
    }
  });
});
;define("dummy/components/liquid-unless", ["exports", "liquid-fire/components/liquid-unless"], function (_exports, _liquidUnless) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _liquidUnless.default;
    }
  });
});
;define("dummy/components/liquid-versions", ["exports", "liquid-fire/components/liquid-versions"], function (_exports, _liquidVersions) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _liquidVersions.default;
    }
  });
});
;define("dummy/components/modal-dialog", ["exports", "ember-cli-addon-docs/components/modal-dialog/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
;define("dummy/controllers/docs/api/class", ["exports", "ember-cli-addon-docs/controllers/docs/api/class"], function (_exports, _class) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _class.default;
    }
  });
});
;define("dummy/data-adapter", ["exports", "@ember-data/debug"], function (_exports, _debug) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _debug.default;
    }
  });
});
;define("dummy/helpers/and", ["exports", "ember-truth-helpers/helpers/and"], function (_exports, _and) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _and.default;
    }
  });
  Object.defineProperty(_exports, "and", {
    enumerable: true,
    get: function () {
      return _and.and;
    }
  });
});
;define("dummy/helpers/append", ["exports", "ember-composable-helpers/helpers/append"], function (_exports, _append) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _append.default;
    }
  });
  Object.defineProperty(_exports, "append", {
    enumerable: true,
    get: function () {
      return _append.append;
    }
  });
});
;define("dummy/helpers/array", ["exports", "ember-composable-helpers/helpers/array"], function (_exports, _array) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _array.default;
    }
  });
  Object.defineProperty(_exports, "array", {
    enumerable: true,
    get: function () {
      return _array.array;
    }
  });
});
;define("dummy/helpers/break-on", ["exports", "ember-cli-addon-docs/helpers/break-on"], function (_exports, _breakOn) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _breakOn.default;
    }
  });
});
;define("dummy/helpers/camelize", ["exports", "ember-cli-string-helpers/helpers/camelize"], function (_exports, _camelize) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _camelize.default;
    }
  });
  Object.defineProperty(_exports, "camelize", {
    enumerable: true,
    get: function () {
      return _camelize.camelize;
    }
  });
});
;define("dummy/helpers/cancel-all", ["exports", "ember-concurrency/helpers/cancel-all"], function (_exports, _cancelAll) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _cancelAll.default;
    }
  });
});
;define("dummy/helpers/capitalize", ["exports", "ember-cli-string-helpers/helpers/capitalize"], function (_exports, _capitalize) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _capitalize.default;
    }
  });
  Object.defineProperty(_exports, "capitalize", {
    enumerable: true,
    get: function () {
      return _capitalize.capitalize;
    }
  });
});
;define("dummy/helpers/chunk", ["exports", "ember-composable-helpers/helpers/chunk"], function (_exports, _chunk) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _chunk.default;
    }
  });
  Object.defineProperty(_exports, "chunk", {
    enumerable: true,
    get: function () {
      return _chunk.chunk;
    }
  });
});
;define("dummy/helpers/classify", ["exports", "ember-cli-string-helpers/helpers/classify"], function (_exports, _classify) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _classify.default;
    }
  });
  Object.defineProperty(_exports, "classify", {
    enumerable: true,
    get: function () {
      return _classify.classify;
    }
  });
});
;define("dummy/helpers/compact", ["exports", "ember-composable-helpers/helpers/compact"], function (_exports, _compact) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _compact.default;
    }
  });
});
;define("dummy/helpers/compute", ["exports", "ember-composable-helpers/helpers/compute"], function (_exports, _compute) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _compute.default;
    }
  });
  Object.defineProperty(_exports, "compute", {
    enumerable: true,
    get: function () {
      return _compute.compute;
    }
  });
});
;define("dummy/helpers/contains", ["exports", "ember-composable-helpers/helpers/contains"], function (_exports, _contains) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _contains.default;
    }
  });
  Object.defineProperty(_exports, "contains", {
    enumerable: true,
    get: function () {
      return _contains.contains;
    }
  });
});
;define("dummy/helpers/dasherize", ["exports", "ember-cli-string-helpers/helpers/dasherize"], function (_exports, _dasherize) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _dasherize.default;
    }
  });
  Object.defineProperty(_exports, "dasherize", {
    enumerable: true,
    get: function () {
      return _dasherize.dasherize;
    }
  });
});
;define("dummy/helpers/dec", ["exports", "ember-composable-helpers/helpers/dec"], function (_exports, _dec) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _dec.default;
    }
  });
  Object.defineProperty(_exports, "dec", {
    enumerable: true,
    get: function () {
      return _dec.dec;
    }
  });
});
;define("dummy/helpers/drop", ["exports", "ember-composable-helpers/helpers/drop"], function (_exports, _drop) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _drop.default;
    }
  });
});
;define("dummy/helpers/eq", ["exports", "ember-truth-helpers/helpers/equal"], function (_exports, _equal) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _equal.default;
    }
  });
  Object.defineProperty(_exports, "equal", {
    enumerable: true,
    get: function () {
      return _equal.equal;
    }
  });
});
;define("dummy/helpers/filter-by", ["exports", "ember-composable-helpers/helpers/filter-by"], function (_exports, _filterBy) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _filterBy.default;
    }
  });
});
;define("dummy/helpers/filter", ["exports", "ember-composable-helpers/helpers/filter"], function (_exports, _filter) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _filter.default;
    }
  });
});
;define("dummy/helpers/find-by", ["exports", "ember-composable-helpers/helpers/find-by"], function (_exports, _findBy) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _findBy.default;
    }
  });
});
;define("dummy/helpers/flatten", ["exports", "ember-composable-helpers/helpers/flatten"], function (_exports, _flatten) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _flatten.default;
    }
  });
  Object.defineProperty(_exports, "flatten", {
    enumerable: true,
    get: function () {
      return _flatten.flatten;
    }
  });
});
;define("dummy/helpers/get-code-snippet", ["exports", "ember-code-snippet/helpers/get-code-snippet"], function (_exports, _getCodeSnippet) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _getCodeSnippet.default;
    }
  });
});
;define("dummy/helpers/group-by", ["exports", "ember-composable-helpers/helpers/group-by"], function (_exports, _groupBy) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _groupBy.default;
    }
  });
});
;define("dummy/helpers/gt", ["exports", "ember-truth-helpers/helpers/gt"], function (_exports, _gt) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _gt.default;
    }
  });
  Object.defineProperty(_exports, "gt", {
    enumerable: true,
    get: function () {
      return _gt.gt;
    }
  });
});
;define("dummy/helpers/gte", ["exports", "ember-truth-helpers/helpers/gte"], function (_exports, _gte) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _gte.default;
    }
  });
  Object.defineProperty(_exports, "gte", {
    enumerable: true,
    get: function () {
      return _gte.gte;
    }
  });
});
;define("dummy/helpers/has-next", ["exports", "ember-composable-helpers/helpers/has-next"], function (_exports, _hasNext) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _hasNext.default;
    }
  });
  Object.defineProperty(_exports, "hasNext", {
    enumerable: true,
    get: function () {
      return _hasNext.hasNext;
    }
  });
});
;define("dummy/helpers/has-previous", ["exports", "ember-composable-helpers/helpers/has-previous"], function (_exports, _hasPrevious) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _hasPrevious.default;
    }
  });
  Object.defineProperty(_exports, "hasPrevious", {
    enumerable: true,
    get: function () {
      return _hasPrevious.hasPrevious;
    }
  });
});
;define("dummy/helpers/href-to", ["exports", "ember-href-to/helpers/href-to"], function (_exports, _hrefTo) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _hrefTo.default;
    }
  });
  Object.defineProperty(_exports, "hrefTo", {
    enumerable: true,
    get: function () {
      return _hrefTo.hrefTo;
    }
  });
});
;define("dummy/helpers/html-safe", ["exports", "ember-cli-string-helpers/helpers/html-safe"], function (_exports, _htmlSafe) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _htmlSafe.default;
    }
  });
  Object.defineProperty(_exports, "htmlSafe", {
    enumerable: true,
    get: function () {
      return _htmlSafe.htmlSafe;
    }
  });
});
;define("dummy/helpers/humanize", ["exports", "ember-cli-string-helpers/helpers/humanize"], function (_exports, _humanize) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _humanize.default;
    }
  });
  Object.defineProperty(_exports, "humanize", {
    enumerable: true,
    get: function () {
      return _humanize.humanize;
    }
  });
});
;define("dummy/helpers/ignore-children", ["exports", "ember-ignore-children-helper/helpers/ignore-children"], function (_exports, _ignoreChildren) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _ignoreChildren.default;
    }
  });
  Object.defineProperty(_exports, "ignoreChildren", {
    enumerable: true,
    get: function () {
      return _ignoreChildren.ignoreChildren;
    }
  });
});
;define("dummy/helpers/inc", ["exports", "ember-composable-helpers/helpers/inc"], function (_exports, _inc) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _inc.default;
    }
  });
  Object.defineProperty(_exports, "inc", {
    enumerable: true,
    get: function () {
      return _inc.inc;
    }
  });
});
;define("dummy/helpers/intersect", ["exports", "ember-composable-helpers/helpers/intersect"], function (_exports, _intersect) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _intersect.default;
    }
  });
});
;define("dummy/helpers/invoke", ["exports", "ember-composable-helpers/helpers/invoke"], function (_exports, _invoke) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _invoke.default;
    }
  });
  Object.defineProperty(_exports, "invoke", {
    enumerable: true,
    get: function () {
      return _invoke.invoke;
    }
  });
});
;define("dummy/helpers/is-array", ["exports", "ember-truth-helpers/helpers/is-array"], function (_exports, _isArray) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _isArray.default;
    }
  });
  Object.defineProperty(_exports, "isArray", {
    enumerable: true,
    get: function () {
      return _isArray.isArray;
    }
  });
});
;define("dummy/helpers/is-clipboard-supported", ["exports", "ember-cli-clipboard/helpers/is-clipboard-supported"], function (_exports, _isClipboardSupported) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _isClipboardSupported.default;
    }
  });
  Object.defineProperty(_exports, "isClipboardSupported", {
    enumerable: true,
    get: function () {
      return _isClipboardSupported.isClipboardSupported;
    }
  });
});
;define("dummy/helpers/is-empty", ["exports", "ember-truth-helpers/helpers/is-empty"], function (_exports, _isEmpty) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _isEmpty.default;
    }
  });
});
;define("dummy/helpers/is-equal", ["exports", "ember-truth-helpers/helpers/is-equal"], function (_exports, _isEqual) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _isEqual.default;
    }
  });
  Object.defineProperty(_exports, "isEqual", {
    enumerable: true,
    get: function () {
      return _isEqual.isEqual;
    }
  });
});
;define("dummy/helpers/join", ["exports", "ember-composable-helpers/helpers/join"], function (_exports, _join) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _join.default;
    }
  });
});
;define("dummy/helpers/lf-lock-model", ["exports", "liquid-fire/helpers/lf-lock-model"], function (_exports, _lfLockModel) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _lfLockModel.default;
    }
  });
  Object.defineProperty(_exports, "lfLockModel", {
    enumerable: true,
    get: function () {
      return _lfLockModel.lfLockModel;
    }
  });
});
;define("dummy/helpers/lf-or", ["exports", "liquid-fire/helpers/lf-or"], function (_exports, _lfOr) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _lfOr.default;
    }
  });
  Object.defineProperty(_exports, "lfOr", {
    enumerable: true,
    get: function () {
      return _lfOr.lfOr;
    }
  });
});
;define("dummy/helpers/lowercase", ["exports", "ember-cli-string-helpers/helpers/lowercase"], function (_exports, _lowercase) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _lowercase.default;
    }
  });
  Object.defineProperty(_exports, "lowercase", {
    enumerable: true,
    get: function () {
      return _lowercase.lowercase;
    }
  });
});
;define("dummy/helpers/lt", ["exports", "ember-truth-helpers/helpers/lt"], function (_exports, _lt) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _lt.default;
    }
  });
  Object.defineProperty(_exports, "lt", {
    enumerable: true,
    get: function () {
      return _lt.lt;
    }
  });
});
;define("dummy/helpers/lte", ["exports", "ember-truth-helpers/helpers/lte"], function (_exports, _lte) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _lte.default;
    }
  });
  Object.defineProperty(_exports, "lte", {
    enumerable: true,
    get: function () {
      return _lte.lte;
    }
  });
});
;define("dummy/helpers/map-by", ["exports", "ember-composable-helpers/helpers/map-by"], function (_exports, _mapBy) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _mapBy.default;
    }
  });
});
;define("dummy/helpers/map", ["exports", "ember-composable-helpers/helpers/map"], function (_exports, _map) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _map.default;
    }
  });
});
;define("dummy/helpers/media", ["exports", "ember-responsive/helpers/media"], function (_exports, _media) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _media.default;
    }
  });
  Object.defineProperty(_exports, "media", {
    enumerable: true,
    get: function () {
      return _media.media;
    }
  });
});
;define("dummy/helpers/next", ["exports", "ember-composable-helpers/helpers/next"], function (_exports, _next) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _next.default;
    }
  });
  Object.defineProperty(_exports, "next", {
    enumerable: true,
    get: function () {
      return _next.next;
    }
  });
});
;define("dummy/helpers/noop", ["exports", "ember-composable-helpers/helpers/noop"], function (_exports, _noop) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _noop.default;
    }
  });
  Object.defineProperty(_exports, "noop", {
    enumerable: true,
    get: function () {
      return _noop.noop;
    }
  });
});
;define("dummy/helpers/not-eq", ["exports", "ember-truth-helpers/helpers/not-equal"], function (_exports, _notEqual) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _notEqual.default;
    }
  });
  Object.defineProperty(_exports, "notEq", {
    enumerable: true,
    get: function () {
      return _notEqual.notEq;
    }
  });
});
;define("dummy/helpers/not", ["exports", "ember-truth-helpers/helpers/not"], function (_exports, _not) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _not.default;
    }
  });
  Object.defineProperty(_exports, "not", {
    enumerable: true,
    get: function () {
      return _not.not;
    }
  });
});
;define("dummy/helpers/object-at", ["exports", "ember-composable-helpers/helpers/object-at"], function (_exports, _objectAt) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _objectAt.default;
    }
  });
  Object.defineProperty(_exports, "objectAt", {
    enumerable: true,
    get: function () {
      return _objectAt.objectAt;
    }
  });
});
;define("dummy/helpers/optional", ["exports", "ember-composable-helpers/helpers/optional"], function (_exports, _optional) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _optional.default;
    }
  });
  Object.defineProperty(_exports, "optional", {
    enumerable: true,
    get: function () {
      return _optional.optional;
    }
  });
});
;define("dummy/helpers/or", ["exports", "ember-truth-helpers/helpers/or"], function (_exports, _or) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _or.default;
    }
  });
  Object.defineProperty(_exports, "or", {
    enumerable: true,
    get: function () {
      return _or.or;
    }
  });
});
;define("dummy/helpers/perform", ["exports", "ember-concurrency/helpers/perform"], function (_exports, _perform) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _perform.default;
    }
  });
});
;define("dummy/helpers/pipe-action", ["exports", "ember-composable-helpers/helpers/pipe-action"], function (_exports, _pipeAction) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _pipeAction.default;
    }
  });
});
;define("dummy/helpers/pipe", ["exports", "ember-composable-helpers/helpers/pipe"], function (_exports, _pipe) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _pipe.default;
    }
  });
  Object.defineProperty(_exports, "pipe", {
    enumerable: true,
    get: function () {
      return _pipe.pipe;
    }
  });
});
;define("dummy/helpers/pluralize", ["exports", "ember-inflector/lib/helpers/pluralize"], function (_exports, _pluralize) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _pluralize.default;
  _exports.default = _default;
});
;define("dummy/helpers/previous", ["exports", "ember-composable-helpers/helpers/previous"], function (_exports, _previous) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _previous.default;
    }
  });
  Object.defineProperty(_exports, "previous", {
    enumerable: true,
    get: function () {
      return _previous.previous;
    }
  });
});
;define("dummy/helpers/queue", ["exports", "ember-composable-helpers/helpers/queue"], function (_exports, _queue) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _queue.default;
    }
  });
  Object.defineProperty(_exports, "queue", {
    enumerable: true,
    get: function () {
      return _queue.queue;
    }
  });
});
;define("dummy/helpers/range", ["exports", "ember-composable-helpers/helpers/range"], function (_exports, _range) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _range.default;
    }
  });
  Object.defineProperty(_exports, "range", {
    enumerable: true,
    get: function () {
      return _range.range;
    }
  });
});
;define("dummy/helpers/reduce", ["exports", "ember-composable-helpers/helpers/reduce"], function (_exports, _reduce) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _reduce.default;
    }
  });
});
;define("dummy/helpers/reject-by", ["exports", "ember-composable-helpers/helpers/reject-by"], function (_exports, _rejectBy) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _rejectBy.default;
    }
  });
});
;define("dummy/helpers/repeat", ["exports", "ember-composable-helpers/helpers/repeat"], function (_exports, _repeat) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _repeat.default;
    }
  });
  Object.defineProperty(_exports, "repeat", {
    enumerable: true,
    get: function () {
      return _repeat.repeat;
    }
  });
});
;define("dummy/helpers/reverse", ["exports", "ember-composable-helpers/helpers/reverse"], function (_exports, _reverse) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _reverse.default;
    }
  });
});
;define("dummy/helpers/shuffle", ["exports", "ember-composable-helpers/helpers/shuffle"], function (_exports, _shuffle) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _shuffle.default;
    }
  });
  Object.defineProperty(_exports, "shuffle", {
    enumerable: true,
    get: function () {
      return _shuffle.shuffle;
    }
  });
});
;define("dummy/helpers/singularize", ["exports", "ember-inflector/lib/helpers/singularize"], function (_exports, _singularize) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _singularize.default;
  _exports.default = _default;
});
;define("dummy/helpers/slice", ["exports", "ember-composable-helpers/helpers/slice"], function (_exports, _slice) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _slice.default;
    }
  });
});
;define("dummy/helpers/sort-by", ["exports", "ember-composable-helpers/helpers/sort-by"], function (_exports, _sortBy) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _sortBy.default;
    }
  });
});
;define("dummy/helpers/svg-jar", ["exports", "ember-svg-jar/utils/make-helper", "ember-svg-jar/utils/make-svg"], function (_exports, _makeHelper, _makeSvg) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.svgJar = svgJar;
  _exports.default = void 0;

  function getInlineAsset(assetId) {
    try {
      /* eslint-disable global-require */
      return require(`ember-svg-jar/inlined/${assetId}`).default;
    } catch (err) {
      return null;
    }
  }

  function svgJar(assetId, svgAttrs) {
    return (0, _makeSvg.default)(assetId, svgAttrs, getInlineAsset);
  }

  var _default = (0, _makeHelper.default)(svgJar);

  _exports.default = _default;
});
;define("dummy/helpers/take", ["exports", "ember-composable-helpers/helpers/take"], function (_exports, _take) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _take.default;
    }
  });
});
;define("dummy/helpers/task", ["exports", "ember-concurrency/helpers/task"], function (_exports, _task) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _task.default;
    }
  });
});
;define("dummy/helpers/titleize", ["exports", "ember-cli-string-helpers/helpers/titleize"], function (_exports, _titleize) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _titleize.default;
    }
  });
  Object.defineProperty(_exports, "titleize", {
    enumerable: true,
    get: function () {
      return _titleize.titleize;
    }
  });
});
;define("dummy/helpers/toggle-action", ["exports", "ember-composable-helpers/helpers/toggle-action"], function (_exports, _toggleAction) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _toggleAction.default;
    }
  });
});
;define("dummy/helpers/toggle", ["exports", "ember-composable-helpers/helpers/toggle"], function (_exports, _toggle) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _toggle.default;
    }
  });
  Object.defineProperty(_exports, "toggle", {
    enumerable: true,
    get: function () {
      return _toggle.toggle;
    }
  });
});
;define("dummy/helpers/trim", ["exports", "ember-cli-string-helpers/helpers/trim"], function (_exports, _trim) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _trim.default;
    }
  });
  Object.defineProperty(_exports, "trim", {
    enumerable: true,
    get: function () {
      return _trim.trim;
    }
  });
});
;define("dummy/helpers/truncate", ["exports", "ember-cli-string-helpers/helpers/truncate"], function (_exports, _truncate) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _truncate.default;
    }
  });
  Object.defineProperty(_exports, "truncate", {
    enumerable: true,
    get: function () {
      return _truncate.truncate;
    }
  });
});
;define("dummy/helpers/type-signature", ["exports", "ember-cli-addon-docs/helpers/type-signature"], function (_exports, _typeSignature) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _typeSignature.default;
    }
  });
});
;define("dummy/helpers/underscore", ["exports", "ember-cli-string-helpers/helpers/underscore"], function (_exports, _underscore) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _underscore.default;
    }
  });
  Object.defineProperty(_exports, "underscore", {
    enumerable: true,
    get: function () {
      return _underscore.underscore;
    }
  });
});
;define("dummy/helpers/union", ["exports", "ember-composable-helpers/helpers/union"], function (_exports, _union) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _union.default;
    }
  });
});
;define("dummy/helpers/uppercase", ["exports", "ember-cli-string-helpers/helpers/uppercase"], function (_exports, _uppercase) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _uppercase.default;
    }
  });
  Object.defineProperty(_exports, "uppercase", {
    enumerable: true,
    get: function () {
      return _uppercase.uppercase;
    }
  });
});
;define("dummy/helpers/w", ["exports", "ember-cli-string-helpers/helpers/w"], function (_exports, _w) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _w.default;
    }
  });
  Object.defineProperty(_exports, "w", {
    enumerable: true,
    get: function () {
      return _w.w;
    }
  });
});
;define("dummy/helpers/without", ["exports", "ember-composable-helpers/helpers/without"], function (_exports, _without) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _without.default;
    }
  });
  Object.defineProperty(_exports, "without", {
    enumerable: true,
    get: function () {
      return _without.without;
    }
  });
});
;define("dummy/helpers/xor", ["exports", "ember-truth-helpers/helpers/xor"], function (_exports, _xor) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _xor.default;
    }
  });
  Object.defineProperty(_exports, "xor", {
    enumerable: true,
    get: function () {
      return _xor.xor;
    }
  });
});
;define("dummy/initializers/add-modals-container", ["exports", "ember-modal-dialog/initializers/add-modals-container"], function (_exports, _addModalsContainer) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = {
    name: 'add-modals-container',
    initialize: _addModalsContainer.default
  };
  _exports.default = _default;
});
;define("dummy/initializers/component-styles", ["exports", "ember-component-css/initializers/component-styles", "dummy/mixins/style-namespacing-extras"], function (_exports, _componentStyles, _styleNamespacingExtras) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _componentStyles.default;
    }
  });
  Object.defineProperty(_exports, "initialize", {
    enumerable: true,
    get: function () {
      return _componentStyles.initialize;
    }
  });
  // eslint-disable-next-line ember/new-module-imports
  Ember.Component.reopen(_styleNamespacingExtras.default);
});
;define("dummy/initializers/container-debug-adapter", ["exports", "ember-resolver/resolvers/classic/container-debug-adapter"], function (_exports, _containerDebugAdapter) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = {
    name: 'container-debug-adapter',

    initialize() {
      let app = arguments[1] || arguments[0];
      app.register('container-debug-adapter:main', _containerDebugAdapter.default);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }

  };
  _exports.default = _default;
});
;define("dummy/initializers/ember-concurrency", ["exports", "ember-concurrency/initializers/ember-concurrency"], function (_exports, _emberConcurrency) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _emberConcurrency.default;
    }
  });
});
;define("dummy/initializers/ember-data-data-adapter", ["exports", "@ember-data/debug/setup"], function (_exports, _setup) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _setup.default;
    }
  });
});
;define("dummy/initializers/ember-data", ["exports", "ember-data", "ember-data/setup-container"], function (_exports, _emberData, _setupContainer) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /*
    This code initializes EmberData in an Ember application.
  
    It ensures that the `store` service is automatically injected
    as the `store` property on all routes and controllers.
  */
  var _default = {
    name: 'ember-data',
    initialize: _setupContainer.default
  };
  _exports.default = _default;
});
;define("dummy/initializers/ember-keyboard-first-responder-inputs", ["exports", "ember-keyboard/initializers/ember-keyboard-first-responder-inputs"], function (_exports, _emberKeyboardFirstResponderInputs) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _emberKeyboardFirstResponderInputs.default;
    }
  });
  Object.defineProperty(_exports, "initialize", {
    enumerable: true,
    get: function () {
      return _emberKeyboardFirstResponderInputs.initialize;
    }
  });
});
;define("dummy/initializers/ember-responsive-breakpoints", ["exports", "ember-responsive/initializers/responsive"], function (_exports, _responsive) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _responsive.default;
  _exports.default = _default;
});
;define("dummy/initializers/export-application-global", ["exports", "dummy/config/environment"], function (_exports, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.initialize = initialize;
  _exports.default = void 0;

  function initialize() {
    var application = arguments[1] || arguments[0];

    if (_environment.default.exportApplicationGlobal !== false) {
      var theGlobal;

      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _environment.default.exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = Ember.String.classify(_environment.default.modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;
        application.reopen({
          willDestroy: function () {
            this._super.apply(this, arguments);

            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  var _default = {
    name: 'export-application-global',
    initialize: initialize
  };
  _exports.default = _default;
});
;define("dummy/initializers/inject-media", ["exports", "ember-cli-addon-docs/initializers/inject-media"], function (_exports, _injectMedia) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _injectMedia.default;
    }
  });
  Object.defineProperty(_exports, "initialize", {
    enumerable: true,
    get: function () {
      return _injectMedia.initialize;
    }
  });
});
;define("dummy/initializers/liquid-fire", ["exports", "liquid-fire/velocity-ext"], function (_exports, _velocityExt) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = {
    name: 'liquid-fire',
    initialize: function () {}
  };
  _exports.default = _default;
});
;define("dummy/initializers/route-anchor-jump", ["exports", "ember-cli-addon-docs/initializers/route-anchor-jump"], function (_exports, _routeAnchorJump) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _routeAnchorJump.default;
    }
  });
  Object.defineProperty(_exports, "initialize", {
    enumerable: true,
    get: function () {
      return _routeAnchorJump.initialize;
    }
  });
});
;define("dummy/instance-initializers/ember-data", ["exports", "ember-data/initialize-store-service"], function (_exports, _initializeStoreService) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = {
    name: 'ember-data',
    initialize: _initializeStoreService.default
  };
  _exports.default = _default;
});
;define("dummy/instance-initializers/ember-href-to", ["exports", "ember-href-to/href-to"], function (_exports, _hrefTo) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  function closestLink(el) {
    if (el.closest) {
      return el.closest('a');
    } else {
      el = el.parentElement;

      while (el && el.tagName !== 'A') {
        el = el.parentElement;
      }

      return el;
    }
  }

  var _default = {
    name: 'ember-href-to',

    initialize(applicationInstance) {
      // we only want this to run in the browser, not in fastboot
      if (typeof FastBoot === "undefined") {
        let hrefToClickHandler = function _hrefToClickHandler(e) {
          let link = e.target.tagName === 'A' ? e.target : closestLink(e.target);

          if (link) {
            let hrefTo = new _hrefTo.default(applicationInstance, e, link);
            hrefTo.maybeHandle();
          }
        };

        document.body.addEventListener('click', hrefToClickHandler); // Teardown on app destruction: clean up the event listener to avoid
        // memory leaks.

        applicationInstance.reopen({
          willDestroy() {
            document.body.removeEventListener('click', hrefToClickHandler);
            return this._super(...arguments);
          }

        });
      }
    }

  };
  _exports.default = _default;
});
;define("dummy/instance-initializers/route-styles", ["exports", "ember-component-css/instance-initializers/route-styles"], function (_exports, _routeStyles) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _routeStyles.default;
    }
  });
  Object.defineProperty(_exports, "initialize", {
    enumerable: true,
    get: function () {
      return _routeStyles.initialize;
    }
  });
});
;define("dummy/locations/router-scroll", ["exports", "ember-router-scroll/locations/router-scroll"], function (_exports, _routerScroll) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _routerScroll.default;
    }
  });
});
;define("dummy/mixins/style-namespacing-extras", ["exports", "ember-component-css/mixins/style-namespacing-extras"], function (_exports, _styleNamespacingExtras) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _styleNamespacingExtras.default;
    }
  });
});
;define("dummy/models/class", ["exports", "ember-cli-addon-docs/models/class"], function (_exports, _class) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _class.default;
    }
  });
});
;define("dummy/models/component", ["exports", "ember-cli-addon-docs/models/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
;define("dummy/models/module", ["exports", "ember-cli-addon-docs/models/module"], function (_exports, _module) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _module.default;
    }
  });
});
;define("dummy/models/project", ["exports", "ember-cli-addon-docs/models/project"], function (_exports, _project) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _project.default;
    }
  });
});
;define("dummy/router", ["exports", "ember-cli-addon-docs/router", "dummy/config/environment"], function (_exports, _router, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  const Router = _router.default.extend({
    location: _environment.default.locationType,
    rootURL: _environment.default.rootURL
  });

  Router.map(function () {
    (0, _router.docsRoute)(this, function () {
      this.route('addons');
      this.route('core-concepts');
      this.route('creating-an-engine');
      this.route('deploying-and-fastboot');
      this.route('lazy-loading');
      this.route('linking-and-external-links');
      this.route('mounting-engines');
      this.route('services');
      this.route('sharing-components-and-more');
      this.route('testing');
      this.route('what-are-engines');
      this.route('why-use-engines');
      this.route('not-found', {
        path: '/*path'
      });
    });
  });
  var _default = Router;
  _exports.default = _default;
});
;define("dummy/routes/docs", ["exports", "ember-cli-addon-docs/routes/docs"], function (_exports, _docs) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _docs.default;
    }
  });
});
;define("dummy/routes/docs/api/item", ["exports", "ember-cli-addon-docs/routes/docs/api/item"], function (_exports, _item) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _item.default;
    }
  });
});
;define("dummy/serializers/-addon-docs", ["exports", "ember-cli-addon-docs/serializers/-addon-docs"], function (_exports, _addonDocs) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _addonDocs.default;
    }
  });
});
;define("dummy/serializers/-default", ["exports", "@ember-data/serializer/json"], function (_exports, _json) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _json.default;
    }
  });
});
;define("dummy/serializers/-json-api", ["exports", "@ember-data/serializer/json-api"], function (_exports, _jsonApi) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _jsonApi.default;
    }
  });
});
;define("dummy/serializers/-rest", ["exports", "@ember-data/serializer/rest"], function (_exports, _rest) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _rest.default;
    }
  });
});
;define("dummy/services/adapter", ["exports", "ember-fetch-adapter"], function (_exports, _emberFetchAdapter) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _emberFetchAdapter.default;
    }
  });
});
;define("dummy/services/docs-fetch", ["exports", "ember-cli-addon-docs/services/docs-fetch"], function (_exports, _docsFetch) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _docsFetch.default;
    }
  });
});
;define("dummy/services/docs-routes", ["exports", "ember-cli-addon-docs/services/docs-routes"], function (_exports, _docsRoutes) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _docsRoutes.default;
    }
  });
});
;define("dummy/services/docs-search", ["exports", "ember-cli-addon-docs/services/docs-search"], function (_exports, _docsSearch) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _docsSearch.default;
    }
  });
});
;define("dummy/services/keyboard", ["exports", "ember-keyboard/services/keyboard"], function (_exports, _keyboard) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _keyboard.default;
    }
  });
});
;define("dummy/services/liquid-fire-transitions", ["exports", "liquid-fire/transition-map"], function (_exports, _transitionMap) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _transitionMap.default;
  _exports.default = _default;
});
;define("dummy/services/media", ["exports", "ember-responsive/services/media"], function (_exports, _media) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _media.default;
  _exports.default = _default;
});
;define("dummy/services/modal-dialog", ["exports", "dummy/config/environment"], function (_exports, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  function computedFromConfig(prop) {
    return Ember.computed(function () {
      return _environment.default['ember-modal-dialog'] && _environment.default['ember-modal-dialog'][prop];
    });
  }

  var _default = Ember.Service.extend({
    hasEmberTether: computedFromConfig('hasEmberTether'),
    hasLiquidWormhole: computedFromConfig('hasLiquidWormhole'),
    hasLiquidTether: computedFromConfig('hasLiquidTether'),
    destinationElementId: null // injected by initializer

  });

  _exports.default = _default;
});
;define("dummy/services/project-version", ["exports", "ember-cli-addon-docs/services/project-version"], function (_exports, _projectVersion) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _projectVersion.default;
    }
  });
});
;define("dummy/services/router-scroll", ["exports", "ember-router-scroll/services/router-scroll"], function (_exports, _routerScroll) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _routerScroll.default;
    }
  });
});
;define("dummy/services/store", ["exports", "ember-data/store"], function (_exports, _store) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _store.default;
    }
  });
});
;define("dummy/templates/application", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "8lyxQ/cb",
    "block": "{\"symbols\":[],\"statements\":[[1,[28,\"docs-header\",null,[[\"name\"],[\"Engines\"]]],false],[0,\"\\n\\n\"],[1,[22,\"outlet\"],false],[0,\"\\n\\n\"],[1,[22,\"docs-keyboard-shortcuts\"],false],[0,\"\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "dummy/templates/application.hbs"
    }
  });

  _exports.default = _default;
});
;define("dummy/templates/docs", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "86KvETJn",
    "block": "{\"symbols\":[\"viewer\",\"nav\"],\"statements\":[[4,\"docs-viewer\",null,null,{\"statements\":[[4,\"component\",[[28,\"-assert-implicit-component-helper-argument\",[[23,1,[\"nav\"]],\"expected `viewer.nav` to be a contextual component but found a string. Did you mean `(component viewer.nav)`? ('dummy/templates/docs.hbs' @ L2:C5) \"],null]],null,{\"statements\":[[0,\"    \"],[1,[28,\"component\",[[28,\"-assert-implicit-component-helper-argument\",[[23,2,[\"section\"]],\"expected `nav.section` to be a contextual component but found a string. Did you mean `(component nav.section)`? ('dummy/templates/docs.hbs' @ L3:C6) \"],null],\"Introduction\"],null],false],[0,\"\\n    \"],[1,[28,\"component\",[[28,\"-assert-implicit-component-helper-argument\",[[23,2,[\"item\"]],\"expected `nav.item` to be a contextual component but found a string. Did you mean `(component nav.item)`? ('dummy/templates/docs.hbs' @ L4:C6) \"],null],\"Quickstart\",\"docs.index\"],null],false],[0,\"\\n    \"],[1,[28,\"component\",[[28,\"-assert-implicit-component-helper-argument\",[[23,2,[\"item\"]],\"expected `nav.item` to be a contextual component but found a string. Did you mean `(component nav.item)`? ('dummy/templates/docs.hbs' @ L5:C6) \"],null],\"Addons\",\"docs.addons\"],null],false],[0,\"\\n    \"],[1,[28,\"component\",[[28,\"-assert-implicit-component-helper-argument\",[[23,2,[\"item\"]],\"expected `nav.item` to be a contextual component but found a string. Did you mean `(component nav.item)`? ('dummy/templates/docs.hbs' @ L6:C6) \"],null],\"Core concepts\",\"docs.core-concepts\"],null],false],[0,\"\\n    \"],[1,[28,\"component\",[[28,\"-assert-implicit-component-helper-argument\",[[23,2,[\"item\"]],\"expected `nav.item` to be a contextual component but found a string. Did you mean `(component nav.item)`? ('dummy/templates/docs.hbs' @ L7:C6) \"],null],\"Creating an engine\",\"docs.creating-an-engine\"],null],false],[0,\"\\n    \"],[1,[28,\"component\",[[28,\"-assert-implicit-component-helper-argument\",[[23,2,[\"item\"]],\"expected `nav.item` to be a contextual component but found a string. Did you mean `(component nav.item)`? ('dummy/templates/docs.hbs' @ L8:C6) \"],null],\"Deploying and fastboot\",\"docs.deploying-and-fastboot\"],null],false],[0,\"\\n    \"],[1,[28,\"component\",[[28,\"-assert-implicit-component-helper-argument\",[[23,2,[\"item\"]],\"expected `nav.item` to be a contextual component but found a string. Did you mean `(component nav.item)`? ('dummy/templates/docs.hbs' @ L9:C6) \"],null],\"Lazy loading\",\"docs.lazy-loading\"],null],false],[0,\"\\n    \"],[1,[28,\"component\",[[28,\"-assert-implicit-component-helper-argument\",[[23,2,[\"item\"]],\"expected `nav.item` to be a contextual component but found a string. Did you mean `(component nav.item)`? ('dummy/templates/docs.hbs' @ L10:C6) \"],null],\"Linking and external links\",\"docs.linking-and-external-links\"],null],false],[0,\"\\n    \"],[1,[28,\"component\",[[28,\"-assert-implicit-component-helper-argument\",[[23,2,[\"item\"]],\"expected `nav.item` to be a contextual component but found a string. Did you mean `(component nav.item)`? ('dummy/templates/docs.hbs' @ L11:C6) \"],null],\"Mounting engines\",\"docs.mounting-engines\"],null],false],[0,\"\\n    \"],[1,[28,\"component\",[[28,\"-assert-implicit-component-helper-argument\",[[23,2,[\"item\"]],\"expected `nav.item` to be a contextual component but found a string. Did you mean `(component nav.item)`? ('dummy/templates/docs.hbs' @ L12:C6) \"],null],\"Services\",\"docs.services\"],null],false],[0,\"\\n    \"],[1,[28,\"component\",[[28,\"-assert-implicit-component-helper-argument\",[[23,2,[\"item\"]],\"expected `nav.item` to be a contextual component but found a string. Did you mean `(component nav.item)`? ('dummy/templates/docs.hbs' @ L13:C6) \"],null],\"Sharing components and more\",\"docs.sharing-components-and-more\"],null],false],[0,\"\\n    \"],[1,[28,\"component\",[[28,\"-assert-implicit-component-helper-argument\",[[23,2,[\"item\"]],\"expected `nav.item` to be a contextual component but found a string. Did you mean `(component nav.item)`? ('dummy/templates/docs.hbs' @ L14:C6) \"],null],\"Testing\",\"docs.testing\"],null],false],[0,\"\\n    \"],[1,[28,\"component\",[[28,\"-assert-implicit-component-helper-argument\",[[23,2,[\"item\"]],\"expected `nav.item` to be a contextual component but found a string. Did you mean `(component nav.item)`? ('dummy/templates/docs.hbs' @ L15:C6) \"],null],\"What are engines\",\"docs.what-are-engines\"],null],false],[0,\"\\n    \"],[1,[28,\"component\",[[28,\"-assert-implicit-component-helper-argument\",[[23,2,[\"item\"]],\"expected `nav.item` to be a contextual component but found a string. Did you mean `(component nav.item)`? ('dummy/templates/docs.hbs' @ L16:C6) \"],null],\"Why use engines\",\"docs.why-use-engines\"],null],false],[0,\"\\n\"]],\"parameters\":[2]},null],[0,\"\\n\"],[4,\"component\",[[28,\"-assert-implicit-component-helper-argument\",[[23,1,[\"main\"]],\"expected `viewer.main` to be a contextual component but found a string. Did you mean `(component viewer.main)`? ('dummy/templates/docs.hbs' @ L19:C5) \"],null]],null,{\"statements\":[[0,\"    \"],[1,[22,\"outlet\"],false],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[1]},null]],\"hasEval\":false}",
    "meta": {
      "moduleName": "dummy/templates/docs.hbs"
    }
  });

  _exports.default = _default;
});
;define("dummy/templates/docs/addons", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "U4wT0dPA",
    "block": "{\"symbols\":[],\"statements\":[[7,\"div\",true],[10,\"class\",\"docs-md\"],[8],[7,\"h1\",true],[10,\"id\",\"engines-addons\"],[10,\"class\",\"docs-md__h1\"],[8],[0,\"Engines & Addons\"],[9],[0,\"\\n    \"],[7,\"p\",true],[8],[0,\"If you want to use an addon in an engine, you have to add it to the engines \"],[7,\"code\",true],[8],[0,\"dependencies\"],[9],[0,\". This is necessary for the following types of addons:\"],[9],[0,\"\\n\"],[7,\"ul\",true],[8],[0,\"\\n\"],[7,\"li\",true],[8],[0,\"Addons that provide components or helpers that you want to use in the engine\"],[9],[0,\"\\n\"],[7,\"li\",true],[8],[0,\"Addons that provide other utils or similar that you want to use in the engine\"],[9],[0,\"\\n\"],[7,\"li\",true],[8],[0,\"Addons that provide services that are not passed through from the host app\"],[9],[0,\"\\n\"],[9],[0,\"\\n\"],[7,\"p\",true],[8],[0,\"The following types of addons should be placed in the \"],[7,\"code\",true],[8],[0,\"devDependencies\"],[9],[0,\":\"],[9],[0,\"\\n\"],[7,\"ul\",true],[8],[0,\"\\n\"],[7,\"li\",true],[8],[0,\"Addons that provide services that are passed through from the host app\"],[9],[0,\"\\n\"],[7,\"li\",true],[8],[0,\"Addons that do build adaptions\"],[9],[0,\"\\n\"],[9],[0,\"\\n\\n      \"],[7,\"h2\",true],[10,\"id\",\"using-ember-data\"],[10,\"class\",\"docs-md__h2\"],[8],[7,\"a\",true],[10,\"href\",\"#using-ember-data\"],[10,\"class\",\"heading-anchor\"],[8],[0,\"Using Ember Data\"],[9],[9],[0,\"\\n    \"],[7,\"p\",true],[8],[0,\"When working with Ember Data, the models are defined in the host app, and you will need to pass the \"],[7,\"code\",true],[8],[0,\"store\"],[9],[0,\" service through to the engine as a dependency. This way, the host app and the engine use the same store and models. You then need to add \"],[7,\"code\",true],[8],[0,\"ember-data\"],[9],[0,\" as a \"],[7,\"code\",true],[8],[0,\"devDependency\"],[9],[0,\" to your engine.\"],[9],[0,\"\\n\"],[7,\"p\",true],[8],[0,\"The easiest way to realise this is to define your models in a shared addon, which is included by both your host app and your engine.\"],[9],[0,\"\\n\\n      \"],[7,\"h2\",true],[10,\"id\",\"addon-deduplication\"],[10,\"class\",\"docs-md__h2\"],[8],[7,\"a\",true],[10,\"href\",\"#addon-deduplication\"],[10,\"class\",\"heading-anchor\"],[8],[0,\"Addon deduplication\"],[9],[9],[0,\"\\n    \"],[7,\"p\",true],[8],[0,\"If you are using ember engines \"],[7,\"strong\",true],[8],[0,\"v0.7.1 or higher\"],[9],[0,\": Use \"],[7,\"code\",true],[8],[0,\"EMBER_ENGINES_ADDON_DEDUPE\"],[9],[0,\" environment variable to deduplicate the nested addons of lazy engine which are also host app addons. More details at \"],[7,\"a\",true],[10,\"href\",\"https://github.com/ember-engines/ember-engines/pull/595\"],[10,\"class\",\"docs-md__a\"],[8],[0,\"#595\"],[9],[0,\".\"],[9],[0,\"\\n\"],[7,\"p\",true],[8],[0,\"If you are using ember engines \"],[7,\"strong\",true],[8],[0,\"v0.7.0 or less\"],[9],[0,\", follow the explanation bellow:\"],[9],[0,\"\\n\"],[7,\"p\",true],[8],[0,\"ember-engines will automatically try to deduplicate addons used by your host app and (lazy loaded) engine(s). This means that addons that both the host app and an engine rely on, are only included in the vendor bundle of the host app. This ensures that you do not ship the addon code multiple times to your users.\"],[9],[0,\"\\n\"],[7,\"p\",true],[8],[0,\"If addons are not included in the host app, they will be included in the engine's vendor bundle.\"],[9],[0,\"\\n\"],[7,\"p\",true],[8],[0,\"Note that the deduplication between host app and addon depends on the \"],[7,\"code\",true],[8],[0,\"cacheKeyForTree()\"],[9],[0,\" method of the addon. It will only deduplicate if the cache key returned by that method is the same. This will by default be the case, unless the addon provides a custom \"],[7,\"code\",true],[8],[0,\"treeForAddon()\"],[9],[0,\" hook. If that is the case, the addon should provide a custom \"],[7,\"code\",true],[8],[0,\"cacheKeyForTree()\"],[9],[0,\" method that returns a static key - for example:\"],[9],[0,\"\\n\"],[7,\"pre\",true],[10,\"class\",\"docs-md__code\"],[8],[7,\"code\",true],[10,\"class\",\"undefinedjs\"],[8],[7,\"span\",true],[10,\"class\",\"hljs-keyword\"],[8],[0,\"const\"],[9],[0,\" calculateCacheKeyForTree = \"],[7,\"span\",true],[10,\"class\",\"hljs-built_in\"],[8],[0,\"require\"],[9],[0,\"(\"],[7,\"span\",true],[10,\"class\",\"hljs-string\"],[8],[0,\"'calculate-cache-key-for-tree'\"],[9],[0,\");\\n\\n\"],[7,\"span\",true],[10,\"class\",\"hljs-built_in\"],[8],[0,\"module\"],[9],[0,\".exports = {\\n  \"],[7,\"span\",true],[10,\"class\",\"hljs-attr\"],[8],[0,\"name\"],[9],[0,\": \"],[7,\"span\",true],[10,\"class\",\"hljs-built_in\"],[8],[0,\"require\"],[9],[0,\"(\"],[7,\"span\",true],[10,\"class\",\"hljs-string\"],[8],[0,\"'./package'\"],[9],[0,\").name,\\n\\n  treeForAddon() {\\n    \"],[7,\"span\",true],[10,\"class\",\"hljs-comment\"],[8],[0,\"// returns custom tree - overwriting this hook disables the default caching!\"],[9],[0,\"\\n  },\\n\\n  cacheKeyForTree(treeType) {\\n    \"],[7,\"span\",true],[10,\"class\",\"hljs-keyword\"],[8],[0,\"if\"],[9],[0,\" (treeType === \"],[7,\"span\",true],[10,\"class\",\"hljs-string\"],[8],[0,\"'addon'\"],[9],[0,\") {\\n      \"],[7,\"span\",true],[10,\"class\",\"hljs-keyword\"],[8],[0,\"return\"],[9],[0,\" calculateCacheKeyForTree(treeType, \"],[7,\"span\",true],[10,\"class\",\"hljs-keyword\"],[8],[0,\"this\"],[9],[0,\");\\n    }\\n\\n    \"],[7,\"span\",true],[10,\"class\",\"hljs-keyword\"],[8],[0,\"return\"],[9],[0,\" \"],[7,\"span\",true],[10,\"class\",\"hljs-keyword\"],[8],[0,\"this\"],[9],[0,\"._super.cacheKeyForTree.apply(\"],[7,\"span\",true],[10,\"class\",\"hljs-keyword\"],[8],[0,\"this\"],[9],[0,\", \"],[7,\"span\",true],[10,\"class\",\"hljs-built_in\"],[8],[0,\"arguments\"],[9],[0,\");\\n  }\\n};\"],[9],[9],[0,\"\\n\"],[7,\"p\",true],[8],[0,\"Isolation and separation of responsibilities is generally hard to solve. The most recurrent scenario in a composable app with Ember Engines is: \"],[7,\"code\",true],[8],[0,\"Imagine the css or components that are only used by engine-a, engine-b and engine-c\"],[9],[0,\"  all possible cases have down sides here:\"],[9],[0,\"\\n\"],[7,\"p\",true],[8],[0,\" 1) Include shared deps into the host app - Downside: Increases initial bundle size.\"],[9],[0,\"\\n\"],[7,\"p\",true],[8],[0,\" 2) Include shared deps into each engine bundle - Downside: Duplicated stuff in multiple engine bundles.\"],[9],[0,\"\\n\"],[7,\"p\",true],[8],[0,\" 3) Somehow split out shared deps into dedicated bundles \"],[7,\"code\",true],[8],[0,\"(e.g. /engine-assets/shared-by-a-and-b.js)\"],[9],[0,\" - Downside: You might end up with 20 bundles \"],[7,\"code\",true],[8],[0,\"(e.g. shared-by-a-and-b, shared-by-b-and-c-, shared-by-a-b-and-c, ...)\"],[9],[0,\", and it is probably pretty complicated from a built step perspective.\"],[9],[0,\"\\n\"],[7,\"p\",true],[8],[0,\"Engines currently take the second approach, but may allow more options in the future.\"],[9],[0,\"\\n\\n      \"],[7,\"h2\",true],[10,\"id\",\"managing-multiple-addon-versions\"],[10,\"class\",\"docs-md__h2\"],[8],[7,\"a\",true],[10,\"href\",\"#managing-multiple-addon-versions\"],[10,\"class\",\"heading-anchor\"],[8],[0,\"Managing multiple addon versions\"],[9],[9],[0,\"\\n    \"],[7,\"p\",true],[8],[0,\"When working with engines, it is important to avoid including different versions of the same addon. Currently, only one addon version can actually be loaded at a time. If your host app and engines depend on different versions of an addon, you will run into hard to control issues.\"],[9],[0,\"\\n\"],[7,\"p\",true],[8],[0,\" For example, imagine the host app depends on \"],[7,\"code\",true],[8],[0,\"ember-power-select^1.0.0\"],[9],[0,\", engine-a depends on \"],[7,\"code\",true],[8],[0,\"ember-power-select~2.0.0\"],[9],[0,\" and engine-b depends on \"],[7,\"code\",true],[8],[0,\"ember-power-select~2.1.0\"],[9],[0,\".\"],[9],[0,\"\\n\"],[7,\"p\",true],[8],[0,\" Now, three different versions of ember-power-select would be included in the respective vendor bundles. But which version would actually be used in your app/engine would depend on the order in which the bundles are loaded.\"],[9],[0,\"\\n\"],[7,\"p\",true],[8],[0,\" Generally, you should ensure that only one version of a given addon is included across your host app and engines. A  great way to ensure this is to use \"],[7,\"a\",true],[10,\"href\",\"https://github.com/salsify/ember-cli-dependency-lint\"],[10,\"class\",\"docs-md__a\"],[8],[0,\"ember-cli-dependency-lint\"],[9],[0,\", which will tell you if multiple versions of an addon are installed.\"],[9],[0,\"\\n\"],[7,\"p\",true],[8],[0,\" If you use Yarn, you can use \"],[7,\"a\",true],[10,\"href\",\"https://yarnpkg.com/lang/en/docs/selective-version-resolutions/\"],[10,\"class\",\"docs-md__a\"],[8],[0,\"resolutions\"],[9],[0,\" to force a specific version to be used by an addon. In the above example, you could add the following to your host apps \"],[7,\"code\",true],[8],[0,\"package.json\"],[9],[0,\":\"],[9],[0,\"\\n\"],[7,\"pre\",true],[10,\"class\",\"docs-md__code\"],[8],[7,\"code\",true],[10,\"class\",\"undefinedjson\"],[8],[0,\"{\\n  \"],[7,\"span\",true],[10,\"class\",\"hljs-attr\"],[8],[0,\"\\\"dependencies\\\"\"],[9],[0,\": {},\\n  \"],[7,\"span\",true],[10,\"class\",\"hljs-attr\"],[8],[0,\"\\\"devDependencies\\\"\"],[9],[0,\": {},\\n  \"],[7,\"span\",true],[10,\"class\",\"hljs-attr\"],[8],[0,\"\\\"resolutions\\\"\"],[9],[0,\": {\\n    \"],[7,\"span\",true],[10,\"class\",\"hljs-attr\"],[8],[0,\"\\\"**/ember-power-select\\\"\"],[9],[0,\": \"],[7,\"span\",true],[10,\"class\",\"hljs-string\"],[8],[0,\"\\\"^1.0.0\\\"\"],[9],[0,\"\\n  }\\n}\"],[9],[9],[0,\"\\n\"],[7,\"p\",true],[8],[0,\"This would force this version on all addons. Please use this feature with caution, as it is then up to you to make sure that all apps and engines actually work with this version of the addon.\"],[9],[0,\"\\n\\n      \"],[7,\"h2\",true],[10,\"id\",\"using-yarn-workspaces\"],[10,\"class\",\"docs-md__h2\"],[8],[7,\"a\",true],[10,\"href\",\"#using-yarn-workspaces\"],[10,\"class\",\"heading-anchor\"],[8],[0,\"Using Yarn workspaces\"],[9],[9],[0,\"\\n    \"],[7,\"p\",true],[8],[0,\"One way to work with engines is to use \"],[7,\"a\",true],[10,\"href\",\"https://yarnpkg.com/lang/en/docs/workspaces/\"],[10,\"class\",\"docs-md__a\"],[8],[0,\"Yarn workspaces\"],[9],[0,\". You could set up your app like this:\"],[9],[0,\"\\n\"],[7,\"ul\",true],[8],[0,\"\\n\"],[7,\"li\",true],[8],[7,\"code\",true],[8],[0,\"my-app\"],[9],[0,\" (workspace)\"],[7,\"ul\",true],[8],[0,\"\\n\"],[7,\"li\",true],[8],[7,\"code\",true],[8],[0,\"packages\"],[9],[7,\"ul\",true],[8],[0,\"\\n\"],[7,\"li\",true],[8],[7,\"code\",true],[8],[0,\"host-app\"],[9],[9],[0,\"\\n\"],[7,\"li\",true],[8],[7,\"code\",true],[8],[0,\"engine-a\"],[9],[9],[0,\"\\n\"],[7,\"li\",true],[8],[7,\"code\",true],[8],[0,\"engine-b\"],[9],[9],[0,\"\\n\"],[7,\"li\",true],[8],[7,\"code\",true],[8],[0,\"shared-addon\"],[9],[9],[0,\"\\n\"],[9],[0,\"\\n\"],[9],[0,\"\\n\"],[9],[0,\"\\n\"],[9],[0,\"\\n\"],[9],[0,\"\\n\"],[7,\"p\",true],[8],[0,\"In this example, the actual app would be in the \"],[7,\"code\",true],[8],[0,\"my-app/packages/host-app\"],[9],[0,\" directory, while \"],[7,\"code\",true],[8],[0,\"my-app/packages/engine-a\"],[9],[0,\" and \"],[7,\"code\",true],[8],[0,\"my-app/packages/engine-b\"],[9],[0,\" would be engines. \"],[7,\"code\",true],[8],[0,\"my-app/packages/shared-addon\"],[9],[0,\" could be a shared addon that is used by the host app & all engines, including for example common components, services or Ember Data models.\"],[9],[0,\"\\n\"],[7,\"p\",true],[8],[0,\"The advantage of this approach is that all of these dependencies will always be in sync and up to date. If you change something in the shared addon, it will immediately be reflected in the host app and all engines. It also makes it easier to ensure all engines depend on the same versions of addons.\"],[9],[9]],\"hasEval\":false}",
    "meta": {
      "moduleName": "dummy/templates/docs/addons.hbs"
    }
  });

  _exports.default = _default;
});
;define("dummy/templates/docs/api/item", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "/a54ola1",
    "block": "{\"symbols\":[],\"statements\":[[4,\"if\",[[24,[\"model\",\"isComponent\"]]],null,{\"statements\":[[0,\"  \"],[1,[28,\"api/x-component\",null,[[\"component\"],[[24,[\"model\"]]]]],false],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[24,[\"model\",\"isClass\"]]],null,{\"statements\":[[0,\"  \"],[1,[28,\"api/x-class\",null,[[\"class\"],[[24,[\"model\"]]]]],false],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"  \"],[1,[28,\"api/x-module\",null,[[\"module\"],[[24,[\"model\"]]]]],false],[0,\"\\n\"]],\"parameters\":[]}]],\"parameters\":[]}]],\"hasEval\":false}",
    "meta": {
      "moduleName": "dummy/templates/docs/api/item.hbs"
    }
  });

  _exports.default = _default;
});
;define("dummy/templates/docs/core-concepts", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "FP3aRKsE",
    "block": "{\"symbols\":[],\"statements\":[[7,\"div\",true],[10,\"class\",\"docs-md\"],[8],[7,\"h1\",true],[10,\"id\",\"core-concepts\"],[10,\"class\",\"docs-md__h1\"],[8],[0,\"Core Concepts\"],[9],[0,\"\\n    \"],[7,\"p\",true],[8],[0,\"In addition to understanding what Engines are and how they differ from Applications, there are a few core concepts worth understanding before attempting to create and use them.\"],[9],[0,\"\\n\\n      \"],[7,\"h2\",true],[10,\"id\",\"addons-in-repo-addons\"],[10,\"class\",\"docs-md__h2\"],[8],[7,\"a\",true],[10,\"href\",\"#addons-in-repo-addons\"],[10,\"class\",\"heading-anchor\"],[8],[0,\"Addons & In-Repo-Addons\"],[9],[9],[0,\"\\n    \"],[7,\"p\",true],[8],[0,\"As mentioned before, Engines are created as a specific type of \"],[7,\"a\",true],[10,\"href\",\"https://cli.emberjs.com/release/writing-addons/\"],[10,\"class\",\"docs-md__a\"],[8],[0,\"Ember Addon\"],[9],[0,\". This makes sense given that Addons are Ember's way to easily share common or reusable code. Since Engines are intended to package logical applications that can be composed, they fit nicely into the paradigm of shareable addons.\"],[9],[0,\"\\n\"],[7,\"p\",true],[8],[0,\"Addons come in two distinct flavors: \"],[7,\"em\",true],[8],[0,\"Standard\"],[9],[0,\" and \"],[7,\"em\",true],[8],[0,\"In-Repo\"],[9],[0,\". Standard Addons (normally just referred to as Addons) are full-fledged NPM packages that can be distributed and installed in other Ember applications. In-repo-addons, on the other hand, live within the repository of an Ember Application and are only used by that specific application.\"],[9],[0,\"\\n\"],[7,\"p\",true],[8],[0,\"This distinction is important for Engines, as it is fairly likely to want a logical application represented by an Engine but only use it with a specific Ember Application. In those cases, using an in-repo-engine is a good alternative to consider instead of maintaining two separate repositories.\"],[9],[0,\"\\n\"],[7,\"p\",true],[8],[0,\"It is recommended to read through the \\\"\"],[7,\"a\",true],[10,\"href\",\"https://cli.emberjs.com/release/writing-addons/\"],[10,\"class\",\"docs-md__a\"],[8],[0,\"Writing Addons\"],[9],[0,\"\\\" portion of the Ember-CLI user guide before moving onto the \\\"\"],[7,\"a\",true],[10,\"href\",\"./creating-an-engine\"],[10,\"class\",\"docs-md__a\"],[8],[0,\"Creating An Engine\"],[9],[0,\"\\\" portion of the guide.\"],[9],[0,\"\\n\\n      \"],[7,\"h2\",true],[10,\"id\",\"isolation-dependencies\"],[10,\"class\",\"docs-md__h2\"],[8],[7,\"a\",true],[10,\"href\",\"#isolation-dependencies\"],[10,\"class\",\"heading-anchor\"],[8],[0,\"Isolation & Dependencies\"],[9],[9],[0,\"\\n    \"],[7,\"p\",true],[8],[0,\"The next concept is a bit abstract, but talked about frequently when discussing Engines: \"],[7,\"em\",true],[8],[0,\"isolation\"],[9],[0,\". When discussing Engines, isolation refers to the idea of \"],[7,\"em\",true],[8],[0,\"logical run-time separation\"],[9],[0,\"; that is, separating the code which an Engine can reference from the code which an Application can reference.\"],[9],[0,\"\\n\"],[7,\"p\",true],[8],[0,\"In practice this means that Engines cannot access or communicate with their host (often referred to as their \\\"parent\\\"), except through a few well-defined interfaces. Attempting to access code from the host without explicitly importing it will result in a run-time error. So, things that you might have gotten \\\"for free\\\" in an application, now must have ceremony in order to be used by your Engine.\"],[9],[0,\"\\n\"],[7,\"p\",true],[8],[0,\"At first, and even after working with it for a while, this isolation may seem a bit cumbersome as it requires you to write more code and do more work to use something that you previously got with little effort. This \\\"ceremony\\\" of importing, however, is very important as it enables build and run time optimizations that are not possible without those constraints.\"],[9],[0,\"\\n\"],[7,\"p\",true],[8],[0,\"In particular, one huge benefit of Engines is the ability to lazy-load them. This is only made possible by having explicit interfaces with the consuming application and dependencies so that a dependency graph can be constructed at build time to allow for proper bundling of assets.\"],[9],[0,\"\\n\\n      \"],[7,\"h2\",true],[10,\"id\",\"routable-vs-route-less\"],[10,\"class\",\"docs-md__h2\"],[8],[7,\"a\",true],[10,\"href\",\"#routable-vs-route-less\"],[10,\"class\",\"heading-anchor\"],[8],[0,\"Routable Vs. Route-less\"],[9],[9],[0,\"\\n    \"],[7,\"p\",true],[8],[0,\"Finally, there are two types of Engines that you could potentially encounter: \"],[7,\"em\",true],[8],[0,\"routable\"],[9],[0,\" and \"],[7,\"em\",true],[8],[0,\"route-less\"],[9],[0,\".\"],[9],[0,\"\\n\"],[7,\"p\",true],[8],[0,\"Routable Engines are, as the name implies, Engines which are able to be routed to. This means that they live at a designated route in your application and can have their own internal routes which you can navigate to. Examples of good candidates for routable Engines are admin control panels or blogging systems.\"],[9],[0,\"\\n\"],[7,\"p\",true],[8],[0,\"Route-less Engines, on the other hand, are Engines which are not able to be routed to. This means that they don't live at a specific route, but are instead mounted within a template or your application. Examples of good candidates for route-less Engines are chat boxes or complex forms.\"],[9],[9]],\"hasEval\":false}",
    "meta": {
      "moduleName": "dummy/templates/docs/core-concepts.hbs"
    }
  });

  _exports.default = _default;
});
;define("dummy/templates/docs/creating-an-engine", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "Tsh689Ua",
    "block": "{\"symbols\":[],\"statements\":[[7,\"div\",true],[10,\"class\",\"docs-md\"],[8],[7,\"h1\",true],[10,\"id\",\"creating-an-engine\"],[10,\"class\",\"docs-md__h1\"],[8],[0,\"Creating An Engine\"],[9],[0,\"\\n    \"],[7,\"p\",true],[8],[0,\"Now that we have all the conceptual and theoretical talk out of the way, let's actually make an Engine!\"],[9],[0,\"\\n\"],[7,\"p\",true],[8],[0,\"As discussed previously, Engines are distributed as Addons and In-Repo-Addons.\"],[9],[0,\"\\n\\n      \"],[7,\"h2\",true],[10,\"id\",\"create-as-in-repo-engine\"],[10,\"class\",\"docs-md__h2\"],[8],[7,\"a\",true],[10,\"href\",\"#create-as-in-repo-engine\"],[10,\"class\",\"heading-anchor\"],[8],[0,\"Create as In-Repo-Engine\"],[9],[9],[0,\"\\n    \"],[7,\"p\",true],[8],[0,\"To create an engine within an existing application's project, run the\\n\"],[7,\"code\",true],[8],[0,\"in-repo-engine\"],[9],[0,\" generator:\"],[9],[0,\"\\n\"],[7,\"pre\",true],[10,\"class\",\"docs-md__code\"],[8],[7,\"code\",true],[10,\"class\",\"undefinedshell\"],[8],[0,\"ember g in-repo-engine <engine-name>\"],[9],[9],[0,\"\\n\"],[7,\"blockquote\",true],[10,\"class\",\"docs-md__blockquote\"],[8],[7,\"p\",true],[8],[0,\"Note: In-repo addons currently are created in the \"],[7,\"code\",true],[8],[0,\"/lib\"],[9],[0,\" directory (e.g. \"],[7,\"code\",true],[8],[0,\"/lib/my-addon\"],[9],[0,\"). Unit tests and integration tests are currently co-mingled with tests for the main application. A separate repo should be used for your engine if you wish to avoid this co-mingling.\"],[9],[0,\"\\n\"],[9],[7,\"p\",true],[8],[0,\"So, if we name our Engine \"],[7,\"code\",true],[8],[0,\"super-blog\"],[9],[0,\", we just do the following:\"],[9],[0,\"\\n\"],[7,\"pre\",true],[10,\"class\",\"docs-md__code\"],[8],[7,\"code\",true],[10,\"class\",\"undefinedshell\"],[8],[0,\"ember g in-repo-engine super-blog\"],[9],[9],[0,\"\\n\"],[7,\"p\",true],[8],[0,\"This has added a directory named \"],[7,\"code\",true],[8],[0,\"lib\"],[9],[0,\" and an app addon directory structure named for \"],[7,\"code\",true],[8],[0,\"super-blog\"],[9],[0,\".\"],[9],[0,\"\\n\"],[7,\"p\",true],[8],[0,\"Using the blueprint in-repo-engine, ember-cli has added all the appropriate files to create a new app structure.\"],[9],[0,\"\\n\"],[7,\"p\",true],[8],[0,\"If you want to share elements between an in-repo engine and application, you could do so with an in-repo addon. For example, the following in-repo engine's package (\"],[7,\"code\",true],[8],[0,\"lib/super-blog/package.json\"],[9],[0,\") references the \"],[7,\"code\",true],[8],[0,\"common\"],[9],[0,\" in-repo addon:\"],[9],[0,\"\\n\"],[7,\"pre\",true],[10,\"class\",\"docs-md__code\"],[8],[7,\"code\",true],[10,\"class\",\"undefinedjson\"],[8],[0,\"{\\n  \"],[7,\"span\",true],[10,\"class\",\"hljs-attr\"],[8],[0,\"\\\"name\\\"\"],[9],[0,\": \"],[7,\"span\",true],[10,\"class\",\"hljs-string\"],[8],[0,\"\\\"super-blog\\\"\"],[9],[0,\",\\n\\n  \"],[7,\"span\",true],[10,\"class\",\"hljs-attr\"],[8],[0,\"\\\"dependencies\\\"\"],[9],[0,\": {\\n    \"],[7,\"span\",true],[10,\"class\",\"hljs-attr\"],[8],[0,\"\\\"ember-cli-htmlbars\\\"\"],[9],[0,\": \"],[7,\"span\",true],[10,\"class\",\"hljs-string\"],[8],[0,\"\\\"*\\\"\"],[9],[0,\",\\n    \"],[7,\"span\",true],[10,\"class\",\"hljs-attr\"],[8],[0,\"\\\"ember-cli-babel\\\"\"],[9],[0,\": \"],[7,\"span\",true],[10,\"class\",\"hljs-string\"],[8],[0,\"\\\"*\\\"\"],[9],[0,\"\\n  },\\n\\n  \"],[7,\"span\",true],[10,\"class\",\"hljs-attr\"],[8],[0,\"\\\"ember-addon\\\"\"],[9],[0,\": {\\n    \"],[7,\"span\",true],[10,\"class\",\"hljs-attr\"],[8],[0,\"\\\"paths\\\"\"],[9],[0,\": [\\n      \"],[7,\"span\",true],[10,\"class\",\"hljs-string\"],[8],[0,\"\\\"../common\\\"\"],[9],[0,\"\\n    ]\\n  }\\n}\"],[9],[9],[0,\"\\n\\n      \"],[7,\"h3\",true],[10,\"id\",\"generate-in-an-in-repo-engine\"],[10,\"class\",\"docs-md__h3\"],[8],[7,\"a\",true],[10,\"href\",\"#generate-in-an-in-repo-engine\"],[10,\"class\",\"heading-anchor\"],[8],[0,\"Generate in an In-Repo-Engine\"],[9],[9],[0,\"\\n    \"],[7,\"p\",true],[8],[0,\"Using the right flags, generating routes, components (etc) in an in-repo engine is the same as in a regular Ember application.\"],[9],[0,\"\\n\"],[7,\"p\",true],[8],[0,\"To create a route within an in-repo-engine, you can run:\"],[9],[0,\"\\n\"],[7,\"pre\",true],[10,\"class\",\"docs-md__code\"],[8],[7,\"code\",true],[10,\"class\",\"undefinedshell\"],[8],[0,\"ember generate route <route-name> --in-repo <in-repo-name>\"],[9],[9],[0,\"\\n\"],[7,\"p\",true],[8],[0,\"To create a component within an in-repo-engine, you can run:\"],[9],[0,\"\\n\"],[7,\"pre\",true],[10,\"class\",\"docs-md__code\"],[8],[7,\"code\",true],[10,\"class\",\"undefinedshell\"],[8],[0,\"ember generate component <component-name> --in-repo <in-repo-name>\"],[9],[9],[0,\"\\n\"],[7,\"p\",true],[8],[0,\"To generate helpers, controllers and other things, you can use the \"],[7,\"code\",true],[8],[0,\"--in-repo\"],[9],[0,\" flag like above.\"],[9],[0,\"\\n\\n      \"],[7,\"h3\",true],[10,\"id\",\"using-the-in-flag\"],[10,\"class\",\"docs-md__h3\"],[8],[7,\"a\",true],[10,\"href\",\"#using-the-in-flag\"],[10,\"class\",\"heading-anchor\"],[8],[0,\"Using the --in flag\"],[9],[9],[0,\"\\n    \"],[7,\"p\",true],[8],[0,\"As of ember-cli@3.7 and higher the generate command includes an \"],[7,\"code\",true],[8],[0,\"--in\"],[9],[0,\" flag that allows you to specify the directory to generate into.\\nFor example, given an in-repo addon at lib/my-foo/:\"],[9],[0,\"\\n\"],[7,\"pre\",true],[10,\"class\",\"docs-md__code\"],[8],[7,\"code\",true],[10,\"class\",\"undefinedshell\"],[8],[0,\"ember generate component awesome-sauce --in ./lib/foo\"],[9],[9],[0,\"\\n\"],[7,\"p\",true],[8],[0,\"Will generate the following files:\"],[9],[0,\"\\n\"],[7,\"pre\",true],[10,\"class\",\"docs-md__code\"],[8],[7,\"code\",true],[10,\"class\",\"undefinedshell\"],[8],[0,\"lib/foo/addon/components/awesome-sauce.js\\nlib/foo/addon/templates/components/awesome-sauce.hbs\\ntests/integration/components/awesome-sauce-test.js\"],[9],[9],[0,\"\\n\\n      \"],[7,\"h3\",true],[10,\"id\",\"remove-from-in-repo-engine\"],[10,\"class\",\"docs-md__h3\"],[8],[7,\"a\",true],[10,\"href\",\"#remove-from-in-repo-engine\"],[10,\"class\",\"heading-anchor\"],[8],[0,\"Remove from In-Repo-Engine\"],[9],[9],[0,\"\\n    \"],[7,\"p\",true],[8],[0,\"For removing the above generated routes (components and other things) from your engine, replace \"],[7,\"code\",true],[8],[0,\"generate\"],[9],[0,\" with \"],[7,\"code\",true],[8],[0,\"destroy\"],[9],[0,\" in the shell command\"],[9],[0,\"\\n\"],[7,\"p\",true],[8],[0,\"Removing a route from an in-repo engine:\"],[9],[0,\"\\n\"],[7,\"pre\",true],[10,\"class\",\"docs-md__code\"],[8],[7,\"code\",true],[10,\"class\",\"undefinedshell\"],[8],[0,\"ember destroy route <route-name> --in-repo <in-repo-name>\"],[9],[9],[0,\"\\n\"],[7,\"p\",true],[8],[0,\"Removing a component from an in-repo engine:\"],[9],[0,\"\\n\"],[7,\"pre\",true],[10,\"class\",\"docs-md__code\"],[8],[7,\"code\",true],[10,\"class\",\"undefinedshell\"],[8],[0,\"ember destroy component <component-name> --in-repo <in-repo-name>\"],[9],[9],[0,\"\\n\\n      \"],[7,\"h2\",true],[10,\"id\",\"create-as-addon\"],[10,\"class\",\"docs-md__h2\"],[8],[7,\"a\",true],[10,\"href\",\"#create-as-addon\"],[10,\"class\",\"heading-anchor\"],[8],[0,\"Create as Addon\"],[9],[9],[0,\"\\n    \"],[7,\"p\",true],[8],[0,\"Separate addon projects can be created with the addon command:\"],[9],[0,\"\\n\"],[7,\"pre\",true],[10,\"class\",\"docs-md__code\"],[8],[7,\"code\",true],[10,\"class\",\"undefinedshell\"],[8],[0,\"ember addon <engine-name>\"],[9],[9],[0,\"\\n\"],[7,\"p\",true],[8],[0,\"So, if we name our Engine \"],[7,\"code\",true],[8],[0,\"chat-engine\"],[9],[0,\", we just do the following:\"],[9],[0,\"\\n\"],[7,\"pre\",true],[10,\"class\",\"docs-md__code\"],[8],[7,\"code\",true],[10,\"class\",\"undefinedshell\"],[8],[0,\"ember addon chat-engine\"],[9],[9],[0,\"\\n\"],[7,\"p\",true],[8],[0,\"Using a vanilla addon we still need turn it into an engine, follow the steps below.\"],[9],[0,\"\\n\\n      \"],[7,\"h3\",true],[10,\"id\",\"install-engine-dependencies\"],[10,\"class\",\"docs-md__h3\"],[8],[7,\"a\",true],[10,\"href\",\"#install-engine-dependencies\"],[10,\"class\",\"heading-anchor\"],[8],[0,\"Install Engine Dependencies\"],[9],[9],[0,\"\\n    \"],[7,\"p\",true],[8],[0,\"At this point, you have a vanilla Addon which is not yet an Engine, so let's introduce the remaining pieces needed for it to function as one.\"],[9],[0,\"\\n\"],[7,\"p\",true],[8],[0,\"First, we need to install the \"],[7,\"code\",true],[8],[0,\"ember-engines\"],[9],[0,\" addon, which provides support for all the Engines features which haven't been accepted into Ember core yet. Installation is as simple as:\"],[9],[0,\"\\n\"],[7,\"pre\",true],[10,\"class\",\"docs-md__code\"],[8],[7,\"code\",true],[10,\"class\",\"undefinedshell\"],[8],[0,\"cd super-blog/\\nember install ember-engines\"],[9],[9],[0,\"\\n\"],[7,\"p\",true],[8],[0,\"A quick note, Engines should have \"],[7,\"code\",true],[8],[0,\"ember-engines\"],[9],[0,\" listed as a \"],[7,\"code\",true],[8],[0,\"devDependency\"],[9],[0,\" and \"],[7,\"code\",true],[8],[0,\"peerDependency\"],[9],[0,\". The reason for this is that if you include \"],[7,\"code\",true],[8],[0,\"ember-engines\"],[9],[0,\" as a \"],[7,\"code\",true],[8],[0,\"dependency\"],[9],[0,\" of both the host application and the Engine, you'll wind up duplicating some crucial functionality which can cause problems. Therefore, it is best that the host application provide the copy to be used.\"],[9],[0,\"\\n\"],[7,\"p\",true],[8],[0,\"Finally, we need to ensure \"],[7,\"code\",true],[8],[0,\"ember-cli-htmlbars\"],[9],[0,\" is listed as a dependency for compiling our templates:\"],[9],[0,\"\\n\"],[7,\"pre\",true],[10,\"class\",\"docs-md__code\"],[8],[7,\"code\",true],[10,\"class\",\"undefinedjson\"],[8],[0,\"// package.json\\n\\\"dependencies\\\": {\\n  \\\"ember-cli-htmlbars\\\": \\\"^1.1.0\\\"\\n}\"],[9],[9],[0,\"\\n\"],[7,\"p\",true],[8],[0,\"Pretty simple so far. At this point, we have everything needed to actually create an Engine, but we don't have an Engine itself.\"],[9],[0,\"\\n\\n      \"],[7,\"h3\",true],[10,\"id\",\"configuring-your-engine\"],[10,\"class\",\"docs-md__h3\"],[8],[7,\"a\",true],[10,\"href\",\"#configuring-your-engine\"],[10,\"class\",\"heading-anchor\"],[8],[0,\"Configuring your Engine\"],[9],[9],[0,\"\\n    \"],[7,\"p\",true],[8],[0,\"Within your Engine's root directory, modify \"],[7,\"code\",true],[8],[0,\"index.js\"],[9],[0,\" so that your addon is configured as an engine using the EngineAddon extension:\"],[9],[0,\"\\n\"],[7,\"pre\",true],[10,\"class\",\"docs-md__code\"],[8],[7,\"code\",true],[10,\"class\",\"undefinedjs\"],[8],[7,\"span\",true],[10,\"class\",\"hljs-comment\"],[8],[0,\"// index.js\"],[9],[0,\"\\n\\n\"],[7,\"span\",true],[10,\"class\",\"hljs-comment\"],[8],[0,\"/*jshint node:true*/\"],[9],[0,\"\\n\"],[7,\"span\",true],[10,\"class\",\"hljs-keyword\"],[8],[0,\"const\"],[9],[0,\" EngineAddon = \"],[7,\"span\",true],[10,\"class\",\"hljs-built_in\"],[8],[0,\"require\"],[9],[0,\"(\"],[7,\"span\",true],[10,\"class\",\"hljs-string\"],[8],[0,\"'ember-engines/lib/engine-addon'\"],[9],[0,\");\\n\\n\"],[7,\"span\",true],[10,\"class\",\"hljs-built_in\"],[8],[0,\"module\"],[9],[0,\".exports = EngineAddon.extend({\\n  \"],[7,\"span\",true],[10,\"class\",\"hljs-attr\"],[8],[0,\"name\"],[9],[0,\": \"],[7,\"span\",true],[10,\"class\",\"hljs-string\"],[8],[0,\"'ember-blog'\"],[9],[0,\",\\n  \"],[7,\"span\",true],[10,\"class\",\"hljs-attr\"],[8],[0,\"lazyLoading\"],[9],[0,\": {\\n    \"],[7,\"span\",true],[10,\"class\",\"hljs-attr\"],[8],[0,\"enabled\"],[9],[0,\": \"],[7,\"span\",true],[10,\"class\",\"hljs-literal\"],[8],[0,\"false\"],[9],[0,\"\\n  }\\n});\"],[9],[9],[0,\"\\n\"],[7,\"p\",true],[8],[0,\"We'll leave the \"],[7,\"code\",true],[8],[0,\"lazyLoading.enabled\"],[9],[0,\" flag as \"],[7,\"code\",true],[8],[0,\"false\"],[9],[0,\" for now, as we'll be discussing the topic of lazy-loading engines in depth later on in this guide.\"],[9],[0,\"\\n\"],[7,\"p\",true],[8],[0,\"Within your Engine's \"],[7,\"code\",true],[8],[0,\"config\"],[9],[0,\" directory, modify the \"],[7,\"code\",true],[8],[0,\"environment.js\"],[9],[0,\" file:\"],[9],[0,\"\\n\"],[7,\"pre\",true],[10,\"class\",\"docs-md__code\"],[8],[7,\"code\",true],[10,\"class\",\"undefinedjs\"],[8],[7,\"span\",true],[10,\"class\",\"hljs-comment\"],[8],[0,\"// config/environment.js\"],[9],[0,\"\\n\\n\"],[7,\"span\",true],[10,\"class\",\"hljs-comment\"],[8],[0,\"/*jshint node:true*/\"],[9],[0,\"\\n\"],[7,\"span\",true],[10,\"class\",\"hljs-meta\"],[8],[0,\"'use strict'\"],[9],[0,\";\\n\\n\"],[7,\"span\",true],[10,\"class\",\"hljs-built_in\"],[8],[0,\"module\"],[9],[0,\".exports = \"],[7,\"span\",true],[10,\"class\",\"hljs-function\"],[8],[7,\"span\",true],[10,\"class\",\"hljs-keyword\"],[8],[0,\"function\"],[9],[0,\"(\"],[7,\"span\",true],[10,\"class\",\"hljs-params\"],[8],[0,\"environment\"],[9],[0,\") \"],[9],[0,\"{\\n  \"],[7,\"span\",true],[10,\"class\",\"hljs-keyword\"],[8],[0,\"const\"],[9],[0,\" ENV = {\\n    \"],[7,\"span\",true],[10,\"class\",\"hljs-attr\"],[8],[0,\"modulePrefix\"],[9],[0,\": \"],[7,\"span\",true],[10,\"class\",\"hljs-string\"],[8],[0,\"'ember-blog'\"],[9],[0,\",\\n    \"],[7,\"span\",true],[10,\"class\",\"hljs-attr\"],[8],[0,\"environment\"],[9],[0,\": environment\\n  }\\n\\n  \"],[7,\"span\",true],[10,\"class\",\"hljs-keyword\"],[8],[0,\"return\"],[9],[0,\" ENV;\\n};\"],[9],[9],[0,\"\\n\"],[7,\"p\",true],[8],[0,\"Finally, to make this addon an actual Engine, create a \"],[7,\"code\",true],[8],[0,\"engine.js\"],[9],[0,\" file under the \"],[7,\"code\",true],[8],[0,\"addon\"],[9],[0,\" directory:\"],[9],[0,\"\\n\"],[7,\"pre\",true],[10,\"class\",\"docs-md__code\"],[8],[7,\"code\",true],[10,\"class\",\"undefinedshell\"],[8],[0,\"touch addon/engine.js\"],[9],[9],[0,\"\\n\"],[7,\"p\",true],[8],[0,\"The \"],[7,\"code\",true],[8],[0,\"engine.js\"],[9],[0,\" file lives inside the \"],[7,\"code\",true],[8],[0,\"addon\"],[9],[0,\" directory because we want it to be within the Addon's/Engine's namespace. We'll explore this idea more later, but it is important to note for now.\"],[9],[0,\"\\n\"],[7,\"p\",true],[8],[0,\"Next, add the following code to \"],[7,\"code\",true],[8],[0,\"engine.js\"],[9],[0,\":\"],[9],[0,\"\\n\"],[7,\"pre\",true],[10,\"class\",\"docs-md__code\"],[8],[7,\"code\",true],[10,\"class\",\"undefinedjs\"],[8],[7,\"span\",true],[10,\"class\",\"hljs-comment\"],[8],[0,\"// addon/engine.js\"],[9],[0,\"\\n\\n\"],[7,\"span\",true],[10,\"class\",\"hljs-keyword\"],[8],[0,\"import\"],[9],[0,\" Engine \"],[7,\"span\",true],[10,\"class\",\"hljs-keyword\"],[8],[0,\"from\"],[9],[0,\" \"],[7,\"span\",true],[10,\"class\",\"hljs-string\"],[8],[0,\"'ember-engines/engine'\"],[9],[0,\";\\n\"],[7,\"span\",true],[10,\"class\",\"hljs-keyword\"],[8],[0,\"import\"],[9],[0,\" Resolver \"],[7,\"span\",true],[10,\"class\",\"hljs-keyword\"],[8],[0,\"from\"],[9],[0,\" \"],[7,\"span\",true],[10,\"class\",\"hljs-string\"],[8],[0,\"'ember-resolver'\"],[9],[0,\";\\n\"],[7,\"span\",true],[10,\"class\",\"hljs-keyword\"],[8],[0,\"import\"],[9],[0,\" loadInitializers \"],[7,\"span\",true],[10,\"class\",\"hljs-keyword\"],[8],[0,\"from\"],[9],[0,\" \"],[7,\"span\",true],[10,\"class\",\"hljs-string\"],[8],[0,\"'ember-load-initializers'\"],[9],[0,\";\\n\"],[7,\"span\",true],[10,\"class\",\"hljs-keyword\"],[8],[0,\"import\"],[9],[0,\" config \"],[7,\"span\",true],[10,\"class\",\"hljs-keyword\"],[8],[0,\"from\"],[9],[0,\" \"],[7,\"span\",true],[10,\"class\",\"hljs-string\"],[8],[0,\"'./config/environment'\"],[9],[0,\";\\n\\n\"],[7,\"span\",true],[10,\"class\",\"hljs-keyword\"],[8],[0,\"const\"],[9],[0,\" { modulePrefix } = config;\\n\"],[7,\"span\",true],[10,\"class\",\"hljs-keyword\"],[8],[0,\"const\"],[9],[0,\" Eng = Engine.extend({\\n  modulePrefix,\\n  Resolver\\n});\\n\\nloadInitializers(Eng, modulePrefix);\\n\\n\"],[7,\"span\",true],[10,\"class\",\"hljs-keyword\"],[8],[0,\"export\"],[9],[0,\" \"],[7,\"span\",true],[10,\"class\",\"hljs-keyword\"],[8],[0,\"default\"],[9],[0,\" Eng;\"],[9],[9],[0,\"\\n\"],[7,\"p\",true],[8],[0,\"This code will look familiar to anyone that's seen an Ember Application's \"],[7,\"code\",true],[8],[0,\"app.js\"],[9],[0,\" file before. Since Engines are so closely related to Applications, it makes sense that their initial files look similar.\"],[9],[0,\"\\n\"],[7,\"p\",true],[8],[0,\"There are four important points from the \"],[7,\"code\",true],[8],[0,\"engine.js\"],[9],[0,\" file:\"],[9],[0,\"\\n\"],[7,\"ol\",true],[8],[0,\"\\n\"],[7,\"li\",true],[8],[7,\"strong\",true],[8],[7,\"code\",true],[8],[0,\"config\"],[9],[9],[0,\": Each Engine has its own configuration file, similar to the one Ember Applications normally have. It's even found in the same location - \"],[7,\"code\",true],[8],[0,\"config/environment.js\"],[9],[9],[0,\"\\n\"],[7,\"li\",true],[8],[7,\"strong\",true],[8],[7,\"code\",true],[8],[0,\"Resolver\"],[9],[9],[0,\": Engines have their own Resolver. This means they look things up independently of their host application.\"],[9],[0,\"\\n\"],[7,\"li\",true],[8],[7,\"strong\",true],[8],[7,\"code\",true],[8],[0,\"modulePrefix\"],[9],[9],[0,\": Since Engines have their own Resolver, they also must have their own \"],[7,\"code\",true],[8],[0,\"modulePrefix\"],[9],[0,\" to define which modules belong to their namespace. Since the \"],[7,\"code\",true],[8],[0,\"config\"],[9],[0,\" is empty by default, you'll want to add this to your \"],[7,\"code\",true],[8],[0,\"config/environment.js\"],[9],[0,\" file.\"],[9],[0,\"\\n\"],[7,\"li\",true],[8],[7,\"strong\",true],[8],[7,\"code\",true],[8],[0,\"loadInitializers\"],[9],[9],[0,\": Again, since Engines have their own Resolver and thus their own Container, we want to make sure we run initializers against the Engine on boot-up so they can perform tasks like injections.\"],[9],[0,\"\\n\"],[9],[0,\"\\n\"],[7,\"hr\",true],[10,\"class\",\"docs-md__hr\"],[8],[9],[0,\"\\n      \"],[7,\"h3\",true],[10,\"id\",\"aside-app-vs-addon-namespace\"],[10,\"class\",\"docs-md__h3\"],[8],[7,\"a\",true],[10,\"href\",\"#aside-app-vs-addon-namespace\"],[10,\"class\",\"heading-anchor\"],[8],[7,\"strong\",true],[8],[0,\"Aside\"],[9],[0,\": App Vs Addon Namespace\"],[9],[9],[0,\"\\n    \"],[7,\"p\",true],[8],[0,\"Let's take a moment to talk about namespaces.\"],[9],[0,\"\\n\"],[7,\"p\",true],[8],[0,\"Every Ember Application has a namespace defined by its \"],[7,\"code\",true],[8],[0,\"modulePrefix\"],[9],[0,\" value. This namespace allows your \"],[7,\"code\",true],[8],[0,\"Resolver\"],[9],[0,\" to find the modules created by Ember-CLI at runtime. You'll likely have noticed before that if you try to import a module that is in your \"],[7,\"code\",true],[8],[0,\"app\"],[9],[0,\" directory, then you need to use the \"],[7,\"code\",true],[8],[0,\"modulePrefix\"],[9],[0,\" instead.\"],[9],[0,\"\\n\"],[7,\"p\",true],[8],[0,\"So, if you have the file \"],[7,\"code\",true],[8],[0,\"app/components/foo-bar.js\"],[9],[0,\" and the \"],[7,\"code\",true],[8],[0,\"modulePrefix\"],[9],[0,\" \"],[7,\"code\",true],[8],[0,\"baz\"],[9],[0,\", you'll have to look it up using \"],[7,\"code\",true],[8],[0,\"baz/components/foo-bar\"],[9],[0,\".\"],[9],[0,\"\\n\"],[7,\"p\",true],[8],[0,\"Similarly, Addons, and therefore Engines, have their own namespace defined by their \"],[7,\"code\",true],[8],[0,\"name\"],[9],[0,\" value in their \"],[7,\"code\",true],[8],[0,\"index.js\"],[9],[0,\". Anything in the \"],[7,\"code\",true],[8],[0,\"addon\"],[9],[0,\" directory, gets put into the Addon's namespace. Having a separate namespace is one of the primary ways\\nEngines achieve code isolation.\"],[9],[0,\"\\n\"],[7,\"p\",true],[8],[0,\"As long as the \"],[7,\"code\",true],[8],[0,\"modulePrefix\"],[9],[0,\" for your application doesn't match the \"],[7,\"code\",true],[8],[0,\"name\"],[9],[0,\" of an Addon, then your application won't be able to resolve modules living in your Addon. This is why it is important that Engines have their own \"],[7,\"code\",true],[8],[0,\"Resolver\"],[9],[0,\" with a separate \"],[7,\"code\",true],[8],[0,\"modulePrefix\"],[9],[0,\" that matches the Addon's \"],[7,\"code\",true],[8],[0,\"name\"],[9],[0,\".\"],[9],[0,\"\\n\"],[7,\"p\",true],[8],[0,\"Observant developers might also note that Addon's have an \"],[7,\"code\",true],[8],[0,\"app\"],[9],[0,\" directory in addition to their \"],[7,\"code\",true],[8],[0,\"addon\"],[9],[0,\" directory. The \"],[7,\"code\",true],[8],[0,\"app\"],[9],[0,\" directory from an Addon gets merged into the host's namespace. This allows Addons to \\\"re-export\\\" modules from their own namespace into the namespace of the consumer so that they can be used as if part of the host. Engines, however, should never re-export modules into their host, and so anything placed into the \"],[7,\"code\",true],[8],[0,\"app\"],[9],[0,\" directory of an Engine Addon will not be included in the build.\"],[9],[0,\"\\n\"],[7,\"hr\",true],[10,\"class\",\"docs-md__hr\"],[8],[9],[0,\"\\n      \"],[7,\"h2\",true],[10,\"id\",\"adding-routes-for-routable-engines\"],[10,\"class\",\"docs-md__h2\"],[8],[7,\"a\",true],[10,\"href\",\"#adding-routes-for-routable-engines\"],[10,\"class\",\"heading-anchor\"],[8],[0,\"Adding Routes for Routable Engines\"],[9],[9],[0,\"\\n    \"],[7,\"p\",true],[8],[0,\"At this point, if you're building a Route-less Engine, then you're done and can skip ahead to the \\\"\"],[7,\"a\",true],[10,\"href\",\"./mounting-engines\"],[10,\"class\",\"docs-md__a\"],[8],[0,\"Mounting An Engine\"],[9],[0,\"\\\" section. If, however, you're building a Routable Engine, then you need to create one more file:\"],[9],[0,\"\\n\"],[7,\"pre\",true],[10,\"class\",\"docs-md__code\"],[8],[7,\"code\",true],[10,\"class\",\"undefinedshell\"],[8],[0,\"touch addon/routes.js\"],[9],[9],[0,\"\\n\"],[7,\"p\",true],[8],[0,\"The \"],[7,\"code\",true],[8],[0,\"routes.js\"],[9],[0,\" file defines the route map for a routable Engine. The contents are fairly simple:\"],[9],[0,\"\\n\"],[7,\"pre\",true],[10,\"class\",\"docs-md__code\"],[8],[7,\"code\",true],[10,\"class\",\"undefinedjs\"],[8],[7,\"span\",true],[10,\"class\",\"hljs-keyword\"],[8],[0,\"import\"],[9],[0,\" buildRoutes \"],[7,\"span\",true],[10,\"class\",\"hljs-keyword\"],[8],[0,\"from\"],[9],[0,\" \"],[7,\"span\",true],[10,\"class\",\"hljs-string\"],[8],[0,\"'ember-engines/routes'\"],[9],[0,\";\\n\\n\"],[7,\"span\",true],[10,\"class\",\"hljs-keyword\"],[8],[0,\"export\"],[9],[0,\" \"],[7,\"span\",true],[10,\"class\",\"hljs-keyword\"],[8],[0,\"default\"],[9],[0,\" buildRoutes(\"],[7,\"span\",true],[10,\"class\",\"hljs-function\"],[8],[7,\"span\",true],[10,\"class\",\"hljs-keyword\"],[8],[0,\"function\"],[9],[0,\"(\"],[7,\"span\",true],[10,\"class\",\"hljs-params\"],[8],[9],[0,\") \"],[9],[0,\"{\\n  \"],[7,\"span\",true],[10,\"class\",\"hljs-comment\"],[8],[0,\"// route map\"],[9],[0,\"\\n});\"],[9],[9],[0,\"\\n\"],[7,\"p\",true],[8],[0,\"The callback passed to \"],[7,\"code\",true],[8],[0,\"buildRoutes\"],[9],[0,\" functions the same way as \"],[7,\"a\",true],[10,\"href\",\"https://api.emberjs.com/ember/release/classes/EmberRouter\"],[10,\"class\",\"docs-md__a\"],[8],[7,\"code\",true],[8],[0,\"Router#map\"],[9],[9],[0,\" does in a normal application. This means, the \"],[7,\"code\",true],[8],[0,\"routes.js\"],[9],[0,\" file for our \"],[7,\"code\",true],[8],[0,\"super-blog\"],[9],[0,\" might look something like:\"],[9],[0,\"\\n\"],[7,\"pre\",true],[10,\"class\",\"docs-md__code\"],[8],[7,\"code\",true],[10,\"class\",\"undefinedjs\"],[8],[7,\"span\",true],[10,\"class\",\"hljs-keyword\"],[8],[0,\"import\"],[9],[0,\" buildRoutes \"],[7,\"span\",true],[10,\"class\",\"hljs-keyword\"],[8],[0,\"from\"],[9],[0,\" \"],[7,\"span\",true],[10,\"class\",\"hljs-string\"],[8],[0,\"'ember-engines/routes'\"],[9],[0,\";\\n\\n\"],[7,\"span\",true],[10,\"class\",\"hljs-keyword\"],[8],[0,\"export\"],[9],[0,\" \"],[7,\"span\",true],[10,\"class\",\"hljs-keyword\"],[8],[0,\"default\"],[9],[0,\" buildRoutes(\"],[7,\"span\",true],[10,\"class\",\"hljs-function\"],[8],[7,\"span\",true],[10,\"class\",\"hljs-keyword\"],[8],[0,\"function\"],[9],[0,\"(\"],[7,\"span\",true],[10,\"class\",\"hljs-params\"],[8],[9],[0,\") \"],[9],[0,\"{\\n  \"],[7,\"span\",true],[10,\"class\",\"hljs-keyword\"],[8],[0,\"this\"],[9],[0,\".route(\"],[7,\"span\",true],[10,\"class\",\"hljs-string\"],[8],[0,\"'new'\"],[9],[0,\");\\n\\n  \"],[7,\"span\",true],[10,\"class\",\"hljs-keyword\"],[8],[0,\"this\"],[9],[0,\".route(\"],[7,\"span\",true],[10,\"class\",\"hljs-string\"],[8],[0,\"'post'\"],[9],[0,\", { \"],[7,\"span\",true],[10,\"class\",\"hljs-attr\"],[8],[0,\"path\"],[9],[0,\": \"],[7,\"span\",true],[10,\"class\",\"hljs-string\"],[8],[0,\"'post/:id'\"],[9],[0,\" }, \"],[7,\"span\",true],[10,\"class\",\"hljs-function\"],[8],[7,\"span\",true],[10,\"class\",\"hljs-keyword\"],[8],[0,\"function\"],[9],[0,\"(\"],[7,\"span\",true],[10,\"class\",\"hljs-params\"],[8],[9],[0,\") \"],[9],[0,\"{\\n    \"],[7,\"span\",true],[10,\"class\",\"hljs-keyword\"],[8],[0,\"this\"],[9],[0,\".route(\"],[7,\"span\",true],[10,\"class\",\"hljs-string\"],[8],[0,\"'comments'\"],[9],[0,\", \"],[7,\"span\",true],[10,\"class\",\"hljs-function\"],[8],[7,\"span\",true],[10,\"class\",\"hljs-keyword\"],[8],[0,\"function\"],[9],[0,\"(\"],[7,\"span\",true],[10,\"class\",\"hljs-params\"],[8],[9],[0,\") \"],[9],[0,\"{\\n      \"],[7,\"span\",true],[10,\"class\",\"hljs-keyword\"],[8],[0,\"this\"],[9],[0,\".route(\"],[7,\"span\",true],[10,\"class\",\"hljs-string\"],[8],[0,\"'comment'\"],[9],[0,\", { \"],[7,\"span\",true],[10,\"class\",\"hljs-attr\"],[8],[0,\"path\"],[9],[0,\": \"],[7,\"span\",true],[10,\"class\",\"hljs-string\"],[8],[0,\"':id'\"],[9],[0,\" });\\n    });\\n  });\\n});\"],[9],[9],[0,\"\\n\"],[7,\"p\",true],[8],[0,\"In the next section, we'll see how this route map gets merged into the host route map. So, let's go!\"],[9],[9]],\"hasEval\":false}",
    "meta": {
      "moduleName": "dummy/templates/docs/creating-an-engine.hbs"
    }
  });

  _exports.default = _default;
});
;define("dummy/templates/docs/deploying-and-fastboot", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "69LkwWTe",
    "block": "{\"symbols\":[],\"statements\":[[7,\"div\",true],[10,\"class\",\"docs-md\"],[8],[7,\"h1\",true],[10,\"id\",\"deploying-and-fastboot\"],[10,\"class\",\"docs-md__h1\"],[8],[0,\"Deploying and Fastboot\"],[9],[0,\"\\n    \\n      \"],[7,\"h2\",true],[10,\"id\",\"deploying-an-engine\"],[10,\"class\",\"docs-md__h2\"],[8],[7,\"a\",true],[10,\"href\",\"#deploying-an-engine\"],[10,\"class\",\"heading-anchor\"],[8],[0,\"Deploying An Engine\"],[9],[9],[0,\"\\n    \"],[7,\"p\",true],[8],[0,\"In many cases, your engine code may be served from a static server, typically a CDN; this server will probably not share the same root location as your application. In order to specify the location to get the engine assets, you can implement a \"],[7,\"code\",true],[8],[0,\"generateURI\"],[9],[0,\" function in the host application's \"],[7,\"code\",true],[8],[0,\"ember-cli-build.js\"],[9],[0,\" file:\"],[9],[0,\"\\n\"],[7,\"pre\",true],[10,\"class\",\"docs-md__code\"],[8],[7,\"code\",true],[10,\"class\",\"undefinedjs\"],[8],[7,\"span\",true],[10,\"class\",\"hljs-comment\"],[8],[0,\"// host-app/ember-cli-build.js\"],[9],[0,\"\\n\"],[7,\"span\",true],[10,\"class\",\"hljs-keyword\"],[8],[0,\"let\"],[9],[0,\" app = \"],[7,\"span\",true],[10,\"class\",\"hljs-keyword\"],[8],[0,\"new\"],[9],[0,\" EmberApp(defaults, {\\n  \"],[7,\"span\",true],[10,\"class\",\"hljs-attr\"],[8],[0,\"assetLoader\"],[9],[0,\": {\\n    generateURI(filePath) {\\n      \"],[7,\"span\",true],[10,\"class\",\"hljs-keyword\"],[8],[0,\"if\"],[9],[0,\" (EmberApp.env() === \"],[7,\"span\",true],[10,\"class\",\"hljs-string\"],[8],[0,\"'production'\"],[9],[0,\") {\\n        \"],[7,\"span\",true],[10,\"class\",\"hljs-keyword\"],[8],[0,\"return\"],[9],[0,\" \"],[7,\"span\",true],[10,\"class\",\"hljs-string\"],[8],[0,\"`https://production.cdn.com/\"],[7,\"span\",true],[10,\"class\",\"hljs-subst\"],[8],[0,\"${filePath}\"],[9],[0,\"`\"],[9],[0,\";\\n      } \"],[7,\"span\",true],[10,\"class\",\"hljs-keyword\"],[8],[0,\"else\"],[9],[0,\" {\\n        \"],[7,\"span\",true],[10,\"class\",\"hljs-keyword\"],[8],[0,\"return\"],[9],[0,\" \"],[7,\"span\",true],[10,\"class\",\"hljs-string\"],[8],[0,\"`local/static/\"],[7,\"span\",true],[10,\"class\",\"hljs-subst\"],[8],[0,\"${filePath}\"],[9],[0,\"`\"],[9],[0,\";\\n      }\\n    }\\n  }\\n});\"],[9],[9],[0,\"\\n\"],[7,\"p\",true],[8],[0,\"The \"],[7,\"code\",true],[8],[0,\"generateURI\"],[9],[0,\" function receives the \"],[7,\"code\",true],[8],[0,\"filePath\"],[9],[0,\" for each asset and must return a string of the asset's location. For more info, see the \"],[7,\"a\",true],[10,\"href\",\"https://github.com/ember-engines/ember-asset-loader#generating-custom-uris\"],[10,\"class\",\"docs-md__a\"],[8],[0,\"ember-asset-loader documentation\"],[9],[0,\".\"],[9],[0,\"\\n\\n      \"],[7,\"h2\",true],[10,\"id\",\"fastboot\"],[10,\"class\",\"docs-md__h2\"],[8],[7,\"a\",true],[10,\"href\",\"#fastboot\"],[10,\"class\",\"heading-anchor\"],[8],[0,\"Fastboot\"],[9],[9],[0,\"\\n    \"],[7,\"p\",true],[8],[0,\"Ember Engines is perfect for combining with server-side rendering solution and works with \"],[7,\"a\",true],[10,\"href\",\"https://ember-fastboot.com/\"],[10,\"class\",\"docs-md__a\"],[8],[0,\"FastBoot\"],[9],[0,\" out of the box.\"],[9],[0,\"\\n\"],[7,\"p\",true],[8],[0,\"All Engine builds (regardless of whether they are lazy-loaded or not) will generate a \"],[7,\"code\",true],[8],[0,\"engines-dist/engine-name/config/environment.js\"],[9],[0,\" file. This is because we need to load that file in FastBoot for both eager and lazy engines.\"],[9],[9]],\"hasEval\":false}",
    "meta": {
      "moduleName": "dummy/templates/docs/deploying-and-fastboot.hbs"
    }
  });

  _exports.default = _default;
});
;define("dummy/templates/docs/index", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "qFZjF6fe",
    "block": "{\"symbols\":[],\"statements\":[[7,\"div\",true],[10,\"class\",\"docs-md\"],[8],[7,\"h1\",true],[10,\"id\",\"quickstart\"],[10,\"class\",\"docs-md__h1\"],[8],[0,\"Quickstart\"],[9],[0,\"\\n    \\n      \"],[7,\"h2\",true],[10,\"id\",\"installation\"],[10,\"class\",\"docs-md__h2\"],[8],[7,\"a\",true],[10,\"href\",\"#installation\"],[10,\"class\",\"heading-anchor\"],[8],[0,\"Installation\"],[9],[9],[0,\"\\n    \"],[7,\"pre\",true],[10,\"class\",\"docs-md__code\"],[8],[7,\"code\",true],[10,\"class\",\"undefinedsh\"],[8],[0,\"ember install ember-engines\"],[9],[9],[9]],\"hasEval\":false}",
    "meta": {
      "moduleName": "dummy/templates/docs/index.hbs"
    }
  });

  _exports.default = _default;
});
;define("dummy/templates/docs/introduction", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "Y+5S26AN",
    "block": "{\"symbols\":[],\"statements\":[[7,\"div\",true],[10,\"class\",\"docs-md\"],[8],[7,\"h1\",true],[10,\"id\",\"introduction\"],[10,\"class\",\"docs-md__h1\"],[8],[0,\"Introduction\"],[9],[0,\"\\n    \"],[7,\"p\",true],[8],[0,\"Welcome to the official guide for Ember Engines! This guide is intended to get you up and running with Engines as implemented in the \"],[7,\"a\",true],[10,\"href\",\"https://www.npmjs.com/package/ember-engines\"],[10,\"class\",\"docs-md__a\"],[8],[7,\"code\",true],[8],[0,\"ember-engines\"],[9],[9],[0,\" addon and give you background on various concepts and ideas related to Engines. It is intended to be read from start to finish, but has been broken down in case you want to come back and re-read a specific topic.\"],[9],[0,\"\\n\"],[7,\"p\",true],[8],[0,\"Do note that since Engines have not had a 1.0.0 release the APIs and examples given in this guide are subject to change.\"],[9],[0,\"\\n\\n      \"],[7,\"h2\",true],[10,\"id\",\"get-help-contribute\"],[10,\"class\",\"docs-md__h2\"],[8],[7,\"a\",true],[10,\"href\",\"#get-help-contribute\"],[10,\"class\",\"heading-anchor\"],[8],[0,\"Get Help & Contribute\"],[9],[9],[0,\"\\n    \"],[7,\"p\",true],[8],[0,\"The Ember Engines source code (including this website) is available on \"],[7,\"a\",true],[10,\"href\",\"http://github.com/ember-engines\"],[10,\"class\",\"docs-md__a\"],[8],[0,\"GitHub\"],[9],[0,\". If you run into an error with the Engines code itself or think a feature is missing, please \"],[7,\"a\",true],[10,\"href\",\"https://github.com/ember-engines/ember-engines/issues\"],[10,\"class\",\"docs-md__a\"],[8],[0,\"file an issue\"],[9],[0,\".\"],[9],[0,\"\\n\"],[7,\"p\",true],[8],[0,\"The best way to get help for project-specific issues is via the \"],[7,\"a\",true],[10,\"href\",\"https://discordapp.com/invite/zT3asNS\"],[10,\"class\",\"docs-md__a\"],[8],[0,\"Ember Community Discord\"],[9],[0,\". Once you’ve signed up, join the \"],[7,\"a\",true],[10,\"href\",\"https://discordapp.com/channels/480462759797063690/487221820638887947\"],[10,\"class\",\"docs-md__a\"],[8],[0,\"#ember-engines\"],[9],[0,\" channel.\"],[9],[0,\"\\n\\n      \"],[7,\"h2\",true],[10,\"id\",\"engines-roadmap\"],[10,\"class\",\"docs-md__h2\"],[8],[7,\"a\",true],[10,\"href\",\"#engines-roadmap\"],[10,\"class\",\"heading-anchor\"],[8],[0,\"Engines Roadmap\"],[9],[9],[0,\"\\n    \"],[7,\"p\",true],[8],[0,\"Ember Engines are currently pre-1.0 software and under active development. Check out our \"],[7,\"a\",true],[10,\"href\",\"https://discuss.emberjs.com/t/engines-1-0-roadmap/14914\"],[10,\"class\",\"docs-md__a\"],[8],[0,\"roadmap to 1.0\"],[9],[0,\".\"],[9],[0,\"\\n\\n      \"],[7,\"h2\",true],[10,\"id\",\"additional-resources\"],[10,\"class\",\"docs-md__h2\"],[8],[7,\"a\",true],[10,\"href\",\"#additional-resources\"],[10,\"class\",\"heading-anchor\"],[8],[0,\"Additional Resources\"],[9],[9],[0,\"\\n    \"],[7,\"ul\",true],[8],[0,\"\\n\"],[7,\"li\",true],[8],[7,\"a\",true],[10,\"href\",\"https://github.com/ember-engines/ember-engines\"],[10,\"class\",\"docs-md__a\"],[8],[0,\"Ember Engines on GitHub\"],[9],[9],[0,\"\\n\"],[7,\"li\",true],[8],[7,\"a\",true],[10,\"href\",\"https://github.com/emberjs/rfcs/pull/10\"],[10,\"class\",\"docs-md__a\"],[8],[0,\"Engines RFC\"],[9],[9],[0,\"\\n\"],[7,\"li\",true],[8],[7,\"a\",true],[10,\"href\",\"https://github.com/emberjs/rfcs/pull/122\"],[10,\"class\",\"docs-md__a\"],[8],[0,\"Engine Linking RFC\"],[9],[9],[0,\"\\n\"],[7,\"li\",true],[8],[7,\"a\",true],[10,\"href\",\"https://github.com/ember-engines/ember-asset-loader\"],[10,\"class\",\"docs-md__a\"],[8],[0,\"Ember Asset Loader on GitHub\"],[9],[9],[0,\"\\n\"],[7,\"li\",true],[8],[7,\"a\",true],[10,\"href\",\"https://github.com/emberjs/rfcs/pull/153\"],[10,\"class\",\"docs-md__a\"],[8],[0,\"Asset Manifest RFC\"],[9],[9],[0,\"\\n\"],[7,\"li\",true],[8],[7,\"a\",true],[10,\"href\",\"https://github.com/emberjs/rfcs/pull/158\"],[10,\"class\",\"docs-md__a\"],[8],[0,\"Asset Loader Service RFC\"],[9],[9],[0,\"\\n\"],[9],[0,\"\\n\"],[7,\"p\",true],[8],[7,\"em\",true],[8],[0,\"Note: this guide is accurate as of the 0.8.x release of ember-engines\"],[9],[0,\".\"],[9],[9]],\"hasEval\":false}",
    "meta": {
      "moduleName": "dummy/templates/docs/introduction.hbs"
    }
  });

  _exports.default = _default;
});
;define("dummy/templates/docs/lazy-loading", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "4t2wXaF7",
    "block": "{\"symbols\":[],\"statements\":[[7,\"div\",true],[10,\"class\",\"docs-md\"],[8],[7,\"h1\",true],[10,\"id\",\"lazy-loading\"],[10,\"class\",\"docs-md__h1\"],[8],[0,\"Lazy Loading\"],[9],[0,\"\\n    \"],[7,\"p\",true],[8],[0,\"The moment we've all be waiting for, let's talk about lazy loading!\"],[9],[0,\"\\n\"],[7,\"p\",true],[8],[0,\"If you've been following along and paying attention, we've stressed frequently the idea that Engine's are isolated. Well, assuming you haven't violated those isolations principles anywhere, enabling lazy loading for your Engine is as simple as setting a flag:\"],[9],[0,\"\\n\"],[7,\"pre\",true],[10,\"class\",\"docs-md__code\"],[8],[7,\"code\",true],[10,\"class\",\"undefinedjs\"],[8],[7,\"span\",true],[10,\"class\",\"hljs-comment\"],[8],[0,\"// super-blog/index.js\"],[9],[0,\"\\n\"],[7,\"span\",true],[10,\"class\",\"hljs-keyword\"],[8],[0,\"const\"],[9],[0,\" EngineAddon = \"],[7,\"span\",true],[10,\"class\",\"hljs-built_in\"],[8],[0,\"require\"],[9],[0,\"(\"],[7,\"span\",true],[10,\"class\",\"hljs-string\"],[8],[0,\"'ember-engines/lib/engine-addon'\"],[9],[0,\");\\n\"],[7,\"span\",true],[10,\"class\",\"hljs-built_in\"],[8],[0,\"module\"],[9],[0,\".exports = EngineAddon.extend({\\n  \"],[7,\"span\",true],[10,\"class\",\"hljs-attr\"],[8],[0,\"name\"],[9],[0,\": \"],[7,\"span\",true],[10,\"class\",\"hljs-string\"],[8],[0,\"'super-blog'\"],[9],[0,\",\\n  \"],[7,\"span\",true],[10,\"class\",\"hljs-attr\"],[8],[0,\"lazyLoading\"],[9],[0,\": {\\n    \"],[7,\"span\",true],[10,\"class\",\"hljs-attr\"],[8],[0,\"enabled\"],[9],[0,\": \"],[7,\"span\",true],[10,\"class\",\"hljs-literal\"],[8],[0,\"true\"],[9],[0,\"\\n  }\\n});\"],[9],[9],[0,\"\\n\"],[7,\"p\",true],[8],[0,\"Next time you build your application, you should have a lazy loading Engine!\"],[9],[0,\"\\n\\n      \"],[7,\"h2\",true],[10,\"id\",\"route-less-lazy-engines\"],[10,\"class\",\"docs-md__h2\"],[8],[7,\"a\",true],[10,\"href\",\"#route-less-lazy-engines\"],[10,\"class\",\"heading-anchor\"],[8],[0,\"Route-less Lazy Engines\"],[9],[9],[0,\"\\n    \"],[7,\"p\",true],[8],[0,\"Currently, lazy loading is not supported natively for route-less Engines. But you can use \"],[7,\"a\",true],[10,\"href\",\"https://github.com/buschtoens/ember-lazy-mount\"],[10,\"class\",\"docs-md__a\"],[8],[0,\"ember-lazy-mount\"],[9],[0,\" as solution for while. Progress can be tracked at \"],[7,\"a\",true],[10,\"href\",\"https://github.com/ember-engines/ember-engines/issues/232\"],[10,\"class\",\"docs-md__a\"],[8],[0,\"this issue\"],[9],[0,\".\"],[9],[0,\"\\n\\n      \"],[7,\"h2\",true],[10,\"id\",\"routing-considerations\"],[10,\"class\",\"docs-md__h2\"],[8],[7,\"a\",true],[10,\"href\",\"#routing-considerations\"],[10,\"class\",\"heading-anchor\"],[8],[0,\"Routing Considerations\"],[9],[9],[0,\"\\n    \"],[7,\"p\",true],[8],[0,\"When routing into a routable Engine that is lazily loaded there are some special considerations and subtle differences from how routing works in a normal Ember application.\"],[9],[0,\"\\n\\n      \"],[7,\"h3\",true],[10,\"id\",\"serialization-of-urls\"],[10,\"class\",\"docs-md__h3\"],[8],[7,\"a\",true],[10,\"href\",\"#serialization-of-urls\"],[10,\"class\",\"heading-anchor\"],[8],[0,\"Serialization of URLs\"],[9],[9],[0,\"\\n    \"],[7,\"p\",true],[8],[0,\"Since the links to your Engine are constructed before the Engine itself is loaded, you need to make sure the application has the necessary code to serialize data into the URLs. To that end, you need to replace any \"],[7,\"code\",true],[8],[0,\"Route#serialize\"],[9],[0,\" functions with route serializers, as defined in \"],[7,\"a\",true],[10,\"href\",\"https://github.com/emberjs/rfcs/blob/master/text/0120-route-serializers.md\"],[10,\"class\",\"docs-md__a\"],[8],[0,\"the Route Serializers RFC\"],[9],[0,\".\"],[9],[0,\"\\n\"],[7,\"p\",true],[8],[0,\"For example, if you had a \"],[7,\"code\",true],[8],[0,\"Post\"],[9],[0,\" route defined like so:\"],[9],[0,\"\\n\"],[7,\"pre\",true],[10,\"class\",\"docs-md__code\"],[8],[7,\"code\",true],[10,\"class\",\"undefinedjs\"],[8],[7,\"span\",true],[10,\"class\",\"hljs-keyword\"],[8],[0,\"import\"],[9],[0,\" Route \"],[7,\"span\",true],[10,\"class\",\"hljs-keyword\"],[8],[0,\"from\"],[9],[0,\" \"],[7,\"span\",true],[10,\"class\",\"hljs-string\"],[8],[0,\"\\\"@ember/routing/route\\\"\"],[9],[0,\";\\n\\n\"],[7,\"span\",true],[10,\"class\",\"hljs-keyword\"],[8],[0,\"export\"],[9],[0,\" \"],[7,\"span\",true],[10,\"class\",\"hljs-keyword\"],[8],[0,\"default\"],[9],[0,\" Route.extend({\\n  serialize(model) {\\n    \"],[7,\"span\",true],[10,\"class\",\"hljs-keyword\"],[8],[0,\"return\"],[9],[0,\" { \"],[7,\"span\",true],[10,\"class\",\"hljs-attr\"],[8],[0,\"post_id\"],[9],[0,\": model.id };\\n  }\\n});\"],[9],[9],[0,\"\\n\"],[7,\"p\",true],[8],[0,\"You would need to remove that function and inline it into your \"],[7,\"code\",true],[8],[0,\"routes.js\"],[9],[0,\" map, which is loaded pre-emptively with the application:\"],[9],[0,\"\\n\"],[7,\"pre\",true],[10,\"class\",\"docs-md__code\"],[8],[7,\"code\",true],[10,\"class\",\"undefinedjs\"],[8],[7,\"span\",true],[10,\"class\",\"hljs-function\"],[8],[7,\"span\",true],[10,\"class\",\"hljs-keyword\"],[8],[0,\"function\"],[9],[0,\" \"],[7,\"span\",true],[10,\"class\",\"hljs-title\"],[8],[0,\"serializePost\"],[9],[0,\"(\"],[7,\"span\",true],[10,\"class\",\"hljs-params\"],[8],[0,\"model\"],[9],[0,\") \"],[9],[0,\"{\\n  \"],[7,\"span\",true],[10,\"class\",\"hljs-keyword\"],[8],[0,\"return\"],[9],[0,\" { \"],[7,\"span\",true],[10,\"class\",\"hljs-attr\"],[8],[0,\"post_id\"],[9],[0,\": model.id };\\n}\\n\\n\"],[7,\"span\",true],[10,\"class\",\"hljs-keyword\"],[8],[0,\"export\"],[9],[0,\" \"],[7,\"span\",true],[10,\"class\",\"hljs-keyword\"],[8],[0,\"default\"],[9],[0,\" buildRoutes(\"],[7,\"span\",true],[10,\"class\",\"hljs-function\"],[8],[7,\"span\",true],[10,\"class\",\"hljs-keyword\"],[8],[0,\"function\"],[9],[0,\"(\"],[7,\"span\",true],[10,\"class\",\"hljs-params\"],[8],[9],[0,\") \"],[9],[0,\"{\\n  \"],[7,\"span\",true],[10,\"class\",\"hljs-keyword\"],[8],[0,\"this\"],[9],[0,\".route(\"],[7,\"span\",true],[10,\"class\",\"hljs-string\"],[8],[0,\"'post'\"],[9],[0,\", { \"],[7,\"span\",true],[10,\"class\",\"hljs-attr\"],[8],[0,\"serialize\"],[9],[0,\": serializePost });\\n});\"],[9],[9],[0,\"\\n\"],[7,\"p\",true],[8],[0,\"Note that route serializers are unique to Engines and won't work in normal applications. In a normal Ember application you should continue to use \"],[7,\"code\",true],[8],[0,\"Route#serialize\"],[9],[0,\".\"],[9],[0,\"\\n\\n      \"],[7,\"h3\",true],[10,\"id\",\"loading-error-substates\"],[10,\"class\",\"docs-md__h3\"],[8],[7,\"a\",true],[10,\"href\",\"#loading-error-substates\"],[10,\"class\",\"heading-anchor\"],[8],[0,\"Loading / Error Substates\"],[9],[9],[0,\"\\n    \"],[7,\"p\",true],[8],[0,\"The loading and error substates work in a similar fashion to \"],[7,\"a\",true],[10,\"href\",\"https://guides.emberjs.com/release/routing/loading-and-error-substates/\"],[10,\"class\",\"docs-md__a\"],[8],[0,\"substates in a normal Ember app\"],[9],[0,\". The only difference is that lazily loaded Engines will enter a loading state while the assets for the Engine are loaded and can enter an error state when an asset fails to load.\"],[9],[0,\"\\n\\n      \"],[7,\"h2\",true],[10,\"id\",\"built-engine-output\"],[10,\"class\",\"docs-md__h2\"],[8],[7,\"a\",true],[10,\"href\",\"#built-engine-output\"],[10,\"class\",\"heading-anchor\"],[8],[0,\"Built Engine Output\"],[9],[9],[0,\"\\n    \\n      \"],[7,\"h2\",true],[10,\"id\",\"eager-engines\"],[10,\"class\",\"docs-md__h2\"],[8],[7,\"a\",true],[10,\"href\",\"#eager-engines\"],[10,\"class\",\"heading-anchor\"],[8],[0,\"Eager Engines\"],[9],[9],[0,\"\\n    \"],[7,\"p\",true],[8],[0,\"Eager engines are built approximately the same as existing addons. Differences are limited to consolidating the namespace of \"],[7,\"code\",true],[8],[0,\"app\"],[9],[0,\" code inside of an engine into the engine's namespace instead of the host application.\"],[9],[0,\"\\n\"],[7,\"p\",true],[8],[0,\"Beyond that it adds in a configuration module for the engine, and nothing else. It is a remarkably straightforward process.\"],[9],[0,\"\\n\\n      \"],[7,\"h1\",true],[10,\"id\",\"lazy-engines\"],[10,\"class\",\"docs-md__h1\"],[8],[0,\"Lazy Engines\"],[9],[0,\"\\n    \"],[7,\"p\",true],[8],[0,\"Lazy engines are built in the same way as eager engines, but their assets are not combined back into the host application's \"],[7,\"code\",true],[8],[0,\"vendor.js\"],[9],[0,\" file. This means that they are run through a separate and unique build process from what a default addon will go through, though it reaches out to the upstream implementation in Ember CLI where possible.\"],[9],[0,\"\\n\"],[7,\"p\",true],[8],[0,\"A lazy engine's output (\"],[7,\"code\",true],[8],[0,\"lazy-engine\"],[9],[0,\") looks like this:\"],[9],[0,\"\\n\"],[7,\"pre\",true],[10,\"class\",\"docs-md__code\"],[8],[7,\"code\",true],[8],[0,\"dist\\n├── assets\\n│   ├── host-application.css\\n│   ├── host-application.js\\n│   ├── vendor.css\\n│   └── vendor.js\\n├── engines-dist\\n│   └── lazy-engine\\n|       ├── config\\n│       |   ├── enviroment.js\\n│       ├── assets\\n│       │   ├── engine-vendor.css\\n│       │   ├── engine-vendor.js\\n│       │   ├── engine.css\\n│       │   └── engine.js\\n│       └── public-asset.jpg\\n├── asset-manifest.json\\n├── crossdomain.xml\\n├── index.html\\n└── robots.txt\"],[9],[9],[0,\"\\n      \"],[7,\"h3\",true],[10,\"id\",\"-routes-js\"],[10,\"class\",\"docs-md__h3\"],[8],[7,\"a\",true],[10,\"href\",\"#-routes-js\"],[10,\"class\",\"heading-anchor\"],[8],[7,\"code\",true],[8],[0,\"/routes.js\"],[9],[9],[9],[0,\"\\n    \"],[7,\"p\",true],[8],[0,\" The \"],[7,\"code\",true],[8],[0,\"routes.js\"],[9],[0,\" file and anything it \"],[7,\"code\",true],[8],[0,\"import\"],[9],[0,\"s must be present at boot time of\\nthe host application. It will be bundled into the host application's \"],[7,\"code\",true],[8],[0,\"vendor.js\"],[9],[0,\"\\nfile. This location should be considered \"],[7,\"code\",true],[8],[0,\"undefined\"],[9],[0,\" behavior and should not be\\nrelied upon as it may change in the future.\"],[9],[0,\"\\n\"],[7,\"p\",true],[8],[0,\" Its module name inside of the host application will be \"],[7,\"code\",true],[8],[0,\"lazy-engine/routes\"],[9],[0,\". Any\\n\"],[7,\"code\",true],[8],[0,\"import\"],[9],[0,\"s will also be in the \"],[7,\"code\",true],[8],[0,\"lazy-engine\"],[9],[0,\" module path.\"],[9],[0,\"\\n\\n      \"],[7,\"h3\",true],[10,\"id\",\"-app\"],[10,\"class\",\"docs-md__h3\"],[8],[7,\"a\",true],[10,\"href\",\"#-app\"],[10,\"class\",\"heading-anchor\"],[8],[7,\"code\",true],[8],[0,\"/app\"],[9],[9],[9],[0,\"\\n    \"],[7,\"p\",true],[8],[0,\" Assets in this folder don't make sense, it's a bad idea to use them because they break the\\nisolation guarantees of engines.\"],[9],[0,\"\\n\\n      \"],[7,\"h3\",true],[10,\"id\",\"-addon\"],[10,\"class\",\"docs-md__h3\"],[8],[7,\"a\",true],[10,\"href\",\"#-addon\"],[10,\"class\",\"heading-anchor\"],[8],[7,\"code\",true],[8],[0,\"/addon\"],[9],[9],[9],[0,\"\\n    \"],[7,\"p\",true],[8],[0,\"JavaScript assets in this folder will be processed as per normal addon behavior\\nexcept that they will end up inside of the \"],[7,\"code\",true],[8],[0,\"engine.js\"],[9],[0,\" file. Their module\\ndefinition will be rooted to the engine name.\"],[9],[0,\"\\n\"],[7,\"p\",true],[8],[0,\" For example, \"],[7,\"code\",true],[8],[0,\"/addon/routes/application.js\"],[9],[0,\" will result in a JavaScript module\\nnamed \"],[7,\"code\",true],[8],[0,\"lazy-engine/routes/application\"],[9],[0,\" inside of the\\n\"],[7,\"code\",true],[8],[0,\"/dist/engines-dist/lazy-engine/engine.js\"],[9],[0,\" file.\"],[9],[0,\"\\n\\n      \"],[7,\"h3\",true],[10,\"id\",\"-addon-templates\"],[10,\"class\",\"docs-md__h3\"],[8],[7,\"a\",true],[10,\"href\",\"#-addon-templates\"],[10,\"class\",\"heading-anchor\"],[8],[7,\"code\",true],[8],[0,\"/addon/templates\"],[9],[9],[9],[0,\"\\n    \"],[7,\"p\",true],[8],[0,\" Templates will be compiled by your engine but they must include\\n\"],[7,\"code\",true],[8],[0,\"ember-cli-htmlbars\"],[9],[0,\" inside of \"],[7,\"code\",true],[8],[0,\"dependencies\"],[9],[0,\" in the engine's \"],[7,\"code\",true],[8],[0,\"package.json\"],[9],[0,\".\"],[9],[0,\"\\n\"],[7,\"p\",true],[8],[0,\" As an example, \"],[7,\"code\",true],[8],[0,\"/addon/templates/application.hbs\"],[9],[0,\" will result in a JavaScript\\nmodule named \"],[7,\"code\",true],[8],[0,\"lazy-engine/templates/application\"],[9],[0,\" inside of the\\n\"],[7,\"code\",true],[8],[0,\"/dist/engines-dist/lazy-engine/engine.js\"],[9],[0,\" file.\"],[9],[0,\"\\n\\n      \"],[7,\"h3\",true],[10,\"id\",\"-addon-styles-css\"],[10,\"class\",\"docs-md__h3\"],[8],[7,\"a\",true],[10,\"href\",\"#-addon-styles-css\"],[10,\"class\",\"heading-anchor\"],[8],[7,\"code\",true],[8],[0,\"/addon/styles/**/*.css\"],[9],[9],[9],[0,\"\\n    \"],[7,\"p\",true],[8],[0,\"CSS files will be built similarly to how they are processed inside of typical\\nadddons. Typical addon behavior is as follows:\"],[9],[0,\"\\n\"],[7,\"ol\",true],[8],[0,\"\\n\"],[7,\"li\",true],[8],[7,\"p\",true],[8],[0,\"All nested addons are processed. Each of them may return a \"],[7,\"code\",true],[8],[0,\"style\"],[9],[0,\" tree. By\\ndefault these style trees only contain the contents of \"],[7,\"code\",true],[8],[0,\"addon/styles/addon.css\"],[9],[0,\".\\nThe contents of the \"],[7,\"code\",true],[8],[0,\"addon/styles/addon.css\"],[9],[0,\" file is moved inside of the\\nBroccoli tree to \"],[7,\"code\",true],[8],[0,\"${addon-name}.css\"],[9],[0,\". This can be modified if the addon\\nspecifies a custom \"],[7,\"code\",true],[8],[0,\"treeForStyle\"],[9],[0,\" hook.\"],[9],[0,\"\\n\"],[9],[0,\"\\n\"],[7,\"li\",true],[8],[7,\"p\",true],[8],[0,\"All top-level addons (those directly depended upon by the host) have all of\\n\"],[7,\"code\",true],[8],[0,\"addon/styles/**/*.css\"],[9],[0,\" included into the host's \"],[7,\"code\",true],[8],[0,\"vendor.css\"],[9],[0,\" file. For example\\n\"],[7,\"code\",true],[8],[0,\"addon/styles/foo.css\"],[9],[0,\" will appear in the output Broccoli tree at \"],[7,\"code\",true],[8],[0,\"foo.css\"],[9],[0,\".\"],[9],[0,\"\\n\"],[9],[0,\"\\n\"],[7,\"li\",true],[8],[7,\"p\",true],[8],[0,\"If you name a CSS file in one of the top-level addons the same as an addon\\nname (e.g. addon name is \"],[7,\"code\",true],[8],[0,\"alpha\"],[9],[0,\"), any top-level addon which has a CSS file\\nof the same name as that addon (\"],[7,\"code\",true],[8],[0,\"alpha.css\"],[9],[0,\") and is provided by an addon\\nlexicographically after it (\"],[7,\"code\",true],[8],[0,\"zeta\"],[9],[0,\") will clobber the contents of\\n\"],[7,\"code\",true],[8],[0,\"alpha/addon/styles/addon.css\"],[9],[0,\" (from anywhere in the dependency graph) with\\n\"],[7,\"code\",true],[8],[0,\"zeta/addon/styles/alpha.css\"],[9],[0,\". (This is also a possible consequence of DAG\\ntopsorting.)\"],[9],[0,\"\\n\"],[9],[0,\"\\n\"],[9],[0,\"\\n\"],[7,\"p\",true],[8],[0,\"Lazy engines will use a variation of this approach:\"],[9],[0,\"\\n\"],[7,\"ol\",true],[8],[0,\"\\n\"],[7,\"li\",true],[8],[7,\"p\",true],[8],[0,\"The engine itself will be treated as if it is a top-level dependency. This\\nmeans that \"],[7,\"code\",true],[8],[0,\"addon/styles/**/*.css\"],[9],[0,\" will end up inside of \"],[7,\"code\",true],[8],[0,\"engine.css\"],[9],[0,\".\"],[9],[0,\"\\n\"],[9],[0,\"\\n\"],[7,\"li\",true],[8],[7,\"p\",true],[8],[0,\"Child addons of a lazy engine will be treated as if they are top-level\\naddons. This means that they will have their \"],[7,\"code\",true],[8],[0,\"treeForStyle\"],[9],[0,\" hook executed and\\nthe result of that hook will be merged into \"],[7,\"code\",true],[8],[0,\"engine-vendor.css\"],[9],[0,\" in\\nDAG/lexicographic order.\"],[9],[0,\"\\n\"],[9],[0,\"\\n\"],[7,\"li\",true],[8],[7,\"p\",true],[8],[0,\"Nested lazy engine boundaries will not be crossed when calculating the child\\n\"],[7,\"code\",true],[8],[0,\"treeForStyle\"],[9],[0,\" hook.\"],[9],[0,\"\\n\\n      \"],[7,\"h3\",true],[10,\"id\",\"-public\"],[10,\"class\",\"docs-md__h3\"],[8],[7,\"a\",true],[10,\"href\",\"#-public\"],[10,\"class\",\"heading-anchor\"],[8],[7,\"code\",true],[8],[0,\"/public\"],[9],[9],[9],[0,\"\\n    \"],[9],[0,\"\\n\"],[9],[0,\"\\n\"],[7,\"p\",true],[8],[0,\"Assets appearing in the public folder will appear at the root of the engine\\noutput with no transformation. For example \"],[7,\"code\",true],[8],[0,\"/public/public-asset.jpg\"],[9],[0,\" appears at\\nthe root level of the \"],[7,\"code\",true],[8],[0,\"/dist/engines-dist/lazy-engine/\"],[9],[0,\" output folder. Assets in\\nthis folder have no default behavior and you are responsible for any custom\\nbehavior.\"],[9],[0,\"\\n\\n      \"],[7,\"h3\",true],[10,\"id\",\"asset-manifest\"],[10,\"class\",\"docs-md__h3\"],[8],[7,\"a\",true],[10,\"href\",\"#asset-manifest\"],[10,\"class\",\"heading-anchor\"],[8],[0,\"Asset Manifest\"],[9],[9],[0,\"\\n    \"],[7,\"p\",true],[8],[0,\"Further, the engine must enumerate its primary bundles (JS and CSS) in order to\\nbe loaded by the asset loading service. That will be generated at\\n\"],[7,\"code\",true],[8],[0,\"/dist/asset-manifest.json\"],[9],[0,\" at build time. It will also by default be inserted\\ninto a meta tag config inside of the host application's \"],[7,\"code\",true],[8],[0,\"index.html\"],[9],[0,\".\"],[9],[0,\"\\n\"],[7,\"p\",true],[8],[0,\"A asset manifest output looks like this:\"],[9],[0,\"\\n\"],[7,\"pre\",true],[10,\"class\",\"docs-md__code\"],[8],[7,\"code\",true],[10,\"class\",\"undefinedjson\"],[8],[0,\"{\\n  \"],[7,\"span\",true],[10,\"class\",\"hljs-attr\"],[8],[0,\"\\\"bundles\\\"\"],[9],[0,\": {\\n    \"],[7,\"span\",true],[10,\"class\",\"hljs-attr\"],[8],[0,\"\\\"guide\\\"\"],[9],[0,\": {\\n      \"],[7,\"span\",true],[10,\"class\",\"hljs-attr\"],[8],[0,\"\\\"assets\\\"\"],[9],[0,\": [\\n        {\\n          \"],[7,\"span\",true],[10,\"class\",\"hljs-attr\"],[8],[0,\"\\\"uri\\\"\"],[9],[0,\": \"],[7,\"span\",true],[10,\"class\",\"hljs-string\"],[8],[0,\"\\\"/engines-dist/<lazy-engine>/assets/engine-vendor.js\\\"\"],[9],[0,\",\\n          \"],[7,\"span\",true],[10,\"class\",\"hljs-attr\"],[8],[0,\"\\\"type\\\"\"],[9],[0,\": \"],[7,\"span\",true],[10,\"class\",\"hljs-string\"],[8],[0,\"\\\"js\\\"\"],[9],[0,\"\\n        },\\n        {\\n          \"],[7,\"span\",true],[10,\"class\",\"hljs-attr\"],[8],[0,\"\\\"uri\\\"\"],[9],[0,\": \"],[7,\"span\",true],[10,\"class\",\"hljs-string\"],[8],[0,\"\\\"/engines-dist/<lazy-engine>/assets/engine.js\\\"\"],[9],[0,\",\\n          \"],[7,\"span\",true],[10,\"class\",\"hljs-attr\"],[8],[0,\"\\\"type\\\"\"],[9],[0,\": \"],[7,\"span\",true],[10,\"class\",\"hljs-string\"],[8],[0,\"\\\"js\\\"\"],[9],[0,\"\\n        }\\n      ]\\n    }\\n  }\\n}\"],[9],[9],[0,\"\\n\\n      \"],[7,\"h2\",true],[10,\"id\",\"nested-eager-engines\"],[10,\"class\",\"docs-md__h2\"],[8],[7,\"a\",true],[10,\"href\",\"#nested-eager-engines\"],[10,\"class\",\"heading-anchor\"],[8],[0,\"Nested Eager Engines\"],[9],[9],[0,\"\\n    \"],[7,\"p\",true],[8],[0,\"Nested eager engines will be built into their host engine or application.\\nModules will be deduplicated within the engine boundary and with the host\\napplication.\"],[9],[0,\"\\n\\n      \"],[7,\"h2\",true],[10,\"id\",\"nested-lazy-engines\"],[10,\"class\",\"docs-md__h2\"],[8],[7,\"a\",true],[10,\"href\",\"#nested-lazy-engines\"],[10,\"class\",\"heading-anchor\"],[8],[0,\"Nested Lazy Engines\"],[9],[9],[0,\"\\n    \"],[7,\"p\",true],[8],[0,\"Nested lazy engines will be promoted to \"],[7,\"code\",true],[8],[0,\"/dist/engines-dist/\"],[9],[0,\" folder in the\\nbuild output. Module deduplication will only be done with the host application.\"],[9],[9]],\"hasEval\":false}",
    "meta": {
      "moduleName": "dummy/templates/docs/lazy-loading.hbs"
    }
  });

  _exports.default = _default;
});
;define("dummy/templates/docs/linking-and-external-links", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "dq7X2vAo",
    "block": "{\"symbols\":[],\"statements\":[[7,\"div\",true],[10,\"class\",\"docs-md\"],[8],[7,\"h1\",true],[10,\"id\",\"linking-and-external-links\"],[10,\"class\",\"docs-md__h1\"],[8],[0,\"Linking And External Links\"],[9],[0,\"\\n    \"],[7,\"p\",true],[8],[0,\"Routing and linking within and between Engines is a bit more complicated than with normal Ember applications. This is because Engines are isolated and thus don't know about routes beyond their own borders. Let's look at what this means practically.\"],[9],[0,\"\\n\\n      \"],[7,\"h2\",true],[10,\"id\",\"linking-within-an-engine\"],[10,\"class\",\"docs-md__h2\"],[8],[7,\"a\",true],[10,\"href\",\"#linking-within-an-engine\"],[10,\"class\",\"heading-anchor\"],[8],[0,\"Linking Within An Engine\"],[9],[9],[0,\"\\n    \"],[7,\"p\",true],[8],[0,\"Within a routable Engine, route paths are relative to the Engine's \\\"mount point\\\". That is, the route path at which it is mounted.\"],[9],[0,\"\\n\"],[7,\"p\",true],[8],[0,\"In other words, if you're trying to go to route \"],[7,\"code\",true],[8],[0,\"super-blog.posts.index\"],[9],[0,\", you might do the following from the host application:\"],[9],[0,\"\\n\"],[7,\"pre\",true],[10,\"class\",\"docs-md__code\"],[8],[7,\"code\",true],[10,\"class\",\"undefinedhbs\"],[8],[7,\"span\",true],[10,\"class\",\"hljs-template-tag\"],[8],[0,\"{{#\"],[7,\"span\",true],[10,\"class\",\"hljs-name\"],[8],[0,\"link-to\"],[9],[0,\" \"],[7,\"span\",true],[10,\"class\",\"hljs-string\"],[8],[0,\"\\\"super-blog.posts.index\\\"\"],[9],[0,\"}}\"],[9],[7,\"span\",true],[10,\"class\",\"xml\"],[8],[0,\"Comments\"],[9],[7,\"span\",true],[10,\"class\",\"hljs-template-tag\"],[8],[0,\"{{/\"],[7,\"span\",true],[10,\"class\",\"hljs-name\"],[8],[0,\"link-to\"],[9],[0,\"}}\"],[9],[9],[9],[0,\"\\n\"],[7,\"p\",true],[8],[0,\"However, if you are inside the \"],[7,\"code\",true],[8],[0,\"super-blog\"],[9],[0,\" Engine, you would need to do the following:\"],[9],[0,\"\\n\"],[7,\"pre\",true],[10,\"class\",\"docs-md__code\"],[8],[7,\"code\",true],[10,\"class\",\"undefinedhbs\"],[8],[7,\"span\",true],[10,\"class\",\"hljs-template-tag\"],[8],[0,\"{{#\"],[7,\"span\",true],[10,\"class\",\"hljs-name\"],[8],[0,\"link-to\"],[9],[0,\" \"],[7,\"span\",true],[10,\"class\",\"hljs-string\"],[8],[0,\"\\\"posts.index\\\"\"],[9],[0,\"}}\"],[9],[7,\"span\",true],[10,\"class\",\"xml\"],[8],[0,\"Comments\"],[9],[7,\"span\",true],[10,\"class\",\"hljs-template-tag\"],[8],[0,\"{{/\"],[7,\"span\",true],[10,\"class\",\"hljs-name\"],[8],[0,\"link-to\"],[9],[0,\"}}\"],[9],[9],[9],[0,\"\\n\"],[7,\"p\",true],[8],[0,\"Notice that the \"],[7,\"code\",true],[8],[0,\"super-blog\"],[9],[0,\" portion of the path is now missing, this is because that is the Engine's mount point.\"],[9],[0,\"\\n\"],[7,\"p\",true],[8],[0,\"Previously we mentioned that each Engine has it's own \"],[7,\"code\",true],[8],[0,\"application\"],[9],[0,\" route, that route corresponds to the mount point when within the Engine. So, if you wanted to go to \"],[7,\"code\",true],[8],[0,\"super-blog\"],[9],[0,\" (or the root of the Engine) from within the Engine itself, you would do something like:\"],[9],[0,\"\\n\"],[7,\"pre\",true],[10,\"class\",\"docs-md__code\"],[8],[7,\"code\",true],[10,\"class\",\"undefinedhbs\"],[8],[7,\"span\",true],[10,\"class\",\"hljs-template-tag\"],[8],[0,\"{{#\"],[7,\"span\",true],[10,\"class\",\"hljs-name\"],[8],[0,\"link-to\"],[9],[0,\" \"],[7,\"span\",true],[10,\"class\",\"hljs-string\"],[8],[0,\"\\\"application\\\"\"],[9],[0,\"}}\"],[9],[7,\"span\",true],[10,\"class\",\"xml\"],[8],[0,\"Goes to Blog Home\"],[9],[7,\"span\",true],[10,\"class\",\"hljs-template-tag\"],[8],[0,\"{{/\"],[7,\"span\",true],[10,\"class\",\"hljs-name\"],[8],[0,\"link-to\"],[9],[0,\"}}\"],[9],[9],[9],[0,\"\\n\"],[7,\"p\",true],[8],[0,\"Or, maybe even:\"],[9],[0,\"\\n\"],[7,\"pre\",true],[10,\"class\",\"docs-md__code\"],[8],[7,\"code\",true],[10,\"class\",\"undefinedhbs\"],[8],[7,\"span\",true],[10,\"class\",\"hljs-template-tag\"],[8],[0,\"{{#\"],[7,\"span\",true],[10,\"class\",\"hljs-name\"],[8],[0,\"link-to\"],[9],[0,\" \"],[7,\"span\",true],[10,\"class\",\"hljs-string\"],[8],[0,\"\\\"index\\\"\"],[9],[0,\"}}\"],[9],[7,\"span\",true],[10,\"class\",\"xml\"],[8],[0,\"Also goes to Blog Home\"],[9],[7,\"span\",true],[10,\"class\",\"hljs-template-tag\"],[8],[0,\"{{/\"],[7,\"span\",true],[10,\"class\",\"hljs-name\"],[8],[0,\"link-to\"],[9],[0,\"}}\"],[9],[9],[9],[0,\"\\n\"],[7,\"p\",true],[8],[0,\"It's a little confusing at first, but the gist is to think of the route paths as if the Engine were it's own application.\"],[9],[0,\"\\n\\n      \"],[7,\"h2\",true],[10,\"id\",\"external-routes\"],[10,\"class\",\"docs-md__h2\"],[8],[7,\"a\",true],[10,\"href\",\"#external-routes\"],[10,\"class\",\"heading-anchor\"],[8],[0,\"External Routes\"],[9],[9],[0,\"\\n    \"],[7,\"p\",true],[8],[0,\"If route paths are scoped to an Engine's mount point, then the next logical question is \\\"what if you need to link to a path that isn't below the mount point?\\\"\"],[9],[0,\"\\n\"],[7,\"p\",true],[8],[0,\"We refer to any routes that don't use the Engine's mount point as \\\"external routes\\\", because they are effectively \\\"external\\\" or \\\"outside\\\" the Engine. Since Engines are intended to be isolated, they shouldn't have intimate knowledge of the paths to external routes as they may change depending on where the Engine is mounted. That said, there are legitimate use cases where Engines need to link to routes outside themselves.\"],[9],[0,\"\\n\"],[7,\"p\",true],[8],[0,\"In order to deal with this, Engines allow you to specify external routes as dependencies:\"],[9],[0,\"\\n\"],[7,\"pre\",true],[10,\"class\",\"docs-md__code\"],[8],[7,\"code\",true],[10,\"class\",\"undefinedjs\"],[8],[7,\"span\",true],[10,\"class\",\"hljs-comment\"],[8],[0,\"// super-blog/addon/engine.js\"],[9],[0,\"\\n\"],[7,\"span\",true],[10,\"class\",\"hljs-keyword\"],[8],[0,\"export\"],[9],[0,\" \"],[7,\"span\",true],[10,\"class\",\"hljs-keyword\"],[8],[0,\"default\"],[9],[0,\" Engine.extend({\\n  \"],[7,\"span\",true],[10,\"class\",\"hljs-comment\"],[8],[0,\"// ...\"],[9],[0,\"\\n  \"],[7,\"span\",true],[10,\"class\",\"hljs-attr\"],[8],[0,\"dependencies\"],[9],[0,\": {\\n    \"],[7,\"span\",true],[10,\"class\",\"hljs-attr\"],[8],[0,\"externalRoutes\"],[9],[0,\": [\\n      \"],[7,\"span\",true],[10,\"class\",\"hljs-string\"],[8],[0,\"'home'\"],[9],[0,\",\\n      \"],[7,\"span\",true],[10,\"class\",\"hljs-string\"],[8],[0,\"'settings'\"],[9],[0,\"\\n    ]\\n  }\\n});\"],[9],[9],[0,\"\\n\"],[7,\"p\",true],[8],[0,\"External routes define things that your Engine needs to link to. The host is then responsible for telling you where those things are. In other words, the Engine defines \"],[7,\"em\",true],[8],[0,\"what\"],[9],[0,\" it would like to go to and the application tells it \"],[7,\"em\",true],[8],[0,\"where\"],[9],[0,\" that is.\"],[9],[0,\"\\n\"],[7,\"p\",true],[8],[0,\"This is an important mental shift. Normal links define \"],[7,\"em\",true],[8],[0,\"where\"],[9],[0,\" they want to go to, but external links define \"],[7,\"em\",true],[8],[0,\"what\"],[9],[0,\" they want to go to and the host application tells it \"],[7,\"em\",true],[8],[0,\"where\"],[9],[0,\" that is.\"],[9],[0,\"\\n\"],[7,\"p\",true],[8],[0,\"So, when you mount your Engine, you'll need to make sure the host specifies appropriate paths for each of the external routes the Engine needs:\"],[9],[0,\"\\n\"],[7,\"pre\",true],[10,\"class\",\"docs-md__code\"],[8],[7,\"code\",true],[10,\"class\",\"undefinedjs\"],[8],[7,\"span\",true],[10,\"class\",\"hljs-comment\"],[8],[0,\"// dummy/app/app.js\"],[9],[0,\"\\n\"],[7,\"span\",true],[10,\"class\",\"hljs-keyword\"],[8],[0,\"import\"],[9],[0,\" Application \"],[7,\"span\",true],[10,\"class\",\"hljs-keyword\"],[8],[0,\"from\"],[9],[0,\" \"],[7,\"span\",true],[10,\"class\",\"hljs-string\"],[8],[0,\"'@ember/application'\"],[9],[0,\";\\n\\n\"],[7,\"span\",true],[10,\"class\",\"hljs-keyword\"],[8],[0,\"const\"],[9],[0,\" App = Application.extend({\\n  \"],[7,\"span\",true],[10,\"class\",\"hljs-comment\"],[8],[0,\"// ...\"],[9],[0,\"\\n  \"],[7,\"span\",true],[10,\"class\",\"hljs-attr\"],[8],[0,\"engines\"],[9],[0,\": {\\n    \"],[7,\"span\",true],[10,\"class\",\"hljs-attr\"],[8],[0,\"superBlog\"],[9],[0,\": {\\n      \"],[7,\"span\",true],[10,\"class\",\"hljs-attr\"],[8],[0,\"dependencies\"],[9],[0,\": {\\n        \"],[7,\"span\",true],[10,\"class\",\"hljs-attr\"],[8],[0,\"externalRoutes\"],[9],[0,\": {\\n          \"],[7,\"span\",true],[10,\"class\",\"hljs-attr\"],[8],[0,\"home\"],[9],[0,\": \"],[7,\"span\",true],[10,\"class\",\"hljs-string\"],[8],[0,\"'home.index'\"],[9],[0,\",\\n          \"],[7,\"span\",true],[10,\"class\",\"hljs-attr\"],[8],[0,\"settings\"],[9],[0,\": \"],[7,\"span\",true],[10,\"class\",\"hljs-string\"],[8],[0,\"'settings.blog.index'\"],[9],[0,\"\\n        }\\n      }\\n    }\\n  }\\n});\"],[9],[9],[0,\"\\n\"],[7,\"p\",true],[8],[7,\"em\",true],[8],[0,\"Note that the Engine name, which is normally dasherized, is camel-cased here instead.\"],[9],[9],[0,\"\\n\"],[7,\"p\",true],[8],[0,\"You can use these external routes within your Engine via the \"],[7,\"code\",true],[8],[0,\"{{link-to-external}}\"],[9],[0,\" component:\"],[9],[0,\"\\n\"],[7,\"pre\",true],[10,\"class\",\"docs-md__code\"],[8],[7,\"code\",true],[10,\"class\",\"undefinedhbs\"],[8],[7,\"span\",true],[10,\"class\",\"hljs-template-variable\"],[8],[0,\"{{link-to-external \"],[7,\"span\",true],[10,\"class\",\"hljs-string\"],[8],[0,\"\\\"Go home\\\"\"],[9],[0,\" \"],[7,\"span\",true],[10,\"class\",\"hljs-string\"],[8],[0,\"\\\"home\\\"\"],[9],[0,\"}}\"],[9],[9],[9],[0,\"\\n\"],[7,\"p\",true],[8],[0,\"Or, one of the programmatic APIs, such as \"],[7,\"code\",true],[8],[0,\"Route#transitionToExternal\"],[9],[0,\" and \"],[7,\"code\",true],[8],[0,\"Route#replaceWithExternal\"],[9],[0,\":\"],[9],[0,\"\\n\"],[7,\"pre\",true],[10,\"class\",\"docs-md__code\"],[8],[7,\"code\",true],[10,\"class\",\"undefinedjs\"],[8],[7,\"span\",true],[10,\"class\",\"hljs-keyword\"],[8],[0,\"import\"],[9],[0,\" Route \"],[7,\"span\",true],[10,\"class\",\"hljs-keyword\"],[8],[0,\"from\"],[9],[0,\" \"],[7,\"span\",true],[10,\"class\",\"hljs-string\"],[8],[0,\"\\\"@ember/routing/route\\\"\"],[9],[0,\";\\n\\n\"],[7,\"span\",true],[10,\"class\",\"hljs-keyword\"],[8],[0,\"export\"],[9],[0,\" \"],[7,\"span\",true],[10,\"class\",\"hljs-keyword\"],[8],[0,\"default\"],[9],[0,\" Route.extend({\\n  \"],[7,\"span\",true],[10,\"class\",\"hljs-attr\"],[8],[0,\"actions\"],[9],[0,\": {\\n    goHome() {\\n      \"],[7,\"span\",true],[10,\"class\",\"hljs-keyword\"],[8],[0,\"this\"],[9],[0,\".transitionToExternal(\"],[7,\"span\",true],[10,\"class\",\"hljs-string\"],[8],[0,\"'home'\"],[9],[0,\");\\n    }\\n  }\\n});\"],[9],[9],[0,\"\\n\\n      \"],[7,\"h3\",true],[10,\"id\",\"using-external-routes-for-internal-locations\"],[10,\"class\",\"docs-md__h3\"],[8],[7,\"a\",true],[10,\"href\",\"#using-external-routes-for-internal-locations\"],[10,\"class\",\"heading-anchor\"],[8],[0,\"Using External Routes for Internal locations\"],[9],[9],[0,\"\\n    \"],[7,\"p\",true],[8],[0,\"In most cases, you should only need to use external routes to link to locations that you expect to be outside of your Engine. However, there are instances where you might need a link that could potentially be internal to your Engine. In which case, external routes can still work effectively, since they represent \"],[7,\"em\",true],[8],[0,\"what\"],[9],[0,\" you want to link to. If the host then tells you that the thing is at a path internal to your Engine, that will still work fine.\"],[9],[9]],\"hasEval\":false}",
    "meta": {
      "moduleName": "dummy/templates/docs/linking-and-external-links.hbs"
    }
  });

  _exports.default = _default;
});
;define("dummy/templates/docs/mounting-engines", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "y4eBiBhm",
    "block": "{\"symbols\":[],\"statements\":[[7,\"div\",true],[10,\"class\",\"docs-md\"],[8],[7,\"h1\",true],[10,\"id\",\"mounting-an-engine\"],[10,\"class\",\"docs-md__h1\"],[8],[0,\"Mounting An Engine\"],[9],[0,\"\\n    \"],[7,\"p\",true],[8],[0,\"Now that we have our Engine created, we need to \\\"mount\\\" it in our application so that we can use it. First, however, we should probably talk about templates and top-level routes.\"],[9],[0,\"\\n\\n      \"],[7,\"h2\",true],[10,\"id\",\"engine-templates-top-level-routes\"],[10,\"class\",\"docs-md__h2\"],[8],[7,\"a\",true],[10,\"href\",\"#engine-templates-top-level-routes\"],[10,\"class\",\"heading-anchor\"],[8],[0,\"Engine Templates & Top-Level Routes\"],[9],[9],[0,\"\\n    \"],[7,\"p\",true],[8],[0,\"In order to actually verify that our Engine renders properly, we need to add a template.\"],[9],[0,\"\\n\"],[7,\"pre\",true],[10,\"class\",\"docs-md__code\"],[8],[7,\"code\",true],[10,\"class\",\"undefinedshell\"],[8],[0,\"mkdir addon/templates\\ntouch addon/templates/application.hbs\"],[9],[9],[0,\"\\n\"],[7,\"p\",true],[8],[0,\"Note that the template we added is called \"],[7,\"code\",true],[8],[0,\"application\"],[9],[0,\". This is because the top-level route and template in an Engine are known as \"],[7,\"code\",true],[8],[0,\"application\"],[9],[0,\", similar to what happens with the top-level in a normal application.\"],[9],[0,\"\\n\"],[7,\"p\",true],[8],[0,\"This means that from within an Engine, if you want to transition to the first route, you would use \"],[7,\"code\",true],[8],[0,\"application\"],[9],[0,\" as the name instead of the location that the host application knows about.\"],[9],[0,\"\\n\"],[7,\"p\",true],[8],[0,\"Anyway, let's add something super simple to our template:\"],[9],[0,\"\\n\"],[7,\"pre\",true],[10,\"class\",\"docs-md__code\"],[8],[7,\"code\",true],[10,\"class\",\"undefinedhbs\"],[8],[7,\"span\",true],[10,\"class\",\"xml\"],[8],[7,\"span\",true],[10,\"class\",\"hljs-tag\"],[8],[0,\"<\"],[7,\"span\",true],[10,\"class\",\"hljs-name\"],[8],[0,\"h3\"],[9],[0,\">\"],[9],[0,\"Hello World!\"],[7,\"span\",true],[10,\"class\",\"hljs-tag\"],[8],[0,\"</\"],[7,\"span\",true],[10,\"class\",\"hljs-name\"],[8],[0,\"h3\"],[9],[0,\">\"],[9],[9],[9],[9],[0,\"\\n\"],[7,\"p\",true],[8],[0,\"Now we'll be able to verify that our Engine renders when we mount it.\"],[9],[0,\"\\n\\n      \"],[7,\"h2\",true],[10,\"id\",\"loading-phases\"],[10,\"class\",\"docs-md__h2\"],[8],[7,\"a\",true],[10,\"href\",\"#loading-phases\"],[10,\"class\",\"heading-anchor\"],[8],[0,\"Loading phases\"],[9],[9],[0,\"\\n    \"],[7,\"p\",true],[8],[0,\"Engines can exist in several phases:\"],[9],[0,\"\\n\"],[7,\"p\",true],[8],[0,\" \"],[7,\"strong\",true],[8],[0,\"Booted\"],[9],[0,\" - an engine that's been installed in a parent application will have its dependencies loaded and its (non-instance) initializers invoked when the parent application boots.\"],[9],[0,\"\\n\"],[7,\"p\",true],[8],[0,\" \"],[7,\"strong\",true],[8],[0,\"Mounted\"],[9],[0,\" - Routable and route-less engines have slightly different concepts of \\\"mounting\\\". A routable engine is considered mounted when it has been included by a router at one or more mount-points. A route-less engine is considered mounted as soon as a route's \"],[7,\"code\",true],[8],[0,\"mount\"],[9],[0,\" call resolves.\"],[9],[0,\"\\n\"],[7,\"p\",true],[8],[0,\" \"],[7,\"strong\",true],[8],[0,\"Instantiated\"],[9],[0,\" - When an engine is instantiated, an \"],[7,\"code\",true],[8],[0,\"EngineInstance\"],[9],[0,\" is created and an engine's instance initializers are invoked. A routable engine is instantiated when a route is visited at or beyond its mount-point. A route-less engine is instantiated as soon as it is mounted.\"],[9],[0,\"\\n\"],[7,\"p\",true],[8],[0,\"Special \"],[7,\"code\",true],[8],[0,\"before\"],[9],[0,\" and \"],[7,\"code\",true],[8],[0,\"after\"],[9],[0,\" hooks could be added to application instance initializers that allow them to be ordered relative to engine instance \"],[7,\"a\",true],[10,\"href\",\"https://guides.emberjs.com/release/applications/initializers/\"],[10,\"class\",\"docs-md__a\"],[8],[0,\"initializers\"],[9],[0,\".\"],[9],[0,\"\\n\\n      \"],[7,\"h2\",true],[10,\"id\",\"routable-engines\"],[10,\"class\",\"docs-md__h2\"],[8],[7,\"a\",true],[10,\"href\",\"#routable-engines\"],[10,\"class\",\"heading-anchor\"],[8],[0,\"Routable Engines\"],[9],[9],[0,\"\\n    \"],[7,\"p\",true],[8],[0,\"The technique to mount an Engine into your application varies by the type of Engine you're using. We'll cover routable Engines first.\"],[9],[0,\"\\n\"],[7,\"p\",true],[8],[0,\"Mounting a Routable Engine is done through the consumer's \"],[7,\"code\",true],[8],[0,\"Router\"],[9],[0,\" map, like so:\"],[9],[0,\"\\n\"],[7,\"pre\",true],[10,\"class\",\"docs-md__code\"],[8],[7,\"code\",true],[10,\"class\",\"undefinedjs\"],[8],[0,\"Router.map(\"],[7,\"span\",true],[10,\"class\",\"hljs-function\"],[8],[7,\"span\",true],[10,\"class\",\"hljs-keyword\"],[8],[0,\"function\"],[9],[0,\"(\"],[7,\"span\",true],[10,\"class\",\"hljs-params\"],[8],[9],[0,\") \"],[9],[0,\"{\\n  \"],[7,\"span\",true],[10,\"class\",\"hljs-keyword\"],[8],[0,\"this\"],[9],[0,\".mount(\"],[7,\"span\",true],[10,\"class\",\"hljs-string\"],[8],[0,\"'super-blog'\"],[9],[0,\");\\n});\"],[9],[9],[0,\"\\n\"],[7,\"p\",true],[8],[0,\"Pretty straightforward. The \"],[7,\"code\",true],[8],[0,\"mount\"],[9],[0,\" method is very similar to the \"],[7,\"code\",true],[8],[0,\"route\"],[9],[0,\" method you would normally use to define routes. You can specify a \"],[7,\"code\",true],[8],[0,\"path\"],[9],[0,\" and \"],[7,\"code\",true],[8],[0,\"resetNamespace\"],[9],[0,\" options like you normally would:\"],[9],[0,\"\\n\"],[7,\"pre\",true],[10,\"class\",\"docs-md__code\"],[8],[7,\"code\",true],[10,\"class\",\"undefinedjs\"],[8],[0,\"Router.map(\"],[7,\"span\",true],[10,\"class\",\"hljs-function\"],[8],[7,\"span\",true],[10,\"class\",\"hljs-keyword\"],[8],[0,\"function\"],[9],[0,\"(\"],[7,\"span\",true],[10,\"class\",\"hljs-params\"],[8],[9],[0,\") \"],[9],[0,\"{\\n  \"],[7,\"span\",true],[10,\"class\",\"hljs-keyword\"],[8],[0,\"this\"],[9],[0,\".mount(\"],[7,\"span\",true],[10,\"class\",\"hljs-string\"],[8],[0,\"'super-blog'\"],[9],[0,\", { \"],[7,\"span\",true],[10,\"class\",\"hljs-attr\"],[8],[0,\"resetNamespace\"],[9],[0,\": \"],[7,\"span\",true],[10,\"class\",\"hljs-literal\"],[8],[0,\"true\"],[9],[0,\", \"],[7,\"span\",true],[10,\"class\",\"hljs-attr\"],[8],[0,\"path\"],[9],[0,\": \"],[7,\"span\",true],[10,\"class\",\"hljs-string\"],[8],[0,\"'/blog'\"],[9],[0,\" });\\n});\"],[9],[9],[0,\"\\n\"],[7,\"p\",true],[8],[0,\"You can also specify a special property, \"],[7,\"code\",true],[8],[0,\"as\"],[9],[0,\", which allows you to mount more than one instance of an Engine by specifying the route name it'll live under:\"],[9],[0,\"\\n\"],[7,\"pre\",true],[10,\"class\",\"docs-md__code\"],[8],[7,\"code\",true],[10,\"class\",\"undefinedjs\"],[8],[0,\"Router.map(\"],[7,\"span\",true],[10,\"class\",\"hljs-function\"],[8],[7,\"span\",true],[10,\"class\",\"hljs-keyword\"],[8],[0,\"function\"],[9],[0,\"(\"],[7,\"span\",true],[10,\"class\",\"hljs-params\"],[8],[9],[0,\") \"],[9],[0,\"{\\n  \"],[7,\"span\",true],[10,\"class\",\"hljs-keyword\"],[8],[0,\"this\"],[9],[0,\".mount(\"],[7,\"span\",true],[10,\"class\",\"hljs-string\"],[8],[0,\"'super-blog'\"],[9],[0,\", { \"],[7,\"span\",true],[10,\"class\",\"hljs-attr\"],[8],[0,\"path\"],[9],[0,\": \"],[7,\"span\",true],[10,\"class\",\"hljs-string\"],[8],[0,\"'/blog'\"],[9],[0,\" });\\n  \"],[7,\"span\",true],[10,\"class\",\"hljs-keyword\"],[8],[0,\"this\"],[9],[0,\".mount(\"],[7,\"span\",true],[10,\"class\",\"hljs-string\"],[8],[0,\"'super-blog'\"],[9],[0,\", { \"],[7,\"span\",true],[10,\"class\",\"hljs-attr\"],[8],[0,\"as\"],[9],[0,\": \"],[7,\"span\",true],[10,\"class\",\"hljs-string\"],[8],[0,\"'dev-blog'\"],[9],[0,\", \"],[7,\"span\",true],[10,\"class\",\"hljs-attr\"],[8],[0,\"path\"],[9],[0,\": \"],[7,\"span\",true],[10,\"class\",\"hljs-string\"],[8],[0,\"'/dev-blog'\"],[9],[0,\" });\\n});\"],[9],[9],[0,\"\\n\"],[7,\"p\",true],[8],[0,\"This means that if you transitioned to \"],[7,\"code\",true],[8],[0,\"super-blog\"],[9],[0,\", you'll land on \"],[7,\"code\",true],[8],[0,\"/blog\"],[9],[0,\", but if you transition to \"],[7,\"code\",true],[8],[0,\"dev-blog\"],[9],[0,\", you'll land on \"],[7,\"code\",true],[8],[0,\"/dev-blog\"],[9],[0,\".\"],[9],[0,\"\\n\"],[7,\"p\",true],[8],[0,\"Other than \"],[7,\"code\",true],[8],[0,\"as\"],[9],[0,\", the key difference between \"],[7,\"code\",true],[8],[0,\"mount\"],[9],[0,\" and \"],[7,\"code\",true],[8],[0,\"route\"],[9],[0,\" is how you specify child routes. For \"],[7,\"code\",true],[8],[0,\"route\"],[9],[0,\" you would normally pass a callback function as an additional argument. With Engines, though, we want our routing structure to be isolated from the host application, and so child routes are defined in the Engines \"],[7,\"code\",true],[8],[0,\"routes.js\"],[9],[0,\" file discussed in the previous section.\"],[9],[0,\"\\n\"],[7,\"p\",true],[8],[0,\"Thus, when using \"],[7,\"code\",true],[8],[0,\"this.mount\"],[9],[0,\", the \"],[7,\"code\",true],[8],[0,\"buildRoutes\"],[9],[0,\" function exported from \"],[7,\"code\",true],[8],[0,\"routes.js\"],[9],[0,\" gets used as the callback you would normally pass to \"],[7,\"code\",true],[8],[0,\"this.route\"],[9],[0,\".\"],[9],[0,\"\\n\"],[7,\"p\",true],[8],[0,\"That about covers it for routable Engines, let's talk about route-less Engines now.\"],[9],[0,\"\\n\\n      \"],[7,\"h2\",true],[10,\"id\",\"route-less-engines\"],[10,\"class\",\"docs-md__h2\"],[8],[7,\"a\",true],[10,\"href\",\"#route-less-engines\"],[10,\"class\",\"heading-anchor\"],[8],[0,\"Route-less Engines\"],[9],[9],[0,\"\\n    \"],[7,\"p\",true],[8],[0,\"Route-less Engines are much more straightforward to mount in an application.\"],[9],[0,\"\\n\"],[7,\"p\",true],[8],[0,\"To mount a route-less Engine, you use the \"],[7,\"code\",true],[8],[0,\"{{mount}}\"],[9],[0,\" keyword in any of your templates:\"],[9],[0,\"\\n\"],[7,\"pre\",true],[10,\"class\",\"docs-md__code\"],[8],[7,\"code\",true],[10,\"class\",\"undefinedhbs\"],[8],[7,\"span\",true],[10,\"class\",\"hljs-template-variable\"],[8],[0,\"{{mount \"],[7,\"span\",true],[10,\"class\",\"hljs-string\"],[8],[0,\"\\\"super-blog\\\"\"],[9],[0,\"}}\"],[9],[9],[9],[0,\"\\n\"],[7,\"p\",true],[8],[0,\"And that's it! The Engine's \"],[7,\"code\",true],[8],[0,\"application.hbs\"],[9],[0,\" will be rendered into the DOM at the mount location.\"],[9],[0,\"\\n\"],[7,\"p\",true],[8],[0,\"Prior to Ember 2.16, the \"],[7,\"code\",true],[8],[0,\"{{mount}}\"],[9],[0,\" helper only accepts an Engine's name, no other variables are supported. As of Ember 2.16 a \"],[7,\"code\",true],[8],[0,\"model\"],[9],[0,\" argument can be used to pass state and/or context directly to an engine. An inline \"],[7,\"code\",true],[8],[0,\"hash\"],[9],[0,\" can even be used to pass components via \"],[7,\"code\",true],[8],[0,\"model\"],[9],[0,\". For more information, please see \"],[7,\"a\",true],[10,\"href\",\"https://www.emberjs.com/api/ember/3.7/classes/Ember.Templates.helpers/methods/mount?anchor=mount\"],[10,\"class\",\"docs-md__a\"],[8],[0,\"the documentation\"],[9],[0,\" for this helper.\"],[9],[9]],\"hasEval\":false}",
    "meta": {
      "moduleName": "dummy/templates/docs/mounting-engines.hbs"
    }
  });

  _exports.default = _default;
});
;define("dummy/templates/docs/services", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "sVG2m63d",
    "block": "{\"symbols\":[],\"statements\":[[7,\"div\",true],[10,\"class\",\"docs-md\"],[8],[7,\"h1\",true],[10,\"id\",\"services\"],[10,\"class\",\"docs-md__h1\"],[8],[0,\"Services\"],[9],[0,\"\\n    \"],[7,\"p\",true],[8],[0,\"In addition to external routes, you can also specify Services as dependencies of your Engine which are provided from the host application. For example:\"],[9],[0,\"\\n\"],[7,\"pre\",true],[10,\"class\",\"docs-md__code\"],[8],[7,\"code\",true],[10,\"class\",\"undefinedjs\"],[8],[7,\"span\",true],[10,\"class\",\"hljs-comment\"],[8],[0,\"// super-blog/addon/engine.js\"],[9],[0,\"\\n\"],[7,\"span\",true],[10,\"class\",\"hljs-keyword\"],[8],[0,\"export\"],[9],[0,\" \"],[7,\"span\",true],[10,\"class\",\"hljs-keyword\"],[8],[0,\"default\"],[9],[0,\" Engine.extend({\\n  \"],[7,\"span\",true],[10,\"class\",\"hljs-comment\"],[8],[0,\"// ...\"],[9],[0,\"\\n  \"],[7,\"span\",true],[10,\"class\",\"hljs-attr\"],[8],[0,\"dependencies\"],[9],[0,\": {\\n    \"],[7,\"span\",true],[10,\"class\",\"hljs-attr\"],[8],[0,\"services\"],[9],[0,\": [\\n      \"],[7,\"span\",true],[10,\"class\",\"hljs-string\"],[8],[0,\"'store'\"],[9],[0,\",\\n      \"],[7,\"span\",true],[10,\"class\",\"hljs-string\"],[8],[0,\"'session'\"],[9],[0,\"\\n    ]\\n  }\\n});\"],[9],[9],[0,\"\\n\"],[7,\"p\",true],[8],[0,\"This means that your Engine will expect the host application to provide both the \"],[7,\"code\",true],[8],[0,\"store\"],[9],[0,\" service and \"],[7,\"code\",true],[8],[0,\"session\"],[9],[0,\" service that it uses. The host application can then specify the services it provides like so:\"],[9],[0,\"\\n\"],[7,\"pre\",true],[10,\"class\",\"docs-md__code\"],[8],[7,\"code\",true],[10,\"class\",\"undefinedjs\"],[8],[7,\"span\",true],[10,\"class\",\"hljs-comment\"],[8],[0,\"// dummy/app/app.js\"],[9],[0,\"\\n\"],[7,\"span\",true],[10,\"class\",\"hljs-keyword\"],[8],[0,\"import\"],[9],[0,\" Application \"],[7,\"span\",true],[10,\"class\",\"hljs-keyword\"],[8],[0,\"from\"],[9],[0,\" \"],[7,\"span\",true],[10,\"class\",\"hljs-string\"],[8],[0,\"'@ember/application'\"],[9],[0,\";\\n\\n\"],[7,\"span\",true],[10,\"class\",\"hljs-keyword\"],[8],[0,\"const\"],[9],[0,\" App = Application.extend({\\n  \"],[7,\"span\",true],[10,\"class\",\"hljs-comment\"],[8],[0,\"// ...\"],[9],[0,\"\\n  \"],[7,\"span\",true],[10,\"class\",\"hljs-attr\"],[8],[0,\"engines\"],[9],[0,\": {\\n    \"],[7,\"span\",true],[10,\"class\",\"hljs-attr\"],[8],[0,\"superBlog\"],[9],[0,\": {\\n      \"],[7,\"span\",true],[10,\"class\",\"hljs-attr\"],[8],[0,\"dependencies\"],[9],[0,\": {\\n        \"],[7,\"span\",true],[10,\"class\",\"hljs-attr\"],[8],[0,\"services\"],[9],[0,\": [\\n          \"],[7,\"span\",true],[10,\"class\",\"hljs-string\"],[8],[0,\"'store'\"],[9],[0,\",\\n          { \"],[7,\"span\",true],[10,\"class\",\"hljs-string\"],[8],[0,\"'session'\"],[9],[0,\": \"],[7,\"span\",true],[10,\"class\",\"hljs-string\"],[8],[0,\"'user-session'\"],[9],[0,\" }\\n        ]\\n      }\\n    }\\n  }\\n});\"],[9],[9],[0,\"\\n\"],[7,\"p\",true],[8],[0,\"In this example, the host provides its \"],[7,\"code\",true],[8],[0,\"store\"],[9],[0,\" service for the Engine's \"],[7,\"code\",true],[8],[0,\"store\"],[9],[0,\". The Engine's \"],[7,\"code\",true],[8],[0,\"session\"],[9],[0,\" service, however, is actually the \"],[7,\"code\",true],[8],[0,\"user-session\"],[9],[0,\" service of the host. Thus, you can provide a re-mapping of service names by using an object instead of a simple string.\"],[9],[0,\"\\n\"],[7,\"p\",true],[8],[0,\"However, if you have \"],[7,\"code\",true],[8],[0,\"ServiceX\"],[9],[0,\" in \"],[7,\"code\",true],[8],[0,\"Engine B\"],[9],[0,\", and want to share that service with \"],[7,\"code\",true],[8],[0,\"Engine A\"],[9],[0,\", you'd need to create a separate addon (likely an in-repo addon in the host app) to share those services accross.\"],[9],[0,\"\\n\"],[7,\"p\",true],[8],[0,\"Currently, Services are the sanctioned way of passing state and data between the host and the Engine. Since Services are singletons and only passed from host-to-child, there is little risk of coupling and violation of isolation. That said, you should keep the number of services your Engine relies on to a minimum so that your host does not need to provide services fulfilling all of those interfaces.\"],[9],[9]],\"hasEval\":false}",
    "meta": {
      "moduleName": "dummy/templates/docs/services.hbs"
    }
  });

  _exports.default = _default;
});
;define("dummy/templates/docs/sharing-components-and-more", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "7exl/FWF",
    "block": "{\"symbols\":[],\"statements\":[[7,\"div\",true],[10,\"class\",\"docs-md\"],[8],[7,\"h1\",true],[10,\"id\",\"sharing-components-and-more\"],[10,\"class\",\"docs-md__h1\"],[8],[0,\"Sharing Components and More\"],[9],[0,\"\\n    \"],[7,\"p\",true],[8],[0,\"For Engines, globally relevant constructs, such as Services and Route paths, make sense to cross Engine boundaries because they should be unique throughout the system. Non-global constructs, such as Components, Helpers, and Utilities should be handled carefully to avoid incidental coupling with a specific host design/architecture.\"],[9],[0,\"\\n\"],[7,\"p\",true],[8],[0,\"For instance, having to provide several route paths and services, such as Ember Data's Store, creates a relatively easy to fulfill API for consumers of your Engine. If your Engine also required specific components, helpers, and utilities, all needing to conform to the API usage inside your Engine, then you all of a sudden have substantially more coupling involved. This is bad for isolation and does not give you flexibility in developing your Engine independently of your host.\"],[9],[0,\"\\n\"],[7,\"p\",true],[8],[0,\"However, there are use cases for needing to share components and more across Engine boundaries. In those instances, the proper solution is to move the shared constructs into an addon.\"],[9],[0,\"\\n\\n      \"],[7,\"h2\",true],[10,\"id\",\"addon-re-exports\"],[10,\"class\",\"docs-md__h2\"],[8],[7,\"a\",true],[10,\"href\",\"#addon-re-exports\"],[10,\"class\",\"heading-anchor\"],[8],[0,\"Addon Re-exports\"],[9],[9],[0,\"\\n    \"],[7,\"p\",true],[8],[0,\"In order to use things like Components and Helpers from addons in your Engine, they will need to be present in your Engine's namespace. This is accomplished by doing what is called a \\\"re-export\\\":\"],[9],[0,\"\\n\"],[7,\"pre\",true],[10,\"class\",\"docs-md__code\"],[8],[7,\"code\",true],[10,\"class\",\"undefinedjs\"],[8],[7,\"span\",true],[10,\"class\",\"hljs-comment\"],[8],[0,\"//super-blog/app/components/foo-bar.js\"],[9],[0,\"\\n\"],[7,\"span\",true],[10,\"class\",\"hljs-keyword\"],[8],[0,\"export\"],[9],[0,\" { \"],[7,\"span\",true],[10,\"class\",\"hljs-keyword\"],[8],[0,\"default\"],[9],[0,\" } \"],[7,\"span\",true],[10,\"class\",\"hljs-keyword\"],[8],[0,\"from\"],[9],[0,\" \"],[7,\"span\",true],[10,\"class\",\"hljs-string\"],[8],[0,\"'super-addon/components/foo-bar'\"],[9],[0,\";\"],[9],[9],[0,\"\\n\"],[7,\"p\",true],[8],[0,\"As you can see we're simply exporting the import from \"],[7,\"code\",true],[8],[0,\"super-addon\"],[9],[0,\". Since we're exporting an export, we call it re-exporting.\"],[9],[0,\"\\n\"],[7,\"p\",true],[8],[0,\"As you can imagine, doing this for everything in the addons you need to use could be very tedious. So \"],[7,\"code\",true],[8],[0,\"ember-engines\"],[9],[0,\" provides a simple way to automatically re-export everything an addon usually provides to an application: the \"],[7,\"code\",true],[8],[0,\"EngineAddon\"],[9],[0,\" base class.\"],[9],[0,\"\\n\"],[7,\"p\",true],[8],[0,\"The \"],[7,\"code\",true],[8],[0,\"EngineAddon\"],[9],[0,\" base class hooks into Ember-CLI's build hooks to automatically re-export addon code into your Engine. You can add it to your Engine like so:\"],[9],[0,\"\\n\"],[7,\"pre\",true],[10,\"class\",\"docs-md__code\"],[8],[7,\"code\",true],[10,\"class\",\"undefinedjs\"],[8],[7,\"span\",true],[10,\"class\",\"hljs-comment\"],[8],[0,\"// super-blog/index.js\"],[9],[0,\"\\n\"],[7,\"span\",true],[10,\"class\",\"hljs-keyword\"],[8],[0,\"const\"],[9],[0,\" EngineAddon = \"],[7,\"span\",true],[10,\"class\",\"hljs-built_in\"],[8],[0,\"require\"],[9],[0,\"(\"],[7,\"span\",true],[10,\"class\",\"hljs-string\"],[8],[0,\"'ember-engines/lib/engine-addon'\"],[9],[0,\");\\n\"],[7,\"span\",true],[10,\"class\",\"hljs-built_in\"],[8],[0,\"module\"],[9],[0,\".exports = EngineAddon.extend({\\n  \"],[7,\"span\",true],[10,\"class\",\"hljs-attr\"],[8],[0,\"name\"],[9],[0,\": \"],[7,\"span\",true],[10,\"class\",\"hljs-string\"],[8],[0,\"'super-blog'\"],[9],[0,\"\\n});\"],[9],[9],[0,\"\\n\"],[7,\"p\",true],[8],[0,\"That's it! Now, any addon included in your package.json \"],[7,\"code\",true],[8],[0,\"dependencies\"],[9],[0,\" key will automatically get included in your Engine.\"],[9],[9]],\"hasEval\":false}",
    "meta": {
      "moduleName": "dummy/templates/docs/sharing-components-and-more.hbs"
    }
  });

  _exports.default = _default;
});
;define("dummy/templates/docs/testing", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "UqHbTjc+",
    "block": "{\"symbols\":[],\"statements\":[[7,\"div\",true],[10,\"class\",\"docs-md\"],[8],[7,\"h1\",true],[10,\"id\",\"testing\"],[10,\"class\",\"docs-md__h1\"],[8],[0,\"Testing\"],[9],[0,\"\\n    \"],[7,\"p\",true],[8],[0,\"Just like other addons, engines must be tested differently depending upon whether they are \\\"in-repo\\\" or \\\"standalone\\\":\"],[9],[0,\"\\n\"],[7,\"ul\",true],[8],[0,\"\\n\"],[7,\"li\",true],[8],[7,\"p\",true],[8],[0,\"To test an in-repo engine, co-locate the engine's tests with the host app's tests, just like any other in-repo addon.\"],[9],[0,\"\\n\"],[9],[0,\"\\n\"],[7,\"li\",true],[8],[7,\"p\",true],[8],[0,\"To test a standalone engine, use the dummy app, just like any other standalone addon project.\"],[9],[0,\"\\n\"],[9],[0,\"\\n\"],[9],[0,\"\\n\"],[7,\"p\",true],[8],[0,\"Ember Engines comes with a \"],[7,\"strong\",true],[8],[0,\"set of test helpers that can be used in Unit/Integration tests\"],[9],[0,\":\"],[9],[0,\"\\n\"],[7,\"p\",true],[8],[7,\"code\",true],[8],[0,\"engineResolverFor\"],[9],[0,\" gets the resolver class used by an Engine and creates an instance to be used with test modules:\"],[9],[0,\"\\n\"],[7,\"pre\",true],[10,\"class\",\"docs-md__code\"],[8],[7,\"code\",true],[10,\"class\",\"undefinedjs\"],[8],[7,\"span\",true],[10,\"class\",\"hljs-comment\"],[8],[0,\"// tests/<integration or unit>/…\"],[9],[0,\"\\n\"],[7,\"span\",true],[10,\"class\",\"hljs-keyword\"],[8],[0,\"import\"],[9],[0,\" engineResolverFor \"],[7,\"span\",true],[10,\"class\",\"hljs-keyword\"],[8],[0,\"from\"],[9],[0,\" \"],[7,\"span\",true],[10,\"class\",\"hljs-string\"],[8],[0,\"'ember-engines/test-support/engine-resolver-for'\"],[9],[0,\";\"],[9],[9],[0,\"\\n\\n      \"],[7,\"h2\",true],[10,\"id\",\"unit-integration-testing\"],[10,\"class\",\"docs-md__h2\"],[8],[7,\"a\",true],[10,\"href\",\"#unit-integration-testing\"],[10,\"class\",\"heading-anchor\"],[8],[0,\"Unit/Integration Testing\"],[9],[9],[0,\"\\n    \"],[7,\"p\",true],[8],[0,\"To test candidates for unit/integration (e.g. components, services and controllers) declared inside an engine, you need to set a custom resolver with the engine's prefix using \"],[7,\"code\",true],[8],[0,\"engineResolverFor\"],[9],[0,\" helper.\"],[9],[0,\"\\n\"],[7,\"p\",true],[8],[0,\"What does it look like to test a component from a host app or dummy app? Let's go over some examples in the next section. In the following tests, \"],[7,\"code\",true],[8],[0,\"admin-engine\"],[9],[0,\" is an engine, \"],[7,\"code\",true],[8],[0,\"hello-name\"],[9],[0,\" is a component, and \"],[7,\"code\",true],[8],[0,\"some-thing\"],[9],[0,\" is a service. (Note: the same tests will apply whether \"],[7,\"code\",true],[8],[0,\"admin-engine\"],[9],[0,\" is an in-repo or standalone engine).\"],[9],[0,\"\\n\\n      \"],[7,\"h3\",true],[10,\"id\",\"unit-testing-basics\"],[10,\"class\",\"docs-md__h3\"],[8],[7,\"a\",true],[10,\"href\",\"#unit-testing-basics\"],[10,\"class\",\"heading-anchor\"],[8],[0,\"Unit Testing Basics\"],[9],[9],[0,\"\\n    \"],[7,\"p\",true],[8],[0,\"Suppose that we have in the engine a service that has a \"],[7,\"code\",true],[8],[0,\"computedFoo\"],[9],[0,\" computed property based on a \"],[7,\"code\",true],[8],[0,\"foo\"],[9],[0,\" property.\"],[9],[0,\"\\n\"],[7,\"pre\",true],[10,\"class\",\"docs-md__code\"],[8],[7,\"code\",true],[10,\"class\",\"undefinedjs\"],[8],[7,\"span\",true],[10,\"class\",\"hljs-comment\"],[8],[0,\"// admin-engine/services/some-thing-test.js\"],[9],[0,\"\\n\"],[7,\"span\",true],[10,\"class\",\"hljs-keyword\"],[8],[0,\"import\"],[9],[0,\" Service \"],[7,\"span\",true],[10,\"class\",\"hljs-keyword\"],[8],[0,\"from\"],[9],[0,\" \"],[7,\"span\",true],[10,\"class\",\"hljs-string\"],[8],[0,\"'@ember/service'\"],[9],[0,\";\\n\"],[7,\"span\",true],[10,\"class\",\"hljs-keyword\"],[8],[0,\"import\"],[9],[0,\" { computed } \"],[7,\"span\",true],[10,\"class\",\"hljs-keyword\"],[8],[0,\"from\"],[9],[0,\" \"],[7,\"span\",true],[10,\"class\",\"hljs-string\"],[8],[0,\"'@ember/object'\"],[9],[0,\";\\n\\n\"],[7,\"span\",true],[10,\"class\",\"hljs-keyword\"],[8],[0,\"export\"],[9],[0,\" \"],[7,\"span\",true],[10,\"class\",\"hljs-keyword\"],[8],[0,\"default\"],[9],[0,\" Service.extend({\\n  \"],[7,\"span\",true],[10,\"class\",\"hljs-attr\"],[8],[0,\"foo\"],[9],[0,\": \"],[7,\"span\",true],[10,\"class\",\"hljs-string\"],[8],[0,\"'bar'\"],[9],[0,\",\\n\\n  \"],[7,\"span\",true],[10,\"class\",\"hljs-attr\"],[8],[0,\"computedFoo\"],[9],[0,\": computed(\"],[7,\"span\",true],[10,\"class\",\"hljs-string\"],[8],[0,\"'foo'\"],[9],[0,\", \"],[7,\"span\",true],[10,\"class\",\"hljs-function\"],[8],[7,\"span\",true],[10,\"class\",\"hljs-keyword\"],[8],[0,\"function\"],[9],[0,\"(\"],[7,\"span\",true],[10,\"class\",\"hljs-params\"],[8],[9],[0,\") \"],[9],[0,\"{\\n    \"],[7,\"span\",true],[10,\"class\",\"hljs-keyword\"],[8],[0,\"return\"],[9],[0,\" \"],[7,\"span\",true],[10,\"class\",\"hljs-string\"],[8],[0,\"`computed \"],[7,\"span\",true],[10,\"class\",\"hljs-subst\"],[8],[0,\"${\"],[7,\"span\",true],[10,\"class\",\"hljs-keyword\"],[8],[0,\"this\"],[9],[0,\".foo}\"],[9],[0,\"`\"],[9],[0,\";\\n  })\\n});\"],[9],[9],[0,\"\\n\"],[7,\"p\",true],[8],[0,\"The unit test will be like this:\"],[9],[0,\"\\n\"],[7,\"pre\",true],[10,\"class\",\"docs-md__code\"],[8],[7,\"code\",true],[10,\"class\",\"undefinedjs\"],[8],[7,\"span\",true],[10,\"class\",\"hljs-comment\"],[8],[0,\"// <app-name>/tests/unit/services/some-thing-test.js\"],[9],[0,\"\\n\\n\"],[7,\"span\",true],[10,\"class\",\"hljs-keyword\"],[8],[0,\"import\"],[9],[0,\" { \"],[7,\"span\",true],[10,\"class\",\"hljs-built_in\"],[8],[0,\"module\"],[9],[0,\", test } \"],[7,\"span\",true],[10,\"class\",\"hljs-keyword\"],[8],[0,\"from\"],[9],[0,\" \"],[7,\"span\",true],[10,\"class\",\"hljs-string\"],[8],[0,\"'qunit'\"],[9],[0,\";\\n\"],[7,\"span\",true],[10,\"class\",\"hljs-keyword\"],[8],[0,\"import\"],[9],[0,\" { setupTest } \"],[7,\"span\",true],[10,\"class\",\"hljs-keyword\"],[8],[0,\"from\"],[9],[0,\" \"],[7,\"span\",true],[10,\"class\",\"hljs-string\"],[8],[0,\"'ember-qunit'\"],[9],[0,\";\\n\"],[7,\"span\",true],[10,\"class\",\"hljs-keyword\"],[8],[0,\"import\"],[9],[0,\" engineResolverFor \"],[7,\"span\",true],[10,\"class\",\"hljs-keyword\"],[8],[0,\"from\"],[9],[0,\" \"],[7,\"span\",true],[10,\"class\",\"hljs-string\"],[8],[0,\"'ember-engines/test-support/engine-resolver-for'\"],[9],[0,\";\\n\\n\"],[7,\"span\",true],[10,\"class\",\"hljs-keyword\"],[8],[0,\"const\"],[9],[0,\" modulePrefix = \"],[7,\"span\",true],[10,\"class\",\"hljs-string\"],[8],[0,\"'admin-engine'\"],[9],[0,\";\\n\"],[7,\"span\",true],[10,\"class\",\"hljs-keyword\"],[8],[0,\"const\"],[9],[0,\" resolver = engineResolverFor(modulePrefix);\\n\\n\"],[7,\"span\",true],[10,\"class\",\"hljs-built_in\"],[8],[0,\"module\"],[9],[0,\"(\"],[7,\"span\",true],[10,\"class\",\"hljs-string\"],[8],[0,\"'Unit | Service | some thing'\"],[9],[0,\", \"],[7,\"span\",true],[10,\"class\",\"hljs-function\"],[8],[7,\"span\",true],[10,\"class\",\"hljs-keyword\"],[8],[0,\"function\"],[9],[0,\"(\"],[7,\"span\",true],[10,\"class\",\"hljs-params\"],[8],[0,\"hooks\"],[9],[0,\") \"],[9],[0,\"{\\n  setupTest(hooks, { resolver });\\n\\n  test(\"],[7,\"span\",true],[10,\"class\",\"hljs-string\"],[8],[0,\"'should correctly concat foo'\"],[9],[0,\", \"],[7,\"span\",true],[10,\"class\",\"hljs-function\"],[8],[7,\"span\",true],[10,\"class\",\"hljs-keyword\"],[8],[0,\"function\"],[9],[0,\"(\"],[7,\"span\",true],[10,\"class\",\"hljs-params\"],[8],[0,\"assert\"],[9],[0,\") \"],[9],[0,\"{\\n    \"],[7,\"span\",true],[10,\"class\",\"hljs-keyword\"],[8],[0,\"const\"],[9],[0,\" someThing = \"],[7,\"span\",true],[10,\"class\",\"hljs-keyword\"],[8],[0,\"this\"],[9],[0,\".owner.lookup(\"],[7,\"span\",true],[10,\"class\",\"hljs-string\"],[8],[0,\"'service:some-thing'\"],[9],[0,\");\\n    someThing.set(\"],[7,\"span\",true],[10,\"class\",\"hljs-string\"],[8],[0,\"'foo'\"],[9],[0,\", \"],[7,\"span\",true],[10,\"class\",\"hljs-string\"],[8],[0,\"'baz'\"],[9],[0,\");\\n\\n    assert.equal(someThing.get(\"],[7,\"span\",true],[10,\"class\",\"hljs-string\"],[8],[0,\"'computedFoo'\"],[9],[0,\"), \"],[7,\"span\",true],[10,\"class\",\"hljs-string\"],[8],[0,\"'computed baz'\"],[9],[0,\");\\n  });\\n});\"],[9],[9],[0,\"\\n\\n      \"],[7,\"h3\",true],[10,\"id\",\"testing-components\"],[10,\"class\",\"docs-md__h3\"],[8],[7,\"a\",true],[10,\"href\",\"#testing-components\"],[10,\"class\",\"heading-anchor\"],[8],[0,\"Testing Components\"],[9],[9],[0,\"\\n    \"],[7,\"p\",true],[8],[0,\"Next, suppose that our engine has a component:\"],[9],[0,\"\\n\"],[7,\"pre\",true],[10,\"class\",\"docs-md__code\"],[8],[7,\"code\",true],[10,\"class\",\"undefinedhbs\"],[8],[7,\"span\",true],[10,\"class\",\"hljs-comment\"],[8],[0,\"{{!--  admin-engine/addon/components/hello-name.hbs --}}\"],[9],[7,\"span\",true],[10,\"class\",\"xml\"],[8],[0,\"\\nHello, \"],[9],[7,\"span\",true],[10,\"class\",\"hljs-template-variable\"],[8],[0,\"{{name}}\"],[9],[7,\"span\",true],[10,\"class\",\"xml\"],[8],[0,\"!\"],[9],[9],[9],[0,\"\\n\"],[7,\"p\",true],[8],[0,\"Here's an example integration test for that component:\"],[9],[0,\"\\n\"],[7,\"pre\",true],[10,\"class\",\"docs-md__code\"],[8],[7,\"code\",true],[10,\"class\",\"undefinedjs\"],[8],[7,\"span\",true],[10,\"class\",\"hljs-comment\"],[8],[0,\"// <app-name>/tests/integration/components/hello-name-test.js\"],[9],[0,\"\\n\\n\"],[7,\"span\",true],[10,\"class\",\"hljs-keyword\"],[8],[0,\"import\"],[9],[0,\" { \"],[7,\"span\",true],[10,\"class\",\"hljs-built_in\"],[8],[0,\"module\"],[9],[0,\", test } \"],[7,\"span\",true],[10,\"class\",\"hljs-keyword\"],[8],[0,\"from\"],[9],[0,\" \"],[7,\"span\",true],[10,\"class\",\"hljs-string\"],[8],[0,\"'qunit'\"],[9],[0,\";\\n\"],[7,\"span\",true],[10,\"class\",\"hljs-keyword\"],[8],[0,\"import\"],[9],[0,\" { setupRenderingTest } \"],[7,\"span\",true],[10,\"class\",\"hljs-keyword\"],[8],[0,\"from\"],[9],[0,\" \"],[7,\"span\",true],[10,\"class\",\"hljs-string\"],[8],[0,\"'ember-qunit'\"],[9],[0,\";\\n\"],[7,\"span\",true],[10,\"class\",\"hljs-keyword\"],[8],[0,\"import\"],[9],[0,\" { render } \"],[7,\"span\",true],[10,\"class\",\"hljs-keyword\"],[8],[0,\"from\"],[9],[0,\" \"],[7,\"span\",true],[10,\"class\",\"hljs-string\"],[8],[0,\"'@ember/test-helpers'\"],[9],[0,\";\\n\"],[7,\"span\",true],[10,\"class\",\"hljs-keyword\"],[8],[0,\"import\"],[9],[0,\" hbs \"],[7,\"span\",true],[10,\"class\",\"hljs-keyword\"],[8],[0,\"from\"],[9],[0,\" \"],[7,\"span\",true],[10,\"class\",\"hljs-string\"],[8],[0,\"'htmlbars-inline-precompile'\"],[9],[0,\";\\n\"],[7,\"span\",true],[10,\"class\",\"hljs-keyword\"],[8],[0,\"import\"],[9],[0,\" engineResolverFor \"],[7,\"span\",true],[10,\"class\",\"hljs-keyword\"],[8],[0,\"from\"],[9],[0,\" \"],[7,\"span\",true],[10,\"class\",\"hljs-string\"],[8],[0,\"'ember-engines/test-support/engine-resolver-for'\"],[9],[0,\";\\n\\n\"],[7,\"span\",true],[10,\"class\",\"hljs-keyword\"],[8],[0,\"const\"],[9],[0,\" modulePrefix = \"],[7,\"span\",true],[10,\"class\",\"hljs-string\"],[8],[0,\"'admin-engine'\"],[9],[0,\";\\n\"],[7,\"span\",true],[10,\"class\",\"hljs-keyword\"],[8],[0,\"const\"],[9],[0,\" resolver = engineResolverFor(modulePrefix);\\n\\n\"],[7,\"span\",true],[10,\"class\",\"hljs-built_in\"],[8],[0,\"module\"],[9],[0,\"(\"],[7,\"span\",true],[10,\"class\",\"hljs-string\"],[8],[0,\"'Integration | Component | hello-name'\"],[9],[0,\", \"],[7,\"span\",true],[10,\"class\",\"hljs-function\"],[8],[7,\"span\",true],[10,\"class\",\"hljs-keyword\"],[8],[0,\"function\"],[9],[0,\"(\"],[7,\"span\",true],[10,\"class\",\"hljs-params\"],[8],[0,\"hooks\"],[9],[0,\") \"],[9],[0,\"{\\n  setupRenderingTest(hooks, { resolver });\\n\\n  test(\"],[7,\"span\",true],[10,\"class\",\"hljs-string\"],[8],[0,\"'it renders'\"],[9],[0,\", \"],[7,\"span\",true],[10,\"class\",\"hljs-keyword\"],[8],[0,\"async\"],[9],[0,\" \"],[7,\"span\",true],[10,\"class\",\"hljs-function\"],[8],[7,\"span\",true],[10,\"class\",\"hljs-keyword\"],[8],[0,\"function\"],[9],[0,\"(\"],[7,\"span\",true],[10,\"class\",\"hljs-params\"],[8],[0,\"assert\"],[9],[0,\") \"],[9],[0,\"{\\n\\n    \"],[7,\"span\",true],[10,\"class\",\"hljs-keyword\"],[8],[0,\"await\"],[9],[0,\" render(hbs\"],[7,\"span\",true],[10,\"class\",\"hljs-string\"],[8],[0,\"`{{#hello-name name=\\\"Tom\\\"}}{{/hello-name}}`\"],[9],[0,\");\\n\\n    assert.equal(\"],[7,\"span\",true],[10,\"class\",\"hljs-keyword\"],[8],[0,\"this\"],[9],[0,\".element.textContent.trim(), \"],[7,\"span\",true],[10,\"class\",\"hljs-string\"],[8],[0,\"'Hello, Tom!'\"],[9],[0,\");\\n  });\\n});\"],[9],[9],[0,\"\\n\\n      \"],[7,\"h3\",true],[10,\"id\",\"acceptance-testing\"],[10,\"class\",\"docs-md__h3\"],[8],[7,\"a\",true],[10,\"href\",\"#acceptance-testing\"],[10,\"class\",\"heading-anchor\"],[8],[0,\"Acceptance Testing\"],[9],[9],[0,\"\\n    \"],[7,\"p\",true],[8],[0,\"Suppose that we are mouting \"],[7,\"code\",true],[8],[0,\"admin-engine\"],[9],[0,\" on host-app router:\"],[9],[0,\"\\n\"],[7,\"pre\",true],[10,\"class\",\"docs-md__code\"],[8],[7,\"code\",true],[10,\"class\",\"undefinedjs\"],[8],[7,\"span\",true],[10,\"class\",\"hljs-comment\"],[8],[0,\"// host-app/app/router.js\"],[9],[0,\"\\n\"],[7,\"span\",true],[10,\"class\",\"hljs-keyword\"],[8],[0,\"import\"],[9],[0,\" EmberRouter \"],[7,\"span\",true],[10,\"class\",\"hljs-keyword\"],[8],[0,\"from\"],[9],[0,\" \"],[7,\"span\",true],[10,\"class\",\"hljs-string\"],[8],[0,\"'@ember/routing/router'\"],[9],[0,\";\\n\"],[7,\"span\",true],[10,\"class\",\"hljs-keyword\"],[8],[0,\"import\"],[9],[0,\" config \"],[7,\"span\",true],[10,\"class\",\"hljs-keyword\"],[8],[0,\"from\"],[9],[0,\" \"],[7,\"span\",true],[10,\"class\",\"hljs-string\"],[8],[0,\"'./config/environment'\"],[9],[0,\";\\n\\n\"],[7,\"span\",true],[10,\"class\",\"hljs-keyword\"],[8],[0,\"const\"],[9],[0,\" Router = EmberRouter.extend({\\n  \"],[7,\"span\",true],[10,\"class\",\"hljs-attr\"],[8],[0,\"location\"],[9],[0,\": config.locationType,\\n  \"],[7,\"span\",true],[10,\"class\",\"hljs-attr\"],[8],[0,\"rootURL\"],[9],[0,\": config.rootURL\\n});\\n\\nRouter.map(\"],[7,\"span\",true],[10,\"class\",\"hljs-function\"],[8],[7,\"span\",true],[10,\"class\",\"hljs-keyword\"],[8],[0,\"function\"],[9],[0,\"(\"],[7,\"span\",true],[10,\"class\",\"hljs-params\"],[8],[9],[0,\") \"],[9],[0,\"{\\n  \"],[7,\"span\",true],[10,\"class\",\"hljs-keyword\"],[8],[0,\"this\"],[9],[0,\".mount(\"],[7,\"span\",true],[10,\"class\",\"hljs-string\"],[8],[0,\"'admin'\"],[9],[0,\");\\n});\\n\\n\"],[7,\"span\",true],[10,\"class\",\"hljs-keyword\"],[8],[0,\"export\"],[9],[0,\" \"],[7,\"span\",true],[10,\"class\",\"hljs-keyword\"],[8],[0,\"default\"],[9],[0,\" Router;\"],[9],[9],[0,\"\\n\"],[7,\"p\",true],[8],[0,\"Here is an acceptance test for routing:\"],[9],[0,\"\\n\"],[7,\"pre\",true],[10,\"class\",\"docs-md__code\"],[8],[7,\"code\",true],[10,\"class\",\"undefinedjs\"],[8],[0,\"\\n\"],[7,\"span\",true],[10,\"class\",\"hljs-keyword\"],[8],[0,\"import\"],[9],[0,\" { \"],[7,\"span\",true],[10,\"class\",\"hljs-built_in\"],[8],[0,\"module\"],[9],[0,\", test } \"],[7,\"span\",true],[10,\"class\",\"hljs-keyword\"],[8],[0,\"from\"],[9],[0,\" \"],[7,\"span\",true],[10,\"class\",\"hljs-string\"],[8],[0,\"'qunit'\"],[9],[0,\";\\n\"],[7,\"span\",true],[10,\"class\",\"hljs-keyword\"],[8],[0,\"import\"],[9],[0,\" { setupApplicationTest } \"],[7,\"span\",true],[10,\"class\",\"hljs-keyword\"],[8],[0,\"from\"],[9],[0,\" \"],[7,\"span\",true],[10,\"class\",\"hljs-string\"],[8],[0,\"'ember-qunit'\"],[9],[0,\";\\n\"],[7,\"span\",true],[10,\"class\",\"hljs-keyword\"],[8],[0,\"import\"],[9],[0,\" { visit, click, currentURL } \"],[7,\"span\",true],[10,\"class\",\"hljs-keyword\"],[8],[0,\"from\"],[9],[0,\" \"],[7,\"span\",true],[10,\"class\",\"hljs-string\"],[8],[0,\"'@ember/test-helpers'\"],[9],[0,\";\\n\\n\"],[7,\"span\",true],[10,\"class\",\"hljs-built_in\"],[8],[0,\"module\"],[9],[0,\"(\"],[7,\"span\",true],[10,\"class\",\"hljs-string\"],[8],[0,\"'basic acceptance test'\"],[9],[0,\", \"],[7,\"span\",true],[10,\"class\",\"hljs-function\"],[8],[7,\"span\",true],[10,\"class\",\"hljs-keyword\"],[8],[0,\"function\"],[9],[0,\"(\"],[7,\"span\",true],[10,\"class\",\"hljs-params\"],[8],[0,\"hooks\"],[9],[0,\") \"],[9],[0,\"{\\n  setupApplicationTest(hooks);\\n\\n  test(\"],[7,\"span\",true],[10,\"class\",\"hljs-string\"],[8],[0,\"'the user can visit /admin page'\"],[9],[0,\", \"],[7,\"span\",true],[10,\"class\",\"hljs-keyword\"],[8],[0,\"async\"],[9],[0,\" \"],[7,\"span\",true],[10,\"class\",\"hljs-function\"],[8],[7,\"span\",true],[10,\"class\",\"hljs-keyword\"],[8],[0,\"function\"],[9],[0,\"(\"],[7,\"span\",true],[10,\"class\",\"hljs-params\"],[8],[0,\"assert\"],[9],[0,\") \"],[9],[0,\"{\\n    \"],[7,\"span\",true],[10,\"class\",\"hljs-keyword\"],[8],[0,\"await\"],[9],[0,\" visit(\"],[7,\"span\",true],[10,\"class\",\"hljs-string\"],[8],[0,\"'/'\"],[9],[0,\");\\n    \"],[7,\"span\",true],[10,\"class\",\"hljs-keyword\"],[8],[0,\"await\"],[9],[0,\" click(\"],[7,\"span\",true],[10,\"class\",\"hljs-string\"],[8],[0,\"'.admin-menu-item'\"],[9],[0,\");\\n\\n    assert.equal(currentURL(), \"],[7,\"span\",true],[10,\"class\",\"hljs-string\"],[8],[0,\"'/admin'\"],[9],[0,\");\\n  });\\n});\"],[9],[9],[0,\"\\n\\n      \"],[7,\"h2\",true],[10,\"id\",\"testing-for-lazy-engines\"],[10,\"class\",\"docs-md__h2\"],[8],[7,\"a\",true],[10,\"href\",\"#testing-for-lazy-engines\"],[10,\"class\",\"heading-anchor\"],[8],[0,\"Testing for Lazy Engines\"],[9],[9],[0,\"\\n    \"],[7,\"p\",true],[8],[0,\"If you have a lazy engine, you'll need to ensure that your \"],[7,\"code\",true],[8],[0,\"tests/test-helper.js\"],[9],[0,\" is configured to preload your engine's assets:\"],[9],[0,\"\\n\"],[7,\"pre\",true],[10,\"class\",\"docs-md__code\"],[8],[7,\"code\",true],[10,\"class\",\"undefinedjs\"],[8],[7,\"span\",true],[10,\"class\",\"hljs-keyword\"],[8],[0,\"import\"],[9],[0,\" Application \"],[7,\"span\",true],[10,\"class\",\"hljs-keyword\"],[8],[0,\"from\"],[9],[0,\" \"],[7,\"span\",true],[10,\"class\",\"hljs-string\"],[8],[0,\"'../app'\"],[9],[0,\";\\n\"],[7,\"span\",true],[10,\"class\",\"hljs-keyword\"],[8],[0,\"import\"],[9],[0,\" config \"],[7,\"span\",true],[10,\"class\",\"hljs-keyword\"],[8],[0,\"from\"],[9],[0,\" \"],[7,\"span\",true],[10,\"class\",\"hljs-string\"],[8],[0,\"'../config/environment'\"],[9],[0,\";\\n\"],[7,\"span\",true],[10,\"class\",\"hljs-keyword\"],[8],[0,\"import\"],[9],[0,\" { setApplication } \"],[7,\"span\",true],[10,\"class\",\"hljs-keyword\"],[8],[0,\"from\"],[9],[0,\" \"],[7,\"span\",true],[10,\"class\",\"hljs-string\"],[8],[0,\"'@ember/test-helpers'\"],[9],[0,\";\\n\"],[7,\"span\",true],[10,\"class\",\"hljs-keyword\"],[8],[0,\"import\"],[9],[0,\" { start } \"],[7,\"span\",true],[10,\"class\",\"hljs-keyword\"],[8],[0,\"from\"],[9],[0,\" \"],[7,\"span\",true],[10,\"class\",\"hljs-string\"],[8],[0,\"'ember-qunit'\"],[9],[0,\";\\n\"],[7,\"span\",true],[10,\"class\",\"hljs-keyword\"],[8],[0,\"import\"],[9],[0,\" preloadAssets \"],[7,\"span\",true],[10,\"class\",\"hljs-keyword\"],[8],[0,\"from\"],[9],[0,\" \"],[7,\"span\",true],[10,\"class\",\"hljs-string\"],[8],[0,\"'ember-asset-loader/test-support/preload-assets'\"],[9],[0,\";\\n\"],[7,\"span\",true],[10,\"class\",\"hljs-keyword\"],[8],[0,\"import\"],[9],[0,\" manifest \"],[7,\"span\",true],[10,\"class\",\"hljs-keyword\"],[8],[0,\"from\"],[9],[0,\" \"],[7,\"span\",true],[10,\"class\",\"hljs-string\"],[8],[0,\"'<app-name>/config/asset-manifest'\"],[9],[0,\";\\n\\nsetApplication(Application.create(config.APP));\\n\\npreloadAssets(manifest).then(start); \"],[7,\"span\",true],[10,\"class\",\"hljs-comment\"],[8],[0,\"// This ensures all engine resources are loaded before the tests\"],[9],[9],[9],[0,\"\\n\"],[7,\"p\",true],[8],[0,\"This should be sufficient to make unit, integration, and acceptance tests work.\"],[9],[9]],\"hasEval\":false}",
    "meta": {
      "moduleName": "dummy/templates/docs/testing.hbs"
    }
  });

  _exports.default = _default;
});
;define("dummy/templates/docs/what-are-engines", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "0ENtpp/T",
    "block": "{\"symbols\":[],\"statements\":[[7,\"div\",true],[10,\"class\",\"docs-md\"],[8],[7,\"h1\",true],[10,\"id\",\"what-are-engines-\"],[10,\"class\",\"docs-md__h1\"],[8],[0,\"What are Engines?\"],[9],[0,\"\\n    \"],[7,\"p\",true],[8],[0,\"Engines allow multiple logical applications to be composed together into a single application from the user's perspective. The key term here is \\\"logical application\\\". That is, an Engine represents a set of functionality and user experiences that could logically be considered an application. However, they differ from normal Ember applications in that they are intended to be composed within a host application in order to create a single, cohesive user experience.\"],[9],[0,\"\\n\"],[7,\"p\",true],[8],[0,\"On a technical level, engines and applications are remarkably similar: they each have their own container, registry, context, and namespace. However, unlike an application, an engine does not boot itself nor does it control its own router. Engines rely on their hosts to fulfill these responsibilities.\"],[9],[0,\"\\n\"],[7,\"p\",true],[8],[0,\"The often used example of this is a \\\"blogging\\\" application. While a blog itself could be a full-fledged application, you may also wish to use it as a specific subsection of your overall application. If you threw a \\\"news feed\\\" engine into that mix, you might get an application structure that looks something like this:\"],[9],[0,\"\\n\"],[7,\"img\",true],[10,\"src\",\"/images/app-engine-diagram.jpeg\"],[10,\"alt\",\"Diagram of Application with two Engines\"],[10,\"width\",\"850\"],[8],[9],[0,\"\\n\\n This host application relies upon Engines to control different \\\"zones\\\" of functionality. However, from the user's perspective, the host application and its engines appear to be a single application.\"],[9]],\"hasEval\":false}",
    "meta": {
      "moduleName": "dummy/templates/docs/what-are-engines.hbs"
    }
  });

  _exports.default = _default;
});
;define("dummy/templates/docs/why-use-engines", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "GOKG3aPE",
    "block": "{\"symbols\":[],\"statements\":[[7,\"div\",true],[10,\"class\",\"docs-md\"],[8],[7,\"h1\",true],[10,\"id\",\"why-use-engines-\"],[10,\"class\",\"docs-md__h1\"],[8],[0,\"Why use Engines?\"],[9],[0,\"\\n    \"],[7,\"p\",true],[8],[0,\"Large organizations often use Ember.js to power sophisticated web applications. These apps may require collaboration among several teams, sometimes distributed around the world. Typically, responsibility is shared by dividing the application into one or more \\\"sections\\\". How this division is actually implemented varies from team to team.\"],[9],[0,\"\\n\"],[7,\"p\",true],[8],[0,\"Maintaining large monolithic applications poses the following challenges:\"],[9],[0,\"\\n\"],[7,\"ul\",true],[8],[0,\"\\n\"],[7,\"li\",true],[8],[7,\"code\",true],[8],[0,\"Side effects\"],[9],[0,\" - if you change something, it may be unclear how it could affect the rest of platform.\"],[9],[0,\"\\n\"],[7,\"li\",true],[8],[7,\"code\",true],[8],[0,\"Coordination\"],[9],[0,\" - when you develop a new feature or make big changes, many teams may need to be in sync to approve it.\"],[9],[0,\"\\n\"],[7,\"li\",true],[8],[7,\"code\",true],[8],[0,\"Complexity\"],[9],[0,\" - with a huge dependency tree and many layers of abstraction, developers cannot iterate quickly, and features suffer as a result.\"],[9],[0,\"\\n\"],[7,\"li\",true],[8],[7,\"code\",true],[8],[0,\"Killing Innovation\"],[9],[0,\" - a/b testing a cutting-edge feature is hard to do without disrupting the rest of the app and the teams working on it.\"],[9],[0,\"\\n\"],[7,\"li\",true],[8],[7,\"code\",true],[8],[0,\"Slow Onboarding\"],[9],[0,\" - new people coming into the team are overwhelmed.\"],[9],[0,\"\\n\"],[9],[0,\"\\n\"],[7,\"p\",true],[8],[0,\"Engines provide an antidote to these problems by allowing for distributed development, testing, and packaging of logically-grouped pieces of an application.\"],[9],[0,\"\\n\"],[7,\"p\",true],[8],[0,\"Engines are good for organizations that have multiple teams, where each team has their own area that is clearly separated from the others. The isolation is good when it matches organizational boundaries, but adds unnecessary complexity when there is not a good match.\"],[9],[0,\"\\n\"],[7,\"p\",true],[8],[0,\"Engines are used by a number of organizations, including \"],[7,\"a\",true],[10,\"href\",\"https://www.linkedin.com\"],[10,\"class\",\"docs-md__a\"],[8],[0,\"LinkedIn\"],[9],[0,\", \"],[7,\"a\",true],[10,\"href\",\"https://www.chase.com/\"],[10,\"class\",\"docs-md__a\"],[8],[0,\"Chase\"],[9],[0,\", and \"],[7,\"a\",true],[10,\"href\",\"https://squareup.com\"],[10,\"class\",\"docs-md__a\"],[8],[0,\"Square\"],[9],[0,\", to power sites with million of users.\"],[9],[0,\"\\n\"],[7,\"p\",true],[8],[0,\"If you are considering splitting up your application into engines just to reduce the amount of data that needs to be initially downloaded and increase the performance, Engines are not the right solution. Please check out the section on tree shaking and code splitting in projects like \"],[7,\"a\",true],[10,\"href\",\"https://github.com/embroider-build/embroider\"],[10,\"class\",\"docs-md__a\"],[8],[0,\"Embroider\"],[9],[0,\".\"],[9],[9]],\"hasEval\":false}",
    "meta": {
      "moduleName": "dummy/templates/docs/why-use-engines.hbs"
    }
  });

  _exports.default = _default;
});
;define("dummy/templates/index", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "VZ+CNtVv",
    "block": "{\"symbols\":[\"&default\"],\"statements\":[[7,\"div\",true],[11,\"class\",[29,[\"\\n  docs-bg-brand docs-text-white\\n  docs-px-4 docs-py-16 docs-text-center\\n  \",[22,\"class\"],\"\\n\"]]],[8],[0,\"\\n  \"],[7,\"div\",true],[10,\"class\",\"docs-max-w-sm docs-mx-auto\"],[8],[0,\"\\n    \"],[7,\"h1\",true],[10,\"class\",\"\\n      docs-font-title docs-font-normal docs-text-jumbo-1 md:docs-text-jumbo-2 xl:docs-text-jumbo-3\\n      docs-leading-none docs-tracking-tight\\n    \"],[8],[0,\"\\n      \"],[7,\"span\",true],[10,\"class\",\"docs-block docs-text-large-5 md:docs-text-large-6 xl:docs-text-large-7\"],[8],[0,\"\\n        Ember Engines\\n      \"],[9],[0,\"\\n    \"],[9],[0,\"\\n\\n    \"],[7,\"p\",true],[10,\"class\",\"\\n      docs-mt-4 xl:docs-mt-6 docs-mb-2 docs-leading-small docs-mx-auto docs-tracking-tight\\n      docs-text-large-1 md:docs-text-large-2 xl:docs-text-large-3\\n    \"],[8],[0,\"\\n      Composable applications for ambitious user experiences.\\n    \"],[9],[0,\"\\n\\n    \"],[7,\"div\",true],[10,\"class\",\"docs-mt-8\"],[8],[0,\"\\n\"],[4,\"link-to\",null,[[\"class\",\"route\"],[\"\\n        docs-no-underline docs-bg-white docs-text-brand docs-text-xs docs-px-3 docs-py-2\\n        docs-rounded docs-mt-4 docs-shadow-md hover:docs-shadow-lg\\n        docs-transition hover:docs-nudge-t docs-font-bold docs-inline-block docs-uppercase\\n      \",\"docs\"]],{\"statements\":[[0,\"        Read the docs\\n\"]],\"parameters\":[]},null],[0,\"    \"],[9],[0,\"\\n\\n    \"],[14,1],[0,\"\\n  \"],[9],[0,\"\\n\"],[9],[0,\"\\n\\n\"],[7,\"div\",true],[10,\"class\",\"docs-bg-white\"],[8],[0,\"\\n  \"],[7,\"div\",true],[10,\"class\",\"docs-container docs-md\"],[8],[0,\"\\n    \"],[7,\"section\",true],[10,\"class\",\"docs-max-w-md docs-mx-auto docs-pb-8\"],[8],[0,\"\\n      \"],[7,\"aside\",true],[8],[0,\"Looking for the quickstart? \"],[4,\"docs-link\",[\"docs.index\"],null,{\"statements\":[[0,\"Click here\"]],\"parameters\":[]},null],[0,\".\"],[9],[0,\"\\n\\n      \"],[7,\"h1\",true],[10,\"id\",\"introduction\"],[8],[0,\"Introduction\"],[9],[0,\"\\n      \"],[7,\"p\",true],[8],[0,\"Welcome to the official guide for Ember Engines! This guide is intended to get you up and running with Engines as implemented in the \"],[7,\"a\",true],[10,\"href\",\"https://www.npmjs.com/package/ember-engines\"],[8],[7,\"code\",true],[8],[0,\"ember-engines\"],[9],[9],[0,\" addon and give you background on various concepts and ideas related to Engines. It is intended to be read from start to finish, but has been broken down in case you want to come back and re-read a specific topic.\"],[9],[0,\"\\n      \"],[7,\"p\",true],[8],[0,\"Do note that since Engines have not had a 1.0.0 release the APIs and examples given in this guide are subject to change.\"],[9],[0,\"\\n      \"],[7,\"h2\",true],[10,\"id\",\"get-help-amp-contribute\"],[8],[0,\"Get Help & Contribute\"],[9],[0,\"\\n      \"],[7,\"p\",true],[8],[0,\"The Ember Engines source code (including this website) is available on \"],[7,\"a\",true],[10,\"href\",\"http://github.com/ember-engines\"],[8],[0,\"GitHub\"],[9],[0,\". If you run into an error with the Engines code itself or think a feature is missing, please \"],[7,\"a\",true],[10,\"href\",\"https://github.com/ember-engines/ember-engines/issues\"],[8],[0,\"file an issue\"],[9],[0,\".\"],[9],[0,\"\\n      \"],[7,\"p\",true],[8],[0,\"The best way to get help for project-specific issues is via the \"],[7,\"a\",true],[10,\"href\",\"https://discordapp.com/invite/zT3asNS\"],[8],[0,\"Ember Community Discord\"],[9],[0,\". Once you’ve signed up, join the \"],[7,\"a\",true],[10,\"href\",\"https://discordapp.com/channels/480462759797063690/487221820638887947\"],[8],[0,\"#ember-engines\"],[9],[0,\" channel.\"],[9],[0,\"\\n      \"],[7,\"h2\",true],[10,\"id\",\"engines-roadmap\"],[8],[0,\"Engines Roadmap\"],[9],[0,\"\\n      \"],[7,\"p\",true],[8],[0,\"Ember Engines are currently pre-1.0 software and under active development. Check out our \"],[7,\"a\",true],[10,\"href\",\"https://discuss.emberjs.com/t/engines-1-0-roadmap/14914\"],[8],[0,\"roadmap to 1.0\"],[9],[0,\".\"],[9],[0,\"\\n      \"],[7,\"h2\",true],[10,\"id\",\"additional-resources\"],[8],[0,\"Additional Resources\"],[9],[0,\"\\n      \"],[7,\"ul\",true],[8],[0,\"\\n      \"],[7,\"li\",true],[8],[7,\"a\",true],[10,\"href\",\"https://github.com/ember-engines/ember-engines\"],[8],[0,\"Ember Engines on GitHub\"],[9],[9],[0,\"\\n      \"],[7,\"li\",true],[8],[7,\"a\",true],[10,\"href\",\"https://github.com/emberjs/rfcs/pull/10\"],[8],[0,\"Engines RFC\"],[9],[9],[0,\"\\n      \"],[7,\"li\",true],[8],[7,\"a\",true],[10,\"href\",\"https://github.com/emberjs/rfcs/pull/122\"],[8],[0,\"Engine Linking RFC\"],[9],[9],[0,\"\\n      \"],[7,\"li\",true],[8],[7,\"a\",true],[10,\"href\",\"https://github.com/ember-engines/ember-asset-loader\"],[8],[0,\"Ember Asset Loader on GitHub\"],[9],[9],[0,\"\\n      \"],[7,\"li\",true],[8],[7,\"a\",true],[10,\"href\",\"https://github.com/emberjs/rfcs/pull/153\"],[8],[0,\"Asset Manifest RFC\"],[9],[9],[0,\"\\n      \"],[7,\"li\",true],[8],[7,\"a\",true],[10,\"href\",\"https://github.com/emberjs/rfcs/pull/158\"],[8],[0,\"Asset Loader Service RFC\"],[9],[9],[0,\"\\n      \"],[9],[0,\"\\n      \"],[7,\"p\",true],[8],[7,\"em\",true],[8],[0,\"Note: this guide is accurate as of the 0.8.x release of ember-engines\"],[9],[0,\".\"],[9],[0,\"\\n\\n\\n      \"],[7,\"div\",true],[10,\"class\",\"docs-my-16 docs-text-right\"],[8],[0,\"\\n\"],[4,\"link-to\",null,[[\"class\",\"route\"],[\"docs-bg-grey-darkest hover:docs-bg-black docs-text-white docs-py-2 docs-px-4 docs-no-underline docs-rounded\",\"docs\"]],{\"statements\":[[0,\"          Read the docs →\\n\"]],\"parameters\":[]},null],[0,\"      \"],[9],[0,\"\\n    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n\"],[9],[0,\"\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "dummy/templates/index.hbs"
    }
  });

  _exports.default = _default;
});
;define("dummy/templates/not-found", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "TAA2FFmU",
    "block": "{\"symbols\":[],\"statements\":[[7,\"div\",true],[10,\"class\",\"not-found\"],[8],[0,\"\\n  \"],[7,\"h1\",true],[8],[0,\"Not found\"],[9],[0,\"\\n  \"],[7,\"p\",true],[8],[0,\"This page doesn't exist. \"],[4,\"docs-link\",[\"index\"],null,{\"statements\":[[0,\"Head home?\"]],\"parameters\":[]},null],[9],[0,\"\\n\"],[9],[0,\"\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "dummy/templates/not-found.hbs"
    }
  });

  _exports.default = _default;
});
;define("dummy/transforms/boolean", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.BooleanTransform;
    }
  });
});
;define("dummy/transforms/date", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.DateTransform;
    }
  });
});
;define("dummy/transforms/number", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.NumberTransform;
    }
  });
});
;define("dummy/transforms/string", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.StringTransform;
    }
  });
});
;define("dummy/transitions", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = _default;

  function _default() {
    this.transition(this.hasClass('modal-fade-and-drop'), this.use('fadeAndDrop'));
    this.transition(this.hasClass('modal-fade'), this.use('fade', {
      duration: 150
    }));
  }
});
;define("dummy/transitions/cross-fade", ["exports", "liquid-fire/transitions/cross-fade"], function (_exports, _crossFade) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _crossFade.default;
    }
  });
});
;define("dummy/transitions/default", ["exports", "liquid-fire/transitions/default"], function (_exports, _default) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _default.default;
    }
  });
});
;define("dummy/transitions/explode", ["exports", "liquid-fire/transitions/explode"], function (_exports, _explode) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _explode.default;
    }
  });
});
;define("dummy/transitions/fade-and-drop", ["exports", "ember-cli-addon-docs/transitions/fade-and-drop"], function (_exports, _fadeAndDrop) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _fadeAndDrop.default;
    }
  });
});
;define("dummy/transitions/fade", ["exports", "liquid-fire/transitions/fade"], function (_exports, _fade) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _fade.default;
    }
  });
});
;define("dummy/transitions/flex-grow", ["exports", "liquid-fire/transitions/flex-grow"], function (_exports, _flexGrow) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _flexGrow.default;
    }
  });
});
;define("dummy/transitions/fly-to", ["exports", "liquid-fire/transitions/fly-to"], function (_exports, _flyTo) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _flyTo.default;
    }
  });
});
;define("dummy/transitions/move-over", ["exports", "liquid-fire/transitions/move-over"], function (_exports, _moveOver) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _moveOver.default;
    }
  });
});
;define("dummy/transitions/scale", ["exports", "liquid-fire/transitions/scale"], function (_exports, _scale) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _scale.default;
    }
  });
});
;define("dummy/transitions/scroll-then", ["exports", "liquid-fire/transitions/scroll-then"], function (_exports, _scrollThen) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _scrollThen.default;
    }
  });
});
;define("dummy/transitions/to-down", ["exports", "liquid-fire/transitions/to-down"], function (_exports, _toDown) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _toDown.default;
    }
  });
});
;define("dummy/transitions/to-left", ["exports", "liquid-fire/transitions/to-left"], function (_exports, _toLeft) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _toLeft.default;
    }
  });
});
;define("dummy/transitions/to-right", ["exports", "liquid-fire/transitions/to-right"], function (_exports, _toRight) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _toRight.default;
    }
  });
});
;define("dummy/transitions/to-up", ["exports", "liquid-fire/transitions/to-up"], function (_exports, _toUp) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _toUp.default;
    }
  });
});
;define("dummy/transitions/wait", ["exports", "liquid-fire/transitions/wait"], function (_exports, _wait) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _wait.default;
    }
  });
});
;define("dummy/utils/get-cmd-key", ["exports", "ember-keyboard/utils/get-cmd-key"], function (_exports, _getCmdKey) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _getCmdKey.default;
    }
  });
});
;define("dummy/utils/listener-name", ["exports", "ember-keyboard/utils/listener-name"], function (_exports, _listenerName) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _listenerName.default;
    }
  });
});
;define("dummy/utils/titleize", ["exports", "ember-cli-string-helpers/utils/titleize"], function (_exports, _titleize) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _titleize.default;
    }
  });
});
;

;define('dummy/config/environment', [], function() {
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

;
          if (!runningTests) {
            require("dummy/app")["default"].create({});
          }
        
//# sourceMappingURL=dummy.map
