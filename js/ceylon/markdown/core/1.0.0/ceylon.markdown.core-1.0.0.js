(function(define) { define(function(require, ex$, module) {
var $$req$ = require; require = (typeof $$ceylon$require == 'undefined') ? $$req$ : function() { return $$ceylon$require('ceylon/markdown/core/1.0.0/ceylon.markdown.core-1.0.0', $$req$, Array.prototype.slice.call(arguments)); }

var _CTM$;function $CCMM$(){if (_CTM$===undefined)_CTM$=require('ceylon/markdown/core/1.0.0/ceylon.markdown.core-1.0.0-model').$CCMM$;return _CTM$;}
ex$.$CCMM$=$CCMM$;
var m$t3v=require('ceylon/language/1.2.3/ceylon.language-1.2.3');
m$t3v.$addmod$(m$t3v,'ceylon.language/1.2.3');
m$t3v.$addmod$(ex$,'ceylon.markdown.core/1.0.0');
var m$t3w=require('ceylon/regex/1.2.3/ceylon.regex-1.2.3');
m$t3v.$addmod$(m$t3w,'ceylon.regex/1.2.3');
var m$t40=require('ceylon/collection/1.2.3/ceylon.collection-1.2.3');
m$t3v.$addmod$(m$t40,'ceylon.collection/1.2.3');
ex$.$mod$ans$=function(){return[m$t3v.doc$($CCMM$,'','$mod-anns'),m$t3v.by(m$t3v.$arr$sa$(["Rohit Mohan"],{t:m$t3v.$_String})),m$t3v.license("https://www.apache.org/licenses/LICENSE-2.0.html"),m$t3v.suppressWarnings(m$t3v.$arr$sa$(["ceylonNamespace"],{t:m$t3v.$_String}))];};
ex$.$mod$imps=function(){return{
'ceylon.regex/1.2.3':[],
'ceylon.collection/1.2.3':[]
};};
var $t42;function $valinit$$t42(){if($t42===m$t3v.INIT$)m$t3v.throwexc(m$t3v.InitializationError("Cyclic initialization trying to read the value of \'escapable\' before it was set"),'6:0-6:64','regex.ceylon');
if($t42===undefined){$t42=m$t3v.INIT$;$t42="[!\"#$%&\'()*+,./:;<=>?@\\[\\\\\\]^_`{|}~-]"};return $t42;};
function escapable(){return $valinit$$t42();}
var $prop$getEscapable={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$t3v.$_String},d:['ceylon.markdown.core','escapable']};}};
ex$.$prop$getEscapable=$prop$getEscapable;
$prop$getEscapable.get=escapable;
var $t43;function $valinit$$t43(){if($t43===m$t3v.INIT$)m$t3v.throwexc(m$t3v.InitializationError("Cyclic initialization trying to read the value of \'whitespace\' before it was set"),'8:0-8:44','regex.ceylon');
if($t43===undefined){$t43=m$t3v.INIT$;$t43=m$t3w.regex("[ \t\r\n]+",true)};return $t43;};
function whitespace(){return $valinit$$t43();}
var $prop$getWhitespace={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$t3w.Regex},d:['ceylon.markdown.core','whitespace']};}};
ex$.$prop$getWhitespace=$prop$getWhitespace;
$prop$getWhitespace.get=whitespace;
var $t44;function $valinit$$t44(){if($t44===m$t3v.INIT$)m$t3v.throwexc(m$t3v.InitializationError("Cyclic initialization trying to read the value of \'escapedChar\' before it was set"),'10:0-10:39','regex.ceylon');
if($t44===undefined){$t44=m$t3v.INIT$;$t44="\\\\".plus(escapable())};return $t44;};
function escapedChar(){return $valinit$$t44();}
var $prop$getEscapedChar={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$t3v.$_String},d:['ceylon.markdown.core','escapedChar']};}};
ex$.$prop$getEscapedChar=$prop$getEscapedChar;
$prop$getEscapedChar.get=escapedChar;
var $t45;function $valinit$$t45(){if($t45===m$t3v.INIT$)m$t3v.throwexc(m$t3v.InitializationError("Cyclic initialization trying to read the value of \'regChar\' before it was set"),'12:0-12:39','regex.ceylon');
if($t45===undefined){$t45=m$t3v.INIT$;$t45="[^\\\\()\\x00-\\x20]"};return $t45;};
function regChar(){return $valinit$$t45();}
var $prop$getRegChar={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$t3v.$_String},d:['ceylon.markdown.core','regChar']};}};
ex$.$prop$getRegChar=$prop$getRegChar;
$prop$getRegChar.get=regChar;
var $t46;function $valinit$$t46(){if($t46===m$t3v.INIT$)m$t3v.throwexc(m$t3v.InitializationError("Cyclic initialization trying to read the value of \'inParensNoSP\' before it was set"),'14:0-14:73','regex.ceylon');
if($t46===undefined){$t46=m$t3v.INIT$;$t46="\\((".plus(regChar()).plus("|").plus(escapedChar()).plus("|\\\\)*\\)")};return $t46;};
function inParensNoSP(){return $valinit$$t46();}
var $prop$getInParensNoSP={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$t3v.$_String},d:['ceylon.markdown.core','inParensNoSP']};}};
ex$.$prop$getInParensNoSP=$prop$getInParensNoSP;
$prop$getInParensNoSP.get=inParensNoSP;
var $t47;function $valinit$$t47(){if($t47===m$t3v.INIT$)m$t3v.throwexc(m$t3v.InitializationError("Cyclic initialization trying to read the value of \'spnl\' before it was set"),'16:0-16:34','regex.ceylon');
if($t47===undefined){$t47=m$t3v.INIT$;$t47=m$t3w.regex("^ *(?:\n *)?")};return $t47;};
function spnl(){return $valinit$$t47();}
var $prop$getSpnl={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$t3w.Regex},d:['ceylon.markdown.core','spnl']};}};
ex$.$prop$getSpnl=$prop$getSpnl;
$prop$getSpnl.get=spnl;
var $t48;function $valinit$$t48(){if($t48===m$t3v.INIT$)m$t3v.throwexc(m$t3v.InitializationError("Cyclic initialization trying to read the value of \'ticksHere\' before it was set"),'18:0-18:30','regex.ceylon');
if($t48===undefined){$t48=m$t3v.INIT$;$t48=m$t3w.regex("^`+")};return $t48;};
function ticksHere(){return $valinit$$t48();}
var $prop$getTicksHere={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$t3w.Regex},d:['ceylon.markdown.core','ticksHere']};}};
ex$.$prop$getTicksHere=$prop$getTicksHere;
$prop$getTicksHere.get=ticksHere;
var $t49;function $valinit$$t49(){if($t49===m$t3v.INIT$)m$t3v.throwexc(m$t3v.InitializationError("Cyclic initialization trying to read the value of \'reTicks\' before it was set"),'20:0-20:27','regex.ceylon');
if($t49===undefined){$t49=m$t3v.INIT$;$t49=m$t3w.regex("`+")};return $t49;};
function reTicks(){return $valinit$$t49();}
var $prop$getReTicks={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$t3w.Regex},d:['ceylon.markdown.core','reTicks']};}};
ex$.$prop$getReTicks=$prop$getReTicks;
$prop$getReTicks.get=reTicks;
var $t4a;function $valinit$$t4a(){if($t4a===m$t3v.INIT$)m$t3v.throwexc(m$t3v.InitializationError("Cyclic initialization trying to read the value of \'linkLabel\' before it was set"),'22:0-22:78','regex.ceylon');
if($t4a===undefined){$t4a=m$t3v.INIT$;$t4a="^\\[(?:[^\\\\\\[\\]]|".plus(escapedChar()).plus("|\\\\){1,1000}\\]")};return $t4a;};
function linkLabel(){return $valinit$$t4a();}
var $prop$getLinkLabel={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$t3v.$_String},d:['ceylon.markdown.core','linkLabel']};}};
ex$.$prop$getLinkLabel=$prop$getLinkLabel;
$prop$getLinkLabel.get=linkLabel;
var $t4b;function $valinit$$t4b(){if($t4b===m$t3v.INIT$)m$t3v.throwexc(m$t3v.InitializationError("Cyclic initialization trying to read the value of \'linkLabelPattern\' before it was set"),'24:0-24:41','regex.ceylon');
if($t4b===undefined){$t4b=m$t3v.INIT$;$t4b=m$t3w.regex(linkLabel())};return $t4b;};
function linkLabelPattern(){return $valinit$$t4b();}
var $prop$getLinkLabelPattern={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$t3w.Regex},d:['ceylon.markdown.core','linkLabelPattern']};}};
ex$.$prop$getLinkLabelPattern=$prop$getLinkLabelPattern;
$prop$getLinkLabelPattern.get=linkLabelPattern;
var $t4c;function $valinit$$t4c(){if($t4c===m$t3v.INIT$)m$t3v.throwexc(m$t3v.InitializationError("Cyclic initialization trying to read the value of \'linkReferencePattern\' before it was set"),'26:0-26:51','regex.ceylon');
if($t4c===undefined){$t4c=m$t3v.INIT$;$t4c=m$t3w.regex(linkLabel().plus(":"))};return $t4c;};
function linkReferencePattern(){return $valinit$$t4c();}
var $prop$getLinkReferencePattern={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$t3w.Regex},d:['ceylon.markdown.core','linkReferencePattern']};}};
ex$.$prop$getLinkReferencePattern=$prop$getLinkReferencePattern;
$prop$getLinkReferencePattern.get=linkReferencePattern;
var $t4d;function $valinit$$t4d(){if($t4d===m$t3v.INIT$)m$t3v.throwexc(m$t3v.InitializationError("Cyclic initialization trying to read the value of \'linkTitlePattern\' before it was set"),'28:0-32:45','regex.ceylon');
if($t4d===undefined){$t4d=m$t3v.INIT$;$t4d=m$t3w.regex("^(?:\"(".plus(escapedChar()).plus("|[^\"\\x00])*\"").plus("|").plus("\'(").plus(escapedChar()).plus("|[^\'\\x00])*\'").plus("|").plus("\\((").plus(escapedChar()).plus("|[^)\\x00])*\\))"))};return $t4d;};
function linkTitlePattern(){return $valinit$$t4d();}
var $prop$getLinkTitlePattern={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$t3w.Regex},d:['ceylon.markdown.core','linkTitlePattern']};}};
ex$.$prop$getLinkTitlePattern=$prop$getLinkTitlePattern;
$prop$getLinkTitlePattern.get=linkTitlePattern;
var $t4e;function $valinit$$t4e(){if($t4e===m$t3v.INIT$)m$t3v.throwexc(m$t3v.InitializationError("Cyclic initialization trying to read the value of \'linkDestinationBraces\' before it was set"),'34:0-35:76','regex.ceylon');
if($t4e===undefined){$t4e=m$t3v.INIT$;$t4e=m$t3w.regex("^(?:[<](?:[^ <>\\t\\n\\\\\\x00]".plus("|").plus(escapedChar()).plus("|").plus("\\\\)*[>])"))};return $t4e;};
function linkDestinationBraces(){return $valinit$$t4e();}
var $prop$getLinkDestinationBraces={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$t3w.Regex},d:['ceylon.markdown.core','linkDestinationBraces']};}};
ex$.$prop$getLinkDestinationBraces=$prop$getLinkDestinationBraces;
$prop$getLinkDestinationBraces.get=linkDestinationBraces;
var $t4f;function $valinit$$t4f(){if($t4f===m$t3v.INIT$)m$t3v.throwexc(m$t3v.InitializationError("Cyclic initialization trying to read the value of \'linkDestination\' before it was set"),'37:0-37:101','regex.ceylon');
if($t4f===undefined){$t4f=m$t3v.INIT$;$t4f=m$t3w.regex("^(?:".plus(regChar()).plus("+|").plus(escapedChar()).plus("|\\\\|").plus(inParensNoSP()).plus(")*"))};return $t4f;};
function linkDestination(){return $valinit$$t4f();}
var $prop$getLinkDestination={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$t3w.Regex},d:['ceylon.markdown.core','linkDestination']};}};
ex$.$prop$getLinkDestination=$prop$getLinkDestination;
$prop$getLinkDestination.get=linkDestination;
var $t4g;function $valinit$$t4g(){if($t4g===m$t3v.INIT$)m$t3v.throwexc(m$t3v.InitializationError("Cyclic initialization trying to read the value of \'tagName\' before it was set"),'39:0-39:40','regex.ceylon');
if($t4g===undefined){$t4g=m$t3v.INIT$;$t4g="[A-Za-z][A-Za-z0-9-]*"};return $t4g;};
function tagName(){return $valinit$$t4g();}
var $prop$getTagName={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$t3v.$_String},d:['ceylon.markdown.core','tagName']};}};
ex$.$prop$getTagName=$prop$getTagName;
$prop$getTagName.get=tagName;
var $t4h;function $valinit$$t4h(){if($t4h===m$t3v.INIT$)m$t3v.throwexc(m$t3v.InitializationError("Cyclic initialization trying to read the value of \'attributeName\' before it was set"),'40:0-40:51','regex.ceylon');
if($t4h===undefined){$t4h=m$t3v.INIT$;$t4h="[a-zA-Z_:][a-zA-Z0-9:._-]*"};return $t4h;};
function attributeName(){return $valinit$$t4h();}
var $prop$getAttributeName={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$t3v.$_String},d:['ceylon.markdown.core','attributeName']};}};
ex$.$prop$getAttributeName=$prop$getAttributeName;
$prop$getAttributeName.get=attributeName;
var $t4i;function $valinit$$t4i(){if($t4i===m$t3v.INIT$)m$t3v.throwexc(m$t3v.InitializationError("Cyclic initialization trying to read the value of \'unQuotedValue\' before it was set"),'42:0-42:47','regex.ceylon');
if($t4i===undefined){$t4i=m$t3v.INIT$;$t4i="[^\"\'=<>`\\x00-\\x20]+"};return $t4i;};
function unQuotedValue(){return $valinit$$t4i();}
var $prop$getUnQuotedValue={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$t3v.$_String},d:['ceylon.markdown.core','unQuotedValue']};}};
ex$.$prop$getUnQuotedValue=$prop$getUnQuotedValue;
$prop$getUnQuotedValue.get=unQuotedValue;
var $t4j;function $valinit$$t4j(){if($t4j===m$t3v.INIT$)m$t3v.throwexc(m$t3v.InitializationError("Cyclic initialization trying to read the value of \'singleQuotedValue\' before it was set"),'43:0-43:36','regex.ceylon');
if($t4j===undefined){$t4j=m$t3v.INIT$;$t4j="\'[^\']*\'"};return $t4j;};
function singleQuotedValue(){return $valinit$$t4j();}
var $prop$getSingleQuotedValue={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$t3v.$_String},d:['ceylon.markdown.core','singleQuotedValue']};}};
ex$.$prop$getSingleQuotedValue=$prop$getSingleQuotedValue;
$prop$getSingleQuotedValue.get=singleQuotedValue;
var $t4k;function $valinit$$t4k(){if($t4k===m$t3v.INIT$)m$t3v.throwexc(m$t3v.InitializationError("Cyclic initialization trying to read the value of \'doubleQuotedValue\' before it was set"),'44:0-44:39','regex.ceylon');
if($t4k===undefined){$t4k=m$t3v.INIT$;$t4k="\"[^\"]*\""};return $t4k;};
function doubleQuotedValue(){return $valinit$$t4k();}
var $prop$getDoubleQuotedValue={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$t3v.$_String},d:['ceylon.markdown.core','doubleQuotedValue']};}};
ex$.$prop$getDoubleQuotedValue=$prop$getDoubleQuotedValue;
$prop$getDoubleQuotedValue.get=doubleQuotedValue;
var $t4l;function $valinit$$t4l(){if($t4l===m$t3v.INIT$)m$t3v.throwexc(m$t3v.InitializationError("Cyclic initialization trying to read the value of \'attributeValue\' before it was set"),'45:0-46:33','regex.ceylon');
if($t4l===undefined){$t4l=m$t3v.INIT$;$t4l="(?:".plus(unQuotedValue()).plus("|").plus(singleQuotedValue()).plus("|").plus(doubleQuotedValue()).plus(")")};return $t4l;};
function attributeValue(){return $valinit$$t4l();}
var $prop$getAttributeValue={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$t3v.$_String},d:['ceylon.markdown.core','attributeValue']};}};
ex$.$prop$getAttributeValue=$prop$getAttributeValue;
$prop$getAttributeValue.get=attributeValue;
var $t4m;function $valinit$$t4m(){if($t4m===m$t3v.INIT$)m$t3v.throwexc(m$t3v.InitializationError("Cyclic initialization trying to read the value of \'attributeValueSpec\' before it was set"),'47:0-48:7','regex.ceylon');
if($t4m===undefined){$t4m=m$t3v.INIT$;$t4m="(?:".plus("\\s*=").plus("\\s*").plus(attributeValue()).plus(")")};return $t4m;};
function attributeValueSpec(){return $valinit$$t4m();}
var $prop$getAttributeValueSpec={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$t3v.$_String},d:['ceylon.markdown.core','attributeValueSpec']};}};
ex$.$prop$getAttributeValueSpec=$prop$getAttributeValueSpec;
$prop$getAttributeValueSpec.get=attributeValueSpec;
var $t4n;function $valinit$$t4n(){if($t4n===m$t3v.INIT$)m$t3v.throwexc(m$t3v.InitializationError("Cyclic initialization trying to read the value of \'attribute\' before it was set"),'49:0-50:8','regex.ceylon');
if($t4n===undefined){$t4n=m$t3v.INIT$;$t4n="(?:".plus("\\s+").plus(attributeName()).plus(attributeValueSpec()).plus("?)")};return $t4n;};
function attribute(){return $valinit$$t4n();}
var $prop$getAttribute={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$t3v.$_String},d:['ceylon.markdown.core','attribute']};}};
ex$.$prop$getAttribute=$prop$getAttribute;
$prop$getAttribute.get=attribute;
var $t4o;function $valinit$$t4o(){if($t4o===m$t3v.INIT$)m$t3v.throwexc(m$t3v.InitializationError("Cyclic initialization trying to read the value of \'openTag\' before it was set"),'52:0-52:60','regex.ceylon');
if($t4o===undefined){$t4o=m$t3v.INIT$;$t4o="<".plus(tagName()).plus(attribute()).plus("*").plus("\\s*/?>")};return $t4o;};
function openTag(){return $valinit$$t4o();}
ex$.openTag=openTag;
var $prop$getOpenTag={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$t3v.$_String},d:['ceylon.markdown.core','openTag']};}};
ex$.$prop$getOpenTag=$prop$getOpenTag;
$prop$getOpenTag.get=openTag;
openTag.$crtmm$=$prop$getOpenTag.$crtmm$;
var $t4p;function $valinit$$t4p(){if($t4p===m$t3v.INIT$)m$t3v.throwexc(m$t3v.InitializationError("Cyclic initialization trying to read the value of \'closeTag\' before it was set"),'53:0-53:44','regex.ceylon');
if($t4p===undefined){$t4p=m$t3v.INIT$;$t4p="</".plus(tagName()).plus("\\s*[>]")};return $t4p;};
function closeTag(){return $valinit$$t4p();}
ex$.closeTag=closeTag;
var $prop$getCloseTag={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$t3v.$_String},d:['ceylon.markdown.core','closeTag']};}};
ex$.$prop$getCloseTag=$prop$getCloseTag;
$prop$getCloseTag.get=closeTag;
closeTag.$crtmm$=$prop$getCloseTag.$crtmm$;
var $t4q;function $valinit$$t4q(){if($t4q===m$t3v.INIT$)m$t3v.throwexc(m$t3v.InitializationError("Cyclic initialization trying to read the value of \'atxHeadingPattern\' before it was set"),'55:0-55:50','regex.ceylon');
if($t4q===undefined){$t4q=m$t3v.INIT$;$t4q=m$t3w.regex("^#{1,6}(?: +|$)")};return $t4q;};
function atxHeadingPattern(){return $valinit$$t4q();}
var $prop$getAtxHeadingPattern={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$t3w.Regex},d:['ceylon.markdown.core','atxHeadingPattern']};}};
ex$.$prop$getAtxHeadingPattern=$prop$getAtxHeadingPattern;
$prop$getAtxHeadingPattern.get=atxHeadingPattern;
var $t4r;function $valinit$$t4r(){if($t4r===m$t3v.INIT$)m$t3v.throwexc(m$t3v.InitializationError("Cyclic initialization trying to read the value of \'atxTrailingPattern\' before it was set"),'57:0-57:48','regex.ceylon');
if($t4r===undefined){$t4r=m$t3v.INIT$;$t4r=m$t3w.regex("(^| ) *#+ *$")};return $t4r;};
function atxTrailingPattern(){return $valinit$$t4r();}
var $prop$getAtxTrailingPattern={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$t3w.Regex},d:['ceylon.markdown.core','atxTrailingPattern']};}};
ex$.$prop$getAtxTrailingPattern=$prop$getAtxTrailingPattern;
$prop$getAtxTrailingPattern.get=atxTrailingPattern;
var $t4s;function $valinit$$t4s(){if($t4s===m$t3v.INIT$)m$t3v.throwexc(m$t3v.InitializationError("Cyclic initialization trying to read the value of \'orderedListPattern\' before it was set"),'59:0-59:53','regex.ceylon');
if($t4s===undefined){$t4s=m$t3v.INIT$;$t4s=m$t3w.regex("^(\\d{1,9})([.)])")};return $t4s;};
function orderedListPattern(){return $valinit$$t4s();}
var $prop$getOrderedListPattern={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$t3w.Regex},d:['ceylon.markdown.core','orderedListPattern']};}};
ex$.$prop$getOrderedListPattern=$prop$getOrderedListPattern;
$prop$getOrderedListPattern.get=orderedListPattern;
var $t4t;function $valinit$$t4t(){if($t4t===m$t3v.INIT$)m$t3v.throwexc(m$t3v.InitializationError("Cyclic initialization trying to read the value of \'bulletListPattern\' before it was set"),'61:0-61:50','regex.ceylon');
if($t4t===undefined){$t4t=m$t3v.INIT$;$t4t=m$t3w.regex("^[*+-](|\\s.*)$")};return $t4t;};
function bulletListPattern(){return $valinit$$t4t();}
var $prop$getBulletListPattern={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$t3w.Regex},d:['ceylon.markdown.core','bulletListPattern']};}};
ex$.$prop$getBulletListPattern=$prop$getBulletListPattern;
$prop$getBulletListPattern.get=bulletListPattern;
var $t4u;function $valinit$$t4u(){if($t4u===m$t3v.INIT$)m$t3v.throwexc(m$t3v.InitializationError("Cyclic initialization trying to read the value of \'setextHeadingPattern\' before it was set"),'63:0-63:51','regex.ceylon');
if($t4u===undefined){$t4u=m$t3v.INIT$;$t4u=m$t3w.regex("^(?:=+|-+) *$")};return $t4u;};
function setextHeadingPattern(){return $valinit$$t4u();}
var $prop$getSetextHeadingPattern={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$t3w.Regex},d:['ceylon.markdown.core','setextHeadingPattern']};}};
ex$.$prop$getSetextHeadingPattern=$prop$getSetextHeadingPattern;
$prop$getSetextHeadingPattern.get=setextHeadingPattern;
var $t4v;function $valinit$$t4v(){if($t4v===m$t3v.INIT$)m$t3v.throwexc(m$t3v.InitializationError("Cyclic initialization trying to read the value of \'fencedCodeblockPattern\' before it was set"),'65:0-65:67','regex.ceylon');
if($t4v===undefined){$t4v=m$t3v.INIT$;$t4v=m$t3w.regex("^`{3,}(?!.*`)|^~{3,}(?!.*~)")};return $t4v;};
function fencedCodeblockPattern(){return $valinit$$t4v();}
var $prop$getFencedCodeblockPattern={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$t3w.Regex},d:['ceylon.markdown.core','fencedCodeblockPattern']};}};
ex$.$prop$getFencedCodeblockPattern=$prop$getFencedCodeblockPattern;
$prop$getFencedCodeblockPattern.get=fencedCodeblockPattern;
var $t4w;function $valinit$$t4w(){if($t4w===m$t3v.INIT$)m$t3v.throwexc(m$t3v.InitializationError("Cyclic initialization trying to read the value of \'closingCodeblockPattern\' before it was set"),'67:0-67:65','regex.ceylon');
if($t4w===undefined){$t4w=m$t3v.INIT$;$t4w=m$t3w.regex("^(?:`{3,}|~{3,})(?= *$)")};return $t4w;};
function closingCodeblockPattern(){return $valinit$$t4w();}
var $prop$getClosingCodeblockPattern={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$t3w.Regex},d:['ceylon.markdown.core','closingCodeblockPattern']};}};
ex$.$prop$getClosingCodeblockPattern=$prop$getClosingCodeblockPattern;
$prop$getClosingCodeblockPattern.get=closingCodeblockPattern;
var $t4x;function $valinit$$t4x(){if($t4x===m$t3v.INIT$)m$t3v.throwexc(m$t3v.InitializationError("Cyclic initialization trying to read the value of \'thematicBreakPattern\' before it was set"),'69:0-69:83','regex.ceylon');
if($t4x===undefined){$t4x=m$t3v.INIT$;$t4x=m$t3w.regex("^(?:(?:\\* *){3,}|(?:_ *){3,}|(?:- *){3,}) *$")};return $t4x;};
function thematicBreakPattern(){return $valinit$$t4x();}
var $prop$getThematicBreakPattern={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$t3w.Regex},d:['ceylon.markdown.core','thematicBreakPattern']};}};
ex$.$prop$getThematicBreakPattern=$prop$getThematicBreakPattern;
$prop$getThematicBreakPattern.get=thematicBreakPattern;
var $t4y;function $valinit$$t4y(){if($t4y===m$t3v.INIT$)m$t3v.throwexc(m$t3v.InitializationError("Cyclic initialization trying to read the value of \'htmlBlockOpen\' before it was set"),'71:0-98:1','regex.ceylon');
if($t4y===undefined){$t4y=m$t3v.INIT$;$t4y=m$t3v.tpl$([($t4z="^<(?:script|pre|style)(?:\\s|>|$)",$t50=true,m$t3w.regex($t4z,undefined,$t50,undefined)),m$t3w.regex("^<!--"),m$t3w.regex("^<[?]"),m$t3w.regex("^<![A-Z]"),m$t3w.regex("^<!\\[CDATA\\["),($t51="^<[/]?(?:".plus("address|article|aside|").plus("base|basefont|blockquote|").plus("body|caption|center|").plus("col|colgroup|dd|").plus("details|dialog|dir").plus("|div|dl|dt|fieldset|").plus("figcaption|figure|footer|").plus("form|frame|frameset|").plus("h1|head|header|hr|").plus("html|iframe|legend|").plus("li|link|main|menu|").plus("menuitem|meta|nav|").plus("noframes|ol|optgroup|").plus("option|p|param|section|").plus("source|title|summary|").plus("table|tbody|td|tfoot|").plus("th|thead|title|tr|track|ul)").plus("(?:\\s|[/]?[>]|$)"),$t52=true,m$t3w.regex($t51,undefined,$t52,undefined)),($t53="^(?:".plus(openTag()).plus("|").plus(closeTag()).plus(")\\s*$"),$t54=true,m$t3w.regex($t53,undefined,$t54,undefined))])};return $t4y;};
function htmlBlockOpen(){return $valinit$$t4y();}
var $prop$getHtmlBlockOpen={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$t3v.Sequential,a:{Element$Sequential:{t:m$t3w.Regex}}},d:['ceylon.markdown.core','htmlBlockOpen']};}};
ex$.$prop$getHtmlBlockOpen=$prop$getHtmlBlockOpen;
$prop$getHtmlBlockOpen.get=htmlBlockOpen;
var $t4z,$t50,$t51,$t52,$t53,$t54;
var $t55;function $valinit$$t55(){if($t55===m$t3v.INIT$)m$t3v.throwexc(m$t3v.InitializationError("Cyclic initialization trying to read the value of \'htmlBlockClose\' before it was set"),'100:0-106:1','regex.ceylon');
if($t55===undefined){$t55=m$t3v.INIT$;$t55=m$t3v.tpl$([($t56="<\\/(?:script|pre|style)>",$t57=true,m$t3w.regex($t56,undefined,$t57,undefined)),m$t3w.regex("-->"),m$t3w.regex("\\?>"),m$t3w.regex(">"),m$t3w.regex("\\]\\]>")])};return $t55;};
function htmlBlockClose(){return $valinit$$t55();}
var $prop$getHtmlBlockClose={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$t3v.Sequential,a:{Element$Sequential:{t:m$t3w.Regex}}},d:['ceylon.markdown.core','htmlBlockClose']};}};
ex$.$prop$getHtmlBlockClose=$prop$getHtmlBlockClose;
$prop$getHtmlBlockClose.get=htmlBlockClose;
var $t56,$t57;
var $t58;function $valinit$$t58(){if($t58===m$t3v.INIT$)m$t3v.throwexc(m$t3v.InitializationError("Cyclic initialization trying to read the value of \'asciiPunctuation\' before it was set"),'108:0-108:92','regex.ceylon');
if($t58===undefined){$t58=m$t3v.INIT$;$t58="\'!\"#\\$%&\\(\\)\\*\\+,\\-\\./:;<=>\\?@\\[\\\\\\]\\^_`\\{\\|\\}~"};return $t58;};
function asciiPunctuation(){return $valinit$$t58();}
var $prop$getAsciiPunctuation={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$t3v.$_String},d:['ceylon.markdown.core','asciiPunctuation']};}};
ex$.$prop$getAsciiPunctuation=$prop$getAsciiPunctuation;
$prop$getAsciiPunctuation.get=asciiPunctuation;
var $t59;function $valinit$$t59(){if($t59===m$t3v.INIT$)m$t3v.throwexc(m$t3v.InitializationError("Cyclic initialization trying to read the value of \'punctuation\' before it was set"),'110:0-110:105','regex.ceylon');
if($t59===undefined){$t59=m$t3v.INIT$;$t59=m$t3w.regex("^[".plus(asciiPunctuation()).plus("\\p{Pc}\\p{Pd}\\p{Pe}\\p{Pf}\\p{Pi}\\p{Po}\\p{Ps}]"))};return $t59;};
function punctuation(){return $valinit$$t59();}
var $prop$getPunctuation={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$t3w.Regex},d:['ceylon.markdown.core','punctuation']};}};
ex$.$prop$getPunctuation=$prop$getPunctuation;
$prop$getPunctuation.get=punctuation;
var $t5a;function $valinit$$t5a(){if($t5a===m$t3v.INIT$)m$t3v.throwexc(m$t3v.InitializationError("Cyclic initialization trying to read the value of \'unicodeWhitespaceChar\' before it was set"),'112:0-112:57','regex.ceylon');
if($t5a===undefined){$t5a=m$t3v.INIT$;$t5a=m$t3w.regex("^[\\p{Zs}\t\r\n\f]")};return $t5a;};
function unicodeWhitespaceChar(){return $valinit$$t5a();}
var $prop$getUnicodeWhitespaceChar={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$t3w.Regex},d:['ceylon.markdown.core','unicodeWhitespaceChar']};}};
ex$.$prop$getUnicodeWhitespaceChar=$prop$getUnicodeWhitespaceChar;
$prop$getUnicodeWhitespaceChar.get=unicodeWhitespaceChar;
var $t5b;function $valinit$$t5b(){if($t5b===m$t3v.INIT$)m$t3v.throwexc(m$t3v.InitializationError("Cyclic initialization trying to read the value of \'emailAutoLink\' before it was set"),'114:0-114:170','regex.ceylon');
if($t5b===undefined){$t5b=m$t3v.INIT$;$t5b=m$t3w.regex("^<([a-zA-Z0-9.!#$%&\'*+\\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*)>")};return $t5b;};
function emailAutoLink(){return $valinit$$t5b();}
var $prop$getEmailAutoLink={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$t3w.Regex},d:['ceylon.markdown.core','emailAutoLink']};}};
ex$.$prop$getEmailAutoLink=$prop$getEmailAutoLink;
$prop$getEmailAutoLink.get=emailAutoLink;
var $t5c;function $valinit$$t5c(){if($t5c===m$t3v.INIT$)m$t3v.throwexc(m$t3v.InitializationError("Cyclic initialization trying to read the value of \'autoLink\' before it was set"),'116:0-116:88','regex.ceylon');
if($t5c===undefined){$t5c=m$t3v.INIT$;$t5c=m$t3w.regex("^<[A-Za-z][A-Za-z0-9.+-]{1,31}:[^<>\\x00-\\x20]*>",false,true)};return $t5c;};
function autoLink(){return $valinit$$t5c();}
var $prop$getAutoLink={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$t3w.Regex},d:['ceylon.markdown.core','autoLink']};}};
ex$.$prop$getAutoLink=$prop$getAutoLink;
$prop$getAutoLink.get=autoLink;
var $t5d;function $valinit$$t5d(){if($t5d===m$t3v.INIT$)m$t3v.throwexc(m$t3v.InitializationError("Cyclic initialization trying to read the value of \'htmlComment\' before it was set"),'118:0-118:60','regex.ceylon');
if($t5d===undefined){$t5d=m$t3v.INIT$;$t5d="<!---->|<!--(?:-?[^>-])(?:-?[^-])*-->"};return $t5d;};
function htmlComment(){return $valinit$$t5d();}
var $prop$getHtmlComment={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$t3v.$_String},d:['ceylon.markdown.core','htmlComment']};}};
ex$.$prop$getHtmlComment=$prop$getHtmlComment;
$prop$getHtmlComment.get=htmlComment;
var $t5e;function $valinit$$t5e(){if($t5e===m$t3v.INIT$)m$t3v.throwexc(m$t3v.InitializationError("Cyclic initialization trying to read the value of \'processingInstruction\' before it was set"),'119:0-119:48','regex.ceylon');
if($t5e===undefined){$t5e=m$t3v.INIT$;$t5e="[<][?].*?[?][>]"};return $t5e;};
function processingInstruction(){return $valinit$$t5e();}
var $prop$getProcessingInstruction={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$t3v.$_String},d:['ceylon.markdown.core','processingInstruction']};}};
ex$.$prop$getProcessingInstruction=$prop$getProcessingInstruction;
$prop$getProcessingInstruction.get=processingInstruction;
var $t5f;function $valinit$$t5f(){if($t5f===m$t3v.INIT$)m$t3v.throwexc(m$t3v.InitializationError("Cyclic initialization trying to read the value of \'declaration\' before it was set"),'120:0-120:46','regex.ceylon');
if($t5f===undefined){$t5f=m$t3v.INIT$;$t5f="<![A-Z]+".plus("\\s+[^>]*>")};return $t5f;};
function declaration(){return $valinit$$t5f();}
var $prop$getDeclaration={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$t3v.$_String},d:['ceylon.markdown.core','declaration']};}};
ex$.$prop$getDeclaration=$prop$getDeclaration;
$prop$getDeclaration.get=declaration;
var $t5g;function $valinit$$t5g(){if($t5g===m$t3v.INIT$)m$t3v.throwexc(m$t3v.InitializationError("Cyclic initialization trying to read the value of \'cData\' before it was set"),'121:0-121:47','regex.ceylon');
if($t5g===undefined){$t5g=m$t3v.INIT$;$t5g="<!\\[CDATA\\[[\\s\\S]*?\\]\\]>"};return $t5g;};
function cData(){return $valinit$$t5g();}
var $prop$getCData={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$t3v.$_String},d:['ceylon.markdown.core','cData']};}};
ex$.$prop$getCData=$prop$getCData;
$prop$getCData.get=cData;
var $t5h;function $valinit$$t5h(){if($t5h===m$t3v.INIT$)m$t3v.throwexc(m$t3v.InitializationError("Cyclic initialization trying to read the value of \'htmlTag\' before it was set"),'122:0-123:63','regex.ceylon');
if($t5h===undefined){$t5h=m$t3v.INIT$;$t5h="(?:".plus(openTag()).plus("|").plus(closeTag()).plus("|").plus(htmlComment()).plus("|").plus(processingInstruction()).plus("|").plus(declaration()).plus("|").plus(cData()).plus(")")};return $t5h;};
function htmlTag(){return $valinit$$t5h();}
var $prop$getHtmlTag={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$t3v.$_String},d:['ceylon.markdown.core','htmlTag']};}};
ex$.$prop$getHtmlTag=$prop$getHtmlTag;
$prop$getHtmlTag.get=htmlTag;
var $t5i;function $valinit$$t5i(){if($t5i===m$t3v.INIT$)m$t3v.throwexc(m$t3v.InitializationError("Cyclic initialization trying to read the value of \'reHtmlTag\' before it was set"),'125:0-125:51','regex.ceylon');
if($t5i===undefined){$t5i=m$t3v.INIT$;$t5i=m$t3w.regex("^".plus(htmlTag()),false,true)};return $t5i;};
function reHtmlTag(){return $valinit$$t5i();}
var $prop$getReHtmlTag={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$t3w.Regex},d:['ceylon.markdown.core','reHtmlTag']};}};
ex$.$prop$getReHtmlTag=$prop$getReHtmlTag;
$prop$getReHtmlTag.get=reHtmlTag;
var $t5j;function $valinit$$t5j(){if($t5j===m$t3v.INIT$)m$t3v.throwexc(m$t3v.InitializationError("Cyclic initialization trying to read the value of \'reEscapable\' before it was set"),'127:0-127:42','regex.ceylon');
if($t5j===undefined){$t5j=m$t3v.INIT$;$t5j=m$t3w.regex("^".plus(escapable()))};return $t5j;};
function reEscapable(){return $valinit$$t5j();}
var $prop$getReEscapable={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$t3w.Regex},d:['ceylon.markdown.core','reEscapable']};}};
ex$.$prop$getReEscapable=$prop$getReEscapable;
$prop$getReEscapable.get=reEscapable;
var $t5k;function $valinit$$t5k(){if($t5k===m$t3v.INIT$)m$t3v.throwexc(m$t3v.InitializationError("Cyclic initialization trying to read the value of \'entity\' before it was set"),'129:0-129:71','regex.ceylon');
if($t5k===undefined){$t5k=m$t3v.INIT$;$t5k="&(?:#x[a-f0-9]{1,8}|#[0-9]{1,8}|[a-z][a-z0-9]{1,31});"};return $t5k;};
function entity(){return $valinit$$t5k();}
var $prop$getEntity={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$t3v.$_String},d:['ceylon.markdown.core','entity']};}};
ex$.$prop$getEntity=$prop$getEntity;
$prop$getEntity.get=entity;
var $t5l;function $valinit$$t5l(){if($t5l===m$t3v.INIT$)m$t3v.throwexc(m$t3v.InitializationError("Cyclic initialization trying to read the value of \'reEntityHere\' before it was set"),'131:0-131:53','regex.ceylon');
if($t5l===undefined){$t5l=m$t3v.INIT$;$t5l=m$t3w.regex("^".plus(entity()),false,true)};return $t5l;};
function reEntityHere(){return $valinit$$t5l();}
var $prop$getReEntityHere={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$t3w.Regex},d:['ceylon.markdown.core','reEntityHere']};}};
ex$.$prop$getReEntityHere=$prop$getReEntityHere;
$prop$getReEntityHere.get=reEntityHere;
var $t5m;function $valinit$$t5m(){if($t5m===m$t3v.INIT$)m$t3v.throwexc(m$t3v.InitializationError("Cyclic initialization trying to read the value of \'reEntityOrEscapedChar\' before it was set"),'133:0-133:82','regex.ceylon');
if($t5m===undefined){$t5m=m$t3v.INIT$;$t5m=m$t3w.regex("\\\\".plus(escapable()).plus("|").plus(entity()),true,true)};return $t5m;};
function reEntityOrEscapedChar(){return $valinit$$t5m();}
var $prop$getReEntityOrEscapedChar={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$t3w.Regex},d:['ceylon.markdown.core','reEntityOrEscapedChar']};}};
ex$.$prop$getReEntityOrEscapedChar=$prop$getReEntityOrEscapedChar;
$prop$getReEntityOrEscapedChar.get=reEntityOrEscapedChar;

