var app = (function (module) {
    "use strict";

    var me = {};

    me.callAppFunction = function(msg) {
        app.customLog(msg);
    };

    me.siteInfo = function (msg) {
        console.log('site-info: '+msg);
    };

    me.init = function (settings) {
        notify.alert('app.site.js init');
    };

    module.site = me;

    return module;

}(app));