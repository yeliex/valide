const Core = require('./lib');

const keys = Object.keys(Core);

const CoreDefault = Core.default || {};

Object.defineProperties(CoreDefault, keys.reduce((total, key) => {
    total[key] = {
        value: Core[key],
        enumerable: false,
        writable: false,
        configurable: false,
    };

    return total;
}, {}));

module.exports = CoreDefault;
