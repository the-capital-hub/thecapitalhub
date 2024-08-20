"use strict";(self.webpackChunkthecapitalhub=self.webpackChunkthecapitalhub||[]).push([[6910],{62313:function(e,n,t){t.d(n,{Z:function(){return u}});var o=t(29439),s=t(72791),a=t(89254),i=t(11087),r=t(71781),c=t(59434),l=t(97827),d=t(80184);var u=function(e){var n=e.userIdData,t=(0,c.v9)(l.o1),u=(0,s.useState)([]),m=(0,o.Z)(u,2),f=m[0],x=m[1],h=(0,s.useState)(!1),v=(0,o.Z)(h,2),j=v[0],g=v[1];return(0,s.useEffect)((function(){g(!0),(0,a.U9)(t||n).then((function(e){x(e.data),g(!1)})).catch((function(e){console.log(e),g(!1)}))}),[t,n]),(0,d.jsx)("div",{className:"ConnectionCard_container m-3 pb-2 d-flex flex-md-row justify-content-start gap-4",children:j?(0,d.jsx)(r.Z,{className:"d-flex justify-content-center align-items-center w-100 py-5",colorClass:"d-l-grey"}):f.length>0?(0,d.jsx)(d.Fragment,{children:f.map((function(e,n){return(0,d.jsx)("div",{className:"single-card ",children:(0,d.jsxs)(i.rU,{className:"d-flex flex-column align-items-center justify-content-between gap-3 h-100 text-decoration-none",to:"/user/".concat((null===e||void 0===e?void 0:e.firstName.toLowerCase())+"-"+(null===e||void 0===e?void 0:e.lastName.toLowerCase()),"/").concat(e.oneLinkId),style:{color:"inherit"},children:[(0,d.jsx)("img",{src:null===e||void 0===e?void 0:e.profilePicture,alt:"",className:"rounded-pill"}),(0,d.jsxs)("h1",{className:"m-0",style:{minHeight:"50px"},children:[null===e||void 0===e?void 0:e.firstName," ",null===e||void 0===e?void 0:e.lastName]}),(0,d.jsx)("p",{className:"m-0",children:null===e||void 0===e?void 0:e.designation}),(0,d.jsx)("button",{className:"mt-auto px-3",children:"Connected"})]})},n)}))}):(0,d.jsx)("p",{className:"text-secondary",children:"No connections found."})})}},55368:function(e,n,t){t.d(n,{Z:function(){return u}});var o=t(4942),s=t(1413),a=t(29439),i=t(72791),r=t(89254),c=t(59434),l=t(97827),d=t(80184),u=function(e){var n=e.color,t=e.text,u=e.image,m=e.amount,f=e.background,x=e.onAmountChange,h=e.field,v=e.colorCardData,j=e.className,g=e.noRupee,p=e.isInvestor,A=void 0!==p&&p,N=e.isOneLink,k=void 0!==N&&N,Z=e.isNotEditable,w=(0,c.v9)((function(e){return e.user.loggedInUser})),C=(0,i.useState)(!1),V=(0,a.Z)(C,2),b=V[0],I=V[1],E=(0,i.useState)(m),B=(0,a.Z)(E,2),G=B[0],U=B[1],Q=(0,c.I0)();(0,i.useEffect)((function(){U(m)}),[m]);return(0,d.jsxs)("div",{className:"".concat(j," colorcard-component card row border"),style:{background:f},children:[(0,d.jsx)("div",{className:"col-7 col-sm-6 left-content",style:{color:n},children:(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("h3",{className:"title",children:t}),b?(0,d.jsx)("input",{type:"text",className:"edit_input",id:"edit",value:G,onChange:function(e){U(e.target.value)},onBlur:function(){I(!1),x(G);var e={founderId:w._id,colorCard:(0,s.Z)((0,s.Z)({},v),{},(0,o.Z)({},h,G))};A?(0,r.zX)(e).then((function(e){console.log("Res--\x3e",e),Q((0,l.KF)(e.data))})).catch((function(e){console.error("Error--\x3e",e)})):(0,r.Xi)(e).then((function(e){console.log("Res--\x3e",e),Q((0,l.KF)(e.data))})).catch((function(e){console.error("Error--\x3e",e)}))},autoFocus:!0}):(0,d.jsxs)("span",{className:"rupee-sign",onClick:x?function(){Z||I(!0)}:function(){},children:[!g&&""," ",G," ",!k&&!Z&&(0,d.jsx)("label",{htmlFor:"edit",className:"edit-tip",children:"Click to edit"})]})]})}),(0,d.jsx)("div",{className:"col-5 right-content",children:(0,d.jsx)("img",{src:u,alt:"Card",width:60})})]})}},35686:function(e,n,t){t.d(n,{Z:function(){return m}});var o=t(4942),s=t(1413),a=t(29439),i=t(72791),r=t(64983),c=t(55368),l=t(59434),d=t(97827),u=t(80184);function m(e){var n=e.colorCardInfo,t=e.isNotEditable,m=void 0!==t&&t,f=(0,l.v9)(d.u9),x=(0,l.v9)(d.OD),h=(0,l.v9)(d.o1),v=(0,i.useState)(f||n),j=(0,a.Z)(v,2),g=j[0],p=j[1],A=(0,i.useState)("last_round_investment"),N=(0,a.Z)(A,2),k=N[0],Z=N[1],w=function(e,n){console.log(k),console.log(e),Z(e),p((function(t){return(0,s.Z)((0,s.Z)({},t),{},(0,o.Z)({},e,n))}))};return(0,u.jsx)("div",{className:"col-12 mt-2",children:g&&(0,u.jsxs)("div",{className:"card_holder",children:[(0,u.jsx)(c.Z,{color:"white",background:"#BB98FF",text:"Last round investment",image:r,amount:g.last_round_investment,onAmountChange:function(e){return w("last_round_investment",e)},field:k,colorCardData:g,isOneLink:h!==x,isNotEditable:m}),(0,u.jsx)(c.Z,{color:"white",background:"#DAC191",text:"Total Investment",image:r,amount:g.total_investment,onAmountChange:function(e){return w("total_investment",e)},field:k,colorCardData:g,isOneLink:h!==x,isNotEditable:m}),(0,u.jsx)(c.Z,{color:"white",background:"#DCDCDC",text:"No.of Investers",image:r,amount:g.no_of_investers,onAmountChange:function(e){return w("no_of_investers",e)},field:k,colorCardData:g,noRupee:!0,isOneLink:h!==x,isNotEditable:m}),(0,u.jsx)(c.Z,{color:"white",background:"#2B2B2B",text:"Fund ask",image:r,amount:g.fund_ask,onAmountChange:function(e){return w("fund_ask",e)},field:k,colorCardData:g,isOneLink:h!==x,isNotEditable:m}),(0,u.jsx)(c.Z,{color:"white",background:"#FF7373",text:"Valuation",image:r,amount:g.valuation,onAmountChange:function(e){return w("valuation",e)},field:k,colorCardData:g,isOneLink:h!==x,isNotEditable:m}),(0,u.jsx)(c.Z,{color:"white",background:"#9198DA",text:"Raised funds",image:r,amount:g.raised_funds,onAmountChange:function(e){return w("raised_funds",e)},field:k,colorCardData:g,isOneLink:h!==x,isNotEditable:m})]})})}},40313:function(e,n,t){t.r(n),t.d(n,{default:function(){return E}});var o=t(72791),s=t(32746),a=t(91535),i=t(16294),r=t(80272),c=t(43545),l=t(59434),d=t(89254),u=t(97827),m=t(32328),f=t(62313),x=t(24311),h=t(92986),v=t(35686),j=t(47343),g=t(23510),p=t(74165),A=t(15861),N=t(29439),k=t(45864),Z=t(62199),w=t(57840),C=t(10505),V=t(80184);var b=function(){var e=(0,o.useState)([]),n=(0,N.Z)(e,2),t=n[0],s=n[1],a=function(){var e=(0,A.Z)((0,p.Z)().mark((function e(){var n;return(0,p.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,d.Mp)();case 3:n=e.sent,s(null===n||void 0===n?void 0:n.data.completed),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();(0,o.useEffect)((function(){a()}),[]);var i={silver:k,bronze:w,gold:Z};return(0,V.jsx)("div",{className:"achievements_components m-3 pb-2 d-flex flex-md-row justify-content-start gap-4",children:null===t||void 0===t?void 0:t.map((function(e,n){return(0,V.jsxs)("div",{className:"single-card",children:[(0,V.jsx)("img",{src:i[e.badge],alt:"achievement"}),(0,V.jsxs)("div",{className:"image_text",children:[(0,V.jsx)("img",{src:C,alt:"rectangle"}),(0,V.jsx)("div",{className:"text",children:(0,V.jsx)("h6",{children:e.title})})]})]},n)}))})},I=t(11087),E=function(){var e=(0,l.v9)((function(e){return e.user.loggedInUser})),n=(0,l.v9)((function(e){return e.user.loggedInUser._id})),t=(0,l.v9)(u.OD),p=(0,l.v9)(u.uA),A=(0,l.I0)();return(0,o.useEffect)((function(){document.title="Profile | The Capital Hub",A((0,h.Iw)("Profile"))}),[A]),(0,o.useEffect)((function(){p||(0,d.dW)(n).then((function(e){var n=e.data;A((0,u.KF)(n))})).catch((function(e){console.error("Error fetching startup data:",e)}))}),[n,A,p]),(0,V.jsx)(m.Z,{children:(0,V.jsx)("div",{className:"investorHome_main_container ",children:(0,V.jsxs)("div",{className:"two_column_wrapper",children:[(0,V.jsx)("div",{className:"seventy d-flex flex-column gap-3",children:(0,V.jsxs)("div",{className:"content-70 d-flex flex-column gap-4",children:[(0,V.jsx)(x.Z,{theme:"startup"}),(0,V.jsx)(g.Z,{}),(0,V.jsx)(j.Z,{}),(0,V.jsxs)("div",{className:"box personal_information",children:[(0,V.jsx)("div",{className:"personal_information_header connections-container"}),(0,V.jsx)("div",{className:"col-12 mt-2 milestones",children:(0,V.jsx)(f.Z,{})})]}),(0,V.jsxs)("div",{className:"box personal_information",children:[(0,V.jsxs)("div",{className:"personal_information_header ",children:[(0,V.jsx)("h2",{className:"typography",children:"Achievements"}),(0,V.jsx)("div",{className:"milestone_see_more",children:(0,V.jsx)(I.rU,{to:"/profile/achievements",children:"See more"})})]}),(0,V.jsx)("div",{className:"col-12 mt-2 milestones",children:(0,V.jsx)(b,{})})]}),(0,V.jsxs)("div",{className:"box personal_information",children:[(0,V.jsx)("div",{className:"personal_information_header",children:(0,V.jsx)("h2",{className:"typography",children:"Featured posts"})}),(0,V.jsx)("div",{className:"mt-2 milestones",children:(0,V.jsx)(s.Z,{userId:n})})]}),(0,V.jsx)("div",{className:"",children:(0,V.jsx)(c.Z,{className:"",userDetails:e,page:n===t?"edit":""})}),(0,V.jsx)(v.Z,{})]})}),(0,V.jsxs)("div",{className:"thirty d-none d-xl-block",children:[(0,V.jsx)(a.Z,{}),(0,V.jsx)(i.Z,{}),(0,V.jsx)(r.Z,{})]})]})})})}},64983:function(e){e.exports="data:image/png;base64,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"}}]);
//# sourceMappingURL=6910.5b8d5ba6.chunk.js.map