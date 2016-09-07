(function(define) { define(function(require, ex$, module) {
var $$req$ = require; require = (typeof $$ceylon$require == 'undefined') ? $$req$ : function() { return $$ceylon$require('ceylon/interop/browser/1.2.3/ceylon.interop.browser-1.2.3', $$req$, Array.prototype.slice.call(arguments)); }

var _CTM$;function $CCMM$(){if (_CTM$===undefined)_CTM$=require('ceylon/interop/browser/1.2.3/ceylon.interop.browser-1.2.3-model').$CCMM$;return _CTM$;}
ex$.$CCMM$=$CCMM$;
var m$1=require('ceylon/language/1.2.3/ceylon.language-1.2.3');
m$1.$addmod$(m$1,'ceylon.language/1.2.3');
m$1.$addmod$(ex$,'ceylon.interop.browser/1.2.3');
ex$.$mod$ans$=function(){return[m$1.doc$($CCMM$,'','$mod-anns'),m$1.$_native(m$1.$arr$sa$(["js"],{t:m$1.$_String})),m$1.suppressWarnings(m$1.$arr$sa$(["ceylonNamespace"],{t:m$1.$_String}))];};

//InterfaceDef Node at nodes.ceylon (13:0-67:0)
function Node(node$){
EventTarget(node$);
node$.cloneNode$defs$deep=function($178){return false;};
}
Node.dynmem$=['ELEMENT_NODE','ATTRIBUTE_NODE','TEXT_NODE','CDATA_SECTION_NODE','ENTITY_REFERENCE_NODE','ENTITY_NODE','PROCESSING_INSTRUCTION_NODE','COMMENT_NODE','DOCUMENT_NODE','DOCUMENT_TYPE_NODE','DOCUMENT_FRAGMENT_NODE','NOTATION_NODE','nodeType','nodeName','baseURI','ownerDocument','parentNode','parentElement','hasChildNodes','childNodes','firstChild','lastChild','previousSibling','nextSibling','nodeValue','textContent','normalize','cloneNode','isEqualNode','DOCUMENT_POSITION_DISCONNECTED','DOCUMENT_POSITION_PRECEDING','DOCUMENT_POSITION_FOLLOWING','DOCUMENT_POSITION_CONTAINS','DOCUMENT_POSITION_CONTAINED_BY','DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC','compareDocumentPosition','contains','lookupPrefix','lookupNamespaceURI','isDefaultNamespace','insertBefore','appendChild','replaceChild','removeChild'];Node.$crtmm$=function(){return{mod:$CCMM$,sts:[{t:$init$EventTarget()}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.interop.browser.dom:Node')];},d:['ceylon.interop.browser.dom','Node']};};
ex$.Node=Node;
function $init$Node(){
if(Node.$$===undefined){
m$1.initTypeProtoI(Node,'ceylon.interop.browser.dom::Node',$init$EventTarget());
(function(node$){
//AttributeDecl ELEMENT_NODE at nodes.ceylon (16:4-16:40)
node$.$prop$getELEMENT_NODE={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:Node,pa:5,d:['ceylon.interop.browser.dom','Node','$at','ELEMENT_NODE']};}};
//AttributeDecl ATTRIBUTE_NODE at nodes.ceylon (17:4-17:42)
node$.$prop$getATTRIBUTE_NODE={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:Node,pa:5,d:['ceylon.interop.browser.dom','Node','$at','ATTRIBUTE_NODE']};}};
//AttributeDecl TEXT_NODE at nodes.ceylon (18:4-18:37)
node$.$prop$getTEXT_NODE={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:Node,pa:5,d:['ceylon.interop.browser.dom','Node','$at','TEXT_NODE']};}};
//AttributeDecl CDATA_SECTION_NODE at nodes.ceylon (19:4-19:46)
node$.$prop$getCDATA_SECTION_NODE={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:Node,pa:5,d:['ceylon.interop.browser.dom','Node','$at','CDATA_SECTION_NODE']};}};
//AttributeDecl ENTITY_REFERENCE_NODE at nodes.ceylon (20:4-20:49)
node$.$prop$getENTITY_REFERENCE_NODE={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:Node,pa:5,d:['ceylon.interop.browser.dom','Node','$at','ENTITY_REFERENCE_NODE']};}};
//AttributeDecl ENTITY_NODE at nodes.ceylon (21:4-21:39)
node$.$prop$getENTITY_NODE={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:Node,pa:5,d:['ceylon.interop.browser.dom','Node','$at','ENTITY_NODE']};}};
//AttributeDecl PROCESSING_INSTRUCTION_NODE at nodes.ceylon (22:4-22:55)
node$.$prop$getPROCESSING_INSTRUCTION_NODE={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:Node,pa:5,d:['ceylon.interop.browser.dom','Node','$at','PROCESSING_INSTRUCTION_NODE']};}};
//AttributeDecl COMMENT_NODE at nodes.ceylon (23:4-23:40)
node$.$prop$getCOMMENT_NODE={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:Node,pa:5,d:['ceylon.interop.browser.dom','Node','$at','COMMENT_NODE']};}};
//AttributeDecl DOCUMENT_NODE at nodes.ceylon (24:4-24:41)
node$.$prop$getDOCUMENT_NODE={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:Node,pa:5,d:['ceylon.interop.browser.dom','Node','$at','DOCUMENT_NODE']};}};
//AttributeDecl DOCUMENT_TYPE_NODE at nodes.ceylon (25:4-25:46)
node$.$prop$getDOCUMENT_TYPE_NODE={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:Node,pa:5,d:['ceylon.interop.browser.dom','Node','$at','DOCUMENT_TYPE_NODE']};}};
//AttributeDecl DOCUMENT_FRAGMENT_NODE at nodes.ceylon (26:4-26:50)
node$.$prop$getDOCUMENT_FRAGMENT_NODE={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:Node,pa:5,d:['ceylon.interop.browser.dom','Node','$at','DOCUMENT_FRAGMENT_NODE']};}};
//AttributeDecl NOTATION_NODE at nodes.ceylon (27:4-27:41)
node$.$prop$getNOTATION_NODE={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:Node,pa:5,d:['ceylon.interop.browser.dom','Node','$at','NOTATION_NODE']};}};
//AttributeDecl nodeType at nodes.ceylon (28:4-28:34)
node$.$prop$getNodeType={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:Node,pa:5,d:['ceylon.interop.browser.dom','Node','$at','nodeType']};}};
//AttributeDecl nodeName at nodes.ceylon (29:4-29:33)
node$.$prop$getNodeName={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:Node,pa:5,d:['ceylon.interop.browser.dom','Node','$at','nodeName']};}};
//AttributeDecl baseURI at nodes.ceylon (31:4-31:33)
node$.$prop$getBaseURI={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Node,pa:5,d:['ceylon.interop.browser.dom','Node','$at','baseURI']};}};
//AttributeDecl ownerDocument at nodes.ceylon (33:4-33:41)
node$.$prop$getOwnerDocument={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:$init$Document()}]},$cont:Node,pa:5,d:['ceylon.interop.browser.dom','Node','$at','ownerDocument']};}};
//AttributeDecl parentNode at nodes.ceylon (34:4-34:34)
node$.$prop$getParentNode={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:$init$Node()}]},$cont:Node,pa:5,d:['ceylon.interop.browser.dom','Node','$at','parentNode']};}};
//AttributeDecl parentElement at nodes.ceylon (35:4-35:40)
node$.$prop$getParentElement={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:$init$Element()}]},$cont:Node,pa:5,d:['ceylon.interop.browser.dom','Node','$at','parentElement']};}};
node$.hasChildNodes={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[],$cont:Node,pa:5,d:['ceylon.interop.browser.dom','Node','$m','hasChildNodes']};}};
//AttributeDecl childNodes at nodes.ceylon (37:4-37:37)
node$.$prop$getChildNodes={$crtmm$:function(){return{mod:$CCMM$,$t:{t:$init$NodeList()},$cont:Node,pa:5,d:['ceylon.interop.browser.dom','Node','$at','childNodes']};}};
//AttributeDecl firstChild at nodes.ceylon (38:4-38:34)
node$.$prop$getFirstChild={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:$init$Node()}]},$cont:Node,pa:5,d:['ceylon.interop.browser.dom','Node','$at','firstChild']};}};
//AttributeDecl lastChild at nodes.ceylon (39:4-39:33)
node$.$prop$getLastChild={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:$init$Node()}]},$cont:Node,pa:5,d:['ceylon.interop.browser.dom','Node','$at','lastChild']};}};
//AttributeDecl previousSibling at nodes.ceylon (40:4-40:39)
node$.$prop$getPreviousSibling={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:$init$Node()}]},$cont:Node,pa:5,d:['ceylon.interop.browser.dom','Node','$at','previousSibling']};}};
//AttributeDecl nextSibling at nodes.ceylon (41:4-41:35)
node$.$prop$getNextSibling={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:$init$Node()}]},$cont:Node,pa:5,d:['ceylon.interop.browser.dom','Node','$at','nextSibling']};}};
//AttributeDecl nodeValue at nodes.ceylon (43:4-43:44)
node$.$prop$getNodeValue={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Node,pa:1029,d:['ceylon.interop.browser.dom','Node','$at','nodeValue']};}};
//AttributeDecl textContent at nodes.ceylon (44:4-44:46)
node$.$prop$getTextContent={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Node,pa:1029,d:['ceylon.interop.browser.dom','Node','$at','textContent']};}};
node$.normalize={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[],$cont:Node,pa:5,d:['ceylon.interop.browser.dom','Node','$m','normalize']};}};node$.cloneNode={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:$init$Node()},ps:[{nm:'deep',mt:'prm',def:1,$t:{t:m$1.$_Boolean}}],$cont:Node,pa:5,d:['ceylon.interop.browser.dom','Node','$m','cloneNode']};}};node$.isEqualNode={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'node',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},{t:$init$Node()}]}}],$cont:Node,pa:5,d:['ceylon.interop.browser.dom','Node','$m','isEqualNode']};}};
//AttributeDecl DOCUMENT_POSITION_DISCONNECTED at nodes.ceylon (50:4-50:58)
node$.$prop$getDOCUMENT_POSITION_DISCONNECTED={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:Node,pa:5,d:['ceylon.interop.browser.dom','Node','$at','DOCUMENT_POSITION_DISCONNECTED']};}};
//AttributeDecl DOCUMENT_POSITION_PRECEDING at nodes.ceylon (51:4-51:55)
node$.$prop$getDOCUMENT_POSITION_PRECEDING={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:Node,pa:5,d:['ceylon.interop.browser.dom','Node','$at','DOCUMENT_POSITION_PRECEDING']};}};
//AttributeDecl DOCUMENT_POSITION_FOLLOWING at nodes.ceylon (52:4-52:55)
node$.$prop$getDOCUMENT_POSITION_FOLLOWING={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:Node,pa:5,d:['ceylon.interop.browser.dom','Node','$at','DOCUMENT_POSITION_FOLLOWING']};}};
//AttributeDecl DOCUMENT_POSITION_CONTAINS at nodes.ceylon (53:4-53:54)
node$.$prop$getDOCUMENT_POSITION_CONTAINS={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:Node,pa:5,d:['ceylon.interop.browser.dom','Node','$at','DOCUMENT_POSITION_CONTAINS']};}};
//AttributeDecl DOCUMENT_POSITION_CONTAINED_BY at nodes.ceylon (54:4-54:58)
node$.$prop$getDOCUMENT_POSITION_CONTAINED_BY={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:Node,pa:5,d:['ceylon.interop.browser.dom','Node','$at','DOCUMENT_POSITION_CONTAINED_BY']};}};
//AttributeDecl DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC at nodes.ceylon (55:4-55:69)
node$.$prop$getDOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:Node,pa:5,d:['ceylon.interop.browser.dom','Node','$at','DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC']};}};
node$.compareDocumentPosition={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'other',mt:'prm',$t:{t:$init$Node()}}],$cont:Node,pa:5,d:['ceylon.interop.browser.dom','Node','$m','compareDocumentPosition']};}};node$.contains={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'other',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},{t:$init$Node()}]}}],$cont:Node,pa:5,d:['ceylon.interop.browser.dom','Node','$m','contains']};}};node$.lookupPrefix={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},ps:[{nm:'namespace',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}}],$cont:Node,pa:5,d:['ceylon.interop.browser.dom','Node','$m','lookupPrefix']};}};node$.lookupNamespaceURI={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},ps:[{nm:'prefix',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}}],$cont:Node,pa:5,d:['ceylon.interop.browser.dom','Node','$m','lookupNamespaceURI']};}};node$.isDefaultNamespace={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'namespace',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}}],$cont:Node,pa:5,d:['ceylon.interop.browser.dom','Node','$m','isDefaultNamespace']};}};node$.insertBefore={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:$init$Node()},ps:[{nm:'node',mt:'prm',$t:{t:$init$Node()}},{nm:'child',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},{t:$init$Node()}]}}],$cont:Node,pa:5,d:['ceylon.interop.browser.dom','Node','$m','insertBefore']};}};node$.appendChild={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:$init$Node()},ps:[{nm:'node',mt:'prm',$t:{t:$init$Node()}}],$cont:Node,pa:5,d:['ceylon.interop.browser.dom','Node','$m','appendChild']};}};node$.replaceChild={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:$init$Node()},ps:[{nm:'node',mt:'prm',$t:{t:$init$Node()}},{nm:'child',mt:'prm',$t:{t:$init$Node()}}],$cont:Node,pa:5,d:['ceylon.interop.browser.dom','Node','$m','replaceChild']};}};node$.removeChild={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:$init$Node()},ps:[{nm:'child',mt:'prm',$t:{t:$init$Node()}}],$cont:Node,pa:5,d:['ceylon.interop.browser.dom','Node','$m','removeChild']};}};
})(Node.$$.prototype);
}
return Node;
}
ex$.$init$Node=$init$Node;
$init$Node();
//InterfaceDef ChildNode at nodes.ceylon (69:0-71:0)
function ChildNode(childNode$){
}
ChildNode.dynmem$=['remove'];ChildNode.$crtmm$=function(){return{mod:$CCMM$,pa:1,d:['ceylon.interop.browser.dom','ChildNode']};};
ex$.ChildNode=ChildNode;
function $init$ChildNode(){
if(ChildNode.$$===undefined){
m$1.initTypeProtoI(ChildNode,'ceylon.interop.browser.dom::ChildNode');
(function(childNode$){
childNode$.remove={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[],$cont:ChildNode,pa:5,d:['ceylon.interop.browser.dom','ChildNode','$m','remove']};}};
})(ChildNode.$$.prototype);
}
return ChildNode;
}
ex$.$init$ChildNode=$init$ChildNode;
$init$ChildNode();
//InterfaceDef NonElementParentNode at nodes.ceylon (73:0-75:0)
function NonElementParentNode(nonElementParentNode$){
}
NonElementParentNode.dynmem$=['getElementById'];NonElementParentNode.$crtmm$=function(){return{mod:$CCMM$,pa:1,d:['ceylon.interop.browser.dom','NonElementParentNode']};};
ex$.NonElementParentNode=NonElementParentNode;
function $init$NonElementParentNode(){
if(NonElementParentNode.$$===undefined){
m$1.initTypeProtoI(NonElementParentNode,'ceylon.interop.browser.dom::NonElementParentNode');
(function(nonElementParentNode$){
nonElementParentNode$.getElementById={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:$init$Element()}]},ps:[{nm:'elementId',mt:'prm',$t:{t:m$1.$_String}}],$cont:NonElementParentNode,pa:5,d:['ceylon.interop.browser.dom','NonElementParentNode','$m','getElementById']};}};
})(NonElementParentNode.$$.prototype);
}
return NonElementParentNode;
}
ex$.$init$NonElementParentNode=$init$NonElementParentNode;
$init$NonElementParentNode();
//InterfaceDef ParentNode at nodes.ceylon (77:0-85:0)
function ParentNode(parentNode$){
}
ParentNode.dynmem$=['children','firstElementChild','lastElementChild','childElementCount','querySelector','querySelectorAll'];ParentNode.$crtmm$=function(){return{mod:$CCMM$,pa:1,d:['ceylon.interop.browser.dom','ParentNode']};};
ex$.ParentNode=ParentNode;
function $init$ParentNode(){
if(ParentNode.$$===undefined){
m$1.initTypeProtoI(ParentNode,'ceylon.interop.browser.dom::ParentNode');
(function(parentNode$){
//AttributeDecl children at nodes.ceylon (78:4-78:41)
parentNode$.$prop$getChildren={$crtmm$:function(){return{mod:$CCMM$,$t:{t:$init$HTMLCollection()},$cont:ParentNode,pa:5,d:['ceylon.interop.browser.dom','ParentNode','$at','children']};}};
//AttributeDecl firstElementChild at nodes.ceylon (79:4-79:44)
parentNode$.$prop$getFirstElementChild={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:$init$Element()}]},$cont:ParentNode,pa:5,d:['ceylon.interop.browser.dom','ParentNode','$at','firstElementChild']};}};
//AttributeDecl lastElementChild at nodes.ceylon (80:4-80:43)
parentNode$.$prop$getLastElementChild={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:$init$Element()}]},$cont:ParentNode,pa:5,d:['ceylon.interop.browser.dom','ParentNode','$at','lastElementChild']};}};
//AttributeDecl childElementCount at nodes.ceylon (81:4-81:43)
parentNode$.$prop$getChildElementCount={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:ParentNode,pa:5,d:['ceylon.interop.browser.dom','ParentNode','$at','childElementCount']};}};
parentNode$.querySelector={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:$init$Element()}]},ps:[{nm:'selectors',mt:'prm',$t:{t:m$1.$_String}}],$cont:ParentNode,pa:5,d:['ceylon.interop.browser.dom','ParentNode','$m','querySelector']};}};parentNode$.querySelectorAll={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:$init$NodeList()},ps:[{nm:'selectors',mt:'prm',$t:{t:m$1.$_String}}],$cont:ParentNode,pa:5,d:['ceylon.interop.browser.dom','ParentNode','$m','querySelectorAll']};}};
})(ParentNode.$$.prototype);
}
return ParentNode;
}
ex$.$init$ParentNode=$init$ParentNode;
$init$ParentNode();
//InterfaceDef NonDocumentTypeChildNode at nodes.ceylon (87:0-90:0)
function NonDocumentTypeChildNode(nonDocumentTypeChildNode$){
}
NonDocumentTypeChildNode.dynmem$=['previousElementSibling','nextElementSibling'];NonDocumentTypeChildNode.$crtmm$=function(){return{mod:$CCMM$,pa:1,d:['ceylon.interop.browser.dom','NonDocumentTypeChildNode']};};
ex$.NonDocumentTypeChildNode=NonDocumentTypeChildNode;
function $init$NonDocumentTypeChildNode(){
if(NonDocumentTypeChildNode.$$===undefined){
m$1.initTypeProtoI(NonDocumentTypeChildNode,'ceylon.interop.browser.dom::NonDocumentTypeChildNode');
(function(nonDocumentTypeChildNode$){
//AttributeDecl previousElementSibling at nodes.ceylon (88:4-88:49)
nonDocumentTypeChildNode$.$prop$getPreviousElementSibling={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:$init$Element()}]},$cont:NonDocumentTypeChildNode,pa:5,d:['ceylon.interop.browser.dom','NonDocumentTypeChildNode','$at','previousElementSibling']};}};
//AttributeDecl nextElementSibling at nodes.ceylon (89:4-89:45)
nonDocumentTypeChildNode$.$prop$getNextElementSibling={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:$init$Element()}]},$cont:NonDocumentTypeChildNode,pa:5,d:['ceylon.interop.browser.dom','NonDocumentTypeChildNode','$at','nextElementSibling']};}};
})(NonDocumentTypeChildNode.$$.prototype);
}
return NonDocumentTypeChildNode;
}
ex$.$init$NonDocumentTypeChildNode=$init$NonDocumentTypeChildNode;
$init$NonDocumentTypeChildNode();
//InterfaceDef Document at nodes.ceylon (92:0-183:0)
function Document(document$){
Node(document$);
NonElementParentNode(document$);
ParentNode(document$);
GlobalEventHandlers(document$);
document$.importNode$defs$deep=function($179,$17a){return false;};
document$.createNodeIterator$defs$whatToShow=function($17b,$17c,$17d){return 4294967295;};
document$.createNodeIterator$defs$filter=function($17b,$17c,$17d){return null;};
document$.createTreeWalker$defs$whatToShow=function($17e,$17f,$17g){return 4294967295;};
document$.createTreeWalker$defs$filter=function($17e,$17f,$17g){return null;};
document$.open$defs$typeOrUrl=function($17h,$17i,$17j,$17k){return "text/html";};
document$.open$defs$replaceOrName=function($17h,$17i,$17j,$17k){return "";};
document$.open$defs$features=function($17h,$17i,$17j,$17k){return "";};
document$.open$defs$replace=function($17h,$17i,$17j,$17k){return false;};
document$.execCommand$defs$showUI=function($17l,$17m,$17n){return false;};
document$.execCommand$defs$val=function($17l,$17m,$17n){return "";};
}
Document.dynmem$=['implementation','URL','documentURI','origin','compatMode','characterSet','contentType','doctype','documentElement','getElementsByTagName','getElementsByTagNameNS','getElementsByClassName','createElement','createElementNS','createDocumentFragment','createTextNode','createComment','createProcessingInstruction','importNode','adoptNode','createEvent','createRange','createNodeIterator','createTreeWalker','location','domain','referrer','cookie','lastModified','readyState','title','dir','body','head','images','embeds','plugins','links','forms','scripts','getElementsByName','open','close','write','writeln','defaultView','activeElement','hasFocus','designMode','execCommand','queryCommandEnabled','queryCommandIndeterm','queryCommandState','queryCommandSupported','queryCommandValue','onreadystatechange'];Document.$crtmm$=function(){return{mod:$CCMM$,sts:[{t:$init$Node()},{t:$init$NonElementParentNode()},{t:$init$ParentNode()},{t:$init$GlobalEventHandlers()}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.interop.browser.dom:Document')];},d:['ceylon.interop.browser.dom','Document']};};
ex$.Document=Document;
function $init$Document(){
if(Document.$$===undefined){
m$1.initTypeProtoI(Document,'ceylon.interop.browser.dom::Document',$init$Node(),$init$NonElementParentNode(),$init$ParentNode(),$init$GlobalEventHandlers());
(function(document$){
//AttributeDecl implementation at nodes.ceylon (101:4-101:50)
document$.$prop$getImplementation={$crtmm$:function(){return{mod:$CCMM$,$t:{t:$init$DOMImplementation()},$cont:Document,pa:5,d:['ceylon.interop.browser.dom','Document','$at','implementation']};}};
//AttributeDecl URL at nodes.ceylon (102:4-102:30)
document$.$prop$getURL={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:Document,pa:5,d:['ceylon.interop.browser.dom','Document','$at','URL']};}};
//AttributeDecl documentURI at nodes.ceylon (103:4-103:36)
document$.$prop$getDocumentURI={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:Document,pa:5,d:['ceylon.interop.browser.dom','Document','$at','documentURI']};}};
//AttributeDecl origin at nodes.ceylon (104:4-104:32)
document$.$prop$getOrigin={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Document,pa:5,d:['ceylon.interop.browser.dom','Document','$at','origin']};}};
//AttributeDecl compatMode at nodes.ceylon (105:4-105:35)
document$.$prop$getCompatMode={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:Document,pa:5,d:['ceylon.interop.browser.dom','Document','$at','compatMode']};}};
//AttributeDecl characterSet at nodes.ceylon (106:4-106:37)
document$.$prop$getCharacterSet={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:Document,pa:5,d:['ceylon.interop.browser.dom','Document','$at','characterSet']};}};
//AttributeDecl contentType at nodes.ceylon (107:4-107:36)
document$.$prop$getContentType={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:Document,pa:5,d:['ceylon.interop.browser.dom','Document','$at','contentType']};}};
//AttributeDecl doctype at nodes.ceylon (109:4-109:39)
document$.$prop$getDoctype={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:$init$DocumentType()}]},$cont:Document,pa:5,d:['ceylon.interop.browser.dom','Document','$at','doctype']};}};
//AttributeDecl documentElement at nodes.ceylon (110:4-110:42)
document$.$prop$getDocumentElement={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:$init$Element()}]},$cont:Document,pa:5,d:['ceylon.interop.browser.dom','Document','$at','documentElement']};}};
document$.getElementsByTagName={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:$init$HTMLCollection()},ps:[{nm:'localName',mt:'prm',$t:{t:m$1.$_String}}],$cont:Document,pa:5,d:['ceylon.interop.browser.dom','Document','$m','getElementsByTagName']};}};document$.getElementsByTagNameNS={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:$init$HTMLCollection()},ps:[{nm:'namespace',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'localName',mt:'prm',$t:{t:m$1.$_String}}],$cont:Document,pa:5,d:['ceylon.interop.browser.dom','Document','$m','getElementsByTagNameNS']};}};document$.getElementsByClassName={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:$init$HTMLCollection()},ps:[{nm:'classNames',mt:'prm',$t:{t:m$1.$_String}}],$cont:Document,pa:5,d:['ceylon.interop.browser.dom','Document','$m','getElementsByClassName']};}};document$.createElement={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:$init$Element()},ps:[{nm:'localName',mt:'prm',$t:{t:m$1.$_String}}],$cont:Document,pa:5,d:['ceylon.interop.browser.dom','Document','$m','createElement']};}};document$.createElementNS={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:$init$Element()},ps:[{nm:'namespace',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'qualifiedName',mt:'prm',$t:{t:m$1.$_String}}],$cont:Document,pa:5,d:['ceylon.interop.browser.dom','Document','$m','createElementNS']};}};document$.createDocumentFragment={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:$init$DocumentFragment()},ps:[],$cont:Document,pa:5,d:['ceylon.interop.browser.dom','Document','$m','createDocumentFragment']};}};document$.createTextNode={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:$init$Text()},ps:[{nm:'data',mt:'prm',$t:{t:m$1.$_String}}],$cont:Document,pa:5,d:['ceylon.interop.browser.dom','Document','$m','createTextNode']};}};document$.createComment={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:$init$Comment()},ps:[{nm:'data',mt:'prm',$t:{t:m$1.$_String}}],$cont:Document,pa:5,d:['ceylon.interop.browser.dom','Document','$m','createComment']};}};document$.createProcessingInstruction={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:$init$ProcessingInstruction()},ps:[{nm:'target',mt:'prm',$t:{t:m$1.$_String}},{nm:'data',mt:'prm',$t:{t:m$1.$_String}}],$cont:Document,pa:5,d:['ceylon.interop.browser.dom','Document','$m','createProcessingInstruction']};}};document$.importNode={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:$init$Node()},ps:[{nm:'node',mt:'prm',$t:{t:$init$Node()}},{nm:'deep',mt:'prm',def:1,$t:{t:m$1.$_Boolean}}],$cont:Document,pa:5,d:['ceylon.interop.browser.dom','Document','$m','importNode']};}};document$.adoptNode={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:$init$Node()},ps:[{nm:'node',mt:'prm',$t:{t:$init$Node()}}],$cont:Document,pa:5,d:['ceylon.interop.browser.dom','Document','$m','adoptNode']};}};document$.createEvent={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:$init$Event()},ps:[{nm:'interface',mt:'prm',$t:{t:m$1.$_String}}],$cont:Document,pa:5,d:['ceylon.interop.browser.dom','Document','$m','createEvent']};}};document$.createRange={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:$init$Range()},ps:[],$cont:Document,pa:5,d:['ceylon.interop.browser.dom','Document','$m','createRange']};}};document$.createNodeIterator={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:$init$NodeIterator()},ps:[{nm:'root',mt:'prm',$t:{t:$init$Node()}},{nm:'whatToShow',mt:'prm',def:1,$t:{t:m$1.Integer}},{nm:'filter',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:$init$NodeFilter()}]}}],$cont:Document,pa:5,d:['ceylon.interop.browser.dom','Document','$m','createNodeIterator']};}};document$.createTreeWalker={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:$init$TreeWalker()},ps:[{nm:'root',mt:'prm',$t:{t:$init$Node()}},{nm:'whatToShow',mt:'prm',def:1,$t:{t:m$1.Integer}},{nm:'filter',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:$init$NodeFilter()}]}}],$cont:Document,pa:5,d:['ceylon.interop.browser.dom','Document','$m','createTreeWalker']};}};
//AttributeDecl location at nodes.ceylon (135:4-135:36)
document$.$prop$getLocation={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:$init$Location()}]},$cont:Document,pa:5,d:['ceylon.interop.browser.dom','Document','$at','location']};}};
//AttributeDecl domain at nodes.ceylon (136:4-136:40)
document$.$prop$getDomain={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:Document,pa:1029,d:['ceylon.interop.browser.dom','Document','$at','domain']};}};
//AttributeDecl referrer at nodes.ceylon (137:4-137:33)
document$.$prop$getReferrer={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:Document,pa:5,d:['ceylon.interop.browser.dom','Document','$at','referrer']};}};
//AttributeDecl cookie at nodes.ceylon (138:4-138:40)
document$.$prop$getCookie={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:Document,pa:1029,d:['ceylon.interop.browser.dom','Document','$at','cookie']};}};
//AttributeDecl lastModified at nodes.ceylon (139:4-139:37)
document$.$prop$getLastModified={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:Document,pa:5,d:['ceylon.interop.browser.dom','Document','$at','lastModified']};}};
//AttributeDecl readyState at nodes.ceylon (140:4-141:35)
document$.$prop$getReadyState={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:Document,pa:5,an:function(){return[m$1.see(m$1.$arr$sa$([m$1.OpenInterface$jsint(m$1.lmp$(ex$,'ceylon.interop.browser.dom'),DocumentReadyState$dom)],{t:m$1.InterfaceDeclaration$meta$declaration}))];},d:['ceylon.interop.browser.dom','Document','$at','readyState']};}};
//AttributeDecl title at nodes.ceylon (145:4-145:39)
document$.$prop$getTitle={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:Document,pa:1029,d:['ceylon.interop.browser.dom','Document','$at','title']};}};
//AttributeDecl dir at nodes.ceylon (146:4-146:37)
document$.$prop$getDir={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:Document,pa:1029,d:['ceylon.interop.browser.dom','Document','$at','dir']};}};
//AttributeDecl body at nodes.ceylon (147:4-147:44)
document$.$prop$getBody={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:$init$HTMLElement()}]},$cont:Document,pa:1029,d:['ceylon.interop.browser.dom','Document','$at','body']};}};
//AttributeDecl head at nodes.ceylon (148:4-148:39)
document$.$prop$getHead={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:$init$HTMLHeadElement()}]},$cont:Document,pa:5,d:['ceylon.interop.browser.dom','Document','$at','head']};}};
//AttributeDecl images at nodes.ceylon (149:4-149:39)
document$.$prop$getImages={$crtmm$:function(){return{mod:$CCMM$,$t:{t:$init$HTMLCollection()},$cont:Document,pa:5,d:['ceylon.interop.browser.dom','Document','$at','images']};}};
//AttributeDecl embeds at nodes.ceylon (150:4-150:39)
document$.$prop$getEmbeds={$crtmm$:function(){return{mod:$CCMM$,$t:{t:$init$HTMLCollection()},$cont:Document,pa:5,d:['ceylon.interop.browser.dom','Document','$at','embeds']};}};
//AttributeDecl plugins at nodes.ceylon (151:4-151:40)
document$.$prop$getPlugins={$crtmm$:function(){return{mod:$CCMM$,$t:{t:$init$HTMLCollection()},$cont:Document,pa:5,d:['ceylon.interop.browser.dom','Document','$at','plugins']};}};
//AttributeDecl links at nodes.ceylon (152:4-152:38)
document$.$prop$getLinks={$crtmm$:function(){return{mod:$CCMM$,$t:{t:$init$HTMLCollection()},$cont:Document,pa:5,d:['ceylon.interop.browser.dom','Document','$at','links']};}};
//AttributeDecl forms at nodes.ceylon (153:4-153:38)
document$.$prop$getForms={$crtmm$:function(){return{mod:$CCMM$,$t:{t:$init$HTMLCollection()},$cont:Document,pa:5,d:['ceylon.interop.browser.dom','Document','$at','forms']};}};
//AttributeDecl scripts at nodes.ceylon (154:4-154:40)
document$.$prop$getScripts={$crtmm$:function(){return{mod:$CCMM$,$t:{t:$init$HTMLCollection()},$cont:Document,pa:5,d:['ceylon.interop.browser.dom','Document','$at','scripts']};}};
document$.getElementsByName={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:$init$NodeList()},ps:[{nm:'elementName',mt:'prm',$t:{t:m$1.$_String}}],$cont:Document,pa:5,d:['ceylon.interop.browser.dom','Document','$m','getElementsByName']};}};document$.open={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:$init$Document()},WindowProxy()]},ps:[{nm:'typeOrUrl',mt:'prm',def:1,$t:{t:m$1.$_String}},{nm:'replaceOrName',mt:'prm',def:1,$t:{t:m$1.$_String}},{nm:'features',mt:'prm',def:1,$t:{t:m$1.$_String}},{nm:'replace',mt:'prm',def:1,$t:{t:m$1.$_Boolean}}],$cont:Document,pa:5,an:function(){return[m$1.see("openDocument"),m$1.see("openWindow")];},d:['ceylon.interop.browser.dom','Document','$m','open']};}};document$.close={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[],$cont:Document,pa:5,d:['ceylon.interop.browser.dom','Document','$m','close']};}};document$.write={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'text',mt:'prm',$t:{t:m$1.$_String}}],$cont:Document,pa:5,d:['ceylon.interop.browser.dom','Document','$m','write']};}};document$.writeln={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'text',mt:'prm',$t:{t:m$1.$_String}}],$cont:Document,pa:5,d:['ceylon.interop.browser.dom','Document','$m','writeln']};}};
//AttributeDecl defaultView at nodes.ceylon (170:4-170:42)
document$.$prop$getDefaultView={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},WindowProxy()]},$cont:Document,pa:5,d:['ceylon.interop.browser.dom','Document','$at','defaultView']};}};
//AttributeDecl activeElement at nodes.ceylon (171:4-171:40)
document$.$prop$getActiveElement={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:$init$Element()}]},$cont:Document,pa:5,d:['ceylon.interop.browser.dom','Document','$at','activeElement']};}};
document$.hasFocus={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[],$cont:Document,pa:5,d:['ceylon.interop.browser.dom','Document','$m','hasFocus']};}};
//AttributeDecl designMode at nodes.ceylon (173:4-173:44)
document$.$prop$getDesignMode={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:Document,pa:1029,d:['ceylon.interop.browser.dom','Document','$at','designMode']};}};
document$.execCommand={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'commandId',mt:'prm',$t:{t:m$1.$_String}},{nm:'showUI',mt:'prm',def:1,$t:{t:m$1.$_Boolean}},{nm:'val',mt:'prm',def:1,$t:{t:m$1.$_String}}],$cont:Document,pa:5,d:['ceylon.interop.browser.dom','Document','$m','execCommand']};}};document$.queryCommandEnabled={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'commandId',mt:'prm',$t:{t:m$1.$_String}}],$cont:Document,pa:5,d:['ceylon.interop.browser.dom','Document','$m','queryCommandEnabled']};}};document$.queryCommandIndeterm={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'commandId',mt:'prm',$t:{t:m$1.$_String}}],$cont:Document,pa:5,d:['ceylon.interop.browser.dom','Document','$m','queryCommandIndeterm']};}};document$.queryCommandState={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'commandId',mt:'prm',$t:{t:m$1.$_String}}],$cont:Document,pa:5,d:['ceylon.interop.browser.dom','Document','$m','queryCommandState']};}};document$.queryCommandSupported={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'commandId',mt:'prm',$t:{t:m$1.$_String}}],$cont:Document,pa:5,d:['ceylon.interop.browser.dom','Document','$m','queryCommandSupported']};}};document$.queryCommandValue={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_String},ps:[{nm:'commandId',mt:'prm',$t:{t:m$1.$_String}}],$cont:Document,pa:5,d:['ceylon.interop.browser.dom','Document','$m','queryCommandValue']};}};
//AttributeDecl onreadystatechange at nodes.ceylon (182:4-182:50)
document$.$prop$getOnreadystatechange={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},EventHandler$dom()]},$cont:Document,pa:5,d:['ceylon.interop.browser.dom','Document','$at','onreadystatechange']};}};
})(Document.$$.prototype);
}
return Document;
}
ex$.$init$Document=$init$Document;
$init$Document();
//InterfaceDef DocumentReadyState at nodes.ceylon (185:0-189:0)
function DocumentReadyState$dom(documentReadyState$){
}
DocumentReadyState$dom.$crtmm$=function(){return{mod:$CCMM$,pa:1,d:['ceylon.interop.browser.dom','DocumentReadyState']};};
ex$.DocumentReadyState$dom=DocumentReadyState$dom;
function $init$DocumentReadyState$dom(){
if(DocumentReadyState$dom.$$===undefined){
m$1.initTypeProtoI(DocumentReadyState$dom,'ceylon.interop.browser.dom::DocumentReadyState');
(function(documentReadyState$){
//AttributeDecl loading at nodes.ceylon (186:4-186:38)
m$1.atr$(documentReadyState$,'loading',function(){
return "loading";
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:DocumentReadyState$dom,pa:1,d:['ceylon.interop.browser.dom','DocumentReadyState','$at','loading']};});
//AttributeDecl interactive at nodes.ceylon (187:4-187:46)
m$1.atr$(documentReadyState$,'interactive',function(){
return "interactive";
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:DocumentReadyState$dom,pa:1,d:['ceylon.interop.browser.dom','DocumentReadyState','$at','interactive']};});
//AttributeDecl complete at nodes.ceylon (188:4-188:40)
m$1.atr$(documentReadyState$,'complete',function(){
return "complete";
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:DocumentReadyState$dom,pa:1,d:['ceylon.interop.browser.dom','DocumentReadyState','$at','complete']};});
})(DocumentReadyState$dom.$$.prototype);
}
return DocumentReadyState$dom;
}
ex$.$init$DocumentReadyState$dom=$init$DocumentReadyState$dom;
$init$DocumentReadyState$dom();
//AttributeDecl document at nodes.ceylon (191:0-191:43)
function document$dom(){return window().document;
};
ex$.document$dom=document$dom;
var $prop$getDocument$dom={$crtmm$:function(){return{mod:$CCMM$,$t:{t:$init$Document()},pa:1,d:['ceylon.interop.browser.dom','document']};}};
ex$.$prop$getDocument$dom=$prop$getDocument$dom;
$prop$getDocument$dom.get=document$dom;
document$dom.$crtmm$=$prop$getDocument$dom.$crtmm$;
//MethodDef openDocument at nodes.ceylon (195:0-198:0)
function openDocument$dom($17o,$17p){
if($17o===undefined){$17o="text/html";}
if($17p===undefined){$17p="";}
//assert at nodes.ceylon (196:4-196:59)
var $17q;
m$1.asrt$((m$1.is$(($17q=document$dom().open($17o,$17p)),{t:$init$Document()})),"Assertion failed: \'is Document doc = document.open(type, replace)\' at nodes.ceylon (196:11-196:58)",'196:4-196:59','nodes.ceylon');
return $17q;
}
ex$.openDocument$dom=openDocument$dom;
openDocument$dom.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$init$Document()},ps:[{nm:'type',mt:'prm',def:1,$t:{t:m$1.$_String}},{nm:'replace',mt:'prm',def:1,$t:{t:m$1.$_String}}],pa:1,d:['ceylon.interop.browser.dom','openDocument']};};
//MethodDef openWindow at nodes.ceylon (201:0-206:0)
function openWindow$dom($17r,$17s,$17t,$17u){
if($17u===undefined){$17u=false;}
//assert at nodes.ceylon (204:4-204:77)
var $17v;
m$1.asrt$((m$1.is$(($17v=document$dom().open($17r,$17s,$17t,$17u)),WindowProxy())),"Assertion failed: \'is WindowProxy doc = document.open(url, name, features, replace)\' at nodes.ceylon (204:11-204:76)",'204:4-204:77','nodes.ceylon');
return $17v;
}
ex$.openWindow$dom=openWindow$dom;
openWindow$dom.$crtmm$=function(){return{mod:$CCMM$,$t:WindowProxy(),ps:[{nm:'url',mt:'prm',$t:{t:m$1.$_String}},{nm:'name',mt:'prm',$t:{t:m$1.$_String}},{nm:'features',mt:'prm',$t:{t:m$1.$_String}},{nm:'replace',mt:'prm',def:1,$t:{t:m$1.$_Boolean}}],pa:1,d:['ceylon.interop.browser.dom','openWindow']};};
//InterfaceDef DOMImplementation at nodes.ceylon (208:0-214:0)
function DOMImplementation(dOMImplementation$){
dOMImplementation$.createDocument$defs$doctype=function($17w,$17x,$17y){return null;};
}
DOMImplementation.dynmem$=['createDocumentType','createDocument','createHTMLDocument','hasFeature'];DOMImplementation.$crtmm$=function(){return{mod:$CCMM$,pa:1,d:['ceylon.interop.browser.dom','DOMImplementation']};};
ex$.DOMImplementation=DOMImplementation;
function $init$DOMImplementation(){
if(DOMImplementation.$$===undefined){
m$1.initTypeProtoI(DOMImplementation,'ceylon.interop.browser.dom::DOMImplementation');
(function(dOMImplementation$){
dOMImplementation$.createDocumentType={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:$init$DocumentType()},ps:[{nm:'qualifiedName',mt:'prm',$t:{t:m$1.$_String}},{nm:'publicId',mt:'prm',$t:{t:m$1.$_String}},{nm:'systemId',mt:'prm',$t:{t:m$1.$_String}}],$cont:DOMImplementation,pa:5,d:['ceylon.interop.browser.dom','DOMImplementation','$m','createDocumentType']};}};dOMImplementation$.createDocument={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:$init$XMLDocument()},ps:[{nm:'namespace',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'qualifiedName',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'doctype',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:$init$DocumentType()}]}}],$cont:DOMImplementation,pa:5,d:['ceylon.interop.browser.dom','DOMImplementation','$m','createDocument']};}};dOMImplementation$.createHTMLDocument={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:$init$Document()},ps:[{nm:'title',mt:'prm',$t:{t:m$1.$_String}}],$cont:DOMImplementation,pa:5,d:['ceylon.interop.browser.dom','DOMImplementation','$m','createHTMLDocument']};}};dOMImplementation$.hasFeature={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[],$cont:DOMImplementation,pa:5,d:['ceylon.interop.browser.dom','DOMImplementation','$m','hasFeature']};}};
})(DOMImplementation.$$.prototype);
}
return DOMImplementation;
}
ex$.$init$DOMImplementation=$init$DOMImplementation;
$init$DOMImplementation();
//InterfaceDef DocumentType at nodes.ceylon (216:0-220:0)
function DocumentType(documentType$){
Node(documentType$);
ChildNode(documentType$);
}
DocumentType.dynmem$=['name','publicId','systemId'];DocumentType.$crtmm$=function(){return{mod:$CCMM$,sts:[{t:$init$Node()},{t:$init$ChildNode()}],pa:1,d:['ceylon.interop.browser.dom','DocumentType']};};
ex$.DocumentType=DocumentType;
function $init$DocumentType(){
if(DocumentType.$$===undefined){
m$1.initTypeProtoI(DocumentType,'ceylon.interop.browser.dom::DocumentType',$init$Node(),$init$ChildNode());
(function(documentType$){
//AttributeDecl name at nodes.ceylon (217:4-217:29)
documentType$.$prop$getName={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:DocumentType,pa:5,d:['ceylon.interop.browser.dom','DocumentType','$at','name']};}};
//AttributeDecl publicId at nodes.ceylon (218:4-218:34)
documentType$.$prop$getPublicId={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:DocumentType,pa:5,d:['ceylon.interop.browser.dom','DocumentType','$at','publicId']};}};
//AttributeDecl systemId at nodes.ceylon (219:4-219:34)
documentType$.$prop$getSystemId={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:DocumentType,pa:5,d:['ceylon.interop.browser.dom','DocumentType','$at','systemId']};}};
})(DocumentType.$$.prototype);
}
return DocumentType;
}
ex$.$init$DocumentType=$init$DocumentType;
$init$DocumentType();
//InterfaceDef XMLDocument at nodes.ceylon (222:0-224:0)
function XMLDocument(xMLDocument$){
Document(xMLDocument$);
}
XMLDocument.dynmem$=[];XMLDocument.$crtmm$=function(){return{mod:$CCMM$,sts:[{t:$init$Document()}],pa:1,d:['ceylon.interop.browser.dom','XMLDocument']};};
ex$.XMLDocument=XMLDocument;
function $init$XMLDocument(){
if(XMLDocument.$$===undefined){
m$1.initTypeProtoI(XMLDocument,'ceylon.interop.browser.dom::XMLDocument',$init$Document());
}
return XMLDocument;
}
ex$.$init$XMLDocument=$init$XMLDocument;
$init$XMLDocument();
//InterfaceDef DocumentFragment at nodes.ceylon (226:0-232:0)
function DocumentFragment(documentFragment$){
Node(documentFragment$);
ParentNode(documentFragment$);
NonElementParentNode(documentFragment$);
}
DocumentFragment.dynmem$=[];DocumentFragment.$crtmm$=function(){return{mod:$CCMM$,sts:[{t:$init$Node()},{t:$init$ParentNode()},{t:$init$NonElementParentNode()}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.interop.browser.dom:DocumentFragment')];},d:['ceylon.interop.browser.dom','DocumentFragment']};};
ex$.DocumentFragment=DocumentFragment;
function $init$DocumentFragment(){
if(DocumentFragment.$$===undefined){
m$1.initTypeProtoI(DocumentFragment,'ceylon.interop.browser.dom::DocumentFragment',$init$Node(),$init$ParentNode(),$init$NonElementParentNode());
}
return DocumentFragment;
}
ex$.$init$DocumentFragment=$init$DocumentFragment;
$init$DocumentFragment();
//InterfaceDef CharacterData at nodes.ceylon (234:0-247:0)
function CharacterData(characterData$){
Node(characterData$);
ChildNode(characterData$);
NonDocumentTypeChildNode(characterData$);
}
CharacterData.dynmem$=['data','length','substringData','appendData','insertData','deleteData','replaceData'];CharacterData.$crtmm$=function(){return{mod:$CCMM$,sts:[{t:$init$Node()},{t:$init$ChildNode()},{t:$init$NonDocumentTypeChildNode()}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.interop.browser.dom:CharacterData')];},d:['ceylon.interop.browser.dom','CharacterData']};};
ex$.CharacterData=CharacterData;
function $init$CharacterData(){
if(CharacterData.$$===undefined){
m$1.initTypeProtoI(CharacterData,'ceylon.interop.browser.dom::CharacterData',$init$Node(),$init$ChildNode(),$init$NonDocumentTypeChildNode());
(function(characterData$){
//AttributeDecl data at nodes.ceylon (240:4-240:38)
characterData$.$prop$getData={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:CharacterData,pa:1029,d:['ceylon.interop.browser.dom','CharacterData','$at','data']};}};
//AttributeDecl length at nodes.ceylon (241:4-241:32)
characterData$.$prop$getLength={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:CharacterData,pa:5,d:['ceylon.interop.browser.dom','CharacterData','$at','length']};}};
characterData$.substringData={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_String},ps:[{nm:'offset',mt:'prm',$t:{t:m$1.Integer}},{nm:'count',mt:'prm',$t:{t:m$1.Integer}}],$cont:CharacterData,pa:5,d:['ceylon.interop.browser.dom','CharacterData','$m','substringData']};}};characterData$.appendData={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'data',mt:'prm',$t:{t:m$1.$_String}}],$cont:CharacterData,pa:5,d:['ceylon.interop.browser.dom','CharacterData','$m','appendData']};}};characterData$.insertData={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'offset',mt:'prm',$t:{t:m$1.Integer}},{nm:'data',mt:'prm',$t:{t:m$1.$_String}}],$cont:CharacterData,pa:5,d:['ceylon.interop.browser.dom','CharacterData','$m','insertData']};}};characterData$.deleteData={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'offset',mt:'prm',$t:{t:m$1.Integer}},{nm:'count',mt:'prm',$t:{t:m$1.Integer}}],$cont:CharacterData,pa:5,d:['ceylon.interop.browser.dom','CharacterData','$m','deleteData']};}};characterData$.replaceData={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'offset',mt:'prm',$t:{t:m$1.Integer}},{nm:'count',mt:'prm',$t:{t:m$1.Integer}},{nm:'data',mt:'prm',$t:{t:m$1.$_String}}],$cont:CharacterData,pa:5,d:['ceylon.interop.browser.dom','CharacterData','$m','replaceData']};}};
})(CharacterData.$$.prototype);
}
return CharacterData;
}
ex$.$init$CharacterData=$init$CharacterData;
$init$CharacterData();
//InterfaceDef Text at nodes.ceylon (249:0-254:0)
function Text(text$){
CharacterData(text$);
}
Text.dynmem$=['splitText','wholeText'];Text.$crtmm$=function(){return{mod:$CCMM$,sts:[{t:$init$CharacterData()}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.interop.browser.dom:Text')];},d:['ceylon.interop.browser.dom','Text']};};
ex$.Text=Text;
function $init$Text(){
if(Text.$$===undefined){
m$1.initTypeProtoI(Text,'ceylon.interop.browser.dom::Text',$init$CharacterData());
(function(text$){
text$.splitText={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:$init$Text()},ps:[{nm:'offset',mt:'prm',$t:{t:m$1.Integer}}],$cont:Text,pa:5,d:['ceylon.interop.browser.dom','Text','$m','splitText']};}};
//AttributeDecl wholeText at nodes.ceylon (253:4-253:34)
text$.$prop$getWholeText={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:Text,pa:5,d:['ceylon.interop.browser.dom','Text','$at','wholeText']};}};
})(Text.$$.prototype);
}
return Text;
}
ex$.$init$Text=$init$Text;
$init$Text();
//MethodDecl newText at nodes.ceylon (256:0-257:62)
function newText$dom$defs$text($17z){return "";};
function newText$dom($17z){if($17z===undefined){$17z="";}
return newTextInternal$internal($17z);
};
newText$dom.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$init$Text()},ps:[{nm:'text',mt:'prm',def:1,$t:{t:m$1.$_String}}],pa:1,an:function(){return[m$1.doc("Creates a new instance of [[Text]].")];},d:['ceylon.interop.browser.dom','newText']};};
ex$.newText$dom=newText$dom;
//InterfaceDef Comment at nodes.ceylon (259:0-262:0)
function Comment(comment$){
CharacterData(comment$);
}
Comment.dynmem$=[];Comment.$crtmm$=function(){return{mod:$CCMM$,sts:[{t:$init$CharacterData()}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.interop.browser.dom:Comment')];},d:['ceylon.interop.browser.dom','Comment']};};
ex$.Comment=Comment;
function $init$Comment(){
if(Comment.$$===undefined){
m$1.initTypeProtoI(Comment,'ceylon.interop.browser.dom::Comment',$init$CharacterData());
}
return Comment;
}
ex$.$init$Comment=$init$Comment;
$init$Comment();
//MethodDecl newComment at nodes.ceylon (264:0-265:71)
function newComment$dom$defs$data($180){return "";};
function newComment$dom($180){if($180===undefined){$180="";}
return newCommentInternal$internal($180);
};
newComment$dom.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$init$Comment()},ps:[{nm:'data',mt:'prm',def:1,$t:{t:m$1.$_String}}],pa:1,an:function(){return[m$1.doc("Creates a new instance of [[Comment]].")];},d:['ceylon.interop.browser.dom','newComment']};};
ex$.newComment$dom=newComment$dom;
//InterfaceDef ProcessingInstruction at nodes.ceylon (267:0-271:0)
function ProcessingInstruction(processingInstruction$){
CharacterData(processingInstruction$);
}
ProcessingInstruction.dynmem$=['target'];ProcessingInstruction.$crtmm$=function(){return{mod:$CCMM$,sts:[{t:$init$CharacterData()}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.interop.browser.dom:ProcessingInstruction')];},d:['ceylon.interop.browser.dom','ProcessingInstruction']};};
ex$.ProcessingInstruction=ProcessingInstruction;
function $init$ProcessingInstruction(){
if(ProcessingInstruction.$$===undefined){
m$1.initTypeProtoI(ProcessingInstruction,'ceylon.interop.browser.dom::ProcessingInstruction',$init$CharacterData());
(function(processingInstruction$){
//AttributeDecl target at nodes.ceylon (270:4-270:31)
processingInstruction$.$prop$getTarget={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:ProcessingInstruction,pa:5,d:['ceylon.interop.browser.dom','ProcessingInstruction','$at','target']};}};
})(ProcessingInstruction.$$.prototype);
}
return ProcessingInstruction;
}
ex$.$init$ProcessingInstruction=$init$ProcessingInstruction;
$init$ProcessingInstruction();
//InterfaceDef Element at nodes.ceylon (273:0-308:0)
function Element(element$){
Node(element$);
ChildNode(element$);
ParentNode(element$);
NonDocumentTypeChildNode(element$);
}
Element.dynmem$=['namespaceURI','prefix','localName','tagName','id','className','classList','attributes','getAttribute','getAttributeNS','setAttribute','setAttributeNS','removeAttribute','removeAttributeNS','hasAttribute','hasAttributeNS','getElementsByTagName','getElementsByTagNameNS','getElementsByClassName','innerHTML','outerHTML','insertAdjacentHTML'];Element.$crtmm$=function(){return{mod:$CCMM$,sts:[{t:$init$Node()},{t:$init$ChildNode()},{t:$init$ParentNode()},{t:$init$NonDocumentTypeChildNode()}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.interop.browser.dom:Element')];},d:['ceylon.interop.browser.dom','Element']};};
ex$.Element=Element;
function $init$Element(){
if(Element.$$===undefined){
m$1.initTypeProtoI(Element,'ceylon.interop.browser.dom::Element',$init$Node(),$init$ChildNode(),$init$ParentNode(),$init$NonDocumentTypeChildNode());
(function(element$){
//AttributeDecl namespaceURI at nodes.ceylon (280:4-280:38)
element$.$prop$getNamespaceURI={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Element,pa:5,d:['ceylon.interop.browser.dom','Element','$at','namespaceURI']};}};
//AttributeDecl prefix at nodes.ceylon (281:4-281:32)
element$.$prop$getPrefix={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Element,pa:5,d:['ceylon.interop.browser.dom','Element','$at','prefix']};}};
//AttributeDecl localName at nodes.ceylon (282:4-282:34)
element$.$prop$getLocalName={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:Element,pa:5,d:['ceylon.interop.browser.dom','Element','$at','localName']};}};
//AttributeDecl tagName at nodes.ceylon (283:4-283:32)
element$.$prop$getTagName={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:Element,pa:5,d:['ceylon.interop.browser.dom','Element','$at','tagName']};}};
//AttributeDecl id at nodes.ceylon (285:4-285:36)
element$.$prop$getId={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:Element,pa:1029,d:['ceylon.interop.browser.dom','Element','$at','id']};}};
//AttributeDecl className at nodes.ceylon (286:4-286:43)
element$.$prop$getClassName={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:Element,pa:1029,d:['ceylon.interop.browser.dom','Element','$at','className']};}};
//AttributeDecl classList at nodes.ceylon (287:4-287:40)
element$.$prop$getClassList={$crtmm$:function(){return{mod:$CCMM$,$t:{t:$init$DOMTokenList()},$cont:Element,pa:5,d:['ceylon.interop.browser.dom','Element','$at','classList']};}};
//AttributeDecl attributes at nodes.ceylon (289:4-289:41)
element$.$prop$getAttributes={$crtmm$:function(){return{mod:$CCMM$,$t:{t:$init$NamedNodeMap()},$cont:Element,pa:5,d:['ceylon.interop.browser.dom','Element','$at','attributes']};}};
element$.getAttribute={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},ps:[{nm:'name',mt:'prm',$t:{t:m$1.$_String}}],$cont:Element,pa:5,d:['ceylon.interop.browser.dom','Element','$m','getAttribute']};}};element$.getAttributeNS={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},ps:[{nm:'namespace',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'localName',mt:'prm',$t:{t:m$1.$_String}}],$cont:Element,pa:5,d:['ceylon.interop.browser.dom','Element','$m','getAttributeNS']};}};element$.setAttribute={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'name',mt:'prm',$t:{t:m$1.$_String}},{nm:'val',mt:'prm',$t:{t:m$1.$_String}}],$cont:Element,pa:5,d:['ceylon.interop.browser.dom','Element','$m','setAttribute']};}};element$.setAttributeNS={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'namespace',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'name',mt:'prm',$t:{t:m$1.$_String}},{nm:'val',mt:'prm',$t:{t:m$1.$_String}}],$cont:Element,pa:5,d:['ceylon.interop.browser.dom','Element','$m','setAttributeNS']};}};element$.removeAttribute={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'name',mt:'prm',$t:{t:m$1.$_String}}],$cont:Element,pa:5,d:['ceylon.interop.browser.dom','Element','$m','removeAttribute']};}};element$.removeAttributeNS={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'namespace',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'localName',mt:'prm',$t:{t:m$1.$_String}}],$cont:Element,pa:5,d:['ceylon.interop.browser.dom','Element','$m','removeAttributeNS']};}};element$.hasAttribute={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'name',mt:'prm',$t:{t:m$1.$_String}}],$cont:Element,pa:5,d:['ceylon.interop.browser.dom','Element','$m','hasAttribute']};}};element$.hasAttributeNS={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'namespace',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'localName',mt:'prm',$t:{t:m$1.$_String}}],$cont:Element,pa:5,d:['ceylon.interop.browser.dom','Element','$m','hasAttributeNS']};}};element$.getElementsByTagName={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:$init$HTMLCollection()},ps:[{nm:'localName',mt:'prm',$t:{t:m$1.$_String}}],$cont:Element,pa:5,d:['ceylon.interop.browser.dom','Element','$m','getElementsByTagName']};}};element$.getElementsByTagNameNS={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:$init$HTMLCollection()},ps:[{nm:'namespace',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'localName',mt:'prm',$t:{t:m$1.$_String}}],$cont:Element,pa:5,d:['ceylon.interop.browser.dom','Element','$m','getElementsByTagNameNS']};}};element$.getElementsByClassName={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:$init$HTMLCollection()},ps:[{nm:'classNames',mt:'prm',$t:{t:m$1.$_String}}],$cont:Element,pa:5,d:['ceylon.interop.browser.dom','Element','$m','getElementsByClassName']};}};
//AttributeDecl innerHTML at nodes.ceylon (305:4-305:43)
element$.$prop$getInnerHTML={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:Element,pa:1029,d:['ceylon.interop.browser.dom','Element','$at','innerHTML']};}};
//AttributeDecl outerHTML at nodes.ceylon (306:4-306:43)
element$.$prop$getOuterHTML={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:Element,pa:1029,d:['ceylon.interop.browser.dom','Element','$at','outerHTML']};}};
element$.insertAdjacentHTML={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'position',mt:'prm',$t:{t:m$1.$_String}},{nm:'text',mt:'prm',$t:{t:m$1.$_String}}],$cont:Element,pa:5,d:['ceylon.interop.browser.dom','Element','$m','insertAdjacentHTML']};}};
})(Element.$$.prototype);
}
return Element;
}
ex$.$init$Element=$init$Element;
$init$Element();
//InterfaceDef Attr at nodes.ceylon (310:0-321:0)
function Attr(attr$){
}
Attr.dynmem$=['namespaceURI','prefix','localName','name','value','specified'];Attr.$crtmm$=function(){return{mod:$CCMM$,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.interop.browser.dom:Attr')];},d:['ceylon.interop.browser.dom','Attr']};};
ex$.Attr=Attr;
function $init$Attr(){
if(Attr.$$===undefined){
m$1.initTypeProtoI(Attr,'ceylon.interop.browser.dom::Attr');
(function(attr$){
//AttributeDecl namespaceURI at nodes.ceylon (314:2-314:36)
attr$.$prop$getNamespaceURI={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Attr,pa:5,d:['ceylon.interop.browser.dom','Attr','$at','namespaceURI']};}};
//AttributeDecl prefix at nodes.ceylon (315:2-315:30)
attr$.$prop$getPrefix={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:Attr,pa:5,d:['ceylon.interop.browser.dom','Attr','$at','prefix']};}};
//AttributeDecl localName at nodes.ceylon (316:2-316:32)
attr$.$prop$getLocalName={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:Attr,pa:5,d:['ceylon.interop.browser.dom','Attr','$at','localName']};}};
//AttributeDecl name at nodes.ceylon (317:2-317:27)
attr$.$prop$getName={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:Attr,pa:5,d:['ceylon.interop.browser.dom','Attr','$at','name']};}};
//AttributeDecl value at nodes.ceylon (318:2-318:39)
attr$.$prop$getValue={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:Attr,pa:1029,d:['ceylon.interop.browser.dom','Attr','$at','value']};}};
//AttributeDecl specified at nodes.ceylon (320:2-320:33)
attr$.$prop$getSpecified={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},$cont:Attr,pa:5,d:['ceylon.interop.browser.dom','Attr','$at','specified']};}};
})(Attr.$$.prototype);
}
return Attr;
}
ex$.$init$Attr=$init$Attr;
$init$Attr();
//InterfaceDef NamedNodeMap at nodes.ceylon (323:0-336:0)
function NamedNodeMap(namedNodeMap$){
}
NamedNodeMap.dynmem$=['getNamedItem','setNamedItem','removeNamedItem','item','length','getNamedItemNS','setNamedItemNS','removeNamedItemNS'];NamedNodeMap.$crtmm$=function(){return{mod:$CCMM$,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.interop.browser.dom:NamedNodeMap')];},d:['ceylon.interop.browser.dom','NamedNodeMap']};};
ex$.NamedNodeMap=NamedNodeMap;
function $init$NamedNodeMap(){
if(NamedNodeMap.$$===undefined){
m$1.initTypeProtoI(NamedNodeMap,'ceylon.interop.browser.dom::NamedNodeMap');
(function(namedNodeMap$){
namedNodeMap$.getNamedItem={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:$init$Node()},ps:[{nm:'name',mt:'prm',$t:{t:m$1.$_String}}],$cont:NamedNodeMap,pa:5,d:['ceylon.interop.browser.dom','NamedNodeMap','$m','getNamedItem']};}};namedNodeMap$.setNamedItem={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:$init$Node()},ps:[{nm:'arg',mt:'prm',$t:{t:$init$Node()}}],$cont:NamedNodeMap,pa:5,d:['ceylon.interop.browser.dom','NamedNodeMap','$m','setNamedItem']};}};namedNodeMap$.removeNamedItem={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:$init$Node()},ps:[{nm:'name',mt:'prm',$t:{t:m$1.$_String}}],$cont:NamedNodeMap,pa:5,d:['ceylon.interop.browser.dom','NamedNodeMap','$m','removeNamedItem']};}};namedNodeMap$.item={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:$init$Node()},ps:[{nm:'index',mt:'prm',$t:{t:m$1.Integer}}],$cont:NamedNodeMap,pa:5,d:['ceylon.interop.browser.dom','NamedNodeMap','$m','item']};}};
//AttributeDecl length at nodes.ceylon (330:4-330:32)
namedNodeMap$.$prop$getLength={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:NamedNodeMap,pa:5,d:['ceylon.interop.browser.dom','NamedNodeMap','$at','length']};}};
namedNodeMap$.getNamedItemNS={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:$init$Node()},ps:[{nm:'namespaceURI',mt:'prm',$t:{t:m$1.$_String}},{nm:'localName',mt:'prm',$t:{t:m$1.$_String}}],$cont:NamedNodeMap,pa:5,d:['ceylon.interop.browser.dom','NamedNodeMap','$m','getNamedItemNS']};}};namedNodeMap$.setNamedItemNS={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:$init$Node()},ps:[{nm:'arg',mt:'prm',$t:{t:$init$Node()}}],$cont:NamedNodeMap,pa:5,d:['ceylon.interop.browser.dom','NamedNodeMap','$m','setNamedItemNS']};}};namedNodeMap$.removeNamedItemNS={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:$init$Node()},ps:[{nm:'namespaceURI',mt:'prm',$t:{t:m$1.$_String}},{nm:'localName',mt:'prm',$t:{t:m$1.$_String}}],$cont:NamedNodeMap,pa:5,d:['ceylon.interop.browser.dom','NamedNodeMap','$m','removeNamedItemNS']};}};
})(NamedNodeMap.$$.prototype);
}
return NamedNodeMap;
}
ex$.$init$NamedNodeMap=$init$NamedNodeMap;
$init$NamedNodeMap();
//InterfaceDef NodeList at nodes.ceylon (338:0-344:0)
function NodeList(nodeList$){
}
NodeList.dynmem$=['item','length'];NodeList.$crtmm$=function(){return{mod:$CCMM$,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.interop.browser.dom:NodeList')];},d:['ceylon.interop.browser.dom','NodeList']};};
ex$.NodeList=NodeList;
function $init$NodeList(){
if(NodeList.$$===undefined){
m$1.initTypeProtoI(NodeList,'ceylon.interop.browser.dom::NodeList');
(function(nodeList$){
nodeList$.item={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:$init$Node()}]},ps:[{nm:'index',mt:'prm',$t:{t:m$1.Integer}}],$cont:NodeList,pa:5,d:['ceylon.interop.browser.dom','NodeList','$m','item']};}};
//AttributeDecl length at nodes.ceylon (342:4-342:32)
nodeList$.$prop$getLength={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:NodeList,pa:5,d:['ceylon.interop.browser.dom','NodeList','$at','length']};}};
})(NodeList.$$.prototype);
}
return NodeList;
}
ex$.$init$NodeList=$init$NodeList;
$init$NodeList();
//InterfaceDef HTMLCollection at nodes.ceylon (346:0-352:0)
function HTMLCollection(hTMLCollection$){
}
HTMLCollection.dynmem$=['length','item','namedItem'];HTMLCollection.$crtmm$=function(){return{mod:$CCMM$,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.interop.browser.dom:HTMLCollection')];},d:['ceylon.interop.browser.dom','HTMLCollection']};};
ex$.HTMLCollection=HTMLCollection;
function $init$HTMLCollection(){
if(HTMLCollection.$$===undefined){
m$1.initTypeProtoI(HTMLCollection,'ceylon.interop.browser.dom::HTMLCollection');
(function(hTMLCollection$){
//AttributeDecl length at nodes.ceylon (349:4-349:32)
hTMLCollection$.$prop$getLength={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:HTMLCollection,pa:5,d:['ceylon.interop.browser.dom','HTMLCollection','$at','length']};}};
hTMLCollection$.item={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:$init$Element()}]},ps:[{nm:'index',mt:'prm',$t:{t:m$1.Integer}}],$cont:HTMLCollection,pa:5,d:['ceylon.interop.browser.dom','HTMLCollection','$m','item']};}};hTMLCollection$.namedItem={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:$init$Element()}]},ps:[{nm:'name',mt:'prm',$t:{t:m$1.$_String}}],$cont:HTMLCollection,pa:5,d:['ceylon.interop.browser.dom','HTMLCollection','$m','namedItem']};}};
})(HTMLCollection.$$.prototype);
}
return HTMLCollection;
}
ex$.$init$HTMLCollection=$init$HTMLCollection;
$init$HTMLCollection();

