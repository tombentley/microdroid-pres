(function(define) { define(function(require, ex$, module) {
var $$req$ = require; require = (typeof $$ceylon$require == 'undefined') ? $$req$ : function() { return $$ceylon$require('ceylon/collection/1.2.3/ceylon.collection-1.2.3', $$req$, Array.prototype.slice.call(arguments)); }

var _CTM$;function $CCMM$(){if (_CTM$===undefined)_CTM$=require('ceylon/collection/1.2.3/ceylon.collection-1.2.3-model').$CCMM$;return _CTM$;}
ex$.$CCMM$=$CCMM$;
var m$1=require('ceylon/language/1.2.3/ceylon.language-1.2.3');
m$1.$addmod$(m$1,'ceylon.language/1.2.3');
m$1.$addmod$(ex$,'ceylon.collection/1.2.3');
ex$.$mod$ans$=function(){return[m$1.doc$($CCMM$,'','$mod-anns'),m$1.by(m$1.$arr$sa$(["St\u00e9phane \u00c9pardaud"],{t:m$1.$_String})),m$1.license("Apache Software License")];};
function SingletonSet(element,$$targs$$,singletonSet$){
$init$SingletonSet();
if(singletonSet$===undefined)singletonSet$=new SingletonSet.$$;
m$1.set_type_args(singletonSet$,$$targs$$);
singletonSet$.element_=element;
m$1.Set({Element$Set:$$targs$$.Element$SingletonSet/*ORALE!Element inv pero Element var*/},singletonSet$);
return singletonSet$;
}
SingletonSet.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'element',mt:'prm',$t:'Element$SingletonSet',pa:1}],tp:{Element$SingletonSet:{sts:[{t:m$1.$_Object}]}},sts:[{t:m$1.Set,a:{Element$Set:'Element$SingletonSet'}}],pa:2049,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:SingletonSet'),m$1.see(m$1.$arr$sa$([m$1.openClass$jsint(m$1.lmp$(ex$,'ceylon.collection'),SingletonMap),m$1.openClass$jsint(m$1.fmp$('ceylon.language','1.2.3','$'),m$1.Singleton)],{t:m$1.ClassWithInitializerDeclaration$meta$declaration}))];},d:['ceylon.collection','SingletonSet']};};
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
SingletonMap.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'entry',mt:'prm',$t:{t:m$1.Entry,a:{Item$Entry:'Item$SingletonMap',Key$Entry:'Key$SingletonMap'}},pa:1}],tp:{Key$SingletonMap:{sts:[{t:m$1.$_Object}]},Item$SingletonMap:{}},sts:[{t:m$1.Map,a:{Key$Map:'Key$SingletonMap',Item$Map:'Item$SingletonMap'}}],pa:2049,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:SingletonMap'),m$1.see(m$1.$arr$sa$([m$1.openClass$jsint(m$1.lmp$(ex$,'ceylon.collection'),SingletonSet),m$1.openClass$jsint(m$1.fmp$('ceylon.language','1.2.3','$'),m$1.Singleton)],{t:m$1.ClassWithInitializerDeclaration$meta$declaration}))];},d:['ceylon.collection','SingletonMap']};};
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
var $1br;
while(m$1.nn$(($1br=linkedList$.$1dkeuw$18s))&&!m$1.nn$($1br.element)){
var $1bs;
if(m$1.nn$(($1bs=$1br.rest))){
linkedList$.$1dkeuw$18s=$1bs;
}
else{
linkedList$.$1dkeuw$18s=(linkedList$.$1dkeuw$18t=null);
}
($1bt=linkedList$.$1dkeuw$18u,linkedList$.$1dkeuw$18u=$1bt.predecessor,$1bt);
var $1bt;
}
var $1bu=linkedList$.$1dkeuw$18s;
var $1bv;
while(m$1.nn$(($1bv=$1bu))){
var $1bw=$1bv.rest;
var $1bx;
if(m$1.nn$(($1bx=$1bw))&&!m$1.nn$($1bx.element)){
var $1by;
if(m$1.nn$(($1by=$1bx.rest))){
($1bv.rest=$1by);
}
else{
($1bv.rest=(linkedList$.$1dkeuw$18t=null));
}
($1bz=linkedList$.$1dkeuw$18u,linkedList$.$1dkeuw$18u=$1bz.predecessor,$1bz);
var $1bz;
}
else{
$1bu=$1bw;
}
}
};linkedList$.prune.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[],$cont:LinkedList,pa:3,d:['ceylon.collection','LinkedList','$m','prune']};};
linkedList$.findAndReplaceFirst=function($1c0,$1c1){
var linkedList$=this;
var $1c2=linkedList$.$1dkeuw$18s;
var $1c3;
while(m$1.nn$(($1c3=$1c2))){
var $1c4;
if(m$1.nn$(($1c4=$1c3.element))&&$1c0($1c4)){
($1c3.element=$1c1);
return $1c4;
}
$1c2=$1c3.rest;
}
return null;
};linkedList$.findAndReplaceFirst.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$LinkedList']},ps:[{nm:'selecting',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Arguments$Callable:{t:'T',l:[{t:'i',l:['Element$LinkedList',{t:m$1.$_Object}]}]},Return$Callable:{t:m$1.$_Boolean}}},$rt:{t:m$1.$_Boolean},ps:[{nm:'element',mt:'prm',$t:{t:'i',l:['Element$LinkedList',{t:m$1.$_Object}]}}]},{nm:'replacement',mt:'prm',$t:'Element$LinkedList'}],$cont:LinkedList,pa:3,d:['ceylon.collection','LinkedList','$m','findAndReplaceFirst']};};
linkedList$.findAndReplaceLast=function($1c5,$1c6){
var linkedList$=this;
var $1c7=null;
var $1c8=linkedList$.$1dkeuw$18s;
var $1c9;
while(m$1.nn$(($1c9=$1c8))){
var $1ca;
if(m$1.nn$(($1ca=$1c9.element))&&$1c5($1ca)){
$1c7=$1c9;
}
$1c8=$1c9.rest;
}
var $1cb;
if(m$1.nn$(($1cb=$1c7))){
var $1cc=$1cb.element;
($1cb.element=$1c6);
return $1cc;
}
else{
return null;
}
};linkedList$.findAndReplaceLast.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$LinkedList']},ps:[{nm:'selecting',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Arguments$Callable:{t:'T',l:[{t:'i',l:['Element$LinkedList',{t:m$1.$_Object}]}]},Return$Callable:{t:m$1.$_Boolean}}},$rt:{t:m$1.$_Boolean},ps:[{nm:'element',mt:'prm',$t:{t:'i',l:['Element$LinkedList',{t:m$1.$_Object}]}}]},{nm:'replacement',mt:'prm',$t:'Element$LinkedList'}],$cont:LinkedList,pa:3,d:['ceylon.collection','LinkedList','$m','findAndReplaceLast']};};
linkedList$.replaceWhere=function($1cd,$1ce){
var linkedList$=this;
var $1cf=(0);
var $1cg=linkedList$.$1dkeuw$18s;
var $1ch;
while(m$1.nn$(($1ch=$1cg))){
var $1ci;
if(m$1.nn$(($1ci=$1ch.element))&&$1cd($1ci)){
($1ch.element=$1ce);
($1cj=$1cf,$1cf=$1cj.successor,$1cj);
var $1cj;
}
$1cg=$1ch.rest;
}
return $1cf;
};linkedList$.replaceWhere.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'selecting',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Arguments$Callable:{t:'T',l:[{t:'i',l:['Element$LinkedList',{t:m$1.$_Object}]}]},Return$Callable:{t:m$1.$_Boolean}}},$rt:{t:m$1.$_Boolean},ps:[{nm:'element',mt:'prm',$t:{t:'i',l:['Element$LinkedList',{t:m$1.$_Object}]}}]},{nm:'replacement',mt:'prm',$t:'Element$LinkedList'}],$cont:LinkedList,pa:3,d:['ceylon.collection','LinkedList','$m','replaceWhere']};};
linkedList$.infill=function($1ck){
var linkedList$=this;
var $1cl=linkedList$.$1dkeuw$18s;
var $1cm;
while(m$1.nn$(($1cm=$1cl))){
if(!m$1.nn$($1cm.element)){
($1cm.element=$1ck);
}
$1cl=$1cm.rest;
}
};linkedList$.infill.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'replacement',mt:'prm',$t:'Element$LinkedList'}],$cont:LinkedList,pa:3,d:['ceylon.collection','LinkedList','$m','infill']};};
linkedList$.clear=function(){
var linkedList$=this;
linkedList$.$1dkeuw$18u=(0);
linkedList$.$1dkeuw$18s=(linkedList$.$1dkeuw$18t=null);
};linkedList$.clear.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[],$cont:LinkedList,pa:3,d:['ceylon.collection','LinkedList','$m','clear']};};
linkedList$.getFromFirst=function($1cn){
var linkedList$=this;
var $1co=linkedList$.$1dkeuw$18s;
var $1cp=(0);
var $1cq;
while(m$1.nn$(($1cq=$1co))){
if((($1cr=$1cp,$1cp=$1cr.successor,$1cr)==$1cn)){
return $1cq.element;
}
var $1cr;
$1co=$1cq.rest;
}
return null;
};linkedList$.getFromFirst.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$LinkedList']},ps:[{nm:'index',mt:'prm',$t:{t:m$1.Integer}}],$cont:LinkedList,pa:3,d:['ceylon.collection','LinkedList','$m','getFromFirst']};};
linkedList$.spanFrom=function($1cs){
var linkedList$=this;
var $1ct=LinkedList(undefined,{Element$LinkedList:linkedList$.$$targs$$.Element$LinkedList});
var $1cu=linkedList$.$1dkeuw$18s;
var $1cv=(0);
var $1cw;
while(m$1.nn$(($1cw=$1cu))){
if(($1cv>=$1cs)){
$1ct.add($1cw.element);
}
($1cx=$1cv,$1cv=$1cx.successor,$1cx);
var $1cx;
$1cu=$1cw.rest;
}
return $1ct;
};linkedList$.spanFrom.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.List,a:{Element$List:'Element$LinkedList'}},ps:[{nm:'from',mt:'prm',$t:{t:m$1.Integer}}],$cont:LinkedList,pa:3,d:['ceylon.collection','LinkedList','$m','spanFrom']};};
linkedList$.spanTo=function($1cy){
var linkedList$=this;
var $1cz=LinkedList(undefined,{Element$LinkedList:linkedList$.$$targs$$.Element$LinkedList});
var $1d0=linkedList$.$1dkeuw$18s;
var $1d1=(0);
var $1d2;
while(m$1.nn$(($1d2=$1d0))){
if(($1d1>$1cy)){
break;
}
$1cz.add($1d2.element);
($1d3=$1d1,$1d1=$1d3.successor,$1d3);
var $1d3;
$1d0=$1d2.rest;
}
return $1cz;
};linkedList$.spanTo.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.List,a:{Element$List:'Element$LinkedList'}},ps:[{nm:'to',mt:'prm',$t:{t:m$1.Integer}}],$cont:LinkedList,pa:3,d:['ceylon.collection','LinkedList','$m','spanTo']};};
linkedList$.span=function($1d4,$1d5){
var linkedList$=this;
var $1d6=spanToMeasure($1d4,$1d5,linkedList$.$1dkeuw$18u),$1d7=$1d6.$_get(0),$1d8=$1d6.$_get(1),$1d9=$1d6.$_get(2);
var $1da=LinkedList(linkedList$.skip($1d7).take($1d8),{Element$LinkedList:linkedList$.$$targs$$.Element$LinkedList});
return ($1db=($1d9?$1da.reversed:null),m$1.nn$($1db)?$1db:$1da);
var $1db;
};linkedList$.span.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.List,a:{Element$List:'Element$LinkedList'}},ps:[{nm:'from',mt:'prm',$t:{t:m$1.Integer}},{nm:'to',mt:'prm',$t:{t:m$1.Integer}}],$cont:LinkedList,pa:3,d:['ceylon.collection','LinkedList','$m','span']};};
linkedList$.deleteSpan=function($1dc,$1dd){
var linkedList$=this;
var $1de=spanToMeasure($1dc,$1dd,linkedList$.$1dkeuw$18u),$1df=$1de.$_get(0),$1dg=$1de.$_get(1),$1dh=$1de.$_get(2);
if((($1df<linkedList$.$1dkeuw$18u)&&($1dg>0))){
var $1di=($1df>0);
var $1dj=linkedList$.$1dkeuw$1dk($1df.minus(1),linkedList$.$1dkeuw$18s);
var $1dl=$1dg.plus(($1dm=($1di?1:null),m$1.nn$($1dm)?$1dm:(0)));
var $1dm;
var $1dn=linkedList$.$1dkeuw$1dk($1dl,($1do=$1dj,m$1.nn$($1do)?$1do:linkedList$.$1dkeuw$18s));
var $1do;
if(!$1di){
linkedList$.$1dkeuw$18s=($1dp=$1dj,m$1.nn$($1dp)?$1dp:$1dn);
var $1dp;
}
var $1dq;
if(m$1.nn$(($1dq=$1dj))){
($1dq.rest=$1dn);
}
if(($1dg>=linkedList$.$1dkeuw$18u)){
linkedList$.$1dkeuw$18t=null;
}
(linkedList$.$1dkeuw$18u=linkedList$.$1dkeuw$18u.minus($1dg));
}
};linkedList$.deleteSpan.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'from',mt:'prm',$t:{t:m$1.Integer}},{nm:'to',mt:'prm',$t:{t:m$1.Integer}}],$cont:LinkedList,pa:3,d:['ceylon.collection','LinkedList','$m','deleteSpan']};};
linkedList$.$1dkeuw$1dk=function($1dr,$1ds){
var linkedList$=this;
if(($1dr<0)){
return null;
}
var $1dt=$1ds;
var $1du;
if(m$1.nn$(($1du=$1ds))&&($1dr>0)){
var $1dw=(1),$1dv=$1dr,$1dx=$1dw.compare($1dv),$1dy=$1dx===m$1.smaller()?'successor':'predecessor';for(var $1dz=m$1.eorl$($1dx);$1dz($1dv,$1dw);$1dw=$1dw[$1dy]){
$1dt=($1e0=$1dt,m$1.nn$($1e0)?$1e0.rest:null);
var $1e0;
}
}
return $1dt;
};linkedList$.$1dkeuw$1dk.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:Cell,a:{Element$Cell:'Element$LinkedList'}}]},ps:[{nm:'cells',mt:'prm',$t:{t:m$1.Integer}},{nm:'start',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},{t:Cell,a:{Element$Cell:'Element$LinkedList'}}]}}],$cont:LinkedList,d:['ceylon.collection','LinkedList','$m','advanceBy$cg1mjm']};};
linkedList$.measure=function($1e1,$1e2){var linkedList$=this;
return linkedList$.span(($1e3=measureToSpan($1e1,$1e2),$1e3.$_get(0)),$1e3.$_get(1));
};linkedList$.deleteMeasure=function($1e4,$1e5){var linkedList$=this;
return linkedList$.deleteSpan(($1e6=measureToSpan($1e4,$1e5),$1e6.$_get(0)),$1e6.$_get(1));
};linkedList$.defines=function($1e7){var linkedList$=this;
return (($1e7>=0)&&($1e7<linkedList$.$1dkeuw$18u));
};linkedList$.contains=function($1e8){
var linkedList$=this;
var $1e9=linkedList$.$1dkeuw$18s;
var $1ea;
while(m$1.nn$(($1ea=$1e9))){
var $1eb;
if(m$1.nn$(($1eb=$1ea.element))){
if(m$1.$eq$($1eb,$1e8)){
return true;
}
}
$1e9=$1ea.rest;
}
return false;
};linkedList$.contains.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'element',mt:'prm',$t:{t:m$1.$_Object}}],$cont:LinkedList,pa:3,d:['ceylon.collection','LinkedList','$m','contains']};};
m$1.atr$(linkedList$,'size',function(){
var linkedList$=this;
return linkedList$.$1dkeuw$18u;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:LinkedList,pa:3,d:['ceylon.collection','LinkedList','$at','size']};});
linkedList$.count=function($1ec){
var linkedList$=this;
var $1ed=linkedList$.$1dkeuw$18s;
var $1ee=(0);
var $1ef;
while(m$1.nn$(($1ef=$1ed))){
if($1ec($1ef.element)){
($1eg=$1ee,$1ee=$1eg.successor,$1eg);
var $1eg;
}
$1ed=$1ef.rest;
}
return $1ee;
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
linkedList$.each=function($1eh){
var linkedList$=this;
var $1ei=linkedList$.$1dkeuw$18s;
var $1ej;
while(m$1.nn$(($1ej=$1ei))){
$1eh($1ej.element);
$1ei=$1ej.rest;
}
};linkedList$.each.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'step',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Arguments$Callable:{t:'T',l:['Element$LinkedList']},Return$Callable:{t:m$1.Anything}}},$rt:{t:m$1.Anything},ps:[{nm:'element',mt:'prm',$t:'Element$LinkedList'}]}],$cont:LinkedList,pa:3,d:['ceylon.collection','LinkedList','$m','each']};};
linkedList$.find=function($1ek){
var linkedList$=this;
var $1el=linkedList$.$1dkeuw$18s;
var $1em;
while(m$1.nn$(($1em=$1el))){
var $1en=$1em.element;
var $1eo;
if(m$1.nn$(($1eo=$1en))&&$1ek($1eo)){
return $1eo;
}
$1el=$1em.rest;
}
return null;
};linkedList$.find.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$LinkedList']},ps:[{nm:'selecting',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Arguments$Callable:{t:'T',l:[{t:'i',l:['Element$LinkedList',{t:m$1.$_Object}]}]},Return$Callable:{t:m$1.$_Boolean}}},$rt:{t:m$1.$_Boolean},ps:[{nm:'elem',mt:'prm',$t:{t:'i',l:['Element$LinkedList',{t:m$1.$_Object}]}}]}],$cont:LinkedList,pa:3,d:['ceylon.collection','LinkedList','$m','find']};};
linkedList$.findLast=function($1ep){
var linkedList$=this;
var $1eq=null;
var $1er=linkedList$.$1dkeuw$18s;
var $1es;
while(m$1.nn$(($1es=$1er))){
var $1et=$1es.element;
var $1eu;
if(m$1.nn$(($1eu=$1et))&&$1ep($1eu)){
$1eq=$1eu;
}
$1er=$1es.rest;
}
return $1eq;
};linkedList$.findLast.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$LinkedList']},ps:[{nm:'selecting',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Arguments$Callable:{t:'T',l:[{t:'i',l:['Element$LinkedList',{t:m$1.$_Object}]}]},Return$Callable:{t:m$1.$_Boolean}}},$rt:{t:m$1.$_Boolean},ps:[{nm:'elem',mt:'prm',$t:{t:'i',l:['Element$LinkedList',{t:m$1.$_Object}]}}]}],$cont:LinkedList,pa:3,d:['ceylon.collection','LinkedList','$m','findLast']};};
linkedList$.$_every=function($1ev){
var linkedList$=this;
var $1ew=linkedList$.$1dkeuw$18s;
var $1ex;
while(m$1.nn$(($1ex=$1ew))){
if(!$1ev($1ex.element)){
return false;
}
$1ew=$1ex.rest;
}
return true;
};linkedList$.$_every.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'selecting',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Arguments$Callable:{t:'T',l:['Element$LinkedList']},Return$Callable:{t:m$1.$_Boolean}}},$rt:{t:m$1.$_Boolean},ps:[{nm:'element',mt:'prm',$t:'Element$LinkedList'}]}],$cont:LinkedList,pa:3,d:['ceylon.collection','LinkedList','$m','every']};};
linkedList$.any=function($1ey){
var linkedList$=this;
var $1ez=linkedList$.$1dkeuw$18s;
var $1f0;
while(m$1.nn$(($1f0=$1ez))){
if($1ey($1f0.element)){
return true;
}
$1ez=$1f0.rest;
}
return false;
};linkedList$.any.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'selecting',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Arguments$Callable:{t:'T',l:['Element$LinkedList']},Return$Callable:{t:m$1.$_Boolean}}},$rt:{t:m$1.$_Boolean},ps:[{nm:'element',mt:'prm',$t:'Element$LinkedList'}]}],$cont:LinkedList,pa:3,d:['ceylon.collection','LinkedList','$m','any']};};
linkedList$.$_reduce=function($1f1,$z4x6x1$){
var linkedList$=this;
var $1f2;
if(m$1.nn$(($1f2=linkedList$.$1dkeuw$18s))){
var $1f3=$1f2.element;
var $1f4=$1f2.rest;
var $1f5;
while(m$1.nn$(($1f5=$1f4))){
$1f3=$1f1($1f3,$1f5.element);
$1f4=$1f5.rest;
}
return $1f3;
}
else{
return null;
}
};linkedList$.$_reduce.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:['Result$reduce','Element$LinkedList',{t:m$1.Null}]},ps:[{nm:'accumulating',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Arguments$Callable:{t:'T',l:[{t:'u',l:['Result$reduce','Element$LinkedList']},'Element$LinkedList']},Return$Callable:'Result$reduce'}},$rt:'Result$reduce',ps:[{nm:'partial',mt:'prm',$t:{t:'u',l:['Result$reduce','Element$LinkedList']}},{nm:'element',mt:'prm',$t:'Element$LinkedList'}]}],$cont:LinkedList,tp:{Result$reduce:{}},pa:3,d:['ceylon.collection','LinkedList','$m','reduce']};};
m$1.atr$(linkedList$,'hash',function(){
var linkedList$=this;
var $1f6=(17);
var $1f7=linkedList$.$1dkeuw$18s;
var $1f8;
while(m$1.nn$(($1f8=$1f7))){
var $1f9;
if(m$1.nn$(($1f9=$1f8.element))){
$1f6=$1f6.times(31).plus($1f9.hash);
}
else{
$1f6=$1f6.times(31);
}
$1f7=$1f8.rest;
}
return $1f6;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:LinkedList,pa:3,d:['ceylon.collection','LinkedList','$at','hash']};});linkedList$.equals=function($1fa){
var linkedList$=this;
var $1fb;
if(m$1.is$(($1fb=$1fa),{t:m$1.List,a:{Element$List:{t:m$1.Anything}}})&&(linkedList$.$1dkeuw$18u==$1fb.size)){
var $1fc=linkedList$.$1dkeuw$18s;
var $1fd=$1fb.iterator();
var $1fe;
while(m$1.nn$(($1fe=$1fc))){
var $1ff;
if(!m$1.is$(($1ff=$1fd.next()),{t:m$1.Finished})){
var $1fg=$1fe.element;
var $1fh;
if(m$1.nn$(($1fh=$1ff))){
var $1fi;
if(m$1.nn$(($1fi=$1fg))&&m$1.$eq$($1fi,$1fh)){
$1fc=$1fe.rest;
}
else{
return false;
}
}
else{
var $1fj;
if(m$1.nn$(($1fj=$1fg))){
return false;
}
else{
$1fc=$1fe.rest;
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
linkedList$.truncate=function($1fk){
var linkedList$=this;
m$1.asrt$((($1fk>=0)),"Assertion failed: \'size>=0\' at LinkedList.ceylon (836:15-836:23)",'836:8-836:24','LinkedList.ceylon');
if(($1fk==(0))){
linkedList$.$1dkeuw$18s=(linkedList$.$1dkeuw$18t=null);
linkedList$.$1dkeuw$18u=(0);
}
else{
var $1fl=(0);
var $1fm=linkedList$.$1dkeuw$18s;
var $1fn;
while((($1fl=$1fl.successor)<$1fk)&&m$1.nn$(($1fn=$1fm))){
$1fm=$1fn.rest;
}
var $1fo;
if(m$1.nn$(($1fo=$1fm))){
($1fo.rest=null);
linkedList$.$1dkeuw$18t=$1fo;
linkedList$.$1dkeuw$18u=$1fk;
}
}
};linkedList$.truncate.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'size',mt:'prm',$t:{t:m$1.Integer}}],$cont:LinkedList,pa:3,d:['ceylon.collection','LinkedList','$m','truncate']};};
linkedList$.firstIndexWhere=function($1fp){
var linkedList$=this;
var $1fq=(0);
var $1fs;for(var $1fr=linkedList$.iterator();($1fs=$1fr.next())!==m$1.finished();){
var $1ft;
if(m$1.nn$(($1ft=$1fs))&&$1fp($1ft)){
return $1fq;
}
($1fu=$1fq,$1fq=$1fu.successor,$1fu);
var $1fu;
}
return null;
};linkedList$.firstIndexWhere.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]},ps:[{nm:'selecting',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Arguments$Callable:{t:'T',l:[{t:'i',l:['Element$LinkedList',{t:m$1.$_Object}]}]},Return$Callable:{t:m$1.$_Boolean}}},$rt:{t:m$1.$_Boolean},ps:[{nm:'element',mt:'prm',$t:{t:'i',l:['Element$LinkedList',{t:m$1.$_Object}]}}]}],$cont:LinkedList,pa:3,d:['ceylon.collection','LinkedList','$m','firstIndexWhere']};};
linkedList$.lastIndexWhere=function($1fv){
var linkedList$=this;
var $1fw=(0);
var $1fx=null;
var $1fz;for(var $1fy=linkedList$.iterator();($1fz=$1fy.next())!==m$1.finished();){
var $1g0;
if(m$1.nn$(($1g0=$1fz))&&$1fv($1g0)){
$1fx=$1fw;
}
($1g1=$1fw,$1fw=$1g1.successor,$1g1);
var $1g1;
}
return $1fx;
};linkedList$.lastIndexWhere.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]},ps:[{nm:'selecting',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Arguments$Callable:{t:'T',l:[{t:'i',l:['Element$LinkedList',{t:m$1.$_Object}]}]},Return$Callable:{t:m$1.$_Boolean}}},$rt:{t:m$1.$_Boolean},ps:[{nm:'element',mt:'prm',$t:{t:'i',l:['Element$LinkedList',{t:m$1.$_Object}]}}]}],$cont:LinkedList,pa:3,d:['ceylon.collection','LinkedList','$m','lastIndexWhere']};};
linkedList$.collect=function($1g2,$ljywq3$){var linkedList$=this;
return m$1.tpl$([],m$1.for$(function(){
var $1g3=linkedList$.iterator(),$1g4=m$1.finished();
var n$1g4=function(){return $1g4=$1g3.next();}
return function(){
if(n$1g4()!==m$1.finished()){
var $1g5=$1g4,$1g6=$1g2($1g5);
return $1g6;
}
return m$1.finished();
}
},{Element$Iterable:$ljywq3$.Result$collect/*ORALE!Result inv pero Element var*/,Absent$Iterable:{t:m$1.Null}}));
};
linkedList$.collect.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Sequential,a:{Element$Sequential:'Result$collect'}},ps:[{nm:'collecting',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Arguments$Callable:{t:'T',l:['Element$LinkedList']},Return$Callable:'Result$collect'}},$rt:'Result$collect',ps:[{nm:'element',mt:'prm',$t:'Element$LinkedList'}]}],$cont:LinkedList,tp:{Result$collect:{}},pa:3,d:['ceylon.collection','LinkedList','$m','collect']};};
m$1.atr$(linkedList$,'first',function(){
var linkedList$=this;
return ($1g7=linkedList$.$1dkeuw$18s,m$1.nn$($1g7)?$1g7.element:null);
},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$LinkedList']},$cont:LinkedList,pa:3,d:['ceylon.collection','LinkedList','$at','first']};});
m$1.atr$(linkedList$,'last',function(){
var linkedList$=this;
return ($1g8=linkedList$.$1dkeuw$18t,m$1.nn$($1g8)?$1g8.element:null);
},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$LinkedList']},$cont:LinkedList,pa:3,d:['ceylon.collection','LinkedList','$at','last']};});
linkedList$.$_push=function($1g9){var linkedList$=this;
return linkedList$.insert(0,$1g9);
};linkedList$.$_pop=function(){var linkedList$=this;
return linkedList$.deleteFirst();
};m$1.atr$(linkedList$,'top',function(){
var linkedList$=this;
return linkedList$.first;
},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$LinkedList']},$cont:LinkedList,pa:3,d:['ceylon.collection','LinkedList','$at','top']};});
linkedList$.offer=function($1ga){var linkedList$=this;
return linkedList$.add($1ga);
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
LinkedList.inst$$=function($1gb){
var linkedList$=new LinkedList.$$;
m$1.set_type_args(linkedList$,{Element$LinkedList:$1gb.$$targs$$.Type$Class.a.Element$LinkedList});
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
var $1g7,$1g8;
function ArrayList$$c($$targs$$,arrayList$){
m$1.set_type_args(arrayList$,$$targs$$);
m$1.SearchableList({Element$SearchableList:$$targs$$.Element$ArrayList},arrayList$);
MutableList({Element$MutableList:$$targs$$.Element$ArrayList},arrayList$);
Stack({Element$Stack:$$targs$$.Element$ArrayList},arrayList$);
Queue({Element$Queue:$$targs$$.Element$ArrayList},arrayList$);
}
function ArrayList(){return ArrayList$c_$c$.apply(undefined,arguments);}
function ArrayList$c_$c$$$a($1gc,$1gd,$1ge,$$targs$$,arrayList$){
if($1gc===undefined){$1gc=(0);}
if($1gd===undefined){$1gd=(1.5);}
if($1ge===undefined){$1ge=m$1.empty();}
arrayList$.$1dkeuw$1gf_=$1gc;
m$1.atr$(arrayList$,'$1dkeuw$1gf',function(){return this.$1dkeuw$1gf_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:ArrayList,an:function(){return[m$1.doc("The initial size of the backing array.")];},d:['ceylon.collection','ArrayList','$at','initialCapacity$28ur5n']};});
arrayList$.$1dkeuw$1gg_=$1gd;
m$1.atr$(arrayList$,'$1dkeuw$1gg',function(){return this.$1dkeuw$1gg_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Float},$cont:ArrayList,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:ArrayList:$at:growthFactor$yahbl9')];},d:['ceylon.collection','ArrayList','$at','growthFactor$yahbl9']};});
arrayList$.$1dkeuw$1gh_=m$1.$_Array($1ge,{Element$Array:m$1.mut$([{t:m$1.Null},arrayList$.$$targs$$.Element$ArrayList])});
m$1.atr$(arrayList$,'$1dkeuw$1gh',function(){return this.$1dkeuw$1gh_;},function($1gi){return this.$1dkeuw$1gh_=$1gi;},function(){return{mod:$CCMM$,$t:{t:m$1.$_Array,a:{Element$Array:{t:'u',l:[{t:m$1.Null},'Element$ArrayList']}}},$cont:ArrayList,pa:1027,an:function(){return[m$1.doc("The underlying array.")];},d:['ceylon.collection','ArrayList','$at','array$i32poi']};});
return arrayList$;
};
function ArrayList$c_$c$($1gc,$1gd,$1ge,$$targs$$,arrayList$){
$init$ArrayList();
if(arrayList$===undefined)arrayList$=new ArrayList.$$;
if($1gc===undefined){$1gc=(0);}
if($1gd===undefined){$1gd=(1.5);}
if($1ge===undefined){$1ge=m$1.empty();}
ArrayList$$c($$targs$$,arrayList$);
ArrayList$c_$c$$$a($1gc,$1gd,$1ge,$$targs$$,arrayList$);
arrayList$.$1dkeuw$1gj_=arrayList$.$1dkeuw$1gh.size;
m$1.asrt$(((arrayList$.$1dkeuw$1gf>=0)),"initial capacity cannot be negative: \'initialCapacity >= 0\' at ArrayList.ceylon (84:11-84:32)",'83:4-84:33','ArrayList.ceylon');
m$1.asrt$(((arrayList$.$1dkeuw$1gf<=m$1.runtime().maxArraySize)),"initial capacity too large: \'initialCapacity <= runtime.maxArraySize\' at ArrayList.ceylon (87:11-87:51)",'86:4-87:52','ArrayList.ceylon');
m$1.asrt$((arrayList$.$1dkeuw$1gg.notSmallerThan(m$1.Float(1.0))),"growth factor must be at least 1.0: \'growthFactor >= 1.0\' at ArrayList.ceylon (90:11-90:31)",'89:4-90:32','ArrayList.ceylon');
m$1.atr$(arrayList$,'size',function(){
return arrayList$.$1dkeuw$1gj;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$at','size']};});
if((arrayList$.$1dkeuw$1gj<arrayList$.$1dkeuw$1gf)){
var $1gk=arrayList$.$1dkeuw$1gl(arrayList$.$1dkeuw$1gf);
arrayList$.$1dkeuw$1gh.copyTo($1gk,0,0,arrayList$.$1dkeuw$1gj);
arrayList$.$1dkeuw$1gh=$1gk;
}
arrayList$.getFromFirst=function($1gm){return (($1gn=$1gm,$1gn.notSmallerThan((0))&&$1gn.smallerThan(arrayList$.$1dkeuw$1gj))?arrayList$.$1dkeuw$1gh.$_get($1gm):null);
};
arrayList$.iterator=function(){return function(){function $1go($$targs$$){
var $1go$=new $1go.$$;$1go$.outer$=arrayList$;
$1go$.$$targs$$=$$targs$$;
m$1.Iterator({Element$Iterator:arrayList$.$$targs$$.Element$ArrayList/*ORALE!Element inv pero Element var*/},$1go$);
$1go$.$1dkeuw$1gp_=(0);
$1go$.$prop$get$1dkeuw$1gp={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$1go,pa:1024,d:['ceylon.collection','ArrayList','$at','index$sffdm1']};}};
$1go$.$prop$get$1dkeuw$1gp.get=function(){return $1dkeuw$1gp};
return $1go$;
};$1go.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},$cont:ArrayList,sts:[{t:m$1.Iterator,a:{Element$Iterator:'Element$ArrayList'}}],d:['ceylon.collection','ArrayList']};};
function $init$$1go(){
if($1go.$$===undefined){
m$1.initTypeProto($1go,'ceylon.collection::ArrayList.anonymous#0',m$1.Basic,m$1.Iterator);
(function($1go$){
m$1.atr$($1go$,'$1dkeuw$1gp',function(){return this.$1dkeuw$1gp_;},function($1gq){return this.$1dkeuw$1gp_=$1gq;},function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$1go,pa:1024,d:['ceylon.collection','ArrayList','$at','index$sffdm1']};});
$1go$.next=function(){
var $1go$=this;
if(($1go$.$1dkeuw$1gp<arrayList$.$1dkeuw$1gj)){
var $1gr;
if(m$1.nn$(($1gr=arrayList$.$1dkeuw$1gh.$_get(($1gs=$1go$.$1dkeuw$1gp,$1go$.$1dkeuw$1gp=$1gs.successor,$1gs))))){
return $1gr;
}
else{
var $1gt;
m$1.asrt$((m$1.is$(($1gt=null),arrayList$.$$targs$$.Element$ArrayList)),"Assertion failed: \'is Element null\' at ArrayList.ceylon (200:27-200:43)",'200:20-200:44','ArrayList.ceylon');
return $1gt;
}
var $1gs;
}
else{
return m$1.finished();
}
};$1go$.next.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Finished},'Element$ArrayList']},ps:[],$cont:$1go,pa:3,d:['ceylon.collection','ArrayList','$m','next']};};
})($1go.$$.prototype);
}
return $1go;
}
arrayList$.$init$$1go=$init$$1go;
$init$$1go();
return $1go();}();
};
arrayList$.measure=function($1gv,$1gw){return arrayList$.span(($1gx=measureToSpan($1gv,$1gw),$1gx.$_get(0)),$1gx.$_get(1));
};
arrayList$.deleteMeasure=function($1gy,$1gz){return arrayList$.deleteSpan(($1h0=measureToSpan($1gy,$1gz),$1h0.$_get(0)),$1h0.$_get(1));
};
arrayList$.spanFrom=function($1h1){return ($1h2=(($1h1>=arrayList$.$1dkeuw$1gj)?ArrayList(undefined,undefined,undefined,{Element$ArrayList:{t:m$1.Nothing}}):null),m$1.nn$($1h2)?$1h2:arrayList$.span($1h1,arrayList$.$1dkeuw$1gj.minus(1)));
var $1h2;
};
arrayList$.spanTo=function($1h3){return ($1h4=(($1h3<0)?ArrayList(undefined,undefined,undefined,{Element$ArrayList:{t:m$1.Nothing}}):null),m$1.nn$($1h4)?$1h4:arrayList$.span(0,$1h3));
var $1h4;
};
m$1.atr$(arrayList$,'first',function(){
return ((arrayList$.$1dkeuw$1gj>0)?arrayList$.$1dkeuw$1gh.$_get(0):null);
},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$ArrayList']},$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$at','first']};});
m$1.atr$(arrayList$,'lastIndex',function(){
return ((arrayList$.$1dkeuw$1gj>=1)?arrayList$.$1dkeuw$1gj.minus(1):null);
},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]},$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$at','lastIndex']};});
arrayList$.equals=function($1h5){return arrayList$.getT$all()['ceylon.language::List'].$$.prototype.equals.call(arrayList$,$1h5);
};
m$1.atr$(arrayList$,'hash',function(){
return m$1.attrGetter(arrayList$.getT$all()['ceylon.language::List'],'hash').call(this);
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$at','hash']};});
arrayList$.$_push=function($1h6){return arrayList$.add($1h6);
};
arrayList$.$_pop=function(){return arrayList$.deleteLast();
};
m$1.atr$(arrayList$,'top',function(){
return arrayList$.last;
},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$ArrayList']},$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$at','top']};});
arrayList$.offer=function($1h7){return arrayList$.add($1h7);
};
arrayList$.accept=function(){return arrayList$.deleteFirst();
};
m$1.atr$(arrayList$,'back',function(){
return arrayList$.last;
},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$ArrayList']},$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$at','back']};});
m$1.atr$(arrayList$,'front',function(){
return arrayList$.first;
},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$ArrayList']},$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$at','front']};});
arrayList$.occursAt=function($1h8,$1h9){return (($1h8<arrayList$.$1dkeuw$1gj)?arrayList$.$1dkeuw$1gh.occursAt($1h8,$1h9):false);
};
arrayList$.firstOccurrence=function($1ha,$1hb,$1hc){if($1hb===undefined){$1hb=arrayList$.firstOccurrence$defs$from($1ha,$1hb,$1hc);}
if($1hc===undefined){$1hc=arrayList$.firstOccurrence$defs$length($1ha,$1hb,$1hc);}
return function(){var $1hd;
if(m$1.nn$(($1hd=($1he=$1ha,$1hf=$1hb,$1hg=smallest($1hb.plus($1hc),arrayList$.size).minus($1hb),($1hh=arrayList$.$1dkeuw$1gh,m$1.jsc$3($1hh,$1hh.firstOccurrence))($1he,$1hf,$1hg)))))return $1hd;else return null}();
var $1he,$1hf,$1hg,$1hh;
};
arrayList$.lastOccurrence=function($1hi,$1hj,$1hk){if($1hj===undefined){$1hj=arrayList$.lastOccurrence$defs$from($1hi,$1hj,$1hk);}
if($1hk===undefined){$1hk=arrayList$.lastOccurrence$defs$length($1hi,$1hj,$1hk);}
return function(){var $1hl;
if(m$1.nn$(($1hl=($1hm=$1hi,$1hn=largest($1hj,arrayList$.$1dkeuw$1gh.size.minus(arrayList$.size)),$1ho=$1hk,($1hp=arrayList$.$1dkeuw$1gh,m$1.jsc$3($1hp,$1hp.lastOccurrence))($1hm,$1hn,$1ho)))))return $1hl;else return null}();
var $1hm,$1hn,$1ho,$1hp;
};
arrayList$.occurs=function($1hq,$1hr,$1hs){if($1hr===undefined){$1hr=arrayList$.occurs$defs$from($1hq,$1hr,$1hs);}
if($1hs===undefined){$1hs=arrayList$.occurs$defs$length($1hq,$1hr,$1hs);}
return ($1ht=$1hq,$1hu=$1hr,$1hv=smallest($1hr.plus($1hs),arrayList$.size).minus($1hr),($1hw=arrayList$.$1dkeuw$1gh,m$1.jsc$3($1hw,$1hw.occurs))($1ht,$1hu,$1hv));
var $1ht,$1hu,$1hv,$1hw;
};
arrayList$.occurrences=function($1hx,$1hy,$1hz){if($1hy===undefined){$1hy=arrayList$.occurrences$defs$from($1hx,$1hy,$1hz);}
if($1hz===undefined){$1hz=arrayList$.occurrences$defs$length($1hx,$1hy,$1hz);}
return ($1i0=$1hx,$1i1=$1hy,$1i2=smallest($1hy.plus($1hz),arrayList$.size).minus($1hy),($1i3=arrayList$.$1dkeuw$1gh,m$1.jsc$3($1i3,$1i3.occurrences))($1i0,$1i1,$1i2));
var $1i0,$1i1,$1i2,$1i3;
};
return arrayList$;
};
ArrayList$c_$c$.$crtmm$=function(){return{mod:$CCMM$,ps:[{nm:'initialCapacity',mt:'prm',def:1,$t:{t:m$1.Integer},an:function(){return[m$1.doc("The initial size of the backing array.")];}},{nm:'growthFactor',mt:'prm',def:1,$t:{t:m$1.Float},an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:ArrayList:$cn:$def:$at:growthFactor$6olvvh')];}},{nm:'elements',mt:'prm',def:1,$t:{t:m$1.Iterable,a:{Element$Iterable:'Element$ArrayList',Absent$Iterable:{t:m$1.Null}}},an:function(){return[m$1.doc("The initial elements of the list.")];}}],$cont:ArrayList,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:ArrayList:$cn:$def')];},d:['ceylon.collection','ArrayList','$cn','$def']};};
ArrayList.ArrayList$c_$c$=ArrayList$c_$c$;
ex$.ArrayList$c_$c$=ArrayList$c_$c$;
function ArrayList$c_copy$$a($1i4,$1i5,$$targs$$,arrayList$){
if($1i5===undefined){$1i5=(1.5);}
arrayList$.$1dkeuw$1gf_=$1i4.size;
m$1.atr$(arrayList$,'$1dkeuw$1gf',function(){return this.$1dkeuw$1gf_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:ArrayList,an:function(){return[m$1.doc("The initial size of the backing array.")];},d:['ceylon.collection','ArrayList','$at','initialCapacity$28ur5n']};});
arrayList$.$1dkeuw$1gg_=$1i5;
m$1.atr$(arrayList$,'$1dkeuw$1gg',function(){return this.$1dkeuw$1gg_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Float},$cont:ArrayList,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:ArrayList:$at:growthFactor$yahbl9')];},d:['ceylon.collection','ArrayList','$at','growthFactor$yahbl9']};});
arrayList$.$1dkeuw$1gh_=$1i4.$1dkeuw$1gh.clone();
m$1.atr$(arrayList$,'$1dkeuw$1gh',function(){return this.$1dkeuw$1gh_;},function($1i6){return this.$1dkeuw$1gh_=$1i6;},function(){return{mod:$CCMM$,$t:{t:m$1.$_Array,a:{Element$Array:{t:'u',l:[{t:m$1.Null},'Element$ArrayList']}}},$cont:ArrayList,pa:1027,an:function(){return[m$1.doc("The underlying array.")];},d:['ceylon.collection','ArrayList','$at','array$i32poi']};});
return arrayList$;
};
function ArrayList$c_copy($1i4,$1i5,$$targs$$,arrayList$){
$init$ArrayList();
if(arrayList$===undefined)arrayList$=new ArrayList.$$;
if($1i5===undefined){$1i5=(1.5);}
ArrayList$$c($$targs$$,arrayList$);
ArrayList$c_copy$$a($1i4,$1i5,$$targs$$,arrayList$);
arrayList$.$1dkeuw$1gj_=arrayList$.$1dkeuw$1gh.size;
m$1.asrt$(((arrayList$.$1dkeuw$1gf>=0)),"initial capacity cannot be negative: \'initialCapacity >= 0\' at ArrayList.ceylon (84:11-84:32)",'83:4-84:33','ArrayList.ceylon');
m$1.asrt$(((arrayList$.$1dkeuw$1gf<=m$1.runtime().maxArraySize)),"initial capacity too large: \'initialCapacity <= runtime.maxArraySize\' at ArrayList.ceylon (87:11-87:51)",'86:4-87:52','ArrayList.ceylon');
m$1.asrt$((arrayList$.$1dkeuw$1gg.notSmallerThan(m$1.Float(1.0))),"growth factor must be at least 1.0: \'growthFactor >= 1.0\' at ArrayList.ceylon (90:11-90:31)",'89:4-90:32','ArrayList.ceylon');
m$1.atr$(arrayList$,'size',function(){
return arrayList$.$1dkeuw$1gj;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$at','size']};});
if((arrayList$.$1dkeuw$1gj<arrayList$.$1dkeuw$1gf)){
var $1gk=arrayList$.$1dkeuw$1gl(arrayList$.$1dkeuw$1gf);
arrayList$.$1dkeuw$1gh.copyTo($1gk,0,0,arrayList$.$1dkeuw$1gj);
arrayList$.$1dkeuw$1gh=$1gk;
}
arrayList$.getFromFirst=function($1gm){return (($1i7=$1gm,$1i7.notSmallerThan((0))&&$1i7.smallerThan(arrayList$.$1dkeuw$1gj))?arrayList$.$1dkeuw$1gh.$_get($1gm):null);
};
arrayList$.iterator=function(){return function(){function $1go($$targs$$){
var $1go$=new $1go.$$;$1go$.outer$=arrayList$;
$1go$.$$targs$$=$$targs$$;
m$1.Iterator({Element$Iterator:arrayList$.$$targs$$.Element$ArrayList/*ORALE!Element inv pero Element var*/},$1go$);
$1go$.$1dkeuw$1gp_=(0);
$1go$.$prop$get$1dkeuw$1gp.get=function(){return $1dkeuw$1gp};
return $1go$;
};$1go.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},$cont:ArrayList,sts:[{t:m$1.Iterator,a:{Element$Iterator:'Element$ArrayList'}}],d:['ceylon.collection','ArrayList']};};
function $init$$1go(){
if($1go.$$===undefined){
m$1.initTypeProto($1go,'ceylon.collection::ArrayList.anonymous#0',m$1.Basic,m$1.Iterator);
(function($1go$){
m$1.atr$($1go$,'$1dkeuw$1gp',function(){return this.$1dkeuw$1gp_;},function($1i8){return this.$1dkeuw$1gp_=$1i8;},function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$1go,pa:1024,d:['ceylon.collection','ArrayList','$at','index$sffdm1']};});
$1go$.next=function(){
var $1go$=this;
if(($1go$.$1dkeuw$1gp<arrayList$.$1dkeuw$1gj)){
var $1gr;
if(m$1.nn$(($1gr=arrayList$.$1dkeuw$1gh.$_get(($1i9=$1go$.$1dkeuw$1gp,$1go$.$1dkeuw$1gp=$1i9.successor,$1i9))))){
return $1gr;
}
else{
var $1gt;
m$1.asrt$((m$1.is$(($1gt=null),arrayList$.$$targs$$.Element$ArrayList)),"Assertion failed: \'is Element null\' at ArrayList.ceylon (200:27-200:43)",'200:20-200:44','ArrayList.ceylon');
return $1gt;
}
var $1i9;
}
else{
return m$1.finished();
}
};$1go$.next.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Finished},'Element$ArrayList']},ps:[],$cont:$1go,pa:3,d:['ceylon.collection','ArrayList','$m','next']};};
})($1go.$$.prototype);
}
return $1go;
}
arrayList$.$init$$1go=$init$$1go;
$init$$1go();
return $1go();}();
};
arrayList$.measure=function($1gv,$1gw){return arrayList$.span(($1ib=measureToSpan($1gv,$1gw),$1ib.$_get(0)),$1ib.$_get(1));
};
arrayList$.deleteMeasure=function($1gy,$1gz){return arrayList$.deleteSpan(($1ic=measureToSpan($1gy,$1gz),$1ic.$_get(0)),$1ic.$_get(1));
};
arrayList$.spanFrom=function($1h1){return ($1id=(($1h1>=arrayList$.$1dkeuw$1gj)?ArrayList(undefined,undefined,undefined,{Element$ArrayList:{t:m$1.Nothing}}):null),m$1.nn$($1id)?$1id:arrayList$.span($1h1,arrayList$.$1dkeuw$1gj.minus(1)));
var $1id;
};
arrayList$.spanTo=function($1h3){return ($1ie=(($1h3<0)?ArrayList(undefined,undefined,undefined,{Element$ArrayList:{t:m$1.Nothing}}):null),m$1.nn$($1ie)?$1ie:arrayList$.span(0,$1h3));
var $1ie;
};
m$1.atr$(arrayList$,'first',function(){
return ((arrayList$.$1dkeuw$1gj>0)?arrayList$.$1dkeuw$1gh.$_get(0):null);
},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$ArrayList']},$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$at','first']};});
m$1.atr$(arrayList$,'lastIndex',function(){
return ((arrayList$.$1dkeuw$1gj>=1)?arrayList$.$1dkeuw$1gj.minus(1):null);
},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]},$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$at','lastIndex']};});
arrayList$.equals=function($1h5){return arrayList$.getT$all()['ceylon.language::List'].$$.prototype.equals.call(arrayList$,$1h5);
};
m$1.atr$(arrayList$,'hash',function(){
return m$1.attrGetter(arrayList$.getT$all()['ceylon.language::List'],'hash').call(this);
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$at','hash']};});
arrayList$.$_push=function($1h6){return arrayList$.add($1h6);
};
arrayList$.$_pop=function(){return arrayList$.deleteLast();
};
m$1.atr$(arrayList$,'top',function(){
return arrayList$.last;
},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$ArrayList']},$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$at','top']};});
arrayList$.offer=function($1h7){return arrayList$.add($1h7);
};
arrayList$.accept=function(){return arrayList$.deleteFirst();
};
m$1.atr$(arrayList$,'back',function(){
return arrayList$.last;
},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$ArrayList']},$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$at','back']};});
m$1.atr$(arrayList$,'front',function(){
return arrayList$.first;
},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$ArrayList']},$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$at','front']};});
arrayList$.occursAt=function($1h8,$1h9){return (($1h8<arrayList$.$1dkeuw$1gj)?arrayList$.$1dkeuw$1gh.occursAt($1h8,$1h9):false);
};
arrayList$.firstOccurrence=function($1ha,$1hb,$1hc){if($1hb===undefined){$1hb=arrayList$.firstOccurrence$defs$from($1ha,$1hb,$1hc);}
if($1hc===undefined){$1hc=arrayList$.firstOccurrence$defs$length($1ha,$1hb,$1hc);}
return function(){var $1hd;
if(m$1.nn$(($1hd=($1if=$1ha,$1ig=$1hb,$1ih=smallest($1hb.plus($1hc),arrayList$.size).minus($1hb),($1ii=arrayList$.$1dkeuw$1gh,m$1.jsc$3($1ii,$1ii.firstOccurrence))($1if,$1ig,$1ih)))))return $1hd;else return null}();
var $1if,$1ig,$1ih,$1ii;
};
arrayList$.lastOccurrence=function($1hi,$1hj,$1hk){if($1hj===undefined){$1hj=arrayList$.lastOccurrence$defs$from($1hi,$1hj,$1hk);}
if($1hk===undefined){$1hk=arrayList$.lastOccurrence$defs$length($1hi,$1hj,$1hk);}
return function(){var $1hl;
if(m$1.nn$(($1hl=($1ij=$1hi,$1ik=largest($1hj,arrayList$.$1dkeuw$1gh.size.minus(arrayList$.size)),$1il=$1hk,($1im=arrayList$.$1dkeuw$1gh,m$1.jsc$3($1im,$1im.lastOccurrence))($1ij,$1ik,$1il)))))return $1hl;else return null}();
var $1ij,$1ik,$1il,$1im;
};
arrayList$.occurs=function($1hq,$1hr,$1hs){if($1hr===undefined){$1hr=arrayList$.occurs$defs$from($1hq,$1hr,$1hs);}
if($1hs===undefined){$1hs=arrayList$.occurs$defs$length($1hq,$1hr,$1hs);}
return ($1in=$1hq,$1io=$1hr,$1ip=smallest($1hr.plus($1hs),arrayList$.size).minus($1hr),($1iq=arrayList$.$1dkeuw$1gh,m$1.jsc$3($1iq,$1iq.occurs))($1in,$1io,$1ip));
var $1in,$1io,$1ip,$1iq;
};
arrayList$.occurrences=function($1hx,$1hy,$1hz){if($1hy===undefined){$1hy=arrayList$.occurrences$defs$from($1hx,$1hy,$1hz);}
if($1hz===undefined){$1hz=arrayList$.occurrences$defs$length($1hx,$1hy,$1hz);}
return ($1ir=$1hx,$1is=$1hy,$1it=smallest($1hy.plus($1hz),arrayList$.size).minus($1hy),($1iu=arrayList$.$1dkeuw$1gh,m$1.jsc$3($1iu,$1iu.occurrences))($1ir,$1is,$1it));
var $1ir,$1is,$1it,$1iu;
};
return arrayList$;
};
ArrayList$c_copy.$crtmm$=function(){return{mod:$CCMM$,ps:[{nm:'arrayList',mt:'prm',$t:{t:ArrayList,a:{Element$ArrayList:'Element$ArrayList'}},an:function(){return[m$1.doc("The `ArrayList` to copy.")];}},{nm:'growthFactor',mt:'prm',def:1,$t:{t:m$1.Float},an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:ArrayList:$cn:copy:$at:growthFactor$o4kg6')];}}],$cont:ArrayList,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:ArrayList:$cn:copy')];},d:['ceylon.collection','ArrayList','$cn','copy']};};
ArrayList.ArrayList$c_copy=ArrayList$c_copy;
ex$.ArrayList$c_copy=ArrayList$c_copy;
function ArrayList$c_ofSize$$a($1iv,$1iw,$1ix,$$targs$$,arrayList$){
if($1ix===undefined){$1ix=(1.5);}
arrayList$.$1dkeuw$1gf_=($1iy=(($1iv<0)?0:null),m$1.nn$($1iy)?$1iy:$1iv);
m$1.atr$(arrayList$,'$1dkeuw$1gf',function(){return this.$1dkeuw$1gf_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:ArrayList,an:function(){return[m$1.doc("The initial size of the backing array.")];},d:['ceylon.collection','ArrayList','$at','initialCapacity$28ur5n']};});
var $1iy;
arrayList$.$1dkeuw$1gg_=$1ix;
m$1.atr$(arrayList$,'$1dkeuw$1gg',function(){return this.$1dkeuw$1gg_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Float},$cont:ArrayList,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:ArrayList:$at:growthFactor$yahbl9')];},d:['ceylon.collection','ArrayList','$at','growthFactor$yahbl9']};});
arrayList$.$1dkeuw$1gh_=m$1.$_Array$c_ofSize($1iv,$1iw,{Element$Array:m$1.mut$([{t:m$1.Null},arrayList$.$$targs$$.Element$ArrayList])});
m$1.atr$(arrayList$,'$1dkeuw$1gh',function(){return this.$1dkeuw$1gh_;},function($1iz){return this.$1dkeuw$1gh_=$1iz;},function(){return{mod:$CCMM$,$t:{t:m$1.$_Array,a:{Element$Array:{t:'u',l:[{t:m$1.Null},'Element$ArrayList']}}},$cont:ArrayList,pa:1027,an:function(){return[m$1.doc("The underlying array.")];},d:['ceylon.collection','ArrayList','$at','array$i32poi']};});
return arrayList$;
};
function ArrayList$c_ofSize($1iv,$1iw,$1ix,$$targs$$,arrayList$){
$init$ArrayList();
if(arrayList$===undefined)arrayList$=new ArrayList.$$;
if($1ix===undefined){$1ix=(1.5);}
ArrayList$$c($$targs$$,arrayList$);
ArrayList$c_ofSize$$a($1iv,$1iw,$1ix,$$targs$$,arrayList$);
arrayList$.$1dkeuw$1gj_=arrayList$.$1dkeuw$1gh.size;
m$1.asrt$(((arrayList$.$1dkeuw$1gf>=0)),"initial capacity cannot be negative: \'initialCapacity >= 0\' at ArrayList.ceylon (84:11-84:32)",'83:4-84:33','ArrayList.ceylon');
m$1.asrt$(((arrayList$.$1dkeuw$1gf<=m$1.runtime().maxArraySize)),"initial capacity too large: \'initialCapacity <= runtime.maxArraySize\' at ArrayList.ceylon (87:11-87:51)",'86:4-87:52','ArrayList.ceylon');
m$1.asrt$((arrayList$.$1dkeuw$1gg.notSmallerThan(m$1.Float(1.0))),"growth factor must be at least 1.0: \'growthFactor >= 1.0\' at ArrayList.ceylon (90:11-90:31)",'89:4-90:32','ArrayList.ceylon');
m$1.atr$(arrayList$,'size',function(){
return arrayList$.$1dkeuw$1gj;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$at','size']};});
if((arrayList$.$1dkeuw$1gj<arrayList$.$1dkeuw$1gf)){
var $1gk=arrayList$.$1dkeuw$1gl(arrayList$.$1dkeuw$1gf);
arrayList$.$1dkeuw$1gh.copyTo($1gk,0,0,arrayList$.$1dkeuw$1gj);
arrayList$.$1dkeuw$1gh=$1gk;
}
arrayList$.getFromFirst=function($1gm){return (($1j0=$1gm,$1j0.notSmallerThan((0))&&$1j0.smallerThan(arrayList$.$1dkeuw$1gj))?arrayList$.$1dkeuw$1gh.$_get($1gm):null);
};
arrayList$.iterator=function(){return function(){function $1go($$targs$$){
var $1go$=new $1go.$$;$1go$.outer$=arrayList$;
$1go$.$$targs$$=$$targs$$;
m$1.Iterator({Element$Iterator:arrayList$.$$targs$$.Element$ArrayList/*ORALE!Element inv pero Element var*/},$1go$);
$1go$.$1dkeuw$1gp_=(0);
$1go$.$prop$get$1dkeuw$1gp.get=function(){return $1dkeuw$1gp};
return $1go$;
};$1go.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},$cont:ArrayList,sts:[{t:m$1.Iterator,a:{Element$Iterator:'Element$ArrayList'}}],d:['ceylon.collection','ArrayList']};};
function $init$$1go(){
if($1go.$$===undefined){
m$1.initTypeProto($1go,'ceylon.collection::ArrayList.anonymous#0',m$1.Basic,m$1.Iterator);
(function($1go$){
m$1.atr$($1go$,'$1dkeuw$1gp',function(){return this.$1dkeuw$1gp_;},function($1j1){return this.$1dkeuw$1gp_=$1j1;},function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$1go,pa:1024,d:['ceylon.collection','ArrayList','$at','index$sffdm1']};});
$1go$.next=function(){
var $1go$=this;
if(($1go$.$1dkeuw$1gp<arrayList$.$1dkeuw$1gj)){
var $1gr;
if(m$1.nn$(($1gr=arrayList$.$1dkeuw$1gh.$_get(($1j2=$1go$.$1dkeuw$1gp,$1go$.$1dkeuw$1gp=$1j2.successor,$1j2))))){
return $1gr;
}
else{
var $1gt;
m$1.asrt$((m$1.is$(($1gt=null),arrayList$.$$targs$$.Element$ArrayList)),"Assertion failed: \'is Element null\' at ArrayList.ceylon (200:27-200:43)",'200:20-200:44','ArrayList.ceylon');
return $1gt;
}
var $1j2;
}
else{
return m$1.finished();
}
};$1go$.next.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Finished},'Element$ArrayList']},ps:[],$cont:$1go,pa:3,d:['ceylon.collection','ArrayList','$m','next']};};
})($1go.$$.prototype);
}
return $1go;
}
arrayList$.$init$$1go=$init$$1go;
$init$$1go();
return $1go();}();
};
arrayList$.measure=function($1gv,$1gw){return arrayList$.span(($1j4=measureToSpan($1gv,$1gw),$1j4.$_get(0)),$1j4.$_get(1));
};
arrayList$.deleteMeasure=function($1gy,$1gz){return arrayList$.deleteSpan(($1j5=measureToSpan($1gy,$1gz),$1j5.$_get(0)),$1j5.$_get(1));
};
arrayList$.spanFrom=function($1h1){return ($1j6=(($1h1>=arrayList$.$1dkeuw$1gj)?ArrayList(undefined,undefined,undefined,{Element$ArrayList:{t:m$1.Nothing}}):null),m$1.nn$($1j6)?$1j6:arrayList$.span($1h1,arrayList$.$1dkeuw$1gj.minus(1)));
var $1j6;
};
arrayList$.spanTo=function($1h3){return ($1j7=(($1h3<0)?ArrayList(undefined,undefined,undefined,{Element$ArrayList:{t:m$1.Nothing}}):null),m$1.nn$($1j7)?$1j7:arrayList$.span(0,$1h3));
var $1j7;
};
m$1.atr$(arrayList$,'first',function(){
return ((arrayList$.$1dkeuw$1gj>0)?arrayList$.$1dkeuw$1gh.$_get(0):null);
},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$ArrayList']},$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$at','first']};});
m$1.atr$(arrayList$,'lastIndex',function(){
return ((arrayList$.$1dkeuw$1gj>=1)?arrayList$.$1dkeuw$1gj.minus(1):null);
},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]},$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$at','lastIndex']};});
arrayList$.equals=function($1h5){return arrayList$.getT$all()['ceylon.language::List'].$$.prototype.equals.call(arrayList$,$1h5);
};
m$1.atr$(arrayList$,'hash',function(){
return m$1.attrGetter(arrayList$.getT$all()['ceylon.language::List'],'hash').call(this);
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$at','hash']};});
arrayList$.$_push=function($1h6){return arrayList$.add($1h6);
};
arrayList$.$_pop=function(){return arrayList$.deleteLast();
};
m$1.atr$(arrayList$,'top',function(){
return arrayList$.last;
},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$ArrayList']},$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$at','top']};});
arrayList$.offer=function($1h7){return arrayList$.add($1h7);
};
arrayList$.accept=function(){return arrayList$.deleteFirst();
};
m$1.atr$(arrayList$,'back',function(){
return arrayList$.last;
},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$ArrayList']},$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$at','back']};});
m$1.atr$(arrayList$,'front',function(){
return arrayList$.first;
},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$ArrayList']},$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$at','front']};});
arrayList$.occursAt=function($1h8,$1h9){return (($1h8<arrayList$.$1dkeuw$1gj)?arrayList$.$1dkeuw$1gh.occursAt($1h8,$1h9):false);
};
arrayList$.firstOccurrence=function($1ha,$1hb,$1hc){if($1hb===undefined){$1hb=arrayList$.firstOccurrence$defs$from($1ha,$1hb,$1hc);}
if($1hc===undefined){$1hc=arrayList$.firstOccurrence$defs$length($1ha,$1hb,$1hc);}
return function(){var $1hd;
if(m$1.nn$(($1hd=($1j8=$1ha,$1j9=$1hb,$1ja=smallest($1hb.plus($1hc),arrayList$.size).minus($1hb),($1jb=arrayList$.$1dkeuw$1gh,m$1.jsc$3($1jb,$1jb.firstOccurrence))($1j8,$1j9,$1ja)))))return $1hd;else return null}();
var $1j8,$1j9,$1ja,$1jb;
};
arrayList$.lastOccurrence=function($1hi,$1hj,$1hk){if($1hj===undefined){$1hj=arrayList$.lastOccurrence$defs$from($1hi,$1hj,$1hk);}
if($1hk===undefined){$1hk=arrayList$.lastOccurrence$defs$length($1hi,$1hj,$1hk);}
return function(){var $1hl;
if(m$1.nn$(($1hl=($1jc=$1hi,$1jd=largest($1hj,arrayList$.$1dkeuw$1gh.size.minus(arrayList$.size)),$1je=$1hk,($1jf=arrayList$.$1dkeuw$1gh,m$1.jsc$3($1jf,$1jf.lastOccurrence))($1jc,$1jd,$1je)))))return $1hl;else return null}();
var $1jc,$1jd,$1je,$1jf;
};
arrayList$.occurs=function($1hq,$1hr,$1hs){if($1hr===undefined){$1hr=arrayList$.occurs$defs$from($1hq,$1hr,$1hs);}
if($1hs===undefined){$1hs=arrayList$.occurs$defs$length($1hq,$1hr,$1hs);}
return ($1jg=$1hq,$1jh=$1hr,$1ji=smallest($1hr.plus($1hs),arrayList$.size).minus($1hr),($1jj=arrayList$.$1dkeuw$1gh,m$1.jsc$3($1jj,$1jj.occurs))($1jg,$1jh,$1ji));
var $1jg,$1jh,$1ji,$1jj;
};
arrayList$.occurrences=function($1hx,$1hy,$1hz){if($1hy===undefined){$1hy=arrayList$.occurrences$defs$from($1hx,$1hy,$1hz);}
if($1hz===undefined){$1hz=arrayList$.occurrences$defs$length($1hx,$1hy,$1hz);}
return ($1jk=$1hx,$1jl=$1hy,$1jm=smallest($1hy.plus($1hz),arrayList$.size).minus($1hy),($1jn=arrayList$.$1dkeuw$1gh,m$1.jsc$3($1jn,$1jn.occurrences))($1jk,$1jl,$1jm));
var $1jk,$1jl,$1jm,$1jn;
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
m$1.atr$(arrayList$,'$1dkeuw$1gf',function(){return this.$1dkeuw$1gf_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:ArrayList,an:function(){return[m$1.doc("The initial size of the backing array.")];},d:['ceylon.collection','ArrayList','$at','initialCapacity$28ur5n']};});
m$1.atr$(arrayList$,'$1dkeuw$1gg',function(){return this.$1dkeuw$1gg_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Float},$cont:ArrayList,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:ArrayList:$at:growthFactor$yahbl9')];},d:['ceylon.collection','ArrayList','$at','growthFactor$yahbl9']};});
m$1.atr$(arrayList$,'$1dkeuw$1gh',function(){return this.$1dkeuw$1gh_;},function($1jo){return this.$1dkeuw$1gh_=$1jo;},function(){return{mod:$CCMM$,$t:{t:m$1.$_Array,a:{Element$Array:{t:'u',l:[{t:m$1.Null},'Element$ArrayList']}}},$cont:ArrayList,pa:1027,an:function(){return[m$1.doc("The underlying array.")];},d:['ceylon.collection','ArrayList','$at','array$i32poi']};});
m$1.atr$(arrayList$,'$1dkeuw$1gj',function(){return this.$1dkeuw$1gj_;},function($1jp){return this.$1dkeuw$1gj_=$1jp;},function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:ArrayList,pa:1027,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:ArrayList:$at:length$u7by4j')];},d:['ceylon.collection','ArrayList','$at','length$u7by4j']};});
arrayList$.$1dkeuw$1gl=function($1jq){var arrayList$=this;
return m$1.$_Array$c_ofSize($1jq,null,{Element$Array:m$1.mut$([{t:m$1.Null},arrayList$.$$targs$$.Element$ArrayList])});
};
arrayList$.$1dkeuw$1gl.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Array,a:{Element$Array:{t:'u',l:[{t:m$1.Null},'Element$ArrayList']}}},ps:[{nm:'capacity',mt:'prm',$t:{t:m$1.Integer}}],$cont:ArrayList,d:['ceylon.collection','ArrayList','$m','store$4f5qdi']};};
m$1.atr$(arrayList$,'size',function(){
var arrayList$=this;
return arrayList$.$1dkeuw$1gj;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$at','size']};});
arrayList$.$1dkeuw$1jr=function($1js){
var arrayList$=this;
var $1jt=arrayList$.$1dkeuw$1gj.plus($1js);
var $1ju=m$1.runtime().maxArraySize;
if(($1jt>$1ju)){
throw m$1.wrapexc(m$1.OverflowException(),'107:12-107:37','ceylon/collection/ArrayList.ceylon');
}
if(($1jt>arrayList$.$1dkeuw$1gh.size)){
var $1jv=$1jt.times(arrayList$.$1dkeuw$1gg).integer;
var $1jw=($1jx=((($1jv<$1jt)||($1jv>$1ju))?$1jt:null),m$1.nn$($1jx)?$1jx:$1jv);
var $1jx;
var $1jy=arrayList$.$1dkeuw$1gl($1jw);
arrayList$.$1dkeuw$1gh.copyTo($1jy);
arrayList$.$1dkeuw$1gh=$1jy;
}
};arrayList$.$1dkeuw$1jr.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'increment',mt:'prm',$t:{t:m$1.Integer}}],$cont:ArrayList,d:['ceylon.collection','ArrayList','$m','grow$67gtuw']};};
arrayList$.add=function($1jz){
var arrayList$=this;
arrayList$.$1dkeuw$1jr(1);
($1k0=$1jz,arrayList$.$1dkeuw$1gh.set(($1k1=arrayList$.$1dkeuw$1gj,arrayList$.$1dkeuw$1gj=$1k1.successor,$1k1),$1k0), $1k0);
var $1k0,$1k1;
};arrayList$.add.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'element',mt:'prm',$t:'Element$ArrayList'}],$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$m','add']};};
arrayList$.addAll=function($1k2){
var arrayList$=this;
var $1k3=$1k2.sequence();
arrayList$.$1dkeuw$1jr($1k3.size);
var $1k5;for(var $1k4=$1k3.iterator();($1k5=$1k4.next())!==m$1.finished();){
($1k6=$1k5,arrayList$.$1dkeuw$1gh.set(($1k7=arrayList$.$1dkeuw$1gj,arrayList$.$1dkeuw$1gj=$1k7.successor,$1k7),$1k6), $1k6);
var $1k6,$1k7;
}
};arrayList$.addAll.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'elements',mt:'prm',$t:{t:m$1.Iterable,a:{Element$Iterable:'Element$ArrayList',Absent$Iterable:{t:m$1.Null}}}}],$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$m','addAll']};};
arrayList$.swap=function($1k8,$1k9){
var arrayList$=this;
m$1.asrt$((($1ka=$1k8,$1ka.notSmallerThan((0))&&$1ka.smallerThan(arrayList$.$1dkeuw$1gj))&&($1kb=$1k9,$1kb.notSmallerThan((0))&&$1kb.smallerThan(arrayList$.$1dkeuw$1gj))),"index may not be negative or greater than the\nlast index in the list: \'0<=i<length, 0<=j<length\' at ArrayList.ceylon (142:15-142:40)",'140:8-142:41','ArrayList.ceylon');
arrayList$.$1dkeuw$1gh.swap($1k8,$1k9);
};arrayList$.swap.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'i',mt:'prm',$t:{t:m$1.Integer}},{nm:'j',mt:'prm',$t:{t:m$1.Integer}}],$cont:ArrayList,pa:11,d:['ceylon.collection','ArrayList','$m','swap']};};
arrayList$.move=function($1kc,$1kd){
var arrayList$=this;
m$1.asrt$((($1ke=$1kc,$1ke.notSmallerThan((0))&&$1ke.smallerThan(arrayList$.$1dkeuw$1gj))&&($1kf=$1kd,$1kf.notSmallerThan((0))&&$1kf.smallerThan(arrayList$.$1dkeuw$1gj))),"index may not be negative or greater than the\nlast index in the list: \'0<=i<length, 0<=j<length\' at ArrayList.ceylon (150:15-150:40)",'148:8-150:41','ArrayList.ceylon');
arrayList$.$1dkeuw$1gh.move($1kc,$1kd);
};arrayList$.move.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'i',mt:'prm',$t:{t:m$1.Integer}},{nm:'j',mt:'prm',$t:{t:m$1.Integer}}],$cont:ArrayList,pa:11,d:['ceylon.collection','ArrayList','$m','move']};};
arrayList$.clear=function(){
var arrayList$=this;
arrayList$.$1dkeuw$1gj=(0);
arrayList$.$1dkeuw$1gh=arrayList$.$1dkeuw$1gl(arrayList$.$1dkeuw$1gf);
};arrayList$.clear.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[],$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$m','clear']};};
m$1.atr$(arrayList$,'capacity',function(){
var arrayList$=this;
return arrayList$.$1dkeuw$1gh.size;
},function($1kg){
var arrayList$=this;
m$1.asrt$((($1kg>=arrayList$.size)),"capacity must be at least as large as list size: \'capacity >= size\' at ArrayList.ceylon (165:15-165:32)",'164:8-165:33','ArrayList.ceylon');
m$1.asrt$((($1kg<=m$1.runtime().maxArraySize)),"capacity too large: \'capacity <= runtime.maxArraySize\' at ArrayList.ceylon (167:15-167:48)",'166:8-167:49','ArrayList.ceylon');
var $1kh=arrayList$.$1dkeuw$1gl($1kg);
arrayList$.$1dkeuw$1gh.copyTo($1kh,0,0,arrayList$.$1dkeuw$1gj);
arrayList$.$1dkeuw$1gh=$1kh;
},function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:ArrayList,pa:1025,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:ArrayList:$at:capacity')];},d:['ceylon.collection','ArrayList','$at','capacity']};},function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$cont:ArrayList,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:ArrayList:$at:capacity:$set')];},d:['ceylon.collection','ArrayList','$at','capacity','$set']};});
arrayList$.getFromFirst=function($1gm){var arrayList$=this;
return (($1ki=$1gm,$1ki.notSmallerThan((0))&&$1ki.smallerThan(arrayList$.$1dkeuw$1gj))?arrayList$.$1dkeuw$1gh.$_get($1gm):null);
};arrayList$.contains=function($1kj){
var arrayList$=this;
var $1kl;for(var $1kk=m$1.measure((0),arrayList$.size,{Element$measure:{t:m$1.Integer}}).iterator();($1kl=$1kk.next())!==m$1.finished();){
var $1km;
if(m$1.nn$(($1km=arrayList$.$1dkeuw$1gh.$_get($1kl)))){
if(m$1.$eq$($1km,$1kj)){
return true;
}
}
}
if(m$1.finished()===$1kl){
return false;
}
};arrayList$.contains.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'element',mt:'prm',$t:{t:m$1.$_Object}}],$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$m','contains']};};
arrayList$.iterator=function(){var arrayList$=this;
return function(){function $1go($$targs$$){
var $1go$=new $1go.$$;$1go$.outer$=arrayList$;
$1go$.$$targs$$=$$targs$$;
m$1.Iterator({Element$Iterator:arrayList$.$$targs$$.Element$ArrayList/*ORALE!Element inv pero Element var*/},$1go$);
$1go$.$1dkeuw$1gp_=(0);
$1go$.$prop$get$1dkeuw$1gp.get=function(){return $1dkeuw$1gp};
return $1go$;
};$1go.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},$cont:ArrayList,sts:[{t:m$1.Iterator,a:{Element$Iterator:'Element$ArrayList'}}],d:['ceylon.collection','ArrayList']};};
function $init$$1go(){
if($1go.$$===undefined){
m$1.initTypeProto($1go,'ceylon.collection::ArrayList.anonymous#0',m$1.Basic,m$1.Iterator);
(function($1go$){
m$1.atr$($1go$,'$1dkeuw$1gp',function(){return this.$1dkeuw$1gp_;},function($1kn){return this.$1dkeuw$1gp_=$1kn;},function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$1go,pa:1024,d:['ceylon.collection','ArrayList','$at','index$sffdm1']};});
$1go$.next=function(){
var $1go$=this;
if(($1go$.$1dkeuw$1gp<arrayList$.$1dkeuw$1gj)){
var $1gr;
if(m$1.nn$(($1gr=arrayList$.$1dkeuw$1gh.$_get(($1ko=$1go$.$1dkeuw$1gp,$1go$.$1dkeuw$1gp=$1ko.successor,$1ko))))){
return $1gr;
}
else{
var $1gt;
m$1.asrt$((m$1.is$(($1gt=null),arrayList$.$$targs$$.Element$ArrayList)),"Assertion failed: \'is Element null\' at ArrayList.ceylon (200:27-200:43)",'200:20-200:44','ArrayList.ceylon');
return $1gt;
}
var $1ko;
}
else{
return m$1.finished();
}
};$1go$.next.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Finished},'Element$ArrayList']},ps:[],$cont:$1go,pa:3,d:['ceylon.collection','ArrayList','$m','next']};};
})($1go.$$.prototype);
}
return $1go;
}
arrayList$.$init$$1go=$init$$1go;
$init$$1go();
return $1go();}();
};arrayList$.insert=function($1kq,$1kr){
var arrayList$=this;
m$1.asrt$((($1ks=$1kq,$1ks.notSmallerThan((0))&&$1ks.notLargerThan(arrayList$.$1dkeuw$1gj))),"index may not be negative or greater than the\nlength of the list: \'0 <= index <= length\' at ArrayList.ceylon (214:15-214:36)",'212:8-214:37','ArrayList.ceylon');
arrayList$.$1dkeuw$1jr(1);
if(($1kq<arrayList$.$1dkeuw$1gj)){
arrayList$.$1dkeuw$1gh.copyTo(arrayList$.$1dkeuw$1gh,$1kq,$1kq.plus(1),arrayList$.$1dkeuw$1gj.minus($1kq));
}
($1kt=arrayList$.$1dkeuw$1gj,arrayList$.$1dkeuw$1gj=$1kt.successor,$1kt);
var $1kt;
($1ku=$1kr,arrayList$.$1dkeuw$1gh.set($1kq,$1ku), $1ku);
var $1ku;
};arrayList$.insert.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'index',mt:'prm',$t:{t:m$1.Integer}},{nm:'element',mt:'prm',$t:'Element$ArrayList'}],$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$m','insert']};};
arrayList$.insertAll=function($1kv,$1kw){
var arrayList$=this;
m$1.asrt$((($1kx=$1kv,$1kx.notSmallerThan((0))&&$1kx.notLargerThan(arrayList$.$1dkeuw$1gj))),"index may not be negative or greater than the\nlength of the list: \'0 <= index <= length\' at ArrayList.ceylon (228:15-228:36)",'226:8-228:37','ArrayList.ceylon');
var $1ky=$1kw.sequence();
var $1kz=$1ky.size;
if(($1kz>0)){
arrayList$.$1dkeuw$1jr($1kz);
if(($1kv<arrayList$.$1dkeuw$1gj)){
arrayList$.$1dkeuw$1gh.copyTo(arrayList$.$1dkeuw$1gh,$1kv,$1kv.plus($1kz),arrayList$.$1dkeuw$1gj.minus($1kv));
}
var $1l0=$1kv;
var $1l2;for(var $1l1=$1ky.iterator();($1l2=$1l1.next())!==m$1.finished();){
($1l3=$1l2,arrayList$.$1dkeuw$1gh.set(($1l4=$1l0,$1l0=$1l4.successor,$1l4),$1l3), $1l3);
var $1l3,$1l4;
}
(arrayList$.$1dkeuw$1gj=arrayList$.$1dkeuw$1gj.plus($1kz));
}
};arrayList$.insertAll.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'index',mt:'prm',$t:{t:m$1.Integer}},{nm:'elements',mt:'prm',$t:{t:m$1.Iterable,a:{Element$Iterable:'Element$ArrayList',Absent$Iterable:{t:m$1.Null}}}}],$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$m','insertAll']};};
arrayList$.$_delete=function($1l5){
var arrayList$=this;
if(($1l6=$1l5,$1l6.notSmallerThan((0))&&$1l6.smallerThan(arrayList$.$1dkeuw$1gj))){
var $1l7=arrayList$.$1dkeuw$1gh.$_get($1l5);
arrayList$.$1dkeuw$1gh.copyTo(arrayList$.$1dkeuw$1gh,$1l5.plus(1),$1l5,arrayList$.$1dkeuw$1gj.minus($1l5).minus(1));
($1l8=arrayList$.$1dkeuw$1gj,arrayList$.$1dkeuw$1gj=$1l8.predecessor,$1l8);
var $1l8;
($1l9=null,arrayList$.$1dkeuw$1gh.set(arrayList$.$1dkeuw$1gj,$1l9), $1l9);
var $1l9;
return $1l7;
}
else{
return null;
}
};arrayList$.$_delete.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$ArrayList']},ps:[{nm:'index',mt:'prm',$t:{t:m$1.Integer}}],$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$m','delete']};};
arrayList$.remove=function($1la){
var arrayList$=this;
var $1lb=(0);
var $1lc=(0);
while(($1lb<arrayList$.$1dkeuw$1gj)){
var $1ld;
if(m$1.nn$(($1ld=arrayList$.$1dkeuw$1gh.$_get(($1le=$1lb,$1lb=$1le.successor,$1le))))){
if(!m$1.$eq$($1ld,$1la)){
($1lf=$1ld,arrayList$.$1dkeuw$1gh.set(($1lg=$1lc,$1lc=$1lg.successor,$1lg),$1lf), $1lf);
var $1lf,$1lg;
}
}
else{
($1lh=null,arrayList$.$1dkeuw$1gh.set(($1li=$1lc,$1lc=$1li.successor,$1li),$1lh), $1lh);
var $1lh,$1li;
}
var $1le;
}
arrayList$.$1dkeuw$1gj=$1lc;
while(($1lc<$1lb)){
($1lj=null,arrayList$.$1dkeuw$1gh.set(($1lk=$1lc,$1lc=$1lk.successor,$1lk),$1lj), $1lj);
var $1lj,$1lk;
}
return $1lb.minus(arrayList$.$1dkeuw$1gj);
};arrayList$.remove.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'element',mt:'prm',$t:{t:'i',l:['Element$ArrayList',{t:m$1.$_Object}]}}],$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$m','remove']};};
arrayList$.removeAll=function($1ll){
var arrayList$=this;
var $1lm=($1ln=$1ll,HashSet(undefined,undefined,$1ln,{Element$HashSet:m$1.mit$([arrayList$.$$targs$$.Element$ArrayList,{t:m$1.$_Object}])}));
var $1ln;
var $1lo=(0);
var $1lp=(0);
while(($1lo<arrayList$.$1dkeuw$1gj)){
var $1lq;
if(m$1.nn$(($1lq=arrayList$.$1dkeuw$1gh.$_get(($1lr=$1lo,$1lo=$1lr.successor,$1lr))))){
if(!m$1.$cnt$($1lm,$1lq)){
($1ls=$1lq,arrayList$.$1dkeuw$1gh.set(($1lt=$1lp,$1lp=$1lt.successor,$1lt),$1ls), $1ls);
var $1ls,$1lt;
}
}
else{
($1lu=null,arrayList$.$1dkeuw$1gh.set(($1lv=$1lp,$1lp=$1lv.successor,$1lv),$1lu), $1lu);
var $1lu,$1lv;
}
var $1lr;
}
arrayList$.$1dkeuw$1gj=$1lp;
while(($1lp<$1lo)){
($1lw=null,arrayList$.$1dkeuw$1gh.set(($1lx=$1lp,$1lp=$1lx.successor,$1lx),$1lw), $1lw);
var $1lw,$1lx;
}
return $1lo.minus(arrayList$.$1dkeuw$1gj);
};arrayList$.removeAll.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'elements',mt:'prm',$t:{t:m$1.Iterable,a:{Element$Iterable:{t:'i',l:['Element$ArrayList',{t:m$1.$_Object}]},Absent$Iterable:{t:m$1.Null}}}}],$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$m','removeAll']};};
arrayList$.removeFirst=function($1ly){
var arrayList$=this;
var $1lz;
if(m$1.nn$(($1lz=arrayList$.firstOccurrence($1ly)))){
arrayList$.$_delete($1lz);
return true;
}
else{
return false;
}
};arrayList$.removeFirst.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'element',mt:'prm',$t:{t:'i',l:['Element$ArrayList',{t:m$1.$_Object}]}}],$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$m','removeFirst']};};
arrayList$.removeLast=function($1m0){
var arrayList$=this;
var $1m1;
if(m$1.nn$(($1m1=arrayList$.lastOccurrence($1m0)))){
arrayList$.$_delete($1m1);
return true;
}
else{
return false;
}
};arrayList$.removeLast.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'element',mt:'prm',$t:{t:'i',l:['Element$ArrayList',{t:m$1.$_Object}]}}],$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$m','removeLast']};};
arrayList$.findAndRemoveFirst=function($1m2){
var arrayList$=this;
var $1m3;
if(m$1.nn$(($1m3=arrayList$.firstIndexWhere($1m2)))){
return arrayList$.$_delete($1m3);
}
else{
return null;
}
};arrayList$.findAndRemoveFirst.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$ArrayList']},ps:[{nm:'selecting',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Arguments$Callable:{t:'T',l:[{t:'i',l:['Element$ArrayList',{t:m$1.$_Object}]}]},Return$Callable:{t:m$1.$_Boolean}}},$rt:{t:m$1.$_Boolean},ps:[{nm:'element',mt:'prm',$t:{t:'i',l:['Element$ArrayList',{t:m$1.$_Object}]}}]}],$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$m','findAndRemoveFirst']};};
arrayList$.findAndRemoveLast=function($1m4){
var arrayList$=this;
var $1m5;
if(m$1.nn$(($1m5=arrayList$.lastIndexWhere($1m4)))){
return arrayList$.$_delete($1m5);
}
else{
return null;
}
};arrayList$.findAndRemoveLast.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$ArrayList']},ps:[{nm:'selecting',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Arguments$Callable:{t:'T',l:[{t:'i',l:['Element$ArrayList',{t:m$1.$_Object}]}]},Return$Callable:{t:m$1.$_Boolean}}},$rt:{t:m$1.$_Boolean},ps:[{nm:'element',mt:'prm',$t:{t:'i',l:['Element$ArrayList',{t:m$1.$_Object}]}}]}],$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$m','findAndRemoveLast']};};
arrayList$.removeWhere=function($1m6){
var arrayList$=this;
var $1m7=(0);
var $1m8=(0);
while(($1m7<arrayList$.$1dkeuw$1gj)){
var $1m9;
if(m$1.nn$(($1m9=arrayList$.$1dkeuw$1gh.$_get(($1ma=$1m7,$1m7=$1ma.successor,$1ma))))){
if(!$1m6($1m9)){
($1mb=$1m9,arrayList$.$1dkeuw$1gh.set(($1mc=$1m8,$1m8=$1mc.successor,$1mc),$1mb), $1mb);
var $1mb,$1mc;
}
}
else{
($1md=null,arrayList$.$1dkeuw$1gh.set(($1me=$1m8,$1m8=$1me.successor,$1me),$1md), $1md);
var $1md,$1me;
}
var $1ma;
}
arrayList$.$1dkeuw$1gj=$1m8;
while(($1m8<$1m7)){
($1mf=null,arrayList$.$1dkeuw$1gh.set(($1mg=$1m8,$1m8=$1mg.successor,$1mg),$1mf), $1mf);
var $1mf,$1mg;
}
return $1m7.minus(arrayList$.$1dkeuw$1gj);
};arrayList$.removeWhere.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'selecting',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Arguments$Callable:{t:'T',l:[{t:'i',l:['Element$ArrayList',{t:m$1.$_Object}]}]},Return$Callable:{t:m$1.$_Boolean}}},$rt:{t:m$1.$_Boolean},ps:[{nm:'element',mt:'prm',$t:{t:'i',l:['Element$ArrayList',{t:m$1.$_Object}]}}]}],$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$m','removeWhere']};};
arrayList$.prune=function(){
var arrayList$=this;
var $1mh=(0);
var $1mi=(0);
while(($1mh<arrayList$.$1dkeuw$1gj)){
var $1mj;
if(m$1.nn$(($1mj=arrayList$.$1dkeuw$1gh.$_get(($1mk=$1mh,$1mh=$1mk.successor,$1mk))))){
($1ml=$1mj,arrayList$.$1dkeuw$1gh.set(($1mm=$1mi,$1mi=$1mm.successor,$1mm),$1ml), $1ml);
var $1ml,$1mm;
}
var $1mk;
}
arrayList$.$1dkeuw$1gj=$1mi;
while(($1mi<$1mh)){
($1mn=null,arrayList$.$1dkeuw$1gh.set(($1mo=$1mi,$1mi=$1mo.successor,$1mo),$1mn), $1mn);
var $1mn,$1mo;
}
};arrayList$.prune.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[],$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$m','prune']};};
arrayList$.$_replace=function($1mp,$1mq){
var arrayList$=this;
var $1mr=(0);
var $1ms=(0);
while(($1ms<arrayList$.$1dkeuw$1gj)){
var $1mt;
if(m$1.nn$(($1mt=arrayList$.$1dkeuw$1gh.$_get($1ms)))&&m$1.$eq$($1mt,$1mp)){
($1mu=$1mq,arrayList$.$1dkeuw$1gh.set($1ms,$1mu), $1mu);
var $1mu;
($1mv=$1mr,$1mr=$1mv.successor,$1mv);
var $1mv;
}
($1mw=$1ms,$1ms=$1mw.successor,$1mw);
var $1mw;
}
return $1mr;
};arrayList$.$_replace.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'element',mt:'prm',$t:{t:'i',l:['Element$ArrayList',{t:m$1.$_Object}]}},{nm:'replacement',mt:'prm',$t:'Element$ArrayList'}],$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$m','replace']};};
arrayList$.replaceFirst=function($1mx,$1my){
var arrayList$=this;
var $1mz;
if(m$1.nn$(($1mz=arrayList$.firstOccurrence($1mx)))){
($1n0=$1my,arrayList$.$1dkeuw$1gh.set($1mz,$1n0), $1n0);
var $1n0;
return true;
}
else{
return false;
}
};arrayList$.replaceFirst.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'element',mt:'prm',$t:{t:'i',l:['Element$ArrayList',{t:m$1.$_Object}]}},{nm:'replacement',mt:'prm',$t:'Element$ArrayList'}],$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$m','replaceFirst']};};
arrayList$.replaceLast=function($1n1,$1n2){
var arrayList$=this;
var $1n3;
if(m$1.nn$(($1n3=arrayList$.lastOccurrence($1n1)))){
($1n4=$1n2,arrayList$.$1dkeuw$1gh.set($1n3,$1n4), $1n4);
var $1n4;
return true;
}
else{
return false;
}
};arrayList$.replaceLast.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'element',mt:'prm',$t:{t:'i',l:['Element$ArrayList',{t:m$1.$_Object}]}},{nm:'replacement',mt:'prm',$t:'Element$ArrayList'}],$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$m','replaceLast']};};
arrayList$.findAndReplaceFirst=function($1n5,$1n6){
var arrayList$=this;
var $1n7;
if(m$1.nn$(($1n7=arrayList$.firstIndexWhere($1n5)))){
var $1n8=arrayList$.getFromFirst($1n7);
($1n9=$1n6,arrayList$.$1dkeuw$1gh.set($1n7,$1n9), $1n9);
var $1n9;
return $1n8;
}
else{
return null;
}
};arrayList$.findAndReplaceFirst.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$ArrayList']},ps:[{nm:'selecting',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Arguments$Callable:{t:'T',l:[{t:'i',l:['Element$ArrayList',{t:m$1.$_Object}]}]},Return$Callable:{t:m$1.$_Boolean}}},$rt:{t:m$1.$_Boolean},ps:[{nm:'element',mt:'prm',$t:{t:'i',l:['Element$ArrayList',{t:m$1.$_Object}]}}]},{nm:'replacement',mt:'prm',$t:'Element$ArrayList'}],$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$m','findAndReplaceFirst']};};
arrayList$.findAndReplaceLast=function($1na,$1nb){
var arrayList$=this;
var $1nc;
if(m$1.nn$(($1nc=arrayList$.lastIndexWhere($1na)))){
var $1nd=arrayList$.getFromFirst($1nc);
($1ne=$1nb,arrayList$.$1dkeuw$1gh.set($1nc,$1ne), $1ne);
var $1ne;
return $1nd;
}
else{
return null;
}
};arrayList$.findAndReplaceLast.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$ArrayList']},ps:[{nm:'selecting',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Arguments$Callable:{t:'T',l:[{t:'i',l:['Element$ArrayList',{t:m$1.$_Object}]}]},Return$Callable:{t:m$1.$_Boolean}}},$rt:{t:m$1.$_Boolean},ps:[{nm:'element',mt:'prm',$t:{t:'i',l:['Element$ArrayList',{t:m$1.$_Object}]}}]},{nm:'replacement',mt:'prm',$t:'Element$ArrayList'}],$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$m','findAndReplaceLast']};};
arrayList$.replaceWhere=function($1nf,$1ng){
var arrayList$=this;
var $1nh=(0);
var $1ni=(0);
while(($1ni<arrayList$.$1dkeuw$1gj)){
var $1nj;
if(m$1.nn$(($1nj=arrayList$.$1dkeuw$1gh.$_get($1ni)))&&$1nf($1nj)){
($1nk=$1ng,arrayList$.$1dkeuw$1gh.set($1ni,$1nk), $1nk);
var $1nk;
($1nl=$1nh,$1nh=$1nl.successor,$1nl);
var $1nl;
}
($1nm=$1ni,$1ni=$1nm.successor,$1nm);
var $1nm;
}
return $1nh;
};arrayList$.replaceWhere.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'selecting',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Arguments$Callable:{t:'T',l:[{t:'i',l:['Element$ArrayList',{t:m$1.$_Object}]}]},Return$Callable:{t:m$1.$_Boolean}}},$rt:{t:m$1.$_Boolean},ps:[{nm:'element',mt:'prm',$t:{t:'i',l:['Element$ArrayList',{t:m$1.$_Object}]}}]},{nm:'replacement',mt:'prm',$t:'Element$ArrayList'}],$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$m','replaceWhere']};};
arrayList$.infill=function($1nn){
var arrayList$=this;
var $1no=(0);
while(($1no<arrayList$.$1dkeuw$1gj)){
if(!m$1.nn$(arrayList$.$1dkeuw$1gh.$_get($1no))){
($1np=$1nn,arrayList$.$1dkeuw$1gh.set($1no,$1np), $1np);
var $1np;
}
($1nq=$1no,$1no=$1nq.successor,$1nq);
var $1nq;
}
};arrayList$.infill.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'replacement',mt:'prm',$t:'Element$ArrayList'}],$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$m','infill']};};
arrayList$.set=function($1nr,$1ns){
var arrayList$=this;
m$1.asrt$((($1nt=$1nr,$1nt.notSmallerThan((0))&&$1nt.smallerThan(arrayList$.$1dkeuw$1gj))),"index may not be negative or greater than the\nlast index in the list: \'0<=index<length\' at ArrayList.ceylon (489:15-489:31)",'487:8-489:32','ArrayList.ceylon');
($1nu=$1ns,arrayList$.$1dkeuw$1gh.set($1nr,$1nu), $1nu);
var $1nu;
};arrayList$.set.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'index',mt:'prm',$t:{t:m$1.Integer}},{nm:'element',mt:'prm',$t:'Element$ArrayList'}],$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$m','set']};};
arrayList$.span=function($1nv,$1nw){
var arrayList$=this;
var $1nx=spanToMeasure($1nv,$1nw,arrayList$.$1dkeuw$1gj),$1ny=$1nx.$_get(0),$1nz=$1nx.$_get(1),$1o0=$1nx.$_get(2);
var $1o1=($1o2=$1nz,$1o3=arrayList$.$1dkeuw$1gg,$1o4=arrayList$.skip($1ny).take($1nz),ArrayList($1o2,$1o3,$1o4,{Element$ArrayList:arrayList$.$$targs$$.Element$ArrayList}));
var $1o2,$1o3,$1o4;
return ($1o5=($1o0?$1o1.reversed:null),m$1.nn$($1o5)?$1o5:$1o1);
var $1o5;
};arrayList$.span.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.List,a:{Element$List:'Element$ArrayList'}},ps:[{nm:'from',mt:'prm',$t:{t:m$1.Integer}},{nm:'to',mt:'prm',$t:{t:m$1.Integer}}],$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$m','span']};};
arrayList$.deleteSpan=function($1o6,$1o7){
var arrayList$=this;
var $1o8=spanToMeasure($1o6,$1o7,arrayList$.$1dkeuw$1gj),$1o9=$1o8.$_get(0),$1oa=$1o8.$_get(1),$1ob=$1o8.$_get(2);
if((($1o9<arrayList$.$1dkeuw$1gj)&&($1oa>0))){
var $1oc=$1o9.plus($1oa);
arrayList$.$1dkeuw$1gh.copyTo(arrayList$.$1dkeuw$1gh,$1oc,$1o9,arrayList$.$1dkeuw$1gj.minus($1oc));
var $1od=arrayList$.$1dkeuw$1gj.minus($1oa);
while(($1od<arrayList$.$1dkeuw$1gj)){
($1oe=null,arrayList$.$1dkeuw$1gh.set(($1of=$1od,$1od=$1of.successor,$1of),$1oe), $1oe);
var $1oe,$1of;
}
(arrayList$.$1dkeuw$1gj=arrayList$.$1dkeuw$1gj.minus($1oa));
}
};arrayList$.deleteSpan.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'from',mt:'prm',$t:{t:m$1.Integer}},{nm:'to',mt:'prm',$t:{t:m$1.Integer}}],$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$m','deleteSpan']};};
arrayList$.measure=function($1gv,$1gw){var arrayList$=this;
return arrayList$.span(($1og=measureToSpan($1gv,$1gw),$1og.$_get(0)),$1og.$_get(1));
};arrayList$.deleteMeasure=function($1gy,$1gz){var arrayList$=this;
return arrayList$.deleteSpan(($1oh=measureToSpan($1gy,$1gz),$1oh.$_get(0)),$1oh.$_get(1));
};arrayList$.truncate=function($1oi){
var arrayList$=this;
m$1.asrt$((($1oi>=0)),"Assertion failed: \'size >= 0\' at ArrayList.ceylon (529:15-529:25)",'529:8-529:26','ArrayList.ceylon');
if(($1oi<arrayList$.$1dkeuw$1gj)){
var $1oj=$1oi;
while(($1oj<arrayList$.$1dkeuw$1gj)){
($1ok=null,arrayList$.$1dkeuw$1gh.set(($1ol=$1oj,$1oj=$1ol.successor,$1ol),$1ok), $1ok);
var $1ok,$1ol;
}
arrayList$.$1dkeuw$1gj=$1oi;
}
};arrayList$.truncate.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'size',mt:'prm',$t:{t:m$1.Integer}}],$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$m','truncate']};};
arrayList$.spanFrom=function($1h1){var arrayList$=this;
return ($1om=(($1h1>=arrayList$.$1dkeuw$1gj)?ArrayList(undefined,undefined,undefined,{Element$ArrayList:{t:m$1.Nothing}}):null),m$1.nn$($1om)?$1om:arrayList$.span($1h1,arrayList$.$1dkeuw$1gj.minus(1)));
var $1om;
};arrayList$.spanTo=function($1h3){var arrayList$=this;
return ($1on=(($1h3<0)?ArrayList(undefined,undefined,undefined,{Element$ArrayList:{t:m$1.Nothing}}):null),m$1.nn$($1on)?$1on:arrayList$.span(0,$1h3));
var $1on;
};m$1.atr$(arrayList$,'first',function(){
var arrayList$=this;
return ((arrayList$.$1dkeuw$1gj>0)?arrayList$.$1dkeuw$1gh.$_get(0):null);
},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$ArrayList']},$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$at','first']};});
m$1.atr$(arrayList$,'lastIndex',function(){
var arrayList$=this;
return ((arrayList$.$1dkeuw$1gj>=1)?arrayList$.$1dkeuw$1gj.minus(1):null);
},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]},$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$at','lastIndex']};});
arrayList$.equals=function($1h5){var arrayList$=this;
return arrayList$.getT$all()['ceylon.language::List'].$$.prototype.equals.call(arrayList$,$1h5);
};m$1.atr$(arrayList$,'hash',function(){
var arrayList$=this;
return m$1.attrGetter(arrayList$.getT$all()['ceylon.language::List'],'hash').call(this);
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$at','hash']};});
arrayList$.$_push=function($1h6){var arrayList$=this;
return arrayList$.add($1h6);
};arrayList$.$_pop=function(){var arrayList$=this;
return arrayList$.deleteLast();
};m$1.atr$(arrayList$,'top',function(){
var arrayList$=this;
return arrayList$.last;
},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$ArrayList']},$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$at','top']};});
arrayList$.offer=function($1h7){var arrayList$=this;
return arrayList$.add($1h7);
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
arrayList$.sortInPlace=function($1oo){var arrayList$=this;
return arrayList$.$1dkeuw$1gh.sortInPlace(m$1.jsc$2((function($1op,$1oq){return function(){var $1or,$1os;
if(m$1.nn$(($1or=$1op))&&m$1.nn$(($1os=$1oq)))return $1oo($1or,$1os);else return m$1.nn$($1op)&&!m$1.nn$($1oq)?m$1.smaller():(m$1.nn$($1oq)&&!m$1.nn$($1op)?m$1.larger():m$1.equal())}();
}),[{nm:'x',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},arrayList$.$$targs$$.Element$ArrayList]}},{nm:'y',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},arrayList$.$$targs$$.Element$ArrayList]}}],{Arguments$Callable:m$1.mtt$([m$1.mut$([{t:m$1.Null},arrayList$.$$targs$$.Element$ArrayList]),m$1.mut$([{t:m$1.Null},arrayList$.$$targs$$.Element$ArrayList])]),Return$Callable:{t:m$1.Comparison}}));
};
arrayList$.sortInPlace.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'comparing',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Arguments$Callable:{t:'T',l:[{t:'i',l:['Element$ArrayList',{t:m$1.$_Object}]},{t:'i',l:['Element$ArrayList',{t:m$1.$_Object}]}]},Return$Callable:{t:m$1.Comparison}}},$rt:{t:m$1.Comparison},ps:[{nm:'x',mt:'prm',$t:{t:'i',l:['Element$ArrayList',{t:m$1.$_Object}]}},{nm:'y',mt:'prm',$t:{t:'i',l:['Element$ArrayList',{t:m$1.$_Object}]}}]}],$cont:ArrayList,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:ArrayList:$m:sortInPlace')];},d:['ceylon.collection','ArrayList','$m','sortInPlace']};};
arrayList$.each=function($1ot){
var arrayList$=this;
var $1ou;
if(m$1.is$(($1ou=null),arrayList$.$$targs$$.Element$ArrayList)){
var $1ov=(function(){var $1ow=$1ou;arrayList$.$1dkeuw$1gh.take(arrayList$.$1dkeuw$1gj).each(m$1.jsc$2((function($1ox){
$1ot(($1oy=$1ox,m$1.nn$($1oy)?$1oy:$1ow));
var $1oy;
}),[{nm:'e',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},arrayList$.$$targs$$.Element$ArrayList]}}],{Arguments$Callable:m$1.mtt$([m$1.mut$([{t:m$1.Null},arrayList$.$$targs$$.Element$ArrayList])]),Return$Callable:{t:m$1.Anything}}));
}());if($1ov!==undefined){return $1ov;}
}
else{
arrayList$.$1dkeuw$1gh.take(arrayList$.$1dkeuw$1gj).each(m$1.jsc$2((function($1oz){
var $1p0;
m$1.asrt$((m$1.nn$(($1p0=$1oz))),"Assertion failed: \'exists e\' at ArrayList.ceylon (602:23-602:32)",'602:16-602:33','ArrayList.ceylon');
$1ot($1p0);
}),[{nm:'e',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},arrayList$.$$targs$$.Element$ArrayList]}}],{Arguments$Callable:m$1.mtt$([m$1.mut$([{t:m$1.Null},arrayList$.$$targs$$.Element$ArrayList])]),Return$Callable:{t:m$1.Anything}}));
}
};arrayList$.each.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'step',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Arguments$Callable:{t:'T',l:['Element$ArrayList']},Return$Callable:{t:m$1.Anything}}},$rt:{t:m$1.Anything},ps:[{nm:'element',mt:'prm',$t:'Element$ArrayList'}]}],$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$m','each']};};
arrayList$.count=function($1p1){
var arrayList$=this;
var $1p2;
if(m$1.is$(($1p2=null),arrayList$.$$targs$$.Element$ArrayList)){
var $1p3=(function(){var $1p4=$1p2;return arrayList$.$1dkeuw$1gh.take(arrayList$.$1dkeuw$1gj).count(m$1.jsc$2((function($1p5){return $1p1(($1p6=$1p5,m$1.nn$($1p6)?$1p6:$1p4));
var $1p6;
}),[{nm:'e',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},arrayList$.$$targs$$.Element$ArrayList]}}],{Arguments$Callable:m$1.mtt$([m$1.mut$([{t:m$1.Null},arrayList$.$$targs$$.Element$ArrayList])]),Return$Callable:{t:m$1.$_Boolean}}));
}());if($1p3!==undefined){return $1p3;}
}
else{
return arrayList$.$1dkeuw$1gh.take(arrayList$.$1dkeuw$1gj).count(m$1.jsc$2((function($1p7){
var $1p8;
m$1.asrt$((m$1.nn$(($1p8=$1p7))),"Assertion failed: \'exists e\' at ArrayList.ceylon (617:23-617:32)",'617:16-617:33','ArrayList.ceylon');
return $1p1($1p8);
}),[{nm:'e',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},arrayList$.$$targs$$.Element$ArrayList]}}],{Arguments$Callable:m$1.mtt$([m$1.mut$([{t:m$1.Null},arrayList$.$$targs$$.Element$ArrayList])]),Return$Callable:{t:m$1.$_Boolean}}));
}
};arrayList$.count.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'selecting',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Arguments$Callable:{t:'T',l:['Element$ArrayList']},Return$Callable:{t:m$1.$_Boolean}}},$rt:{t:m$1.$_Boolean},ps:[{nm:'element',mt:'prm',$t:'Element$ArrayList'}]}],$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$m','count']};};
arrayList$.$_every=function($1p9){
var arrayList$=this;
var $1pa;
if(m$1.is$(($1pa=null),arrayList$.$$targs$$.Element$ArrayList)){
var $1pb=(function(){var $1pc=$1pa;return arrayList$.$1dkeuw$1gh.take(arrayList$.$1dkeuw$1gj).$_every(m$1.jsc$2((function($1pd){return $1p9(($1pe=$1pd,m$1.nn$($1pe)?$1pe:$1pc));
var $1pe;
}),[{nm:'e',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},arrayList$.$$targs$$.Element$ArrayList]}}],{Arguments$Callable:m$1.mtt$([m$1.mut$([{t:m$1.Null},arrayList$.$$targs$$.Element$ArrayList])]),Return$Callable:{t:m$1.$_Boolean}}));
}());if($1pb!==undefined){return $1pb;}
}
else{
return arrayList$.$1dkeuw$1gh.take(arrayList$.$1dkeuw$1gj).$_every(m$1.jsc$2((function($1pf){
var $1pg;
m$1.asrt$((m$1.nn$(($1pg=$1pf))),"Assertion failed: \'exists e\' at ArrayList.ceylon (632:23-632:32)",'632:16-632:33','ArrayList.ceylon');
return $1p9($1pg);
}),[{nm:'e',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},arrayList$.$$targs$$.Element$ArrayList]}}],{Arguments$Callable:m$1.mtt$([m$1.mut$([{t:m$1.Null},arrayList$.$$targs$$.Element$ArrayList])]),Return$Callable:{t:m$1.$_Boolean}}));
}
};arrayList$.$_every.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'selecting',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Arguments$Callable:{t:'T',l:['Element$ArrayList']},Return$Callable:{t:m$1.$_Boolean}}},$rt:{t:m$1.$_Boolean},ps:[{nm:'element',mt:'prm',$t:'Element$ArrayList'}]}],$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$m','every']};};
arrayList$.any=function($1ph){
var arrayList$=this;
var $1pi;
if(m$1.is$(($1pi=null),arrayList$.$$targs$$.Element$ArrayList)){
var $1pj=(function(){var $1pk=$1pi;return arrayList$.$1dkeuw$1gh.take(arrayList$.$1dkeuw$1gj).any(m$1.jsc$2((function($1pl){return $1ph(($1pm=$1pl,m$1.nn$($1pm)?$1pm:$1pk));
var $1pm;
}),[{nm:'e',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},arrayList$.$$targs$$.Element$ArrayList]}}],{Arguments$Callable:m$1.mtt$([m$1.mut$([{t:m$1.Null},arrayList$.$$targs$$.Element$ArrayList])]),Return$Callable:{t:m$1.$_Boolean}}));
}());if($1pj!==undefined){return $1pj;}
}
else{
return arrayList$.$1dkeuw$1gh.take(arrayList$.$1dkeuw$1gj).any(m$1.jsc$2((function($1pn){
var $1po;
m$1.asrt$((m$1.nn$(($1po=$1pn))),"Assertion failed: \'exists e\' at ArrayList.ceylon (647:23-647:32)",'647:16-647:33','ArrayList.ceylon');
return $1ph($1po);
}),[{nm:'e',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},arrayList$.$$targs$$.Element$ArrayList]}}],{Arguments$Callable:m$1.mtt$([m$1.mut$([{t:m$1.Null},arrayList$.$$targs$$.Element$ArrayList])]),Return$Callable:{t:m$1.$_Boolean}}));
}
};arrayList$.any.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'selecting',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Arguments$Callable:{t:'T',l:['Element$ArrayList']},Return$Callable:{t:m$1.$_Boolean}}},$rt:{t:m$1.$_Boolean},ps:[{nm:'element',mt:'prm',$t:'Element$ArrayList'}]}],$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$m','any']};};
arrayList$.find=function($1pp){var arrayList$=this;
return arrayList$.$1dkeuw$1gh.find($1pp);
};
arrayList$.find.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$ArrayList']},ps:[{nm:'selecting',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Arguments$Callable:{t:'T',l:[{t:'i',l:['Element$ArrayList',{t:m$1.$_Object}]}]},Return$Callable:{t:m$1.$_Boolean}}},$rt:{t:m$1.$_Boolean},ps:[{nm:'element',mt:'prm',$t:{t:'i',l:['Element$ArrayList',{t:m$1.$_Object}]}}]}],$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$m','find']};};
arrayList$.findLast=function($1pq){var arrayList$=this;
return arrayList$.$1dkeuw$1gh.findLast($1pq);
};
arrayList$.findLast.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$ArrayList']},ps:[{nm:'selecting',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Arguments$Callable:{t:'T',l:[{t:'i',l:['Element$ArrayList',{t:m$1.$_Object}]}]},Return$Callable:{t:m$1.$_Boolean}}},$rt:{t:m$1.$_Boolean},ps:[{nm:'element',mt:'prm',$t:{t:'i',l:['Element$ArrayList',{t:m$1.$_Object}]}}]}],$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$m','findLast']};};
arrayList$.$_reduce=function($1pr,$g1hi5x$){
var arrayList$=this;
var $1ps;
if(m$1.is$(($1ps=null),arrayList$.$$targs$$.Element$ArrayList)){
var $1pt=(function(){var $1pu=$1ps;return arrayList$.$1dkeuw$1gh.take(arrayList$.$1dkeuw$1gj).$_reduce(m$1.jsc$2((function($1pv,$1pw){return $1pr(($1px=$1pv,m$1.nn$($1px)?$1px:$1pu),($1py=$1pw,m$1.nn$($1py)?$1py:$1pu));
var $1px,$1py;
}),[{nm:'partial',mt:'prm',$t:{t:'u',l:[$g1hi5x$.Result$reduce,{t:m$1.Null},arrayList$.$$targs$$.Element$ArrayList]}},{nm:'element',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},arrayList$.$$targs$$.Element$ArrayList]}}],{Arguments$Callable:{t:m$1.Tuple,a:{Element$Tuple:m$1.mut$([$g1hi5x$.Result$reduce,{t:m$1.Null},arrayList$.$$targs$$.Element$ArrayList]),First$Tuple:m$1.mut$([$g1hi5x$.Result$reduce,{t:m$1.Null},arrayList$.$$targs$$.Element$ArrayList]),Rest$Tuple:m$1.mtt$([m$1.mut$([{t:m$1.Null},arrayList$.$$targs$$.Element$ArrayList])])}},Return$Callable:$g1hi5x$.Result$reduce/*ORALE!Result inv pero Return var*/}),{Result$reduce:$g1hi5x$.Result$reduce});
}());if($1pt!==undefined){return $1pt;}
}
else{
return arrayList$.$1dkeuw$1gh.take(arrayList$.$1dkeuw$1gj).$_reduce(m$1.jsc$2((function($1pz,$1q0){
var $1q1,$1q2;
m$1.asrt$((m$1.nn$(($1q1=$1pz))&&m$1.nn$(($1q2=$1q0))),"Assertion failed: \'exists partial, exists element\' at ArrayList.ceylon (674:23-674:54)",'674:16-674:55','ArrayList.ceylon');
return $1pr($1q1,$1q2);
}),[{nm:'partial',mt:'prm',$t:{t:'u',l:[$g1hi5x$.Result$reduce,{t:m$1.Null},arrayList$.$$targs$$.Element$ArrayList]}},{nm:'element',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},arrayList$.$$targs$$.Element$ArrayList]}}],{Arguments$Callable:{t:m$1.Tuple,a:{Element$Tuple:m$1.mut$([$g1hi5x$.Result$reduce,{t:m$1.Null},arrayList$.$$targs$$.Element$ArrayList]),First$Tuple:m$1.mut$([$g1hi5x$.Result$reduce,{t:m$1.Null},arrayList$.$$targs$$.Element$ArrayList]),Rest$Tuple:m$1.mtt$([m$1.mut$([{t:m$1.Null},arrayList$.$$targs$$.Element$ArrayList])])}},Return$Callable:$g1hi5x$.Result$reduce/*ORALE!Result inv pero Return var*/}),{Result$reduce:$g1hi5x$.Result$reduce});
}
};arrayList$.$_reduce.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:['Result$reduce','Element$ArrayList',{t:m$1.Null}]},ps:[{nm:'accumulating',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Arguments$Callable:{t:'T',l:[{t:'u',l:['Result$reduce','Element$ArrayList']},'Element$ArrayList']},Return$Callable:'Result$reduce'}},$rt:'Result$reduce',ps:[{nm:'partial',mt:'prm',$t:{t:'u',l:['Result$reduce','Element$ArrayList']}},{nm:'element',mt:'prm',$t:'Element$ArrayList'}]}],$cont:ArrayList,tp:{Result$reduce:{}},pa:3,d:['ceylon.collection','ArrayList','$m','reduce']};};
arrayList$.occursAt=function($1h8,$1h9){var arrayList$=this;
return (($1h8<arrayList$.$1dkeuw$1gj)?arrayList$.$1dkeuw$1gh.occursAt($1h8,$1h9):false);
};arrayList$.firstOccurrence=function($1ha,$1hb,$1hc){var arrayList$=this;
if($1hb===undefined){$1hb=arrayList$.firstOccurrence$defs$from($1ha,$1hb,$1hc);}
if($1hc===undefined){$1hc=arrayList$.firstOccurrence$defs$length($1ha,$1hb,$1hc);}
return function(){var $1hd;
if(m$1.nn$(($1hd=($1q3=$1ha,$1q4=$1hb,$1q5=smallest($1hb.plus($1hc),arrayList$.size).minus($1hb),($1q6=arrayList$.$1dkeuw$1gh,m$1.jsc$3($1q6,$1q6.firstOccurrence))($1q3,$1q4,$1q5)))))return $1hd;else return null}();
var $1q3,$1q4,$1q5,$1q6;
};arrayList$.lastOccurrence=function($1hi,$1hj,$1hk){var arrayList$=this;
if($1hj===undefined){$1hj=arrayList$.lastOccurrence$defs$from($1hi,$1hj,$1hk);}
if($1hk===undefined){$1hk=arrayList$.lastOccurrence$defs$length($1hi,$1hj,$1hk);}
return function(){var $1hl;
if(m$1.nn$(($1hl=($1q7=$1hi,$1q8=largest($1hj,arrayList$.$1dkeuw$1gh.size.minus(arrayList$.size)),$1q9=$1hk,($1qa=arrayList$.$1dkeuw$1gh,m$1.jsc$3($1qa,$1qa.lastOccurrence))($1q7,$1q8,$1q9)))))return $1hl;else return null}();
var $1q7,$1q8,$1q9,$1qa;
};arrayList$.occurs=function($1hq,$1hr,$1hs){var arrayList$=this;
if($1hr===undefined){$1hr=arrayList$.occurs$defs$from($1hq,$1hr,$1hs);}
if($1hs===undefined){$1hs=arrayList$.occurs$defs$length($1hq,$1hr,$1hs);}
return ($1qb=$1hq,$1qc=$1hr,$1qd=smallest($1hr.plus($1hs),arrayList$.size).minus($1hr),($1qe=arrayList$.$1dkeuw$1gh,m$1.jsc$3($1qe,$1qe.occurs))($1qb,$1qc,$1qd));
var $1qb,$1qc,$1qd,$1qe;
};arrayList$.occurrences=function($1hx,$1hy,$1hz){var arrayList$=this;
if($1hy===undefined){$1hy=arrayList$.occurrences$defs$from($1hx,$1hy,$1hz);}
if($1hz===undefined){$1hz=arrayList$.occurrences$defs$length($1hx,$1hy,$1hz);}
return ($1qf=$1hx,$1qg=$1hy,$1qh=smallest($1hy.plus($1hz),arrayList$.size).minus($1hy),($1qi=arrayList$.$1dkeuw$1gh,m$1.jsc$3($1qi,$1qi.occurrences))($1qf,$1qg,$1qh));
var $1qf,$1qg,$1qh,$1qi;
};arrayList$.copyTo$defs$sourcePosition=function($1qj,$1qk,$1ql,$1qm){return 0;};
arrayList$.copyTo$defs$destinationPosition=function($1qj,$1qk,$1ql,$1qm){return 0;};
arrayList$.copyTo$defs$length=function($1qj,$1qk,$1ql,$1qm){var arrayList$=this;
return smallest(arrayList$.size.minus($1qk),$1qj.size.minus($1ql));};
arrayList$.copyTo=function($1qj,$1qk,$1ql,$1qm){
var arrayList$=this;
if($1qk===undefined){$1qk=(0);}
if($1ql===undefined){$1ql=(0);}
if($1qm===undefined){$1qm=smallest(arrayList$.size.minus($1qk),$1qj.size.minus($1ql));}
m$1.asrt$((($1qn=$1qk,$1qn.notSmallerThan((0))&&$1qn.notLargerThan(arrayList$.size.minus($1qm)))),"illegal starting position in source list: \'0<=sourcePosition<=size-length\' at ArrayList.ceylon (759:15-759:46)",'758:8-759:47','ArrayList.ceylon');
m$1.asrt$((($1qo=$1ql,$1qo.notSmallerThan((0))&&$1qo.notLargerThan($1qj.size.minus($1qm)))),"illegal starting position in destination list: \'0<=destinationPosition<=destination.size-length\' at ArrayList.ceylon (761:15-761:63)",'760:8-761:64','ArrayList.ceylon');
($1qp=$1qm,$1qq=$1qk,$1qr=$1ql,$1qs=function($1qt){if(m$1.is$($1qt,{t:m$1.$_Array,a:{Element$Array:m$1.mut$([{t:m$1.Null},arrayList$.$$targs$$.Element$ArrayList])}}))return $1qt;else if(m$1.is$($1qt,{t:ArrayList,a:{Element$ArrayList:arrayList$.$$targs$$.Element$ArrayList}}))return $1qt.$1dkeuw$1gh;else throw m$1.Exception('Supposedly exhaustive switch was not exhaustive')}($1qj),($1qu=arrayList$.$1dkeuw$1gh,m$1.jsc$3($1qu,$1qu.copyTo))($1qs,$1qq,$1qr,$1qp));
var $1qp,$1qq,$1qr,$1qs,$1qu;
};arrayList$.copyTo.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'destination',mt:'prm',$t:{t:'u',l:[{t:ArrayList,a:{Element$ArrayList:'Element$ArrayList'}},{t:m$1.$_Array,a:{Element$Array:{t:'u',l:[{t:m$1.Null},'Element$ArrayList']}}}]}},{nm:'sourcePosition',mt:'prm',def:1,$t:{t:m$1.Integer}},{nm:'destinationPosition',mt:'prm',def:1,$t:{t:m$1.Integer}},{nm:'length',mt:'prm',def:1,$t:{t:m$1.Integer}}],$cont:ArrayList,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:ArrayList:$m:copyTo'),m$1.$_throws(m$1.openClass$jsint(m$1.fmp$('ceylon.language','1.2.3','$'),m$1.AssertionError),"if the arguments do not identify meaningful ranges \nwithin the two lists:\n\n- if the given [[sourcePosition]] or \n  [[destinationPosition]] is negative, \n- if `size < sourcePosition+length`, or \n- if `destination.size < destinationPosition+length`.")];},d:['ceylon.collection','ArrayList','$m','copyTo']};};
arrayList$.shrink=function(){
var arrayList$=this;
if((arrayList$.$1dkeuw$1gh.size>arrayList$.$1dkeuw$1gj)){
var $1qv=arrayList$.$1dkeuw$1gl(arrayList$.$1dkeuw$1gj);
arrayList$.$1dkeuw$1gh.copyTo($1qv,0,0,arrayList$.$1dkeuw$1gj);
arrayList$.$1dkeuw$1gh=$1qv;
}
};arrayList$.shrink.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[],$cont:ArrayList,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:ArrayList:$m:shrink')];},d:['ceylon.collection','ArrayList','$m','shrink']};};
})(ArrayList.$$.prototype);
}
return ArrayList;
}
ex$.$init$ArrayList=$init$ArrayList;
$init$ArrayList();
ArrayList.inst$$=function($1qw){
var arrayList$=new ArrayList.$$;
m$1.set_type_args(arrayList$,{Element$ArrayList:$1qw.$$targs$$.Type$Class.a.Element$ArrayList});
m$1.set_type_args(arrayList$,{Element$MutableList:arrayList$.$$targs$$.Element$ArrayList,Element$List:arrayList$.$$targs$$.Element$ArrayList,Element$Collection:arrayList$.$$targs$$.Element$ArrayList,Element$Iterable:arrayList$.$$targs$$.Element$ArrayList,Absent$Iterable:{t:m$1.Null},Element$Category:{t:m$1.$_Object},Item$Correspondence:arrayList$.$$targs$$.Element$ArrayList,Key$Correspondence:{t:m$1.Integer},Subrange$Ranged:{t:m$1.List,a:{Element$List:arrayList$.$$targs$$.Element$ArrayList/*ORALE!Element inv pero Element var*/}},Index$Ranged:{t:m$1.Integer},Element$Ranged:arrayList$.$$targs$$.Element$ArrayList,Element$ListMutator:arrayList$.$$targs$$.Element$ArrayList,Element$IndexedCorrespondenceMutator:arrayList$.$$targs$$.Element$ArrayList,Item$CorrespondenceMutator:arrayList$.$$targs$$.Element$ArrayList,Element$SearchableList:arrayList$.$$targs$$.Element$ArrayList,Element$Stack:arrayList$.$$targs$$.Element$ArrayList,Element$Queue:arrayList$.$$targs$$.Element$ArrayList});
return arrayList$;
};
ArrayList.ser$get$=function(ref,o){var n=ref.attribute.qualifiedName;if(n==='ceylon.collection::ArrayList.initialCapacity')return o.$1dkeuw$1gf_;
else if(n==='ceylon.collection::ArrayList.growthFactor')return o.$1dkeuw$1gg_;
else if(n==='ceylon.collection::ArrayList.array')return o.$1dkeuw$1gh_;
else if(n==='ceylon.collection::ArrayList.length')return o.$1dkeuw$1gj_;
else throw new TypeError('unknown attribute');
};
ArrayList.ser$set$=function(ref,o,i){if(!m$1.is$(ref,{t:m$1.Member$serialization}))throw m$1.AssertionError('unexpected reachable reference');var n=ref.attribute.qualifiedName;
if(n==='ceylon.collection::ArrayList.initialCapacity')o.$1dkeuw$1gf_=i;
else if(n==='ceylon.collection::ArrayList.growthFactor')o.$1dkeuw$1gg_=i;
else if(n==='ceylon.collection::ArrayList.array')o.$1dkeuw$1gh_=i;
else if(n==='ceylon.collection::ArrayList.length')o.$1dkeuw$1gj_=i;
else throw new TypeError('unknown attribute');
};
ArrayList.ser$refs$=function(o){return [m$1.MemberImpl$impl(m$1.OpenValue$jsint(m$1.lmp$(ex$,'ceylon.collection'),o.$prop$get$1dkeuw$1gf)),m$1.MemberImpl$impl(m$1.OpenValue$jsint(m$1.lmp$(ex$,'ceylon.collection'),o.$prop$get$1dkeuw$1gg)),m$1.MemberImpl$impl(m$1.OpenValue$jsint(m$1.lmp$(ex$,'ceylon.collection'),o.$prop$get$1dkeuw$1gh)),m$1.MemberImpl$impl(m$1.OpenValue$jsint(m$1.lmp$(ex$,'ceylon.collection'),o.$prop$get$1dkeuw$1gj))];
};
function PriorityQueue($1dkeuw$1qx,$1dkeuw$1qy,$1dkeuw$1qz,$1dkeuw$1r0,$$targs$$,priorityQueue$){
$init$PriorityQueue();
if(priorityQueue$===undefined)priorityQueue$=new PriorityQueue.$$;
m$1.set_type_args(priorityQueue$,$$targs$$);
priorityQueue$.$1dkeuw$1qx_=$1dkeuw$1qx;
if($1dkeuw$1qy===undefined){$1dkeuw$1qy=$init$PriorityQueue().$defs$initialCapacity(priorityQueue$,$1dkeuw$1qx,$1dkeuw$1qz,$1dkeuw$1r0);}
priorityQueue$.$1dkeuw$1qy_=$1dkeuw$1qy;
if($1dkeuw$1qz===undefined){$1dkeuw$1qz=$init$PriorityQueue().$defs$growthFactor(priorityQueue$,$1dkeuw$1qx,$1dkeuw$1qy,$1dkeuw$1r0);}
priorityQueue$.$1dkeuw$1qz_=$1dkeuw$1qz;
if($1dkeuw$1r0===undefined){$1dkeuw$1r0=$init$PriorityQueue().$defs$elements(priorityQueue$,$1dkeuw$1qx,$1dkeuw$1qy,$1dkeuw$1qz);}
priorityQueue$.$1dkeuw$1r0_=$1dkeuw$1r0;
Queue({Element$Queue:$$targs$$.Element$PriorityQueue},priorityQueue$);
m$1.Collection({Element$Collection:$$targs$$.Element$PriorityQueue/*ORALE!Element inv pero Element var*/},priorityQueue$);
priorityQueue$.$1dkeuw$1qx=$1dkeuw$1qx;
if(priorityQueue$.$1dkeuw$1r1(priorityQueue$.$1dkeuw$1r0)){
priorityQueue$.$1dkeuw$1r2=priorityQueue$.$1dkeuw$1r0.size;
priorityQueue$.$1dkeuw$1r3=priorityQueue$.$1dkeuw$1r4(($1r5=((priorityQueue$.$1dkeuw$1r2>$1dkeuw$1qy)?priorityQueue$.$1dkeuw$1r2:null),m$1.nn$($1r5)?$1r5:$1dkeuw$1qy));
var $1r5;
}
else{
priorityQueue$.$1dkeuw$1r2=(0);
priorityQueue$.$1dkeuw$1r3=priorityQueue$.$1dkeuw$1r4($1dkeuw$1qy);
}
priorityQueue$.$1dkeuw$1r6();
return priorityQueue$;
}
PriorityQueue.$defs$initialCapacity=function(priorityQueue$,$1dkeuw$1qx,$1dkeuw$1qz,$1dkeuw$1r0){return (0)};PriorityQueue.$defs$growthFactor=function(priorityQueue$,$1dkeuw$1qx,$1dkeuw$1qy,$1dkeuw$1r0){return (1.5)};PriorityQueue.$defs$elements=function(priorityQueue$,$1dkeuw$1qx,$1dkeuw$1qy,$1dkeuw$1qz){return m$1.empty()};PriorityQueue.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'compare',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Arguments$Callable:{t:'T',l:['Element$PriorityQueue','Element$PriorityQueue']},Return$Callable:{t:m$1.Comparison}}},$rt:{t:m$1.Comparison},ps:[{nm:'x',mt:'prm',$t:'Element$PriorityQueue'},{nm:'y',mt:'prm',$t:'Element$PriorityQueue'}],an:function(){return[m$1.doc("A comparator function used to order elements.")];}},{nm:'initialCapacity',mt:'prm',def:1,$t:{t:m$1.Integer},an:function(){return[m$1.doc("The initial size of the backing array.")];}},{nm:'growthFactor',mt:'prm',def:1,$t:{t:m$1.Float},an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:PriorityQueue:$at:growthFactor$k15cw7')];}},{nm:'elements',mt:'prm',def:1,$t:{t:m$1.Iterable,a:{Element$Iterable:'Element$PriorityQueue',Absent$Iterable:{t:m$1.Null}}},an:function(){return[m$1.doc("The initial elements of the queue.")];}}],tp:{Element$PriorityQueue:{sts:[{t:m$1.$_Object}]}},sts:[{t:m$1.Collection,a:{Element$Collection:'Element$PriorityQueue'}},{t:Queue,a:{Element$Queue:'Element$PriorityQueue'}}],pa:2049,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:PriorityQueue'),m$1.by(m$1.$arr$sa$(["Loic Rouchon"],{t:m$1.$_String}))];},d:['ceylon.collection','PriorityQueue']};};
ex$.PriorityQueue=PriorityQueue;
function $init$PriorityQueue(){
if(PriorityQueue.$$===undefined){
m$1.initTypeProto(PriorityQueue,'ceylon.collection::PriorityQueue',m$1.Basic,$init$Queue(),m$1.Collection);
(function(priorityQueue$){
m$1.atr$(priorityQueue$,'$1dkeuw$1qx',function(){return this.$1dkeuw$1qx_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Comparison},ps:[{nm:'x',mt:'prm',$t:'Element$PriorityQueue'},{nm:'y',mt:'prm',$t:'Element$PriorityQueue'}],$cont:PriorityQueue,an:function(){return[m$1.doc("A comparator function used to order elements.")];},d:['ceylon.collection','PriorityQueue','$m','compare$gs4c5s']};});
m$1.atr$(priorityQueue$,'$1dkeuw$1qy',function(){return this.$1dkeuw$1qy_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:PriorityQueue,an:function(){return[m$1.doc("The initial size of the backing array.")];},d:['ceylon.collection','PriorityQueue','$at','initialCapacity$gi6pup']};});
m$1.atr$(priorityQueue$,'$1dkeuw$1qz',function(){return this.$1dkeuw$1qz_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Float},$cont:PriorityQueue,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:PriorityQueue:$at:growthFactor$k15cw7')];},d:['ceylon.collection','PriorityQueue','$at','growthFactor$k15cw7']};});
m$1.atr$(priorityQueue$,'$1dkeuw$1r0',function(){return this.$1dkeuw$1r0_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Iterable,a:{Element$Iterable:'Element$PriorityQueue',Absent$Iterable:{t:m$1.Null}}},$cont:PriorityQueue,an:function(){return[m$1.doc("The initial elements of the queue.")];},d:['ceylon.collection','PriorityQueue','$at','elements$ra338u']};});
priorityQueue$.$1dkeuw$1r4=function($1r7){var priorityQueue$=this;
return m$1.$_Array$c_ofSize($1r7,null,{Element$Array:m$1.mut$([{t:m$1.Null},priorityQueue$.$$targs$$.Element$PriorityQueue])});
};
priorityQueue$.$1dkeuw$1r4.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Array,a:{Element$Array:{t:'u',l:[{t:m$1.Null},'Element$PriorityQueue']}}},ps:[{nm:'capacity',mt:'prm',$t:{t:m$1.Integer}}],$cont:PriorityQueue,d:['ceylon.collection','PriorityQueue','$m','store$iohp2k']};};
priorityQueue$.$1dkeuw$1r1=function($1r8){var priorityQueue$=this;
return m$1.is$($1r8,m$1.mut$([{t:m$1.Collection,a:{Element$Collection:priorityQueue$.$$targs$$.Element$PriorityQueue/*ORALE!Element inv pero Element var*/}},{t:m$1.Sequential,a:{Element$Sequential:priorityQueue$.$$targs$$.Element$PriorityQueue/*ORALE!Element inv pero Element var*/}}]));
};
priorityQueue$.$1dkeuw$1r1.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'elements',mt:'prm',$t:{t:m$1.Iterable,a:{Element$Iterable:'Element$PriorityQueue',Absent$Iterable:{t:m$1.Null}}}}],$cont:PriorityQueue,d:['ceylon.collection','PriorityQueue','$m','haveKnownSize$7k454f']};};
m$1.atr$(priorityQueue$,'$1dkeuw$1r3',function(){return this.$1dkeuw$1r3_;},function($1r9){return this.$1dkeuw$1r3_=$1r9;},function(){return{mod:$CCMM$,$t:{t:m$1.$_Array,a:{Element$Array:{t:'u',l:[{t:m$1.Null},'Element$PriorityQueue']}}},$cont:PriorityQueue,pa:1027,d:['ceylon.collection','PriorityQueue','$at','array$3tqqzg']};});
m$1.atr$(priorityQueue$,'$1dkeuw$1r2',function(){return this.$1dkeuw$1r2_;},function($1ra){return this.$1dkeuw$1r2_=$1ra;},function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:PriorityQueue,pa:1027,d:['ceylon.collection','PriorityQueue','$at','length$qkg55j']};});
priorityQueue$.$1dkeuw$1rb=function($1rc){
var priorityQueue$=this;
var $1rd=priorityQueue$.$1dkeuw$1r2.plus($1rc);
var $1re=m$1.runtime().maxArraySize;
if(($1rd>$1re)){
throw m$1.wrapexc(m$1.OverflowException(),'51:12-51:37','ceylon/collection/PriorityQueue.ceylon');
}
if(($1rd>priorityQueue$.$1dkeuw$1r3.size)){
var $1rf=$1rd.times(priorityQueue$.$1dkeuw$1qz).integer;
var $1rg=($1rh=((($1rf<$1rd)||($1rf>$1re))?$1re:null),m$1.nn$($1rh)?$1rh:$1rf);
var $1rh;
var $1ri=priorityQueue$.$1dkeuw$1r4($1rg);
priorityQueue$.$1dkeuw$1r3.copyTo($1ri);
priorityQueue$.$1dkeuw$1r3=$1ri;
}
};priorityQueue$.$1dkeuw$1rb.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'increment',mt:'prm',$t:{t:m$1.Integer}}],$cont:PriorityQueue,d:['ceylon.collection','PriorityQueue','$m','grow$kgssjy']};};
priorityQueue$.$1dkeuw$1rj=function($1rk){
var priorityQueue$=this;
priorityQueue$.$1dkeuw$1rb(1);
($1rl=$1rk,priorityQueue$.$1dkeuw$1r3.set(priorityQueue$.$1dkeuw$1r2,$1rl), $1rl);
var $1rl;
($1rm=priorityQueue$.$1dkeuw$1r2,priorityQueue$.$1dkeuw$1r2=$1rm.successor,$1rm);
var $1rm;
};priorityQueue$.$1dkeuw$1rj.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'element',mt:'prm',$t:'Element$PriorityQueue'}],$cont:PriorityQueue,d:['ceylon.collection','PriorityQueue','$m','add$lnahnw']};};
priorityQueue$.$1dkeuw$1rn=function($1ro){var priorityQueue$=this;
return $1ro.plus(1).divided(2).minus(1);
};
priorityQueue$.$1dkeuw$1rn.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'index',mt:'prm',$t:{t:m$1.Integer}}],$cont:PriorityQueue,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:PriorityQueue:$m:parent$w5yb7')];},d:['ceylon.collection','PriorityQueue','$m','parent$w5yb7']};};
priorityQueue$.$1dkeuw$1rp=function($1rq){var priorityQueue$=this;
return $1rq.times(2).plus(1);
};
priorityQueue$.$1dkeuw$1rp.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'index',mt:'prm',$t:{t:m$1.Integer}}],$cont:PriorityQueue,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:PriorityQueue:$m:leftChild$bif9ts')];},d:['ceylon.collection','PriorityQueue','$m','leftChild$bif9ts']};};
priorityQueue$.$1dkeuw$1rr=function($1rs){var priorityQueue$=this;
return $1rs.times(2).plus(2);
};
priorityQueue$.$1dkeuw$1rr.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'index',mt:'prm',$t:{t:m$1.Integer}}],$cont:PriorityQueue,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:PriorityQueue:$m:rightChild$rhsywd')];},d:['ceylon.collection','PriorityQueue','$m','rightChild$rhsywd']};};
priorityQueue$.$1dkeuw$1rt=function($1ru){
var priorityQueue$=this;
var $1rv;
m$1.asrt$((m$1.nn$(($1rv=priorityQueue$.$1dkeuw$1r3.$_get($1ru)))),"Assertion failed: \'exists element = array[index]\' at PriorityQueue.ceylon (91:14-91:44)",'91:8-91:45','PriorityQueue.ceylon');
return $1rv;
};priorityQueue$.$1dkeuw$1rt.$crtmm$=function(){return{mod:$CCMM$,$t:'Element$PriorityQueue',ps:[{nm:'index',mt:'prm',$t:{t:m$1.Integer}}],$cont:PriorityQueue,d:['ceylon.collection','PriorityQueue','$m','elt$lqn120']};};
priorityQueue$.$1dkeuw$1rw=function($1rx,$1ry){var priorityQueue$=this;
return priorityQueue$.$1dkeuw$1qx(priorityQueue$.$1dkeuw$1rt($1rx),priorityQueue$.$1dkeuw$1rt($1ry));
};
priorityQueue$.$1dkeuw$1rw.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Comparison},ps:[{nm:'first',mt:'prm',$t:{t:m$1.Integer}},{nm:'second',mt:'prm',$t:{t:m$1.Integer}}],$cont:PriorityQueue,d:['ceylon.collection','PriorityQueue','$m','compareIndexes$ilkd5i']};};
priorityQueue$.$1dkeuw$1rz=function($1s0,$1s1){
var priorityQueue$=this;
var $1s2=priorityQueue$.$1dkeuw$1r3.$_get($1s0);
($1s3=priorityQueue$.$1dkeuw$1r3.$_get($1s1),priorityQueue$.$1dkeuw$1r3.set($1s0,$1s3), $1s3);
var $1s3;
($1s4=$1s2,priorityQueue$.$1dkeuw$1r3.set($1s1,$1s4), $1s4);
var $1s4;
};priorityQueue$.$1dkeuw$1rz.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'first',mt:'prm',$t:{t:m$1.Integer}},{nm:'second',mt:'prm',$t:{t:m$1.Integer}}],$cont:PriorityQueue,d:['ceylon.collection','PriorityQueue','$m','swap$snqivi']};};
priorityQueue$.$1dkeuw$1s5=function($1s6){
var priorityQueue$=this;
if(($1s6==(0))){
return;
}
var $1s7=priorityQueue$.$1dkeuw$1rn($1s6);
if(m$1.$eq$(priorityQueue$.$1dkeuw$1rw($1s6,$1s7),m$1.smaller())){
priorityQueue$.$1dkeuw$1rz($1s6,$1s7);
priorityQueue$.$1dkeuw$1s5($1s7);
}
};priorityQueue$.$1dkeuw$1s5.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'index',mt:'prm',$t:{t:m$1.Integer}}],$cont:PriorityQueue,d:['ceylon.collection','PriorityQueue','$m','bubbleUp$yevw4e']};};
priorityQueue$.$1dkeuw$1s8=function($1s9){
var priorityQueue$=this;
var $1sa=priorityQueue$.$1dkeuw$1rp($1s9);
if(($1sa>=priorityQueue$.$1dkeuw$1r2)){
return null;
}
var $1sb=priorityQueue$.$1dkeuw$1rr($1s9);
if(($1sb>=priorityQueue$.$1dkeuw$1r2)){
return $1sa;
}
var $1sc=priorityQueue$.$1dkeuw$1rw($1sa,$1sb);
if(m$1.$eq$($1sc,m$1.smaller())){
return $1sa;
}
return $1sb;
};priorityQueue$.$1dkeuw$1s8.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]},ps:[{nm:'index',mt:'prm',$t:{t:m$1.Integer}}],$cont:PriorityQueue,d:['ceylon.collection','PriorityQueue','$m','minChildrenIndex$1y297w']};};
priorityQueue$.$1dkeuw$1sd=function($1se){
var priorityQueue$=this;
var $1sf;
if(m$1.nn$(($1sf=priorityQueue$.$1dkeuw$1s8($1se)))&&m$1.$eq$(priorityQueue$.$1dkeuw$1rw($1sf,$1se),m$1.smaller())){
priorityQueue$.$1dkeuw$1rz($1se,$1sf);
priorityQueue$.$1dkeuw$1sd($1sf);
}
};priorityQueue$.$1dkeuw$1sd.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'index',mt:'prm',$t:{t:m$1.Integer}}],$cont:PriorityQueue,d:['ceylon.collection','PriorityQueue','$m','bubbleDown$daf9xt']};};
priorityQueue$.$1dkeuw$1r6=function(){
var priorityQueue$=this;
if(priorityQueue$.$1dkeuw$1r1(priorityQueue$.$1dkeuw$1r0)){
var $1sg=(0);
var $1si;for(var $1sh=priorityQueue$.$1dkeuw$1r0.iterator();($1si=$1sh.next())!==m$1.finished();){
($1sj=$1si,priorityQueue$.$1dkeuw$1r3.set(($1sk=$1sg,$1sg=$1sk.successor,$1sk),$1sj), $1sj);
var $1sj,$1sk;
}
}
else{
var $1sm;for(var $1sl=priorityQueue$.$1dkeuw$1r0.iterator();($1sm=$1sl.next())!==m$1.finished();){
priorityQueue$.$1dkeuw$1rj($1sm);
}
}
if((priorityQueue$.$1dkeuw$1r2>0)){
var $1so=priorityQueue$.$1dkeuw$1rn(priorityQueue$.$1dkeuw$1r2.minus(1)),$1sn=(0),$1sp=$1so.compare($1sn),$1sq=$1sp===m$1.smaller()?'successor':'predecessor';for(var $1sr=m$1.eorl$($1sp);$1sr($1sn,$1so);$1so=$1so[$1sq]){
priorityQueue$.$1dkeuw$1sd($1so);
}
}
};priorityQueue$.$1dkeuw$1r6.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[],$cont:PriorityQueue,d:['ceylon.collection','PriorityQueue','$m','addInitialElements$lh42w3']};};
m$1.atr$(priorityQueue$,'size',function(){
var priorityQueue$=this;
return priorityQueue$.$1dkeuw$1r2;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:PriorityQueue,pa:3,d:['ceylon.collection','PriorityQueue','$at','size']};});
m$1.atr$(priorityQueue$,'front',function(){
var priorityQueue$=this;
return priorityQueue$.$1dkeuw$1r3.$_get(0);
},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$PriorityQueue']},$cont:PriorityQueue,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:PriorityQueue:$at:front')];},d:['ceylon.collection','PriorityQueue','$at','front']};});
m$1.atr$(priorityQueue$,'last',function(){
var priorityQueue$=this;
return priorityQueue$.$1dkeuw$1r3.$_get(priorityQueue$.$1dkeuw$1r2.minus(1));
},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$PriorityQueue']},$cont:PriorityQueue,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:PriorityQueue:$at:last')];},d:['ceylon.collection','PriorityQueue','$at','last']};});
m$1.atr$(priorityQueue$,'back',function(){
var priorityQueue$=this;
return priorityQueue$.last;
},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$PriorityQueue']},$cont:PriorityQueue,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:PriorityQueue:$at:back')];},d:['ceylon.collection','PriorityQueue','$at','back']};});
priorityQueue$.offer=function($1sv){
var priorityQueue$=this;
priorityQueue$.$1dkeuw$1rj($1sv);
priorityQueue$.$1dkeuw$1s5(priorityQueue$.$1dkeuw$1r2.minus(1));
};priorityQueue$.offer.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'element',mt:'prm',$t:'Element$PriorityQueue'}],$cont:PriorityQueue,pa:3,an:function(){return[m$1.doc("Add a new element to the queue.")];},d:['ceylon.collection','PriorityQueue','$m','offer']};};
priorityQueue$.accept=function(){
var priorityQueue$=this;
var $1sw=priorityQueue$.front;
if((priorityQueue$.$1dkeuw$1r2>0)){
($1sx=priorityQueue$.last,priorityQueue$.$1dkeuw$1r3.set((0),$1sx), $1sx);
var $1sx;
($1sy=null,priorityQueue$.$1dkeuw$1r3.set((priorityQueue$.$1dkeuw$1r2=priorityQueue$.$1dkeuw$1r2.predecessor),$1sy), $1sy);
var $1sy;
priorityQueue$.$1dkeuw$1sd(0);
}
return $1sw;
};priorityQueue$.accept.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$PriorityQueue']},ps:[],$cont:PriorityQueue,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:PriorityQueue:$m:accept')];},d:['ceylon.collection','PriorityQueue','$m','accept']};};
priorityQueue$.iterator=function(){
var priorityQueue$=this;
if((priorityQueue$.$1dkeuw$1r2>0)){
var $1sz=(function(){function $1t0($$targs$$){
var $1t0$=new $1t0.$$;$1t0$.outer$=priorityQueue$;
$1t0$.$$targs$$=$$targs$$;
m$1.Iterator({Element$Iterator:priorityQueue$.$$targs$$.Element$PriorityQueue/*ORALE!Element inv pero Element var*/},$1t0$);
$1t0$.$1dkeuw$1t2_=(0);
$1t0$.$prop$get$1dkeuw$1t2={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$1t0,pa:1024,d:['ceylon.collection','PriorityQueue','$m','iterator','$o','it$vzhf3q','$at','index$epjk09']};}};
$1t0$.$prop$get$1dkeuw$1t2.get=function(){return $1dkeuw$1t2};
return $1t0$;
};$1t0.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},$cont:priorityQueue$.iterator,sts:[{t:m$1.Iterator,a:{Element$Iterator:'Element$PriorityQueue'}}],d:['ceylon.collection','PriorityQueue','$m','iterator','$o','it$vzhf3q']};};
function $init$$1t0(){
if($1t0.$$===undefined){
m$1.initTypeProto($1t0,'ceylon.collection::PriorityQueue.iterator.it',m$1.Basic,m$1.Iterator);
(function($1t0$){
m$1.atr$($1t0$,'$1dkeuw$1t2',function(){return this.$1dkeuw$1t2_;},function($1t3){return this.$1dkeuw$1t2_=$1t3;},function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$1t0,pa:1024,d:['ceylon.collection','PriorityQueue','$m','iterator','$o','it$vzhf3q','$at','index$epjk09']};});
$1t0$.next=function(){
var $1t0$=this;
var $1t4=priorityQueue$.$1dkeuw$1r3.$_get($1t0$.$1dkeuw$1t2);
var $1t5;
if(m$1.nn$(($1t5=$1t4))){
($1t6=$1t0$.$1dkeuw$1t2,$1t0$.$1dkeuw$1t2=$1t6.successor,$1t6);
var $1t6;
return $1t5;
}
function $1t7(){return $1t4;}
m$1.asrt$((($1t0$.$1dkeuw$1t2==priorityQueue$.$1dkeuw$1r2)),"Assertion failed: \'index == length\' at PriorityQueue.ceylon (208:26-208:42)",'208:20-208:43','PriorityQueue.ceylon');
return m$1.finished();
};$1t0$.next.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:['Element$PriorityQueue',{t:m$1.Finished}]},ps:[],$cont:$1t0,pa:3,d:['ceylon.collection','PriorityQueue','$m','iterator','$o','it$vzhf3q','$m','next']};};
})($1t0.$$.prototype);
}
return $1t0;
}
priorityQueue$.$init$$1t0=$init$$1t0;
$init$$1t0();
var $1t8;
function $1t1(){
if($1t8===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'it\' before it was set"),'200:12-212:12','PriorityQueue.ceylon');
if($1t8===undefined){$1t8=m$1.INIT$;$1t8=$init$$1t0()({Element$Iterator:priorityQueue$.$$targs$$.Element$PriorityQueue/*ORALE!Element inv pero Element var*/});$1t8.$crtmm$=$1t1.$crtmm$;}
return $1t8;
}
$1t1.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$init$$1t0()},$cont:priorityQueue$.iterator,d:['ceylon.collection','PriorityQueue','$m','iterator','$o','it$vzhf3p']};};
$prop$get$1t0=$1t1;
$1t1();
return $1t1();
}());if($1sz!==undefined){return $1sz;}
}
else{
return m$1.emptyIterator();
}
};priorityQueue$.iterator.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Iterator,a:{Element$Iterator:'Element$PriorityQueue'}},ps:[],$cont:PriorityQueue,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:PriorityQueue:$m:iterator')];},d:['ceylon.collection','PriorityQueue','$m','iterator']};};
priorityQueue$.clone=function(){
var priorityQueue$=this;
var $1t9=($1ta=m$1.jsc$2(priorityQueue$.$1dkeuw$1qx,[{nm:'x',mt:'prm',$t:priorityQueue$.$$targs$$.Element$PriorityQueue},{nm:'y',mt:'prm',$t:priorityQueue$.$$targs$$.Element$PriorityQueue}],{Arguments$Callable:m$1.mtt$([priorityQueue$.$$targs$$.Element$PriorityQueue,priorityQueue$.$$targs$$.Element$PriorityQueue]),Return$Callable:{t:m$1.Comparison}}),$1tb=priorityQueue$.$1dkeuw$1r2,$1tc=priorityQueue$.$1dkeuw$1qz,PriorityQueue($1ta,$1tb,$1tc,undefined,{Element$PriorityQueue:priorityQueue$.$$targs$$.Element$PriorityQueue}));
var $1ta,$1tb,$1tc;
($1t9.$1dkeuw$1r2=priorityQueue$.$1dkeuw$1r2);
($1t9.$1dkeuw$1r3=priorityQueue$.$1dkeuw$1r3.clone());
return $1t9;
};priorityQueue$.clone.$crtmm$=function(){return{mod:$CCMM$,$t:{t:PriorityQueue,a:{Element$PriorityQueue:'Element$PriorityQueue'}},ps:[],$cont:PriorityQueue,pa:3,d:['ceylon.collection','PriorityQueue','$m','clone']};};
})(PriorityQueue.$$.prototype);
}
return PriorityQueue;
}
ex$.$init$PriorityQueue=$init$PriorityQueue;
$init$PriorityQueue();
PriorityQueue.inst$$=function($1td){
var priorityQueue$=new PriorityQueue.$$;
m$1.set_type_args(priorityQueue$,{Element$PriorityQueue:$1td.$$targs$$.Type$Class.a.Element$PriorityQueue});
m$1.set_type_args(priorityQueue$,{Element$Collection:priorityQueue$.$$targs$$.Element$PriorityQueue,Element$Iterable:priorityQueue$.$$targs$$.Element$PriorityQueue,Absent$Iterable:{t:m$1.Null},Element$Category:{t:m$1.$_Object},Element$Queue:priorityQueue$.$$targs$$.Element$PriorityQueue});
return priorityQueue$;
};
PriorityQueue.ser$get$=function(ref,o){var n=ref.attribute.qualifiedName;if(n==='ceylon.collection::PriorityQueue.growthFactor')return o.$1dkeuw$1qz_;
else if(n==='ceylon.collection::PriorityQueue.elements')return o.$1dkeuw$1r0_;
else if(n==='ceylon.collection::PriorityQueue.array')return o.$1dkeuw$1r3_;
else if(n==='ceylon.collection::PriorityQueue.length')return o.$1dkeuw$1r2_;
else throw new TypeError('unknown attribute');
};
PriorityQueue.ser$set$=function(ref,o,i){if(!m$1.is$(ref,{t:m$1.Member$serialization}))throw m$1.AssertionError('unexpected reachable reference');var n=ref.attribute.qualifiedName;
if(n==='ceylon.collection::PriorityQueue.growthFactor')o.$1dkeuw$1qz_=i;
else if(n==='ceylon.collection::PriorityQueue.elements')o.$1dkeuw$1r0_=i;
else if(n==='ceylon.collection::PriorityQueue.array')o.$1dkeuw$1r3_=i;
else if(n==='ceylon.collection::PriorityQueue.length')o.$1dkeuw$1r2_=i;
else throw new TypeError('unknown attribute');
};
PriorityQueue.ser$refs$=function(o){return [m$1.MemberImpl$impl(m$1.OpenValue$jsint(m$1.lmp$(ex$,'ceylon.collection'),o.$prop$get$1dkeuw$1qz)),m$1.MemberImpl$impl(m$1.OpenValue$jsint(m$1.lmp$(ex$,'ceylon.collection'),o.$prop$get$1dkeuw$1r0)),m$1.MemberImpl$impl(m$1.OpenValue$jsint(m$1.lmp$(ex$,'ceylon.collection'),o.$prop$get$1dkeuw$1r3)),m$1.MemberImpl$impl(m$1.OpenValue$jsint(m$1.lmp$(ex$,'ceylon.collection'),o.$prop$get$1dkeuw$1r2))];
};
function IdentitySet($1dkeuw$1te,$1dkeuw$1tf,$$targs$$,identitySet$){
$init$IdentitySet();
if(identitySet$===undefined)identitySet$=new IdentitySet.$$;
m$1.set_type_args(identitySet$,$$targs$$);
if($1dkeuw$1te===undefined){$1dkeuw$1te=$init$IdentitySet().$defs$hashtable(identitySet$,$1dkeuw$1tf);}
identitySet$.$1dkeuw$1te_=$1dkeuw$1te;
if($1dkeuw$1tf===undefined){$1dkeuw$1tf=$init$IdentitySet().$defs$elements(identitySet$,$1dkeuw$1te);}
identitySet$.$1dkeuw$1tf_=$1dkeuw$1tf;
m$1.Iterable({Element$Iterable:$$targs$$.Element$IdentitySet/*ORALE!Element inv pero Element var*/,Absent$Iterable:{t:m$1.Null}},identitySet$);
m$1.Collection({Element$Collection:$$targs$$.Element$IdentitySet/*ORALE!Element inv pero Element var*/},identitySet$);
identitySet$.$1dkeuw$1tg_=elementStore(identitySet$.$1dkeuw$1te.initialCapacity,{Element$elementStore:identitySet$.$$targs$$.Element$IdentitySet});
identitySet$.$1dkeuw$1th_=(0);
var $1tj;for(var $1ti=$1dkeuw$1tf.iterator();($1tj=$1ti.next())!==m$1.finished();){
if(identitySet$.$1dkeuw$1tk(identitySet$.$1dkeuw$1tg,$1tj)){
($1tl=identitySet$.$1dkeuw$1th,identitySet$.$1dkeuw$1th=$1tl.successor,$1tl);
var $1tl;
}
}
identitySet$.$1dkeuw$1tm();
return identitySet$;
}
IdentitySet.$defs$hashtable=function(identitySet$,$1dkeuw$1tf){return Hashtable()};IdentitySet.$defs$elements=function(identitySet$,$1dkeuw$1te){return m$1.empty()};IdentitySet.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'hashtable',mt:'prm',def:1,$t:{t:Hashtable},an:function(){return[m$1.doc("Performance-related settings for the backing array.")];}},{nm:'elements',mt:'prm',def:1,$t:{t:m$1.Iterable,a:{Element$Iterable:'Element$IdentitySet',Absent$Iterable:{t:m$1.Null}}},an:function(){return[m$1.doc("The initial elements of the set.")];}}],tp:{Element$IdentitySet:{sts:[{t:m$1.Identifiable}]}},sts:[{t:m$1.Iterable,a:{Element$Iterable:'Element$IdentitySet',Absent$Iterable:{t:m$1.Null}}},{t:m$1.Collection,a:{Element$Collection:'Element$IdentitySet'}}],pa:2049,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:IdentitySet'),m$1.by(m$1.$arr$sa$(["Gavin King"],{t:m$1.$_String}))];},d:['ceylon.collection','IdentitySet']};};
ex$.IdentitySet=IdentitySet;
function $init$IdentitySet(){
if(IdentitySet.$$===undefined){
m$1.initTypeProto(IdentitySet,'ceylon.collection::IdentitySet',m$1.Basic,m$1.Iterable,m$1.Collection);
(function(identitySet$){
m$1.atr$(identitySet$,'$1dkeuw$1te',function(){return this.$1dkeuw$1te_;},undefined,function(){return{mod:$CCMM$,$t:{t:Hashtable},$cont:IdentitySet,an:function(){return[m$1.doc("Performance-related settings for the backing array.")];},d:['ceylon.collection','IdentitySet','$at','hashtable$x4421u']};});
m$1.atr$(identitySet$,'$1dkeuw$1tf',function(){return this.$1dkeuw$1tf_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Iterable,a:{Element$Iterable:'Element$IdentitySet',Absent$Iterable:{t:m$1.Null}}},$cont:IdentitySet,an:function(){return[m$1.doc("The initial elements of the set.")];},d:['ceylon.collection','IdentitySet','$at','elements$7yiv9d']};});
m$1.atr$(identitySet$,'$1dkeuw$1tg',function(){return this.$1dkeuw$1tg_;},function($1tn){return this.$1dkeuw$1tg_=$1tn;},function(){return{mod:$CCMM$,$t:{t:m$1.$_Array,a:{Element$Array:{t:'u',l:[{t:m$1.Null},{t:Cell,a:{Element$Cell:'Element$IdentitySet'}}]}}},$cont:IdentitySet,pa:1027,d:['ceylon.collection','IdentitySet','$at','store$h40eed']};});
m$1.atr$(identitySet$,'$1dkeuw$1th',function(){return this.$1dkeuw$1th_;},function($1to){return this.$1dkeuw$1th_=$1to;},function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:IdentitySet,pa:1027,d:['ceylon.collection','IdentitySet','$at','length$8o5tco']};});
identitySet$.$1dkeuw$1tp=function($1tq,$1tr){var identitySet$=this;
return m$1.identityHash($1tq).remainder($1tr.size).magnitude;
};
identitySet$.$1dkeuw$1tp.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'elem',mt:'prm',$t:{t:m$1.Identifiable}},{nm:'store',mt:'prm',$t:{t:m$1.$_Array,a:{Element$Array:{t:'u',l:[{t:m$1.Null},{t:Cell,a:{Element$Cell:'Element$IdentitySet'}}]}}}}],$cont:IdentitySet,d:['ceylon.collection','IdentitySet','$m','storeIndex$6q98a3']};};
identitySet$.$1dkeuw$1tk=function($1ts,$1tt){
var identitySet$=this;
var $1tu=identitySet$.$1dkeuw$1tp($1tt,$1ts);
var $1tv=$1ts.$_get($1tu);
var $1tw=$1tv;
var $1tx;
while(m$1.nn$(($1tx=$1tw))){
if(($1tx.element===$1tt)){
($1tx.element=$1tt);
return false;
}
$1tw=$1tx.rest;
}
($1ty=Cell($1tt,$1tv,{Element$Cell:identitySet$.$$targs$$.Element$IdentitySet}),$1ts.set($1tu,$1ty), $1ty);
var $1ty;
return true;
};identitySet$.$1dkeuw$1tk.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'store',mt:'prm',$t:{t:m$1.$_Array,a:{Element$Array:{t:'u',l:[{t:m$1.Null},{t:Cell,a:{Element$Cell:'Element$IdentitySet'}}]}}}},{nm:'element',mt:'prm',$t:'Element$IdentitySet'}],$cont:IdentitySet,d:['ceylon.collection','IdentitySet','$m','addToStore$vvwctb']};};
identitySet$.$1dkeuw$1tm=function(){
var identitySet$=this;
if(identitySet$.$1dkeuw$1te.rehash(identitySet$.$1dkeuw$1th,identitySet$.$1dkeuw$1tg.size)){
var $1tz=elementStore(identitySet$.$1dkeuw$1te.capacity(identitySet$.$1dkeuw$1th),{Element$elementStore:identitySet$.$$targs$$.Element$IdentitySet});
var $1u0=(0);
while(($1u0<identitySet$.$1dkeuw$1tg.size)){
var $1u1=identitySet$.$1dkeuw$1tg.$_get($1u0);
var $1u2;
while(m$1.nn$(($1u2=$1u1))){
$1u1=$1u2.rest;
var $1u3=identitySet$.$1dkeuw$1tp($1u2.element,$1tz);
var $1u4=$1tz.$_get($1u3);
($1u2.rest=$1u4);
($1u5=$1u2,$1tz.set($1u3,$1u5), $1u5);
var $1u5;
}
($1u6=$1u0,$1u0=$1u6.successor,$1u6);
var $1u6;
}
identitySet$.$1dkeuw$1tg=$1tz;
}
};identitySet$.$1dkeuw$1tm.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[],$cont:IdentitySet,d:['ceylon.collection','IdentitySet','$m','checkRehash$920jqb']};};
identitySet$.add=function($1u7){
var identitySet$=this;
if(identitySet$.$1dkeuw$1tk(identitySet$.$1dkeuw$1tg,$1u7)){
($1u8=identitySet$.$1dkeuw$1th,identitySet$.$1dkeuw$1th=$1u8.successor,$1u8);
var $1u8;
identitySet$.$1dkeuw$1tm();
return true;
}
return false;
};identitySet$.add.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'element',mt:'prm',$t:'Element$IdentitySet'}],$cont:IdentitySet,pa:1,d:['ceylon.collection','IdentitySet','$m','add']};};
identitySet$.addAll=function($1u9){
var identitySet$=this;
var $1ua=false;
var $1uc;for(var $1ub=$1u9.iterator();($1uc=$1ub.next())!==m$1.finished();){
($1ua=$1ua||identitySet$.add($1uc));
}
if($1ua){
identitySet$.$1dkeuw$1tm();
}
return $1ua;
};identitySet$.addAll.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'elements',mt:'prm',$t:{t:m$1.Iterable,a:{Element$Iterable:'Element$IdentitySet',Absent$Iterable:{t:m$1.Null}}}}],$cont:IdentitySet,pa:1,d:['ceylon.collection','IdentitySet','$m','addAll']};};
identitySet$.remove=function($1ud){
var identitySet$=this;
var $1ue=identitySet$.$1dkeuw$1tp($1ud,identitySet$.$1dkeuw$1tg);
var $1uf;
if(m$1.nn$(($1uf=identitySet$.$1dkeuw$1tg.$_get($1ue)))&&($1uf.element===$1ud)){
($1ug=$1uf.rest,identitySet$.$1dkeuw$1tg.set($1ue,$1ug), $1ug);
var $1ug;
($1uh=identitySet$.$1dkeuw$1th,identitySet$.$1dkeuw$1th=$1uh.predecessor,$1uh);
var $1uh;
return true;
}
var $1ui=identitySet$.$1dkeuw$1tg.$_get($1ue);
var $1uj;
while(m$1.nn$(($1uj=$1ui))){
var $1uk=$1uj.rest;
var $1ul;
if(m$1.nn$(($1ul=$1uk))&&($1ul.element===$1ud)){
($1uj.rest=$1ul.rest);
($1um=identitySet$.$1dkeuw$1th,identitySet$.$1dkeuw$1th=$1um.predecessor,$1um);
var $1um;
return true;
}
else{
$1ui=$1uk;
}
}
return false;
};identitySet$.remove.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'element',mt:'prm',$t:'Element$IdentitySet'}],$cont:IdentitySet,pa:1,d:['ceylon.collection','IdentitySet','$m','remove']};};
identitySet$.removeAll=function($1un){
var identitySet$=this;
var $1uo=false;
var $1uq;for(var $1up=$1un.iterator();($1uq=$1up.next())!==m$1.finished();){
if(identitySet$.remove($1uq)){
$1uo=true;
}
}
return $1uo;
};identitySet$.removeAll.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'elements',mt:'prm',$t:{t:m$1.Iterable,a:{Element$Iterable:'Element$IdentitySet',Absent$Iterable:{t:m$1.Null}}}}],$cont:IdentitySet,pa:1,d:['ceylon.collection','IdentitySet','$m','removeAll']};};
identitySet$.clear=function(){
var identitySet$=this;
var $1ur=(0);
while(($1ur<identitySet$.$1dkeuw$1tg.size)){
($1us=null,identitySet$.$1dkeuw$1tg.set(($1ut=$1ur,$1ur=$1ut.successor,$1ut),$1us), $1us);
var $1us,$1ut;
}
identitySet$.$1dkeuw$1th=(0);
};identitySet$.clear.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[],$cont:IdentitySet,pa:1,an:function(){return[m$1.doc("Removes every element")];},d:['ceylon.collection','IdentitySet','$m','clear']};};
m$1.atr$(identitySet$,'size',function(){
var identitySet$=this;
return identitySet$.$1dkeuw$1th;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:IdentitySet,pa:3,d:['ceylon.collection','IdentitySet','$at','size']};});
identitySet$.iterator=function(){var identitySet$=this;
return StoreIterator(identitySet$.$1dkeuw$1tg,{Element$StoreIterator:identitySet$.$$targs$$.Element$IdentitySet});
};identitySet$.count=function($1uu){
var identitySet$=this;
var $1uv=(0);
var $1uw=(0);
while(($1uw<identitySet$.$1dkeuw$1tg.size)){
var $1ux=identitySet$.$1dkeuw$1tg.$_get($1uw);
var $1uy;
while(m$1.nn$(($1uy=$1ux))){
if($1uu($1uy.element)){
($1uz=$1uv,$1uv=$1uz.successor,$1uz);
var $1uz;
}
$1ux=$1uy.rest;
}
($1v0=$1uw,$1uw=$1v0.successor,$1v0);
var $1v0;
}
return $1uv;
};identitySet$.count.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'selecting',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Arguments$Callable:{t:'T',l:['Element$IdentitySet']},Return$Callable:{t:m$1.$_Boolean}}},$rt:{t:m$1.$_Boolean},ps:[{nm:'element',mt:'prm',$t:'Element$IdentitySet'}]}],$cont:IdentitySet,pa:3,d:['ceylon.collection','IdentitySet','$m','count']};};
identitySet$.each=function($1v1){
var identitySet$=this;
identitySet$.$1dkeuw$1tg.each(m$1.jsc$2((function($1v2){
var $1v3=$1v2;
$prop$get$1v3={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:Cell,a:{Element$Cell:'Element$IdentitySet'}}]},$cont:identitySet$.each,pa:1027,d:['ceylon.collection','IdentitySet','$m','each','$at','iter$sd0mqa']};}};
$prop$get$1v3.get=function(){return $1v3};
var $1v4;
while(m$1.nn$(($1v4=$1v3))){
$1v1($1v4.element);
$1v3=$1v4.rest;
}
}),[{nm:'bucket',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},{t:Cell,a:{Element$Cell:identitySet$.$$targs$$.Element$IdentitySet}}]}}],{Arguments$Callable:m$1.mtt$([m$1.mut$([{t:m$1.Null},{t:Cell,a:{Element$Cell:identitySet$.$$targs$$.Element$IdentitySet}}])]),Return$Callable:{t:m$1.Anything}}));
};identitySet$.each.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'step',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Arguments$Callable:{t:'T',l:['Element$IdentitySet']},Return$Callable:{t:m$1.Anything}}},$rt:{t:m$1.Anything},ps:[{nm:'element',mt:'prm',$t:'Element$IdentitySet'}]}],$cont:IdentitySet,pa:3,d:['ceylon.collection','IdentitySet','$m','each']};};
m$1.atr$(identitySet$,'hash',function(){
var identitySet$=this;
var $1v5=(0);
var $1v6=(17);
while(($1v5<identitySet$.$1dkeuw$1tg.size)){
var $1v7=identitySet$.$1dkeuw$1tg.$_get($1v5);
var $1v8;
while(m$1.nn$(($1v8=$1v7))){
$1v6=$1v6.times(31).plus(m$1.identityHash($1v8));
$1v7=$1v8.rest;
}
($1v9=$1v5,$1v5=$1v9.successor,$1v9);
var $1v9;
}
return $1v6;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:IdentitySet,pa:3,d:['ceylon.collection','IdentitySet','$at','hash']};});identitySet$.equals=function($1va){
var identitySet$=this;
var $1vb;
if(m$1.is$(($1vb=$1va),{t:IdentitySet,a:{Element$IdentitySet:{t:m$1.$_Object}}})&&(identitySet$.size==$1vb.size)){
var $1vc=(0);
while(($1vc<identitySet$.$1dkeuw$1tg.size)){
var $1vd=identitySet$.$1dkeuw$1tg.$_get($1vc);
var $1ve;
while(m$1.nn$(($1ve=$1vd))){
if(!$1vb.contains($1ve.element)){
return false;
}
$1vd=$1ve.rest;
}
($1vf=$1vc,$1vc=$1vf.successor,$1vf);
var $1vf;
}
return true;
}
return false;
};identitySet$.equals.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'that',mt:'prm',$t:{t:m$1.$_Object}}],$cont:IdentitySet,pa:3,d:['ceylon.collection','IdentitySet','$m','equals']};};
identitySet$.clone=function(){
var identitySet$=this;
var $1vg=IdentitySet(undefined,undefined,{Element$IdentitySet:identitySet$.$$targs$$.Element$IdentitySet});
($1vg.$1dkeuw$1th=identitySet$.$1dkeuw$1th);
($1vg.$1dkeuw$1tg=elementStore(identitySet$.$1dkeuw$1tg.size,{Element$elementStore:identitySet$.$$targs$$.Element$IdentitySet}));
var $1vh=(0);
while(($1vh<identitySet$.$1dkeuw$1tg.size)){
var $1vi;
if(m$1.nn$(($1vi=identitySet$.$1dkeuw$1tg.$_get($1vh)))){
($1vj=$1vi.clone(),$1vg.$1dkeuw$1tg.set($1vh,$1vj), $1vj);
var $1vj;
}
($1vk=$1vh,$1vh=$1vk.successor,$1vk);
var $1vk;
}
return $1vg;
};identitySet$.clone.$crtmm$=function(){return{mod:$CCMM$,$t:{t:IdentitySet,a:{Element$IdentitySet:'Element$IdentitySet'}},ps:[],$cont:IdentitySet,pa:3,d:['ceylon.collection','IdentitySet','$m','clone']};};
identitySet$.contains=function($1vl){
var identitySet$=this;
var $1vm;
if(m$1.is$(($1vm=$1vl),{t:m$1.Identifiable})){
var $1vn=(0);
while(($1vn<identitySet$.$1dkeuw$1tg.size)){
var $1vo=identitySet$.$1dkeuw$1tg.$_get($1vn);
var $1vp;
while(m$1.nn$(($1vp=$1vo))){
if(($1vp.element===$1vm)){
return true;
}
$1vo=$1vp.rest;
}
($1vq=$1vn,$1vn=$1vq.successor,$1vq);
var $1vq;
}
}
return false;
};identitySet$.contains.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'element',mt:'prm',$t:{t:m$1.$_Object}}],$cont:IdentitySet,pa:3,d:['ceylon.collection','IdentitySet','$m','contains']};};
identitySet$.superset=function($1vr,$1dp37t$){
var identitySet$=this;
var $1vt;for(var $1vs=$1vr.iterator();($1vt=$1vs.next())!==m$1.finished();){
if(!m$1.$cnt$(identitySet$,$1vt)){
return false;
}
}
if(m$1.finished()===$1vt){
return true;
}
};identitySet$.superset.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'set',mt:'prm',$t:{t:IdentitySet,a:{Element$IdentitySet:'Other$superset'}}}],$cont:IdentitySet,tp:{Other$superset:{sts:[{t:m$1.Identifiable}]}},pa:9,d:['ceylon.collection','IdentitySet','$m','superset']};};
identitySet$.subset=function($1vu,$emo084$){
var identitySet$=this;
var $1vw;for(var $1vv=identitySet$.iterator();($1vw=$1vv.next())!==m$1.finished();){
if(!m$1.$cnt$($1vu,$1vw)){
return false;
}
}
if(m$1.finished()===$1vw){
return true;
}
};identitySet$.subset.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'set',mt:'prm',$t:{t:IdentitySet,a:{Element$IdentitySet:'Other$subset'}}}],$cont:IdentitySet,tp:{Other$subset:{sts:[{t:m$1.Identifiable}]}},pa:9,d:['ceylon.collection','IdentitySet','$m','subset']};};
identitySet$.complement=function($1vx,$3sj2l4$){
var identitySet$=this;
var $1vy=IdentitySet(undefined,undefined,{Element$IdentitySet:identitySet$.$$targs$$.Element$IdentitySet});
var $1w0;for(var $1vz=identitySet$.iterator();($1w0=$1vz.next())!==m$1.finished();){
if(!$1vx.contains($1w0)){
$1vy.add($1w0);
}
}
return $1vy;
};identitySet$.complement.$crtmm$=function(){return{mod:$CCMM$,$t:{t:IdentitySet,a:{Element$IdentitySet:'Element$IdentitySet'}},ps:[{nm:'set',mt:'prm',$t:{t:IdentitySet,a:{Element$IdentitySet:'Other$complement'}}}],$cont:IdentitySet,tp:{Other$complement:{sts:[{t:m$1.Identifiable}]}},pa:1,d:['ceylon.collection','IdentitySet','$m','complement']};};
identitySet$.exclusiveUnion=function($1w1,$iggrmb$){
var identitySet$=this;
var $1w2=IdentitySet(undefined,undefined,{Element$IdentitySet:m$1.mut$([identitySet$.$$targs$$.Element$IdentitySet,$iggrmb$.Other$exclusiveUnion])});
var $1w4;for(var $1w3=identitySet$.iterator();($1w4=$1w3.next())!==m$1.finished();){
if(!$1w1.contains($1w4)){
$1w2.add($1w4);
}
}
var $1w6;for(var $1w5=$1w1.iterator();($1w6=$1w5.next())!==m$1.finished();){
if(!identitySet$.contains($1w6)){
$1w2.add($1w6);
}
}
return $1w2;
};identitySet$.exclusiveUnion.$crtmm$=function(){return{mod:$CCMM$,$t:{t:IdentitySet,a:{Element$IdentitySet:{t:'u',l:['Element$IdentitySet','Other$exclusiveUnion']}}},ps:[{nm:'set',mt:'prm',$t:{t:IdentitySet,a:{Element$IdentitySet:'Other$exclusiveUnion'}}}],$cont:IdentitySet,tp:{Other$exclusiveUnion:{sts:[{t:m$1.Identifiable}]}},pa:1,d:['ceylon.collection','IdentitySet','$m','exclusiveUnion']};};
identitySet$.intersection=function($1w7,$94cc1h$){
var identitySet$=this;
var $1w8=IdentitySet(undefined,undefined,{Element$IdentitySet:m$1.mit$([identitySet$.$$targs$$.Element$IdentitySet,$94cc1h$.Other$intersection])});
var $1wa;for(var $1w9=identitySet$.iterator();($1wa=$1w9.next())!==m$1.finished();){
var $1wb;
if($1w7.contains($1wa)&&m$1.is$(($1wb=$1wa),$94cc1h$.Other$intersection,$94cc1h$)){
$1w8.add($1wb);
}
}
return $1w8;
};identitySet$.intersection.$crtmm$=function(){return{mod:$CCMM$,$t:{t:IdentitySet,a:{Element$IdentitySet:{t:'i',l:['Element$IdentitySet','Other$intersection']}}},ps:[{nm:'set',mt:'prm',$t:{t:IdentitySet,a:{Element$IdentitySet:'Other$intersection'}}}],$cont:IdentitySet,tp:{Other$intersection:{sts:[{t:m$1.Identifiable}]}},pa:1,d:['ceylon.collection','IdentitySet','$m','intersection']};};
identitySet$.union=function($1wc,$mewmlv$){
var identitySet$=this;
var $1wd=IdentitySet(undefined,undefined,{Element$IdentitySet:m$1.mut$([identitySet$.$$targs$$.Element$IdentitySet,$mewmlv$.Other$union])});
$1wd.addAll(identitySet$);
$1wd.addAll($1wc);
return $1wd;
};identitySet$.union.$crtmm$=function(){return{mod:$CCMM$,$t:{t:IdentitySet,a:{Element$IdentitySet:{t:'u',l:['Element$IdentitySet','Other$union']}}},ps:[{nm:'set',mt:'prm',$t:{t:IdentitySet,a:{Element$IdentitySet:'Other$union'}}}],$cont:IdentitySet,tp:{Other$union:{sts:[{t:m$1.Identifiable}]}},pa:1,d:['ceylon.collection','IdentitySet','$m','union']};};
})(IdentitySet.$$.prototype);
}
return IdentitySet;
}
ex$.$init$IdentitySet=$init$IdentitySet;
$init$IdentitySet();
IdentitySet.inst$$=function($1we){
var identitySet$=new IdentitySet.$$;
m$1.set_type_args(identitySet$,{Element$IdentitySet:$1we.$$targs$$.Type$Class.a.Element$IdentitySet});
m$1.set_type_args(identitySet$,{Element$Iterable:identitySet$.$$targs$$.Element$IdentitySet,Absent$Iterable:{t:m$1.Null},Element$Category:{t:m$1.$_Object},Element$Collection:identitySet$.$$targs$$.Element$IdentitySet});
return identitySet$;
};
IdentitySet.ser$get$=function(ref,o){var n=ref.attribute.qualifiedName;if(n==='ceylon.collection::IdentitySet.hashtable')return o.$1dkeuw$1te_;
else if(n==='ceylon.collection::IdentitySet.store')return o.$1dkeuw$1tg_;
else if(n==='ceylon.collection::IdentitySet.length')return o.$1dkeuw$1th_;
else throw new TypeError('unknown attribute');
};
IdentitySet.ser$set$=function(ref,o,i){if(!m$1.is$(ref,{t:m$1.Member$serialization}))throw m$1.AssertionError('unexpected reachable reference');var n=ref.attribute.qualifiedName;
if(n==='ceylon.collection::IdentitySet.hashtable')o.$1dkeuw$1te_=i;
else if(n==='ceylon.collection::IdentitySet.store')o.$1dkeuw$1tg_=i;
else if(n==='ceylon.collection::IdentitySet.length')o.$1dkeuw$1th_=i;
else throw new TypeError('unknown attribute');
};
IdentitySet.ser$refs$=function(o){return [m$1.MemberImpl$impl(m$1.OpenValue$jsint(m$1.lmp$(ex$,'ceylon.collection'),o.$prop$get$1dkeuw$1te)),m$1.MemberImpl$impl(m$1.OpenValue$jsint(m$1.lmp$(ex$,'ceylon.collection'),o.$prop$get$1dkeuw$1tg)),m$1.MemberImpl$impl(m$1.OpenValue$jsint(m$1.lmp$(ex$,'ceylon.collection'),o.$prop$get$1dkeuw$1th))];
};
function IdentityMap($1dkeuw$1wf,$1dkeuw$1wg,$$targs$$,identityMap$){
$init$IdentityMap();
if(identityMap$===undefined)identityMap$=new IdentityMap.$$;
m$1.set_type_args(identityMap$,$$targs$$);
if($1dkeuw$1wf===undefined){$1dkeuw$1wf=$init$IdentityMap().$defs$hashtable(identityMap$,$1dkeuw$1wg);}
identityMap$.$1dkeuw$1wf_=$1dkeuw$1wf;
if($1dkeuw$1wg===undefined){$1dkeuw$1wg=$init$IdentityMap().$defs$entries(identityMap$,$1dkeuw$1wf);}
identityMap$.$1dkeuw$1wg_=$1dkeuw$1wg;
m$1.Correspondence({Item$Correspondence:$$targs$$.Item$IdentityMap/*ORALE!Item inv pero Item var*/,Key$Correspondence:$$targs$$.Key$IdentityMap/*ORALE!Key inv pero Key var*/},identityMap$);
m$1.Iterable({Element$Iterable:{t:m$1.Entry,a:{Item$Entry:$$targs$$.Item$IdentityMap/*ORALE!Item inv pero Item var*/,Key$Entry:$$targs$$.Key$IdentityMap/*ORALE!Key inv pero Key var*/}},Absent$Iterable:{t:m$1.Null}},identityMap$);
m$1.Collection({Element$Collection:{t:m$1.Entry,a:{Item$Entry:$$targs$$.Item$IdentityMap/*ORALE!Item inv pero Item var*/,Key$Entry:$$targs$$.Key$IdentityMap/*ORALE!Key inv pero Key var*/}}},identityMap$);
identityMap$.$1dkeuw$1wh_=entryStore(identityMap$.$1dkeuw$1wf.initialCapacity,{Key$entryStore:identityMap$.$$targs$$.Key$IdentityMap,Item$entryStore:identityMap$.$$targs$$.Item$IdentityMap});
identityMap$.$1dkeuw$1wi_=(0);
var $1wk;for(var $1wj=$1dkeuw$1wg.iterator();($1wk=$1wj.next())!==m$1.finished();){
if(identityMap$.$1dkeuw$1wl(identityMap$.$1dkeuw$1wh,$1wk)){
($1wm=identityMap$.$1dkeuw$1wi,identityMap$.$1dkeuw$1wi=$1wm.successor,$1wm);
var $1wm;
}
}
identityMap$.$1dkeuw$1wn();
return identityMap$;
}
IdentityMap.$defs$hashtable=function(identityMap$,$1dkeuw$1wg){return Hashtable()};IdentityMap.$defs$entries=function(identityMap$,$1dkeuw$1wf){return m$1.empty()};IdentityMap.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'hashtable',mt:'prm',def:1,$t:{t:Hashtable},an:function(){return[m$1.doc("Performance-related settings for the backing array.")];}},{nm:'entries',mt:'prm',def:1,$t:{t:m$1.Iterable,a:{Element$Iterable:{t:m$1.Entry,a:{Item$Entry:'Item$IdentityMap',Key$Entry:'Key$IdentityMap'}},Absent$Iterable:{t:m$1.Null}}},an:function(){return[m$1.doc("The initial entries in the map.")];}}],tp:{Key$IdentityMap:{sts:[{t:m$1.Identifiable}]},Item$IdentityMap:{}},sts:[{t:m$1.Iterable,a:{Element$Iterable:{t:m$1.Entry,a:{Item$Entry:'Item$IdentityMap',Key$Entry:'Key$IdentityMap'}},Absent$Iterable:{t:m$1.Null}}},{t:m$1.Collection,a:{Element$Collection:{t:m$1.Entry,a:{Item$Entry:'Item$IdentityMap',Key$Entry:'Key$IdentityMap'}}}},{t:m$1.Correspondence,a:{Item$Correspondence:'Item$IdentityMap',Key$Correspondence:'Key$IdentityMap'}}],pa:2049,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:IdentityMap'),m$1.by(m$1.$arr$sa$(["Gavin King"],{t:m$1.$_String}))];},d:['ceylon.collection','IdentityMap']};};
ex$.IdentityMap=IdentityMap;
function $init$IdentityMap(){
if(IdentityMap.$$===undefined){
m$1.initTypeProto(IdentityMap,'ceylon.collection::IdentityMap',m$1.Basic,m$1.Correspondence,m$1.Iterable,m$1.Collection);
(function(identityMap$){
m$1.atr$(identityMap$,'$1dkeuw$1wf',function(){return this.$1dkeuw$1wf_;},undefined,function(){return{mod:$CCMM$,$t:{t:Hashtable},$cont:IdentityMap,an:function(){return[m$1.doc("Performance-related settings for the backing array.")];},d:['ceylon.collection','IdentityMap','$at','hashtable$ysu1qs']};});
m$1.atr$(identityMap$,'$1dkeuw$1wg',function(){return this.$1dkeuw$1wg_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Iterable,a:{Element$Iterable:{t:m$1.Entry,a:{Item$Entry:'Item$IdentityMap',Key$Entry:'Key$IdentityMap'}},Absent$Iterable:{t:m$1.Null}}},$cont:IdentityMap,an:function(){return[m$1.doc("The initial entries in the map.")];},d:['ceylon.collection','IdentityMap','$at','entries$yyuq4k']};});
m$1.atr$(identityMap$,'$1dkeuw$1wh',function(){return this.$1dkeuw$1wh_;},function($1wo){return this.$1dkeuw$1wh_=$1wo;},function(){return{mod:$CCMM$,$t:{t:m$1.$_Array,a:{Element$Array:{t:'u',l:[{t:m$1.Null},{t:Cell,a:{Element$Cell:{t:m$1.Entry,a:{Item$Entry:'Item$IdentityMap',Key$Entry:'Key$IdentityMap'}}}}]}}},$cont:IdentityMap,pa:1027,d:['ceylon.collection','IdentityMap','$at','store$dzug7v']};});
m$1.atr$(identityMap$,'$1dkeuw$1wi',function(){return this.$1dkeuw$1wi_;},function($1wp){return this.$1dkeuw$1wi_=$1wp;},function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:IdentityMap,pa:1027,d:['ceylon.collection','IdentityMap','$at','length$bsbrj6']};});
identityMap$.$1dkeuw$1wq=function($1wr,$1ws){var identityMap$=this;
return m$1.identityHash($1wr).remainder($1ws.size).magnitude;
};
identityMap$.$1dkeuw$1wq.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'key',mt:'prm',$t:{t:m$1.Identifiable}},{nm:'store',mt:'prm',$t:{t:m$1.$_Array,a:{Element$Array:{t:'u',l:[{t:m$1.Null},{t:Cell,a:{Element$Cell:{t:m$1.Entry,a:{Item$Entry:'Item$IdentityMap',Key$Entry:'Key$IdentityMap'}}}}]}}}}],$cont:IdentityMap,d:['ceylon.collection','IdentityMap','$m','storeIndex$9uf6gl']};};
identityMap$.$1dkeuw$1wl=function($1wt,$1wu){
var identityMap$=this;
var $1wv=identityMap$.$1dkeuw$1wq($1wu.key,$1wt);
var $1ww=$1wt.$_get($1wv);
var $1wx=$1ww;
var $1wy;
while(m$1.nn$(($1wy=$1wx))){
if(($1wy.element.key===$1wu.key)){
($1wy.element=$1wu);
return false;
}
$1wx=$1wy.rest;
}
($1wz=Cell($1wu,$1ww,{Element$Cell:{t:m$1.Entry,a:{Item$Entry:identityMap$.$$targs$$.Item$IdentityMap/*ORALE!Item inv pero Item var*/,Key$Entry:identityMap$.$$targs$$.Key$IdentityMap/*ORALE!Key inv pero Key var*/}}}),$1wt.set($1wv,$1wz), $1wz);
var $1wz;
return true;
};identityMap$.$1dkeuw$1wl.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'store',mt:'prm',$t:{t:m$1.$_Array,a:{Element$Array:{t:'u',l:[{t:m$1.Null},{t:Cell,a:{Element$Cell:{t:m$1.Entry,a:{Item$Entry:'Item$IdentityMap',Key$Entry:'Key$IdentityMap'}}}}]}}}},{nm:'entry',mt:'prm',$t:{t:m$1.Entry,a:{Item$Entry:'Item$IdentityMap',Key$Entry:'Key$IdentityMap'}}}],$cont:IdentityMap,d:['ceylon.collection','IdentityMap','$m','addToStore$z02azt']};};
identityMap$.$1dkeuw$1wn=function(){
var identityMap$=this;
if(identityMap$.$1dkeuw$1wf.rehash(identityMap$.$1dkeuw$1wi,identityMap$.$1dkeuw$1wh.size)){
var $1x0=entryStore(identityMap$.$1dkeuw$1wf.capacity(identityMap$.$1dkeuw$1wi),{Key$entryStore:identityMap$.$$targs$$.Key$IdentityMap,Item$entryStore:identityMap$.$$targs$$.Item$IdentityMap});
var $1x1=(0);
while(($1x1<identityMap$.$1dkeuw$1wh.size)){
var $1x2=identityMap$.$1dkeuw$1wh.$_get($1x1);
var $1x3;
while(m$1.nn$(($1x3=$1x2))){
$1x2=$1x3.rest;
var $1x4=identityMap$.$1dkeuw$1wq($1x3.element.key,$1x0);
var $1x5=$1x0.$_get($1x4);
($1x3.rest=$1x5);
($1x6=$1x3,$1x0.set($1x4,$1x6), $1x6);
var $1x6;
}
($1x7=$1x1,$1x1=$1x7.successor,$1x7);
var $1x7;
}
identityMap$.$1dkeuw$1wh=$1x0;
}
};identityMap$.$1dkeuw$1wn.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[],$cont:IdentityMap,d:['ceylon.collection','IdentityMap','$m','checkRehash$c66hwt']};};
identityMap$.put=function($1x8,$1x9){
var identityMap$=this;
var $1xa=identityMap$.$1dkeuw$1wq($1x8,identityMap$.$1dkeuw$1wh);
var $1xb=m$1.Entry($1x8,$1x9,{Item$Entry:identityMap$.$$targs$$.Item$IdentityMap/*ORALE!Item inv pero Item var*/,Key$Entry:identityMap$.$$targs$$.Key$IdentityMap/*ORALE!Key inv pero Key var*/});
var $1xc=identityMap$.$1dkeuw$1wh.$_get($1xa);
var $1xd=$1xc;
var $1xe;
while(m$1.nn$(($1xe=$1xd))){
if(($1xe.element.key===$1x8)){
var $1xf=$1xe.element.item;
($1xe.element=$1xb);
return $1xf;
}
$1xd=$1xe.rest;
}
($1xg=Cell($1xb,$1xc,{Element$Cell:{t:m$1.Entry,a:{Item$Entry:identityMap$.$$targs$$.Item$IdentityMap/*ORALE!Item inv pero Item var*/,Key$Entry:identityMap$.$$targs$$.Key$IdentityMap/*ORALE!Key inv pero Key var*/}}}),identityMap$.$1dkeuw$1wh.set($1xa,$1xg), $1xg);
var $1xg;
($1xh=identityMap$.$1dkeuw$1wi,identityMap$.$1dkeuw$1wi=$1xh.successor,$1xh);
var $1xh;
identityMap$.$1dkeuw$1wn();
return null;
};identityMap$.put.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Item$IdentityMap']},ps:[{nm:'key',mt:'prm',$t:'Key$IdentityMap'},{nm:'item',mt:'prm',$t:'Item$IdentityMap'}],$cont:IdentityMap,pa:1,d:['ceylon.collection','IdentityMap','$m','put']};};
identityMap$.putAll=function($1xi){
var identityMap$=this;
var $1xk;for(var $1xj=$1xi.iterator();($1xk=$1xj.next())!==m$1.finished();){
if(identityMap$.$1dkeuw$1wl(identityMap$.$1dkeuw$1wh,$1xk)){
($1xl=identityMap$.$1dkeuw$1wi,identityMap$.$1dkeuw$1wi=$1xl.successor,$1xl);
var $1xl;
}
}
identityMap$.$1dkeuw$1wn();
};identityMap$.putAll.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'entries',mt:'prm',$t:{t:m$1.Iterable,a:{Element$Iterable:{t:m$1.Entry,a:{Item$Entry:'Item$IdentityMap',Key$Entry:'Key$IdentityMap'}},Absent$Iterable:{t:m$1.Null}}}}],$cont:IdentityMap,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:IdentityMap:$m:putAll')];},d:['ceylon.collection','IdentityMap','$m','putAll']};};
identityMap$.replaceEntry=function($1xm,$1xn,$1xo){
var identityMap$=this;
var $1xp=identityMap$.$1dkeuw$1wq($1xm,identityMap$.$1dkeuw$1wh);
var $1xq=identityMap$.$1dkeuw$1wh.$_get($1xp);
var $1xr;
while(m$1.nn$(($1xr=$1xq))){
if(($1xr.element.key===$1xm)){
var $1xs;
if(m$1.nn$(($1xs=$1xr.element.item))&&m$1.$eq$($1xs,$1xn)){
($1xr.element=m$1.Entry($1xm,$1xo,{Item$Entry:identityMap$.$$targs$$.Item$IdentityMap/*ORALE!Item inv pero Item var*/,Key$Entry:identityMap$.$$targs$$.Key$IdentityMap/*ORALE!Key inv pero Key var*/}));
return true;
}
else{
return false;
}
}
$1xq=$1xr.rest;
}
return false;
};identityMap$.replaceEntry.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'key',mt:'prm',$t:'Key$IdentityMap'},{nm:'item',mt:'prm',$t:{t:'i',l:['Item$IdentityMap',{t:m$1.$_Object}]}},{nm:'newItem',mt:'prm',$t:'Item$IdentityMap'}],$cont:IdentityMap,pa:1,d:['ceylon.collection','IdentityMap','$m','replaceEntry']};};
identityMap$.remove=function($1xt){
var identityMap$=this;
var $1xu=identityMap$.$1dkeuw$1wq($1xt,identityMap$.$1dkeuw$1wh);
var $1xv;
if(m$1.nn$(($1xv=identityMap$.$1dkeuw$1wh.$_get($1xu)))&&($1xv.element.key===$1xt)){
($1xw=$1xv.rest,identityMap$.$1dkeuw$1wh.set($1xu,$1xw), $1xw);
var $1xw;
($1xx=identityMap$.$1dkeuw$1wi,identityMap$.$1dkeuw$1wi=$1xx.predecessor,$1xx);
var $1xx;
return $1xv.element.item;
}
var $1xy=identityMap$.$1dkeuw$1wh.$_get($1xu);
var $1xz;
while(m$1.nn$(($1xz=$1xy))){
var $1y0=$1xz.rest;
var $1y1;
if(m$1.nn$(($1y1=$1y0))&&($1y1.element.key===$1xt)){
($1xz.rest=$1y1.rest);
($1y2=identityMap$.$1dkeuw$1wi,identityMap$.$1dkeuw$1wi=$1y2.predecessor,$1y2);
var $1y2;
return $1y1.element.item;
}
else{
$1xy=$1y0;
}
}
return null;
};identityMap$.remove.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Item$IdentityMap']},ps:[{nm:'key',mt:'prm',$t:'Key$IdentityMap'}],$cont:IdentityMap,pa:1,an:function(){return[m$1.doc("Removes a key/value mapping if it exists")];},d:['ceylon.collection','IdentityMap','$m','remove']};};
identityMap$.removeAll=function($1y3){
var identityMap$=this;
var $1y5;for(var $1y4=$1y3.iterator();($1y5=$1y4.next())!==m$1.finished();){
identityMap$.remove($1y5);
}
};identityMap$.removeAll.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'keys',mt:'prm',$t:{t:m$1.Iterable,a:{Element$Iterable:'Key$IdentityMap',Absent$Iterable:{t:m$1.Null}}}}],$cont:IdentityMap,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:IdentityMap:$m:removeAll')];},d:['ceylon.collection','IdentityMap','$m','removeAll']};};
identityMap$.removeEntry=function($1y6,$1y7){
var identityMap$=this;
var $1y8=identityMap$.$1dkeuw$1wq($1y6,identityMap$.$1dkeuw$1wh);
var $1y9;
while(m$1.nn$(($1y9=identityMap$.$1dkeuw$1wh.$_get($1y8)))&&($1y9.element.key===$1y6)){
var $1ya;
if(m$1.nn$(($1ya=$1y9.element.item))&&m$1.$eq$($1ya,$1y7)){
($1yb=$1y9.rest,identityMap$.$1dkeuw$1wh.set($1y8,$1yb), $1yb);
var $1yb;
($1yc=identityMap$.$1dkeuw$1wi,identityMap$.$1dkeuw$1wi=$1yc.predecessor,$1yc);
var $1yc;
return true;
}
else{
return false;
}
}
var $1yd=identityMap$.$1dkeuw$1wh.$_get($1y8);
var $1ye;
while(m$1.nn$(($1ye=$1yd))){
var $1yf=$1ye.rest;
var $1yg;
if(m$1.nn$(($1yg=$1yf))&&($1yg.element.key===$1y6)){
var $1yh;
if(m$1.nn$(($1yh=$1yg.element.item))&&m$1.$eq$($1yh,$1y7)){
($1ye.rest=$1yg.rest);
($1yi=identityMap$.$1dkeuw$1wi,identityMap$.$1dkeuw$1wi=$1yi.predecessor,$1yi);
var $1yi;
return true;
}
else{
return false;
}
}
else{
$1yd=$1yf;
}
}
return false;
};identityMap$.removeEntry.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'key',mt:'prm',$t:'Key$IdentityMap'},{nm:'item',mt:'prm',$t:{t:'i',l:['Item$IdentityMap',{t:m$1.$_Object}]}}],$cont:IdentityMap,pa:1,d:['ceylon.collection','IdentityMap','$m','removeEntry']};};
identityMap$.clear=function(){
var identityMap$=this;
var $1yj=(0);
while(($1yj<identityMap$.$1dkeuw$1wh.size)){
($1yk=null,identityMap$.$1dkeuw$1wh.set(($1yl=$1yj,$1yj=$1yl.successor,$1yl),$1yk), $1yk);
var $1yk,$1yl;
}
identityMap$.$1dkeuw$1wi=(0);
};identityMap$.clear.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[],$cont:IdentityMap,pa:1,an:function(){return[m$1.doc("Removes every key/value mapping")];},d:['ceylon.collection','IdentityMap','$m','clear']};};
m$1.atr$(identityMap$,'size',function(){
var identityMap$=this;
return identityMap$.$1dkeuw$1wi;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:IdentityMap,pa:3,d:['ceylon.collection','IdentityMap','$at','size']};});
identityMap$.$_get=function($1ym){
var identityMap$=this;
if(identityMap$.empty){
return null;
}
var $1yn=identityMap$.$1dkeuw$1wq($1ym,identityMap$.$1dkeuw$1wh);
var $1yo=identityMap$.$1dkeuw$1wh.$_get($1yn);
var $1yp;
while(m$1.nn$(($1yp=$1yo))){
if(($1yp.element.key===$1ym)){
return $1yp.element.item;
}
$1yo=$1yp.rest;
}
return null;
};identityMap$.$_get.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Item$IdentityMap']},ps:[{nm:'key',mt:'prm',$t:'Key$IdentityMap'}],$cont:IdentityMap,pa:3,d:['ceylon.collection','IdentityMap','$m','get']};};
identityMap$.iterator=function(){var identityMap$=this;
return StoreIterator(identityMap$.$1dkeuw$1wh,{Element$StoreIterator:{t:m$1.Entry,a:{Item$Entry:identityMap$.$$targs$$.Item$IdentityMap/*ORALE!Item inv pero Item var*/,Key$Entry:identityMap$.$$targs$$.Key$IdentityMap/*ORALE!Key inv pero Key var*/}}});
};identityMap$.count=function($1yq){
var identityMap$=this;
var $1yr=(0);
var $1ys=(0);
while(($1yr<identityMap$.$1dkeuw$1wh.size)){
var $1yt=identityMap$.$1dkeuw$1wh.$_get($1yr);
var $1yu;
while(m$1.nn$(($1yu=$1yt))){
if($1yq($1yu.element)){
($1yv=$1ys,$1ys=$1yv.successor,$1yv);
var $1yv;
}
$1yt=$1yu.rest;
}
($1yw=$1yr,$1yr=$1yw.successor,$1yw);
var $1yw;
}
return $1ys;
};identityMap$.count.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'selecting',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Arguments$Callable:{t:'T',l:[{t:m$1.Entry,a:{Item$Entry:'Item$IdentityMap',Key$Entry:'Key$IdentityMap'}}]},Return$Callable:{t:m$1.$_Boolean}}},$rt:{t:m$1.$_Boolean},ps:[{nm:'element',mt:'prm',$t:{t:m$1.Entry,a:{Item$Entry:'Item$IdentityMap',Key$Entry:'Key$IdentityMap'}}}]}],$cont:IdentityMap,pa:3,d:['ceylon.collection','IdentityMap','$m','count']};};
identityMap$.each=function($1yx){
var identityMap$=this;
identityMap$.$1dkeuw$1wh.each(m$1.jsc$2((function($1yy){
var $1yz=$1yy;
$prop$get$1yz={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:Cell,a:{Element$Cell:{t:m$1.Entry,a:{Item$Entry:'Item$IdentityMap',Key$Entry:'Key$IdentityMap'}}}}]},$cont:identityMap$.each,pa:1027,d:['ceylon.collection','IdentityMap','$m','each','$at','iter$4io6c']};}};
$prop$get$1yz.get=function(){return $1yz};
var $1z0;
while(m$1.nn$(($1z0=$1yz))){
$1yx($1z0.element);
$1yz=$1z0.rest;
}
}),[{nm:'bucket',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},{t:Cell,a:{Element$Cell:{t:m$1.Entry,a:{Item$Entry:identityMap$.$$targs$$.Item$IdentityMap,Key$Entry:identityMap$.$$targs$$.Key$IdentityMap}}}}]}}],{Arguments$Callable:m$1.mtt$([m$1.mut$([{t:m$1.Null},{t:Cell,a:{Element$Cell:{t:m$1.Entry,a:{Item$Entry:identityMap$.$$targs$$.Item$IdentityMap/*ORALE!Item inv pero Item var*/,Key$Entry:identityMap$.$$targs$$.Key$IdentityMap/*ORALE!Key inv pero Key var*/}}}}])]),Return$Callable:{t:m$1.Anything}}));
};identityMap$.each.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'step',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Arguments$Callable:{t:'T',l:[{t:m$1.Entry,a:{Item$Entry:'Item$IdentityMap',Key$Entry:'Key$IdentityMap'}}]},Return$Callable:{t:m$1.Anything}}},$rt:{t:m$1.Anything},ps:[{nm:'element',mt:'prm',$t:{t:m$1.Entry,a:{Item$Entry:'Item$IdentityMap',Key$Entry:'Key$IdentityMap'}}}]}],$cont:IdentityMap,pa:3,d:['ceylon.collection','IdentityMap','$m','each']};};
m$1.atr$(identityMap$,'hash',function(){
var identityMap$=this;
var $1z1=(0);
var $1z2=(17);
while(($1z1<identityMap$.$1dkeuw$1wh.size)){
var $1z3=identityMap$.$1dkeuw$1wh.$_get($1z1);
var $1z4;
while(m$1.nn$(($1z4=$1z3))){
$1z2=$1z2.times(31).plus(m$1.identityHash($1z4.element.key)).times(31);
var $1z5;
if(m$1.nn$(($1z5=$1z4.element.item))){
($1z2=$1z2.plus($1z5.hash));
}
$1z3=$1z4.rest;
}
($1z6=$1z1,$1z1=$1z6.successor,$1z6);
var $1z6;
}
return $1z2;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:IdentityMap,pa:3,d:['ceylon.collection','IdentityMap','$at','hash']};});identityMap$.equals=function($1z7){
var identityMap$=this;
var $1z8;
if(m$1.is$(($1z8=$1z7),{t:IdentityMap,a:{Key$IdentityMap:{t:m$1.$_Object},Item$IdentityMap:{t:m$1.$_Object}}})&&(identityMap$.size==$1z8.size)){
var $1z9=(0);
while(($1z9<identityMap$.$1dkeuw$1wh.size)){
var $1za=identityMap$.$1dkeuw$1wh.$_get($1z9);
var $1zb;
while(m$1.nn$(($1zb=$1za))){
var $1zc=$1z8.$_get($1zb.element.key);
var $1zd;
if(m$1.nn$(($1zd=$1zb.element.item))){
var $1ze;
if(m$1.nn$(($1ze=$1zc))){
if(!m$1.$eq$($1ze,$1zd)){
return false;
}
}
else{
return false;
}
}
else{
if(m$1.nn$($1zc)){
return false;
}
}
$1za=$1zb.rest;
}
($1zf=$1z9,$1z9=$1zf.successor,$1zf);
var $1zf;
}
return true;
}
return false;
};identityMap$.equals.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'that',mt:'prm',$t:{t:m$1.$_Object}}],$cont:IdentityMap,pa:3,d:['ceylon.collection','IdentityMap','$m','equals']};};
identityMap$.clone=function(){
var identityMap$=this;
var $1zg=IdentityMap(undefined,undefined,{Key$IdentityMap:identityMap$.$$targs$$.Key$IdentityMap,Item$IdentityMap:identityMap$.$$targs$$.Item$IdentityMap});
($1zg.$1dkeuw$1wi=identityMap$.$1dkeuw$1wi);
($1zg.$1dkeuw$1wh=entryStore(identityMap$.$1dkeuw$1wh.size,{Key$entryStore:identityMap$.$$targs$$.Key$IdentityMap,Item$entryStore:identityMap$.$$targs$$.Item$IdentityMap}));
var $1zh=(0);
while(($1zh<identityMap$.$1dkeuw$1wh.size)){
var $1zi;
if(m$1.nn$(($1zi=identityMap$.$1dkeuw$1wh.$_get($1zh)))){
($1zj=$1zi.clone(),$1zg.$1dkeuw$1wh.set($1zh,$1zj), $1zj);
var $1zj;
}
($1zk=$1zh,$1zh=$1zk.successor,$1zk);
var $1zk;
}
return $1zg;
};identityMap$.clone.$crtmm$=function(){return{mod:$CCMM$,$t:{t:IdentityMap,a:{Key$IdentityMap:'Key$IdentityMap',Item$IdentityMap:'Item$IdentityMap'}},ps:[],$cont:IdentityMap,pa:3,d:['ceylon.collection','IdentityMap','$m','clone']};};
identityMap$.defines=function($1zl){
var identityMap$=this;
var $1zm=(0);
while(($1zm<identityMap$.$1dkeuw$1wh.size)){
var $1zn=identityMap$.$1dkeuw$1wh.$_get($1zm);
var $1zo;
while(m$1.nn$(($1zo=$1zn))){
if(($1zo.element.key===$1zl)){
return true;
}
$1zn=$1zo.rest;
}
($1zp=$1zm,$1zm=$1zp.successor,$1zp);
var $1zp;
}
return false;
};identityMap$.defines.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'key',mt:'prm',$t:'Key$IdentityMap'}],$cont:IdentityMap,pa:3,d:['ceylon.collection','IdentityMap','$m','defines']};};
identityMap$.contains=function($1zq){
var identityMap$=this;
var $1zr=(0);
while(($1zr<identityMap$.$1dkeuw$1wh.size)){
var $1zs=identityMap$.$1dkeuw$1wh.$_get($1zr);
var $1zt;
while(m$1.nn$(($1zt=$1zs))){
var $1zu;
if(m$1.nn$(($1zu=$1zt.element.item))&&m$1.$eq$($1zu,$1zq)){
return true;
}
$1zs=$1zt.rest;
}
($1zv=$1zr,$1zr=$1zv.successor,$1zv);
var $1zv;
}
return false;
};identityMap$.contains.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'element',mt:'prm',$t:{t:m$1.$_Object}}],$cont:IdentityMap,pa:3,d:['ceylon.collection','IdentityMap','$m','contains']};};
})(IdentityMap.$$.prototype);
}
return IdentityMap;
}
ex$.$init$IdentityMap=$init$IdentityMap;
$init$IdentityMap();
IdentityMap.inst$$=function($1zw){
var identityMap$=new IdentityMap.$$;
m$1.set_type_args(identityMap$,{Key$IdentityMap:$1zw.$$targs$$.Type$Class.a.Key$IdentityMap,Item$IdentityMap:$1zw.$$targs$$.Type$Class.a.Item$IdentityMap});
m$1.set_type_args(identityMap$,{Element$Iterable:{t:m$1.Entry,a:{Item$Entry:identityMap$.$$targs$$.Item$IdentityMap/*ORALE!Item inv pero Item var*/,Key$Entry:identityMap$.$$targs$$.Key$IdentityMap/*ORALE!Key inv pero Key var*/}},Absent$Iterable:{t:m$1.Null},Element$Category:{t:m$1.$_Object},Element$Collection:{t:m$1.Entry,a:{Item$Entry:identityMap$.$$targs$$.Item$IdentityMap/*ORALE!Item inv pero Item var*/,Key$Entry:identityMap$.$$targs$$.Key$IdentityMap/*ORALE!Key inv pero Key var*/}},Item$Correspondence:identityMap$.$$targs$$.Item$IdentityMap,Key$Correspondence:identityMap$.$$targs$$.Key$IdentityMap});
return identityMap$;
};
IdentityMap.ser$get$=function(ref,o){var n=ref.attribute.qualifiedName;if(n==='ceylon.collection::IdentityMap.hashtable')return o.$1dkeuw$1wf_;
else if(n==='ceylon.collection::IdentityMap.store')return o.$1dkeuw$1wh_;
else if(n==='ceylon.collection::IdentityMap.length')return o.$1dkeuw$1wi_;
else throw new TypeError('unknown attribute');
};
IdentityMap.ser$set$=function(ref,o,i){if(!m$1.is$(ref,{t:m$1.Member$serialization}))throw m$1.AssertionError('unexpected reachable reference');var n=ref.attribute.qualifiedName;
if(n==='ceylon.collection::IdentityMap.hashtable')o.$1dkeuw$1wf_=i;
else if(n==='ceylon.collection::IdentityMap.store')o.$1dkeuw$1wh_=i;
else if(n==='ceylon.collection::IdentityMap.length')o.$1dkeuw$1wi_=i;
else throw new TypeError('unknown attribute');
};
IdentityMap.ser$refs$=function(o){return [m$1.MemberImpl$impl(m$1.OpenValue$jsint(m$1.lmp$(ex$,'ceylon.collection'),o.$prop$get$1dkeuw$1wf)),m$1.MemberImpl$impl(m$1.OpenValue$jsint(m$1.lmp$(ex$,'ceylon.collection'),o.$prop$get$1dkeuw$1wh)),m$1.MemberImpl$impl(m$1.OpenValue$jsint(m$1.lmp$(ex$,'ceylon.collection'),o.$prop$get$1dkeuw$1wi))];
};
function LinkedCell($1dkeuw$1zx,$1dkeuw$1zy,$1dkeuw$1zz,previous,$$targs$$,linkedCell$){
$init$LinkedCell();
if(linkedCell$===undefined)linkedCell$=new LinkedCell.$$;
m$1.set_type_args(linkedCell$,$$targs$$);
linkedCell$.$1dkeuw$1zx_=$1dkeuw$1zx;
linkedCell$.$1dkeuw$1zy_=$1dkeuw$1zy;
linkedCell$.$1dkeuw$1zz_=$1dkeuw$1zz;
linkedCell$.previous_=previous;
CachingCell($1dkeuw$1zx,$1dkeuw$1zy,$1dkeuw$1zz,{Element$CachingCell:linkedCell$.$$targs$$.Element$LinkedCell},linkedCell$);
linkedCell$.$1dkeuw$200_=null;
return linkedCell$;
}
LinkedCell.$crtmm$=function(){return{mod:$CCMM$,'super':{t:CachingCell,a:{Element$CachingCell:'Element$LinkedCell'}},ps:[{nm:'element',mt:'prm',$t:'Element$LinkedCell'},{nm:'keyHash',mt:'prm',$t:{t:m$1.Integer}},{nm:'rest',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},{t:CachingCell,a:{Element$CachingCell:'Element$LinkedCell'}}]}},{nm:'previous',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},{t:LinkedCell,a:{Element$LinkedCell:'Element$LinkedCell'}}]},pa:1025}],tp:{Element$LinkedCell:{}},pa:2048,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:LinkedCell')];},d:['ceylon.collection','LinkedCell']};};
ex$.LinkedCell=LinkedCell;
function $init$LinkedCell(){
if(LinkedCell.$$===undefined){
m$1.initTypeProto(LinkedCell,'ceylon.collection::LinkedCell',$init$CachingCell());
(function(linkedCell$){
m$1.atr$(linkedCell$,'$1dkeuw$1zx',function(){return this.$1dkeuw$1zx_;},undefined,function(){return{mod:$CCMM$,$t:'Element$LinkedCell',$cont:LinkedCell,d:['ceylon.collection','LinkedCell','$at','element$8ang99']};});
m$1.atr$(linkedCell$,'$1dkeuw$1zy',function(){return this.$1dkeuw$1zy_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:LinkedCell,d:['ceylon.collection','LinkedCell','$at','keyHash$70kw6u']};});
m$1.atr$(linkedCell$,'$1dkeuw$1zz',function(){return this.$1dkeuw$1zz_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:CachingCell,a:{Element$CachingCell:'Element$LinkedCell'}}]},$cont:LinkedCell,d:['ceylon.collection','LinkedCell','$at','rest$hy1p2d']};});
m$1.atr$(linkedCell$,'previous',function(){return this.previous_;},function($201){return this.previous_=$201;},function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:LinkedCell,a:{Element$LinkedCell:'Element$LinkedCell'}}]},$cont:LinkedCell,pa:1025,d:['ceylon.collection','LinkedCell','$at','previous']};});
m$1.atr$(linkedCell$,'next',function(){return this.$1dkeuw$200_;},function($202){return this.$1dkeuw$200_=$202;},function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:LinkedCell,a:{Element$LinkedCell:'Element$LinkedCell'}}]},$cont:LinkedCell,pa:1025,d:['ceylon.collection','LinkedCell','$at','next']};});
})(LinkedCell.$$.prototype);
}
return LinkedCell;
}
ex$.$init$LinkedCell=$init$LinkedCell;
$init$LinkedCell();
LinkedCell.inst$$=function($203){
var linkedCell$=new LinkedCell.$$;
m$1.set_type_args(linkedCell$,{Element$LinkedCell:$203.$$targs$$.Type$Class.a.Element$LinkedCell});
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
function LinkedCellIterator($1dkeuw$204,$$targs$$,linkedCellIterator$){
$init$LinkedCellIterator();
if(linkedCellIterator$===undefined)linkedCellIterator$=new LinkedCellIterator.$$;
m$1.set_type_args(linkedCellIterator$,$$targs$$);
linkedCellIterator$.$1dkeuw$204_=$1dkeuw$204;
m$1.Iterator({Element$Iterator:$$targs$$.Element$LinkedCellIterator/*ORALE!Element inv pero Element var*/},linkedCellIterator$);
return linkedCellIterator$;
}
LinkedCellIterator.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'iter',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},{t:LinkedCell,a:{Element$LinkedCell:'Element$LinkedCellIterator'}}]},pa:1024}],tp:{Element$LinkedCellIterator:{}},sts:[{t:m$1.Iterator,a:{Element$Iterator:'Element$LinkedCellIterator'}}],d:['ceylon.collection','LinkedCellIterator']};};
ex$.LinkedCellIterator=LinkedCellIterator;
function $init$LinkedCellIterator(){
if(LinkedCellIterator.$$===undefined){
m$1.initTypeProto(LinkedCellIterator,'ceylon.collection::LinkedCellIterator',m$1.Basic,m$1.Iterator);
(function(linkedCellIterator$){
m$1.atr$(linkedCellIterator$,'$1dkeuw$204',function(){return this.$1dkeuw$204_;},function($205){return this.$1dkeuw$204_=$205;},function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:LinkedCell,a:{Element$LinkedCell:'Element$LinkedCellIterator'}}]},$cont:LinkedCellIterator,pa:1024,d:['ceylon.collection','LinkedCellIterator','$at','iter$rxmm2v']};});
linkedCellIterator$.next=function(){
var linkedCellIterator$=this;
var $206;
if(m$1.nn$(($206=linkedCellIterator$.$1dkeuw$204))){
linkedCellIterator$.$1dkeuw$204=$206.next;
return $206.element;
}
return m$1.finished();
};linkedCellIterator$.next.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:['Element$LinkedCellIterator',{t:m$1.Finished}]},ps:[],$cont:LinkedCellIterator,pa:3,d:['ceylon.collection','LinkedCellIterator','$m','next']};};
})(LinkedCellIterator.$$.prototype);
}
return LinkedCellIterator;
}
ex$.$init$LinkedCellIterator=$init$LinkedCellIterator;
$init$LinkedCellIterator();
function group($207,$208,$bkwzr$){
var $209=HashMap(undefined,undefined,undefined,{Key$HashMap:$bkwzr$.Group$group,Item$HashMap:{t:ArrayList,a:{Element$ArrayList:$bkwzr$.Element$group}}});
var $20b;for(var $20a=$207.iterator();($20b=$20a.next())!==m$1.finished();){
var $20c=$208($20b);
var $20d;
if(m$1.nn$(($20d=$209.$_get($20c)))){
$20d.add($20b);
}
else{
var $20e=ArrayList(undefined,undefined,undefined,{Element$ArrayList:$bkwzr$.Element$group});
$20e.add($20b);
($20f=$20e,$209.put($20c,$20f), $20f);
var $20f;
}
}
function $20g($20h,$20i){
var $20j;
m$1.asrt$((m$1.is$(($20j=$20i.sequence()),{t:m$1.Sequence,a:{Element$Sequence:$bkwzr$.Element$group/*ORALE!Element inv pero Element var*/}})),"Assertion failed: \'is [Element+] result = list.sequence()\' at group.ceylon (30:14-30:53)",'30:8-30:54','group.ceylon');
return $20j;
};$20g.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Sequence,a:{Element$Sequence:$bkwzr$.Element$group}},ps:[{nm:'group',mt:'prm',$t:$bkwzr$.Group$group},{nm:'list',mt:'prm',$t:{t:ArrayList,a:{Element$ArrayList:$bkwzr$.Element$group}}}],$cont:group,d:['ceylon.collection','group','$m','mapping$dp6ds0']};};
return $209.mapItems(m$1.jsc$3(0,$20g),{Result$mapItems:{t:m$1.Sequence,a:{Element$Sequence:$bkwzr$.Element$group/*ORALE!Element inv pero Element var*/}}});
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
function $20k(){
var unlinked$=new $20k.$$;Stability(unlinked$);
return unlinked$;
};$20k.$crtmm$=function(){return{mod:$CCMM$,'super':{t:Stability},d:['ceylon.collection','unlinked']};};
function $init$unlinked(){
if($20k.$$===undefined){
m$1.initTypeProto($20k,'ceylon.collection::unlinked',$init$Stability());
}
return $20k;
}
ex$.$init$unlinked=$init$unlinked;
$init$unlinked();
var $20m;
function unlinked(){
if($20m===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'unlinked\' before it was set"),'2:0-2:44','Stability.ceylon');
if($20m===undefined){$20m=m$1.INIT$;$20m=$init$unlinked()();$20m.$crtmm$=unlinked.$crtmm$;}
return $20m;
}
ex$.unlinked=unlinked;
unlinked.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$init$unlinked()},pa:1,d:['ceylon.collection','unlinked']};};
$prop$getUnlinked=unlinked;
ex$.$prop$getUnlinked=$prop$getUnlinked;
function $20n(){
var linked$=new $20n.$$;Stability(linked$);
return linked$;
};$20n.$crtmm$=function(){return{mod:$CCMM$,'super':{t:Stability},d:['ceylon.collection','linked']};};
function $init$linked(){
if($20n.$$===undefined){
m$1.initTypeProto($20n,'ceylon.collection::linked',$init$Stability());
}
return $20n;
}
ex$.$init$linked=$init$linked;
$init$linked();
var $20p;
function linked(){
if($20p===m$1.INIT$)m$1.throwexc(m$1.InitializationError("Cyclic initialization trying to read the value of \'linked\' before it was set"),'3:0-3:42','Stability.ceylon');
if($20p===undefined){$20p=m$1.INIT$;$20p=$init$linked()();$20p.$crtmm$=linked.$crtmm$;}
return $20p;
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
mutableList$.clone={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:MutableList,a:{Element$MutableList:'Element$MutableList'}},ps:[],$cont:MutableList,pa:7,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:MutableList:$m:clone')];},d:['ceylon.collection','MutableList','$m','clone']};}};mutableList$.swap=function($20q,$20r){
var mutableList$=this;
m$1.asrt$((($20s=$20q,$20s.notSmallerThan((0))&&$20s.smallerThan(mutableList$.size))&&($20t=$20r,$20t.notSmallerThan((0))&&$20t.smallerThan(mutableList$.size))),"index may not be negative or greater than the\nlast index in the list: \'0<=i<size, 0<=j<size\' at MutableList.ceylon (30:15-30:36)",'28:8-30:37','MutableList.ceylon');
if(!m$1.$eq$($20q,$20r)){
var $20u,$20v;
m$1.asrt$((m$1.is$(($20u=mutableList$.getFromFirst($20q)),mutableList$.$$targs$$.Element$MutableList)&&m$1.is$(($20v=mutableList$.getFromFirst($20r)),mutableList$.$$targs$$.Element$MutableList)),"Assertion failed: \'is Element x = getFromFirst(i),\n                    is Element y = getFromFirst(j)\' at MutableList.ceylon (32:19-33:50)",'32:12-33:51','MutableList.ceylon');
mutableList$.set($20q,$20v);
mutableList$.set($20r,$20u);
}
};mutableList$.swap.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'i',mt:'prm',$t:{t:m$1.Integer}},{nm:'j',mt:'prm',$t:{t:m$1.Integer}}],$cont:MutableList,pa:11,d:['ceylon.collection','MutableList','$m','swap']};};
mutableList$.move=function($20w,$20x){
var mutableList$=this;
m$1.asrt$((($20y=$20w,$20y.notSmallerThan((0))&&$20y.smallerThan(mutableList$.size))&&($20z=$20x,$20z.notSmallerThan((0))&&$20z.smallerThan(mutableList$.size))),"index may not be negative or greater than the\nlast index in the list: \'0<=i<size, 0<=j<size\' at MutableList.ceylon (42:15-42:36)",'40:8-42:37','MutableList.ceylon');
if(!m$1.$eq$($20w,$20x)){
var $210;
m$1.asrt$((m$1.is$(($210=mutableList$.$_delete($20w)),mutableList$.$$targs$$.Element$MutableList)),"Assertion failed: \'is Element x = delete(i)\' at MutableList.ceylon (44:19-44:44)",'44:12-44:45','MutableList.ceylon');
mutableList$.insert($20x,$210);
}
};mutableList$.move.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'i',mt:'prm',$t:{t:m$1.Integer}},{nm:'j',mt:'prm',$t:{t:m$1.Integer}}],$cont:MutableList,pa:11,d:['ceylon.collection','MutableList','$m','move']};};
mutableList$.removeWhere=function($211){
var mutableList$=this;
var $212=(0);
var $213=(0);
while(($212<mutableList$.size)){
var $214;
if(m$1.nn$(($214=mutableList$.getFromFirst($212)))&&$211($214)){
mutableList$.$_delete($212);
($215=$213,$213=$215.successor,$215);
var $215;
}
else{
($216=$212,$212=$216.successor,$216);
var $216;
}
}
return $213;
};mutableList$.removeWhere.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'selecting',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Arguments$Callable:{t:'T',l:[{t:'i',l:['Element$MutableList',{t:m$1.$_Object}]}]},Return$Callable:{t:m$1.$_Boolean}}},$rt:{t:m$1.$_Boolean},ps:[{nm:'element',mt:'prm',$t:{t:'i',l:['Element$MutableList',{t:m$1.$_Object}]}}]}],$cont:MutableList,pa:9,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:MutableList:$m:removeWhere')];},d:['ceylon.collection','MutableList','$m','removeWhere']};};
mutableList$.prune=function(){
var mutableList$=this;
var $217=(0);
while(($217<mutableList$.size)){
if(!m$1.nn$(mutableList$.getFromFirst($217))){
mutableList$.$_delete($217);
}
else{
($218=$217,$217=$218.successor,$218);
var $218;
}
}
};mutableList$.prune.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[],$cont:MutableList,pa:11,d:['ceylon.collection','MutableList','$m','prune']};};
mutableList$.remove=function($219){var mutableList$=this;
return mutableList$.removeWhere(m$1.jsc$2(($21a=$219,m$1.jsc$3($21a,$21a.equals)),[{nm:'that',mt:'prm',$t:{t:m$1.$_Object}}],{}));
var $21a;
};
mutableList$.remove.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'element',mt:'prm',$t:{t:'i',l:['Element$MutableList',{t:m$1.$_Object}]}}],$cont:MutableList,pa:11,d:['ceylon.collection','MutableList','$m','remove']};};
mutableList$.findAndRemoveFirst=function($21b){
var mutableList$=this;
var $21c;
if(m$1.nn$(($21c=mutableList$.firstIndexWhere($21b)))){
return mutableList$.$_delete($21c);
}
else{
return null;
}
};mutableList$.findAndRemoveFirst.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$MutableList']},ps:[{nm:'selecting',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Arguments$Callable:{t:'T',l:[{t:'i',l:['Element$MutableList',{t:m$1.$_Object}]}]},Return$Callable:{t:m$1.$_Boolean}}},$rt:{t:m$1.$_Boolean},ps:[{nm:'element',mt:'prm',$t:{t:'i',l:['Element$MutableList',{t:m$1.$_Object}]}}]}],$cont:MutableList,pa:9,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:MutableList:$m:findAndRemoveFirst')];},d:['ceylon.collection','MutableList','$m','findAndRemoveFirst']};};
mutableList$.removeFirst=function($21d){var mutableList$=this;
return m$1.nn$(mutableList$.findAndRemoveFirst(m$1.jsc$2(($21e=$21d,m$1.jsc$3($21e,$21e.equals)),[{nm:'that',mt:'prm',$t:{t:m$1.$_Object}}],{})));
var $21e;
};
mutableList$.removeFirst.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'element',mt:'prm',$t:{t:'i',l:['Element$MutableList',{t:m$1.$_Object}]}}],$cont:MutableList,pa:11,d:['ceylon.collection','MutableList','$m','removeFirst']};};
mutableList$.findAndRemoveLast=function($21f){
var mutableList$=this;
var $21g;
if(m$1.nn$(($21g=mutableList$.lastIndexWhere($21f)))){
return mutableList$.$_delete($21g);
}
else{
return null;
}
};mutableList$.findAndRemoveLast.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$MutableList']},ps:[{nm:'selecting',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Arguments$Callable:{t:'T',l:[{t:'i',l:['Element$MutableList',{t:m$1.$_Object}]}]},Return$Callable:{t:m$1.$_Boolean}}},$rt:{t:m$1.$_Boolean},ps:[{nm:'element',mt:'prm',$t:{t:'i',l:['Element$MutableList',{t:m$1.$_Object}]}}]}],$cont:MutableList,pa:9,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:MutableList:$m:findAndRemoveLast')];},d:['ceylon.collection','MutableList','$m','findAndRemoveLast']};};
mutableList$.removeLast=function($21h){var mutableList$=this;
return m$1.nn$(mutableList$.findAndRemoveLast(m$1.jsc$2(($21i=$21h,m$1.jsc$3($21i,$21i.equals)),[{nm:'that',mt:'prm',$t:{t:m$1.$_Object}}],{})));
var $21i;
};
mutableList$.removeLast.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'element',mt:'prm',$t:{t:'i',l:['Element$MutableList',{t:m$1.$_Object}]}}],$cont:MutableList,pa:11,d:['ceylon.collection','MutableList','$m','removeLast']};};
mutableList$.replaceWhere=function($21j,$21k){
var mutableList$=this;
var $21l=(0);
var $21m=(0);
while(($21l<mutableList$.size)){
var $21n;
if(m$1.nn$(($21n=mutableList$.getFromFirst($21l)))&&$21j($21n)){
mutableList$.set($21l,$21k);
($21o=$21m,$21m=$21o.successor,$21o);
var $21o;
}
($21p=$21l,$21l=$21p.successor,$21p);
var $21p;
}
return $21m;
};mutableList$.replaceWhere.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'selecting',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Arguments$Callable:{t:'T',l:[{t:'i',l:['Element$MutableList',{t:m$1.$_Object}]}]},Return$Callable:{t:m$1.$_Boolean}}},$rt:{t:m$1.$_Boolean},ps:[{nm:'element',mt:'prm',$t:{t:'i',l:['Element$MutableList',{t:m$1.$_Object}]}}]},{nm:'replacement',mt:'prm',$t:'Element$MutableList'}],$cont:MutableList,pa:9,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:MutableList:$m:replaceWhere')];},d:['ceylon.collection','MutableList','$m','replaceWhere']};};
mutableList$.infill=function($21q){
var mutableList$=this;
var $21r=(0);
while(($21r<mutableList$.size)){
if(!m$1.nn$(mutableList$.getFromFirst($21r))){
mutableList$.set($21r,$21q);
}
($21s=$21r,$21r=$21s.successor,$21s);
var $21s;
}
};mutableList$.infill.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'replacement',mt:'prm',$t:'Element$MutableList'}],$cont:MutableList,pa:11,d:['ceylon.collection','MutableList','$m','infill']};};
mutableList$.$_replace=function($21t,$21u){var mutableList$=this;
return mutableList$.replaceWhere(m$1.jsc$2(($21v=$21t,m$1.jsc$3($21v,$21v.equals)),[{nm:'that',mt:'prm',$t:{t:m$1.$_Object}}],{}),$21u);
var $21v;
};
mutableList$.$_replace.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'element',mt:'prm',$t:{t:'i',l:['Element$MutableList',{t:m$1.$_Object}]}},{nm:'replacement',mt:'prm',$t:'Element$MutableList'}],$cont:MutableList,pa:11,d:['ceylon.collection','MutableList','$m','replace']};};
mutableList$.findAndReplaceFirst=function($21w,$21x){
var mutableList$=this;
var $21y;
if(m$1.nn$(($21y=mutableList$.firstIndexWhere($21w)))){
var $21z=mutableList$.getFromFirst($21y);
mutableList$.set($21y,$21x);
return $21z;
}
else{
return null;
}
};mutableList$.findAndReplaceFirst.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$MutableList']},ps:[{nm:'selecting',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Arguments$Callable:{t:'T',l:[{t:'i',l:['Element$MutableList',{t:m$1.$_Object}]}]},Return$Callable:{t:m$1.$_Boolean}}},$rt:{t:m$1.$_Boolean},ps:[{nm:'element',mt:'prm',$t:{t:'i',l:['Element$MutableList',{t:m$1.$_Object}]}}]},{nm:'replacement',mt:'prm',$t:'Element$MutableList'}],$cont:MutableList,pa:9,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:MutableList:$m:findAndReplaceFirst')];},d:['ceylon.collection','MutableList','$m','findAndReplaceFirst']};};
mutableList$.replaceFirst=function($220,$221){var mutableList$=this;
return m$1.nn$(mutableList$.findAndReplaceFirst(m$1.jsc$2(($222=$220,m$1.jsc$3($222,$222.equals)),[{nm:'that',mt:'prm',$t:{t:m$1.$_Object}}],{}),$221));
var $222;
};
mutableList$.replaceFirst.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'element',mt:'prm',$t:{t:'i',l:['Element$MutableList',{t:m$1.$_Object}]}},{nm:'replacement',mt:'prm',$t:'Element$MutableList'}],$cont:MutableList,pa:11,d:['ceylon.collection','MutableList','$m','replaceFirst']};};
mutableList$.findAndReplaceLast=function($223,$224){
var mutableList$=this;
var $225;
if(m$1.nn$(($225=mutableList$.lastIndexWhere($223)))){
var $226=mutableList$.getFromFirst($225);
mutableList$.set($225,$224);
return $226;
}
else{
return null;
}
};mutableList$.findAndReplaceLast.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$MutableList']},ps:[{nm:'selecting',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Arguments$Callable:{t:'T',l:[{t:'i',l:['Element$MutableList',{t:m$1.$_Object}]}]},Return$Callable:{t:m$1.$_Boolean}}},$rt:{t:m$1.$_Boolean},ps:[{nm:'element',mt:'prm',$t:{t:'i',l:['Element$MutableList',{t:m$1.$_Object}]}}]},{nm:'replacement',mt:'prm',$t:'Element$MutableList'}],$cont:MutableList,pa:9,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:MutableList:$m:findAndReplaceLast')];},d:['ceylon.collection','MutableList','$m','findAndReplaceLast']};};
mutableList$.replaceLast=function($227,$228){var mutableList$=this;
return m$1.nn$(mutableList$.findAndReplaceLast(m$1.jsc$2(($229=$227,m$1.jsc$3($229,$229.equals)),[{nm:'that',mt:'prm',$t:{t:m$1.$_Object}}],{}),$228));
var $229;
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
listMutator$.add={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'element',mt:'prm',$t:'Element$ListMutator'}],$cont:ListMutator,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:ListMutator:$m:add')];},d:['ceylon.collection','ListMutator','$m','add']};}};listMutator$.addAll=function($22a){
var listMutator$=this;
var $22c;for(var $22b=$22a.iterator();($22c=$22b.next())!==m$1.finished();){
listMutator$.add($22c);
}
};listMutator$.addAll.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'elements',mt:'prm',$t:{t:m$1.Iterable,a:{Element$Iterable:'Element$ListMutator',Absent$Iterable:{t:m$1.Null}}}}],$cont:ListMutator,pa:9,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:ListMutator:$m:addAll')];},d:['ceylon.collection','ListMutator','$m','addAll']};};
listMutator$.set={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'index',mt:'prm',$t:{t:m$1.Integer}},{nm:'element',mt:'prm',$t:'Element$ListMutator'}],$cont:ListMutator,pa:7,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:ListMutator:$m:set'),m$1.$_throws("AssertionError","if the given index is out of bounds, that\nis, if `index<0` or if `index>lastIndex`")];},d:['ceylon.collection','ListMutator','$m','set']};}};listMutator$.insert={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'index',mt:'prm',$t:{t:m$1.Integer}},{nm:'element',mt:'prm',$t:'Element$ListMutator'}],$cont:ListMutator,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:ListMutator:$m:insert'),m$1.$_throws("AssertionError","if the given index is out of bounds, that\nis, if `index<0` or if `index>lastIndex+1`")];},d:['ceylon.collection','ListMutator','$m','insert']};}};listMutator$.insertAll=function($22d,$22e){
var listMutator$=this;
var $22f=$22d;
var $22h;for(var $22g=$22e.iterator();($22h=$22g.next())!==m$1.finished();){
listMutator$.insert(($22i=$22f,$22f=$22i.successor,$22i),$22h);
var $22i;
}
};listMutator$.insertAll.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'index',mt:'prm',$t:{t:m$1.Integer}},{nm:'elements',mt:'prm',$t:{t:m$1.Iterable,a:{Element$Iterable:'Element$ListMutator',Absent$Iterable:{t:m$1.Null}}}}],$cont:ListMutator,pa:9,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:ListMutator:$m:insertAll'),m$1.$_throws(m$1.openClass$jsint(m$1.fmp$('ceylon.language','1.2.3','$'),m$1.AssertionError),"if the given index is out of bounds, that\nis, if `index<0` or if `index>lastIndex+1`")];},d:['ceylon.collection','ListMutator','$m','insertAll']};};
listMutator$.$_delete={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'index',mt:'prm',$t:{t:m$1.Integer}}],$cont:ListMutator,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:ListMutator:$m:delete')];},d:['ceylon.collection','ListMutator','$m','delete']};}};listMutator$.remove={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'element',mt:'prm',$t:{t:'i',l:['Element$ListMutator',{t:m$1.$_Object}]}}],$cont:ListMutator,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:ListMutator:$m:remove')];},d:['ceylon.collection','ListMutator','$m','remove']};}};listMutator$.removeAll=function($22j){
var listMutator$=this;
var $22k=(0);
var $22m;for(var $22l=$22j.iterator();($22m=$22l.next())!==m$1.finished();){
($22k=$22k.plus(listMutator$.remove($22m)));
}
return $22k;
};listMutator$.removeAll.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'elements',mt:'prm',$t:{t:m$1.Iterable,a:{Element$Iterable:{t:'i',l:['Element$ListMutator',{t:m$1.$_Object}]},Absent$Iterable:{t:m$1.Null}}}}],$cont:ListMutator,pa:9,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:ListMutator:$m:removeAll')];},d:['ceylon.collection','ListMutator','$m','removeAll']};};
listMutator$.removeFirst={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'element',mt:'prm',$t:{t:'i',l:['Element$ListMutator',{t:m$1.$_Object}]}}],$cont:ListMutator,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:ListMutator:$m:removeFirst')];},d:['ceylon.collection','ListMutator','$m','removeFirst']};}};listMutator$.removeLast={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'element',mt:'prm',$t:{t:'i',l:['Element$ListMutator',{t:m$1.$_Object}]}}],$cont:ListMutator,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:ListMutator:$m:removeLast')];},d:['ceylon.collection','ListMutator','$m','removeLast']};}};listMutator$.prune={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[],$cont:ListMutator,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:ListMutator:$m:prune')];},d:['ceylon.collection','ListMutator','$m','prune']};}};listMutator$.$_replace={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'element',mt:'prm',$t:{t:'i',l:['Element$ListMutator',{t:m$1.$_Object}]}},{nm:'replacement',mt:'prm',$t:'Element$ListMutator'}],$cont:ListMutator,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:ListMutator:$m:replace')];},d:['ceylon.collection','ListMutator','$m','replace']};}};listMutator$.replaceFirst={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'element',mt:'prm',$t:{t:'i',l:['Element$ListMutator',{t:m$1.$_Object}]}},{nm:'replacement',mt:'prm',$t:'Element$ListMutator'}],$cont:ListMutator,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:ListMutator:$m:replaceFirst')];},d:['ceylon.collection','ListMutator','$m','replaceFirst']};}};listMutator$.replaceLast={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'element',mt:'prm',$t:{t:'i',l:['Element$ListMutator',{t:m$1.$_Object}]}},{nm:'replacement',mt:'prm',$t:'Element$ListMutator'}],$cont:ListMutator,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:ListMutator:$m:replaceLast')];},d:['ceylon.collection','ListMutator','$m','replaceLast']};}};listMutator$.infill={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'replacement',mt:'prm',$t:'Element$ListMutator'}],$cont:ListMutator,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:ListMutator:$m:infill')];},d:['ceylon.collection','ListMutator','$m','infill']};}};listMutator$.swap={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'i',mt:'prm',$t:{t:m$1.Integer}},{nm:'j',mt:'prm',$t:{t:m$1.Integer}}],$cont:ListMutator,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:ListMutator:$m:swap'),m$1.$_throws("AssertionError","if either of the given indices is out of bounds")];},d:['ceylon.collection','ListMutator','$m','swap']};}};listMutator$.move={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'i',mt:'prm',$t:{t:m$1.Integer}},{nm:'j',mt:'prm',$t:{t:m$1.Integer}}],$cont:ListMutator,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:ListMutator:$m:move'),m$1.$_throws("AssertionError","if either of the given indices is out of bounds")];},d:['ceylon.collection','ListMutator','$m','move']};}};listMutator$.clear=function(){var listMutator$=this;
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
listMutator$.deleteSpan=function($22n,$22o){
var listMutator$=this;
var $22q=$22n,$22p=$22o,$22r=$22q.compare($22p),$22s=$22r===m$1.smaller()?'successor':'predecessor';for(var $22t=m$1.eorl$($22r);$22t($22p,$22q);$22q=$22q[$22s]){
listMutator$.$_delete($22q);
}
};listMutator$.deleteSpan.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'from',mt:'prm',$t:{t:m$1.Integer}},{nm:'to',mt:'prm',$t:{t:m$1.Integer}}],$cont:ListMutator,pa:9,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:ListMutator:$m:deleteSpan')];},d:['ceylon.collection','ListMutator','$m','deleteSpan']};};
listMutator$.deleteMeasure=function($22u,$22v){
var listMutator$=this;
var $22x=$22u,$22y=$22v;for(var $22z=0;$22z<$22y;$22z++,($22x=$22x.successor)){
listMutator$.$_delete($22x);
}
};listMutator$.deleteMeasure.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'from',mt:'prm',$t:{t:m$1.Integer}},{nm:'length',mt:'prm',$t:{t:m$1.Integer}}],$cont:ListMutator,pa:9,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:ListMutator:$m:deleteMeasure')];},d:['ceylon.collection','ListMutator','$m','deleteMeasure']};};
listMutator$.truncate=function($230){var listMutator$=this;
return listMutator$.deleteMeasure($230,listMutator$.size.minus($230));
};
listMutator$.truncate.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'size',mt:'prm',$t:{t:m$1.Integer}}],$cont:ListMutator,pa:9,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:ListMutator:$m:truncate'),m$1.$_throws(m$1.openClass$jsint(m$1.fmp$('ceylon.language','1.2.3','$'),m$1.AssertionError),"if `size<0`")];},d:['ceylon.collection','ListMutator','$m','truncate']};};
listMutator$.clone={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:ListMutator,a:{Element$ListMutator:'Element$ListMutator'}},ps:[],$cont:ListMutator,pa:7,d:['ceylon.collection','ListMutator','$m','clone']};}};
})(ListMutator.$$.prototype);
}
return ListMutator;
}
ex$.$init$ListMutator=$init$ListMutator;
$init$ListMutator();
function measureToSpan($231,$232){return ($233=(($232<=0)?m$1.tpl$([(-1),(-1)]):null),m$1.nn$($233)?$233:m$1.tpl$([$231,$231.plus($232).minus(1)]));
var $233;
};
measureToSpan.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'T',l:[{t:m$1.Integer},{t:m$1.Integer}]},ps:[{nm:'from',mt:'prm',$t:{t:m$1.Integer}},{nm:'length',mt:'prm',$t:{t:m$1.Integer}}],an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:measureToSpan')];},d:['ceylon.collection','measureToSpan']};};
function spanToMeasure($234,$235,$236){
if((($236==(0))||(($234<0)&&($235<0)))){
return m$1.tpl$([0,0,false]);
}
var $237=($234>$235);
var $238=largest(0,($239=($237?$235:null),m$1.nn$($239)?$239:$234));
var $239;
var $23a=smallest($236.minus(1),($23b=($237?$234:null),m$1.nn$($23b)?$23b:$235));
var $23b;
return m$1.tpl$([$238,(1).plus($23a).minus($238),$237]);
};spanToMeasure.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'T',l:[{t:m$1.Integer},{t:m$1.Integer},{t:m$1.$_Boolean}]},ps:[{nm:'from',mt:'prm',$t:{t:m$1.Integer}},{nm:'to',mt:'prm',$t:{t:m$1.Integer}},{nm:'size',mt:'prm',$t:{t:m$1.Integer}}],an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:spanToMeasure')];},d:['ceylon.collection','spanToMeasure']};};
function largest($23c,$23d){return ($23e=(($23c>$23d)?$23c:null),m$1.nn$($23e)?$23e:$23d);
var $23e;
};
largest.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'x',mt:'prm',$t:{t:m$1.Integer}},{nm:'y',mt:'prm',$t:{t:m$1.Integer}}],d:['ceylon.collection','largest']};};
function smallest($23f,$23g){return ($23h=(($23f<$23g)?$23f:null),m$1.nn$($23h)?$23h:$23g);
var $23h;
};
smallest.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'x',mt:'prm',$t:{t:m$1.Integer}},{nm:'y',mt:'prm',$t:{t:m$1.Integer}}],d:['ceylon.collection','smallest']};};
function HashMap$$c($$targs$$,hashMap$){
m$1.set_type_args(hashMap$,$$targs$$);
MutableMap({Key$MutableMap:$$targs$$.Key$HashMap,Item$MutableMap:$$targs$$.Item$HashMap},hashMap$);
}
function HashMap(){return HashMap$c_$c$.apply(undefined,arguments);}
function HashMap$c_$c$$$a($23i,$23j,$23k,$$targs$$,hashMap$){
if($23i===undefined){$23i=linked();}
if($23j===undefined){$23j=Hashtable();}
if($23k===undefined){$23k=m$1.empty();}
hashMap$.$1dkeuw$23l_=null;
hashMap$.$1dkeuw$23m_=null;
hashMap$.$1dkeuw$23n_=$23i;
m$1.atr$(hashMap$,'$1dkeuw$23n',function(){return this.$1dkeuw$23n_;},undefined,function(){return{mod:$CCMM$,$t:{t:Stability},$cont:HashMap,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:HashMap:$at:stability$b6pnod')];},d:['ceylon.collection','HashMap','$at','stability$b6pnod']};});
hashMap$.$1dkeuw$23o_=$23j;
m$1.atr$(hashMap$,'$1dkeuw$23o',function(){return this.$1dkeuw$23o_;},undefined,function(){return{mod:$CCMM$,$t:{t:Hashtable},$cont:HashMap,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:HashMap:$at:hashtable$uda49w')];},d:['ceylon.collection','HashMap','$at','hashtable$uda49w']};});
hashMap$.$1dkeuw$23p_=$23k;
m$1.atr$(hashMap$,'$1dkeuw$23p',function(){return this.$1dkeuw$23p_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Iterable,a:{Element$Iterable:{t:m$1.Entry,a:{Item$Entry:'Item$HashMap',Key$Entry:'Key$HashMap'}},Absent$Iterable:{t:m$1.Null}}},$cont:HashMap,pa:3,an:function(){return[m$1.doc("The initial entries in the map.")];},d:['ceylon.collection','HashMap','$at','entries$ujasno']};});
hashMap$.$1dkeuw$23q_=(0);
m$1.atr$(hashMap$,'$1dkeuw$23q',function(){return this.$1dkeuw$23q_;},function($23r){return this.$1dkeuw$23q_=$23r;},function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:HashMap,pa:1027,an:function(){return[m$1.doc("Number of elements in this map.")];},d:['ceylon.collection','HashMap','$at','length$g7vp02']};});
hashMap$.$1dkeuw$23s_=m$1.is$($23k,{t:m$1.Collection,a:{Element$Collection:{t:m$1.Anything}}});
m$1.atr$(hashMap$,'$1dkeuw$23s',function(){return this.$1dkeuw$23s_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},$cont:HashMap,pa:3,d:['ceylon.collection','HashMap','$at','accurateInitialCapacity$qwzvpy']};});
var $23t=($23u=(hashMap$.$1dkeuw$23s?$23j.initialCapacityForSize($23k.size):null),m$1.nn$($23u)?$23u:$23j.initialCapacityForUnknownSize());
$prop$get$23t={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:HashMap,d:['ceylon.collection','HashMap','$cn','$def','$at','initialCapacity$vvzb8c']};}};
$prop$get$23t.get=function(){return $23t};
var $23u;
hashMap$.$1dkeuw$23v_=cachingEntryStore($23t,{Key$cachingEntryStore:hashMap$.$$targs$$.Key$HashMap,Item$cachingEntryStore:hashMap$.$$targs$$.Item$HashMap});
m$1.atr$(hashMap$,'$1dkeuw$23v',function(){return this.$1dkeuw$23v_;},function($23w){return this.$1dkeuw$23v_=$23w;},function(){return{mod:$CCMM$,$t:{t:m$1.$_Array,a:{Element$Array:{t:'u',l:[{t:m$1.Null},{t:CachingCell,a:{Element$CachingCell:{t:m$1.Entry,a:{Item$Entry:'Item$HashMap',Key$Entry:'Key$HashMap'}}}}]}}},$cont:HashMap,pa:1027,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:HashMap:$at:store$9kaiqz')];},d:['ceylon.collection','HashMap','$at','store$9kaiqz']};});
return hashMap$;
};
function HashMap$c_$c$($23i,$23j,$23k,$$targs$$,hashMap$){
$init$HashMap();
if(hashMap$===undefined)hashMap$=new HashMap.$$;
if($23i===undefined){$23i=linked();}
if($23j===undefined){$23j=Hashtable();}
if($23k===undefined){$23k=m$1.empty();}
HashMap$$c($$targs$$,hashMap$);
HashMap$c_$c$$$a($23i,$23j,$23k,$$targs$$,hashMap$);
var $23y;for(var $23x=hashMap$.$1dkeuw$23p.iterator();($23y=$23x.next())!==m$1.finished();){
if(hashMap$.$1dkeuw$23z(hashMap$.$1dkeuw$23v,$23y)){
($240=hashMap$.$1dkeuw$23q,hashMap$.$1dkeuw$23q=$240.successor,$240);
var $240;
}
}
if(!hashMap$.$1dkeuw$23s){
hashMap$.$1dkeuw$241();
}
return hashMap$;
};
HashMap$c_$c$.$crtmm$=function(){return{mod:$CCMM$,ps:[{nm:'stability',mt:'prm',def:1,$t:{t:Stability},an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:HashMap:$cn:$def:$at:stability$8yo5l5')];}},{nm:'hashtable',mt:'prm',def:1,$t:{t:Hashtable},an:function(){return[m$1.doc("Performance-related settings for the backing array.")];}},{nm:'entries',mt:'prm',def:1,$t:{t:m$1.Iterable,a:{Element$Iterable:{t:m$1.Entry,a:{Item$Entry:'Item$HashMap',Key$Entry:'Key$HashMap'}},Absent$Iterable:{t:m$1.Null}}},an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:HashMap:$cn:$def:$at:entries$kcfg1y')];}}],$cont:HashMap,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:HashMap:$cn:$def')];},d:['ceylon.collection','HashMap','$cn','$def']};};
HashMap.HashMap$c_$c$=HashMap$c_$c$;
ex$.HashMap$c_$c$=HashMap$c_$c$;
function HashMap$c_copy$$a($242,$243,$244,$$targs$$,hashMap$){
if($243===undefined){$243=$242.$1dkeuw$23n;}
if($244===undefined){$244=Hashtable();}
hashMap$.$1dkeuw$23l_=null;
hashMap$.$1dkeuw$23m_=null;
hashMap$.$1dkeuw$23n_=$243;
m$1.atr$(hashMap$,'$1dkeuw$23n',function(){return this.$1dkeuw$23n_;},undefined,function(){return{mod:$CCMM$,$t:{t:Stability},$cont:HashMap,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:HashMap:$at:stability$b6pnod')];},d:['ceylon.collection','HashMap','$at','stability$b6pnod']};});
hashMap$.$1dkeuw$23o_=$244;
m$1.atr$(hashMap$,'$1dkeuw$23o',function(){return this.$1dkeuw$23o_;},undefined,function(){return{mod:$CCMM$,$t:{t:Hashtable},$cont:HashMap,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:HashMap:$at:hashtable$uda49w')];},d:['ceylon.collection','HashMap','$at','hashtable$uda49w']};});
hashMap$.$1dkeuw$23s_=true;
m$1.atr$(hashMap$,'$1dkeuw$23s',function(){return this.$1dkeuw$23s_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},$cont:HashMap,pa:3,d:['ceylon.collection','HashMap','$at','accurateInitialCapacity$qwzvpy']};});
hashMap$.$1dkeuw$23v_=cachingEntryStore($242.$1dkeuw$23v.size,{Key$cachingEntryStore:hashMap$.$$targs$$.Key$HashMap,Item$cachingEntryStore:hashMap$.$$targs$$.Item$HashMap});
m$1.atr$(hashMap$,'$1dkeuw$23v',function(){return this.$1dkeuw$23v_;},function($245){return this.$1dkeuw$23v_=$245;},function(){return{mod:$CCMM$,$t:{t:m$1.$_Array,a:{Element$Array:{t:'u',l:[{t:m$1.Null},{t:CachingCell,a:{Element$CachingCell:{t:m$1.Entry,a:{Item$Entry:'Item$HashMap',Key$Entry:'Key$HashMap'}}}}]}}},$cont:HashMap,pa:1027,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:HashMap:$at:store$9kaiqz')];},d:['ceylon.collection','HashMap','$at','store$9kaiqz']};});
if(m$1.$eq$($243,unlinked())){
hashMap$.$1dkeuw$23p_=m$1.empty();
hashMap$.$1dkeuw$23q=$242.$1dkeuw$23q;
var $246=(0);
$prop$get$246={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:HashMap,pa:1024,d:['ceylon.collection','HashMap','$cn','copy','$at','index$3a26oa']};}};
$prop$get$246.get=function(){return $246};
while(($246<$242.$1dkeuw$23v.size)){
var $247;
if(m$1.nn$(($247=$242.$1dkeuw$23v.$_get($246)))){
($248=$247.clone(),hashMap$.$1dkeuw$23v.set($246,$248), $248);
var $248;
}
($249=$246,$246=$249.successor,$249);
var $249;
}
}
else{
hashMap$.$1dkeuw$23q=(0);
hashMap$.$1dkeuw$23p_=$242;
}
return hashMap$;
};
function HashMap$c_copy($242,$243,$244,$$targs$$,hashMap$){
$init$HashMap();
if(hashMap$===undefined)hashMap$=new HashMap.$$;
if($243===undefined){$243=$242.$1dkeuw$23n;}
if($244===undefined){$244=Hashtable();}
HashMap$$c($$targs$$,hashMap$);
HashMap$c_copy$$a($242,$243,$244,$$targs$$,hashMap$);
var $23y;for(var $24a=hashMap$.$1dkeuw$23p.iterator();($23y=$24a.next())!==m$1.finished();){
if(hashMap$.$1dkeuw$23z(hashMap$.$1dkeuw$23v,$23y)){
($24b=hashMap$.$1dkeuw$23q,hashMap$.$1dkeuw$23q=$24b.successor,$24b);
var $24b;
}
}
if(!hashMap$.$1dkeuw$23s){
hashMap$.$1dkeuw$241();
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
m$1.atr$(hashMap$,'$1dkeuw$23n',function(){return this.$1dkeuw$23n_;},undefined,function(){return{mod:$CCMM$,$t:{t:Stability},$cont:HashMap,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:HashMap:$at:stability$b6pnod')];},d:['ceylon.collection','HashMap','$at','stability$b6pnod']};});
m$1.atr$(hashMap$,'$1dkeuw$23p',function(){return this.$1dkeuw$23p_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Iterable,a:{Element$Iterable:{t:m$1.Entry,a:{Item$Entry:'Item$HashMap',Key$Entry:'Key$HashMap'}},Absent$Iterable:{t:m$1.Null}}},$cont:HashMap,pa:3,an:function(){return[m$1.doc("The initial entries in the map.")];},d:['ceylon.collection','HashMap','$at','entries$ujasno']};});
m$1.atr$(hashMap$,'$1dkeuw$23o',function(){return this.$1dkeuw$23o_;},undefined,function(){return{mod:$CCMM$,$t:{t:Hashtable},$cont:HashMap,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:HashMap:$at:hashtable$uda49w')];},d:['ceylon.collection','HashMap','$at','hashtable$uda49w']};});
m$1.atr$(hashMap$,'$1dkeuw$23s',function(){return this.$1dkeuw$23s_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},$cont:HashMap,pa:3,d:['ceylon.collection','HashMap','$at','accurateInitialCapacity$qwzvpy']};});
m$1.atr$(hashMap$,'$1dkeuw$23v',function(){return this.$1dkeuw$23v_;},function($24c){return this.$1dkeuw$23v_=$24c;},function(){return{mod:$CCMM$,$t:{t:m$1.$_Array,a:{Element$Array:{t:'u',l:[{t:m$1.Null},{t:CachingCell,a:{Element$CachingCell:{t:m$1.Entry,a:{Item$Entry:'Item$HashMap',Key$Entry:'Key$HashMap'}}}}]}}},$cont:HashMap,pa:1027,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:HashMap:$at:store$9kaiqz')];},d:['ceylon.collection','HashMap','$at','store$9kaiqz']};});
m$1.atr$(hashMap$,'$1dkeuw$23q',function(){return this.$1dkeuw$23q_;},function($24d){return this.$1dkeuw$23q_=$24d;},function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:HashMap,pa:1027,an:function(){return[m$1.doc("Number of elements in this map.")];},d:['ceylon.collection','HashMap','$at','length$g7vp02']};});
m$1.atr$(hashMap$,'$1dkeuw$23l',function(){return this.$1dkeuw$23l_;},function($24e){return this.$1dkeuw$23l_=$24e;},function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:LinkedCell,a:{Element$LinkedCell:{t:m$1.Entry,a:{Item$Entry:'Item$HashMap',Key$Entry:'Key$HashMap'}}}}]},$cont:HashMap,pa:1027,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:HashMap:$at:head$7e95fo')];},d:['ceylon.collection','HashMap','$at','head$7e95fo']};});
m$1.atr$(hashMap$,'$1dkeuw$23m',function(){return this.$1dkeuw$23m_;},function($24f){return this.$1dkeuw$23m_=$24f;},function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:LinkedCell,a:{Element$LinkedCell:{t:m$1.Entry,a:{Item$Entry:'Item$HashMap',Key$Entry:'Key$HashMap'}}}}]},$cont:HashMap,pa:1027,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:HashMap:$at:tip$66h29t')];},d:['ceylon.collection','HashMap','$at','tip$66h29t']};});
hashMap$.$1dkeuw$24g=function($24h){var hashMap$=this;
return function(){var $24i=$24h.hash;return $24i.xor($24i.rightLogicalShift(16));
}();
};
hashMap$.$1dkeuw$24g.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'key',mt:'prm',$t:{t:m$1.$_Object}}],$cont:HashMap,d:['ceylon.collection','HashMap','$m','hashCode$39nm0x']};};
hashMap$.$1dkeuw$24j=function($24k,$24l){var hashMap$=this;
return $24k.and($24l.size.minus(1));
};
hashMap$.$1dkeuw$24j.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'keyHash',mt:'prm',$t:{t:m$1.Integer}},{nm:'store',mt:'prm',$t:{t:m$1.$_Array,a:{Element$Array:{t:'u',l:[{t:m$1.Null},{t:CachingCell,a:{Element$CachingCell:{t:m$1.Entry,a:{Item$Entry:'Item$HashMap',Key$Entry:'Key$HashMap'}}}}]}}}}],$cont:HashMap,d:['ceylon.collection','HashMap','$m','storeIndex$e9z3xh']};};
hashMap$.$1dkeuw$24m=function($24n,$24o,$24p){
var hashMap$=this;
if(m$1.$eq$(hashMap$.$1dkeuw$23n,linked())){
var $24q=LinkedCell($24n,$24o,$24p,hashMap$.$1dkeuw$23m,{Element$LinkedCell:{t:m$1.Entry,a:{Item$Entry:hashMap$.$$targs$$.Item$HashMap/*ORALE!Item inv pero Item var*/,Key$Entry:hashMap$.$$targs$$.Key$HashMap/*ORALE!Key inv pero Key var*/}}});
var $24r;
if(m$1.nn$(($24r=hashMap$.$1dkeuw$23m))){
($24r.next=$24q);
}
hashMap$.$1dkeuw$23m=$24q;
if(!m$1.nn$(hashMap$.$1dkeuw$23l)){
hashMap$.$1dkeuw$23l=$24q;
}
return $24q;
}
else{
return CachingCell($24n,$24o,$24p,{Element$CachingCell:{t:m$1.Entry,a:{Item$Entry:hashMap$.$$targs$$.Item$HashMap/*ORALE!Item inv pero Item var*/,Key$Entry:hashMap$.$$targs$$.Key$HashMap/*ORALE!Key inv pero Key var*/}}});
}
};hashMap$.$1dkeuw$24m.$crtmm$=function(){return{mod:$CCMM$,$t:{t:CachingCell,a:{Element$CachingCell:{t:m$1.Entry,a:{Item$Entry:'Item$HashMap',Key$Entry:'Key$HashMap'}}}},ps:[{nm:'entry',mt:'prm',$t:{t:m$1.Entry,a:{Item$Entry:'Item$HashMap',Key$Entry:'Key$HashMap'}}},{nm:'keyHash',mt:'prm',$t:{t:m$1.Integer}},{nm:'rest',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},{t:CachingCell,a:{Element$CachingCell:{t:m$1.Entry,a:{Item$Entry:'Item$HashMap',Key$Entry:'Key$HashMap'}}}}]}}],$cont:HashMap,d:['ceylon.collection','HashMap','$m','createCell$a7w20a']};};
hashMap$.$1dkeuw$24s=function($24t){
var hashMap$=this;
if(m$1.$eq$(hashMap$.$1dkeuw$23n,linked())){
var $24u;
m$1.asrt$((m$1.is$(($24u=$24t),{t:LinkedCell,a:{Element$LinkedCell:{t:m$1.Entry,a:{Item$Entry:hashMap$.$$targs$$.Item$HashMap/*ORALE!Item inv pero Item var*/,Key$Entry:hashMap$.$$targs$$.Key$HashMap/*ORALE!Key inv pero Key var*/}}}})),"Assertion failed: \'is LinkedCell<Key->Item> cell\' at HashMap.ceylon (167:19-167:49)",'167:12-167:50','HashMap.ceylon');
var $24v;
if(m$1.nn$(($24v=$24u.previous))){
($24v.next=$24u.next);
}
else{
hashMap$.$1dkeuw$23l=$24u.next;
}
var $24w;
if(m$1.nn$(($24w=$24u.next))){
($24w.previous=$24u.previous);
}
else{
hashMap$.$1dkeuw$23m=$24u.previous;
}
}
};hashMap$.$1dkeuw$24s.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'cell',mt:'prm',$t:{t:CachingCell,a:{Element$CachingCell:{t:m$1.Entry,a:{Item$Entry:'Item$HashMap',Key$Entry:'Key$HashMap'}}}}}],$cont:HashMap,d:['ceylon.collection','HashMap','$m','deleteCell$bxnuyp']};};
hashMap$.$1dkeuw$23z=function($24x,$24y){
var hashMap$=this;
var $24z=hashMap$.$1dkeuw$24g($24y.key);
var $250=hashMap$.$1dkeuw$24j($24z,$24x);
var $251=$24x.$_get($250);
var $252=$251;
var $253;
while(m$1.nn$(($253=$252))){
if((($253.keyHash==$24z)&&m$1.$eq$($253.element.key,$24y.key))){
($253.element=$24y);
return false;
}
$252=$253.rest;
}
($254=hashMap$.$1dkeuw$24m($24y,$24z,$251),$24x.set($250,$254), $254);
var $254;
return true;
};hashMap$.$1dkeuw$23z.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'store',mt:'prm',$t:{t:m$1.$_Array,a:{Element$Array:{t:'u',l:[{t:m$1.Null},{t:CachingCell,a:{Element$CachingCell:{t:m$1.Entry,a:{Item$Entry:'Item$HashMap',Key$Entry:'Key$HashMap'}}}}]}}}},{nm:'entry',mt:'prm',$t:{t:m$1.Entry,a:{Item$Entry:'Item$HashMap',Key$Entry:'Key$HashMap'}}}],$cont:HashMap,d:['ceylon.collection','HashMap','$m','addToStore$vlhtif']};};
hashMap$.$1dkeuw$241=function(){
var hashMap$=this;
if(hashMap$.$1dkeuw$23o.rehash(hashMap$.$1dkeuw$23q,hashMap$.$1dkeuw$23v.size)){
var $255=cachingEntryStore(hashMap$.$1dkeuw$23o.capacity(hashMap$.$1dkeuw$23q),{Key$cachingEntryStore:hashMap$.$$targs$$.Key$HashMap,Item$cachingEntryStore:hashMap$.$$targs$$.Item$HashMap});
var $256=(0);
while(($256<hashMap$.$1dkeuw$23v.size)){
var $257=hashMap$.$1dkeuw$23v.$_get($256);
var $258;
while(m$1.nn$(($258=$257))){
$257=$258.rest;
var $259=hashMap$.$1dkeuw$24j($258.keyHash,$255);
var $25a=$255.$_get($259);
($258.rest=$25a);
($25b=$258,$255.set($259,$25b), $25b);
var $25b;
}
($25c=$256,$256=$25c.successor,$25c);
var $25c;
}
hashMap$.$1dkeuw$23v=$255;
}
};hashMap$.$1dkeuw$241.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[],$cont:HashMap,d:['ceylon.collection','HashMap','$m','checkRehash$glqfdp']};};
hashMap$.put=function($25d,$25e){
var hashMap$=this;
var $25f=hashMap$.$1dkeuw$24g($25d);
var $25g=hashMap$.$1dkeuw$24j($25f,hashMap$.$1dkeuw$23v);
var $25h=m$1.Entry($25d,$25e,{Item$Entry:hashMap$.$$targs$$.Item$HashMap/*ORALE!Item inv pero Item var*/,Key$Entry:hashMap$.$$targs$$.Key$HashMap/*ORALE!Key inv pero Key var*/});
var $25i=hashMap$.$1dkeuw$23v.$_get($25g);
var $25j=$25i;
var $25k;
while(m$1.nn$(($25k=$25j))){
if((($25k.keyHash==$25f)&&m$1.$eq$($25k.element.key,$25d))){
var $25l=$25k.element.item;
($25k.element=$25h);
return $25l;
}
$25j=$25k.rest;
}
($25m=hashMap$.$1dkeuw$24m($25h,$25f,$25i),hashMap$.$1dkeuw$23v.set($25g,$25m), $25m);
var $25m;
($25n=hashMap$.$1dkeuw$23q,hashMap$.$1dkeuw$23q=$25n.successor,$25n);
var $25n;
hashMap$.$1dkeuw$241();
return null;
};hashMap$.put.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Item$HashMap']},ps:[{nm:'key',mt:'prm',$t:'Key$HashMap'},{nm:'item',mt:'prm',$t:'Item$HashMap'}],$cont:HashMap,pa:3,d:['ceylon.collection','HashMap','$m','put']};};
hashMap$.replaceEntry=function($25o,$25p,$25q){
var hashMap$=this;
var $25r=hashMap$.$1dkeuw$24g($25o);
var $25s=hashMap$.$1dkeuw$24j($25r,hashMap$.$1dkeuw$23v);
var $25t=hashMap$.$1dkeuw$23v.$_get($25s);
var $25u;
while(m$1.nn$(($25u=$25t))){
if((($25u.keyHash==$25r)&&m$1.$eq$($25u.element.key,$25o))){
var $25v;
if(m$1.nn$(($25v=$25u.element.item))&&m$1.$eq$($25v,$25p)){
($25u.element=m$1.Entry($25o,$25q,{Item$Entry:hashMap$.$$targs$$.Item$HashMap/*ORALE!Item inv pero Item var*/,Key$Entry:hashMap$.$$targs$$.Key$HashMap/*ORALE!Key inv pero Key var*/}));
return true;
}
else{
return false;
}
}
$25t=$25u.rest;
}
return false;
};hashMap$.replaceEntry.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'key',mt:'prm',$t:'Key$HashMap'},{nm:'item',mt:'prm',$t:{t:'i',l:['Item$HashMap',{t:m$1.$_Object}]}},{nm:'newItem',mt:'prm',$t:'Item$HashMap'}],$cont:HashMap,pa:3,d:['ceylon.collection','HashMap','$m','replaceEntry']};};
hashMap$.putAll=function($25w){
var hashMap$=this;
var $25y;for(var $25x=$25w.iterator();($25y=$25x.next())!==m$1.finished();){
if(hashMap$.$1dkeuw$23z(hashMap$.$1dkeuw$23v,$25y)){
($25z=hashMap$.$1dkeuw$23q,hashMap$.$1dkeuw$23q=$25z.successor,$25z);
var $25z;
}
}
hashMap$.$1dkeuw$241();
};hashMap$.putAll.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'entries',mt:'prm',$t:{t:m$1.Iterable,a:{Element$Iterable:{t:m$1.Entry,a:{Item$Entry:'Item$HashMap',Key$Entry:'Key$HashMap'}},Absent$Iterable:{t:m$1.Null}}}}],$cont:HashMap,pa:3,d:['ceylon.collection','HashMap','$m','putAll']};};
hashMap$.remove=function($260){
var hashMap$=this;
var $261=hashMap$.$1dkeuw$24g($260);
var $262=hashMap$.$1dkeuw$24j($261,hashMap$.$1dkeuw$23v);
var $263;
if(m$1.nn$(($263=hashMap$.$1dkeuw$23v.$_get($262)))&&($263.keyHash==$261)&&m$1.$eq$($263.element.key,$260)){
($264=$263.rest,hashMap$.$1dkeuw$23v.set($262,$264), $264);
var $264;
hashMap$.$1dkeuw$24s($263);
($265=hashMap$.$1dkeuw$23q,hashMap$.$1dkeuw$23q=$265.predecessor,$265);
var $265;
return $263.element.item;
}
var $266=hashMap$.$1dkeuw$23v.$_get($262);
var $267;
while(m$1.nn$(($267=$266))){
var $268=$267.rest;
var $269;
if(m$1.nn$(($269=$268))&&m$1.$eq$($269.element.key,$260)){
($267.rest=$269.rest);
hashMap$.$1dkeuw$24s($269);
($26a=hashMap$.$1dkeuw$23q,hashMap$.$1dkeuw$23q=$26a.predecessor,$26a);
var $26a;
return $269.element.item;
}
else{
$266=$268;
}
}
return null;
};hashMap$.remove.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Item$HashMap']},ps:[{nm:'key',mt:'prm',$t:'Key$HashMap'}],$cont:HashMap,pa:3,d:['ceylon.collection','HashMap','$m','remove']};};
hashMap$.removeEntry=function($26b,$26c){
var hashMap$=this;
var $26d=hashMap$.$1dkeuw$24g($26b);
var $26e=hashMap$.$1dkeuw$24j($26d,hashMap$.$1dkeuw$23v);
var $26f;
while(m$1.nn$(($26f=hashMap$.$1dkeuw$23v.$_get($26e)))&&($26f.keyHash==$26d)&&m$1.$eq$($26f.element.key,$26b)){
var $26g;
if(m$1.nn$(($26g=$26f.element.item))&&m$1.$eq$($26g,$26c)){
($26h=$26f.rest,hashMap$.$1dkeuw$23v.set($26e,$26h), $26h);
var $26h;
($26i=hashMap$.$1dkeuw$23q,hashMap$.$1dkeuw$23q=$26i.predecessor,$26i);
var $26i;
return true;
}
else{
return false;
}
}
var $26j=hashMap$.$1dkeuw$23v.$_get($26e);
var $26k;
while(m$1.nn$(($26k=$26j))){
var $26l=$26k.rest;
var $26m;
if(m$1.nn$(($26m=$26l))&&m$1.$eq$($26m.element.key,$26b)){
var $26n;
if(m$1.nn$(($26n=$26m.element.item))&&m$1.$eq$($26n,$26c)){
($26k.rest=$26m.rest);
hashMap$.$1dkeuw$24s($26m);
($26o=hashMap$.$1dkeuw$23q,hashMap$.$1dkeuw$23q=$26o.predecessor,$26o);
var $26o;
return true;
}
else{
return false;
}
}
else{
$26j=$26l;
}
}
return false;
};hashMap$.removeEntry.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'key',mt:'prm',$t:'Key$HashMap'},{nm:'item',mt:'prm',$t:{t:'i',l:['Item$HashMap',{t:m$1.$_Object}]}}],$cont:HashMap,pa:3,d:['ceylon.collection','HashMap','$m','removeEntry']};};
hashMap$.clear=function(){
var hashMap$=this;
var $26p=(0);
while(($26p<hashMap$.$1dkeuw$23v.size)){
($26q=null,hashMap$.$1dkeuw$23v.set(($26r=$26p,$26p=$26r.successor,$26r),$26q), $26q);
var $26q,$26r;
}
hashMap$.$1dkeuw$23q=(0);
hashMap$.$1dkeuw$23l=null;
hashMap$.$1dkeuw$23m=null;
};hashMap$.clear.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[],$cont:HashMap,pa:3,d:['ceylon.collection','HashMap','$m','clear']};};
m$1.atr$(hashMap$,'size',function(){
var hashMap$=this;
return hashMap$.$1dkeuw$23q;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:HashMap,pa:3,d:['ceylon.collection','HashMap','$at','size']};});
m$1.atr$(hashMap$,'empty',function(){
var hashMap$=this;
return (hashMap$.$1dkeuw$23q==(0));
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},$cont:HashMap,pa:3,d:['ceylon.collection','HashMap','$at','empty']};});
hashMap$.$_get=function($26s){
var hashMap$=this;
if(hashMap$.empty){
return null;
}
var $26t=hashMap$.$1dkeuw$24g($26s);
var $26u=hashMap$.$1dkeuw$24j($26t,hashMap$.$1dkeuw$23v);
var $26v=hashMap$.$1dkeuw$23v.$_get($26u);
var $26w;
while(m$1.nn$(($26w=$26v))){
if((($26w.keyHash==$26t)&&m$1.$eq$($26w.element.key,$26s))){
return $26w.element.item;
}
$26v=$26w.rest;
}
return null;
};hashMap$.$_get.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Item$HashMap']},ps:[{nm:'key',mt:'prm',$t:{t:m$1.$_Object}}],$cont:HashMap,pa:3,d:['ceylon.collection','HashMap','$m','get']};};
hashMap$.getOrDefault=function($26x,$26y,$6rx8ao$){
var hashMap$=this;
if(hashMap$.empty){
return $26y;
}
var $26z=hashMap$.$1dkeuw$24g($26x);
var $270=hashMap$.$1dkeuw$24j($26z,hashMap$.$1dkeuw$23v);
var $271=hashMap$.$1dkeuw$23v.$_get($270);
var $272;
while(m$1.nn$(($272=$271))){
if((($272.keyHash==$26z)&&m$1.$eq$($272.element.key,$26x))){
return $272.element.item;
}
$271=$272.rest;
}
return $26y;
};hashMap$.getOrDefault.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:['Item$HashMap','Default$getOrDefault']},ps:[{nm:'key',mt:'prm',$t:{t:m$1.$_Object}},{nm:'default',mt:'prm',$t:'Default$getOrDefault'}],$cont:HashMap,tp:{Default$getOrDefault:{}},pa:3,d:['ceylon.collection','HashMap','$m','getOrDefault']};};
m$1.atr$(hashMap$,'first',function(){
var hashMap$=this;
return (m$1.$eq$(hashMap$.$1dkeuw$23n,linked())?($274=hashMap$.$1dkeuw$23l,m$1.nn$($274)?$274.element:null):($275=hashMap$.$1dkeuw$23v.coalesced.first,m$1.nn$($275)?$275.element:null));
var $274,$275;
},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Entry,a:{Item$Entry:'Item$HashMap',Key$Entry:'Key$HashMap'}}]},$cont:HashMap,pa:3,d:['ceylon.collection','HashMap','$at','first']};});
m$1.atr$(hashMap$,'last',function(){
var hashMap$=this;
if(m$1.$eq$(hashMap$.$1dkeuw$23n,linked())){
return ($276=hashMap$.$1dkeuw$23m,m$1.nn$($276)?$276.element:null);
var $276;
}
else{
var $277=hashMap$.$1dkeuw$23v.reversed.coalesced.first;
var $278;
while(m$1.nn$(($278=($279=$277,m$1.nn$($279)?$279.rest:null)))){
$277=$278;
}
var $279;
return ($27a=$277,m$1.nn$($27a)?$27a.element:null);
var $27a;
}
},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Entry,a:{Item$Entry:'Item$HashMap',Key$Entry:'Key$HashMap'}}]},$cont:HashMap,pa:3,d:['ceylon.collection','HashMap','$at','last']};});hashMap$.iterator=function(){var hashMap$=this;
return ($27b=(m$1.$eq$(hashMap$.$1dkeuw$23n,linked())?LinkedCellIterator(hashMap$.$1dkeuw$23l,{Element$LinkedCellIterator:{t:m$1.Entry,a:{Item$Entry:hashMap$.$$targs$$.Item$HashMap/*ORALE!Item inv pero Item var*/,Key$Entry:hashMap$.$$targs$$.Key$HashMap/*ORALE!Key inv pero Key var*/}}}):null),m$1.nn$($27b)?$27b:CachingStoreIterator(hashMap$.$1dkeuw$23v,{Element$CachingStoreIterator:{t:m$1.Entry,a:{Item$Entry:hashMap$.$$targs$$.Item$HashMap/*ORALE!Item inv pero Item var*/,Key$Entry:hashMap$.$$targs$$.Key$HashMap/*ORALE!Key inv pero Key var*/}}}));
var $27b;
};hashMap$.count=function($27c){
var hashMap$=this;
var $27d=(0);
var $27e=(0);
while(($27d<hashMap$.$1dkeuw$23v.size)){
var $27f=hashMap$.$1dkeuw$23v.$_get($27d);
var $27g;
while(m$1.nn$(($27g=$27f))){
if($27c($27g.element)){
($27h=$27e,$27e=$27h.successor,$27h);
var $27h;
}
$27f=$27g.rest;
}
($27i=$27d,$27d=$27i.successor,$27i);
var $27i;
}
return $27e;
};hashMap$.count.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'selecting',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Arguments$Callable:{t:'T',l:[{t:m$1.Entry,a:{Item$Entry:'Item$HashMap',Key$Entry:'Key$HashMap'}}]},Return$Callable:{t:m$1.$_Boolean}}},$rt:{t:m$1.$_Boolean},ps:[{nm:'element',mt:'prm',$t:{t:m$1.Entry,a:{Item$Entry:'Item$HashMap',Key$Entry:'Key$HashMap'}}}]}],$cont:HashMap,pa:3,d:['ceylon.collection','HashMap','$m','count']};};
hashMap$.each=function($27j){
var hashMap$=this;
hashMap$.$1dkeuw$23v.each(m$1.jsc$2((function($27k){
var $27l=$27k;
$prop$get$27l={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:CachingCell,a:{Element$CachingCell:{t:m$1.Entry,a:{Item$Entry:'Item$HashMap',Key$Entry:'Key$HashMap'}}}}]},$cont:hashMap$.each,pa:1027,d:['ceylon.collection','HashMap','$m','each','$at','iter$edjelw']};}};
$prop$get$27l.get=function(){return $27l};
var $27m;
while(m$1.nn$(($27m=$27l))){
$27j($27m.element);
$27l=$27m.rest;
}
}),[{nm:'bucket',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},{t:CachingCell,a:{Element$CachingCell:{t:m$1.Entry,a:{Item$Entry:hashMap$.$$targs$$.Item$HashMap,Key$Entry:hashMap$.$$targs$$.Key$HashMap}}}}]}}],{Arguments$Callable:m$1.mtt$([m$1.mut$([{t:m$1.Null},{t:CachingCell,a:{Element$CachingCell:{t:m$1.Entry,a:{Item$Entry:hashMap$.$$targs$$.Item$HashMap/*ORALE!Item inv pero Item var*/,Key$Entry:hashMap$.$$targs$$.Key$HashMap/*ORALE!Key inv pero Key var*/}}}}])]),Return$Callable:{t:m$1.Anything}}));
};hashMap$.each.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'step',mt:'prm',$pt:'f',$t:{t:m$1.Callable,a:{Arguments$Callable:{t:'T',l:[{t:m$1.Entry,a:{Item$Entry:'Item$HashMap',Key$Entry:'Key$HashMap'}}]},Return$Callable:{t:m$1.Anything}}},$rt:{t:m$1.Anything},ps:[{nm:'element',mt:'prm',$t:{t:m$1.Entry,a:{Item$Entry:'Item$HashMap',Key$Entry:'Key$HashMap'}}}]}],$cont:HashMap,pa:3,d:['ceylon.collection','HashMap','$m','each']};};
m$1.atr$(hashMap$,'hash',function(){
var hashMap$=this;
var $27n=(0);
var $27o=(0);
while(($27n<hashMap$.$1dkeuw$23v.size)){
var $27p=hashMap$.$1dkeuw$23v.$_get($27n);
var $27q;
while(m$1.nn$(($27q=$27p))){
($27o=$27o.plus($27q.element.hash));
$27p=$27q.rest;
}
($27r=$27n,$27n=$27r.successor,$27r);
var $27r;
}
return $27o;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:HashMap,pa:3,d:['ceylon.collection','HashMap','$at','hash']};});hashMap$.equals=function($27s){
var hashMap$=this;
var $27t;
if(m$1.is$(($27t=$27s),{t:m$1.Map,a:{Key$Map:{t:m$1.$_Object},Item$Map:{t:m$1.Anything}}})&&(hashMap$.size==$27t.size)){
var $27u=(0);
while(($27u<hashMap$.$1dkeuw$23v.size)){
var $27v=hashMap$.$1dkeuw$23v.$_get($27u);
var $27w;
while(m$1.nn$(($27w=$27v))){
var $27x=$27t.$_get($27w.element.key);
var $27y;
if(m$1.nn$(($27y=$27w.element.item))){
var $27z;
if(m$1.nn$(($27z=$27x))){
if(!m$1.$eq$($27z,$27y)){
return false;
}
}
else{
return false;
}
}
else{
if(m$1.nn$($27x)){
return false;
}
}
$27v=$27w.rest;
}
($280=$27u,$27u=$280.successor,$280);
var $280;
}
return true;
}
return false;
};hashMap$.equals.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'that',mt:'prm',$t:{t:m$1.$_Object}}],$cont:HashMap,pa:3,d:['ceylon.collection','HashMap','$m','equals']};};
hashMap$.clone=function(){var hashMap$=this;
return HashMap$c_copy(hashMap$,undefined,undefined,{Key$HashMap:hashMap$.$$targs$$.Key$HashMap,Item$HashMap:hashMap$.$$targs$$.Item$HashMap});
};
hashMap$.clone.$crtmm$=function(){return{mod:$CCMM$,$t:{t:HashMap,a:{Key$HashMap:'Key$HashMap',Item$HashMap:'Item$HashMap'}},ps:[],$cont:HashMap,pa:3,d:['ceylon.collection','HashMap','$m','clone']};};
hashMap$.defines=function($281){
var hashMap$=this;
if(hashMap$.empty){
return false;
}
else{
var $282=hashMap$.$1dkeuw$24g($281);
var $283=hashMap$.$1dkeuw$24j($282,hashMap$.$1dkeuw$23v);
var $284=hashMap$.$1dkeuw$23v.$_get($283);
var $285;
while(m$1.nn$(($285=$284))){
if((($285.keyHash==$282)&&m$1.$eq$($285.element.key,$281))){
return true;
}
$284=$285.rest;
}
return false;
}
};hashMap$.defines.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'key',mt:'prm',$t:{t:m$1.$_Object}}],$cont:HashMap,pa:3,d:['ceylon.collection','HashMap','$m','defines']};};
hashMap$.contains=function($286){
var hashMap$=this;
if(hashMap$.empty){
return false;
}
else{
var $287;
if(m$1.is$(($287=$286),{t:m$1.Entry,a:{Item$Entry:{t:m$1.Anything},Key$Entry:{t:m$1.$_Object}}})){
var $288=$287.key;
var $289=hashMap$.$1dkeuw$24g($288);
var $28a=hashMap$.$1dkeuw$24j($289,hashMap$.$1dkeuw$23v);
var $28b=hashMap$.$1dkeuw$23v.$_get($28a);
var $28c;
while(m$1.nn$(($28c=$28b))){
if((($28c.keyHash==$289)&&m$1.$eq$($28c.element.key,$288))){
var $28d;
if(m$1.nn$(($28d=$28c.element.item))){
var $28e;
if(m$1.nn$(($28e=$287.item))){
return m$1.$eq$($28d,$28e);
}
else{
return false;
}
}
else{
return !m$1.nn$($287.item);
}
}
$28b=$28c.rest;
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
HashMap.inst$$=function($28f){
var hashMap$=new HashMap.$$;
m$1.set_type_args(hashMap$,{Key$HashMap:$28f.$$targs$$.Type$Class.a.Key$HashMap,Item$HashMap:$28f.$$targs$$.Type$Class.a.Item$HashMap});
m$1.set_type_args(hashMap$,{Key$MutableMap:hashMap$.$$targs$$.Key$HashMap,Item$MutableMap:hashMap$.$$targs$$.Item$HashMap,Key$Map:hashMap$.$$targs$$.Key$HashMap,Item$Map:hashMap$.$$targs$$.Item$HashMap,Element$Collection:{t:m$1.Entry,a:{Item$Entry:hashMap$.$$targs$$.Item$HashMap/*ORALE!Item inv pero Item var*/,Key$Entry:hashMap$.$$targs$$.Key$HashMap/*ORALE!Key inv pero Key var*/}},Element$Iterable:{t:m$1.Entry,a:{Item$Entry:hashMap$.$$targs$$.Item$HashMap/*ORALE!Item inv pero Item var*/,Key$Entry:hashMap$.$$targs$$.Key$HashMap/*ORALE!Key inv pero Key var*/}},Absent$Iterable:{t:m$1.Null},Element$Category:{t:m$1.$_Object},Item$Correspondence:hashMap$.$$targs$$.Item$HashMap,Key$Correspondence:{t:m$1.$_Object},Key$MapMutator:hashMap$.$$targs$$.Key$HashMap,Item$MapMutator:hashMap$.$$targs$$.Item$HashMap,Key$KeyedCorrespondenceMutator:hashMap$.$$targs$$.Key$HashMap,Item$KeyedCorrespondenceMutator:hashMap$.$$targs$$.Item$HashMap,Item$CorrespondenceMutator:hashMap$.$$targs$$.Item$HashMap});
return hashMap$;
};
HashMap.ser$get$=function(ref,o){var n=ref.attribute.qualifiedName;if(n==='ceylon.collection::HashMap.stability')return o.$1dkeuw$23n_;
else if(n==='ceylon.collection::HashMap.hashtable')return o.$1dkeuw$23o_;
else if(n==='ceylon.collection::HashMap.store')return o.$1dkeuw$23v_;
else if(n==='ceylon.collection::HashMap.length')return o.$1dkeuw$23q_;
else if(n==='ceylon.collection::HashMap.head')return o.$1dkeuw$23l_;
else if(n==='ceylon.collection::HashMap.tip')return o.$1dkeuw$23m_;
else throw new TypeError('unknown attribute');
};
HashMap.ser$set$=function(ref,o,i){if(!m$1.is$(ref,{t:m$1.Member$serialization}))throw m$1.AssertionError('unexpected reachable reference');var n=ref.attribute.qualifiedName;
if(n==='ceylon.collection::HashMap.stability')o.$1dkeuw$23n_=i;
else if(n==='ceylon.collection::HashMap.hashtable')o.$1dkeuw$23o_=i;
else if(n==='ceylon.collection::HashMap.store')o.$1dkeuw$23v_=i;
else if(n==='ceylon.collection::HashMap.length')o.$1dkeuw$23q_=i;
else if(n==='ceylon.collection::HashMap.head')o.$1dkeuw$23l_=i;
else if(n==='ceylon.collection::HashMap.tip')o.$1dkeuw$23m_=i;
else throw new TypeError('unknown attribute');
};
HashMap.ser$refs$=function(o){return [m$1.MemberImpl$impl(m$1.OpenValue$jsint(m$1.lmp$(ex$,'ceylon.collection'),o.$prop$get$1dkeuw$23n)),m$1.MemberImpl$impl(m$1.OpenValue$jsint(m$1.lmp$(ex$,'ceylon.collection'),o.$prop$get$1dkeuw$23o)),m$1.MemberImpl$impl(m$1.OpenValue$jsint(m$1.lmp$(ex$,'ceylon.collection'),o.$prop$get$1dkeuw$23v)),m$1.MemberImpl$impl(m$1.OpenValue$jsint(m$1.lmp$(ex$,'ceylon.collection'),o.$prop$get$1dkeuw$23q)),m$1.MemberImpl$impl(m$1.OpenValue$jsint(m$1.lmp$(ex$,'ceylon.collection'),o.$prop$get$1dkeuw$23l)),m$1.MemberImpl$impl(m$1.OpenValue$jsint(m$1.lmp$(ex$,'ceylon.collection'),o.$prop$get$1dkeuw$23m))];
};
function UnmodifiableSet($1dkeuw$28g,$$targs$$,unmodifiableSet$){
$init$UnmodifiableSet();
if(unmodifiableSet$===undefined)unmodifiableSet$=new UnmodifiableSet.$$;
m$1.set_type_args(unmodifiableSet$,$$targs$$);
unmodifiableSet$.$1dkeuw$28g_=$1dkeuw$28g;
m$1.Set({Element$Set:$$targs$$.Element$UnmodifiableSet},unmodifiableSet$);
return unmodifiableSet$;
}
UnmodifiableSet.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'set',mt:'prm',$t:{t:m$1.Set,a:{Element$Set:'Element$UnmodifiableSet'}}}],tp:{Element$UnmodifiableSet:{dv:'out',sts:[{t:m$1.$_Object}]}},sts:[{t:m$1.Set,a:{Element$Set:'Element$UnmodifiableSet'}}],pa:2048,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:UnmodifiableSet'),m$1.by(m$1.$arr$sa$(["Gavin King"],{t:m$1.$_String}))];},d:['ceylon.collection','UnmodifiableSet']};};
ex$.UnmodifiableSet=UnmodifiableSet;
function $init$UnmodifiableSet(){
if(UnmodifiableSet.$$===undefined){
m$1.initTypeProto(UnmodifiableSet,'ceylon.collection::UnmodifiableSet',m$1.Basic,m$1.Set);
(function(unmodifiableSet$){
m$1.atr$(unmodifiableSet$,'$1dkeuw$28g',function(){return this.$1dkeuw$28g_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Set,a:{Element$Set:'Element$UnmodifiableSet'}},$cont:UnmodifiableSet,d:['ceylon.collection','UnmodifiableSet','$at','set$4htprx']};});
unmodifiableSet$.iterator=function(){var unmodifiableSet$=this;
return unmodifiableSet$.$1dkeuw$28g.iterator();
};m$1.atr$(unmodifiableSet$,'size',function(){
var unmodifiableSet$=this;
return unmodifiableSet$.$1dkeuw$28g.size;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:UnmodifiableSet,pa:3,d:['ceylon.collection','UnmodifiableSet','$at','size']};});
unmodifiableSet$.contains=function($28h){var unmodifiableSet$=this;
return unmodifiableSet$.$1dkeuw$28g.contains($28h);
};unmodifiableSet$.complement=function($28i,$rdd3zt$){var unmodifiableSet$=this;
return unmodifiableSet$.$1dkeuw$28g.complement($28i,{Other$complement:$rdd3zt$.Other$complement});
};
unmodifiableSet$.complement.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Set,a:{Element$Set:'Element$UnmodifiableSet'}},ps:[{nm:'set',mt:'prm',$t:{t:m$1.Set,a:{Element$Set:'Other$complement'}}}],$cont:UnmodifiableSet,tp:{Other$complement:{sts:[{t:m$1.$_Object}]}},pa:3,d:['ceylon.collection','UnmodifiableSet','$m','complement']};};
unmodifiableSet$.exclusiveUnion=function($28j,$acz99u$){var unmodifiableSet$=this;
return unmodifiableSet$.$1dkeuw$28g.exclusiveUnion($28j,{Other$exclusiveUnion:$acz99u$.Other$exclusiveUnion});
};
unmodifiableSet$.exclusiveUnion.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Set,a:{Element$Set:{t:'u',l:['Element$UnmodifiableSet','Other$exclusiveUnion']}}},ps:[{nm:'set',mt:'prm',$t:{t:m$1.Set,a:{Element$Set:'Other$exclusiveUnion'}}}],$cont:UnmodifiableSet,tp:{Other$exclusiveUnion:{sts:[{t:m$1.$_Object}]}},pa:3,d:['ceylon.collection','UnmodifiableSet','$m','exclusiveUnion']};};
unmodifiableSet$.intersection=function($28k,$9faf6e$){var unmodifiableSet$=this;
return unmodifiableSet$.$1dkeuw$28g.intersection($28k,{Other$intersection:$9faf6e$.Other$intersection});
};
unmodifiableSet$.intersection.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Set,a:{Element$Set:{t:'i',l:['Element$UnmodifiableSet','Other$intersection']}}},ps:[{nm:'set',mt:'prm',$t:{t:m$1.Set,a:{Element$Set:'Other$intersection'}}}],$cont:UnmodifiableSet,tp:{Other$intersection:{sts:[{t:m$1.$_Object}]}},pa:3,d:['ceylon.collection','UnmodifiableSet','$m','intersection']};};
unmodifiableSet$.union=function($28l,$tnhkj6$){var unmodifiableSet$=this;
return unmodifiableSet$.$1dkeuw$28g.union($28l,{Other$union:$tnhkj6$.Other$union});
};
unmodifiableSet$.union.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Set,a:{Element$Set:{t:'u',l:['Element$UnmodifiableSet','Other$union']}}},ps:[{nm:'set',mt:'prm',$t:{t:m$1.Set,a:{Element$Set:'Other$union'}}}],$cont:UnmodifiableSet,tp:{Other$union:{sts:[{t:m$1.$_Object}]}},pa:3,d:['ceylon.collection','UnmodifiableSet','$m','union']};};
unmodifiableSet$.superset=function($28m){var unmodifiableSet$=this;
return unmodifiableSet$.$1dkeuw$28g.superset($28m);
};unmodifiableSet$.subset=function($28n){var unmodifiableSet$=this;
return unmodifiableSet$.$1dkeuw$28g.subset($28n);
};unmodifiableSet$.equals=function($28o){var unmodifiableSet$=this;
return m$1.$eq$(unmodifiableSet$.$1dkeuw$28g,$28o);
};m$1.atr$(unmodifiableSet$,'hash',function(){
var unmodifiableSet$=this;
return unmodifiableSet$.$1dkeuw$28g.hash;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:UnmodifiableSet,pa:3,d:['ceylon.collection','UnmodifiableSet','$at','hash']};});
unmodifiableSet$.clone=function(){var unmodifiableSet$=this;
return UnmodifiableSet(unmodifiableSet$.$1dkeuw$28g.clone(),{Element$UnmodifiableSet:unmodifiableSet$.$$targs$$.Element$UnmodifiableSet});
};unmodifiableSet$.each=function($28p){var unmodifiableSet$=this;
return unmodifiableSet$.$1dkeuw$28g.each($28p);
};
})(UnmodifiableSet.$$.prototype);
}
return UnmodifiableSet;
}
ex$.$init$UnmodifiableSet=$init$UnmodifiableSet;
$init$UnmodifiableSet();
UnmodifiableSet.inst$$=function($28q){
var unmodifiableSet$=new UnmodifiableSet.$$;
m$1.set_type_args(unmodifiableSet$,{Element$UnmodifiableSet:$28q.$$targs$$.Type$Class.a.Element$UnmodifiableSet});
m$1.set_type_args(unmodifiableSet$,{Element$Set:unmodifiableSet$.$$targs$$.Element$UnmodifiableSet,Element$Collection:unmodifiableSet$.$$targs$$.Element$UnmodifiableSet,Element$Iterable:unmodifiableSet$.$$targs$$.Element$UnmodifiableSet,Absent$Iterable:{t:m$1.Null},Element$Category:{t:m$1.$_Object}});
return unmodifiableSet$;
};
UnmodifiableSet.ser$get$=function(ref,o){var n=ref.attribute.qualifiedName;if(n==='ceylon.collection::UnmodifiableSet.set')return o.$1dkeuw$28g_;
else throw new TypeError('unknown attribute');
};
UnmodifiableSet.ser$set$=function(ref,o,i){if(!m$1.is$(ref,{t:m$1.Member$serialization}))throw m$1.AssertionError('unexpected reachable reference');var n=ref.attribute.qualifiedName;
if(n==='ceylon.collection::UnmodifiableSet.set')o.$1dkeuw$28g_=i;
else throw new TypeError('unknown attribute');
};
UnmodifiableSet.ser$refs$=function(o){return [m$1.MemberImpl$impl(m$1.OpenValue$jsint(m$1.lmp$(ex$,'ceylon.collection'),o.$prop$get$1dkeuw$28g))];
};
function unmodifiableSet($28r,$pjsf5f$){return UnmodifiableSet($28r,{Element$UnmodifiableSet:$pjsf5f$.Element$unmodifiableSet/*ORALE!Element inv pero Element var*/});
};
unmodifiableSet.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Set,a:{Element$Set:'Element$unmodifiableSet'}},ps:[{nm:'set',mt:'prm',$t:{t:m$1.Set,a:{Element$Set:'Element$unmodifiableSet'}}}],tp:{Element$unmodifiableSet:{sts:[{t:m$1.$_Object}]}},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:unmodifiableSet')];},d:['ceylon.collection','unmodifiableSet']};};
ex$.unmodifiableSet=unmodifiableSet;
function UnmodifiableList($1dkeuw$28s,$$targs$$,unmodifiableList$){
$init$UnmodifiableList();
if(unmodifiableList$===undefined)unmodifiableList$=new UnmodifiableList.$$;
m$1.set_type_args(unmodifiableList$,$$targs$$);
unmodifiableList$.$1dkeuw$28s_=$1dkeuw$28s;
m$1.List({Element$List:$$targs$$.Element$UnmodifiableList},unmodifiableList$);
return unmodifiableList$;
}
UnmodifiableList.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'list',mt:'prm',$t:{t:m$1.List,a:{Element$List:'Element$UnmodifiableList'}}}],tp:{Element$UnmodifiableList:{dv:'out'}},sts:[{t:m$1.List,a:{Element$List:'Element$UnmodifiableList'}}],pa:2048,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:UnmodifiableList'),m$1.by(m$1.$arr$sa$(["Gavin King"],{t:m$1.$_String}))];},d:['ceylon.collection','UnmodifiableList']};};
ex$.UnmodifiableList=UnmodifiableList;
function $init$UnmodifiableList(){
if(UnmodifiableList.$$===undefined){
m$1.initTypeProto(UnmodifiableList,'ceylon.collection::UnmodifiableList',m$1.Basic,m$1.List);
(function(unmodifiableList$){
m$1.atr$(unmodifiableList$,'$1dkeuw$28s',function(){return this.$1dkeuw$28s_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.List,a:{Element$List:'Element$UnmodifiableList'}},$cont:UnmodifiableList,d:['ceylon.collection','UnmodifiableList','$at','list$1bhyan']};});
unmodifiableList$.getFromFirst=function($28t){var unmodifiableList$=this;
return unmodifiableList$.$1dkeuw$28s.getFromFirst($28t);
};m$1.atr$(unmodifiableList$,'size',function(){
var unmodifiableList$=this;
return unmodifiableList$.$1dkeuw$28s.size;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:UnmodifiableList,pa:3,d:['ceylon.collection','UnmodifiableList','$at','size']};});
m$1.atr$(unmodifiableList$,'lastIndex',function(){
var unmodifiableList$=this;
return unmodifiableList$.$1dkeuw$28s.lastIndex;
},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]},$cont:UnmodifiableList,pa:3,d:['ceylon.collection','UnmodifiableList','$at','lastIndex']};});
m$1.atr$(unmodifiableList$,'first',function(){
var unmodifiableList$=this;
return unmodifiableList$.$1dkeuw$28s.first;
},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$UnmodifiableList']},$cont:UnmodifiableList,pa:3,d:['ceylon.collection','UnmodifiableList','$at','first']};});
m$1.atr$(unmodifiableList$,'rest',function(){
var unmodifiableList$=this;
return UnmodifiableList(unmodifiableList$.$1dkeuw$28s.rest,{Element$UnmodifiableList:unmodifiableList$.$$targs$$.Element$UnmodifiableList});
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.List,a:{Element$List:'Element$UnmodifiableList'}},$cont:UnmodifiableList,pa:3,d:['ceylon.collection','UnmodifiableList','$at','rest']};});
unmodifiableList$.iterator=function(){var unmodifiableList$=this;
return unmodifiableList$.$1dkeuw$28s.iterator();
};m$1.atr$(unmodifiableList$,'reversed',function(){
var unmodifiableList$=this;
return UnmodifiableList(unmodifiableList$.$1dkeuw$28s.reversed,{Element$UnmodifiableList:unmodifiableList$.$$targs$$.Element$UnmodifiableList});
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.List,a:{Element$List:'Element$UnmodifiableList'}},$cont:UnmodifiableList,pa:3,d:['ceylon.collection','UnmodifiableList','$at','reversed']};});
unmodifiableList$.measure=function($28u,$28v){var unmodifiableList$=this;
return unmodifiableList$.$1dkeuw$28s.measure($28u,$28v);
};unmodifiableList$.span=function($28w,$28x){var unmodifiableList$=this;
return unmodifiableList$.$1dkeuw$28s.span($28w,$28x);
};unmodifiableList$.spanFrom=function($28y){var unmodifiableList$=this;
return unmodifiableList$.$1dkeuw$28s.spanFrom($28y);
};unmodifiableList$.spanTo=function($28z){var unmodifiableList$=this;
return unmodifiableList$.$1dkeuw$28s.spanTo($28z);
};unmodifiableList$.equals=function($290){var unmodifiableList$=this;
return m$1.$eq$(unmodifiableList$.$1dkeuw$28s,$290);
};m$1.atr$(unmodifiableList$,'hash',function(){
var unmodifiableList$=this;
return unmodifiableList$.$1dkeuw$28s.hash;
},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:UnmodifiableList,pa:3,d:['ceylon.collection','UnmodifiableList','$at','hash']};});
unmodifiableList$.clone=function(){var unmodifiableList$=this;
return UnmodifiableList(unmodifiableList$.$1dkeuw$28s.clone(),{Element$UnmodifiableList:unmodifiableList$.$$targs$$.Element$UnmodifiableList});
};unmodifiableList$.each=function($291){var unmodifiableList$=this;
return unmodifiableList$.$1dkeuw$28s.each($291);
};
})(UnmodifiableList.$$.prototype);
}
return UnmodifiableList;
}
ex$.$init$UnmodifiableList=$init$UnmodifiableList;
$init$UnmodifiableList();
UnmodifiableList.inst$$=function($292){
var unmodifiableList$=new UnmodifiableList.$$;
m$1.set_type_args(unmodifiableList$,{Element$UnmodifiableList:$292.$$targs$$.Type$Class.a.Element$UnmodifiableList});
m$1.set_type_args(unmodifiableList$,{Element$List:unmodifiableList$.$$targs$$.Element$UnmodifiableList,Element$Collection:unmodifiableList$.$$targs$$.Element$UnmodifiableList,Element$Iterable:unmodifiableList$.$$targs$$.Element$UnmodifiableList,Absent$Iterable:{t:m$1.Null},Element$Category:{t:m$1.$_Object},Item$Correspondence:unmodifiableList$.$$targs$$.Element$UnmodifiableList,Key$Correspondence:{t:m$1.Integer},Subrange$Ranged:{t:m$1.List,a:{Element$List:unmodifiableList$.$$targs$$.Element$UnmodifiableList}},Index$Ranged:{t:m$1.Integer},Element$Ranged:unmodifiableList$.$$targs$$.Element$UnmodifiableList});
return unmodifiableList$;
};
UnmodifiableList.ser$get$=function(ref,o){var n=ref.attribute.qualifiedName;if(n==='ceylon.collection::UnmodifiableList.list')return o.$1dkeuw$28s_;
else throw new TypeError('unknown attribute');
};
UnmodifiableList.ser$set$=function(ref,o,i){if(!m$1.is$(ref,{t:m$1.Member$serialization}))throw m$1.AssertionError('unexpected reachable reference');var n=ref.attribute.qualifiedName;
if(n==='ceylon.collection::UnmodifiableList.list')o.$1dkeuw$28s_=i;
else throw new TypeError('unknown attribute');
};
UnmodifiableList.ser$refs$=function(o){return [m$1.MemberImpl$impl(m$1.OpenValue$jsint(m$1.lmp$(ex$,'ceylon.collection'),o.$prop$get$1dkeuw$28s))];
};
function unmodifiableList($293,$apctt9$){return UnmodifiableList($293,{Element$UnmodifiableList:$apctt9$.Element$unmodifiableList/*ORALE!Element inv pero Element var*/});
};
unmodifiableList.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.List,a:{Element$List:'Element$unmodifiableList'}},ps:[{nm:'list',mt:'prm',$t:{t:m$1.List,a:{Element$List:'Element$unmodifiableList'}}}],tp:{Element$unmodifiableList:{}},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:unmodifiableList')];},d:['ceylon.collection','unmodifiableList']};};
ex$.unmodifiableList=unmodifiableList;
function partition($294,$295,$zgqkqa$){
var $296=ArrayList(undefined,undefined,undefined,{Element$ArrayList:$zgqkqa$.Element$partition});
var $297=ArrayList(undefined,undefined,undefined,{Element$ArrayList:$zgqkqa$.Element$partition});
var $299;for(var $298=$294.iterator();($299=$298.next())!==m$1.finished();){
if($295($299)){
$296.add($299);
}
else{
$297.add($299);
}
}
return m$1.tpl$([$296.sequence(),$297.sequence()]);
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
mapMutator$.put={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'key',mt:'prm',$t:'Key$MapMutator'},{nm:'item',mt:'prm',$t:'Item$MapMutator'}],$cont:MapMutator,pa:7,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:MapMutator:$m:put')];},d:['ceylon.collection','MapMutator','$m','put']};}};mapMutator$.putAll=function($29a){
var mapMutator$=this;
var $29c;for(var $29b=$29a.iterator();($29c=$29b.next())!==m$1.finished();){
var $29d=$29c.key,$29e=$29c.item;
mapMutator$.put($29d,$29e);
}
};mapMutator$.putAll.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'entries',mt:'prm',$t:{t:m$1.Iterable,a:{Element$Iterable:{t:m$1.Entry,a:{Item$Entry:'Item$MapMutator',Key$Entry:'Key$MapMutator'}},Absent$Iterable:{t:m$1.Null}}}}],$cont:MapMutator,pa:9,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:MapMutator:$m:putAll')];},d:['ceylon.collection','MapMutator','$m','putAll']};};
mapMutator$.remove={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'key',mt:'prm',$t:'Key$MapMutator'}],$cont:MapMutator,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:MapMutator:$m:remove')];},d:['ceylon.collection','MapMutator','$m','remove']};}};mapMutator$.removeEntry=function($29f,$29g){
var mapMutator$=this;
var $29h;
if(m$1.nn$(($29h=mapMutator$.$_get($29f)))&&m$1.$eq$($29h,$29g)){
mapMutator$.remove($29f);
return true;
}
else{
return false;
}
};mapMutator$.removeEntry.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'key',mt:'prm',$t:'Key$MapMutator'},{nm:'item',mt:'prm',$t:{t:'i',l:['Item$MapMutator',{t:m$1.$_Object}]}}],$cont:MapMutator,pa:9,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:MapMutator:$m:removeEntry')];},d:['ceylon.collection','MapMutator','$m','removeEntry']};};
mapMutator$.replaceEntry=function($29i,$29j,$29k){
var mapMutator$=this;
var $29l;
if(m$1.nn$(($29l=mapMutator$.$_get($29i)))&&m$1.$eq$($29l,$29j)){
mapMutator$.put($29i,$29j);
return true;
}
else{
return false;
}
};mapMutator$.replaceEntry.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'key',mt:'prm',$t:'Key$MapMutator'},{nm:'item',mt:'prm',$t:{t:'i',l:['Item$MapMutator',{t:m$1.$_Object}]}},{nm:'newItem',mt:'prm',$t:'Item$MapMutator'}],$cont:MapMutator,pa:9,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:MapMutator:$m:replaceEntry')];},d:['ceylon.collection','MapMutator','$m','replaceEntry']};};
mapMutator$.removeAll=function($29m){
var mapMutator$=this;
var $29o;for(var $29n=$29m.iterator();($29o=$29n.next())!==m$1.finished();){
mapMutator$.remove($29o);
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
