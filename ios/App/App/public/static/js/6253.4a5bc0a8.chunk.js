"use strict";(self.webpackChunkthecapitalhub=self.webpackChunkthecapitalhub||[]).push([[6253],{80272:function(e,t,n){n.d(t,{Z:function(){return c}});n(72791);var a=n(11087),i=n(6827),r=n(97045),o=n(72412),s=n(80184),c=function(e){e.title,e.btnlink;var t=[{title:"Why Mentoring Matters: Why Angel Investors Should Prioritize Mentorship Before Investing in a Startup",btnlink:"/blog/startupOne",image:i,id:1},{title:"8 Tips to start raising Angel investments for startups",btnlink:"/blog/startupTwo",image:r,id:2},{title:"HOW TO BUILD A GREAT STARTUP by Pramod Badiger",btnlink:"/blog/startupThree",image:o,id:3}];return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("div",{className:"newscorner_container",children:(0,s.jsx)("div",{className:"col-12 newscorner_card",children:(0,s.jsxs)("div",{className:"card mt-2 right_view_profile_card right_view_profile",children:[(0,s.jsx)("div",{className:"card-header",children:(0,s.jsx)("div",{className:"title",children:(0,s.jsx)("span",{children:"News Corner"})})}),t.map((function(e,t){return(0,s.jsx)(a.rU,{to:e.btnlink?e.btnlink:"",style:{textDecoration:"none"},target:"_blank",className:"card-body newscorner_card_body ",children:(0,s.jsxs)("div",{className:"newscorner_card_text d-flex align-items-center gap-1",children:[(0,s.jsx)("h4",{className:"smallest_typo",children:e.title?e.title:" Cellbell startup has raised to $10 million dollor funding"}),(0,s.jsx)("div",{className:"newsImage__container",children:(0,s.jsx)("img",{src:e.image,alt:"News",style:{width:"100px",height:"auto",objectFit:"contain"}})})]})},e.id)}))]})})})})}},62191:function(e,t,n){n.d(t,{Z:function(){return f}});var a=n(29439),i=n(72791),r=n(89254),o=n(59434),s=n(74165),c=n(15861),l=n(11087),d=n(1413),m=n(80184);function u(e){return(0,m.jsx)("svg",(0,d.Z)((0,d.Z)({viewBox:"0 0 21 21",fill:"currentColor",height:"2.5rem",width:"2.5rem"},e),{},{children:(0,m.jsxs)("g",{fill:"currentColor",fillRule:"evenodd",children:[(0,m.jsx)("path",{d:"M11.5 10.5 A1 1 0 0 1 10.5 11.5 A1 1 0 0 1 9.5 10.5 A1 1 0 0 1 11.5 10.5 z"}),(0,m.jsx)("path",{d:"M11.5 5.5 A1 1 0 0 1 10.5 6.5 A1 1 0 0 1 9.5 5.5 A1 1 0 0 1 11.5 5.5 z"}),(0,m.jsx)("path",{d:"M11.5 15.5 A1 1 0 0 1 10.5 16.5 A1 1 0 0 1 9.5 15.5 A1 1 0 0 1 11.5 15.5 z"})]})}))}var h=n(10542),p=n(71781),g=function(e){e.activeHeader;var t=e.key,n=e.description,d=e.firstName,g=e.lastName,f=e.profilePicture,v=e.designation,b=e.image,x=e.userId,y=e.postId,w=e.allPosts,j=e.setAllPosts,_=e.resharedPostId;console.log("user",_);var N=(0,o.v9)((function(e){return e.user.loggedInUser})),P=(0,i.useState)(!1),C=(0,a.Z)(P,2),B=C[0],I=C[1],S=(0,i.useState)(!1),k=(0,a.Z)(S,2),A=k[0],Z=k[1],E=(0,i.useRef)(null);function M(){return(M=(0,c.Z)((0,s.Z)().mark((function e(t){var n,a,i;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return Z(!0),n={userId:N._id,postId:y},e.prev=2,e.next=5,(0,r.Dw)(n);case 5:a=e.sent,console.log(a),i=w.filter((function(e){return e._id!==y})),console.log("after remove",i),j(i),Z(!1),e.next=18;break;case 13:e.prev=13,e.t0=e.catch(2),console.log(e.t0),I(!1),Z(!1);case 18:case"end":return e.stop()}}),e,null,[[2,13]])})))).apply(this,arguments)}return(0,i.useEffect)((function(){var e=function(e){E.current&&!E.current.contains(e.target)&&I(!1)};return document.addEventListener("click",e),function(){document.removeEventListener("click",e)}}),[]),(0,m.jsx)(m.Fragment,{children:(0,m.jsxs)("div",{className:"card border rounded-4 p-3 ",children:[(0,m.jsxs)("div",{className:"d-flex align-items-center justify-content-between mb-2",children:[(0,m.jsxs)("div",{className:"d-flex",children:[(0,m.jsx)(l.rU,{to:"/user/".concat(x),className:"img-fluid mr-2",style:{width:"30px",height:"30px",borderRadius:"50%"},children:(0,m.jsx)("img",{src:f,alt:"Profile",className:"img-fluid mr-2",style:{width:"30px",height:"30px",borderRadius:"50%"}})}),(0,m.jsxs)("div",{children:[(0,m.jsxs)("span",{className:"card_heading",children:[d," ",g]}),(0,m.jsx)("span",{className:"card_heading",children:v})]})]}),(0,m.jsxs)("div",{className:"kebabMenu_container position-relative",ref:E,children:[(0,m.jsx)("button",{className:"btn border-0 p-0 m-0",onClick:function(){return I(!B)},children:(0,m.jsx)(u,{})}),B&&(0,m.jsx)("div",{className:"kebab_menu d-flex flex-column gap-3 border rounded p-2",children:(0,m.jsx)("button",{className:"btn border-0 p-0 m-0 d-flex align-items-center gap-2 shadow-none ",onClick:function(e){return M.apply(this,arguments)},children:A?(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(p.Z,{spinnerSizeClass:"spinner-border-sm"}),(0,m.jsx)("span",{style:{fontSize:"12px"},children:"Removing"})]}):(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(h.Z,{height:"1rem",width:"1rem",color:"#8b1f1f"}),(0,m.jsx)("span",{className:"",style:{fontSize:"14px"},children:"Remove"})]})})})]})]}),b?(0,m.jsx)("img",{src:b,alt:"Post",className:"img-fluid mb-2 rounded-4",style:{width:"18rem",maxHeight:"18rem",objectFit:"contain"}}):null!==_&&void 0!==_&&_.image?(0,m.jsx)(m.Fragment,{children:(0,m.jsxs)("div",{className:"card border rounded-4 p-3 ",children:[(0,m.jsxs)("div",{className:"d-flex pb-3",children:[(0,m.jsx)(l.rU,{to:"/user/".concat(x),className:"img-fluid mr-2",style:{width:"30px",height:"30px",borderRadius:"50%"},children:(0,m.jsx)("img",{src:f,alt:"Profile",className:"img-fluid mr-2",style:{width:"30px",height:"30px",borderRadius:"50%"}})}),(0,m.jsxs)("div",{children:[(0,m.jsxs)("span",{className:"card_heading",children:[d," ",g]}),(0,m.jsx)("span",{className:"card_heading",children:v})]})]}),(0,m.jsx)("img",{src:_.image,alt:"Post",className:"img-fluid mb-2 rounded-4",style:{width:"18rem",maxHeight:"18rem",objectFit:"contain"}})]},t)}):"",n?(0,m.jsx)("p",{className:"savedPost__text mt-2",children:n}):null!==_&&void 0!==_&&_.description?(0,m.jsxs)("div",{className:"card border rounded-4 p-3",style:{flex:window.innerWidth<=767?"none":"0 0 20rem"},children:[" ",(0,m.jsxs)("div",{className:"d-flex pb-3",children:[(0,m.jsx)(l.rU,{to:"/user/".concat(x),className:"img-fluid mr-2",style:{width:"30px",height:"30px",borderRadius:"50%"},children:(0,m.jsx)("img",{src:f,alt:"Profile",className:"img-fluid mr-2",style:{width:"30px",height:"30px",borderRadius:"50%"}})}),(0,m.jsxs)("div",{children:[(0,m.jsxs)("span",{className:"card_heading",children:[d," ",g]}),(0,m.jsx)("span",{className:"card_heading",children:v})]})]}),(0,m.jsx)("div",{className:"d-block",children:(0,m.jsx)("p",{children:_.description})})]},t):""," "]},t)})},f=function(){var e=(0,i.useState)("startup"),t=(0,a.Z)(e,2),n=t[0],s=t[1],c=(0,i.useState)(!1),l=(0,a.Z)(c,2),d=l[0],u=l[1],h=(0,i.useState)(null),f=(0,a.Z)(h,2),v=f[0],b=f[1],x=(0,i.useState)([]),y=(0,a.Z)(x,2),w=y[0],j=y[1],_=(0,i.useState)(null),N=(0,a.Z)(_,2),P=N[0],C=N[1],B=(0,o.v9)((function(e){return e.user.loggedInUser}));return(0,i.useEffect)((function(){u(!0),(0,r.d4)(B._id).then((function(e){var t=e.data.map((function(e){return e.name}));j(t),s(t[0]),u(!1)})).catch((function(e){console.log(e),u(!1)}))}),[B]),(0,i.useEffect)((function(){w.length>0&&C(w[0])}),[w]),(0,i.useEffect)((function(){P&&(u(!0),(0,r.in)(B._id,P).then((function(e){console.log(e),b(e.data),u(!1)})).catch((function(e){console.log(e),b([]),u(!1)})))}),[B,P,n]),(0,m.jsx)("div",{className:"navigated_box_container",children:(0,m.jsxs)("div",{className:"navigated-card-viewer",children:[(0,m.jsx)("div",{className:"navigation-header border-bottom",children:w.map((function(e){return(0,m.jsx)("div",{className:"nav-item ".concat(n===e?"active":""),onClick:function(){return function(e){s(e),C(e),u(!0)}(e)},children:e},e)}))}),(0,m.jsx)("div",{className:"card-viewer",children:d?(0,m.jsx)(p.Z,{className:"d-flex py-5 justify-content-center align-items-center w-100",colorClass:"d-l-grey"}):v&&v.length>0?v.map((function(e,t){var a=e.description,i=e.user,r=i.firstName,o=i.lastName,s=i.profilePicture,c=i.designation,l=i._id,d=e.video,u=e.image,h=e.createdAt,p=e._id,f=e.resharedPostId;return(0,m.jsx)(g,{activeHeader:n,userId:l,description:a,profilePicture:s,firstName:r,lastName:o,video:d,image:u,createdAt:h,designation:c,postId:p,setAllPosts:b,allPosts:v,resharedPostId:f},t)})):0===(null===v||void 0===v?void 0:v.length)?(0,m.jsx)("p",{className:"container p-5 text-center my-5 white-to-grey d-l-grey mx-auto",children:"No posts saved"}):(0,m.jsx)(p.Z,{className:"d-flex py-5 justify-content-center align-items-center w-100",colorClass:"d-l-grey"})})]})})}},10542:function(e,t,n){var a=n(1413),i=(n(72791),n(80184));t.Z=function(e){return(0,i.jsx)("svg",(0,a.Z)((0,a.Z)({viewBox:"0 0 1024 1024",fill:"currentColor",height:"1em",width:"1em"},e),{},{children:(0,i.jsx)("path",{d:"M864 256H736v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zm-200 0H360v-72h304v72z"})}))}},96173:function(e,t,n){n.d(t,{z:function(){return a}});var a={explorePage:[{target:".filter_container",content:"Greetings! You've arrived at the exploration area of The Capital Hub.",placement:"auto",disableBeacon:!0},{target:".filter_by",content:"Select the category you're interested in.",placement:"auto",disableBeacon:!0},{target:".investor_explore_filters_container",content:"Customize your search by applying filters.",placement:"auto",disableBeacon:!0},{target:".filtered-results",content:"Browse through all the search results.",placement:"auto",disableBeacon:!0}],homePage:[{target:".pro-sidebar-header",title:"Profile",content:"Your profile page describes everything relevant about you as a Professional.",placement:"auto",disableBeacon:!0},{target:"#sidebar_createAPost",title:"Create A Post",content:"Share your thoughts with other Founders and Investors.",placement:"auto",disableBeacon:!0},{target:"#sidebar_companyProfile",title:"Company",content:"Show the world what you\u2019re building!",placement:"auto",disableBeacon:!0},{target:"#sidebar_oneLink",title:"OneLink",content:"Your resume for everything related to fundraising, regardless of which side of a pitch day you\u2019re on.",placement:"auto",disableBeacon:!0},{target:"#sidebar_community",title:"Community",content:"Network with like-minded Founders and Investors in a private encrypted Community.",placement:"auto",disableBeacon:!0},{target:"#sidebar_explore",title:"Explore",content:"Filter the Startups, Founders and Investors on the platform to find who you are truly looking for.",placement:"auto",disableBeacon:!0},{target:"#sidebar_myStartups",title:"My Startups",content:"Add or Edit your Investments and Interests from here.",placement:"auto",disableBeacon:!0},{target:"#sidebar_mySchedule",title:"My Schedule",content:"Manage meetings with Fund Seekers or Interested individuals from here.",placement:"auto",disableBeacon:!0},{target:"#sidebar_savedPosts",title:"Saved Posts",content:"Revisit gems shared by experienced veterans on this platform.",placement:"auto",disableBeacon:!0},{target:"#sidebar_connections",title:"Connections",content:"Remember, you are as worthy as your connections are. So get connecting on Capital HUB",placement:"auto",disableBeacon:!0}],myStartupsPage:[{target:"#myInvestmentsCards",title:"My Investments",content:"Information about your Investments can be seen here.",placement:"auto",disableBeacon:!0},{target:"#editInvestments",title:"Add New / Edit Investment",content:"Add a new Investment or Edit information of an existing Investment from here.",placement:"auto",disableBeacon:!0},{target:"#myInterestsCards",title:"My Interests",content:"Information about your Interests can be seen here.",placement:"auto",disableBeacon:!0},{target:"#editInterests",title:"Add New / Edit Interest",content:"Add a new Interest or Edit information of an existing Interest from here.",placement:"auto",disableBeacon:!0}],profilePage:[{target:".professional_info_section",title:"Profile Page",content:"Add or Edit your professional information here.",placement:"auto",disableBeacon:!0},{target:"#missingDetails",title:"Fill-in Information",content:"Complete your profile setup with the Capital HUB chat assistant.",placement:"auto",disableBeacon:!0},{target:"#userBio",title:"Bio",content:"Add or Edit information about yourself.",placement:"auto",disableBeacon:!0},{target:".AchievementsComponent",title:"Acheivements",content:"Showcase your accomplishments with Capital HUB to everyone!",placement:"right-center",disableBeacon:!0},{target:".startups_invested",title:"Startups Invested",content:"Add information about the Startups you have Invested in.",placement:"auto",disableBeacon:!0},{target:".sector_interested",title:"Sectors Interested",content:"Add or edit Sectors that intrigue you here.",placement:"auto",disableBeacon:!0},{target:".investment_philosophy",title:"Investment Philosophy",content:"Fill information about your Investment Philosophy here.",placement:"right-start",disableBeacon:!0}],mySchedulePage:[{target:".view__selector",title:"My Schedule",content:"Switch Calendar views between 'Day', 'Week' and 'Month'.",placement:"auto",disableBeacon:!0},{target:".calendar__container",title:"Calendar",content:"Create meetings by dragging over a time slot on the calendar. Click on a created meeting to know more information.",placement:"right-start",disableBeacon:!0},{target:".rbc-toolbar",title:"Calendar",content:"Got to previous or next Day, Week or Month from here.",placement:"auto",disableBeacon:!0},{target:"#viewRequests",title:"View Requests",content:"View details about a meeting request by clicking here. You can Accept or Decline the request from here as well.",placement:"auto",disableBeacon:!0},{target:".meetings__div",title:"Meetings",content:"Find your regularly scheduled meetings organized by their frequency here.",placement:"left-start",disableBeacon:!0}],savedPostsPage:[{target:".navigation-header",title:"Collections",content:"Navigate through your collections",placement:"auto",disableBeacon:!0},{target:".card-viewer",title:"Saved Posts",content:"List of Saved Posts from your collection. Each post can be removed from the collection here.",placement:"auto",disableBeacon:!0}],connectionsPage:[{target:".content_section",title:"Connections",content:"Manage your Connections on Capital HUB from here.",placement:"auto",disableBeacon:!0},{target:".connection_nav",title:"Connections",content:"Switch between Received, Sent and Accepted connection requests.",placement:"auto",disableBeacon:!0},{target:".connection_list",title:"Connection Requests",content:"Manage your Received, Sent and Accepted connection requests.",placement:"auto",disableBeacon:!0}],companyProfilePage:[{target:"#editCompanyDetails",title:"Company Profile",content:"Click here to information in your Company Profile.",placement:"auto",disableBeacon:!0},{target:"#chooseCompany",title:"Select Company Profile",content:"Select an existing profile of your Company.",placement:"auto",disableBeacon:!0},{target:".company__profile",title:"Company Profile",content:"Your Company Profile with all the relevant information.",placement:"right-start",disableBeacon:!0},{target:"#createCompanyProfile",title:"Create your Company Profile",content:"Click here to create a new Company Profile.",placement:"auto",disableBeacon:!0}],oneLinkPage:[{target:".ShareLink_container",title:"Share OneLink",content:"Share your oneLink from here.",placement:"auto",disableBeacon:!0},{target:".introductory_message_container",title:"Introductory Message",content:"Add or Edit your Introductory message from here.",placement:"right-start",disableBeacon:!0},{target:".onePager_wrapper",title:"One-Pager Preview",content:"This is the OnePager Preview. Check your One-Link details here.",placement:"auto",disableBeacon:!0}],companyProfileEditPage:[{target:"#profileFormContainer",title:"Company Information",content:"Add or Edit primary details about your Company in this form.",placement:"right-start",disableBeacon:!0},{target:".paragraph__component",title:"Company Description",content:"Add or Edit a short description of what your Company is about.",placement:"auto",disableBeacon:!0},{target:".core__team",title:"Core Team",content:"Add or Edit members of your Core Team.",placement:"auto",disableBeacon:!0},{target:".milestones__component",title:"Milestones",content:"Add or Edit Milestones you have accomplished with Capital HUB.",placement:"auto",disableBeacon:!0},{target:".card_holder",title:"Investment Overview",content:"Edit details about Investement details here.",placement:"auto",disableBeacon:!0}]}},46253:function(e,t,n){n.r(t),n.d(t,{default:function(){return p}});var a=n(72791),i=n(80272),r=n(16294),o=n(11793),s=(n(97412),n(62191)),c=n(32328),l=n(92986),d=n(59434),m=n(99933),u=n(96173),h=n(80184);function p(){var e=(0,d.I0)();return(0,a.useEffect)((function(){window.title="Saved Posts | The Capital Hub",e((0,l.Iw)("Saved Posts"))}),[e]),(0,h.jsx)(c.Z,{children:(0,h.jsxs)("div",{className:"savedPosts__wrapper px-md-3 pb-lg-5 ",children:[(0,h.jsxs)("section",{className:"section__wrapper main__content d-flex flex-column gap-3",children:[(0,h.jsx)(m.Z,{steps:u.z.savedPostsPage,className:""}),(0,h.jsx)("div",{className:"savedPosts__heading",children:(0,h.jsx)("h4",{className:"white-to-grey d-l-grey border rounded-4 shadow-sm p-3",children:"Find all your saved posts here."})}),(0,h.jsx)("div",{className:"savedPosts__container bg-white border rounded-4 overflow-hidden",children:(0,h.jsx)(s.Z,{})})]}),(0,h.jsxs)("aside",{className:"aside__content d-none d-lg-flex flex-column gap-3",children:[(0,h.jsx)(o.Z,{}),(0,h.jsx)(r.Z,{}),(0,h.jsx)(i.Z,{})]})]})})}},97412:function(){},6827:function(e,t,n){e.exports=n.p+"static/media/1 AsPGU1Q42C9lsVRoMg91Nw.2aa841960ef85135bd85.webp"},97045:function(e,t,n){e.exports=n.p+"static/media/eighttips.ce78416442f6ad7404cc.webp"},72412:function(e,t,n){e.exports=n.p+"static/media/threefive.3af5c9f283a3ec55c790.webp"}}]);
//# sourceMappingURL=6253.4a5bc0a8.chunk.js.map