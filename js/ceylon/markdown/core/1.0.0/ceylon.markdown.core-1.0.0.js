(function(define) { define(function(require, ex$, module) {
var $$req$ = require; require = (typeof $$ceylon$require == 'undefined') ? $$req$ : function() { return $$ceylon$require('ceylon/markdown/core/1.0.0/ceylon.markdown.core-1.0.0', $$req$, Array.prototype.slice.call(arguments)); }

var _CTM$;function $CCMM$(){if (_CTM$===undefined)_CTM$=require('ceylon/markdown/core/1.0.0/ceylon.markdown.core-1.0.0-model').$CCMM$;return _CTM$;}
ex$.$CCMM$=$CCMM$;
var m$hkj=require('ceylon/language/1.3.0/ceylon.language-1.3.0');
m$hkj.$addmod$(m$hkj,'ceylon.language/1.3.0');
m$hkj.$addmod$(ex$,'ceylon.markdown.core/1.0.0');
var m$hkk=require('ceylon/regex/1.3.0/ceylon.regex-1.3.0');
m$hkj.$addmod$(m$hkk,'ceylon.regex/1.3.0');
var m$hkl=require('ceylon/collection/1.3.0/ceylon.collection-1.3.0');
m$hkj.$addmod$(m$hkl,'ceylon.collection/1.3.0');
ex$.$mod$ans$=function(){return[m$hkj.doc$($CCMM$,'','$mod-anns'),m$hkj.by(m$hkj.$arr$sa$(["Rohit Mohan"],{t:m$hkj.$_String})),m$hkj.license("https://www.apache.org/licenses/LICENSE-2.0.html"),m$hkj.suppressWarnings(m$hkj.$arr$sa$(["ceylonNamespace"],{t:m$hkj.$_String}))];};
ex$.$mod$imps=function(){return{
'ceylon.regex/1.3.0':[],
'ceylon.collection/1.3.0':[]
};};
var $hkq;function $valinit$$hkq(){if($hkq===m$hkj.INIT$)m$hkj.throwexc(m$hkj.InitializationError("Cyclic initialization trying to read the value of \'escapable\' before it was set"),'6:0-6:64','regex.ceylon');
if($hkq===undefined){$hkq=m$hkj.INIT$;$hkq="[!\"#$%&\'()*+,./:;<=>?@\\[\\\\\\]^_`{|}~-]"};return $hkq;};
function escapable(){return $valinit$$hkq();}
var $prop$getEscapable={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$hkj.$_String},d:['ceylon.markdown.core','escapable']};}};
ex$.$prop$getEscapable=$prop$getEscapable;
$prop$getEscapable.get=escapable;
var $hkr;function $valinit$$hkr(){if($hkr===m$hkj.INIT$)m$hkj.throwexc(m$hkj.InitializationError("Cyclic initialization trying to read the value of \'whitespace\' before it was set"),'8:0-8:44','regex.ceylon');
if($hkr===undefined){$hkr=m$hkj.INIT$;$hkr=m$hkk.regex("[ \t\r\n]+",true)};return $hkr;};
function whitespace(){return $valinit$$hkr();}
var $prop$getWhitespace={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$hkk.Regex},d:['ceylon.markdown.core','whitespace']};}};
ex$.$prop$getWhitespace=$prop$getWhitespace;
$prop$getWhitespace.get=whitespace;
var $hks;function $valinit$$hks(){if($hks===m$hkj.INIT$)m$hkj.throwexc(m$hkj.InitializationError("Cyclic initialization trying to read the value of \'escapedChar\' before it was set"),'10:0-10:39','regex.ceylon');
if($hks===undefined){$hks=m$hkj.INIT$;$hks="\\\\".plus(escapable())};return $hks;};
function escapedChar(){return $valinit$$hks();}
var $prop$getEscapedChar={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$hkj.$_String},d:['ceylon.markdown.core','escapedChar']};}};
ex$.$prop$getEscapedChar=$prop$getEscapedChar;
$prop$getEscapedChar.get=escapedChar;
var $hkt;function $valinit$$hkt(){if($hkt===m$hkj.INIT$)m$hkj.throwexc(m$hkj.InitializationError("Cyclic initialization trying to read the value of \'regChar\' before it was set"),'12:0-12:39','regex.ceylon');
if($hkt===undefined){$hkt=m$hkj.INIT$;$hkt="[^\\\\()\\x00-\\x20]"};return $hkt;};
function regChar(){return $valinit$$hkt();}
var $prop$getRegChar={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$hkj.$_String},d:['ceylon.markdown.core','regChar']};}};
ex$.$prop$getRegChar=$prop$getRegChar;
$prop$getRegChar.get=regChar;
var $hku;function $valinit$$hku(){if($hku===m$hkj.INIT$)m$hkj.throwexc(m$hkj.InitializationError("Cyclic initialization trying to read the value of \'inParensNoSP\' before it was set"),'14:0-14:73','regex.ceylon');
if($hku===undefined){$hku=m$hkj.INIT$;$hku="\\((".plus(regChar()).plus("|").plus(escapedChar()).plus("|\\\\)*\\)")};return $hku;};
function inParensNoSP(){return $valinit$$hku();}
var $prop$getInParensNoSP={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$hkj.$_String},d:['ceylon.markdown.core','inParensNoSP']};}};
ex$.$prop$getInParensNoSP=$prop$getInParensNoSP;
$prop$getInParensNoSP.get=inParensNoSP;
var $hkv;function $valinit$$hkv(){if($hkv===m$hkj.INIT$)m$hkj.throwexc(m$hkj.InitializationError("Cyclic initialization trying to read the value of \'spnl\' before it was set"),'16:0-16:34','regex.ceylon');
if($hkv===undefined){$hkv=m$hkj.INIT$;$hkv=m$hkk.regex("^ *(?:\n *)?")};return $hkv;};
function spnl(){return $valinit$$hkv();}
var $prop$getSpnl={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$hkk.Regex},d:['ceylon.markdown.core','spnl']};}};
ex$.$prop$getSpnl=$prop$getSpnl;
$prop$getSpnl.get=spnl;
var $hkw;function $valinit$$hkw(){if($hkw===m$hkj.INIT$)m$hkj.throwexc(m$hkj.InitializationError("Cyclic initialization trying to read the value of \'ticksHere\' before it was set"),'18:0-18:30','regex.ceylon');
if($hkw===undefined){$hkw=m$hkj.INIT$;$hkw=m$hkk.regex("^`+")};return $hkw;};
function ticksHere(){return $valinit$$hkw();}
var $prop$getTicksHere={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$hkk.Regex},d:['ceylon.markdown.core','ticksHere']};}};
ex$.$prop$getTicksHere=$prop$getTicksHere;
$prop$getTicksHere.get=ticksHere;
var $hkx;function $valinit$$hkx(){if($hkx===m$hkj.INIT$)m$hkj.throwexc(m$hkj.InitializationError("Cyclic initialization trying to read the value of \'reTicks\' before it was set"),'20:0-20:27','regex.ceylon');
if($hkx===undefined){$hkx=m$hkj.INIT$;$hkx=m$hkk.regex("`+")};return $hkx;};
function reTicks(){return $valinit$$hkx();}
var $prop$getReTicks={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$hkk.Regex},d:['ceylon.markdown.core','reTicks']};}};
ex$.$prop$getReTicks=$prop$getReTicks;
$prop$getReTicks.get=reTicks;
var $hky;function $valinit$$hky(){if($hky===m$hkj.INIT$)m$hkj.throwexc(m$hkj.InitializationError("Cyclic initialization trying to read the value of \'linkLabel\' before it was set"),'22:0-22:78','regex.ceylon');
if($hky===undefined){$hky=m$hkj.INIT$;$hky="^\\[(?:[^\\\\\\[\\]]|".plus(escapedChar()).plus("|\\\\){1,1000}\\]")};return $hky;};
function linkLabel(){return $valinit$$hky();}
var $prop$getLinkLabel={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$hkj.$_String},d:['ceylon.markdown.core','linkLabel']};}};
ex$.$prop$getLinkLabel=$prop$getLinkLabel;
$prop$getLinkLabel.get=linkLabel;
var $hkz;function $valinit$$hkz(){if($hkz===m$hkj.INIT$)m$hkj.throwexc(m$hkj.InitializationError("Cyclic initialization trying to read the value of \'linkLabelPattern\' before it was set"),'24:0-24:41','regex.ceylon');
if($hkz===undefined){$hkz=m$hkj.INIT$;$hkz=m$hkk.regex(linkLabel())};return $hkz;};
function linkLabelPattern(){return $valinit$$hkz();}
var $prop$getLinkLabelPattern={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$hkk.Regex},d:['ceylon.markdown.core','linkLabelPattern']};}};
ex$.$prop$getLinkLabelPattern=$prop$getLinkLabelPattern;
$prop$getLinkLabelPattern.get=linkLabelPattern;
var $hl0;function $valinit$$hl0(){if($hl0===m$hkj.INIT$)m$hkj.throwexc(m$hkj.InitializationError("Cyclic initialization trying to read the value of \'linkReferencePattern\' before it was set"),'26:0-26:51','regex.ceylon');
if($hl0===undefined){$hl0=m$hkj.INIT$;$hl0=m$hkk.regex(linkLabel().plus(":"))};return $hl0;};
function linkReferencePattern(){return $valinit$$hl0();}
var $prop$getLinkReferencePattern={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$hkk.Regex},d:['ceylon.markdown.core','linkReferencePattern']};}};
ex$.$prop$getLinkReferencePattern=$prop$getLinkReferencePattern;
$prop$getLinkReferencePattern.get=linkReferencePattern;
var $hl1;function $valinit$$hl1(){if($hl1===m$hkj.INIT$)m$hkj.throwexc(m$hkj.InitializationError("Cyclic initialization trying to read the value of \'linkTitlePattern\' before it was set"),'28:0-32:45','regex.ceylon');
if($hl1===undefined){$hl1=m$hkj.INIT$;$hl1=m$hkk.regex("^(?:\"(".plus(escapedChar()).plus("|[^\"\\x00])*\"").plus("|").plus("\'(").plus(escapedChar()).plus("|[^\'\\x00])*\'").plus("|").plus("\\((").plus(escapedChar()).plus("|[^)\\x00])*\\))"))};return $hl1;};
function linkTitlePattern(){return $valinit$$hl1();}
var $prop$getLinkTitlePattern={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$hkk.Regex},d:['ceylon.markdown.core','linkTitlePattern']};}};
ex$.$prop$getLinkTitlePattern=$prop$getLinkTitlePattern;
$prop$getLinkTitlePattern.get=linkTitlePattern;
var $hl2;function $valinit$$hl2(){if($hl2===m$hkj.INIT$)m$hkj.throwexc(m$hkj.InitializationError("Cyclic initialization trying to read the value of \'linkDestinationBraces\' before it was set"),'34:0-35:76','regex.ceylon');
if($hl2===undefined){$hl2=m$hkj.INIT$;$hl2=m$hkk.regex("^(?:[<](?:[^ <>\\t\\n\\\\\\x00]".plus("|").plus(escapedChar()).plus("|").plus("\\\\)*[>])"))};return $hl2;};
function linkDestinationBraces(){return $valinit$$hl2();}
var $prop$getLinkDestinationBraces={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$hkk.Regex},d:['ceylon.markdown.core','linkDestinationBraces']};}};
ex$.$prop$getLinkDestinationBraces=$prop$getLinkDestinationBraces;
$prop$getLinkDestinationBraces.get=linkDestinationBraces;
var $hl3;function $valinit$$hl3(){if($hl3===m$hkj.INIT$)m$hkj.throwexc(m$hkj.InitializationError("Cyclic initialization trying to read the value of \'linkDestination\' before it was set"),'37:0-37:101','regex.ceylon');
if($hl3===undefined){$hl3=m$hkj.INIT$;$hl3=m$hkk.regex("^(?:".plus(regChar()).plus("+|").plus(escapedChar()).plus("|\\\\|").plus(inParensNoSP()).plus(")*"))};return $hl3;};
function linkDestination(){return $valinit$$hl3();}
var $prop$getLinkDestination={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$hkk.Regex},d:['ceylon.markdown.core','linkDestination']};}};
ex$.$prop$getLinkDestination=$prop$getLinkDestination;
$prop$getLinkDestination.get=linkDestination;
var $hl4;function $valinit$$hl4(){if($hl4===m$hkj.INIT$)m$hkj.throwexc(m$hkj.InitializationError("Cyclic initialization trying to read the value of \'tagName\' before it was set"),'39:0-39:40','regex.ceylon');
if($hl4===undefined){$hl4=m$hkj.INIT$;$hl4="[A-Za-z][A-Za-z0-9-]*"};return $hl4;};
function tagName(){return $valinit$$hl4();}
var $prop$getTagName={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$hkj.$_String},d:['ceylon.markdown.core','tagName']};}};
ex$.$prop$getTagName=$prop$getTagName;
$prop$getTagName.get=tagName;
var $hl5;function $valinit$$hl5(){if($hl5===m$hkj.INIT$)m$hkj.throwexc(m$hkj.InitializationError("Cyclic initialization trying to read the value of \'attributeName\' before it was set"),'40:0-40:51','regex.ceylon');
if($hl5===undefined){$hl5=m$hkj.INIT$;$hl5="[a-zA-Z_:][a-zA-Z0-9:._-]*"};return $hl5;};
function attributeName(){return $valinit$$hl5();}
var $prop$getAttributeName={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$hkj.$_String},d:['ceylon.markdown.core','attributeName']};}};
ex$.$prop$getAttributeName=$prop$getAttributeName;
$prop$getAttributeName.get=attributeName;
var $hl6;function $valinit$$hl6(){if($hl6===m$hkj.INIT$)m$hkj.throwexc(m$hkj.InitializationError("Cyclic initialization trying to read the value of \'unQuotedValue\' before it was set"),'42:0-42:47','regex.ceylon');
if($hl6===undefined){$hl6=m$hkj.INIT$;$hl6="[^\"\'=<>`\\x00-\\x20]+"};return $hl6;};
function unQuotedValue(){return $valinit$$hl6();}
var $prop$getUnQuotedValue={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$hkj.$_String},d:['ceylon.markdown.core','unQuotedValue']};}};
ex$.$prop$getUnQuotedValue=$prop$getUnQuotedValue;
$prop$getUnQuotedValue.get=unQuotedValue;
var $hl7;function $valinit$$hl7(){if($hl7===m$hkj.INIT$)m$hkj.throwexc(m$hkj.InitializationError("Cyclic initialization trying to read the value of \'singleQuotedValue\' before it was set"),'43:0-43:36','regex.ceylon');
if($hl7===undefined){$hl7=m$hkj.INIT$;$hl7="\'[^\']*\'"};return $hl7;};
function singleQuotedValue(){return $valinit$$hl7();}
var $prop$getSingleQuotedValue={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$hkj.$_String},d:['ceylon.markdown.core','singleQuotedValue']};}};
ex$.$prop$getSingleQuotedValue=$prop$getSingleQuotedValue;
$prop$getSingleQuotedValue.get=singleQuotedValue;
var $hl8;function $valinit$$hl8(){if($hl8===m$hkj.INIT$)m$hkj.throwexc(m$hkj.InitializationError("Cyclic initialization trying to read the value of \'doubleQuotedValue\' before it was set"),'44:0-44:39','regex.ceylon');
if($hl8===undefined){$hl8=m$hkj.INIT$;$hl8="\"[^\"]*\""};return $hl8;};
function doubleQuotedValue(){return $valinit$$hl8();}
var $prop$getDoubleQuotedValue={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$hkj.$_String},d:['ceylon.markdown.core','doubleQuotedValue']};}};
ex$.$prop$getDoubleQuotedValue=$prop$getDoubleQuotedValue;
$prop$getDoubleQuotedValue.get=doubleQuotedValue;
var $hl9;function $valinit$$hl9(){if($hl9===m$hkj.INIT$)m$hkj.throwexc(m$hkj.InitializationError("Cyclic initialization trying to read the value of \'attributeValue\' before it was set"),'45:0-46:33','regex.ceylon');
if($hl9===undefined){$hl9=m$hkj.INIT$;$hl9="(?:".plus(unQuotedValue()).plus("|").plus(singleQuotedValue()).plus("|").plus(doubleQuotedValue()).plus(")")};return $hl9;};
function attributeValue(){return $valinit$$hl9();}
var $prop$getAttributeValue={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$hkj.$_String},d:['ceylon.markdown.core','attributeValue']};}};
ex$.$prop$getAttributeValue=$prop$getAttributeValue;
$prop$getAttributeValue.get=attributeValue;
var $hla;function $valinit$$hla(){if($hla===m$hkj.INIT$)m$hkj.throwexc(m$hkj.InitializationError("Cyclic initialization trying to read the value of \'attributeValueSpec\' before it was set"),'47:0-48:7','regex.ceylon');
if($hla===undefined){$hla=m$hkj.INIT$;$hla="(?:".plus("\\s*=").plus("\\s*").plus(attributeValue()).plus(")")};return $hla;};
function attributeValueSpec(){return $valinit$$hla();}
var $prop$getAttributeValueSpec={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$hkj.$_String},d:['ceylon.markdown.core','attributeValueSpec']};}};
ex$.$prop$getAttributeValueSpec=$prop$getAttributeValueSpec;
$prop$getAttributeValueSpec.get=attributeValueSpec;
var $hlb;function $valinit$$hlb(){if($hlb===m$hkj.INIT$)m$hkj.throwexc(m$hkj.InitializationError("Cyclic initialization trying to read the value of \'attribute\' before it was set"),'49:0-50:8','regex.ceylon');
if($hlb===undefined){$hlb=m$hkj.INIT$;$hlb="(?:".plus("\\s+").plus(attributeName()).plus(attributeValueSpec()).plus("?)")};return $hlb;};
function attribute(){return $valinit$$hlb();}
var $prop$getAttribute={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$hkj.$_String},d:['ceylon.markdown.core','attribute']};}};
ex$.$prop$getAttribute=$prop$getAttribute;
$prop$getAttribute.get=attribute;
var $hlc;function $valinit$$hlc(){if($hlc===m$hkj.INIT$)m$hkj.throwexc(m$hkj.InitializationError("Cyclic initialization trying to read the value of \'openTag\' before it was set"),'52:0-52:60','regex.ceylon');
if($hlc===undefined){$hlc=m$hkj.INIT$;$hlc="<".plus(tagName()).plus(attribute()).plus("*").plus("\\s*/?>")};return $hlc;};
function openTag(){return $valinit$$hlc();}
var $prop$getOpenTag={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$hkj.$_String},d:['ceylon.markdown.core','openTag']};}};
ex$.$prop$getOpenTag=$prop$getOpenTag;
$prop$getOpenTag.get=openTag;
var $hld;function $valinit$$hld(){if($hld===m$hkj.INIT$)m$hkj.throwexc(m$hkj.InitializationError("Cyclic initialization trying to read the value of \'closeTag\' before it was set"),'53:0-53:44','regex.ceylon');
if($hld===undefined){$hld=m$hkj.INIT$;$hld="</".plus(tagName()).plus("\\s*[>]")};return $hld;};
function closeTag(){return $valinit$$hld();}
var $prop$getCloseTag={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$hkj.$_String},d:['ceylon.markdown.core','closeTag']};}};
ex$.$prop$getCloseTag=$prop$getCloseTag;
$prop$getCloseTag.get=closeTag;
var $hle;function $valinit$$hle(){if($hle===m$hkj.INIT$)m$hkj.throwexc(m$hkj.InitializationError("Cyclic initialization trying to read the value of \'atxHeadingPattern\' before it was set"),'55:0-55:54','regex.ceylon');
if($hle===undefined){$hle=m$hkj.INIT$;$hle=m$hkk.regex("^#{1,6}(?:[ \t]+|$)")};return $hle;};
function atxHeadingPattern(){return $valinit$$hle();}
var $prop$getAtxHeadingPattern={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$hkk.Regex},d:['ceylon.markdown.core','atxHeadingPattern']};}};
ex$.$prop$getAtxHeadingPattern=$prop$getAtxHeadingPattern;
$prop$getAtxHeadingPattern.get=atxHeadingPattern;
var $hlf;function $valinit$$hlf(){if($hlf===m$hkj.INIT$)m$hkj.throwexc(m$hkj.InitializationError("Cyclic initialization trying to read the value of \'atxTrailingPattern\' before it was set"),'57:0-57:48','regex.ceylon');
if($hlf===undefined){$hlf=m$hkj.INIT$;$hlf=m$hkk.regex("(^| ) *#+ *$")};return $hlf;};
function atxTrailingPattern(){return $valinit$$hlf();}
var $prop$getAtxTrailingPattern={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$hkk.Regex},d:['ceylon.markdown.core','atxTrailingPattern']};}};
ex$.$prop$getAtxTrailingPattern=$prop$getAtxTrailingPattern;
$prop$getAtxTrailingPattern.get=atxTrailingPattern;
var $hlg;function $valinit$$hlg(){if($hlg===m$hkj.INIT$)m$hkj.throwexc(m$hkj.InitializationError("Cyclic initialization trying to read the value of \'orderedListPattern\' before it was set"),'59:0-59:53','regex.ceylon');
if($hlg===undefined){$hlg=m$hkj.INIT$;$hlg=m$hkk.regex("^(\\d{1,9})([.)])")};return $hlg;};
function orderedListPattern(){return $valinit$$hlg();}
var $prop$getOrderedListPattern={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$hkk.Regex},d:['ceylon.markdown.core','orderedListPattern']};}};
ex$.$prop$getOrderedListPattern=$prop$getOrderedListPattern;
$prop$getOrderedListPattern.get=orderedListPattern;
var $hlh;function $valinit$$hlh(){if($hlh===m$hkj.INIT$)m$hkj.throwexc(m$hkj.InitializationError("Cyclic initialization trying to read the value of \'bulletListPattern\' before it was set"),'61:0-61:50','regex.ceylon');
if($hlh===undefined){$hlh=m$hkj.INIT$;$hlh=m$hkk.regex("^[*+-](|\\s.*)$")};return $hlh;};
function bulletListPattern(){return $valinit$$hlh();}
var $prop$getBulletListPattern={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$hkk.Regex},d:['ceylon.markdown.core','bulletListPattern']};}};
ex$.$prop$getBulletListPattern=$prop$getBulletListPattern;
$prop$getBulletListPattern.get=bulletListPattern;
var $hli;function $valinit$$hli(){if($hli===m$hkj.INIT$)m$hkj.throwexc(m$hkj.InitializationError("Cyclic initialization trying to read the value of \'setextHeadingPattern\' before it was set"),'63:0-63:51','regex.ceylon');
if($hli===undefined){$hli=m$hkj.INIT$;$hli=m$hkk.regex("^(?:=+|-+) *$")};return $hli;};
function setextHeadingPattern(){return $valinit$$hli();}
var $prop$getSetextHeadingPattern={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$hkk.Regex},d:['ceylon.markdown.core','setextHeadingPattern']};}};
ex$.$prop$getSetextHeadingPattern=$prop$getSetextHeadingPattern;
$prop$getSetextHeadingPattern.get=setextHeadingPattern;
var $hlj;function $valinit$$hlj(){if($hlj===m$hkj.INIT$)m$hkj.throwexc(m$hkj.InitializationError("Cyclic initialization trying to read the value of \'fencedCodeblockPattern\' before it was set"),'65:0-65:67','regex.ceylon');
if($hlj===undefined){$hlj=m$hkj.INIT$;$hlj=m$hkk.regex("^`{3,}(?!.*`)|^~{3,}(?!.*~)")};return $hlj;};
function fencedCodeblockPattern(){return $valinit$$hlj();}
var $prop$getFencedCodeblockPattern={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$hkk.Regex},d:['ceylon.markdown.core','fencedCodeblockPattern']};}};
ex$.$prop$getFencedCodeblockPattern=$prop$getFencedCodeblockPattern;
$prop$getFencedCodeblockPattern.get=fencedCodeblockPattern;
var $hlk;function $valinit$$hlk(){if($hlk===m$hkj.INIT$)m$hkj.throwexc(m$hkj.InitializationError("Cyclic initialization trying to read the value of \'closingCodeblockPattern\' before it was set"),'67:0-67:65','regex.ceylon');
if($hlk===undefined){$hlk=m$hkj.INIT$;$hlk=m$hkk.regex("^(?:`{3,}|~{3,})(?= *$)")};return $hlk;};
function closingCodeblockPattern(){return $valinit$$hlk();}
var $prop$getClosingCodeblockPattern={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$hkk.Regex},d:['ceylon.markdown.core','closingCodeblockPattern']};}};
ex$.$prop$getClosingCodeblockPattern=$prop$getClosingCodeblockPattern;
$prop$getClosingCodeblockPattern.get=closingCodeblockPattern;
var $hll;function $valinit$$hll(){if($hll===m$hkj.INIT$)m$hkj.throwexc(m$hkj.InitializationError("Cyclic initialization trying to read the value of \'thematicBreakPattern\' before it was set"),'69:0-69:99','regex.ceylon');
if($hll===undefined){$hll=m$hkj.INIT$;$hll=m$hkk.regex("^(?:(?:\\*[ \t]*){3,}|(?:_[ \t]*){3,}|(?:-[ \t]*){3,})[ \t]*$")};return $hll;};
function thematicBreakPattern(){return $valinit$$hll();}
var $prop$getThematicBreakPattern={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$hkk.Regex},d:['ceylon.markdown.core','thematicBreakPattern']};}};
ex$.$prop$getThematicBreakPattern=$prop$getThematicBreakPattern;
$prop$getThematicBreakPattern.get=thematicBreakPattern;
var $hlm;function $valinit$$hlm(){if($hlm===m$hkj.INIT$)m$hkj.throwexc(m$hkj.InitializationError("Cyclic initialization trying to read the value of \'htmlBlockOpen\' before it was set"),'71:0-98:1','regex.ceylon');
if($hlm===undefined){$hlm=m$hkj.INIT$;$hlm=m$hkj.tpl$([($hln="^<(?:script|pre|style)(?:\\s|>|$)",$hlo=true,m$hkk.regex($hln,undefined,$hlo,undefined)),m$hkk.regex("^<!--"),m$hkk.regex("^<[?]"),m$hkk.regex("^<![A-Z]"),m$hkk.regex("^<!\\[CDATA\\["),($hlp="^<[/]?(?:".plus("address|article|aside|").plus("base|basefont|blockquote|").plus("body|caption|center|").plus("col|colgroup|dd|").plus("details|dialog|dir").plus("|div|dl|dt|fieldset|").plus("figcaption|figure|footer|").plus("form|frame|frameset|").plus("h1|head|header|hr|").plus("html|iframe|legend|").plus("li|link|main|menu|").plus("menuitem|meta|nav|").plus("noframes|ol|optgroup|").plus("option|p|param|section|").plus("source|title|summary|").plus("table|tbody|td|tfoot|").plus("th|thead|title|tr|track|ul)").plus("(?:\\s|[/]?[>]|$)"),$hlq=true,m$hkk.regex($hlp,undefined,$hlq,undefined)),($hlr="^(?:".plus(openTag()).plus("|").plus(closeTag()).plus(")\\s*$"),$hls=true,m$hkk.regex($hlr,undefined,$hls,undefined))])};return $hlm;};
function htmlBlockOpen(){return $valinit$$hlm();}
var $prop$getHtmlBlockOpen={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$hkj.Sequential,a:{Element$Sequential:{t:m$hkk.Regex}}},d:['ceylon.markdown.core','htmlBlockOpen']};}};
ex$.$prop$getHtmlBlockOpen=$prop$getHtmlBlockOpen;
$prop$getHtmlBlockOpen.get=htmlBlockOpen;
var $hln,$hlo,$hlp,$hlq,$hlr,$hls;
var $hlt;function $valinit$$hlt(){if($hlt===m$hkj.INIT$)m$hkj.throwexc(m$hkj.InitializationError("Cyclic initialization trying to read the value of \'htmlBlockClose\' before it was set"),'100:0-106:1','regex.ceylon');
if($hlt===undefined){$hlt=m$hkj.INIT$;$hlt=m$hkj.tpl$([($hlu="<\\/(?:script|pre|style)>",$hlv=true,m$hkk.regex($hlu,undefined,$hlv,undefined)),m$hkk.regex("-->"),m$hkk.regex("\\?>"),m$hkk.regex(">"),m$hkk.regex("\\]\\]>")])};return $hlt;};
function htmlBlockClose(){return $valinit$$hlt();}
var $prop$getHtmlBlockClose={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$hkj.Sequential,a:{Element$Sequential:{t:m$hkk.Regex}}},d:['ceylon.markdown.core','htmlBlockClose']};}};
ex$.$prop$getHtmlBlockClose=$prop$getHtmlBlockClose;
$prop$getHtmlBlockClose.get=htmlBlockClose;
var $hlu,$hlv;
var $hlw;function $valinit$$hlw(){if($hlw===m$hkj.INIT$)m$hkj.throwexc(m$hkj.InitializationError("Cyclic initialization trying to read the value of \'asciiPunctuation\' before it was set"),'108:0-108:92','regex.ceylon');
if($hlw===undefined){$hlw=m$hkj.INIT$;$hlw="\'!\"#\\$%&\\(\\)\\*\\+,\\-\\./:;<=>\\?@\\[\\\\\\]\\^_`\\{\\|\\}~"};return $hlw;};
function asciiPunctuation(){return $valinit$$hlw();}
var $prop$getAsciiPunctuation={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$hkj.$_String},d:['ceylon.markdown.core','asciiPunctuation']};}};
ex$.$prop$getAsciiPunctuation=$prop$getAsciiPunctuation;
$prop$getAsciiPunctuation.get=asciiPunctuation;
var $hlx;function $valinit$$hlx(){if($hlx===m$hkj.INIT$)m$hkj.throwexc(m$hkj.InitializationError("Cyclic initialization trying to read the value of \'punctuation\' before it was set"),'110:0-110:105','regex.ceylon');
if($hlx===undefined){$hlx=m$hkj.INIT$;$hlx=m$hkk.regex("^[".plus(asciiPunctuation()).plus("\\p{Pc}\\p{Pd}\\p{Pe}\\p{Pf}\\p{Pi}\\p{Po}\\p{Ps}]"))};return $hlx;};
function punctuation(){return $valinit$$hlx();}
var $prop$getPunctuation={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$hkk.Regex},d:['ceylon.markdown.core','punctuation']};}};
ex$.$prop$getPunctuation=$prop$getPunctuation;
$prop$getPunctuation.get=punctuation;
var $hly;function $valinit$$hly(){if($hly===m$hkj.INIT$)m$hkj.throwexc(m$hkj.InitializationError("Cyclic initialization trying to read the value of \'unicodeWhitespaceChar\' before it was set"),'112:0-112:57','regex.ceylon');
if($hly===undefined){$hly=m$hkj.INIT$;$hly=m$hkk.regex("^[\\p{Zs}\t\r\n\f]")};return $hly;};
function unicodeWhitespaceChar(){return $valinit$$hly();}
var $prop$getUnicodeWhitespaceChar={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$hkk.Regex},d:['ceylon.markdown.core','unicodeWhitespaceChar']};}};
ex$.$prop$getUnicodeWhitespaceChar=$prop$getUnicodeWhitespaceChar;
$prop$getUnicodeWhitespaceChar.get=unicodeWhitespaceChar;
var $hlz;function $valinit$$hlz(){if($hlz===m$hkj.INIT$)m$hkj.throwexc(m$hkj.InitializationError("Cyclic initialization trying to read the value of \'emailAutoLink\' before it was set"),'114:0-114:170','regex.ceylon');
if($hlz===undefined){$hlz=m$hkj.INIT$;$hlz=m$hkk.regex("^<([a-zA-Z0-9.!#$%&\'*+\\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*)>")};return $hlz;};
function emailAutoLink(){return $valinit$$hlz();}
var $prop$getEmailAutoLink={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$hkk.Regex},d:['ceylon.markdown.core','emailAutoLink']};}};
ex$.$prop$getEmailAutoLink=$prop$getEmailAutoLink;
$prop$getEmailAutoLink.get=emailAutoLink;
var $hm0;function $valinit$$hm0(){if($hm0===m$hkj.INIT$)m$hkj.throwexc(m$hkj.InitializationError("Cyclic initialization trying to read the value of \'autoLink\' before it was set"),'116:0-116:88','regex.ceylon');
if($hm0===undefined){$hm0=m$hkj.INIT$;$hm0=m$hkk.regex("^<[A-Za-z][A-Za-z0-9.+-]{1,31}:[^<>\\x00-\\x20]*>",false,true)};return $hm0;};
function autoLink(){return $valinit$$hm0();}
var $prop$getAutoLink={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$hkk.Regex},d:['ceylon.markdown.core','autoLink']};}};
ex$.$prop$getAutoLink=$prop$getAutoLink;
$prop$getAutoLink.get=autoLink;
var $hm1;function $valinit$$hm1(){if($hm1===m$hkj.INIT$)m$hkj.throwexc(m$hkj.InitializationError("Cyclic initialization trying to read the value of \'htmlComment\' before it was set"),'118:0-118:60','regex.ceylon');
if($hm1===undefined){$hm1=m$hkj.INIT$;$hm1="<!---->|<!--(?:-?[^>-])(?:-?[^-])*-->"};return $hm1;};
function htmlComment(){return $valinit$$hm1();}
var $prop$getHtmlComment={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$hkj.$_String},d:['ceylon.markdown.core','htmlComment']};}};
ex$.$prop$getHtmlComment=$prop$getHtmlComment;
$prop$getHtmlComment.get=htmlComment;
var $hm2;function $valinit$$hm2(){if($hm2===m$hkj.INIT$)m$hkj.throwexc(m$hkj.InitializationError("Cyclic initialization trying to read the value of \'processingInstruction\' before it was set"),'119:0-119:48','regex.ceylon');
if($hm2===undefined){$hm2=m$hkj.INIT$;$hm2="[<][?].*?[?][>]"};return $hm2;};
function processingInstruction(){return $valinit$$hm2();}
var $prop$getProcessingInstruction={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$hkj.$_String},d:['ceylon.markdown.core','processingInstruction']};}};
ex$.$prop$getProcessingInstruction=$prop$getProcessingInstruction;
$prop$getProcessingInstruction.get=processingInstruction;
var $hm3;function $valinit$$hm3(){if($hm3===m$hkj.INIT$)m$hkj.throwexc(m$hkj.InitializationError("Cyclic initialization trying to read the value of \'declaration\' before it was set"),'120:0-120:46','regex.ceylon');
if($hm3===undefined){$hm3=m$hkj.INIT$;$hm3="<![A-Z]+".plus("\\s+[^>]*>")};return $hm3;};
function declaration(){return $valinit$$hm3();}
var $prop$getDeclaration={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$hkj.$_String},d:['ceylon.markdown.core','declaration']};}};
ex$.$prop$getDeclaration=$prop$getDeclaration;
$prop$getDeclaration.get=declaration;
var $hm4;function $valinit$$hm4(){if($hm4===m$hkj.INIT$)m$hkj.throwexc(m$hkj.InitializationError("Cyclic initialization trying to read the value of \'cData\' before it was set"),'121:0-121:47','regex.ceylon');
if($hm4===undefined){$hm4=m$hkj.INIT$;$hm4="<!\\[CDATA\\[[\\s\\S]*?\\]\\]>"};return $hm4;};
function cData(){return $valinit$$hm4();}
var $prop$getCData={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$hkj.$_String},d:['ceylon.markdown.core','cData']};}};
ex$.$prop$getCData=$prop$getCData;
$prop$getCData.get=cData;
var $hm5;function $valinit$$hm5(){if($hm5===m$hkj.INIT$)m$hkj.throwexc(m$hkj.InitializationError("Cyclic initialization trying to read the value of \'htmlTag\' before it was set"),'122:0-123:63','regex.ceylon');
if($hm5===undefined){$hm5=m$hkj.INIT$;$hm5="(?:".plus(openTag()).plus("|").plus(closeTag()).plus("|").plus(htmlComment()).plus("|").plus(processingInstruction()).plus("|").plus(declaration()).plus("|").plus(cData()).plus(")")};return $hm5;};
function htmlTag(){return $valinit$$hm5();}
var $prop$getHtmlTag={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$hkj.$_String},d:['ceylon.markdown.core','htmlTag']};}};
ex$.$prop$getHtmlTag=$prop$getHtmlTag;
$prop$getHtmlTag.get=htmlTag;
var $hm6;function $valinit$$hm6(){if($hm6===m$hkj.INIT$)m$hkj.throwexc(m$hkj.InitializationError("Cyclic initialization trying to read the value of \'reHtmlTag\' before it was set"),'125:0-125:51','regex.ceylon');
if($hm6===undefined){$hm6=m$hkj.INIT$;$hm6=m$hkk.regex("^".plus(htmlTag()),false,true)};return $hm6;};
function reHtmlTag(){return $valinit$$hm6();}
var $prop$getReHtmlTag={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$hkk.Regex},d:['ceylon.markdown.core','reHtmlTag']};}};
ex$.$prop$getReHtmlTag=$prop$getReHtmlTag;
$prop$getReHtmlTag.get=reHtmlTag;
var $hm7;function $valinit$$hm7(){if($hm7===m$hkj.INIT$)m$hkj.throwexc(m$hkj.InitializationError("Cyclic initialization trying to read the value of \'reEscapable\' before it was set"),'127:0-127:42','regex.ceylon');
if($hm7===undefined){$hm7=m$hkj.INIT$;$hm7=m$hkk.regex("^".plus(escapable()))};return $hm7;};
function reEscapable(){return $valinit$$hm7();}
var $prop$getReEscapable={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$hkk.Regex},d:['ceylon.markdown.core','reEscapable']};}};
ex$.$prop$getReEscapable=$prop$getReEscapable;
$prop$getReEscapable.get=reEscapable;
var $hm8;function $valinit$$hm8(){if($hm8===m$hkj.INIT$)m$hkj.throwexc(m$hkj.InitializationError("Cyclic initialization trying to read the value of \'entity\' before it was set"),'129:0-129:71','regex.ceylon');
if($hm8===undefined){$hm8=m$hkj.INIT$;$hm8="&(?:#x[a-f0-9]{1,8}|#[0-9]{1,8}|[a-z][a-z0-9]{1,31});"};return $hm8;};
function entity(){return $valinit$$hm8();}
var $prop$getEntity={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$hkj.$_String},d:['ceylon.markdown.core','entity']};}};
ex$.$prop$getEntity=$prop$getEntity;
$prop$getEntity.get=entity;
var $hm9;function $valinit$$hm9(){if($hm9===m$hkj.INIT$)m$hkj.throwexc(m$hkj.InitializationError("Cyclic initialization trying to read the value of \'reEntityHere\' before it was set"),'131:0-131:53','regex.ceylon');
if($hm9===undefined){$hm9=m$hkj.INIT$;$hm9=m$hkk.regex("^".plus(entity()),false,true)};return $hm9;};
function reEntityHere(){return $valinit$$hm9();}
var $prop$getReEntityHere={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$hkk.Regex},d:['ceylon.markdown.core','reEntityHere']};}};
ex$.$prop$getReEntityHere=$prop$getReEntityHere;
$prop$getReEntityHere.get=reEntityHere;
var $hma;function $valinit$$hma(){if($hma===m$hkj.INIT$)m$hkj.throwexc(m$hkj.InitializationError("Cyclic initialization trying to read the value of \'reEntityOrEscapedChar\' before it was set"),'133:0-133:82','regex.ceylon');
if($hma===undefined){$hma=m$hkj.INIT$;$hma=m$hkk.regex("\\\\".plus(escapable()).plus("|").plus(entity()),true,true)};return $hma;};
function reEntityOrEscapedChar(){return $valinit$$hma();}
var $prop$getReEntityOrEscapedChar={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$hkk.Regex},d:['ceylon.markdown.core','reEntityOrEscapedChar']};}};
ex$.$prop$getReEntityOrEscapedChar=$prop$getReEntityOrEscapedChar;
$prop$getReEntityOrEscapedChar.get=reEntityOrEscapedChar;

