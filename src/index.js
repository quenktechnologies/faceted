import parser from './parser';
import Ast from './Ast';

export default function parse(src, nodes) {

    parser.parser.yy = {
        ast: nodes || new Ast(),
        parseError(err, hash) {

                throw new SyntaxError(err);

        }
    };

    return src ? parser.parse(src) : '';

}
