(function(define) { define(function(require, ex$, module) {
var $$req$ = require; require = (typeof $$ceylon$require == 'undefined') ? $$req$ : function() { return $$ceylon$require('ceylon/regex/1.3.0/ceylon.regex-1.3.0', $$req$, Array.prototype.slice.call(arguments)); }

var _CTM$;function $CCMM$(){if (_CTM$===undefined)_CTM$=require('ceylon/regex/1.3.0/ceylon.regex-1.3.0-model').$CCMM$;return _CTM$;}
ex$.$CCMM$=$CCMM$;
var m$1=require('ceylon/language/1.3.0/ceylon.language-1.3.0');
m$1.$addmod$(m$1,'ceylon.language/1.3.0');
m$1.$addmod$(ex$,'ceylon.regex/1.3.0');
ex$.$mod$ans$=function(){return[m$1.doc$($CCMM$,'','$mod-anns'),m$1.by(m$1.$arr$sa$(["Tako Schotanus"],{t:m$1.$_String})),m$1.license("Apache Software License 2.0")];};
ex$.$mod$imps=function(){return{
'java.base/7':function(){return[m$1.$_native(m$1.$arr$sa$(["jvm"],{t:m$1.$_String}))];},
'ceylon.interop.java/1.3.0':function(){return[m$1.$_native(m$1.$arr$sa$(["jvm"],{t:m$1.$_String}))];}
};};
function RegexJavascript($bn8c5v$4w9,$bn8c5v$4wa,$bn8c5v$4wb,$bn8c5v$4wc,regexJavascript$){
$init$RegexJavascript();
if(regexJavascript$===undefined)regexJavascript$=new RegexJavascript.$$;
regexJavascript$.$bn8c5v$4w9_=$bn8c5v$4w9;
if($bn8c5v$4wa===undefined){$bn8c5v$4wa=$init$RegexJavascript().$defs$global(regexJavascript$,$bn8c5v$4w9,$bn8c5v$4wb,$bn8c5v$4wc);}
regexJavascript$.$bn8c5v$4wa_=$bn8c5v$4wa;
if($bn8c5v$4wb===undefined){$bn8c5v$4wb=$init$RegexJavascript().$defs$ignoreCase(regexJavascript$,$bn8c5v$4w9,$bn8c5v$4wa,$bn8c5v$4wc);}
regexJavascript$.$bn8c5v$4wb_=$bn8c5v$4wb;
if($bn8c5v$4wc===undefined){$bn8c5v$4wc=$init$RegexJavascript().$defs$multiLine(regexJavascript$,$bn8c5v$4w9,$bn8c5v$4wa,$bn8c5v$4wb);}
regexJavascript$.$bn8c5v$4wc_=$bn8c5v$4wc;
Regex($bn8c5v$4w9,regexJavascript$.$bn8c5v$4wa,regexJavascript$.$bn8c5v$4wb,regexJavascript$.$bn8c5v$4wc,regexJavascript$);
try{
regexJavascript$.$bn8c5v$4wd=(typeof RegExp==='undefined'||RegExp===null?m$1.throwexc(m$1.Exception("Undefined or null reference: RegExp"),'32:17-32:22','regexpjs.ceylon'):RegExp)($bn8c5v$4w9,regexJavascript$.$bn8c5v$4we);
}
catch($4wf){
if(!m$1.is$(($4wf=$4wf),{t:m$1.Throwable}))$4wf=m$1.NatErr($4wf);
if(m$1.is$($4wf,{t:m$1.Throwable})){
throw m$1.wrapexc(RegexException("Problem found within regular expression",$4wf),'34:12-34:79','ceylon/regex/regexpjs.ceylon');
}else{throw $4wf}
}
return regexJavascript$;
}
RegexJavascript.$defs$global=function(regexJavascript$,$bn8c5v$4w9,$bn8c5v$4wb,$bn8c5v$4wc){return false};RegexJavascript.$defs$ignoreCase=function(regexJavascript$,$bn8c5v$4w9,$bn8c5v$4wa,$bn8c5v$4wc){return false};RegexJavascript.$defs$multiLine=function(regexJavascript$,$bn8c5v$4w9,$bn8c5v$4wa,$bn8c5v$4wb){return false};RegexJavascript.$crtmm$=function(){return{mod:$CCMM$,'super':{t:Regex},ps:[{nm:'expression',mt:'prm',$t:{t:m$1.$_String}},{nm:'global',mt:'prm',def:1,$t:{t:m$1.$_Boolean}},{nm:'ignoreCase',mt:'prm',def:1,$t:{t:m$1.$_Boolean}},{nm:'multiLine',mt:'prm',def:1,$t:{t:m$1.$_Boolean}}],an:function(){return[m$1.$_native(m$1.$arr$sa$(["js"],{t:m$1.$_String}))];},d:['ceylon.regex','RegexJavascript']};};
ex$.RegexJavascript=RegexJavascript;
function $init$RegexJavascript(){
if(RegexJavascript.$$===undefined){
m$1.initTypeProto(RegexJavascript,'ceylon.regex::RegexJavascript',$init$Regex());
(function(regexJavascript$){
m$1.atr$(regexJavascript$,'$bn8c5v$4w9',function(){return this.$bn8c5v$4w9_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:RegexJavascript,d:['ceylon.regex','RegexJavascript','$at','expression$hltzxb']};});
m$1.atr$(regexJavascript$,'$bn8c5v$4wa',function(){return this.$bn8c5v$4wa_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},$cont:RegexJavascript,d:['ceylon.regex','RegexJavascript','$at','global$nn5alu']};});
m$1.atr$(regexJavascript$,'$bn8c5v$4wb',function(){return this.$bn8c5v$4wb_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},$cont:RegexJavascript,d:['ceylon.regex','RegexJavascript','$at','ignoreCase$3y242h']};});
m$1.atr$(regexJavascript$,'$bn8c5v$4wc',function(){return this.$bn8c5v$4wc_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},$cont:RegexJavascript,d:['ceylon.regex','RegexJavascript','$at','multiLine$hjyt10']};});
m$1.atr$(regexJavascript$,'$bn8c5v$4we',function(){
var regexJavascript$=this;
return ($4wg=(regexJavascript$.$bn8c5v$4wa?"g":null),m$1.nn$($4wg)?$4wg:"").plus(($4wh=(regexJavascript$.$bn8c5v$4wb?"i":null),m$1.nn$($4wh)?$4wh:"")).plus(($4wi=(regexJavascript$.$bn8c5v$4wc?"m":null),m$1.nn$($4wi)?$4wi:""));
var $4wg,$4wh,$4wi;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:RegexJavascript,d:['ceylon.regex','RegexJavascript','$at','jsflags$8bqmb9']};});
m$1.atr$(regexJavascript$,'lastIndex',function(){
var regexJavascript$=this;
return m$1.ndnc$(regexJavascript$.$bn8c5v$4wd.lastIndex,'i','regexpjs.ceylon 40:19-40:30');
},function($4wj){
var regexJavascript$=this;
regexJavascript$.$bn8c5v$4wd.lastIndex=$4wj;
},function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:RegexJavascript,pa:1027,d:['ceylon.regex','RegexJavascript','$at','lastIndex']};},function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$cont:RegexJavascript,d:['ceylon.regex','RegexJavascript','$at','lastIndex','$set']};});regexJavascript$.find=function($4wk){
var regexJavascript$=this;
var $4wl=regexJavascript$.$bn8c5v$4wd.exec($4wk);
var $4wm;
if(m$1.nn$(($4wm=$4wl))){
var $4wn=$4wm.index;
var $4wo=($4wp=$4wm.index,$4wq=$4wm[0].size,(m$1.nn$($4wp)&&$4wp.plus&&$4wp.plus($4wq))||$4wp+$4wq);
var $4wr=$4wm[0];
$4wm.shift();
var $4ws=m$1.empty();
var $4wv=$4wm;for(var $4wt=0;$4wt<$4wv.length;$4wt++){var $4wu=$4wv[$4wt];$4ws=$4ws.append(m$1.tpl$([$4wu]),{Other$append:m$1.mut$([{t:m$1.Null},{t:m$1.$_String}])});
}
return MatchResult(m$1.ndnc$($4wn,'i','regexpjs.ceylon 62:35-62:39'),m$1.ndnc$($4wo,'i','regexpjs.ceylon 62:42-62:44'),m$1.ndtc$($4wr,{t:m$1.$_String},'regexpjs.ceylon 62:47-62:53'),$4ws);
}
else{
return null;
}
};regexJavascript$.find.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:MatchResult}]},ps:[{nm:'input',mt:'prm',$t:{t:m$1.$_String}}],$cont:RegexJavascript,pa:3,d:['ceylon.regex','RegexJavascript','$m','find']};};
regexJavascript$.$_split=function($4ww,$4wx){
var regexJavascript$=this;
if($4wx===undefined){$4wx=regexJavascript$.$_split$defs$limit($4ww,$4wx);}
var $4wy=m$1.empty();
var $4wz=$4ww;
var $4x0=(($4wx>=0)?$4wz.split(regexJavascript$.$bn8c5v$4wd,$4wx):$4wz.split(regexJavascript$.$bn8c5v$4wd));
var $4x3=$4x0;for(var $4x1=0;$4x1<$4x3.length;$4x1++){var $4x2=$4x3[$4x1];$4wy=$4wy.append(m$1.tpl$([$4x2]),{Other$append:{t:m$1.$_String}});
}
return $4wy;
};regexJavascript$.$_split.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Sequential,a:{Element$Sequential:{t:m$1.$_String}}},ps:[{nm:'input',mt:'prm',$t:{t:m$1.$_String}},{nm:'limit',mt:'prm',def:1,$t:{t:m$1.Integer}}],$cont:RegexJavascript,pa:3,d:['ceylon.regex','RegexJavascript','$m','split']};};
regexJavascript$.$_replace=function($4x4,$4x5){
var regexJavascript$=this;
var $4x6=$4x4;
var $4x7=$4x5;
var $4x8=$4x6.replace(regexJavascript$.$bn8c5v$4wd,$4x7,regexJavascript$.$bn8c5v$4we);
return m$1.ndtc$($4x8,{t:m$1.$_String},'regexpjs.ceylon 90:19-90:24');
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
regex$.$_split$defs$limit=function($4x9,$4xa){return (-1);};
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
regex$.find={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:MatchResult}]},ps:[{nm:'input',mt:'prm',$t:{t:m$1.$_String}}],$cont:Regex,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.regex:Regex:$m:find')];},d:['ceylon.regex','Regex','$m','find']};}};regex$.findAll=function($4xb){
var regex$=this;
if(regex$.global){
var $4xc=m$1.empty();
var $4xd=regex$.find($4xb);
var $4xe;
while(m$1.nn$(($4xe=$4xd))){
$4xc=$4xc.withTrailing($4xe,{Other$withTrailing:{t:MatchResult}});
$4xd=regex$.find($4xb);
}
return $4xc;
}
else{
return regex(regex$.expression,true,regex$.ignoreCase,regex$.multiLine).findAll($4xb);
}
};regex$.findAll.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Sequential,a:{Element$Sequential:{t:MatchResult}}},ps:[{nm:'input',mt:'prm',$t:{t:m$1.$_String}}],$cont:Regex,pa:9,an:function(){return[m$1.doc$($CCMM$,'ceylon.regex:Regex:$m:findAll')];},d:['ceylon.regex','Regex','$m','findAll']};};
regex$.$_split={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Sequential,a:{Element$Sequential:{t:m$1.$_String}}},ps:[{nm:'input',mt:'prm',$t:{t:m$1.$_String}},{nm:'limit',mt:'prm',def:1,$t:{t:m$1.Integer}}],$cont:Regex,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.regex:Regex:$m:split')];},d:['ceylon.regex','Regex','$m','split']};}};regex$.test=function($4xf){
var regex$=this;
return m$1.nn$(regex$.find($4xf));
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
function RegexException($bn8c5v$4xh,$bn8c5v$4xi,regexException$){
$init$RegexException();
if(regexException$===undefined)regexException$=new RegexException.$$;
if($bn8c5v$4xh===undefined){$bn8c5v$4xh=$init$RegexException().$defs$description(regexException$,$bn8c5v$4xi);}
regexException$.$bn8c5v$4xh_=$bn8c5v$4xh;
if($bn8c5v$4xi===undefined){$bn8c5v$4xi=$init$RegexException().$defs$cause(regexException$,$bn8c5v$4xh);}
regexException$.$bn8c5v$4xi_=$bn8c5v$4xi;
m$1.Exception($bn8c5v$4xh,$bn8c5v$4xi,regexException$);
return regexException$;
}
RegexException.$defs$description=function(regexException$,$bn8c5v$4xi){return null};RegexException.$defs$cause=function(regexException$,$bn8c5v$4xh){return null};RegexException.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Exception},ps:[{nm:'description',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]}},{nm:'cause',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Throwable}]}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.regex:RegexException')];},d:['ceylon.regex','RegexException']};};
ex$.RegexException=RegexException;
function $init$RegexException(){
if(RegexException.$$===undefined){
m$1.initTypeProto(RegexException,'ceylon.regex::RegexException',m$1.Exception);
(function(regexException$){
m$1.atr$(regexException$,'$bn8c5v$4xh',function(){return this.$bn8c5v$4xh_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_String}]},$cont:RegexException,d:['ceylon.regex','RegexException','$at','description$ofnzih']};});
m$1.atr$(regexException$,'$bn8c5v$4xi',function(){return this.$bn8c5v$4xi_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Throwable}]},$cont:RegexException,d:['ceylon.regex','RegexException','$at','cause$vriy58']};});
})(RegexException.$$.prototype);
}
return RegexException;
}
ex$.$init$RegexException=$init$RegexException;
$init$RegexException();
function quote($4xj){
var $4xk=m$1.StringBuilder();
var $4xm;for(var $4xl=$4xj.iterator();($4xm=$4xl.next())!==m$1.finished();){
if(m$1.$cnt$("\\^$*+?.()|[]{}",$4xm)){
$4xk.append("\\");
}
$4xk.append($4xm.string);
}
return $4xk.string;
}
ex$.quote=quote;
quote.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_String},ps:[{nm:'input',mt:'prm',$t:{t:m$1.$_String}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.regex:quote')];},d:['ceylon.regex','quote']};};
function regex($4xn,$4xo,$4xp,$4xq){
if($4xo===undefined){$4xo=false;}
if($4xp===undefined){$4xp=false;}
if($4xq===undefined){$4xq=false;}
return RegexJavascript($4xn,$4xo,$4xp,$4xq);
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