//MethodDef trimSpaces at parseLine.ceylon (1:0-15:0)
function trimSpaces($hmb){
var $hmc=(0);
//'for' statement at parseLine.ceylon (6:1-12:1)//EXITS!
var $hme;for(var $hmd=$hmb.iterator();($hme=$hmd.next())!==m$hkj.finished();){
if((m$hkj.$eq$($hme,m$hkj.Character(32,true))&&($hmc<3))){
($hmf=$hmc,$hmc=$hmf.successor,$hmf);
var $hmf;
}
else{
break;
}
}
return $hmb.spanFrom($hmc);
};trimSpaces.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$hkj.$_String},ps:[{nm:'line',mt:'prm',$t:{t:m$hkj.$_String}}],d:['ceylon.markdown.core','trimSpaces']};};
var $hmg;function $valinit$$hmg(){if($hmg===m$hkj.INIT$)m$hkj.throwexc(m$hkj.InitializationError("Cyclic initialization trying to read the value of \'blankLine\' before it was set"),'17:0-17:34','parseLine.ceylon');
if($hmg===undefined){$hmg=m$hkj.INIT$;$hmg=false};return $hmg;};
function blankLine(){return $valinit$$hmg();}
function set$blankLine($hmh){if($hmg===undefined||$hmg===m$hkj.INIT$)$valinit$$hmg();return $hmg=$hmh;};
var $prop$getBlankLine={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$hkj.$_Boolean},pa:1027,d:['ceylon.markdown.core','blankLine']};}};
ex$.$prop$getBlankLine=$prop$getBlankLine;
$prop$getBlankLine.get=blankLine;
$prop$getBlankLine.set=set$blankLine;
if(set$blankLine.$crtmm$===undefined)set$blankLine.$crtmm$=$prop$getBlankLine.$crtmm$;
//MethodDef parseLine at parseLine.ceylon (19:0-224:0)
function parseLine($hmi,$hmj){
var $hmk=true;
var $hml;
var $hmm=$hmj.children.last;
var $hmn;
if($hmi.trimmed.equals("")&&!m$hkj.is$(($hmn=$hmj),{t:List})){
var $hmo,$hmp;
if(m$hkj.is$(($hmo=$hmm),m$hkj.mut$([{t:Paragraph},{t:BlockQuote}]))&&!m$hkj.is$(($hmp=$hmn),{t:ListItem})){
$hmo.closeBlock();
}
var $hmq;
if(m$hkj.is$(($hmq=$hmm),{t:HtmlBlock})){
if(($hmq.type>=5)){
$hmq.closeBlock();
}
else{
($hmr=$hmq,$hmr.text=$hmr.text.plus("\n"));
var $hmr;
}
}
var $hms;
if(m$hkj.is$(($hms=$hmm),{t:CodeBlock})&&$hms.open){
($hmt=$hms,$hmt.text=$hmt.text.plus("\n"));
var $hmt;
}
var $hmu;
if(m$hkj.is$(($hmu=$hmm),{t:List})&&$hmu.open){
if(!blankLine()){
set$blankLine(true);
}
else{
$hmu.closeBlock();
set$blankLine(false);
}
}
return;
}
if(function(){var $hmv;
if(m$hkj.is$(($hmv=$hmm),m$hkj.mut$([{t:FencedCode},{t:HtmlBlock}])))return !$hmv.open;else return true}()){
$hmi=trimSpaces($hmi);
}
var $hmw;
if(m$hkj.is$(($hmw=$hmm),{t:FencedCode})&&closingCodeblockPattern().test($hmi)&&($hmw.fenceLevel<=$hmi.count(m$hkj.jsc$2(($hmx=m$hkj.Character(96,true),m$hkj.jsc$3($hmx,$hmx.equals)),[{nm:'that',mt:'prm',$t:{t:m$hkj.$_Object}}],{})))){
$hmw.closeBlock();
return;
}
var $hmx;
var $hmy;
if(m$hkj.is$(($hmy=$hmm),{t:FencedCode})&&$hmy.open){
$hml=FencedCode($hmi,$hmy.infoString,$hmy.fenceLevel);
$hmi="";
}
else{
if($hmi.startsWith("<")&&function(){var $hmz;
if(m$hkj.is$(($hmz=$hmm),{t:Paragraph}))return !$hmz.open;else return true}()){
//'for' statement at parseLine.ceylon (71:2-87:2)//EXITS!
var $hn1;for(var $hn0=m$hkj.measure((0),(7),{Element$measure:{t:m$hkj.Integer}}).iterator();($hn1=$hn0.next())!==m$hkj.finished();){
var $hn2,$hn3;
if(m$hkj.is$(($hn2=$hmm),{t:HtmlBlock})&&$hn2.open&&m$hkj.nn$(($hn3=htmlBlockClose().$_get($hn1)))&&$hn3.test($hmi)&&($hn2.type==$hn1)){
($hn4=$hn2,$hn4.text=$hn4.text.plus("\n".plus($hmi)));
var $hn4;
$hn2.closeBlock();
return;
}
else{
var $hn5;
if(m$hkj.nn$(($hn5=htmlBlockOpen().$_get($hn1)))&&$hn5.test($hmi)){
$hml=HtmlBlock($hmi,$hn1);
break;
}
}
}
if(m$hkj.finished()===$hn1){
$hml=Paragraph();
$hml.appendChild(Text($hmi));
}
$hmi="";
}
else{
var $hn6;
if(m$hkj.is$(($hn6=$hmm),{t:HtmlBlock})&&$hn6.open){
$hml=HtmlBlock($hmi,$hn6.type);
$hmi="";
}
else{
if(!m$hkj.is$($hmm,{t:FencedCode})&&fencedCodeblockPattern().test($hmi)){
$hml=FencedCode("",$hmi.trimLeading(m$hkj.jsc$2((function($hn7){return m$hkj.$eq$($hn7,m$hkj.Character(96,true));
}),[{nm:'ch',mt:'prm',$t:{t:m$hkj.Character}}],{Arguments$Callable:m$hkj.mtt$([{t:m$hkj.Character}]),Return$Callable:{t:m$hkj.$_Boolean}})),$hmi.count(m$hkj.jsc$2(($hn8=m$hkj.Character(96,true),m$hkj.jsc$3($hn8,$hn8.equals)),/*WARNING4 Callable EXPR of type com.redhat.ceylon.compiler.typechecker.tree.Tree$ParExpression*/[],{Arguments$Callable:m$hkj.mtt$([{t:m$hkj.$_Object}]),Return$Callable:{t:m$hkj.$_Boolean}})));
var $hn8;
$hmi="";
}
else{
var $hn9,$hna;
if(m$hkj.is$(($hn9=$hmm),{t:Paragraph})&&$hn9.open&&setextHeadingPattern().test($hmi)&&m$hkj.is$(($hna=$hn9.children.last),{t:Text})){
$hml=($hnb=($hmi.startsWith("=")?(1):(2)),Heading($hnb));
var $hnb;
$hml.appendChild(Text($hna.text));
($hnc=$hmj,$hnc.children=m$hkj.tpl$([],m$hkj.for$(function(){
//Comprehension at parseLine.ceylon (106:21-106:79)
var $hnd=$hmj.children.iterator(),$hne=m$hkj.finished();
var n$hne=function(){return $hne=$hnd.next();}
return function(){
if(n$hne()!==m$hkj.finished()){
var $hnf=$hne,$hng=($hnh=(m$hkj.$eq$($hnf,$hn9)?$hml:null),m$hkj.nn$($hnh)?$hnh:$hnf);
return $hng;
}
return m$hkj.finished();
}
},{Element$Iterable:{t:Node},Absent$Iterable:{t:m$hkj.Null}})),$hnc.children);
var $hnc,$hnh;
return;
}
else{
if(thematicBreakPattern().test($hmi)){
$hml=ThematicBreak();
$hml.closeBlock();
$hmi="";
}
else{
var $hni;
if(m$hkj.nn$(($hni=atxHeadingPattern().find($hmi)))){
var $hnj=($hnk=atxHeadingPattern().$_split($hmi).$_get(1),m$hkj.nn$($hnk)?$hnk:"");
var $hnk;
if(atxTrailingPattern().test($hnj)){
$hnj=($hnl=atxTrailingPattern().$_split($hnj).$_get(0),m$hkj.nn$($hnl)?$hnl:"");
var $hnl;
}
$hml=Heading($hni.matched.count(m$hkj.jsc$2(($hnm=m$hkj.Character(35,true),m$hkj.jsc$3($hnm,$hnm.equals)),[{nm:'that',mt:'prm',$t:{t:m$hkj.$_Object}}],{})));
var $hnm;
$hml.appendChild(Text($hnj.trimmed));
$hmi="";
}
else{
var $hnn;
if(m$hkj.nn$(($hnn=orderedListPattern().find($hmi)))){
var $hno=m$hkj.parseInteger(($hnp=$hnn.groups.$_get(0),m$hkj.nn$($hnp)?$hnp:"0"));
var $hnp;
$hml=($hnq=($hnr=$hno,m$hkj.nn$($hnr)?$hnr:(0)),$hns=($hnt=($hnu=$hnn.groups.$_get(0),m$hkj.jsc$3($hnu,m$hkj.nn$($hnu)?$hnu.$_get:null))(0),m$hkj.nn$($hnt)?$hnt:m$hkj.Character(46,true)),OrderedList($hnq,$hns));
var $hnq,$hnr,$hns,$hnt,$hnu;
$hmi=$hmi.spanFrom($hnn.end);
}
else{
if(!m$hkj.is$($hmm,{t:FencedCode})&&function(){var $hnv;
if(m$hkj.is$(($hnv=$hmm),{t:Paragraph}))return !$hnv.open;else return true}()&&($hmi.startsWith(" ")||$hmi.startsWith("\t"))&&!m$hkj.$eq$($hmi.trimLeading(m$hkj.jsc$2(($hnw=m$hkj.Character(32,true),m$hkj.jsc$3($hnw,$hnw.equals)),[{nm:'that',mt:'prm',$t:{t:m$hkj.$_Object}}],{})).trimTrailing(m$hkj.jsc$2(($hnx=m$hkj.Character(32,true),m$hkj.jsc$3($hnx,$hnx.equals)),[{nm:'that',mt:'prm',$t:{t:m$hkj.$_Object}}],{})),"")){
$hml=IndentedCode($hmi.spanFrom(1));
$hmi="";
}
else{
if($hmi.startsWith(">")){
var $hny;
if(m$hkj.is$(($hny=$hmj),{t:List})){
$hmi=$hmi.trimLeading(m$hkj.jsc$2(($hnz=m$hkj.Character(32,true),m$hkj.jsc$3($hnz,$hnz.equals)),[{nm:'that',mt:'prm',$t:{t:m$hkj.$_Object}}],{})).trimTrailing(m$hkj.jsc$2(($ho0=m$hkj.Character(32,true),m$hkj.jsc$3($ho0,$ho0.equals)),[{nm:'that',mt:'prm',$t:{t:m$hkj.$_Object}}],{}));
var $hnz,$ho0;
if(blankLine()){
($hny.tight=false);
set$blankLine(false);
}
$hml=ListItem();
$hml.appendChild(BlockQuote());
}
else{
$hml=BlockQuote();
}
$hmi=$hmi.spanFrom(1);
}
else{
if(bulletListPattern().test($hmi)){
$hml=UnorderedList(($ho1=$hmi.$_get(0),m$hkj.nn$($ho1)?$ho1:m$hkj.Character(32,true)));
var $ho1;
$hmi=$hmi.spanFrom(2);
}
else{
var $ho2;
if(m$hkj.is$(($ho2=$hmj),{t:List})){
$hmi=$hmi.trimLeading(m$hkj.jsc$2(($ho3=m$hkj.Character(32,true),m$hkj.jsc$3($ho3,$ho3.equals)),[{nm:'that',mt:'prm',$t:{t:m$hkj.$_Object}}],{})).trimTrailing(m$hkj.jsc$2(($ho4=m$hkj.Character(32,true),m$hkj.jsc$3($ho4,$ho4.equals)),[{nm:'that',mt:'prm',$t:{t:m$hkj.$_Object}}],{}));
var $ho3,$ho4;
$hml=ListItem();
if(blankLine()){
($ho2.tight=false);
set$blankLine(false);
}
if(!$hmi.equals("")){
var $ho5=Paragraph();
$ho5.appendChild(Text($hmi));
$hml.appendChild($ho5);
}
$hmi="";
}
else{
$hml=Paragraph();
$hml.appendChild(Text($hmi.trimLeading(m$hkj.jsc$2(($ho6=m$hkj.Character(32,true),m$hkj.jsc$3($ho6,$ho6.equals)),[{nm:'that',mt:'prm',$t:{t:m$hkj.$_Object}}],{}))));
var $ho6;
$hmi="";
}
}
}
}
var $hnw,$hnx;
}
}
}
}
}
}
}
}
var $ho7;
while(m$hkj.is$(($ho7=$hmm),{t:Block})&&$ho7.open){
var $ho8;
if(sameType($ho7,$hml)&&!m$hkj.is$(($ho8=$ho7),m$hkj.mut$([{t:ListItem},{t:Paragraph},{t:CodeBlock},{t:Heading},{t:HtmlBlock}]))){
parseLine($hmi,$ho8);
$hmk=false;
break;
}
else{
var $ho9,$hoa;
if(m$hkj.is$(($ho9=$ho7),{t:Paragraph})&&m$hkj.is$(($hoa=$hml),{t:Paragraph})){
var $hob=$ho9.children.last;
var $hoc=$hoa.children.last;
var $hod,$hoe;
if(m$hkj.is$(($hod=$hob),{t:Text})&&m$hkj.is$(($hoe=$hoc),{t:Text})){
($hof=$hod,$hof.text=$hof.text.plus("\n".plus($hoe.text)));
var $hof;
$hmk=false;
}
break;
}
else{
var $hog,$hoh;
if(m$hkj.is$(($hog=$ho7),{t:CodeBlock})&&m$hkj.is$(($hoh=$hml),{t:CodeBlock})){
if(m$hkj.$eq$($hog.text,"")){
($hoi=$hog,$hoi.text=$hoi.text.plus($hoh.text));
var $hoi;
}
else{
($hoj=$hog,$hoj.text=$hoj.text.plus("\n".plus($hoh.text)));
var $hoj;
}
$hmk=false;
break;
}
else{
var $hok,$hol;
if(m$hkj.is$(($hok=$ho7),{t:HtmlBlock})&&m$hkj.is$(($hol=$hml),{t:HtmlBlock})){
($hom=$hok,$hom.text=$hom.text.plus("\n".plus($hol.text)));
var $hom;
$hmk=false;
break;
}
}
}
}
$hmm=$ho7.children.last;
}
if($hmk){
$hmj.appendChild($hml);
var $hon,$hoo,$hop;
if(m$hkj.is$(($hon=$hmj),{t:List})&&m$hkj.nn$(($hoo=$hml.children.last))&&m$hkj.is$(($hop=$hoo),{t:Block})){
parseLine($hmi,$hop);
}
else{
parseLine($hmi,$hml);
}
}
};parseLine.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$hkj.Anything},ps:[{nm:'line',mt:'prm',$t:{t:m$hkj.$_String}},{nm:'parent',mt:'prm',$t:{t:Block}}],d:['ceylon.markdown.core','parseLine']};};
//MethodDecl sameType at parseLine.ceylon (226:0-227:56)
function sameType($hoq,$hor){return ((m$hkj.className($hoq).equals(m$hkj.className($hor))&&sameListType($hoq,$hor))&&sameOrderedListType($hoq,$hor));
};
sameType.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$hkj.$_Boolean},ps:[{nm:'b1',mt:'prm',$t:{t:Block}},{nm:'b2',mt:'prm',$t:{t:Block}}],d:['ceylon.markdown.core','sameType']};};
//MethodDecl sameListType at parseLine.ceylon (230:0-231:92)
function sameListType($hos,$hot){return function(){var $hou,$hov;
if(m$hkj.is$(($hou=$hos),{t:UnorderedList})&&m$hkj.is$(($hov=$hot),{t:UnorderedList}))return m$hkj.$eq$($hou.bulletChar,$hov.bulletChar);else return true}();
};
sameListType.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$hkj.$_Boolean},ps:[{nm:'b1',mt:'prm',$t:{t:Block}},{nm:'b2',mt:'prm',$t:{t:Block}}],d:['ceylon.markdown.core','sameListType']};};
//MethodDecl sameOrderedListType at parseLine.ceylon (233:0-234:86)
function sameOrderedListType($how,$hox){return function(){var $hoy,$hoz;
if(m$hkj.is$(($hoy=$how),{t:OrderedList})&&m$hkj.is$(($hoz=$hox),{t:OrderedList}))return m$hkj.$eq$($hoy.delimeter,$hoz.delimeter);else return true}();
};
sameOrderedListType.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$hkj.$_Boolean},ps:[{nm:'b1',mt:'prm',$t:{t:Block}},{nm:'b2',mt:'prm',$t:{t:Block}}],d:['ceylon.markdown.core','sameOrderedListType']};};

