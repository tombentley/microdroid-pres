(function(define) { define(function(require, ex$, module) {
var $$req$ = require; require = (typeof $$ceylon$require == 'undefined') ? $$req$ : function() { return $$ceylon$require('ceylon/markdown/html/1.0.0/ceylon.markdown.html-1.0.0', $$req$, Array.prototype.slice.call(arguments)); }

var _CTM$;function $CCMM$(){if (_CTM$===undefined)_CTM$=require('ceylon/markdown/html/1.0.0/ceylon.markdown.html-1.0.0-model').$CCMM$;return _CTM$;}
ex$.$CCMM$=$CCMM$;
var m$t3v=require('ceylon/language/1.2.3/ceylon.language-1.2.3');
m$t3v.$addmod$(m$t3v,'ceylon.language/1.2.3');
m$t3v.$addmod$(ex$,'ceylon.markdown.html/1.0.0');
var m$t41=require('ceylon/html/1.2.3/ceylon.html-1.2.3');
m$t3v.$addmod$(m$t41,'ceylon.html/1.2.3');
var m$t3x=require('ceylon/markdown/core/1.0.0/ceylon.markdown.core-1.0.0');
m$t3v.$addmod$(m$t3x,'ceylon.markdown.core/1.0.0');
ex$.$mod$ans$=function(){return[m$t3v.doc$($CCMM$,'','$mod-anns'),m$t3v.by(m$t3v.$arr$sa$(["Rohit Mohan"],{t:m$t3v.$_String})),m$t3v.license("https://www.apache.org/licenses/LICENSE-2.0.html"),m$t3v.suppressWarnings(m$t3v.$arr$sa$(["ceylonNamespace"],{t:m$t3v.$_String}))];};
ex$.$mod$imps=function(){return{
'ceylon.markdown.core/1.0.0':function(){return[m$t3v.shared()];},
'ceylon.html/1.2.3':function(){return[m$t3v.shared()];}
};};

//TypeAliasDecl HtmlChildren at HtmlVisitor.ceylon (52:0-52:71)
function HtmlChildren(){var $tju=m$t3v.mut$([m$t3v.mit$([{t:m$t41.Node},{t:m$t41.FlowCategory}]),m$t41.CharacterData(),{t:m$t3v.$_String}]);$tju.$crtmm$=function(){return{mod:$CCMM$,pa:1,d:['ceylon.markdown.html','HtmlChildren']};};return $tju;}
ex$.HtmlChildren=HtmlChildren;
//ClassDef HtmlVisitor at HtmlVisitor.ceylon (54:0-205:0)
function HtmlVisitor(htmlVisitor$){
$init$HtmlVisitor();
if(htmlVisitor$===undefined)htmlVisitor$=new HtmlVisitor.$$;
htmlVisitor$.$$targs$$={Type$Visitor:m$t3v.mut$([{t:m$t41.Node},{t:m$t3v.$_String},{t:m$t3v.Sequential,a:{Element$Sequential:m$t3v.mut$([m$t3v.mit$([{t:m$t41.Node},{t:m$t41.FlowCategory}]),{t:m$t3v.$_String},{t:m$t41.Raw},{t:m$t41.Comment},{t:m$t41.ProcessingInstruction}])}}])};
m$t3x.Visitor({Type$Visitor:m$t3v.mut$([{t:m$t41.Node},{t:m$t3v.$_String},{t:m$t3v.Sequential,a:{Element$Sequential:m$t3v.mut$([m$t3v.mit$([{t:m$t41.Node},{t:m$t41.FlowCategory}]),{t:m$t3v.$_String},{t:m$t41.Raw},{t:m$t41.Comment},{t:m$t41.ProcessingInstruction}])}}])},htmlVisitor$);
return htmlVisitor$;
}
HtmlVisitor.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$t3v.Basic},ps:[],sts:[{t:m$t3x.Visitor,a:{Type$Visitor:{t:'u',l:[{t:m$t41.Node},{t:m$t3v.$_String},{t:m$t3v.Sequential,a:{Element$Sequential:HtmlChildren()}}]}}}],pa:1,an:function(){return[m$t3v.doc$($CCMM$,'ceylon.markdown.html:HtmlVisitor')];},d:['ceylon.markdown.html','HtmlVisitor']};};
ex$.HtmlVisitor=HtmlVisitor;
function $init$HtmlVisitor(){
if(HtmlVisitor.$$===undefined){
m$t3v.initTypeProto(HtmlVisitor,'ceylon.markdown.html::HtmlVisitor',m$t3v.Basic,m$t3x.Visitor);
(function(htmlVisitor$){
//MethodDecl visitBlockQuote at HtmlVisitor.ceylon (59:1-62:2)
htmlVisitor$.visitBlockQuote=function($tjv){var htmlVisitor$=this;
return ($tjw=m$t3v.tpl$([],m$t3v.for$(function(){
//Comprehension at HtmlVisitor.ceylon (60:14-61:71)
var $tjz;
var $tjx=$tjv.children.iterator(),$tjy=m$t3v.finished();
var n$tjy=function(){
while(($tjy=$tjx.next())!==m$t3v.finished()){
if(m$t3v.is$(($tjz=$tjy.accept(htmlVisitor$,{Type$accept:m$t3v.mut$([{t:m$t41.Node},{t:m$t3v.$_String},{t:m$t3v.Sequential,a:{Element$Sequential:m$t3v.mut$([m$t3v.mit$([{t:m$t41.Node},{t:m$t41.FlowCategory}]),{t:m$t3v.$_String},{t:m$t41.Raw},{t:m$t41.Comment},{t:m$t41.ProcessingInstruction}])}}])})),m$t3v.mut$([m$t41.CharacterData(),{t:m$t41.FlowCategory},{t:m$t3v.$_String}]))){
return $tjy;
}
}
return m$t3v.finished();
}
return function(){
if(n$tjy()!==m$t3v.finished()){
var $tk0=$tjy,$tk1=$tjz;
return $tk1;
}
return m$t3v.finished();
}
},{Element$Iterable:m$t3v.mut$([{t:m$t41.Raw},{t:m$t41.Comment},{t:m$t41.ProcessingInstruction},m$t3v.mit$([{t:m$t41.Node},{t:m$t41.FlowCategory}]),{t:m$t3v.$_String}]),Absent$Iterable:{t:m$t3v.Null}})),m$t41.Blockquote(undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,$tjw));
var $tjw;
};
htmlVisitor$.visitBlockQuote.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$t41.Node},ps:[{nm:'blockQuote',mt:'prm',$t:{t:m$t3x.BlockQuote}}],$cont:HtmlVisitor,pa:11,d:['ceylon.markdown.html','HtmlVisitor','$m','visitBlockQuote']};};
//MethodDecl visitCode at HtmlVisitor.ceylon (64:1-66:2)
htmlVisitor$.visitCode=function($tk2){var htmlVisitor$=this;
return ($tk3=$tk2.text.linesWithBreaks,m$t41.Code(undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,$tk3));
var $tk3;
};
htmlVisitor$.visitCode.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$t41.Node},ps:[{nm:'code',mt:'prm',$t:{t:m$t3x.Code}}],$cont:HtmlVisitor,pa:11,d:['ceylon.markdown.html','HtmlVisitor','$m','visitCode']};};
//MethodDecl visitDocument at HtmlVisitor.ceylon (68:1-70:73)
htmlVisitor$.visitDocument=function($tk4){var htmlVisitor$=this;
return m$t3v.tpl$([],m$t3v.for$(function(){
//Comprehension at HtmlVisitor.ceylon (69:3-70:71)
var $tk7;
var $tk5=$tk4.children.iterator(),$tk6=m$t3v.finished();
var n$tk6=function(){
while(($tk6=$tk5.next())!==m$t3v.finished()){
if(m$t3v.is$(($tk7=$tk6.accept(htmlVisitor$,{Type$accept:m$t3v.mut$([{t:m$t41.Node},{t:m$t3v.$_String},{t:m$t3v.Sequential,a:{Element$Sequential:m$t3v.mut$([m$t3v.mit$([{t:m$t41.Node},{t:m$t41.FlowCategory}]),{t:m$t3v.$_String},{t:m$t41.Raw},{t:m$t41.Comment},{t:m$t41.ProcessingInstruction}])}}])})),m$t3v.mut$([m$t41.CharacterData(),{t:m$t41.FlowCategory},{t:m$t3v.$_String}]))){
return $tk6;
}
}
return m$t3v.finished();
}
return function(){
if(n$tk6()!==m$t3v.finished()){
var $tk8=$tk6,$tk9=$tk7;
return $tk9;
}
return m$t3v.finished();
}
},{Element$Iterable:m$t3v.mut$([{t:m$t41.Raw},{t:m$t41.Comment},{t:m$t41.ProcessingInstruction},m$t3v.mit$([{t:m$t41.Node},{t:m$t41.FlowCategory}]),{t:m$t3v.$_String}]),Absent$Iterable:{t:m$t3v.Null}}));
};
htmlVisitor$.visitDocument.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$t3v.Sequential,a:{Element$Sequential:HtmlChildren()}},ps:[{nm:'document',mt:'prm',$t:{t:m$t3x.Document}}],$cont:HtmlVisitor,pa:11,d:['ceylon.markdown.html','HtmlVisitor','$m','visitDocument']};};
//MethodDecl visitEmphasis at HtmlVisitor.ceylon (72:1-75:2)
htmlVisitor$.visitEmphasis=function($tka){var htmlVisitor$=this;
return ($tkb=m$t3v.tpl$([],m$t3v.for$(function(){
//Comprehension at HtmlVisitor.ceylon (73:14-74:75)
var $tke;
var $tkc=$tka.children.iterator(),$tkd=m$t3v.finished();
var n$tkd=function(){
while(($tkd=$tkc.next())!==m$t3v.finished()){
if(m$t3v.is$(($tke=$tkd.accept(htmlVisitor$,{Type$accept:m$t3v.mut$([{t:m$t41.Node},{t:m$t3v.$_String},{t:m$t3v.Sequential,a:{Element$Sequential:m$t3v.mut$([m$t3v.mit$([{t:m$t41.Node},{t:m$t41.FlowCategory}]),{t:m$t3v.$_String},{t:m$t41.Raw},{t:m$t41.Comment},{t:m$t41.ProcessingInstruction}])}}])})),m$t3v.mut$([m$t41.CharacterData(),{t:m$t41.PhrasingCategory},{t:m$t3v.$_String}]))){
return $tkd;
}
}
return m$t3v.finished();
}
return function(){
if(n$tkd()!==m$t3v.finished()){
var $tkf=$tkd,$tkg=$tke;
return $tkg;
}
return m$t3v.finished();
}
},{Element$Iterable:m$t3v.mut$([{t:m$t41.Raw},{t:m$t41.Comment},{t:m$t41.ProcessingInstruction},m$t3v.mit$([{t:m$t41.Node},{t:m$t41.PhrasingCategory}]),{t:m$t3v.$_String}]),Absent$Iterable:{t:m$t3v.Null}})),m$t41.Em(undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,$tkb));
var $tkb;
};
htmlVisitor$.visitEmphasis.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$t41.Node},ps:[{nm:'emphasis',mt:'prm',$t:{t:m$t3x.Emphasis}}],$cont:HtmlVisitor,pa:11,d:['ceylon.markdown.html','HtmlVisitor','$m','visitEmphasis']};};
//MethodDecl visitFencedCode at HtmlVisitor.ceylon (77:1-81:2)
htmlVisitor$.visitFencedCode=function($tkh){var htmlVisitor$=this;
return ($tki=m$t3v.$arr$sa$([($tkj=$tkh.text.linesWithBreaks,m$t41.Code(undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,$tkj))],{t:m$t41.Code},1),m$t41.Pre(undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,$tki));
var $tki,$tkj;
};
htmlVisitor$.visitFencedCode.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$t41.Node},ps:[{nm:'fencedCode',mt:'prm',$t:{t:m$t3x.FencedCode}}],$cont:HtmlVisitor,pa:11,d:['ceylon.markdown.html','HtmlVisitor','$m','visitFencedCode']};};
//MethodDecl visitHardBreak at HtmlVisitor.ceylon (83:1-83:75)
htmlVisitor$.visitHardBreak=function($tkk){return m$t41.Br();
};
htmlVisitor$.visitHardBreak.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$t41.Node},ps:[{nm:'hardBreak',mt:'prm',$t:{t:m$t3x.HardBreak}}],$cont:HtmlVisitor,pa:11,d:['ceylon.markdown.html','HtmlVisitor','$m','visitHardBreak']};};
//MethodDef visitHeading at HtmlVisitor.ceylon (85:1-111:1)
htmlVisitor$.visitHeading=function($tkl){
var htmlVisitor$=this;
var $tkm=m$t3v.tpl$([],m$t3v.for$(function(){
//Comprehension at HtmlVisitor.ceylon (86:20-87:75)
var $tkp;
var $tkn=$tkl.children.iterator(),$tko=m$t3v.finished();
var n$tko=function(){
while(($tko=$tkn.next())!==m$t3v.finished()){
if(m$t3v.is$(($tkp=$tko.accept(htmlVisitor$,{Type$accept:m$t3v.mut$([{t:m$t41.Node},{t:m$t3v.$_String},{t:m$t3v.Sequential,a:{Element$Sequential:m$t3v.mut$([m$t3v.mit$([{t:m$t41.Node},{t:m$t41.FlowCategory}]),{t:m$t3v.$_String},{t:m$t41.Raw},{t:m$t41.Comment},{t:m$t41.ProcessingInstruction}])}}])})),m$t3v.mut$([{t:m$t41.PhrasingCategory},m$t41.CharacterData(),{t:m$t3v.$_String}]))){
return $tko;
}
}
return m$t3v.finished();
}
return function(){
if(n$tko()!==m$t3v.finished()){
var $tkq=$tko,$tkr=$tkp;
return $tkr;
}
return m$t3v.finished();
}
},{Element$Iterable:m$t3v.mut$([m$t3v.mit$([{t:m$t41.Node},{t:m$t41.PhrasingCategory}]),{t:m$t41.Raw},{t:m$t41.Comment},{t:m$t41.ProcessingInstruction},{t:m$t3v.$_String}]),Absent$Iterable:{t:m$t3v.Null}}));
//Switch statement at HtmlVisitor.ceylon (89:2-110:2)
var $tks=$tkl.level;
if((1).equals($tks)) {
return ($tkt=$tkm,m$t41.H1(undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,$tkt));
var $tkt;
}
else if((2).equals($tks)) {
return ($tku=$tkm,m$t41.H2(undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,$tku));
var $tku;
}
else if((3).equals($tks)) {
return ($tkv=$tkm,m$t41.H3(undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,$tkv));
var $tkv;
}
else if((4).equals($tks)) {
return ($tkw=$tkm,m$t41.H4(undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,$tkw));
var $tkw;
}
else if((5).equals($tks)) {
return ($tkx=$tkm,m$t41.H5(undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,$tkx));
var $tkx;
}
else if((6).equals($tks)) {
return ($tky=$tkm,m$t41.H6(undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,$tky));
var $tky;
}
else{
return ($tkz=$tkm,m$t41.H1(undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,$tkz));
var $tkz;
}//End switch statement at HtmlVisitor.ceylon (89:2-110:2)
};htmlVisitor$.visitHeading.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$t41.Node},ps:[{nm:'heading',mt:'prm',$t:{t:m$t3x.Heading}}],$cont:HtmlVisitor,pa:11,d:['ceylon.markdown.html','HtmlVisitor','$m','visitHeading']};};
//MethodDecl visitHtmlBlock at HtmlVisitor.ceylon (113:1-113:90)
htmlVisitor$.visitHtmlBlock=function($tl0){var htmlVisitor$=this;
return m$t41.Raw($tl0.text);
};
htmlVisitor$.visitHtmlBlock.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$t41.Node},ps:[{nm:'htmlBlock',mt:'prm',$t:{t:m$t3x.HtmlBlock}}],$cont:HtmlVisitor,pa:11,d:['ceylon.markdown.html','HtmlVisitor','$m','visitHtmlBlock']};};
//MethodDecl visitHtmlInline at HtmlVisitor.ceylon (115:1-115:94)
htmlVisitor$.visitHtmlInline=function($tl1){var htmlVisitor$=this;
return m$t41.Raw($tl1.text);
};
htmlVisitor$.visitHtmlInline.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$t41.Node},ps:[{nm:'htmlInline',mt:'prm',$t:{t:m$t3x.HtmlInline}}],$cont:HtmlVisitor,pa:11,d:['ceylon.markdown.html','HtmlVisitor','$m','visitHtmlInline']};};
//MethodDef visitImage at HtmlVisitor.ceylon (117:1-128:1)
htmlVisitor$.visitImage=function($tl2){
var htmlVisitor$=this;
var $tl3=htmlVisitor$.$c4xaj4$tl4(($tl5=m$t3v.tpl$([],m$t3v.for$(function(){
//Comprehension at HtmlVisitor.ceylon (119:16-120:77)
var $tl8;
var $tl6=$tl2.children.iterator(),$tl7=m$t3v.finished();
var n$tl7=function(){
while(($tl7=$tl6.next())!==m$t3v.finished()){
if(m$t3v.is$(($tl8=$tl7.accept(htmlVisitor$,{Type$accept:m$t3v.mut$([{t:m$t41.Node},{t:m$t3v.$_String},{t:m$t3v.Sequential,a:{Element$Sequential:m$t3v.mut$([m$t3v.mit$([{t:m$t41.Node},{t:m$t41.FlowCategory}]),{t:m$t3v.$_String},{t:m$t41.Raw},{t:m$t41.Comment},{t:m$t41.ProcessingInstruction}])}}])})),m$t3v.mut$([m$t41.CharacterData(),{t:m$t41.PhrasingCategory},{t:m$t3v.$_String}]))){
return $tl7;
}
}
return m$t3v.finished();
}
return function(){
if(n$tl7()!==m$t3v.finished()){
var $tl9=$tl7,$tla=$tl8;
return $tla;
}
return m$t3v.finished();
}
},{Element$Iterable:m$t3v.mut$([{t:m$t41.Raw},{t:m$t41.Comment},{t:m$t41.ProcessingInstruction},m$t3v.mit$([{t:m$t41.Node},{t:m$t41.PhrasingCategory}]),{t:m$t3v.$_String}]),Absent$Iterable:{t:m$t3v.Null}})),m$t41.P(undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,$tl5)));
var $tl5;
return ($tlb=$tl2.destination,$tlc=(!m$t3v.$eq$($tl3,"")?$tl3:null),$tld=(m$t3v.$eq$($tl2.title,"")?null:$tl2.title),m$t41.Img(undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,$tld,undefined,$tlc,undefined,undefined,undefined,undefined,$tlb,undefined,undefined));
var $tlb,$tlc,$tld;
};htmlVisitor$.visitImage.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$t41.Node},ps:[{nm:'image',mt:'prm',$t:{t:m$t3x.Image}}],$cont:HtmlVisitor,pa:11,d:['ceylon.markdown.html','HtmlVisitor','$m','visitImage']};};
//MethodDef getText at HtmlVisitor.ceylon (130:1-141:1)
htmlVisitor$.$c4xaj4$tl4=function($tle){
var htmlVisitor$=this;
var $tlf=m$t3v.StringBuilder();
//'for' statement at HtmlVisitor.ceylon (132:2-138:2)
var $tlh;for(var $tlg=$tle.children.iterator();($tlh=$tlg.next())!==m$t3v.finished();){
var $tli;
if(m$t3v.is$(($tli=$tlh),{t:m$t3v.$_String})){
$tlf.append($tli);
}
else{
var $tlj;
if(m$t3v.is$(($tlj=$tli),{t:m$t41.Node})){
$tlf.append(htmlVisitor$.$c4xaj4$tl4($tlj));
}
}
}
return $tlf.string;
};htmlVisitor$.$c4xaj4$tl4.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$t3v.$_String},ps:[{nm:'node',mt:'prm',$t:{t:m$t41.Node}}],$cont:HtmlVisitor,d:['ceylon.markdown.html','HtmlVisitor','$m','getText$vsk0ho']};};
//MethodDecl visitIndentedCode at HtmlVisitor.ceylon (143:1-147:2)
htmlVisitor$.visitIndentedCode=function($tlk){var htmlVisitor$=this;
return ($tll=m$t3v.$arr$sa$([($tlm=$tlk.text.linesWithBreaks,m$t41.Code(undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,$tlm))],{t:m$t41.Code},1),m$t41.Pre(undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,$tll));
var $tll,$tlm;
};
htmlVisitor$.visitIndentedCode.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$t41.Node},ps:[{nm:'indentedCode',mt:'prm',$t:{t:m$t3x.IndentedCode}}],$cont:HtmlVisitor,pa:11,d:['ceylon.markdown.html','HtmlVisitor','$m','visitIndentedCode']};};
//MethodDecl visitLink at HtmlVisitor.ceylon (149:1-154:2)
htmlVisitor$.visitLink=function($tln){var htmlVisitor$=this;
return ($tlo=$tln.destination,$tlp=(m$t3v.$eq$($tln.title,"")?null:$tln.title),$tlq=m$t3v.tpl$([],m$t3v.for$(function(){
//Comprehension at HtmlVisitor.ceylon (152:14-153:57)
var $tlt;
var $tlr=$tln.children.iterator(),$tls=m$t3v.finished();
var n$tls=function(){
while(($tls=$tlr.next())!==m$t3v.finished()){
if(m$t3v.is$(($tlt=$tls.accept(htmlVisitor$,{Type$accept:m$t3v.mut$([{t:m$t41.Node},{t:m$t3v.$_String},{t:m$t3v.Sequential,a:{Element$Sequential:m$t3v.mut$([m$t3v.mit$([{t:m$t41.Node},{t:m$t41.FlowCategory}]),{t:m$t3v.$_String},{t:m$t41.Raw},{t:m$t41.Comment},{t:m$t41.ProcessingInstruction}])}}])})),m$t3v.mut$([{t:m$t41.FlowCategory},{t:m$t3v.$_String}]))){
return $tls;
}
}
return m$t3v.finished();
}
return function(){
if(n$tls()!==m$t3v.finished()){
var $tlu=$tls,$tlv=$tlt;
return $tlv;
}
return m$t3v.finished();
}
},{Element$Iterable:m$t3v.mut$([m$t3v.mit$([{t:m$t41.Node},{t:m$t41.FlowCategory}]),{t:m$t3v.$_String}]),Absent$Iterable:{t:m$t3v.Null}})),m$t41.A(undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,$tlp,undefined,undefined,$tlo,undefined,undefined,undefined,undefined,undefined,$tlq));
var $tlo,$tlp,$tlq;
};
htmlVisitor$.visitLink.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$t41.Node},ps:[{nm:'link',mt:'prm',$t:{t:m$t3x.Link}}],$cont:HtmlVisitor,pa:11,d:['ceylon.markdown.html','HtmlVisitor','$m','visitLink']};};
//MethodDef visitListItem at HtmlVisitor.ceylon (156:1-178:1)
htmlVisitor$.visitListItem=function($tlw){
var htmlVisitor$=this;
var $tlx;
if(m$t3v.is$(($tlx=$tlw.parent),{t:m$t3x.List})&&$tlx.tight){
var $tly=m$t3v.empty();
//'for' statement at HtmlVisitor.ceylon (159:3-167:3)
var $tm0;for(var $tlz=$tlw.children.iterator();($tm0=$tlz.next())!==m$t3v.finished();){
var $tm1=$tm0.accept(htmlVisitor$,{Type$accept:m$t3v.mut$([{t:m$t41.Node},{t:m$t3v.$_String},{t:m$t3v.Sequential,a:{Element$Sequential:m$t3v.mut$([m$t3v.mit$([{t:m$t41.Node},{t:m$t41.FlowCategory}]),{t:m$t3v.$_String},{t:m$t41.Raw},{t:m$t41.Comment},{t:m$t41.ProcessingInstruction}])}}])});
var $tm2;
if(m$t3v.is$(($tm2=$tm1),{t:m$t41.P})){
$tly=$tly.append(m$t3v.tpl$([],m$t3v.for$(function(){
//Comprehension at HtmlVisitor.ceylon (163:7-163:72)
var $tm5;
var $tm3=$tm2.children.iterator(),$tm4=m$t3v.finished();
var n$tm4=function(){
while(($tm4=$tm3.next())!==m$t3v.finished()){
if(m$t3v.is$(($tm5=$tm4),m$t3v.mut$([{t:m$t41.Em},{t:m$t41.Strong},{t:m$t41.A},{t:m$t41.Code},{t:m$t41.Img},{t:m$t3v.$_String}]))){
return $tm4;
}
}
return m$t3v.finished();
}
return function(){
if(n$tm4()!==m$t3v.finished()){
var $tm6=$tm4,$tm7=$tm5;
return $tm7;
}
return m$t3v.finished();
}
},{Element$Iterable:m$t3v.mut$([{t:m$t41.Em},{t:m$t41.Strong},{t:m$t41.A},{t:m$t41.Code},{t:m$t41.Img},{t:m$t3v.$_String}]),Absent$Iterable:{t:m$t3v.Null}})),{Other$append:m$t3v.mut$([{t:m$t41.Em},{t:m$t41.Strong},{t:m$t41.A},{t:m$t41.Code},{t:m$t41.Img},{t:m$t3v.$_String}])});
}
else{
var $tm8;
if(m$t3v.is$(($tm8=$tm2),m$t3v.mut$([{t:m$t41.FlowCategory},{t:m$t3v.$_String}]))){
$tly=$tly.append(m$t3v.tpl$([$tm8]),{Other$append:m$t3v.mut$([m$t3v.mit$([{t:m$t41.Node},{t:m$t41.FlowCategory}]),{t:m$t3v.$_String}])});
}
}
}
return ($tm9=$tly,m$t41.Li(undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,$tm9));
var $tm9;
}
return ($tma=m$t3v.tpl$([],m$t3v.for$(function(){
//Comprehension at HtmlVisitor.ceylon (175:15-176:58)
var $tmd;
var $tmb=$tlw.children.iterator(),$tmc=m$t3v.finished();
var n$tmc=function(){
while(($tmc=$tmb.next())!==m$t3v.finished()){
if(m$t3v.is$(($tmd=$tmc.accept(htmlVisitor$,{Type$accept:m$t3v.mut$([{t:m$t41.Node},{t:m$t3v.$_String},{t:m$t3v.Sequential,a:{Element$Sequential:m$t3v.mut$([m$t3v.mit$([{t:m$t41.Node},{t:m$t41.FlowCategory}]),{t:m$t3v.$_String},{t:m$t41.Raw},{t:m$t41.Comment},{t:m$t41.ProcessingInstruction}])}}])})),m$t3v.mut$([{t:m$t41.FlowCategory},{t:m$t3v.$_String}]))){
return $tmc;
}
}
return m$t3v.finished();
}
return function(){
if(n$tmc()!==m$t3v.finished()){
var $tme=$tmc,$tmf=$tmd;
return $tmf;
}
return m$t3v.finished();
}
},{Element$Iterable:m$t3v.mut$([m$t3v.mit$([{t:m$t41.Node},{t:m$t41.FlowCategory}]),{t:m$t3v.$_String}]),Absent$Iterable:{t:m$t3v.Null}})),m$t41.Li(undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,$tma));
var $tma;
};htmlVisitor$.visitListItem.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$t41.Node},ps:[{nm:'listItem',mt:'prm',$t:{t:m$t3x.ListItem}}],$cont:HtmlVisitor,pa:11,d:['ceylon.markdown.html','HtmlVisitor','$m','visitListItem']};};
//MethodDecl visitOrderedList at HtmlVisitor.ceylon (180:1-183:2)
htmlVisitor$.visitOrderedList=function($tmg){var htmlVisitor$=this;
return ($tmh=m$t3v.tpl$([],m$t3v.for$(function(){
//Comprehension at HtmlVisitor.ceylon (181:14-182:47)
var $tmk;
var $tmi=$tmg.children.iterator(),$tmj=m$t3v.finished();
var n$tmj=function(){
while(($tmj=$tmi.next())!==m$t3v.finished()){
if(m$t3v.is$(($tmk=$tmj.accept(htmlVisitor$,{Type$accept:m$t3v.mut$([{t:m$t41.Node},{t:m$t3v.$_String},{t:m$t3v.Sequential,a:{Element$Sequential:m$t3v.mut$([m$t3v.mit$([{t:m$t41.Node},{t:m$t41.FlowCategory}]),{t:m$t3v.$_String},{t:m$t41.Raw},{t:m$t41.Comment},{t:m$t41.ProcessingInstruction}])}}])})),m$t3v.mut$([{t:m$t41.Li},{t:m$t3v.$_String}]))){
return $tmj;
}
}
return m$t3v.finished();
}
return function(){
if(n$tmj()!==m$t3v.finished()){
var $tml=$tmj,$tmm=$tmk;
return $tmm;
}
return m$t3v.finished();
}
},{Element$Iterable:m$t3v.mut$([{t:m$t41.Li},{t:m$t3v.$_String}]),Absent$Iterable:{t:m$t3v.Null}})),m$t41.Ol(undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,$tmh));
var $tmh;
};
htmlVisitor$.visitOrderedList.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$t41.Node},ps:[{nm:'orderedList',mt:'prm',$t:{t:m$t3x.OrderedList}}],$cont:HtmlVisitor,pa:11,d:['ceylon.markdown.html','HtmlVisitor','$m','visitOrderedList']};};
//MethodDecl visitParagraph at HtmlVisitor.ceylon (185:1-188:2)
htmlVisitor$.visitParagraph=function($tmn){var htmlVisitor$=this;
return ($tmo=m$t3v.tpl$([],m$t3v.for$(function(){
//Comprehension at HtmlVisitor.ceylon (186:14-187:61)
var $tmr;
var $tmp=$tmn.children.iterator(),$tmq=m$t3v.finished();
var n$tmq=function(){
while(($tmq=$tmp.next())!==m$t3v.finished()){
if(m$t3v.is$(($tmr=$tmq.accept(htmlVisitor$,{Type$accept:m$t3v.mut$([{t:m$t41.Node},{t:m$t3v.$_String},{t:m$t3v.Sequential,a:{Element$Sequential:m$t3v.mut$([m$t3v.mit$([{t:m$t41.Node},{t:m$t41.FlowCategory}]),{t:m$t3v.$_String},{t:m$t41.Raw},{t:m$t41.Comment},{t:m$t41.ProcessingInstruction}])}}])})),m$t3v.mut$([{t:m$t41.PhrasingCategory},{t:m$t3v.$_String}]))){
return $tmq;
}
}
return m$t3v.finished();
}
return function(){
if(n$tmq()!==m$t3v.finished()){
var $tms=$tmq,$tmt=$tmr;
return $tmt;
}
return m$t3v.finished();
}
},{Element$Iterable:m$t3v.mut$([m$t3v.mit$([{t:m$t41.Node},{t:m$t41.PhrasingCategory}]),{t:m$t3v.$_String}]),Absent$Iterable:{t:m$t3v.Null}})),m$t41.P(undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,$tmo));
var $tmo;
};
htmlVisitor$.visitParagraph.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$t41.Node},ps:[{nm:'paragraph',mt:'prm',$t:{t:m$t3x.Paragraph}}],$cont:HtmlVisitor,pa:11,d:['ceylon.markdown.html','HtmlVisitor','$m','visitParagraph']};};
//MethodDecl visitSoftBreak at HtmlVisitor.ceylon (190:1-190:73)
htmlVisitor$.visitSoftBreak=function($tmu){return "\n";
};
htmlVisitor$.visitSoftBreak.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$t3v.$_String},ps:[{nm:'softBreak',mt:'prm',$t:{t:m$t3x.SoftBreak}}],$cont:HtmlVisitor,pa:11,d:['ceylon.markdown.html','HtmlVisitor','$m','visitSoftBreak']};};
//MethodDecl visitStrongEmphasis at HtmlVisitor.ceylon (192:1-195:2)
htmlVisitor$.visitStrongEmphasis=function($tmv){var htmlVisitor$=this;
return ($tmw=m$t3v.tpl$([],m$t3v.for$(function(){
//Comprehension at HtmlVisitor.ceylon (193:14-194:61)
var $tmz;
var $tmx=$tmv.children.iterator(),$tmy=m$t3v.finished();
var n$tmy=function(){
while(($tmy=$tmx.next())!==m$t3v.finished()){
if(m$t3v.is$(($tmz=$tmy.accept(htmlVisitor$,{Type$accept:m$t3v.mut$([{t:m$t41.Node},{t:m$t3v.$_String},{t:m$t3v.Sequential,a:{Element$Sequential:m$t3v.mut$([m$t3v.mit$([{t:m$t41.Node},{t:m$t41.FlowCategory}]),{t:m$t3v.$_String},{t:m$t41.Raw},{t:m$t41.Comment},{t:m$t41.ProcessingInstruction}])}}])})),m$t3v.mut$([{t:m$t41.PhrasingCategory},{t:m$t3v.$_String}]))){
return $tmy;
}
}
return m$t3v.finished();
}
return function(){
if(n$tmy()!==m$t3v.finished()){
var $tn0=$tmy,$tn1=$tmz;
return $tn1;
}
return m$t3v.finished();
}
},{Element$Iterable:m$t3v.mut$([m$t3v.mit$([{t:m$t41.Node},{t:m$t41.PhrasingCategory}]),{t:m$t3v.$_String}]),Absent$Iterable:{t:m$t3v.Null}})),m$t41.Strong(undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,$tmw));
var $tmw;
};
htmlVisitor$.visitStrongEmphasis.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$t41.Node},ps:[{nm:'strongEmphasis',mt:'prm',$t:{t:m$t3x.StrongEmphasis}}],$cont:HtmlVisitor,pa:11,d:['ceylon.markdown.html','HtmlVisitor','$m','visitStrongEmphasis']};};
//MethodDecl visitText at HtmlVisitor.ceylon (197:1-197:63)
htmlVisitor$.visitText=function($tn2){var htmlVisitor$=this;
return $tn2.text;
};
htmlVisitor$.visitText.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$t3v.$_String},ps:[{nm:'text',mt:'prm',$t:{t:m$t3x.Text}}],$cont:HtmlVisitor,pa:11,d:['ceylon.markdown.html','HtmlVisitor','$m','visitText']};};
//MethodDecl visitThematicBreak at HtmlVisitor.ceylon (199:1-199:87)
htmlVisitor$.visitThematicBreak=function($tn3){return m$t41.Hr();
};
htmlVisitor$.visitThematicBreak.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$t41.Node},ps:[{nm:'thematicBreak',mt:'prm',$t:{t:m$t3x.ThematicBreak}}],$cont:HtmlVisitor,pa:11,d:['ceylon.markdown.html','HtmlVisitor','$m','visitThematicBreak']};};
//MethodDecl visitUnorderedList at HtmlVisitor.ceylon (201:1-204:2)
htmlVisitor$.visitUnorderedList=function($tn4){var htmlVisitor$=this;
return ($tn5=m$t3v.tpl$([],m$t3v.for$(function(){
//Comprehension at HtmlVisitor.ceylon (202:14-203:61)
var $tn8;
var $tn6=$tn4.children.iterator(),$tn7=m$t3v.finished();
var n$tn7=function(){
while(($tn7=$tn6.next())!==m$t3v.finished()){
if(m$t3v.is$(($tn8=$tn7.accept(htmlVisitor$,{Type$accept:m$t3v.mut$([{t:m$t41.Node},{t:m$t3v.$_String},{t:m$t3v.Sequential,a:{Element$Sequential:m$t3v.mut$([m$t3v.mit$([{t:m$t41.Node},{t:m$t41.FlowCategory}]),{t:m$t3v.$_String},{t:m$t41.Raw},{t:m$t41.Comment},{t:m$t41.ProcessingInstruction}])}}])})),m$t3v.mut$([m$t41.CharacterData(),{t:m$t41.Li},{t:m$t3v.$_String}]))){
return $tn7;
}
}
return m$t3v.finished();
}
return function(){
if(n$tn7()!==m$t3v.finished()){
var $tn9=$tn7,$tna=$tn8;
return $tna;
}
return m$t3v.finished();
}
},{Element$Iterable:m$t3v.mut$([{t:m$t3v.$_String},{t:m$t41.Raw},{t:m$t41.Comment},{t:m$t41.ProcessingInstruction},{t:m$t41.Li}]),Absent$Iterable:{t:m$t3v.Null}})),m$t41.Ul(undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,$tn5));
var $tn5;
};
htmlVisitor$.visitUnorderedList.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$t41.Node},ps:[{nm:'unorderedList',mt:'prm',$t:{t:m$t3x.UnorderedList}}],$cont:HtmlVisitor,pa:11,d:['ceylon.markdown.html','HtmlVisitor','$m','visitUnorderedList']};};
})(HtmlVisitor.$$.prototype);
}
return HtmlVisitor;
}
ex$.$init$HtmlVisitor=$init$HtmlVisitor;
$init$HtmlVisitor();

