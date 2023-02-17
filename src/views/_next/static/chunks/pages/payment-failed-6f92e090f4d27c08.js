(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7533],{91359:function(e,t,r){"use strict";r.d(t,{Z:function(){return Z}});var a=r(87462),n=r(63366),o=r(67294),i=r(86010),s=r(94780),l=r(67074),u=r(78884),d=r(1588),c=r(34867);function p(e){return(0,c.Z)("MuiCardContent",e)}(0,d.Z)("MuiCardContent",["root"]);var v=r(85893);let h=["className","component"],m=e=>{let{classes:t}=e;return(0,s.Z)({root:["root"]},p,t)},f=(0,l.ZP)("div",{name:"MuiCardContent",slot:"Root",overridesResolver:(e,t)=>t.root})(()=>({padding:16,"&:last-child":{paddingBottom:24}})),g=o.forwardRef(function(e,t){let r=(0,u.Z)({props:e,name:"MuiCardContent"}),{className:o,component:s="div"}=r,l=(0,n.Z)(r,h),d=(0,a.Z)({},r,{component:s}),c=m(d);return(0,v.jsx)(f,(0,a.Z)({as:s,className:(0,i.Z)(c.root,o),ownerState:d,ref:t},l))});var Z=g},49837:function(e,t,r){"use strict";r.d(t,{Z:function(){return y}});var a=r(87462),n=r(63366),o=r(67294),i=r(86010),s=r(94780),l=r(67074),u=r(78884),d=r(70918),c=r(1588),p=r(34867);function v(e){return(0,p.Z)("MuiCard",e)}(0,c.Z)("MuiCard",["root"]);var h=r(85893);let m=["className","raised"],f=e=>{let{classes:t}=e;return(0,s.Z)({root:["root"]},v,t)},g=(0,l.ZP)(d.Z,{name:"MuiCard",slot:"Root",overridesResolver:(e,t)=>t.root})(()=>({overflow:"hidden"})),Z=o.forwardRef(function(e,t){let r=(0,u.Z)({props:e,name:"MuiCard"}),{className:o,raised:s=!1}=r,l=(0,n.Z)(r,m),d=(0,a.Z)({},r,{raised:s}),c=f(d);return(0,h.jsx)(g,(0,a.Z)({className:(0,i.Z)(c.root,o),elevation:s?8:void 0,ref:t,ownerState:d},l))});var y=Z},70918:function(e,t,r){"use strict";r.d(t,{Z:function(){return x}});var a=r(63366),n=r(87462),o=r(67294),i=r(86010),s=r(94780),l=r(41796),u=r(67074),d=r(78884),c=r(1588),p=r(34867);function v(e){return(0,p.Z)("MuiPaper",e)}(0,c.Z)("MuiPaper",["root","rounded","outlined","elevation","elevation0","elevation1","elevation2","elevation3","elevation4","elevation5","elevation6","elevation7","elevation8","elevation9","elevation10","elevation11","elevation12","elevation13","elevation14","elevation15","elevation16","elevation17","elevation18","elevation19","elevation20","elevation21","elevation22","elevation23","elevation24"]);var h=r(85893);let m=["className","component","elevation","square","variant"],f=e=>((e<1?5.11916*e**2:4.5*Math.log(e+1)+2)/100).toFixed(2),g=e=>{let{square:t,elevation:r,variant:a,classes:n}=e,o={root:["root",a,!t&&"rounded","elevation"===a&&`elevation${r}`]};return(0,s.Z)(o,v,n)},Z=(0,u.ZP)("div",{name:"MuiPaper",slot:"Root",overridesResolver(e,t){let{ownerState:r}=e;return[t.root,t[r.variant],!r.square&&t.rounded,"elevation"===r.variant&&t[`elevation${r.elevation}`]]}})(({theme:e,ownerState:t})=>{var r;return(0,n.Z)({backgroundColor:(e.vars||e).palette.background.paper,color:(e.vars||e).palette.text.primary,transition:e.transitions.create("box-shadow")},!t.square&&{borderRadius:e.shape.borderRadius},"outlined"===t.variant&&{border:`1px solid ${(e.vars||e).palette.divider}`},"elevation"===t.variant&&(0,n.Z)({boxShadow:(e.vars||e).shadows[t.elevation]},!e.vars&&"dark"===e.palette.mode&&{backgroundImage:`linear-gradient(${(0,l.Fq)("#fff",f(t.elevation))}, ${(0,l.Fq)("#fff",f(t.elevation))})`},e.vars&&{backgroundImage:null==(r=e.vars.overlays)?void 0:r[t.elevation]}))}),y=o.forwardRef(function(e,t){let r=(0,d.Z)({props:e,name:"MuiPaper"}),{className:o,component:s="div",elevation:l=1,square:u=!1,variant:c="elevation"}=r,p=(0,a.Z)(r,m),v=(0,n.Z)({},r,{component:s,elevation:l,square:u,variant:c}),f=g(v);return(0,h.jsx)(Z,(0,n.Z)({as:s,ownerState:v,className:(0,i.Z)(f.root,o),ref:t},p))});var x=y},29630:function(e,t,r){"use strict";r.d(t,{Z:function(){return j}});var a=r(63366),n=r(87462),o=r(67294),i=r(86010),s=r(39707),l=r(94780),u=r(67074),d=r(78884),c=r(36622),p=r(1588),v=r(34867);function h(e){return(0,v.Z)("MuiTypography",e)}(0,p.Z)("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);var m=r(85893);let f=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],g=e=>{let{align:t,gutterBottom:r,noWrap:a,paragraph:n,variant:o,classes:i}=e,s={root:["root",o,"inherit"!==e.align&&`align${(0,c.Z)(t)}`,r&&"gutterBottom",a&&"noWrap",n&&"paragraph"]};return(0,l.Z)(s,h,i)},Z=(0,u.ZP)("span",{name:"MuiTypography",slot:"Root",overridesResolver(e,t){let{ownerState:r}=e;return[t.root,r.variant&&t[r.variant],"inherit"!==r.align&&t[`align${(0,c.Z)(r.align)}`],r.noWrap&&t.noWrap,r.gutterBottom&&t.gutterBottom,r.paragraph&&t.paragraph]}})(({theme:e,ownerState:t})=>(0,n.Z)({margin:0},t.variant&&e.typography[t.variant],"inherit"!==t.align&&{textAlign:t.align},t.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},t.gutterBottom&&{marginBottom:"0.35em"},t.paragraph&&{marginBottom:16})),y={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},x={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},b=e=>x[e]||e,w=o.forwardRef(function(e,t){let r=(0,d.Z)({props:e,name:"MuiTypography"}),o=b(r.color),l=(0,s.Z)((0,n.Z)({},r,{color:o})),{align:u="inherit",className:c,component:p,gutterBottom:v=!1,noWrap:h=!1,paragraph:x=!1,variant:w="body1",variantMapping:j=y}=l,C=(0,a.Z)(l,f),M=(0,n.Z)({},l,{align:u,color:o,className:c,component:p,gutterBottom:v,noWrap:h,paragraph:x,variant:w,variantMapping:j}),N=p||(x?"p":j[w]||y[w])||"span",R=g(M);return(0,m.jsx)(Z,(0,n.Z)({as:N,ref:t,ownerState:M,className:(0,i.Z)(R.root,c)},C))});var j=w},85642:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/payment-failed",function(){return r(79261)}])},79261:function(e,t,r){"use strict";r.r(t);var a=r(85893),n=r(30152),o=r(9008),i=r.n(o),s=r(41664),l=r.n(s),u=r(61953),d=r(49837),c=r(91359),p=r(29630);let v=()=>(0,a.jsxs)("div",{className:"page-wrapper",children:[(0,a.jsx)(i(),{children:(0,a.jsxs)("title",{children:[n.Z.templateName," | Payment Failed"]})}),(0,a.jsx)(u.Z,{sx:{display:"flex",alignItems:"center",justifyContent:"center"},children:(0,a.jsx)(d.Z,{sx:{maxWidth:430,marginTop:"3rem",marginBottom:"3rem"},children:(0,a.jsxs)(c.Z,{children:[(0,a.jsxs)(u.Z,{sx:{margin:"auto",textAlign:"center",padding:3},children:[(0,a.jsx)("img",{style:{width:60,marginBottom:15},src:"https://uploads-ssl.webflow.com/63503c8eb379085bf5801bda/63503c8eb379083118801cfe_exit.svg",alt:"img"}),(0,a.jsxs)(p.Z,{variant:"h4",children:["We're sorry",(0,a.jsx)("br",{})," your payment was not successful."]})]}),(0,a.jsxs)(u.Z,{children:[(0,a.jsx)(p.Z,{children:"Please try again or contact our support team for assistance."}),(0,a.jsx)(p.Z,{style:{marginBottom:0},children:"- Check that your payment information is correct and up to date"}),(0,a.jsx)(p.Z,{style:{marginBottom:0},children:"- Make sure your card has sufficient funds"}),(0,a.jsx)(p.Z,{children:"Try a different payment method"}),(0,a.jsx)(p.Z,{style:{marginTop:15},children:"Need assistance? Contact us"})]}),(0,a.jsxs)(u.Z,{sx:{display:"flex",alignItems:"center",mb:2,justifyContent:"center"},children:[(0,a.jsx)(l(),{className:"payment-back-btn",href:{pathname:"/home",query:{section:"apply-now"}},children:"Try again"}),(0,a.jsx)(l(),{className:"download-application-btn",href:"/contact-us",children:"Contact us"})]})]})})})]});v.guestGuard=!0,t.default=v}},function(e){e.O(0,[9774,2888,179],function(){return e(e.s=85642)}),_N_E=e.O()}]);