//MethodDef newEventInternal at nativeObjects.ceylon (12:0-17:0)
function newEventInternal$internal($3q3,$3q4){
/*BEG dynblock*/
obj=(typeof eval==='undefined'||eval===null?m$1.throwexc(m$1.Exception("Undefined or null reference: eval"),'14:14-14:17','nativeObjects.ceylon'):eval)("Event");return m$1.dre$$(($3q5=$3q3,$3q6=$3q4,$3q7=(typeof obj==='undefined'?m$1.throwexc(m$1.Exception("Undefined type obj"),'15:15-15:17','nativeObjects.ceylon'):obj),$3q7.$$===undefined?new $3q7($3q5, $3q6):$3q7($3q5, $3q6)),{t:$init$Event()},'nativeObjects.ceylon 15:15-15:40');
/*END dynblock*/
}
ex$.newEventInternal$internal=newEventInternal$internal;
newEventInternal$internal.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$init$Event()},ps:[{nm:'type',mt:'prm',$t:{t:m$1.$_String}},{nm:'eventInitDict',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},{t:EventInit$dom}]}}],pa:1,d:['ceylon.interop.browser.internal','newEventInternal']};};
//MethodDef newXMLHttpRequestInternal at nativeObjects.ceylon (19:0-25:0)
function newXMLHttpRequestInternal$internal(){
/*BEG dynblock*/
obj=(typeof eval==='undefined'||eval===null?m$1.throwexc(m$1.Exception("Undefined or null reference: eval"),'22:14-22:17','nativeObjects.ceylon'):eval)("XMLHttpRequest");return m$1.dre$$(($3q8=(typeof obj==='undefined'?m$1.throwexc(m$1.Exception("Undefined type obj"),'23:15-23:17','nativeObjects.ceylon'):obj),$3q8.$$===undefined?new $3q8():$3q8()),{t:$init$XMLHttpRequest()},'nativeObjects.ceylon 23:15-23:21');
/*END dynblock*/
}
ex$.newXMLHttpRequestInternal$internal=newXMLHttpRequestInternal$internal;
newXMLHttpRequestInternal$internal.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$init$XMLHttpRequest()},ps:[],pa:1,d:['ceylon.interop.browser.internal','newXMLHttpRequestInternal']};};
//MethodDef newTextInternal at nativeObjects.ceylon (27:0-32:0)
function newTextInternal$internal($3q9){
/*BEG dynblock*/
obj=(typeof eval==='undefined'||eval===null?m$1.throwexc(m$1.Exception("Undefined or null reference: eval"),'29:14-29:17','nativeObjects.ceylon'):eval)("Text");return m$1.dre$$(($3qa=$3q9,$3qb=(typeof obj==='undefined'?m$1.throwexc(m$1.Exception("Undefined type obj"),'30:15-30:17','nativeObjects.ceylon'):obj),$3qb.$$===undefined?new $3qb($3qa):$3qb($3qa)),{t:$init$Text()},'nativeObjects.ceylon 30:15-30:25');
/*END dynblock*/
}
ex$.newTextInternal$internal=newTextInternal$internal;
newTextInternal$internal.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$init$Text()},ps:[{nm:'text',mt:'prm',$t:{t:m$1.$_String}}],pa:1,d:['ceylon.interop.browser.internal','newTextInternal']};};
//MethodDef newRangeInternal at nativeObjects.ceylon (34:0-39:0)
function newRangeInternal$internal(){
/*BEG dynblock*/
obj=(typeof eval==='undefined'||eval===null?m$1.throwexc(m$1.Exception("Undefined or null reference: eval"),'36:14-36:17','nativeObjects.ceylon'):eval)("Range");return m$1.dre$$(($3qc=(typeof obj==='undefined'?m$1.throwexc(m$1.Exception("Undefined type obj"),'37:15-37:17','nativeObjects.ceylon'):obj),$3qc.$$===undefined?new $3qc():$3qc()),{t:$init$Range()},'nativeObjects.ceylon 37:15-37:21');
/*END dynblock*/
}
ex$.newRangeInternal$internal=newRangeInternal$internal;
newRangeInternal$internal.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$init$Range()},ps:[],pa:1,d:['ceylon.interop.browser.internal','newRangeInternal']};};
//MethodDef newCommentInternal at nativeObjects.ceylon (41:0-46:0)
function newCommentInternal$internal($3qd){
/*BEG dynblock*/
obj=(typeof eval==='undefined'||eval===null?m$1.throwexc(m$1.Exception("Undefined or null reference: eval"),'43:14-43:17','nativeObjects.ceylon'):eval)("Comment");return m$1.dre$$(($3qe=$3qd,$3qf=(typeof obj==='undefined'?m$1.throwexc(m$1.Exception("Undefined type obj"),'44:15-44:17','nativeObjects.ceylon'):obj),$3qf.$$===undefined?new $3qf($3qe):$3qf($3qe)),{t:$init$Comment()},'nativeObjects.ceylon 44:15-44:25');
/*END dynblock*/
}
ex$.newCommentInternal$internal=newCommentInternal$internal;
newCommentInternal$internal.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$init$Comment()},ps:[{nm:'data',mt:'prm',$t:{t:m$1.$_String}}],pa:1,d:['ceylon.interop.browser.internal','newCommentInternal']};};

