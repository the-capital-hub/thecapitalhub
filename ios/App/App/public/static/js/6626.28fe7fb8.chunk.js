"use strict";(self.webpackChunkthecapitalhub=self.webpackChunkthecapitalhub||[]).push([[6626],{87688:function(e,n,i){i.d(n,{Z:function(){return l}});var t=i(29439),o=i(72791),a=i(45513),s=i(80184);function l(e){var n=e.isStartup,i=e.data,l=(0,o.useState)(!1),r=(0,t.Z)(l,2);r[0],r[1];return(0,s.jsx)("div",{className:"d-flex flex-column gap-3",children:null===i||void 0===i?void 0:i.map((function(e){return(0,s.jsx)(a.Z,{short:!0,startup:"".concat(n?"true":"false"),companyData:e})}))})}},27743:function(e,n,i){i.d(n,{Z:function(){return o}});var t=i(80184);var o=function(e){var n=e.name,i=e.label,o=e.onChange,a=e.options,s=e.value;return(0,t.jsx)("div",{className:"filter_by_select",children:(0,t.jsxs)("select",{name:n,id:i,onChange:o,value:s,children:[(0,t.jsx)("option",{value:"",hidden:!s,children:s?"None":i}),null===a||void 0===a?void 0:a.map((function(e){return(0,t.jsx)("option",{value:e,children:e},e)}))]})})}},193:function(e,n,i){i.d(n,{Z:function(){return x}});i(72791);var t=i(79183),o=i(79012),a=i(88632),s=i(80184);function l(e){var n=e.fullName,i=e.designation,l=e.companyName,r=e.profilePicture,d=e.location,c=e.lastFunding,u=e.foundedYear;return(0,s.jsx)("div",{className:"person_info",children:(0,s.jsxs)("div",{className:"person__profile__header d-flex flex-column flex-lg-row gap-3 ",children:[(0,s.jsx)("div",{className:"person__profile__image",children:(0,s.jsx)("img",{src:r||o,alt:n,style:{width:"110px",height:"110px",objectFit:"cover"},loading:"lazy",className:"rounded-3"})}),(0,s.jsxs)("div",{className:"person__profile__details d-flex flex-column gap-4 justify-content-around",children:[(0,s.jsxs)("div",{className:"person__profile__headings d-flex flex-column gap-1",children:[(0,s.jsx)("h5",{className:"person__profile__name",children:n}),(0,s.jsx)("p",{className:"person__profile__type",children:i}),(0,s.jsx)("p",{className:"person__profile__type",children:l})]}),(0,s.jsxs)("div",{className:"icon__details d-flex flex-column flex-md-row gap-4 align-items-start",children:[(0,s.jsx)(a.Z,{src:t.Ye,alt:"location icon",text:"".concat(d||"India")},"location"),(0,s.jsx)(a.Z,{src:t.f,alt:"calendar icon",text:"Founded in, ".concat(u||"2014")},"founded"),(0,s.jsx)(a.Z,{src:t.jz,alt:"rising arrow icon",text:"Last Funding in ".concat(c||"May, 2023")},"funding")]})]})]})})}var r=i(11087);function d(e){var n=e.person,i=void 0===n?"Founder":n,t=e.userId,o=e.isInvestor?"/investor/user/".concat(t):"/user/".concat(t);return(0,s.jsx)("div",{className:"d-flex flex-column justify-content-end ",children:(0,s.jsx)("div",{className:"d-flex flex-column-reverse flex-md-row align-items-start gap-3 mt-3 mb-3 mt-lg-0",children:(0,s.jsx)(r.rU,{to:o,children:(0,s.jsxs)("button",{className:"btn-capital-outline actions-btn",children:["Connect with the ",i]})})})})}function c(e){var n=e.bio,i=(e.firstName,e.lastName,e.email,e.mobileNumber,e.startUp),t=e.investor,o=e.experience,a=e.education,l=e.designation;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("article",{className:"person__about d-flex flex-column gap-4 flex-lg-row gap-lg-0 mt-2",children:[(0,s.jsx)("h6",{className:"div__heading",children:"Bio:"}),(0,s.jsx)("p",{className:"about__text",children:n})]}),(0,s.jsxs)("article",{className:"name_number d-flex flex-column gap-4 mt-2",children:[(0,s.jsx)("h6",{className:"div__heading",children:"Personal Information:"}),(0,s.jsxs)("div",{className:"personal_info_grid",children:[(0,s.jsx)(s.Fragment,{}),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("div",{className:"",children:[(0,s.jsx)("p",{className:"fw-lighter fs-5",children:"Education"}),(0,s.jsx)("p",{className:"fw-medium fs-5 text-black",children:a})]}),(0,s.jsxs)("div",{className:"",children:[(0,s.jsx)("p",{className:"fw-lighter fs-5",children:"Company Name"}),(0,s.jsx)("p",{className:"fw-medium fs-5 text-black",children:null!==i&&void 0!==i&&i.company?null===i||void 0===i?void 0:i.company:null!==t&&void 0!==t&&t.companyName?null===t||void 0===t?void 0:t.companyName:"No company"})]}),(0,s.jsxs)("div",{className:"",children:[(0,s.jsx)("p",{className:"fw-lighter fs-5",children:"Designation"}),(0,s.jsx)("p",{className:"fw-medium fs-5 text-black",children:l})]}),(0,s.jsxs)("div",{className:"",children:[(0,s.jsx)("p",{className:"fw-lighter fs-5",children:"Experience"}),(0,s.jsx)("p",{className:"fw-medium fs-5 text-black",children:o})]})]})]})]})]})}var u=i(81263),v=i(54957),m=i(59434),p={profilePicture:"",firstName:"FirstName",lastName:"LastName",designation:"Founder",email:"example@xyz.com",mobileNumber:"+91 9876543210",companyName:"Company Name",location:" ",foundedYear:" ",lastFunding:" ",about:"Man's all about building great start-ups from a simple idea to an elegant reality. Humbled and honored to have worked with Angels and VC's across the globe to support and grow the startup culture.With the vision of make in India for the world, they design and build augmented reality glasses for Defence, Enterprise, and Training sectors. In addition to hardware, they also provide their clients with end-to-end AR/VR/MR solutions that are tailored to their business needs."};function f(e){var n,i,t,o,a,r,f,x,h,g,j,b,N,y,_,S,C,Z,w,E,F,I,k,M,L=e.theme,P=e.short,D=e.personData,B=(0,m.v9)((function(e){return e.user.loggedInUser}));null!==D&&void 0!==D&&D.startUp?(n=null===D||void 0===D?void 0:D.profilePicture,i=null===D||void 0===D?void 0:D.firstName,t=null===D||void 0===D?void 0:D.lastName,o=null===D||void 0===D?void 0:D.designation,a=null===D||void 0===D?void 0:D.email,r=null===D||void 0===D?void 0:D.phoneNumber,f=null===D||void 0===D?void 0:D.bio,x="true"===(null===D||void 0===D?void 0:D.isInvestor),b=null===D||void 0===D?void 0:D.startUp.company,h=null===D||void 0===D?void 0:D.startUp.location,g=null===D||void 0===D?void 0:D.startUp.lastFunding,j=null===D||void 0===D?void 0:D.startUp.startedAtDate,N=null===D||void 0===D?void 0:D.startUp.socialLinks,y=null===D||void 0===D?void 0:D.startUp.colorCard,S=null===D||void 0===D?void 0:D.startUp,C=null===D||void 0===D?void 0:D.experience,Z=null===D||void 0===D?void 0:D.education):(n=null===D||void 0===D?void 0:D.profilePicture,i=null===D||void 0===D?void 0:D.firstName,t=null===D||void 0===D?void 0:D.lastName,o=null===D||void 0===D?void 0:D.designation,a=null===D||void 0===D?void 0:D.email,r=null===D||void 0===D?void 0:D.phoneNumber,f=null===D||void 0===D?void 0:D.bio,x="true"===(null===D||void 0===D?void 0:D.isInvestor),b=null===D||void 0===D||null===(w=D.investor)||void 0===w?void 0:w.companyName,h=null===D||void 0===D||null===(E=D.investor)||void 0===E?void 0:E.location,g=null===D||void 0===D||null===(F=D.investor)||void 0===F?void 0:F.lastFunding,j=null===D||void 0===D||null===(I=D.investor)||void 0===I?void 0:I.startedAtDate,N=null===D||void 0===D||null===(k=D.investor)||void 0===k?void 0:k.socialLinks,y=null===D||void 0===D||null===(M=D.investor)||void 0===M?void 0:M.colorCard,_=null===D||void 0===D?void 0:D.investor,C=null===D||void 0===D?void 0:D.experience,Z=null===D||void 0===D?void 0:D.education);return(0,s.jsxs)("div",{className:"person_profile_wrapper bg-white shadow-sm ".concat(L),children:[(0,s.jsxs)("div",{className:"person__section__one border-bottom d-flex flex-column gap-4 py-5 px-3 px-lg-5",children:[(0,s.jsxs)("div",{className:"person__info d-flex flex-column flex-xl-row gap-4 justify-content-between position-relative",children:[(0,s.jsx)(l,{fullName:"".concat(i," ").concat(t),designation:o,profilePicture:n,companyName:b||p.companyName,location:h,foundedYear:new Date(j).getFullYear()||p.foundedYear,lastFunding:g||p.lastFunding}),(0,s.jsx)(d,{person:"".concat(x?"Investor":"Founder"),userId:D._id,isInvestor:"true"===(null===B||void 0===B?void 0:B.isInvestor)})]}),(0,s.jsx)(c,{bio:f,firstName:i,lastName:t,email:a,mobileNumber:r,investor:_,startUp:S,designation:o,experience:C,education:Z})]}),(0,s.jsxs)("div",{className:"person__section__two d-flex flex-column gap-4 pt-3 pb-5 px-3 px-lg-5",children:[(0,s.jsx)(u.Z,{socialLinks:N}),!P&&(0,s.jsx)(v.Z,{colorCard:y})]})]})}function x(e){var n=e.theme,i=e.short,t=e.data;return(0,s.jsx)("div",{className:"d-flex flex-column gap-3",children:null===t||void 0===t?void 0:t.map((function(e){return(0,s.jsx)(f,{theme:n,short:i,personData:e},e._id)}))})}},67064:function(e,n,i){i.d(n,{Bb:function(){return d},IF:function(){return s},Kc:function(){return m},L1:function(){return t},M:function(){return l},Ob:function(){return f},P3:function(){return o},Zu:function(){return p},iW:function(){return c},io:function(){return v},qF:function(){return a},sj:function(){return u},u0:function(){return r}});var t=["FMCG","Restaurants","Education","Tourism","Automobile","Textile","Chemicals","Telecommunications","Oil and Gas","Renewable Energy","Investment Banking and Venture Capital","NBFC","Biotechnology","Software Development Services","Computer and Information Technology","Aerospace","Sales and Marketing"],o=["Male","Female","Other"],a=["10+","100+","1000+"],s=["0-2","2-3","4-5","5-10","10+"],l=["Pre-seed","Seed","Series A","Series B","Series C","Series D and Beyond"],r=["Seed Stage","Series A","Series B","Series C","Series D and Beyond","Early-stage (Seed to Series A)","Growth-stage (Series B and Beyond)"],d=["Less than \u20b910 Lakh","\u20b910 Lakh - \u20b950 Lakh","\u20b950 Lakh - \u20b91 Crore","More than \u20b91 Crore"],c=["Concept/Idea","Prototype","Minimum Viable Product (MVP)","Beta Testing","Fully Developed Product"],u=["Micro-investments (< \u20b910,000)","Small Investments (\u20b910,000 - \u20b950,000)","Moderate Investments (\u20b950,000 - \u20b92 Lakhs)","Significant Investments (\u20b92 Lakhs - \u20b910 Lakhs)","Large Investments (\u20b910 Lakhs - \u20b91 Crore)","Major Investments (\u20b91 Crore and above)"],v=["Successful IPO","Acquisition by a Larger Company","Merger","No Previous Exit Experience"],m=["0-2 years","2-5 years","5-10 years","10-15 years","15+ years"],p=["Computer Science Engineering","Electrical and Electronics Engineering","Mechanical Engineering","Civil Engineering","Chemical Engineering","Aerospace Engineering","Biomedical Engineering","Environmental Engineering","Software Engineering","MBA in Marketing","MBA in Finance","MBA in Data Science"],f=["Gender Diversity","Ethnic Diversity","Age Diversity","LGBTQ+ Inclusivity","Disability Inclusivity","Socioeconomic Diversity"]},58587:function(e,n,i){i.r(n),i.d(n,{default:function(){return N}});var t=i(74165),o=i(15861),a=i(4942),s=i(1413),l=i(29439),r=i(72791),d=i(32328),c=i(71781),u=i(27743),v=i(87688),m=i(59434),p=i(92986),f=i(89254),x=i(193),h=i(46895),g=i(67064),j=i(71272),b=i(80184);function N(){var e=(0,m.I0)(),n=(0,r.useState)("Investor"),i=(0,l.Z)(n,2),N=i[0],y=i[1],_=(0,r.useState)([]),S=(0,l.Z)(_,2),C=S[0],Z=S[1],w=(0,r.useState)({}),E=(0,l.Z)(w,2),F=E[0],I=E[1],k=(0,r.useState)(null),M=(0,l.Z)(k,2),L=M[0],P=M[1],D=(0,r.useState)(!1),B=(0,l.Z)(D,2),A=B[0],z=B[1];(0,r.useEffect)((function(){document.title="Explore | The Capital Hub",e((0,p.Iw)("Explore"))}),[e]),(0,r.useEffect)((function(){R(),O()}),[N]);var U=function(e){var n=e.target,i=n.name,t=n.value;I((0,s.Z)((0,s.Z)({},F),{},(0,a.Z)({},i,t)))},R=function(){var e=(0,o.Z)((0,t.Z)().mark((function e(){var n,i;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,f.X4)(N);case 3:n=e.sent,i=n.data,Z(i),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log("Error fetching filters: ",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),O=function(){var e=(0,o.Z)((0,t.Z)().mark((function e(n){var i,o;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return null===n||void 0===n||n.preventDefault(),z(!0),e.prev=2,e.next=5,(0,f.E4)((0,s.Z)({type:N},F));case 5:i=e.sent,o=i.data,P(o),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),console.log("Error fetching filtered results: ",e.t0);case 13:return e.prev=13,z(!1),e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[2,10,13,16]])})));return function(n){return e.apply(this,arguments)}}(),T=function(){var e=(0,o.Z)((0,t.Z)().mark((function e(){var n,i;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return I(null),z(!0),e.prev=2,e.next=5,(0,f.E4)({type:N});case 5:n=e.sent,i=n.data,P(i),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),console.log("Error fetching initial filtered results: ",e.t0);case 13:return e.prev=13,z(!1),e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[2,10,13,16]])})));return function(){return e.apply(this,arguments)}}();return(0,b.jsx)(d.Z,{children:(0,b.jsxs)("section",{className:"startup_explore_wrapper d-flex flex-column gap-5 my-5",children:[(0,b.jsx)(j.Z,{steps:h.i.explorePage}),(0,b.jsxs)("div",{className:"filter_container bg-white rounded-4 shadow-sm d-flex flex-column gap-4 px-4 py-4",children:[(0,b.jsxs)("h5",{className:"m-0",children:["Find ",N," by"]}),(0,b.jsxs)("div",{className:"startup_explore_tabs d-flex align-items-center border-bottom",children:[(0,b.jsx)("button",{className:"btn_base py-3 px-3 ".concat("Investor"===N?"active":""),onClick:function(){I(null),y("Investor")},children:"Investor"}),(0,b.jsx)("button",{className:"btn_base py-3 px-3 ".concat("Startup"===N?"active":""),onClick:function(){I(null),y("Startup")},children:"Startup"}),(0,b.jsx)("button",{className:"btn_base py-3 px-3 ".concat("Founder"===N?"active":""),onClick:function(){I(null),y("Founder")},children:"Founder"}),F&&(0,b.jsxs)("button",{className:"btn-capital-small p-2 p-md-3 ms-auto",onClick:T,children:[(0,b.jsx)("span",{className:"d-none d-md-block",children:"Show All"}),(0,b.jsx)("span",{className:"d-md-none",children:"X"})]})]}),(0,b.jsxs)("form",{onSubmit:O,children:[(0,b.jsxs)("div",{className:"startup_filters_container",children:["Investor"===N&&(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(u.Z,{value:null===F||void 0===F?void 0:F.sector,onChange:U,options:(null===C||void 0===C?void 0:C.sectors)||g.L1,label:"Sector",name:"sector"}),(0,b.jsx)(u.Z,{value:null===F||void 0===F?void 0:F.city,onChange:U,options:null===C||void 0===C?void 0:C.cities,label:"City",name:"city"}),(0,b.jsx)(u.Z,{value:null===F||void 0===F?void 0:F.gender,onChange:U,options:(null===C||void 0===C?void 0:C.genders)||g.P3,label:"Gender",name:"gender"}),(0,b.jsx)(u.Z,{value:null===F||void 0===F?void 0:F.sectorPreference,onChange:U,options:(null===C||void 0===C?void 0:C.sectors)||g.L1,label:"Sector Preference",name:"sectorPreference"}),(0,b.jsx)(u.Z,{value:null===F||void 0===F?void 0:F.investmentSize,onChange:U,options:(null===C||void 0===C?void 0:C.investmentSize)||g.sj,label:"Investment Size",name:"investmentSize"}),(0,b.jsx)(u.Z,{value:null===F||void 0===F?void 0:F.investmentStage,onChange:U,options:(null===C||void 0===C?void 0:C.investmentStage)||g.u0,label:"Investment Stage",name:"investmentStage"})]}),"Startup"===N&&(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(u.Z,{value:null===F||void 0===F?void 0:F.sector,onChange:U,options:(null===C||void 0===C?void 0:C.sectors)||g.L1,label:"Sector",name:"sector"}),(0,b.jsx)(u.Z,{value:null===F||void 0===F?void 0:F.city,onChange:U,options:null===C||void 0===C?void 0:C.cities,label:"City",name:"city"}),(0,b.jsx)(u.Z,{value:null===F||void 0===F?void 0:F.size,onChange:U,options:(null===C||void 0===C?void 0:C.sizes)||g.qF,label:"Size",name:"size"}),(0,b.jsx)(u.Z,{value:null===F||void 0===F?void 0:F.fundingRaised,onChange:U,options:(null===C||void 0===C?void 0:C.fundingRaised)||g.Bb,label:"Funding Raised",name:"fundingRaised"}),(0,b.jsx)(u.Z,{value:null===F||void 0===F?void 0:F.productStage,onChange:U,options:(null===C||void 0===C?void 0:C.productStage)||g.iW,label:"Product Stage",name:"productStage"}),(0,b.jsx)(u.Z,{value:null===F||void 0===F?void 0:F.stage,onChange:U,options:(null===C||void 0===C?void 0:C.stage)||g.M,label:"Stage",name:"stage"}),(0,b.jsx)(u.Z,{value:null===F||void 0===F?void 0:F.age,onChange:U,options:(null===C||void 0===C?void 0:C.age)||g.IF,label:"Age",name:"age"})]}),"Founder"===N&&(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(u.Z,{value:null===F||void 0===F?void 0:F.sector,onChange:U,options:(null===C||void 0===C?void 0:C.sectors)||g.L1,label:"Sector",name:"sector"}),(0,b.jsx)(u.Z,{value:null===F||void 0===F?void 0:F.city,onChange:U,options:null===C||void 0===C?void 0:C.cities,label:"City",name:"city"}),(0,b.jsx)(u.Z,{value:null===F||void 0===F?void 0:F.gender,onChange:U,options:(null===C||void 0===C?void 0:C.genders)||g.P3,label:"Gender",name:"gender"}),(0,b.jsx)(u.Z,{value:null===F||void 0===F?void 0:F.previousExits,onChange:U,options:(null===C||void 0===C?void 0:C.previousExits)||g.io,label:"Previous Exits",name:"previousExits"}),(0,b.jsx)(u.Z,{value:null===F||void 0===F?void 0:F.yearsOfExperience,onChange:U,options:(null===C||void 0===C?void 0:C.yearsOfExperience)||g.Kc,label:"Years of Experience",name:"yearsOfExperience"}),(0,b.jsx)(u.Z,{value:null===F||void 0===F?void 0:F.education,onChange:U,options:(null===C||void 0===C?void 0:C.education)||g.Zu,label:"Education",name:"education"}),(0,b.jsx)(u.Z,{value:null===F||void 0===F?void 0:F.diversityMetrics,onChange:U,options:(null===C||void 0===C?void 0:C.diversityMetrics)||g.Ob,label:"Diversity Metrics",name:"diversityMetrics"})]})]}),(0,b.jsxs)("div",{className:"d-flex flex-column flex-md-row gap-2 py-3",children:[(0,b.jsx)("input",{type:"search",className:"search-filter-input",placeholder:"Search",name:"searchQuery",onChange:U}),(0,b.jsxs)("button",{className:"filter_button btn-capital ",type:"submit",children:["Filter ",N]})]})]})]}),(0,b.jsx)("div",{className:"filtered-results",children:A?(0,b.jsx)(c.Z,{className:"container bg-white d-flex justify-content-center align-items-center p-5 rounded-4 shadow-sm",colorClass:"text-secondary",spinnerSizeClass:"xl"}):(0,b.jsx)(b.Fragment,{children:null!==L&&void 0!==L&&L.length?function(){switch(N){case"Startup":return(0,b.jsx)(v.Z,{isStartup:!0,data:L});case"Founder":case"Investor":return(0,b.jsx)(x.Z,{theme:"startup",short:!0,data:L});default:return null}}():(0,b.jsxs)("div",{className:"container bg-white d-flex justify-content-center align-items-center p-5 rounded-4 shadow-sm",children:["No ",N," found"]})})})]})})}}}]);
//# sourceMappingURL=6626.28fe7fb8.chunk.js.map