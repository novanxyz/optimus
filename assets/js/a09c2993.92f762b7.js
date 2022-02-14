"use strict";(self.webpackChunkoptimus=self.webpackChunkoptimus||[]).push([[4128],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(n),m=i,f=d["".concat(u,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var l=2;l<a;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8495:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return u},metadata:function(){return l},toc:function(){return c},default:function(){return d}});var r=n(7462),i=n(3366),a=(n(7294),n(3905)),o=["components"],s={id:"introduction",title:"Introduction"},u="Optimus",l={unversionedId:"introduction",id:"introduction",isDocsHomePage:!1,title:"Introduction",description:"Optimus is an ETL orchestration tool that helps manage warehouse resources and",source:"@site/docs/introduction.md",sourceDirName:".",slug:"/introduction",permalink:"/optimus/docs/introduction",editUrl:"https://github.com/odpf/optimus/edit/master/docs/docs/introduction.md",tags:[],version:"current",lastUpdatedBy:"Sandeep Bhardwaj",lastUpdatedAt:1644819523,formattedLastUpdatedAt:"2/14/2022",frontMatter:{id:"introduction",title:"Introduction"},sidebar:"docsSidebar",next:{title:"Installation",permalink:"/optimus/docs/getting-started/installation"}},c=[{value:"Features",id:"features",children:[]}],p={toc:c};function d(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"optimus"},"Optimus"),(0,a.kt)("p",null,"Optimus is an ETL orchestration tool that helps manage warehouse resources and\nschedule transformation over cron interval. Warehouses like Bigquery can be used\nto create, update, read, delete different types of resources(dataset/table/standard view).\nSimilarly, jobs can be SQL transformations taking inputs from single/multiple\nsource tables executing over fixed schedule interval. Optimus was made from start\nto be extensible, which is, adding support for different kind of warehouses,\ntransformations and executors can be done easily."),(0,a.kt)("h2",{id:"features"},"Features"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"BigQuery",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Schedule BigQuery transformation"),(0,a.kt)("li",{parentName:"ul"},"Query compile time templating (variables, loop, if statements, macros, etc)"),(0,a.kt)("li",{parentName:"ul"},"BigQuery Dataset/Table/View creation"),(0,a.kt)("li",{parentName:"ul"},"BigQuery UDF creation ",(0,a.kt)("strong",{parentName:"li"},"[in roadmap]")),(0,a.kt)("li",{parentName:"ul"},"Audit/Profile BigQuery tables"),(0,a.kt)("li",{parentName:"ul"},"Sink BigQuery tables to Kafka"),(0,a.kt)("li",{parentName:"ul"},"Automatic dependency resolution: In BigQuery if a query references\ntables/views as source, jobs required to create these tables will be added\nas dependencies automatically and optimus will wait for them to finish first."),(0,a.kt)("li",{parentName:"ul"},"Cross tenant dependency: Optimus is a multi-tenant service, if there are two\ntenants registered, serviceA and serviceB then service B can write queries\nreferencing serviceA as source and Optimus will handle this dependency as well"),(0,a.kt)("li",{parentName:"ul"},"Dry run query: Before SQL query is scheduled for transformation, during\ndeployment query will be dry-run to make sure it passes basic sanity\nchecks"))),(0,a.kt)("li",{parentName:"ul"},"Extensibility to support Python transformation"),(0,a.kt)("li",{parentName:"ul"},"Git based specification management"),(0,a.kt)("li",{parentName:"ul"},"GRPC/REST based APIs")),(0,a.kt)("p",null,"NOTE: This is still in early stages and very close to use for production.\nWe are taking feedback and making breaking changes based on user requirements."))}d.isMDXComponent=!0}}]);