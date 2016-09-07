(function(define) { define(function(require, ex$, module) {
var $$req$ = require; require = (typeof $$ceylon$require == 'undefined') ? $$req$ : function() { return $$ceylon$require('ceylon/regex/1.2.3/ceylon.regex-1.2.3', $$req$, Array.prototype.slice.call(arguments)); }

var _CTM$;function $CCMM$(){if (_CTM$===undefined)_CTM$=require('ceylon/regex/1.2.3/ceylon.regex-1.2.3-model').$CCMM$;return _CTM$;}
ex$.$CCMM$=$CCMM$;
var m$1=require('ceylon/language/1.2.3/ceylon.language-1.2.3');
m$1.$addmod$(m$1,'ceylon.language/1.2.3');
m$1.$addmod$(ex$,'ceylon.regex/1.2.3');
ex$.$mod$ans$=function(){return[m$1.doc$($CCMM$,'','$mod-anns'),m$1.by(m$1.$arr$sa$(["Tako Schotanus"],{t:m$1.$_String})),m$1.license("Apache Software License 2.0")];};
ex$.$mod$imps=function(){return{
'java.base/7':function(){return[m$1.$_native(m$1.$arr$sa$(["jvm"],{t:m$1.$_String}))];},
'ceylon.interop.java/1.2.3':function(){return[m$1.$_native(m$1.$arr$sa$(["jvm"],{t:m$1.$_String}))];}
};};
function RegexJavascript($bn8c5v$4w5,$bn8c5v$4w6,$bn8c5v$4w7,$bn8c5v$4w8,regexJavascript$){
$init$RegexJavascript();
if(regexJavascript$===undefined)regexJavascript$=new RegexJavascript.$$;
regexJavascript$.$bn8c5v$4w5_=$bn8c5v$4w5;
if($bn8c5v$4w6===undefined){$bn8c5v$4w6=$init$RegexJavascript().$defs$global(regexJavascript$,$bn8c5v$4w5,$bn8c5v$4w7,$bn8c5v$4w8);}
regexJavascript$.$bn8c5v$4w6_=$bn8c5v$4w6;
if($bn8c5v$4w7===undefined){$bn8c5v$4w7=$init$RegexJavascript().$defs$ignoreCase(regexJavascript$,$bn8c5v$4w5,$bn8c5v$4w6,$bn8c5v$4w8);}
regexJavascript$.$bn8c5v$4w7_=$bn8c5v$4w7;
if($bn8c5v$4w8===undefined){$bn8c5v$4w8=$init$RegexJavascript().$defs$multiLine(regexJavascript$,$bn8c5v$4w5,$bn8c5v$4w6,$bn8c5v$4w7);}
regexJavascript$.$bn8c5v$4w8_=$bn8c5v$4w8;
Regex($bn8c5v$4w5,regexJavascript$.$bn8c5v$4w6,regexJavascript$.$bn8c5v$4w7,regexJavascript$.$bn8c5v$4w8,regexJavascript$);
try{
regexJavascript$.$bn8c5v$4w9=(typeof RegExp==='undefined'||RegExp===null?m$1.throwexc(m$1.Exception("Undefined or null reference: RegExp"),'32:17-32:22','regexpjs.ceylon'):RegExp)($bn8c5v$4w5,regexJavascript$.$bn8c5v$4wa);
}
catch($4wb){
if(!m$1.is$(($4wb=$4wb),{t:m$1.Throwable}))$4wb=m$1.NatErr($4wb);
if(m$1.is$($4wb,{t:m$1.Throwable})){
throw m$1.wrapexc(RegexException("Problem found within regular expression",$4wb),'34:12-34:79','ceylon/regex/regexpjs.ceylon');
}else{throw $4wb}
}
return regexJavascript$;
}
RegexJavascript.$defs$global=function(regexJavascript$,$bn8c5v$4w5,$bn8c5v$4w7,$bn8c5v$4w8){return false};RegexJavascript.$defs$ignoreCase=function(regexJavascript$,$bn8c5v$4w5,$bn8c5v$4w6,$bn8c5v$4w8){return false};RegexJavascript.$defs$multiLine=function(regexJavascript$,$bn8c5v$4w5,$bn8c5v$4w6,$bn8c5v$4w7){return false};RegexJavascript.$crtmm$=function(){return{mod:$CCMM$,'super':{t:Regex},ps:[{nm:'expression',mt:'prm',$t:{t:m$1.$_String}},{nm:'global',mt:'prm',def:1,$t:{t:m$1.$_Boolean}},{nm:'ignoreCase',mt:'prm',def:1,$t:{t:m$1.$_Boolean}},{nm:'multiLine',mt:'prm',def:1,$t:{t:m$1.$_Boolean}}],an:function(){return[m$1.$_native(m$1.$arr$sa$(["js"],{t:m$1.$_String}))];},d:['ceylon.regex','RegexJavascript']};};
ex$.RegexJavascript=RegexJavascript;
function $init$RegexJavascript(){
if(RegexJavascript.$$===undefined){
m$1.initTypeProto(RegexJavascript,'ceylon.regex::RegexJavascript',$init$Regex());
(function(regexJavascript$){
m$1.atr$(regexJavascript$,'$bn8c5v$4w5',function(){return this.$bn8c5v$4w5_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:RegexJavascript,d:['ceylon.regex','RegexJavascript','$at','expression$hltzxb']};});
m$1.atr$(regexJavascript$,'$bn8c5v$4w6',function(){return this.$bn8c5v$4w6_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},$cont:RegexJavascript,d:['ceylon.regex','RegexJavascript','$at','global$nn5alu']};});
m$1.atr$(regexJavascript$,'$bn8c5v$4w7',function(){return this.$bn8c5v$4w7_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},$cont:RegexJavascript,d:['ceylon.regex','RegexJavascript','$at','ignoreCase$3y242h']};});
m$1.atr$(regexJavascript$,'$bn8c5v$4w8',function(){return this.$bn8c5v$4w8_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},$cont:RegexJavascript,d:['ceylon.regex','RegexJavascript','$at','multiLine$hjyt10']};});
m$1.atr$(regexJavascript$,'$bn8c5v$4wa',function(){
var regexJavascript$=this;
return ($4wc=(regexJavascript$.$bn8c5v$4w6?"g":null),m$1.nn$($4wc)?$4wc:"").plus(($4wd=(regexJavascript$.$bn8c5v$4w7?"i":null),m$1.nn$($4wd)?$4wd:"")).plus(($4we=(regexJavascript$.$bn8c5v$4w8?"m":null),m$1.nn$($4we)?$4we:""));
var $4wc,$4wd,$4we;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:RegexJavascript,d:['ceylon.regex','RegexJavascript','$at','jsflags$8bqmb9']};});
m$1.atr$(regexJavascript$,'lastIndex',function(){
var regexJavascript$=this;
return m$1.ndnc$(regexJavascript$.$bn8c5v$4w9.lastIndex,'i','regexpjs.ceylon 40:19-40:30');
},function($4wf){
var regexJavascript$=this;
regexJavascript$.$bn8c5v$4w9.lastIndex=$4wf;
},function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:RegexJavascript,pa:1027,d:['ceylon.regex','RegexJavascript','$at','lastIndex']};},function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$cont:RegexJavascript,d:['ceylon.regex','RegexJavascript','$at','lastIndex','$set']};});regexJavascript$.find=function($4wg){
var regexJavascript$=this;
var $4wh=regexJavascript$.$bn8c5v$4w9.exec($4wg);
var $4wi;
if(m$1.nn$(($4wi=$4wh))){
var $4wj=$4wi.index;
var $4wk=($4wl=$4wi.index,$4wm=$4wi[0].size,(m$1.nn$($4wl)&&$4wl.plus&&$4wl.plus($4wm))||$4wl+$4wm);
var $4wn=$4wi[0];
$4wi.shift();
var $4wo=m$1.empty();
var $4wr=$4wi;for(var $4wp=0;$4wp<$4wr.length;$4wp++){var $4wq=$4wr[$4wp];$4wo=$4wo.append(m$1.tpl$([$4wq]),{Other$append:m$1.mut$([{t:m$1.Null},{t:m$1.$_String}])});
}
return MatchResult(m$1.ndnc$($4wj,'i','regexpjs.ceylon 62:35-62:39'),m$1.ndnc$($4wk,'i','regexpjs.ceylon 62:42-62:44'),m$1.ndtc$($4wn,{t:m$1.$_String},'regexpjs.ceylon 62:47-62:53'),$4wo);
}
else{
return null;
}
};regexJavascript$.find.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:MatchResult}]},ps:[{nm:'input',mt:'prm',$t:{t:m$1.$_String}}],$cont:RegexJavascript,pa:3,d:['ceylon.regex','RegexJavascript','$m','find']};};
regexJavascript$.$_split=function($4ws,$4wt){
var regexJavascript$=this;
if($4wt===undefined){$4wt=regexJavascript$.$_split$defs$limit($4ws,$4wt);}
var $4wu=m$1.empty();
var $4wv=$4ws;
var $4ww=(($4wt>=0)?$4wv.split(regexJavascript$.$bn8c5v$4w9,$4wt):$4wv.split(regexJavascript$.$bn8c5v$4w9));
var $4wz=$4ww;for(var $4wx=0;$4wx<$4wz.length;$4wx++){var $4wy=$4wz[$4wx];$4wu=$4wu.append(m$1.tpl$([$4wy]),{Other$append:{t:m$1.$_String}});
}
return $4wu;
};regexJavascript$.$_split.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Sequential,a:{Element$Sequential:{t:m$1.$_String}}},ps:[{nm:'input',mt:'prm',$t:{t:m$1.$_String}},{nm:'limit',mt:'prm',def:1,$t:{t:m$1.Integer}}],$cont:RegexJavascript,pa:3,d:['ceylon.regex','RegexJavascript','$m','split']};};
regexJavascript$.$_replace=function($4x0,$4x1){
var regexJavascript$=this;
var $4x2=$4x0;
var $4x3=$4x1;
var $4x4=$4x2.replace(regexJavascript$.$bn8c5v$4w9,$4x3,regexJavascript$.$bn8c5v$4wa);
return m$1.ndtc$($4x4,{t:m$1.$_String},'regexpjs.ceylon 90:19-90:24');
};regexJavascript$.$_replace.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_String},ps:[{nm:'input',mt:'prm',$t:{t:m$1.$_String}},{nm:'replacement',mt:'prm',$t:{t:m$1.$_String}}],$cont:RegexJavascript,pa:3,d:['ceylon.regex','RegexJavascript','$m','replace']};};
})(RegexJavascript.$$.prototype);
}
return RegexJavascript;
}
ex$.$init$RegexJavascript=$init$RegexJavascript;
$init$RegexJavascript();


