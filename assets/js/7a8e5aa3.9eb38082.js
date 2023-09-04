/*! For license information please see 7a8e5aa3.9eb38082.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[787129],{948018:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var r=n(824246),o=n(511151);const i={id:"adopting",title:"Strategies for adopting",description:"Documentation on some general best practices that have been key to Backstage's success inside Spotify"},s=void 0,a={unversionedId:"overview/adopting",id:"overview/adopting",title:"Strategies for adopting",description:"Documentation on some general best practices that have been key to Backstage's success inside Spotify",source:"@site/../docs/overview/adopting.md",sourceDirName:"overview",slug:"/overview/adopting",permalink:"/docs/overview/adopting",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/overview/adopting.md",tags:[],version:"current",frontMatter:{id:"adopting",title:"Strategies for adopting",description:"Documentation on some general best practices that have been key to Backstage's success inside Spotify"},sidebar:"docs",previous:{title:"The Spotify Story",permalink:"/docs/overview/background"},next:{title:"Release & Versioning Policy",permalink:"/docs/overview/versioning-policy"}},c={},l=[{value:"Organizational setup",id:"organizational-setup",level:2},{value:"Internal evangelization",id:"internal-evangelization",level:2},{value:"Tactics",id:"tactics",level:3},{value:"KPIs and metrics",id:"kpis-and-metrics",level:2}];function u(e){const t=Object.assign({p:"p",h2:"h2",em:"em",strong:"strong",ol:"ol",li:"li",a:"a",img:"img",blockquote:"blockquote",h3:"h3",ul:"ul"},(0,o.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"This document outlines some general best practices that have been key to\nBackstage's success inside Spotify. Every organization is different and some of\nthese learnings will therefore not be applicable for your company. We are hoping\nthat this can become a living document, and strongly encourage you to contribute\nback whatever learnings you gather while adopting Backstage inside your company."}),"\n",(0,r.jsx)(t.h2,{id:"organizational-setup",children:"Organizational setup"}),"\n",(0,r.jsxs)(t.p,{children:["The true value of Backstage is unlocked when it becomes ",(0,r.jsx)(t.em,{children:"THE"})," developer portal\nat your company. As such it is important to recognize that you will need a\ncentral team that owns your Backstage deployment and treats it like a product."]}),"\n",(0,r.jsxs)(t.p,{children:["This team will have ",(0,r.jsx)(t.strong,{children:"four"})," primary objectives:"]}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"Maintain and operate your deployment of Backstage. This includes customer\nsupport, infrastructure, CI/CD and, as your Backstage product grows, on-call\nsupport."}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"Drive adoption of customers (developers at your company)."}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["Work with senior tech leadership and architects to ensure your organization's\nbest practices for software development are encoded into a set of\n",(0,r.jsx)(t.a,{href:"/docs/features/software-templates/",children:"Software Templates"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"Evangelize Backstage as a central platform towards other\ninfrastructure/platform teams."}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"internal-evangelization",children:"Internal evangelization"}),"\n",(0,r.jsx)(t.p,{children:'The last objective deserves more attention, since it is the least obvious, but\nalso the most critical to successfully creating a consolidated platform. When\ndone right, Backstage acts as a "platform of platforms" or marketplace between\ninfra/platform teams and end-users:'}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"pop",src:n(803797).Z+"",width:"1180",height:"660"})}),"\n",(0,r.jsxs)(t.p,{children:["While anyone at your company can contribute to the platform, the vast majority\nof work will be done by teams that also have internal engineers as their\ncustomers. The central team should treat these ",(0,r.jsx)(t.em,{children:"contributing teams"})," as customers\nof the platform as well."]}),"\n",(0,r.jsxs)(t.p,{children:["These teams should be able to autonomously deliver value directly to their\ncustomers. This is done primarily by building ",(0,r.jsx)(t.a,{href:"/docs/plugins/",children:"plugins"}),".\nContributing teams should themselves treat their plugins as, or part of, the\nproducts they maintain."]}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsxs)(t.p,{children:["Case study: Inside Spotify we have a team that owns our CI platform. They not\nonly maintain the pipelines and build servers, but also expose their product\nin Backstage through a plugin. Since they also\n",(0,r.jsx)(t.a,{href:"/docs/plugins/call-existing-api",children:"maintain their own API"}),", they can improve\ntheir product by iterating on API and UI in lockstep. Because the plugin\nfollows our ",(0,r.jsx)(t.a,{href:"/docs/dls/design",children:"platform design guidelines"})," their customers get\na CI experience that is consistent with other tools on the platform (and users\ndon't have to become experts in Jenkins)."]}),"\n"]}),"\n",(0,r.jsx)(t.h3,{id:"tactics",children:"Tactics"}),"\n",(0,r.jsx)(t.p,{children:"Examples of tactics we have used to evangelize Backstage internally:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:'Arrange "Lunch & Learns" and seminars. Frequently offer teams interested in\nBackstage development to come to a seminar where you show, for example, how to\nbuild a plugin from scratch.'}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:'Embedding. As contributing teams start development of their first plugin it is\noften very appreciated to have one person from the central team come over and\n"embed" for a Sprint or two.'}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"Hack days. Backstage-focused Hackathons or hack days is a fun way to get\npeople into plugin development."}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"Show & tell meetings. In order to build an internal community around Backstage\nwe have quarterly meetings where anyone working on Backstage is invited to\npresent their work. This is not only a great way to get early feedback, but\nalso helps coordination between teams that are building overlapping\nexperiences."}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"Provide metrics. Add instrumentation to your Backstage deployment and make\nmetrics available to contributing teams. At Spotify, we have even gone so far\nas to send out weekly digest emails showing how usage metrics have changed for\nindividual plugins."}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"Pro-actively identify new plugins. Reach out to teams that own internal UIs or\nplatforms that you think would make sense to consolidate into Backstage."}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"kpis-and-metrics",children:"KPIs and metrics"}),"\n",(0,r.jsx)(t.p,{children:"These are some of the metrics that you can use to verify if Backstage has a\nsuccessful impact on your software development process:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Onboarding time"})," Time until new engineers are productive. At Spotify we\nmeasure this as the time until the employee has merged their 10th PR (this\nmetric was down 55% two years after deploying Backstage). Even though you may\nnot be onboarding engineers at a rapid pace, this metric is a great proxy for\nthe overall complexity of your ecosystem. Reducing it will therefore benefit\nyour whole engineering organization, not just new joiners."]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Number of merges per developer/day"})," Less time spent jumping between\ndifferent tools and looking for information means more time to focus on\nshipping code. A second level of bottlenecks can be identified if you\ncategorize contributions by domain (services, web, data, etc)."]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Deploys to production"})," Cousin to the metric above: How many times does an\nengineer push changes into production."]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"MTTR"})," With clear ownership of all the pieces in your microservices\necosystem and all tools integrated into one place, Backstage makes it quicker\nfor teams to find the root cause of failures, and fix them."]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Context switching"}),' Reducing context switching can help engineers stay in\nthe "zone". We measure the number of different tools an engineer has to\ninteract with in order to get a certain job done (e.g. push a change, follow\nit into production and validate it did not break anything).']}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"T-shapedness"})," A\n",(0,r.jsx)(t.a,{href:"https://medium.com/@jchyip/why-t-shaped-people-e8706198e437",children:"T-shaped"}),"\nengineer is someone that is able to contribute to different domains of\nengineering. Teams with T-shaped people have fewer bottlenecks and can\ntherefore deliver more consistently. Backstage makes it easier to be T-shaped\nsince tools and infrastructure are consistent between domains, and information\nis available centrally."]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"eNPS"})," Surveys asking about how productive people feel, how easy it is to\nfind information and overall satisfaction with internal tools."]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Fragmentation"})," ",(0,r.jsx)(t.em,{children:"(Experimental)"})," Backstage\n",(0,r.jsx)(t.a,{href:"/docs/features/software-templates/",children:"Software Templates"})," help drive\nstandardization in your software ecosystem. By measuring the variance in\ntechnology between different software components it is possible to get a sense\nof the overall fragmentation in your ecosystem. Examples could include:\nframework versions, languages, deployment methods and various code quality\nmeasurements."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["Additionally, these proxy metrics can be used to validate the success of\nBackstage as ",(0,r.jsx)(t.em,{children:"the"})," platform:"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"Nr of teams that have contributed at least one plugin (currently 63 inside\nSpotify)"}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"Nr of total plugins (currently 135 inside Spotify)"}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"% of contributions coming from outside the central Backstage team (currently\n85% inside Spotify)"}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"Traditional metrics such as visits (MAU, DAU, etc) and page views. Currently\n~50% of all Spotifiers use Backstage on a monthly basis, even though the\npercentage of engineers is below 50%. Most engineers actually use Backstage on\na daily basis."}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"Again, any feedback is appreciated. Please use the Edit button at the bottom of the\npage to make a suggestion."}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsxs)(t.em,{children:[(0,r.jsx)(t.strong,{children:"Note!"}),' It might be tempting to try to optimize Backstage usage and\n"engagement". Even though you want to consolidate all your tooling and technical\ndocumentation in Backstage, it is important to remember that time spent in\nBackstage is time not spent writing code']})," \ud83d\ude43"]})]})}const d=function(e={}){const{wrapper:t}=Object.assign({},(0,o.ah)(),e.components);return t?(0,r.jsx)(t,Object.assign({},e,{children:(0,r.jsx)(u,e)})):u(e)}},803797:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/pop-347af6a9b37c1529dbef0fa692798aad.png"},862525:e=>{var t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(o){return!1}}()?Object.assign:function(e,o){for(var i,s,a=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),c=1;c<arguments.length;c++){for(var l in i=Object(arguments[c]))n.call(i,l)&&(a[l]=i[l]);if(t){s=t(i);for(var u=0;u<s.length;u++)r.call(i,s[u])&&(a[s[u]]=i[s[u]])}}return a}},371426:(e,t,n)=>{n(862525);var r=n(827378),o=60103;if(t.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var i=Symbol.for;o=i("react.element"),t.Fragment=i("react.fragment")}var s=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a=Object.prototype.hasOwnProperty,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,n){var r,i={},l=null,u=null;for(r in void 0!==n&&(l=""+n),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(u=t.ref),t)a.call(t,r)&&!c.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===i[r]&&(i[r]=t[r]);return{$$typeof:o,type:e,key:l,ref:u,props:i,_owner:s.current}}t.jsx=l,t.jsxs=l},541535:(e,t,n)=>{var r=n(862525),o=60103,i=60106;t.Fragment=60107,t.StrictMode=60108,t.Profiler=60114;var s=60109,a=60110,c=60112;t.Suspense=60113;var l=60115,u=60116;if("function"==typeof Symbol&&Symbol.for){var d=Symbol.for;o=d("react.element"),i=d("react.portal"),t.Fragment=d("react.fragment"),t.StrictMode=d("react.strict_mode"),t.Profiler=d("react.profiler"),s=d("react.provider"),a=d("react.context"),c=d("react.forward_ref"),t.Suspense=d("react.suspense"),l=d("react.memo"),u=d("react.lazy")}var p="function"==typeof Symbol&&Symbol.iterator;function h(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var f={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m={};function g(e,t,n){this.props=e,this.context=t,this.refs=m,this.updater=n||f}function y(){}function v(e,t,n){this.props=e,this.context=t,this.refs=m,this.updater=n||f}g.prototype.isReactComponent={},g.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(h(85));this.updater.enqueueSetState(this,e,t,"setState")},g.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},y.prototype=g.prototype;var b=v.prototype=new y;b.constructor=v,r(b,g.prototype),b.isPureReactComponent=!0;var j={current:null},w=Object.prototype.hasOwnProperty,x={key:!0,ref:!0,__self:!0,__source:!0};function k(e,t,n){var r,i={},s=null,a=null;if(null!=t)for(r in void 0!==t.ref&&(a=t.ref),void 0!==t.key&&(s=""+t.key),t)w.call(t,r)&&!x.hasOwnProperty(r)&&(i[r]=t[r]);var c=arguments.length-2;if(1===c)i.children=n;else if(1<c){for(var l=Array(c),u=0;u<c;u++)l[u]=arguments[u+2];i.children=l}if(e&&e.defaultProps)for(r in c=e.defaultProps)void 0===i[r]&&(i[r]=c[r]);return{$$typeof:o,type:e,key:s,ref:a,props:i,_owner:j.current}}function _(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var S=/\/+/g;function O(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function E(e,t,n,r,s){var a=typeof e;"undefined"!==a&&"boolean"!==a||(e=null);var c=!1;if(null===e)c=!0;else switch(a){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case o:case i:c=!0}}if(c)return s=s(c=e),e=""===r?"."+O(c,0):r,Array.isArray(s)?(n="",null!=e&&(n=e.replace(S,"$&/")+"/"),E(s,t,n,"",(function(e){return e}))):null!=s&&(_(s)&&(s=function(e,t){return{$$typeof:o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(s,n+(!s.key||c&&c.key===s.key?"":(""+s.key).replace(S,"$&/")+"/")+e)),t.push(s)),1;if(c=0,r=""===r?".":r+":",Array.isArray(e))for(var l=0;l<e.length;l++){var u=r+O(a=e[l],l);c+=E(a,t,n,u,s)}else if(u=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e),"function"==typeof u)for(e=u.call(e),l=0;!(a=e.next()).done;)c+=E(a=a.value,t,n,u=r+O(a,l++),s);else if("object"===a)throw t=""+e,Error(h(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return c}function C(e,t,n){if(null==e)return e;var r=[],o=0;return E(e,r,"","",(function(e){return t.call(n,e,o++)})),r}function B(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var T={current:null};function P(){var e=T.current;if(null===e)throw Error(h(321));return e}var R={ReactCurrentDispatcher:T,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:j,IsSomeRendererActing:{current:!1},assign:r};t.Children={map:C,forEach:function(e,t,n){C(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return C(e,(function(){t++})),t},toArray:function(e){return C(e,(function(e){return e}))||[]},only:function(e){if(!_(e))throw Error(h(143));return e}},t.Component=g,t.PureComponent=v,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=R,t.cloneElement=function(e,t,n){if(null==e)throw Error(h(267,e));var i=r({},e.props),s=e.key,a=e.ref,c=e._owner;if(null!=t){if(void 0!==t.ref&&(a=t.ref,c=j.current),void 0!==t.key&&(s=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(u in t)w.call(t,u)&&!x.hasOwnProperty(u)&&(i[u]=void 0===t[u]&&void 0!==l?l[u]:t[u])}var u=arguments.length-2;if(1===u)i.children=n;else if(1<u){l=Array(u);for(var d=0;d<u;d++)l[d]=arguments[d+2];i.children=l}return{$$typeof:o,type:e.type,key:s,ref:a,props:i,_owner:c}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:a,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:s,_context:e},e.Consumer=e},t.createElement=k,t.createFactory=function(e){var t=k.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:c,render:e}},t.isValidElement=_,t.lazy=function(e){return{$$typeof:u,_payload:{_status:-1,_result:e},_init:B}},t.memo=function(e,t){return{$$typeof:l,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return P().useCallback(e,t)},t.useContext=function(e,t){return P().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return P().useEffect(e,t)},t.useImperativeHandle=function(e,t,n){return P().useImperativeHandle(e,t,n)},t.useLayoutEffect=function(e,t){return P().useLayoutEffect(e,t)},t.useMemo=function(e,t){return P().useMemo(e,t)},t.useReducer=function(e,t,n){return P().useReducer(e,t,n)},t.useRef=function(e){return P().useRef(e)},t.useState=function(e){return P().useState(e)},t.version="17.0.2"},827378:(e,t,n)=>{e.exports=n(541535)},824246:(e,t,n)=>{e.exports=n(371426)},511151:(e,t,n)=>{n.d(t,{Zo:()=>a,ah:()=>i});var r=n(667294);const o=r.createContext({});function i(e){const t=r.useContext(o);return r.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const s={};function a({components:e,children:t,disableParentContext:n}){let a;return a=n?"function"==typeof e?e({}):e||s:i(e),r.createElement(o.Provider,{value:a},t)}}}]);