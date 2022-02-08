"use strict";(self.webpackChunkoptimus=self.webpackChunkoptimus||[]).push([[657],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),u=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=u(e.components);return i.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},c=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(n),d=a,h=c["".concat(s,".").concat(d)]||c[d]||m[d]||o;return n?i.createElement(h,r(r({ref:t},p),{},{components:n})):i.createElement(h,r({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var u=2;u<o;u++)r[u]=n[u];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}c.displayName="MDXCreateElement"},4493:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return p},default:function(){return c}});var i=n(7462),a=n(3366),o=(n(7294),n(3905)),r=["components"],l={id:"extension",title:"Work with Extension"},s=void 0,u={unversionedId:"guides/extension",id:"guides/extension",isDocsHomePage:!1,title:"Work with Extension",description:"Extension helps the user to include third-party or arbitrary implementation",source:"@site/docs/guides/extension.md",sourceDirName:"guides",slug:"/guides/extension",permalink:"/optimus/docs/guides/extension",editUrl:"https://github.com/odpf/optimus/edit/master/docs/docs/guides/extension.md",tags:[],version:"current",lastUpdatedBy:"Sumit Agrawal",lastUpdatedAt:1644295592,formattedLastUpdatedAt:"2/8/2022",frontMatter:{id:"extension",title:"Work with Extension"}},p=[{value:"Warning",id:"warning",children:[]},{value:"Limitation",id:"limitation",children:[]},{value:"Creating",id:"creating",children:[]},{value:"Installation",id:"installation",children:[]},{value:"Executing",id:"executing",children:[]}],m={toc:p};function c(e){var t=e.components,n=(0,a.Z)(e,r);return(0,o.kt)("wrapper",(0,i.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Extension helps the user to include third-party or arbitrary implementation\nas part of Optimus. Currently, extension is designed for when the user\nis running it as CLI."),(0,o.kt)("h3",{id:"warning"},"Warning"),(0,o.kt)("p",null,"Extension is basically an executable file outside Optimus. We do not guarantee whether an extension is safe or not. We suggest to check the extension itself, whether it is safe to run in your local or not, before installing and running it."),(0,o.kt)("h3",{id:"limitation"},"Limitation"),(0,o.kt)("p",null,"Extension is designed to be similar to ",(0,o.kt)("a",{parentName:"p",href:"https://cli.github.com/manual/gh_extension"},"Github extension"),".\nHowever, since it's still in early stage, some limitations are there."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"currently it is limited to extension stored in Github"),(0,o.kt)("li",{parentName:"ul"},"extension is only an executable file"),(0,o.kt)("li",{parentName:"ul"},"currently, only ",(0,o.kt)("a",{parentName:"li",href:"#installation"},(0,o.kt)("inlineCode",{parentName:"a"},"install"))," command is available"),(0,o.kt)("li",{parentName:"ul"},"installation only looks at the Github asset according to the running system OS and Architecture"),(0,o.kt)("li",{parentName:"ul"},"if upgrade is required, then the user needs to manually delete the old extension located under ",(0,o.kt)("inlineCode",{parentName:"li"},"$HOME/.optimus/extensions")),(0,o.kt)("li",{parentName:"ul"},"convention for extension:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"extension repository should follow ",(0,o.kt)("inlineCode",{parentName:"li"},"optimus-extension-[name of extension]")," (example: ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/gojek/optimus-extension-valor"},"optimus-extension-valor"),")"),(0,o.kt)("li",{parentName:"ul"},"asset being consdered is binary with suffix ",(0,o.kt)("inlineCode",{parentName:"li"},"...[OS]-[ARC]")," (example: when installing ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/gojek/optimus-extension-valor"},(0,o.kt)("inlineCode",{parentName:"a"},"valor")),", if the user's OS is Linux and the architecture is AMD64, then installation will consider ",(0,o.kt)("inlineCode",{parentName:"li"},"valor_linux-amd64")," as binary to be executed)")))),(0,o.kt)("h3",{id:"creating"},"Creating"),(0,o.kt)("p",null,"Extension is designed to be open. Anyone could create their own extension. And as long as it is avilable, anyone could install it. In order to create it, the following is the basic steps to do:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Decide the name of the extension, example: ",(0,o.kt)("inlineCode",{parentName:"li"},"valor")),(0,o.kt)("li",{parentName:"ol"},"Create a Github repository that follows the convention, example: ",(0,o.kt)("inlineCode",{parentName:"li"},"optimus-extension-valor")),(0,o.kt)("li",{parentName:"ol"},"Put some implementation and asset with name based on the convention, example: ",(0,o.kt)("inlineCode",{parentName:"li"},"valor_linux-amd64"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"valor_darwin-amd64"),", and more."),(0,o.kt)("li",{parentName:"ol"},"Ensure it is available for anyone to download")),(0,o.kt)("h3",{id:"installation"},"Installation"),(0,o.kt)("p",null,"In order to install extension, run the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-zsh"},"optimus extension install OWNER/REPO [flags]\n")),(0,o.kt)("p",null,"OWNER is the Github owner and REPO is the repository name.\nIn the example ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/gojek/optimus-extension-valor"},(0,o.kt)("inlineCode",{parentName:"a"},"Valor")),",\nthe OWNER is ",(0,o.kt)("inlineCode",{parentName:"p"},"gojek")," and the REPO is ",(0,o.kt)("inlineCode",{parentName:"p"},"optimus-extension-valor"),".\nSo, going back to the example above, it will be like the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-zsh"},"optimus extension install gojek/optimus-extension-valor\n")),(0,o.kt)("p",null,"Installation process is then in progress. If installation is a success, the user can show it by running:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-zsh"},"optimus --help\n")),(0,o.kt)("p",null,"A new command named after the extension will be available. For example, if the extension name is ",(0,o.kt)("inlineCode",{parentName:"p"},"optimus-extension-valor"),", then the command named ",(0,o.kt)("inlineCode",{parentName:"p"},"valor")," will be available. Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-zsh"},"...\nAvailable Commands:\n  ...\n  extension   Operate with extension\n  ...\n  valor       Execute gojek/optimus-extension-valor [v0.0.2] extension\n  version     Print the client version information\n...\n")),(0,o.kt)("h3",{id:"executing"},"Executing"),(0,o.kt)("p",null,"In order to execute an extension, make sure to follow the installation process described ",(0,o.kt)("a",{parentName:"p",href:"#installation"},"above"),".\nAfter installation is finished, simply run the extension with the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-zsh"},"optimus [name of extension]\n")),(0,o.kt)("p",null,"Example of ",(0,o.kt)("inlineCode",{parentName:"p"},"valor"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-zsh"},"optimus valor\n")))}c.isMDXComponent=!0}}]);