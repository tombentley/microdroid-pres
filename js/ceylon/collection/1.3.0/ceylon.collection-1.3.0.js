(function(define) { define(function(require, ex$, module) {
var $$req$ = require; require = (typeof $$ceylon$require == 'undefined') ? $$req$ : function() { return $$ceylon$require('ceylon/collection/1.3.0/ceylon.collection-1.3.0', $$req$, Array.prototype.slice.call(arguments)); }

var _CTM$;function $CCMM$(){if (_CTM$===undefined)_CTM$=require('ceylon/collection/1.3.0/ceylon.collection-1.3.0-model').$CCMM$;return _CTM$;}
ex$.$CCMM$=$CCMM$;
var m$1=require('ceylon/language/1.3.0/ceylon.language-1.3.0');
m$1.$addmod$(m$1,'ceylon.language/1.3.0');
m$1.$addmod$(ex$,'ceylon.collection/1.3.0');
ex$.$mod$ans$=function(){return[m$1.doc$($CCMM$,'','$mod-anns'),m$1.by(m$1.$arr$sa$(["St\u00e9phane \u00c9pardaud"],{t:m$1.$_String})),m$1.license("Apache Software License")];};
function SingletonSet(element,$$targs$$,singletonSet$){
$init$SingletonSet();
if(singletonSet$===undefined)singletonSet$=new SingletonSet.$$;
m$1.set_type_args(singletonSet$,$$targs$$);
singletonSet$.element_=element;
m$1.Set({Element$Set:$$targs$$.Element$SingletonSet/*ORALE!Element inv pero Element var*/},singletonSet$);
return singletonSet$;
}
SingletonSet.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'element',mt:'prm',$t:'Element$SingletonSet',pa:1}],tp:{Element$SingletonSet:{sts:[{t:m$1.$_Object}]}},sts:[{t:m$1.Set,a:{Element$Set:'Element$SingletonSet'}}],pa:2049,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:SingletonSet'),m$1.see(m$1.$arr$sa$([m$1.openClass$jsint(m$1.lmp$(ex$,'ceylon.collection'),SingletonMap),m$1.openClass$jsint(m$1.fmp$('ceylon.language','1.3.0','$'),m$1.Singleton)],{t:m$1.ClassWithInitializerDeclaration$meta$declaration}))];},d:['ceylon.collection','SingletonSet']};};
ex$.SingletonSet=SingletonSet;
function $init$SingletonSet(){
if(SingletonSet.$$===undefined){
m$1.initTypeProto(SingletonSet,'ceylon.collection::SingletonSet',m$1.Basic,m$1.Set);
(function(singletonSet$){
m$1.atr$(singletonSet$,'element',function(){return this.element_;},undefined,function(){return{mod:$CCMM$,$t:'Element$SingletonSet',$cont:SingletonSet,pa:1,d:['ceylon.collection','SingletonSet','$at','element']};});
singletonSet$.contains=function($sh){var singletonSet$=this;
return m$1.$eq$(singletonSet$.element,$sh);
};singletonSet$.complement=function($si,$4ycb5n$){var singletonSet$=this;
return ($sj=(m$1.$cnt$($si,singletonSet$.element)?m$1.emptySet():null),m$1.nn$($sj)?$sj:singletonSet$);
var $sj;
};
singletonSet$.complement.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Set,a:{Element$Set:'Element$SingletonSet'}},ps:[{nm:'set',mt:'prm',$t:{t:m$1.Set,a:{Element$Set:'Other$complement'}}}],$cont:SingletonSet,tp:{Other$complement:{sts:[{t:m$1.$_Object}]}},pa:3,d:['ceylon.collection','SingletonSet','$m','complement']};};
singletonSet$.intersection=function($sk,$b7yrl4$){
var singletonSet$=this;
var $sl;
if(m$1.is$(($sl=singletonSet$.element),$b7yrl4$.Other$intersection,$b7yrl4$)&&m$1.$cnt$($sk,$sl)){
return SingletonSet($sl,{Element$SingletonSet:m$1.mit$([singletonSet$.$$targs$$.Element$SingletonSet,$b7yrl4$.Other$intersection])});
}
else{
return m$1.emptySet();
}
};singletonSet$.intersection.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Set,a:{Element$Set:{t:'i',l:['Element$SingletonSet','Other$intersection']}}},ps:[{nm:'set',mt:'prm',$t:{t:m$1.Set,a:{Element$Set:'Other$intersection'}}}],$cont:SingletonSet,tp:{Other$intersection:{sts:[{t:m$1.$_Object}]}},pa:3,d:['ceylon.collection','SingletonSet','$m','intersection']};};
singletonSet$.union=function($sm,$t5idbk$){
var singletonSet$=this;
var $sn=HashSet(undefined,undefined,undefined,{Element$HashSet:m$1.mut$([singletonSet$.$$targs$$.Element$SingletonSet,$t5idbk$.Other$union])});
$sn.addAll($sm);
$sn.add(singletonSet$.element);
return UnmodifiableSet($sn,{Element$UnmodifiableSet:m$1.mut$([singletonSet$.$$targs$$.Element$SingletonSet,$t5idbk$.Other$union])});
};singletonSet$.union.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Set,a:{Element$Set:{t:'u',l:['Element$SingletonSet','Other$union']}}},ps:[{nm:'set',mt:'prm',$t:{t:m$1.Set,a:{Element$Set:'Other$union'}}}],$cont:SingletonSet,tp:{Other$union:{sts:[{t:m$1.$_Object}]}},pa:3,d:['ceylon.collection','SingletonSet','$m','union']};};
singletonSet$.exclusiveUnion=function($so,$xiti9c$){
var singletonSet$=this;
var $sp=HashSet(undefined,undefined,undefined,{Element$HashSet:m$1.mut$([singletonSet$.$$targs$$.Element$SingletonSet,$xiti9c$.Other$exclusiveUnion])});
$sp.addAll($so);
if(m$1.$cnt$($so,singletonSet$.element)){
$sp.remove(singletonSet$.element);
}
else{
$sp.add(singletonSet$.element);
}
return UnmodifiableSet($sp,{Element$UnmodifiableSet:m$1.mut$([singletonSet$.$$targs$$.Element$SingletonSet,$xiti9c$.Other$exclusiveUnion])});
};singletonSet$.exclusiveUnion.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Set,a:{Element$Set:{t:'u',l:['Element$SingletonSet','Other$exclusiveUnion']}}},ps:[{nm:'set',mt:'prm',$t:{t:m$1.Set,a:{Element$Set:'Other$exclusiveUnion'}}}],$cont:SingletonSet,tp:{Other$exclusiveUnion:{sts:[{t:m$1.$_Object}]}},pa:3,d:['ceylon.collection','SingletonSet','$m','exclusiveUnion']};};
singletonSet$.iterator=function(){var singletonSet$=this;
return m$1.Singleton(singletonSet$.element,{Element$Singleton:singletonSet$.$$targs$$.Element$SingletonSet/*ORALE!Element inv pero Element var*/}).iterator();
};singletonSet$.equals=function($sq){var singletonSet$=this;
return singletonSet$.getT$all()['ceylon.language::Set'].$$.prototype.equals.call(singletonSet$,$sq);
};m$1.atr$(singletonSet$,'hash',function(){
var singletonSet$=this;
return m$1.attrGetter(singletonSet$.getT$all()['ceylon.language::Set'],'hash').call(this);
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:SingletonSet,pa:3,d:['ceylon.collection','SingletonSet','$at','hash']};});
singletonSet$.each=function($sr){var singletonSet$=this;
return $sr(singletonSet$.element);
};singletonSet$.clone=function(){var singletonSet$=this;
return singletonSet$;
};
singletonSet$.clone.$crtmm$=function(){return{mod:$CCMM$,$t:{t:SingletonSet,a:{Element$SingletonSet:'Element$SingletonSet'}},ps:[],$cont:SingletonSet,pa:3,d:['ceylon.collection','SingletonSet','$m','clone']};};
})(SingletonSet.$$.prototype);
}
return SingletonSet;
}
ex$.$init$SingletonSet=$init$SingletonSet;
$init$SingletonSet();
SingletonSet.inst$$=function($ss){
var singletonSet$=new SingletonSet.$$;
m$1.set_type_args(singletonSet$,{Element$SingletonSet:$ss.$$targs$$.Type$Class.a.Element$SingletonSet});
m$1.set_type_args(singletonSet$,{Element$Set:singletonSet$.$$targs$$.Element$SingletonSet,Element$Collection:singletonSet$.$$targs$$.Element$SingletonSet,Element$Iterable:singletonSet$.$$targs$$.Element$SingletonSet,Absent$Iterable:{t:m$1.Null},Element$Category:{t:m$1.$_Object}});
return singletonSet$;
};
SingletonSet.ser$get$=function(ref,o){var n=ref.attribute.qualifiedName;if(n==='ceylon.collection::SingletonSet.element')return o.element_;
else throw new TypeError('unknown attribute');
};
SingletonSet.ser$set$=function(ref,o,i){if(!m$1.is$(ref,{t:m$1.Member$serialization}))throw m$1.AssertionError('unexpected reachable reference');var n=ref.attribute.qualifiedName;
if(n==='ceylon.collection::SingletonSet.element')o.element_=i;
else throw new TypeError('unknown attribute');
};
SingletonSet.ser$refs$=function(o){return [m$1.MemberImpl$impl(m$1.OpenValue$jsint(m$1.lmp$(ex$,'ceylon.collection'),o.$prop$getElement))];
};
function invert($st,$av0mdq$){
var $su=HashMap(undefined,undefined,undefined,{Key$HashMap:$av0mdq$.Item$invert,Item$HashMap:{t:ArrayList,a:{Element$ArrayList:$av0mdq$.Key$invert}}});
var $sw;for(var $sv=$st.iterator();($sw=$sv.next())!==m$1.finished();){
var $sx=$sw.key,$sy=$sw.item;
var $sz;
if(m$1.nn$(($sz=$su.$_get($sy)))){
$sz.add($sx);
}
else{
var $t0=ArrayList(undefined,undefined,undefined,{Element$ArrayList:$av0mdq$.Key$invert});
$t0.add($sx);
$su.put($sy,$t0);
}
}
function $t1($t2,$t3){
var $t4;
m$1.asrt$((m$1.is$(($t4=$t3.sequence()),{t:m$1.Sequence,a:{Element$Sequence:$av0mdq$.Key$invert/*ORALE!Key inv pero Element var*/}})),"Assertion failed: \'is [Key+] result = sa.sequence()\' at invert.ceylon (21:14-21:47)",'21:8-21:48','invert.ceylon');
return $t4;
};$t1.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Sequence,a:{Element$Sequence:$av0mdq$.Key$invert}},ps:[{nm:'item',mt:'prm',$t:$av0mdq$.Item$invert},{nm:'sa',mt:'prm',$t:{t:ArrayList,a:{Element$ArrayList:$av0mdq$.Key$invert}}}],$cont:invert,d:['ceylon.collection','invert','$m','mapping$ii3181']};};
return $su.mapItems(m$1.jsc$3(0,$t1),{Result$mapItems:{t:m$1.Sequence,a:{Element$Sequence:$av0mdq$.Key$invert/*ORALE!Key inv pero Element var*/}}});
};invert.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Map,a:{Key$Map:'Item$invert',Item$Map:{t:m$1.Sequence,a:{Element$Sequence:'Key$invert'}}}},ps:[{nm:'map',mt:'prm',$t:{t:m$1.Map,a:{Key$Map:'Key$invert',Item$Map:'Item$invert'}}}],tp:{Key$invert:{sts:[{t:m$1.$_Object}]},Item$invert:{sts:[{t:m$1.$_Object}]}},an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:invert')];},d:['ceylon.collection','invert']};};
function SortedMap($$targs$$,sortedMap$){
m$1.set_type_args(sortedMap$,$$targs$$,SortedMap);
m$1.Ranged({Subrange$Ranged:{t:SortedMap,a:{Key$SortedMap:$$targs$$.Key$SortedMap,Item$SortedMap:$$targs$$.Item$SortedMap}},Index$Ranged:$$targs$$.Key$SortedMap/*ORALE!Key inv pero Index var*/,Element$Ranged:{t:m$1.Entry,a:{Item$Entry:$$targs$$.Item$SortedMap,Key$Entry:$$targs$$.Key$SortedMap/*ORALE!Key inv pero Key var*/}}},sortedMap$);
m$1.Map({Key$Map:$$targs$$.Key$SortedMap/*ORALE!Key inv pero Key var*/,Item$Map:$$targs$$.Item$SortedMap},sortedMap$);
}
SortedMap.$crtmm$=function(){return{mod:$CCMM$,tp:{Key$SortedMap:{sts:[{t:m$1.$_Object}]},Item$SortedMap:{dv:'out'}},sts:[{t:m$1.Map,a:{Key$Map:'Key$SortedMap',Item$Map:'Item$SortedMap'}},{t:m$1.Ranged,a:{Subrange$Ranged:{t:SortedMap,a:{Key$SortedMap:'Key$SortedMap',Item$SortedMap:'Item$SortedMap'}},Index$Ranged:'Key$SortedMap',Element$Ranged:{t:m$1.Entry,a:{Item$Entry:'Item$SortedMap',Key$Entry:'Key$SortedMap'}}}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:SortedMap'),m$1.by(m$1.$arr$sa$(["Gavin King"],{t:m$1.$_String}))];},d:['ceylon.collection','SortedMap']};};
ex$.SortedMap=SortedMap;
function $init$SortedMap(){
if(SortedMap.$$===undefined){
m$1.initTypeProtoI(SortedMap,'ceylon.collection::SortedMap',m$1.Ranged,m$1.Map);
(function(sortedMap$){
sortedMap$.higherEntries={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Iterable,a:{Element$Iterable:{t:m$1.Entry,a:{Item$Entry:'Item$SortedMap',Key$Entry:'Key$SortedMap'}},Absent$Iterable:{t:m$1.Null}}},ps:[{nm:'key',mt:'prm',$t:'Key$SortedMap'}],$cont:SortedMap,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:SortedMap:$m:higherEntries')];},d:['ceylon.collection','SortedMap','$m','higherEntries']};}};sortedMap$.lowerEntries={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Iterable,a:{Element$Iterable:{t:m$1.Entry,a:{Item$Entry:'Item$SortedMap',Key$Entry:'Key$SortedMap'}},Absent$Iterable:{t:m$1.Null}}},ps:[{nm:'key',mt:'prm',$t:'Key$SortedMap'}],$cont:SortedMap,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:SortedMap:$m:lowerEntries')];},d:['ceylon.collection','SortedMap','$m','lowerEntries']};}};sortedMap$.ascendingEntries={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Iterable,a:{Element$Iterable:{t:m$1.Entry,a:{Item$Entry:'Item$SortedMap',Key$Entry:'Key$SortedMap'}},Absent$Iterable:{t:m$1.Null}}},ps:[{nm:'from',mt:'prm',$t:'Key$SortedMap'},{nm:'to',mt:'prm',$t:'Key$SortedMap'}],$cont:SortedMap,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:SortedMap:$m:ascendingEntries')];},d:['ceylon.collection','SortedMap','$m','ascendingEntries']};}};sortedMap$.descendingEntries={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Iterable,a:{Element$Iterable:{t:m$1.Entry,a:{Item$Entry:'Item$SortedMap',Key$Entry:'Key$SortedMap'}},Absent$Iterable:{t:m$1.Null}}},ps:[{nm:'from',mt:'prm',$t:'Key$SortedMap'},{nm:'to',mt:'prm',$t:'Key$SortedMap'}],$cont:SortedMap,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:SortedMap:$m:descendingEntries')];},d:['ceylon.collection','SortedMap','$m','descendingEntries']};}};
})(SortedMap.$$.prototype);
}
return SortedMap;
}
ex$.$init$SortedMap=$init$SortedMap;
$init$SortedMap();
function UnmodifiableMap($1dkeuw$t5,$$targs$$,unmodifiableMap$){
$init$UnmodifiableMap();
if(unmodifiableMap$===undefined)unmodifiableMap$=new UnmodifiableMap.$$;
m$1.set_type_args(unmodifiableMap$,$$targs$$);
unmodifiableMap$.$1dkeuw$t5_=$1dkeuw$t5;
m$1.Map({Key$Map:$$targs$$.Key$UnmodifiableMap,Item$Map:$$targs$$.Item$UnmodifiableMap},unmodifiableMap$);
unmodifiableMap$.$1dkeuw$t6_=unmodifiableMap$.$1dkeuw$t5.items;
return unmodifiableMap$;
}
UnmodifiableMap.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'map',mt:'prm',$t:{t:m$1.Map,a:{Key$Map:'Key$UnmodifiableMap',Item$Map:'Item$UnmodifiableMap'}}}],tp:{Key$UnmodifiableMap:{dv:'out',sts:[{t:m$1.$_Object}]},Item$UnmodifiableMap:{dv:'out'}},sts:[{t:m$1.Map,a:{Key$Map:'Key$UnmodifiableMap',Item$Map:'Item$UnmodifiableMap'}}],pa:2048,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:UnmodifiableMap'),m$1.by(m$1.$arr$sa$(["Gavin King"],{t:m$1.$_String}))];},d:['ceylon.collection','UnmodifiableMap']};};
ex$.UnmodifiableMap=UnmodifiableMap;
function $init$UnmodifiableMap(){
if(UnmodifiableMap.$$===undefined){
m$1.initTypeProto(UnmodifiableMap,'ceylon.collection::UnmodifiableMap',m$1.Basic,m$1.Map);
(function(unmodifiableMap$){
m$1.atr$(unmodifiableMap$,'$1dkeuw$t5',function(){return this.$1dkeuw$t5_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Map,a:{Key$Map:'Key$UnmodifiableMap',Item$Map:'Item$UnmodifiableMap'}},$cont:UnmodifiableMap,d:['ceylon.collection','UnmodifiableMap','$at','map$7h6pyp']};});
unmodifiableMap$.$_get=function($t7){var unmodifiableMap$=this;
return unmodifiableMap$.$1dkeuw$t5.$_get($t7);
};unmodifiableMap$.defines=function($t8){var unmodifiableMap$=this;
return unmodifiableMap$.$1dkeuw$t5.defines($t8);
};unmodifiableMap$.iterator=function(){var unmodifiableMap$=this;
return unmodifiableMap$.$1dkeuw$t5.iterator();
};m$1.atr$(unmodifiableMap$,'size',function(){
var unmodifiableMap$=this;
return unmodifiableMap$.$1dkeuw$t5.size;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:UnmodifiableMap,pa:3,d:['ceylon.collection','UnmodifiableMap','$at','size']};});
m$1.atr$(unmodifiableMap$,'keys',function(){
var unmodifiableMap$=this;
return unmodifiableMap$.$1dkeuw$t5.keys;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Collection,a:{Element$Collection:'Key$UnmodifiableMap'}},$cont:UnmodifiableMap,pa:3,d:['ceylon.collection','UnmodifiableMap','$at','keys']};});
m$1.atr$(unmodifiableMap$,'items',function(){return this.$1dkeuw$t6_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Collection,a:{Element$Collection:'Item$UnmodifiableMap'}},$cont:UnmodifiableMap,pa:3,d:['ceylon.collection','UnmodifiableMap','$at','items']};});
unmodifiableMap$.equals=function($t9){var unmodifiableMap$=this;
return m$1.$eq$(unmodifiableMap$.$1dkeuw$t5,$t9);
};m$1.atr$(unmodifiableMap$,'hash',function(){
var unmodifiableMap$=this;
return unmodifiableMap$.$1dkeuw$t5.hash;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:UnmodifiableMap,pa:3,d:['ceylon.collection','UnmodifiableMap','$at','hash']};});
unmodifiableMap$.clone=function(){var unmodifiableMap$=this;
return UnmodifiableMap(unmodifiableMap$.$1dkeuw$t5.clone(),{Item$UnmodifiableMap:unmodifiableMap$.$$targs$$.Item$UnmodifiableMap,Key$UnmodifiableMap:unmodifiableMap$.$$targs$$.Key$UnmodifiableMap});
};unmodifiableMap$.each=function($ta){var unmodifiableMap$=this;
return unmodifiableMap$.$1dkeuw$t5.each($ta);
};
})(UnmodifiableMap.$$.prototype);
}
return UnmodifiableMap;
}
ex$.$init$UnmodifiableMap=$init$UnmodifiableMap;
$init$UnmodifiableMap();
UnmodifiableMap.inst$$=function($tb){
var unmodifiableMap$=new UnmodifiableMap.$$;
m$1.set_type_args(unmodifiableMap$,{Key$UnmodifiableMap:$tb.$$targs$$.Type$Class.a.Key$UnmodifiableMap,Item$UnmodifiableMap:$tb.$$targs$$.Type$Class.a.Item$UnmodifiableMap});
m$1.set_type_args(unmodifiableMap$,{Key$Map:unmodifiableMap$.$$targs$$.Key$UnmodifiableMap,Item$Map:unmodifiableMap$.$$targs$$.Item$UnmodifiableMap,Element$Collection:{t:m$1.Entry,a:{Item$Entry:unmodifiableMap$.$$targs$$.Item$UnmodifiableMap,Key$Entry:unmodifiableMap$.$$targs$$.Key$UnmodifiableMap}},Element$Iterable:{t:m$1.Entry,a:{Item$Entry:unmodifiableMap$.$$targs$$.Item$UnmodifiableMap,Key$Entry:unmodifiableMap$.$$targs$$.Key$UnmodifiableMap}},Absent$Iterable:{t:m$1.Null},Element$Category:{t:m$1.$_Object},Item$Correspondence:unmodifiableMap$.$$targs$$.Item$UnmodifiableMap,Key$Correspondence:{t:m$1.$_Object}});
return unmodifiableMap$;
};
UnmodifiableMap.ser$get$=function(ref,o){var n=ref.attribute.qualifiedName;if(n==='ceylon.collection::UnmodifiableMap.map')return o.$1dkeuw$t5_;
else if(n==='ceylon.collection::UnmodifiableMap.items')return o.items_;
else throw new TypeError('unknown attribute');
};
UnmodifiableMap.ser$set$=function(ref,o,i){if(!m$1.is$(ref,{t:m$1.Member$serialization}))throw m$1.AssertionError('unexpected reachable reference');var n=ref.attribute.qualifiedName;
if(n==='ceylon.collection::UnmodifiableMap.map')o.$1dkeuw$t5_=i;
else if(n==='ceylon.collection::UnmodifiableMap.items')o.items_=i;
else throw new TypeError('unknown attribute');
};
UnmodifiableMap.ser$refs$=function(o){return [m$1.MemberImpl$impl(m$1.OpenValue$jsint(m$1.lmp$(ex$,'ceylon.collection'),o.$prop$get$1dkeuw$t5)),m$1.MemberImpl$impl(m$1.OpenValue$jsint(m$1.lmp$(ex$,'ceylon.collection'),o.$prop$getItems))];
};
function unmodifiableMap($tc,$pjsjp5$){return UnmodifiableMap($tc,{Item$UnmodifiableMap:$pjsjp5$.Item$unmodifiableMap/*ORALE!Item inv pero Item var*/,Key$UnmodifiableMap:$pjsjp5$.Key$unmodifiableMap/*ORALE!Key inv pero Key var*/});
};
unmodifiableMap.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Map,a:{Key$Map:'Key$unmodifiableMap',Item$Map:'Item$unmodifiableMap'}},ps:[{nm:'map',mt:'prm',$t:{t:m$1.Map,a:{Key$Map:'Key$unmodifiableMap',Item$Map:'Item$unmodifiableMap'}}}],tp:{Key$unmodifiableMap:{sts:[{t:m$1.$_Object}]},Item$unmodifiableMap:{}},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:unmodifiableMap')];},d:['ceylon.collection','unmodifiableMap']};};
ex$.unmodifiableMap=unmodifiableMap;
function Stack($$targs$$,stack$){
m$1.set_type_args(stack$,$$targs$$,Stack);
}
Stack.$crtmm$=function(){return{mod:$CCMM$,tp:{Element$Stack:{}},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:Stack'),m$1.see(m$1.$arr$sa$([m$1.openClass$jsint(m$1.lmp$(ex$,'ceylon.collection'),LinkedList),m$1.openClass$jsint(m$1.lmp$(ex$,'ceylon.collection'),ArrayList),m$1.OpenInterface$jsint(m$1.lmp$(ex$,'ceylon.collection'),Queue)],m$1.mut$([{t:m$1.ClassWithConstructorsDeclaration$meta$declaration},{t:m$1.InterfaceDeclaration$meta$declaration}])))];},d:['ceylon.collection','Stack']};};
ex$.Stack=Stack;
function $init$Stack(){
if(Stack.$$===undefined){
m$1.initTypeProtoI(Stack,'ceylon.collection::Stack');
(function(stack$){
stack$.$_push={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'element',mt:'prm',$t:'Element$Stack'}],$cont:Stack,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:Stack:$m:push')];},d:['ceylon.collection','Stack','$m','push']};}};stack$.$_pop={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$Stack']},ps:[],$cont:Stack,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:Stack:$m:pop')];},d:['ceylon.collection','Stack','$m','pop']};}};stack$.$prop$getTop={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$Stack']},$cont:Stack,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:Stack:$at:top')];},d:['ceylon.collection','Stack','$at','top']};}};
})(Stack.$$.prototype);
}
return Stack;
}
ex$.$init$Stack=$init$Stack;
$init$Stack();
function StoreIterator($1dkeuw$td,$$targs$$,storeIterator$){
$init$StoreIterator();
if(storeIterator$===undefined)storeIterator$=new StoreIterator.$$;
m$1.set_type_args(storeIterator$,$$targs$$);
storeIterator$.$1dkeuw$td_=$1dkeuw$td;
m$1.Iterator({Element$Iterator:$$targs$$.Element$StoreIterator/*ORALE!Element inv pero Element var*/},storeIterator$);
storeIterator$.$1dkeuw$te_=(0);
storeIterator$.$1dkeuw$tf_=storeIterator$.$1dkeuw$td.$_get(storeIterator$.$1dkeuw$te);
return storeIterator$;
}
StoreIterator.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'store',mt:'prm',$t:{t:m$1.$_Array,a:{Element$Array:{t:'u',l:[{t:m$1.Null},{t:Cell,a:{Element$Cell:'Element$StoreIterator'}}]}}}}],tp:{Element$StoreIterator:{}},sts:[{t:m$1.Iterator,a:{Element$Iterator:'Element$StoreIterator'}}],d:['ceylon.collection','StoreIterator']};};
ex$.StoreIterator=StoreIterator;
function $init$StoreIterator(){
if(StoreIterator.$$===undefined){
m$1.initTypeProto(StoreIterator,'ceylon.collection::StoreIterator',m$1.Basic,m$1.Iterator);
(function(storeIterator$){
m$1.atr$(storeIterator$,'$1dkeuw$td',function(){return this.$1dkeuw$td_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_Array,a:{Element$Array:{t:'u',l:[{t:m$1.Null},{t:Cell,a:{Element$Cell:'Element$StoreIterator'}}]}}},$cont:StoreIterator,d:['ceylon.collection','StoreIterator','$at','store$ds37oi']};});
m$1.atr$(storeIterator$,'$1dkeuw$te',function(){return this.$1dkeuw$te_;},function($tg){return this.$1dkeuw$te_=$tg;},function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:StoreIterator,pa:1024,d:['ceylon.collection','StoreIterator','$at','index$e2or89']};});
m$1.atr$(storeIterator$,'$1dkeuw$tf',function(){return this.$1dkeuw$tf_;},function($th){return this.$1dkeuw$tf_=$th;},function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:Cell,a:{Element$Cell:'Element$StoreIterator'}}]},$cont:StoreIterator,pa:1027,d:['ceylon.collection','StoreIterator','$at','bucket$xzowap']};});
storeIterator$.next=function(){
var storeIterator$=this;
if(!m$1.nn$(storeIterator$.$1dkeuw$tf)){
while(((storeIterator$.$1dkeuw$te=storeIterator$.$1dkeuw$te.successor)<storeIterator$.$1dkeuw$td.size)){
storeIterator$.$1dkeuw$tf=storeIterator$.$1dkeuw$td.$_get(storeIterator$.$1dkeuw$te);
if(m$1.nn$(storeIterator$.$1dkeuw$tf)){
break;
}
}
}
var $ti;
if(m$1.nn$(($ti=storeIterator$.$1dkeuw$tf))){
var $tj=$ti.element;
storeIterator$.$1dkeuw$tf=$ti.rest;
return $tj;
}
return m$1.finished();
};storeIterator$.next.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:['Element$StoreIterator',{t:m$1.Finished}]},ps:[],$cont:StoreIterator,pa:3,d:['ceylon.collection','StoreIterator','$m','next']};};
})(StoreIterator.$$.prototype);
}
return StoreIterator;
}
ex$.$init$StoreIterator=$init$StoreIterator;
$init$StoreIterator();
function CachingStoreIterator($1dkeuw$tk,$$targs$$,cachingStoreIterator$){
$init$CachingStoreIterator();
if(cachingStoreIterator$===undefined)cachingStoreIterator$=new CachingStoreIterator.$$;
m$1.set_type_args(cachingStoreIterator$,$$targs$$);
cachingStoreIterator$.$1dkeuw$tk_=$1dkeuw$tk;
m$1.Iterator({Element$Iterator:$$targs$$.Element$CachingStoreIterator/*ORALE!Element inv pero Element var*/},cachingStoreIterator$);
cachingStoreIterator$.$1dkeuw$tl_=(0);
cachingStoreIterator$.$1dkeuw$tm_=cachingStoreIterator$.$1dkeuw$tk.$_get(cachingStoreIterator$.$1dkeuw$tl);
return cachingStoreIterator$;
}
CachingStoreIterator.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'store',mt:'prm',$t:{t:m$1.$_Array,a:{Element$Array:{t:'u',l:[{t:m$1.Null},{t:CachingCell,a:{Element$CachingCell:'Element$CachingStoreIterator'}}]}}}}],tp:{Element$CachingStoreIterator:{}},sts:[{t:m$1.Iterator,a:{Element$Iterator:'Element$CachingStoreIterator'}}],d:['ceylon.collection','CachingStoreIterator']};};
ex$.CachingStoreIterator=CachingStoreIterator;
function $init$CachingStoreIterator(){
if(CachingStoreIterator.$$===undefined){
m$1.initTypeProto(CachingStoreIterator,'ceylon.collection::CachingStoreIterator',m$1.Basic,m$1.Iterator);
(function(cachingStoreIterator$){
m$1.atr$(cachingStoreIterator$,'$1dkeuw$tk',function(){return this.$1dkeuw$tk_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_Array,a:{Element$Array:{t:'u',l:[{t:m$1.Null},{t:CachingCell,a:{Element$CachingCell:'Element$CachingStoreIterator'}}]}}},$cont:CachingStoreIterator,d:['ceylon.collection','CachingStoreIterator','$at','store$9zckx3']};});
m$1.atr$(cachingStoreIterator$,'$1dkeuw$tl',function(){return this.$1dkeuw$tl_;},function($tn){return this.$1dkeuw$tl_=$tn;},function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:CachingStoreIterator,pa:1024,d:['ceylon.collection','CachingStoreIterator','$at','index$9or1dc']};});
m$1.atr$(cachingStoreIterator$,'$1dkeuw$tm',function(){return this.$1dkeuw$tm_;},function($to){return this.$1dkeuw$tm_=$to;},function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:CachingCell,a:{Element$CachingCell:'Element$CachingStoreIterator'}}]},$cont:CachingStoreIterator,pa:1027,d:['ceylon.collection','CachingStoreIterator','$at','bucket$a893p4']};});
cachingStoreIterator$.next=function(){
var cachingStoreIterator$=this;
if(!m$1.nn$(cachingStoreIterator$.$1dkeuw$tm)){
while(((cachingStoreIterator$.$1dkeuw$tl=cachingStoreIterator$.$1dkeuw$tl.successor)<cachingStoreIterator$.$1dkeuw$tk.size)){
cachingStoreIterator$.$1dkeuw$tm=cachingStoreIterator$.$1dkeuw$tk.$_get(cachingStoreIterator$.$1dkeuw$tl);
if(m$1.nn$(cachingStoreIterator$.$1dkeuw$tm)){
break;
}
}
}
var $tp;
if(m$1.nn$(($tp=cachingStoreIterator$.$1dkeuw$tm))){
var $tq=$tp.element;
cachingStoreIterator$.$1dkeuw$tm=$tp.rest;
return $tq;
}
return m$1.finished();
};cachingStoreIterator$.next.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:['Element$CachingStoreIterator',{t:m$1.Finished}]},ps:[],$cont:CachingStoreIterator,pa:3,d:['ceylon.collection','CachingStoreIterator','$m','next']};};
})(CachingStoreIterator.$$.prototype);
}
return CachingStoreIterator;
}
ex$.$init$CachingStoreIterator=$init$CachingStoreIterator;
$init$CachingStoreIterator();
function SingletonMap(entry,$$targs$$,singletonMap$){
$init$SingletonMap();
if(singletonMap$===undefined)singletonMap$=new SingletonMap.$$;
m$1.set_type_args(singletonMap$,$$targs$$);
singletonMap$.entry_=entry;
m$1.Map({Key$Map:$$targs$$.Key$SingletonMap/*ORALE!Key inv pero Key var*/,Item$Map:$$targs$$.Item$SingletonMap/*ORALE!Item inv pero Item var*/},singletonMap$);
return singletonMap$;
}
SingletonMap.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'entry',mt:'prm',$t:{t:m$1.Entry,a:{Item$Entry:'Item$SingletonMap',Key$Entry:'Key$SingletonMap'}},pa:1}],tp:{Key$SingletonMap:{sts:[{t:m$1.$_Object}]},Item$SingletonMap:{}},sts:[{t:m$1.Map,a:{Key$Map:'Key$SingletonMap',Item$Map:'Item$SingletonMap'}}],pa:2049,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:SingletonMap'),m$1.see(m$1.$arr$sa$([m$1.openClass$jsint(m$1.lmp$(ex$,'ceylon.collection'),SingletonSet),m$1.openClass$jsint(m$1.fmp$('ceylon.language','1.3.0','$'),m$1.Singleton)],{t:m$1.ClassWithInitializerDeclaration$meta$declaration}))];},d:['ceylon.collection','SingletonMap']};};
ex$.SingletonMap=SingletonMap;
function $init$SingletonMap(){
if(SingletonMap.$$===undefined){
m$1.initTypeProto(SingletonMap,'ceylon.collection::SingletonMap',m$1.Basic,m$1.Map);
(function(singletonMap$){
m$1.atr$(singletonMap$,'entry',function(){return this.entry_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Entry,a:{Item$Entry:'Item$SingletonMap',Key$Entry:'Key$SingletonMap'}},$cont:SingletonMap,pa:1,d:['ceylon.collection','SingletonMap','$at','entry']};});
singletonMap$.defines=function($tr){var singletonMap$=this;
return m$1.$eq$(singletonMap$.entry.key,$tr);
};singletonMap$.$_get=function($ts){
var singletonMap$=this;
if(m$1.$eq$(singletonMap$.entry.key,$ts)){
return singletonMap$.entry.item;
}
else{
return null;
}
};singletonMap$.$_get.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Item$SingletonMap']},ps:[{nm:'key',mt:'prm',$t:{t:m$1.$_Object}}],$cont:SingletonMap,pa:3,d:['ceylon.collection','SingletonMap','$m','get']};};
singletonMap$.contains=function($tt){var singletonMap$=this;
return m$1.$eq$(singletonMap$.entry,$tt);
};singletonMap$.iterator=function(){var singletonMap$=this;
return m$1.Singleton(singletonMap$.entry,{Element$Singleton:{t:m$1.Entry,a:{Item$Entry:singletonMap$.$$targs$$.Item$SingletonMap/*ORALE!Item inv pero Item var*/,Key$Entry:singletonMap$.$$targs$$.Key$SingletonMap/*ORALE!Key inv pero Key var*/}}}).iterator();
};singletonMap$.equals=function($tu){var singletonMap$=this;
return singletonMap$.getT$all()['ceylon.language::Map'].$$.prototype.equals.call(singletonMap$,$tu);
};m$1.atr$(singletonMap$,'hash',function(){
var singletonMap$=this;
return m$1.attrGetter(singletonMap$.getT$all()['ceylon.language::Map'],'hash').call(this);
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:SingletonMap,pa:3,d:['ceylon.collection','SingletonMap','$at','hash']};});
singletonMap$.each=function($tv){var singletonMap$=this;
return $tv(singletonMap$.entry);
};singletonMap$.clone=function(){var singletonMap$=this;
return singletonMap$;
};
singletonMap$.clone.$crtmm$=function(){return{mod:$CCMM$,$t:{t:SingletonMap,a:{Key$SingletonMap:'Key$SingletonMap',Item$SingletonMap:'Item$SingletonMap'}},ps:[],$cont:SingletonMap,pa:3,d:['ceylon.collection','SingletonMap','$m','clone']};};
})(SingletonMap.$$.prototype);
}
return SingletonMap;
}
ex$.$init$SingletonMap=$init$SingletonMap;
$init$SingletonMap();
SingletonMap.inst$$=function($tw){
var singletonMap$=new SingletonMap.$$;
m$1.set_type_args(singletonMap$,{Key$SingletonMap:$tw.$$targs$$.Type$Class.a.Key$SingletonMap,Item$SingletonMap:$tw.$$targs$$.Type$Class.a.Item$SingletonMap});
m$1.set_type_args(singletonMap$,{Key$Map:singletonMap$.$$targs$$.Key$SingletonMap,Item$Map:singletonMap$.$$targs$$.Item$SingletonMap,Element$Collection:{t:m$1.Entry,a:{Item$Entry:singletonMap$.$$targs$$.Item$SingletonMap/*ORALE!Item inv pero Item var*/,Key$Entry:singletonMap$.$$targs$$.Key$SingletonMap/*ORALE!Key inv pero Key var*/}},Element$Iterable:{t:m$1.Entry,a:{Item$Entry:singletonMap$.$$targs$$.Item$SingletonMap/*ORALE!Item inv pero Item var*/,Key$Entry:singletonMap$.$$targs$$.Key$SingletonMap/*ORALE!Key inv pero Key var*/}},Absent$Iterable:{t:m$1.Null},Element$Category:{t:m$1.$_Object},Item$Correspondence:singletonMap$.$$targs$$.Item$SingletonMap,Key$Correspondence:{t:m$1.$_Object}});
return singletonMap$;
};
SingletonMap.ser$get$=function(ref,o){var n=ref.attribute.qualifiedName;if(n==='ceylon.collection::SingletonMap.entry')return o.entry_;
else throw new TypeError('unknown attribute');
};
SingletonMap.ser$set$=function(ref,o,i){if(!m$1.is$(ref,{t:m$1.Member$serialization}))throw m$1.AssertionError('unexpected reachable reference');var n=ref.attribute.qualifiedName;
if(n==='ceylon.collection::SingletonMap.entry')o.entry_=i;
else throw new TypeError('unknown attribute');
};
SingletonMap.ser$refs$=function(o){return [m$1.MemberImpl$impl(m$1.OpenValue$jsint(m$1.lmp$(ex$,'ceylon.collection'),o.$prop$getEntry))];
};
function entryStore($tx,$leqrr$){return m$1.$_Array$c_ofSize($tx,null,{Element$Array:m$1.mut$([{t:m$1.Null},{t:Cell,a:{Element$Cell:{t:m$1.Entry,a:{Item$Entry:$leqrr$.Item$entryStore/*ORALE!Item inv pero Item var*/,Key$Entry:$leqrr$.Key$entryStore/*ORALE!Key inv pero Key var*/}}}}])});
};
entryStore.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Array,a:{Element$Array:{t:'u',l:[{t:m$1.Null},{t:Cell,a:{Element$Cell:{t:m$1.Entry,a:{Item$Entry:'Item$entryStore',Key$Entry:'Key$entryStore'}}}}]}}},ps:[{nm:'size',mt:'prm',$t:{t:m$1.Integer}}],tp:{Key$entryStore:{sts:[{t:m$1.$_Object}]},Item$entryStore:{}},an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:entryStore')];},d:['ceylon.collection','entryStore']};};
function elementStore($ty,$9ap29p$){return m$1.$_Array$c_ofSize($ty,null,{Element$Array:m$1.mut$([{t:m$1.Null},{t:Cell,a:{Element$Cell:$9ap29p$.Element$elementStore}}])});
};
elementStore.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Array,a:{Element$Array:{t:'u',l:[{t:m$1.Null},{t:Cell,a:{Element$Cell:'Element$elementStore'}}]}}},ps:[{nm:'size',mt:'prm',$t:{t:m$1.Integer}}],tp:{Element$elementStore:{}},an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:elementStore')];},d:['ceylon.collection','elementStore']};};
function cachingEntryStore($tz,$gyeaiy$){return m$1.$_Array$c_ofSize($tz,null,{Element$Array:m$1.mut$([{t:m$1.Null},{t:CachingCell,a:{Element$CachingCell:{t:m$1.Entry,a:{Item$Entry:$gyeaiy$.Item$cachingEntryStore/*ORALE!Item inv pero Item var*/,Key$Entry:$gyeaiy$.Key$cachingEntryStore/*ORALE!Key inv pero Key var*/}}}}])});
};
cachingEntryStore.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Array,a:{Element$Array:{t:'u',l:[{t:m$1.Null},{t:CachingCell,a:{Element$CachingCell:{t:m$1.Entry,a:{Item$Entry:'Item$cachingEntryStore',Key$Entry:'Key$cachingEntryStore'}}}}]}}},ps:[{nm:'size',mt:'prm',$t:{t:m$1.Integer}}],tp:{Key$cachingEntryStore:{sts:[{t:m$1.$_Object}]},Item$cachingEntryStore:{}},an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:cachingEntryStore')];},d:['ceylon.collection','cachingEntryStore']};};
function cachingElementStore($u0,$m3pk2c$){return m$1.$_Array$c_ofSize($u0,null,{Element$Array:m$1.mut$([{t:m$1.Null},{t:CachingCell,a:{Element$CachingCell:$m3pk2c$.Element$cachingElementStore}}])});
};
cachingElementStore.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Array,a:{Element$Array:{t:'u',l:[{t:m$1.Null},{t:CachingCell,a:{Element$CachingCell:'Element$cachingElementStore'}}]}}},ps:[{nm:'size',mt:'prm',$t:{t:m$1.Integer}}],tp:{Element$cachingElementStore:{}},an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:cachingElementStore')];},d:['ceylon.collection','cachingElementStore']};};
function TreeMap$$c($$targs$$,treeMap$){
m$1.set_type_args(treeMap$,$$targs$$);
SortedMap({Key$SortedMap:$$targs$$.Key$TreeMap,Item$SortedMap:$$targs$$.Item$TreeMap/*ORALE!Item inv pero Item var*/},treeMap$);
MutableMap({Key$MutableMap:$$targs$$.Key$TreeMap,Item$MutableMap:$$targs$$.Item$TreeMap},treeMap$);
m$1.Ranged({Subrange$Ranged:{t:TreeMap,a:{Key$TreeMap:$$targs$$.Key$TreeMap,Item$TreeMap:$$targs$$.Item$TreeMap}},Index$Ranged:$$targs$$.Key$TreeMap/*ORALE!Key inv pero Index var*/,Element$Ranged:{t:m$1.Entry,a:{Item$Entry:$$targs$$.Item$TreeMap/*ORALE!Item inv pero Item var*/,Key$Entry:$$targs$$.Key$TreeMap/*ORALE!Key inv pero Key var*/}}},treeMap$);
}
function TreeMap(){return TreeMap$c_$c$.apply(undefined,arguments);}
function TreeMap$c_$c$$$a($u1,$u2,$$targs$$,treeMap$){
if($u2===undefined){$u2=m$1.empty();}
treeMap$.$1dkeuw$u3_=null;
treeMap$.$1dkeuw$u4_=$u1;
m$1.atr$(treeMap$,'$1dkeuw$u4',function(){return this.$1dkeuw$u4_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Comparison},ps:[{nm:'x',mt:'prm',$t:'Key$TreeMap'},{nm:'y',mt:'prm',$t:'Key$TreeMap'}],$cont:TreeMap,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:TreeMap:$m:compare$l83nqh')];},d:['ceylon.collection','TreeMap','$m','compare$l83nqh']};});
treeMap$.$1dkeuw$u5_=$u2;
m$1.atr$(treeMap$,'$1dkeuw$u5',function(){return this.$1dkeuw$u5_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Iterable,a:{Element$Iterable:{t:m$1.Entry,a:{Item$Entry:'Item$TreeMap',Key$Entry:'Key$TreeMap'}},Absent$Iterable:{t:m$1.Null}}},$cont:TreeMap,pa:3,an:function(){return[m$1.doc("The initial entries in the map.")];},d:['ceylon.collection','TreeMap','$at','entries$25gqqk']};});
treeMap$.$1dkeuw$u6_=null;
m$1.atr$(treeMap$,'$1dkeuw$u6',function(){return this.$1dkeuw$u6_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:treeMap$.Node$TreeMap,a:{Key$TreeMap:'Key$TreeMap',Item$TreeMap:'Item$TreeMap'}}]},$cont:TreeMap,pa:3,an:function(){return[m$1.doc("Alternatively, a node to clone.")];},d:['ceylon.collection','TreeMap','$at','nodeToClone$bq245o']};});
return treeMap$;
};
function TreeMap$c_$c$($u1,$u2,$$targs$$,treeMap$){
$init$TreeMap();
if(treeMap$===undefined)treeMap$=new TreeMap.$$;
if($u2===undefined){$u2=m$1.empty();}
TreeMap$$c($$targs$$,treeMap$);
TreeMap$c_$c$$$a($u1,$u2,$$targs$$,treeMap$);
treeMap$.$1dkeuw$u3=function(){var $u7;
if(m$1.nn$(($u7=treeMap$.$1dkeuw$u6)))return treeMap$.$1dkeuw$u8($u7);else return null}();
var $ua;for(var $u9=treeMap$.$1dkeuw$u5.iterator();($ua=$u9.next())!==m$1.finished();){
var $ub=$ua.key,$uc=$ua.item;
treeMap$.put($ub,$uc);
}
treeMap$.$1dkeuw$ud_=treeMap$.$1dkeuw$ue();
return treeMap$;
};
TreeMap$c_$c$.$crtmm$=function(){return{mod:$CCMM$,ps:[{nm:'compare',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Arguments$Callable:{t:'T',l:['Key$TreeMap','Key$TreeMap']},Return$Callable:{t:m$1.Comparison}}},$rt:{t:m$1.Comparison},ps:[{nm:'x',mt:'prm',$t:'Key$TreeMap'},{nm:'y',mt:'prm',$t:'Key$TreeMap'}],an:function(){return[m$1.doc("A comparator function used to sort the entries.")];}},{nm:'entries',mt:'prm',def:1,$t:{t:m$1.Iterable,a:{Element$Iterable:{t:m$1.Entry,a:{Item$Entry:'Item$TreeMap',Key$Entry:'Key$TreeMap'}},Absent$Iterable:{t:m$1.Null}}},an:function(){return[m$1.doc("The initial entries in the map.")];}}],$cont:TreeMap,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:TreeMap:$cn:$def')];},d:['ceylon.collection','TreeMap','$cn','$def']};};
TreeMap.TreeMap$c_$c$=TreeMap$c_$c$;
ex$.TreeMap$c_$c$=TreeMap$c_$c$;
function TreeMap$c_copy$$a($uf,$$targs$$,treeMap$){
treeMap$.$1dkeuw$u3_=null;
treeMap$.$1dkeuw$u4_=($ug=$uf,m$1.jsc$3($ug,$ug.$1dkeuw$u4));
m$1.atr$(treeMap$,'$1dkeuw$u4',function(){return this.$1dkeuw$u4_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Comparison},ps:[{nm:'x',mt:'prm',$t:'Key$TreeMap'},{nm:'y',mt:'prm',$t:'Key$TreeMap'}],$cont:TreeMap,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:TreeMap:$m:compare$l83nqh')];},d:['ceylon.collection','TreeMap','$m','compare$l83nqh']};});
var $ug;
treeMap$.$1dkeuw$u5_=m$1.empty();
m$1.atr$(treeMap$,'$1dkeuw$u5',function(){return this.$1dkeuw$u5_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Iterable,a:{Element$Iterable:{t:m$1.Entry,a:{Item$Entry:'Item$TreeMap',Key$Entry:'Key$TreeMap'}},Absent$Iterable:{t:m$1.Null}}},$cont:TreeMap,pa:3,an:function(){return[m$1.doc("The initial entries in the map.")];},d:['ceylon.collection','TreeMap','$at','entries$25gqqk']};});
treeMap$.$1dkeuw$u6_=$uf.$1dkeuw$u3;
m$1.atr$(treeMap$,'$1dkeuw$u6',function(){return this.$1dkeuw$u6_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:treeMap$.Node$TreeMap,a:{Key$TreeMap:'Key$TreeMap',Item$TreeMap:'Item$TreeMap'}}]},$cont:TreeMap,pa:3,an:function(){return[m$1.doc("Alternatively, a node to clone.")];},d:['ceylon.collection','TreeMap','$at','nodeToClone$bq245o']};});
return treeMap$;
};
function TreeMap$c_copy($uf,$$targs$$,treeMap$){
$init$TreeMap();
if(treeMap$===undefined)treeMap$=new TreeMap.$$;
TreeMap$$c($$targs$$,treeMap$);
TreeMap$c_copy$$a($uf,$$targs$$,treeMap$);
treeMap$.$1dkeuw$u3=function(){var $u7;
if(m$1.nn$(($u7=treeMap$.$1dkeuw$u6)))return treeMap$.$1dkeuw$u8($u7);else return null}();
var $ui;for(var $uh=treeMap$.$1dkeuw$u5.iterator();($ui=$uh.next())!==m$1.finished();){
var $ub=$ui.key,$uc=$ui.item;
treeMap$.put($ub,$uc);
}
treeMap$.$1dkeuw$ud_=treeMap$.$1dkeuw$ue();
return treeMap$;
};
TreeMap$c_copy.$crtmm$=function(){return{mod:$CCMM$,ps:[{nm:'treeMap',mt:'prm',$t:{t:TreeMap,a:{Key$TreeMap:'Key$TreeMap',Item$TreeMap:'Item$TreeMap'}}}],$cont:TreeMap,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:TreeMap:$cn:copy')];},d:['ceylon.collection','TreeMap','$cn','copy']};};
TreeMap.TreeMap$c_copy=TreeMap$c_copy;
ex$.TreeMap$c_copy=TreeMap$c_copy;
TreeMap.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'compare',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Arguments$Callable:{t:'T',l:['Key$TreeMap','Key$TreeMap']},Return$Callable:{t:m$1.Comparison}}},$rt:{t:m$1.Comparison},ps:[{nm:'x',mt:'prm',$t:'Key$TreeMap'},{nm:'y',mt:'prm',$t:'Key$TreeMap'}],an:function(){return[m$1.doc("A comparator function used to sort the entries.")];}},{nm:'entries',mt:'prm',def:1,$t:{t:m$1.Iterable,a:{Element$Iterable:{t:m$1.Entry,a:{Item$Entry:'Item$TreeMap',Key$Entry:'Key$TreeMap'}},Absent$Iterable:{t:m$1.Null}}},an:function(){return[m$1.doc("The initial entries in the map.")];}}],tp:{Key$TreeMap:{sts:[{t:m$1.$_Object}]},Item$TreeMap:{}},sts:[{t:MutableMap,a:{Key$MutableMap:'Key$TreeMap',Item$MutableMap:'Item$TreeMap'}},{t:SortedMap,a:{Key$SortedMap:'Key$TreeMap',Item$SortedMap:'Item$TreeMap'}},{t:m$1.Ranged,a:{Subrange$Ranged:{t:TreeMap,a:{Key$TreeMap:'Key$TreeMap',Item$TreeMap:'Item$TreeMap'}},Index$Ranged:'Key$TreeMap',Element$Ranged:{t:m$1.Entry,a:{Item$Entry:'Item$TreeMap',Key$Entry:'Key$TreeMap'}}}}],pa:2049,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:TreeMap'),m$1.see(m$1.$arr$sa$([m$1.OpenFunction$jsint(m$1.lmp$(ex$,'ceylon.collection'),naturalOrderTreeMap)],{t:m$1.FunctionDeclaration$meta$declaration})),m$1.by(m$1.$arr$sa$(["Gavin King"],{t:m$1.$_String}))];},d:['ceylon.collection','TreeMap']};};
ex$.TreeMap=TreeMap;
function $init$TreeMap(){
if(TreeMap.$$===undefined){
m$1.initTypeProto(TreeMap,'ceylon.collection::TreeMap',m$1.Basic,$init$SortedMap(),$init$MutableMap(),m$1.Ranged);
(function(treeMap$){
m$1.atr$(treeMap$,'$1dkeuw$u3',function(){return this.$1dkeuw$u3_;},function($uj){return this.$1dkeuw$u3_=$uj;},function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:treeMap$.Node$TreeMap,a:{Key$TreeMap:'Key$TreeMap',Item$TreeMap:'Item$TreeMap'}}]},$cont:TreeMap,pa:1027,an:function(){return[m$1.doc("The root node of the tree.")];},d:['ceylon.collection','TreeMap','$at','root$w9iz1a']};});
m$1.atr$(treeMap$,'$1dkeuw$u5',function(){return this.$1dkeuw$u5_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Iterable,a:{Element$Iterable:{t:m$1.Entry,a:{Item$Entry:'Item$TreeMap',Key$Entry:'Key$TreeMap'}},Absent$Iterable:{t:m$1.Null}}},$cont:TreeMap,pa:3,an:function(){return[m$1.doc("The initial entries in the map.")];},d:['ceylon.collection','TreeMap','$at','entries$25gqqk']};});
m$1.atr$(treeMap$,'$1dkeuw$u6',function(){return this.$1dkeuw$u6_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:treeMap$.Node$TreeMap,a:{Key$TreeMap:'Key$TreeMap',Item$TreeMap:'Item$TreeMap'}}]},$cont:TreeMap,pa:3,an:function(){return[m$1.doc("Alternatively, a node to clone.")];},d:['ceylon.collection','TreeMap','$at','nodeToClone$bq245o']};});
treeMap$.$1dkeuw$u8=function($uk){
var treeMap$=this;
var $ul=($um=$uk.key,$un=$uk.item,$uo=$uk.red,treeMap$.Node$TreeMap($um,$un,$uo));
var $um,$un,$uo;
var $up;
if(m$1.nn$(($up=$uk.left))){
var $uq=treeMap$.$1dkeuw$u8($up);
($uq.parent=$ul);
($ul.left=$uq);
}
var $ur;
if(m$1.nn$(($ur=$uk.right))){
var $us=treeMap$.$1dkeuw$u8($ur);
($us.parent=$ul);
($ul.right=$us);
}
return $ul;
};treeMap$.$1dkeuw$u8.$crtmm$=function(){return{mod:$CCMM$,$t:{t:treeMap$.Node$TreeMap,a:{Key$TreeMap:'Key$TreeMap',Item$TreeMap:'Item$TreeMap'}},ps:[{nm:'node',mt:'prm',$t:{t:treeMap$.Node$TreeMap,a:{Key$TreeMap:'Key$TreeMap',Item$TreeMap:'Item$TreeMap'}}}],$cont:TreeMap,d:['ceylon.collection','TreeMap','$m','copyNode$paf63']};};
treeMap$.$1dkeuw$ut=function($uu){var treeMap$=this;
return function(){var $uv;
if(m$1.nn$(($uv=$uu)))return $uv.red;else return false}();
};
treeMap$.$1dkeuw$ut.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'node',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},{t:treeMap$.Node$TreeMap,a:{Key$TreeMap:'Key$TreeMap',Item$TreeMap:'Item$TreeMap'}}]}}],$cont:TreeMap,d:['ceylon.collection','TreeMap','$m','isRed$pt60u3']};};
treeMap$.$1dkeuw$uw=function($ux){
var treeMap$=this;
var $uy=treeMap$.$1dkeuw$u3;
var $uz;
while(m$1.nn$(($uz=$uy))){
var $v0=treeMap$.$1dkeuw$u4($ux,$uz.key);
if($v0===m$1.equal()) {
return $uz;
}
else if($v0===m$1.smaller()) {
$uy=$uz.left;
}
else if($v0===m$1.larger()) {
$uy=$uz.right;
}
else throw m$1.Exception('Supposedly exhaustive switch was not exhaustive')
}
return $uy;
};treeMap$.$1dkeuw$uw.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:treeMap$.Node$TreeMap,a:{Key$TreeMap:'Key$TreeMap',Item$TreeMap:'Item$TreeMap'}}]},ps:[{nm:'key',mt:'prm',$t:'Key$TreeMap'}],$cont:TreeMap,d:['ceylon.collection','TreeMap','$m','lookup$pd1hl6']};};
treeMap$.$1dkeuw$v1=function($v2){
var treeMap$=this;
var $v3=treeMap$.$1dkeuw$u3;
var $v4;
while(m$1.nn$(($v4=$v3))){
var $v5=treeMap$.$1dkeuw$u4($v2,$v4.key);
if($v5===m$1.equal()) {
return $v4;
}
else if($v5===m$1.smaller()) {
if(!m$1.nn$($v4.left)){
var $v6=$v4;
var $v7;
while(m$1.nn$(($v7=$v6.parent))&&$v6.onLeft){
$v6=$v7;
}
return $v6.parent;
}
$v3=$v4.left;
}
else if($v5===m$1.larger()) {
if(!m$1.nn$($v4.right)){
return $v4;
}
$v3=$v4.right;
}
else throw m$1.Exception('Supposedly exhaustive switch was not exhaustive')
}
return $v3;
};treeMap$.$1dkeuw$v1.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:treeMap$.Node$TreeMap,a:{Key$TreeMap:'Key$TreeMap',Item$TreeMap:'Item$TreeMap'}}]},ps:[{nm:'key',mt:'prm',$t:'Key$TreeMap'}],$cont:TreeMap,d:['ceylon.collection','TreeMap','$m','ceiling$by99mn']};};
treeMap$.$1dkeuw$v8=function($v9){
var treeMap$=this;
var $va=treeMap$.$1dkeuw$u3;
var $vb;
while(m$1.nn$(($vb=$va))){
var $vc=treeMap$.$1dkeuw$u4($v9,$vb.key);
if($vc===m$1.equal()) {
return $vb;
}
else if($vc===m$1.smaller()) {
if(!m$1.nn$($vb.left)){
return $vb;
}
$va=$vb.left;
}
else if($vc===m$1.larger()) {
if(!m$1.nn$($vb.right)){
var $vd=$vb;
var $ve;
while(m$1.nn$(($ve=$vd.parent))&&$vd.onRight){
$vd=$ve;
}
return $vd.parent;
}
$va=$vb.right;
}
else throw m$1.Exception('Supposedly exhaustive switch was not exhaustive')
}
return $va;
};treeMap$.$1dkeuw$v8.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:treeMap$.Node$TreeMap,a:{Key$TreeMap:'Key$TreeMap',Item$TreeMap:'Item$TreeMap'}}]},ps:[{nm:'key',mt:'prm',$t:'Key$TreeMap'}],$cont:TreeMap,d:['ceylon.collection','TreeMap','$m','floor$u13blk']};};
treeMap$.$1dkeuw$vf=function($vg,$vh){
var treeMap$=this;
var $vi;
if(m$1.nn$(($vi=$vg.parent))){
if($vg.onLeft){
($vi.left=$vh);
}
else{
if($vg.onRight){
($vi.right=$vh);
}
else{
m$1.asrt$((false),"Assertion failed: \'false\' at TreeMap.ceylon (242:23-242:29)",'242:16-242:30','TreeMap.ceylon');
}
}
}
else{
treeMap$.$1dkeuw$u3=$vh;
}
var $vj;
if(m$1.nn$(($vj=$vh))){
($vj.parent=$vg.parent);
}
};treeMap$.$1dkeuw$vf.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'old',mt:'prm',$t:{t:treeMap$.Node$TreeMap,a:{Key$TreeMap:'Key$TreeMap',Item$TreeMap:'Item$TreeMap'}}},{nm:'node',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},{t:treeMap$.Node$TreeMap,a:{Key$TreeMap:'Key$TreeMap',Item$TreeMap:'Item$TreeMap'}}]}}],$cont:TreeMap,d:['ceylon.collection','TreeMap','$m','replaceNode$sb7ik2']};};
treeMap$.$1dkeuw$vk=function($vl,$vm){
var treeMap$=this;
($vl.left=$vm);
var $vn;
if(m$1.nn$(($vn=$vm))){
($vn.parent=$vl);
}
};treeMap$.$1dkeuw$vk.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'node',mt:'prm',$t:{t:treeMap$.Node$TreeMap,a:{Key$TreeMap:'Key$TreeMap',Item$TreeMap:'Item$TreeMap'}}},{nm:'left',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},{t:treeMap$.Node$TreeMap,a:{Key$TreeMap:'Key$TreeMap',Item$TreeMap:'Item$TreeMap'}}]}}],$cont:TreeMap,d:['ceylon.collection','TreeMap','$m','setLeftChild$7ba4nt']};};
treeMap$.$1dkeuw$vo=function($vp,$vq){
var treeMap$=this;
($vp.right=$vq);
var $vr;
if(m$1.nn$(($vr=$vq))){
($vr.parent=$vp);
}
};treeMap$.$1dkeuw$vo.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'node',mt:'prm',$t:{t:treeMap$.Node$TreeMap,a:{Key$TreeMap:'Key$TreeMap',Item$TreeMap:'Item$TreeMap'}}},{nm:'right',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},{t:treeMap$.Node$TreeMap,a:{Key$TreeMap:'Key$TreeMap',Item$TreeMap:'Item$TreeMap'}}]}}],$cont:TreeMap,d:['ceylon.collection','TreeMap','$m','setRightChild$y2zjj6']};};
treeMap$.$1dkeuw$vs=function($vt){
var treeMap$=this;
var $vu;
m$1.asrt$((m$1.nn$(($vu=$vt.right))),"Assertion failed: \'exists right = node.right\' at TreeMap.ceylon (268:15-268:41)",'268:8-268:42','TreeMap.ceylon');
treeMap$.$1dkeuw$vf($vt,$vu);
var $vv=$vu.left;
treeMap$.$1dkeuw$vo($vt,$vv);
treeMap$.$1dkeuw$vk($vu,$vt);
};treeMap$.$1dkeuw$vs.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'node',mt:'prm',$t:{t:treeMap$.Node$TreeMap,a:{Key$TreeMap:'Key$TreeMap',Item$TreeMap:'Item$TreeMap'}}}],$cont:TreeMap,d:['ceylon.collection','TreeMap','$m','rotateLeft$bf2pku']};};
treeMap$.$1dkeuw$vw=function($vx){
var treeMap$=this;
var $vy;
m$1.asrt$((m$1.nn$(($vy=$vx.left))),"Assertion failed: \'exists left = node.left\' at TreeMap.ceylon (276:15-276:39)",'276:8-276:40','TreeMap.ceylon');
var $vz=$vy.right;
treeMap$.$1dkeuw$vf($vx,$vy);
treeMap$.$1dkeuw$vk($vx,$vz);
treeMap$.$1dkeuw$vo($vy,$vx);
};treeMap$.$1dkeuw$vw.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'node',mt:'prm',$t:{t:treeMap$.Node$TreeMap,a:{Key$TreeMap:'Key$TreeMap',Item$TreeMap:'Item$TreeMap'}}}],$cont:TreeMap,d:['ceylon.collection','TreeMap','$m','rotateRight$lztmmz']};};
treeMap$.$1dkeuw$w0=function($w1){
var treeMap$=this;
var $w2;
if(m$1.nn$(($w2=$w1.parent))){
if(treeMap$.$1dkeuw$ut($w2)){
var $w3;
if(m$1.nn$(($w3=$w1.uncle))&&treeMap$.$1dkeuw$ut($w3)){
($w2.red=false);
($w3.red=false);
var $w4;
m$1.asrt$((m$1.nn$(($w4=$w1.grandparent))),"Assertion failed: \'exists grandparent=newNode.grandparent\' at TreeMap.ceylon (293:27-293:66)",'293:20-293:67','TreeMap.ceylon');
($w4.red=true);
treeMap$.$1dkeuw$w0($w4);
}
else{
var $w5;
if(($w1.onRight&&$w2.onLeft)){
treeMap$.$1dkeuw$vs($w2);
var $w6;
m$1.asrt$((m$1.nn$(($w6=$w1.left))),"Assertion failed: \'exists nl=newNode.left\' at TreeMap.ceylon (302:31-302:54)",'302:24-302:55','TreeMap.ceylon');
$w5=$w6;
}
else{
if(($w1.onLeft&&$w2.onRight)){
treeMap$.$1dkeuw$vw($w2);
var $w7;
m$1.asrt$((m$1.nn$(($w7=$w1.right))),"Assertion failed: \'exists nr=newNode.right\' at TreeMap.ceylon (307:31-307:55)",'307:24-307:56','TreeMap.ceylon');
$w5=$w7;
}
else{
$w5=$w1;
}
}
var $w8;
m$1.asrt$((m$1.nn$(($w8=$w5.parent))),"Assertion failed: \'exists adjustedParent=adjustedNode.parent\' at TreeMap.ceylon (314:27-314:69)",'314:20-314:70','TreeMap.ceylon');
($w8.red=false);
var $w9;
m$1.asrt$((m$1.nn$(($w9=$w5.grandparent))),"Assertion failed: \'exists grandparent=adjustedNode.grandparent\' at TreeMap.ceylon (316:27-316:71)",'316:20-316:72','TreeMap.ceylon');
($w9.red=true);
if(($w5.onLeft&&$w8.onLeft)){
treeMap$.$1dkeuw$vw($w9);
}
else{
if(($w5.onRight&&$w8.onRight)){
treeMap$.$1dkeuw$vs($w9);
}
else{
m$1.asrt$((false),"Assertion failed: \'false\' at TreeMap.ceylon (325:31-325:37)",'325:24-325:38','TreeMap.ceylon');
}
}
}
}
}
else{
($w1.red=false);
}
};treeMap$.$1dkeuw$w0.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'newNode',mt:'prm',$t:{t:treeMap$.Node$TreeMap,a:{Key$TreeMap:'Key$TreeMap',Item$TreeMap:'Item$TreeMap'}}}],$cont:TreeMap,d:['ceylon.collection','TreeMap','$m','balanceAfterInsert$9owhr7']};};
treeMap$.put=function($wa,$wb){
var treeMap$=this;
var $wc=treeMap$.Node$TreeMap($wa,$wb,true);
var $wd;
if(m$1.nn$(($wd=treeMap$.$1dkeuw$u3))){
var $we=$wd;
while(true){
var $wf=treeMap$.$1dkeuw$u4($wa,$we.key);
if($wf===m$1.larger()) {
var $wg;
if(m$1.nn$(($wg=$we.right))){
$we=$wg;
}
else{
($we.right=$wc);
break;
}
}
else if($wf===m$1.smaller()) {
var $wh;
if(m$1.nn$(($wh=$we.left))){
$we=$wh;
}
else{
($we.left=$wc);
break;
}
}
else if($wf===m$1.equal()) {
var $wi=$we.item;
($we.item=$wb);
return $wi;
}
else throw m$1.Exception('Supposedly exhaustive switch was not exhaustive')
}
($wc.parent=$we);
}
else{
treeMap$.$1dkeuw$u3=$wc;
}
treeMap$.$1dkeuw$w0($wc);
return null;
};treeMap$.put.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Item$TreeMap']},ps:[{nm:'key',mt:'prm',$t:'Key$TreeMap'},{nm:'item',mt:'prm',$t:'Item$TreeMap'}],$cont:TreeMap,pa:3,d:['ceylon.collection','TreeMap','$m','put']};};
function $1dkeuw$ue(){
var treeMap$=this;
var $ue$=new this.$1dkeuw$ue.$$;$ue$.outer$=this;
return $ue$;
};$1dkeuw$ue.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},$cont:TreeMap,d:['ceylon.collection','TreeMap','$o','removeCases$osfi1e']};};
function $init$removeCases(){
if($1dkeuw$ue.$$===undefined){
m$1.initTypeProto($1dkeuw$ue,'ceylon.collection::TreeMap.removeCases',m$1.Basic);
TreeMap.$1dkeuw$ue=$1dkeuw$ue;
(function($ue$){
$ue$.$1dkeuw$wj=function($wk){
var $ue$=this;
var $wl;
if(m$1.nn$(($wl=$wk.left))){
m$1.asrt$((!m$1.nn$($wk.right)),"Assertion failed: \'!node.right exists\' at TreeMap.ceylon (389:23-389:42)",'389:16-389:43','TreeMap.ceylon');
return $wl;
}
else{
var $wm;
if(m$1.nn$(($wm=$wk.right))){
m$1.asrt$((!m$1.nn$($wk.left)),"Assertion failed: \'!node.left exists\' at TreeMap.ceylon (393:23-393:41)",'393:16-393:42','TreeMap.ceylon');
return $wm;
}
else{
return null;
}
}
};$ue$.$1dkeuw$wj.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:TreeMap.$$.prototype.Node$TreeMap,a:{Key$TreeMap:'Key$TreeMap',Item$TreeMap:'Item$TreeMap'}},{t:m$1.Null}]},ps:[{nm:'node',mt:'prm',$t:{t:TreeMap.$$.prototype.Node$TreeMap,a:{Key$TreeMap:'Key$TreeMap',Item$TreeMap:'Item$TreeMap'}}}],$cont:treeMap$.$1dkeuw$ue,d:['ceylon.collection','TreeMap','$o','removeCases$osfi1e','$m','getAndEnsureAtMostOneChild$j2uuc0']};};
$ue$.removeNodeWithAtMostOneChild=function($wn){
var $ue$=this,treeMap$=$ue$.outer$;
var $wo=$ue$.$1dkeuw$wj($wn);
if(!$wn.red&&$ue$.outer$.$1dkeuw$ut($wo)){
var $wp;
m$1.asrt$((m$1.nn$(($wp=$wo))),"Assertion failed: \'exists child\' at TreeMap.ceylon (404:22-404:35)",'404:16-404:36','TreeMap.ceylon');
($wp.red=false);
}
else{
if(!$wn.red){
$ue$.$1dkeuw$wq($wn,$wn.sibling);
}
}
$ue$.outer$.$1dkeuw$vf($wn,$wo);
};$ue$.removeNodeWithAtMostOneChild.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'node',mt:'prm',$t:{t:TreeMap.$$.prototype.Node$TreeMap,a:{Key$TreeMap:'Key$TreeMap',Item$TreeMap:'Item$TreeMap'}}}],$cont:treeMap$.$1dkeuw$ue,pa:1,d:['ceylon.collection','TreeMap','$o','removeCases$osfi1e','$m','removeNodeWithAtMostOneChild']};};
$ue$.$1dkeuw$wq=function($wr,$ws){
var $ue$=this,treeMap$=$ue$.outer$;
var $wt;
if(m$1.nn$(($wt=$ue$.outer$.$1dkeuw$u3))&&!($wt===$wr)){
$ue$.$1dkeuw$wu($wr,$ws);
}
};$ue$.$1dkeuw$wq.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'node',mt:'prm',$t:{t:TreeMap.$$.prototype.Node$TreeMap,a:{Key$TreeMap:'Key$TreeMap',Item$TreeMap:'Item$TreeMap'}}},{nm:'sibling',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},{t:TreeMap.$$.prototype.Node$TreeMap,a:{Key$TreeMap:'Key$TreeMap',Item$TreeMap:'Item$TreeMap'}}]}}],$cont:treeMap$.$1dkeuw$ue,d:['ceylon.collection','TreeMap','$o','removeCases$osfi1e','$m','case1$l9jgd2']};};
$ue$.$1dkeuw$wu=function($wv,$ww){
var $ue$=this,treeMap$=$ue$.outer$;
var $wx;
m$1.asrt$((m$1.nn$(($wx=$wv.parent))),"Assertion failed: \'exists p = node.parent\' at TreeMap.ceylon (421:18-421:41)",'421:12-421:42','TreeMap.ceylon');
var $wy;
if(m$1.nn$(($wy=$ww))&&$wy.red){
($wx.red=true);
($wy.red=false);
if($wv.onLeft){
$ue$.outer$.$1dkeuw$vs($wx);
}
else{
$ue$.outer$.$1dkeuw$vw($wx);
}
}
var $wz;
m$1.asrt$((m$1.nn$(($wz=$wv.parent))),"Assertion failed: \'exists newParent = node.parent\' at TreeMap.ceylon (432:18-432:49)",'432:12-432:50','TreeMap.ceylon');
$ue$.$1dkeuw$x0($wv,$wz,$wv.sibling);
};$ue$.$1dkeuw$wu.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'node',mt:'prm',$t:{t:TreeMap.$$.prototype.Node$TreeMap,a:{Key$TreeMap:'Key$TreeMap',Item$TreeMap:'Item$TreeMap'}}},{nm:'sibling',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},{t:TreeMap.$$.prototype.Node$TreeMap,a:{Key$TreeMap:'Key$TreeMap',Item$TreeMap:'Item$TreeMap'}}]}}],$cont:treeMap$.$1dkeuw$ue,d:['ceylon.collection','TreeMap','$o','removeCases$osfi1e','$m','case2$l9jhf3']};};
$ue$.$1dkeuw$x0=function($x1,$x2,$x3){
var $ue$=this,treeMap$=$ue$.outer$;
var $x4;
m$1.asrt$((m$1.nn$(($x4=$x3))),"Assertion failed: \'exists s\' at TreeMap.ceylon (437:18-437:27)",'437:12-437:28','TreeMap.ceylon');
var $x5=$ue$.outer$.$1dkeuw$ut($x4.left);
var $x6=$ue$.outer$.$1dkeuw$ut($x4.right);
if(!$x4.red&&!$x2.red&&!$x5&&!$x6){
($x4.red=true);
$ue$.$1dkeuw$wq($x2,$x2.sibling);
}
else{
$ue$.$1dkeuw$x7($x1,$x2,$x4,$x5,$x6);
}
};$ue$.$1dkeuw$x0.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'node',mt:'prm',$t:{t:TreeMap.$$.prototype.Node$TreeMap,a:{Key$TreeMap:'Key$TreeMap',Item$TreeMap:'Item$TreeMap'}}},{nm:'p',mt:'prm',$t:{t:TreeMap.$$.prototype.Node$TreeMap,a:{Key$TreeMap:'Key$TreeMap',Item$TreeMap:'Item$TreeMap'}}},{nm:'s',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},{t:TreeMap.$$.prototype.Node$TreeMap,a:{Key$TreeMap:'Key$TreeMap',Item$TreeMap:'Item$TreeMap'}}]}}],$cont:treeMap$.$1dkeuw$ue,d:['ceylon.collection','TreeMap','$o','removeCases$osfi1e','$m','case3$l9jih4']};};
$ue$.$1dkeuw$x7=function($x8,$x9,$xa,$xb,$xc){
var $ue$=this,treeMap$=$ue$.outer$;
if(!$xa.red&&$x9.red&&!$xb&&!$xc){
($xa.red=true);
($x9.red=false);
}
else{
$ue$.$1dkeuw$xd($x8,$x9,$xa,$xb,$xc);
}
};$ue$.$1dkeuw$x7.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'node',mt:'prm',$t:{t:TreeMap.$$.prototype.Node$TreeMap,a:{Key$TreeMap:'Key$TreeMap',Item$TreeMap:'Item$TreeMap'}}},{nm:'p',mt:'prm',$t:{t:TreeMap.$$.prototype.Node$TreeMap,a:{Key$TreeMap:'Key$TreeMap',Item$TreeMap:'Item$TreeMap'}}},{nm:'s',mt:'prm',$t:{t:TreeMap.$$.prototype.Node$TreeMap,a:{Key$TreeMap:'Key$TreeMap',Item$TreeMap:'Item$TreeMap'}}},{nm:'sLeftRed',mt:'prm',$t:{t:m$1.$_Boolean}},{nm:'sRightRed',mt:'prm',$t:{t:m$1.$_Boolean}}],$cont:treeMap$.$1dkeuw$ue,d:['ceylon.collection','TreeMap','$o','removeCases$osfi1e','$m','case4$l9jjj5']};};
$ue$.$1dkeuw$xd=function($xe,$xf,$xg,$xh,$xi){
var $ue$=this,treeMap$=$ue$.outer$;
if(!$xg.red&&$xh&&!$xi&&$xe.onLeft){
($xg.red=true);
var $xj;
m$1.asrt$((m$1.nn$(($xj=$xg.left))),"Assertion failed: \'exists sl = s.left\' at TreeMap.ceylon (462:23-462:42)",'462:16-462:43','TreeMap.ceylon');
($xj.red=false);
$ue$.outer$.$1dkeuw$vw($xg);
}
else{
if(!$xg.red&&!$xh&&$xi&&$xe.onRight){
($xg.red=true);
var $xk;
m$1.asrt$((m$1.nn$(($xk=$xg.right))),"Assertion failed: \'exists sr = s.right\' at TreeMap.ceylon (468:23-468:43)",'468:16-468:44','TreeMap.ceylon');
($xk.red=false);
$ue$.outer$.$1dkeuw$vs($xg);
}
}
var $xl,$xm;
m$1.asrt$((m$1.nn$(($xl=$xe.parent))&&m$1.nn$(($xm=$xe.sibling))),"Assertion failed: \'exists newParent = node.parent, exists newS = node.sibling\' at TreeMap.ceylon (472:18-472:77)",'472:12-472:78','TreeMap.ceylon');
$ue$.$1dkeuw$xn($xe,$xl,$xm);
};$ue$.$1dkeuw$xd.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'node',mt:'prm',$t:{t:TreeMap.$$.prototype.Node$TreeMap,a:{Key$TreeMap:'Key$TreeMap',Item$TreeMap:'Item$TreeMap'}}},{nm:'p',mt:'prm',$t:{t:TreeMap.$$.prototype.Node$TreeMap,a:{Key$TreeMap:'Key$TreeMap',Item$TreeMap:'Item$TreeMap'}}},{nm:'s',mt:'prm',$t:{t:TreeMap.$$.prototype.Node$TreeMap,a:{Key$TreeMap:'Key$TreeMap',Item$TreeMap:'Item$TreeMap'}}},{nm:'sLeftRed',mt:'prm',$t:{t:m$1.$_Boolean}},{nm:'sRightRed',mt:'prm',$t:{t:m$1.$_Boolean}}],$cont:treeMap$.$1dkeuw$ue,d:['ceylon.collection','TreeMap','$o','removeCases$osfi1e','$m','case5$l9jkl6']};};
$ue$.$1dkeuw$xn=function($xo,$xp,$xq){
var $ue$=this,treeMap$=$ue$.outer$;
($xq.red=$xp.red);
($xp.red=false);
var $xr;
if($xo.onLeft&&m$1.nn$(($xr=$xq.right))){
($xr.red=false);
$ue$.outer$.$1dkeuw$vs($xp);
}
else{
var $xs;
if(m$1.nn$(($xs=$xq.left))){
($xs.red=false);
$ue$.outer$.$1dkeuw$vw($xp);
}
}
};$ue$.$1dkeuw$xn.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'node',mt:'prm',$t:{t:TreeMap.$$.prototype.Node$TreeMap,a:{Key$TreeMap:'Key$TreeMap',Item$TreeMap:'Item$TreeMap'}}},{nm:'p',mt:'prm',$t:{t:TreeMap.$$.prototype.Node$TreeMap,a:{Key$TreeMap:'Key$TreeMap',Item$TreeMap:'Item$TreeMap'}}},{nm:'s',mt:'prm',$t:{t:TreeMap.$$.prototype.Node$TreeMap,a:{Key$TreeMap:'Key$TreeMap',Item$TreeMap:'Item$TreeMap'}}}],$cont:treeMap$.$1dkeuw$ue,d:['ceylon.collection','TreeMap','$o','removeCases$osfi1e','$m','case6$l9jln7']};};
})($1dkeuw$ue.$$.prototype);
}
return $1dkeuw$ue;
}
treeMap$.$init$removeCases=$init$removeCases;
m$1.atr$(treeMap$,'$1dkeuw$ud',function(){return this.$1dkeuw$ud_;},undefined,function(){return{mod:$CCMM$,$t:{t:TreeMap.$$.prototype.$init$removeCases()},$cont:TreeMap,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:TreeMap:$o:removeCases$osfi1f')];},d:['ceylon.collection','TreeMap','$o','removeCases$osfi1f']};});
treeMap$.$1dkeuw$ue=$1dkeuw$ue;treeMap$.$1dkeuw$ue.$crtmm$=function(){return{mod:$CCMM$,$t:{t:TreeMap.$$.prototype.$init$removeCases()},$cont:TreeMap,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:TreeMap:$o:removeCases$osfi1f')];},d:['ceylon.collection','TreeMap','$o','removeCases$osfi1f']};};
treeMap$.remove=function($xu){
var treeMap$=this;
var $xv;
if(m$1.nn$(($xv=treeMap$.$1dkeuw$uw($xu)))){
var $xw;
var $xx,$xy;
if(m$1.nn$(($xx=$xv.left))&&m$1.nn$(($xy=$xv.right))){
$xw=$xx.rightmostChild;
($xv.key=$xw.key);
($xv.item=$xw.item);
}
else{
$xw=$xv;
}
treeMap$.$1dkeuw$ud.removeNodeWithAtMostOneChild($xw);
return $xv.item;
}
else{
return null;
}
};treeMap$.remove.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Item$TreeMap']},ps:[{nm:'key',mt:'prm',$t:'Key$TreeMap'}],$cont:TreeMap,pa:3,d:['ceylon.collection','TreeMap','$m','remove']};};
treeMap$.removeEntry=function($xz,$y0){
var treeMap$=this;
var $y1,$y2;
if(m$1.nn$(($y1=treeMap$.$1dkeuw$uw($xz)))&&m$1.nn$(($y2=$y1.item))&&m$1.$eq$($y2,$y0)){
var $y3;
var $y4,$y5;
if(m$1.nn$(($y4=$y1.left))&&m$1.nn$(($y5=$y1.right))){
$y3=$y4.rightmostChild;
($y1.key=$y3.key);
($y1.item=$y3.item);
}
else{
$y3=$y1;
}
treeMap$.$1dkeuw$ud.removeNodeWithAtMostOneChild($y3);
return true;
}
else{
return false;
}
};treeMap$.removeEntry.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'key',mt:'prm',$t:'Key$TreeMap'},{nm:'item',mt:'prm',$t:{t:'i',l:['Item$TreeMap',{t:m$1.$_Object}]}}],$cont:TreeMap,pa:3,d:['ceylon.collection','TreeMap','$m','removeEntry']};};
treeMap$.replaceEntry=function($y6,$y7,$y8){
var treeMap$=this;
var $y9;
if(m$1.nn$(($y9=treeMap$.$1dkeuw$u3))){
var $ya=$y9;
while(true){
var $yb=treeMap$.$1dkeuw$u4($y6,$ya.key);
if($yb===m$1.larger()) {
var $yc;
if(m$1.nn$(($yc=$ya.right))){
$ya=$yc;
}
else{
break;
}
}
else if($yb===m$1.smaller()) {
var $yd;
if(m$1.nn$(($yd=$ya.left))){
$ya=$yd;
}
else{
break;
}
}
else if($yb===m$1.equal()) {
var $ye;
if(m$1.nn$(($ye=$ya.item))&&m$1.$eq$($ye,$y7)){
($ya.item=$y8);
return true;
}
else{
return false;
}
}
else throw m$1.Exception('Supposedly exhaustive switch was not exhaustive')
}
}
return false;
};treeMap$.replaceEntry.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'key',mt:'prm',$t:'Key$TreeMap'},{nm:'item',mt:'prm',$t:{t:'i',l:['Item$TreeMap',{t:m$1.$_Object}]}},{nm:'newItem',mt:'prm',$t:'Item$TreeMap'}],$cont:TreeMap,pa:3,d:['ceylon.collection','TreeMap','$m','replaceEntry']};};
treeMap$.iterator=function(){var treeMap$=this;
return treeMap$.NodeIterator$TreeMap();
};treeMap$.$_get=function($yf){var treeMap$=this;
return function(){var $yg;
if(m$1.is$(($yg=$yf),treeMap$.$$targs$$.Key$TreeMap))return ($yh=treeMap$.$1dkeuw$uw($yg),m$1.nn$($yh)?$yh.item:null);else return ($yi=treeMap$.find(m$1.forKey(m$1.jsc$2(($yj=$yg,m$1.jsc$3($yj,$yj.equals)),[{nm:'that',mt:'prm',$t:{t:m$1.$_Object}}],{}),{Result$forKey:{t:m$1.$_Boolean},Key$forKey:{t:m$1.$_Object}})),m$1.nn$($yi)?$yi.item:null)}();
var $yh,$yi,$yj;
};treeMap$.defines=function($yk){var treeMap$=this;
return function(){var $yl;
if(m$1.is$(($yl=$yk),treeMap$.$$targs$$.Key$TreeMap))return m$1.nn$(treeMap$.$1dkeuw$uw($yl));else return treeMap$.keys.any(m$1.jsc$2(($ym=$yl,m$1.jsc$3($ym,$ym.equals)),[{nm:'that',mt:'prm',$t:{t:m$1.$_Object}}],{}))}();
var $ym;
};treeMap$.getOrDefault=function($yn,$yo,$608kkw$){
var treeMap$=this;
var $yp;
if(m$1.is$(($yp=$yn),treeMap$.$$targs$$.Key$TreeMap)){
return function(){var $yq;
if(m$1.nn$(($yq=treeMap$.$1dkeuw$uw($yp))))return $yq.item;else return $yo}();
}
else{
return function(){var $yr;
if(m$1.nn$(($yr=treeMap$.find(m$1.forKey(m$1.jsc$2(($ys=$yp,m$1.jsc$3($ys,$ys.equals)),[{nm:'that',mt:'prm',$t:{t:m$1.$_Object}}],{}),{Result$forKey:{t:m$1.$_Boolean},Key$forKey:{t:m$1.$_Object}})))))return $yr.item;else return $yo}();
var $ys;
}
};treeMap$.getOrDefault.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:['Item$TreeMap','Default$getOrDefault']},ps:[{nm:'key',mt:'prm',$t:{t:m$1.$_Object}},{nm:'default',mt:'prm',$t:'Default$getOrDefault'}],$cont:TreeMap,tp:{Default$getOrDefault:{}},pa:3,d:['ceylon.collection','TreeMap','$m','getOrDefault']};};
treeMap$.higherEntries=function($yt){var treeMap$=this;
return function(){function $yu($$targs$$){
var $yu$=new $yu.$$;$yu$.outer$=treeMap$;
$yu$.$$targs$$=$$targs$$;
m$1.Iterable({Element$Iterable:{t:m$1.Entry,a:{Item$Entry:treeMap$.$$targs$$.Item$TreeMap/*ORALE!Item inv pero Item var*/,Key$Entry:treeMap$.$$targs$$.Key$TreeMap/*ORALE!Key inv pero Key var*/}},Absent$Iterable:{t:m$1.Null}},$yu$);
return $yu$;
};$yu.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},$cont:TreeMap,sts:[{t:m$1.Iterable,a:{Element$Iterable:{t:m$1.Entry,a:{Item$Entry:'Item$TreeMap',Key$Entry:'Key$TreeMap'}},Absent$Iterable:{t:m$1.Null}}}],d:['ceylon.collection','TreeMap']};};
function $init$$yu(){
if($yu.$$===undefined){
m$1.initTypeProto($yu,'ceylon.collection::TreeMap.anonymous#0',m$1.Basic,m$1.Iterable);
(function($yu$){
$yu$.iterator=function(){var $yu$=this;
return treeMap$.NodeIterator$TreeMap(treeMap$.$1dkeuw$v8($yt));
};
})($yu.$$.prototype);
}
return $yu;
}
treeMap$.$init$$yu=$init$$yu;
$init$$yu();
return $yu();}();
};treeMap$.lowerEntries=function($yw){var treeMap$=this;
return function(){function $yx($$targs$$){
var $yx$=new $yx.$$;$yx$.outer$=treeMap$;
$yx$.$$targs$$=$$targs$$;
m$1.Iterable({Element$Iterable:{t:m$1.Entry,a:{Item$Entry:treeMap$.$$targs$$.Item$TreeMap/*ORALE!Item inv pero Item var*/,Key$Entry:treeMap$.$$targs$$.Key$TreeMap/*ORALE!Key inv pero Key var*/}},Absent$Iterable:{t:m$1.Null}},$yx$);
return $yx$;
};$yx.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},$cont:TreeMap,sts:[{t:m$1.Iterable,a:{Element$Iterable:{t:m$1.Entry,a:{Item$Entry:'Item$TreeMap',Key$Entry:'Key$TreeMap'}},Absent$Iterable:{t:m$1.Null}}}],d:['ceylon.collection','TreeMap']};};
function $init$$yx(){
if($yx.$$===undefined){
m$1.initTypeProto($yx,'ceylon.collection::TreeMap.anonymous#1',m$1.Basic,m$1.Iterable);
(function($yx$){
$yx$.iterator=function(){var $yx$=this;
return treeMap$.ReverseNodeIterator$TreeMap(treeMap$.$1dkeuw$v1($yw));
};
})($yx.$$.prototype);
}
return $yx;
}
treeMap$.$init$$yx=$init$$yx;
$init$$yx();
return $yx();}();
};treeMap$.ascendingEntries=function($yz,$z0){var treeMap$=this;
return treeMap$.higherEntries($yz).takeWhile(m$1.jsc$2((function($z1){return !m$1.$eq$(treeMap$.$1dkeuw$u4($z1.key,$z0),m$1.larger());
}),[{nm:'entry',mt:'prm',$t:{t:m$1.Entry,a:{Item$Entry:treeMap$.$$targs$$.Item$TreeMap,Key$Entry:treeMap$.$$targs$$.Key$TreeMap}}}],{Arguments$Callable:m$1.mtt$([{t:m$1.Entry,a:{Item$Entry:treeMap$.$$targs$$.Item$TreeMap/*ORALE!Item inv pero Item var*/,Key$Entry:treeMap$.$$targs$$.Key$TreeMap/*ORALE!Key inv pero Key var*/}}]),Return$Callable:{t:m$1.$_Boolean}}));
};treeMap$.descendingEntries=function($z2,$z3){var treeMap$=this;
return treeMap$.lowerEntries($z2).takeWhile(m$1.jsc$2((function($z4){return !m$1.$eq$(treeMap$.$1dkeuw$u4($z4.key,$z3),m$1.smaller());
}),[{nm:'entry',mt:'prm',$t:{t:m$1.Entry,a:{Item$Entry:treeMap$.$$targs$$.Item$TreeMap,Key$Entry:treeMap$.$$targs$$.Key$TreeMap}}}],{Arguments$Callable:m$1.mtt$([{t:m$1.Entry,a:{Item$Entry:treeMap$.$$targs$$.Item$TreeMap/*ORALE!Item inv pero Item var*/,Key$Entry:treeMap$.$$targs$$.Key$TreeMap/*ORALE!Key inv pero Key var*/}}]),Return$Callable:{t:m$1.$_Boolean}}));
};treeMap$.contains=function($z5){
var treeMap$=this;
var $z6,$z7;
if(m$1.is$(($z6=$z5),{t:m$1.Entry,a:{Item$Entry:treeMap$.$$targs$$.Item$TreeMap/*ORALE!Item inv pero Item var*/,Key$Entry:treeMap$.$$targs$$.Key$TreeMap/*ORALE!Key inv pero Key var*/}})&&m$1.nn$(($z7=treeMap$.$1dkeuw$uw($z6.key)))){
var $z8;
if(m$1.nn$(($z8=$z7.item))){
var $z9;
if(m$1.nn$(($z9=$z6.item))){
return m$1.$eq$($z9,$z8);
}
else{
return false;
}
}
else{
return !m$1.nn$($z6.item);
}
}
else{
return false;
}
};treeMap$.contains.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'entry',mt:'prm',$t:{t:m$1.$_Object}}],$cont:TreeMap,pa:3,d:['ceylon.collection','TreeMap','$m','contains']};};
treeMap$.clear=function(){var treeMap$=this;
return (treeMap$.$1dkeuw$u3=null);
};m$1.atr$(treeMap$,'size',function(){
var treeMap$=this;
return ($za=($zb=treeMap$.$1dkeuw$u3,m$1.nn$($zb)?$zb.size:null),m$1.nn$($za)?$za:(0));
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:TreeMap,pa:3,d:['ceylon.collection','TreeMap','$at','size']};});
m$1.atr$(treeMap$,'first',function(){
var treeMap$=this;
return function(){var $zc;
if(m$1.nn$(($zc=($zd=treeMap$.$1dkeuw$u3,m$1.nn$($zd)?$zd.leftmostChild:null))))return m$1.Entry($zc.key,$zc.item,{Item$Entry:treeMap$.$$targs$$.Item$TreeMap/*ORALE!Item inv pero Item var*/,Key$Entry:treeMap$.$$targs$$.Key$TreeMap/*ORALE!Key inv pero Key var*/});else return null}();
},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Entry,a:{Item$Entry:'Item$TreeMap',Key$Entry:'Key$TreeMap'}}]},$cont:TreeMap,pa:3,d:['ceylon.collection','TreeMap','$at','first']};});
m$1.atr$(treeMap$,'last',function(){
var treeMap$=this;
return function(){var $ze;
if(m$1.nn$(($ze=($zf=treeMap$.$1dkeuw$u3,m$1.nn$($zf)?$zf.rightmostChild:null))))return m$1.Entry($ze.key,$ze.item,{Item$Entry:treeMap$.$$targs$$.Item$TreeMap/*ORALE!Item inv pero Item var*/,Key$Entry:treeMap$.$$targs$$.Key$TreeMap/*ORALE!Key inv pero Key var*/});else return null}();
},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Entry,a:{Item$Entry:'Item$TreeMap',Key$Entry:'Key$TreeMap'}}]},$cont:TreeMap,pa:3,d:['ceylon.collection','TreeMap','$at','last']};});
treeMap$.measure=function($zg,$zh){var treeMap$=this;
return TreeMap(m$1.jsc$2(m$1.jsc$3(treeMap$,treeMap$.$1dkeuw$u4),[{nm:'x',mt:'prm',$t:treeMap$.$$targs$$.Key$TreeMap},{nm:'y',mt:'prm',$t:treeMap$.$$targs$$.Key$TreeMap}],{Key$TreeMap:treeMap$.$$targs$$.Key$TreeMap,Item$TreeMap:treeMap$.$$targs$$.Item$TreeMap}),treeMap$.higherEntries($zg).take($zh),{Key$TreeMap:treeMap$.$$targs$$.Key$TreeMap,Item$TreeMap:treeMap$.$$targs$$.Item$TreeMap});
};treeMap$.span=function($zi,$zj){var treeMap$=this;
return function(){var $zk=m$1.$eq$(treeMap$.$1dkeuw$u4($zi,$zj),m$1.larger());return ($zl=m$1.jsc$2((function($zm,$zn){return ($zo=($zk?treeMap$.$1dkeuw$u4($zn,$zm):null),m$1.nn$($zo)?$zo:treeMap$.$1dkeuw$u4($zm,$zn));
var $zo;
}),[{nm:'x',mt:'prm',$t:treeMap$.$$targs$$.Key$TreeMap},{nm:'y',mt:'prm',$t:treeMap$.$$targs$$.Key$TreeMap}],{Arguments$Callable:m$1.mtt$([{t:m$1.$_String}]),Return$Callable:{t:m$1.Comparison}}),$zp=($zq=($zk?treeMap$.descendingEntries($zi,$zj):null),m$1.nn$($zq)?$zq:treeMap$.ascendingEntries($zi,$zj)),TreeMap($zl,$zp,{Key$TreeMap:treeMap$.$$targs$$.Key$TreeMap,Item$TreeMap:treeMap$.$$targs$$.Item$TreeMap}));
var $zl,$zp,$zq;
}();
};treeMap$.spanFrom=function($zr){var treeMap$=this;
return TreeMap(m$1.jsc$2(m$1.jsc$3(treeMap$,treeMap$.$1dkeuw$u4),[{nm:'x',mt:'prm',$t:treeMap$.$$targs$$.Key$TreeMap},{nm:'y',mt:'prm',$t:treeMap$.$$targs$$.Key$TreeMap}],{Key$TreeMap:treeMap$.$$targs$$.Key$TreeMap,Item$TreeMap:treeMap$.$$targs$$.Item$TreeMap}),treeMap$.higherEntries($zr),{Key$TreeMap:treeMap$.$$targs$$.Key$TreeMap,Item$TreeMap:treeMap$.$$targs$$.Item$TreeMap});
};treeMap$.spanTo=function($zs){var treeMap$=this;
return TreeMap(m$1.jsc$2(m$1.jsc$3(treeMap$,treeMap$.$1dkeuw$u4),[{nm:'x',mt:'prm',$t:treeMap$.$$targs$$.Key$TreeMap},{nm:'y',mt:'prm',$t:treeMap$.$$targs$$.Key$TreeMap}],{Key$TreeMap:treeMap$.$$targs$$.Key$TreeMap,Item$TreeMap:treeMap$.$$targs$$.Item$TreeMap}),treeMap$.takeWhile(m$1.jsc$2((function($zt){return !m$1.$eq$(treeMap$.$1dkeuw$u4($zt.key,$zs),m$1.larger());
}),[{nm:'entry',mt:'prm',$t:{t:m$1.Entry,a:{Item$Entry:treeMap$.$$targs$$.Item$TreeMap,Key$Entry:treeMap$.$$targs$$.Key$TreeMap}}}],{Arguments$Callable:m$1.mtt$([{t:m$1.Entry,a:{Item$Entry:treeMap$.$$targs$$.Item$TreeMap/*ORALE!Item inv pero Item var*/,Key$Entry:treeMap$.$$targs$$.Key$TreeMap/*ORALE!Key inv pero Key var*/}}]),Return$Callable:{t:m$1.$_Boolean}})),{Key$TreeMap:treeMap$.$$targs$$.Key$TreeMap,Item$TreeMap:treeMap$.$$targs$$.Item$TreeMap});
};treeMap$.clone=function(){var treeMap$=this;
return TreeMap$c_copy(treeMap$,{Key$TreeMap:treeMap$.$$targs$$.Key$TreeMap,Item$TreeMap:treeMap$.$$targs$$.Item$TreeMap});
};
treeMap$.clone.$crtmm$=function(){return{mod:$CCMM$,$t:{t:TreeMap,a:{Key$TreeMap:'Key$TreeMap',Item$TreeMap:'Item$TreeMap'}},ps:[],$cont:TreeMap,pa:3,d:['ceylon.collection','TreeMap','$m','clone']};};
m$1.atr$(treeMap$,'string',function(){
var treeMap$=this;
return function(){var $zu;
if(m$1.nn$(($zu=treeMap$.$1dkeuw$u3)))return "{ ".plus($zu.string).plus(" }");else return "{}"}();
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:TreeMap,pa:3,d:['ceylon.collection','TreeMap','$at','string']};});
treeMap$.equals=function($zv){var treeMap$=this;
return treeMap$.getT$all()['ceylon.language::Map'].$$.prototype.equals.call(treeMap$,$zv);
};m$1.atr$(treeMap$,'hash',function(){
var treeMap$=this;
return m$1.attrGetter(treeMap$.getT$all()['ceylon.language::Map'],'hash').call(this);
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:TreeMap,pa:3,d:['ceylon.collection','TreeMap','$at','hash']};});
treeMap$.assertInvariants=function(){
var treeMap$=this;
treeMap$.$1dkeuw$zw();
treeMap$.$1dkeuw$zx();
treeMap$.$1dkeuw$zy();
};treeMap$.assertInvariants.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[],$cont:TreeMap,pa:1,d:['ceylon.collection','TreeMap','$m','assertInvariants']};};
treeMap$.$1dkeuw$zw=function(){
var treeMap$=this;
m$1.asrt$((!treeMap$.$1dkeuw$ut(treeMap$.$1dkeuw$u3)),"Assertion failed: \'!isRed(root)\' at TreeMap.ceylon (749:15-749:28)",'749:8-749:29','TreeMap.ceylon');
};treeMap$.$1dkeuw$zw.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[],$cont:TreeMap,d:['ceylon.collection','TreeMap','$m','assertBlackRoot$37b14f']};};
treeMap$.$1dkeuw$zx$defs$node=function($zz){var treeMap$=this;
return treeMap$.$1dkeuw$u3;};
treeMap$.$1dkeuw$zx=function($zz){
var treeMap$=this;
if($zz===undefined){$zz=treeMap$.$1dkeuw$u3;}
var $100;
if(m$1.nn$(($100=$zz))){
if(treeMap$.$1dkeuw$ut($100)){
m$1.asrt$((!treeMap$.$1dkeuw$ut($100.left)),"Assertion failed: \'!isRed(node.left)\' at TreeMap.ceylon (755:23-755:41)",'755:16-755:42','TreeMap.ceylon');
m$1.asrt$((!treeMap$.$1dkeuw$ut($100.right)),"Assertion failed: \'!isRed(node.right)\' at TreeMap.ceylon (756:23-756:42)",'756:16-756:43','TreeMap.ceylon');
m$1.asrt$((!treeMap$.$1dkeuw$ut($100.parent)),"Assertion failed: \'!isRed(node.parent)\' at TreeMap.ceylon (757:23-757:43)",'757:16-757:44','TreeMap.ceylon');
}
treeMap$.$1dkeuw$zx($100.left);
treeMap$.$1dkeuw$zx($100.right);
}
};treeMap$.$1dkeuw$zx.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'node',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:treeMap$.Node$TreeMap,a:{Key$TreeMap:'Key$TreeMap',Item$TreeMap:'Item$TreeMap'}}]}}],$cont:TreeMap,d:['ceylon.collection','TreeMap','$m','assertColors$bbyw4y']};};
treeMap$.$1dkeuw$zy$defs$node=function($101,$102,$103){var treeMap$=this;
return treeMap$.$1dkeuw$u3;};
treeMap$.$1dkeuw$zy$defs$blackCount=function($101,$102,$103){return 0;};
treeMap$.$1dkeuw$zy$defs$pathBlackCount=function($101,$102,$103){return null;};
treeMap$.$1dkeuw$zy=function($101,$102,$103){
var treeMap$=this;
if($101===undefined){$101=treeMap$.$1dkeuw$u3;}
if($102===undefined){$102=(0);}
if($103===undefined){$103=null;}
if(!treeMap$.$1dkeuw$ut($101)){
($104=$102,$102=$104.successor,$104);
var $104;
}
var $105;
if(m$1.nn$(($105=$101))){
$103=treeMap$.$1dkeuw$zy($105.left,$102,$103);
$103=treeMap$.$1dkeuw$zy($105.right,$102,$103);
return $103;
}
else{
var $106;
if(m$1.nn$(($106=$103))){
m$1.asrt$((($102==$106)),"Assertion failed: \'blackCount == count\' at TreeMap.ceylon (781:23-781:43)",'781:16-781:44','TreeMap.ceylon');
}
else{
$103=$102;
}
return $103;
}
};treeMap$.$1dkeuw$zy.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]},ps:[{nm:'node',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:treeMap$.Node$TreeMap,a:{Key$TreeMap:'Key$TreeMap',Item$TreeMap:'Item$TreeMap'}}]}},{nm:'blackCount',mt:'prm',def:1,$t:{t:m$1.Integer}},{nm:'pathBlackCount',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]}}],$cont:TreeMap,d:['ceylon.collection','TreeMap','$m','assertBlackNodesInPaths$9l267p']};};
function Node$TreeMap$$c($107$){
}
function Node$TreeMap(){return Node$TreeMap$c_$c$.apply(this,arguments);}
function Node$TreeMap$c_$c$$$a($108,$109,$10a,$107$){
$107$.$1dkeuw$10b_=null;
$107$.$1dkeuw$10c_=null;
$107$.$1dkeuw$10d_=null;
$107$.key_=$108;
m$1.atr$($107$,'key',function(){return this.key_;},function($10e){return this.key_=$10e;},function(){return{mod:$CCMM$,$t:'Key$TreeMap',$cont:treeMap$.Node$TreeMap,pa:1025,d:['ceylon.collection','TreeMap','$c','Node$7z3hge','$at','key']};});
$107$.item_=$109;
m$1.atr$($107$,'item',function(){return this.item_;},function($10f){return this.item_=$10f;},function(){return{mod:$CCMM$,$t:'Item$TreeMap',$cont:treeMap$.Node$TreeMap,pa:1025,d:['ceylon.collection','TreeMap','$c','Node$7z3hge','$at','item']};});
$107$.red_=$10a;
m$1.atr$($107$,'red',function(){return this.red_;},function($10g){return this.red_=$10g;},function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},$cont:treeMap$.Node$TreeMap,pa:1025,d:['ceylon.collection','TreeMap','$c','Node$7z3hge','$at','red']};});
return $107$;
};
function Node$TreeMap$c_$c$($108,$109,$10a,$107$){
$init$Node$TreeMap();
if($107$===undefined)$107$=new this.Node$TreeMap.$$;
$107$.outer$=this;
Node$TreeMap$$c($107$);
Node$TreeMap$c_$c$$$a($108,$109,$10a,$107$);
return $107$;
};
Node$TreeMap$c_$c$.$crtmm$=function(){return{mod:$CCMM$,ps:[{nm:'key',mt:'prm',$t:'Key$TreeMap'},{nm:'item',mt:'prm',$t:'Item$TreeMap'},{nm:'red',mt:'prm',$t:{t:m$1.$_Boolean}}],$cont:treeMap$.Node$TreeMap,pa:1,d:['ceylon.collection','TreeMap','$c','Node$7z3hge','$cn','$def']};};
Node$TreeMap.Node$TreeMap$c_$c$=Node$TreeMap$c_$c$;
treeMap$.Node$TreeMap$c_$c$=Node$TreeMap$c_$c$;
Node$TreeMap.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'key',mt:'prm',$t:'Key$TreeMap'},{nm:'item',mt:'prm',$t:'Item$TreeMap'},{nm:'red',mt:'prm',$t:{t:m$1.$_Boolean}}],$cont:TreeMap,d:['ceylon.collection','TreeMap','$c','Node$7z3hge']};};
function $init$Node$TreeMap(){
if(Node$TreeMap.$$===undefined){
m$1.initTypeProto(Node$TreeMap,'ceylon.collection::TreeMap.Node',m$1.Basic);
TreeMap.Node$TreeMap=Node$TreeMap;
(function($107$){
m$1.atr$($107$,'key',function(){return this.key_;},function($10h){return this.key_=$10h;},function(){return{mod:$CCMM$,$t:'Key$TreeMap',$cont:treeMap$.Node$TreeMap,pa:1025,d:['ceylon.collection','TreeMap','$c','Node$7z3hge','$at','key']};});
m$1.atr$($107$,'item',function(){return this.item_;},function($10i){return this.item_=$10i;},function(){return{mod:$CCMM$,$t:'Item$TreeMap',$cont:treeMap$.Node$TreeMap,pa:1025,d:['ceylon.collection','TreeMap','$c','Node$7z3hge','$at','item']};});
m$1.atr$($107$,'left',function(){return this.$1dkeuw$10b_;},function($10j){return this.$1dkeuw$10b_=$10j;},function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:TreeMap.$$.prototype.Node$TreeMap,a:{Key$TreeMap:'Key$TreeMap',Item$TreeMap:'Item$TreeMap'}}]},$cont:treeMap$.Node$TreeMap,pa:1025,d:['ceylon.collection','TreeMap','$c','Node$7z3hge','$at','left']};});
m$1.atr$($107$,'right',function(){return this.$1dkeuw$10c_;},function($10k){return this.$1dkeuw$10c_=$10k;},function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:TreeMap.$$.prototype.Node$TreeMap,a:{Key$TreeMap:'Key$TreeMap',Item$TreeMap:'Item$TreeMap'}}]},$cont:treeMap$.Node$TreeMap,pa:1025,d:['ceylon.collection','TreeMap','$c','Node$7z3hge','$at','right']};});
m$1.atr$($107$,'parent',function(){return this.$1dkeuw$10d_;},function($10l){return this.$1dkeuw$10d_=$10l;},function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:TreeMap.$$.prototype.Node$TreeMap,a:{Key$TreeMap:'Key$TreeMap',Item$TreeMap:'Item$TreeMap'}}]},$cont:treeMap$.Node$TreeMap,pa:1025,d:['ceylon.collection','TreeMap','$c','Node$7z3hge','$at','parent']};});
m$1.atr$($107$,'red',function(){return this.red_;},function($10m){return this.red_=$10m;},function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},$cont:treeMap$.Node$TreeMap,pa:1025,d:['ceylon.collection','TreeMap','$c','Node$7z3hge','$at','red']};});
m$1.atr$($107$,'onLeft',function(){
var $107$=this;
return function(){var $10n;
if(m$1.nn$(($10n=($10o=$107$.parent,m$1.nn$($10o)?$10o.left:null))))return m$1.$eq$($107$,$10n);else return false}();
var $10o;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},$cont:treeMap$.Node$TreeMap,pa:1,d:['ceylon.collection','TreeMap','$c','Node$7z3hge','$at','onLeft']};});
m$1.atr$($107$,'onRight',function(){
var $107$=this;
return function(){var $10p;
if(m$1.nn$(($10p=($10q=$107$.parent,m$1.nn$($10q)?$10q.right:null))))return m$1.$eq$($107$,$10p);else return false}();
var $10q;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},$cont:treeMap$.Node$TreeMap,pa:1,d:['ceylon.collection','TreeMap','$c','Node$7z3hge','$at','onRight']};});
m$1.atr$($107$,'grandparent',function(){
var $107$=this;
return ($10r=$107$.parent,m$1.nn$($10r)?$10r.parent:null);
var $10r;
},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:TreeMap.$$.prototype.Node$TreeMap,a:{Key$TreeMap:'Key$TreeMap',Item$TreeMap:'Item$TreeMap'}}]},$cont:treeMap$.Node$TreeMap,pa:1,d:['ceylon.collection','TreeMap','$c','Node$7z3hge','$at','grandparent']};});
m$1.atr$($107$,'sibling',function(){
var $107$=this;
var $10s;
if(m$1.nn$(($10s=$107$.parent))){
if($107$.onLeft){
return $10s.right;
}
else{
if($107$.onRight){
return $10s.left;
}
else{
m$1.asrt$((false),"Assertion failed: \'false\' at TreeMap.ceylon (81:27-81:33)",'81:20-81:34','TreeMap.ceylon');
}
}
}
else{
return null;
}
},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:TreeMap.$$.prototype.Node$TreeMap,a:{Key$TreeMap:'Key$TreeMap',Item$TreeMap:'Item$TreeMap'}}]},$cont:treeMap$.Node$TreeMap,pa:1,d:['ceylon.collection','TreeMap','$c','Node$7z3hge','$at','sibling']};});m$1.atr$($107$,'uncle',function(){
var $107$=this;
return ($10t=$107$.parent,m$1.nn$($10t)?$10t.sibling:null);
var $10t;
},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:TreeMap.$$.prototype.Node$TreeMap,a:{Key$TreeMap:'Key$TreeMap',Item$TreeMap:'Item$TreeMap'}}]},$cont:treeMap$.Node$TreeMap,pa:1,d:['ceylon.collection','TreeMap','$c','Node$7z3hge','$at','uncle']};});
m$1.atr$($107$,'rightmostChild',function(){
var $107$=this;
var $10u=$107$;
var $10v;
while(m$1.nn$(($10v=$10u.right))){
$10u=$10v;
}
return $10u;
},undefined,function(){return{mod:$CCMM$,$t:{t:TreeMap.$$.prototype.Node$TreeMap,a:{Key$TreeMap:'Key$TreeMap',Item$TreeMap:'Item$TreeMap'}},$cont:treeMap$.Node$TreeMap,pa:1,d:['ceylon.collection','TreeMap','$c','Node$7z3hge','$at','rightmostChild']};});m$1.atr$($107$,'leftmostChild',function(){
var $107$=this;
var $10w=$107$;
var $10x;
while(m$1.nn$(($10x=$10w.left))){
$10w=$10x;
}
return $10w;
},undefined,function(){return{mod:$CCMM$,$t:{t:TreeMap.$$.prototype.Node$TreeMap,a:{Key$TreeMap:'Key$TreeMap',Item$TreeMap:'Item$TreeMap'}},$cont:treeMap$.Node$TreeMap,pa:1,d:['ceylon.collection','TreeMap','$c','Node$7z3hge','$at','leftmostChild']};});m$1.atr$($107$,'string',function(){
var $107$=this;
var $10y=m$1.StringBuilder();
var $10z;
if(m$1.nn$(($10z=$107$.left))){
$10y.append($10z.string).append(", ");
}
$10y.append($107$.key.string).append("->").append(($110=($111=$107$.item,m$1.nn$($111)?$111.string:null),m$1.nn$($110)?$110:"<null>"));
var $110,$111;
var $112;
if(m$1.nn$(($112=$107$.right))){
$10y.append(", ").append($112.string);
}
return $10y.string;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:treeMap$.Node$TreeMap,pa:3,d:['ceylon.collection','TreeMap','$c','Node$7z3hge','$at','string']};});m$1.atr$($107$,'size',function(){
var $107$=this;
var $113=(1);
var $114;
if(m$1.nn$(($114=$107$.left))){
($113=$113.plus($114.size));
}
var $115;
if(m$1.nn$(($115=$107$.right))){
($113=$113.plus($115.size));
}
return $113;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:treeMap$.Node$TreeMap,pa:1,d:['ceylon.collection','TreeMap','$c','Node$7z3hge','$at','size']};});
})(Node$TreeMap.$$.prototype);
}
return Node$TreeMap;
}
treeMap$.$init$Node$TreeMap=$init$Node$TreeMap;
treeMap$.Node$TreeMap=Node$TreeMap;
function NodeIterator$TreeMap($1dkeuw$116,$117$){
$init$NodeIterator$TreeMap();
if($117$===undefined)$117$=new this.NodeIterator$TreeMap.$$;
$117$.outer$=this;
$117$.$$targs$$={Element$Iterator:{t:m$1.Entry,a:{Item$Entry:$117$.outer$.$$targs$$.Item$TreeMap/*ORALE!Item inv pero Item var*/,Key$Entry:$117$.outer$.$$targs$$.Key$TreeMap/*ORALE!Key inv pero Key var*/}}};
if($1dkeuw$116===undefined){$1dkeuw$116=$init$TreeMap().$$.prototype.$init$NodeIterator$TreeMap().$defs$current($117$);}
$117$.$1dkeuw$116_=$1dkeuw$116;
m$1.Iterator({Element$Iterator:{t:m$1.Entry,a:{Item$Entry:$117$.outer$.$$targs$$.Item$TreeMap/*ORALE!Item inv pero Item var*/,Key$Entry:$117$.outer$.$$targs$$.Key$TreeMap/*ORALE!Key inv pero Key var*/}}},$117$);
return $117$;
}
NodeIterator$TreeMap.$defs$current=function($117$){return ($118=$117$.outer$.$1dkeuw$u3,m$1.nn$($118)?$118.leftmostChild:null)};NodeIterator$TreeMap.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'current',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:TreeMap.$$.prototype.Node$TreeMap,a:{Key$TreeMap:'Key$TreeMap',Item$TreeMap:'Item$TreeMap'}}]},pa:1027}],$cont:TreeMap,sts:[{t:m$1.Iterator,a:{Element$Iterator:{t:m$1.Entry,a:{Item$Entry:'Item$TreeMap',Key$Entry:'Key$TreeMap'}}}}],d:['ceylon.collection','TreeMap','$c','NodeIterator$6tiwsc']};};
function $init$NodeIterator$TreeMap(){
if(NodeIterator$TreeMap.$$===undefined){
m$1.initTypeProto(NodeIterator$TreeMap,'ceylon.collection::TreeMap.NodeIterator',m$1.Basic,m$1.Iterator);
TreeMap.NodeIterator$TreeMap=NodeIterator$TreeMap;
(function($117$){
m$1.atr$($117$,'$1dkeuw$116',function(){return this.$1dkeuw$116_;},function($119){return this.$1dkeuw$116_=$119;},function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:TreeMap.$$.prototype.Node$TreeMap,a:{Key$TreeMap:'Key$TreeMap',Item$TreeMap:'Item$TreeMap'}}]},$cont:treeMap$.NodeIterator$TreeMap,pa:1027,d:['ceylon.collection','TreeMap','$c','NodeIterator$6tiwsc','$at','current$5dq3a0']};});
$117$.next=function(){
var $117$=this;
var $11a=function(){var $11b;
if(m$1.nn$(($11b=$117$.$1dkeuw$116)))return m$1.Entry($11b.key,$11b.item,{Item$Entry:$117$.outer$.$$targs$$.Item$TreeMap/*ORALE!Item inv pero Item var*/,Key$Entry:$117$.outer$.$$targs$$.Key$TreeMap/*ORALE!Key inv pero Key var*/});else return m$1.finished()}();
var $11c,$11d;
if(m$1.nn$(($11c=$117$.$1dkeuw$116))&&m$1.nn$(($11d=$11c.right))){
$117$.$1dkeuw$116=$11d;
var $11e;
while(m$1.nn$(($11e=($11f=$117$.$1dkeuw$116,m$1.nn$($11f)?$11f.left:null)))){
$117$.$1dkeuw$116=$11e;
}
var $11f;
}
else{
var $11g;
if(m$1.nn$(($11g=$117$.$1dkeuw$116))){
var $11h=$11g;
var $11i;
while(m$1.nn$(($11i=$11h.parent))&&$11h.onRight){
$11h=$11i;
}
$117$.$1dkeuw$116=$11h.parent;
}
else{
$117$.$1dkeuw$116=null;
}
}
return $11a;
};$117$.next.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Entry,a:{Item$Entry:'Item$TreeMap',Key$Entry:'Key$TreeMap'}},{t:m$1.Finished}]},ps:[],$cont:treeMap$.NodeIterator$TreeMap,pa:3,d:['ceylon.collection','TreeMap','$c','NodeIterator$6tiwsc','$m','next']};};
})(NodeIterator$TreeMap.$$.prototype);
}
return NodeIterator$TreeMap;
}
treeMap$.$init$NodeIterator$TreeMap=$init$NodeIterator$TreeMap;
treeMap$.NodeIterator$TreeMap=NodeIterator$TreeMap;
function ReverseNodeIterator$TreeMap($1dkeuw$11j,$11k$){
$init$ReverseNodeIterator$TreeMap();
if($11k$===undefined)$11k$=new this.ReverseNodeIterator$TreeMap.$$;
$11k$.outer$=this;
$11k$.$$targs$$={Element$Iterator:{t:m$1.Entry,a:{Item$Entry:$11k$.outer$.$$targs$$.Item$TreeMap/*ORALE!Item inv pero Item var*/,Key$Entry:$11k$.outer$.$$targs$$.Key$TreeMap/*ORALE!Key inv pero Key var*/}}};
if($1dkeuw$11j===undefined){$1dkeuw$11j=$init$TreeMap().$$.prototype.$init$ReverseNodeIterator$TreeMap().$defs$current($11k$);}
$11k$.$1dkeuw$11j_=$1dkeuw$11j;
m$1.Iterator({Element$Iterator:{t:m$1.Entry,a:{Item$Entry:$11k$.outer$.$$targs$$.Item$TreeMap/*ORALE!Item inv pero Item var*/,Key$Entry:$11k$.outer$.$$targs$$.Key$TreeMap/*ORALE!Key inv pero Key var*/}}},$11k$);
return $11k$;
}
ReverseNodeIterator$TreeMap.$defs$current=function($11k$){return ($11l=$11k$.outer$.$1dkeuw$u3,m$1.nn$($11l)?$11l.rightmostChild:null)};ReverseNodeIterator$TreeMap.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'current',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:TreeMap.$$.prototype.Node$TreeMap,a:{Key$TreeMap:'Key$TreeMap',Item$TreeMap:'Item$TreeMap'}}]},pa:1027}],$cont:TreeMap,sts:[{t:m$1.Iterator,a:{Element$Iterator:{t:m$1.Entry,a:{Item$Entry:'Item$TreeMap',Key$Entry:'Key$TreeMap'}}}}],d:['ceylon.collection','TreeMap','$c','ReverseNodeIterator$z6e966']};};
function $init$ReverseNodeIterator$TreeMap(){
if(ReverseNodeIterator$TreeMap.$$===undefined){
m$1.initTypeProto(ReverseNodeIterator$TreeMap,'ceylon.collection::TreeMap.ReverseNodeIterator',m$1.Basic,m$1.Iterator);
TreeMap.ReverseNodeIterator$TreeMap=ReverseNodeIterator$TreeMap;
(function($11k$){
m$1.atr$($11k$,'$1dkeuw$11j',function(){return this.$1dkeuw$11j_;},function($11m){return this.$1dkeuw$11j_=$11m;},function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:TreeMap.$$.prototype.Node$TreeMap,a:{Key$TreeMap:'Key$TreeMap',Item$TreeMap:'Item$TreeMap'}}]},$cont:treeMap$.ReverseNodeIterator$TreeMap,pa:1027,d:['ceylon.collection','TreeMap','$c','ReverseNodeIterator$z6e966','$at','current$suzjhm']};});
$11k$.next=function(){
var $11k$=this;
var $11n=function(){var $11o;
if(m$1.nn$(($11o=$11k$.$1dkeuw$11j)))return m$1.Entry($11o.key,$11o.item,{Item$Entry:$11k$.outer$.$$targs$$.Item$TreeMap/*ORALE!Item inv pero Item var*/,Key$Entry:$11k$.outer$.$$targs$$.Key$TreeMap/*ORALE!Key inv pero Key var*/});else return m$1.finished()}();
var $11p,$11q;
if(m$1.nn$(($11p=$11k$.$1dkeuw$11j))&&m$1.nn$(($11q=$11p.left))){
$11k$.$1dkeuw$11j=$11q;
var $11r;
while(m$1.nn$(($11r=($11s=$11k$.$1dkeuw$11j,m$1.nn$($11s)?$11s.right:null)))){
$11k$.$1dkeuw$11j=$11r;
}
var $11s;
}
else{
var $11t;
if(m$1.nn$(($11t=$11k$.$1dkeuw$11j))){
$11k$.$1dkeuw$11j=$11t.parent;
var $11u=$11t;
var $11v;
while(m$1.nn$(($11v=$11k$.$1dkeuw$11j))&&$11u.onLeft){
$11u=$11v;
$11k$.$1dkeuw$11j=$11v.parent;
}
}
else{
$11k$.$1dkeuw$11j=null;
}
}
return $11n;
};$11k$.next.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Entry,a:{Item$Entry:'Item$TreeMap',Key$Entry:'Key$TreeMap'}},{t:m$1.Finished}]},ps:[],$cont:treeMap$.ReverseNodeIterator$TreeMap,pa:3,d:['ceylon.collection','TreeMap','$c','ReverseNodeIterator$z6e966','$m','next']};};
})(ReverseNodeIterator$TreeMap.$$.prototype);
}
return ReverseNodeIterator$TreeMap;
}
treeMap$.$init$ReverseNodeIterator$TreeMap=$init$ReverseNodeIterator$TreeMap;
treeMap$.ReverseNodeIterator$TreeMap=ReverseNodeIterator$TreeMap;
$init$removeCases();
$init$Node$TreeMap();
$init$NodeIterator$TreeMap();
$init$ReverseNodeIterator$TreeMap();
})(TreeMap.$$.prototype);
}
return TreeMap;
}
ex$.$init$TreeMap=$init$TreeMap;
$init$TreeMap();
TreeMap.inst$$=function($11w){
var treeMap$=new TreeMap.$$;
m$1.set_type_args(treeMap$,{Key$TreeMap:$11w.$$targs$$.Type$Class.a.Key$TreeMap,Item$TreeMap:$11w.$$targs$$.Type$Class.a.Item$TreeMap});
m$1.set_type_args(treeMap$,{Key$MutableMap:treeMap$.$$targs$$.Key$TreeMap,Item$MutableMap:treeMap$.$$targs$$.Item$TreeMap,Key$Map:treeMap$.$$targs$$.Key$TreeMap,Item$Map:treeMap$.$$targs$$.Item$TreeMap,Element$Collection:{t:m$1.Entry,a:{Item$Entry:treeMap$.$$targs$$.Item$TreeMap/*ORALE!Item inv pero Item var*/,Key$Entry:treeMap$.$$targs$$.Key$TreeMap/*ORALE!Key inv pero Key var*/}},Element$Iterable:{t:m$1.Entry,a:{Item$Entry:treeMap$.$$targs$$.Item$TreeMap/*ORALE!Item inv pero Item var*/,Key$Entry:treeMap$.$$targs$$.Key$TreeMap/*ORALE!Key inv pero Key var*/}},Absent$Iterable:{t:m$1.Null},Element$Category:{t:m$1.$_Object},Item$Correspondence:treeMap$.$$targs$$.Item$TreeMap,Key$Correspondence:{t:m$1.$_Object},Key$MapMutator:treeMap$.$$targs$$.Key$TreeMap,Item$MapMutator:treeMap$.$$targs$$.Item$TreeMap,Key$KeyedCorrespondenceMutator:treeMap$.$$targs$$.Key$TreeMap,Item$KeyedCorrespondenceMutator:treeMap$.$$targs$$.Item$TreeMap,Item$CorrespondenceMutator:treeMap$.$$targs$$.Item$TreeMap,Key$SortedMap:treeMap$.$$targs$$.Key$TreeMap,Item$SortedMap:treeMap$.$$targs$$.Item$TreeMap,Subrange$Ranged:{t:SortedMap,a:{Key$SortedMap:treeMap$.$$targs$$.Key$TreeMap,Item$SortedMap:treeMap$.$$targs$$.Item$TreeMap/*ORALE!Item inv pero Item var*/}},Index$Ranged:treeMap$.$$targs$$.Key$TreeMap,Element$Ranged:{t:m$1.Entry,a:{Item$Entry:treeMap$.$$targs$$.Item$TreeMap/*ORALE!Item inv pero Item var*/,Key$Entry:treeMap$.$$targs$$.Key$TreeMap/*ORALE!Key inv pero Key var*/}}});
return treeMap$;
};
TreeMap.ser$get$=function(ref,o){var n=ref.attribute.qualifiedName;if(n==='ceylon.collection::TreeMap.root')return o.$1dkeuw$u3_;
else if(n==='ceylon.collection::TreeMap.removeCases')return o.$1dkeuw$ud_;
else throw new TypeError('unknown attribute');
};
TreeMap.ser$set$=function(ref,o,i){if(!m$1.is$(ref,{t:m$1.Member$serialization}))throw m$1.AssertionError('unexpected reachable reference');var n=ref.attribute.qualifiedName;
if(n==='ceylon.collection::TreeMap.root')o.$1dkeuw$u3_=i;
else if(n==='ceylon.collection::TreeMap.removeCases')o.$1dkeuw$ud_=i;
else throw new TypeError('unknown attribute');
};
TreeMap.ser$refs$=function(o){return [m$1.MemberImpl$impl(m$1.OpenValue$jsint(m$1.lmp$(ex$,'ceylon.collection'),o.$prop$get$1dkeuw$u3)),m$1.MemberImpl$impl(m$1.OpenValue$jsint(m$1.lmp$(ex$,'ceylon.collection'),o.$prop$get$1dkeuw$ud))];
};
var $za,$zb,$zd,$zf,$118,$11l;
function naturalOrderTreeMap($11x,$fl191b$){return TreeMap(m$1.jsc$2((function($11y,$11z){return $11y.compare($11z);
}),[{nm:'x',mt:'prm',$t:$fl191b$.Key$naturalOrderTreeMap},{nm:'y',mt:'prm',$t:$fl191b$.Key$naturalOrderTreeMap}],{Arguments$Callable:m$1.mtt$([$fl191b$.Key$naturalOrderTreeMap,$fl191b$.Key$naturalOrderTreeMap]),Return$Callable:{t:m$1.Comparison}}),$11x,{Key$TreeMap:$fl191b$.Key$naturalOrderTreeMap,Item$TreeMap:$fl191b$.Item$naturalOrderTreeMap});
};
naturalOrderTreeMap.$crtmm$=function(){return{mod:$CCMM$,$t:{t:TreeMap,a:{Key$TreeMap:'Key$naturalOrderTreeMap',Item$TreeMap:'Item$naturalOrderTreeMap'}},ps:[{nm:'entries',mt:'prm',$t:{t:m$1.Iterable,a:{Element$Iterable:{t:m$1.Entry,a:{Item$Entry:'Item$naturalOrderTreeMap',Key$Entry:'Key$naturalOrderTreeMap'}},Absent$Iterable:{t:m$1.Null}}}}],tp:{Key$naturalOrderTreeMap:{sts:[{t:m$1.Comparable,a:{Other$Comparable:'Key$naturalOrderTreeMap'}}]},Item$naturalOrderTreeMap:{sts:[{t:m$1.$_Object}]}},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:naturalOrderTreeMap')];},d:['ceylon.collection','naturalOrderTreeMap']};};
ex$.naturalOrderTreeMap=naturalOrderTreeMap;
function MutableSet($$targs$$,mutableSet$){
m$1.set_type_args(mutableSet$,$$targs$$,MutableSet);
m$1.Set({Element$Set:$$targs$$.Element$MutableSet/*ORALE!Element inv pero Element var*/},mutableSet$);
SetMutator({Element$SetMutator:$$targs$$.Element$MutableSet/*ORALE!Element inv pero Element var*/},mutableSet$);
}
MutableSet.$crtmm$=function(){return{mod:$CCMM$,tp:{Element$MutableSet:{sts:[{t:m$1.$_Object}]}},sts:[{t:m$1.Set,a:{Element$Set:'Element$MutableSet'}},{t:SetMutator,a:{Element$SetMutator:'Element$MutableSet'}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:MutableSet'),m$1.by(m$1.$arr$sa$(["St\u00e9phane \u00c9pardaud"],{t:m$1.$_String})),m$1.see(m$1.$arr$sa$([m$1.openClass$jsint(m$1.lmp$(ex$,'ceylon.collection'),HashSet)],{t:m$1.ClassWithConstructorsDeclaration$meta$declaration}))];},d:['ceylon.collection','MutableSet']};};
ex$.MutableSet=MutableSet;
function $init$MutableSet(){
if(MutableSet.$$===undefined){
m$1.initTypeProtoI(MutableSet,'ceylon.collection::MutableSet',m$1.Set,$init$SetMutator());
(function(mutableSet$){
mutableSet$.clone={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:MutableSet,a:{Element$MutableSet:'Element$MutableSet'}},ps:[],$cont:MutableSet,pa:7,d:['ceylon.collection','MutableSet','$m','clone']};}};
})(MutableSet.$$.prototype);
}
return MutableSet;
}
ex$.$init$MutableSet=$init$MutableSet;
$init$MutableSet();
function SetMutator($$targs$$,setMutator$){
m$1.set_type_args(setMutator$,$$targs$$,SetMutator);
m$1.Set({Element$Set:{t:m$1.$_Object}},setMutator$);
}
SetMutator.$crtmm$=function(){return{mod:$CCMM$,tp:{Element$SetMutator:{dv:'in',sts:[{t:m$1.$_Object}]}},sts:[{t:m$1.Set,a:{Element$Set:{t:m$1.$_Object}}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:SetMutator'),m$1.see(m$1.$arr$sa$([m$1.OpenInterface$jsint(m$1.lmp$(ex$,'ceylon.collection'),MutableSet)],{t:m$1.InterfaceDeclaration$meta$declaration}))];},d:['ceylon.collection','SetMutator']};};
ex$.SetMutator=SetMutator;
function $init$SetMutator(){
if(SetMutator.$$===undefined){
m$1.initTypeProtoI(SetMutator,'ceylon.collection::SetMutator',m$1.Set);
(function(setMutator$){
setMutator$.add={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'element',mt:'prm',$t:'Element$SetMutator'}],$cont:SetMutator,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:SetMutator:$m:add')];},d:['ceylon.collection','SetMutator','$m','add']};}};setMutator$.addAll=function($120){
var setMutator$=this;
var $121=false;
var $123;for(var $122=$120.iterator();($123=$122.next())!==m$1.finished();){
if(setMutator$.add($123)){
$121=true;
}
}
return $121;
};setMutator$.addAll.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'elements',mt:'prm',$t:{t:m$1.Iterable,a:{Element$Iterable:'Element$SetMutator',Absent$Iterable:{t:m$1.Null}}}}],$cont:SetMutator,pa:9,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:SetMutator:$m:addAll')];},d:['ceylon.collection','SetMutator','$m','addAll']};};
setMutator$.remove={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'element',mt:'prm',$t:'Element$SetMutator'}],$cont:SetMutator,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:SetMutator:$m:remove')];},d:['ceylon.collection','SetMutator','$m','remove']};}};setMutator$.removeAll=function($124){
var setMutator$=this;
var $125=false;
var $127;for(var $126=$124.iterator();($127=$126.next())!==m$1.finished();){
if(setMutator$.remove($127)){
$125=true;
}
}
return $125;
};setMutator$.removeAll.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'elements',mt:'prm',$t:{t:m$1.Iterable,a:{Element$Iterable:'Element$SetMutator',Absent$Iterable:{t:m$1.Null}}}}],$cont:SetMutator,pa:9,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:SetMutator:$m:removeAll')];},d:['ceylon.collection','SetMutator','$m','removeAll']};};
setMutator$.clear={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[],$cont:SetMutator,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:SetMutator:$m:clear')];},d:['ceylon.collection','SetMutator','$m','clear']};}};setMutator$.clone={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:SetMutator,a:{Element$SetMutator:'Element$SetMutator'}},ps:[],$cont:SetMutator,pa:7,d:['ceylon.collection','SetMutator','$m','clone']};}};
})(SetMutator.$$.prototype);
}
return SetMutator;
}
ex$.$init$SetMutator=$init$SetMutator;
$init$SetMutator();
function HashSet$$c($$targs$$,hashSet$){
m$1.set_type_args(hashSet$,$$targs$$);
MutableSet({Element$MutableSet:$$targs$$.Element$HashSet},hashSet$);
}
function HashSet(){return HashSet$c_$c$.apply(undefined,arguments);}
function HashSet$c_$c$$$a($128,$129,$12a,$$targs$$,hashSet$){
if($128===undefined){$128=linked();}
if($129===undefined){$129=Hashtable();}
if($12a===undefined){$12a=m$1.empty();}
hashSet$.$1dkeuw$12b_=null;
hashSet$.$1dkeuw$12c_=null;
hashSet$.$1dkeuw$12d_=$128;
m$1.atr$(hashSet$,'$1dkeuw$12d',function(){return this.$1dkeuw$12d_;},undefined,function(){return{mod:$CCMM$,$t:{t:Stability},$cont:HashSet,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:HashSet:$at:stability$82jphv')];},d:['ceylon.collection','HashSet','$at','stability$82jphv']};});
hashSet$.$1dkeuw$12e_=$129;
m$1.atr$(hashSet$,'$1dkeuw$12e',function(){return this.$1dkeuw$12e_;},undefined,function(){return{mod:$CCMM$,$t:{t:Hashtable},$cont:HashSet,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:HashSet:$at:hashtable$xhg2ge')];},d:['ceylon.collection','HashSet','$at','hashtable$xhg2ge']};});
hashSet$.$1dkeuw$12f_=$12a;
m$1.atr$(hashSet$,'$1dkeuw$12f',function(){return this.$1dkeuw$12f_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Iterable,a:{Element$Iterable:'Element$HashSet',Absent$Iterable:{t:m$1.Null}}},$cont:HashSet,pa:3,an:function(){return[m$1.doc("The initial elements of the set.")];},d:['ceylon.collection','HashSet','$at','elements$ce2sq9']};});
hashSet$.$1dkeuw$12g_=(0);
m$1.atr$(hashSet$,'$1dkeuw$12g',function(){return this.$1dkeuw$12g_;},function($12h){return this.$1dkeuw$12g_=$12h;},function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:HashSet,pa:1027,an:function(){return[m$1.doc("Number of elements in this set.")];},d:['ceylon.collection','HashSet','$at','length$d3pqtk']};});
hashSet$.$1dkeuw$12i_=m$1.is$($12a,{t:m$1.Collection,a:{Element$Collection:{t:m$1.Anything}}});
m$1.atr$(hashSet$,'$1dkeuw$12i',function(){return this.$1dkeuw$12i_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},$cont:HashSet,pa:3,d:['ceylon.collection','HashSet','$at','accurateInitialCapacity$nstxjg']};});
var $12j=($12k=(hashSet$.$1dkeuw$12i?$129.initialCapacityForSize($12a.size):null),m$1.nn$($12k)?$12k:$129.initialCapacityForUnknownSize());
$prop$get$12j={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:HashSet,d:['ceylon.collection','HashSet','$cn','$def','$at','initialCapacity$l7lsqi']};}};
$prop$get$12j.get=function(){return $12j};
var $12k;
hashSet$.$1dkeuw$12l_=cachingElementStore($12j,{Element$cachingElementStore:hashSet$.$$targs$$.Element$HashSet});
m$1.atr$(hashSet$,'$1dkeuw$12l',function(){return this.$1dkeuw$12l_;},function($12m){return this.$1dkeuw$12l_=$12m;},function(){return{mod:$CCMM$,$t:{t:m$1.$_Array,a:{Element$Array:{t:'u',l:[{t:m$1.Null},{t:CachingCell,a:{Element$CachingCell:'Element$HashSet'}}]}}},$cont:HashSet,pa:1027,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:HashSet:$at:store$coggxh')];},d:['ceylon.collection','HashSet','$at','store$coggxh']};});
return hashSet$;
};
function HashSet$c_$c$($128,$129,$12a,$$targs$$,hashSet$){
$init$HashSet();
if(hashSet$===undefined)hashSet$=new HashSet.$$;
if($128===undefined){$128=linked();}
if($129===undefined){$129=Hashtable();}
if($12a===undefined){$12a=m$1.empty();}
HashSet$$c($$targs$$,hashSet$);
HashSet$c_$c$$$a($128,$129,$12a,$$targs$$,hashSet$);
var $12o;for(var $12n=hashSet$.$1dkeuw$12f.iterator();($12o=$12n.next())!==m$1.finished();){
if(hashSet$.$1dkeuw$12p(hashSet$.$1dkeuw$12l,$12o)){
($12q=hashSet$.$1dkeuw$12g,hashSet$.$1dkeuw$12g=$12q.successor,$12q);
var $12q;
}
}
if(!hashSet$.$1dkeuw$12i){
hashSet$.$1dkeuw$12r();
}
return hashSet$;
};
HashSet$c_$c$.$crtmm$=function(){return{mod:$CCMM$,ps:[{nm:'stability',mt:'prm',def:1,$t:{t:Stability},an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:HashSet:$cn:$def:$at:stability$qw73lf')];}},{nm:'hashtable',mt:'prm',def:1,$t:{t:Hashtable},an:function(){return[m$1.doc("Performance-related settings for the backing array.")];}},{nm:'elements',mt:'prm',def:1,$t:{t:m$1.Iterable,a:{Element$Iterable:'Element$HashSet',Absent$Iterable:{t:m$1.Null}}},an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:HashSet:$cn:$def:$at:elements$mko0d1')];}}],$cont:HashSet,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:HashSet:$cn:$def')];},d:['ceylon.collection','HashSet','$cn','$def']};};
HashSet.HashSet$c_$c$=HashSet$c_$c$;
ex$.HashSet$c_$c$=HashSet$c_$c$;
function HashSet$c_copy$$a($12s,$12t,$12u,$$targs$$,hashSet$){
if($12t===undefined){$12t=$12s.$1dkeuw$12d;}
if($12u===undefined){$12u=Hashtable();}
hashSet$.$1dkeuw$12b_=null;
hashSet$.$1dkeuw$12c_=null;
hashSet$.$1dkeuw$12d_=$12t;
m$1.atr$(hashSet$,'$1dkeuw$12d',function(){return this.$1dkeuw$12d_;},undefined,function(){return{mod:$CCMM$,$t:{t:Stability},$cont:HashSet,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:HashSet:$at:stability$82jphv')];},d:['ceylon.collection','HashSet','$at','stability$82jphv']};});
hashSet$.$1dkeuw$12e_=$12u;
m$1.atr$(hashSet$,'$1dkeuw$12e',function(){return this.$1dkeuw$12e_;},undefined,function(){return{mod:$CCMM$,$t:{t:Hashtable},$cont:HashSet,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:HashSet:$at:hashtable$xhg2ge')];},d:['ceylon.collection','HashSet','$at','hashtable$xhg2ge']};});
hashSet$.$1dkeuw$12i_=true;
m$1.atr$(hashSet$,'$1dkeuw$12i',function(){return this.$1dkeuw$12i_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},$cont:HashSet,pa:3,d:['ceylon.collection','HashSet','$at','accurateInitialCapacity$nstxjg']};});
hashSet$.$1dkeuw$12l_=cachingElementStore($12s.$1dkeuw$12l.size,{Element$cachingElementStore:hashSet$.$$targs$$.Element$HashSet});
m$1.atr$(hashSet$,'$1dkeuw$12l',function(){return this.$1dkeuw$12l_;},function($12v){return this.$1dkeuw$12l_=$12v;},function(){return{mod:$CCMM$,$t:{t:m$1.$_Array,a:{Element$Array:{t:'u',l:[{t:m$1.Null},{t:CachingCell,a:{Element$CachingCell:'Element$HashSet'}}]}}},$cont:HashSet,pa:1027,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:HashSet:$at:store$coggxh')];},d:['ceylon.collection','HashSet','$at','store$coggxh']};});
if(m$1.$eq$($12t,unlinked())){
hashSet$.$1dkeuw$12f_=m$1.empty();
hashSet$.$1dkeuw$12g=$12s.$1dkeuw$12g;
var $12w=(0);
$prop$get$12w={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:HashSet,pa:1024,d:['ceylon.collection','HashSet','$cn','copy','$at','index$fnnc8k']};}};
$prop$get$12w.get=function(){return $12w};
while(($12w<$12s.$1dkeuw$12l.size)){
var $12x;
if(m$1.nn$(($12x=$12s.$1dkeuw$12l.$_get($12w)))){
($12y=$12x.clone(),hashSet$.$1dkeuw$12l.set($12w,$12y), $12y);
var $12y;
}
($12z=$12w,$12w=$12z.successor,$12z);
var $12z;
}
}
else{
hashSet$.$1dkeuw$12g=(0);
hashSet$.$1dkeuw$12f_=$12s;
}
return hashSet$;
};
function HashSet$c_copy($12s,$12t,$12u,$$targs$$,hashSet$){
$init$HashSet();
if(hashSet$===undefined)hashSet$=new HashSet.$$;
if($12t===undefined){$12t=$12s.$1dkeuw$12d;}
if($12u===undefined){$12u=Hashtable();}
HashSet$$c($$targs$$,hashSet$);
HashSet$c_copy$$a($12s,$12t,$12u,$$targs$$,hashSet$);
var $12o;for(var $130=hashSet$.$1dkeuw$12f.iterator();($12o=$130.next())!==m$1.finished();){
if(hashSet$.$1dkeuw$12p(hashSet$.$1dkeuw$12l,$12o)){
($131=hashSet$.$1dkeuw$12g,hashSet$.$1dkeuw$12g=$131.successor,$131);
var $131;
}
}
if(!hashSet$.$1dkeuw$12i){
hashSet$.$1dkeuw$12r();
}
return hashSet$;
};
HashSet$c_copy.$crtmm$=function(){return{mod:$CCMM$,ps:[{nm:'hashSet',mt:'prm',$t:{t:HashSet,a:{Element$HashSet:'Element$HashSet'}},an:function(){return[m$1.doc("The `HashSet` to copy.")];}},{nm:'stability',mt:'prm',def:1,$t:{t:Stability},an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:HashSet:$cn:copy:$at:stability$y8xjx2')];}},{nm:'hashtable',mt:'prm',def:1,$t:{t:Hashtable},an:function(){return[m$1.doc("Performance-related settings for the backing array.")];}}],$cont:HashSet,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:HashSet:$cn:copy')];},d:['ceylon.collection','HashSet','$cn','copy']};};
HashSet.HashSet$c_copy=HashSet$c_copy;
ex$.HashSet$c_copy=HashSet$c_copy;
HashSet.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'stability',mt:'prm',def:1,$t:{t:Stability},an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:HashSet:$cn:$def:$at:stability$qw73lf')];}},{nm:'hashtable',mt:'prm',def:1,$t:{t:Hashtable},an:function(){return[m$1.doc("Performance-related settings for the backing array.")];}},{nm:'elements',mt:'prm',def:1,$t:{t:m$1.Iterable,a:{Element$Iterable:'Element$HashSet',Absent$Iterable:{t:m$1.Null}}},an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:HashSet:$cn:$def:$at:elements$mko0d1')];}}],tp:{Element$HashSet:{sts:[{t:m$1.$_Object}]}},sts:[{t:MutableSet,a:{Element$MutableSet:'Element$HashSet'}}],pa:2049,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:HashSet'),m$1.by(m$1.$arr$sa$(["St\u00e9phane \u00c9pardaud","Gavin King"],{t:m$1.$_String}))];},d:['ceylon.collection','HashSet']};};
ex$.HashSet=HashSet;
function $init$HashSet(){
if(HashSet.$$===undefined){
m$1.initTypeProto(HashSet,'ceylon.collection::HashSet',m$1.Basic,$init$MutableSet());
(function(hashSet$){
m$1.atr$(hashSet$,'$1dkeuw$12d',function(){return this.$1dkeuw$12d_;},undefined,function(){return{mod:$CCMM$,$t:{t:Stability},$cont:HashSet,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:HashSet:$at:stability$82jphv')];},d:['ceylon.collection','HashSet','$at','stability$82jphv']};});
m$1.atr$(hashSet$,'$1dkeuw$12e',function(){return this.$1dkeuw$12e_;},undefined,function(){return{mod:$CCMM$,$t:{t:Hashtable},$cont:HashSet,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:HashSet:$at:hashtable$xhg2ge')];},d:['ceylon.collection','HashSet','$at','hashtable$xhg2ge']};});
m$1.atr$(hashSet$,'$1dkeuw$12l',function(){return this.$1dkeuw$12l_;},function($132){return this.$1dkeuw$12l_=$132;},function(){return{mod:$CCMM$,$t:{t:m$1.$_Array,a:{Element$Array:{t:'u',l:[{t:m$1.Null},{t:CachingCell,a:{Element$CachingCell:'Element$HashSet'}}]}}},$cont:HashSet,pa:1027,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:HashSet:$at:store$coggxh')];},d:['ceylon.collection','HashSet','$at','store$coggxh']};});
m$1.atr$(hashSet$,'$1dkeuw$12f',function(){return this.$1dkeuw$12f_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Iterable,a:{Element$Iterable:'Element$HashSet',Absent$Iterable:{t:m$1.Null}}},$cont:HashSet,pa:3,an:function(){return[m$1.doc("The initial elements of the set.")];},d:['ceylon.collection','HashSet','$at','elements$ce2sq9']};});
m$1.atr$(hashSet$,'$1dkeuw$12g',function(){return this.$1dkeuw$12g_;},function($133){return this.$1dkeuw$12g_=$133;},function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:HashSet,pa:1027,an:function(){return[m$1.doc("Number of elements in this set.")];},d:['ceylon.collection','HashSet','$at','length$d3pqtk']};});
m$1.atr$(hashSet$,'$1dkeuw$12b',function(){return this.$1dkeuw$12b_;},function($134){return this.$1dkeuw$12b_=$134;},function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:LinkedCell,a:{Element$LinkedCell:'Element$HashSet'}}]},$cont:HashSet,pa:1027,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:HashSet:$at:head$aif3m6')];},d:['ceylon.collection','HashSet','$at','head$aif3m6']};});
m$1.atr$(hashSet$,'$1dkeuw$12c',function(){return this.$1dkeuw$12c_;},function($135){return this.$1dkeuw$12c_=$135;},function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:LinkedCell,a:{Element$LinkedCell:'Element$HashSet'}}]},$cont:HashSet,pa:1027,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:HashSet:$at:tip$9an0gb')];},d:['ceylon.collection','HashSet','$at','tip$9an0gb']};});
m$1.atr$(hashSet$,'$1dkeuw$12i',function(){return this.$1dkeuw$12i_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},$cont:HashSet,pa:3,d:['ceylon.collection','HashSet','$at','accurateInitialCapacity$nstxjg']};});
hashSet$.$1dkeuw$136=function($137){var hashSet$=this;
return function(){var $138=$137.hash;return $138.xor($138.rightLogicalShift(16));
}();
};
hashSet$.$1dkeuw$136.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'key',mt:'prm',$t:{t:m$1.$_Object}}],$cont:HashSet,d:['ceylon.collection','HashSet','$m','hashCode$6dtk7f']};};
hashSet$.$1dkeuw$139=function($13a,$13b){var hashSet$=this;
return $13a.and($13b.size.minus(1));
};
hashSet$.$1dkeuw$139.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'elemHash',mt:'prm',$t:{t:m$1.Integer}},{nm:'store',mt:'prm',$t:{t:m$1.$_Array,a:{Element$Array:{t:'u',l:[{t:m$1.Null},{t:CachingCell,a:{Element$CachingCell:'Element$HashSet'}}]}}}}],$cont:HashSet,d:['ceylon.collection','HashSet','$m','storeIndex$b5t5qz']};};
hashSet$.$1dkeuw$13c=function($13d,$13e,$13f){
var hashSet$=this;
if(m$1.$eq$(hashSet$.$1dkeuw$12d,linked())){
var $13g=LinkedCell($13d,$13e,$13f,hashSet$.$1dkeuw$12c,{Element$LinkedCell:hashSet$.$$targs$$.Element$HashSet});
var $13h;
if(m$1.nn$(($13h=hashSet$.$1dkeuw$12c))){
($13h.next=$13g);
}
hashSet$.$1dkeuw$12c=$13g;
if(!m$1.nn$(hashSet$.$1dkeuw$12b)){
hashSet$.$1dkeuw$12b=$13g;
}
return $13g;
}
else{
return CachingCell($13d,$13e,$13f,{Element$CachingCell:hashSet$.$$targs$$.Element$HashSet});
}
};hashSet$.$1dkeuw$13c.$crtmm$=function(){return{mod:$CCMM$,$t:{t:CachingCell,a:{Element$CachingCell:'Element$HashSet'}},ps:[{nm:'elem',mt:'prm',$t:'Element$HashSet'},{nm:'elemHash',mt:'prm',$t:{t:m$1.Integer}},{nm:'rest',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},{t:CachingCell,a:{Element$CachingCell:'Element$HashSet'}}]}}],$cont:HashSet,d:['ceylon.collection','HashSet','$m','createCell$73q3ts']};};
hashSet$.$1dkeuw$13i=function($13j){
var hashSet$=this;
if(m$1.$eq$(hashSet$.$1dkeuw$12d,linked())){
var $13k;
m$1.asrt$((m$1.is$(($13k=$13j),{t:LinkedCell,a:{Element$LinkedCell:hashSet$.$$targs$$.Element$HashSet}})),"Assertion failed: \'is LinkedCell<Element> cell\' at HashSet.ceylon (166:19-166:47)",'166:12-166:48','HashSet.ceylon');
var $13l;
if(m$1.nn$(($13l=$13k.previous))){
($13l.next=$13k.next);
}
else{
hashSet$.$1dkeuw$12b=$13k.next;
}
var $13m;
if(m$1.nn$(($13m=$13k.next))){
($13m.previous=$13k.previous);
}
else{
hashSet$.$1dkeuw$12c=$13k.previous;
}
}
};hashSet$.$1dkeuw$13i.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'cell',mt:'prm',$t:{t:CachingCell,a:{Element$CachingCell:'Element$HashSet'}}}],$cont:HashSet,d:['ceylon.collection','HashSet','$m','deleteCell$8thws7']};};
hashSet$.$1dkeuw$12p=function($13n,$13o){
var hashSet$=this;
var $13p=hashSet$.$1dkeuw$136($13o);
var $13q=hashSet$.$1dkeuw$139($13p,$13n);
var $13r=$13n.$_get($13q);
var $13s=$13r;
var $13t;
while(m$1.nn$(($13t=$13s))){
if((($13t.keyHash==$13p)&&m$1.$eq$($13t.element,$13o))){
($13t.element=$13o);
return false;
}
$13s=$13t.rest;
}
($13u=hashSet$.$1dkeuw$13c($13o,$13p,$13r),$13n.set($13q,$13u), $13u);
var $13u;
return true;
};hashSet$.$1dkeuw$12p.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'store',mt:'prm',$t:{t:m$1.$_Array,a:{Element$Array:{t:'u',l:[{t:m$1.Null},{t:CachingCell,a:{Element$CachingCell:'Element$HashSet'}}]}}}},{nm:'element',mt:'prm',$t:'Element$HashSet'}],$cont:HashSet,d:['ceylon.collection','HashSet','$m','addToStore$ypnrox']};};
hashSet$.$1dkeuw$12r=function(){
var hashSet$=this;
if(hashSet$.$1dkeuw$12e.rehash(hashSet$.$1dkeuw$12g,hashSet$.$1dkeuw$12l.size)){
var $13v=cachingElementStore(hashSet$.$1dkeuw$12e.capacity(hashSet$.$1dkeuw$12g),{Element$cachingElementStore:hashSet$.$$targs$$.Element$HashSet});
var $13w=(0);
while(($13w<hashSet$.$1dkeuw$12l.size)){
var $13x=hashSet$.$1dkeuw$12l.$_get($13w);
var $13y;
while(m$1.nn$(($13y=$13x))){
$13x=$13y.rest;
var $13z=hashSet$.$1dkeuw$139($13y.keyHash,$13v);
var $140=$13v.$_get($13z);
($13y.rest=$140);
($141=$13y,$13v.set($13z,$141), $141);
var $141;
}
($142=$13w,$13w=$142.successor,$142);
var $142;
}
hashSet$.$1dkeuw$12l=$13v;
}
};hashSet$.$1dkeuw$12r.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[],$cont:HashSet,d:['ceylon.collection','HashSet','$m','checkRehash$dhkh77']};};
hashSet$.add=function($143){
var hashSet$=this;
if(hashSet$.$1dkeuw$12p(hashSet$.$1dkeuw$12l,$143)){
($144=hashSet$.$1dkeuw$12g,hashSet$.$1dkeuw$12g=$144.successor,$144);
var $144;
hashSet$.$1dkeuw$12r();
return true;
}
return false;
};hashSet$.add.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'element',mt:'prm',$t:'Element$HashSet'}],$cont:HashSet,pa:3,d:['ceylon.collection','HashSet','$m','add']};};
hashSet$.addAll=function($145){
var hashSet$=this;
var $146=false;
var $148;for(var $147=$145.iterator();($148=$147.next())!==m$1.finished();){
if(hashSet$.$1dkeuw$12p(hashSet$.$1dkeuw$12l,$148)){
($149=hashSet$.$1dkeuw$12g,hashSet$.$1dkeuw$12g=$149.successor,$149);
var $149;
$146=true;
}
}
if($146){
hashSet$.$1dkeuw$12r();
}
return $146;
};hashSet$.addAll.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'elements',mt:'prm',$t:{t:m$1.Iterable,a:{Element$Iterable:'Element$HashSet',Absent$Iterable:{t:m$1.Null}}}}],$cont:HashSet,pa:3,d:['ceylon.collection','HashSet','$m','addAll']};};
hashSet$.remove=function($14a){
var hashSet$=this;
var $14b=hashSet$.$1dkeuw$136($14a);
var $14c=hashSet$.$1dkeuw$139($14b,hashSet$.$1dkeuw$12l);
var $14d;
if(m$1.nn$(($14d=hashSet$.$1dkeuw$12l.$_get($14c)))&&m$1.$eq$($14d.element,$14a)){
($14e=$14d.rest,hashSet$.$1dkeuw$12l.set($14c,$14e), $14e);
var $14e;
hashSet$.$1dkeuw$13i($14d);
($14f=hashSet$.$1dkeuw$12g,hashSet$.$1dkeuw$12g=$14f.predecessor,$14f);
var $14f;
return true;
}
var $14g=hashSet$.$1dkeuw$12l.$_get($14c);
var $14h;
while(m$1.nn$(($14h=$14g))){
var $14i=$14h.rest;
var $14j;
if(m$1.nn$(($14j=$14i))&&($14j.keyHash==$14b)&&m$1.$eq$($14j.element,$14a)){
($14h.rest=$14j.rest);
hashSet$.$1dkeuw$13i($14j);
($14k=hashSet$.$1dkeuw$12g,hashSet$.$1dkeuw$12g=$14k.predecessor,$14k);
var $14k;
return true;
}
else{
$14g=$14i;
}
}
return false;
};hashSet$.remove.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'element',mt:'prm',$t:'Element$HashSet'}],$cont:HashSet,pa:3,d:['ceylon.collection','HashSet','$m','remove']};};
hashSet$.clear=function(){
var hashSet$=this;
var $14l=(0);
while(($14l<hashSet$.$1dkeuw$12l.size)){
($14m=null,hashSet$.$1dkeuw$12l.set(($14n=$14l,$14l=$14n.successor,$14n),$14m), $14m);
var $14m,$14n;
}
hashSet$.$1dkeuw$12g=(0);
hashSet$.$1dkeuw$12b=null;
hashSet$.$1dkeuw$12c=null;
};hashSet$.clear.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[],$cont:HashSet,pa:3,d:['ceylon.collection','HashSet','$m','clear']};};
m$1.atr$(hashSet$,'size',function(){
var hashSet$=this;
return hashSet$.$1dkeuw$12g;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:HashSet,pa:3,d:['ceylon.collection','HashSet','$at','size']};});
hashSet$.iterator=function(){var hashSet$=this;
return ($14o=(m$1.$eq$(hashSet$.$1dkeuw$12d,linked())?LinkedCellIterator(hashSet$.$1dkeuw$12b,{Element$LinkedCellIterator:hashSet$.$$targs$$.Element$HashSet}):null),m$1.nn$($14o)?$14o:CachingStoreIterator(hashSet$.$1dkeuw$12l,{Element$CachingStoreIterator:hashSet$.$$targs$$.Element$HashSet}));
var $14o;
};hashSet$.count=function($14p){
var hashSet$=this;
var $14q=(0);
var $14r=(0);
while(($14r<hashSet$.$1dkeuw$12l.size)){
var $14s=hashSet$.$1dkeuw$12l.$_get($14r);
var $14t;
while(m$1.nn$(($14t=$14s))){
if($14p($14t.element)){
($14u=$14q,$14q=$14u.successor,$14u);
var $14u;
}
$14s=$14t.rest;
}
($14v=$14r,$14r=$14v.successor,$14v);
var $14v;
}
return $14q;
};hashSet$.count.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'selecting',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Arguments$Callable:{t:'T',l:['Element$HashSet']},Return$Callable:{t:m$1.$_Boolean}}},$rt:{t:m$1.$_Boolean},ps:[{nm:'element',mt:'prm',$t:'Element$HashSet'}]}],$cont:HashSet,pa:3,d:['ceylon.collection','HashSet','$m','count']};};
hashSet$.each=function($14w){
var hashSet$=this;
hashSet$.$1dkeuw$12l.each(m$1.jsc$2((function($14x){
var $14y=$14x;
$prop$get$14y={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:CachingCell,a:{Element$CachingCell:'Element$HashSet'}}]},$cont:hashSet$.each,pa:1027,d:['ceylon.collection','HashSet','$m','each','$at','iter$e3zwaq']};}};
$prop$get$14y.get=function(){return $14y};
var $14z;
while(m$1.nn$(($14z=$14y))){
$14w($14z.element);
$14y=$14z.rest;
}
}),[{nm:'bucket',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},{t:CachingCell,a:{Element$CachingCell:hashSet$.$$targs$$.Element$HashSet}}]}}],{Arguments$Callable:m$1.mtt$([m$1.mut$([{t:m$1.Null},{t:CachingCell,a:{Element$CachingCell:hashSet$.$$targs$$.Element$HashSet}}])]),Return$Callable:{t:m$1.Anything}}));
};hashSet$.each.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'step',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Arguments$Callable:{t:'T',l:['Element$HashSet']},Return$Callable:{t:m$1.Anything}}},$rt:{t:m$1.Anything},ps:[{nm:'element',mt:'prm',$t:'Element$HashSet'}]}],$cont:HashSet,pa:3,d:['ceylon.collection','HashSet','$m','each']};};
m$1.atr$(hashSet$,'hash',function(){
var hashSet$=this;
var $150=(0);
var $151=(0);
while(($150<hashSet$.$1dkeuw$12l.size)){
var $152=hashSet$.$1dkeuw$12l.$_get($150);
var $153;
while(m$1.nn$(($153=$152))){
($151=$151.plus($153.element.hash));
$152=$153.rest;
}
($154=$150,$150=$154.successor,$154);
var $154;
}
return $151;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:HashSet,pa:3,d:['ceylon.collection','HashSet','$at','hash']};});hashSet$.equals=function($155){
var hashSet$=this;
var $156;
if(m$1.is$(($156=$155),{t:m$1.Set,a:{Element$Set:{t:m$1.$_Object}}})&&(hashSet$.size==$156.size)){
var $157=(0);
while(($157<hashSet$.$1dkeuw$12l.size)){
var $158=hashSet$.$1dkeuw$12l.$_get($157);
var $159;
while(m$1.nn$(($159=$158))){
if(!$156.contains($159.element)){
return false;
}
$158=$159.rest;
}
($15a=$157,$157=$15a.successor,$15a);
var $15a;
}
return true;
}
return false;
};hashSet$.equals.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'that',mt:'prm',$t:{t:m$1.$_Object}}],$cont:HashSet,pa:3,d:['ceylon.collection','HashSet','$m','equals']};};
hashSet$.clone=function(){var hashSet$=this;
return HashSet$c_copy(hashSet$,undefined,undefined,{Element$HashSet:hashSet$.$$targs$$.Element$HashSet});
};
hashSet$.clone.$crtmm$=function(){return{mod:$CCMM$,$t:{t:HashSet,a:{Element$HashSet:'Element$HashSet'}},ps:[],$cont:HashSet,pa:3,d:['ceylon.collection','HashSet','$m','clone']};};
hashSet$.contains=function($15b){
var hashSet$=this;
if(hashSet$.empty){
return false;
}
else{
var $15c=hashSet$.$1dkeuw$136($15b);
var $15d=hashSet$.$1dkeuw$139($15c,hashSet$.$1dkeuw$12l);
var $15e=hashSet$.$1dkeuw$12l.$_get($15d);
var $15f;
while(m$1.nn$(($15f=$15e))){
if((($15f.keyHash==$15c)&&m$1.$eq$($15f.element,$15b))){
return true;
}
$15e=$15f.rest;
}
return false;
}
};hashSet$.contains.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'element',mt:'prm',$t:{t:m$1.$_Object}}],$cont:HashSet,pa:3,d:['ceylon.collection','HashSet','$m','contains']};};
hashSet$.complement=function($15g,$4pzcs8$){
var hashSet$=this;
var $15h=HashSet(undefined,undefined,undefined,{Element$HashSet:hashSet$.$$targs$$.Element$HashSet});
var $15j;for(var $15i=hashSet$.iterator();($15j=$15i.next())!==m$1.finished();){
if((!m$1.$cnt$($15g,$15j))){
$15h.add($15j);
}
}
return $15h;
};hashSet$.complement.$crtmm$=function(){return{mod:$CCMM$,$t:{t:HashSet,a:{Element$HashSet:'Element$HashSet'}},ps:[{nm:'set',mt:'prm',$t:{t:m$1.Set,a:{Element$Set:'Other$complement'}}}],$cont:HashSet,tp:{Other$complement:{sts:[{t:m$1.$_Object}]}},pa:3,d:['ceylon.collection','HashSet','$m','complement']};};
hashSet$.exclusiveUnion=function($15k,$rk6eqr$){
var hashSet$=this;
var $15l=HashSet(undefined,undefined,undefined,{Element$HashSet:m$1.mut$([hashSet$.$$targs$$.Element$HashSet,$rk6eqr$.Other$exclusiveUnion])});
var $15n;for(var $15m=hashSet$.iterator();($15n=$15m.next())!==m$1.finished();){
if((!m$1.$cnt$($15k,$15n))){
$15l.add($15n);
}
}
var $15p;for(var $15o=$15k.iterator();($15p=$15o.next())!==m$1.finished();){
if((!m$1.$cnt$(hashSet$,$15p))){
$15l.add($15p);
}
}
return $15l;
};hashSet$.exclusiveUnion.$crtmm$=function(){return{mod:$CCMM$,$t:{t:HashSet,a:{Element$HashSet:{t:'u',l:['Element$HashSet','Other$exclusiveUnion']}}},ps:[{nm:'set',mt:'prm',$t:{t:m$1.Set,a:{Element$Set:'Other$exclusiveUnion'}}}],$cont:HashSet,tp:{Other$exclusiveUnion:{sts:[{t:m$1.$_Object}]}},pa:3,d:['ceylon.collection','HashSet','$m','exclusiveUnion']};};
hashSet$.intersection=function($15q,$4hlnq3$){
var hashSet$=this;
var $15r=HashSet(undefined,undefined,undefined,{Element$HashSet:m$1.mit$([hashSet$.$$targs$$.Element$HashSet,$4hlnq3$.Other$intersection])});
var $15t;for(var $15s=hashSet$.iterator();($15t=$15s.next())!==m$1.finished();){
var $15u;
if(m$1.$cnt$($15q,$15t)&&m$1.is$(($15u=$15t),$4hlnq3$.Other$intersection,$4hlnq3$)){
$15r.add($15u);
}
}
return $15r;
};hashSet$.intersection.$crtmm$=function(){return{mod:$CCMM$,$t:{t:HashSet,a:{Element$HashSet:{t:'i',l:['Element$HashSet','Other$intersection']}}},ps:[{nm:'set',mt:'prm',$t:{t:m$1.Set,a:{Element$Set:'Other$intersection'}}}],$cont:HashSet,tp:{Other$intersection:{sts:[{t:m$1.$_Object}]}},pa:3,d:['ceylon.collection','HashSet','$m','intersection']};};
hashSet$.union=function($15v,$hc5war$){
var hashSet$=this;
var $15w=HashSet(undefined,undefined,undefined,{Element$HashSet:m$1.mut$([hashSet$.$$targs$$.Element$HashSet,$hc5war$.Other$union])});
$15w.addAll(hashSet$);
$15w.addAll($15v);
return $15w;
};hashSet$.union.$crtmm$=function(){return{mod:$CCMM$,$t:{t:HashSet,a:{Element$HashSet:{t:'u',l:['Element$HashSet','Other$union']}}},ps:[{nm:'set',mt:'prm',$t:{t:m$1.Set,a:{Element$Set:'Other$union'}}}],$cont:HashSet,tp:{Other$union:{sts:[{t:m$1.$_Object}]}},pa:3,d:['ceylon.collection','HashSet','$m','union']};};
m$1.atr$(hashSet$,'first',function(){
var hashSet$=this;
return (m$1.$eq$(hashSet$.$1dkeuw$12d,linked())?($15y=hashSet$.$1dkeuw$12b,m$1.nn$($15y)?$15y.element:null):($15z=hashSet$.$1dkeuw$12l.coalesced.first,m$1.nn$($15z)?$15z.element:null));
var $15y,$15z;
},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$HashSet']},$cont:HashSet,pa:3,d:['ceylon.collection','HashSet','$at','first']};});
m$1.atr$(hashSet$,'last',function(){
var hashSet$=this;
if(m$1.$eq$(hashSet$.$1dkeuw$12d,linked())){
return ($160=hashSet$.$1dkeuw$12c,m$1.nn$($160)?$160.element:null);
var $160;
}
else{
var $161=hashSet$.$1dkeuw$12l.reversed.coalesced.first;
var $162;
while(m$1.nn$(($162=($163=$161,m$1.nn$($163)?$163.rest:null)))){
$161=$162;
}
var $163;
return ($164=$161,m$1.nn$($164)?$164.element:null);
var $164;
}
},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$HashSet']},$cont:HashSet,pa:3,d:['ceylon.collection','HashSet','$at','last']};});
})(HashSet.$$.prototype);
}
return HashSet;
}
ex$.$init$HashSet=$init$HashSet;
$init$HashSet();
HashSet.inst$$=function($165){
var hashSet$=new HashSet.$$;
m$1.set_type_args(hashSet$,{Element$HashSet:$165.$$targs$$.Type$Class.a.Element$HashSet});
m$1.set_type_args(hashSet$,{Element$MutableSet:hashSet$.$$targs$$.Element$HashSet,Element$Set:hashSet$.$$targs$$.Element$HashSet,Element$Collection:hashSet$.$$targs$$.Element$HashSet,Element$Iterable:hashSet$.$$targs$$.Element$HashSet,Absent$Iterable:{t:m$1.Null},Element$Category:{t:m$1.$_Object},Element$SetMutator:hashSet$.$$targs$$.Element$HashSet});
return hashSet$;
};
HashSet.ser$get$=function(ref,o){var n=ref.attribute.qualifiedName;if(n==='ceylon.collection::HashSet.stability')return o.$1dkeuw$12d_;
else if(n==='ceylon.collection::HashSet.hashtable')return o.$1dkeuw$12e_;
else if(n==='ceylon.collection::HashSet.store')return o.$1dkeuw$12l_;
else if(n==='ceylon.collection::HashSet.length')return o.$1dkeuw$12g_;
else if(n==='ceylon.collection::HashSet.head')return o.$1dkeuw$12b_;
else if(n==='ceylon.collection::HashSet.tip')return o.$1dkeuw$12c_;
else throw new TypeError('unknown attribute');
};
HashSet.ser$set$=function(ref,o,i){if(!m$1.is$(ref,{t:m$1.Member$serialization}))throw m$1.AssertionError('unexpected reachable reference');var n=ref.attribute.qualifiedName;
if(n==='ceylon.collection::HashSet.stability')o.$1dkeuw$12d_=i;
else if(n==='ceylon.collection::HashSet.hashtable')o.$1dkeuw$12e_=i;
else if(n==='ceylon.collection::HashSet.store')o.$1dkeuw$12l_=i;
else if(n==='ceylon.collection::HashSet.length')o.$1dkeuw$12g_=i;
else if(n==='ceylon.collection::HashSet.head')o.$1dkeuw$12b_=i;
else if(n==='ceylon.collection::HashSet.tip')o.$1dkeuw$12c_=i;
else throw new TypeError('unknown attribute');
};
HashSet.ser$refs$=function(o){return [m$1.MemberImpl$impl(m$1.OpenValue$jsint(m$1.lmp$(ex$,'ceylon.collection'),o.$prop$get$1dkeuw$12d)),m$1.MemberImpl$impl(m$1.OpenValue$jsint(m$1.lmp$(ex$,'ceylon.collection'),o.$prop$get$1dkeuw$12e)),m$1.MemberImpl$impl(m$1.OpenValue$jsint(m$1.lmp$(ex$,'ceylon.collection'),o.$prop$get$1dkeuw$12l)),m$1.MemberImpl$impl(m$1.OpenValue$jsint(m$1.lmp$(ex$,'ceylon.collection'),o.$prop$get$1dkeuw$12g)),m$1.MemberImpl$impl(m$1.OpenValue$jsint(m$1.lmp$(ex$,'ceylon.collection'),o.$prop$get$1dkeuw$12b)),m$1.MemberImpl$impl(m$1.OpenValue$jsint(m$1.lmp$(ex$,'ceylon.collection'),o.$prop$get$1dkeuw$12c))];
};
function Hashtable(initialCapacity,loadFactor,growthFactor,hashtable$){
$init$Hashtable();
if(hashtable$===undefined)hashtable$=new Hashtable.$$;
if(initialCapacity===undefined){initialCapacity=$init$Hashtable().$defs$initialCapacity(hashtable$,loadFactor,growthFactor);}
hashtable$.initialCapacity_=initialCapacity;
if(loadFactor===undefined){loadFactor=$init$Hashtable().$defs$loadFactor(hashtable$,initialCapacity,growthFactor);}
hashtable$.loadFactor_=loadFactor;
if(growthFactor===undefined){growthFactor=$init$Hashtable().$defs$growthFactor(hashtable$,initialCapacity,loadFactor);}
hashtable$.growthFactor_=growthFactor;
m$1.asrt$(((hashtable$.initialCapacity>=0)),"initial capacity cannot be negative: \'initialCapacity>=0\' at Hashtable.ceylon (32:11-32:30)",'31:4-32:31','Hashtable.ceylon');
m$1.asrt$(((hashtable$.initialCapacity<=m$1.runtime().maxArraySize)),"initial capacity too large: \'initialCapacity<=runtime.maxArraySize\' at Hashtable.ceylon (35:11-35:49)",'34:4-35:50','Hashtable.ceylon');
m$1.asrt$((hashtable$.loadFactor.largerThan(m$1.Float(0.0))),"load factor must be positive: \'loadFactor>0.0\' at Hashtable.ceylon (38:11-38:26)",'37:4-38:27','Hashtable.ceylon');
m$1.asrt$((hashtable$.growthFactor.notSmallerThan(m$1.Float(1.0))),"growth factor must be at least 1.0: \'growthFactor>=1.0\' at Hashtable.ceylon (41:11-41:29)",'40:4-41:30','Hashtable.ceylon');
return hashtable$;
}
Hashtable.$defs$initialCapacity=function(hashtable$,loadFactor,growthFactor){return (16)};Hashtable.$defs$loadFactor=function(hashtable$,initialCapacity,growthFactor){return (0.75)};Hashtable.$defs$growthFactor=function(hashtable$,initialCapacity,loadFactor){return m$1.Float(2.0)};Hashtable.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'initialCapacity',mt:'prm',def:1,$t:{t:m$1.Integer},pa:1,an:function(){return[m$1.doc("The initial capacity of the backing array.")];}},{nm:'loadFactor',mt:'prm',def:1,$t:{t:m$1.Float},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:Hashtable:$at:loadFactor')];}},{nm:'growthFactor',mt:'prm',def:1,$t:{t:m$1.Float},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:Hashtable:$at:growthFactor')];}}],pa:2049,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:Hashtable')];},d:['ceylon.collection','Hashtable']};};
ex$.Hashtable=Hashtable;
function $init$Hashtable(){
if(Hashtable.$$===undefined){
m$1.initTypeProto(Hashtable,'ceylon.collection::Hashtable',m$1.Basic);
(function(hashtable$){
m$1.atr$(hashtable$,'initialCapacity',function(){return this.initialCapacity_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:Hashtable,pa:1,an:function(){return[m$1.doc("The initial capacity of the backing array.")];},d:['ceylon.collection','Hashtable','$at','initialCapacity']};});
m$1.atr$(hashtable$,'loadFactor',function(){return this.loadFactor_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Float},$cont:Hashtable,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:Hashtable:$at:loadFactor')];},d:['ceylon.collection','Hashtable','$at','loadFactor']};});
m$1.atr$(hashtable$,'growthFactor',function(){return this.growthFactor_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Float},$cont:Hashtable,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:Hashtable:$at:growthFactor')];},d:['ceylon.collection','Hashtable','$at','growthFactor']};});
hashtable$.rehash=function($166,$167){var hashtable$=this;
return (($166>$167.times(hashtable$.loadFactor).integer)&&(hashtable$.capacity($166)>$167));
};
hashtable$.rehash.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'length',mt:'prm',$t:{t:m$1.Integer}},{nm:'capacity',mt:'prm',$t:{t:m$1.Integer}}],$cont:Hashtable,pa:1,d:['ceylon.collection','Hashtable','$m','rehash']};};
hashtable$.capacity=function($168){var hashtable$=this;
return hashtable$.$1dkeuw$169($168.times(hashtable$.growthFactor).integer);
};
hashtable$.capacity.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'length',mt:'prm',$t:{t:m$1.Integer}}],$cont:Hashtable,pa:1,d:['ceylon.collection','Hashtable','$m','capacity']};};
hashtable$.initialCapacityForSize=function($16a){var hashtable$=this;
return hashtable$.$1dkeuw$169(largest(hashtable$.initialCapacity,$16a.divided(hashtable$.loadFactor).plus(1).integer));
};
hashtable$.initialCapacityForSize.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'size',mt:'prm',$t:{t:m$1.Integer}}],$cont:Hashtable,pa:1,d:['ceylon.collection','Hashtable','$m','initialCapacityForSize']};};
hashtable$.initialCapacityForUnknownSize=function(){var hashtable$=this;
return hashtable$.$1dkeuw$169(hashtable$.initialCapacity);
};
hashtable$.initialCapacityForUnknownSize.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[],$cont:Hashtable,pa:1,d:['ceylon.collection','Hashtable','$m','initialCapacityForUnknownSize']};};
hashtable$.$1dkeuw$169=function($16b){
var hashtable$=this;
var $16c=$16b.minus(1);
$16c=$16c.rightLogicalShift(1).or($16c);
$16c=$16c.rightLogicalShift(2).or($16c);
$16c=$16c.rightLogicalShift(4).or($16c);
$16c=$16c.rightLogicalShift(8).or($16c);
$16c=$16c.rightLogicalShift(16).or($16c);
if(($16c<0)){
return 1;
}
else{
if(($16c>=maximumCapacity())){
return maximumCapacity();
}
else{
return $16c.plus(1);
}
}
};hashtable$.$1dkeuw$169.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'capacity',mt:'prm',$t:{t:m$1.Integer}}],$cont:Hashtable,d:['ceylon.collection','Hashtable','$m','powerOf2$bh7ri4']};};
})(Hashtable.$$.prototype);
}
return Hashtable;
}
ex$.$init$Hashtable=$init$Hashtable;
$init$Hashtable();
Hashtable.inst$$=function($16d){
var hashtable$=new Hashtable.$$;
return hashtable$;
};
Hashtable.ser$get$=function(ref,o){var n=ref.attribute.qualifiedName;if(n==='ceylon.collection::Hashtable.initialCapacity')return o.initialCapacity_;
else if(n==='ceylon.collection::Hashtable.loadFactor')return o.loadFactor_;
else if(n==='ceylon.collection::Hashtable.growthFactor')return o.growthFactor_;
else throw new TypeError('unknown attribute');
};
Hashtable.ser$set$=function(ref,o,i){if(!m$1.is$(ref,{t:m$1.Member$serialization}))throw m$1.AssertionError('unexpected reachable reference');var n=ref.attribute.qualifiedName;
if(n==='ceylon.collection::Hashtable.initialCapacity')o.initialCapacity_=i;
else if(n==='ceylon.collection::Hashtable.loadFactor')o.loadFactor_=i;
else if(n==='ceylon.collection::Hashtable.growthFactor')o.growthFactor_=i;
else throw new TypeError('unknown attribute');
};
Hashtable.ser$refs$=function(o){return [m$1.MemberImpl$impl(m$1.OpenValue$jsint(m$1.lmp$(ex$,'ceylon.collection'),o.$prop$getInitialCapacity)),m$1.MemberImpl$impl(m$1.OpenValue$jsint(m$1.lmp$(ex$,'ceylon.collection'),o.$prop$getLoadFactor)),m$1.MemberImpl$impl(m$1.OpenValue$jsint(m$1.lmp$(ex$,'ceylon.collection'),o.$prop$getGrowthFactor))];
};
var $16e;function $valinit$$16e(){if($16e===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'maximumCapacity\' before it was set"),'77:0-77:48','Hashtable.ceylon');
if($16e===undefined){$16e=m$1.INIT$;$16e=(1).leftLogicalShift(30)};return $16e;};
function maximumCapacity(){return $valinit$$16e();}
var $prop$getMaximumCapacity={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},d:['ceylon.collection','maximumCapacity']};}};
ex$.$prop$getMaximumCapacity=$prop$getMaximumCapacity;
$prop$getMaximumCapacity.get=maximumCapacity;
function frequencies($16f,$a5yoou$){
var $16g=HashMap(undefined,undefined,undefined,{Key$HashMap:$a5yoou$.Element$frequencies,Item$HashMap:{t:Counter}});
var $16i;for(var $16h=$16f.iterator();($16i=$16h.next())!==m$1.finished();){
var $16j;
if(m$1.nn$(($16j=$16g.$_get($16i)))){
($16k=$16j,$16l=$16k.count,$16k.count=$16l.successor,$16l);
var $16k,$16l;
}
else{
($16m=Counter(1),$16g.put($16i,$16m), $16m);
var $16m;
}
}
return $16g.mapItems(m$1.jsc$2((function($16n,$16o){return $16o.count;
}),[{nm:'e',mt:'prm',$t:$a5yoou$.Element$frequencies},{nm:'c',mt:'prm',$t:{t:Counter}}],{Arguments$Callable:{t:m$1.Tuple,a:{Element$Tuple:m$1.mut$([$a5yoou$.Element$frequencies,{t:Counter}]),First$Tuple:$a5yoou$.Element$frequencies/*ORALE!Element inv pero First var*/,Rest$Tuple:m$1.mtt$([{t:Counter}])}},Return$Callable:{t:m$1.Integer}}),{Result$mapItems:{t:m$1.Integer}});
}
ex$.frequencies=frequencies;
frequencies.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Map,a:{Key$Map:'Element$frequencies',Item$Map:{t:m$1.Integer}}},ps:[{nm:'elements',mt:'prm',$t:{t:m$1.Iterable,a:{Element$Iterable:'Element$frequencies',Absent$Iterable:{t:m$1.Null}}}}],tp:{Element$frequencies:{sts:[{t:m$1.$_Object}]}},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:frequencies')];},d:['ceylon.collection','frequencies']};};
function Counter(count,counter$){
$init$Counter();
if(counter$===undefined)counter$=new Counter.$$;
counter$.count_=count;
return counter$;
}
Counter.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'count',mt:'prm',$t:{t:m$1.Integer},pa:1025}],d:['ceylon.collection','Counter']};};
ex$.Counter=Counter;
function $init$Counter(){
if(Counter.$$===undefined){
m$1.initTypeProto(Counter,'ceylon.collection::Counter',m$1.Basic);
(function(counter$){
m$1.atr$(counter$,'count',function(){return this.count_;},function($16p){return this.count_=$16p;},function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:Counter,pa:1025,d:['ceylon.collection','Counter','$at','count']};});
})(Counter.$$.prototype);
}
return Counter;
}
ex$.$init$Counter=$init$Counter;
$init$Counter();
function Cell(element,rest,$$targs$$,cell$){
$init$Cell();
if(cell$===undefined)cell$=new Cell.$$;
m$1.set_type_args(cell$,$$targs$$);
cell$.element_=element;
cell$.rest_=rest;
return cell$;
}
Cell.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'element',mt:'prm',$t:'Element$Cell',pa:1025,an:function(){return[m$1.doc("The element belonging to this link.")];}},{nm:'rest',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},{t:Cell,a:{Element$Cell:'Element$Cell'}}]},pa:1025,an:function(){return[m$1.doc("The next link in the list.")];}}],tp:{Element$Cell:{}},pa:2048,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:Cell')];},d:['ceylon.collection','Cell']};};
ex$.Cell=Cell;
function $init$Cell(){
if(Cell.$$===undefined){
m$1.initTypeProto(Cell,'ceylon.collection::Cell',m$1.Basic);
(function(cell$){
m$1.atr$(cell$,'element',function(){return this.element_;},function($16q){return this.element_=$16q;},function(){return{mod:$CCMM$,$t:'Element$Cell',$cont:Cell,pa:1025,an:function(){return[m$1.doc("The element belonging to this link.")];},d:['ceylon.collection','Cell','$at','element']};});
m$1.atr$(cell$,'rest',function(){return this.rest_;},function($16r){return this.rest_=$16r;},function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:Cell,a:{Element$Cell:'Element$Cell'}}]},$cont:Cell,pa:1025,an:function(){return[m$1.doc("The next link in the list.")];},d:['ceylon.collection','Cell','$at','rest']};});
cell$.clone=function(){var cell$=this;
return Cell(cell$.element,($16s=cell$.rest,m$1.jsc$3($16s,m$1.nn$($16s)?$16s.clone:null))(),{Element$Cell:cell$.$$targs$$.Element$Cell});
var $16s;
};
cell$.clone.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Cell,a:{Element$Cell:'Element$Cell'}},ps:[],$cont:Cell,pa:1,d:['ceylon.collection','Cell','$m','clone']};};
})(Cell.$$.prototype);
}
return Cell;
}
ex$.$init$Cell=$init$Cell;
$init$Cell();
Cell.inst$$=function($16t){
var cell$=new Cell.$$;
m$1.set_type_args(cell$,{Element$Cell:$16t.$$targs$$.Type$Class.a.Element$Cell});
return cell$;
};
Cell.ser$get$=function(ref,o){var n=ref.attribute.qualifiedName;if(n==='ceylon.collection::Cell.element')return o.element_;
else if(n==='ceylon.collection::Cell.rest')return o.rest_;
else throw new TypeError('unknown attribute');
};
Cell.ser$set$=function(ref,o,i){if(!m$1.is$(ref,{t:m$1.Member$serialization}))throw m$1.AssertionError('unexpected reachable reference');var n=ref.attribute.qualifiedName;
if(n==='ceylon.collection::Cell.element')o.element_=i;
else if(n==='ceylon.collection::Cell.rest')o.rest_=i;
else throw new TypeError('unknown attribute');
};
Cell.ser$refs$=function(o){return [m$1.MemberImpl$impl(m$1.OpenValue$jsint(m$1.lmp$(ex$,'ceylon.collection'),o.$prop$getElement)),m$1.MemberImpl$impl(m$1.OpenValue$jsint(m$1.lmp$(ex$,'ceylon.collection'),o.$prop$getRest))];
};
function CellIterator($1dkeuw$16u,$$targs$$,cellIterator$){
$init$CellIterator();
if(cellIterator$===undefined)cellIterator$=new CellIterator.$$;
m$1.set_type_args(cellIterator$,$$targs$$);
cellIterator$.$1dkeuw$16u_=$1dkeuw$16u;
m$1.Iterator({Element$Iterator:$$targs$$.Element$CellIterator/*ORALE!Element inv pero Element var*/},cellIterator$);
return cellIterator$;
}
CellIterator.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'iter',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},{t:Cell,a:{Element$Cell:'Element$CellIterator'}}]},pa:1024}],tp:{Element$CellIterator:{}},sts:[{t:m$1.Iterator,a:{Element$Iterator:'Element$CellIterator'}}],d:['ceylon.collection','CellIterator']};};
ex$.CellIterator=CellIterator;
function $init$CellIterator(){
if(CellIterator.$$===undefined){
m$1.initTypeProto(CellIterator,'ceylon.collection::CellIterator',m$1.Basic,m$1.Iterator);
(function(cellIterator$){
m$1.atr$(cellIterator$,'$1dkeuw$16u',function(){return this.$1dkeuw$16u_;},function($16v){return this.$1dkeuw$16u_=$16v;},function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:Cell,a:{Element$Cell:'Element$CellIterator'}}]},$cont:CellIterator,pa:1024,d:['ceylon.collection','CellIterator','$at','iter$5t8f0a']};});
cellIterator$.next=function(){
var cellIterator$=this;
var $16w;
if(m$1.nn$(($16w=cellIterator$.$1dkeuw$16u))){
cellIterator$.$1dkeuw$16u=$16w.rest;
return $16w.element;
}
return m$1.finished();
};cellIterator$.next.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:['Element$CellIterator',{t:m$1.Finished}]},ps:[],$cont:CellIterator,pa:3,d:['ceylon.collection','CellIterator','$m','next']};};
})(CellIterator.$$.prototype);
}
return CellIterator;
}
ex$.$init$CellIterator=$init$CellIterator;
$init$CellIterator();
function CachingCell(element,keyHash,rest,$$targs$$,cachingCell$){
$init$CachingCell();
if(cachingCell$===undefined)cachingCell$=new CachingCell.$$;
m$1.set_type_args(cachingCell$,$$targs$$);
cachingCell$.element_=element;
cachingCell$.keyHash_=keyHash;
cachingCell$.rest_=rest;
return cachingCell$;
}
CachingCell.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'element',mt:'prm',$t:'Element$CachingCell',pa:1025,an:function(){return[m$1.doc("The element belonging to this link.")];}},{nm:'keyHash',mt:'prm',$t:{t:m$1.Integer},pa:1025,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:CachingCell:$at:keyHash')];}},{nm:'rest',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},{t:CachingCell,a:{Element$CachingCell:'Element$CachingCell'}}]},pa:1025,an:function(){return[m$1.doc("The next link in the list.")];}}],tp:{Element$CachingCell:{}},pa:2048,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:CachingCell')];},d:['ceylon.collection','CachingCell']};};
ex$.CachingCell=CachingCell;
function $init$CachingCell(){
if(CachingCell.$$===undefined){
m$1.initTypeProto(CachingCell,'ceylon.collection::CachingCell',m$1.Basic);
(function(cachingCell$){
m$1.atr$(cachingCell$,'element',function(){return this.element_;},function($16x){return this.element_=$16x;},function(){return{mod:$CCMM$,$t:'Element$CachingCell',$cont:CachingCell,pa:1025,an:function(){return[m$1.doc("The element belonging to this link.")];},d:['ceylon.collection','CachingCell','$at','element']};});
m$1.atr$(cachingCell$,'keyHash',function(){return this.keyHash_;},function($16y){return this.keyHash_=$16y;},function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:CachingCell,pa:1025,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:CachingCell:$at:keyHash')];},d:['ceylon.collection','CachingCell','$at','keyHash']};});
m$1.atr$(cachingCell$,'rest',function(){return this.rest_;},function($16z){return this.rest_=$16z;},function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:CachingCell,a:{Element$CachingCell:'Element$CachingCell'}}]},$cont:CachingCell,pa:1025,an:function(){return[m$1.doc("The next link in the list.")];},d:['ceylon.collection','CachingCell','$at','rest']};});
cachingCell$.clone=function(){var cachingCell$=this;
return CachingCell(cachingCell$.element,cachingCell$.keyHash,($170=cachingCell$.rest,m$1.jsc$3($170,m$1.nn$($170)?$170.clone:null))(),{Element$CachingCell:cachingCell$.$$targs$$.Element$CachingCell});
var $170;
};
cachingCell$.clone.$crtmm$=function(){return{mod:$CCMM$,$t:{t:CachingCell,a:{Element$CachingCell:'Element$CachingCell'}},ps:[],$cont:CachingCell,pa:1,d:['ceylon.collection','CachingCell','$m','clone']};};
})(CachingCell.$$.prototype);
}
return CachingCell;
}
ex$.$init$CachingCell=$init$CachingCell;
$init$CachingCell();
CachingCell.inst$$=function($171){
var cachingCell$=new CachingCell.$$;
m$1.set_type_args(cachingCell$,{Element$CachingCell:$171.$$targs$$.Type$Class.a.Element$CachingCell});
return cachingCell$;
};
CachingCell.ser$get$=function(ref,o){var n=ref.attribute.qualifiedName;if(n==='ceylon.collection::CachingCell.element')return o.element_;
else if(n==='ceylon.collection::CachingCell.keyHash')return o.keyHash_;
else if(n==='ceylon.collection::CachingCell.rest')return o.rest_;
else throw new TypeError('unknown attribute');
};
CachingCell.ser$set$=function(ref,o,i){if(!m$1.is$(ref,{t:m$1.Member$serialization}))throw m$1.AssertionError('unexpected reachable reference');var n=ref.attribute.qualifiedName;
if(n==='ceylon.collection::CachingCell.element')o.element_=i;
else if(n==='ceylon.collection::CachingCell.keyHash')o.keyHash_=i;
else if(n==='ceylon.collection::CachingCell.rest')o.rest_=i;
else throw new TypeError('unknown attribute');
};
CachingCell.ser$refs$=function(o){return [m$1.MemberImpl$impl(m$1.OpenValue$jsint(m$1.lmp$(ex$,'ceylon.collection'),o.$prop$getElement)),m$1.MemberImpl$impl(m$1.OpenValue$jsint(m$1.lmp$(ex$,'ceylon.collection'),o.$prop$getKeyHash)),m$1.MemberImpl$impl(m$1.OpenValue$jsint(m$1.lmp$(ex$,'ceylon.collection'),o.$prop$getRest))];
};
function CachingCellIterator($1dkeuw$172,$$targs$$,cachingCellIterator$){
$init$CachingCellIterator();
if(cachingCellIterator$===undefined)cachingCellIterator$=new CachingCellIterator.$$;
m$1.set_type_args(cachingCellIterator$,$$targs$$);
cachingCellIterator$.$1dkeuw$172_=$1dkeuw$172;
m$1.Iterator({Element$Iterator:$$targs$$.Element$CachingCellIterator/*ORALE!Element inv pero Element var*/},cachingCellIterator$);
return cachingCellIterator$;
}
CachingCellIterator.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'iter',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},{t:CachingCell,a:{Element$CachingCell:'Element$CachingCellIterator'}}]},pa:1024}],tp:{Element$CachingCellIterator:{}},sts:[{t:m$1.Iterator,a:{Element$Iterator:'Element$CachingCellIterator'}}],d:['ceylon.collection','CachingCellIterator']};};
ex$.CachingCellIterator=CachingCellIterator;
function $init$CachingCellIterator(){
if(CachingCellIterator.$$===undefined){
m$1.initTypeProto(CachingCellIterator,'ceylon.collection::CachingCellIterator',m$1.Basic,m$1.Iterator);
(function(cachingCellIterator$){
m$1.atr$(cachingCellIterator$,'$1dkeuw$172',function(){return this.$1dkeuw$172_;},function($173){return this.$1dkeuw$172_=$173;},function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:CachingCell,a:{Element$CachingCell:'Element$CachingCellIterator'}}]},$cont:CachingCellIterator,pa:1024,d:['ceylon.collection','CachingCellIterator','$at','iter$ndjelf']};});
cachingCellIterator$.next=function(){
var cachingCellIterator$=this;
var $174;
if(m$1.nn$(($174=cachingCellIterator$.$1dkeuw$172))){
cachingCellIterator$.$1dkeuw$172=$174.rest;
return $174.element;
}
return m$1.finished();
};cachingCellIterator$.next.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:['Element$CachingCellIterator',{t:m$1.Finished}]},ps:[],$cont:CachingCellIterator,pa:3,d:['ceylon.collection','CachingCellIterator','$m','next']};};
})(CachingCellIterator.$$.prototype);
}
return CachingCellIterator;
}
ex$.$init$CachingCellIterator=$init$CachingCellIterator;
$init$CachingCellIterator();
function TreeSet$$c($$targs$$,treeSet$){
m$1.set_type_args(treeSet$,$$targs$$);
SortedSet({Element$SortedSet:$$targs$$.Element$TreeSet},treeSet$);
MutableSet({Element$MutableSet:$$targs$$.Element$TreeSet},treeSet$);
m$1.Ranged({Subrange$Ranged:{t:TreeSet,a:{Element$TreeSet:$$targs$$.Element$TreeSet}},Index$Ranged:$$targs$$.Element$TreeSet/*ORALE!Element inv pero Index var*/,Element$Ranged:$$targs$$.Element$TreeSet/*ORALE!Element inv pero Element var*/},treeSet$);
}
function TreeSet(){return TreeSet$c_$c$.apply(undefined,arguments);}
function TreeSet$c_$c$$$a($175,$176,$$targs$$,treeSet$){
if($176===undefined){$176=m$1.empty();}
treeSet$.$1dkeuw$177_=$175;
m$1.atr$(treeSet$,'$1dkeuw$177',function(){return this.$1dkeuw$177_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Comparison},ps:[{nm:'x',mt:'prm',$t:'Element$TreeSet'},{nm:'y',mt:'prm',$t:'Element$TreeSet'}],$cont:TreeSet,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:TreeSet:$m:compare$i3xpjz')];},d:['ceylon.collection','TreeSet','$m','compare$i3xpjz']};});
treeSet$.$1dkeuw$178_=($179=$175,$17a=$176.$_map(m$1.jsc$2((function($17b){return m$1.Entry($17b,$17b,{Item$Entry:treeSet$.$$targs$$.Element$TreeSet/*ORALE!Element inv pero Item var*/,Key$Entry:treeSet$.$$targs$$.Element$TreeSet/*ORALE!Element inv pero Key var*/});
}),[{nm:'elem',mt:'prm',$t:treeSet$.$$targs$$.Element$TreeSet}],{Arguments$Callable:m$1.mtt$([treeSet$.$$targs$$.Element$TreeSet]),Return$Callable:{t:m$1.Entry,a:{Item$Entry:treeSet$.$$targs$$.Element$TreeSet/*ORALE!Element inv pero Item var*/,Key$Entry:treeSet$.$$targs$$.Element$TreeSet/*ORALE!Element inv pero Key var*/}}}),{Result$map:{t:m$1.Entry,a:{Item$Entry:treeSet$.$$targs$$.Element$TreeSet/*ORALE!Element inv pero Item var*/,Key$Entry:treeSet$.$$targs$$.Element$TreeSet/*ORALE!Element inv pero Key var*/}}}),TreeMap($179,$17a,{Key$TreeMap:treeSet$.$$targs$$.Element$TreeSet,Item$TreeMap:treeSet$.$$targs$$.Element$TreeSet}));
m$1.atr$(treeSet$,'$1dkeuw$178',function(){return this.$1dkeuw$178_;},undefined,function(){return{mod:$CCMM$,$t:{t:TreeMap,a:{Key$TreeMap:'Element$TreeSet',Item$TreeMap:'Element$TreeSet'}},$cont:TreeSet,pa:3,d:['ceylon.collection','TreeSet','$at','map$n8fv26']};});
var $179,$17a;
return treeSet$;
};
function TreeSet$c_$c$($175,$176,$$targs$$,treeSet$){
$init$TreeSet();
if(treeSet$===undefined)treeSet$=new TreeSet.$$;
if($176===undefined){$176=m$1.empty();}
TreeSet$$c($$targs$$,treeSet$);
TreeSet$c_$c$$$a($175,$176,$$targs$$,treeSet$);
return treeSet$;
};
TreeSet$c_$c$.$crtmm$=function(){return{mod:$CCMM$,ps:[{nm:'compare',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Arguments$Callable:{t:'T',l:['Element$TreeSet','Element$TreeSet']},Return$Callable:{t:m$1.Comparison}}},$rt:{t:m$1.Comparison},ps:[{nm:'x',mt:'prm',$t:'Element$TreeSet'},{nm:'y',mt:'prm',$t:'Element$TreeSet'}],an:function(){return[m$1.doc("A comparator function used to sort the elements.")];}},{nm:'elements',mt:'prm',def:1,$t:{t:m$1.Iterable,a:{Element$Iterable:'Element$TreeSet',Absent$Iterable:{t:m$1.Null}}},an:function(){return[m$1.doc("The initial elements of the set.")];}}],$cont:TreeSet,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:TreeSet:$cn:$def')];},d:['ceylon.collection','TreeSet','$cn','$def']};};
TreeSet.TreeSet$c_$c$=TreeSet$c_$c$;
ex$.TreeSet$c_$c$=TreeSet$c_$c$;
function TreeSet$c_copy$$a($17c,$$targs$$,treeSet$){
treeSet$.$1dkeuw$177_=($17d=$17c,m$1.jsc$3($17d,$17d.$1dkeuw$177));
m$1.atr$(treeSet$,'$1dkeuw$177',function(){return this.$1dkeuw$177_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Comparison},ps:[{nm:'x',mt:'prm',$t:'Element$TreeSet'},{nm:'y',mt:'prm',$t:'Element$TreeSet'}],$cont:TreeSet,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:TreeSet:$m:compare$i3xpjz')];},d:['ceylon.collection','TreeSet','$m','compare$i3xpjz']};});
var $17d;
treeSet$.$1dkeuw$178_=$17c.$1dkeuw$178.clone();
m$1.atr$(treeSet$,'$1dkeuw$178',function(){return this.$1dkeuw$178_;},undefined,function(){return{mod:$CCMM$,$t:{t:TreeMap,a:{Key$TreeMap:'Element$TreeSet',Item$TreeMap:'Element$TreeSet'}},$cont:TreeSet,pa:3,d:['ceylon.collection','TreeSet','$at','map$n8fv26']};});
return treeSet$;
};
function TreeSet$c_copy($17c,$$targs$$,treeSet$){
$init$TreeSet();
if(treeSet$===undefined)treeSet$=new TreeSet.$$;
TreeSet$$c($$targs$$,treeSet$);
TreeSet$c_copy$$a($17c,$$targs$$,treeSet$);
return treeSet$;
};
TreeSet$c_copy.$crtmm$=function(){return{mod:$CCMM$,ps:[{nm:'treeSet',mt:'prm',$t:{t:TreeSet,a:{Element$TreeSet:'Element$TreeSet'}}}],$cont:TreeSet,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:TreeSet:$cn:copy')];},d:['ceylon.collection','TreeSet','$cn','copy']};};
TreeSet.TreeSet$c_copy=TreeSet$c_copy;
ex$.TreeSet$c_copy=TreeSet$c_copy;
TreeSet.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'compare',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Arguments$Callable:{t:'T',l:['Element$TreeSet','Element$TreeSet']},Return$Callable:{t:m$1.Comparison}}},$rt:{t:m$1.Comparison},ps:[{nm:'x',mt:'prm',$t:'Element$TreeSet'},{nm:'y',mt:'prm',$t:'Element$TreeSet'}],an:function(){return[m$1.doc("A comparator function used to sort the elements.")];}},{nm:'elements',mt:'prm',def:1,$t:{t:m$1.Iterable,a:{Element$Iterable:'Element$TreeSet',Absent$Iterable:{t:m$1.Null}}},an:function(){return[m$1.doc("The initial elements of the set.")];}}],tp:{Element$TreeSet:{sts:[{t:m$1.$_Object}]}},sts:[{t:MutableSet,a:{Element$MutableSet:'Element$TreeSet'}},{t:SortedSet,a:{Element$SortedSet:'Element$TreeSet'}},{t:m$1.Ranged,a:{Subrange$Ranged:{t:TreeSet,a:{Element$TreeSet:'Element$TreeSet'}},Index$Ranged:'Element$TreeSet',Element$Ranged:'Element$TreeSet'}}],pa:2049,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:TreeSet'),m$1.see(m$1.$arr$sa$([m$1.OpenFunction$jsint(m$1.lmp$(ex$,'ceylon.collection'),naturalOrderTreeSet)],{t:m$1.FunctionDeclaration$meta$declaration})),m$1.by(m$1.$arr$sa$(["Gavin King"],{t:m$1.$_String}))];},d:['ceylon.collection','TreeSet']};};
ex$.TreeSet=TreeSet;
function $init$TreeSet(){
if(TreeSet.$$===undefined){
m$1.initTypeProto(TreeSet,'ceylon.collection::TreeSet',m$1.Basic,$init$SortedSet(),$init$MutableSet(),m$1.Ranged);
(function(treeSet$){
m$1.atr$(treeSet$,'$1dkeuw$178',function(){return this.$1dkeuw$178_;},undefined,function(){return{mod:$CCMM$,$t:{t:TreeMap,a:{Key$TreeMap:'Element$TreeSet',Item$TreeMap:'Element$TreeSet'}},$cont:TreeSet,pa:3,d:['ceylon.collection','TreeSet','$at','map$n8fv26']};});
treeSet$.contains=function($17e){var treeSet$=this;
return treeSet$.$1dkeuw$178.defines($17e);
};treeSet$.add=function($17f){var treeSet$=this;
return !m$1.nn$(treeSet$.$1dkeuw$178.put($17f,$17f));
};treeSet$.remove=function($17g){var treeSet$=this;
return m$1.nn$(treeSet$.$1dkeuw$178.remove($17g));
};treeSet$.clear=function(){var treeSet$=this;
return treeSet$.$1dkeuw$178.clear();
};treeSet$.iterator=function(){var treeSet$=this;
return treeSet$.$1dkeuw$178.keys.iterator();
};m$1.atr$(treeSet$,'first',function(){
var treeSet$=this;
return ($17h=treeSet$.$1dkeuw$178.first,m$1.nn$($17h)?$17h.key:null);
},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$TreeSet']},$cont:TreeSet,pa:3,d:['ceylon.collection','TreeSet','$at','first']};});
m$1.atr$(treeSet$,'last',function(){
var treeSet$=this;
return ($17i=treeSet$.$1dkeuw$178.last,m$1.nn$($17i)?$17i.key:null);
},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$TreeSet']},$cont:TreeSet,pa:3,d:['ceylon.collection','TreeSet','$at','last']};});
treeSet$.higherElements=function($17j){var treeSet$=this;
return treeSet$.$1dkeuw$178.higherEntries($17j).$_map(m$1.jsc$2(function($O$){return $O$.key;},[{nm:'_0',mt:'prm',$t:{t:m$1.Entry,a:{Item$Entry:treeSet$.$$targs$$.Element$TreeSet,Key$Entry:treeSet$.$$targs$$.Element$TreeSet}}}],{Item$Entry:treeSet$.$$targs$$.Element$TreeSet/*ORALE!Element inv pero Item var*/,Key$Entry:treeSet$.$$targs$$.Element$TreeSet/*ORALE!Element inv pero Key var*/}),{Result$map:treeSet$.$$targs$$.Element$TreeSet});
};treeSet$.lowerElements=function($17k){var treeSet$=this;
return treeSet$.$1dkeuw$178.lowerEntries($17k).$_map(m$1.jsc$2(function($O$){return $O$.key;},[{nm:'_0',mt:'prm',$t:{t:m$1.Entry,a:{Item$Entry:treeSet$.$$targs$$.Element$TreeSet,Key$Entry:treeSet$.$$targs$$.Element$TreeSet}}}],{Item$Entry:treeSet$.$$targs$$.Element$TreeSet/*ORALE!Element inv pero Item var*/,Key$Entry:treeSet$.$$targs$$.Element$TreeSet/*ORALE!Element inv pero Key var*/}),{Result$map:treeSet$.$$targs$$.Element$TreeSet});
};treeSet$.ascendingElements=function($17l,$17m){var treeSet$=this;
return treeSet$.higherElements($17l).takeWhile(m$1.jsc$2((function($17n){return !m$1.$eq$(treeSet$.$1dkeuw$177($17n,$17m),m$1.larger());
}),[{nm:'element',mt:'prm',$t:treeSet$.$$targs$$.Element$TreeSet}],{Arguments$Callable:m$1.mtt$([treeSet$.$$targs$$.Element$TreeSet]),Return$Callable:{t:m$1.$_Boolean}}));
};treeSet$.descendingElements=function($17o,$17p){var treeSet$=this;
return treeSet$.lowerElements($17o).takeWhile(m$1.jsc$2((function($17q){return !m$1.$eq$(treeSet$.$1dkeuw$177($17q,$17p),m$1.smaller());
}),[{nm:'element',mt:'prm',$t:treeSet$.$$targs$$.Element$TreeSet}],{Arguments$Callable:m$1.mtt$([treeSet$.$$targs$$.Element$TreeSet]),Return$Callable:{t:m$1.$_Boolean}}));
};treeSet$.measure=function($17r,$17s){var treeSet$=this;
return TreeSet(m$1.jsc$2(m$1.jsc$3(treeSet$,treeSet$.$1dkeuw$177),[{nm:'x',mt:'prm',$t:treeSet$.$$targs$$.Element$TreeSet},{nm:'y',mt:'prm',$t:treeSet$.$$targs$$.Element$TreeSet}],{Element$TreeSet:treeSet$.$$targs$$.Element$TreeSet}),treeSet$.higherElements($17r).take($17s),{Element$TreeSet:treeSet$.$$targs$$.Element$TreeSet});
};treeSet$.span=function($17t,$17u){var treeSet$=this;
return function(){var $17v=m$1.$eq$(treeSet$.$1dkeuw$177($17t,$17u),m$1.larger());return ($17w=m$1.jsc$2((function($17x,$17y){return ($17z=($17v?treeSet$.$1dkeuw$177($17y,$17x):null),m$1.nn$($17z)?$17z:treeSet$.$1dkeuw$177($17x,$17y));
var $17z;
}),[{nm:'x',mt:'prm',$t:treeSet$.$$targs$$.Element$TreeSet},{nm:'y',mt:'prm',$t:treeSet$.$$targs$$.Element$TreeSet}],{Arguments$Callable:m$1.mtt$([{t:m$1.$_String}]),Return$Callable:{t:m$1.Comparison}}),$180=($181=($17v?treeSet$.descendingElements($17t,$17u):null),m$1.nn$($181)?$181:treeSet$.ascendingElements($17t,$17u)),TreeSet($17w,$180,{Element$TreeSet:treeSet$.$$targs$$.Element$TreeSet}));
var $17w,$180,$181;
}();
};treeSet$.spanFrom=function($182){var treeSet$=this;
return TreeSet(m$1.jsc$2(m$1.jsc$3(treeSet$,treeSet$.$1dkeuw$177),[{nm:'x',mt:'prm',$t:treeSet$.$$targs$$.Element$TreeSet},{nm:'y',mt:'prm',$t:treeSet$.$$targs$$.Element$TreeSet}],{Element$TreeSet:treeSet$.$$targs$$.Element$TreeSet}),treeSet$.higherElements($182),{Element$TreeSet:treeSet$.$$targs$$.Element$TreeSet});
};treeSet$.spanTo=function($183){var treeSet$=this;
return TreeSet(m$1.jsc$2(m$1.jsc$3(treeSet$,treeSet$.$1dkeuw$177),[{nm:'x',mt:'prm',$t:treeSet$.$$targs$$.Element$TreeSet},{nm:'y',mt:'prm',$t:treeSet$.$$targs$$.Element$TreeSet}],{Element$TreeSet:treeSet$.$$targs$$.Element$TreeSet}),treeSet$.takeWhile(m$1.jsc$2((function($184){return !m$1.$eq$(treeSet$.$1dkeuw$177($184,$183),m$1.larger());
}),[{nm:'element',mt:'prm',$t:treeSet$.$$targs$$.Element$TreeSet}],{Arguments$Callable:m$1.mtt$([treeSet$.$$targs$$.Element$TreeSet]),Return$Callable:{t:m$1.$_Boolean}})),{Element$TreeSet:treeSet$.$$targs$$.Element$TreeSet});
};treeSet$.clone=function(){var treeSet$=this;
return TreeSet$c_copy(treeSet$,{Element$TreeSet:treeSet$.$$targs$$.Element$TreeSet});
};
treeSet$.clone.$crtmm$=function(){return{mod:$CCMM$,$t:{t:TreeSet,a:{Element$TreeSet:'Element$TreeSet'}},ps:[],$cont:TreeSet,pa:3,d:['ceylon.collection','TreeSet','$m','clone']};};
treeSet$.complement=function($185,$hn5pfs$){
var treeSet$=this;
var $186=HashSet(undefined,undefined,undefined,{Element$HashSet:treeSet$.$$targs$$.Element$TreeSet});
var $188;for(var $187=treeSet$.iterator();($188=$187.next())!==m$1.finished();){
if((!m$1.$cnt$($185,$188))){
$186.add($188);
}
}
return $186;
};treeSet$.complement.$crtmm$=function(){return{mod:$CCMM$,$t:{t:HashSet,a:{Element$HashSet:'Element$TreeSet'}},ps:[{nm:'set',mt:'prm',$t:{t:m$1.Set,a:{Element$Set:'Other$complement'}}}],$cont:TreeSet,tp:{Other$complement:{sts:[{t:m$1.$_Object}]}},pa:3,d:['ceylon.collection','TreeSet','$m','complement']};};
treeSet$.exclusiveUnion=function($189,$w5s243$){
var treeSet$=this;
var $18a=HashSet(undefined,undefined,undefined,{Element$HashSet:m$1.mut$([treeSet$.$$targs$$.Element$TreeSet,$w5s243$.Other$exclusiveUnion])});
var $18c;for(var $18b=treeSet$.iterator();($18c=$18b.next())!==m$1.finished();){
if((!m$1.$cnt$($189,$18c))){
$18a.add($18c);
}
}
var $18e;for(var $18d=$189.iterator();($18e=$18d.next())!==m$1.finished();){
if((!m$1.$cnt$(treeSet$,$18e))){
$18a.add($18e);
}
}
return $18a;
};treeSet$.exclusiveUnion.$crtmm$=function(){return{mod:$CCMM$,$t:{t:HashSet,a:{Element$HashSet:{t:'u',l:['Element$TreeSet','Other$exclusiveUnion']}}},ps:[{nm:'set',mt:'prm',$t:{t:m$1.Set,a:{Element$Set:'Other$exclusiveUnion'}}}],$cont:TreeSet,tp:{Other$exclusiveUnion:{sts:[{t:m$1.$_Object}]}},pa:3,d:['ceylon.collection','TreeSet','$m','exclusiveUnion']};};
treeSet$.intersection=function($18f,$8ak55h$){
var treeSet$=this;
var $18g=HashSet(undefined,undefined,undefined,{Element$HashSet:m$1.mit$([treeSet$.$$targs$$.Element$TreeSet,$8ak55h$.Other$intersection])});
var $18i;for(var $18h=treeSet$.iterator();($18i=$18h.next())!==m$1.finished();){
var $18j;
if(m$1.$cnt$($18f,$18i)&&m$1.is$(($18j=$18i),$8ak55h$.Other$intersection,$8ak55h$)){
$18g.add($18j);
}
}
return $18g;
};treeSet$.intersection.$crtmm$=function(){return{mod:$CCMM$,$t:{t:HashSet,a:{Element$HashSet:{t:'i',l:['Element$TreeSet','Other$intersection']}}},ps:[{nm:'set',mt:'prm',$t:{t:m$1.Set,a:{Element$Set:'Other$intersection'}}}],$cont:TreeSet,tp:{Other$intersection:{sts:[{t:m$1.$_Object}]}},pa:3,d:['ceylon.collection','TreeSet','$m','intersection']};};
treeSet$.union=function($18k,$vdkdyl$){
var treeSet$=this;
var $18l=HashSet(undefined,undefined,undefined,{Element$HashSet:m$1.mut$([treeSet$.$$targs$$.Element$TreeSet,$vdkdyl$.Other$union])});
$18l.addAll(treeSet$);
$18l.addAll($18k);
return $18l;
};treeSet$.union.$crtmm$=function(){return{mod:$CCMM$,$t:{t:HashSet,a:{Element$HashSet:{t:'u',l:['Element$TreeSet','Other$union']}}},ps:[{nm:'set',mt:'prm',$t:{t:m$1.Set,a:{Element$Set:'Other$union'}}}],$cont:TreeSet,tp:{Other$union:{sts:[{t:m$1.$_Object}]}},pa:3,d:['ceylon.collection','TreeSet','$m','union']};};
treeSet$.equals=function($18m){var treeSet$=this;
return treeSet$.getT$all()['ceylon.language::Set'].$$.prototype.equals.call(treeSet$,$18m);
};m$1.atr$(treeSet$,'hash',function(){
var treeSet$=this;
return m$1.attrGetter(treeSet$.getT$all()['ceylon.language::Set'],'hash').call(this);
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:TreeSet,pa:3,d:['ceylon.collection','TreeSet','$at','hash']};});
})(TreeSet.$$.prototype);
}
return TreeSet;
}
ex$.$init$TreeSet=$init$TreeSet;
$init$TreeSet();
TreeSet.inst$$=function($18n){
var treeSet$=new TreeSet.$$;
m$1.set_type_args(treeSet$,{Element$TreeSet:$18n.$$targs$$.Type$Class.a.Element$TreeSet});
m$1.set_type_args(treeSet$,{Element$MutableSet:treeSet$.$$targs$$.Element$TreeSet,Element$Set:treeSet$.$$targs$$.Element$TreeSet,Element$Collection:treeSet$.$$targs$$.Element$TreeSet,Element$Iterable:treeSet$.$$targs$$.Element$TreeSet,Absent$Iterable:{t:m$1.Null},Element$Category:{t:m$1.$_Object},Element$SetMutator:treeSet$.$$targs$$.Element$TreeSet,Element$SortedSet:treeSet$.$$targs$$.Element$TreeSet,Subrange$Ranged:{t:SortedSet,a:{Element$SortedSet:treeSet$.$$targs$$.Element$TreeSet}},Index$Ranged:treeSet$.$$targs$$.Element$TreeSet,Element$Ranged:treeSet$.$$targs$$.Element$TreeSet});
return treeSet$;
};
TreeSet.ser$get$=function(ref,o){var n=ref.attribute.qualifiedName;if(n==='ceylon.collection::TreeSet.map')return o.$1dkeuw$178_;
else throw new TypeError('unknown attribute');
};
TreeSet.ser$set$=function(ref,o,i){if(!m$1.is$(ref,{t:m$1.Member$serialization}))throw m$1.AssertionError('unexpected reachable reference');var n=ref.attribute.qualifiedName;
if(n==='ceylon.collection::TreeSet.map')o.$1dkeuw$178_=i;
else throw new TypeError('unknown attribute');
};
TreeSet.ser$refs$=function(o){return [m$1.MemberImpl$impl(m$1.OpenValue$jsint(m$1.lmp$(ex$,'ceylon.collection'),o.$prop$get$1dkeuw$178))];
};
var $17h,$17i;
function naturalOrderTreeSet($18o,$fl14hl$){return TreeSet(m$1.jsc$2((function($18p,$18q){return $18p.compare($18q);
}),[{nm:'x',mt:'prm',$t:$fl14hl$.Element$naturalOrderTreeSet},{nm:'y',mt:'prm',$t:$fl14hl$.Element$naturalOrderTreeSet}],{Arguments$Callable:m$1.mtt$([$fl14hl$.Element$naturalOrderTreeSet,$fl14hl$.Element$naturalOrderTreeSet]),Return$Callable:{t:m$1.Comparison}}),$18o,{Element$TreeSet:$fl14hl$.Element$naturalOrderTreeSet});
};
naturalOrderTreeSet.$crtmm$=function(){return{mod:$CCMM$,$t:{t:TreeSet,a:{Element$TreeSet:'Element$naturalOrderTreeSet'}},ps:[{nm:'entries',mt:'prm',$t:{t:m$1.Iterable,a:{Element$Iterable:'Element$naturalOrderTreeSet',Absent$Iterable:{t:m$1.Null}}}}],tp:{Element$naturalOrderTreeSet:{sts:[{t:m$1.Comparable,a:{Other$Comparable:'Element$naturalOrderTreeSet'}}]}},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:naturalOrderTreeSet')];},d:['ceylon.collection','naturalOrderTreeSet']};};
ex$.naturalOrderTreeSet=naturalOrderTreeSet;
function LinkedList$$c($$targs$$,linkedList$){
m$1.set_type_args(linkedList$,$$targs$$);
MutableList({Element$MutableList:$$targs$$.Element$LinkedList},linkedList$);
Stack({Element$Stack:$$targs$$.Element$LinkedList},linkedList$);
Queue({Element$Queue:$$targs$$.Element$LinkedList},linkedList$);
}
function LinkedList(){return LinkedList$c_$c$.apply(undefined,arguments);}
function LinkedList$c_$c$$$a($18r,$$targs$$,linkedList$){
if($18r===undefined){$18r=m$1.empty();}
linkedList$.$1dkeuw$18s_=null;
linkedList$.$1dkeuw$18t_=null;
linkedList$.$1dkeuw$18u_=(0);
var $18w;for(var $18v=$18r.iterator();($18w=$18v.next())!==m$1.finished();){
linkedList$.$1dkeuw$18x($18w);
}
return linkedList$;
};
function LinkedList$c_$c$($18r,$$targs$$,linkedList$){
$init$LinkedList();
if(linkedList$===undefined)linkedList$=new LinkedList.$$;
if($18r===undefined){$18r=m$1.empty();}
LinkedList$$c($$targs$$,linkedList$);
LinkedList$c_$c$$$a($18r,$$targs$$,linkedList$);
return linkedList$;
};
LinkedList$c_$c$.$crtmm$=function(){return{mod:$CCMM$,ps:[{nm:'elements',mt:'prm',def:1,$t:{t:m$1.Iterable,a:{Element$Iterable:'Element$LinkedList',Absent$Iterable:{t:m$1.Null}}},an:function(){return[m$1.doc("The initial elements of the list.")];}}],$cont:LinkedList,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:LinkedList:$cn:$def')];},d:['ceylon.collection','LinkedList','$cn','$def']};};
LinkedList.LinkedList$c_$c$=LinkedList$c_$c$;
ex$.LinkedList$c_$c$=LinkedList$c_$c$;
function LinkedList$c_copy$$a($18y,$$targs$$,linkedList$){
linkedList$.$1dkeuw$18s_=null;
linkedList$.$1dkeuw$18t_=null;
linkedList$.$1dkeuw$18u_=(0);
var $18z=$18y.$1dkeuw$18s;
$prop$get$18z={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:Cell,a:{Element$Cell:'Element$LinkedList'}}]},$cont:LinkedList,pa:1027,d:['ceylon.collection','LinkedList','$cn','copy','$at','iter$vnorsk']};}};
$prop$get$18z.get=function(){return $18z};
var $190;
while(m$1.nn$(($190=$18z))){
linkedList$.$1dkeuw$18x($190.element);
$18z=$190.rest;
}
return linkedList$;
};
function LinkedList$c_copy($18y,$$targs$$,linkedList$){
$init$LinkedList();
if(linkedList$===undefined)linkedList$=new LinkedList.$$;
LinkedList$$c($$targs$$,linkedList$);
LinkedList$c_copy$$a($18y,$$targs$$,linkedList$);
return linkedList$;
};
LinkedList$c_copy.$crtmm$=function(){return{mod:$CCMM$,ps:[{nm:'linkedList',mt:'prm',$t:{t:LinkedList,a:{Element$LinkedList:'Element$LinkedList'}},an:function(){return[m$1.doc("The `LinkedList` to copy.")];}}],$cont:LinkedList,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:LinkedList:$cn:copy')];},d:['ceylon.collection','LinkedList','$cn','copy']};};
LinkedList.LinkedList$c_copy=LinkedList$c_copy;
ex$.LinkedList$c_copy=LinkedList$c_copy;
LinkedList.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'elements',mt:'prm',def:1,$t:{t:m$1.Iterable,a:{Element$Iterable:'Element$LinkedList',Absent$Iterable:{t:m$1.Null}}},an:function(){return[m$1.doc("The initial elements of the list.")];}}],tp:{Element$LinkedList:{}},sts:[{t:MutableList,a:{Element$MutableList:'Element$LinkedList'}},{t:Stack,a:{Element$Stack:'Element$LinkedList'}},{t:Queue,a:{Element$Queue:'Element$LinkedList'}}],pa:2049,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:LinkedList'),m$1.by(m$1.$arr$sa$(["St\u00e9phane \u00c9pardaud"],{t:m$1.$_String}))];},d:['ceylon.collection','LinkedList']};};
ex$.LinkedList=LinkedList;
function $init$LinkedList(){
if(LinkedList.$$===undefined){
m$1.initTypeProto(LinkedList,'ceylon.collection::LinkedList',m$1.Basic,$init$MutableList(),$init$Stack(),$init$Queue());
(function(linkedList$){
m$1.atr$(linkedList$,'$1dkeuw$18s',function(){return this.$1dkeuw$18s_;},function($191){return this.$1dkeuw$18s_=$191;},function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:Cell,a:{Element$Cell:'Element$LinkedList'}}]},$cont:LinkedList,pa:1027,d:['ceylon.collection','LinkedList','$at','head$hmoq6r']};});
m$1.atr$(linkedList$,'$1dkeuw$18t',function(){return this.$1dkeuw$18t_;},function($192){return this.$1dkeuw$18t_=$192;},function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:Cell,a:{Element$Cell:'Element$LinkedList'}}]},$cont:LinkedList,pa:1027,d:['ceylon.collection','LinkedList','$at','tail$9m8bs3']};});
m$1.atr$(linkedList$,'$1dkeuw$18u',function(){return this.$1dkeuw$18u_;},function($193){return this.$1dkeuw$18u_=$193;},function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:LinkedList,pa:1027,d:['ceylon.collection','LinkedList','$at','length$5zg48z']};});
linkedList$.$1dkeuw$18x=function($194){
var linkedList$=this;
var $195=Cell($194,null,{Element$Cell:linkedList$.$$targs$$.Element$LinkedList});
var $196;
if(m$1.nn$(($196=linkedList$.$1dkeuw$18t))){
($196.rest=$195);
linkedList$.$1dkeuw$18t=$195;
}
else{
linkedList$.$1dkeuw$18t=(linkedList$.$1dkeuw$18s=$195);
}
($197=linkedList$.$1dkeuw$18u,linkedList$.$1dkeuw$18u=$197.successor,$197);
var $197;
};linkedList$.$1dkeuw$18x.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'element',mt:'prm',$t:'Element$LinkedList'}],$cont:LinkedList,d:['ceylon.collection','LinkedList','$m','addToTail$qbzc49']};};
linkedList$.set=function($198,$199){
var linkedList$=this;
m$1.asrt$((($19a=$198,$19a.notSmallerThan((0))&&$19a.smallerThan(linkedList$.$1dkeuw$18u))),"index may not be negative or greater than the\nlast index in the list: \'0<=index<length\' at LinkedList.ceylon (61:15-61:31)",'59:8-61:32','LinkedList.ceylon');
var $19b=linkedList$.$1dkeuw$18s;
var $19c=(0);
var $19d;
while(m$1.nn$(($19d=$19b))){
if((($19e=$19c,$19c=$19e.successor,$19e)==$198)){
($19d.element=$199);
return;
}
var $19e;
$19b=$19d.rest;
}
};linkedList$.set.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'index',mt:'prm',$t:{t:m$1.Integer}},{nm:'element',mt:'prm',$t:'Element$LinkedList'}],$cont:LinkedList,pa:3,d:['ceylon.collection','LinkedList','$m','set']};};
linkedList$.insert=function($19f,$19g){
var linkedList$=this;
m$1.asrt$((($19h=$19f,$19h.notSmallerThan((0))&&$19h.notLargerThan(linkedList$.$1dkeuw$18u))),"index may not be negative or greater than the\nlength of the list: \'0<=index<=length\' at LinkedList.ceylon (77:15-77:32)",'75:8-77:33','LinkedList.ceylon');
if(($19f==linkedList$.$1dkeuw$18u)){
linkedList$.add($19g);
}
else{
if(($19f==(0))){
linkedList$.$1dkeuw$18s=Cell($19g,linkedList$.$1dkeuw$18s,{Element$Cell:linkedList$.$$targs$$.Element$LinkedList});
($19i=linkedList$.$1dkeuw$18u,linkedList$.$1dkeuw$18u=$19i.successor,$19i);
var $19i;
}
else{
var $19j=linkedList$.$1dkeuw$18s;
var $19k=(0);
var $19l;
while(m$1.nn$(($19l=$19j))){
var $19m=$19l.rest;
if((($19k=$19k.successor)==$19f)){
($19l.rest=Cell($19g,$19m,{Element$Cell:linkedList$.$$targs$$.Element$LinkedList}));
($19n=linkedList$.$1dkeuw$18u,linkedList$.$1dkeuw$18u=$19n.successor,$19n);
var $19n;
return;
}
$19j=$19m;
}
m$1.asrt$((false),"Assertion failed: \'false\' at LinkedList.ceylon (99:23-99:29)",'99:16-99:30','LinkedList.ceylon');
}
}
};linkedList$.insert.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'index',mt:'prm',$t:{t:m$1.Integer}},{nm:'element',mt:'prm',$t:'Element$LinkedList'}],$cont:LinkedList,pa:3,d:['ceylon.collection','LinkedList','$m','insert']};};
linkedList$.insertAll=function($19o,$19p){
var linkedList$=this;
m$1.asrt$((($19q=$19o,$19q.notSmallerThan((0))&&$19q.notLargerThan(linkedList$.$1dkeuw$18u))),"index may not be negative or greater than the\nlength of the list: \'0<=index<=length\' at LinkedList.ceylon (109:15-109:32)",'107:8-109:33','LinkedList.ceylon');
if(($19o==linkedList$.$1dkeuw$18u)){
linkedList$.addAll($19p);
}
else{
var $19r=m$1.$_Array($19p,{Element$Array:linkedList$.$$targs$$.Element$LinkedList});
$19r.reverseInPlace();
if(($19o==(0))){
linkedList$.$1dkeuw$18s=$19r.fold(linkedList$.$1dkeuw$18s,{Result$fold:m$1.mut$([{t:m$1.Null},{t:Cell,a:{Element$Cell:linkedList$.$$targs$$.Element$LinkedList}}])})(m$1.jsc$2((function($19s,$19t){return Cell($19t,$19s,{Element$Cell:linkedList$.$$targs$$.Element$LinkedList});
}),[{nm:'rest',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},{t:Cell,a:{Element$Cell:linkedList$.$$targs$$.Element$LinkedList}}]}},{nm:'element',mt:'prm',$t:linkedList$.$$targs$$.Element$LinkedList}],{Arguments$Callable:{t:m$1.Tuple,a:{Element$Tuple:m$1.mut$([{t:m$1.Null},{t:Cell,a:{Element$Cell:linkedList$.$$targs$$.Element$LinkedList}},linkedList$.$$targs$$.Element$LinkedList]),First$Tuple:m$1.mut$([{t:m$1.Null},{t:Cell,a:{Element$Cell:linkedList$.$$targs$$.Element$LinkedList}}]),Rest$Tuple:m$1.mtt$([linkedList$.$$targs$$.Element$LinkedList])}},Return$Callable:{t:Cell,a:{Element$Cell:linkedList$.$$targs$$.Element$LinkedList}}}));
(linkedList$.$1dkeuw$18u=linkedList$.$1dkeuw$18u.plus($19r.size));
}
else{
var $19u=linkedList$.$1dkeuw$18s;
var $19v=(0);
var $19w;
while(m$1.nn$(($19w=$19u))){
var $19x=$19w.rest;
if((($19v=$19v.successor)==$19o)){
($19w.rest=$19r.fold($19x,{Result$fold:m$1.mut$([{t:m$1.Null},{t:Cell,a:{Element$Cell:linkedList$.$$targs$$.Element$LinkedList}}])})(m$1.jsc$2((function($19y,$19z){return Cell($19z,$19y,{Element$Cell:linkedList$.$$targs$$.Element$LinkedList});
}),[{nm:'rest',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},{t:Cell,a:{Element$Cell:linkedList$.$$targs$$.Element$LinkedList}}]}},{nm:'element',mt:'prm',$t:linkedList$.$$targs$$.Element$LinkedList}],{Arguments$Callable:{t:m$1.Tuple,a:{Element$Tuple:m$1.mut$([{t:m$1.Null},{t:Cell,a:{Element$Cell:linkedList$.$$targs$$.Element$LinkedList}},linkedList$.$$targs$$.Element$LinkedList]),First$Tuple:m$1.mut$([{t:m$1.Null},{t:Cell,a:{Element$Cell:linkedList$.$$targs$$.Element$LinkedList}}]),Rest$Tuple:m$1.mtt$([linkedList$.$$targs$$.Element$LinkedList])}},Return$Callable:{t:Cell,a:{Element$Cell:linkedList$.$$targs$$.Element$LinkedList}}})));
(linkedList$.$1dkeuw$18u=linkedList$.$1dkeuw$18u.plus($19r.size));
return;
}
$19u=$19x;
}
m$1.asrt$((false),"Assertion failed: \'false\' at LinkedList.ceylon (135:23-135:29)",'135:16-135:30','LinkedList.ceylon');
}
}
};linkedList$.insertAll.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'index',mt:'prm',$t:{t:m$1.Integer}},{nm:'elements',mt:'prm',$t:{t:m$1.Iterable,a:{Element$Iterable:'Element$LinkedList',Absent$Iterable:{t:m$1.Null}}}}],$cont:LinkedList,pa:3,d:['ceylon.collection','LinkedList','$m','insertAll']};};
linkedList$.add=function($1a0){var linkedList$=this;
return linkedList$.$1dkeuw$18x($1a0);
};
linkedList$.add.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'element',mt:'prm',$t:'Element$LinkedList'}],$cont:LinkedList,pa:3,d:['ceylon.collection','LinkedList','$m','add']};};
linkedList$.addAll=function($1a1){
var linkedList$=this;
var $1a3;for(var $1a2=$1a1.iterator();($1a3=$1a2.next())!==m$1.finished();){
linkedList$.add($1a3);
}
};linkedList$.addAll.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'elements',mt:'prm',$t:{t:m$1.Iterable,a:{Element$Iterable:'Element$LinkedList',Absent$Iterable:{t:m$1.Null}}}}],$cont:LinkedList,pa:3,d:['ceylon.collection','LinkedList','$m','addAll']};};
linkedList$.$_delete=function($1a4){
var linkedList$=this;
if(($1a4==(0))){
var $1a5;
if(m$1.nn$(($1a5=linkedList$.$1dkeuw$18s))){
var $1a6;
if(m$1.nn$(($1a6=$1a5.rest))){
linkedList$.$1dkeuw$18s=$1a6;
}
else{
linkedList$.$1dkeuw$18s=(linkedList$.$1dkeuw$18t=null);
}
($1a7=linkedList$.$1dkeuw$18u,linkedList$.$1dkeuw$18u=$1a7.predecessor,$1a7);
var $1a7;
return $1a5.element;
}
else{
return null;
}
}
else{
if(($1a8=$1a4,$1a8.largerThan((0))&&$1a8.smallerThan(linkedList$.$1dkeuw$18u))){
var $1a9=linkedList$.$1dkeuw$18s;
var $1aa=(0);
var $1ab;
while(m$1.nn$(($1ab=$1a9))){
var $1ac=$1ab.rest;
if((($1aa=$1aa.successor)==$1a4)){
var $1ad;
if(m$1.nn$(($1ad=($1ae=$1ac,m$1.nn$($1ae)?$1ae.rest:null)))){
($1ab.rest=$1ad);
}
else{
linkedList$.$1dkeuw$18t=$1ab;
($1ab.rest=null);
}
var $1ae;
($1af=linkedList$.$1dkeuw$18u,linkedList$.$1dkeuw$18u=$1af.predecessor,$1af);
var $1af;
return ($1ag=$1ac,m$1.nn$($1ag)?$1ag.element:null);
var $1ag;
}
else{
$1a9=$1ac;
}
}
m$1.asrt$((false),"Assertion failed: \'false\' at LinkedList.ceylon (187:19-187:25)",'187:12-187:26','LinkedList.ceylon');
}
else{
return null;
}
}
};linkedList$.$_delete.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$LinkedList']},ps:[{nm:'index',mt:'prm',$t:{t:m$1.Integer}}],$cont:LinkedList,pa:3,d:['ceylon.collection','LinkedList','$m','delete']};};
linkedList$.removeAll=function($1ah){
var linkedList$=this;
var $1ai=($1aj=$1ah,HashSet(undefined,undefined,$1aj,{Element$HashSet:m$1.mit$([linkedList$.$$targs$$.Element$LinkedList,{t:m$1.$_Object}])}));
var $1aj;
var $1ak=(0);
var $1al,$1am;
while(m$1.nn$(($1al=linkedList$.$1dkeuw$18s))&&m$1.nn$(($1am=$1al.element))&&m$1.$cnt$($1ai,$1am)){
var $1an;
if(m$1.nn$(($1an=$1al.rest))){
linkedList$.$1dkeuw$18s=$1an;
}
else{
linkedList$.$1dkeuw$18s=(linkedList$.$1dkeuw$18t=null);
}
($1ao=linkedList$.$1dkeuw$18u,linkedList$.$1dkeuw$18u=$1ao.predecessor,$1ao);
var $1ao;
($1ap=$1ak,$1ak=$1ap.successor,$1ap);
var $1ap;
}
var $1aq=linkedList$.$1dkeuw$18s;
var $1ar;
while(m$1.nn$(($1ar=$1aq))){
var $1as=$1ar.rest;
var $1at,$1au;
if(m$1.nn$(($1at=$1as))&&m$1.nn$(($1au=$1at.element))&&m$1.$cnt$($1ai,$1au)){
var $1av;
if(m$1.nn$(($1av=$1at.rest))){
($1ar.rest=$1av);
}
else{
($1ar.rest=(linkedList$.$1dkeuw$18t=null));
}
($1aw=linkedList$.$1dkeuw$18u,linkedList$.$1dkeuw$18u=$1aw.predecessor,$1aw);
var $1aw;
($1ax=$1ak,$1ak=$1ax.successor,$1ax);
var $1ax;
}
else{
$1aq=$1as;
}
}
return $1ak;
};linkedList$.removeAll.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'elements',mt:'prm',$t:{t:m$1.Iterable,a:{Element$Iterable:{t:'i',l:['Element$LinkedList',{t:m$1.$_Object}]},Absent$Iterable:{t:m$1.Null}}}}],$cont:LinkedList,pa:3,d:['ceylon.collection','LinkedList','$m','removeAll']};};
linkedList$.findAndRemoveFirst=function($1ay){
var linkedList$=this;
var $1az,$1b0;
if(m$1.nn$(($1az=linkedList$.$1dkeuw$18s))&&m$1.nn$(($1b0=$1az.element))&&$1ay($1b0)){
var $1b1;
if(m$1.nn$(($1b1=$1az.rest))){
linkedList$.$1dkeuw$18s=$1b1;
}
else{
linkedList$.$1dkeuw$18s=(linkedList$.$1dkeuw$18t=null);
}
($1b2=linkedList$.$1dkeuw$18u,linkedList$.$1dkeuw$18u=$1b2.predecessor,$1b2);
var $1b2;
return $1b0;
}
var $1b3=linkedList$.$1dkeuw$18s;
var $1b4;
while(m$1.nn$(($1b4=$1b3))){
var $1b5=$1b4.rest;
var $1b6,$1b7;
if(m$1.nn$(($1b6=$1b5))&&m$1.nn$(($1b7=$1b6.element))&&$1ay($1b7)){
var $1b8;
if(m$1.nn$(($1b8=$1b6.rest))){
($1b4.rest=$1b8);
}
else{
($1b4.rest=(linkedList$.$1dkeuw$18t=null));
}
($1b9=linkedList$.$1dkeuw$18u,linkedList$.$1dkeuw$18u=$1b9.predecessor,$1b9);
var $1b9;
return $1b7;
}
$1b3=$1b5;
}
return null;
};linkedList$.findAndRemoveFirst.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$LinkedList']},ps:[{nm:'selecting',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Arguments$Callable:{t:'T',l:[{t:'i',l:['Element$LinkedList',{t:m$1.$_Object}]}]},Return$Callable:{t:m$1.$_Boolean}}},$rt:{t:m$1.$_Boolean},ps:[{nm:'element',mt:'prm',$t:{t:'i',l:['Element$LinkedList',{t:m$1.$_Object}]}}]}],$cont:LinkedList,pa:3,d:['ceylon.collection','LinkedList','$m','findAndRemoveFirst']};};
linkedList$.findAndRemoveLast=function($1ba){
var linkedList$=this;
var $1bb;
if(m$1.nn$(($1bb=linkedList$.lastIndexWhere($1ba)))){
return linkedList$.$_delete($1bb);
}
else{
return null;
}
};linkedList$.findAndRemoveLast.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$LinkedList']},ps:[{nm:'selecting',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Arguments$Callable:{t:'T',l:[{t:'i',l:['Element$LinkedList',{t:m$1.$_Object}]}]},Return$Callable:{t:m$1.$_Boolean}}},$rt:{t:m$1.$_Boolean},ps:[{nm:'element',mt:'prm',$t:{t:'i',l:['Element$LinkedList',{t:m$1.$_Object}]}}]}],$cont:LinkedList,pa:3,d:['ceylon.collection','LinkedList','$m','findAndRemoveLast']};};
linkedList$.removeWhere=function($1bc){
var linkedList$=this;
var $1bd=(0);
var $1be,$1bf;
while(m$1.nn$(($1be=linkedList$.$1dkeuw$18s))&&m$1.nn$(($1bf=$1be.element))&&$1bc($1bf)){
var $1bg;
if(m$1.nn$(($1bg=$1be.rest))){
linkedList$.$1dkeuw$18s=$1bg;
}
else{
linkedList$.$1dkeuw$18s=(linkedList$.$1dkeuw$18t=null);
}
($1bh=linkedList$.$1dkeuw$18u,linkedList$.$1dkeuw$18u=$1bh.predecessor,$1bh);
var $1bh;
($1bi=$1bd,$1bd=$1bi.successor,$1bi);
var $1bi;
}
var $1bj=linkedList$.$1dkeuw$18s;
var $1bk;
while(m$1.nn$(($1bk=$1bj))){
var $1bl=$1bk.rest;
var $1bm,$1bn;
if(m$1.nn$(($1bm=$1bl))&&m$1.nn$(($1bn=$1bm.element))&&$1bc($1bn)){
var $1bo;
if(m$1.nn$(($1bo=$1bm.rest))){
($1bk.rest=$1bo);
}
else{
($1bk.rest=(linkedList$.$1dkeuw$18t=null));
}
($1bp=linkedList$.$1dkeuw$18u,linkedList$.$1dkeuw$18u=$1bp.predecessor,$1bp);
var $1bp;
($1bq=$1bd,$1bd=$1bq.successor,$1bq);
var $1bq;
}
else{
$1bj=$1bl;
}
}
return $1bd;
};linkedList$.removeWhere.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'selecting',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Arguments$Callable:{t:'T',l:[{t:'i',l:['Element$LinkedList',{t:m$1.$_Object}]}]},Return$Callable:{t:m$1.$_Boolean}}},$rt:{t:m$1.$_Boolean},ps:[{nm:'element',mt:'prm',$t:{t:'i',l:['Element$LinkedList',{t:m$1.$_Object}]}}]}],$cont:LinkedList,pa:3,d:['ceylon.collection','LinkedList','$m','removeWhere']};};
linkedList$.prune=function(){
var linkedList$=this;
var $1br=linkedList$.$1dkeuw$18u;
var $1bs;
while(m$1.nn$(($1bs=linkedList$.$1dkeuw$18s))&&!m$1.nn$($1bs.element)){
var $1bt;
if(m$1.nn$(($1bt=$1bs.rest))){
linkedList$.$1dkeuw$18s=$1bt;
}
else{
linkedList$.$1dkeuw$18s=(linkedList$.$1dkeuw$18t=null);
}
($1bu=linkedList$.$1dkeuw$18u,linkedList$.$1dkeuw$18u=$1bu.predecessor,$1bu);
var $1bu;
}
var $1bv=linkedList$.$1dkeuw$18s;
var $1bw;
while(m$1.nn$(($1bw=$1bv))){
var $1bx=$1bw.rest;
var $1by;
if(m$1.nn$(($1by=$1bx))&&!m$1.nn$($1by.element)){
var $1bz;
if(m$1.nn$(($1bz=$1by.rest))){
($1bw.rest=$1bz);
}
else{
($1bw.rest=(linkedList$.$1dkeuw$18t=null));
}
($1c0=linkedList$.$1dkeuw$18u,linkedList$.$1dkeuw$18u=$1c0.predecessor,$1c0);
var $1c0;
}
else{
$1bv=$1bx;
}
}
return $1br.minus(linkedList$.$1dkeuw$18u);
};linkedList$.prune.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[],$cont:LinkedList,pa:3,d:['ceylon.collection','LinkedList','$m','prune']};};
linkedList$.findAndReplaceFirst=function($1c1,$1c2){
var linkedList$=this;
var $1c3=linkedList$.$1dkeuw$18s;
var $1c4;
while(m$1.nn$(($1c4=$1c3))){
var $1c5;
if(m$1.nn$(($1c5=$1c4.element))&&$1c1($1c5)){
($1c4.element=$1c2);
return $1c5;
}
$1c3=$1c4.rest;
}
return null;
};linkedList$.findAndReplaceFirst.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$LinkedList']},ps:[{nm:'selecting',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Arguments$Callable:{t:'T',l:[{t:'i',l:['Element$LinkedList',{t:m$1.$_Object}]}]},Return$Callable:{t:m$1.$_Boolean}}},$rt:{t:m$1.$_Boolean},ps:[{nm:'element',mt:'prm',$t:{t:'i',l:['Element$LinkedList',{t:m$1.$_Object}]}}]},{nm:'replacement',mt:'prm',$t:'Element$LinkedList'}],$cont:LinkedList,pa:3,d:['ceylon.collection','LinkedList','$m','findAndReplaceFirst']};};
linkedList$.findAndReplaceLast=function($1c6,$1c7){
var linkedList$=this;
var $1c8=null;
var $1c9=linkedList$.$1dkeuw$18s;
var $1ca;
while(m$1.nn$(($1ca=$1c9))){
var $1cb;
if(m$1.nn$(($1cb=$1ca.element))&&$1c6($1cb)){
$1c8=$1ca;
}
$1c9=$1ca.rest;
}
var $1cc;
if(m$1.nn$(($1cc=$1c8))){
var $1cd=$1cc.element;
($1cc.element=$1c7);
return $1cd;
}
else{
return null;
}
};linkedList$.findAndReplaceLast.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$LinkedList']},ps:[{nm:'selecting',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Arguments$Callable:{t:'T',l:[{t:'i',l:['Element$LinkedList',{t:m$1.$_Object}]}]},Return$Callable:{t:m$1.$_Boolean}}},$rt:{t:m$1.$_Boolean},ps:[{nm:'element',mt:'prm',$t:{t:'i',l:['Element$LinkedList',{t:m$1.$_Object}]}}]},{nm:'replacement',mt:'prm',$t:'Element$LinkedList'}],$cont:LinkedList,pa:3,d:['ceylon.collection','LinkedList','$m','findAndReplaceLast']};};
linkedList$.replaceWhere=function($1ce,$1cf){
var linkedList$=this;
var $1cg=(0);
var $1ch=linkedList$.$1dkeuw$18s;
var $1ci;
while(m$1.nn$(($1ci=$1ch))){
var $1cj;
if(m$1.nn$(($1cj=$1ci.element))&&$1ce($1cj)){
($1ci.element=$1cf);
($1ck=$1cg,$1cg=$1ck.successor,$1ck);
var $1ck;
}
$1ch=$1ci.rest;
}
return $1cg;
};linkedList$.replaceWhere.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'selecting',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Arguments$Callable:{t:'T',l:[{t:'i',l:['Element$LinkedList',{t:m$1.$_Object}]}]},Return$Callable:{t:m$1.$_Boolean}}},$rt:{t:m$1.$_Boolean},ps:[{nm:'element',mt:'prm',$t:{t:'i',l:['Element$LinkedList',{t:m$1.$_Object}]}}]},{nm:'replacement',mt:'prm',$t:'Element$LinkedList'}],$cont:LinkedList,pa:3,d:['ceylon.collection','LinkedList','$m','replaceWhere']};};
linkedList$.infill=function($1cl){
var linkedList$=this;
var $1cm=linkedList$.$1dkeuw$18s;
var $1cn;
while(m$1.nn$(($1cn=$1cm))){
if(!m$1.nn$($1cn.element)){
($1cn.element=$1cl);
}
$1cm=$1cn.rest;
}
};linkedList$.infill.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'replacement',mt:'prm',$t:'Element$LinkedList'}],$cont:LinkedList,pa:3,d:['ceylon.collection','LinkedList','$m','infill']};};
linkedList$.clear=function(){
var linkedList$=this;
linkedList$.$1dkeuw$18u=(0);
linkedList$.$1dkeuw$18s=(linkedList$.$1dkeuw$18t=null);
};linkedList$.clear.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[],$cont:LinkedList,pa:3,d:['ceylon.collection','LinkedList','$m','clear']};};
linkedList$.getFromFirst=function($1co){
var linkedList$=this;
var $1cp=linkedList$.$1dkeuw$18s;
var $1cq=(0);
var $1cr;
while(m$1.nn$(($1cr=$1cp))){
if((($1cs=$1cq,$1cq=$1cs.successor,$1cs)==$1co)){
return $1cr.element;
}
var $1cs;
$1cp=$1cr.rest;
}
return null;
};linkedList$.getFromFirst.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$LinkedList']},ps:[{nm:'index',mt:'prm',$t:{t:m$1.Integer}}],$cont:LinkedList,pa:3,d:['ceylon.collection','LinkedList','$m','getFromFirst']};};
linkedList$.spanFrom=function($1ct){
var linkedList$=this;
var $1cu=LinkedList(undefined,{Element$LinkedList:linkedList$.$$targs$$.Element$LinkedList});
var $1cv=linkedList$.$1dkeuw$18s;
var $1cw=(0);
var $1cx;
while(m$1.nn$(($1cx=$1cv))){
if(($1cw>=$1ct)){
$1cu.add($1cx.element);
}
($1cy=$1cw,$1cw=$1cy.successor,$1cy);
var $1cy;
$1cv=$1cx.rest;
}
return $1cu;
};linkedList$.spanFrom.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.List,a:{Element$List:'Element$LinkedList'}},ps:[{nm:'from',mt:'prm',$t:{t:m$1.Integer}}],$cont:LinkedList,pa:3,d:['ceylon.collection','LinkedList','$m','spanFrom']};};
linkedList$.spanTo=function($1cz){
var linkedList$=this;
var $1d0=LinkedList(undefined,{Element$LinkedList:linkedList$.$$targs$$.Element$LinkedList});
var $1d1=linkedList$.$1dkeuw$18s;
var $1d2=(0);
var $1d3;
while(m$1.nn$(($1d3=$1d1))){
if(($1d2>$1cz)){
break;
}
$1d0.add($1d3.element);
($1d4=$1d2,$1d2=$1d4.successor,$1d4);
var $1d4;
$1d1=$1d3.rest;
}
return $1d0;
};linkedList$.spanTo.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.List,a:{Element$List:'Element$LinkedList'}},ps:[{nm:'to',mt:'prm',$t:{t:m$1.Integer}}],$cont:LinkedList,pa:3,d:['ceylon.collection','LinkedList','$m','spanTo']};};
linkedList$.span=function($1d5,$1d6){
var linkedList$=this;
var $1d7=spanToMeasure($1d5,$1d6,linkedList$.$1dkeuw$18u),$1d8=$1d7.$_get(0),$1d9=$1d7.$_get(1),$1da=$1d7.$_get(2);
var $1db=LinkedList(linkedList$.skip($1d8).take($1d9),{Element$LinkedList:linkedList$.$$targs$$.Element$LinkedList});
return ($1dc=($1da?$1db.reversed:null),m$1.nn$($1dc)?$1dc:$1db);
var $1dc;
};linkedList$.span.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.List,a:{Element$List:'Element$LinkedList'}},ps:[{nm:'from',mt:'prm',$t:{t:m$1.Integer}},{nm:'to',mt:'prm',$t:{t:m$1.Integer}}],$cont:LinkedList,pa:3,d:['ceylon.collection','LinkedList','$m','span']};};
linkedList$.deleteSpan=function($1dd,$1de){
var linkedList$=this;
var $1df=spanToMeasure($1dd,$1de,linkedList$.$1dkeuw$18u),$1dg=$1df.$_get(0),$1dh=$1df.$_get(1),$1di=$1df.$_get(2);
if((($1dg<linkedList$.$1dkeuw$18u)&&($1dh>0))){
var $1dj=($1dg>0);
var $1dk=linkedList$.$1dkeuw$1dl($1dg.minus(1),linkedList$.$1dkeuw$18s);
var $1dm=$1dh.plus(($1dn=($1dj?1:null),m$1.nn$($1dn)?$1dn:(0)));
var $1dn;
var $1do=linkedList$.$1dkeuw$1dl($1dm,($1dp=$1dk,m$1.nn$($1dp)?$1dp:linkedList$.$1dkeuw$18s));
var $1dp;
if(!$1dj){
linkedList$.$1dkeuw$18s=($1dq=$1dk,m$1.nn$($1dq)?$1dq:$1do);
var $1dq;
}
var $1dr;
if(m$1.nn$(($1dr=$1dk))){
($1dr.rest=$1do);
}
if(($1dh>=linkedList$.$1dkeuw$18u)){
linkedList$.$1dkeuw$18t=null;
}
(linkedList$.$1dkeuw$18u=linkedList$.$1dkeuw$18u.minus($1dh));
}
};linkedList$.deleteSpan.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'from',mt:'prm',$t:{t:m$1.Integer}},{nm:'to',mt:'prm',$t:{t:m$1.Integer}}],$cont:LinkedList,pa:3,d:['ceylon.collection','LinkedList','$m','deleteSpan']};};
linkedList$.$1dkeuw$1dl=function($1ds,$1dt){
var linkedList$=this;
if(($1ds<0)){
return null;
}
var $1du=$1dt;
var $1dv;
if(m$1.nn$(($1dv=$1dt))&&($1ds>0)){
var $1dx=(1),$1dw=$1ds,$1dy=$1dx.compare($1dw),$1dz=$1dy===m$1.smaller()?'successor':'predecessor';for(var $1e0=m$1.eorl$($1dy);$1e0($1dw,$1dx);$1dx=$1dx[$1dz]){
$1du=($1e1=$1du,m$1.nn$($1e1)?$1e1.rest:null);
var $1e1;
}
}
return $1du;
};linkedList$.$1dkeuw$1dl.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:Cell,a:{Element$Cell:'Element$LinkedList'}}]},ps:[{nm:'cells',mt:'prm',$t:{t:m$1.Integer}},{nm:'start',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},{t:Cell,a:{Element$Cell:'Element$LinkedList'}}]}}],$cont:LinkedList,d:['ceylon.collection','LinkedList','$m','advanceBy$cg1mjm']};};
linkedList$.measure=function($1e2,$1e3){var linkedList$=this;
return linkedList$.span(($1e4=measureToSpan($1e2,$1e3),$1e4.$_get(0)),$1e4.$_get(1));
};linkedList$.deleteMeasure=function($1e5,$1e6){var linkedList$=this;
return linkedList$.deleteSpan(($1e7=measureToSpan($1e5,$1e6),$1e7.$_get(0)),$1e7.$_get(1));
};linkedList$.defines=function($1e8){var linkedList$=this;
return (($1e8>=0)&&($1e8<linkedList$.$1dkeuw$18u));
};linkedList$.contains=function($1e9){
var linkedList$=this;
var $1ea=linkedList$.$1dkeuw$18s;
var $1eb;
while(m$1.nn$(($1eb=$1ea))){
var $1ec;
if(m$1.nn$(($1ec=$1eb.element))){
if(m$1.$eq$($1ec,$1e9)){
return true;
}
}
$1ea=$1eb.rest;
}
return false;
};linkedList$.contains.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'element',mt:'prm',$t:{t:m$1.$_Object}}],$cont:LinkedList,pa:3,d:['ceylon.collection','LinkedList','$m','contains']};};
m$1.atr$(linkedList$,'size',function(){
var linkedList$=this;
return linkedList$.$1dkeuw$18u;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:LinkedList,pa:3,d:['ceylon.collection','LinkedList','$at','size']};});
linkedList$.count=function($1ed){
var linkedList$=this;
var $1ee=linkedList$.$1dkeuw$18s;
var $1ef=(0);
var $1eg;
while(m$1.nn$(($1eg=$1ee))){
if($1ed($1eg.element)){
($1eh=$1ef,$1ef=$1eh.successor,$1eh);
var $1eh;
}
$1ee=$1eg.rest;
}
return $1ef;
};linkedList$.count.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'selecting',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Arguments$Callable:{t:'T',l:['Element$LinkedList']},Return$Callable:{t:m$1.$_Boolean}}},$rt:{t:m$1.$_Boolean},ps:[{nm:'element',mt:'prm',$t:'Element$LinkedList'}]}],$cont:LinkedList,pa:3,d:['ceylon.collection','LinkedList','$m','count']};};
m$1.atr$(linkedList$,'lastIndex',function(){
var linkedList$=this;
return (!linkedList$.empty?linkedList$.$1dkeuw$18u.minus(1):null);
},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]},$cont:LinkedList,pa:3,d:['ceylon.collection','LinkedList','$at','lastIndex']};});
linkedList$.iterator=function(){var linkedList$=this;
return CellIterator(linkedList$.$1dkeuw$18s,{Element$CellIterator:linkedList$.$$targs$$.Element$LinkedList});
};linkedList$.clone=function(){var linkedList$=this;
return LinkedList$c_copy(linkedList$,{Element$LinkedList:linkedList$.$$targs$$.Element$LinkedList});
};
linkedList$.clone.$crtmm$=function(){return{mod:$CCMM$,$t:{t:LinkedList,a:{Element$LinkedList:'Element$LinkedList'}},ps:[],$cont:LinkedList,pa:3,d:['ceylon.collection','LinkedList','$m','clone']};};
linkedList$.each=function($1ei){
var linkedList$=this;
var $1ej=linkedList$.$1dkeuw$18s;
var $1ek;
while(m$1.nn$(($1ek=$1ej))){
$1ei($1ek.element);
$1ej=$1ek.rest;
}
};linkedList$.each.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'step',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Arguments$Callable:{t:'T',l:['Element$LinkedList']},Return$Callable:{t:m$1.Anything}}},$rt:{t:m$1.Anything},ps:[{nm:'element',mt:'prm',$t:'Element$LinkedList'}]}],$cont:LinkedList,pa:3,d:['ceylon.collection','LinkedList','$m','each']};};
linkedList$.find=function($1el){
var linkedList$=this;
var $1em=linkedList$.$1dkeuw$18s;
var $1en;
while(m$1.nn$(($1en=$1em))){
var $1eo=$1en.element;
var $1ep;
if(m$1.nn$(($1ep=$1eo))&&$1el($1ep)){
return $1ep;
}
$1em=$1en.rest;
}
return null;
};linkedList$.find.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$LinkedList']},ps:[{nm:'selecting',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Arguments$Callable:{t:'T',l:[{t:'i',l:['Element$LinkedList',{t:m$1.$_Object}]}]},Return$Callable:{t:m$1.$_Boolean}}},$rt:{t:m$1.$_Boolean},ps:[{nm:'elem',mt:'prm',$t:{t:'i',l:['Element$LinkedList',{t:m$1.$_Object}]}}]}],$cont:LinkedList,pa:3,d:['ceylon.collection','LinkedList','$m','find']};};
linkedList$.findLast=function($1eq){
var linkedList$=this;
var $1er=null;
var $1es=linkedList$.$1dkeuw$18s;
var $1et;
while(m$1.nn$(($1et=$1es))){
var $1eu=$1et.element;
var $1ev;
if(m$1.nn$(($1ev=$1eu))&&$1eq($1ev)){
$1er=$1ev;
}
$1es=$1et.rest;
}
return $1er;
};linkedList$.findLast.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$LinkedList']},ps:[{nm:'selecting',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Arguments$Callable:{t:'T',l:[{t:'i',l:['Element$LinkedList',{t:m$1.$_Object}]}]},Return$Callable:{t:m$1.$_Boolean}}},$rt:{t:m$1.$_Boolean},ps:[{nm:'elem',mt:'prm',$t:{t:'i',l:['Element$LinkedList',{t:m$1.$_Object}]}}]}],$cont:LinkedList,pa:3,d:['ceylon.collection','LinkedList','$m','findLast']};};
linkedList$.$_every=function($1ew){
var linkedList$=this;
var $1ex=linkedList$.$1dkeuw$18s;
var $1ey;
while(m$1.nn$(($1ey=$1ex))){
if(!$1ew($1ey.element)){
return false;
}
$1ex=$1ey.rest;
}
return true;
};linkedList$.$_every.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'selecting',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Arguments$Callable:{t:'T',l:['Element$LinkedList']},Return$Callable:{t:m$1.$_Boolean}}},$rt:{t:m$1.$_Boolean},ps:[{nm:'element',mt:'prm',$t:'Element$LinkedList'}]}],$cont:LinkedList,pa:3,d:['ceylon.collection','LinkedList','$m','every']};};
linkedList$.any=function($1ez){
var linkedList$=this;
var $1f0=linkedList$.$1dkeuw$18s;
var $1f1;
while(m$1.nn$(($1f1=$1f0))){
if($1ez($1f1.element)){
return true;
}
$1f0=$1f1.rest;
}
return false;
};linkedList$.any.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'selecting',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Arguments$Callable:{t:'T',l:['Element$LinkedList']},Return$Callable:{t:m$1.$_Boolean}}},$rt:{t:m$1.$_Boolean},ps:[{nm:'element',mt:'prm',$t:'Element$LinkedList'}]}],$cont:LinkedList,pa:3,d:['ceylon.collection','LinkedList','$m','any']};};
linkedList$.$_reduce=function($1f2,$z4x6x1$){
var linkedList$=this;
var $1f3;
if(m$1.nn$(($1f3=linkedList$.$1dkeuw$18s))){
var $1f4=$1f3.element;
var $1f5=$1f3.rest;
var $1f6;
while(m$1.nn$(($1f6=$1f5))){
$1f4=$1f2($1f4,$1f6.element);
$1f5=$1f6.rest;
}
return $1f4;
}
else{
return null;
}
};linkedList$.$_reduce.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:['Result$reduce','Element$LinkedList',{t:m$1.Null}]},ps:[{nm:'accumulating',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Arguments$Callable:{t:'T',l:[{t:'u',l:['Result$reduce','Element$LinkedList']},'Element$LinkedList']},Return$Callable:'Result$reduce'}},$rt:'Result$reduce',ps:[{nm:'partial',mt:'prm',$t:{t:'u',l:['Result$reduce','Element$LinkedList']}},{nm:'element',mt:'prm',$t:'Element$LinkedList'}]}],$cont:LinkedList,tp:{Result$reduce:{}},pa:3,d:['ceylon.collection','LinkedList','$m','reduce']};};
m$1.atr$(linkedList$,'hash',function(){
var linkedList$=this;
var $1f7=(17);
var $1f8=linkedList$.$1dkeuw$18s;
var $1f9;
while(m$1.nn$(($1f9=$1f8))){
var $1fa;
if(m$1.nn$(($1fa=$1f9.element))){
$1f7=$1f7.times(31).plus($1fa.hash);
}
else{
$1f7=$1f7.times(31);
}
$1f8=$1f9.rest;
}
return $1f7;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:LinkedList,pa:3,d:['ceylon.collection','LinkedList','$at','hash']};});linkedList$.equals=function($1fb){
var linkedList$=this;
var $1fc;
if(m$1.is$(($1fc=$1fb),{t:m$1.List,a:{Element$List:{t:m$1.Anything}}})&&(linkedList$.$1dkeuw$18u==$1fc.size)){
var $1fd=linkedList$.$1dkeuw$18s;
var $1fe=$1fc.iterator();
var $1ff;
while(m$1.nn$(($1ff=$1fd))){
var $1fg;
if(!m$1.is$(($1fg=$1fe.next()),{t:m$1.Finished})){
var $1fh=$1ff.element;
var $1fi;
if(m$1.nn$(($1fi=$1fg))){
var $1fj;
if(m$1.nn$(($1fj=$1fh))&&m$1.$eq$($1fj,$1fi)){
$1fd=$1ff.rest;
}
else{
return false;
}
}
else{
var $1fk;
if(m$1.nn$(($1fk=$1fh))){
return false;
}
else{
$1fd=$1ff.rest;
}
}
}
else{
return false;
}
}
return true;
}
return false;
};linkedList$.equals.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'that',mt:'prm',$t:{t:m$1.$_Object}}],$cont:LinkedList,pa:3,d:['ceylon.collection','LinkedList','$m','equals']};};
linkedList$.truncate=function($1fl){
var linkedList$=this;
m$1.asrt$((($1fl>=0)),"Assertion failed: \'size>=0\' at LinkedList.ceylon (838:15-838:23)",'838:8-838:24','LinkedList.ceylon');
if(($1fl==(0))){
linkedList$.$1dkeuw$18s=(linkedList$.$1dkeuw$18t=null);
linkedList$.$1dkeuw$18u=(0);
}
else{
var $1fm=(0);
var $1fn=linkedList$.$1dkeuw$18s;
var $1fo;
while((($1fm=$1fm.successor)<$1fl)&&m$1.nn$(($1fo=$1fn))){
$1fn=$1fo.rest;
}
var $1fp;
if(m$1.nn$(($1fp=$1fn))){
($1fp.rest=null);
linkedList$.$1dkeuw$18t=$1fp;
linkedList$.$1dkeuw$18u=$1fl;
}
}
};linkedList$.truncate.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'size',mt:'prm',$t:{t:m$1.Integer}}],$cont:LinkedList,pa:3,d:['ceylon.collection','LinkedList','$m','truncate']};};
linkedList$.firstIndexWhere=function($1fq){
var linkedList$=this;
var $1fr=(0);
var $1ft;for(var $1fs=linkedList$.iterator();($1ft=$1fs.next())!==m$1.finished();){
var $1fu;
if(m$1.nn$(($1fu=$1ft))&&$1fq($1fu)){
return $1fr;
}
($1fv=$1fr,$1fr=$1fv.successor,$1fv);
var $1fv;
}
return null;
};linkedList$.firstIndexWhere.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]},ps:[{nm:'selecting',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Arguments$Callable:{t:'T',l:[{t:'i',l:['Element$LinkedList',{t:m$1.$_Object}]}]},Return$Callable:{t:m$1.$_Boolean}}},$rt:{t:m$1.$_Boolean},ps:[{nm:'element',mt:'prm',$t:{t:'i',l:['Element$LinkedList',{t:m$1.$_Object}]}}]}],$cont:LinkedList,pa:3,d:['ceylon.collection','LinkedList','$m','firstIndexWhere']};};
linkedList$.lastIndexWhere=function($1fw){
var linkedList$=this;
var $1fx=(0);
var $1fy=null;
var $1g0;for(var $1fz=linkedList$.iterator();($1g0=$1fz.next())!==m$1.finished();){
var $1g1;
if(m$1.nn$(($1g1=$1g0))&&$1fw($1g1)){
$1fy=$1fx;
}
($1g2=$1fx,$1fx=$1g2.successor,$1g2);
var $1g2;
}
return $1fy;
};linkedList$.lastIndexWhere.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]},ps:[{nm:'selecting',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Arguments$Callable:{t:'T',l:[{t:'i',l:['Element$LinkedList',{t:m$1.$_Object}]}]},Return$Callable:{t:m$1.$_Boolean}}},$rt:{t:m$1.$_Boolean},ps:[{nm:'element',mt:'prm',$t:{t:'i',l:['Element$LinkedList',{t:m$1.$_Object}]}}]}],$cont:LinkedList,pa:3,d:['ceylon.collection','LinkedList','$m','lastIndexWhere']};};
linkedList$.collect=function($1g3,$ljywq3$){var linkedList$=this;
return m$1.tpl$([],m$1.for$(function(){
var $1g4=linkedList$.iterator(),$1g5=m$1.finished();
var n$1g5=function(){return $1g5=$1g4.next();}
return function(){
if(n$1g5()!==m$1.finished()){
var $1g6=$1g5,$1g7=$1g3($1g6);
return $1g7;
}
return m$1.finished();
}
},{Element$Iterable:$ljywq3$.Result$collect/*ORALE!Result inv pero Element var*/,Absent$Iterable:{t:m$1.Null}}));
};
linkedList$.collect.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Sequential,a:{Element$Sequential:'Result$collect'}},ps:[{nm:'collecting',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Arguments$Callable:{t:'T',l:['Element$LinkedList']},Return$Callable:'Result$collect'}},$rt:'Result$collect',ps:[{nm:'element',mt:'prm',$t:'Element$LinkedList'}]}],$cont:LinkedList,tp:{Result$collect:{}},pa:3,d:['ceylon.collection','LinkedList','$m','collect']};};
m$1.atr$(linkedList$,'first',function(){
var linkedList$=this;
return ($1g8=linkedList$.$1dkeuw$18s,m$1.nn$($1g8)?$1g8.element:null);
},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$LinkedList']},$cont:LinkedList,pa:3,d:['ceylon.collection','LinkedList','$at','first']};});
m$1.atr$(linkedList$,'last',function(){
var linkedList$=this;
return ($1g9=linkedList$.$1dkeuw$18t,m$1.nn$($1g9)?$1g9.element:null);
},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$LinkedList']},$cont:LinkedList,pa:3,d:['ceylon.collection','LinkedList','$at','last']};});
linkedList$.$_push=function($1ga){var linkedList$=this;
return linkedList$.insert(0,$1ga);
};linkedList$.$_pop=function(){var linkedList$=this;
return linkedList$.deleteFirst();
};m$1.atr$(linkedList$,'top',function(){
var linkedList$=this;
return linkedList$.first;
},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$LinkedList']},$cont:LinkedList,pa:3,d:['ceylon.collection','LinkedList','$at','top']};});
linkedList$.offer=function($1gb){var linkedList$=this;
return linkedList$.add($1gb);
};linkedList$.accept=function(){var linkedList$=this;
return linkedList$.deleteFirst();
};m$1.atr$(linkedList$,'back',function(){
var linkedList$=this;
return linkedList$.last;
},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$LinkedList']},$cont:LinkedList,pa:3,d:['ceylon.collection','LinkedList','$at','back']};});
m$1.atr$(linkedList$,'front',function(){
var linkedList$=this;
return linkedList$.first;
},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$LinkedList']},$cont:LinkedList,pa:3,d:['ceylon.collection','LinkedList','$at','front']};});
linkedList$.sequence=function(){var linkedList$=this;
return m$1.$_Array(linkedList$,{Element$Array:linkedList$.$$targs$$.Element$LinkedList}).sequence();
};
})(LinkedList.$$.prototype);
}
return LinkedList;
}
ex$.$init$LinkedList=$init$LinkedList;
$init$LinkedList();
LinkedList.inst$$=function($1gc){
var linkedList$=new LinkedList.$$;
m$1.set_type_args(linkedList$,{Element$LinkedList:$1gc.$$targs$$.Type$Class.a.Element$LinkedList});
m$1.set_type_args(linkedList$,{Element$MutableList:linkedList$.$$targs$$.Element$LinkedList,Element$List:linkedList$.$$targs$$.Element$LinkedList,Element$Collection:linkedList$.$$targs$$.Element$LinkedList,Element$Iterable:linkedList$.$$targs$$.Element$LinkedList,Absent$Iterable:{t:m$1.Null},Element$Category:{t:m$1.$_Object},Item$Correspondence:linkedList$.$$targs$$.Element$LinkedList,Key$Correspondence:{t:m$1.Integer},Subrange$Ranged:{t:m$1.List,a:{Element$List:linkedList$.$$targs$$.Element$LinkedList/*ORALE!Element inv pero Element var*/}},Index$Ranged:{t:m$1.Integer},Element$Ranged:linkedList$.$$targs$$.Element$LinkedList,Element$ListMutator:linkedList$.$$targs$$.Element$LinkedList,Element$IndexedCorrespondenceMutator:linkedList$.$$targs$$.Element$LinkedList,Item$CorrespondenceMutator:linkedList$.$$targs$$.Element$LinkedList,Element$Stack:linkedList$.$$targs$$.Element$LinkedList,Element$Queue:linkedList$.$$targs$$.Element$LinkedList});
return linkedList$;
};
LinkedList.ser$get$=function(ref,o){var n=ref.attribute.qualifiedName;if(n==='ceylon.collection::LinkedList.head')return o.$1dkeuw$18s_;
else if(n==='ceylon.collection::LinkedList.tail')return o.$1dkeuw$18t_;
else if(n==='ceylon.collection::LinkedList.length')return o.$1dkeuw$18u_;
else throw new TypeError('unknown attribute');
};
LinkedList.ser$set$=function(ref,o,i){if(!m$1.is$(ref,{t:m$1.Member$serialization}))throw m$1.AssertionError('unexpected reachable reference');var n=ref.attribute.qualifiedName;
if(n==='ceylon.collection::LinkedList.head')o.$1dkeuw$18s_=i;
else if(n==='ceylon.collection::LinkedList.tail')o.$1dkeuw$18t_=i;
else if(n==='ceylon.collection::LinkedList.length')o.$1dkeuw$18u_=i;
else throw new TypeError('unknown attribute');
};
LinkedList.ser$refs$=function(o){return [m$1.MemberImpl$impl(m$1.OpenValue$jsint(m$1.lmp$(ex$,'ceylon.collection'),o.$prop$get$1dkeuw$18s)),m$1.MemberImpl$impl(m$1.OpenValue$jsint(m$1.lmp$(ex$,'ceylon.collection'),o.$prop$get$1dkeuw$18t)),m$1.MemberImpl$impl(m$1.OpenValue$jsint(m$1.lmp$(ex$,'ceylon.collection'),o.$prop$get$1dkeuw$18u))];
};
var $1g8,$1g9;
function ArrayList$$c($$targs$$,arrayList$){
m$1.set_type_args(arrayList$,$$targs$$);
m$1.SearchableList({Element$SearchableList:$$targs$$.Element$ArrayList},arrayList$);
MutableList({Element$MutableList:$$targs$$.Element$ArrayList},arrayList$);
Stack({Element$Stack:$$targs$$.Element$ArrayList},arrayList$);
Queue({Element$Queue:$$targs$$.Element$ArrayList},arrayList$);
}
function ArrayList(){return ArrayList$c_$c$.apply(undefined,arguments);}
function ArrayList$c_$c$$$a($1gd,$1ge,$1gf,$$targs$$,arrayList$){
if($1gd===undefined){$1gd=(0);}
if($1ge===undefined){$1ge=(1.5);}
if($1gf===undefined){$1gf=m$1.empty();}
arrayList$.$1dkeuw$1gg_=$1gd;
m$1.atr$(arrayList$,'$1dkeuw$1gg',function(){return this.$1dkeuw$1gg_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:ArrayList,an:function(){return[m$1.doc("The initial size of the backing array.")];},d:['ceylon.collection','ArrayList','$at','initialCapacity$28ur5n']};});
arrayList$.$1dkeuw$1gh_=$1ge;
m$1.atr$(arrayList$,'$1dkeuw$1gh',function(){return this.$1dkeuw$1gh_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Float},$cont:ArrayList,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:ArrayList:$at:growthFactor$yahbl9')];},d:['ceylon.collection','ArrayList','$at','growthFactor$yahbl9']};});
arrayList$.$1dkeuw$1gi_=m$1.$_Array($1gf,{Element$Array:m$1.mut$([{t:m$1.Null},arrayList$.$$targs$$.Element$ArrayList])});
m$1.atr$(arrayList$,'$1dkeuw$1gi',function(){return this.$1dkeuw$1gi_;},function($1gj){return this.$1dkeuw$1gi_=$1gj;},function(){return{mod:$CCMM$,$t:{t:m$1.$_Array,a:{Element$Array:{t:'u',l:[{t:m$1.Null},'Element$ArrayList']}}},$cont:ArrayList,pa:1027,an:function(){return[m$1.doc("The underlying array.")];},d:['ceylon.collection','ArrayList','$at','array$i32poi']};});
return arrayList$;
};
function ArrayList$c_$c$($1gd,$1ge,$1gf,$$targs$$,arrayList$){
$init$ArrayList();
if(arrayList$===undefined)arrayList$=new ArrayList.$$;
if($1gd===undefined){$1gd=(0);}
if($1ge===undefined){$1ge=(1.5);}
if($1gf===undefined){$1gf=m$1.empty();}
ArrayList$$c($$targs$$,arrayList$);
ArrayList$c_$c$$$a($1gd,$1ge,$1gf,$$targs$$,arrayList$);
arrayList$.$1dkeuw$1gk_=arrayList$.$1dkeuw$1gi.size;
m$1.asrt$(((arrayList$.$1dkeuw$1gg>=0)),"initial capacity cannot be negative: \'initialCapacity >= 0\' at ArrayList.ceylon (84:11-84:32)",'83:4-84:33','ArrayList.ceylon');
m$1.asrt$(((arrayList$.$1dkeuw$1gg<=m$1.runtime().maxArraySize)),"initial capacity too large: \'initialCapacity <= runtime.maxArraySize\' at ArrayList.ceylon (87:11-87:51)",'86:4-87:52','ArrayList.ceylon');
m$1.asrt$((arrayList$.$1dkeuw$1gh.notSmallerThan(m$1.Float(1.0))),"growth factor must be at least 1.0: \'growthFactor >= 1.0\' at ArrayList.ceylon (90:11-90:31)",'89:4-90:32','ArrayList.ceylon');
m$1.atr$(arrayList$,'size',function(){
return arrayList$.$1dkeuw$1gk;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$at','size']};});
if((arrayList$.$1dkeuw$1gk<arrayList$.$1dkeuw$1gg)){
var $1gl=arrayList$.$1dkeuw$1gm(arrayList$.$1dkeuw$1gg);
arrayList$.$1dkeuw$1gi.copyTo($1gl,0,0,arrayList$.$1dkeuw$1gk);
arrayList$.$1dkeuw$1gi=$1gl;
}
arrayList$.getFromFirst=function($1gn){return (($1go=$1gn,$1go.notSmallerThan((0))&&$1go.smallerThan(arrayList$.$1dkeuw$1gk))?arrayList$.$1dkeuw$1gi.$_get($1gn):null);
};
arrayList$.iterator=function(){return function(){function $1gp($$targs$$){
var $1gp$=new $1gp.$$;$1gp$.outer$=arrayList$;
$1gp$.$$targs$$=$$targs$$;
m$1.Iterator({Element$Iterator:arrayList$.$$targs$$.Element$ArrayList/*ORALE!Element inv pero Element var*/},$1gp$);
$1gp$.$1dkeuw$1gq_=(0);
$1gp$.$prop$get$1dkeuw$1gq={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$1gp,pa:1024,d:['ceylon.collection','ArrayList','$at','index$sffdm1']};}};
$1gp$.$prop$get$1dkeuw$1gq.get=function(){return $1dkeuw$1gq};
return $1gp$;
};$1gp.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},$cont:ArrayList,sts:[{t:m$1.Iterator,a:{Element$Iterator:'Element$ArrayList'}}],d:['ceylon.collection','ArrayList']};};
function $init$$1gp(){
if($1gp.$$===undefined){
m$1.initTypeProto($1gp,'ceylon.collection::ArrayList.anonymous#0',m$1.Basic,m$1.Iterator);
(function($1gp$){
m$1.atr$($1gp$,'$1dkeuw$1gq',function(){return this.$1dkeuw$1gq_;},function($1gr){return this.$1dkeuw$1gq_=$1gr;},function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$1gp,pa:1024,d:['ceylon.collection','ArrayList','$at','index$sffdm1']};});
$1gp$.next=function(){
var $1gp$=this;
if(($1gp$.$1dkeuw$1gq<arrayList$.$1dkeuw$1gk)){
var $1gs;
if(m$1.nn$(($1gs=arrayList$.$1dkeuw$1gi.$_get(($1gt=$1gp$.$1dkeuw$1gq,$1gp$.$1dkeuw$1gq=$1gt.successor,$1gt))))){
return $1gs;
}
else{
var $1gu;
m$1.asrt$((m$1.is$(($1gu=null),arrayList$.$$targs$$.Element$ArrayList)),"Assertion failed: \'is Element null\' at ArrayList.ceylon (200:27-200:43)",'200:20-200:44','ArrayList.ceylon');
return $1gu;
}
var $1gt;
}
else{
return m$1.finished();
}
};$1gp$.next.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Finished},'Element$ArrayList']},ps:[],$cont:$1gp,pa:3,d:['ceylon.collection','ArrayList','$m','next']};};
})($1gp.$$.prototype);
}
return $1gp;
}
arrayList$.$init$$1gp=$init$$1gp;
$init$$1gp();
return $1gp();}();
};
arrayList$.measure=function($1gw,$1gx){return arrayList$.span(($1gy=measureToSpan($1gw,$1gx),$1gy.$_get(0)),$1gy.$_get(1));
};
arrayList$.deleteMeasure=function($1gz,$1h0){return arrayList$.deleteSpan(($1h1=measureToSpan($1gz,$1h0),$1h1.$_get(0)),$1h1.$_get(1));
};
arrayList$.spanFrom=function($1h2){return ($1h3=(($1h2>=arrayList$.$1dkeuw$1gk)?ArrayList(undefined,undefined,undefined,{Element$ArrayList:{t:m$1.Nothing}}):null),m$1.nn$($1h3)?$1h3:arrayList$.span($1h2,arrayList$.$1dkeuw$1gk.minus(1)));
var $1h3;
};
arrayList$.spanTo=function($1h4){return ($1h5=(($1h4<0)?ArrayList(undefined,undefined,undefined,{Element$ArrayList:{t:m$1.Nothing}}):null),m$1.nn$($1h5)?$1h5:arrayList$.span(0,$1h4));
var $1h5;
};
m$1.atr$(arrayList$,'first',function(){
return ((arrayList$.$1dkeuw$1gk>0)?arrayList$.$1dkeuw$1gi.$_get(0):null);
},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$ArrayList']},$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$at','first']};});
m$1.atr$(arrayList$,'lastIndex',function(){
return ((arrayList$.$1dkeuw$1gk>=1)?arrayList$.$1dkeuw$1gk.minus(1):null);
},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]},$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$at','lastIndex']};});
arrayList$.equals=function($1h6){return arrayList$.getT$all()['ceylon.language::List'].$$.prototype.equals.call(arrayList$,$1h6);
};
m$1.atr$(arrayList$,'hash',function(){
return m$1.attrGetter(arrayList$.getT$all()['ceylon.language::List'],'hash').call(this);
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$at','hash']};});
arrayList$.$_push=function($1h7){return arrayList$.add($1h7);
};
arrayList$.$_pop=function(){return arrayList$.deleteLast();
};
m$1.atr$(arrayList$,'top',function(){
return arrayList$.last;
},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$ArrayList']},$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$at','top']};});
arrayList$.offer=function($1h8){return arrayList$.add($1h8);
};
arrayList$.accept=function(){return arrayList$.deleteFirst();
};
m$1.atr$(arrayList$,'back',function(){
return arrayList$.last;
},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$ArrayList']},$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$at','back']};});
m$1.atr$(arrayList$,'front',function(){
return arrayList$.first;
},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$ArrayList']},$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$at','front']};});
arrayList$.find=function($1h9){return arrayList$.$1dkeuw$1gi.find($1h9);
};
arrayList$.findLast=function($1ha){return arrayList$.$1dkeuw$1gi.findLast($1ha);
};
arrayList$.occursAt=function($1hb,$1hc){return (($1hb<arrayList$.$1dkeuw$1gk)?arrayList$.$1dkeuw$1gi.occursAt($1hb,$1hc):false);
};
arrayList$.firstOccurrence=function($1hd,$1he,$1hf){if($1he===undefined){$1he=arrayList$.firstOccurrence$defs$from($1hd,$1he,$1hf);}
if($1hf===undefined){$1hf=arrayList$.firstOccurrence$defs$length($1hd,$1he,$1hf);}
return function(){var $1hg;
if(m$1.nn$(($1hg=($1hh=$1hd,$1hi=$1he,$1hj=smallest($1he.plus($1hf),arrayList$.size).minus($1he),($1hk=arrayList$.$1dkeuw$1gi,m$1.jsc$3($1hk,$1hk.firstOccurrence))($1hh,$1hi,$1hj)))))return $1hg;else return null}();
var $1hh,$1hi,$1hj,$1hk;
};
arrayList$.lastOccurrence=function($1hl,$1hm,$1hn){if($1hm===undefined){$1hm=arrayList$.lastOccurrence$defs$from($1hl,$1hm,$1hn);}
if($1hn===undefined){$1hn=arrayList$.lastOccurrence$defs$length($1hl,$1hm,$1hn);}
return function(){var $1ho;
if(m$1.nn$(($1ho=($1hp=$1hl,$1hq=largest($1hm,arrayList$.$1dkeuw$1gi.size.minus(arrayList$.size)),$1hr=$1hn,($1hs=arrayList$.$1dkeuw$1gi,m$1.jsc$3($1hs,$1hs.lastOccurrence))($1hp,$1hq,$1hr)))))return $1ho;else return null}();
var $1hp,$1hq,$1hr,$1hs;
};
arrayList$.occurs=function($1ht,$1hu,$1hv){if($1hu===undefined){$1hu=arrayList$.occurs$defs$from($1ht,$1hu,$1hv);}
if($1hv===undefined){$1hv=arrayList$.occurs$defs$length($1ht,$1hu,$1hv);}
return ($1hw=$1ht,$1hx=$1hu,$1hy=smallest($1hu.plus($1hv),arrayList$.size).minus($1hu),($1hz=arrayList$.$1dkeuw$1gi,m$1.jsc$3($1hz,$1hz.occurs))($1hw,$1hx,$1hy));
var $1hw,$1hx,$1hy,$1hz;
};
arrayList$.occurrences=function($1i0,$1i1,$1i2){if($1i1===undefined){$1i1=arrayList$.occurrences$defs$from($1i0,$1i1,$1i2);}
if($1i2===undefined){$1i2=arrayList$.occurrences$defs$length($1i0,$1i1,$1i2);}
return ($1i3=$1i0,$1i4=$1i1,$1i5=smallest($1i1.plus($1i2),arrayList$.size).minus($1i1),($1i6=arrayList$.$1dkeuw$1gi,m$1.jsc$3($1i6,$1i6.occurrences))($1i3,$1i4,$1i5));
var $1i3,$1i4,$1i5,$1i6;
};
return arrayList$;
};
ArrayList$c_$c$.$crtmm$=function(){return{mod:$CCMM$,ps:[{nm:'initialCapacity',mt:'prm',def:1,$t:{t:m$1.Integer},an:function(){return[m$1.doc("The initial size of the backing array.")];}},{nm:'growthFactor',mt:'prm',def:1,$t:{t:m$1.Float},an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:ArrayList:$cn:$def:$at:growthFactor$6olvvh')];}},{nm:'elements',mt:'prm',def:1,$t:{t:m$1.Iterable,a:{Element$Iterable:'Element$ArrayList',Absent$Iterable:{t:m$1.Null}}},an:function(){return[m$1.doc("The initial elements of the list.")];}}],$cont:ArrayList,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:ArrayList:$cn:$def')];},d:['ceylon.collection','ArrayList','$cn','$def']};};
ArrayList.ArrayList$c_$c$=ArrayList$c_$c$;
ex$.ArrayList$c_$c$=ArrayList$c_$c$;
function ArrayList$c_copy$$a($1i7,$1i8,$$targs$$,arrayList$){
if($1i8===undefined){$1i8=(1.5);}
arrayList$.$1dkeuw$1gg_=$1i7.size;
m$1.atr$(arrayList$,'$1dkeuw$1gg',function(){return this.$1dkeuw$1gg_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:ArrayList,an:function(){return[m$1.doc("The initial size of the backing array.")];},d:['ceylon.collection','ArrayList','$at','initialCapacity$28ur5n']};});
arrayList$.$1dkeuw$1gh_=$1i8;
m$1.atr$(arrayList$,'$1dkeuw$1gh',function(){return this.$1dkeuw$1gh_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Float},$cont:ArrayList,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:ArrayList:$at:growthFactor$yahbl9')];},d:['ceylon.collection','ArrayList','$at','growthFactor$yahbl9']};});
arrayList$.$1dkeuw$1gi_=$1i7.$1dkeuw$1gi.clone();
m$1.atr$(arrayList$,'$1dkeuw$1gi',function(){return this.$1dkeuw$1gi_;},function($1i9){return this.$1dkeuw$1gi_=$1i9;},function(){return{mod:$CCMM$,$t:{t:m$1.$_Array,a:{Element$Array:{t:'u',l:[{t:m$1.Null},'Element$ArrayList']}}},$cont:ArrayList,pa:1027,an:function(){return[m$1.doc("The underlying array.")];},d:['ceylon.collection','ArrayList','$at','array$i32poi']};});
return arrayList$;
};
function ArrayList$c_copy($1i7,$1i8,$$targs$$,arrayList$){
$init$ArrayList();
if(arrayList$===undefined)arrayList$=new ArrayList.$$;
if($1i8===undefined){$1i8=(1.5);}
ArrayList$$c($$targs$$,arrayList$);
ArrayList$c_copy$$a($1i7,$1i8,$$targs$$,arrayList$);
arrayList$.$1dkeuw$1gk_=arrayList$.$1dkeuw$1gi.size;
m$1.asrt$(((arrayList$.$1dkeuw$1gg>=0)),"initial capacity cannot be negative: \'initialCapacity >= 0\' at ArrayList.ceylon (84:11-84:32)",'83:4-84:33','ArrayList.ceylon');
m$1.asrt$(((arrayList$.$1dkeuw$1gg<=m$1.runtime().maxArraySize)),"initial capacity too large: \'initialCapacity <= runtime.maxArraySize\' at ArrayList.ceylon (87:11-87:51)",'86:4-87:52','ArrayList.ceylon');
m$1.asrt$((arrayList$.$1dkeuw$1gh.notSmallerThan(m$1.Float(1.0))),"growth factor must be at least 1.0: \'growthFactor >= 1.0\' at ArrayList.ceylon (90:11-90:31)",'89:4-90:32','ArrayList.ceylon');
m$1.atr$(arrayList$,'size',function(){
return arrayList$.$1dkeuw$1gk;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$at','size']};});
if((arrayList$.$1dkeuw$1gk<arrayList$.$1dkeuw$1gg)){
var $1gl=arrayList$.$1dkeuw$1gm(arrayList$.$1dkeuw$1gg);
arrayList$.$1dkeuw$1gi.copyTo($1gl,0,0,arrayList$.$1dkeuw$1gk);
arrayList$.$1dkeuw$1gi=$1gl;
}
arrayList$.getFromFirst=function($1gn){return (($1ia=$1gn,$1ia.notSmallerThan((0))&&$1ia.smallerThan(arrayList$.$1dkeuw$1gk))?arrayList$.$1dkeuw$1gi.$_get($1gn):null);
};
arrayList$.iterator=function(){return function(){function $1gp($$targs$$){
var $1gp$=new $1gp.$$;$1gp$.outer$=arrayList$;
$1gp$.$$targs$$=$$targs$$;
m$1.Iterator({Element$Iterator:arrayList$.$$targs$$.Element$ArrayList/*ORALE!Element inv pero Element var*/},$1gp$);
$1gp$.$1dkeuw$1gq_=(0);
$1gp$.$prop$get$1dkeuw$1gq.get=function(){return $1dkeuw$1gq};
return $1gp$;
};$1gp.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},$cont:ArrayList,sts:[{t:m$1.Iterator,a:{Element$Iterator:'Element$ArrayList'}}],d:['ceylon.collection','ArrayList']};};
function $init$$1gp(){
if($1gp.$$===undefined){
m$1.initTypeProto($1gp,'ceylon.collection::ArrayList.anonymous#0',m$1.Basic,m$1.Iterator);
(function($1gp$){
m$1.atr$($1gp$,'$1dkeuw$1gq',function(){return this.$1dkeuw$1gq_;},function($1ib){return this.$1dkeuw$1gq_=$1ib;},function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$1gp,pa:1024,d:['ceylon.collection','ArrayList','$at','index$sffdm1']};});
$1gp$.next=function(){
var $1gp$=this;
if(($1gp$.$1dkeuw$1gq<arrayList$.$1dkeuw$1gk)){
var $1gs;
if(m$1.nn$(($1gs=arrayList$.$1dkeuw$1gi.$_get(($1ic=$1gp$.$1dkeuw$1gq,$1gp$.$1dkeuw$1gq=$1ic.successor,$1ic))))){
return $1gs;
}
else{
var $1gu;
m$1.asrt$((m$1.is$(($1gu=null),arrayList$.$$targs$$.Element$ArrayList)),"Assertion failed: \'is Element null\' at ArrayList.ceylon (200:27-200:43)",'200:20-200:44','ArrayList.ceylon');
return $1gu;
}
var $1ic;
}
else{
return m$1.finished();
}
};$1gp$.next.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Finished},'Element$ArrayList']},ps:[],$cont:$1gp,pa:3,d:['ceylon.collection','ArrayList','$m','next']};};
})($1gp.$$.prototype);
}
return $1gp;
}
arrayList$.$init$$1gp=$init$$1gp;
$init$$1gp();
return $1gp();}();
};
arrayList$.measure=function($1gw,$1gx){return arrayList$.span(($1ie=measureToSpan($1gw,$1gx),$1ie.$_get(0)),$1ie.$_get(1));
};
arrayList$.deleteMeasure=function($1gz,$1h0){return arrayList$.deleteSpan(($1if=measureToSpan($1gz,$1h0),$1if.$_get(0)),$1if.$_get(1));
};
arrayList$.spanFrom=function($1h2){return ($1ig=(($1h2>=arrayList$.$1dkeuw$1gk)?ArrayList(undefined,undefined,undefined,{Element$ArrayList:{t:m$1.Nothing}}):null),m$1.nn$($1ig)?$1ig:arrayList$.span($1h2,arrayList$.$1dkeuw$1gk.minus(1)));
var $1ig;
};
arrayList$.spanTo=function($1h4){return ($1ih=(($1h4<0)?ArrayList(undefined,undefined,undefined,{Element$ArrayList:{t:m$1.Nothing}}):null),m$1.nn$($1ih)?$1ih:arrayList$.span(0,$1h4));
var $1ih;
};
m$1.atr$(arrayList$,'first',function(){
return ((arrayList$.$1dkeuw$1gk>0)?arrayList$.$1dkeuw$1gi.$_get(0):null);
},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$ArrayList']},$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$at','first']};});
m$1.atr$(arrayList$,'lastIndex',function(){
return ((arrayList$.$1dkeuw$1gk>=1)?arrayList$.$1dkeuw$1gk.minus(1):null);
},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]},$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$at','lastIndex']};});
arrayList$.equals=function($1h6){return arrayList$.getT$all()['ceylon.language::List'].$$.prototype.equals.call(arrayList$,$1h6);
};
m$1.atr$(arrayList$,'hash',function(){
return m$1.attrGetter(arrayList$.getT$all()['ceylon.language::List'],'hash').call(this);
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$at','hash']};});
arrayList$.$_push=function($1h7){return arrayList$.add($1h7);
};
arrayList$.$_pop=function(){return arrayList$.deleteLast();
};
m$1.atr$(arrayList$,'top',function(){
return arrayList$.last;
},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$ArrayList']},$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$at','top']};});
arrayList$.offer=function($1h8){return arrayList$.add($1h8);
};
arrayList$.accept=function(){return arrayList$.deleteFirst();
};
m$1.atr$(arrayList$,'back',function(){
return arrayList$.last;
},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$ArrayList']},$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$at','back']};});
m$1.atr$(arrayList$,'front',function(){
return arrayList$.first;
},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$ArrayList']},$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$at','front']};});
arrayList$.find=function($1h9){return arrayList$.$1dkeuw$1gi.find($1h9);
};
arrayList$.findLast=function($1ha){return arrayList$.$1dkeuw$1gi.findLast($1ha);
};
arrayList$.occursAt=function($1hb,$1hc){return (($1hb<arrayList$.$1dkeuw$1gk)?arrayList$.$1dkeuw$1gi.occursAt($1hb,$1hc):false);
};
arrayList$.firstOccurrence=function($1hd,$1he,$1hf){if($1he===undefined){$1he=arrayList$.firstOccurrence$defs$from($1hd,$1he,$1hf);}
if($1hf===undefined){$1hf=arrayList$.firstOccurrence$defs$length($1hd,$1he,$1hf);}
return function(){var $1hg;
if(m$1.nn$(($1hg=($1ii=$1hd,$1ij=$1he,$1ik=smallest($1he.plus($1hf),arrayList$.size).minus($1he),($1il=arrayList$.$1dkeuw$1gi,m$1.jsc$3($1il,$1il.firstOccurrence))($1ii,$1ij,$1ik)))))return $1hg;else return null}();
var $1ii,$1ij,$1ik,$1il;
};
arrayList$.lastOccurrence=function($1hl,$1hm,$1hn){if($1hm===undefined){$1hm=arrayList$.lastOccurrence$defs$from($1hl,$1hm,$1hn);}
if($1hn===undefined){$1hn=arrayList$.lastOccurrence$defs$length($1hl,$1hm,$1hn);}
return function(){var $1ho;
if(m$1.nn$(($1ho=($1im=$1hl,$1in=largest($1hm,arrayList$.$1dkeuw$1gi.size.minus(arrayList$.size)),$1io=$1hn,($1ip=arrayList$.$1dkeuw$1gi,m$1.jsc$3($1ip,$1ip.lastOccurrence))($1im,$1in,$1io)))))return $1ho;else return null}();
var $1im,$1in,$1io,$1ip;
};
arrayList$.occurs=function($1ht,$1hu,$1hv){if($1hu===undefined){$1hu=arrayList$.occurs$defs$from($1ht,$1hu,$1hv);}
if($1hv===undefined){$1hv=arrayList$.occurs$defs$length($1ht,$1hu,$1hv);}
return ($1iq=$1ht,$1ir=$1hu,$1is=smallest($1hu.plus($1hv),arrayList$.size).minus($1hu),($1it=arrayList$.$1dkeuw$1gi,m$1.jsc$3($1it,$1it.occurs))($1iq,$1ir,$1is));
var $1iq,$1ir,$1is,$1it;
};
arrayList$.occurrences=function($1i0,$1i1,$1i2){if($1i1===undefined){$1i1=arrayList$.occurrences$defs$from($1i0,$1i1,$1i2);}
if($1i2===undefined){$1i2=arrayList$.occurrences$defs$length($1i0,$1i1,$1i2);}
return ($1iu=$1i0,$1iv=$1i1,$1iw=smallest($1i1.plus($1i2),arrayList$.size).minus($1i1),($1ix=arrayList$.$1dkeuw$1gi,m$1.jsc$3($1ix,$1ix.occurrences))($1iu,$1iv,$1iw));
var $1iu,$1iv,$1iw,$1ix;
};
return arrayList$;
};
ArrayList$c_copy.$crtmm$=function(){return{mod:$CCMM$,ps:[{nm:'arrayList',mt:'prm',$t:{t:ArrayList,a:{Element$ArrayList:'Element$ArrayList'}},an:function(){return[m$1.doc("The `ArrayList` to copy.")];}},{nm:'growthFactor',mt:'prm',def:1,$t:{t:m$1.Float},an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:ArrayList:$cn:copy:$at:growthFactor$o4kg6')];}}],$cont:ArrayList,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:ArrayList:$cn:copy')];},d:['ceylon.collection','ArrayList','$cn','copy']};};
ArrayList.ArrayList$c_copy=ArrayList$c_copy;
ex$.ArrayList$c_copy=ArrayList$c_copy;
function ArrayList$c_ofSize$$a($1iy,$1iz,$1j0,$$targs$$,arrayList$){
if($1j0===undefined){$1j0=(1.5);}
arrayList$.$1dkeuw$1gg_=($1j1=(($1iy<0)?0:null),m$1.nn$($1j1)?$1j1:$1iy);
m$1.atr$(arrayList$,'$1dkeuw$1gg',function(){return this.$1dkeuw$1gg_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:ArrayList,an:function(){return[m$1.doc("The initial size of the backing array.")];},d:['ceylon.collection','ArrayList','$at','initialCapacity$28ur5n']};});
var $1j1;
arrayList$.$1dkeuw$1gh_=$1j0;
m$1.atr$(arrayList$,'$1dkeuw$1gh',function(){return this.$1dkeuw$1gh_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Float},$cont:ArrayList,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:ArrayList:$at:growthFactor$yahbl9')];},d:['ceylon.collection','ArrayList','$at','growthFactor$yahbl9']};});
arrayList$.$1dkeuw$1gi_=m$1.$_Array$c_ofSize($1iy,$1iz,{Element$Array:m$1.mut$([{t:m$1.Null},arrayList$.$$targs$$.Element$ArrayList])});
m$1.atr$(arrayList$,'$1dkeuw$1gi',function(){return this.$1dkeuw$1gi_;},function($1j2){return this.$1dkeuw$1gi_=$1j2;},function(){return{mod:$CCMM$,$t:{t:m$1.$_Array,a:{Element$Array:{t:'u',l:[{t:m$1.Null},'Element$ArrayList']}}},$cont:ArrayList,pa:1027,an:function(){return[m$1.doc("The underlying array.")];},d:['ceylon.collection','ArrayList','$at','array$i32poi']};});
return arrayList$;
};
function ArrayList$c_ofSize($1iy,$1iz,$1j0,$$targs$$,arrayList$){
$init$ArrayList();
if(arrayList$===undefined)arrayList$=new ArrayList.$$;
if($1j0===undefined){$1j0=(1.5);}
ArrayList$$c($$targs$$,arrayList$);
ArrayList$c_ofSize$$a($1iy,$1iz,$1j0,$$targs$$,arrayList$);
arrayList$.$1dkeuw$1gk_=arrayList$.$1dkeuw$1gi.size;
m$1.asrt$(((arrayList$.$1dkeuw$1gg>=0)),"initial capacity cannot be negative: \'initialCapacity >= 0\' at ArrayList.ceylon (84:11-84:32)",'83:4-84:33','ArrayList.ceylon');
m$1.asrt$(((arrayList$.$1dkeuw$1gg<=m$1.runtime().maxArraySize)),"initial capacity too large: \'initialCapacity <= runtime.maxArraySize\' at ArrayList.ceylon (87:11-87:51)",'86:4-87:52','ArrayList.ceylon');
m$1.asrt$((arrayList$.$1dkeuw$1gh.notSmallerThan(m$1.Float(1.0))),"growth factor must be at least 1.0: \'growthFactor >= 1.0\' at ArrayList.ceylon (90:11-90:31)",'89:4-90:32','ArrayList.ceylon');
m$1.atr$(arrayList$,'size',function(){
return arrayList$.$1dkeuw$1gk;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$at','size']};});
if((arrayList$.$1dkeuw$1gk<arrayList$.$1dkeuw$1gg)){
var $1gl=arrayList$.$1dkeuw$1gm(arrayList$.$1dkeuw$1gg);
arrayList$.$1dkeuw$1gi.copyTo($1gl,0,0,arrayList$.$1dkeuw$1gk);
arrayList$.$1dkeuw$1gi=$1gl;
}
arrayList$.getFromFirst=function($1gn){return (($1j3=$1gn,$1j3.notSmallerThan((0))&&$1j3.smallerThan(arrayList$.$1dkeuw$1gk))?arrayList$.$1dkeuw$1gi.$_get($1gn):null);
};
arrayList$.iterator=function(){return function(){function $1gp($$targs$$){
var $1gp$=new $1gp.$$;$1gp$.outer$=arrayList$;
$1gp$.$$targs$$=$$targs$$;
m$1.Iterator({Element$Iterator:arrayList$.$$targs$$.Element$ArrayList/*ORALE!Element inv pero Element var*/},$1gp$);
$1gp$.$1dkeuw$1gq_=(0);
$1gp$.$prop$get$1dkeuw$1gq.get=function(){return $1dkeuw$1gq};
return $1gp$;
};$1gp.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},$cont:ArrayList,sts:[{t:m$1.Iterator,a:{Element$Iterator:'Element$ArrayList'}}],d:['ceylon.collection','ArrayList']};};
function $init$$1gp(){
if($1gp.$$===undefined){
m$1.initTypeProto($1gp,'ceylon.collection::ArrayList.anonymous#0',m$1.Basic,m$1.Iterator);
(function($1gp$){
m$1.atr$($1gp$,'$1dkeuw$1gq',function(){return this.$1dkeuw$1gq_;},function($1j4){return this.$1dkeuw$1gq_=$1j4;},function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$1gp,pa:1024,d:['ceylon.collection','ArrayList','$at','index$sffdm1']};});
$1gp$.next=function(){
var $1gp$=this;
if(($1gp$.$1dkeuw$1gq<arrayList$.$1dkeuw$1gk)){
var $1gs;
if(m$1.nn$(($1gs=arrayList$.$1dkeuw$1gi.$_get(($1j5=$1gp$.$1dkeuw$1gq,$1gp$.$1dkeuw$1gq=$1j5.successor,$1j5))))){
return $1gs;
}
else{
var $1gu;
m$1.asrt$((m$1.is$(($1gu=null),arrayList$.$$targs$$.Element$ArrayList)),"Assertion failed: \'is Element null\' at ArrayList.ceylon (200:27-200:43)",'200:20-200:44','ArrayList.ceylon');
return $1gu;
}
var $1j5;
}
else{
return m$1.finished();
}
};$1gp$.next.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Finished},'Element$ArrayList']},ps:[],$cont:$1gp,pa:3,d:['ceylon.collection','ArrayList','$m','next']};};
})($1gp.$$.prototype);
}
return $1gp;
}
arrayList$.$init$$1gp=$init$$1gp;
$init$$1gp();
return $1gp();}();
};
arrayList$.measure=function($1gw,$1gx){return arrayList$.span(($1j7=measureToSpan($1gw,$1gx),$1j7.$_get(0)),$1j7.$_get(1));
};
arrayList$.deleteMeasure=function($1gz,$1h0){return arrayList$.deleteSpan(($1j8=measureToSpan($1gz,$1h0),$1j8.$_get(0)),$1j8.$_get(1));
};
arrayList$.spanFrom=function($1h2){return ($1j9=(($1h2>=arrayList$.$1dkeuw$1gk)?ArrayList(undefined,undefined,undefined,{Element$ArrayList:{t:m$1.Nothing}}):null),m$1.nn$($1j9)?$1j9:arrayList$.span($1h2,arrayList$.$1dkeuw$1gk.minus(1)));
var $1j9;
};
arrayList$.spanTo=function($1h4){return ($1ja=(($1h4<0)?ArrayList(undefined,undefined,undefined,{Element$ArrayList:{t:m$1.Nothing}}):null),m$1.nn$($1ja)?$1ja:arrayList$.span(0,$1h4));
var $1ja;
};
m$1.atr$(arrayList$,'first',function(){
return ((arrayList$.$1dkeuw$1gk>0)?arrayList$.$1dkeuw$1gi.$_get(0):null);
},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$ArrayList']},$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$at','first']};});
m$1.atr$(arrayList$,'lastIndex',function(){
return ((arrayList$.$1dkeuw$1gk>=1)?arrayList$.$1dkeuw$1gk.minus(1):null);
},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]},$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$at','lastIndex']};});
arrayList$.equals=function($1h6){return arrayList$.getT$all()['ceylon.language::List'].$$.prototype.equals.call(arrayList$,$1h6);
};
m$1.atr$(arrayList$,'hash',function(){
return m$1.attrGetter(arrayList$.getT$all()['ceylon.language::List'],'hash').call(this);
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$at','hash']};});
arrayList$.$_push=function($1h7){return arrayList$.add($1h7);
};
arrayList$.$_pop=function(){return arrayList$.deleteLast();
};
m$1.atr$(arrayList$,'top',function(){
return arrayList$.last;
},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$ArrayList']},$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$at','top']};});
arrayList$.offer=function($1h8){return arrayList$.add($1h8);
};
arrayList$.accept=function(){return arrayList$.deleteFirst();
};
m$1.atr$(arrayList$,'back',function(){
return arrayList$.last;
},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$ArrayList']},$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$at','back']};});
m$1.atr$(arrayList$,'front',function(){
return arrayList$.first;
},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$ArrayList']},$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$at','front']};});
arrayList$.find=function($1h9){return arrayList$.$1dkeuw$1gi.find($1h9);
};
arrayList$.findLast=function($1ha){return arrayList$.$1dkeuw$1gi.findLast($1ha);
};
arrayList$.occursAt=function($1hb,$1hc){return (($1hb<arrayList$.$1dkeuw$1gk)?arrayList$.$1dkeuw$1gi.occursAt($1hb,$1hc):false);
};
arrayList$.firstOccurrence=function($1hd,$1he,$1hf){if($1he===undefined){$1he=arrayList$.firstOccurrence$defs$from($1hd,$1he,$1hf);}
if($1hf===undefined){$1hf=arrayList$.firstOccurrence$defs$length($1hd,$1he,$1hf);}
return function(){var $1hg;
if(m$1.nn$(($1hg=($1jb=$1hd,$1jc=$1he,$1jd=smallest($1he.plus($1hf),arrayList$.size).minus($1he),($1je=arrayList$.$1dkeuw$1gi,m$1.jsc$3($1je,$1je.firstOccurrence))($1jb,$1jc,$1jd)))))return $1hg;else return null}();
var $1jb,$1jc,$1jd,$1je;
};
arrayList$.lastOccurrence=function($1hl,$1hm,$1hn){if($1hm===undefined){$1hm=arrayList$.lastOccurrence$defs$from($1hl,$1hm,$1hn);}
if($1hn===undefined){$1hn=arrayList$.lastOccurrence$defs$length($1hl,$1hm,$1hn);}
return function(){var $1ho;
if(m$1.nn$(($1ho=($1jf=$1hl,$1jg=largest($1hm,arrayList$.$1dkeuw$1gi.size.minus(arrayList$.size)),$1jh=$1hn,($1ji=arrayList$.$1dkeuw$1gi,m$1.jsc$3($1ji,$1ji.lastOccurrence))($1jf,$1jg,$1jh)))))return $1ho;else return null}();
var $1jf,$1jg,$1jh,$1ji;
};
arrayList$.occurs=function($1ht,$1hu,$1hv){if($1hu===undefined){$1hu=arrayList$.occurs$defs$from($1ht,$1hu,$1hv);}
if($1hv===undefined){$1hv=arrayList$.occurs$defs$length($1ht,$1hu,$1hv);}
return ($1jj=$1ht,$1jk=$1hu,$1jl=smallest($1hu.plus($1hv),arrayList$.size).minus($1hu),($1jm=arrayList$.$1dkeuw$1gi,m$1.jsc$3($1jm,$1jm.occurs))($1jj,$1jk,$1jl));
var $1jj,$1jk,$1jl,$1jm;
};
arrayList$.occurrences=function($1i0,$1i1,$1i2){if($1i1===undefined){$1i1=arrayList$.occurrences$defs$from($1i0,$1i1,$1i2);}
if($1i2===undefined){$1i2=arrayList$.occurrences$defs$length($1i0,$1i1,$1i2);}
return ($1jn=$1i0,$1jo=$1i1,$1jp=smallest($1i1.plus($1i2),arrayList$.size).minus($1i1),($1jq=arrayList$.$1dkeuw$1gi,m$1.jsc$3($1jq,$1jq.occurrences))($1jn,$1jo,$1jp));
var $1jn,$1jo,$1jp,$1jq;
};
return arrayList$;
};
ArrayList$c_ofSize.$crtmm$=function(){return{mod:$CCMM$,ps:[{nm:'size',mt:'prm',$t:{t:m$1.Integer},an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:ArrayList:$cn:ofSize:$at:size$g4dtg8')];}},{nm:'element',mt:'prm',$t:'Element$ArrayList',an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:ArrayList:$cn:ofSize:$at:element$qjcx79')];}},{nm:'growthFactor',mt:'prm',def:1,$t:{t:m$1.Float},an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:ArrayList:$cn:ofSize:$at:growthFactor$6i6pjp')];}}],$cont:ArrayList,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:ArrayList:$cn:ofSize')];},d:['ceylon.collection','ArrayList','$cn','ofSize']};};
ArrayList.ArrayList$c_ofSize=ArrayList$c_ofSize;
ex$.ArrayList$c_ofSize=ArrayList$c_ofSize;
ArrayList.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'initialCapacity',mt:'prm',def:1,$t:{t:m$1.Integer},an:function(){return[m$1.doc("The initial size of the backing array.")];}},{nm:'growthFactor',mt:'prm',def:1,$t:{t:m$1.Float},an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:ArrayList:$cn:$def:$at:growthFactor$6olvvh')];}},{nm:'elements',mt:'prm',def:1,$t:{t:m$1.Iterable,a:{Element$Iterable:'Element$ArrayList',Absent$Iterable:{t:m$1.Null}}},an:function(){return[m$1.doc("The initial elements of the list.")];}}],tp:{Element$ArrayList:{}},sts:[{t:MutableList,a:{Element$MutableList:'Element$ArrayList'}},{t:m$1.SearchableList,a:{Element$SearchableList:'Element$ArrayList'}},{t:Stack,a:{Element$Stack:'Element$ArrayList'}},{t:Queue,a:{Element$Queue:'Element$ArrayList'}}],pa:2049,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:ArrayList'),m$1.by(m$1.$arr$sa$(["Gavin King"],{t:m$1.$_String}))];},d:['ceylon.collection','ArrayList']};};
ex$.ArrayList=ArrayList;
function $init$ArrayList(){
if(ArrayList.$$===undefined){
m$1.initTypeProto(ArrayList,'ceylon.collection::ArrayList',m$1.Basic,m$1.SearchableList,$init$MutableList(),$init$Stack(),$init$Queue());
(function(arrayList$){
m$1.atr$(arrayList$,'$1dkeuw$1gg',function(){return this.$1dkeuw$1gg_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:ArrayList,an:function(){return[m$1.doc("The initial size of the backing array.")];},d:['ceylon.collection','ArrayList','$at','initialCapacity$28ur5n']};});
m$1.atr$(arrayList$,'$1dkeuw$1gh',function(){return this.$1dkeuw$1gh_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Float},$cont:ArrayList,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:ArrayList:$at:growthFactor$yahbl9')];},d:['ceylon.collection','ArrayList','$at','growthFactor$yahbl9']};});
m$1.atr$(arrayList$,'$1dkeuw$1gi',function(){return this.$1dkeuw$1gi_;},function($1jr){return this.$1dkeuw$1gi_=$1jr;},function(){return{mod:$CCMM$,$t:{t:m$1.$_Array,a:{Element$Array:{t:'u',l:[{t:m$1.Null},'Element$ArrayList']}}},$cont:ArrayList,pa:1027,an:function(){return[m$1.doc("The underlying array.")];},d:['ceylon.collection','ArrayList','$at','array$i32poi']};});
m$1.atr$(arrayList$,'$1dkeuw$1gk',function(){return this.$1dkeuw$1gk_;},function($1js){return this.$1dkeuw$1gk_=$1js;},function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:ArrayList,pa:1027,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:ArrayList:$at:length$u7by4j')];},d:['ceylon.collection','ArrayList','$at','length$u7by4j']};});
arrayList$.$1dkeuw$1gm=function($1jt){var arrayList$=this;
return m$1.$_Array$c_ofSize($1jt,null,{Element$Array:m$1.mut$([{t:m$1.Null},arrayList$.$$targs$$.Element$ArrayList])});
};
arrayList$.$1dkeuw$1gm.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Array,a:{Element$Array:{t:'u',l:[{t:m$1.Null},'Element$ArrayList']}}},ps:[{nm:'capacity',mt:'prm',$t:{t:m$1.Integer}}],$cont:ArrayList,d:['ceylon.collection','ArrayList','$m','store$4f5qdi']};};
m$1.atr$(arrayList$,'size',function(){
var arrayList$=this;
return arrayList$.$1dkeuw$1gk;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$at','size']};});
arrayList$.$1dkeuw$1ju=function($1jv){
var arrayList$=this;
var $1jw=arrayList$.$1dkeuw$1gk.plus($1jv);
var $1jx=m$1.runtime().maxArraySize;
if(($1jw>$1jx)){
throw m$1.wrapexc(m$1.OverflowException(),'107:12-107:37','ceylon/collection/ArrayList.ceylon');
}
if(($1jw>arrayList$.$1dkeuw$1gi.size)){
var $1jy=$1jw.times(arrayList$.$1dkeuw$1gh).integer;
var $1jz=($1k0=((($1jy<$1jw)||($1jy>$1jx))?$1jw:null),m$1.nn$($1k0)?$1k0:$1jy);
var $1k0;
var $1k1=arrayList$.$1dkeuw$1gm($1jz);
arrayList$.$1dkeuw$1gi.copyTo($1k1);
arrayList$.$1dkeuw$1gi=$1k1;
}
};arrayList$.$1dkeuw$1ju.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'increment',mt:'prm',$t:{t:m$1.Integer}}],$cont:ArrayList,d:['ceylon.collection','ArrayList','$m','grow$67gtuw']};};
arrayList$.add=function($1k2){
var arrayList$=this;
arrayList$.$1dkeuw$1ju(1);
($1k3=$1k2,arrayList$.$1dkeuw$1gi.set(($1k4=arrayList$.$1dkeuw$1gk,arrayList$.$1dkeuw$1gk=$1k4.successor,$1k4),$1k3), $1k3);
var $1k3,$1k4;
};arrayList$.add.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'element',mt:'prm',$t:'Element$ArrayList'}],$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$m','add']};};
arrayList$.addAll=function($1k5){
var arrayList$=this;
var $1k6=$1k5.sequence();
arrayList$.$1dkeuw$1ju($1k6.size);
var $1k8;for(var $1k7=$1k6.iterator();($1k8=$1k7.next())!==m$1.finished();){
($1k9=$1k8,arrayList$.$1dkeuw$1gi.set(($1ka=arrayList$.$1dkeuw$1gk,arrayList$.$1dkeuw$1gk=$1ka.successor,$1ka),$1k9), $1k9);
var $1k9,$1ka;
}
};arrayList$.addAll.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'elements',mt:'prm',$t:{t:m$1.Iterable,a:{Element$Iterable:'Element$ArrayList',Absent$Iterable:{t:m$1.Null}}}}],$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$m','addAll']};};
arrayList$.swap=function($1kb,$1kc){
var arrayList$=this;
m$1.asrt$((($1kd=$1kb,$1kd.notSmallerThan((0))&&$1kd.smallerThan(arrayList$.$1dkeuw$1gk))&&($1ke=$1kc,$1ke.notSmallerThan((0))&&$1ke.smallerThan(arrayList$.$1dkeuw$1gk))),"index may not be negative or greater than the\nlast index in the list: \'0<=i<length, 0<=j<length\' at ArrayList.ceylon (142:15-142:40)",'140:8-142:41','ArrayList.ceylon');
arrayList$.$1dkeuw$1gi.swap($1kb,$1kc);
};arrayList$.swap.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'i',mt:'prm',$t:{t:m$1.Integer}},{nm:'j',mt:'prm',$t:{t:m$1.Integer}}],$cont:ArrayList,pa:11,d:['ceylon.collection','ArrayList','$m','swap']};};
arrayList$.move=function($1kf,$1kg){
var arrayList$=this;
m$1.asrt$((($1kh=$1kf,$1kh.notSmallerThan((0))&&$1kh.smallerThan(arrayList$.$1dkeuw$1gk))&&($1ki=$1kg,$1ki.notSmallerThan((0))&&$1ki.smallerThan(arrayList$.$1dkeuw$1gk))),"index may not be negative or greater than the\nlast index in the list: \'0<=i<length, 0<=j<length\' at ArrayList.ceylon (150:15-150:40)",'148:8-150:41','ArrayList.ceylon');
arrayList$.$1dkeuw$1gi.move($1kf,$1kg);
};arrayList$.move.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'i',mt:'prm',$t:{t:m$1.Integer}},{nm:'j',mt:'prm',$t:{t:m$1.Integer}}],$cont:ArrayList,pa:11,d:['ceylon.collection','ArrayList','$m','move']};};
arrayList$.clear=function(){
var arrayList$=this;
arrayList$.$1dkeuw$1gk=(0);
arrayList$.$1dkeuw$1gi=arrayList$.$1dkeuw$1gm(arrayList$.$1dkeuw$1gg);
};arrayList$.clear.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[],$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$m','clear']};};
m$1.atr$(arrayList$,'capacity',function(){
var arrayList$=this;
return arrayList$.$1dkeuw$1gi.size;
},function($1kj){
var arrayList$=this;
m$1.asrt$((($1kj>=arrayList$.size)),"capacity must be at least as large as list size: \'capacity >= size\' at ArrayList.ceylon (165:15-165:32)",'164:8-165:33','ArrayList.ceylon');
m$1.asrt$((($1kj<=m$1.runtime().maxArraySize)),"capacity too large: \'capacity <= runtime.maxArraySize\' at ArrayList.ceylon (167:15-167:48)",'166:8-167:49','ArrayList.ceylon');
var $1kk=arrayList$.$1dkeuw$1gm($1kj);
arrayList$.$1dkeuw$1gi.copyTo($1kk,0,0,arrayList$.$1dkeuw$1gk);
arrayList$.$1dkeuw$1gi=$1kk;
},function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:ArrayList,pa:1025,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:ArrayList:$at:capacity')];},d:['ceylon.collection','ArrayList','$at','capacity']};},function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$cont:ArrayList,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:ArrayList:$at:capacity:$set')];},d:['ceylon.collection','ArrayList','$at','capacity','$set']};});
arrayList$.getFromFirst=function($1gn){var arrayList$=this;
return (($1kl=$1gn,$1kl.notSmallerThan((0))&&$1kl.smallerThan(arrayList$.$1dkeuw$1gk))?arrayList$.$1dkeuw$1gi.$_get($1gn):null);
};arrayList$.contains=function($1km){
var arrayList$=this;
var $1ko;for(var $1kn=m$1.measure((0),arrayList$.size,{Element$measure:{t:m$1.Integer}}).iterator();($1ko=$1kn.next())!==m$1.finished();){
var $1kp;
if(m$1.nn$(($1kp=arrayList$.$1dkeuw$1gi.$_get($1ko)))){
if(m$1.$eq$($1kp,$1km)){
return true;
}
}
}
if(m$1.finished()===$1ko){
return false;
}
};arrayList$.contains.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'element',mt:'prm',$t:{t:m$1.$_Object}}],$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$m','contains']};};
arrayList$.iterator=function(){var arrayList$=this;
return function(){function $1gp($$targs$$){
var $1gp$=new $1gp.$$;$1gp$.outer$=arrayList$;
$1gp$.$$targs$$=$$targs$$;
m$1.Iterator({Element$Iterator:arrayList$.$$targs$$.Element$ArrayList/*ORALE!Element inv pero Element var*/},$1gp$);
$1gp$.$1dkeuw$1gq_=(0);
$1gp$.$prop$get$1dkeuw$1gq.get=function(){return $1dkeuw$1gq};
return $1gp$;
};$1gp.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},$cont:ArrayList,sts:[{t:m$1.Iterator,a:{Element$Iterator:'Element$ArrayList'}}],d:['ceylon.collection','ArrayList']};};
function $init$$1gp(){
if($1gp.$$===undefined){
m$1.initTypeProto($1gp,'ceylon.collection::ArrayList.anonymous#0',m$1.Basic,m$1.Iterator);
(function($1gp$){
m$1.atr$($1gp$,'$1dkeuw$1gq',function(){return this.$1dkeuw$1gq_;},function($1kq){return this.$1dkeuw$1gq_=$1kq;},function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$1gp,pa:1024,d:['ceylon.collection','ArrayList','$at','index$sffdm1']};});
$1gp$.next=function(){
var $1gp$=this;
if(($1gp$.$1dkeuw$1gq<arrayList$.$1dkeuw$1gk)){
var $1gs;
if(m$1.nn$(($1gs=arrayList$.$1dkeuw$1gi.$_get(($1kr=$1gp$.$1dkeuw$1gq,$1gp$.$1dkeuw$1gq=$1kr.successor,$1kr))))){
return $1gs;
}
else{
var $1gu;
m$1.asrt$((m$1.is$(($1gu=null),arrayList$.$$targs$$.Element$ArrayList)),"Assertion failed: \'is Element null\' at ArrayList.ceylon (200:27-200:43)",'200:20-200:44','ArrayList.ceylon');
return $1gu;
}
var $1kr;
}
else{
return m$1.finished();
}
};$1gp$.next.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Finished},'Element$ArrayList']},ps:[],$cont:$1gp,pa:3,d:['ceylon.collection','ArrayList','$m','next']};};
})($1gp.$$.prototype);
}
return $1gp;
}
arrayList$.$init$$1gp=$init$$1gp;
$init$$1gp();
return $1gp();}();
};arrayList$.insert=function($1kt,$1ku){
var arrayList$=this;
m$1.asrt$((($1kv=$1kt,$1kv.notSmallerThan((0))&&$1kv.notLargerThan(arrayList$.$1dkeuw$1gk))),"index may not be negative or greater than the\nlength of the list: \'0 <= index <= length\' at ArrayList.ceylon (214:15-214:36)",'212:8-214:37','ArrayList.ceylon');
arrayList$.$1dkeuw$1ju(1);
if(($1kt<arrayList$.$1dkeuw$1gk)){
arrayList$.$1dkeuw$1gi.copyTo(arrayList$.$1dkeuw$1gi,$1kt,$1kt.plus(1),arrayList$.$1dkeuw$1gk.minus($1kt));
}
($1kw=arrayList$.$1dkeuw$1gk,arrayList$.$1dkeuw$1gk=$1kw.successor,$1kw);
var $1kw;
($1kx=$1ku,arrayList$.$1dkeuw$1gi.set($1kt,$1kx), $1kx);
var $1kx;
};arrayList$.insert.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'index',mt:'prm',$t:{t:m$1.Integer}},{nm:'element',mt:'prm',$t:'Element$ArrayList'}],$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$m','insert']};};
arrayList$.insertAll=function($1ky,$1kz){
var arrayList$=this;
m$1.asrt$((($1l0=$1ky,$1l0.notSmallerThan((0))&&$1l0.notLargerThan(arrayList$.$1dkeuw$1gk))),"index may not be negative or greater than the\nlength of the list: \'0 <= index <= length\' at ArrayList.ceylon (228:15-228:36)",'226:8-228:37','ArrayList.ceylon');
var $1l1=$1kz.sequence();
var $1l2=$1l1.size;
if(($1l2>0)){
arrayList$.$1dkeuw$1ju($1l2);
if(($1ky<arrayList$.$1dkeuw$1gk)){
arrayList$.$1dkeuw$1gi.copyTo(arrayList$.$1dkeuw$1gi,$1ky,$1ky.plus($1l2),arrayList$.$1dkeuw$1gk.minus($1ky));
}
var $1l3=$1ky;
var $1l5;for(var $1l4=$1l1.iterator();($1l5=$1l4.next())!==m$1.finished();){
($1l6=$1l5,arrayList$.$1dkeuw$1gi.set(($1l7=$1l3,$1l3=$1l7.successor,$1l7),$1l6), $1l6);
var $1l6,$1l7;
}
(arrayList$.$1dkeuw$1gk=arrayList$.$1dkeuw$1gk.plus($1l2));
}
};arrayList$.insertAll.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'index',mt:'prm',$t:{t:m$1.Integer}},{nm:'elements',mt:'prm',$t:{t:m$1.Iterable,a:{Element$Iterable:'Element$ArrayList',Absent$Iterable:{t:m$1.Null}}}}],$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$m','insertAll']};};
arrayList$.$_delete=function($1l8){
var arrayList$=this;
if(($1l9=$1l8,$1l9.notSmallerThan((0))&&$1l9.smallerThan(arrayList$.$1dkeuw$1gk))){
var $1la=arrayList$.$1dkeuw$1gi.$_get($1l8);
arrayList$.$1dkeuw$1gi.copyTo(arrayList$.$1dkeuw$1gi,$1l8.plus(1),$1l8,arrayList$.$1dkeuw$1gk.minus($1l8).minus(1));
($1lb=arrayList$.$1dkeuw$1gk,arrayList$.$1dkeuw$1gk=$1lb.predecessor,$1lb);
var $1lb;
($1lc=null,arrayList$.$1dkeuw$1gi.set(arrayList$.$1dkeuw$1gk,$1lc), $1lc);
var $1lc;
return $1la;
}
else{
return null;
}
};arrayList$.$_delete.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$ArrayList']},ps:[{nm:'index',mt:'prm',$t:{t:m$1.Integer}}],$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$m','delete']};};
arrayList$.remove=function($1ld){
var arrayList$=this;
var $1le=(0);
var $1lf=(0);
while(($1le<arrayList$.$1dkeuw$1gk)){
var $1lg;
if(m$1.nn$(($1lg=arrayList$.$1dkeuw$1gi.$_get(($1lh=$1le,$1le=$1lh.successor,$1lh))))){
if(!m$1.$eq$($1lg,$1ld)){
($1li=$1lg,arrayList$.$1dkeuw$1gi.set(($1lj=$1lf,$1lf=$1lj.successor,$1lj),$1li), $1li);
var $1li,$1lj;
}
}
else{
($1lk=null,arrayList$.$1dkeuw$1gi.set(($1ll=$1lf,$1lf=$1ll.successor,$1ll),$1lk), $1lk);
var $1lk,$1ll;
}
var $1lh;
}
arrayList$.$1dkeuw$1gk=$1lf;
while(($1lf<$1le)){
($1lm=null,arrayList$.$1dkeuw$1gi.set(($1ln=$1lf,$1lf=$1ln.successor,$1ln),$1lm), $1lm);
var $1lm,$1ln;
}
return $1le.minus(arrayList$.$1dkeuw$1gk);
};arrayList$.remove.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'element',mt:'prm',$t:{t:'i',l:['Element$ArrayList',{t:m$1.$_Object}]}}],$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$m','remove']};};
arrayList$.removeAll=function($1lo){
var arrayList$=this;
var $1lp=($1lq=$1lo,HashSet(undefined,undefined,$1lq,{Element$HashSet:m$1.mit$([arrayList$.$$targs$$.Element$ArrayList,{t:m$1.$_Object}])}));
var $1lq;
var $1lr=(0);
var $1ls=(0);
while(($1lr<arrayList$.$1dkeuw$1gk)){
var $1lt;
if(m$1.nn$(($1lt=arrayList$.$1dkeuw$1gi.$_get(($1lu=$1lr,$1lr=$1lu.successor,$1lu))))){
if(!m$1.$cnt$($1lp,$1lt)){
($1lv=$1lt,arrayList$.$1dkeuw$1gi.set(($1lw=$1ls,$1ls=$1lw.successor,$1lw),$1lv), $1lv);
var $1lv,$1lw;
}
}
else{
($1lx=null,arrayList$.$1dkeuw$1gi.set(($1ly=$1ls,$1ls=$1ly.successor,$1ly),$1lx), $1lx);
var $1lx,$1ly;
}
var $1lu;
}
arrayList$.$1dkeuw$1gk=$1ls;
while(($1ls<$1lr)){
($1lz=null,arrayList$.$1dkeuw$1gi.set(($1m0=$1ls,$1ls=$1m0.successor,$1m0),$1lz), $1lz);
var $1lz,$1m0;
}
return $1lr.minus(arrayList$.$1dkeuw$1gk);
};arrayList$.removeAll.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'elements',mt:'prm',$t:{t:m$1.Iterable,a:{Element$Iterable:{t:'i',l:['Element$ArrayList',{t:m$1.$_Object}]},Absent$Iterable:{t:m$1.Null}}}}],$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$m','removeAll']};};
arrayList$.removeFirst=function($1m1){
var arrayList$=this;
var $1m2;
if(m$1.nn$(($1m2=arrayList$.firstOccurrence($1m1)))){
arrayList$.$_delete($1m2);
return true;
}
else{
return false;
}
};arrayList$.removeFirst.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'element',mt:'prm',$t:{t:'i',l:['Element$ArrayList',{t:m$1.$_Object}]}}],$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$m','removeFirst']};};
arrayList$.removeLast=function($1m3){
var arrayList$=this;
var $1m4;
if(m$1.nn$(($1m4=arrayList$.lastOccurrence($1m3)))){
arrayList$.$_delete($1m4);
return true;
}
else{
return false;
}
};arrayList$.removeLast.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'element',mt:'prm',$t:{t:'i',l:['Element$ArrayList',{t:m$1.$_Object}]}}],$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$m','removeLast']};};
arrayList$.findAndRemoveFirst=function($1m5){
var arrayList$=this;
var $1m6;
if(m$1.nn$(($1m6=arrayList$.firstIndexWhere($1m5)))){
return arrayList$.$_delete($1m6);
}
else{
return null;
}
};arrayList$.findAndRemoveFirst.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$ArrayList']},ps:[{nm:'selecting',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Arguments$Callable:{t:'T',l:[{t:'i',l:['Element$ArrayList',{t:m$1.$_Object}]}]},Return$Callable:{t:m$1.$_Boolean}}},$rt:{t:m$1.$_Boolean},ps:[{nm:'element',mt:'prm',$t:{t:'i',l:['Element$ArrayList',{t:m$1.$_Object}]}}]}],$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$m','findAndRemoveFirst']};};
arrayList$.findAndRemoveLast=function($1m7){
var arrayList$=this;
var $1m8;
if(m$1.nn$(($1m8=arrayList$.lastIndexWhere($1m7)))){
return arrayList$.$_delete($1m8);
}
else{
return null;
}
};arrayList$.findAndRemoveLast.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$ArrayList']},ps:[{nm:'selecting',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Arguments$Callable:{t:'T',l:[{t:'i',l:['Element$ArrayList',{t:m$1.$_Object}]}]},Return$Callable:{t:m$1.$_Boolean}}},$rt:{t:m$1.$_Boolean},ps:[{nm:'element',mt:'prm',$t:{t:'i',l:['Element$ArrayList',{t:m$1.$_Object}]}}]}],$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$m','findAndRemoveLast']};};
arrayList$.removeWhere=function($1m9){
var arrayList$=this;
var $1ma=(0);
var $1mb=(0);
while(($1ma<arrayList$.$1dkeuw$1gk)){
var $1mc;
if(m$1.nn$(($1mc=arrayList$.$1dkeuw$1gi.$_get(($1md=$1ma,$1ma=$1md.successor,$1md))))){
if(!$1m9($1mc)){
($1me=$1mc,arrayList$.$1dkeuw$1gi.set(($1mf=$1mb,$1mb=$1mf.successor,$1mf),$1me), $1me);
var $1me,$1mf;
}
}
else{
($1mg=null,arrayList$.$1dkeuw$1gi.set(($1mh=$1mb,$1mb=$1mh.successor,$1mh),$1mg), $1mg);
var $1mg,$1mh;
}
var $1md;
}
arrayList$.$1dkeuw$1gk=$1mb;
while(($1mb<$1ma)){
($1mi=null,arrayList$.$1dkeuw$1gi.set(($1mj=$1mb,$1mb=$1mj.successor,$1mj),$1mi), $1mi);
var $1mi,$1mj;
}
return $1ma.minus(arrayList$.$1dkeuw$1gk);
};arrayList$.removeWhere.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'selecting',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Arguments$Callable:{t:'T',l:[{t:'i',l:['Element$ArrayList',{t:m$1.$_Object}]}]},Return$Callable:{t:m$1.$_Boolean}}},$rt:{t:m$1.$_Boolean},ps:[{nm:'element',mt:'prm',$t:{t:'i',l:['Element$ArrayList',{t:m$1.$_Object}]}}]}],$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$m','removeWhere']};};
arrayList$.prune=function(){
var arrayList$=this;
var $1mk=(0);
var $1ml=(0);
while(($1mk<arrayList$.$1dkeuw$1gk)){
var $1mm;
if(m$1.nn$(($1mm=arrayList$.$1dkeuw$1gi.$_get(($1mn=$1mk,$1mk=$1mn.successor,$1mn))))){
($1mo=$1mm,arrayList$.$1dkeuw$1gi.set(($1mp=$1ml,$1ml=$1mp.successor,$1mp),$1mo), $1mo);
var $1mo,$1mp;
}
var $1mn;
}
var $1mq=$1mk.minus($1ml);
arrayList$.$1dkeuw$1gk=$1ml;
while(($1ml<$1mk)){
($1mr=null,arrayList$.$1dkeuw$1gi.set(($1ms=$1ml,$1ml=$1ms.successor,$1ms),$1mr), $1mr);
var $1mr,$1ms;
}
return $1mq;
};arrayList$.prune.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[],$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$m','prune']};};
arrayList$.$_replace=function($1mt,$1mu){
var arrayList$=this;
var $1mv=(0);
var $1mw=(0);
while(($1mw<arrayList$.$1dkeuw$1gk)){
var $1mx;
if(m$1.nn$(($1mx=arrayList$.$1dkeuw$1gi.$_get($1mw)))&&m$1.$eq$($1mx,$1mt)){
($1my=$1mu,arrayList$.$1dkeuw$1gi.set($1mw,$1my), $1my);
var $1my;
($1mz=$1mv,$1mv=$1mz.successor,$1mz);
var $1mz;
}
($1n0=$1mw,$1mw=$1n0.successor,$1n0);
var $1n0;
}
return $1mv;
};arrayList$.$_replace.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'element',mt:'prm',$t:{t:'i',l:['Element$ArrayList',{t:m$1.$_Object}]}},{nm:'replacement',mt:'prm',$t:'Element$ArrayList'}],$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$m','replace']};};
arrayList$.replaceFirst=function($1n1,$1n2){
var arrayList$=this;
var $1n3;
if(m$1.nn$(($1n3=arrayList$.firstOccurrence($1n1)))){
($1n4=$1n2,arrayList$.$1dkeuw$1gi.set($1n3,$1n4), $1n4);
var $1n4;
return true;
}
else{
return false;
}
};arrayList$.replaceFirst.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'element',mt:'prm',$t:{t:'i',l:['Element$ArrayList',{t:m$1.$_Object}]}},{nm:'replacement',mt:'prm',$t:'Element$ArrayList'}],$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$m','replaceFirst']};};
arrayList$.replaceLast=function($1n5,$1n6){
var arrayList$=this;
var $1n7;
if(m$1.nn$(($1n7=arrayList$.lastOccurrence($1n5)))){
($1n8=$1n6,arrayList$.$1dkeuw$1gi.set($1n7,$1n8), $1n8);
var $1n8;
return true;
}
else{
return false;
}
};arrayList$.replaceLast.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'element',mt:'prm',$t:{t:'i',l:['Element$ArrayList',{t:m$1.$_Object}]}},{nm:'replacement',mt:'prm',$t:'Element$ArrayList'}],$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$m','replaceLast']};};
arrayList$.findAndReplaceFirst=function($1n9,$1na){
var arrayList$=this;
var $1nb;
if(m$1.nn$(($1nb=arrayList$.firstIndexWhere($1n9)))){
var $1nc=arrayList$.getFromFirst($1nb);
($1nd=$1na,arrayList$.$1dkeuw$1gi.set($1nb,$1nd), $1nd);
var $1nd;
return $1nc;
}
else{
return null;
}
};arrayList$.findAndReplaceFirst.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$ArrayList']},ps:[{nm:'selecting',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Arguments$Callable:{t:'T',l:[{t:'i',l:['Element$ArrayList',{t:m$1.$_Object}]}]},Return$Callable:{t:m$1.$_Boolean}}},$rt:{t:m$1.$_Boolean},ps:[{nm:'element',mt:'prm',$t:{t:'i',l:['Element$ArrayList',{t:m$1.$_Object}]}}]},{nm:'replacement',mt:'prm',$t:'Element$ArrayList'}],$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$m','findAndReplaceFirst']};};
arrayList$.findAndReplaceLast=function($1ne,$1nf){
var arrayList$=this;
var $1ng;
if(m$1.nn$(($1ng=arrayList$.lastIndexWhere($1ne)))){
var $1nh=arrayList$.getFromFirst($1ng);
($1ni=$1nf,arrayList$.$1dkeuw$1gi.set($1ng,$1ni), $1ni);
var $1ni;
return $1nh;
}
else{
return null;
}
};arrayList$.findAndReplaceLast.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$ArrayList']},ps:[{nm:'selecting',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Arguments$Callable:{t:'T',l:[{t:'i',l:['Element$ArrayList',{t:m$1.$_Object}]}]},Return$Callable:{t:m$1.$_Boolean}}},$rt:{t:m$1.$_Boolean},ps:[{nm:'element',mt:'prm',$t:{t:'i',l:['Element$ArrayList',{t:m$1.$_Object}]}}]},{nm:'replacement',mt:'prm',$t:'Element$ArrayList'}],$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$m','findAndReplaceLast']};};
arrayList$.replaceWhere=function($1nj,$1nk){
var arrayList$=this;
var $1nl=(0);
var $1nm=(0);
while(($1nm<arrayList$.$1dkeuw$1gk)){
var $1nn;
if(m$1.nn$(($1nn=arrayList$.$1dkeuw$1gi.$_get($1nm)))&&$1nj($1nn)){
($1no=$1nk,arrayList$.$1dkeuw$1gi.set($1nm,$1no), $1no);
var $1no;
($1np=$1nl,$1nl=$1np.successor,$1np);
var $1np;
}
($1nq=$1nm,$1nm=$1nq.successor,$1nq);
var $1nq;
}
return $1nl;
};arrayList$.replaceWhere.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'selecting',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Arguments$Callable:{t:'T',l:[{t:'i',l:['Element$ArrayList',{t:m$1.$_Object}]}]},Return$Callable:{t:m$1.$_Boolean}}},$rt:{t:m$1.$_Boolean},ps:[{nm:'element',mt:'prm',$t:{t:'i',l:['Element$ArrayList',{t:m$1.$_Object}]}}]},{nm:'replacement',mt:'prm',$t:'Element$ArrayList'}],$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$m','replaceWhere']};};
arrayList$.infill=function($1nr){
var arrayList$=this;
var $1ns=(0);
while(($1ns<arrayList$.$1dkeuw$1gk)){
if(!m$1.nn$(arrayList$.$1dkeuw$1gi.$_get($1ns))){
($1nt=$1nr,arrayList$.$1dkeuw$1gi.set($1ns,$1nt), $1nt);
var $1nt;
}
($1nu=$1ns,$1ns=$1nu.successor,$1nu);
var $1nu;
}
};arrayList$.infill.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'replacement',mt:'prm',$t:'Element$ArrayList'}],$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$m','infill']};};
arrayList$.set=function($1nv,$1nw){
var arrayList$=this;
m$1.asrt$((($1nx=$1nv,$1nx.notSmallerThan((0))&&$1nx.smallerThan(arrayList$.$1dkeuw$1gk))),"index may not be negative or greater than the\nlast index in the list: \'0<=index<length\' at ArrayList.ceylon (491:15-491:31)",'489:8-491:32','ArrayList.ceylon');
($1ny=$1nw,arrayList$.$1dkeuw$1gi.set($1nv,$1ny), $1ny);
var $1ny;
};arrayList$.set.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'index',mt:'prm',$t:{t:m$1.Integer}},{nm:'element',mt:'prm',$t:'Element$ArrayList'}],$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$m','set']};};
arrayList$.span=function($1nz,$1o0){
var arrayList$=this;
var $1o1=spanToMeasure($1nz,$1o0,arrayList$.$1dkeuw$1gk),$1o2=$1o1.$_get(0),$1o3=$1o1.$_get(1),$1o4=$1o1.$_get(2);
var $1o5=($1o6=$1o3,$1o7=arrayList$.$1dkeuw$1gh,$1o8=arrayList$.skip($1o2).take($1o3),ArrayList($1o6,$1o7,$1o8,{Element$ArrayList:arrayList$.$$targs$$.Element$ArrayList}));
var $1o6,$1o7,$1o8;
return ($1o9=($1o4?$1o5.reversed:null),m$1.nn$($1o9)?$1o9:$1o5);
var $1o9;
};arrayList$.span.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.List,a:{Element$List:'Element$ArrayList'}},ps:[{nm:'from',mt:'prm',$t:{t:m$1.Integer}},{nm:'to',mt:'prm',$t:{t:m$1.Integer}}],$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$m','span']};};
arrayList$.deleteSpan=function($1oa,$1ob){
var arrayList$=this;
var $1oc=spanToMeasure($1oa,$1ob,arrayList$.$1dkeuw$1gk),$1od=$1oc.$_get(0),$1oe=$1oc.$_get(1),$1of=$1oc.$_get(2);
if((($1od<arrayList$.$1dkeuw$1gk)&&($1oe>0))){
var $1og=$1od.plus($1oe);
arrayList$.$1dkeuw$1gi.copyTo(arrayList$.$1dkeuw$1gi,$1og,$1od,arrayList$.$1dkeuw$1gk.minus($1og));
var $1oh=arrayList$.$1dkeuw$1gk.minus($1oe);
while(($1oh<arrayList$.$1dkeuw$1gk)){
($1oi=null,arrayList$.$1dkeuw$1gi.set(($1oj=$1oh,$1oh=$1oj.successor,$1oj),$1oi), $1oi);
var $1oi,$1oj;
}
(arrayList$.$1dkeuw$1gk=arrayList$.$1dkeuw$1gk.minus($1oe));
}
};arrayList$.deleteSpan.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'from',mt:'prm',$t:{t:m$1.Integer}},{nm:'to',mt:'prm',$t:{t:m$1.Integer}}],$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$m','deleteSpan']};};
arrayList$.measure=function($1gw,$1gx){var arrayList$=this;
return arrayList$.span(($1ok=measureToSpan($1gw,$1gx),$1ok.$_get(0)),$1ok.$_get(1));
};arrayList$.deleteMeasure=function($1gz,$1h0){var arrayList$=this;
return arrayList$.deleteSpan(($1ol=measureToSpan($1gz,$1h0),$1ol.$_get(0)),$1ol.$_get(1));
};arrayList$.truncate=function($1om){
var arrayList$=this;
m$1.asrt$((($1om>=0)),"Assertion failed: \'size >= 0\' at ArrayList.ceylon (531:15-531:25)",'531:8-531:26','ArrayList.ceylon');
if(($1om<arrayList$.$1dkeuw$1gk)){
var $1on=$1om;
while(($1on<arrayList$.$1dkeuw$1gk)){
($1oo=null,arrayList$.$1dkeuw$1gi.set(($1op=$1on,$1on=$1op.successor,$1op),$1oo), $1oo);
var $1oo,$1op;
}
arrayList$.$1dkeuw$1gk=$1om;
}
};arrayList$.truncate.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'size',mt:'prm',$t:{t:m$1.Integer}}],$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$m','truncate']};};
arrayList$.spanFrom=function($1h2){var arrayList$=this;
return ($1oq=(($1h2>=arrayList$.$1dkeuw$1gk)?ArrayList(undefined,undefined,undefined,{Element$ArrayList:{t:m$1.Nothing}}):null),m$1.nn$($1oq)?$1oq:arrayList$.span($1h2,arrayList$.$1dkeuw$1gk.minus(1)));
var $1oq;
};arrayList$.spanTo=function($1h4){var arrayList$=this;
return ($1or=(($1h4<0)?ArrayList(undefined,undefined,undefined,{Element$ArrayList:{t:m$1.Nothing}}):null),m$1.nn$($1or)?$1or:arrayList$.span(0,$1h4));
var $1or;
};m$1.atr$(arrayList$,'first',function(){
var arrayList$=this;
return ((arrayList$.$1dkeuw$1gk>0)?arrayList$.$1dkeuw$1gi.$_get(0):null);
},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$ArrayList']},$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$at','first']};});
m$1.atr$(arrayList$,'lastIndex',function(){
var arrayList$=this;
return ((arrayList$.$1dkeuw$1gk>=1)?arrayList$.$1dkeuw$1gk.minus(1):null);
},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]},$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$at','lastIndex']};});
arrayList$.equals=function($1h6){var arrayList$=this;
return arrayList$.getT$all()['ceylon.language::List'].$$.prototype.equals.call(arrayList$,$1h6);
};m$1.atr$(arrayList$,'hash',function(){
var arrayList$=this;
return m$1.attrGetter(arrayList$.getT$all()['ceylon.language::List'],'hash').call(this);
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$at','hash']};});
arrayList$.$_push=function($1h7){var arrayList$=this;
return arrayList$.add($1h7);
};arrayList$.$_pop=function(){var arrayList$=this;
return arrayList$.deleteLast();
};m$1.atr$(arrayList$,'top',function(){
var arrayList$=this;
return arrayList$.last;
},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$ArrayList']},$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$at','top']};});
arrayList$.offer=function($1h8){var arrayList$=this;
return arrayList$.add($1h8);
};arrayList$.accept=function(){var arrayList$=this;
return arrayList$.deleteFirst();
};m$1.atr$(arrayList$,'back',function(){
var arrayList$=this;
return arrayList$.last;
},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$ArrayList']},$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$at','back']};});
m$1.atr$(arrayList$,'front',function(){
var arrayList$=this;
return arrayList$.first;
},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$ArrayList']},$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$at','front']};});
arrayList$.clone=function(){var arrayList$=this;
return ArrayList$c_copy(arrayList$,undefined,{Element$ArrayList:arrayList$.$$targs$$.Element$ArrayList});
};
arrayList$.clone.$crtmm$=function(){return{mod:$CCMM$,$t:{t:ArrayList,a:{Element$ArrayList:'Element$ArrayList'}},ps:[],$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$m','clone']};};
arrayList$.find=function($1h9){var arrayList$=this;
return arrayList$.$1dkeuw$1gi.find($1h9);
};arrayList$.findLast=function($1ha){var arrayList$=this;
return arrayList$.$1dkeuw$1gi.findLast($1ha);
};arrayList$.sortInPlace=function($1os){var arrayList$=this;
return arrayList$.$1dkeuw$1gi.sortInPlace(m$1.jsc$2((function($1ot,$1ou){return function(){var $1ov,$1ow;
if(m$1.nn$(($1ov=$1ot))&&m$1.nn$(($1ow=$1ou)))return $1os($1ov,$1ow);else return m$1.nn$($1ot)&&!m$1.nn$($1ou)?m$1.smaller():(m$1.nn$($1ou)&&!m$1.nn$($1ot)?m$1.larger():m$1.equal())}();
}),[{nm:'x',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},arrayList$.$$targs$$.Element$ArrayList]}},{nm:'y',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},arrayList$.$$targs$$.Element$ArrayList]}}],{Arguments$Callable:m$1.mtt$([m$1.mut$([{t:m$1.Null},arrayList$.$$targs$$.Element$ArrayList]),m$1.mut$([{t:m$1.Null},arrayList$.$$targs$$.Element$ArrayList])]),Return$Callable:{t:m$1.Comparison}}));
};
arrayList$.sortInPlace.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'comparing',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Arguments$Callable:{t:'T',l:[{t:'i',l:['Element$ArrayList',{t:m$1.$_Object}]},{t:'i',l:['Element$ArrayList',{t:m$1.$_Object}]}]},Return$Callable:{t:m$1.Comparison}}},$rt:{t:m$1.Comparison},ps:[{nm:'x',mt:'prm',$t:{t:'i',l:['Element$ArrayList',{t:m$1.$_Object}]}},{nm:'y',mt:'prm',$t:{t:'i',l:['Element$ArrayList',{t:m$1.$_Object}]}}]}],$cont:ArrayList,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:ArrayList:$m:sortInPlace')];},d:['ceylon.collection','ArrayList','$m','sortInPlace']};};
arrayList$.each=function($1ox){
var arrayList$=this;
var $1oy;
if(m$1.is$(($1oy=null),arrayList$.$$targs$$.Element$ArrayList)){
var $1oz=(function(){var $1p0=$1oy;arrayList$.$1dkeuw$1gi.take(arrayList$.$1dkeuw$1gk).each(m$1.jsc$2((function($1p1){
$1ox(($1p2=$1p1,m$1.nn$($1p2)?$1p2:$1p0));
var $1p2;
}),[{nm:'e',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},arrayList$.$$targs$$.Element$ArrayList]}}],{Arguments$Callable:m$1.mtt$([m$1.mut$([{t:m$1.Null},arrayList$.$$targs$$.Element$ArrayList])]),Return$Callable:{t:m$1.Anything}}));
}());if($1oz!==undefined){return $1oz;}
}
else{
arrayList$.$1dkeuw$1gi.take(arrayList$.$1dkeuw$1gk).each(m$1.jsc$2((function($1p3){
var $1p4;
m$1.asrt$((m$1.nn$(($1p4=$1p3))),"Assertion failed: \'exists e\' at ArrayList.ceylon (610:23-610:32)",'610:16-610:33','ArrayList.ceylon');
$1ox($1p4);
}),[{nm:'e',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},arrayList$.$$targs$$.Element$ArrayList]}}],{Arguments$Callable:m$1.mtt$([m$1.mut$([{t:m$1.Null},arrayList$.$$targs$$.Element$ArrayList])]),Return$Callable:{t:m$1.Anything}}));
}
};arrayList$.each.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'step',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Arguments$Callable:{t:'T',l:['Element$ArrayList']},Return$Callable:{t:m$1.Anything}}},$rt:{t:m$1.Anything},ps:[{nm:'element',mt:'prm',$t:'Element$ArrayList'}]}],$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$m','each']};};
arrayList$.count=function($1p5){
var arrayList$=this;
var $1p6;
if(m$1.is$(($1p6=null),arrayList$.$$targs$$.Element$ArrayList)){
var $1p7=(function(){var $1p8=$1p6;return arrayList$.$1dkeuw$1gi.take(arrayList$.$1dkeuw$1gk).count(m$1.jsc$2((function($1p9){return $1p5(($1pa=$1p9,m$1.nn$($1pa)?$1pa:$1p8));
var $1pa;
}),[{nm:'e',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},arrayList$.$$targs$$.Element$ArrayList]}}],{Arguments$Callable:m$1.mtt$([m$1.mut$([{t:m$1.Null},arrayList$.$$targs$$.Element$ArrayList])]),Return$Callable:{t:m$1.$_Boolean}}));
}());if($1p7!==undefined){return $1p7;}
}
else{
return arrayList$.$1dkeuw$1gi.take(arrayList$.$1dkeuw$1gk).count(m$1.jsc$2((function($1pb){
var $1pc;
m$1.asrt$((m$1.nn$(($1pc=$1pb))),"Assertion failed: \'exists e\' at ArrayList.ceylon (625:23-625:32)",'625:16-625:33','ArrayList.ceylon');
return $1p5($1pc);
}),[{nm:'e',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},arrayList$.$$targs$$.Element$ArrayList]}}],{Arguments$Callable:m$1.mtt$([m$1.mut$([{t:m$1.Null},arrayList$.$$targs$$.Element$ArrayList])]),Return$Callable:{t:m$1.$_Boolean}}));
}
};arrayList$.count.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'selecting',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Arguments$Callable:{t:'T',l:['Element$ArrayList']},Return$Callable:{t:m$1.$_Boolean}}},$rt:{t:m$1.$_Boolean},ps:[{nm:'element',mt:'prm',$t:'Element$ArrayList'}]}],$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$m','count']};};
arrayList$.$_every=function($1pd){
var arrayList$=this;
var $1pe;
if(m$1.is$(($1pe=null),arrayList$.$$targs$$.Element$ArrayList)){
var $1pf=(function(){var $1pg=$1pe;return arrayList$.$1dkeuw$1gi.take(arrayList$.$1dkeuw$1gk).$_every(m$1.jsc$2((function($1ph){return $1pd(($1pi=$1ph,m$1.nn$($1pi)?$1pi:$1pg));
var $1pi;
}),[{nm:'e',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},arrayList$.$$targs$$.Element$ArrayList]}}],{Arguments$Callable:m$1.mtt$([m$1.mut$([{t:m$1.Null},arrayList$.$$targs$$.Element$ArrayList])]),Return$Callable:{t:m$1.$_Boolean}}));
}());if($1pf!==undefined){return $1pf;}
}
else{
return arrayList$.$1dkeuw$1gi.take(arrayList$.$1dkeuw$1gk).$_every(m$1.jsc$2((function($1pj){
var $1pk;
m$1.asrt$((m$1.nn$(($1pk=$1pj))),"Assertion failed: \'exists e\' at ArrayList.ceylon (640:23-640:32)",'640:16-640:33','ArrayList.ceylon');
return $1pd($1pk);
}),[{nm:'e',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},arrayList$.$$targs$$.Element$ArrayList]}}],{Arguments$Callable:m$1.mtt$([m$1.mut$([{t:m$1.Null},arrayList$.$$targs$$.Element$ArrayList])]),Return$Callable:{t:m$1.$_Boolean}}));
}
};arrayList$.$_every.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'selecting',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Arguments$Callable:{t:'T',l:['Element$ArrayList']},Return$Callable:{t:m$1.$_Boolean}}},$rt:{t:m$1.$_Boolean},ps:[{nm:'element',mt:'prm',$t:'Element$ArrayList'}]}],$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$m','every']};};
arrayList$.any=function($1pl){
var arrayList$=this;
var $1pm;
if(m$1.is$(($1pm=null),arrayList$.$$targs$$.Element$ArrayList)){
var $1pn=(function(){var $1po=$1pm;return arrayList$.$1dkeuw$1gi.take(arrayList$.$1dkeuw$1gk).any(m$1.jsc$2((function($1pp){return $1pl(($1pq=$1pp,m$1.nn$($1pq)?$1pq:$1po));
var $1pq;
}),[{nm:'e',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},arrayList$.$$targs$$.Element$ArrayList]}}],{Arguments$Callable:m$1.mtt$([m$1.mut$([{t:m$1.Null},arrayList$.$$targs$$.Element$ArrayList])]),Return$Callable:{t:m$1.$_Boolean}}));
}());if($1pn!==undefined){return $1pn;}
}
else{
return arrayList$.$1dkeuw$1gi.take(arrayList$.$1dkeuw$1gk).any(m$1.jsc$2((function($1pr){
var $1ps;
m$1.asrt$((m$1.nn$(($1ps=$1pr))),"Assertion failed: \'exists e\' at ArrayList.ceylon (655:23-655:32)",'655:16-655:33','ArrayList.ceylon');
return $1pl($1ps);
}),[{nm:'e',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},arrayList$.$$targs$$.Element$ArrayList]}}],{Arguments$Callable:m$1.mtt$([m$1.mut$([{t:m$1.Null},arrayList$.$$targs$$.Element$ArrayList])]),Return$Callable:{t:m$1.$_Boolean}}));
}
};arrayList$.any.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'selecting',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Arguments$Callable:{t:'T',l:['Element$ArrayList']},Return$Callable:{t:m$1.$_Boolean}}},$rt:{t:m$1.$_Boolean},ps:[{nm:'element',mt:'prm',$t:'Element$ArrayList'}]}],$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$m','any']};};
arrayList$.$_reduce=function($1pt,$g1hi5x$){
var arrayList$=this;
var $1pu;
if(m$1.is$(($1pu=null),arrayList$.$$targs$$.Element$ArrayList)){
var $1pv=(function(){var $1pw=$1pu;return arrayList$.$1dkeuw$1gi.take(arrayList$.$1dkeuw$1gk).$_reduce(m$1.jsc$2((function($1px,$1py){return $1pt(($1pz=$1px,m$1.nn$($1pz)?$1pz:$1pw),($1q0=$1py,m$1.nn$($1q0)?$1q0:$1pw));
var $1pz,$1q0;
}),[{nm:'partial',mt:'prm',$t:{t:'u',l:[$g1hi5x$.Result$reduce,{t:m$1.Null},arrayList$.$$targs$$.Element$ArrayList]}},{nm:'element',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},arrayList$.$$targs$$.Element$ArrayList]}}],{Arguments$Callable:{t:m$1.Tuple,a:{Element$Tuple:m$1.mut$([$g1hi5x$.Result$reduce,{t:m$1.Null},arrayList$.$$targs$$.Element$ArrayList]),First$Tuple:m$1.mut$([$g1hi5x$.Result$reduce,{t:m$1.Null},arrayList$.$$targs$$.Element$ArrayList]),Rest$Tuple:m$1.mtt$([m$1.mut$([{t:m$1.Null},arrayList$.$$targs$$.Element$ArrayList])])}},Return$Callable:$g1hi5x$.Result$reduce/*ORALE!Result inv pero Return var*/}),{Result$reduce:$g1hi5x$.Result$reduce});
}());if($1pv!==undefined){return $1pv;}
}
else{
return arrayList$.$1dkeuw$1gi.take(arrayList$.$1dkeuw$1gk).$_reduce(m$1.jsc$2((function($1q1,$1q2){
var $1q3,$1q4;
m$1.asrt$((m$1.nn$(($1q3=$1q1))&&m$1.nn$(($1q4=$1q2))),"Assertion failed: \'exists partial, exists element\' at ArrayList.ceylon (674:23-674:54)",'674:16-674:55','ArrayList.ceylon');
return $1pt($1q3,$1q4);
}),[{nm:'partial',mt:'prm',$t:{t:'u',l:[$g1hi5x$.Result$reduce,{t:m$1.Null},arrayList$.$$targs$$.Element$ArrayList]}},{nm:'element',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},arrayList$.$$targs$$.Element$ArrayList]}}],{Arguments$Callable:{t:m$1.Tuple,a:{Element$Tuple:m$1.mut$([$g1hi5x$.Result$reduce,{t:m$1.Null},arrayList$.$$targs$$.Element$ArrayList]),First$Tuple:m$1.mut$([$g1hi5x$.Result$reduce,{t:m$1.Null},arrayList$.$$targs$$.Element$ArrayList]),Rest$Tuple:m$1.mtt$([m$1.mut$([{t:m$1.Null},arrayList$.$$targs$$.Element$ArrayList])])}},Return$Callable:$g1hi5x$.Result$reduce/*ORALE!Result inv pero Return var*/}),{Result$reduce:$g1hi5x$.Result$reduce});
}
};arrayList$.$_reduce.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:['Result$reduce','Element$ArrayList',{t:m$1.Null}]},ps:[{nm:'accumulating',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Arguments$Callable:{t:'T',l:[{t:'u',l:['Result$reduce','Element$ArrayList']},'Element$ArrayList']},Return$Callable:'Result$reduce'}},$rt:'Result$reduce',ps:[{nm:'partial',mt:'prm',$t:{t:'u',l:['Result$reduce','Element$ArrayList']}},{nm:'element',mt:'prm',$t:'Element$ArrayList'}]}],$cont:ArrayList,tp:{Result$reduce:{}},pa:3,d:['ceylon.collection','ArrayList','$m','reduce']};};
arrayList$.occursAt=function($1hb,$1hc){var arrayList$=this;
return (($1hb<arrayList$.$1dkeuw$1gk)?arrayList$.$1dkeuw$1gi.occursAt($1hb,$1hc):false);
};arrayList$.firstOccurrence=function($1hd,$1he,$1hf){var arrayList$=this;
if($1he===undefined){$1he=arrayList$.firstOccurrence$defs$from($1hd,$1he,$1hf);}
if($1hf===undefined){$1hf=arrayList$.firstOccurrence$defs$length($1hd,$1he,$1hf);}
return function(){var $1hg;
if(m$1.nn$(($1hg=($1q5=$1hd,$1q6=$1he,$1q7=smallest($1he.plus($1hf),arrayList$.size).minus($1he),($1q8=arrayList$.$1dkeuw$1gi,m$1.jsc$3($1q8,$1q8.firstOccurrence))($1q5,$1q6,$1q7)))))return $1hg;else return null}();
var $1q5,$1q6,$1q7,$1q8;
};arrayList$.lastOccurrence=function($1hl,$1hm,$1hn){var arrayList$=this;
if($1hm===undefined){$1hm=arrayList$.lastOccurrence$defs$from($1hl,$1hm,$1hn);}
if($1hn===undefined){$1hn=arrayList$.lastOccurrence$defs$length($1hl,$1hm,$1hn);}
return function(){var $1ho;
if(m$1.nn$(($1ho=($1q9=$1hl,$1qa=largest($1hm,arrayList$.$1dkeuw$1gi.size.minus(arrayList$.size)),$1qb=$1hn,($1qc=arrayList$.$1dkeuw$1gi,m$1.jsc$3($1qc,$1qc.lastOccurrence))($1q9,$1qa,$1qb)))))return $1ho;else return null}();
var $1q9,$1qa,$1qb,$1qc;
};arrayList$.occurs=function($1ht,$1hu,$1hv){var arrayList$=this;
if($1hu===undefined){$1hu=arrayList$.occurs$defs$from($1ht,$1hu,$1hv);}
if($1hv===undefined){$1hv=arrayList$.occurs$defs$length($1ht,$1hu,$1hv);}
return ($1qd=$1ht,$1qe=$1hu,$1qf=smallest($1hu.plus($1hv),arrayList$.size).minus($1hu),($1qg=arrayList$.$1dkeuw$1gi,m$1.jsc$3($1qg,$1qg.occurs))($1qd,$1qe,$1qf));
var $1qd,$1qe,$1qf,$1qg;
};arrayList$.occurrences=function($1i0,$1i1,$1i2){var arrayList$=this;
if($1i1===undefined){$1i1=arrayList$.occurrences$defs$from($1i0,$1i1,$1i2);}
if($1i2===undefined){$1i2=arrayList$.occurrences$defs$length($1i0,$1i1,$1i2);}
return ($1qh=$1i0,$1qi=$1i1,$1qj=smallest($1i1.plus($1i2),arrayList$.size).minus($1i1),($1qk=arrayList$.$1dkeuw$1gi,m$1.jsc$3($1qk,$1qk.occurrences))($1qh,$1qi,$1qj));
var $1qh,$1qi,$1qj,$1qk;
};arrayList$.copyTo$defs$sourcePosition=function($1ql,$1qm,$1qn,$1qo){return 0;};
arrayList$.copyTo$defs$destinationPosition=function($1ql,$1qm,$1qn,$1qo){return 0;};
arrayList$.copyTo$defs$length=function($1ql,$1qm,$1qn,$1qo){var arrayList$=this;
return smallest(arrayList$.size.minus($1qm),$1ql.size.minus($1qn));};
arrayList$.copyTo=function($1ql,$1qm,$1qn,$1qo){
var arrayList$=this;
if($1qm===undefined){$1qm=(0);}
if($1qn===undefined){$1qn=(0);}
if($1qo===undefined){$1qo=smallest(arrayList$.size.minus($1qm),$1ql.size.minus($1qn));}
m$1.asrt$((($1qp=$1qm,$1qp.notSmallerThan((0))&&$1qp.notLargerThan(arrayList$.size.minus($1qo)))),"illegal starting position in source list: \'0<=sourcePosition<=size-length\' at ArrayList.ceylon (759:15-759:46)",'758:8-759:47','ArrayList.ceylon');
m$1.asrt$((($1qq=$1qn,$1qq.notSmallerThan((0))&&$1qq.notLargerThan($1ql.size.minus($1qo)))),"illegal starting position in destination list: \'0<=destinationPosition<=destination.size-length\' at ArrayList.ceylon (761:15-761:63)",'760:8-761:64','ArrayList.ceylon');
($1qr=$1qo,$1qs=$1qm,$1qt=$1qn,$1qu=function($1qv){if(m$1.is$($1qv,{t:m$1.$_Array,a:{Element$Array:m$1.mut$([{t:m$1.Null},arrayList$.$$targs$$.Element$ArrayList])}}))return $1qv;else if(m$1.is$($1qv,{t:ArrayList,a:{Element$ArrayList:arrayList$.$$targs$$.Element$ArrayList}}))return $1qv.$1dkeuw$1gi;else throw m$1.Exception('Supposedly exhaustive switch was not exhaustive')}($1ql),($1qw=arrayList$.$1dkeuw$1gi,m$1.jsc$3($1qw,$1qw.copyTo))($1qu,$1qs,$1qt,$1qr));
var $1qr,$1qs,$1qt,$1qu,$1qw;
};arrayList$.copyTo.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'destination',mt:'prm',$t:{t:'u',l:[{t:ArrayList,a:{Element$ArrayList:'Element$ArrayList'}},{t:m$1.$_Array,a:{Element$Array:{t:'u',l:[{t:m$1.Null},'Element$ArrayList']}}}]}},{nm:'sourcePosition',mt:'prm',def:1,$t:{t:m$1.Integer}},{nm:'destinationPosition',mt:'prm',def:1,$t:{t:m$1.Integer}},{nm:'length',mt:'prm',def:1,$t:{t:m$1.Integer}}],$cont:ArrayList,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:ArrayList:$m:copyTo'),m$1.$_throws(m$1.openClass$jsint(m$1.fmp$('ceylon.language','1.3.0','$'),m$1.AssertionError),"if the arguments do not identify meaningful ranges \nwithin the two lists:\n\n- if the given [[sourcePosition]] or \n  [[destinationPosition]] is negative, \n- if `size < sourcePosition+length`, or \n- if `destination.size < destinationPosition+length`.")];},d:['ceylon.collection','ArrayList','$m','copyTo']};};
arrayList$.shrink=function(){
var arrayList$=this;
if((arrayList$.$1dkeuw$1gi.size>arrayList$.$1dkeuw$1gk)){
var $1qx=arrayList$.$1dkeuw$1gm(arrayList$.$1dkeuw$1gk);
arrayList$.$1dkeuw$1gi.copyTo($1qx,0,0,arrayList$.$1dkeuw$1gk);
arrayList$.$1dkeuw$1gi=$1qx;
}
};arrayList$.shrink.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[],$cont:ArrayList,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:ArrayList:$m:shrink')];},d:['ceylon.collection','ArrayList','$m','shrink']};};
})(ArrayList.$$.prototype);
}
return ArrayList;
}
ex$.$init$ArrayList=$init$ArrayList;
$init$ArrayList();
ArrayList.inst$$=function($1qy){
var arrayList$=new ArrayList.$$;
m$1.set_type_args(arrayList$,{Element$ArrayList:$1qy.$$targs$$.Type$Class.a.Element$ArrayList});
m$1.set_type_args(arrayList$,{Element$MutableList:arrayList$.$$targs$$.Element$ArrayList,Element$List:arrayList$.$$targs$$.Element$ArrayList,Element$Collection:arrayList$.$$targs$$.Element$ArrayList,Element$Iterable:arrayList$.$$targs$$.Element$ArrayList,Absent$Iterable:{t:m$1.Null},Element$Category:{t:m$1.$_Object},Item$Correspondence:arrayList$.$$targs$$.Element$ArrayList,Key$Correspondence:{t:m$1.Integer},Subrange$Ranged:{t:m$1.List,a:{Element$List:arrayList$.$$targs$$.Element$ArrayList/*ORALE!Element inv pero Element var*/}},Index$Ranged:{t:m$1.Integer},Element$Ranged:arrayList$.$$targs$$.Element$ArrayList,Element$ListMutator:arrayList$.$$targs$$.Element$ArrayList,Element$IndexedCorrespondenceMutator:arrayList$.$$targs$$.Element$ArrayList,Item$CorrespondenceMutator:arrayList$.$$targs$$.Element$ArrayList,Element$SearchableList:arrayList$.$$targs$$.Element$ArrayList,Element$Stack:arrayList$.$$targs$$.Element$ArrayList,Element$Queue:arrayList$.$$targs$$.Element$ArrayList});
return arrayList$;
};
ArrayList.ser$get$=function(ref,o){var n=ref.attribute.qualifiedName;if(n==='ceylon.collection::ArrayList.initialCapacity')return o.$1dkeuw$1gg_;
else if(n==='ceylon.collection::ArrayList.growthFactor')return o.$1dkeuw$1gh_;
else if(n==='ceylon.collection::ArrayList.array')return o.$1dkeuw$1gi_;
else if(n==='ceylon.collection::ArrayList.length')return o.$1dkeuw$1gk_;
else throw new TypeError('unknown attribute');
};
ArrayList.ser$set$=function(ref,o,i){if(!m$1.is$(ref,{t:m$1.Member$serialization}))throw m$1.AssertionError('unexpected reachable reference');var n=ref.attribute.qualifiedName;
if(n==='ceylon.collection::ArrayList.initialCapacity')o.$1dkeuw$1gg_=i;
else if(n==='ceylon.collection::ArrayList.growthFactor')o.$1dkeuw$1gh_=i;
else if(n==='ceylon.collection::ArrayList.array')o.$1dkeuw$1gi_=i;
else if(n==='ceylon.collection::ArrayList.length')o.$1dkeuw$1gk_=i;
else throw new TypeError('unknown attribute');
};
ArrayList.ser$refs$=function(o){return [m$1.MemberImpl$impl(m$1.OpenValue$jsint(m$1.lmp$(ex$,'ceylon.collection'),o.$prop$get$1dkeuw$1gg)),m$1.MemberImpl$impl(m$1.OpenValue$jsint(m$1.lmp$(ex$,'ceylon.collection'),o.$prop$get$1dkeuw$1gh)),m$1.MemberImpl$impl(m$1.OpenValue$jsint(m$1.lmp$(ex$,'ceylon.collection'),o.$prop$get$1dkeuw$1gi)),m$1.MemberImpl$impl(m$1.OpenValue$jsint(m$1.lmp$(ex$,'ceylon.collection'),o.$prop$get$1dkeuw$1gk))];
};
function PriorityQueue($1dkeuw$1qz,$1dkeuw$1r0,$1dkeuw$1r1,$1dkeuw$1r2,$$targs$$,priorityQueue$){
$init$PriorityQueue();
if(priorityQueue$===undefined)priorityQueue$=new PriorityQueue.$$;
m$1.set_type_args(priorityQueue$,$$targs$$);
priorityQueue$.$1dkeuw$1qz_=$1dkeuw$1qz;
if($1dkeuw$1r0===undefined){$1dkeuw$1r0=$init$PriorityQueue().$defs$initialCapacity(priorityQueue$,$1dkeuw$1qz,$1dkeuw$1r1,$1dkeuw$1r2);}
priorityQueue$.$1dkeuw$1r0_=$1dkeuw$1r0;
if($1dkeuw$1r1===undefined){$1dkeuw$1r1=$init$PriorityQueue().$defs$growthFactor(priorityQueue$,$1dkeuw$1qz,$1dkeuw$1r0,$1dkeuw$1r2);}
priorityQueue$.$1dkeuw$1r1_=$1dkeuw$1r1;
if($1dkeuw$1r2===undefined){$1dkeuw$1r2=$init$PriorityQueue().$defs$elements(priorityQueue$,$1dkeuw$1qz,$1dkeuw$1r0,$1dkeuw$1r1);}
priorityQueue$.$1dkeuw$1r2_=$1dkeuw$1r2;
Queue({Element$Queue:$$targs$$.Element$PriorityQueue},priorityQueue$);
m$1.Collection({Element$Collection:$$targs$$.Element$PriorityQueue/*ORALE!Element inv pero Element var*/},priorityQueue$);
priorityQueue$.$1dkeuw$1qz=$1dkeuw$1qz;
if(priorityQueue$.$1dkeuw$1r3(priorityQueue$.$1dkeuw$1r2)){
priorityQueue$.$1dkeuw$1r4=priorityQueue$.$1dkeuw$1r2.size;
priorityQueue$.$1dkeuw$1r5=priorityQueue$.$1dkeuw$1r6(($1r7=((priorityQueue$.$1dkeuw$1r4>$1dkeuw$1r0)?priorityQueue$.$1dkeuw$1r4:null),m$1.nn$($1r7)?$1r7:$1dkeuw$1r0));
var $1r7;
}
else{
priorityQueue$.$1dkeuw$1r4=(0);
priorityQueue$.$1dkeuw$1r5=priorityQueue$.$1dkeuw$1r6($1dkeuw$1r0);
}
priorityQueue$.$1dkeuw$1r8();
return priorityQueue$;
}
PriorityQueue.$defs$initialCapacity=function(priorityQueue$,$1dkeuw$1qz,$1dkeuw$1r1,$1dkeuw$1r2){return (0)};PriorityQueue.$defs$growthFactor=function(priorityQueue$,$1dkeuw$1qz,$1dkeuw$1r0,$1dkeuw$1r2){return (1.5)};PriorityQueue.$defs$elements=function(priorityQueue$,$1dkeuw$1qz,$1dkeuw$1r0,$1dkeuw$1r1){return m$1.empty()};PriorityQueue.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'compare',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Arguments$Callable:{t:'T',l:['Element$PriorityQueue','Element$PriorityQueue']},Return$Callable:{t:m$1.Comparison}}},$rt:{t:m$1.Comparison},ps:[{nm:'x',mt:'prm',$t:'Element$PriorityQueue'},{nm:'y',mt:'prm',$t:'Element$PriorityQueue'}],an:function(){return[m$1.doc("A comparator function used to order elements.")];}},{nm:'initialCapacity',mt:'prm',def:1,$t:{t:m$1.Integer},an:function(){return[m$1.doc("The initial size of the backing array.")];}},{nm:'growthFactor',mt:'prm',def:1,$t:{t:m$1.Float},an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:PriorityQueue:$at:growthFactor$k15cw7')];}},{nm:'elements',mt:'prm',def:1,$t:{t:m$1.Iterable,a:{Element$Iterable:'Element$PriorityQueue',Absent$Iterable:{t:m$1.Null}}},an:function(){return[m$1.doc("The initial elements of the queue.")];}}],tp:{Element$PriorityQueue:{sts:[{t:m$1.$_Object}]}},sts:[{t:m$1.Collection,a:{Element$Collection:'Element$PriorityQueue'}},{t:Queue,a:{Element$Queue:'Element$PriorityQueue'}}],pa:2049,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:PriorityQueue'),m$1.by(m$1.$arr$sa$(["Loic Rouchon"],{t:m$1.$_String}))];},d:['ceylon.collection','PriorityQueue']};};
ex$.PriorityQueue=PriorityQueue;
function $init$PriorityQueue(){
if(PriorityQueue.$$===undefined){
m$1.initTypeProto(PriorityQueue,'ceylon.collection::PriorityQueue',m$1.Basic,$init$Queue(),m$1.Collection);
(function(priorityQueue$){
m$1.atr$(priorityQueue$,'$1dkeuw$1qz',function(){return this.$1dkeuw$1qz_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Comparison},ps:[{nm:'x',mt:'prm',$t:'Element$PriorityQueue'},{nm:'y',mt:'prm',$t:'Element$PriorityQueue'}],$cont:PriorityQueue,an:function(){return[m$1.doc("A comparator function used to order elements.")];},d:['ceylon.collection','PriorityQueue','$m','compare$gs4c5s']};});
m$1.atr$(priorityQueue$,'$1dkeuw$1r0',function(){return this.$1dkeuw$1r0_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:PriorityQueue,an:function(){return[m$1.doc("The initial size of the backing array.")];},d:['ceylon.collection','PriorityQueue','$at','initialCapacity$gi6pup']};});
m$1.atr$(priorityQueue$,'$1dkeuw$1r1',function(){return this.$1dkeuw$1r1_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Float},$cont:PriorityQueue,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:PriorityQueue:$at:growthFactor$k15cw7')];},d:['ceylon.collection','PriorityQueue','$at','growthFactor$k15cw7']};});
m$1.atr$(priorityQueue$,'$1dkeuw$1r2',function(){return this.$1dkeuw$1r2_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Iterable,a:{Element$Iterable:'Element$PriorityQueue',Absent$Iterable:{t:m$1.Null}}},$cont:PriorityQueue,an:function(){return[m$1.doc("The initial elements of the queue.")];},d:['ceylon.collection','PriorityQueue','$at','elements$ra338u']};});
priorityQueue$.$1dkeuw$1r6=function($1r9){var priorityQueue$=this;
return m$1.$_Array$c_ofSize($1r9,null,{Element$Array:m$1.mut$([{t:m$1.Null},priorityQueue$.$$targs$$.Element$PriorityQueue])});
};
priorityQueue$.$1dkeuw$1r6.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Array,a:{Element$Array:{t:'u',l:[{t:m$1.Null},'Element$PriorityQueue']}}},ps:[{nm:'capacity',mt:'prm',$t:{t:m$1.Integer}}],$cont:PriorityQueue,d:['ceylon.collection','PriorityQueue','$m','store$iohp2k']};};
priorityQueue$.$1dkeuw$1r3=function($1ra){var priorityQueue$=this;
return m$1.is$($1ra,m$1.mut$([{t:m$1.Collection,a:{Element$Collection:priorityQueue$.$$targs$$.Element$PriorityQueue/*ORALE!Element inv pero Element var*/}},{t:m$1.Sequential,a:{Element$Sequential:priorityQueue$.$$targs$$.Element$PriorityQueue/*ORALE!Element inv pero Element var*/}}]));
};
priorityQueue$.$1dkeuw$1r3.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'elements',mt:'prm',$t:{t:m$1.Iterable,a:{Element$Iterable:'Element$PriorityQueue',Absent$Iterable:{t:m$1.Null}}}}],$cont:PriorityQueue,d:['ceylon.collection','PriorityQueue','$m','haveKnownSize$7k454f']};};
m$1.atr$(priorityQueue$,'$1dkeuw$1r5',function(){return this.$1dkeuw$1r5_;},function($1rb){return this.$1dkeuw$1r5_=$1rb;},function(){return{mod:$CCMM$,$t:{t:m$1.$_Array,a:{Element$Array:{t:'u',l:[{t:m$1.Null},'Element$PriorityQueue']}}},$cont:PriorityQueue,pa:1027,d:['ceylon.collection','PriorityQueue','$at','array$3tqqzg']};});
m$1.atr$(priorityQueue$,'$1dkeuw$1r4',function(){return this.$1dkeuw$1r4_;},function($1rc){return this.$1dkeuw$1r4_=$1rc;},function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:PriorityQueue,pa:1027,d:['ceylon.collection','PriorityQueue','$at','length$qkg55j']};});
priorityQueue$.$1dkeuw$1rd=function($1re){
var priorityQueue$=this;
var $1rf=priorityQueue$.$1dkeuw$1r4.plus($1re);
var $1rg=m$1.runtime().maxArraySize;
if(($1rf>$1rg)){
throw m$1.wrapexc(m$1.OverflowException(),'51:12-51:37','ceylon/collection/PriorityQueue.ceylon');
}
if(($1rf>priorityQueue$.$1dkeuw$1r5.size)){
var $1rh=$1rf.times(priorityQueue$.$1dkeuw$1r1).integer;
var $1ri=($1rj=((($1rh<$1rf)||($1rh>$1rg))?$1rg:null),m$1.nn$($1rj)?$1rj:$1rh);
var $1rj;
var $1rk=priorityQueue$.$1dkeuw$1r6($1ri);
priorityQueue$.$1dkeuw$1r5.copyTo($1rk);
priorityQueue$.$1dkeuw$1r5=$1rk;
}
};priorityQueue$.$1dkeuw$1rd.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'increment',mt:'prm',$t:{t:m$1.Integer}}],$cont:PriorityQueue,d:['ceylon.collection','PriorityQueue','$m','grow$kgssjy']};};
priorityQueue$.$1dkeuw$1rl=function($1rm){
var priorityQueue$=this;
priorityQueue$.$1dkeuw$1rd(1);
($1rn=$1rm,priorityQueue$.$1dkeuw$1r5.set(priorityQueue$.$1dkeuw$1r4,$1rn), $1rn);
var $1rn;
($1ro=priorityQueue$.$1dkeuw$1r4,priorityQueue$.$1dkeuw$1r4=$1ro.successor,$1ro);
var $1ro;
};priorityQueue$.$1dkeuw$1rl.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'element',mt:'prm',$t:'Element$PriorityQueue'}],$cont:PriorityQueue,d:['ceylon.collection','PriorityQueue','$m','add$lnahnw']};};
priorityQueue$.$1dkeuw$1rp=function($1rq){var priorityQueue$=this;
return $1rq.plus(1).divided(2).minus(1);
};
priorityQueue$.$1dkeuw$1rp.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'index',mt:'prm',$t:{t:m$1.Integer}}],$cont:PriorityQueue,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:PriorityQueue:$m:parent$w5yb7')];},d:['ceylon.collection','PriorityQueue','$m','parent$w5yb7']};};
priorityQueue$.$1dkeuw$1rr=function($1rs){var priorityQueue$=this;
return $1rs.times(2).plus(1);
};
priorityQueue$.$1dkeuw$1rr.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'index',mt:'prm',$t:{t:m$1.Integer}}],$cont:PriorityQueue,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:PriorityQueue:$m:leftChild$bif9ts')];},d:['ceylon.collection','PriorityQueue','$m','leftChild$bif9ts']};};
priorityQueue$.$1dkeuw$1rt=function($1ru){var priorityQueue$=this;
return $1ru.times(2).plus(2);
};
priorityQueue$.$1dkeuw$1rt.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'index',mt:'prm',$t:{t:m$1.Integer}}],$cont:PriorityQueue,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:PriorityQueue:$m:rightChild$rhsywd')];},d:['ceylon.collection','PriorityQueue','$m','rightChild$rhsywd']};};
priorityQueue$.$1dkeuw$1rv=function($1rw){
var priorityQueue$=this;
var $1rx;
m$1.asrt$((m$1.nn$(($1rx=priorityQueue$.$1dkeuw$1r5.$_get($1rw)))),"Assertion failed: \'exists element = array[index]\' at PriorityQueue.ceylon (91:14-91:44)",'91:8-91:45','PriorityQueue.ceylon');
return $1rx;
};priorityQueue$.$1dkeuw$1rv.$crtmm$=function(){return{mod:$CCMM$,$t:'Element$PriorityQueue',ps:[{nm:'index',mt:'prm',$t:{t:m$1.Integer}}],$cont:PriorityQueue,d:['ceylon.collection','PriorityQueue','$m','elt$lqn120']};};
priorityQueue$.$1dkeuw$1ry=function($1rz,$1s0){var priorityQueue$=this;
return priorityQueue$.$1dkeuw$1qz(priorityQueue$.$1dkeuw$1rv($1rz),priorityQueue$.$1dkeuw$1rv($1s0));
};
priorityQueue$.$1dkeuw$1ry.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Comparison},ps:[{nm:'first',mt:'prm',$t:{t:m$1.Integer}},{nm:'second',mt:'prm',$t:{t:m$1.Integer}}],$cont:PriorityQueue,d:['ceylon.collection','PriorityQueue','$m','compareIndexes$ilkd5i']};};
priorityQueue$.$1dkeuw$1s1=function($1s2,$1s3){
var priorityQueue$=this;
var $1s4=priorityQueue$.$1dkeuw$1r5.$_get($1s2);
($1s5=priorityQueue$.$1dkeuw$1r5.$_get($1s3),priorityQueue$.$1dkeuw$1r5.set($1s2,$1s5), $1s5);
var $1s5;
($1s6=$1s4,priorityQueue$.$1dkeuw$1r5.set($1s3,$1s6), $1s6);
var $1s6;
};priorityQueue$.$1dkeuw$1s1.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'first',mt:'prm',$t:{t:m$1.Integer}},{nm:'second',mt:'prm',$t:{t:m$1.Integer}}],$cont:PriorityQueue,d:['ceylon.collection','PriorityQueue','$m','swap$snqivi']};};
priorityQueue$.$1dkeuw$1s7=function($1s8){
var priorityQueue$=this;
if(($1s8==(0))){
return;
}
var $1s9=priorityQueue$.$1dkeuw$1rp($1s8);
if(m$1.$eq$(priorityQueue$.$1dkeuw$1ry($1s8,$1s9),m$1.smaller())){
priorityQueue$.$1dkeuw$1s1($1s8,$1s9);
priorityQueue$.$1dkeuw$1s7($1s9);
}
};priorityQueue$.$1dkeuw$1s7.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'index',mt:'prm',$t:{t:m$1.Integer}}],$cont:PriorityQueue,d:['ceylon.collection','PriorityQueue','$m','bubbleUp$yevw4e']};};
priorityQueue$.$1dkeuw$1sa=function($1sb){
var priorityQueue$=this;
var $1sc=priorityQueue$.$1dkeuw$1rr($1sb);
if(($1sc>=priorityQueue$.$1dkeuw$1r4)){
return null;
}
var $1sd=priorityQueue$.$1dkeuw$1rt($1sb);
if(($1sd>=priorityQueue$.$1dkeuw$1r4)){
return $1sc;
}
var $1se=priorityQueue$.$1dkeuw$1ry($1sc,$1sd);
if(m$1.$eq$($1se,m$1.smaller())){
return $1sc;
}
return $1sd;
};priorityQueue$.$1dkeuw$1sa.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]},ps:[{nm:'index',mt:'prm',$t:{t:m$1.Integer}}],$cont:PriorityQueue,d:['ceylon.collection','PriorityQueue','$m','minChildrenIndex$1y297w']};};
priorityQueue$.$1dkeuw$1sf=function($1sg){
var priorityQueue$=this;
var $1sh;
if(m$1.nn$(($1sh=priorityQueue$.$1dkeuw$1sa($1sg)))&&m$1.$eq$(priorityQueue$.$1dkeuw$1ry($1sh,$1sg),m$1.smaller())){
priorityQueue$.$1dkeuw$1s1($1sg,$1sh);
priorityQueue$.$1dkeuw$1sf($1sh);
}
};priorityQueue$.$1dkeuw$1sf.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'index',mt:'prm',$t:{t:m$1.Integer}}],$cont:PriorityQueue,d:['ceylon.collection','PriorityQueue','$m','bubbleDown$daf9xt']};};
priorityQueue$.$1dkeuw$1r8=function(){
var priorityQueue$=this;
if(priorityQueue$.$1dkeuw$1r3(priorityQueue$.$1dkeuw$1r2)){
var $1si=(0);
var $1sk;for(var $1sj=priorityQueue$.$1dkeuw$1r2.iterator();($1sk=$1sj.next())!==m$1.finished();){
($1sl=$1sk,priorityQueue$.$1dkeuw$1r5.set(($1sm=$1si,$1si=$1sm.successor,$1sm),$1sl), $1sl);
var $1sl,$1sm;
}
}
else{
var $1so;for(var $1sn=priorityQueue$.$1dkeuw$1r2.iterator();($1so=$1sn.next())!==m$1.finished();){
priorityQueue$.$1dkeuw$1rl($1so);
}
}
if((priorityQueue$.$1dkeuw$1r4>0)){
var $1sq=priorityQueue$.$1dkeuw$1rp(priorityQueue$.$1dkeuw$1r4.minus(1)),$1sp=(0),$1sr=$1sq.compare($1sp),$1ss=$1sr===m$1.smaller()?'successor':'predecessor';for(var $1st=m$1.eorl$($1sr);$1st($1sp,$1sq);$1sq=$1sq[$1ss]){
priorityQueue$.$1dkeuw$1sf($1sq);
}
}
};priorityQueue$.$1dkeuw$1r8.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[],$cont:PriorityQueue,d:['ceylon.collection','PriorityQueue','$m','addInitialElements$lh42w3']};};
m$1.atr$(priorityQueue$,'size',function(){
var priorityQueue$=this;
return priorityQueue$.$1dkeuw$1r4;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:PriorityQueue,pa:3,d:['ceylon.collection','PriorityQueue','$at','size']};});
m$1.atr$(priorityQueue$,'front',function(){
var priorityQueue$=this;
return priorityQueue$.$1dkeuw$1r5.$_get(0);
},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$PriorityQueue']},$cont:PriorityQueue,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:PriorityQueue:$at:front')];},d:['ceylon.collection','PriorityQueue','$at','front']};});
m$1.atr$(priorityQueue$,'last',function(){
var priorityQueue$=this;
return priorityQueue$.$1dkeuw$1r5.$_get(priorityQueue$.$1dkeuw$1r4.minus(1));
},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$PriorityQueue']},$cont:PriorityQueue,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:PriorityQueue:$at:last')];},d:['ceylon.collection','PriorityQueue','$at','last']};});
m$1.atr$(priorityQueue$,'back',function(){
var priorityQueue$=this;
return priorityQueue$.last;
},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$PriorityQueue']},$cont:PriorityQueue,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:PriorityQueue:$at:back')];},d:['ceylon.collection','PriorityQueue','$at','back']};});
priorityQueue$.offer=function($1sx){
var priorityQueue$=this;
priorityQueue$.$1dkeuw$1rl($1sx);
priorityQueue$.$1dkeuw$1s7(priorityQueue$.$1dkeuw$1r4.minus(1));
};priorityQueue$.offer.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'element',mt:'prm',$t:'Element$PriorityQueue'}],$cont:PriorityQueue,pa:3,an:function(){return[m$1.doc("Add a new element to the queue.")];},d:['ceylon.collection','PriorityQueue','$m','offer']};};
priorityQueue$.accept=function(){
var priorityQueue$=this;
var $1sy=priorityQueue$.front;
if((priorityQueue$.$1dkeuw$1r4>0)){
($1sz=priorityQueue$.last,priorityQueue$.$1dkeuw$1r5.set((0),$1sz), $1sz);
var $1sz;
($1t0=null,priorityQueue$.$1dkeuw$1r5.set((priorityQueue$.$1dkeuw$1r4=priorityQueue$.$1dkeuw$1r4.predecessor),$1t0), $1t0);
var $1t0;
priorityQueue$.$1dkeuw$1sf(0);
}
return $1sy;
};priorityQueue$.accept.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$PriorityQueue']},ps:[],$cont:PriorityQueue,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:PriorityQueue:$m:accept')];},d:['ceylon.collection','PriorityQueue','$m','accept']};};
priorityQueue$.iterator=function(){
var priorityQueue$=this;
if((priorityQueue$.$1dkeuw$1r4>0)){
var $1t1=(function(){function $1t2($$targs$$){
var $1t2$=new $1t2.$$;$1t2$.outer$=priorityQueue$;
$1t2$.$$targs$$=$$targs$$;
m$1.Iterator({Element$Iterator:priorityQueue$.$$targs$$.Element$PriorityQueue/*ORALE!Element inv pero Element var*/},$1t2$);
$1t2$.$1dkeuw$1t4_=(0);
$1t2$.$prop$get$1dkeuw$1t4={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$1t2,pa:1024,d:['ceylon.collection','PriorityQueue','$m','iterator','$o','it$vzhf3q','$at','index$epjk09']};}};
$1t2$.$prop$get$1dkeuw$1t4.get=function(){return $1dkeuw$1t4};
return $1t2$;
};$1t2.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},$cont:priorityQueue$.iterator,sts:[{t:m$1.Iterator,a:{Element$Iterator:'Element$PriorityQueue'}}],d:['ceylon.collection','PriorityQueue','$m','iterator','$o','it$vzhf3q']};};
function $init$$1t2(){
if($1t2.$$===undefined){
m$1.initTypeProto($1t2,'ceylon.collection::PriorityQueue.iterator.it',m$1.Basic,m$1.Iterator);
(function($1t2$){
m$1.atr$($1t2$,'$1dkeuw$1t4',function(){return this.$1dkeuw$1t4_;},function($1t5){return this.$1dkeuw$1t4_=$1t5;},function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$1t2,pa:1024,d:['ceylon.collection','PriorityQueue','$m','iterator','$o','it$vzhf3q','$at','index$epjk09']};});
$1t2$.next=function(){
var $1t2$=this;
var $1t6=priorityQueue$.$1dkeuw$1r5.$_get($1t2$.$1dkeuw$1t4);
var $1t7;
if(m$1.nn$(($1t7=$1t6))){
($1t8=$1t2$.$1dkeuw$1t4,$1t2$.$1dkeuw$1t4=$1t8.successor,$1t8);
var $1t8;
return $1t7;
}
function $1t9(){return $1t6;}
m$1.asrt$((($1t2$.$1dkeuw$1t4==priorityQueue$.$1dkeuw$1r4)),"Assertion failed: \'index == length\' at PriorityQueue.ceylon (209:26-209:42)",'209:20-209:43','PriorityQueue.ceylon');
return m$1.finished();
};$1t2$.next.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:['Element$PriorityQueue',{t:m$1.Finished}]},ps:[],$cont:$1t2,pa:3,d:['ceylon.collection','PriorityQueue','$m','iterator','$o','it$vzhf3q','$m','next']};};
})($1t2.$$.prototype);
}
return $1t2;
}
priorityQueue$.$init$$1t2=$init$$1t2;
$init$$1t2();
var $1ta;
function $1t3(){
if($1ta===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'it\' before it was set"),'201:12-213:12','PriorityQueue.ceylon');
if($1ta===undefined){$1ta=m$1.INIT$;$1ta=$init$$1t2()({Element$Iterator:priorityQueue$.$$targs$$.Element$PriorityQueue/*ORALE!Element inv pero Element var*/});$1ta.$crtmm$=$1t3.$crtmm$;}
return $1ta;
}
$1t3.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$init$$1t2()},$cont:priorityQueue$.iterator,d:['ceylon.collection','PriorityQueue','$m','iterator','$o','it$vzhf3p']};};
$prop$get$1t2=$1t3;
$1t3();
return $1t3();
}());if($1t1!==undefined){return $1t1;}
}
else{
return m$1.emptyIterator();
}
};priorityQueue$.iterator.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Iterator,a:{Element$Iterator:'Element$PriorityQueue'}},ps:[],$cont:PriorityQueue,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:PriorityQueue:$m:iterator')];},d:['ceylon.collection','PriorityQueue','$m','iterator']};};
priorityQueue$.clone=function(){
var priorityQueue$=this;
var $1tb=($1tc=m$1.jsc$2(priorityQueue$.$1dkeuw$1qz,[{nm:'x',mt:'prm',$t:priorityQueue$.$$targs$$.Element$PriorityQueue},{nm:'y',mt:'prm',$t:priorityQueue$.$$targs$$.Element$PriorityQueue}],{Arguments$Callable:m$1.mtt$([priorityQueue$.$$targs$$.Element$PriorityQueue,priorityQueue$.$$targs$$.Element$PriorityQueue]),Return$Callable:{t:m$1.Comparison}}),$1td=priorityQueue$.$1dkeuw$1r4,$1te=priorityQueue$.$1dkeuw$1r1,PriorityQueue($1tc,$1td,$1te,undefined,{Element$PriorityQueue:priorityQueue$.$$targs$$.Element$PriorityQueue}));
var $1tc,$1td,$1te;
($1tb.$1dkeuw$1r4=priorityQueue$.$1dkeuw$1r4);
($1tb.$1dkeuw$1r5=priorityQueue$.$1dkeuw$1r5.clone());
return $1tb;
};priorityQueue$.clone.$crtmm$=function(){return{mod:$CCMM$,$t:{t:PriorityQueue,a:{Element$PriorityQueue:'Element$PriorityQueue'}},ps:[],$cont:PriorityQueue,pa:3,d:['ceylon.collection','PriorityQueue','$m','clone']};};
})(PriorityQueue.$$.prototype);
}
return PriorityQueue;
}
ex$.$init$PriorityQueue=$init$PriorityQueue;
$init$PriorityQueue();
PriorityQueue.inst$$=function($1tf){
var priorityQueue$=new PriorityQueue.$$;
m$1.set_type_args(priorityQueue$,{Element$PriorityQueue:$1tf.$$targs$$.Type$Class.a.Element$PriorityQueue});
m$1.set_type_args(priorityQueue$,{Element$Collection:priorityQueue$.$$targs$$.Element$PriorityQueue,Element$Iterable:priorityQueue$.$$targs$$.Element$PriorityQueue,Absent$Iterable:{t:m$1.Null},Element$Category:{t:m$1.$_Object},Element$Queue:priorityQueue$.$$targs$$.Element$PriorityQueue});
return priorityQueue$;
};
PriorityQueue.ser$get$=function(ref,o){var n=ref.attribute.qualifiedName;if(n==='ceylon.collection::PriorityQueue.growthFactor')return o.$1dkeuw$1r1_;
else if(n==='ceylon.collection::PriorityQueue.elements')return o.$1dkeuw$1r2_;
else if(n==='ceylon.collection::PriorityQueue.array')return o.$1dkeuw$1r5_;
else if(n==='ceylon.collection::PriorityQueue.length')return o.$1dkeuw$1r4_;
else throw new TypeError('unknown attribute');
};
PriorityQueue.ser$set$=function(ref,o,i){if(!m$1.is$(ref,{t:m$1.Member$serialization}))throw m$1.AssertionError('unexpected reachable reference');var n=ref.attribute.qualifiedName;
if(n==='ceylon.collection::PriorityQueue.growthFactor')o.$1dkeuw$1r1_=i;
else if(n==='ceylon.collection::PriorityQueue.elements')o.$1dkeuw$1r2_=i;
else if(n==='ceylon.collection::PriorityQueue.array')o.$1dkeuw$1r5_=i;
else if(n==='ceylon.collection::PriorityQueue.length')o.$1dkeuw$1r4_=i;
else throw new TypeError('unknown attribute');
};
PriorityQueue.ser$refs$=function(o){return [m$1.MemberImpl$impl(m$1.OpenValue$jsint(m$1.lmp$(ex$,'ceylon.collection'),o.$prop$get$1dkeuw$1r1)),m$1.MemberImpl$impl(m$1.OpenValue$jsint(m$1.lmp$(ex$,'ceylon.collection'),o.$prop$get$1dkeuw$1r2)),m$1.MemberImpl$impl(m$1.OpenValue$jsint(m$1.lmp$(ex$,'ceylon.collection'),o.$prop$get$1dkeuw$1r5)),m$1.MemberImpl$impl(m$1.OpenValue$jsint(m$1.lmp$(ex$,'ceylon.collection'),o.$prop$get$1dkeuw$1r4))];
};
function IdentitySet($1dkeuw$1tg,$1dkeuw$1th,$$targs$$,identitySet$){
$init$IdentitySet();
if(identitySet$===undefined)identitySet$=new IdentitySet.$$;
m$1.set_type_args(identitySet$,$$targs$$);
if($1dkeuw$1tg===undefined){$1dkeuw$1tg=$init$IdentitySet().$defs$hashtable(identitySet$,$1dkeuw$1th);}
identitySet$.$1dkeuw$1tg_=$1dkeuw$1tg;
if($1dkeuw$1th===undefined){$1dkeuw$1th=$init$IdentitySet().$defs$elements(identitySet$,$1dkeuw$1tg);}
identitySet$.$1dkeuw$1th_=$1dkeuw$1th;
m$1.Iterable({Element$Iterable:$$targs$$.Element$IdentitySet/*ORALE!Element inv pero Element var*/,Absent$Iterable:{t:m$1.Null}},identitySet$);
m$1.Collection({Element$Collection:$$targs$$.Element$IdentitySet/*ORALE!Element inv pero Element var*/},identitySet$);
identitySet$.$1dkeuw$1ti_=elementStore(identitySet$.$1dkeuw$1tg.initialCapacity,{Element$elementStore:identitySet$.$$targs$$.Element$IdentitySet});
identitySet$.$1dkeuw$1tj_=(0);
var $1tl;for(var $1tk=$1dkeuw$1th.iterator();($1tl=$1tk.next())!==m$1.finished();){
if(identitySet$.$1dkeuw$1tm(identitySet$.$1dkeuw$1ti,$1tl)){
($1tn=identitySet$.$1dkeuw$1tj,identitySet$.$1dkeuw$1tj=$1tn.successor,$1tn);
var $1tn;
}
}
identitySet$.$1dkeuw$1to();
return identitySet$;
}
IdentitySet.$defs$hashtable=function(identitySet$,$1dkeuw$1th){return Hashtable()};IdentitySet.$defs$elements=function(identitySet$,$1dkeuw$1tg){return m$1.empty()};IdentitySet.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'hashtable',mt:'prm',def:1,$t:{t:Hashtable},an:function(){return[m$1.doc("Performance-related settings for the backing array.")];}},{nm:'elements',mt:'prm',def:1,$t:{t:m$1.Iterable,a:{Element$Iterable:'Element$IdentitySet',Absent$Iterable:{t:m$1.Null}}},an:function(){return[m$1.doc("The initial elements of the set.")];}}],tp:{Element$IdentitySet:{sts:[{t:m$1.Identifiable}]}},sts:[{t:m$1.Iterable,a:{Element$Iterable:'Element$IdentitySet',Absent$Iterable:{t:m$1.Null}}},{t:m$1.Collection,a:{Element$Collection:'Element$IdentitySet'}}],pa:2049,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:IdentitySet'),m$1.by(m$1.$arr$sa$(["Gavin King"],{t:m$1.$_String}))];},d:['ceylon.collection','IdentitySet']};};
ex$.IdentitySet=IdentitySet;
function $init$IdentitySet(){
if(IdentitySet.$$===undefined){
m$1.initTypeProto(IdentitySet,'ceylon.collection::IdentitySet',m$1.Basic,m$1.Iterable,m$1.Collection);
(function(identitySet$){
m$1.atr$(identitySet$,'$1dkeuw$1tg',function(){return this.$1dkeuw$1tg_;},undefined,function(){return{mod:$CCMM$,$t:{t:Hashtable},$cont:IdentitySet,an:function(){return[m$1.doc("Performance-related settings for the backing array.")];},d:['ceylon.collection','IdentitySet','$at','hashtable$x4421u']};});
m$1.atr$(identitySet$,'$1dkeuw$1th',function(){return this.$1dkeuw$1th_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Iterable,a:{Element$Iterable:'Element$IdentitySet',Absent$Iterable:{t:m$1.Null}}},$cont:IdentitySet,an:function(){return[m$1.doc("The initial elements of the set.")];},d:['ceylon.collection','IdentitySet','$at','elements$7yiv9d']};});
m$1.atr$(identitySet$,'$1dkeuw$1ti',function(){return this.$1dkeuw$1ti_;},function($1tp){return this.$1dkeuw$1ti_=$1tp;},function(){return{mod:$CCMM$,$t:{t:m$1.$_Array,a:{Element$Array:{t:'u',l:[{t:m$1.Null},{t:Cell,a:{Element$Cell:'Element$IdentitySet'}}]}}},$cont:IdentitySet,pa:1027,d:['ceylon.collection','IdentitySet','$at','store$h40eed']};});
m$1.atr$(identitySet$,'$1dkeuw$1tj',function(){return this.$1dkeuw$1tj_;},function($1tq){return this.$1dkeuw$1tj_=$1tq;},function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:IdentitySet,pa:1027,d:['ceylon.collection','IdentitySet','$at','length$8o5tco']};});
identitySet$.$1dkeuw$1tr=function($1ts,$1tt){var identitySet$=this;
return m$1.identityHash($1ts).remainder($1tt.size).magnitude;
};
identitySet$.$1dkeuw$1tr.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'elem',mt:'prm',$t:{t:m$1.Identifiable}},{nm:'store',mt:'prm',$t:{t:m$1.$_Array,a:{Element$Array:{t:'u',l:[{t:m$1.Null},{t:Cell,a:{Element$Cell:'Element$IdentitySet'}}]}}}}],$cont:IdentitySet,d:['ceylon.collection','IdentitySet','$m','storeIndex$6q98a3']};};
identitySet$.$1dkeuw$1tm=function($1tu,$1tv){
var identitySet$=this;
var $1tw=identitySet$.$1dkeuw$1tr($1tv,$1tu);
var $1tx=$1tu.$_get($1tw);
var $1ty=$1tx;
var $1tz;
while(m$1.nn$(($1tz=$1ty))){
if(($1tz.element===$1tv)){
($1tz.element=$1tv);
return false;
}
$1ty=$1tz.rest;
}
($1u0=Cell($1tv,$1tx,{Element$Cell:identitySet$.$$targs$$.Element$IdentitySet}),$1tu.set($1tw,$1u0), $1u0);
var $1u0;
return true;
};identitySet$.$1dkeuw$1tm.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'store',mt:'prm',$t:{t:m$1.$_Array,a:{Element$Array:{t:'u',l:[{t:m$1.Null},{t:Cell,a:{Element$Cell:'Element$IdentitySet'}}]}}}},{nm:'element',mt:'prm',$t:'Element$IdentitySet'}],$cont:IdentitySet,d:['ceylon.collection','IdentitySet','$m','addToStore$vvwctb']};};
identitySet$.$1dkeuw$1to=function(){
var identitySet$=this;
if(identitySet$.$1dkeuw$1tg.rehash(identitySet$.$1dkeuw$1tj,identitySet$.$1dkeuw$1ti.size)){
var $1u1=elementStore(identitySet$.$1dkeuw$1tg.capacity(identitySet$.$1dkeuw$1tj),{Element$elementStore:identitySet$.$$targs$$.Element$IdentitySet});
var $1u2=(0);
while(($1u2<identitySet$.$1dkeuw$1ti.size)){
var $1u3=identitySet$.$1dkeuw$1ti.$_get($1u2);
var $1u4;
while(m$1.nn$(($1u4=$1u3))){
$1u3=$1u4.rest;
var $1u5=identitySet$.$1dkeuw$1tr($1u4.element,$1u1);
var $1u6=$1u1.$_get($1u5);
($1u4.rest=$1u6);
($1u7=$1u4,$1u1.set($1u5,$1u7), $1u7);
var $1u7;
}
($1u8=$1u2,$1u2=$1u8.successor,$1u8);
var $1u8;
}
identitySet$.$1dkeuw$1ti=$1u1;
}
};identitySet$.$1dkeuw$1to.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[],$cont:IdentitySet,d:['ceylon.collection','IdentitySet','$m','checkRehash$920jqb']};};
identitySet$.add=function($1u9){
var identitySet$=this;
if(identitySet$.$1dkeuw$1tm(identitySet$.$1dkeuw$1ti,$1u9)){
($1ua=identitySet$.$1dkeuw$1tj,identitySet$.$1dkeuw$1tj=$1ua.successor,$1ua);
var $1ua;
identitySet$.$1dkeuw$1to();
return true;
}
return false;
};identitySet$.add.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'element',mt:'prm',$t:'Element$IdentitySet'}],$cont:IdentitySet,pa:1,d:['ceylon.collection','IdentitySet','$m','add']};};
identitySet$.addAll=function($1ub){
var identitySet$=this;
var $1uc=false;
var $1ue;for(var $1ud=$1ub.iterator();($1ue=$1ud.next())!==m$1.finished();){
($1uc=$1uc||identitySet$.add($1ue));
}
if($1uc){
identitySet$.$1dkeuw$1to();
}
return $1uc;
};identitySet$.addAll.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'elements',mt:'prm',$t:{t:m$1.Iterable,a:{Element$Iterable:'Element$IdentitySet',Absent$Iterable:{t:m$1.Null}}}}],$cont:IdentitySet,pa:1,d:['ceylon.collection','IdentitySet','$m','addAll']};};
identitySet$.remove=function($1uf){
var identitySet$=this;
var $1ug=identitySet$.$1dkeuw$1tr($1uf,identitySet$.$1dkeuw$1ti);
var $1uh;
if(m$1.nn$(($1uh=identitySet$.$1dkeuw$1ti.$_get($1ug)))&&($1uh.element===$1uf)){
($1ui=$1uh.rest,identitySet$.$1dkeuw$1ti.set($1ug,$1ui), $1ui);
var $1ui;
($1uj=identitySet$.$1dkeuw$1tj,identitySet$.$1dkeuw$1tj=$1uj.predecessor,$1uj);
var $1uj;
return true;
}
var $1uk=identitySet$.$1dkeuw$1ti.$_get($1ug);
var $1ul;
while(m$1.nn$(($1ul=$1uk))){
var $1um=$1ul.rest;
var $1un;
if(m$1.nn$(($1un=$1um))&&($1un.element===$1uf)){
($1ul.rest=$1un.rest);
($1uo=identitySet$.$1dkeuw$1tj,identitySet$.$1dkeuw$1tj=$1uo.predecessor,$1uo);
var $1uo;
return true;
}
else{
$1uk=$1um;
}
}
return false;
};identitySet$.remove.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'element',mt:'prm',$t:'Element$IdentitySet'}],$cont:IdentitySet,pa:1,d:['ceylon.collection','IdentitySet','$m','remove']};};
identitySet$.removeAll=function($1up){
var identitySet$=this;
var $1uq=false;
var $1us;for(var $1ur=$1up.iterator();($1us=$1ur.next())!==m$1.finished();){
if(identitySet$.remove($1us)){
$1uq=true;
}
}
return $1uq;
};identitySet$.removeAll.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'elements',mt:'prm',$t:{t:m$1.Iterable,a:{Element$Iterable:'Element$IdentitySet',Absent$Iterable:{t:m$1.Null}}}}],$cont:IdentitySet,pa:1,d:['ceylon.collection','IdentitySet','$m','removeAll']};};
identitySet$.clear=function(){
var identitySet$=this;
var $1ut=(0);
while(($1ut<identitySet$.$1dkeuw$1ti.size)){
($1uu=null,identitySet$.$1dkeuw$1ti.set(($1uv=$1ut,$1ut=$1uv.successor,$1uv),$1uu), $1uu);
var $1uu,$1uv;
}
identitySet$.$1dkeuw$1tj=(0);
};identitySet$.clear.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[],$cont:IdentitySet,pa:1,an:function(){return[m$1.doc("Removes every element")];},d:['ceylon.collection','IdentitySet','$m','clear']};};
m$1.atr$(identitySet$,'size',function(){
var identitySet$=this;
return identitySet$.$1dkeuw$1tj;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:IdentitySet,pa:3,d:['ceylon.collection','IdentitySet','$at','size']};});
identitySet$.iterator=function(){var identitySet$=this;
return StoreIterator(identitySet$.$1dkeuw$1ti,{Element$StoreIterator:identitySet$.$$targs$$.Element$IdentitySet});
};identitySet$.count=function($1uw){
var identitySet$=this;
var $1ux=(0);
var $1uy=(0);
while(($1uy<identitySet$.$1dkeuw$1ti.size)){
var $1uz=identitySet$.$1dkeuw$1ti.$_get($1uy);
var $1v0;
while(m$1.nn$(($1v0=$1uz))){
if($1uw($1v0.element)){
($1v1=$1ux,$1ux=$1v1.successor,$1v1);
var $1v1;
}
$1uz=$1v0.rest;
}
($1v2=$1uy,$1uy=$1v2.successor,$1v2);
var $1v2;
}
return $1ux;
};identitySet$.count.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'selecting',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Arguments$Callable:{t:'T',l:['Element$IdentitySet']},Return$Callable:{t:m$1.$_Boolean}}},$rt:{t:m$1.$_Boolean},ps:[{nm:'element',mt:'prm',$t:'Element$IdentitySet'}]}],$cont:IdentitySet,pa:3,d:['ceylon.collection','IdentitySet','$m','count']};};
identitySet$.each=function($1v3){
var identitySet$=this;
identitySet$.$1dkeuw$1ti.each(m$1.jsc$2((function($1v4){
var $1v5=$1v4;
$prop$get$1v5={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:Cell,a:{Element$Cell:'Element$IdentitySet'}}]},$cont:identitySet$.each,pa:1027,d:['ceylon.collection','IdentitySet','$m','each','$at','iter$sd0mqa']};}};
$prop$get$1v5.get=function(){return $1v5};
var $1v6;
while(m$1.nn$(($1v6=$1v5))){
$1v3($1v6.element);
$1v5=$1v6.rest;
}
}),[{nm:'bucket',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},{t:Cell,a:{Element$Cell:identitySet$.$$targs$$.Element$IdentitySet}}]}}],{Arguments$Callable:m$1.mtt$([m$1.mut$([{t:m$1.Null},{t:Cell,a:{Element$Cell:identitySet$.$$targs$$.Element$IdentitySet}}])]),Return$Callable:{t:m$1.Anything}}));
};identitySet$.each.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'step',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Arguments$Callable:{t:'T',l:['Element$IdentitySet']},Return$Callable:{t:m$1.Anything}}},$rt:{t:m$1.Anything},ps:[{nm:'element',mt:'prm',$t:'Element$IdentitySet'}]}],$cont:IdentitySet,pa:3,d:['ceylon.collection','IdentitySet','$m','each']};};
m$1.atr$(identitySet$,'hash',function(){
var identitySet$=this;
var $1v7=(0);
var $1v8=(17);
while(($1v7<identitySet$.$1dkeuw$1ti.size)){
var $1v9=identitySet$.$1dkeuw$1ti.$_get($1v7);
var $1va;
while(m$1.nn$(($1va=$1v9))){
$1v8=$1v8.times(31).plus(m$1.identityHash($1va));
$1v9=$1va.rest;
}
($1vb=$1v7,$1v7=$1vb.successor,$1vb);
var $1vb;
}
return $1v8;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:IdentitySet,pa:3,d:['ceylon.collection','IdentitySet','$at','hash']};});identitySet$.equals=function($1vc){
var identitySet$=this;
var $1vd;
if(m$1.is$(($1vd=$1vc),{t:IdentitySet,a:{Element$IdentitySet:{t:m$1.$_Object}}})&&(identitySet$.size==$1vd.size)){
var $1ve=(0);
while(($1ve<identitySet$.$1dkeuw$1ti.size)){
var $1vf=identitySet$.$1dkeuw$1ti.$_get($1ve);
var $1vg;
while(m$1.nn$(($1vg=$1vf))){
if(!$1vd.contains($1vg.element)){
return false;
}
$1vf=$1vg.rest;
}
($1vh=$1ve,$1ve=$1vh.successor,$1vh);
var $1vh;
}
return true;
}
return false;
};identitySet$.equals.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'that',mt:'prm',$t:{t:m$1.$_Object}}],$cont:IdentitySet,pa:3,d:['ceylon.collection','IdentitySet','$m','equals']};};
identitySet$.clone=function(){
var identitySet$=this;
var $1vi=IdentitySet(undefined,undefined,{Element$IdentitySet:identitySet$.$$targs$$.Element$IdentitySet});
($1vi.$1dkeuw$1tj=identitySet$.$1dkeuw$1tj);
($1vi.$1dkeuw$1ti=elementStore(identitySet$.$1dkeuw$1ti.size,{Element$elementStore:identitySet$.$$targs$$.Element$IdentitySet}));
var $1vj=(0);
while(($1vj<identitySet$.$1dkeuw$1ti.size)){
var $1vk;
if(m$1.nn$(($1vk=identitySet$.$1dkeuw$1ti.$_get($1vj)))){
($1vl=$1vk.clone(),$1vi.$1dkeuw$1ti.set($1vj,$1vl), $1vl);
var $1vl;
}
($1vm=$1vj,$1vj=$1vm.successor,$1vm);
var $1vm;
}
return $1vi;
};identitySet$.clone.$crtmm$=function(){return{mod:$CCMM$,$t:{t:IdentitySet,a:{Element$IdentitySet:'Element$IdentitySet'}},ps:[],$cont:IdentitySet,pa:3,d:['ceylon.collection','IdentitySet','$m','clone']};};
identitySet$.contains=function($1vn){
var identitySet$=this;
var $1vo;
if(m$1.is$(($1vo=$1vn),{t:m$1.Identifiable})){
var $1vp=(0);
while(($1vp<identitySet$.$1dkeuw$1ti.size)){
var $1vq=identitySet$.$1dkeuw$1ti.$_get($1vp);
var $1vr;
while(m$1.nn$(($1vr=$1vq))){
if(($1vr.element===$1vo)){
return true;
}
$1vq=$1vr.rest;
}
($1vs=$1vp,$1vp=$1vs.successor,$1vs);
var $1vs;
}
}
return false;
};identitySet$.contains.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'element',mt:'prm',$t:{t:m$1.$_Object}}],$cont:IdentitySet,pa:3,d:['ceylon.collection','IdentitySet','$m','contains']};};
identitySet$.superset=function($1vt,$1dp37t$){
var identitySet$=this;
var $1vv;for(var $1vu=$1vt.iterator();($1vv=$1vu.next())!==m$1.finished();){
if(!m$1.$cnt$(identitySet$,$1vv)){
return false;
}
}
if(m$1.finished()===$1vv){
return true;
}
};identitySet$.superset.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'set',mt:'prm',$t:{t:IdentitySet,a:{Element$IdentitySet:'Other$superset'}}}],$cont:IdentitySet,tp:{Other$superset:{sts:[{t:m$1.Identifiable}]}},pa:9,d:['ceylon.collection','IdentitySet','$m','superset']};};
identitySet$.subset=function($1vw,$emo084$){
var identitySet$=this;
var $1vy;for(var $1vx=identitySet$.iterator();($1vy=$1vx.next())!==m$1.finished();){
if(!m$1.$cnt$($1vw,$1vy)){
return false;
}
}
if(m$1.finished()===$1vy){
return true;
}
};identitySet$.subset.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'set',mt:'prm',$t:{t:IdentitySet,a:{Element$IdentitySet:'Other$subset'}}}],$cont:IdentitySet,tp:{Other$subset:{sts:[{t:m$1.Identifiable}]}},pa:9,d:['ceylon.collection','IdentitySet','$m','subset']};};
identitySet$.complement=function($1vz,$3sj2l4$){
var identitySet$=this;
var $1w0=IdentitySet(undefined,undefined,{Element$IdentitySet:identitySet$.$$targs$$.Element$IdentitySet});
var $1w2;for(var $1w1=identitySet$.iterator();($1w2=$1w1.next())!==m$1.finished();){
if(!$1vz.contains($1w2)){
$1w0.add($1w2);
}
}
return $1w0;
};identitySet$.complement.$crtmm$=function(){return{mod:$CCMM$,$t:{t:IdentitySet,a:{Element$IdentitySet:'Element$IdentitySet'}},ps:[{nm:'set',mt:'prm',$t:{t:IdentitySet,a:{Element$IdentitySet:'Other$complement'}}}],$cont:IdentitySet,tp:{Other$complement:{sts:[{t:m$1.Identifiable}]}},pa:1,d:['ceylon.collection','IdentitySet','$m','complement']};};
identitySet$.exclusiveUnion=function($1w3,$iggrmb$){
var identitySet$=this;
var $1w4=IdentitySet(undefined,undefined,{Element$IdentitySet:m$1.mut$([identitySet$.$$targs$$.Element$IdentitySet,$iggrmb$.Other$exclusiveUnion])});
var $1w6;for(var $1w5=identitySet$.iterator();($1w6=$1w5.next())!==m$1.finished();){
if(!$1w3.contains($1w6)){
$1w4.add($1w6);
}
}
var $1w8;for(var $1w7=$1w3.iterator();($1w8=$1w7.next())!==m$1.finished();){
if(!identitySet$.contains($1w8)){
$1w4.add($1w8);
}
}
return $1w4;
};identitySet$.exclusiveUnion.$crtmm$=function(){return{mod:$CCMM$,$t:{t:IdentitySet,a:{Element$IdentitySet:{t:'u',l:['Element$IdentitySet','Other$exclusiveUnion']}}},ps:[{nm:'set',mt:'prm',$t:{t:IdentitySet,a:{Element$IdentitySet:'Other$exclusiveUnion'}}}],$cont:IdentitySet,tp:{Other$exclusiveUnion:{sts:[{t:m$1.Identifiable}]}},pa:1,d:['ceylon.collection','IdentitySet','$m','exclusiveUnion']};};
identitySet$.intersection=function($1w9,$94cc1h$){
var identitySet$=this;
var $1wa=IdentitySet(undefined,undefined,{Element$IdentitySet:m$1.mit$([identitySet$.$$targs$$.Element$IdentitySet,$94cc1h$.Other$intersection])});
var $1wc;for(var $1wb=identitySet$.iterator();($1wc=$1wb.next())!==m$1.finished();){
var $1wd;
if($1w9.contains($1wc)&&m$1.is$(($1wd=$1wc),$94cc1h$.Other$intersection,$94cc1h$)){
$1wa.add($1wd);
}
}
return $1wa;
};identitySet$.intersection.$crtmm$=function(){return{mod:$CCMM$,$t:{t:IdentitySet,a:{Element$IdentitySet:{t:'i',l:['Element$IdentitySet','Other$intersection']}}},ps:[{nm:'set',mt:'prm',$t:{t:IdentitySet,a:{Element$IdentitySet:'Other$intersection'}}}],$cont:IdentitySet,tp:{Other$intersection:{sts:[{t:m$1.Identifiable}]}},pa:1,d:['ceylon.collection','IdentitySet','$m','intersection']};};
identitySet$.union=function($1we,$mewmlv$){
var identitySet$=this;
var $1wf=IdentitySet(undefined,undefined,{Element$IdentitySet:m$1.mut$([identitySet$.$$targs$$.Element$IdentitySet,$mewmlv$.Other$union])});
$1wf.addAll(identitySet$);
$1wf.addAll($1we);
return $1wf;
};identitySet$.union.$crtmm$=function(){return{mod:$CCMM$,$t:{t:IdentitySet,a:{Element$IdentitySet:{t:'u',l:['Element$IdentitySet','Other$union']}}},ps:[{nm:'set',mt:'prm',$t:{t:IdentitySet,a:{Element$IdentitySet:'Other$union'}}}],$cont:IdentitySet,tp:{Other$union:{sts:[{t:m$1.Identifiable}]}},pa:1,d:['ceylon.collection','IdentitySet','$m','union']};};
})(IdentitySet.$$.prototype);
}
return IdentitySet;
}
ex$.$init$IdentitySet=$init$IdentitySet;
$init$IdentitySet();
IdentitySet.inst$$=function($1wg){
var identitySet$=new IdentitySet.$$;
m$1.set_type_args(identitySet$,{Element$IdentitySet:$1wg.$$targs$$.Type$Class.a.Element$IdentitySet});
m$1.set_type_args(identitySet$,{Element$Iterable:identitySet$.$$targs$$.Element$IdentitySet,Absent$Iterable:{t:m$1.Null},Element$Category:{t:m$1.$_Object},Element$Collection:identitySet$.$$targs$$.Element$IdentitySet});
return identitySet$;
};
IdentitySet.ser$get$=function(ref,o){var n=ref.attribute.qualifiedName;if(n==='ceylon.collection::IdentitySet.hashtable')return o.$1dkeuw$1tg_;
else if(n==='ceylon.collection::IdentitySet.store')return o.$1dkeuw$1ti_;
else if(n==='ceylon.collection::IdentitySet.length')return o.$1dkeuw$1tj_;
else throw new TypeError('unknown attribute');
};
IdentitySet.ser$set$=function(ref,o,i){if(!m$1.is$(ref,{t:m$1.Member$serialization}))throw m$1.AssertionError('unexpected reachable reference');var n=ref.attribute.qualifiedName;
if(n==='ceylon.collection::IdentitySet.hashtable')o.$1dkeuw$1tg_=i;
else if(n==='ceylon.collection::IdentitySet.store')o.$1dkeuw$1ti_=i;
else if(n==='ceylon.collection::IdentitySet.length')o.$1dkeuw$1tj_=i;
else throw new TypeError('unknown attribute');
};
IdentitySet.ser$refs$=function(o){return [m$1.MemberImpl$impl(m$1.OpenValue$jsint(m$1.lmp$(ex$,'ceylon.collection'),o.$prop$get$1dkeuw$1tg)),m$1.MemberImpl$impl(m$1.OpenValue$jsint(m$1.lmp$(ex$,'ceylon.collection'),o.$prop$get$1dkeuw$1ti)),m$1.MemberImpl$impl(m$1.OpenValue$jsint(m$1.lmp$(ex$,'ceylon.collection'),o.$prop$get$1dkeuw$1tj))];
};
function IdentityMap($1dkeuw$1wh,$1dkeuw$1wi,$$targs$$,identityMap$){
$init$IdentityMap();
if(identityMap$===undefined)identityMap$=new IdentityMap.$$;
m$1.set_type_args(identityMap$,$$targs$$);
if($1dkeuw$1wh===undefined){$1dkeuw$1wh=$init$IdentityMap().$defs$hashtable(identityMap$,$1dkeuw$1wi);}
identityMap$.$1dkeuw$1wh_=$1dkeuw$1wh;
if($1dkeuw$1wi===undefined){$1dkeuw$1wi=$init$IdentityMap().$defs$entries(identityMap$,$1dkeuw$1wh);}
identityMap$.$1dkeuw$1wi_=$1dkeuw$1wi;
m$1.Correspondence({Item$Correspondence:$$targs$$.Item$IdentityMap/*ORALE!Item inv pero Item var*/,Key$Correspondence:$$targs$$.Key$IdentityMap/*ORALE!Key inv pero Key var*/},identityMap$);
m$1.Iterable({Element$Iterable:{t:m$1.Entry,a:{Item$Entry:$$targs$$.Item$IdentityMap/*ORALE!Item inv pero Item var*/,Key$Entry:$$targs$$.Key$IdentityMap/*ORALE!Key inv pero Key var*/}},Absent$Iterable:{t:m$1.Null}},identityMap$);
m$1.Collection({Element$Collection:{t:m$1.Entry,a:{Item$Entry:$$targs$$.Item$IdentityMap/*ORALE!Item inv pero Item var*/,Key$Entry:$$targs$$.Key$IdentityMap/*ORALE!Key inv pero Key var*/}}},identityMap$);
identityMap$.$1dkeuw$1wj_=entryStore(identityMap$.$1dkeuw$1wh.initialCapacity,{Key$entryStore:identityMap$.$$targs$$.Key$IdentityMap,Item$entryStore:identityMap$.$$targs$$.Item$IdentityMap});
identityMap$.$1dkeuw$1wk_=(0);
var $1wm;for(var $1wl=$1dkeuw$1wi.iterator();($1wm=$1wl.next())!==m$1.finished();){
if(identityMap$.$1dkeuw$1wn(identityMap$.$1dkeuw$1wj,$1wm)){
($1wo=identityMap$.$1dkeuw$1wk,identityMap$.$1dkeuw$1wk=$1wo.successor,$1wo);
var $1wo;
}
}
identityMap$.$1dkeuw$1wp();
return identityMap$;
}
IdentityMap.$defs$hashtable=function(identityMap$,$1dkeuw$1wi){return Hashtable()};IdentityMap.$defs$entries=function(identityMap$,$1dkeuw$1wh){return m$1.empty()};IdentityMap.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'hashtable',mt:'prm',def:1,$t:{t:Hashtable},an:function(){return[m$1.doc("Performance-related settings for the backing array.")];}},{nm:'entries',mt:'prm',def:1,$t:{t:m$1.Iterable,a:{Element$Iterable:{t:m$1.Entry,a:{Item$Entry:'Item$IdentityMap',Key$Entry:'Key$IdentityMap'}},Absent$Iterable:{t:m$1.Null}}},an:function(){return[m$1.doc("The initial entries in the map.")];}}],tp:{Key$IdentityMap:{sts:[{t:m$1.Identifiable}]},Item$IdentityMap:{}},sts:[{t:m$1.Iterable,a:{Element$Iterable:{t:m$1.Entry,a:{Item$Entry:'Item$IdentityMap',Key$Entry:'Key$IdentityMap'}},Absent$Iterable:{t:m$1.Null}}},{t:m$1.Collection,a:{Element$Collection:{t:m$1.Entry,a:{Item$Entry:'Item$IdentityMap',Key$Entry:'Key$IdentityMap'}}}},{t:m$1.Correspondence,a:{Item$Correspondence:'Item$IdentityMap',Key$Correspondence:'Key$IdentityMap'}}],pa:2049,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:IdentityMap'),m$1.by(m$1.$arr$sa$(["Gavin King"],{t:m$1.$_String}))];},d:['ceylon.collection','IdentityMap']};};
ex$.IdentityMap=IdentityMap;
function $init$IdentityMap(){
if(IdentityMap.$$===undefined){
m$1.initTypeProto(IdentityMap,'ceylon.collection::IdentityMap',m$1.Basic,m$1.Correspondence,m$1.Iterable,m$1.Collection);
(function(identityMap$){
m$1.atr$(identityMap$,'$1dkeuw$1wh',function(){return this.$1dkeuw$1wh_;},undefined,function(){return{mod:$CCMM$,$t:{t:Hashtable},$cont:IdentityMap,an:function(){return[m$1.doc("Performance-related settings for the backing array.")];},d:['ceylon.collection','IdentityMap','$at','hashtable$ysu1qs']};});
m$1.atr$(identityMap$,'$1dkeuw$1wi',function(){return this.$1dkeuw$1wi_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Iterable,a:{Element$Iterable:{t:m$1.Entry,a:{Item$Entry:'Item$IdentityMap',Key$Entry:'Key$IdentityMap'}},Absent$Iterable:{t:m$1.Null}}},$cont:IdentityMap,an:function(){return[m$1.doc("The initial entries in the map.")];},d:['ceylon.collection','IdentityMap','$at','entries$yyuq4k']};});
m$1.atr$(identityMap$,'$1dkeuw$1wj',function(){return this.$1dkeuw$1wj_;},function($1wq){return this.$1dkeuw$1wj_=$1wq;},function(){return{mod:$CCMM$,$t:{t:m$1.$_Array,a:{Element$Array:{t:'u',l:[{t:m$1.Null},{t:Cell,a:{Element$Cell:{t:m$1.Entry,a:{Item$Entry:'Item$IdentityMap',Key$Entry:'Key$IdentityMap'}}}}]}}},$cont:IdentityMap,pa:1027,d:['ceylon.collection','IdentityMap','$at','store$dzug7v']};});
m$1.atr$(identityMap$,'$1dkeuw$1wk',function(){return this.$1dkeuw$1wk_;},function($1wr){return this.$1dkeuw$1wk_=$1wr;},function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:IdentityMap,pa:1027,d:['ceylon.collection','IdentityMap','$at','length$bsbrj6']};});
identityMap$.$1dkeuw$1ws=function($1wt,$1wu){var identityMap$=this;
return m$1.identityHash($1wt).remainder($1wu.size).magnitude;
};
identityMap$.$1dkeuw$1ws.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'key',mt:'prm',$t:{t:m$1.Identifiable}},{nm:'store',mt:'prm',$t:{t:m$1.$_Array,a:{Element$Array:{t:'u',l:[{t:m$1.Null},{t:Cell,a:{Element$Cell:{t:m$1.Entry,a:{Item$Entry:'Item$IdentityMap',Key$Entry:'Key$IdentityMap'}}}}]}}}}],$cont:IdentityMap,d:['ceylon.collection','IdentityMap','$m','storeIndex$9uf6gl']};};
identityMap$.$1dkeuw$1wn=function($1wv,$1ww){
var identityMap$=this;
var $1wx=identityMap$.$1dkeuw$1ws($1ww.key,$1wv);
var $1wy=$1wv.$_get($1wx);
var $1wz=$1wy;
var $1x0;
while(m$1.nn$(($1x0=$1wz))){
if(($1x0.element.key===$1ww.key)){
($1x0.element=$1ww);
return false;
}
$1wz=$1x0.rest;
}
($1x1=Cell($1ww,$1wy,{Element$Cell:{t:m$1.Entry,a:{Item$Entry:identityMap$.$$targs$$.Item$IdentityMap/*ORALE!Item inv pero Item var*/,Key$Entry:identityMap$.$$targs$$.Key$IdentityMap/*ORALE!Key inv pero Key var*/}}}),$1wv.set($1wx,$1x1), $1x1);
var $1x1;
return true;
};identityMap$.$1dkeuw$1wn.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'store',mt:'prm',$t:{t:m$1.$_Array,a:{Element$Array:{t:'u',l:[{t:m$1.Null},{t:Cell,a:{Element$Cell:{t:m$1.Entry,a:{Item$Entry:'Item$IdentityMap',Key$Entry:'Key$IdentityMap'}}}}]}}}},{nm:'entry',mt:'prm',$t:{t:m$1.Entry,a:{Item$Entry:'Item$IdentityMap',Key$Entry:'Key$IdentityMap'}}}],$cont:IdentityMap,d:['ceylon.collection','IdentityMap','$m','addToStore$z02azt']};};
identityMap$.$1dkeuw$1wp=function(){
var identityMap$=this;
if(identityMap$.$1dkeuw$1wh.rehash(identityMap$.$1dkeuw$1wk,identityMap$.$1dkeuw$1wj.size)){
var $1x2=entryStore(identityMap$.$1dkeuw$1wh.capacity(identityMap$.$1dkeuw$1wk),{Key$entryStore:identityMap$.$$targs$$.Key$IdentityMap,Item$entryStore:identityMap$.$$targs$$.Item$IdentityMap});
var $1x3=(0);
while(($1x3<identityMap$.$1dkeuw$1wj.size)){
var $1x4=identityMap$.$1dkeuw$1wj.$_get($1x3);
var $1x5;
while(m$1.nn$(($1x5=$1x4))){
$1x4=$1x5.rest;
var $1x6=identityMap$.$1dkeuw$1ws($1x5.element.key,$1x2);
var $1x7=$1x2.$_get($1x6);
($1x5.rest=$1x7);
($1x8=$1x5,$1x2.set($1x6,$1x8), $1x8);
var $1x8;
}
($1x9=$1x3,$1x3=$1x9.successor,$1x9);
var $1x9;
}
identityMap$.$1dkeuw$1wj=$1x2;
}
};identityMap$.$1dkeuw$1wp.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[],$cont:IdentityMap,d:['ceylon.collection','IdentityMap','$m','checkRehash$c66hwt']};};
identityMap$.put=function($1xa,$1xb){
var identityMap$=this;
var $1xc=identityMap$.$1dkeuw$1ws($1xa,identityMap$.$1dkeuw$1wj);
var $1xd=m$1.Entry($1xa,$1xb,{Item$Entry:identityMap$.$$targs$$.Item$IdentityMap/*ORALE!Item inv pero Item var*/,Key$Entry:identityMap$.$$targs$$.Key$IdentityMap/*ORALE!Key inv pero Key var*/});
var $1xe=identityMap$.$1dkeuw$1wj.$_get($1xc);
var $1xf=$1xe;
var $1xg;
while(m$1.nn$(($1xg=$1xf))){
if(($1xg.element.key===$1xa)){
var $1xh=$1xg.element.item;
($1xg.element=$1xd);
return $1xh;
}
$1xf=$1xg.rest;
}
($1xi=Cell($1xd,$1xe,{Element$Cell:{t:m$1.Entry,a:{Item$Entry:identityMap$.$$targs$$.Item$IdentityMap/*ORALE!Item inv pero Item var*/,Key$Entry:identityMap$.$$targs$$.Key$IdentityMap/*ORALE!Key inv pero Key var*/}}}),identityMap$.$1dkeuw$1wj.set($1xc,$1xi), $1xi);
var $1xi;
($1xj=identityMap$.$1dkeuw$1wk,identityMap$.$1dkeuw$1wk=$1xj.successor,$1xj);
var $1xj;
identityMap$.$1dkeuw$1wp();
return null;
};identityMap$.put.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Item$IdentityMap']},ps:[{nm:'key',mt:'prm',$t:'Key$IdentityMap'},{nm:'item',mt:'prm',$t:'Item$IdentityMap'}],$cont:IdentityMap,pa:1,d:['ceylon.collection','IdentityMap','$m','put']};};
identityMap$.putAll=function($1xk){
var identityMap$=this;
var $1xm;for(var $1xl=$1xk.iterator();($1xm=$1xl.next())!==m$1.finished();){
if(identityMap$.$1dkeuw$1wn(identityMap$.$1dkeuw$1wj,$1xm)){
($1xn=identityMap$.$1dkeuw$1wk,identityMap$.$1dkeuw$1wk=$1xn.successor,$1xn);
var $1xn;
}
}
identityMap$.$1dkeuw$1wp();
};identityMap$.putAll.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'entries',mt:'prm',$t:{t:m$1.Iterable,a:{Element$Iterable:{t:m$1.Entry,a:{Item$Entry:'Item$IdentityMap',Key$Entry:'Key$IdentityMap'}},Absent$Iterable:{t:m$1.Null}}}}],$cont:IdentityMap,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:IdentityMap:$m:putAll')];},d:['ceylon.collection','IdentityMap','$m','putAll']};};
identityMap$.replaceEntry=function($1xo,$1xp,$1xq){
var identityMap$=this;
var $1xr=identityMap$.$1dkeuw$1ws($1xo,identityMap$.$1dkeuw$1wj);
var $1xs=identityMap$.$1dkeuw$1wj.$_get($1xr);
var $1xt;
while(m$1.nn$(($1xt=$1xs))){
if(($1xt.element.key===$1xo)){
var $1xu;
if(m$1.nn$(($1xu=$1xt.element.item))&&m$1.$eq$($1xu,$1xp)){
($1xt.element=m$1.Entry($1xo,$1xq,{Item$Entry:identityMap$.$$targs$$.Item$IdentityMap/*ORALE!Item inv pero Item var*/,Key$Entry:identityMap$.$$targs$$.Key$IdentityMap/*ORALE!Key inv pero Key var*/}));
return true;
}
else{
return false;
}
}
$1xs=$1xt.rest;
}
return false;
};identityMap$.replaceEntry.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'key',mt:'prm',$t:'Key$IdentityMap'},{nm:'item',mt:'prm',$t:{t:'i',l:['Item$IdentityMap',{t:m$1.$_Object}]}},{nm:'newItem',mt:'prm',$t:'Item$IdentityMap'}],$cont:IdentityMap,pa:1,d:['ceylon.collection','IdentityMap','$m','replaceEntry']};};
identityMap$.remove=function($1xv){
var identityMap$=this;
var $1xw=identityMap$.$1dkeuw$1ws($1xv,identityMap$.$1dkeuw$1wj);
var $1xx;
if(m$1.nn$(($1xx=identityMap$.$1dkeuw$1wj.$_get($1xw)))&&($1xx.element.key===$1xv)){
($1xy=$1xx.rest,identityMap$.$1dkeuw$1wj.set($1xw,$1xy), $1xy);
var $1xy;
($1xz=identityMap$.$1dkeuw$1wk,identityMap$.$1dkeuw$1wk=$1xz.predecessor,$1xz);
var $1xz;
return $1xx.element.item;
}
var $1y0=identityMap$.$1dkeuw$1wj.$_get($1xw);
var $1y1;
while(m$1.nn$(($1y1=$1y0))){
var $1y2=$1y1.rest;
var $1y3;
if(m$1.nn$(($1y3=$1y2))&&($1y3.element.key===$1xv)){
($1y1.rest=$1y3.rest);
($1y4=identityMap$.$1dkeuw$1wk,identityMap$.$1dkeuw$1wk=$1y4.predecessor,$1y4);
var $1y4;
return $1y3.element.item;
}
else{
$1y0=$1y2;
}
}
return null;
};identityMap$.remove.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Item$IdentityMap']},ps:[{nm:'key',mt:'prm',$t:'Key$IdentityMap'}],$cont:IdentityMap,pa:1,an:function(){return[m$1.doc("Removes a key/value mapping if it exists")];},d:['ceylon.collection','IdentityMap','$m','remove']};};
identityMap$.removeAll=function($1y5){
var identityMap$=this;
var $1y7;for(var $1y6=$1y5.iterator();($1y7=$1y6.next())!==m$1.finished();){
identityMap$.remove($1y7);
}
};identityMap$.removeAll.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'keys',mt:'prm',$t:{t:m$1.Iterable,a:{Element$Iterable:'Key$IdentityMap',Absent$Iterable:{t:m$1.Null}}}}],$cont:IdentityMap,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:IdentityMap:$m:removeAll')];},d:['ceylon.collection','IdentityMap','$m','removeAll']};};
identityMap$.removeEntry=function($1y8,$1y9){
var identityMap$=this;
var $1ya=identityMap$.$1dkeuw$1ws($1y8,identityMap$.$1dkeuw$1wj);
var $1yb;
while(m$1.nn$(($1yb=identityMap$.$1dkeuw$1wj.$_get($1ya)))&&($1yb.element.key===$1y8)){
var $1yc;
if(m$1.nn$(($1yc=$1yb.element.item))&&m$1.$eq$($1yc,$1y9)){
($1yd=$1yb.rest,identityMap$.$1dkeuw$1wj.set($1ya,$1yd), $1yd);
var $1yd;
($1ye=identityMap$.$1dkeuw$1wk,identityMap$.$1dkeuw$1wk=$1ye.predecessor,$1ye);
var $1ye;
return true;
}
else{
return false;
}
}
var $1yf=identityMap$.$1dkeuw$1wj.$_get($1ya);
var $1yg;
while(m$1.nn$(($1yg=$1yf))){
var $1yh=$1yg.rest;
var $1yi;
if(m$1.nn$(($1yi=$1yh))&&($1yi.element.key===$1y8)){
var $1yj;
if(m$1.nn$(($1yj=$1yi.element.item))&&m$1.$eq$($1yj,$1y9)){
($1yg.rest=$1yi.rest);
($1yk=identityMap$.$1dkeuw$1wk,identityMap$.$1dkeuw$1wk=$1yk.predecessor,$1yk);
var $1yk;
return true;
}
else{
return false;
}
}
else{
$1yf=$1yh;
}
}
return false;
};identityMap$.removeEntry.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'key',mt:'prm',$t:'Key$IdentityMap'},{nm:'item',mt:'prm',$t:{t:'i',l:['Item$IdentityMap',{t:m$1.$_Object}]}}],$cont:IdentityMap,pa:1,d:['ceylon.collection','IdentityMap','$m','removeEntry']};};
identityMap$.clear=function(){
var identityMap$=this;
var $1yl=(0);
while(($1yl<identityMap$.$1dkeuw$1wj.size)){
($1ym=null,identityMap$.$1dkeuw$1wj.set(($1yn=$1yl,$1yl=$1yn.successor,$1yn),$1ym), $1ym);
var $1ym,$1yn;
}
identityMap$.$1dkeuw$1wk=(0);
};identityMap$.clear.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[],$cont:IdentityMap,pa:1,an:function(){return[m$1.doc("Removes every key/value mapping")];},d:['ceylon.collection','IdentityMap','$m','clear']};};
m$1.atr$(identityMap$,'size',function(){
var identityMap$=this;
return identityMap$.$1dkeuw$1wk;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:IdentityMap,pa:3,d:['ceylon.collection','IdentityMap','$at','size']};});
identityMap$.$_get=function($1yo){
var identityMap$=this;
if(identityMap$.empty){
return null;
}
var $1yp=identityMap$.$1dkeuw$1ws($1yo,identityMap$.$1dkeuw$1wj);
var $1yq=identityMap$.$1dkeuw$1wj.$_get($1yp);
var $1yr;
while(m$1.nn$(($1yr=$1yq))){
if(($1yr.element.key===$1yo)){
return $1yr.element.item;
}
$1yq=$1yr.rest;
}
return null;
};identityMap$.$_get.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Item$IdentityMap']},ps:[{nm:'key',mt:'prm',$t:'Key$IdentityMap'}],$cont:IdentityMap,pa:3,d:['ceylon.collection','IdentityMap','$m','get']};};
identityMap$.iterator=function(){var identityMap$=this;
return StoreIterator(identityMap$.$1dkeuw$1wj,{Element$StoreIterator:{t:m$1.Entry,a:{Item$Entry:identityMap$.$$targs$$.Item$IdentityMap/*ORALE!Item inv pero Item var*/,Key$Entry:identityMap$.$$targs$$.Key$IdentityMap/*ORALE!Key inv pero Key var*/}}});
};identityMap$.count=function($1ys){
var identityMap$=this;
var $1yt=(0);
var $1yu=(0);
while(($1yt<identityMap$.$1dkeuw$1wj.size)){
var $1yv=identityMap$.$1dkeuw$1wj.$_get($1yt);
var $1yw;
while(m$1.nn$(($1yw=$1yv))){
if($1ys($1yw.element)){
($1yx=$1yu,$1yu=$1yx.successor,$1yx);
var $1yx;
}
$1yv=$1yw.rest;
}
($1yy=$1yt,$1yt=$1yy.successor,$1yy);
var $1yy;
}
return $1yu;
};identityMap$.count.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'selecting',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Arguments$Callable:{t:'T',l:[{t:m$1.Entry,a:{Item$Entry:'Item$IdentityMap',Key$Entry:'Key$IdentityMap'}}]},Return$Callable:{t:m$1.$_Boolean}}},$rt:{t:m$1.$_Boolean},ps:[{nm:'element',mt:'prm',$t:{t:m$1.Entry,a:{Item$Entry:'Item$IdentityMap',Key$Entry:'Key$IdentityMap'}}}]}],$cont:IdentityMap,pa:3,d:['ceylon.collection','IdentityMap','$m','count']};};
identityMap$.each=function($1yz){
var identityMap$=this;
identityMap$.$1dkeuw$1wj.each(m$1.jsc$2((function($1z0){
var $1z1=$1z0;
$prop$get$1z1={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:Cell,a:{Element$Cell:{t:m$1.Entry,a:{Item$Entry:'Item$IdentityMap',Key$Entry:'Key$IdentityMap'}}}}]},$cont:identityMap$.each,pa:1027,d:['ceylon.collection','IdentityMap','$m','each','$at','iter$4io6c']};}};
$prop$get$1z1.get=function(){return $1z1};
var $1z2;
while(m$1.nn$(($1z2=$1z1))){
$1yz($1z2.element);
$1z1=$1z2.rest;
}
}),[{nm:'bucket',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},{t:Cell,a:{Element$Cell:{t:m$1.Entry,a:{Item$Entry:identityMap$.$$targs$$.Item$IdentityMap,Key$Entry:identityMap$.$$targs$$.Key$IdentityMap}}}}]}}],{Arguments$Callable:m$1.mtt$([m$1.mut$([{t:m$1.Null},{t:Cell,a:{Element$Cell:{t:m$1.Entry,a:{Item$Entry:identityMap$.$$targs$$.Item$IdentityMap/*ORALE!Item inv pero Item var*/,Key$Entry:identityMap$.$$targs$$.Key$IdentityMap/*ORALE!Key inv pero Key var*/}}}}])]),Return$Callable:{t:m$1.Anything}}));
};identityMap$.each.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'step',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Arguments$Callable:{t:'T',l:[{t:m$1.Entry,a:{Item$Entry:'Item$IdentityMap',Key$Entry:'Key$IdentityMap'}}]},Return$Callable:{t:m$1.Anything}}},$rt:{t:m$1.Anything},ps:[{nm:'element',mt:'prm',$t:{t:m$1.Entry,a:{Item$Entry:'Item$IdentityMap',Key$Entry:'Key$IdentityMap'}}}]}],$cont:IdentityMap,pa:3,d:['ceylon.collection','IdentityMap','$m','each']};};
m$1.atr$(identityMap$,'hash',function(){
var identityMap$=this;
var $1z3=(0);
var $1z4=(17);
while(($1z3<identityMap$.$1dkeuw$1wj.size)){
var $1z5=identityMap$.$1dkeuw$1wj.$_get($1z3);
var $1z6;
while(m$1.nn$(($1z6=$1z5))){
$1z4=$1z4.times(31).plus(m$1.identityHash($1z6.element.key)).times(31);
var $1z7;
if(m$1.nn$(($1z7=$1z6.element.item))){
($1z4=$1z4.plus($1z7.hash));
}
$1z5=$1z6.rest;
}
($1z8=$1z3,$1z3=$1z8.successor,$1z8);
var $1z8;
}
return $1z4;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:IdentityMap,pa:3,d:['ceylon.collection','IdentityMap','$at','hash']};});identityMap$.equals=function($1z9){
var identityMap$=this;
var $1za;
if(m$1.is$(($1za=$1z9),{t:IdentityMap,a:{Key$IdentityMap:{t:m$1.$_Object},Item$IdentityMap:{t:m$1.$_Object}}})&&(identityMap$.size==$1za.size)){
var $1zb=(0);
while(($1zb<identityMap$.$1dkeuw$1wj.size)){
var $1zc=identityMap$.$1dkeuw$1wj.$_get($1zb);
var $1zd;
while(m$1.nn$(($1zd=$1zc))){
var $1ze=$1za.$_get($1zd.element.key);
var $1zf;
if(m$1.nn$(($1zf=$1zd.element.item))){
var $1zg;
if(m$1.nn$(($1zg=$1ze))){
if(!m$1.$eq$($1zg,$1zf)){
return false;
}
}
else{
return false;
}
}
else{
if(m$1.nn$($1ze)){
return false;
}
}
$1zc=$1zd.rest;
}
($1zh=$1zb,$1zb=$1zh.successor,$1zh);
var $1zh;
}
return true;
}
return false;
};identityMap$.equals.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'that',mt:'prm',$t:{t:m$1.$_Object}}],$cont:IdentityMap,pa:3,d:['ceylon.collection','IdentityMap','$m','equals']};};
identityMap$.clone=function(){
var identityMap$=this;
var $1zi=IdentityMap(undefined,undefined,{Key$IdentityMap:identityMap$.$$targs$$.Key$IdentityMap,Item$IdentityMap:identityMap$.$$targs$$.Item$IdentityMap});
($1zi.$1dkeuw$1wk=identityMap$.$1dkeuw$1wk);
($1zi.$1dkeuw$1wj=entryStore(identityMap$.$1dkeuw$1wj.size,{Key$entryStore:identityMap$.$$targs$$.Key$IdentityMap,Item$entryStore:identityMap$.$$targs$$.Item$IdentityMap}));
var $1zj=(0);
while(($1zj<identityMap$.$1dkeuw$1wj.size)){
var $1zk;
if(m$1.nn$(($1zk=identityMap$.$1dkeuw$1wj.$_get($1zj)))){
($1zl=$1zk.clone(),$1zi.$1dkeuw$1wj.set($1zj,$1zl), $1zl);
var $1zl;
}
($1zm=$1zj,$1zj=$1zm.successor,$1zm);
var $1zm;
}
return $1zi;
};identityMap$.clone.$crtmm$=function(){return{mod:$CCMM$,$t:{t:IdentityMap,a:{Key$IdentityMap:'Key$IdentityMap',Item$IdentityMap:'Item$IdentityMap'}},ps:[],$cont:IdentityMap,pa:3,d:['ceylon.collection','IdentityMap','$m','clone']};};
identityMap$.defines=function($1zn){
var identityMap$=this;
var $1zo=(0);
while(($1zo<identityMap$.$1dkeuw$1wj.size)){
var $1zp=identityMap$.$1dkeuw$1wj.$_get($1zo);
var $1zq;
while(m$1.nn$(($1zq=$1zp))){
if(($1zq.element.key===$1zn)){
return true;
}
$1zp=$1zq.rest;
}
($1zr=$1zo,$1zo=$1zr.successor,$1zr);
var $1zr;
}
return false;
};identityMap$.defines.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'key',mt:'prm',$t:'Key$IdentityMap'}],$cont:IdentityMap,pa:3,d:['ceylon.collection','IdentityMap','$m','defines']};};
identityMap$.contains=function($1zs){
var identityMap$=this;
var $1zt=(0);
while(($1zt<identityMap$.$1dkeuw$1wj.size)){
var $1zu=identityMap$.$1dkeuw$1wj.$_get($1zt);
var $1zv;
while(m$1.nn$(($1zv=$1zu))){
var $1zw;
if(m$1.nn$(($1zw=$1zv.element.item))&&m$1.$eq$($1zw,$1zs)){
return true;
}
$1zu=$1zv.rest;
}
($1zx=$1zt,$1zt=$1zx.successor,$1zx);
var $1zx;
}
return false;
};identityMap$.contains.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'element',mt:'prm',$t:{t:m$1.$_Object}}],$cont:IdentityMap,pa:3,d:['ceylon.collection','IdentityMap','$m','contains']};};
})(IdentityMap.$$.prototype);
}
return IdentityMap;
}
ex$.$init$IdentityMap=$init$IdentityMap;
$init$IdentityMap();
IdentityMap.inst$$=function($1zy){
var identityMap$=new IdentityMap.$$;
m$1.set_type_args(identityMap$,{Key$IdentityMap:$1zy.$$targs$$.Type$Class.a.Key$IdentityMap,Item$IdentityMap:$1zy.$$targs$$.Type$Class.a.Item$IdentityMap});
m$1.set_type_args(identityMap$,{Element$Iterable:{t:m$1.Entry,a:{Item$Entry:identityMap$.$$targs$$.Item$IdentityMap/*ORALE!Item inv pero Item var*/,Key$Entry:identityMap$.$$targs$$.Key$IdentityMap/*ORALE!Key inv pero Key var*/}},Absent$Iterable:{t:m$1.Null},Element$Category:{t:m$1.$_Object},Element$Collection:{t:m$1.Entry,a:{Item$Entry:identityMap$.$$targs$$.Item$IdentityMap/*ORALE!Item inv pero Item var*/,Key$Entry:identityMap$.$$targs$$.Key$IdentityMap/*ORALE!Key inv pero Key var*/}},Item$Correspondence:identityMap$.$$targs$$.Item$IdentityMap,Key$Correspondence:identityMap$.$$targs$$.Key$IdentityMap});
return identityMap$;
};
IdentityMap.ser$get$=function(ref,o){var n=ref.attribute.qualifiedName;if(n==='ceylon.collection::IdentityMap.hashtable')return o.$1dkeuw$1wh_;
else if(n==='ceylon.collection::IdentityMap.store')return o.$1dkeuw$1wj_;
else if(n==='ceylon.collection::IdentityMap.length')return o.$1dkeuw$1wk_;
else throw new TypeError('unknown attribute');
};
IdentityMap.ser$set$=function(ref,o,i){if(!m$1.is$(ref,{t:m$1.Member$serialization}))throw m$1.AssertionError('unexpected reachable reference');var n=ref.attribute.qualifiedName;
if(n==='ceylon.collection::IdentityMap.hashtable')o.$1dkeuw$1wh_=i;
else if(n==='ceylon.collection::IdentityMap.store')o.$1dkeuw$1wj_=i;
else if(n==='ceylon.collection::IdentityMap.length')o.$1dkeuw$1wk_=i;
else throw new TypeError('unknown attribute');
};
IdentityMap.ser$refs$=function(o){return [m$1.MemberImpl$impl(m$1.OpenValue$jsint(m$1.lmp$(ex$,'ceylon.collection'),o.$prop$get$1dkeuw$1wh)),m$1.MemberImpl$impl(m$1.OpenValue$jsint(m$1.lmp$(ex$,'ceylon.collection'),o.$prop$get$1dkeuw$1wj)),m$1.MemberImpl$impl(m$1.OpenValue$jsint(m$1.lmp$(ex$,'ceylon.collection'),o.$prop$get$1dkeuw$1wk))];
};
function LinkedCell($1dkeuw$1zz,$1dkeuw$200,$1dkeuw$201,previous,$$targs$$,linkedCell$){
$init$LinkedCell();
if(linkedCell$===undefined)linkedCell$=new LinkedCell.$$;
m$1.set_type_args(linkedCell$,$$targs$$);
linkedCell$.$1dkeuw$1zz_=$1dkeuw$1zz;
linkedCell$.$1dkeuw$200_=$1dkeuw$200;
linkedCell$.$1dkeuw$201_=$1dkeuw$201;
linkedCell$.previous_=previous;
CachingCell($1dkeuw$1zz,$1dkeuw$200,$1dkeuw$201,{Element$CachingCell:linkedCell$.$$targs$$.Element$LinkedCell},linkedCell$);
linkedCell$.$1dkeuw$202_=null;
return linkedCell$;
}
LinkedCell.$crtmm$=function(){return{mod:$CCMM$,'super':{t:CachingCell,a:{Element$CachingCell:'Element$LinkedCell'}},ps:[{nm:'element',mt:'prm',$t:'Element$LinkedCell'},{nm:'keyHash',mt:'prm',$t:{t:m$1.Integer}},{nm:'rest',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},{t:CachingCell,a:{Element$CachingCell:'Element$LinkedCell'}}]}},{nm:'previous',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},{t:LinkedCell,a:{Element$LinkedCell:'Element$LinkedCell'}}]},pa:1025}],tp:{Element$LinkedCell:{}},pa:2048,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:LinkedCell')];},d:['ceylon.collection','LinkedCell']};};
ex$.LinkedCell=LinkedCell;
function $init$LinkedCell(){
if(LinkedCell.$$===undefined){
m$1.initTypeProto(LinkedCell,'ceylon.collection::LinkedCell',$init$CachingCell());
(function(linkedCell$){
m$1.atr$(linkedCell$,'$1dkeuw$1zz',function(){return this.$1dkeuw$1zz_;},undefined,function(){return{mod:$CCMM$,$t:'Element$LinkedCell',$cont:LinkedCell,d:['ceylon.collection','LinkedCell','$at','element$8ang99']};});
m$1.atr$(linkedCell$,'$1dkeuw$200',function(){return this.$1dkeuw$200_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:LinkedCell,d:['ceylon.collection','LinkedCell','$at','keyHash$70kw6u']};});
m$1.atr$(linkedCell$,'$1dkeuw$201',function(){return this.$1dkeuw$201_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:CachingCell,a:{Element$CachingCell:'Element$LinkedCell'}}]},$cont:LinkedCell,d:['ceylon.collection','LinkedCell','$at','rest$hy1p2d']};});
m$1.atr$(linkedCell$,'previous',function(){return this.previous_;},function($203){return this.previous_=$203;},function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:LinkedCell,a:{Element$LinkedCell:'Element$LinkedCell'}}]},$cont:LinkedCell,pa:1025,d:['ceylon.collection','LinkedCell','$at','previous']};});
m$1.atr$(linkedCell$,'next',function(){return this.$1dkeuw$202_;},function($204){return this.$1dkeuw$202_=$204;},function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:LinkedCell,a:{Element$LinkedCell:'Element$LinkedCell'}}]},$cont:LinkedCell,pa:1025,d:['ceylon.collection','LinkedCell','$at','next']};});
})(LinkedCell.$$.prototype);
}
return LinkedCell;
}
ex$.$init$LinkedCell=$init$LinkedCell;
$init$LinkedCell();
LinkedCell.inst$$=function($205){
var linkedCell$=new LinkedCell.$$;
m$1.set_type_args(linkedCell$,{Element$LinkedCell:$205.$$targs$$.Type$Class.a.Element$LinkedCell});
m$1.set_type_args(linkedCell$,{Element$CachingCell:linkedCell$.$$targs$$.Element$LinkedCell});
return linkedCell$;
};
LinkedCell.ser$get$=function(ref,o){var n=ref.attribute.qualifiedName;if(n==='ceylon.collection::LinkedCell.next')return o.next_;
else if(n==='ceylon.collection::LinkedCell.previous')return o.previous_;
else return CachingCell.ser$get$(ref,o);
};
LinkedCell.ser$set$=function(ref,o,i){if(!m$1.is$(ref,{t:m$1.Member$serialization}))throw m$1.AssertionError('unexpected reachable reference');var n=ref.attribute.qualifiedName;
if(n==='ceylon.collection::LinkedCell.next')o.next_=i;
else if(n==='ceylon.collection::LinkedCell.previous')o.previous_=i;
else CachingCell.ser$get$(ref,o,i);
};
LinkedCell.ser$refs$=function(o){var a=CachingCell.ser$refs$(o);a.push(m$1.MemberImpl$impl(m$1.OpenValue$jsint(m$1.lmp$(ex$,'ceylon.collection'),o.$prop$getNext)),m$1.MemberImpl$impl(m$1.OpenValue$jsint(m$1.lmp$(ex$,'ceylon.collection'),o.$prop$getPrevious)));return a;
};
function LinkedCellIterator($1dkeuw$206,$$targs$$,linkedCellIterator$){
$init$LinkedCellIterator();
if(linkedCellIterator$===undefined)linkedCellIterator$=new LinkedCellIterator.$$;
m$1.set_type_args(linkedCellIterator$,$$targs$$);
linkedCellIterator$.$1dkeuw$206_=$1dkeuw$206;
m$1.Iterator({Element$Iterator:$$targs$$.Element$LinkedCellIterator/*ORALE!Element inv pero Element var*/},linkedCellIterator$);
return linkedCellIterator$;
}
LinkedCellIterator.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'iter',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},{t:LinkedCell,a:{Element$LinkedCell:'Element$LinkedCellIterator'}}]},pa:1024}],tp:{Element$LinkedCellIterator:{}},sts:[{t:m$1.Iterator,a:{Element$Iterator:'Element$LinkedCellIterator'}}],d:['ceylon.collection','LinkedCellIterator']};};
ex$.LinkedCellIterator=LinkedCellIterator;
function $init$LinkedCellIterator(){
if(LinkedCellIterator.$$===undefined){
m$1.initTypeProto(LinkedCellIterator,'ceylon.collection::LinkedCellIterator',m$1.Basic,m$1.Iterator);
(function(linkedCellIterator$){
m$1.atr$(linkedCellIterator$,'$1dkeuw$206',function(){return this.$1dkeuw$206_;},function($207){return this.$1dkeuw$206_=$207;},function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:LinkedCell,a:{Element$LinkedCell:'Element$LinkedCellIterator'}}]},$cont:LinkedCellIterator,pa:1024,d:['ceylon.collection','LinkedCellIterator','$at','iter$rxmm2v']};});
linkedCellIterator$.next=function(){
var linkedCellIterator$=this;
var $208;
if(m$1.nn$(($208=linkedCellIterator$.$1dkeuw$206))){
linkedCellIterator$.$1dkeuw$206=$208.next;
return $208.element;
}
return m$1.finished();
};linkedCellIterator$.next.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:['Element$LinkedCellIterator',{t:m$1.Finished}]},ps:[],$cont:LinkedCellIterator,pa:3,d:['ceylon.collection','LinkedCellIterator','$m','next']};};
})(LinkedCellIterator.$$.prototype);
}
return LinkedCellIterator;
}
ex$.$init$LinkedCellIterator=$init$LinkedCellIterator;
$init$LinkedCellIterator();
function group($209,$20a,$bkwzr$){
var $20b=HashMap(undefined,undefined,undefined,{Key$HashMap:$bkwzr$.Group$group,Item$HashMap:{t:ArrayList,a:{Element$ArrayList:$bkwzr$.Element$group}}});
var $20d;for(var $20c=$209.iterator();($20d=$20c.next())!==m$1.finished();){
var $20e=$20a($20d);
var $20f;
if(m$1.nn$(($20f=$20b.$_get($20e)))){
$20f.add($20d);
}
else{
var $20g=ArrayList(undefined,undefined,undefined,{Element$ArrayList:$bkwzr$.Element$group});
$20g.add($20d);
($20h=$20g,$20b.put($20e,$20h), $20h);
var $20h;
}
}
function $20i($20j,$20k){
var $20l;
m$1.asrt$((m$1.is$(($20l=$20k.sequence()),{t:m$1.Sequence,a:{Element$Sequence:$bkwzr$.Element$group/*ORALE!Element inv pero Element var*/}})),"Assertion failed: \'is [Element+] result = list.sequence()\' at group.ceylon (30:14-30:53)",'30:8-30:54','group.ceylon');
return $20l;
};$20i.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Sequence,a:{Element$Sequence:$bkwzr$.Element$group}},ps:[{nm:'group',mt:'prm',$t:$bkwzr$.Group$group},{nm:'list',mt:'prm',$t:{t:ArrayList,a:{Element$ArrayList:$bkwzr$.Element$group}}}],$cont:group,d:['ceylon.collection','group','$m','mapping$dp6ds0']};};
return $20b.mapItems(m$1.jsc$3(0,$20i),{Result$mapItems:{t:m$1.Sequence,a:{Element$Sequence:$bkwzr$.Element$group/*ORALE!Element inv pero Element var*/}}});
}
ex$.group=group;
group.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Map,a:{Key$Map:'Group$group',Item$Map:{t:m$1.Sequence,a:{Element$Sequence:'Element$group'}}}},ps:[{nm:'elements',mt:'prm',$t:{t:m$1.Iterable,a:{Element$Iterable:'Element$group',Absent$Iterable:{t:m$1.Null}}}},{nm:'grouping',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Arguments$Callable:{t:'T',l:['Element$group']},Return$Callable:'Group$group'}},$rt:'Group$group',ps:[{nm:'element',mt:'prm',$t:'Element$group'}]}],tp:{Group$group:{sts:[{t:m$1.$_Object}]},Element$group:{}},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:group')];},d:['ceylon.collection','group']};};
function SortedSet($$targs$$,sortedSet$){
m$1.set_type_args(sortedSet$,$$targs$$,SortedSet);
m$1.Ranged({Subrange$Ranged:{t:SortedSet,a:{Element$SortedSet:$$targs$$.Element$SortedSet}},Index$Ranged:$$targs$$.Element$SortedSet/*ORALE!Element inv pero Index var*/,Element$Ranged:$$targs$$.Element$SortedSet/*ORALE!Element inv pero Element var*/},sortedSet$);
m$1.Set({Element$Set:$$targs$$.Element$SortedSet/*ORALE!Element inv pero Element var*/},sortedSet$);
}
SortedSet.$crtmm$=function(){return{mod:$CCMM$,tp:{Element$SortedSet:{sts:[{t:m$1.$_Object}]}},sts:[{t:m$1.Set,a:{Element$Set:'Element$SortedSet'}},{t:m$1.Ranged,a:{Subrange$Ranged:{t:SortedSet,a:{Element$SortedSet:'Element$SortedSet'}},Index$Ranged:'Element$SortedSet',Element$Ranged:'Element$SortedSet'}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:SortedSet'),m$1.by(m$1.$arr$sa$(["Gavin King"],{t:m$1.$_String}))];},d:['ceylon.collection','SortedSet']};};
ex$.SortedSet=SortedSet;
function $init$SortedSet(){
if(SortedSet.$$===undefined){
m$1.initTypeProtoI(SortedSet,'ceylon.collection::SortedSet',m$1.Ranged,m$1.Set);
(function(sortedSet$){
sortedSet$.higherElements={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Iterable,a:{Element$Iterable:'Element$SortedSet',Absent$Iterable:{t:m$1.Null}}},ps:[{nm:'element',mt:'prm',$t:'Element$SortedSet'}],$cont:SortedSet,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:SortedSet:$m:higherElements')];},d:['ceylon.collection','SortedSet','$m','higherElements']};}};sortedSet$.lowerElements={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Iterable,a:{Element$Iterable:'Element$SortedSet',Absent$Iterable:{t:m$1.Null}}},ps:[{nm:'element',mt:'prm',$t:'Element$SortedSet'}],$cont:SortedSet,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:SortedSet:$m:lowerElements')];},d:['ceylon.collection','SortedSet','$m','lowerElements']};}};sortedSet$.ascendingElements={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Iterable,a:{Element$Iterable:'Element$SortedSet',Absent$Iterable:{t:m$1.Null}}},ps:[{nm:'from',mt:'prm',$t:'Element$SortedSet'},{nm:'to',mt:'prm',$t:'Element$SortedSet'}],$cont:SortedSet,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:SortedSet:$m:ascendingElements')];},d:['ceylon.collection','SortedSet','$m','ascendingElements']};}};sortedSet$.descendingElements={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Iterable,a:{Element$Iterable:'Element$SortedSet',Absent$Iterable:{t:m$1.Null}}},ps:[{nm:'from',mt:'prm',$t:'Element$SortedSet'},{nm:'to',mt:'prm',$t:'Element$SortedSet'}],$cont:SortedSet,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:SortedSet:$m:descendingElements')];},d:['ceylon.collection','SortedSet','$m','descendingElements']};}};
})(SortedSet.$$.prototype);
}
return SortedSet;
}
ex$.$init$SortedSet=$init$SortedSet;
$init$SortedSet();
function Queue($$targs$$,queue$){
m$1.set_type_args(queue$,$$targs$$,Queue);
}
Queue.$crtmm$=function(){return{mod:$CCMM$,tp:{Element$Queue:{}},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:Queue'),m$1.see(m$1.$arr$sa$([m$1.openClass$jsint(m$1.lmp$(ex$,'ceylon.collection'),LinkedList),m$1.openClass$jsint(m$1.lmp$(ex$,'ceylon.collection'),ArrayList),m$1.OpenInterface$jsint(m$1.lmp$(ex$,'ceylon.collection'),Stack)],m$1.mut$([{t:m$1.ClassWithConstructorsDeclaration$meta$declaration},{t:m$1.InterfaceDeclaration$meta$declaration}])))];},d:['ceylon.collection','Queue']};};
ex$.Queue=Queue;
function $init$Queue(){
if(Queue.$$===undefined){
m$1.initTypeProtoI(Queue,'ceylon.collection::Queue');
(function(queue$){
queue$.offer={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'element',mt:'prm',$t:'Element$Queue'}],$cont:Queue,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:Queue:$m:offer')];},d:['ceylon.collection','Queue','$m','offer']};}};queue$.accept={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$Queue']},ps:[],$cont:Queue,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:Queue:$m:accept')];},d:['ceylon.collection','Queue','$m','accept']};}};queue$.$prop$getFront={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$Queue']},$cont:Queue,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:Queue:$at:front')];},d:['ceylon.collection','Queue','$at','front']};}};
queue$.$prop$getBack={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$Queue']},$cont:Queue,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:Queue:$at:back')];},d:['ceylon.collection','Queue','$at','back']};}};
})(Queue.$$.prototype);
}
return Queue;
}
ex$.$init$Queue=$init$Queue;
$init$Queue();
function Stability(stability$){
$init$Stability();
if(stability$===undefined)m$1.throwexc(m$1.InvocationException$meta$model("Cannot instantiate abstract class ceylon.collection::Stability"),'?','?')
return stability$;
}
Stability.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[],of:[$prop$getUnlinked,$prop$getLinked],pa:257,d:['ceylon.collection','Stability']};};
ex$.Stability=Stability;
function $init$Stability(){
if(Stability.$$===undefined){
m$1.initTypeProto(Stability,'ceylon.collection::Stability',m$1.Basic);
}
return Stability;
}
ex$.$init$Stability=$init$Stability;
$init$Stability();
function $20m(){
var unlinked$=new $20m.$$;Stability(unlinked$);
return unlinked$;
};$20m.$crtmm$=function(){return{mod:$CCMM$,'super':{t:Stability},d:['ceylon.collection','unlinked']};};
function $init$unlinked(){
if($20m.$$===undefined){
m$1.initTypeProto($20m,'ceylon.collection::unlinked',$init$Stability());
}
return $20m;
}
ex$.$init$unlinked=$init$unlinked;
$init$unlinked();
var $20o;
function unlinked(){
if($20o===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'unlinked\' before it was set"),'2:0-2:44','Stability.ceylon');
if($20o===undefined){$20o=m$1.INIT$;$20o=$init$unlinked()();$20o.$crtmm$=unlinked.$crtmm$;}
return $20o;
}
ex$.unlinked=unlinked;
unlinked.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$init$unlinked()},pa:1,d:['ceylon.collection','unlinked']};};
$prop$getUnlinked=unlinked;
ex$.$prop$getUnlinked=$prop$getUnlinked;
function $20p(){
var linked$=new $20p.$$;Stability(linked$);
return linked$;
};$20p.$crtmm$=function(){return{mod:$CCMM$,'super':{t:Stability},d:['ceylon.collection','linked']};};
function $init$linked(){
if($20p.$$===undefined){
m$1.initTypeProto($20p,'ceylon.collection::linked',$init$Stability());
}
return $20p;
}
ex$.$init$linked=$init$linked;
$init$linked();
var $20r;
function linked(){
if($20r===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'linked\' before it was set"),'3:0-3:42','Stability.ceylon');
if($20r===undefined){$20r=m$1.INIT$;$20r=$init$linked()();$20r.$crtmm$=linked.$crtmm$;}
return $20r;
}
ex$.linked=linked;
linked.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$init$linked()},pa:1,d:['ceylon.collection','linked']};};
$prop$getLinked=linked;
ex$.$prop$getLinked=$prop$getLinked;
function MutableList($$targs$$,mutableList$){
m$1.set_type_args(mutableList$,$$targs$$,MutableList);
m$1.List({Element$List:$$targs$$.Element$MutableList/*ORALE!Element inv pero Element var*/},mutableList$);
ListMutator({Element$ListMutator:$$targs$$.Element$MutableList/*ORALE!Element inv pero Element var*/},mutableList$);
}
MutableList.$crtmm$=function(){return{mod:$CCMM$,tp:{Element$MutableList:{}},sts:[{t:m$1.List,a:{Element$List:'Element$MutableList'}},{t:ListMutator,a:{Element$ListMutator:'Element$MutableList'}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:MutableList'),m$1.see(m$1.$arr$sa$([m$1.openClass$jsint(m$1.lmp$(ex$,'ceylon.collection'),LinkedList),m$1.openClass$jsint(m$1.lmp$(ex$,'ceylon.collection'),ArrayList)],{t:m$1.ClassWithConstructorsDeclaration$meta$declaration})),m$1.by(m$1.$arr$sa$(["St\u00e9phane \u00c9pardaud"],{t:m$1.$_String}))];},d:['ceylon.collection','MutableList']};};
ex$.MutableList=MutableList;
function $init$MutableList(){
if(MutableList.$$===undefined){
m$1.initTypeProtoI(MutableList,'ceylon.collection::MutableList',m$1.List,$init$ListMutator());
(function(mutableList$){
mutableList$.$_delete={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$MutableList']},ps:[{nm:'index',mt:'prm',$t:{t:m$1.Integer}}],$cont:MutableList,pa:7,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:MutableList:$m:delete')];},d:['ceylon.collection','MutableList','$m','delete']};}};mutableList$.deleteFirst=function(){var mutableList$=this;
return mutableList$.$_delete(0);
};
mutableList$.deleteFirst.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$MutableList']},ps:[],$cont:MutableList,pa:11,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:MutableList:$m:deleteFirst')];},d:['ceylon.collection','MutableList','$m','deleteFirst']};};
mutableList$.deleteLast=function(){var mutableList$=this;
return mutableList$.$_delete(mutableList$.size.minus(1));
};
mutableList$.deleteLast.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$MutableList']},ps:[],$cont:MutableList,pa:11,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:MutableList:$m:deleteLast')];},d:['ceylon.collection','MutableList','$m','deleteLast']};};
mutableList$.clone={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:MutableList,a:{Element$MutableList:'Element$MutableList'}},ps:[],$cont:MutableList,pa:7,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:MutableList:$m:clone')];},d:['ceylon.collection','MutableList','$m','clone']};}};mutableList$.swap=function($20s,$20t){
var mutableList$=this;
m$1.asrt$((($20u=$20s,$20u.notSmallerThan((0))&&$20u.smallerThan(mutableList$.size))&&($20v=$20t,$20v.notSmallerThan((0))&&$20v.smallerThan(mutableList$.size))),"index may not be negative or greater than the\nlast index in the list: \'0<=i<size, 0<=j<size\' at MutableList.ceylon (30:15-30:36)",'28:8-30:37','MutableList.ceylon');
if(!m$1.$eq$($20s,$20t)){
var $20w,$20x;
m$1.asrt$((m$1.is$(($20w=mutableList$.getFromFirst($20s)),mutableList$.$$targs$$.Element$MutableList)&&m$1.is$(($20x=mutableList$.getFromFirst($20t)),mutableList$.$$targs$$.Element$MutableList)),"Assertion failed: \'is Element x = getFromFirst(i),\n                    is Element y = getFromFirst(j)\' at MutableList.ceylon (32:19-33:50)",'32:12-33:51','MutableList.ceylon');
mutableList$.set($20s,$20x);
mutableList$.set($20t,$20w);
}
};mutableList$.swap.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'i',mt:'prm',$t:{t:m$1.Integer}},{nm:'j',mt:'prm',$t:{t:m$1.Integer}}],$cont:MutableList,pa:11,d:['ceylon.collection','MutableList','$m','swap']};};
mutableList$.move=function($20y,$20z){
var mutableList$=this;
m$1.asrt$((($210=$20y,$210.notSmallerThan((0))&&$210.smallerThan(mutableList$.size))&&($211=$20z,$211.notSmallerThan((0))&&$211.smallerThan(mutableList$.size))),"index may not be negative or greater than the\nlast index in the list: \'0<=i<size, 0<=j<size\' at MutableList.ceylon (42:15-42:36)",'40:8-42:37','MutableList.ceylon');
if(!m$1.$eq$($20y,$20z)){
var $212;
m$1.asrt$((m$1.is$(($212=mutableList$.$_delete($20y)),mutableList$.$$targs$$.Element$MutableList)),"Assertion failed: \'is Element x = delete(i)\' at MutableList.ceylon (44:19-44:44)",'44:12-44:45','MutableList.ceylon');
mutableList$.insert($20z,$212);
}
};mutableList$.move.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'i',mt:'prm',$t:{t:m$1.Integer}},{nm:'j',mt:'prm',$t:{t:m$1.Integer}}],$cont:MutableList,pa:11,d:['ceylon.collection','MutableList','$m','move']};};
mutableList$.removeWhere=function($213){
var mutableList$=this;
var $214=(0);
var $215=(0);
while(($214<mutableList$.size)){
var $216;
if(m$1.nn$(($216=mutableList$.getFromFirst($214)))&&$213($216)){
mutableList$.$_delete($214);
($217=$215,$215=$217.successor,$217);
var $217;
}
else{
($218=$214,$214=$218.successor,$218);
var $218;
}
}
return $215;
};mutableList$.removeWhere.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'selecting',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Arguments$Callable:{t:'T',l:[{t:'i',l:['Element$MutableList',{t:m$1.$_Object}]}]},Return$Callable:{t:m$1.$_Boolean}}},$rt:{t:m$1.$_Boolean},ps:[{nm:'element',mt:'prm',$t:{t:'i',l:['Element$MutableList',{t:m$1.$_Object}]}}]}],$cont:MutableList,pa:9,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:MutableList:$m:removeWhere')];},d:['ceylon.collection','MutableList','$m','removeWhere']};};
mutableList$.prune=function(){
var mutableList$=this;
var $219=(0);
var $21a=(0);
while(($219<mutableList$.size)){
if(!m$1.nn$(mutableList$.getFromFirst($219))){
($21b=$21a,$21a=$21b.successor,$21b);
var $21b;
mutableList$.$_delete($219);
}
else{
($21c=$219,$219=$21c.successor,$21c);
var $21c;
}
}
return $21a;
};mutableList$.prune.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[],$cont:MutableList,pa:11,d:['ceylon.collection','MutableList','$m','prune']};};
mutableList$.remove=function($21d){var mutableList$=this;
return mutableList$.removeWhere(m$1.jsc$2(($21e=$21d,m$1.jsc$3($21e,$21e.equals)),[{nm:'that',mt:'prm',$t:{t:m$1.$_Object}}],{}));
var $21e;
};
mutableList$.remove.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'element',mt:'prm',$t:{t:'i',l:['Element$MutableList',{t:m$1.$_Object}]}}],$cont:MutableList,pa:11,d:['ceylon.collection','MutableList','$m','remove']};};
mutableList$.findAndRemoveFirst=function($21f){
var mutableList$=this;
var $21g;
if(m$1.nn$(($21g=mutableList$.firstIndexWhere($21f)))){
return mutableList$.$_delete($21g);
}
else{
return null;
}
};mutableList$.findAndRemoveFirst.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$MutableList']},ps:[{nm:'selecting',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Arguments$Callable:{t:'T',l:[{t:'i',l:['Element$MutableList',{t:m$1.$_Object}]}]},Return$Callable:{t:m$1.$_Boolean}}},$rt:{t:m$1.$_Boolean},ps:[{nm:'element',mt:'prm',$t:{t:'i',l:['Element$MutableList',{t:m$1.$_Object}]}}]}],$cont:MutableList,pa:9,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:MutableList:$m:findAndRemoveFirst')];},d:['ceylon.collection','MutableList','$m','findAndRemoveFirst']};};
mutableList$.removeFirst=function($21h){var mutableList$=this;
return m$1.nn$(mutableList$.findAndRemoveFirst(m$1.jsc$2(($21i=$21h,m$1.jsc$3($21i,$21i.equals)),[{nm:'that',mt:'prm',$t:{t:m$1.$_Object}}],{})));
var $21i;
};
mutableList$.removeFirst.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'element',mt:'prm',$t:{t:'i',l:['Element$MutableList',{t:m$1.$_Object}]}}],$cont:MutableList,pa:11,d:['ceylon.collection','MutableList','$m','removeFirst']};};
mutableList$.findAndRemoveLast=function($21j){
var mutableList$=this;
var $21k;
if(m$1.nn$(($21k=mutableList$.lastIndexWhere($21j)))){
return mutableList$.$_delete($21k);
}
else{
return null;
}
};mutableList$.findAndRemoveLast.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$MutableList']},ps:[{nm:'selecting',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Arguments$Callable:{t:'T',l:[{t:'i',l:['Element$MutableList',{t:m$1.$_Object}]}]},Return$Callable:{t:m$1.$_Boolean}}},$rt:{t:m$1.$_Boolean},ps:[{nm:'element',mt:'prm',$t:{t:'i',l:['Element$MutableList',{t:m$1.$_Object}]}}]}],$cont:MutableList,pa:9,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:MutableList:$m:findAndRemoveLast')];},d:['ceylon.collection','MutableList','$m','findAndRemoveLast']};};
mutableList$.removeLast=function($21l){var mutableList$=this;
return m$1.nn$(mutableList$.findAndRemoveLast(m$1.jsc$2(($21m=$21l,m$1.jsc$3($21m,$21m.equals)),[{nm:'that',mt:'prm',$t:{t:m$1.$_Object}}],{})));
var $21m;
};
mutableList$.removeLast.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'element',mt:'prm',$t:{t:'i',l:['Element$MutableList',{t:m$1.$_Object}]}}],$cont:MutableList,pa:11,d:['ceylon.collection','MutableList','$m','removeLast']};};
mutableList$.replaceWhere=function($21n,$21o){
var mutableList$=this;
var $21p=(0);
var $21q=(0);
while(($21p<mutableList$.size)){
var $21r;
if(m$1.nn$(($21r=mutableList$.getFromFirst($21p)))&&$21n($21r)){
mutableList$.set($21p,$21o);
($21s=$21q,$21q=$21s.successor,$21s);
var $21s;
}
($21t=$21p,$21p=$21t.successor,$21t);
var $21t;
}
return $21q;
};mutableList$.replaceWhere.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'selecting',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Arguments$Callable:{t:'T',l:[{t:'i',l:['Element$MutableList',{t:m$1.$_Object}]}]},Return$Callable:{t:m$1.$_Boolean}}},$rt:{t:m$1.$_Boolean},ps:[{nm:'element',mt:'prm',$t:{t:'i',l:['Element$MutableList',{t:m$1.$_Object}]}}]},{nm:'replacement',mt:'prm',$t:'Element$MutableList'}],$cont:MutableList,pa:9,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:MutableList:$m:replaceWhere')];},d:['ceylon.collection','MutableList','$m','replaceWhere']};};
mutableList$.infill=function($21u){
var mutableList$=this;
var $21v=(0);
while(($21v<mutableList$.size)){
if(!m$1.nn$(mutableList$.getFromFirst($21v))){
mutableList$.set($21v,$21u);
}
($21w=$21v,$21v=$21w.successor,$21w);
var $21w;
}
};mutableList$.infill.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'replacement',mt:'prm',$t:'Element$MutableList'}],$cont:MutableList,pa:11,d:['ceylon.collection','MutableList','$m','infill']};};
mutableList$.$_replace=function($21x,$21y){var mutableList$=this;
return mutableList$.replaceWhere(m$1.jsc$2(($21z=$21x,m$1.jsc$3($21z,$21z.equals)),[{nm:'that',mt:'prm',$t:{t:m$1.$_Object}}],{}),$21y);
var $21z;
};
mutableList$.$_replace.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'element',mt:'prm',$t:{t:'i',l:['Element$MutableList',{t:m$1.$_Object}]}},{nm:'replacement',mt:'prm',$t:'Element$MutableList'}],$cont:MutableList,pa:11,d:['ceylon.collection','MutableList','$m','replace']};};
mutableList$.findAndReplaceFirst=function($220,$221){
var mutableList$=this;
var $222;
if(m$1.nn$(($222=mutableList$.firstIndexWhere($220)))){
var $223=mutableList$.getFromFirst($222);
mutableList$.set($222,$221);
return $223;
}
else{
return null;
}
};mutableList$.findAndReplaceFirst.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$MutableList']},ps:[{nm:'selecting',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Arguments$Callable:{t:'T',l:[{t:'i',l:['Element$MutableList',{t:m$1.$_Object}]}]},Return$Callable:{t:m$1.$_Boolean}}},$rt:{t:m$1.$_Boolean},ps:[{nm:'element',mt:'prm',$t:{t:'i',l:['Element$MutableList',{t:m$1.$_Object}]}}]},{nm:'replacement',mt:'prm',$t:'Element$MutableList'}],$cont:MutableList,pa:9,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:MutableList:$m:findAndReplaceFirst')];},d:['ceylon.collection','MutableList','$m','findAndReplaceFirst']};};
mutableList$.replaceFirst=function($224,$225){var mutableList$=this;
return m$1.nn$(mutableList$.findAndReplaceFirst(m$1.jsc$2(($226=$224,m$1.jsc$3($226,$226.equals)),[{nm:'that',mt:'prm',$t:{t:m$1.$_Object}}],{}),$225));
var $226;
};
mutableList$.replaceFirst.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'element',mt:'prm',$t:{t:'i',l:['Element$MutableList',{t:m$1.$_Object}]}},{nm:'replacement',mt:'prm',$t:'Element$MutableList'}],$cont:MutableList,pa:11,d:['ceylon.collection','MutableList','$m','replaceFirst']};};
mutableList$.findAndReplaceLast=function($227,$228){
var mutableList$=this;
var $229;
if(m$1.nn$(($229=mutableList$.lastIndexWhere($227)))){
var $22a=mutableList$.getFromFirst($229);
mutableList$.set($229,$228);
return $22a;
}
else{
return null;
}
};mutableList$.findAndReplaceLast.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$MutableList']},ps:[{nm:'selecting',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Arguments$Callable:{t:'T',l:[{t:'i',l:['Element$MutableList',{t:m$1.$_Object}]}]},Return$Callable:{t:m$1.$_Boolean}}},$rt:{t:m$1.$_Boolean},ps:[{nm:'element',mt:'prm',$t:{t:'i',l:['Element$MutableList',{t:m$1.$_Object}]}}]},{nm:'replacement',mt:'prm',$t:'Element$MutableList'}],$cont:MutableList,pa:9,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:MutableList:$m:findAndReplaceLast')];},d:['ceylon.collection','MutableList','$m','findAndReplaceLast']};};
mutableList$.replaceLast=function($22b,$22c){var mutableList$=this;
return m$1.nn$(mutableList$.findAndReplaceLast(m$1.jsc$2(($22d=$22b,m$1.jsc$3($22d,$22d.equals)),[{nm:'that',mt:'prm',$t:{t:m$1.$_Object}}],{}),$22c));
var $22d;
};
mutableList$.replaceLast.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'element',mt:'prm',$t:{t:'i',l:['Element$MutableList',{t:m$1.$_Object}]}},{nm:'replacement',mt:'prm',$t:'Element$MutableList'}],$cont:MutableList,pa:11,d:['ceylon.collection','MutableList','$m','replaceLast']};};
})(MutableList.$$.prototype);
}
return MutableList;
}
ex$.$init$MutableList=$init$MutableList;
$init$MutableList();
function ListMutator($$targs$$,listMutator$){
m$1.set_type_args(listMutator$,$$targs$$,ListMutator);
m$1.IndexedCorrespondenceMutator({Element$IndexedCorrespondenceMutator:$$targs$$.Element$ListMutator},listMutator$);
m$1.List({Element$List:{t:m$1.Anything}},listMutator$);
}
ListMutator.$crtmm$=function(){return{mod:$CCMM$,tp:{Element$ListMutator:{dv:'in'}},sts:[{t:m$1.List,a:{Element$List:{t:m$1.Anything}}},{t:m$1.IndexedCorrespondenceMutator,a:{Element$IndexedCorrespondenceMutator:'Element$ListMutator'}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:ListMutator'),m$1.see(m$1.$arr$sa$([m$1.OpenInterface$jsint(m$1.lmp$(ex$,'ceylon.collection'),MutableList)],{t:m$1.InterfaceDeclaration$meta$declaration}))];},d:['ceylon.collection','ListMutator']};};
ex$.ListMutator=ListMutator;
function $init$ListMutator(){
if(ListMutator.$$===undefined){
m$1.initTypeProtoI(ListMutator,'ceylon.collection::ListMutator',m$1.IndexedCorrespondenceMutator,m$1.List);
(function(listMutator$){
listMutator$.add={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'element',mt:'prm',$t:'Element$ListMutator'}],$cont:ListMutator,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:ListMutator:$m:add')];},d:['ceylon.collection','ListMutator','$m','add']};}};listMutator$.addAll=function($22e){
var listMutator$=this;
var $22g;for(var $22f=$22e.iterator();($22g=$22f.next())!==m$1.finished();){
listMutator$.add($22g);
}
};listMutator$.addAll.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'elements',mt:'prm',$t:{t:m$1.Iterable,a:{Element$Iterable:'Element$ListMutator',Absent$Iterable:{t:m$1.Null}}}}],$cont:ListMutator,pa:9,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:ListMutator:$m:addAll')];},d:['ceylon.collection','ListMutator','$m','addAll']};};
listMutator$.set={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'index',mt:'prm',$t:{t:m$1.Integer}},{nm:'element',mt:'prm',$t:'Element$ListMutator'}],$cont:ListMutator,pa:7,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:ListMutator:$m:set'),m$1.$_throws("AssertionError","if the given index is out of bounds, that\nis, if `index<0` or if `index>lastIndex`")];},d:['ceylon.collection','ListMutator','$m','set']};}};listMutator$.insert={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'index',mt:'prm',$t:{t:m$1.Integer}},{nm:'element',mt:'prm',$t:'Element$ListMutator'}],$cont:ListMutator,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:ListMutator:$m:insert'),m$1.$_throws("AssertionError","if the given index is out of bounds, that\nis, if `index<0` or if `index>lastIndex+1`")];},d:['ceylon.collection','ListMutator','$m','insert']};}};listMutator$.insertAll=function($22h,$22i){
var listMutator$=this;
var $22j=$22h;
var $22l;for(var $22k=$22i.iterator();($22l=$22k.next())!==m$1.finished();){
listMutator$.insert(($22m=$22j,$22j=$22m.successor,$22m),$22l);
var $22m;
}
};listMutator$.insertAll.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'index',mt:'prm',$t:{t:m$1.Integer}},{nm:'elements',mt:'prm',$t:{t:m$1.Iterable,a:{Element$Iterable:'Element$ListMutator',Absent$Iterable:{t:m$1.Null}}}}],$cont:ListMutator,pa:9,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:ListMutator:$m:insertAll'),m$1.$_throws(m$1.openClass$jsint(m$1.fmp$('ceylon.language','1.3.0','$'),m$1.AssertionError),"if the given index is out of bounds, that\nis, if `index<0` or if `index>lastIndex+1`")];},d:['ceylon.collection','ListMutator','$m','insertAll']};};
listMutator$.$_delete={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'index',mt:'prm',$t:{t:m$1.Integer}}],$cont:ListMutator,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:ListMutator:$m:delete')];},d:['ceylon.collection','ListMutator','$m','delete']};}};listMutator$.remove={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'element',mt:'prm',$t:{t:'i',l:['Element$ListMutator',{t:m$1.$_Object}]}}],$cont:ListMutator,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:ListMutator:$m:remove')];},d:['ceylon.collection','ListMutator','$m','remove']};}};listMutator$.removeAll=function($22n){
var listMutator$=this;
var $22o=(0);
var $22q;for(var $22p=$22n.iterator();($22q=$22p.next())!==m$1.finished();){
($22o=$22o.plus(listMutator$.remove($22q)));
}
return $22o;
};listMutator$.removeAll.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'elements',mt:'prm',$t:{t:m$1.Iterable,a:{Element$Iterable:{t:'i',l:['Element$ListMutator',{t:m$1.$_Object}]},Absent$Iterable:{t:m$1.Null}}}}],$cont:ListMutator,pa:9,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:ListMutator:$m:removeAll')];},d:['ceylon.collection','ListMutator','$m','removeAll']};};
listMutator$.removeFirst={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'element',mt:'prm',$t:{t:'i',l:['Element$ListMutator',{t:m$1.$_Object}]}}],$cont:ListMutator,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:ListMutator:$m:removeFirst')];},d:['ceylon.collection','ListMutator','$m','removeFirst']};}};listMutator$.removeLast={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'element',mt:'prm',$t:{t:'i',l:['Element$ListMutator',{t:m$1.$_Object}]}}],$cont:ListMutator,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:ListMutator:$m:removeLast')];},d:['ceylon.collection','ListMutator','$m','removeLast']};}};listMutator$.prune={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[],$cont:ListMutator,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:ListMutator:$m:prune')];},d:['ceylon.collection','ListMutator','$m','prune']};}};listMutator$.$_replace={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'element',mt:'prm',$t:{t:'i',l:['Element$ListMutator',{t:m$1.$_Object}]}},{nm:'replacement',mt:'prm',$t:'Element$ListMutator'}],$cont:ListMutator,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:ListMutator:$m:replace')];},d:['ceylon.collection','ListMutator','$m','replace']};}};listMutator$.replaceFirst={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'element',mt:'prm',$t:{t:'i',l:['Element$ListMutator',{t:m$1.$_Object}]}},{nm:'replacement',mt:'prm',$t:'Element$ListMutator'}],$cont:ListMutator,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:ListMutator:$m:replaceFirst')];},d:['ceylon.collection','ListMutator','$m','replaceFirst']};}};listMutator$.replaceLast={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'element',mt:'prm',$t:{t:'i',l:['Element$ListMutator',{t:m$1.$_Object}]}},{nm:'replacement',mt:'prm',$t:'Element$ListMutator'}],$cont:ListMutator,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:ListMutator:$m:replaceLast')];},d:['ceylon.collection','ListMutator','$m','replaceLast']};}};listMutator$.infill={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'replacement',mt:'prm',$t:'Element$ListMutator'}],$cont:ListMutator,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:ListMutator:$m:infill')];},d:['ceylon.collection','ListMutator','$m','infill']};}};listMutator$.swap={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'i',mt:'prm',$t:{t:m$1.Integer}},{nm:'j',mt:'prm',$t:{t:m$1.Integer}}],$cont:ListMutator,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:ListMutator:$m:swap'),m$1.$_throws("AssertionError","if either of the given indices is out of bounds")];},d:['ceylon.collection','ListMutator','$m','swap']};}};listMutator$.move={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'i',mt:'prm',$t:{t:m$1.Integer}},{nm:'j',mt:'prm',$t:{t:m$1.Integer}}],$cont:ListMutator,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:ListMutator:$m:move'),m$1.$_throws("AssertionError","if either of the given indices is out of bounds")];},d:['ceylon.collection','ListMutator','$m','move']};}};listMutator$.clear=function(){var listMutator$=this;
return listMutator$.deleteMeasure(0,listMutator$.size);
};
listMutator$.clear.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[],$cont:ListMutator,pa:9,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:ListMutator:$m:clear')];},d:['ceylon.collection','ListMutator','$m','clear']};};
listMutator$.deleteFirst=function(){var listMutator$=this;
return listMutator$.$_delete(0);
};
listMutator$.deleteFirst.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[],$cont:ListMutator,pa:9,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:ListMutator:$m:deleteFirst')];},d:['ceylon.collection','ListMutator','$m','deleteFirst']};};
listMutator$.deleteLast=function(){var listMutator$=this;
return listMutator$.$_delete(listMutator$.size.minus(1));
};
listMutator$.deleteLast.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[],$cont:ListMutator,pa:9,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:ListMutator:$m:deleteLast')];},d:['ceylon.collection','ListMutator','$m','deleteLast']};};
listMutator$.deleteSpan=function($22r,$22s){
var listMutator$=this;
var $22u=$22r,$22t=$22s,$22v=$22u.compare($22t),$22w=$22v===m$1.smaller()?'successor':'predecessor';for(var $22x=m$1.eorl$($22v);$22x($22t,$22u);$22u=$22u[$22w]){
listMutator$.$_delete($22u);
}
};listMutator$.deleteSpan.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'from',mt:'prm',$t:{t:m$1.Integer}},{nm:'to',mt:'prm',$t:{t:m$1.Integer}}],$cont:ListMutator,pa:9,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:ListMutator:$m:deleteSpan')];},d:['ceylon.collection','ListMutator','$m','deleteSpan']};};
listMutator$.deleteMeasure=function($22y,$22z){
var listMutator$=this;
var $231=$22y,$232=$22z;for(var $233=0;$233<$232;$233++,($231=$231.successor)){
listMutator$.$_delete($231);
}
};listMutator$.deleteMeasure.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'from',mt:'prm',$t:{t:m$1.Integer}},{nm:'length',mt:'prm',$t:{t:m$1.Integer}}],$cont:ListMutator,pa:9,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:ListMutator:$m:deleteMeasure')];},d:['ceylon.collection','ListMutator','$m','deleteMeasure']};};
listMutator$.truncate=function($234){var listMutator$=this;
return listMutator$.deleteMeasure($234,listMutator$.size.minus($234));
};
listMutator$.truncate.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'size',mt:'prm',$t:{t:m$1.Integer}}],$cont:ListMutator,pa:9,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:ListMutator:$m:truncate'),m$1.$_throws(m$1.openClass$jsint(m$1.fmp$('ceylon.language','1.3.0','$'),m$1.AssertionError),"if `size<0`")];},d:['ceylon.collection','ListMutator','$m','truncate']};};
listMutator$.clone={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:ListMutator,a:{Element$ListMutator:'Element$ListMutator'}},ps:[],$cont:ListMutator,pa:7,d:['ceylon.collection','ListMutator','$m','clone']};}};
})(ListMutator.$$.prototype);
}
return ListMutator;
}
ex$.$init$ListMutator=$init$ListMutator;
$init$ListMutator();
function measureToSpan($235,$236){return ($237=(($236<=0)?m$1.tpl$([(-1),(-1)]):null),m$1.nn$($237)?$237:m$1.tpl$([$235,$235.plus($236).minus(1)]));
var $237;
};
measureToSpan.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'T',l:[{t:m$1.Integer},{t:m$1.Integer}]},ps:[{nm:'from',mt:'prm',$t:{t:m$1.Integer}},{nm:'length',mt:'prm',$t:{t:m$1.Integer}}],an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:measureToSpan')];},d:['ceylon.collection','measureToSpan']};};
function spanToMeasure($238,$239,$23a){
if((($23a==(0))||(($238<0)&&($239<0)))){
return m$1.tpl$([0,0,false]);
}
var $23b=($238>$239);
var $23c=largest(0,($23d=($23b?$239:null),m$1.nn$($23d)?$23d:$238));
var $23d;
var $23e=smallest($23a.minus(1),($23f=($23b?$238:null),m$1.nn$($23f)?$23f:$239));
var $23f;
return m$1.tpl$([$23c,(1).plus($23e).minus($23c),$23b]);
};spanToMeasure.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'T',l:[{t:m$1.Integer},{t:m$1.Integer},{t:m$1.$_Boolean}]},ps:[{nm:'from',mt:'prm',$t:{t:m$1.Integer}},{nm:'to',mt:'prm',$t:{t:m$1.Integer}},{nm:'size',mt:'prm',$t:{t:m$1.Integer}}],an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:spanToMeasure')];},d:['ceylon.collection','spanToMeasure']};};
function largest($23g,$23h){return ($23i=(($23g>$23h)?$23g:null),m$1.nn$($23i)?$23i:$23h);
var $23i;
};
largest.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'x',mt:'prm',$t:{t:m$1.Integer}},{nm:'y',mt:'prm',$t:{t:m$1.Integer}}],d:['ceylon.collection','largest']};};
function smallest($23j,$23k){return ($23l=(($23j<$23k)?$23j:null),m$1.nn$($23l)?$23l:$23k);
var $23l;
};
smallest.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'x',mt:'prm',$t:{t:m$1.Integer}},{nm:'y',mt:'prm',$t:{t:m$1.Integer}}],d:['ceylon.collection','smallest']};};
function HashMap$$c($$targs$$,hashMap$){
m$1.set_type_args(hashMap$,$$targs$$);
MutableMap({Key$MutableMap:$$targs$$.Key$HashMap,Item$MutableMap:$$targs$$.Item$HashMap},hashMap$);
}
function HashMap(){return HashMap$c_$c$.apply(undefined,arguments);}
function HashMap$c_$c$$$a($23m,$23n,$23o,$$targs$$,hashMap$){
if($23m===undefined){$23m=linked();}
if($23n===undefined){$23n=Hashtable();}
if($23o===undefined){$23o=m$1.empty();}
hashMap$.$1dkeuw$23p_=null;
hashMap$.$1dkeuw$23q_=null;
hashMap$.$1dkeuw$23r_=$23m;
m$1.atr$(hashMap$,'$1dkeuw$23r',function(){return this.$1dkeuw$23r_;},undefined,function(){return{mod:$CCMM$,$t:{t:Stability},$cont:HashMap,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:HashMap:$at:stability$b6pnod')];},d:['ceylon.collection','HashMap','$at','stability$b6pnod']};});
hashMap$.$1dkeuw$23s_=$23n;
m$1.atr$(hashMap$,'$1dkeuw$23s',function(){return this.$1dkeuw$23s_;},undefined,function(){return{mod:$CCMM$,$t:{t:Hashtable},$cont:HashMap,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:HashMap:$at:hashtable$uda49w')];},d:['ceylon.collection','HashMap','$at','hashtable$uda49w']};});
hashMap$.$1dkeuw$23t_=$23o;
m$1.atr$(hashMap$,'$1dkeuw$23t',function(){return this.$1dkeuw$23t_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Iterable,a:{Element$Iterable:{t:m$1.Entry,a:{Item$Entry:'Item$HashMap',Key$Entry:'Key$HashMap'}},Absent$Iterable:{t:m$1.Null}}},$cont:HashMap,pa:3,an:function(){return[m$1.doc("The initial entries in the map.")];},d:['ceylon.collection','HashMap','$at','entries$ujasno']};});
hashMap$.$1dkeuw$23u_=(0);
m$1.atr$(hashMap$,'$1dkeuw$23u',function(){return this.$1dkeuw$23u_;},function($23v){return this.$1dkeuw$23u_=$23v;},function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:HashMap,pa:1027,an:function(){return[m$1.doc("Number of elements in this map.")];},d:['ceylon.collection','HashMap','$at','length$g7vp02']};});
hashMap$.$1dkeuw$23w_=m$1.is$($23o,{t:m$1.Collection,a:{Element$Collection:{t:m$1.Anything}}});
m$1.atr$(hashMap$,'$1dkeuw$23w',function(){return this.$1dkeuw$23w_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},$cont:HashMap,pa:3,d:['ceylon.collection','HashMap','$at','accurateInitialCapacity$qwzvpy']};});
var $23x=($23y=(hashMap$.$1dkeuw$23w?$23n.initialCapacityForSize($23o.size):null),m$1.nn$($23y)?$23y:$23n.initialCapacityForUnknownSize());
$prop$get$23x={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:HashMap,d:['ceylon.collection','HashMap','$cn','$def','$at','initialCapacity$vvzb8c']};}};
$prop$get$23x.get=function(){return $23x};
var $23y;
hashMap$.$1dkeuw$23z_=cachingEntryStore($23x,{Key$cachingEntryStore:hashMap$.$$targs$$.Key$HashMap,Item$cachingEntryStore:hashMap$.$$targs$$.Item$HashMap});
m$1.atr$(hashMap$,'$1dkeuw$23z',function(){return this.$1dkeuw$23z_;},function($240){return this.$1dkeuw$23z_=$240;},function(){return{mod:$CCMM$,$t:{t:m$1.$_Array,a:{Element$Array:{t:'u',l:[{t:m$1.Null},{t:CachingCell,a:{Element$CachingCell:{t:m$1.Entry,a:{Item$Entry:'Item$HashMap',Key$Entry:'Key$HashMap'}}}}]}}},$cont:HashMap,pa:1027,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:HashMap:$at:store$9kaiqz')];},d:['ceylon.collection','HashMap','$at','store$9kaiqz']};});
return hashMap$;
};
function HashMap$c_$c$($23m,$23n,$23o,$$targs$$,hashMap$){
$init$HashMap();
if(hashMap$===undefined)hashMap$=new HashMap.$$;
if($23m===undefined){$23m=linked();}
if($23n===undefined){$23n=Hashtable();}
if($23o===undefined){$23o=m$1.empty();}
HashMap$$c($$targs$$,hashMap$);
HashMap$c_$c$$$a($23m,$23n,$23o,$$targs$$,hashMap$);
var $242;for(var $241=hashMap$.$1dkeuw$23t.iterator();($242=$241.next())!==m$1.finished();){
if(hashMap$.$1dkeuw$243(hashMap$.$1dkeuw$23z,$242)){
($244=hashMap$.$1dkeuw$23u,hashMap$.$1dkeuw$23u=$244.successor,$244);
var $244;
}
}
if(!hashMap$.$1dkeuw$23w){
hashMap$.$1dkeuw$245();
}
return hashMap$;
};
HashMap$c_$c$.$crtmm$=function(){return{mod:$CCMM$,ps:[{nm:'stability',mt:'prm',def:1,$t:{t:Stability},an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:HashMap:$cn:$def:$at:stability$8yo5l5')];}},{nm:'hashtable',mt:'prm',def:1,$t:{t:Hashtable},an:function(){return[m$1.doc("Performance-related settings for the backing array.")];}},{nm:'entries',mt:'prm',def:1,$t:{t:m$1.Iterable,a:{Element$Iterable:{t:m$1.Entry,a:{Item$Entry:'Item$HashMap',Key$Entry:'Key$HashMap'}},Absent$Iterable:{t:m$1.Null}}},an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:HashMap:$cn:$def:$at:entries$kcfg1y')];}}],$cont:HashMap,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:HashMap:$cn:$def')];},d:['ceylon.collection','HashMap','$cn','$def']};};
HashMap.HashMap$c_$c$=HashMap$c_$c$;
ex$.HashMap$c_$c$=HashMap$c_$c$;
function HashMap$c_copy$$a($246,$247,$248,$$targs$$,hashMap$){
if($247===undefined){$247=$246.$1dkeuw$23r;}
if($248===undefined){$248=Hashtable();}
hashMap$.$1dkeuw$23p_=null;
hashMap$.$1dkeuw$23q_=null;
hashMap$.$1dkeuw$23r_=$247;
m$1.atr$(hashMap$,'$1dkeuw$23r',function(){return this.$1dkeuw$23r_;},undefined,function(){return{mod:$CCMM$,$t:{t:Stability},$cont:HashMap,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:HashMap:$at:stability$b6pnod')];},d:['ceylon.collection','HashMap','$at','stability$b6pnod']};});
hashMap$.$1dkeuw$23s_=$248;
m$1.atr$(hashMap$,'$1dkeuw$23s',function(){return this.$1dkeuw$23s_;},undefined,function(){return{mod:$CCMM$,$t:{t:Hashtable},$cont:HashMap,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:HashMap:$at:hashtable$uda49w')];},d:['ceylon.collection','HashMap','$at','hashtable$uda49w']};});
hashMap$.$1dkeuw$23w_=true;
m$1.atr$(hashMap$,'$1dkeuw$23w',function(){return this.$1dkeuw$23w_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},$cont:HashMap,pa:3,d:['ceylon.collection','HashMap','$at','accurateInitialCapacity$qwzvpy']};});
hashMap$.$1dkeuw$23z_=cachingEntryStore($246.$1dkeuw$23z.size,{Key$cachingEntryStore:hashMap$.$$targs$$.Key$HashMap,Item$cachingEntryStore:hashMap$.$$targs$$.Item$HashMap});
m$1.atr$(hashMap$,'$1dkeuw$23z',function(){return this.$1dkeuw$23z_;},function($249){return this.$1dkeuw$23z_=$249;},function(){return{mod:$CCMM$,$t:{t:m$1.$_Array,a:{Element$Array:{t:'u',l:[{t:m$1.Null},{t:CachingCell,a:{Element$CachingCell:{t:m$1.Entry,a:{Item$Entry:'Item$HashMap',Key$Entry:'Key$HashMap'}}}}]}}},$cont:HashMap,pa:1027,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:HashMap:$at:store$9kaiqz')];},d:['ceylon.collection','HashMap','$at','store$9kaiqz']};});
if(m$1.$eq$($247,unlinked())){
hashMap$.$1dkeuw$23t_=m$1.empty();
hashMap$.$1dkeuw$23u=$246.$1dkeuw$23u;
var $24a=(0);
$prop$get$24a={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:HashMap,pa:1024,d:['ceylon.collection','HashMap','$cn','copy','$at','index$3a26oa']};}};
$prop$get$24a.get=function(){return $24a};
while(($24a<$246.$1dkeuw$23z.size)){
var $24b;
if(m$1.nn$(($24b=$246.$1dkeuw$23z.$_get($24a)))){
($24c=$24b.clone(),hashMap$.$1dkeuw$23z.set($24a,$24c), $24c);
var $24c;
}
($24d=$24a,$24a=$24d.successor,$24d);
var $24d;
}
}
else{
hashMap$.$1dkeuw$23u=(0);
hashMap$.$1dkeuw$23t_=$246;
}
return hashMap$;
};
function HashMap$c_copy($246,$247,$248,$$targs$$,hashMap$){
$init$HashMap();
if(hashMap$===undefined)hashMap$=new HashMap.$$;
if($247===undefined){$247=$246.$1dkeuw$23r;}
if($248===undefined){$248=Hashtable();}
HashMap$$c($$targs$$,hashMap$);
HashMap$c_copy$$a($246,$247,$248,$$targs$$,hashMap$);
var $242;for(var $24e=hashMap$.$1dkeuw$23t.iterator();($242=$24e.next())!==m$1.finished();){
if(hashMap$.$1dkeuw$243(hashMap$.$1dkeuw$23z,$242)){
($24f=hashMap$.$1dkeuw$23u,hashMap$.$1dkeuw$23u=$24f.successor,$24f);
var $24f;
}
}
if(!hashMap$.$1dkeuw$23w){
hashMap$.$1dkeuw$245();
}
return hashMap$;
};
HashMap$c_copy.$crtmm$=function(){return{mod:$CCMM$,ps:[{nm:'hashMap',mt:'prm',$t:{t:HashMap,a:{Key$HashMap:'Key$HashMap',Item$HashMap:'Item$HashMap'}},an:function(){return[m$1.doc("The `HashMap` to copy.")];}},{nm:'stability',mt:'prm',def:1,$t:{t:Stability},an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:HashMap:$cn:copy:$at:stability$gbelws')];}},{nm:'hashtable',mt:'prm',def:1,$t:{t:Hashtable},an:function(){return[m$1.doc("Performance-related settings for the backing array.")];}}],$cont:HashMap,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:HashMap:$cn:copy')];},d:['ceylon.collection','HashMap','$cn','copy']};};
HashMap.HashMap$c_copy=HashMap$c_copy;
ex$.HashMap$c_copy=HashMap$c_copy;
HashMap.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'stability',mt:'prm',def:1,$t:{t:Stability},an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:HashMap:$cn:$def:$at:stability$8yo5l5')];}},{nm:'hashtable',mt:'prm',def:1,$t:{t:Hashtable},an:function(){return[m$1.doc("Performance-related settings for the backing array.")];}},{nm:'entries',mt:'prm',def:1,$t:{t:m$1.Iterable,a:{Element$Iterable:{t:m$1.Entry,a:{Item$Entry:'Item$HashMap',Key$Entry:'Key$HashMap'}},Absent$Iterable:{t:m$1.Null}}},an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:HashMap:$cn:$def:$at:entries$kcfg1y')];}}],tp:{Key$HashMap:{sts:[{t:m$1.$_Object}]},Item$HashMap:{}},sts:[{t:MutableMap,a:{Key$MutableMap:'Key$HashMap',Item$MutableMap:'Item$HashMap'}}],pa:2049,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:HashMap'),m$1.by(m$1.$arr$sa$(["St\u00e9phane \u00c9pardaud"],{t:m$1.$_String}))];},d:['ceylon.collection','HashMap']};};
ex$.HashMap=HashMap;
function $init$HashMap(){
if(HashMap.$$===undefined){
m$1.initTypeProto(HashMap,'ceylon.collection::HashMap',m$1.Basic,$init$MutableMap());
(function(hashMap$){
m$1.atr$(hashMap$,'$1dkeuw$23r',function(){return this.$1dkeuw$23r_;},undefined,function(){return{mod:$CCMM$,$t:{t:Stability},$cont:HashMap,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:HashMap:$at:stability$b6pnod')];},d:['ceylon.collection','HashMap','$at','stability$b6pnod']};});
m$1.atr$(hashMap$,'$1dkeuw$23t',function(){return this.$1dkeuw$23t_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Iterable,a:{Element$Iterable:{t:m$1.Entry,a:{Item$Entry:'Item$HashMap',Key$Entry:'Key$HashMap'}},Absent$Iterable:{t:m$1.Null}}},$cont:HashMap,pa:3,an:function(){return[m$1.doc("The initial entries in the map.")];},d:['ceylon.collection','HashMap','$at','entries$ujasno']};});
m$1.atr$(hashMap$,'$1dkeuw$23s',function(){return this.$1dkeuw$23s_;},undefined,function(){return{mod:$CCMM$,$t:{t:Hashtable},$cont:HashMap,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:HashMap:$at:hashtable$uda49w')];},d:['ceylon.collection','HashMap','$at','hashtable$uda49w']};});
m$1.atr$(hashMap$,'$1dkeuw$23w',function(){return this.$1dkeuw$23w_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},$cont:HashMap,pa:3,d:['ceylon.collection','HashMap','$at','accurateInitialCapacity$qwzvpy']};});
m$1.atr$(hashMap$,'$1dkeuw$23z',function(){return this.$1dkeuw$23z_;},function($24g){return this.$1dkeuw$23z_=$24g;},function(){return{mod:$CCMM$,$t:{t:m$1.$_Array,a:{Element$Array:{t:'u',l:[{t:m$1.Null},{t:CachingCell,a:{Element$CachingCell:{t:m$1.Entry,a:{Item$Entry:'Item$HashMap',Key$Entry:'Key$HashMap'}}}}]}}},$cont:HashMap,pa:1027,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:HashMap:$at:store$9kaiqz')];},d:['ceylon.collection','HashMap','$at','store$9kaiqz']};});
m$1.atr$(hashMap$,'$1dkeuw$23u',function(){return this.$1dkeuw$23u_;},function($24h){return this.$1dkeuw$23u_=$24h;},function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:HashMap,pa:1027,an:function(){return[m$1.doc("Number of elements in this map.")];},d:['ceylon.collection','HashMap','$at','length$g7vp02']};});
m$1.atr$(hashMap$,'$1dkeuw$23p',function(){return this.$1dkeuw$23p_;},function($24i){return this.$1dkeuw$23p_=$24i;},function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:LinkedCell,a:{Element$LinkedCell:{t:m$1.Entry,a:{Item$Entry:'Item$HashMap',Key$Entry:'Key$HashMap'}}}}]},$cont:HashMap,pa:1027,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:HashMap:$at:head$7e95fo')];},d:['ceylon.collection','HashMap','$at','head$7e95fo']};});
m$1.atr$(hashMap$,'$1dkeuw$23q',function(){return this.$1dkeuw$23q_;},function($24j){return this.$1dkeuw$23q_=$24j;},function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:LinkedCell,a:{Element$LinkedCell:{t:m$1.Entry,a:{Item$Entry:'Item$HashMap',Key$Entry:'Key$HashMap'}}}}]},$cont:HashMap,pa:1027,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:HashMap:$at:tip$66h29t')];},d:['ceylon.collection','HashMap','$at','tip$66h29t']};});
hashMap$.$1dkeuw$24k=function($24l){var hashMap$=this;
return function(){var $24m=$24l.hash;return $24m.xor($24m.rightLogicalShift(16));
}();
};
hashMap$.$1dkeuw$24k.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'key',mt:'prm',$t:{t:m$1.$_Object}}],$cont:HashMap,d:['ceylon.collection','HashMap','$m','hashCode$39nm0x']};};
hashMap$.$1dkeuw$24n=function($24o,$24p){var hashMap$=this;
return $24o.and($24p.size.minus(1));
};
hashMap$.$1dkeuw$24n.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'keyHash',mt:'prm',$t:{t:m$1.Integer}},{nm:'store',mt:'prm',$t:{t:m$1.$_Array,a:{Element$Array:{t:'u',l:[{t:m$1.Null},{t:CachingCell,a:{Element$CachingCell:{t:m$1.Entry,a:{Item$Entry:'Item$HashMap',Key$Entry:'Key$HashMap'}}}}]}}}}],$cont:HashMap,d:['ceylon.collection','HashMap','$m','storeIndex$e9z3xh']};};
hashMap$.$1dkeuw$24q=function($24r,$24s,$24t){
var hashMap$=this;
if(m$1.$eq$(hashMap$.$1dkeuw$23r,linked())){
var $24u=LinkedCell($24r,$24s,$24t,hashMap$.$1dkeuw$23q,{Element$LinkedCell:{t:m$1.Entry,a:{Item$Entry:hashMap$.$$targs$$.Item$HashMap/*ORALE!Item inv pero Item var*/,Key$Entry:hashMap$.$$targs$$.Key$HashMap/*ORALE!Key inv pero Key var*/}}});
var $24v;
if(m$1.nn$(($24v=hashMap$.$1dkeuw$23q))){
($24v.next=$24u);
}
hashMap$.$1dkeuw$23q=$24u;
if(!m$1.nn$(hashMap$.$1dkeuw$23p)){
hashMap$.$1dkeuw$23p=$24u;
}
return $24u;
}
else{
return CachingCell($24r,$24s,$24t,{Element$CachingCell:{t:m$1.Entry,a:{Item$Entry:hashMap$.$$targs$$.Item$HashMap/*ORALE!Item inv pero Item var*/,Key$Entry:hashMap$.$$targs$$.Key$HashMap/*ORALE!Key inv pero Key var*/}}});
}
};hashMap$.$1dkeuw$24q.$crtmm$=function(){return{mod:$CCMM$,$t:{t:CachingCell,a:{Element$CachingCell:{t:m$1.Entry,a:{Item$Entry:'Item$HashMap',Key$Entry:'Key$HashMap'}}}},ps:[{nm:'entry',mt:'prm',$t:{t:m$1.Entry,a:{Item$Entry:'Item$HashMap',Key$Entry:'Key$HashMap'}}},{nm:'keyHash',mt:'prm',$t:{t:m$1.Integer}},{nm:'rest',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},{t:CachingCell,a:{Element$CachingCell:{t:m$1.Entry,a:{Item$Entry:'Item$HashMap',Key$Entry:'Key$HashMap'}}}}]}}],$cont:HashMap,d:['ceylon.collection','HashMap','$m','createCell$a7w20a']};};
hashMap$.$1dkeuw$24w=function($24x){
var hashMap$=this;
if(m$1.$eq$(hashMap$.$1dkeuw$23r,linked())){
var $24y;
m$1.asrt$((m$1.is$(($24y=$24x),{t:LinkedCell,a:{Element$LinkedCell:{t:m$1.Entry,a:{Item$Entry:hashMap$.$$targs$$.Item$HashMap/*ORALE!Item inv pero Item var*/,Key$Entry:hashMap$.$$targs$$.Key$HashMap/*ORALE!Key inv pero Key var*/}}}})),"Assertion failed: \'is LinkedCell<Key->Item> cell\' at HashMap.ceylon (167:19-167:49)",'167:12-167:50','HashMap.ceylon');
var $24z;
if(m$1.nn$(($24z=$24y.previous))){
($24z.next=$24y.next);
}
else{
hashMap$.$1dkeuw$23p=$24y.next;
}
var $250;
if(m$1.nn$(($250=$24y.next))){
($250.previous=$24y.previous);
}
else{
hashMap$.$1dkeuw$23q=$24y.previous;
}
}
};hashMap$.$1dkeuw$24w.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'cell',mt:'prm',$t:{t:CachingCell,a:{Element$CachingCell:{t:m$1.Entry,a:{Item$Entry:'Item$HashMap',Key$Entry:'Key$HashMap'}}}}}],$cont:HashMap,d:['ceylon.collection','HashMap','$m','deleteCell$bxnuyp']};};
hashMap$.$1dkeuw$243=function($251,$252){
var hashMap$=this;
var $253=hashMap$.$1dkeuw$24k($252.key);
var $254=hashMap$.$1dkeuw$24n($253,$251);
var $255=$251.$_get($254);
var $256=$255;
var $257;
while(m$1.nn$(($257=$256))){
if((($257.keyHash==$253)&&m$1.$eq$($257.element.key,$252.key))){
($257.element=$252);
return false;
}
$256=$257.rest;
}
($258=hashMap$.$1dkeuw$24q($252,$253,$255),$251.set($254,$258), $258);
var $258;
return true;
};hashMap$.$1dkeuw$243.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'store',mt:'prm',$t:{t:m$1.$_Array,a:{Element$Array:{t:'u',l:[{t:m$1.Null},{t:CachingCell,a:{Element$CachingCell:{t:m$1.Entry,a:{Item$Entry:'Item$HashMap',Key$Entry:'Key$HashMap'}}}}]}}}},{nm:'entry',mt:'prm',$t:{t:m$1.Entry,a:{Item$Entry:'Item$HashMap',Key$Entry:'Key$HashMap'}}}],$cont:HashMap,d:['ceylon.collection','HashMap','$m','addToStore$vlhtif']};};
hashMap$.$1dkeuw$245=function(){
var hashMap$=this;
if(hashMap$.$1dkeuw$23s.rehash(hashMap$.$1dkeuw$23u,hashMap$.$1dkeuw$23z.size)){
var $259=cachingEntryStore(hashMap$.$1dkeuw$23s.capacity(hashMap$.$1dkeuw$23u),{Key$cachingEntryStore:hashMap$.$$targs$$.Key$HashMap,Item$cachingEntryStore:hashMap$.$$targs$$.Item$HashMap});
var $25a=(0);
while(($25a<hashMap$.$1dkeuw$23z.size)){
var $25b=hashMap$.$1dkeuw$23z.$_get($25a);
var $25c;
while(m$1.nn$(($25c=$25b))){
$25b=$25c.rest;
var $25d=hashMap$.$1dkeuw$24n($25c.keyHash,$259);
var $25e=$259.$_get($25d);
($25c.rest=$25e);
($25f=$25c,$259.set($25d,$25f), $25f);
var $25f;
}
($25g=$25a,$25a=$25g.successor,$25g);
var $25g;
}
hashMap$.$1dkeuw$23z=$259;
}
};hashMap$.$1dkeuw$245.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[],$cont:HashMap,d:['ceylon.collection','HashMap','$m','checkRehash$glqfdp']};};
hashMap$.put=function($25h,$25i){
var hashMap$=this;
var $25j=hashMap$.$1dkeuw$24k($25h);
var $25k=hashMap$.$1dkeuw$24n($25j,hashMap$.$1dkeuw$23z);
var $25l=m$1.Entry($25h,$25i,{Item$Entry:hashMap$.$$targs$$.Item$HashMap/*ORALE!Item inv pero Item var*/,Key$Entry:hashMap$.$$targs$$.Key$HashMap/*ORALE!Key inv pero Key var*/});
var $25m=hashMap$.$1dkeuw$23z.$_get($25k);
var $25n=$25m;
var $25o;
while(m$1.nn$(($25o=$25n))){
if((($25o.keyHash==$25j)&&m$1.$eq$($25o.element.key,$25h))){
var $25p=$25o.element.item;
($25o.element=$25l);
return $25p;
}
$25n=$25o.rest;
}
($25q=hashMap$.$1dkeuw$24q($25l,$25j,$25m),hashMap$.$1dkeuw$23z.set($25k,$25q), $25q);
var $25q;
($25r=hashMap$.$1dkeuw$23u,hashMap$.$1dkeuw$23u=$25r.successor,$25r);
var $25r;
hashMap$.$1dkeuw$245();
return null;
};hashMap$.put.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Item$HashMap']},ps:[{nm:'key',mt:'prm',$t:'Key$HashMap'},{nm:'item',mt:'prm',$t:'Item$HashMap'}],$cont:HashMap,pa:3,d:['ceylon.collection','HashMap','$m','put']};};
hashMap$.replaceEntry=function($25s,$25t,$25u){
var hashMap$=this;
var $25v=hashMap$.$1dkeuw$24k($25s);
var $25w=hashMap$.$1dkeuw$24n($25v,hashMap$.$1dkeuw$23z);
var $25x=hashMap$.$1dkeuw$23z.$_get($25w);
var $25y;
while(m$1.nn$(($25y=$25x))){
if((($25y.keyHash==$25v)&&m$1.$eq$($25y.element.key,$25s))){
var $25z;
if(m$1.nn$(($25z=$25y.element.item))&&m$1.$eq$($25z,$25t)){
($25y.element=m$1.Entry($25s,$25u,{Item$Entry:hashMap$.$$targs$$.Item$HashMap/*ORALE!Item inv pero Item var*/,Key$Entry:hashMap$.$$targs$$.Key$HashMap/*ORALE!Key inv pero Key var*/}));
return true;
}
else{
return false;
}
}
$25x=$25y.rest;
}
return false;
};hashMap$.replaceEntry.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'key',mt:'prm',$t:'Key$HashMap'},{nm:'item',mt:'prm',$t:{t:'i',l:['Item$HashMap',{t:m$1.$_Object}]}},{nm:'newItem',mt:'prm',$t:'Item$HashMap'}],$cont:HashMap,pa:3,d:['ceylon.collection','HashMap','$m','replaceEntry']};};
hashMap$.putAll=function($260){
var hashMap$=this;
var $262;for(var $261=$260.iterator();($262=$261.next())!==m$1.finished();){
if(hashMap$.$1dkeuw$243(hashMap$.$1dkeuw$23z,$262)){
($263=hashMap$.$1dkeuw$23u,hashMap$.$1dkeuw$23u=$263.successor,$263);
var $263;
}
}
hashMap$.$1dkeuw$245();
};hashMap$.putAll.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'entries',mt:'prm',$t:{t:m$1.Iterable,a:{Element$Iterable:{t:m$1.Entry,a:{Item$Entry:'Item$HashMap',Key$Entry:'Key$HashMap'}},Absent$Iterable:{t:m$1.Null}}}}],$cont:HashMap,pa:3,d:['ceylon.collection','HashMap','$m','putAll']};};
hashMap$.remove=function($264){
var hashMap$=this;
var $265=hashMap$.$1dkeuw$24k($264);
var $266=hashMap$.$1dkeuw$24n($265,hashMap$.$1dkeuw$23z);
var $267;
if(m$1.nn$(($267=hashMap$.$1dkeuw$23z.$_get($266)))&&($267.keyHash==$265)&&m$1.$eq$($267.element.key,$264)){
($268=$267.rest,hashMap$.$1dkeuw$23z.set($266,$268), $268);
var $268;
hashMap$.$1dkeuw$24w($267);
($269=hashMap$.$1dkeuw$23u,hashMap$.$1dkeuw$23u=$269.predecessor,$269);
var $269;
return $267.element.item;
}
var $26a=hashMap$.$1dkeuw$23z.$_get($266);
var $26b;
while(m$1.nn$(($26b=$26a))){
var $26c=$26b.rest;
var $26d;
if(m$1.nn$(($26d=$26c))&&m$1.$eq$($26d.element.key,$264)){
($26b.rest=$26d.rest);
hashMap$.$1dkeuw$24w($26d);
($26e=hashMap$.$1dkeuw$23u,hashMap$.$1dkeuw$23u=$26e.predecessor,$26e);
var $26e;
return $26d.element.item;
}
else{
$26a=$26c;
}
}
return null;
};hashMap$.remove.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Item$HashMap']},ps:[{nm:'key',mt:'prm',$t:'Key$HashMap'}],$cont:HashMap,pa:3,d:['ceylon.collection','HashMap','$m','remove']};};
hashMap$.removeEntry=function($26f,$26g){
var hashMap$=this;
var $26h=hashMap$.$1dkeuw$24k($26f);
var $26i=hashMap$.$1dkeuw$24n($26h,hashMap$.$1dkeuw$23z);
var $26j;
while(m$1.nn$(($26j=hashMap$.$1dkeuw$23z.$_get($26i)))&&($26j.keyHash==$26h)&&m$1.$eq$($26j.element.key,$26f)){
var $26k;
if(m$1.nn$(($26k=$26j.element.item))&&m$1.$eq$($26k,$26g)){
($26l=$26j.rest,hashMap$.$1dkeuw$23z.set($26i,$26l), $26l);
var $26l;
($26m=hashMap$.$1dkeuw$23u,hashMap$.$1dkeuw$23u=$26m.predecessor,$26m);
var $26m;
return true;
}
else{
return false;
}
}
var $26n=hashMap$.$1dkeuw$23z.$_get($26i);
var $26o;
while(m$1.nn$(($26o=$26n))){
var $26p=$26o.rest;
var $26q;
if(m$1.nn$(($26q=$26p))&&m$1.$eq$($26q.element.key,$26f)){
var $26r;
if(m$1.nn$(($26r=$26q.element.item))&&m$1.$eq$($26r,$26g)){
($26o.rest=$26q.rest);
hashMap$.$1dkeuw$24w($26q);
($26s=hashMap$.$1dkeuw$23u,hashMap$.$1dkeuw$23u=$26s.predecessor,$26s);
var $26s;
return true;
}
else{
return false;
}
}
else{
$26n=$26p;
}
}
return false;
};hashMap$.removeEntry.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'key',mt:'prm',$t:'Key$HashMap'},{nm:'item',mt:'prm',$t:{t:'i',l:['Item$HashMap',{t:m$1.$_Object}]}}],$cont:HashMap,pa:3,d:['ceylon.collection','HashMap','$m','removeEntry']};};
hashMap$.clear=function(){
var hashMap$=this;
var $26t=(0);
while(($26t<hashMap$.$1dkeuw$23z.size)){
($26u=null,hashMap$.$1dkeuw$23z.set(($26v=$26t,$26t=$26v.successor,$26v),$26u), $26u);
var $26u,$26v;
}
hashMap$.$1dkeuw$23u=(0);
hashMap$.$1dkeuw$23p=null;
hashMap$.$1dkeuw$23q=null;
};hashMap$.clear.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[],$cont:HashMap,pa:3,d:['ceylon.collection','HashMap','$m','clear']};};
m$1.atr$(hashMap$,'size',function(){
var hashMap$=this;
return hashMap$.$1dkeuw$23u;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:HashMap,pa:3,d:['ceylon.collection','HashMap','$at','size']};});
m$1.atr$(hashMap$,'empty',function(){
var hashMap$=this;
return (hashMap$.$1dkeuw$23u==(0));
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},$cont:HashMap,pa:3,d:['ceylon.collection','HashMap','$at','empty']};});
hashMap$.$_get=function($26w){
var hashMap$=this;
if(hashMap$.empty){
return null;
}
var $26x=hashMap$.$1dkeuw$24k($26w);
var $26y=hashMap$.$1dkeuw$24n($26x,hashMap$.$1dkeuw$23z);
var $26z=hashMap$.$1dkeuw$23z.$_get($26y);
var $270;
while(m$1.nn$(($270=$26z))){
if((($270.keyHash==$26x)&&m$1.$eq$($270.element.key,$26w))){
return $270.element.item;
}
$26z=$270.rest;
}
return null;
};hashMap$.$_get.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Item$HashMap']},ps:[{nm:'key',mt:'prm',$t:{t:m$1.$_Object}}],$cont:HashMap,pa:3,d:['ceylon.collection','HashMap','$m','get']};};
hashMap$.getOrDefault=function($271,$272,$6rx8ao$){
var hashMap$=this;
if(hashMap$.empty){
return $272;
}
var $273=hashMap$.$1dkeuw$24k($271);
var $274=hashMap$.$1dkeuw$24n($273,hashMap$.$1dkeuw$23z);
var $275=hashMap$.$1dkeuw$23z.$_get($274);
var $276;
while(m$1.nn$(($276=$275))){
if((($276.keyHash==$273)&&m$1.$eq$($276.element.key,$271))){
return $276.element.item;
}
$275=$276.rest;
}
return $272;
};hashMap$.getOrDefault.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:['Item$HashMap','Default$getOrDefault']},ps:[{nm:'key',mt:'prm',$t:{t:m$1.$_Object}},{nm:'default',mt:'prm',$t:'Default$getOrDefault'}],$cont:HashMap,tp:{Default$getOrDefault:{}},pa:3,d:['ceylon.collection','HashMap','$m','getOrDefault']};};
m$1.atr$(hashMap$,'first',function(){
var hashMap$=this;
return (m$1.$eq$(hashMap$.$1dkeuw$23r,linked())?($278=hashMap$.$1dkeuw$23p,m$1.nn$($278)?$278.element:null):($279=hashMap$.$1dkeuw$23z.coalesced.first,m$1.nn$($279)?$279.element:null));
var $278,$279;
},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Entry,a:{Item$Entry:'Item$HashMap',Key$Entry:'Key$HashMap'}}]},$cont:HashMap,pa:3,d:['ceylon.collection','HashMap','$at','first']};});
m$1.atr$(hashMap$,'last',function(){
var hashMap$=this;
if(m$1.$eq$(hashMap$.$1dkeuw$23r,linked())){
return ($27a=hashMap$.$1dkeuw$23q,m$1.nn$($27a)?$27a.element:null);
var $27a;
}
else{
var $27b=hashMap$.$1dkeuw$23z.reversed.coalesced.first;
var $27c;
while(m$1.nn$(($27c=($27d=$27b,m$1.nn$($27d)?$27d.rest:null)))){
$27b=$27c;
}
var $27d;
return ($27e=$27b,m$1.nn$($27e)?$27e.element:null);
var $27e;
}
},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Entry,a:{Item$Entry:'Item$HashMap',Key$Entry:'Key$HashMap'}}]},$cont:HashMap,pa:3,d:['ceylon.collection','HashMap','$at','last']};});hashMap$.iterator=function(){var hashMap$=this;
return ($27f=(m$1.$eq$(hashMap$.$1dkeuw$23r,linked())?LinkedCellIterator(hashMap$.$1dkeuw$23p,{Element$LinkedCellIterator:{t:m$1.Entry,a:{Item$Entry:hashMap$.$$targs$$.Item$HashMap/*ORALE!Item inv pero Item var*/,Key$Entry:hashMap$.$$targs$$.Key$HashMap/*ORALE!Key inv pero Key var*/}}}):null),m$1.nn$($27f)?$27f:CachingStoreIterator(hashMap$.$1dkeuw$23z,{Element$CachingStoreIterator:{t:m$1.Entry,a:{Item$Entry:hashMap$.$$targs$$.Item$HashMap/*ORALE!Item inv pero Item var*/,Key$Entry:hashMap$.$$targs$$.Key$HashMap/*ORALE!Key inv pero Key var*/}}}));
var $27f;
};hashMap$.count=function($27g){
var hashMap$=this;
var $27h=(0);
var $27i=(0);
while(($27h<hashMap$.$1dkeuw$23z.size)){
var $27j=hashMap$.$1dkeuw$23z.$_get($27h);
var $27k;
while(m$1.nn$(($27k=$27j))){
if($27g($27k.element)){
($27l=$27i,$27i=$27l.successor,$27l);
var $27l;
}
$27j=$27k.rest;
}
($27m=$27h,$27h=$27m.successor,$27m);
var $27m;
}
return $27i;
};hashMap$.count.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'selecting',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Arguments$Callable:{t:'T',l:[{t:m$1.Entry,a:{Item$Entry:'Item$HashMap',Key$Entry:'Key$HashMap'}}]},Return$Callable:{t:m$1.$_Boolean}}},$rt:{t:m$1.$_Boolean},ps:[{nm:'element',mt:'prm',$t:{t:m$1.Entry,a:{Item$Entry:'Item$HashMap',Key$Entry:'Key$HashMap'}}}]}],$cont:HashMap,pa:3,d:['ceylon.collection','HashMap','$m','count']};};
hashMap$.each=function($27n){
var hashMap$=this;
hashMap$.$1dkeuw$23z.each(m$1.jsc$2((function($27o){
var $27p=$27o;
$prop$get$27p={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:CachingCell,a:{Element$CachingCell:{t:m$1.Entry,a:{Item$Entry:'Item$HashMap',Key$Entry:'Key$HashMap'}}}}]},$cont:hashMap$.each,pa:1027,d:['ceylon.collection','HashMap','$m','each','$at','iter$edjelw']};}};
$prop$get$27p.get=function(){return $27p};
var $27q;
while(m$1.nn$(($27q=$27p))){
$27n($27q.element);
$27p=$27q.rest;
}
}),[{nm:'bucket',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},{t:CachingCell,a:{Element$CachingCell:{t:m$1.Entry,a:{Item$Entry:hashMap$.$$targs$$.Item$HashMap,Key$Entry:hashMap$.$$targs$$.Key$HashMap}}}}]}}],{Arguments$Callable:m$1.mtt$([m$1.mut$([{t:m$1.Null},{t:CachingCell,a:{Element$CachingCell:{t:m$1.Entry,a:{Item$Entry:hashMap$.$$targs$$.Item$HashMap/*ORALE!Item inv pero Item var*/,Key$Entry:hashMap$.$$targs$$.Key$HashMap/*ORALE!Key inv pero Key var*/}}}}])]),Return$Callable:{t:m$1.Anything}}));
};hashMap$.each.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'step',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Arguments$Callable:{t:'T',l:[{t:m$1.Entry,a:{Item$Entry:'Item$HashMap',Key$Entry:'Key$HashMap'}}]},Return$Callable:{t:m$1.Anything}}},$rt:{t:m$1.Anything},ps:[{nm:'element',mt:'prm',$t:{t:m$1.Entry,a:{Item$Entry:'Item$HashMap',Key$Entry:'Key$HashMap'}}}]}],$cont:HashMap,pa:3,d:['ceylon.collection','HashMap','$m','each']};};
m$1.atr$(hashMap$,'hash',function(){
var hashMap$=this;
var $27r=(0);
var $27s=(0);
while(($27r<hashMap$.$1dkeuw$23z.size)){
var $27t=hashMap$.$1dkeuw$23z.$_get($27r);
var $27u;
while(m$1.nn$(($27u=$27t))){
($27s=$27s.plus($27u.element.hash));
$27t=$27u.rest;
}
($27v=$27r,$27r=$27v.successor,$27v);
var $27v;
}
return $27s;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:HashMap,pa:3,d:['ceylon.collection','HashMap','$at','hash']};});hashMap$.equals=function($27w){
var hashMap$=this;
var $27x;
if(m$1.is$(($27x=$27w),{t:m$1.Map,a:{Key$Map:{t:m$1.$_Object},Item$Map:{t:m$1.Anything}}})&&(hashMap$.size==$27x.size)){
var $27y=(0);
while(($27y<hashMap$.$1dkeuw$23z.size)){
var $27z=hashMap$.$1dkeuw$23z.$_get($27y);
var $280;
while(m$1.nn$(($280=$27z))){
var $281=$27x.$_get($280.element.key);
var $282;
if(m$1.nn$(($282=$280.element.item))){
var $283;
if(m$1.nn$(($283=$281))){
if(!m$1.$eq$($283,$282)){
return false;
}
}
else{
return false;
}
}
else{
if(m$1.nn$($281)){
return false;
}
}
$27z=$280.rest;
}
($284=$27y,$27y=$284.successor,$284);
var $284;
}
return true;
}
return false;
};hashMap$.equals.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'that',mt:'prm',$t:{t:m$1.$_Object}}],$cont:HashMap,pa:3,d:['ceylon.collection','HashMap','$m','equals']};};
hashMap$.clone=function(){var hashMap$=this;
return HashMap$c_copy(hashMap$,undefined,undefined,{Key$HashMap:hashMap$.$$targs$$.Key$HashMap,Item$HashMap:hashMap$.$$targs$$.Item$HashMap});
};
hashMap$.clone.$crtmm$=function(){return{mod:$CCMM$,$t:{t:HashMap,a:{Key$HashMap:'Key$HashMap',Item$HashMap:'Item$HashMap'}},ps:[],$cont:HashMap,pa:3,d:['ceylon.collection','HashMap','$m','clone']};};
hashMap$.defines=function($285){
var hashMap$=this;
if(hashMap$.empty){
return false;
}
else{
var $286=hashMap$.$1dkeuw$24k($285);
var $287=hashMap$.$1dkeuw$24n($286,hashMap$.$1dkeuw$23z);
var $288=hashMap$.$1dkeuw$23z.$_get($287);
var $289;
while(m$1.nn$(($289=$288))){
if((($289.keyHash==$286)&&m$1.$eq$($289.element.key,$285))){
return true;
}
$288=$289.rest;
}
return false;
}
};hashMap$.defines.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'key',mt:'prm',$t:{t:m$1.$_Object}}],$cont:HashMap,pa:3,d:['ceylon.collection','HashMap','$m','defines']};};
hashMap$.contains=function($28a){
var hashMap$=this;
if(hashMap$.empty){
return false;
}
else{
var $28b;
if(m$1.is$(($28b=$28a),{t:m$1.Entry,a:{Item$Entry:{t:m$1.Anything},Key$Entry:{t:m$1.$_Object}}})){
var $28c=$28b.key;
var $28d=hashMap$.$1dkeuw$24k($28c);
var $28e=hashMap$.$1dkeuw$24n($28d,hashMap$.$1dkeuw$23z);
var $28f=hashMap$.$1dkeuw$23z.$_get($28e);
var $28g;
while(m$1.nn$(($28g=$28f))){
if((($28g.keyHash==$28d)&&m$1.$eq$($28g.element.key,$28c))){
var $28h;
if(m$1.nn$(($28h=$28g.element.item))){
var $28i;
if(m$1.nn$(($28i=$28b.item))){
return m$1.$eq$($28h,$28i);
}
else{
return false;
}
}
else{
return !m$1.nn$($28b.item);
}
}
$28f=$28g.rest;
}
return false;
}
else{
return false;
}
}
};hashMap$.contains.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'entry',mt:'prm',$t:{t:m$1.$_Object}}],$cont:HashMap,pa:3,d:['ceylon.collection','HashMap','$m','contains']};};
})(HashMap.$$.prototype);
}
return HashMap;
}
ex$.$init$HashMap=$init$HashMap;
$init$HashMap();
HashMap.inst$$=function($28j){
var hashMap$=new HashMap.$$;
m$1.set_type_args(hashMap$,{Key$HashMap:$28j.$$targs$$.Type$Class.a.Key$HashMap,Item$HashMap:$28j.$$targs$$.Type$Class.a.Item$HashMap});
m$1.set_type_args(hashMap$,{Key$MutableMap:hashMap$.$$targs$$.Key$HashMap,Item$MutableMap:hashMap$.$$targs$$.Item$HashMap,Key$Map:hashMap$.$$targs$$.Key$HashMap,Item$Map:hashMap$.$$targs$$.Item$HashMap,Element$Collection:{t:m$1.Entry,a:{Item$Entry:hashMap$.$$targs$$.Item$HashMap/*ORALE!Item inv pero Item var*/,Key$Entry:hashMap$.$$targs$$.Key$HashMap/*ORALE!Key inv pero Key var*/}},Element$Iterable:{t:m$1.Entry,a:{Item$Entry:hashMap$.$$targs$$.Item$HashMap/*ORALE!Item inv pero Item var*/,Key$Entry:hashMap$.$$targs$$.Key$HashMap/*ORALE!Key inv pero Key var*/}},Absent$Iterable:{t:m$1.Null},Element$Category:{t:m$1.$_Object},Item$Correspondence:hashMap$.$$targs$$.Item$HashMap,Key$Correspondence:{t:m$1.$_Object},Key$MapMutator:hashMap$.$$targs$$.Key$HashMap,Item$MapMutator:hashMap$.$$targs$$.Item$HashMap,Key$KeyedCorrespondenceMutator:hashMap$.$$targs$$.Key$HashMap,Item$KeyedCorrespondenceMutator:hashMap$.$$targs$$.Item$HashMap,Item$CorrespondenceMutator:hashMap$.$$targs$$.Item$HashMap});
return hashMap$;
};
HashMap.ser$get$=function(ref,o){var n=ref.attribute.qualifiedName;if(n==='ceylon.collection::HashMap.stability')return o.$1dkeuw$23r_;
else if(n==='ceylon.collection::HashMap.hashtable')return o.$1dkeuw$23s_;
else if(n==='ceylon.collection::HashMap.store')return o.$1dkeuw$23z_;
else if(n==='ceylon.collection::HashMap.length')return o.$1dkeuw$23u_;
else if(n==='ceylon.collection::HashMap.head')return o.$1dkeuw$23p_;
else if(n==='ceylon.collection::HashMap.tip')return o.$1dkeuw$23q_;
else throw new TypeError('unknown attribute');
};
HashMap.ser$set$=function(ref,o,i){if(!m$1.is$(ref,{t:m$1.Member$serialization}))throw m$1.AssertionError('unexpected reachable reference');var n=ref.attribute.qualifiedName;
if(n==='ceylon.collection::HashMap.stability')o.$1dkeuw$23r_=i;
else if(n==='ceylon.collection::HashMap.hashtable')o.$1dkeuw$23s_=i;
else if(n==='ceylon.collection::HashMap.store')o.$1dkeuw$23z_=i;
else if(n==='ceylon.collection::HashMap.length')o.$1dkeuw$23u_=i;
else if(n==='ceylon.collection::HashMap.head')o.$1dkeuw$23p_=i;
else if(n==='ceylon.collection::HashMap.tip')o.$1dkeuw$23q_=i;
else throw new TypeError('unknown attribute');
};
HashMap.ser$refs$=function(o){return [m$1.MemberImpl$impl(m$1.OpenValue$jsint(m$1.lmp$(ex$,'ceylon.collection'),o.$prop$get$1dkeuw$23r)),m$1.MemberImpl$impl(m$1.OpenValue$jsint(m$1.lmp$(ex$,'ceylon.collection'),o.$prop$get$1dkeuw$23s)),m$1.MemberImpl$impl(m$1.OpenValue$jsint(m$1.lmp$(ex$,'ceylon.collection'),o.$prop$get$1dkeuw$23z)),m$1.MemberImpl$impl(m$1.OpenValue$jsint(m$1.lmp$(ex$,'ceylon.collection'),o.$prop$get$1dkeuw$23u)),m$1.MemberImpl$impl(m$1.OpenValue$jsint(m$1.lmp$(ex$,'ceylon.collection'),o.$prop$get$1dkeuw$23p)),m$1.MemberImpl$impl(m$1.OpenValue$jsint(m$1.lmp$(ex$,'ceylon.collection'),o.$prop$get$1dkeuw$23q))];
};
function UnmodifiableSet($1dkeuw$28k,$$targs$$,unmodifiableSet$){
$init$UnmodifiableSet();
if(unmodifiableSet$===undefined)unmodifiableSet$=new UnmodifiableSet.$$;
m$1.set_type_args(unmodifiableSet$,$$targs$$);
unmodifiableSet$.$1dkeuw$28k_=$1dkeuw$28k;
m$1.Set({Element$Set:$$targs$$.Element$UnmodifiableSet},unmodifiableSet$);
return unmodifiableSet$;
}
UnmodifiableSet.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'set',mt:'prm',$t:{t:m$1.Set,a:{Element$Set:'Element$UnmodifiableSet'}}}],tp:{Element$UnmodifiableSet:{dv:'out',sts:[{t:m$1.$_Object}]}},sts:[{t:m$1.Set,a:{Element$Set:'Element$UnmodifiableSet'}}],pa:2048,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:UnmodifiableSet'),m$1.by(m$1.$arr$sa$(["Gavin King"],{t:m$1.$_String}))];},d:['ceylon.collection','UnmodifiableSet']};};
ex$.UnmodifiableSet=UnmodifiableSet;
function $init$UnmodifiableSet(){
if(UnmodifiableSet.$$===undefined){
m$1.initTypeProto(UnmodifiableSet,'ceylon.collection::UnmodifiableSet',m$1.Basic,m$1.Set);
(function(unmodifiableSet$){
m$1.atr$(unmodifiableSet$,'$1dkeuw$28k',function(){return this.$1dkeuw$28k_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Set,a:{Element$Set:'Element$UnmodifiableSet'}},$cont:UnmodifiableSet,d:['ceylon.collection','UnmodifiableSet','$at','set$4htprx']};});
unmodifiableSet$.iterator=function(){var unmodifiableSet$=this;
return unmodifiableSet$.$1dkeuw$28k.iterator();
};m$1.atr$(unmodifiableSet$,'size',function(){
var unmodifiableSet$=this;
return unmodifiableSet$.$1dkeuw$28k.size;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:UnmodifiableSet,pa:3,d:['ceylon.collection','UnmodifiableSet','$at','size']};});
unmodifiableSet$.contains=function($28l){var unmodifiableSet$=this;
return unmodifiableSet$.$1dkeuw$28k.contains($28l);
};unmodifiableSet$.complement=function($28m,$rdd3zt$){var unmodifiableSet$=this;
return unmodifiableSet$.$1dkeuw$28k.complement($28m,{Other$complement:$rdd3zt$.Other$complement});
};
unmodifiableSet$.complement.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Set,a:{Element$Set:'Element$UnmodifiableSet'}},ps:[{nm:'set',mt:'prm',$t:{t:m$1.Set,a:{Element$Set:'Other$complement'}}}],$cont:UnmodifiableSet,tp:{Other$complement:{sts:[{t:m$1.$_Object}]}},pa:3,d:['ceylon.collection','UnmodifiableSet','$m','complement']};};
unmodifiableSet$.exclusiveUnion=function($28n,$acz99u$){var unmodifiableSet$=this;
return unmodifiableSet$.$1dkeuw$28k.exclusiveUnion($28n,{Other$exclusiveUnion:$acz99u$.Other$exclusiveUnion});
};
unmodifiableSet$.exclusiveUnion.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Set,a:{Element$Set:{t:'u',l:['Element$UnmodifiableSet','Other$exclusiveUnion']}}},ps:[{nm:'set',mt:'prm',$t:{t:m$1.Set,a:{Element$Set:'Other$exclusiveUnion'}}}],$cont:UnmodifiableSet,tp:{Other$exclusiveUnion:{sts:[{t:m$1.$_Object}]}},pa:3,d:['ceylon.collection','UnmodifiableSet','$m','exclusiveUnion']};};
unmodifiableSet$.intersection=function($28o,$9faf6e$){var unmodifiableSet$=this;
return unmodifiableSet$.$1dkeuw$28k.intersection($28o,{Other$intersection:$9faf6e$.Other$intersection});
};
unmodifiableSet$.intersection.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Set,a:{Element$Set:{t:'i',l:['Element$UnmodifiableSet','Other$intersection']}}},ps:[{nm:'set',mt:'prm',$t:{t:m$1.Set,a:{Element$Set:'Other$intersection'}}}],$cont:UnmodifiableSet,tp:{Other$intersection:{sts:[{t:m$1.$_Object}]}},pa:3,d:['ceylon.collection','UnmodifiableSet','$m','intersection']};};
unmodifiableSet$.union=function($28p,$tnhkj6$){var unmodifiableSet$=this;
return unmodifiableSet$.$1dkeuw$28k.union($28p,{Other$union:$tnhkj6$.Other$union});
};
unmodifiableSet$.union.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Set,a:{Element$Set:{t:'u',l:['Element$UnmodifiableSet','Other$union']}}},ps:[{nm:'set',mt:'prm',$t:{t:m$1.Set,a:{Element$Set:'Other$union'}}}],$cont:UnmodifiableSet,tp:{Other$union:{sts:[{t:m$1.$_Object}]}},pa:3,d:['ceylon.collection','UnmodifiableSet','$m','union']};};
unmodifiableSet$.superset=function($28q){var unmodifiableSet$=this;
return unmodifiableSet$.$1dkeuw$28k.superset($28q);
};unmodifiableSet$.subset=function($28r){var unmodifiableSet$=this;
return unmodifiableSet$.$1dkeuw$28k.subset($28r);
};unmodifiableSet$.equals=function($28s){var unmodifiableSet$=this;
return m$1.$eq$(unmodifiableSet$.$1dkeuw$28k,$28s);
};m$1.atr$(unmodifiableSet$,'hash',function(){
var unmodifiableSet$=this;
return unmodifiableSet$.$1dkeuw$28k.hash;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:UnmodifiableSet,pa:3,d:['ceylon.collection','UnmodifiableSet','$at','hash']};});
unmodifiableSet$.clone=function(){var unmodifiableSet$=this;
return UnmodifiableSet(unmodifiableSet$.$1dkeuw$28k.clone(),{Element$UnmodifiableSet:unmodifiableSet$.$$targs$$.Element$UnmodifiableSet});
};unmodifiableSet$.each=function($28t){var unmodifiableSet$=this;
return unmodifiableSet$.$1dkeuw$28k.each($28t);
};
})(UnmodifiableSet.$$.prototype);
}
return UnmodifiableSet;
}
ex$.$init$UnmodifiableSet=$init$UnmodifiableSet;
$init$UnmodifiableSet();
UnmodifiableSet.inst$$=function($28u){
var unmodifiableSet$=new UnmodifiableSet.$$;
m$1.set_type_args(unmodifiableSet$,{Element$UnmodifiableSet:$28u.$$targs$$.Type$Class.a.Element$UnmodifiableSet});
m$1.set_type_args(unmodifiableSet$,{Element$Set:unmodifiableSet$.$$targs$$.Element$UnmodifiableSet,Element$Collection:unmodifiableSet$.$$targs$$.Element$UnmodifiableSet,Element$Iterable:unmodifiableSet$.$$targs$$.Element$UnmodifiableSet,Absent$Iterable:{t:m$1.Null},Element$Category:{t:m$1.$_Object}});
return unmodifiableSet$;
};
UnmodifiableSet.ser$get$=function(ref,o){var n=ref.attribute.qualifiedName;if(n==='ceylon.collection::UnmodifiableSet.set')return o.$1dkeuw$28k_;
else throw new TypeError('unknown attribute');
};
UnmodifiableSet.ser$set$=function(ref,o,i){if(!m$1.is$(ref,{t:m$1.Member$serialization}))throw m$1.AssertionError('unexpected reachable reference');var n=ref.attribute.qualifiedName;
if(n==='ceylon.collection::UnmodifiableSet.set')o.$1dkeuw$28k_=i;
else throw new TypeError('unknown attribute');
};
UnmodifiableSet.ser$refs$=function(o){return [m$1.MemberImpl$impl(m$1.OpenValue$jsint(m$1.lmp$(ex$,'ceylon.collection'),o.$prop$get$1dkeuw$28k))];
};
function unmodifiableSet($28v,$pjsf5f$){return UnmodifiableSet($28v,{Element$UnmodifiableSet:$pjsf5f$.Element$unmodifiableSet/*ORALE!Element inv pero Element var*/});
};
unmodifiableSet.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Set,a:{Element$Set:'Element$unmodifiableSet'}},ps:[{nm:'set',mt:'prm',$t:{t:m$1.Set,a:{Element$Set:'Element$unmodifiableSet'}}}],tp:{Element$unmodifiableSet:{sts:[{t:m$1.$_Object}]}},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:unmodifiableSet')];},d:['ceylon.collection','unmodifiableSet']};};
ex$.unmodifiableSet=unmodifiableSet;
function UnmodifiableList($1dkeuw$28w,$$targs$$,unmodifiableList$){
$init$UnmodifiableList();
if(unmodifiableList$===undefined)unmodifiableList$=new UnmodifiableList.$$;
m$1.set_type_args(unmodifiableList$,$$targs$$);
unmodifiableList$.$1dkeuw$28w_=$1dkeuw$28w;
m$1.List({Element$List:$$targs$$.Element$UnmodifiableList},unmodifiableList$);
return unmodifiableList$;
}
UnmodifiableList.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'list',mt:'prm',$t:{t:m$1.List,a:{Element$List:'Element$UnmodifiableList'}}}],tp:{Element$UnmodifiableList:{dv:'out'}},sts:[{t:m$1.List,a:{Element$List:'Element$UnmodifiableList'}}],pa:2048,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:UnmodifiableList'),m$1.by(m$1.$arr$sa$(["Gavin King"],{t:m$1.$_String}))];},d:['ceylon.collection','UnmodifiableList']};};
ex$.UnmodifiableList=UnmodifiableList;
function $init$UnmodifiableList(){
if(UnmodifiableList.$$===undefined){
m$1.initTypeProto(UnmodifiableList,'ceylon.collection::UnmodifiableList',m$1.Basic,m$1.List);
(function(unmodifiableList$){
m$1.atr$(unmodifiableList$,'$1dkeuw$28w',function(){return this.$1dkeuw$28w_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.List,a:{Element$List:'Element$UnmodifiableList'}},$cont:UnmodifiableList,d:['ceylon.collection','UnmodifiableList','$at','list$1bhyan']};});
unmodifiableList$.getFromFirst=function($28x){var unmodifiableList$=this;
return unmodifiableList$.$1dkeuw$28w.getFromFirst($28x);
};m$1.atr$(unmodifiableList$,'size',function(){
var unmodifiableList$=this;
return unmodifiableList$.$1dkeuw$28w.size;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:UnmodifiableList,pa:3,d:['ceylon.collection','UnmodifiableList','$at','size']};});
m$1.atr$(unmodifiableList$,'lastIndex',function(){
var unmodifiableList$=this;
return unmodifiableList$.$1dkeuw$28w.lastIndex;
},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]},$cont:UnmodifiableList,pa:3,d:['ceylon.collection','UnmodifiableList','$at','lastIndex']};});
m$1.atr$(unmodifiableList$,'first',function(){
var unmodifiableList$=this;
return unmodifiableList$.$1dkeuw$28w.first;
},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$UnmodifiableList']},$cont:UnmodifiableList,pa:3,d:['ceylon.collection','UnmodifiableList','$at','first']};});
m$1.atr$(unmodifiableList$,'rest',function(){
var unmodifiableList$=this;
return UnmodifiableList(unmodifiableList$.$1dkeuw$28w.rest,{Element$UnmodifiableList:unmodifiableList$.$$targs$$.Element$UnmodifiableList});
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.List,a:{Element$List:'Element$UnmodifiableList'}},$cont:UnmodifiableList,pa:3,d:['ceylon.collection','UnmodifiableList','$at','rest']};});
unmodifiableList$.iterator=function(){var unmodifiableList$=this;
return unmodifiableList$.$1dkeuw$28w.iterator();
};m$1.atr$(unmodifiableList$,'reversed',function(){
var unmodifiableList$=this;
return UnmodifiableList(unmodifiableList$.$1dkeuw$28w.reversed,{Element$UnmodifiableList:unmodifiableList$.$$targs$$.Element$UnmodifiableList});
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.List,a:{Element$List:'Element$UnmodifiableList'}},$cont:UnmodifiableList,pa:3,d:['ceylon.collection','UnmodifiableList','$at','reversed']};});
unmodifiableList$.measure=function($28y,$28z){var unmodifiableList$=this;
return unmodifiableList$.$1dkeuw$28w.measure($28y,$28z);
};unmodifiableList$.span=function($290,$291){var unmodifiableList$=this;
return unmodifiableList$.$1dkeuw$28w.span($290,$291);
};unmodifiableList$.spanFrom=function($292){var unmodifiableList$=this;
return unmodifiableList$.$1dkeuw$28w.spanFrom($292);
};unmodifiableList$.spanTo=function($293){var unmodifiableList$=this;
return unmodifiableList$.$1dkeuw$28w.spanTo($293);
};unmodifiableList$.equals=function($294){var unmodifiableList$=this;
return m$1.$eq$(unmodifiableList$.$1dkeuw$28w,$294);
};m$1.atr$(unmodifiableList$,'hash',function(){
var unmodifiableList$=this;
return unmodifiableList$.$1dkeuw$28w.hash;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:UnmodifiableList,pa:3,d:['ceylon.collection','UnmodifiableList','$at','hash']};});
unmodifiableList$.clone=function(){var unmodifiableList$=this;
return UnmodifiableList(unmodifiableList$.$1dkeuw$28w.clone(),{Element$UnmodifiableList:unmodifiableList$.$$targs$$.Element$UnmodifiableList});
};unmodifiableList$.each=function($295){var unmodifiableList$=this;
return unmodifiableList$.$1dkeuw$28w.each($295);
};
})(UnmodifiableList.$$.prototype);
}
return UnmodifiableList;
}
ex$.$init$UnmodifiableList=$init$UnmodifiableList;
$init$UnmodifiableList();
UnmodifiableList.inst$$=function($296){
var unmodifiableList$=new UnmodifiableList.$$;
m$1.set_type_args(unmodifiableList$,{Element$UnmodifiableList:$296.$$targs$$.Type$Class.a.Element$UnmodifiableList});
m$1.set_type_args(unmodifiableList$,{Element$List:unmodifiableList$.$$targs$$.Element$UnmodifiableList,Element$Collection:unmodifiableList$.$$targs$$.Element$UnmodifiableList,Element$Iterable:unmodifiableList$.$$targs$$.Element$UnmodifiableList,Absent$Iterable:{t:m$1.Null},Element$Category:{t:m$1.$_Object},Item$Correspondence:unmodifiableList$.$$targs$$.Element$UnmodifiableList,Key$Correspondence:{t:m$1.Integer},Subrange$Ranged:{t:m$1.List,a:{Element$List:unmodifiableList$.$$targs$$.Element$UnmodifiableList}},Index$Ranged:{t:m$1.Integer},Element$Ranged:unmodifiableList$.$$targs$$.Element$UnmodifiableList});
return unmodifiableList$;
};
UnmodifiableList.ser$get$=function(ref,o){var n=ref.attribute.qualifiedName;if(n==='ceylon.collection::UnmodifiableList.list')return o.$1dkeuw$28w_;
else throw new TypeError('unknown attribute');
};
UnmodifiableList.ser$set$=function(ref,o,i){if(!m$1.is$(ref,{t:m$1.Member$serialization}))throw m$1.AssertionError('unexpected reachable reference');var n=ref.attribute.qualifiedName;
if(n==='ceylon.collection::UnmodifiableList.list')o.$1dkeuw$28w_=i;
else throw new TypeError('unknown attribute');
};
UnmodifiableList.ser$refs$=function(o){return [m$1.MemberImpl$impl(m$1.OpenValue$jsint(m$1.lmp$(ex$,'ceylon.collection'),o.$prop$get$1dkeuw$28w))];
};
function unmodifiableList($297,$apctt9$){return UnmodifiableList($297,{Element$UnmodifiableList:$apctt9$.Element$unmodifiableList/*ORALE!Element inv pero Element var*/});
};
unmodifiableList.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.List,a:{Element$List:'Element$unmodifiableList'}},ps:[{nm:'list',mt:'prm',$t:{t:m$1.List,a:{Element$List:'Element$unmodifiableList'}}}],tp:{Element$unmodifiableList:{}},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:unmodifiableList')];},d:['ceylon.collection','unmodifiableList']};};
ex$.unmodifiableList=unmodifiableList;
function partition($298,$299,$zgqkqa$){
var $29a=ArrayList(undefined,undefined,undefined,{Element$ArrayList:$zgqkqa$.Element$partition});
var $29b=ArrayList(undefined,undefined,undefined,{Element$ArrayList:$zgqkqa$.Element$partition});
var $29d;for(var $29c=$298.iterator();($29d=$29c.next())!==m$1.finished();){
if($299($29d)){
$29a.add($29d);
}
else{
$29b.add($29d);
}
}
return m$1.tpl$([$29a.sequence(),$29b.sequence()]);
}
ex$.partition=partition;
partition.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'T',l:[{t:m$1.Sequential,a:{Element$Sequential:'Element$partition'}},{t:m$1.Sequential,a:{Element$Sequential:'Element$partition'}}]},ps:[{nm:'elements',mt:'prm',$t:{t:m$1.Iterable,a:{Element$Iterable:'Element$partition',Absent$Iterable:{t:m$1.Null}}}},{nm:'selecting',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Arguments$Callable:{t:'T',l:['Element$partition']},Return$Callable:{t:m$1.$_Boolean}}},$rt:{t:m$1.$_Boolean},ps:[{nm:'element',mt:'prm',$t:'Element$partition'}]}],tp:{Element$partition:{}},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:partition')];},d:['ceylon.collection','partition']};};
function MutableMap($$targs$$,mutableMap$){
m$1.set_type_args(mutableMap$,$$targs$$,MutableMap);
m$1.Map({Key$Map:$$targs$$.Key$MutableMap/*ORALE!Key inv pero Key var*/,Item$Map:$$targs$$.Item$MutableMap/*ORALE!Item inv pero Item var*/},mutableMap$);
MapMutator({Key$MapMutator:$$targs$$.Key$MutableMap/*ORALE!Key inv pero Key var*/,Item$MapMutator:$$targs$$.Item$MutableMap/*ORALE!Item inv pero Item var*/},mutableMap$);
}
MutableMap.$crtmm$=function(){return{mod:$CCMM$,tp:{Key$MutableMap:{sts:[{t:m$1.$_Object}]},Item$MutableMap:{}},sts:[{t:m$1.Map,a:{Key$Map:'Key$MutableMap',Item$Map:'Item$MutableMap'}},{t:MapMutator,a:{Key$MapMutator:'Key$MutableMap',Item$MapMutator:'Item$MutableMap'}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:MutableMap'),m$1.see(m$1.$arr$sa$([m$1.openClass$jsint(m$1.lmp$(ex$,'ceylon.collection'),HashMap)],{t:m$1.ClassWithConstructorsDeclaration$meta$declaration})),m$1.by(m$1.$arr$sa$(["St\u00e9phane \u00c9pardaud"],{t:m$1.$_String}))];},d:['ceylon.collection','MutableMap']};};
ex$.MutableMap=MutableMap;
function $init$MutableMap(){
if(MutableMap.$$===undefined){
m$1.initTypeProtoI(MutableMap,'ceylon.collection::MutableMap',m$1.Map,$init$MapMutator());
(function(mutableMap$){
mutableMap$.put={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Item$MutableMap']},ps:[{nm:'key',mt:'prm',$t:'Key$MutableMap'},{nm:'item',mt:'prm',$t:'Item$MutableMap'}],$cont:MutableMap,pa:7,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:MutableMap:$m:put')];},d:['ceylon.collection','MutableMap','$m','put']};}};mutableMap$.remove={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Item$MutableMap']},ps:[{nm:'key',mt:'prm',$t:'Key$MutableMap'}],$cont:MutableMap,pa:7,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:MutableMap:$m:remove')];},d:['ceylon.collection','MutableMap','$m','remove']};}};mutableMap$.clone={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:MutableMap,a:{Key$MutableMap:'Key$MutableMap',Item$MutableMap:'Item$MutableMap'}},ps:[],$cont:MutableMap,pa:7,d:['ceylon.collection','MutableMap','$m','clone']};}};
})(MutableMap.$$.prototype);
}
return MutableMap;
}
ex$.$init$MutableMap=$init$MutableMap;
$init$MutableMap();
function MapMutator($$targs$$,mapMutator$){
m$1.set_type_args(mapMutator$,$$targs$$,MapMutator);
m$1.KeyedCorrespondenceMutator({Key$KeyedCorrespondenceMutator:$$targs$$.Key$MapMutator,Item$KeyedCorrespondenceMutator:$$targs$$.Item$MapMutator},mapMutator$);
m$1.Map({Key$Map:{t:m$1.$_Object},Item$Map:{t:m$1.Anything}},mapMutator$);
}
MapMutator.$crtmm$=function(){return{mod:$CCMM$,tp:{Key$MapMutator:{dv:'in',sts:[{t:m$1.$_Object}]},Item$MapMutator:{dv:'in'}},sts:[{t:m$1.Map,a:{Key$Map:{t:m$1.$_Object},Item$Map:{t:m$1.Anything}}},{t:m$1.KeyedCorrespondenceMutator,a:{Key$KeyedCorrespondenceMutator:'Key$MapMutator',Item$KeyedCorrespondenceMutator:'Item$MapMutator'}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:MapMutator'),m$1.see(m$1.$arr$sa$([m$1.OpenInterface$jsint(m$1.lmp$(ex$,'ceylon.collection'),MutableMap)],{t:m$1.InterfaceDeclaration$meta$declaration}))];},d:['ceylon.collection','MapMutator']};};
ex$.MapMutator=MapMutator;
function $init$MapMutator(){
if(MapMutator.$$===undefined){
m$1.initTypeProtoI(MapMutator,'ceylon.collection::MapMutator',m$1.KeyedCorrespondenceMutator,m$1.Map);
(function(mapMutator$){
mapMutator$.put={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'key',mt:'prm',$t:'Key$MapMutator'},{nm:'item',mt:'prm',$t:'Item$MapMutator'}],$cont:MapMutator,pa:7,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:MapMutator:$m:put')];},d:['ceylon.collection','MapMutator','$m','put']};}};mapMutator$.putAll=function($29e){
var mapMutator$=this;
var $29g;for(var $29f=$29e.iterator();($29g=$29f.next())!==m$1.finished();){
var $29h=$29g.key,$29i=$29g.item;
mapMutator$.put($29h,$29i);
}
};mapMutator$.putAll.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'entries',mt:'prm',$t:{t:m$1.Iterable,a:{Element$Iterable:{t:m$1.Entry,a:{Item$Entry:'Item$MapMutator',Key$Entry:'Key$MapMutator'}},Absent$Iterable:{t:m$1.Null}}}}],$cont:MapMutator,pa:9,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:MapMutator:$m:putAll')];},d:['ceylon.collection','MapMutator','$m','putAll']};};
mapMutator$.remove={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'key',mt:'prm',$t:'Key$MapMutator'}],$cont:MapMutator,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:MapMutator:$m:remove')];},d:['ceylon.collection','MapMutator','$m','remove']};}};mapMutator$.removeEntry=function($29j,$29k){
var mapMutator$=this;
var $29l;
if(m$1.nn$(($29l=mapMutator$.$_get($29j)))&&m$1.$eq$($29l,$29k)){
mapMutator$.remove($29j);
return true;
}
else{
return false;
}
};mapMutator$.removeEntry.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'key',mt:'prm',$t:'Key$MapMutator'},{nm:'item',mt:'prm',$t:{t:'i',l:['Item$MapMutator',{t:m$1.$_Object}]}}],$cont:MapMutator,pa:9,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:MapMutator:$m:removeEntry')];},d:['ceylon.collection','MapMutator','$m','removeEntry']};};
mapMutator$.replaceEntry=function($29m,$29n,$29o){
var mapMutator$=this;
var $29p;
if(m$1.nn$(($29p=mapMutator$.$_get($29m)))&&m$1.$eq$($29p,$29n)){
mapMutator$.put($29m,$29n);
return true;
}
else{
return false;
}
};mapMutator$.replaceEntry.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'key',mt:'prm',$t:'Key$MapMutator'},{nm:'item',mt:'prm',$t:{t:'i',l:['Item$MapMutator',{t:m$1.$_Object}]}},{nm:'newItem',mt:'prm',$t:'Item$MapMutator'}],$cont:MapMutator,pa:9,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:MapMutator:$m:replaceEntry')];},d:['ceylon.collection','MapMutator','$m','replaceEntry']};};
mapMutator$.removeAll=function($29q){
var mapMutator$=this;
var $29s;for(var $29r=$29q.iterator();($29s=$29r.next())!==m$1.finished();){
mapMutator$.remove($29s);
}
};mapMutator$.removeAll.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'keys',mt:'prm',$t:{t:m$1.Iterable,a:{Element$Iterable:'Key$MapMutator',Absent$Iterable:{t:m$1.Null}}}}],$cont:MapMutator,pa:9,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:MapMutator:$m:removeAll')];},d:['ceylon.collection','MapMutator','$m','removeAll']};};
mapMutator$.clear={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[],$cont:MapMutator,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:MapMutator:$m:clear')];},d:['ceylon.collection','MapMutator','$m','clear']};}};mapMutator$.clone={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:MapMutator,a:{Key$MapMutator:'Key$MapMutator',Item$MapMutator:'Item$MapMutator'}},ps:[],$cont:MapMutator,pa:7,d:['ceylon.collection','MapMutator','$m','clone']};}};
})(MapMutator.$$.prototype);
}
return MapMutator;
}
ex$.$init$MapMutator=$init$MapMutator;
$init$MapMutator();
ex$.$pkg$ans$ceylon$collection=function(){return[m$1.shared()];};
ex$.$pkgunsh$ceylon$collection={'invert':invert,'UnmodifiableMap':UnmodifiableMap,'StoreIterator':StoreIterator,'CachingStoreIterator':CachingStoreIterator,'entryStore':entryStore,'elementStore':elementStore,'cachingEntryStore':cachingEntryStore,'cachingElementStore':cachingElementStore,'maximumCapacity':$prop$getMaximumCapacity,'Counter':Counter,'Cell':Cell,'CellIterator':CellIterator,'CachingCell':CachingCell,'CachingCellIterator':CachingCellIterator,'LinkedCell':LinkedCell,'LinkedCellIterator':LinkedCellIterator,'measureToSpan':measureToSpan,'spanToMeasure':spanToMeasure,'largest':largest,'smallest':smallest,'UnmodifiableSet':UnmodifiableSet,'UnmodifiableList':UnmodifiableList};
});
}(typeof define==='function' && define.amd ? define : function (factory) {
if (typeof exports!=='undefined') { factory(require, exports, module);
} else { throw 'no module loader'; }
}));