//MethodDef trimSpaces at parseLine.ceylon (1:0-15:0)
function trimSpaces($t5n){
var $t5o=(0);
//'for' statement at parseLine.ceylon (6:1-12:1)//EXITS!
var $t5q;for(var $t5p=$t5n.iterator();($t5q=$t5p.next())!==m$t3v.finished();){
if((m$t3v.$eq$($t5q,m$t3v.Character(32,true))&&($t5o<3))){
($t5r=$t5o,$t5o=$t5r.successor,$t5r);
var $t5r;
}
else{
break;
}
}
return $t5n.spanFrom($t5o);
};trimSpaces.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$t3v.$_String},ps:[{nm:'line',mt:'prm',$t:{t:m$t3v.$_String}}],d:['ceylon.markdown.core','trimSpaces']};};
var $t5s;function $valinit$$t5s(){if($t5s===m$t3v.INIT$)m$t3v.throwexc(m$t3v.InitializationError("Cyclic initialization trying to read the value of \'blankLine\' before it was set"),'17:0-17:34','parseLine.ceylon');
if($t5s===undefined){$t5s=m$t3v.INIT$;$t5s=false};return $t5s;};
function blankLine(){return $valinit$$t5s();}
function set$blankLine($t5t){if($t5s===undefined||$t5s===m$t3v.INIT$)$valinit$$t5s();return $t5s=$t5t;};
var $prop$getBlankLine={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$t3v.$_Boolean},pa:1027,d:['ceylon.markdown.core','blankLine']};}};
ex$.$prop$getBlankLine=$prop$getBlankLine;
$prop$getBlankLine.get=blankLine;
$prop$getBlankLine.set=set$blankLine;
if(set$blankLine.$crtmm$===undefined)set$blankLine.$crtmm$=$prop$getBlankLine.$crtmm$;
//MethodDef parseLine at parseLine.ceylon (19:0-224:0)
function parseLine($t5u,$t5v){
var $t5w=true;
var $t5x;
var $t5y=$t5v.children.last;
var $t5z;
if($t5u.equals("")&&!m$t3v.is$(($t5z=$t5v),{t:List})){
var $t60,$t61;
if(m$t3v.is$(($t60=$t5y),m$t3v.mut$([{t:Paragraph},{t:BlockQuote}]))&&!m$t3v.is$(($t61=$t5z),{t:ListItem})){
$t60.closeBlock();
}
var $t62;
if(m$t3v.is$(($t62=$t5y),{t:HtmlBlock})){
if(($t62.type>=5)){
$t62.closeBlock();
}
else{
($t63=$t62,$t63.text=$t63.text.plus("\n"));
var $t63;
}
}
var $t64;
if(m$t3v.is$(($t64=$t5y),{t:CodeBlock})&&$t64.open){
($t65=$t64,$t65.text=$t65.text.plus("\n"));
var $t65;
}
var $t66;
if(m$t3v.is$(($t66=$t5y),{t:List})&&$t66.open){
if(!blankLine()){
set$blankLine(true);
}
else{
$t66.closeBlock();
set$blankLine(false);
}
}
return;
}
if(function(){var $t67;
if(m$t3v.is$(($t67=$t5y),m$t3v.mut$([{t:FencedCode},{t:HtmlBlock}])))return !$t67.open;else return true}()){
$t5u=trimSpaces($t5u);
}
var $t68;
if(m$t3v.is$(($t68=$t5y),{t:FencedCode})&&closingCodeblockPattern().test($t5u)&&($t68.fenceLevel<=$t5u.count(m$t3v.jsc$2(($t69=m$t3v.Character(96,true),m$t3v.jsc$3($t69,$t69.equals)),[{nm:'that',mt:'prm',$t:{t:m$t3v.$_Object}}],{})))){
$t68.closeBlock();
return;
}
var $t69;
if($t5u.startsWith("<")&&function(){var $t6a;
if(m$t3v.is$(($t6a=$t5y),{t:Paragraph}))return !$t6a.open;else return true}()){
//'for' statement at parseLine.ceylon (67:2-83:2)//EXITS!
var $t6c;for(var $t6b=m$t3v.measure((0),(7),{Element$measure:{t:m$t3v.Integer}}).iterator();($t6c=$t6b.next())!==m$t3v.finished();){
var $t6d,$t6e;
if(m$t3v.is$(($t6d=$t5y),{t:HtmlBlock})&&$t6d.open&&m$t3v.nn$(($t6e=htmlBlockClose().$_get($t6c)))&&$t6e.test($t5u)&&($t6d.type==$t6c)){
($t6f=$t6d,$t6f.text=$t6f.text.plus("\n".plus($t5u)));
var $t6f;
$t6d.closeBlock();
return;
}
else{
var $t6g;
if(m$t3v.nn$(($t6g=htmlBlockOpen().$_get($t6c)))&&$t6g.test($t5u)){
$t5x=HtmlBlock($t5u,$t6c);
break;
}
}
}
if(m$t3v.finished()===$t6c){
$t5x=Paragraph();
$t5x.appendChild(Text($t5u));
}
$t5u="";
}
else{
var $t6h;
if(m$t3v.is$(($t6h=$t5y),{t:HtmlBlock})&&$t6h.open){
$t5x=HtmlBlock($t5u,$t6h.type);
$t5u="";
}
else{
if(!m$t3v.is$($t5y,{t:FencedCode})&&fencedCodeblockPattern().test($t5u)){
$t5x=FencedCode("",$t5u.count(m$t3v.jsc$2(($t6i=m$t3v.Character(96,true),m$t3v.jsc$3($t6i,$t6i.equals)),/*WARNING4 Callable EXPR of type com.redhat.ceylon.compiler.typechecker.tree.Tree$Expression*/[],{Arguments$Callable:m$t3v.mtt$([{t:m$t3v.$_Object}]),Return$Callable:{t:m$t3v.$_Boolean}})));
var $t6i;
$t5u="";
}
else{
var $t6j,$t6k;
if(m$t3v.is$(($t6j=$t5y),{t:Paragraph})&&$t6j.open&&setextHeadingPattern().test($t5u)&&m$t3v.is$(($t6k=$t6j.children.last),{t:Text})){
$t5x=($t6l=($t5u.startsWith("=")?(1):(2)),Heading($t6l));
var $t6l;
$t5x.appendChild(Text($t6k.text));
($t6m=$t5v,$t6m.children=m$t3v.tpl$([],m$t3v.for$(function(){
//Comprehension at parseLine.ceylon (102:21-102:79)
var $t6n=$t5v.children.iterator(),$t6o=m$t3v.finished();
var n$t6o=function(){return $t6o=$t6n.next();}
return function(){
if(n$t6o()!==m$t3v.finished()){
var $t6p=$t6o,$t6q=($t6r=(m$t3v.$eq$($t6p,$t6j)?$t5x:null),m$t3v.nn$($t6r)?$t6r:$t6p);
return $t6q;
}
return m$t3v.finished();
}
},{Element$Iterable:{t:Node},Absent$Iterable:{t:m$t3v.Null}})),$t6m.children);
var $t6m,$t6r;
return;
}
else{
if(thematicBreakPattern().test($t5u)){
$t5x=ThematicBreak();
$t5x.closeBlock();
$t5u="";
}
else{
var $t6s;
if(m$t3v.nn$(($t6s=atxHeadingPattern().find($t5u)))){
var $t6t=($t6u=atxHeadingPattern().$_split($t5u).$_get(1),m$t3v.nn$($t6u)?$t6u:"");
var $t6u;
if(atxTrailingPattern().test($t6t)){
$t6t=($t6v=atxTrailingPattern().$_split($t6t).$_get(0),m$t3v.nn$($t6v)?$t6v:"");
var $t6v;
}
$t5x=Heading($t6s.matched.count(m$t3v.jsc$2(($t6w=m$t3v.Character(35,true),m$t3v.jsc$3($t6w,$t6w.equals)),[{nm:'that',mt:'prm',$t:{t:m$t3v.$_Object}}],{})));
var $t6w;
$t5x.appendChild(Text($t6t));
$t5u="";
}
else{
var $t6x;
if(m$t3v.nn$(($t6x=orderedListPattern().find($t5u)))){
var $t6y=m$t3v.parseInteger(($t6z=$t6x.groups.$_get(0),m$t3v.nn$($t6z)?$t6z:"0"));
var $t6z;
$t5x=($t70=($t71=$t6y,m$t3v.nn$($t71)?$t71:(0)),$t72=($t73=($t74=$t6x.groups.$_get(0),m$t3v.jsc$3($t74,m$t3v.nn$($t74)?$t74.$_get:null))(0),m$t3v.nn$($t73)?$t73:m$t3v.Character(46,true)),OrderedList($t70,$t72));
var $t70,$t71,$t72,$t73,$t74;
$t5u=$t5u.spanFrom($t6x.end);
}
else{
if(!m$t3v.is$($t5y,{t:FencedCode})&&function(){var $t75;
if(m$t3v.is$(($t75=$t5y),{t:Paragraph}))return !$t75.open;else return true}()&&$t5u.startsWith(" ")&&!m$t3v.$eq$($t5u.trimLeading(m$t3v.jsc$2(($t76=m$t3v.Character(32,true),m$t3v.jsc$3($t76,$t76.equals)),[{nm:'that',mt:'prm',$t:{t:m$t3v.$_Object}}],{})).trimTrailing(m$t3v.jsc$2(($t77=m$t3v.Character(32,true),m$t3v.jsc$3($t77,$t77.equals)),[{nm:'that',mt:'prm',$t:{t:m$t3v.$_Object}}],{})),"")){
$t5x=IndentedCode($t5u.spanFrom(1));
$t5u="";
}
else{
if($t5u.startsWith(">")){
var $t78;
if(m$t3v.is$(($t78=$t5v),{t:List})){
$t5u=$t5u.trimLeading(m$t3v.jsc$2(($t79=m$t3v.Character(32,true),m$t3v.jsc$3($t79,$t79.equals)),[{nm:'that',mt:'prm',$t:{t:m$t3v.$_Object}}],{})).trimTrailing(m$t3v.jsc$2(($t7a=m$t3v.Character(32,true),m$t3v.jsc$3($t7a,$t7a.equals)),[{nm:'that',mt:'prm',$t:{t:m$t3v.$_Object}}],{}));
var $t79,$t7a;
if(blankLine()){
($t78.tight=false);
set$blankLine(false);
}
$t5x=ListItem();
$t5x.appendChild(BlockQuote());
}
else{
$t5x=BlockQuote();
}
$t5u=$t5u.spanFrom(1);
}
else{
if(bulletListPattern().test($t5u)){
$t5x=UnorderedList(($t7b=$t5u.$_get(0),m$t3v.nn$($t7b)?$t7b:m$t3v.Character(32,true)));
var $t7b;
$t5u=$t5u.spanFrom(2);
}
else{
var $t7c;
if(m$t3v.is$(($t7c=$t5v),{t:List})){
$t5u=$t5u.trimLeading(m$t3v.jsc$2(($t7d=m$t3v.Character(32,true),m$t3v.jsc$3($t7d,$t7d.equals)),[{nm:'that',mt:'prm',$t:{t:m$t3v.$_Object}}],{})).trimTrailing(m$t3v.jsc$2(($t7e=m$t3v.Character(32,true),m$t3v.jsc$3($t7e,$t7e.equals)),[{nm:'that',mt:'prm',$t:{t:m$t3v.$_Object}}],{}));
var $t7d,$t7e;
$t5x=ListItem();
if(blankLine()){
($t7c.tight=false);
set$blankLine(false);
}
if(!$t5u.equals("")){
var $t7f=Paragraph();
$t7f.appendChild(Text($t5u));
$t5x.appendChild($t7f);
}
$t5u="";
}
else{
var $t7g;
if(m$t3v.is$(($t7g=$t5y),{t:FencedCode})&&$t7g.open){
$t5x=FencedCode($t5u,$t7g.fenceLevel);
$t5u="";
}
else{
$t5x=Paragraph();
$t5x.appendChild(Text($t5u.trimLeading(m$t3v.jsc$2(($t7h=m$t3v.Character(32,true),m$t3v.jsc$3($t7h,$t7h.equals)),[{nm:'that',mt:'prm',$t:{t:m$t3v.$_Object}}],{}))));
var $t7h;
$t5u="";
}
}
}
}
}
var $t76,$t77;
}
}
}
}
}
}
}
var $t7i;
while(m$t3v.is$(($t7i=$t5y),{t:Block})&&$t7i.open){
var $t7j;
if(sameType($t7i,$t5x)&&!m$t3v.is$(($t7j=$t7i),m$t3v.mut$([{t:ListItem},{t:Paragraph},{t:CodeBlock},{t:Heading},{t:HtmlBlock}]))){
parseLine($t5u,$t7j);
$t5w=false;
break;
}
else{
var $t7k,$t7l;
if(m$t3v.is$(($t7k=$t7i),{t:Paragraph})&&m$t3v.is$(($t7l=$t5x),{t:Paragraph})){
var $t7m=$t7k.children.last;
var $t7n=$t7l.children.last;
var $t7o,$t7p;
if(m$t3v.is$(($t7o=$t7m),{t:Text})&&m$t3v.is$(($t7p=$t7n),{t:Text})){
($t7q=$t7o,$t7q.text=$t7q.text.plus("\n".plus($t7p.text)));
var $t7q;
$t5w=false;
}
break;
}
else{
var $t7r,$t7s;
if(m$t3v.is$(($t7r=$t7i),{t:CodeBlock})&&m$t3v.is$(($t7s=$t5x),{t:CodeBlock})){
if(m$t3v.$eq$($t7r.text,"")){
($t7t=$t7r,$t7t.text=$t7t.text.plus($t7s.text));
var $t7t;
}
else{
($t7u=$t7r,$t7u.text=$t7u.text.plus("\n".plus($t7s.text)));
var $t7u;
}
$t5w=false;
break;
}
else{
var $t7v,$t7w;
if(m$t3v.is$(($t7v=$t7i),{t:HtmlBlock})&&m$t3v.is$(($t7w=$t5x),{t:HtmlBlock})){
($t7x=$t7v,$t7x.text=$t7x.text.plus("\n".plus($t7w.text)));
var $t7x;
$t5w=false;
break;
}
}
}
}
$t5y=$t7i.children.last;
}
if($t5w){
$t5v.appendChild($t5x);
var $t7y,$t7z,$t80;
if(m$t3v.is$(($t7y=$t5v),{t:List})&&m$t3v.nn$(($t7z=$t5x.children.last))&&m$t3v.is$(($t80=$t7z),{t:Block})){
parseLine($t5u,$t80);
}
else{
parseLine($t5u,$t5x);
}
}
};parseLine.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$t3v.Anything},ps:[{nm:'line',mt:'prm',$t:{t:m$t3v.$_String}},{nm:'parent',mt:'prm',$t:{t:Block}}],d:['ceylon.markdown.core','parseLine']};};
//MethodDecl sameType at parseLine.ceylon (226:0-227:56)
function sameType($t81,$t82){return ((m$t3v.className($t81).equals(m$t3v.className($t82))&&sameListType($t81,$t82))&&sameOrderedListType($t81,$t82));
};
sameType.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$t3v.$_Boolean},ps:[{nm:'b1',mt:'prm',$t:{t:Block}},{nm:'b2',mt:'prm',$t:{t:Block}}],d:['ceylon.markdown.core','sameType']};};
//MethodDecl sameListType at parseLine.ceylon (230:0-231:92)
function sameListType($t83,$t84){return function(){var $t85,$t86;
if(m$t3v.is$(($t85=$t83),{t:UnorderedList})&&m$t3v.is$(($t86=$t84),{t:UnorderedList}))return m$t3v.$eq$($t85.bulletChar,$t86.bulletChar);else return true}();
};
sameListType.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$t3v.$_Boolean},ps:[{nm:'b1',mt:'prm',$t:{t:Block}},{nm:'b2',mt:'prm',$t:{t:Block}}],d:['ceylon.markdown.core','sameListType']};};
//MethodDecl sameOrderedListType at parseLine.ceylon (233:0-234:86)
function sameOrderedListType($t87,$t88){return function(){var $t89,$t8a;
if(m$t3v.is$(($t89=$t87),{t:OrderedList})&&m$t3v.is$(($t8a=$t88),{t:OrderedList}))return m$t3v.$eq$($t89.delimeter,$t8a.delimeter);else return true}();
};
sameOrderedListType.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$t3v.$_Boolean},ps:[{nm:'b1',mt:'prm',$t:{t:Block}},{nm:'b2',mt:'prm',$t:{t:Block}}],d:['ceylon.markdown.core','sameOrderedListType']};};

