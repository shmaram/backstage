/*! For license information please see 708f9dc5.5e22ebfb.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[666160],{705602:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>f,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var n=r(824246),o=r(511151);const a={id:"org",title:"GitLab Organizational Data",sidebar_label:"Org Data",description:"Importing users and groups from GitLab into Backstage"},i=void 0,s={unversionedId:"integrations/gitlab/org",id:"integrations/gitlab/org",title:"GitLab Organizational Data",description:"Importing users and groups from GitLab into Backstage",source:"@site/../docs/integrations/gitlab/org.md",sourceDirName:"integrations/gitlab",slug:"/integrations/gitlab/org",permalink:"/docs/integrations/gitlab/org",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/integrations/gitlab/org.md",tags:[],version:"current",frontMatter:{id:"org",title:"GitLab Organizational Data",sidebar_label:"Org Data",description:"Importing users and groups from GitLab into Backstage"},sidebar:"docs",previous:{title:"Discovery",permalink:"/docs/integrations/gitlab/discovery"},next:{title:"Locations",permalink:"/docs/integrations/gitea/locations"}},c={},u=[{value:"Configuration",id:"configuration",level:2}];function l(e){const t=Object.assign({p:"p",a:"a",code:"code",pre:"pre",h2:"h2"},(0,o.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["The Backstage catalog can be set up to ingest organizational data -- users and\ngroups -- directly from GitLab. The result is a hierarchy of\n",(0,n.jsx)(t.a,{href:"/docs/features/software-catalog/descriptor-format#kind-user",children:(0,n.jsx)(t.code,{children:"User"})})," and\n",(0,n.jsx)(t.a,{href:"/docs/features/software-catalog/descriptor-format#kind-group",children:(0,n.jsx)(t.code,{children:"Group"})}),"\nentities that mirrors your org setup."]}),"\n",(0,n.jsx)(t.p,{children:"As this provider is not one of the default providers, you will first need to install the Gitlab provider plugin:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"# From your Backstage root directory\nyarn add --cwd packages/backend @backstage/plugin-catalog-backend-module-gitlab\n"})}),"\n",(0,n.jsxs)(t.p,{children:["Then add the plugin to the plugin catalog ",(0,n.jsx)(t.code,{children:"packages/backend/src/plugins/catalog.ts"}),":"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-ts",children:"/* packages/backend/src/plugins/catalog.ts */\n/* highlight-add-next-line */\nimport { GitlabOrgDiscoveryEntityProvider } from '@backstage/plugin-catalog-backend-module-gitlab';\n\nconst builder = await CatalogBuilder.create(env);\n/** ... other processors and/or providers ... */\n/* highlight-add-start */\nbuilder.addEntityProvider(\n  ...GitlabOrgDiscoveryEntityProvider.fromConfig(env.config, {\n    logger: env.logger,\n    // optional: alternatively, use scheduler with schedule defined in app-config.yaml\n    schedule: env.scheduler.createScheduledTaskRunner({\n      frequency: { minutes: 30 },\n      timeout: { minutes: 3 },\n    }),\n  }),\n);\n/* highlight-add-end */\n"})}),"\n",(0,n.jsx)(t.h2,{id:"configuration",children:"Configuration"}),"\n",(0,n.jsxs)(t.p,{children:["To use the entity provider, you'll need a ",(0,n.jsx)(t.a,{href:"https://backstage.io/docs/integrations/gitlab/locations",children:"Gitlab integration set up"}),"."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-yaml",children:"integrations:\n  gitlab:\n    - host: gitlab.com\n      token: ${GITLAB_TOKEN}\n"})}),"\n",(0,n.jsx)(t.p,{children:"This will query all users and groups from your GitLab instance. Depending on the\namount of data, this can take significant time and resources."}),"\n",(0,n.jsxs)(t.p,{children:["The token used must have the ",(0,n.jsx)(t.code,{children:"read_api"})," scope, and the Users and Groups fetched\nwill be those visible to the account which provisioned the token."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-yaml",children:"catalog:\n  providers:\n    gitlab:\n      yourProviderId:\n        host: gitlab.com\n        orgEnabled: true\n        group: org/teams # Optional. Must not end with slash. Accepts only groups under the provided path (which will be stripped)\n        groupPattern: '[\\s\\S]*' # Optional. Filters found groups based on provided pattern. Defaults to `[\\s\\S]*`, which means to not filter anything\n"})}),"\n",(0,n.jsxs)(t.p,{children:["When the ",(0,n.jsx)(t.code,{children:"group"})," parameter is provided, the corresponding path prefix will be\nstripped out from each matching group when computing the unique entity name.\ne.g. If ",(0,n.jsx)(t.code,{children:"group"})," is ",(0,n.jsx)(t.code,{children:"org/teams"}),", the name for ",(0,n.jsx)(t.code,{children:"org/teams/avengers/gotg"})," will be\n",(0,n.jsx)(t.code,{children:"avengers-gotg"}),"."]})]})}const f=function(e={}){const{wrapper:t}=Object.assign({},(0,o.ah)(),e.components);return t?(0,n.jsx)(t,Object.assign({},e,{children:(0,n.jsx)(l,e)})):l(e)}},862525:e=>{var t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}}()?Object.assign:function(e,o){for(var a,i,s=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),c=1;c<arguments.length;c++){for(var u in a=Object(arguments[c]))r.call(a,u)&&(s[u]=a[u]);if(t){i=t(a);for(var l=0;l<i.length;l++)n.call(a,i[l])&&(s[i[l]]=a[i[l]])}}return s}},371426:(e,t,r)=>{r(862525);var n=r(827378),o=60103;if(t.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var a=Symbol.for;o=a("react.element"),t.Fragment=a("react.fragment")}var i=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s=Object.prototype.hasOwnProperty,c={key:!0,ref:!0,__self:!0,__source:!0};function u(e,t,r){var n,a={},u=null,l=null;for(n in void 0!==r&&(u=""+r),void 0!==t.key&&(u=""+t.key),void 0!==t.ref&&(l=t.ref),t)s.call(t,n)&&!c.hasOwnProperty(n)&&(a[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===a[n]&&(a[n]=t[n]);return{$$typeof:o,type:e,key:u,ref:l,props:a,_owner:i.current}}t.jsx=u,t.jsxs=u},541535:(e,t,r)=>{var n=r(862525),o=60103,a=60106;t.Fragment=60107,t.StrictMode=60108,t.Profiler=60114;var i=60109,s=60110,c=60112;t.Suspense=60113;var u=60115,l=60116;if("function"==typeof Symbol&&Symbol.for){var f=Symbol.for;o=f("react.element"),a=f("react.portal"),t.Fragment=f("react.fragment"),t.StrictMode=f("react.strict_mode"),t.Profiler=f("react.profiler"),i=f("react.provider"),s=f("react.context"),c=f("react.forward_ref"),t.Suspense=f("react.suspense"),u=f("react.memo"),l=f("react.lazy")}var d="function"==typeof Symbol&&Symbol.iterator;function p(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var g={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h={};function y(e,t,r){this.props=e,this.context=t,this.refs=h,this.updater=r||g}function m(){}function b(e,t,r){this.props=e,this.context=t,this.refs=h,this.updater=r||g}y.prototype.isReactComponent={},y.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(p(85));this.updater.enqueueSetState(this,e,t,"setState")},y.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},m.prototype=y.prototype;var v=b.prototype=new m;v.constructor=b,n(v,y.prototype),v.isPureReactComponent=!0;var _={current:null},j=Object.prototype.hasOwnProperty,k={key:!0,ref:!0,__self:!0,__source:!0};function w(e,t,r){var n,a={},i=null,s=null;if(null!=t)for(n in void 0!==t.ref&&(s=t.ref),void 0!==t.key&&(i=""+t.key),t)j.call(t,n)&&!k.hasOwnProperty(n)&&(a[n]=t[n]);var c=arguments.length-2;if(1===c)a.children=r;else if(1<c){for(var u=Array(c),l=0;l<c;l++)u[l]=arguments[l+2];a.children=u}if(e&&e.defaultProps)for(n in c=e.defaultProps)void 0===a[n]&&(a[n]=c[n]);return{$$typeof:o,type:e,key:i,ref:s,props:a,_owner:_.current}}function x(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var O=/\/+/g;function S(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function E(e,t,r,n,i){var s=typeof e;"undefined"!==s&&"boolean"!==s||(e=null);var c=!1;if(null===e)c=!0;else switch(s){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case o:case a:c=!0}}if(c)return i=i(c=e),e=""===n?"."+S(c,0):n,Array.isArray(i)?(r="",null!=e&&(r=e.replace(O,"$&/")+"/"),E(i,t,r,"",(function(e){return e}))):null!=i&&(x(i)&&(i=function(e,t){return{$$typeof:o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(i,r+(!i.key||c&&c.key===i.key?"":(""+i.key).replace(O,"$&/")+"/")+e)),t.push(i)),1;if(c=0,n=""===n?".":n+":",Array.isArray(e))for(var u=0;u<e.length;u++){var l=n+S(s=e[u],u);c+=E(s,t,r,l,i)}else if(l=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=d&&e[d]||e["@@iterator"])?e:null}(e),"function"==typeof l)for(e=l.call(e),u=0;!(s=e.next()).done;)c+=E(s=s.value,t,r,l=n+S(s,u++),i);else if("object"===s)throw t=""+e,Error(p(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return c}function C(e,t,r){if(null==e)return e;var n=[],o=0;return E(e,n,"","",(function(e){return t.call(r,e,o++)})),n}function P(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var $={current:null};function R(){var e=$.current;if(null===e)throw Error(p(321));return e}var I={ReactCurrentDispatcher:$,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:_,IsSomeRendererActing:{current:!1},assign:n};t.Children={map:C,forEach:function(e,t,r){C(e,(function(){t.apply(this,arguments)}),r)},count:function(e){var t=0;return C(e,(function(){t++})),t},toArray:function(e){return C(e,(function(e){return e}))||[]},only:function(e){if(!x(e))throw Error(p(143));return e}},t.Component=y,t.PureComponent=b,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=I,t.cloneElement=function(e,t,r){if(null==e)throw Error(p(267,e));var a=n({},e.props),i=e.key,s=e.ref,c=e._owner;if(null!=t){if(void 0!==t.ref&&(s=t.ref,c=_.current),void 0!==t.key&&(i=""+t.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(l in t)j.call(t,l)&&!k.hasOwnProperty(l)&&(a[l]=void 0===t[l]&&void 0!==u?u[l]:t[l])}var l=arguments.length-2;if(1===l)a.children=r;else if(1<l){u=Array(l);for(var f=0;f<l;f++)u[f]=arguments[f+2];a.children=u}return{$$typeof:o,type:e.type,key:i,ref:s,props:a,_owner:c}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:s,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:i,_context:e},e.Consumer=e},t.createElement=w,t.createFactory=function(e){var t=w.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:c,render:e}},t.isValidElement=x,t.lazy=function(e){return{$$typeof:l,_payload:{_status:-1,_result:e},_init:P}},t.memo=function(e,t){return{$$typeof:u,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return R().useCallback(e,t)},t.useContext=function(e,t){return R().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return R().useEffect(e,t)},t.useImperativeHandle=function(e,t,r){return R().useImperativeHandle(e,t,r)},t.useLayoutEffect=function(e,t){return R().useLayoutEffect(e,t)},t.useMemo=function(e,t){return R().useMemo(e,t)},t.useReducer=function(e,t,r){return R().useReducer(e,t,r)},t.useRef=function(e){return R().useRef(e)},t.useState=function(e){return R().useState(e)},t.version="17.0.2"},827378:(e,t,r)=>{e.exports=r(541535)},824246:(e,t,r)=>{e.exports=r(371426)},511151:(e,t,r)=>{r.d(t,{Zo:()=>s,ah:()=>a});var n=r(667294);const o=n.createContext({});function a(e){const t=n.useContext(o);return n.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const i={};function s({components:e,children:t,disableParentContext:r}){let s;return s=r?"function"==typeof e?e({}):e||i:a(e),n.createElement(o.Provider,{value:s},t)}}}]);