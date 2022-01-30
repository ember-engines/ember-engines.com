# Linking To An External Context

In order to deal with this, Engines allow you to specify external routes as dependencies:

```js
// super-blog/addon/engine.js
export default class SuperBlog extends Engine {
  // ...
  dependencies = {
    externalRoutes: [
      'home',
      'settings'
    ]
  };
}
```

External routes define things that your Engine needs to link to. The host is then responsible for telling you where those things are. In other words, the Engine defines _what_ it would like to go to and the application tells it _where_ that is.

This is an important mental shift. Normal links define _where_ they want to go to, but external links define _what_ they want to go to and the host application tells it _where_ that is.

So, when you mount your Engine, you'll need to make sure the host specifies appropriate paths for each of the external routes the Engine needs:

```js
// dummy/app/app.js
import Application from '@ember/application';

export default class App extends Application {
  // ...
  engines = {
    'super-blog': {
      dependencies: {
        externalRoutes: {
          home: 'home.index',
          settings: 'settings.blog.index'
        }
      }
    }
  }
}
```

You can use these external routes within your Engine via the `<LinkToExternal/>` component:

```hbs
<LinkToExternal @route="home">Go Home</LinkToExternal>
```

Or, one of the programmatic APIs, such as `Route#transitionToExternal`, `Route#replaceWithExternal` and `Controller#transitionToExternalRoute`:

```js
import Route from "@ember/routing/route";
import { action } from '@ember/object';

export default class YourRoute extends Route {
  @action
  goHome() {
    this.transitionToExternal('home');
  }
});
```

### Using External Routes for Internal locations

In most cases, you should only need to use external routes to link to locations that you expect to be outside of your Engine. However, there are instances where you might need a link that could potentially be internal to your Engine. In which case, external routes can still work effectively, since they represent _what_ you want to link to. If the host then tells you that the thing is at a path internal to your Engine, that will still work fine.
