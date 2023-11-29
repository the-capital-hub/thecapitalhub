"use strict";(self.webpackChunkthecapitalhub=self.webpackChunkthecapitalhub||[]).push([[5513],{45513:function(e,s,n){n.d(s,{Z:function(){return D}});var t=n(72791),a=n(10249),i=n(79012),l=n(74165),c=n(15861),r=n(29439),o=n(79183),d=n(57689),m=n(11087),u=n(59434),x=n(97827),p=n(89254),f=n(71781),h=n(80184);function g(e){var s=e.isOnelink,n=void 0!==s&&s,a=e.founderId,i=e.companyId,g=(0,d.TH)(),j=(0,u.I0)(),v=(0,u.v9)(x.FV),b=(0,u.v9)(x.ln),_=(0,u.v9)(x.o1),N=(0,u.v9)((function(e){return e.user.company})),y=(0,t.useState)(!1),w=(0,r.Z)(y,2),k=w[0],S=w[1],C=null===b||void 0===b?void 0:b.map((function(e){return e.companyId})),I=v?"/investor/user/".concat(a):"/user/".concat(a),Z=function(){var e=(0,c.Z)((0,l.Z)().mark((function e(s,n){var t,a,i;return(0,l.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(N){e.next=2;break}return e.abrupt("return");case 2:return S(!0),t=b.filter((function(e){return e.companyId!==n})),e.prev=4,e.next=7,(0,p.zX)({founderId:_,myInterests:t});case 7:a=e.sent,i=a.data,console.log("uninterest",i),j((0,x.KF)(i)),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(4),console.log(e.t0);case 16:return e.prev=16,S(!1),e.finish(16);case 19:case"end":return e.stop()}}),e,null,[[4,13,16,19]])})));return function(s,n){return e.apply(this,arguments)}}();return(0,h.jsxs)("div",{className:"company__actions d-flex flex-column justify-content-end",children:[n?"":(0,h.jsx)("button",{className:"bookmark position-absolute top-0 right-0 me-4",children:(0,h.jsx)("img",{src:o.rp,alt:"bookmark icon"})}),(0,h.jsxs)("div",{className:"action__buttons d-flex flex-column flex-md-row align-items-start gap-3 mt-3 mb-3 mt-lg-0",children:[n?"":(0,h.jsxs)(h.Fragment,{children:[!g.pathname.includes("/investor/company-profile")&&!g.pathname.includes("/investor/explore")||null!==C&&void 0!==C&&C.includes(i)?(0,h.jsx)("button",{type:"button",className:"d-flex align-items-center gap-2 btn btn-danger fw-bold fs-6",onClick:function(e){return Z(e,i)},children:k?(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(f.Z,{spinnerSizeClass:"spinner-border-sm",colorClass:"text-white"}),(0,h.jsx)("span",{children:"Please wait"})]}):"Uninterest"}):(0,h.jsx)("button",{className:"btn-capital text-center","data-bs-toggle":"modal","data-bs-target":"#selectCommitmentModal".concat(a),children:"Show Interest"}),(0,h.jsx)(m.rU,{to:I,children:(0,h.jsx)("button",{className:"btn-capital-outline actions-btn",children:"Connect with the Founder"})})]}),"/company-profile"===!g.pathname&&(0,h.jsx)("button",{className:"btn-capital actions-btn",children:"Invest Now"})]})]})}var j=n(54957),v=n(81263),b=n(1413);function _(e){var s=e.children;return(0,h.jsx)("div",{className:"card__body d-flex justify-content-between align-items-start py-3",children:s})}function N(e){var s=e.image,n=e.name,t=e.rating;e.age;return(0,h.jsxs)("div",{className:"card__head d-flex gap-2",children:[(0,h.jsx)("img",{src:s,alt:"Profile picture",style:{width:"50px",height:"50px"},className:"rounded-circle"}),(0,h.jsxs)("div",{className:"",children:[(0,h.jsx)("h4",{className:"card__head__name",children:n}),t?(0,h.jsxs)("div",{className:"rating d-flex gap-1",children:[(0,h.jsx)("img",{src:o.Ux,alt:"Star icon",style:{width:"10px",height:"10px"}}),(0,h.jsx)("img",{src:o.Ux,alt:"Star icon",style:{width:"10px",height:"10px"}}),(0,h.jsx)("img",{src:o.Ux,alt:"Star icon",style:{width:"10px",height:"10px"}}),(0,h.jsx)("img",{src:o.Ux,alt:"Star icon",style:{width:"10px",height:"10px"}}),(0,h.jsx)("img",{src:o.Ux,alt:"Star icon",style:{width:"10px",height:"10px"}})]}):""]})]})}n(11132);function y(e){var s=e.person,n=e.isFeedBack,t=[];return t=n?{image:s.image,name:s.name,rating:s.rating}:{image:s.image,name:s.name,age:s.age},(0,h.jsxs)("div",{className:"personCard__container d-flex flex-column gap-2 p-2 rounded-4",children:[(0,h.jsx)(N,(0,b.Z)({},t)),(0,h.jsx)(_,{children:n?(0,h.jsx)("p",{className:"",children:s.feedback}):(0,h.jsx)(h.Fragment,{children:(0,h.jsxs)("div",{className:"person_text",children:[(0,h.jsx)("p",{className:"text-muted fw-light",children:"Designation"}),(0,h.jsx)("h6",{className:"fw-medium designation",children:s.designation})]})})})]})}var w=[{id:1,image:o.nu,name:"Abhishek Raj",age:28,designation:"CEO & Founder"},{id:2,image:o.qg,name:"Rahul",age:28,designation:"Manager"},{id:3,image:o.jF,name:"Leo",age:28,designation:"Web-Designer"},{id:4,image:o.jF,name:"Leo",age:28,designation:"Web-Designer"}];function k(e){e.isOnelink;var s=e.team,n=(0,t.useState)(s||w),a=(0,r.Z)(n,2),i=a[0],l=a[1];return(0,t.useEffect)((function(){l(s||[])}),[s]),(0,h.jsxs)("div",{className:"founding__team d-flex flex-column gap-4",children:[(0,h.jsx)("h6",{className:"div__heading",children:"Founding Team"}),(0,h.jsx)("div",{className:"cards__container d-flex gap-5 pb-2",children:i.map((function(e){return(0,h.jsx)(y,{person:e,isFeedBack:!1},e.id||e.name)}))})]})}var S=n(88632);function C(e){var s=e.tags;return(0,h.jsxs)("div",{className:"key__focus d-flex flex-column gap-4",children:[(0,h.jsx)("h6",{className:"div__heading",children:"Key Focus"}),(0,h.jsx)("div",{className:"tags__container d-flex flex-wrap gap-4",children:s.map((function(e){return(0,h.jsx)(S.Z,{text:e,isPill:!0},e)}))})]})}function I(e){var s=e.about,n=e.vision,t=e.mission,a=e.noOfEmployees;return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)("article",{className:"company__about d-flex flex-column gap-4 flex-lg-row gap-lg-0 mt-2",children:[(0,h.jsx)("h6",{className:"div__heading",children:"About the Company:"}),(0,h.jsx)("p",{className:"about__text",children:s})]}),(0,h.jsxs)("article",{className:"company__about d-flex flex-column gap-4 flex-lg-row gap-lg-0 mt-2",children:[(0,h.jsx)("h6",{className:"div__heading",children:"No of Employees:"}),(0,h.jsx)("p",{className:"about__text",children:a})]}),n&&(0,h.jsxs)("article",{className:"company__about d-flex flex-column gap-4 flex-lg-row gap-lg-0 mt-2",children:[(0,h.jsx)("h6",{className:"div__heading",children:"Vision:"}),(0,h.jsx)("p",{className:"about__text",children:n})]}),t&&(0,h.jsxs)("article",{className:"company__about d-flex flex-column gap-4 flex-lg-row gap-lg-0 mt-2",children:[(0,h.jsx)("h6",{className:"div__heading",children:"Mission:"}),(0,h.jsx)("p",{className:"about__text",children:t})]})]})}var Z=n(47877),F=["N.A","Soft commitment","Due diligence phase"];function L(e){var s=e.interestData,n=e.founderId,a=(0,u.v9)(x.P4),i=(0,u.I0)(),o=(0,t.useState)(F[0]),d=(0,r.Z)(o,2),m=d[0],g=d[1],j=(0,t.useState)(!1),v=(0,r.Z)(j,2),_=v[0],N=v[1],y=(0,t.useState)(null),w=(0,r.Z)(y,2),k=w[0],S=w[1],C=(0,t.useRef)();function I(){return(I=(0,c.Z)((0,l.Z)().mark((function e(n){var t,c,r;return(0,l.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),N(!0),t=(0,b.Z)((0,b.Z)({},s),{},{commitment:m}),e.prev=3,e.next=6,(0,p.Ll)(a,t);case 6:c=e.sent,r=c.data,i((0,x.KF)(r)),S({success:"Interest Saved"}),setTimeout((function(){S(null),C.current.click()}),2e3),e.next=18;break;case 13:e.prev=13,e.t0=e.catch(3),console.error("Error Saving Interest:",e.t0),S({error:"Error Saving Interest! Please try again."}),setTimeout((function(){S(null)}),2e3);case 18:return e.prev=18,N(!1),e.finish(18);case 21:case"end":return e.stop()}}),e,null,[[3,13,18,21]])})))).apply(this,arguments)}return(0,h.jsx)("div",{className:"select_commitment_modal_wrapper",children:(0,h.jsxs)(Z.F,{id:"selectCommitmentModal".concat(n),isStatic:!1,children:[(0,h.jsx)(Z.Fy,{title:s.name,closeRef:C}),(0,h.jsx)(Z.Tq,{children:(0,h.jsxs)("form",{onSubmit:function(e){return I.apply(this,arguments)},className:"d-flex flex-column gap-4",children:[(0,h.jsxs)("fieldset",{children:[(0,h.jsx)("legend",{children:"Select Commitment"}),(0,h.jsxs)("div",{className:"dropdown",children:[(0,h.jsx)("button",{className:"btn commitment_form_input dropdown-toggle text-start d-flex align-items-center w-100",type:"button","data-bs-toggle":"dropdown","aria-expanded":"false",children:m}),(0,h.jsx)("ul",{className:"dropdown-menu m-0 p-0 w-100",children:F.map((function(e,s){return(0,h.jsx)("li",{className:"m-0 p-0",children:(0,h.jsx)("button",{type:"button",className:"btn list-btn w-100 text-start ps-3 rounded-0 ".concat(e===m?"selected":""),onClick:function(s){return function(e,s){g(s)}(0,e)},children:e})},"".concat(e).concat(s))}))})]})]}),(null===k||void 0===k?void 0:k.success)&&(0,h.jsx)("span",{className:"fs-5 text-center growIn-short",style:{animationDuration:"0.25s"},children:k.success}),(null===k||void 0===k?void 0:k.error)&&(0,h.jsx)("span",{className:"fs-5 text-danger text-center growIn-short",style:{animationDuration:"0.25s"},children:k.error}),(0,h.jsxs)("div",{className:"d-flex align-items-center gap-3 ms-auto",children:[(0,h.jsx)("button",{type:"button",className:"btn btn-base cancel","data-bs-dismiss":"modal",disabled:_,children:"Cancel"}),(0,h.jsx)("button",{type:"submit",className:"btn btn-base save",disabled:_,children:_?(0,h.jsx)(f.Z,{spinnerSizeClass:"spinner-border-sm"}):"Save"})]})]})})]})})}function D(e){var s,n,t,l=e.isOnelink,c=e.companyData,r=e.investorData,o=e.startup,d=void 0===o?"false":o,m=e.short,u=e.isStartup,x=void 0===u?"true":u,p="HCL",f=i,b="Bangalore",_="No description",N={website:"",facebook:"",twitter:"",linkedin:""},y="",w="2014",S="",Z="",F="",D=[],O=[],M="",T="",A="",E="",z="",R={logo:"",name:"",ask:"",commitment:"",investedEquity:"",companyId:"",companyOnelink:""};c&&(p=c.company||p,f=c.logo||f,b=c.location||b,_=c.description||_,N=c.socialLinks||N,y=c.colorCard||y,w=c.startedAtDate||w,S=c.vision||S,Z=c.mission||Z,F=c.noOfEmployees||F,D=c.team||D,O=(null===(s=c.keyFocus)||void 0===s?void 0:s.split(",").map((function(e){return e.trim()})))||O,M=c.tagline||M,T=c.TAM||"",A=c.SAM||"",E=c.SOM||"",z=c.founderId||"",R={logo:null===c||void 0===c?void 0:c.logo,name:null===c||void 0===c?void 0:c.company,ask:null===c||void 0===c||null===(n=c.colorCard)||void 0===n?void 0:n.fund_ask,commitment:"",investedEquity:"",companyId:null===c||void 0===c?void 0:c._id,companyOnelink:null===c||void 0===c?void 0:c.oneLink});r&&(p=r.companyName||p,f=r.logo||f,b=r.location||b,_=r.description||_,N=r.socialLinks||N,y=r.colorCard||y,w=r.startedAtDate||w,S=r.vision||S,Z=r.mission||Z,F=r.noOfEmployees||F,D=r.team||D,O=(null===(t=r.keyFocus)||void 0===t?void 0:t.split(",").map((function(e){return e.trim()})))||O,M=r.tagline||M,z=(null===r||void 0===r?void 0:r.founderId)||"");return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)("div",{className:"company__profile bg-white shadow-sm",startup:d,children:[(0,h.jsxs)("div",{className:"company__section__one border-bottom d-flex flex-column gap-4 p-3 p-md-5",children:[(0,h.jsxs)("div",{className:"company__info d-flex flex-column flex-xxl-row gap-4 justify-content-between position-relative",children:[(0,h.jsx)(a.Z,{name:p,logo:f,tagline:M,location:b,foundedYear:new Date(w).getFullYear()}),(0,h.jsx)(g,{isOnelink:l,founderId:z,companyId:R.companyId})]}),(0,h.jsx)(I,{about:_,vision:!m&&S,mission:!m&&Z,noOfEmployees:F}),!m&&(0,h.jsx)(j.Z,{colorCard:y,startup:x,sam:A,tam:T,som:E})]}),(0,h.jsxs)("div",{className:"company__section__two d-flex flex-column gap-4 pt-3 pb-5 px-3 px-md-5",children:[(0,h.jsx)(v.Z,{socialLinks:N}),!m&&(0,h.jsx)(k,{isOnelink:l,team:D}),!m&&(0,h.jsx)(C,{tags:O})]})]}),(0,h.jsx)(L,{interestData:R,founderId:z})]})}},10249:function(e,s,n){n.d(s,{Z:function(){return l}});var t=n(79183),a=n(88632),i=n(80184);function l(e){var s=e.name,n=e.logo,l=e.location,c=e.tagline,r=e.foundedYear,o=e.lastFunding;return(0,i.jsxs)("div",{className:"company__header d-flex flex-column flex-lg-row gap-2 ",children:[(0,i.jsx)("div",{className:"company__image",children:(0,i.jsx)("img",{src:n,alt:s,style:{width:"110px",height:"110px",objectFit:"cover"},loading:"lazy",className:"rounded border border-light"})}),(0,i.jsxs)("div",{className:"company__details d-flex flex-column gap-4 justify-content-around",children:[(0,i.jsxs)("div",{className:"company__headings",children:[(0,i.jsx)("h3",{className:"company__name",children:s}),(0,i.jsx)("p",{className:"company__type",children:c||" "})]}),(0,i.jsxs)("div",{className:"icon__details d-flex flex-column flex-md-row gap-4 align-items-start",children:[(0,i.jsx)(a.Z,{src:t.Ye,alt:"location icon",text:"".concat(l)},"location"),(0,i.jsx)(a.Z,{src:t.f,alt:"calendar icon",text:"Founded in, ".concat(r||"2014")},"founded"),(0,i.jsx)(a.Z,{src:t.jz,alt:"rising arrow icon",text:"Last funding in ".concat(o||"May, 2023")},"funding")]})]})]})}},54957:function(e,s,n){n.d(s,{Z:function(){return i}});var t=n(79183),a=n(80184);function i(e){var s=e.colorCard,n=e.startup,i=e.tam,l=e.sam,c=e.som;return(0,a.jsxs)("div",{className:"company__stats d-flex flex-column gap-4",children:[(0,a.jsxs)("div",{className:"stat__row d-flex flex-wrap gap-4 gap-lg-5",children:[(0,a.jsxs)("div",{className:"p-2 rounded-3 text-white d-flex flex-row justify-content-between stat__badge",style:{backgroundColor:"rgba(187, 152, 255, 1)"},children:[(0,a.jsxs)("div",{className:"d-flex flex-column gap-2 justify-content-center ps-2",children:[(0,a.jsx)("p",{className:"small",children:"true"===n?"Last Round Investment":"Average Investment"}),(0,a.jsxs)("p",{className:"fw-semibold",children:["\u20b9"," ","true"===n?null===s||void 0===s?void 0:s.last_round_investment:s.averageInvestment||""]})]}),(0,a.jsx)("img",{src:t._M,alt:"statistics",style:{width:"80px"}})]}),(0,a.jsxs)("div",{className:"p-2 rounded-3 text-white d-flex justify-content-between  stat__badge",style:{backgroundColor:"rgba(218, 193, 145, 1)"},children:[(0,a.jsxs)("div",{className:"d-flex flex-column gap-2 justify-content-center ps-2",children:[(0,a.jsx)("p",{className:"small",children:"Total Investment"}),(0,a.jsxs)("p",{className:"fw-semibold",children:["\u20b9 ",(null===s||void 0===s?void 0:s.total_investment)||""]})]}),(0,a.jsx)("img",{src:t.fL,alt:"statistics",style:{width:"80px"}})]}),(0,a.jsxs)("div",{className:"p-2 rounded-3 text-white d-flex  justify-content-between stat__badge",style:{backgroundColor:"rgba(170, 173, 185, 1)"},children:[(0,a.jsxs)("div",{className:"d-flex flex-column gap-2 justify-content-center ps-2",children:[(0,a.jsx)("p",{className:"small",children:"true"===n?"No. of Investors":"No. of Investments"}),(0,a.jsx)("p",{className:"fw-semibold",children:"true"===n?null===s||void 0===s?void 0:s.no_of_investers:"\u20b9 ".concat(null===s||void 0===s?void 0:s.no_of_investments)||0})]}),(0,a.jsx)("img",{src:t.Xw,alt:"statistics",style:{width:"80px"}})]}),(0,a.jsxs)("div",{className:"p-2 rounded-3 text-white d-flex justify-content-between  stat__badge",style:{backgroundColor:"rgba(143, 133, 255, 1)"},children:[(0,a.jsxs)("div",{className:"d-flex flex-column gap-2 justify-content-center ps-2",children:[(0,a.jsx)("p",{className:"small",children:"true"===n?"Fund Ask":"Minimum Tickets Size"}),(0,a.jsxs)("p",{className:"fw-semibold",children:["\u20b9"," ","true"===n?null===s||void 0===s?void 0:s.fund_ask:(null===s||void 0===s?void 0:s.minimumTicketsSize)||""]})]}),(0,a.jsx)("img",{src:t._n,alt:"statistics",style:{width:"80px"}})]}),"true"===n&&(0,a.jsxs)("div",{className:"p-2 rounded-3 text-white d-flex justify-content-between  stat__badge",style:{backgroundColor:"rgba(255, 115, 115, 1)"},children:[(0,a.jsxs)("div",{className:"d-flex flex-column gap-2 justify-content-center ps-2",children:[(0,a.jsx)("p",{className:"small",children:"TAM"}),(0,a.jsx)("p",{className:"fw-semibold",children:i})]}),(0,a.jsx)("img",{src:t._4,alt:"statistics",style:{width:"80px"}})]}),"true"===n&&(0,a.jsxs)("div",{className:"p-2 rounded-3 text-white d-flex justify-content-between  stat__badge",style:{backgroundColor:"rgba(218, 193, 145, 1)"},children:[(0,a.jsxs)("div",{className:"d-flex flex-column gap-2 justify-content-center ps-2",children:[(0,a.jsx)("p",{className:"small",children:"SAM"}),(0,a.jsxs)("p",{className:"fw-semibold",children:["\u20b9 ",l]})]}),(0,a.jsx)("img",{src:t.ur,alt:"statistics",style:{width:"80px"}})]}),"true"===n&&(0,a.jsxs)("div",{className:"p-2 rounded-3 text-white d-flex justify-content-between  stat__badge",style:{backgroundColor:"rgba(187, 152, 255, 1)"},children:[(0,a.jsxs)("div",{className:"d-flex flex-column gap-2 justify-content-center ps-2",children:[(0,a.jsx)("p",{className:"small",children:"SOM"}),(0,a.jsxs)("p",{className:"fw-semibold",children:["\u20b9 ",c]})]}),(0,a.jsx)("img",{src:t._n,alt:"statistics",style:{width:"80px"}})]})]}),(0,a.jsx)("h6",{className:"div__heading",children:"Revenue Statistics (FY19)"}),(0,a.jsxs)("div",{className:"stat__row d-flex flex-wrap gap-4 gap-lg-5",children:[(0,a.jsxs)("div",{className:"p-2 rounded-3 text-white d-flex  justify-content-between stat__badge",style:{backgroundColor:"rgba(43, 43, 43, 1)"},children:[(0,a.jsxs)("div",{className:"d-flex flex-column gap-2 justify-content-center ps-2",children:[(0,a.jsx)("p",{className:"small",children:"true"===n?"Valuation":"Maximum Tickets Size"}),(0,a.jsxs)("p",{className:"fw-semibold",children:["\u20b9","true"===n?null===s||void 0===s?void 0:s.valuation:(null===s||void 0===s?void 0:s.maximumTicketsSize)||""]})]}),(0,a.jsx)("img",{src:t.Do,alt:"statistics",style:{width:"80px"}})]}),(0,a.jsxs)("div",{className:"p-2 rounded-3 text-white d-flex  justify-content-between stat__badge",style:{backgroundColor:"rgba(255, 115, 115, 1)"},children:[(0,a.jsxs)("div",{className:"d-flex flex-column gap-2 justify-content-center ps-2",children:[(0,a.jsx)("p",{className:"small",children:"true"===n?"Raised Funds":"Seed Round"}),(0,a.jsxs)("p",{className:"fw-semibold",children:["\u20b9"," ","true"===n?null===s||void 0===s?void 0:s.raised_funds:(null===s||void 0===s?void 0:s.seedRound)||""]})]}),(0,a.jsx)("img",{src:t.ur,alt:"statistics",style:{width:"80px"}})]})]})]})}},81263:function(e,s,n){n.d(s,{Z:function(){return l}});var t=n(79183),a=n(80184);function i(e){var s=e.icon,n=e.name,t=e.socialLinks;return(0,a.jsxs)("a",{href:t[n],className:"social__link text-capitalize",style:{width:"fit-content"},target:"_blank",rel:"noopener noreferrer",children:[(0,a.jsx)("img",{src:s,alt:n}),n]})}function l(e){var s=e.socialLinks,n={website:t.Ub,google:t.ie,facebook:t.s1,twitter:t.tL,linkedin:t.n6,playstore:t.bZ,instagram:t.mr};return(0,a.jsxs)("div",{className:"public__links d-flex flex-column gap-4",children:[(0,a.jsx)("h6",{className:"div__heading",children:"Public Links"}),(0,a.jsx)("div",{className:"d-flex gap-3 flex-wrap",children:s?Object.keys(s).map((function(e,t){return(0,a.jsx)(i,{icon:n[e],name:e,socialLinks:s},e)})):""})]})}},88632:function(e,s,n){n.d(s,{Z:function(){return a}});var t=n(80184);function a(e){var s=e.src,n=e.alt,a=e.text,i=e.isPill;return(0,t.jsxs)("div",{className:"iconCard__container d-flex justify-content-center align-items-center gap-1  ".concat(i?"pill fs-6":""," "),children:[s?(0,t.jsx)("img",{src:s,alt:n,className:""}):"",(0,t.jsx)("p",{className:"icon__text",children:a})]})}}}]);
//# sourceMappingURL=5513.cc05e5fb.chunk.js.map