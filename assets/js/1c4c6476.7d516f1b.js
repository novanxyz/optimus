(self.webpackChunkoptimus=self.webpackChunkoptimus||[]).push([[122],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return u}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),u=i,f=d["".concat(s,".").concat(u)]||d[u]||m[u]||r;return n?a.createElement(f,o(o({ref:t},c),{},{components:n})):a.createElement(f,o({ref:t},c))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},974:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return c},default:function(){return d}});var a=n(2122),i=n(9756),r=(n(7294),n(3905)),o=["components"],l={id:"v1-to-v2",title:"Whats new in v2 so far"},s=void 0,p={unversionedId:"concepts/v1-to-v2",id:"concepts/v1-to-v2",isDocsHomePage:!1,title:"Whats new in v2 so far",description:"- There are no dags, tasks anymore. Specifications are called job and there is",source:"@site/docs/concepts/v1-to-v2.md",sourceDirName:"concepts",slug:"/concepts/v1-to-v2",permalink:"/optimus/concepts/v1-to-v2",editUrl:"https://github.com/odpf/optimus/edit/master/docs/docs/concepts/v1-to-v2.md",version:"current",lastUpdatedBy:"Kush",lastUpdatedAt:1630914288,formattedLastUpdatedAt:"9/6/2021",frontMatter:{id:"v1-to-v2",title:"Whats new in v2 so far"}},c=[],m={toc:c};function d(e){var t=e.components,n=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"There are no dags, tasks anymore. Specifications are called ",(0,r.kt)("inlineCode",{parentName:"li"},"job")," and there is\nonly a single file for it."),(0,r.kt)("li",{parentName:"ul"},"There are no ",(0,r.kt)("inlineCode",{parentName:"li"},"properties.cfg")," file, all these configs goes in same job.yaml file."),(0,r.kt)("li",{parentName:"ul"},"Jobs have a single ",(0,r.kt)("inlineCode",{parentName:"li"},"asset")," folder where the query should go for BQ transformation."),(0,r.kt)("li",{parentName:"ul"},"Task window configuration which was specified in ",(0,r.kt)("inlineCode",{parentName:"li"},"properties.cfg")," earlier also goes in\n",(0,r.kt)("inlineCode",{parentName:"li"},"job.yaml"),"."),(0,r.kt)("li",{parentName:"ul"},"Macros are now formatted differently and follows golang template conventions.\nInstead of simply calling them via the name, they need to be enclosed in curly braces.\nFor example:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'Select * from sometable where event_time < "{{.DSTART}}"\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Macro replacements:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"dstart"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"{{.DSTART}}")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"{{.DSTART | Date}}")," to cast it as date"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"dend"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"{{.DEND | Date}}")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"__execution_time__"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"{{.EXECUTION_TIME}}")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"__destination_table__"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"{{.JOB_DESTINATION}}"),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Note"),": dstart and dend used to provide date of the window start/end whereas\nnow these convert to timestamp of window start/end, for example:\n",(0,r.kt)("inlineCode",{parentName:"p"},"2021-02-10T10:00:00+00:00")," ",(0,r.kt)("br",null),"\nTo get the same value as before, macro can be pared with a pipe function:\n",(0,r.kt)("inlineCode",{parentName:"p"},"{{ .DSTART | Date }}")," that is ",(0,r.kt)("inlineCode",{parentName:"p"},"2021-02-10")," "))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"query.sql")," and all other asset files now supports compile time functions\nevaluations defined in golang ",(0,r.kt)("a",{parentName:"li",href:"https://golang.org/pkg/text/template/"},"docs"),"\nand ",(0,r.kt)("a",{parentName:"li",href:"http://masterminds.github.io/sprig/"},"sprig")," library."),(0,r.kt)("li",{parentName:"ul"},"No more ",(0,r.kt)("inlineCode",{parentName:"li"},"USE_SPILLOVER")," config in properties.cfg. If the transformation needs\nto be idempotent which we suggest it should always be, ",(0,r.kt)("inlineCode",{parentName:"li"},"REPLACE")," load method can\nbe selected. The problem here is what if the ",(0,r.kt)("inlineCode",{parentName:"li"},"Select")," query that is provided with\n",(0,r.kt)("inlineCode",{parentName:"li"},"REPLACE")," load method actually generated more than one partition to be replaced.\nTo make sure optimus replaces correct partitions, it has two strategies now",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Auto: User leaves the responsibility to optimus to figure out target partitions\nautomatically. This is internally done by first executing the select query and\nstoring it in a temporary table. Then a ",(0,r.kt)("inlineCode",{parentName:"li"},"Select")," query on its partitioned column\nis used to find all the effected partitions. Once this is known, a ",(0,r.kt)("inlineCode",{parentName:"li"},"Merge"),"\nstatement is used to replace identified partitions and insert the ",(0,r.kt)("inlineCode",{parentName:"li"},"Select")," query.\nNote that this will cause almost 1.5x the cost of a query to incur."),(0,r.kt)("li",{parentName:"ul"},"Custom partition filter: User will provide a condition that can be directly used\nin a ",(0,r.kt)("inlineCode",{parentName:"li"},"Merge")," statement to delete existing partitions from the destination table.\nThis is cheaper and faster, for example: `",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},'DATE(event_timestamp) >= "{{.DSTART|Date}}" AND DATE(event_timestamp) < "{{ .DEND|Date }}"\n'))))),(0,r.kt)("li",{parentName:"ul"},"New fields compare to v1",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"description"),": Description of the job"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"labels"),": Job specific labels which will be passed to tasks and hooks. This\ncan be used to track cost, find jobs created by optimus, etc."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"dependencies"),": This no longer support custom time delta for now. There is a\nnew schema to define this")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"dependencies:\n  job: jobname\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"depends_on_past"),": self-explanatory as ",(0,r.kt)("inlineCode",{parentName:"li"},"optimus")," cli generates them, same as V1"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"catch_up"),": self-explanatory as ",(0,r.kt)("inlineCode",{parentName:"li"},"optimus")," cli generates them, same as V1"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"start_date"),": self-explanatory as ",(0,r.kt)("inlineCode",{parentName:"li"},"optimus")," cli generates them, same as V1"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"end_date"),": when the job should finish executing the schedule"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"interval"),": self-explanatory as ",(0,r.kt)("inlineCode",{parentName:"li"},"optimus")," cli generates them, same as V1"),(0,r.kt)("li",{parentName:"ul"},"Support for creating datasets/tables/views",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Specification used to create tables have changed, please go through documentation\nfor details")))))}d.isMDXComponent=!0}}]);