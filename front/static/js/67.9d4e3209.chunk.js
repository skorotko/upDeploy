(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{1408:function(e,a,t){"use strict";t.r(a);var n=t(51),r=t(30),l=t(31),s=t(34),o=t(32),c=t(33),i=t(1),g=t.n(i),u=t(543),m=t(544),p=t(337),d=t(275),b=t.n(d),f=t(914),v=function(e){var a=e.idx,t=e.date,n=e.text,r=e.vacId,l=e.vac,s=e.compId,o=e.compName;return g.a.createElement(g.a.Fragment,null,g.a.createElement("td",null,a+1),g.a.createElement("td",null,b()(t).format("Do MMMM YYYY, h:mm:ss a")),g.a.createElement("td",null,n),g.a.createElement("td",null,g.a.createElement(f.a,{to:"vacancies/".concat(r)},l)),g.a.createElement("td",null,g.a.createElement(f.a,{to:"companies/".concat(s)},o)))};v.defaultProps={date:"",text:"",vac:"",compName:""};var P=v,h=t(322),E=function(e){var a=e.logs,t=e.totalItems,n=e.pageSize,r=e.totalPages,l=e.currentPage,s=e.onChangePage,o=a.length>0?a.map(function(e,a){return g.a.createElement("tr",{key:e.logId},g.a.createElement(P,Object.assign({idx:a},e)))}):g.a.createElement("tr",{style:{color:"var(--secondary)"}},g.a.createElement("td",{colSpan:9,align:"center"},"Nothing found"," ",g.a.createElement("span",{role:"img","aria-label":"confused face"},"\ud83d\ude15")));return g.a.createElement(g.a.Fragment,null,g.a.createElement(p.a,{style:{background:"var(--white)"},responsive:!0,hover:!0},g.a.createElement("thead",null,g.a.createElement("tr",null,g.a.createElement("th",{scope:"col"},"#"),g.a.createElement("th",{scope:"col"},"Date"),g.a.createElement("th",{scope:"col"},"Action"),g.a.createElement("th",{scope:"col"},"Vacancy"),g.a.createElement("th",{scope:"col"},"Company"))),g.a.createElement("tbody",null,o)),a.length>0?g.a.createElement(u.a,null,g.a.createElement(m.a,null,g.a.createElement(h.a,{items:a,totalItems:t,pageSize:n,totalPages:r,initialPage:l,onChangePage:s}))):null)};E.defaultProps={logs:[],currentPage:null,pageSize:null,totalItems:null,totalPages:null,onChangePage:function(){return null}};var y=E,j=t(309);t.d(a,"default",function(){return N});var N=function(e){function a(){var e,t;Object(r.a)(this,a);for(var l=arguments.length,c=new Array(l),i=0;i<l;i++)c[i]=arguments[i];return(t=Object(s.a)(this,(e=Object(o.a)(a)).call.apply(e,[this].concat(c)))).state={logs:[],totalLogs:null,totalPages:null,perPage:null,currentPage:1},t.onChangePage=function(e){t.getData(e)},t.getData=function(e){Object(j.h)(e).then(function(e){var a={logs:e.logs,totalLogs:e.Count,totalPages:e.Page,perPage:e.perPage,currentPage:e.currentPage};t.setState(Object(n.a)({},t.state,a),function(){return console.log(t.state)})})},t}return Object(c.a)(a,e),Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this.state.currentPage;this.getData(e)}},{key:"render",value:function(){var e=this.state,a=e.logs,t=e.totalLogs,n=e.perPage,r=e.totalPages,l=e.currentPage;return g.a.createElement(g.a.Fragment,null,g.a.createElement(u.a,null,g.a.createElement(m.a,{style:{display:"flex",justifyContent:"space-between",maxWidth:150,marginBottom:"0.5rem"}},g.a.createElement("h1",{style:{marginBottom:0,fontSize:24}},"Activity"),g.a.createElement("span",{style:{alignSelf:"flex-end",color:"var(--gray)"}},t))),g.a.createElement(u.a,null,g.a.createElement(m.a,null,g.a.createElement(y,{logs:a,totalItems:t,pageSize:n,totalPages:r,currentPage:l,onChangePage:this.onChangePage}))))}}]),a}(i.Component)},294:function(e,a,t){"use strict";function n(e){return function(e){if(Array.isArray(e)){for(var a=0,t=new Array(e.length);a<e.length;a++)t[a]=e[a];return t}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}t.d(a,"a",function(){return n})},322:function(e,a,t){"use strict";var n=t(294),r=t(30),l=t(31),s=t(34),o=t(32),c=t(33),i=t(1),g=t.n(i),u=t(416),m=t(417),p=t(418),d=function(e){function a(e){var t;return Object(r.a)(this,a),(t=Object(s.a)(this,Object(o.a)(a).call(this,e))).setPage=function(e){var a=t.props,n=a.totalItems,r=a.totalPages,l=a.pageSize,s=t.state.pager;e<1||e>r||(s=t.getPager(n,e,l),t.setState({pager:s}),t.props.onChangePage(e))},t.getPager=function(e,a,t){a=a||1,t=t||10;var r,l,s=Math.ceil(e/t);s<=10?(r=1,l=s):a<=6?(r=1,l=10):a+4>=s?(r=s-9,l=s):(r=a-5,l=a+4);var o=(a-1)*t,c=Math.min(o+t-1,e-1),i=Object(n.a)(Array(l+1-r).keys()).map(function(e){return r+e});return{totalItems:e,currentPage:a,pageSize:t,totalPages:s,startPage:r,endPage:l,startIndex:o,endIndex:c,pages:i}},t.state={pager:{}},t}return Object(c.a)(a,e),Object(l.a)(a,[{key:"componentDidMount",value:function(){this.props.items&&this.props.items.length&&this.setPage(this.props.initialPage)}},{key:"componentDidUpdate",value:function(e){this.props.initialPage===e.initialPage&&this.props.totalItems===e.totalItems||this.setPage(this.props.initialPage)}},{key:"render",value:function(){var e=this,a=this.state.pager;return!a.pages||a.pages.length<=1?null:g.a.createElement(u.a,{className:"pagination justify-content-end"},g.a.createElement(m.a,{className:"page-item",disabled:1===a.currentPage},g.a.createElement(p.a,{className:"page-link",onClick:function(){return e.setPage(1)}},"First")),g.a.createElement(m.a,{className:"page-item",disabled:1===a.currentPage},g.a.createElement(p.a,{className:"page-link",onClick:function(){return e.setPage(a.currentPage-1)}},"Previous")),a.pages.map(function(t,n){return g.a.createElement(m.a,{key:n,className:"page-item",active:a.currentPage===t},g.a.createElement(p.a,{className:"page-link",onClick:function(){return e.setPage(t)}},t))}),g.a.createElement(m.a,{className:"page-item",disabled:a.currentPage===a.totalPages},g.a.createElement(p.a,{className:"page-link",onClick:function(){return e.setPage(a.currentPage+1)}},"Next")),g.a.createElement(m.a,{className:"page-item",disabled:a.currentPage===a.totalPages},g.a.createElement(p.a,{className:"page-link",onClick:function(){return e.setPage(a.totalPages)}},"Last")))}}]),a}(i.Component);d.defaultProps={items:[],initialPage:1,pageSize:10,totalItems:null,totalPages:null,onChangePage:function(){return null}},a.a=d},337:function(e,a,t){"use strict";var n=t(24),r=t(106),l=t(1),s=t.n(l),o=t(0),c=t.n(o),i=t(105),g=t.n(i),u=t(50),m={className:c.a.string,cssModule:c.a.object,size:c.a.string,bordered:c.a.bool,borderless:c.a.bool,striped:c.a.bool,inverse:Object(u.h)(c.a.bool,'Please use the prop "dark"'),dark:c.a.bool,hover:c.a.bool,responsive:c.a.oneOfType([c.a.bool,c.a.string]),tag:u.q,responsiveTag:u.q,innerRef:c.a.oneOfType([c.a.func,c.a.string,c.a.object])},p=function(e){var a=e.className,t=e.cssModule,l=e.size,o=e.bordered,c=e.borderless,i=e.striped,m=e.inverse,p=e.dark,d=e.hover,b=e.responsive,f=e.tag,v=e.responsiveTag,P=e.innerRef,h=Object(r.a)(e,["className","cssModule","size","bordered","borderless","striped","inverse","dark","hover","responsive","tag","responsiveTag","innerRef"]),E=Object(u.m)(g()(a,"table",!!l&&"table-"+l,!!o&&"table-bordered",!!c&&"table-borderless",!!i&&"table-striped",!(!p&&!m)&&"table-dark",!!d&&"table-hover"),t),y=s.a.createElement(f,Object(n.a)({},h,{ref:P,className:E}));if(b){var j=!0===b?"table-responsive":"table-responsive-"+b;return s.a.createElement(v,{className:j},y)}return y};p.propTypes=m,p.defaultProps={tag:"table",responsiveTag:"div"},a.a=p},416:function(e,a,t){"use strict";var n=t(24),r=t(106),l=t(1),s=t.n(l),o=t(0),c=t.n(o),i=t(105),g=t.n(i),u=t(50),m={children:c.a.node,className:c.a.string,listClassName:c.a.string,cssModule:c.a.object,size:c.a.string,tag:u.q,listTag:u.q,"aria-label":c.a.string},p=function(e){var a,t=e.className,l=e.listClassName,o=e.cssModule,c=e.size,i=e.tag,m=e.listTag,p=e["aria-label"],d=Object(r.a)(e,["className","listClassName","cssModule","size","tag","listTag","aria-label"]),b=Object(u.m)(g()(t),o),f=Object(u.m)(g()(l,"pagination",((a={})["pagination-"+c]=!!c,a)),o);return s.a.createElement(i,{className:b,"aria-label":p},s.a.createElement(m,Object(n.a)({},d,{className:f})))};p.propTypes=m,p.defaultProps={tag:"nav",listTag:"ul","aria-label":"pagination"},a.a=p},417:function(e,a,t){"use strict";var n=t(24),r=t(106),l=t(1),s=t.n(l),o=t(0),c=t.n(o),i=t(105),g=t.n(i),u=t(50),m={active:c.a.bool,children:c.a.node,className:c.a.string,cssModule:c.a.object,disabled:c.a.bool,tag:u.q},p=function(e){var a=e.active,t=e.className,l=e.cssModule,o=e.disabled,c=e.tag,i=Object(r.a)(e,["active","className","cssModule","disabled","tag"]),m=Object(u.m)(g()(t,"page-item",{active:a,disabled:o}),l);return s.a.createElement(c,Object(n.a)({},i,{className:m}))};p.propTypes=m,p.defaultProps={tag:"li"},a.a=p},418:function(e,a,t){"use strict";var n=t(24),r=t(106),l=t(1),s=t.n(l),o=t(0),c=t.n(o),i=t(105),g=t.n(i),u=t(50),m={"aria-label":c.a.string,children:c.a.node,className:c.a.string,cssModule:c.a.object,next:c.a.bool,previous:c.a.bool,tag:u.q},p=function(e){var a,t=e.className,l=e.cssModule,o=e.next,c=e.previous,i=e.tag,m=Object(r.a)(e,["className","cssModule","next","previous","tag"]),p=Object(u.m)(g()(t,"page-link"),l);c?a="Previous":o&&(a="Next");var d,b=e["aria-label"]||a;c?d="\xab":o&&(d="\xbb");var f=e.children;return f&&Array.isArray(f)&&0===f.length&&(f=null),m.href||"a"!==i||(i="button"),(c||o)&&(f=[s.a.createElement("span",{"aria-hidden":"true",key:"caret"},f||d),s.a.createElement("span",{className:"sr-only",key:"sr"},b)]),s.a.createElement(i,Object(n.a)({},m,{className:p,"aria-label":b}),f)};p.propTypes=m,p.defaultProps={tag:"a"},a.a=p}}]);
//# sourceMappingURL=67.9d4e3209.chunk.js.map