//ClassDef OrderedList at OrderedList.ceylon (1:0-5:0)
function OrderedList(startsWith,delimeter,orderedList$){
$init$OrderedList();
if(orderedList$===undefined)orderedList$=new OrderedList.$$;
orderedList$.startsWith_=startsWith;
orderedList$.delimeter_=delimeter;
List(undefined,orderedList$);
//AttributeDecl children at OrderedList.ceylon (2:1-2:44)
orderedList$.$c50l24$t8b_=m$t3v.empty();
return orderedList$;
}
OrderedList.$crtmm$=function(){return{mod:$CCMM$,'super':{t:List},ps:[{nm:'startsWith',mt:'prm',$t:{t:m$t3v.Integer},pa:1},{nm:'delimeter',mt:'prm',$t:{t:m$t3v.Character},pa:1}],pa:1,d:['ceylon.markdown.core','OrderedList']};};
ex$.OrderedList=OrderedList;
function $init$OrderedList(){
if(OrderedList.$$===undefined){
m$t3v.initTypeProto(OrderedList,'ceylon.markdown.core::OrderedList',$init$List());
(function(orderedList$){
m$t3v.atr$(orderedList$,'startsWith',function(){return this.startsWith_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$t3v.Integer},$cont:OrderedList,pa:1,d:['ceylon.markdown.core','OrderedList','$at','startsWith']};});
m$t3v.atr$(orderedList$,'delimeter',function(){return this.delimeter_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$t3v.Character},$cont:OrderedList,pa:1,d:['ceylon.markdown.core','OrderedList','$at','delimeter']};});
//AttributeDecl children at OrderedList.ceylon (2:1-2:44)
m$t3v.atr$(orderedList$,'children',function(){return this.$c50l24$t8b_;},function($t8c){return this.$c50l24$t8b_=$t8c;},function(){return{mod:$CCMM$,$t:{t:m$t3v.Sequential,a:{Element$Sequential:{t:Node}}},$cont:OrderedList,pa:1027,d:['ceylon.markdown.core','OrderedList','$at','children']};});
//MethodDecl accept at OrderedList.ceylon (4:1-4:89)
orderedList$.accept=function($t8d,$2uk8rz$){var orderedList$=this;
return $t8d.visitOrderedList(orderedList$);
};
orderedList$.accept.$crtmm$=function(){return{mod:$CCMM$,$t:'Type$accept',ps:[{nm:'visitor',mt:'prm',$t:{t:Visitor,a:{Type$Visitor:'Type$accept'}}}],$cont:OrderedList,tp:{Type$accept:{}},pa:3,d:['ceylon.markdown.core','OrderedList','$m','accept']};};
})(OrderedList.$$.prototype);
}
return OrderedList;
}
ex$.$init$OrderedList=$init$OrderedList;
$init$OrderedList();

//ClassDef ListItem at ListItem.ceylon (1:0-5:0)
function ListItem(listItem$){
$init$ListItem();
if(listItem$===undefined)listItem$=new ListItem.$$;
Block(undefined,listItem$);
//AttributeDecl children at ListItem.ceylon (2:1-2:44)
listItem$.$c50l24$t8e_=m$t3v.empty();
return listItem$;
}
ListItem.$crtmm$=function(){return{mod:$CCMM$,'super':{t:Block},ps:[],pa:1,d:['ceylon.markdown.core','ListItem']};};
ex$.ListItem=ListItem;
function $init$ListItem(){
if(ListItem.$$===undefined){
m$t3v.initTypeProto(ListItem,'ceylon.markdown.core::ListItem',$init$Block());
(function(listItem$){
//AttributeDecl children at ListItem.ceylon (2:1-2:44)
m$t3v.atr$(listItem$,'children',function(){return this.$c50l24$t8e_;},function($t8f){return this.$c50l24$t8e_=$t8f;},function(){return{mod:$CCMM$,$t:{t:m$t3v.Sequential,a:{Element$Sequential:{t:Node}}},$cont:ListItem,pa:1027,d:['ceylon.markdown.core','ListItem','$at','children']};});
//MethodDecl accept at ListItem.ceylon (4:1-4:86)
listItem$.accept=function($t8g,$7grpmn$){var listItem$=this;
return $t8g.visitListItem(listItem$);
};
listItem$.accept.$crtmm$=function(){return{mod:$CCMM$,$t:'Type$accept',ps:[{nm:'visitor',mt:'prm',$t:{t:Visitor,a:{Type$Visitor:'Type$accept'}}}],$cont:ListItem,tp:{Type$accept:{}},pa:3,d:['ceylon.markdown.core','ListItem','$m','accept']};};
})(ListItem.$$.prototype);
}
return ListItem;
}
ex$.$init$ListItem=$init$ListItem;
$init$ListItem();

