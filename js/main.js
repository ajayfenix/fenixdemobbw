(function(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["offers"] = factory();
	else
		root["og"] = root["og"] || {}, root["og"]["offers"] = factory();
})(window, function() {
  var module={}, exports={};
 (factory => {
if(typeof exports === 'object' && typeof module === 'object')
  module.exports = factory();
else if(typeof define === 'function' && define.amd)
  define([], factory);
else {
  window.og = window.og || {};
  window.og['offers'] = factory();
}      
})(()=>{ 
var lib=(()=>{var ei=Object.create;var ke=Object.defineProperty;var ti=Object.getOwnPropertyDescriptor;var ri=Object.getOwnPropertyNames;var oi=Object.getPrototypeOf,ni=Object.prototype.hasOwnProperty;var yo=t=>ke(t,"__esModule",{value:!0}),n=(t,e)=>ke(t,"name",{value:e,configurable:!0});var S=(t,e)=>()=>(t&&(e=t(t=0)),e);var re=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports),tr=(t,e)=>{yo(t);for(var r in e)ke(t,r,{get:e[r],enumerable:!0})},si=(t,e,r)=>{if(e&&typeof e=="object"||typeof e=="function")for(let o of ri(e))!ni.call(t,o)&&o!=="default"&&ke(t,o,{get:()=>e[o],enumerable:!(r=ti(e,o))||r.enumerable});return t},ye=t=>si(yo(ke(t!=null?ei(oi(t)):{},"default",t&&t.__esModule&&"default"in t?{get:()=>t.default,enumerable:!0}:{value:t,enumerable:!0})),t);var oe,ne,se,ot,Ao,q,qe,nt,st,No,it,_e,ko,at,ct,Io,lt,ut,pt,qo,Uo,dt,Do,ft,xe,Fo,ht,mt,Ue,De,gt,yt,ie,G,bt,_t,xt,ae=S(()=>{oe="OPTIN_PRODUCT",ne="OPTOUT_PRODUCT",se="PRODUCT_CHANGE_FREQUENCY",ot="SET_MERCHANT_ID",Ao="REQUEST_OFFER",q="RECEIVE_OFFER",qe="PRODUCT_HAS_CHANGED",nt="CREATED_SESSION_ID",st="SET_AUTH_URL",No="REQUEST_AUTH",it="AUTHORIZE",_e="UNAUTHORIZED",ko="REQUEST_ORDERS",at="RECEIVE_ORDERS",ct="RECEIVE_ORDER_ITEMS",Io="FETCH_RESPONSE_ERROR",lt="SET_ENVIRONMENT_STAGING",ut="SET_ENVIRONMENT_DEV",pt="SET_ENVIRONMENT_PROD",qo="CONCLUDE_UPSELL",Uo="REQUEST_CREATE_IU_ORDER",dt="CREATE_ONE_TIME",Do="REQUEST_CONVERT_ONE_TIME",ft="CONVERT_ONE_TIME",xe="CHECKOUT",Fo="RECEIVE_FETCH",ht="SET_LOCALE",mt="SET_CONFIG",Ue="SET_PREVIEW_STANDARD_OFFER",De="SET_PREVIEW_UPSELL_OFFER",gt="ADD_TEMPLATE",yt="SET_TEMPLATES",ie="LOCAL_STORAGE_CHANGE",G="LOCAL_STORAGE_CLEAR",bt="SET_FIRST_ORDER_PLACE_DATE",_t="SET_PRODUCT_TO_SUBSCRIBE",xt="RECEIVE_PRODUCT_PLANS"});var vt=re((Xc,zo)=>{var Ei="Expected a function",Lo="__lodash_hash_undefined__",Si="[object Function]",vi="[object GeneratorFunction]",wi=/[\\^$.*+?()[\]{}|]/g,Ti=/^\[object .+?Constructor\]$/,Oi=typeof window=="object"&&window&&window.Object===Object&&window,Ci=typeof self=="object"&&self&&self.Object===Object&&self,jo=Oi||Ci||Function("return this")();function Pi(t,e){return t==null?void 0:t[e]}n(Pi,"getValue");function Ri(t){var e=!1;if(t!=null&&typeof t.toString!="function")try{e=!!(t+"")}catch{}return e}n(Ri,"isHostObject");var Ai=Array.prototype,Ni=Function.prototype,Mo=Object.prototype,lr=jo["__core-js_shared__"],Vo=function(){var t=/[^.]+$/.exec(lr&&lr.keys&&lr.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}(),$o=Ni.toString,ur=Mo.hasOwnProperty,ki=Mo.toString,Ii=RegExp("^"+$o.call(ur).replace(wi,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),qi=Ai.splice,Ui=Bo(jo,"Map"),Fe=Bo(Object,"create");function ce(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var o=t[e];this.set(o[0],o[1])}}n(ce,"Hash");function Di(){this.__data__=Fe?Fe(null):{}}n(Di,"hashClear");function Fi(t){return this.has(t)&&delete this.__data__[t]}n(Fi,"hashDelete");function Li(t){var e=this.__data__;if(Fe){var r=e[t];return r===Lo?void 0:r}return ur.call(e,t)?e[t]:void 0}n(Li,"hashGet");function ji(t){var e=this.__data__;return Fe?e[t]!==void 0:ur.call(e,t)}n(ji,"hashHas");function Mi(t,e){var r=this.__data__;return r[t]=Fe&&e===void 0?Lo:e,this}n(Mi,"hashSet");ce.prototype.clear=Di;ce.prototype.delete=Fi;ce.prototype.get=Li;ce.prototype.has=ji;ce.prototype.set=Mi;function Se(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var o=t[e];this.set(o[0],o[1])}}n(Se,"ListCache");function Vi(){this.__data__=[]}n(Vi,"listCacheClear");function $i(t){var e=this.__data__,r=Et(e,t);if(r<0)return!1;var o=e.length-1;return r==o?e.pop():qi.call(e,r,1),!0}n($i,"listCacheDelete");function Bi(t){var e=this.__data__,r=Et(e,t);return r<0?void 0:e[r][1]}n(Bi,"listCacheGet");function Hi(t){return Et(this.__data__,t)>-1}n(Hi,"listCacheHas");function zi(t,e){var r=this.__data__,o=Et(r,t);return o<0?r.push([t,e]):r[o][1]=e,this}n(zi,"listCacheSet");Se.prototype.clear=Vi;Se.prototype.delete=$i;Se.prototype.get=Bi;Se.prototype.has=Hi;Se.prototype.set=zi;function le(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var o=t[e];this.set(o[0],o[1])}}n(le,"MapCache");function Gi(){this.__data__={hash:new ce,map:new(Ui||Se),string:new ce}}n(Gi,"mapCacheClear");function Wi(t){return St(this,t).delete(t)}n(Wi,"mapCacheDelete");function Yi(t){return St(this,t).get(t)}n(Yi,"mapCacheGet");function Qi(t){return St(this,t).has(t)}n(Qi,"mapCacheHas");function Ji(t,e){return St(this,t).set(t,e),this}n(Ji,"mapCacheSet");le.prototype.clear=Gi;le.prototype.delete=Wi;le.prototype.get=Yi;le.prototype.has=Qi;le.prototype.set=Ji;function Et(t,e){for(var r=t.length;r--;)if(ta(t[r][0],e))return r;return-1}n(Et,"assocIndexOf");function Ki(t){if(!Ho(t)||Xi(t))return!1;var e=ra(t)||Ri(t)?Ii:Ti;return e.test(ea(t))}n(Ki,"baseIsNative");function St(t,e){var r=t.__data__;return Zi(e)?r[typeof e=="string"?"string":"hash"]:r.map}n(St,"getMapData");function Bo(t,e){var r=Pi(t,e);return Ki(r)?r:void 0}n(Bo,"getNative");function Zi(t){var e=typeof t;return e=="string"||e=="number"||e=="symbol"||e=="boolean"?t!=="__proto__":t===null}n(Zi,"isKeyable");function Xi(t){return!!Vo&&Vo in t}n(Xi,"isMasked");function ea(t){if(t!=null){try{return $o.call(t)}catch{}try{return t+""}catch{}}return""}n(ea,"toSource");function pr(t,e){if(typeof t!="function"||e&&typeof e!="function")throw new TypeError(Ei);var r=n(function(){var o=arguments,s=e?e.apply(this,o):o[0],i=r.cache;if(i.has(s))return i.get(s);var a=t.apply(this,o);return r.cache=i.set(s,a),a},"memoized");return r.cache=new(pr.Cache||le),r}n(pr,"memoize");pr.Cache=le;function ta(t,e){return t===e||t!==t&&e!==e}n(ta,"eq");function ra(t){var e=Ho(t)?ki.call(t):"";return e==Si||e==vi}n(ra,"isFunction");function Ho(t){var e=typeof t;return!!t&&(e=="object"||e=="function")}n(Ho,"isObject");zo.exports=pr});var wt,dr,Le,je,Tt,Go,Wo,oa,na,sa,ia,aa,Me,fr,ca,Yo,Ve,la,W,Y=S(()=>{wt=ye(vt()),dr=n((...t)=>JSON.stringify(t),"memoizeKey"),Le=n(t=>(...e)=>fetch(...t(...e)).then(r=>r.json()),"withFetchJson"),je=n(t=>(e,...r)=>{if(!e)throw Error("host required");let[o,s={}]=t(...r);return[`${e.replace(/\/+$/,"")}${o}`,s]},"withHost"),Tt=n(t=>(e,...r)=>{if(!e)throw Error("auth required");let[o,s={}]=t(...r);return[o,{...s,headers:{Authorization:JSON.stringify(e),...s.headers}}]},"withAuth"),Go=n(t=>(...e)=>{let[r,o={}]=t(...e);return[r,{method:"POST",...o,body:JSON.stringify(o.body),headers:{"Content-type":"application/json",...o.headers}}]},"withJsonBody"),Wo=n((t=[])=>(Array.isArray(t)?t:Object.entries(t)).map(([e,r])=>[e,encodeURIComponent(r)].join("=")).join("&"),"toQuery"),oa=n(t=>JSON.stringify([].concat(t).map(e=>typeof e=="object"?e.id:e).filter(e=>e)),"toProductId"),na=(0,wt.default)(Le(je((t,e,r,o="pdp")=>{if(!t)throw Error("merchantId required");if(!e)throw Error("sessionId required");if(!r)throw Error("product required");let s=Wo([["session_id",e],["page_type",1],["p",oa(r)],["module_view",JSON.stringify(["regular"])]]);return[`/offer/${t}/${o}?${s}`]})),dr),sa=(0,wt.default)(Le(je(Tt((t=1,e="place")=>[`/orders/?${Wo([["status",t],["ordering",e]])}`]))),dr),ia=(0,wt.default)(Le(je(Tt(t=>{if(!t)throw Error("orderId required");return[`/items/?order=${t}`]}))),dr),aa=Le(je(Tt(Go((t,e,r,o)=>{if(!t)throw Error("product required");if(!e)throw Error("order required");if(!r)throw Error("quantity required");if(r<=0)throw Error("quantity must be greater or equal than one");if(!o)throw Error("offer required");return["/items/iu/",{body:{product:t,order:e,quantity:r,offer:o}}]})))),Me=n(t=>{if(typeof t=="object")return{...t};let[e,r]=(t||"").split(/_/).map(o=>parseInt(o,10));return e&&r&&{every:e,every_period:r}},"parseFrequency"),fr=n(t=>t.match(/^\d+_\d$/),"isFrequencyValid"),ca=n((t,e)=>String.prototype.localeCompare.call(t&&t.split("_").reverse().join("_"),e&&e.split("_").reverse().join("_")),"compareFrequencies"),Yo=n(t=>[...new Set(t&&t.split(/\s+/))].filter(fr).sort(ca),"parseFrequenciesList"),Ve=n(t=>{if(typeof t=="object"){let{every:e,period:r,every_period:o}=t;return`${e}_${r||o}`}return typeof t=="string"?t:""},"stringifyFrequency"),la=Le(je(Tt(Go((t,e,r)=>{if(!t)throw Error("item required");if(!e)throw Error("frequency required");let o=Me(e);if(!o)throw Error("invalid frequency");return["/subscriptions/create_from_item/",{body:{item:t.public_id,offer:r,...o}}]})))),W={fetchOffer:na,fetchOrders:sa,fetchItems:ia,createOneTime:aa,convertOneTimeToSubscription:la}});var yr=re((Rt,Xo)=>{(function(t,e){typeof Rt=="object"&&typeof Xo!="undefined"?e(Rt):typeof define=="function"&&define.amd?define(["exports"],e):(t=t||self,e(t.throttleDebounce={}))})(Rt,function(t){"use strict";function e(o,s,i,a){var c,l=!1,d=0;function g(){c&&clearTimeout(c)}n(g,"clearExistingTimeout");function p(){g(),l=!0}n(p,"cancel"),typeof s!="boolean"&&(a=i,i=s,s=void 0);function m(){for(var E=arguments.length,y=new Array(E),f=0;f<E;f++)y[f]=arguments[f];var T=this,O=Date.now()-d;if(l)return;function b(){d=Date.now(),i.apply(T,y)}n(b,"exec");function P(){c=void 0}n(P,"clear"),a&&!c&&b(),g(),a===void 0&&O>o?b():s!==!0&&(c=setTimeout(a?P:b,a===void 0?o-O:o))}return n(m,"wrapper"),m.cancel=p,m}n(e,"throttle");function r(o,s,i){return i===void 0?e(o,s,!1):e(o,i,s!==!1)}n(r,"debounce"),t.debounce=r,t.throttle=e,Object.defineProperty(t,"__esModule",{value:!0})})});function tn(){return typeof window.og_auth!="undefined"?At(window.og_auth):null}async function ja(t=100){return new Promise(e=>{setTimeout(()=>e(tn()),t)})}async function rn(t,e=Da,r=Fa){let o;if(o=At(tn())||At(e()),o)return o;if(t&&typeof t=="string"){let s=await fetch(t);s.status>=200&&s.status<300&&(o=e()||await(La(s)?s.json():Promise.resolve(r(t)).then(e)))}else o||(o=await ja());if(o=At(o),o)return o;throw new Error("Unauthorized")}var en,Da,At,Fa,La,on=S(()=>{en=/^og_auth=/,Da=n((t=en)=>(document.cookie.split(/;\s*/).find(e=>e.match(t))||"").replace(en,""),"c"),At=n(t=>{if(typeof t=="object")return t;let e=String(t||"").split("|");return e.length===3?{sig_field:e[0],ts:parseInt(e[1],10),sig:e[2]}:null},"r"),Fa=n(t=>new Promise((e,r)=>{let o=document.createElement("iframe");o.style.setProperty("display","none","important"),document.body.appendChild(o),o.onload=e,o.onerror=r,o.src=t}),"p"),La=n(t=>(t.headers.get("content-type")||"").indexOf("application/json")!==-1,"d");n(tn,"a");n(ja,"f");n(rn,"u")});var Q,we,nn,Nt,sn,an,Ma,Va,br,J,cn,kt,ln,$a,_r,xr,It,Er,qt,Te,Sr,Ba,un,pn,Ha,za,Ga,Wa,dn,fn,hn,mn,gn,yn,bn,N=S(()=>{on();ae();Y();Q=n((t,e)=>({type:oe,payload:{product:t,frequency:e}}),"optinProduct"),we=n(t=>({type:ne,payload:{product:t}}),"optoutProduct"),nn=n((t,e)=>({type:qe,payload:{newProduct:t,product:e}}),"productHasChangedComponents"),Nt=n((t,e)=>({type:se,payload:{product:t,frequency:e}}),"productChangeFrequency"),sn=n(t=>({type:qo,payload:{product:t}}),"concludeUpsell"),an=n(t=>({type:ot,payload:t}),"setMerchantId"),Ma=n(t=>({type:nt,payload:`${t}.${Math.floor(Math.random()*999999)}.${Math.round(new Date().getTime()/1e3)}`}),"createSessionId"),Va=n(t=>({type:No,payload:t}),"requestAuth"),br=n((t,e,r,o)=>({type:it,payload:{public_id:t,sig_field:e,ts:r,sig:o}}),"authorize"),J=n(t=>({type:_e,payload:t}),"unauthorized"),cn=n(t=>({type:st,payload:t}),"setAuthUrl"),kt=n(t=>({type:Fo,payload:t}),"fetchDone"),ln=n((t=rn)=>n(function(r,o){if(window.og&&window.og.previewMode)return r(J({message:"Offers are running in preview mode"}));let{merchantId:s,authUrl:i}=o(),a=Va(i);return r(a),t(i).then(({sig_field:c,ts:l,sig:d})=>r(br(s,c,l,d)),c=>r(J(c))).finally(()=>r(kt(a)))},"fetchAuthThunk"),"fetchAuth"),$a=n((t,e)=>({type:ko,payload:{status:t,ordering:e}}),"requestOrders"),_r=n(t=>({type:at,payload:t}),"receiveOrders"),xr=n(t=>({type:ct,payload:t}),"receiveItems"),It=n((t=1,e="place")=>n(function(o,s){let{environment:{legoUrl:i},auth:a}=s();if(!a)return o(J("No auth set."));let c=$a(t,e);return o(c),W.fetchOrders(i,a,t,e).then(l=>{if(l.results){o(_r(l));let d=(l.results[0]||{}).public_id;if(d)return W.fetchItems(i,a,d).then(g=>o(xr(g)))}return o(J(l.detail)),null},l=>o(J(l))).finally(()=>o(kt(c)))},"fetchOrdersThunk"),"fetchOrders"),Er=n(t=>{switch(t){case"dev":return{type:ut,payload:t};case"staging":return{type:lt,payload:t};case"prod":return{type:pt,payload:t};default:throw new Error(`${t} is not a supported environment`)}},"setEnvironment"),qt=n(()=>(t,e)=>{let{merchantId:r,sessionId:o}=e();return(!o||r&&!o.startsWith(r))&&t(Ma(r)),o},"requestSessionId"),Te=n(t=>({type:q,payload:t}),"receiveOffer"),Sr=n(t=>({type:Io,payload:t}),"fetchResponseError"),Ba=n((t,e="pdp")=>({type:Ao,payload:{product:t,module:e}}),"requestOffer"),un=n((t,e="pdp")=>n(function(o,s){let{merchantId:i,sessionId:a,environment:{apiUrl:c}}=s(),l=Ba(t,e);return o(l),W.fetchOffer(c,i,a,t,e).then(d=>o(Te(d)),d=>o(Sr(d))).finally(()=>o(kt(l)))},"fetchOfferThunk"),"fetchOffer"),pn=n(()=>({type:xe}),"checkout"),Ha=n((t,e,r,o)=>({type:Uo,payload:{product:t,order:e,quantity:r,offerId:o}}),"requestCreateOneTime"),za=n(t=>({type:dt,payload:t}),"receiveCreateOneTime"),Ga=n((t,e)=>({type:Do,payload:{item:t,frequency:e}}),"requestConvertOneTimeToSubscription"),Wa=n((t,e)=>({type:ft,payload:{response:t,product:e}}),"receiveConvertOneTime"),dn=n((t,e,r,o=!1,s=null)=>n(function(a,c){let{auth:l,environment:{legoUrl:d},previewUpsellOffer:g,offerId:p}=c();if(!l)return a(J("No auth set."));let m=Ha(t,e,r,p);return a(m),(g?Promise.resolve({legoUrl:d,product:t,order:e,quantity:r,offer:p}):W.createOneTime(d,l,t.id,e,r,p)).then(E=>(a(za(E)),o?(a(Ga(E,s)),(g?Promise.resolve({item:E,frequency:s}):W.convertOneTimeToSubscription(d,l,E,s,p)).then(y=>a(Wa(y,t)),y=>a(Sr(y)))):E),E=>a(Sr(E))).finally(()=>a(kt(m)))},"createIuThunk"),"createIu"),fn=n(t=>({type:ht,payload:t}),"setLocale"),hn=n(t=>({type:mt,payload:t}),"setConfig"),mn=n((t,e,r)=>({type:gt,payload:{selector:t,markup:e,config:r}}),"addTemplate"),gn=n(t=>({type:yt,payload:t}),"setTemplates"),yn=n((t,e)=>({type:bt,payload:{product:t,firstOrderPlaceDate:e}}),"setFirstOrderPlaceDate"),bn=n((t,e)=>({type:_t,payload:{product:t,productToSubscribe:e}}),"setProductToSubscribe")});var Tr,pe,de=S(()=>{Tr=typeof window!="undefined"&&window.customElements!=null&&window.customElements.polyfillWrapFlushCallback!==void 0,pe=n((t,e,r=null)=>{for(;e!==r;){let o=e.nextSibling;t.removeChild(e),e=o}},"removeNodes")});var U,Or,Rn,Oe,fe,An,Be,M,Ut,K=S(()=>{U=`{{lit-${String(Math.random()).slice(2)}}}`,Or=`<!--${U}-->`,Rn=new RegExp(`${U}|${Or}`),Oe="$lit$",fe=class{constructor(e,r){this.parts=[],this.element=r;let o=[],s=[],i=document.createTreeWalker(r.content,133,null,!1),a=0,c=-1,l=0,{strings:d,values:{length:g}}=e;for(;l<g;){let p=i.nextNode();if(p===null){i.currentNode=s.pop();continue}if(c++,p.nodeType===1){if(p.hasAttributes()){let m=p.attributes,{length:E}=m,y=0;for(let f=0;f<E;f++)An(m[f].name,Oe)&&y++;for(;y-- >0;){let f=d[l],T=Ut.exec(f)[2],O=T.toLowerCase()+Oe,b=p.getAttribute(O);p.removeAttribute(O);let P=b.split(Rn);this.parts.push({type:"attribute",index:c,name:T,strings:P}),l+=P.length-1}}p.tagName==="TEMPLATE"&&(s.push(p),i.currentNode=p.content)}else if(p.nodeType===3){let m=p.data;if(m.indexOf(U)>=0){let E=p.parentNode,y=m.split(Rn),f=y.length-1;for(let T=0;T<f;T++){let O,b=y[T];if(b==="")O=M();else{let P=Ut.exec(b);P!==null&&An(P[2],Oe)&&(b=b.slice(0,P.index)+P[1]+P[2].slice(0,-Oe.length)+P[3]),O=document.createTextNode(b)}E.insertBefore(O,p),this.parts.push({type:"node",index:++c})}y[f]===""?(E.insertBefore(M(),p),o.push(p)):p.data=y[f],l+=f}}else if(p.nodeType===8)if(p.data===U){let m=p.parentNode;(p.previousSibling===null||c===a)&&(c++,m.insertBefore(M(),p)),a=c,this.parts.push({type:"node",index:c}),p.nextSibling===null?p.data="":(o.push(p),c--),l++}else{let m=-1;for(;(m=p.data.indexOf(U,m+1))!==-1;)this.parts.push({type:"node",index:-1}),l++}}for(let p of o)p.parentNode.removeChild(p)}};n(fe,"Template");An=n((t,e)=>{let r=t.length-e.length;return r>=0&&t.slice(r)===e},"endsWith"),Be=n(t=>t.index!==-1,"isTemplatePartActive"),M=n(()=>document.createComment(""),"createMarker"),Ut=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/});function Pr(t,e){let{element:{content:r},parts:o}=t,s=document.createTreeWalker(r,Cr,null,!1),i=He(o),a=o[i],c=-1,l=0,d=[],g=null;for(;s.nextNode();){c++;let p=s.currentNode;for(p.previousSibling===g&&(g=null),e.has(p)&&(d.push(p),g===null&&(g=p)),g!==null&&l++;a!==void 0&&a.index===c;)a.index=g!==null?-1:a.index-l,i=He(o,i),a=o[i]}d.forEach(p=>p.parentNode.removeChild(p))}function Nn(t,e,r=null){let{element:{content:o},parts:s}=t;if(r==null){o.appendChild(e);return}let i=document.createTreeWalker(o,Cr,null,!1),a=He(s),c=0,l=-1;for(;i.nextNode();)for(l++,i.currentNode===r&&(c=Ka(e),r.parentNode.insertBefore(e,r));a!==-1&&s[a].index===l;){if(c>0){for(;a!==-1;)s[a].index+=c,a=He(s,a);return}a=He(s,a)}}var Cr,Ka,He,kn=S(()=>{K();Cr=133;n(Pr,"removeNodesFromTemplate");Ka=n(t=>{let e=t.nodeType===11?0:1,r=document.createTreeWalker(t,Cr,null,!1);for(;r.nextNode();)e++;return e},"countNodes"),He=n((t,e=-1)=>{for(let r=e+1;r<t.length;r++){let o=t[r];if(Be(o))return r}return-1},"nextActiveIndexInTemplateParts");n(Nn,"insertNodeIntoTemplate")});var Za,he,Rr=S(()=>{Za=new WeakMap,he=n(t=>typeof t=="function"&&Za.has(t),"isDirective")});var k,Dt,Ar=S(()=>{k={},Dt={}});var Z,Ft=S(()=>{de();K();Z=class{constructor(e,r,o){this.__parts=[],this.template=e,this.processor=r,this.options=o}update(e){let r=0;for(let o of this.__parts)o!==void 0&&o.setValue(e[r]),r++;for(let o of this.__parts)o!==void 0&&o.commit()}_clone(){let e=Tr?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),r=[],o=this.template.parts,s=document.createTreeWalker(e,133,null,!1),i=0,a=0,c,l=s.nextNode();for(;i<o.length;){if(c=o[i],!Be(c)){this.__parts.push(void 0),i++;continue}for(;a<c.index;)a++,l.nodeName==="TEMPLATE"&&(r.push(l),s.currentNode=l.content),(l=s.nextNode())===null&&(s.currentNode=r.pop(),l=s.nextNode());if(c.type==="node"){let d=this.processor.handleTextExpression(this.options);d.insertAfterNode(l.previousSibling),this.__parts.push(d)}else this.__parts.push(...this.processor.handleAttributeExpressions(l,c.name,c.strings,this.options));i++}return Tr&&(document.adoptNode(e),customElements.upgrade(e)),e}};n(Z,"TemplateInstance")});var In,ec,B,Lt=S(()=>{de();K();In=window.trustedTypes&&trustedTypes.createPolicy("lit-html",{createHTML:t=>t}),ec=` ${U} `,B=class{constructor(e,r,o,s){this.strings=e,this.values=r,this.type=o,this.processor=s}getHTML(){let e=this.strings.length-1,r="",o=!1;for(let s=0;s<e;s++){let i=this.strings[s],a=i.lastIndexOf("<!--");o=(a>-1||o)&&i.indexOf("-->",a+1)===-1;let c=Ut.exec(i);c===null?r+=i+(o?ec:Or):r+=i.substr(0,c.index)+c[1]+c[2]+Oe+c[3]+U}return r+=this.strings[e],r}getTemplateElement(){let e=document.createElement("template"),r=this.getHTML();return In!==void 0&&(r=In.createHTML(r)),e.innerHTML=r,e}};n(B,"TemplateResult")});var jt,Mt,Ce,ze,H,Ge,We,Vt,qn,Ye,tc,$t=S(()=>{Rr();de();Ar();Ft();Lt();K();jt=n(t=>t===null||!(typeof t=="object"||typeof t=="function"),"isPrimitive"),Mt=n(t=>Array.isArray(t)||!!(t&&t[Symbol.iterator]),"isIterable"),Ce=class{constructor(e,r,o){this.dirty=!0,this.element=e,this.name=r,this.strings=o,this.parts=[];for(let s=0;s<o.length-1;s++)this.parts[s]=this._createPart()}_createPart(){return new ze(this)}_getValue(){let e=this.strings,r=e.length-1,o=this.parts;if(r===1&&e[0]===""&&e[1]===""){let i=o[0].value;if(typeof i=="symbol")return String(i);if(typeof i=="string"||!Mt(i))return i}let s="";for(let i=0;i<r;i++){s+=e[i];let a=o[i];if(a!==void 0){let c=a.value;if(jt(c)||!Mt(c))s+=typeof c=="string"?c:String(c);else for(let l of c)s+=typeof l=="string"?l:String(l)}}return s+=e[r],s}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}};n(Ce,"AttributeCommitter");ze=class{constructor(e){this.value=void 0,this.committer=e}setValue(e){e!==k&&(!jt(e)||e!==this.value)&&(this.value=e,he(e)||(this.committer.dirty=!0))}commit(){for(;he(this.value);){let e=this.value;this.value=k,e(this)}this.value!==k&&this.committer.commit()}};n(ze,"AttributePart");H=class{constructor(e){this.value=void 0,this.__pendingValue=void 0,this.options=e}appendInto(e){this.startNode=e.appendChild(M()),this.endNode=e.appendChild(M())}insertAfterNode(e){this.startNode=e,this.endNode=e.nextSibling}appendIntoPart(e){e.__insert(this.startNode=M()),e.__insert(this.endNode=M())}insertAfterPart(e){e.__insert(this.startNode=M()),this.endNode=e.endNode,e.endNode=this.startNode}setValue(e){this.__pendingValue=e}commit(){if(this.startNode.parentNode===null)return;for(;he(this.__pendingValue);){let r=this.__pendingValue;this.__pendingValue=k,r(this)}let e=this.__pendingValue;e!==k&&(jt(e)?e!==this.value&&this.__commitText(e):e instanceof B?this.__commitTemplateResult(e):e instanceof Node?this.__commitNode(e):Mt(e)?this.__commitIterable(e):e===Dt?(this.value=Dt,this.clear()):this.__commitText(e))}__insert(e){this.endNode.parentNode.insertBefore(e,this.endNode)}__commitNode(e){this.value!==e&&(this.clear(),this.__insert(e),this.value=e)}__commitText(e){let r=this.startNode.nextSibling;e=e??"";let o=typeof e=="string"?e:String(e);r===this.endNode.previousSibling&&r.nodeType===3?r.data=o:this.__commitNode(document.createTextNode(o)),this.value=e}__commitTemplateResult(e){let r=this.options.templateFactory(e);if(this.value instanceof Z&&this.value.template===r)this.value.update(e.values);else{let o=new Z(r,e.processor,this.options),s=o._clone();o.update(e.values),this.__commitNode(s),this.value=o}}__commitIterable(e){Array.isArray(this.value)||(this.value=[],this.clear());let r=this.value,o=0,s;for(let i of e)s=r[o],s===void 0&&(s=new H(this.options),r.push(s),o===0?s.appendIntoPart(this):s.insertAfterPart(r[o-1])),s.setValue(i),s.commit(),o++;o<r.length&&(r.length=o,this.clear(s&&s.endNode))}clear(e=this.startNode){pe(this.startNode.parentNode,e.nextSibling,this.endNode)}};n(H,"NodePart");Ge=class{constructor(e,r,o){if(this.value=void 0,this.__pendingValue=void 0,o.length!==2||o[0]!==""||o[1]!=="")throw new Error("Boolean attributes can only contain a single expression");this.element=e,this.name=r,this.strings=o}setValue(e){this.__pendingValue=e}commit(){for(;he(this.__pendingValue);){let r=this.__pendingValue;this.__pendingValue=k,r(this)}if(this.__pendingValue===k)return;let e=!!this.__pendingValue;this.value!==e&&(e?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=e),this.__pendingValue=k}};n(Ge,"BooleanAttributePart");We=class extends Ce{constructor(e,r,o){super(e,r,o);this.single=o.length===2&&o[0]===""&&o[1]===""}_createPart(){return new Vt(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}};n(We,"PropertyCommitter");Vt=class extends ze{};n(Vt,"PropertyPart");qn=!1;(()=>{try{let t={get capture(){return qn=!0,!1}};window.addEventListener("test",t,t),window.removeEventListener("test",t,t)}catch{}})();Ye=class{constructor(e,r,o){this.value=void 0,this.__pendingValue=void 0,this.element=e,this.eventName=r,this.eventContext=o,this.__boundHandleEvent=s=>this.handleEvent(s)}setValue(e){this.__pendingValue=e}commit(){for(;he(this.__pendingValue);){let i=this.__pendingValue;this.__pendingValue=k,i(this)}if(this.__pendingValue===k)return;let e=this.__pendingValue,r=this.value,o=e==null||r!=null&&(e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive),s=e!=null&&(r==null||o);o&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),s&&(this.__options=tc(e),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=e,this.__pendingValue=k}handleEvent(e){typeof this.value=="function"?this.value.call(this.eventContext||this.element,e):this.value.handleEvent(e)}};n(Ye,"EventPart");tc=n(t=>t&&(qn?{capture:t.capture,passive:t.passive,once:t.once}:t.capture),"getOptions")});function Nr(t){let e=me.get(t.type);e===void 0&&(e={stringsArray:new WeakMap,keyString:new Map},me.set(t.type,e));let r=e.stringsArray.get(t.strings);if(r!==void 0)return r;let o=t.strings.join(U);return r=e.keyString.get(o),r===void 0&&(r=new fe(t,t.getTemplateElement()),e.keyString.set(o,r)),e.stringsArray.set(t.strings,r),r}var me,Bt=S(()=>{K();n(Nr,"templateFactory");me=new Map});var X,kr,Ir=S(()=>{de();$t();Bt();X=new WeakMap,kr=n((t,e,r)=>{let o=X.get(e);o===void 0&&(pe(e,e.firstChild),X.set(e,o=new H(Object.assign({templateFactory:Nr},r))),o.appendInto(e)),o.setValue(t),o.commit()},"render")});var Ht,qr,Ur=S(()=>{$t();Ht=class{handleAttributeExpressions(e,r,o,s){let i=r[0];return i==="."?new We(e,r.slice(1),o).parts:i==="@"?[new Ye(e,r.slice(1),s.eventContext)]:i==="?"?[new Ge(e,r.slice(1),o)]:new Ce(e,r,o).parts}handleTextExpression(e){return new H(e)}};n(Ht,"DefaultTemplateProcessor");qr=new Ht});var u,Dr=S(()=>{Ur();Lt();Ur();Rr();de();Ar();$t();Ir();Bt();Ft();Lt();K();typeof window!="undefined"&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.3.0");u=n((t,...e)=>new B(t,e,"html",qr),"html")});var Dn,zt,oc,nc,sc,Fn,ic,Ln,jn=S(()=>{de();kn();Ir();Bt();Ft();K();Dr();Dn=n((t,e)=>`${t}--${e}`,"getTemplateCacheKey"),zt=!0;typeof window.ShadyCSS=="undefined"?zt=!1:typeof window.ShadyCSS.prepareTemplateDom=="undefined"&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),zt=!1);oc=n(t=>e=>{let r=Dn(e.type,t),o=me.get(r);o===void 0&&(o={stringsArray:new WeakMap,keyString:new Map},me.set(r,o));let s=o.stringsArray.get(e.strings);if(s!==void 0)return s;let i=e.strings.join(U);if(s=o.keyString.get(i),s===void 0){let a=e.getTemplateElement();zt&&window.ShadyCSS.prepareTemplateDom(a,t),s=new fe(e,a),o.keyString.set(i,s)}return o.stringsArray.set(e.strings,s),s},"shadyTemplateFactory"),nc=["html","svg"],sc=n(t=>{nc.forEach(e=>{let r=me.get(Dn(e,t));r!==void 0&&r.keyString.forEach(o=>{let{element:{content:s}}=o,i=new Set;Array.from(s.querySelectorAll("style")).forEach(a=>{i.add(a)}),Pr(o,i)})})},"removeStylesFromLitTemplates"),Fn=new Set,ic=n((t,e,r)=>{Fn.add(t);let o=r?r.element:document.createElement("template"),s=e.querySelectorAll("style"),{length:i}=s;if(i===0){window.ShadyCSS.prepareTemplateStyles(o,t);return}let a=document.createElement("style");for(let d=0;d<i;d++){let g=s[d];g.parentNode.removeChild(g),a.textContent+=g.textContent}sc(t);let c=o.content;r?Nn(r,a,c.firstChild):c.insertBefore(a,c.firstChild),window.ShadyCSS.prepareTemplateStyles(o,t);let l=c.querySelector("style");if(window.ShadyCSS.nativeShadow&&l!==null)e.insertBefore(l.cloneNode(!0),e.firstChild);else if(r){c.insertBefore(a,c.firstChild);let d=new Set;d.add(a),Pr(r,d)}},"prepareTemplateStyles"),Ln=n((t,e,r)=>{if(!r||typeof r!="object"||!r.scopeName)throw new Error("The `scopeName` option is required.");let o=r.scopeName,s=X.has(e),i=zt&&e.nodeType===11&&!!e.host,a=i&&!Fn.has(o),c=a?document.createDocumentFragment():e;if(kr(t,c,Object.assign({templateFactory:oc(o)},r)),a){let l=X.get(c);X.delete(c);let d=l.value instanceof Z?l.value.template:void 0;ic(o,c,d),pe(e,e.firstChild),e.appendChild(c),X.set(e,l)}!s&&i&&window.ShadyCSS.styleElement(e.host)},"render")});var Mn,Fr,Vn,Lr,jr,Mr,Vr,$r,Br,Qe,Hr=S(()=>{window.JSCompiler_renameProperty=(t,e)=>t;Fr={toAttribute(t,e){switch(e){case Boolean:return t?"":null;case Object:case Array:return t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){switch(e){case Boolean:return t!==null;case Number:return t===null?null:Number(t);case Object:case Array:return JSON.parse(t)}return t}},Vn=n((t,e)=>e!==t&&(e===e||t===t),"notEqual"),Lr={attribute:!0,type:String,converter:Fr,reflect:!1,hasChanged:Vn},jr=1,Mr=1<<2,Vr=1<<3,$r=1<<4,Br="finalized",Qe=class extends HTMLElement{constructor(){super();this.initialize()}static get observedAttributes(){this.finalize();let e=[];return this._classProperties.forEach((r,o)=>{let s=this._attributeNameForProperty(o,r);s!==void 0&&(this._attributeToPropertyMap.set(s,o),e.push(s))}),e}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;let e=Object.getPrototypeOf(this)._classProperties;e!==void 0&&e.forEach((r,o)=>this._classProperties.set(o,r))}}static createProperty(e,r=Lr){if(this._ensureClassProperties(),this._classProperties.set(e,r),r.noAccessor||this.prototype.hasOwnProperty(e))return;let o=typeof e=="symbol"?Symbol():`__${e}`,s=this.getPropertyDescriptor(e,o,r);s!==void 0&&Object.defineProperty(this.prototype,e,s)}static getPropertyDescriptor(e,r,o){return{get(){return this[r]},set(s){let i=this[e];this[r]=s,this.requestUpdateInternal(e,i,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this._classProperties&&this._classProperties.get(e)||Lr}static finalize(){let e=Object.getPrototypeOf(this);if(e.hasOwnProperty(Br)||e.finalize(),this[Br]=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){let r=this.properties,o=[...Object.getOwnPropertyNames(r),...typeof Object.getOwnPropertySymbols=="function"?Object.getOwnPropertySymbols(r):[]];for(let s of o)this.createProperty(s,r[s])}}static _attributeNameForProperty(e,r){let o=r.attribute;return o===!1?void 0:typeof o=="string"?o:typeof e=="string"?e.toLowerCase():void 0}static _valueHasChanged(e,r,o=Vn){return o(e,r)}static _propertyValueFromAttribute(e,r){let o=r.type,s=r.converter||Fr,i=typeof s=="function"?s:s.fromAttribute;return i?i(e,o):e}static _propertyValueToAttribute(e,r){if(r.reflect===void 0)return;let o=r.type,s=r.converter;return(s&&s.toAttribute||Fr.toAttribute)(e,o)}initialize(){this._updateState=0,this._updatePromise=new Promise(e=>this._enableUpdatingResolver=e),this._changedProperties=new Map,this._saveInstanceProperties(),this.requestUpdateInternal()}_saveInstanceProperties(){this.constructor._classProperties.forEach((e,r)=>{if(this.hasOwnProperty(r)){let o=this[r];delete this[r],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(r,o)}})}_applyInstanceProperties(){this._instanceProperties.forEach((e,r)=>this[r]=e),this._instanceProperties=void 0}connectedCallback(){this.enableUpdating()}enableUpdating(){this._enableUpdatingResolver!==void 0&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(e,r,o){r!==o&&this._attributeToProperty(e,o)}_propertyToAttribute(e,r,o=Lr){let s=this.constructor,i=s._attributeNameForProperty(e,o);if(i!==void 0){let a=s._propertyValueToAttribute(r,o);if(a===void 0)return;this._updateState=this._updateState|Vr,a==null?this.removeAttribute(i):this.setAttribute(i,a),this._updateState=this._updateState&~Vr}}_attributeToProperty(e,r){if(this._updateState&Vr)return;let o=this.constructor,s=o._attributeToPropertyMap.get(e);if(s!==void 0){let i=o.getPropertyOptions(s);this._updateState=this._updateState|$r,this[s]=o._propertyValueFromAttribute(r,i),this._updateState=this._updateState&~$r}}requestUpdateInternal(e,r,o){let s=!0;if(e!==void 0){let i=this.constructor;o=o||i.getPropertyOptions(e),i._valueHasChanged(this[e],r,o.hasChanged)?(this._changedProperties.has(e)||this._changedProperties.set(e,r),o.reflect===!0&&!(this._updateState&$r)&&(this._reflectingProperties===void 0&&(this._reflectingProperties=new Map),this._reflectingProperties.set(e,o))):s=!1}!this._hasRequestedUpdate&&s&&(this._updatePromise=this._enqueueUpdate())}requestUpdate(e,r){return this.requestUpdateInternal(e,r),this.updateComplete}async _enqueueUpdate(){this._updateState=this._updateState|Mr;try{await this._updatePromise}catch{}let e=this.performUpdate();return e!=null&&await e,!this._hasRequestedUpdate}get _hasRequestedUpdate(){return this._updateState&Mr}get hasUpdated(){return this._updateState&jr}performUpdate(){if(!this._hasRequestedUpdate)return;this._instanceProperties&&this._applyInstanceProperties();let e=!1,r=this._changedProperties;try{e=this.shouldUpdate(r),e?this.update(r):this._markUpdated()}catch(o){throw e=!1,this._markUpdated(),o}e&&(this._updateState&jr||(this._updateState=this._updateState|jr,this.firstUpdated(r)),this.updated(r))}_markUpdated(){this._changedProperties=new Map,this._updateState=this._updateState&~Mr}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this._updatePromise}shouldUpdate(e){return!0}update(e){this._reflectingProperties!==void 0&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((r,o)=>this._propertyToAttribute(o,this[o],r)),this._reflectingProperties=void 0),this._markUpdated()}updated(e){}firstUpdated(e){}};n(Qe,"UpdatingElement");Mn=Br;Qe[Mn]=!0});var $n,Cu,Bn=S(()=>{$n=Element.prototype,Cu=$n.msMatchesSelector||$n.webkitMatchesSelector});var Gt,zr,Je,Hn,ac,w,Gr=S(()=>{Gt=window.ShadowRoot&&(window.ShadyCSS===void 0||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,zr=Symbol(),Je=class{constructor(e,r){if(r!==zr)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e}get styleSheet(){return this._styleSheet===void 0&&(Gt?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}};n(Je,"CSSResult");Hn=n(t=>new Je(String(t),zr),"unsafeCSS"),ac=n(t=>{if(t instanceof Je)return t.cssText;if(typeof t=="number")return t;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${t}. Use 'unsafeCSS' to pass non-literal values, but
            take care to ensure page security.`)},"textFromCSSResult"),w=n((t,...e)=>{let r=e.reduce((o,s,i)=>o+ac(s)+t[i+1],t[0]);return new Je(r,zr)},"css")});var zn,x,v=S(()=>{jn();Hr();Hr();Bn();Dr();Gr();Gr();(window.litElementVersions||(window.litElementVersions=[])).push("2.4.0");zn={},x=class extends Qe{static getStyles(){return this.styles}static _getUniqueStyles(){if(this.hasOwnProperty(JSCompiler_renameProperty("_styles",this)))return;let e=this.getStyles();if(Array.isArray(e)){let r=n((i,a)=>i.reduceRight((c,l)=>Array.isArray(l)?r(l,c):(c.add(l),c),a),"addStyles"),o=r(e,new Set),s=[];o.forEach(i=>s.unshift(i)),this._styles=s}else this._styles=e===void 0?[]:[e];this._styles=this._styles.map(r=>{if(r instanceof CSSStyleSheet&&!Gt){let o=Array.prototype.slice.call(r.cssRules).reduce((s,i)=>s+i.cssText,"");return Hn(o)}return r})}initialize(){super.initialize(),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){let e=this.constructor._styles;e.length!==0&&(window.ShadyCSS!==void 0&&!window.ShadyCSS.nativeShadow?window.ShadyCSS.ScopingShim.prepareAdoptedCssText(e.map(r=>r.cssText),this.localName):Gt?this.renderRoot.adoptedStyleSheets=e.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet):this._needsShimAdoptedStyleSheets=!0)}connectedCallback(){super.connectedCallback(),this.hasUpdated&&window.ShadyCSS!==void 0&&window.ShadyCSS.styleElement(this)}update(e){let r=this.render();super.update(e),r!==zn&&this.constructor.render(r,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(o=>{let s=document.createElement("style");s.textContent=o.cssText,this.renderRoot.appendChild(s)}))}render(){return zn}};n(x,"LitElement");x.finalized=!0;x.render=Ln});var Wt=re((Lu,Gn)=>{var cc={PAR_OPEN:"(".charCodeAt(0),PAR_CLOSE:")".charCodeAt(0),OP_NOT:"!".charCodeAt(0),BINARY_AND:"&".charCodeAt(0),BINARY_OR:"|".charCodeAt(0),LITERAL:"LITERAL",END:"END",LEAF:"LEAF",ATOMIC:"ATOMIC"};Gn.exports=cc});var Yn=re((ju,Wn)=>{var ge=Wt(),lc=n(t=>{let e="",r=[];for(let o of t){let s=o.charCodeAt(0);switch(s){case ge.PAR_OPEN:case ge.PAR_CLOSE:case ge.OP_NOT:case ge.BINARY_AND:case ge.BINARY_OR:e&&(r.push({type:ge.LITERAL,value:e}),e=""),r.push({type:s,value:o});break;default:e+=o}}return e&&r.push({type:ge.LITERAL,value:e}),r},"Tokenizer");Wn.exports=lc});var Jn=re((Mu,Qn)=>{var ee=Wt(),uc=n(t=>{let e=[],r=[];return t.forEach(s=>{switch(s.type){case ee.LITERAL:e.unshift(s);break;case ee.BINARY_AND:case ee.BINARY_OR:case ee.OP_NOT:case ee.PAR_OPEN:r.push(s);break;case ee.PAR_CLOSE:for(;r.length&&r[r.length-1].type!==ee.PAR_OPEN;)e.unshift(r.pop());r.pop(),r.length&&r[r.length-1].type===ee.OP_NOT&&e.unshift(r.pop());break;default:break}}),r.length&&[...r.reverse(),...e]||e},"PolishNotation"),pc=n(function*(t){for(let e=0;e<t.length-1;e++)yield t[e];return t[t.length-1]},"PolishGenerator");Qn.exports={PolishNotation:uc,PolishGenerator:pc}});var Zn=re((Vu,Kn)=>{var I=Wt(),F=class{constructor(e,r,o,s){this.op=e,this.left=r,this.right=o,this.literal=s}isLeaf(){return this.op===I.LEAF}isAtomic(){return this.isLeaf()||this.op===I.OP_NOT&&this.left.isLeaf()}getLiteralValue(){return this.literal}static CreateAnd(e,r){return new F(I.BINARY_AND,e,r)}static CreateNot(e){return new F(I.OP_NOT,e)}static CreateOr(e,r){return new F(I.BINARY_OR,e,r)}static CreateLiteral(e){return new F(I.LEAF,null,null,e)}};n(F,"ExpNode");var Pe=n(t=>{let e=t.next().value;switch(e.type){case I.LITERAL:return F.CreateLiteral(e.value);case I.OP_NOT:return F.CreateNot(Pe(t));case I.BINARY_AND:{let r=Pe(t),o=Pe(t);return F.CreateAnd(r,o)}case I.BINARY_OR:{let r=Pe(t),o=Pe(t);return F.CreateOr(r,o)}}return null},"make"),Re=n((t,e)=>{if(t.isLeaf())return e(t.getLiteralValue());if(t.op===I.OP_NOT)return!Re(t.left,e);if(t.op===I.BINARY_OR)return Re(t.left,e)||Re(t.right,e);if(t.op===I.BINARY_AND)return Re(t.left,e)&&Re(t.right,e)},"nodeEvaluator");Kn.exports={make:Pe,nodeEvaluator:Re}});var rs=re(($u,ts)=>{var dc=Yn(),Xn=Jn(),es=Zn(),fc=n((t,e)=>{let r=dc(t),o=Xn.PolishNotation(r),s=Xn.PolishGenerator(o),i=es.make(s);return es.nodeEvaluator(i,e)},"parse");ts.exports={parse:fc}});var Is={};tr(Is,{TestWizard:()=>er,default:()=>Dc});var er,Dc,qs=S(()=>{v();N();er=class extends x{static get styles(){return w`
      :host {
        position: fixed;
        top: 5em;
        right: 5em;
        background-color: rgba(255, 255, 255, 0.7);
        width: 400px;
        padding: 1em;
        border-radius: 5px;
        border: 1px solid #ccc;
        box-shadow: 2px 2px 0 0 #000;
      }

      button {
        margin: 0 0.5em 0.5em;
        background-color: gray;
        color: white;
        border: 0;
        border-radius: 3px;
        cursor: pointer;
        padding: 0.5em;
      }

      button.primary {
        background-color: blue;
        padding: 1em;
        color: white;
        border: 0;
        border-radius: 3px;
      }

      button[disabled] {
        background-color: #777;
      }

      div {
        margin-bottom: 0.5em;
      }

      .message {
        margin-left: 0.5em;
        margin: 1em;
      }

      .success {
        color: green;
      }

      .error {
        color: red;
      }

      .warning {
        color: orange;
      }
      a {
        color: white;
      }
    `}runTests(){this.results=[],this.disabled=!0,this.requestUpdate(),document.querySelectorAll("og-offer").forEach(r=>{let o=r.store.getState(),s=r.getAttribute("product"),i=r.getAttribute("location"),a={messages:this.getOfferAttributeMessages(s,i).concat(this.getOfferRequestMessages(s,o)),product:s};this.results.push(a)}),this.testsRan=!0,this.disabled=!1,this.requestUpdate()}getOfferAttributeMessages(e,r){let o=[];return e||o.push({name:"Offer element found but missing product attribute",type:"error"}),r||o.push({name:"Offer element found but missing location attribute",type:"warning"}),e&&r&&o.push({name:"Offer element found and properly tagged",type:"success"}),o}getOfferRequestMessages(e,r){let o=r.inStock[e],s=r.autoshipEligible[e],i=[];return e&&o===!1&&i.push({name:"This product is marked as out of stock in the OG database",type:"warning"}),e&&s===!1&&i.push({name:"This product is not eligible for autoship",type:"warning"}),e&&o===null&&s===null&&i.push({name:"This product does not exist in our database",type:"error"}),i}resultsCodeBlock(){return this.results.length===0?u`
          <div class="message error">No offer element found on the page</div>
        `:this.results.map((e,r)=>u`
              <div>For offer tag with product = "${e.product}"</div>
              ${e.messages.map(o=>u`
                  <div class="message ${o.type}">
                    ${o.name}
                  </div>
                `)}
              <button @click=${this.toggleProductFlags(r,{})}>
                Set inStock and eligible
              </button>
              <br />
              <button @click=${this.toggleProductFlags(r,{inStock:!1})}>
                Set to not inStock
              </button>
              <br />
              <button @click=${this.toggleProductFlags(r,{autoship:!1})}>
                Set to not eligible
              </button>
              <br />
              <button @click=${this.toggleProductFlags(r,{autoship:!1,inStock:!1})}>
                Set to not eligible and not in stock
              </button>
              <br />
              <button @click=${this.toggleUpsellPreview(r)}>
                Toggle upsell/regular in this offer
              </button>
              <br />
              <button @click=${this.toggleUpsellNextOrder(r)}>
                upsell product is in next order
              </button>
              <br />
            `)}toggleUpsellPreview(e){return r=>{r.preventDefault();let o=document.querySelectorAll("og-offer")[e];o.getAttribute("preview-upsell-offer")?o.removeAttribute("preview-upsell-offer"):o.setAttribute("preview-upsell-offer",!0),this.runTests()}}toggleProductFlags(e,{inStock:r=!0,autoship:o=!0,groups:s=["subscription","upsell"]}){return i=>{i.preventDefault();let a=document.querySelectorAll("og-offer")[e],c=a.product.id;a.store.dispatch(Te({in_stock:{[c]:r},eligibility_groups:{[c]:s},result:"success",autoship:{[c]:o},module_view:{regular:"58a01e9aacbe40389b5c7325d79091bb"},modifiers:{},incentives_display:{"47c01e9aacbe40389b5c7325d79091aa":{field:"sub_total",object:"order",type:"Discount Percent",value:5},e6534b9d877f41e586c37b7d8abc3a58:{field:"total_price",object:"item",type:"Discount Percent",value:5},f35e842710b24929922db4a529eecd40:{field:"total_price",object:"item",type:"Discount Percent",value:10},"5be321d7c17f4e18a757212b9a20bfcc":{field:"total_price",object:"item",type:"Discount Percent",value:1}},incentives:{[c]:{initial:["5be321d7c17f4e18a757212b9a20bfcc"],ongoing:["e6534b9d877f41e586c37b7d8abc3a58","47c01e9aacbe40389b5c7325d79091aa","f35e842710b24929922db4a529eecd40"]}}})),this.runTests()}}toggleUpsellNextOrder(e){return r=>{let o=document.querySelectorAll("og-offer")[e],s=o.product.id;r.preventDefault(),o.store.dispatch(xr({count:1,next:null,previous:null,results:[{order:"24d50352579511ea806cbc764e100cfd",offer:null,subscription:"8a076b7a0ea011e7a5bcbc764e105eda",product:s,components:[],quantity:1,public_id:"24d6901e579511ea806cbc764e100cfd",product_attribute:null,price:"14.99",extra_cost:"0.00",total_price:"13.49",one_time:!1,frozen:!1,first_placed:null}]})),this.runTests()}}render(){return u`
      <div>
        ${this.testsRan?this.resultsCodeBlock():u`
              <div>Click the button to run tests</div>
            `}
        <button ?disabled=${this.disabled} @click="${this.runTests.bind(this)}" class="primary">Run Test</button>
      </div>
    `}};n(er,"TestWizard");Dc=er});var Mc={};tr(Mc,{addOptinChangedCallback:()=>Bs,addTemplate:()=>Qs,clear:()=>$s,config:()=>Ws,default:()=>jc,disableOptinChangedCallbacks:()=>Hs,getOptins:()=>Vs,getProductsForPurchasePost:()=>Ms,initialize:()=>go,offers:()=>_,previewMode:()=>Gs,register:()=>zs,resolveSettings:()=>Zs,setAuthUrl:()=>js,setEnvironment:()=>Fs,setLocale:()=>Ys,setMerchantId:()=>Ls,setPublicPath:()=>Ks,setTemplates:()=>Js});var ii=Object.defineProperty,tt=n((t,e)=>ii(t,"name",{value:e,configurable:!0}),"s"),ai=tt(t=>e=>t.indexOf(e.origin)>=0,"createIsMessageAllowed"),bo=["https://rc3.ordergroove.com","https://rc3.stg.ordergroove.com","http://localhost:3000",window.location.origin],_o=tt(t=>(e,r)=>{bo.forEach(o=>t.postMessage({ogType:e,...r},o))},"createBroadcastMessage");function rr(t){let e=ai(bo),r=_o(t.source);if(e(t)&&t.data.ogType==="READY"){let o="//static.ordergroove.com/@ordergroove/offers-live-editor/0.4.2/dist/";o.startsWith("//")&&(o=window.location.protocol+o),o.endsWith("/")||(o+="/"),import(`${o}client.js`).then(({initializeClient:s})=>{s(e,r),window.removeEventListener("message",rr)})}}n(rr,"c");tt(rr,"handleReady");function or(t=window.opener){t&&t!==window&&(window.addEventListener("message",rr),_o(t)("READY"))}n(or,"w");tt(or,"offersLiveEditor");function nr(t){var e,r=t.Symbol;return typeof r=="function"?r.observable?e=r.observable:(e=r("observable"),r.observable=e):e="@@observable",e}n(nr,"symbolObservablePonyfill");var be;typeof self!="undefined"?be=self:typeof window!="undefined"||typeof window!="undefined"?be=window:typeof module!="undefined"?be=module:be=Function("return this")();var ci=nr(be),sr=ci;var ir=n(function(){return Math.random().toString(36).substring(7).split("").join(".")},"randomString"),Ie={INIT:"@@redux/INIT"+ir(),REPLACE:"@@redux/REPLACE"+ir(),PROBE_UNKNOWN_ACTION:n(function(){return"@@redux/PROBE_UNKNOWN_ACTION"+ir()},"PROBE_UNKNOWN_ACTION")};function li(t){if(typeof t!="object"||t===null)return!1;for(var e=t;Object.getPrototypeOf(e)!==null;)e=Object.getPrototypeOf(e);return Object.getPrototypeOf(t)===e}n(li,"isPlainObject");function ar(t,e,r){var o;if(typeof e=="function"&&typeof r=="function"||typeof r=="function"&&typeof arguments[3]=="function")throw new Error("It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function.");if(typeof e=="function"&&typeof r=="undefined"&&(r=e,e=void 0),typeof r!="undefined"){if(typeof r!="function")throw new Error("Expected the enhancer to be a function.");return r(ar)(t,e)}if(typeof t!="function")throw new Error("Expected the reducer to be a function.");var s=t,i=e,a=[],c=a,l=!1;function d(){c===a&&(c=a.slice())}n(d,"ensureCanMutateNextListeners");function g(){if(l)throw new Error("You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");return i}n(g,"getState");function p(f){if(typeof f!="function")throw new Error("Expected the listener to be a function.");if(l)throw new Error("You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api-reference/store#subscribelistener for more details.");var T=!0;return d(),c.push(f),n(function(){if(!!T){if(l)throw new Error("You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api-reference/store#subscribelistener for more details.");T=!1,d();var b=c.indexOf(f);c.splice(b,1),a=null}},"unsubscribe")}n(p,"subscribe");function m(f){if(!li(f))throw new Error("Actions must be plain objects. Use custom middleware for async actions.");if(typeof f.type=="undefined")throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');if(l)throw new Error("Reducers may not dispatch actions.");try{l=!0,i=s(i,f)}finally{l=!1}for(var T=a=c,O=0;O<T.length;O++){var b=T[O];b()}return f}n(m,"dispatch");function E(f){if(typeof f!="function")throw new Error("Expected the nextReducer to be a function.");s=f,m({type:Ie.REPLACE})}n(E,"replaceReducer");function y(){var f,T=p;return f={subscribe:n(function(b){if(typeof b!="object"||b===null)throw new TypeError("Expected the observer to be an object.");function P(){b.next&&b.next(g())}n(P,"observeState"),P();var Xs=T(P);return{unsubscribe:Xs}},"subscribe")},f[sr]=function(){return this},f}return n(y,"observable"),m({type:Ie.INIT}),o={dispatch:m,subscribe:p,getState:g,replaceReducer:E},o[sr]=y,o}n(ar,"createStore");function ui(t,e){var r=e&&e.type,o=r&&'action "'+String(r)+'"'||"an action";return"Given "+o+', reducer "'+t+'" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.'}n(ui,"getUndefinedStateErrorMessage");function pi(t){Object.keys(t).forEach(function(e){var r=t[e],o=r(void 0,{type:Ie.INIT});if(typeof o=="undefined")throw new Error('Reducer "'+e+`" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined.`);if(typeof r(void 0,{type:Ie.PROBE_UNKNOWN_ACTION()})=="undefined")throw new Error('Reducer "'+e+'" returned undefined when probed with a random type. '+("Don't try to handle "+Ie.INIT+' or other actions in "redux/*" ')+"namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.")})}n(pi,"assertReducerShape");function xo(t){for(var e=Object.keys(t),r={},o=0;o<e.length;o++){var s=e[o];typeof t[s]=="function"&&(r[s]=t[s])}var i=Object.keys(r),a,c;try{pi(r)}catch(l){c=l}return n(function(d,g){if(d===void 0&&(d={}),c)throw c;if(!1)var p;for(var m=!1,E={},y=0;y<i.length;y++){var f=i[y],T=r[f],O=d[f],b=T(O,g);if(typeof b=="undefined"){var P=ui(f,g);throw new Error(P)}E[f]=b,m=m||b!==O}return m=m||i.length!==Object.keys(d).length,m?E:d},"combination")}n(xo,"combineReducers");function Eo(t,e){return function(){return e(t.apply(this,arguments))}}n(Eo,"bindActionCreator");function So(t,e){if(typeof t=="function")return Eo(t,e);if(typeof t!="object"||t===null)throw new Error("bindActionCreators expected an object or a function, instead received "+(t===null?"null":typeof t)+'. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');var r={};for(var o in t){var s=t[o];typeof s=="function"&&(r[o]=Eo(s,e))}return r}n(So,"bindActionCreators");function di(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}n(di,"_defineProperty");function vo(t,e){var r=Object.keys(t);return Object.getOwnPropertySymbols&&r.push.apply(r,Object.getOwnPropertySymbols(t)),e&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(t,o).enumerable})),r}n(vo,"ownKeys");function fi(t){for(var e=1;e<arguments.length;e++){var r=arguments[e]!=null?arguments[e]:{};e%2?vo(r,!0).forEach(function(o){di(t,o,r[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):vo(r).forEach(function(o){Object.defineProperty(t,o,Object.getOwnPropertyDescriptor(r,o))})}return t}n(fi,"_objectSpread2");function cr(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];return e.length===0?function(o){return o}:e.length===1?e[0]:e.reduce(function(o,s){return function(){return o(s.apply(void 0,arguments))}})}n(cr,"compose");function wo(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];return function(o){return function(){var s=o.apply(void 0,arguments),i=n(function(){throw new Error("Dispatching while constructing your middleware is not allowed. Other middleware would not be applied to this dispatch.")},"dispatch"),a={getState:s.getState,dispatch:n(function(){return i.apply(void 0,arguments)},"dispatch")},c=e.map(function(l){return l(a)});return i=cr.apply(void 0,c)(s.dispatch),fi({},s,{dispatch:i})}}}n(wo,"applyMiddleware");var rt=null,hi=n(t=>({dispatch:t}),"defaultMapDispatchToProps"),To=n(t=>{if(!rt)throw new Error("Missing redux store.");return rt},"resolveStore"),mi=n((t,e)=>r=>{let{getState:o,dispatch:s}=To(r),i=t?t(o(),r):{},a=e(s,r);Object.assign(r,i,a)},"createRecalcProps"),h=n((t,e=hi)=>r=>{let s=mi(t,typeof e=="function"?e:i=>So(e,i));return class extends r{get store(){return rt}connectedCallback(){super.connectedCallback&&super.connectedCallback(),this._storeUnsubscribe=To(this).subscribe(()=>s(this)),s(this)}attributeChangedCallback(i,a,c){super.attributeChangedCallback&&super.attributeChangedCallback(i,a,c),this._storeUnsubscribe&&a!==c&&s(this)}disconnectedCallback(){this._storeUnsubscribe(),super.disconnectedCallback&&super.disconnectedCallback()}}},"connect"),Oo=n(t=>{rt=t},"setStore");function Co(t){var e=n(function(o){var s=o.dispatch,i=o.getState;return function(a){return function(c){return typeof c=="function"?c(s,i,t):a(c)}}},"middleware");return e}n(Co,"createThunkMiddleware");var Po=Co();Po.withExtraArgument=Co;var Ro=Po;ae();function gi(t,e){return t===e}n(gi,"defaultEqualityCheck");function yi(t,e,r){if(e===null||r===null||e.length!==r.length)return!1;for(var o=e.length,s=0;s<o;s++)if(!t(e[s],r[s]))return!1;return!0}n(yi,"areArgumentsShallowlyEqual");function bi(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:gi,r=null,o=null;return function(){return yi(e,r,arguments)||(o=t.apply(null,arguments)),r=arguments,o}}n(bi,"defaultMemoize");function _i(t){var e=Array.isArray(t[0])?t[0]:t;if(!e.every(function(o){return typeof o=="function"})){var r=e.map(function(o){return typeof o}).join(", ");throw new Error("Selector creators expect all input-selectors to be functions, "+("instead received the following types: ["+r+"]"))}return e}n(_i,"getDependencies");function xi(t){for(var e=arguments.length,r=Array(e>1?e-1:0),o=1;o<e;o++)r[o-1]=arguments[o];return function(){for(var s=arguments.length,i=Array(s),a=0;a<s;a++)i[a]=arguments[a];var c=0,l=i.pop(),d=_i(i),g=t.apply(void 0,[function(){return c++,l.apply(null,arguments)}].concat(r)),p=t(function(){for(var m=[],E=d.length,y=0;y<E;y++)m.push(d[y].apply(null,arguments));return g.apply(null,m)});return p.resultFunc=l,p.dependencies=d,p.recomputations=function(){return c},p.resetRecomputations=function(){return c=0},p}}n(xi,"createSelectorCreator");var Ee=xi(bi);var ue=ye(vt());Y();ue.default.Cache=Map;function ua(t,e){if(t===e)return!0;if(t===null||e===null||t.length!==e.length)return!1;for(let r=0;r<t.length;++r)if(t[r]!==e[r])return!1;return!0}n(ua,"arraysEqual");var R=n((t,e)=>!!(t===e||typeof t=="object"&&typeof e=="object"&&t&&e&&t.id===e.id&&(!(Array.isArray(t.components)&&Array.isArray(e.components))||ua((t.components||[]).sort(),(e.components||[]).sort()))),"isSameProduct"),Ot=n(t=>t.optedin||[],"optedinSelector"),Qo=n(t=>t.optedout||[],"optedoutSelector"),hr=n(t=>t.autoshipByDefault||{},"autoshipSelector"),pa=n(t=>t.defaultFrequencies||{},"defaultFrequenciesSelector"),V=(0,ue.default)(t=>Ee(Ot,Qo,hr,(e,r,o)=>{let s=e.find(i=>R(t,i));return s||(r.find(i=>R(t,i))?!1:t&&o[t.id]?{id:t.id}:!1)}),t=>JSON.stringify(t)),Jo=(0,ue.default)(t=>Ee(Ot,e=>{let r=e.find(o=>R(t,o));return r||!1}),t=>JSON.stringify(t)),Ct=(0,ue.default)(t=>Ee(Qo,e=>e.find(r=>R(t,r))));var j=(0,ue.default)(t=>Ee(V(t),e=>e&&e.frequency||null)),Pt=(0,ue.default)(t=>Ee(pa,e=>e[t]&&Ve(e[t])||null)),mr=n(t=>t.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g,"$1-$2").toLowerCase(),"kebabCase"),$=n((t,e,r,o)=>({[r]:e&&e.hasAttribute&&e.hasAttribute(mr(r))&&e[r]||e.offer&&typeof(e.offer[r]!=="undefined")&&e.offer[r]||t.config&&t.config[r]||o}),"configSelector"),ve=n(t=>({templates:t.templates||[]}),"templatesSelector");Y();var da=n((t=[],e)=>{switch(e.type){case G:return[];case ie:return e.newValue?e.newValue.optedin:t;case oe:case se:let[[r],o]=t.reduce((s,i)=>s[R(e.payload.product,i)?0:1].push(i)&&s,[[],[]]);return(o||[]).concat({...r,...e.payload.product,frequency:e.payload.frequency});case ne:return t.filter(s=>!R(e.payload.product,s));case qe:return t.map(s=>R(e.payload.product,s)?{...s,...e.payload.newProduct}:s);case ft:return t.filter(s=>!R(e.payload.product,s));case xe:return[];default:return t}},"optedin"),fa=n((t=[],e)=>{switch(e.type){case G:return[];case ie:return e.newValue?e.newValue.optedout:t;case oe:case se:return t.filter(s=>!R(e.payload.product,s));case ne:let[[r],o]=t.reduce((s,i)=>s[R(e.payload.product,i)?0:1].push(i)&&s,[[],[]]);return(o||[]).concat({...r,...e.payload.product,frequency:e.payload.frequency});case qe:return t.map(s=>R(e.payload.product,s)?{...s,...e.payload.newProduct}:s);case xe:return[];default:return t}},"optedout"),ha=n((t={},{type:e,payload:r})=>{switch(e){case at:return r&&r.count>0?{...t,...r.results[0]&&{...r.results[0],place:new Date(Date.parse(r.results[0].place.replace(/-/gi,"/")))}}:t;case ct:return{...t,products:(r.results||[]).map(o=>o.product)};case dt:return{...t,...r,public_id:r.order,...r.product&&{products:(t.products||[]).concat(r.product)}};default:return t}},"nextUpcomingOrder"),ma=n((t={},e)=>{switch(e.type){case q:return{...t,...e.payload.autoship};default:return t}},"autoshipEligible"),ga=n((t={},e)=>{switch(e.type){case q:return{...t,...e.payload.in_stock};default:return t}},"inStock"),ya=n((t={},e)=>{switch(e.type){case q:return{...t,...e.payload.eligibility_groups};default:return t}},"eligibilityGroups"),Ko=n((t,e)=>t.map(r=>({...e[r],id:[r][0]})),"mapIncentive"),ba=n((t={},e)=>{switch(e.type){case q:return{...t,...[...new Set(Object.keys(e.payload.incentives||{}))].reduce((r,o)=>({...r,[o]:Object.entries(e.payload.incentives).filter(([s])=>s===o).reduce((s,[,{initial:i,ongoing:a}])=>({...s,initial:[...s.initial||[],...Ko(i,e.payload.incentives_display)],ongoing:[...s.ongoing||[],...Ko(a,e.payload.incentives_display)]}),{})}),{})};default:return t}},"incentives");var _a=n((t=!1,e)=>{switch(e.type){case it:return{...e.payload};case _e:return!1;default:return t}},"auth"),xa=n((t="",e)=>{switch(e.type){case ot:return e.payload;default:return t}},"merchantId"),Ea=n((t=null,e)=>{switch(e.type){case st:return e.payload;default:return t}},"authUrl"),Sa=n((t={},e)=>{switch(e.type){case q:return{...t,offerId:(e.payload.module_view||{}).regular,...e.payload.modifiers};default:return t}},"offer"),va=n((t="",e)=>{switch(e.type){case q:return(e.payload.module_view||{}).regular||"";default:return t}},"offerId"),wa=n((t=null,e)=>{switch(e.type){case G:return null;case nt:return e.payload;default:return t}},"sessionId"),Ta=n((t={},e)=>{switch(e.type){case q:return{...t,...Object.entries(e.payload.autoship).map(([r])=>({[r]:Object.keys(e.payload.modifiers)})).reduce((r,o)=>({...r,...o}))};case xe:return{};default:return t}},"productOffer"),Oa=n((t={},e)=>{switch(e.type){case bt:return{...t,[e.payload.product]:e.payload.firstOrderPlaceDate};default:return t}},"firstOrderPlaceDate"),Ca=n((t={},e)=>{switch(e.type){case _t:return{...t,[e.payload.product]:e.payload.productToSubscribe};default:return t}},"productToSubscribe"),gr=n((t={},e)=>{switch(e.type){case lt:return{...t,name:"staging",apiUrl:"https://staging.om.ordergroove.com",legoUrl:"https://staging.restapi.ordergroove.com"};case ut:return{...t,name:"dev",apiUrl:"https://dev.om.ordergroove.com",legoUrl:"https://dev.restapi.ordergroove.com"};case pt:return{...t,name:"prod",apiUrl:"https://om.ordergroove.com",legoUrl:"https://restapi.ordergroove.com"};default:return t}},"environment"),Pa=n((t={offerOptInLabel:"Subscribe to save",offerIncentiveText:"Save {{ogIncentive DiscountPercent}} when you subscribe",offerOptOutLabel:"Deliver one-time only",offerEveryLabel:"Delivery Every",offerTooltipTrigger:"[?]",offerTooltipContent:"Seems this is a great subscription offering. Many fun details about this program exist.",optinButtonLabel:"\u2022",optoutButtonLabel:"\u2022",optinStatusOptedInLabel:"You're opted in!",optinStatusOptedOutLabel:"You're not opted in.",optinToggleLabel:"\u2022",upsellButtonLabel:"Add item to order on ",upsellButtonPrefix:"",upsellModalContent:"Some upsell modal content",upsellModalOptInLabel:"Subscribe",upsellModalOptOutLabel:"Purchase one time",upsellModalTitle:"Impulse Upsell",upsellModalConfirmLabel:"Ok",upsellModalCancelLabel:"Cancel",defaultFrequencyCopy:"(Most Popular)",frequencyPeriods:{"1":"day","2":"week","3":"month"}},e)=>{switch(e.type){case ht:return{...t,...e.payload};default:return t}},"locale"),Ra=n((t={frequencies:["1_2","1_2","1_3"],offerType:"radio"},e)=>{switch(e.type){case mt:return{...t,...e.payload,defaultFrequency:e.payload.defaultFrequency?Ve(e.payload.defaultFrequency):t.defaultFrequency,frequencies:e.payload.frequencies?e.payload.frequencies.map(Ve):t.frequencies};default:return t}},"config"),Aa=n((t=!1,e)=>{switch(e.type){case Ue:return e.payload;default:return t}},"previewStandardOffer"),Na=n((t=!1,e)=>{switch(e.type){case De:return e.payload;default:return t}},"previewUpsellOffer"),ka=n((t=[],e)=>{switch(e.type){case q:return{...t,...e.payload.autoship_by_default};default:return t}},"autoshipByDefault"),Ia=n((t=[],e)=>{switch(e.type){case q:return{...t,...e.payload.default_frequencies};default:return t}},"defaultFrequencies"),qa=n((t=[],e)=>{switch(e.type){case yt:return[...e.payload||[]];case gt:return[e.payload,...t];default:return t}},"templates"),Ua=n((t={},e)=>{switch(e.type){case xt:return{...e.payload};default:return t}},"productPlans"),Zo=xo({productPlans:Ua,environment:gr,optedin:da,optedout:fa,merchantId:xa,offer:Sa,offerId:va,productOffer:Ta,sessionId:wa,inStock:ga,eligibilityGroups:ya,autoshipByDefault:ka,autoshipEligible:ma,incentives:ba,nextUpcomingOrder:ha,auth:_a,authUrl:Ea,locale:Pa,config:Ra,previewStandardOffer:Aa,previewUpsellOffer:Na,templates:qa,defaultFrequencies:Ia,firstOrderPlaceDate:Oa,productToSubscribe:Ca});var _n=ye(yr());N();ae();var $e="OG_STATE",xn=n(t=>{try{return t===null?void 0:JSON.parse(t)}catch{return}},"safeParseState"),vr=n(()=>window.og&&window.og.previewMode,"isPreviewMode"),En=n(()=>vr()?{}:xn(localStorage.getItem($e)),"loadState"),Ya=n(t=>!t||!t.sessionId?!1:JSON.stringify({sessionId:t.sessionId,optedin:t.optedin,optedout:t.optedout,productOffer:t.productOffer,firstOrderPlaceDate:t.firstOrderPlaceDate,productToSubscribe:t.productToSubscribe}),"serializeState"),Sn=n(t=>{if(vr())return;let e=Ya(t);e&&localStorage.getItem($e)!==e&&localStorage.setItem($e,e)},"saveState"),vn=n(t=>(0,_n.throttle)(500,e=>{if(vr())return;let{key:r,newValue:o}=e;r===$e&&o===null?(t.dispatch({type:G}),setTimeout(()=>t.dispatch(qt()),0)):r===$e&&t.dispatch({type:ie,newValue:xn(o)})}),"listenLocalStorageChanges");var wn=ye(yr());ae();var Qa=n((t,e,r=document)=>r.dispatchEvent(new CustomEvent(t,{detail:e})),"dispatchEvent"),Tn=n(t=>({payload:{product:{id:e,components:r}={}}={}}={})=>setTimeout(()=>Qa("optin-changed",{productId:e,components:r,optedIn:t}),0),"dispatchOptinChangedEvent"),Ja=[{expressions:[({type:t}={})=>t===oe,({type:t}={})=>t===se],fn:Tn(!0)},{expressions:[({type:t}={})=>t===ne],fn:Tn(!1)}],On=n(t=>e=>r=>{let o=t.getState();Ja.forEach(s=>{s.expressions.some(i=>i(r,o))&&s.fn(r)}),e(r)},"dispatchMiddleware"),Cn=n(t=>e=>r=>{e(r);let o=(0,wn.throttle)(500,()=>{Sn({...t.getState()})});r.type!==ie&&o()},"localStorageMiddleware");function Pn(){if(window.og&&window.og.store)return window.og.store;let t=window.og&&window.og.previewMode,e=typeof window=="object"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):cr,r=[Ro,On];t||r.push(Cn);let o=e(wo(...r)),s=ar(Zo,t?{}:En(),o);return window.og=window.og||{},window.og.store=s,s}n(Pn,"getStore");Y();var wr=n((t={},e=[])=>(t.optedin||[]).map(r=>{let o={product:r.id,subscription_info:{components:r.components||[]},tracking_override:{offer:((t.productOffer||{})[r.id]||[])[0],...Me(r.frequency)}};return t.firstOrderPlaceDate&&t.firstOrderPlaceDate[r.id]&&(o.subscription_info.first_order_place_date=t.firstOrderPlaceDate[r.id]),t.productToSubscribe&&t.productToSubscribe[r.id]&&(o.tracking_override.product=t.productToSubscribe[r.id]),o}).filter(r=>r.tracking_override.offer).filter(r=>e.length?e.includes(r.product):r),"getProductsForPurchasePost");N();v();var us=ye(rs());v();var hc=n(t=>{let e=String(t||"").trim().match(/(\d+)\s*([dwm])/);return e?`${e[1]}_${{d:1,w:2,m:3}[e[2]]}`:t},"sanitizeFrequencyString"),os=n(t=>t.hasAttribute("product")&&{id:t.getAttribute("product"),...t.hasAttribute("product-components")&&{components:JSON.parse(t.getAttribute("product-components"))}},"buildProduct");var Wr=n(t=>{let e=os(t);if(!e){let r=t.offer;r&&(e=os(r))}return e},"resolveProduct"),mc=n(t=>{let e=t;for(;e;){if(e.tagName==="OG-OFFER")return e;e=e.nodeType===11?e.host:e.parentNode}},"resolveOffer"),Yr=n(t=>class extends t{get offer(){return mc(this)}connectedCallback(){super.connectedCallback(),this.offersChangeTemplate=this.offersChangeTemplate.bind(this),this.offer&&this.offer.addEventListener("template-changed",this.offersChangeTemplate)}disconnectedCallback(){super.disconnectedCallback(),this.offer&&this.offer.removeEventListener("template-changed",this.offersChangeTemplate)}offersChangeTemplate(){this._enqueueUpdate()}},"withOfferTemplate"),A=n(t=>class extends Yr(t){get product(){return Wr(this)}},"withProduct"),Yt=n(t=>class extends t{get childOptions(){return this._childOptions||{options:[]}}connectedCallback(){let e=[],r=null;this.querySelectorAll("option").forEach(o=>{let s=hc(o.value),i=o.innerText.trim();e.push({value:s,text:i}),!r&&o.selected&&(r=s)}),this._childOptions={options:e,isSelected:r},super.connectedCallback&&super.connectedCallback()}},"withChildOptions");var Qt={};tr(Qt,{autoshipByDefault:()=>gc,eligibilityGroups:()=>is,eligible:()=>ns,hasUpcomingOrder:()=>cs,hasUpsellGroup:()=>as,inStock:()=>Qr,optedout:()=>bc,regularEligible:()=>xc,subscribed:()=>yc,subscriptionEligible:()=>ss,upcomingOrderContainsProduct:()=>_c,upsellEligible:()=>ls});var Qr=n((t,e)=>(t.inStock||{})[(e.product||{}).id],"inStock"),ns=n((t,e)=>(t.autoshipEligible||{})[(e.product||{}).id]||!1,"eligible"),gc=n((t,e)=>(t.autoshipByDefault||{})[(e.product||{}).id]||!1,"autoshipByDefault"),ss=n((t,e)=>(t.offerId&&t.offerId!=="0"||!1)&&ns(t,e)&&Qr(t,e),"subscriptionEligible"),is=n((t,e)=>(t.eligibilityGroups||{})[(e.product||{}).id]||null,"eligibilityGroups"),as=n((t,e)=>{let r=is(t,e);return r===null||!!r.find(o=>o==="upsell"||o==="impulse_upsell")},"hasUpsellGroup"),yc=n((t,e)=>Jo(e.product)(t),"subscribed"),bc=n((t,e)=>Ct(e.product)(t),"optedout"),cs=n(t=>!!(t.nextUpcomingOrder&&t.nextUpcomingOrder.public_id),"hasUpcomingOrder"),_c=n((t,e)=>(t.nextUpcomingOrder&&t.nextUpcomingOrder.products||[]).includes((e.product||{}).id),"upcomingOrderContainsProduct"),ls=n((t,e)=>t.offerId&&t.offerId!=="0"&&t.auth&&Qr(t,e)&&cs(t)&&as(t,e),"upsellEligible"),xc=n((t,e)=>ss(t,e)&&!ls(t,e),"regularEligible");var Ec=n(t=>t.replace(/(\r\n|\n|\r|\s)+/gm,""),"removeWhitespace"),Jr=class extends A(x){static get properties(){return{...super.properties,state:{type:Object,attribute:!1},test:{type:String}}}render(){return this.test&&us.default.parse(Ec(this.test),r=>Qt[r]&&Qt[r](this.state,this))?u`
        <slot></slot>
      `:u``}shouldUpdate(e){return e.size&&this.product&&this.product.id in this.state.autoshipEligible&&this.product.id in this.state.inStock}};n(Jr,"When");var Sc=n(t=>({state:t}),"mapStateToProps"),ps=h(Sc)(Jr);v();N();v();Y();var ds={type:Object,converter:{toAttribute(t){return t==null?t:JSON.stringify(t)},fromAttribute(t){return t&&t.match(/[{[]/)?JSON.parse(t):{id:t}}}},te={type:String,attribute:"default-frequency",converter:{fromAttribute(t){return t&&fr(t)?t:null}}},Jt={type:Boolean,attribute:!0,reflect:!0},Ae={type:Object,attribute:!1};v();var vc=n(t=>class extends t{getOption(e,r=e){let o=mr(e);if(this.hasAttribute(o)){let s=this.getAttribute(o);return s.toString().toLowerCase()==="true"?!0:s.toString().toLowerCase()==="false"?!1:s}if(this.template&&this.template.config&&typeof this.template.config[r]!="undefined")return this.template.config[r];if(this.config&&typeof this.config[r]!="undefined")return this.config[r]}applyTemplate(e){this.template=e;let r=typeof e.markup=="undefined"?this.constructor.initialTemplate:e.markup;r&&this._templateMarkup!==r&&(this._templateMarkup=r,this.innerHTML=r)}refreshTemplate(){if(this._templates&&this._templates.length){let e=this._templates.find(({selector:r})=>{try{return this.matches(r)}catch{return!1}});this.applyTemplate(e||{})}}set templates(e){this._templates=e,this.refreshTemplate()}connectedCallback(){super.connectedCallback&&super.connectedCallback(),this.constructor.initialTemplate&&!this.innerHTML.trim()&&(this.innerHTML=this.constructor.initialTemplate)}},"withTemplate"),D=vc(x);var L=class extends A(D){static get properties(){return{subscribed:Jt,frequencyMatch:{type:Boolean,reflect:!0,attribute:"frequency-match"}}}static get styles(){return w`
      :host {
        cursor: default;
        display: inline-block;
      }

      :host[hidden] {
        display: none;
      }

      .btn {
        position: relative;
        width: var(--og-radio-width, 1.4em);
        height: var(--og-radio-height, 1.4em);
        margin: var(--og-radio-margin, 0);
        padding: 0;
        border: 1px solid var(--og-primary-color, black);
        background: #fff;
        border-radius: 100%;
        vertical-align: middle;
        color: var(--og-primary-color, black);
      }

      .radio {
        text-indent: -9999px;
      }

      .checkbox {
        border-radius: 3px;
      }
      .checkbox.active::after,
      .radio.active::after {
        content: ' ';
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        border-radius: 100%;
        background: var(--og-primary-color, black);
        box-sizing: border-box;
        border: 2px solid #fff;
      }
      .checkbox.active::after {
        border: none;
        border-radius: 0;
        background: #fff;
        content: '\\2714';
        color: var(--og-primary-color, black);
        line-height: 1;
        text-align: center;
        overflow: visible;
      }
    `}constructor(){super();this.addEventListener("click",this.handleClick.bind(this))}updated(e){e.has("subscribed")&&(this.frequencyMatch=this.frequency===this.defaultFrequency)}handleClick(){}render(){return this.subscribed&&!this.defaultFrequency?u`
        <slot name="subscribed"></slot>
        <slot name="frequency-mismatch"></slot>
      `:this.subscribed&&this.defaultFrequency===this.frequency?u`
        <slot name="subscribed"></slot>
        <slot name="frequency-match"></slot>
      `:this.subscribed&&this.defaultFrequency!==this.frequency?u`
        <slot name="subscribed"></slot>
        <slot name="frequency-mismatch"></slot>
      `:u`
      <slot name="not-subscribed"></slot>
    `}};n(L,"OptinStatus");var z=n((t,e={})=>({subscribed:V(e.product)(t),frequency:j(e.product)(t),...$(t,e,"defaultFrequency"),...ve(t,e)}),"mapStateToProps"),fs=h(z)(L);var Kr=class extends L{static get properties(){return{...super.properties,frequency:{type:String,reflect:!0},defaultFrequency:te,optinButtonLabel:{type:String}}}handleClick(e){this.optinProduct(Wr(this),this.defaultFrequency),e.preventDefault()}render(){return u`
      <slot name="default">
        <button id="action-trigger" class="btn radio ${this.subscribed?"active":""}"></button>
        <label for="action-trigger">
          <slot>
            <slot name="label"><og-text key="offerOptInLabel"></og-text></slot>
          </slot>
        </label>
      </slot>
    `}};n(Kr,"OptinButton");var hs=h(z,{optinProduct:Q})(Kr);v();N();var Zr=class extends L{static get properties(){return{...super.properties,label:{type:String}}}handleClick(e){this.optoutProduct(this.product),e.preventDefault()}render(){return u`
      <slot name="default">
        <button id="action-trigger" class="btn radio ${this.subscribed?"":"active"}"></button>
        <label for="action-trigger">
          <slot>
            <og-text key="offerOptOutLabel"></og-text>
          </slot>
        </label>
      </slot>
    `}};n(Zr,"OptoutButton");var ms=h(z,{optoutProduct:we})(Zr);v();N();v();Y();var Ke=n((t,e)=>{let{every:r,every_period:o}=Me(t);return u`
    ${r}
    <og-text key="frequencyPeriods" variant="${o}" pluralize="${r}"></og-text>
    ${e&&e===t?u`
          <og-text key="defaultFrequencyCopy"></og-text>
        `:""}
  `},"frequencyText"),Ze=class extends A(D){static get properties(){return{...super.properties,disabled:{type:Boolean},subscribed:Jt,frequency:{type:String},defaultFrequency:te,productDefaultFrequency:{type:String},frequencies:{converter:{fromAttribute:Yo}}}}static get styles(){return w`
      :host[hidden] {
        display: none;
      }
      :host {
        display: inline-block;
      }
    `}constructor(){super();this.frequencies=[]}render(){let e=this.frequency||this.defaultFrequency;return u`
      <span>
        ${this.subscribed&&u`
            <slot name="subscribed">${Ke(e)} </slot>
          `||""}
        ${!this.subscribed&&u`
            <slot name="not-subscribed"></slot>
          `||""}
        ${this.subscribed&&this.defaultFrequency&&this.defaultFrequency!==this.frequency&&u`
            <slot name="frequency-mismatch"></slot>
          `||""}
      </span>
    `}};n(Ze,"FrequencyStatus");var Xe=n((t,e)=>({subscribed:V(e.product)(t),frequency:j(e.product)(t),productDefaultFrequency:Pt((e.product||{}).id)(t),...$(t,e,"frequencies",[]),...$(t,e,"defaultFrequency"),...ve(t,e)}),"mapStateToProps"),gs=h(Xe)(Ze);var Xr=class extends Yt(L){static get properties(){return{...super.properties,frequencies:{type:Array,attribute:!1},frequency:{type:String},defaultFrequency:te}}static get styles(){return w`
      :host {
        display: inline-block;
        cursor: pointer;
        background-color: var(--og-select-bg-color, #fff);
        border: var(--og-select-border, 1px solid #aaa);
        border-radius: var(--og-select-border-radius, 0.5em);
        border-width: var(--og-select-border-width, 1px);
        box-shadow: 0 1px 0 1px rgba(0, 0, 0, 0.04);
      }
    `}get isSelected(){return this.subscribed?this.frequency:"optedOut"}onOptinChange(e){e==="optedOut"?this.optoutProduct(this.product):this.productChangeFrequency(this.product,e)}render(){let{options:e,isSelected:r}=this.childOptions,o=e;return e.length||(o=[{value:"optedOut",text:u`
            <og-text key="offerOptOutLabel"></og-text>
          `},...(this.frequencies||[]).map(s=>({value:s,text:Ke(s,this.defaultFrequency)}))]),u`
      <og-select
        .options="${o}"
        .selected="${r}"
        .onChange="${({target:{value:s}})=>this.onOptinChange(s)}"
      ></og-select>
    `}};n(Xr,"OptinSelect");var ys=h((t,e)=>({...z(t,e),...Xe(t,e)}),{productChangeFrequency:Nt,optoutProduct:we})(Xr);v();N();var eo=class extends A(D){static get styles(){return w`
      :host[hidden] {
        display: none;
      }
      :host {
        display: inline-block;
      }
    `}static get properties(){return{...super.properties,upcomingOrderDate:{type:String,attribute:!1},auth:Ae,isPreview:{type:Boolean,attribute:!1},target:{type:String}}}constructor(){super();this.fetchOrders=()=>0,this.addEventListener("click",this.handleClick.bind(this))}updated(e){e.has("auth")&&this.auth&&!this.upcomingOrderDate&&!this.isPreview&&this.fetchOrders()}handleClick(){let e;if(!this.target&&this.offer)e=this.offer.querySelector("og-upsell-modal"),e||(e=this.offer.shadowRoot.querySelector("og-upsell-modal"));else if(this.target)e=document.querySelector(this.target);else throw Error("You must specify a target attribute or place this element as child of og-offer");e&&e.setAttribute("show",!0)}render(){return u`
      <slot>
        <og-next-upcoming-order></og-next-upcoming-order>
      </slot>
    `}};n(eo,"UpsellButton");var wc=n(t=>({isPreview:t.previewUpsellOffer}),"mapStateToProps"),bs=h(wc,{fetchOrders:It})(eo);v();N();var to=class extends A(D){static get properties(){return{...super.properties,defaultFrequency:te,auth:Ae,subscribed:{type:Boolean,attribute:!1},frequency:{type:String,attribute:!1},nextUpcomingOrder:{type:Object,attribute:!1},show:{type:Boolean,attribute:"show"},offerId:{type:String}}}constructor(){super();this.createIu=()=>0,this.concludeUpsell=()=>0}render(){return u`
      <og-modal ?show=${this.show} @close=${()=>this.close()} @confirm=${()=>this.confirm()}>
        <div slot="content">
          <slot>
            <slot name="content">
              <og-text key="upsellModalContent"></og-text>
            </slot>
            <slot name="offer">
              <br />

              <og-optout-button>
                <slot name="opt-out-label">
                  <og-text key="upsellModalOptOutLabel" slot="label"></og-text>
                </slot>
              </og-optout-button>
              <br />
              <og-optin-button default-frequency=${this.defaultFrequency}>
                <slot name="opt-in-label">
                  <og-text key="upsellModalOptInLabel" slot="label"></og-text>
                </slot>
              </og-optin-button>
              <br />
              <slot name="every-label">
                <og-text key="offerEveryLabel"></og-text>
              </slot>
              <og-select-frequency det{this.defaultFrequency}></og-select-frequency>
            </slot>
          </slot>
        </div>
        <span slot="confirm">
          <slot name="confirm"><og-text key="upsellModalConfirmLabel"></og-text></slot
        ></span>
        <span slot="cancel">
          <slot name="cancel">
            <og-text key="upsellModalCancelLabel"></og-text>
          </slot>
        </span>
      </og-modal>
    `}set defaultFrequency(e){this._defaultFrequency=e}get defaultFrequency(){let e=this.querySelector("og-select-frequency");return e?e.defaultFrequency:this._defaultFrequency}confirm(){this.createIu(this.product,this.nextUpcomingOrder.public_id,1,this.subscribed,this.frequency||this.defaultFrequency),this.close()}close(){this.concludeUpsell(),this.removeAttribute("show")}};n(to,"UpsellModal");var Tc=n((t,e)=>({auth:t.auth,offerId:t.offerId,subscribed:V(e.product)(t),frequency:j(e.product)(t),...$(t,e,"defaultFrequency"),nextUpcomingOrder:t.previewUpsellOffer?{public_id:"preview-order-id"}:t.nextUpcomingOrder,isPreview:t.previewUpsellOffer}),"mapStateToProps"),_s=h(Tc,{concludeUpsell:sn,createIu:dn})(to);v();N();var ro=class extends L{static get properties(){return{...super.properties,frequency:{type:String}}}handleClick(e){this.subscribed?this.optoutProduct(this.product):this.optinProduct(this.product,this.frequency||this.defaultFrequency),e.preventDefault()}render(){return u`
      <slot name="default">
        <button id="action-trigger" class="btn checkbox ${this.subscribed?"active":""}"></button>
        <label for="action-trigger">
          <slot>
            <slot name="label"><og-text key="offerOptInLabel"></og-text></slot
          ></slot>
        </label>
      </slot>
    `}};n(ro,"OptinToggle");var xs=h(z,{optoutProduct:we,optinProduct:Q})(ro);v();var Oc=n((t,e)=>`${t}${parseInt(e,10)>1?"s":""}`,"pluralize"),oo=class extends Yr(x){static get properties(){return{pluralize:{type:Number},variant:{type:Number},i18n:{type:Object,attribute:!1},locale:{type:Object,attribute:!1},key:{type:String}}}createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),this._textOverride=this.innerText.trim()}getText(){return this._textOverride?this._textOverride:this.getPluralizedText(this.getVariantText(this.key))}getVariantText(e){let r={...this.i18n,...this.offer&&this.offer.locale},o=typeof r[e]!="undefined"?r[e]:"";return typeof this.variant=="undefined"?o:o[this.variant]}getPluralizedText(e){return typeof this.pluralize=="undefined"?e:e&&Oc(e,this.pluralize)}render(){return u`
      ${this.getText()}
    `}};n(oo,"Text");var Cc=n(t=>({i18n:t.locale||{}}),"mapStateToProps"),Es=h(Cc)(oo);v();var Ne=class{constructor(e){this.value=e,this.className="DiscountAmount"}toString(){return`${this.value}`}};n(Ne,"DiscountAmount");var et=class extends Ne{constructor(e){super(e);this.className="DiscountPercent"}toString(){return`${super.toString()}%`}};n(et,"DiscountPercent");var no=class extends et{constructor(e){super(e);this.className="ShippingDiscountPercent"}toString(){return this.value===100?"free shipping":super.toString()}};n(no,"ShippingDiscountPercent");var so="Discount Percent",io="Discount Amount",Ss="total_price",vs="shipping_total",ws="sub_total",ao=n(({field:t,object:e,type:r,value:o})=>{let i=[[new et(o),{field:Ss,object:"item",type:so}],[new Ne(o),{field:Ss,object:"item",type:io}],[new no(o),{field:vs,object:"order",type:so}],[new Ne(o),{field:vs,object:"order",type:io}],[new et(o),{field:ws,object:"order",type:so}],[new Ne(o),{field:ws,object:"order",type:io}]].find(([,a])=>a.field===t&&a.object===e&&a.type===r);return i&&i[0]},"discountBuilder");function Pc(t){return!(ao(t).className!==this.incentiveClass||this.incentiveValue&&this.incentiveValue.toString()!==t.value.toString())}n(Pc,"filterIncentives");var co=class extends A(x){static get properties(){return{...super.properties,incentives:{type:Object,attribute:!1},from:{type:String},label:{type:String},initial:{type:Boolean,default:!1},value:{type:Number}}}createRenderRoot(){return this}render(){let e=this.from,r=this.value,o=this.initial?"initial":"ongoing",s=(this.incentives[o]||[]).find(Pc.bind({incentiveClass:e,incentiveValue:r}));return u`
      ${this.label} ${s?ao(s):this.renderFallback()}
    `}renderFallback(){let e=this.from,r=this.value,o=this.initial?"initial":"ongoing";return u`
      ${ao({field:"sub_total",object:"order",type:"Discount Percent",value:this.value})}
    `}};n(co,"IncentiveText");var Rc=n((t,e)=>({incentives:(t.incentives||{})[e&&e.product&&e.product.id]||{}}),"mapStateToProps"),Ts=h(Rc)(co);v();N();var lo=class extends Yt(Ze){static get properties(){return{...super.properties,defaultText:{type:String,attribute:"default-text"}}}static get styles(){return w`
      :host {
        display: inline-block;
        cursor: pointer;
        background-color: var(--og-select-bg-color, #fff);
        border: var(--og-select-border, 1px solid #aaa);
        border-radius: var(--og-select-border-radius, 0.5em);
        border-width: var(--og-select-border-width, 1px);
        box-shadow: 0 1px 0 1px rgba(0, 0, 0, 0.04);
        z-index: 1;
      }
    `}set defaultFrequency(e){this._defaultFrequency=e}get defaultFrequency(){let{options:e,isSelected:r}=this.childOptions;return this.productDefaultFrequency?this.productDefaultFrequency:r||(e.length?e[0].value:this._defaultFrequency)}get currentFrequency(){return this.frequency||this.defaultFrequency}productChangeFrequency(e,r){this.frequency=r}render(){let{options:e}=this.childOptions;e.length||(e=(this.frequencies||[]).map(o=>({value:o,text:Ke(o,this.defaultFrequency)})));let r=this.defaultFrequency;return e=e.map(({text:o,value:s})=>({text:s===r?`${o} ${(this.defaultText||"").trim()}`.trim():o,value:s})),u`
      <og-select
        .options="${e}"
        .selected="${this.currentFrequency}"
        .onChange="${({target:{value:o}})=>{this.productChangeFrequency(this.product,o)}}"
      ></og-select>
    `}};n(lo,"SelectFrequency");var Os=h(Xe,{productChangeFrequency:Nt})(lo);v();var Ac={day:{day:"2-digit"},"day-numeric":{day:"numeric"},"day-short":{weekday:"short"},"day-long":{weekday:"long"},month:{month:"2-digit"},"month-numeric":{month:"numeric"},"month-short":{month:"short"},"month-long":{month:"long"},year:{year:"2-digit"},"year-numeric":{year:"numeric"}};var Cs=n((t,e)=>t instanceof Date?(e||"").toString().replace(/\{\{([-\w]+)\}\}/g,r=>{let o=r.replace(/[{}]/g,""),s=Ac[o];if(typeof s=="undefined")return o;let a=new Intl.DateTimeFormat("en-us",s).formatToParts(t),[{value:c}]=a;return c}):t,"formatDate");var uo=class extends x{static get properties(){return{value:{type:String,reflect:!0},format:{type:String}}}createRenderRoot(){return this}render(){return u`
      ${Cs(this.value,this.format||"{{month-long}} {{day}}, {{year-numeric}}")}
    `}};n(uo,"FormattedDate");var Nc=n(t=>({value:t.previewUpsellOffer?new Date:t.nextUpcomingOrder.place}),"mapStateToProps"),Ps=h(Nc)(uo);v();var Ns=ye(vt());N();ae();var Rs=n((t,e)=>n(async function(o){await o({type:Ue,payload:t}),await o({type:_e}),await o(Te({in_stock:{[e]:!0},eligibility_groups:{[e]:["subscription","upsell"]},result:"success",autoship:{[e]:!0},modifiers:{},module_view:{regular:"096135e6650111e9a444bc764e106cf4"},incentives_display:{"47c01e9aacbe40389b5c7325d79091aa":{field:"sub_total",object:"order",type:"Discount Percent",value:5},e6534b9d877f41e586c37b7d8abc3a58:{field:"total_price",object:"item",type:"Discount Percent",value:10},f35e842710b24929922db4a529eecd40:{field:"total_price",object:"item",type:"Discount Percent",value:10},"5be321d7c17f4e18a757212b9a20bfcc":{field:"total_price",object:"item",type:"Discount Percent",value:1}},incentives:{[e]:{initial:["5be321d7c17f4e18a757212b9a20bfcc"],ongoing:["e6534b9d877f41e586c37b7d8abc3a58","47c01e9aacbe40389b5c7325d79091aa","f35e842710b24929922db4a529eecd40"]}}}))},"setPreviewStandardOfferThunk"),"setPreviewStandardOffer"),kc=n((t,e)=>n(async function(o,s){await o({type:De,payload:t});let{merchantId:i}=s();t?(await o(Te({in_stock:{[e]:!0},module_view:{regular:"096135e6650111e9a444bc764e106cf4"},default_frequencies:{[e]:{every:1,every_period:3}},eligibility_groups:{[e]:["subscription","upsell"]},result:"success",autoship:{[e]:!0},modifiers:{}})),await o(_r({count:1,next:null,previous:null,results:[{merchant:"0e5de2bedc5e11e3a2e4bc764e106cf4",customer:"TestCust",payment:"e98e789aba0111e9b90fbc764e107990",shipping_address:"b3a5816ae59611e78937bc764e1043b0",public_id:"23322d4a83eb11ea9a1ebc764e101db1",sub_total:"206.98",tax_total:"0.00",shipping_total:"10.00",discount_total:"0.00",total:"216.98",created:"2020-04-21 11:14:11",place:"2020-06-24 00:00:00",cancelled:null,tries:0,generic_error_count:0,status:1,type:1,order_merchant_id:null,rejected_message:null,extra_data:null,locked:!1,oos_free_shipping:!1}]})),await o(br(i,"sig_field","ts","sig"))):await o(J())},"setPreviewUpsellOfferThunk"),"setPreviewUpsellOffer"),As=n((t,e,r)=>async function(o,s){switch(await o({type:G}),await o({type:Ue,payload:!1}),await o({type:De,payload:!1}),t){case"regular":o(Rs(!0,r.product.id));break;case"upsell":o(kc(!0,r.product.id));break;case"subscribed":o(Rs(!0,r.product.id)),o(Q(r.product,"2_2"));break;default:}},"setPreview");N();var Ic=n((...t)=>JSON.stringify(t),"memoizeKey"),qc=(0,Ns.default)((t,e)=>Object.assign({components:e},t),Ic),po=class extends D{static get properties(){return{...super.properties,config:{type:Object,attribute:!1},product:ds,productComponents:{type:Array,attribute:"product-components"},offerId:{type:String,attribute:!1},auth:Ae,preview:{type:String,attribute:"preview",reflect:"true"},location:{type:String},autoshipByDefault:{type:Boolean,attribute:"autoship-by-default"},productDefaultFrequency:{type:String,attribute:!1},locale:{type:Object,attribute:!0},firstOrderPlaceDate:{type:String,attribute:"first-order-place-date"},productToSubscribe:{type:String,attribute:"product-to-subscribe"},subscribed:{type:Boolean,reflect:!0},frequency:{type:String,reflect:!0}}}firstUpdated(){let e=Array.from(this.getAttributeNames()).find(r=>r.startsWith("preview-"));e==="preview-standard-offer"?this.preview="regular":e==="preview-upsell-offer"?this.preview="upsell":e==="preview-subscribed-offer"&&(this.preview="subscribed")}static get styles(){return w`
      :host[hidden] {
        display: none;
      }

      :host {
        display: block;
      }

      :host {
        color: var(--og-global-color, #000);
        font-family: var(--og-global-family, inherit);
        font-size: var(--og-global-size, inherit);
        padding: var(--og-wrapper-padding, 10px 0);
      }

      p {
        margin: 0 0 0.3em;
      }

      :host og-upsell-button button {
        font-family: var(--og-upsell-family, inherit);
        font-size: var(--og-upsell-size, inherit);
        background-color: var(--og-upsell-background, inherit);
        color: var(--og-upsell-color, inherit);
      }

      .og-modal__btn {
        font-size: var(--og-modal-button-size, 0.875rem);
        font-family: var(--og-modal-button-family, inherit);
        padding-left: 1rem;
        padding-right: 1rem;
        padding-top: 0.5rem;
        padding-bottom: 0.5rem;
        background-color: var(--og-modal-button-background, #e6e6e6);
        color: var(--og-modal-button-color, rgba(0, 0, 0, 0.8));
        border-radius: 0.25rem;
        border-style: none;
        border-width: 0;
        cursor: pointer;
        -webkit-appearance: button;
        text-transform: none;
        overflow: visible;
        line-height: 1.15;
        margin: 0;
        will-change: transform;
        -moz-osx-font-smoothing: grayscale;
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
        -webkit-transform: translateZ(0);
        transform: translateZ(0);
        transition: -webkit-transform 0.25s ease-out;
        transition: transform 0.25s ease-out;
        transition: transform 0.25s ease-out, -webkit-transform 0.25s ease-out;
      }

      .og-modal__btn:focus,
      .og-modal__btn:hover {
        -webkit-transform: scale(1.05);
        transform: scale(1.05);
      }

      .og-modal__btn-primary {
        background-color: var(--og-confirm-button-background, #00449e);
        color: var(--og-confirm-button-color, #fff);
      }
    `}static get initialTemplate(){return`
    <og-when test="regularEligible">
      <div>

        <og-optout-button>
          <og-text key="offerOptOutLabel"></og-text>
        </og-optout-button>
      </div>
      <div>
        <og-optin-button>
          
          
          <og-price discount>
            <span slot="prepend">Subscribe and get</span>
            <span slot="append">off</span>
          </og-price>
          <og-price regular></og-price>
          <og-price subscription></og-price>
    
        </og-optin-button>
        <og-tooltip placement="bottom">
          <div slot="trigger">
            <og-text key="offerTooltipTrigger"></og-text>
          </div>
          <div slot="content">
            <og-text key="offerTooltipContent"></og-text>
          </div>
        </og-tooltip>
      </div>
      <div style="margin-left: 2.2em">
        <og-text key="offerEveryLabel"></og-text>
        <og-select-frequency>
          <option value="3_1" selected>3 Days</option>
          <option value="1_2">1 Week</option>
          <option value="1_3">1 Month</option>
        </og-select-frequency>
      </div>
    </og-when>

    <og-when test="upsellEligible">
      <og-when test="!upcomingOrderContainsProduct">
      <div class="og-iu-offer">
        <og-text key="upsellButtonLabel"></og-text>
        <og-upsell-button>
          <button type="button">
            <og-text key="upsellButtonContent"></og-text>
            <og-next-upcoming-order></og-next-upcoming-order>
          </button>
        </og-upsell-button>
        <og-upsell-modal>
          <og-text key="upsellModalContent"></og-text>
          <br />

          <og-optout-button>
            <og-text key="upsellModalOptOutLabel"></og-text>
          </og-optout-button>

          <br />

          <og-optin-button>
            <og-text key="upsellModalOptInLabel"></og-text>
          </og-optin-button>
          <br />

          <og-text key="offerEveryLabel"></og-text>
          <og-select-frequency>
            <option value="3_1" selected>3 Days</option>
            <option value="1_2">1 Week</option>
            <option value="1_3">1 Month</option>
          </og-select-frequency>

          <button slot="confirm" class="og-modal__btn og-modal__btn-primary">
            <og-text key="upsellModalConfirmLabel"></og-text>
          </button>
          <button slot="cancel" class="og-modal__btn"><og-text key="upsellModalCancelLabel"></og-text></button>
        </og-upsell-modal>
      </div>
      </og-when>
      <og-when test="upcomingOrderContainsProduct">
        The product is in your next upcomming order
      </og-when>
    </og-when>
    `}constructor(){super();this.module="pdp",this.product={},this.productComponents=[],this.fetchOffer=()=>0,this.fetchOrders=()=>0,this.productHasChangedComponents=()=>0,this.setFirstOrderPlaceDate=()=>0,this.setProductToSubscribe=()=>0,this.productChangeFrequency=()=>0}applyTemplate(e){super.applyTemplate(e);let{locale:r}=e;this.locale=r;let o=new CustomEvent("template-changed");this.dispatchEvent(o)}updated(e){if(e.has("preview")&&this.setPreview(this.preview,e.get("preview"),this),this.frequency=this.defaultFrequency,e.has("product")&&this.product.id&&!this.isPreview&&this.fetchOffer(this.product.id),e.has("firstOrderPlaceDate")&&this.product.id&&!this.isPreview&&this.setFirstOrderPlaceDate(this.product.id,this.firstOrderPlaceDate),e.has("productToSubscribe")&&this.product.id&&!this.isPreview&&this.setProductToSubscribe(this.product.id,this.productToSubscribe),e.has("auth")&&this.auth&&!this.isPreview&&this.fetchOrders(),e.has("productComponents")){let r=qc(this.product,this.productComponents),o=Object.assign({},this.product,{components:e.get("productComponents")});R(r,o)||this.productHasChangedComponents(r,o)}(e.has("offerId")||e.has("autoshipByDefault")||e.has("location")||e.has("product"))&&this.offerId&&this.autoshipByDefault&&this.location==="cart"&&this.product.id&&this.optinProduct&&!(this.optedin||[]).find(r=>R(r,this.product))&&this.optinProduct({...this.product,...this.productComponents.length&&{components:this.productComponents}},this.defaultFrequency)}get isPreview(){return this.preview}render(){return u`
      <slot></slot>
    `}get defaultFrequency(){let e=this.productFrequency||this.productDefaultFrequency;if(e)return e;let r=this.querySelector("og-select-frequency");return r&&r.currentFrequency?r.currentFrequency:this.getOption("defaultFrequency")}};n(po,"Offer");var Uc=n((t,e)=>({config:t.config,auth:t.auth,offerId:((t.productOffer||{})[(e.product||{}).id]||[])[0],productFrequency:j(e.product)(t),productDefaultFrequency:Pt((e.product||{}).id)(t),...$(t,e,"autoshipByDefault",hr(t)[(e.product||{}).id]),...Ct(e.product)(t)&&{autoshipByDefault:!1},optedin:Ot(t),subscribed:V(e.product)(t),...ve(t)}),"mapStateToProps"),ks=h(Uc,{fetchOffer:un,fetchOrders:It,productHasChangedComponents:nn,optinProduct:Q,setFirstOrderPlaceDate:yn,setProductToSubscribe:bn,setPreview:As})(po);v();var Kt=class extends x{constructor(){super();this.showCancelButton=!0,this.showConfirmButton=!0}static get properties(){return{title:{type:String,attribute:!1},content:{type:String,attribute:!1},confirmText:{type:String,attribute:!1},cancelText:{type:String,attribute:!1},showCancelButton:{type:Boolean},showConfirmButton:{type:Boolean},show:{type:Boolean,attribute:"show"}}}static get styles(){return w`
      :host[hidden] {
        display: none;
      }

      :host {
        display: block;
      }

      .og-modal {
        display: none;
      }

      .og-modal.is-open {
        display: block;
      }

      .og-modal__overlay {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.6);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 9999;
      }

      .og-modal__container {
        background-color: #fff;
        padding: 30px;
        max-width: 500px;
        max-height: 100vh;
        border-radius: 4px;
        box-sizing: border-box;
      }

      .og-modal__header {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      .og-modal__title {
        margin-top: 0;
        margin-bottom: 0;
        font-weight: 600;
        font-size: 1.25rem;
        line-height: 1.25;
        color: #00449e;
        box-sizing: border-box;
      }

      .og-modal__close {
        background: transparent;
        border: 0;
      }

      .og-modal__close:before {
        content: '✕';
      }

      .og-modal__content {
        margin-top: 2rem;
        margin-bottom: 2rem;
        line-height: 1.5;
      }

      .og-modal__btn {
        font-size: var(--og-modal-button-size, 0.875rem);
        font-family: var(--og-modal-button-family, inherit);
        padding-left: 1rem;
        padding-right: 1rem;
        padding-top: 0.5rem;
        padding-bottom: 0.5rem;
        background-color: var(--og-modal-button-background, #e6e6e6);
        color: var(--og-modal-button-color, rgba(0, 0, 0, 0.8));
        border-radius: 0.25rem;
        border-style: none;
        border-width: 0;
        cursor: pointer;
        -webkit-appearance: button;
        text-transform: none;
        overflow: visible;
        line-height: 1.15;
        margin: 0;
        will-change: transform;
        -moz-osx-font-smoothing: grayscale;
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
        -webkit-transform: translateZ(0);
        transform: translateZ(0);
        transition: -webkit-transform 0.25s ease-out;
        transition: transform 0.25s ease-out;
        transition: transform 0.25s ease-out, -webkit-transform 0.25s ease-out;
      }

      .og-modal__btn:focus,
      .og-modal__btn:hover {
        -webkit-transform: scale(1.05);
        transform: scale(1.05);
      }

      .og-modal__btn-primary {
        background-color: var(--og-confirm-button-background, #00449e);
        color: var(--og-confirm-button-color, #fff);
      }
      .btn {
        cursor: pointer;
      }
    `}close(){this.removeAttribute("show"),this.dispatchEvent(new CustomEvent("close"))}confirm(){this.removeAttribute("show"),this.dispatchEvent(new CustomEvent("confirm"))}get confirmButton(){return this.showConfirmButton?u`
          <span @click="${()=>this.confirm()}">
            <slot name="confirm" class="btn">
              <button class="og-modal__btn og-modal__btn-primary og-modal__confirm" @click="${()=>this.confirm()}">
                ${this.confirmText}
              </button>
            </slot>
          </span>
        `:u``}get cancelButton(){return this.showCancelButton?u`
          <span @click="${()=>this.close()}" class="btn">
            <slot name="cancel">
              <button class="og-modal__btn og-modal__cancel" @click="${()=>this.close()}">
                ${this.cancelText}
              </button>
            </slot>
          </span>
        `:u``}render(){return this.show?u`
      <div class="og-modal is-open" aria-hidden="true">
        <div class="og-modal__overlay" tabindex="-1">
          <div class="og-modal__container" role="dialog" aria-modal="true">
            <header class="og-modal__header">
              <h2 class="og-modal__title">
                <slot name="title">${this.title}</slot>
              </h2>
              <button class="og-modal__close" aria-label="Close" @click="${()=>this.close()}"></button>
            </header>
            <main class="og-modal__content">
              <slot name="content">${this.content}</slot>
            </main>
            <footer class="og-modal__footer">
              ${this.confirmButton} ${this.cancelButton}
            </footer>
          </div>
        </div>
      </div>
    `:u``}};n(Kt,"Modal");v();var Zt=class extends x{static get styles(){return w`
      :host {
        display: inline-block;
        color: inherit;
        position: relative;
        height: 100%;
        cursor: inherit;
        font-family: inherit;
        font-weight: inherit;
      }
      select {
        font-weight: inherit;
        display: block;
        height: 100%;
        cursor: inherit;
        color: inherit;
        font-family: inherit;
        font-size: 1em;
        line-height: 1.3;
        padding: var(--og-select-padding, 0.4em 1.8em 0.3em 0.5em);
        width: 100%;
        max-width: 100%;
        box-sizing: border-box;
        margin: 0;
        border: none;
        -moz-appearance: none;
        -webkit-appearance: none;
        appearance: none;
        background-color: transparent;
      }
      select::-ms-expand {
        display: none;
      }
      select:hover {
        // border-color: #888;
      }
      select:focus {
        // border-color: #aaa;
        // box-shadow: 0 0 1px 3px rgba(59, 153, 252, 0.7);
        // box-shadow: 0 0 0 3px -moz-mac-focusring;
        // color: #222;
        outline: none;
      }
      select option {
        font-weight: inherit;
      }
      span {
        position: absolute;
        // background: white;
        color: inherit;
        fill: white;
        pointer-events: none;
        right: 0.3em;
        top: 50%;
        z-index: 1;
        font-size: 1em;
        line-height: 0.2em;
        transform: scaleY(0.5);
      }
    `}static get properties(){return{options:{type:Array},selected:{type:String}}}render(){return u`
      <select @change="${this.onChange}" .value="${this.selected}">
        ${this.options.map(e=>u`
            <option value="${e.value}" ?selected=${this.selected===e.value}>${e.text}</option>
          `)}
      </select>
      <span>&#9660;</span>
      <!-- <svg xmlns="http://www.w3.org/2000/svg" width="36" height="100%" viewBox="0 0 36 36">
        <path d="M10.5 15l7.5 7.5 7.5-7.5z" />
        <path d="M0 0h36v36h-36z" fill="none" />
      </svg> -->
    `}};n(Zt,"Select");v();var Xt=class extends x{static get properties(){return{placement:{type:String,default:"bottom"}}}static get styles(){return w`
      :host[hidden] {
        display: none;
      }

      :host {
        display: inline-block;
        position: relative;
        z-index: 9;
      }

      .trigger {
        display: block;
        cursor: pointer;
      }

      .content {
        box-sizing: border-box;
        font-family: var(--og-tooltip-family, inherit);
        font-size: var(--og-tooltip-size, inherit);
        color: var(--og-tooltip-color, inherit);
        background-color: var(--og-tooltip-background, #ececec);
        box-shadow: var(--og-tooltip-box-shadow, 2px 2px 6px rgba(0, 0, 0, 0.28));
        display: block;
        width: 200px;
        opacity: 0;
        padding: var(--og-tooltip-padding, 0.5em);
        text-align: var(--og-tooltip-text-align, left);
        pointer-events: none;
        position: absolute;
        transform: translateY(10px);
        transition: transform 0.25s ease-out;
        z-index: 99999;
        border-radius: var(--og-tooltip-border-radius, 0);
      }

      .content:after {
        content: ' ';
        height: 0;
        position: absolute;
        width: 0;
      }

      .top {
        bottom: 100%;
        margin-bottom: 10px;
      }

      .bottom {
        top: 100%;
        margin-top: 10px;
      }

      .left {
        right: 100%;
        margin-right: 10px;
      }

      .right {
        left: 100%;
        margin-left: 10px;
      }

      .top-left {
        bottom: 100%;
        margin-bottom: 10px;
        right: 100%;
        margin-right: -16px;
      }

      .top-right {
        bottom: 100%;
        margin-bottom: 10px;
        left: 100%;
        margin-left: -16px;
      }

      .bottom-left {
        top: 100%;
        margin-top: 10px;
        right: 100%;
        margin-right: -16px;
      }

      .bottom-right {
        top: 100%;
        margin-top: 10px;
        left: 100%;
        margin-left: -16px;
      }

      .bottom-left:after,
      .bottom-right:after,
      .top-left:after,
      .top-right:after,
      .top:after,
      .bottom:after {
        margin-left: -10px;
        left: 50%;
        border-left: solid transparent 10px;
        border-right: solid transparent 10px;
      }

      .top-left:after,
      .top-right:after,
      .top:after {
        bottom: -10px;
        border-top: solid var(--og-tooltip-background, #ececec) 10px;
      }
      .bottom-left:after,
      .top-left:after {
        left: auto;
        right: 0;
      }

      .bottom-right:after,
      .top-right:after {
        left: 0;
        right: auto;
        margin-left: 0;
      }

      .bottom-left:after,
      .bottom-right:after,
      .bottom:after {
        top: -10px;
        border-bottom: solid var(--og-tooltip-background, #ececec) 10px;
      }

      .left:after,
      .right:after {
        margin-top: -10px;
        top: 50%;
        border-top: solid transparent 10px;
        border-bottom: solid transparent 10px;
      }
      .right:after {
        left: -10px;
        border-right: solid var(--og-tooltip-background, #ececec) 10px;
      }
      .left:after {
        right: -10px;
        border-left: solid var(--og-tooltip-background, #ececec) 10px;
      }

      .tooltip:hover .content {
        opacity: 1;
        pointer-events: auto;
        transform: translateY(0px);
      }
    `}connectedCallback(){super.connectedCallback(),this.showTooltip=this.showTooltip.bind(this),this.addEventListener("mouseenter",this.showTooltip)}showTooltip(){let r=this.shadowRoot.querySelector(".trigger").getBoundingClientRect(),o=this.shadowRoot.querySelector(".content"),s=o.getBoundingClientRect();!this.placement||this.placement==="top"||this.placement==="bottom"?o.style.left=`${(-1*s.width+r.width)/2}px`:(this.placement==="left"||this.placement==="right")&&(o.style.top=`${(-1*s.height+r.height)/2}px`)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("mouseenter",this.showTooltip),this.removeEventListener("mouseout",this.hideTooltip)}render(){return u`
      <span class="tooltip">
        <span class="trigger">
          <slot name="trigger">
            ${this.trigger}
          </slot>
        </span>
        <div class="content ${this.placement||"bottom"}">
          <slot name="content">
            ${this.content}
          </slot>
        </div>
      </span>
    `}};n(Xt,"Tooltip");var{TestWizard:Fc}=(qs(),Is);function fo(){let t="og-test-wizard";customElements.get(t)||customElements.define(t,Fc);let e=document.createElement(t);document.body.appendChild(e)}n(fo,"default");var ho=[79,71,68,69,86],Us=n(()=>{if(window.OG_OFFERS_TEST_MODE_ENABLE)return;window.OG_OFFERS_TEST_MODE_ENABLE=!0;let t=0;document.addEventListener("keyup",async function(e){if(e.which===ho[t]){let o=ho[t];setTimeout(function(){t<=o&&(t=0)},5e3),t+=1,t>=ho.length&&fo()}else t=0},!1)},"enable");Y();ae();v();var mo=class extends A(D){static get properties(){return{...super.properties,regular:{type:Boolean,reflect:!0},subscription:{type:Boolean,reflect:!0},discount:{type:Boolean,reflect:!0},frequency:{type:Object},productPlans:{type:Object}}}get value(){let e=this.frequency||this.offer&&this.offer.defaultFrequency,o=(this.productPlans[this.product.id]||{})[e]||[];if(!o)return"";let[s,i,a]=o;return a===s?"":this.regular?s:this.discount?i:a}render(){let e=this.value;return e?u`
        <slot name="prepend"></slot>
        ${e}
        <slot name="append"></slot>
      `:u`
      <slot></slot>
    `}};n(mo,"Price");var Lc=n((t,e)=>({productPlans:t.productPlans,frequency:j(e.product)(t)}),"mapStateToProps"),Ds=h(Lc)(mo);Us();var C,_={};function Fs(t){return C.dispatch(Er(t)),_}n(Fs,"setEnvironment");function Ls(t){return C.dispatch(an(t)),_}n(Ls,"setMerchantId");function js(t){return C.dispatch(cn(t)),_}n(js,"setAuthUrl");function Ms(t=[]){return wr(C.getState(),t)}n(Ms,"getProductsForPurchasePost");function Vs(t=[]){return wr(C.getState(),t)}n(Vs,"getOptins");function $s(){C.dispatch(pn())}n($s,"clear");function Bs(t){typeof t=="function"&&document.addEventListener("optin-changed",e=>t(e.detail))}n(Bs,"addOptinChangedCallback");function Hs(){document.addEventListener("optin-changed",t=>t.stopPropagation(),!0)}n(Hs,"disableOptinChangedCallbacks");function zs(){try{customElements.define("og-when",ps),customElements.define("og-text",Es),customElements.define("og-incentive-text",Ts),customElements.define("og-offer",ks),customElements.define("og-select-frequency",Os),customElements.define("og-optout-button",ms),customElements.define("og-optin-toggle",xs),customElements.define("og-optin-status",fs),customElements.define("og-optin-button",hs),customElements.define("og-optin-select",ys),customElements.define("og-upsell-button",bs),customElements.define("og-frequency-status",gs),customElements.define("og-modal",Kt),customElements.define("og-select",Zt),customElements.define("og-tooltip",Xt),customElements.define("og-upsell-modal",_s),customElements.define("og-next-upcoming-order",Ps),customElements.define("og-price",Ds)}catch(t){console.warn(t)}_.register=()=>0}n(zs,"register");function Gs(t){return window.og=window.og||{},t===!1?delete window.og:window.og.previewMode=!0,this}n(Gs,"previewMode");function Ws(t){return C.dispatch(hn(t)),_}n(Ws,"config");function Ys(t){return C.dispatch(fn(t)),_}n(Ys,"setLocale");function Qs(t,e,r){return C.dispatch(mn(t,e,r)),_}n(Qs,"addTemplate");function Js(t){return C.dispatch(gn(t)),_}n(Js,"setTemplates");function Ks(t){return _}n(Ks,"setPublicPath");function Zs(t,e,r,o=C){if(t&&e&&r){let s=[];r.product?s.push(r.product):r.cart&&Array.isArray(r.cart.products)&&(s=s.concat(r.cart.products));let{apiUrl:i}=gr({},Er(e)),{sessionId:a}=o.getState();a&&s.forEach(c=>{W.fetchOffer(i,t,a,`${c}`,"pdp")}),r.product_discounts&&typeof r.product_discounts=="object"&&o.dispatch({type:xt,payload:r.product_discounts})}}n(Zs,"resolveSettings");function go(t,e,r){return _.isReady?(console.warn("og.offers has been initialized already. Skipping."),_):(C=Pn(),_.store=C,_.resolveSettings(t,e,window.og_settings,C),Oo(C),t&&_.setMerchantId(t),e&&_.setEnvironment(e),r&&_.setAuthUrl(r),window.addEventListener("storage",vn(C)),t&&e&&(C.dispatch(qt()),C.dispatch(ln()),_.register()),_.isReady=!0,_)}n(go,"initialize");var jc=go;Object.assign(_,{setEnvironment:Fs,setMerchantId:Ls,setAuthUrl:js,getProductsForPurchasePost:Ms,getOptins:Vs,clear:$s,addOptinChangedCallback:Bs,disableOptinChangedCallbacks:Hs,register:zs,previewMode:Gs,config:Ws,setLocale:Ys,addTemplate:Qs,setTemplates:Js,setPublicPath:Ks,resolveSettings:Zs,initialize:go});window.OG=window.OG||{};Object.assign(window.OG,_);Object.assign(_.initialize,_);or();return Mc;})();
; return lib; });
//# sourceMappingURL=offers.js.map

module.exports.initialize("986dccf46be411ebaadb26088a73eb74","prod","/s/BathAndBodyWorks/authiframe").setTemplates([{markup:'<og-when class="subscription-details" test="regularEligible">\n  <div class="test">\n   \n   <div class="div-btn-2">\n  <og-optin-toggle class="toggle">\n    <button slot="default" type="checkbox" class="optin-btn">\n      <span class="checkmark">\n        <div class="checkmark_stem"></div>\n        <div class="checkmark_kick"></div>\n      </span>\n     </button>\n  </og-optin-toggle>\n  <span class="new-phrase">New</span> Auto Refresh\n \n  <og-tooltip placement="left" class="og-tooltip">\n    <span slot="trigger" class="tooltip-icon"></span>\n    <span slot="trigger"><i class="arrow right"></i></span>\n    <div slot="content" class="og-tooltip-content">\n\t\t<div class="tooltip-copy">\n\t\t\t<span class="fa fa-remove close"></span>\n\t\t\t<h2>HERE\'S A SNAPSHOT</h2>  \n\t\t\t<ul>\n\t\t\t<li>Get 20% off regular price and free shipping with $30 of Auto Refresh products</li>\n\t\t\t<li>Easily update your products, delivery dates, frequency and more</li>\n\t\t\t<li>Receive email reminders before each shipment</li>\n\t\t\t<li>Cancel any time</li>\n\t\t\t</ul>\n\t\t\t<a href="/m/auto-refresh.html">Learn More</a>\n\t\t\t<p>TERMS AND CONDITIONS</p>\n\t\t\t<p>\n\t\t\t<a href="/customer-care/terms-of-use.html#auto-refresh">Subscription Terms</a>: Your Auto Refresh subscription will begin when you click “Submit Order” at checkout. To cancel, go to “My Account/My Auto Refresh” and click on “Cancel Auto Refresh Order” or call 1-800-756-5005.  By clicking “Submit Order,” you authorize us to, upon shipment, automatically charge you for your subscription based on the term frequency you selected, in an amount that is 20% off of the full price for the product (plus shipping and handling when the Auto Refresh subscription products ordered total less than $30 after discount), to the payment method provided, until you cancel.  We can increase the price of your Auto Refresh items at any time and will notify you of price increases via email. See Auto Refresh Subscription Terms for full details.\n\t\t\t</p>\n\t\t</div>\n\t</div>\n</og-tooltip>\n  \n  <p class="offer-text">\n   Get <og-incentive-text from="DiscountPercent"></og-incentive-text> off regular price and free shipping with $30 of Auto Refresh products.</p>\n<p class="freq-section" style="margin-left: 1.5em">\n    Send Every \n  \n    <og-select-frequency class="dropdown" id="myselect">\n     \n      <option value="1_3">1 Month</option>\n      <option value="2_3">2 Months</option>\n      <option value="3_3">3 Months</option>\n      <option value="4_3">4 Months</option>\n      <option value="5_3">5 Months</option>\n      <option value="6_3">6 Months</option>\n      \n    </og-select-frequency>\n</p>\n</og-when>\n<og-when test="upsellEligible">\n   <div class="test">\n   \n   <div class="div-btn-2">\n  <og-optin-toggle class="toggle">\n    <button slot="default" type="checkbox" class="optin-btn">\n      <span class="checkmark">\n        <div class="checkmark_stem"></div>\n        <div class="checkmark_kick"></div>\n      </span>\n     </button>\n  </og-optin-toggle>\n  <span class="new-phrase"></span> Auto Refresh\n\n  <og-tooltip placement="left" class="og-tooltip">\n    <span slot="trigger" class="tooltip-icon"></span>\n    <span slot="trigger"><i class="arrow right"></i></span>\n    <div slot="content" class="og-tooltip-content">\n\t\t<div class="tooltip-copy">\n\t\t\t<span class="fa fa-remove close"></span>\n\t\t\t<h2>HERE\'S A SNAPSHOT</h2>  \n\t\t\t<ul>\n\t\t\t<li>Get 20% off regular price and free shipping with $30 of Auto Refresh products</li>\n\t\t\t<li>Easily update your products, delivery dates, frequency and more</li>\n\t\t\t<li>Receive email reminders before each shipment</li>\n\t\t\t<li>Cancel any time</li>\n\t\t\t</ul>\n\t\t\t<a href="/m/auto-refresh.html">Learn More</a>\n\t\t\t<p>TERMS AND CONDITIONS</p>\n\t\t\t<p>\n\t\t\t<a href="/customer-care/terms-of-use.html#auto-refresh">Subscription Terms</a>: Your Auto Refresh subscription will begin when you click “Submit Order” at checkout. To cancel, go to “My Account/My Auto Refresh” and click on “Cancel Auto Refresh Order” or call 1-800-756-5005.  By clicking “Submit Order,” you authorize us to, upon shipment, automatically charge you for your subscription based on the term frequency you selected, in an amount that is 20% off of the full price for the product (plus shipping and handling when the Auto Refresh subscription products ordered total less than $30 after discount), to the payment method provided, until you cancel.  We can increase the price of your Auto Refresh items at any time and will notify you of price increases via email. See Auto Refresh Subscription Terms for full details.\n\t\t\t</p>\n\t\t</div>\n\t</div>\n</og-tooltip>\n  \n  <p class="offer-text">\n   Get <og-incentive-text from="DiscountPercent"></og-incentive-text> off regular price and free shipping with $30 of Auto Refresh products.</p>\n<p class="freq-section" style="margin-left: 1.5em">\n    Send Every \n  \n    <og-select-frequency class="dropdown" id="myselect">\n    \n      <option value="1_3">1 Month</option>\n      <option value="2_3">2 Months</option>\n      <option value="3_3">3 Months</option>\n      <option value="4_3">4 Months</option>\n      <option value="5_3">5 Months</option>\n      <option value="6_3">6 Months</option>\n      \n    </og-select-frequency>\n</p>\n\n</og-when>',selector:'[location="cart"]'},{markup:'<og-when class="subscription-details" test="regularEligible">\r\n  <div class="test">\r\n   \r\n   <div class="div-btn-2">\r\n  <og-optin-toggle class="toggle non-upsell">\r\n    <button slot="default" type="checkbox" class="optin-btn">\r\n      <span class="checkmark">\r\n        <div class="checkmark_stem"></div>\r\n        <div class="checkmark_kick"></div>\r\n      </span>\r\n     </button>\r\n  </og-optin-toggle>\r\n  <span class="new-phrase">New</span> Auto Refresh\r\n\r\n  \r\n  <og-tooltip placement="left" class="og-tooltip" title="tooltip">\r\n    <span slot="trigger" class="tooltip-icon"></span>\r\n    <span><i class="arrow right"></i></span>\r\n    <div slot="content" class="og-tooltip-content">\r\n\t\t<div class="tooltip-copy">\r\n\t\t\t<span class="fa fa-remove close"></span>\r\n\t\t\t<h2>HERE\'S A SNAPSHOT</h2>  \r\n\t\t\t<ul>\r\n\t\t\t<li>Get 20% off regular price and free shipping with $30 of Auto Refresh products</li>\r\n\t\t\t<li>Easily update your products, delivery dates, frequency and more</li>\r\n\t\t\t<li>Receive email reminders before each shipment</li>\r\n\t\t\t<li>Cancel any time</li>\r\n\t\t\t</ul>\r\n\t\t\t<a href="/m/auto-refresh.html">Learn More</a>\r\n\t\t\t<p>TERMS AND CONDITIONS</p>\r\n\t\t\t<p>\r\n\t\t\t<a href="/customer-care/terms-of-use.html#auto-refresh">Subscription Terms</a>: Your Auto Refresh subscription will begin when you click “Submit Order” at checkout. To cancel, go to “My Account/My Auto Refresh” and click on “Cancel Auto Refresh Order” or call 1-800-756-5005.  By clicking “Submit Order,” you authorize us to, upon shipment, automatically charge you for your subscription based on the term frequency you selected, in an amount that is 20% off of the full price for the product (plus shipping and handling when the Auto Refresh subscription products ordered total less than $30 after discount), to the payment method provided, until you cancel.  We can increase the price of your Auto Refresh items at any time and will notify you of price increases via email. See Auto Refresh Subscription Terms for full details.\r\n\t\t\t</p>\r\n\t\t</div>\r\n\t</div>\r\n</og-tooltip>\r\n  \r\n  <p class="offer-text">Get 20% off regular price and free shipping with $30 of Auto Refresh products.</p>\r\n<p class="freq-section" style="margin-left: 1.5em">\r\n    Send Every \r\n   \r\n    <og-select-frequency class="dropdown" id="myselect">\r\n   \r\n      <option value="1_3">1 Month</option>\r\n      <option value="2_3">2 Months</option>\r\n      <option value="3_3">3 Months</option>\r\n      <option value="4_3">4 Months</option>\r\n      <option value="5_3">5 Months</option>\r\n      <option value="6_3">6 Months</option>\r\n      \r\n    </og-select-frequency>\r\n</p>\r\n</div>\r\n</div>\r\n</og-when>\r\n\r\n<og-when test="upsellEligible">\r\n     <div class="test">\r\n   \r\n   <div class="div-btn-2">\r\n  <og-optin-toggle class="toggle">\r\n    <button slot="default" type="checkbox" class="optin-btn">\r\n      <span class="checkmark">\r\n        <div class="checkmark_stem"></div>\r\n        <div class="checkmark_kick"></div>\r\n      </span>\r\n     </button>\r\n  </og-optin-toggle>\r\n  <span class="new-phrase"></span> Auto Refresh\r\n \r\n  <og-tooltip placement="left" class="og-tooltip">\r\n    <span slot="trigger" class="tooltip-icon"></span>\r\n    <span slot="content">Subscribe to this product and have it conveniently delivered to you at the frequency you chooseu0021 Read the FAQ here. Promotion subject to change.</span>\r\n  </og-tooltip>\r\n  <p class="offer-text"><og-incentive-text from="DiscountPercent"></og-incentive-text>Get 20% off regular price and free shipping with $30 of Auto Refresh products.</p>\r\n<p class="freq-section" style="margin-left: 1.5em">\r\n    Send Every \r\n    <og-select-frequency class="dropdown">\r\n    \r\n      <option value="1_3">1 Month</option>\r\n      <option value="2_3">2 Months</option>\r\n      <option value="3_3">3 Months</option>\r\n      <option value="4_3">4 Months</option>\r\n      <option value="5_3">5 Months</option>\r\n      <option value="6_3">6 Months</option>\r\n     \r\n    </og-select-frequency>\r\n</p>\r\n</div>\r\n</div>\r\n</og-when>',selector:'[location="pdp"]'},{markup:'<og-when test="subscribed">\n    <span class = "frequency_indicator"><span>Sending</span>  <span style="font-weight:bold; color:#000000"> every</span>\n    <og-frequency-status></og-frequency-status>\n</og-when>',selector:'[location="mini-cart"]'},{markup:'<og-when class="subscription-details" test="regularEligible">\r\n  <div class="test">\r\n   \r\n   <div class="div-btn-2">\r\n  <og-optin-toggle class="toggle">\r\n    <button slot="default" type="checkbox" class="optin-btn">\r\n      <span class="checkmark">\r\n        <div class="checkmark_stem"></div>\r\n        <div class="checkmark_kick"></div>\r\n      </span>\r\n     </button>\r\n  </og-optin-toggle>\r\n  <span class="new-phrase">New</span> Auto Refresh\r\n \r\n  <og-tooltip placement="left" class="og-tooltip">\r\n    <span slot="trigger" class="tooltip-icon"></span>\r\n    <span slot="trigger"><i class="arrow right"></i></span>\r\n    <div slot="content" class="og-tooltip-content">\r\n\t\t<div class="tooltip-copy">\r\n\t\t\t<span class="fa fa-remove close"></span>\r\n\t\t\t<h2>HERE\'S A SNAPSHOT</h2>  \r\n\t\t\t<ul>\r\n\t\t\t<li>Get 20% off regular price and free shipping with $30 of Auto Refresh products</li>\r\n\t\t\t<li>Easily update your products, delivery dates, frequency and more</li>\r\n\t\t\t<li>Receive email reminders before each shipment</li>\r\n\t\t\t<li>Cancel any time</li>\r\n\t\t\t</ul>\r\n\t\t\t<a href="/m/auto-refresh.html">Learn More</a>\r\n\t\t\t<p>TERMS AND CONDITIONS</p>\r\n\t\t\t<p>\r\n\t\t\t<a href="/customer-care/terms-of-use.html#auto-refresh">Subscription Terms</a>: Your Auto Refresh subscription will begin when you click “Submit Order” at checkout. To cancel, go to “My Account/My Auto Refresh” and click on “Cancel Auto Refresh Order” or call 1-800-756-5005.  By clicking “Submit Order,” you authorize us to, upon shipment, automatically charge you for your subscription based on the term frequency you selected, in an amount that is 20% off of the full price for the product (plus shipping and handling when the Auto Refresh subscription products ordered total less than $30 after discount), to the payment method provided, until you cancel.  We can increase the price of your Auto Refresh items at any time and will notify you of price increases via email. See Auto Refresh Subscription Terms for full details.\r\n\t\t\t</p>\r\n\t\t</div>\r\n\t</div>\r\n</og-tooltip>\r\n  <p class="offer-text">Get <og-incentive-text from="DiscountPercent"></og-incentive-text> off regular price and free shipping with $30 of Auto Refresh products</p>\r\n<p class="freq-section" style="margin-left: 1.5em">\r\n    Send Every\r\n   \r\n    <og-select-frequency class="dropdown">\r\n   \r\n      <option value="1_3">1 Month</option>\r\n      <option value="2_3">2 Months</option>\r\n      <option value="3_3">3 Months</option>\r\n      <option value="4_3">4 Months</option>\r\n      <option value="5_3">5 Months</option>\r\n      <option value="6_3">6 Months</option>\r\n     \r\n    </og-select-frequency>\r\n</p>\r\n</div>\r\n</div>\r\n</og-when>\r\n<og-when test="upsellEligible">\r\n    <og-when test="u0021upcomingOrderContainsProduct">\r\n        Add to upcoming subscription order and receive 20% off\r\n        <og-upsell-button>\r\n            <button type="button">\r\n                Add to Next Order on \r\n                <og-next-upcoming-order format="{{month-short}} {{day}}, {{year-numeric}}">\r\n                    </og-nextupcoming-order>\r\n            </button>\r\n        </og-upsell-button>\r\n\r\n        <og-upsell-modal>\r\n            Subscribe to this product and have it conveniently delivered to you at the frequency you chooseu0021 Read the FAQ here. Promotion subject to change.\r\n            <br />\r\n            <og-when test="subscriptionEligible">\r\n              <og-optout-button>\r\n                  Get one-time\r\n              </og-optout-button>\r\n              <br />\r\n              <og-optin-button>\r\n                  Subscribe and get 20% off on every order\r\n              </og-optin-button>\r\n              Ships Every: \r\n              <og-select-frequency default-text="Recommended">\r\n       \r\n          <option value="1_3">1 Month</option>\r\n      <option value="2_3">2 Months</option>\r\n      <option value="3_3">3 Months</option>\r\n      <option value="4_3">4 Months</option>\r\n      <option value="5_3">5 Months</option>\r\n          <option value="6_3">6 Months</option>\r\n\r\n          \r\n              </og-select-frequency>\r\n            </og-when>\r\n            <og-when test="u0021subscriptionEligible">\r\n              You will receive this item in your next order on <og-next-upcoming-order format="{{month-short}} {{day}}, {{year-numeric}}">              \r\n            </og-when>\r\n            <br />\r\n            <span slot="confirm">\r\n                <button type="button">Add</button>\r\n            </span>\r\n            <span slot="cancel">\r\n                <button type="button">Cancel</button>\r\n            </span>\r\n        </og-upsell-modal>\r\n    </og-when>\r\n\r\n    <og-when test="upcomingOrderContainsProduct">\r\n       You will receive this item in your next order on <og-next-upcoming-order format="{{month-short}} {{day}}, {{year-numeric}}">\r\n        </og-nextupcoming-order>\r\n    </og-when>\r\n</og-when>',selector:'[location="quicklook"]'},{markup:'<og-when test="regularEligible">\n    <p><og-optout-button>\n    Deliver one-time only\n</og-optout-button></p>\n    <p>\n        <og-optin-button>\n            Subscribe and Save <og-incentive-text from="DiscountPercent"></og-incentive-text> + FREE Shipping\n        </og-optin-button>        <og-tooltip placement="top" >\n            <span slot="trigger">info</span>\n            <span slot="content">Subscribe to this product and have it conveniently delivered to you at the frequency you chooseu0021 Read the FAQ here. Promotion subject to change.</span>\n        </og-tooltip>\n    </p>\n    <p style="margin-left: 1.5em">\n        Ships Every: \n        <og-select-frequency default-text="recommended">\n          <option value="1_3" selected="selected"\n            >\n            1 month\n          </option>\n          <option value="2_3" >\n            2 months\n          </option>\n          <option value="3_3" >\n            3 months\n          </option>\n          <option value="4_3" >\n            4 months\n          </option>\n          <option value="5_3" >\n            5 months\n          </option>\n          <option value="6_3" >\n            6 months\n          </option>\n        </og-select-frequency>\n    </p>\n</og-when>\n<og-when test="upsellEligible">\n    <og-when test="!upcomingOrderContainsProduct">\n        Add to upcoming subscription order and receive 20% off\n        <og-upsell-button>\n            <button type="button">\n                Add to Next Order on \n                <og-next-upcoming-order format="{{month-short}} {{day}}, {{year-numeric}}">\n                    </og-nextupcoming-order>\n            </button>\n        </og-upsell-button>\n\n        <og-upsell-modal>\n            Subscribe to this product and have it conveniently delivered to you at the frequency you chooseu0021 Read the FAQ here. Promotion subject to change.\n            <br />\n            <og-when test="subscriptionEligible">\n              <og-optout-button>\n                  Get one-time\n              </og-optout-button>\n              <br />\n              <og-optin-button>\n                  Subscribe and get 10% off on every order\n              </og-optin-button>\n              Ships Every: \n              <og-select-frequency default-text="recommended">\n                <option value="1_3" selected="selected"\n                  >\n                  1 month\n                </option>\n                <option value="2_3" >\n                  2 months\n                </option>\n                <option value="3_3" >\n                  3 months\n                </option>\n                <option value="4_3" >\n                  4 months\n                </option>\n                <option value="5_3" >\n                  5 months\n                </option>\n                <option value="6_3" >\n                  6 months\n                </option>\n              </og-select-frequency>\n            </og-when>\n            <og-when test="!subscriptionEligible">\n              <og-next-upcoming-order format="{{month-short}} {{day}}, {{year-numeric}}">              \n            </og-when>\n            <br />\n            <span slot="confirm">\n                <button type="button">Add</button>\n            </span>\n            <span slot="cancel">\n                <button type="button"></button>\n            </span>\n        </og-upsell-modal>\n    </og-when>\n\n    <og-when test="upcomingOrderContainsProduct">\n       <og-next-upcoming-order format="{{month-short}} {{day}}, {{year-numeric}}">\n        </og-nextupcoming-order>\n    </og-when>\n</og-when>',selector:"og-offer"}]).setPublicPath("//static.ordergroove.com/@ordergroove/offers/2.26.2/dist/"),function(n){const o=n.createElement("style");o.type="text/css",o.appendChild(n.createTextNode('[location="cart"] {\n--og-global-family: Arial, Helvetica, sans-serif;\n--og-global-size: 13px;\n--og-global-color: rgba(77,67,67,1);\n--og-tooltip-family: Arial, Helvetica, sans-serif;\n--og-tooltip-size: 10px;\n--og-tooltip-color: rgba(41,121,130,0.72);\n--og-tooltip-background: #ececec;\n--og-tooltip-box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.28);\n--og-tooltip-placement: left;\n--og-upsell-background: #298266;\n--og-upsell-family: Arial, Helvetica, sans-serif;\n--og-upsell-size: 13px;\n--og-upsell-color: rgba(99,119,219,1);\n--og-modal-button-family: Arial, Helvetica, sans-serif;\n--og-modal-button-size: 13px;\n--og-modal-button-color: #333333;\n--og-confirm-button-background: #00449e;\n--og-confirm-button-color: rgba(255,255,255,1);\n--og-modal-button-background: #e6e6e6;\n--og-select-padding: 0.5em 7.2em 0.5em 0.3em;\n--og-wrapper-padding: 0;\n}\n\n[location="cart"] .og-tooltip-content {\n  display: block;\n  line-height: 1.5;\n  text-align: left;\n  font-size: 12px;\n  color: black;\n  padding: 24px 32px;\n  /*min-width: 285px;*/\n  /*width:100%;*/\n  width: 268px;\n  height: 347px;\n  background: #fff;\n  /*box-shadow: 5px 5px 5px #dedede;*/\n  border: 1px solid #666666;\n  overflow: scroll;\n  left: -137px;\n  top: -168px;\n  position: absolute;\n}\n\n/*select {*/\n/*  width: 145px;*/\n/*}*/\n\n[location="cart"] .arrow {\n  border: solid black;\n  border-width: 0 1px 1px 0;\n  display: inline-block;\n  padding: 3px;\n  padding: 7px;\n  position: absolute;\n  left: -20px;\n  top: 6px;\n  display: none;\n}\n\n[location="cart"] .right {\n  transform: rotate(-45deg);\n  -webkit-transform: rotate(-45deg);\n}\n\n[location="cart"] .og-tooltip-content li {\n    list-style: disc;\n}\n\n[location="cart"] .og-tooltip-content a {\n    text-decoration: underline;\n}\n\n\n[location="cart"] og-optin-toggle[subscribed] .checkmark {\n  display:inline-block;\n    width: 20px;\n    height:20px;\n    -ms-transform: rotate(45deg); /* IE 9 */\n    -webkit-transform: rotate(45deg); /* Chrome, Safari, Opera */\n    transform: rotate(45deg);  \n} \n\n[location="cart"] og-optin-toggle[subscribed] .checkmark_stem {\n    position: absolute;\n    width:2px;\n    height:9px;\n    background-color:#fff;\n    left:4px;\n    top:3px;\n}\n\n[location="cart"] og-optin-toggle[subscribed] .checkmark_kick {\n    position: absolute;\n    width:5px;\n    height:2px;\n    background-color:#fff;\n    left:1px;\n    top:12px;\n}\n\n\n[location="cart"] .optin-btn {\n  display: inline-block;\n  background: #ffffff;\n  border: none;\n  width: 14px;\n  height: 14px;\n  margin-right: 5px;\n  vertical-align: bottom;\n  border: 1px solid gray; \n  padding:0px;\n}\n\n[location="cart"] og-optin-toggle[subscribed] .optin-btn {\n    display: inline-block;\n    background: #4F99FC;\n    border: 1px solid #4F99FC;\n    width: 14px;\n    height: 14px; \n    margin-right: 5px;\n    vertical-align: bottom; \n    padding:0px;\n}\n\n[location="cart"] .sub {\n  display: inline-block;\n  width: 89%;\n  font-size: 14px;\n  font-weight: 300;\n  vertical-align: top;\n  padding-bottom: 5px;\n  color: #000;  \n}\n\n[location="cart"] .dropdown {\n  width: 163px;\n  border-radius:0px;\n  margin-left: 10px;\n}\n[location="pdp"] {\n--og-global-family: Arial, Helvetica, sans-serif;\n--og-global-size: 13px;\n--og-global-color: rgba(77,67,67,1);\n--og-tooltip-family: Arial, Helvetica, sans-serif;\n--og-tooltip-size: 10px;\n--og-tooltip-color: rgba(41,121,130,0.72);\n--og-tooltip-background: #ececec;\n--og-tooltip-box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.28);\n/*--og-tooltip-background: none;*/\n/*--og-tooltip-box-shadow: none;*/\n--og-tooltip-placement: left;\n--og-upsell-background: #298266;\n--og-upsell-family: Arial, Helvetica, sans-serif;\n--og-upsell-size: 13px;\n--og-upsell-color: rgba(99,119,219,1);\n--og-modal-button-family: Arial, Helvetica, sans-serif;\n--og-modal-button-size: 13px;\n--og-modal-button-color: #333333;\n--og-confirm-button-background: #00449e;\n--og-confirm-button-color: rgba(255,255,255,1);\n--og-modal-button-background: #e6e6e6;\n--og-select-padding: 0.5em 7.2em 0.5em 0.3em;\n--og-wrapper-padding: 0;\n}\n\n[location="pdp"] .scrollbar-hidden::-webkit-scrollbar {\n  display: none;\n}\n\n[location="pdp"] .og-tooltip-content {\n  /*pointer-events:none;*/\n  display: block;\n  line-height: 1.5;\n  text-align: left;\n  font-size: 12px;\n  color: black;\n  padding: 24px 32px;\n  min-width: 285px;\n  width:100%;\n  width: 415px;\n  height: 490px;\n  background: #fff;\n  box-shadow: 5px 5px 5px #dedede;\n  border: 1px solid #666666;\n  overflow: scroll;\n  left: -283px;\n  top: -275px;\n  position: absolute;\n  display: none;\n}\n\n[location="pdp"] .og-tooltip:hover .og-tooltip-content {\n    display: block;\n}\n\n@media (max-width: 767px) {\n[location="pdp"] .og-tooltip-content {\n  /*pointer-events:none;*/\n  display: block;\n  line-height: 1.5;\n  text-align: left;\n  font-size: 12px;\n  color: black;\n  padding: 24px 32px;\n  /*min-width: 285px;*/\n  /*width:100%;*/\n  width: 273px u0021important;\n  height: 685px;\n  background: #fff;\n  /*box-shadow: 5px 5px 5px #dedede;*/\n  border: 1px solid #666666;\n  /*overflow: scroll;*/\n  left: -92px u0021important;\n  top: -275px;\n  position: absolute;\n}  \n  \n}\n\n\n\n/*select {*/\n/*  width: 145px;*/\n/*}*/\n\n[location="pdp"] .arrow {\n  border: solid black;\n  border-width: 0 1px 1px 0;\n  display: inline-block;\n  padding: 3px;\n  padding: 7px;\n  position: absolute;\n  left: -20px;\n  top: 6px;\n  display: none;\n}\n\n[location="pdp"] .right {\n  transform: rotate(-45deg);\n  -webkit-transform: rotate(-45deg);\n}\n\n[location="pdp"] .og-tooltip-content li {\n    list-style: disc;\n}\n\n[location="pdp"] .og-tooltip-content a {\n    text-decoration: underline;\n}\n\n\n[location="pdp"] og-optin-toggle[subscribed] .checkmark {\n  display:inline-block;\n    width: 20px;\n    height:20px;\n    -ms-transform: rotate(45deg); /* IE 9 */\n    -webkit-transform: rotate(45deg); /* Chrome, Safari, Opera */\n    transform: rotate(45deg);  \n} \n\n[location="pdp"] og-optin-toggle[subscribed] .checkmark_stem {\n    position: absolute;\n    width:2px;\n    height:9px;\n    background-color:#fff;\n    left:4px;\n    top:3px;\n}\n\n[location="pdp"] og-optin-toggle[subscribed] .checkmark_kick {\n    position: absolute;\n    width:5px;\n    height:2px;\n    background-color:#fff;\n    left:1px;\n    top:12px;\n}\n\n\n[location="pdp"] .optin-btn {\n  display: inline-block;\n  background: #ffffff;\n  border: none;\n  width: 14px;\n  height: 14px;\n  margin-right: 5px;\n  vertical-align: bottom;\n  border: 1px solid gray; \n  padding:0px;\n}\n\n[location="pdp"] og-optin-toggle[subscribed] .optin-btn {\n    display: inline-block;\n    background: #4F99FC;\n    border: 1px solid #4F99FC;\n    width: 14px;\n    height: 14px; \n    margin-right: 5px;\n    vertical-align: bottom; \n    padding:0px;\n}\n\n[location="pdp"] .sub {\n  display: inline-block;\n  width: 89%;\n  font-size: 14px;\n  font-weight: 300;\n  vertical-align: top;\n  padding-bottom: 5px;\n  color: #000;  \n}\n\n[location="pdp"] .dropdown {\n  width: 163px;\n  border-radius:0px;\n  margin-left: 10px;\n}\n\n[location="pdp"] [location="pdp"] .og-tooltip-content {\n    /*left: -40%;*/\n    /*top: auto;*/\n    /*position: absolute;*/\n    /*width: 250px;*/\n    left: -135px u0021important;\n}\n@media only screen and (min-width: 320px) and (max-width: 479px) {\n  [location="pdp"] {\n    --og-tooltip-background: none;\n    --og-tooltip-box-shadow: none;\n  }  \n}    \n\n[location="mini-cart"] {\n--og-global-family: Arial, Helvetica, sans-serif;\n--og-global-size: 13px;\n--og-global-color: rgba(77,67,67,1);\n--og-tooltip-family: Arial, Helvetica, sans-serif;\n--og-tooltip-size: 10px;\n--og-tooltip-color: rgba(41,121,130,0.72);\n--og-tooltip-background: #ececec;\n--og-tooltip-box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.28);\n--og-tooltip-placement: left;\n--og-upsell-background: #298266;\n--og-upsell-family: Arial, Helvetica, sans-serif;\n--og-upsell-size: 13px;\n--og-upsell-color: rgba(99,119,219,1);\n--og-modal-button-family: Arial, Helvetica, sans-serif;\n--og-modal-button-size: 13px;\n--og-modal-button-color: #333333;\n--og-confirm-button-background: #00449e;\n--og-confirm-button-color: rgba(255,255,255,1);\n--og-modal-button-background: #e6e6e6;\n--og-wrapper-padding: 0;\n}\n\n[location="mini-cart"] og-frequency-status {\n  font-weight: bold;\n}\n\n[location="quicklook"] {\n--og-global-family: Arial, Helvetica, sans-serif;\n--og-global-size: 13px;\n--og-global-color: rgba(77,67,67,1);\n--og-tooltip-family: Arial, Helvetica, sans-serif;\n--og-tooltip-size: 10px;\n--og-tooltip-color: rgba(41,121,130,0.72);\n--og-tooltip-background: #ececec;\n--og-tooltip-box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.28);\n--og-tooltip-placement: left;\n--og-upsell-background: #298266;\n--og-upsell-family: Arial, Helvetica, sans-serif;\n--og-upsell-size: 13px;\n--og-upsell-color: rgba(99,119,219,1);\n--og-modal-button-family: Arial, Helvetica, sans-serif;\n--og-modal-button-size: 13px;\n--og-modal-button-color: #333333;\n--og-confirm-button-background: #00449e;\n--og-confirm-button-color: rgba(255,255,255,1);\n--og-modal-button-background: #e6e6e6;\n--og-select-padding: 0.5em 7.2em 0.5em 0.3em;\n--og-wrapper-padding: 0;\n}\n\n\n[location="quicklook"] .og-tooltip-content {\n  display: block;\n  line-height: 1.5;\n  text-align: left;\n  font-size: 12px;\n  color: black;\n  padding: 24px 32px;\n  /*min-width: 285px;*/\n  /*width:100%;*/\n  width: 268px;\n  height: 347px;\n  background: #fff;\n  /*box-shadow: 5px 5px 5px #dedede;*/\n  border: 1px solid #666666;\n  overflow: scroll;\n  left: -137px;\n  top: -168px;\n  position: absolute;\n}\n\n/*select {*/\n/*  width: 145px;*/\n/*}*/\n\n[location="quicklook"] .arrow {\n  border: solid black;\n  border-width: 0 1px 1px 0;\n  display: inline-block;\n  padding: 3px;\n  padding: 7px;\n  position: absolute;\n  left: -20px;\n  top: 6px;\n  display: none;\n}\n\n[location="quicklook"] .right {\n  transform: rotate(-45deg);\n  -webkit-transform: rotate(-45deg);\n}\n\n[location="quicklook"] .og-tooltip-content li {\n    list-style: disc;\n}\n\n[location="quicklook"] .og-tooltip-content a {\n    text-decoration: underline;\n}\n\n\n[location="quicklook"] og-optin-toggle[subscribed] .checkmark {\n  display:inline-block;\n    width: 20px;\n    height:20px;\n    -ms-transform: rotate(45deg); /* IE 9 */\n    -webkit-transform: rotate(45deg); /* Chrome, Safari, Opera */\n    transform: rotate(45deg);  \n} \n\n[location="quicklook"] og-optin-toggle[subscribed] .checkmark_stem {\n    position: absolute;\n    width:2px;\n    height:9px;\n    background-color:#fff;\n    left:4px;\n    top:3px;\n}\n\n[location="quicklook"] og-optin-toggle[subscribed] .checkmark_kick {\n    position: absolute;\n    width:5px;\n    height:2px;\n    background-color:#fff;\n    left:1px;\n    top:12px;\n}\n\n\n[location="quicklook"] .optin-btn {\n  display: inline-block;\n  background: #ffffff;\n  border: none;\n  width: 14px;\n  height: 14px;\n  margin-right: 5px;\n  vertical-align: bottom;\n  border: 1px solid gray; \n  padding:0px;\n}\n\n[location="quicklook"] og-optin-toggle[subscribed] .optin-btn {\n    display: inline-block;\n    background: #4F99FC;\n    border: 1px solid #4F99FC;\n    width: 14px;\n    height: 14px; \n    margin-right: 5px;\n    vertical-align: bottom; \n    padding:0px;\n}\n\n[location="quicklook"] .sub {\n  display: inline-block;\n  width: 89%;\n  font-size: 14px;\n  font-weight: 300;\n  vertical-align: top;\n  padding-bottom: 5px;\n  color: #000;  \n}\n\n[location="quicklook"] .dropdown {\n  width: 173px;\n  border-radius:0px;\n  margin-left: 10px;\n}\nog-offer {\n--og-global-family: Arial, Helvetica, sans-serif;\n--og-global-size: 13px;\n--og-global-color: rgba(77,67,67,1);\n--og-wrapper-padding: 10px 0;\n--og-tooltip-family: Arial, Helvetica, sans-serif;\n--og-tooltip-size: 10px;\n--og-tooltip-color: rgba(41,121,130,0.72);\n--og-tooltip-background: #ececec;\n--og-tooltip-box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.28);\n--og-tooltip-placement: top;\n--og-upsell-family: Arial, Helvetica, sans-serif;\n--og-upsell-size: 13px;\n--og-upsell-color: rgba(99,119,219,1);\n--og-wrapper-padding: 0;\n}')),n.head.appendChild(o)}(document);return module.exports;});
//# sourceMappingURL=offers.js.map?v=2.26.2