//ClassDef OrderedList at OrderedList.ceylon (1:0-5:0)
function OrderedList(startsWith,delimeter,orderedList$){
$init$OrderedList();
if(orderedList$===undefined)orderedList$=new OrderedList.$$;
orderedList$.startsWith_=startsWith;
orderedList$.delimeter_=delimeter;
List(undefined,orderedList$);
//AttributeDecl children at OrderedList.ceylon (2:1-2:44)
orderedList$.$c50l24$hp0_=m$hkj.empty();
return orderedList$;
}
OrderedList.$crtmm$=function(){return{mod:$CCMM$,'super':{t:List},ps:[{nm:'startsWith',mt:'prm',$t:{t:m$hkj.Integer},pa:1},{nm:'delimeter',mt:'prm',$t:{t:m$hkj.Character},pa:1}],pa:1,d:['ceylon.markdown.core','OrderedList']};};
ex$.OrderedList=OrderedList;
function $init$OrderedList(){
if(OrderedList.$$===undefined){
m$hkj.initTypeProto(OrderedList,'ceylon.markdown.core::OrderedList',$init$List());
(function(orderedList$){
m$hkj.atr$(orderedList$,'startsWith',function(){return this.startsWith_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$hkj.Integer},$cont:OrderedList,pa:1,d:['ceylon.markdown.core','OrderedList','$at','startsWith']};});
m$hkj.atr$(orderedList$,'delimeter',function(){return this.delimeter_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$hkj.Character},$cont:OrderedList,pa:1,d:['ceylon.markdown.core','OrderedList','$at','delimeter']};});
//AttributeDecl children at OrderedList.ceylon (2:1-2:44)
m$hkj.atr$(orderedList$,'children',function(){return this.$c50l24$hp0_;},function($hp1){return this.$c50l24$hp0_=$hp1;},function(){return{mod:$CCMM$,$t:{t:m$hkj.Sequential,a:{Element$Sequential:{t:Node}}},$cont:OrderedList,pa:1027,d:['ceylon.markdown.core','OrderedList','$at','children']};});
//MethodDecl accept at OrderedList.ceylon (4:1-4:89)
orderedList$.accept=function($hp2,$2uk8rz$){var orderedList$=this;
return $hp2.visitOrderedList(orderedList$);
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
listItem$.$c50l24$hp3_=m$hkj.empty();
return listItem$;
}
ListItem.$crtmm$=function(){return{mod:$CCMM$,'super':{t:Block},ps:[],pa:1,d:['ceylon.markdown.core','ListItem']};};
ex$.ListItem=ListItem;
function $init$ListItem(){
if(ListItem.$$===undefined){
m$hkj.initTypeProto(ListItem,'ceylon.markdown.core::ListItem',$init$Block());
(function(listItem$){
//AttributeDecl children at ListItem.ceylon (2:1-2:44)
m$hkj.atr$(listItem$,'children',function(){return this.$c50l24$hp3_;},function($hp4){return this.$c50l24$hp3_=$hp4;},function(){return{mod:$CCMM$,$t:{t:m$hkj.Sequential,a:{Element$Sequential:{t:Node}}},$cont:ListItem,pa:1027,d:['ceylon.markdown.core','ListItem','$at','children']};});
//MethodDecl accept at ListItem.ceylon (4:1-4:86)
listItem$.accept=function($hp5,$7grpmn$){var listItem$=this;
return $hp5.visitListItem(listItem$);
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
Delimiter.$defs$active=function(delimiter$,node,delimiterChar,numOfDelimiters,previous,next,canOpen,canClose){return true};Delimiter.$defs$canOpen=function(delimiter$,node,delimiterChar,numOfDelimiters,previous,next,active,canClose){return true};Delimiter.$defs$canClose=function(delimiter$,node,delimiterChar,numOfDelimiters,previous,next,active,canOpen){return true};Delimiter.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$hkj.Basic},ps:[{nm:'node',mt:'prm',$t:{t:Text},pa:1},{nm:'delimiterChar',mt:'prm',$t:{t:m$hkj.Character},pa:1},{nm:'numOfDelimiters',mt:'prm',$t:{t:m$hkj.Integer},pa:1025},{nm:'previous',mt:'prm',$t:{t:'u',l:[{t:m$hkj.Null},{t:Delimiter}]},pa:1025},{nm:'next',mt:'prm',$t:{t:'u',l:[{t:m$hkj.Null},{t:Delimiter}]},pa:1025},{nm:'active',mt:'prm',def:1,$t:{t:m$hkj.$_Boolean},pa:1025},{nm:'canOpen',mt:'prm',def:1,$t:{t:m$hkj.$_Boolean},pa:1},{nm:'canClose',mt:'prm',def:1,$t:{t:m$hkj.$_Boolean},pa:1}],d:['ceylon.markdown.core','Delimiter']};};
ex$.Delimiter=Delimiter;
function $init$Delimiter(){
if(Delimiter.$$===undefined){
m$hkj.initTypeProto(Delimiter,'ceylon.markdown.core::Delimiter',m$hkj.Basic);
(function(delimiter$){
m$hkj.atr$(delimiter$,'node',function(){return this.node_;},undefined,function(){return{mod:$CCMM$,$t:{t:Text},$cont:Delimiter,pa:1,d:['ceylon.markdown.core','Delimiter','$at','node']};});
m$hkj.atr$(delimiter$,'delimiterChar',function(){return this.delimiterChar_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$hkj.Character},$cont:Delimiter,pa:1,d:['ceylon.markdown.core','Delimiter','$at','delimiterChar']};});
m$hkj.atr$(delimiter$,'numOfDelimiters',function(){return this.numOfDelimiters_;},function($hp6){return this.numOfDelimiters_=$hp6;},function(){return{mod:$CCMM$,$t:{t:m$hkj.Integer},$cont:Delimiter,pa:1025,d:['ceylon.markdown.core','Delimiter','$at','numOfDelimiters']};});
m$hkj.atr$(delimiter$,'previous',function(){return this.previous_;},function($hp7){return this.previous_=$hp7;},function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$hkj.Null},{t:Delimiter}]},$cont:Delimiter,pa:1025,d:['ceylon.markdown.core','Delimiter','$at','previous']};});
m$hkj.atr$(delimiter$,'next',function(){return this.next_;},function($hp8){return this.next_=$hp8;},function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$hkj.Null},{t:Delimiter}]},$cont:Delimiter,pa:1025,d:['ceylon.markdown.core','Delimiter','$at','next']};});
m$hkj.atr$(delimiter$,'active',function(){return this.active_;},function($hp9){return this.active_=$hp9;},function(){return{mod:$CCMM$,$t:{t:m$hkj.$_Boolean},$cont:Delimiter,pa:1025,d:['ceylon.markdown.core','Delimiter','$at','active']};});
m$hkj.atr$(delimiter$,'canOpen',function(){return this.canOpen_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$hkj.$_Boolean},$cont:Delimiter,pa:1,d:['ceylon.markdown.core','Delimiter','$at','canOpen']};});
m$hkj.atr$(delimiter$,'canClose',function(){return this.canClose_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$hkj.$_Boolean},$cont:Delimiter,pa:1,d:['ceylon.markdown.core','Delimiter','$at','canClose']};});
})(Delimiter.$$.prototype);
}
return Delimiter;
}
ex$.$init$Delimiter=$init$Delimiter;
$init$Delimiter();

