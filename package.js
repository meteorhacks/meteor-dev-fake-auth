Package.describe({
  name: "meteorhacks:meteor-dev-fake-auth",
  summary: "A meteor dev fake for use in testing. Fakes the oauth calls amongst other APIs.",
  version: "0.0.1",
  git: "https://github.com/meteorhacks/meteor-dev-fake-auth",
  debugOnly: true
});

Package.on_use(function (api) {
  api.use(['xolvio:http-interceptor@0.2.0'], ['server']);
  api.use(['meteorhacks:picker'], ['server']);
  api.add_files('lib/client/oauth-fake-meteor-dev.js', 'client');
  api.add_files('lib/server/meteor-dev-fake.js', ['server']);
});