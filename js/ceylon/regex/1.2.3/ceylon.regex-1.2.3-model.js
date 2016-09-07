(function(define) { define(function(require, ex$, module) {
ex$.$CCMM$={"$mod-version":"1.2.3","$mod-deps":["ceylon.language\/1.2.3"],"$mod-bin":"9.1","ceylon.regex":{regex:{$t:{pk:".",nm:"Regex"},pa:1,ps:[[{$t:{md:"$",pk:"$",nm:"String"},mt:"prm",an:{doc:["The regular expression to be used for all operations"]},nm:"expression"},{$t:{md:"$",pk:"$",nm:"Boolean"},def:1,mt:"prm",an:{doc:["For returning all matches instead of only the first"]},nm:"global"},{$t:{md:"$",pk:"$",nm:"Boolean"},def:1,mt:"prm",an:{doc:["For case-insensitive matching"]},nm:"ignoreCase"},{$t:{md:"$",pk:"$",nm:"Boolean"},def:1,mt:"prm",an:{doc:["For multi-line matching where `^` and `$` also match line delimiters and not\njust the beginning or end of the entire input string"]},nm:"multiLine"}]],mt:"m",an:{native:[],doc:["Factory method that returns an initialized [[Regex]] object\nfor the current backend. See the documentation for the `Regex`\nobject itself for more information.\n"],throws:["RegexException"]},nm:"regex"},quote:{$t:{md:"$",pk:"$",nm:"String"},pa:1,ps:[[{$t:{md:"$",pk:"$",nm:"String"},mt:"prm",an:{doc:["The string to be literalized"]},nm:"input"}]],mt:"m",an:{doc:["This method produces a `String` that can be used to create a\n`Regex` that would match the string as if it were a literal\npattern. Metacharacters or escape sequences in the input sequence\nwill be given no special meaning.\n"]},nm:"quote"},"$pkg-pa":1,Regex:{super:{md:"$",pk:"$",nm:"Basic"},pa:273,ps:[{$t:{md:"$",pk:"$",nm:"String"},pa:1,mt:"prm",an:{doc:["The regular expression to be used for all operations"]},nm:"expression",$hdn:1},{$t:{md:"$",pk:"$",nm:"Boolean"},pa:1,def:1,mt:"prm",an:{doc:["For returning all matches instead of only the first"]},nm:"global",$hdn:1},{$t:{md:"$",pk:"$",nm:"Boolean"},pa:1,def:1,mt:"prm",an:{doc:["For case-insensitive matching"]},nm:"ignoreCase",$hdn:1},{$t:{md:"$",pk:"$",nm:"Boolean"},pa:1,def:1,mt:"prm",an:{doc:["For multi-line matching where `^` and `$` also match line delimiters and not\njust the beginning or end of the entire input string"]},nm:"multiLine",$hdn:1}],mt:"c",$at:{expression:{$t:{md:"$",pk:"$",nm:"String"},pa:1,mt:"a",an:{doc:["The regular expression to be used for all operations"]},nm:"expression"},ignoreCase:{$t:{md:"$",pk:"$",nm:"Boolean"},pa:1,mt:"a",an:{doc:["For case-insensitive matching"]},nm:"ignoreCase"},multiLine:{$t:{md:"$",pk:"$",nm:"Boolean"},pa:1,mt:"a",an:{doc:["For multi-line matching where `^` and `$` also match line delimiters and not\njust the beginning or end of the entire input string"]},nm:"multiLine"},global:{$t:{md:"$",pk:"$",nm:"Boolean"},pa:1,mt:"a",an:{doc:["For returning all matches instead of only the first"]},nm:"global"},lastIndex:{$t:{md:"$",pk:"$",nm:"Integer"},pa:1029,mt:"a",an:{doc:["The zero-based position at which to start the next match"]},nm:"lastIndex"}},$m:{split:{$t:{md:"$",pk:"$",ta:{"Sequential.Element":{md:"$",pk:"$",nm:"String"}},nm:"Sequential"},pa:5,ps:[[{$t:{md:"$",pk:"$",nm:"String"},mt:"prm",an:{doc:["the string to be split"]},nm:"input"},{$t:{md:"$",pk:"$",nm:"Integer"},def:1,mt:"prm",an:{doc:["the maximum number of strings to split off and return,\nignoring the rest of the input string.\nIf negative, there is no limit"]},nm:"limit"}]],mt:"m",an:{doc:["Splits the input string around matches of the regular expression. If the\nregular expression is completely empty, splits the input string into its\nconstituent characters. If the regular expression is not empty but matches\nan empty string, the results are not well defined.\n\nNote: There are some browser inconsistencies with this implementation, as\nit is delegated to the browser, and no browser follows the spec completely.\nA major difference is that IE will exclude empty strings in the result.\n"]},nm:"split"},test:{$t:{md:"$",pk:"$",nm:"Boolean"},pa:9,ps:[[{$t:{md:"$",pk:"$",nm:"String"},mt:"prm",an:{doc:["the string to apply the regular expression to"]},nm:"input"}]],mt:"m",an:{doc:["\nDetermines if the regular expression matches the given string. This call\naffects the value returned by [[lastIndex]] if the global flag is\nset. Equivalent to: `exec(input) != null`\n"]},nm:"test"},find:{$t:{comp:"u",l:[{md:"$",pk:"$",nm:"Null"},{pk:".",nm:"MatchResult"}]},pa:5,ps:[[{$t:{md:"$",pk:"$",nm:"String"},mt:"prm",an:{doc:["the string to apply the regular expression to"]},nm:"input"}]],mt:"m",an:{doc:["Applies the regular expression to the given string. This call affects the\nvalue returned by [[lastIndex]] if the global flag is set.\nProduces a [[match result|MatchResult]] if the string matches, else `null`.\n"]},nm:"find"},replace:{$t:{md:"$",pk:"$",nm:"String"},pa:5,ps:[[{$t:{md:"$",pk:"$",nm:"String"},mt:"prm",an:{doc:["the string in which the regular expression is to be searched"]},nm:"input"},{$t:{md:"$",pk:"$",nm:"String"},mt:"prm",an:{doc:["the replacement string"]},nm:"replacement"}]],mt:"m",an:{doc:["Returns the input string with the part(s) matching the regular expression\nreplaced with the replacement string. If the global flag is set, replaces\nall matches of the regular expression. Otherwise, replaces the first match\nof the regular expression. As per Javascript semantics, backslashes in the\nreplacement string get no special treatment, but the replacement string can\nuse the following special patterns:\n\n - `$1`, `$2`, ... `$99` - inserts the n'th group matched by the regular\nexpression.\n - `$&` - inserts the entire string matched by the regular expression.\n - `$$` - inserts a $.\n\nNote: \"$`\" and \"$'\" are *not* supported in the pure Java implementation,\nand throw an exception.\n"]},nm:"replace"},findAll:{$t:{md:"$",pk:"$",ta:{"Sequential.Element":{pk:".",nm:"MatchResult"}},nm:"Sequential"},pa:9,ps:[[{$t:{md:"$",pk:"$",nm:"String"},mt:"prm",nm:"input"}]],mt:"m",an:{doc:["Applies the regular expression to the given string. Produces a sequence\nof [[match result|MatchResult]] containing all matches, or [[Empty]]\nif there was no match.\n"]},nm:"findAll"}},an:{doc:["A class for cross-platform regular expressions modeled on Javascript's\n`RegExp`, plus some extra methods like Java's and Javascript `String`'s\n`replace` and `split` methods (taking a `RegExp` parameter) that are missing\nfrom Ceylon's version of [[String]]. To create an instance of this class\nuse the toplevel function [[regex]].\n\nExample usage:\n\n    Regex re = regex(\"[0-9]+ years\");\n    assert(re.test(\"90 years old\"));\n    print(re.replace(\"90 years old\", \"very\"));\n    \nThere are a few small incompatibilities between the two implementations.\nJava-specific constructs in the regular expression syntax (e.g. [a-z&&[^bc]],\n(?<=foo), \\A, \\Q) work only on the JVM backend, while the Javascript-specific\nconstructs $` and $' in the replacement expression work only on the Javascript\nbackend, not the JVM backend, which rejects them. There are also sure to\nexist small differences between the different browser implementations,\nbe sure to test thoroughly, especially when using more advanced features.\n"],throws:["RegexException"]},nm:"Regex"},RegexException:{super:{md:"$",pk:"$",nm:"Exception"},pa:1,ps:[{$t:{comp:"u",l:[{md:"$",pk:"$",nm:"Null"},{md:"$",pk:"$",nm:"String"}]},def:1,mt:"prm",nm:"description"},{$t:{comp:"u",l:[{md:"$",pk:"$",nm:"Null"},{md:"$",pk:"$",nm:"Throwable"}]},def:1,mt:"prm",nm:"cause"}],mt:"c",$at:{description$ofnzih:{$t:{comp:"u",l:[{md:"$",pk:"$",nm:"Null"},{md:"$",pk:"$",nm:"String"}]},mt:"a",nm:"description"},cause$vriy58:{$t:{comp:"u",l:[{md:"$",pk:"$",nm:"Null"},{md:"$",pk:"$",nm:"Throwable"}]},mt:"a",nm:"cause"}},an:{doc:["An exception that can be thrown when the [[Regex]] object couldn't be created\nor when an error occurred in any of its methods"]},nm:"RegexException"},MatchResult:{super:{md:"$",pk:"$",nm:"Basic"},pa:1,ps:[{$t:{md:"$",pk:"$",nm:"Integer"},pa:1,mt:"prm",an:{doc:["The zero-based index of the match in the input string"]},nm:"start",$hdn:1},{$t:{md:"$",pk:"$",nm:"Integer"},pa:1,mt:"prm",an:{doc:["The zero-based index after the match in the input string"]},nm:"end",$hdn:1},{$t:{md:"$",pk:"$",nm:"String"},pa:1,mt:"prm",an:{doc:["The matched string"]},nm:"matched",$hdn:1},{$t:{md:"$",pk:"$",ta:{"Sequential.Element":{comp:"u",l:[{md:"$",pk:"$",nm:"Null"},{md:"$",pk:"$",nm:"String"}]}},nm:"Sequential"},pa:1,mt:"prm",an:{doc:["A sequence of matched groups or [[Empty]]"]},nm:"groups",$hdn:1}],mt:"c",$at:{string:{$t:{md:"$",pk:"$",nm:"String"},pa:3,mt:"g",nm:"string"},start:{$t:{md:"$",pk:"$",nm:"Integer"},pa:1,mt:"a",an:{doc:["The zero-based index of the match in the input string"]},nm:"start"},groups:{$t:{md:"$",pk:"$",ta:{"Sequential.Element":{comp:"u",l:[{md:"$",pk:"$",nm:"Null"},{md:"$",pk:"$",nm:"String"}]}},nm:"Sequential"},pa:1,mt:"a",an:{doc:["A sequence of matched groups or [[Empty]]"]},nm:"groups"},end:{$t:{md:"$",pk:"$",nm:"Integer"},pa:1,mt:"a",an:{doc:["The zero-based index after the match in the input string"]},nm:"end"},matched:{$t:{md:"$",pk:"$",nm:"String"},pa:1,mt:"a",an:{doc:["The matched string"]},nm:"matched"}},an:{doc:["The result of a call to [[Regex.find]]"]},nm:"MatchResult"}},"$mod-anns":{license:["Apache Software License 2.0"],by:["Tako Schotanus"],doc:["This module provides basic cross-platform regular expression support.\nIt's based on Google's [RegExp object](http:\/\/www.gwtproject.org\/javadoc\/latest\/com\/google\/gwt\/regexp\/shared\/RegExp.html)\nfor GWT.\n\nFor documentation pertaining to regular expressions and patterns take\na look at the information for the original implementations:\n\n - [Java RegExp documentation](http:\/\/docs.oracle.com\/javase\/7\/docs\/api\/java\/util\/regex\/package-summary.html)\n - [ECMAScript RegExp documentation](http:\/\/www.ecma-international.org\/ecma-262\/5.1\/#sec-15.10)\n - [Mozilla RegExp documentation](https:\/\/developer.mozilla.org\/en\/docs\/Web\/JavaScript\/Reference\/Global_Objects\/RegExp)\n\nA simple example of how to use this module:\n\n    Regex re = regex(\"[0-9]+ years\");\n    assert(re.test(\"90 years old\"));\n    print(re.replace(\"90 years old\", \"very\"));\n\nFor more information see [[regex]] and [[Regex]].\n"]},"$mod-name":"ceylon.regex"};
});
}(typeof define==='function' && define.amd ? define : function (factory) {
if (typeof exports!=='undefined') { factory(require, exports, module);
} else { throw 'no module loader'; }
}));
