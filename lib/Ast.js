'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Ast provides factory functions for all the nodes recognized by the parser.
 */
var Ast = function () {
    function Ast() {
        _classCallCheck(this, Ast);
    }

    _createClass(Ast, [{
        key: 'boolean',


        /**
         * boolean
         * @param {string} value 
         * @param {Location} location 
         * @returns {object}
         */
        value: function boolean(value, location) {

            return {
                type: 'boolean',
                value: value,
                location: location
            };
        }

        /**
         * number
         * @param {string} value 
         * @param {Location} location 
         * @returns {object}
         */

    }, {
        key: 'number',
        value: function number(value, location) {

            return {
                type: 'number',
                value: value,
                location: location
            };
        }

        /**
         * string
         * @param {string} value 
         * @param {Location} location 
         * @returns {object}
         */

    }, {
        key: 'string',
        value: function string(value, location) {

            return {
                type: 'string',
                value: value,
                location: location
            };
        }

        /**
         * field
         * @param {string} label
         * @param {Location} location 
         * @returns {object}
         */

    }, {
        key: 'field',
        value: function field(label, location) {

            return {
                type: 'field',
                label: label,
                location: location
            };
        }

        /**
         * regexp
         * @param {string} value 
         * @param {Location} location 
         * @returns {object}
         */

    }, {
        key: 'regexp',
        value: function regexp(value, location) {

            return {
                type: 'regexp',
                value: value,
                location: location
            };
        }

        /**
         * filter
         * @param {string} field 
         * @param {string} op 
         * @param {*} value
         * @returns {object}
         */

    }, {
        key: 'filter',
        value: function filter(field, op, value, location) {

            return {
                field: field,
                op: op,
                value: value,
                location: location
            };
        }

        /**
         * and
         * @param {Filter} lval 
         * @param {Filter} rval 
         * @param {Location} location 
         * @returns
         */

    }, {
        key: 'and',
        value: function and(lval, rval, location) {

            return {
                type: 'and',
                lval: lval,
                rval: rval,
                location: location
            };
        }

        /**
         * or
         * @param {Filter} lval 
         * @param {Filter} rval 
         * @param {Location} location 
         * @returns
         */

    }, {
        key: 'or',
        value: function or(lval, rval, location) {

            return {
                type: 'or',
                lval: lval,
                rval: rval,
                location: location
            };
        }

        /**
         * query
         * @param {array<Filter>} filters 
         * @param {Location} location 
         * @returns {object}
         */

    }, {
        key: 'query',
        value: function query(filters, location) {

            return {
                type: 'query',
                filters: filters,
                location: location
            };
        }
    }]);

    return Ast;
}();

exports.default = Ast;
//# sourceMappingURL=Ast.js.map