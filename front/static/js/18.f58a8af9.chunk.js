(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{1354:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return d});var a=n(30),r=n(31),c=n(34),o=n(32),s=n(33),l=n(1),i=n.n(l),u=n(691),v=n(309),d=function(e){function t(){var e,n;Object(a.a)(this,t);for(var r=arguments.length,s=new Array(r),l=0;l<r;l++)s[l]=arguments[l];return(n=Object(c.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(s)))).state={events:[]},n}return Object(s.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this;Object(v.n)().then(function(t){return e.setState({events:t})})}},{key:"render",value:function(){var e=this.state.events;return console.log(e),i.a.createElement(u.a,{events:e})}}]),t}(l.Component)},691:function(e,t,n){"use strict";n.d(t,"a",function(){return y});var a=n(294),r=n(30),c=n(31),o=n(34),s=n(32),l=n(33),i=n(1),u=n.n(i),v=n(276),d=n(278),h=n(277),m=n(768),f=n(275),p=n.n(f),b=(n(743),m.a.momentLocalizer(p.a)),w=new Date,j=w.getFullYear(),O=w.getMonth(),y=function(e){function t(){var e,n;Object(r.a)(this,t);for(var c=arguments.length,l=new Array(c),i=0;i<c;i++)l[i]=arguments[i];return(n=Object(o.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(l)))).state={events:[]},n.handleSelect=function(e){var t=e.start,r=e.end,c=window.prompt("New Event name");c&&n.setState({events:[].concat(Object(a.a)(n.state.events),[{start:t,end:r,title:c}])})},n}return Object(l.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.state.events;return u.a.createElement("div",{className:"animated"},u.a.createElement(v.a,null,u.a.createElement(d.a,null,u.a.createElement("i",{className:"icon-calendar"}),"Calendar"),u.a.createElement(h.a,{style:{height:"40em"}},u.a.createElement(m.a,{selectable:!0,popup:!0,localizer:b,events:e,views:["month","week","day"],step:30,defaultDate:new Date(j,O,1),defaultView:"month",toolbar:!0,onSelectEvent:function(e){return alert("Candidate: ".concat(e.title,", Date: ").concat(p()(e.start).format("LLLL")))},onSelectSlot:this.handleSelect,startAccessor:"start",endAccessor:"end"}))))}}],[{key:"getDerivedStateFromProps",value:function(e){return console.log(e),void 0!==e.events&&e.events.length>0?{events:e.events.map(function(e){var t=e.title,n=p()(e.start).toDate(),a=p()(e.start).add(1,"hour");return{title:t,start:n,end:p()(a).toDate()}})}:{events:[]}}}]),t}(i.Component)}}]);
//# sourceMappingURL=18.f58a8af9.chunk.js.map