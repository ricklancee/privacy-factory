'use strict';

const factory = function() {
    return {
        compose: (...objects) => Object.assign(...objects),
        create: function(func) {
            const obj = {};
            func.call(obj);
            return obj;
        }
    };
};

export default factory;
