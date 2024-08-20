"use strict";(self.webpackChunkthecapitalhub=self.webpackChunkthecapitalhub||[]).push([[241],{80241:function(e,a,s){s.d(a,{Z:function(){return re}});var i=s(1413),r=s(45987),l=s(81694),t=s.n(l),o=s(52007),n=s.n(o),c=s(72791),d=s(80184),f=["as","className","type","tooltip"],v={type:n().string,tooltip:n().bool,as:n().elementType},m=c.forwardRef((function(e,a){var s=e.as,l=void 0===s?"div":s,o=e.className,n=e.type,c=void 0===n?"valid":n,v=e.tooltip,m=void 0!==v&&v,u=(0,r.Z)(e,f);return(0,d.jsx)(l,(0,i.Z)((0,i.Z)({},u),{},{ref:a,className:t()(o,"".concat(c,"-").concat(m?"tooltip":"feedback"))}))}));m.displayName="Feedback",m.propTypes=v;var u=m,p=s(96882),b=s(84934),x=s(10162),Z=["bsPrefix","className","htmlFor"],N=c.forwardRef((function(e,a){var s=e.bsPrefix,l=e.className,o=e.htmlFor,n=(0,r.Z)(e,Z),f=(0,c.useContext)(b.Z).controlId;return s=(0,x.vE)(s,"form-check-label"),(0,d.jsx)("label",(0,i.Z)((0,i.Z)({},n),{},{ref:a,htmlFor:o||f,className:t()(l,s)}))}));N.displayName="FormCheckLabel";var h=N;var y=["id","bsPrefix","bsSwitchPrefix","inline","reverse","disabled","isValid","isInvalid","feedbackTooltip","feedback","feedbackType","className","style","title","type","label","children","as"],j=c.forwardRef((function(e,a){var s=e.id,l=e.bsPrefix,o=e.bsSwitchPrefix,n=e.inline,f=void 0!==n&&n,v=e.reverse,m=void 0!==v&&v,Z=e.disabled,N=void 0!==Z&&Z,j=e.isValid,P=void 0!==j&&j,I=e.isInvalid,w=void 0!==I&&I,F=e.feedbackTooltip,k=void 0!==F&&F,g=e.feedback,C=e.feedbackType,R=e.className,E=e.style,z=e.title,S=void 0===z?"":z,T=e.type,V=void 0===T?"checkbox":T,L=e.label,O=e.children,G=e.as,H=void 0===G?"input":G,M=(0,r.Z)(e,y);l=(0,x.vE)(l,"form-check"),o=(0,x.vE)(o,"form-switch");var A=(0,c.useContext)(b.Z).controlId,_=(0,c.useMemo)((function(){return{controlId:s||A}}),[A,s]),q=!O&&null!=L&&!1!==L||function(e,a){return c.Children.toArray(e).some((function(e){return c.isValidElement(e)&&e.type===a}))}(O,h),B=(0,d.jsx)(p.Z,(0,i.Z)((0,i.Z)({},M),{},{type:"switch"===V?"checkbox":V,ref:a,isValid:P,isInvalid:w,disabled:N,as:H}));return(0,d.jsx)(b.Z.Provider,{value:_,children:(0,d.jsx)("div",{style:E,className:t()(R,q&&l,f&&"".concat(l,"-inline"),m&&"".concat(l,"-reverse"),"switch"===V&&o),children:O||(0,d.jsxs)(d.Fragment,{children:[B,q&&(0,d.jsx)(h,{title:S,children:L}),g&&(0,d.jsx)(u,{type:C,tooltip:k,children:g})]})})})}));j.displayName="FormCheck";var P=Object.assign(j,{Input:p.Z,Label:h}),I=(s(42391),["bsPrefix","type","size","htmlSize","id","className","isValid","isInvalid","plaintext","readOnly","as"]),w=c.forwardRef((function(e,a){var s=e.bsPrefix,l=e.type,o=e.size,n=e.htmlSize,f=e.id,v=e.className,m=e.isValid,u=void 0!==m&&m,p=e.isInvalid,Z=void 0!==p&&p,N=e.plaintext,h=e.readOnly,y=e.as,j=void 0===y?"input":y,P=(0,r.Z)(e,I),w=(0,c.useContext)(b.Z).controlId;return s=(0,x.vE)(s,"form-control"),(0,d.jsx)(j,(0,i.Z)((0,i.Z)({},P),{},{type:l,size:n,ref:a,readOnly:h,id:f||w,className:t()(v,N?"".concat(s,"-plaintext"):s,o&&"".concat(s,"-").concat(o),"color"===l&&"".concat(s,"-color"),u&&"is-valid",Z&&"is-invalid")}))}));w.displayName="FormControl";var F=Object.assign(w,{Feedback:u}),k=["className","bsPrefix","as"],g=c.forwardRef((function(e,a){var s=e.className,l=e.bsPrefix,o=e.as,n=void 0===o?"div":o,c=(0,r.Z)(e,k);return l=(0,x.vE)(l,"form-floating"),(0,d.jsx)(n,(0,i.Z)({ref:a,className:t()(s,l)},c))}));g.displayName="FormFloating";var C=g,R=["controlId","as"],E=c.forwardRef((function(e,a){var s=e.controlId,l=e.as,t=void 0===l?"div":l,o=(0,r.Z)(e,R),n=(0,c.useMemo)((function(){return{controlId:s}}),[s]);return(0,d.jsx)(b.Z.Provider,{value:n,children:(0,d.jsx)(t,(0,i.Z)((0,i.Z)({},o),{},{ref:a}))})}));E.displayName="FormGroup";var z=E,S=s(29439),T=["as","bsPrefix","className"],V=["className"];var L=c.forwardRef((function(e,a){var s=function(e){var a=e.as,s=e.bsPrefix,l=e.className,o=(0,r.Z)(e,T);s=(0,x.vE)(s,"col");var n=(0,x.pi)(),c=(0,x.zG)(),d=[],f=[];return n.forEach((function(e){var a,i,r,l=o[e];delete o[e],"object"===typeof l&&null!=l?(a=l.span,i=l.offset,r=l.order):a=l;var t=e!==c?"-".concat(e):"";a&&d.push(!0===a?"".concat(s).concat(t):"".concat(s).concat(t,"-").concat(a)),null!=r&&f.push("order".concat(t,"-").concat(r)),null!=i&&f.push("offset".concat(t,"-").concat(i))})),[(0,i.Z)((0,i.Z)({},o),{},{className:t().apply(void 0,[l].concat(d,f))}),{as:a,bsPrefix:s,spans:d}]}(e),l=(0,S.Z)(s,2),o=l[0],n=o.className,c=(0,r.Z)(o,V),f=l[1],v=f.as,m=void 0===v?"div":v,u=f.bsPrefix,p=f.spans;return(0,d.jsx)(m,(0,i.Z)((0,i.Z)({},c),{},{ref:a,className:t()(n,!p.length&&u)}))}));L.displayName="Col";var O=L,G=["as","bsPrefix","column","visuallyHidden","className","htmlFor"],H=c.forwardRef((function(e,a){var s=e.as,l=void 0===s?"label":s,o=e.bsPrefix,n=e.column,f=void 0!==n&&n,v=e.visuallyHidden,m=void 0!==v&&v,u=e.className,p=e.htmlFor,Z=(0,r.Z)(e,G),N=(0,c.useContext)(b.Z).controlId;o=(0,x.vE)(o,"form-label");var h="col-form-label";"string"===typeof f&&(h="".concat(h," ").concat(h,"-").concat(f));var y=t()(u,o,m&&"visually-hidden",f&&h);return p=p||N,f?(0,d.jsx)(O,(0,i.Z)({ref:a,as:"label",className:y,htmlFor:p},Z)):(0,d.jsx)(l,(0,i.Z)({ref:a,className:y,htmlFor:p},Z))}));H.displayName="FormLabel";var M=H,A=["bsPrefix","className","id"],_=c.forwardRef((function(e,a){var s=e.bsPrefix,l=e.className,o=e.id,n=(0,r.Z)(e,A),f=(0,c.useContext)(b.Z).controlId;return s=(0,x.vE)(s,"form-range"),(0,d.jsx)("input",(0,i.Z)((0,i.Z)({},n),{},{type:"range",ref:a,className:t()(l,s),id:o||f}))}));_.displayName="FormRange";var q=_,B=["bsPrefix","size","htmlSize","className","isValid","isInvalid","id"],D=c.forwardRef((function(e,a){var s=e.bsPrefix,l=e.size,o=e.htmlSize,n=e.className,f=e.isValid,v=void 0!==f&&f,m=e.isInvalid,u=void 0!==m&&m,p=e.id,Z=(0,r.Z)(e,B),N=(0,c.useContext)(b.Z).controlId;return s=(0,x.vE)(s,"form-select"),(0,d.jsx)("select",(0,i.Z)((0,i.Z)({},Z),{},{size:o,ref:a,className:t()(n,s,l&&"".concat(s,"-").concat(l),v&&"is-valid",u&&"is-invalid"),id:p||N}))}));D.displayName="FormSelect";var J=D,K=["bsPrefix","className","as","muted"],Q=c.forwardRef((function(e,a){var s=e.bsPrefix,l=e.className,o=e.as,n=void 0===o?"small":o,c=e.muted,f=(0,r.Z)(e,K);return s=(0,x.vE)(s,"form-text"),(0,d.jsx)(n,(0,i.Z)((0,i.Z)({},f),{},{ref:a,className:t()(l,s,c&&"text-muted")}))}));Q.displayName="FormText";var U=Q,W=c.forwardRef((function(e,a){return(0,d.jsx)(P,(0,i.Z)((0,i.Z)({},e),{},{ref:a,type:"switch"}))}));W.displayName="Switch";var X=Object.assign(W,{Input:P.Input,Label:P.Label}),Y=["bsPrefix","className","children","controlId","label"],$=c.forwardRef((function(e,a){var s=e.bsPrefix,l=e.className,o=e.children,n=e.controlId,c=e.label,f=(0,r.Z)(e,Y);return s=(0,x.vE)(s,"form-floating"),(0,d.jsxs)(z,(0,i.Z)((0,i.Z)({ref:a,className:t()(l,s),controlId:n},f),{},{children:[o,(0,d.jsx)("label",{htmlFor:n,children:c})]}))}));$.displayName="FloatingLabel";var ee=$,ae=["className","validated","as"],se={_ref:n().any,validated:n().bool,as:n().elementType},ie=c.forwardRef((function(e,a){var s=e.className,l=e.validated,o=e.as,n=void 0===o?"form":o,c=(0,r.Z)(e,ae);return(0,d.jsx)(n,(0,i.Z)((0,i.Z)({},c),{},{ref:a,className:t()(s,l&&"was-validated")}))}));ie.displayName="Form",ie.propTypes=se;var re=Object.assign(ie,{Group:z,Control:F,Floating:C,Check:P,Switch:X,Label:M,Text:U,Range:q,Select:J,FloatingLabel:ee})},96882:function(e,a,s){var i=s(1413),r=s(45987),l=s(81694),t=s.n(l),o=s(72791),n=s(84934),c=s(10162),d=s(80184),f=["id","bsPrefix","className","type","isValid","isInvalid","as"],v=o.forwardRef((function(e,a){var s=e.id,l=e.bsPrefix,v=e.className,m=e.type,u=void 0===m?"checkbox":m,p=e.isValid,b=void 0!==p&&p,x=e.isInvalid,Z=void 0!==x&&x,N=e.as,h=void 0===N?"input":N,y=(0,r.Z)(e,f),j=(0,o.useContext)(n.Z).controlId;return l=(0,c.vE)(l,"form-check-input"),(0,d.jsx)(h,(0,i.Z)((0,i.Z)({},y),{},{ref:a,type:u,id:s||j,className:t()(v,l,b&&"is-valid",Z&&"is-invalid")}))}));v.displayName="FormCheckInput",a.Z=v},84934:function(e,a,s){var i=s(72791).createContext({});a.Z=i}}]);
//# sourceMappingURL=241.3240f969.chunk.js.map