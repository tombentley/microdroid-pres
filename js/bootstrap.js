//Rainbow.defer = true;
console.log("bootstrap");
require.config({
    baseUrl : 'js'
});
require(
        [ 'com/github/tombentley/javazone2016/presentation/1.0.0/com.github.tombentley.javazone2016.presentation-1.0.0' ],
        function(app) {
        	console.log("loaded");
            app.run();
        }
);
console.log("/bootstrap");