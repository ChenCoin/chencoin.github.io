const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/browserAll-DqOVfRud.js","assets/webworkerAll-7P7Lmuaz.js","assets/colorToUniform-QNgo6RYQ.js","assets/getBatchSamplersUniformGroup-glRGg6ra.js","assets/WebGPURenderer-CfVowmPT.js","assets/SharedSystems-0n6Vj8Bd.js","assets/WebGLRenderer-CYiHy3hY.js"])))=>i.map(i=>d[i]);
var Sa=Object.defineProperty;var Ca=(n,t,e)=>t in n?Sa(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e;var C=(n,t,e)=>Ca(n,typeof t!="symbol"?t+"":t,e);(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))e(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&e(s)}).observe(document,{childList:!0,subtree:!0});function t(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function e(r){if(r.ep)return;r.ep=!0;const i=t(r);fetch(r.href,i)}})();const wa="modulepreload",Aa=function(n){return"/eggcore/"+n},ai={},gn=function(n,t,e){let r=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const i=document.querySelector("meta[property=csp-nonce]"),s=(i==null?void 0:i.nonce)||(i==null?void 0:i.getAttribute("nonce"));r=Promise.all(t.map(o=>{if(o=Aa(o),o in ai)return;ai[o]=!0;const a=o.endsWith(".css"),l=a?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${o}"]${l}`))return;const u=document.createElement("link");if(u.rel=a?"stylesheet":wa,a||(u.as="script",u.crossOrigin=""),u.href=o,s&&u.setAttribute("nonce",s),document.head.appendChild(u),a)return new Promise((c,h)=>{u.addEventListener("load",c),u.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${o}`)))})}))}return r.then(()=>n()).catch(i=>{const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=i,window.dispatchEvent(s),!s.defaultPrevented)throw i})};var O=(n=>(n.Application="application",n.WebGLPipes="webgl-pipes",n.WebGLPipesAdaptor="webgl-pipes-adaptor",n.WebGLSystem="webgl-system",n.WebGPUPipes="webgpu-pipes",n.WebGPUPipesAdaptor="webgpu-pipes-adaptor",n.WebGPUSystem="webgpu-system",n.CanvasSystem="canvas-system",n.CanvasPipesAdaptor="canvas-pipes-adaptor",n.CanvasPipes="canvas-pipes",n.Asset="asset",n.LoadParser="load-parser",n.ResolveParser="resolve-parser",n.CacheParser="cache-parser",n.DetectionParser="detection-parser",n.MaskEffect="mask-effect",n.BlendMode="blend-mode",n.TextureSource="texture-source",n.Environment="environment",n.ShapeBuilder="shape-builder",n))(O||{});const lr=n=>{if(typeof n=="function"||typeof n=="object"&&n.extension){if(!n.extension)throw new Error("Extension class must have an extension object");n={...typeof n.extension!="object"?{type:n.extension}:n.extension,ref:n}}if(typeof n=="object")n={...n};else throw new Error("Invalid extension type");return typeof n.type=="string"&&(n.type=[n.type]),n},He=(n,t)=>lr(n).priority??t,lt={_addHandlers:{},_removeHandlers:{},_queue:{},remove(...n){return n.map(lr).forEach(t=>{t.type.forEach(e=>{var r,i;return(i=(r=this._removeHandlers)[e])==null?void 0:i.call(r,t)})}),this},add(...n){return n.map(lr).forEach(t=>{t.type.forEach(e=>{var s,o;const r=this._addHandlers,i=this._queue;r[e]?(o=r[e])==null||o.call(r,t):(i[e]=i[e]||[],(s=i[e])==null||s.push(t))})}),this},handle(n,t,e){var o;const r=this._addHandlers,i=this._removeHandlers;if(r[n]||i[n])throw new Error(`Extension type ${n} already has a handler`);r[n]=t,i[n]=e;const s=this._queue;return s[n]&&((o=s[n])==null||o.forEach(a=>t(a)),delete s[n]),this},handleByMap(n,t){return this.handle(n,e=>{e.name&&(t[e.name]=e.ref)},e=>{e.name&&delete t[e.name]})},handleByNamedList(n,t,e=-1){return this.handle(n,r=>{t.findIndex(s=>s.name===r.name)>=0||(t.push({name:r.name,value:r.ref}),t.sort((s,o)=>He(o.value,e)-He(s.value,e)))},r=>{const i=t.findIndex(s=>s.name===r.name);i!==-1&&t.splice(i,1)})},handleByList(n,t,e=-1){return this.handle(n,r=>{t.includes(r.ref)||(t.push(r.ref),t.sort((i,s)=>He(s,e)-He(i,e)))},r=>{const i=t.indexOf(r.ref);i!==-1&&t.splice(i,1)})}},Ta={extension:{type:O.Environment,name:"browser",priority:-1},test:()=>!0,load:async()=>{await gn(()=>import("./browserAll-DqOVfRud.js"),__vite__mapDeps([0,1,2,3]))}},Pa={extension:{type:O.Environment,name:"webworker",priority:0},test:()=>typeof self<"u"&&self.WorkerGlobalScope!==void 0,load:async()=>{await gn(()=>import("./webworkerAll-7P7Lmuaz.js"),__vite__mapDeps([1,2,3]))}};class at{constructor(t,e,r){this._x=e||0,this._y=r||0,this._observer=t}clone(t){return new at(t??this._observer,this._x,this._y)}set(t=0,e=t){return(this._x!==t||this._y!==e)&&(this._x=t,this._y=e,this._observer._onUpdate(this)),this}copyFrom(t){return(this._x!==t.x||this._y!==t.y)&&(this._x=t.x,this._y=t.y,this._observer._onUpdate(this)),this}copyTo(t){return t.set(this._x,this._y),t}equals(t){return t.x===this._x&&t.y===this._y}toString(){return`[pixi.js/math:ObservablePoint x=0 y=0 scope=${this._observer}]`}get x(){return this._x}set x(t){this._x!==t&&(this._x=t,this._observer._onUpdate(this))}get y(){return this._y}set y(t){this._y!==t&&(this._y=t,this._observer._onUpdate(this))}}function Nr(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var ss={exports:{}};(function(n){var t=Object.prototype.hasOwnProperty,e="~";function r(){}Object.create&&(r.prototype=Object.create(null),new r().__proto__||(e=!1));function i(l,u,c){this.fn=l,this.context=u,this.once=c||!1}function s(l,u,c,h,f){if(typeof c!="function")throw new TypeError("The listener must be a function");var d=new i(c,h||l,f),p=e?e+u:u;return l._events[p]?l._events[p].fn?l._events[p]=[l._events[p],d]:l._events[p].push(d):(l._events[p]=d,l._eventsCount++),l}function o(l,u){--l._eventsCount===0?l._events=new r:delete l._events[u]}function a(){this._events=new r,this._eventsCount=0}a.prototype.eventNames=function(){var u=[],c,h;if(this._eventsCount===0)return u;for(h in c=this._events)t.call(c,h)&&u.push(e?h.slice(1):h);return Object.getOwnPropertySymbols?u.concat(Object.getOwnPropertySymbols(c)):u},a.prototype.listeners=function(u){var c=e?e+u:u,h=this._events[c];if(!h)return[];if(h.fn)return[h.fn];for(var f=0,d=h.length,p=new Array(d);f<d;f++)p[f]=h[f].fn;return p},a.prototype.listenerCount=function(u){var c=e?e+u:u,h=this._events[c];return h?h.fn?1:h.length:0},a.prototype.emit=function(u,c,h,f,d,p){var g=e?e+u:u;if(!this._events[g])return!1;var m=this._events[g],v=arguments.length,x,y;if(m.fn){switch(m.once&&this.removeListener(u,m.fn,void 0,!0),v){case 1:return m.fn.call(m.context),!0;case 2:return m.fn.call(m.context,c),!0;case 3:return m.fn.call(m.context,c,h),!0;case 4:return m.fn.call(m.context,c,h,f),!0;case 5:return m.fn.call(m.context,c,h,f,d),!0;case 6:return m.fn.call(m.context,c,h,f,d,p),!0}for(y=1,x=new Array(v-1);y<v;y++)x[y-1]=arguments[y];m.fn.apply(m.context,x)}else{var _=m.length,A;for(y=0;y<_;y++)switch(m[y].once&&this.removeListener(u,m[y].fn,void 0,!0),v){case 1:m[y].fn.call(m[y].context);break;case 2:m[y].fn.call(m[y].context,c);break;case 3:m[y].fn.call(m[y].context,c,h);break;case 4:m[y].fn.call(m[y].context,c,h,f);break;default:if(!x)for(A=1,x=new Array(v-1);A<v;A++)x[A-1]=arguments[A];m[y].fn.apply(m[y].context,x)}}return!0},a.prototype.on=function(u,c,h){return s(this,u,c,h,!1)},a.prototype.once=function(u,c,h){return s(this,u,c,h,!0)},a.prototype.removeListener=function(u,c,h,f){var d=e?e+u:u;if(!this._events[d])return this;if(!c)return o(this,d),this;var p=this._events[d];if(p.fn)p.fn===c&&(!f||p.once)&&(!h||p.context===h)&&o(this,d);else{for(var g=0,m=[],v=p.length;g<v;g++)(p[g].fn!==c||f&&!p[g].once||h&&p[g].context!==h)&&m.push(p[g]);m.length?this._events[d]=m.length===1?m[0]:m:o(this,d)}return this},a.prototype.removeAllListeners=function(u){var c;return u?(c=e?e+u:u,this._events[c]&&o(this,c)):(this._events=new r,this._eventsCount=0),this},a.prototype.off=a.prototype.removeListener,a.prototype.addListener=a.prototype.on,a.prefixed=e,a.EventEmitter=a,n.exports=a})(ss);var Fa=ss.exports;const St=Nr(Fa),za=Math.PI*2,Ma=180/Math.PI,de=Math.PI/180;class ot{constructor(t=0,e=0){this.x=0,this.y=0,this.x=t,this.y=e}clone(){return new ot(this.x,this.y)}copyFrom(t){return this.set(t.x,t.y),this}copyTo(t){return t.set(this.x,this.y),t}equals(t){return t.x===this.x&&t.y===this.y}set(t=0,e=t){return this.x=t,this.y=e,this}toString(){return`[pixi.js/math:Point x=${this.x} y=${this.y}]`}static get shared(){return In.x=0,In.y=0,In}}const In=new ot;class X{constructor(t=1,e=0,r=0,i=1,s=0,o=0){this.array=null,this.a=t,this.b=e,this.c=r,this.d=i,this.tx=s,this.ty=o}fromArray(t){this.a=t[0],this.b=t[1],this.c=t[3],this.d=t[4],this.tx=t[2],this.ty=t[5]}set(t,e,r,i,s,o){return this.a=t,this.b=e,this.c=r,this.d=i,this.tx=s,this.ty=o,this}toArray(t,e){this.array||(this.array=new Float32Array(9));const r=e||this.array;return t?(r[0]=this.a,r[1]=this.b,r[2]=0,r[3]=this.c,r[4]=this.d,r[5]=0,r[6]=this.tx,r[7]=this.ty,r[8]=1):(r[0]=this.a,r[1]=this.c,r[2]=this.tx,r[3]=this.b,r[4]=this.d,r[5]=this.ty,r[6]=0,r[7]=0,r[8]=1),r}apply(t,e){e=e||new ot;const r=t.x,i=t.y;return e.x=this.a*r+this.c*i+this.tx,e.y=this.b*r+this.d*i+this.ty,e}applyInverse(t,e){e=e||new ot;const r=this.a,i=this.b,s=this.c,o=this.d,a=this.tx,l=this.ty,u=1/(r*o+s*-i),c=t.x,h=t.y;return e.x=o*u*c+-s*u*h+(l*s-a*o)*u,e.y=r*u*h+-i*u*c+(-l*r+a*i)*u,e}translate(t,e){return this.tx+=t,this.ty+=e,this}scale(t,e){return this.a*=t,this.d*=e,this.c*=t,this.b*=e,this.tx*=t,this.ty*=e,this}rotate(t){const e=Math.cos(t),r=Math.sin(t),i=this.a,s=this.c,o=this.tx;return this.a=i*e-this.b*r,this.b=i*r+this.b*e,this.c=s*e-this.d*r,this.d=s*r+this.d*e,this.tx=o*e-this.ty*r,this.ty=o*r+this.ty*e,this}append(t){const e=this.a,r=this.b,i=this.c,s=this.d;return this.a=t.a*e+t.b*i,this.b=t.a*r+t.b*s,this.c=t.c*e+t.d*i,this.d=t.c*r+t.d*s,this.tx=t.tx*e+t.ty*i+this.tx,this.ty=t.tx*r+t.ty*s+this.ty,this}appendFrom(t,e){const r=t.a,i=t.b,s=t.c,o=t.d,a=t.tx,l=t.ty,u=e.a,c=e.b,h=e.c,f=e.d;return this.a=r*u+i*h,this.b=r*c+i*f,this.c=s*u+o*h,this.d=s*c+o*f,this.tx=a*u+l*h+e.tx,this.ty=a*c+l*f+e.ty,this}setTransform(t,e,r,i,s,o,a,l,u){return this.a=Math.cos(a+u)*s,this.b=Math.sin(a+u)*s,this.c=-Math.sin(a-l)*o,this.d=Math.cos(a-l)*o,this.tx=t-(r*this.a+i*this.c),this.ty=e-(r*this.b+i*this.d),this}prepend(t){const e=this.tx;if(t.a!==1||t.b!==0||t.c!==0||t.d!==1){const r=this.a,i=this.c;this.a=r*t.a+this.b*t.c,this.b=r*t.b+this.b*t.d,this.c=i*t.a+this.d*t.c,this.d=i*t.b+this.d*t.d}return this.tx=e*t.a+this.ty*t.c+t.tx,this.ty=e*t.b+this.ty*t.d+t.ty,this}decompose(t){const e=this.a,r=this.b,i=this.c,s=this.d,o=t.pivot,a=-Math.atan2(-i,s),l=Math.atan2(r,e),u=Math.abs(a+l);return u<1e-5||Math.abs(za-u)<1e-5?(t.rotation=l,t.skew.x=t.skew.y=0):(t.rotation=0,t.skew.x=a,t.skew.y=l),t.scale.x=Math.sqrt(e*e+r*r),t.scale.y=Math.sqrt(i*i+s*s),t.position.x=this.tx+(o.x*e+o.y*i),t.position.y=this.ty+(o.x*r+o.y*s),t}invert(){const t=this.a,e=this.b,r=this.c,i=this.d,s=this.tx,o=t*i-e*r;return this.a=i/o,this.b=-e/o,this.c=-r/o,this.d=t/o,this.tx=(r*this.ty-i*s)/o,this.ty=-(t*this.ty-e*s)/o,this}isIdentity(){return this.a===1&&this.b===0&&this.c===0&&this.d===1&&this.tx===0&&this.ty===0}identity(){return this.a=1,this.b=0,this.c=0,this.d=1,this.tx=0,this.ty=0,this}clone(){const t=new X;return t.a=this.a,t.b=this.b,t.c=this.c,t.d=this.d,t.tx=this.tx,t.ty=this.ty,t}copyTo(t){return t.a=this.a,t.b=this.b,t.c=this.c,t.d=this.d,t.tx=this.tx,t.ty=this.ty,t}copyFrom(t){return this.a=t.a,this.b=t.b,this.c=t.c,this.d=t.d,this.tx=t.tx,this.ty=t.ty,this}equals(t){return t.a===this.a&&t.b===this.b&&t.c===this.c&&t.d===this.d&&t.tx===this.tx&&t.ty===this.ty}toString(){return`[pixi.js:Matrix a=${this.a} b=${this.b} c=${this.c} d=${this.d} tx=${this.tx} ty=${this.ty}]`}static get IDENTITY(){return Oa.identity()}static get shared(){return Ia.identity()}}const Ia=new X,Oa=new X,Nt=[1,1,0,-1,-1,-1,0,1,1,1,0,-1,-1,-1,0,1],$t=[0,1,1,1,0,-1,-1,-1,0,1,1,1,0,-1,-1,-1],Vt=[0,-1,-1,-1,0,1,1,1,0,1,1,1,0,-1,-1,-1],Wt=[1,1,0,-1,-1,-1,0,1,-1,-1,0,1,1,1,0,-1],ur=[],os=[],je=Math.sign;function Ra(){for(let n=0;n<16;n++){const t=[];ur.push(t);for(let e=0;e<16;e++){const r=je(Nt[n]*Nt[e]+Vt[n]*$t[e]),i=je($t[n]*Nt[e]+Wt[n]*$t[e]),s=je(Nt[n]*Vt[e]+Vt[n]*Wt[e]),o=je($t[n]*Vt[e]+Wt[n]*Wt[e]);for(let a=0;a<16;a++)if(Nt[a]===r&&$t[a]===i&&Vt[a]===s&&Wt[a]===o){t.push(a);break}}}for(let n=0;n<16;n++){const t=new X;t.set(Nt[n],$t[n],Vt[n],Wt[n],0,0),os.push(t)}}Ra();const K={E:0,SE:1,S:2,SW:3,W:4,NW:5,N:6,NE:7,MIRROR_VERTICAL:8,MAIN_DIAGONAL:10,MIRROR_HORIZONTAL:12,REVERSE_DIAGONAL:14,uX:n=>Nt[n],uY:n=>$t[n],vX:n=>Vt[n],vY:n=>Wt[n],inv:n=>n&8?n&15:-n&7,add:(n,t)=>ur[n][t],sub:(n,t)=>ur[n][K.inv(t)],rotate180:n=>n^4,isVertical:n=>(n&3)===2,byDirection:(n,t)=>Math.abs(n)*2<=Math.abs(t)?t>=0?K.S:K.N:Math.abs(t)*2<=Math.abs(n)?n>0?K.E:K.W:t>0?n>0?K.SE:K.SW:n>0?K.NE:K.NW,matrixAppendRotationInv:(n,t,e=0,r=0)=>{const i=os[K.inv(t)];i.tx=e,i.ty=r,n.append(i)}},qe=[new ot,new ot,new ot,new ot];class tt{constructor(t=0,e=0,r=0,i=0){this.type="rectangle",this.x=Number(t),this.y=Number(e),this.width=Number(r),this.height=Number(i)}get left(){return this.x}get right(){return this.x+this.width}get top(){return this.y}get bottom(){return this.y+this.height}isEmpty(){return this.left===this.right||this.top===this.bottom}static get EMPTY(){return new tt(0,0,0,0)}clone(){return new tt(this.x,this.y,this.width,this.height)}copyFromBounds(t){return this.x=t.minX,this.y=t.minY,this.width=t.maxX-t.minX,this.height=t.maxY-t.minY,this}copyFrom(t){return this.x=t.x,this.y=t.y,this.width=t.width,this.height=t.height,this}copyTo(t){return t.copyFrom(this),t}contains(t,e){return this.width<=0||this.height<=0?!1:t>=this.x&&t<this.x+this.width&&e>=this.y&&e<this.y+this.height}strokeContains(t,e,r){const{width:i,height:s}=this;if(i<=0||s<=0)return!1;const o=this.x,a=this.y,l=o-r/2,u=o+i+r/2,c=a-r/2,h=a+s+r/2,f=o+r/2,d=o+i-r/2,p=a+r/2,g=a+s-r/2;return t>=l&&t<=u&&e>=c&&e<=h&&!(t>f&&t<d&&e>p&&e<g)}intersects(t,e){if(!e){const F=this.x<t.x?t.x:this.x;if((this.right>t.right?t.right:this.right)<=F)return!1;const S=this.y<t.y?t.y:this.y;return(this.bottom>t.bottom?t.bottom:this.bottom)>S}const r=this.left,i=this.right,s=this.top,o=this.bottom;if(i<=r||o<=s)return!1;const a=qe[0].set(t.left,t.top),l=qe[1].set(t.left,t.bottom),u=qe[2].set(t.right,t.top),c=qe[3].set(t.right,t.bottom);if(u.x<=a.x||l.y<=a.y)return!1;const h=Math.sign(e.a*e.d-e.b*e.c);if(h===0||(e.apply(a,a),e.apply(l,l),e.apply(u,u),e.apply(c,c),Math.max(a.x,l.x,u.x,c.x)<=r||Math.min(a.x,l.x,u.x,c.x)>=i||Math.max(a.y,l.y,u.y,c.y)<=s||Math.min(a.y,l.y,u.y,c.y)>=o))return!1;const f=h*(l.y-a.y),d=h*(a.x-l.x),p=f*r+d*s,g=f*i+d*s,m=f*r+d*o,v=f*i+d*o;if(Math.max(p,g,m,v)<=f*a.x+d*a.y||Math.min(p,g,m,v)>=f*c.x+d*c.y)return!1;const x=h*(a.y-u.y),y=h*(u.x-a.x),_=x*r+y*s,A=x*i+y*s,R=x*r+y*o,T=x*i+y*o;return!(Math.max(_,A,R,T)<=x*a.x+y*a.y||Math.min(_,A,R,T)>=x*c.x+y*c.y)}pad(t=0,e=t){return this.x-=t,this.y-=e,this.width+=t*2,this.height+=e*2,this}fit(t){const e=Math.max(this.x,t.x),r=Math.min(this.x+this.width,t.x+t.width),i=Math.max(this.y,t.y),s=Math.min(this.y+this.height,t.y+t.height);return this.x=e,this.width=Math.max(r-e,0),this.y=i,this.height=Math.max(s-i,0),this}ceil(t=1,e=.001){const r=Math.ceil((this.x+this.width-e)*t)/t,i=Math.ceil((this.y+this.height-e)*t)/t;return this.x=Math.floor((this.x+e)*t)/t,this.y=Math.floor((this.y+e)*t)/t,this.width=r-this.x,this.height=i-this.y,this}enlarge(t){const e=Math.min(this.x,t.x),r=Math.max(this.x+this.width,t.x+t.width),i=Math.min(this.y,t.y),s=Math.max(this.y+this.height,t.y+t.height);return this.x=e,this.width=r-e,this.y=i,this.height=s-i,this}getBounds(t){return t=t||new tt,t.copyFrom(this),t}toString(){return`[pixi.js/math:Rectangle x=${this.x} y=${this.y} width=${this.width} height=${this.height}]`}}const On={default:-1};function et(n="default"){return On[n]===void 0&&(On[n]=-1),++On[n]}const li={},Y="8.0.0";function I(n,t,e=3){if(li[t])return;let r=new Error().stack;typeof r>"u"?console.warn("PixiJS Deprecation Warning: ",`${t}
Deprecated since v${n}`):(r=r.split(`
`).splice(e).join(`
`),console.groupCollapsed?(console.groupCollapsed("%cPixiJS Deprecation Warning: %c%s","color:#614108;background:#fffbe6","font-weight:normal;color:#614108;background:#fffbe6",`${t}
Deprecated since v${n}`),console.warn(r),console.groupEnd()):(console.warn("PixiJS Deprecation Warning: ",`${t}
Deprecated since v${n}`),console.warn(r))),li[t]=!0}const as=()=>{};function xn(n){return n+=n===0?1:0,--n,n|=n>>>1,n|=n>>>2,n|=n>>>4,n|=n>>>8,n|=n>>>16,n+1}function ui(n){return!(n&n-1)&&!!n}function Ea(n){const t={};for(const e in n)n[e]!==void 0&&(t[e]=n[e]);return t}const ci=Object.create(null);function Ua(n){const t=ci[n];return t===void 0&&(ci[n]=et("resource")),t}const ls=class us extends St{constructor(t={}){super(),this._resourceType="textureSampler",this._touched=0,this._maxAnisotropy=1,this.destroyed=!1,t={...us.defaultOptions,...t},this.addressMode=t.addressMode,this.addressModeU=t.addressModeU??this.addressModeU,this.addressModeV=t.addressModeV??this.addressModeV,this.addressModeW=t.addressModeW??this.addressModeW,this.scaleMode=t.scaleMode,this.magFilter=t.magFilter??this.magFilter,this.minFilter=t.minFilter??this.minFilter,this.mipmapFilter=t.mipmapFilter??this.mipmapFilter,this.lodMinClamp=t.lodMinClamp,this.lodMaxClamp=t.lodMaxClamp,this.compare=t.compare,this.maxAnisotropy=t.maxAnisotropy??1}set addressMode(t){this.addressModeU=t,this.addressModeV=t,this.addressModeW=t}get addressMode(){return this.addressModeU}set wrapMode(t){I(Y,"TextureStyle.wrapMode is now TextureStyle.addressMode"),this.addressMode=t}get wrapMode(){return this.addressMode}set scaleMode(t){this.magFilter=t,this.minFilter=t,this.mipmapFilter=t}get scaleMode(){return this.magFilter}set maxAnisotropy(t){this._maxAnisotropy=Math.min(t,16),this._maxAnisotropy>1&&(this.scaleMode="linear")}get maxAnisotropy(){return this._maxAnisotropy}get _resourceId(){return this._sharedResourceId||this._generateResourceId()}update(){this.emit("change",this),this._sharedResourceId=null}_generateResourceId(){const t=`${this.addressModeU}-${this.addressModeV}-${this.addressModeW}-${this.magFilter}-${this.minFilter}-${this.mipmapFilter}-${this.lodMinClamp}-${this.lodMaxClamp}-${this.compare}-${this._maxAnisotropy}`;return this._sharedResourceId=Ua(t),this._resourceId}destroy(){this.destroyed=!0,this.emit("destroy",this),this.emit("change",this),this.removeAllListeners()}};ls.defaultOptions={addressMode:"clamp-to-edge",scaleMode:"linear"};let ka=ls;const cs=class hs extends St{constructor(t={}){super(),this.options=t,this.uid=et("textureSource"),this._resourceType="textureSource",this._resourceId=et("resource"),this.uploadMethodId="unknown",this._resolution=1,this.pixelWidth=1,this.pixelHeight=1,this.width=1,this.height=1,this.sampleCount=1,this.mipLevelCount=1,this.autoGenerateMipmaps=!1,this.format="rgba8unorm",this.dimension="2d",this.antialias=!1,this._touched=0,this._batchTick=-1,this._textureBindLocation=-1,t={...hs.defaultOptions,...t},this.label=t.label??"",this.resource=t.resource,this.autoGarbageCollect=t.autoGarbageCollect,this._resolution=t.resolution,t.width?this.pixelWidth=t.width*this._resolution:this.pixelWidth=this.resource?this.resourceWidth??1:1,t.height?this.pixelHeight=t.height*this._resolution:this.pixelHeight=this.resource?this.resourceHeight??1:1,this.width=this.pixelWidth/this._resolution,this.height=this.pixelHeight/this._resolution,this.format=t.format,this.dimension=t.dimensions,this.mipLevelCount=t.mipLevelCount,this.autoGenerateMipmaps=t.autoGenerateMipmaps,this.sampleCount=t.sampleCount,this.antialias=t.antialias,this.alphaMode=t.alphaMode,this.style=new ka(Ea(t)),this.destroyed=!1,this._refreshPOT()}get source(){return this}get style(){return this._style}set style(t){var e,r;this.style!==t&&((e=this._style)==null||e.off("change",this._onStyleChange,this),this._style=t,(r=this._style)==null||r.on("change",this._onStyleChange,this),this._onStyleChange())}get addressMode(){return this._style.addressMode}set addressMode(t){this._style.addressMode=t}get repeatMode(){return this._style.addressMode}set repeatMode(t){this._style.addressMode=t}get magFilter(){return this._style.magFilter}set magFilter(t){this._style.magFilter=t}get minFilter(){return this._style.minFilter}set minFilter(t){this._style.minFilter=t}get mipmapFilter(){return this._style.mipmapFilter}set mipmapFilter(t){this._style.mipmapFilter=t}get lodMinClamp(){return this._style.lodMinClamp}set lodMinClamp(t){this._style.lodMinClamp=t}get lodMaxClamp(){return this._style.lodMaxClamp}set lodMaxClamp(t){this._style.lodMaxClamp=t}_onStyleChange(){this.emit("styleChange",this)}update(){if(this.resource){const t=this._resolution;if(this.resize(this.resourceWidth/t,this.resourceHeight/t))return}this.emit("update",this)}destroy(){this.destroyed=!0,this.emit("destroy",this),this.emit("change",this),this._style&&(this._style.destroy(),this._style=null),this.uploadMethodId=null,this.resource=null,this.removeAllListeners()}unload(){this._resourceId=et("resource"),this.emit("change",this),this.emit("unload",this)}get resourceWidth(){const{resource:t}=this;return t.naturalWidth||t.videoWidth||t.displayWidth||t.width}get resourceHeight(){const{resource:t}=this;return t.naturalHeight||t.videoHeight||t.displayHeight||t.height}get resolution(){return this._resolution}set resolution(t){this._resolution!==t&&(this._resolution=t,this.width=this.pixelWidth/t,this.height=this.pixelHeight/t)}resize(t,e,r){r=r||this._resolution,t=t||this.width,e=e||this.height;const i=Math.round(t*r),s=Math.round(e*r);return this.width=i/r,this.height=s/r,this._resolution=r,this.pixelWidth===i&&this.pixelHeight===s?!1:(this._refreshPOT(),this.pixelWidth=i,this.pixelHeight=s,this.emit("resize",this),this._resourceId=et("resource"),this.emit("change",this),!0)}updateMipmaps(){this.autoGenerateMipmaps&&this.mipLevelCount>1&&this.emit("updateMipmaps",this)}set wrapMode(t){this._style.wrapMode=t}get wrapMode(){return this._style.wrapMode}set scaleMode(t){this._style.scaleMode=t}get scaleMode(){return this._style.scaleMode}_refreshPOT(){this.isPowerOfTwo=ui(this.pixelWidth)&&ui(this.pixelHeight)}static test(t){throw new Error("Unimplemented")}};cs.defaultOptions={resolution:1,format:"bgra8unorm",alphaMode:"premultiply-alpha-on-upload",dimensions:"2d",mipLevelCount:1,autoGenerateMipmaps:!1,sampleCount:1,antialias:!1,autoGarbageCollect:!1};let Ct=cs;class $r extends Ct{constructor(t){const e=t.resource||new Float32Array(t.width*t.height*4);let r=t.format;r||(e instanceof Float32Array?r="rgba32float":e instanceof Int32Array||e instanceof Uint32Array?r="rgba32uint":e instanceof Int16Array||e instanceof Uint16Array?r="rgba16uint":(e instanceof Int8Array,r="bgra8unorm")),super({...t,resource:e,format:r}),this.uploadMethodId="buffer"}static test(t){return t instanceof Int8Array||t instanceof Uint8Array||t instanceof Uint8ClampedArray||t instanceof Int16Array||t instanceof Uint16Array||t instanceof Int32Array||t instanceof Uint32Array||t instanceof Float32Array}}$r.extension=O.TextureSource;const hi=new X;class Ba{constructor(t,e){this.mapCoord=new X,this.uClampFrame=new Float32Array(4),this.uClampOffset=new Float32Array(2),this._textureID=-1,this._updateID=0,this.clampOffset=0,typeof e>"u"?this.clampMargin=t.width<10?0:.5:this.clampMargin=e,this.isSimple=!1,this.texture=t}get texture(){return this._texture}set texture(t){var e;this.texture!==t&&((e=this._texture)==null||e.removeListener("update",this.update,this),this._texture=t,this._texture.addListener("update",this.update,this),this.update())}multiplyUvs(t,e){e===void 0&&(e=t);const r=this.mapCoord;for(let i=0;i<t.length;i+=2){const s=t[i],o=t[i+1];e[i]=s*r.a+o*r.c+r.tx,e[i+1]=s*r.b+o*r.d+r.ty}return e}update(){const t=this._texture;this._updateID++;const e=t.uvs;this.mapCoord.set(e.x1-e.x0,e.y1-e.y0,e.x3-e.x0,e.y3-e.y0,e.x0,e.y0);const r=t.orig,i=t.trim;i&&(hi.set(r.width/i.width,0,0,r.height/i.height,-i.x/i.width,-i.y/i.height),this.mapCoord.append(hi));const s=t.source,o=this.uClampFrame,a=this.clampMargin/s._resolution,l=this.clampOffset;return o[0]=(t.frame.x+a+l)/s.width,o[1]=(t.frame.y+a+l)/s.height,o[2]=(t.frame.x+t.frame.width-a+l)/s.width,o[3]=(t.frame.y+t.frame.height-a+l)/s.height,this.uClampOffset[0]=l/s.pixelWidth,this.uClampOffset[1]=l/s.pixelHeight,this.isSimple=t.frame.width===s.width&&t.frame.height===s.height&&t.rotate===0,!0}}class k extends St{constructor({source:t,label:e,frame:r,orig:i,trim:s,defaultAnchor:o,defaultBorders:a,rotate:l,dynamic:u}={}){if(super(),this.uid=et("texture"),this.uvs={x0:0,y0:0,x1:0,y1:0,x2:0,y2:0,x3:0,y3:0},this.frame=new tt,this.noFrame=!1,this.dynamic=!1,this.isTexture=!0,this.label=e,this.source=(t==null?void 0:t.source)??new Ct,this.noFrame=!r,r)this.frame.copyFrom(r);else{const{width:c,height:h}=this._source;this.frame.width=c,this.frame.height=h}this.orig=i||this.frame,this.trim=s,this.rotate=l??0,this.defaultAnchor=o,this.defaultBorders=a,this.destroyed=!1,this.dynamic=u||!1,this.updateUvs()}set source(t){this._source&&this._source.off("resize",this.update,this),this._source=t,t.on("resize",this.update,this),this.emit("update",this)}get source(){return this._source}get textureMatrix(){return this._textureMatrix||(this._textureMatrix=new Ba(this)),this._textureMatrix}get width(){return this.orig.width}get height(){return this.orig.height}updateUvs(){const{uvs:t,frame:e}=this,{width:r,height:i}=this._source,s=e.x/r,o=e.y/i,a=e.width/r,l=e.height/i;let u=this.rotate;if(u){const c=a/2,h=l/2,f=s+c,d=o+h;u=K.add(u,K.NW),t.x0=f+c*K.uX(u),t.y0=d+h*K.uY(u),u=K.add(u,2),t.x1=f+c*K.uX(u),t.y1=d+h*K.uY(u),u=K.add(u,2),t.x2=f+c*K.uX(u),t.y2=d+h*K.uY(u),u=K.add(u,2),t.x3=f+c*K.uX(u),t.y3=d+h*K.uY(u)}else t.x0=s,t.y0=o,t.x1=s+a,t.y1=o,t.x2=s+a,t.y2=o+l,t.x3=s,t.y3=o+l}destroy(t=!1){this._source&&t&&(this._source.destroy(),this._source=null),this._textureMatrix=null,this.destroyed=!0,this.emit("destroy",this),this.removeAllListeners()}update(){this.noFrame&&(this.frame.width=this._source.width,this.frame.height=this._source.height),this.updateUvs(),this.emit("update",this)}get baseTexture(){return I(Y,"Texture.baseTexture is now Texture.source"),this._source}}k.EMPTY=new k({label:"EMPTY",source:new Ct({label:"EMPTY"})});k.EMPTY.destroy=as;k.WHITE=new k({source:new $r({resource:new Uint8Array([255,255,255,255]),width:1,height:1,alphaMode:"premultiply-alpha-on-upload",label:"WHITE"}),label:"WHITE"});k.WHITE.destroy=as;function La(n,t,e,r){const{width:i,height:s}=e.orig,o=e.trim;if(o){const a=o.width,l=o.height;n.minX=o.x-t._x*i-r,n.maxX=n.minX+a,n.minY=o.y-t._y*s-r,n.maxY=n.minY+l}else n.minX=-t._x*i-r,n.maxX=n.minX+i,n.minY=-t._y*s-r,n.maxY=n.minY+s}var Da={grad:.9,turn:360,rad:360/(2*Math.PI)},Mt=function(n){return typeof n=="string"?n.length>0:typeof n=="number"},st=function(n,t,e){return t===void 0&&(t=0),e===void 0&&(e=Math.pow(10,t)),Math.round(e*n)/e+0},pt=function(n,t,e){return t===void 0&&(t=0),e===void 0&&(e=1),n>e?e:n>t?n:t},fs=function(n){return(n=isFinite(n)?n%360:0)>0?n:n+360},fi=function(n){return{r:pt(n.r,0,255),g:pt(n.g,0,255),b:pt(n.b,0,255),a:pt(n.a)}},Rn=function(n){return{r:st(n.r),g:st(n.g),b:st(n.b),a:st(n.a,3)}},Ga=/^#([0-9a-f]{3,8})$/i,Ke=function(n){var t=n.toString(16);return t.length<2?"0"+t:t},ds=function(n){var t=n.r,e=n.g,r=n.b,i=n.a,s=Math.max(t,e,r),o=s-Math.min(t,e,r),a=o?s===t?(e-r)/o:s===e?2+(r-t)/o:4+(t-e)/o:0;return{h:60*(a<0?a+6:a),s:s?o/s*100:0,v:s/255*100,a:i}},ps=function(n){var t=n.h,e=n.s,r=n.v,i=n.a;t=t/360*6,e/=100,r/=100;var s=Math.floor(t),o=r*(1-e),a=r*(1-(t-s)*e),l=r*(1-(1-t+s)*e),u=s%6;return{r:255*[r,a,o,o,l,r][u],g:255*[l,r,r,a,o,o][u],b:255*[o,o,l,r,r,a][u],a:i}},di=function(n){return{h:fs(n.h),s:pt(n.s,0,100),l:pt(n.l,0,100),a:pt(n.a)}},pi=function(n){return{h:st(n.h),s:st(n.s),l:st(n.l),a:st(n.a,3)}},mi=function(n){return ps((e=(t=n).s,{h:t.h,s:(e*=((r=t.l)<50?r:100-r)/100)>0?2*e/(r+e)*100:0,v:r+e,a:t.a}));var t,e,r},Oe=function(n){return{h:(t=ds(n)).h,s:(i=(200-(e=t.s))*(r=t.v)/100)>0&&i<200?e*r/100/(i<=100?i:200-i)*100:0,l:i/2,a:t.a};var t,e,r,i},Na=/^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s*,\s*([+-]?\d*\.?\d+)%\s*,\s*([+-]?\d*\.?\d+)%\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,$a=/^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s+([+-]?\d*\.?\d+)%\s+([+-]?\d*\.?\d+)%\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,Va=/^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,Wa=/^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,cr={string:[[function(n){var t=Ga.exec(n);return t?(n=t[1]).length<=4?{r:parseInt(n[0]+n[0],16),g:parseInt(n[1]+n[1],16),b:parseInt(n[2]+n[2],16),a:n.length===4?st(parseInt(n[3]+n[3],16)/255,2):1}:n.length===6||n.length===8?{r:parseInt(n.substr(0,2),16),g:parseInt(n.substr(2,2),16),b:parseInt(n.substr(4,2),16),a:n.length===8?st(parseInt(n.substr(6,2),16)/255,2):1}:null:null},"hex"],[function(n){var t=Va.exec(n)||Wa.exec(n);return t?t[2]!==t[4]||t[4]!==t[6]?null:fi({r:Number(t[1])/(t[2]?100/255:1),g:Number(t[3])/(t[4]?100/255:1),b:Number(t[5])/(t[6]?100/255:1),a:t[7]===void 0?1:Number(t[7])/(t[8]?100:1)}):null},"rgb"],[function(n){var t=Na.exec(n)||$a.exec(n);if(!t)return null;var e,r,i=di({h:(e=t[1],r=t[2],r===void 0&&(r="deg"),Number(e)*(Da[r]||1)),s:Number(t[3]),l:Number(t[4]),a:t[5]===void 0?1:Number(t[5])/(t[6]?100:1)});return mi(i)},"hsl"]],object:[[function(n){var t=n.r,e=n.g,r=n.b,i=n.a,s=i===void 0?1:i;return Mt(t)&&Mt(e)&&Mt(r)?fi({r:Number(t),g:Number(e),b:Number(r),a:Number(s)}):null},"rgb"],[function(n){var t=n.h,e=n.s,r=n.l,i=n.a,s=i===void 0?1:i;if(!Mt(t)||!Mt(e)||!Mt(r))return null;var o=di({h:Number(t),s:Number(e),l:Number(r),a:Number(s)});return mi(o)},"hsl"],[function(n){var t=n.h,e=n.s,r=n.v,i=n.a,s=i===void 0?1:i;if(!Mt(t)||!Mt(e)||!Mt(r))return null;var o=function(a){return{h:fs(a.h),s:pt(a.s,0,100),v:pt(a.v,0,100),a:pt(a.a)}}({h:Number(t),s:Number(e),v:Number(r),a:Number(s)});return ps(o)},"hsv"]]},gi=function(n,t){for(var e=0;e<t.length;e++){var r=t[e][0](n);if(r)return[r,t[e][1]]}return[null,void 0]},Xa=function(n){return typeof n=="string"?gi(n.trim(),cr.string):typeof n=="object"&&n!==null?gi(n,cr.object):[null,void 0]},En=function(n,t){var e=Oe(n);return{h:e.h,s:pt(e.s+100*t,0,100),l:e.l,a:e.a}},Un=function(n){return(299*n.r+587*n.g+114*n.b)/1e3/255},xi=function(n,t){var e=Oe(n);return{h:e.h,s:e.s,l:pt(e.l+100*t,0,100),a:e.a}},hr=function(){function n(t){this.parsed=Xa(t)[0],this.rgba=this.parsed||{r:0,g:0,b:0,a:1}}return n.prototype.isValid=function(){return this.parsed!==null},n.prototype.brightness=function(){return st(Un(this.rgba),2)},n.prototype.isDark=function(){return Un(this.rgba)<.5},n.prototype.isLight=function(){return Un(this.rgba)>=.5},n.prototype.toHex=function(){return t=Rn(this.rgba),e=t.r,r=t.g,i=t.b,o=(s=t.a)<1?Ke(st(255*s)):"","#"+Ke(e)+Ke(r)+Ke(i)+o;var t,e,r,i,s,o},n.prototype.toRgb=function(){return Rn(this.rgba)},n.prototype.toRgbString=function(){return t=Rn(this.rgba),e=t.r,r=t.g,i=t.b,(s=t.a)<1?"rgba("+e+", "+r+", "+i+", "+s+")":"rgb("+e+", "+r+", "+i+")";var t,e,r,i,s},n.prototype.toHsl=function(){return pi(Oe(this.rgba))},n.prototype.toHslString=function(){return t=pi(Oe(this.rgba)),e=t.h,r=t.s,i=t.l,(s=t.a)<1?"hsla("+e+", "+r+"%, "+i+"%, "+s+")":"hsl("+e+", "+r+"%, "+i+"%)";var t,e,r,i,s},n.prototype.toHsv=function(){return t=ds(this.rgba),{h:st(t.h),s:st(t.s),v:st(t.v),a:st(t.a,3)};var t},n.prototype.invert=function(){return At({r:255-(t=this.rgba).r,g:255-t.g,b:255-t.b,a:t.a});var t},n.prototype.saturate=function(t){return t===void 0&&(t=.1),At(En(this.rgba,t))},n.prototype.desaturate=function(t){return t===void 0&&(t=.1),At(En(this.rgba,-t))},n.prototype.grayscale=function(){return At(En(this.rgba,-1))},n.prototype.lighten=function(t){return t===void 0&&(t=.1),At(xi(this.rgba,t))},n.prototype.darken=function(t){return t===void 0&&(t=.1),At(xi(this.rgba,-t))},n.prototype.rotate=function(t){return t===void 0&&(t=15),this.hue(this.hue()+t)},n.prototype.alpha=function(t){return typeof t=="number"?At({r:(e=this.rgba).r,g:e.g,b:e.b,a:t}):st(this.rgba.a,3);var e},n.prototype.hue=function(t){var e=Oe(this.rgba);return typeof t=="number"?At({h:t,s:e.s,l:e.l,a:e.a}):st(e.h)},n.prototype.isEqual=function(t){return this.toHex()===At(t).toHex()},n}(),At=function(n){return n instanceof hr?n:new hr(n)},vi=[],Ya=function(n){n.forEach(function(t){vi.indexOf(t)<0&&(t(hr,cr),vi.push(t))})};function Ha(n,t){var e={white:"#ffffff",bisque:"#ffe4c4",blue:"#0000ff",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",antiquewhite:"#faebd7",aqua:"#00ffff",azure:"#f0ffff",whitesmoke:"#f5f5f5",papayawhip:"#ffefd5",plum:"#dda0dd",blanchedalmond:"#ffebcd",black:"#000000",gold:"#ffd700",goldenrod:"#daa520",gainsboro:"#dcdcdc",cornsilk:"#fff8dc",cornflowerblue:"#6495ed",burlywood:"#deb887",aquamarine:"#7fffd4",beige:"#f5f5dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkkhaki:"#bdb76b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",peachpuff:"#ffdab9",darkmagenta:"#8b008b",darkred:"#8b0000",darkorchid:"#9932cc",darkorange:"#ff8c00",darkslateblue:"#483d8b",gray:"#808080",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",deeppink:"#ff1493",deepskyblue:"#00bfff",wheat:"#f5deb3",firebrick:"#b22222",floralwhite:"#fffaf0",ghostwhite:"#f8f8ff",darkviolet:"#9400d3",magenta:"#ff00ff",green:"#008000",dodgerblue:"#1e90ff",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",blueviolet:"#8a2be2",forestgreen:"#228b22",lawngreen:"#7cfc00",indianred:"#cd5c5c",indigo:"#4b0082",fuchsia:"#ff00ff",brown:"#a52a2a",maroon:"#800000",mediumblue:"#0000cd",lightcoral:"#f08080",darkturquoise:"#00ced1",lightcyan:"#e0ffff",ivory:"#fffff0",lightyellow:"#ffffe0",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",linen:"#faf0e6",mediumaquamarine:"#66cdaa",lemonchiffon:"#fffacd",lime:"#00ff00",khaki:"#f0e68c",mediumseagreen:"#3cb371",limegreen:"#32cd32",mediumspringgreen:"#00fa9a",lightskyblue:"#87cefa",lightblue:"#add8e6",midnightblue:"#191970",lightpink:"#ffb6c1",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",mintcream:"#f5fffa",lightslategray:"#778899",lightslategrey:"#778899",navajowhite:"#ffdead",navy:"#000080",mediumvioletred:"#c71585",powderblue:"#b0e0e6",palegoldenrod:"#eee8aa",oldlace:"#fdf5e6",paleturquoise:"#afeeee",mediumturquoise:"#48d1cc",mediumorchid:"#ba55d3",rebeccapurple:"#663399",lightsteelblue:"#b0c4de",mediumslateblue:"#7b68ee",thistle:"#d8bfd8",tan:"#d2b48c",orchid:"#da70d6",mediumpurple:"#9370db",purple:"#800080",pink:"#ffc0cb",skyblue:"#87ceeb",springgreen:"#00ff7f",palegreen:"#98fb98",red:"#ff0000",yellow:"#ffff00",slateblue:"#6a5acd",lavenderblush:"#fff0f5",peru:"#cd853f",palevioletred:"#db7093",violet:"#ee82ee",teal:"#008080",slategray:"#708090",slategrey:"#708090",aliceblue:"#f0f8ff",darkseagreen:"#8fbc8f",darkolivegreen:"#556b2f",greenyellow:"#adff2f",seagreen:"#2e8b57",seashell:"#fff5ee",tomato:"#ff6347",silver:"#c0c0c0",sienna:"#a0522d",lavender:"#e6e6fa",lightgreen:"#90ee90",orange:"#ffa500",orangered:"#ff4500",steelblue:"#4682b4",royalblue:"#4169e1",turquoise:"#40e0d0",yellowgreen:"#9acd32",salmon:"#fa8072",saddlebrown:"#8b4513",sandybrown:"#f4a460",rosybrown:"#bc8f8f",darksalmon:"#e9967a",lightgoldenrodyellow:"#fafad2",snow:"#fffafa",lightgrey:"#d3d3d3",lightgray:"#d3d3d3",dimgray:"#696969",dimgrey:"#696969",olivedrab:"#6b8e23",olive:"#808000"},r={};for(var i in e)r[e[i]]=i;var s={};n.prototype.toName=function(o){if(!(this.rgba.a||this.rgba.r||this.rgba.g||this.rgba.b))return"transparent";var a,l,u=r[this.toHex()];if(u)return u;if(o!=null&&o.closest){var c=this.toRgb(),h=1/0,f="black";if(!s.length)for(var d in e)s[d]=new n(e[d]).toRgb();for(var p in e){var g=(a=c,l=s[p],Math.pow(a.r-l.r,2)+Math.pow(a.g-l.g,2)+Math.pow(a.b-l.b,2));g<h&&(h=g,f=p)}return f}},t.string.push([function(o){var a=o.toLowerCase(),l=a==="transparent"?"#0000":e[a];return l?new n(l).toRgb():null},"name"])}Ya([Ha]);const pe=class ze{constructor(t=16777215){this._value=null,this._components=new Float32Array(4),this._components.fill(1),this._int=16777215,this.value=t}get red(){return this._components[0]}get green(){return this._components[1]}get blue(){return this._components[2]}get alpha(){return this._components[3]}setValue(t){return this.value=t,this}set value(t){if(t instanceof ze)this._value=this._cloneSource(t._value),this._int=t._int,this._components.set(t._components);else{if(t===null)throw new Error("Cannot set Color#value to null");(this._value===null||!this._isSourceEqual(this._value,t))&&(this._normalize(t),this._value=this._cloneSource(t))}}get value(){return this._value}_cloneSource(t){return typeof t=="string"||typeof t=="number"||t instanceof Number||t===null?t:Array.isArray(t)||ArrayBuffer.isView(t)?t.slice(0):typeof t=="object"&&t!==null?{...t}:t}_isSourceEqual(t,e){const r=typeof t;if(r!==typeof e)return!1;if(r==="number"||r==="string"||t instanceof Number)return t===e;if(Array.isArray(t)&&Array.isArray(e)||ArrayBuffer.isView(t)&&ArrayBuffer.isView(e))return t.length!==e.length?!1:t.every((s,o)=>s===e[o]);if(t!==null&&e!==null){const s=Object.keys(t),o=Object.keys(e);return s.length!==o.length?!1:s.every(a=>t[a]===e[a])}return t===e}toRgba(){const[t,e,r,i]=this._components;return{r:t,g:e,b:r,a:i}}toRgb(){const[t,e,r]=this._components;return{r:t,g:e,b:r}}toRgbaString(){const[t,e,r]=this.toUint8RgbArray();return`rgba(${t},${e},${r},${this.alpha})`}toUint8RgbArray(t){const[e,r,i]=this._components;return this._arrayRgb||(this._arrayRgb=[]),t=t||this._arrayRgb,t[0]=Math.round(e*255),t[1]=Math.round(r*255),t[2]=Math.round(i*255),t}toArray(t){this._arrayRgba||(this._arrayRgba=[]),t=t||this._arrayRgba;const[e,r,i,s]=this._components;return t[0]=e,t[1]=r,t[2]=i,t[3]=s,t}toRgbArray(t){this._arrayRgb||(this._arrayRgb=[]),t=t||this._arrayRgb;const[e,r,i]=this._components;return t[0]=e,t[1]=r,t[2]=i,t}toNumber(){return this._int}toBgrNumber(){const[t,e,r]=this.toUint8RgbArray();return(r<<16)+(e<<8)+t}toLittleEndianNumber(){const t=this._int;return(t>>16)+(t&65280)+((t&255)<<16)}multiply(t){const[e,r,i,s]=ze._temp.setValue(t)._components;return this._components[0]*=e,this._components[1]*=r,this._components[2]*=i,this._components[3]*=s,this._refreshInt(),this._value=null,this}premultiply(t,e=!0){return e&&(this._components[0]*=t,this._components[1]*=t,this._components[2]*=t),this._components[3]=t,this._refreshInt(),this._value=null,this}toPremultiplied(t,e=!0){if(t===1)return(255<<24)+this._int;if(t===0)return e?0:this._int;let r=this._int>>16&255,i=this._int>>8&255,s=this._int&255;return e&&(r=r*t+.5|0,i=i*t+.5|0,s=s*t+.5|0),(t*255<<24)+(r<<16)+(i<<8)+s}toHex(){const t=this._int.toString(16);return`#${"000000".substring(0,6-t.length)+t}`}toHexa(){const e=Math.round(this._components[3]*255).toString(16);return this.toHex()+"00".substring(0,2-e.length)+e}setAlpha(t){return this._components[3]=this._clamp(t),this}_normalize(t){let e,r,i,s;if((typeof t=="number"||t instanceof Number)&&t>=0&&t<=16777215){const o=t;e=(o>>16&255)/255,r=(o>>8&255)/255,i=(o&255)/255,s=1}else if((Array.isArray(t)||t instanceof Float32Array)&&t.length>=3&&t.length<=4)t=this._clamp(t),[e,r,i,s=1]=t;else if((t instanceof Uint8Array||t instanceof Uint8ClampedArray)&&t.length>=3&&t.length<=4)t=this._clamp(t,0,255),[e,r,i,s=255]=t,e/=255,r/=255,i/=255,s/=255;else if(typeof t=="string"||typeof t=="object"){if(typeof t=="string"){const a=ze.HEX_PATTERN.exec(t);a&&(t=`#${a[2]}`)}const o=At(t);o.isValid()&&({r:e,g:r,b:i,a:s}=o.rgba,e/=255,r/=255,i/=255)}if(e!==void 0)this._components[0]=e,this._components[1]=r,this._components[2]=i,this._components[3]=s,this._refreshInt();else throw new Error(`Unable to convert color ${t}`)}_refreshInt(){this._clamp(this._components);const[t,e,r]=this._components;this._int=(t*255<<16)+(e*255<<8)+(r*255|0)}_clamp(t,e=0,r=1){return typeof t=="number"?Math.min(Math.max(t,e),r):(t.forEach((i,s)=>{t[s]=Math.min(Math.max(i,e),r)}),t)}static isColorLike(t){return typeof t=="number"||typeof t=="string"||t instanceof Number||t instanceof ze||Array.isArray(t)||t instanceof Uint8Array||t instanceof Uint8ClampedArray||t instanceof Float32Array||t.r!==void 0&&t.g!==void 0&&t.b!==void 0||t.r!==void 0&&t.g!==void 0&&t.b!==void 0&&t.a!==void 0||t.h!==void 0&&t.s!==void 0&&t.l!==void 0||t.h!==void 0&&t.s!==void 0&&t.l!==void 0&&t.a!==void 0||t.h!==void 0&&t.s!==void 0&&t.v!==void 0||t.h!==void 0&&t.s!==void 0&&t.v!==void 0&&t.a!==void 0}};pe.shared=new pe;pe._temp=new pe;pe.HEX_PATTERN=/^(#|0x)?(([a-f0-9]{3}){1,2}([a-f0-9]{2})?)$/i;let G=pe;const ja={cullArea:null,cullable:!1,cullableChildren:!0};class Vr{constructor(t,e){this._pool=[],this._count=0,this._index=0,this._classType=t,e&&this.prepopulate(e)}prepopulate(t){for(let e=0;e<t;e++)this._pool[this._index++]=new this._classType;this._count+=t}get(t){var r;let e;return this._index>0?e=this._pool[--this._index]:e=new this._classType,(r=e.init)==null||r.call(e,t),e}return(t){var e;(e=t.reset)==null||e.call(t),this._pool[this._index++]=t}get totalSize(){return this._count}get totalFree(){return this._index}get totalUsed(){return this._count-this._index}}class qa{constructor(){this._poolsByClass=new Map}prepopulate(t,e){this.getPool(t).prepopulate(e)}get(t,e){return this.getPool(t).get(e)}return(t){this.getPool(t.constructor).return(t)}getPool(t){return this._poolsByClass.has(t)||this._poolsByClass.set(t,new Vr(t)),this._poolsByClass.get(t)}stats(){const t={};return this._poolsByClass.forEach(e=>{const r=t[e._classType.name]?e._classType.name+e._classType.ID:e._classType.name;t[r]={free:e.totalFree,used:e.totalUsed,size:e.totalSize}}),t}}const Ot=new qa;function Ka(n,t,e){const r=n.length;let i;if(t>=r||e===0)return;e=t+e>r?r-t:e;const s=r-e;for(i=t;i<s;++i)n[i]=n[i+e];n.length=s}const Za={allowChildren:!0,removeChildren(n=0,t){const e=t??this.children.length,r=e-n,i=[];if(r>0&&r<=e){for(let o=e-1;o>=n;o--){const a=this.children[o];a&&(i.push(a),a.parent=null)}Ka(this.children,n,e);const s=this.renderGroup||this.parentRenderGroup;s&&s.removeChildren(i);for(let o=0;o<i.length;++o)this.emit("childRemoved",i[o],this,o),i[o].emit("removed",this);return i}else if(r===0&&this.children.length===0)return i;throw new RangeError("removeChildren: numeric values are outside the acceptable range.")},removeChildAt(n){const t=this.getChildAt(n);return this.removeChild(t)},getChildAt(n){if(n<0||n>=this.children.length)throw new Error(`getChildAt: Index (${n}) does not exist.`);return this.children[n]},setChildIndex(n,t){if(t<0||t>=this.children.length)throw new Error(`The index ${t} supplied is out of bounds ${this.children.length}`);this.getChildIndex(n),this.addChildAt(n,t)},getChildIndex(n){const t=this.children.indexOf(n);if(t===-1)throw new Error("The supplied Container must be a child of the caller");return t},addChildAt(n,t){this.allowChildren||I(Y,"addChildAt: Only Containers will be allowed to add children in v8.0.0");const{children:e}=this;if(t<0||t>e.length)throw new Error(`${n}addChildAt: The index ${t} supplied is out of bounds ${e.length}`);if(n.parent){const i=n.parent.children.indexOf(n);if(n.parent===this&&i===t)return n;i!==-1&&n.parent.children.splice(i,1)}t===e.length?e.push(n):e.splice(t,0,n),n.parent=this,n.didChange=!0,n.didViewUpdate=!1,n._updateFlags=15;const r=this.renderGroup||this.parentRenderGroup;return r&&r.addChild(n),this.sortableChildren&&(this.sortDirty=!0),this.emit("childAdded",n,this,t),n.emit("added",this),n},swapChildren(n,t){if(n===t)return;const e=this.getChildIndex(n),r=this.getChildIndex(t);this.children[e]=t,this.children[r]=n;const i=this.renderGroup||this.parentRenderGroup;i&&(i.structureDidChange=!0),this._didChangeId++},removeFromParent(){var n;(n=this.parent)==null||n.removeChild(this)},reparentChild(...n){return n.length===1?this.reparentChildAt(n[0],this.children.length):(n.forEach(t=>this.reparentChildAt(t,this.children.length)),n[0])},reparentChildAt(n,t){if(n.parent===this)return this.setChildIndex(n,t),n;const e=n.worldTransform.clone();n.removeFromParent(),this.addChildAt(n,t);const r=this.worldTransform.clone();return r.invert(),e.prepend(r),n.setFromMatrix(e),n}};class yi{constructor(){this.pipe="filter",this.priority=1}destroy(){for(let t=0;t<this.filters.length;t++)this.filters[t].destroy();this.filters=null,this.filterArea=null}}class Qa{constructor(){this._effectClasses=[],this._tests=[],this._initialized=!1}init(){this._initialized||(this._initialized=!0,this._effectClasses.forEach(t=>{this.add({test:t.test,maskClass:t})}))}add(t){this._tests.push(t)}getMaskEffect(t){this._initialized||this.init();for(let e=0;e<this._tests.length;e++){const r=this._tests[e];if(r.test(t))return Ot.get(r.maskClass,t)}return t}returnMaskEffect(t){Ot.return(t)}}const fr=new Qa;lt.handleByList(O.MaskEffect,fr._effectClasses);const Ja={_maskEffect:null,_filterEffect:null,effects:[],addEffect(n){if(this.effects.indexOf(n)!==-1)return;this.effects.push(n),this.effects.sort((r,i)=>r.priority-i.priority);const e=this.renderGroup||this.parentRenderGroup;e&&(e.structureDidChange=!0),this._updateIsSimple()},removeEffect(n){const t=this.effects.indexOf(n);t!==-1&&(this.effects.splice(t,1),this.parentRenderGroup&&(this.parentRenderGroup.structureDidChange=!0),this._updateIsSimple())},set mask(n){const t=this._maskEffect;(t==null?void 0:t.mask)!==n&&(t&&(this.removeEffect(t),fr.returnMaskEffect(t),this._maskEffect=null),n!=null&&(this._maskEffect=fr.getMaskEffect(n),this.addEffect(this._maskEffect)))},get mask(){var n;return(n=this._maskEffect)==null?void 0:n.mask},set filters(n){var s;!Array.isArray(n)&&n&&(n=[n]);const t=this._filterEffect||(this._filterEffect=new yi);n=n;const e=(n==null?void 0:n.length)>0,r=((s=t.filters)==null?void 0:s.length)>0,i=e!==r;n=Array.isArray(n)?n.slice(0):n,t.filters=Object.freeze(n),i&&(e?this.addEffect(t):(this.removeEffect(t),t.filters=n??null))},get filters(){var n;return(n=this._filterEffect)==null?void 0:n.filters},set filterArea(n){this._filterEffect||(this._filterEffect=new yi),this._filterEffect.filterArea=n},get filterArea(){var n;return(n=this._filterEffect)==null?void 0:n.filterArea}},tl={label:null,get name(){return I(Y,"Container.name property has been removed, use Container.label instead"),this.label},set name(n){I(Y,"Container.name property has been removed, use Container.label instead"),this.label=n},getChildByName(n,t=!1){return this.getChildByLabel(n,t)},getChildByLabel(n,t=!1){const e=this.children;for(let r=0;r<e.length;r++){const i=e[r];if(i.label===n||n instanceof RegExp&&n.test(i.label))return i}if(t)for(let r=0;r<e.length;r++){const s=e[r].getChildByLabel(n,!0);if(s)return s}return null},getChildrenByLabel(n,t=!1,e=[]){const r=this.children;for(let i=0;i<r.length;i++){const s=r[i];(s.label===n||n instanceof RegExp&&n.test(s.label))&&e.push(s)}if(t)for(let i=0;i<r.length;i++)r[i].getChildrenByLabel(n,!0,e);return e}},_i=new X;class Ft{constructor(t=1/0,e=1/0,r=-1/0,i=-1/0){this.minX=1/0,this.minY=1/0,this.maxX=-1/0,this.maxY=-1/0,this.matrix=_i,this.minX=t,this.minY=e,this.maxX=r,this.maxY=i}isEmpty(){return this.minX>this.maxX||this.minY>this.maxY}get rectangle(){this._rectangle||(this._rectangle=new tt);const t=this._rectangle;return this.minX>this.maxX||this.minY>this.maxY?(t.x=0,t.y=0,t.width=0,t.height=0):t.copyFromBounds(this),t}clear(){return this.minX=1/0,this.minY=1/0,this.maxX=-1/0,this.maxY=-1/0,this.matrix=_i,this}set(t,e,r,i){this.minX=t,this.minY=e,this.maxX=r,this.maxY=i}addFrame(t,e,r,i,s){s||(s=this.matrix);const o=s.a,a=s.b,l=s.c,u=s.d,c=s.tx,h=s.ty;let f=this.minX,d=this.minY,p=this.maxX,g=this.maxY,m=o*t+l*e+c,v=a*t+u*e+h;m<f&&(f=m),v<d&&(d=v),m>p&&(p=m),v>g&&(g=v),m=o*r+l*e+c,v=a*r+u*e+h,m<f&&(f=m),v<d&&(d=v),m>p&&(p=m),v>g&&(g=v),m=o*t+l*i+c,v=a*t+u*i+h,m<f&&(f=m),v<d&&(d=v),m>p&&(p=m),v>g&&(g=v),m=o*r+l*i+c,v=a*r+u*i+h,m<f&&(f=m),v<d&&(d=v),m>p&&(p=m),v>g&&(g=v),this.minX=f,this.minY=d,this.maxX=p,this.maxY=g}addRect(t,e){this.addFrame(t.x,t.y,t.x+t.width,t.y+t.height,e)}addBounds(t,e){this.addFrame(t.minX,t.minY,t.maxX,t.maxY,e)}addBoundsMask(t){this.minX=this.minX>t.minX?this.minX:t.minX,this.minY=this.minY>t.minY?this.minY:t.minY,this.maxX=this.maxX<t.maxX?this.maxX:t.maxX,this.maxY=this.maxY<t.maxY?this.maxY:t.maxY}applyMatrix(t){const e=this.minX,r=this.minY,i=this.maxX,s=this.maxY,{a:o,b:a,c:l,d:u,tx:c,ty:h}=t;let f=o*e+l*r+c,d=a*e+u*r+h;this.minX=f,this.minY=d,this.maxX=f,this.maxY=d,f=o*i+l*r+c,d=a*i+u*r+h,this.minX=f<this.minX?f:this.minX,this.minY=d<this.minY?d:this.minY,this.maxX=f>this.maxX?f:this.maxX,this.maxY=d>this.maxY?d:this.maxY,f=o*e+l*s+c,d=a*e+u*s+h,this.minX=f<this.minX?f:this.minX,this.minY=d<this.minY?d:this.minY,this.maxX=f>this.maxX?f:this.maxX,this.maxY=d>this.maxY?d:this.maxY,f=o*i+l*s+c,d=a*i+u*s+h,this.minX=f<this.minX?f:this.minX,this.minY=d<this.minY?d:this.minY,this.maxX=f>this.maxX?f:this.maxX,this.maxY=d>this.maxY?d:this.maxY}fit(t){return this.minX<t.left&&(this.minX=t.left),this.maxX>t.right&&(this.maxX=t.right),this.minY<t.top&&(this.minY=t.top),this.maxY>t.bottom&&(this.maxY=t.bottom),this}fitBounds(t,e,r,i){return this.minX<t&&(this.minX=t),this.maxX>e&&(this.maxX=e),this.minY<r&&(this.minY=r),this.maxY>i&&(this.maxY=i),this}pad(t,e=t){return this.minX-=t,this.maxX+=t,this.minY-=e,this.maxY+=e,this}ceil(){return this.minX=Math.floor(this.minX),this.minY=Math.floor(this.minY),this.maxX=Math.ceil(this.maxX),this.maxY=Math.ceil(this.maxY),this}clone(){return new Ft(this.minX,this.minY,this.maxX,this.maxY)}scale(t,e=t){return this.minX*=t,this.minY*=e,this.maxX*=t,this.maxY*=e,this}get x(){return this.minX}set x(t){const e=this.maxX-this.minX;this.minX=t,this.maxX=t+e}get y(){return this.minY}set y(t){const e=this.maxY-this.minY;this.minY=t,this.maxY=t+e}get width(){return this.maxX-this.minX}set width(t){this.maxX=this.minX+t}get height(){return this.maxY-this.minY}set height(t){this.maxY=this.minY+t}get left(){return this.minX}get right(){return this.maxX}get top(){return this.minY}get bottom(){return this.maxY}get isPositive(){return this.maxX-this.minX>0&&this.maxY-this.minY>0}get isValid(){return this.minX+this.minY!==1/0}addVertexData(t,e,r,i){let s=this.minX,o=this.minY,a=this.maxX,l=this.maxY;i||(i=this.matrix);const u=i.a,c=i.b,h=i.c,f=i.d,d=i.tx,p=i.ty;for(let g=e;g<r;g+=2){const m=t[g],v=t[g+1],x=u*m+h*v+d,y=c*m+f*v+p;s=x<s?x:s,o=y<o?y:o,a=x>a?x:a,l=y>l?y:l}this.minX=s,this.minY=o,this.maxX=a,this.maxY=l}containsPoint(t,e){return this.minX<=t&&this.minY<=e&&this.maxX>=t&&this.maxY>=e}toString(){return`[pixi.js:Bounds minX=${this.minX} minY=${this.minY} maxX=${this.maxX} maxY=${this.maxY} width=${this.width} height=${this.height}]`}}const Rt=new Vr(X),me=new Vr(Ft);function ms(n,t,e){e.clear();let r,i;return n.parent?t?r=n.parent.worldTransform:(i=Rt.get().identity(),r=vn(n,i)):r=X.IDENTITY,gs(n,e,r,t),i&&Rt.return(i),e.isValid||e.set(0,0,0,0),e}function gs(n,t,e,r){var a,l;if(!n.visible||!n.measurable)return;let i;r?i=n.worldTransform:(n.updateLocalTransform(),i=Rt.get(),i.appendFrom(n.localTransform,e));const s=t,o=!!n.effects.length;if(o&&(t=me.get().clear()),n.boundsArea)t.addRect(n.boundsArea,i);else{n.addBounds&&(t.matrix=i,n.addBounds(t));for(let u=0;u<n.children.length;u++)gs(n.children[u],t,i,r)}if(o){for(let u=0;u<n.effects.length;u++)(l=(a=n.effects[u]).addBounds)==null||l.call(a,t);s.addBounds(t,X.IDENTITY),me.return(t)}r||Rt.return(i)}function vn(n,t){const e=n.parent;return e&&(vn(e,t),e.updateLocalTransform(),t.append(e.localTransform)),t}let kn=0;const bi=500;function nt(...n){kn!==bi&&(kn++,kn===bi?console.warn("PixiJS Warning: too many warnings, no more warnings will be reported to the console by PixiJS."):console.warn("PixiJS Warning: ",...n))}function xs(n,t,e){return t.clear(),e||(e=X.IDENTITY),vs(n,t,e,n,!0),t.isValid||t.set(0,0,0,0),t}function vs(n,t,e,r,i){var l,u;let s;if(i)s=Rt.get(),s=e.copyTo(s);else{if(!n.visible||!n.measurable)return;n.updateLocalTransform();const c=n.localTransform;s=Rt.get(),s.appendFrom(c,e)}const o=t,a=!!n.effects.length;if(a&&(t=me.get().clear()),n.boundsArea)t.addRect(n.boundsArea,s);else{n.renderPipeId&&(t.matrix=s,n.addBounds(t));const c=n.children;for(let h=0;h<c.length;h++)vs(c[h],t,s,r,!1)}if(a){for(let c=0;c<n.effects.length;c++)(u=(l=n.effects[c]).addLocalBounds)==null||u.call(l,t,r);o.addBounds(t,X.IDENTITY),me.return(t)}Rt.return(s)}function ys(n,t){const e=n.children;for(let r=0;r<e.length;r++){const i=e[r],s=(i.uid&255)<<24|i._didChangeId&16777215;t.data[t.index]!==s&&(t.data[t.index]=s,t.didChange=!0),t.index++,i.children.length&&ys(i,t)}return t.didChange}const el=new X,nl={_localBoundsCacheId:-1,_localBoundsCacheData:null,_setWidth(n,t){const e=Math.sign(this.scale.x)||1;t!==0?this.scale.x=n/t*e:this.scale.x=e},_setHeight(n,t){const e=Math.sign(this.scale.y)||1;t!==0?this.scale.y=n/t*e:this.scale.y=e},getLocalBounds(){this._localBoundsCacheData||(this._localBoundsCacheData={data:[],index:1,didChange:!1,localBounds:new Ft});const n=this._localBoundsCacheData;return n.index=1,n.didChange=!1,n.data[0]!==this._didChangeId>>12&&(n.didChange=!0,n.data[0]=this._didChangeId>>12),ys(this,n),n.didChange&&xs(this,n.localBounds,el),n.localBounds},getBounds(n,t){return ms(this,n,t||new Ft)}},rl={_onRender:null,set onRender(n){const t=this.renderGroup||this.parentRenderGroup;if(!n){this._onRender&&(t==null||t.removeOnRender(this)),this._onRender=null;return}this._onRender||t==null||t.addOnRender(this),this._onRender=n},get onRender(){return this._onRender}},il={_zIndex:0,sortDirty:!1,sortableChildren:!1,get zIndex(){return this._zIndex},set zIndex(n){this._zIndex!==n&&(this._zIndex=n,this.depthOfChildModified())},depthOfChildModified(){this.parent&&(this.parent.sortableChildren=!0,this.parent.sortDirty=!0),this.parentRenderGroup&&(this.parentRenderGroup.structureDidChange=!0)},sortChildren(){this.sortDirty&&(this.sortDirty=!1,this.children.sort(sl))}};function sl(n,t){return n._zIndex-t._zIndex}const ol={getGlobalPosition(n=new ot,t=!1){return this.parent?this.parent.toGlobal(this._position,n,t):(n.x=this._position.x,n.y=this._position.y),n},toGlobal(n,t,e=!1){if(!e){this.updateLocalTransform();const r=vn(this,new X);return r.append(this.localTransform),r.apply(n,t)}return this.worldTransform.apply(n,t)},toLocal(n,t,e,r){if(t&&(n=t.toGlobal(n,e,r)),!r){this.updateLocalTransform();const i=vn(this,new X);return i.append(this.localTransform),i.applyInverse(n,e)}return this.worldTransform.applyInverse(n,e)}};class _s{constructor(){this.uid=et("instructionSet"),this.instructions=[],this.instructionSize=0}reset(){this.instructionSize=0}add(t){this.instructions[this.instructionSize++]=t}log(){this.instructions.length=this.instructionSize,console.table(this.instructions,["type","action"])}}class al{constructor(){this.renderPipeId="renderGroup",this.root=null,this.canBundle=!1,this.renderGroupParent=null,this.renderGroupChildren=[],this.worldTransform=new X,this.worldColorAlpha=4294967295,this.worldColor=16777215,this.worldAlpha=1,this.childrenToUpdate=Object.create(null),this.updateTick=0,this.childrenRenderablesToUpdate={list:[],index:0},this.structureDidChange=!0,this.instructionSet=new _s,this._onRenderContainers=[]}init(t){this.root=t,t._onRender&&this.addOnRender(t),t.didChange=!0;const e=t.children;for(let r=0;r<e.length;r++)this.addChild(e[r])}reset(){this.renderGroupChildren.length=0;for(const t in this.childrenToUpdate){const e=this.childrenToUpdate[t];e.list.fill(null),e.index=0}this.childrenRenderablesToUpdate.index=0,this.childrenRenderablesToUpdate.list.fill(null),this.root=null,this.updateTick=0,this.structureDidChange=!0,this._onRenderContainers.length=0,this.renderGroupParent=null}get localTransform(){return this.root.localTransform}addRenderGroupChild(t){t.renderGroupParent&&t.renderGroupParent._removeRenderGroupChild(t),t.renderGroupParent=this,this.renderGroupChildren.push(t)}_removeRenderGroupChild(t){const e=this.renderGroupChildren.indexOf(t);e>-1&&this.renderGroupChildren.splice(e,1),t.renderGroupParent=null}addChild(t){if(this.structureDidChange=!0,t.parentRenderGroup=this,t.updateTick=-1,t.parent===this.root?t.relativeRenderGroupDepth=1:t.relativeRenderGroupDepth=t.parent.relativeRenderGroupDepth+1,t.didChange=!0,this.onChildUpdate(t),t.renderGroup){this.addRenderGroupChild(t.renderGroup);return}t._onRender&&this.addOnRender(t);const e=t.children;for(let r=0;r<e.length;r++)this.addChild(e[r])}removeChild(t){if(this.structureDidChange=!0,t._onRender&&(t.renderGroup||this.removeOnRender(t)),t.parentRenderGroup=null,t.renderGroup){this._removeRenderGroupChild(t.renderGroup);return}const e=t.children;for(let r=0;r<e.length;r++)this.removeChild(e[r])}removeChildren(t){for(let e=0;e<t.length;e++)this.removeChild(t[e])}onChildUpdate(t){let e=this.childrenToUpdate[t.relativeRenderGroupDepth];e||(e=this.childrenToUpdate[t.relativeRenderGroupDepth]={index:0,list:[]}),e.list[e.index++]=t}updateRenderable(t){t.globalDisplayStatus<7||(t.didViewUpdate=!1,this.instructionSet.renderPipes[t.renderPipeId].updateRenderable(t))}onChildViewUpdate(t){this.childrenRenderablesToUpdate.list[this.childrenRenderablesToUpdate.index++]=t}get isRenderable(){return this.root.localDisplayStatus===7&&this.worldAlpha>0}addOnRender(t){this._onRenderContainers.push(t)}removeOnRender(t){this._onRenderContainers.splice(this._onRenderContainers.indexOf(t),1)}runOnRender(){for(let t=0;t<this._onRenderContainers.length;t++)this._onRenderContainers[t]._onRender()}destroy(){this.renderGroupParent=null,this.root=null,this.childrenRenderablesToUpdate=null,this.childrenToUpdate=null,this.renderGroupChildren=null,this._onRenderContainers=null,this.instructionSet=null}getChildren(t=[]){const e=this.root.children;for(let r=0;r<e.length;r++)this._getChildren(e[r],t);return t}_getChildren(t,e=[]){if(e.push(t),t.renderGroup)return e;const r=t.children;for(let i=0;i<r.length;i++)this._getChildren(r[i],e);return e}}function ll(n,t,e={}){for(const r in t)!e[r]&&t[r]!==void 0&&(n[r]=t[r])}const Bn=new at(null),Ln=new at(null),Dn=new at(null,1,1),Si=1,ul=2,Gn=4;class rt extends St{constructor(t={}){var e,r;super(),this.uid=et("renderable"),this._updateFlags=15,this.renderGroup=null,this.parentRenderGroup=null,this.parentRenderGroupIndex=0,this.didChange=!1,this.didViewUpdate=!1,this.relativeRenderGroupDepth=0,this.children=[],this.parent=null,this.includeInBuild=!0,this.measurable=!0,this.isSimple=!0,this.updateTick=-1,this.localTransform=new X,this.relativeGroupTransform=new X,this.groupTransform=this.relativeGroupTransform,this.destroyed=!1,this._position=new at(this,0,0),this._scale=Dn,this._pivot=Ln,this._skew=Bn,this._cx=1,this._sx=0,this._cy=0,this._sy=1,this._rotation=0,this.localColor=16777215,this.localAlpha=1,this.groupAlpha=1,this.groupColor=16777215,this.groupColorAlpha=4294967295,this.localBlendMode="inherit",this.groupBlendMode="normal",this.localDisplayStatus=7,this.globalDisplayStatus=7,this._didChangeId=0,this._didLocalTransformChangeId=-1,ll(this,t,{children:!0,parent:!0,effects:!0}),(e=t.children)==null||e.forEach(i=>this.addChild(i)),this.effects=[],(r=t.parent)==null||r.addChild(this)}static mixin(t){Object.defineProperties(rt.prototype,Object.getOwnPropertyDescriptors(t))}addChild(...t){if(this.allowChildren||I(Y,"addChild: Only Containers will be allowed to add children in v8.0.0"),t.length>1){for(let i=0;i<t.length;i++)this.addChild(t[i]);return t[0]}const e=t[0];if(e.parent===this)return this.children.splice(this.children.indexOf(e),1),this.children.push(e),this.parentRenderGroup&&(this.parentRenderGroup.structureDidChange=!0),e;e.parent&&e.parent.removeChild(e),this.children.push(e),this.sortableChildren&&(this.sortDirty=!0),e.parent=this,e.didChange=!0,e.didViewUpdate=!1,e._updateFlags=15;const r=this.renderGroup||this.parentRenderGroup;return r&&r.addChild(e),this.emit("childAdded",e,this,this.children.length-1),e.emit("added",this),this._didChangeId+=4096,e._zIndex!==0&&e.depthOfChildModified(),e}removeChild(...t){if(t.length>1){for(let i=0;i<t.length;i++)this.removeChild(t[i]);return t[0]}const e=t[0],r=this.children.indexOf(e);return r>-1&&(this._didChangeId+=4096,this.children.splice(r,1),this.renderGroup?this.renderGroup.removeChild(e):this.parentRenderGroup&&this.parentRenderGroup.removeChild(e),e.parent=null,this.emit("childRemoved",e,this,r),e.emit("removed",this)),e}_onUpdate(t){t&&t===this._skew&&this._updateSkew(),this._didChangeId++,!this.didChange&&(this.didChange=!0,this.parentRenderGroup&&this.parentRenderGroup.onChildUpdate(this))}set isRenderGroup(t){!!this.renderGroup!==t&&(t?this.enableRenderGroup():this.disableRenderGroup())}get isRenderGroup(){return!!this.renderGroup}enableRenderGroup(){if(this.renderGroup)return;const t=this.parentRenderGroup;t==null||t.removeChild(this),this.renderGroup=Ot.get(al,this),this.groupTransform=X.IDENTITY,t==null||t.addChild(this),this._updateIsSimple()}disableRenderGroup(){if(!this.renderGroup)return;const t=this.parentRenderGroup;t==null||t.removeChild(this),Ot.return(this.renderGroup),this.renderGroup=null,this.groupTransform=this.relativeGroupTransform,t==null||t.addChild(this),this._updateIsSimple()}_updateIsSimple(){this.isSimple=!this.renderGroup&&this.effects.length===0}get worldTransform(){return this._worldTransform||(this._worldTransform=new X),this.renderGroup?this._worldTransform.copyFrom(this.renderGroup.worldTransform):this.parentRenderGroup&&this._worldTransform.appendFrom(this.relativeGroupTransform,this.parentRenderGroup.worldTransform),this._worldTransform}get x(){return this._position.x}set x(t){this._position.x=t}get y(){return this._position.y}set y(t){this._position.y=t}get position(){return this._position}set position(t){this._position.copyFrom(t)}get rotation(){return this._rotation}set rotation(t){this._rotation!==t&&(this._rotation=t,this._onUpdate(this._skew))}get angle(){return this.rotation*Ma}set angle(t){this.rotation=t*de}get pivot(){return this._pivot===Ln&&(this._pivot=new at(this,0,0)),this._pivot}set pivot(t){this._pivot===Ln&&(this._pivot=new at(this,0,0)),typeof t=="number"?this._pivot.set(t):this._pivot.copyFrom(t)}get skew(){return this._skew===Bn&&(this._skew=new at(this,0,0)),this._skew}set skew(t){this._skew===Bn&&(this._skew=new at(this,0,0)),this._skew.copyFrom(t)}get scale(){return this._scale===Dn&&(this._scale=new at(this,1,1)),this._scale}set scale(t){this._scale===Dn&&(this._scale=new at(this,0,0)),typeof t=="number"?this._scale.set(t):this._scale.copyFrom(t)}get width(){return Math.abs(this.scale.x*this.getLocalBounds().width)}set width(t){const e=this.getLocalBounds().width;this._setWidth(t,e)}get height(){return Math.abs(this.scale.y*this.getLocalBounds().height)}set height(t){const e=this.getLocalBounds().height;this._setHeight(t,e)}getSize(t){t||(t={});const e=this.getLocalBounds();return t.width=Math.abs(this.scale.x*e.width),t.height=Math.abs(this.scale.y*e.height),t}setSize(t,e){const r=this.getLocalBounds();let i,s;typeof t!="object"?(i=t,s=e??t):(i=t.width,s=t.height??t.width),i!==void 0&&this._setWidth(i,r.width),s!==void 0&&this._setHeight(s,r.height)}_updateSkew(){const t=this._rotation,e=this._skew;this._cx=Math.cos(t+e._y),this._sx=Math.sin(t+e._y),this._cy=-Math.sin(t-e._x),this._sy=Math.cos(t-e._x)}updateTransform(t){return this.position.set(typeof t.x=="number"?t.x:this.position.x,typeof t.y=="number"?t.y:this.position.y),this.scale.set(typeof t.scaleX=="number"?t.scaleX||1:this.scale.x,typeof t.scaleY=="number"?t.scaleY||1:this.scale.y),this.rotation=typeof t.rotation=="number"?t.rotation:this.rotation,this.skew.set(typeof t.skewX=="number"?t.skewX:this.skew.x,typeof t.skewY=="number"?t.skewY:this.skew.y),this.pivot.set(typeof t.pivotX=="number"?t.pivotX:this.pivot.x,typeof t.pivotY=="number"?t.pivotY:this.pivot.y),this}setFromMatrix(t){t.decompose(this)}updateLocalTransform(){const t=this._didChangeId&4095;if(this._didLocalTransformChangeId===t)return;this._didLocalTransformChangeId=t;const e=this.localTransform,r=this._scale,i=this._pivot,s=this._position,o=r._x,a=r._y,l=i._x,u=i._y;e.a=this._cx*o,e.b=this._sx*o,e.c=this._cy*a,e.d=this._sy*a,e.tx=s._x-(l*e.a+u*e.c),e.ty=s._y-(l*e.b+u*e.d)}set alpha(t){t!==this.localAlpha&&(this.localAlpha=t,this._updateFlags|=Si,this._onUpdate())}get alpha(){return this.localAlpha}set tint(t){const r=G.shared.setValue(t??16777215).toBgrNumber();r!==this.localColor&&(this.localColor=r,this._updateFlags|=Si,this._onUpdate())}get tint(){const t=this.localColor;return((t&255)<<16)+(t&65280)+(t>>16&255)}set blendMode(t){this.localBlendMode!==t&&(this.parentRenderGroup&&(this.parentRenderGroup.structureDidChange=!0),this._updateFlags|=ul,this.localBlendMode=t,this._onUpdate())}get blendMode(){return this.localBlendMode}get visible(){return!!(this.localDisplayStatus&2)}set visible(t){const e=t?2:0;(this.localDisplayStatus&2)!==e&&(this.parentRenderGroup&&(this.parentRenderGroup.structureDidChange=!0),this._updateFlags|=Gn,this.localDisplayStatus^=2,this._onUpdate())}get culled(){return!(this.localDisplayStatus&4)}set culled(t){const e=t?0:4;(this.localDisplayStatus&4)!==e&&(this.parentRenderGroup&&(this.parentRenderGroup.structureDidChange=!0),this._updateFlags|=Gn,this.localDisplayStatus^=4,this._onUpdate())}get renderable(){return!!(this.localDisplayStatus&1)}set renderable(t){const e=t?1:0;(this.localDisplayStatus&1)!==e&&(this._updateFlags|=Gn,this.localDisplayStatus^=1,this.parentRenderGroup&&(this.parentRenderGroup.structureDidChange=!0),this._onUpdate())}get isRenderable(){return this.localDisplayStatus===7&&this.groupAlpha>0}destroy(t=!1){var i;if(this.destroyed)return;this.destroyed=!0;const e=this.removeChildren(0,this.children.length);if(this.removeFromParent(),this.parent=null,this._maskEffect=null,this._filterEffect=null,this.effects=null,this._position=null,this._scale=null,this._pivot=null,this._skew=null,this.emit("destroyed",this),this.removeAllListeners(),typeof t=="boolean"?t:t==null?void 0:t.children)for(let s=0;s<e.length;++s)e[s].destroy(t);(i=this.renderGroup)==null||i.destroy(),this.renderGroup=null}}rt.mixin(Za);rt.mixin(ol);rt.mixin(rl);rt.mixin(nl);rt.mixin(Ja);rt.mixin(tl);rt.mixin(il);rt.mixin(ja);class ke extends rt{constructor(t=k.EMPTY){t instanceof k&&(t={texture:t});const{texture:e=k.EMPTY,anchor:r,roundPixels:i,width:s,height:o,...a}=t;super({label:"Sprite",...a}),this.renderPipeId="sprite",this.batched=!0,this._didSpriteUpdate=!1,this._bounds={minX:0,maxX:1,minY:0,maxY:0},this._sourceBounds={minX:0,maxX:1,minY:0,maxY:0},this._boundsDirty=!0,this._sourceBoundsDirty=!0,this._roundPixels=0,this._anchor=new at({_onUpdate:()=>{this.onViewUpdate()}}),r?this.anchor=r:e.defaultAnchor&&(this.anchor=e.defaultAnchor),this.texture=e,this.allowChildren=!1,this.roundPixels=i??!1,s!==void 0&&(this.width=s),o!==void 0&&(this.height=o)}static from(t,e=!1){return t instanceof k?new ke(t):new ke(k.from(t,e))}set texture(t){t||(t=k.EMPTY);const e=this._texture;e!==t&&(e&&e.dynamic&&e.off("update",this.onViewUpdate,this),t.dynamic&&t.on("update",this.onViewUpdate,this),this._texture=t,this._width&&this._setWidth(this._width,this._texture.orig.width),this._height&&this._setHeight(this._height,this._texture.orig.height),this.onViewUpdate())}get texture(){return this._texture}get bounds(){return this._boundsDirty&&(this._updateBounds(),this._boundsDirty=!1),this._bounds}get sourceBounds(){return this._sourceBoundsDirty&&(this._updateSourceBounds(),this._sourceBoundsDirty=!1),this._sourceBounds}containsPoint(t){const e=this.sourceBounds;return t.x>=e.maxX&&t.x<=e.minX&&t.y>=e.maxY&&t.y<=e.minY}addBounds(t){const e=this._texture.trim?this.sourceBounds:this.bounds;t.addFrame(e.minX,e.minY,e.maxX,e.maxY)}onViewUpdate(){if(this._didChangeId+=4096,this._didSpriteUpdate=!0,this._sourceBoundsDirty=this._boundsDirty=!0,this.didViewUpdate)return;this.didViewUpdate=!0;const t=this.renderGroup||this.parentRenderGroup;t&&t.onChildViewUpdate(this)}_updateBounds(){La(this._bounds,this._anchor,this._texture,0)}_updateSourceBounds(){const t=this._anchor,e=this._texture,r=this._sourceBounds,{width:i,height:s}=e.orig;r.maxX=-t._x*i,r.minX=r.maxX+i,r.maxY=-t._y*s,r.minY=r.maxY+s}destroy(t=!1){if(super.destroy(t),typeof t=="boolean"?t:t==null?void 0:t.texture){const r=typeof t=="boolean"?t:t==null?void 0:t.textureSource;this._texture.destroy(r)}this._texture=null,this._bounds=null,this._sourceBounds=null,this._anchor=null}get anchor(){return this._anchor}set anchor(t){typeof t=="number"?this._anchor.set(t):this._anchor.copyFrom(t)}get roundPixels(){return!!this._roundPixels}set roundPixels(t){this._roundPixels=t?1:0}get width(){return Math.abs(this.scale.x)*this._texture.orig.width}set width(t){this._setWidth(t,this._texture.orig.width),this._width=t}get height(){return Math.abs(this.scale.y)*this._texture.orig.height}set height(t){this._setHeight(t,this._texture.orig.height),this._height=t}getSize(t){return t||(t={}),t.width=Math.abs(this.scale.x)*this._texture.orig.width,t.height=Math.abs(this.scale.y)*this._texture.orig.height,t}setSize(t,e){let r,i;typeof t!="object"?(r=t,i=e??t):(r=t.width,i=t.height??t.width),r!==void 0&&this._setWidth(r,this._texture.orig.width),i!==void 0&&this._setHeight(i,this._texture.orig.height)}}const cl=new Ft;function bs(n,t,e){const r=cl;n.measurable=!0,ms(n,e,r),t.addBoundsMask(r),n.measurable=!1}function Ss(n,t,e){const r=me.get();n.measurable=!0;const i=Rt.get().identity(),s=Cs(n,e,i);xs(n,r,s),n.measurable=!1,t.addBoundsMask(r),Rt.return(i),me.return(r)}function Cs(n,t,e){return n?(n!==t&&(Cs(n.parent,t,e),n.updateLocalTransform(),e.append(n.localTransform)),e):(nt("Mask bounds, renderable is not inside the root container"),e)}class ws{constructor(t){this.priority=0,this.pipe="alphaMask",t!=null&&t.mask&&this.init(t.mask)}init(t){this.mask=t,this.renderMaskToTexture=!(t instanceof ke),this.mask.renderable=this.renderMaskToTexture,this.mask.includeInBuild=!this.renderMaskToTexture,this.mask.measurable=!1}reset(){this.mask.measurable=!0,this.mask=null}addBounds(t,e){bs(this.mask,t,e)}addLocalBounds(t,e){Ss(this.mask,t,e)}containsPoint(t,e){const r=this.mask;return e(r,t)}destroy(){this.reset()}static test(t){return t instanceof ke}}ws.extension=O.MaskEffect;class As{constructor(t){this.priority=0,this.pipe="colorMask",t!=null&&t.mask&&this.init(t.mask)}init(t){this.mask=t}destroy(){}static test(t){return typeof t=="number"}}As.extension=O.MaskEffect;class Ts{constructor(t){this.priority=0,this.pipe="stencilMask",t!=null&&t.mask&&this.init(t.mask)}init(t){this.mask=t,this.mask.includeInBuild=!1,this.mask.measurable=!1}reset(){this.mask.measurable=!0,this.mask.includeInBuild=!0,this.mask=null}addBounds(t,e){bs(this.mask,t,e)}addLocalBounds(t,e){Ss(this.mask,t,e)}containsPoint(t,e){const r=this.mask;return e(r,t)}destroy(){this.reset()}static test(t){return t instanceof rt}}Ts.extension=O.MaskEffect;const hl={createCanvas:(n,t)=>{const e=document.createElement("canvas");return e.width=n,e.height=t,e},getCanvasRenderingContext2D:()=>CanvasRenderingContext2D,getWebGLRenderingContext:()=>WebGLRenderingContext,getNavigator:()=>navigator,getBaseUrl:()=>document.baseURI??window.location.href,getFontFaceSet:()=>document.fonts,fetch:(n,t)=>fetch(n,t),parseXML:n=>new DOMParser().parseFromString(n,"text/xml")};let Ci=hl;const J={get(){return Ci},set(n){Ci=n}};class Ps extends Ct{constructor(t){t.resource||(t.resource=J.get().createCanvas()),t.width||(t.width=t.resource.width,t.autoDensity||(t.width/=t.resolution)),t.height||(t.height=t.resource.height,t.autoDensity||(t.height/=t.resolution)),super(t),this.uploadMethodId="image",this.autoDensity=t.autoDensity;const e=t.resource;(this.pixelWidth!==e.width||this.pixelWidth!==e.height)&&this.resizeCanvas(),this.transparent=!!t.transparent}resizeCanvas(){this.autoDensity&&(this.resource.style.width=`${this.width}px`,this.resource.style.height=`${this.height}px`),(this.resource.width!==this.pixelWidth||this.resource.height!==this.pixelHeight)&&(this.resource.width=this.pixelWidth,this.resource.height=this.pixelHeight)}resize(t=this.width,e=this.height,r=this._resolution){const i=super.resize(t,e,r);return i&&this.resizeCanvas(),i}static test(t){return globalThis.HTMLCanvasElement&&t instanceof HTMLCanvasElement||globalThis.OffscreenCanvas&&t instanceof OffscreenCanvas}}Ps.extension=O.TextureSource;class te extends Ct{constructor(t){if(t.resource&&globalThis.HTMLImageElement&&t.resource instanceof HTMLImageElement){const e=J.get().createCanvas(t.resource.width,t.resource.height);e.getContext("2d").drawImage(t.resource,0,0),t.resource=e,nt("ImageSource: Image element passed, converting to canvas. Use CanvasSource instead.")}super(t),this.uploadMethodId="image",this.autoGarbageCollect=!0}static test(t){return globalThis.HTMLImageElement&&t instanceof HTMLImageElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap}}te.extension=O.TextureSource;var dr=(n=>(n[n.INTERACTION=50]="INTERACTION",n[n.HIGH=25]="HIGH",n[n.NORMAL=0]="NORMAL",n[n.LOW=-25]="LOW",n[n.UTILITY=-50]="UTILITY",n))(dr||{});class Nn{constructor(t,e=null,r=0,i=!1){this.next=null,this.previous=null,this._destroyed=!1,this._fn=t,this._context=e,this.priority=r,this._once=i}match(t,e=null){return this._fn===t&&this._context===e}emit(t){this._fn&&(this._context?this._fn.call(this._context,t):this._fn(t));const e=this.next;return this._once&&this.destroy(!0),this._destroyed&&(this.next=null),e}connect(t){this.previous=t,t.next&&(t.next.previous=this),this.next=t.next,t.next=this}destroy(t=!1){this._destroyed=!0,this._fn=null,this._context=null,this.previous&&(this.previous.next=this.next),this.next&&(this.next.previous=this.previous);const e=this.next;return this.next=t?null:e,this.previous=null,e}}const Fs=class ct{constructor(){this.autoStart=!1,this.deltaTime=1,this.lastTime=-1,this.speed=1,this.started=!1,this._requestId=null,this._maxElapsedMS=100,this._minElapsedMS=0,this._protected=!1,this._lastFrame=-1,this._head=new Nn(null,null,1/0),this.deltaMS=1/ct.targetFPMS,this.elapsedMS=1/ct.targetFPMS,this._tick=t=>{this._requestId=null,this.started&&(this.update(t),this.started&&this._requestId===null&&this._head.next&&(this._requestId=requestAnimationFrame(this._tick)))}}_requestIfNeeded(){this._requestId===null&&this._head.next&&(this.lastTime=performance.now(),this._lastFrame=this.lastTime,this._requestId=requestAnimationFrame(this._tick))}_cancelIfNeeded(){this._requestId!==null&&(cancelAnimationFrame(this._requestId),this._requestId=null)}_startIfPossible(){this.started?this._requestIfNeeded():this.autoStart&&this.start()}add(t,e,r=dr.NORMAL){return this._addListener(new Nn(t,e,r))}addOnce(t,e,r=dr.NORMAL){return this._addListener(new Nn(t,e,r,!0))}_addListener(t){let e=this._head.next,r=this._head;if(!e)t.connect(r);else{for(;e;){if(t.priority>e.priority){t.connect(r);break}r=e,e=e.next}t.previous||t.connect(r)}return this._startIfPossible(),this}remove(t,e){let r=this._head.next;for(;r;)r.match(t,e)?r=r.destroy():r=r.next;return this._head.next||this._cancelIfNeeded(),this}get count(){if(!this._head)return 0;let t=0,e=this._head;for(;e=e.next;)t++;return t}start(){this.started||(this.started=!0,this._requestIfNeeded())}stop(){this.started&&(this.started=!1,this._cancelIfNeeded())}destroy(){if(!this._protected){this.stop();let t=this._head.next;for(;t;)t=t.destroy(!0);this._head.destroy(),this._head=null}}update(t=performance.now()){let e;if(t>this.lastTime){if(e=this.elapsedMS=t-this.lastTime,e>this._maxElapsedMS&&(e=this._maxElapsedMS),e*=this.speed,this._minElapsedMS){const s=t-this._lastFrame|0;if(s<this._minElapsedMS)return;this._lastFrame=t-s%this._minElapsedMS}this.deltaMS=e,this.deltaTime=this.deltaMS*ct.targetFPMS;const r=this._head;let i=r.next;for(;i;)i=i.emit(this);r.next||this._cancelIfNeeded()}else this.deltaTime=this.deltaMS=this.elapsedMS=0;this.lastTime=t}get FPS(){return 1e3/this.elapsedMS}get minFPS(){return 1e3/this._maxElapsedMS}set minFPS(t){const e=Math.min(this.maxFPS,t),r=Math.min(Math.max(0,e)/1e3,ct.targetFPMS);this._maxElapsedMS=1/r}get maxFPS(){return this._minElapsedMS?Math.round(1e3/this._minElapsedMS):0}set maxFPS(t){if(t===0)this._minElapsedMS=0;else{const e=Math.max(this.minFPS,t);this._minElapsedMS=1/(e/1e3)}}static get shared(){if(!ct._shared){const t=ct._shared=new ct;t.autoStart=!0,t._protected=!0}return ct._shared}static get system(){if(!ct._system){const t=ct._system=new ct;t.autoStart=!0,t._protected=!0}return ct._system}};Fs.targetFPMS=.06;let Ze=Fs,$n;async function zs(){return $n??($n=(async()=>{var o;const t=document.createElement("canvas").getContext("webgl");if(!t)return"premultiply-alpha-on-upload";const e=await new Promise(a=>{const l=document.createElement("video");l.onloadeddata=()=>a(l),l.onerror=()=>a(null),l.autoplay=!1,l.crossOrigin="anonymous",l.preload="auto",l.src="data:video/webm;base64,GkXfo59ChoEBQveBAULygQRC84EIQoKEd2VibUKHgQJChYECGFOAZwEAAAAAAAHTEU2bdLpNu4tTq4QVSalmU6yBoU27i1OrhBZUrmtTrIHGTbuMU6uEElTDZ1OsggEXTbuMU6uEHFO7a1OsggG97AEAAAAAAABZAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAVSalmoCrXsYMPQkBNgIRMYXZmV0GETGF2ZkSJiEBEAAAAAAAAFlSua8yuAQAAAAAAAEPXgQFzxYgAAAAAAAAAAZyBACK1nIN1bmSIgQCGhVZfVlA5g4EBI+ODhAJiWgDglLCBArqBApqBAlPAgQFVsIRVuYEBElTDZ9Vzc9JjwItjxYgAAAAAAAAAAWfInEWjh0VOQ09ERVJEh49MYXZjIGxpYnZweC12cDlnyKJFo4hEVVJBVElPTkSHlDAwOjAwOjAwLjA0MDAwMDAwMAAAH0O2dcfngQCgwqGggQAAAIJJg0IAABAAFgA4JBwYSgAAICAAEb///4r+AAB1oZ2mm+6BAaWWgkmDQgAAEAAWADgkHBhKAAAgIABIQBxTu2uRu4+zgQC3iveBAfGCAXHwgQM=",l.load()});if(!e)return"premultiply-alpha-on-upload";const r=t.createTexture();t.bindTexture(t.TEXTURE_2D,r);const i=t.createFramebuffer();t.bindFramebuffer(t.FRAMEBUFFER,i),t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,r,0),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.NONE),t.texImage2D(t.TEXTURE_2D,0,t.RGBA,t.RGBA,t.UNSIGNED_BYTE,e);const s=new Uint8Array(4);return t.readPixels(0,0,1,1,t.RGBA,t.UNSIGNED_BYTE,s),t.deleteFramebuffer(i),t.deleteTexture(r),(o=t.getExtension("WEBGL_lose_context"))==null||o.loseContext(),s[0]<=s[3]?"premultiplied-alpha":"premultiply-alpha-on-upload"})()),$n}const Cn=class Ms extends Ct{constructor(t){super(t),this.isReady=!1,this.uploadMethodId="video",t={...Ms.defaultOptions,...t},this._autoUpdate=!0,this._isConnectedToTicker=!1,this._updateFPS=t.updateFPS||0,this._msToNextUpdate=0,this.autoPlay=t.autoPlay!==!1,this.alphaMode=t.alphaMode??"premultiply-alpha-on-upload",this._videoFrameRequestCallback=this._videoFrameRequestCallback.bind(this),this._videoFrameRequestCallbackHandle=null,this._load=null,this._resolve=null,this._reject=null,this._onCanPlay=this._onCanPlay.bind(this),this._onCanPlayThrough=this._onCanPlayThrough.bind(this),this._onError=this._onError.bind(this),this._onPlayStart=this._onPlayStart.bind(this),this._onPlayStop=this._onPlayStop.bind(this),this._onSeeked=this._onSeeked.bind(this),t.autoLoad!==!1&&this.load()}updateFrame(){if(!this.destroyed){if(this._updateFPS){const t=Ze.shared.elapsedMS*this.resource.playbackRate;this._msToNextUpdate=Math.floor(this._msToNextUpdate-t)}(!this._updateFPS||this._msToNextUpdate<=0)&&(this._msToNextUpdate=this._updateFPS?Math.floor(1e3/this._updateFPS):0),this.isValid&&this.update()}}_videoFrameRequestCallback(){this.updateFrame(),this.destroyed?this._videoFrameRequestCallbackHandle=null:this._videoFrameRequestCallbackHandle=this.resource.requestVideoFrameCallback(this._videoFrameRequestCallback)}get isValid(){return!!this.resource.videoWidth&&!!this.resource.videoHeight}async load(){if(this._load)return this._load;const t=this.resource,e=this.options;return(t.readyState===t.HAVE_ENOUGH_DATA||t.readyState===t.HAVE_FUTURE_DATA)&&t.width&&t.height&&(t.complete=!0),t.addEventListener("play",this._onPlayStart),t.addEventListener("pause",this._onPlayStop),t.addEventListener("seeked",this._onSeeked),this._isSourceReady()?this._mediaReady():(e.preload||t.addEventListener("canplay",this._onCanPlay),t.addEventListener("canplaythrough",this._onCanPlayThrough),t.addEventListener("error",this._onError,!0)),this.alphaMode=await zs(),this._load=new Promise((r,i)=>{this.isValid?r(this):(this._resolve=r,this._reject=i,e.preloadTimeoutMs!==void 0&&(this._preloadTimeout=setTimeout(()=>{this._onError(new ErrorEvent(`Preload exceeded timeout of ${e.preloadTimeoutMs}ms`))})),t.load())}),this._load}_onError(t){this.resource.removeEventListener("error",this._onError,!0),this.emit("error",t),this._reject&&(this._reject(t),this._reject=null,this._resolve=null)}_isSourcePlaying(){const t=this.resource;return!t.paused&&!t.ended}_isSourceReady(){return this.resource.readyState>2}_onPlayStart(){this.isValid||this._mediaReady(),this._configureAutoUpdate()}_onPlayStop(){this._configureAutoUpdate()}_onSeeked(){this._autoUpdate&&!this._isSourcePlaying()&&(this._msToNextUpdate=0,this.updateFrame(),this._msToNextUpdate=0)}_onCanPlay(){this.resource.removeEventListener("canplay",this._onCanPlay),this._mediaReady()}_onCanPlayThrough(){this.resource.removeEventListener("canplaythrough",this._onCanPlay),this._preloadTimeout&&(clearTimeout(this._preloadTimeout),this._preloadTimeout=void 0),this._mediaReady()}_mediaReady(){const t=this.resource;this.isValid&&(this.isReady=!0,this.resize(t.videoWidth,t.videoHeight)),this._msToNextUpdate=0,this.updateFrame(),this._msToNextUpdate=0,this._resolve&&(this._resolve(this),this._resolve=null,this._reject=null),this._isSourcePlaying()?this._onPlayStart():this.autoPlay&&this.resource.play()}destroy(){this._configureAutoUpdate();const t=this.resource;t&&(t.removeEventListener("play",this._onPlayStart),t.removeEventListener("pause",this._onPlayStop),t.removeEventListener("seeked",this._onSeeked),t.removeEventListener("canplay",this._onCanPlay),t.removeEventListener("canplaythrough",this._onCanPlayThrough),t.removeEventListener("error",this._onError,!0),t.pause(),t.src="",t.load()),super.destroy()}get autoUpdate(){return this._autoUpdate}set autoUpdate(t){t!==this._autoUpdate&&(this._autoUpdate=t,this._configureAutoUpdate())}get updateFPS(){return this._updateFPS}set updateFPS(t){t!==this._updateFPS&&(this._updateFPS=t,this._configureAutoUpdate())}_configureAutoUpdate(){this._autoUpdate&&this._isSourcePlaying()?!this._updateFPS&&this.resource.requestVideoFrameCallback?(this._isConnectedToTicker&&(Ze.shared.remove(this.updateFrame,this),this._isConnectedToTicker=!1,this._msToNextUpdate=0),this._videoFrameRequestCallbackHandle===null&&(this._videoFrameRequestCallbackHandle=this.resource.requestVideoFrameCallback(this._videoFrameRequestCallback))):(this._videoFrameRequestCallbackHandle!==null&&(this.resource.cancelVideoFrameCallback(this._videoFrameRequestCallbackHandle),this._videoFrameRequestCallbackHandle=null),this._isConnectedToTicker||(Ze.shared.add(this.updateFrame,this),this._isConnectedToTicker=!0,this._msToNextUpdate=0)):(this._videoFrameRequestCallbackHandle!==null&&(this.resource.cancelVideoFrameCallback(this._videoFrameRequestCallbackHandle),this._videoFrameRequestCallbackHandle=null),this._isConnectedToTicker&&(Ze.shared.remove(this.updateFrame,this),this._isConnectedToTicker=!1,this._msToNextUpdate=0))}static test(t){return globalThis.HTMLVideoElement&&t instanceof HTMLVideoElement||globalThis.VideoFrame&&t instanceof VideoFrame}};Cn.extension=O.TextureSource;Cn.defaultOptions={...Ct.defaultOptions,autoLoad:!0,autoPlay:!0,updateFPS:0,crossorigin:!0,loop:!1,muted:!0,playsinline:!0,preload:!1};Cn.MIME_TYPES={ogv:"video/ogg",mov:"video/quicktime",m4v:"video/mp4"};let an=Cn;const _t=(n,t,e=!1)=>(Array.isArray(n)||(n=[n]),t?n.map(r=>typeof r=="string"||e?t(r):r):n);class fl{constructor(){this._parsers=[],this._cache=new Map,this._cacheMap=new Map}reset(){this._cacheMap.clear(),this._cache.clear()}has(t){return this._cache.has(t)}get(t){const e=this._cache.get(t);return e||nt(`[Assets] Asset id ${t} was not found in the Cache`),e}set(t,e){const r=_t(t);let i;for(let l=0;l<this.parsers.length;l++){const u=this.parsers[l];if(u.test(e)){i=u.getCacheableAssets(r,e);break}}const s=new Map(Object.entries(i||{}));i||r.forEach(l=>{s.set(l,e)});const o=[...s.keys()],a={cacheKeys:o,keys:r};r.forEach(l=>{this._cacheMap.set(l,a)}),o.forEach(l=>{const u=i?i[l]:e;this._cache.has(l)&&this._cache.get(l)!==u&&nt("[Cache] already has key:",l),this._cache.set(l,s.get(l))})}remove(t){if(!this._cacheMap.has(t)){nt(`[Assets] Asset id ${t} was not found in the Cache`);return}const e=this._cacheMap.get(t);e.cacheKeys.forEach(i=>{this._cache.delete(i)}),e.keys.forEach(i=>{this._cacheMap.delete(i)})}get parsers(){return this._parsers}}const Z=new fl,pr=[];lt.handleByList(O.TextureSource,pr);function Is(n={}){const t=n&&n.resource,e=t?n.resource:n,r=t?n:{resource:n};for(let i=0;i<pr.length;i++){const s=pr[i];if(s.test(e))return new s(r)}throw new Error(`Could not find a source type for resource: ${r.resource}`)}function dl(n={},t=!1){const e=n&&n.resource,r=e?n.resource:n,i=e?n:{resource:n};if(!t&&Z.has(r))return Z.get(r);const s=new k({source:Is(i)});return s.on("destroy",()=>{Z.has(r)&&Z.remove(r)}),t||Z.set(r,s),s}function pl(n,t=!1){return typeof n=="string"?Z.get(n):n instanceof Ct?new k({source:n}):dl(n,t)}k.from=pl;Ct.from=Is;lt.add(ws,As,Ts,an,te,Ps,$r);var Ut=(n=>(n[n.Low=0]="Low",n[n.Normal=1]="Normal",n[n.High=2]="High",n))(Ut||{});function vt(n){if(typeof n!="string")throw new TypeError(`Path must be a string. Received ${JSON.stringify(n)}`)}function Ae(n){return n.split("?")[0].split("#")[0]}function ml(n){return n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function gl(n,t,e){return n.replace(new RegExp(ml(t),"g"),e)}function xl(n,t){let e="",r=0,i=-1,s=0,o=-1;for(let a=0;a<=n.length;++a){if(a<n.length)o=n.charCodeAt(a);else{if(o===47)break;o=47}if(o===47){if(!(i===a-1||s===1))if(i!==a-1&&s===2){if(e.length<2||r!==2||e.charCodeAt(e.length-1)!==46||e.charCodeAt(e.length-2)!==46){if(e.length>2){const l=e.lastIndexOf("/");if(l!==e.length-1){l===-1?(e="",r=0):(e=e.slice(0,l),r=e.length-1-e.lastIndexOf("/")),i=a,s=0;continue}}else if(e.length===2||e.length===1){e="",r=0,i=a,s=0;continue}}}else e.length>0?e+=`/${n.slice(i+1,a)}`:e=n.slice(i+1,a),r=a-i-1;i=a,s=0}else o===46&&s!==-1?++s:s=-1}return e}const ft={toPosix(n){return gl(n,"\\","/")},isUrl(n){return/^https?:/.test(this.toPosix(n))},isDataUrl(n){return/^data:([a-z]+\/[a-z0-9-+.]+(;[a-z0-9-.!#$%*+.{}|~`]+=[a-z0-9-.!#$%*+.{}()_|~`]+)*)?(;base64)?,([a-z0-9!$&',()*+;=\-._~:@\/?%\s<>]*?)$/i.test(n)},isBlobUrl(n){return n.startsWith("blob:")},hasProtocol(n){return/^[^/:]+:/.test(this.toPosix(n))},getProtocol(n){vt(n),n=this.toPosix(n);const t=/^file:\/\/\//.exec(n);if(t)return t[0];const e=/^[^/:]+:\/{0,2}/.exec(n);return e?e[0]:""},toAbsolute(n,t,e){if(vt(n),this.isDataUrl(n)||this.isBlobUrl(n))return n;const r=Ae(this.toPosix(t??J.get().getBaseUrl())),i=Ae(this.toPosix(e??this.rootname(r)));return n=this.toPosix(n),n.startsWith("/")?ft.join(i,n.slice(1)):this.isAbsolute(n)?n:this.join(r,n)},normalize(n){if(vt(n),n.length===0)return".";if(this.isDataUrl(n)||this.isBlobUrl(n))return n;n=this.toPosix(n);let t="";const e=n.startsWith("/");this.hasProtocol(n)&&(t=this.rootname(n),n=n.slice(t.length));const r=n.endsWith("/");return n=xl(n),n.length>0&&r&&(n+="/"),e?`/${n}`:t+n},isAbsolute(n){return vt(n),n=this.toPosix(n),this.hasProtocol(n)?!0:n.startsWith("/")},join(...n){if(n.length===0)return".";let t;for(let e=0;e<n.length;++e){const r=n[e];if(vt(r),r.length>0)if(t===void 0)t=r;else{const i=n[e-1]??"";this.joinExtensions.includes(this.extname(i).toLowerCase())?t+=`/../${r}`:t+=`/${r}`}}return t===void 0?".":this.normalize(t)},dirname(n){if(vt(n),n.length===0)return".";n=this.toPosix(n);let t=n.charCodeAt(0);const e=t===47;let r=-1,i=!0;const s=this.getProtocol(n),o=n;n=n.slice(s.length);for(let a=n.length-1;a>=1;--a)if(t=n.charCodeAt(a),t===47){if(!i){r=a;break}}else i=!1;return r===-1?e?"/":this.isUrl(o)?s+n:s:e&&r===1?"//":s+n.slice(0,r)},rootname(n){vt(n),n=this.toPosix(n);let t="";if(n.startsWith("/")?t="/":t=this.getProtocol(n),this.isUrl(n)){const e=n.indexOf("/",t.length);e!==-1?t=n.slice(0,e):t=n,t.endsWith("/")||(t+="/")}return t},basename(n,t){vt(n),t&&vt(t),n=Ae(this.toPosix(n));let e=0,r=-1,i=!0,s;if(t!==void 0&&t.length>0&&t.length<=n.length){if(t.length===n.length&&t===n)return"";let o=t.length-1,a=-1;for(s=n.length-1;s>=0;--s){const l=n.charCodeAt(s);if(l===47){if(!i){e=s+1;break}}else a===-1&&(i=!1,a=s+1),o>=0&&(l===t.charCodeAt(o)?--o===-1&&(r=s):(o=-1,r=a))}return e===r?r=a:r===-1&&(r=n.length),n.slice(e,r)}for(s=n.length-1;s>=0;--s)if(n.charCodeAt(s)===47){if(!i){e=s+1;break}}else r===-1&&(i=!1,r=s+1);return r===-1?"":n.slice(e,r)},extname(n){vt(n),n=Ae(this.toPosix(n));let t=-1,e=0,r=-1,i=!0,s=0;for(let o=n.length-1;o>=0;--o){const a=n.charCodeAt(o);if(a===47){if(!i){e=o+1;break}continue}r===-1&&(i=!1,r=o+1),a===46?t===-1?t=o:s!==1&&(s=1):t!==-1&&(s=-1)}return t===-1||r===-1||s===0||s===1&&t===r-1&&t===e+1?"":n.slice(t,r)},parse(n){vt(n);const t={root:"",dir:"",base:"",ext:"",name:""};if(n.length===0)return t;n=Ae(this.toPosix(n));let e=n.charCodeAt(0);const r=this.isAbsolute(n);let i;t.root=this.rootname(n),r||this.hasProtocol(n)?i=1:i=0;let s=-1,o=0,a=-1,l=!0,u=n.length-1,c=0;for(;u>=i;--u){if(e=n.charCodeAt(u),e===47){if(!l){o=u+1;break}continue}a===-1&&(l=!1,a=u+1),e===46?s===-1?s=u:c!==1&&(c=1):s!==-1&&(c=-1)}return s===-1||a===-1||c===0||c===1&&s===a-1&&s===o+1?a!==-1&&(o===0&&r?t.base=t.name=n.slice(1,a):t.base=t.name=n.slice(o,a)):(o===0&&r?(t.name=n.slice(1,s),t.base=n.slice(1,a)):(t.name=n.slice(o,s),t.base=n.slice(o,a)),t.ext=n.slice(s,a)),t.dir=this.dirname(n),t},sep:"/",delimiter:":",joinExtensions:[".html"]};function Os(n,t,e,r,i){const s=t[e];for(let o=0;o<s.length;o++){const a=s[o];e<t.length-1?Os(n.replace(r[e],a),t,e+1,r,i):i.push(n.replace(r[e],a))}}function vl(n){const t=/\{(.*?)\}/g,e=n.match(t),r=[];if(e){const i=[];e.forEach(s=>{const o=s.substring(1,s.length-1).split(",");i.push(o)}),Os(n,i,0,e,r)}else r.push(n);return r}const yn=n=>!Array.isArray(n);class ve{constructor(){this._defaultBundleIdentifierOptions={connector:"-",createBundleAssetId:(t,e)=>`${t}${this._bundleIdConnector}${e}`,extractAssetIdFromBundle:(t,e)=>e.replace(`${t}${this._bundleIdConnector}`,"")},this._bundleIdConnector=this._defaultBundleIdentifierOptions.connector,this._createBundleAssetId=this._defaultBundleIdentifierOptions.createBundleAssetId,this._extractAssetIdFromBundle=this._defaultBundleIdentifierOptions.extractAssetIdFromBundle,this._assetMap={},this._preferredOrder=[],this._parsers=[],this._resolverHash={},this._bundles={}}setBundleIdentifier(t){if(this._bundleIdConnector=t.connector??this._bundleIdConnector,this._createBundleAssetId=t.createBundleAssetId??this._createBundleAssetId,this._extractAssetIdFromBundle=t.extractAssetIdFromBundle??this._extractAssetIdFromBundle,this._extractAssetIdFromBundle("foo",this._createBundleAssetId("foo","bar"))!=="bar")throw new Error("[Resolver] GenerateBundleAssetId are not working correctly")}prefer(...t){t.forEach(e=>{this._preferredOrder.push(e),e.priority||(e.priority=Object.keys(e.params))}),this._resolverHash={}}set basePath(t){this._basePath=t}get basePath(){return this._basePath}set rootPath(t){this._rootPath=t}get rootPath(){return this._rootPath}get parsers(){return this._parsers}reset(){this.setBundleIdentifier(this._defaultBundleIdentifierOptions),this._assetMap={},this._preferredOrder=[],this._resolverHash={},this._rootPath=null,this._basePath=null,this._manifest=null,this._bundles={},this._defaultSearchParams=null}setDefaultSearchParams(t){if(typeof t=="string")this._defaultSearchParams=t;else{const e=t;this._defaultSearchParams=Object.keys(e).map(r=>`${encodeURIComponent(r)}=${encodeURIComponent(e[r])}`).join("&")}}getAlias(t){const{alias:e,src:r}=t;return _t(e||r,s=>typeof s=="string"?s:Array.isArray(s)?s.map(o=>(o==null?void 0:o.src)??o):s!=null&&s.src?s.src:s,!0)}addManifest(t){this._manifest&&nt("[Resolver] Manifest already exists, this will be overwritten"),this._manifest=t,t.bundles.forEach(e=>{this.addBundle(e.name,e.assets)})}addBundle(t,e){const r=[];let i=e;Array.isArray(e)||(i=Object.entries(e).map(([s,o])=>typeof o=="string"||Array.isArray(o)?{alias:s,src:o}:{alias:s,...o})),i.forEach(s=>{const o=s.src,a=s.alias;let l;if(typeof a=="string"){const u=this._createBundleAssetId(t,a);r.push(u),l=[a,u]}else{const u=a.map(c=>this._createBundleAssetId(t,c));r.push(...u),l=[...a,...u]}this.add({...s,alias:l,src:o})}),this._bundles[t]=r}add(t){const e=[];Array.isArray(t)?e.push(...t):e.push(t);let r;r=s=>{this.hasKey(s)&&nt(`[Resolver] already has key: ${s} overwriting`)},_t(e).forEach(s=>{const{src:o}=s;let{data:a,format:l,loadParser:u}=s;const c=_t(o).map(d=>typeof d=="string"?vl(d):Array.isArray(d)?d:[d]),h=this.getAlias(s);Array.isArray(h)?h.forEach(r):r(h);const f=[];c.forEach(d=>{d.forEach(p=>{let g={};if(typeof p!="object"){g.src=p;for(let m=0;m<this._parsers.length;m++){const v=this._parsers[m];if(v.test(p)){g=v.parse(p);break}}}else a=p.data??a,l=p.format??l,u=p.loadParser??u,g={...g,...p};if(!h)throw new Error(`[Resolver] alias is undefined for this asset: ${g.src}`);g=this._buildResolvedAsset(g,{aliases:h,data:a,format:l,loadParser:u}),f.push(g)})}),h.forEach(d=>{this._assetMap[d]=f})})}resolveBundle(t){const e=yn(t);t=_t(t);const r={};return t.forEach(i=>{const s=this._bundles[i];if(s){const o=this.resolve(s),a={};for(const l in o){const u=o[l];a[this._extractAssetIdFromBundle(i,l)]=u}r[i]=a}}),e?r[t[0]]:r}resolveUrl(t){const e=this.resolve(t);if(typeof t!="string"){const r={};for(const i in e)r[i]=e[i].src;return r}return e.src}resolve(t){const e=yn(t);t=_t(t);const r={};return t.forEach(i=>{if(!this._resolverHash[i])if(this._assetMap[i]){let s=this._assetMap[i];const o=this._getPreferredOrder(s);o==null||o.priority.forEach(a=>{o.params[a].forEach(l=>{const u=s.filter(c=>c[a]?c[a]===l:!1);u.length&&(s=u)})}),this._resolverHash[i]=s[0]}else this._resolverHash[i]=this._buildResolvedAsset({alias:[i],src:i},{});r[i]=this._resolverHash[i]}),e?r[t[0]]:r}hasKey(t){return!!this._assetMap[t]}hasBundle(t){return!!this._bundles[t]}_getPreferredOrder(t){for(let e=0;e<t.length;e++){const r=t[0],i=this._preferredOrder.find(s=>s.params.format.includes(r.format));if(i)return i}return this._preferredOrder[0]}_appendDefaultSearchParams(t){if(!this._defaultSearchParams)return t;const e=/\?/.test(t)?"&":"?";return`${t}${e}${this._defaultSearchParams}`}_buildResolvedAsset(t,e){const{aliases:r,data:i,loadParser:s,format:o}=e;return(this._basePath||this._rootPath)&&(t.src=ft.toAbsolute(t.src,this._basePath,this._rootPath)),t.alias=r??t.alias??[t.src],t.src=this._appendDefaultSearchParams(t.src),t.data={...i||{},...t.data},t.loadParser=s??t.loadParser,t.format=o??t.format??yl(t.src),t}}ve.RETINA_PREFIX=/@([0-9\.]+)x/;function yl(n){return n.split(".").pop().split("?").shift().split("#").shift()}const mr=(n,t)=>{const e=t.split("?")[1];return e&&(n+=`?${e}`),n},Rs=class Me{constructor(t,e){this.linkedSheets=[],this._texture=t instanceof k?t:null,this.textureSource=t.source,this.textures={},this.animations={},this.data=e;const r=parseFloat(e.meta.scale);r?(this.resolution=r,t.source.resolution=this.resolution):this.resolution=t.source._resolution,this._frames=this.data.frames,this._frameKeys=Object.keys(this._frames),this._batchIndex=0,this._callback=null}parse(){return new Promise(t=>{this._callback=t,this._batchIndex=0,this._frameKeys.length<=Me.BATCH_SIZE?(this._processFrames(0),this._processAnimations(),this._parseComplete()):this._nextBatch()})}_processFrames(t){let e=t;const r=Me.BATCH_SIZE;for(;e-t<r&&e<this._frameKeys.length;){const i=this._frameKeys[e],s=this._frames[i],o=s.frame;if(o){let a=null,l=null;const u=s.trimmed!==!1&&s.sourceSize?s.sourceSize:s.frame,c=new tt(0,0,Math.floor(u.w)/this.resolution,Math.floor(u.h)/this.resolution);s.rotated?a=new tt(Math.floor(o.x)/this.resolution,Math.floor(o.y)/this.resolution,Math.floor(o.h)/this.resolution,Math.floor(o.w)/this.resolution):a=new tt(Math.floor(o.x)/this.resolution,Math.floor(o.y)/this.resolution,Math.floor(o.w)/this.resolution,Math.floor(o.h)/this.resolution),s.trimmed!==!1&&s.spriteSourceSize&&(l=new tt(Math.floor(s.spriteSourceSize.x)/this.resolution,Math.floor(s.spriteSourceSize.y)/this.resolution,Math.floor(o.w)/this.resolution,Math.floor(o.h)/this.resolution)),this.textures[i]=new k({source:this.textureSource,frame:a,orig:c,trim:l,rotate:s.rotated?2:0,defaultAnchor:s.anchor,defaultBorders:s.borders,label:i.toString()})}e++}}_processAnimations(){const t=this.data.animations||{};for(const e in t){this.animations[e]=[];for(let r=0;r<t[e].length;r++){const i=t[e][r];this.animations[e].push(this.textures[i])}}}_parseComplete(){const t=this._callback;this._callback=null,this._batchIndex=0,t.call(this,this.textures)}_nextBatch(){this._processFrames(this._batchIndex*Me.BATCH_SIZE),this._batchIndex++,setTimeout(()=>{this._batchIndex*Me.BATCH_SIZE<this._frameKeys.length?this._nextBatch():(this._processAnimations(),this._parseComplete())},0)}destroy(t=!1){var e;for(const r in this.textures)this.textures[r].destroy();this._frames=null,this._frameKeys=null,this.data=null,this.textures=null,t&&((e=this._texture)==null||e.destroy(),this.textureSource.destroy()),this._texture=null,this.textureSource=null,this.linkedSheets=[]}};Rs.BATCH_SIZE=1e3;let wi=Rs;const _l=["jpg","png","jpeg","avif","webp","basis","etc2","bc7","bc6h","bc5","bc4","bc3","bc2","bc1","eac","astc"];function Es(n,t,e){const r={};if(n.forEach(i=>{r[i]=t}),Object.keys(t.textures).forEach(i=>{r[i]=t.textures[i]}),!e){const i=ft.dirname(n[0]);t.linkedSheets.forEach((s,o)=>{const a=Es([`${i}/${t.data.meta.related_multi_packs[o]}`],s,!0);Object.assign(r,a)})}return r}const bl={extension:O.Asset,cache:{test:n=>n instanceof wi,getCacheableAssets:(n,t)=>Es(n,t,!1)},resolver:{extension:{type:O.ResolveParser,name:"resolveSpritesheet"},test:n=>{const e=n.split("?")[0].split("."),r=e.pop(),i=e.pop();return r==="json"&&_l.includes(i)},parse:n=>{var e;const t=n.split(".");return{resolution:parseFloat(((e=ve.RETINA_PREFIX.exec(n))==null?void 0:e[1])??"1"),format:t[t.length-2],src:n}}},loader:{name:"spritesheetLoader",extension:{type:O.LoadParser,priority:Ut.Normal,name:"spritesheetLoader"},async testParse(n,t){return ft.extname(t.src).toLowerCase()===".json"&&!!n.frames},async parse(n,t,e){var u,c;const{texture:r,imageFilename:i}=(t==null?void 0:t.data)??{};let s=ft.dirname(t.src);s&&s.lastIndexOf("/")!==s.length-1&&(s+="/");let o;if(r instanceof k)o=r;else{const h=mr(s+(i??n.meta.image),t.src);o=(await e.load([h]))[h]}const a=new wi(o.source,n);await a.parse();const l=(u=n==null?void 0:n.meta)==null?void 0:u.related_multi_packs;if(Array.isArray(l)){const h=[];for(const d of l){if(typeof d!="string")continue;let p=s+d;(c=t.data)!=null&&c.ignoreMultiPack||(p=mr(p,t.src),h.push(e.load({src:p,data:{ignoreMultiPack:!0}})))}const f=await Promise.all(h);a.linkedSheets=f,f.forEach(d=>{d.linkedSheets=[a].concat(a.linkedSheets.filter(p=>p!==d))})}return a},async unload(n,t,e){await e.unload(n.textureSource._sourceOrigin),n.destroy(!1)}}};lt.add(bl);const Vn=Object.create(null),Ai=Object.create(null);function Wr(n,t){let e=Ai[n];return e===void 0&&(Vn[t]===void 0&&(Vn[t]=1),Ai[n]=e=Vn[t]++),e}let ne;function Us(){return(!ne||ne!=null&&ne.isContextLost())&&(ne=J.get().createCanvas().getContext("webgl",{})),ne}let Qe;function Sl(){if(!Qe){Qe="mediump";const n=Us();n&&n.getShaderPrecisionFormat&&(Qe=n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision?"highp":"mediump")}return Qe}function Cl(n,t,e){return t?n:e?(n=n.replace("out vec4 finalColor;",""),`
        
        #ifdef GL_ES // This checks if it is WebGL1
        #define in varying
        #define finalColor gl_FragColor
        #define texture texture2D
        #endif
        ${n}
        `):`
        
        #ifdef GL_ES // This checks if it is WebGL1
        #define in attribute
        #define out varying
        #endif
        ${n}
        `}function wl(n,t,e){const r=e?t.maxSupportedFragmentPrecision:t.maxSupportedVertexPrecision;if(n.substring(0,9)!=="precision"){let i=e?t.requestedFragmentPrecision:t.requestedVertexPrecision;return i==="highp"&&r!=="highp"&&(i="mediump"),`precision ${i} float;
${n}`}else if(r!=="highp"&&n.substring(0,15)==="precision highp")return n.replace("precision highp","precision mediump");return n}function Al(n,t){return t?`#version 300 es
${n}`:n}const Tl={},Pl={};function Fl(n,{name:t="pixi-program"},e=!0){t=t.replace(/\s+/g,"-"),t+=e?"-fragment":"-vertex";const r=e?Tl:Pl;return r[t]?(r[t]++,t+=`-${r[t]}`):r[t]=1,n.indexOf("#define SHADER_NAME")!==-1?n:`${`#define SHADER_NAME ${t}`}
${n}`}function zl(n,t){return t?n.replace("#version 300 es",""):n}const Wn={stripVersion:zl,ensurePrecision:wl,addProgramDefines:Cl,setProgramName:Fl,insertVersion:Al},Xn=Object.create(null),ks=class gr{constructor(t){t={...gr.defaultOptions,...t};const e=t.fragment.indexOf("#version 300 es")!==-1,r={stripVersion:e,ensurePrecision:{requestedFragmentPrecision:t.preferredFragmentPrecision,requestedVertexPrecision:t.preferredVertexPrecision,maxSupportedVertexPrecision:"highp",maxSupportedFragmentPrecision:Sl()},setProgramName:{name:t.name},addProgramDefines:e,insertVersion:e};let i=t.fragment,s=t.vertex;Object.keys(Wn).forEach(o=>{const a=r[o];i=Wn[o](i,a,!0),s=Wn[o](s,a,!1)}),this.fragment=i,this.vertex=s,this._key=Wr(`${this.vertex}:${this.fragment}`,"gl-program")}destroy(){this.fragment=null,this.vertex=null,this._attributeData=null,this._uniformData=null,this._uniformBlockData=null,this.transformFeedbackVaryings=null}static from(t){const e=`${t.vertex}:${t.fragment}`;return Xn[e]||(Xn[e]=new gr(t)),Xn[e]}};ks.defaultOptions={preferredVertexPrecision:"highp",preferredFragmentPrecision:"mediump"};let L=ks;const Ti={uint8x2:{size:2,stride:2,normalised:!1},uint8x4:{size:4,stride:4,normalised:!1},sint8x2:{size:2,stride:2,normalised:!1},sint8x4:{size:4,stride:4,normalised:!1},unorm8x2:{size:2,stride:2,normalised:!0},unorm8x4:{size:4,stride:4,normalised:!0},snorm8x2:{size:2,stride:2,normalised:!0},snorm8x4:{size:4,stride:4,normalised:!0},uint16x2:{size:2,stride:4,normalised:!1},uint16x4:{size:4,stride:8,normalised:!1},sint16x2:{size:2,stride:4,normalised:!1},sint16x4:{size:4,stride:8,normalised:!1},unorm16x2:{size:2,stride:4,normalised:!0},unorm16x4:{size:4,stride:8,normalised:!0},snorm16x2:{size:2,stride:4,normalised:!0},snorm16x4:{size:4,stride:8,normalised:!0},float16x2:{size:2,stride:4,normalised:!1},float16x4:{size:4,stride:8,normalised:!1},float32:{size:1,stride:4,normalised:!1},float32x2:{size:2,stride:8,normalised:!1},float32x3:{size:3,stride:12,normalised:!1},float32x4:{size:4,stride:16,normalised:!1},uint32:{size:1,stride:4,normalised:!1},uint32x2:{size:2,stride:8,normalised:!1},uint32x3:{size:3,stride:12,normalised:!1},uint32x4:{size:4,stride:16,normalised:!1},sint32:{size:1,stride:4,normalised:!1},sint32x2:{size:2,stride:8,normalised:!1},sint32x3:{size:3,stride:12,normalised:!1},sint32x4:{size:4,stride:16,normalised:!1}};function Ml(n){return Ti[n]??Ti.float32}const Il={f32:"float32","vec2<f32>":"float32x2","vec3<f32>":"float32x3","vec4<f32>":"float32x4",vec2f:"float32x2",vec3f:"float32x3",vec4f:"float32x4",i32:"sint32","vec2<i32>":"sint32x2","vec3<i32>":"sint32x3","vec4<i32>":"sint32x4",u32:"uint32","vec2<u32>":"uint32x2","vec3<u32>":"uint32x3","vec4<u32>":"uint32x4",bool:"uint32","vec2<bool>":"uint32x2","vec3<bool>":"uint32x3","vec4<bool>":"uint32x4"};function Ol({source:n,entryPoint:t}){const e={},r=n.indexOf(`fn ${t}`);if(r!==-1){const i=n.indexOf("->",r);if(i!==-1){const s=n.substring(r,i),o=/@location\((\d+)\)\s+([a-zA-Z0-9_]+)\s*:\s*([a-zA-Z0-9_<>]+)(?:,|\s|$)/g;let a;for(;(a=o.exec(s))!==null;){const l=Il[a[3]]??"float32";e[a[2]]={location:parseInt(a[1],10),format:l,stride:Ml(l).stride,offset:0,instance:!1,start:0}}}}return e}function Yn(n){var h,f;const t=/(^|[^/])@(group|binding)\(\d+\)[^;]+;/g,e=/@group\((\d+)\)/,r=/@binding\((\d+)\)/,i=/var(<[^>]+>)? (\w+)/,s=/:\s*(\w+)/,o=/struct\s+(\w+)\s*{([^}]+)}/g,a=/(\w+)\s*:\s*([\w\<\>]+)/g,l=/struct\s+(\w+)/,u=(h=n.match(t))==null?void 0:h.map(d=>({group:parseInt(d.match(e)[1],10),binding:parseInt(d.match(r)[1],10),name:d.match(i)[2],isUniform:d.match(i)[1]==="<uniform>",type:d.match(s)[1]}));if(!u)return{groups:[],structs:[]};const c=((f=n.match(o))==null?void 0:f.map(d=>{const p=d.match(l)[1],g=d.match(a).reduce((m,v)=>{const[x,y]=v.split(":");return m[x.trim()]=y.trim(),m},{});return g?{name:p,members:g}:null}).filter(({name:d})=>u.some(p=>p.type===d)))??[];return{groups:u,structs:c}}var Ie=(n=>(n[n.VERTEX=1]="VERTEX",n[n.FRAGMENT=2]="FRAGMENT",n[n.COMPUTE=4]="COMPUTE",n))(Ie||{});function Rl({groups:n}){const t=[];for(let e=0;e<n.length;e++){const r=n[e];t[r.group]||(t[r.group]=[]),r.isUniform?t[r.group].push({binding:r.binding,visibility:Ie.VERTEX|Ie.FRAGMENT,buffer:{type:"uniform"}}):r.type==="sampler"?t[r.group].push({binding:r.binding,visibility:Ie.FRAGMENT,sampler:{type:"filtering"}}):r.type==="texture_2d"&&t[r.group].push({binding:r.binding,visibility:Ie.FRAGMENT,texture:{sampleType:"float",viewDimension:"2d",multisampled:!1}})}return t}function El({groups:n}){const t=[];for(let e=0;e<n.length;e++){const r=n[e];t[r.group]||(t[r.group]={}),t[r.group][r.name]=r.binding}return t}function Ul(n,t){const e=new Set,r=new Set,i=[...n.structs,...t.structs].filter(o=>e.has(o.name)?!1:(e.add(o.name),!0)),s=[...n.groups,...t.groups].filter(o=>{const a=`${o.name}-${o.binding}`;return r.has(a)?!1:(r.add(a),!0)});return{structs:i,groups:s}}const Hn=Object.create(null);class B{constructor(t){var a,l;this._layoutKey=0;const{fragment:e,vertex:r,layout:i,gpuLayout:s,name:o}=t;if(this.name=o,this.fragment=e,this.vertex=r,e.source===r.source){const u=Yn(e.source);this.structsAndGroups=u}else{const u=Yn(r.source),c=Yn(e.source);this.structsAndGroups=Ul(u,c)}this.layout=i??El(this.structsAndGroups),this.gpuLayout=s??Rl(this.structsAndGroups),this.autoAssignGlobalUniforms=((a=this.layout[0])==null?void 0:a.globalUniforms)!==void 0,this.autoAssignLocalUniforms=((l=this.layout[1])==null?void 0:l.localUniforms)!==void 0,this._generateProgramKey()}_generateProgramKey(){const{vertex:t,fragment:e}=this,r=t.source+e.source+t.entryPoint+e.entryPoint;this._layoutKey=Wr(r,"program")}get attributeData(){return this._attributeData??(this._attributeData=Ol(this.vertex)),this._attributeData}destroy(){this.gpuLayout=null,this.layout=null,this.structsAndGroups=null,this.fragment=null,this.vertex=null}static from(t){const e=`${t.vertex.source}:${t.fragment.source}:${t.fragment.entryPoint}:${t.vertex.entryPoint}`;return Hn[e]||(Hn[e]=new B(t)),Hn[e]}}const Bs=["f32","i32","vec2<f32>","vec3<f32>","vec4<f32>","mat2x2<f32>","mat3x3<f32>","mat4x4<f32>","mat3x2<f32>","mat4x2<f32>","mat2x3<f32>","mat4x3<f32>","mat2x4<f32>","mat3x4<f32>"],kl=Bs.reduce((n,t)=>(n[t]=!0,n),{});function Bl(n,t){switch(n){case"f32":return 0;case"vec2<f32>":return new Float32Array(2*t);case"vec3<f32>":return new Float32Array(3*t);case"vec4<f32>":return new Float32Array(4*t);case"mat2x2<f32>":return new Float32Array([1,0,0,1]);case"mat3x3<f32>":return new Float32Array([1,0,0,0,1,0,0,0,1]);case"mat4x4<f32>":return new Float32Array([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1])}return null}const Ls=class Ds{constructor(t,e){this._touched=0,this.uid=et("uniform"),this._resourceType="uniformGroup",this._resourceId=et("resource"),this.isUniformGroup=!0,this._dirtyId=0,this.destroyed=!1,e={...Ds.defaultOptions,...e},this.uniformStructures=t;const r={};for(const i in t){const s=t[i];if(s.name=i,s.size=s.size??1,!kl[s.type])throw new Error(`Uniform type ${s.type} is not supported. Supported uniform types are: ${Bs.join(", ")}`);s.value??(s.value=Bl(s.type,s.size)),r[i]=s.value}this.uniforms=r,this._dirtyId=1,this.ubo=e.ubo,this.isStatic=e.isStatic,this._signature=Wr(Object.keys(r).map(i=>`${i}-${t[i].type}`).join("-"),"uniform-group")}update(){this._dirtyId++}};Ls.defaultOptions={ubo:!1,isStatic:!1};let Gs=Ls;class ln{constructor(t){this.resources=Object.create(null),this._dirty=!0;let e=0;for(const r in t){const i=t[r];this.setResource(i,e++)}this._updateKey()}_updateKey(){if(!this._dirty)return;this._dirty=!1;const t=[];let e=0;for(const r in this.resources)t[e++]=this.resources[r]._resourceId;this._key=t.join("|")}setResource(t,e){var i,s;const r=this.resources[e];t!==r&&(r&&((i=t.off)==null||i.call(t,"change",this.onResourceChange,this)),(s=t.on)==null||s.call(t,"change",this.onResourceChange,this),this.resources[e]=t,this._dirty=!0)}getResource(t){return this.resources[t]}_touch(t){const e=this.resources;for(const r in e)e[r]._touched=t}destroy(){var e;const t=this.resources;for(const r in t){const i=t[r];(e=i.off)==null||e.call(i,"change",this.onResourceChange,this)}this.resources=null}onResourceChange(t){if(this._dirty=!0,t.destroyed){const e=this.resources;for(const r in e)e[r]===t&&(e[r]=null)}else this._updateKey()}}var _n=(n=>(n[n.WEBGL=1]="WEBGL",n[n.WEBGPU=2]="WEBGPU",n[n.BOTH=3]="BOTH",n))(_n||{});class Xr extends St{constructor(t){super(),this._uniformBindMap=Object.create(null),this._ownedBindGroups=[];let{gpuProgram:e,glProgram:r,groups:i,resources:s,compatibleRenderers:o,groupMap:a}=t;this.gpuProgram=e,this.glProgram=r,o===void 0&&(o=0,e&&(o|=_n.WEBGPU),r&&(o|=_n.WEBGL)),this.compatibleRenderers=o;const l={};if(!s&&!i&&(s={}),s&&i)throw new Error("[Shader] Cannot have both resources and groups");if(!e&&i&&!a)throw new Error("[Shader] No group map or WebGPU shader provided - consider using resources instead.");if(!e&&i&&a)for(const u in a)for(const c in a[u]){const h=a[u][c];l[h]={group:u,binding:c,name:h}}else if(e&&i&&!a){const u=e.structsAndGroups.groups;a={},u.forEach(c=>{a[c.group]=a[c.group]||{},a[c.group][c.binding]=c.name,l[c.name]=c})}else if(s){i={},a={},e&&e.structsAndGroups.groups.forEach(h=>{a[h.group]=a[h.group]||{},a[h.group][h.binding]=h.name,l[h.name]=h});let u=0;for(const c in s)l[c]||(i[99]||(i[99]=new ln,this._ownedBindGroups.push(i[99])),l[c]={group:99,binding:u,name:c},a[99]=a[99]||{},a[99][u]=c,u++);for(const c in s){const h=c;let f=s[c];!f.source&&!f._resourceType&&(f=new Gs(f));const d=l[h];d&&(i[d.group]||(i[d.group]=new ln,this._ownedBindGroups.push(i[d.group])),i[d.group].setResource(f,d.binding))}}this.groups=i,this._uniformBindMap=a,this.resources=this._buildResourceAccessor(i,l)}addResource(t,e,r){var i,s;(i=this._uniformBindMap)[e]||(i[e]={}),(s=this._uniformBindMap[e])[r]||(s[r]=t),this.groups[e]||(this.groups[e]=new ln,this._ownedBindGroups.push(this.groups[e]))}_buildResourceAccessor(t,e){const r={};for(const i in e){const s=e[i];Object.defineProperty(r,s.name,{get(){return t[s.group].getResource(s.binding)},set(o){t[s.group].setResource(o,s.binding)}})}return r}destroy(t=!1){var e,r;this.emit("destroy",this),t&&((e=this.gpuProgram)==null||e.destroy(),(r=this.glProgram)==null||r.destroy()),this.gpuProgram=null,this.glProgram=null,this.removeAllListeners(),this._uniformBindMap=null,this._ownedBindGroups.forEach(i=>{i.destroy()}),this._ownedBindGroups=null,this.resources=null,this.groups=null}static from(t){const{gpu:e,gl:r,...i}=t;let s,o;return e&&(s=B.from(e)),r&&(o=L.from(r)),new Xr({gpuProgram:s,glProgram:o,...i})}}const Ll={normal:0,add:1,multiply:2,screen:3,overlay:4,erase:5,"normal-npm":6,"add-npm":7,"screen-npm":8},jn=0,qn=1,Kn=2,Zn=3,Qn=4,Jn=5,xr=class Ns{constructor(){this.data=0,this.blendMode="normal",this.polygonOffset=0,this.blend=!0,this.depthMask=!0}get blend(){return!!(this.data&1<<jn)}set blend(t){!!(this.data&1<<jn)!==t&&(this.data^=1<<jn)}get offsets(){return!!(this.data&1<<qn)}set offsets(t){!!(this.data&1<<qn)!==t&&(this.data^=1<<qn)}set cullMode(t){if(t==="none"){this.culling=!1;return}this.culling=!0,this.clockwiseFrontFace=t==="front"}get cullMode(){return this.culling?this.clockwiseFrontFace?"front":"back":"none"}get culling(){return!!(this.data&1<<Kn)}set culling(t){!!(this.data&1<<Kn)!==t&&(this.data^=1<<Kn)}get depthTest(){return!!(this.data&1<<Zn)}set depthTest(t){!!(this.data&1<<Zn)!==t&&(this.data^=1<<Zn)}get depthMask(){return!!(this.data&1<<Jn)}set depthMask(t){!!(this.data&1<<Jn)!==t&&(this.data^=1<<Jn)}get clockwiseFrontFace(){return!!(this.data&1<<Qn)}set clockwiseFrontFace(t){!!(this.data&1<<Qn)!==t&&(this.data^=1<<Qn)}get blendMode(){return this._blendMode}set blendMode(t){this.blend=t!=="none",this._blendMode=t,this._blendModeId=Ll[t]||0}get polygonOffset(){return this._polygonOffset}set polygonOffset(t){this.offsets=!!t,this._polygonOffset=t}toString(){return`[pixi.js/core:State blendMode=${this.blendMode} clockwiseFrontFace=${this.clockwiseFrontFace} culling=${this.culling} depthMask=${this.depthMask} polygonOffset=${this.polygonOffset}]`}static for2d(){const t=new Ns;return t.depthTest=!1,t.blend=!0,t}};xr.default2d=xr.for2d();let Dl=xr;const $s=class vr extends Xr{constructor(t){t={...vr.defaultOptions,...t},super(t),this.enabled=!0,this._state=Dl.for2d(),this.blendMode=t.blendMode,this.padding=t.padding,typeof t.antialias=="boolean"?this.antialias=t.antialias?"on":"off":this.antialias=t.antialias,this.resolution=t.resolution,this.blendRequired=t.blendRequired,this.addResource("uTexture",0,1)}apply(t,e,r,i){t.applyFilter(this,e,r,i)}get blendMode(){return this._state.blendMode}set blendMode(t){this._state.blendMode=t}static from(t){const{gpu:e,gl:r,...i}=t;let s,o;return e&&(s=B.from(e)),r&&(o=L.from(r)),new vr({gpuProgram:s,glProgram:o,...i})}};$s.defaultOptions={blendMode:"normal",resolution:1,padding:0,antialias:"off",blendRequired:!1};let D=$s;const yr=[];lt.handleByNamedList(O.Environment,yr);async function Gl(n){if(!n)for(let t=0;t<yr.length;t++){const e=yr[t];if(e.value.test()){await e.value.load();return}}}let Te;function Nl(){if(typeof Te=="boolean")return Te;try{Te=new Function("param1","param2","param3","return param1[param2] === param3;")({a:"b"},"a","b")===!0}catch{Te=!1}return Te}var Yr={exports:{}};Yr.exports=wn;Yr.exports.default=wn;function wn(n,t,e){e=e||2;var r=t&&t.length,i=r?t[0]*e:n.length,s=Vs(n,0,i,e,!0),o=[];if(!s||s.next===s.prev)return o;var a,l,u,c,h,f,d;if(r&&(s=Yl(n,t,s,e)),n.length>80*e){a=u=n[0],l=c=n[1];for(var p=e;p<i;p+=e)h=n[p],f=n[p+1],h<a&&(a=h),f<l&&(l=f),h>u&&(u=h),f>c&&(c=f);d=Math.max(u-a,c-l),d=d!==0?32767/d:0}return Be(s,o,e,a,l,d,0),o}function Vs(n,t,e,r,i){var s,o;if(i===Sr(n,t,e,r)>0)for(s=t;s<e;s+=r)o=Pi(s,n[s],n[s+1],o);else for(s=e-r;s>=t;s-=r)o=Pi(s,n[s],n[s+1],o);return o&&An(o,o.next)&&(De(o),o=o.next),o}function Qt(n,t){if(!n)return n;t||(t=n);var e=n,r;do if(r=!1,!e.steiner&&(An(e,e.next)||Q(e.prev,e,e.next)===0)){if(De(e),e=t=e.prev,e===e.next)break;r=!0}else e=e.next;while(r||e!==t);return t}function Be(n,t,e,r,i,s,o){if(n){!o&&s&&Zl(n,r,i,s);for(var a=n,l,u;n.prev!==n.next;){if(l=n.prev,u=n.next,s?Vl(n,r,i,s):$l(n)){t.push(l.i/e|0),t.push(n.i/e|0),t.push(u.i/e|0),De(n),n=u.next,a=u.next;continue}if(n=u,n===a){o?o===1?(n=Wl(Qt(n),t,e),Be(n,t,e,r,i,s,2)):o===2&&Xl(n,t,e,r,i,s):Be(Qt(n),t,e,r,i,s,1);break}}}}function $l(n){var t=n.prev,e=n,r=n.next;if(Q(t,e,r)>=0)return!1;for(var i=t.x,s=e.x,o=r.x,a=t.y,l=e.y,u=r.y,c=i<s?i<o?i:o:s<o?s:o,h=a<l?a<u?a:u:l<u?l:u,f=i>s?i>o?i:o:s>o?s:o,d=a>l?a>u?a:u:l>u?l:u,p=r.next;p!==t;){if(p.x>=c&&p.x<=f&&p.y>=h&&p.y<=d&&ue(i,a,s,l,o,u,p.x,p.y)&&Q(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function Vl(n,t,e,r){var i=n.prev,s=n,o=n.next;if(Q(i,s,o)>=0)return!1;for(var a=i.x,l=s.x,u=o.x,c=i.y,h=s.y,f=o.y,d=a<l?a<u?a:u:l<u?l:u,p=c<h?c<f?c:f:h<f?h:f,g=a>l?a>u?a:u:l>u?l:u,m=c>h?c>f?c:f:h>f?h:f,v=_r(d,p,t,e,r),x=_r(g,m,t,e,r),y=n.prevZ,_=n.nextZ;y&&y.z>=v&&_&&_.z<=x;){if(y.x>=d&&y.x<=g&&y.y>=p&&y.y<=m&&y!==i&&y!==o&&ue(a,c,l,h,u,f,y.x,y.y)&&Q(y.prev,y,y.next)>=0||(y=y.prevZ,_.x>=d&&_.x<=g&&_.y>=p&&_.y<=m&&_!==i&&_!==o&&ue(a,c,l,h,u,f,_.x,_.y)&&Q(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;y&&y.z>=v;){if(y.x>=d&&y.x<=g&&y.y>=p&&y.y<=m&&y!==i&&y!==o&&ue(a,c,l,h,u,f,y.x,y.y)&&Q(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;_&&_.z<=x;){if(_.x>=d&&_.x<=g&&_.y>=p&&_.y<=m&&_!==i&&_!==o&&ue(a,c,l,h,u,f,_.x,_.y)&&Q(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function Wl(n,t,e){var r=n;do{var i=r.prev,s=r.next.next;!An(i,s)&&Ws(i,r,r.next,s)&&Le(i,s)&&Le(s,i)&&(t.push(i.i/e|0),t.push(r.i/e|0),t.push(s.i/e|0),De(r),De(r.next),r=n=s),r=r.next}while(r!==n);return Qt(r)}function Xl(n,t,e,r,i,s){var o=n;do{for(var a=o.next.next;a!==o.prev;){if(o.i!==a.i&&tu(o,a)){var l=Xs(o,a);o=Qt(o,o.next),l=Qt(l,l.next),Be(o,t,e,r,i,s,0),Be(l,t,e,r,i,s,0);return}a=a.next}o=o.next}while(o!==n)}function Yl(n,t,e,r){var i=[],s,o,a,l,u;for(s=0,o=t.length;s<o;s++)a=t[s]*r,l=s<o-1?t[s+1]*r:n.length,u=Vs(n,a,l,r,!1),u===u.next&&(u.steiner=!0),i.push(Jl(u));for(i.sort(Hl),s=0;s<i.length;s++)e=jl(i[s],e);return e}function Hl(n,t){return n.x-t.x}function jl(n,t){var e=ql(n,t);if(!e)return t;var r=Xs(e,n);return Qt(r,r.next),Qt(e,e.next)}function ql(n,t){var e=t,r=n.x,i=n.y,s=-1/0,o;do{if(i<=e.y&&i>=e.next.y&&e.next.y!==e.y){var a=e.x+(i-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(a<=r&&a>s&&(s=a,o=e.x<e.next.x?e:e.next,a===r))return o}e=e.next}while(e!==t);if(!o)return null;var l=o,u=o.x,c=o.y,h=1/0,f;e=o;do r>=e.x&&e.x>=u&&r!==e.x&&ue(i<c?r:s,i,u,c,i<c?s:r,i,e.x,e.y)&&(f=Math.abs(i-e.y)/(r-e.x),Le(e,n)&&(f<h||f===h&&(e.x>o.x||e.x===o.x&&Kl(o,e)))&&(o=e,h=f)),e=e.next;while(e!==l);return o}function Kl(n,t){return Q(n.prev,n,t.prev)<0&&Q(t.next,n,n.next)<0}function Zl(n,t,e,r){var i=n;do i.z===0&&(i.z=_r(i.x,i.y,t,e,r)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==n);i.prevZ.nextZ=null,i.prevZ=null,Ql(i)}function Ql(n){var t,e,r,i,s,o,a,l,u=1;do{for(e=n,n=null,s=null,o=0;e;){for(o++,r=e,a=0,t=0;t<u&&(a++,r=r.nextZ,!!r);t++);for(l=u;a>0||l>0&&r;)a!==0&&(l===0||!r||e.z<=r.z)?(i=e,e=e.nextZ,a--):(i=r,r=r.nextZ,l--),s?s.nextZ=i:n=i,i.prevZ=s,s=i;e=r}s.nextZ=null,u*=2}while(o>1);return n}function _r(n,t,e,r,i){return n=(n-e)*i|0,t=(t-r)*i|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,n|t<<1}function Jl(n){var t=n,e=n;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==n);return e}function ue(n,t,e,r,i,s,o,a){return(i-o)*(t-a)>=(n-o)*(s-a)&&(n-o)*(r-a)>=(e-o)*(t-a)&&(e-o)*(s-a)>=(i-o)*(r-a)}function tu(n,t){return n.next.i!==t.i&&n.prev.i!==t.i&&!eu(n,t)&&(Le(n,t)&&Le(t,n)&&nu(n,t)&&(Q(n.prev,n,t.prev)||Q(n,t.prev,t))||An(n,t)&&Q(n.prev,n,n.next)>0&&Q(t.prev,t,t.next)>0)}function Q(n,t,e){return(t.y-n.y)*(e.x-t.x)-(t.x-n.x)*(e.y-t.y)}function An(n,t){return n.x===t.x&&n.y===t.y}function Ws(n,t,e,r){var i=tn(Q(n,t,e)),s=tn(Q(n,t,r)),o=tn(Q(e,r,n)),a=tn(Q(e,r,t));return!!(i!==s&&o!==a||i===0&&Je(n,e,t)||s===0&&Je(n,r,t)||o===0&&Je(e,n,r)||a===0&&Je(e,t,r))}function Je(n,t,e){return t.x<=Math.max(n.x,e.x)&&t.x>=Math.min(n.x,e.x)&&t.y<=Math.max(n.y,e.y)&&t.y>=Math.min(n.y,e.y)}function tn(n){return n>0?1:n<0?-1:0}function eu(n,t){var e=n;do{if(e.i!==n.i&&e.next.i!==n.i&&e.i!==t.i&&e.next.i!==t.i&&Ws(e,e.next,n,t))return!0;e=e.next}while(e!==n);return!1}function Le(n,t){return Q(n.prev,n,n.next)<0?Q(n,t,n.next)>=0&&Q(n,n.prev,t)>=0:Q(n,t,n.prev)<0||Q(n,n.next,t)<0}function nu(n,t){var e=n,r=!1,i=(n.x+t.x)/2,s=(n.y+t.y)/2;do e.y>s!=e.next.y>s&&e.next.y!==e.y&&i<(e.next.x-e.x)*(s-e.y)/(e.next.y-e.y)+e.x&&(r=!r),e=e.next;while(e!==n);return r}function Xs(n,t){var e=new br(n.i,n.x,n.y),r=new br(t.i,t.x,t.y),i=n.next,s=t.prev;return n.next=t,t.prev=n,e.next=i,i.prev=e,r.next=e,e.prev=r,s.next=r,r.prev=s,r}function Pi(n,t,e,r){var i=new br(n,t,e);return r?(i.next=r.next,i.prev=r,r.next.prev=i,r.next=i):(i.prev=i,i.next=i),i}function De(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function br(n,t,e){this.i=n,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}wn.deviation=function(n,t,e,r){var i=t&&t.length,s=i?t[0]*e:n.length,o=Math.abs(Sr(n,0,s,e));if(i)for(var a=0,l=t.length;a<l;a++){var u=t[a]*e,c=a<l-1?t[a+1]*e:n.length;o-=Math.abs(Sr(n,u,c,e))}var h=0;for(a=0;a<r.length;a+=3){var f=r[a]*e,d=r[a+1]*e,p=r[a+2]*e;h+=Math.abs((n[f]-n[p])*(n[d+1]-n[f+1])-(n[f]-n[d])*(n[p+1]-n[f+1]))}return o===0&&h===0?0:Math.abs((h-o)/o)};function Sr(n,t,e,r){for(var i=0,s=t,o=e-r;s<e;s+=r)i+=(n[o]-n[s])*(n[s+1]+n[o+1]),o=s;return i}wn.flatten=function(n){for(var t=n[0][0].length,e={vertices:[],holes:[],dimensions:t},r=0,i=0;i<n.length;i++){for(var s=0;s<n[i].length;s++)for(var o=0;o<t;o++)e.vertices.push(n[i][s][o]);i>0&&(r+=n[i-1].length,e.holes.push(r))}return e};var ru=Yr.exports;const iu=Nr(ru);var Ys=(n=>(n[n.NONE=0]="NONE",n[n.COLOR=16384]="COLOR",n[n.STENCIL=1024]="STENCIL",n[n.DEPTH=256]="DEPTH",n[n.COLOR_DEPTH=16640]="COLOR_DEPTH",n[n.COLOR_STENCIL=17408]="COLOR_STENCIL",n[n.DEPTH_STENCIL=1280]="DEPTH_STENCIL",n[n.ALL=17664]="ALL",n))(Ys||{});class su{constructor(t){this.items=[],this._name=t}emit(t,e,r,i,s,o,a,l){const{name:u,items:c}=this;for(let h=0,f=c.length;h<f;h++)c[h][u](t,e,r,i,s,o,a,l);return this}add(t){return t[this._name]&&(this.remove(t),this.items.push(t)),this}remove(t){const e=this.items.indexOf(t);return e!==-1&&this.items.splice(e,1),this}contains(t){return this.items.indexOf(t)!==-1}removeAll(){return this.items.length=0,this}destroy(){this.removeAll(),this.items=null,this._name=null}get empty(){return this.items.length===0}get name(){return this._name}}const ou=["init","destroy","contextChange","resolutionChange","reset","renderEnd","renderStart","render","update","postrender","prerender"],Hs=class js extends St{constructor(t){super(),this.runners=Object.create(null),this.renderPipes=Object.create(null),this._initOptions={},this._systemsHash=Object.create(null),this.type=t.type,this.name=t.name,this.config=t;const e=[...ou,...this.config.runners??[]];this._addRunners(...e),this._unsafeEvalCheck()}async init(t={}){const e=t.skipExtensionImports===!0?!0:t.manageImports===!1;await Gl(e),this._addSystems(this.config.systems),this._addPipes(this.config.renderPipes,this.config.renderPipeAdaptors);for(const r in this._systemsHash)t={...this._systemsHash[r].constructor.defaultOptions,...t};t={...js.defaultOptions,...t},this._roundPixels=t.roundPixels?1:0;for(let r=0;r<this.runners.init.items.length;r++)await this.runners.init.items[r].init(t);this._initOptions=t}render(t,e){let r=t;if(r instanceof rt&&(r={container:r},e&&(I(Y,"passing a second argument is deprecated, please use render options instead"),r.target=e.renderTexture)),r.target||(r.target=this.view.renderTarget),r.target===this.view.renderTarget&&(this._lastObjectRendered=r.container,r.clearColor=this.background.colorRgba),r.clearColor){const i=Array.isArray(r.clearColor)&&r.clearColor.length===4;r.clearColor=i?r.clearColor:G.shared.setValue(r.clearColor).toArray()}r.transform||(r.container.updateLocalTransform(),r.transform=r.container.localTransform),this.runners.prerender.emit(r),this.runners.renderStart.emit(r),this.runners.render.emit(r),this.runners.renderEnd.emit(r),this.runners.postrender.emit(r)}resize(t,e,r){this.view.resize(t,e,r),this.emit("resize",this.view.screen.width,this.view.screen.height)}clear(t={}){const e=this;t.target||(t.target=e.renderTarget.renderTarget),t.clearColor||(t.clearColor=this.background.colorRgba),t.clear??(t.clear=Ys.ALL);const{clear:r,clearColor:i,target:s}=t;G.shared.setValue(i??this.background.colorRgba),e.renderTarget.clear(s,r,G.shared.toArray())}get resolution(){return this.view.resolution}set resolution(t){this.view.resolution=t,this.runners.resolutionChange.emit(t)}get width(){return this.view.texture.frame.width}get height(){return this.view.texture.frame.height}get canvas(){return this.view.canvas}get lastObjectRendered(){return this._lastObjectRendered}get renderingToScreen(){return this.renderTarget.renderingToScreen}get screen(){return this.view.screen}_addRunners(...t){t.forEach(e=>{this.runners[e]=new su(e)})}_addSystems(t){let e;for(e in t){const r=t[e];this._addSystem(r.value,r.name)}}_addSystem(t,e){const r=new t(this);if(this[e])throw new Error(`Whoops! The name "${e}" is already in use`);this[e]=r,this._systemsHash[e]=r;for(const i in this.runners)this.runners[i].add(r);return this}_addPipes(t,e){const r=e.reduce((i,s)=>(i[s.name]=s.value,i),{});t.forEach(i=>{const s=i.value,o=i.name,a=r[o];this.renderPipes[o]=new s(this,a?new a:null)})}destroy(t=!1){this.runners.destroy.items.reverse(),this.runners.destroy.emit(t),Object.values(this.runners).forEach(e=>{e.destroy()}),this._systemsHash=null,this.renderPipes=null}generateTexture(t){return this.textureGenerator.generateTexture(t)}get roundPixels(){return!!this._roundPixels}_unsafeEvalCheck(){if(!Nl())throw new Error("Current environment does not allow unsafe-eval, please use pixi.js/unsafe-eval module to enable support.")}};Hs.defaultOptions={resolution:1,failIfMajorPerformanceCaveat:!1,roundPixels:!1};let qs=Hs,en;function au(n){return en!==void 0||(en=(()=>{var e;const t={stencil:!0,failIfMajorPerformanceCaveat:n??qs.defaultOptions.failIfMajorPerformanceCaveat};try{if(!J.get().getWebGLRenderingContext())return!1;let i=J.get().createCanvas().getContext("webgl",t);const s=!!((e=i==null?void 0:i.getContextAttributes())!=null&&e.stencil);if(i){const o=i.getExtension("WEBGL_lose_context");o&&o.loseContext()}return i=null,s}catch{return!1}})()),en}let nn;async function lu(n={}){return nn!==void 0||(nn=await(async()=>{if(!J.get().getNavigator().gpu)return!1;try{return await(await navigator.gpu.requestAdapter(n)).requestDevice(),!0}catch{return!1}})()),nn}const Fi=["webgl","webgpu","canvas"];async function uu(n){let t=[];n.preference?(t.push(n.preference),Fi.forEach(s=>{s!==n.preference&&t.push(s)})):t=Fi.slice();let e,r={};for(let s=0;s<t.length;s++){const o=t[s];if(o==="webgpu"&&await lu()){const{WebGPURenderer:a}=await gn(async()=>{const{WebGPURenderer:l}=await import("./WebGPURenderer-CfVowmPT.js");return{WebGPURenderer:l}},__vite__mapDeps([4,2,5]));e=a,r={...n,...n.webgpu};break}else if(o==="webgl"&&au(n.failIfMajorPerformanceCaveat??qs.defaultOptions.failIfMajorPerformanceCaveat)){const{WebGLRenderer:a}=await gn(async()=>{const{WebGLRenderer:l}=await import("./WebGLRenderer-CYiHy3hY.js");return{WebGLRenderer:l}},__vite__mapDeps([6,2,3,5]));e=a,r={...n,...n.webgl};break}else if(o==="canvas")throw r={...n},new Error("CanvasRenderer is not yet implemented")}if(delete r.webgpu,delete r.webgl,!e)throw new Error("No available renderer for the current environment");const i=new e;return await i.init(r),i}class Ks{static init(){var t;(t=globalThis.__PIXI_APP_INIT__)==null||t.call(globalThis,this)}static destroy(){}}Ks.extension=O.Application;class cu{constructor(t){this._renderer=t}init(){var t;(t=globalThis.__PIXI_RENDERER_INIT__)==null||t.call(globalThis,this._renderer)}destroy(){this._renderer=null}}cu.extension={type:[O.WebGLSystem,O.WebGPUSystem],name:"initHook",priority:-10};const Zs=class Cr{constructor(...t){this.stage=new rt,t[0]!==void 0&&I(Y,"Application constructor options are deprecated, please use Application.init() instead.")}async init(t){t={...t},this.renderer=await uu(t),Cr._plugins.forEach(e=>{e.init.call(this,t)})}render(){this.renderer.render({container:this.stage})}get canvas(){return this.renderer.canvas}get view(){return I(Y,"Application.view is deprecated, please use Application.canvas instead."),this.renderer.canvas}get screen(){return this.renderer.screen}destroy(t=!1,e=!1){const r=Cr._plugins.slice(0);r.reverse(),r.forEach(i=>{i.destroy.call(this)}),this.stage.destroy(e),this.stage=null,this.renderer.destroy(t),this.renderer=null}};Zs._plugins=[];let Qs=Zs;lt.handleByList(O.Application,Qs._plugins);lt.add(Ks);class Js extends St{constructor(){super(...arguments),this.chars=Object.create(null),this.lineHeight=0,this.fontFamily="",this.fontMetrics={fontSize:0,ascent:0,descent:0},this.baseLineOffset=0,this.distanceField={type:"none",range:0},this.pages=[],this.applyFillAsTint=!0,this.baseMeasurementFontSize=100,this.baseRenderedFontSize=100}get font(){return I(Y,"BitmapFont.font is deprecated, please use BitmapFont.fontFamily instead."),this.fontFamily}get pageTextures(){return I(Y,"BitmapFont.pageTextures is deprecated, please use BitmapFont.pages instead."),this.pages}get size(){return I(Y,"BitmapFont.size is deprecated, please use BitmapFont.fontMetrics.fontSize instead."),this.fontMetrics.fontSize}get distanceFieldRange(){return I(Y,"BitmapFont.distanceFieldRange is deprecated, please use BitmapFont.distanceField.range instead."),this.distanceField.range}get distanceFieldType(){return I(Y,"BitmapFont.distanceFieldType is deprecated, please use BitmapFont.distanceField.type instead."),this.distanceField.type}destroy(t=!1){var e;this.emit("destroy",this),this.removeAllListeners();for(const r in this.chars)(e=this.chars[r].texture)==null||e.destroy();this.chars=null,t&&(this.pages.forEach(r=>r.texture.destroy(!0)),this.pages=null)}}const to=class wr{constructor(t,e,r,i){this.uid=et("fillGradient"),this.type="linear",this.gradientStops=[],this._styleKey=null,this.x0=t,this.y0=e,this.x1=r,this.y1=i}addColorStop(t,e){return this.gradientStops.push({offset:t,color:G.shared.setValue(e).toHexa()}),this._styleKey=null,this}buildLinearGradient(){const t=wr.defaultTextureSize,{gradientStops:e}=this,r=J.get().createCanvas();r.width=t,r.height=t;const i=r.getContext("2d"),s=i.createLinearGradient(0,0,wr.defaultTextureSize,1);for(let g=0;g<e.length;g++){const m=e[g];s.addColorStop(m.offset,m.color)}i.fillStyle=s,i.fillRect(0,0,t,t),this.texture=new k({source:new te({resource:r,addressModeU:"clamp-to-edge",addressModeV:"repeat"})});const{x0:o,y0:a,x1:l,y1:u}=this,c=new X,h=l-o,f=u-a,d=Math.sqrt(h*h+f*f),p=Math.atan2(f,h);c.translate(-o,-a),c.scale(1/t,1/t),c.rotate(-p),c.scale(256/d,1),this.transform=c,this._styleKey=null}get styleKey(){if(this._styleKey)return this._styleKey;const t=this.gradientStops.map(i=>`${i.offset}-${i.color}`).join("-"),e=this.texture.uid,r=this.transform.toArray().join("-");return`fill-gradient-${this.uid}-${t}-${e}-${r}-${this.x0}-${this.y0}-${this.x1}-${this.y1}`}};to.defaultTextureSize=256;let ge=to;const zi={repeat:{addressModeU:"repeat",addressModeV:"repeat"},"repeat-x":{addressModeU:"repeat",addressModeV:"clamp-to-edge"},"repeat-y":{addressModeU:"clamp-to-edge",addressModeV:"repeat"},"no-repeat":{addressModeU:"clamp-to-edge",addressModeV:"clamp-to-edge"}};class Tn{constructor(t,e){this.uid=et("fillPattern"),this.transform=new X,this._styleKey=null,this.texture=t,this.transform.scale(1/t.frame.width,1/t.frame.height),e&&(t.source.style.addressModeU=zi[e].addressModeU,t.source.style.addressModeV=zi[e].addressModeV)}setTransform(t){const e=this.texture;this.transform.copyFrom(t),this.transform.invert(),this.transform.scale(1/e.frame.width,1/e.frame.height),this._styleKey=null}get styleKey(){return this._styleKey?this._styleKey:(this._styleKey=`fill-pattern-${this.uid}-${this.texture.uid}-${this.transform.toArray().join("-")}`,this._styleKey)}}var hu=du,tr={a:7,c:6,h:1,l:2,m:2,q:4,s:4,t:2,v:1,z:0},fu=/([astvzqmhlc])([^astvzqmhlc]*)/ig;function du(n){var t=[];return n.replace(fu,function(e,r,i){var s=r.toLowerCase();for(i=mu(i),s=="m"&&i.length>2&&(t.push([r].concat(i.splice(0,2))),s="l",r=r=="m"?"l":"L");;){if(i.length==tr[s])return i.unshift(r),t.push(i);if(i.length<tr[s])throw new Error("malformed path data");t.push([r].concat(i.splice(0,tr[s])))}}),t}var pu=/-?[0-9]*\.?[0-9]+(?:e[-+]?\d+)?/ig;function mu(n){var t=n.match(pu);return t?t.map(Number):[]}const gu=Nr(hu);function xu(n,t){const e=gu(n),r=[];let i=null,s=0,o=0;for(let a=0;a<e.length;a++){const l=e[a],u=l[0],c=l;switch(u){case"M":s=c[1],o=c[2],t.moveTo(s,o);break;case"m":s+=c[1],o+=c[2],t.moveTo(s,o);break;case"H":s=c[1],t.lineTo(s,o);break;case"h":s+=c[1],t.lineTo(s,o);break;case"V":o=c[1],t.lineTo(s,o);break;case"v":o+=c[1],t.lineTo(s,o);break;case"L":s=c[1],o=c[2],t.lineTo(s,o);break;case"l":s+=c[1],o+=c[2],t.lineTo(s,o);break;case"C":s=c[5],o=c[6],t.bezierCurveTo(c[1],c[2],c[3],c[4],s,o);break;case"c":t.bezierCurveTo(s+c[1],o+c[2],s+c[3],o+c[4],s+c[5],o+c[6]),s+=c[5],o+=c[6];break;case"S":s=c[3],o=c[4],t.bezierCurveToShort(c[1],c[2],s,o);break;case"s":t.bezierCurveToShort(s+c[1],o+c[2],s+c[3],o+c[4]),s+=c[3],o+=c[4];break;case"Q":s=c[3],o=c[4],t.quadraticCurveTo(c[1],c[2],s,o);break;case"q":t.quadraticCurveTo(s+c[1],o+c[2],s+c[3],o+c[4]),s+=c[3],o+=c[4];break;case"T":s=c[1],o=c[2],t.quadraticCurveToShort(s,o);break;case"t":s+=c[1],o+=c[2],t.quadraticCurveToShort(s,o);break;case"A":s=c[6],o=c[7],t.arcToSvg(c[1],c[2],c[3],c[4],c[5],s,o);break;case"a":s+=c[6],o+=c[7],t.arcToSvg(c[1],c[2],c[3],c[4],c[5],s,o);break;case"Z":case"z":t.closePath(),r.length>0&&(i=r.pop(),i?(s=i.startX,o=i.startY):(s=0,o=0)),i=null;break;default:nt(`Unknown SVG path command: ${u}`)}u!=="Z"&&u!=="z"&&i===null&&(i={startX:s,startY:o},r.push(i))}return t}class Hr{constructor(t=0,e=0,r=0){this.type="circle",this.x=t,this.y=e,this.radius=r}clone(){return new Hr(this.x,this.y,this.radius)}contains(t,e){if(this.radius<=0)return!1;const r=this.radius*this.radius;let i=this.x-t,s=this.y-e;return i*=i,s*=s,i+s<=r}strokeContains(t,e,r){if(this.radius===0)return!1;const i=this.x-t,s=this.y-e,o=this.radius,a=r/2,l=Math.sqrt(i*i+s*s);return l<o+a&&l>o-a}getBounds(t){return t=t||new tt,t.x=this.x-this.radius,t.y=this.y-this.radius,t.width=this.radius*2,t.height=this.radius*2,t}copyFrom(t){return this.x=t.x,this.y=t.y,this.radius=t.radius,this}copyTo(t){return t.copyFrom(this),t}toString(){return`[pixi.js/math:Circle x=${this.x} y=${this.y} radius=${this.radius}]`}}class jr{constructor(t=0,e=0,r=0,i=0){this.type="ellipse",this.x=t,this.y=e,this.halfWidth=r,this.halfHeight=i}clone(){return new jr(this.x,this.y,this.halfWidth,this.halfHeight)}contains(t,e){if(this.halfWidth<=0||this.halfHeight<=0)return!1;let r=(t-this.x)/this.halfWidth,i=(e-this.y)/this.halfHeight;return r*=r,i*=i,r+i<=1}strokeContains(t,e,r){const{halfWidth:i,halfHeight:s}=this;if(i<=0||s<=0)return!1;const o=r/2,a=i-o,l=s-o,u=i+o,c=s+o,h=t-this.x,f=e-this.y,d=h*h/(a*a)+f*f/(l*l),p=h*h/(u*u)+f*f/(c*c);return d>1&&p<=1}getBounds(t){return t=t||new tt,t.x=this.x-this.halfWidth,t.y=this.y-this.halfHeight,t.width=this.halfWidth*2,t.height=this.halfHeight*2,t}copyFrom(t){return this.x=t.x,this.y=t.y,this.halfWidth=t.halfWidth,this.halfHeight=t.halfHeight,this}copyTo(t){return t.copyFrom(this),t}toString(){return`[pixi.js/math:Ellipse x=${this.x} y=${this.y} halfWidth=${this.halfWidth} halfHeight=${this.halfHeight}]`}}function vu(n,t,e,r,i,s){const o=n-e,a=t-r,l=i-e,u=s-r,c=o*l+a*u,h=l*l+u*u;let f=-1;h!==0&&(f=c/h);let d,p;f<0?(d=e,p=r):f>1?(d=i,p=s):(d=e+f*l,p=r+f*u);const g=n-d,m=t-p;return g*g+m*m}class Re{constructor(...t){this.type="polygon";let e=Array.isArray(t[0])?t[0]:t;if(typeof e[0]!="number"){const r=[];for(let i=0,s=e.length;i<s;i++)r.push(e[i].x,e[i].y);e=r}this.points=e,this.closePath=!0}clone(){const t=this.points.slice(),e=new Re(t);return e.closePath=this.closePath,e}contains(t,e){let r=!1;const i=this.points.length/2;for(let s=0,o=i-1;s<i;o=s++){const a=this.points[s*2],l=this.points[s*2+1],u=this.points[o*2],c=this.points[o*2+1];l>e!=c>e&&t<(u-a)*((e-l)/(c-l))+a&&(r=!r)}return r}strokeContains(t,e,r){const i=r/2,s=i*i,{points:o}=this,a=o.length-(this.closePath?0:2);for(let l=0;l<a;l+=2){const u=o[l],c=o[l+1],h=o[(l+2)%o.length],f=o[(l+3)%o.length];if(vu(t,e,u,c,h,f)<=s)return!0}return!1}getBounds(t){t=t||new tt;const e=this.points;let r=1/0,i=-1/0,s=1/0,o=-1/0;for(let a=0,l=e.length;a<l;a+=2){const u=e[a],c=e[a+1];r=u<r?u:r,i=u>i?u:i,s=c<s?c:s,o=c>o?c:o}return t.x=r,t.width=i-r,t.y=s,t.height=o-s,t}copyFrom(t){return this.points=t.points.slice(),this.closePath=t.closePath,this}copyTo(t){return t.copyFrom(this),t}toString(){return`[pixi.js/math:PolygoncloseStroke=${this.closePath}points=${this.points.reduce((t,e)=>`${t}, ${e}`,"")}]`}get lastX(){return this.points[this.points.length-2]}get lastY(){return this.points[this.points.length-1]}get x(){return this.points[this.points.length-2]}get y(){return this.points[this.points.length-1]}}const rn=(n,t,e,r,i,s)=>{const o=n-e,a=t-r,l=Math.sqrt(o*o+a*a);return l>=i-s&&l<=i+s};class qr{constructor(t=0,e=0,r=0,i=0,s=20){this.type="roundedRectangle",this.x=t,this.y=e,this.width=r,this.height=i,this.radius=s}getBounds(t){return t=t||new tt,t.x=this.x,t.y=this.y,t.width=this.width,t.height=this.height,t}clone(){return new qr(this.x,this.y,this.width,this.height,this.radius)}copyFrom(t){return this.x=t.x,this.y=t.y,this.width=t.width,this.height=t.height,this}copyTo(t){return t.copyFrom(this),t}contains(t,e){if(this.width<=0||this.height<=0)return!1;if(t>=this.x&&t<=this.x+this.width&&e>=this.y&&e<=this.y+this.height){const r=Math.max(0,Math.min(this.radius,Math.min(this.width,this.height)/2));if(e>=this.y+r&&e<=this.y+this.height-r||t>=this.x+r&&t<=this.x+this.width-r)return!0;let i=t-(this.x+r),s=e-(this.y+r);const o=r*r;if(i*i+s*s<=o||(i=t-(this.x+this.width-r),i*i+s*s<=o)||(s=e-(this.y+this.height-r),i*i+s*s<=o)||(i=t-(this.x+r),i*i+s*s<=o))return!0}return!1}strokeContains(t,e,r){const{x:i,y:s,width:o,height:a,radius:l}=this,u=r/2,c=i+l,h=s+l,f=o-l*2,d=a-l*2,p=i+o,g=s+a;return(t>=i-u&&t<=i+u||t>=p-u&&t<=p+u)&&e>=h&&e<=h+d||(e>=s-u&&e<=s+u||e>=g-u&&e<=g+u)&&t>=c&&t<=c+f?!0:t<c&&e<h&&rn(t,e,c,h,l,u)||t>p-l&&e<h&&rn(t,e,p-l,h,l,u)||t>p-l&&e>g-l&&rn(t,e,p-l,g-l,l,u)||t<c&&e>g-l&&rn(t,e,c,g-l,l,u)}toString(){return`[pixi.js/math:RoundedRectangle x=${this.x} y=${this.y}width=${this.width} height=${this.height} radius=${this.radius}]`}}const yu=["precision mediump float;","void main(void){","float test = 0.1;","%forloop%","gl_FragColor = vec4(0.0);","}"].join(`
`);function _u(n){let t="";for(let e=0;e<n;++e)e>0&&(t+=`
else `),e<n-1&&(t+=`if(test == ${e}.0){}`);return t}function bu(n,t){if(n===0)throw new Error("Invalid value of `0` passed to `checkMaxIfStatementsInShader`");const e=t.createShader(t.FRAGMENT_SHADER);for(;;){const r=yu.replace(/%forloop%/gi,_u(n));if(t.shaderSource(e,r),t.compileShader(e),!t.getShaderParameter(e,t.COMPILE_STATUS))n=n/2|0;else break}return n}let re=null;function eo(){if(re)return re;const n=Us();return re=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),re=bu(re,n),re}const no={};function Su(n,t){let e=0;for(let r=0;r<t;r++)e=e*31+n[r].uid>>>0;return no[e]||Cu(n,t,e)}let er=0;function Cu(n,t,e){const r={};let i=0;er||(er=eo());for(let o=0;o<er;o++){const a=o<t?n[o]:k.EMPTY.source;r[i++]=a.source,r[i++]=a.style}const s=new ln(r);return no[e]=s,s}class Mi{constructor(t){typeof t=="number"?this.rawBinaryData=new ArrayBuffer(t):t instanceof Uint8Array?this.rawBinaryData=t.buffer:this.rawBinaryData=t,this.uint32View=new Uint32Array(this.rawBinaryData),this.float32View=new Float32Array(this.rawBinaryData),this.size=this.rawBinaryData.byteLength}get int8View(){return this._int8View||(this._int8View=new Int8Array(this.rawBinaryData)),this._int8View}get uint8View(){return this._uint8View||(this._uint8View=new Uint8Array(this.rawBinaryData)),this._uint8View}get int16View(){return this._int16View||(this._int16View=new Int16Array(this.rawBinaryData)),this._int16View}get int32View(){return this._int32View||(this._int32View=new Int32Array(this.rawBinaryData)),this._int32View}get float64View(){return this._float64Array||(this._float64Array=new Float64Array(this.rawBinaryData)),this._float64Array}get bigUint64View(){return this._bigUint64Array||(this._bigUint64Array=new BigUint64Array(this.rawBinaryData)),this._bigUint64Array}view(t){return this[`${t}View`]}destroy(){this.rawBinaryData=null,this._int8View=null,this._uint8View=null,this._int16View=null,this.uint16View=null,this._int32View=null,this.uint32View=null,this.float32View=null}static sizeOf(t){switch(t){case"int8":case"uint8":return 1;case"int16":case"uint16":return 2;case"int32":case"uint32":case"float32":return 4;default:throw new Error(`${t} isn't a valid view type`)}}}function Ii(n,t){const e=n.byteLength/8|0,r=new Float64Array(n,0,e);new Float64Array(t,0,e).set(r);const s=n.byteLength-e*8;if(s>0){const o=new Uint8Array(n,e*8,s);new Uint8Array(t,e*8,s).set(o)}}const wu={normal:"normal-npm",add:"add-npm",screen:"screen-npm"};var Au=(n=>(n[n.DISABLED=0]="DISABLED",n[n.RENDERING_MASK_ADD=1]="RENDERING_MASK_ADD",n[n.MASK_ACTIVE=2]="MASK_ACTIVE",n[n.RENDERING_MASK_REMOVE=3]="RENDERING_MASK_REMOVE",n[n.NONE=4]="NONE",n))(Au||{});function Oi(n,t){return t.alphaMode==="no-premultiply-alpha"&&wu[n]||n}class Tu{constructor(){this.ids=Object.create(null),this.textures=[],this.count=0}clear(){for(let t=0;t<this.count;t++){const e=this.textures[t];this.textures[t]=null,this.ids[e.uid]=null}this.count=0}}class Pu{constructor(){this.renderPipeId="batch",this.action="startBatch",this.start=0,this.size=0,this.textures=new Tu,this.blendMode="normal",this.canBundle=!0}destroy(){this.textures=null,this.gpuBindGroup=null,this.bindGroup=null,this.batcher=null}}const ro=[];let Ar=0;function Ri(){return Ar>0?ro[--Ar]:new Pu}function Ei(n){ro[Ar++]=n}let Pe=0;const io=class so{constructor(t={}){this.uid=et("batcher"),this.dirty=!0,this.batchIndex=0,this.batches=[],this._vertexSize=6,this._elements=[],t={...so.defaultOptions,...t};const{vertexSize:e,indexSize:r}=t;this.attributeBuffer=new Mi(e*this._vertexSize*4),this.indexBuffer=new Uint16Array(r),this._maxTextures=eo()}begin(){this.elementSize=0,this.elementStart=0,this.indexSize=0,this.attributeSize=0;for(let t=0;t<this.batchIndex;t++)Ei(this.batches[t]);this.batchIndex=0,this._batchIndexStart=0,this._batchIndexSize=0,this.dirty=!0}add(t){this._elements[this.elementSize++]=t,t.indexStart=this.indexSize,t.location=this.attributeSize,t.batcher=this,this.indexSize+=t.indexSize,this.attributeSize+=t.vertexSize*this._vertexSize}checkAndUpdateTexture(t,e){const r=t.batch.textures.ids[e._source.uid];return!r&&r!==0?!1:(t.textureId=r,t.texture=e,!0)}updateElement(t){this.dirty=!0,t.packAttributes(this.attributeBuffer.float32View,this.attributeBuffer.uint32View,t.location,t.textureId)}break(t){const e=this._elements;if(!e[this.elementStart])return;let r=Ri(),i=r.textures;i.clear();const s=e[this.elementStart];let o=Oi(s.blendMode,s.texture._source);this.attributeSize*4>this.attributeBuffer.size&&this._resizeAttributeBuffer(this.attributeSize*4),this.indexSize>this.indexBuffer.length&&this._resizeIndexBuffer(this.indexSize);const a=this.attributeBuffer.float32View,l=this.attributeBuffer.uint32View,u=this.indexBuffer;let c=this._batchIndexSize,h=this._batchIndexStart,f="startBatch";const d=this._maxTextures;for(let p=this.elementStart;p<this.elementSize;++p){const g=e[p];e[p]=null;const v=g.texture._source,x=Oi(g.blendMode,v),y=o!==x;if(v._batchTick===Pe&&!y){g.textureId=v._textureBindLocation,c+=g.indexSize,g.packAttributes(a,l,g.location,g.textureId),g.packIndex(u,g.indexStart,g.location/this._vertexSize),g.batch=r;continue}v._batchTick=Pe,(i.count>=d||y)&&(this._finishBatch(r,h,c-h,i,o,t,f),f="renderBatch",h=c,o=x,r=Ri(),i=r.textures,i.clear(),++Pe),g.textureId=v._textureBindLocation=i.count,i.ids[v.uid]=i.count,i.textures[i.count++]=v,g.batch=r,c+=g.indexSize,g.packAttributes(a,l,g.location,g.textureId),g.packIndex(u,g.indexStart,g.location/this._vertexSize)}i.count>0&&(this._finishBatch(r,h,c-h,i,o,t,f),h=c,++Pe),this.elementStart=this.elementSize,this._batchIndexStart=h,this._batchIndexSize=c}_finishBatch(t,e,r,i,s,o,a){t.gpuBindGroup=null,t.bindGroup=null,t.action=a,t.batcher=this,t.textures=i,t.blendMode=s,t.start=e,t.size=r,++Pe,this.batches[this.batchIndex++]=t,o.add(t)}finish(t){this.break(t)}ensureAttributeBuffer(t){t*4<=this.attributeBuffer.size||this._resizeAttributeBuffer(t*4)}ensureIndexBuffer(t){t<=this.indexBuffer.length||this._resizeIndexBuffer(t)}_resizeAttributeBuffer(t){const e=Math.max(t,this.attributeBuffer.size*2),r=new Mi(e);Ii(this.attributeBuffer.rawBinaryData,r.rawBinaryData),this.attributeBuffer=r}_resizeIndexBuffer(t){const e=this.indexBuffer;let r=Math.max(t,e.length*1.5);r+=r%2;const i=r>65535?new Uint32Array(r):new Uint16Array(r);if(i.BYTES_PER_ELEMENT!==e.BYTES_PER_ELEMENT)for(let s=0;s<e.length;s++)i[s]=e[s];else Ii(e.buffer,i.buffer);this.indexBuffer=i}destroy(){for(let t=0;t<this.batches.length;t++)Ei(this.batches[t]);this.batches=null;for(let t=0;t<this._elements.length;t++)this._elements[t].batch=null;this._elements=null,this.indexBuffer=null,this.attributeBuffer.destroy(),this.attributeBuffer=null}};io.defaultOptions={vertexSize:4,indexSize:6};let Fu=io;var ut=(n=>(n[n.MAP_READ=1]="MAP_READ",n[n.MAP_WRITE=2]="MAP_WRITE",n[n.COPY_SRC=4]="COPY_SRC",n[n.COPY_DST=8]="COPY_DST",n[n.INDEX=16]="INDEX",n[n.VERTEX=32]="VERTEX",n[n.UNIFORM=64]="UNIFORM",n[n.STORAGE=128]="STORAGE",n[n.INDIRECT=256]="INDIRECT",n[n.QUERY_RESOLVE=512]="QUERY_RESOLVE",n[n.STATIC=1024]="STATIC",n))(ut||{});class Ge extends St{constructor(t){let{data:e,size:r}=t;const{usage:i,label:s,shrinkToFit:o}=t;super(),this.uid=et("buffer"),this._resourceType="buffer",this._resourceId=et("resource"),this._touched=0,this._updateID=1,this.shrinkToFit=!0,this.destroyed=!1,e instanceof Array&&(e=new Float32Array(e)),this._data=e,r=r??(e==null?void 0:e.byteLength);const a=!!e;this.descriptor={size:r,usage:i,mappedAtCreation:a,label:s},this.shrinkToFit=o??!0}get data(){return this._data}set data(t){this.setDataWithSize(t,t.length,!0)}get static(){return!!(this.descriptor.usage&ut.STATIC)}set static(t){t?this.descriptor.usage|=ut.STATIC:this.descriptor.usage&=~ut.STATIC}setDataWithSize(t,e,r){if(this._updateID++,this._updateSize=e*t.BYTES_PER_ELEMENT,this._data===t){r&&this.emit("update",this);return}const i=this._data;if(this._data=t,i.length!==t.length){!this.shrinkToFit&&t.byteLength<i.byteLength?r&&this.emit("update",this):(this.descriptor.size=t.byteLength,this._resourceId=et("resource"),this.emit("change",this));return}r&&this.emit("update",this)}update(t){this._updateSize=t??this._updateSize,this._updateID++,this.emit("update",this)}destroy(){this.destroyed=!0,this.emit("destroy",this),this.emit("change",this),this._data=null,this.descriptor=null,this.removeAllListeners()}}function oo(n,t){if(!(n instanceof Ge)){let e=t?ut.INDEX:ut.VERTEX;n instanceof Array&&(t?(n=new Uint32Array(n),e=ut.INDEX|ut.COPY_DST):(n=new Float32Array(n),e=ut.VERTEX|ut.COPY_DST)),n=new Ge({data:n,label:t?"index-mesh-buffer":"vertex-mesh-buffer",usage:e})}return n}function zu(n,t,e){const r=n.getAttribute(t);if(!r)return e.minX=0,e.minY=0,e.maxX=0,e.maxY=0,e;const i=r.buffer.data;let s=1/0,o=1/0,a=-1/0,l=-1/0;const u=i.BYTES_PER_ELEMENT,c=(r.offset||0)/u,h=(r.stride||2*4)/u;for(let f=c;f<i.length;f+=h){const d=i[f],p=i[f+1];d>a&&(a=d),p>l&&(l=p),d<s&&(s=d),p<o&&(o=p)}return e.minX=s,e.minY=o,e.maxX=a,e.maxY=l,e}function Mu(n){return(n instanceof Ge||Array.isArray(n)||n.BYTES_PER_ELEMENT)&&(n={buffer:n}),n.buffer=oo(n.buffer,!1),n}class Iu extends St{constructor(t){const{attributes:e,indexBuffer:r,topology:i}=t;super(),this.uid=et("geometry"),this._layoutKey=0,this.instanceCount=1,this._bounds=new Ft,this._boundsDirty=!0,this.attributes=e,this.buffers=[],this.instanceCount=t.instanceCount||1;for(const s in e){const o=e[s]=Mu(e[s]);this.buffers.indexOf(o.buffer)===-1&&(this.buffers.push(o.buffer),o.buffer.on("update",this.onBufferUpdate,this),o.buffer.on("change",this.onBufferUpdate,this))}r&&(this.indexBuffer=oo(r,!0),this.buffers.push(this.indexBuffer)),this.topology=i||"triangle-list"}onBufferUpdate(){this._boundsDirty=!0,this.emit("update",this)}getAttribute(t){return this.attributes[t]}getIndex(){return this.indexBuffer}getBuffer(t){return this.getAttribute(t).buffer}getSize(){for(const t in this.attributes){const e=this.attributes[t];return e.buffer.data.length/(e.stride/4||e.size)}return 0}get bounds(){return this._boundsDirty?(this._boundsDirty=!1,zu(this,"aPosition",this._bounds)):this._bounds}destroy(t=!1){this.emit("destroy",this),this.removeAllListeners(),t&&this.buffers.forEach(e=>e.destroy()),this.attributes=null,this.buffers=null,this.indexBuffer=null,this._bounds=null}}const Ou=new Float32Array(1),Ru=new Uint32Array(1);class Eu extends Iu{constructor(){const e=new Ge({data:Ou,label:"attribute-batch-buffer",usage:ut.VERTEX|ut.COPY_DST,shrinkToFit:!1}),r=new Ge({data:Ru,label:"index-batch-buffer",usage:ut.INDEX|ut.COPY_DST,shrinkToFit:!1}),i=6*4;super({attributes:{aPosition:{buffer:e,format:"float32x2",stride:i,offset:0,location:1},aUV:{buffer:e,format:"float32x2",stride:i,offset:2*4,location:3},aColor:{buffer:e,format:"unorm8x4",stride:i,offset:4*4,location:0},aTextureIdAndRound:{buffer:e,format:"uint16x2",stride:i,offset:5*4,location:2}},indexBuffer:r})}}function Uu(n,t,e,r,i,s,o,a=null){let l=0;e*=t,i*=s;const u=a.a,c=a.b,h=a.c,f=a.d,d=a.tx,p=a.ty;for(;l<o;){const g=n[e],m=n[e+1];r[i]=u*g+h*m+d,r[i+1]=c*g+f*m+p,i+=s,e+=t,l++}}function ku(n,t,e,r){let i=0;for(t*=e;i<r;)n[t]=0,n[t+1]=0,t+=e,i++}function ao(n,t,e,r,i){const s=t.a,o=t.b,a=t.c,l=t.d,u=t.tx,c=t.ty;e=e||0,r=r||2,i=i||n.length/r-e;let h=e*r;for(let f=0;f<i;f++){const d=n[h],p=n[h+1];n[h]=s*d+a*p+u,n[h+1]=o*d+l*p+c,h+=r}}function Bu(n,t){if(n===16777215||!t)return t;if(t===16777215||!n)return n;const e=n>>16&255,r=n>>8&255,i=n&255,s=t>>16&255,o=t>>8&255,a=t&255,l=e*s/255,u=r*o/255,c=i*a/255;return(l<<16)+(u<<8)+c}class lo{constructor(){this.batcher=null,this.batch=null,this.applyTransform=!0,this.roundPixels=0}get blendMode(){return this.applyTransform?this.renderable.groupBlendMode:"normal"}packIndex(t,e,r){const i=this.geometryData.indices;for(let s=0;s<this.indexSize;s++)t[e++]=i[s+this.indexOffset]+r-this.vertexOffset}packAttributes(t,e,r,i){const s=this.geometryData,o=this.renderable,a=s.vertices,l=s.uvs,u=this.vertexOffset*2,c=(this.vertexOffset+this.vertexSize)*2,h=this.color,f=h>>16|h&65280|(h&255)<<16;if(this.applyTransform){const d=Bu(f,o.groupColor)+(this.alpha*o.groupAlpha*255<<24),p=o.groupTransform,g=i<<16|this.roundPixels&65535,m=p.a,v=p.b,x=p.c,y=p.d,_=p.tx,A=p.ty;for(let R=u;R<c;R+=2){const T=a[R],F=a[R+1];t[r]=m*T+x*F+_,t[r+1]=v*T+y*F+A,t[r+2]=l[R],t[r+3]=l[R+1],e[r+4]=d,e[r+5]=g,r+=6}}else{const d=f+(this.alpha*255<<24);for(let p=u;p<c;p+=2)t[r]=a[p],t[r+1]=a[p+1],t[r+2]=l[p],t[r+3]=l[p+1],e[r+4]=d,e[r+5]=i<<16,r+=6}}get vertSize(){return this.vertexSize}copyTo(t){t.indexOffset=this.indexOffset,t.indexSize=this.indexSize,t.vertexOffset=this.vertexOffset,t.vertexSize=this.vertexSize,t.color=this.color,t.alpha=this.alpha,t.texture=this.texture,t.geometryData=this.geometryData}reset(){this.applyTransform=!0}}const Ne={extension:{type:O.ShapeBuilder,name:"circle"},build(n,t){let e,r,i,s,o,a;if(n.type==="circle"){const _=n;e=_.x,r=_.y,o=a=_.radius,i=s=0}else if(n.type==="ellipse"){const _=n;e=_.x,r=_.y,o=_.halfWidth,a=_.halfHeight,i=s=0}else{const _=n,A=_.width/2,R=_.height/2;e=_.x+A,r=_.y+R,o=a=Math.max(0,Math.min(_.radius,Math.min(A,R))),i=A-o,s=R-a}if(!(o>=0&&a>=0&&i>=0&&s>=0))return t;const l=Math.ceil(2.3*Math.sqrt(o+a)),u=l*8+(i?4:0)+(s?4:0);if(u===0)return t;if(l===0)return t[0]=t[6]=e+i,t[1]=t[3]=r+s,t[2]=t[4]=e-i,t[5]=t[7]=r-s,t;let c=0,h=l*4+(i?2:0)+2,f=h,d=u,p=i+o,g=s,m=e+p,v=e-p,x=r+g;if(t[c++]=m,t[c++]=x,t[--h]=x,t[--h]=v,s){const _=r-g;t[f++]=v,t[f++]=_,t[--d]=_,t[--d]=m}for(let _=1;_<l;_++){const A=Math.PI/2*(_/l),R=i+Math.cos(A)*o,T=s+Math.sin(A)*a,F=e+R,b=e-R,S=r+T,H=r-T;t[c++]=F,t[c++]=S,t[--h]=S,t[--h]=b,t[f++]=b,t[f++]=H,t[--d]=H,t[--d]=F}p=i,g=s+a,m=e+p,v=e-p,x=r+g;const y=r-g;return t[c++]=m,t[c++]=x,t[--d]=y,t[--d]=m,i&&(t[c++]=v,t[c++]=x,t[--d]=y,t[--d]=v),t},triangulate(n,t,e,r,i,s){if(n.length===0)return;let o=0,a=0;for(let c=0;c<n.length;c+=2)o+=n[c],a+=n[c+1];o/=n.length/2,a/=n.length/2;let l=r;t[l*e]=o,t[l*e+1]=a;const u=l++;for(let c=0;c<n.length;c+=2)t[l*e]=n[c],t[l*e+1]=n[c+1],c>0&&(i[s++]=l,i[s++]=u,i[s++]=l-1),l++;i[s++]=u+1,i[s++]=u,i[s++]=l-1}},Lu={...Ne,extension:{...Ne.extension,name:"ellipse"}},Du={...Ne,extension:{...Ne.extension,name:"roundedRectangle"}},Gu=1e-4,Ui=1e-4;function Nu(n){const t=n.length;if(t<6)return 1;let e=0;for(let r=0,i=n[t-2],s=n[t-1];r<t;r+=2){const o=n[r],a=n[r+1];e+=(o-i)*(a+s),i=o,s=a}return e<0?-1:1}function ki(n,t,e,r,i,s,o,a){const l=n-e*i,u=t-r*i,c=n+e*s,h=t+r*s;let f,d;o?(f=r,d=-e):(f=-r,d=e);const p=l+f,g=u+d,m=c+f,v=h+d;return a.push(p,g),a.push(m,v),2}function Gt(n,t,e,r,i,s,o,a){const l=e-n,u=r-t;let c=Math.atan2(l,u),h=Math.atan2(i-n,s-t);a&&c<h?c+=Math.PI*2:!a&&c>h&&(h+=Math.PI*2);let f=c;const d=h-c,p=Math.abs(d),g=Math.sqrt(l*l+u*u),m=(15*p*Math.sqrt(g)/Math.PI>>0)+1,v=d/m;if(f+=v,a){o.push(n,t),o.push(e,r);for(let x=1,y=f;x<m;x++,y+=v)o.push(n,t),o.push(n+Math.sin(y)*g,t+Math.cos(y)*g);o.push(n,t),o.push(i,s)}else{o.push(e,r),o.push(n,t);for(let x=1,y=f;x<m;x++,y+=v)o.push(n+Math.sin(y)*g,t+Math.cos(y)*g),o.push(n,t);o.push(i,s),o.push(n,t)}return m*2}function $u(n,t,e,r,i,s,o,a,l){const u=Gu;if(n.length===0)return;const c=t;let h=c.alignment;if(t.alignment!==.5){let j=Nu(n);h=(h-.5)*j+.5}const f=new ot(n[0],n[1]),d=new ot(n[n.length-2],n[n.length-1]),p=r,g=Math.abs(f.x-d.x)<u&&Math.abs(f.y-d.y)<u;if(p){n=n.slice(),g&&(n.pop(),n.pop(),d.set(n[n.length-2],n[n.length-1]));const j=(f.x+d.x)*.5,Et=(d.y+f.y)*.5;n.unshift(j,Et),n.push(j,Et)}const m=i,v=n.length/2;let x=n.length;const y=m.length/2,_=c.width/2,A=_*_,R=c.miterLimit*c.miterLimit;let T=n[0],F=n[1],b=n[2],S=n[3],H=0,xt=0,U=-(F-S),M=T-b,N=0,q=0,P=Math.sqrt(U*U+M*M);U/=P,M/=P,U*=_,M*=_;const $=h,w=(1-$)*2,E=$*2;p||(c.cap==="round"?x+=Gt(T-U*(w-E)*.5,F-M*(w-E)*.5,T-U*w,F-M*w,T+U*E,F+M*E,m,!0)+2:c.cap==="square"&&(x+=ki(T,F,U,M,w,E,!0,m))),m.push(T-U*w,F-M*w),m.push(T+U*E,F+M*E);for(let j=1;j<v-1;++j){T=n[(j-1)*2],F=n[(j-1)*2+1],b=n[j*2],S=n[j*2+1],H=n[(j+1)*2],xt=n[(j+1)*2+1],U=-(F-S),M=T-b,P=Math.sqrt(U*U+M*M),U/=P,M/=P,U*=_,M*=_,N=-(S-xt),q=b-H,P=Math.sqrt(N*N+q*q),N/=P,q/=P,N*=_,q*=_;const Et=b-T,be=F-S,Se=b-H,Ce=xt-S,ri=Et*Se+be*Ce,We=be*Se-Ce*Et,we=We<0;if(Math.abs(We)<.001*Math.abs(ri)){m.push(b-U*w,S-M*w),m.push(b+U*E,S+M*E),ri>=0&&(c.join==="round"?x+=Gt(b,S,b-U*w,S-M*w,b-N*w,S-q*w,m,!1)+4:x+=2,m.push(b-N*E,S-q*E),m.push(b+N*w,S+q*w));continue}const ii=(-U+T)*(-M+S)-(-U+b)*(-M+F),si=(-N+H)*(-q+S)-(-N+b)*(-q+xt),Xe=(Et*si-Se*ii)/We,Ye=(Ce*ii-be*si)/We,Mn=(Xe-b)*(Xe-b)+(Ye-S)*(Ye-S),kt=b+(Xe-b)*w,Bt=S+(Ye-S)*w,Lt=b-(Xe-b)*E,Dt=S-(Ye-S)*E,_a=Math.min(Et*Et+be*be,Se*Se+Ce*Ce),oi=we?w:E,ba=_a+oi*oi*A;Mn<=ba?c.join==="bevel"||Mn/A>R?(we?(m.push(kt,Bt),m.push(b+U*E,S+M*E),m.push(kt,Bt),m.push(b+N*E,S+q*E)):(m.push(b-U*w,S-M*w),m.push(Lt,Dt),m.push(b-N*w,S-q*w),m.push(Lt,Dt)),x+=2):c.join==="round"?we?(m.push(kt,Bt),m.push(b+U*E,S+M*E),x+=Gt(b,S,b+U*E,S+M*E,b+N*E,S+q*E,m,!0)+4,m.push(kt,Bt),m.push(b+N*E,S+q*E)):(m.push(b-U*w,S-M*w),m.push(Lt,Dt),x+=Gt(b,S,b-U*w,S-M*w,b-N*w,S-q*w,m,!1)+4,m.push(b-N*w,S-q*w),m.push(Lt,Dt)):(m.push(kt,Bt),m.push(Lt,Dt)):(m.push(b-U*w,S-M*w),m.push(b+U*E,S+M*E),c.join==="round"?we?x+=Gt(b,S,b+U*E,S+M*E,b+N*E,S+q*E,m,!0)+2:x+=Gt(b,S,b-U*w,S-M*w,b-N*w,S-q*w,m,!1)+2:c.join==="miter"&&Mn/A<=R&&(we?(m.push(Lt,Dt),m.push(Lt,Dt)):(m.push(kt,Bt),m.push(kt,Bt)),x+=2),m.push(b-N*w,S-q*w),m.push(b+N*E,S+q*E),x+=2)}T=n[(v-2)*2],F=n[(v-2)*2+1],b=n[(v-1)*2],S=n[(v-1)*2+1],U=-(F-S),M=T-b,P=Math.sqrt(U*U+M*M),U/=P,M/=P,U*=_,M*=_,m.push(b-U*w,S-M*w),m.push(b+U*E,S+M*E),p||(c.cap==="round"?x+=Gt(b-U*(w-E)*.5,S-M*(w-E)*.5,b-U*w,S-M*w,b+U*E,S+M*E,m,!1)+2:c.cap==="square"&&(x+=ki(b,S,U,M,w,E,!1,m)));const Ve=Ui*Ui;for(let j=y;j<x+y-2;++j)T=m[j*2],F=m[j*2+1],b=m[(j+1)*2],S=m[(j+1)*2+1],H=m[(j+2)*2],xt=m[(j+2)*2+1],!(Math.abs(T*(S-xt)+b*(xt-F)+H*(F-S))<Ve)&&a.push(j,j+1,j+2)}function uo(n,t,e,r,i,s,o){const a=iu(n,t,2);if(!a)return;for(let u=0;u<a.length;u+=3)s[o++]=a[u]+i,s[o++]=a[u+1]+i,s[o++]=a[u+2]+i;let l=i*r;for(let u=0;u<n.length;u+=2)e[l]=n[u],e[l+1]=n[u+1],l+=r}const Vu=[],Wu={extension:{type:O.ShapeBuilder,name:"polygon"},build(n,t){for(let e=0;e<n.points.length;e++)t[e]=n.points[e];return t},triangulate(n,t,e,r,i,s){uo(n,Vu,t,e,r,i,s)}},Xu={extension:{type:O.ShapeBuilder,name:"rectangle"},build(n,t){const e=n,r=e.x,i=e.y,s=e.width,o=e.height;return s>=0&&o>=0&&(t[0]=r,t[1]=i,t[2]=r+s,t[3]=i,t[4]=r+s,t[5]=i+o,t[6]=r,t[7]=i+o),t},triangulate(n,t,e,r,i,s){let o=0;r*=e,t[r+o]=n[0],t[r+o+1]=n[1],o+=e,t[r+o]=n[2],t[r+o+1]=n[3],o+=e,t[r+o]=n[6],t[r+o+1]=n[7],o+=e,t[r+o]=n[4],t[r+o+1]=n[5],o+=e;const a=r/e;i[s++]=a,i[s++]=a+1,i[s++]=a+2,i[s++]=a+1,i[s++]=a+3,i[s++]=a+2}},Yu={extension:{type:O.ShapeBuilder,name:"triangle"},build(n,t){return t[0]=n.x,t[1]=n.y,t[2]=n.x2,t[3]=n.y2,t[4]=n.x3,t[5]=n.y3,t},triangulate(n,t,e,r,i,s){let o=0;r*=e,t[r+o]=n[0],t[r+o+1]=n[1],o+=e,t[r+o]=n[2],t[r+o+1]=n[3],o+=e,t[r+o]=n[4],t[r+o+1]=n[5];const a=r/e;i[s++]=a,i[s++]=a+1,i[s++]=a+2}},Pn={};lt.handleByMap(O.ShapeBuilder,Pn);lt.add(Xu,Wu,Yu,Ne,Lu,Du);const Hu=new tt;function ju(n,t){const{geometryData:e,batches:r}=t;r.length=0,e.indices.length=0,e.vertices.length=0,e.uvs.length=0;for(let i=0;i<n.instructions.length;i++){const s=n.instructions[i];if(s.action==="texture")qu(s.data,r,e);else if(s.action==="fill"||s.action==="stroke"){const o=s.action==="stroke",a=s.data.path.shapePath,l=s.data.style,u=s.data.hole;o&&u&&Bi(u.shapePath,l,null,!0,r,e),Bi(a,l,u,o,r,e)}}}function qu(n,t,e){const{vertices:r,uvs:i,indices:s}=e,o=s.length,a=r.length/2,l=[],u=Pn.rectangle,c=Hu,h=n.image;c.x=n.dx,c.y=n.dy,c.width=n.dw,c.height=n.dh;const f=n.transform;u.build(c,l),f&&ao(l,f),u.triangulate(l,r,2,a,s,o);const d=h.uvs;i.push(d.x0,d.y0,d.x1,d.y1,d.x3,d.y3,d.x2,d.y2);const p=Ot.get(lo);p.indexOffset=o,p.indexSize=s.length-o,p.vertexOffset=a,p.vertexSize=r.length/2-a,p.color=n.style,p.alpha=n.alpha,p.texture=h,p.geometryData=e,t.push(p)}function Bi(n,t,e,r,i,s){const{vertices:o,uvs:a,indices:l}=s,u=n.shapePrimitives.length-1;n.shapePrimitives.forEach(({shape:c,transform:h},f)=>{const d=l.length,p=o.length/2,g=[],m=Pn[c.type];if(m.build(c,g),h&&ao(g,h),r){const _=c.closePath??!0;$u(g,t,!1,_,o,2,p,l)}else if(e&&u===f){u!==0&&console.warn("[Pixi Graphics] only the last shape have be cut out");const _=[],A=g.slice();Ku(e.shapePath).forEach(T=>{_.push(A.length/2),A.push(...T)}),uo(A,_,o,2,p,l,d)}else m.triangulate(g,o,2,p,l,d);const v=a.length/2,x=t.texture;if(x!==k.WHITE){const _=t.matrix;_&&(h&&_.append(h.clone().invert()),Uu(o,2,p,a,v,2,o.length/2-p,_))}else ku(a,v,2,o.length/2-p);const y=Ot.get(lo);y.indexOffset=d,y.indexSize=l.length-d,y.vertexOffset=p,y.vertexSize=o.length/2-p,y.color=t.color,y.alpha=t.alpha,y.texture=x,y.geometryData=s,i.push(y)})}function Ku(n){if(!n)return[];const t=n.shapePrimitives,e=[];for(let r=0;r<t.length;r++){const i=t[r].shape,s=[];Pn[i.type].build(i,s),e.push(s)}return e}class Zu{constructor(){this.batcher=new Fu,this.batches=[],this.geometryData={vertices:[],uvs:[],indices:[]}}}class Qu{constructor(){this.geometry=new Eu,this.instructions=new _s}init(){this.instructions.reset()}}const Kr=class Tr{constructor(){this._gpuContextHash={},this._graphicsDataContextHash=Object.create(null)}init(t){Tr.defaultOptions.bezierSmoothness=(t==null?void 0:t.bezierSmoothness)??Tr.defaultOptions.bezierSmoothness}getContextRenderData(t){return this._graphicsDataContextHash[t.uid]||this._initContextRenderData(t)}updateGpuContext(t){let e=this._gpuContextHash[t.uid]||this._initContext(t);if(t.dirty){e?this._cleanGraphicsContextData(t):e=this._initContext(t),ju(t,e);const r=t.batchMode;t.customShader||r==="no-batch"?e.isBatchable=!1:r==="auto"&&(e.isBatchable=e.geometryData.vertices.length<400),t.dirty=!1}return e}getGpuContext(t){return this._gpuContextHash[t.uid]||this._initContext(t)}_initContextRenderData(t){const e=Ot.get(Qu),{batches:r,geometryData:i,batcher:s}=this._gpuContextHash[t.uid],o=i.vertices.length,a=i.indices.length;for(let c=0;c<r.length;c++)r[c].applyTransform=!1;s.ensureAttributeBuffer(o),s.ensureIndexBuffer(a),s.begin();for(let c=0;c<r.length;c++){const h=r[c];s.add(h)}s.finish(e.instructions);const l=e.geometry;l.indexBuffer.setDataWithSize(s.indexBuffer,s.indexSize,!0),l.buffers[0].setDataWithSize(s.attributeBuffer.float32View,s.attributeSize,!0);const u=s.batches;for(let c=0;c<u.length;c++){const h=u[c];h.bindGroup=Su(h.textures.textures,h.textures.count)}return this._graphicsDataContextHash[t.uid]=e,e}_initContext(t){const e=new Zu;return e.context=t,this._gpuContextHash[t.uid]=e,t.on("destroy",this.onGraphicsContextDestroy,this),this._gpuContextHash[t.uid]}onGraphicsContextDestroy(t){this._cleanGraphicsContextData(t),t.off("destroy",this.onGraphicsContextDestroy,this),this._gpuContextHash[t.uid]=null}_cleanGraphicsContextData(t){const e=this._gpuContextHash[t.uid];e.isBatchable||this._graphicsDataContextHash[t.uid]&&(Ot.return(this.getContextRenderData(t)),this._graphicsDataContextHash[t.uid]=null),e.batches&&e.batches.forEach(r=>{Ot.return(r)})}destroy(){for(const t in this._gpuContextHash)this._gpuContextHash[t]&&this.onGraphicsContextDestroy(this._gpuContextHash[t].context)}};Kr.extension={type:[O.WebGLSystem,O.WebGPUSystem,O.CanvasSystem],name:"graphicsContext"};Kr.defaultOptions={bezierSmoothness:.5};let co=Kr;const Ju=8,sn=11920929e-14,tc=1;function ho(n,t,e,r,i,s,o,a,l,u){const h=Math.min(.99,Math.max(0,u??co.defaultOptions.bezierSmoothness));let f=(tc-h)/1;return f*=f,ec(t,e,r,i,s,o,a,l,n,f),n}function ec(n,t,e,r,i,s,o,a,l,u){Pr(n,t,e,r,i,s,o,a,l,u,0),l.push(o,a)}function Pr(n,t,e,r,i,s,o,a,l,u,c){if(c>Ju)return;const h=(n+e)/2,f=(t+r)/2,d=(e+i)/2,p=(r+s)/2,g=(i+o)/2,m=(s+a)/2,v=(h+d)/2,x=(f+p)/2,y=(d+g)/2,_=(p+m)/2,A=(v+y)/2,R=(x+_)/2;if(c>0){let T=o-n,F=a-t;const b=Math.abs((e-o)*F-(r-a)*T),S=Math.abs((i-o)*F-(s-a)*T);if(b>sn&&S>sn){if((b+S)*(b+S)<=u*(T*T+F*F)){l.push(A,R);return}}else if(b>sn){if(b*b<=u*(T*T+F*F)){l.push(A,R);return}}else if(S>sn){if(S*S<=u*(T*T+F*F)){l.push(A,R);return}}else if(T=A-(n+o)/2,F=R-(t+a)/2,T*T+F*F<=u){l.push(A,R);return}}Pr(n,t,h,f,v,x,A,R,l,u,c+1),Pr(A,R,y,_,g,m,o,a,l,u,c+1)}const nc=8,rc=11920929e-14,ic=1;function sc(n,t,e,r,i,s,o,a){const u=Math.min(.99,Math.max(0,a??co.defaultOptions.bezierSmoothness));let c=(ic-u)/1;return c*=c,oc(t,e,r,i,s,o,n,c),n}function oc(n,t,e,r,i,s,o,a){Fr(o,n,t,e,r,i,s,a,0),o.push(i,s)}function Fr(n,t,e,r,i,s,o,a,l){if(l>nc)return;const u=(t+r)/2,c=(e+i)/2,h=(r+s)/2,f=(i+o)/2,d=(u+h)/2,p=(c+f)/2;let g=s-t,m=o-e;const v=Math.abs((r-s)*m-(i-o)*g);if(v>rc){if(v*v<=a*(g*g+m*m)){n.push(d,p);return}}else if(g=d-(t+s)/2,m=p-(e+o)/2,g*g+m*m<=a){n.push(d,p);return}Fr(n,t,e,u,c,d,p,a,l+1),Fr(n,d,p,h,f,s,o,a,l+1)}function fo(n,t,e,r,i,s,o,a){let l=Math.abs(i-s);(!o&&i>s||o&&s>i)&&(l=2*Math.PI-l),a=a||Math.max(6,Math.floor(6*Math.pow(r,1/3)*(l/Math.PI))),a=Math.max(a,3);let u=l/a,c=i;u*=o?-1:1;for(let h=0;h<a+1;h++){const f=Math.cos(c),d=Math.sin(c),p=t+f*r,g=e+d*r;n.push(p,g),c+=u}}function ac(n,t,e,r,i,s){const o=n[n.length-2],l=n[n.length-1]-e,u=o-t,c=i-e,h=r-t,f=Math.abs(l*h-u*c);if(f<1e-8||s===0){(n[n.length-2]!==t||n[n.length-1]!==e)&&n.push(t,e);return}const d=l*l+u*u,p=c*c+h*h,g=l*c+u*h,m=s*Math.sqrt(d)/f,v=s*Math.sqrt(p)/f,x=m*g/d,y=v*g/p,_=m*h+v*u,A=m*c+v*l,R=u*(v+x),T=l*(v+x),F=h*(m+y),b=c*(m+y),S=Math.atan2(T-A,R-_),H=Math.atan2(b-A,F-_);fo(n,_+t,A+e,s,S,H,u*c>h*l)}const Ee=Math.PI*2,nr={centerX:0,centerY:0,ang1:0,ang2:0},rr=({x:n,y:t},e,r,i,s,o,a,l)=>{n*=e,t*=r;const u=i*n-s*t,c=s*n+i*t;return l.x=u+o,l.y=c+a,l};function lc(n,t){const e=t===-1.5707963267948966?-.551915024494:1.3333333333333333*Math.tan(t/4),r=t===1.5707963267948966?.551915024494:e,i=Math.cos(n),s=Math.sin(n),o=Math.cos(n+t),a=Math.sin(n+t);return[{x:i-s*r,y:s+i*r},{x:o+a*r,y:a-o*r},{x:o,y:a}]}const Li=(n,t,e,r)=>{const i=n*r-t*e<0?-1:1;let s=n*e+t*r;return s>1&&(s=1),s<-1&&(s=-1),i*Math.acos(s)},uc=(n,t,e,r,i,s,o,a,l,u,c,h,f)=>{const d=Math.pow(i,2),p=Math.pow(s,2),g=Math.pow(c,2),m=Math.pow(h,2);let v=d*p-d*m-p*g;v<0&&(v=0),v/=d*m+p*g,v=Math.sqrt(v)*(o===a?-1:1);const x=v*i/s*h,y=v*-s/i*c,_=u*x-l*y+(n+e)/2,A=l*x+u*y+(t+r)/2,R=(c-x)/i,T=(h-y)/s,F=(-c-x)/i,b=(-h-y)/s,S=Li(1,0,R,T);let H=Li(R,T,F,b);a===0&&H>0&&(H-=Ee),a===1&&H<0&&(H+=Ee),f.centerX=_,f.centerY=A,f.ang1=S,f.ang2=H};function cc(n,t,e,r,i,s,o,a=0,l=0,u=0){if(s===0||o===0)return;const c=Math.sin(a*Ee/360),h=Math.cos(a*Ee/360),f=h*(t-r)/2+c*(e-i)/2,d=-c*(t-r)/2+h*(e-i)/2;if(f===0&&d===0)return;s=Math.abs(s),o=Math.abs(o);const p=Math.pow(f,2)/Math.pow(s,2)+Math.pow(d,2)/Math.pow(o,2);p>1&&(s*=Math.sqrt(p),o*=Math.sqrt(p)),uc(t,e,r,i,s,o,l,u,c,h,f,d,nr);let{ang1:g,ang2:m}=nr;const{centerX:v,centerY:x}=nr;let y=Math.abs(m)/(Ee/4);Math.abs(1-y)<1e-7&&(y=1);const _=Math.max(Math.ceil(y),1);m/=_;let A=n[n.length-2],R=n[n.length-1];const T={x:0,y:0};for(let F=0;F<_;F++){const b=lc(g,m),{x:S,y:H}=rr(b[0],s,o,h,c,v,x,T),{x:xt,y:U}=rr(b[1],s,o,h,c,v,x,T),{x:M,y:N}=rr(b[2],s,o,h,c,v,x,T);ho(n,A,R,S,H,xt,U,M,N),A=M,R=N,g+=m}}function hc(n,t,e){const r=(o,a)=>{const l=a.x-o.x,u=a.y-o.y,c=Math.sqrt(l*l+u*u),h=l/c,f=u/c;return{len:c,nx:h,ny:f}},i=(o,a)=>{o===0?n.moveTo(a.x,a.y):n.lineTo(a.x,a.y)};let s=t[t.length-1];for(let o=0;o<t.length;o++){const a=t[o%t.length],l=a.radius??e;if(l<=0){i(o,a),s=a;continue}const u=t[(o+1)%t.length],c=r(a,s),h=r(a,u);if(c.len<1e-4||h.len<1e-4){i(o,a),s=a;continue}let f=Math.asin(c.nx*h.ny-c.ny*h.nx),d=1,p=!1;c.nx*h.nx-c.ny*-h.ny<0?f<0?f=Math.PI+f:(f=Math.PI-f,d=-1,p=!0):f>0&&(d=-1,p=!0);const g=f/2;let m,v=Math.abs(Math.cos(g)*l/Math.sin(g));v>Math.min(c.len/2,h.len/2)?(v=Math.min(c.len/2,h.len/2),m=Math.abs(v*Math.sin(g)/Math.cos(g))):m=l;const x=a.x+h.nx*v+-h.ny*m*d,y=a.y+h.ny*v+h.nx*m*d,_=Math.atan2(c.ny,c.nx)+Math.PI/2*d,A=Math.atan2(h.ny,h.nx)-Math.PI/2*d;o===0&&n.moveTo(x+Math.cos(_)*m,y+Math.sin(_)*m),n.arc(x,y,m,_,A,p),s=a}}function fc(n,t,e,r){const i=(a,l)=>Math.sqrt((a.x-l.x)**2+(a.y-l.y)**2),s=(a,l,u)=>({x:a.x+(l.x-a.x)*u,y:a.y+(l.y-a.y)*u}),o=t.length;for(let a=0;a<o;a++){const l=t[(a+1)%o],u=l.radius??e;if(u<=0){a===0?n.moveTo(l.x,l.y):n.lineTo(l.x,l.y);continue}const c=t[a],h=t[(a+2)%o],f=i(c,l);let d;if(f<1e-4)d=l;else{const m=Math.min(f/2,u);d=s(l,c,m/f)}const p=i(h,l);let g;if(p<1e-4)g=l;else{const m=Math.min(p/2,u);g=s(l,h,m/p)}a===0?n.moveTo(d.x,d.y):n.lineTo(d.x,d.y),n.quadraticCurveTo(l.x,l.y,g.x,g.y,r)}}const dc=new tt;class pc{constructor(t){this.shapePrimitives=[],this._currentPoly=null,this._bounds=new Ft,this._graphicsPath2D=t}moveTo(t,e){return this.startPoly(t,e),this}lineTo(t,e){this._ensurePoly();const r=this._currentPoly.points,i=r[r.length-2],s=r[r.length-1];return(i!==t||s!==e)&&r.push(t,e),this}arc(t,e,r,i,s,o){this._ensurePoly(!1);const a=this._currentPoly.points;return fo(a,t,e,r,i,s,o),this}arcTo(t,e,r,i,s){this._ensurePoly();const o=this._currentPoly.points;return ac(o,t,e,r,i,s),this}arcToSvg(t,e,r,i,s,o,a){const l=this._currentPoly.points;return cc(l,this._currentPoly.lastX,this._currentPoly.lastY,o,a,t,e,r,i,s),this}bezierCurveTo(t,e,r,i,s,o,a){this._ensurePoly();const l=this._currentPoly;return ho(this._currentPoly.points,l.lastX,l.lastY,t,e,r,i,s,o,a),this}quadraticCurveTo(t,e,r,i,s){this._ensurePoly();const o=this._currentPoly;return sc(this._currentPoly.points,o.lastX,o.lastY,t,e,r,i,s),this}closePath(){return this.endPoly(!0),this}addPath(t,e){this.endPoly(),e&&!e.isIdentity()&&(t=t.clone(!0),t.transform(e));for(let r=0;r<t.instructions.length;r++){const i=t.instructions[r];this[i.action](...i.data)}return this}finish(t=!1){this.endPoly(t)}rect(t,e,r,i,s){return this.drawShape(new tt(t,e,r,i),s),this}circle(t,e,r,i){return this.drawShape(new Hr(t,e,r),i),this}poly(t,e,r){const i=new Re(t);return i.closePath=e,this.drawShape(i,r),this}regularPoly(t,e,r,i,s=0,o){i=Math.max(i|0,3);const a=-1*Math.PI/2+s,l=Math.PI*2/i,u=[];for(let c=0;c<i;c++){const h=c*l+a;u.push(t+r*Math.cos(h),e+r*Math.sin(h))}return this.poly(u,!0,o),this}roundPoly(t,e,r,i,s,o=0,a){if(i=Math.max(i|0,3),s<=0)return this.regularPoly(t,e,r,i,o);const l=r*Math.sin(Math.PI/i)-.001;s=Math.min(s,l);const u=-1*Math.PI/2+o,c=Math.PI*2/i,h=(i-2)*Math.PI/i/2;for(let f=0;f<i;f++){const d=f*c+u,p=t+r*Math.cos(d),g=e+r*Math.sin(d),m=d+Math.PI+h,v=d-Math.PI-h,x=p+s*Math.cos(m),y=g+s*Math.sin(m),_=p+s*Math.cos(v),A=g+s*Math.sin(v);f===0?this.moveTo(x,y):this.lineTo(x,y),this.quadraticCurveTo(p,g,_,A,a)}return this.closePath()}roundShape(t,e,r=!1,i){return t.length<3?this:(r?fc(this,t,e,i):hc(this,t,e),this.closePath())}filletRect(t,e,r,i,s){if(s===0)return this.rect(t,e,r,i);const o=Math.min(r,i)/2,a=Math.min(o,Math.max(-o,s)),l=t+r,u=e+i,c=a<0?-a:0,h=Math.abs(a);return this.moveTo(t,e+h).arcTo(t+c,e+c,t+h,e,h).lineTo(l-h,e).arcTo(l-c,e+c,l,e+h,h).lineTo(l,u-h).arcTo(l-c,u-c,t+r-h,u,h).lineTo(t+h,u).arcTo(t+c,u-c,t,u-h,h).closePath()}chamferRect(t,e,r,i,s,o){if(s<=0)return this.rect(t,e,r,i);const a=Math.min(s,Math.min(r,i)/2),l=t+r,u=e+i,c=[t+a,e,l-a,e,l,e+a,l,u-a,l-a,u,t+a,u,t,u-a,t,e+a];for(let h=c.length-1;h>=2;h-=2)c[h]===c[h-2]&&c[h-1]===c[h-3]&&c.splice(h-1,2);return this.poly(c,!0,o)}ellipse(t,e,r,i,s){return this.drawShape(new jr(t,e,r,i),s),this}roundRect(t,e,r,i,s,o){return this.drawShape(new qr(t,e,r,i,s),o),this}drawShape(t,e){return this.endPoly(),this.shapePrimitives.push({shape:t,transform:e}),this}startPoly(t,e){let r=this._currentPoly;return r&&this.endPoly(),r=new Re,r.points.push(t,e),this._currentPoly=r,this}endPoly(t=!1){const e=this._currentPoly;return e&&e.points.length>2&&(e.closePath=t,this.shapePrimitives.push({shape:e})),this._currentPoly=null,this}_ensurePoly(t=!0){if(!this._currentPoly&&(this._currentPoly=new Re,t)){const e=this.shapePrimitives[this.shapePrimitives.length-1];if(e){let r=e.shape.x,i=e.shape.y;if(e.transform&&!e.transform.isIdentity()){const s=e.transform,o=r;r=s.a*r+s.c*i+s.tx,i=s.b*o+s.d*i+s.ty}this._currentPoly.points.push(r,i)}else this._currentPoly.points.push(0,0)}}buildPath(){const t=this._graphicsPath2D;this.shapePrimitives.length=0,this._currentPoly=null;for(let e=0;e<t.instructions.length;e++){const r=t.instructions[e];this[r.action](...r.data)}this.finish()}get bounds(){const t=this._bounds;t.clear();const e=this.shapePrimitives;for(let r=0;r<e.length;r++){const i=e[r],s=i.shape.getBounds(dc);i.transform?t.addRect(s,i.transform):t.addRect(s)}return t}}class Jt{constructor(t){this.instructions=[],this.uid=et("graphicsPath"),this._dirty=!0,typeof t=="string"?xu(t,this):this.instructions=(t==null?void 0:t.slice())??[]}get shapePath(){return this._shapePath||(this._shapePath=new pc(this)),this._dirty&&(this._dirty=!1,this._shapePath.buildPath()),this._shapePath}addPath(t,e){return t=t.clone(),this.instructions.push({action:"addPath",data:[t,e]}),this._dirty=!0,this}arc(...t){return this.instructions.push({action:"arc",data:t}),this._dirty=!0,this}arcTo(...t){return this.instructions.push({action:"arcTo",data:t}),this._dirty=!0,this}arcToSvg(...t){return this.instructions.push({action:"arcToSvg",data:t}),this._dirty=!0,this}bezierCurveTo(...t){return this.instructions.push({action:"bezierCurveTo",data:t}),this._dirty=!0,this}bezierCurveToShort(t,e,r,i,s){const o=this.instructions[this.instructions.length-1],a=this.getLastPoint(ot.shared);let l=0,u=0;if(!o||o.action!=="bezierCurveTo")l=a.x,u=a.y;else{l=o.data[2],u=o.data[3];const c=a.x,h=a.y;l=c+(c-l),u=h+(h-u)}return this.instructions.push({action:"bezierCurveTo",data:[l,u,t,e,r,i,s]}),this._dirty=!0,this}closePath(){return this.instructions.push({action:"closePath",data:[]}),this._dirty=!0,this}ellipse(...t){return this.instructions.push({action:"ellipse",data:t}),this._dirty=!0,this}lineTo(...t){return this.instructions.push({action:"lineTo",data:t}),this._dirty=!0,this}moveTo(...t){return this.instructions.push({action:"moveTo",data:t}),this}quadraticCurveTo(...t){return this.instructions.push({action:"quadraticCurveTo",data:t}),this._dirty=!0,this}quadraticCurveToShort(t,e,r){const i=this.instructions[this.instructions.length-1],s=this.getLastPoint(ot.shared);let o=0,a=0;if(!i||i.action!=="quadraticCurveTo")o=s.x,a=s.y;else{o=i.data[0],a=i.data[1];const l=s.x,u=s.y;o=l+(l-o),a=u+(u-a)}return this.instructions.push({action:"quadraticCurveTo",data:[o,a,t,e,r]}),this._dirty=!0,this}rect(t,e,r,i,s){return this.instructions.push({action:"rect",data:[t,e,r,i,s]}),this._dirty=!0,this}circle(t,e,r,i){return this.instructions.push({action:"circle",data:[t,e,r,i]}),this._dirty=!0,this}roundRect(...t){return this.instructions.push({action:"roundRect",data:t}),this._dirty=!0,this}poly(...t){return this.instructions.push({action:"poly",data:t}),this._dirty=!0,this}regularPoly(...t){return this.instructions.push({action:"regularPoly",data:t}),this._dirty=!0,this}roundPoly(...t){return this.instructions.push({action:"roundPoly",data:t}),this._dirty=!0,this}roundShape(...t){return this.instructions.push({action:"roundShape",data:t}),this._dirty=!0,this}filletRect(...t){return this.instructions.push({action:"filletRect",data:t}),this._dirty=!0,this}chamferRect(...t){return this.instructions.push({action:"chamferRect",data:t}),this._dirty=!0,this}star(t,e,r,i,s,o,a){s=s||i/2;const l=-1*Math.PI/2+o,u=r*2,c=Math.PI*2/u,h=[];for(let f=0;f<u;f++){const d=f%2?s:i,p=f*c+l;h.push(t+d*Math.cos(p),e+d*Math.sin(p))}return this.poly(h,!0,a),this}clone(t=!1){const e=new Jt;if(!t)e.instructions=this.instructions.slice();else for(let r=0;r<this.instructions.length;r++){const i=this.instructions[r];e.instructions.push({action:i.action,data:i.data.slice()})}return e}clear(){return this.instructions.length=0,this._dirty=!0,this}transform(t){if(t.isIdentity())return this;const e=t.a,r=t.b,i=t.c,s=t.d,o=t.tx,a=t.ty;let l=0,u=0,c=0,h=0,f=0,d=0,p=0,g=0;for(let m=0;m<this.instructions.length;m++){const v=this.instructions[m],x=v.data;switch(v.action){case"moveTo":case"lineTo":l=x[0],u=x[1],x[0]=e*l+i*u+o,x[1]=r*l+s*u+a;break;case"bezierCurveTo":c=x[0],h=x[1],f=x[2],d=x[3],l=x[4],u=x[5],x[0]=e*c+i*h+o,x[1]=r*c+s*h+a,x[2]=e*f+i*d+o,x[3]=r*f+s*d+a,x[4]=e*l+i*u+o,x[5]=r*l+s*u+a;break;case"quadraticCurveTo":c=x[0],h=x[1],l=x[2],u=x[3],x[0]=e*c+i*h+o,x[1]=r*c+s*h+a,x[2]=e*l+i*u+o,x[3]=r*l+s*u+a;break;case"arcToSvg":l=x[5],u=x[6],p=x[0],g=x[1],x[0]=e*p+i*g,x[1]=r*p+s*g,x[5]=e*l+i*u+o,x[6]=r*l+s*u+a;break;case"circle":x[4]=Fe(x[3],t);break;case"rect":x[4]=Fe(x[4],t);break;case"ellipse":x[8]=Fe(x[8],t);break;case"roundRect":x[5]=Fe(x[5],t);break;case"addPath":x[0].transform(t);break;case"poly":x[2]=Fe(x[2],t);break;default:nt("unknown transform action",v.action);break}}return this._dirty=!0,this}get bounds(){return this.shapePath.bounds}getLastPoint(t){let e=this.instructions.length-1,r=this.instructions[e];if(!r)return t.x=0,t.y=0,t;for(;r.action==="closePath";){if(e--,e<0)return t.x=0,t.y=0,t;r=this.instructions[e]}switch(r.action){case"moveTo":case"lineTo":t.x=r.data[0],t.y=r.data[1];break;case"quadraticCurveTo":t.x=r.data[2],t.y=r.data[3];break;case"bezierCurveTo":t.x=r.data[4],t.y=r.data[5];break;case"arc":case"arcToSvg":t.x=r.data[5],t.y=r.data[6];break;case"addPath":r.data[0].getLastPoint(t);break}return t}}function Fe(n,t){return n?n.prepend(t):t.clone()}function mc(n,t){if(typeof n=="string"){const r=document.createElement("div");r.innerHTML=n.trim(),n=r.querySelector("svg")}const e={context:t,path:new Jt};return po(n,e,null,null),t}function po(n,t,e,r){const i=n.children,{fillStyle:s,strokeStyle:o}=gc(n);s&&e?e={...e,...s}:s&&(e=s),o&&r?r={...r,...o}:o&&(r=o),t.context.fillStyle=e,t.context.strokeStyle=r;let a,l,u,c,h,f,d,p,g,m,v,x,y,_,A,R,T;switch(n.nodeName.toLowerCase()){case"path":_=n.getAttribute("d"),A=new Jt(_),t.context.path(A),e&&t.context.fill(),r&&t.context.stroke();break;case"circle":d=it(n,"cx",0),p=it(n,"cy",0),g=it(n,"r",0),t.context.ellipse(d,p,g,g),e&&t.context.fill(),r&&t.context.stroke();break;case"rect":a=it(n,"x",0),l=it(n,"y",0),R=it(n,"width",0),T=it(n,"height",0),m=it(n,"rx",0),v=it(n,"ry",0),m||v?t.context.roundRect(a,l,R,T,m||v):t.context.rect(a,l,R,T),e&&t.context.fill(),r&&t.context.stroke();break;case"ellipse":d=it(n,"cx",0),p=it(n,"cy",0),m=it(n,"rx",0),v=it(n,"ry",0),t.context.beginPath(),t.context.ellipse(d,p,m,v),e&&t.context.fill(),r&&t.context.stroke();break;case"line":u=it(n,"x1",0),c=it(n,"y1",0),h=it(n,"x2",0),f=it(n,"y2",0),t.context.beginPath(),t.context.moveTo(u,c),t.context.lineTo(h,f),r&&t.context.stroke();break;case"polygon":y=n.getAttribute("points"),x=y.match(/\d+/g).map(F=>parseInt(F,10)),t.context.poly(x,!0),e&&t.context.fill(),r&&t.context.stroke();break;case"polyline":y=n.getAttribute("points"),x=y.match(/\d+/g).map(F=>parseInt(F,10)),t.context.poly(x,!1),r&&t.context.stroke();break;case"g":case"svg":break;default:{console.info(`[SVG parser] <${n.nodeName}> elements unsupported`);break}}for(let F=0;F<i.length;F++)po(i[F],t,e,r)}function it(n,t,e){const r=n.getAttribute(t);return r?Number(r):e}function gc(n){const t=n.getAttribute("style"),e={},r={};let i=!1,s=!1;if(t){const o=t.split(";");for(let a=0;a<o.length;a++){const l=o[a],[u,c]=l.split(":");switch(u){case"stroke":c!=="none"&&(e.color=G.shared.setValue(c).toNumber(),s=!0);break;case"stroke-width":e.width=Number(c);break;case"fill":c!=="none"&&(i=!0,r.color=G.shared.setValue(c).toNumber());break;case"fill-opacity":r.alpha=Number(c);break;case"stroke-opacity":e.alpha=Number(c);break;case"opacity":r.alpha=Number(c),e.alpha=Number(c);break}}}else{const o=n.getAttribute("stroke");o&&o!=="none"&&(s=!0,e.color=G.shared.setValue(o).toNumber(),e.width=it(n,"stroke-width",1));const a=n.getAttribute("fill");a&&a!=="none"&&(i=!0,r.color=G.shared.setValue(a).toNumber())}return{strokeStyle:s?e:null,fillStyle:i?r:null}}function xc(n){return G.isColorLike(n)}function Di(n){return n instanceof Tn}function Gi(n){return n instanceof ge}function vc(n,t,e){const r=G.shared.setValue(t??0);return n.color=r.toNumber(),n.alpha=r.alpha===1?e.alpha:r.alpha,n.texture=k.WHITE,{...e,...n}}function Ni(n,t,e){return n.fill=t,n.color=16777215,n.texture=t.texture,n.matrix=t.transform,{...e,...n}}function $i(n,t,e){return t.buildLinearGradient(),n.fill=t,n.color=16777215,n.texture=t.texture,n.matrix=t.transform,{...e,...n}}function yc(n,t){var i;const e={...t,...n};if(e.texture){if(e.texture!==k.WHITE){const o=((i=e.matrix)==null?void 0:i.invert())||new X;o.translate(e.texture.frame.x,e.texture.frame.y),o.scale(1/e.texture.source.width,1/e.texture.source.height),e.matrix=o}const s=e.texture.source.style;s.addressMode==="clamp-to-edge"&&(s.addressMode="repeat",s.update())}const r=G.shared.setValue(e.color);return e.alpha*=r.alpha,e.color=r.toNumber(),e.matrix=e.matrix?e.matrix.clone():null,e}function Ht(n,t){if(n==null)return null;const e={},r=n;return xc(n)?vc(e,n,t):Di(n)?Ni(e,n,t):Gi(n)?$i(e,n,t):r.fill&&Di(r.fill)?Ni(r,r.fill,t):r.fill&&Gi(r.fill)?$i(r,r.fill,t):yc(r,t)}function bn(n,t){const{width:e,alignment:r,miterLimit:i,cap:s,join:o,...a}=t,l=Ht(n,a);return l?{width:e,alignment:r,miterLimit:i,cap:s,join:o,...l}:null}const _c=new ot,Vi=new X,Zr=class Tt extends St{constructor(){super(...arguments),this.uid=et("graphicsContext"),this.dirty=!0,this.batchMode="auto",this.instructions=[],this._activePath=new Jt,this._transform=new X,this._fillStyle={...Tt.defaultFillStyle},this._strokeStyle={...Tt.defaultStrokeStyle},this._stateStack=[],this._tick=0,this._bounds=new Ft,this._boundsDirty=!0}clone(){const t=new Tt;return t.batchMode=this.batchMode,t.instructions=this.instructions.slice(),t._activePath=this._activePath.clone(),t._transform=this._transform.clone(),t._fillStyle={...this._fillStyle},t._strokeStyle={...this._strokeStyle},t._stateStack=this._stateStack.slice(),t._bounds=this._bounds.clone(),t._boundsDirty=!0,t}get fillStyle(){return this._fillStyle}set fillStyle(t){this._fillStyle=Ht(t,Tt.defaultFillStyle)}get strokeStyle(){return this._strokeStyle}set strokeStyle(t){this._strokeStyle=bn(t,Tt.defaultStrokeStyle)}setFillStyle(t){return this._fillStyle=Ht(t,Tt.defaultFillStyle),this}setStrokeStyle(t){return this._strokeStyle=Ht(t,Tt.defaultStrokeStyle),this}texture(t,e,r,i,s,o){return this.instructions.push({action:"texture",data:{image:t,dx:r||0,dy:i||0,dw:s||t.frame.width,dh:o||t.frame.height,transform:this._transform.clone(),alpha:this._fillStyle.alpha,style:e?G.shared.setValue(e).toNumber():16777215}}),this.onUpdate(),this}beginPath(){return this._activePath=new Jt,this}fill(t,e){let r;const i=this.instructions[this.instructions.length-1];return this._tick===0&&i&&i.action==="stroke"?r=i.data.path:r=this._activePath.clone(),r?(t!=null&&(e!==void 0&&typeof t=="number"&&(I(Y,"GraphicsContext.fill(color, alpha) is deprecated, use GraphicsContext.fill({ color, alpha }) instead"),t={color:t,alpha:e}),this._fillStyle=Ht(t,Tt.defaultFillStyle)),this.instructions.push({action:"fill",data:{style:this.fillStyle,path:r}}),this.onUpdate(),this._initNextPathLocation(),this._tick=0,this):this}_initNextPathLocation(){const{x:t,y:e}=this._activePath.getLastPoint(ot.shared);this._activePath.clear(),this._activePath.moveTo(t,e)}stroke(t){let e;const r=this.instructions[this.instructions.length-1];return this._tick===0&&r&&r.action==="fill"?e=r.data.path:e=this._activePath.clone(),e?(t!=null&&(this._strokeStyle=bn(t,Tt.defaultStrokeStyle)),this.instructions.push({action:"stroke",data:{style:this.strokeStyle,path:e}}),this.onUpdate(),this._initNextPathLocation(),this._tick=0,this):this}cut(){for(let t=0;t<2;t++){const e=this.instructions[this.instructions.length-1-t],r=this._activePath.clone();if(e&&(e.action==="stroke"||e.action==="fill"))if(e.data.hole)e.data.hole.addPath(r);else{e.data.hole=r;break}}return this._initNextPathLocation(),this}arc(t,e,r,i,s,o){this._tick++;const a=this._transform;return this._activePath.arc(a.a*t+a.c*e+a.tx,a.b*t+a.d*e+a.ty,r,i,s,o),this}arcTo(t,e,r,i,s){this._tick++;const o=this._transform;return this._activePath.arcTo(o.a*t+o.c*e+o.tx,o.b*t+o.d*e+o.ty,o.a*r+o.c*i+o.tx,o.b*r+o.d*i+o.ty,s),this}arcToSvg(t,e,r,i,s,o,a){this._tick++;const l=this._transform;return this._activePath.arcToSvg(t,e,r,i,s,l.a*o+l.c*a+l.tx,l.b*o+l.d*a+l.ty),this}bezierCurveTo(t,e,r,i,s,o,a){this._tick++;const l=this._transform;return this._activePath.bezierCurveTo(l.a*t+l.c*e+l.tx,l.b*t+l.d*e+l.ty,l.a*r+l.c*i+l.tx,l.b*r+l.d*i+l.ty,l.a*s+l.c*o+l.tx,l.b*s+l.d*o+l.ty,a),this}closePath(){var t;return this._tick++,(t=this._activePath)==null||t.closePath(),this}ellipse(t,e,r,i){return this._tick++,this._activePath.ellipse(t,e,r,i,this._transform.clone()),this}circle(t,e,r){return this._tick++,this._activePath.circle(t,e,r,this._transform.clone()),this}path(t){return this._tick++,this._activePath.addPath(t,this._transform.clone()),this}lineTo(t,e){this._tick++;const r=this._transform;return this._activePath.lineTo(r.a*t+r.c*e+r.tx,r.b*t+r.d*e+r.ty),this}moveTo(t,e){this._tick++;const r=this._transform,i=this._activePath.instructions,s=r.a*t+r.c*e+r.tx,o=r.b*t+r.d*e+r.ty;return i.length===1&&i[0].action==="moveTo"?(i[0].data[0]=s,i[0].data[1]=o,this):(this._activePath.moveTo(s,o),this)}quadraticCurveTo(t,e,r,i,s){this._tick++;const o=this._transform;return this._activePath.quadraticCurveTo(o.a*t+o.c*e+o.tx,o.b*t+o.d*e+o.ty,o.a*r+o.c*i+o.tx,o.b*r+o.d*i+o.ty,s),this}rect(t,e,r,i){return this._tick++,this._activePath.rect(t,e,r,i,this._transform.clone()),this}roundRect(t,e,r,i,s){return this._tick++,this._activePath.roundRect(t,e,r,i,s,this._transform.clone()),this}poly(t,e){return this._tick++,this._activePath.poly(t,e,this._transform.clone()),this}regularPoly(t,e,r,i,s=0,o){return this._tick++,this._activePath.regularPoly(t,e,r,i,s,o),this}roundPoly(t,e,r,i,s,o){return this._tick++,this._activePath.roundPoly(t,e,r,i,s,o),this}roundShape(t,e,r,i){return this._tick++,this._activePath.roundShape(t,e,r,i),this}filletRect(t,e,r,i,s){return this._tick++,this._activePath.filletRect(t,e,r,i,s),this}chamferRect(t,e,r,i,s,o){return this._tick++,this._activePath.chamferRect(t,e,r,i,s,o),this}star(t,e,r,i,s=0,o=0){return this._tick++,this._activePath.star(t,e,r,i,s,o,this._transform.clone()),this}svg(t){return this._tick++,mc(t,this),this}restore(){const t=this._stateStack.pop();return t&&(this._transform=t.transform,this._fillStyle=t.fillStyle,this._strokeStyle=t.strokeStyle),this}save(){return this._stateStack.push({transform:this._transform.clone(),fillStyle:{...this._fillStyle},strokeStyle:{...this._strokeStyle}}),this}getTransform(){return this._transform}resetTransform(){return this._transform.identity(),this}rotate(t){return this._transform.rotate(t),this}scale(t,e=t){return this._transform.scale(t,e),this}setTransform(t,e,r,i,s,o){return t instanceof X?(this._transform.set(t.a,t.b,t.c,t.d,t.tx,t.ty),this):(this._transform.set(t,e,r,i,s,o),this)}transform(t,e,r,i,s,o){return t instanceof X?(this._transform.append(t),this):(Vi.set(t,e,r,i,s,o),this._transform.append(Vi),this)}translate(t,e=t){return this._transform.translate(t,e),this}clear(){return this._activePath.clear(),this.instructions.length=0,this.resetTransform(),this.onUpdate(),this}onUpdate(){this.dirty||(this.emit("update",this,16),this.dirty=!0,this._boundsDirty=!0)}get bounds(){if(!this._boundsDirty)return this._bounds;const t=this._bounds;t.clear();for(let e=0;e<this.instructions.length;e++){const r=this.instructions[e],i=r.action;if(i==="fill"){const s=r.data;t.addBounds(s.path.bounds)}else if(i==="texture"){const s=r.data;t.addFrame(s.dx,s.dy,s.dx+s.dw,s.dy+s.dh,s.transform)}if(i==="stroke"){const s=r.data,o=s.style.width/2,a=s.path.bounds;t.addFrame(a.minX-o,a.minY-o,a.maxX+o,a.maxY+o)}}return t}containsPoint(t){var i;if(!this.bounds.containsPoint(t.x,t.y))return!1;const e=this.instructions;let r=!1;for(let s=0;s<e.length;s++){const o=e[s],a=o.data,l=a.path;if(!o.action||!l)continue;const u=a.style,c=l.shapePath.shapePrimitives;for(let h=0;h<c.length;h++){const f=c[h].shape;if(!u||!f)continue;const d=c[h].transform,p=d?d.applyInverse(t,_c):t;o.action==="fill"?r=f.contains(p.x,p.y):r=f.strokeContains(p.x,p.y,u.width);const g=a.hole;if(g){const m=(i=g.shapePath)==null?void 0:i.shapePrimitives;if(m)for(let v=0;v<m.length;v++)m[v].shape.contains(p.x,p.y)&&(r=!1)}if(r)return!0}}return r}destroy(t=!1){if(this._stateStack.length=0,this._transform=null,this.emit("destroy",this),this.removeAllListeners(),typeof t=="boolean"?t:t==null?void 0:t.texture){const r=typeof t=="boolean"?t:t==null?void 0:t.textureSource;this._fillStyle.texture&&this._fillStyle.texture.destroy(r),this._strokeStyle.texture&&this._strokeStyle.texture.destroy(r)}this._fillStyle=null,this._strokeStyle=null,this.instructions=null,this._activePath=null,this._bounds=null,this._stateStack=null,this.customShader=null,this._transform=null}};Zr.defaultFillStyle={color:16777215,alpha:1,texture:k.WHITE,matrix:null,fill:null};Zr.defaultStrokeStyle={width:1,color:16777215,alpha:1,alignment:.5,miterLimit:10,cap:"butt",join:"miter",texture:k.WHITE,matrix:null,fill:null};let dt=Zr;const Wi=["align","breakWords","cssOverrides","fontVariant","fontWeight","leading","letterSpacing","lineHeight","padding","textBaseline","trim","whiteSpace","wordWrap","wordWrapWidth","fontFamily","fontStyle","fontSize"];function bc(n){const t=[];let e=0;for(let r=0;r<Wi.length;r++){const i=`_${Wi[r]}`;t[e++]=n[i]}return e=mo(n._fill,t,e),e=Sc(n._stroke,t,e),e=Cc(n.dropShadow,t,e),t.join("-")}function mo(n,t,e){var r;return n&&(t[e++]=n.color,t[e++]=n.alpha,t[e++]=(r=n.fill)==null?void 0:r.styleKey),e}function Sc(n,t,e){return n&&(e=mo(n,t,e),t[e++]=n.width,t[e++]=n.alignment,t[e++]=n.cap,t[e++]=n.join,t[e++]=n.miterLimit),e}function Cc(n,t,e){return n&&(t[e++]=n.alpha,t[e++]=n.angle,t[e++]=n.blur,t[e++]=n.distance,t[e++]=G.shared.setValue(n.color).toNumber()),e}const Qr=class ie extends St{constructor(t={}){super(),wc(t);const e={...ie.defaultTextStyle,...t};for(const r in e){const i=r;this[i]=e[r]}this.update()}get align(){return this._align}set align(t){this._align=t,this.update()}get breakWords(){return this._breakWords}set breakWords(t){this._breakWords=t,this.update()}get dropShadow(){return this._dropShadow}set dropShadow(t){t!==null&&typeof t=="object"?this._dropShadow=this._createProxy({...ie.defaultDropShadow,...t}):this._dropShadow=t?this._createProxy({...ie.defaultDropShadow}):null,this.update()}get fontFamily(){return this._fontFamily}set fontFamily(t){this._fontFamily=t,this.update()}get fontSize(){return this._fontSize}set fontSize(t){typeof t=="string"?this._fontSize=parseInt(t,10):this._fontSize=t,this.update()}get fontStyle(){return this._fontStyle}set fontStyle(t){this._fontStyle=t,this.update()}get fontVariant(){return this._fontVariant}set fontVariant(t){this._fontVariant=t,this.update()}get fontWeight(){return this._fontWeight}set fontWeight(t){this._fontWeight=t,this.update()}get leading(){return this._leading}set leading(t){this._leading=t,this.update()}get letterSpacing(){return this._letterSpacing}set letterSpacing(t){this._letterSpacing=t,this.update()}get lineHeight(){return this._lineHeight}set lineHeight(t){this._lineHeight=t,this.update()}get padding(){return this._padding}set padding(t){this._padding=t,this.update()}get trim(){return this._trim}set trim(t){this._trim=t,this.update()}get textBaseline(){return this._textBaseline}set textBaseline(t){this._textBaseline=t,this.update()}get whiteSpace(){return this._whiteSpace}set whiteSpace(t){this._whiteSpace=t,this.update()}get wordWrap(){return this._wordWrap}set wordWrap(t){this._wordWrap=t,this.update()}get wordWrapWidth(){return this._wordWrapWidth}set wordWrapWidth(t){this._wordWrapWidth=t,this.update()}get fill(){return this._originalFill}set fill(t){t!==this._originalFill&&(this._originalFill=t,this._isFillStyle(t)&&(this._originalFill=this._createProxy({...dt.defaultFillStyle,...t},()=>{this._fill=Ht({...this._originalFill},dt.defaultFillStyle)})),this._fill=Ht(t===0?"black":t,dt.defaultFillStyle),this.update())}get stroke(){return this._originalStroke}set stroke(t){t!==this._originalStroke&&(this._originalStroke=t,this._isFillStyle(t)&&(this._originalStroke=this._createProxy({...dt.defaultStrokeStyle,...t},()=>{this._stroke=bn({...this._originalStroke},dt.defaultStrokeStyle)})),this._stroke=bn(t,dt.defaultStrokeStyle),this.update())}_generateKey(){return this._styleKey=bc(this),this._styleKey}update(){this._styleKey=null,this.emit("update",this)}reset(){const t=ie.defaultTextStyle;for(const e in t)this[e]=t[e]}get styleKey(){return this._styleKey||this._generateKey()}clone(){return new ie({align:this.align,breakWords:this.breakWords,dropShadow:this._dropShadow?{...this._dropShadow}:null,fill:this._fill,fontFamily:this.fontFamily,fontSize:this.fontSize,fontStyle:this.fontStyle,fontVariant:this.fontVariant,fontWeight:this.fontWeight,leading:this.leading,letterSpacing:this.letterSpacing,lineHeight:this.lineHeight,padding:this.padding,stroke:this._stroke,textBaseline:this.textBaseline,whiteSpace:this.whiteSpace,wordWrap:this.wordWrap,wordWrapWidth:this.wordWrapWidth})}destroy(t=!1){var r,i,s,o;if(this.removeAllListeners(),typeof t=="boolean"?t:t==null?void 0:t.texture){const a=typeof t=="boolean"?t:t==null?void 0:t.textureSource;(r=this._fill)!=null&&r.texture&&this._fill.texture.destroy(a),(i=this._originalFill)!=null&&i.texture&&this._originalFill.texture.destroy(a),(s=this._stroke)!=null&&s.texture&&this._stroke.texture.destroy(a),(o=this._originalStroke)!=null&&o.texture&&this._originalStroke.texture.destroy(a)}this._fill=null,this._stroke=null,this.dropShadow=null,this._originalStroke=null,this._originalFill=null}_createProxy(t,e){return new Proxy(t,{set:(r,i,s)=>(r[i]=s,e==null||e(i,s),this.update(),!0)})}_isFillStyle(t){return(t??null)!==null&&!(G.isColorLike(t)||t instanceof ge||t instanceof Tn)}};Qr.defaultDropShadow={alpha:1,angle:Math.PI/6,blur:0,color:"black",distance:5};Qr.defaultTextStyle={align:"left",breakWords:!1,dropShadow:null,fill:"black",fontFamily:"Arial",fontSize:26,fontStyle:"normal",fontVariant:"normal",fontWeight:"normal",leading:0,letterSpacing:0,lineHeight:0,padding:0,stroke:null,textBaseline:"alphabetic",trim:!1,whiteSpace:"pre",wordWrap:!1,wordWrapWidth:100};let gt=Qr;function wc(n){const t=n;if(typeof t.dropShadow=="boolean"&&t.dropShadow){const e=gt.defaultDropShadow;n.dropShadow={alpha:t.dropShadowAlpha??e.alpha,angle:t.dropShadowAngle??e.angle,blur:t.dropShadowBlur??e.blur,color:t.dropShadowColor??e.color,distance:t.dropShadowDistance??e.distance}}if(t.strokeThickness!==void 0){I(Y,"strokeThickness is now a part of stroke");const e=t.stroke;let r={};if(G.isColorLike(e))r.color=e;else if(e instanceof ge||e instanceof Tn)r.fill=e;else if(Object.hasOwnProperty.call(e,"color")||Object.hasOwnProperty.call(e,"fill"))r=e;else throw new Error("Invalid stroke value.");n.stroke={...r,width:t.strokeThickness}}if(Array.isArray(t.fillGradientStops)){I(Y,"gradient fill is now a fill pattern: `new FillGradient(...)`");let e;n.fontSize==null?n.fontSize=gt.defaultTextStyle.fontSize:typeof n.fontSize=="string"?e=parseInt(n.fontSize,10):e=n.fontSize;const r=new ge(0,0,0,e*1.7),i=t.fillGradientStops.map(s=>G.shared.setValue(s).toNumber());i.forEach((s,o)=>{const a=o/(i.length-1);r.addColorStop(a,s)}),n.fill={fill:r}}}class Ac{constructor(t){this._canvasPool=Object.create(null),this.canvasOptions=t||{},this.enableFullScreen=!1}_createCanvasAndContext(t,e){const r=J.get().createCanvas();r.width=t,r.height=e;const i=r.getContext("2d");return{canvas:r,context:i}}getOptimalCanvasAndContext(t,e,r=1){t=Math.ceil(t*r-1e-6),e=Math.ceil(e*r-1e-6),t=xn(t),e=xn(e);const i=(t<<17)+(e<<1);this._canvasPool[i]||(this._canvasPool[i]=[]);let s=this._canvasPool[i].pop();return s||(s=this._createCanvasAndContext(t,e)),s}returnCanvasAndContext(t){const e=t.canvas,{width:r,height:i}=e,s=(r<<17)+(i<<1);this._canvasPool[s].push(t)}clear(){this._canvasPool={}}}const Xi=new Ac,Tc=["serif","sans-serif","monospace","cursive","fantasy","system-ui"];function zr(n){const t=typeof n.fontSize=="number"?`${n.fontSize}px`:n.fontSize;let e=n.fontFamily;Array.isArray(n.fontFamily)||(e=n.fontFamily.split(","));for(let r=e.length-1;r>=0;r--){let i=e[r].trim();!/([\"\'])[^\'\"]+\1/.test(i)&&!Tc.includes(i)&&(i=`"${i}"`),e[r]=i}return`${n.fontStyle} ${n.fontVariant} ${n.fontWeight} ${t} ${e.join(",")}`}const ir={willReadFrequently:!0},wt=class z{static get experimentalLetterSpacingSupported(){let t=z._experimentalLetterSpacingSupported;if(t!==void 0){const e=J.get().getCanvasRenderingContext2D().prototype;t=z._experimentalLetterSpacingSupported="letterSpacing"in e||"textLetterSpacing"in e}return t}constructor(t,e,r,i,s,o,a,l,u){this.text=t,this.style=e,this.width=r,this.height=i,this.lines=s,this.lineWidths=o,this.lineHeight=a,this.maxLineWidth=l,this.fontProperties=u}static measureText(t=" ",e,r=z._canvas,i=e.wordWrap){var x;const s=`${t}:${e.styleKey}`;if(z._measurementCache[s])return z._measurementCache[s];const o=zr(e),a=z.measureFont(o);a.fontSize===0&&(a.fontSize=e.fontSize,a.ascent=e.fontSize);const l=z.__context;l.font=o;const c=(i?z._wordWrap(t,e,r):t).split(/(?:\r\n|\r|\n)/),h=new Array(c.length);let f=0;for(let y=0;y<c.length;y++){const _=z._measureText(c[y],e.letterSpacing,l);h[y]=_,f=Math.max(f,_)}const d=((x=e._stroke)==null?void 0:x.width)||0;let p=f+d;e.dropShadow&&(p+=e.dropShadow.distance);const g=e.lineHeight||a.fontSize;let m=Math.max(g,a.fontSize+d)+(c.length-1)*(g+e.leading);return e.dropShadow&&(m+=e.dropShadow.distance),new z(t,e,p,m,c,h,g+e.leading,f,a)}static _measureText(t,e,r){let i=!1;z.experimentalLetterSpacingSupported&&(z.experimentalLetterSpacing?(r.letterSpacing=`${e}px`,r.textLetterSpacing=`${e}px`,i=!0):(r.letterSpacing="0px",r.textLetterSpacing="0px"));let s=r.measureText(t).width;return s>0&&(i?s-=e:s+=(z.graphemeSegmenter(t).length-1)*e),s}static _wordWrap(t,e,r=z._canvas){const i=r.getContext("2d",ir);let s=0,o="",a="";const l=Object.create(null),{letterSpacing:u,whiteSpace:c}=e,h=z._collapseSpaces(c),f=z._collapseNewlines(c);let d=!h;const p=e.wordWrapWidth+u,g=z._tokenize(t);for(let m=0;m<g.length;m++){let v=g[m];if(z._isNewline(v)){if(!f){a+=z._addLine(o),d=!h,o="",s=0;continue}v=" "}if(h){const y=z.isBreakingSpace(v),_=z.isBreakingSpace(o[o.length-1]);if(y&&_)continue}const x=z._getFromCache(v,u,l,i);if(x>p)if(o!==""&&(a+=z._addLine(o),o="",s=0),z.canBreakWords(v,e.breakWords)){const y=z.wordWrapSplit(v);for(let _=0;_<y.length;_++){let A=y[_],R=A,T=1;for(;y[_+T];){const b=y[_+T];if(!z.canBreakChars(R,b,v,_,e.breakWords))A+=b;else break;R=b,T++}_+=T-1;const F=z._getFromCache(A,u,l,i);F+s>p&&(a+=z._addLine(o),d=!1,o="",s=0),o+=A,s+=F}}else{o.length>0&&(a+=z._addLine(o),o="",s=0);const y=m===g.length-1;a+=z._addLine(v,!y),d=!1,o="",s=0}else x+s>p&&(d=!1,a+=z._addLine(o),o="",s=0),(o.length>0||!z.isBreakingSpace(v)||d)&&(o+=v,s+=x)}return a+=z._addLine(o,!1),a}static _addLine(t,e=!0){return t=z._trimRight(t),t=e?`${t}
`:t,t}static _getFromCache(t,e,r,i){let s=r[t];return typeof s!="number"&&(s=z._measureText(t,e,i)+e,r[t]=s),s}static _collapseSpaces(t){return t==="normal"||t==="pre-line"}static _collapseNewlines(t){return t==="normal"}static _trimRight(t){if(typeof t!="string")return"";for(let e=t.length-1;e>=0;e--){const r=t[e];if(!z.isBreakingSpace(r))break;t=t.slice(0,-1)}return t}static _isNewline(t){return typeof t!="string"?!1:z._newlines.includes(t.charCodeAt(0))}static isBreakingSpace(t,e){return typeof t!="string"?!1:z._breakingSpaces.includes(t.charCodeAt(0))}static _tokenize(t){const e=[];let r="";if(typeof t!="string")return e;for(let i=0;i<t.length;i++){const s=t[i],o=t[i+1];if(z.isBreakingSpace(s,o)||z._isNewline(s)){r!==""&&(e.push(r),r=""),e.push(s);continue}r+=s}return r!==""&&e.push(r),e}static canBreakWords(t,e){return e}static canBreakChars(t,e,r,i,s){return!0}static wordWrapSplit(t){return z.graphemeSegmenter(t)}static measureFont(t){if(z._fonts[t])return z._fonts[t];const e=z._context;e.font=t;const r=e.measureText(z.METRICS_STRING+z.BASELINE_SYMBOL),i={ascent:r.actualBoundingBoxAscent,descent:r.actualBoundingBoxDescent,fontSize:r.actualBoundingBoxAscent+r.actualBoundingBoxDescent};return z._fonts[t]=i,i}static clearMetrics(t=""){t?delete z._fonts[t]:z._fonts={}}static get _canvas(){if(!z.__canvas){let t;try{const e=new OffscreenCanvas(0,0),r=e.getContext("2d",ir);if(r!=null&&r.measureText)return z.__canvas=e,e;t=J.get().createCanvas()}catch{t=J.get().createCanvas()}t.width=t.height=10,z.__canvas=t}return z.__canvas}static get _context(){return z.__context||(z.__context=z._canvas.getContext("2d",ir)),z.__context}};wt.METRICS_STRING="|ÉqÅ";wt.BASELINE_SYMBOL="M";wt.BASELINE_MULTIPLIER=1.4;wt.HEIGHT_MULTIPLIER=2;wt.graphemeSegmenter=(()=>{if(typeof(Intl==null?void 0:Intl.Segmenter)=="function"){const n=new Intl.Segmenter;return t=>[...n.segment(t)].map(e=>e.segment)}return n=>[...n]})();wt.experimentalLetterSpacing=!1;wt._fonts={};wt._newlines=[10,13];wt._breakingSpaces=[9,32,8192,8193,8194,8195,8196,8197,8198,8200,8201,8202,8287,12288];wt._measurementCache={};let Mr=wt;function Yi(n,t){if(n.texture===k.WHITE&&!n.fill)return G.shared.setValue(n.color).toHex();if(n.fill){if(n.fill instanceof Tn){const e=n.fill,r=t.createPattern(e.texture.source.resource,"repeat"),i=e.transform.copyTo(X.shared);return i.scale(e.texture.frame.width,e.texture.frame.height),r.setTransform(i),r}else if(n.fill instanceof ge){const e=n.fill;if(e.type==="linear"){const r=t.createLinearGradient(e.x0,e.y0,e.x1,e.y1);return e.gradientStops.forEach(i=>{r.addColorStop(i.offset,G.shared.setValue(i.color).toHex())}),r}}}else{const e=t.createPattern(n.texture.source.resource,"repeat"),r=n.matrix.copyTo(X.shared);return r.scale(n.texture.frame.width,n.texture.frame.height),e.setTransform(r),e}return nt("FillStyle not recognised",n),"red"}function go(n){if(n==="")return[];typeof n=="string"&&(n=[n]);const t=[];for(let e=0,r=n.length;e<r;e++){const i=n[e];if(Array.isArray(i)){if(i.length!==2)throw new Error(`[BitmapFont]: Invalid character range length, expecting 2 got ${i.length}.`);if(i[0].length===0||i[1].length===0)throw new Error("[BitmapFont]: Invalid character delimiter.");const s=i[0].charCodeAt(0),o=i[1].charCodeAt(0);if(o<s)throw new Error("[BitmapFont]: Invalid character range.");for(let a=s,l=o;a<=l;a++)t.push(String.fromCharCode(a))}else t.push(...Array.from(i))}if(t.length===0)throw new Error("[BitmapFont]: Empty set when resolving characters.");return t}const xo=class vo extends Js{constructor(t){super(),this.resolution=1,this.pages=[],this._padding=0,this._measureCache=Object.create(null),this._currentChars=[],this._currentX=0,this._currentY=0,this._currentPageIndex=-1,this._skipKerning=!1;const e={...vo.defaultOptions,...t};this._textureSize=e.textureSize,this._mipmap=e.mipmap;const r=e.style.clone();e.overrideFill&&(r._fill.color=16777215,r._fill.alpha=1,r._fill.texture=k.WHITE,r._fill.fill=null),this.applyFillAsTint=e.overrideFill;const i=r.fontSize;r.fontSize=this.baseMeasurementFontSize;const s=zr(r);e.overrideSize?r._stroke&&(r._stroke.width*=this.baseRenderedFontSize/i):r.fontSize=this.baseRenderedFontSize=i,this._style=r,this._skipKerning=e.skipKerning??!1,this.resolution=e.resolution??1,this._padding=e.padding??4,this.fontMetrics=Mr.measureFont(s),this.lineHeight=r.lineHeight||this.fontMetrics.fontSize||r.fontSize}ensureCharacters(t){var g,m;const e=go(t).filter(v=>!this._currentChars.includes(v)).filter((v,x,y)=>y.indexOf(v)===x);if(!e.length)return;this._currentChars=[...this._currentChars,...e];let r;this._currentPageIndex===-1?r=this._nextPage():r=this.pages[this._currentPageIndex];let{canvas:i,context:s}=r.canvasAndContext,o=r.texture.source;const a=this._style;let l=this._currentX,u=this._currentY;const c=this.baseRenderedFontSize/this.baseMeasurementFontSize,h=this._padding*c,f=a.fontStyle==="italic"?2:1;let d=0,p=!1;for(let v=0;v<e.length;v++){const x=e[v],y=Mr.measureText(x,a,i,!1);y.lineHeight=y.height;const _=f*y.width*c,A=y.height*c,R=_+h*2,T=A+h*2;if(p=!1,x!==`
`&&x!=="\r"&&x!=="	"&&x!==" "&&(p=!0,d=Math.ceil(Math.max(T,d))),l+R>this._textureSize&&(u+=d,d=T,l=0,u+d>this._textureSize)){o.update();const b=this._nextPage();i=b.canvasAndContext.canvas,s=b.canvasAndContext.context,o=b.texture.source,u=0}const F=_/c-(((g=a.dropShadow)==null?void 0:g.distance)??0)-(((m=a._stroke)==null?void 0:m.width)??0);if(this.chars[x]={id:x.codePointAt(0),xOffset:-this._padding,yOffset:-this._padding,xAdvance:F,kerning:{}},p){this._drawGlyph(s,y,l+h,u+h,c,a);const b=o.width*c,S=o.height*c,H=new tt(l/b*o.width,u/S*o.height,R/b*o.width,T/S*o.height);this.chars[x].texture=new k({source:o,frame:H}),l+=Math.ceil(R)}}o.update(),this._currentX=l,this._currentY=u,this._skipKerning&&this._applyKerning(e,s)}get pageTextures(){return I(Y,"BitmapFont.pageTextures is deprecated, please use BitmapFont.pages instead."),this.pages}_applyKerning(t,e){const r=this._measureCache;for(let i=0;i<t.length;i++){const s=t[i];for(let o=0;o<this._currentChars.length;o++){const a=this._currentChars[o];let l=r[s];l||(l=r[s]=e.measureText(s).width);let u=r[a];u||(u=r[a]=e.measureText(a).width);let c=e.measureText(s+a).width,h=c-(l+u);h&&(this.chars[s].kerning[a]=h),c=e.measureText(s+a).width,h=c-(l+u),h&&(this.chars[a].kerning[s]=h)}}}_nextPage(){this._currentPageIndex++;const t=this.resolution,e=Xi.getOptimalCanvasAndContext(this._textureSize,this._textureSize,t);this._setupContext(e.context,this._style,t);const r=t*(this.baseRenderedFontSize/this.baseMeasurementFontSize),i=new k({source:new te({resource:e.canvas,resolution:r,alphaMode:"premultiply-alpha-on-upload",autoGenerateMipmaps:this._mipmap})}),s={canvasAndContext:e,texture:i};return this.pages[this._currentPageIndex]=s,s}_setupContext(t,e,r){e.fontSize=this.baseRenderedFontSize,t.scale(r,r),t.font=zr(e),e.fontSize=this.baseMeasurementFontSize,t.textBaseline=e.textBaseline;const i=e._stroke,s=(i==null?void 0:i.width)??0;if(i&&(t.lineWidth=s,t.lineJoin=i.join,t.miterLimit=i.miterLimit,t.strokeStyle=Yi(i,t)),e._fill&&(t.fillStyle=Yi(e._fill,t)),e.dropShadow){const o=e.dropShadow,a=G.shared.setValue(o.color).toArray(),l=o.blur*r,u=o.distance*r;t.shadowColor=`rgba(${a[0]*255},${a[1]*255},${a[2]*255},${o.alpha})`,t.shadowBlur=l,t.shadowOffsetX=Math.cos(o.angle)*u,t.shadowOffsetY=Math.sin(o.angle)*u}else t.shadowColor="black",t.shadowBlur=0,t.shadowOffsetX=0,t.shadowOffsetY=0}_drawGlyph(t,e,r,i,s,o){const a=e.text,l=e.fontProperties,u=o._stroke,c=((u==null?void 0:u.width)??0)*s,h=r+c/2,f=i-c/2,d=l.descent*s,p=e.lineHeight*s;o.stroke&&c&&t.strokeText(a,h,f+p-d),o._fill&&t.fillText(a,h,f+p-d)}destroy(){super.destroy();for(let t=0;t<this.pages.length;t++){const{canvasAndContext:e,texture:r}=this.pages[t];e.canvas.width=e.canvas.width,Xi.returnCanvasAndContext(e),r.destroy(!0)}this.pages=null}};xo.defaultOptions={textureSize:512,style:new gt,mipmap:!0};let Hi=xo;function Pc(n,t,e){const r={width:0,height:0,offsetY:0,scale:t.fontSize/e.baseMeasurementFontSize,lines:[{width:0,charPositions:[],spaceWidth:0,spacesIndex:[],chars:[]}]};r.offsetY=e.baseLineOffset;let i=r.lines[0],s=null,o=!0;const a={spaceWord:!1,width:0,start:0,index:0,positions:[],chars:[]},l=d=>{const p=i.width;for(let g=0;g<a.index;g++){const m=d.positions[g];i.chars.push(d.chars[g]),i.charPositions.push(m+p)}i.width+=d.width,o=!1,a.width=0,a.index=0,a.chars.length=0},u=()=>{let d=i.chars.length-1,p=i.chars[d];for(;p===" ";)i.width-=e.chars[p].xAdvance,p=i.chars[--d];r.width=Math.max(r.width,i.width),i={width:0,charPositions:[],chars:[],spaceWidth:0,spacesIndex:[]},o=!0,r.lines.push(i),r.height+=e.lineHeight},c=e.baseMeasurementFontSize/t.fontSize,h=t.letterSpacing*c,f=t.wordWrapWidth*c;for(let d=0;d<n.length+1;d++){let p;const g=d===n.length;g||(p=n[d]);const m=e.chars[p]||e.chars[" "];if(/(?:\s)/.test(p)||p==="\r"||p===`
`||g){if(!o&&t.wordWrap&&i.width+a.width-h>f?(u(),l(a),g||i.charPositions.push(0)):(a.start=i.width,l(a),g||i.charPositions.push(0)),p==="\r"||p===`
`)i.width!==0&&u();else if(!g){const _=m.xAdvance+(m.kerning[s]||0)+h;i.width+=_,i.spaceWidth=_,i.spacesIndex.push(i.charPositions.length),i.chars.push(p)}}else{const y=m.kerning[s]||0,_=m.xAdvance+y+h;a.positions[a.index++]=a.width+y,a.chars.push(p),a.width+=_}s=p}return u(),t.align==="center"?Fc(r):t.align==="right"?zc(r):t.align==="justify"&&Mc(r),r}function Fc(n){for(let t=0;t<n.lines.length;t++){const e=n.lines[t],r=n.width/2-e.width/2;for(let i=0;i<e.charPositions.length;i++)e.charPositions[i]+=r}}function zc(n){for(let t=0;t<n.lines.length;t++){const e=n.lines[t],r=n.width-e.width;for(let i=0;i<e.charPositions.length;i++)e.charPositions[i]+=r}}function Mc(n){const t=n.width;for(let e=0;e<n.lines.length;e++){const r=n.lines[e];let i=0,s=r.spacesIndex[i++],o=0;const a=r.spacesIndex.length,u=(t-r.width)/a;for(let c=0;c<r.charPositions.length;c++)c===s&&(s=r.spacesIndex[i++],o+=u),r.charPositions[c]+=o}}let on=0;class Ic{constructor(){this.ALPHA=[["a","z"],["A","Z"]," "],this.NUMERIC=[["0","9"]],this.ALPHANUMERIC=[["a","z"],["A","Z"],["0","9"]," "],this.ASCII=[[" ","~"]],this.defaultOptions={chars:this.ALPHANUMERIC,resolution:1,padding:4,skipKerning:!1}}getFont(t,e){var o;let r=`${e.fontFamily}-bitmap`,i=!0;if(e._fill.fill&&!e._stroke)r+=e._fill.fill.styleKey,i=!1;else if(e._stroke||e.dropShadow){let a=e.styleKey;a=a.substring(0,a.lastIndexOf("-")),r=`${a}-bitmap`,i=!1}if(!Z.has(r)){const a=new Hi({style:e,overrideFill:i,overrideSize:!0,...this.defaultOptions});on++,on>50&&nt("BitmapText",`You have dynamically created ${on} bitmap fonts, this can be inefficient. Try pre installing your font styles using \`BitmapFont.install({name:"style1", style})\``),a.once("destroy",()=>{on--,Z.remove(r)}),Z.set(r,a)}const s=Z.get(r);return(o=s.ensureCharacters)==null||o.call(s,t),s}getLayout(t,e){const r=this.getFont(t,e);return Pc([...t],e,r)}measureText(t,e){return this.getLayout(t,e)}install(...t){var u,c,h,f;let e=t[0];typeof e=="string"&&(e={name:e,style:t[1],chars:(u=t[2])==null?void 0:u.chars,resolution:(c=t[2])==null?void 0:c.resolution,padding:(h=t[2])==null?void 0:h.padding,skipKerning:(f=t[2])==null?void 0:f.skipKerning},I(Y,"BitmapFontManager.install(name, style, options) is deprecated, use BitmapFontManager.install({name, style, ...options})"));const r=e==null?void 0:e.name;if(!r)throw new Error("[BitmapFontManager] Property `name` is required.");e={...this.defaultOptions,...e};const i=e.style,s=i instanceof gt?i:new gt(i),o=s._fill.fill!==null&&s._fill.fill!==void 0,a=new Hi({style:s,overrideFill:o,skipKerning:e.skipKerning,padding:e.padding,resolution:e.resolution,overrideSize:!1}),l=go(e.chars);return a.ensureCharacters(l.join("")),Z.set(`${r}-bitmap`,a),a.once("destroy",()=>Z.remove(`${r}-bitmap`)),a}uninstall(t){const e=`${t}-bitmap`,r=Z.get(e);r&&(Z.remove(e),r.destroy())}}const ji=new Ic;class yo extends Js{constructor(t,e){super();const{textures:r,data:i}=t;Object.keys(i.pages).forEach(s=>{const o=i.pages[parseInt(s,10)],a=r[o.id];this.pages.push({texture:a})}),Object.keys(i.chars).forEach(s=>{const o=i.chars[s],{frame:a,source:l}=r[o.page],u=new tt(o.x+a.x,o.y+a.y,o.width,o.height),c=new k({source:l,frame:u});this.chars[s]={id:s.codePointAt(0),xOffset:o.xOffset,yOffset:o.yOffset,xAdvance:o.xAdvance,kerning:o.kerning??{},texture:c}}),this.baseRenderedFontSize=i.fontSize,this.baseMeasurementFontSize=i.fontSize,this.fontMetrics={ascent:0,descent:0,fontSize:i.fontSize},this.baseLineOffset=i.baseLineOffset,this.lineHeight=i.lineHeight,this.fontFamily=i.fontFamily,this.distanceField=i.distanceField??{type:"none",range:0},this.url=e}destroy(){super.destroy();for(let t=0;t<this.pages.length;t++){const{texture:e}=this.pages[t];e.destroy(!0)}this.pages=null}static install(t){ji.install(t)}static uninstall(t){ji.uninstall(t)}}const sr={test(n){return typeof n=="string"&&n.startsWith("info face=")},parse(n){const t=n.match(/^[a-z]+\s+.+$/gm),e={info:[],common:[],page:[],char:[],chars:[],kerning:[],kernings:[],distanceField:[]};for(const h in t){const f=t[h].match(/^[a-z]+/gm)[0],d=t[h].match(/[a-zA-Z]+=([^\s"']+|"([^"]*)")/gm),p={};for(const g in d){const m=d[g].split("="),v=m[0],x=m[1].replace(/"/gm,""),y=parseFloat(x),_=isNaN(y)?x:y;p[v]=_}e[f].push(p)}const r={chars:{},pages:[],lineHeight:0,fontSize:0,fontFamily:"",distanceField:null,baseLineOffset:0},[i]=e.info,[s]=e.common,[o]=e.distanceField??[];o&&(r.distanceField={range:parseInt(o.distanceRange,10),type:o.fieldType}),r.fontSize=parseInt(i.size,10),r.fontFamily=i.face,r.lineHeight=parseInt(s.lineHeight,10);const a=e.page;for(let h=0;h<a.length;h++)r.pages.push({id:parseInt(a[h].id,10)||0,file:a[h].file});const l={};r.baseLineOffset=r.lineHeight-parseInt(s.base,10);const u=e.char;for(let h=0;h<u.length;h++){const f=u[h],d=parseInt(f.id,10);let p=f.letter??f.char??String.fromCharCode(d);p==="space"&&(p=" "),l[d]=p,r.chars[p]={id:d,page:parseInt(f.page,10)||0,x:parseInt(f.x,10),y:parseInt(f.y,10),width:parseInt(f.width,10),height:parseInt(f.height,10),xOffset:parseInt(f.xoffset,10),yOffset:parseInt(f.yoffset,10),xAdvance:parseInt(f.xadvance,10),kerning:{}}}const c=e.kerning||[];for(let h=0;h<c.length;h++){const f=parseInt(c[h].first,10),d=parseInt(c[h].second,10),p=parseInt(c[h].amount,10);r.chars[l[d]].kerning[l[f]]=p}return r}},qi={test(n){const t=n;return typeof t!="string"&&"getElementsByTagName"in t&&t.getElementsByTagName("page").length&&t.getElementsByTagName("info")[0].getAttribute("face")!==null},parse(n){const t={chars:{},pages:[],lineHeight:0,fontSize:0,fontFamily:"",distanceField:null,baseLineOffset:0},e=n.getElementsByTagName("info")[0],r=n.getElementsByTagName("common")[0],i=n.getElementsByTagName("distanceField")[0];i&&(t.distanceField={type:i.getAttribute("fieldType"),range:parseInt(i.getAttribute("distanceRange"),10)});const s=n.getElementsByTagName("page"),o=n.getElementsByTagName("char"),a=n.getElementsByTagName("kerning");t.fontSize=parseInt(e.getAttribute("size"),10),t.fontFamily=e.getAttribute("face"),t.lineHeight=parseInt(r.getAttribute("lineHeight"),10);for(let u=0;u<s.length;u++)t.pages.push({id:parseInt(s[u].getAttribute("id"),10)||0,file:s[u].getAttribute("file")});const l={};t.baseLineOffset=t.lineHeight-parseInt(r.getAttribute("base"),10);for(let u=0;u<o.length;u++){const c=o[u],h=parseInt(c.getAttribute("id"),10);let f=c.getAttribute("letter")??c.getAttribute("char")??String.fromCharCode(h);f==="space"&&(f=" "),l[h]=f,t.chars[f]={id:h,page:parseInt(c.getAttribute("page"),10)||0,x:parseInt(c.getAttribute("x"),10),y:parseInt(c.getAttribute("y"),10),width:parseInt(c.getAttribute("width"),10),height:parseInt(c.getAttribute("height"),10),xOffset:parseInt(c.getAttribute("xoffset"),10),yOffset:parseInt(c.getAttribute("yoffset"),10),xAdvance:parseInt(c.getAttribute("xadvance"),10),kerning:{}}}for(let u=0;u<a.length;u++){const c=parseInt(a[u].getAttribute("first"),10),h=parseInt(a[u].getAttribute("second"),10),f=parseInt(a[u].getAttribute("amount"),10);t.chars[l[h]].kerning[l[c]]=f}return t}},Ki={test(n){return typeof n=="string"&&n.includes("<font>")?qi.test(J.get().parseXML(n)):!1},parse(n){return qi.parse(J.get().parseXML(n))}},Oc=[".xml",".fnt"],Rc={extension:{type:O.CacheParser,name:"cacheBitmapFont"},test:n=>n instanceof yo,getCacheableAssets(n,t){const e={};return n.forEach(r=>{e[r]=t,e[`${r}-bitmap`]=t}),e[`${t.fontFamily}-bitmap`]=t,e}},Ec={extension:{type:O.LoadParser,priority:Ut.Normal},name:"loadBitmapFont",test(n){return Oc.includes(ft.extname(n).toLowerCase())},async testParse(n){return sr.test(n)||Ki.test(n)},async parse(n,t,e){const r=sr.test(n)?sr.parse(n):Ki.parse(n),{src:i}=t,{pages:s}=r,o=[],a=r.distanceField?{scaleMode:"linear",alphaMode:"premultiply-alpha-on-upload",autoGenerateMipmaps:!1,resolution:1}:{};for(let h=0;h<s.length;++h){const f=s[h].file;let d=ft.join(ft.dirname(i),f);d=mr(d,i),o.push({src:d,data:a})}const l=await e.load(o),u=o.map(h=>l[h.src]);return new yo({data:r,textures:u},i)},async load(n,t){return await(await J.get().fetch(n)).text()},async unload(n,t,e){await Promise.all(n.pages.map(r=>e.unload(r.texture.source._sourceOrigin))),n.destroy()}};class Uc{constructor(t,e=!1){this._loader=t,this._assetList=[],this._isLoading=!1,this._maxConcurrent=1,this.verbose=e}add(t){t.forEach(e=>{this._assetList.push(e)}),this.verbose&&console.log("[BackgroundLoader] assets: ",this._assetList),this._isActive&&!this._isLoading&&this._next()}async _next(){if(this._assetList.length&&this._isActive){this._isLoading=!0;const t=[],e=Math.min(this._assetList.length,this._maxConcurrent);for(let r=0;r<e;r++)t.push(this._assetList.pop());await this._loader.load(t),this._isLoading=!1,this._next()}}get active(){return this._isActive}set active(t){this._isActive!==t&&(this._isActive=t,t&&!this._isLoading&&this._next())}}const kc={extension:{type:O.CacheParser,name:"cacheTextureArray"},test:n=>Array.isArray(n)&&n.every(t=>t instanceof k),getCacheableAssets:(n,t)=>{const e={};return n.forEach(r=>{t.forEach((i,s)=>{e[r+(s===0?"":s+1)]=i})}),e}};async function _o(n){if("Image"in globalThis)return new Promise(t=>{const e=new Image;e.onload=()=>{t(!0)},e.onerror=()=>{t(!1)},e.src=n});if("createImageBitmap"in globalThis&&"fetch"in globalThis){try{const t=await(await fetch(n)).blob();await createImageBitmap(t)}catch{return!1}return!0}return!1}const Bc={extension:{type:O.DetectionParser,priority:1},test:async()=>_o("data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAAB0AAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAIAAAACAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQ0MAAAAABNjb2xybmNseAACAAIAAYAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAACVtZGF0EgAKCBgANogQEAwgMg8f8D///8WfhwB8+ErK42A="),add:async n=>[...n,"avif"],remove:async n=>n.filter(t=>t!=="avif")},Zi=["png","jpg","jpeg"],Lc={extension:{type:O.DetectionParser,priority:-1},test:()=>Promise.resolve(!0),add:async n=>[...n,...Zi],remove:async n=>n.filter(t=>!Zi.includes(t))},Dc="WorkerGlobalScope"in globalThis&&globalThis instanceof globalThis.WorkerGlobalScope;function Jr(n){return Dc?!1:document.createElement("video").canPlayType(n)!==""}const Gc={extension:{type:O.DetectionParser,priority:0},test:async()=>Jr("video/mp4"),add:async n=>[...n,"mp4","m4v"],remove:async n=>n.filter(t=>t!=="mp4"&&t!=="m4v")},Nc={extension:{type:O.DetectionParser,priority:0},test:async()=>Jr("video/ogg"),add:async n=>[...n,"ogv"],remove:async n=>n.filter(t=>t!=="ogv")},$c={extension:{type:O.DetectionParser,priority:0},test:async()=>Jr("video/webm"),add:async n=>[...n,"webm"],remove:async n=>n.filter(t=>t!=="webm")},Vc={extension:{type:O.DetectionParser,priority:0},test:async()=>_o("data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA="),add:async n=>[...n,"webp"],remove:async n=>n.filter(t=>t!=="webp")};class Wc{constructor(){this._parsers=[],this._parsersValidated=!1,this.parsers=new Proxy(this._parsers,{set:(t,e,r)=>(this._parsersValidated=!1,t[e]=r,!0)}),this.promiseCache={}}reset(){this._parsersValidated=!1,this.promiseCache={}}_getLoadPromiseAndParser(t,e){const r={promise:null,parser:null};return r.promise=(async()=>{var o,a;let i=null,s=null;if(e.loadParser&&(s=this._parserHash[e.loadParser],s||nt(`[Assets] specified load parser "${e.loadParser}" not found while loading ${t}`)),!s){for(let l=0;l<this.parsers.length;l++){const u=this.parsers[l];if(u.load&&((o=u.test)!=null&&o.call(u,t,e,this))){s=u;break}}if(!s)return nt(`[Assets] ${t} could not be loaded as we don't know how to parse it, ensure the correct parser has been added`),null}i=await s.load(t,e,this),r.parser=s;for(let l=0;l<this.parsers.length;l++){const u=this.parsers[l];u.parse&&u.parse&&await((a=u.testParse)==null?void 0:a.call(u,i,e,this))&&(i=await u.parse(i,e,this)||i,r.parser=u)}return i})(),r}async load(t,e){this._parsersValidated||this._validateParsers();let r=0;const i={},s=yn(t),o=_t(t,u=>({alias:[u],src:u,data:{}})),a=o.length,l=o.map(async u=>{const c=ft.toAbsolute(u.src);if(!i[u.src])try{this.promiseCache[c]||(this.promiseCache[c]=this._getLoadPromiseAndParser(c,u)),i[u.src]=await this.promiseCache[c].promise,e&&e(++r/a)}catch(h){throw delete this.promiseCache[c],delete i[u.src],new Error(`[Loader.load] Failed to load ${c}.
${h}`)}});return await Promise.all(l),s?i[o[0].src]:i}async unload(t){const r=_t(t,i=>({alias:[i],src:i})).map(async i=>{var a,l;const s=ft.toAbsolute(i.src),o=this.promiseCache[s];if(o){const u=await o.promise;delete this.promiseCache[s],await((l=(a=o.parser)==null?void 0:a.unload)==null?void 0:l.call(a,u,i,this))}});await Promise.all(r)}_validateParsers(){this._parsersValidated=!0,this._parserHash=this._parsers.filter(t=>t.name).reduce((t,e)=>(e.name?t[e.name]&&nt(`[Assets] loadParser name conflict "${e.name}"`):nt("[Assets] loadParser should have a name"),{...t,[e.name]:e}),{})}}function ye(n,t){if(Array.isArray(t)){for(const e of t)if(n.startsWith(`data:${e}`))return!0;return!1}return n.startsWith(`data:${t}`)}function _e(n,t){const e=n.split("?")[0],r=ft.extname(e).toLowerCase();return Array.isArray(t)?t.includes(r):r===t}const Xc=".json",Yc="application/json",Hc={extension:{type:O.LoadParser,priority:Ut.Low},name:"loadJson",test(n){return ye(n,Yc)||_e(n,Xc)},async load(n){return await(await J.get().fetch(n)).json()}},jc=".txt",qc="text/plain",Kc={name:"loadTxt",extension:{type:O.LoadParser,priority:Ut.Low,name:"loadTxt"},test(n){return ye(n,qc)||_e(n,jc)},async load(n){return await(await J.get().fetch(n)).text()}},Zc=["normal","bold","100","200","300","400","500","600","700","800","900"],Qc=[".ttf",".otf",".woff",".woff2"],Jc=["font/ttf","font/otf","font/woff","font/woff2"],th=/^(--|-?[A-Z_])[0-9A-Z_-]*$/i;function eh(n){const t=ft.extname(n),i=ft.basename(n,t).replace(/(-|_)/g," ").toLowerCase().split(" ").map(a=>a.charAt(0).toUpperCase()+a.slice(1));let s=i.length>0;for(const a of i)if(!a.match(th)){s=!1;break}let o=i.join(" ");return s||(o=`"${o.replace(/[\\"]/g,"\\$&")}"`),o}const nh=/^[0-9A-Za-z%:/?#\[\]@!\$&'()\*\+,;=\-._~]*$/;function rh(n){return nh.test(n)?n:encodeURI(n)}const ih={extension:{type:O.LoadParser,priority:Ut.Low},name:"loadWebFont",test(n){return ye(n,Jc)||_e(n,Qc)},async load(n,t){var r,i,s;const e=J.get().getFontFaceSet();if(e){const o=[],a=((r=t.data)==null?void 0:r.family)??eh(n),l=((s=(i=t.data)==null?void 0:i.weights)==null?void 0:s.filter(c=>Zc.includes(c)))??["normal"],u=t.data??{};for(let c=0;c<l.length;c++){const h=l[c],f=new FontFace(a,`url(${rh(n)})`,{...u,weight:h});await f.load(),e.add(f),o.push(f)}return Z.set(`${a}-and-url`,{url:n,fontFaces:o}),o.length===1?o[0]:o}return nt("[loadWebFont] FontFace API is not supported. Skipping loading font"),null},unload(n){(Array.isArray(n)?n:[n]).forEach(t=>{Z.remove(t.family),J.get().getFontFaceSet().delete(t)})}};function ti(n,t=1){var r;const e=(r=ve.RETINA_PREFIX)==null?void 0:r.exec(n);return e?parseFloat(e[1]):t}function ei(n,t,e){n.label=e,n._sourceOrigin=e;const r=new k({source:n,label:e}),i=()=>{delete t.promiseCache[e],Z.has(e)&&Z.remove(e)};return r.source.once("destroy",()=>{t.promiseCache[e]&&(nt("[Assets] A TextureSource managed by Assets was destroyed instead of unloaded! Use Assets.unload() instead of destroying the TextureSource."),i())}),r.once("destroy",()=>{n.destroyed||(nt("[Assets] A Texture managed by Assets was destroyed instead of unloaded! Use Assets.unload() instead of destroying the Texture."),i())}),r}const sh=".svg",oh="image/svg+xml",ah={extension:{type:O.LoadParser,priority:Ut.Low,name:"loadSVG"},name:"loadSVG",config:{crossOrigin:"anonymous",parseAsGraphicsContext:!1},test(n){return ye(n,oh)||_e(n,sh)},async load(n,t,e){return t.data.parseAsGraphicsContext??this.config.parseAsGraphicsContext?uh(n):lh(n,t,e,this.config.crossOrigin)},unload(n){n.destroy(!0)}};async function lh(n,t,e,r){var m,v,x;const s=await(await J.get().fetch(n)).blob(),o=URL.createObjectURL(s),a=new Image;a.src=o,a.crossOrigin=r,await a.decode(),URL.revokeObjectURL(o);const l=document.createElement("canvas"),u=l.getContext("2d"),c=((m=t.data)==null?void 0:m.resolution)||ti(n),h=((v=t.data)==null?void 0:v.width)??a.width,f=((x=t.data)==null?void 0:x.height)??a.height;l.width=h*c,l.height=f*c,u.drawImage(a,0,0,h*c,f*c);const{parseAsGraphicsContext:d,...p}=t.data,g=new te({resource:l,alphaMode:"premultiply-alpha-on-upload",resolution:c,...p});return ei(g,e,n)}async function uh(n){const e=await(await J.get().fetch(n)).text(),r=new dt;return r.svg(e),r}const ch=`(function () {
    'use strict';

    const WHITE_PNG = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+ip1sAAAAASUVORK5CYII=";
    async function checkImageBitmap() {
      try {
        if (typeof createImageBitmap !== "function")
          return false;
        const response = await fetch(WHITE_PNG);
        const imageBlob = await response.blob();
        const imageBitmap = await createImageBitmap(imageBlob);
        return imageBitmap.width === 1 && imageBitmap.height === 1;
      } catch (e) {
        return false;
      }
    }
    void checkImageBitmap().then((result) => {
      self.postMessage(result);
    });

})();
`;let he=null,Ir=class{constructor(){he||(he=URL.createObjectURL(new Blob([ch],{type:"application/javascript"}))),this.worker=new Worker(he)}};Ir.revokeObjectURL=function(){he&&(URL.revokeObjectURL(he),he=null)};const hh=`(function () {
    'use strict';

    async function loadImageBitmap(url) {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(\`[WorkerManager.loadImageBitmap] Failed to fetch \${url}: \${response.status} \${response.statusText}\`);
      }
      const imageBlob = await response.blob();
      const imageBitmap = await createImageBitmap(imageBlob);
      return imageBitmap;
    }
    self.onmessage = async (event) => {
      try {
        const imageBitmap = await loadImageBitmap(event.data.data[0]);
        self.postMessage({
          data: imageBitmap,
          uuid: event.data.uuid,
          id: event.data.id
        }, [imageBitmap]);
      } catch (e) {
        self.postMessage({
          error: e,
          uuid: event.data.uuid,
          id: event.data.id
        });
      }
    };

})();
`;let fe=null;class bo{constructor(){fe||(fe=URL.createObjectURL(new Blob([hh],{type:"application/javascript"}))),this.worker=new Worker(fe)}}bo.revokeObjectURL=function(){fe&&(URL.revokeObjectURL(fe),fe=null)};let Qi=0,or;class fh{constructor(){this._initialized=!1,this._createdWorkers=0,this._workerPool=[],this._queue=[],this._resolveHash={}}isImageBitmapSupported(){return this._isImageBitmapSupported!==void 0?this._isImageBitmapSupported:(this._isImageBitmapSupported=new Promise(t=>{const{worker:e}=new Ir;e.addEventListener("message",r=>{e.terminate(),Ir.revokeObjectURL(),t(r.data)})}),this._isImageBitmapSupported)}loadImageBitmap(t){return this._run("loadImageBitmap",[t])}async _initWorkers(){this._initialized||(this._initialized=!0)}_getWorker(){or===void 0&&(or=navigator.hardwareConcurrency||4);let t=this._workerPool.pop();return!t&&this._createdWorkers<or&&(this._createdWorkers++,t=new bo().worker,t.addEventListener("message",e=>{this._complete(e.data),this._returnWorker(e.target),this._next()})),t}_returnWorker(t){this._workerPool.push(t)}_complete(t){t.error!==void 0?this._resolveHash[t.uuid].reject(t.error):this._resolveHash[t.uuid].resolve(t.data),this._resolveHash[t.uuid]=null}async _run(t,e){await this._initWorkers();const r=new Promise((i,s)=>{this._queue.push({id:t,arguments:e,resolve:i,reject:s})});return this._next(),r}_next(){if(!this._queue.length)return;const t=this._getWorker();if(!t)return;const e=this._queue.pop(),r=e.id;this._resolveHash[Qi]={resolve:e.resolve,reject:e.reject},t.postMessage({data:e.arguments,uuid:Qi++,id:r})}}const Ji=new fh,dh=[".jpeg",".jpg",".png",".webp",".avif"],ph=["image/jpeg","image/png","image/webp","image/avif"];async function mh(n){const t=await J.get().fetch(n);if(!t.ok)throw new Error(`[loadImageBitmap] Failed to fetch ${n}: ${t.status} ${t.statusText}`);const e=await t.blob();return await createImageBitmap(e)}const So={name:"loadTextures",extension:{type:O.LoadParser,priority:Ut.High,name:"loadTextures"},config:{preferWorkers:!0,preferCreateImageBitmap:!0,crossOrigin:"anonymous"},test(n){return ye(n,ph)||_e(n,dh)},async load(n,t,e){var s;let r=null;globalThis.createImageBitmap&&this.config.preferCreateImageBitmap?this.config.preferWorkers&&await Ji.isImageBitmapSupported()?r=await Ji.loadImageBitmap(n):r=await mh(n):r=await new Promise(o=>{r=new Image,r.crossOrigin=this.config.crossOrigin,r.src=n,r.complete?o(r):r.onload=()=>{o(r)}});const i=new te({resource:r,alphaMode:"premultiply-alpha-on-upload",resolution:((s=t.data)==null?void 0:s.resolution)||ti(n),...t.data});return ei(i,e,n)},unload(n){n.destroy(!0)}},Co=[".mp4",".m4v",".webm",".ogg",".ogv",".h264",".avi",".mov"],gh=Co.map(n=>`video/${n.substring(1)}`);function xh(n,t,e){e===void 0&&!t.startsWith("data:")?n.crossOrigin=yh(t):e!==!1&&(n.crossOrigin=typeof e=="string"?e:"anonymous")}function vh(n){return new Promise((t,e)=>{n.addEventListener("canplaythrough",r),n.addEventListener("error",i),n.load();function r(){s(),t()}function i(o){s(),e(o)}function s(){n.removeEventListener("canplaythrough",r),n.removeEventListener("error",i)}})}function yh(n,t=globalThis.location){if(n.startsWith("data:"))return"";t=t||globalThis.location;const e=new URL(n,document.baseURI);return e.hostname!==t.hostname||e.port!==t.port||e.protocol!==t.protocol?"anonymous":""}const _h={name:"loadVideo",extension:{type:O.LoadParser,name:"loadVideo"},test(n){const t=ye(n,gh),e=_e(n,Co);return t||e},async load(n,t,e){var l,u;const r={...an.defaultOptions,resolution:((l=t.data)==null?void 0:l.resolution)||ti(n),alphaMode:((u=t.data)==null?void 0:u.alphaMode)||await zs(),...t.data},i=document.createElement("video"),s={preload:r.autoLoad!==!1?"auto":void 0,"webkit-playsinline":r.playsinline!==!1?"":void 0,playsinline:r.playsinline!==!1?"":void 0,muted:r.muted===!0?"":void 0,loop:r.loop===!0?"":void 0,autoplay:r.autoPlay!==!1?"":void 0};Object.keys(s).forEach(c=>{const h=s[c];h!==void 0&&i.setAttribute(c,h)}),r.muted===!0&&(i.muted=!0),xh(i,n,r.crossorigin);const o=document.createElement("source");let a;if(n.startsWith("data:"))a=n.slice(5,n.indexOf(";"));else if(!n.startsWith("blob:")){const c=n.split("?")[0].slice(n.lastIndexOf(".")+1).toLowerCase();a=an.MIME_TYPES[c]||`video/${c}`}return o.src=n,a&&(o.type=a),new Promise(c=>{const h=async()=>{const f=new an({...r,resource:i});i.removeEventListener("canplay",h),t.data.preload&&await vh(i),c(ei(f,e,n))};i.addEventListener("canplay",h),i.appendChild(o)})},unload(n){n.destroy(!0)}},wo={extension:{type:O.ResolveParser,name:"resolveTexture"},test:So.test,parse:n=>{var t;return{resolution:parseFloat(((t=ve.RETINA_PREFIX.exec(n))==null?void 0:t[1])??"1"),format:n.split(".").pop(),src:n}}},bh={extension:{type:O.ResolveParser,priority:-2,name:"resolveJson"},test:n=>ve.RETINA_PREFIX.test(n)&&n.endsWith(".json"),parse:wo.parse};class Sh{constructor(){this._detections=[],this._initialized=!1,this.resolver=new ve,this.loader=new Wc,this.cache=Z,this._backgroundLoader=new Uc(this.loader),this._backgroundLoader.active=!0,this.reset()}async init(t={}){var s,o;if(this._initialized){nt("[Assets]AssetManager already initialized, did you load before calling this Assets.init()?");return}if(this._initialized=!0,t.defaultSearchParams&&this.resolver.setDefaultSearchParams(t.defaultSearchParams),t.basePath&&(this.resolver.basePath=t.basePath),t.bundleIdentifier&&this.resolver.setBundleIdentifier(t.bundleIdentifier),t.manifest){let a=t.manifest;typeof a=="string"&&(a=await this.load(a)),this.resolver.addManifest(a)}const e=((s=t.texturePreference)==null?void 0:s.resolution)??1,r=typeof e=="number"?[e]:e,i=await this._detectFormats({preferredFormats:(o=t.texturePreference)==null?void 0:o.format,skipDetections:t.skipDetections,detections:this._detections});this.resolver.prefer({params:{format:i,resolution:r}}),t.preferences&&this.setPreferences(t.preferences)}add(t){this.resolver.add(t)}async load(t,e){this._initialized||await this.init();const r=yn(t),i=_t(t).map(a=>{if(typeof a!="string"){const l=this.resolver.getAlias(a);return l.some(u=>!this.resolver.hasKey(u))&&this.add(a),Array.isArray(l)?l[0]:l}return this.resolver.hasKey(a)||this.add({alias:a,src:a}),a}),s=this.resolver.resolve(i),o=await this._mapLoadToResolve(s,e);return r?o[i[0]]:o}addBundle(t,e){this.resolver.addBundle(t,e)}async loadBundle(t,e){this._initialized||await this.init();let r=!1;typeof t=="string"&&(r=!0,t=[t]);const i=this.resolver.resolveBundle(t),s={},o=Object.keys(i);let a=0,l=0;const u=()=>{e==null||e(++a/l)},c=o.map(h=>{const f=i[h];return l+=Object.keys(f).length,this._mapLoadToResolve(f,u).then(d=>{s[h]=d})});return await Promise.all(c),r?s[t[0]]:s}async backgroundLoad(t){this._initialized||await this.init(),typeof t=="string"&&(t=[t]);const e=this.resolver.resolve(t);this._backgroundLoader.add(Object.values(e))}async backgroundLoadBundle(t){this._initialized||await this.init(),typeof t=="string"&&(t=[t]);const e=this.resolver.resolveBundle(t);Object.values(e).forEach(r=>{this._backgroundLoader.add(Object.values(r))})}reset(){this.resolver.reset(),this.loader.reset(),this.cache.reset(),this._initialized=!1}get(t){if(typeof t=="string")return Z.get(t);const e={};for(let r=0;r<t.length;r++)e[r]=Z.get(t[r]);return e}async _mapLoadToResolve(t,e){const r=[...new Set(Object.values(t))];this._backgroundLoader.active=!1;const i=await this.loader.load(r,e);this._backgroundLoader.active=!0;const s={};return r.forEach(o=>{const a=i[o.src],l=[o.src];o.alias&&l.push(...o.alias),l.forEach(u=>{s[u]=a}),Z.set(l,a)}),s}async unload(t){this._initialized||await this.init();const e=_t(t).map(i=>typeof i!="string"?i.src:i),r=this.resolver.resolve(e);await this._unloadFromResolved(r)}async unloadBundle(t){this._initialized||await this.init(),t=_t(t);const e=this.resolver.resolveBundle(t),r=Object.keys(e).map(i=>this._unloadFromResolved(e[i]));await Promise.all(r)}async _unloadFromResolved(t){const e=Object.values(t);e.forEach(r=>{Z.remove(r.src)}),await this.loader.unload(e)}async _detectFormats(t){let e=[];t.preferredFormats&&(e=Array.isArray(t.preferredFormats)?t.preferredFormats:[t.preferredFormats]);for(const r of t.detections)t.skipDetections||await r.test()?e=await r.add(e):t.skipDetections||(e=await r.remove(e));return e=e.filter((r,i)=>e.indexOf(r)===i),e}get detections(){return this._detections}setPreferences(t){this.loader.parsers.forEach(e=>{e.config&&Object.keys(e.config).filter(r=>r in t).forEach(r=>{e.config[r]=t[r]})})}}const ce=new Sh;lt.handleByList(O.LoadParser,ce.loader.parsers).handleByList(O.ResolveParser,ce.resolver.parsers).handleByList(O.CacheParser,ce.cache.parsers).handleByList(O.DetectionParser,ce.detections);lt.add(kc,Lc,Bc,Vc,Gc,Nc,$c,Hc,Kc,ih,ah,So,_h,Ec,Rc,wo,bh);const ts={loader:O.LoadParser,resolver:O.ResolveParser,cache:O.CacheParser,detection:O.DetectionParser};lt.handle(O.Asset,n=>{const t=n.ref;Object.entries(ts).filter(([e])=>!!t[e]).forEach(([e,r])=>lt.add(Object.assign(t[e],{extension:t[e].extension??r})))},n=>{const t=n.ref;Object.keys(ts).filter(e=>!!t[e]).forEach(e=>lt.remove(t[e]))});var Ch=`in vec2 aPosition;
out vec2 vTextureCoord;

uniform vec4 uInputSize;
uniform vec4 uOutputFrame;
uniform vec4 uOutputTexture;

vec4 filterVertexPosition( void )
{
    vec2 position = aPosition * uOutputFrame.zw + uOutputFrame.xy;
    
    position.x = position.x * (2.0 / uOutputTexture.x) - 1.0;
    position.y = position.y * (2.0*uOutputTexture.z / uOutputTexture.y) - uOutputTexture.z;

    return vec4(position, 0.0, 1.0);
}

vec2 filterTextureCoord( void )
{
    return aPosition * (uOutputFrame.zw * uInputSize.zw);
}

void main(void)
{
    gl_Position = filterVertexPosition();
    vTextureCoord = filterTextureCoord();
}
`,wh=`
in vec2 vTextureCoord;

out vec4 finalColor;

uniform float uAlpha;
uniform sampler2D uTexture;

void main()
{
    finalColor =  texture(uTexture, vTextureCoord) * uAlpha;
}
`,es=`struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

struct AlphaUniforms {
  uAlpha:f32,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;
@group(0) @binding(1) var uTexture: texture_2d<f32>;
@group(0) @binding(2) var uSampler : sampler;

@group(1) @binding(0) var<uniform> alphaUniforms : AlphaUniforms;

struct VSOutput {
    @builtin(position) position: vec4<f32>,
    @location(0) uv : vec2<f32>
  };

fn filterVertexPosition(aPosition:vec2<f32>) -> vec4<f32>
{
    var position = aPosition * gfu.uOutputFrame.zw + gfu.uOutputFrame.xy;

    position.x = position.x * (2.0 / gfu.uOutputTexture.x) - 1.0;
    position.y = position.y * (2.0*gfu.uOutputTexture.z / gfu.uOutputTexture.y) - gfu.uOutputTexture.z;

    return vec4(position, 0.0, 1.0);
}

fn filterTextureCoord( aPosition:vec2<f32> ) -> vec2<f32>
{
    return aPosition * (gfu.uOutputFrame.zw * gfu.uInputSize.zw);
}

fn globalTextureCoord( aPosition:vec2<f32> ) -> vec2<f32>
{
  return  (aPosition.xy / gfu.uGlobalFrame.zw) + (gfu.uGlobalFrame.xy / gfu.uGlobalFrame.zw);  
}

fn getSize() -> vec2<f32>
{
  return gfu.uGlobalFrame.zw;
}
  
@vertex
fn mainVertex(
  @location(0) aPosition : vec2<f32>, 
) -> VSOutput {
  return VSOutput(
   filterVertexPosition(aPosition),
   filterTextureCoord(aPosition)
  );
}

@fragment
fn mainFragment(
  @location(0) uv: vec2<f32>,
  @builtin(position) position: vec4<f32>
) -> @location(0) vec4<f32> {
 
    var sample = textureSample(uTexture, uSampler, uv);
    
    return sample * alphaUniforms.uAlpha;
}`;const Ao=class To extends D{constructor(t){t={...To.defaultOptions,...t};const e=B.from({vertex:{source:es,entryPoint:"mainVertex"},fragment:{source:es,entryPoint:"mainFragment"}}),r=L.from({vertex:Ch,fragment:wh,name:"alpha-filter"}),{alpha:i,...s}=t,o=new Gs({uAlpha:{value:i,type:"f32"}});super({...s,gpuProgram:e,glProgram:r,resources:{alphaUniforms:o}})}get alpha(){return this.resources.alphaUniforms.uniforms.uAlpha}set alpha(t){this.resources.alphaUniforms.uniforms.uAlpha=t}};Ao.defaultOptions={alpha:1};let Ah=Ao,Th=0;class Ph{constructor(t){this._poolKeyHash=Object.create(null),this._texturePool={},this.textureOptions=t||{},this.enableFullScreen=!1}createTexture(t,e,r){const i=new Ct({...this.textureOptions,width:t,height:e,resolution:1,antialias:r,autoGarbageCollect:!0});return new k({source:i,label:`texturePool_${Th++}`})}getOptimalTexture(t,e,r=1,i){let s=Math.ceil(t*r-1e-6),o=Math.ceil(e*r-1e-6);s=xn(s),o=xn(o);const a=(s<<17)+(o<<1)+(i?1:0);this._texturePool[a]||(this._texturePool[a]=[]);let l=this._texturePool[a].pop();return l||(l=this.createTexture(s,o,i)),l.source._resolution=r,l.source.width=s/r,l.source.height=o/r,l.source.pixelWidth=s,l.source.pixelHeight=o,l.frame.x=0,l.frame.y=0,l.frame.width=t,l.frame.height=e,l.updateUvs(),this._poolKeyHash[l.uid]=a,l}getSameSizeTexture(t,e=!1){const r=t.source;return this.getOptimalTexture(t.width,t.height,r._resolution,e)}returnTexture(t){const e=this._poolKeyHash[t.uid];this._texturePool[e].push(t)}clear(t){if(t=t!==!1,t)for(const e in this._texturePool){const r=this._texturePool[e];if(r)for(let i=0;i<r.length;i++)r[i].destroy(!0)}this._texturePool={}}}const mt=new Ph,Po={5:[.153388,.221461,.250301],7:[.071303,.131514,.189879,.214607],9:[.028532,.067234,.124009,.179044,.20236],11:[.0093,.028002,.065984,.121703,.175713,.198596],13:[.002406,.009255,.027867,.065666,.121117,.174868,.197641],15:[489e-6,.002403,.009246,.02784,.065602,.120999,.174697,.197448]},Fh=["in vec2 vBlurTexCoords[%size%];","uniform sampler2D uTexture;","out vec4 finalColor;","void main(void)","{","    finalColor = vec4(0.0);","    %blur%","}"].join(`
`);function zh(n){const t=Po[n],e=t.length;let r=Fh,i="";const s="finalColor += texture(uTexture, vBlurTexCoords[%index%]) * %value%;";let o;for(let a=0;a<n;a++){let l=s.replace("%index%",a.toString());o=a,a>=e&&(o=n-a-1),l=l.replace("%value%",t[o].toString()),i+=l,i+=`
`}return r=r.replace("%blur%",i),r=r.replace("%size%",n.toString()),r}const Mh=`
    in vec2 aPosition;

    uniform float uStrength;

    out vec2 vBlurTexCoords[%size%];

    uniform vec4 uInputSize;
    uniform vec4 uOutputFrame;
    uniform vec4 uOutputTexture;

    vec4 filterVertexPosition( void )
{
    vec2 position = aPosition * uOutputFrame.zw + uOutputFrame.xy;
    
    position.x = position.x * (2.0 / uOutputTexture.x) - 1.0;
    position.y = position.y * (2.0*uOutputTexture.z / uOutputTexture.y) - uOutputTexture.z;

    return vec4(position, 0.0, 1.0);
}

    vec2 filterTextureCoord( void )
    {
        return aPosition * (uOutputFrame.zw * uInputSize.zw);
    }

    void main(void)
    {
        gl_Position = filterVertexPosition();

        float pixelStrength = uInputSize.%dimension% * uStrength;

        vec2 textureCoord = filterTextureCoord();
        %blur%
    }`;function Ih(n,t){const e=Math.ceil(n/2);let r=Mh,i="",s;t?s="vBlurTexCoords[%index%] =  textureCoord + vec2(%sampleIndex% * pixelStrength, 0.0);":s="vBlurTexCoords[%index%] =  textureCoord + vec2(0.0, %sampleIndex% * pixelStrength);";for(let o=0;o<n;o++){let a=s.replace("%index%",o.toString());a=a.replace("%sampleIndex%",`${o-(e-1)}.0`),i+=a,i+=`
`}return r=r.replace("%blur%",i),r=r.replace("%size%",n.toString()),r=r.replace("%dimension%",t?"z":"w"),r}function Oh(n,t){const e=Ih(t,n),r=zh(t);return L.from({vertex:e,fragment:r,name:`blur-${n?"horizontal":"vertical"}-pass-filter`})}var Rh=`

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

struct BlurUniforms {
  uStrength:f32,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;
@group(0) @binding(1) var uTexture: texture_2d<f32>;
@group(0) @binding(2) var uSampler : sampler;

@group(1) @binding(0) var<uniform> blurUniforms : BlurUniforms;


struct VSOutput {
    @builtin(position) position: vec4<f32>,
    %blur-struct%
  };

fn filterVertexPosition(aPosition:vec2<f32>) -> vec4<f32>
{
    var position = aPosition * gfu.uOutputFrame.zw + gfu.uOutputFrame.xy;

    position.x = position.x * (2.0 / gfu.uOutputTexture.x) - 1.0;
    position.y = position.y * (2.0*gfu.uOutputTexture.z / gfu.uOutputTexture.y) - gfu.uOutputTexture.z;

    return vec4(position, 0.0, 1.0);
}

fn filterTextureCoord( aPosition:vec2<f32> ) -> vec2<f32>
{
    return aPosition * (gfu.uOutputFrame.zw * gfu.uInputSize.zw);
}

fn globalTextureCoord( aPosition:vec2<f32> ) -> vec2<f32>
{
  return  (aPosition.xy / gfu.uGlobalFrame.zw) + (gfu.uGlobalFrame.xy / gfu.uGlobalFrame.zw);  
}

fn getSize() -> vec2<f32>
{
  return gfu.uGlobalFrame.zw;
}


@vertex
fn mainVertex(
  @location(0) aPosition : vec2<f32>, 
) -> VSOutput {

  let filteredCord = filterTextureCoord(aPosition);

  let strength = gfu.uInputSize.w * blurUniforms.uStrength;

  return VSOutput(
   filterVertexPosition(aPosition),
    %blur-vertex-out%
  );
}

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  %blur-fragment-in%
) -> @location(0) vec4<f32> {

    var   finalColor = vec4(0.0);

    %blur-sampling%

    return finalColor;
}`;function Eh(n,t){const e=Po[t],r=e.length,i=[],s=[],o=[];for(let h=0;h<t;h++){i[h]=`@location(${h}) offset${h}: vec2<f32>,`,n?s[h]=`filteredCord + vec2(${h-r+1} * strength, 0.0),`:s[h]=`filteredCord + vec2(0.0, ${h-r+1} * strength),`;const f=h<r?h:t-h-1,d=e[f].toString();o[h]=`finalColor += textureSample(uTexture, uSampler, offset${h}) * ${d};`}const a=i.join(`
`),l=s.join(`
`),u=o.join(`
`),c=Rh.replace("%blur-struct%",a).replace("%blur-vertex-out%",l).replace("%blur-fragment-in%",a).replace("%blur-sampling%",u);return B.from({vertex:{source:c,entryPoint:"mainVertex"},fragment:{source:c,entryPoint:"mainFragment"}})}const Fo=class zo extends D{constructor(t){t={...zo.defaultOptions,...t};const e=Oh(t.horizontal,t.kernelSize),r=Eh(t.horizontal,t.kernelSize);super({glProgram:e,gpuProgram:r,resources:{blurUniforms:{uStrength:{value:0,type:"f32"}}},...t}),this.horizontal=t.horizontal,this._quality=0,this.quality=t.quality,this.blur=t.strength,this._uniforms=this.resources.blurUniforms.uniforms}apply(t,e,r,i){if(this._uniforms.uStrength=this.strength/this.passes,this.passes===1)t.applyFilter(this,e,r,i);else{const s=mt.getSameSizeTexture(e);let o=e,a=s;this._state.blend=!1;for(let l=0;l<this.passes-1;l++){t.applyFilter(this,o,a,t.renderer.type===_n.WEBGPU);const u=a;a=o,o=u}this._state.blend=!0,t.applyFilter(this,o,r,i),mt.returnTexture(s)}}get blur(){return this.strength}set blur(t){this.padding=1+Math.abs(t)*2,this.strength=t}get quality(){return this._quality}set quality(t){this._quality=t,this.passes=t}};Fo.defaultOptions={strength:8,quality:4,kernelSize:5};let ns=Fo;class bt extends rt{constructor(t){t instanceof dt&&(t={context:t});const{context:e,roundPixels:r,...i}=t||{};super({label:"Graphics",...i}),this.canBundle=!0,this.renderPipeId="graphics",this._roundPixels=0,e?this._context=e:this._context=this._ownedContext=new dt,this._context.on("update",this.onViewUpdate,this),this.allowChildren=!1,this.roundPixels=r??!1}set context(t){t!==this._context&&(this._context.off("update",this.onViewUpdate,this),this._context=t,this._context.on("update",this.onViewUpdate,this),this.onViewUpdate())}get context(){return this._context}get bounds(){return this._context.bounds}addBounds(t){t.addBounds(this._context.bounds)}containsPoint(t){return this._context.containsPoint(t)}get roundPixels(){return!!this._roundPixels}set roundPixels(t){this._roundPixels=t?1:0}onViewUpdate(){if(this._didChangeId+=4096,this._didGraphicsUpdate=!0,this.didViewUpdate)return;this.didViewUpdate=!0;const t=this.renderGroup||this.parentRenderGroup;t&&t.onChildViewUpdate(this)}destroy(t){this._ownedContext&&!t?this._ownedContext.destroy(t):(t===!0||(t==null?void 0:t.context)===!0)&&this._context.destroy(t),this._ownedContext=null,this._context=null,super.destroy(t)}_callContextMethod(t,e){return this.context[t](...e),this}setFillStyle(...t){return this._callContextMethod("setFillStyle",t)}setStrokeStyle(...t){return this._callContextMethod("setStrokeStyle",t)}fill(...t){return this._callContextMethod("fill",t)}stroke(...t){return this._callContextMethod("stroke",t)}texture(...t){return this._callContextMethod("texture",t)}beginPath(){return this._callContextMethod("beginPath",[])}cut(){return this._callContextMethod("cut",[])}arc(...t){return this._callContextMethod("arc",t)}arcTo(...t){return this._callContextMethod("arcTo",t)}arcToSvg(...t){return this._callContextMethod("arcToSvg",t)}bezierCurveTo(...t){return this._callContextMethod("bezierCurveTo",t)}closePath(){return this._callContextMethod("closePath",[])}ellipse(...t){return this._callContextMethod("ellipse",t)}circle(...t){return this._callContextMethod("circle",t)}path(...t){return this._callContextMethod("path",t)}lineTo(...t){return this._callContextMethod("lineTo",t)}moveTo(...t){return this._callContextMethod("moveTo",t)}quadraticCurveTo(...t){return this._callContextMethod("quadraticCurveTo",t)}rect(...t){return this._callContextMethod("rect",t)}roundRect(...t){return this._callContextMethod("roundRect",t)}poly(...t){return this._callContextMethod("poly",t)}regularPoly(...t){return this._callContextMethod("regularPoly",t)}roundPoly(...t){return this._callContextMethod("roundPoly",t)}roundShape(...t){return this._callContextMethod("roundShape",t)}filletRect(...t){return this._callContextMethod("filletRect",t)}chamferRect(...t){return this._callContextMethod("chamferRect",t)}star(...t){return this._callContextMethod("star",t)}svg(...t){return this._callContextMethod("svg",t)}restore(...t){return this._callContextMethod("restore",t)}save(){return this._callContextMethod("save",[])}getTransform(){return this.context.getTransform()}resetTransform(){return this._callContextMethod("resetTransform",[])}rotateTransform(...t){return this._callContextMethod("rotate",t)}scaleTransform(...t){return this._callContextMethod("scale",t)}setTransform(...t){return this._callContextMethod("setTransform",t)}transform(...t){return this._callContextMethod("transform",t)}translateTransform(...t){return this._callContextMethod("translate",t)}clear(){return this._callContextMethod("clear",[])}get fillStyle(){return this._context.fillStyle}set fillStyle(t){this._context.fillStyle=t}get strokeStyle(){return this._context.strokeStyle}set strokeStyle(t){this._context.strokeStyle=t}clone(t=!1){return t?new bt(this._context.clone()):(this._ownedContext=null,new bt(this._context))}lineStyle(t,e,r){I(Y,"Graphics#lineStyle is no longer needed. Use Graphics#setStrokeStyle to set the stroke style.");const i={};return t&&(i.width=t),e&&(i.color=e),r&&(i.alpha=r),this.context.strokeStyle=i,this}beginFill(t,e){I(Y,"Graphics#beginFill is no longer needed. Use Graphics#fill to fill the shape with the desired style.");const r={};return t&&(r.color=t),e&&(r.alpha=e),this.context.fillStyle=r,this}endFill(){I(Y,"Graphics#endFill is no longer needed. Use Graphics#fill to fill the shape with the desired style."),this.context.fill();const t=this.context.strokeStyle;return(t.width!==dt.defaultStrokeStyle.width||t.color!==dt.defaultStrokeStyle.color||t.alpha!==dt.defaultStrokeStyle.alpha)&&this.context.stroke(),this}drawCircle(...t){return I(Y,"Graphics#drawCircle has been renamed to Graphics#circle"),this._callContextMethod("circle",t)}drawEllipse(...t){return I(Y,"Graphics#drawEllipse has been renamed to Graphics#ellipse"),this._callContextMethod("ellipse",t)}drawPolygon(...t){return I(Y,"Graphics#drawPolygon has been renamed to Graphics#poly"),this._callContextMethod("poly",t)}drawRect(...t){return I(Y,"Graphics#drawRect has been renamed to Graphics#rect"),this._callContextMethod("rect",t)}drawRoundedRect(...t){return I(Y,"Graphics#drawRoundedRect has been renamed to Graphics#roundRect"),this._callContextMethod("roundRect",t)}drawStar(...t){return I(Y,"Graphics#drawStar has been renamed to Graphics#star"),this._callContextMethod("star",t)}}class Uh extends rt{constructor(t,e){const{text:r,resolution:i,style:s,anchor:o,width:a,height:l,roundPixels:u,...c}=t;super({...c}),this.batched=!0,this._resolution=null,this._autoResolution=!0,this._didTextUpdate=!0,this._roundPixels=0,this._bounds=new Ft,this._boundsDirty=!0,this._styleClass=e,this.text=r??"",this.style=s,this.resolution=i??null,this.allowChildren=!1,this._anchor=new at({_onUpdate:()=>{this.onViewUpdate()}}),o&&(this.anchor=o),this.roundPixels=u??!1,a!==void 0&&(this.width=a),l!==void 0&&(this.height=l)}get anchor(){return this._anchor}set anchor(t){typeof t=="number"?this._anchor.set(t):this._anchor.copyFrom(t)}get roundPixels(){return!!this._roundPixels}set roundPixels(t){this._roundPixels=t?1:0}set text(t){t=t.toString(),this._text!==t&&(this._text=t,this.onViewUpdate())}get text(){return this._text}set resolution(t){this._autoResolution=t===null,this._resolution=t,this.onViewUpdate()}get resolution(){return this._resolution}get style(){return this._style}set style(t){var e;t=t||{},(e=this._style)==null||e.off("update",this.onViewUpdate,this),t instanceof this._styleClass?this._style=t:this._style=new this._styleClass(t),this._style.on("update",this.onViewUpdate,this),this.onViewUpdate()}get bounds(){return this._boundsDirty&&(this._updateBounds(),this._boundsDirty=!1),this._bounds}get width(){return Math.abs(this.scale.x)*this.bounds.width}set width(t){this._setWidth(t,this.bounds.width)}get height(){return Math.abs(this.scale.y)*this.bounds.height}set height(t){this._setHeight(t,this.bounds.height)}getSize(t){return t||(t={}),t.width=Math.abs(this.scale.x)*this.bounds.width,t.height=Math.abs(this.scale.y)*this.bounds.height,t}setSize(t,e){let r,i;typeof t!="object"?(r=t,i=e??t):(r=t.width,i=t.height??t.width),r!==void 0&&this._setWidth(r,this.bounds.width),i!==void 0&&this._setHeight(i,this.bounds.height)}addBounds(t){const e=this.bounds;t.addFrame(e.minX,e.minY,e.maxX,e.maxY)}containsPoint(t){const e=this.bounds.width,r=this.bounds.height,i=-e*this.anchor.x;let s=0;return t.x>=i&&t.x<=i+e&&(s=-r*this.anchor.y,t.y>=s&&t.y<=s+r)}onViewUpdate(){if(this._didChangeId+=4096,this._boundsDirty=!0,this.didViewUpdate)return;this.didViewUpdate=!0,this._didTextUpdate=!0;const t=this.renderGroup||this.parentRenderGroup;t&&t.onChildViewUpdate(this)}_getKey(){return`${this.text}:${this._style.styleKey}:${this._resolution}`}destroy(t=!1){super.destroy(t),this.owner=null,this._bounds=null,this._anchor=null,(typeof t=="boolean"?t:t!=null&&t.style)&&this._style.destroy(t),this._style=null,this._text=null}}function kh(n,t){let e=n[0]??{};return(typeof e=="string"||n[1])&&(I(Y,`use new ${t}({ text: "hi!", style }) instead`),e={text:e,style:n[1]}),e}class Bh extends Uh{constructor(...t){const e=kh(t,"Text");super(e,gt),this.renderPipeId="text"}_updateBounds(){const t=this._bounds,e=this._anchor,r=Mr.measureText(this._text,this._style),{width:i,height:s}=r;t.minX=-e._x*i,t.maxX=t.minX+i,t.minY=-e._y*s,t.maxY=t.minY+s}}lt.add(Ta,Pa);var Lh=function(){return performance.now()},Dh=function(){function n(){this._tweens={},this._tweensAddedDuringUpdate={}}return n.prototype.getAll=function(){var t=this;return Object.keys(this._tweens).map(function(e){return t._tweens[e]})},n.prototype.removeAll=function(){this._tweens={}},n.prototype.add=function(t){this._tweens[t.getId()]=t,this._tweensAddedDuringUpdate[t.getId()]=t},n.prototype.remove=function(t){delete this._tweens[t.getId()],delete this._tweensAddedDuringUpdate[t.getId()]},n.prototype.update=function(t,e){t===void 0&&(t=Lh()),e===void 0&&(e=!1);var r=Object.keys(this._tweens);if(r.length===0)return!1;for(;r.length>0;){this._tweensAddedDuringUpdate={};for(var i=0;i<r.length;i++){var s=this._tweens[r[i]],o=!e;s&&s.update(t,o)===!1&&!e&&delete this._tweens[r[i]]}r=Object.keys(this._tweensAddedDuringUpdate)}return!0},n}(),Gh=new Dh,zt=Gh;zt.getAll.bind(zt);zt.removeAll.bind(zt);zt.add.bind(zt);zt.remove.bind(zt);var Nh=zt.update.bind(zt),V=`in vec2 aPosition;
out vec2 vTextureCoord;

uniform vec4 uInputSize;
uniform vec4 uOutputFrame;
uniform vec4 uOutputTexture;

vec4 filterVertexPosition( void )
{
    vec2 position = aPosition * uOutputFrame.zw + uOutputFrame.xy;
    
    position.x = position.x * (2.0 / uOutputTexture.x) - 1.0;
    position.y = position.y * (2.0*uOutputTexture.z / uOutputTexture.y) - uOutputTexture.z;

    return vec4(position, 0.0, 1.0);
}

vec2 filterTextureCoord( void )
{
    return aPosition * (uOutputFrame.zw * uInputSize.zw);
}

void main(void)
{
    gl_Position = filterVertexPosition();
    vTextureCoord = filterTextureCoord();
}
`,W=`struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

struct VSOutput {
    @builtin(position) position: vec4<f32>,
    @location(0) uv : vec2<f32>
  };

fn filterVertexPosition(aPosition:vec2<f32>) -> vec4<f32>
{
    var position = aPosition * gfu.uOutputFrame.zw + gfu.uOutputFrame.xy;

    position.x = position.x * (2.0 / gfu.uOutputTexture.x) - 1.0;
    position.y = position.y * (2.0*gfu.uOutputTexture.z / gfu.uOutputTexture.y) - gfu.uOutputTexture.z;

    return vec4(position, 0.0, 1.0);
}

fn filterTextureCoord( aPosition:vec2<f32> ) -> vec2<f32>
{
    return aPosition * (gfu.uOutputFrame.zw * gfu.uInputSize.zw);
}

fn globalTextureCoord( aPosition:vec2<f32> ) -> vec2<f32>
{
  return  (aPosition.xy / gfu.uGlobalFrame.zw) + (gfu.uGlobalFrame.xy / gfu.uGlobalFrame.zw);  
}

fn getSize() -> vec2<f32>
{
  return gfu.uGlobalFrame.zw;
}
  
@vertex
fn mainVertex(
  @location(0) aPosition : vec2<f32>, 
) -> VSOutput {
  return VSOutput(
   filterVertexPosition(aPosition),
   filterTextureCoord(aPosition)
  );
}`,$h=`in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform float uGamma;
uniform float uContrast;
uniform float uSaturation;
uniform float uBrightness;
uniform vec4 uColor;

void main()
{
    vec4 c = texture(uTexture, vTextureCoord);

    if (c.a > 0.0) {
        c.rgb /= c.a;

        vec3 rgb = pow(c.rgb, vec3(1. / uGamma));
        rgb = mix(vec3(.5), mix(vec3(dot(vec3(.2125, .7154, .0721), rgb)), rgb, uSaturation), uContrast);
        rgb.r *= uColor.r;
        rgb.g *= uColor.g;
        rgb.b *= uColor.b;
        c.rgb = rgb * uBrightness;

        c.rgb *= c.a;
    }

    finalColor = c * uColor.a;
}
`,Vh=`struct AdjustmentUniforms {
  uGamma: f32,
  uContrast: f32,
  uSaturation: f32,
  uBrightness: f32,
  uColor: vec4<f32>,
};

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> adjustmentUniforms : AdjustmentUniforms;

@fragment
fn mainFragment(
  @location(0) uv: vec2<f32>,
  @builtin(position) position: vec4<f32>
) -> @location(0) vec4<f32> {
  var sample = textureSample(uTexture, uSampler, uv);
  let color = adjustmentUniforms.uColor;

  if (sample.a > 0.0) 
  {
    sample = vec4<f32>(sample.rgb / sample.a, sample.a);
    var rgb: vec3<f32> = pow(sample.rgb, vec3<f32>(1. / adjustmentUniforms.uGamma));
    rgb = mix(vec3<f32>(.5), mix(vec3<f32>(dot(vec3<f32>(.2125, .7154, .0721), rgb)), rgb, adjustmentUniforms.uSaturation), adjustmentUniforms.uContrast);
    rgb.r *= color.r;
    rgb.g *= color.g;
    rgb.b *= color.b;
    sample = vec4<f32>(rgb.rgb * adjustmentUniforms.uBrightness, sample.a);
    sample = vec4<f32>(sample.rgb * sample.a, sample.a);
  }

  return sample * color.a;
}`,Wh=Object.defineProperty,Xh=(n,t,e)=>t in n?Wh(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,Mo=(n,t,e)=>(Xh(n,typeof t!="symbol"?t+"":t,e),e);const Yh=class Io extends D{constructor(t){t={...Io.DEFAULT_OPTIONS,...t};const e=B.from({vertex:{source:W,entryPoint:"mainVertex"},fragment:{source:Vh,entryPoint:"mainFragment"}}),r=L.from({vertex:V,fragment:$h,name:"adjustment-filter"});super({gpuProgram:e,glProgram:r,resources:{adjustmentUniforms:{uGamma:{value:t.gamma,type:"f32"},uContrast:{value:t.contrast,type:"f32"},uSaturation:{value:t.saturation,type:"f32"},uBrightness:{value:t.brightness,type:"f32"},uColor:{value:[t.red,t.green,t.blue,t.alpha],type:"vec4<f32>"}}}}),Mo(this,"uniforms"),this.uniforms=this.resources.adjustmentUniforms.uniforms}get gamma(){return this.uniforms.uGamma}set gamma(t){this.uniforms.uGamma=t}get contrast(){return this.uniforms.uContrast}set contrast(t){this.uniforms.uContrast=t}get saturation(){return this.uniforms.uSaturation}set saturation(t){this.uniforms.uSaturation=t}get brightness(){return this.uniforms.uBrightness}set brightness(t){this.uniforms.uBrightness=t}get red(){return this.uniforms.uColor[0]}set red(t){this.uniforms.uColor[0]=t}get green(){return this.uniforms.uColor[1]}set green(t){this.uniforms.uColor[1]=t}get blue(){return this.uniforms.uColor[2]}set blue(t){this.uniforms.uColor[2]=t}get alpha(){return this.uniforms.uColor[3]}set alpha(t){this.uniforms.uColor[3]=t}};Mo(Yh,"DEFAULT_OPTIONS",{gamma:1,contrast:1,saturation:1,brightness:1,red:1,green:1,blue:1,alpha:1});var Hh=`
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform vec2 uOffset;

void main(void)
{
    vec4 color = vec4(0.0);

    // Sample top left pixel
    color += texture(uTexture, vec2(vTextureCoord.x - uOffset.x, vTextureCoord.y + uOffset.y));

    // Sample top right pixel
    color += texture(uTexture, vec2(vTextureCoord.x + uOffset.x, vTextureCoord.y + uOffset.y));

    // Sample bottom right pixel
    color += texture(uTexture, vec2(vTextureCoord.x + uOffset.x, vTextureCoord.y - uOffset.y));

    // Sample bottom left pixel
    color += texture(uTexture, vec2(vTextureCoord.x - uOffset.x, vTextureCoord.y - uOffset.y));

    // Average
    color *= 0.25;

    finalColor = color;
}`,jh=`struct KawaseBlurUniforms {
  uOffset:vec2<f32>,
};

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> kawaseBlurUniforms : KawaseBlurUniforms;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  let uOffset = kawaseBlurUniforms.uOffset;
  var color: vec4<f32> = vec4<f32>(0.0);

  // Sample top left pixel
  color += textureSample(uTexture, uSampler, vec2<f32>(uv.x - uOffset.x, uv.y + uOffset.y));
  // Sample top right pixel
  color += textureSample(uTexture, uSampler, vec2<f32>(uv.x + uOffset.x, uv.y + uOffset.y));
  // Sample bottom right pixel
  color += textureSample(uTexture, uSampler, vec2<f32>(uv.x + uOffset.x, uv.y - uOffset.y));
  // Sample bottom left pixel
  color += textureSample(uTexture, uSampler, vec2<f32>(uv.x - uOffset.x, uv.y - uOffset.y));
  // Average
  color *= 0.25;

  return color;
}`,qh=`
precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform vec2 uOffset;

uniform vec4 uInputClamp;

void main(void)
{
    vec4 color = vec4(0.0);

    // Sample top left pixel
    color += texture(uTexture, clamp(vec2(vTextureCoord.x - uOffset.x, vTextureCoord.y + uOffset.y), uInputClamp.xy, uInputClamp.zw));

    // Sample top right pixel
    color += texture(uTexture, clamp(vec2(vTextureCoord.x + uOffset.x, vTextureCoord.y + uOffset.y), uInputClamp.xy, uInputClamp.zw));

    // Sample bottom right pixel
    color += texture(uTexture, clamp(vec2(vTextureCoord.x + uOffset.x, vTextureCoord.y - uOffset.y), uInputClamp.xy, uInputClamp.zw));

    // Sample bottom left pixel
    color += texture(uTexture, clamp(vec2(vTextureCoord.x - uOffset.x, vTextureCoord.y - uOffset.y), uInputClamp.xy, uInputClamp.zw));

    // Average
    color *= 0.25;

    finalColor = color;
}
`,Kh=`struct KawaseBlurUniforms {
  uOffset:vec2<f32>,
};

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> kawaseBlurUniforms : KawaseBlurUniforms;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  let uOffset = kawaseBlurUniforms.uOffset;
  var color: vec4<f32> = vec4(0.0);

  // Sample top left pixel
  color += textureSample(uTexture, uSampler, clamp(vec2<f32>(uv.x - uOffset.x, uv.y + uOffset.y), gfu.uInputClamp.xy, gfu.uInputClamp.zw));
  // Sample top right pixel
  color += textureSample(uTexture, uSampler, clamp(vec2<f32>(uv.x + uOffset.x, uv.y + uOffset.y), gfu.uInputClamp.xy, gfu.uInputClamp.zw));
  // Sample bottom right pixel
  color += textureSample(uTexture, uSampler, clamp(vec2<f32>(uv.x + uOffset.x, uv.y - uOffset.y), gfu.uInputClamp.xy, gfu.uInputClamp.zw));
  // Sample bottom left pixel
  color += textureSample(uTexture, uSampler, clamp(vec2<f32>(uv.x - uOffset.x, uv.y - uOffset.y), gfu.uInputClamp.xy, gfu.uInputClamp.zw));
  // Average
  color *= 0.25;
    
  return color;
}`,Zh=Object.defineProperty,Qh=(n,t,e)=>t in n?Zh(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,Xt=(n,t,e)=>(Qh(n,typeof t!="symbol"?t+"":t,e),e);const Oo=class Ro extends D{constructor(...t){let e=t[0]??{};(typeof e=="number"||Array.isArray(e))&&(I("6.0.0","KawaseBlurFilter constructor params are now options object. See params: { strength, quality, clamp, pixelSize }"),e={strength:e},t[1]!==void 0&&(e.quality=t[1]),t[2]!==void 0&&(e.clamp=t[2])),e={...Ro.DEFAULT_OPTIONS,...e};const r=B.from({vertex:{source:W,entryPoint:"mainVertex"},fragment:{source:e!=null&&e.clamp?Kh:jh,entryPoint:"mainFragment"}}),i=L.from({vertex:V,fragment:e!=null&&e.clamp?qh:Hh,name:"kawase-blur-filter"});super({gpuProgram:r,glProgram:i,resources:{kawaseBlurUniforms:{uOffset:{value:new Float32Array(2),type:"vec2<f32>"}}}}),Xt(this,"uniforms"),Xt(this,"_pixelSize",{x:0,y:0}),Xt(this,"_clamp"),Xt(this,"_kernels",[]),Xt(this,"_blur"),Xt(this,"_quality"),this.uniforms=this.resources.kawaseBlurUniforms.uniforms,this.pixelSize=e.pixelSize??{x:1,y:1},Array.isArray(e.strength)?this.kernels=e.strength:typeof e.strength=="number"&&(this._blur=e.strength,this.quality=e.quality??3),this._clamp=!!e.clamp}apply(t,e,r,i){const s=this.pixelSizeX/e.source.width,o=this.pixelSizeY/e.source.height;let a;if(this._quality===1||this._blur===0)a=this._kernels[0]+.5,this.uniforms.uOffset[0]=a*s,this.uniforms.uOffset[1]=a*o,t.applyFilter(this,e,r,i);else{const l=mt.getSameSizeTexture(e);let u=e,c=l,h;const f=this._quality-1;for(let d=0;d<f;d++)a=this._kernels[d]+.5,this.uniforms.uOffset[0]=a*s,this.uniforms.uOffset[1]=a*o,t.applyFilter(this,u,c,!0),h=u,u=c,c=h;a=this._kernels[f]+.5,this.uniforms.uOffset[0]=a*s,this.uniforms.uOffset[1]=a*o,t.applyFilter(this,u,r,i),mt.returnTexture(l)}}get strength(){return this._blur}set strength(t){this._blur=t,this._generateKernels()}get quality(){return this._quality}set quality(t){this._quality=Math.max(1,Math.round(t)),this._generateKernels()}get kernels(){return this._kernels}set kernels(t){Array.isArray(t)&&t.length>0?(this._kernels=t,this._quality=t.length,this._blur=Math.max(...t)):(this._kernels=[0],this._quality=1)}get pixelSize(){return this._pixelSize}set pixelSize(t){if(typeof t=="number"){this.pixelSizeX=this.pixelSizeY=t;return}if(Array.isArray(t)){this.pixelSizeX=t[0],this.pixelSizeY=t[1];return}this._pixelSize=t}get pixelSizeX(){return this.pixelSize.x}set pixelSizeX(t){this.pixelSize.x=t}get pixelSizeY(){return this.pixelSize.y}set pixelSizeY(t){this.pixelSize.y=t}get clamp(){return this._clamp}_updatePadding(){this.padding=Math.ceil(this._kernels.reduce((t,e)=>t+e+.5,0))}_generateKernels(){const t=this._blur,e=this._quality,r=[t];if(t>0){let i=t;const s=t/e;for(let o=1;o<e;o++)i-=s,r.push(i)}this._kernels=r,this._updatePadding()}};Xt(Oo,"DEFAULT_OPTIONS",{strength:4,quality:3,clamp:!1,pixelSize:{x:1,y:1}});let Eo=Oo;var Jh=`in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform sampler2D uMapTexture;
uniform float uBloomScale;
uniform float uBrightness;

void main() {
    vec4 color = texture(uTexture, vTextureCoord);
    color.rgb *= uBrightness;
    vec4 bloomColor = vec4(texture(uMapTexture, vTextureCoord).rgb, 0.0);
    bloomColor.rgb *= uBloomScale;
    finalColor = color + bloomColor;
}
`,tf=`struct AdvancedBloomUniforms {
  uBloomScale: f32,
  uBrightness: f32,
};

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> advancedBloomUniforms : AdvancedBloomUniforms;
@group(1) @binding(1) var uMapTexture: texture_2d<f32>;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  var color = textureSample(uTexture, uSampler, uv);
  color = vec4<f32>(color.rgb * advancedBloomUniforms.uBrightness, color.a);

  var bloomColor = vec4<f32>(textureSample(uMapTexture, uSampler, uv).rgb, 0.0);
  bloomColor = vec4<f32>(bloomColor.rgb * advancedBloomUniforms.uBloomScale, bloomColor.a);
  
  return color + bloomColor;
}
`,ef=`
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform float uThreshold;

void main() {
    vec4 color = texture(uTexture, vTextureCoord);

    // A simple & fast algorithm for getting brightness.
    // It's inaccuracy , but good enought for this feature.
    float _max = max(max(color.r, color.g), color.b);
    float _min = min(min(color.r, color.g), color.b);
    float brightness = (_max + _min) * 0.5;

    if(brightness > uThreshold) {
        finalColor = color;
    } else {
        finalColor = vec4(0.0, 0.0, 0.0, 0.0);
    }
}
`,nf=`struct ExtractBrightnessUniforms {
  uThreshold: f32,
};

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> extractBrightnessUniforms : ExtractBrightnessUniforms;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  let color: vec4<f32> = textureSample(uTexture, uSampler, uv);

  // A simple & fast algorithm for getting brightness.
  // It's inaccurate, but good enough for this feature.
  let max: f32 = max(max(color.r, color.g), color.b);
  let min: f32 = min(min(color.r, color.g), color.b);
  let brightness: f32 = (max + min) * 0.5;

  return select(vec4<f32>(0.), color, brightness > extractBrightnessUniforms.uThreshold);
}
`,rf=Object.defineProperty,sf=(n,t,e)=>t in n?rf(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,Uo=(n,t,e)=>(sf(n,typeof t!="symbol"?t+"":t,e),e);const ko=class Bo extends D{constructor(t){t={...Bo.DEFAULT_OPTIONS,...t};const e=B.from({vertex:{source:W,entryPoint:"mainVertex"},fragment:{source:nf,entryPoint:"mainFragment"}}),r=L.from({vertex:V,fragment:ef,name:"extract-brightness-filter"});super({gpuProgram:e,glProgram:r,resources:{extractBrightnessUniforms:{uThreshold:{value:t.threshold,type:"f32"}}}}),Uo(this,"uniforms"),this.uniforms=this.resources.extractBrightnessUniforms.uniforms}get threshold(){return this.uniforms.uThreshold}set threshold(t){this.uniforms.uThreshold=t}};Uo(ko,"DEFAULT_OPTIONS",{threshold:.5});let of=ko;var af=Object.defineProperty,lf=(n,t,e)=>t in n?af(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,se=(n,t,e)=>(lf(n,typeof t!="symbol"?t+"":t,e),e);const uf=class Lo extends D{constructor(t){t={...Lo.DEFAULT_OPTIONS,...t};const e=B.from({vertex:{source:W,entryPoint:"mainVertex"},fragment:{source:tf,entryPoint:"mainFragment"}}),r=L.from({vertex:V,fragment:Jh,name:"advanced-bloom-filter"});super({gpuProgram:e,glProgram:r,resources:{advancedBloomUniforms:{uBloomScale:{value:t.bloomScale,type:"f32"},uBrightness:{value:t.brightness,type:"f32"}},uMapTexture:k.WHITE}}),se(this,"uniforms"),se(this,"bloomScale",1),se(this,"brightness",1),se(this,"_extractFilter"),se(this,"_blurFilter"),this.uniforms=this.resources.advancedBloomUniforms.uniforms,this._extractFilter=new of({threshold:t.threshold}),this._blurFilter=new Eo({strength:t.kernels??t.blur,quality:t.kernels?void 0:t.quality}),Object.assign(this,t)}apply(t,e,r,i){const s=mt.getSameSizeTexture(e);this._extractFilter.apply(t,e,s,!0);const o=mt.getSameSizeTexture(e);this._blurFilter.apply(t,s,o,!0),this.uniforms.uBloomScale=this.bloomScale,this.uniforms.uBrightness=this.brightness,this.resources.uMapTexture=o.source,t.applyFilter(this,e,r,i),mt.returnTexture(o),mt.returnTexture(s)}get threshold(){return this._extractFilter.threshold}set threshold(t){this._extractFilter.threshold=t}get kernels(){return this._blurFilter.kernels}set kernels(t){this._blurFilter.kernels=t}get blur(){return this._blurFilter.strength}set blur(t){this._blurFilter.strength=t}get quality(){return this._blurFilter.quality}set quality(t){this._blurFilter.quality=t}get pixelSize(){return this._blurFilter.pixelSize}set pixelSize(t){typeof t=="number"&&(t={x:t,y:t}),Array.isArray(t)&&(t={x:t[0],y:t[1]}),this._blurFilter.pixelSize=t}get pixelSizeX(){return this._blurFilter.pixelSizeX}set pixelSizeX(t){this._blurFilter.pixelSizeX=t}get pixelSizeY(){return this._blurFilter.pixelSizeY}set pixelSizeY(t){this._blurFilter.pixelSizeY=t}};se(uf,"DEFAULT_OPTIONS",{threshold:.5,bloomScale:1,brightness:1,blur:8,quality:4,pixelSize:{x:1,y:1}});var cf=`precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform float uSize;
uniform vec3 uColor;
uniform float uReplaceColor;

uniform vec4 uInputSize;

vec2 mapCoord( vec2 coord )
{
    coord *= uInputSize.xy;
    coord += uInputSize.zw;

    return coord;
}

vec2 unmapCoord( vec2 coord )
{
    coord -= uInputSize.zw;
    coord /= uInputSize.xy;

    return coord;
}

vec2 pixelate(vec2 coord, vec2 size)
{
    return floor(coord / size) * size;
}

vec2 getMod(vec2 coord, vec2 size)
{
    return mod(coord, size) / size;
}

float character(float n, vec2 p)
{
    p = floor(p*vec2(4.0, 4.0) + 2.5);

    if (clamp(p.x, 0.0, 4.0) == p.x)
    {
        if (clamp(p.y, 0.0, 4.0) == p.y)
        {
            if (int(mod(n/exp2(p.x + 5.0*p.y), 2.0)) == 1) return 1.0;
        }
    }
    return 0.0;
}

void main()
{
    vec2 coord = mapCoord(vTextureCoord);

    // get the grid position
    vec2 pixCoord = pixelate(coord, vec2(uSize));
    pixCoord = unmapCoord(pixCoord);

    // sample the color at grid position
    vec4 color = texture(uTexture, pixCoord);

    // brightness of the color as it's perceived by the human eye
    float gray = 0.3 * color.r + 0.59 * color.g + 0.11 * color.b;

    // determine the character to use
    float n =  65536.0;             // .
    if (gray > 0.2) n = 65600.0;    // :
    if (gray > 0.3) n = 332772.0;   // *
    if (gray > 0.4) n = 15255086.0; // o
    if (gray > 0.5) n = 23385164.0; // &
    if (gray > 0.6) n = 15252014.0; // 8
    if (gray > 0.7) n = 13199452.0; // @
    if (gray > 0.8) n = 11512810.0; // #

    // get the mod..
    vec2 modd = getMod(coord, vec2(uSize));

    finalColor = (uReplaceColor > 0.5 ? vec4(uColor, 1.) : color) * character( n, vec2(-1.0) + modd * 2.0);
}
`,hf=`struct AsciiUniforms {
    uSize: f32,
    uColor: vec3<f32>,
    uReplaceColor: f32,
};

struct GlobalFilterUniforms {
    uInputSize:vec4<f32>,
    uInputPixel:vec4<f32>,
    uInputClamp:vec4<f32>,
    uOutputFrame:vec4<f32>,
    uGlobalFrame:vec4<f32>,
    uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> asciiUniforms : AsciiUniforms;

@fragment
fn mainFragment(
    @location(0) uv: vec2<f32>,
    @builtin(position) position: vec4<f32>
) -> @location(0) vec4<f32> {
    let pixelSize: f32 = asciiUniforms.uSize;
    let coord: vec2<f32> = mapCoord(uv);

    // get the rounded color..
    var pixCoord: vec2<f32> = pixelate(coord, vec2<f32>(pixelSize));
    pixCoord = unmapCoord(pixCoord);

    var color = textureSample(uTexture, uSampler, pixCoord);

    // determine the character to use
    let gray: f32 = 0.3 * color.r + 0.59 * color.g + 0.11 * color.b;
    
    var n: f32 = 65536.0; // .
    if (gray > 0.2) {
        n = 65600.0;    // :
    }
    if (gray > 0.3) {
        n = 332772.0;   // *
    }
    if (gray > 0.4) {
        n = 15255086.0; // o
    }
    if (gray > 0.5) {
        n = 23385164.0; // &
    }
    if (gray > 0.6) {
        n = 15252014.0; // 8
    }
    if (gray > 0.7) {
        n = 13199452.0; // @
    }
    if (gray > 0.8) {
        n = 11512810.0; // #
    }

    // get the mod..
    let modd: vec2<f32> = getMod(coord, vec2<f32>(pixelSize));
    return select(color, vec4<f32>(asciiUniforms.uColor, 1.), asciiUniforms.uReplaceColor > 0.5) * character(n, vec2<f32>(-1.0) + modd * 2.0);
}

fn pixelate(coord: vec2<f32>, size: vec2<f32>) -> vec2<f32>
{
    return floor( coord / size ) * size;
}

fn getMod(coord: vec2<f32>, size: vec2<f32>) -> vec2<f32>
{
    return moduloVec2( coord , size) / size;
}

fn character(n: f32, p: vec2<f32>) -> f32
{
    var q: vec2<f32> = floor(p*vec2<f32>(4.0, 4.0) + 2.5);

    if (clamp(q.x, 0.0, 4.0) == q.x)
    {
        if (clamp(q.y, 0.0, 4.0) == q.y)
        {
        if (i32(modulo(n/exp2(q.x + 5.0*q.y), 2.0)) == 1)
        {
            return 1.0;
        }
        }
    }

    return 0.0;
}

fn modulo(x: f32, y: f32) -> f32
{
  return x - y * floor(x/y);
}

fn moduloVec2(x: vec2<f32>, y: vec2<f32>) -> vec2<f32>
{
  return x - y * floor(x/y);
}

fn mapCoord(coord: vec2<f32> ) -> vec2<f32>
{
    var mappedCoord: vec2<f32> = coord;
    mappedCoord *= gfu.uInputSize.xy;
    mappedCoord += gfu.uOutputFrame.xy;
    return mappedCoord;
}

fn unmapCoord(coord: vec2<f32> ) -> vec2<f32>
{
    var mappedCoord: vec2<f32> = coord;
    mappedCoord -= gfu.uOutputFrame.xy;
    mappedCoord /= gfu.uInputSize.xy;
    return mappedCoord;
}`,ff=Object.defineProperty,df=(n,t,e)=>t in n?ff(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,Or=(n,t,e)=>(df(n,typeof t!="symbol"?t+"":t,e),e);const pf=class Do extends D{constructor(...t){let e=t[0]??{};typeof e=="number"&&(I("6.0.0","AsciiFilter constructor params are now options object. See params: { size, color, replaceColor }"),e={size:e});const r=(e==null?void 0:e.color)&&e.replaceColor!==!1;e={...Do.DEFAULT_OPTIONS,...e};const i=B.from({vertex:{source:W,entryPoint:"mainVertex"},fragment:{source:hf,entryPoint:"mainFragment"}}),s=L.from({vertex:V,fragment:cf,name:"ascii-filter"});super({gpuProgram:i,glProgram:s,resources:{asciiUniforms:{uSize:{value:e.size,type:"f32"},uColor:{value:new Float32Array(3),type:"vec3<f32>"},uReplaceColor:{value:Number(r),type:"f32"}}}}),Or(this,"uniforms"),Or(this,"_color"),this.uniforms=this.resources.asciiUniforms.uniforms,this._color=new G,this.color=e.color??16777215}get size(){return this.uniforms.uSize}set size(t){this.uniforms.uSize=t}get color(){return this._color.value}set color(t){this._color.setValue(t);const[e,r,i]=this._color.toArray();this.uniforms.uColor[0]=e,this.uniforms.uColor[1]=r,this.uniforms.uColor[2]=i}get replaceColor(){return this.uniforms.uReplaceColor>.5}set replaceColor(t){this.uniforms.uReplaceColor=t?1:0}};Or(pf,"DEFAULT_OPTIONS",{size:8,color:16777215,replaceColor:!1});var mf=`precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform vec2 uTransform;
uniform vec3 uLightColor;
uniform float uLightAlpha;
uniform vec3 uShadowColor;
uniform float uShadowAlpha;

uniform vec4 uInputSize;

void main(void) {
    vec2 transform = vec2(1.0 / uInputSize) * vec2(uTransform.x, uTransform.y);
    vec4 color = texture(uTexture, vTextureCoord);
    float light = texture(uTexture, vTextureCoord - transform).a;
    float shadow = texture(uTexture, vTextureCoord + transform).a;

    color.rgb = mix(color.rgb, uLightColor, clamp((color.a - light) * uLightAlpha, 0.0, 1.0));
    color.rgb = mix(color.rgb, uShadowColor, clamp((color.a - shadow) * uShadowAlpha, 0.0, 1.0));
    finalColor = vec4(color.rgb * color.a, color.a);
}
`,gf=`struct BevelUniforms {
  uLightColor: vec3<f32>,
  uLightAlpha: f32,
  uShadowColor: vec3<f32>,
  uShadowAlpha: f32,
  uTransform: vec2<f32>,
};

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> bevelUniforms : BevelUniforms;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  let transform = vec2<f32>(1.0 / gfu.uInputSize.xy) * vec2<f32>(bevelUniforms.uTransform.x, bevelUniforms.uTransform.y);
  var color: vec4<f32> = textureSample(uTexture, uSampler, uv);
  let lightSample: f32 = textureSample(uTexture, uSampler, uv - transform).a;
  let shadowSample: f32 = textureSample(uTexture, uSampler, uv + transform).a;

  let light = vec4<f32>(bevelUniforms.uLightColor, bevelUniforms.uLightAlpha);
  let shadow = vec4<f32>(bevelUniforms.uShadowColor, bevelUniforms.uShadowAlpha);

  color = vec4<f32>(mix(color.rgb, light.rgb, clamp((color.a - lightSample) * light.a, 0.0, 1.0)), color.a);
  color = vec4<f32>(mix(color.rgb, shadow.rgb, clamp((color.a - shadowSample) * shadow.a, 0.0, 1.0)), color.a);
  
  return vec4<f32>(color.rgb * color.a, color.a);
}`,xf=Object.defineProperty,vf=(n,t,e)=>t in n?xf(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,oe=(n,t,e)=>(vf(n,typeof t!="symbol"?t+"":t,e),e);const yf=class Go extends D{constructor(t){t={...Go.DEFAULT_OPTIONS,...t};const e=B.from({vertex:{source:W,entryPoint:"mainVertex"},fragment:{source:gf,entryPoint:"mainFragment"}}),r=L.from({vertex:V,fragment:mf,name:"bevel-filter"});super({gpuProgram:e,glProgram:r,resources:{bevelUniforms:{uLightColor:{value:new Float32Array(3),type:"vec3<f32>"},uLightAlpha:{value:t.lightAlpha,type:"f32"},uShadowColor:{value:new Float32Array(3),type:"vec3<f32>"},uShadowAlpha:{value:t.shadowAlpha,type:"f32"},uTransform:{value:new Float32Array(2),type:"vec2<f32>"}}},padding:1}),oe(this,"uniforms"),oe(this,"_thickness"),oe(this,"_rotation"),oe(this,"_lightColor"),oe(this,"_shadowColor"),this.uniforms=this.resources.bevelUniforms.uniforms,this._lightColor=new G,this._shadowColor=new G,this.lightColor=t.lightColor??16777215,this.shadowColor=t.shadowColor??0,Object.assign(this,t)}get rotation(){return this._rotation/de}set rotation(t){this._rotation=t*de,this._updateTransform()}get thickness(){return this._thickness}set thickness(t){this._thickness=t,this._updateTransform()}get lightColor(){return this._lightColor.value}set lightColor(t){this._lightColor.setValue(t);const[e,r,i]=this._lightColor.toArray();this.uniforms.uLightColor[0]=e,this.uniforms.uLightColor[1]=r,this.uniforms.uLightColor[2]=i}get lightAlpha(){return this.uniforms.uLightAlpha}set lightAlpha(t){this.uniforms.uLightAlpha=t}get shadowColor(){return this._shadowColor.value}set shadowColor(t){this._shadowColor.setValue(t);const[e,r,i]=this._shadowColor.toArray();this.uniforms.uShadowColor[0]=e,this.uniforms.uShadowColor[1]=r,this.uniforms.uShadowColor[2]=i}get shadowAlpha(){return this.uniforms.uShadowAlpha}set shadowAlpha(t){this.uniforms.uShadowAlpha=t}_updateTransform(){this.uniforms.uTransform[0]=this.thickness*Math.cos(this._rotation),this.uniforms.uTransform[1]=this.thickness*Math.sin(this._rotation)}};oe(yf,"DEFAULT_OPTIONS",{rotation:45,thickness:2,lightColor:16777215,lightAlpha:.7,shadowColor:0,shadowAlpha:.7});var _f=Object.defineProperty,bf=(n,t,e)=>t in n?_f(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,un=(n,t,e)=>(bf(n,typeof t!="symbol"?t+"":t,e),e);const Sf=class No extends Ah{constructor(...t){let e=t[0]??{};if(typeof e=="number"||Array.isArray(e)||"x"in e&&"y"in e){I("6.0.0","BloomFilter constructor params are now options object. See params: { strength, quality, resolution, kernelSize }");let r=e;Array.isArray(r)&&(r={x:r[0],y:r[1]}),e={strength:r},t[1]!==void 0&&(e.quality=t[1]),t[2]!==void 0&&(e.resolution=t[2]),t[3]!==void 0&&(e.kernelSize=t[3])}e={...No.DEFAULT_OPTIONS,...e},super(),un(this,"_blurXFilter"),un(this,"_blurYFilter"),un(this,"_strength"),this._strength={x:2,y:2},e.strength&&(typeof e.strength=="number"?(this._strength.x=e.strength,this._strength.y=e.strength):(this._strength.x=e.strength.x,this._strength.y=e.strength.y)),this._blurXFilter=new ns({...e,horizontal:!0,strength:this.strengthX}),this._blurYFilter=new ns({...e,horizontal:!1,strength:this.strengthY}),this._blurYFilter.blendMode="screen",Object.assign(this,e)}apply(t,e,r,i){const s=mt.getSameSizeTexture(e);t.applyFilter(this,e,r,i),this._blurXFilter.apply(t,e,s,!0),this._blurYFilter.apply(t,s,r,!1),mt.returnTexture(s)}get strength(){return this._strength}set strength(t){this._strength=typeof t=="number"?{x:t,y:t}:t,this._updateStrength()}get strengthX(){return this.strength.x}set strengthX(t){this.strength.x=t,this._updateStrength()}get strengthY(){return this.strength.y}set strengthY(t){this.strength.y=t,this._updateStrength()}_updateStrength(){this._blurXFilter.blur=this.strengthX,this._blurYFilter.blur=this.strengthY}get blur(){return I("6.0.0","BloomFilter.blur is deprecated, please use BloomFilter.strength instead"),this.strengthX}set blur(t){I("6.0.0","BloomFilter.blur is deprecated, please use BloomFilter.strength instead"),this.strength=t}get blurX(){return I("6.0.0","BloomFilter.blurX is deprecated, please use BloomFilter.strengthX instead"),this.strengthX}set blurX(t){I("6.0.0","BloomFilter.blurX is deprecated, please use BloomFilter.strengthX instead"),this.strengthX=t}get blurY(){return I("6.0.0","BloomFilter.blurY is deprecated, please use BloomFilter.strengthY instead"),this.strengthY}set blurY(t){I("6.0.0","BloomFilter.blurY is deprecated, please use BloomFilter.strengthY instead"),this.strengthY=t}};un(Sf,"DEFAULT_OPTIONS",{strength:{x:2,y:2},quality:4,resolution:1,kernelSize:5});var Cf=`precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform vec2 uDimensions;
uniform vec2 uCenter;
uniform float uRadius;
uniform float uStrength;

uniform vec4 uInputSize;
uniform vec4 uInputClamp;

void main()
{
    vec2 coord = vTextureCoord * uInputSize.xy;
    coord -= uCenter * uDimensions.xy;
    float distance = length(coord);

    if (distance < uRadius) {
        float percent = distance / uRadius;
        if (uStrength > 0.0) {
            coord *= mix(1.0, smoothstep(0.0, uRadius / distance, percent), uStrength * 0.75);
        } else {
            coord *= mix(1.0, pow(percent, 1.0 + uStrength * 0.75) * uRadius / distance, 1.0 - percent);
        }
    }

    coord += uCenter * uDimensions.xy;
    coord /= uInputSize.xy;
    vec2 clampedCoord = clamp(coord, uInputClamp.xy, uInputClamp.zw);
    vec4 color = texture(uTexture, clampedCoord);

    if (coord != clampedCoord) {
        color *= max(0.0, 1.0 - length(coord - clampedCoord));
    }

    finalColor = color;
}
`,wf=`struct BulgePinchUniforms {
  uDimensions: vec2<f32>,
  uCenter: vec2<f32>,
  uRadius: f32,
  uStrength: f32,
};

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> bulgePinchUniforms : BulgePinchUniforms;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  let dimensions: vec2<f32> = bulgePinchUniforms.uDimensions;
  let center: vec2<f32> = bulgePinchUniforms.uCenter;
  let radius: f32 = bulgePinchUniforms.uRadius;
  let strength: f32 = bulgePinchUniforms.uStrength;
  var coord: vec2<f32> = (uv * gfu.uInputSize.xy) - center * dimensions.xy;

  let distance: f32 = length(coord);

  if (distance < radius) {
      let percent: f32 = distance / radius;
      if (strength > 0.0) {
          coord *= mix(1.0, smoothstep(0.0, radius / distance, percent), strength * 0.75);
      } else {
          coord *= mix(1.0, pow(percent, 1.0 + strength * 0.75) * radius / distance, 1.0 - percent);
      }
  }
    coord += (center * dimensions.xy);
    coord /= gfu.uInputSize.xy;

    let clampedCoord: vec2<f32> = clamp(coord, gfu.uInputClamp.xy, gfu.uInputClamp.zw);
    var color: vec4<f32> = textureSample(uTexture, uSampler, clampedCoord);
    if (coord.x != clampedCoord.x && coord.y != clampedCoord.y) {
        color *= max(0.0, 1.0 - length(coord - clampedCoord));
    }

    return color;
}

fn compareVec2(x: vec2<f32>, y: vec2<f32>) -> bool
{
  if (x.x == y.x && x.y == y.y)
  {
    return true;
  }

  return false;
}`,Af=Object.defineProperty,Tf=(n,t,e)=>t in n?Af(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,$o=(n,t,e)=>(Tf(n,typeof t!="symbol"?t+"":t,e),e);const Pf=class Vo extends D{constructor(t){t={...Vo.DEFAULT_OPTIONS,...t};const e=B.from({vertex:{source:W,entryPoint:"mainVertex"},fragment:{source:wf,entryPoint:"mainFragment"}}),r=L.from({vertex:V,fragment:Cf,name:"bulge-pinch-filter"});super({gpuProgram:e,glProgram:r,resources:{bulgePinchUniforms:{uDimensions:{value:[0,0],type:"vec2<f32>"},uCenter:{value:t.center,type:"vec2<f32>"},uRadius:{value:t.radius,type:"f32"},uStrength:{value:t.strength,type:"f32"}}}}),$o(this,"uniforms"),this.uniforms=this.resources.bulgePinchUniforms.uniforms,Object.assign(this,t)}apply(t,e,r,i){this.uniforms.uDimensions[0]=e.frame.width,this.uniforms.uDimensions[1]=e.frame.height,t.applyFilter(this,e,r,i)}get center(){return this.uniforms.uCenter}set center(t){typeof t=="number"&&(t={x:t,y:t}),Array.isArray(t)&&(t={x:t[0],y:t[1]}),this.uniforms.uCenter=t}get centerX(){return this.uniforms.uCenter.x}set centerX(t){this.uniforms.uCenter.x=t}get centerY(){return this.uniforms.uCenter.y}set centerY(t){this.uniforms.uCenter.y=t}get radius(){return this.uniforms.uRadius}set radius(t){this.uniforms.uRadius=t}get strength(){return this.uniforms.uStrength}set strength(t){this.uniforms.uStrength=t}};$o(Pf,"DEFAULT_OPTIONS",{center:{x:.5,y:.5},radius:100,strength:1});var Ff=`precision highp float;
in vec2 vTextureCoord;
in vec2 vFilterCoord;
out vec4 finalColor;

const int TYPE_LINEAR = 0;
const int TYPE_RADIAL = 1;
const int TYPE_CONIC = 2;
const int MAX_STOPS = 32;

uniform sampler2D uTexture;
uniform vec4 uOptions;
uniform vec2 uCounts;
uniform vec3 uColors[MAX_STOPS];
uniform vec4 uStops[MAX_STOPS];

const float PI = 3.1415926538;
const float PI_2 = PI*2.;

struct ColorStop {
    float offset;
    vec3 color;
    float alpha;
};

mat2 rotate2d(float angle){
    return mat2(cos(angle), -sin(angle),
    sin(angle), cos(angle));
}

float projectLinearPosition(vec2 pos, float angle){
    vec2 center = vec2(0.5);
    vec2 result = pos - center;
    result = rotate2d(angle) * result;
    result = result + center;
    return clamp(result.x, 0., 1.);
}

float projectRadialPosition(vec2 pos) {
    float r = distance(pos, vec2(0.5));
    return clamp(2.*r, 0., 1.);
}

float projectAnglePosition(vec2 pos, float angle) {
    vec2 center = pos - vec2(0.5);
    float polarAngle=atan(-center.y, center.x);
    return mod(polarAngle + angle, PI_2) / PI_2;
}

float projectPosition(vec2 pos, int type, float angle) {
    if (type == TYPE_LINEAR) {
        return projectLinearPosition(pos, angle);
    } else if (type == TYPE_RADIAL) {
        return projectRadialPosition(pos);
    } else if (type == TYPE_CONIC) {
        return projectAnglePosition(pos, angle);
    }

    return pos.y;
}

void main(void) {
    int uType = int(uOptions[0]);
    float uAngle = uOptions[1];
    float uAlpha = uOptions[2];
    float uReplace = uOptions[3];

    int uNumStops = int(uCounts[0]);
    float uMaxColors = uCounts[1];

    // current/original color
    vec4 currentColor = texture(uTexture, vTextureCoord);

    // skip calculations if gradient alpha is 0
    if (0.0 == uAlpha) {
        finalColor = currentColor;
        return;
    }

    // project position
    float y = projectPosition(vFilterCoord, int(uType), radians(uAngle));

    // check gradient bounds
    float offsetMin = uStops[0][0];
    float offsetMax = 0.0;

    int numStops = int(uNumStops);

    for (int i = 0; i < MAX_STOPS; i++) {
        if (i == numStops-1){ // last index
            offsetMax = uStops[i][0];
        }
    }

    if (y  < offsetMin || y > offsetMax) {
        finalColor = currentColor;
        return;
    }

    // limit colors
    if (uMaxColors > 0.) {
        float stepSize = 1./uMaxColors;
        float stepNumber = float(floor(y/stepSize));
        y = stepSize * (stepNumber + 0.5);// offset by 0.5 to use color from middle of segment
    }

    // find color stops
    ColorStop from;
    ColorStop to;

    for (int i = 0; i < MAX_STOPS; i++) {
        if (y >= uStops[i][0]) {
            from = ColorStop(uStops[i][0], uColors[i], uStops[i][1]);
            to = ColorStop(uStops[i+1][0], uColors[i+1], uStops[i+1][1]);
        }

        if (i == numStops-1){ // last index
            break;
        }
    }

    // mix colors from stops
    vec4 colorFrom = vec4(from.color * from.alpha, from.alpha);
    vec4 colorTo = vec4(to.color * to.alpha, to.alpha);

    float segmentHeight = to.offset - from.offset;
    float relativePos = y - from.offset;// position from 0 to [segmentHeight]
    float relativePercent = relativePos / segmentHeight;// position in percent between [from.offset] and [to.offset].

    float gradientAlpha = uAlpha * currentColor.a;
    vec4 gradientColor = mix(colorFrom, colorTo, relativePercent) * gradientAlpha;

    if (uReplace < 0.5) {
        // mix resulting color with current color
        finalColor = gradientColor + currentColor*(1.-gradientColor.a);
    } else {
        // replace with gradient color
        finalColor = gradientColor;
    }
}
`,zf=`in vec2 aPosition;
out vec2 vTextureCoord;
out vec2 vFilterCoord;

uniform vec4 uInputSize;
uniform vec4 uOutputFrame;
uniform vec4 uOutputTexture;

vec4 filterVertexPosition( void )
{
    vec2 position = aPosition * uOutputFrame.zw + uOutputFrame.xy;
    
    position.x = position.x * (2.0 / uOutputTexture.x) - 1.0;
    position.y = position.y * (2.0*uOutputTexture.z / uOutputTexture.y) - uOutputTexture.z;

    return vec4(position, 0.0, 1.0);
}

vec2 filterTextureCoord( void )
{
    return aPosition * (uOutputFrame.zw * uInputSize.zw);
}

void main(void)
{
    gl_Position = filterVertexPosition();
    vTextureCoord = filterTextureCoord();
    vFilterCoord = vTextureCoord * uInputSize.xy / uOutputFrame.zw;
}
`,rs=`struct BaseUniforms {
  uOptions: vec4<f32>,
  uCounts: vec2<f32>,
};

struct StopsUniforms {
  uColors: array<vec3<f32>, MAX_STOPS>,
  uStops: array<vec4<f32>, MAX_STOPS>,
};

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> baseUniforms : BaseUniforms;
@group(1) @binding(1) var<uniform> stopsUniforms : StopsUniforms;

struct VSOutput {
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>,
  @location(1) coord : vec2<f32>
};

fn filterVertexPosition(aPosition:vec2<f32>) -> vec4<f32>
{
    var position = aPosition * gfu.uOutputFrame.zw + gfu.uOutputFrame.xy;

    position.x = position.x * (2.0 / gfu.uOutputTexture.x) - 1.0;
    position.y = position.y * (2.0*gfu.uOutputTexture.z / gfu.uOutputTexture.y) - gfu.uOutputTexture.z;

    return vec4(position, 0.0, 1.0);
}

fn filterTextureCoord( aPosition:vec2<f32> ) -> vec2<f32>
{
    return aPosition * (gfu.uOutputFrame.zw * gfu.uInputSize.zw);
}

fn filterCoord( vTextureCoord:vec2<f32> ) -> vec2<f32>
{
    return vTextureCoord * gfu.uInputSize.xy / gfu.uOutputFrame.zw;
}

fn globalTextureCoord( aPosition:vec2<f32> ) -> vec2<f32>
{
  return  (aPosition.xy / gfu.uGlobalFrame.zw) + (gfu.uGlobalFrame.xy / gfu.uGlobalFrame.zw);  
}

fn getSize() -> vec2<f32>
{
  return gfu.uGlobalFrame.zw;
}
  
@vertex
fn mainVertex(
  @location(0) aPosition : vec2<f32>, 
) -> VSOutput {
  let vTextureCoord: vec2<f32> = filterTextureCoord(aPosition);
  return VSOutput(
   filterVertexPosition(aPosition),
   vTextureCoord,
   filterCoord(vTextureCoord),
  );
}

struct ColorStop {
  offset: f32,
  color: vec3<f32>,
  alpha: f32,
};

fn rotate2d(angle: f32) -> mat2x2<f32>{
  return mat2x2(cos(angle), -sin(angle),
  sin(angle), cos(angle));
}

fn projectLinearPosition(pos: vec2<f32>, angle: f32) -> f32 {
  var center: vec2<f32> = vec2<f32>(0.5);
  var result: vec2<f32> = pos - center;
  result = rotate2d(angle) * result;
  result = result + center;
  return clamp(result.x, 0.0, 1.0);
}

fn projectRadialPosition(pos: vec2<f32>) -> f32 {
  var r: f32 = distance(pos, vec2<f32>(0.5));
  return clamp(2.0 * r, 0.0, 1.0);
}

fn projectAnglePosition(pos: vec2<f32>, angle: f32) -> f32 {
  var center: vec2<f32> = pos - vec2<f32>(0.5, 0.5);
  var polarAngle: f32 = atan2(-center.y, center.x);
  return ((polarAngle + angle) % PI_2) / PI_2;
}

fn projectPosition(pos: vec2<f32>, gradientType: i32, angle: f32) -> f32 {
  if (gradientType == TYPE_LINEAR) {
      return projectLinearPosition(pos, angle);
  } else if (gradientType == TYPE_RADIAL) {
      return projectRadialPosition(pos);
  } else if (gradientType == TYPE_CONIC) {
      return projectAnglePosition(pos, angle);
  }

  return pos.y;
}

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>,
  @location(1) coord : vec2<f32>
) -> @location(0) vec4<f32> {
  let uType: i32 = i32(baseUniforms.uOptions[0]);
  let uAngle: f32 = baseUniforms.uOptions[1];
  let uAlpha: f32 = baseUniforms.uOptions[2];
  let uReplace: f32 = baseUniforms.uOptions[3];

  let uNumStops: i32 = i32(baseUniforms.uCounts[0]);
  let uMaxColors: f32 = baseUniforms.uCounts[1];

  // current/original color
  var currentColor: vec4<f32> = textureSample(uTexture, uSampler, uv);

  // skip calculations if gradient alpha is 0
  if (uAlpha == 0.0) { return currentColor; }

  // project position
  var y: f32 = projectPosition(coord, uType, radians(uAngle));

  // check gradient bounds
  var offsetMin: f32 = stopsUniforms.uStops[0][0];
  var offsetMax: f32 = 0.0;

  let numStops: i32 = uNumStops;

  for (var i: i32 = 0; i < MAX_STOPS; i = i + 1) {
      if (i == numStops - 1) { // last index
          offsetMax = stopsUniforms.uStops[i][0];
      }
  }

  if (y  < offsetMin || y > offsetMax) { return currentColor; }

  // limit colors
  if (uMaxColors > 0.0) {
      var stepSize: f32 = 1.0 / uMaxColors;
      var stepNumber: f32 = floor(y / stepSize);
      y = stepSize * (stepNumber + 0.5); // offset by 0.5 to use color from middle of segment
  }

  // find color stops
  var stopFrom: ColorStop;
  var stopTo: ColorStop;

  for (var i: i32 = 0; i < MAX_STOPS; i = i + 1) {
      if (y >= stopsUniforms.uStops[i][0]) {
          stopFrom = ColorStop(stopsUniforms.uStops[i][0], stopsUniforms.uColors[i], stopsUniforms.uStops[i][1]);
          stopTo = ColorStop(stopsUniforms.uStops[i + 1][0], stopsUniforms.uColors[i + 1], stopsUniforms.uStops[i + 1][1]);
      }

      if (i == numStops - 1) { // last index
          break;
      }
  }

  // mix colors from stops
  var colorFrom: vec4<f32> = vec4<f32>(stopFrom.color * stopFrom.alpha, stopFrom.alpha);
  var colorTo: vec4<f32> = vec4<f32>(stopTo.color * stopTo.alpha, stopTo.alpha);

  var segmentHeight: f32 = stopTo.offset - stopFrom.offset;
  var relativePos: f32 = y - stopFrom.offset; // position from 0 to [segmentHeight]
  var relativePercent: f32 = relativePos / segmentHeight; // position in percent between [from.offset] and [to.offset].

  var gradientAlpha: f32 = uAlpha * currentColor.a;
  var gradientColor: vec4<f32> = mix(colorFrom, colorTo, relativePercent) * gradientAlpha;

  if (uReplace < 0.5) {
      // mix resulting color with current color
      return gradientColor + currentColor * (1.0 - gradientColor.a);
  } else {
      // replace with gradient color
      return gradientColor;
  }
}

const PI: f32 = 3.14159265358979323846264;
const PI_2: f32 = PI * 2.0;

const TYPE_LINEAR: i32 = 0;
const TYPE_RADIAL: i32 = 1;
const TYPE_CONIC: i32 = 2;
const MAX_STOPS: i32 = 32;`,ee=ee||{};ee.stringify=function(){var n={"visit_linear-gradient":function(t){return n.visit_gradient(t)},"visit_repeating-linear-gradient":function(t){return n.visit_gradient(t)},"visit_radial-gradient":function(t){return n.visit_gradient(t)},"visit_repeating-radial-gradient":function(t){return n.visit_gradient(t)},visit_gradient:function(t){var e=n.visit(t.orientation);return e&&(e+=", "),t.type+"("+e+n.visit(t.colorStops)+")"},visit_shape:function(t){var e=t.value,r=n.visit(t.at),i=n.visit(t.style);return i&&(e+=" "+i),r&&(e+=" at "+r),e},"visit_default-radial":function(t){var e="",r=n.visit(t.at);return r&&(e+=r),e},"visit_extent-keyword":function(t){var e=t.value,r=n.visit(t.at);return r&&(e+=" at "+r),e},"visit_position-keyword":function(t){return t.value},visit_position:function(t){return n.visit(t.value.x)+" "+n.visit(t.value.y)},"visit_%":function(t){return t.value+"%"},visit_em:function(t){return t.value+"em"},visit_px:function(t){return t.value+"px"},visit_literal:function(t){return n.visit_color(t.value,t)},visit_hex:function(t){return n.visit_color("#"+t.value,t)},visit_rgb:function(t){return n.visit_color("rgb("+t.value.join(", ")+")",t)},visit_rgba:function(t){return n.visit_color("rgba("+t.value.join(", ")+")",t)},visit_color:function(t,e){var r=t,i=n.visit(e.length);return i&&(r+=" "+i),r},visit_angular:function(t){return t.value+"deg"},visit_directional:function(t){return"to "+t.value},visit_array:function(t){var e="",r=t.length;return t.forEach(function(i,s){e+=n.visit(i),s<r-1&&(e+=", ")}),e},visit:function(t){if(!t)return"";var e="";if(t instanceof Array)return n.visit_array(t,e);if(t.type){var r=n["visit_"+t.type];if(r)return r(t);throw Error("Missing visitor visit_"+t.type)}else throw Error("Invalid node.")}};return function(t){return n.visit(t)}}();var ee=ee||{};ee.parse=function(){var n={linearGradient:/^(\-(webkit|o|ms|moz)\-)?(linear\-gradient)/i,repeatingLinearGradient:/^(\-(webkit|o|ms|moz)\-)?(repeating\-linear\-gradient)/i,radialGradient:/^(\-(webkit|o|ms|moz)\-)?(radial\-gradient)/i,repeatingRadialGradient:/^(\-(webkit|o|ms|moz)\-)?(repeating\-radial\-gradient)/i,sideOrCorner:/^to (left (top|bottom)|right (top|bottom)|left|right|top|bottom)/i,extentKeywords:/^(closest\-side|closest\-corner|farthest\-side|farthest\-corner|contain|cover)/,positionKeywords:/^(left|center|right|top|bottom)/i,pixelValue:/^(-?(([0-9]*\.[0-9]+)|([0-9]+\.?)))px/,percentageValue:/^(-?(([0-9]*\.[0-9]+)|([0-9]+\.?)))\%/,emValue:/^(-?(([0-9]*\.[0-9]+)|([0-9]+\.?)))em/,angleValue:/^(-?(([0-9]*\.[0-9]+)|([0-9]+\.?)))deg/,startCall:/^\(/,endCall:/^\)/,comma:/^,/,hexColor:/^\#([0-9a-fA-F]+)/,literalColor:/^([a-zA-Z]+)/,rgbColor:/^rgb/i,rgbaColor:/^rgba/i,number:/^(([0-9]*\.[0-9]+)|([0-9]+\.?))/},t="";function e(P){var $=new Error(t+": "+P);throw $.source=t,$}function r(){var P=i();return t.length>0&&e("Invalid input not EOF"),P}function i(){return y(s)}function s(){return o("linear-gradient",n.linearGradient,l)||o("repeating-linear-gradient",n.repeatingLinearGradient,l)||o("radial-gradient",n.radialGradient,h)||o("repeating-radial-gradient",n.repeatingRadialGradient,h)}function o(P,$,w){return a($,function(E){var Ve=w();return Ve&&(N(n.comma)||e("Missing comma before color stops")),{type:P,orientation:Ve,colorStops:y(_)}})}function a(P,$){var w=N(P);if(w){N(n.startCall)||e("Missing (");var E=$(w);return N(n.endCall)||e("Missing )"),E}}function l(){return u()||c()}function u(){return M("directional",n.sideOrCorner,1)}function c(){return M("angular",n.angleValue,1)}function h(){var P,$=f(),w;return $&&(P=[],P.push($),w=t,N(n.comma)&&($=f(),$?P.push($):t=w)),P}function f(){var P=d()||p();if(P)P.at=m();else{var $=g();if($){P=$;var w=m();w&&(P.at=w)}else{var E=v();E&&(P={type:"default-radial",at:E})}}return P}function d(){var P=M("shape",/^(circle)/i,0);return P&&(P.style=U()||g()),P}function p(){var P=M("shape",/^(ellipse)/i,0);return P&&(P.style=H()||g()),P}function g(){return M("extent-keyword",n.extentKeywords,1)}function m(){if(M("position",/^at/,0)){var P=v();return P||e("Missing positioning value"),P}}function v(){var P=x();if(P.x||P.y)return{type:"position",value:P}}function x(){return{x:H(),y:H()}}function y(P){var $=P(),w=[];if($)for(w.push($);N(n.comma);)$=P(),$?w.push($):e("One extra comma");return w}function _(){var P=A();return P||e("Expected color definition"),P.length=H(),P}function A(){return T()||b()||F()||R()}function R(){return M("literal",n.literalColor,0)}function T(){return M("hex",n.hexColor,1)}function F(){return a(n.rgbColor,function(){return{type:"rgb",value:y(S)}})}function b(){return a(n.rgbaColor,function(){return{type:"rgba",value:y(S)}})}function S(){return N(n.number)[1]}function H(){return M("%",n.percentageValue,1)||xt()||U()}function xt(){return M("position-keyword",n.positionKeywords,1)}function U(){return M("px",n.pixelValue,1)||M("em",n.emValue,1)}function M(P,$,w){var E=N($);if(E)return{type:P,value:E[w]}}function N(P){var $,w;return w=/^[\n\r\t\s]+/.exec(t),w&&q(w[0].length),$=P.exec(t),$&&q($[0].length),$}function q(P){t=t.substr(P)}return function(P){return t=P.toString(),r()}}();var Mf=ee.parse;ee.stringify;function If(n){const t=Mf(Df(n));if(t.length===0)throw new Error("Invalid CSS gradient.");if(t.length!==1)throw new Error("Unsupported CSS gradient (multiple gradients is not supported).");const e=t[0],r=Of(e.type),i=Rf(e.colorStops),s=Bf(e.orientation);return{type:r,stops:i,angle:s}}function Of(n){const t={"linear-gradient":0,"radial-gradient":1};if(!(n in t))throw new Error(`Unsupported gradient type "${n}"`);return t[n]}function Rf(n){const t=Uf(n),e=[],r=new G;for(let i=0;i<n.length;i++){const s=Ef(n[i]),o=r.setValue(s).toArray();e.push({offset:t[i],color:o.slice(0,3),alpha:o[3]})}return e}function Ef(n){switch(n.type){case"hex":return`#${n.value}`;case"literal":return n.value;default:return`${n.type}(${n.value.join(",")})`}}function Uf(n){const t=[];for(let s=0;s<n.length;s++){const o=n[s];let a=-1;o.type==="literal"&&o.length&&"type"in o.length&&o.length.type==="%"&&"value"in o.length&&(a=parseFloat(o.length.value)/100),t.push(a)}const r=s=>{for(let o=s;o<t.length;o++)if(t[o]!==-1)return{indexDelta:o-s,offset:t[o]};return{indexDelta:t.length-1-s,offset:1}};let i=0;for(let s=0;s<t.length;s++){const o=t[s];if(o!==-1)i=o;else if(s===0)t[s]=0;else if(s+1===t.length)t[s]=1;else{const a=r(s),u=(a.offset-i)/(1+a.indexDelta);for(let c=0;c<=a.indexDelta;c++)t[s+c]=i+(c+1)*u;s+=a.indexDelta,i=t[s]}}return t.map(kf)}function kf(n){return n.toString().length>6?parseFloat(n.toString().substring(0,6)):n}function Bf(n){if(typeof n>"u")return 0;if("type"in n&&"value"in n)switch(n.type){case"angular":return parseFloat(n.value);case"directional":return Lf(n.value)}return 0}function Lf(n){const t={left:270,top:0,bottom:180,right:90,"left top":315,"top left":315,"left bottom":225,"bottom left":225,"right top":45,"top right":45,"right bottom":135,"bottom right":135};if(!(n in t))throw new Error(`Unsupported directional value "${n}"`);return t[n]}function Df(n){let t=n.replace(/\s{2,}/gu," ");return t=t.replace(/;/g,""),t=t.replace(/ ,/g,","),t=t.replace(/\( /g,"("),t=t.replace(/ \)/g,")"),t.trim()}var Gf=Object.defineProperty,Nf=(n,t,e)=>t in n?Gf(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,qt=(n,t,e)=>(Nf(n,typeof t!="symbol"?t+"":t,e),e);const ar=90;function $f(n){return[...n].sort((t,e)=>t.offset-e.offset)}const $e=class cn extends D{constructor(t){if(t&&"css"in t?t={...If(t.css||""),alpha:t.alpha??cn.defaults.alpha,maxColors:t.maxColors??cn.defaults.maxColors}:t={...cn.defaults,...t},!t.stops||t.stops.length<2)throw new Error("ColorGradientFilter requires at least 2 color stops.");const e=B.from({vertex:{source:rs,entryPoint:"mainVertex"},fragment:{source:rs,entryPoint:"mainFragment"}}),r=L.from({vertex:zf,fragment:Ff,name:"color-gradient-filter"}),i=32;super({gpuProgram:e,glProgram:r,resources:{baseUniforms:{uOptions:{value:[t.type,t.angle??ar,t.alpha,t.replace?1:0],type:"vec4<f32>"},uCounts:{value:[t.stops.length,t.maxColors],type:"vec2<f32>"}},stopsUniforms:{uColors:{value:new Float32Array(i*3),type:"vec3<f32>",size:i},uStops:{value:new Float32Array(i*4),type:"vec4<f32>",size:i}}}}),qt(this,"baseUniforms"),qt(this,"stopsUniforms"),qt(this,"_stops",[]),this.baseUniforms=this.resources.baseUniforms.uniforms,this.stopsUniforms=this.resources.stopsUniforms.uniforms,Object.assign(this,t)}get stops(){return this._stops}set stops(t){const e=$f(t),r=new G;let i,s,o;for(let a=0;a<e.length;a++){r.setValue(e[a].color);const l=a*3;[i,s,o]=r.toArray(),this.stopsUniforms.uColors[l]=i,this.stopsUniforms.uColors[l+1]=s,this.stopsUniforms.uColors[l+2]=o,this.stopsUniforms.uStops[a*4]=e[a].offset,this.stopsUniforms.uStops[a*4+1]=e[a].alpha}this.baseUniforms.uCounts[0]=e.length,this._stops=e}get type(){return this.baseUniforms.uOptions[0]}set type(t){this.baseUniforms.uOptions[0]=t}get angle(){return this.baseUniforms.uOptions[1]+ar}set angle(t){this.baseUniforms.uOptions[1]=t-ar}get alpha(){return this.baseUniforms.uOptions[2]}set alpha(t){this.baseUniforms.uOptions[2]=t}get maxColors(){return this.baseUniforms.uCounts[1]}set maxColors(t){this.baseUniforms.uCounts[1]=t}get replace(){return this.baseUniforms.uOptions[3]>.5}set replace(t){this.baseUniforms.uOptions[3]=t?1:0}};qt($e,"LINEAR",0);qt($e,"RADIAL",1);qt($e,"CONIC",2);qt($e,"defaults",{type:$e.LINEAR,stops:[{offset:0,color:16711680,alpha:1},{offset:1,color:255,alpha:1}],alpha:1,angle:90,maxColors:0,replace:!1});var Vf=`in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform sampler2D uMapTexture;
uniform float uMix;
uniform float uSize;
uniform float uSliceSize;
uniform float uSlicePixelSize;
uniform float uSliceInnerSize;

void main() {
    vec4 color = texture(uTexture, vTextureCoord.xy);
    vec4 adjusted;

    if (color.a > 0.0) {
        color.rgb /= color.a;
        float innerWidth = uSize - 1.0;
        float zSlice0 = min(floor(color.b * innerWidth), innerWidth);
        float zSlice1 = min(zSlice0 + 1.0, innerWidth);
        float xOffset = uSlicePixelSize * 0.5 + color.r * uSliceInnerSize;
        float s0 = xOffset + (zSlice0 * uSliceSize);
        float s1 = xOffset + (zSlice1 * uSliceSize);
        float yOffset = uSliceSize * 0.5 + color.g * (1.0 - uSliceSize);
        vec4 slice0Color = texture(uMapTexture, vec2(s0,yOffset));
        vec4 slice1Color = texture(uMapTexture, vec2(s1,yOffset));
        float zOffset = fract(color.b * innerWidth);
        adjusted = mix(slice0Color, slice1Color, zOffset);

        color.rgb *= color.a;
    }

    finalColor = vec4(mix(color, adjusted, uMix).rgb, color.a);

}`,Wf=`struct ColorMapUniforms {
  uMix: f32,
  uSize: f32,
  uSliceSize: f32,
  uSlicePixelSize: f32,
  uSliceInnerSize: f32,
};

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> colorMapUniforms : ColorMapUniforms;
@group(1) @binding(1) var uMapTexture: texture_2d<f32>;
@group(1) @binding(2) var uMapSampler: sampler;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  var color:vec4<f32> = textureSample(uTexture, uSampler, uv);

  var adjusted: vec4<f32>;

  var altColor: vec4<f32> = vec4<f32>(color.rgb / color.a, color.a);
  let innerWidth: f32 = colorMapUniforms.uSize - 1.0;
  let zSlice0: f32 = min(floor(color.b * innerWidth), innerWidth);
  let zSlice1: f32 = min(zSlice0 + 1.0, innerWidth);
  let xOffset: f32 = colorMapUniforms.uSlicePixelSize * 0.5 + color.r * colorMapUniforms.uSliceInnerSize;
  let s0: f32 = xOffset + (zSlice0 * colorMapUniforms.uSliceSize);
  let s1: f32 = xOffset + (zSlice1 * colorMapUniforms.uSliceSize);
  let yOffset: f32 = colorMapUniforms.uSliceSize * 0.5 + color.g * (1.0 - colorMapUniforms.uSliceSize);
  let slice0Color: vec4<f32> = textureSample(uMapTexture, uMapSampler, vec2(s0,yOffset));
  let slice1Color: vec4<f32> = textureSample(uMapTexture, uMapSampler, vec2(s1,yOffset));
  let zOffset: f32 = fract(color.b * innerWidth);
  adjusted = mix(slice0Color, slice1Color, zOffset);
  altColor = vec4<f32>(color.rgb * color.a, color.a);

  let realColor: vec4<f32> = select(color, altColor, color.a > 0.0);

  return vec4<f32>(mix(realColor, adjusted, colorMapUniforms.uMix).rgb, realColor.a);
}`,Xf=Object.defineProperty,Yf=(n,t,e)=>t in n?Xf(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,It=(n,t,e)=>(Yf(n,typeof t!="symbol"?t+"":t,e),e);const Hf=class Wo extends D{constructor(...t){let e=t[0]??{};if((e instanceof k||e instanceof Ct)&&(I("6.0.0","ColorMapFilter constructor params are now options object. See params: { colorMap, nearest, mix }"),e={colorMap:e},t[1]!==void 0&&(e.nearest=t[1]),t[2]!==void 0&&(e.mix=t[2])),e={...Wo.DEFAULT_OPTIONS,...e},!e.colorMap)throw Error("No color map texture source was provided to ColorMapFilter");const r=B.from({vertex:{source:W,entryPoint:"mainVertex"},fragment:{source:Wf,entryPoint:"mainFragment"}}),i=L.from({vertex:V,fragment:Vf,name:"color-map-filter"});super({gpuProgram:r,glProgram:i,resources:{colorMapUniforms:{uMix:{value:e.mix,type:"f32"},uSize:{value:0,type:"f32"},uSliceSize:{value:0,type:"f32"},uSlicePixelSize:{value:0,type:"f32"},uSliceInnerSize:{value:0,type:"f32"}},uMapTexture:e.colorMap.source,uMapSampler:e.colorMap.source.style}}),It(this,"uniforms"),It(this,"_size",0),It(this,"_sliceSize",0),It(this,"_slicePixelSize",0),It(this,"_sliceInnerSize",0),It(this,"_nearest",!1),It(this,"_scaleMode","linear"),It(this,"_colorMap"),this.uniforms=this.resources.colorMapUniforms.uniforms,Object.assign(this,e)}get mix(){return this.uniforms.uMix}set mix(t){this.uniforms.uMix=t}get colorSize(){return this._size}get colorMap(){return this._colorMap}set colorMap(t){if(!t||t===this.colorMap)return;const e=t instanceof k?t.source:t;e.style.scaleMode=this._scaleMode,e.autoGenerateMipmaps=!1,this._size=e.height,this._sliceSize=1/this._size,this._slicePixelSize=this._sliceSize/this._size,this._sliceInnerSize=this._slicePixelSize*(this._size-1),this.uniforms.uSize=this._size,this.uniforms.uSliceSize=this._sliceSize,this.uniforms.uSlicePixelSize=this._slicePixelSize,this.uniforms.uSliceInnerSize=this._sliceInnerSize,this.resources.uMapTexture=e,this._colorMap=t}get nearest(){return this._nearest}set nearest(t){this._nearest=t,this._scaleMode=t?"nearest":"linear";const e=this._colorMap;e&&e.source&&(e.source.scaleMode=this._scaleMode,e.source.autoGenerateMipmaps=!1,e.source.style.update(),e.source.update())}updateColorMap(){const t=this._colorMap;t!=null&&t.source&&(t.source.update(),this.colorMap=t)}destroy(){var t;(t=this._colorMap)==null||t.destroy(),super.destroy()}};It(Hf,"DEFAULT_OPTIONS",{colorMap:k.WHITE,nearest:!1,mix:1});var jf=`in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform vec3 uColor;
uniform float uAlpha;

void main(void) {
    vec4 c = texture(uTexture, vTextureCoord);
    finalColor = vec4(mix(c.rgb, uColor.rgb, c.a * uAlpha), c.a);
}
`,qf=`struct ColorOverlayUniforms {
    uColor: vec3<f32>,
    uAlpha: f32,
};

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> colorOverlayUniforms : ColorOverlayUniforms;

@fragment
fn mainFragment(
    @builtin(position) position: vec4<f32>,
    @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
    let c = textureSample(uTexture, uSampler, uv);
    return vec4<f32>(mix(c.rgb, colorOverlayUniforms.uColor.rgb, c.a * colorOverlayUniforms.uAlpha), c.a);
}
`,Kf=Object.defineProperty,Zf=(n,t,e)=>t in n?Kf(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,Rr=(n,t,e)=>(Zf(n,typeof t!="symbol"?t+"":t,e),e);const Qf=class Xo extends D{constructor(...t){let e=t[0]??{};(typeof e=="number"||Array.isArray(e)||e instanceof Float32Array)&&(I("6.0.0","ColorOverlayFilter constructor params are now options object. See params: { color, alpha }"),e={color:e},t[1]!==void 0&&(e.alpha=t[1])),e={...Xo.DEFAULT_OPTIONS,...e};const r=B.from({vertex:{source:W,entryPoint:"mainVertex"},fragment:{source:qf,entryPoint:"mainFragment"}}),i=L.from({vertex:V,fragment:jf,name:"color-overlay-filter"});super({gpuProgram:r,glProgram:i,resources:{colorOverlayUniforms:{uColor:{value:new Float32Array(3),type:"vec3<f32>"},uAlpha:{value:e.alpha,type:"f32"}}}}),Rr(this,"uniforms"),Rr(this,"_color"),this.uniforms=this.resources.colorOverlayUniforms.uniforms,this._color=new G,this.color=e.color??0}get color(){return this._color.value}set color(t){this._color.setValue(t);const[e,r,i]=this._color.toArray();this.uniforms.uColor[0]=e,this.uniforms.uColor[1]=r,this.uniforms.uColor[2]=i}get alpha(){return this.uniforms.uAlpha}set alpha(t){this.uniforms.uAlpha=t}};Rr(Qf,"DEFAULT_OPTIONS",{color:0,alpha:1});var Jf=`in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform vec3 uOriginalColor;
uniform vec3 uTargetColor;
uniform float uTolerance;

void main(void) {
    vec4 c = texture(uTexture, vTextureCoord);
    vec3 colorDiff = uOriginalColor - (c.rgb / max(c.a, 0.0000000001));
    float colorDistance = length(colorDiff);
    float doReplace = step(colorDistance, uTolerance);
    finalColor = vec4(mix(c.rgb, (uTargetColor + colorDiff) * c.a, doReplace), c.a);
}
`,td=`struct ColorReplaceUniforms {
  uOriginalColor: vec3<f32>,
  uTargetColor: vec3<f32>,
  uTolerance: f32,
};

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> colorReplaceUniforms : ColorReplaceUniforms;

@fragment
fn mainFragment(
   @builtin(position) position: vec4<f32>,
    @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  let sample: vec4<f32> = textureSample(uTexture, uSampler, uv);

  let colorDiff: vec3<f32> = colorReplaceUniforms.uOriginalColor - (sample.rgb / max(sample.a, 0.0000000001));
  let colorDistance: f32 = length(colorDiff);
  let doReplace: f32 = step(colorDistance, colorReplaceUniforms.uTolerance);

  return vec4<f32>(mix(sample.rgb, (colorReplaceUniforms.uTargetColor + colorDiff) * sample.a, doReplace), sample.a);
}`,ed=Object.defineProperty,nd=(n,t,e)=>t in n?ed(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,hn=(n,t,e)=>(nd(n,typeof t!="symbol"?t+"":t,e),e);const rd=class Yo extends D{constructor(...t){let e=t[0]??{};(typeof e=="number"||Array.isArray(e)||e instanceof Float32Array)&&(I("6.0.0","ColorReplaceFilter constructor params are now options object. See params: { originalColor, targetColor, tolerance }"),e={originalColor:e},t[1]!==void 0&&(e.targetColor=t[1]),t[2]!==void 0&&(e.tolerance=t[2])),e={...Yo.DEFAULT_OPTIONS,...e};const r=B.from({vertex:{source:W,entryPoint:"mainVertex"},fragment:{source:td,entryPoint:"mainFragment"}}),i=L.from({vertex:V,fragment:Jf,name:"color-replace-filter"});super({gpuProgram:r,glProgram:i,resources:{colorReplaceUniforms:{uOriginalColor:{value:new Float32Array(3),type:"vec3<f32>"},uTargetColor:{value:new Float32Array(3),type:"vec3<f32>"},uTolerance:{value:e.tolerance,type:"f32"}}}}),hn(this,"uniforms"),hn(this,"_originalColor"),hn(this,"_targetColor"),this.uniforms=this.resources.colorReplaceUniforms.uniforms,this._originalColor=new G,this._targetColor=new G,this.originalColor=e.originalColor??16711680,this.targetColor=e.targetColor??0,Object.assign(this,e)}get originalColor(){return this._originalColor.value}set originalColor(t){this._originalColor.setValue(t);const[e,r,i]=this._originalColor.toArray();this.uniforms.uOriginalColor[0]=e,this.uniforms.uOriginalColor[1]=r,this.uniforms.uOriginalColor[2]=i}get targetColor(){return this._targetColor.value}set targetColor(t){this._targetColor.setValue(t);const[e,r,i]=this._targetColor.toArray();this.uniforms.uTargetColor[0]=e,this.uniforms.uTargetColor[1]=r,this.uniforms.uTargetColor[2]=i}get tolerance(){return this.uniforms.uTolerance}set tolerance(t){this.uniforms.uTolerance=t}set newColor(t){I("6.0.0","ColorReplaceFilter.newColor is deprecated, please use ColorReplaceFilter.targetColor instead"),this.targetColor=t}get newColor(){return I("6.0.0","ColorReplaceFilter.newColor is deprecated, please use ColorReplaceFilter.targetColor instead"),this.targetColor}set epsilon(t){I("6.0.0","ColorReplaceFilter.epsilon is deprecated, please use ColorReplaceFilter.tolerance instead"),this.tolerance=t}get epsilon(){return I("6.0.0","ColorReplaceFilter.epsilon is deprecated, please use ColorReplaceFilter.tolerance instead"),this.tolerance}};hn(rd,"DEFAULT_OPTIONS",{originalColor:16711680,targetColor:0,tolerance:.4});var id=`in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform vec2 uTexelSize;
uniform mat3 uMatrix;

void main(void)
{
    vec4 c11 = texture(uTexture, vTextureCoord - uTexelSize); // top left
    vec4 c12 = texture(uTexture, vec2(vTextureCoord.x, vTextureCoord.y - uTexelSize.y)); // top center
    vec4 c13 = texture(uTexture, vec2(vTextureCoord.x + uTexelSize.x, vTextureCoord.y - uTexelSize.y)); // top right

    vec4 c21 = texture(uTexture, vec2(vTextureCoord.x - uTexelSize.x, vTextureCoord.y)); // mid left
    vec4 c22 = texture(uTexture, vTextureCoord); // mid center
    vec4 c23 = texture(uTexture, vec2(vTextureCoord.x + uTexelSize.x, vTextureCoord.y)); // mid right

    vec4 c31 = texture(uTexture, vec2(vTextureCoord.x - uTexelSize.x, vTextureCoord.y + uTexelSize.y)); // bottom left
    vec4 c32 = texture(uTexture, vec2(vTextureCoord.x, vTextureCoord.y + uTexelSize.y)); // bottom center
    vec4 c33 = texture(uTexture, vTextureCoord + uTexelSize); // bottom right

    finalColor =
        c11 * uMatrix[0][0] + c12 * uMatrix[0][1] + c13 * uMatrix[0][2] +
        c21 * uMatrix[1][0] + c22 * uMatrix[1][1] + c23 * uMatrix[1][2] +
        c31 * uMatrix[2][0] + c32 * uMatrix[2][1] + c33 * uMatrix[2][2];

    finalColor.a = c22.a;
}`,sd=`struct ConvolutionUniforms {
    uMatrix: mat3x3<f32>,
    uTexelSize: vec2<f32>,
};

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> convolutionUniforms : ConvolutionUniforms;

@fragment
fn mainFragment(
    @location(0) uv: vec2<f32>,
    @builtin(position) position: vec4<f32>
) -> @location(0) vec4<f32> {
    let texelSize = convolutionUniforms.uTexelSize;
    let matrix = convolutionUniforms.uMatrix;

    let c11: vec4<f32> = textureSample(uTexture, uSampler, uv - texelSize); // top left
    let c12: vec4<f32> = textureSample(uTexture, uSampler, vec2<f32>(uv.x, uv.y - texelSize.y)); // top center
    let c13: vec4<f32> = textureSample(uTexture, uSampler, vec2<f32>(uv.x + texelSize.x, uv.y - texelSize.y)); // top right

    let c21: vec4<f32> = textureSample(uTexture, uSampler, vec2<f32>(uv.x - texelSize.x, uv.y)); // mid left
    let c22: vec4<f32> = textureSample(uTexture, uSampler, uv); // mid center
    let c23: vec4<f32> = textureSample(uTexture, uSampler, vec2<f32>(uv.x + texelSize.x, uv.y)); // mid right

    let c31: vec4<f32> = textureSample(uTexture, uSampler, vec2<f32>(uv.x - texelSize.x, uv.y + texelSize.y)); // bottom left
    let c32: vec4<f32> = textureSample(uTexture, uSampler, vec2<f32>(uv.x, uv.y + texelSize.y)); // bottom center
    let c33: vec4<f32> = textureSample(uTexture, uSampler, uv + texelSize); // bottom right

    var finalColor: vec4<f32> = vec4<f32>(
        c11 * matrix[0][0] + c12 * matrix[0][1] + c13 * matrix[0][2] +
        c21 * matrix[1][0] + c22 * matrix[1][1] + c23 * matrix[1][2] +
        c31 * matrix[2][0] + c32 * matrix[2][1] + c33 * matrix[2][2]
    );

    finalColor.a = c22.a;

    return finalColor;
}`,od=Object.defineProperty,ad=(n,t,e)=>t in n?od(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,Ho=(n,t,e)=>(ad(n,typeof t!="symbol"?t+"":t,e),e);const ld=class jo extends D{constructor(...t){let e=t[0]??{};Array.isArray(e)&&(I("6.0.0","ConvolutionFilter constructor params are now options object. See params: { matrix, width, height }"),e={matrix:e},t[1]!==void 0&&(e.width=t[1]),t[2]!==void 0&&(e.height=t[2])),e={...jo.DEFAULT_OPTIONS,...e};const r=e.width??200,i=e.height??200,s=B.from({vertex:{source:W,entryPoint:"mainVertex"},fragment:{source:sd,entryPoint:"mainFragment"}}),o=L.from({vertex:V,fragment:id,name:"convolution-filter"});super({gpuProgram:s,glProgram:o,resources:{convolutionUniforms:{uMatrix:{value:e.matrix,type:"mat3x3<f32>"},uTexelSize:{value:{x:1/r,y:1/i},type:"vec2<f32>"}}}}),Ho(this,"uniforms"),this.uniforms=this.resources.convolutionUniforms.uniforms,this.width=r,this.height=i}get matrix(){return this.uniforms.uMatrix}set matrix(t){t.forEach((e,r)=>{this.uniforms.uMatrix[r]=e})}get width(){return 1/this.uniforms.uTexelSize.x}set width(t){this.uniforms.uTexelSize.x=1/t}get height(){return 1/this.uniforms.uTexelSize.y}set height(t){this.uniforms.uTexelSize.y=1/t}};Ho(ld,"DEFAULT_OPTIONS",{matrix:new Float32Array(9),width:200,height:200});var ud=`precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform vec4 uLine;
uniform vec2 uNoise;
uniform vec3 uVignette;
uniform float uSeed;
uniform float uTime;
uniform vec2 uDimensions;

uniform vec4 uInputSize;

const float SQRT_2 = 1.414213;

float rand(vec2 co) {
    return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);
}

float vignette(vec3 co, vec2 coord)
{
    float outter = SQRT_2 - uVignette[0] * SQRT_2;
    vec2 dir = vec2(0.5) - coord;
    dir.y *= uDimensions.y / uDimensions.x;
    float darker = clamp((outter - length(dir) * SQRT_2) / ( 0.00001 + uVignette[2] * SQRT_2), 0.0, 1.0);
    return darker + (1.0 - darker) * (1.0 - uVignette[1]);
}

float noise(vec2 coord)
{
    vec2 pixelCoord = coord * uInputSize.xy;
    pixelCoord.x = floor(pixelCoord.x / uNoise[1]);
    pixelCoord.y = floor(pixelCoord.y / uNoise[1]);
    return (rand(pixelCoord * uNoise[1] * uSeed) - 0.5) * uNoise[0];
}

vec3 interlaceLines(vec3 co, vec2 coord)
{
    vec3 color = co;

    float curvature = uLine[0];
    float lineWidth = uLine[1];
    float lineContrast = uLine[2];
    float verticalLine = uLine[3];

    vec2 dir = vec2(coord * uInputSize.xy / uDimensions - 0.5);

    float _c = curvature > 0. ? curvature : 1.;
    float k = curvature > 0. ? (length(dir * dir) * 0.25 * _c * _c + 0.935 * _c) : 1.;
    vec2 uv = dir * k;
    float v = verticalLine > 0.5 ? uv.x * uDimensions.x : uv.y * uDimensions.y;
    v *= min(1.0, 2.0 / lineWidth ) / _c;
    float j = 1. + cos(v * 1.2 - uTime) * 0.5 * lineContrast;
    color *= j;

    float segment = verticalLine > 0.5 ? mod((dir.x + .5) * uDimensions.x, 4.) : mod((dir.y + .5) * uDimensions.y, 4.);
    color *= 0.99 + ceil(segment) * 0.015;

    return color;
}

void main(void)
{
    finalColor = texture(uTexture, vTextureCoord);
    vec2 coord = vTextureCoord * uInputSize.xy / uDimensions;

    if (uNoise[0] > 0.0 && uNoise[1] > 0.0)
    {
        float n = noise(vTextureCoord);
        finalColor += vec4(n, n, n, finalColor.a);
    }

    if (uVignette[0] > 0.)
    {
        float v = vignette(finalColor.rgb, coord);
        finalColor *= vec4(v, v, v, finalColor.a);
    }

    if (uLine[1] > 0.0)
    {
        finalColor = vec4(interlaceLines(finalColor.rgb, vTextureCoord), finalColor.a);  
    }
}
`,cd=`struct CRTUniforms {
    uLine: vec4<f32>,
    uNoise: vec2<f32>,
    uVignette: vec3<f32>,
    uSeed: f32,
    uTime: f32,
    uDimensions: vec2<f32>,
};

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> crtUniforms : CRTUniforms;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
    
  var color: vec4<f32> = textureSample(uTexture, uSampler, uv);
  let coord: vec2<f32> = uv * gfu.uInputSize.xy / crtUniforms.uDimensions;

  let uNoise = crtUniforms.uNoise;

  if (uNoise[0] > 0.0 && uNoise[1] > 0.0)
  {
    color += vec4<f32>(vec3<f32>(noise(uv)), color.a);
  }

  if (crtUniforms.uVignette[0] > 0.)
  {
    color *= vec4<f32>(vec3<f32>(vignette(color.rgb, coord)), color.a);
  }

  if (crtUniforms.uLine[1] > 0.0)
  {
    color = vec4<f32>(vec3<f32>(interlaceLines(color.rgb, uv)), color.a);  
  }

  return color;
}

const SQRT_2: f32 = 1.414213;

fn modulo(x: f32, y: f32) -> f32
{
  return x - y * floor(x/y);
}

fn rand(co: vec2<f32>) -> f32
{
  return fract(sin(dot(co, vec2<f32>(12.9898, 78.233))) * 43758.5453);
}

fn vignette(co: vec3<f32>, coord: vec2<f32>) -> f32
{
  let uVignette = crtUniforms.uVignette;
  let uDimensions = crtUniforms.uDimensions;
  
  let outter: f32 = SQRT_2 - uVignette[0] * SQRT_2;
  var dir: vec2<f32> = vec2<f32>(0.5) - coord;
  dir.y *= uDimensions.y / uDimensions.x;
  let darker: f32 = clamp((outter - length(dir) * SQRT_2) / ( 0.00001 + uVignette[2] * SQRT_2), 0.0, 1.0);
  return darker + (1.0 - darker) * (1.0 - uVignette[1]);
}

fn noise(coord: vec2<f32>) -> f32
{
  let uNoise = crtUniforms.uNoise;
  let uSeed = crtUniforms.uSeed;

  var pixelCoord: vec2<f32> = coord * gfu.uInputSize.xy;
  pixelCoord.x = floor(pixelCoord.x / uNoise[1]);
  pixelCoord.y = floor(pixelCoord.y / uNoise[1]);
  return (rand(pixelCoord * uNoise[1] * uSeed) - 0.5) * uNoise[0];
}

fn interlaceLines(co: vec3<f32>, coord: vec2<f32>) -> vec3<f32>
{
  var color = co;

  let uDimensions = crtUniforms.uDimensions;

  let curvature: f32 = crtUniforms.uLine[0];
  let lineWidth: f32 = crtUniforms.uLine[1];
  let lineContrast: f32 = crtUniforms.uLine[2];
  let verticalLine: f32 = crtUniforms.uLine[3];

  let dir: vec2<f32> = vec2<f32>(coord * gfu.uInputSize.xy / uDimensions - 0.5);

  let _c: f32 = select(1., curvature, curvature > 0.);
  let k: f32 = select(1., (length(dir * dir) * 0.25 * _c * _c + 0.935 * _c), curvature > 0.);
  let uv: vec2<f32> = dir * k;
  let v: f32 = select(uv.y * uDimensions.y, uv.x * uDimensions.x, verticalLine > 0.5) * min(1.0, 2.0 / lineWidth ) / _c;
  let j: f32 = 1. + cos(v * 1.2 - crtUniforms.uTime) * 0.5 * lineContrast;
  color *= j;

  let segment: f32 = select(modulo((dir.y + .5) * uDimensions.y, 4.), modulo((dir.x + .5) * uDimensions.x, 4.), verticalLine > 0.5);
  color *= 0.99 + ceil(segment) * 0.015;

  return color;
}`,hd=Object.defineProperty,fd=(n,t,e)=>t in n?hd(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,fn=(n,t,e)=>(fd(n,typeof t!="symbol"?t+"":t,e),e);const dd=class qo extends D{constructor(t){t={...qo.DEFAULT_OPTIONS,...t};const e=B.from({vertex:{source:W,entryPoint:"mainVertex"},fragment:{source:cd,entryPoint:"mainFragment"}}),r=L.from({vertex:V,fragment:ud,name:"crt-filter"});super({gpuProgram:e,glProgram:r,resources:{crtUniforms:{uLine:{value:new Float32Array(4),type:"vec4<f32>"},uNoise:{value:new Float32Array(2),type:"vec2<f32>"},uVignette:{value:new Float32Array(3),type:"vec3<f32>"},uSeed:{value:t.seed,type:"f32"},uTime:{value:t.time,type:"f32"},uDimensions:{value:new Float32Array(2),type:"vec2<f32>"}}}}),fn(this,"uniforms"),fn(this,"seed"),fn(this,"time"),this.uniforms=this.resources.crtUniforms.uniforms,Object.assign(this,t)}apply(t,e,r,i){this.uniforms.uDimensions[0]=e.frame.width,this.uniforms.uDimensions[1]=e.frame.height,this.uniforms.uSeed=this.seed,this.uniforms.uTime=this.time,t.applyFilter(this,e,r,i)}get curvature(){return this.uniforms.uLine[0]}set curvature(t){this.uniforms.uLine[0]=t}get lineWidth(){return this.uniforms.uLine[1]}set lineWidth(t){this.uniforms.uLine[1]=t}get lineContrast(){return this.uniforms.uLine[2]}set lineContrast(t){this.uniforms.uLine[2]=t}get verticalLine(){return this.uniforms.uLine[3]>.5}set verticalLine(t){this.uniforms.uLine[3]=t?1:0}get noise(){return this.uniforms.uNoise[0]}set noise(t){this.uniforms.uNoise[0]=t}get noiseSize(){return this.uniforms.uNoise[1]}set noiseSize(t){this.uniforms.uNoise[1]=t}get vignetting(){return this.uniforms.uVignette[0]}set vignetting(t){this.uniforms.uVignette[0]=t}get vignettingAlpha(){return this.uniforms.uVignette[1]}set vignettingAlpha(t){this.uniforms.uVignette[1]=t}get vignettingBlur(){return this.uniforms.uVignette[2]}set vignettingBlur(t){this.uniforms.uVignette[2]=t}};fn(dd,"DEFAULT_OPTIONS",{curvature:1,lineWidth:1,lineContrast:.25,verticalLine:!1,noise:0,noiseSize:1,vignetting:.3,vignettingAlpha:1,vignettingBlur:.3,time:0,seed:0});var pd=`precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform float uAngle;
uniform float uScale;
uniform bool uGrayScale;

uniform vec4 uInputSize;

float pattern()
{
    float s = sin(uAngle), c = cos(uAngle);
    vec2 tex = vTextureCoord * uInputSize.xy;
    vec2 point = vec2(
        c * tex.x - s * tex.y,
        s * tex.x + c * tex.y
    ) * uScale;
    return (sin(point.x) * sin(point.y)) * 4.0;
    }

    void main()
    {
    vec4 color = texture(uTexture, vTextureCoord);
    vec3 colorRGB = vec3(color);

    if (uGrayScale)
    {
        colorRGB = vec3(color.r + color.g + color.b) / 3.0;
    }

    finalColor = vec4(colorRGB * 10.0 - 5.0 + pattern(), color.a);
}
`,md=`struct DotUniforms {
  uScale:f32,
  uAngle:f32,
  uGrayScale:f32,
};

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> dotUniforms : DotUniforms;

@fragment
fn mainFragment(
  @location(0) uv: vec2<f32>,
  @builtin(position) position: vec4<f32>
) -> @location(0) vec4<f32> {
  let color: vec4<f32> = textureSample(uTexture, uSampler, uv);
  let gray: vec3<f32> = vec3<f32>(dot(color.rgb, vec3<f32>(0.299, 0.587, 0.114)));
  // dotUniforms.uGrayScale == 1 doesn't ever pass so it is converted to a float and compared to 0.5 instead 
  let finalColor: vec3<f32> = select(color.rgb, gray, f32(dotUniforms.uGrayScale) >= 0.5);

  return vec4<f32>(finalColor * 10.0 - 5.0 + pattern(uv), color.a);
}

fn pattern(uv: vec2<f32>) -> f32
{
  let s: f32 = sin(dotUniforms.uAngle);
  let c: f32 = cos(dotUniforms.uAngle);
  
  let tex: vec2<f32> = uv * gfu.uInputSize.xy;
  
  let p: vec2<f32> = vec2<f32>(
      c * tex.x - s * tex.y,
      s * tex.x + c * tex.y
  ) * dotUniforms.uScale;

  return (sin(p.x) * sin(p.y)) * 4.0;
}`,gd=Object.defineProperty,xd=(n,t,e)=>t in n?gd(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,vd=(n,t,e)=>(xd(n,t+"",e),e);const yd=class Ko extends D{constructor(...t){let e=t[0]??{};typeof e=="number"&&(I("6.0.0","DotFilter constructor params are now options object. See params: { scale, angle, grayscale }"),e={scale:e},t[1]!==void 0&&(e.angle=t[1]),t[2]!==void 0&&(e.grayscale=t[2])),e={...Ko.DEFAULT_OPTIONS,...e};const r={uScale:{value:e.scale,type:"f32"},uAngle:{value:e.angle,type:"f32"},uGrayScale:{value:e.grayscale?1:0,type:"f32"}},i=B.from({vertex:{source:W,entryPoint:"mainVertex"},fragment:{source:md,entryPoint:"mainFragment"}}),s=L.from({vertex:V,fragment:pd,name:"dot-filter"});super({gpuProgram:i,glProgram:s,resources:{dotUniforms:r}})}get scale(){return this.resources.dotUniforms.uniforms.uScale}set scale(t){this.resources.dotUniforms.uniforms.uScale=t}get angle(){return this.resources.dotUniforms.uniforms.uAngle}set angle(t){this.resources.dotUniforms.uniforms.uAngle=t}get grayscale(){return this.resources.dotUniforms.uniforms.uGrayScale===1}set grayscale(t){this.resources.dotUniforms.uniforms.uGrayScale=t?1:0}};vd(yd,"DEFAULT_OPTIONS",{scale:1,angle:5,grayscale:!0});var _d=`precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform float uAlpha;
uniform vec3 uColor;
uniform vec2 uOffset;

uniform vec4 uInputSize;

void main(void){
    vec4 sample = texture(uTexture, vTextureCoord - uOffset * uInputSize.zw);

    // Premultiply alpha
    sample.rgb = uColor.rgb * sample.a;

    // alpha user alpha
    sample *= uAlpha;

    finalColor = sample;
}`,bd=`struct DropShadowUniforms {
  uAlpha: f32,
  uColor: vec3<f32>,
  uOffset: vec2<f32>,
};

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> dropShadowUniforms : DropShadowUniforms;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  var color: vec4<f32> = textureSample(uTexture, uSampler, uv - dropShadowUniforms.uOffset * gfu.uInputSize.zw);

  // Premultiply alpha
  color = vec4<f32>(vec3<f32>(dropShadowUniforms.uColor.rgb * color.a), color.a);
  // alpha user alpha
  color *= dropShadowUniforms.uAlpha;

  return color;
}`,Sd=Object.defineProperty,Cd=(n,t,e)=>t in n?Sd(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,ae=(n,t,e)=>(Cd(n,typeof t!="symbol"?t+"":t,e),e);const Zo=class Qo extends D{constructor(t){t={...Qo.DEFAULT_OPTIONS,...t};const e=B.from({vertex:{source:W,entryPoint:"mainVertex"},fragment:{source:bd,entryPoint:"mainFragment"}}),r=L.from({vertex:V,fragment:_d,name:"drop-shadow-filter"});super({gpuProgram:e,glProgram:r,resources:{dropShadowUniforms:{uAlpha:{value:t.alpha,type:"f32"},uColor:{value:new Float32Array(3),type:"vec3<f32>"},uOffset:{value:t.offset,type:"vec2<f32>"}}},resolution:t.resolution}),ae(this,"uniforms"),ae(this,"shadowOnly",!1),ae(this,"_color"),ae(this,"_blurFilter"),ae(this,"_basePass"),this.uniforms=this.resources.dropShadowUniforms.uniforms,this._color=new G,this.color=t.color??0,this._blurFilter=new Eo({strength:t.kernels??t.blur,quality:t.kernels?void 0:t.quality}),this._basePass=new D({gpuProgram:B.from({vertex:{source:W,entryPoint:"mainVertex"},fragment:{source:`
                    @group(0) @binding(1) var uTexture: texture_2d<f32>; 
                    @group(0) @binding(2) var uSampler: sampler;
                    @fragment
                    fn mainFragment(
                        @builtin(position) position: vec4<f32>,
                        @location(0) uv : vec2<f32>
                    ) -> @location(0) vec4<f32> {
                        return textureSample(uTexture, uSampler, uv);
                    }
                    `,entryPoint:"mainFragment"}}),glProgram:L.from({vertex:V,fragment:`
                in vec2 vTextureCoord;
                out vec4 finalColor;
                uniform sampler2D uTexture;

                void main(void){
                    finalColor = texture(uTexture, vTextureCoord);
                }
                `,name:"drop-shadow-filter"}),resources:{}}),Object.assign(this,t)}apply(t,e,r,i){const s=mt.getSameSizeTexture(e);t.applyFilter(this,e,s,!0),this._blurFilter.apply(t,s,r,i),this.shadowOnly||t.applyFilter(this._basePass,e,r,!1),mt.returnTexture(s)}get offset(){return this.uniforms.uOffset}set offset(t){this.uniforms.uOffset=t,this._updatePadding()}get offsetX(){return this.offset.x}set offsetX(t){this.offset.x=t,this._updatePadding()}get offsetY(){return this.offset.y}set offsetY(t){this.offset.y=t,this._updatePadding()}get color(){return this._color.value}set color(t){this._color.setValue(t);const[e,r,i]=this._color.toArray();this.uniforms.uColor[0]=e,this.uniforms.uColor[1]=r,this.uniforms.uColor[2]=i}get alpha(){return this.uniforms.uAlpha}set alpha(t){this.uniforms.uAlpha=t}get blur(){return this._blurFilter.strength}set blur(t){this._blurFilter.strength=t,this._updatePadding()}get quality(){return this._blurFilter.quality}set quality(t){this._blurFilter.quality=t,this._updatePadding()}get kernels(){return this._blurFilter.kernels}set kernels(t){this._blurFilter.kernels=t}get pixelSize(){return this._blurFilter.pixelSize}set pixelSize(t){typeof t=="number"&&(t={x:t,y:t}),Array.isArray(t)&&(t={x:t[0],y:t[1]}),this._blurFilter.pixelSize=t}get pixelSizeX(){return this._blurFilter.pixelSizeX}set pixelSizeX(t){this._blurFilter.pixelSizeX=t}get pixelSizeY(){return this._blurFilter.pixelSizeY}set pixelSizeY(t){this._blurFilter.pixelSizeY=t}_updatePadding(){const t=Math.max(Math.abs(this.offsetX),Math.abs(this.offsetY));this.padding=t+this.blur*2+this.quality*4}};ae(Zo,"DEFAULT_OPTIONS",{offset:{x:4,y:4},color:0,alpha:.5,shadowOnly:!1,kernels:void 0,blur:2,quality:3,pixelSize:{x:1,y:1},resolution:1});let wd=Zo;var Ad=`precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform sampler2D uDisplacementMap;
uniform float uSeed;
uniform vec2 uDimensions;
uniform float uAspect;
uniform float uFillMode;
uniform float uOffset;
uniform float uDirection;
uniform vec2 uRed;
uniform vec2 uGreen;
uniform vec2 uBlue;

uniform vec4 uInputSize;
uniform vec4 uInputClamp;

const int TRANSPARENT = 0;
const int ORIGINAL = 1;
const int LOOP = 2;
const int CLAMP = 3;
const int MIRROR = 4;

void main(void)
{
    vec2 coord = (vTextureCoord * uInputSize.xy) / uDimensions;

    if (coord.x > 1.0 || coord.y > 1.0) {
        return;
    }

    float sinDir = sin(uDirection);
    float cosDir = cos(uDirection);

    float cx = coord.x - 0.5;
    float cy = (coord.y - 0.5) * uAspect;
    float ny = (-sinDir * cx + cosDir * cy) / uAspect + 0.5;

    // displacementMap: repeat
    // ny = ny > 1.0 ? ny - 1.0 : (ny < 0.0 ? 1.0 + ny : ny);

    // displacementMap: mirror
    ny = ny > 1.0 ? 2.0 - ny : (ny < 0.0 ? -ny : ny);

    vec4 dc = texture(uDisplacementMap, vec2(0.5, ny));

    float displacement = (dc.r - dc.g) * (uOffset / uInputSize.x);

    coord = vTextureCoord + vec2(cosDir * displacement, sinDir * displacement * uAspect);

    int fillMode = int(uFillMode);

    if (fillMode == CLAMP) {
        coord = clamp(coord, uInputClamp.xy, uInputClamp.zw);
    } else {
        if( coord.x > uInputClamp.z ) {
            if (fillMode == TRANSPARENT) {
                discard;
            } else if (fillMode == LOOP) {
                coord.x -= uInputClamp.z;
            } else if (fillMode == MIRROR) {
                coord.x = uInputClamp.z * 2.0 - coord.x;
            }
        } else if( coord.x < uInputClamp.x ) {
            if (fillMode == TRANSPARENT) {
                discard;
            } else if (fillMode == LOOP) {
                coord.x += uInputClamp.z;
            } else if (fillMode == MIRROR) {
                coord.x *= -uInputClamp.z;
            }
        }

        if( coord.y > uInputClamp.w ) {
            if (fillMode == TRANSPARENT) {
                discard;
            } else if (fillMode == LOOP) {
                coord.y -= uInputClamp.w;
            } else if (fillMode == MIRROR) {
                coord.y = uInputClamp.w * 2.0 - coord.y;
            }
        } else if( coord.y < uInputClamp.y ) {
            if (fillMode == TRANSPARENT) {
                discard;
            } else if (fillMode == LOOP) {
                coord.y += uInputClamp.w;
            } else if (fillMode == MIRROR) {
                coord.y *= -uInputClamp.w;
            }
        }
    }

    finalColor.r = texture(uTexture, coord + uRed * (1.0 - uSeed * 0.4) / uInputSize.xy).r;
    finalColor.g = texture(uTexture, coord + uGreen * (1.0 - uSeed * 0.3) / uInputSize.xy).g;
    finalColor.b = texture(uTexture, coord + uBlue * (1.0 - uSeed * 0.2) / uInputSize.xy).b;
    finalColor.a = texture(uTexture, coord).a;
}
`,Td=`struct GlitchUniforms {
  uSeed: f32,
  uDimensions: vec2<f32>,
  uAspect: f32,
  uFillMode: f32,
  uOffset: f32,
  uDirection: f32,
  uRed: vec2<f32>,
  uGreen: vec2<f32>,
  uBlue: vec2<f32>,
};

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> glitchUniforms : GlitchUniforms;
@group(1) @binding(1) var uDisplacementMap: texture_2d<f32>; 
@group(1) @binding(2) var uDisplacementSampler: sampler; 

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  let uSeed: f32 = glitchUniforms.uSeed;
  let uDimensions: vec2<f32> = glitchUniforms.uDimensions;
  let uAspect: f32 = glitchUniforms.uAspect;
  let uOffset: f32 = glitchUniforms.uOffset;
  let uDirection: f32 = glitchUniforms.uDirection;
  let uRed: vec2<f32> = glitchUniforms.uRed;
  let uGreen: vec2<f32> = glitchUniforms.uGreen;
  let uBlue: vec2<f32> = glitchUniforms.uBlue;

  let uInputSize: vec4<f32> = gfu.uInputSize;
  let uInputClamp: vec4<f32> = gfu.uInputClamp;

  var discarded: bool = false;
  var coord: vec2<f32> = (uv * uInputSize.xy) / uDimensions;

    if (coord.x > 1.0 || coord.y > 1.0) {
      discarded = true;
    }

    let sinDir: f32 = sin(uDirection);
    let cosDir: f32 = cos(uDirection);

    let cx: f32 = coord.x - 0.5;
    let cy: f32 = (coord.y - 0.5) * uAspect;
    var ny: f32 = (-sinDir * cx + cosDir * cy) / uAspect + 0.5;

    ny = select(select(ny, -ny, ny < 0.0), 2.0 - ny, ny > 1.0);

    let dc: vec4<f32> = textureSample(uDisplacementMap, uDisplacementSampler, vec2<f32>(0.5, ny));

    let displacement: f32 = (dc.r - dc.g) * (uOffset / uInputSize.x);

    coord = uv + vec2<f32>(cosDir * displacement, sinDir * displacement * uAspect);

    let fillMode: i32 = i32(glitchUniforms.uFillMode);

    if (fillMode == CLAMP) {
      coord = clamp(coord, uInputClamp.xy, uInputClamp.zw);
    } else {
      if (coord.x > uInputClamp.z) {
        if (fillMode == TRANSPARENT) {
          discarded = true;
        } else if (fillMode == LOOP) {
          coord.x = coord.x - uInputClamp.z;
        } else if (fillMode == MIRROR) {
          coord.x = uInputClamp.z * 2.0 - coord.x;
        }
      } else if (coord.x < uInputClamp.x) {
        if (fillMode == TRANSPARENT) {
          discarded = true;
        } else if (fillMode == LOOP) {
          coord.x = coord.x + uInputClamp.z;
        } else if (fillMode == MIRROR) {
          coord.x = coord.x * -uInputClamp.z;
        }
      }

      if (coord.y > uInputClamp.w) {
        if (fillMode == TRANSPARENT) {
          discarded = true;
        } else if (fillMode == LOOP) {
          coord.y = coord.y - uInputClamp.w;
        } else if (fillMode == MIRROR) {
          coord.y = uInputClamp.w * 2.0 - coord.y;
        }
      } else if (coord.y < uInputClamp.y) {
        if (fillMode == TRANSPARENT) {
          discarded = true;
        } else if (fillMode == LOOP) {
          coord.y = coord.y + uInputClamp.w;
        } else if (fillMode == MIRROR) {
          coord.y = coord.y * -uInputClamp.w;
        }
      }
    }

    let seedR: f32 = 1.0 - uSeed * 0.4;
    let seedG: f32 = 1.0 - uSeed * 0.3;
    let seedB: f32 = 1.0 - uSeed * 0.2;

    let offsetR: vec2<f32> = vec2(uRed.x * seedR / uInputSize.x, uRed.y * seedR / uInputSize.y);
    let offsetG: vec2<f32> = vec2(uGreen.x * seedG / uInputSize.x, uGreen.y * seedG / uInputSize.y);
    let offsetB: vec2<f32> = vec2(uBlue.x * seedB / uInputSize.x, uBlue.y * seedB / uInputSize.y);

    let r = textureSample(uTexture, uSampler, coord + offsetR).r;
    let g = textureSample(uTexture, uSampler, coord + offsetG).g;
    let b = textureSample(uTexture, uSampler, coord + offsetB).b;
    let a = textureSample(uTexture, uSampler, coord).a;

    return select(vec4<f32>(r, g, b, a), vec4<f32>(0.0,0.0,0.0,0.0), discarded);
}

const TRANSPARENT: i32 = 0;
const ORIGINAL: i32 = 1;
const LOOP: i32 = 2;
const CLAMP: i32 = 3;
const MIRROR: i32 = 4;`,Pd=Object.defineProperty,Fd=(n,t,e)=>t in n?Pd(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,Pt=(n,t,e)=>(Fd(n,typeof t!="symbol"?t+"":t,e),e);const zd=class Jo extends D{constructor(t){t={...Jo.defaults,...t};const e=B.from({vertex:{source:W,entryPoint:"mainVertex"},fragment:{source:Td,entryPoint:"mainFragment"}}),r=L.from({vertex:V,fragment:Ad,name:"glitch-filter"}),i=document.createElement("canvas");i.width=4,i.height=t.sampleSize??512;const s=new k({source:new te({resource:i})});super({gpuProgram:e,glProgram:r,resources:{glitchUniforms:{uSeed:{value:(t==null?void 0:t.seed)??0,type:"f32"},uDimensions:{value:new Float32Array(2),type:"vec2<f32>"},uAspect:{value:1,type:"f32"},uFillMode:{value:(t==null?void 0:t.fillMode)??0,type:"f32"},uOffset:{value:(t==null?void 0:t.offset)??100,type:"f32"},uDirection:{value:(t==null?void 0:t.direction)??0,type:"f32"},uRed:{value:t.red,type:"vec2<f32>"},uGreen:{value:t.green,type:"vec2<f32>"},uBlue:{value:t.blue,type:"vec2<f32>"}},uDisplacementMap:s.source,uDisplacementSampler:s.source.style}}),Pt(this,"uniforms"),Pt(this,"average",!1),Pt(this,"minSize",8),Pt(this,"sampleSize",512),Pt(this,"_canvas"),Pt(this,"texture"),Pt(this,"_slices",0),Pt(this,"_sizes",new Float32Array(1)),Pt(this,"_offsets",new Float32Array(1)),this.uniforms=this.resources.glitchUniforms.uniforms,this._canvas=i,this.texture=s,Object.assign(this,t)}apply(t,e,r,i){const{width:s,height:o}=e.frame;this.uniforms.uDimensions[0]=s,this.uniforms.uDimensions[1]=o,this.uniforms.uAspect=o/s,t.applyFilter(this,e,r,i)}_randomizeSizes(){const t=this._sizes,e=this._slices-1,r=this.sampleSize,i=Math.min(this.minSize/r,.9/this._slices);if(this.average){const s=this._slices;let o=1;for(let a=0;a<e;a++){const l=o/(s-a),u=Math.max(l*(1-Math.random()*.6),i);t[a]=u,o-=u}t[e]=o}else{let s=1;const o=Math.sqrt(1/this._slices);for(let a=0;a<e;a++){const l=Math.max(o*s*Math.random(),i);t[a]=l,s-=l}t[e]=s}this.shuffle()}shuffle(){const t=this._sizes,e=this._slices-1;for(let r=e;r>0;r--){const i=Math.random()*r>>0,s=t[r];t[r]=t[i],t[i]=s}}_randomizeOffsets(){for(let t=0;t<this._slices;t++)this._offsets[t]=Math.random()*(Math.random()<.5?-1:1)}refresh(){this._randomizeSizes(),this._randomizeOffsets(),this.redraw()}redraw(){const t=this.sampleSize,e=this.texture,r=this._canvas.getContext("2d");r.clearRect(0,0,8,t);let i,s=0;for(let o=0;o<this._slices;o++){i=Math.floor(this._offsets[o]*256);const a=this._sizes[o]*t,l=i>0?i:0,u=i<0?-i:0;r.fillStyle=`rgba(${l}, ${u}, 0, 1)`,r.fillRect(0,s>>0,t,a+1>>0),s+=a}e.source.update()}set sizes(t){const e=Math.min(this._slices,t.length);for(let r=0;r<e;r++)this._sizes[r]=t[r]}get sizes(){return this._sizes}set offsets(t){const e=Math.min(this._slices,t.length);for(let r=0;r<e;r++)this._offsets[r]=t[r]}get offsets(){return this._offsets}get slices(){return this._slices}set slices(t){this._slices!==t&&(this._slices=t,this._sizes=new Float32Array(t),this._offsets=new Float32Array(t),this.refresh())}get offset(){return this.uniforms.uOffset}set offset(t){this.uniforms.uOffset=t}get seed(){return this.uniforms.uSeed}set seed(t){this.uniforms.uSeed=t}get fillMode(){return this.uniforms.uFillMode}set fillMode(t){this.uniforms.uFillMode=t}get direction(){return this.uniforms.uDirection/de}set direction(t){this.uniforms.uDirection=t*de}get red(){return this.uniforms.uRed}set red(t){Array.isArray(t)&&(t={x:t[0],y:t[1]}),this.uniforms.uRed=t}get green(){return this.uniforms.uGreen}set green(t){Array.isArray(t)&&(t={x:t[0],y:t[1]}),this.uniforms.uGreen=t}get blue(){return this.uniforms.uBlue}set blue(t){Array.isArray(t)&&(t={x:t[0],y:t[1]}),this.uniforms.uBlue=t}destroy(){var t;(t=this.texture)==null||t.destroy(!0),this.texture=this._canvas=this.red=this.green=this.blue=this._sizes=this._offsets=null}};Pt(zd,"defaults",{slices:5,offset:100,direction:0,fillMode:0,average:!1,seed:0,red:{x:0,y:0},green:{x:0,y:0},blue:{x:0,y:0},minSize:8,sampleSize:512});var Md=`precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform vec2 uStrength;
uniform vec3 uColor;
uniform float uKnockout;
uniform float uAlpha;

uniform vec4 uInputSize;
uniform vec4 uInputClamp;

const float PI = 3.14159265358979323846264;

// Hard-assignment of DIST and ANGLE_STEP_SIZE instead of using uDistance and uQuality to allow them to be use on GLSL loop conditions
const float DIST = __DIST__;
const float ANGLE_STEP_SIZE = min(__ANGLE_STEP_SIZE__, PI * 2.);
const float ANGLE_STEP_NUM = ceil(PI * 2. / ANGLE_STEP_SIZE);
const float MAX_TOTAL_ALPHA = ANGLE_STEP_NUM * DIST * (DIST + 1.) / 2.;

void main(void) {
    vec2 px = vec2(1.) / uInputSize.xy;

    float totalAlpha = 0.;

    vec2 direction;
    vec2 displaced;
    vec4 curColor;

    for (float angle = 0.; angle < PI * 2.; angle += ANGLE_STEP_SIZE) {
      direction = vec2(cos(angle), sin(angle)) * px;

      for (float curDistance = 0.; curDistance < DIST; curDistance++) {
          displaced = clamp(vTextureCoord + direction * (curDistance + 1.), uInputClamp.xy, uInputClamp.zw);
          curColor = texture(uTexture, displaced);
          totalAlpha += (DIST - curDistance) * curColor.a;
      }
    }
    
    curColor = texture(uTexture, vTextureCoord);

    vec4 glowColor = vec4(uColor, uAlpha);
    bool knockout = uKnockout > .5;
    float innerStrength = uStrength[0];
    float outerStrength = uStrength[1];

    float alphaRatio = totalAlpha / MAX_TOTAL_ALPHA;
    float innerGlowAlpha = (1. - alphaRatio) * innerStrength * curColor.a * uAlpha;
    float innerGlowStrength = min(1., innerGlowAlpha);
    
    vec4 innerColor = mix(curColor, glowColor, innerGlowStrength);
    float outerGlowAlpha = alphaRatio * outerStrength * (1. - curColor.a) * uAlpha;
    float outerGlowStrength = min(1. - innerColor.a, outerGlowAlpha);
    vec4 outerGlowColor = outerGlowStrength * glowColor.rgba;

    if (knockout) {
      float resultAlpha = outerGlowAlpha + innerGlowAlpha;
      finalColor = vec4(glowColor.rgb * resultAlpha, resultAlpha);
    }
    else {
      finalColor = innerColor + outerGlowColor;
    }
}
`,Id=`struct GlowUniforms {
  uDistance: f32,
  uStrength: vec2<f32>,
  uColor: vec3<f32>,
  uAlpha: f32,
  uQuality: f32,
  uKnockout: f32,
};

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> glowUniforms : GlowUniforms;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  let quality = glowUniforms.uQuality;
  let distance = glowUniforms.uDistance;

  let dist: f32 = glowUniforms.uDistance;
  let angleStepSize: f32 = min(1. / quality / distance, PI * 2.0);
  let angleStepNum: f32 = ceil(PI * 2.0 / angleStepSize);

  let px: vec2<f32> = vec2<f32>(1.0 / gfu.uInputSize.xy);

  var totalAlpha: f32 = 0.0;

  var direction: vec2<f32>;
  var displaced: vec2<f32>;
  var curColor: vec4<f32>;

  for (var angle = 0.0; angle < PI * 2.0; angle += angleStepSize) {
    direction = vec2<f32>(cos(angle), sin(angle)) * px;
    for (var curDistance = 0.0; curDistance < dist; curDistance+=1) {
      displaced = vec2<f32>(clamp(uv + direction * (curDistance + 1.0), gfu.uInputClamp.xy, gfu.uInputClamp.zw));
      curColor = textureSample(uTexture, uSampler, displaced);
      totalAlpha += (dist - curDistance) * curColor.a;
    }
  }
    
  curColor = textureSample(uTexture, uSampler, uv);

  let glowColorRGB = glowUniforms.uColor;
  let glowAlpha = glowUniforms.uAlpha;
  let glowColor = vec4<f32>(glowColorRGB, glowAlpha);
  let knockout: bool = glowUniforms.uKnockout > 0.5;
  let innerStrength = glowUniforms.uStrength[0];
  let outerStrength = glowUniforms.uStrength[1];

  let alphaRatio: f32 = (totalAlpha / (angleStepNum * dist * (dist + 1.0) / 2.0));
  let innerGlowAlpha: f32 = (1.0 - alphaRatio) * innerStrength * curColor.a * glowAlpha;
  let innerGlowStrength: f32 = min(1.0, innerGlowAlpha);
  
  let innerColor: vec4<f32> = mix(curColor, glowColor, innerGlowStrength);
  let outerGlowAlpha: f32 = alphaRatio * outerStrength * (1. - curColor.a) * glowAlpha;
  let outerGlowStrength: f32 = min(1.0 - innerColor.a, outerGlowAlpha);
  let outerGlowColor: vec4<f32> = outerGlowStrength * glowColor.rgba;
  
  if (knockout) {
    let resultAlpha: f32 = outerGlowAlpha + innerGlowAlpha;
    return vec4<f32>(glowColor.rgb * resultAlpha, resultAlpha);
  }
  else {
    return innerColor + outerGlowColor;
  }
}

const PI: f32 = 3.14159265358979323846264;`,Od=Object.defineProperty,Rd=(n,t,e)=>t in n?Od(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,Er=(n,t,e)=>(Rd(n,typeof t!="symbol"?t+"":t,e),e);const Ed=class ta extends D{constructor(t){t={...ta.DEFAULT_OPTIONS,...t};const e=t.distance??10,r=t.quality??.1,i=B.from({vertex:{source:W,entryPoint:"mainVertex"},fragment:{source:Id,entryPoint:"mainFragment"}}),s=L.from({vertex:V,fragment:Md.replace(/__ANGLE_STEP_SIZE__/gi,`${(1/r/e).toFixed(7)}`).replace(/__DIST__/gi,`${e.toFixed(0)}.0`),name:"glow-filter"});super({gpuProgram:i,glProgram:s,resources:{glowUniforms:{uDistance:{value:e,type:"f32"},uStrength:{value:[t.innerStrength,t.outerStrength],type:"vec2<f32>"},uColor:{value:new Float32Array(3),type:"vec3<f32>"},uAlpha:{value:t.alpha,type:"f32"},uQuality:{value:r,type:"f32"},uKnockout:{value:(t==null?void 0:t.knockout)??!1?1:0,type:"f32"}}},padding:e}),Er(this,"uniforms"),Er(this,"_color"),this.uniforms=this.resources.glowUniforms.uniforms,this._color=new G,this.color=t.color??16777215}get distance(){return this.uniforms.uDistance}set distance(t){this.uniforms.uDistance=this.padding=t}get innerStrength(){return this.uniforms.uStrength[0]}set innerStrength(t){this.uniforms.uStrength[0]=t}get outerStrength(){return this.uniforms.uStrength[1]}set outerStrength(t){this.uniforms.uStrength[1]=t}get color(){return this._color.value}set color(t){this._color.setValue(t);const[e,r,i]=this._color.toArray();this.uniforms.uColor[0]=e,this.uniforms.uColor[1]=r,this.uniforms.uColor[2]=i}get alpha(){return this.uniforms.uAlpha}set alpha(t){this.uniforms.uAlpha=t}get quality(){return this.uniforms.uQuality}set quality(t){this.uniforms.uQuality=t}get knockout(){return this.uniforms.uKnockout===1}set knockout(t){this.uniforms.uKnockout=t?1:0}};Er(Ed,"DEFAULT_OPTIONS",{distance:10,outerStrength:4,innerStrength:0,color:16777215,alpha:1,quality:.1,knockout:!1});var Ud=`precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform vec2 uDimensions;
uniform float uParallel;
uniform vec2 uLight;
uniform float uAspect;
uniform float uTime;
uniform vec3 uRay;

uniform vec4 uInputSize;

\${PERLIN}

void main(void) {
    vec2 uDimensions = uDimensions;
    bool uParallel = uParallel > 0.5;
    vec2 uLight = uLight;
    float uAspect = uAspect;

    vec2 coord = vTextureCoord * uInputSize.xy / uDimensions;

    float d;

    if (uParallel) {
        float _cos = uLight.x;
        float _sin = uLight.y;
        d = (_cos * coord.x) + (_sin * coord.y * uAspect);
    } else {
        float dx = coord.x - uLight.x / uDimensions.x;
        float dy = (coord.y - uLight.y / uDimensions.y) * uAspect;
        float dis = sqrt(dx * dx + dy * dy) + 0.00001;
        d = dy / dis;
    }

    float uTime = uTime;
    vec3 uRay = uRay;

    float gain = uRay[0];
    float lacunarity = uRay[1];
    float alpha = uRay[2];

    vec3 dir = vec3(d, d, 0.0);
    float noise = turb(dir + vec3(uTime, 0.0, 62.1 + uTime) * 0.05, vec3(480.0, 320.0, 480.0), lacunarity, gain);
    noise = mix(noise, 0.0, 0.3);
    //fade vertically.
    vec4 mist = vec4(vec3(noise), 1.0) * (1.0 - coord.y);
    mist.a = 1.0;
    // apply user alpha
    mist *= alpha;

    finalColor = texture(uTexture, vTextureCoord) + mist;
}
`,kd=`struct GodrayUniforms {
  uLight: vec2<f32>,
  uParallel: f32,
  uAspect: f32,
  uTime: f32,
  uRay: vec3<f32>,
  uDimensions: vec2<f32>,
};

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> godrayUniforms : GodrayUniforms;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  let uDimensions: vec2<f32> = godrayUniforms.uDimensions;
  let uParallel: bool = godrayUniforms.uParallel > 0.5;
  let uLight: vec2<f32> = godrayUniforms.uLight;
  let uAspect: f32 = godrayUniforms.uAspect;

  let coord: vec2<f32> = uv * gfu.uInputSize.xy / uDimensions;

  var d: f32;

  if (uParallel) {
    let _cos: f32 = uLight.x;
    let _sin: f32 = uLight.y;
    d = (_cos * coord.x) + (_sin * coord.y * uAspect);
  } else {
    let dx: f32 = coord.x - uLight.x / uDimensions.x;
    let dy: f32 = (coord.y - uLight.y / uDimensions.y) * uAspect;
    let dis: f32 = sqrt(dx * dx + dy * dy) + 0.00001;
    d = dy / dis;
  }

  let uTime: f32 = godrayUniforms.uTime;
  let uRay: vec3<f32> = godrayUniforms.uRay;
  
  let gain = uRay[0];
  let lacunarity = uRay[1];
  let alpha = uRay[2];

  let dir: vec3<f32> = vec3<f32>(d, d, 0.0);
  var noise: f32 = turb(dir + vec3<f32>(uTime, 0.0, 62.1 + uTime) * 0.05, vec3<f32>(480.0, 320.0, 480.0), lacunarity, gain);
  noise = mix(noise, 0.0, 0.3);
  //fade vertically.
  var mist: vec4<f32> = vec4<f32>(vec3<f32>(noise), 1.0) * (1.0 - coord.y);
  mist.a = 1.0;
  // apply user alpha
  mist *= alpha;
  return textureSample(uTexture, uSampler, uv) + mist;
}

\${PERLIN}`,Bd=`vec3 mod289(vec3 x)
{
    return x - floor(x * (1.0 / 289.0)) * 289.0;
}
vec4 mod289(vec4 x)
{
    return x - floor(x * (1.0 / 289.0)) * 289.0;
}
vec4 permute(vec4 x)
{
    return mod289(((x * 34.0) + 1.0) * x);
}
vec4 taylorInvSqrt(vec4 r)
{
    return 1.79284291400159 - 0.85373472095314 * r;
}
vec3 fade(vec3 t)
{
    return t * t * t * (t * (t * 6.0 - 15.0) + 10.0);
}
// Classic Perlin noise, periodic variant
float pnoise(vec3 P, vec3 rep)
{
    vec3 Pi0 = mod(floor(P), rep); // Integer part, modulo period
    vec3 Pi1 = mod(Pi0 + vec3(1.0), rep); // Integer part + 1, mod period
    Pi0 = mod289(Pi0);
    Pi1 = mod289(Pi1);
    vec3 Pf0 = fract(P); // Fractional part for interpolation
    vec3 Pf1 = Pf0 - vec3(1.0); // Fractional part - 1.0
    vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
    vec4 iy = vec4(Pi0.yy, Pi1.yy);
    vec4 iz0 = Pi0.zzzz;
    vec4 iz1 = Pi1.zzzz;
    vec4 ixy = permute(permute(ix) + iy);
    vec4 ixy0 = permute(ixy + iz0);
    vec4 ixy1 = permute(ixy + iz1);
    vec4 gx0 = ixy0 * (1.0 / 7.0);
    vec4 gy0 = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;
    gx0 = fract(gx0);
    vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);
    vec4 sz0 = step(gz0, vec4(0.0));
    gx0 -= sz0 * (step(0.0, gx0) - 0.5);
    gy0 -= sz0 * (step(0.0, gy0) - 0.5);
    vec4 gx1 = ixy1 * (1.0 / 7.0);
    vec4 gy1 = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;
    gx1 = fract(gx1);
    vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);
    vec4 sz1 = step(gz1, vec4(0.0));
    gx1 -= sz1 * (step(0.0, gx1) - 0.5);
    gy1 -= sz1 * (step(0.0, gy1) - 0.5);
    vec3 g000 = vec3(gx0.x, gy0.x, gz0.x);
    vec3 g100 = vec3(gx0.y, gy0.y, gz0.y);
    vec3 g010 = vec3(gx0.z, gy0.z, gz0.z);
    vec3 g110 = vec3(gx0.w, gy0.w, gz0.w);
    vec3 g001 = vec3(gx1.x, gy1.x, gz1.x);
    vec3 g101 = vec3(gx1.y, gy1.y, gz1.y);
    vec3 g011 = vec3(gx1.z, gy1.z, gz1.z);
    vec3 g111 = vec3(gx1.w, gy1.w, gz1.w);
    vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));
    g000 *= norm0.x;
    g010 *= norm0.y;
    g100 *= norm0.z;
    g110 *= norm0.w;
    vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));
    g001 *= norm1.x;
    g011 *= norm1.y;
    g101 *= norm1.z;
    g111 *= norm1.w;
    float n000 = dot(g000, Pf0);
    float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));
    float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));
    float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));
    float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));
    float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));
    float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));
    float n111 = dot(g111, Pf1);
    vec3 fade_xyz = fade(Pf0);
    vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);
    vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);
    float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x);
    return 2.2 * n_xyz;
}
float turb(vec3 P, vec3 rep, float lacunarity, float gain)
{
    float sum = 0.0;
    float sc = 1.0;
    float totalgain = 1.0;
    for (float i = 0.0; i < 6.0; i++)
    {
        sum += totalgain * pnoise(P * sc, rep);
        sc *= lacunarity;
        totalgain *= gain;
    }
    return abs(sum);
}
`,Ld=`// Taken from https://gist.github.com/munrocket/236ed5ba7e409b8bdf1ff6eca5dcdc39

fn moduloVec3(x: vec3<f32>, y: vec3<f32>) -> vec3<f32>
{
  return x - y * floor(x/y);
}
fn mod289Vec3(x: vec3<f32>) -> vec3<f32>
{
    return x - floor(x * (1.0 / 289.0)) * 289.0;
}
fn mod289Vec4(x: vec4<f32>) -> vec4<f32>
{
    return x - floor(x * (1.0 / 289.0)) * 289.0;
}
fn permute4(x: vec4<f32>) -> vec4<f32>
{
    return mod289Vec4(((x * 34.0) + 1.0) * x);
}
fn taylorInvSqrt(r: vec4<f32>) -> vec4<f32>
{
    return 1.79284291400159 - 0.85373472095314 * r;
}
fn fade3(t: vec3<f32>) -> vec3<f32>
{
    return t * t * t * (t * (t * 6.0 - 15.0) + 10.0);
}
fn fade2(t: vec2<f32>) -> vec2<f32> { return t * t * t * (t * (t * 6. - 15.) + 10.); }

fn perlinNoise2(P: vec2<f32>) -> f32 {
  var Pi: vec4<f32> = floor(P.xyxy) + vec4<f32>(0., 0., 1., 1.);
  let Pf = fract(P.xyxy) - vec4<f32>(0., 0., 1., 1.);
  Pi = Pi % vec4<f32>(289.); // To avoid truncation effects in permutation
  let ix = Pi.xzxz;
  let iy = Pi.yyww;
  let fx = Pf.xzxz;
  let fy = Pf.yyww;
  let i = permute4(permute4(ix) + iy);
  var gx: vec4<f32> = 2. * fract(i * 0.0243902439) - 1.; // 1/41 = 0.024...
  let gy = abs(gx) - 0.5;
  let tx = floor(gx + 0.5);
  gx = gx - tx;
  var g00: vec2<f32> = vec2<f32>(gx.x, gy.x);
  var g10: vec2<f32> = vec2<f32>(gx.y, gy.y);
  var g01: vec2<f32> = vec2<f32>(gx.z, gy.z);
  var g11: vec2<f32> = vec2<f32>(gx.w, gy.w);
  let norm = 1.79284291400159 - 0.85373472095314 *
      vec4<f32>(dot(g00, g00), dot(g01, g01), dot(g10, g10), dot(g11, g11));
  g00 = g00 * norm.x;
  g01 = g01 * norm.y;
  g10 = g10 * norm.z;
  g11 = g11 * norm.w;
  let n00 = dot(g00, vec2<f32>(fx.x, fy.x));
  let n10 = dot(g10, vec2<f32>(fx.y, fy.y));
  let n01 = dot(g01, vec2<f32>(fx.z, fy.z));
  let n11 = dot(g11, vec2<f32>(fx.w, fy.w));
  let fade_xy = fade2(Pf.xy);
  let n_x = mix(vec2<f32>(n00, n01), vec2<f32>(n10, n11), vec2<f32>(fade_xy.x));
  let n_xy = mix(n_x.x, n_x.y, fade_xy.y);
  return 2.3 * n_xy;
}

// Classic Perlin noise, periodic variant
fn perlinNoise3(P: vec3<f32>, rep: vec3<f32>) -> f32
{
    var Pi0: vec3<f32> = moduloVec3(floor(P), rep); // Integer part, modulo period
    var Pi1: vec3<f32> = moduloVec3(Pi0 + vec3<f32>(1.0), rep); // Integer part + 1, mod period
    Pi0 = mod289Vec3(Pi0);
    Pi1 = mod289Vec3(Pi1);
    let Pf0: vec3<f32> = fract(P); // Fractional part for interpolation
    let Pf1: vec3<f32> = Pf0 - vec3<f32>(1.0); // Fractional part - 1.0
    let ix: vec4<f32> = vec4<f32>(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
    let iy: vec4<f32> = vec4<f32>(Pi0.yy, Pi1.yy);
    let iz0: vec4<f32> = Pi0.zzzz;
    let iz1: vec4<f32> = Pi1.zzzz;
    let ixy: vec4<f32> = permute4(permute4(ix) + iy);
    let ixy0: vec4<f32> = permute4(ixy + iz0);
    let ixy1: vec4<f32> = permute4(ixy + iz1);
    var gx0: vec4<f32> = ixy0 * (1.0 / 7.0);
    var gy0: vec4<f32> = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;
    gx0 = fract(gx0);
    let gz0: vec4<f32> = vec4<f32>(0.5) - abs(gx0) - abs(gy0);
    let sz0: vec4<f32> = step(gz0, vec4<f32>(0.0));
    gx0 -= sz0 * (step(vec4<f32>(0.0), gx0) - 0.5);
    gy0 -= sz0 * (step(vec4<f32>(0.0), gy0) - 0.5);
    var gx1: vec4<f32> = ixy1 * (1.0 / 7.0);
    var gy1: vec4<f32> = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;
    gx1 = fract(gx1);
    let gz1: vec4<f32> = vec4<f32>(0.5) - abs(gx1) - abs(gy1);
    let sz1: vec4<f32> = step(gz1, vec4<f32>(0.0));
    gx1 -= sz1 * (step(vec4<f32>(0.0), gx1) - 0.5);
    gy1 -= sz1 * (step(vec4<f32>(0.0), gy1) - 0.5);
    var g000: vec3<f32> = vec3<f32>(gx0.x, gy0.x, gz0.x);
    var g100: vec3<f32> = vec3<f32>(gx0.y, gy0.y, gz0.y);
    var g010: vec3<f32> = vec3<f32>(gx0.z, gy0.z, gz0.z);
    var g110: vec3<f32> = vec3<f32>(gx0.w, gy0.w, gz0.w);
    var g001: vec3<f32> = vec3<f32>(gx1.x, gy1.x, gz1.x);
    var g101: vec3<f32> = vec3<f32>(gx1.y, gy1.y, gz1.y);
    var g011: vec3<f32> = vec3<f32>(gx1.z, gy1.z, gz1.z);
    var g111: vec3<f32> = vec3<f32>(gx1.w, gy1.w, gz1.w);
    let norm0: vec4<f32> = taylorInvSqrt(vec4<f32>(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));
    g000 *= norm0.x;
    g010 *= norm0.y;
    g100 *= norm0.z;
    g110 *= norm0.w;
    let norm1: vec4<f32> = taylorInvSqrt(vec4<f32>(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));
    g001 *= norm1.x;
    g011 *= norm1.y;
    g101 *= norm1.z;
    g111 *= norm1.w;
    let n000: f32 = dot(g000, Pf0);
    let n100: f32 = dot(g100, vec3<f32>(Pf1.x, Pf0.yz));
    let n010: f32 = dot(g010, vec3<f32>(Pf0.x, Pf1.y, Pf0.z));
    let n110: f32 = dot(g110, vec3<f32>(Pf1.xy, Pf0.z));
    let n001: f32 = dot(g001, vec3<f32>(Pf0.xy, Pf1.z));
    let n101: f32 = dot(g101, vec3<f32>(Pf1.x, Pf0.y, Pf1.z));
    let n011: f32 = dot(g011, vec3<f32>(Pf0.x, Pf1.yz));
    let n111: f32 = dot(g111, Pf1);
    let fade_xyz: vec3<f32> = fade3(Pf0);
    let n_z: vec4<f32> = mix(vec4<f32>(n000, n100, n010, n110), vec4<f32>(n001, n101, n011, n111), fade_xyz.z);
    let n_yz: vec2<f32> = mix(n_z.xy, n_z.zw, fade_xyz.y);
    let n_xyz: f32 = mix(n_yz.x, n_yz.y, fade_xyz.x);
    return 2.2 * n_xyz;
}
fn turb(P: vec3<f32>, rep: vec3<f32>, lacunarity: f32, gain: f32) -> f32
{
    var sum: f32 = 0.0;
    var sc: f32 = 1.0;
    var totalgain: f32 = 1.0;
    for (var i = 0.0; i < 6.0; i += 1)
    {
        sum += totalgain * perlinNoise3(P * sc, rep);
        sc *= lacunarity;
        totalgain *= gain;
    }
    return abs(sum);
}`,Dd=Object.defineProperty,Gd=(n,t,e)=>t in n?Dd(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,le=(n,t,e)=>(Gd(n,typeof t!="symbol"?t+"":t,e),e);const Nd=class ea extends D{constructor(t){t={...ea.DEFAULT_OPTIONS,...t};const e=B.from({vertex:{source:W,entryPoint:"mainVertex"},fragment:{source:kd.replace("${PERLIN}",Ld),entryPoint:"mainFragment"}}),r=L.from({vertex:V,fragment:Ud.replace("${PERLIN}",Bd),name:"god-ray-filter"});super({gpuProgram:e,glProgram:r,resources:{godrayUniforms:{uLight:{value:new Float32Array(2),type:"vec2<f32>"},uParallel:{value:0,type:"f32"},uAspect:{value:0,type:"f32"},uTime:{value:t.time,type:"f32"},uRay:{value:new Float32Array(3),type:"vec3<f32>"},uDimensions:{value:new Float32Array(2),type:"vec2<f32>"}}}}),le(this,"uniforms"),le(this,"time",0),le(this,"_angleLight",[0,0]),le(this,"_angle",0),le(this,"_center"),this.uniforms=this.resources.godrayUniforms.uniforms,Object.assign(this,t)}apply(t,e,r,i){const s=e.frame.width,o=e.frame.height;this.uniforms.uLight[0]=this.parallel?this._angleLight[0]:this._center.x,this.uniforms.uLight[1]=this.parallel?this._angleLight[1]:this._center.y,this.uniforms.uDimensions[0]=s,this.uniforms.uDimensions[1]=o,this.uniforms.uAspect=o/s,this.uniforms.uTime=this.time,t.applyFilter(this,e,r,i)}get angle(){return this._angle}set angle(t){this._angle=t;const e=t*de;this._angleLight[0]=Math.cos(e),this._angleLight[1]=Math.sin(e)}get parallel(){return this.uniforms.uParallel>.5}set parallel(t){this.uniforms.uParallel=t?1:0}get center(){return this._center}set center(t){Array.isArray(t)&&(t={x:t[0],y:t[1]}),this._center=t}get centerX(){return this.center.x}set centerX(t){this.center.x=t}get centerY(){return this.center.y}set centerY(t){this.center.y=t}get gain(){return this.uniforms.uRay[0]}set gain(t){this.uniforms.uRay[0]=t}get lacunarity(){return this.uniforms.uRay[1]}set lacunarity(t){this.uniforms.uRay[1]=t}get alpha(){return this.uniforms.uRay[2]}set alpha(t){this.uniforms.uRay[2]=t}};le(Nd,"DEFAULT_OPTIONS",{angle:30,gain:.5,lacunarity:2.5,parallel:!0,time:0,center:{x:0,y:0},alpha:1});var $d=`in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform vec3 uHsl;
uniform float uAlpha;
uniform float uColorize;

// https://en.wikipedia.org/wiki/Luma_(video)
const vec3 weight = vec3(0.299, 0.587, 0.114);

float getWeightedAverage(vec3 rgb) {
    return rgb.r * weight.r + rgb.g * weight.g + rgb.b * weight.b;
}

// https://gist.github.com/mairod/a75e7b44f68110e1576d77419d608786?permalink_comment_id=3195243#gistcomment-3195243
const vec3 k = vec3(0.57735, 0.57735, 0.57735);

vec3 hueShift(vec3 color, float angle) {
    float cosAngle = cos(angle);
    return vec3(
    color * cosAngle +
    cross(k, color) * sin(angle) +
    k * dot(k, color) * (1.0 - cosAngle)
    );
}

void main()
{
    vec4 color = texture(uTexture, vTextureCoord);
    vec3 resultRGB = color.rgb;

    float hue = uHsl[0];
    float saturation = uHsl[1];
    float lightness = uHsl[2];

    // colorize
    if (uColorize > 0.5) {
        resultRGB = vec3(getWeightedAverage(resultRGB), 0., 0.);
    }

    // hue
    resultRGB = hueShift(resultRGB, hue);

    // saturation
    // https://github.com/evanw/glfx.js/blob/master/src/filters/adjust/huesaturation.js
    float average = (resultRGB.r + resultRGB.g + resultRGB.b) / 3.0;

    if (saturation > 0.) {
        resultRGB += (average - resultRGB) * (1. - 1. / (1.001 - saturation));
    } else {
        resultRGB -= (average - resultRGB) * saturation;
    }

    // lightness
    resultRGB = mix(resultRGB, vec3(ceil(lightness)) * color.a, abs(lightness));

    // alpha
    finalColor = mix(color, vec4(resultRGB, color.a), uAlpha);
}
`,Vd=`struct HslUniforms {
  uHsl:vec3<f32>,
  uColorize:f32,
  uAlpha:f32,
};

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> hslUniforms : HslUniforms;

@fragment
fn mainFragment(
  @location(0) uv: vec2<f32>,
  @builtin(position) position: vec4<f32>
) -> @location(0) vec4<f32> {
    let color: vec4<f32> = textureSample(uTexture, uSampler, uv);
    var resultRGB: vec3<f32> = color.rgb;

    let hue: f32 = hslUniforms.uHsl[0];
    let saturation: f32 = hslUniforms.uHsl[1];
    let lightness: f32 = hslUniforms.uHsl[2];

    // colorize
    if (hslUniforms.uColorize > 0.5) {
        resultRGB = vec3<f32>(dot(color.rgb, vec3<f32>(0.299, 0.587, 0.114)), 0., 0.);
    }

    // hue
    resultRGB = hueShift(resultRGB, hue);

    // saturation
    // https://github.com/evanw/glfx.js/blob/master/src/filters/adjust/huesaturation.js
    let average: f32 = (resultRGB.r + resultRGB.g + resultRGB.b) / 3.0;

    if (saturation > 0.) {
        resultRGB += (average - resultRGB) * (1. - 1. / (1.001 - saturation));
    } else {
        resultRGB -= (average - resultRGB) * saturation;
    }

    // lightness
    resultRGB = mix(resultRGB, vec3<f32>(ceil(lightness)) * color.a, abs(lightness));

    // alpha
    return mix(color, vec4<f32>(resultRGB, color.a), hslUniforms.uAlpha);
}

// https://gist.github.com/mairod/a75e7b44f68110e1576d77419d608786?permalink_comment_id=3195243#gistcomment-3195243
const k: vec3<f32> = vec3(0.57735, 0.57735, 0.57735);

fn hueShift(color: vec3<f32>, angle: f32) -> vec3<f32> 
{
    let cosAngle: f32 = cos(angle);
    return vec3<f32>(
    color * cosAngle +
    cross(k, color) * sin(angle) +
    k * dot(k, color) * (1.0 - cosAngle)
    );
}`,Wd=Object.defineProperty,Xd=(n,t,e)=>t in n?Wd(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,Ur=(n,t,e)=>(Xd(n,typeof t!="symbol"?t+"":t,e),e);const Yd=class na extends D{constructor(t){t={...na.DEFAULT_OPTIONS,...t};const e=B.from({vertex:{source:W,entryPoint:"mainVertex"},fragment:{source:Vd,entryPoint:"mainFragment"}}),r=L.from({vertex:V,fragment:$d,name:"hsl-adjustment-filter"});super({gpuProgram:e,glProgram:r,resources:{hslUniforms:{uHsl:{value:new Float32Array(3),type:"vec3<f32>"},uColorize:{value:t.colorize?1:0,type:"f32"},uAlpha:{value:t.alpha,type:"f32"}}}}),Ur(this,"uniforms"),Ur(this,"_hue"),this.uniforms=this.resources.hslUniforms.uniforms,this.hue=t.hue}get hue(){return this._hue}set hue(t){this._hue=t,this.resources.hslUniforms.uniforms.uHsl[0]=t*(Math.PI/180)}get saturation(){return this.resources.hslUniforms.uniforms.uHsl[1]}set saturation(t){this.resources.hslUniforms.uniforms.uHsl[1]=t}get lightness(){return this.resources.hslUniforms.uniforms.uHsl[2]}set lightness(t){this.resources.hslUniforms.uniforms.uHsl[2]=t}get colorize(){return this.resources.hslUniforms.uniforms.uColorize===1}set colorize(t){this.resources.hslUniforms.uniforms.uColorize=t?1:0}get alpha(){return this.resources.hslUniforms.uniforms.uAlpha}set alpha(t){this.resources.hslUniforms.uniforms.uAlpha=t}};Ur(Yd,"DEFAULT_OPTIONS",{hue:0,saturation:0,lightness:0,colorize:!1,alpha:1});var Hd=`precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform vec2 uVelocity;
uniform int uKernelSize;
uniform float uOffset;

uniform vec4 uInputSize;

const int MAX_KERNEL_SIZE = 2048;

// Notice:
// the perfect way:
//    int kernelSize = min(uKernelSize, MAX_KERNELSIZE);
// BUT in real use-case , uKernelSize < MAX_KERNELSIZE almost always.
// So use uKernelSize directly.

void main(void)
{
    vec4 color = texture(uTexture, vTextureCoord);

    if (uKernelSize == 0)
    {
        finalColor = color;
        return;
    }

    vec2 velocity = uVelocity / uInputSize.xy;
    float offset = -uOffset / length(uVelocity) - 0.5;
    int k = uKernelSize - 1;

    for(int i = 0; i < MAX_KERNEL_SIZE - 1; i++) {
        if (i == k) {
            break;
        }
        vec2 bias = velocity * (float(i) / float(k) + offset);
        color += texture(uTexture, vTextureCoord + bias);
    }
    finalColor = color / float(uKernelSize);
}
`,jd=`struct MotionBlurUniforms {
  uVelocity: vec2<f32>,
  uKernelSize: f32,
  uOffset: f32,
};

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> motionBlurUniforms : MotionBlurUniforms;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  let uVelocity = motionBlurUniforms.uVelocity;
  let uKernelSize = motionBlurUniforms.uKernelSize;
  let uOffset = motionBlurUniforms.uOffset;

  let velocity: vec2<f32> = uVelocity / gfu.uInputSize.xy;
  let offset: f32 = -uOffset / length(uVelocity) - 0.5;
  let k: i32 = i32(min(uKernelSize - 1, MAX_KERNEL_SIZE - 1));

  var color: vec4<f32> = textureSample(uTexture, uSampler, uv);

  for(var i: i32 = 0; i < k; i += 1) {
    let bias: vec2<f32> = velocity * (f32(i) / f32(k) + offset);
    color += textureSample(uTexture, uSampler, uv + bias);
  }
  
  return select(color / f32(uKernelSize), textureSample(uTexture, uSampler, uv), uKernelSize == 0);
}

const MAX_KERNEL_SIZE: f32 = 2048;`,qd=Object.defineProperty,Kd=(n,t,e)=>t in n?qd(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,kr=(n,t,e)=>(Kd(n,typeof t!="symbol"?t+"":t,e),e);const Zd=class ra extends D{constructor(...t){let e=t[0]??{};if(Array.isArray(e)||"x"in e&&"y"in e||e instanceof at){I("6.0.0","MotionBlurFilter constructor params are now options object. See params: { velocity, kernelSize, offset }");const s="x"in e?e.x:e[0],o="y"in e?e.y:e[1];e={velocity:{x:s,y:o}},t[1]!==void 0&&(e.kernelSize=t[1]),t[2]!==void 0&&(e.offset=t[2])}e={...ra.DEFAULT_OPTIONS,...e};const r=B.from({vertex:{source:W,entryPoint:"mainVertex"},fragment:{source:jd,entryPoint:"mainFragment"}}),i=L.from({vertex:V,fragment:Hd,name:"motion-blur-filter"});super({gpuProgram:r,glProgram:i,resources:{motionBlurUniforms:{uVelocity:{value:e.velocity,type:"vec2<f32>"},uKernelSize:{value:Math.trunc(e.kernelSize??5),type:"i32"},uOffset:{value:e.offset,type:"f32"}}}}),kr(this,"uniforms"),kr(this,"_kernelSize"),this.uniforms=this.resources.motionBlurUniforms.uniforms,Object.assign(this,e)}get velocity(){return this.uniforms.uVelocity}set velocity(t){Array.isArray(t)&&(t={x:t[0],y:t[1]}),this.uniforms.uVelocity=t,this._updateDirty()}get velocityX(){return this.velocity.x}set velocityX(t){this.velocity.x=t,this._updateDirty()}get velocityY(){return this.velocity.y}set velocityY(t){this.velocity.y=t,this._updateDirty()}get kernelSize(){return this._kernelSize}set kernelSize(t){this._kernelSize=t,this._updateDirty()}get offset(){return this.uniforms.uOffset}set offset(t){this.uniforms.uOffset=t}_updateDirty(){this.padding=(Math.max(Math.abs(this.velocityX),Math.abs(this.velocityY))>>0)+1,this.uniforms.uKernelSize=this.velocityX!==0||this.velocityY!==0?this._kernelSize:0}};kr(Zd,"DEFAULT_OPTIONS",{velocity:{x:0,y:0},kernelSize:5,offset:0});var Qd=`in vec2 vTextureCoord;
out vec4 finalColor;

const int MAX_COLORS = \${MAX_COLORS};

uniform sampler2D uTexture;
uniform vec3 uOriginalColors[MAX_COLORS];
uniform vec3 uTargetColors[MAX_COLORS];
uniform float uTolerance;

void main(void)
{
    finalColor = texture(uTexture, vTextureCoord);

    float alpha = finalColor.a;
    if (alpha < 0.0001)
    {
      return;
    }

    vec3 color = finalColor.rgb / alpha;

    for(int i = 0; i < MAX_COLORS; i++)
    {
      vec3 origColor = uOriginalColors[i];
      if (origColor.r < 0.0)
      {
        break;
      }
      vec3 colorDiff = origColor - color;
      if (length(colorDiff) < uTolerance)
      {
        vec3 targetColor = uTargetColors[i];
        finalColor = vec4((targetColor + colorDiff) * alpha, alpha);
        return;
      }
    }
}
`,Jd=`struct MultiColorReplaceUniforms {
  uOriginalColors: array<vec3<f32>, MAX_COLORS>,
  uTargetColors: array<vec3<f32>, MAX_COLORS>,
  uTolerance:f32,
};

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> multiColorReplaceUniforms : MultiColorReplaceUniforms;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  let uOriginalColors = multiColorReplaceUniforms.uOriginalColors;
  let uTargetColors = multiColorReplaceUniforms.uTargetColors;
  let uTolerance = multiColorReplaceUniforms.uTolerance;

  var color: vec4<f32> = textureSample(uTexture, uSampler, uv);

  let alpha: f32 = color.a;

  if (alpha > 0.0001)
  {
    var modColor: vec3<f32> = vec3<f32>(color.rgb) / alpha;

    for(var i: i32 = 0; i < MAX_COLORS; i += 1)
    {
      let origColor: vec3<f32> = uOriginalColors[i];
      if (origColor.r < 0.0)
      {
        break;
      }
      let colorDiff: vec3<f32> = origColor - modColor;
      
      if (length(colorDiff) < uTolerance)
      {
        let targetColor: vec3<f32> = uTargetColors[i];
        color = vec4((targetColor + colorDiff) * alpha, alpha);
        return color;
      }
    }
  }

  return color;
}

const MAX_COLORS: i32 = \${MAX_COLORS};`,tp=Object.defineProperty,ep=(n,t,e)=>t in n?tp(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,dn=(n,t,e)=>(ep(n,typeof t!="symbol"?t+"":t,e),e);const np=class ia extends D{constructor(...t){let e=t[0]??{};Array.isArray(e)&&(I("6.0.0","MultiColorReplaceFilter constructor params are now options object. See params: { replacements, tolerance, maxColors }"),e={replacements:e},t[1]&&(e.tolerance=t[1]),t[2]&&(e.maxColors=t[2])),e={...ia.DEFAULT_OPTIONS,...e};const r=e.maxColors??e.replacements.length,i=B.from({vertex:{source:W,entryPoint:"mainVertex"},fragment:{source:Jd.replace(/\$\{MAX_COLORS\}/g,r.toFixed(0)),entryPoint:"mainFragment"}}),s=L.from({vertex:V,fragment:Qd.replace(/\$\{MAX_COLORS\}/g,r.toFixed(0)),name:"multi-color-replace-filter"});super({gpuProgram:i,glProgram:s,resources:{multiColorReplaceUniforms:{uOriginalColors:{value:new Float32Array(3*r),type:"vec3<f32>",size:r},uTargetColors:{value:new Float32Array(3*r),type:"vec3<f32>",size:r},uTolerance:{value:e.tolerance,type:"f32"}}}}),dn(this,"uniforms"),dn(this,"_replacements",[]),dn(this,"_maxColors"),this._maxColors=r,this.uniforms=this.resources.multiColorReplaceUniforms.uniforms,this.replacements=e.replacements}set replacements(t){const e=this.uniforms.uOriginalColors,r=this.uniforms.uTargetColors,i=t.length,s=new G;if(i>this._maxColors)throw new Error(`Length of replacements (${i}) exceeds the maximum colors length (${this._maxColors})`);e[i*3]=-1;let o,a,l;for(let u=0;u<i;u++){const c=t[u];s.setValue(c[0]),[o,a,l]=s.toArray(),e[u*3]=o,e[u*3+1]=a,e[u*3+2]=l,s.setValue(c[1]),[o,a,l]=s.toArray(),r[u*3]=o,r[u*3+1]=a,r[u*3+2]=l}this._replacements=t}get replacements(){return this._replacements}refresh(){this.replacements=this._replacements}get maxColors(){return this._maxColors}get tolerance(){return this.uniforms.uTolerance}set tolerance(t){this.uniforms.uTolerance=t}set epsilon(t){I("6.0.0","MultiColorReplaceFilter.epsilon is deprecated, please use MultiColorReplaceFilter.tolerance instead"),this.tolerance=t}get epsilon(){return I("6.0.0","MultiColorReplaceFilter.epsilon is deprecated, please use MultiColorReplaceFilter.tolerance instead"),this.tolerance}};dn(np,"DEFAULT_OPTIONS",{replacements:[[16711680,255]],tolerance:.05,maxColors:void 0});var rp=`precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform float uSepia;
uniform vec2 uNoise;
uniform vec3 uScratch;
uniform vec3 uVignetting;
uniform float uSeed;
uniform vec2 uDimensions;

uniform vec4 uInputSize;

const float SQRT_2 = 1.414213;
const vec3 SEPIA_RGB = vec3(112.0 / 255.0, 66.0 / 255.0, 20.0 / 255.0);

float rand(vec2 co) {
    return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);
}

vec3 Overlay(vec3 src, vec3 dst)
{
    // if (dst <= 0.5) then: 2 * src * dst
    // if (dst > 0.5) then: 1 - 2 * (1 - dst) * (1 - src)
    return vec3((dst.x <= 0.5) ? (2.0 * src.x * dst.x) : (1.0 - 2.0 * (1.0 - dst.x) * (1.0 - src.x)),
                (dst.y <= 0.5) ? (2.0 * src.y * dst.y) : (1.0 - 2.0 * (1.0 - dst.y) * (1.0 - src.y)),
                (dst.z <= 0.5) ? (2.0 * src.z * dst.z) : (1.0 - 2.0 * (1.0 - dst.z) * (1.0 - src.z)));
}


void main()
{
    finalColor = texture(uTexture, vTextureCoord);
    vec3 color = finalColor.rgb;

    if (uSepia > 0.0)
    {
        float gray = (color.x + color.y + color.z) / 3.0;
        vec3 grayscale = vec3(gray);

        color = Overlay(SEPIA_RGB, grayscale);

        color = grayscale + uSepia * (color - grayscale);
    }

    vec2 coord = vTextureCoord * uInputSize.xy / uDimensions.xy;

    float vignette = uVignetting[0];
    float vignetteAlpha = uVignetting[1];
    float vignetteBlur = uVignetting[2];

    if (vignette > 0.0)
    {
        float outter = SQRT_2 - vignette * SQRT_2;
        vec2 dir = vec2(vec2(0.5, 0.5) - coord);
        dir.y *= uDimensions.y / uDimensions.x;
        float darker = clamp((outter - length(dir) * SQRT_2) / ( 0.00001 + vignetteBlur * SQRT_2), 0.0, 1.0);
        color.rgb *= darker + (1.0 - darker) * (1.0 - vignetteAlpha);
    }

    float scratch = uScratch[0];
    float scratchDensity = uScratch[1];
    float scratchWidth = uScratch[2];

    if (scratchDensity > uSeed && scratch != 0.0)
    {
        float phase = uSeed * 256.0;
        float s = mod(floor(phase), 2.0);
        float dist = 1.0 / scratchDensity;
        float d = distance(coord, vec2(uSeed * dist, abs(s - uSeed * dist)));
        if (d < uSeed * 0.6 + 0.4)
        {
            highp float period = scratchDensity * 10.0;

            float xx = coord.x * period + phase;
            float aa = abs(mod(xx, 0.5) * 4.0);
            float bb = mod(floor(xx / 0.5), 2.0);
            float yy = (1.0 - bb) * aa + bb * (2.0 - aa);

            float kk = 2.0 * period;
            float dw = scratchWidth / uDimensions.x * (0.75 + uSeed);
            float dh = dw * kk;

            float tine = (yy - (2.0 - dh));

            if (tine > 0.0) {
                float _sign = sign(scratch);

                tine = s * tine / period + scratch + 0.1;
                tine = clamp(tine + 1.0, 0.5 + _sign * 0.5, 1.5 + _sign * 0.5);

                color.rgb *= tine;
            }
        }
    }

    float noise = uNoise[0];
    float noiseSize = uNoise[1];

    if (noise > 0.0 && noiseSize > 0.0)
    {
        vec2 pixelCoord = vTextureCoord.xy * uInputSize.xy;
        pixelCoord.x = floor(pixelCoord.x / noiseSize);
        pixelCoord.y = floor(pixelCoord.y / noiseSize);
        // vec2 d = pixelCoord * noiseSize * vec2(1024.0 + uSeed * 512.0, 1024.0 - uSeed * 512.0);
        // float _noise = snoise(d) * 0.5;
        float _noise = rand(pixelCoord * noiseSize * uSeed) - 0.5;
        color += _noise * noise;
    }

    finalColor.rgb = color;
}`,ip=`struct OldFilmUniforms {
    uSepia: f32,
    uNoise: vec2<f32>,
    uScratch: vec3<f32>,
    uVignetting: vec3<f32>,
    uSeed: f32,
    uDimensions: vec2<f32>,
};

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> oldFilmUniforms : OldFilmUniforms;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  var color: vec4<f32> = textureSample(uTexture, uSampler, uv);

  if (oldFilmUniforms.uSepia > 0.)
  {
    color = vec4<f32>(sepia(color.rgb), color.a);
  }

  let coord: vec2<f32> = uv * gfu.uInputSize.xy / oldFilmUniforms.uDimensions;

  if (oldFilmUniforms.uVignetting[0] > 0.)
  {
    color *= vec4<f32>(vec3<f32>(vignette(color.rgb, coord)), color.a);
  }

  let uScratch = oldFilmUniforms.uScratch; 

  if (uScratch[1] > oldFilmUniforms.uSeed && uScratch[0] != 0.)
  {
    color = vec4<f32>(scratch(color.rgb, coord), color.a);
  }

  let uNoise = oldFilmUniforms.uNoise;

  if (uNoise[0] > 0.0 && uNoise[1] > 0.0)
  {
    color += vec4<f32>(vec3<f32>(noise(uv)), color.a);
  }

  return color;
}

const SQRT_2: f32 = 1.414213;
const SEPIA_RGB: vec3<f32> = vec3<f32>(112.0 / 255.0, 66.0 / 255.0, 20.0 / 255.0);

fn modulo(x: f32, y: f32) -> f32
{
  return x - y * floor(x/y);
}

fn rand(co: vec2<f32>) -> f32
{
  return fract(sin(dot(co, vec2<f32>(12.9898, 78.233))) * 43758.5453);
}

fn overlay(src: vec3<f32>, dst: vec3<f32>) -> vec3<f32>
{
    // if (dst <= 0.5) then: 2 * src * dst
    // if (dst > 0.5) then: 1 - 2 * (1 - dst) * (1 - src)

    return vec3<f32>(
      select((1.0 - 2.0 * (1.0 - dst.x) * (1.0 - src.x)), (2.0 * src.x * dst.x), (dst.x <= 0.5)), 
      select((1.0 - 2.0 * (1.0 - dst.y) * (1.0 - src.y)), (2.0 * src.y * dst.y), (dst.y <= 0.5)),
      select((1.0 - 2.0 * (1.0 - dst.z) * (1.0 - src.z)), (2.0 * src.z * dst.z), (dst.z <= 0.5))
    );
}

fn sepia(co: vec3<f32>) -> vec3<f32>
{
  let gray: f32 = (co.x + co.y + co.z) / 3.0;
  let grayscale: vec3<f32> = vec3<f32>(gray);
  let color = overlay(SEPIA_RGB, grayscale);
  return grayscale + oldFilmUniforms.uSepia * (color - grayscale);
}

fn vignette(co: vec3<f32>, coord: vec2<f32>) -> f32
{
  let uVignetting = oldFilmUniforms.uVignetting;
  let uDimensions = oldFilmUniforms.uDimensions;
  
  let outter: f32 = SQRT_2 - uVignetting[0] * SQRT_2;
  var dir: vec2<f32> = vec2<f32>(vec2<f32>(0.5) - coord);
  dir.y *= uDimensions.y / uDimensions.x;
  let darker: f32 = clamp((outter - length(dir) * SQRT_2) / ( 0.00001 + uVignetting[2] * SQRT_2), 0.0, 1.0);
  return darker + (1.0 - darker) * (1.0 - uVignetting[1]);
}

fn scratch(co: vec3<f32>, coord: vec2<f32>) -> vec3<f32>
{
  var color = co;
  let uScratch = oldFilmUniforms.uScratch;
  let uSeed = oldFilmUniforms.uSeed;
  let uDimensions = oldFilmUniforms.uDimensions;

  let phase: f32 = uSeed * 256.0;
  let s: f32 = modulo(floor(phase), 2.0);
  let dist: f32 = 1.0 / uScratch[1];
  let d: f32 = distance(coord, vec2<f32>(uSeed * dist, abs(s - uSeed * dist)));

  if (d < uSeed * 0.6 + 0.4)
  {
    let period: f32 = uScratch[1] * 10.0;

    let xx: f32 = coord.x * period + phase;
    let aa: f32 = abs(modulo(xx, 0.5) * 4.0);
    let bb: f32 = modulo(floor(xx / 0.5), 2.0);
    let yy: f32 = (1.0 - bb) * aa + bb * (2.0 - aa);

    let kk: f32 = 2.0 * period;
    let dw: f32 = uScratch[2] / uDimensions.x * (0.75 + uSeed);
    let dh: f32 = dw * kk;

    var tine: f32 = (yy - (2.0 - dh));

    if (tine > 0.0) {
        let _sign: f32 = sign(uScratch[0]);

        tine = s * tine / period + uScratch[0] + 0.1;
        tine = clamp(tine + 1.0, 0.5 + _sign * 0.5, 1.5 + _sign * 0.5);

        color *= tine;
    }
  }

  return color;
}

fn noise(coord: vec2<f32>) -> f32
{
  let uNoise = oldFilmUniforms.uNoise;
  let uSeed = oldFilmUniforms.uSeed;

  var pixelCoord: vec2<f32> = coord * gfu.uInputSize.xy;
  pixelCoord.x = floor(pixelCoord.x / uNoise[1]);
  pixelCoord.y = floor(pixelCoord.y / uNoise[1]);
  return (rand(pixelCoord * uNoise[1] * uSeed) - 0.5) * uNoise[0];
}`,sp=Object.defineProperty,op=(n,t,e)=>t in n?sp(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,Br=(n,t,e)=>(op(n,typeof t!="symbol"?t+"":t,e),e);const ap=class sa extends D{constructor(t){t={...sa.DEFAULT_OPTIONS,...t};const e=B.from({vertex:{source:W,entryPoint:"mainVertex"},fragment:{source:ip,entryPoint:"mainFragment"}}),r=L.from({vertex:V,fragment:rp,name:"old-film-filter"});super({gpuProgram:e,glProgram:r,resources:{oldFilmUniforms:{uSepia:{value:t.sepia,type:"f32"},uNoise:{value:new Float32Array(2),type:"vec2<f32>"},uScratch:{value:new Float32Array(3),type:"vec3<f32>"},uVignetting:{value:new Float32Array(3),type:"vec3<f32>"},uSeed:{value:t.seed,type:"f32"},uDimensions:{value:new Float32Array(2),type:"vec2<f32>"}}}}),Br(this,"uniforms"),Br(this,"seed"),this.uniforms=this.resources.oldFilmUniforms.uniforms,Object.assign(this,t)}apply(t,e,r,i){this.uniforms.uDimensions[0]=e.frame.width,this.uniforms.uDimensions[1]=e.frame.height,this.uniforms.uSeed=this.seed,t.applyFilter(this,e,r,i)}get sepia(){return this.uniforms.uSepia}set sepia(t){this.uniforms.uSepia=t}get noise(){return this.uniforms.uNoise[0]}set noise(t){this.uniforms.uNoise[0]=t}get noiseSize(){return this.uniforms.uNoise[1]}set noiseSize(t){this.uniforms.uNoise[1]=t}get scratch(){return this.uniforms.uScratch[0]}set scratch(t){this.uniforms.uScratch[0]=t}get scratchDensity(){return this.uniforms.uScratch[1]}set scratchDensity(t){this.uniforms.uScratch[1]=t}get scratchWidth(){return this.uniforms.uScratch[2]}set scratchWidth(t){this.uniforms.uScratch[2]=t}get vignetting(){return this.uniforms.uVignetting[0]}set vignetting(t){this.uniforms.uVignetting[0]=t}get vignettingAlpha(){return this.uniforms.uVignetting[1]}set vignettingAlpha(t){this.uniforms.uVignetting[1]=t}get vignettingBlur(){return this.uniforms.uVignetting[2]}set vignettingBlur(t){this.uniforms.uVignetting[2]=t}};Br(ap,"DEFAULT_OPTIONS",{sepia:.3,noise:.3,noiseSize:1,scratch:.5,scratchDensity:.3,scratchWidth:1,vignetting:.3,vignettingAlpha:1,vignettingBlur:.3,seed:0});var lp=`precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform vec2 uThickness;
uniform vec3 uColor;
uniform float uAlpha;
uniform float uKnockout;

uniform vec4 uInputClamp;

const float DOUBLE_PI = 2. * 3.14159265358979323846264;
const float ANGLE_STEP = \${ANGLE_STEP};

float outlineMaxAlphaAtPos(vec2 pos) {
    if (uThickness.x == 0. || uThickness.y == 0.) {
        return 0.;
    }

    vec4 displacedColor;
    vec2 displacedPos;
    float maxAlpha = 0.;

    for (float angle = 0.; angle <= DOUBLE_PI; angle += ANGLE_STEP) {
        displacedPos.x = vTextureCoord.x + uThickness.x * cos(angle);
        displacedPos.y = vTextureCoord.y + uThickness.y * sin(angle);
        displacedColor = texture(uTexture, clamp(displacedPos, uInputClamp.xy, uInputClamp.zw));
        maxAlpha = max(maxAlpha, displacedColor.a);
    }

    return maxAlpha;
}

void main(void) {
    vec4 sourceColor = texture(uTexture, vTextureCoord);
    vec4 contentColor = sourceColor * float(uKnockout < 0.5);
    float outlineAlpha = uAlpha * outlineMaxAlphaAtPos(vTextureCoord.xy) * (1.-sourceColor.a);
    vec4 outlineColor = vec4(vec3(uColor) * outlineAlpha, outlineAlpha);
    finalColor = contentColor + outlineColor;
}
`,up=`struct OutlineUniforms {
  uThickness:vec2<f32>,
  uColor:vec3<f32>,
  uAlpha:f32,
  uAngleStep:f32,
  uKnockout:f32,
};

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> outlineUniforms : OutlineUniforms;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  let sourceColor: vec4<f32> = textureSample(uTexture, uSampler, uv);
  let contentColor: vec4<f32> = sourceColor * (1. - outlineUniforms.uKnockout);
  
  let outlineAlpha: f32 = outlineUniforms.uAlpha * outlineMaxAlphaAtPos(uv) * (1. - sourceColor.a);
  let outlineColor: vec4<f32> = vec4<f32>(vec3<f32>(outlineUniforms.uColor) * outlineAlpha, outlineAlpha);
  
  return contentColor + outlineColor;
}

fn outlineMaxAlphaAtPos(uv: vec2<f32>) -> f32 {
  let thickness = outlineUniforms.uThickness;

  if (thickness.x == 0. || thickness.y == 0.) {
    return 0.;
  }
  
  let angleStep = outlineUniforms.uAngleStep;

  var displacedColor: vec4<f32>;
  var displacedPos: vec2<f32>;

  var maxAlpha: f32 = 0.;
  var displaced: vec2<f32>;
  var curColor: vec4<f32>;

  for (var angle = 0.; angle <= DOUBLE_PI; angle += angleStep)
  {
    displaced.x = uv.x + thickness.x * cos(angle);
    displaced.y = uv.y + thickness.y * sin(angle);
    curColor = textureSample(uTexture, uSampler, clamp(displaced, gfu.uInputClamp.xy, gfu.uInputClamp.zw));
    maxAlpha = max(maxAlpha, curColor.a);
  }

  return maxAlpha;
}

const DOUBLE_PI: f32 = 3.14159265358979323846264 * 2.;`,cp=Object.defineProperty,hp=(n,t,e)=>t in n?cp(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,jt=(n,t,e)=>(hp(n,typeof t!="symbol"?t+"":t,e),e);const ni=class Yt extends D{constructor(...t){let e=t[0]??{};typeof e=="number"&&(I("6.0.0","OutlineFilter constructor params are now options object. See params: { thickness, color, quality, alpha, knockout }"),e={thickness:e},t[1]!==void 0&&(e.color=t[1]),t[2]!==void 0&&(e.quality=t[2]),t[3]!==void 0&&(e.alpha=t[3]),t[4]!==void 0&&(e.knockout=t[4])),e={...Yt.DEFAULT_OPTIONS,...e};const r=e.quality??.1,i=B.from({vertex:{source:W,entryPoint:"mainVertex"},fragment:{source:up,entryPoint:"mainFragment"}}),s=L.from({vertex:V,fragment:lp.replace(/\$\{ANGLE_STEP\}/,Yt.getAngleStep(r).toFixed(7)),name:"outline-filter"});super({gpuProgram:i,glProgram:s,resources:{outlineUniforms:{uThickness:{value:new Float32Array(2),type:"vec2<f32>"},uColor:{value:new Float32Array(3),type:"vec3<f32>"},uAlpha:{value:e.alpha,type:"f32"},uAngleStep:{value:0,type:"f32"},uKnockout:{value:e.knockout?1:0,type:"f32"}}}}),jt(this,"uniforms"),jt(this,"_thickness"),jt(this,"_quality"),jt(this,"_color"),this.uniforms=this.resources.outlineUniforms.uniforms,this.uniforms.uAngleStep=Yt.getAngleStep(r),this._color=new G,this.color=e.color??0,Object.assign(this,e)}apply(t,e,r,i){this.uniforms.uThickness[0]=this.thickness/e.source.width,this.uniforms.uThickness[1]=this.thickness/e.source.height,t.applyFilter(this,e,r,i)}static getAngleStep(t){return parseFloat((Math.PI*2/Math.max(t*Yt.MAX_SAMPLES,Yt.MIN_SAMPLES)).toFixed(7))}get thickness(){return this._thickness}set thickness(t){this._thickness=this.padding=t}get color(){return this._color.value}set color(t){this._color.setValue(t);const[e,r,i]=this._color.toArray();this.uniforms.uColor[0]=e,this.uniforms.uColor[1]=r,this.uniforms.uColor[2]=i}get alpha(){return this.uniforms.uAlpha}set alpha(t){this.uniforms.uAlpha=t}get quality(){return this._quality}set quality(t){this._quality=t,this.uniforms.uAngleStep=Yt.getAngleStep(t)}get knockout(){return this.uniforms.uKnockout===1}set knockout(t){this.uniforms.uKnockout=t?1:0}};jt(ni,"DEFAULT_OPTIONS",{thickness:1,color:0,alpha:1,quality:.1,knockout:!1});jt(ni,"MIN_SAMPLES",1);jt(ni,"MAX_SAMPLES",100);var fp=`precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform float uRadian;
uniform vec2 uCenter;
uniform float uRadius;
uniform int uKernelSize;

uniform vec4 uInputSize;

const int MAX_KERNEL_SIZE = 2048;

void main(void)
{
    vec4 color = texture(uTexture, vTextureCoord);

    if (uKernelSize == 0)
    {
        finalColor = color;
        return;
    }

    float aspect = uInputSize.y / uInputSize.x;
    vec2 center = uCenter.xy / uInputSize.xy;
    float gradient = uRadius / uInputSize.x * 0.3;
    float radius = uRadius / uInputSize.x - gradient * 0.5;
    int k = uKernelSize - 1;

    vec2 coord = vTextureCoord;
    vec2 dir = vec2(center - coord);
    float dist = length(vec2(dir.x, dir.y * aspect));

    float radianStep = uRadian;
    if (radius >= 0.0 && dist > radius) {
        float delta = dist - radius;
        float gap = gradient;
        float scale = 1.0 - abs(delta / gap);
        if (scale <= 0.0) {
            finalColor = color;
            return;
        }
        radianStep *= scale;
    }
    radianStep /= float(k);

    float s = sin(radianStep);
    float c = cos(radianStep);
    mat2 rotationMatrix = mat2(vec2(c, -s), vec2(s, c));

    for(int i = 0; i < MAX_KERNEL_SIZE - 1; i++) {
        if (i == k) {
            break;
        }

        coord -= center;
        coord.y *= aspect;
        coord = rotationMatrix * coord;
        coord.y /= aspect;
        coord += center;

        vec4 sample = texture(uTexture, coord);

        // switch to pre-multiplied alpha to correctly blur transparent images
        // sample.rgb *= sample.a;

        color += sample;
    }

    finalColor = color / float(uKernelSize);
}
`,dp=`struct RadialBlurUniforms {
  uRadian: f32,
  uCenter: vec2<f32>,
  uKernelSize: f32,
  uRadius: f32,
};

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> radialBlurUniforms : RadialBlurUniforms;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  let uRadian = radialBlurUniforms.uRadian;
  let uCenter = radialBlurUniforms.uCenter;
  let uKernelSize = radialBlurUniforms.uKernelSize;
  let uRadius = radialBlurUniforms.uRadius;
  
  var returnColorOnly = false;

  if (uKernelSize == 0)
  {
    returnColorOnly = true;
  }

  let aspect: f32 = gfu.uInputSize.y / gfu.uInputSize.x;
  let center: vec2<f32> = uCenter.xy / gfu.uInputSize.xy;
  let gradient: f32 = uRadius / gfu.uInputSize.x * 0.3;
  let radius: f32 = uRadius / gfu.uInputSize.x - gradient * 0.5;
  let k: i32 = i32(uKernelSize - 1);

  var coord: vec2<f32> = uv;
  let dir: vec2<f32> = vec2<f32>(center - coord);
  let dist: f32 = length(vec2<f32>(dir.x, dir.y * aspect));

  var radianStep: f32 = uRadian;
  
  if (radius >= 0.0 && dist > radius)
  {
    let delta: f32 = dist - radius;
    let gap: f32 = gradient;
    let scale: f32 = 1.0 - abs(delta / gap);
    if (scale <= 0.0) {
      returnColorOnly = true;
    }
    radianStep *= scale;
  }

  radianStep /= f32(k);

  let s: f32 = sin(radianStep);
  let c: f32 = cos(radianStep);
  let rotationMatrix: mat2x2<f32> = mat2x2<f32>(vec2<f32>(c, -s), vec2<f32>(s, c));
  
  var color: vec4<f32> = textureSample(uTexture, uSampler, uv);
  let baseColor = vec4<f32>(color);

  let minK: i32 = min(i32(uKernelSize) - 1, MAX_KERNEL_SIZE - 1);

  for(var i: i32 = 0; i < minK; i += 1) 
  {
    coord -= center;
    coord.y *= aspect;
    coord = rotationMatrix * coord;
    coord.y /= aspect;
    coord += center;
    let sample: vec4<f32> = textureSample(uTexture, uSampler, coord);
    // switch to pre-multiplied alpha to correctly blur transparent images
    // sample.rgb *= sample.a;
    color += sample;
  }

  return select(color / f32(uKernelSize), baseColor, returnColorOnly);
}

const MAX_KERNEL_SIZE: i32 = 2048;`,pp=Object.defineProperty,mp=(n,t,e)=>t in n?pp(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,pn=(n,t,e)=>(mp(n,typeof t!="symbol"?t+"":t,e),e);const gp=class oa extends D{constructor(...t){let e=t[0]??{};if(typeof e=="number"){if(I("6.0.0","RadialBlurFilter constructor params are now options object. See params: { angle, center, kernelSize, radius }"),e={angle:e},t[1]){const s="x"in t[1]?t[1].x:t[1][0],o="y"in t[1]?t[1].y:t[1][1];e.center={x:s,y:o}}t[2]&&(e.kernelSize=t[2]),t[3]&&(e.radius=t[3])}e={...oa.DEFAULT_OPTIONS,...e};const r=B.from({vertex:{source:W,entryPoint:"mainVertex"},fragment:{source:dp,entryPoint:"mainFragment"}}),i=L.from({vertex:V,fragment:fp,name:"radial-blur-filter"});super({gpuProgram:r,glProgram:i,resources:{radialBlurUniforms:{uRadian:{value:0,type:"f32"},uCenter:{value:e.center,type:"vec2<f32>"},uKernelSize:{value:e.kernelSize,type:"i32"},uRadius:{value:e.radius,type:"f32"}}}}),pn(this,"uniforms"),pn(this,"_angle"),pn(this,"_kernelSize"),this.uniforms=this.resources.radialBlurUniforms.uniforms,Object.assign(this,e)}_updateKernelSize(){this.uniforms.uKernelSize=this._angle!==0?this.kernelSize:0}get angle(){return this._angle}set angle(t){this._angle=t,this.uniforms.uRadian=t*Math.PI/180,this._updateKernelSize()}get center(){return this.uniforms.uCenter}set center(t){Array.isArray(t)&&(t={x:t[0],y:t[1]}),this.uniforms.uCenter=t}get centerX(){return this.center.x}set centerX(t){this.center.x=t}get centerY(){return this.center.y}set centerY(t){this.center.y=t}get kernelSize(){return this._kernelSize}set kernelSize(t){this._kernelSize=t,this._updateKernelSize()}get radius(){return this.uniforms.uRadius}set radius(t){this.uniforms.uRadius=t<0||t===1/0?-1:t}};pn(gp,"DEFAULT_OPTIONS",{angle:0,center:{x:0,y:0},kernelSize:5,radius:-1});var xp=`precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform float uMirror;
uniform float uBoundary;
uniform vec2 uAmplitude;
uniform vec2 uWavelength;
uniform vec2 uAlpha;
uniform float uTime;
uniform vec2 uDimensions;

uniform vec4 uInputSize;
uniform vec4 uInputClamp;

float rand(vec2 co) {
    return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);
}

void main(void)
{
    vec2 pixelCoord = vTextureCoord.xy * uInputSize.xy;
    vec2 coord = pixelCoord / uDimensions;

    if (coord.y < uBoundary) {
        finalColor = texture(uTexture, vTextureCoord);
        return;
    }

    float k = (coord.y - uBoundary) / (1. - uBoundary + 0.0001);
    float areaY = uBoundary * uDimensions.y / uInputSize.y;
    float v = areaY + areaY - vTextureCoord.y;
    float y = uMirror > 0.5 ? v : vTextureCoord.y;

    float _amplitude = ((uAmplitude.y - uAmplitude.x) * k + uAmplitude.x ) / uInputSize.x;
    float _waveLength = ((uWavelength.y - uWavelength.x) * k + uWavelength.x) / uInputSize.y;
    float _alpha = (uAlpha.y - uAlpha.x) * k + uAlpha.x;

    float x = vTextureCoord.x + cos(v * 6.28 / _waveLength - uTime) * _amplitude;
    x = clamp(x, uInputClamp.x, uInputClamp.z);

    vec4 color = texture(uTexture, vec2(x, y));

    finalColor = color * _alpha;
}
`,vp=`struct ReflectionUniforms {
  uMirror: f32,
  uBoundary: f32,
  uAmplitude: vec2<f32>,
  uWavelength: vec2<f32>,
  uAlpha: vec2<f32>,
  uTime: f32,
  uDimensions: vec2<f32>,
};

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> reflectionUniforms : ReflectionUniforms;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  let uDimensions: vec2<f32> = reflectionUniforms.uDimensions;
  let uBoundary: f32 = reflectionUniforms.uBoundary;
  let uMirror: bool = reflectionUniforms.uMirror > 0.5;
  let uAmplitude: vec2<f32> = reflectionUniforms.uAmplitude;
  let uWavelength: vec2<f32> = reflectionUniforms.uWavelength;
  let uAlpha: vec2<f32> = reflectionUniforms.uAlpha;
  let uTime: f32 = reflectionUniforms.uTime;

  let pixelCoord: vec2<f32> = uv * gfu.uInputSize.xy;
  let coord: vec2<f32> = pixelCoord /uDimensions;
  var returnColorOnly: bool = false;

  if (coord.y < uBoundary) {
    returnColorOnly = true;
  }

  let k: f32 = (coord.y - uBoundary) / (1. - uBoundary + 0.0001);
  let areaY: f32 = uBoundary * uDimensions.y / gfu.uInputSize.y;
  let v: f32 = areaY + areaY - uv.y;
  let y: f32 = select(uv.y, v, uMirror);

  let amplitude: f32 = ((uAmplitude.y - uAmplitude.x) * k + uAmplitude.x ) / gfu.uInputSize.x;
  let waveLength: f32 = ((uWavelength.y - uWavelength.x) * k + uWavelength.x) / gfu.uInputSize.y;
  let alpha: f32 = select((uAlpha.y - uAlpha.x) * k + uAlpha.x, 1., returnColorOnly);

  var x: f32 = uv.x + cos(v * 6.28 / waveLength - uTime) * amplitude;
  x = clamp(x, gfu.uInputClamp.x, gfu.uInputClamp.z);
  
  return textureSample(uTexture, uSampler, select(vec2<f32>(x, y), uv, returnColorOnly)) * alpha;
}

fn rand(co: vec2<f32>) -> f32 
{
  return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);
}`,yp=Object.defineProperty,_p=(n,t,e)=>t in n?yp(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,Lr=(n,t,e)=>(_p(n,typeof t!="symbol"?t+"":t,e),e);const bp=class aa extends D{constructor(t){t={...aa.DEFAULT_OPTIONS,...t};const e=B.from({vertex:{source:W,entryPoint:"mainVertex"},fragment:{source:vp,entryPoint:"mainFragment"}}),r=L.from({vertex:V,fragment:xp,name:"reflection-filter"});super({gpuProgram:e,glProgram:r,resources:{reflectionUniforms:{uMirror:{value:t.mirror?1:0,type:"f32"},uBoundary:{value:t.boundary,type:"f32"},uAmplitude:{value:t.amplitude,type:"vec2<f32>"},uWavelength:{value:t.waveLength,type:"vec2<f32>"},uAlpha:{value:t.alpha,type:"vec2<f32>"},uTime:{value:t.time,type:"f32"},uDimensions:{value:new Float32Array(2),type:"vec2<f32>"}}}}),Lr(this,"uniforms"),Lr(this,"time",0),this.uniforms=this.resources.reflectionUniforms.uniforms,Object.assign(this,t)}apply(t,e,r,i){this.uniforms.uDimensions[0]=e.frame.width,this.uniforms.uDimensions[1]=e.frame.height,this.uniforms.uTime=this.time,t.applyFilter(this,e,r,i)}get mirror(){return this.uniforms.uMirror>.5}set mirror(t){this.uniforms.uMirror=t?1:0}get boundary(){return this.uniforms.uBoundary}set boundary(t){this.uniforms.uBoundary=t}get amplitude(){return Array.from(this.uniforms.uAmplitude)}set amplitude(t){this.uniforms.uAmplitude[0]=t[0],this.uniforms.uAmplitude[1]=t[1]}get amplitudeStart(){return this.uniforms.uAmplitude[0]}set amplitudeStart(t){this.uniforms.uAmplitude[0]=t}get amplitudeEnd(){return this.uniforms.uAmplitude[1]}set amplitudeEnd(t){this.uniforms.uAmplitude[1]=t}get waveLength(){return Array.from(this.uniforms.uWavelength)}set waveLength(t){this.uniforms.uWavelength[0]=t[0],this.uniforms.uWavelength[1]=t[1]}get wavelengthStart(){return this.uniforms.uWavelength[0]}set wavelengthStart(t){this.uniforms.uWavelength[0]=t}get wavelengthEnd(){return this.uniforms.uWavelength[1]}set wavelengthEnd(t){this.uniforms.uWavelength[1]=t}get alpha(){return Array.from(this.uniforms.uAlpha)}set alpha(t){this.uniforms.uAlpha[0]=t[0],this.uniforms.uAlpha[1]=t[1]}get alphaStart(){return this.uniforms.uAlpha[0]}set alphaStart(t){this.uniforms.uAlpha[0]=t}get alphaEnd(){return this.uniforms.uAlpha[1]}set alphaEnd(t){this.uniforms.uAlpha[1]=t}};Lr(bp,"DEFAULT_OPTIONS",{mirror:!0,boundary:.5,amplitude:[0,20],waveLength:[30,100],alpha:[1,1],time:0});var Sp=`precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform vec4 uInputSize;
uniform vec2 uRed;
uniform vec2 uGreen;
uniform vec2 uBlue;

void main(void)
{
   float r = texture(uTexture, vTextureCoord + uRed/uInputSize.xy).r;
   float g = texture(uTexture, vTextureCoord + uGreen/uInputSize.xy).g;
   float b = texture(uTexture, vTextureCoord + uBlue/uInputSize.xy).b;
   float a = texture(uTexture, vTextureCoord).a;
   finalColor = vec4(r, g, b, a);
}
`,Cp=`struct RgbSplitUniforms {
    uRed: vec2<f32>,
    uGreen: vec2<f32>,
    uBlue: vec3<f32>,
};

struct GlobalFilterUniforms {
    uInputSize:vec4<f32>,
    uInputPixel:vec4<f32>,
    uInputClamp:vec4<f32>,
    uOutputFrame:vec4<f32>,
    uGlobalFrame:vec4<f32>,
    uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> rgbSplitUniforms : RgbSplitUniforms;

@fragment
fn mainFragment(
    @builtin(position) position: vec4<f32>,
    @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
    let r = textureSample(uTexture, uSampler, uv + vec2<f32>(rgbSplitUniforms.uRed.x / gfu.uInputSize.x, rgbSplitUniforms.uRed.y / gfu.uInputSize.y)).r;
    let g = textureSample(uTexture, uSampler, uv + vec2<f32>(rgbSplitUniforms.uGreen.x / gfu.uInputSize.x, rgbSplitUniforms.uGreen.y / gfu.uInputSize.y)).g;
    let b = textureSample(uTexture, uSampler, uv + vec2<f32>(rgbSplitUniforms.uBlue.x / gfu.uInputSize.x, rgbSplitUniforms.uBlue.y / gfu.uInputSize.y)).b;
    let a = textureSample(uTexture, uSampler, uv).a;
    return vec4<f32>(r, g, b, a);
}
`,wp=Object.defineProperty,Ap=(n,t,e)=>t in n?wp(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,la=(n,t,e)=>(Ap(n,typeof t!="symbol"?t+"":t,e),e);const Tp=class ua extends D{constructor(...t){let e=t[0]??{};(Array.isArray(e)||"x"in e&&"y"in e)&&(I("6.0.0","RGBSplitFilter constructor params are now options object. See params: { red, green, blue }"),e={red:e},t[1]!==void 0&&(e.green=t[1]),t[2]!==void 0&&(e.blue=t[2])),e={...ua.DEFAULT_OPTIONS,...e};const r=B.from({vertex:{source:W,entryPoint:"mainVertex"},fragment:{source:Cp,entryPoint:"mainFragment"}}),i=L.from({vertex:V,fragment:Sp,name:"rgb-split-filter"});super({gpuProgram:r,glProgram:i,resources:{rgbSplitUniforms:{uRed:{value:e.red,type:"vec2<f32>"},uGreen:{value:e.green,type:"vec2<f32>"},uBlue:{value:e.blue,type:"vec2<f32>"}}}}),la(this,"uniforms"),this.uniforms=this.resources.rgbSplitUniforms.uniforms,Object.assign(this,e)}get red(){return this.uniforms.uRed}set red(t){Array.isArray(t)&&(t={x:t[0],y:t[1]}),this.uniforms.uRed=t}get redX(){return this.red.x}set redX(t){this.red.x=t}get redY(){return this.red.y}set redY(t){this.red.y=t}get green(){return this.uniforms.uGreen}set green(t){Array.isArray(t)&&(t={x:t[0],y:t[1]}),this.uniforms.uGreen=t}get greenX(){return this.green.x}set greenX(t){this.green.x=t}get greenY(){return this.green.y}set greenY(t){this.green.y=t}get blue(){return this.uniforms.uBlue}set blue(t){Array.isArray(t)&&(t={x:t[0],y:t[1]}),this.uniforms.uBlue=t}get blueX(){return this.blue.x}set blueX(t){this.blue.x=t}get blueY(){return this.blue.y}set blueY(t){this.blue.y=t}};la(Tp,"DEFAULT_OPTIONS",{red:{x:-10,y:0},green:{x:0,y:10},blue:{x:0,y:0}});var Pp=`
precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform vec2 uCenter;
uniform float uTime;
uniform float uSpeed;
uniform vec4 uWave;

uniform vec4 uInputSize;
uniform vec4 uInputClamp;

const float PI = 3.14159;

void main()
{
    float uAmplitude = uWave[0];
    float uWavelength = uWave[1];
    float uBrightness = uWave[2];
    float uRadius = uWave[3];

    float halfWavelength = uWavelength * 0.5 / uInputSize.x;
    float maxRadius = uRadius / uInputSize.x;
    float currentRadius = uTime * uSpeed / uInputSize.x;

    float fade = 1.0;

    if (maxRadius > 0.0) {
        if (currentRadius > maxRadius) {
            finalColor = texture(uTexture, vTextureCoord);
            return;
        }
        fade = 1.0 - pow(currentRadius / maxRadius, 2.0);
    }

    vec2 dir = vec2(vTextureCoord - uCenter / uInputSize.xy);
    dir.y *= uInputSize.y / uInputSize.x;
    float dist = length(dir);

    if (dist <= 0.0 || dist < currentRadius - halfWavelength || dist > currentRadius + halfWavelength) {
        finalColor = texture(uTexture, vTextureCoord);
        return;
    }

    vec2 diffUV = normalize(dir);

    float diff = (dist - currentRadius) / halfWavelength;

    float p = 1.0 - pow(abs(diff), 2.0);

    // float powDiff = diff * pow(p, 2.0) * ( amplitude * fade );
    float powDiff = 1.25 * sin(diff * PI) * p * ( uAmplitude * fade );

    vec2 offset = diffUV * powDiff / uInputSize.xy;

    // Do clamp :
    vec2 coord = vTextureCoord + offset;
    vec2 clampedCoord = clamp(coord, uInputClamp.xy, uInputClamp.zw);
    vec4 color = texture(uTexture, clampedCoord);
    if (coord != clampedCoord) {
        color *= max(0.0, 1.0 - length(coord - clampedCoord));
    }

    // No clamp :
    // finalColor = texture(uTexture, vTextureCoord + offset);

    color.rgb *= 1.0 + (uBrightness - 1.0) * p * fade;

    finalColor = color;
}
`,Fp=`
struct ShockWaveUniforms {
    uTime: f32,
    uOffset: vec2<f32>,
    uSpeed: f32,
    uWave: vec4<f32>,
};

struct GlobalFilterUniforms {
    uInputSize:vec4<f32>,
    uInputPixel:vec4<f32>,
    uInputClamp:vec4<f32>,
    uOutputFrame:vec4<f32>,
    uGlobalFrame:vec4<f32>,
    uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> shockwaveUniforms : ShockWaveUniforms;

@fragment
fn mainFragment(
    @builtin(position) position: vec4<f32>,
    @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {

    let uTime = shockwaveUniforms.uTime;
    let uOffset = shockwaveUniforms.uOffset;
    let uSpeed = shockwaveUniforms.uSpeed;
    let uAmplitude = shockwaveUniforms.uWave[0];
    let uWavelength = shockwaveUniforms.uWave[1];
    let uBrightness = shockwaveUniforms.uWave[2];
    let uRadius = shockwaveUniforms.uWave[3];
    let halfWavelength: f32 = uWavelength * 0.5 / gfu.uInputSize.x;
    let maxRadius: f32 = uRadius / gfu.uInputSize.x;
    let currentRadius: f32 = uTime * uSpeed / gfu.uInputSize.x;
    var fade: f32 = 1.0;
    var returnColorOnly: bool = false;
    
    if (maxRadius > 0.0) {
        if (currentRadius > maxRadius) {
            returnColorOnly = true;
        }
        fade = 1.0 - pow(currentRadius / maxRadius, 2.0);
    }
    var dir: vec2<f32> = vec2<f32>(uv - uOffset / gfu.uInputSize.xy);
    dir.y *= gfu.uInputSize.y / gfu.uInputSize.x;

    let dist:f32 = length(dir);

    if (dist <= 0.0 || dist < currentRadius - halfWavelength || dist > currentRadius + halfWavelength) {
        returnColorOnly = true;
    }

    let diffUV: vec2<f32> = normalize(dir);
    let diff: f32 = (dist - currentRadius) / halfWavelength;
    let p: f32 = 1.0 - pow(abs(diff), 2.0);
    let powDiff: f32 = 1.25 * sin(diff * PI) * p * ( uAmplitude * fade );
    let offset: vec2<f32> = diffUV * powDiff / gfu.uInputSize.xy;
    // Do clamp :
    let coord: vec2<f32> = uv + offset;
    let clampedCoord: vec2<f32> = clamp(coord, gfu.uInputClamp.xy, gfu.uInputClamp.zw);

    var clampedColor: vec4<f32> = textureSample(uTexture, uSampler, clampedCoord);
    
    if (boolVec2(coord, clampedCoord)) 
    {
        clampedColor *= max(0.0, 1.0 - length(coord - clampedCoord));
    }
    // No clamp :
    var finalColor = clampedColor;

    return select(finalColor, textureSample(uTexture, uSampler, uv), returnColorOnly);
}

fn boolVec2(x: vec2<f32>, y: vec2<f32>) -> bool
{
    if (x.x == y.x && x.y == y.y)
    {
        return true;
    }
    
    return false;
}

const PI: f32 = 3.14159265358979323846264;
`,zp=Object.defineProperty,Mp=(n,t,e)=>t in n?zp(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,Dr=(n,t,e)=>(Mp(n,typeof t!="symbol"?t+"":t,e),e);const Ip=class ca extends D{constructor(...t){let e=t[0]??{};(Array.isArray(e)||"x"in e&&"y"in e)&&(I("6.0.0","ShockwaveFilter constructor params are now options object. See params: { center, speed, amplitude, wavelength, brightness, radius, time }"),e={center:e,...t[1]},t[2]!==void 0&&(e.time=t[2])),e={...ca.DEFAULT_OPTIONS,...e};const r=B.from({vertex:{source:W,entryPoint:"mainVertex"},fragment:{source:Fp,entryPoint:"mainFragment"}}),i=L.from({vertex:V,fragment:Pp,name:"shockwave-filter"});super({gpuProgram:r,glProgram:i,resources:{shockwaveUniforms:{uTime:{value:e.time,type:"f32"},uCenter:{value:e.center,type:"vec2<f32>"},uSpeed:{value:e.speed,type:"f32"},uWave:{value:new Float32Array(4),type:"vec4<f32>"}}}}),Dr(this,"uniforms"),Dr(this,"time"),this.time=0,this.uniforms=this.resources.shockwaveUniforms.uniforms,Object.assign(this,e)}apply(t,e,r,i){this.uniforms.uTime=this.time,t.applyFilter(this,e,r,i)}get center(){return this.uniforms.uCenter}set center(t){Array.isArray(t)&&(t={x:t[0],y:t[1]}),this.uniforms.uCenter=t}get centerX(){return this.uniforms.uCenter.x}set centerX(t){this.uniforms.uCenter.x=t}get centerY(){return this.uniforms.uCenter.y}set centerY(t){this.uniforms.uCenter.y=t}get speed(){return this.uniforms.uSpeed}set speed(t){this.uniforms.uSpeed=t}get amplitude(){return this.uniforms.uWave[0]}set amplitude(t){this.uniforms.uWave[0]=t}get wavelength(){return this.uniforms.uWave[1]}set wavelength(t){this.uniforms.uWave[1]=t}get brightness(){return this.uniforms.uWave[2]}set brightness(t){this.uniforms.uWave[2]=t}get radius(){return this.uniforms.uWave[3]}set radius(t){this.uniforms.uWave[3]=t}};Dr(Ip,"DEFAULT_OPTIONS",{center:{x:0,y:0},speed:500,amplitude:30,wavelength:160,brightness:1,radius:-1});var Op=`precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform sampler2D uMapTexture;
uniform vec3 uColor;
uniform float uAlpha;
uniform vec2 uDimensions;

uniform vec4 uInputSize;

void main() {
    vec4 diffuseColor = texture(uTexture, vTextureCoord);
    vec2 lightCoord = (vTextureCoord * uInputSize.xy) / uDimensions;
    vec4 light = texture(uMapTexture, lightCoord);
    vec3 ambient = uColor.rgb * uAlpha;
    vec3 intensity = ambient + light.rgb;
    vec3 color = diffuseColor.rgb * intensity;
    finalColor = vec4(color, diffuseColor.a);
}
`,Rp=`struct SimpleLightmapUniforms {
  uColor: vec3<f32>,
  uAlpha: f32,
  uDimensions: vec2<f32>,
};

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> simpleLightmapUniforms : SimpleLightmapUniforms;
@group(1) @binding(1) var uMapTexture: texture_2d<f32>;
@group(1) @binding(2) var uMapSampler: sampler;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>,
) -> @location(0) vec4<f32> {
  let uColor = simpleLightmapUniforms.uColor;
  let uAlpha = simpleLightmapUniforms.uAlpha;
  let uDimensions = simpleLightmapUniforms.uDimensions;

  let diffuseColor: vec4<f32> = textureSample(uTexture, uSampler, uv);
  let lightCoord: vec2<f32> = (uv * gfu.uInputSize.xy) / simpleLightmapUniforms.uDimensions;
  let light: vec4<f32> = textureSample(uMapTexture, uMapSampler, lightCoord);
  let ambient: vec3<f32> = uColor * uAlpha;
  let intensity: vec3<f32> = ambient + light.rgb;
  let finalColor: vec3<f32> = diffuseColor.rgb * intensity;
  return vec4<f32>(finalColor, diffuseColor.a);
}`,Ep=Object.defineProperty,Up=(n,t,e)=>t in n?Ep(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,mn=(n,t,e)=>(Up(n,typeof t!="symbol"?t+"":t,e),e);const kp=class ha extends D{constructor(...t){let e=t[0]??{};if(e instanceof k&&(I("6.0.0","SimpleLightmapFilter constructor params are now options object. See params: { lightMap, color, alpha }"),e={lightMap:e},t[1]!==void 0&&(e.color=t[1]),t[2]!==void 0&&(e.alpha=t[2])),e={...ha.DEFAULT_OPTIONS,...e},!e.lightMap)throw Error("No light map texture source was provided to SimpleLightmapFilter");const r=B.from({vertex:{source:W,entryPoint:"mainVertex"},fragment:{source:Rp,entryPoint:"mainFragment"}}),i=L.from({vertex:V,fragment:Op,name:"simple-lightmap-filter"});super({gpuProgram:r,glProgram:i,resources:{simpleLightmapUniforms:{uColor:{value:new Float32Array(3),type:"vec3<f32>"},uAlpha:{value:e.alpha,type:"f32"},uDimensions:{value:new Float32Array(2),type:"vec2<f32>"}},uMapTexture:e.lightMap.source,uMapSampler:e.lightMap.source.style}}),mn(this,"uniforms"),mn(this,"_color"),mn(this,"_lightMap"),this.uniforms=this.resources.simpleLightmapUniforms.uniforms,this._color=new G,this.color=e.color??0,Object.assign(this,e)}apply(t,e,r,i){this.uniforms.uDimensions[0]=e.frame.width,this.uniforms.uDimensions[1]=e.frame.height,t.applyFilter(this,e,r,i)}get lightMap(){return this._lightMap}set lightMap(t){this._lightMap=t,this.resources.uMapTexture=t.source,this.resources.uMapSampler=t.source.style}get color(){return this._color.value}set color(t){this._color.setValue(t);const[e,r,i]=this._color.toArray();this.uniforms.uColor[0]=e,this.uniforms.uColor[1]=r,this.uniforms.uColor[2]=i}get alpha(){return this.uniforms.uAlpha}set alpha(t){this.uniforms.uAlpha=t}};mn(kp,"DEFAULT_OPTIONS",{lightMap:k.WHITE,color:0,alpha:1});var Bp=`in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform vec2 uBlur;
uniform vec2 uStart;
uniform vec2 uEnd;
uniform vec2 uDelta;
uniform vec2 uTexSize;

float random(vec3 scale, float seed)
{
    return fract(sin(dot(gl_FragCoord.xyz + seed, scale)) * 43758.5453 + seed);
}

void main(void)
{
    vec4 color = vec4(0.0);
    float total = 0.0;

    float blur = uBlur[0];
    float gradientBlur = uBlur[1];

    float offset = random(vec3(12.9898, 78.233, 151.7182), 0.0);
    vec2 normal = normalize(vec2(uStart.y - uEnd.y, uEnd.x - uStart.x));
    float radius = smoothstep(0.0, 1.0, abs(dot(vTextureCoord * uTexSize - uStart, normal)) / gradientBlur) * blur;

    for (float t = -30.0; t <= 30.0; t++)
    {
        float percent = (t + offset - 0.5) / 30.0;
        float weight = 1.0 - abs(percent);
        vec4 sample = texture(uTexture, vTextureCoord + uDelta / uTexSize * percent * radius);
        sample.rgb *= sample.a;
        color += sample * weight;
        total += weight;
    }

    color /= total;
    color.rgb /= color.a + 0.00001;

    finalColor = color;
}
`,Lp=`struct TiltShiftUniforms {
  uBlur: vec2<f32>,
  uStart: vec2<f32>,
  uEnd: vec2<f32>,
  uDelta: vec2<f32>,
  uTexSize: vec2<f32>,
};

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> tiltShiftUniforms : TiltShiftUniforms;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  let uBlur = tiltShiftUniforms.uBlur[0];
  let uBlurGradient = tiltShiftUniforms.uBlur[1];
  let uStart = tiltShiftUniforms.uStart;
  let uEnd = tiltShiftUniforms.uEnd;
  let uDelta = tiltShiftUniforms.uDelta;
  let uTexSize = tiltShiftUniforms.uTexSize;

  var color: vec4<f32> = vec4<f32>(0.0);
  var total: f32 = 0.0;

  let offset: f32 = random(position, vec3<f32>(12.9898, 78.233, 151.7182), 0.0);
  let normal: vec2<f32> = normalize(vec2<f32>(uStart.y - uEnd.y, uEnd.x - uStart.x));
  let radius: f32 = smoothstep(0.0, 1.0, abs(dot(uv * uTexSize - uStart, normal)) / uBlurGradient) * uBlur;

  for (var t: f32 = -30.0; t <= 30.0; t += 1.0)
  {
    var percent: f32 = (t + offset - 0.5) / 30.0;
    var weight: f32 = 1.0 - abs(percent);
    var sample: vec4<f32> = textureSample(uTexture, uSampler, uv + uDelta / uTexSize * percent * radius);
    sample = vec4<f32>(sample.xyz * sample.a, sample.a); // multiply sample.rgb with sample.a
    color += sample * weight;
    total += weight;
  }

  color /= total;
  color = vec4<f32>(color.xyz / (color.a + 0.00001), color.a); // divide color.rgb by color.a + 0.00001

  return color;
}


fn random(position: vec4<f32>, scale: vec3<f32>, seed: f32) -> f32
{
  return fract(sin(dot(position.xyz + seed, scale)) * 43758.5453 + seed);
}`,Dp=Object.defineProperty,Gp=(n,t,e)=>t in n?Dp(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,Gr=(n,t,e)=>(Gp(n,typeof t!="symbol"?t+"":t,e),e);const Np=class fa extends D{constructor(t){t={...fa.DEFAULT_OPTIONS,...t};const e=B.from({vertex:{source:W,entryPoint:"mainVertex"},fragment:{source:Lp,entryPoint:"mainFragment"}}),r=L.from({vertex:V,fragment:Bp,name:"tilt-shift-axis-filter"});super({gpuProgram:e,glProgram:r,resources:{tiltShiftUniforms:{uBlur:{value:new Float32Array([t.blur??100,t.gradientBlur??600]),type:"vec2<f32>"},uStart:{value:t.start,type:"vec2<f32>"},uEnd:{value:t.end,type:"vec2<f32>"},uDelta:{value:new Float32Array([30,30]),type:"vec2<f32>"},uTexSize:{value:new Float32Array([window.innerWidth,window.innerHeight]),type:"vec2<f32>"}}}}),Gr(this,"uniforms"),Gr(this,"_tiltAxis"),this.uniforms=this.resources.tiltShiftUniforms.uniforms,this._tiltAxis=t.axis,this.updateDelta()}updateDelta(){if(this.uniforms.uDelta[0]=0,this.uniforms.uDelta[1]=0,this._tiltAxis===void 0)return;const t=this.uniforms.uEnd,e=this.uniforms.uStart,r=t.x-e.x,i=t.y-e.y,s=Math.sqrt(r*r+i*i),o=this._tiltAxis==="vertical";this.uniforms.uDelta[0]=o?-i/s:r/s,this.uniforms.uDelta[1]=o?r/s:i/s}};Gr(Np,"DEFAULT_OPTIONS",{blur:100,gradientBlur:600,start:{x:0,y:window.innerHeight/2},end:{x:600,y:window.innerHeight/2}});var $p=`precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform vec2 uTwist;
uniform vec2 uOffset;
uniform vec4 uInputSize;

vec2 mapCoord( vec2 coord )
{
    coord *= uInputSize.xy;
    coord += uInputSize.zw;

    return coord;
}

vec2 unmapCoord( vec2 coord )
{
    coord -= uInputSize.zw;
    coord /= uInputSize.xy;

    return coord;
}

vec2 twist(vec2 coord)
{
    coord -= uOffset;

    float dist = length(coord);
    float uRadius = uTwist[0];
    float uAngle = uTwist[1];

    if (dist < uRadius)
    {
        float ratioDist = (uRadius - dist) / uRadius;
        float angleMod = ratioDist * ratioDist * uAngle;
        float s = sin(angleMod);
        float c = cos(angleMod);
        coord = vec2(coord.x * c - coord.y * s, coord.x * s + coord.y * c);
    }

    coord += uOffset;

    return coord;
}

void main(void)
{
    vec2 coord = mapCoord(vTextureCoord);
    coord = twist(coord);
    coord = unmapCoord(coord);
    finalColor = texture(uTexture, coord);
}
`,Vp=`struct TwistUniforms {
  uTwist:vec2<f32>,
  uOffset:vec2<f32>,
};

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> twistUniforms : TwistUniforms;

@fragment
fn mainFragment(
  @location(0) uv: vec2<f32>,
  @builtin(position) position: vec4<f32>
) -> @location(0) vec4<f32> {
  return textureSample(uTexture, uSampler, unmapCoord(twist(mapCoord(uv))));
}

fn mapCoord(coord: vec2<f32> ) -> vec2<f32>
{
  var mappedCoord: vec2<f32> = coord;
  mappedCoord *= gfu.uInputSize.xy;
  mappedCoord += gfu.uOutputFrame.xy;
  return mappedCoord;
}

fn unmapCoord(coord: vec2<f32> ) -> vec2<f32>
{
  var mappedCoord: vec2<f32> = coord;
  mappedCoord -= gfu.uOutputFrame.xy;
  mappedCoord /= gfu.uInputSize.xy;
  return mappedCoord;
}

fn twist(coord: vec2<f32>) -> vec2<f32>
{
  var twistedCoord: vec2<f32> = coord;
  let uRadius = twistUniforms.uTwist[0];
  let uAngle = twistUniforms.uTwist[1];
  let uOffset = twistUniforms.uOffset;

  twistedCoord -= uOffset;
  
  let dist = length(twistedCoord);

  if (dist < uRadius)
  {
    let ratioDist: f32 = (uRadius - dist) / uRadius;
    let angleMod: f32 = ratioDist * ratioDist * uAngle;
    let s: f32 = sin(angleMod);
    let c: f32 = cos(angleMod);
    twistedCoord = vec2<f32>(twistedCoord.x * c - twistedCoord.y * s, twistedCoord.x * s + twistedCoord.y * c);
  }

  twistedCoord += uOffset;
  return twistedCoord;
}
`,Wp=Object.defineProperty,Xp=(n,t,e)=>t in n?Wp(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,da=(n,t,e)=>(Xp(n,typeof t!="symbol"?t+"":t,e),e);const Yp=class pa extends D{constructor(t){t={...pa.DEFAULT_OPTIONS,...t};const e=B.from({vertex:{source:W,entryPoint:"mainVertex"},fragment:{source:Vp,entryPoint:"mainFragment"}}),r=L.from({vertex:V,fragment:$p,name:"twist-filter"});super({gpuProgram:e,glProgram:r,resources:{twistUniforms:{uTwist:{value:[t.radius??0,t.angle??0],type:"vec2<f32>"},uOffset:{value:t.offset,type:"vec2<f32>"}}},...t}),da(this,"uniforms"),this.uniforms=this.resources.twistUniforms.uniforms}get radius(){return this.uniforms.uTwist[0]}set radius(t){this.uniforms.uTwist[0]=t}get angle(){return this.uniforms.uTwist[1]}set angle(t){this.uniforms.uTwist[1]=t}get offset(){return this.uniforms.uOffset}set offset(t){this.uniforms.uOffset=t}get offsetX(){return this.offset.x}set offsetX(t){this.offset.x=t}get offsetY(){return this.offset.y}set offsetY(t){this.offset.y=t}};da(Yp,"DEFAULT_OPTIONS",{padding:20,radius:200,angle:4,offset:{x:0,y:0}});var Hp=`precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform float uStrength;
uniform vec2 uCenter;
uniform vec2 uRadii;

uniform vec4 uInputSize;

const float MAX_KERNEL_SIZE = \${MAX_KERNEL_SIZE};

// author: http://byteblacksmith.com/improvements-to-the-canonical-one-liner-glsl-rand-for-opengl-es-2-0/
highp float rand(vec2 co, float seed) {
    const highp float a = 12.9898, b = 78.233, c = 43758.5453;
    highp float dt = dot(co + seed, vec2(a, b)), sn = mod(dt, 3.14159);
    return fract(sin(sn) * c + seed);
}

void main() {
    float minGradient = uRadii[0] * 0.3;
    float innerRadius = (uRadii[0] + minGradient * 0.5) / uInputSize.x;

    float gradient = uRadii[1] * 0.3;
    float radius = (uRadii[1] - gradient * 0.5) / uInputSize.x;

    float countLimit = MAX_KERNEL_SIZE;

    vec2 dir = vec2(uCenter.xy / uInputSize.xy - vTextureCoord);
    float dist = length(vec2(dir.x, dir.y * uInputSize.y / uInputSize.x));

    float strength = uStrength;

    float delta = 0.0;
    float gap;
    if (dist < innerRadius) {
        delta = innerRadius - dist;
        gap = minGradient;
    } else if (radius >= 0.0 && dist > radius) { // radius < 0 means it's infinity
        delta = dist - radius;
        gap = gradient;
    }

    if (delta > 0.0) {
        float normalCount = gap / uInputSize.x;
        delta = (normalCount - delta) / normalCount;
        countLimit *= delta;
        strength *= delta;
        if (countLimit < 1.0)
        {
            gl_FragColor = texture(uTexture, vTextureCoord);
            return;
        }
    }

    // randomize the lookup values to hide the fixed number of samples
    float offset = rand(vTextureCoord, 0.0);

    float total = 0.0;
    vec4 color = vec4(0.0);

    dir *= strength;

    for (float t = 0.0; t < MAX_KERNEL_SIZE; t++) {
        float percent = (t + offset) / MAX_KERNEL_SIZE;
        float weight = 4.0 * (percent - percent * percent);
        vec2 p = vTextureCoord + dir * percent;
        vec4 sample = texture(uTexture, p);

        // switch to pre-multiplied alpha to correctly blur transparent images
        // sample.rgb *= sample.a;

        color += sample * weight;
        total += weight;

        if (t > countLimit){
            break;
        }
    }

    color /= total;
    // switch back from pre-multiplied alpha
    // color.rgb /= color.a + 0.00001;

    gl_FragColor = color;
}
`,jp=`struct ZoomBlurUniforms {
    uStrength:f32,
    uCenter:vec2<f32>,
    uRadii:vec2<f32>,
};

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> zoomBlurUniforms : ZoomBlurUniforms;

@fragment
fn mainFragment(
    @builtin(position) position: vec4<f32>,
    @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  let uStrength = zoomBlurUniforms.uStrength;
  let uCenter = zoomBlurUniforms.uCenter;
  let uRadii = zoomBlurUniforms.uRadii;

  let minGradient: f32 = uRadii[0] * 0.3;
  let innerRadius: f32 = (uRadii[0] + minGradient * 0.5) / gfu.uInputSize.x;

  let gradient: f32 = uRadii[1] * 0.3;
  let radius: f32 = (uRadii[1] - gradient * 0.5) / gfu.uInputSize.x;

  let MAX_KERNEL_SIZE: f32 = \${MAX_KERNEL_SIZE};

  var countLimit: f32 = MAX_KERNEL_SIZE;

  var dir: vec2<f32> = vec2<f32>(uCenter / gfu.uInputSize.xy - uv);
  let dist: f32 = length(vec2<f32>(dir.x, dir.y * gfu.uInputSize.y / gfu.uInputSize.x));

  var strength: f32 = uStrength;

  var delta: f32 = 0.0;
  var gap: f32;

  if (dist < innerRadius) {
      delta = innerRadius - dist;
      gap = minGradient;
  } else if (radius >= 0.0 && dist > radius) { // radius < 0 means it's infinity
      delta = dist - radius;
      gap = gradient;
  }

  var returnColorOnly: bool = false;

  if (delta > 0.0) {
    let normalCount: f32 = gap / gfu.uInputSize.x;
    delta = (normalCount - delta) / normalCount;
    countLimit *= delta;
    strength *= delta;
    
    if (countLimit < 1.0)
    {
      returnColorOnly = true;;
    }
  }

  // randomize the lookup values to hide the fixed number of samples
  let offset: f32 = rand(uv, 0.0);

  var total: f32 = 0.0;
  var color: vec4<f32> = vec4<f32>(0.);

  dir *= strength;

  for (var t = 0.0; t < MAX_KERNEL_SIZE; t += 1.0) {
    let percent: f32 = (t + offset) / MAX_KERNEL_SIZE;
    let weight: f32 = 4.0 * (percent - percent * percent);
    let p: vec2<f32> = uv + dir * percent;
    let sample: vec4<f32> = textureSample(uTexture, uSampler, p);
    
    if (t < countLimit)
    {
      color += sample * weight;
      total += weight;
    }
  }

  color /= total;

  return select(color, textureSample(uTexture, uSampler, uv), returnColorOnly);
}

fn modulo(x: f32, y: f32) -> f32
{
  return x - y * floor(x/y);
}

// author: http://byteblacksmith.com/improvements-to-the-canonical-one-liner-glsl-rand-for-opengl-es-2-0/
fn rand(co: vec2<f32>, seed: f32) -> f32
{
  let a: f32 = 12.9898;
  let b: f32 = 78.233;
  let c: f32 = 43758.5453;
  let dt: f32 = dot(co + seed, vec2<f32>(a, b));
  let sn: f32 = modulo(dt, 3.14159);
  return fract(sin(sn) * c + seed);
}`,qp=Object.defineProperty,Kp=(n,t,e)=>t in n?qp(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,ma=(n,t,e)=>(Kp(n,typeof t!="symbol"?t+"":t,e),e);const Zp=class ga extends D{constructor(t){t={...ga.DEFAULT_OPTIONS,...t};const e=t.maxKernelSize??32,r=B.from({vertex:{source:W,entryPoint:"mainVertex"},fragment:{source:jp.replace("${MAX_KERNEL_SIZE}",e.toFixed(1)),entryPoint:"mainFragment"}}),i=L.from({vertex:V,fragment:Hp.replace("${MAX_KERNEL_SIZE}",e.toFixed(1)),name:"zoom-blur-filter"});super({gpuProgram:r,glProgram:i,resources:{zoomBlurUniforms:{uStrength:{value:t.strength,type:"f32"},uCenter:{value:t.center,type:"vec2<f32>"},uRadii:{value:new Float32Array(2),type:"vec2<f32>"}}}}),ma(this,"uniforms"),this.uniforms=this.resources.zoomBlurUniforms.uniforms,Object.assign(this,t)}get strength(){return this.uniforms.uStrength}set strength(t){this.uniforms.uStrength=t}get center(){return this.uniforms.uCenter}set center(t){Array.isArray(t)&&(t={x:t[0],y:t[1]}),this.uniforms.uCenter=t}get centerX(){return this.uniforms.uCenter.x}set centerX(t){this.uniforms.uCenter.x=t}get centerY(){return this.uniforms.uCenter.y}set centerY(t){this.uniforms.uCenter.y=t}get innerRadius(){return this.uniforms.uRadii[0]}set innerRadius(t){this.uniforms.uRadii[0]=t}get radius(){return this.uniforms.uRadii[1]}set radius(t){this.uniforms.uRadii[1]=t<0||t===1/0?-1:t}};ma(Zp,"DEFAULT_OPTIONS",{strength:.1,center:{x:0,y:0},innerRadius:0,radius:-1,maxKernelSize:32});const yt=10,ht=10,Fn=16761095,Qp=13934336,xa="pig",zn="harmony",Jp=48,tm=[[16777215,0],[15495266,15158332],[6073826,5609927],[16043840,16101441],[11500228,10840509],[5756556,5488256]],em="version 1.6.0",nm="星星王国",rm="开始游戏",im="下一关",sm=n=>`关卡: ${n}`,om=n=>`目标: ${n}`;function am(){let n=new wd;return n.color=4210752,n.alpha=.5,n.antialias="on",n.resolution=window.devicePixelRatio,n}function Ue(n,t,e,r){n.clear(),n.filletRect(t.x,t.y,t.width,t.height,e),n.fill(r)}function va(n,t,e){n.on("pointerdown",()=>e()),n.on("pointerup",()=>t()),n.on("pointerupoutside",()=>t())}function Kt(){const n=new Bh;return n.resolution=Math.ceil(window.devicePixelRatio),n}class Sn{constructor(t,e){C(this,"width");C(this,"height");C(this,"yOffset",120);C(this,"gridY");C(this,"strokeSize");C(this,"padding",4);C(this,"contentWidth");C(this,"gridSize");C(this,"strokeHalf");C(this,"starPadding");C(this,"starSize");C(this,"outerR");C(this,"innerR");C(this,"fillet");this.width=t,this.height=e,this.gridY=e/2-t/2+this.yOffset/2,this.strokeSize=1,this.contentWidth=t-this.padding*2;const r=this.contentWidth;this.gridSize=(r-this.strokeSize*(ht+1))/ht,this.strokeHalf=this.strokeSize/2,this.starPadding=this.gridSize/24,this.starSize=this.gridSize-this.starPadding*2,this.outerR=this.starSize*15/32,this.innerR=this.outerR*18/32,this.fillet=this.starSize/5}}class Zt{constructor(t,e){C(this,"x");C(this,"y");C(this,"width");C(this,"height");C(this,"cover");let r=t,i=e;r*16>i*10?r=i*10/16:i=r*16/10,this.x=(t-r)/2,this.y=(e-i)/2,this.width=r,this.height=i,this.cover=new Sn(r,i)}static fromRenderer(t){let e=Math.max(t.width,300),r=Math.max(t.height,500);return new Zt(e,r)}equals(t){return this.x==t.x&&this.y==t.y&&this.width==t.width&&this.height==t.height}notEquals(t){return!this.equals(t)}sameSize(t){return this.width==t.width&&this.height==t.height}ofCover(){return this.cover}}class lm{constructor(t,e){C(this,"story");C(this,"group");C(this,"allStar",new bt);C(this,"tapArea",new bt);C(this,"scoreView",Kt());C(this,"levelView",Kt());C(this,"levelTargetView",Kt());C(this,"scaffoldCache",new Zt(0,0));C(this,"cover",new Sn(0,0));this.story=t,this.group=e}create(){this.tapArea.zIndex=-1,this.group.addChild(this.tapArea),this.group.addChild(this.allStar),this.group.addChild(this.scoreView),this.group.addChild(this.levelView),this.group.addChild(this.levelTargetView)}build(t){this.scaffoldCache=t;const e=t.ofCover();this.cover=e;let r=this.tapArea;const i=e.padding,s=e.contentWidth,o=e.fillet,a=i,l=e.gridY+i;r.clear(),r.filletRect(a,l,s,s,o),r.fill(16777215),r.eventMode="static",r.removeAllListeners();const u=(t.width-i*2)/ht;r.on("pointertap",y=>{const _=Math.floor((y.globalX-a-this.group.x)/u),A=Math.floor((y.globalY-l-this.group.y)/u);console.log(`tap event: ${_} ${A}`),this.story.onGridTap(_,A)&&this.draw()}),this.draw();let c=new bt;c.zIndex=-1,this.group.addChild(c),c.rect(0,(e.height-e.width-e.yOffset)/2,e.width,e.yOffset);const h=this.scoreView,f=Jp,d=new gt({align:"center",fill:Fn,fontFamily:xa,fontSize:f,stroke:{color:8421504,width:1}});h.anchor=.5,h.style=d,h.x=e.width/2;const p=e.height-e.width-e.yOffset+f;h.y=p/2+8;const g=7,m=new gt({fill:16777215,fontFamily:zn,fontSize:g*3}),v=this.levelView;v.anchor=0,v.style=m,v.x=e.padding+8,v.y=(e.height-e.width+e.yOffset)/2-g*5;const x=this.levelTargetView;x.anchor=.5,x.style=m,x.x=e.width/2,x.y=(e.height-e.width+e.yOffset)/2-g*3}draw(){console.log(`draw star, scaffold: ${this.scaffoldCache}`);const t=this.cover.gridY,e=this.cover.strokeSize,r=this.cover.padding,i=this.cover.gridSize,s=this.cover.strokeHalf,o=this.cover.starPadding,a=this.cover.starSize,l=this.cover.outerR,u=this.cover.innerR,c=this.cover.fillet,h=i+e,f=r+s+o,d=r+s+i/2;let p=this.story.ofData().ofGrids(),g=new Jt;this.allStar.clear();for(let m=0;m<yt;m++)for(let v=0;v<ht;v++){let x=p[m][v].ofColor();if(x==0)continue;let y=tm[x];const _=f+v*h,A=f+m*h+t;this.allStar.filters=[],this.allStar.filletRect(_,A,a,a,c),this.allStar.fill(y[1]);const R=d+v*h,T=d+m*h+t;this.drawStar(g,R,T,l,u,0),this.allStar.path(g),this.allStar.fill(y[0])}this.scoreView.text=this.story.ofData().ofScore(),this.levelView.text=this.story.ofData().ofLevel(),this.levelTargetView.text=this.story.ofData().ofLevelTarget()}destory(){this.tapArea.clear(),this.allStar.clear(),this.group.removeChild(this.tapArea),this.group.removeChild(this.allStar),this.group.removeChild(this.scoreView),this.group.removeChild(this.levelView),this.group.removeChild(this.levelTargetView)}drawStar(t,e,r,i,s,o){const a=u=>(36*u-o)/180*Math.PI;t.clear();const l=a(10);t.moveTo(e-Math.sin(l)*i,r-Math.cos(l)*i);for(let u=1;u<=10;u++){const c=u%2==1?s:i,h=e-Math.sin(a(u))*c,f=r-Math.cos(a(u))*c;t.lineTo(h,f)}t.closePath()}}class xe{constructor(t,e,r,i){C(this,"x");C(this,"y");C(this,"width");C(this,"height");this.x=t,this.y=e,this.width=r,this.height=i}static only(t,e){return new xe(0,0,t,e)}}class um{constructor(t){C(this,"story");C(this,"app");C(this,"board");C(this,"group",new rt);C(this,"endButton",new bt);C(this,"chessboard",new bt);this.story=t,this.app=t.ofApp(),this.board=new lm(t,this.group)}create(){this.group.addChild(this.endButton),this.group.addChild(this.chessboard),this.app.stage.addChild(this.group),this.board.create()}build(t){this.group.x=t.x,this.group.y=t.y;const e=new Sn(t.width,t.height),r=8,s=(e.height-e.width-e.yOffset)/2+8,o=this.endButton;o.eventMode="static",o.removeAllListeners(),o.on("pointertap",()=>this.story.onGameEnd()),this.drawButton(e,r,s),va(o,()=>this.drawButton(e,r,s),()=>this.drawBtnPressed(e,r,s)),this.drawChessBoard(t.width,t.height),this.board.build(t)}update(t,e){this.group.x=t,this.group.y=e}show(){this.group.visible=!0}hide(){this.group.visible=!1}destory(){this.board.destory(),this.endButton.clear(),this.group.removeChild(this.endButton),this.group.removeChild(this.chessboard),this.app.stage.removeChild(this.group)}drawBtnPressed(t,e,r){this.drawButton(t,e,r,!0)}drawButton(t,e,r,i=!1){const s=this.endButton;s.clear();const o=t.starSize,a=new xe(e,r,o,o),l=t.fillet;Ue(s,a,l,i?Qp:Fn);const c=o/10,h=e+c*2,f=e+c*6,d=r+c*2;s.filletRect(h,d,c*2,c*6,c),s.filletRect(f,d,c*2,c*6,c);const p=i?12632256:16777215;s.fill(p)}drawChessBoard(t,e){let r=this.chessboard;r.strokeStyle={color:15658734,width:1};const i=new Sn(t,e),s=i.gridY,o=i.strokeSize,a=i.padding,l=i.gridSize,u=i.strokeHalf;r.clear();for(let c=1;c<yt;c++){const h=s+a+u+c*(l+o),f=a+u;r.moveTo(f,h);const d=t-a-u;r.lineTo(d,h)}for(let c=1;c<ht;c++){const h=a+u+c*(l+o),f=s+a+u;r.moveTo(h,f);const d=s+t-a-u;r.lineTo(h,d)}r.stroke()}}class cm{constructor(){C(this,"allGrid",Array());C(this,"status",0);C(this,"score",0);C(this,"level",0);C(this,"levelGoals",[1e3,2500,4e3,5500,7500,9e3,11e3,13500,16500])}init(){console.log("data init");for(let t=0;t<yt;t++){this.allGrid[t]=new Array;for(let e=0;e<ht;e++){let r=new hm(0);r.setPivot(e,t),this.allGrid[t][e]=r}}}start(){console.log("data start"),this.loopGrid(t=>t.randomInit()),this.score=0,this.status=1}end(){console.log("data end"),this.score>=this.currentLevelTarget()?(this.level+=1,this.status=3,this.loopGrid(t=>t.randomInit())):(this.score=0,this.level=1,this.status=4,this.loopGrid(t=>t.clear()))}ofGrids(){return this.allGrid}ofScore(){return this.score}ofLevel(){return sm(this.level+1)}ofLevelTarget(){return om(this.currentLevelTarget())}ofNextBtnText(){return im}isOnLevelWait(){return this.status==3}isOnLevelFinish(){return this.status==4}onGridTap(t,e){if(t<0||e<0||t>=ht||e>=yt)return!1;let r=this.allGrid[e][t];if(r.isEmpty())return!1;let i=this.findSameColorGrids(r);if(i.length<=1)return!1;console.log(`total: ${i.length}`),i.forEach(a=>{console.log(`grid ${a[0]} ${a[1]}`),this.allGrid[a[0]][a[1]].clear()});for(let a=0;a<ht;a++){let l=0;for(let u=yt-1;u>=0;u--)l>0&&this.allGrid[u+l][a].clone(this.allGrid[u][a]),this.allGrid[u][a].isEmpty()?l++:l>0&&this.allGrid[u][a].clear()}let s=0;for(let a=0;a<ht;a++)if(this.allGrid[yt-1][a].isEmpty())s++;else if(s>0)for(let l=0;l<yt;l++)this.allGrid[l][a-s].clone(this.allGrid[l][a]),this.allGrid[l][a].clear();const o=i.length;return this.score+=o*o*5,i.length>1}checkIfFinish(){let t=0;for(let s=0;s<yt;s++)for(let o=0;o<ht;o++){var e=this.allGrid[s][o];if(!e.isEmpty()){if(t++,o!=ht-1){var r=this.allGrid[s][o+1];if(e.isSameColor(r))return[!1,0]}if(s!=yt-1){var i=this.allGrid[s+1][o];if(e.isSameColor(i))return[!1,0]}}}return[!0,t]}findSameColorGrids(t){let e=new Array,r=t.getPivot();console.log(`node ${r[1]} ${r[0]}`),e.push([r[1],r[0]]);let i=o=>{for(let a=0;a<e.length;a++){let l=e[a];if(l[0]==o[0]&&l[1]==o[1])return!1}return!0},s=0;for(;s<e.length;){let o=e[s],a=[o[0]-1,o[1]];a[0]>=0&&i(a)&&this.allGrid[a[0]][a[1]].equals(t)&&e.push(a);let l=[o[0]+1,o[1]];l[0]<yt&&i(l)&&this.allGrid[l[0]][l[1]].equals(t)&&e.push(l);let u=[o[0],o[1]-1];u[1]>=0&&i(u)&&this.allGrid[u[0]][u[1]].equals(t)&&e.push(u);let c=[o[0],o[1]+1];c[1]<ht&&i(c)&&this.allGrid[c[0]][c[1]].equals(t)&&e.push(c),s++}return e}loopGrid(t){for(let e=0;e<yt;e++)for(let r=0;r<ht;r++)t(this.allGrid[e][r])}currentLevelTarget(){const t=this.level,e=this.levelGoals.length;return t>=e?this.levelGoals[e-1]+2500*(t-e+1):this.levelGoals[t]}}class hm{constructor(t){C(this,"value");C(this,"dx");C(this,"dy");this.value=t,this.dx=0,this.dy=0}randomInit(){this.value=Math.ceil(Math.random()*5)}ofColor(){return this.value}getPivot(){return[this.dx,this.dy]}setPivot(t,e){this.dx=t,this.dy=e}clear(){this.value=0}equals(t){return this.value==t.value}isEmpty(){return this.value==0}clone(t){this.value=t.value}isSameColor(t){return this.value==t.value}}class ya{constructor(){C(this,"button",new bt);C(this,"text",Kt());C(this,"args",[Fn,15051776,16777215,14540253])}addToGroup(t){t.addChild(this.button),t.addChild(this.text)}create(t){const e=this.text,r=new gt({align:"center",fill:16777215,fontFamily:zn,fontSize:24});e.anchor=.5,e.style=r,e.text=t}draw(t,e,r,i=this.args){const s=i[0],o=i[1],a=i[2],l=i[3],u=this.button;u.filters=[am()],u.eventMode="static",u.removeAllListeners(),u.on("pointertap",r);const c=e;Ue(u,t,c,s),this.text.style.fill=a,va(u,()=>{Ue(u,t,c,s),this.text.style.fill=a},()=>{Ue(u,t,c,o),this.text.style.fill=l}),this.text.x=t.x+t.width/2,this.text.y=t.y+t.height/2}removeFromView(t){this.button.clear(),t.removeChild(this.button),t.removeChild(this.text)}}class fm{constructor(t){C(this,"app");C(this,"story");C(this,"group",new rt);C(this,"title",Kt());C(this,"textButton",new ya);this.story=t,this.app=t.ofApp()}create(){this.group.addChild(this.title),this.textButton.addToGroup(this.group),this.textButton.create(rm),this.app.stage.addChild(this.group);const t=this.title,e=new gt({align:"center",fill:16777215,fontFamily:xa,fontSize:84,stroke:{color:Fn,width:16}});t.anchor=.5,t.style=e,t.text=nm}build(t){this.group.x=t.x,this.group.y=t.y;const e=48,r=this.title;r.x=t.width/2,r.y=t.height/2-e*2;const i=e*2,s=t.height/2+e*2,o=t.width-e*4,a=48,l=new xe(i,s,o,a);this.textButton.draw(l,24,()=>this.story.onGameStart())}update(t,e){this.group.x=t,this.group.y=e}show(){this.group.visible=!0}hide(){this.group.visible=!1}destory(){this.textButton.removeFromView(this.group),this.app.stage.removeChild(this.group)}}const dm=window.matchMedia("(prefers-color-scheme: dark)").matches,is=dm?1:0;class pm{constructor(t){C(this,"app");C(this,"panel",new bt);this.app=t.ofApp()}create(){this.panel.zIndex=-2,this.app.stage.addChild(this.panel)}build(t=new Zt(0,0)){const e=this.app.renderer,r=e.width,i=e.height,s=new ge(0,0,r,i);s.addColorStop(0,2895480),s.addColorStop(9/10,3943768),this.panel.rect(0,0,r,i).fill(s),this.panel.circle(0,i,Math.min(r,i)*2/5).fill(3743295)}update(t,e){}show(){this.panel.visible=!0}hide(){this.panel.visible=!0}destory(){this.app.stage.removeChild(this.panel)}redraw(){this.destory(),this.create(),this.build()}}class mm{constructor(t){C(this,"story");C(this,"app");C(this,"group",new rt);C(this,"background",new bt);C(this,"title",Kt());C(this,"nextBtn",new ya);this.story=t,this.app=t.ofApp()}create(){this.group.addChild(this.background),this.group.addChild(this.title),this.nextBtn.addToGroup(this.group),this.nextBtn.create(this.story.ofData().ofNextBtnText()),this.app.stage.addChild(this.group)}build(t){this.group.x=t.x,this.group.y=t.y;const e=this.background,r=t.width/8,i=t.height/5,s=r*6,o=i*3,a=new xe(r,i,s,o);Ue(e,a,r/2,16098314),e.stroke({color:16368646,width:12}),this.story.onGridTap(-1,-1);const l=new gt({fill:16777215,fontFamily:zn,fontSize:42}),u=this.title;u.anchor=.5,u.style=l,u.x=t.width/2,u.y=i+32+42/2,u.text="通关";const c=32,h=48,f=r+c,d=i+o-c-h,p=new xe(f,d,s-c*2,h),g=[16777215,14540253,0,4473924];this.nextBtn.draw(p,4,()=>{if(this.story.ofData().isOnLevelWait()){this.story.toNextLevel();return}this.story.toHomePage()},g)}update(t,e){this.group.x=t,this.group.y=e}show(){this.group.visible=!0}hide(){this.group.visible=!1}destory(){this.background.clear(),this.nextBtn.removeFromView(this.group),this.group.removeChild(this.title),this.group.removeChild(this.background),this.app.stage.removeChild(this.group)}}class gm{constructor(){C(this,"app",new Qs);C(this,"databus",new cm);C(this,"versionText",Kt());C(this,"background",new pm(this));C(this,"frontPanel",new fm(this));C(this,"contentPanel",new um(this));C(this,"settlement",new mm(this));C(this,"pageIndex",is);C(this,"lastPage",new xm);C(this,"scaffoldCache",new Zt(0,0))}async start(){console.log(`eggcore: app start: ${window.devicePixelRatio}`);let t=this.app;await t.init({antialias:!0,autoDensity:!0,backgroundColor:6591981,resizeTo:window,resolution:window.devicePixelRatio}),t.ticker.add(()=>Nh()),document.body.appendChild(t.canvas),await ce.load("font/pig.woff2"),await ce.load("font/harmony.woff2"),this.databus.init(),is==1&&this.databus.start(),this.addVersionInfo(),this.onUpdate(Zt.fromRenderer(this.app.renderer)),this.lastPage=this.showOnStatus();let e=t.renderer;e.addListener("resize",()=>this.onUpdate(Zt.fromRenderer(e)))}ofApp(){return this.app}ofData(){return this.databus}onPageChanged(t){console.log(`temp onPageChanged ${t}`),this.pageIndex=t,this.lastPage.destory();let e=this.showOnStatus();e.create(),e.build(this.scaffoldCache),this.lastPage=e,this.background.redraw()}onGameStart(){this.databus.start(),this.onPageChanged(1)}onGameEnd(){this.databus.end(),this.onPageChanged(0)}onGridTap(t,e){let r=this.databus.onGridTap(t,e);return r&&this.databus.checkIfFinish()[0]&&(this.databus.end(),this.onPageChanged(2)),r}toNextLevel(){console.log("temp toNextLevel"),this.onPageChanged(1)}toHomePage(){console.log("temp toHomePage"),this.onPageChanged(0)}showOnStatus(){return this.pageIndex==0?this.frontPanel:this.pageIndex==1?this.contentPanel:this.pageIndex==2?this.settlement:this.frontPanel}onUpdate(t){let e=this.showOnStatus();t.sameSize(this.scaffoldCache)?e.update(t.x,t.y):(e.destory(),e.create(),e.build(t)),this.scaffoldCache=t;const r=5;this.versionText.x=this.app.renderer.width-r*2,this.versionText.y=this.app.renderer.height-r*2,this.background.redraw()}addVersionInfo(){const t=new gt({align:"center",fill:"#FFFFFF",fontFamily:zn,fontSize:14});this.versionText.anchor=1,this.versionText.text=em,this.versionText.style=t,this.app.stage.addChild(this.versionText)}}class xm{create(){}build(t){}update(t,e){}show(){}hide(){}destory(){}}new gm().start();export{cu as $,qs as A,ut as B,rt as C,J as D,O as E,D as F,B as G,yi as H,ke as I,Ml as J,Nl as K,et as L,X as M,tt as N,su as O,ot as P,Si as Q,_n as R,Dl as S,Ze as T,Gs as U,ul as V,Gn as W,G as X,xs as Y,I as Z,Y as _,dr as a,Iu as a0,me as a1,gt as a2,bc as a3,Mr as a4,lo as a5,Oi as a6,ji as a7,Pc as a8,bt as a9,Z as aa,La as ab,zr as ac,Yi as ad,xn as ae,co as af,St as b,L as c,Xr as d,lt as e,Su as f,eo as g,Ii as h,Au as i,Ge as j,ln as k,Wr as l,Ys as m,Ps as n,Ct as o,Xi as p,k as q,Ka as r,Ba as s,Fu as t,Eu as u,Ot as v,nt as w,ms as x,mt as y,Ft as z};
