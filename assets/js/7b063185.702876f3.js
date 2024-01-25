/*! For license information please see 7b063185.702876f3.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[680689],{478328:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>u,default:()=>p,frontMatter:()=>c,metadata:()=>s,toc:()=>i});var t=r(824246),o=r(511151);const c={id:"core-components.dependencygraphtypes.rendernodefunction",title:"DependencyGraphTypes.RenderNodeFunction",description:"API reference for DependencyGraphTypes.RenderNodeFunction"},u=void 0,s={id:"reference/core-components.dependencygraphtypes.rendernodefunction",title:"DependencyGraphTypes.RenderNodeFunction",description:"API reference for DependencyGraphTypes.RenderNodeFunction",source:"@site/../docs/reference/core-components.dependencygraphtypes.rendernodefunction.md",sourceDirName:"reference",slug:"/reference/core-components.dependencygraphtypes.rendernodefunction",permalink:"/docs/reference/core-components.dependencygraphtypes.rendernodefunction",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/core-components.dependencygraphtypes.rendernodefunction.md",tags:[],version:"current",frontMatter:{id:"core-components.dependencygraphtypes.rendernodefunction",title:"DependencyGraphTypes.RenderNodeFunction",description:"API reference for DependencyGraphTypes.RenderNodeFunction"}},a={},i=[];function f(e){const n=Object.assign({p:"p",a:"a",code:"code",strong:"strong",pre:"pre"},(0,o.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/reference/",children:"Home"})," > ",(0,t.jsx)(n.a,{href:"/docs/reference/core-components",children:(0,t.jsx)(n.code,{children:"@backstage/core-components"})})," > ",(0,t.jsx)(n.a,{href:"/docs/reference/core-components.dependencygraphtypes",children:(0,t.jsx)(n.code,{children:"DependencyGraphTypes"})})," > ",(0,t.jsx)(n.a,{href:"/docs/reference/core-components.dependencygraphtypes.rendernodefunction",children:(0,t.jsx)(n.code,{children:"RenderNodeFunction"})})]}),"\n",(0,t.jsxs)(n.p,{children:["Custom React component for graph ",(0,t.jsx)(n.a,{href:"/docs/reference/core-components.dependencygraphtypes.dependencynode",children:"DependencyGraphTypes.DependencyNode"})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Signature:"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"type RenderNodeFunction<T = {}> = (props: RenderNodeProps<T>) => React.ReactNode;\n"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"References:"})," ",(0,t.jsx)(n.a,{href:"/docs/reference/core-components.dependencygraphtypes.rendernodeprops",children:"RenderNodeProps"})]})]})}const p=function(e={}){const{wrapper:n}=Object.assign({},(0,o.ah)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(f,e)})):f(e)}},371426:(e,n,r)=>{var t=r(827378),o=Symbol.for("react.element"),c=Symbol.for("react.fragment"),u=Object.prototype.hasOwnProperty,s=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function i(e,n,r){var t,c={},i=null,f=null;for(t in void 0!==r&&(i=""+r),void 0!==n.key&&(i=""+n.key),void 0!==n.ref&&(f=n.ref),n)u.call(n,t)&&!a.hasOwnProperty(t)&&(c[t]=n[t]);if(e&&e.defaultProps)for(t in n=e.defaultProps)void 0===c[t]&&(c[t]=n[t]);return{$$typeof:o,type:e,key:i,ref:f,props:c,_owner:s.current}}n.Fragment=c,n.jsx=i,n.jsxs=i},541535:(e,n)=>{var r=Symbol.for("react.element"),t=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),c=Symbol.for("react.strict_mode"),u=Symbol.for("react.profiler"),s=Symbol.for("react.provider"),a=Symbol.for("react.context"),i=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),l=Symbol.for("react.lazy"),d=Symbol.iterator;var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h=Object.assign,m={};function _(e,n,r){this.props=e,this.context=n,this.refs=m,this.updater=r||y}function b(){}function v(e,n,r){this.props=e,this.context=n,this.refs=m,this.updater=r||y}_.prototype.isReactComponent={},_.prototype.setState=function(e,n){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")},_.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},b.prototype=_.prototype;var g=v.prototype=new b;g.constructor=v,h(g,_.prototype),g.isPureReactComponent=!0;var j=Array.isArray,R=Object.prototype.hasOwnProperty,S={current:null},x={key:!0,ref:!0,__self:!0,__source:!0};function k(e,n,t){var o,c={},u=null,s=null;if(null!=n)for(o in void 0!==n.ref&&(s=n.ref),void 0!==n.key&&(u=""+n.key),n)R.call(n,o)&&!x.hasOwnProperty(o)&&(c[o]=n[o]);var a=arguments.length-2;if(1===a)c.children=t;else if(1<a){for(var i=Array(a),f=0;f<a;f++)i[f]=arguments[f+2];c.children=i}if(e&&e.defaultProps)for(o in a=e.defaultProps)void 0===c[o]&&(c[o]=a[o]);return{$$typeof:r,type:e,key:u,ref:s,props:c,_owner:S.current}}function E(e){return"object"==typeof e&&null!==e&&e.$$typeof===r}var w=/\/+/g;function C(e,n){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return n[e]}))}(""+e.key):n.toString(36)}function $(e,n,o,c,u){var s=typeof e;"undefined"!==s&&"boolean"!==s||(e=null);var a=!1;if(null===e)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case r:case t:a=!0}}if(a)return u=u(a=e),e=""===c?"."+C(a,0):c,j(u)?(o="",null!=e&&(o=e.replace(w,"$&/")+"/"),$(u,n,o,"",(function(e){return e}))):null!=u&&(E(u)&&(u=function(e,n){return{$$typeof:r,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}(u,o+(!u.key||a&&a.key===u.key?"":(""+u.key).replace(w,"$&/")+"/")+e)),n.push(u)),1;if(a=0,c=""===c?".":c+":",j(e))for(var i=0;i<e.length;i++){var f=c+C(s=e[i],i);a+=$(s,n,o,f,u)}else if(f=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=d&&e[d]||e["@@iterator"])?e:null}(e),"function"==typeof f)for(e=f.call(e),i=0;!(s=e.next()).done;)a+=$(s=s.value,n,o,f=c+C(s,i++),u);else if("object"===s)throw n=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===n?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return a}function O(e,n,r){if(null==e)return e;var t=[],o=0;return $(e,t,"","",(function(e){return n.call(r,e,o++)})),t}function P(e){if(-1===e._status){var n=e._result;(n=n()).then((function(n){0!==e._status&&-1!==e._status||(e._status=1,e._result=n)}),(function(n){0!==e._status&&-1!==e._status||(e._status=2,e._result=n)})),-1===e._status&&(e._status=0,e._result=n)}if(1===e._status)return e._result.default;throw e._result}var N={current:null},T={transition:null},D={ReactCurrentDispatcher:N,ReactCurrentBatchConfig:T,ReactCurrentOwner:S};n.Children={map:O,forEach:function(e,n,r){O(e,(function(){n.apply(this,arguments)}),r)},count:function(e){var n=0;return O(e,(function(){n++})),n},toArray:function(e){return O(e,(function(e){return e}))||[]},only:function(e){if(!E(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},n.Component=_,n.Fragment=o,n.Profiler=u,n.PureComponent=v,n.StrictMode=c,n.Suspense=f,n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=D,n.cloneElement=function(e,n,t){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=h({},e.props),c=e.key,u=e.ref,s=e._owner;if(null!=n){if(void 0!==n.ref&&(u=n.ref,s=S.current),void 0!==n.key&&(c=""+n.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(i in n)R.call(n,i)&&!x.hasOwnProperty(i)&&(o[i]=void 0===n[i]&&void 0!==a?a[i]:n[i])}var i=arguments.length-2;if(1===i)o.children=t;else if(1<i){a=Array(i);for(var f=0;f<i;f++)a[f]=arguments[f+2];o.children=a}return{$$typeof:r,type:e.type,key:c,ref:u,props:o,_owner:s}},n.createContext=function(e){return(e={$$typeof:a,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:s,_context:e},e.Consumer=e},n.createElement=k,n.createFactory=function(e){var n=k.bind(null,e);return n.type=e,n},n.createRef=function(){return{current:null}},n.forwardRef=function(e){return{$$typeof:i,render:e}},n.isValidElement=E,n.lazy=function(e){return{$$typeof:l,_payload:{_status:-1,_result:e},_init:P}},n.memo=function(e,n){return{$$typeof:p,type:e,compare:void 0===n?null:n}},n.startTransition=function(e){var n=T.transition;T.transition={};try{e()}finally{T.transition=n}},n.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},n.useCallback=function(e,n){return N.current.useCallback(e,n)},n.useContext=function(e){return N.current.useContext(e)},n.useDebugValue=function(){},n.useDeferredValue=function(e){return N.current.useDeferredValue(e)},n.useEffect=function(e,n){return N.current.useEffect(e,n)},n.useId=function(){return N.current.useId()},n.useImperativeHandle=function(e,n,r){return N.current.useImperativeHandle(e,n,r)},n.useInsertionEffect=function(e,n){return N.current.useInsertionEffect(e,n)},n.useLayoutEffect=function(e,n){return N.current.useLayoutEffect(e,n)},n.useMemo=function(e,n){return N.current.useMemo(e,n)},n.useReducer=function(e,n,r){return N.current.useReducer(e,n,r)},n.useRef=function(e){return N.current.useRef(e)},n.useState=function(e){return N.current.useState(e)},n.useSyncExternalStore=function(e,n,r){return N.current.useSyncExternalStore(e,n,r)},n.useTransition=function(){return N.current.useTransition()},n.version="18.2.0"},827378:(e,n,r)=>{e.exports=r(541535)},824246:(e,n,r)=>{e.exports=r(371426)},511151:(e,n,r)=>{r.d(n,{Zo:()=>s,ah:()=>c});var t=r(667294);const o=t.createContext({});function c(e){const n=t.useContext(o);return t.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const u={};function s({components:e,children:n,disableParentContext:r}){let s;return s=r?"function"==typeof e?e({}):e||u:c(e),t.createElement(o.Provider,{value:s},n)}}}]);