# Services

In addition to external routes, you can also specify Services as dependencies of your Engine which are provided from the host application. For example:

```js
// super-blog/addon/engine.js
export default Engine.extend({
  // ...
  dependencies: {
    services: [
      'store',
      'session'
    ]
  }
});
```

This means that your Engine will expect the host application to provide both the `store` service and `session` service that it uses. The host application can then specify the services it provides like so:

```js
// dummy/app/app.js
import Application from '@ember/application';

const App = Application.extend({
  // ...
  engines: {
    superBlog: {
      dependencies: {
        services: [
          'store',
          { 'session': 'user-session' }
        ]
      }
    }
  }
});
```

In this example, the host provides its `store` service for the Engine's `store`. The Engine's `session` service, however, is actually the `user-session` service of the host. Thus, you can provide a re-mapping of service names by using an object instead of a simple string.

However, if you have `ServiceX` in `Engine B`, and want to share that service with `Engine A`, you'd need to create a separate addon (likely an in-repo addon in the host app) to share those services accross.

Currently, Services are the sanctioned way of passing state and data between the host and the Engine. Since Services are singletons and only passed from host-to-child, there is little risk of coupling and violation of isolation. That said, you should keep the number of services your Engine relies on to a minimum so that your host does not need to provide services fulfilling all of those interfaces.
