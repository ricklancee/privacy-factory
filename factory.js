var factory = function() {
    'use strict';

    var extend = function(object) {
        var extendees = Array.prototype.slice.call(arguments, 1);

        var length = extendees.length;
        for (var i = 0; i < length; i++) {
            var source = extendees[i];
            var keys = Object.keys(source);
            var keyLength = keys.length;

            for (var j = 0; j < keyLength; j++) {
                object[keys[j]] = source[keys[j]];
            }
        }

        return object;
    };

    return {
        compose: function(into) {
            return extend.apply(null, arguments);
        },
        create: function(func) {
            var obj = {};
            func.call(obj);
            return obj;
        }
    }
};
