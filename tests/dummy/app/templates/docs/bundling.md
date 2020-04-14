# Bundling

_Ember Engines_ not only provides isolation principles for how your code is run, but also how it is bundled.

## Host / Engine Dependencies

In the following example, if the dependency required by the _Engine A_ is different than the _Host_ it will resolve the top level dependency. In this case `Foo` will resolve to `Foo@2`. If that dependency is not in the host and only in the Engine, it will be bundled in `engine-vendor-{hash}.js`. For the case of `Baz`, since both _Engine A_ and the _Host_ require the same dependency it will be bundled into `vendor-{hash}.js` and will be deduped out of the `engine-vendor-{hash}.js` output.

```
| Dependency Name | Engine A | Host |
|=================|==========|======|
| Foo             | v2       | v1   |
| Bar             | v1       | N\A  |
| Baz             | v2       | v2   |
```