//InterfaceDef EventTarget at events.ceylon (5:0-29:0)
function EventTarget(eventTarget$){
eventTarget$.addEventListener$defs$capture=function($4pv,$4pw,$4px){return false;};
eventTarget$.removeEventListener$defs$capture=function($4py,$4pz,$4q0){return false;};
}
EventTarget.dynmem$=['addEventListener','removeEventListener','dispatchEvent'];EventTarget.$crtmm$=function(){return{mod:$CCMM$,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.interop.browser.dom:EventTarget')];},d:['ceylon.interop.browser.dom','EventTarget']};};
ex$.EventTarget=EventTarget;
function $init$EventTarget(){
if(EventTarget.$$===undefined){
m$1.initTypeProtoI(EventTarget,'ceylon.interop.browser.dom::EventTarget');
(function(eventTarget$){
eventTarget$.addEventListener={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'type',mt:'prm',$t:{t:m$1.$_String}},{nm:'callback',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},{t:$init$EventListener()}]}},{nm:'capture',mt:'prm',def:1,$t:{t:m$1.$_Boolean}}],$cont:EventTarget,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.interop.browser.dom:EventTarget:$m:addEventListener')];},d:['ceylon.interop.browser.dom','EventTarget','$m','addEventListener']};}};eventTarget$.removeEventListener={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'type',mt:'prm',$t:{t:m$1.$_String}},{nm:'callback',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},{t:$init$EventListener()}]}},{nm:'capture',mt:'prm',def:1,$t:{t:m$1.$_Boolean}}],$cont:EventTarget,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.interop.browser.dom:EventTarget:$m:removeEventListener')];},d:['ceylon.interop.browser.dom','EventTarget','$m','removeEventListener']};}};eventTarget$.dispatchEvent={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'event',mt:'prm',$t:{t:$init$Event()}}],$cont:EventTarget,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.interop.browser.dom:EventTarget:$m:dispatchEvent')];},d:['ceylon.interop.browser.dom','EventTarget','$m','dispatchEvent']};}};
})(EventTarget.$$.prototype);
}
return EventTarget;
}
ex$.$init$EventTarget=$init$EventTarget;
$init$EventTarget();
//InterfaceDef EventListener at events.ceylon (31:0-34:0)
function EventListener(eventListener$){
}
EventListener.dynmem$=['handleEvent'];EventListener.$crtmm$=function(){return{mod:$CCMM$,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.interop.browser.dom:EventListener')];},d:['ceylon.interop.browser.dom','EventListener']};};
ex$.EventListener=EventListener;
function $init$EventListener(){
if(EventListener.$$===undefined){
m$1.initTypeProtoI(EventListener,'ceylon.interop.browser.dom::EventListener');
(function(eventListener$){
eventListener$.handleEvent={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'event',mt:'prm',$t:{t:$init$Event()}}],$cont:EventListener,pa:5,d:['ceylon.interop.browser.dom','EventListener','$m','handleEvent']};}};
})(EventListener.$$.prototype);
}
return EventListener;
}
ex$.$init$EventListener=$init$EventListener;
$init$EventListener();
//TypeAliasDecl EventHandler at events.ceylon (36:0-36:44)
function EventHandler$dom(){var $4q1={t:m$1.Callable,a:{Arguments$Callable:m$1.mtt$([{t:$init$Event()}]),Return$Callable:{t:m$1.Anything}}};$4q1.$crtmm$=function(){return{mod:$CCMM$,pa:1,d:['ceylon.interop.browser.dom','EventHandler']};};return $4q1;}
ex$.EventHandler$dom=EventHandler$dom;
//InterfaceDef Event at events.ceylon (38:0-68:0)
function Event(event$){
}
Event.dynmem$=['type','target','currentTarget','NONE','CAPTURING_PHASE','AT_TARGET','BUBBLING_PHASE','eventPhase','stopPropagation','stopImmediatePropagation','bubbles','cancelable','preventDefault','defaultPrevented','isTrusted','timeStamp','initEvent'];Event.$crtmm$=function(){return{mod:$CCMM$,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.interop.browser.dom:Event')];},d:['ceylon.interop.browser.dom','Event']};};
ex$.Event=Event;
function $init$Event(){
if(Event.$$===undefined){
m$1.initTypeProtoI(Event,'ceylon.interop.browser.dom::Event');
(function(event$){
//AttributeDecl type at events.ceylon (43:4-44:29)
event$.$prop$getType={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:Event,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.interop.browser.dom:Event:$at:type')];},d:['ceylon.interop.browser.dom','Event','$at','type']};}};
//AttributeDecl target at events.ceylon (46:4-47:37)
event$.$prop$getTarget={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:$init$EventTarget()}]},$cont:Event,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.interop.browser.dom:Event:$at:target')];},d:['ceylon.interop.browser.dom','Event','$at','target']};}};
//AttributeDecl currentTarget at events.ceylon (48:4-48:44)
event$.$prop$getCurrentTarget={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:$init$EventTarget()}]},$cont:Event,pa:5,d:['ceylon.interop.browser.dom','Event','$at','currentTarget']};}};
//AttributeDecl NONE at events.ceylon (50:4-50:32)
event$.$prop$getNONE={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:Event,pa:5,d:['ceylon.interop.browser.dom','Event','$at','NONE']};}};
//AttributeDecl CAPTURING_PHASE at events.ceylon (51:4-51:43)
event$.$prop$getCAPTURING_PHASE={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:Event,pa:5,d:['ceylon.interop.browser.dom','Event','$at','CAPTURING_PHASE']};}};
//AttributeDecl AT_TARGET at events.ceylon (52:4-52:37)
event$.$prop$getAT_TARGET={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:Event,pa:5,d:['ceylon.interop.browser.dom','Event','$at','AT_TARGET']};}};
//AttributeDecl BUBBLING_PHASE at events.ceylon (53:4-53:42)
event$.$prop$getBUBBLING_PHASE={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:Event,pa:5,d:['ceylon.interop.browser.dom','Event','$at','BUBBLING_PHASE']};}};
//AttributeDecl eventPhase at events.ceylon (54:4-54:36)
event$.$prop$getEventPhase={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:Event,pa:5,d:['ceylon.interop.browser.dom','Event','$at','eventPhase']};}};
event$.stopPropagation={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[],$cont:Event,pa:5,d:['ceylon.interop.browser.dom','Event','$m','stopPropagation']};}};event$.stopImmediatePropagation={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[],$cont:Event,pa:5,d:['ceylon.interop.browser.dom','Event','$m','stopImmediatePropagation']};}};
//AttributeDecl bubbles at events.ceylon (59:4-59:33)
event$.$prop$getBubbles={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},$cont:Event,pa:5,d:['ceylon.interop.browser.dom','Event','$at','bubbles']};}};
//AttributeDecl cancelable at events.ceylon (60:4-60:36)
event$.$prop$getCancelable={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},$cont:Event,pa:5,d:['ceylon.interop.browser.dom','Event','$at','cancelable']};}};
event$.preventDefault={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[],$cont:Event,pa:5,d:['ceylon.interop.browser.dom','Event','$m','preventDefault']};}};
//AttributeDecl defaultPrevented at events.ceylon (62:4-62:42)
event$.$prop$getDefaultPrevented={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},$cont:Event,pa:5,d:['ceylon.interop.browser.dom','Event','$at','defaultPrevented']};}};
//AttributeDecl isTrusted at events.ceylon (64:4-64:35)
event$.$prop$getIsTrusted={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},$cont:Event,pa:5,d:['ceylon.interop.browser.dom','Event','$at','isTrusted']};}};
//AttributeDecl timeStamp at events.ceylon (65:4-65:40)
event$.$prop$getTimeStamp={$crtmm$:function(){return{mod:$CCMM$,$t:DOMTimeStamp$dom(),$cont:Event,pa:5,d:['ceylon.interop.browser.dom','Event','$at','timeStamp']};}};
event$.initEvent={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'type',mt:'prm',$t:{t:m$1.$_String}},{nm:'bubbles',mt:'prm',$t:{t:m$1.$_Boolean}},{nm:'cancelable',mt:'prm',$t:{t:m$1.$_Boolean}}],$cont:Event,pa:5,d:['ceylon.interop.browser.dom','Event','$m','initEvent']};}};
})(Event.$$.prototype);
}
return Event;
}
ex$.$init$Event=$init$Event;
$init$Event();
//MethodDecl newEvent at events.ceylon (70:0-72:48)
function newEvent$dom$defs$eventInitDict($4q2,$4q3){return null;};
function newEvent$dom($4q2,$4q3){if($4q3===undefined){$4q3=null;}
return newEventInternal$internal($4q2,$4q3);
};
newEvent$dom.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$init$Event()},ps:[{nm:'type',mt:'prm',$t:{t:m$1.$_String}},{nm:'eventInitDict',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:EventInit$dom}]}}],pa:1,an:function(){return[m$1.doc("Creates a new instance of [[Event]].")];},d:['ceylon.interop.browser.dom','newEvent']};};
ex$.newEvent$dom=newEvent$dom;
//ClassDef EventInit at events.ceylon (74:0-78:0)
function EventInit$dom(bubbles,cancelable,eventInit$){
$init$EventInit$dom();
if(eventInit$===undefined)eventInit$=new EventInit$dom.$$;
if(bubbles===undefined){bubbles=$init$EventInit$dom().$defs$bubbles(eventInit$,cancelable);}
eventInit$.bubbles_=bubbles;
if(cancelable===undefined){cancelable=$init$EventInit$dom().$defs$cancelable(eventInit$,bubbles);}
eventInit$.cancelable_=cancelable;
return eventInit$;
}
EventInit$dom.$defs$bubbles=function(eventInit$,cancelable){return false};EventInit$dom.$defs$cancelable=function(eventInit$,bubbles){return false};EventInit$dom.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'bubbles',mt:'prm',def:1,$t:{t:m$1.$_Boolean},pa:1},{nm:'cancelable',mt:'prm',def:1,$t:{t:m$1.$_Boolean},pa:1}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.interop.browser.dom:EventInit')];},d:['ceylon.interop.browser.dom','EventInit']};};
ex$.EventInit$dom=EventInit$dom;
function $init$EventInit$dom(){
if(EventInit$dom.$$===undefined){
m$1.initTypeProto(EventInit$dom,'ceylon.interop.browser.dom::EventInit',m$1.Basic);
(function(eventInit$){
m$1.atr$(eventInit$,'bubbles',function(){return this.bubbles_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},$cont:EventInit$dom,pa:1,d:['ceylon.interop.browser.dom','EventInit','$at','bubbles']};});
m$1.atr$(eventInit$,'cancelable',function(){return this.cancelable_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},$cont:EventInit$dom,pa:1,d:['ceylon.interop.browser.dom','EventInit','$at','cancelable']};});
})(EventInit$dom.$$.prototype);
}
return EventInit$dom;
}
ex$.$init$EventInit$dom=$init$EventInit$dom;
$init$EventInit$dom();
//TypeAliasDecl DOMTimeStamp at events.ceylon (80:0-80:36)
function DOMTimeStamp$dom(){var $4q4={t:m$1.Integer};$4q4.$crtmm$=function(){return{mod:$CCMM$,pa:1,d:['ceylon.interop.browser.dom','DOMTimeStamp']};};return $4q4;}
ex$.DOMTimeStamp$dom=DOMTimeStamp$dom;
//InterfaceDef GlobalEventHandlers at events.ceylon (82:0-133:0)
function GlobalEventHandlers(globalEventHandlers$){
}
GlobalEventHandlers.dynmem$=['onabort','onblur','oncancel','oncanplay','oncanplaythrough','onchange','onclick','oncuechange','ondblclick','ondurationchange','onemptied','onended','onerror','onfocus','oninput','oninvalid','onkeydown','onkeypress','onkeyup','onload','onloadeddata','onloadedmetadata','onloadstart','onmousedown','onmouseenter','onmouseleave','onmousemove','onmouseout','onmouseover','onmouseup','onmousewheel','onpause','onplay','onplaying','onprogress','onratechange','onreset','onresize','onscroll','onseeked','onseeking','onselect','onshow','onstalled','onsubmit','onsuspend','ontimeupdate','ontoggle','onvolumechange','onwaiting'];GlobalEventHandlers.$crtmm$=function(){return{mod:$CCMM$,pa:1,d:['ceylon.interop.browser.dom','GlobalEventHandlers']};};
ex$.GlobalEventHandlers=GlobalEventHandlers;
function $init$GlobalEventHandlers(){
if(GlobalEventHandlers.$$===undefined){
m$1.initTypeProtoI(GlobalEventHandlers,'ceylon.interop.browser.dom::GlobalEventHandlers');
(function(globalEventHandlers$){
//AttributeDecl onabort at events.ceylon (83:4-83:39)
globalEventHandlers$.$prop$getOnabort={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},EventHandler$dom()]},$cont:GlobalEventHandlers,pa:5,d:['ceylon.interop.browser.dom','GlobalEventHandlers','$at','onabort']};}};
//AttributeDecl onblur at events.ceylon (84:4-84:38)
globalEventHandlers$.$prop$getOnblur={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},EventHandler$dom()]},$cont:GlobalEventHandlers,pa:5,d:['ceylon.interop.browser.dom','GlobalEventHandlers','$at','onblur']};}};
//AttributeDecl oncancel at events.ceylon (85:4-85:40)
globalEventHandlers$.$prop$getOncancel={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},EventHandler$dom()]},$cont:GlobalEventHandlers,pa:5,d:['ceylon.interop.browser.dom','GlobalEventHandlers','$at','oncancel']};}};
//AttributeDecl oncanplay at events.ceylon (86:4-86:41)
globalEventHandlers$.$prop$getOncanplay={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},EventHandler$dom()]},$cont:GlobalEventHandlers,pa:5,d:['ceylon.interop.browser.dom','GlobalEventHandlers','$at','oncanplay']};}};
//AttributeDecl oncanplaythrough at events.ceylon (87:4-87:48)
globalEventHandlers$.$prop$getOncanplaythrough={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},EventHandler$dom()]},$cont:GlobalEventHandlers,pa:5,d:['ceylon.interop.browser.dom','GlobalEventHandlers','$at','oncanplaythrough']};}};
//AttributeDecl onchange at events.ceylon (88:4-88:40)
globalEventHandlers$.$prop$getOnchange={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},EventHandler$dom()]},$cont:GlobalEventHandlers,pa:5,d:['ceylon.interop.browser.dom','GlobalEventHandlers','$at','onchange']};}};
//AttributeDecl onclick at events.ceylon (89:4-89:39)
globalEventHandlers$.$prop$getOnclick={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},EventHandler$dom()]},$cont:GlobalEventHandlers,pa:5,d:['ceylon.interop.browser.dom','GlobalEventHandlers','$at','onclick']};}};
//AttributeDecl oncuechange at events.ceylon (90:4-90:43)
globalEventHandlers$.$prop$getOncuechange={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},EventHandler$dom()]},$cont:GlobalEventHandlers,pa:5,d:['ceylon.interop.browser.dom','GlobalEventHandlers','$at','oncuechange']};}};
//AttributeDecl ondblclick at events.ceylon (91:4-91:42)
globalEventHandlers$.$prop$getOndblclick={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},EventHandler$dom()]},$cont:GlobalEventHandlers,pa:5,d:['ceylon.interop.browser.dom','GlobalEventHandlers','$at','ondblclick']};}};
//AttributeDecl ondurationchange at events.ceylon (92:4-92:48)
globalEventHandlers$.$prop$getOndurationchange={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},EventHandler$dom()]},$cont:GlobalEventHandlers,pa:5,d:['ceylon.interop.browser.dom','GlobalEventHandlers','$at','ondurationchange']};}};
//AttributeDecl onemptied at events.ceylon (93:4-93:41)
globalEventHandlers$.$prop$getOnemptied={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},EventHandler$dom()]},$cont:GlobalEventHandlers,pa:5,d:['ceylon.interop.browser.dom','GlobalEventHandlers','$at','onemptied']};}};
//AttributeDecl onended at events.ceylon (94:4-94:39)
globalEventHandlers$.$prop$getOnended={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},EventHandler$dom()]},$cont:GlobalEventHandlers,pa:5,d:['ceylon.interop.browser.dom','GlobalEventHandlers','$at','onended']};}};
//AttributeDecl onerror at events.ceylon (95:4-95:46)
globalEventHandlers$.$prop$getOnerror={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},OnErrorEventHandler$dom()]},$cont:GlobalEventHandlers,pa:5,d:['ceylon.interop.browser.dom','GlobalEventHandlers','$at','onerror']};}};
//AttributeDecl onfocus at events.ceylon (96:4-96:39)
globalEventHandlers$.$prop$getOnfocus={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},EventHandler$dom()]},$cont:GlobalEventHandlers,pa:5,d:['ceylon.interop.browser.dom','GlobalEventHandlers','$at','onfocus']};}};
//AttributeDecl oninput at events.ceylon (97:4-97:39)
globalEventHandlers$.$prop$getOninput={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},EventHandler$dom()]},$cont:GlobalEventHandlers,pa:5,d:['ceylon.interop.browser.dom','GlobalEventHandlers','$at','oninput']};}};
//AttributeDecl oninvalid at events.ceylon (98:4-98:41)
globalEventHandlers$.$prop$getOninvalid={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},EventHandler$dom()]},$cont:GlobalEventHandlers,pa:5,d:['ceylon.interop.browser.dom','GlobalEventHandlers','$at','oninvalid']};}};
//AttributeDecl onkeydown at events.ceylon (99:4-99:41)
globalEventHandlers$.$prop$getOnkeydown={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},EventHandler$dom()]},$cont:GlobalEventHandlers,pa:5,d:['ceylon.interop.browser.dom','GlobalEventHandlers','$at','onkeydown']};}};
//AttributeDecl onkeypress at events.ceylon (100:4-100:42)
globalEventHandlers$.$prop$getOnkeypress={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},EventHandler$dom()]},$cont:GlobalEventHandlers,pa:5,d:['ceylon.interop.browser.dom','GlobalEventHandlers','$at','onkeypress']};}};
//AttributeDecl onkeyup at events.ceylon (101:4-101:39)
globalEventHandlers$.$prop$getOnkeyup={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},EventHandler$dom()]},$cont:GlobalEventHandlers,pa:5,d:['ceylon.interop.browser.dom','GlobalEventHandlers','$at','onkeyup']};}};
//AttributeDecl onload at events.ceylon (102:4-102:38)
globalEventHandlers$.$prop$getOnload={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},EventHandler$dom()]},$cont:GlobalEventHandlers,pa:5,d:['ceylon.interop.browser.dom','GlobalEventHandlers','$at','onload']};}};
//AttributeDecl onloadeddata at events.ceylon (103:4-103:44)
globalEventHandlers$.$prop$getOnloadeddata={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},EventHandler$dom()]},$cont:GlobalEventHandlers,pa:5,d:['ceylon.interop.browser.dom','GlobalEventHandlers','$at','onloadeddata']};}};
//AttributeDecl onloadedmetadata at events.ceylon (104:4-104:48)
globalEventHandlers$.$prop$getOnloadedmetadata={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},EventHandler$dom()]},$cont:GlobalEventHandlers,pa:5,d:['ceylon.interop.browser.dom','GlobalEventHandlers','$at','onloadedmetadata']};}};
//AttributeDecl onloadstart at events.ceylon (105:4-105:43)
globalEventHandlers$.$prop$getOnloadstart={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},EventHandler$dom()]},$cont:GlobalEventHandlers,pa:5,d:['ceylon.interop.browser.dom','GlobalEventHandlers','$at','onloadstart']};}};
//AttributeDecl onmousedown at events.ceylon (106:4-106:43)
globalEventHandlers$.$prop$getOnmousedown={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},EventHandler$dom()]},$cont:GlobalEventHandlers,pa:5,d:['ceylon.interop.browser.dom','GlobalEventHandlers','$at','onmousedown']};}};
//AttributeDecl onmouseenter at events.ceylon (107:4-107:44)
globalEventHandlers$.$prop$getOnmouseenter={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},EventHandler$dom()]},$cont:GlobalEventHandlers,pa:5,d:['ceylon.interop.browser.dom','GlobalEventHandlers','$at','onmouseenter']};}};
//AttributeDecl onmouseleave at events.ceylon (108:4-108:44)
globalEventHandlers$.$prop$getOnmouseleave={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},EventHandler$dom()]},$cont:GlobalEventHandlers,pa:5,d:['ceylon.interop.browser.dom','GlobalEventHandlers','$at','onmouseleave']};}};
//AttributeDecl onmousemove at events.ceylon (109:4-109:43)
globalEventHandlers$.$prop$getOnmousemove={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},EventHandler$dom()]},$cont:GlobalEventHandlers,pa:5,d:['ceylon.interop.browser.dom','GlobalEventHandlers','$at','onmousemove']};}};
//AttributeDecl onmouseout at events.ceylon (110:4-110:42)
globalEventHandlers$.$prop$getOnmouseout={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},EventHandler$dom()]},$cont:GlobalEventHandlers,pa:5,d:['ceylon.interop.browser.dom','GlobalEventHandlers','$at','onmouseout']};}};
//AttributeDecl onmouseover at events.ceylon (111:4-111:43)
globalEventHandlers$.$prop$getOnmouseover={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},EventHandler$dom()]},$cont:GlobalEventHandlers,pa:5,d:['ceylon.interop.browser.dom','GlobalEventHandlers','$at','onmouseover']};}};
//AttributeDecl onmouseup at events.ceylon (112:4-112:41)
globalEventHandlers$.$prop$getOnmouseup={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},EventHandler$dom()]},$cont:GlobalEventHandlers,pa:5,d:['ceylon.interop.browser.dom','GlobalEventHandlers','$at','onmouseup']};}};
//AttributeDecl onmousewheel at events.ceylon (113:4-113:44)
globalEventHandlers$.$prop$getOnmousewheel={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},EventHandler$dom()]},$cont:GlobalEventHandlers,pa:5,d:['ceylon.interop.browser.dom','GlobalEventHandlers','$at','onmousewheel']};}};
//AttributeDecl onpause at events.ceylon (114:4-114:39)
globalEventHandlers$.$prop$getOnpause={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},EventHandler$dom()]},$cont:GlobalEventHandlers,pa:5,d:['ceylon.interop.browser.dom','GlobalEventHandlers','$at','onpause']};}};
//AttributeDecl onplay at events.ceylon (115:4-115:38)
globalEventHandlers$.$prop$getOnplay={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},EventHandler$dom()]},$cont:GlobalEventHandlers,pa:5,d:['ceylon.interop.browser.dom','GlobalEventHandlers','$at','onplay']};}};
//AttributeDecl onplaying at events.ceylon (116:4-116:41)
globalEventHandlers$.$prop$getOnplaying={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},EventHandler$dom()]},$cont:GlobalEventHandlers,pa:5,d:['ceylon.interop.browser.dom','GlobalEventHandlers','$at','onplaying']};}};
//AttributeDecl onprogress at events.ceylon (117:4-117:42)
globalEventHandlers$.$prop$getOnprogress={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},EventHandler$dom()]},$cont:GlobalEventHandlers,pa:5,d:['ceylon.interop.browser.dom','GlobalEventHandlers','$at','onprogress']};}};
//AttributeDecl onratechange at events.ceylon (118:4-118:44)
globalEventHandlers$.$prop$getOnratechange={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},EventHandler$dom()]},$cont:GlobalEventHandlers,pa:5,d:['ceylon.interop.browser.dom','GlobalEventHandlers','$at','onratechange']};}};
//AttributeDecl onreset at events.ceylon (119:4-119:39)
globalEventHandlers$.$prop$getOnreset={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},EventHandler$dom()]},$cont:GlobalEventHandlers,pa:5,d:['ceylon.interop.browser.dom','GlobalEventHandlers','$at','onreset']};}};
//AttributeDecl onresize at events.ceylon (120:4-120:40)
globalEventHandlers$.$prop$getOnresize={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},EventHandler$dom()]},$cont:GlobalEventHandlers,pa:5,d:['ceylon.interop.browser.dom','GlobalEventHandlers','$at','onresize']};}};
//AttributeDecl onscroll at events.ceylon (121:4-121:40)
globalEventHandlers$.$prop$getOnscroll={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},EventHandler$dom()]},$cont:GlobalEventHandlers,pa:5,d:['ceylon.interop.browser.dom','GlobalEventHandlers','$at','onscroll']};}};
//AttributeDecl onseeked at events.ceylon (122:4-122:40)
globalEventHandlers$.$prop$getOnseeked={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},EventHandler$dom()]},$cont:GlobalEventHandlers,pa:5,d:['ceylon.interop.browser.dom','GlobalEventHandlers','$at','onseeked']};}};
//AttributeDecl onseeking at events.ceylon (123:4-123:41)
globalEventHandlers$.$prop$getOnseeking={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},EventHandler$dom()]},$cont:GlobalEventHandlers,pa:5,d:['ceylon.interop.browser.dom','GlobalEventHandlers','$at','onseeking']};}};
//AttributeDecl onselect at events.ceylon (124:4-124:40)
globalEventHandlers$.$prop$getOnselect={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},EventHandler$dom()]},$cont:GlobalEventHandlers,pa:5,d:['ceylon.interop.browser.dom','GlobalEventHandlers','$at','onselect']};}};
//AttributeDecl onshow at events.ceylon (125:4-125:38)
globalEventHandlers$.$prop$getOnshow={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},EventHandler$dom()]},$cont:GlobalEventHandlers,pa:5,d:['ceylon.interop.browser.dom','GlobalEventHandlers','$at','onshow']};}};
//AttributeDecl onstalled at events.ceylon (126:4-126:41)
globalEventHandlers$.$prop$getOnstalled={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},EventHandler$dom()]},$cont:GlobalEventHandlers,pa:5,d:['ceylon.interop.browser.dom','GlobalEventHandlers','$at','onstalled']};}};
//AttributeDecl onsubmit at events.ceylon (127:4-127:40)
globalEventHandlers$.$prop$getOnsubmit={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},EventHandler$dom()]},$cont:GlobalEventHandlers,pa:5,d:['ceylon.interop.browser.dom','GlobalEventHandlers','$at','onsubmit']};}};
//AttributeDecl onsuspend at events.ceylon (128:4-128:41)
globalEventHandlers$.$prop$getOnsuspend={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},EventHandler$dom()]},$cont:GlobalEventHandlers,pa:5,d:['ceylon.interop.browser.dom','GlobalEventHandlers','$at','onsuspend']};}};
//AttributeDecl ontimeupdate at events.ceylon (129:4-129:44)
globalEventHandlers$.$prop$getOntimeupdate={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},EventHandler$dom()]},$cont:GlobalEventHandlers,pa:5,d:['ceylon.interop.browser.dom','GlobalEventHandlers','$at','ontimeupdate']};}};
//AttributeDecl ontoggle at events.ceylon (130:4-130:40)
globalEventHandlers$.$prop$getOntoggle={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},EventHandler$dom()]},$cont:GlobalEventHandlers,pa:5,d:['ceylon.interop.browser.dom','GlobalEventHandlers','$at','ontoggle']};}};
//AttributeDecl onvolumechange at events.ceylon (131:4-131:46)
globalEventHandlers$.$prop$getOnvolumechange={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},EventHandler$dom()]},$cont:GlobalEventHandlers,pa:5,d:['ceylon.interop.browser.dom','GlobalEventHandlers','$at','onvolumechange']};}};
//AttributeDecl onwaiting at events.ceylon (132:4-132:41)
globalEventHandlers$.$prop$getOnwaiting={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},EventHandler$dom()]},$cont:GlobalEventHandlers,pa:5,d:['ceylon.interop.browser.dom','GlobalEventHandlers','$at','onwaiting']};}};
})(GlobalEventHandlers.$$.prototype);
}
return GlobalEventHandlers;
}
ex$.$init$GlobalEventHandlers=$init$GlobalEventHandlers;
$init$GlobalEventHandlers();
//TypeAliasDecl OnErrorEventHandler at events.ceylon (135:0-136:28)
function OnErrorEventHandler$dom(){var $4q5={t:m$1.Callable,a:{Arguments$Callable:m$1.mtt$([m$1.mut$([{t:m$1.$_String},{t:$init$Event()}]),m$1.mut$([{t:m$1.Null},{t:m$1.$_String}]),m$1.mut$([{t:m$1.Null},{t:m$1.Integer}]),m$1.mut$([{t:m$1.Null},{t:m$1.Integer}]),{t:m$1.Anything}]),Return$Callable:{t:m$1.Anything}}};$4q5.$crtmm$=function(){return{mod:$CCMM$,pa:1,d:['ceylon.interop.browser.dom','OnErrorEventHandler']};};return $4q5;}
ex$.OnErrorEventHandler$dom=OnErrorEventHandler$dom;
//TypeAliasDecl OnBeforeUnloadEventHandler at events.ceylon (138:0-138:57)
function OnBeforeUnloadEventHandler$dom(){var $4q6={t:m$1.Callable,a:{Arguments$Callable:m$1.mtt$([{t:$init$Event()}]),Return$Callable:m$1.mut$([{t:m$1.Null},{t:m$1.$_String}])}};$4q6.$crtmm$=function(){return{mod:$CCMM$,pa:1,d:['ceylon.interop.browser.dom','OnBeforeUnloadEventHandler']};};return $4q6;}
ex$.OnBeforeUnloadEventHandler$dom=OnBeforeUnloadEventHandler$dom;
//InterfaceDef WindowEventHandlers at events.ceylon (140:0-153:0)
function WindowEventHandlers(windowEventHandlers$){
}
WindowEventHandlers.dynmem$=['onafterprint','onbeforeprint','onbeforeunload','onhashchange','onmessage','onoffline','ononline','onpagehide','onpageshow','onpopstate','onstorage','onunload'];WindowEventHandlers.$crtmm$=function(){return{mod:$CCMM$,pa:1,d:['ceylon.interop.browser.dom','WindowEventHandlers']};};
ex$.WindowEventHandlers=WindowEventHandlers;
function $init$WindowEventHandlers(){
if(WindowEventHandlers.$$===undefined){
m$1.initTypeProtoI(WindowEventHandlers,'ceylon.interop.browser.dom::WindowEventHandlers');
(function(windowEventHandlers$){
//AttributeDecl onafterprint at events.ceylon (141:4-141:44)
windowEventHandlers$.$prop$getOnafterprint={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},EventHandler$dom()]},$cont:WindowEventHandlers,pa:5,d:['ceylon.interop.browser.dom','WindowEventHandlers','$at','onafterprint']};}};
//AttributeDecl onbeforeprint at events.ceylon (142:4-142:45)
windowEventHandlers$.$prop$getOnbeforeprint={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},EventHandler$dom()]},$cont:WindowEventHandlers,pa:5,d:['ceylon.interop.browser.dom','WindowEventHandlers','$at','onbeforeprint']};}};
//AttributeDecl onbeforeunload at events.ceylon (143:4-143:60)
windowEventHandlers$.$prop$getOnbeforeunload={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},OnBeforeUnloadEventHandler$dom()]},$cont:WindowEventHandlers,pa:5,d:['ceylon.interop.browser.dom','WindowEventHandlers','$at','onbeforeunload']};}};
//AttributeDecl onhashchange at events.ceylon (144:4-144:44)
windowEventHandlers$.$prop$getOnhashchange={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},EventHandler$dom()]},$cont:WindowEventHandlers,pa:5,d:['ceylon.interop.browser.dom','WindowEventHandlers','$at','onhashchange']};}};
//AttributeDecl onmessage at events.ceylon (145:4-145:41)
windowEventHandlers$.$prop$getOnmessage={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},EventHandler$dom()]},$cont:WindowEventHandlers,pa:5,d:['ceylon.interop.browser.dom','WindowEventHandlers','$at','onmessage']};}};
//AttributeDecl onoffline at events.ceylon (146:4-146:41)
windowEventHandlers$.$prop$getOnoffline={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},EventHandler$dom()]},$cont:WindowEventHandlers,pa:5,d:['ceylon.interop.browser.dom','WindowEventHandlers','$at','onoffline']};}};
//AttributeDecl ononline at events.ceylon (147:4-147:40)
windowEventHandlers$.$prop$getOnonline={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},EventHandler$dom()]},$cont:WindowEventHandlers,pa:5,d:['ceylon.interop.browser.dom','WindowEventHandlers','$at','ononline']};}};
//AttributeDecl onpagehide at events.ceylon (148:4-148:42)
windowEventHandlers$.$prop$getOnpagehide={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},EventHandler$dom()]},$cont:WindowEventHandlers,pa:5,d:['ceylon.interop.browser.dom','WindowEventHandlers','$at','onpagehide']};}};
//AttributeDecl onpageshow at events.ceylon (149:4-149:42)
windowEventHandlers$.$prop$getOnpageshow={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},EventHandler$dom()]},$cont:WindowEventHandlers,pa:5,d:['ceylon.interop.browser.dom','WindowEventHandlers','$at','onpageshow']};}};
//AttributeDecl onpopstate at events.ceylon (150:4-150:42)
windowEventHandlers$.$prop$getOnpopstate={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},EventHandler$dom()]},$cont:WindowEventHandlers,pa:5,d:['ceylon.interop.browser.dom','WindowEventHandlers','$at','onpopstate']};}};
//AttributeDecl onstorage at events.ceylon (151:4-151:41)
windowEventHandlers$.$prop$getOnstorage={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},EventHandler$dom()]},$cont:WindowEventHandlers,pa:5,d:['ceylon.interop.browser.dom','WindowEventHandlers','$at','onstorage']};}};
//AttributeDecl onunload at events.ceylon (152:4-152:40)
windowEventHandlers$.$prop$getOnunload={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},EventHandler$dom()]},$cont:WindowEventHandlers,pa:5,d:['ceylon.interop.browser.dom','WindowEventHandlers','$at','onunload']};}};
})(WindowEventHandlers.$$.prototype);
}
return WindowEventHandlers;
}
ex$.$init$WindowEventHandlers=$init$WindowEventHandlers;
$init$WindowEventHandlers();

