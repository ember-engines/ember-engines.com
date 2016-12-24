## Deploying An Engine

In many cases, your engine code may be served from a static server, typically a CDN; this server will probably not share the same root location as your application. In order to specify the location to get the engine assets, you can implement a `generateURI` function in the host application's `ember-cli-build.js` file:

```js
// host-app/ember-cli-build.js
var app = new EmberApp(defaults, {
  assetLoader: {
    generateURI: function(filePath) {
      if (EmberApp.env() === 'production') {
        return '//production.cdn.com/' + filePath;
      } else {
        return 'local/static/' + filePath;
      }
    }
  }
});
```

The `generateURI` function receives the `filePath` for each asset and must return a string of the asset's location. For more info, see the [ember-asset-loader documentation](https://github.com/ember-engines/ember-asset-loader#generating-custom-uris).
