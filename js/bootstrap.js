//Rainbow.defer = true;
console.log("bootstrap");
require.config({
    baseUrl : 'js'
});
require(['rainbow-custom.min'], function(app) {
	console.log("loaded rainbow");
	Rainbow.defer = true;
});
require(['language/ceylon'], function(app) {
	console.log("loaded ceylon");
});
require(['impress'], function(app) {
	console.log("loaded impress");
});
require(
        [ 'com/github/tombentley/javazone2016/presentation/1.0.0/com.github.tombentley.javazone2016.presentation-1.0.0' ],
        function(app) {
        	console.log("loaded");
            app.run();
        }
);
console.log("/bootstrap");