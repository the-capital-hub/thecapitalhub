"use strict";(self.webpackChunkthecapitalhub=self.webpackChunkthecapitalhub||[]).push([[4984],{24984:function(e,t,n){n.r(t),n.d(t,{default:function(){return v}});var i=n(29439),s=n(72791),a=(n(97412),n(89236)),r=n(39756),l=n(7692),c=n(72426),d=n.n(c),m=n(80184);function o(e){var t=e.meetingType,n=e.meetingsData,a=e.view,r=(0,s.useState)(!1),c=(0,i.Z)(r,2),o=c[0],u=c[1];var x=function(e){var t=e.meeting,n=e.isComplete,i=(t.title,t.start),s=t.end,a=d()(i).format("MMM ddd DD"),r=0===d()(i).minutes()?d()(i).format("ha"):d()(i).format("h:ma"),l=0===d()(s).minutes()?d()(s).format("ha"):d()(s).format("h:ma");return(0,m.jsxs)("div",{className:"d-flex justify-content-between align-items-center mb-2 ",children:[(0,m.jsxs)("li",{className:"meeting__list__item text-capitalize fw-lighter text-opacity-75 ".concat(n?"text-white-50 ":"text-white"," "),children:[a,", ",r,"-",l," Meeting"," "]}),(0,m.jsx)("input",{type:"checkbox",name:"meeting",id:"meeting",defaultChecked:!1,className:"checkbox fw-lighter border border-1 border-white bg-primary text-white"})]})};return(0,m.jsxs)("details",{className:"border bg-primary p-2 text-white rounded-3 ",children:[(0,m.jsxs)("summary",{className:"text-capitalize meeting__header p-1 d-flex justify-content-between align-items-center ".concat(o?"border-bottom border-white":""," "),onClick:function(){u(!o)},children:[(0,m.jsxs)("p",{className:"text-capitalize",children:[t," Meetings"]}),o?(0,m.jsx)(l.$Mg,{style:{fontSize:"1.25rem"}}):(0,m.jsx)(l.x2s,{style:{fontSize:"1.25rem"}})]}),(0,m.jsx)("ul",{className:" list-unstyled pt-2 px-1 ",children:t.includes(a)&&n.map((function(e,t){return(0,m.jsx)(x,{meeting:e,isComplete:d()(e.start,"day").isBefore(d()(),"day")},"".concat(e.title).concat(t))}))})]})}var u=n(32328),x=n(59434),h=n(92986),f=n(9858),w=n(47877),p=n(11087),b=n(97827),g=["daily","weekly","monthly"],j=[{start:new Date(2023,8,18,9,30),end:new Date(2023,8,18,12,45),title:"Work"},{start:new Date(2023,8,19,10,0),end:new Date(2023,8,19,11,30),title:"Test Event"},{start:new Date(2023,8,20,12,0),end:new Date(2023,8,20,13,0),title:"Test Event"},{start:new Date(2023,8,21,13,30),end:new Date(2023,8,21,16,45),title:"Test Event"},{start:new Date("2023-10-18T11:00:00.000Z"),end:new Date("2023-10-18T12:15:00.000Z"),title:"Test Event"}];function v(){var e=(0,x.v9)(b.$t),t=(0,s.useRef)(),n=(0,s.useState)("week"),l=(0,i.Z)(n,2),c=l[0],d=l[1],v=(0,x.I0)();(0,s.useEffect)((function(){window.title="My Schedule | The Capital Hub",v((0,h.Iw)("My Schedule"))}),[v]);var y=(0,p.lr)(),N=(0,i.Z)(y,2),_=N[0],k=N[1],D=_.get("view");(0,s.useEffect)((function(){"true"===D&&(t.current.click(),_.delete("view"),k(_))}),[D,_,k]);return(0,m.jsx)(u.Z,{children:(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("div",{className:"mySchedule__wrapper px-3 border-start",children:(0,m.jsxs)("section",{className:"section__wrapper bg-white rounded-4 border mb-5 pb-5 d-flex flex-column gap-5",children:[(0,m.jsxs)("div",{className:"d-flex flex-column flex-lg-row justify-content-between align-items-center border-bottom p-3",children:[(0,m.jsx)("div",{className:"d-flex align-items-center",children:(0,m.jsx)(a.Z,{setView:d,view:c})}),(0,m.jsx)("div",{className:"mt-3 mt-lg-0",children:(0,m.jsx)("button",{className:"btn-capital lh-1 py-2 py-md-3 me-2",onClick:function(){t.current.click()},children:"View requests"})})]}),(0,m.jsxs)("div",{className:"schedule__container px-3",children:[(0,m.jsx)("div",{className:"calender__div",children:(0,m.jsx)(r.Z,{view:c,setView:d,oneLinkId:e})}),(0,m.jsx)("div",{className:"meetings__div p-3 border rounded-4 d-flex flex-column gap-3",children:g.map((function(e,t){return(0,m.jsx)(o,{meetingType:e,meetingsData:j,view:c},e)}))})]})]})}),(0,m.jsx)(w.$L,{id:"meetingRequestsModal",launchRef:t}),(0,m.jsx)(f.Z,{})]})})}},97412:function(){}}]);
//# sourceMappingURL=4984.6b440d16.chunk.js.map