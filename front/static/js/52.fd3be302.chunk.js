(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{1331:function(e,a,t){e.exports={Item_companies:"ResultsItemsCompanies_Item_companies__1gE2M",LogoCompanyWrapper:"ResultsItemsCompanies_LogoCompanyWrapper__huuI9",LogoCompanyImg:"ResultsItemsCompanies_LogoCompanyImg__1Tn9Z",DescriptionCompany:"ResultsItemsCompanies_DescriptionCompany__1kcyd",VacanciesCount:"ResultsItemsCompanies_VacanciesCount__7tzwF",VacanciesText:"ResultsItemsCompanies_VacanciesText__34Bvs",CandidatesCount:"ResultsItemsCompanies_CandidatesCount__3Foqs",CandidatesText:"ResultsItemsCompanies_CandidatesText__3va0k"}},1332:function(e,a,t){e.exports={Item_candidates:"ResultsItemsCandidates_Item_candidates__1ErSI",Name:"ResultsItemsCandidates_Name__x6Q_9",Platform:"ResultsItemsCandidates_Platform__1VFp0",Text:"ResultsItemsCandidates_Text__7j4QJ",Count:"ResultsItemsCandidates_Count__29VQ2",Img:"ResultsItemsCandidates_Img__257SX"}},1333:function(e,a,t){e.exports={Row:"ResultsItemsVacancies_Row__27Kef",FirstColumn:"ResultsItemsVacancies_FirstColumn__WUVRw",Platform:"ResultsItemsVacancies_Platform__1SizT",Company:"ResultsItemsVacancies_Company__19cvp",StatusClosed:"ResultsItemsVacancies_StatusClosed__37_u6",StatusPending:"ResultsItemsVacancies_StatusPending__Guh2P",StatusOpen:"ResultsItemsVacancies_StatusOpen__1Bauf"}},1334:function(e,a,t){e.exports={Items_wrapper:"ResultsItemsContacts_Items_wrapper__24IsP",Name:"ResultsItemsContacts_Name__1YocQ",Text:"ResultsItemsContacts_Text__1sM3H",Company:"ResultsItemsContacts_Company__xHqq5",Mail:"ResultsItemsContacts_Mail__2INpp",PhoneNone:"ResultsItemsContacts_PhoneNone__i75nk",SkypeNone:"ResultsItemsContacts_SkypeNone__1u7dJ",Phone:"ResultsItemsContacts_Phone__3altU",Skype:"ResultsItemsContacts_Skype__1XScO"}},1398:function(e,a,t){"use strict";t.r(a);var A=t(30),s=t(31),n=t(34),c=t(32),l=t(33),r=t(1),m=t.n(r),o=t(541),i=t.n(o),u=t(766),p=t.n(u),d=t(1342),_=t(1331),y=t.n(_),E=function(e){var a=e.companies,t=a.logo?a.logo:p.a;return m.a.createElement("li",{className:y.a.Item_companies},m.a.createElement(d.a,{to:"/companies/".concat(a.id),style:{textDecoration:"none"}},m.a.createElement("div",{className:y.a.LogoCompanyWrapper},m.a.createElement("img",{className:y.a.LogoCompanyImg,src:t,alt:"logo_company"})),m.a.createElement("div",{className:y.a.DescriptionCompany},m.a.createElement("p",{className:y.a.VacanciesCount},a.vacancy_count),m.a.createElement("p",{className:y.a.CandidatesCount},a.candidates_to_company_count))))},N=function(e){var a=e.companies,t=!0!==Array.isArray(a)?0:a.length;return m.a.createElement("div",null,m.a.createElement("span",{className:i.a.Title},"Companies"),m.a.createElement("span",{className:i.a.Count},t),m.a.createElement("ul",{className:i.a.List_companies},a?a.map(function(e){return m.a.createElement(E,{companies:e,key:e.id})}):[]))},f=t(374),v=t.n(f),C=t(1332),L=t.n(C),S=function(e){var a=e.candidates,t=a.avatar;return m.a.createElement("li",{className:L.a.Item_candidates},m.a.createElement("img",{className:L.a.Img,src:null===t?v.a:t,alt:a.name}),m.a.createElement(d.a,{style:{textDecoration:"none"},to:"/candidates/".concat(a.id)},m.a.createElement("p",{className:L.a.Name},a.name)),m.a.createElement("p",{className:L.a.Platform},a.platform),m.a.createElement("p",{className:L.a.Text},a.phone),m.a.createElement("p",{className:L.a.Text},a.email),m.a.createElement("p",{className:L.a.Text},a.skype))},T=function(e){function a(){return Object(A.a)(this,a),Object(n.a)(this,Object(c.a)(a).apply(this,arguments))}return Object(l.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this.props.candidates,a=!0!==Array.isArray(e)?0:e.length;return m.a.createElement("div",null,m.a.createElement("span",{className:i.a.Title},"Candidates"),m.a.createElement("span",{className:i.a.Count},a),m.a.createElement("ul",{className:i.a.List_candidates},e?e.map(function(e){return m.a.createElement(S,{candidates:e,key:e.id})}):[]))}}]),a}(r.Component),R=t(1333),x=t.n(R),g=function(e){var a=e.vacancies,t=e.number,A=a.statusId;return m.a.createElement("tbody",null,m.a.createElement("tr",{className:x.a.Row},m.a.createElement("td",{className:x.a.FirstColumn},t+1),m.a.createElement("td",{className:x.a.Platform},m.a.createElement(d.a,{style:{textDecoration:"none"},to:"/companies/".concat(a.companyId)},a.platform)),m.a.createElement("td",null,a.seniority),m.a.createElement("td",null,a.details),m.a.createElement("td",{className:x.a.Company},m.a.createElement(d.a,{style:{textDecoration:"none"},to:"/companies/".concat(a.companyId)},a.company)),m.a.createElement("td",null,a.date),m.a.createElement("td",{title:function(){switch(A){case 1:return"Open";case 2:return"In progress";default:return"Closed"}}(),className:function(){switch(A){case 1:return x.a.StatusOpen;case 2:return x.a.StatusPending;default:return x.a.StatusClosed}}()})))},w=function(e){var a=e.vacancies;return m.a.createElement("div",{className:i.a.Table_vacancies},m.a.createElement("table",{className:i.a.List_vacancies},m.a.createElement("thead",null,m.a.createElement("tr",{className:i.a.List_vacancies_title},m.a.createElement("td",{className:i.a.FirstColumn},"#"),m.a.createElement("td",null,"Platform"),m.a.createElement("td",null,"Seniority"),m.a.createElement("td",null,"Details"),m.a.createElement("td",null,"Company"),m.a.createElement("td",null,"Date"),m.a.createElement("td",null,"Status"))),a?a.map(function(e,a){return m.a.createElement(g,{vacancies:e,key:e.id,number:a})}):[]))},I=t(1334),b=t.n(I),V=function(e){var a=e.contacts;return m.a.createElement("div",{className:b.a.Items_wrapper},m.a.createElement("p",{className:b.a.Name},a.name),m.a.createElement("p",{className:b.a.Text&&b.a.Company},m.a.createElement(d.a,{to:"/companies/".concat(a.id),style:{textDecoration:"none"}},a.compName)),m.a.createElement("p",{className:b.a.Text&&b.a.Mail},a.email),m.a.createElement("p",{className:b.a.Text&&""===a.phone?b.a.PhoneNone:b.a.Phone},a.phone),m.a.createElement("p",{className:b.a.Text&&""===a.skype?b.a.SkypeNone:b.a.Skype},a.skype))},k=function(e){var a=e.contacts,t=!0!==Array.isArray(a)?0:a.length;return m.a.createElement("div",{className:i.a.List_contacts_wrapper},m.a.createElement("span",{className:i.a.Title},"Contacts"),m.a.createElement("span",{className:i.a.Count},t),m.a.createElement("div",{className:i.a.List_contacts},a?a.map(function(e,a){return m.a.createElement(V,{contacts:e,key:a})}):[]))},O=function(e){function a(){var e,t;Object(A.a)(this,a);for(var s=arguments.length,l=new Array(s),r=0;r<s;r++)l[r]=arguments[r];return(t=Object(n.a)(this,(e=Object(c.a)(a)).call.apply(e,[this].concat(l)))).state={activePage:15},t.handlePageChange=function(e){console.log("active page is ".concat(e)),t.setState({activePage:e})},t}return Object(l.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this.props.globalDataObj,a=e.candidates,t=e.companies,A=e.contacts,s=e.vacancies,n=!0!==Array.isArray(s)?0:s.length;return m.a.createElement("div",{className:i.a.ResultsWrapper},m.a.createElement(T,{candidates:a}),m.a.createElement(N,{companies:t}),m.a.createElement("span",{className:i.a.Title},"Vacancies"),m.a.createElement("span",{className:i.a.Count},n),m.a.createElement(w,{vacancies:s}),m.a.createElement(k,{contacts:A}))}}]),a}(r.Component);a.default=O},374:function(e,a){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAACWBAMAAADOL2zRAAAAG1BMVEW1tbW4uLi8vLzGxsbS0tLc3Nzs7Oz4+Pj////b1d6+AAADDUlEQVRo3u3aTW8TQQwG4Hfox3lcSrmmIiHXConSY4hAzbGkVM2R0gM5hxbtvd1MfzYHKshmxzO2dwNF2vkBj3a8Hu/YCR7aW+iszuqs/8n6cfH5w8eLby1Yt+NDAMBe/7KhFc57oF8L7m3RxApjOPq9sD+3W8v3KxIR+edzqxU+VSkiv18Yrek6ReQHNusGVF84tVjhiGLr2dxgfXVRy7/WW8sexZebqa0rx1j+hdZiH4vIzZXWwrEWGzGoXuLjqyxUVukSlp+orCtKrR2NFXpJa69QWMktspuMWwtKrwOFNcpYW3IrEy4imoutTLi4gEGZ9I/rpdg6y1HxDIMl9ERbhdAKh1mLpNYyGy7yM6FVCqyJ0LoTWEOhlU8JojatXaH1JU9FEwymVH261nZnbST2bebXVYvWQmAdtHcexXWizZrTZi1ss0bnP9vyb0eb3zRBgu20eAcY/pO7ST74hfwud2aoOOwd0xmuTH/h7ptsO9jGw9QrHLTYw8x0fdpIe4CMPd9Q2T8m0pVr+fgemX0wvnlnLfbB+KECP1P47nTRSs46RqqXmJ7BlD42BLi0zYau6wMdf2ydf9UGTX5gnVk9hOmalaTS1u2bNevVpdEK5762x+T8MZET0+gsbWDIiTBGNL/QL7RWGLPnsa8822GaqDkDXf26RqIW4lhj3fpkvWcOEgyfIe6AQziklYxso3dMZO9MEN4Lw0hwJ98uRNaNoEUmfyqxsoFnww9pna892Lu8JXys2IPBFK14xKC/j7OXQ+j7F/a6A0PvyF3DoG9f2EvKmnXvFNb6tRX6tp3tZGDfYm2TsG+xtkmY32L9TcJ0fuLnCMZEjaUrtMO9qnXCWmekXbusdaS2tjhrSfo1Z6x7p6YqGQblTCjVxKNR6KtHEo1CXw3+ihUMFLkiapXOYK1mPlRjr3Tmo9lrrLxI2AtOreygWUpUkgKWryzzxYW9ENbKIVS/CqV/10SjKlGtFH+s0mjNYpYzUX7T1r3RmmzYujNaJzELthWzygvbmsn/g6RYndVZnfV0rJ/xkS0+gAgoxQAAAABJRU5ErkJggg=="},541:function(e,a,t){e.exports={ResultsWrapper:"Results_ResultsWrapper__10-pA",Title:"Results_Title__10CvM",Count:"Results_Count__YguUf",List_candidates:"Results_List_candidates__12rQ3",List_companies:"Results_List_companies__AuGYj",Table_vacancies:"Results_Table_vacancies__23jB0",List_vacancies:"Results_List_vacancies__1-0Sf",List_vacancies_title:"Results_List_vacancies_title__1abbn",FirstColumn:"Results_FirstColumn__3sGmG",List_contacts_wrapper:"Results_List_contacts_wrapper__2QVgL",List_contacts:"Results_List_contacts__2m1A2"}},766:function(e,a){e.exports="data:image/jpeg;base64,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"}}]);
//# sourceMappingURL=52.fd3be302.chunk.js.map