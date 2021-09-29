(self.webpackChunkoptimus=self.webpackChunkoptimus||[]).push([[886],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return l},kt:function(){return m}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=u(n),m=i,h=d["".concat(c,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(h,o(o({ref:t},l),{},{components:n})):r.createElement(h,o({ref:t},l))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var u=2;u<a;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},234:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return l},default:function(){return d}});var r=n(2122),i=n(9756),a=(n(7294),n(3905)),o=["components"],s={id:"architecture",title:"Architecture"},c=void 0,u={unversionedId:"concepts/architecture",id:"concepts/architecture",isDocsHomePage:!1,title:"Architecture",description:"Basic building blocks of Optimus are",source:"@site/docs/concepts/architecture.md",sourceDirName:"concepts",slug:"/concepts/architecture",permalink:"/optimus/concepts/architecture",editUrl:"https://github.com/odpf/optimus/edit/master/docs/docs/concepts/architecture.md",version:"current",lastUpdatedBy:"Kush",lastUpdatedAt:1632940609,formattedLastUpdatedAt:"9/29/2021",frontMatter:{id:"architecture",title:"Architecture"},sidebar:"docsSidebar",previous:{title:"Overview",permalink:"/optimus/concepts/overview"},next:{title:"Understanding Intervals and Windows",permalink:"/optimus/concepts/intervals-and-windows"}},l=[{value:"Overview",id:"overview",children:[]},{value:"Optimus CLI",id:"optimus-cli",children:[]},{value:"Optimus Service",id:"optimus-service",children:[]},{value:"Optimus Database",id:"optimus-database",children:[]},{value:"Optimus Plugins",id:"optimus-plugins",children:[]},{value:"Scheduler",id:"scheduler",children:[]}],p={toc:l};function d(e){var t=e.components,s=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Basic building blocks of Optimus are"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Optimus CLI"),(0,a.kt)("li",{parentName:"ul"},"Optimus Service"),(0,a.kt)("li",{parentName:"ul"},"Optimus Database"),(0,a.kt)("li",{parentName:"ul"},"Optimus Plugins"),(0,a.kt)("li",{parentName:"ul"},"Scheduler")),(0,a.kt)("h3",{id:"overview"},"Overview"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Architecture Diagram",src:n(4312).Z,title:"OptimusArchitecture"})),(0,a.kt)("h3",{id:"optimus-cli"},"Optimus CLI"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"optimus")," is a command line tool used to interact with the main optimus service and basic scaffolding job\nspecifications. It can be used to "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Generate jobs based on user inputs "),(0,a.kt)("li",{parentName:"ul"},"Add hooks to existing jobs"),(0,a.kt)("li",{parentName:"ul"},"Dump a compiled specification for the consumption of a scheduler"),(0,a.kt)("li",{parentName:"ul"},"Deployment of specifications to ",(0,a.kt)("inlineCode",{parentName:"li"},"Optimus Service")),(0,a.kt)("li",{parentName:"ul"},"Create resource specifications for datastores"),(0,a.kt)("li",{parentName:"ul"},"Start optimus server")),(0,a.kt)("p",null,"Optimus also has an admin flag that can be turned on using ",(0,a.kt)("inlineCode",{parentName:"p"},"OPTIMUS_ADMIN_ENABLED=1")," env flag.\nThis hides few commands which are used internally during the lifecycle of tasks/hooks\nexecution."),(0,a.kt)("h3",{id:"optimus-service"},"Optimus Service"),(0,a.kt)("p",null,"Optimus cli can start a service that controls and orchestrates all that Optimus has to\noffer. Optimus cli uses GRPC to communicate with the optimus service for almost all the\noperations that takes ",(0,a.kt)("inlineCode",{parentName:"p"},"host")," as the flag. Service also exposes few REST endpoints\nthat can be used with simple curl request for registering a new project or checking\nthe status of a job, etc."),(0,a.kt)("p",null,"As soon as jobs are ready in a repository, a deployment request is sent to the service\nwith all the specs(normally in yaml) which are parsed and stored in the database.\nOnce these specs are stored, each of them are compiled to generate a scheduler parsable\njob format which will be eventually consumed by a supported scheduler to execute the\njob. These compiled specifications are uploaded to an ",(0,a.kt)("strong",{parentName:"p"},"object store")," which gets synced\nto the scheduler."),(0,a.kt)("h3",{id:"optimus-database"},"Optimus Database"),(0,a.kt)("p",null,"Specifications once requested for deployment needs to be stored somewhere as a source\nof truth. Optimus uses postgres as a storage engine to store raw specifications, job\nassets, run details, project configurations, etc."),(0,a.kt)("h3",{id:"optimus-plugins"},"Optimus Plugins"),(0,a.kt)("p",null,"Optimus itself doesn't govern how a job is supposed to execute the transformation. It\nonly provides the building blocks which needs to be implemented by a task. A plugin is\ndivided in two parts, an adapter and a docker image. Docker image contains the actual\ntransformation logic that needs to be executed in the task and adapter helps optimus\nto understand what all this task can do and help in doing it."),(0,a.kt)("h3",{id:"scheduler"},"Scheduler"),(0,a.kt)("p",null,"Job adapters consumes job specifications which eventually needs to be scheduled and\nexecuted via a execution engine. This execution engine is termed here as Scheduler.\nOptimus by default recommends using ",(0,a.kt)("inlineCode",{parentName:"p"},"Airflow")," but is extensible enough to support any\nother scheduler that satisfies some basic requirements, one of the most important\nof all is, scheduler should be able to execute a Docker container."))}d.isMDXComponent=!0},4312:function(e,t,n){"use strict";t.Z=n.p+"assets/images/OptimusArchitecture_dark_07June2021-496f10b02b693c3113dd4800802b131e.png"}}]);