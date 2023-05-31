/**
 * vim: syntax=javascript expandtab tabstop=4 shiftwidth=4 softtabstop=4:
 */

const getType = (variable) => {
    if (variable === null) {
        return 'null';
    }

    if (variable instanceof Array) {
        return 'array';
    }

    if (variable instanceof Object) {
        return 'object';
    }

    return typeof variable;
};

module.exports = getType;
