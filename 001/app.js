/*
    function myFunction() { // ... }; // declaration of the function
    var app = myFunction(); // execute function and assign function result to "app" variable

    var app = (function () {})();
    var app = (function (module) {}(app));
*/

var app = (function () {
    "use strict";

	var privateVariable = 1;

	function privateMethod() {
		// ...
	}

	var me = {};

	me.publicProperty = 1;
	me.publicMethod = function () {
		// ...
    };
    
    //
    me.logCounter = 0;
    me.customLog = function (msg) {
        me.logCounter++;
        console.log('Log-'+this.logCounter+': '+msg);
    };

    me.callAppSiteFunction = function(msg) {
        app.site.siteInfo(msg);
    };

    me.init = function (settings) {
        notify.alert('app.js init');
    };

	return me;

})();