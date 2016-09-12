(function(define) { define(function(require, ex$, module) {
var $$req$ = require; require = (typeof $$ceylon$require == 'undefined') ? $$req$ : function() { return $$ceylon$require('ceylon/markdown/html/1.0.0/ceylon.markdown.html-1.0.0', $$req$, Array.prototype.slice.call(arguments)); }

var _CTM$;function $CCMM$(){if (_CTM$===undefined)_CTM$=require('ceylon/markdown/html/1.0.0/ceylon.markdown.html-1.0.0-model').$CCMM$;return _CTM$;}
ex$.$CCMM$=$CCMM$;
var m$hkj=require('ceylon/language/1.3.0/ceylon.language-1.3.0');
m$hkj.$addmod$(m$hkj,'ceylon.language/1.3.0');
m$hkj.$addmod$(ex$,'ceylon.markdown.html/1.0.0');
var m$hkm=require('ceylon/html/1.3.0/ceylon.html-1.3.0');
m$hkj.$addmod$(m$hkm,'ceylon.html/1.3.0');
var m$hkn=require('ceylon/markdown/core/1.0.0/ceylon.markdown.core-1.0.0');
m$hkj.$addmod$(m$hkn,'ceylon.markdown.core/1.0.0');
ex$.$mod$ans$=function(){return[m$hkj.doc$($CCMM$,'','$mod-anns'),m$hkj.by(m$hkj.$arr$sa$(["Rohit Mohan"],{t:m$hkj.$_String})),m$hkj.license("https://www.apache.org/licenses/LICENSE-2.0.html"),m$hkj.suppressWarnings(m$hkj.$arr$sa$(["ceylonNamespace"],{t:m$hkj.$_String}))];};
ex$.$mod$imps=function(){return{
'ceylon.markdown.core/1.0.0':function(){return[m$hkj.shared()];},
'ceylon.html/1.3.0':function(){return[m$hkj.shared()];}
};};

//TypeAliasDecl HtmlChildren at HtmlVisitor.ceylon (52:0-52:71)
function HtmlChildren(){var $i0j=m$hkj.mut$([m$hkj.mit$([{t:m$hkm.Node},{t:m$hkm.FlowCategory}]),m$hkm.CharacterData(),{t:m$hkj.$_String}]);$i0j.$crtmm$=function(){return{mod:$CCMM$,pa:1,d:['ceylon.markdown.html','HtmlChildren']};};return $i0j;}
ex$.HtmlChildren=HtmlChildren;
//ClassDef HtmlVisitor at HtmlVisitor.ceylon (54:0-205:0)
function HtmlVisitor(htmlVisitor$){
$init$HtmlVisitor();
if(htmlVisitor$===undefined)htmlVisitor$=new HtmlVisitor.$$;
htmlVisitor$.$$targs$$={Type$Visitor:m$hkj.mut$([{t:m$hkm.Node},{t:m$hkj.$_String},{t:m$hkj.Sequential,a:{Element$Sequential:m$hkj.mut$([m$hkj.mit$([{t:m$hkm.Node},{t:m$hkm.FlowCategory}]),{t:m$hkj.$_String},{t:m$hkm.Raw},{t:m$hkm.Comment},{t:m$hkm.ProcessingInstruction}])}}])};
m$hkn.Visitor({Type$Visitor:m$hkj.mut$([{t:m$hkm.Node},{t:m$hkj.$_String},{t:m$hkj.Sequential,a:{Element$Sequential:m$hkj.mut$([m$hkj.mit$([{t:m$hkm.Node},{t:m$hkm.FlowCategory}]),{t:m$hkj.$_String},{t:m$hkm.Raw},{t:m$hkm.Comment},{t:m$hkm.ProcessingInstruction}])}}])},htmlVisitor$);
return htmlVisitor$;
}
HtmlVisitor.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$hkj.Basic},ps:[],sts:[{t:m$hkn.Visitor,a:{Type$Visitor:{t:'u',l:[{t:m$hkm.Node},{t:m$hkj.$_String},{t:m$hkj.Sequential,a:{Element$Sequential:HtmlChildren()}}]}}}],pa:1,an:function(){return[m$hkj.doc$($CCMM$,'ceylon.markdown.html:HtmlVisitor')];},d:['ceylon.markdown.html','HtmlVisitor']};};
ex$.HtmlVisitor=HtmlVisitor;
function $init$HtmlVisitor(){
if(HtmlVisitor.$$===undefined){
m$hkj.initTypeProto(HtmlVisitor,'ceylon.markdown.html::HtmlVisitor',m$hkj.Basic,m$hkn.Visitor);
(function(htmlVisitor$){
//MethodDecl visitBlockQuote at HtmlVisitor.ceylon (59:1-62:2)
htmlVisitor$.visitBlockQuote=function($i0k){var htmlVisitor$=this;
return ($i0l=m$hkj.tpl$([],m$hkj.for$(function(){
//Comprehension at HtmlVisitor.ceylon (60:14-61:71)
var $i0o;
var $i0m=$i0k.children.iterator(),$i0n=m$hkj.finished();
var n$i0n=function(){
while(($i0n=$i0m.next())!==m$hkj.finished()){
if(m$hkj.is$(($i0o=$i0n.accept(htmlVisitor$,{Type$accept:m$hkj.mut$([{t:m$hkm.Node},{t:m$hkj.$_String},{t:m$hkj.Sequential,a:{Element$Sequential:m$hkj.mut$([m$hkj.mit$([{t:m$hkm.Node},{t:m$hkm.FlowCategory}]),{t:m$hkj.$_String},{t:m$hkm.Raw},{t:m$hkm.Comment},{t:m$hkm.ProcessingInstruction}])}}])})),m$hkj.mut$([m$hkm.CharacterData(),{t:m$hkm.FlowCategory},{t:m$hkj.$_String}]))){
return $i0n;
}
}
return m$hkj.finished();
}
return function(){
if(n$i0n()!==m$hkj.finished()){
var $i0p=$i0n,$i0q=$i0o;
return $i0q;
}
return m$hkj.finished();
}
},{Element$Iterable:m$hkj.mut$([{t:m$hkm.Raw},{t:m$hkm.Comment},{t:m$hkm.ProcessingInstruction},m$hkj.mit$([{t:m$hkm.Node},{t:m$hkm.FlowCategory}]),{t:m$hkj.$_String}]),Absent$Iterable:{t:m$hkj.Null}})),m$hkm.Blockquote(undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,$i0l));
var $i0l;
};
htmlVisitor$.visitBlockQuote.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$hkm.Node},ps:[{nm:'blockQuote',mt:'prm',$t:{t:m$hkn.BlockQuote}}],$cont:HtmlVisitor,pa:11,d:['ceylon.markdown.html','HtmlVisitor','$m','visitBlockQuote']};};
//MethodDecl visitCode at HtmlVisitor.ceylon (64:1-66:2)
htmlVisitor$.visitCode=function($i0r){var htmlVisitor$=this;
return ($i0s=$i0r.text.linesWithBreaks,m$hkm.Code(undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,$i0s));
var $i0s;
};
htmlVisitor$.visitCode.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$hkm.Node},ps:[{nm:'code',mt:'prm',$t:{t:m$hkn.Code}}],$cont:HtmlVisitor,pa:11,d:['ceylon.markdown.html','HtmlVisitor','$m','visitCode']};};
//MethodDecl visitDocument at HtmlVisitor.ceylon (68:1-70:73)
htmlVisitor$.visitDocument=function($i0t){var htmlVisitor$=this;
return m$hkj.tpl$([],m$hkj.for$(function(){
//Comprehension at HtmlVisitor.ceylon (69:3-70:71)
var $i0w;
var $i0u=$i0t.children.iterator(),$i0v=m$hkj.finished();
var n$i0v=function(){
while(($i0v=$i0u.next())!==m$hkj.finished()){
if(m$hkj.is$(($i0w=$i0v.accept(htmlVisitor$,{Type$accept:m$hkj.mut$([{t:m$hkm.Node},{t:m$hkj.$_String},{t:m$hkj.Sequential,a:{Element$Sequential:m$hkj.mut$([m$hkj.mit$([{t:m$hkm.Node},{t:m$hkm.FlowCategory}]),{t:m$hkj.$_String},{t:m$hkm.Raw},{t:m$hkm.Comment},{t:m$hkm.ProcessingInstruction}])}}])})),m$hkj.mut$([m$hkm.CharacterData(),{t:m$hkm.FlowCategory},{t:m$hkj.$_String}]))){
return $i0v;
}
}
return m$hkj.finished();
}
return function(){
if(n$i0v()!==m$hkj.finished()){
var $i0x=$i0v,$i0y=$i0w;
return $i0y;
}
return m$hkj.finished();
}
},{Element$Iterable:m$hkj.mut$([{t:m$hkm.Raw},{t:m$hkm.Comment},{t:m$hkm.ProcessingInstruction},m$hkj.mit$([{t:m$hkm.Node},{t:m$hkm.FlowCategory}]),{t:m$hkj.$_String}]),Absent$Iterable:{t:m$hkj.Null}}));
};
htmlVisitor$.visitDocument.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$hkj.Sequential,a:{Element$Sequential:HtmlChildren()}},ps:[{nm:'document',mt:'prm',$t:{t:m$hkn.Document}}],$cont:HtmlVisitor,pa:11,d:['ceylon.markdown.html','HtmlVisitor','$m','visitDocument']};};
//MethodDecl visitEmphasis at HtmlVisitor.ceylon (72:1-75:2)
htmlVisitor$.visitEmphasis=function($i0z){var htmlVisitor$=this;
return ($i10=m$hkj.tpl$([],m$hkj.for$(function(){
//Comprehension at HtmlVisitor.ceylon (73:14-74:75)
var $i13;
var $i11=$i0z.children.iterator(),$i12=m$hkj.finished();
var n$i12=function(){
while(($i12=$i11.next())!==m$hkj.finished()){
if(m$hkj.is$(($i13=$i12.accept(htmlVisitor$,{Type$accept:m$hkj.mut$([{t:m$hkm.Node},{t:m$hkj.$_String},{t:m$hkj.Sequential,a:{Element$Sequential:m$hkj.mut$([m$hkj.mit$([{t:m$hkm.Node},{t:m$hkm.FlowCategory}]),{t:m$hkj.$_String},{t:m$hkm.Raw},{t:m$hkm.Comment},{t:m$hkm.ProcessingInstruction}])}}])})),m$hkj.mut$([{t:m$hkm.PhrasingCategory},m$hkm.CharacterData(),{t:m$hkj.$_String}]))){
return $i12;
}
}
return m$hkj.finished();
}
return function(){
if(n$i12()!==m$hkj.finished()){
var $i14=$i12,$i15=$i13;
return $i15;
}
return m$hkj.finished();
}
},{Element$Iterable:m$hkj.mut$([m$hkj.mit$([{t:m$hkm.Node},{t:m$hkm.PhrasingCategory}]),{t:m$hkm.Raw},{t:m$hkm.Comment},{t:m$hkm.ProcessingInstruction},{t:m$hkj.$_String}]),Absent$Iterable:{t:m$hkj.Null}})),m$hkm.Em(undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,$i10));
var $i10;
};
htmlVisitor$.visitEmphasis.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$hkm.Node},ps:[{nm:'emphasis',mt:'prm',$t:{t:m$hkn.Emphasis}}],$cont:HtmlVisitor,pa:11,d:['ceylon.markdown.html','HtmlVisitor','$m','visitEmphasis']};};
//MethodDecl visitFencedCode at HtmlVisitor.ceylon (77:1-81:2)
htmlVisitor$.visitFencedCode=function($i16){var htmlVisitor$=this;
return ($i17=m$hkj.$arr$sa$([($i18=$i16.text.linesWithBreaks,m$hkm.Code(undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,$i18))],{t:m$hkm.Code},1),m$hkm.Pre(undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,$i17));
var $i17,$i18;
};
htmlVisitor$.visitFencedCode.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$hkm.Node},ps:[{nm:'fencedCode',mt:'prm',$t:{t:m$hkn.FencedCode}}],$cont:HtmlVisitor,pa:11,d:['ceylon.markdown.html','HtmlVisitor','$m','visitFencedCode']};};
//MethodDecl visitHardBreak at HtmlVisitor.ceylon (83:1-83:75)
htmlVisitor$.visitHardBreak=function($i19){return m$hkm.Br();
};
htmlVisitor$.visitHardBreak.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$hkm.Node},ps:[{nm:'hardBreak',mt:'prm',$t:{t:m$hkn.HardBreak}}],$cont:HtmlVisitor,pa:11,d:['ceylon.markdown.html','HtmlVisitor','$m','visitHardBreak']};};
//MethodDef visitHeading at HtmlVisitor.ceylon (85:1-111:1)
htmlVisitor$.visitHeading=function($i1a){
var htmlVisitor$=this;
var $i1b=m$hkj.tpl$([],m$hkj.for$(function(){
//Comprehension at HtmlVisitor.ceylon (86:20-87:75)
var $i1e;
var $i1c=$i1a.children.iterator(),$i1d=m$hkj.finished();
var n$i1d=function(){
while(($i1d=$i1c.next())!==m$hkj.finished()){
if(m$hkj.is$(($i1e=$i1d.accept(htmlVisitor$,{Type$accept:m$hkj.mut$([{t:m$hkm.Node},{t:m$hkj.$_String},{t:m$hkj.Sequential,a:{Element$Sequential:m$hkj.mut$([m$hkj.mit$([{t:m$hkm.Node},{t:m$hkm.FlowCategory}]),{t:m$hkj.$_String},{t:m$hkm.Raw},{t:m$hkm.Comment},{t:m$hkm.ProcessingInstruction}])}}])})),m$hkj.mut$([{t:m$hkm.PhrasingCategory},m$hkm.CharacterData(),{t:m$hkj.$_String}]))){
return $i1d;
}
}
return m$hkj.finished();
}
return function(){
if(n$i1d()!==m$hkj.finished()){
var $i1f=$i1d,$i1g=$i1e;
return $i1g;
}
return m$hkj.finished();
}
},{Element$Iterable:m$hkj.mut$([m$hkj.mit$([{t:m$hkm.Node},{t:m$hkm.PhrasingCategory}]),{t:m$hkm.Raw},{t:m$hkm.Comment},{t:m$hkm.ProcessingInstruction},{t:m$hkj.$_String}]),Absent$Iterable:{t:m$hkj.Null}}));
//Switch statement at HtmlVisitor.ceylon (89:2-110:2)
var $i1h=$i1a.level;
if((1).equals($i1h)) {
return ($i1i=$i1b,m$hkm.H1(undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,$i1i));
var $i1i;
}
else if((2).equals($i1h)) {
return ($i1j=$i1b,m$hkm.H2(undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,$i1j));
var $i1j;
}
else if((3).equals($i1h)) {
return ($i1k=$i1b,m$hkm.H3(undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,$i1k));
var $i1k;
}
else if((4).equals($i1h)) {
return ($i1l=$i1b,m$hkm.H4(undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,$i1l));
var $i1l;
}
else if((5).equals($i1h)) {
return ($i1m=$i1b,m$hkm.H5(undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,$i1m));
var $i1m;
}
else if((6).equals($i1h)) {
return ($i1n=$i1b,m$hkm.H6(undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,$i1n));
var $i1n;
}
else{
return ($i1o=$i1b,m$hkm.H1(undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,$i1o));
var $i1o;
}//End switch statement at HtmlVisitor.ceylon (89:2-110:2)
};htmlVisitor$.visitHeading.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$hkm.Node},ps:[{nm:'heading',mt:'prm',$t:{t:m$hkn.Heading}}],$cont:HtmlVisitor,pa:11,d:['ceylon.markdown.html','HtmlVisitor','$m','visitHeading']};};
//MethodDecl visitHtmlBlock at HtmlVisitor.ceylon (113:1-113:90)
htmlVisitor$.visitHtmlBlock=function($i1p){var htmlVisitor$=this;
return m$hkm.Raw($i1p.text);
};
htmlVisitor$.visitHtmlBlock.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$hkm.Node},ps:[{nm:'htmlBlock',mt:'prm',$t:{t:m$hkn.HtmlBlock}}],$cont:HtmlVisitor,pa:11,d:['ceylon.markdown.html','HtmlVisitor','$m','visitHtmlBlock']};};
//MethodDecl visitHtmlInline at HtmlVisitor.ceylon (115:1-115:94)
htmlVisitor$.visitHtmlInline=function($i1q){var htmlVisitor$=this;
return m$hkm.Raw($i1q.text);
};
htmlVisitor$.visitHtmlInline.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$hkm.Node},ps:[{nm:'htmlInline',mt:'prm',$t:{t:m$hkn.HtmlInline}}],$cont:HtmlVisitor,pa:11,d:['ceylon.markdown.html','HtmlVisitor','$m','visitHtmlInline']};};
//MethodDef visitImage at HtmlVisitor.ceylon (117:1-128:1)
htmlVisitor$.visitImage=function($i1r){
var htmlVisitor$=this;
var $i1s=htmlVisitor$.$c4xaj4$i1t(($i1u=m$hkj.tpl$([],m$hkj.for$(function(){
//Comprehension at HtmlVisitor.ceylon (119:16-120:77)
var $i1x;
var $i1v=$i1r.children.iterator(),$i1w=m$hkj.finished();
var n$i1w=function(){
while(($i1w=$i1v.next())!==m$hkj.finished()){
if(m$hkj.is$(($i1x=$i1w.accept(htmlVisitor$,{Type$accept:m$hkj.mut$([{t:m$hkm.Node},{t:m$hkj.$_String},{t:m$hkj.Sequential,a:{Element$Sequential:m$hkj.mut$([m$hkj.mit$([{t:m$hkm.Node},{t:m$hkm.FlowCategory}]),{t:m$hkj.$_String},{t:m$hkm.Raw},{t:m$hkm.Comment},{t:m$hkm.ProcessingInstruction}])}}])})),m$hkj.mut$([{t:m$hkm.PhrasingCategory},m$hkm.CharacterData(),{t:m$hkj.$_String}]))){
return $i1w;
}
}
return m$hkj.finished();
}
return function(){
if(n$i1w()!==m$hkj.finished()){
var $i1y=$i1w,$i1z=$i1x;
return $i1z;
}
return m$hkj.finished();
}
},{Element$Iterable:m$hkj.mut$([m$hkj.mit$([{t:m$hkm.Node},{t:m$hkm.PhrasingCategory}]),{t:m$hkm.Raw},{t:m$hkm.Comment},{t:m$hkm.ProcessingInstruction},{t:m$hkj.$_String}]),Absent$Iterable:{t:m$hkj.Null}})),m$hkm.P(undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,$i1u)));
var $i1u;
return ($i20=$i1r.destination,$i21=(!m$hkj.$eq$($i1s,"")?$i1s:null),$i22=(m$hkj.$eq$($i1r.title,"")?null:$i1r.title),m$hkm.Img(undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,$i22,undefined,$i21,undefined,undefined,undefined,undefined,$i20,undefined,undefined));
var $i20,$i21,$i22;
};htmlVisitor$.visitImage.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$hkm.Node},ps:[{nm:'image',mt:'prm',$t:{t:m$hkn.Image}}],$cont:HtmlVisitor,pa:11,d:['ceylon.markdown.html','HtmlVisitor','$m','visitImage']};};
//MethodDef getText at HtmlVisitor.ceylon (130:1-141:1)
htmlVisitor$.$c4xaj4$i1t=function($i23){
var htmlVisitor$=this;
var $i24=m$hkj.StringBuilder();
//'for' statement at HtmlVisitor.ceylon (132:2-138:2)
var $i26;for(var $i25=$i23.children.iterator();($i26=$i25.next())!==m$hkj.finished();){
var $i27;
if(m$hkj.is$(($i27=$i26),{t:m$hkj.$_String})){
$i24.append($i27);
}
else{
var $i28;
if(m$hkj.is$(($i28=$i27),{t:m$hkm.Node})){
$i24.append(htmlVisitor$.$c4xaj4$i1t($i28));
}
}
}
return $i24.string;
};htmlVisitor$.$c4xaj4$i1t.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$hkj.$_String},ps:[{nm:'node',mt:'prm',$t:{t:m$hkm.Node}}],$cont:HtmlVisitor,d:['ceylon.markdown.html','HtmlVisitor','$m','getText$vsk0ho']};};
//MethodDecl visitIndentedCode at HtmlVisitor.ceylon (143:1-147:2)
htmlVisitor$.visitIndentedCode=function($i29){var htmlVisitor$=this;
return ($i2a=m$hkj.$arr$sa$([($i2b=$i29.text.linesWithBreaks,m$hkm.Code(undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,$i2b))],{t:m$hkm.Code},1),m$hkm.Pre(undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,$i2a));
var $i2a,$i2b;
};
htmlVisitor$.visitIndentedCode.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$hkm.Node},ps:[{nm:'indentedCode',mt:'prm',$t:{t:m$hkn.IndentedCode}}],$cont:HtmlVisitor,pa:11,d:['ceylon.markdown.html','HtmlVisitor','$m','visitIndentedCode']};};
//MethodDecl visitLink at HtmlVisitor.ceylon (149:1-154:2)
htmlVisitor$.visitLink=function($i2c){var htmlVisitor$=this;
return ($i2d=$i2c.destination,$i2e=(m$hkj.$eq$($i2c.title,"")?null:$i2c.title),$i2f=m$hkj.tpl$([],m$hkj.for$(function(){
//Comprehension at HtmlVisitor.ceylon (152:14-153:57)
var $i2i;
var $i2g=$i2c.children.iterator(),$i2h=m$hkj.finished();
var n$i2h=function(){
while(($i2h=$i2g.next())!==m$hkj.finished()){
if(m$hkj.is$(($i2i=$i2h.accept(htmlVisitor$,{Type$accept:m$hkj.mut$([{t:m$hkm.Node},{t:m$hkj.$_String},{t:m$hkj.Sequential,a:{Element$Sequential:m$hkj.mut$([m$hkj.mit$([{t:m$hkm.Node},{t:m$hkm.FlowCategory}]),{t:m$hkj.$_String},{t:m$hkm.Raw},{t:m$hkm.Comment},{t:m$hkm.ProcessingInstruction}])}}])})),m$hkj.mut$([{t:m$hkm.FlowCategory},{t:m$hkj.$_String}]))){
return $i2h;
}
}
return m$hkj.finished();
}
return function(){
if(n$i2h()!==m$hkj.finished()){
var $i2j=$i2h,$i2k=$i2i;
return $i2k;
}
return m$hkj.finished();
}
},{Element$Iterable:m$hkj.mut$([m$hkj.mit$([{t:m$hkm.Node},{t:m$hkm.FlowCategory}]),{t:m$hkj.$_String}]),Absent$Iterable:{t:m$hkj.Null}})),m$hkm.A(undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,$i2e,undefined,undefined,$i2d,undefined,undefined,undefined,undefined,undefined,$i2f));
var $i2d,$i2e,$i2f;
};
htmlVisitor$.visitLink.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$hkm.Node},ps:[{nm:'link',mt:'prm',$t:{t:m$hkn.Link}}],$cont:HtmlVisitor,pa:11,d:['ceylon.markdown.html','HtmlVisitor','$m','visitLink']};};
//MethodDef visitListItem at HtmlVisitor.ceylon (156:1-178:1)
htmlVisitor$.visitListItem=function($i2l){
var htmlVisitor$=this;
var $i2m;
if(m$hkj.is$(($i2m=$i2l.parent),{t:m$hkn.List})&&$i2m.tight){
var $i2n=m$hkj.empty();
//'for' statement at HtmlVisitor.ceylon (159:3-167:3)
var $i2p;for(var $i2o=$i2l.children.iterator();($i2p=$i2o.next())!==m$hkj.finished();){
var $i2q=$i2p.accept(htmlVisitor$,{Type$accept:m$hkj.mut$([{t:m$hkm.Node},{t:m$hkj.$_String},{t:m$hkj.Sequential,a:{Element$Sequential:m$hkj.mut$([m$hkj.mit$([{t:m$hkm.Node},{t:m$hkm.FlowCategory}]),{t:m$hkj.$_String},{t:m$hkm.Raw},{t:m$hkm.Comment},{t:m$hkm.ProcessingInstruction}])}}])});
var $i2r;
if(m$hkj.is$(($i2r=$i2q),{t:m$hkm.P})){
$i2n=$i2n.append(m$hkj.tpl$([],m$hkj.for$(function(){
//Comprehension at HtmlVisitor.ceylon (163:7-163:72)
var $i2u;
var $i2s=$i2r.children.iterator(),$i2t=m$hkj.finished();
var n$i2t=function(){
while(($i2t=$i2s.next())!==m$hkj.finished()){
if(m$hkj.is$(($i2u=$i2t),m$hkj.mut$([{t:m$hkm.Em},{t:m$hkm.Strong},{t:m$hkm.A},{t:m$hkm.Code},{t:m$hkm.Img},{t:m$hkj.$_String}]))){
return $i2t;
}
}
return m$hkj.finished();
}
return function(){
if(n$i2t()!==m$hkj.finished()){
var $i2v=$i2t,$i2w=$i2u;
return $i2w;
}
return m$hkj.finished();
}
},{Element$Iterable:m$hkj.mut$([{t:m$hkm.Em},{t:m$hkm.Strong},{t:m$hkm.A},{t:m$hkm.Code},{t:m$hkm.Img},{t:m$hkj.$_String}]),Absent$Iterable:{t:m$hkj.Null}})),{Other$append:m$hkj.mut$([{t:m$hkm.Em},{t:m$hkm.Strong},{t:m$hkm.A},{t:m$hkm.Code},{t:m$hkm.Img},{t:m$hkj.$_String}])});
}
else{
var $i2x;
if(m$hkj.is$(($i2x=$i2r),m$hkj.mut$([{t:m$hkm.FlowCategory},{t:m$hkj.$_String}]))){
$i2n=$i2n.append(m$hkj.tpl$([$i2x]),{Other$append:m$hkj.mut$([m$hkj.mit$([{t:m$hkm.Node},{t:m$hkm.FlowCategory}]),{t:m$hkj.$_String}])});
}
}
}
return ($i2y=$i2n,m$hkm.Li(undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,$i2y));
var $i2y;
}
return ($i2z=m$hkj.tpl$([],m$hkj.for$(function(){
//Comprehension at HtmlVisitor.ceylon (175:15-176:72)
var $i32;
var $i30=$i2l.children.iterator(),$i31=m$hkj.finished();
var n$i31=function(){
while(($i31=$i30.next())!==m$hkj.finished()){
if(m$hkj.is$(($i32=$i31.accept(htmlVisitor$,{Type$accept:m$hkj.mut$([{t:m$hkm.Node},{t:m$hkj.$_String},{t:m$hkj.Sequential,a:{Element$Sequential:m$hkj.mut$([m$hkj.mit$([{t:m$hkm.Node},{t:m$hkm.FlowCategory}]),{t:m$hkj.$_String},{t:m$hkm.Raw},{t:m$hkm.Comment},{t:m$hkm.ProcessingInstruction}])}}])})),m$hkj.mut$([m$hkm.CharacterData(),{t:m$hkm.FlowCategory},{t:m$hkj.$_String}]))){
return $i31;
}
}
return m$hkj.finished();
}
return function(){
if(n$i31()!==m$hkj.finished()){
var $i33=$i31,$i34=$i32;
return $i34;
}
return m$hkj.finished();
}
},{Element$Iterable:m$hkj.mut$([{t:m$hkm.Raw},{t:m$hkm.Comment},{t:m$hkm.ProcessingInstruction},m$hkj.mit$([{t:m$hkm.Node},{t:m$hkm.FlowCategory}]),{t:m$hkj.$_String}]),Absent$Iterable:{t:m$hkj.Null}})),m$hkm.Li(undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,$i2z));
var $i2z;
};htmlVisitor$.visitListItem.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$hkm.Node},ps:[{nm:'listItem',mt:'prm',$t:{t:m$hkn.ListItem}}],$cont:HtmlVisitor,pa:11,d:['ceylon.markdown.html','HtmlVisitor','$m','visitListItem']};};
//MethodDecl visitOrderedList at HtmlVisitor.ceylon (180:1-183:2)
htmlVisitor$.visitOrderedList=function($i35){var htmlVisitor$=this;
return ($i36=m$hkj.tpl$([],m$hkj.for$(function(){
//Comprehension at HtmlVisitor.ceylon (181:14-182:61)
var $i39;
var $i37=$i35.children.iterator(),$i38=m$hkj.finished();
var n$i38=function(){
while(($i38=$i37.next())!==m$hkj.finished()){
if(m$hkj.is$(($i39=$i38.accept(htmlVisitor$,{Type$accept:m$hkj.mut$([{t:m$hkm.Node},{t:m$hkj.$_String},{t:m$hkj.Sequential,a:{Element$Sequential:m$hkj.mut$([m$hkj.mit$([{t:m$hkm.Node},{t:m$hkm.FlowCategory}]),{t:m$hkj.$_String},{t:m$hkm.Raw},{t:m$hkm.Comment},{t:m$hkm.ProcessingInstruction}])}}])})),m$hkj.mut$([m$hkm.CharacterData(),{t:m$hkm.Li},{t:m$hkj.$_String}]))){
return $i38;
}
}
return m$hkj.finished();
}
return function(){
if(n$i38()!==m$hkj.finished()){
var $i3a=$i38,$i3b=$i39;
return $i3b;
}
return m$hkj.finished();
}
},{Element$Iterable:m$hkj.mut$([{t:m$hkj.$_String},{t:m$hkm.Raw},{t:m$hkm.Comment},{t:m$hkm.ProcessingInstruction},{t:m$hkm.Li}]),Absent$Iterable:{t:m$hkj.Null}})),m$hkm.Ol(undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,$i36));
var $i36;
};
htmlVisitor$.visitOrderedList.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$hkm.Node},ps:[{nm:'orderedList',mt:'prm',$t:{t:m$hkn.OrderedList}}],$cont:HtmlVisitor,pa:11,d:['ceylon.markdown.html','HtmlVisitor','$m','visitOrderedList']};};
//MethodDecl visitParagraph at HtmlVisitor.ceylon (185:1-188:2)
htmlVisitor$.visitParagraph=function($i3c){var htmlVisitor$=this;
return ($i3d=m$hkj.tpl$([],m$hkj.for$(function(){
//Comprehension at HtmlVisitor.ceylon (186:14-187:75)
var $i3g;
var $i3e=$i3c.children.iterator(),$i3f=m$hkj.finished();
var n$i3f=function(){
while(($i3f=$i3e.next())!==m$hkj.finished()){
if(m$hkj.is$(($i3g=$i3f.accept(htmlVisitor$,{Type$accept:m$hkj.mut$([{t:m$hkm.Node},{t:m$hkj.$_String},{t:m$hkj.Sequential,a:{Element$Sequential:m$hkj.mut$([m$hkj.mit$([{t:m$hkm.Node},{t:m$hkm.FlowCategory}]),{t:m$hkj.$_String},{t:m$hkm.Raw},{t:m$hkm.Comment},{t:m$hkm.ProcessingInstruction}])}}])})),m$hkj.mut$([{t:m$hkm.PhrasingCategory},m$hkm.CharacterData(),{t:m$hkj.$_String}]))){
return $i3f;
}
}
return m$hkj.finished();
}
return function(){
if(n$i3f()!==m$hkj.finished()){
var $i3h=$i3f,$i3i=$i3g;
return $i3i;
}
return m$hkj.finished();
}
},{Element$Iterable:m$hkj.mut$([m$hkj.mit$([{t:m$hkm.Node},{t:m$hkm.PhrasingCategory}]),{t:m$hkm.Raw},{t:m$hkm.Comment},{t:m$hkm.ProcessingInstruction},{t:m$hkj.$_String}]),Absent$Iterable:{t:m$hkj.Null}})),m$hkm.P(undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,$i3d));
var $i3d;
};
htmlVisitor$.visitParagraph.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$hkm.Node},ps:[{nm:'paragraph',mt:'prm',$t:{t:m$hkn.Paragraph}}],$cont:HtmlVisitor,pa:11,d:['ceylon.markdown.html','HtmlVisitor','$m','visitParagraph']};};
//MethodDecl visitSoftBreak at HtmlVisitor.ceylon (190:1-190:73)
htmlVisitor$.visitSoftBreak=function($i3j){return "\n";
};
htmlVisitor$.visitSoftBreak.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$hkj.$_String},ps:[{nm:'softBreak',mt:'prm',$t:{t:m$hkn.SoftBreak}}],$cont:HtmlVisitor,pa:11,d:['ceylon.markdown.html','HtmlVisitor','$m','visitSoftBreak']};};
//MethodDecl visitStrongEmphasis at HtmlVisitor.ceylon (192:1-195:2)
htmlVisitor$.visitStrongEmphasis=function($i3k){var htmlVisitor$=this;
return ($i3l=m$hkj.tpl$([],m$hkj.for$(function(){
//Comprehension at HtmlVisitor.ceylon (193:14-194:75)
var $i3o;
var $i3m=$i3k.children.iterator(),$i3n=m$hkj.finished();
var n$i3n=function(){
while(($i3n=$i3m.next())!==m$hkj.finished()){
if(m$hkj.is$(($i3o=$i3n.accept(htmlVisitor$,{Type$accept:m$hkj.mut$([{t:m$hkm.Node},{t:m$hkj.$_String},{t:m$hkj.Sequential,a:{Element$Sequential:m$hkj.mut$([m$hkj.mit$([{t:m$hkm.Node},{t:m$hkm.FlowCategory}]),{t:m$hkj.$_String},{t:m$hkm.Raw},{t:m$hkm.Comment},{t:m$hkm.ProcessingInstruction}])}}])})),m$hkj.mut$([{t:m$hkm.PhrasingCategory},m$hkm.CharacterData(),{t:m$hkj.$_String}]))){
return $i3n;
}
}
return m$hkj.finished();
}
return function(){
if(n$i3n()!==m$hkj.finished()){
var $i3p=$i3n,$i3q=$i3o;
return $i3q;
}
return m$hkj.finished();
}
},{Element$Iterable:m$hkj.mut$([m$hkj.mit$([{t:m$hkm.Node},{t:m$hkm.PhrasingCategory}]),{t:m$hkm.Raw},{t:m$hkm.Comment},{t:m$hkm.ProcessingInstruction},{t:m$hkj.$_String}]),Absent$Iterable:{t:m$hkj.Null}})),m$hkm.Strong(undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,$i3l));
var $i3l;
};
htmlVisitor$.visitStrongEmphasis.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$hkm.Node},ps:[{nm:'strongEmphasis',mt:'prm',$t:{t:m$hkn.StrongEmphasis}}],$cont:HtmlVisitor,pa:11,d:['ceylon.markdown.html','HtmlVisitor','$m','visitStrongEmphasis']};};
//MethodDecl visitText at HtmlVisitor.ceylon (197:1-197:63)
htmlVisitor$.visitText=function($i3r){var htmlVisitor$=this;
return $i3r.text;
};
htmlVisitor$.visitText.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$hkj.$_String},ps:[{nm:'text',mt:'prm',$t:{t:m$hkn.Text}}],$cont:HtmlVisitor,pa:11,d:['ceylon.markdown.html','HtmlVisitor','$m','visitText']};};
//MethodDecl visitThematicBreak at HtmlVisitor.ceylon (199:1-199:87)
htmlVisitor$.visitThematicBreak=function($i3s){return m$hkm.Hr();
};
htmlVisitor$.visitThematicBreak.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$hkm.Node},ps:[{nm:'thematicBreak',mt:'prm',$t:{t:m$hkn.ThematicBreak}}],$cont:HtmlVisitor,pa:11,d:['ceylon.markdown.html','HtmlVisitor','$m','visitThematicBreak']};};
//MethodDecl visitUnorderedList at HtmlVisitor.ceylon (201:1-204:2)
htmlVisitor$.visitUnorderedList=function($i3t){var htmlVisitor$=this;
return ($i3u=m$hkj.tpl$([],m$hkj.for$(function(){
//Comprehension at HtmlVisitor.ceylon (202:14-203:61)
var $i3x;
var $i3v=$i3t.children.iterator(),$i3w=m$hkj.finished();
var n$i3w=function(){
while(($i3w=$i3v.next())!==m$hkj.finished()){
if(m$hkj.is$(($i3x=$i3w.accept(htmlVisitor$,{Type$accept:m$hkj.mut$([{t:m$hkm.Node},{t:m$hkj.$_String},{t:m$hkj.Sequential,a:{Element$Sequential:m$hkj.mut$([m$hkj.mit$([{t:m$hkm.Node},{t:m$hkm.FlowCategory}]),{t:m$hkj.$_String},{t:m$hkm.Raw},{t:m$hkm.Comment},{t:m$hkm.ProcessingInstruction}])}}])})),m$hkj.mut$([m$hkm.CharacterData(),{t:m$hkm.Li},{t:m$hkj.$_String}]))){
return $i3w;
}
}
return m$hkj.finished();
}
return function(){
if(n$i3w()!==m$hkj.finished()){
var $i3y=$i3w,$i3z=$i3x;
return $i3z;
}
return m$hkj.finished();
}
},{Element$Iterable:m$hkj.mut$([{t:m$hkj.$_String},{t:m$hkm.Raw},{t:m$hkm.Comment},{t:m$hkm.ProcessingInstruction},{t:m$hkm.Li}]),Absent$Iterable:{t:m$hkj.Null}})),m$hkm.Ul(undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,$i3u));
var $i3u;
};
htmlVisitor$.visitUnorderedList.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$hkm.Node},ps:[{nm:'unorderedList',mt:'prm',$t:{t:m$hkn.UnorderedList}}],$cont:HtmlVisitor,pa:11,d:['ceylon.markdown.html','HtmlVisitor','$m','visitUnorderedList']};};
})(HtmlVisitor.$$.prototype);
}
return HtmlVisitor;
}
ex$.$init$HtmlVisitor=$init$HtmlVisitor;
$init$HtmlVisitor();

