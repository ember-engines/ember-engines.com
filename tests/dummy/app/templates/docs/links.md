# Linking Between Engines (and Applications)

Routing and linking within and between Engines is a bit more complicated than with normal Ember applications. This is because Engines are isolated and thus don't know about routes beyond their own borders. Let's look at what this means practically.

## Linking Within An Engine

Within a routable Engine (i.e `super-blog`), route paths are relative to the Engine's "mount point". That is, the route path at which it is mounted.

In other words, if you're trying to go to route `super-blog.posts.index`, you might do the following from the host application:

```hbs
<LinkTo @route="super-blog.posts.index">Comments</LinkTo>
```

However, if you are inside the `super-blog` Engine, you would need to do the following:

```hbs
<LinkTo @route="posts.index">Comments</LinkTo>
```

Notice that the `super-blog` portion of the path is now missing, this is because that is the Engine's mount point.

Previously we mentioned that each Engine has it's own `application` route, that route corresponds to the mount point when within the Engine. So, if you wanted to go to `super-blog` (or the root of the Engine) from within the Engine itself, you would do something like:

```hbs
<LinkTo @route="application">Goes to Blog Home</LinkTo>
```

Or, maybe even:

```hbs
<LinkTo @route="index">Also goes to Blog Home</LinkTo>
```

It's a little confusing at first, but the gist is to think of the route paths as if the Engine were it's own application.

## Link to External Engine/Application

If route paths are scoped to an Engine's mount point, then the next logical question is "what if you need to link to a path that isn't below the mount point?"

We refer to any routes that don't use the Engine's mount point as "external routes", because they are effectively "external" or "outside" the Engine. Since Engines are intended to be isolated, they shouldn't have intimate knowledge of the paths to external routes as they may change depending on where the Engine is mounted. That said, there are legitimate use cases where Engines need to link to routes outside, such as a consuming Application or sibling Engine. See futher details on [`<LinkToExternal/>`](./link-to-external).