//InterfaceDef Window at Window.ceylon (10:0-54:0)
function Window(window$){
EventTarget(window$);
WindowEventHandlers(window$);
GlobalEventHandlers(window$);
window$.open$defs$url=function($51c,$51d,$51e,$51f){return "about:blank";};
window$.open$defs$target=function($51c,$51d,$51e,$51f){return "_blank";};
window$.open$defs$features=function($51c,$51d,$51e,$51f){return "";};
window$.open$defs$replace=function($51c,$51d,$51e,$51f){return false;};
window$.alert$defs$message=function($51g){return "";};
window$.confirm$defs$message=function($51h){return "";};
window$.prompt$defs$message=function($51i,$51j){return "";};
window$.prompt$defs$default=function($51i,$51j){return "";};
}
Window.dynmem$=['window','self','document','name','location','history','locationbar','menubar','personalbar','scrollbars','statusbar','toolbar','status','close','closed','stop','focus','blur','frames','length','top','opener','parent','frameElement','open','navigator','external','applicationCache','alert','confirm','prompt','print'];Window.$crtmm$=function(){return{mod:$CCMM$,sts:[{t:$init$EventTarget()},{t:$init$WindowEventHandlers()},{t:$init$GlobalEventHandlers()}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.interop.browser:Window')];},d:['ceylon.interop.browser','Window']};};
ex$.Window=Window;
function $init$Window(){
if(Window.$$===undefined){
m$1.initTypeProtoI(Window,'ceylon.interop.browser::Window',$init$EventTarget(),$init$WindowEventHandlers(),$init$GlobalEventHandlers());
(function(window$){
//AttributeDecl window at Window.ceylon (16:4-16:36)
window$.$prop$getWindow={$crtmm$:function(){return{mod:$CCMM$,$t:WindowProxy(),$cont:Window,pa:5,d:['ceylon.interop.browser','Window','$at','window']};}};
//AttributeDecl self at Window.ceylon (17:4-17:34)
window$.$prop$getSelf={$crtmm$:function(){return{mod:$CCMM$,$t:WindowProxy(),$cont:Window,pa:5,d:['ceylon.interop.browser','Window','$at','self']};}};
//AttributeDecl document at Window.ceylon (18:4-18:35)
window$.$prop$getDocument={$crtmm$:function(){return{mod:$CCMM$,$t:{t:$init$Document()},$cont:Window,pa:5,d:['ceylon.interop.browser','Window','$at','document']};}};
//AttributeDecl name at Window.ceylon (19:4-19:38)
window$.$prop$getName={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:Window,pa:1029,d:['ceylon.interop.browser','Window','$at','name']};}};
//AttributeDecl location at Window.ceylon (20:4-20:35)
window$.$prop$getLocation={$crtmm$:function(){return{mod:$CCMM$,$t:{t:$init$Location()},$cont:Window,pa:5,d:['ceylon.interop.browser','Window','$at','location']};}};
//AttributeDecl history at Window.ceylon (21:4-21:33)
window$.$prop$getHistory={$crtmm$:function(){return{mod:$CCMM$,$t:{t:$init$History()},$cont:Window,pa:5,d:['ceylon.interop.browser','Window','$at','history']};}};
//AttributeDecl locationbar at Window.ceylon (23:4-23:37)
window$.$prop$getLocationbar={$crtmm$:function(){return{mod:$CCMM$,$t:{t:$init$BarProp()},$cont:Window,pa:5,d:['ceylon.interop.browser','Window','$at','locationbar']};}};
//AttributeDecl menubar at Window.ceylon (24:4-24:33)
window$.$prop$getMenubar={$crtmm$:function(){return{mod:$CCMM$,$t:{t:$init$BarProp()},$cont:Window,pa:5,d:['ceylon.interop.browser','Window','$at','menubar']};}};
//AttributeDecl personalbar at Window.ceylon (25:4-25:37)
window$.$prop$getPersonalbar={$crtmm$:function(){return{mod:$CCMM$,$t:{t:$init$BarProp()},$cont:Window,pa:5,d:['ceylon.interop.browser','Window','$at','personalbar']};}};
//AttributeDecl scrollbars at Window.ceylon (26:4-26:36)
window$.$prop$getScrollbars={$crtmm$:function(){return{mod:$CCMM$,$t:{t:$init$BarProp()},$cont:Window,pa:5,d:['ceylon.interop.browser','Window','$at','scrollbars']};}};
//AttributeDecl statusbar at Window.ceylon (27:4-27:35)
window$.$prop$getStatusbar={$crtmm$:function(){return{mod:$CCMM$,$t:{t:$init$BarProp()},$cont:Window,pa:5,d:['ceylon.interop.browser','Window','$at','statusbar']};}};
//AttributeDecl toolbar at Window.ceylon (28:4-28:33)
window$.$prop$getToolbar={$crtmm$:function(){return{mod:$CCMM$,$t:{t:$init$BarProp()},$cont:Window,pa:5,d:['ceylon.interop.browser','Window','$at','toolbar']};}};
//AttributeDecl status at Window.ceylon (29:4-29:40)
window$.$prop$getStatus={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:Window,pa:1029,d:['ceylon.interop.browser','Window','$at','status']};}};
window$.close={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[],$cont:Window,pa:5,d:['ceylon.interop.browser','Window','$m','close']};}};
//AttributeDecl closed at Window.ceylon (31:4-31:33)
window$.$prop$getClosed={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:Window,pa:5,d:['ceylon.interop.browser','Window','$at','closed']};}};
window$.stop={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[],$cont:Window,pa:5,d:['ceylon.interop.browser','Window','$m','stop']};}};window$.focus={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[],$cont:Window,pa:5,d:['ceylon.interop.browser','Window','$m','focus']};}};window$.blur={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[],$cont:Window,pa:5,d:['ceylon.interop.browser','Window','$m','blur']};}};
//AttributeDecl frames at Window.ceylon (35:4-35:36)
window$.$prop$getFrames={$crtmm$:function(){return{mod:$CCMM$,$t:WindowProxy(),$cont:Window,pa:5,d:['ceylon.interop.browser','Window','$at','frames']};}};
//AttributeDecl length at Window.ceylon (36:4-36:32)
window$.$prop$getLength={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:Window,pa:5,d:['ceylon.interop.browser','Window','$at','length']};}};
//AttributeDecl top at Window.ceylon (37:4-37:33)
window$.$prop$getTop={$crtmm$:function(){return{mod:$CCMM$,$t:WindowProxy(),$cont:Window,pa:5,d:['ceylon.interop.browser','Window','$at','top']};}};
//AttributeDecl opener at Window.ceylon (38:4-38:37)
window$.$prop$getOpener={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},WindowProxy()]},$cont:Window,pa:5,d:['ceylon.interop.browser','Window','$at','opener']};}};
//AttributeDecl parent at Window.ceylon (39:4-39:36)
window$.$prop$getParent={$crtmm$:function(){return{mod:$CCMM$,$t:WindowProxy(),$cont:Window,pa:5,d:['ceylon.interop.browser','Window','$at','parent']};}};
//AttributeDecl frameElement at Window.ceylon (40:4-40:39)
window$.$prop$getFrameElement={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:$init$Element()}]},$cont:Window,pa:5,d:['ceylon.interop.browser','Window','$at','frameElement']};}};
window$.open={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:WindowProxy(),ps:[{nm:'url',mt:'prm',def:1,$t:{t:m$1.$_String}},{nm:'target',mt:'prm',def:1,$t:{t:m$1.$_String}},{nm:'features',mt:'prm',def:1,$t:{t:m$1.$_String}},{nm:'replace',mt:'prm',def:1,$t:{t:m$1.$_Boolean}}],$cont:Window,pa:5,d:['ceylon.interop.browser','Window','$m','open']};}};
//AttributeDecl navigator at Window.ceylon (47:4-47:37)
window$.$prop$getNavigator={$crtmm$:function(){return{mod:$CCMM$,$t:{t:$init$Navigator()},$cont:Window,pa:5,d:['ceylon.interop.browser','Window','$at','navigator']};}};
//AttributeDecl external at Window.ceylon (48:4-48:36)
window$.$prop$getExternal={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:$init$External()}]},$cont:Window,pa:5,d:['ceylon.interop.browser','Window','$at','external']};}};
//AttributeDecl applicationCache at Window.ceylon (49:4-49:51)
window$.$prop$getApplicationCache={$crtmm$:function(){return{mod:$CCMM$,$t:{t:$init$ApplicationCache()},$cont:Window,pa:5,d:['ceylon.interop.browser','Window','$at','applicationCache']};}};
window$.alert={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'message',mt:'prm',def:1,$t:{t:m$1.$_String}}],$cont:Window,pa:5,d:['ceylon.interop.browser','Window','$m','alert']};}};window$.confirm={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'message',mt:'prm',def:1,$t:{t:m$1.$_String}}],$cont:Window,pa:5,d:['ceylon.interop.browser','Window','$m','confirm']};}};window$.prompt={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},ps:[{nm:'message',mt:'prm',def:1,$t:{t:m$1.$_String}},{nm:'default',mt:'prm',def:1,$t:{t:m$1.$_String}}],$cont:Window,pa:5,d:['ceylon.interop.browser','Window','$m','prompt']};}};window$.print={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[],$cont:Window,pa:5,d:['ceylon.interop.browser','Window','$m','print']};}};
})(Window.$$.prototype);
}
return Window;
}
ex$.$init$Window=$init$Window;
$init$Window();
//TypeAliasDecl WindowProxy at Window.ceylon (56:0-56:34)
function WindowProxy(){var $51k={t:$init$Window()};$51k.$crtmm$=function(){return{mod:$CCMM$,pa:1,d:['ceylon.interop.browser','WindowProxy']};};return $51k;}
ex$.WindowProxy=WindowProxy;
//AttributeGetterDef window at Window.ceylon (58:0-63:0)
function window(){
/*BEG dynblock*/
return m$1.dre$$((typeof eval==='undefined'||eval===null?m$1.throwexc(m$1.Exception("Undefined or null reference: eval"),'61:15-61:18','Window.ceylon'):eval)("window"),{t:$init$Window()},'Window.ceylon 61:15-61:28');
/*END dynblock*/
}
window.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$init$Window()},pa:1,an:function(){return[m$1.doc("The current window.")];},d:['ceylon.interop.browser','window']};}
ex$.window=window;
var $prop$getWindow={$crtmm$:function(){return{mod:$CCMM$,$t:{t:$init$Window()},pa:1,an:function(){return[m$1.doc("The current window.")];},d:['ceylon.interop.browser','window']};}};
ex$.$prop$getWindow=$prop$getWindow;
$prop$getWindow.get=window;
window.$crtmm$=$prop$getWindow.$crtmm$;
//InterfaceDef Location at Window.ceylon (65:0-79:0)
function Location(location$){
}
Location.dynmem$=['assign','replace','reload'];Location.$crtmm$=function(){return{mod:$CCMM$,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.interop.browser:Location')];},d:['ceylon.interop.browser','Location']};};
ex$.Location=Location;
function $init$Location(){
if(Location.$$===undefined){
m$1.initTypeProtoI(Location,'ceylon.interop.browser::Location');
(function(location$){
location$.assign={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'url',mt:'prm',$t:{t:m$1.$_String}}],$cont:Location,pa:5,an:function(){return[m$1.doc("Navigates to the given page.")];},d:['ceylon.interop.browser','Location','$m','assign']};}};location$.replace={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'url',mt:'prm',$t:{t:m$1.$_String}}],$cont:Location,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.interop.browser:Location:$m:replace')];},d:['ceylon.interop.browser','Location','$m','replace']};}};location$.reload={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[],$cont:Location,pa:5,an:function(){return[m$1.doc("Reloads the current page.")];},d:['ceylon.interop.browser','Location','$m','reload']};}};
})(Location.$$.prototype);
}
return Location;
}
ex$.$init$Location=$init$Location;
$init$Location();
//InterfaceDef History at Window.ceylon (81:0-112:0)
function History(history$){
history$.pushState$defs$url=function($51l,$51m,$51n){return null;};
history$.replaceState$defs$url=function($51o,$51p,$51q){return null;};
}
History.dynmem$=['length','state','go','back','forward','pushState','replaceState'];History.$crtmm$=function(){return{mod:$CCMM$,pa:1,d:['ceylon.interop.browser','History']};};
ex$.History=History;
function $init$History(){
if(History.$$===undefined){
m$1.initTypeProtoI(History,'ceylon.interop.browser::History');
(function(history$){
//AttributeDecl length at Window.ceylon (82:4-83:32)
history$.$prop$getLength={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:History,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.interop.browser:History:$at:length')];},d:['ceylon.interop.browser','History','$at','length']};}};
history$.go={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'delta',mt:'prm',$t:{t:m$1.Integer}}],$cont:History,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.interop.browser:History:$m:go')];},d:['ceylon.interop.browser','History','$m','go']};}};history$.back={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[],$cont:History,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.interop.browser:History:$m:back')];},d:['ceylon.interop.browser','History','$m','back']};}};history$.forward={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[],$cont:History,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.interop.browser:History:$m:forward')];},d:['ceylon.interop.browser','History','$m','forward']};}};history$.pushState={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'data',mt:'prm',$t:{t:m$1.Anything}},{nm:'title',mt:'prm',$t:{t:m$1.$_String}},{nm:'url',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}}],$cont:History,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.interop.browser:History:$m:pushState')];},d:['ceylon.interop.browser','History','$m','pushState']};}};history$.replaceState={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'data',mt:'prm',$t:{t:m$1.Anything}},{nm:'title',mt:'prm',$t:{t:m$1.$_String}},{nm:'url',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}}],$cont:History,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.interop.browser:History:$m:replaceState')];},d:['ceylon.interop.browser','History','$m','replaceState']};}};
})(History.$$.prototype);
}
return History;
}
ex$.$init$History=$init$History;
$init$History();
//InterfaceDef BarProp at Window.ceylon (114:0-118:0)
function BarProp(barProp$){
}
BarProp.dynmem$=['visible'];BarProp.$crtmm$=function(){return{mod:$CCMM$,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.interop.browser:BarProp')];},d:['ceylon.interop.browser','BarProp']};};
ex$.BarProp=BarProp;
function $init$BarProp(){
if(BarProp.$$===undefined){
m$1.initTypeProtoI(BarProp,'ceylon.interop.browser::BarProp');
(function(barProp$){
//AttributeDecl visible at Window.ceylon (117:4-117:42)
barProp$.$prop$getVisible={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},$cont:BarProp,pa:1029,d:['ceylon.interop.browser','BarProp','$at','visible']};}};
})(BarProp.$$.prototype);
}
return BarProp;
}
ex$.$init$BarProp=$init$BarProp;
$init$BarProp();
//InterfaceDef External at Window.ceylon (120:0-140:0)
function External(external$){
}
External.dynmem$=['AddSearchProvider','IsSearchProviderInstalled'];External.$crtmm$=function(){return{mod:$CCMM$,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.interop.browser:External')];},d:['ceylon.interop.browser','External']};};
ex$.External=External;
function $init$External(){
if(External.$$===undefined){
m$1.initTypeProtoI(External,'ceylon.interop.browser::External');
(function(external$){
external$.AddSearchProvider={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'engineURL',mt:'prm',$t:{t:m$1.$_String}}],$cont:External,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.interop.browser:External:$m:AddSearchProvider')];},d:['ceylon.interop.browser','External','$m','AddSearchProvider']};}};external$.IsSearchProviderInstalled={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'engineURL',mt:'prm',$t:{t:m$1.$_String}}],$cont:External,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.interop.browser:External:$m:IsSearchProviderInstalled')];},d:['ceylon.interop.browser','External','$m','IsSearchProviderInstalled']};}};
})(External.$$.prototype);
}
return External;
}
ex$.$init$External=$init$External;
$init$External();
//InterfaceDef Navigator at Window.ceylon (143:0-144:0)
function Navigator(navigator$){
}
Navigator.dynmem$=[];Navigator.$crtmm$=function(){return{mod:$CCMM$,pa:1,d:['ceylon.interop.browser','Navigator']};};
ex$.Navigator=Navigator;
function $init$Navigator(){
if(Navigator.$$===undefined){
m$1.initTypeProtoI(Navigator,'ceylon.interop.browser::Navigator');
}
return Navigator;
}
ex$.$init$Navigator=$init$Navigator;
$init$Navigator();
//InterfaceDef ApplicationCache at Window.ceylon (147:0-171:0)
function ApplicationCache(applicationCache$){
EventTarget(applicationCache$);
}
ApplicationCache.dynmem$=['UNCACHED','IDLE','CHECKING','DOWNLOADING','UPDATEREADY','OBSOLETE','status','update','swapCache','onchecking','onerror','onnoupdate','ondownloading','onprogress','onupdateready','oncached','onobsolete'];ApplicationCache.$crtmm$=function(){return{mod:$CCMM$,sts:[{t:$init$EventTarget()}],pa:1,d:['ceylon.interop.browser','ApplicationCache']};};
ex$.ApplicationCache=ApplicationCache;
function $init$ApplicationCache(){
if(ApplicationCache.$$===undefined){
m$1.initTypeProtoI(ApplicationCache,'ceylon.interop.browser::ApplicationCache',$init$EventTarget());
(function(applicationCache$){
//AttributeDecl UNCACHED at Window.ceylon (149:4-149:36)
applicationCache$.$prop$getUNCACHED={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:ApplicationCache,pa:5,d:['ceylon.interop.browser','ApplicationCache','$at','UNCACHED']};}};
//AttributeDecl IDLE at Window.ceylon (150:4-150:32)
applicationCache$.$prop$getIDLE={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:ApplicationCache,pa:5,d:['ceylon.interop.browser','ApplicationCache','$at','IDLE']};}};
//AttributeDecl CHECKING at Window.ceylon (151:4-151:36)
applicationCache$.$prop$getCHECKING={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:ApplicationCache,pa:5,d:['ceylon.interop.browser','ApplicationCache','$at','CHECKING']};}};
//AttributeDecl DOWNLOADING at Window.ceylon (152:4-152:39)
applicationCache$.$prop$getDOWNLOADING={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:ApplicationCache,pa:5,d:['ceylon.interop.browser','ApplicationCache','$at','DOWNLOADING']};}};
//AttributeDecl UPDATEREADY at Window.ceylon (153:4-153:39)
applicationCache$.$prop$getUPDATEREADY={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:ApplicationCache,pa:5,d:['ceylon.interop.browser','ApplicationCache','$at','UPDATEREADY']};}};
//AttributeDecl OBSOLETE at Window.ceylon (154:4-154:36)
applicationCache$.$prop$getOBSOLETE={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:ApplicationCache,pa:5,d:['ceylon.interop.browser','ApplicationCache','$at','OBSOLETE']};}};
//AttributeDecl status at Window.ceylon (155:4-155:32)
applicationCache$.$prop$getStatus={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:ApplicationCache,pa:5,d:['ceylon.interop.browser','ApplicationCache','$at','status']};}};
applicationCache$.update={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[],$cont:ApplicationCache,pa:5,d:['ceylon.interop.browser','ApplicationCache','$m','update']};}};applicationCache$.swapCache={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[],$cont:ApplicationCache,pa:5,d:['ceylon.interop.browser','ApplicationCache','$m','swapCache']};}};
//AttributeDecl onchecking at Window.ceylon (163:4-163:51)
applicationCache$.$prop$getOnchecking={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},EventHandler$dom()]},$cont:ApplicationCache,pa:1029,d:['ceylon.interop.browser','ApplicationCache','$at','onchecking']};}};
//AttributeDecl onerror at Window.ceylon (164:4-164:48)
applicationCache$.$prop$getOnerror={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},EventHandler$dom()]},$cont:ApplicationCache,pa:1029,d:['ceylon.interop.browser','ApplicationCache','$at','onerror']};}};
//AttributeDecl onnoupdate at Window.ceylon (165:4-165:51)
applicationCache$.$prop$getOnnoupdate={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},EventHandler$dom()]},$cont:ApplicationCache,pa:1029,d:['ceylon.interop.browser','ApplicationCache','$at','onnoupdate']};}};
//AttributeDecl ondownloading at Window.ceylon (166:4-166:54)
applicationCache$.$prop$getOndownloading={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},EventHandler$dom()]},$cont:ApplicationCache,pa:1029,d:['ceylon.interop.browser','ApplicationCache','$at','ondownloading']};}};
//AttributeDecl onprogress at Window.ceylon (167:4-167:51)
applicationCache$.$prop$getOnprogress={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},EventHandler$dom()]},$cont:ApplicationCache,pa:1029,d:['ceylon.interop.browser','ApplicationCache','$at','onprogress']};}};
//AttributeDecl onupdateready at Window.ceylon (168:4-168:54)
applicationCache$.$prop$getOnupdateready={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},EventHandler$dom()]},$cont:ApplicationCache,pa:1029,d:['ceylon.interop.browser','ApplicationCache','$at','onupdateready']};}};
//AttributeDecl oncached at Window.ceylon (169:4-169:49)
applicationCache$.$prop$getOncached={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},EventHandler$dom()]},$cont:ApplicationCache,pa:1029,d:['ceylon.interop.browser','ApplicationCache','$at','oncached']};}};
//AttributeDecl onobsolete at Window.ceylon (170:4-170:51)
applicationCache$.$prop$getOnobsolete={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},EventHandler$dom()]},$cont:ApplicationCache,pa:1029,d:['ceylon.interop.browser','ApplicationCache','$at','onobsolete']};}};
})(ApplicationCache.$$.prototype);
}
return ApplicationCache;
}
ex$.$init$ApplicationCache=$init$ApplicationCache;
$init$ApplicationCache();

