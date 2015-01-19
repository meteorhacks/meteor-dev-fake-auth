HttpInterceptor = Package['xolvio:http-interceptor'].HttpInterceptor;
HttpInterceptor.registerInterceptor('https://www.meteor.com', Meteor.absoluteUrl('proxy.meteor.com'));

var getRoutes = Picker.filter(function(req, res) {
  return req.method == "GET";
});

getRoutes.route('/proxy.meteor.com/oauth2/authorize', function(params, req, res, next) {
  console.log(params)
});

var postRoutes = Picker.filter(function(req, res) {
  return req.method == "POST";
});

postRoutes.route('/proxy.meteor.com/oauth2/token', function(params, req, res, next) {
  console.log(params);
});