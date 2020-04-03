# Routable Vs. Route-less

Finally, there are two types of Engines that you could potentially encounter: _routable_ and _route-less_.

Routable Engines are, as the name implies, Engines which are able to be routed to. This means that they live at a designated route in your application and can have their own internal routes which you can navigate to. Examples of good candidates for routable Engines are admin control panels or blogging systems.

Route-less Engines, on the other hand, are Engines which are not able to be routed to. This means that they don't live at a specific route, but are instead mounted within a template or your application. Examples of good candidates for route-less Engines are chat boxes or complex forms.