function Regex(expression,global,ignoreCase,multiLine,regex$){
$init$Regex();
if(regex$===undefined)m$1.throwexc(m$1.InvocationException$meta$model("Cannot instantiate abstract class ceylon.regex::Regex"),'?','?')
regex$.expression_=expression;
if(global===undefined){global=$init$Regex().$defs$global(regex$,expression,ignoreCase,multiLine);}
regex$.global_=global;
if(ignoreCase===undefined){ignoreCase=$init$Regex().$defs$ignoreCase(regex$,expression,global,multiLine);}
regex$.ignoreCase_=ignoreCase;
if(multiLine===undefined){multiLine=$init$Regex().$defs$multiLine(regex$,expression,global,ignoreCase);}
regex$.multiLine_=multiLine;
regex$.$_split$defs$limit=function($4x5,$4x6){return (-1);};
return regex$;
}
Regex.$defs$global=function(regex$,expression,ignoreCase,multiLine){return false};Regex.$defs$ignoreCase=function(regex$,expression,global,multiLine){return false};Regex.$defs$multiLine=function(regex$,expression,global,ignoreCase){return false};Regex.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'expression',mt:'prm',$t:{t:m$1.$_String},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.regex:Regex:$at:expression')];}},{nm:'global',mt:'prm',def:1,$t:{t:m$1.$_Boolean},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.regex:Regex:$at:global')];}},{nm:'ignoreCase',mt:'prm',def:1,$t:{t:m$1.$_Boolean},pa:1,an:function(){return[m$1.doc("For case-insensitive matching")];}},{nm:'multiLine',mt:'prm',def:1,$t:{t:m$1.$_Boolean},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.regex:Regex:$at:multiLine')];}}],pa:273,an:function(){return[m$1.doc$($CCMM$,'ceylon.regex:Regex'),m$1.$_throws(m$1.openClass$jsint(m$1.lmp$(ex$,'ceylon.regex'),RegexException))];},d:['ceylon.regex','Regex']};};
ex$.Regex=Regex;
function $init$Regex(){
if(Regex.$$===undefined){
m$1.initTypeProto(Regex,'ceylon.regex::Regex',m$1.Basic);
(function(regex$){
m$1.atr$(regex$,'expression',function(){return this.expression_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:Regex,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.regex:Regex:$at:expression')];},d:['ceylon.regex','Regex','$at','expression']};});
m$1.atr$(regex$,'global',function(){return this.global_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},$cont:Regex,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.regex:Regex:$at:global')];},d:['ceylon.regex','Regex','$at','global']};});
m$1.atr$(regex$,'ignoreCase',function(){return this.ignoreCase_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},$cont:Regex,pa:1,an:function(){return[m$1.doc("For case-insensitive matching")];},d:['ceylon.regex','Regex','$at','ignoreCase']};});
m$1.atr$(regex$,'multiLine',function(){return this.multiLine_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},$cont:Regex,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.regex:Regex:$at:multiLine')];},d:['ceylon.regex','Regex','$at','multiLine']};});
regex$.$prop$getLastIndex={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:Regex,pa:1029,an:function(){return[m$1.doc$($CCMM$,'ceylon.regex:Regex:$at:lastIndex')];},d:['ceylon.regex','Regex','$at','lastIndex']};}};
regex$.find={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:MatchResult}]},ps:[{nm:'input',mt:'prm',$t:{t:m$1.$_String}}],$cont:Regex,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.regex:Regex:$m:find')];},d:['ceylon.regex','Regex','$m','find']};}};regex$.findAll=function($4x7){
var regex$=this;
if(regex$.global){
var $4x8=m$1.empty();
var $4x9=regex$.find($4x7);
var $4xa;
while(m$1.nn$(($4xa=$4x9))){
$4x8=$4x8.withTrailing($4xa,{Other$withTrailing:{t:MatchResult}});
$4x9=regex$.find($4x7);
}
return $4x8;
}
else{
return regex(regex$.expression,true,regex$.ignoreCase,regex$.multiLine).findAll($4x7);
}
};regex$.findAll.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Sequential,a:{Element$Sequential:{t:MatchResult}}},ps:[{nm:'input',mt:'prm',$t:{t:m$1.$_String}}],$cont:Regex,pa:9,an:function(){return[m$1.doc$($CCMM$,'ceylon.regex:Regex:$m:findAll')];},d:['ceylon.regex','Regex','$m','findAll']};};
regex$.$_split={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Sequential,a:{Element$Sequential:{t:m$1.$_String}}},ps:[{nm:'input',mt:'prm',$t:{t:m$1.$_String}},{nm:'limit',mt:'prm',def:1,$t:{t:m$1.Integer}}],$cont:Regex,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.regex:Regex:$m:split')];},d:['ceylon.regex','Regex','$m','split']};}};regex$.test=function($4xb){
var regex$=this;
return m$1.nn$(regex$.find($4xb));
};regex$.test.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'input',mt:'prm',$t:{t:m$1.$_String}}],$cont:Regex,pa:9,an:function(){return[m$1.doc$($CCMM$,'ceylon.regex:Regex:$m:test')];},d:['ceylon.regex','Regex','$m','test']};};
regex$.$_replace={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_String},ps:[{nm:'input',mt:'prm',$t:{t:m$1.$_String}},{nm:'replacement',mt:'prm',$t:{t:m$1.$_String}}],$cont:Regex,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.regex:Regex:$m:replace')];},d:['ceylon.regex','Regex','$m','replace']};}};
})(Regex.$$.prototype);
}
return Regex;
}
ex$.$init$Regex=$init$Regex;
$init$Regex();
function MatchResult(start,end,matched,groups,matchResult$){
$init$MatchResult();
if(matchResult$===undefined)matchResult$=new MatchResult.$$;
matchResult$.start_=start;
matchResult$.end_=end;
matchResult$.matched_=matched;
matchResult$.groups_=groups;
return matchResult$;
}
MatchResult.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'start',mt:'prm',$t:{t:m$1.Integer},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.regex:MatchResult:$at:start')];}},{nm:'end',mt:'prm',$t:{t:m$1.Integer},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.regex:MatchResult:$at:end')];}},{nm:'matched',mt:'prm',$t:{t:m$1.$_String},pa:1,an:function(){return[m$1.doc("The matched string")];}},{nm:'groups',mt:'prm',$t:{t:m$1.Sequential,a:{Element$Sequential:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}}},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.regex:MatchResult:$at:groups')];}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.regex:MatchResult')];},d:['ceylon.regex','MatchResult']};};
ex$.MatchResult=MatchResult;
function $init$MatchResult(){
if(MatchResult.$$===undefined){
m$1.initTypeProto(MatchResult,'ceylon.regex::MatchResult',m$1.Basic);
(function(matchResult$){
m$1.atr$(matchResult$,'start',function(){return this.start_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:MatchResult,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.regex:MatchResult:$at:start')];},d:['ceylon.regex','MatchResult','$at','start']};});
m$1.atr$(matchResult$,'end',function(){return this.end_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:MatchResult,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.regex:MatchResult:$at:end')];},d:['ceylon.regex','MatchResult','$at','end']};});
m$1.atr$(matchResult$,'matched',function(){return this.matched_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:MatchResult,pa:1,an:function(){return[m$1.doc("The matched string")];},d:['ceylon.regex','MatchResult','$at','matched']};});
m$1.atr$(matchResult$,'groups',function(){return this.groups_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Sequential,a:{Element$Sequential:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}}},$cont:MatchResult,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.regex:MatchResult:$at:groups')];},d:['ceylon.regex','MatchResult','$at','groups']};});
m$1.atr$(matchResult$,'string',function(){
var matchResult$=this;
return "MatchResult[".plus(matchResult$.start.string).plus("-").plus(matchResult$.end.string).plus(" \'").plus(matchResult$.matched).plus("\' ").plus(matchResult$.groups.string).plus("]");
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:MatchResult,pa:3,d:['ceylon.regex','MatchResult','$at','string']};});
})(MatchResult.$$.prototype);
}
return MatchResult;
}
ex$.$init$MatchResult=$init$MatchResult;
$init$MatchResult();
function RegexException($bn8c5v$4xd,$bn8c5v$4xe,regexException$){
$init$RegexException();
if(regexException$===undefined)regexException$=new RegexException.$$;
if($bn8c5v$4xd===undefined){$bn8c5v$4xd=$init$RegexException().$defs$description(regexException$,$bn8c5v$4xe);}
regexException$.$bn8c5v$4xd_=$bn8c5v$4xd;
if($bn8c5v$4xe===undefined){$bn8c5v$4xe=$init$RegexException().$defs$cause(regexException$,$bn8c5v$4xd);}
regexException$.$bn8c5v$4xe_=$bn8c5v$4xe;
m$1.Exception($bn8c5v$4xd,$bn8c5v$4xe,regexException$);
return regexException$;
}
RegexException.$defs$description=function(regexException$,$bn8c5v$4xe){return null};RegexException.$defs$cause=function(regexException$,$bn8c5v$4xd){return null};RegexException.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Exception},ps:[{nm:'description',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'cause',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Throwable}]}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.regex:RegexException')];},d:['ceylon.regex','RegexException']};};
ex$.RegexException=RegexException;
function $init$RegexException(){
if(RegexException.$$===undefined){
m$1.initTypeProto(RegexException,'ceylon.regex::RegexException',m$1.Exception);
(function(regexException$){
m$1.atr$(regexException$,'$bn8c5v$4xd',function(){return this.$bn8c5v$4xd_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:RegexException,d:['ceylon.regex','RegexException','$at','description$ofnzih']};});
m$1.atr$(regexException$,'$bn8c5v$4xe',function(){return this.$bn8c5v$4xe_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Throwable}]},$cont:RegexException,d:['ceylon.regex','RegexException','$at','cause$vriy58']};});
})(RegexException.$$.prototype);
}
return RegexException;
}
ex$.$init$RegexException=$init$RegexException;
$init$RegexException();
function quote($4xf){
var $4xg=m$1.StringBuilder();
var $4xi;for(var $4xh=$4xf.iterator();($4xi=$4xh.next())!==m$1.finished();){
if(m$1.$cnt$("\\^$*+?.()|[]{}",$4xi)){
$4xg.append("\\");
}
$4xg.append($4xi.string);
}
return $4xg.string;
}
ex$.quote=quote;
quote.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_String},ps:[{nm:'input',mt:'prm',$t:{t:m$1.$_String}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.regex:quote')];},d:['ceylon.regex','quote']};};
function regex($4xj,$4xk,$4xl,$4xm){
if($4xk===undefined){$4xk=false;}
if($4xl===undefined){$4xl=false;}
if($4xm===undefined){$4xm=false;}
return RegexJavascript($4xj,$4xk,$4xl,$4xm);
}
ex$.regex=regex;
regex.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Regex},ps:[{nm:'expression',mt:'prm',$t:{t:m$1.$_String}},{nm:'global',mt:'prm',def:1,$t:{t:m$1.$_Boolean}},{nm:'ignoreCase',mt:'prm',def:1,$t:{t:m$1.$_Boolean}},{nm:'multiLine',mt:'prm',def:1,$t:{t:m$1.$_Boolean}}],pa:1,an:function(){return[m$1.$_native(m$1.$arr$sa$(["js"],{t:m$1.$_String}))];},d:['ceylon.regex','regex']};};
ex$.$pkg$ans$ceylon$regex=function(){return[m$1.shared()];};
ex$.$pkgunsh$ceylon$regex={'RegexJavascript':RegexJavascript};
});
}(typeof define==='function' && define.amd ? define : function (factory) {
if (typeof exports!=='undefined') { factory(require, exports, module);
} else { throw 'no module loader'; }
}));
