## Mounting An Engine

Now that we have our Engine created, we need to "mount" it in our application so that we can use it. First, however, we should probably talk about templates and top-level routes.

### Engine Templates & Top-Level Routes

In order to actually verify that our Engine renders properly, we need to add a template.

```bash
mkdir addon/templates
touch addon/templates/application.hbs
```

Note that the template we added is called `application`. This is because the top-level route and template in an Engine are known as `application`, similar to what happens with the top-level in a normal application.

This means that from within an Engine, if you want to transition to the first route, you would use `application` as the name instead of the location that the host application knows about.

Anyway, let's add something super simple to our template:

```hbs
<h3>Hello World!</h3>
```

Now we'll be able to verify that our Engine renders when we mount it.

### Routable Engines

The technique to mount an Engine into your application varies by the type of Engine you're using. We'll cover routable Engines first.

Mounting a Routable Engine is done through the consumer's `Router` map, like so:

```js
Router.map(function() {
  this.mount('super-blog');
});
```

Pretty straightforward. The `mount` method is very similar to the `route` method you would normally use to define routes. You can specify a `path` and `resetNamespace` options like you normally would:

```js
Router.map(function() {
  this.mount('super-blog', { resetNamespace: true, path: '/blog' });
});
```

You can also specify a special property, `as`, which allows you to mount more than one instance of an Engine by specifying the route name it'll live under:

```js
Router.map(function() {
  this.mount('super-blog', { path: '/blog' });
  this.mount('super-blog', { as: 'dev-blog', path: '/dev-blog' });
});
```

This means that if you transitioned to `super-blog`, you'll land on `/blog`, but if you transition to `dev-blog`, you'll land on `/dev-blog`.

Other than `as`, the key difference between `mount` and `route` is how you specify child routes. For `route` you would normally pass a callback function as an additional argument. With Engines, though, we want our routing structure to be isolated from the host application, and so child routes are defined in the Engines `routes.js` file discussed in the previous section.

Thus, when using `this.mount`, the `buildRoutes` function exported from `routes.js` gets used as the callback you would normally pass to `this.route`.

That about covers it for routable Engines, let's talk about route-less Engines now.

### Route-less Engines

Route-less Engines are much more straightforward to mount in an application.

To mount a route-less Engine, you use the `{{mount}}` keyword in any of your templates:

```hbs
{{mount "super-blog"}}
```

And that's it! The Engine's `application.hbs` will be rendered into the DOM at the mount location.

Prior to Ember 2.16, the `{{mount}}` helper only accepts an Engine's name, no other variables are supported. As of Ember 2.16 a `model` argument can be used to pass state and/or context directly to an engine. An inline `hash` can even be used to pass components via `model`. For more information, please see [the documentation](https://www.emberjs.com/api/ember/3.7/classes/Ember.Templates.helpers/methods/mount?anchor=mount) for this helper.