//ClassDef Block at Block.ceylon (1:0-3:0)
function Block(open,block$){
$init$Block();
if(block$===undefined)m$hkj.throwexc(m$hkj.InvocationException$meta$model("Cannot instantiate abstract class ceylon.markdown.core::Block"),'?','?')
if(open===undefined){open=$init$Block().$defs$open(block$);}
block$.open_=open;
Node(block$);
return block$;
}
Block.$defs$open=function(block$){return true};Block.$crtmm$=function(){return{mod:$CCMM$,'super':{t:Node},ps:[{nm:'open',mt:'prm',def:1,$t:{t:m$hkj.$_Boolean},pa:1025}],pa:257,d:['ceylon.markdown.core','Block']};};
ex$.Block=Block;
function $init$Block(){
if(Block.$$===undefined){
m$hkj.initTypeProto(Block,'ceylon.markdown.core::Block',$init$Node());
(function(block$){
m$hkj.atr$(block$,'open',function(){return this.open_;},function($hpa){return this.open_=$hpa;},function(){return{mod:$CCMM$,$t:{t:m$hkj.$_Boolean},$cont:Block,pa:1025,d:['ceylon.markdown.core','Block','$at','open']};});
//MethodDecl closeBlock at Block.ceylon (2:1-2:41)
block$.closeBlock=function(){var block$=this;
return (block$.open=false);
};
block$.closeBlock.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$hkj.Anything},ps:[],$cont:Block,pa:1,d:['ceylon.markdown.core','Block','$m','closeBlock']};};
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
blockQuote$.$c50l24$hpb_=m$hkj.empty();
return blockQuote$;
}
BlockQuote.$crtmm$=function(){return{mod:$CCMM$,'super':{t:Block},ps:[],pa:1,an:function(){return[m$hkj.doc$($CCMM$,'ceylon.markdown.core:BlockQuote')];},d:['ceylon.markdown.core','BlockQuote']};};
ex$.BlockQuote=BlockQuote;
function $init$BlockQuote(){
if(BlockQuote.$$===undefined){
m$hkj.initTypeProto(BlockQuote,'ceylon.markdown.core::BlockQuote',$init$Block());
(function(blockQuote$){
//AttributeDecl children at BlockQuote.ceylon (8:1-8:44)
m$hkj.atr$(blockQuote$,'children',function(){return this.$c50l24$hpb_;},function($hpc){return this.$c50l24$hpb_=$hpc;},function(){return{mod:$CCMM$,$t:{t:m$hkj.Sequential,a:{Element$Sequential:{t:Node}}},$cont:BlockQuote,pa:1027,d:['ceylon.markdown.core','BlockQuote','$at','children']};});
//MethodDecl accept at BlockQuote.ceylon (10:1-10:88)
blockQuote$.accept=function($hpd,$8lfj4z$){var blockQuote$=this;
return $hpd.visitBlockQuote(blockQuote$);
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
strongEmphasis$.$c50l24$hpe_=m$hkj.empty();
return strongEmphasis$;
}
StrongEmphasis.$crtmm$=function(){return{mod:$CCMM$,'super':{t:Node},ps:[],pa:1,d:['ceylon.markdown.core','StrongEmphasis']};};
ex$.StrongEmphasis=StrongEmphasis;
function $init$StrongEmphasis(){
if(StrongEmphasis.$$===undefined){
m$hkj.initTypeProto(StrongEmphasis,'ceylon.markdown.core::StrongEmphasis',$init$Node());
(function(strongEmphasis$){
//AttributeDecl children at StrongEmphasis.ceylon (2:1-2:44)
m$hkj.atr$(strongEmphasis$,'children',function(){return this.$c50l24$hpe_;},function($hpf){return this.$c50l24$hpe_=$hpf;},function(){return{mod:$CCMM$,$t:{t:m$hkj.Sequential,a:{Element$Sequential:{t:Node}}},$cont:StrongEmphasis,pa:1027,d:['ceylon.markdown.core','StrongEmphasis','$at','children']};});
//MethodDecl accept at StrongEmphasis.ceylon (4:1-4:92)
strongEmphasis$.accept=function($hpg,$n7f2n5$){var strongEmphasis$=this;
return $hpg.visitStrongEmphasis(strongEmphasis$);
};
strongEmphasis$.accept.$crtmm$=function(){return{mod:$CCMM$,$t:'Type$accept',ps:[{nm:'visitor',mt:'prm',$t:{t:Visitor,a:{Type$Visitor:'Type$accept'}}}],$cont:StrongEmphasis,tp:{Type$accept:{}},pa:3,d:['ceylon.markdown.core','StrongEmphasis','$m','accept']};};
})(StrongEmphasis.$$.prototype);
}
return StrongEmphasis;
}
ex$.$init$StrongEmphasis=$init$StrongEmphasis;
$init$StrongEmphasis();
var $hph;
function referenceMap(){if($hph===undefined)throw m$hkj.InitializationError('Attempt to read uninitialized attribute «referenceMap»');return $hph;}
function set$referenceMap($hpi){return $hph=$hpi;};
var $prop$getReferenceMap={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$hkl.HashMap,a:{Key$HashMap:{t:m$hkj.$_String},Item$HashMap:{t:Link}}},pa:1155,d:['ceylon.markdown.core','referenceMap']};}};
ex$.$prop$getReferenceMap=$prop$getReferenceMap;
$prop$getReferenceMap.get=referenceMap;
$prop$getReferenceMap.set=set$referenceMap;
if(set$referenceMap.$crtmm$===undefined)set$referenceMap.$crtmm$=$prop$getReferenceMap.$crtmm$;
//MethodDef parse at parse.ceylon (7:0-28:0)
function parse($hpj){
var $hpk=Document();
set$referenceMap(m$hkl.HashMap(undefined,undefined,undefined,{Key$HashMap:{t:m$hkj.$_String},Item$HashMap:{t:Link}}));
//'for' statement at parse.ceylon (21:1-23:1)
var $hpm,$hpn;for(var $hpl=$hpj.lines.iterator();($hpm=$hpl.next())!==m$hkj.finished();){
$hpn=true;parseLine($hpm,$hpk);
}
if(!$hpn)m$hkj.throwexc(m$hkj.AssertionError("nonempty Iterable with initial \'finished\' element"),'21:1-23:1','parse.ceylon');
var $hpo=inlineParser($hpk);
return $hpo;
}
ex$.parse=parse;
parse.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Document},ps:[{nm:'markdown',mt:'prm',$t:{t:m$hkj.$_String}}],pa:1,an:function(){return[m$hkj.doc$($CCMM$,'ceylon.markdown.core:parse')];},d:['ceylon.markdown.core','parse']};};