//ClassDef Delimiter at Delimiter.ceylon (1:0-10:0)
function Delimiter(node,delimiterChar,numOfDelimiters,previous,next,active,canOpen,canClose,delimiter$){
$init$Delimiter();
if(delimiter$===undefined)delimiter$=new Delimiter.$$;
delimiter$.node_=node;
delimiter$.delimiterChar_=delimiterChar;
delimiter$.numOfDelimiters_=numOfDelimiters;
delimiter$.previous_=previous;
delimiter$.next_=next;
if(active===undefined){active=$init$Delimiter().$defs$active(delimiter$,node,delimiterChar,numOfDelimiters,previous,next,canOpen,canClose);}
delimiter$.active_=active;
if(canOpen===undefined){canOpen=$init$Delimiter().$defs$canOpen(delimiter$,node,delimiterChar,numOfDelimiters,previous,next,active,canClose);}
delimiter$.canOpen_=canOpen;
if(canClose===undefined){canClose=$init$Delimiter().$defs$canClose(delimiter$,node,delimiterChar,numOfDelimiters,previous,next,active,canOpen);}
delimiter$.canClose_=canClose;
return delimiter$;
}
Delimiter.$defs$active=function(delimiter$,node,delimiterChar,numOfDelimiters,previous,next,canOpen,canClose){return true};Delimiter.$defs$canOpen=function(delimiter$,node,delimiterChar,numOfDelimiters,previous,next,active,canClose){return true};Delimiter.$defs$canClose=function(delimiter$,node,delimiterChar,numOfDelimiters,previous,next,active,canOpen){return true};Delimiter.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$t3v.Basic},ps:[{nm:'node',mt:'prm',$t:{t:Text},pa:1},{nm:'delimiterChar',mt:'prm',$t:{t:m$t3v.Character},pa:1},{nm:'numOfDelimiters',mt:'prm',$t:{t:m$t3v.Integer},pa:1025},{nm:'previous',mt:'prm',$t:{t:'u',l:[{t:m$t3v.Null},{t:Delimiter}]},pa:1025},{nm:'next',mt:'prm',$t:{t:'u',l:[{t:m$t3v.Null},{t:Delimiter}]},pa:1025},{nm:'active',mt:'prm',def:1,$t:{t:m$t3v.$_Boolean},pa:1025},{nm:'canOpen',mt:'prm',def:1,$t:{t:m$t3v.$_Boolean},pa:1},{nm:'canClose',mt:'prm',def:1,$t:{t:m$t3v.$_Boolean},pa:1}],d:['ceylon.markdown.core','Delimiter']};};
ex$.Delimiter=Delimiter;
function $init$Delimiter(){
if(Delimiter.$$===undefined){
m$t3v.initTypeProto(Delimiter,'ceylon.markdown.core::Delimiter',m$t3v.Basic);
(function(delimiter$){
m$t3v.atr$(delimiter$,'node',function(){return this.node_;},undefined,function(){return{mod:$CCMM$,$t:{t:Text},$cont:Delimiter,pa:1,d:['ceylon.markdown.core','Delimiter','$at','node']};});
m$t3v.atr$(delimiter$,'delimiterChar',function(){return this.delimiterChar_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$t3v.Character},$cont:Delimiter,pa:1,d:['ceylon.markdown.core','Delimiter','$at','delimiterChar']};});
m$t3v.atr$(delimiter$,'numOfDelimiters',function(){return this.numOfDelimiters_;},function($t8h){return this.numOfDelimiters_=$t8h;},function(){return{mod:$CCMM$,$t:{t:m$t3v.Integer},$cont:Delimiter,pa:1025,d:['ceylon.markdown.core','Delimiter','$at','numOfDelimiters']};});
m$t3v.atr$(delimiter$,'previous',function(){return this.previous_;},function($t8i){return this.previous_=$t8i;},function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$t3v.Null},{t:Delimiter}]},$cont:Delimiter,pa:1025,d:['ceylon.markdown.core','Delimiter','$at','previous']};});
m$t3v.atr$(delimiter$,'next',function(){return this.next_;},function($t8j){return this.next_=$t8j;},function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$t3v.Null},{t:Delimiter}]},$cont:Delimiter,pa:1025,d:['ceylon.markdown.core','Delimiter','$at','next']};});
m$t3v.atr$(delimiter$,'active',function(){return this.active_;},function($t8k){return this.active_=$t8k;},function(){return{mod:$CCMM$,$t:{t:m$t3v.$_Boolean},$cont:Delimiter,pa:1025,d:['ceylon.markdown.core','Delimiter','$at','active']};});
m$t3v.atr$(delimiter$,'canOpen',function(){return this.canOpen_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$t3v.$_Boolean},$cont:Delimiter,pa:1,d:['ceylon.markdown.core','Delimiter','$at','canOpen']};});
m$t3v.atr$(delimiter$,'canClose',function(){return this.canClose_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$t3v.$_Boolean},$cont:Delimiter,pa:1,d:['ceylon.markdown.core','Delimiter','$at','canClose']};});
})(Delimiter.$$.prototype);
}
return Delimiter;
}
ex$.$init$Delimiter=$init$Delimiter;
$init$Delimiter();

//ClassDef Block at Block.ceylon (1:0-3:0)
function Block(open,block$){
$init$Block();
if(block$===undefined)m$t3v.throwexc(m$t3v.InvocationException$meta$model("Cannot instantiate abstract class ceylon.markdown.core::Block"),'?','?')
if(open===undefined){open=$init$Block().$defs$open(block$);}
block$.open_=open;
Node(block$);
return block$;
}
Block.$defs$open=function(block$){return true};Block.$crtmm$=function(){return{mod:$CCMM$,'super':{t:Node},ps:[{nm:'open',mt:'prm',def:1,$t:{t:m$t3v.$_Boolean},pa:1025}],pa:257,d:['ceylon.markdown.core','Block']};};
ex$.Block=Block;
function $init$Block(){
if(Block.$$===undefined){
m$t3v.initTypeProto(Block,'ceylon.markdown.core::Block',$init$Node());
(function(block$){
m$t3v.atr$(block$,'open',function(){return this.open_;},function($t8l){return this.open_=$t8l;},function(){return{mod:$CCMM$,$t:{t:m$t3v.$_Boolean},$cont:Block,pa:1025,d:['ceylon.markdown.core','Block','$at','open']};});
//MethodDecl closeBlock at Block.ceylon (2:1-2:41)
block$.closeBlock=function(){var block$=this;
return (block$.open=false);
};
block$.closeBlock.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$t3v.Anything},ps:[],$cont:Block,pa:1,d:['ceylon.markdown.core','Block','$m','closeBlock']};};
})(Block.$$.prototype);
}
return Block;
}
ex$.$init$Block=$init$Block;
$init$Block();

//ClassDef BlockQuote at BlockQuote.ceylon (1:0-11:0)
function BlockQuote(blockQuote$){
$init$BlockQuote();
if(blockQuote$===undefined)blockQuote$=new BlockQuote.$$;
Block(undefined,blockQuote$);
//AttributeDecl children at BlockQuote.ceylon (8:1-8:44)
blockQuote$.$c50l24$t8m_=m$t3v.empty();
return blockQuote$;
}
BlockQuote.$crtmm$=function(){return{mod:$CCMM$,'super':{t:Block},ps:[],pa:1,an:function(){return[m$t3v.doc$($CCMM$,'ceylon.markdown.core:BlockQuote')];},d:['ceylon.markdown.core','BlockQuote']};};
ex$.BlockQuote=BlockQuote;
function $init$BlockQuote(){
if(BlockQuote.$$===undefined){
m$t3v.initTypeProto(BlockQuote,'ceylon.markdown.core::BlockQuote',$init$Block());
(function(blockQuote$){
//AttributeDecl children at BlockQuote.ceylon (8:1-8:44)
m$t3v.atr$(blockQuote$,'children',function(){return this.$c50l24$t8m_;},function($t8n){return this.$c50l24$t8m_=$t8n;},function(){return{mod:$CCMM$,$t:{t:m$t3v.Sequential,a:{Element$Sequential:{t:Node}}},$cont:BlockQuote,pa:1027,d:['ceylon.markdown.core','BlockQuote','$at','children']};});
//MethodDecl accept at BlockQuote.ceylon (10:1-10:88)
blockQuote$.accept=function($t8o,$8lfj4z$){var blockQuote$=this;
return $t8o.visitBlockQuote(blockQuote$);
};
blockQuote$.accept.$crtmm$=function(){return{mod:$CCMM$,$t:'Type$accept',ps:[{nm:'visitor',mt:'prm',$t:{t:Visitor,a:{Type$Visitor:'Type$accept'}}}],$cont:BlockQuote,tp:{Type$accept:{}},pa:3,d:['ceylon.markdown.core','BlockQuote','$m','accept']};};
})(BlockQuote.$$.prototype);
}
return BlockQuote;
}
ex$.$init$BlockQuote=$init$BlockQuote;
$init$BlockQuote();

//ClassDef StrongEmphasis at StrongEmphasis.ceylon (1:0-5:0)
function StrongEmphasis(strongEmphasis$){
$init$StrongEmphasis();
if(strongEmphasis$===undefined)strongEmphasis$=new StrongEmphasis.$$;
Node(strongEmphasis$);
//AttributeDecl children at StrongEmphasis.ceylon (2:1-2:44)
strongEmphasis$.$c50l24$t8p_=m$t3v.empty();
return strongEmphasis$;
}
StrongEmphasis.$crtmm$=function(){return{mod:$CCMM$,'super':{t:Node},ps:[],pa:1,d:['ceylon.markdown.core','StrongEmphasis']};};
ex$.StrongEmphasis=StrongEmphasis;
function $init$StrongEmphasis(){
if(StrongEmphasis.$$===undefined){
m$t3v.initTypeProto(StrongEmphasis,'ceylon.markdown.core::StrongEmphasis',$init$Node());
(function(strongEmphasis$){
//AttributeDecl children at StrongEmphasis.ceylon (2:1-2:44)
m$t3v.atr$(strongEmphasis$,'children',function(){return this.$c50l24$t8p_;},function($t8q){return this.$c50l24$t8p_=$t8q;},function(){return{mod:$CCMM$,$t:{t:m$t3v.Sequential,a:{Element$Sequential:{t:Node}}},$cont:StrongEmphasis,pa:1027,d:['ceylon.markdown.core','StrongEmphasis','$at','children']};});
//MethodDecl accept at StrongEmphasis.ceylon (4:1-4:92)
strongEmphasis$.accept=function($t8r,$n7f2n5$){var strongEmphasis$=this;
return $t8r.visitStrongEmphasis(strongEmphasis$);
};
strongEmphasis$.accept.$crtmm$=function(){return{mod:$CCMM$,$t:'Type$accept',ps:[{nm:'visitor',mt:'prm',$t:{t:Visitor,a:{Type$Visitor:'Type$accept'}}}],$cont:StrongEmphasis,tp:{Type$accept:{}},pa:3,d:['ceylon.markdown.core','StrongEmphasis','$m','accept']};};
})(StrongEmphasis.$$.prototype);
}
return StrongEmphasis;
}
ex$.$init$StrongEmphasis=$init$StrongEmphasis;
$init$StrongEmphasis();
var $t8s;
function referenceMap(){if($t8s===undefined)throw m$t3v.InitializationError('Attempt to read uninitialized attribute «referenceMap»');return $t8s;}
function set$referenceMap($t8t){return $t8s=$t8t;};
var $prop$getReferenceMap={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$t40.HashMap,a:{Key$HashMap:{t:m$t3v.$_String},Item$HashMap:{t:Link}}},pa:1155,d:['ceylon.markdown.core','referenceMap']};}};
ex$.$prop$getReferenceMap=$prop$getReferenceMap;
$prop$getReferenceMap.get=referenceMap;
$prop$getReferenceMap.set=set$referenceMap;
if(set$referenceMap.$crtmm$===undefined)set$referenceMap.$crtmm$=$prop$getReferenceMap.$crtmm$;
//MethodDef parse at parse.ceylon (7:0-28:0)
function parse($t8u){
var $t8v=Document();
set$referenceMap(m$t40.HashMap(undefined,undefined,undefined,{Key$HashMap:{t:m$t3v.$_String},Item$HashMap:{t:Link}}));
//'for' statement at parse.ceylon (21:1-23:1)
var $t8x,$t8y;for(var $t8w=$t8u.lines.iterator();($t8x=$t8w.next())!==m$t3v.finished();){
$t8y=true;parseLine($t8x,$t8v);
}
if(!$t8y)m$t3v.throwexc(m$t3v.AssertionError("nonempty Iterable with initial \'finished\' element"),'21:1-23:1','parse.ceylon');
var $t8z=inlineParser($t8v);
return $t8z;
}
ex$.parse=parse;
parse.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Document},ps:[{nm:'markdown',mt:'prm',$t:{t:m$t3v.$_String}}],pa:1,an:function(){return[m$t3v.doc$($CCMM$,'ceylon.markdown.core:parse')];},d:['ceylon.markdown.core','parse']};};

//ClassDef UnorderedList at UnorderedList.ceylon (1:0-6:0)
function UnorderedList(bulletChar,unorderedList$){
$init$UnorderedList();
if(unorderedList$===undefined)unorderedList$=new UnorderedList.$$;
unorderedList$.bulletChar_=bulletChar;
List(undefined,unorderedList$);
//AttributeDecl children at UnorderedList.ceylon (2:1-2:44)
unorderedList$.$c50l24$t90_=m$t3v.empty();
return unorderedList$;
}
UnorderedList.$crtmm$=function(){return{mod:$CCMM$,'super':{t:List},ps:[{nm:'bulletChar',mt:'prm',$t:{t:m$t3v.Character},pa:1}],pa:1,d:['ceylon.markdown.core','UnorderedList']};};
ex$.UnorderedList=UnorderedList;
function $init$UnorderedList(){
if(UnorderedList.$$===undefined){
m$t3v.initTypeProto(UnorderedList,'ceylon.markdown.core::UnorderedList',$init$List());
(function(unorderedList$){
m$t3v.atr$(unorderedList$,'bulletChar',function(){return this.bulletChar_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$t3v.Character},$cont:UnorderedList,pa:1,d:['ceylon.markdown.core','UnorderedList','$at','bulletChar']};});
//AttributeDecl children at UnorderedList.ceylon (2:1-2:44)
m$t3v.atr$(unorderedList$,'children',function(){return this.$c50l24$t90_;},function($t91){return this.$c50l24$t90_=$t91;},function(){return{mod:$CCMM$,$t:{t:m$t3v.Sequential,a:{Element$Sequential:{t:Node}}},$cont:UnorderedList,pa:1027,d:['ceylon.markdown.core','UnorderedList','$at','children']};});
//MethodDecl accept at UnorderedList.ceylon (4:1-4:91)
unorderedList$.accept=function($t92,$vr67s$){var unorderedList$=this;
return $t92.visitUnorderedList(unorderedList$);
};
unorderedList$.accept.$crtmm$=function(){return{mod:$CCMM$,$t:'Type$accept',ps:[{nm:'visitor',mt:'prm',$t:{t:Visitor,a:{Type$Visitor:'Type$accept'}}}],$cont:UnorderedList,tp:{Type$accept:{}},pa:3,d:['ceylon.markdown.core','UnorderedList','$m','accept']};};
})(UnorderedList.$$.prototype);
}
return UnorderedList;
}
ex$.$init$UnorderedList=$init$UnorderedList;
$init$UnorderedList();

//ClassDef HtmlBlock at HtmlBlock.ceylon (1:0-5:0)
function HtmlBlock(text,type,htmlBlock$){
$init$HtmlBlock();
if(htmlBlock$===undefined)htmlBlock$=new HtmlBlock.$$;
htmlBlock$.text_=text;
htmlBlock$.type_=type;
Block(undefined,htmlBlock$);
//AttributeDecl children at HtmlBlock.ceylon (2:1-2:44)
htmlBlock$.$c50l24$t93_=m$t3v.empty();
return htmlBlock$;
}
HtmlBlock.$crtmm$=function(){return{mod:$CCMM$,'super':{t:Block},ps:[{nm:'text',mt:'prm',$t:{t:m$t3v.$_String},pa:1025},{nm:'type',mt:'prm',$t:{t:m$t3v.Integer},pa:1}],pa:1,d:['ceylon.markdown.core','HtmlBlock']};};
ex$.HtmlBlock=HtmlBlock;
function $init$HtmlBlock(){
if(HtmlBlock.$$===undefined){
m$t3v.initTypeProto(HtmlBlock,'ceylon.markdown.core::HtmlBlock',$init$Block());
(function(htmlBlock$){
m$t3v.atr$(htmlBlock$,'text',function(){return this.text_;},function($t94){return this.text_=$t94;},function(){return{mod:$CCMM$,$t:{t:m$t3v.$_String},$cont:HtmlBlock,pa:1025,d:['ceylon.markdown.core','HtmlBlock','$at','text']};});
m$t3v.atr$(htmlBlock$,'type',function(){return this.type_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$t3v.Integer},$cont:HtmlBlock,pa:1,d:['ceylon.markdown.core','HtmlBlock','$at','type']};});
//AttributeDecl children at HtmlBlock.ceylon (2:1-2:44)
m$t3v.atr$(htmlBlock$,'children',function(){return this.$c50l24$t93_;},function($t95){return this.$c50l24$t93_=$t95;},function(){return{mod:$CCMM$,$t:{t:m$t3v.Sequential,a:{Element$Sequential:{t:Node}}},$cont:HtmlBlock,pa:1027,d:['ceylon.markdown.core','HtmlBlock','$at','children']};});
//MethodDecl accept at HtmlBlock.ceylon (4:1-4:87)
htmlBlock$.accept=function($t96,$trpj14$){var htmlBlock$=this;
return $t96.visitHtmlBlock(htmlBlock$);
};
htmlBlock$.accept.$crtmm$=function(){return{mod:$CCMM$,$t:'Type$accept',ps:[{nm:'visitor',mt:'prm',$t:{t:Visitor,a:{Type$Visitor:'Type$accept'}}}],$cont:HtmlBlock,tp:{Type$accept:{}},pa:3,d:['ceylon.markdown.core','HtmlBlock','$m','accept']};};
})(HtmlBlock.$$.prototype);
}
return HtmlBlock;
}
ex$.$init$HtmlBlock=$init$HtmlBlock;
$init$HtmlBlock();

//ClassDef HardBreak at HardBreak.ceylon (1:0-5:0)
function HardBreak(hardBreak$){
$init$HardBreak();
if(hardBreak$===undefined)hardBreak$=new HardBreak.$$;
Node(hardBreak$);
//AttributeDecl children at HardBreak.ceylon (2:1-2:44)
hardBreak$.$c50l24$t97_=m$t3v.empty();
return hardBreak$;
}
HardBreak.$crtmm$=function(){return{mod:$CCMM$,'super':{t:Node},ps:[],pa:1,d:['ceylon.markdown.core','HardBreak']};};
ex$.HardBreak=HardBreak;
function $init$HardBreak(){
if(HardBreak.$$===undefined){
m$t3v.initTypeProto(HardBreak,'ceylon.markdown.core::HardBreak',$init$Node());
(function(hardBreak$){
//AttributeDecl children at HardBreak.ceylon (2:1-2:44)
m$t3v.atr$(hardBreak$,'children',function(){return this.$c50l24$t97_;},function($t98){return this.$c50l24$t97_=$t98;},function(){return{mod:$CCMM$,$t:{t:m$t3v.Sequential,a:{Element$Sequential:{t:Node}}},$cont:HardBreak,pa:1027,d:['ceylon.markdown.core','HardBreak','$at','children']};});
//MethodDecl accept at HardBreak.ceylon (4:1-4:87)
hardBreak$.accept=function($t99,$zakr3a$){var hardBreak$=this;
return $t99.visitHardBreak(hardBreak$);
};
hardBreak$.accept.$crtmm$=function(){return{mod:$CCMM$,$t:'Type$accept',ps:[{nm:'visitor',mt:'prm',$t:{t:Visitor,a:{Type$Visitor:'Type$accept'}}}],$cont:HardBreak,tp:{Type$accept:{}},pa:3,d:['ceylon.markdown.core','HardBreak','$m','accept']};};
})(HardBreak.$$.prototype);
}
return HardBreak;
}
ex$.$init$HardBreak=$init$HardBreak;
$init$HardBreak();

