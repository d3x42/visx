_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[91],{"+wNj":function(e,t,n){"use strict";function i(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}n.d(t,"a",(function(){return i}))},"3Zan":function(e,t,n){"use strict";n.r(t),n.d(t,"packageJson",(function(){return d})),n.d(t,"default",(function(){return p}));var i=n("yFcC"),r=n.n(i),a=n("ERkP"),o=n.n(a),l=n("i9k6"),u=o.a.createElement,d={name:"@visx/demo-text",dependencies:{"@visx/text":"current"}},s={background:"white",border:"1px solid lightgray",borderRadius:"14px"},c={color:"#232323",zIndex:1},f=function(){return u(o.a.Fragment,null,u("div",{className:"jsx-3885296640 text-demo"},"Flexible SVG Text"),u(r.a,{id:"3885296640"},[".text-demo.jsx-3885296640{height:100%;font-size:64px;font-weight:bold;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex:1;-ms-flex:1;flex:1;line-height:1em;padding:1rem;}"]))};function p(){return u(l.a,{title:"Text",description:"<Text.Text />",exampleRenderer:f,exampleUrl:"/text",tileStyles:s,detailsStyles:c})}},Dhk8:function(e,t,n){var i=n("Syyo"),r=n("KCLV"),a=n("kHoZ"),o=i?i.toStringTag:void 0;e.exports=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":o&&o in Object(e)?r(e):a(e)}},ENE1:function(e,t,n){var i=n("IBsm");e.exports=function(){return i.Date.now()}},HbGN:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var i=n("+wNj");function r(e,t){if(null==e)return{};var n,r,a=Object(i.a)(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}},IBsm:function(e,t,n){var i=n("e93E"),r="object"==typeof self&&self&&self.Object===Object&&self,a=i||r||Function("return this")();e.exports=a},KCLV:function(e,t,n){var i=n("Syyo"),r=Object.prototype,a=r.hasOwnProperty,o=r.toString,l=i?i.toStringTag:void 0;e.exports=function(e){var t=a.call(e,l),n=e[l];try{e[l]=void 0;var i=!0}catch(u){}var r=o.call(e);return i&&(t?e[l]=n:delete e[l]),r}},N38J:function(e,t,n){"use strict";n.r(t);var i=n("ERkP"),r=n.n(i),a=n("cxan"),o=n("HbGN"),l=n("leIH"),u=n.n(l),d=n("ViZ6");var s=n.n(d)()((function(e,t){try{var n=document.getElementById("__react_svg_text_measurement_id");if(!n){var i=document.createElementNS("http://www.w3.org/2000/svg","svg");i.style.width="0",i.style.height="0",i.style.position="absolute",i.style.top="-100%",i.style.left="-100%",(n=document.createElementNS("http://www.w3.org/2000/svg","text")).setAttribute("id","__react_svg_text_measurement_id"),i.appendChild(n),document.body.appendChild(i)}return Object.assign(n.style,t),n.textContent=e,n.getComputedTextLength()}catch(r){return null}}),(function(e,t){return"".concat(e,"_").concat(JSON.stringify(t))}));function c(e){return"number"===typeof e}function f(e){return"number"===typeof e&&Number.isFinite(e)||"string"===typeof e}function p(e){var t=e.verticalAnchor,n=void 0===t?"end":t,r=e.scaleToFit,a=void 0!==r&&r,l=e.angle,d=e.width,p=e.lineHeight,m=void 0===p?"1em":p,x=e.capHeight,h=void 0===x?"0.71em":x,y=e.children,g=e.style,b=Object(o.a)(e,["verticalAnchor","scaleToFit","angle","width","lineHeight","capHeight","children","style"]),v=b.x,w=void 0===v?0:v,S=b.y,O=void 0===S?0:S,j=!f(w)||!f(O),T=Object(i.useMemo)((function(){return{wordsWithWidth:(null==y?[]:y.toString().split(/(?:(?!\u00A0+)\s+)/)).map((function(e){return{word:e,wordWidth:s(e,g)||0}})),spaceWidth:s("\xa0",g)||0}}),[y,g]),V=T.wordsWithWidth,E=T.spaceWidth,_=Object(i.useMemo)((function(){return j?[]:d||a?V.reduce((function(e,t){var n=t.word,i=t.wordWidth,r=e[e.length-1];if(r&&(null==d||a||(r.width||0)+i+E<d))r.words.push(n),r.width=r.width||0,r.width+=i+E;else{var o={words:[n],width:i};e.push(o)}return e}),[]):[{words:null==y?[]:y.toString().split(/(?:(?!\u00A0+)\s+)/)}]}),[j,d,a,y,V,E]),q=Object(i.useMemo)((function(){return j?"":"start"===n?u()("calc(".concat(h,")")):"middle"===n?u()("calc(".concat((_.length-1)/2," * -").concat(m," + (").concat(h," / 2))")):u()("calc(".concat(_.length-1," * -").concat(m,")"))}),[j,n,h,_.length,m]),N=Object(i.useMemo)((function(){var e=[];if(j)return"";if(c(w)&&c(O)&&c(d)&&a&&_.length>0){var t=_[0].width||1,n=d/t,i=n,r=w-n*w,o=O-i*O;e.push("matrix(".concat(n,", 0, 0, ").concat(i,", ").concat(r,", ").concat(o,")"))}return l&&e.push("rotate(".concat(l,", ").concat(w,", ").concat(O,")")),e.length>0?e.join(" "):""}),[j,w,O,d,a,_,l]);return{wordsByLines:_,startDy:q,transform:N}}try{p.displayName="useText",p.__docgenInfo={description:"",displayName:"useText",props:{className:{defaultValue:null,description:"className to apply to the SVGText element.",name:"className",required:!1,type:{name:"string | undefined"}},scaleToFit:{defaultValue:null,description:"Whether to scale the fontSize to accommodate the specified width.",name:"scaleToFit",required:!1,type:{name:"boolean | undefined"}},angle:{defaultValue:null,description:"Rotational angle of the text.",name:"angle",required:!1,type:{name:"number | undefined"}},textAnchor:{defaultValue:null,description:"Horizontal text anchor.",name:"textAnchor",required:!1,type:{name:'"end" | "middle" | "inherit" | "start" | undefined'}},verticalAnchor:{defaultValue:null,description:"Vertical text anchor.",name:"verticalAnchor",required:!1,type:{name:'"end" | "middle" | "start" | undefined'}},style:{defaultValue:null,description:"Styles to be applied to the text (and used in computation of its size).",name:"style",required:!1,type:{name:"CSSProperties | undefined"}},innerRef:{defaultValue:null,description:"Ref passed to the Text SVG element.",name:"innerRef",required:!1,type:{name:"((instance: SVGSVGElement | null) => void) | RefObject<SVGSVGElement> | null | undefined"}},x:{defaultValue:null,description:"x position of the text.",name:"x",required:!1,type:{name:"string | number | undefined"}},y:{defaultValue:null,description:"y position of the text.",name:"y",required:!1,type:{name:"string | number | undefined"}},dx:{defaultValue:null,description:"dx offset of the text.",name:"dx",required:!1,type:{name:"string | number | undefined"}},dy:{defaultValue:null,description:"dy offset of the text.",name:"dy",required:!1,type:{name:"string | number | undefined"}},lineHeight:{defaultValue:null,description:'Desired "line height" of the text, implemented as y offsets.',name:"lineHeight",required:!1,type:{name:"string | number | undefined"}},capHeight:{defaultValue:null,description:"Cap height of the text.",name:"capHeight",required:!1,type:{name:"string | number | undefined"}},fontSize:{defaultValue:null,description:"Font size of text.",name:"fontSize",required:!1,type:{name:"string | number | undefined"}},fontFamily:{defaultValue:null,description:"Font family of text.",name:"fontFamily",required:!1,type:{name:"string | undefined"}},fill:{defaultValue:null,description:"Fill color of text.",name:"fill",required:!1,type:{name:"string | undefined"}},width:{defaultValue:null,description:"Maximum width to occupy (approximate as words are not split).",name:"width",required:!1,type:{name:"number | undefined"}},children:{defaultValue:null,description:"String (or number coercible to one) to be styled and positioned.",name:"children",required:!1,type:{name:"string | number | undefined"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../visx-text/src/hooks/useText.ts#useText"]={docgenInfo:p.__docgenInfo,name:"useText",path:"../visx-text/src/hooks/useText.ts#useText"})}catch(S){}var m=r.a.createElement,x={overflow:"visible"};function h(e){var t=e.dx,n=void 0===t?0:t,i=e.dy,r=void 0===i?0:i,l=e.textAnchor,u=void 0===l?"start":l,d=e.innerRef,s=(e.verticalAnchor,e.angle,e.lineHeight),c=void 0===s?"1em":s,f=(e.scaleToFit,e.capHeight,e.width,Object(o.a)(e,["dx","dy","textAnchor","innerRef","verticalAnchor","angle","lineHeight","scaleToFit","capHeight","width"])),h=f.x,y=void 0===h?0:h,g=f.fontSize,b=p(e),v=b.wordsByLines,w=b.startDy,S=b.transform;return m("svg",{ref:d,x:n,y:r,fontSize:g,style:x},v.length>0?m("text",Object(a.a)({transform:S},f,{textAnchor:u}),v.map((function(e,t){return m("tspan",{key:t,x:y,dy:0===t?w:c},e.words.join(" "))}))):null)}try{h.displayName="Text",h.__docgenInfo={description:"",displayName:"Text",props:{className:{defaultValue:null,description:"className to apply to the SVGText element.",name:"className",required:!1,type:{name:"string | undefined"}},scaleToFit:{defaultValue:null,description:"Whether to scale the fontSize to accommodate the specified width.",name:"scaleToFit",required:!1,type:{name:"boolean | undefined"}},angle:{defaultValue:null,description:"Rotational angle of the text.",name:"angle",required:!1,type:{name:"number | undefined"}},textAnchor:{defaultValue:null,description:"Horizontal text anchor.",name:"textAnchor",required:!1,type:{name:'"end" | "middle" | "inherit" | "start" | undefined'}},verticalAnchor:{defaultValue:null,description:"Vertical text anchor.",name:"verticalAnchor",required:!1,type:{name:'"end" | "middle" | "start" | undefined'}},style:{defaultValue:null,description:"Styles to be applied to the text (and used in computation of its size).",name:"style",required:!1,type:{name:"CSSProperties | undefined"}},innerRef:{defaultValue:null,description:"Ref passed to the Text SVG element.",name:"innerRef",required:!1,type:{name:"((instance: SVGSVGElement | null) => void) | RefObject<SVGSVGElement> | null | undefined"}},x:{defaultValue:null,description:"x position of the text.",name:"x",required:!1,type:{name:"string | number | undefined"}},y:{defaultValue:null,description:"y position of the text.",name:"y",required:!1,type:{name:"string | number | undefined"}},dx:{defaultValue:null,description:"dx offset of the text.",name:"dx",required:!1,type:{name:"string | number | undefined"}},dy:{defaultValue:null,description:"dy offset of the text.",name:"dy",required:!1,type:{name:"string | number | undefined"}},lineHeight:{defaultValue:null,description:'Desired "line height" of the text, implemented as y offsets.',name:"lineHeight",required:!1,type:{name:"string | number | undefined"}},capHeight:{defaultValue:null,description:"Cap height of the text.",name:"capHeight",required:!1,type:{name:"string | number | undefined"}},fontSize:{defaultValue:null,description:"Font size of text.",name:"fontSize",required:!1,type:{name:"string | number | undefined"}},fontFamily:{defaultValue:null,description:"Font family of text.",name:"fontFamily",required:!1,type:{name:"string | undefined"}},fill:{defaultValue:null,description:"Fill color of text.",name:"fill",required:!1,type:{name:"string | undefined"}},width:{defaultValue:null,description:"Maximum width to occupy (approximate as words are not split).",name:"width",required:!1,type:{name:"number | undefined"}},children:{defaultValue:null,description:"String (or number coercible to one) to be styled and positioned.",name:"children",required:!1,type:{name:"string | number | undefined"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../visx-text/src/Text.tsx#Text"]={docgenInfo:h.__docgenInfo,name:"Text",path:"../visx-text/src/Text.tsx#Text"})}catch(S){}var y=n("QnPE"),g=n("3Zan"),b=r.a.createElement,v=[h],w=[g.default];t.default=function(){return b(y.a,{components:v,examples:w,readme:'# @visx/text\n\n<a title="@visx/text npm downloads" href="https://www.npmjs.com/package/@visx/text">\n  <img src="https://img.shields.io/npm/dm/@visx/text.svg?style=flat-square" />\n</a>\n\nThe `@visx/text` provides a better SVG `<Text>` component with the following features\n\n- Word-wrapping (when `width` prop is defined)\n- Vertical alignment (`verticalAnchor` prop)\n- Rotation (`angle` prop)\n- Scale-to-fit text (`scaleToFit` prop)\n\n## Example\n\nSimple demo to show off a useful feature. Since svg `<text>` itself does not support\n`verticalAnchor`, normally text rendered at `0,0` would be outside the viewport and thus not\nvisible. By using `<Text>` with the `verticalAnchor="start"` prop, the text will now be visible as\nyou\'d expect.\n\n```jsx\nimport React from \'react\';\nimport { render } from \'react-dom\';\nimport { Text } from \'@visx/text\';\n\nconst App = () => (\n  <svg>\n    <Text verticalAnchor="start">Hello world</Text>\n  </svg>\n);\n\nrender(<App />, document.getElementById(\'root\'));\n```\n\n## Installation\n\n```\nnpm install --save @visx/text\n```\n',visxPackage:"text"})}},RNvQ:function(e,t,n){var i=n("tQYX"),r=n("ENE1"),a=n("nvU9"),o=Math.max,l=Math.min;e.exports=function(e,t,n){var u,d,s,c,f,p,m=0,x=!1,h=!1,y=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function g(t){var n=u,i=d;return u=d=void 0,m=t,c=e.apply(i,n)}function b(e){return m=e,f=setTimeout(w,t),x?g(e):c}function v(e){var n=e-p;return void 0===p||n>=t||n<0||h&&e-m>=s}function w(){var e=r();if(v(e))return S(e);f=setTimeout(w,function(e){var n=t-(e-p);return h?l(n,s-(e-m)):n}(e))}function S(e){return f=void 0,y&&u?g(e):(u=d=void 0,c)}function O(){var e=r(),n=v(e);if(u=arguments,d=this,p=e,n){if(void 0===f)return b(p);if(h)return clearTimeout(f),f=setTimeout(w,t),g(p)}return void 0===f&&(f=setTimeout(w,t)),c}return t=a(t)||0,i(n)&&(x=!!n.leading,s=(h="maxWait"in n)?o(a(n.maxWait)||0,t):s,y="trailing"in n?!!n.trailing:y),O.cancel=function(){void 0!==f&&clearTimeout(f),m=0,u=p=d=f=void 0},O.flush=function(){return void 0===f?c:S(r())},O}},Syyo:function(e,t,n){var i=n("IBsm").Symbol;e.exports=i},a88S:function(e,t,n){var i=n("Dhk8"),r=n("tLQN");e.exports=function(e){return"symbol"==typeof e||r(e)&&"[object Symbol]"==i(e)}},cxan:function(e,t,n){"use strict";function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}n.d(t,"a",(function(){return i}))},e93E:function(e,t,n){(function(t){var n="object"==typeof t&&t&&t.Object===Object&&t;e.exports=n}).call(this,n("fRV1"))},fRV1:function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(i){"object"===typeof window&&(n=window)}e.exports=n},i6Tx:function(e,t,n){"use strict";t.__esModule=!0,t.default=s;var i=u(n("aWzz")),r=u(n("RNvQ")),a=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=l();if(t&&t.has(e))return t.get(e);var n={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var a=i?Object.getOwnPropertyDescriptor(e,r):null;a&&(a.get||a.set)?Object.defineProperty(n,r,a):n[r]=e[r]}n.default=e,t&&t.set(e,n);return n}(n("ERkP")),o=u(n("LaGA"));function l(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return l=function(){return e},e}function u(e){return e&&e.__esModule?e:{default:e}}function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}function s(e){var t=e.className,n=e.children,i=e.debounceTime,l=void 0===i?300:i,u=e.ignoreDimensions,s=void 0===u?[]:u,c=e.parentSizeStyles,f=void 0===c?{width:"100%",height:"100%"}:c,p=e.enableDebounceLeadingCall,m=void 0===p||p,x=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,["className","children","debounceTime","ignoreDimensions","parentSizeStyles","enableDebounceLeadingCall"]),h=(0,a.useRef)(null),y=(0,a.useRef)(0),g=(0,a.useState)({width:0,height:0,top:0,left:0}),b=g[0],v=g[1],w=(0,a.useMemo)((function(){var e=Array.isArray(s)?s:[s];return(0,r.default)((function(t){v((function(n){return Object.keys(n).filter((function(e){return n[e]!==t[e]})).every((function(t){return e.includes(t)}))?n:t}))}),l,{leading:m})}),[l,m,s]);return(0,a.useEffect)((function(){var e=new o.default((function(e){void 0===e&&(e=[]),e.forEach((function(e){var t=e.contentRect,n=t.left,i=t.top,r=t.width,a=t.height;y.current=window.requestAnimationFrame((function(){w({width:r,height:a,top:i,left:n})}))}))}));return h.current&&e.observe(h.current),function(){window.cancelAnimationFrame(y.current),e.disconnect(),w.cancel()}}),[w]),a.default.createElement("div",d({style:f,ref:h,className:t},x),n(d({},b,{ref:h.current,resize:w})))}s.propTypes={className:i.default.string,debounceTime:i.default.number,enableDebounceLeadingCall:i.default.bool,ignoreDimensions:i.default.oneOfType([i.default.any,i.default.arrayOf(i.default.any)]),children:i.default.func.isRequired}},i9k6:function(e,t,n){"use strict";n.d(t,"a",(function(){return m}));var i=n("zjfJ"),r=n("yFcC"),a=n.n(r),o=n("ERkP"),l=n.n(o),u=n("jvFD"),d=n.n(u),s=n("i6Tx"),c=n.n(s),f=l.a.createElement;function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function m(e){var t,n,r=e.description,o=e.detailsHeight,u=void 0===o?76:o,s=e.detailsStyles,m=e.exampleProps,x=e.exampleRenderer,h=e.exampleUrl,y=e.tileStyles,g=e.title;return f(l.a.Fragment,null,(t=h,n=f("div",{style:y,className:"jsx-713312509 gallery-tile"},f("div",{className:"jsx-713312509 image"},f(c.a,null,(function(e){var t=e.width,n=e.height;return l.a.createElement(x,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){Object(i.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({width:t,height:n+(g||r?u:0)},m))}))),(g||r)&&f("div",{style:s,className:"jsx-713312509 details"},g&&f("div",{className:"jsx-713312509 title"},g),r&&f("div",{className:"jsx-713312509 description"},f("pre",{className:"jsx-713312509"},r)))),t?f(d.a,{href:t},n):n),f(a.a,{id:"713312509"},["h3.jsx-713312509{margin-top:0;margin-left:40px;margin-bottom:0;}",".gallery-tile.jsx-713312509{background-color:white;margin:5px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:390px;-webkit-flex:1;-ms-flex:1;flex:1;min-width:300px;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;border-radius:14px;cursor:pointer;}",".image.jsx-713312509{-webkit-flex:1;-ms-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;overflow:hidden;}",".details.jsx-713312509{text-align:center;padding:15px 20px;color:#ffffff;}",".title.jsx-713312509{font-weight:900;line-height:0.9rem;}",".description.jsx-713312509{font-weight:300;font-size:14px;}","pre.jsx-713312509{margin:0;background-color:transparent;min-width:unset;}","@media (max-width:960px){.gallery-tile.jsx-713312509{min-width:45%;}}","@media (max-width:600px){.gallery-tile.jsx-713312509{min-width:100%;}}"]))}try{m.displayName="GalleryTile",m.__docgenInfo={description:"",displayName:"GalleryTile",props:{description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string | undefined"}},detailsHeight:{defaultValue:{value:76},description:"",name:"detailsHeight",required:!1,type:{name:"number | undefined"}},detailsStyles:{defaultValue:null,description:"",name:"detailsStyles",required:!1,type:{name:"CSSProperties | undefined"}},exampleRenderer:{defaultValue:null,description:"",name:"exampleRenderer",required:!0,type:{name:"ComponentClass<ExampleProps, any> | FunctionComponent<ExampleProps>"}},exampleProps:{defaultValue:null,description:"",name:"exampleProps",required:!1,type:{name:'(Pick<ExampleProps, Exclude<keyof ExampleProps, "width" | "height">> & Partial<Pick<ExampleProps, "width" | "height">>) | undefined'}},exampleUrl:{defaultValue:null,description:"",name:"exampleUrl",required:!1,type:{name:"string | undefined"}},tileStyles:{defaultValue:null,description:"",name:"tileStyles",required:!1,type:{name:"CSSProperties | undefined"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string | undefined"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/GalleryTile.tsx#GalleryTile"]={docgenInfo:m.__docgenInfo,name:"GalleryTile",path:"src/components/GalleryTile.tsx#GalleryTile"})}catch(x){}},kHoZ:function(e,t){var n=Object.prototype.toString;e.exports=function(e){return n.call(e)}},nvU9:function(e,t,n){var i=n("tQYX"),r=n("a88S"),a=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,l=/^0b[01]+$/i,u=/^0o[0-7]+$/i,d=parseInt;e.exports=function(e){if("number"==typeof e)return e;if(r(e))return NaN;if(i(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=i(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(a,"");var n=l.test(e);return n||u.test(e)?d(e.slice(2),n?2:8):o.test(e)?NaN:+e}},tLQN:function(e,t){e.exports=function(e){return null!=e&&"object"==typeof e}},tQYX:function(e,t){e.exports=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}},wqH2:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/text",function(){return n("N38J")}])},zjfJ:function(e,t,n){"use strict";function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return i}))}},[["wqH2",0,2,1,3,9,8,10,12]]]);