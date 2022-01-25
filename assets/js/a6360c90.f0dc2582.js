"use strict";(self.webpackChunkoptimus=self.webpackChunkoptimus||[]).push([[7088],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(r),m=i,g=d["".concat(c,".").concat(m)]||d[m]||p[m]||a;return r?n.createElement(g,o(o({ref:t},u),{},{components:r})):n.createElement(g,o({ref:t},u))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var l=2;l<a;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},6092:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return u},default:function(){return d}});var n=r(7462),i=r(3366),a=(r(7294),r(3905)),o=["components"],s={id:"secret",title:"Manage Secrets"},c=void 0,l={unversionedId:"guides/secret",id:"guides/secret",isDocsHomePage:!1,title:"Manage Secrets",description:"During job execution, specific credentials are needed to access required resources, for example, BigQuery credential",source:"@site/docs/guides/manage-secrets.md",sourceDirName:"guides",slug:"/guides/secret",permalink:"/optimus/docs/guides/secret",editUrl:"https://github.com/odpf/optimus/edit/master/docs/docs/guides/manage-secrets.md",tags:[],version:"current",lastUpdatedBy:"Arinda Arif",lastUpdatedAt:1643098090,formattedLastUpdatedAt:"1/25/2022",frontMatter:{id:"secret",title:"Manage Secrets"},sidebar:"docsSidebar",previous:{title:"Backfill jobs using Replay",permalink:"/optimus/docs/guides/replay"},next:{title:"Overview",permalink:"/optimus/docs/concepts/overview"}},u=[{value:"Registering secret with Optimus",id:"registering-secret-with-optimus",children:[]},{value:"Updating a secret",id:"updating-a-secret",children:[]}],p={toc:u};function d(e){var t=e.components,r=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"During job execution, specific credentials are needed to access required resources, for example, BigQuery credential\nfor BQ to BQ tasks. Users are able to register secrets on their own, manage it, and use it in tasks and hooks.\nPlease go through ",(0,a.kt)("a",{parentName:"p",href:"/optimus/docs/concepts/overview"},"concepts")," to know more about it."),(0,a.kt)("h2",{id:"registering-secret-with-optimus"},"Registering secret with Optimus"),(0,a.kt)("p",null,"Register a secret by running the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ optimus secret set someSecret someSecretValue\n")),(0,a.kt)("p",null,"By default, Optimus will encode the secret value. However, to register secret that has been encoded, run the following\ncommand instead:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ optimus secret set someSecret encodedSecretValue --base64\n")),(0,a.kt)("p",null,"There is also a flexibility to register using an existing secret file, instead of providing the secret value in the\ncommand."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ optimus secret set someSecret --file=/path/to/secret\n")),(0,a.kt)("p",null,"Please note that registering a secret which already exists will result in error. Modifying an existing secret can be\ndone using the Update command."),(0,a.kt)("h2",{id:"updating-a-secret"},"Updating a secret"),(0,a.kt)("p",null,"The update-only flag is generally used when you explicitly only want to update a secret which already exists\nand don't want to create it by mistake."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ optimus secret set someSecret someSecretValue --update-only\n")),(0,a.kt)("p",null,"It will return an error if the secret to update does not exist already."))}d.isMDXComponent=!0}}]);