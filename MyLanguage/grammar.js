// Generated automatically by nearley, version 2.20.1
// http://github.com/Hardmath123/nearley
(function () {
function id(x) { return x[0]; }
var grammar = {
    Lexer: undefined,
    ParserRules: [
    {"name": "program", "symbols": ["statements"]},
    {"name": "statements", "symbols": ["_", "statement", "_"], "postprocess": data => [data[1]]},
    {"name": "statements", "symbols": ["statement", "_", {"literal":"\n"}, "statements"], "postprocess": data => [data[1] , ...data[3]]},
    {"name": "statement", "symbols": ["variable_Declare_Initialization"]},
    {"name": "statement", "symbols": ["for_loop"]},
    {"name": "statement", "symbols": ["while_loop"]},
    {"name": "variable_Declare_Initialization", "symbols": ["type", "__", "identifier", "_", "new_d", "_", {"literal":";"}], "postprocess": 
        data => {
            return {
                type : "Variable Declaration",
                dataType : data[0],
                variable_name  : data[2],
                multiple_declaration  : data[4],
            }
        }
        },
    {"name": "variable_Declare_Initialization", "symbols": ["type", "_", "identifier", "_", {"literal":"="}, "_", "value", "_", "new_i", {"literal":";"}], "postprocess": 
        data => {
            return {
                type : "Variable Initialization",
                dataType : data[0],
                variable_name  : data[2],
                value  : data[6],
                multiple_initialization  : data[8],
        
            }
        }
        },
    {"name": "new_d", "symbols": ["_", {"literal":","}, "_", "identifier", "new_d"], "postprocess": 
        data => {
            return {
                type : "new declaration",        
                variable_name  : data[3],        
                nested_Declaration  : data[4],        
            }
        }
        },
    {"name": "new_d", "symbols": ["_"], "postprocess": id},
    {"name": "new_i", "symbols": ["_", {"literal":","}, "_", "identifier", "_", {"literal":"="}, "_", "value", "new_i"], "postprocess": 
        data => {
            return {
                type : "new Initialization",        
                variable_name  : data[4],        
                value  : data[8],
                nested_Initialization  : data[9],        
            }
        }
        },
    {"name": "new_i", "symbols": ["_"], "postprocess": id},
    {"name": "identifier", "symbols": ["letter"], "postprocess": id},
    {"name": "identifier", "symbols": ["identifier", "letter"], "postprocess": id},
    {"name": "identifier", "symbols": ["identifier", "digit"], "postprocess": id},
    {"name": "value", "symbols": ["integer"], "postprocess": id},
    {"name": "value", "symbols": ["float"], "postprocess": id},
    {"name": "value", "symbols": ["string"], "postprocess": id},
    {"name": "value", "symbols": ["char_literal"], "postprocess": id},
    {"name": "value", "symbols": ["boolean"], "postprocess": id},
    {"name": "digit$ebnf$1", "symbols": [/[0-9]/]},
    {"name": "digit$ebnf$1", "symbols": ["digit$ebnf$1", /[0-9]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "digit", "symbols": ["digit$ebnf$1"], "postprocess": data => data[0].join("")},
    {"name": "letter$ebnf$1", "symbols": [/[a-z]/]},
    {"name": "letter$ebnf$1", "symbols": ["letter$ebnf$1", /[a-z]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "letter", "symbols": ["letter$ebnf$1"], "postprocess": data => data[0].join("")},
    {"name": "character", "symbols": [/[^\"]/], "postprocess": data => data[0].join("")},
    {"name": "boolean$string$1", "symbols": [{"literal":"t"}, {"literal":"r"}, {"literal":"u"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "boolean", "symbols": ["boolean$string$1"], "postprocess": () => true},
    {"name": "boolean$string$2", "symbols": [{"literal":"f"}, {"literal":"a"}, {"literal":"l"}, {"literal":"s"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "boolean", "symbols": ["boolean$string$2"], "postprocess": () => false},
    {"name": "type$string$1", "symbols": [{"literal":"i"}, {"literal":"n"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "type", "symbols": ["type$string$1"], "postprocess": id},
    {"name": "type$string$2", "symbols": [{"literal":"f"}, {"literal":"l"}, {"literal":"o"}, {"literal":"a"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "type", "symbols": ["type$string$2"], "postprocess": id},
    {"name": "type$string$3", "symbols": [{"literal":"c"}, {"literal":"h"}, {"literal":"a"}, {"literal":"r"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "type", "symbols": ["type$string$3"], "postprocess": id},
    {"name": "type$string$4", "symbols": [{"literal":"b"}, {"literal":"o"}, {"literal":"o"}, {"literal":"l"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "type", "symbols": ["type$string$4"], "postprocess": id},
    {"name": "integer", "symbols": ["digit"], "postprocess": data => Number(data[0])},
    {"name": "float", "symbols": ["integer", {"literal":"."}, "integer"], "postprocess": data => Number(data[0] + "." + data[2])},
    {"name": "char_literal", "symbols": [{"literal":"'"}, "character", {"literal":"'"}], "postprocess": id},
    {"name": "string_characters", "symbols": ["letter"]},
    {"name": "string_characters", "symbols": ["integer"]},
    {"name": "string_characters", "symbols": ["float"]},
    {"name": "string_characters", "symbols": ["character"]},
    {"name": "string_characters", "symbols": ["letter", "string_characters"]},
    {"name": "string_characters", "symbols": ["character", "string_characters"]},
    {"name": "string_characters", "symbols": ["float", "string_characters"]},
    {"name": "string", "symbols": [{"literal":"'"}, "string_characters", {"literal":"'"}], "postprocess": id},
    {"name": "for_loop$string$1", "symbols": [{"literal":"f"}, {"literal":"o"}, {"literal":"r"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "for_loop", "symbols": ["for_loop$string$1", {"literal":"("}, "for_init", {"literal":";"}, "_", "expression", {"literal":";"}, "_", "counter", {"literal":")"}, {"literal":"{"}, "block", {"literal":"}"}], "postprocess":  data => { return {
        type : "For Loop",        
        for_init  : data[2],        
        expression  : data[5],
        counter  : data[8],   } } },
    {"name": "for_init", "symbols": ["assignment"], "postprocess":  data => { return {
        type : "For init assignment",        
        assignment  : data[0],   } } },
    {"name": "for_init", "symbols": ["declaration"], "postprocess":  data => { return {
        type : "For init declaration",        
        declaration  : data[0],  } } },
    {"name": "assignment", "symbols": ["type", "_", "identifier", "_", {"literal":"="}, "_", "int_value"]},
    {"name": "declaration", "symbols": ["type", "identifier"]},
    {"name": "counter", "symbols": ["identifier", "operator"]},
    {"name": "operator", "symbols": ["inc"]},
    {"name": "operator", "symbols": ["dec"]},
    {"name": "inc$string$1", "symbols": [{"literal":"+"}, {"literal":"+"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "inc", "symbols": ["inc$string$1"]},
    {"name": "dec$string$1", "symbols": [{"literal":"-"}, {"literal":"-"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "dec", "symbols": ["dec$string$1"]},
    {"name": "expression", "symbols": ["identifier", "_", "relational_Operator", "_", "int_value"]},
    {"name": "expression", "symbols": ["identifier", "_", "relational_Operator", "_", "int_value", "_", "logical_operator", "_", "expression"]},
    {"name": "expression", "symbols": []},
    {"name": "int_value", "symbols": ["integer"]},
    {"name": "relational_Operator", "symbols": [{"literal":"<"}]},
    {"name": "relational_Operator$string$1", "symbols": [{"literal":"<"}, {"literal":"="}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "relational_Operator", "symbols": ["relational_Operator$string$1"]},
    {"name": "relational_Operator", "symbols": [{"literal":">"}]},
    {"name": "relational_Operator$string$2", "symbols": [{"literal":">"}, {"literal":"="}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "relational_Operator", "symbols": ["relational_Operator$string$2"]},
    {"name": "relational_Operator$string$3", "symbols": [{"literal":"="}, {"literal":"="}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "relational_Operator", "symbols": ["relational_Operator$string$3"]},
    {"name": "relational_Operator$string$4", "symbols": [{"literal":"!"}, {"literal":"="}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "relational_Operator", "symbols": ["relational_Operator$string$4"]},
    {"name": "logical_operator$string$1", "symbols": [{"literal":"O"}, {"literal":"R"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "logical_operator", "symbols": ["logical_operator$string$1"]},
    {"name": "logical_operator$string$2", "symbols": [{"literal":"A"}, {"literal":"N"}, {"literal":"D"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "logical_operator", "symbols": ["logical_operator$string$2"]},
    {"name": "logical_operator$string$3", "symbols": [{"literal":"N"}, {"literal":"O"}, {"literal":"T"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "logical_operator", "symbols": ["logical_operator$string$3"]},
    {"name": "while_loop$string$1", "symbols": [{"literal":"w"}, {"literal":"h"}, {"literal":"i"}, {"literal":"l"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "while_loop", "symbols": ["while_loop$string$1", {"literal":"("}, "expression", {"literal":")"}, {"literal":"{"}, "block", {"literal":"}"}], "postprocess":  data => { return {
        type : "While Loop",            
        expression  : data[2], } } },
    {"name": "block$string$1", "symbols": [{"literal":"c"}, {"literal":"o"}, {"literal":"d"}, {"literal":"e"}, {"literal":"."}, {"literal":"."}, {"literal":"."}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "block", "symbols": ["block$string$1"]},
    {"name": "_$ebnf$1", "symbols": []},
    {"name": "_$ebnf$1", "symbols": ["_$ebnf$1", /[ ]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "_", "symbols": ["_$ebnf$1"], "postprocess": id},
    {"name": "__$ebnf$1", "symbols": [/[ ]/]},
    {"name": "__$ebnf$1", "symbols": ["__$ebnf$1", /[ ]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "__", "symbols": ["__$ebnf$1"], "postprocess": id}
]
  , ParserStart: "program"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();
