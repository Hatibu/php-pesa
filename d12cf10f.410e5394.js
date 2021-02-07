(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{87:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return p}));var r=t(3),i=t(7),a=(t(0),t(91)),o={id:"installation",title:"Installation"},c={unversionedId:"guide/installation",id:"guide/installation",isDocsHomePage:!1,title:"Installation",description:"Pesa PHP SDK can be installed using Composer package manager.",source:"@site/docs/guide/installation.mdx",slug:"/guide/installation",permalink:"/php-pesa/guide/installation",editUrl:"https://github.com/openpesa/php-pesa/edit/main/docs/guide/installation.mdx",version:"current",sidebar:"someSidebar",previous:{title:"User Guide",permalink:"/php-pesa/guide/guide"},next:{title:"Configuration",permalink:"/php-pesa/guide/configuration"}},l=[{value:"System Requirements",id:"system-requirements",children:[{value:"<strong>Minimum requirements</strong>",id:"minimum-requirements",children:[]},{value:"Installing to an Existing Project",id:"installing-to-an-existing-project",children:[]},{value:"Upgrading",id:"upgrading",children:[]}]}],s={toc:l};function p(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Pesa PHP SDK can be installed using ",Object(a.b)("a",{parentName:"p",href:"#"},"Composer package manager"),"."),Object(a.b)("h2",{id:"system-requirements"},"System Requirements"),Object(a.b)("h3",{id:"minimum-requirements"},Object(a.b)("strong",{parentName:"h3"},"Minimum requirements")),Object(a.b)("p",null,"To run the SDK, your system will need to have ",Object(a.b)("strong",{parentName:"p"},Object(a.b)("a",{parentName:"strong",href:"https://php.org/"},"PHP")," version >= 7.1 or 8.0"),"."),Object(a.b)("h1",{id:"server-requirements"},"Server Requirements"),Object(a.b)("p",null,"PHP version 7.1 or newer is required, with the ",Object(a.b)("em",{parentName:"p"},"curl")," extension and ",Object(a.b)("em",{parentName:"p"},"mbstring")," extension installed."),Object(a.b)("p",null,"The following PHP extensions should be enabled on your server: ",Object(a.b)("inlineCode",{parentName:"p"},"php-json"),", ",Object(a.b)("inlineCode",{parentName:"p"},"php-curl")),Object(a.b)("p",null,"In order to use the CURLRequest, you will need ",Object(a.b)("inlineCode",{parentName:"p"},"libcurl")," installed."),Object(a.b)("h3",{id:"installing-to-an-existing-project"},"Installing to an Existing Project"),Object(a.b)("p",null,"The Pesa PHP SDK can be an existing project using Composer."),Object(a.b)("p",null,"In your project root:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-sh"},"composer require openpesa/pesa\n")),Object(a.b)("h3",{id:"upgrading"},"Upgrading"),Object(a.b)("p",null,"Whenever there is a new release, then from the command line in your project root:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-sh"},"composer upgrade\n")),Object(a.b)("p",null,"Read the upgrade instructions, and check designated files for affected changes."))}p.isMDXComponent=!0},91:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return d}));var r=t(0),i=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=i.a.createContext({}),p=function(e){var n=i.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},u=function(e){var n=p(e.components);return i.a.createElement(s.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},m=i.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(t),m=r,d=u["".concat(o,".").concat(m)]||u[m]||b[m]||a;return t?i.a.createElement(d,c(c({ref:n},s),{},{components:t})):i.a.createElement(d,c({ref:n},s))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,o=new Array(a);o[0]=m;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var s=2;s<a;s++)o[s]=t[s];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);