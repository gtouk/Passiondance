(()=>{var e={};e.id=524,e.ids=[524],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},1506:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>i.a,__next_app__:()=>f,originalPathname:()=>u,pages:()=>d,routeModule:()=>h,tree:()=>c}),r(8951),r(525),r(695);var n=r(3191),s=r(8716),o=r(7922),i=r.n(o),a=r(5231),l={};for(let e in a)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>a[e]);r.d(t,l);let c=["",{children:["[...not-found]",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,8951)),"C:\\Users\\touka\\Documents\\Uottawa\\Ete 2024\\SEG3525\\Serena\\Passiondance\\src\\app\\[...not-found]\\page.js"]}]},{}]},{layout:[()=>Promise.resolve().then(r.bind(r,525)),"C:\\Users\\touka\\Documents\\Uottawa\\Ete 2024\\SEG3525\\Serena\\Passiondance\\src\\app\\layout.js"],"not-found":[()=>Promise.resolve().then(r.bind(r,695)),"C:\\Users\\touka\\Documents\\Uottawa\\Ete 2024\\SEG3525\\Serena\\Passiondance\\src\\app\\not-found.js"]}],d=["C:\\Users\\touka\\Documents\\Uottawa\\Ete 2024\\SEG3525\\Serena\\Passiondance\\src\\app\\[...not-found]\\page.js"],u="/[...not-found]/page",f={require:r,loadChunk:()=>Promise.resolve()},h=new n.AppPageRouteModule({definition:{kind:s.x.APP_PAGE,page:"/[...not-found]/page",pathname:"/[...not-found]",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},4009:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,2994,23)),Promise.resolve().then(r.t.bind(r,6114,23)),Promise.resolve().then(r.t.bind(r,9727,23)),Promise.resolve().then(r.t.bind(r,9671,23)),Promise.resolve().then(r.t.bind(r,1868,23)),Promise.resolve().then(r.t.bind(r,4759,23))},7168:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,9404,23)),Promise.resolve().then(r.bind(r,4840))},5777:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,9404,23))},5303:()=>{},4840:(e,t,r)=>{"use strict";r.d(t,{default:()=>a});var n=r(326),s=r(7577),o=r(5047),i=r(434);function a(){let[e,t]=(0,s.useState)(!1),r="/"===(0,o.usePathname)(),a=()=>{e&&t(!1)};return n.jsx("header",{className:`header ${r&&"abs-header"}`,children:n.jsx("div",{className:"container",children:(0,n.jsxs)("div",{className:"row align-items-end",children:[n.jsx("div",{className:"col-md-3",children:n.jsx(i.default,{href:"/",className:"logo",children:n.jsx("img",{src:"/assets/images/logo.png",alt:""})})}),n.jsx("div",{className:`col-md-9${r?"":" text-right"}`,children:(0,n.jsxs)("nav",{className:"primary-menu",children:[n.jsx("button",{className:"mobile-menu",onClick:()=>{t(!e)},children:n.jsx("i",{className:"ti-menu"})}),(0,n.jsxs)("ul",{className:e?"active":"",children:[n.jsx("li",{children:n.jsx(i.default,{href:"/",onClick:a,children:"Home"})}),n.jsx("li",{children:n.jsx(i.default,{href:"/about",onClick:a,children:"About"})}),n.jsx("li",{children:n.jsx(i.default,{href:"/feature",onClick:a,children:"feature"})}),n.jsx("li",{children:n.jsx(i.default,{href:"/services",onClick:a,children:"service"})}),n.jsx("li",{children:n.jsx(i.default,{href:"/blog",onClick:a,children:"blog"})}),n.jsx("li",{children:n.jsx(i.default,{href:"/contact",onClick:a,children:"Contact"})})]})]})})]})})})}},1085:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{ReadonlyURLSearchParams:function(){return i},RedirectType:function(){return n.RedirectType},notFound:function(){return s.notFound},permanentRedirect:function(){return n.permanentRedirect},redirect:function(){return n.redirect}});let n=r(3953),s=r(6399);class o extends Error{constructor(){super("Method unavailable on `ReadonlyURLSearchParams`. Read more: https://nextjs.org/docs/app/api-reference/functions/use-search-params#updating-searchparams")}}class i extends URLSearchParams{append(){throw new o}delete(){throw new o}set(){throw new o}sort(){throw new o}}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6399:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{isNotFoundError:function(){return s},notFound:function(){return n}});let r="NEXT_NOT_FOUND";function n(){let e=Error(r);throw e.digest=r,e}function s(e){return"object"==typeof e&&null!==e&&"digest"in e&&e.digest===r}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8586:(e,t)=>{"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"RedirectStatusCode",{enumerable:!0,get:function(){return r}}),function(e){e[e.SeeOther=303]="SeeOther",e[e.TemporaryRedirect=307]="TemporaryRedirect",e[e.PermanentRedirect=308]="PermanentRedirect"}(r||(r={})),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3953:(e,t,r)=>{"use strict";var n;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{RedirectType:function(){return n},getRedirectError:function(){return l},getRedirectStatusCodeFromError:function(){return p},getRedirectTypeFromError:function(){return h},getURLFromRedirectError:function(){return f},isRedirectError:function(){return u},permanentRedirect:function(){return d},redirect:function(){return c}});let s=r(4580),o=r(2934),i=r(8586),a="NEXT_REDIRECT";function l(e,t,r){void 0===r&&(r=i.RedirectStatusCode.TemporaryRedirect);let n=Error(a);n.digest=a+";"+t+";"+e+";"+r+";";let o=s.requestAsyncStorage.getStore();return o&&(n.mutableCookies=o.mutableCookies),n}function c(e,t){void 0===t&&(t="replace");let r=o.actionAsyncStorage.getStore();throw l(e,t,(null==r?void 0:r.isAction)?i.RedirectStatusCode.SeeOther:i.RedirectStatusCode.TemporaryRedirect)}function d(e,t){void 0===t&&(t="replace");let r=o.actionAsyncStorage.getStore();throw l(e,t,(null==r?void 0:r.isAction)?i.RedirectStatusCode.SeeOther:i.RedirectStatusCode.PermanentRedirect)}function u(e){if("object"!=typeof e||null===e||!("digest"in e)||"string"!=typeof e.digest)return!1;let[t,r,n,s]=e.digest.split(";",4),o=Number(s);return t===a&&("replace"===r||"push"===r)&&"string"==typeof n&&!isNaN(o)&&o in i.RedirectStatusCode}function f(e){return u(e)?e.digest.split(";",3)[2]:null}function h(e){if(!u(e))throw Error("Not a redirect error");return e.digest.split(";",2)[1]}function p(e){if(!u(e))throw Error("Not a redirect error");return Number(e.digest.split(";",4)[3])}(function(e){e.push="push",e.replace="replace"})(n||(n={})),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8951:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>s});var n=r(1085);function s(){(0,n.notFound)()}},525:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>f,metadata:()=>u});var n=r(9510),s=r(8570);let o=(0,s.createProxy)(String.raw`C:\Users\touka\Documents\Uottawa\Ete 2024\SEG3525\Serena\Passiondance\src\components\Navbar.js`),{__esModule:i,$$typeof:a}=o;o.default;let l=(0,s.createProxy)(String.raw`C:\Users\touka\Documents\Uottawa\Ete 2024\SEG3525\Serena\Passiondance\src\components\Navbar.js#default`);r(1159);var c=r(7371);function d(e){return n.jsx("footer",{className:"footer",children:n.jsx("div",{className:"container",children:n.jsx("div",{className:"row",children:(0,n.jsxs)("div",{className:"col-12 text-center",children:[n.jsx(c.default,{href:"index.html",className:"logo foo-logo",children:n.jsx("img",{src:"/assets/images/logo.png",alt:""})}),n.jsx("nav",{className:"foo-nav",children:(0,n.jsxs)("ul",{children:[n.jsx("li",{children:n.jsx(c.default,{href:"#",children:"Home"})}),n.jsx("li",{children:n.jsx(c.default,{href:"#",children:"About"})}),n.jsx("li",{children:n.jsx(c.default,{href:"#",children:"feature"})}),n.jsx("li",{children:n.jsx(c.default,{href:"#",children:"service"})}),n.jsx("li",{children:n.jsx(c.default,{href:"#",children:"Contact"})})]})}),(0,n.jsxs)("div",{className:"foo-social",children:[n.jsx(c.default,{href:"#",children:n.jsx("i",{className:"ti-facebook"})}),n.jsx(c.default,{href:"#",children:n.jsx("i",{className:"ti-twitter-alt"})}),n.jsx(c.default,{href:"#",children:n.jsx("i",{className:"ti-vimeo-alt"})}),n.jsx(c.default,{href:"#",children:n.jsx("i",{className:"ti-instagram"})})]}),(0,n.jsxs)("p",{className:"copyright",children:["\xa9 COPYRIGHT 2024"," ",n.jsx("a",{href:"https://themeies.com",children:"PassionDanse"})," ALL RIGHTS RESERVED."]})]})})})})}r(3756),r(4748),r(1676);let u={title:"Spa - Latest",description:"Modern salon app"};function f({children:e}){return n.jsx("html",{lang:"en",children:(0,n.jsxs)("body",{children:[n.jsx(l,{}),e,n.jsx(d,{})]})})}},695:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>i});var n=r(9510),s=r(7371);function o(e){return(0,n.jsxs)("section",{className:"container error text-center",children:[n.jsx("strong",{children:"404"}),n.jsx("h2",{children:"Oops! Page Not Found"}),n.jsx(s.default,{href:"/",className:"btn btn-filled btn-round",children:"Back to Home"})]})}function i(){return n.jsx(o,{})}},3756:()=>{},1676:()=>{},4748:()=>{}};var t=require("../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),n=t.X(0,[948,895],()=>r(1506));module.exports=n})();