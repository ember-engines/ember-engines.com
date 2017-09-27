## Linking And External Links

Routing and linking within and between Engines is a bit more complicated than with normal Ember applications. This is because Engines are isolated and thus don't know about routes beyond their own borders. Let's look at what this means practically.

### Linking Within An Engine

Within a routable Engine, route paths are relative to the Engine's "mount point". That is, the route path at which it is mounted.

In other words, if you're trying to go to route `super-blog.posts.index`, you might do the following from the host application:

```hbs
{{#link-to "super-blog.posts.index"}}Comments{{/link-to}}
```

However, if you are inside the `super-blog` Engine, you would need to do the following:

```hbs
{{#link-to "posts.index"}}Comments{{/link-to}}
```

Notice that the `super-blog` portion of the path is now missing, this is because that is the Engine's mount point.

Previously we mentioned that each Engine has it's own `application` route, that route corresponds to the mount point when within the Engine. So, if you wanted to go to `super-blog` (or the root of the Engine) from within the Engine itself, you would do something like:

```hbs
{{#link-to "application"}}Goes to Blog Home{{/link-to}}
```

Or, maybe even:

```hbs
{{#link-to "index"}}Also goes to Blog Home{{/link-to}}
```

It's a little confusing at first, but the gist is to think of the route paths as if the Engine were it's own application.

### External Routes

If route paths are scoped to an Engine's mount point, then the next logical question is "what if you need to link to a path that isn't below the mount point?"

We refer to any routes that don't use the Engine's mount point as "external routes", because they are effectively "external" or "outside" the Engine. Since Engines are intended to be isolated, they shouldn't have intimate knowledge of the paths to external routes as they may change depending on where the Engine is mounted. That said, there are legitimate use cases where Engines need to link to routes outside themselves.

In order to deal with this, Engines allow you to specify external routes as dependencies:

```js
// super-blog/addon/engine.js
export default Engine.extend({
  // ...
  dependencies: {
    externalRoutes: [
      'home',
      'settings'
    ]
  }
});
```

External routes define things that your Engine needs to link to. The host is then responsible for telling you where those things are. In other words, the Engine defines _what_ it would like to go to and the application tells it _where_ that is.

This is an important mental shift. Normal links define _where_ they want to go to, but external links define _what_ they want to go to and the host application tells it _where_ that is.

So, when you mount your Engine, you'll need to make sure the host specifies appropriate paths for each of the external routes the Engine needs:

```js
// dummy/app/app.js
const App = Ember.Application.extend({
  // ...
  engines: {
    superBlog: {
      dependencies: {
        externalRoutes: {
          home: 'home.index',
          settings: 'settings.blog.index'
        }
      }
    }
  }
});
```

_Note that the Engine name, which is normally dasherized, is camel-cased here instead._

You can use these external routes within your Engine via the `{{link-to-external}}` component:

```hbs
{{link-to-external "Go home" "home"}}
```

Or, one of the programmatic APIs, such as `Route#transitionToExternal` and `Route#replaceWithExternal`:

```js
export default Route.extend({
  actions: {
    goHome() {
      this.transitionToExternal('home');
    }
  }
});
```

#### Using External Routes for Internal locations

In most cases, you should only need to use external routes to link to locations that you expect to be outside of your Engine. However, there are instances where you might need a link that could potentially be internal to your Engine. In which case, external routes can still work effectively, since they represent _what_ you want to link to. If the host then tells you that the thing is at a path internal to your Engine, that will still work fine.