//InterfaceDef XMLHttpRequest at XMLHttpRequest.ceylon (10:0-113:0)
function XMLHttpRequest(xMLHttpRequest$){
XMLHttpRequestEventTarget(xMLHttpRequest$);
xMLHttpRequest$.open$defs$async=function($51r,$51s,$51t,$51u,$51v){return false;};
xMLHttpRequest$.open$defs$username=function($51r,$51s,$51t,$51u,$51v){return null;};
xMLHttpRequest$.open$defs$password=function($51r,$51s,$51t,$51u,$51v){return null;};
xMLHttpRequest$.send$defs$data=function($51w){return null;};
}
XMLHttpRequest.dynmem$=['onreadystatechange','UNSENT','OPENED','HEADERS_RECEIVED','LOADING','DONE','readyState','open','setRequestHeader','timeout','withCredentials','upload','send','abort','status','statusText','getResponseHeader','getAllResponseHeaders','overrideMimeType','responseType','response','responseText','responseXml'];XMLHttpRequest.$crtmm$=function(){return{mod:$CCMM$,sts:[{t:$init$XMLHttpRequestEventTarget()}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.interop.browser:XMLHttpRequest')];},d:['ceylon.interop.browser','XMLHttpRequest']};};
ex$.XMLHttpRequest=XMLHttpRequest;
function $init$XMLHttpRequest(){
if(XMLHttpRequest.$$===undefined){
m$1.initTypeProtoI(XMLHttpRequest,'ceylon.interop.browser::XMLHttpRequest',$init$XMLHttpRequestEventTarget());
(function(xMLHttpRequest$){
//AttributeDecl onreadystatechange at XMLHttpRequest.ceylon (16:4-18:59)
xMLHttpRequest$.$prop$getOnreadystatechange={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},EventHandler$dom()]},$cont:XMLHttpRequest,pa:1029,an:function(){return[m$1.doc$($CCMM$,'ceylon.interop.browser:XMLHttpRequest:$at:onreadystatechange')];},d:['ceylon.interop.browser','XMLHttpRequest','$at','onreadystatechange']};}};
//AttributeDecl UNSENT at XMLHttpRequest.ceylon (21:4-22:34)
xMLHttpRequest$.$prop$getUNSENT={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:XMLHttpRequest,pa:5,an:function(){return[m$1.doc("The object has been constructed.")];},d:['ceylon.interop.browser','XMLHttpRequest','$at','UNSENT']};}};
//AttributeDecl OPENED at XMLHttpRequest.ceylon (24:4-27:34)
xMLHttpRequest$.$prop$getOPENED={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:XMLHttpRequest,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.interop.browser:XMLHttpRequest:$at:OPENED')];},d:['ceylon.interop.browser','XMLHttpRequest','$at','OPENED']};}};
//AttributeDecl HEADERS_RECEIVED at XMLHttpRequest.ceylon (29:4-32:44)
xMLHttpRequest$.$prop$getHEADERS_RECEIVED={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:XMLHttpRequest,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.interop.browser:XMLHttpRequest:$at:HEADERS_RECEIVED')];},d:['ceylon.interop.browser','XMLHttpRequest','$at','HEADERS_RECEIVED']};}};
//AttributeDecl LOADING at XMLHttpRequest.ceylon (34:4-35:35)
xMLHttpRequest$.$prop$getLOADING={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:XMLHttpRequest,pa:5,an:function(){return[m$1.doc("The response entity body is being received.")];},d:['ceylon.interop.browser','XMLHttpRequest','$at','LOADING']};}};
//AttributeDecl DONE at XMLHttpRequest.ceylon (37:4-39:32)
xMLHttpRequest$.$prop$getDONE={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:XMLHttpRequest,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.interop.browser:XMLHttpRequest:$at:DONE')];},d:['ceylon.interop.browser','XMLHttpRequest','$at','DONE']};}};
//AttributeDecl readyState at XMLHttpRequest.ceylon (41:4-42:36)
xMLHttpRequest$.$prop$getReadyState={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:XMLHttpRequest,pa:5,an:function(){return[m$1.doc("Returns the current state.")];},d:['ceylon.interop.browser','XMLHttpRequest','$at','readyState']};}};
xMLHttpRequest$.open={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'method',mt:'prm',$t:{t:m$1.$_String}},{nm:'url',mt:'prm',$t:{t:m$1.$_String}},{nm:'async',mt:'prm',def:1,$t:{t:m$1.$_Boolean}},{nm:'username',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'password',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}}],$cont:XMLHttpRequest,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.interop.browser:XMLHttpRequest:$m:open')];},d:['ceylon.interop.browser','XMLHttpRequest','$m','open']};}};xMLHttpRequest$.setRequestHeader={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'header',mt:'prm',$t:{t:m$1.$_String}},{nm:'val',mt:'prm',$t:{t:m$1.$_String}}],$cont:XMLHttpRequest,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.interop.browser:XMLHttpRequest:$m:setRequestHeader')];},d:['ceylon.interop.browser','XMLHttpRequest','$m','setRequestHeader']};}};
//AttributeDecl timeout at XMLHttpRequest.ceylon (55:4-61:42)
xMLHttpRequest$.$prop$getTimeout={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:XMLHttpRequest,pa:1029,an:function(){return[m$1.doc$($CCMM$,'ceylon.interop.browser:XMLHttpRequest:$at:timeout')];},d:['ceylon.interop.browser','XMLHttpRequest','$at','timeout']};}};
//AttributeDecl withCredentials at XMLHttpRequest.ceylon (63:4-66:50)
xMLHttpRequest$.$prop$getWithCredentials={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},$cont:XMLHttpRequest,pa:1029,an:function(){return[m$1.doc$($CCMM$,'ceylon.interop.browser:XMLHttpRequest:$at:withCredentials')];},d:['ceylon.interop.browser','XMLHttpRequest','$at','withCredentials']};}};
//AttributeDecl upload at XMLHttpRequest.ceylon (68:4-70:45)
xMLHttpRequest$.$prop$getUpload={$crtmm$:function(){return{mod:$CCMM$,$t:{t:$init$XMLHttpRequestUpload()},$cont:XMLHttpRequest,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.interop.browser:XMLHttpRequest:$at:upload')];},d:['ceylon.interop.browser','XMLHttpRequest','$at','upload']};}};
xMLHttpRequest$.send={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'data',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}}],$cont:XMLHttpRequest,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.interop.browser:XMLHttpRequest:$m:send')];},d:['ceylon.interop.browser','XMLHttpRequest','$m','send']};}};xMLHttpRequest$.abort={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[],$cont:XMLHttpRequest,pa:5,an:function(){return[m$1.doc("Cancels any network activity.")];},d:['ceylon.interop.browser','XMLHttpRequest','$m','abort']};}};
//AttributeDecl status at XMLHttpRequest.ceylon (81:4-82:32)
xMLHttpRequest$.$prop$getStatus={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:XMLHttpRequest,pa:5,an:function(){return[m$1.doc("Returns the HTTP status code.")];},d:['ceylon.interop.browser','XMLHttpRequest','$at','status']};}};
//AttributeDecl statusText at XMLHttpRequest.ceylon (84:4-85:35)
xMLHttpRequest$.$prop$getStatusText={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:XMLHttpRequest,pa:5,an:function(){return[m$1.doc("Returns the HTTP status text.")];},d:['ceylon.interop.browser','XMLHttpRequest','$at','statusText']};}};
xMLHttpRequest$.getResponseHeader={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},ps:[{nm:'header',mt:'prm',$t:{t:m$1.$_String}}],$cont:XMLHttpRequest,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.interop.browser:XMLHttpRequest:$m:getResponseHeader')];},d:['ceylon.interop.browser','XMLHttpRequest','$m','getResponseHeader']};}};xMLHttpRequest$.getAllResponseHeaders={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_String},ps:[],$cont:XMLHttpRequest,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.interop.browser:XMLHttpRequest:$m:getAllResponseHeaders')];},d:['ceylon.interop.browser','XMLHttpRequest','$m','getAllResponseHeaders']};}};xMLHttpRequest$.overrideMimeType={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'mime',mt:'prm',$t:{t:m$1.$_String}}],$cont:XMLHttpRequest,pa:5,an:function(){return[m$1.doc("Sets the `Content-Type` header for the response to mime.")];},d:['ceylon.interop.browser','XMLHttpRequest','$m','overrideMimeType']};}};
//AttributeDecl responseType at XMLHttpRequest.ceylon (98:4-103:37)
xMLHttpRequest$.$prop$getResponseType={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:XMLHttpRequest,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.interop.browser:XMLHttpRequest:$at:responseType'),m$1.see(m$1.$arr$sa$([m$1.OpenInterface$jsint(m$1.lmp$(ex$,'ceylon.interop.browser'),XMLHttpRequestResponseType)],{t:m$1.InterfaceDeclaration$meta$declaration}))];},d:['ceylon.interop.browser','XMLHttpRequest','$at','responseType']};}};
//AttributeDecl responseText at XMLHttpRequest.ceylon (108:4-109:37)
xMLHttpRequest$.$prop$getResponseText={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:XMLHttpRequest,pa:5,an:function(){return[m$1.doc("Returns the text response entity body.")];},d:['ceylon.interop.browser','XMLHttpRequest','$at','responseText']};}};
//AttributeDecl responseXml at XMLHttpRequest.ceylon (111:4-112:39)
xMLHttpRequest$.$prop$getResponseXml={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:$init$Document()}]},$cont:XMLHttpRequest,pa:5,an:function(){return[m$1.doc("Returns the document response entity body.")];},d:['ceylon.interop.browser','XMLHttpRequest','$at','responseXml']};}};
})(XMLHttpRequest.$$.prototype);
}
return XMLHttpRequest;
}
ex$.$init$XMLHttpRequest=$init$XMLHttpRequest;
$init$XMLHttpRequest();
//MethodDecl newXMLHttpRequest at XMLHttpRequest.ceylon (115:0-117:38)
function newXMLHttpRequest(){return newXMLHttpRequestInternal$internal();
};
newXMLHttpRequest.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$init$XMLHttpRequest()},ps:[],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.interop.browser:newXMLHttpRequest')];},d:['ceylon.interop.browser','newXMLHttpRequest']};};
ex$.newXMLHttpRequest=newXMLHttpRequest;
//InterfaceDef XMLHttpRequestEventTarget at XMLHttpRequest.ceylon (119:0-143:0)
function XMLHttpRequestEventTarget(xMLHttpRequestEventTarget$){
EventTarget(xMLHttpRequestEventTarget$);
}
XMLHttpRequestEventTarget.dynmem$=['onloadstart','onprogress','onabort','onerror','onload','ontimeout','onloadend'];XMLHttpRequestEventTarget.$crtmm$=function(){return{mod:$CCMM$,sts:[{t:$init$EventTarget()}],pa:1,d:['ceylon.interop.browser','XMLHttpRequestEventTarget']};};
ex$.XMLHttpRequestEventTarget=XMLHttpRequestEventTarget;
function $init$XMLHttpRequestEventTarget(){
if(XMLHttpRequestEventTarget.$$===undefined){
m$1.initTypeProtoI(XMLHttpRequestEventTarget,'ceylon.interop.browser::XMLHttpRequestEventTarget',$init$EventTarget());
(function(xMLHttpRequestEventTarget$){
//AttributeDecl onloadstart at XMLHttpRequest.ceylon (121:4-122:52)
xMLHttpRequestEventTarget$.$prop$getOnloadstart={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},EventHandler$dom()]},$cont:XMLHttpRequestEventTarget,pa:1029,an:function(){return[m$1.doc("Dispatched when the request starts.")];},d:['ceylon.interop.browser','XMLHttpRequestEventTarget','$at','onloadstart']};}};
//AttributeDecl onprogress at XMLHttpRequest.ceylon (124:4-125:51)
xMLHttpRequestEventTarget$.$prop$getOnprogress={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},EventHandler$dom()]},$cont:XMLHttpRequestEventTarget,pa:1029,an:function(){return[m$1.doc("Dispatched when transmitting data.")];},d:['ceylon.interop.browser','XMLHttpRequestEventTarget','$at','onprogress']};}};
//AttributeDecl onabort at XMLHttpRequest.ceylon (127:4-129:48)
xMLHttpRequestEventTarget$.$prop$getOnabort={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},EventHandler$dom()]},$cont:XMLHttpRequestEventTarget,pa:1029,an:function(){return[m$1.doc$($CCMM$,'ceylon.interop.browser:XMLHttpRequestEventTarget:$at:onabort')];},d:['ceylon.interop.browser','XMLHttpRequestEventTarget','$at','onabort']};}};
//AttributeDecl onerror at XMLHttpRequest.ceylon (131:4-132:48)
xMLHttpRequestEventTarget$.$prop$getOnerror={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},EventHandler$dom()]},$cont:XMLHttpRequestEventTarget,pa:1029,an:function(){return[m$1.doc("Dispatched when the request has failed.")];},d:['ceylon.interop.browser','XMLHttpRequestEventTarget','$at','onerror']};}};
//AttributeDecl onload at XMLHttpRequest.ceylon (134:4-135:47)
xMLHttpRequestEventTarget$.$prop$getOnload={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},EventHandler$dom()]},$cont:XMLHttpRequestEventTarget,pa:1029,an:function(){return[m$1.doc("Dispatched when the request has successfully completed.")];},d:['ceylon.interop.browser','XMLHttpRequestEventTarget','$at','onload']};}};
//AttributeDecl ontimeout at XMLHttpRequest.ceylon (137:4-139:50)
xMLHttpRequestEventTarget$.$prop$getOntimeout={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},EventHandler$dom()]},$cont:XMLHttpRequestEventTarget,pa:1029,an:function(){return[m$1.doc$($CCMM$,'ceylon.interop.browser:XMLHttpRequestEventTarget:$at:ontimeout')];},d:['ceylon.interop.browser','XMLHttpRequestEventTarget','$at','ontimeout']};}};
//AttributeDecl onloadend at XMLHttpRequest.ceylon (141:4-142:50)
xMLHttpRequestEventTarget$.$prop$getOnloadend={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},EventHandler$dom()]},$cont:XMLHttpRequestEventTarget,pa:1029,an:function(){return[m$1.doc$($CCMM$,'ceylon.interop.browser:XMLHttpRequestEventTarget:$at:onloadend')];},d:['ceylon.interop.browser','XMLHttpRequestEventTarget','$at','onloadend']};}};
})(XMLHttpRequestEventTarget.$$.prototype);
}
return XMLHttpRequestEventTarget;
}
ex$.$init$XMLHttpRequestEventTarget=$init$XMLHttpRequestEventTarget;
$init$XMLHttpRequestEventTarget();
//InterfaceDef XMLHttpRequestUpload at XMLHttpRequest.ceylon (145:0-147:0)
function XMLHttpRequestUpload(xMLHttpRequestUpload$){
XMLHttpRequestEventTarget(xMLHttpRequestUpload$);
}
XMLHttpRequestUpload.dynmem$=[];XMLHttpRequestUpload.$crtmm$=function(){return{mod:$CCMM$,sts:[{t:$init$XMLHttpRequestEventTarget()}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.interop.browser:XMLHttpRequestUpload')];},d:['ceylon.interop.browser','XMLHttpRequestUpload']};};
ex$.XMLHttpRequestUpload=XMLHttpRequestUpload;
function $init$XMLHttpRequestUpload(){
if(XMLHttpRequestUpload.$$===undefined){
m$1.initTypeProtoI(XMLHttpRequestUpload,'ceylon.interop.browser::XMLHttpRequestUpload',$init$XMLHttpRequestEventTarget());
}
return XMLHttpRequestUpload;
}
ex$.$init$XMLHttpRequestUpload=$init$XMLHttpRequestUpload;
$init$XMLHttpRequestUpload();
//InterfaceDef XMLHttpRequestResponseType at XMLHttpRequest.ceylon (149:0-157:0)
function XMLHttpRequestResponseType(xMLHttpRequestResponseType$){
}
XMLHttpRequestResponseType.$crtmm$=function(){return{mod:$CCMM$,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.interop.browser:XMLHttpRequestResponseType')];},d:['ceylon.interop.browser','XMLHttpRequestResponseType']};};
ex$.XMLHttpRequestResponseType=XMLHttpRequestResponseType;
function $init$XMLHttpRequestResponseType(){
if(XMLHttpRequestResponseType.$$===undefined){
m$1.initTypeProtoI(XMLHttpRequestResponseType,'ceylon.interop.browser::XMLHttpRequestResponseType');
(function(xMLHttpRequestResponseType$){
//AttributeDecl empty at XMLHttpRequest.ceylon (151:4-151:29)
m$1.atr$(xMLHttpRequestResponseType$,'empty',function(){
return "";
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:XMLHttpRequestResponseType,pa:1,d:['ceylon.interop.browser','XMLHttpRequestResponseType','$at','empty']};});
//AttributeDecl arrayBuffer at XMLHttpRequest.ceylon (152:4-152:46)
m$1.atr$(xMLHttpRequestResponseType$,'arrayBuffer',function(){
return "arraybuffer";
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:XMLHttpRequestResponseType,pa:1,d:['ceylon.interop.browser','XMLHttpRequestResponseType','$at','arrayBuffer']};});
//AttributeDecl blob at XMLHttpRequest.ceylon (153:4-153:32)
m$1.atr$(xMLHttpRequestResponseType$,'blob',function(){
return "blob";
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:XMLHttpRequestResponseType,pa:1,d:['ceylon.interop.browser','XMLHttpRequestResponseType','$at','blob']};});
//AttributeDecl document at XMLHttpRequest.ceylon (154:4-154:40)
m$1.atr$(xMLHttpRequestResponseType$,'document',function(){
return "document";
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:XMLHttpRequestResponseType,pa:1,d:['ceylon.interop.browser','XMLHttpRequestResponseType','$at','document']};});
//AttributeDecl json at XMLHttpRequest.ceylon (155:4-155:32)
m$1.atr$(xMLHttpRequestResponseType$,'json',function(){
return "json";
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:XMLHttpRequestResponseType,pa:1,d:['ceylon.interop.browser','XMLHttpRequestResponseType','$at','json']};});
//AttributeDecl text at XMLHttpRequest.ceylon (156:4-156:32)
m$1.atr$(xMLHttpRequestResponseType$,'text',function(){
return "text";
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:XMLHttpRequestResponseType,pa:1,d:['ceylon.interop.browser','XMLHttpRequestResponseType','$at','text']};});
})(XMLHttpRequestResponseType.$$.prototype);
}
return XMLHttpRequestResponseType;
}
ex$.$init$XMLHttpRequestResponseType=$init$XMLHttpRequestResponseType;
$init$XMLHttpRequestResponseType();

