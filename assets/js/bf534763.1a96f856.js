"use strict";(self.webpackChunkoptimus=self.webpackChunkoptimus||[]).push([[3771],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),h=o,m=d["".concat(l,".").concat(h)]||d[h]||u[h]||i;return n?r.createElement(m,a(a({ref:t},p),{},{components:n})):r.createElement(m,a({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1014:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=["components"],s={},l="About This Directory",c={unversionedId:"rfcs/README",id:"rfcs/README",isDocsHomePage:!1,title:"About This Directory",description:"This directory contains RFCs (design documents) that describe proposed major changes to Optimus.",source:"@site/docs/rfcs/README.md",sourceDirName:"rfcs",slug:"/rfcs/README",permalink:"/optimus/docs/rfcs/README",editUrl:"https://github.com/odpf/optimus/edit/master/docs/docs/rfcs/README.md",tags:[],version:"current",lastUpdatedBy:"Sumit Agrawal",lastUpdatedAt:1644295592,formattedLastUpdatedAt:"2/8/2022",frontMatter:{}},p=[],u={toc:p};function d(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"about-this-directory"},"About This Directory"),(0,i.kt)("p",null,"This directory contains RFCs (design documents) that describe proposed major changes to Optimus."),(0,i.kt)("h1",{id:"the-why-of-rfcs"},"The Why of RFCs"),(0,i.kt)("p",null,"An RFC provides a high-level description of a major change or enhancement to Optimus. The high-level description allows a reviewer to critique and poke holes in a design without getting lost in the particulars of code."),(0,i.kt)("p",null,"An RFC is a form of communication aimed at both spreading and gathering knowledge, though it is not the sole means of accomplishing either task. Prototypes, tech notes, github issues, comments in code, commit messages and in-person discussions are valid alternatives depending on the situation."),(0,i.kt)("p",null,"At its best, an RFC clearly and concisely describes the high-level architecture of a project giving confidence to all involved. At its worst, an RFC focuses on unimportant details, fosters discussion that stymies progress, or demoralizes the author with the complexity of their undertaking."),(0,i.kt)("h1",{id:"the-when-and-how-of-rfcs"},"The When and How of RFCs"),(0,i.kt)("p",null,"When to write an RFC is nuanced and there are no firm rules. General guidance is to write an RFC before embarking on a significant or complex project that will be spread over multiple pull requests (PRs), and when multiple alternatives need to be considered and there is no obvious best approach. A project involving multiple people is a good signal an RFC is warranted. (Similarly, a project worthy of an RFC often requires multiple engineers worth of effort). Note that this guidance is intentionally vague. Many complex projects spread over multiple PRs do not require an RFC, though they do require adequate communication and discussion."),(0,i.kt)("p",null,"It is encouraged to develop a prototype concurrently with writing the RFC. One of the significant benefits of an RFC is that it forces bigger picture thinking which reviewers can then disect. In contrast, a prototype forces the details to be considered, shedding light on the unknown and helping to ensure that the RFC focuses on the important design considerations."),(0,i.kt)("p",null,"An RFC should be a high-level description which does not require formal correctness. There is utility in conciseness. Do not overspecify the details in the RFC as doing so can bury the reviewer in minutiae. If you've never written an RFC before consider partnering with a more experienced engineer for guidance and to help shepherd your RFC through the process."),(0,i.kt)("h1",{id:"rfc-process"},"RFC Process"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Every RFC should have a dedicated reviewer familiar with the RFC's subject area.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Copy ",(0,i.kt)("inlineCode",{parentName:"p"},"00000000_template.md")," to a new file and fill in the details. Commit this version in your own fork of the repository or a branch. Your commit message (and corresponding pull request) should include the prefix ",(0,i.kt)("inlineCode",{parentName:"p"},"rfc"),". Eg: ",(0,i.kt)("inlineCode",{parentName:"p"},"rfc: edit RFC template")),(0,i.kt)("p",{parentName:"li"},"If you are a creative person, you may prefer to start with this blank slate, write your prose and then later check that all necessary topics have been covered."),(0,i.kt)("p",{parentName:"li"},"If you feel intimidated by a blank template, you can instead peruse the list of requested topics and use the questions in there as writing prompt.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Submit a pull request (PR) to add your new file to the main repository. Each RFC should get its own pull request; do not combine RFCs with other files."),(0,i.kt)("p",{parentName:"li"},'Note: you can send a PR before the RFC is complete in order to solicit input about what to write in the RFC. In this case, include the term "',"[WIP]",'" (work in progress) in the PR title & mark the PR as draft until you are confident the RFC is complete and can be reviewed.')),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Go through the PR review, iterating on the RFC to answer questions and concerns from the reviewer(s). The duration of this process should be related to the complexity of the project. If you or the reviewers seem to be at an impasse, consider in-person discussions or a prototype. There is no minimum time required to leave an RFC open for review. There is also no prohibition about halting or reversing work on an accepted RFC if a problem is discovered during implementation."),(0,i.kt)("p",{parentName:"li"},"Reviewers should be conscious of their own limitations and ask for other engineers to look at specific areas if necessary.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Once discussion has settled and the RFC has received an LGTM from the reviewer(s):"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"change the ",(0,i.kt)("inlineCode",{parentName:"li"},"Status")," field of the document to ",(0,i.kt)("inlineCode",{parentName:"li"},"in-progress"),";"),(0,i.kt)("li",{parentName:"ul"},"rename the RFC document to prefix it with the current date (",(0,i.kt)("inlineCode",{parentName:"li"},"YYYYMMDD_"),");"),(0,i.kt)("li",{parentName:"ul"},"update the ",(0,i.kt)("inlineCode",{parentName:"li"},"RFC PR")," field;"),(0,i.kt)("li",{parentName:"ul"},"and merge the PR."))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Once the changes in the RFC have been implemented and merged, change the ",(0,i.kt)("inlineCode",{parentName:"p"},"Status")," field of the document from ",(0,i.kt)("inlineCode",{parentName:"p"},"in-progress")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"completed"),". If subsequent developments render an RFC obsolete, change its status to ",(0,i.kt)("inlineCode",{parentName:"p"},"obsolete"),". When you mark a RFC as obsolete, ensure that its text references the other RFCs or PRs that make it obsolete."))))}d.isMDXComponent=!0}}]);