//ClassDef Emphasis at Emphasis.ceylon (1:0-5:0)
function Emphasis(emphasis$){
$init$Emphasis();
if(emphasis$===undefined)emphasis$=new Emphasis.$$;
Node(emphasis$);
//AttributeDecl children at Emphasis.ceylon (2:1-2:44)
emphasis$.$c50l24$t9a_=m$t3v.empty();
return emphasis$;
}
Emphasis.$crtmm$=function(){return{mod:$CCMM$,'super':{t:Node},ps:[],pa:1,d:['ceylon.markdown.core','Emphasis']};};
ex$.Emphasis=Emphasis;
function $init$Emphasis(){
if(Emphasis.$$===undefined){
m$t3v.initTypeProto(Emphasis,'ceylon.markdown.core::Emphasis',$init$Node());
(function(emphasis$){
//AttributeDecl children at Emphasis.ceylon (2:1-2:44)
m$t3v.atr$(emphasis$,'children',function(){return this.$c50l24$t9a_;},function($t9b){return this.$c50l24$t9a_=$t9b;},function(){return{mod:$CCMM$,$t:{t:m$t3v.Sequential,a:{Element$Sequential:{t:Node}}},$cont:Emphasis,pa:1027,d:['ceylon.markdown.core','Emphasis','$at','children']};});
//MethodDecl accept at Emphasis.ceylon (4:1-4:86)
emphasis$.accept=function($t9c,$uqscqy$){var emphasis$=this;
return $t9c.visitEmphasis(emphasis$);
};
emphasis$.accept.$crtmm$=function(){return{mod:$CCMM$,$t:'Type$accept',ps:[{nm:'visitor',mt:'prm',$t:{t:Visitor,a:{Type$Visitor:'Type$accept'}}}],$cont:Emphasis,tp:{Type$accept:{}},pa:3,d:['ceylon.markdown.core','Emphasis','$m','accept']};};
})(Emphasis.$$.prototype);
}
return Emphasis;
}
ex$.$init$Emphasis=$init$Emphasis;
$init$Emphasis();

//ClassDef CodeBlock at CodeBlock.ceylon (1:0-3:0)
function CodeBlock(text,codeBlock$){
$init$CodeBlock();
if(codeBlock$===undefined)m$t3v.throwexc(m$t3v.InvocationException$meta$model("Cannot instantiate abstract class ceylon.markdown.core::CodeBlock"),'?','?')
codeBlock$.text_=text;
Block(undefined,codeBlock$);
return codeBlock$;
}
CodeBlock.$crtmm$=function(){return{mod:$CCMM$,'super':{t:Block},ps:[{nm:'text',mt:'prm',$t:{t:m$t3v.$_String},pa:1025}],pa:257,d:['ceylon.markdown.core','CodeBlock']};};
ex$.CodeBlock=CodeBlock;
function $init$CodeBlock(){
if(CodeBlock.$$===undefined){
m$t3v.initTypeProto(CodeBlock,'ceylon.markdown.core::CodeBlock',$init$Block());
(function(codeBlock$){
m$t3v.atr$(codeBlock$,'text',function(){return this.text_;},function($t9d){return this.text_=$t9d;},function(){return{mod:$CCMM$,$t:{t:m$t3v.$_String},$cont:CodeBlock,pa:1025,d:['ceylon.markdown.core','CodeBlock','$at','text']};});
})(CodeBlock.$$.prototype);
}
return CodeBlock;
}
ex$.$init$CodeBlock=$init$CodeBlock;
$init$CodeBlock();

//ClassDef Node at Node.ceylon (1:0-22:0)
function Node(node$){
$init$Node();
if(node$===undefined)m$t3v.throwexc(m$t3v.InvocationException$meta$model("Cannot instantiate abstract class ceylon.markdown.core::Node"),'?','?')
//AttributeDecl parent at Node.ceylon (8:1-9:36)
node$.$c50l24$t9e_=null;
return node$;
}
Node.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$t3v.Basic},ps:[],pa:257,an:function(){return[m$t3v.doc$($CCMM$,'ceylon.markdown.core:Node')];},d:['ceylon.markdown.core','Node']};};
ex$.Node=Node;
function $init$Node(){
if(Node.$$===undefined){
m$t3v.initTypeProto(Node,'ceylon.markdown.core::Node',m$t3v.Basic);
(function(node$){
//AttributeDecl children at Node.ceylon (5:1-6:39)
node$.$prop$getChildren={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$t3v.Sequential,a:{Element$Sequential:{t:Node}}},$cont:Node,pa:1031,an:function(){return[m$t3v.doc("The child nodes of this node.")];},d:['ceylon.markdown.core','Node','$at','children']};}};
//AttributeDecl parent at Node.ceylon (8:1-9:36)
m$t3v.atr$(node$,'parent',function(){return this.$c50l24$t9e_;},function($t9f){return this.$c50l24$t9e_=$t9f;},function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$t3v.Null},{t:Node}]},$cont:Node,pa:1025,an:function(){return[m$t3v.doc("This node\'s parent")];},d:['ceylon.markdown.core','Node','$at','parent']};});
//MethodDef appendChild at Node.ceylon (11:1-14:1)
node$.appendChild=function($t9g){
var node$=this;
node$.children=node$.children.withTrailing($t9g,{Other$withTrailing:{t:Node}});
($t9g.parent=node$);
};node$.appendChild.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$t3v.Anything},ps:[{nm:'node',mt:'prm',$t:{t:Node}}],$cont:Node,pa:1,d:['ceylon.markdown.core','Node','$m','appendChild']};};
//MethodDecl removeChild at Node.ceylon (16:1-17:89)
node$.removeChild=function($t9h){var node$=this;
return (node$.children=m$t3v.tpl$([],m$t3v.for$(function(){
//Comprehension at Node.ceylon (17:15-17:66)
var $t9i=node$.children.iterator(),$t9j=m$t3v.finished();
var n$t9j=function(){return $t9j=$t9i.next();}
return function(){
if(n$t9j()!==m$t3v.finished()){
var $t9k=$t9j,$t9l=($t9m=(!m$t3v.$eq$($t9k,$t9h)?$t9k:null),m$t3v.nn$($t9m)?$t9m:null);
return $t9l;
}
return m$t3v.finished();
}
},{Element$Iterable:m$t3v.mut$([{t:m$t3v.Null},{t:Node}]),Absent$Iterable:{t:m$t3v.Null}})).coalesced.sequence(),node$.children);
var $t9m;
};
node$.removeChild.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$t3v.Anything},ps:[{nm:'node',mt:'prm',$t:{t:Node}}],$cont:Node,pa:1,d:['ceylon.markdown.core','Node','$m','removeChild']};};
node$.accept={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:'Type$accept',ps:[{nm:'visitor',mt:'prm',$t:{t:Visitor,a:{Type$Visitor:'Type$accept'}}}],$cont:Node,tp:{Type$accept:{}},pa:5,d:['ceylon.markdown.core','Node','$m','accept']};}};m$t3v.atr$(node$,'string',function(){
var node$=this;
return treeToString(node$);
},undefined,function(){return{mod:$CCMM$,$t:{t:m$t3v.$_String},$cont:Node,pa:3,d:['ceylon.markdown.core','Node','$at','string']};});
})(Node.$$.prototype);
}
return Node;
}
ex$.$init$Node=$init$Node;
$init$Node();

//ClassDef ThematicBreak at ThematicBreak.ceylon (1:0-5:0)
function ThematicBreak(thematicBreak$){
$init$ThematicBreak();
if(thematicBreak$===undefined)thematicBreak$=new ThematicBreak.$$;
Block(undefined,thematicBreak$);
//AttributeDecl children at ThematicBreak.ceylon (2:1-2:44)
thematicBreak$.$c50l24$taj_=m$t3v.empty();
return thematicBreak$;
}
ThematicBreak.$crtmm$=function(){return{mod:$CCMM$,'super':{t:Block},ps:[],pa:1,d:['ceylon.markdown.core','ThematicBreak']};};
ex$.ThematicBreak=ThematicBreak;
function $init$ThematicBreak(){
if(ThematicBreak.$$===undefined){
m$t3v.initTypeProto(ThematicBreak,'ceylon.markdown.core::ThematicBreak',$init$Block());
(function(thematicBreak$){
//AttributeDecl children at ThematicBreak.ceylon (2:1-2:44)
m$t3v.atr$(thematicBreak$,'children',function(){return this.$c50l24$taj_;},function($tak){return this.$c50l24$taj_=$tak;},function(){return{mod:$CCMM$,$t:{t:m$t3v.Sequential,a:{Element$Sequential:{t:Node}}},$cont:ThematicBreak,pa:1027,d:['ceylon.markdown.core','ThematicBreak','$at','children']};});
//MethodDecl accept at ThematicBreak.ceylon (4:1-4:91)
thematicBreak$.accept=function($tal,$tsu78$){var thematicBreak$=this;
return $tal.visitThematicBreak(thematicBreak$);
};
thematicBreak$.accept.$crtmm$=function(){return{mod:$CCMM$,$t:'Type$accept',ps:[{nm:'visitor',mt:'prm',$t:{t:Visitor,a:{Type$Visitor:'Type$accept'}}}],$cont:ThematicBreak,tp:{Type$accept:{}},pa:3,d:['ceylon.markdown.core','ThematicBreak','$m','accept']};};
})(ThematicBreak.$$.prototype);
}
return ThematicBreak;
}
ex$.$init$ThematicBreak=$init$ThematicBreak;
$init$ThematicBreak();

//ClassDef IndentedCode at IndentedCode.ceylon (1:0-5:0)
function IndentedCode($c50l24$tam,indentedCode$){
$init$IndentedCode();
if(indentedCode$===undefined)indentedCode$=new IndentedCode.$$;
indentedCode$.$c50l24$tam_=$c50l24$tam;
CodeBlock($c50l24$tam,indentedCode$);
//AttributeDecl children at IndentedCode.ceylon (2:1-2:44)
indentedCode$.$c50l24$tan_=m$t3v.empty();
return indentedCode$;
}
IndentedCode.$crtmm$=function(){return{mod:$CCMM$,'super':{t:CodeBlock},ps:[{nm:'text',mt:'prm',$t:{t:m$t3v.$_String}}],pa:1,d:['ceylon.markdown.core','IndentedCode']};};
ex$.IndentedCode=IndentedCode;
function $init$IndentedCode(){
if(IndentedCode.$$===undefined){
m$t3v.initTypeProto(IndentedCode,'ceylon.markdown.core::IndentedCode',$init$CodeBlock());
(function(indentedCode$){
m$t3v.atr$(indentedCode$,'$c50l24$tam',function(){return this.$c50l24$tam_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$t3v.$_String},$cont:IndentedCode,d:['ceylon.markdown.core','IndentedCode','$at','text$oe46ah']};});
//AttributeDecl children at IndentedCode.ceylon (2:1-2:44)
m$t3v.atr$(indentedCode$,'children',function(){return this.$c50l24$tan_;},function($tao){return this.$c50l24$tan_=$tao;},function(){return{mod:$CCMM$,$t:{t:m$t3v.Sequential,a:{Element$Sequential:{t:Node}}},$cont:IndentedCode,pa:1027,d:['ceylon.markdown.core','IndentedCode','$at','children']};});
//MethodDecl accept at IndentedCode.ceylon (4:1-4:90)
indentedCode$.accept=function($tap,$tjn82i$){var indentedCode$=this;
return $tap.visitIndentedCode(indentedCode$);
};
indentedCode$.accept.$crtmm$=function(){return{mod:$CCMM$,$t:'Type$accept',ps:[{nm:'visitor',mt:'prm',$t:{t:Visitor,a:{Type$Visitor:'Type$accept'}}}],$cont:IndentedCode,tp:{Type$accept:{}},pa:3,d:['ceylon.markdown.core','IndentedCode','$m','accept']};};
})(IndentedCode.$$.prototype);
}
return IndentedCode;
}
ex$.$init$IndentedCode=$init$IndentedCode;
$init$IndentedCode();

//ClassDef List at List.ceylon (1:0-3:0)
function List(tight,list$){
$init$List();
if(list$===undefined)m$t3v.throwexc(m$t3v.InvocationException$meta$model("Cannot instantiate abstract class ceylon.markdown.core::List"),'?','?')
if(tight===undefined){tight=$init$List().$defs$tight(list$);}
list$.tight_=tight;
Block(undefined,list$);
return list$;
}
List.$defs$tight=function(list$){return true};List.$crtmm$=function(){return{mod:$CCMM$,'super':{t:Block},ps:[{nm:'tight',mt:'prm',def:1,$t:{t:m$t3v.$_Boolean},pa:1025}],pa:257,d:['ceylon.markdown.core','List']};};
ex$.List=List;
function $init$List(){
if(List.$$===undefined){
m$t3v.initTypeProto(List,'ceylon.markdown.core::List',$init$Block());
(function(list$){
m$t3v.atr$(list$,'tight',function(){return this.tight_;},function($taq){return this.tight_=$taq;},function(){return{mod:$CCMM$,$t:{t:m$t3v.$_Boolean},$cont:List,pa:1025,d:['ceylon.markdown.core','List','$at','tight']};});
})(List.$$.prototype);
}
return List;
}
ex$.$init$List=$init$List;
$init$List();

//ClassDef FencedCode at FencedCode.ceylon (1:0-5:0)
function FencedCode($c50l24$tar,fenceLevel,fencedCode$){
$init$FencedCode();
if(fencedCode$===undefined)fencedCode$=new FencedCode.$$;
fencedCode$.$c50l24$tar_=$c50l24$tar;
fencedCode$.fenceLevel_=fenceLevel;
CodeBlock($c50l24$tar,fencedCode$);
//AttributeDecl children at FencedCode.ceylon (2:1-2:44)
fencedCode$.$c50l24$tas_=m$t3v.empty();
return fencedCode$;
}
FencedCode.$crtmm$=function(){return{mod:$CCMM$,'super':{t:CodeBlock},ps:[{nm:'text',mt:'prm',$t:{t:m$t3v.$_String}},{nm:'fenceLevel',mt:'prm',$t:{t:m$t3v.Integer},pa:1}],pa:1,d:['ceylon.markdown.core','FencedCode']};};
ex$.FencedCode=FencedCode;
function $init$FencedCode(){
if(FencedCode.$$===undefined){
m$t3v.initTypeProto(FencedCode,'ceylon.markdown.core::FencedCode',$init$CodeBlock());
(function(fencedCode$){
m$t3v.atr$(fencedCode$,'$c50l24$tar',function(){return this.$c50l24$tar_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$t3v.$_String},$cont:FencedCode,d:['ceylon.markdown.core','FencedCode','$at','text$aydor5']};});
m$t3v.atr$(fencedCode$,'fenceLevel',function(){return this.fenceLevel_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$t3v.Integer},$cont:FencedCode,pa:1,d:['ceylon.markdown.core','FencedCode','$at','fenceLevel']};});
//AttributeDecl children at FencedCode.ceylon (2:1-2:44)
m$t3v.atr$(fencedCode$,'children',function(){return this.$c50l24$tas_;},function($tat){return this.$c50l24$tas_=$tat;},function(){return{mod:$CCMM$,$t:{t:m$t3v.Sequential,a:{Element$Sequential:{t:Node}}},$cont:FencedCode,pa:1027,d:['ceylon.markdown.core','FencedCode','$at','children']};});
//MethodDecl accept at FencedCode.ceylon (4:1-4:88)
fencedCode$.accept=function($tau,$z84hhu$){var fencedCode$=this;
return $tau.visitFencedCode(fencedCode$);
};
fencedCode$.accept.$crtmm$=function(){return{mod:$CCMM$,$t:'Type$accept',ps:[{nm:'visitor',mt:'prm',$t:{t:Visitor,a:{Type$Visitor:'Type$accept'}}}],$cont:FencedCode,tp:{Type$accept:{}},pa:3,d:['ceylon.markdown.core','FencedCode','$m','accept']};};
})(FencedCode.$$.prototype);
}
return FencedCode;
}
ex$.$init$FencedCode=$init$FencedCode;
$init$FencedCode();

//ClassDef Heading at Heading.ceylon (1:0-5:0)
function Heading(level,heading$){
$init$Heading();
if(heading$===undefined)heading$=new Heading.$$;
heading$.level_=level;
Block(undefined,heading$);
//AttributeDecl children at Heading.ceylon (2:1-2:44)
heading$.$c50l24$tav_=m$t3v.empty();
return heading$;
}
Heading.$crtmm$=function(){return{mod:$CCMM$,'super':{t:Block},ps:[{nm:'level',mt:'prm',$t:{t:m$t3v.Integer},pa:1}],pa:1,d:['ceylon.markdown.core','Heading']};};
ex$.Heading=Heading;
function $init$Heading(){
if(Heading.$$===undefined){
m$t3v.initTypeProto(Heading,'ceylon.markdown.core::Heading',$init$Block());
(function(heading$){
m$t3v.atr$(heading$,'level',function(){return this.level_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$t3v.Integer},$cont:Heading,pa:1,d:['ceylon.markdown.core','Heading','$at','level']};});
//AttributeDecl children at Heading.ceylon (2:1-2:44)
m$t3v.atr$(heading$,'children',function(){return this.$c50l24$tav_;},function($taw){return this.$c50l24$tav_=$taw;},function(){return{mod:$CCMM$,$t:{t:m$t3v.Sequential,a:{Element$Sequential:{t:Node}}},$cont:Heading,pa:1027,d:['ceylon.markdown.core','Heading','$at','children']};});
//MethodDecl accept at Heading.ceylon (4:1-4:85)
heading$.accept=function($tax,$t74cag$){var heading$=this;
return $tax.visitHeading(heading$);
};
heading$.accept.$crtmm$=function(){return{mod:$CCMM$,$t:'Type$accept',ps:[{nm:'visitor',mt:'prm',$t:{t:Visitor,a:{Type$Visitor:'Type$accept'}}}],$cont:Heading,tp:{Type$accept:{}},pa:3,d:['ceylon.markdown.core','Heading','$m','accept']};};
})(Heading.$$.prototype);
}
return Heading;
}
ex$.$init$Heading=$init$Heading;
$init$Heading();

//ClassDef HtmlInline at HtmlInline.ceylon (1:0-5:0)
function HtmlInline(text,htmlInline$){
$init$HtmlInline();
if(htmlInline$===undefined)htmlInline$=new HtmlInline.$$;
htmlInline$.text_=text;
Node(htmlInline$);
//AttributeDecl children at HtmlInline.ceylon (2:1-2:44)
htmlInline$.$c50l24$tay_=m$t3v.empty();
return htmlInline$;
}
HtmlInline.$crtmm$=function(){return{mod:$CCMM$,'super':{t:Node},ps:[{nm:'text',mt:'prm',$t:{t:m$t3v.$_String},pa:1}],pa:1,d:['ceylon.markdown.core','HtmlInline']};};
ex$.HtmlInline=HtmlInline;
function $init$HtmlInline(){
if(HtmlInline.$$===undefined){
m$t3v.initTypeProto(HtmlInline,'ceylon.markdown.core::HtmlInline',$init$Node());
(function(htmlInline$){
m$t3v.atr$(htmlInline$,'text',function(){return this.text_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$t3v.$_String},$cont:HtmlInline,pa:1,d:['ceylon.markdown.core','HtmlInline','$at','text']};});
//AttributeDecl children at HtmlInline.ceylon (2:1-2:44)
m$t3v.atr$(htmlInline$,'children',function(){return this.$c50l24$tay_;},function($taz){return this.$c50l24$tay_=$taz;},function(){return{mod:$CCMM$,$t:{t:m$t3v.Sequential,a:{Element$Sequential:{t:Node}}},$cont:HtmlInline,pa:1027,d:['ceylon.markdown.core','HtmlInline','$at','children']};});
//MethodDecl accept at HtmlInline.ceylon (4:1-4:88)
htmlInline$.accept=function($tb0,$45emdq$){var htmlInline$=this;
return $tb0.visitHtmlInline(htmlInline$);
};
htmlInline$.accept.$crtmm$=function(){return{mod:$CCMM$,$t:'Type$accept',ps:[{nm:'visitor',mt:'prm',$t:{t:Visitor,a:{Type$Visitor:'Type$accept'}}}],$cont:HtmlInline,tp:{Type$accept:{}},pa:3,d:['ceylon.markdown.core','HtmlInline','$m','accept']};};
})(HtmlInline.$$.prototype);
}
return HtmlInline;
}
ex$.$init$HtmlInline=$init$HtmlInline;
$init$HtmlInline();

