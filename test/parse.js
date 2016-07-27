import must from 'must';
import expects from './expectations';
import actual_parse from '../src';

var input = null;
var result = null;
var tests = null;

function parse(text) {
    return actual_parse(text);
}

function json(tree) {
    return JSON.stringify(tree);
}

function print(tree) {
    console.log(json(tree));
}

function compare(tree, that) {
    must(tree).eql(that);
}

function makeTest(test, index) {

    return (test.skip) ?
        this.skip() :
        (test.print ?
            print(parse(test.input)) :
            compare(parse(test.input), test.expect));
}

tests = {
    'should parse a single filter': {
        input: 'type:c',
        expect: expects['should parse a single filter']
    },
    'should parse multiple filters': {

        input: 'type:c name:johan active:false stars:>22',
        expect: expects['should parse multiple filters']

    },
    'should parse with all basic operators': {

        input: 'age:>14 rank:<23 price:>=22.40 discount:<=5.40 active:true name:/Product name/',
        expect: expects['should parse with all basic operators']

    },
    'should parse with the | operator': {

        input: 'tag:old | tag:new | user:/grandma/ | filetype:jpeg',
        expect: expects['should parse with the | operator']

    }

};

describe('parse', function() {

    beforeEach(function() {

        input = null;
        result = null;

    });

    Object.keys(tests).forEach(k => {

        it(k, function() {

            if (Array.isArray(tests[k])) {

                tests[k].forEach(makeTest.bind(this));

            } else {

                makeTest.call(this, tests[k]);

            }

        });

    });

});