//ClassDef UnorderedList at UnorderedList.ceylon (1:0-6:0)
function UnorderedList(bulletChar,unorderedList$){
$init$UnorderedList();
if(unorderedList$===undefined)unorderedList$=new UnorderedList.$$;
unorderedList$.bulletChar_=bulletChar;
List(undefined,unorderedList$);
//AttributeDecl children at UnorderedList.ceylon (2:1-2:44)
unorderedList$.$c50l24$hpp_=m$hkj.empty();
return unorderedList$;
}
UnorderedList.$crtmm$=function(){return{mod:$CCMM$,'super':{t:List},ps:[{nm:'bulletChar',mt:'prm',$t:{t:m$hkj.Character},pa:1}],pa:1,d:['ceylon.markdown.core','UnorderedList']};};
ex$.UnorderedList=UnorderedList;
function $init$UnorderedList(){
if(UnorderedList.$$===undefined){
m$hkj.initTypeProto(UnorderedList,'ceylon.markdown.core::UnorderedList',$init$List());
(function(unorderedList$){
m$hkj.atr$(unorderedList$,'bulletChar',function(){return this.bulletChar_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$hkj.Character},$cont:UnorderedList,pa:1,d:['ceylon.markdown.core','UnorderedList','$at','bulletChar']};});
//AttributeDecl children at UnorderedList.ceylon (2:1-2:44)
m$hkj.atr$(unorderedList$,'children',function(){return this.$c50l24$hpp_;},function($hpq){return this.$c50l24$hpp_=$hpq;},function(){return{mod:$CCMM$,$t:{t:m$hkj.Sequential,a:{Element$Sequential:{t:Node}}},$cont:UnorderedList,pa:1027,d:['ceylon.markdown.core','UnorderedList','$at','children']};});
//MethodDecl accept at UnorderedList.ceylon (4:1-4:91)
unorderedList$.accept=function($hpr,$vr67s$){var unorderedList$=this;
return $hpr.visitUnorderedList(unorderedList$);
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
htmlBlock$.$c50l24$hps_=m$hkj.empty();
return htmlBlock$;
}
HtmlBlock.$crtmm$=function(){return{mod:$CCMM$,'super':{t:Block},ps:[{nm:'text',mt:'prm',$t:{t:m$hkj.$_String},pa:1025},{nm:'type',mt:'prm',$t:{t:m$hkj.Integer},pa:1}],pa:1,d:['ceylon.markdown.core','HtmlBlock']};};
ex$.HtmlBlock=HtmlBlock;
function $init$HtmlBlock(){
if(HtmlBlock.$$===undefined){
m$hkj.initTypeProto(HtmlBlock,'ceylon.markdown.core::HtmlBlock',$init$Block());
(function(htmlBlock$){
m$hkj.atr$(htmlBlock$,'text',function(){return this.text_;},function($hpt){return this.text_=$hpt;},function(){return{mod:$CCMM$,$t:{t:m$hkj.$_String},$cont:HtmlBlock,pa:1025,d:['ceylon.markdown.core','HtmlBlock','$at','text']};});
m$hkj.atr$(htmlBlock$,'type',function(){return this.type_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$hkj.Integer},$cont:HtmlBlock,pa:1,d:['ceylon.markdown.core','HtmlBlock','$at','type']};});
//AttributeDecl children at HtmlBlock.ceylon (2:1-2:44)
m$hkj.atr$(htmlBlock$,'children',function(){return this.$c50l24$hps_;},function($hpu){return this.$c50l24$hps_=$hpu;},function(){return{mod:$CCMM$,$t:{t:m$hkj.Sequential,a:{Element$Sequential:{t:Node}}},$cont:HtmlBlock,pa:1027,d:['ceylon.markdown.core','HtmlBlock','$at','children']};});
//MethodDecl accept at HtmlBlock.ceylon (4:1-4:87)
htmlBlock$.accept=function($hpv,$trpj14$){var htmlBlock$=this;
return $hpv.visitHtmlBlock(htmlBlock$);
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
hardBreak$.$c50l24$hpw_=m$hkj.empty();
return hardBreak$;
}
HardBreak.$crtmm$=function(){return{mod:$CCMM$,'super':{t:Node},ps:[],pa:1,d:['ceylon.markdown.core','HardBreak']};};
ex$.HardBreak=HardBreak;
function $init$HardBreak(){
if(HardBreak.$$===undefined){
m$hkj.initTypeProto(HardBreak,'ceylon.markdown.core::HardBreak',$init$Node());
(function(hardBreak$){
//AttributeDecl children at HardBreak.ceylon (2:1-2:44)
m$hkj.atr$(hardBreak$,'children',function(){return this.$c50l24$hpw_;},function($hpx){return this.$c50l24$hpw_=$hpx;},function(){return{mod:$CCMM$,$t:{t:m$hkj.Sequential,a:{Element$Sequential:{t:Node}}},$cont:HardBreak,pa:1027,d:['ceylon.markdown.core','HardBreak','$at','children']};});
//MethodDecl accept at HardBreak.ceylon (4:1-4:87)
hardBreak$.accept=function($hpy,$zakr3a$){var hardBreak$=this;
return $hpy.visitHardBreak(hardBreak$);
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
emphasis$.$c50l24$hpz_=m$hkj.empty();
return emphasis$;
}
Emphasis.$crtmm$=function(){return{mod:$CCMM$,'super':{t:Node},ps:[],pa:1,d:['ceylon.markdown.core','Emphasis']};};
ex$.Emphasis=Emphasis;
function $init$Emphasis(){
if(Emphasis.$$===undefined){
m$hkj.initTypeProto(Emphasis,'ceylon.markdown.core::Emphasis',$init$Node());
(function(emphasis$){
//AttributeDecl children at Emphasis.ceylon (2:1-2:44)
m$hkj.atr$(emphasis$,'children',function(){return this.$c50l24$hpz_;},function($hq0){return this.$c50l24$hpz_=$hq0;},function(){return{mod:$CCMM$,$t:{t:m$hkj.Sequential,a:{Element$Sequential:{t:Node}}},$cont:Emphasis,pa:1027,d:['ceylon.markdown.core','Emphasis','$at','children']};});
//MethodDecl accept at Emphasis.ceylon (4:1-4:86)
emphasis$.accept=function($hq1,$uqscqy$){var emphasis$=this;
return $hq1.visitEmphasis(emphasis$);
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
if(codeBlock$===undefined)m$hkj.throwexc(m$hkj.InvocationException$meta$model("Cannot instantiate abstract class ceylon.markdown.core::CodeBlock"),'?','?')
codeBlock$.text_=text;
Block(undefined,codeBlock$);
return codeBlock$;
}
CodeBlock.$crtmm$=function(){return{mod:$CCMM$,'super':{t:Block},ps:[{nm:'text',mt:'prm',$t:{t:m$hkj.$_String},pa:1025}],pa:257,d:['ceylon.markdown.core','CodeBlock']};};
ex$.CodeBlock=CodeBlock;
function $init$CodeBlock(){
if(CodeBlock.$$===undefined){
m$hkj.initTypeProto(CodeBlock,'ceylon.markdown.core::CodeBlock',$init$Block());
(function(codeBlock$){
m$hkj.atr$(codeBlock$,'text',function(){return this.text_;},function($hq2){return this.text_=$hq2;},function(){return{mod:$CCMM$,$t:{t:m$hkj.$_String},$cont:CodeBlock,pa:1025,d:['ceylon.markdown.core','CodeBlock','$at','text']};});
})(CodeBlock.$$.prototype);
}
return CodeBlock;
}
ex$.$init$CodeBlock=$init$CodeBlock;
$init$CodeBlock();

//ClassDef Node at Node.ceylon (1:0-22:0)
function Node(node$){
$init$Node();
if(node$===undefined)m$hkj.throwexc(m$hkj.InvocationException$meta$model("Cannot instantiate abstract class ceylon.markdown.core::Node"),'?','?')
//AttributeDecl parent at Node.ceylon (8:1-9:36)
node$.$c50l24$hq3_=null;
return node$;
}
Node.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$hkj.Basic},ps:[],pa:257,an:function(){return[m$hkj.doc$($CCMM$,'ceylon.markdown.core:Node')];},d:['ceylon.markdown.core','Node']};};
ex$.Node=Node;
function $init$Node(){
if(Node.$$===undefined){
m$hkj.initTypeProto(Node,'ceylon.markdown.core::Node',m$hkj.Basic);
(function(node$){
//AttributeDecl children at Node.ceylon (5:1-6:39)
node$.$prop$getChildren={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$hkj.Sequential,a:{Element$Sequential:{t:Node}}},$cont:Node,pa:1031,an:function(){return[m$hkj.doc("The child nodes of this node.")];},d:['ceylon.markdown.core','Node','$at','children']};}};
//AttributeDecl parent at Node.ceylon (8:1-9:36)
m$hkj.atr$(node$,'parent',function(){return this.$c50l24$hq3_;},function($hq4){return this.$c50l24$hq3_=$hq4;},function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$hkj.Null},{t:Node}]},$cont:Node,pa:1025,an:function(){return[m$hkj.doc("This node\'s parent")];},d:['ceylon.markdown.core','Node','$at','parent']};});
//MethodDef appendChild at Node.ceylon (11:1-14:1)
node$.appendChild=function($hq5){
var node$=this;
node$.children=node$.children.withTrailing($hq5,{Other$withTrailing:{t:Node}});
($hq5.parent=node$);
};node$.appendChild.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$hkj.Anything},ps:[{nm:'node',mt:'prm',$t:{t:Node}}],$cont:Node,pa:1,d:['ceylon.markdown.core','Node','$m','appendChild']};};
//MethodDecl removeChild at Node.ceylon (16:1-17:89)
node$.removeChild=function($hq6){var node$=this;
return (node$.children=m$hkj.tpl$([],m$hkj.for$(function(){
//Comprehension at Node.ceylon (17:15-17:66)
var $hq7=node$.children.iterator(),$hq8=m$hkj.finished();
var n$hq8=function(){return $hq8=$hq7.next();}
return function(){
if(n$hq8()!==m$hkj.finished()){
var $hq9=$hq8,$hqa=($hqb=(!m$hkj.$eq$($hq9,$hq6)?$hq9:null),m$hkj.nn$($hqb)?$hqb:null);
return $hqa;
}
return m$hkj.finished();
}
},{Element$Iterable:m$hkj.mut$([{t:m$hkj.Null},{t:Node}]),Absent$Iterable:{t:m$hkj.Null}})).coalesced.sequence(),node$.children);
var $hqb;
};
node$.removeChild.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$hkj.Anything},ps:[{nm:'node',mt:'prm',$t:{t:Node}}],$cont:Node,pa:1,d:['ceylon.markdown.core','Node','$m','removeChild']};};
node$.accept={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:'Type$accept',ps:[{nm:'visitor',mt:'prm',$t:{t:Visitor,a:{Type$Visitor:'Type$accept'}}}],$cont:Node,tp:{Type$accept:{}},pa:5,d:['ceylon.markdown.core','Node','$m','accept']};}};m$hkj.atr$(node$,'string',function(){
var node$=this;
return treeToString(node$);
},undefined,function(){return{mod:$CCMM$,$t:{t:m$hkj.$_String},$cont:Node,pa:3,d:['ceylon.markdown.core','Node','$at','string']};});
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
thematicBreak$.$c50l24$hr8_=m$hkj.empty();
return thematicBreak$;
}
ThematicBreak.$crtmm$=function(){return{mod:$CCMM$,'super':{t:Block},ps:[],pa:1,d:['ceylon.markdown.core','ThematicBreak']};};
ex$.ThematicBreak=ThematicBreak;
function $init$ThematicBreak(){
if(ThematicBreak.$$===undefined){
m$hkj.initTypeProto(ThematicBreak,'ceylon.markdown.core::ThematicBreak',$init$Block());
(function(thematicBreak$){
//AttributeDecl children at ThematicBreak.ceylon (2:1-2:44)
m$hkj.atr$(thematicBreak$,'children',function(){return this.$c50l24$hr8_;},function($hr9){return this.$c50l24$hr8_=$hr9;},function(){return{mod:$CCMM$,$t:{t:m$hkj.Sequential,a:{Element$Sequential:{t:Node}}},$cont:ThematicBreak,pa:1027,d:['ceylon.markdown.core','ThematicBreak','$at','children']};});
//MethodDecl accept at ThematicBreak.ceylon (4:1-4:91)
thematicBreak$.accept=function($hra,$tsu78$){var thematicBreak$=this;
return $hra.visitThematicBreak(thematicBreak$);
};
thematicBreak$.accept.$crtmm$=function(){return{mod:$CCMM$,$t:'Type$accept',ps:[{nm:'visitor',mt:'prm',$t:{t:Visitor,a:{Type$Visitor:'Type$accept'}}}],$cont:ThematicBreak,tp:{Type$accept:{}},pa:3,d:['ceylon.markdown.core','ThematicBreak','$m','accept']};};
})(ThematicBreak.$$.prototype);
}
return ThematicBreak;
}
ex$.$init$ThematicBreak=$init$ThematicBreak;
$init$ThematicBreak();

//ClassDef IndentedCode at IndentedCode.ceylon (1:0-5:0)
function IndentedCode($c50l24$hrb,indentedCode$){
$init$IndentedCode();
if(indentedCode$===undefined)indentedCode$=new IndentedCode.$$;
indentedCode$.$c50l24$hrb_=$c50l24$hrb;
CodeBlock($c50l24$hrb,indentedCode$);
//AttributeDecl children at IndentedCode.ceylon (2:1-2:44)
indentedCode$.$c50l24$hrc_=m$hkj.empty();
return indentedCode$;
}
IndentedCode.$crtmm$=function(){return{mod:$CCMM$,'super':{t:CodeBlock},ps:[{nm:'text',mt:'prm',$t:{t:m$hkj.$_String}}],pa:1,d:['ceylon.markdown.core','IndentedCode']};};
ex$.IndentedCode=IndentedCode;
function $init$IndentedCode(){
if(IndentedCode.$$===undefined){
m$hkj.initTypeProto(IndentedCode,'ceylon.markdown.core::IndentedCode',$init$CodeBlock());
(function(indentedCode$){
m$hkj.atr$(indentedCode$,'$c50l24$hrb',function(){return this.$c50l24$hrb_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$hkj.$_String},$cont:IndentedCode,d:['ceylon.markdown.core','IndentedCode','$at','text$oe46ah']};});
//AttributeDecl children at IndentedCode.ceylon (2:1-2:44)
m$hkj.atr$(indentedCode$,'children',function(){return this.$c50l24$hrc_;},function($hrd){return this.$c50l24$hrc_=$hrd;},function(){return{mod:$CCMM$,$t:{t:m$hkj.Sequential,a:{Element$Sequential:{t:Node}}},$cont:IndentedCode,pa:1027,d:['ceylon.markdown.core','IndentedCode','$at','children']};});
//MethodDecl accept at IndentedCode.ceylon (4:1-4:90)
indentedCode$.accept=function($hre,$tjn82i$){var indentedCode$=this;
return $hre.visitIndentedCode(indentedCode$);
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
if(list$===undefined)m$hkj.throwexc(m$hkj.InvocationException$meta$model("Cannot instantiate abstract class ceylon.markdown.core::List"),'?','?')
if(tight===undefined){tight=$init$List().$defs$tight(list$);}
list$.tight_=tight;
Block(undefined,list$);
return list$;
}
List.$defs$tight=function(list$){return true};List.$crtmm$=function(){return{mod:$CCMM$,'super':{t:Block},ps:[{nm:'tight',mt:'prm',def:1,$t:{t:m$hkj.$_Boolean},pa:1025}],pa:257,d:['ceylon.markdown.core','List']};};
ex$.List=List;
function $init$List(){
if(List.$$===undefined){
m$hkj.initTypeProto(List,'ceylon.markdown.core::List',$init$Block());
(function(list$){
m$hkj.atr$(list$,'tight',function(){return this.tight_;},function($hrf){return this.tight_=$hrf;},function(){return{mod:$CCMM$,$t:{t:m$hkj.$_Boolean},$cont:List,pa:1025,d:['ceylon.markdown.core','List','$at','tight']};});
})(List.$$.prototype);
}
return List;
}
ex$.$init$List=$init$List;
$init$List();

//ClassDef FencedCode at FencedCode.ceylon (1:0-5:0)
function FencedCode($c50l24$hrg,infoString,fenceLevel,fencedCode$){
$init$FencedCode();
if(fencedCode$===undefined)fencedCode$=new FencedCode.$$;
fencedCode$.$c50l24$hrg_=$c50l24$hrg;
fencedCode$.infoString_=infoString;
fencedCode$.fenceLevel_=fenceLevel;
CodeBlock($c50l24$hrg,fencedCode$);
//AttributeDecl children at FencedCode.ceylon (2:1-2:44)
fencedCode$.$c50l24$hrh_=m$hkj.empty();
return fencedCode$;
}
FencedCode.$crtmm$=function(){return{mod:$CCMM$,'super':{t:CodeBlock},ps:[{nm:'text',mt:'prm',$t:{t:m$hkj.$_String}},{nm:'infoString',mt:'prm',$t:{t:m$hkj.$_String},pa:1},{nm:'fenceLevel',mt:'prm',$t:{t:m$hkj.Integer},pa:1}],pa:1,d:['ceylon.markdown.core','FencedCode']};};
ex$.FencedCode=FencedCode;
function $init$FencedCode(){
if(FencedCode.$$===undefined){
m$hkj.initTypeProto(FencedCode,'ceylon.markdown.core::FencedCode',$init$CodeBlock());
(function(fencedCode$){
m$hkj.atr$(fencedCode$,'$c50l24$hrg',function(){return this.$c50l24$hrg_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$hkj.$_String},$cont:FencedCode,d:['ceylon.markdown.core','FencedCode','$at','text$aydor5']};});
m$hkj.atr$(fencedCode$,'infoString',function(){return this.infoString_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$hkj.$_String},$cont:FencedCode,pa:1,d:['ceylon.markdown.core','FencedCode','$at','infoString']};});
m$hkj.atr$(fencedCode$,'fenceLevel',function(){return this.fenceLevel_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$hkj.Integer},$cont:FencedCode,pa:1,d:['ceylon.markdown.core','FencedCode','$at','fenceLevel']};});
//AttributeDecl children at FencedCode.ceylon (2:1-2:44)
m$hkj.atr$(fencedCode$,'children',function(){return this.$c50l24$hrh_;},function($hri){return this.$c50l24$hrh_=$hri;},function(){return{mod:$CCMM$,$t:{t:m$hkj.Sequential,a:{Element$Sequential:{t:Node}}},$cont:FencedCode,pa:1027,d:['ceylon.markdown.core','FencedCode','$at','children']};});
//MethodDecl accept at FencedCode.ceylon (4:1-4:88)
fencedCode$.accept=function($hrj,$z84hhu$){var fencedCode$=this;
return $hrj.visitFencedCode(fencedCode$);
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
heading$.$c50l24$hrk_=m$hkj.empty();
return heading$;
}
Heading.$crtmm$=function(){return{mod:$CCMM$,'super':{t:Block},ps:[{nm:'level',mt:'prm',$t:{t:m$hkj.Integer},pa:1}],pa:1,d:['ceylon.markdown.core','Heading']};};
ex$.Heading=Heading;
function $init$Heading(){
if(Heading.$$===undefined){
m$hkj.initTypeProto(Heading,'ceylon.markdown.core::Heading',$init$Block());
(function(heading$){
m$hkj.atr$(heading$,'level',function(){return this.level_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$hkj.Integer},$cont:Heading,pa:1,d:['ceylon.markdown.core','Heading','$at','level']};});
//AttributeDecl children at Heading.ceylon (2:1-2:44)
m$hkj.atr$(heading$,'children',function(){return this.$c50l24$hrk_;},function($hrl){return this.$c50l24$hrk_=$hrl;},function(){return{mod:$CCMM$,$t:{t:m$hkj.Sequential,a:{Element$Sequential:{t:Node}}},$cont:Heading,pa:1027,d:['ceylon.markdown.core','Heading','$at','children']};});
//MethodDecl accept at Heading.ceylon (4:1-4:85)
heading$.accept=function($hrm,$t74cag$){var heading$=this;
return $hrm.visitHeading(heading$);
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
htmlInline$.$c50l24$hrn_=m$hkj.empty();
return htmlInline$;
}
HtmlInline.$crtmm$=function(){return{mod:$CCMM$,'super':{t:Node},ps:[{nm:'text',mt:'prm',$t:{t:m$hkj.$_String},pa:1}],pa:1,d:['ceylon.markdown.core','HtmlInline']};};
ex$.HtmlInline=HtmlInline;
function $init$HtmlInline(){
if(HtmlInline.$$===undefined){
m$hkj.initTypeProto(HtmlInline,'ceylon.markdown.core::HtmlInline',$init$Node());
(function(htmlInline$){
m$hkj.atr$(htmlInline$,'text',function(){return this.text_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$hkj.$_String},$cont:HtmlInline,pa:1,d:['ceylon.markdown.core','HtmlInline','$at','text']};});
//AttributeDecl children at HtmlInline.ceylon (2:1-2:44)
m$hkj.atr$(htmlInline$,'children',function(){return this.$c50l24$hrn_;},function($hro){return this.$c50l24$hrn_=$hro;},function(){return{mod:$CCMM$,$t:{t:m$hkj.Sequential,a:{Element$Sequential:{t:Node}}},$cont:HtmlInline,pa:1027,d:['ceylon.markdown.core','HtmlInline','$at','children']};});
//MethodDecl accept at HtmlInline.ceylon (4:1-4:88)
htmlInline$.accept=function($hrp,$45emdq$){var htmlInline$=this;
return $hrp.visitHtmlInline(htmlInline$);
};
htmlInline$.accept.$crtmm$=function(){return{mod:$CCMM$,$t:'Type$accept',ps:[{nm:'visitor',mt:'prm',$t:{t:Visitor,a:{Type$Visitor:'Type$accept'}}}],$cont:HtmlInline,tp:{Type$accept:{}},pa:3,d:['ceylon.markdown.core','HtmlInline','$m','accept']};};
})(HtmlInline.$$.prototype);
}
return HtmlInline;
}
ex$.$init$HtmlInline=$init$HtmlInline;
$init$HtmlInline();