//MethodDef treeToString at treeToString.ceylon (4:0-51:0)
function treeToString($tb5,$tb6){
if($tb6===undefined){$tb6=(0);}
var $tb7=m$t3v.type$meta($tb5,{Type$type:{t:Node}}).declaration.name;
var $tb8=m$t3v.StringBuilder();
$tb8.append("\t".repeat($tb6).plus($tb7));
//Switch statement at treeToString.ceylon (11:1-44:1)
var $tb9=$tb5;
if(m$t3v.is$($tb9,{t:Text})) {
$tb8.append(": \n".plus("\t".repeat($tb6.plus(1))).plus("\"".plus($tb9.text).plus("\"")).plus("\n"));
}
else if(m$t3v.is$($tb9,{t:CodeBlock})) {
$tb8.append(": \n".plus("\t".repeat($tb6.plus(1))).plus("\"".plus($tb9.text).plus("\"")).plus("\n"));
}
else if(m$t3v.is$($tb9,{t:Code})) {
$tb8.append(": \n".plus("\t".repeat($tb6.plus(1))).plus("\"".plus($tb9.text).plus("\"")).plus("\n"));
}
else if(m$t3v.is$($tb9,{t:Heading})) {
$tb8.append(" (".plus($tb9.level.string).plus("): \n"));
}
else if(m$t3v.is$($tb9,{t:HtmlBlock})) {
$tb8.append(": \n".plus("\t".repeat($tb6.plus(1))).plus("\"".plus($tb9.text).plus("\"")).plus("\n"));
}
else if(m$t3v.is$($tb9,{t:HtmlInline})) {
$tb8.append(": \n".plus("\t".repeat($tb6.plus(1))).plus("\"".plus($tb9.text).plus("\"")).plus("\n"));
}
else if(m$t3v.is$($tb9,{t:OrderedList})) {
$tb8.append(" (start=".plus($tb9.startsWith.string).plus(", delimeter=\'").plus($tb9.delimeter.string).plus("\', tight=\'").plus($tb9.tight.string).plus("\'): \n"));
}
else if(m$t3v.is$($tb9,{t:UnorderedList})) {
$tb8.append(" (bulletChar=\'".plus($tb9.bulletChar.string).plus("\', tight=\'").plus($tb9.tight.string).plus("\'): \n"));
}
else if(m$t3v.is$($tb9,{t:Link})) {
$tb8.append(" (destination=\'".plus($tb9.destination).plus("\', title=\'").plus($tb9.title).plus("\'): \n"));
}
else if(m$t3v.is$($tb9,{t:Image})) {
$tb8.append(" (destination=\'".plus($tb9.destination).plus("\', title=\'").plus($tb9.title).plus("\'): \n"));
}
else{
$tb8.append(": \n");
}//End switch statement at treeToString.ceylon (11:1-44:1)
//'for' statement at treeToString.ceylon (46:1-48:1)
var $tbb;for(var $tba=$tb5.children.iterator();($tbb=$tba.next())!==m$t3v.finished();){
$tb8.append(treeToString($tbb,$tb6.plus(1)));
}
return $tb8.string;
};treeToString.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$t3v.$_String},ps:[{nm:'node',mt:'prm',$t:{t:Node}},{nm:'level',mt:'prm',def:1,$t:{t:m$t3v.Integer}}],d:['ceylon.markdown.core','treeToString']};};

//InterfaceDef Visitor at Visitor.ceylon (1:0-25:0)
function Visitor($$targs$$,visitor$){
m$t3v.set_type_args(visitor$,$$targs$$,Visitor);
}
Visitor.$crtmm$=function(){return{mod:$CCMM$,tp:{Type$Visitor:{}},pa:1,an:function(){return[m$t3v.doc("\nAn AST visitor for Markdown.")];},d:['ceylon.markdown.core','Visitor']};};
ex$.Visitor=Visitor;
function $init$Visitor(){
if(Visitor.$$===undefined){
m$t3v.initTypeProtoI(Visitor,'ceylon.markdown.core::Visitor');
(function(visitor$){
visitor$.visitText={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:'Type$Visitor',ps:[{nm:'text',mt:'prm',$t:{t:Text}}],$cont:Visitor,pa:5,d:['ceylon.markdown.core','Visitor','$m','visitText']};}};visitor$.visitParagraph={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:'Type$Visitor',ps:[{nm:'paragraph',mt:'prm',$t:{t:Paragraph}}],$cont:Visitor,pa:5,d:['ceylon.markdown.core','Visitor','$m','visitParagraph']};}};visitor$.visitBlockQuote={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:'Type$Visitor',ps:[{nm:'blockQuote',mt:'prm',$t:{t:BlockQuote}}],$cont:Visitor,pa:5,d:['ceylon.markdown.core','Visitor','$m','visitBlockQuote']};}};visitor$.visitDocument={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:'Type$Visitor',ps:[{nm:'document',mt:'prm',$t:{t:Document}}],$cont:Visitor,pa:5,d:['ceylon.markdown.core','Visitor','$m','visitDocument']};}};visitor$.visitCode={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:'Type$Visitor',ps:[{nm:'code',mt:'prm',$t:{t:Code}}],$cont:Visitor,pa:5,d:['ceylon.markdown.core','Visitor','$m','visitCode']};}};visitor$.visitEmphasis={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:'Type$Visitor',ps:[{nm:'emphasis',mt:'prm',$t:{t:Emphasis}}],$cont:Visitor,pa:5,d:['ceylon.markdown.core','Visitor','$m','visitEmphasis']};}};visitor$.visitFencedCode={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:'Type$Visitor',ps:[{nm:'fencedCode',mt:'prm',$t:{t:FencedCode}}],$cont:Visitor,pa:5,d:['ceylon.markdown.core','Visitor','$m','visitFencedCode']};}};visitor$.visitHardBreak={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:'Type$Visitor',ps:[{nm:'hardBreak',mt:'prm',$t:{t:HardBreak}}],$cont:Visitor,pa:5,d:['ceylon.markdown.core','Visitor','$m','visitHardBreak']};}};visitor$.visitHeading={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:'Type$Visitor',ps:[{nm:'heading',mt:'prm',$t:{t:Heading}}],$cont:Visitor,pa:5,d:['ceylon.markdown.core','Visitor','$m','visitHeading']};}};visitor$.visitHtmlBlock={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:'Type$Visitor',ps:[{nm:'htmlBlock',mt:'prm',$t:{t:HtmlBlock}}],$cont:Visitor,pa:5,d:['ceylon.markdown.core','Visitor','$m','visitHtmlBlock']};}};visitor$.visitImage={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:'Type$Visitor',ps:[{nm:'image',mt:'prm',$t:{t:Image}}],$cont:Visitor,pa:5,d:['ceylon.markdown.core','Visitor','$m','visitImage']};}};visitor$.visitIndentedCode={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:'Type$Visitor',ps:[{nm:'indentedCode',mt:'prm',$t:{t:IndentedCode}}],$cont:Visitor,pa:5,d:['ceylon.markdown.core','Visitor','$m','visitIndentedCode']};}};visitor$.visitLink={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:'Type$Visitor',ps:[{nm:'link',mt:'prm',$t:{t:Link}}],$cont:Visitor,pa:5,d:['ceylon.markdown.core','Visitor','$m','visitLink']};}};visitor$.visitOrderedList={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:'Type$Visitor',ps:[{nm:'orderedList',mt:'prm',$t:{t:OrderedList}}],$cont:Visitor,pa:5,d:['ceylon.markdown.core','Visitor','$m','visitOrderedList']};}};visitor$.visitListItem={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:'Type$Visitor',ps:[{nm:'listItem',mt:'prm',$t:{t:ListItem}}],$cont:Visitor,pa:5,d:['ceylon.markdown.core','Visitor','$m','visitListItem']};}};visitor$.visitSoftBreak={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:'Type$Visitor',ps:[{nm:'softBreak',mt:'prm',$t:{t:SoftBreak}}],$cont:Visitor,pa:5,d:['ceylon.markdown.core','Visitor','$m','visitSoftBreak']};}};visitor$.visitStrongEmphasis={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:'Type$Visitor',ps:[{nm:'strongEmphasis',mt:'prm',$t:{t:StrongEmphasis}}],$cont:Visitor,pa:5,d:['ceylon.markdown.core','Visitor','$m','visitStrongEmphasis']};}};visitor$.visitThematicBreak={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:'Type$Visitor',ps:[{nm:'thematicBreak',mt:'prm',$t:{t:ThematicBreak}}],$cont:Visitor,pa:5,d:['ceylon.markdown.core','Visitor','$m','visitThematicBreak']};}};visitor$.visitUnorderedList={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:'Type$Visitor',ps:[{nm:'unorderedList',mt:'prm',$t:{t:UnorderedList}}],$cont:Visitor,pa:5,d:['ceylon.markdown.core','Visitor','$m','visitUnorderedList']};}};visitor$.visitHtmlInline={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:'Type$Visitor',ps:[{nm:'htmlInline',mt:'prm',$t:{t:HtmlInline}}],$cont:Visitor,pa:5,d:['ceylon.markdown.core','Visitor','$m','visitHtmlInline']};}};
})(Visitor.$$.prototype);
}
return Visitor;
}
ex$.$init$Visitor=$init$Visitor;
$init$Visitor();

//ClassDef Paragraph at Paragraph.ceylon (1:0-5:0)
function Paragraph(paragraph$){
$init$Paragraph();
if(paragraph$===undefined)paragraph$=new Paragraph.$$;
Block(undefined,paragraph$);
//AttributeDecl children at Paragraph.ceylon (2:1-2:44)
paragraph$.$c50l24$tbc_=m$t3v.empty();
return paragraph$;
}
Paragraph.$crtmm$=function(){return{mod:$CCMM$,'super':{t:Block},ps:[],pa:1,d:['ceylon.markdown.core','Paragraph']};};
ex$.Paragraph=Paragraph;
function $init$Paragraph(){
if(Paragraph.$$===undefined){
m$t3v.initTypeProto(Paragraph,'ceylon.markdown.core::Paragraph',$init$Block());
(function(paragraph$){
//AttributeDecl children at Paragraph.ceylon (2:1-2:44)
m$t3v.atr$(paragraph$,'children',function(){return this.$c50l24$tbc_;},function($tbd){return this.$c50l24$tbc_=$tbd;},function(){return{mod:$CCMM$,$t:{t:m$t3v.Sequential,a:{Element$Sequential:{t:Node}}},$cont:Paragraph,pa:1027,d:['ceylon.markdown.core','Paragraph','$at','children']};});
//MethodDecl accept at Paragraph.ceylon (4:1-4:87)
paragraph$.accept=function($tbe,$yddgvo$){var paragraph$=this;
return $tbe.visitParagraph(paragraph$);
};
paragraph$.accept.$crtmm$=function(){return{mod:$CCMM$,$t:'Type$accept',ps:[{nm:'visitor',mt:'prm',$t:{t:Visitor,a:{Type$Visitor:'Type$accept'}}}],$cont:Paragraph,tp:{Type$accept:{}},pa:3,d:['ceylon.markdown.core','Paragraph','$m','accept']};};
})(Paragraph.$$.prototype);
}
return Paragraph;
}
ex$.$init$Paragraph=$init$Paragraph;
$init$Paragraph();

//ClassDef Link at Link.ceylon (1:0-5:0)
function Link(destination,title,link$){
$init$Link();
if(link$===undefined)link$=new Link.$$;
link$.destination_=destination;
if(title===undefined){title=$init$Link().$defs$title(link$,destination);}
link$.title_=title;
Node(link$);
//AttributeDecl children at Link.ceylon (2:1-2:44)
link$.$c50l24$tc9_=m$t3v.empty();
return link$;
}
Link.$defs$title=function(link$,destination){return ""};Link.$crtmm$=function(){return{mod:$CCMM$,'super':{t:Node},ps:[{nm:'destination',mt:'prm',$t:{t:m$t3v.$_String},pa:1},{nm:'title',mt:'prm',def:1,$t:{t:m$t3v.$_String},pa:1}],pa:1,d:['ceylon.markdown.core','Link']};};
ex$.Link=Link;
function $init$Link(){
if(Link.$$===undefined){
m$t3v.initTypeProto(Link,'ceylon.markdown.core::Link',$init$Node());
(function(link$){
m$t3v.atr$(link$,'destination',function(){return this.destination_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$t3v.$_String},$cont:Link,pa:1,d:['ceylon.markdown.core','Link','$at','destination']};});
m$t3v.atr$(link$,'title',function(){return this.title_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$t3v.$_String},$cont:Link,pa:1,d:['ceylon.markdown.core','Link','$at','title']};});
//AttributeDecl children at Link.ceylon (2:1-2:44)
m$t3v.atr$(link$,'children',function(){return this.$c50l24$tc9_;},function($tca){return this.$c50l24$tc9_=$tca;},function(){return{mod:$CCMM$,$t:{t:m$t3v.Sequential,a:{Element$Sequential:{t:Node}}},$cont:Link,pa:1027,d:['ceylon.markdown.core','Link','$at','children']};});
//MethodDecl accept at Link.ceylon (4:1-4:82)
link$.accept=function($tcb,$o4sjzs$){var link$=this;
return $tcb.visitLink(link$);
};
link$.accept.$crtmm$=function(){return{mod:$CCMM$,$t:'Type$accept',ps:[{nm:'visitor',mt:'prm',$t:{t:Visitor,a:{Type$Visitor:'Type$accept'}}}],$cont:Link,tp:{Type$accept:{}},pa:3,d:['ceylon.markdown.core','Link','$m','accept']};};
})(Link.$$.prototype);
}
return Link;
}
ex$.$init$Link=$init$Link;
$init$Link();

