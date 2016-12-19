## Deploying An Engine

In many cases, the engine code will be served from a static server, typically a CDN.
This server will probably not share the same root location as your application.
In order to specify the engine's assets location, you can implement a `generateURI` function at the host application's build options file:

```js
// host-app/ember-cli-build.js
var app = new EmberApp(defaults, {
  assetLoader: {
    generateURI: function(filePath) {
      if (EmberApp.env() === 'production') {
        return 'http://production.cdn.com/' + filePath;
      } else {
        return 'http://staging.static.com/' + filePath;
      }
    }
  }
});
```
The `generateURI` function receives the `filePath` for each asset and must return a string of the asset's location.