//InterfaceDef NodeIterator at traversal.ceylon (5:0-16:0)
function NodeIterator(nodeIterator$){
}
NodeIterator.dynmem$=['root','referenceNode','pointerBeforeReferenceNode','whatToShow','filter','nextNode','previousNode','detach'];NodeIterator.$crtmm$=function(){return{mod:$CCMM$,pa:1,d:['ceylon.interop.browser.dom','NodeIterator']};};
ex$.NodeIterator=NodeIterator;
function $init$NodeIterator(){
if(NodeIterator.$$===undefined){
m$1.initTypeProtoI(NodeIterator,'ceylon.interop.browser.dom::NodeIterator');
(function(nodeIterator$){
//AttributeDecl root at traversal.ceylon (6:4-6:27)
nodeIterator$.$prop$getRoot={$crtmm$:function(){return{mod:$CCMM$,$t:{t:$init$Node()},$cont:NodeIterator,pa:5,d:['ceylon.interop.browser.dom','NodeIterator','$at','root']};}};
//AttributeDecl referenceNode at traversal.ceylon (7:4-7:36)
nodeIterator$.$prop$getReferenceNode={$crtmm$:function(){return{mod:$CCMM$,$t:{t:$init$Node()},$cont:NodeIterator,pa:5,d:['ceylon.interop.browser.dom','NodeIterator','$at','referenceNode']};}};
//AttributeDecl pointerBeforeReferenceNode at traversal.ceylon (8:4-8:52)
nodeIterator$.$prop$getPointerBeforeReferenceNode={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},$cont:NodeIterator,pa:5,d:['ceylon.interop.browser.dom','NodeIterator','$at','pointerBeforeReferenceNode']};}};
//AttributeDecl whatToShow at traversal.ceylon (9:4-9:36)
nodeIterator$.$prop$getWhatToShow={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:NodeIterator,pa:5,d:['ceylon.interop.browser.dom','NodeIterator','$at','whatToShow']};}};
//AttributeDecl filter at traversal.ceylon (10:4-10:36)
nodeIterator$.$prop$getFilter={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:$init$NodeFilter()}]},$cont:NodeIterator,pa:5,d:['ceylon.interop.browser.dom','NodeIterator','$at','filter']};}};
nodeIterator$.nextNode={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:$init$Node()}]},ps:[],$cont:NodeIterator,pa:5,d:['ceylon.interop.browser.dom','NodeIterator','$m','nextNode']};}};nodeIterator$.previousNode={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:$init$Node()}]},ps:[],$cont:NodeIterator,pa:5,d:['ceylon.interop.browser.dom','NodeIterator','$m','previousNode']};}};nodeIterator$.detach={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[],$cont:NodeIterator,pa:5,d:['ceylon.interop.browser.dom','NodeIterator','$m','detach']};}};
})(NodeIterator.$$.prototype);
}
return NodeIterator;
}
ex$.$init$NodeIterator=$init$NodeIterator;
$init$NodeIterator();
//InterfaceDef NodeFilter at traversal.ceylon (18:0-40:0)
function NodeFilter(nodeFilter$){
}
NodeFilter.dynmem$=['FILTER_ACCEPT','FILTER_REJECT','FILTER_SKIP','SHOW_ALL','SHOW_ELEMENT','SHOW_ATTRIBUTE','SHOW_TEXT','SHOW_CDATA_SECTION','SHOW_ENTITY_REFERENCE','SHOW_ENTITY','SHOW_PROCESSING_INSTRUCTION','SHOW_COMMENT','SHOW_DOCUMENT','SHOW_DOCUMENT_TYPE','SHOW_DOCUMENT_FRAGMENT','SHOW_NOTATION','acceptNode'];NodeFilter.$crtmm$=function(){return{mod:$CCMM$,pa:1,d:['ceylon.interop.browser.dom','NodeFilter']};};
ex$.NodeFilter=NodeFilter;
function $init$NodeFilter(){
if(NodeFilter.$$===undefined){
m$1.initTypeProtoI(NodeFilter,'ceylon.interop.browser.dom::NodeFilter');
(function(nodeFilter$){
//AttributeDecl FILTER_ACCEPT at traversal.ceylon (20:4-20:41)
nodeFilter$.$prop$getFILTER_ACCEPT={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:NodeFilter,pa:5,d:['ceylon.interop.browser.dom','NodeFilter','$at','FILTER_ACCEPT']};}};
//AttributeDecl FILTER_REJECT at traversal.ceylon (21:4-21:41)
nodeFilter$.$prop$getFILTER_REJECT={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:NodeFilter,pa:5,d:['ceylon.interop.browser.dom','NodeFilter','$at','FILTER_REJECT']};}};
//AttributeDecl FILTER_SKIP at traversal.ceylon (22:4-22:39)
nodeFilter$.$prop$getFILTER_SKIP={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:NodeFilter,pa:5,d:['ceylon.interop.browser.dom','NodeFilter','$at','FILTER_SKIP']};}};
//AttributeDecl SHOW_ALL at traversal.ceylon (25:4-25:36)
nodeFilter$.$prop$getSHOW_ALL={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:NodeFilter,pa:5,d:['ceylon.interop.browser.dom','NodeFilter','$at','SHOW_ALL']};}};
//AttributeDecl SHOW_ELEMENT at traversal.ceylon (26:4-26:40)
nodeFilter$.$prop$getSHOW_ELEMENT={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:NodeFilter,pa:5,d:['ceylon.interop.browser.dom','NodeFilter','$at','SHOW_ELEMENT']};}};
//AttributeDecl SHOW_ATTRIBUTE at traversal.ceylon (27:4-27:42)
nodeFilter$.$prop$getSHOW_ATTRIBUTE={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:NodeFilter,pa:5,d:['ceylon.interop.browser.dom','NodeFilter','$at','SHOW_ATTRIBUTE']};}};
//AttributeDecl SHOW_TEXT at traversal.ceylon (28:4-28:37)
nodeFilter$.$prop$getSHOW_TEXT={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:NodeFilter,pa:5,d:['ceylon.interop.browser.dom','NodeFilter','$at','SHOW_TEXT']};}};
//AttributeDecl SHOW_CDATA_SECTION at traversal.ceylon (29:4-29:46)
nodeFilter$.$prop$getSHOW_CDATA_SECTION={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:NodeFilter,pa:5,d:['ceylon.interop.browser.dom','NodeFilter','$at','SHOW_CDATA_SECTION']};}};
//AttributeDecl SHOW_ENTITY_REFERENCE at traversal.ceylon (30:4-30:49)
nodeFilter$.$prop$getSHOW_ENTITY_REFERENCE={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:NodeFilter,pa:5,d:['ceylon.interop.browser.dom','NodeFilter','$at','SHOW_ENTITY_REFERENCE']};}};
//AttributeDecl SHOW_ENTITY at traversal.ceylon (31:4-31:39)
nodeFilter$.$prop$getSHOW_ENTITY={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:NodeFilter,pa:5,d:['ceylon.interop.browser.dom','NodeFilter','$at','SHOW_ENTITY']};}};
//AttributeDecl SHOW_PROCESSING_INSTRUCTION at traversal.ceylon (32:4-32:55)
nodeFilter$.$prop$getSHOW_PROCESSING_INSTRUCTION={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:NodeFilter,pa:5,d:['ceylon.interop.browser.dom','NodeFilter','$at','SHOW_PROCESSING_INSTRUCTION']};}};
//AttributeDecl SHOW_COMMENT at traversal.ceylon (33:4-33:40)
nodeFilter$.$prop$getSHOW_COMMENT={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:NodeFilter,pa:5,d:['ceylon.interop.browser.dom','NodeFilter','$at','SHOW_COMMENT']};}};
//AttributeDecl SHOW_DOCUMENT at traversal.ceylon (34:4-34:41)
nodeFilter$.$prop$getSHOW_DOCUMENT={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:NodeFilter,pa:5,d:['ceylon.interop.browser.dom','NodeFilter','$at','SHOW_DOCUMENT']};}};
//AttributeDecl SHOW_DOCUMENT_TYPE at traversal.ceylon (35:4-35:46)
nodeFilter$.$prop$getSHOW_DOCUMENT_TYPE={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:NodeFilter,pa:5,d:['ceylon.interop.browser.dom','NodeFilter','$at','SHOW_DOCUMENT_TYPE']};}};
//AttributeDecl SHOW_DOCUMENT_FRAGMENT at traversal.ceylon (36:4-36:50)
nodeFilter$.$prop$getSHOW_DOCUMENT_FRAGMENT={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:NodeFilter,pa:5,d:['ceylon.interop.browser.dom','NodeFilter','$at','SHOW_DOCUMENT_FRAGMENT']};}};
//AttributeDecl SHOW_NOTATION at traversal.ceylon (37:4-37:41)
nodeFilter$.$prop$getSHOW_NOTATION={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:NodeFilter,pa:5,d:['ceylon.interop.browser.dom','NodeFilter','$at','SHOW_NOTATION']};}};
nodeFilter$.acceptNode={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'node',mt:'prm',$t:{t:$init$Node()}}],$cont:NodeFilter,pa:5,d:['ceylon.interop.browser.dom','NodeFilter','$m','acceptNode']};}};
})(NodeFilter.$$.prototype);
}
return NodeFilter;
}
ex$.$init$NodeFilter=$init$NodeFilter;
$init$NodeFilter();
//InterfaceDef TreeWalker at traversal.ceylon (42:0-55:0)
function TreeWalker(treeWalker$){
}
TreeWalker.dynmem$=['root','whatToShow','filter','currentNode','parentNode','firstChild','lastChild','previousSibling','nextSibling','previousNode','nextNode'];TreeWalker.$crtmm$=function(){return{mod:$CCMM$,pa:1,d:['ceylon.interop.browser.dom','TreeWalker']};};
ex$.TreeWalker=TreeWalker;
function $init$TreeWalker(){
if(TreeWalker.$$===undefined){
m$1.initTypeProtoI(TreeWalker,'ceylon.interop.browser.dom::TreeWalker');
(function(treeWalker$){
//AttributeDecl root at traversal.ceylon (43:4-43:27)
treeWalker$.$prop$getRoot={$crtmm$:function(){return{mod:$CCMM$,$t:{t:$init$Node()},$cont:TreeWalker,pa:5,d:['ceylon.interop.browser.dom','TreeWalker','$at','root']};}};
//AttributeDecl whatToShow at traversal.ceylon (44:4-44:36)
treeWalker$.$prop$getWhatToShow={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:TreeWalker,pa:5,d:['ceylon.interop.browser.dom','TreeWalker','$at','whatToShow']};}};
//AttributeDecl filter at traversal.ceylon (45:4-45:36)
treeWalker$.$prop$getFilter={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:$init$NodeFilter()}]},$cont:TreeWalker,pa:5,d:['ceylon.interop.browser.dom','TreeWalker','$at','filter']};}};
//AttributeDecl currentNode at traversal.ceylon (46:4-46:43)
treeWalker$.$prop$getCurrentNode={$crtmm$:function(){return{mod:$CCMM$,$t:{t:$init$Node()},$cont:TreeWalker,pa:1029,d:['ceylon.interop.browser.dom','TreeWalker','$at','currentNode']};}};
treeWalker$.parentNode={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:$init$Node()}]},ps:[],$cont:TreeWalker,pa:5,d:['ceylon.interop.browser.dom','TreeWalker','$m','parentNode']};}};treeWalker$.firstChild={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:$init$Node()}]},ps:[],$cont:TreeWalker,pa:5,d:['ceylon.interop.browser.dom','TreeWalker','$m','firstChild']};}};treeWalker$.lastChild={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:$init$Node()}]},ps:[],$cont:TreeWalker,pa:5,d:['ceylon.interop.browser.dom','TreeWalker','$m','lastChild']};}};treeWalker$.previousSibling={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:$init$Node()}]},ps:[],$cont:TreeWalker,pa:5,d:['ceylon.interop.browser.dom','TreeWalker','$m','previousSibling']};}};treeWalker$.nextSibling={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:$init$Node()}]},ps:[],$cont:TreeWalker,pa:5,d:['ceylon.interop.browser.dom','TreeWalker','$m','nextSibling']};}};treeWalker$.previousNode={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:$init$Node()}]},ps:[],$cont:TreeWalker,pa:5,d:['ceylon.interop.browser.dom','TreeWalker','$m','previousNode']};}};treeWalker$.nextNode={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:$init$Node()}]},ps:[],$cont:TreeWalker,pa:5,d:['ceylon.interop.browser.dom','TreeWalker','$m','nextNode']};}};
})(TreeWalker.$$.prototype);
}
return TreeWalker;
}
ex$.$init$TreeWalker=$init$TreeWalker;
$init$TreeWalker();