//MethodDecl renderCompleteHtml at renderHtml.ceylon (11:0-22:1)
function renderCompleteHtml($tnp){return ($tnq=m$t3v.$arr$sa$([($tnr=m$t3v.$arr$sa$([($tns="utf-8",m$t41.Meta(undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,$tns,undefined))],{t:m$t41.Meta},1),m$t41.Head(undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,$tnr)),($tnt=HtmlVisitor().visitDocument($tnp),m$t41.Body(undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,$tnt))],m$t3v.mut$([{t:m$t41.Head},{t:m$t41.Body}]),1),m$t41.Html(undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,$tnq));
var $tnq,$tnr,$tns,$tnt;
};
renderCompleteHtml.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$t41.Html},ps:[{nm:'document',mt:'prm',$t:{t:m$t3x.Document}}],pa:1,an:function(){return[m$t3v.doc$($CCMM$,'ceylon.markdown.html:renderCompleteHtml')];},d:['ceylon.markdown.html','renderCompleteHtml']};};
ex$.renderCompleteHtml=renderCompleteHtml;
//MethodDecl renderPartialHtml at renderHtml.ceylon (24:0-28:42)
function renderPartialHtml($tnu){return HtmlVisitor().visitDocument($tnu);
};
renderPartialHtml.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$t3v.Sequential,a:{Element$Sequential:HtmlChildren()}},ps:[{nm:'document',mt:'prm',$t:{t:m$t3x.Document}}],pa:1,an:function(){return[m$t3v.doc$($CCMM$,'ceylon.markdown.html:renderPartialHtml')];},d:['ceylon.markdown.html','renderPartialHtml']};};
ex$.renderPartialHtml=renderPartialHtml;
ex$.$pkg$ans$ceylon$markdown$html=function(){return[m$t3v.suppressWarnings(m$t3v.$arr$sa$(["ceylonNamespace"],{t:m$t3v.$_String})),m$t3v.shared()];};
});
}(typeof define==='function' && define.amd ? define : function (factory) {
if (typeof exports!=='undefined') { factory(require, exports, module);
} else { throw 'no module loader'; }
}));
