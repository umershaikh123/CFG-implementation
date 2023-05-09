const nearley = require("nearley");
const grammar = require("./grammar.js");

// Create a Parser object from our grammar.
const parser = new nearley.Parser(nearley.Grammar.fromCompiled(grammar));

// Parse something!

try {
  parser.feed("int a;");
  console.log(`Variable Declaration : ${JSON.stringify(parser.results[0])}`);
} catch (err) {
  console.log(`Parse failed with error ${err.message}`);
}