//MethodDef treeToString at treeToString.ceylon (4:0-51:0)
function treeToString($hru,$hrv){
if($hrv===undefined){$hrv=(0);}
var $hrw=m$hkj.type$meta($hru,{Type$type:{t:Node}}).declaration.name;
var $hrx=m$hkj.StringBuilder();
$hrx.append("\t".repeat($hrv).plus($hrw));
//Switch statement at treeToString.ceylon (11:1-44:1)
var $hry=$hru;
if(m$hkj.is$($hry,{t:Text})) {
$hrx.append(": \n".plus("\t".repeat($hrv.plus(1))).plus("\"".plus($hry.text).plus("\"")).plus("\n"));
}
else if(m$hkj.is$($hry,{t:CodeBlock})) {
$hrx.append(": \n".plus("\t".repeat($hrv.plus(1))).plus("\"".plus($hry.text).plus("\"")).plus("\n"));
}
else if(m$hkj.is$($hry,{t:Code})) {
$hrx.append(": \n".plus("\t".repeat($hrv.plus(1))).plus("\"".plus($hry.text).plus("\"")).plus("\n"));
}
else if(m$hkj.is$($hry,{t:Heading})) {
$hrx.append(" (".plus($hry.level.string).plus("): \n"));
}
else if(m$hkj.is$($hry,{t:HtmlBlock})) {
$hrx.append(": \n".plus("\t".repeat($hrv.plus(1))).plus("\"".plus($hry.text).plus("\"")).plus("\n"));
}
else if(m$hkj.is$($hry,{t:HtmlInline})) {
$hrx.append(": \n".plus("\t".repeat($hrv.plus(1))).plus("\"".plus($hry.text).plus("\"")).plus("\n"));
}
else if(m$hkj.is$($hry,{t:OrderedList})) {
$hrx.append(" (start=".plus($hry.startsWith.string).plus(", delimeter=\'").plus($hry.delimeter.string).plus("\', tight=\'").plus($hry.tight.string).plus("\'): \n"));
}
else if(m$hkj.is$($hry,{t:UnorderedList})) {
$hrx.append(" (bulletChar=\'".plus($hry.bulletChar.string).plus("\', tight=\'").plus($hry.tight.string).plus("\'): \n"));
}
else if(m$hkj.is$($hry,{t:Link})) {
$hrx.append(" (destination=\'".plus($hry.destination).plus("\', title=\'").plus($hry.title).plus("\'): \n"));
}
else if(m$hkj.is$($hry,{t:Image})) {
$hrx.append(" (destination=\'".plus($hry.destination).plus("\', title=\'").plus($hry.title).plus("\'): \n"));
}
else{
$hrx.append(": \n");
}//End switch statement at treeToString.ceylon (11:1-44:1)
//'for' statement at treeToString.ceylon (46:1-48:1)
var $hs0;for(var $hrz=$hru.children.iterator();($hs0=$hrz.next())!==m$hkj.finished();){
$hrx.append(treeToString($hs0,$hrv.plus(1)));
}
return $hrx.string;
};treeToString.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$hkj.$_String},ps:[{nm:'node',mt:'prm',$t:{t:Node}},{nm:'level',mt:'prm',def:1,$t:{t:m$hkj.Integer}}],d:['ceylon.markdown.core','treeToString']};};