//InterfaceDef Range at ranges.ceylon (7:0-47:0)
function Range(range$){
range$.collapse$defs$toStart=function($9p3){return false;};
}
Range.dynmem$=['startContainer','startOffset','endContainer','endOffset','collapsed','commonAncestorContainer','setStart','setEnd','setStartBefore','setStartAfter','setEndBefore','setEndAfter','collapse','selectNode','selectNodeContents','START_TO_START','START_TO_END','END_TO_END','END_TO_START','compareBoundaryPoints','deleteContents','extractContents','cloneContents','insertNode','surroundContents','cloneRange','detach','isPointInRange','comparePoint','intersectsNode','createContextualFragment'];Range.$crtmm$=function(){return{mod:$CCMM$,pa:1,d:['ceylon.interop.browser.dom','Range']};};
ex$.Range=Range;
function $init$Range(){
if(Range.$$===undefined){
m$1.initTypeProtoI(Range,'ceylon.interop.browser.dom::Range');
(function(range$){
//AttributeDecl startContainer at ranges.ceylon (8:4-8:37)
range$.$prop$getStartContainer={$crtmm$:function(){return{mod:$CCMM$,$t:{t:$init$Node()},$cont:Range,pa:5,d:['ceylon.interop.browser.dom','Range','$at','startContainer']};}};
//AttributeDecl startOffset at ranges.ceylon (9:4-9:37)
range$.$prop$getStartOffset={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:Range,pa:5,d:['ceylon.interop.browser.dom','Range','$at','startOffset']};}};
//AttributeDecl endContainer at ranges.ceylon (10:4-10:35)
range$.$prop$getEndContainer={$crtmm$:function(){return{mod:$CCMM$,$t:{t:$init$Node()},$cont:Range,pa:5,d:['ceylon.interop.browser.dom','Range','$at','endContainer']};}};
//AttributeDecl endOffset at ranges.ceylon (11:4-11:35)
range$.$prop$getEndOffset={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:Range,pa:5,d:['ceylon.interop.browser.dom','Range','$at','endOffset']};}};
//AttributeDecl collapsed at ranges.ceylon (12:4-12:35)
range$.$prop$getCollapsed={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},$cont:Range,pa:5,d:['ceylon.interop.browser.dom','Range','$at','collapsed']};}};
//AttributeDecl commonAncestorContainer at ranges.ceylon (13:4-13:46)
range$.$prop$getCommonAncestorContainer={$crtmm$:function(){return{mod:$CCMM$,$t:{t:$init$Node()},$cont:Range,pa:5,d:['ceylon.interop.browser.dom','Range','$at','commonAncestorContainer']};}};
range$.setStart={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'node',mt:'prm',$t:{t:$init$Node()}},{nm:'offset',mt:'prm',$t:{t:m$1.Integer}}],$cont:Range,pa:5,d:['ceylon.interop.browser.dom','Range','$m','setStart']};}};range$.setEnd={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'node',mt:'prm',$t:{t:$init$Node()}},{nm:'offset',mt:'prm',$t:{t:m$1.Integer}}],$cont:Range,pa:5,d:['ceylon.interop.browser.dom','Range','$m','setEnd']};}};range$.setStartBefore={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'node',mt:'prm',$t:{t:$init$Node()}}],$cont:Range,pa:5,d:['ceylon.interop.browser.dom','Range','$m','setStartBefore']};}};range$.setStartAfter={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'node',mt:'prm',$t:{t:$init$Node()}}],$cont:Range,pa:5,d:['ceylon.interop.browser.dom','Range','$m','setStartAfter']};}};range$.setEndBefore={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'node',mt:'prm',$t:{t:$init$Node()}}],$cont:Range,pa:5,d:['ceylon.interop.browser.dom','Range','$m','setEndBefore']};}};range$.setEndAfter={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'node',mt:'prm',$t:{t:$init$Node()}}],$cont:Range,pa:5,d:['ceylon.interop.browser.dom','Range','$m','setEndAfter']};}};range$.collapse={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'toStart',mt:'prm',def:1,$t:{t:m$1.$_Boolean}}],$cont:Range,pa:5,d:['ceylon.interop.browser.dom','Range','$m','collapse']};}};range$.selectNode={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'node',mt:'prm',$t:{t:$init$Node()}}],$cont:Range,pa:5,d:['ceylon.interop.browser.dom','Range','$m','selectNode']};}};range$.selectNodeContents={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'node',mt:'prm',$t:{t:$init$Node()}}],$cont:Range,pa:5,d:['ceylon.interop.browser.dom','Range','$m','selectNodeContents']};}};
//AttributeDecl START_TO_START at ranges.ceylon (25:4-25:42)
range$.$prop$getSTART_TO_START={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:Range,pa:5,d:['ceylon.interop.browser.dom','Range','$at','START_TO_START']};}};
//AttributeDecl START_TO_END at ranges.ceylon (26:4-26:40)
range$.$prop$getSTART_TO_END={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:Range,pa:5,d:['ceylon.interop.browser.dom','Range','$at','START_TO_END']};}};
//AttributeDecl END_TO_END at ranges.ceylon (27:4-27:38)
range$.$prop$getEND_TO_END={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:Range,pa:5,d:['ceylon.interop.browser.dom','Range','$at','END_TO_END']};}};
//AttributeDecl END_TO_START at ranges.ceylon (28:4-28:40)
range$.$prop$getEND_TO_START={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:Range,pa:5,d:['ceylon.interop.browser.dom','Range','$at','END_TO_START']};}};
range$.compareBoundaryPoints={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'how',mt:'prm',$t:{t:m$1.Integer}},{nm:'sourceRange',mt:'prm',$t:{t:$init$Range()}}],$cont:Range,pa:5,d:['ceylon.interop.browser.dom','Range','$m','compareBoundaryPoints']};}};range$.deleteContents={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[],$cont:Range,pa:5,d:['ceylon.interop.browser.dom','Range','$m','deleteContents']};}};range$.extractContents={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:$init$DocumentFragment()},ps:[],$cont:Range,pa:5,d:['ceylon.interop.browser.dom','Range','$m','extractContents']};}};range$.cloneContents={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:$init$DocumentFragment()},ps:[],$cont:Range,pa:5,d:['ceylon.interop.browser.dom','Range','$m','cloneContents']};}};range$.insertNode={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'node',mt:'prm',$t:{t:$init$Node()}}],$cont:Range,pa:5,d:['ceylon.interop.browser.dom','Range','$m','insertNode']};}};range$.surroundContents={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'newParent',mt:'prm',$t:{t:$init$Node()}}],$cont:Range,pa:5,d:['ceylon.interop.browser.dom','Range','$m','surroundContents']};}};range$.cloneRange={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:$init$Range()},ps:[],$cont:Range,pa:5,d:['ceylon.interop.browser.dom','Range','$m','cloneRange']};}};range$.detach={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[],$cont:Range,pa:5,d:['ceylon.interop.browser.dom','Range','$m','detach']};}};range$.isPointInRange={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'node',mt:'prm',$t:{t:$init$Node()}},{nm:'offset',mt:'prm',$t:{t:m$1.Integer}}],$cont:Range,pa:5,d:['ceylon.interop.browser.dom','Range','$m','isPointInRange']};}};range$.comparePoint={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'node',mt:'prm',$t:{t:$init$Node()}},{nm:'offset',mt:'prm',$t:{t:m$1.Integer}}],$cont:Range,pa:5,d:['ceylon.interop.browser.dom','Range','$m','comparePoint']};}};range$.intersectsNode={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'node',mt:'prm',$t:{t:$init$Node()}}],$cont:Range,pa:5,d:['ceylon.interop.browser.dom','Range','$m','intersectsNode']};}};range$.createContextualFragment={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:$init$DocumentFragment()},ps:[{nm:'fragment',mt:'prm',$t:{t:m$1.$_String}}],$cont:Range,pa:5,d:['ceylon.interop.browser.dom','Range','$m','createContextualFragment']};}};
})(Range.$$.prototype);
}
return Range;
}
ex$.$init$Range=$init$Range;
$init$Range();
//MethodDecl newRange at ranges.ceylon (49:0-49:45)
function newRange$dom(){return newRangeInternal$internal();
};
newRange$dom.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$init$Range()},ps:[],pa:1,d:['ceylon.interop.browser.dom','newRange']};};
ex$.newRange$dom=newRange$dom;