//MethodDef parseReference at inlineParser.ceylon (8:0-84:0)
function parseReference($tcc){
var $tcd;
var $tce;
var $tcf="";
var $tcg;
while(m$t3v.is$(($tcg=$tcc),{t:Text})&&$tcg.text.startsWith("[")){
var $tch=$tcg.text;
var $tci=linkReferencePattern().find($tch);
var $tcj;
if(m$t3v.nn$(($tcj=$tci))){
$tcd=$tcj.matched.replaceFirst("[","").replaceLast("]:","");
$tch=$tch.spanFrom($tcj.end).trimLeading(m$t3v.jsc$2(($tck=m$t3v.Character(10,true),m$t3v.jsc$3($tck,$tck.equals)),[{nm:'that',mt:'prm',$t:{t:m$t3v.$_Object}}],{})).trimLeading(m$t3v.jsc$2(($tcl=m$t3v.Character(32,true),m$t3v.jsc$3($tcl,$tcl.equals)),[{nm:'that',mt:'prm',$t:{t:m$t3v.$_Object}}],{}));
var $tck,$tcl;
}
else{
return;
}
function $tcm(){return $tci;}
var $tcn=linkDestinationBraces().find($tch);
var $tco=linkDestination().find($tch);
var $tcp;
if(m$t3v.nn$(($tcp=$tcn))){
$tce=$tcp.matched.replaceFirst("<","").replaceLast(">","");
$tch=$tch.spanFrom($tcp.end).trimLeading(m$t3v.jsc$2(($tcq=m$t3v.Character(10,true),m$t3v.jsc$3($tcq,$tcq.equals)),[{nm:'that',mt:'prm',$t:{t:m$t3v.$_Object}}],{})).trimLeading(m$t3v.jsc$2(($tcr=m$t3v.Character(32,true),m$t3v.jsc$3($tcr,$tcr.equals)),[{nm:'that',mt:'prm',$t:{t:m$t3v.$_Object}}],{}));
var $tcq,$tcr;
}
else{
var $tcs;
if(m$t3v.nn$(($tcs=$tco))){
$tce=$tcs.matched;
$tch=$tch.spanFrom($tcs.end).trimLeading(m$t3v.jsc$2(($tct=m$t3v.Character(10,true),m$t3v.jsc$3($tct,$tct.equals)),[{nm:'that',mt:'prm',$t:{t:m$t3v.$_Object}}],{})).trimLeading(m$t3v.jsc$2(($tcu=m$t3v.Character(32,true),m$t3v.jsc$3($tcu,$tcu.equals)),[{nm:'that',mt:'prm',$t:{t:m$t3v.$_Object}}],{}));
var $tct,$tcu;
}
else{
return;
}
}
var $tcv=linkTitlePattern().find($tch);
var $tcw;
if(m$t3v.nn$(($tcw=$tcv))){
$tcf=$tcw.matched.span(1,$tcw.end.minus(2));
$tch=$tch.spanFrom($tcw.end).trimLeading(m$t3v.jsc$2(($tcx=m$t3v.Character(10,true),m$t3v.jsc$3($tcx,$tcx.equals)),[{nm:'that',mt:'prm',$t:{t:m$t3v.$_Object}}],{})).trimLeading(m$t3v.jsc$2(($tcy=m$t3v.Character(32,true),m$t3v.jsc$3($tcy,$tcy.equals)),[{nm:'that',mt:'prm',$t:{t:m$t3v.$_Object}}],{}));
var $tcx,$tcy;
}
($tcg.text=$tch);
var $tcz=normalizeReference($tcd);
if(!referenceMap().defines($tcd)){
var $td0=Link(unescapeString($tce),unescapeString($tcf));
referenceMap().put($tcz,$td0);
}
}
//'for' statement at inlineParser.ceylon (77:1-83:1)
var $td2;for(var $td1=$tcc.children.iterator();($td2=$td1.next())!==m$t3v.finished();){
parseReference($td2);
var $td3,$td4;
if(m$t3v.is$(($td3=$td2),{t:Paragraph})&&m$t3v.is$(($td4=$td3.children.$_get(0)),{t:Text})&&m$t3v.$eq$($td4.text,"")){
$tcc.removeChild($td3);
}
}
};parseReference.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$t3v.Anything},ps:[{nm:'node',mt:'prm',$t:{t:Node}}],d:['ceylon.markdown.core','parseReference']};};
//MethodDef parseInlines at inlineParser.ceylon (86:0-559:0)
function parseInlines($td5,$td6){
var $td7=null;
var $td8;
if(m$t3v.is$(($td8=$td5),{t:Text})){
var $td9=$td8.text;
var $tda="";
var $tdb=(0);
while(($tdb<$td9.size)){
var $tdc=($tdd=$td9.$_get($tdb),m$t3v.nn$($tdd)?$tdd:m$t3v.Character(32,true));
var $tdd;
//Switch statement at inlineParser.ceylon (96:3-544:3)
var $tde=$tdc;
if($tde.equals(m$t3v.Character(10,true))) {
$td6.removeChild($td8);
if(!m$t3v.$eq$($tda,"")){
$td6.appendChild(Text($tda.trimTrailing(m$t3v.jsc$2(($tdf=m$t3v.Character(32,true),m$t3v.jsc$3($tdf,$tdf.equals)),[{nm:'that',mt:'prm',$t:{t:m$t3v.$_Object}}],{}))));
var $tdf;
}
$td6.appendChild(($tdg=($tda.endsWith("  ")?HardBreak():null),m$t3v.nn$($tdg)?$tdg:SoftBreak()));
var $tdg;
$tda="";
}
else if($tde.equals(m$t3v.Character(92,true))) {
$td6.removeChild($td8);
if(!m$t3v.$eq$($tda,"")){
$td6.appendChild(Text($tda));
}
($tdh=$tdb,$tdb=$tdh.successor,$tdh);
var $tdh;
var $tdi;
if(m$t3v.nn$(($tdi=$td9.$_get($tdb)))&&m$t3v.$eq$($tdi,m$t3v.Character(10,true))){
$td6.appendChild(HardBreak());
}
else{
var $tdj;
if(m$t3v.nn$(($tdj=$td9.$_get($tdb)))&&reEscapable().test($tdj.string)){
$td6.appendChild(Text($tdj.string));
}
else{
$td6.appendChild(Text($tdc.string));
($tdk=$tdb,$tdb=$tdk.predecessor,$tdk);
var $tdk;
}
}
$tda="";
}
else if($tde.equals(m$t3v.Character(96,true))) {
$td6.removeChild($td8);
if(!m$t3v.$eq$($tda,"")){
$td6.appendChild(Text($tda));
}
var $tdl=true;
var $tdm=ticksHere().find($td9.spanFrom($tdb));
var $tdn;
if(m$t3v.nn$(($tdn=$tdm))){
var $tdo=$tdn.matched;
($tdb=$tdb.plus($tdn.end));
var $tdp=$tdb;
//'for' statement at inlineParser.ceylon (140:5-157:5)//EXITS!
var $tdr;for(var $tdq=reTicks().findAll($td9.spanFrom($tdb)).iterator();($tdr=$tdq.next())!==m$t3v.finished();){
if(m$t3v.$eq$($tdr.matched,$tdo)){
$td6.appendChild(($tds=($tdt=$td9.measure($tdp,$tdr.start).trimmed,$tdu=" ",($tdv=whitespace(),m$t3v.jsc$3($tdv,$tdv.$_replace))($tdt,$tdu)),Code($tds)));
var $tds,$tdt,$tdu,$tdv;
$tdl=false;
($tdb=$tdb.plus($tdr.end.minus(1)));
break;
}
}
if($tdl){
$tdb=$tdp.minus(1);
$td6.appendChild(Text($tdo));
}
$tda="";
}
}
else if($tde.equals(m$t3v.Character(42,true)) || $tde.equals(m$t3v.Character(95,true))) {
$td6.removeChild($td8);
if(!m$t3v.$eq$($tda,"")){
$td6.appendChild(Text($tda));
}
var $tdw=scanDelimiters($td9,$tdb,$tdc),$tdx=$tdw.$_get(0),$tdy=$tdw.$_get(1),$tdz=$tdw.$_get(2);
var $te0=$tdb;
($tdb=$tdb.plus($tdx.minus(1)));
var $te1=Text($td9.span($te0,$tdb));
$td6.appendChild($te1);
var $te2;
if(m$t3v.nn$(($te2=$td7))){
var $te3=($te4=$te1,$te5=$tdc,$te6=$tdx,$te7=$te2,$te8=null,$te9=$tdy,$tea=$tdz,Delimiter($te4,$te5,$te6,$te7,$te8,undefined,$te9,$tea));
var $te4,$te5,$te6,$te7,$te8,$te9,$tea;
($te2.next=$te3);
$td7=$te3;
}
else{
$td7=($teb=$te1,$tec=$tdc,$ted=$tdx,$tee=null,$tef=null,$teg=$tdy,$teh=$tdz,Delimiter($teb,$tec,$ted,$tee,$tef,undefined,$teg,$teh));
var $teb,$tec,$ted,$tee,$tef,$teg,$teh;
}
$tda="";
}
else if($tde.equals(m$t3v.Character(91,true))) {
$td6.removeChild($td8);
if(!m$t3v.$eq$($tda,"")){
$td6.appendChild(Text($tda));
}
var $tei=Text($tdc.string);
$td6.appendChild($tei);
var $tej;
if(m$t3v.nn$(($tej=$td7))){
var $tek=($tel=$tei,$tem=$tdc,$ten=(1),$teo=$tej,$tep=null,Delimiter($tel,$tem,$ten,$teo,$tep,undefined,undefined,undefined));
var $tel,$tem,$ten,$teo,$tep;
($tej.next=$tek);
$td7=$tek;
}
else{
$td7=($teq=$tei,$ter=$tdc,$tes=(1),$tet=null,$teu=null,Delimiter($teq,$ter,$tes,$tet,$teu,undefined,undefined,undefined));
var $teq,$ter,$tes,$tet,$teu;
}
$tda="";
}
else if($tde.equals(m$t3v.Character(33,true))) {
$td6.removeChild($td8);
if(!m$t3v.$eq$($tda,"")){
$td6.appendChild(Text($tda));
}
var $tev;
if(m$t3v.nn$(($tev=$td9.$_get($tdb.plus(1))))&&m$t3v.$eq$($tev,m$t3v.Character(91,true))){
var $tew=Text("![");
$td6.appendChild($tew);
($tex=$tdb,$tdb=$tex.successor,$tex);
var $tex;
var $tey;
if(m$t3v.nn$(($tey=$td7))){
var $tez=($tf0=$tew,$tf1=$tdc,$tf2=$tey.numOfDelimiters.plus(1),$tf3=$tey,$tf4=null,Delimiter($tf0,$tf1,$tf2,$tf3,$tf4,undefined,undefined,undefined));
var $tf0,$tf1,$tf2,$tf3,$tf4;
($tey.next=$tez);
$td7=$tez;
}
else{
$td7=($tf5=$tew,$tf6=$tdc,$tf7=(1),$tf8=null,$tf9=null,Delimiter($tf5,$tf6,$tf7,$tf8,$tf9,undefined,undefined,undefined));
var $tf5,$tf6,$tf7,$tf8,$tf9;
}
}
else{
var $tfa=Text("!");
$td6.appendChild($tfa);
}
$tda="";
}
else if($tde.equals(m$t3v.Character(93,true))) {
$td6.removeChild($td8);
var $tfb=$td7;
var $tfc;
while(m$t3v.nn$(($tfc=$tfb))){
var $tfd=false,$tfe=(function(){var $tff=$tfc;var $tfg=m$t3v.$eq$($tff.delimiterChar,m$t3v.Character(91,true));
var $tfh=m$t3v.$eq$($tff.delimiterChar,m$t3v.Character(33,true));
if(((m$t3v.$eq$($tff.delimiterChar,m$t3v.Character(91,true))||m$t3v.$eq$($tff.delimiterChar,m$t3v.Character(33,true)))&&!$tff.active)){
$td7=removeLastBracket($tff,$td7);
$tfb=null;
$tfd=true;return;
}
else{
if(($tfg||$tfh)){
var $tfi;
if(m$t3v.nn$(($tfi=$td9.$_get($tdb.plus(1))))&&m$t3v.$eq$($tfi,m$t3v.Character(40,true))){
var $tfj=$tdb;
($tfk=$tdb,$tdb=$tfk.successor,$tfk);
var $tfk;
var $tfl=$td9.spanFrom($tdb.plus(1));
var $tfm="";
var $tfn="";
var $tfo=linkDestinationBraces().find($tfl);
var $tfp=linkDestination().find($tfl);
var $tfq;
if(m$t3v.nn$(($tfq=$tfo))){
$tfm=$tfq.matched.replaceFirst("<","").replaceLast(">","");
$tfl=$tfl.spanFrom($tfq.end);
($tdb=$tdb.plus($tfq.end));
var $tfr;
if(m$t3v.nn$(($tfr=spnl().find($tfl)))){
($tdb=$tdb.plus($tfr.end));
$tfl=$tfl.spanFrom($tfr.end);
}
}
else{
var $tfs;
if(m$t3v.nn$(($tfs=$tfp))){
$tfm=$tfs.matched;
$tfl=$tfl.spanFrom($tfs.end);
($tdb=$tdb.plus($tfs.end));
var $tft;
if(m$t3v.nn$(($tft=spnl().find($tfl)))){
($tdb=$tdb.plus($tft.end));
$tfl=$tfl.spanFrom($tft.end);
}
}
}
var $tfu=linkTitlePattern().find($tfl);
if(!m$t3v.$eq$($tfm,"")){
var $tfv;
if(m$t3v.nn$(($tfv=$tfu))){
$tfn=$tfv.matched.span(1,$tfv.end.minus(2));
$tfl=$tfl.spanFrom($tfv.end);
($tdb=$tdb.plus($tfv.end));
var $tfw;
if(m$t3v.nn$(($tfw=spnl().find($tfl)))){
($tdb=$tdb.plus($tfw.end));
$tfl=$tfl.spanFrom($tfw.end);
}
}
}
if($tfl.trimmed.startsWith(")")){
var $tfx;
if($tfg){
$tfx=Link(unescapeString($tfm),unescapeString($tfn));
}
else{
$tfx=Image(unescapeString($tfm),unescapeString($tfn));
}
var $tfy=($tfz=$td6.children.firstIndexWhere(m$t3v.jsc$2((function($tg0){return m$t3v.$eq$($tg0,$tff.node);
}),[{nm:'element',mt:'prm',$t:{t:Node}}],{Arguments$Callable:m$t3v.mtt$([{t:Node}]),Return$Callable:{t:m$t3v.$_Boolean}})),m$t3v.nn$($tfz)?$tfz:(0));
var $tfz;
($tg1=$tfx,$tg1.children=$td6.children.spanFrom($tfy.plus(1)),$tg1.children);
var $tg1;
($tg2=$td6,$tg2.children=$td6.children.spanTo($tfy),$tg2.children);
var $tg2;
$td6.appendChild($tfx);
if(!m$t3v.$eq$($tda,"")){
$tfx.appendChild(Text($tda));
}
if($tfg){
var $tg3=$tff;
var $tg4;
while(m$t3v.nn$(($tg4=$tg3))){
if(m$t3v.$eq$($tg4.delimiterChar,m$t3v.Character(91,true))){
($tg4.active=false);
}
$tg3=$tg4.previous;
}
}
$td6.removeChild($tff.node);
processEmphasis($tfx,$tff,$td7);
$td7=removeLastBracket($tff,$td7);
($tg5=$tdb,$tdb=$tg5.successor,$tg5);
var $tg5;
}
else{
if(!m$t3v.$eq$($tda,"")){
$td6.appendChild(Text($tda));
}
$td6.appendChild(Text($tdc.string));
$tdb=$tfj;
}
}
else{
var $tg6;
if(m$t3v.nn$(($tg6=referenceMap().$_get(normalizeReference($tda))))){
var $tg7;
if($tfg){
$tg7=Link($tg6.destination,$tg6.title);
}
else{
$tg7=Image($tg6.destination,$tg6.title);
}
$td6.appendChild($tg7);
$tg7.appendChild(Text($tda));
$td6.removeChild($tff.node);
processEmphasis($tg7,$tff,$td7);
$td7=removeLastBracket($tff,$td7);
if($tfg){
var $tg8=$tff;
var $tg9;
while(m$t3v.nn$(($tg9=$tg8))){
if(m$t3v.$eq$($tg9.delimiterChar,m$t3v.Character(91,true))){
($tg9.active=false);
}
$tg8=$tg9.previous;
}
}
}
else{
var $tga;
if(m$t3v.nn$(($tga=linkLabelPattern().find($td9.spanFrom($tdb.plus(1)))))){
var $tgb=$tga.matched.span(1,$tga.end.minus(2));
var $tgc;
if(m$t3v.nn$(($tgc=referenceMap().$_get(normalizeReference($tgb))))){
var $tgd;
if($tfg){
$tgd=Link($tgc.destination,$tgc.title);
}
else{
$tgd=Image($tgc.destination,$tgc.title);
}
$td6.appendChild($tgd);
$tgd.appendChild(Text($tda));
$td6.removeChild($tff.node);
processEmphasis($tgd,$tff,$td7);
$td7=removeLastBracket($tff,$td7);
if($tfg){
var $tge=$tff;
var $tgf;
while(m$t3v.nn$(($tgf=$tge))){
if(m$t3v.$eq$($tgf.delimiterChar,m$t3v.Character(91,true))){
($tgf.active=false);
}
$tge=$tgf.previous;
}
}
($tdb=$tdb.plus($tga.end));
}
else{
$td7=removeLastBracket($tff,$td7);
if(!m$t3v.$eq$($tda,"")){
$td6.appendChild(Text($tda));
}
$td6.appendChild(Text($tdc.string));
}
}
else{
$td7=removeLastBracket($tff,$td7);
$tfb=null;
}
}
}
$tfd=true;return;
}
else{
$tfb=$tff.previous;
}
}
}());if($tfe!==undefined){return $tfe;}else if($tfd){break;}
}
if(!m$t3v.nn$($tfb)){
if(!m$t3v.$eq$($tda,"")){
$td6.appendChild(Text($tda));
}
$td6.appendChild(Text($tdc.string));
}
$tda="";
}
else if($tde.equals(m$t3v.Character(60,true))) {
$td6.removeChild($td8);
if(!m$t3v.$eq$($tda,"")){
$td6.appendChild(Text($tda));
}
var $tgg;
var $tgh;
if(m$t3v.nn$(($tgh=emailAutoLink().find($td9.spanFrom($tdb))))){
$tgg=$tgh.matched.span(1,$tgh.end.minus(2));
var $tgi=Link("mailto:".plus($tgg));
$tgi.appendChild(Text($tgg));
$td6.appendChild($tgi);
($tdb=$tdb.plus($tgh.end.minus(1)));
}
else{
var $tgj;
if(m$t3v.nn$(($tgj=autoLink().find($td9.spanFrom($tdb))))){
$tgg=$tgj.matched.span(1,$tgj.end.minus(2));
var $tgk=Link($tgg);
$tgk.appendChild(Text($tgg));
$td6.appendChild($tgk);
($tdb=$tdb.plus($tgj.end.minus(1)));
}
else{
var $tgl;
if(m$t3v.nn$(($tgl=reHtmlTag().find($td9.spanFrom($tdb))))){
var $tgm=HtmlInline($tgl.matched);
$td6.appendChild($tgm);
($tdb=$tdb.plus($tgl.end.minus(1)));
}
else{
$td6.appendChild(Text($tdc.string));
}
}
}
$tda="";
}
else if($tde.equals(m$t3v.Character(38,true))) {
$td6.removeChild($td8);
if(!m$t3v.$eq$($tda,"")){
$td6.appendChild(Text($tda));
}
var $tgn;
if(m$t3v.nn$(($tgn=reEntityHere().find($td9.spanFrom($tdb))))){
($tdb=$tdb.plus($tgn.end.minus(1)));
$td6.appendChild(Text($tgn.matched));
}
else{
$td6.appendChild(Text($tdc.string));
}
$tda="";
}
else{
($tda=$tda.plus($tdc.string));
}//End switch statement at inlineParser.ceylon (96:3-544:3)
($tgo=$tdb,$tdb=$tgo.successor,$tgo);
var $tgo;
}
if(!m$t3v.$eq$($tda,$td9)&&!m$t3v.$eq$($tda,"")){
$td6.appendChild(Text($tda));
}
processEmphasis($td6,null,$td7);
}
//'for' statement at inlineParser.ceylon (556:1-558:1)
var $tgq;for(var $tgp=$td5.children.iterator();($tgq=$tgp.next())!==m$t3v.finished();){
parseInlines($tgq,$td5);
}
};parseInlines.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$t3v.Anything},ps:[{nm:'node',mt:'prm',$t:{t:Node}},{nm:'parent',mt:'prm',$t:{t:Node}}],d:['ceylon.markdown.core','parseInlines']};};
//MethodDef inlineParser at inlineParser.ceylon (561:0-567:0)
function inlineParser($tgr){
parseReference($tgr);
parseInlines($tgr,$tgr);
return $tgr;
};inlineParser.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Document},ps:[{nm:'document',mt:'prm',$t:{t:Document}}],d:['ceylon.markdown.core','inlineParser']};};
//MethodDef scanDelimiters at inlineParser.ceylon (569:0-609:0)
function scanDelimiters($tgs,$tgt,$tgu){
var $tgv=(0);
var $tgw=$tgt;
var $tgx;
while(m$t3v.nn$(($tgx=$tgs.$_get($tgt)))&&m$t3v.$eq$($tgx,$tgu)){
($tgy=$tgv,$tgv=$tgy.successor,$tgy);
var $tgy;
($tgz=$tgt,$tgt=$tgz.successor,$tgz);
var $tgz;
}
var $th0=($th1=(($tgw==(0))?"\n":null),m$t3v.nn$($th1)?$th1:$tgs.span($tgw.minus(1),$tgw));
var $th1;
var $th2=($th3=$tgs.$_get($tgt),m$t3v.nn$($th3)?$th3:m$t3v.Character(10,true));
var $th3;
var $th4=$th2.string;
var $th5=punctuation().test($th0);
var $th6=unicodeWhitespaceChar().test($th0);
var $th7=punctuation().test($th4);
var $th8=unicodeWhitespaceChar().test($th4);
var $th9=(!$th8&&(!(($th7&&!$th6)&&!$th5)));
var $tha=(!$th6&&(!(($th5&&!$th8)&&!$th7)));
var $thb;
var $thc;
if(m$t3v.$eq$($tgu,m$t3v.Character(95,true))){
$thb=($th9&&(!$tha||$th5));
$thc=($tha&&(!$th9||$th7));
}
else{
$thb=$th9;
$thc=$tha;
}
return m$t3v.tpl$([$tgv,$thb,$thc]);
};scanDelimiters.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'T',l:[{t:m$t3v.Integer},{t:m$t3v.$_Boolean},{t:m$t3v.$_Boolean}]},ps:[{nm:'text',mt:'prm',$t:{t:m$t3v.$_String}},{nm:'index',mt:'prm',$t:{t:m$t3v.Integer}},{nm:'delimiterChar',mt:'prm',$t:{t:m$t3v.Character}}],d:['ceylon.markdown.core','scanDelimiters']};};
//MethodDef processEmphasis at inlineParser.ceylon (611:0-708:0)
function processEmphasis($thd,$the,$thf){
var $thg;
var $thh;
var $thi;
var $thj;
var $thk;
if(m$t3v.nn$(($thk=$the))){
$thg=$thk.next;
}
else{
var $thl=null;
var $thm;
while(m$t3v.nn$(($thm=$thf))&&(m$t3v.$eq$($thm.delimiterChar,m$t3v.Character(42,true))||m$t3v.$eq$($thm.delimiterChar,m$t3v.Character(95,true)))){
$thl=$thm;
$thf=$thm.previous;
}
$thg=$thl;
}
var $thn=($tho=m$t3v.$arr$sa$([m$t3v.Entry(m$t3v.Character(42,true),$the,{Item$Entry:m$t3v.mut$([{t:m$t3v.Null},{t:Delimiter}]),Key$Entry:{t:m$t3v.Character}}),m$t3v.Entry(m$t3v.Character(95,true),$the,{Item$Entry:m$t3v.mut$([{t:m$t3v.Null},{t:Delimiter}]),Key$Entry:{t:m$t3v.Character}})],{t:m$t3v.Entry,a:{Item$Entry:m$t3v.mut$([{t:m$t3v.Null},{t:Delimiter}]),Key$Entry:{t:m$t3v.Character}}},1),m$t40.HashMap(undefined,undefined,$tho,{Key$HashMap:{t:m$t3v.Character},Item$HashMap:m$t3v.mut$([{t:m$t3v.Null},{t:Delimiter}])}));
var $tho;
var $thp;
while(m$t3v.nn$(($thp=$thg))){
var $thq=(function(){var $thr=$thp;var $ths=$thr.delimiterChar;
if(!$thr.canClose){
$thg=$thr.next;
}
else{
$thh=$thr.previous;
var $tht=false;
var $thu;
while(m$t3v.nn$(($thu=$thh))&&function(){var $thv;
if(m$t3v.nn$(($thv=$thn.$_get($ths))))return !m$t3v.$eq$($thu,$thv);else return true}()&&function(){var $thw;
if(m$t3v.nn$(($thw=$the)))return !m$t3v.$eq$($thu,$thw);else return true}()){
if((m$t3v.$eq$($thu.delimiterChar,$thr.delimiterChar)&&$thu.canOpen)){
$tht=true;
break;
}
$thh=$thu.previous;
}
$thj=$thr;
var $thx;
if(m$t3v.nn$(($thx=$thh))&&(m$t3v.$eq$($ths,m$t3v.Character(42,true))||m$t3v.$eq$($ths,m$t3v.Character(95,true)))){
var $thy=(function(){var $thz=$thx;if(!$tht){
$thg=$thr.next;
}
else{
if((($thr.numOfDelimiters<3)||($thz.numOfDelimiters<3))){
$thi=($ti0=(($thr.numOfDelimiters<=$thz.numOfDelimiters)?$thr.numOfDelimiters:null),m$t3v.nn$($ti0)?$ti0:$thz.numOfDelimiters);
var $ti0;
}
else{
$thi=($ti1=(($thr.numOfDelimiters.remainder(2)==(0))?2:null),m$t3v.nn$($ti1)?$ti1:(1));
var $ti1;
}
($ti2=$thz,$ti2.numOfDelimiters=$ti2.numOfDelimiters.minus($thi));
var $ti2;
($ti3=$thr,$ti3.numOfDelimiters=$ti3.numOfDelimiters.minus($thi));
var $ti3;
($thz.node.text=$thz.node.text.spanTo($thz.node.text.size.minus($thi)));
($thr.node.text=$thr.node.text.spanTo($thr.node.text.size.minus($thi)));
var $ti4=($ti5=(($thi==(1))?Emphasis():null),m$t3v.nn$($ti5)?$ti5:StrongEmphasis());
var $ti5;
var $ti6=($ti7=$thd.children.firstIndexWhere(m$t3v.jsc$2((function($ti8){return m$t3v.$eq$($ti8,$thz.node);
}),[{nm:'element',mt:'prm',$t:{t:Node}}],{Arguments$Callable:m$t3v.mtt$([{t:Node}]),Return$Callable:{t:m$t3v.$_Boolean}})),m$t3v.nn$($ti7)?$ti7:(0));
var $ti7;
var $ti9=($tia=$thd.children.firstIndexWhere(m$t3v.jsc$2((function($tib){return m$t3v.$eq$($tib,$thr.node);
}),[{nm:'element',mt:'prm',$t:{t:Node}}],{Arguments$Callable:m$t3v.mtt$([{t:Node}]),Return$Callable:{t:m$t3v.$_Boolean}})),m$t3v.nn$($tia)?$tia:(0));
var $tia;
($tic=$ti4,$tic.children=$thd.children.span($ti6.plus(1),$ti9.minus(1)),$tic.children);
var $tic;
var $tid=$thd.children.spanFrom($ti9.plus(1));
($tie=$thd,$tie.children=$thd.children.spanTo($ti6.minus(1)),$tie.children);
var $tie;
$thd.appendChild($ti4);
//'for' statement at inlineParser.ceylon (682:5-684:5)
var $tig;for(var $tif=$tid.iterator();($tig=$tif.next())!==m$t3v.finished();){
$thd.appendChild($tig);
}
removeDelimitersBetween($thz,$thr);
if(($thz.numOfDelimiters==(0))){
$thd.removeChild($thz.node);
removeLastBracket($thz,$thf);
}
if(($thr.numOfDelimiters==(0))){
$thd.removeChild($thr.node);
$thg=$thr.next;
removeLastBracket($thr,$thf);
}
}
if(!$tht){
$thn.put($ths,$thj.previous);
if(!$thj.canOpen){
$thf=removeLastBracket($thj,$thf);
}
}
}());if($thy!==undefined){return $thy;}
}
}
}());if($thq!==undefined){return $thq;}
}
};processEmphasis.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$t3v.Anything},ps:[{nm:'parent',mt:'prm',$t:{t:Node}},{nm:'stackBottom',mt:'prm',$t:{t:'u',l:[{t:m$t3v.Null},{t:Delimiter}]}},{nm:'lastDelimiter',mt:'prm',$t:{t:'u',l:[{t:m$t3v.Null},{t:Delimiter}]}}],d:['ceylon.markdown.core','processEmphasis']};};
//MethodDef removeDelimitersBetween at inlineParser.ceylon (710:0-715:0)
function removeDelimitersBetween($tih,$tii){
var $tij;
if(m$t3v.nn$(($tij=$tih.next))&&!m$t3v.$eq$($tij,$tii)){
($tih.next=$tii);
($tii.previous=$tih);
}
};removeDelimitersBetween.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$t3v.Anything},ps:[{nm:'opener',mt:'prm',$t:{t:Delimiter}},{nm:'closer',mt:'prm',$t:{t:Delimiter}}],d:['ceylon.markdown.core','removeDelimitersBetween']};};
//MethodDef removeLastBracket at inlineParser.ceylon (717:0-734:0)
function removeLastBracket($tik,$til){
var $tim,$tin;
if(m$t3v.nn$(($tim=$tik.previous))&&m$t3v.nn$(($tin=$tik.next))){
($tim.next=$tik.next);
($tin.previous=$tim);
}
else{
var $tio;
if(m$t3v.nn$(($tio=$tik.previous))){
($tio.next=null);
}
else{
var $tip;
if(m$t3v.nn$(($tip=$tik.next))){
($tip.previous=null);
}
else{
$til=null;
}
}
}
var $tiq;
if(m$t3v.nn$(($tiq=$til))&&m$t3v.$eq$($tik,$tiq)){
$til=$tiq.previous;
}
return $til;
};removeLastBracket.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$t3v.Null},{t:Delimiter}]},ps:[{nm:'del',mt:'prm',$t:{t:Delimiter}},{nm:'lastDelimiter',mt:'prm',$t:{t:'u',l:[{t:m$t3v.Null},{t:Delimiter}]}}],d:['ceylon.markdown.core','removeLastBracket']};};
//MethodDecl normalizeReference at inlineParser.ceylon (736:0-737:48)
function normalizeReference($tir){return whitespace().$_replace($tir.trimmed.lowercased," ");
};
normalizeReference.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$t3v.$_String},ps:[{nm:'str',mt:'prm',$t:{t:m$t3v.$_String}}],d:['ceylon.markdown.core','normalizeReference']};};
//MethodDef unescapeString at inlineParser.ceylon (739:0-758:0)
function unescapeString($tis){
var $tit=m$t3v.StringBuilder();
var $tiu=(0);
//'for' statement at inlineParser.ceylon (743:1-751:1)
var $tiw;for(var $tiv=reEntityOrEscapedChar().findAll($tis).iterator();($tiw=$tiv.next())!==m$t3v.finished();){
$tit.append((!m$t3v.$eq$($tiu,$tiw.start)?$tis.span($tiu,$tiw.start.minus(1)):""));
if($tiw.matched.startsWith("\\")){
$tit.append($tiw.matched.spanFrom(1));
}
$tiu=$tiw.end;
}
if(!m$t3v.$eq$($tiu,$tis.size)){
$tit.append($tis.spanFrom($tiu));
}
return $tit.string;
};unescapeString.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$t3v.$_String},ps:[{nm:'str',mt:'prm',$t:{t:m$t3v.$_String}}],d:['ceylon.markdown.core','unescapeString']};};