//InterfaceDef Visitor at Visitor.ceylon (1:0-25:0)
function Visitor($$targs$$,visitor$){
m$hkj.set_type_args(visitor$,$$targs$$,Visitor);
}
Visitor.$crtmm$=function(){return{mod:$CCMM$,tp:{Type$Visitor:{}},pa:1,an:function(){return[m$hkj.doc("\nAn AST visitor for Markdown.")];},d:['ceylon.markdown.core','Visitor']};};
ex$.Visitor=Visitor;
function $init$Visitor(){
if(Visitor.$$===undefined){
m$hkj.initTypeProtoI(Visitor,'ceylon.markdown.core::Visitor');
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
paragraph$.$c50l24$hs1_=m$hkj.empty();
return paragraph$;
}
Paragraph.$crtmm$=function(){return{mod:$CCMM$,'super':{t:Block},ps:[],pa:1,d:['ceylon.markdown.core','Paragraph']};};
ex$.Paragraph=Paragraph;
function $init$Paragraph(){
if(Paragraph.$$===undefined){
m$hkj.initTypeProto(Paragraph,'ceylon.markdown.core::Paragraph',$init$Block());
(function(paragraph$){
//AttributeDecl children at Paragraph.ceylon (2:1-2:44)
m$hkj.atr$(paragraph$,'children',function(){return this.$c50l24$hs1_;},function($hs2){return this.$c50l24$hs1_=$hs2;},function(){return{mod:$CCMM$,$t:{t:m$hkj.Sequential,a:{Element$Sequential:{t:Node}}},$cont:Paragraph,pa:1027,d:['ceylon.markdown.core','Paragraph','$at','children']};});
//MethodDecl accept at Paragraph.ceylon (4:1-4:87)
paragraph$.accept=function($hs3,$yddgvo$){var paragraph$=this;
return $hs3.visitParagraph(paragraph$);
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
link$.$c50l24$hsy_=m$hkj.empty();
return link$;
}
Link.$defs$title=function(link$,destination){return ""};Link.$crtmm$=function(){return{mod:$CCMM$,'super':{t:Node},ps:[{nm:'destination',mt:'prm',$t:{t:m$hkj.$_String},pa:1},{nm:'title',mt:'prm',def:1,$t:{t:m$hkj.$_String},pa:1}],pa:1,d:['ceylon.markdown.core','Link']};};
ex$.Link=Link;
function $init$Link(){
if(Link.$$===undefined){
m$hkj.initTypeProto(Link,'ceylon.markdown.core::Link',$init$Node());
(function(link$){
m$hkj.atr$(link$,'destination',function(){return this.destination_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$hkj.$_String},$cont:Link,pa:1,d:['ceylon.markdown.core','Link','$at','destination']};});
m$hkj.atr$(link$,'title',function(){return this.title_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$hkj.$_String},$cont:Link,pa:1,d:['ceylon.markdown.core','Link','$at','title']};});
//AttributeDecl children at Link.ceylon (2:1-2:44)
m$hkj.atr$(link$,'children',function(){return this.$c50l24$hsy_;},function($hsz){return this.$c50l24$hsy_=$hsz;},function(){return{mod:$CCMM$,$t:{t:m$hkj.Sequential,a:{Element$Sequential:{t:Node}}},$cont:Link,pa:1027,d:['ceylon.markdown.core','Link','$at','children']};});
//MethodDecl accept at Link.ceylon (4:1-4:82)
link$.accept=function($ht0,$o4sjzs$){var link$=this;
return $ht0.visitLink(link$);
};
link$.accept.$crtmm$=function(){return{mod:$CCMM$,$t:'Type$accept',ps:[{nm:'visitor',mt:'prm',$t:{t:Visitor,a:{Type$Visitor:'Type$accept'}}}],$cont:Link,tp:{Type$accept:{}},pa:3,d:['ceylon.markdown.core','Link','$m','accept']};};
})(Link.$$.prototype);
}
return Link;
}
ex$.$init$Link=$init$Link;
$init$Link();

//MethodDef parseReference at inlineParser.ceylon (8:0-84:0)
function parseReference($ht1){
var $ht2;
var $ht3;
var $ht4="";
var $ht5;
while(m$hkj.is$(($ht5=$ht1),{t:Text})&&$ht5.text.startsWith("[")){
var $ht6=$ht5.text;
var $ht7=linkReferencePattern().find($ht6);
var $ht8;
if(m$hkj.nn$(($ht8=$ht7))){
$ht2=$ht8.matched.replaceFirst("[","").replaceLast("]:","");
$ht6=$ht6.spanFrom($ht8.end).trimLeading(m$hkj.jsc$2(($ht9=m$hkj.Character(10,true),m$hkj.jsc$3($ht9,$ht9.equals)),[{nm:'that',mt:'prm',$t:{t:m$hkj.$_Object}}],{})).trimLeading(m$hkj.jsc$2(($hta=m$hkj.Character(32,true),m$hkj.jsc$3($hta,$hta.equals)),[{nm:'that',mt:'prm',$t:{t:m$hkj.$_Object}}],{}));
var $ht9,$hta;
}
else{
return;
}
function $htb(){return $ht7;}
var $htc=linkDestinationBraces().find($ht6);
var $htd=linkDestination().find($ht6);
var $hte;
if(m$hkj.nn$(($hte=$htc))){
$ht3=$hte.matched.replaceFirst("<","").replaceLast(">","");
$ht6=$ht6.spanFrom($hte.end).trimLeading(m$hkj.jsc$2(($htf=m$hkj.Character(10,true),m$hkj.jsc$3($htf,$htf.equals)),[{nm:'that',mt:'prm',$t:{t:m$hkj.$_Object}}],{})).trimLeading(m$hkj.jsc$2(($htg=m$hkj.Character(32,true),m$hkj.jsc$3($htg,$htg.equals)),[{nm:'that',mt:'prm',$t:{t:m$hkj.$_Object}}],{}));
var $htf,$htg;
}
else{
var $hth;
if(m$hkj.nn$(($hth=$htd))){
$ht3=$hth.matched;
$ht6=$ht6.spanFrom($hth.end).trimLeading(m$hkj.jsc$2(($hti=m$hkj.Character(10,true),m$hkj.jsc$3($hti,$hti.equals)),[{nm:'that',mt:'prm',$t:{t:m$hkj.$_Object}}],{})).trimLeading(m$hkj.jsc$2(($htj=m$hkj.Character(32,true),m$hkj.jsc$3($htj,$htj.equals)),[{nm:'that',mt:'prm',$t:{t:m$hkj.$_Object}}],{}));
var $hti,$htj;
}
else{
return;
}
}
var $htk=linkTitlePattern().find($ht6);
var $htl;
if(m$hkj.nn$(($htl=$htk))){
$ht4=$htl.matched.span(1,$htl.end.minus(2));
$ht6=$ht6.spanFrom($htl.end).trimLeading(m$hkj.jsc$2(($htm=m$hkj.Character(10,true),m$hkj.jsc$3($htm,$htm.equals)),[{nm:'that',mt:'prm',$t:{t:m$hkj.$_Object}}],{})).trimLeading(m$hkj.jsc$2(($htn=m$hkj.Character(32,true),m$hkj.jsc$3($htn,$htn.equals)),[{nm:'that',mt:'prm',$t:{t:m$hkj.$_Object}}],{}));
var $htm,$htn;
}
($ht5.text=$ht6);
var $hto=normalizeReference($ht2);
if(!referenceMap().defines($ht2)){
var $htp=Link(unescapeString($ht3),unescapeString($ht4));
referenceMap().put($hto,$htp);
}
}
//'for' statement at inlineParser.ceylon (77:1-83:1)
var $htr;for(var $htq=$ht1.children.iterator();($htr=$htq.next())!==m$hkj.finished();){
parseReference($htr);
var $hts,$htt;
if(m$hkj.is$(($hts=$htr),{t:Paragraph})&&m$hkj.is$(($htt=$hts.children.$_get(0)),{t:Text})&&m$hkj.$eq$($htt.text,"")){
$ht1.removeChild($hts);
}
}
};parseReference.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$hkj.Anything},ps:[{nm:'node',mt:'prm',$t:{t:Node}}],d:['ceylon.markdown.core','parseReference']};};
//MethodDef parseInlines at inlineParser.ceylon (86:0-559:0)
function parseInlines($htu,$htv){
var $htw=null;
var $htx;
if(m$hkj.is$(($htx=$htu),{t:Text})){
var $hty=$htx.text;
var $htz="";
var $hu0=(0);
while(($hu0<$hty.size)){
var $hu1=($hu2=$hty.$_get($hu0),m$hkj.nn$($hu2)?$hu2:m$hkj.Character(32,true));
var $hu2;
//Switch statement at inlineParser.ceylon (96:3-544:3)
var $hu3=$hu1;
if($hu3.equals(m$hkj.Character(10,true))) {
$htv.removeChild($htx);
if(!m$hkj.$eq$($htz,"")){
$htv.appendChild(Text($htz.trimTrailing(m$hkj.jsc$2(($hu4=m$hkj.Character(32,true),m$hkj.jsc$3($hu4,$hu4.equals)),[{nm:'that',mt:'prm',$t:{t:m$hkj.$_Object}}],{}))));
var $hu4;
}
$htv.appendChild(($hu5=($htz.endsWith("  ")?HardBreak():null),m$hkj.nn$($hu5)?$hu5:SoftBreak()));
var $hu5;
$htz="";
}
else if($hu3.equals(m$hkj.Character(92,true))) {
$htv.removeChild($htx);
if(!m$hkj.$eq$($htz,"")){
$htv.appendChild(Text($htz));
}
($hu6=$hu0,$hu0=$hu6.successor,$hu6);
var $hu6;
var $hu7;
if(m$hkj.nn$(($hu7=$hty.$_get($hu0)))&&m$hkj.$eq$($hu7,m$hkj.Character(10,true))){
$htv.appendChild(HardBreak());
}
else{
var $hu8;
if(m$hkj.nn$(($hu8=$hty.$_get($hu0)))&&reEscapable().test($hu8.string)){
$htv.appendChild(Text($hu8.string));
}
else{
$htv.appendChild(Text($hu1.string));
($hu9=$hu0,$hu0=$hu9.predecessor,$hu9);
var $hu9;
}
}
$htz="";
}
else if($hu3.equals(m$hkj.Character(96,true))) {
$htv.removeChild($htx);
if(!m$hkj.$eq$($htz,"")){
$htv.appendChild(Text($htz));
}
var $hua=true;
var $hub=ticksHere().find($hty.spanFrom($hu0));
var $huc;
if(m$hkj.nn$(($huc=$hub))){
var $hud=$huc.matched;
($hu0=$hu0.plus($huc.end));
var $hue=$hu0;
//'for' statement at inlineParser.ceylon (140:5-157:5)//EXITS!
var $hug;for(var $huf=reTicks().findAll($hty.spanFrom($hu0)).iterator();($hug=$huf.next())!==m$hkj.finished();){
if(m$hkj.$eq$($hug.matched,$hud)){
$htv.appendChild(($huh=($hui=$hty.measure($hue,$hug.start).trimmed,$huj=" ",($huk=whitespace(),m$hkj.jsc$3($huk,$huk.$_replace))($hui,$huj)),Code($huh)));
var $huh,$hui,$huj,$huk;
$hua=false;
($hu0=$hu0.plus($hug.end.minus(1)));
break;
}
}
if($hua){
$hu0=$hue.minus(1);
$htv.appendChild(Text($hud));
}
$htz="";
}
}
else if($hu3.equals(m$hkj.Character(42,true)) || $hu3.equals(m$hkj.Character(95,true))) {
$htv.removeChild($htx);
if(!m$hkj.$eq$($htz,"")){
$htv.appendChild(Text($htz));
}
var $hul=scanDelimiters($hty,$hu0,$hu1),$hum=$hul.$_get(0),$hun=$hul.$_get(1),$huo=$hul.$_get(2);
var $hup=$hu0;
($hu0=$hu0.plus($hum.minus(1)));
var $huq=Text($hty.span($hup,$hu0));
$htv.appendChild($huq);
var $hur;
if(m$hkj.nn$(($hur=$htw))){
var $hus=($hut=$huq,$huu=$hu1,$huv=$hum,$huw=$hur,$hux=null,$huy=$hun,$huz=$huo,Delimiter($hut,$huu,$huv,$huw,$hux,undefined,$huy,$huz));
var $hut,$huu,$huv,$huw,$hux,$huy,$huz;
($hur.next=$hus);
$htw=$hus;
}
else{
$htw=($hv0=$huq,$hv1=$hu1,$hv2=$hum,$hv3=null,$hv4=null,$hv5=$hun,$hv6=$huo,Delimiter($hv0,$hv1,$hv2,$hv3,$hv4,undefined,$hv5,$hv6));
var $hv0,$hv1,$hv2,$hv3,$hv4,$hv5,$hv6;
}
$htz="";
}
else if($hu3.equals(m$hkj.Character(91,true))) {
$htv.removeChild($htx);
if(!m$hkj.$eq$($htz,"")){
$htv.appendChild(Text($htz));
}
var $hv7=Text($hu1.string);
$htv.appendChild($hv7);
var $hv8;
if(m$hkj.nn$(($hv8=$htw))){
var $hv9=($hva=$hv7,$hvb=$hu1,$hvc=(1),$hvd=$hv8,$hve=null,Delimiter($hva,$hvb,$hvc,$hvd,$hve,undefined,undefined,undefined));
var $hva,$hvb,$hvc,$hvd,$hve;
($hv8.next=$hv9);
$htw=$hv9;
}
else{
$htw=($hvf=$hv7,$hvg=$hu1,$hvh=(1),$hvi=null,$hvj=null,Delimiter($hvf,$hvg,$hvh,$hvi,$hvj,undefined,undefined,undefined));
var $hvf,$hvg,$hvh,$hvi,$hvj;
}
$htz="";
}
else if($hu3.equals(m$hkj.Character(33,true))) {
$htv.removeChild($htx);
if(!m$hkj.$eq$($htz,"")){
$htv.appendChild(Text($htz));
}
var $hvk;
if(m$hkj.nn$(($hvk=$hty.$_get($hu0.plus(1))))&&m$hkj.$eq$($hvk,m$hkj.Character(91,true))){
var $hvl=Text("![");
$htv.appendChild($hvl);
($hvm=$hu0,$hu0=$hvm.successor,$hvm);
var $hvm;
var $hvn;
if(m$hkj.nn$(($hvn=$htw))){
var $hvo=($hvp=$hvl,$hvq=$hu1,$hvr=$hvn.numOfDelimiters.plus(1),$hvs=$hvn,$hvt=null,Delimiter($hvp,$hvq,$hvr,$hvs,$hvt,undefined,undefined,undefined));
var $hvp,$hvq,$hvr,$hvs,$hvt;
($hvn.next=$hvo);
$htw=$hvo;
}
else{
$htw=($hvu=$hvl,$hvv=$hu1,$hvw=(1),$hvx=null,$hvy=null,Delimiter($hvu,$hvv,$hvw,$hvx,$hvy,undefined,undefined,undefined));
var $hvu,$hvv,$hvw,$hvx,$hvy;
}
}
else{
var $hvz=Text("!");
$htv.appendChild($hvz);
}
$htz="";
}
else if($hu3.equals(m$hkj.Character(93,true))) {
$htv.removeChild($htx);
var $hw0=$htw;
var $hw1;
while(m$hkj.nn$(($hw1=$hw0))){
var $hw2=false,$hw3=(function(){var $hw4=$hw1;var $hw5=m$hkj.$eq$($hw4.delimiterChar,m$hkj.Character(91,true));
var $hw6=m$hkj.$eq$($hw4.delimiterChar,m$hkj.Character(33,true));
if(((m$hkj.$eq$($hw4.delimiterChar,m$hkj.Character(91,true))||m$hkj.$eq$($hw4.delimiterChar,m$hkj.Character(33,true)))&&!$hw4.active)){
$htw=removeLastBracket($hw4,$htw);
$hw0=null;
$hw2=true;return;
}
else{
if(($hw5||$hw6)){
var $hw7;
if(m$hkj.nn$(($hw7=$hty.$_get($hu0.plus(1))))&&m$hkj.$eq$($hw7,m$hkj.Character(40,true))){
var $hw8=$hu0;
($hw9=$hu0,$hu0=$hw9.successor,$hw9);
var $hw9;
var $hwa=$hty.spanFrom($hu0.plus(1));
var $hwb="";
var $hwc="";
var $hwd=linkDestinationBraces().find($hwa);
var $hwe=linkDestination().find($hwa);
var $hwf;
if(m$hkj.nn$(($hwf=$hwd))){
$hwb=$hwf.matched.replaceFirst("<","").replaceLast(">","");
$hwa=$hwa.spanFrom($hwf.end);
($hu0=$hu0.plus($hwf.end));
var $hwg;
if(m$hkj.nn$(($hwg=spnl().find($hwa)))){
($hu0=$hu0.plus($hwg.end));
$hwa=$hwa.spanFrom($hwg.end);
}
}
else{
var $hwh;
if(m$hkj.nn$(($hwh=$hwe))){
$hwb=$hwh.matched;
$hwa=$hwa.spanFrom($hwh.end);
($hu0=$hu0.plus($hwh.end));
var $hwi;
if(m$hkj.nn$(($hwi=spnl().find($hwa)))){
($hu0=$hu0.plus($hwi.end));
$hwa=$hwa.spanFrom($hwi.end);
}
}
}
var $hwj=linkTitlePattern().find($hwa);
if(!m$hkj.$eq$($hwb,"")){
var $hwk;
if(m$hkj.nn$(($hwk=$hwj))){
$hwc=$hwk.matched.span(1,$hwk.end.minus(2));
$hwa=$hwa.spanFrom($hwk.end);
($hu0=$hu0.plus($hwk.end));
var $hwl;
if(m$hkj.nn$(($hwl=spnl().find($hwa)))){
($hu0=$hu0.plus($hwl.end));
$hwa=$hwa.spanFrom($hwl.end);
}
}
}
if($hwa.trimmed.startsWith(")")){
var $hwm;
if($hw5){
$hwm=Link(unescapeString($hwb),unescapeString($hwc));
}
else{
$hwm=Image(unescapeString($hwb),unescapeString($hwc));
}
var $hwn=($hwo=$htv.children.firstIndexWhere(m$hkj.jsc$2((function($hwp){return m$hkj.$eq$($hwp,$hw4.node);
}),[{nm:'element',mt:'prm',$t:{t:Node}}],{Arguments$Callable:m$hkj.mtt$([{t:Node}]),Return$Callable:{t:m$hkj.$_Boolean}})),m$hkj.nn$($hwo)?$hwo:(0));
var $hwo;
($hwq=$hwm,$hwq.children=$htv.children.spanFrom($hwn.plus(1)),$hwq.children);
var $hwq;
($hwr=$htv,$hwr.children=$htv.children.spanTo($hwn),$hwr.children);
var $hwr;
$htv.appendChild($hwm);
if(!m$hkj.$eq$($htz,"")){
$hwm.appendChild(Text($htz));
}
if($hw5){
var $hws=$hw4;
var $hwt;
while(m$hkj.nn$(($hwt=$hws))){
if(m$hkj.$eq$($hwt.delimiterChar,m$hkj.Character(91,true))){
($hwt.active=false);
}
$hws=$hwt.previous;
}
}
$htv.removeChild($hw4.node);
processEmphasis($hwm,$hw4,$htw);
$htw=removeLastBracket($hw4,$htw);
($hwu=$hu0,$hu0=$hwu.successor,$hwu);
var $hwu;
}
else{
if(!m$hkj.$eq$($htz,"")){
$htv.appendChild(Text($htz));
}
$htv.appendChild(Text($hu1.string));
$hu0=$hw8;
}
}
else{
var $hwv;
if(m$hkj.nn$(($hwv=referenceMap().$_get(normalizeReference($htz))))){
var $hww;
if($hw5){
$hww=Link($hwv.destination,$hwv.title);
}
else{
$hww=Image($hwv.destination,$hwv.title);
}
$htv.appendChild($hww);
$hww.appendChild(Text($htz));
$htv.removeChild($hw4.node);
processEmphasis($hww,$hw4,$htw);
$htw=removeLastBracket($hw4,$htw);
if($hw5){
var $hwx=$hw4;
var $hwy;
while(m$hkj.nn$(($hwy=$hwx))){
if(m$hkj.$eq$($hwy.delimiterChar,m$hkj.Character(91,true))){
($hwy.active=false);
}
$hwx=$hwy.previous;
}
}
}
else{
var $hwz;
if(m$hkj.nn$(($hwz=linkLabelPattern().find($hty.spanFrom($hu0.plus(1)))))){
var $hx0=$hwz.matched.span(1,$hwz.end.minus(2));
var $hx1;
if(m$hkj.nn$(($hx1=referenceMap().$_get(normalizeReference($hx0))))){
var $hx2;
if($hw5){
$hx2=Link($hx1.destination,$hx1.title);
}
else{
$hx2=Image($hx1.destination,$hx1.title);
}
$htv.appendChild($hx2);
$hx2.appendChild(Text($htz));
$htv.removeChild($hw4.node);
processEmphasis($hx2,$hw4,$htw);
$htw=removeLastBracket($hw4,$htw);
if($hw5){
var $hx3=$hw4;
var $hx4;
while(m$hkj.nn$(($hx4=$hx3))){
if(m$hkj.$eq$($hx4.delimiterChar,m$hkj.Character(91,true))){
($hx4.active=false);
}
$hx3=$hx4.previous;
}
}
($hu0=$hu0.plus($hwz.end));
}
else{
$htw=removeLastBracket($hw4,$htw);
if(!m$hkj.$eq$($htz,"")){
$htv.appendChild(Text($htz));
}
$htv.appendChild(Text($hu1.string));
}
}
else{
$htw=removeLastBracket($hw4,$htw);
$hw0=null;
}
}
}
$hw2=true;return;
}
else{
$hw0=$hw4.previous;
}
}
}());if($hw3!==undefined){return $hw3;}else if($hw2){break;}
}
if(!m$hkj.nn$($hw0)){
if(!m$hkj.$eq$($htz,"")){
$htv.appendChild(Text($htz));
}
$htv.appendChild(Text($hu1.string));
}
$htz="";
}
else if($hu3.equals(m$hkj.Character(60,true))) {
$htv.removeChild($htx);
if(!m$hkj.$eq$($htz,"")){
$htv.appendChild(Text($htz));
}
var $hx5;
var $hx6;
if(m$hkj.nn$(($hx6=emailAutoLink().find($hty.spanFrom($hu0))))){
$hx5=$hx6.matched.span(1,$hx6.end.minus(2));
var $hx7=Link("mailto:".plus($hx5));
$hx7.appendChild(Text($hx5));
$htv.appendChild($hx7);
($hu0=$hu0.plus($hx6.end.minus(1)));
}
else{
var $hx8;
if(m$hkj.nn$(($hx8=autoLink().find($hty.spanFrom($hu0))))){
$hx5=$hx8.matched.span(1,$hx8.end.minus(2));
var $hx9=Link($hx5);
$hx9.appendChild(Text($hx5));
$htv.appendChild($hx9);
($hu0=$hu0.plus($hx8.end.minus(1)));
}
else{
var $hxa;
if(m$hkj.nn$(($hxa=reHtmlTag().find($hty.spanFrom($hu0))))){
var $hxb=HtmlInline($hxa.matched);
$htv.appendChild($hxb);
($hu0=$hu0.plus($hxa.end.minus(1)));
}
else{
$htv.appendChild(Text($hu1.string));
}
}
}
$htz="";
}
else if($hu3.equals(m$hkj.Character(38,true))) {
$htv.removeChild($htx);
if(!m$hkj.$eq$($htz,"")){
$htv.appendChild(Text($htz));
}
var $hxc;
if(m$hkj.nn$(($hxc=reEntityHere().find($hty.spanFrom($hu0))))){
($hu0=$hu0.plus($hxc.end.minus(1)));
$htv.appendChild(Text($hxc.matched));
}
else{
$htv.appendChild(Text($hu1.string));
}
$htz="";
}
else{
($htz=$htz.plus($hu1.string));
}//End switch statement at inlineParser.ceylon (96:3-544:3)
($hxd=$hu0,$hu0=$hxd.successor,$hxd);
var $hxd;
}
if(!m$hkj.$eq$($htz,$hty)&&!m$hkj.$eq$($htz,"")){
$htv.appendChild(Text($htz));
}
processEmphasis($htv,null,$htw);
}
//'for' statement at inlineParser.ceylon (556:1-558:1)
var $hxf;for(var $hxe=$htu.children.iterator();($hxf=$hxe.next())!==m$hkj.finished();){
parseInlines($hxf,$htu);
}
};parseInlines.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$hkj.Anything},ps:[{nm:'node',mt:'prm',$t:{t:Node}},{nm:'parent',mt:'prm',$t:{t:Node}}],d:['ceylon.markdown.core','parseInlines']};};
//MethodDef inlineParser at inlineParser.ceylon (561:0-567:0)
function inlineParser($hxg){
parseReference($hxg);
parseInlines($hxg,$hxg);
return $hxg;
};inlineParser.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Document},ps:[{nm:'document',mt:'prm',$t:{t:Document}}],d:['ceylon.markdown.core','inlineParser']};};
//MethodDef scanDelimiters at inlineParser.ceylon (569:0-609:0)
function scanDelimiters($hxh,$hxi,$hxj){
var $hxk=(0);
var $hxl=$hxi;
var $hxm;
while(m$hkj.nn$(($hxm=$hxh.$_get($hxi)))&&m$hkj.$eq$($hxm,$hxj)){
($hxn=$hxk,$hxk=$hxn.successor,$hxn);
var $hxn;
($hxo=$hxi,$hxi=$hxo.successor,$hxo);
var $hxo;
}
var $hxp=($hxq=(($hxl==(0))?"\n":null),m$hkj.nn$($hxq)?$hxq:$hxh.span($hxl.minus(1),$hxl));
var $hxq;
var $hxr=($hxs=$hxh.$_get($hxi),m$hkj.nn$($hxs)?$hxs:m$hkj.Character(10,true));
var $hxs;
var $hxt=$hxr.string;
var $hxu=punctuation().test($hxp);
var $hxv=unicodeWhitespaceChar().test($hxp);
var $hxw=punctuation().test($hxt);
var $hxx=unicodeWhitespaceChar().test($hxt);
var $hxy=(!$hxx&&(!(($hxw&&!$hxv)&&!$hxu)));
var $hxz=(!$hxv&&(!(($hxu&&!$hxx)&&!$hxw)));
var $hy0;
var $hy1;
if(m$hkj.$eq$($hxj,m$hkj.Character(95,true))){
$hy0=($hxy&&(!$hxz||$hxu));
$hy1=($hxz&&(!$hxy||$hxw));
}
else{
$hy0=$hxy;
$hy1=$hxz;
}
return m$hkj.tpl$([$hxk,$hy0,$hy1]);
};scanDelimiters.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'T',l:[{t:m$hkj.Integer},{t:m$hkj.$_Boolean},{t:m$hkj.$_Boolean}]},ps:[{nm:'text',mt:'prm',$t:{t:m$hkj.$_String}},{nm:'index',mt:'prm',$t:{t:m$hkj.Integer}},{nm:'delimiterChar',mt:'prm',$t:{t:m$hkj.Character}}],d:['ceylon.markdown.core','scanDelimiters']};};
//MethodDef processEmphasis at inlineParser.ceylon (611:0-708:0)
function processEmphasis($hy2,$hy3,$hy4){
var $hy5;
var $hy6;
var $hy7;
var $hy8;
var $hy9;
if(m$hkj.nn$(($hy9=$hy3))){
$hy5=$hy9.next;
}
else{
var $hya=null;
var $hyb;
while(m$hkj.nn$(($hyb=$hy4))&&(m$hkj.$eq$($hyb.delimiterChar,m$hkj.Character(42,true))||m$hkj.$eq$($hyb.delimiterChar,m$hkj.Character(95,true)))){
$hya=$hyb;
$hy4=$hyb.previous;
}
$hy5=$hya;
}
var $hyc=($hyd=m$hkj.$arr$sa$([m$hkj.Entry(m$hkj.Character(42,true),$hy3,{Item$Entry:m$hkj.mut$([{t:m$hkj.Null},{t:Delimiter}]),Key$Entry:{t:m$hkj.Character}}),m$hkj.Entry(m$hkj.Character(95,true),$hy3,{Item$Entry:m$hkj.mut$([{t:m$hkj.Null},{t:Delimiter}]),Key$Entry:{t:m$hkj.Character}})],{t:m$hkj.Entry,a:{Item$Entry:m$hkj.mut$([{t:m$hkj.Null},{t:Delimiter}]),Key$Entry:{t:m$hkj.Character}}},1),m$hkl.HashMap(undefined,undefined,$hyd,{Key$HashMap:{t:m$hkj.Character},Item$HashMap:m$hkj.mut$([{t:m$hkj.Null},{t:Delimiter}])}));
var $hyd;
var $hye;
while(m$hkj.nn$(($hye=$hy5))){
var $hyf=(function(){var $hyg=$hye;var $hyh=$hyg.delimiterChar;
if(!$hyg.canClose){
$hy5=$hyg.next;
}
else{
$hy6=$hyg.previous;
var $hyi=false;
var $hyj;
while(m$hkj.nn$(($hyj=$hy6))&&function(){var $hyk;
if(m$hkj.nn$(($hyk=$hyc.$_get($hyh))))return !m$hkj.$eq$($hyj,$hyk);else return true}()&&function(){var $hyl;
if(m$hkj.nn$(($hyl=$hy3)))return !m$hkj.$eq$($hyj,$hyl);else return true}()){
if((m$hkj.$eq$($hyj.delimiterChar,$hyg.delimiterChar)&&$hyj.canOpen)){
$hyi=true;
break;
}
$hy6=$hyj.previous;
}
$hy8=$hyg;
if((m$hkj.$eq$($hyh,m$hkj.Character(42,true))||m$hkj.$eq$($hyh,m$hkj.Character(95,true)))){
if(!$hyi){
$hy5=$hyg.next;
}
else{
var $hym;
if(m$hkj.nn$(($hym=$hy6))){
var $hyn=(function(){var $hyo=$hym;if((($hyg.numOfDelimiters<3)||($hyo.numOfDelimiters<3))){
$hy7=($hyp=(($hyg.numOfDelimiters<=$hyo.numOfDelimiters)?$hyg.numOfDelimiters:null),m$hkj.nn$($hyp)?$hyp:$hyo.numOfDelimiters);
var $hyp;
}
else{
$hy7=($hyq=(($hyg.numOfDelimiters.remainder(2)==(0))?2:null),m$hkj.nn$($hyq)?$hyq:(1));
var $hyq;
}
($hyr=$hyo,$hyr.numOfDelimiters=$hyr.numOfDelimiters.minus($hy7));
var $hyr;
($hys=$hyg,$hys.numOfDelimiters=$hys.numOfDelimiters.minus($hy7));
var $hys;
($hyo.node.text=$hyo.node.text.spanTo($hyo.node.text.size.minus($hy7).minus(1)));
($hyg.node.text=$hyg.node.text.spanTo($hyg.node.text.size.minus($hy7).minus(1)));
var $hyt=($hyu=(($hy7==(1))?Emphasis():null),m$hkj.nn$($hyu)?$hyu:StrongEmphasis());
var $hyu;
var $hyv=($hyw=$hy2.children.firstIndexWhere(m$hkj.jsc$2((function($hyx){return m$hkj.$eq$($hyx,$hyo.node);
}),[{nm:'element',mt:'prm',$t:{t:Node}}],{Arguments$Callable:m$hkj.mtt$([{t:Node}]),Return$Callable:{t:m$hkj.$_Boolean}})),m$hkj.nn$($hyw)?$hyw:(0));
var $hyw;
var $hyy=($hyz=$hy2.children.firstIndexWhere(m$hkj.jsc$2((function($hz0){return m$hkj.$eq$($hz0,$hyg.node);
}),[{nm:'element',mt:'prm',$t:{t:Node}}],{Arguments$Callable:m$hkj.mtt$([{t:Node}]),Return$Callable:{t:m$hkj.$_Boolean}})),m$hkj.nn$($hyz)?$hyz:(0));
var $hyz;
($hz1=$hyt,$hz1.children=$hy2.children.span($hyv.plus(1),$hyy.minus(1)),$hz1.children);
var $hz1;
var $hz2=$hy2.children.spanFrom($hyy);
($hz3=$hy2,$hz3.children=$hy2.children.spanTo($hyv),$hz3.children);
var $hz3;
$hy2.appendChild($hyt);
//'for' statement at inlineParser.ceylon (682:5-684:5)
var $hz5;for(var $hz4=$hz2.iterator();($hz5=$hz4.next())!==m$hkj.finished();){
$hy2.appendChild($hz5);
}
removeDelimitersBetween($hyo,$hyg);
if(($hyo.numOfDelimiters==(0))){
$hy2.removeChild($hyo.node);
removeLastBracket($hyo,$hy4);
}
if(($hyg.numOfDelimiters==(0))){
$hy2.removeChild($hyg.node);
$hy5=$hyg.next;
removeLastBracket($hyg,$hy4);
}
}());if($hyn!==undefined){return $hyn;}
}
}
if(!$hyi){
$hyc.put($hyh,$hy8.previous);
if(!$hy8.canOpen){
$hy4=removeLastBracket($hy8,$hy4);
}
}
}
}
}());if($hyf!==undefined){return $hyf;}
}
};processEmphasis.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$hkj.Anything},ps:[{nm:'parent',mt:'prm',$t:{t:Node}},{nm:'stackBottom',mt:'prm',$t:{t:'u',l:[{t:m$hkj.Null},{t:Delimiter}]}},{nm:'lastDelimiter',mt:'prm',$t:{t:'u',l:[{t:m$hkj.Null},{t:Delimiter}]}}],d:['ceylon.markdown.core','processEmphasis']};};
//MethodDef removeDelimitersBetween at inlineParser.ceylon (710:0-715:0)
function removeDelimitersBetween($hz6,$hz7){
var $hz8;
if(m$hkj.nn$(($hz8=$hz6.next))&&!m$hkj.$eq$($hz8,$hz7)){
($hz6.next=$hz7);
($hz7.previous=$hz6);
}
};removeDelimitersBetween.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$hkj.Anything},ps:[{nm:'opener',mt:'prm',$t:{t:Delimiter}},{nm:'closer',mt:'prm',$t:{t:Delimiter}}],d:['ceylon.markdown.core','removeDelimitersBetween']};};
//MethodDef removeLastBracket at inlineParser.ceylon (717:0-734:0)
function removeLastBracket($hz9,$hza){
var $hzb,$hzc;
if(m$hkj.nn$(($hzb=$hz9.previous))&&m$hkj.nn$(($hzc=$hz9.next))){
($hzb.next=$hz9.next);
($hzc.previous=$hzb);
}
else{
var $hzd;
if(m$hkj.nn$(($hzd=$hz9.previous))){
($hzd.next=null);
}
else{
var $hze;
if(m$hkj.nn$(($hze=$hz9.next))){
($hze.previous=null);
}
else{
$hza=null;
}
}
}
var $hzf;
if(m$hkj.nn$(($hzf=$hza))&&m$hkj.$eq$($hz9,$hzf)){
$hza=$hzf.previous;
}
return $hza;
};removeLastBracket.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$hkj.Null},{t:Delimiter}]},ps:[{nm:'del',mt:'prm',$t:{t:Delimiter}},{nm:'lastDelimiter',mt:'prm',$t:{t:'u',l:[{t:m$hkj.Null},{t:Delimiter}]}}],d:['ceylon.markdown.core','removeLastBracket']};};
//MethodDecl normalizeReference at inlineParser.ceylon (736:0-737:48)
function normalizeReference($hzg){return whitespace().$_replace($hzg.trimmed.lowercased," ");
};
normalizeReference.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$hkj.$_String},ps:[{nm:'str',mt:'prm',$t:{t:m$hkj.$_String}}],d:['ceylon.markdown.core','normalizeReference']};};
//MethodDef unescapeString at inlineParser.ceylon (739:0-758:0)
function unescapeString($hzh){
var $hzi=m$hkj.StringBuilder();
var $hzj=(0);
//'for' statement at inlineParser.ceylon (743:1-751:1)
var $hzl;for(var $hzk=reEntityOrEscapedChar().findAll($hzh).iterator();($hzl=$hzk.next())!==m$hkj.finished();){
$hzi.append((!m$hkj.$eq$($hzj,$hzl.start)?$hzh.span($hzj,$hzl.start.minus(1)):""));
if($hzl.matched.startsWith("\\")){
$hzi.append($hzl.matched.spanFrom(1));
}
$hzj=$hzl.end;
}
if(!m$hkj.$eq$($hzj,$hzh.size)){
$hzi.append($hzh.spanFrom($hzj));
}
return $hzi.string;
};unescapeString.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$hkj.$_String},ps:[{nm:'str',mt:'prm',$t:{t:m$hkj.$_String}}],d:['ceylon.markdown.core','unescapeString']};};

