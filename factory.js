const factory = function() {
    'use strict';

    const extend = function(object) {
        const extendees = Array.prototype.slice.call(arguments, 1);

        const length = extendees.length;
        for (let i = 0; i < length; i++) {
            const source = extendees[i];
            const keys = Object.keys(source);
            const keyLength = keys.length;

            for (let i = 0; i < keyLength; i++) {
                object[keys[i]] = source[keys[i]];
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
