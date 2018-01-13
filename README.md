# Faceted

**No Longer Maintained. Archived for future reference.**

Tiny parser for creating multi faceted search from strings.

## Installation

```sh
npm install --save faceted

```

## Usage

Feed the parser a string and it will attempt to build an Abstract Syntax Tree.
The nodes for the abstract syntax tree by default are descriptive object literals,
to replace them with your own code pass a map as the second argument implementing the 
interface of the [AST](src/Ast.js) class. 


## Example

```javascript
 
 import parser from 'faceted';
 console.log(parser.parse('type:c created_by:ffan client.name:/hospital/'));

```

outputs :

```javascript
{
    "type": "query",
    "filters": [{
        "field": "type",
        "op": "=",
        "value": {
            "type": "string",
            "value": "c",
            "location": {
                "first_line": 1,
                "last_line": 1,
                "first_column": 5,
                "last_column": 6
            }
        },
        "location": {
            "first_line": 1,
            "last_line": 1,
            "first_column": 0,
            "last_column": 6
        }
    }, {
        "field": "created_by",
        "op": "=",
        "value": {
            "type": "string",
            "value": "ffan",
            "location": {
                "first_line": 1,
                "last_line": 1,
                "first_column": 18,
                "last_column": 22
            }
        },
        "location": {
            "first_line": 1,
            "last_line": 1,
            "first_column": 7,
            "last_column": 22
        }
    }, {
        "field": "client.name",
        "op": "=",
        "value": {
            "type": "regexp",
            "value": "hospital",
            "location": {
                "first_line": 1,
                "last_line": 1,
                "first_column": 35,
                "last_column": 45
            }
        },
        "location": {
            "first_line": 1,
            "last_line": 1,
            "first_column": 23,
            "last_column": 45
        }
    }],
    "location": {
        "first_line": 1,
        "last_line": 1,
        "first_column": 0,
        "last_column": 45
    }
}
```

## License
Apache-2.0 (c) Quenk Technologies Limited