//ClassDef SoftBreak at SoftBreak.ceylon (1:0-5:0)
function SoftBreak(softBreak$){
$init$SoftBreak();
if(softBreak$===undefined)softBreak$=new SoftBreak.$$;
Node(softBreak$);
//AttributeDecl children at SoftBreak.ceylon (2:1-2:44)
softBreak$.$c50l24$i0g_=m$hkj.empty();
return softBreak$;
}
SoftBreak.$crtmm$=function(){return{mod:$CCMM$,'super':{t:Node},ps:[],pa:1,d:['ceylon.markdown.core','SoftBreak']};};
ex$.SoftBreak=SoftBreak;
function $init$SoftBreak(){
if(SoftBreak.$$===undefined){
m$hkj.initTypeProto(SoftBreak,'ceylon.markdown.core::SoftBreak',$init$Node());
(function(softBreak$){
//AttributeDecl children at SoftBreak.ceylon (2:1-2:44)
m$hkj.atr$(softBreak$,'children',function(){return this.$c50l24$i0g_;},function($i0h){return this.$c50l24$i0g_=$i0h;},function(){return{mod:$CCMM$,$t:{t:m$hkj.Sequential,a:{Element$Sequential:{t:Node}}},$cont:SoftBreak,pa:1027,d:['ceylon.markdown.core','SoftBreak','$at','children']};});
//MethodDecl accept at SoftBreak.ceylon (4:1-4:87)
softBreak$.accept=function($i0i,$u1dyhx$){var softBreak$=this;
return $i0i.visitSoftBreak(softBreak$);
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
text$.$c50l24$i40_=m$hkj.empty();
return text$;
}
Text.$crtmm$=function(){return{mod:$CCMM$,'super':{t:Node},ps:[{nm:'text',mt:'prm',$t:{t:m$hkj.$_String},pa:1025}],pa:1,d:['ceylon.markdown.core','Text']};};
ex$.Text=Text;
function $init$Text(){
if(Text.$$===undefined){
m$hkj.initTypeProto(Text,'ceylon.markdown.core::Text',$init$Node());
(function(text$){
m$hkj.atr$(text$,'text',function(){return this.text_;},function($i41){return this.text_=$i41;},function(){return{mod:$CCMM$,$t:{t:m$hkj.$_String},$cont:Text,pa:1025,d:['ceylon.markdown.core','Text','$at','text']};});
//AttributeDecl children at Text.ceylon (2:1-2:44)
m$hkj.atr$(text$,'children',function(){return this.$c50l24$i40_;},function($i42){return this.$c50l24$i40_=$i42;},function(){return{mod:$CCMM$,$t:{t:m$hkj.Sequential,a:{Element$Sequential:{t:Node}}},$cont:Text,pa:1027,d:['ceylon.markdown.core','Text','$at','children']};});
//MethodDecl accept at Text.ceylon (4:1-4:82)
text$.accept=function($i43,$r18lln$){var text$=this;
return $i43.visitText(text$);
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
document$.$c50l24$i44_=m$hkj.empty();
return document$;
}
Document.$crtmm$=function(){return{mod:$CCMM$,'super':{t:Block},ps:[],pa:1,d:['ceylon.markdown.core','Document']};};
ex$.Document=Document;
function $init$Document(){
if(Document.$$===undefined){
m$hkj.initTypeProto(Document,'ceylon.markdown.core::Document',$init$Block());
(function(document$){
//AttributeDecl children at Document.ceylon (2:1-2:44)
m$hkj.atr$(document$,'children',function(){return this.$c50l24$i44_;},function($i45){return this.$c50l24$i44_=$i45;},function(){return{mod:$CCMM$,$t:{t:m$hkj.Sequential,a:{Element$Sequential:{t:Node}}},$cont:Document,pa:1027,d:['ceylon.markdown.core','Document','$at','children']};});
//MethodDecl accept at Document.ceylon (4:1-4:86)
document$.accept=function($i46,$cv2k8n$){var document$=this;
return $i46.visitDocument(document$);
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
code$.$c50l24$i47_=m$hkj.empty();
return code$;
}
Code.$crtmm$=function(){return{mod:$CCMM$,'super':{t:Node},ps:[{nm:'text',mt:'prm',$t:{t:m$hkj.$_String},pa:1025}],pa:1,an:function(){return[m$hkj.doc$($CCMM$,'ceylon.markdown.core:Code')];},d:['ceylon.markdown.core','Code']};};
ex$.Code=Code;
function $init$Code(){
if(Code.$$===undefined){
m$hkj.initTypeProto(Code,'ceylon.markdown.core::Code',$init$Node());
(function(code$){
m$hkj.atr$(code$,'text',function(){return this.text_;},function($i48){return this.text_=$i48;},function(){return{mod:$CCMM$,$t:{t:m$hkj.$_String},$cont:Code,pa:1025,d:['ceylon.markdown.core','Code','$at','text']};});
//AttributeDecl children at Code.ceylon (8:1-8:44)
m$hkj.atr$(code$,'children',function(){return this.$c50l24$i47_;},function($i49){return this.$c50l24$i47_=$i49;},function(){return{mod:$CCMM$,$t:{t:m$hkj.Sequential,a:{Element$Sequential:{t:Node}}},$cont:Code,pa:1027,d:['ceylon.markdown.core','Code','$at','children']};});
//MethodDecl accept at Code.ceylon (10:1-10:82)
code$.accept=function($i4a,$s3s26z$){var code$=this;
return $i4a.visitCode(code$);
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
image$.$c50l24$i4b_=m$hkj.empty();
return image$;
}
Image.$defs$title=function(image$,destination){return ""};Image.$crtmm$=function(){return{mod:$CCMM$,'super':{t:Node},ps:[{nm:'destination',mt:'prm',$t:{t:m$hkj.$_String},pa:1},{nm:'title',mt:'prm',def:1,$t:{t:m$hkj.$_String},pa:1}],pa:1,d:['ceylon.markdown.core','Image']};};
ex$.Image=Image;
function $init$Image(){
if(Image.$$===undefined){
m$hkj.initTypeProto(Image,'ceylon.markdown.core::Image',$init$Node());
(function(image$){
m$hkj.atr$(image$,'destination',function(){return this.destination_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$hkj.$_String},$cont:Image,pa:1,d:['ceylon.markdown.core','Image','$at','destination']};});
m$hkj.atr$(image$,'title',function(){return this.title_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$hkj.$_String},$cont:Image,pa:1,d:['ceylon.markdown.core','Image','$at','title']};});
//AttributeDecl children at Image.ceylon (2:1-2:44)
m$hkj.atr$(image$,'children',function(){return this.$c50l24$i4b_;},function($i4c){return this.$c50l24$i4b_=$i4c;},function(){return{mod:$CCMM$,$t:{t:m$hkj.Sequential,a:{Element$Sequential:{t:Node}}},$cont:Image,pa:1027,d:['ceylon.markdown.core','Image','$at','children']};});
//MethodDecl accept at Image.ceylon (4:1-4:83)
image$.accept=function($i4d,$dal8w1$){var image$=this;
return $i4d.visitImage(image$);
};
image$.accept.$crtmm$=function(){return{mod:$CCMM$,$t:'Type$accept',ps:[{nm:'visitor',mt:'prm',$t:{t:Visitor,a:{Type$Visitor:'Type$accept'}}}],$cont:Image,tp:{Type$accept:{}},pa:3,d:['ceylon.markdown.core','Image','$m','accept']};};
})(Image.$$.prototype);
}
return Image;
}
ex$.$init$Image=$init$Image;
$init$Image();
ex$.$pkg$ans$ceylon$markdown$core=function(){return[m$hkj.suppressWarnings(m$hkj.$arr$sa$(["ceylonNamespace"],{t:m$hkj.$_String})),m$hkj.shared()];};
ex$.$pkgunsh$ceylon$markdown$core={'Delimiter':Delimiter,'parseReference':parseReference,'parseInlines':parseInlines,'inlineParser':inlineParser,'scanDelimiters':scanDelimiters,'processEmphasis':processEmphasis,'removeDelimitersBetween':removeDelimitersBetween,'removeLastBracket':removeLastBracket,'normalizeReference':normalizeReference,'unescapeString':unescapeString,'referenceMap':$prop$getReferenceMap,'trimSpaces':trimSpaces,'blankLine':$prop$getBlankLine,'parseLine':parseLine,'sameType':sameType,'sameListType':sameListType,'sameOrderedListType':sameOrderedListType,'escapable':$prop$getEscapable,'whitespace':$prop$getWhitespace,'escapedChar':$prop$getEscapedChar,'regChar':$prop$getRegChar,'inParensNoSP':$prop$getInParensNoSP,'spnl':$prop$getSpnl,'ticksHere':$prop$getTicksHere,'reTicks':$prop$getReTicks,'linkLabel':$prop$getLinkLabel,'linkLabelPattern':$prop$getLinkLabelPattern,'linkReferencePattern':$prop$getLinkReferencePattern,'linkTitlePattern':$prop$getLinkTitlePattern,'linkDestinationBraces':$prop$getLinkDestinationBraces,'linkDestination':$prop$getLinkDestination,'tagName':$prop$getTagName,'attributeName':$prop$getAttributeName,'unQuotedValue':$prop$getUnQuotedValue,'singleQuotedValue':$prop$getSingleQuotedValue,'doubleQuotedValue':$prop$getDoubleQuotedValue,'attributeValue':$prop$getAttributeValue,'attributeValueSpec':$prop$getAttributeValueSpec,'attribute':$prop$getAttribute,'openTag':$prop$getOpenTag,'closeTag':$prop$getCloseTag,'atxHeadingPattern':$prop$getAtxHeadingPattern,'atxTrailingPattern':$prop$getAtxTrailingPattern,'orderedListPattern':$prop$getOrderedListPattern,'bulletListPattern':$prop$getBulletListPattern,'setextHeadingPattern':$prop$getSetextHeadingPattern,'fencedCodeblockPattern':$prop$getFencedCodeblockPattern,'closingCodeblockPattern':$prop$getClosingCodeblockPattern,'thematicBreakPattern':$prop$getThematicBreakPattern,'htmlBlockOpen':$prop$getHtmlBlockOpen,'htmlBlockClose':$prop$getHtmlBlockClose,'asciiPunctuation':$prop$getAsciiPunctuation,'punctuation':$prop$getPunctuation,'unicodeWhitespaceChar':$prop$getUnicodeWhitespaceChar,'emailAutoLink':$prop$getEmailAutoLink,'autoLink':$prop$getAutoLink,'htmlComment':$prop$getHtmlComment,'processingInstruction':$prop$getProcessingInstruction,'declaration':$prop$getDeclaration,'cData':$prop$getCData,'htmlTag':$prop$getHtmlTag,'reHtmlTag':$prop$getReHtmlTag,'reEscapable':$prop$getReEscapable,'entity':$prop$getEntity,'reEntityHere':$prop$getReEntityHere,'reEntityOrEscapedChar':$prop$getReEntityOrEscapedChar,'treeToString':treeToString};
});
}(typeof define==='function' && define.amd ? define : function (factory) {
if (typeof exports!=='undefined') { factory(require, exports, module);
} else { throw 'no module loader'; }
}));
