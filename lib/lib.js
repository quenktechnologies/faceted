'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.convert = convert;
exports.parse = parse;

var _parser = require('./parser');

function get_clause(field, symbol, value) {

    var clause = Object.create(null);

    switch (symbol) {

        case '=':
            clause[field] = value;
            break;

        case '>':
            clause[field] = {
                $gt: value
            };
            break;

        case '>=':
            clause[field] = {
                $gte: value
            };
            break;

        case '<':
            clause[field] = {
                $lt: value
            };
            break;

        case '<=':
            clause[field] = {
                $lte: value
            };
            break;

        case '$in':
            clause[field] = {
                $in: value
            };
            break;

        case '?':
            clause[field] = { $regex: value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), $options: 'i' };
            break;
        default:
            break;

    }
    return clause;
}

/**
 * filter_conversion filters out the unknown fields before converting them.
 * @return {array}
 */
function filter_conversion(list, map) {

    return list.map(function (clause) {

        if (!map.hasOwnProperty(clause.field)) return null;

        return get_clause(clause.field, clause.operator, typeof map[clause.field] === 'function' ? map[clause.field](clause.value) : clause.value);
    }).filter(function (clause) {
        return clause;
    });
}

/**
 * convert is a function that takes the AST
 * and turns it into a query. Currently preforms no optimisations
 * so expensive queries are possible. Also this does no
 * real validation of filter criteria, use a map of functions
 * to intercept potentially dangerous values.
 *
 * @todo Perhaps provide a syntax to declare what operators 
 * are valid for a particular key? Maybe in the map like so:
 *  ```javascript {
 *       name: {valid_ops:['?', '='], check:x=>}
 *     }
 *  ```
 *
 * Be careful...
 * @param {AST} ast The result of a successful parse call.
 * @param {object} map A map that indicates what are valid fields. 
 *                     If the value the value of the map keys are functions
 *                     they will each be called when their field is detected.
 */
function convert(ast, map) {

    var q = Object.create(null);

    if (ast.filters.AND.length > 0) q.$and = filter_conversion(ast.filters.AND, map);

    if (ast.filters.OR.length > 1) q.$or = filter_conversion(ast.filters.OR, map);

    return q;
}

/**
 * parse parses a string into an
 * abstract syntax tree (ast)
 * @param {string} source
 * @returns {object}
 */
function parse(source) {
    return _parser.parser.parse(source);
}
//# sourceMappingURL=lib.js.map