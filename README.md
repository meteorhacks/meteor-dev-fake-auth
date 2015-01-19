# meteor-dev-fake-auth

This is a way to test meteor developer accounts by completing OAuth process in a fake way. No need to interact with the real meteor servers and popups.

##Usage:

If you are using GitHub authentication, add this package like this:

`meteor add meteorhacks:meteor-dev-fake-auth`

Your app will no longer authenticate with Meteor Developer in development mode and will authenticate with
a fake user even if you do not have an internet connection. This package does not affect production
as it is a `debugOnly` package.

This package is an example of how to use
[xolvio:http-interceptor](https://github.com/xolvio/meteor-http-interceptor) to test your app.
