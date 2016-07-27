'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = parse;

var _parser = require('./parser');

var _parser2 = _interopRequireDefault(_parser);

var _Ast = require('./Ast');

var _Ast2 = _interopRequireDefault(_Ast);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function parse(src, nodes) {

    _parser2.default.parser.yy = {
        ast: nodes || new _Ast2.default(),
        parseError: function parseError(err, hash) {

            throw new SyntaxError(err);
        }
    };

    return src ? _parser2.default.parse(src) : '';
}
//# sourceMappingURL=index.js.map