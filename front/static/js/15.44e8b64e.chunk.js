(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{1330:function(e,t,n){},1422:function(e,t,n){"use strict";n.r(t);var a=n(30),r=n(31),i=n(34),o=n(32),c=n(33),l=n(1),s=n.n(l),u=n(51),d=n(108),p=n(914),f=n(350),m=n(543),h=n(544),y=n(276),v=n(277),b=n(351),g=n(297),k=n(346),E=n(279),C=n(361),O=n(308),j=n(333),S=n.n(j),w=n(363),x=n.n(w),M=n(284),N=(n(364),n(1330),function(e){function t(){var e,n;Object(a.a)(this,t);for(var r=arguments.length,c=new Array(r),l=0;l<r;l++)c[l]=arguments[l];return(n=Object(i.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(c)))).state={selectPlatform:[],selectSeniority:[],selectCompany:[],selectLocation:[],salary:"",comment:"",link:"",selectedVacancyStatus:"",description:O.EditorState.createEmpty(),details:O.EditorState.createEmpty()},n.handleInputChange=function(e){var t=e.target,a=t.name,r=t.value;n.setState(Object(d.a)({},a,r))},n.handleDescriptionStateChange=function(e){n.setState({description:e})},n.handleDetailsStateChange=function(e){n.setState({details:e})},n.handlePlatformChange=function(e){n.setState({selectPlatform:e})},n.handleSeniorityChange=function(e){n.setState({selectSeniority:e})},n.handleCompanyChange=function(e){n.setState({selectCompany:e})},n.handleLocationChange=function(e){n.setState({selectLocation:e})},n.onRadioBtnClick=function(e){n.setState({selectedVacancyStatus:e})},n.handleSubmit=function(e){e.preventDefault();var t=n.state,a=t.salary,r=t.description,i=t.details,o=n.props.onEditVacancy,c=Number(a),l=x()(Object(O.convertToRaw)(r.getCurrentContent())),s=x()(Object(O.convertToRaw)(i.getCurrentContent()));o(Object(u.a)({},n.state,{salary:c,description:l,details:s}))},n}return Object(c.a)(t,e),Object(r.a)(t,[{key:"componentDidUpdate",value:function(e){var t=this.props,n=t.vacancy,a=t.options;if(this.props!==e){if(null!==n.platform){var r=a.platforms.find(function(e){return e.id===n.platform.id});this.setState({selectPlatform:r})}if(null!==n.seniority){var i=a.seniority.find(function(e){return e.id===n.seniority.id});this.setState({selectSeniority:i})}if(null!==n.company){var o=a.companies.find(function(e){return e.id===n.company.id});this.setState({selectCompany:o})}if(null!==n.location){var c=a.location.find(function(e){return e.id===n.location.id});this.setState({selectLocation:c})}var l=n.description,s=S()(l);if(s){var u=O.ContentState.createFromBlockArray(s.contentBlocks),d=O.EditorState.createWithContent(u);this.setState({description:d})}var p=n.details;if(p){var f=S()(p);if(f){var m=O.ContentState.createFromBlockArray(f.contentBlocks),h=O.EditorState.createWithContent(m);this.setState({details:h})}}var y=null!==n.salary?n.salary:"",v=null!==n.comment?n.comment:"",b=null!==n.link?n.link:"",g=n.status.id;this.setState({salary:y,comment:v,link:b,selectedVacancyStatus:g})}}},{key:"render",value:function(){var e=this,t=this.state,n=t.selectPlatform,a=t.selectSeniority,r=t.selectCompany,i=t.selectLocation,o=t.salary,c=t.comment,l=t.link,u=t.selectedVacancyStatus,d=t.description,O=t.details,j=this.props,S=j.options,w=S.platforms,x=S.seniority,N=S.companies,T=S.location,B=j.vacancy.id;return s.a.createElement(f.a,{onSubmit:this.handleSubmit},s.a.createElement(m.a,null,s.a.createElement(h.a,{md:9},s.a.createElement(y.a,null,s.a.createElement(v.a,null,s.a.createElement("h6",null,"Description"),s.a.createElement(C.Editor,{editorState:d,wrapperClassName:"wrapper-class",editorClassName:"editor-class",toolbarClassName:"toolbar-class",localization:{locale:"ru"},onEditorStateChange:this.handleDescriptionStateChange}),s.a.createElement("h6",null,"Freelancer Description"),s.a.createElement(C.Editor,{editorState:O,wrapperClassName:"wrapper-class",editorClassName:"editor-class",toolbarClassName:"toolbar-class",localization:{locale:"ru"},onEditorStateChange:this.handleDetailsStateChange})))),s.a.createElement(h.a,{md:3},s.a.createElement(y.a,null,s.a.createElement(v.a,null,s.a.createElement(m.a,null,s.a.createElement(h.a,null,s.a.createElement(b.a,null,s.a.createElement(M.a,{value:n,options:w,placeholder:"Platform",onChange:this.handlePlatformChange})),s.a.createElement(b.a,null,s.a.createElement(M.a,{value:a,options:x,placeholder:"Seniority",onChange:this.handleSeniorityChange})),s.a.createElement(b.a,null,s.a.createElement(M.a,{value:r,options:N,placeholder:"Company",onChange:this.handleCompanyChange})),s.a.createElement(b.a,null,s.a.createElement(M.a,{value:i,options:T,placeholder:"Location",onChange:this.handleLocationChange})),s.a.createElement(b.a,{row:!0},s.a.createElement(h.a,null,s.a.createElement(g.a,{id:"salary",type:"text",name:"salary",value:o,placeholder:"Salary",onChange:this.handleInputChange}),s.a.createElement("i",{style:{position:"absolute",top:"0.6rem",right:"1.75rem"},className:"cui-dollar icons font-lg"}))),s.a.createElement(b.a,{row:!0},s.a.createElement(h.a,null,s.a.createElement(g.a,{id:"comment",type:"textarea",name:"comment",value:c,placeholder:"Comment",onChange:this.handleInputChange}),s.a.createElement("i",{style:{position:"absolute",top:"0.6rem",right:"1.75rem"},className:"icon-note icons font-lg"}))),s.a.createElement(b.a,{row:!0},s.a.createElement(h.a,null,s.a.createElement(g.a,{id:"link",type:"url",name:"link",value:l,placeholder:"Link",onChange:this.handleInputChange}),s.a.createElement("i",{style:{position:"absolute",top:"0.6rem",right:"1.75rem"},className:"icon-link icons font-lg"}))),s.a.createElement(k.a,{style:{display:"flex",marginBottom:"1rem"}},s.a.createElement(E.a,{className:"btn-default",active:0===u,onClick:function(){return e.onRadioBtnClick(0)}},s.a.createElement("i",{className:"fa fa-fire"})),s.a.createElement(E.a,{className:"btn-default",active:1===u,onClick:function(){return e.onRadioBtnClick(1)}},s.a.createElement("i",{className:"fa fa-check-circle"})),s.a.createElement(E.a,{className:"btn-default",active:2===u,onClick:function(){return e.onRadioBtnClick(2)}},s.a.createElement("i",{className:"fa fa-history"})),s.a.createElement(E.a,{className:"btn-default",active:3===u,onClick:function(){return e.onRadioBtnClick(3)}},s.a.createElement("i",{className:"fa fa-ban"}))),s.a.createElement(b.a,{row:!0},s.a.createElement(h.a,null,s.a.createElement(E.a,{type:"submit",color:"primary",block:!0},"Save"))),s.a.createElement(b.a,{row:!0},s.a.createElement(h.a,null,s.a.createElement(p.a,{to:"/vacancies/".concat(B),style:{textDecoration:"none"}},s.a.createElement(E.a,{type:"button",outline:!0,color:"secondary",block:!0},"Cancel")))))))))))}}]),t}(l.Component));N.defaultProps={vacancy:{id:null,seniority:{},platform:{},company:{},location:{},status:{},salary:"",link:"",date:"",description:"",details:""}};var T=n(422),B=n(466),P=function(e){function t(){var e,n;Object(a.a)(this,t);for(var r=arguments.length,c=new Array(r),l=0;l<r;l++)c[l]=arguments[l];return(n=Object(i.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(c)))).state={vacancy:{id:null,date:"",company:{},platform:{},seniority:{},status:{},location:{},salary:null,link:"",description:"",details:""}},n.editVacancy=function(e){var t=n.props.match.params.id;Object(B.d)(t,e).then(function(e){n.props.history.push("/vacancies/".concat(e.id))})},n}return Object(c.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.id;Object(B.c)(t).then(function(t){e.setState({vacancy:t})})}},{key:"render",value:function(){var e=this.state.vacancy,t=this.props.options;return s.a.createElement(s.a.Fragment,null,s.a.createElement("h3",null,"Edit Vacancy"),s.a.createElement(N,{options:t,vacancy:e,onEditVacancy:this.editVacancy}))}}]),t}(l.Component);t.default=Object(T.a)(P)},276:function(e,t,n){"use strict";var a=n(24),r=n(106),i=n(1),o=n.n(i),c=n(0),l=n.n(c),s=n(105),u=n.n(s),d=n(50),p={tag:d.q,inverse:l.a.bool,color:l.a.string,block:Object(d.h)(l.a.bool,'Please use the props "body"'),body:l.a.bool,outline:l.a.bool,className:l.a.string,cssModule:l.a.object,innerRef:l.a.oneOfType([l.a.object,l.a.string,l.a.func])},f=function(e){var t=e.className,n=e.cssModule,i=e.color,c=e.block,l=e.body,s=e.inverse,p=e.outline,f=e.tag,m=e.innerRef,h=Object(r.a)(e,["className","cssModule","color","block","body","inverse","outline","tag","innerRef"]),y=Object(d.m)(u()(t,"card",!!s&&"text-white",!(!c&&!l)&&"card-body",!!i&&(p?"border":"bg")+"-"+i),n);return o.a.createElement(f,Object(a.a)({},h,{className:y,ref:m}))};f.propTypes=p,f.defaultProps={tag:"div"},t.a=f},277:function(e,t,n){"use strict";var a=n(24),r=n(106),i=n(1),o=n.n(i),c=n(0),l=n.n(c),s=n(105),u=n.n(s),d=n(50),p={tag:d.q,className:l.a.string,cssModule:l.a.object,innerRef:l.a.oneOfType([l.a.object,l.a.string,l.a.func])},f=function(e){var t=e.className,n=e.cssModule,i=e.innerRef,c=e.tag,l=Object(r.a)(e,["className","cssModule","innerRef","tag"]),s=Object(d.m)(u()(t,"card-body"),n);return o.a.createElement(c,Object(a.a)({},l,{className:s,ref:i}))};f.propTypes=p,f.defaultProps={tag:"div"},t.a=f},284:function(e,t,n){"use strict";var a=n(1),r=n.n(a),i=n(365);t.a=function(e){var t=e.name,n=void 0===t?"select":t,a=e.defaultValue,o=e.isMulti,c=void 0!==o&&o,l=e.isDisabled,s=void 0!==l&&l,u=e.closeMenuOnSelect,d=e.inputValue,p=e.value,f=e.options,m=e.components,h=e.theme,y=e.styles,v=e.selectOption,b=e.selectProps,g=e.setValue,k=e.placeholder,E=e.onChange,C=e.onInputChange;return r.a.createElement(i.a,{name:n,defaultValue:a,isMulti:c,isDisabled:s,inputValue:d,value:p,options:f,closeMenuOnSelect:u,components:m,theme:h,styles:y,selectOption:v,selectProps:b,setValue:g,placeholder:k,className:"basic-multi-select",classNamePrefix:"select",onChange:E,onInputChange:C})}},297:function(e,t,n){"use strict";var a=n(24),r=n(106),i=n(271),o=n(272),c=n(1),l=n.n(c),s=n(0),u=n.n(s),d=n(105),p=n.n(d),f=n(50),m={children:u.a.node,type:u.a.string,size:u.a.string,bsSize:u.a.string,state:Object(f.h)(u.a.string,'Please use the props "valid" and "invalid" to indicate the state.'),valid:u.a.bool,invalid:u.a.bool,tag:f.q,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),static:Object(f.h)(u.a.bool,'Please use the prop "plaintext"'),plaintext:u.a.bool,addon:u.a.bool,className:u.a.string,cssModule:u.a.object},h=function(e){function t(t){var n;return(n=e.call(this,t)||this).getRef=n.getRef.bind(Object(o.a)(Object(o.a)(n))),n.focus=n.focus.bind(Object(o.a)(Object(o.a)(n))),n}Object(i.a)(t,e);var n=t.prototype;return n.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},n.focus=function(){this.ref&&this.ref.focus()},n.render=function(){var e=this.props,t=e.className,n=e.cssModule,i=e.type,o=e.bsSize,c=e.state,s=e.valid,u=e.invalid,d=e.tag,m=e.addon,h=e.static,y=e.plaintext,v=e.innerRef,b=Object(r.a)(e,["className","cssModule","type","bsSize","state","valid","invalid","tag","addon","static","plaintext","innerRef"]),g=["radio","checkbox"].indexOf(i)>-1,k=new RegExp("\\D","g"),E=d||("select"===i||"textarea"===i?i:"input"),C="form-control";y||h?(C+="-plaintext",E=d||"input"):"file"===i?C+="-file":g&&(C=m?null:"form-check-input"),c&&"undefined"===typeof s&&"undefined"===typeof u&&("danger"===c?u=!0:"success"===c&&(s=!0)),b.size&&k.test(b.size)&&(Object(f.s)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),o=b.size,delete b.size);var O=Object(f.m)(p()(t,u&&"is-invalid",s&&"is-valid",!!o&&"form-control-"+o,C),n);return("input"===E||d&&"function"===typeof d)&&(b.type=i),!b.children||y||h||"select"===i||"string"!==typeof E||"select"===E||(Object(f.s)('Input with a type of "'+i+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete b.children),l.a.createElement(E,Object(a.a)({},b,{ref:v,className:O}))},t}(l.a.Component);h.propTypes=m,h.defaultProps={type:"text"},t.a=h},333:function(e,t,n){var a,r;"undefined"!=typeof self&&self,e.exports=(a=n(280),r=n(308),function(e){function t(a){if(n[a])return n[a].exports;var r=n[a]={i:a,l:!1,exports:{}};return e[a].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,a){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:a})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=2)}([function(e,t){e.exports=a},function(e,t){e.exports=r},function(e,t,n){e.exports=n(3)},function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function r(e,t,n,a,i,c){var l=e.nodeName.toLowerCase();if(c){var s=c(l,e);if(s){var d=o.Entity.__create(s.type,s.mutability,s.data||{});return{chunk:(0,u.getAtomicBlockChunk)(d)}}}if("#text"===l&&"\n"!==e.textContent)return(0,u.createTextChunk)(e,t,i);if("br"===l)return{chunk:(0,u.getSoftNewlineChunk)()};if("img"===l&&e instanceof HTMLImageElement){var f={};f.src=e.getAttribute&&e.getAttribute("src")||e.src,f.alt=e.alt,f.height=e.style.height,f.width=e.style.width,e.style.float&&(f.alignment=e.style.float);var h=o.Entity.__create("IMAGE","MUTABLE",f);return{chunk:(0,u.getAtomicBlockChunk)(h)}}if("iframe"===l&&e instanceof HTMLIFrameElement){var v={};v.src=e.getAttribute&&e.getAttribute("src")||e.src,v.height=e.height,v.width=e.width;var g=o.Entity.__create("EMBEDDED_LINK","MUTABLE",v);return{chunk:(0,u.getAtomicBlockChunk)(g)}}var k=(0,p.default)(l,a),C=void 0;k&&("ul"===l||"ol"===l?(a=l,n+=1):("unordered-list-item"!==k&&"ordered-list-item"!==k&&(a="",n=-1),E?(C=(0,u.getFirstBlockChunk)(k,(0,y.default)(e)),E=!1):C=(0,u.getBlockDividerChunk)(k,n,(0,y.default)(e)))),C||(C=(0,u.getEmptyChunk)()),t=(0,m.default)(l,e,t);for(var O=e.firstChild;O;){var j=(0,b.default)(O),S=r(O,t,n,a,j||i,c),w=S.chunk;C=(0,u.joinChunks)(C,w),O=O.nextSibling}return{chunk:C}}function i(e,t){var n=e.trim().replace(k,g),a=(0,s.default)(n);return a?(E=!0,{chunk:r(a,new c.OrderedSet,-1,"",void 0,t).chunk}):null}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n=i(e,t);if(n){var a=n.chunk,r=new c.OrderedMap({});a.entities&&a.entities.forEach(function(e){e&&(r=r.set(e,o.Entity.__get(e)))});var l=0;return{contentBlocks:a.text.split("\r").map(function(e,t){var n=l+e.length,r=a&&a.inlines.slice(l,n),i=a&&a.entities.slice(l,n),s=new c.List(r.map(function(e,t){var n={style:e,entity:null};return i[t]&&(n.entity=i[t]),o.CharacterMetadata.create(n)}));return l=n,new o.ContentBlock({key:(0,o.genKey)(),type:a&&a.blocks[t]&&a.blocks[t].type||"unstyled",depth:a&&a.blocks[t]&&a.blocks[t].depth,data:a&&a.blocks[t]&&a.blocks[t].data||new c.Map({}),text:e,characterList:s})}),entityMap:r}}return null};var o=n(1),c=n(0),l=n(4),s=a(l),u=n(5),d=n(6),p=a(d),f=n(7),m=a(f),h=n(8),y=a(h),v=n(9),b=a(v),g=" ",k=new RegExp("&nbsp;","g"),E=!0},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t,n=null;return document.implementation&&document.implementation.createHTMLDocument&&((t=document.implementation.createHTMLDocument("foo")).documentElement.innerHTML=e,n=t.getElementsByTagName("body")[0]),n}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.joinChunks=t.getAtomicBlockChunk=t.getBlockDividerChunk=t.getFirstBlockChunk=t.getEmptyChunk=t.getSoftNewlineChunk=t.createTextChunk=t.getWhitespaceChunk=void 0;var a=n(0),r=t.getWhitespaceChunk=function(e){return{text:" ",inlines:[new a.OrderedSet],entities:[e],blocks:[]}};t.createTextChunk=function(e,t,n){var a=e.textContent;return""===a.trim()?{chunk:r(n)}:{chunk:{text:a,inlines:Array(a.length).fill(t),entities:Array(a.length).fill(n),blocks:[]}}},t.getSoftNewlineChunk=function(){return{text:"\n",inlines:[new a.OrderedSet],entities:new Array(1),blocks:[]}},t.getEmptyChunk=function(){return{text:"",inlines:[],entities:[],blocks:[]}},t.getFirstBlockChunk=function(e,t){return{text:"",inlines:[],entities:[],blocks:[{type:e,depth:0,data:t||new a.Map({})}]}},t.getBlockDividerChunk=function(e,t,n){return{text:"\r",inlines:[],entities:[],blocks:[{type:e,depth:Math.max(0,Math.min(4,t)),data:n||new a.Map({})}]}},t.getAtomicBlockChunk=function(e){return{text:"\r ",inlines:[new a.OrderedSet],entities:[e],blocks:[{type:"atomic",depth:0,data:new a.Map({})}]}},t.joinChunks=function(e,t){return{text:e.text+t.text,inlines:e.inlines.concat(t.inlines),entities:e.entities.concat(t.entities),blocks:e.blocks.concat(t.blocks)}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n=r.filter(function(n){return n.element===e&&(!n.wrapper||n.wrapper===t)||n.wrapper===e||n.aliasedElements&&n.aliasedElements.indexOf(e)>-1}).keySeq().toSet().toArray();if(1===n.length)return n[0]};var a=n(0),r=new a.Map({"header-one":{element:"h1"},"header-two":{element:"h2"},"header-three":{element:"h3"},"header-four":{element:"h4"},"header-five":{element:"h5"},"header-six":{element:"h6"},"unordered-list-item":{element:"li",wrapper:"ul"},"ordered-list-item":{element:"li",wrapper:"ol"},blockquote:{element:"blockquote"},code:{element:"pre"},atomic:{element:"figure"},unstyled:{element:"p",aliasedElements:["div"]}})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,n){var r=a[e],i=void 0;if(r)i=n.add(r).toOrderedSet();else if(t instanceof HTMLElement){var o=t;i=(i=n).withMutations(function(e){var t=o.style.color,n=o.style.backgroundColor,a=o.style.fontSize,r=o.style.fontFamily.replace(/^"|"$/g,"");t&&e.add("color-"+t.replace(/ /g,"")),n&&e.add("bgcolor-"+n.replace(/ /g,"")),a&&e.add("fontsize-"+a.replace(/px$/g,"")),r&&e.add("fontfamily-"+r)}).toOrderedSet()}return i};var a={code:"CODE",del:"STRIKETHROUGH",em:"ITALIC",strong:"BOLD",ins:"UNDERLINE",sub:"SUBSCRIPT",sup:"SUPERSCRIPT"}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){if(e.style.textAlign)return new a.Map({"text-align":e.style.textAlign})};var a=n(0)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(1);t.default=function(e){var t=void 0;if(e instanceof HTMLAnchorElement){var n={};e.dataset&&void 0!==e.dataset.mention?(n.url=e.href,n.text=e.innerHTML,n.value=e.dataset.value,t=a.Entity.__create("MENTION","IMMUTABLE",n)):(n.url=e.getAttribute&&e.getAttribute("href")||e.href,n.title=e.innerHTML,n.targetOption=e.target,t=a.Entity.__create("LINK","MUTABLE",n))}return t}}]))},346:function(e,t,n){"use strict";var a=n(24),r=n(106),i=n(1),o=n.n(i),c=n(0),l=n.n(c),s=n(105),u=n.n(s),d=n(50),p={tag:d.q,"aria-label":l.a.string,className:l.a.string,cssModule:l.a.object,role:l.a.string,size:l.a.string,vertical:l.a.bool},f=function(e){var t=e.className,n=e.cssModule,i=e.size,c=e.vertical,l=e.tag,s=Object(r.a)(e,["className","cssModule","size","vertical","tag"]),p=Object(d.m)(u()(t,!!i&&"btn-group-"+i,c?"btn-group-vertical":"btn-group"),n);return o.a.createElement(l,Object(a.a)({},s,{className:p}))};f.propTypes=p,f.defaultProps={tag:"div",role:"group"},t.a=f},422:function(e,t,n){"use strict";var a=n(51),r=n(30),i=n(31),o=n(34),c=n(32),l=n(33),s=n(1),u=n.n(s),d=n(309);t.a=function(e){return function(t){function n(){var e,t;Object(r.a)(this,n);for(var a=arguments.length,i=new Array(a),l=0;l<a;l++)i[l]=arguments[l];return(t=Object(o.a)(this,(e=Object(c.a)(n)).call.apply(e,[this].concat(i)))).state={platforms:[],seniority:[],companies:[],location:[]},t}return Object(l.a)(n,t),Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;Object(d.p)().then(function(t){var n={platforms:t.platforms,seniority:t.seniorities,companies:t.companies,location:t.location};e.setState(Object(a.a)({},n))})}},{key:"render",value:function(){return u.a.createElement(e,Object.assign({options:this.state},this.props))}}]),n}(s.Component)}},466:function(e,t,n){"use strict";n.d(t,"c",function(){return l}),n.d(t,"a",function(){return s}),n.d(t,"d",function(){return u}),n.d(t,"b",function(){return d});var a=n(295),r=n.n(a),i=n(296),o="http://api.uppeople.co/api",c=function(){return localStorage.getItem("token")},l=function(e){var t=c();return fetch("".concat(o,"/main/viewVacancy/").concat(e),{method:"GET",headers:{Authorization:"Bearer "+t,"Content-Type":"application/json"}}).then(function(e){if(e.ok)return e.json();throw new Error("Error while fetching: ".concat(e.statusText))}).then(function(e){var t=e[0];return{id:t.id,date:t.date_create,company:t.company,platform:t.platforms,seniority:t.seniorities,status:t.status,location:t.location,salary:t.salary,link:t.link,description:t.opus,details:t.details}}).catch(function(e){return console.log("error in fetch: ",e)})},s=function(){var e=Object(i.a)(r.a.mark(function e(t){var n,a;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=c(),e.prev=1,e.next=4,fetch("".concat(o,"/main/addNewVacancy"),{method:"POST",headers:{Authorization:"Bearer "+n,"Content-Type":"application/json"},body:JSON.stringify(t)});case 4:if(!(a=e.sent).ok){e.next=7;break}return e.abrupt("return",a.json());case 7:throw new Error("".concat(a.statusText));case 10:return e.prev=10,e.t0=e.catch(1),e.abrupt("return",console.log("error in fetch: ",e.t0));case 13:case"end":return e.stop()}},e,null,[[1,10]])}));return function(t){return e.apply(this,arguments)}}(),u=function(e,t){var n=c();return fetch("".concat(o,"/main/editVacancy/").concat(e),{method:"POST",headers:{Authorization:"Bearer "+n,"Content-Type":"application/json"},body:JSON.stringify(t)}).then(function(e){if(e.ok)return e.json();throw new Error("".concat(e.statusText))}).then(function(e){var t=e[0];return{id:t.id,date:t.date_create,company:t.company,platform:t.platforms,seniority:t.seniorities,status:t.status,location:t.location,salary:t.salary,link:t.link,description:t.opus,details:t.details}}).catch(function(e){return console.log("error in fetch: ",e)})},d=function(){var e=Object(i.a)(r.a.mark(function e(t){var n,a;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=c(),e.prev=1,e.next=4,fetch("".concat(o,"/main/deleteVacancy/").concat(t),{method:"GET",headers:{Authorization:"Bearer "+n,"Content-Type":"application/json"}});case 4:if(!(a=e.sent).ok){e.next=7;break}return e.abrupt("return",a.json());case 7:throw new Error("".concat(a.statusText));case 10:return e.prev=10,e.t0=e.catch(1),e.abrupt("return",console.log("error in fetch: ",e.t0));case 13:case"end":return e.stop()}},e,null,[[1,10]])}));return function(t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=15.44e8b64e.chunk.js.map