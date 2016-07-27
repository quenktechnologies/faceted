/* Grammar for the Mongo Query Filter Language */

%lex

/* Definitions */
Field [^\[\]?<>:\s,"/]+
Text [^\[\]?<>:,"/]+
Regex [^*$&+^|:~<>(){}\[\]\/\\]+

/* Flags */
%options flex
%x SC_LITERAL REGEXP
%%

/* Rules */
\s+                                                             /* skips whitespace */
'true'                                                          return 'TRUE';
'false'                                                         return 'FALSE';
':'                                                             return ':';
[0-9]+'.'[0-9]+                                                 return 'FLOAT';
[0-9]+                                                          return 'INTEGER';
'&'                                                             return 'AND';
'|'                                                             return 'OR';
'/'                         this.begin('REGEXP');               return '/';
<REGEXP>{Regex}                                                 return 'PATTERN';
<REGEXP>'/'                 this.popState();                    return '/';
<REGEXP>{Text}                                                  return 'TEXT';
{Field}                                                         return 'FIELD';
'['                                                             return '[';
']'                                                             return ']';
','                                                             return ',';
'>='                                                            return '>=';
'>'                                                             return '>';
'<='                                                            return '<=';
'<'                                                             return '<';
'='                                                             return '=';
'?'                                                             return '?';
'"'                         this.begin('SC_LITERAL');           return '"';
<SC_LITERAL>[^"]*                                               return 'TEXT';
<SC_LITERAL>'"'             this.popState();                    return '"';
<*><<EOF>>                                                      return 'EOF';

/lex
%ebnf
%start query
%%

query

            : filters+ EOF
              {return yy.ast.query($1, @$);     }
            ;

filters
            
            : filter   
              {$$ = $1;                                    }

            | filters AND filter                 
              {$$ = yy.ast.and($1, $3, @$);                }

            | filters OR filter
              {$$ = yy.ast.or($1, $3, @$);                 }
            ;

filter      

           : FIELD ':' value 
              {$$ = yy.ast.filter($1, '=', $3, @$);   }
                
           | FIELD ':' operator value 
              {$$ = yy.ast.filter($1, $3, $4, @$);    }
           
           | FIELD ':' '[' value_list ']' 
              {$$ = yy.ast.filter($1, 'in', $4, @$);  }
           ;

operator   

           : '>'                           { $$ = '>';                   }
           | '<'                           { $$ = '<';                   }
           | '>='                          { $$ = '>=';                  }
           | '<='                          { $$ = '<=';                  }
           | '='                           { $$ = '=';                   }
           ;

value_list
           : value                         { $$ = [$1];                  }
           | value_list ',' value          { $$ = $1.concat($3);         }
           ;

value
           : TRUE                          { $$ = yy.ast.boolean(true, @$);           }
           | FALSE                         { $$ = yy.ast.boolean(false, @$);          }
           | INTEGER                       { $$ = yy.ast.integer(parseInt($1), @$);   }
           | FLOAT                         { $$ = yy.ast.float(parseFloat($1), @$);   }
           | '"' TEXT '"'                  { $$ = yy.ast.string($2, @$);              }
           | FIELD                         { $$ = yy.ast.string($1, @$);              }
           | '/' PATTERN '/'               { $$ = yy.ast.regexp($2, @$);              }
           ;
