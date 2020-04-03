# Dependencies

## Using Yarn workspaces

One way to work with engines is to use [Yarn workspaces](https://yarnpkg.com/lang/en/docs/workspaces). You could set up your app like this:

```
- my-app (workspace)
  - packages
    - host-app
    - engine-a
    - engine-b
    - shared-addon
```

In this example, the actual app would be in the `my-app/packages/host-app` directory, while `my-app/packages/engine-a` and `my-app/packages/engine-b` would be engines. `my-app/packages/shared-addon` could be a shared addon that is used by the host app & all engines, including for example common components, services or Ember Data models.

The advantage of this approach is that all of these dependencies will always be in sync and up to date. If you change something in the shared addon, it will immediately be reflected in the host app and all engines. It also makes it easier to ensure all engines depend on the same versions of addons.

## Managing multiple addon versions

When working with engines, it is important to avoid including different versions of the same addon. Currently, only one addon version can actually be loaded at a time. If your host app and engines depend on different versions of an addon, you will run into hard to control issues.

 For example, imagine the host app depends on `ember-power-select^1.0.0`, engine-a depends on `ember-power-select~2.0.0` and engine-b depends on `ember-power-select~2.1.0`.

 Now, three different versions of ember-power-select would be included in the respective vendor bundles. But which version would actually be used in your app/engine would depend on the order in which the bundles are loaded.

 Generally, you should ensure that only one version of a given addon is included across your host app and engines. A  great way to ensure this is to use [ember-cli-dependency-lint](https://github.com/salsify/ember-cli-dependency-lint), which will tell you if multiple versions of an addon are installed.

 If you use Yarn, you can use [resolutions](https://yarnpkg.com/lang/en/docs/selective-version-resolutions/) to force a specific version to be used by an addon. In the above example, you could add the following to your host apps `package.json`:

 ```json
{
  "dependencies": {},
  "devDependencies": {},
  "resolutions": {
    "**/ember-power-select": "^1.0.0"
  }
}
```

This would force this version on all addons. Please use this feature with caution, as it is then up to you to make sure that all apps and engines actually work with this version of the addon.