//MethodDecl renderCompleteHtml at renderHtml.ceylon (11:0-22:1)
function renderCompleteHtml($i4e){return ($i4f=m$hkj.$arr$sa$([($i4g=m$hkj.$arr$sa$([($i4h="utf-8",m$hkm.Meta(undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,$i4h,undefined))],{t:m$hkm.Meta},1),m$hkm.Head(undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,$i4g)),($i4i=HtmlVisitor().visitDocument($i4e),m$hkm.Body(undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,$i4i))],m$hkj.mut$([{t:m$hkm.Head},{t:m$hkm.Body}]),1),m$hkm.Html(undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,$i4f));
var $i4f,$i4g,$i4h,$i4i;
};
renderCompleteHtml.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$hkm.Html},ps:[{nm:'document',mt:'prm',$t:{t:m$hkn.Document}}],pa:1,an:function(){return[m$hkj.doc$($CCMM$,'ceylon.markdown.html:renderCompleteHtml')];},d:['ceylon.markdown.html','renderCompleteHtml']};};
ex$.renderCompleteHtml=renderCompleteHtml;
//MethodDecl renderPartialHtml at renderHtml.ceylon (24:0-28:42)
function renderPartialHtml($i4j){return HtmlVisitor().visitDocument($i4j);
};
renderPartialHtml.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$hkj.Sequential,a:{Element$Sequential:HtmlChildren()}},ps:[{nm:'document',mt:'prm',$t:{t:m$hkn.Document}}],pa:1,an:function(){return[m$hkj.doc$($CCMM$,'ceylon.markdown.html:renderPartialHtml')];},d:['ceylon.markdown.html','renderPartialHtml']};};
ex$.renderPartialHtml=renderPartialHtml;
ex$.$pkg$ans$ceylon$markdown$html=function(){return[m$hkj.suppressWarnings(m$hkj.$arr$sa$(["ceylonNamespace"],{t:m$hkj.$_String})),m$hkj.shared()];};
});
}(typeof define==='function' && define.amd ? define : function (factory) {
if (typeof exports!=='undefined') { factory(require, exports, module);
} else { throw 'no module loader'; }
}));