//InterfaceDef HTMLElement at html.ceylon (1:0-21:0)
function HTMLElement(hTMLElement$){
Element(hTMLElement$);
GlobalEventHandlers(hTMLElement$);
}
HTMLElement.dynmem$=['title','lang','translate','dir','dataset','hidden','click','tabIndex','focus','blur','accessKey','accessKeyLabel','contentEditable','isContentEditable','spellcheck'];HTMLElement.$crtmm$=function(){return{mod:$CCMM$,sts:[{t:$init$Element()},{t:$init$GlobalEventHandlers()}],pa:1,d:['ceylon.interop.browser.dom','HTMLElement']};};
ex$.HTMLElement=HTMLElement;
function $init$HTMLElement(){
if(HTMLElement.$$===undefined){
m$1.initTypeProtoI(HTMLElement,'ceylon.interop.browser.dom::HTMLElement',$init$Element(),$init$GlobalEventHandlers());
(function(hTMLElement$){
//AttributeDecl title at html.ceylon (3:4-3:39)
hTMLElement$.$prop$getTitle={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:HTMLElement,pa:1029,d:['ceylon.interop.browser.dom','HTMLElement','$at','title']};}};
//AttributeDecl lang at html.ceylon (4:4-4:38)
hTMLElement$.$prop$getLang={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:HTMLElement,pa:1029,d:['ceylon.interop.browser.dom','HTMLElement','$at','lang']};}};
//AttributeDecl translate at html.ceylon (5:4-5:45)
hTMLElement$.$prop$getTranslate={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Boolean}]},$cont:HTMLElement,pa:1029,d:['ceylon.interop.browser.dom','HTMLElement','$at','translate']};}};
//AttributeDecl dir at html.ceylon (6:4-6:37)
hTMLElement$.$prop$getDir={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:HTMLElement,pa:1029,d:['ceylon.interop.browser.dom','HTMLElement','$at','dir']};}};
//AttributeDecl hidden at html.ceylon (11:4-11:41)
hTMLElement$.$prop$getHidden={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},$cont:HTMLElement,pa:1029,d:['ceylon.interop.browser.dom','HTMLElement','$at','hidden']};}};
hTMLElement$.click={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[],$cont:HTMLElement,pa:5,d:['ceylon.interop.browser.dom','HTMLElement','$m','click']};}};
//AttributeDecl tabIndex at html.ceylon (13:4-13:43)
hTMLElement$.$prop$getTabIndex={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:HTMLElement,pa:1029,d:['ceylon.interop.browser.dom','HTMLElement','$at','tabIndex']};}};
hTMLElement$.focus={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[],$cont:HTMLElement,pa:5,d:['ceylon.interop.browser.dom','HTMLElement','$m','focus']};}};hTMLElement$.blur={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[],$cont:HTMLElement,pa:5,d:['ceylon.interop.browser.dom','HTMLElement','$m','blur']};}};
//AttributeDecl accessKey at html.ceylon (16:4-16:43)
hTMLElement$.$prop$getAccessKey={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:HTMLElement,pa:1029,d:['ceylon.interop.browser.dom','HTMLElement','$at','accessKey']};}};
//AttributeDecl accessKeyLabel at html.ceylon (17:4-17:49)
hTMLElement$.$prop$getAccessKeyLabel={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:HTMLElement,pa:1029,d:['ceylon.interop.browser.dom','HTMLElement','$at','accessKeyLabel']};}};
//AttributeDecl contentEditable at html.ceylon (18:4-18:49)
hTMLElement$.$prop$getContentEditable={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:HTMLElement,pa:1029,d:['ceylon.interop.browser.dom','HTMLElement','$at','contentEditable']};}};
//AttributeDecl isContentEditable at html.ceylon (19:4-19:43)
hTMLElement$.$prop$getIsContentEditable={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},$cont:HTMLElement,pa:5,d:['ceylon.interop.browser.dom','HTMLElement','$at','isContentEditable']};}};
//AttributeDecl spellcheck at html.ceylon (20:4-20:45)
hTMLElement$.$prop$getSpellcheck={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},$cont:HTMLElement,pa:1029,d:['ceylon.interop.browser.dom','HTMLElement','$at','spellcheck']};}};
})(HTMLElement.$$.prototype);
}
return HTMLElement;
}
ex$.$init$HTMLElement=$init$HTMLElement;
$init$HTMLElement();
//InterfaceDef HTMLHeadElement at html.ceylon (23:0-24:0)
function HTMLHeadElement(hTMLHeadElement$){
HTMLElement(hTMLHeadElement$);
}
HTMLHeadElement.dynmem$=[];HTMLHeadElement.$crtmm$=function(){return{mod:$CCMM$,sts:[{t:$init$HTMLElement()}],pa:1,d:['ceylon.interop.browser.dom','HTMLHeadElement']};};
ex$.HTMLHeadElement=HTMLHeadElement;
function $init$HTMLHeadElement(){
if(HTMLHeadElement.$$===undefined){
m$1.initTypeProtoI(HTMLHeadElement,'ceylon.interop.browser.dom::HTMLHeadElement',$init$HTMLElement());
}
return HTMLHeadElement;
}
ex$.$init$HTMLHeadElement=$init$HTMLHeadElement;
$init$HTMLHeadElement();
//InterfaceDef HTMLUnknownElement at html.ceylon (26:0-27:0)
function HTMLUnknownElement(hTMLUnknownElement$){
HTMLElement(hTMLUnknownElement$);
}
HTMLUnknownElement.dynmem$=[];HTMLUnknownElement.$crtmm$=function(){return{mod:$CCMM$,sts:[{t:$init$HTMLElement()}],pa:1,d:['ceylon.interop.browser.dom','HTMLUnknownElement']};};
ex$.HTMLUnknownElement=HTMLUnknownElement;
function $init$HTMLUnknownElement(){
if(HTMLUnknownElement.$$===undefined){
m$1.initTypeProtoI(HTMLUnknownElement,'ceylon.interop.browser.dom::HTMLUnknownElement',$init$HTMLElement());
}
return HTMLUnknownElement;
}
ex$.$init$HTMLUnknownElement=$init$HTMLUnknownElement;
$init$HTMLUnknownElement();

//InterfaceDef DOMTokenList at sets.ceylon (1:0-13:0)
function DOMTokenList(dOMTokenList$){
}
DOMTokenList.dynmem$=['length','item','contains','add','remove','toggle'];DOMTokenList.$crtmm$=function(){return{mod:$CCMM$,pa:1,d:['ceylon.interop.browser.dom','DOMTokenList']};};
ex$.DOMTokenList=DOMTokenList;
function $init$DOMTokenList(){
if(DOMTokenList.$$===undefined){
m$1.initTypeProtoI(DOMTokenList,'ceylon.interop.browser.dom::DOMTokenList');
(function(dOMTokenList$){
//AttributeDecl length at sets.ceylon (2:4-2:32)
dOMTokenList$.$prop$getLength={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:DOMTokenList,pa:5,d:['ceylon.interop.browser.dom','DOMTokenList','$at','length']};}};
dOMTokenList$.item={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},ps:[{nm:'index',mt:'prm',$t:{t:m$1.Integer}}],$cont:DOMTokenList,pa:5,d:['ceylon.interop.browser.dom','DOMTokenList','$m','item']};}};dOMTokenList$.contains={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'token',mt:'prm',$t:{t:m$1.$_String}}],$cont:DOMTokenList,pa:5,d:['ceylon.interop.browser.dom','DOMTokenList','$m','contains']};}};dOMTokenList$.add={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'tokens',mt:'prm',$t:{t:m$1.$_String}}],$cont:DOMTokenList,pa:5,d:['ceylon.interop.browser.dom','DOMTokenList','$m','add']};}};dOMTokenList$.remove={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'tokens',mt:'prm',$t:{t:m$1.$_String}}],$cont:DOMTokenList,pa:5,d:['ceylon.interop.browser.dom','DOMTokenList','$m','remove']};}};dOMTokenList$.toggle={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'token',mt:'prm',$t:{t:m$1.$_String}},{nm:'force',mt:'prm',$t:{t:m$1.$_Boolean}}],$cont:DOMTokenList,pa:5,d:['ceylon.interop.browser.dom','DOMTokenList','$m','toggle']};}};
})(DOMTokenList.$$.prototype);
}
return DOMTokenList;
}
ex$.$init$DOMTokenList=$init$DOMTokenList;
$init$DOMTokenList();
ex$.$pkg$ans$ceylon$interop$browser$dom=function(){return[m$1.shared()];};
ex$.$pkg$ans$ceylon$interop$browser=function(){return[m$1.suppressWarnings(m$1.$arr$sa$(["ceylonNamespace"],{t:m$1.$_String})),m$1.shared()];};
ex$.$pkg$ans$ceylon$interop$browser$internal=function(){return[m$1.suppressWarnings(m$1.$arr$sa$(["ceylonNamespace"],{t:m$1.$_String}))];};
});
}(typeof define==='function' && define.amd ? define : function (factory) {
if (typeof exports!=='undefined') { factory(require, exports, module);
} else { throw 'no module loader'; }
}));
