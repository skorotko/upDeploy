(window.webpackJsonp=window.webpackJsonp||[]).push([[90],{1012:function(e,a,t){},1349:function(e,a,t){"use strict";t.r(a);var n=t(30),l=t(31),r=t(34),c=t(32),d=t(33),o=t(109),m=t(1),s=t.n(m),i=t(543),u=t(544),E=t(276),p=t(278),f=t(277),h=t(351),b=t(354),N=t(467),D=t(468),v=t(334),g=t(1013),w=t(1337),C=(t(949),t(975)),k=(t(1011),t(1012),function(e){function a(e){var t;return Object(n.a)(this,a),(t=Object(r.a)(this,Object(c.a)(a).call(this,e))).saveChanges=t.saveChanges.bind(Object(o.a)(Object(o.a)(t))),t.updateDimensions=t.updateDimensions.bind(Object(o.a)(Object(o.a)(t))),t.state={value:["UT","OH"],windowWidth:window.innerWidth,orientation:"vertical",openDirection:"down"},t}return Object(d.a)(a,e),Object(l.a)(a,[{key:"componentDidMount",value:function(){this.updateDimensions(),window.addEventListener("resize",this.updateDimensions)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.updateDimensions)}},{key:"saveChanges",value:function(e){this.setState({value:e})}},{key:"updateDimensions",value:function(){var e=window.innerWidth;this.setState(function(a){return{windowWidth:e,orientation:e<620?"vertical":"horizontal",openDirection:e<620?"up":"down"}})}},{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"animated fadeIn"},s.a.createElement(i.a,null,s.a.createElement(u.a,{sm:12,md:6,style:{flexBasis:"auto"}},s.a.createElement(E.a,null,s.a.createElement(p.a,null,s.a.createElement("i",{className:"icon-note"}),s.a.createElement("strong",null,"Masked Input")," ",s.a.createElement("small",null,"React Text Mask")," ",s.a.createElement("a",{href:"https://coreui.io/pro/react/",className:"badge badge-danger"},"CoreUI Pro Component")),s.a.createElement(f.a,null,s.a.createElement(h.a,null,s.a.createElement(b.a,null,"Date input"),s.a.createElement(N.a,null,s.a.createElement(D.a,{addonType:"prepend"},s.a.createElement(v.a,null,s.a.createElement("i",{className:"fa fa-calendar"}))),s.a.createElement(w.b,{mask:[/\d/,/\d/,"/",/\d/,/\d/,"/",/\d/,/\d/,/\d/,/\d/],Component:w.a,className:"form-control"})),s.a.createElement(g.a,{color:"muted"},"ex. 99/99/9999")),s.a.createElement(h.a,null,s.a.createElement(b.a,null,"Phone input"),s.a.createElement(N.a,null,s.a.createElement(D.a,{addonType:"prepend"},s.a.createElement(v.a,null,s.a.createElement("i",{className:"fa fa-phone"}))),s.a.createElement(w.b,{mask:["(",/[1-9]/,/\d/,/\d/,")"," ",/\d/,/\d/,/\d/,"-",/\d/,/\d/,/\d/,/\d/],Component:w.a,className:"form-control"})),s.a.createElement(g.a,{color:"muted"},"ex. (999) 999-9999")),s.a.createElement(h.a,null,s.a.createElement(b.a,null,"Taxpayer Identification Numbers"),s.a.createElement(N.a,null,s.a.createElement(D.a,{addonType:"prepend"},s.a.createElement(v.a,null,s.a.createElement("i",{className:"fa fa-usd"}))),s.a.createElement(w.b,{mask:[/\d/,/\d/,"-",/\d/,/\d/,/\d/,/\d/,/\d/,/\d/,/\d/],Component:w.a,className:"form-control"})),s.a.createElement(g.a,{color:"muted"},"ex. 99-9999999")),s.a.createElement(h.a,null,s.a.createElement(b.a,null,"Social Security Number"),s.a.createElement(N.a,null,s.a.createElement(D.a,{addonType:"prepend"},s.a.createElement(v.a,null,s.a.createElement("i",{className:"fa fa-male"}))),s.a.createElement(w.b,{mask:[/\d/,/\d/,/\d/,"-",/\d/,/\d/,"-",/\d/,/\d/,/\d/,/\d/],Component:w.a,className:"form-control"})),s.a.createElement(g.a,{color:"muted"},"ex. 999-99-9999")),s.a.createElement(h.a,null,s.a.createElement(b.a,null,"Eye Script"),s.a.createElement(N.a,null,s.a.createElement(D.a,{addonType:"prepend"},s.a.createElement(v.a,null,s.a.createElement("i",{className:"fa fa-asterisk"}))),s.a.createElement(w.b,{mask:["~",/\d/,".",/\d/,/\d/," ","~",/\d/,".",/\d/,/\d/," ",/\d/,/\d/,/\d/],Component:w.a,className:"form-control"})),s.a.createElement(g.a,{color:"muted"},"ex. ~9.99 ~9.99 999")),s.a.createElement(h.a,null,s.a.createElement(b.a,null,"Credit Card Number"),s.a.createElement(N.a,null,s.a.createElement(D.a,{addonType:"prepend"},s.a.createElement(v.a,null,s.a.createElement("i",{className:"fa fa-credit-card"}))),s.a.createElement(w.b,{mask:[/\d/,/\d/,/\d/,/\d/," ",/\d/,/\d/,/\d/,/\d/," ",/\d/,/\d/,/\d/,/\d/," ",/\d/,/\d/,/\d/,/\d/],Component:w.a,className:"form-control"})),s.a.createElement(g.a,{color:"muted"},"ex. 9999 9999 9999 9999"))))),s.a.createElement(u.a,{sm:12,md:6},s.a.createElement(E.a,null,s.a.createElement(p.a,null,s.a.createElement("i",{className:"icon-note"}),s.a.createElement("strong",null,"React-Select")," ",s.a.createElement("a",{href:"https://coreui.io/pro/react/",className:"badge badge-danger"},"CoreUI Pro Component"),s.a.createElement("div",{className:"card-header-actions"},s.a.createElement("a",{href:"https://github.com/JedWatson/react-select",rel:"noreferrer noopener",target:"_blank",className:"card-header-action"},s.a.createElement("small",{className:"text-muted"},"docs")))),s.a.createElement(f.a,null)),s.a.createElement(E.a,null,s.a.createElement(p.a,null,s.a.createElement("i",{className:"icon-calendar"}),s.a.createElement("strong",null,"React-Dates")," ",s.a.createElement("a",{href:"https://coreui.io/pro/react/",className:"badge badge-danger"},"CoreUI Pro Component"),s.a.createElement("div",{className:"card-header-actions"},s.a.createElement("a",{href:"https://github.com/airbnb/react-dates",rel:"noreferrer noopener",target:"_blank",className:"card-header-action"},s.a.createElement("small",{className:"text-muted"},"docs")))),s.a.createElement(f.a,null,s.a.createElement(C.DateRangePicker,{startDate:this.state.startDate,startDateId:"startDate",endDate:this.state.endDate,endDateId:"endDate",onDatesChange:function(a){var t=a.startDate,n=a.endDate;return e.setState({startDate:t,endDate:n})},focusedInput:this.state.focusedInput,onFocusChange:function(a){return e.setState({focusedInput:a})},orientation:this.state.orientation,openDirection:this.state.openDirection}))))))}}]),a}(s.a.Component));a.default=k}}]);
//# sourceMappingURL=90.4e18ee43.chunk.js.map