//ClassDef SoftBreak at SoftBreak.ceylon (1:0-5:0)
function SoftBreak(softBreak$){
$init$SoftBreak();
if(softBreak$===undefined)softBreak$=new SoftBreak.$$;
Node(softBreak$);
//AttributeDecl children at SoftBreak.ceylon (2:1-2:44)
softBreak$.$c50l24$tjr_=m$t3v.empty();
return softBreak$;
}
SoftBreak.$crtmm$=function(){return{mod:$CCMM$,'super':{t:Node},ps:[],pa:1,d:['ceylon.markdown.core','SoftBreak']};};
ex$.SoftBreak=SoftBreak;
function $init$SoftBreak(){
if(SoftBreak.$$===undefined){
m$t3v.initTypeProto(SoftBreak,'ceylon.markdown.core::SoftBreak',$init$Node());
(function(softBreak$){
//AttributeDecl children at SoftBreak.ceylon (2:1-2:44)
m$t3v.atr$(softBreak$,'children',function(){return this.$c50l24$tjr_;},function($tjs){return this.$c50l24$tjr_=$tjs;},function(){return{mod:$CCMM$,$t:{t:m$t3v.Sequential,a:{Element$Sequential:{t:Node}}},$cont:SoftBreak,pa:1027,d:['ceylon.markdown.core','SoftBreak','$at','children']};});
//MethodDecl accept at SoftBreak.ceylon (4:1-4:87)
softBreak$.accept=function($tjt,$u1dyhx$){var softBreak$=this;
return $tjt.visitSoftBreak(softBreak$);
};
softBreak$.accept.$crtmm$=function(){return{mod:$CCMM$,$t:'Type$accept',ps:[{nm:'visitor',mt:'prm',$t:{t:Visitor,a:{Type$Visitor:'Type$accept'}}}],$cont:SoftBreak,tp:{Type$accept:{}},pa:3,d:['ceylon.markdown.core','SoftBreak','$m','accept']};};
})(SoftBreak.$$.prototype);
}
return SoftBreak;
}
ex$.$init$SoftBreak=$init$SoftBreak;
$init$SoftBreak();

//ClassDef Text at Text.ceylon (1:0-5:0)
function Text(text,text$){
$init$Text();
if(text$===undefined)text$=new Text.$$;
text$.text_=text;
Node(text$);
//AttributeDecl children at Text.ceylon (2:1-2:44)
text$.$c50l24$tnb_=m$t3v.empty();
return text$;
}
Text.$crtmm$=function(){return{mod:$CCMM$,'super':{t:Node},ps:[{nm:'text',mt:'prm',$t:{t:m$t3v.$_String},pa:1025}],pa:1,d:['ceylon.markdown.core','Text']};};
ex$.Text=Text;
function $init$Text(){
if(Text.$$===undefined){
m$t3v.initTypeProto(Text,'ceylon.markdown.core::Text',$init$Node());
(function(text$){
m$t3v.atr$(text$,'text',function(){return this.text_;},function($tnc){return this.text_=$tnc;},function(){return{mod:$CCMM$,$t:{t:m$t3v.$_String},$cont:Text,pa:1025,d:['ceylon.markdown.core','Text','$at','text']};});
//AttributeDecl children at Text.ceylon (2:1-2:44)
m$t3v.atr$(text$,'children',function(){return this.$c50l24$tnb_;},function($tnd){return this.$c50l24$tnb_=$tnd;},function(){return{mod:$CCMM$,$t:{t:m$t3v.Sequential,a:{Element$Sequential:{t:Node}}},$cont:Text,pa:1027,d:['ceylon.markdown.core','Text','$at','children']};});
//MethodDecl accept at Text.ceylon (4:1-4:82)
text$.accept=function($tne,$r18lln$){var text$=this;
return $tne.visitText(text$);
};
text$.accept.$crtmm$=function(){return{mod:$CCMM$,$t:'Type$accept',ps:[{nm:'visitor',mt:'prm',$t:{t:Visitor,a:{Type$Visitor:'Type$accept'}}}],$cont:Text,tp:{Type$accept:{}},pa:3,d:['ceylon.markdown.core','Text','$m','accept']};};
})(Text.$$.prototype);
}
return Text;
}
ex$.$init$Text=$init$Text;
$init$Text();

//ClassDef Document at Document.ceylon (1:0-5:0)
function Document(document$){
$init$Document();
if(document$===undefined)document$=new Document.$$;
Block(undefined,document$);
//AttributeDecl children at Document.ceylon (2:1-2:44)
document$.$c50l24$tnf_=m$t3v.empty();
return document$;
}
Document.$crtmm$=function(){return{mod:$CCMM$,'super':{t:Block},ps:[],pa:1,d:['ceylon.markdown.core','Document']};};
ex$.Document=Document;
function $init$Document(){
if(Document.$$===undefined){
m$t3v.initTypeProto(Document,'ceylon.markdown.core::Document',$init$Block());
(function(document$){
//AttributeDecl children at Document.ceylon (2:1-2:44)
m$t3v.atr$(document$,'children',function(){return this.$c50l24$tnf_;},function($tng){return this.$c50l24$tnf_=$tng;},function(){return{mod:$CCMM$,$t:{t:m$t3v.Sequential,a:{Element$Sequential:{t:Node}}},$cont:Document,pa:1027,d:['ceylon.markdown.core','Document','$at','children']};});
//MethodDecl accept at Document.ceylon (4:1-4:86)
document$.accept=function($tnh,$cv2k8n$){var document$=this;
return $tnh.visitDocument(document$);
};
document$.accept.$crtmm$=function(){return{mod:$CCMM$,$t:'Type$accept',ps:[{nm:'visitor',mt:'prm',$t:{t:Visitor,a:{Type$Visitor:'Type$accept'}}}],$cont:Document,tp:{Type$accept:{}},pa:3,d:['ceylon.markdown.core','Document','$m','accept']};};
})(Document.$$.prototype);
}
return Document;
}
ex$.$init$Document=$init$Document;
$init$Document();

//ClassDef Code at Code.ceylon (1:0-11:0)
function Code(text,code$){
$init$Code();
if(code$===undefined)code$=new Code.$$;
code$.text_=text;
Node(code$);
//AttributeDecl children at Code.ceylon (8:1-8:44)
code$.$c50l24$tni_=m$t3v.empty();
return code$;
}
Code.$crtmm$=function(){return{mod:$CCMM$,'super':{t:Node},ps:[{nm:'text',mt:'prm',$t:{t:m$t3v.$_String},pa:1025}],pa:1,an:function(){return[m$t3v.doc$($CCMM$,'ceylon.markdown.core:Code')];},d:['ceylon.markdown.core','Code']};};
ex$.Code=Code;
function $init$Code(){
if(Code.$$===undefined){
m$t3v.initTypeProto(Code,'ceylon.markdown.core::Code',$init$Node());
(function(code$){
m$t3v.atr$(code$,'text',function(){return this.text_;},function($tnj){return this.text_=$tnj;},function(){return{mod:$CCMM$,$t:{t:m$t3v.$_String},$cont:Code,pa:1025,d:['ceylon.markdown.core','Code','$at','text']};});
//AttributeDecl children at Code.ceylon (8:1-8:44)
m$t3v.atr$(code$,'children',function(){return this.$c50l24$tni_;},function($tnk){return this.$c50l24$tni_=$tnk;},function(){return{mod:$CCMM$,$t:{t:m$t3v.Sequential,a:{Element$Sequential:{t:Node}}},$cont:Code,pa:1027,d:['ceylon.markdown.core','Code','$at','children']};});
//MethodDecl accept at Code.ceylon (10:1-10:82)
code$.accept=function($tnl,$s3s26z$){var code$=this;
return $tnl.visitCode(code$);
};
code$.accept.$crtmm$=function(){return{mod:$CCMM$,$t:'Type$accept',ps:[{nm:'visitor',mt:'prm',$t:{t:Visitor,a:{Type$Visitor:'Type$accept'}}}],$cont:Code,tp:{Type$accept:{}},pa:3,d:['ceylon.markdown.core','Code','$m','accept']};};
})(Code.$$.prototype);
}
return Code;
}
ex$.$init$Code=$init$Code;
$init$Code();

//ClassDef Image at Image.ceylon (1:0-5:0)
function Image(destination,title,image$){
$init$Image();
if(image$===undefined)image$=new Image.$$;
image$.destination_=destination;
if(title===undefined){title=$init$Image().$defs$title(image$,destination);}
image$.title_=title;
Node(image$);
//AttributeDecl children at Image.ceylon (2:1-2:44)
image$.$c50l24$tnm_=m$t3v.empty();
return image$;
}
Image.$defs$title=function(image$,destination){return ""};Image.$crtmm$=function(){return{mod:$CCMM$,'super':{t:Node},ps:[{nm:'destination',mt:'prm',$t:{t:m$t3v.$_String},pa:1},{nm:'title',mt:'prm',def:1,$t:{t:m$t3v.$_String},pa:1}],pa:1,d:['ceylon.markdown.core','Image']};};
ex$.Image=Image;
function $init$Image(){
if(Image.$$===undefined){
m$t3v.initTypeProto(Image,'ceylon.markdown.core::Image',$init$Node());
(function(image$){
m$t3v.atr$(image$,'destination',function(){return this.destination_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$t3v.$_String},$cont:Image,pa:1,d:['ceylon.markdown.core','Image','$at','destination']};});
m$t3v.atr$(image$,'title',function(){return this.title_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$t3v.$_String},$cont:Image,pa:1,d:['ceylon.markdown.core','Image','$at','title']};});
//AttributeDecl children at Image.ceylon (2:1-2:44)
m$t3v.atr$(image$,'children',function(){return this.$c50l24$tnm_;},function($tnn){return this.$c50l24$tnm_=$tnn;},function(){return{mod:$CCMM$,$t:{t:m$t3v.Sequential,a:{Element$Sequential:{t:Node}}},$cont:Image,pa:1027,d:['ceylon.markdown.core','Image','$at','children']};});
//MethodDecl accept at Image.ceylon (4:1-4:83)
image$.accept=function($tno,$dal8w1$){var image$=this;
return $tno.visitImage(image$);
};
image$.accept.$crtmm$=function(){return{mod:$CCMM$,$t:'Type$accept',ps:[{nm:'visitor',mt:'prm',$t:{t:Visitor,a:{Type$Visitor:'Type$accept'}}}],$cont:Image,tp:{Type$accept:{}},pa:3,d:['ceylon.markdown.core','Image','$m','accept']};};
})(Image.$$.prototype);
}
return Image;
}
ex$.$init$Image=$init$Image;
$init$Image();
ex$.$pkg$ans$ceylon$markdown$core=function(){return[m$t3v.suppressWarnings(m$t3v.$arr$sa$(["ceylonNamespace"],{t:m$t3v.$_String})),m$t3v.shared()];};
ex$.$pkgunsh$ceylon$markdown$core={'escapable':$prop$getEscapable,'whitespace':$prop$getWhitespace,'escapedChar':$prop$getEscapedChar,'regChar':$prop$getRegChar,'inParensNoSP':$prop$getInParensNoSP,'spnl':$prop$getSpnl,'ticksHere':$prop$getTicksHere,'reTicks':$prop$getReTicks,'linkLabel':$prop$getLinkLabel,'linkLabelPattern':$prop$getLinkLabelPattern,'linkReferencePattern':$prop$getLinkReferencePattern,'linkTitlePattern':$prop$getLinkTitlePattern,'linkDestinationBraces':$prop$getLinkDestinationBraces,'linkDestination':$prop$getLinkDestination,'tagName':$prop$getTagName,'attributeName':$prop$getAttributeName,'unQuotedValue':$prop$getUnQuotedValue,'singleQuotedValue':$prop$getSingleQuotedValue,'doubleQuotedValue':$prop$getDoubleQuotedValue,'attributeValue':$prop$getAttributeValue,'attributeValueSpec':$prop$getAttributeValueSpec,'attribute':$prop$getAttribute,'openTag':$prop$getOpenTag,'closeTag':$prop$getCloseTag,'atxHeadingPattern':$prop$getAtxHeadingPattern,'atxTrailingPattern':$prop$getAtxTrailingPattern,'orderedListPattern':$prop$getOrderedListPattern,'bulletListPattern':$prop$getBulletListPattern,'setextHeadingPattern':$prop$getSetextHeadingPattern,'fencedCodeblockPattern':$prop$getFencedCodeblockPattern,'closingCodeblockPattern':$prop$getClosingCodeblockPattern,'thematicBreakPattern':$prop$getThematicBreakPattern,'htmlBlockOpen':$prop$getHtmlBlockOpen,'htmlBlockClose':$prop$getHtmlBlockClose,'asciiPunctuation':$prop$getAsciiPunctuation,'punctuation':$prop$getPunctuation,'unicodeWhitespaceChar':$prop$getUnicodeWhitespaceChar,'emailAutoLink':$prop$getEmailAutoLink,'autoLink':$prop$getAutoLink,'htmlComment':$prop$getHtmlComment,'processingInstruction':$prop$getProcessingInstruction,'declaration':$prop$getDeclaration,'cData':$prop$getCData,'htmlTag':$prop$getHtmlTag,'reHtmlTag':$prop$getReHtmlTag,'reEscapable':$prop$getReEscapable,'entity':$prop$getEntity,'reEntityHere':$prop$getReEntityHere,'reEntityOrEscapedChar':$prop$getReEntityOrEscapedChar,'treeToString':treeToString,'Delimiter':Delimiter,'referenceMap':$prop$getReferenceMap,'parseReference':parseReference,'parseInlines':parseInlines,'inlineParser':inlineParser,'scanDelimiters':scanDelimiters,'processEmphasis':processEmphasis,'removeDelimitersBetween':removeDelimitersBetween,'removeLastBracket':removeLastBracket,'normalizeReference':normalizeReference,'unescapeString':unescapeString,'trimSpaces':trimSpaces,'blankLine':$prop$getBlankLine,'parseLine':parseLine,'sameType':sameType,'sameListType':sameListType,'sameOrderedListType':sameOrderedListType};
});
}(typeof define==='function' && define.amd ? define : function (factory) {
if (typeof exports!=='undefined') { factory(require, exports, module);
} else { throw 'no module loader'; }
}));
