/**
 * Ast provides factory functions for all the nodes recognized by the parser.
 */
class Ast {

    /**
     * boolean
     * @param {string} value 
     * @param {Location} location 
     * @returns {object}
     */
    boolean(value, location) {

        return {
            type: 'boolean',
            value,
            location
        }

    }

    /**
     * number
     * @param {string} value 
     * @param {Location} location 
     * @returns {object}
     */
    number(value, location) {

        return {
            type: 'number',
            value,
            location
        };

    }

    /**
     * string
     * @param {string} value 
     * @param {Location} location 
     * @returns {object}
     */
    string(value, location) {

        return {
            type: 'string',
            value,
            location
        };

    }

    /**
     * field
     * @param {string} label
     * @param {Location} location 
     * @returns {object}
     */
    field(label, location) {

        return {
            type: 'field',
            label,
            location
        };

    }

    /**
     * regexp
     * @param {string} value 
     * @param {Location} location 
     * @returns {object}
     */
    regexp(value, location) {

        return {
            type: 'regexp',
            value,
            location
        };

    }

    /**
     * filter
     * @param {string} field 
     * @param {string} op 
     * @param {*} value
     * @returns {object}
     */
    filter(field, op, value, location) {

        return {
            field,
            op,
            value,
            location
        };

    }

    /**
     * and
     * @param {Filter} lval 
     * @param {Filter} rval 
     * @param {Location} location 
     * @returns
     */
    and(lval, rval, location) {

        return {
            type: 'and',
            lval,
            rval,
            location
        };

    }

    /**
     * or
     * @param {Filter} lval 
     * @param {Filter} rval 
     * @param {Location} location 
     * @returns
     */
    or(lval, rval, location) {
    
 return {
            type: 'or',
            lval,
            rval,
            location
        };
    
    }

    /**
     * query
     * @param {array<Filter>} filters 
     * @param {Location} location 
     * @returns {object}
     */
    query(filters, location) {

        return {
            type: 'query',
            filters,
            location
        };

    }

}

export default Ast
