"use strict";(self.webpackChunkthecapitalhub=self.webpackChunkthecapitalhub||[]).push([[2306],{52306:function(n,e,t){t.r(e),t.d(e,{default:function(){return f}});var c=t(74165),i=t(15861),o=t(29439),s=t(72791),r=t(3343),a=t(89254),l=t(31436),d=t(59434),u=t(11087),m=t(32328),x=t(92986),h=t(80184),f=function(){var n=(0,s.useState)("received"),e=(0,o.Z)(n,2),t=e[0],f=e[1],v=(0,s.useState)([]),p=(0,o.Z)(v,2),j=p[0],N=p[1],_=(0,s.useState)(!0),g=(0,o.Z)(_,2),b=g[0],y=g[1],k=(0,s.useState)([]),w=(0,o.Z)(k,2),Z=w[0],C=w[1],U=(0,d.v9)((function(n){return n.user.loggedInUser})),S=(0,d.I0)();(0,s.useEffect)((function(){(0,a.U9)(U._id).then((function(n){console.log("res2--\x3e",n),C(n.data)}))}),[]);var E=function(n){"received"===n?I():"accepted"===n?(0,a.U9)(U._id).then((function(n){console.log("res--\x3e",n),C(n.data)})):A(),f(n)},I=function(){y(!0),(0,a.cv)().then((function(n){var e=n.data;return N(e)})).catch((function(n){return console.log(n)})).finally((function(){return y(!1)}))},A=function(){y(!0),(0,a.D4)().then((function(n){var e=n.data;return N(e)})).catch((function(n){return console.log(n)})).finally((function(){return y(!1)}))};(0,s.useEffect)((function(){document.title="Connections | The Capital Hub",S((0,x.Iw)("Connections")),I()}),[S]);var D=function(){var n=(0,i.Z)((0,c.Z)().mark((function n(e){return(0,c.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,a.Zp)(e);case 3:I(),n.next=9;break;case 6:n.prev=6,n.t0=n.catch(0),console.log("Error accepting connection: ",n.t0);case 9:case"end":return n.stop()}}),n,null,[[0,6]])})));return function(e){return n.apply(this,arguments)}}(),F=function(){var n=(0,i.Z)((0,c.Z)().mark((function n(e){return(0,c.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,a.N1)(e);case 3:I(),n.next=9;break;case 6:n.prev=6,n.t0=n.catch(0),console.log("Error rejecting connection: ",n.t0);case 9:case"end":return n.stop()}}),n,null,[[0,6]])})));return function(e){return n.apply(this,arguments)}}(),P=function(){var n=(0,i.Z)((0,c.Z)().mark((function n(e){return(0,c.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,a.QE)(e);case 3:A(),n.next=9;break;case 6:n.prev=6,n.t0=n.catch(0),console.log("Error cancelling connection: ",n.t0);case 9:case"end":return n.stop()}}),n,null,[[0,6]])})));return function(e){return n.apply(this,arguments)}}(),R=function(){var n=(0,i.Z)((0,c.Z)().mark((function n(e){return(0,c.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!window.confirm("Are you sure you want to remove this connection?")){n.next=10;break}return n.prev=1,n.next=4,(0,a.xI)(e);case 4:(0,a.U9)(U._id).then((function(n){C(n.data)})),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(1),console.log("Error removing connection: ",n.t0);case 10:case"end":return n.stop()}}),n,null,[[1,7]])})));return function(e){return n.apply(this,arguments)}}();return(0,h.jsx)(m.Z,{children:(0,h.jsxs)("div",{className:"connection_main_container mb-4",children:[(0,h.jsx)(r.Z,{text:"Connections"}),(0,h.jsx)("section",{className:"content_section mt-4",children:(0,h.jsx)("div",{className:"row",children:(0,h.jsxs)("div",{className:"col-12 mt-2 box p-3 p-md-4 ",children:[(0,h.jsx)("h4",{children:"Manage Connections"}),(0,h.jsxs)("nav",{className:"connection_nav",children:[(0,h.jsx)("button",{className:"connection_nav_link fs-6 ".concat("received"===t?"active":""),onClick:function(){return E("received")},children:"Received"}),(0,h.jsx)("button",{className:"connection_nav_link fs-6  ".concat("sent"===t?"active":""),onClick:function(){return E("sent")},children:"Sent"}),(0,h.jsx)("button",{className:"connection_nav_link fs-6  ".concat("accepted"===t?"active":""),onClick:function(){return E("accepted")},children:"Accepted"})]}),(0,h.jsx)("hr",{}),(0,h.jsx)("div",{className:"connection_list",children:b?(0,h.jsx)("h5",{className:"text-center my-5",children:(0,h.jsx)("div",{class:"d-flex justify-content-center",children:(0,h.jsx)("div",{class:"spinner-border",role:"status",children:(0,h.jsx)("span",{class:"visually-hidden",children:"Loading..."})})})}):"received"===t?j.length?j.map((function(n,e){var t=n.sender,c=n.updatedAt,i=n._id;return(0,h.jsxs)("div",{className:"connection_item d-flex flex-column flex-md-row justify-content-between ",children:[(0,h.jsxs)("div",{className:"connection_left",children:[(0,h.jsx)(u.rU,{to:"/user/".concat(null===t||void 0===t?void 0:t._id),children:(0,h.jsx)("img",{src:t.profilePicture,alt:"".concat(t.firstName," ").concat(t.lastName),style:{objectFit:"cover"}})}),(0,h.jsxs)("div",{className:"body_container",children:[(0,h.jsx)("p",{className:"connection_name h5",children:(0,h.jsx)(u.rU,{to:"/user/".concat(null===t||void 0===t?void 0:t._id),className:" text-black text-decoration-none",children:"".concat(t.firstName," ").concat(t.lastName)})}),(0,h.jsx)("p",{className:"connection_designation",children:t.designation}),(0,h.jsx)("p",{children:(0,h.jsx)(l.Z,{className:"connection_time",datetime:c,locale:""})})]})]}),(0,h.jsxs)("div",{className:"connection_right mt-3 mt-md-0 align-items-center justify-content-center",children:[(0,h.jsx)("button",{onClick:function(){return F(i)},className:"ignore_button",children:"Ignore"}),(0,h.jsx)("button",{onClick:function(){return D(i)},className:"accept_button",children:"Accept"})]})]},e)})):(0,h.jsx)("h5",{className:"text-center my-5",children:"No received connections."}):"sent"===t?(0,h.jsx)("div",{className:"sent_placeholder",children:j.length?j.map((function(n,e){var t=n.receiver,c=n.updatedAt,i=n._id;return(0,h.jsxs)("div",{className:"connection_item py-2 d-flex flex-column flex-md-row justify-content-between ",children:[(0,h.jsxs)("div",{className:"connection_left",children:[(0,h.jsx)(u.rU,{to:"/user/".concat(null===t||void 0===t?void 0:t._id),children:(0,h.jsx)("img",{src:null===t||void 0===t?void 0:t.profilePicture,alt:"".concat(null===t||void 0===t?void 0:t.firstName," ").concat(null===t||void 0===t?void 0:t.lastName),style:{objectFit:"cover"}})}),(0,h.jsxs)("div",{className:"body_container",children:[(0,h.jsx)("p",{className:"connection_name h5",children:(0,h.jsx)(u.rU,{to:"/user/".concat(null===t||void 0===t?void 0:t._id),className:" text-black text-decoration-none",children:"".concat(null===t||void 0===t?void 0:t.firstName," ").concat(null===t||void 0===t?void 0:t.lastName)})}),(0,h.jsx)("p",{className:"connection_designation",children:null===t||void 0===t?void 0:t.designation}),(0,h.jsx)("p",{children:(0,h.jsx)(l.Z,{className:"connection_time",datetime:c,locale:""})})]})]}),(0,h.jsx)("div",{className:"connection_right mt-3 mt-md-0 align-items-center justify-content-center",children:(0,h.jsx)("button",{onClick:function(){return P(i)},className:"py-2 px-3 rounded-5",children:"Cancel Request"})})]},e)})):(0,h.jsx)("h5",{className:"text-center my-5",children:"No sent connections."})}):"accepted"===t?Z.length?Z.map((function(n,e){return(0,h.jsxs)("div",{className:"connection_item d-flex flex-column flex-md-row justify-content-between",children:[(0,h.jsxs)("div",{className:"connection_left",children:[(0,h.jsx)(u.rU,{to:"/user/".concat(n._id),children:(0,h.jsx)("img",{src:n.profilePicture,alt:"".concat(n.firstName," ").concat(n.lastname),style:{objectFit:"cover"}})}),(0,h.jsxs)("div",{className:"body_container",children:[(0,h.jsx)("p",{className:"connection_name h5",children:(0,h.jsx)(u.rU,{to:"/user/".concat(n._id),className:" text-black text-decoration-none",children:"".concat(n.firstName?n.firstName:"name"," ").concat(n.lastName?n.lastName:"")})}),(0,h.jsx)("p",{className:"connection_designation",children:n.designation?n.designation:""}),(0,h.jsx)("p",{})]})]}),(0,h.jsx)("div",{className:"connection_right mt-3 mt-md-0 align-items-center justify-content-center",children:(0,h.jsx)("button",{onClick:function(){return R(n._id)},className:"py-2 px-3 rounded-5",children:"Remove Connection"})})]},e)})):(0,h.jsx)("h5",{className:"text-center my-5",children:"No accepted connections."}):null})]})})})]})})}},3343:function(n,e,t){t.d(e,{Z:function(){return o}});t(72791);t.p;var c=t(59434),i=t(80184),o=function(n){var e;n.className,n.text,n.width,(0,c.v9)((function(n){return n.user.loggedInUser})),e=(new Date).toDateString(),new Date(e).toLocaleDateString("en-US",{weekday:"short",month:"long",day:"numeric"});return(0,i.jsx)(i.Fragment,{})}}}]);
//# sourceMappingURL=2306.8879071d.chunk.js.map