(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{304:function(e,t,n){"use strict";n.d(t,"a",function(){return f});var a=n(30),l=n(31),r=n(34),o=n(32),c=n(33),i=n(1),s=n.n(i),u=n(441),m=n(431),d=n(432),h=n(433),p=n(296),f=function(e){function t(){var e,n;Object(a.a)(this,t);for(var l=arguments.length,c=new Array(l),i=0;i<l;i++)c[i]=arguments[i];return(n=Object(r.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(c)))).state={modal:n.props.isOpenModal},n.toggle=function(){n.setState(function(e){return{modal:!e.modal}}),(0,n.props.onRequestClose)()},n}return Object(c.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.state.modal,t=this.props,n=t.title,a=t.name,l=t.className,r=t.onDelete;return s.a.createElement(u.a,{isOpen:e,toggle:this.toggle,className:'modal-danger " + '.concat(l||"")},s.a.createElement(m.a,{toggle:this.toggle},n),s.a.createElement(d.a,null,"Are you sure to delete ".concat(a,"?")),s.a.createElement(h.a,null,s.a.createElement(p.a,{color:"danger",onClick:r},"Delete")," ",s.a.createElement(p.a,{color:"secondary",onClick:this.toggle},"Cancel")))}}]),t}(i.Component)},343:function(e,t,n){"use strict";var a=n(30),l=n(31),r=n(34),o=n(32),c=n(33),i=n(1),s=n.n(i),u=n(441),m=n(431),d=n(432);t.a=function(e){return function(t){function n(){var e,t;Object(a.a)(this,n);for(var l=arguments.length,c=new Array(l),i=0;i<l;i++)c[i]=arguments[i];return(t=Object(r.a)(this,(e=Object(o.a)(n)).call.apply(e,[this].concat(c)))).state={modal:!1},t.toggleModal=function(){t.setState(function(e){return{modal:!e.modal}}),(0,t.props.onRequestClose)()},t}return Object(c.a)(n,t),Object(l.a)(n,[{key:"render",value:function(){var t=this.state.modal,n=this.props,a=n.title,l=n.className;return s.a.createElement(u.a,{isOpen:t,toggle:this.toggleModal,className:'modal-primary " + '.concat(l||"")},s.a.createElement(m.a,{toggle:this.toggleModal},a),s.a.createElement(d.a,null,t&&s.a.createElement(e,this.props)))}}],[{key:"getDerivedStateFromProps",value:function(e){return e?{modal:e.isOpenModal}:null}}]),n}(i.Component)}},827:function(e,t,n){"use strict";n.r(t);var a=n(279),l=n(30),r=n(31),o=n(34),c=n(32),i=n(33),s=n(1),u=n.n(s),m=n(442),d=n(443),h=n(296),p=n(325),f=n(304),g=n(71),E=function(e){var t=e.idx,n=e.id,a=e.title,l=e.link,r=e.onDelete;return u.a.createElement(u.a.Fragment,null,u.a.createElement("td",null,t+1),u.a.createElement("td",null,a),u.a.createElement("td",null,u.a.createElement("a",{href:"".concat(l),rel:"noopener noreferrer",target:"_blank"},l)),u.a.createElement("td",{style:{paddingLeft:"1.5rem"}},u.a.createElement(g.a,null,function(e){var t=e.showModal,l=e.hideModal;return u.a.createElement(h.a,{title:"delete",style:{margin:0,padding:"0.2rem",backgroundColor:"transparent",borderColor:"transparent"},onClick:function(){return t(f.a,{isOpenModal:!0,title:"Delete link",name:"".concat(a),onDelete:function(){r(n),l()}})}},u.a.createElement("i",{className:"cui-trash icons font-lg"}))})))};E.defaultProps={title:"",link:"",onDelete:function(){return null}};var k=E,b=function(e){var t=e.links,n=e.onDelete,a=t.length>0?t.map(function(e,t){return u.a.createElement("tr",{key:e.id},u.a.createElement(k,Object.assign({idx:t},e,{onDelete:n})))}):u.a.createElement("tr",{style:{color:"var(--secondary)"}},u.a.createElement("td",{colSpan:9,align:"center"},"Nothing found"," ",u.a.createElement("span",{role:"img","aria-label":"confused face"},"\ud83d\ude15")));return u.a.createElement(p.a,{style:{background:"var(--white)"},responsive:!0,hover:!0},u.a.createElement("thead",null,u.a.createElement("tr",null,u.a.createElement("th",{scope:"col"},"#"),u.a.createElement("th",{scope:"col"},"Title"),u.a.createElement("th",{scope:"col"},"Link"),u.a.createElement("th",{scope:"col"},"Action"))),u.a.createElement("tbody",null,a))};b.defaultProps={links:[],onDelete:function(){return null}};var v=b,O=n(108),y=n(51),j=n(347),C=n(385),w=n(285),S={title:"",link:""},D=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(o.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(r)))).state=Object(y.a)({},S),n.handleInputChange=function(e){var t=e.target,a=t.name,l=t.value;n.setState(Object(O.a)({},a,l))},n.handleSubmit=function(e){e.preventDefault();var t=n.props,a=t.onCreateLink,l=t.onRequestClose;a(n.state),n.setState(Object(y.a)({},S)),l()},n}return Object(i.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this.state,t=e.title,n=e.link;return u.a.createElement(j.a,{onSubmit:this.handleSubmit},u.a.createElement(C.a,{row:!0},u.a.createElement(d.a,null,u.a.createElement(w.a,{type:"text",name:"title",value:t,placeholder:"Title",onChange:this.handleInputChange}))),u.a.createElement(C.a,{row:!0},u.a.createElement(d.a,null,u.a.createElement(w.a,{type:"text",name:"link",value:n,placeholder:"Link",onChange:this.handleInputChange}),u.a.createElement("i",{style:{position:"absolute",top:"0.6rem",right:"1.75rem"},className:"icon-link icons font-lg"}))),u.a.createElement(h.a,{color:"primary",onClick:this.handleSubmit},"Create"))}}]),t}(s.Component),M=n(343),L=n(288);n.d(t,"default",function(){return A});var N=Object(M.a)(D),A=function(e){function t(){var e,n;Object(l.a)(this,t);for(var r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];return(n=Object(o.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(i)))).state={links:[]},n.createLink=function(e){Object(L.a)(e).then(function(e){e?n.setState({links:[e].concat(Object(a.a)(n.state.links))}):console.log("Error while adding link")})},n.removeLink=function(e){Object(L.c)(e).then(function(t){"Delete Successfully"===t.message?n.setState(function(t){return{links:t.links.filter(function(t){return t.id!==e})}}):console.log("Error while deleting link")})},n}return Object(i.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this;Object(L.j)().then(function(t){e.setState({links:t})})}},{key:"render",value:function(){var e=this,t=this.state.links;return u.a.createElement(u.a.Fragment,null,u.a.createElement(m.a,{style:{marginBottom:"1rem"}},u.a.createElement(d.a,null,u.a.createElement("h1",{style:{marginBottom:0,fontSize:24}},"Links"))),u.a.createElement(m.a,{style:{marginBottom:"1rem"}},u.a.createElement(d.a,null,u.a.createElement(g.a,null,function(t){var n=t.showModal;return u.a.createElement(h.a,{color:"success",onClick:function(){return n(N,{isOpenModal:!0,title:"Create new link",onCreateLink:e.createLink})}},u.a.createElement("i",{style:{marginRight:"0.2rem"},className:"fa fa-plus-circle"}),"Create")}))),u.a.createElement(m.a,null,u.a.createElement(d.a,null,u.a.createElement(v,{links:t,onDelete:this.removeLink}))))}}]),t}(s.Component)}}]);
//# sourceMappingURL=30.035ba96d.chunk.js.map