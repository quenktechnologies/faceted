export default {
    'should parse a single filter': {
        'type': 'query',
        'filters': [{
            'field': 'type',
            'op': '=',
            'value': {
                'type': 'string',
                'value': 'c',
                'location': {
                    'first_line': 1,
                    'last_line': 1,
                    'first_column': 5,
                    'last_column': 6
                }
            },
            'location': {
                'first_line': 1,
                'last_line': 1,
                'first_column': 0,
                'last_column': 6
            }
        }],
        'location': {
            'first_line': 1,
            'last_line': 1,
            'first_column': 0,
            'last_column': 6
        }
    },

    'should parse multiple filters': {
        'type': 'query',
        'filters': [{
            'field': 'type',
            'op': '=',
            'value': {
                'type': 'string',
                'value': 'c',
                'location': {
                    'first_line': 1,
                    'last_line': 1,
                    'first_column': 5,
                    'last_column': 6
                }
            },
            'location': {
                'first_line': 1,
                'last_line': 1,
                'first_column': 0,
                'last_column': 6
            }
        }, {
            'field': 'name',
            'op': '=',
            'value': {
                'type': 'string',
                'value': 'johan',
                'location': {
                    'first_line': 1,
                    'last_line': 1,
                    'first_column': 12,
                    'last_column': 17
                }
            },
            'location': {
                'first_line': 1,
                'last_line': 1,
                'first_column': 7,
                'last_column': 17
            }
        }, {
            'field': 'active',
            'op': '=',
            'value': {
                'type': 'boolean',
                'value': false,
                'location': {
                    'first_line': 1,
                    'last_line': 1,
                    'first_column': 25,
                    'last_column': 30
                }
            },
            'location': {
                'first_line': 1,
                'last_line': 1,
                'first_column': 18,
                'last_column': 30
            }
        }, {
            'field': 'stars',
            'op': '>',
            'value': {
                'type': 'integer',
                'value': 22,
                'location': {
                    'first_line': 1,
                    'last_line': 1,
                    'first_column': 38,
                    'last_column': 40
                }
            },
            'location': {
                'first_line': 1,
                'last_line': 1,
                'first_column': 31,
                'last_column': 40
            }
        }],
        'location': {
            'first_line': 1,
            'last_line': 1,
            'first_column': 0,
            'last_column': 40
        }
    },
    'should parse with all basic operators': {
        'type': 'query',
        'filters': [{
            'field': 'age',
            'op': '>',
            'value': {
                'type': 'integer',
                'value': 14,
                'location': {
                    'first_line': 1,
                    'last_line': 1,
                    'first_column': 5,
                    'last_column': 7
                }
            },
            'location': {
                'first_line': 1,
                'last_line': 1,
                'first_column': 0,
                'last_column': 7
            }
        }, {
            'field': 'rank',
            'op': '<',
            'value': {
                'type': 'integer',
                'value': 23,
                'location': {
                    'first_line': 1,
                    'last_line': 1,
                    'first_column': 14,
                    'last_column': 16
                }
            },
            'location': {
                'first_line': 1,
                'last_line': 1,
                'first_column': 8,
                'last_column': 16
            }
        }, {
            'field': 'price',
            'op': '>=',
            'value': {
                'type': 'float',
                'value': 22.4,
                'location': {
                    'first_line': 1,
                    'last_line': 1,
                    'first_column': 25,
                    'last_column': 30
                }
            },
            'location': {
                'first_line': 1,
                'last_line': 1,
                'first_column': 17,
                'last_column': 30
            }
        }, {
            'field': 'discount',
            'op': '<=',
            'value': {
                'type': 'float',
                'value': 5.4,
                'location': {
                    'first_line': 1,
                    'last_line': 1,
                    'first_column': 42,
                    'last_column': 46
                }
            },
            'location': {
                'first_line': 1,
                'last_line': 1,
                'first_column': 31,
                'last_column': 46
            }
        }, {
            'field': 'active',
            'op': '=',
            'value': {
                'type': 'boolean',
                'value': true,
                'location': {
                    'first_line': 1,
                    'last_line': 1,
                    'first_column': 54,
                    'last_column': 58
                }
            },
            'location': {
                'first_line': 1,
                'last_line': 1,
                'first_column': 47,
                'last_column': 58
            }
        }, {
            'field': 'name',
            'op': '=',
            'value': {
                'type': 'regexp',
                'value': 'Product name',
                'location': {
                    'first_line': 1,
                    'last_line': 1,
                    'first_column': 64,
                    'last_column': 78
                }
            },
            'location': {
                'first_line': 1,
                'last_line': 1,
                'first_column': 59,
                'last_column': 78
            }
        }],
        'location': {
            'first_line': 1,
            'last_line': 1,
            'first_column': 0,
            'last_column': 78
        }
    },
    'should parse with the | operator': {
  'type': 'query',
  'filters': [
    {
      'type': 'or',
      'lval': {
        'type': 'or',
        'lval': {
          'type': 'or',
          'lval': {
            'field': 'tag',
            'op': '=',
            'value': {
              'type': 'string',
              'value': 'old',
              'location': {
                'first_line': 1,
                'last_line': 1,
                'first_column': 4,
                'last_column': 7
              }
            },
            'location': {
              'first_line': 1,
              'last_line': 1,
              'first_column': 0,
              'last_column': 7
            }
          },
          'rval': {
            'field': 'tag',
            'op': '=',
            'value': {
              'type': 'string',
              'value': 'new',
              'location': {
                'first_line': 1,
                'last_line': 1,
                'first_column': 14,
                'last_column': 17
              }
            },
            'location': {
              'first_line': 1,
              'last_line': 1,
              'first_column': 10,
              'last_column': 17
            }
          },
          'location': {
            'first_line': 1,
            'last_line': 1,
            'first_column': 0,
            'last_column': 17
          }
        },
        'rval': {
          'field': 'user',
          'op': '=',
          'value': {
            'type': 'regexp',
            'value': 'grandma',
            'location': {
              'first_line': 1,
              'last_line': 1,
              'first_column': 25,
              'last_column': 34
            }
          },
          'location': {
            'first_line': 1,
            'last_line': 1,
            'first_column': 20,
            'last_column': 34
          }
        },
        'location': {
          'first_line': 1,
          'last_line': 1,
          'first_column': 0,
          'last_column': 34
        }
      },
      'rval': {
        'field': 'filetype',
        'op': '=',
        'value': {
          'type': 'string',
          'value': 'jpeg',
          'location': {
            'first_line': 1,
            'last_line': 1,
            'first_column': 46,
            'last_column': 50
          }
        },
        'location': {
          'first_line': 1,
          'last_line': 1,
          'first_column': 37,
          'last_column': 50
        }
      },
      'location': {
        'first_line': 1,
        'last_line': 1,
        'first_column': 0,
        'last_column': 50
      }
    }
  ],
  'location': {
    'first_line': 1,
    'last_line': 1,
    'first_column': 0,
    'last_column': 50
  }
}


};
