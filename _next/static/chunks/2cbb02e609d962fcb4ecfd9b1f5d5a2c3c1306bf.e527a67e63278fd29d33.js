(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[39],{"8z6j":function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return d}));var r=n("ERkP"),i=n.n(r),a=n("qyW2"),o=n("i9k6"),l=n("bf+l");n.d(t,"packageJson",(function(){return l}));var u=i.a.createElement,s={background:a.b},c={color:a.a};function d(){return u(o.a,{title:"AreaClosed",description:"<Shape.AreaClosed />",exampleRenderer:a.c,exampleUrl:"/areas",detailsStyles:c,tileStyles:s})}},E0Ok:function(e,t,n){"use strict";var r,i=n("ERkP"),a=n.n(i),o=n("JmwF"),l=n("XpFG"),u=n("oqwl"),s=n("67po"),c=n("uLXA"),d=n.n(c),f=n("xc3W"),p=n("+fu8"),m=n("krkd"),h=n("Tkov"),v=n("jpI8"),y=a.a.createElement,x=d()(600,.5).filter((function(e,t){return t<600})),g=function(e){return e[0]},b=function(e){return e[1]};t.a=Object(f.a)((function(e){var t=e.width,n=e.height,a=e.showControls,c=void 0===a||a,d=e.hideTooltip,f=e.showTooltip,O=e.tooltipOpen,w=e.tooltipData,j=e.tooltipLeft,k=e.tooltipTop;if(t<10)return null;var E=Object(i.useState)(c),S=E[0],P=E[1],T=Object(i.useRef)(null),_=Object(i.useMemo)((function(){return Object(s.a)({domain:[1.3,2.2],range:[0,t],clamp:!0})}),[t]),C=Object(i.useMemo)((function(){return Object(s.a)({domain:[.75,1.6],range:[n,0],clamp:!0})}),[n]),R=Object(i.useMemo)((function(){return Object(m.a)({x:function(e){var t;return null!==(t=_(g(e)))&&void 0!==t?t:0},y:function(e){var t;return null!==(t=C(b(e)))&&void 0!==t?t:0},width:t,height:n})(x)}),[t,n,_,C]),M=Object(i.useCallback)((function(e){if(r&&clearTimeout(r),T.current){var t=Object(v.a)(T.current,e);if(t){var n=R.find(t.x,t.y,100);n&&f({tooltipLeft:_(g(n.data)),tooltipTop:C(b(n.data)),tooltipData:n.data})}}}),[_,C,f,R]),A=Object(i.useCallback)((function(){r=window.setTimeout((function(){d()}),300)}),[d]);return y("div",null,y("svg",{width:t,height:n,ref:T},y(u.a,{id:"dots-pink"}),y("rect",{width:t,height:n,rx:14,fill:"url(#dots-pink)",onMouseMove:M,onMouseLeave:A,onTouchMove:M,onTouchEnd:A}),y(o.a,{pointerEvents:"none"},x.map((function(e,t){return y(l.a,{key:"point-".concat(e[0],"-").concat(t),className:"dot",cx:_(g(e)),cy:C(b(e)),r:t%3===0?2:3,fill:w===e?"white":"#f6c431"})})),S&&R.polygons().map((function(e,t){return y(h.a,{key:"polygon-".concat(t),polygon:e,fill:"white",stroke:"white",strokeWidth:1,strokeOpacity:.2,fillOpacity:w===e.data?.5:0})})))),O&&w&&null!=j&&null!=k&&y(p.a,{left:j+10,top:k+10},y("div",null,y("strong",null,"x:")," ",g(w)),y("div",null,y("strong",null,"y:")," ",b(w))),c&&y("div",null,y("label",{style:{fontSize:12}},y("input",{type:"checkbox",checked:S,onChange:function(){return P(!S)}}),"\xa0Show voronoi point map")))}));try{Example.displayName="Example",Example.__docgenInfo={description:"",displayName:"Example",props:{width:{defaultValue:null,description:"",name:"width",required:!0,type:{name:"number"}},height:{defaultValue:null,description:"",name:"height",required:!0,type:{name:"number"}},showControls:{defaultValue:null,description:"",name:"showControls",required:!1,type:{name:"boolean | undefined"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/sandboxes/visx-dots/Example.tsx#Example"]={docgenInfo:Example.__docgenInfo,name:"Example",path:"src/sandboxes/visx-dots/Example.tsx#Example"})}catch(O){}},PVmh:function(e){e.exports=JSON.parse('{"name":"@visx/demo-dots","description":"Standalone visx scatterplot demo.","main":"index.tsx","private":true,"dependencies":{"@babel/runtime":"^7.8.4","@types/react":"^16","@types/react-dom":"^16","@visx/event":"latest","@visx/gradient":"latest","@visx/group":"latest","@visx/mock-data":"latest","@visx/responsive":"latest","@visx/scale":"latest","@visx/shape":"latest","@visx/tooltip":"latest","@visx/voronoi":"latest","react":"^16.8","react-dom":"^16.8","react-scripts-ts":"3.1.0","typescript":"^3"},"keywords":["visualization","d3","react","visx","visualization"]}')},U8e0:function(e,t,n){"use strict";t.__esModule=!0,t.default=function(e){return(0,r.randomLcg)(e)};var r=n("G/4L")},"bf+l":function(e){e.exports=JSON.parse('{"name":"@visx/demo-area","description":"Standalone visx area demo.","main":"index.tsx","private":true,"dependencies":{"@babel/runtime":"^7.8.4","@types/react":"^16","@types/react-dom":"^16","@visx/curve":"latest","@visx/event":"latest","@visx/gradient":"latest","@visx/grid":"latest","@visx/mock-data":"latest","@visx/responsive":"latest","@visx/scale":"latest","@visx/shape":"latest","@visx/tooltip":"latest","d3-array":"^2.4.0","d3-time-format":"2.2.3","react":"^16.8","react-dom":"^16.8","react-scripts-ts":"3.1.0","typescript":"^3"},"keywords":["visualization","d3","react","visx","area"]}')},i6Tx:function(e,t,n){"use strict";t.__esModule=!0,t.default=c;var r=u(n("aWzz")),i=u(n("RNvQ")),a=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=l();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){var a=r?Object.getOwnPropertyDescriptor(e,i):null;a&&(a.get||a.set)?Object.defineProperty(n,i,a):n[i]=e[i]}n.default=e,t&&t.set(e,n);return n}(n("ERkP")),o=u(n("LaGA"));function l(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return l=function(){return e},e}function u(e){return e&&e.__esModule?e:{default:e}}function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function c(e){var t=e.className,n=e.children,r=e.debounceTime,l=void 0===r?300:r,u=e.ignoreDimensions,c=void 0===u?[]:u,d=e.parentSizeStyles,f=void 0===d?{width:"100%",height:"100%"}:d,p=e.enableDebounceLeadingCall,m=void 0===p||p,h=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,["className","children","debounceTime","ignoreDimensions","parentSizeStyles","enableDebounceLeadingCall"]),v=(0,a.useRef)(null),y=(0,a.useRef)(0),x=(0,a.useState)({width:0,height:0,top:0,left:0}),g=x[0],b=x[1],O=(0,a.useMemo)((function(){var e=Array.isArray(c)?c:[c];return(0,i.default)((function(t){b((function(n){return Object.keys(n).filter((function(e){return n[e]!==t[e]})).every((function(t){return e.includes(t)}))?n:t}))}),l,{leading:m})}),[l,m,c]);return(0,a.useEffect)((function(){var e=new o.default((function(e){void 0===e&&(e=[]),e.forEach((function(e){var t=e.contentRect,n=t.left,r=t.top,i=t.width,a=t.height;y.current=window.requestAnimationFrame((function(){O({width:i,height:a,top:r,left:n})}))}))}));return v.current&&e.observe(v.current),function(){window.cancelAnimationFrame(y.current),e.disconnect(),O.cancel()}}),[O]),a.default.createElement("div",s({style:f,ref:v,className:t},h),n(s({},g,{ref:v.current,resize:O})))}c.propTypes={className:r.default.string,debounceTime:r.default.number,enableDebounceLeadingCall:r.default.bool,ignoreDimensions:r.default.oneOfType([r.default.any,r.default.arrayOf(r.default.any)]),children:r.default.func.isRequired}},i9k6:function(e,t,n){"use strict";n.d(t,"a",(function(){return m}));var r=n("zjfJ"),i=n("yFcC"),a=n.n(i),o=n("ERkP"),l=n.n(o),u=n("jvFD"),s=n.n(u),c=n("i6Tx"),d=n.n(c),f=l.a.createElement;function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function m(e){var t,n,i=e.description,o=e.detailsHeight,u=void 0===o?76:o,c=e.detailsStyles,m=e.exampleProps,h=e.exampleRenderer,v=e.exampleUrl,y=e.tileStyles,x=e.title;return f(l.a.Fragment,null,(t=v,n=f("div",{style:y,className:"jsx-713312509 gallery-tile"},f("div",{className:"jsx-713312509 image"},f(d.a,null,(function(e){var t=e.width,n=e.height;return l.a.createElement(h,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({width:t,height:n+(x||i?u:0)},m))}))),(x||i)&&f("div",{style:c,className:"jsx-713312509 details"},x&&f("div",{className:"jsx-713312509 title"},x),i&&f("div",{className:"jsx-713312509 description"},f("pre",{className:"jsx-713312509"},i)))),t?f(s.a,{href:t},n):n),f(a.a,{id:"713312509"},["h3.jsx-713312509{margin-top:0;margin-left:40px;margin-bottom:0;}",".gallery-tile.jsx-713312509{background-color:white;margin:5px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:390px;-webkit-flex:1;-ms-flex:1;flex:1;min-width:300px;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;border-radius:14px;cursor:pointer;}",".image.jsx-713312509{-webkit-flex:1;-ms-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;overflow:hidden;}",".details.jsx-713312509{text-align:center;padding:15px 20px;color:#ffffff;}",".title.jsx-713312509{font-weight:900;line-height:0.9rem;}",".description.jsx-713312509{font-weight:300;font-size:14px;}","pre.jsx-713312509{margin:0;background-color:transparent;min-width:unset;}","@media (max-width:960px){.gallery-tile.jsx-713312509{min-width:45%;}}","@media (max-width:600px){.gallery-tile.jsx-713312509{min-width:100%;}}"]))}try{m.displayName="GalleryTile",m.__docgenInfo={description:"",displayName:"GalleryTile",props:{description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string | undefined"}},detailsHeight:{defaultValue:{value:76},description:"",name:"detailsHeight",required:!1,type:{name:"number | undefined"}},detailsStyles:{defaultValue:null,description:"",name:"detailsStyles",required:!1,type:{name:"CSSProperties | undefined"}},exampleRenderer:{defaultValue:null,description:"",name:"exampleRenderer",required:!0,type:{name:"ComponentClass<ExampleProps, any> | FunctionComponent<ExampleProps>"}},exampleProps:{defaultValue:null,description:"",name:"exampleProps",required:!1,type:{name:'(Pick<ExampleProps, Exclude<keyof ExampleProps, "width" | "height">> & Partial<Pick<ExampleProps, "width" | "height">>) | undefined'}},exampleUrl:{defaultValue:null,description:"",name:"exampleUrl",required:!1,type:{name:"string | undefined"}},tileStyles:{defaultValue:null,description:"",name:"tileStyles",required:!1,type:{name:"CSSProperties | undefined"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string | undefined"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/GalleryTile.tsx#GalleryTile"]={docgenInfo:m.__docgenInfo,name:"GalleryTile",path:"src/components/GalleryTile.tsx#GalleryTile"})}catch(h){}},qyW2:function(e,t,n){"use strict";n.d(t,"b",(function(){return P})),n.d(t,"a",(function(){return T}));var r=n("zjfJ"),i=n("ERkP"),a=n.n(i),o=n("9Jhr"),l=n("g2fB"),u=n("WqRU"),s=n("oT5u"),c=n.n(s),d=n("EbDF"),f=n("Ifh9"),p=n("eMuC"),m=n("cjvV"),h=n("67po"),v=n("+fu8"),y=n("xc3W"),x=n("8/jq"),g=n("jpI8"),b=n("Cf/J"),O=n("ue4z"),w=n("mHfT"),j=a.a.createElement;function k(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function E(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?k(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):k(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var S=c.a.slice(800),P="#3b6978",T="#edffea",_=E(E({},v.b),{},{background:P,border:"1px solid white",color:"white"}),C=Object(w.a)("%b %d, '%y"),R=function(e){return new Date(e.date)},M=function(e){return e.close},A=Object(O.a)((function(e){return new Date(e.date)})).left;t.c=Object(y.a)((function(e){var t=e.width,n=e.height,r=e.margin,a=void 0===r?{top:0,right:0,bottom:0,left:0}:r,s=e.showTooltip,c=e.hideTooltip,y=e.tooltipData,w=e.tooltipTop,k=void 0===w?0:w,D=e.tooltipLeft,N=void 0===D?0:D;if(t<10)return null;var q=t-a.left-a.right,L=n-a.top-a.bottom,V=Object(i.useMemo)((function(){return Object(m.a)({range:[a.left,q+a.left],domain:Object(O.b)(S,R)})}),[q,a.left]),z=Object(i.useMemo)((function(){return Object(h.a)({range:[L+a.top,a.top],domain:[0,(Object(O.c)(S,M)||0)+L/3],nice:!0})}),[a.top,L]),W=Object(i.useCallback)((function(e){var t=(Object(g.a)(e)||{x:0}).x,n=V.invert(t),r=A(S,n,1),i=S[r-1],a=S[r],o=i;a&&R(a)&&(o=n.valueOf()-R(i).valueOf()>R(a).valueOf()-n.valueOf()?a:i),s({tooltipData:o,tooltipLeft:t,tooltipTop:z(M(o))})}),[s,z,V]);return j("div",null,j("svg",{width:t,height:n},j("rect",{x:0,y:0,width:t,height:n,fill:"url(#area-background-gradient)",rx:14}),j(b.a,{id:"area-background-gradient",from:P,to:"#204051"}),j(b.a,{id:"area-gradient",from:T,to:T,toOpacity:.1}),j(f.a,{left:a.left,scale:z,width:q,strokeDasharray:"1,3",stroke:T,strokeOpacity:0,pointerEvents:"none"}),j(p.a,{top:a.top,scale:V,height:L,strokeDasharray:"1,3",stroke:T,strokeOpacity:.2,pointerEvents:"none"}),j(o.a,{data:S,x:function(e){var t;return null!==(t=V(R(e)))&&void 0!==t?t:0},y:function(e){var t;return null!==(t=z(M(e)))&&void 0!==t?t:0},yScale:z,strokeWidth:1,stroke:"url(#area-gradient)",fill:"url(#area-gradient)",curve:d.a}),j(l.a,{x:a.left,y:a.top,width:q,height:L,fill:"transparent",rx:14,onTouchStart:W,onTouchMove:W,onMouseMove:W,onMouseLeave:function(){return c()}}),y&&j("g",null,j(u.a,{from:{x:N,y:a.top},to:{x:N,y:L+a.top},stroke:"#75daad",strokeWidth:2,pointerEvents:"none",strokeDasharray:"5,2"}),j("circle",{cx:N,cy:k+1,r:4,fill:"black",fillOpacity:.1,stroke:"black",strokeOpacity:.1,strokeWidth:2,pointerEvents:"none"}),j("circle",{cx:N,cy:k,r:4,fill:"#75daad",stroke:"white",strokeWidth:2,pointerEvents:"none"}))),y&&j("div",null,j(x.a,{key:Math.random(),top:k-12,left:N+12,style:_},"$".concat(M(y))),j(v.a,{top:L+a.top-14,left:N,style:E(E({},v.b),{},{minWidth:72,textAlign:"center",transform:"translateX(-50%)"})},C(R(y)))))}));try{Example.displayName="Example",Example.__docgenInfo={description:"",displayName:"Example",props:{width:{defaultValue:null,description:"",name:"width",required:!0,type:{name:"number"}},height:{defaultValue:null,description:"",name:"height",required:!0,type:{name:"number"}},margin:{defaultValue:null,description:"",name:"margin",required:!1,type:{name:"{ top: number; right: number; bottom: number; left: number; } | undefined"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/sandboxes/visx-area/Example.tsx#Example"]={docgenInfo:Example.__docgenInfo,name:"Example",path:"src/sandboxes/visx-area/Example.tsx#Example"})}catch(D){}},uLXA:function(e,t,n){"use strict";t.__esModule=!0,t.genPointsRange=l,t.default=function(e,t){void 0===e&&(e=300);void 0===t&&(t=void 0);var n=null==t?void 0:i.randomNormal.source((0,a.default)(t))(0,.2);return[].concat(l(e,[o,1,0],n),l(e,[-o,1,1],n),l(e,[0,-1,2],n))};var r,i=n("G/4L"),a=(r=n("U8e0"))&&r.__esModule?r:{default:r};var o=Math.sqrt(3);function l(e,t,n){var r=t[0],a=t[1],o=t[2];return void 0===n&&(n=(0,i.randomNormal)(0,.2)),function(e){return new Array(e).fill(1)}(e).map((function(){return[n()+r,n()+a,o]}))}},ue4z:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return s})),n.d(t,"d",(function(){return c})),n.d(t,"e",(function(){return u})),n.d(t,"f",(function(){return d}));var r=function(e,t){return e<t?-1:e>t?1:e>=t?0:NaN},i=function(e){var t;return 1===e.length&&(t=e,e=function(e,n){return r(t(e),n)}),{left:function(t,n,r,i){for(null==r&&(r=0),null==i&&(i=t.length);r<i;){var a=r+i>>>1;e(t[a],n)<0?r=a+1:i=a}return r},right:function(t,n,r,i){for(null==r&&(r=0),null==i&&(i=t.length);r<i;){var a=r+i>>>1;e(t[a],n)>0?i=a:r=a+1}return r}}};var a=i(r);a.right,a.left;var o=function(e,t){var n,r,i,a=e.length,o=-1;if(null==t){for(;++o<a;)if(null!=(n=e[o])&&n>=n)for(r=i=n;++o<a;)null!=(n=e[o])&&(r>n&&(r=n),i<n&&(i=n))}else for(;++o<a;)if(null!=(n=t(e[o],o,e))&&n>=n)for(r=i=n;++o<a;)null!=(n=t(e[o],o,e))&&(r>n&&(r=n),i<n&&(i=n));return[r,i]},l=Array.prototype,u=(l.slice,l.map,function(e,t,n){e=+e,t=+t,n=(i=arguments.length)<2?(t=e,e=0,1):i<3?1:+n;for(var r=-1,i=0|Math.max(0,Math.ceil((t-e)/n)),a=new Array(i);++r<i;)a[r]=e+r*n;return a});Math.sqrt(50),Math.sqrt(10),Math.sqrt(2);var s=function(e,t){var n,r,i=e.length,a=-1;if(null==t){for(;++a<i;)if(null!=(n=e[a])&&n>=n)for(r=n;++a<i;)null!=(n=e[a])&&n>r&&(r=n)}else for(;++a<i;)if(null!=(n=t(e[a],a,e))&&n>=n)for(r=n;++a<i;)null!=(n=t(e[a],a,e))&&n>r&&(r=n);return r},c=function(e){for(var t,n,r,i=e.length,a=-1,o=0;++a<i;)o+=e[a].length;for(n=new Array(o);--i>=0;)for(t=(r=e[i]).length;--t>=0;)n[--o]=r[t];return n},d=function(e){if(!(i=e.length))return[];for(var t=-1,n=function(e,t){var n,r,i=e.length,a=-1;if(null==t){for(;++a<i;)if(null!=(n=e[a])&&n>=n)for(r=n;++a<i;)null!=(n=e[a])&&r>n&&(r=n)}else for(;++a<i;)if(null!=(n=t(e[a],a,e))&&n>=n)for(r=n;++a<i;)null!=(n=t(e[a],a,e))&&r>n&&(r=n);return r}(e,f),r=new Array(n);++t<n;)for(var i,a=-1,o=r[t]=new Array(i);++a<i;)o[a]=e[a][t];return r};function f(e){return e.length}},uyuH:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return f}));var r=n("ERkP"),i=n.n(r),a=n("E0Ok"),o=n("i9k6"),l=n("PVmh");n.d(t,"packageJson",(function(){return l}));var u=i.a.createElement,s={background:"#fd6e7f"},c={color:"#f6c431"},d={showControls:!1};function f(){return u(o.a,{title:"Dots",description:"<Shape.Circle />",exampleProps:d,exampleRenderer:a.a,exampleUrl:"/dots",tileStyles:s,detailsStyles:c})}}}]);