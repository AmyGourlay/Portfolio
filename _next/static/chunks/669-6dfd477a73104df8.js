"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[669],{7812:function(t,e,n){n.d(e,{Z:function(){return s}});var i=n(5893),o=n(2430),a=n(6720),r=n(7297);let l=(0,i.jsx)(r.Z,{styles:()=>({body:{overflowY:"scroll"}})});var c=n(7903),s=t=>{let{children:e}=t;return(0,i.jsxs)(o.Z,{theme:c.rS,children:[(0,i.jsx)(a.ZP,{}),l,e]})}},1424:function(t,e,n){var i=n(5893),o=n(7294),a=n(1588),r=n(948),l=n(7933),c=n(8770);let s={inherit:{fontSize:"1em",opsz:20},small:{fontSize:20,opsz:20},medium:{fontSize:24,opsz:24},large:{fontSize:40,opsz:40},"extra-large":{fontSize:80,opsz:40}},d=(0,a.Z)("PickerButton",["root","selected","current","error"]),p=(0,r.ZP)((0,o.forwardRef)((t,e)=>{let{name:n,color:o,size:a,filled:r,weight:l,...c}=t;return(0,i.jsx)("span",{role:"img",...c,ref:e,children:n})}),{name:"Icon"})(t=>{let{theme:e,color:n,size:i="medium",filled:o=!0,weight:a=400}=t;return{fontFamily:'"Material Symbols Rounded"',fontWeight:"normal",fontStyle:"normal",fontSize:s[i].fontSize,fontVariationSettings:"'FILL' ".concat(o?1:0,", 'opsz' ").concat(s[i].opsz,", 'wght' ").concat(a),textRendering:"optimizeLegibility",display:"inline-block",lineHeight:1,textTransform:"none",letterSpacing:"normal",wordWrap:"normal",whiteSpace:"nowrap",direction:"ltr",color:n&&n in e.palette?e.palette[n].main:n,transition:e.transitions.create(["font-size","font-variation-setting","color","transform"],{duration:e.transitions.duration.short}),userSelect:"none",[".".concat(l.Z.startIcon," &, .").concat(l.Z.endIcon," &, .").concat(d.root," &")]:(0,c.ef)({fontSize:s.small.fontSize,fontVariationSettings:"'FILL' ".concat(o?1:0,", 'opsz' ").concat(s.small.opsz),transition:e.transitions.create(["font-size","font-variation-setting","transform"],{duration:e.transitions.duration.short})})}});e.Z=p},1009:function(t,e,n){n.d(e,{Z:function(){return C}});var i=n(5893),o=n(7357),a=n(1068),r=n(948),l=n(1233),c=n(5861),s=n(7421),d=n(6088);let p=(0,r.ZP)("footer",{name:"FooterRoot",shouldForwardProp:a.Z})(t=>{let{theme:e,order:n}=t;return{display:"flex",alignItems:"center",backgroundColor:e.palette.text.primary,color:e.palette.text.secondary,position:"sticky",padding:e.spacing(0,d.Ki.Header),height:e.spacing(d.RC.ToolbarHeight),top:e.spacing(d.RC.ToolbarHeight*n),zIndex:e.zIndex.tooltip}});var g=t=>{let{order:e=0}=t,{t:n}=(0,s.$G)();return(0,i.jsx)(p,{order:e,children:(0,i.jsx)(o.Z,{component:"div",display:"grid",gap:d.Ki.Header,gridTemplateColumns:"max-content 1fr max-content",alignItems:"center",width:1,sx:{backgroundColor:"#101010 !important"},children:(0,i.jsx)(l.Z,{spacing:d.Ki.Header,direction:"row",alignItems:"center",children:(0,i.jsx)(c.Z,{variant:"body2",marginBottom:0,sx:{color:"#fff !important",backgroundColor:"#101010 !important"},children:n("home:footer.title")})})})})},m=n(7294),u=n(2293),h=n(2992),f=n(1397),x=n(3873),y=n(3575),b=n(1664),S=n.n(b),z=n(9612),Z=n(7903),v=()=>{let{t}=(0,s.$G)();return(0,i.jsx)(c.Z,{variant:"h2",whiteSpace:"nowrap",color:Z.rS.palette.text.primary,sx:{marginBottom:0,fontWeight:Z.$G.weights.medium},children:t("home:header.name")})},k=n(1424);let H=(0,r.ZP)(u.Z,{name:"HeaderRoot",shouldForwardProp:a.Z})(t=>{let{order:e}=t;return{boxShadow:Z.rS.shadows[2],height:Z.rS.spacing(d.RC.ToolbarHeight),backgroundColor:"rgba(255, 255, 255, 0.6) !important",backdropFilter:"saturate(180%) blur(20px)",display:"flex",alignItems:"center",justifyContent:"center",color:Z.rS.palette.text.primary,padding:Z.rS.spacing(0,d.Ki.Header),top:Z.rS.spacing(d.RC.ToolbarHeight*e),zIndex:Z.rS.zIndex.tooltip,backfaceVisibility:"hidden"}}),j=(0,r.ZP)("div",{name:"DrawerHeader"})(()=>({display:"flex",alignItems:"center",padding:Z.rS.spacing(2.5,1)})),w=t=>{let{order:e=0}=t,{width:n,ref:a}=(0,z.NB)(),r=n&&n<Z.rS.breakpoints.values.md,s=n&&n<Z.rS.breakpoints.values.lg,p=[{displayName:"CV",slug:"cv"},{displayName:"Next",slug:"projects/next"},{displayName:"Shopify",slug:"projects/shopify"}],g=(0,y.o_)({popupId:(0,m.useId)(),variant:"dialog"});return(0,i.jsx)(o.Z,{component:"div",children:(0,i.jsx)("div",{ref:a,children:(0,i.jsx)(H,{order:e,children:(0,i.jsxs)(o.Z,{component:"div",display:"grid",gap:d.Ki.Header,gridTemplateColumns:"max-content 1fr max-content",alignItems:"center",width:1,children:[s?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(h.Z,{variant:"text",onClick:g.open,sx:{padding:"0 !important"},children:(0,i.jsx)(k.Z,{name:"menu",sx:{color:Z.rS.palette.text.primary}})}),(0,i.jsxs)(f.ZP,{anchor:"top",transitionDuration:500,...(0,y.ZW)(g),PaperProps:{sx:{boxShadow:"none",height:"100%",width:r?"100%":"40%"}},sx:{zIndex:5e3},children:[(0,i.jsxs)(j,{children:[(0,i.jsx)(h.Z,{onClick:g.close,sx:{padding:"0 26px !important"},children:(0,i.jsx)(k.Z,{color:Z.rS.palette.text.primary,name:"close"})}),(0,i.jsx)(S(),{href:"/",style:{textDecoration:"none"},children:(0,i.jsx)(v,{})})]}),(0,i.jsx)(x.Z,{direction:"down",in:g.isOpen,mountOnEnter:!0,unmountOnExit:!0,timeout:{enter:1500,exit:300},children:(0,i.jsx)(o.Z,{component:"div",m:3,sx:{display:"flex",flexDirection:"column"},children:null==p?void 0:p.map(t=>(0,i.jsx)(S(),{href:"/work/".concat(t.slug),onClick:g.close,style:{display:"flex",justifyContent:"center",textDecoration:"none",paddingBottom:"30px"},children:(0,i.jsx)(c.Z,{variant:"h4",color:Z.rS.palette.text.primary,children:t.displayName})},t.displayName))})})]}),(0,i.jsx)(l.Z,{spacing:d.Ki.Header,direction:"row",alignItems:"center",children:(0,i.jsx)(S(),{href:"/",style:{textDecoration:"none"},children:(0,i.jsx)(v,{})})})]}):null,s?null:(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(l.Z,{spacing:d.Ki.Header,direction:"row",alignItems:"center",children:(0,i.jsx)(S(),{href:"/",style:{textDecoration:"none"},children:(0,i.jsx)(v,{})})}),(0,i.jsx)("div",{}),(0,i.jsx)(o.Z,{component:"div",sx:{display:"flex",flexDirection:"row",alignItems:"center"},children:null==p?void 0:p.map(t=>(0,i.jsx)(S(),{href:"/".concat(t.slug),onClick:g.close,style:{display:"flex",justifyContent:"center",paddingRight:"30px",textDecoration:"none"},children:(0,i.jsx)(c.Z,{variant:"h5",color:Z.rS.palette.text.primary,children:t.displayName})},t.displayName))})]})]})})})})};var O=n(9008),B=n.n(O),F=t=>{let{children:e}=t;return(0,i.jsx)(B(),{children:(0,i.jsx)("title",{children:null!=e?e:null})})},C=t=>{let{title:e,menuOptions:n,children:a}=t;return(0,i.jsxs)(o.Z,{component:"div",id:"pageLayout",width:1,position:"relative",sx:{height:"calc(100vh - 72px)",top:"72px"},children:[e?(0,i.jsx)(F,{children:e}):null,(0,i.jsx)(w,{menuOptions:n}),a,(0,i.jsx)(g,{})]})}},4010:function(t,e,n){var i=n(5893),o=n(7357),a=n(5582),r=n(6088),l=n(7903);e.Z=t=>{let{children:e,maxWidth:n="sm",isFullScreen:c=!1,fadeType:s="none",backgroundColor:d=l.rS.palette.background.default,backgroundImage:p,...g}=t,m=d;switch(s){case"both":m="linear-gradient(\n                    180deg,\n                    ".concat(l.rS.palette.background.default," 0%,\n                    ").concat(d," 18.9%,\n                    ").concat(d," 79.07%,\n                    ").concat(l.rS.palette.background.default," 100%\n                )");break;case"top":m="linear-gradient(to bottom, transparent, ".concat(d,")");break;case"bottom":m="linear-gradient(to top, transparent, ".concat(d,")")}return(0,i.jsx)(o.Z,{sx:{background:m,backgroundImage:p?"url(".concat(p,")!important"):"currentColor",backgroundRepeat:"no-repeat !important",backgroundSize:"contain !important",backgroundPosition:"center !important",display:"flex",justifyContent:"center"},children:(0,i.jsx)(a.Z,{id:"container",sx:{py:{xs:r.Ki.Body/5,md:r.Ki.Body},[l.rS.breakpoints.up("md")]:{height:c&&"calc(100vh - 69px)"},[l.rS.breakpoints.down("md")]:{height:c&&"calc(100vh - 69px)"}},maxWidth:n,...g,children:e})})}},6088:function(t,e,n){n.d(e,{Ki:function(){return i},RC:function(){return o}}),n(5893);var i,o,a,r,l,c,s=n(7357);(r=i||(i={}))[r.Body=24]="Body",r[r.Page=6]="Page",r[r.Header=4]="Header",r[r.Card=2]="Card",r[r.Icons=.5]="Icons",r[r.ButtonSmallVertical=.25]="ButtonSmallVertical",r[r.ButtonSmallHorizontal=1]="ButtonSmallHorizontal",r[r.ButtonMediumVertical=.75]="ButtonMediumVertical",r[r.ButtonMediumHorizontal=10]="ButtonMediumHorizontal",r[r.ListItemVertical=1.25]="ListItemVertical",r[r.ListItemHorizontal=1.5]="ListItemHorizontal",(l=o||(o={}))[l.ToolbarHeight=9]="ToolbarHeight",l[l.InputHeight=6]="InputHeight",l[l.ButtonMediumHeight=5.5]="ButtonMediumHeight",l[l.ButtonSmallHeight=3]="ButtonSmallHeight",(c=a||(a={}))[c.XS=150]="XS",c[c.SM=200]="SM",c[c.MD=250]="MD",c[c.LG=300]="LG",c[c.XL=400]="XL",s.Z,s.Z},7903:function(t,e,n){n.d(e,{$G:function(){return s},rS:function(){return h}});var i=n(7933),o=n(2346),a=n(1796),r=n(1265),l=n(8770),c=n(6088);let s={name:"indivisible",weights:{light:300,regular:500,medium:600,bold:700}},d={hoverOpacity:.075,selectedOpacity:.125,disabledOpacity:.35,focusOpacity:.125,activatedOpacity:.125},p={primary:"#101010",secondary:"#fff",info:"#3F69FF",error:"#FA391F",warning:"#FFB321",success:"#01AF85"},g={primary:{light:p.primary,main:p.primary,dark:p.primary,contrastText:"#fff"},secondary:{light:(0,a.Fq)(p.secondary,d.selectedOpacity),main:p.secondary,dark:(0,a._j)(p.secondary,.75),contrastText:"#101010"},info:{light:(0,a.Fq)(p.info,d.selectedOpacity),main:p.info,dark:(0,a._j)(p.info,.75),contrastText:"#fff"},error:{light:(0,a.Fq)(p.error,d.selectedOpacity),main:p.error,dark:(0,a._j)(p.error,.5),contrastText:"#fff"},warning:{light:(0,a.Fq)(p.warning,d.selectedOpacity),main:p.warning,dark:(0,a._j)(p.warning,.5),contrastText:"#fff"},success:{light:(0,a.Fq)(p.success,d.selectedOpacity),main:p.success,dark:(0,a._j)(p.success,.5),contrastText:"#fff"}},m=g.primary.main,u={components:{MuiTypography:{defaultProps:{variantMapping:{h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"p",subtitle2:"p",body1:"p",body2:"p",overline:"p"}}},MuiLink:{styleOverrides:{root:{textDecoration:"none"}}},MuiButton:{defaultProps:{disableElevation:!0},styleOverrides:{endIcon:t=>{let{theme:e}=t;return{margin:0,marginLeft:e.spacing(c.Ki.ButtonMediumHorizontal/2),marginRight:e.spacing(-c.Ki.ButtonMediumHorizontal/4),[".".concat(i.Z.sizeSmall," &")]:{marginLeft:e.spacing(c.Ki.ButtonSmallHorizontal/2),marginRight:e.spacing(-c.Ki.ButtonSmallHorizontal/4)},[".".concat(i.Z.text," &")]:{marginLeft:e.spacing(c.Ki.ButtonMediumHorizontal/8),marginRight:0,[".".concat(i.Z.sizeSmall," &")]:{marginLeft:e.spacing(c.Ki.ButtonSmallHorizontal/8),marginRight:0}}}},root:t=>{let{ownerState:{color:e},theme:n}=t;return!function(t,e){if("inherit"===t||"default"===t)throw Error('The "'.concat(t,'" color is not supported for ').concat(e,"."))}(e,"MuiButton"),{border:"none",borderRadius:0,fontSize:n.typography.body1.fontSize,fontWeight:n.typography.fontWeightMedium,minHeight:n.spacing(c.RC.ButtonMediumHeight),minWidth:"unset",padding:n.spacing(c.Ki.ButtonMediumVertical,c.Ki.ButtonMediumHorizontal),position:"relative",["&:hover, &:active, &.".concat(i.Z.focusVisible)]:{border:"none",backgroundColor:n.palette[e].main},["&:active, &.".concat(i.Z.focusVisible)]:{border:"none",backgroundColor:n.palette[e].main},["&.".concat(i.Z.sizeSmall)]:{fontSize:n.typography.overline.fontSize,minHeight:n.spacing(c.RC.ButtonSmallHeight),padding:n.spacing(c.Ki.ButtonSmallVertical,c.Ki.ButtonSmallHorizontal)},["&.".concat(i.Z.disabled)]:{border:"none",color:n.palette[e].main,opacity:n.palette.action.disabledOpacity},["&.".concat(i.Z.contained)]:{backgroundColor:n.palette[e].main,color:n.palette[e].contrastText,["&.".concat(i.Z.disabled)]:{backgroundColor:n.palette[e].main,color:n.palette[e].contrastText},[".".concat(o.Z.root)]:{color:n.palette[e].contrastText}},["&.".concat(i.Z.outlined)]:{color:n.palette[e].contrastText,["&.".concat(i.Z.disabled)]:{backgroundColor:n.palette.background.paper,boxShadow:"inset 0 0 0 1px ".concat(n.palette[e].main)}},["&.".concat(i.Z.text)]:{color:n.palette[e].contrastText,padding:n.spacing(c.Ki.ButtonMediumVertical,c.Ki.ButtonMediumHorizontal/2),["&.".concat(i.Z.sizeSmall)]:{padding:n.spacing(c.Ki.ButtonSmallVertical,c.Ki.ButtonSmallHorizontal/2)},["&.".concat(i.Z.disabled)]:{backgroundColor:(0,a.Fq)(n.palette.background.paper,0)},["&:hover, &:active, &.".concat(i.Z.focusVisible)]:{border:"none",backgroundColor:"transparent"},["&:active, &.".concat(i.Z.focusVisible)]:{border:"none",backgroundColor:"transparent"}},[".".concat(o.Z.root)]:{color:n.palette[e].main}}},startIcon:t=>{let{theme:e}=t;return{margin:0,marginLeft:e.spacing(-c.Ki.ButtonMediumHorizontal/4),marginRight:e.spacing(c.Ki.ButtonMediumHorizontal/2),[".".concat(i.Z.sizeSmall," &")]:{marginLeft:e.spacing(-c.Ki.ButtonSmallHorizontal/4),marginRight:e.spacing(c.Ki.ButtonSmallHorizontal/2)},[".".concat(i.Z.text," &")]:{marginLeft:0,marginRight:e.spacing(c.Ki.ButtonMediumHorizontal/8),[".".concat(i.Z.sizeSmall," &")]:{marginLeft:0,marginRight:e.spacing(c.Ki.ButtonSmallHorizontal/8)}}}}}},MuiFormLabel:{styleOverrides:{root:t=>{let{theme:e}=t;return{color:e.palette.text.primary}}}}},palette:{...g,background:{default:"#fff",paper:"#fff"},text:{primary:m,secondary:"#fff"},action:{active:(0,a.Fq)(g.primary.main,.5),hover:(0,a.Fq)(g.primary.main,d.hoverOpacity),hoverOpacity:d.hoverOpacity,selected:(0,a.Fq)(g.primary.main,d.selectedOpacity),selectedOpacity:d.selectedOpacity,disabled:(0,a.Fq)(g.primary.main,d.disabledOpacity),disabledBackground:(0,a.Fq)(g.primary.main,d.disabledOpacity),disabledOpacity:d.disabledOpacity,focus:(0,a.Fq)(g.primary.main,d.focusOpacity),focusOpacity:d.focusOpacity,activatedOpacity:d.activatedOpacity}},shape:{borderRadius:8},shadows:["none",["0 0px  4px ".concat((0,a.Fq)(m,.025)),"0 2px  8px ".concat((0,a.Fq)(m,.05)),"0 4px 16px ".concat((0,a.Fq)(m,.075)),"0 6px 24px ".concat((0,a.Fq)(m,.1))].join(","),"0 0 6px ".concat((0,a.Fq)(m,.075),", 0 0 8px ").concat((0,a.Fq)(m,.1)),"0 0 0 5px #f00","0 0 0 5px #f00","0 0 0 5px #f00","0 0 0 5px #f00","0 0 0 5px #f00","0 0 0 5px #f00","0 0 0 5px #f00","0 0 0 5px #f00","0 0 0 5px #f00","0 0 0 5px #f00","0 0 0 5px #f00","0 0 0 5px #f00","0 0 0 5px #f00","0 0 0 5px #f00","0 0 0 5px #f00","0 0 0 5px #f00","0 0 0 5px #f00","0 0 0 5px #f00","0 0 0 5px #f00","0 0 0 5px #f00","0 0 0 5px #f00","0 0 0 5px #f00"],breakpoints:{values:{xs:0,sm:480,md:768,lg:1024,xl:1240}}},h=(0,r.Z)(u);h=(0,r.Z)(h,{typography:{fontFamily:s.name,fontWeightLight:s.weights.light,fontWeightRegular:s.weights.regular,fontWeightMedium:s.weights.medium,fontWeightBold:s.weights.bold,h1:{fontFamily:s.name,fontWeight:s.weights.regular,lineHeight:1.1,fontSize:(0,l.hO)(36),[h.breakpoints.up("lg")]:{fontSize:(0,l.hO)(42)}},h2:{fontFamily:s.name,fontWeight:s.weights.regular,lineHeight:1.2,fontSize:(0,l.hO)(30),[h.breakpoints.up("lg")]:{fontSize:(0,l.hO)(36)}},h3:{fontFamily:s.name,fontWeight:s.weights.regular,lineHeight:1.3,fontSize:(0,l.hO)(26),[h.breakpoints.up("lg")]:{fontSize:(0,l.hO)(30)}},h4:{fontFamily:s.name,fontWeight:s.weights.regular,lineHeight:1.3,fontSize:(0,l.hO)(20),[h.breakpoints.up("lg")]:{fontSize:(0,l.hO)(26)}},h5:{fontFamily:s.name,fontWeight:s.weights.regular,lineHeight:1.4,fontSize:(0,l.hO)(20),[h.breakpoints.up("lg")]:{fontSize:(0,l.hO)(20)}},h6:{fontFamily:s.name,fontWeight:s.weights.bold,lineHeight:1.4,fontSize:(0,l.hO)(20),[h.breakpoints.up("lg")]:{fontSize:(0,l.hO)(20)}},subtitle1:{fontFamily:s.name,fontSize:(0,l.hO)(20),fontWeight:s.weights.medium,lineHeight:1.5},subtitle2:{fontFamily:s.name,fontSize:(0,l.hO)(20),fontWeight:s.weights.bold,lineHeight:1.5},body1:{fontFamily:s.name,fontWeight:s.weights.regular,lineHeight:1.5,fontSize:(0,l.hO)(18),[h.breakpoints.up("lg")]:{fontSize:(0,l.hO)(18)}},body2:{fontFamily:s.name,fontWeight:s.weights.regular,lineHeight:1.4,fontSize:(0,l.hO)(14),[h.breakpoints.up("lg")]:{fontSize:(0,l.hO)(16)}}}})}}]);