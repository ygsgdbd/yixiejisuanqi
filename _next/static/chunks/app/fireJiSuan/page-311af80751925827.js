(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[875],{2970:function(e,n,r){Promise.resolve().then(r.bind(r,6413))},6413:function(e,n,r){"use strict";r.d(n,{default:function(){return j}});var t=r(6943),l=r(2995),i=r(7879),o=r(4663),s=r(5214),u=r(9702),d=r(6958),a=r(9050);function c(e){let n=(0,d.Z)(),r=(0,i.useMemo)(()=>n(e.n),[n,e.n]);return(0,t.jsx)(t.Fragment,{children:r&&(0,t.jsx)(a.C,{className:"self-start",children:r})})}var f=r(6106),v=r(2966),m=r(1047),x=r(1253),g=r(2945),p=r(7638);function j(){(0,d.Z)();let e=s.z.object({monthly:s.z.coerce.number().optional(),rate:s.z.coerce.number().optional()}),{control:n,register:r,setValue:a,handleSubmit:j,watch:h}=(0,o.cI)({resolver:(0,l.F)(e),defaultValues:{rate:4}}),[N,b]=h(["monthly","rate"]),y=(0,i.useMemo)(()=>{if(b){var e;return null===(e=(0,g.HK)(N))||void 0===e?void 0:e.times(12).div((0,g.NX)(b).div(100))}},[N,b]);return(0,t.jsxs)(m.Zb,{children:[(0,t.jsx)(m.Ol,{children:(0,t.jsx)(m.ll,{children:"Fire 财务自由计算器"})}),(0,t.jsx)(m.aY,{children:(0,t.jsxs)("form",{className:"grid gap-4",onSubmit:j(()=>{}),children:[(0,t.jsxs)("div",{className:"flex flex-col gap-2",children:[(0,t.jsx)(x._,{children:"预计每月消费"}),(0,t.jsx)(o.Qr,{control:n,name:"monthly",render:e=>{var n;let{field:r}=e;return(0,t.jsx)(v.Z,{mask:(0,p.x)(16,2),...r,onAccept:r.onChange,value:null===(n=r.value)||void 0===n?void 0:n.toString()})}}),(0,t.jsx)(c,{n:N})]}),(0,t.jsxs)("div",{className:"grid gap-2",children:[(0,t.jsx)(x._,{children:"年化率 (%)"}),(0,t.jsx)(o.Qr,{control:n,name:"rate",render:e=>{var n;let{field:r}=e;return(0,t.jsx)(v.Z,{mask:(0,p.x)(8,2),step:.01,type:"number",...r,onAccept:r.onChange,value:null===(n=r.value)||void 0===n?void 0:n.toString()})}})]}),(0,t.jsx)(f.Z,{items:[{team:"Fire 起点",detail:(0,t.jsx)(u.Z,{n:y})}]})]})})]})}},9702:function(e,n,r){"use strict";r.d(n,{Z:function(){return d}});var t=r(6943),l=r(7879),i=r(2945);function o(e){let{n}=e,r=(0,l.useMemo)(()=>{var e,r,t;let l=null===(e=(0,i.HK)(n))||void 0===e?void 0:e.toDP(2).toString();return[null==l?void 0:null===(r=l.split("."))||void 0===r?void 0:r[0],null==l?void 0:null===(t=l.split("."))||void 0===t?void 0:t[1]]},[n]);return(null==r?void 0:r[0])?(0,t.jsxs)("span",{children:[(0,t.jsx)("span",{children:null==r?void 0:r[0]}),(null==r?void 0:r[1])&&(0,t.jsxs)("small",{children:[".",null==r?void 0:r[1]]})]}):"--"}var s=r(6958),u=r(9050);function d(e){let{n}=e,r=(0,s.Z)(),i=(0,l.useMemo)(()=>r(n),[r,n]);return(0,t.jsxs)("div",{className:"flex flex-col items-start gap-1",children:[(0,t.jsx)(o,{n:n}),i&&(0,t.jsx)(u.C,{children:i})]})}},6106:function(e,n,r){"use strict";r.d(n,{Z:function(){return l}});var t=r(6943);function l(e){return(0,t.jsx)("div",{className:"divide-y rounded-md border text-sm",children:e.items.map((e,n)=>(0,t.jsxs)("div",{className:"grid grid-cols-[1fr_2fr] p-4 transition-colors hover:bg-muted/50",children:[(0,t.jsx)("div",{className:"text-muted-foreground",children:e.team}),(0,t.jsx)("div",{children:e.detail})]},n))})}},2966:function(e,n,r){"use strict";var t=r(6943),l=r(4276),i=r(8963);let o=(0,l._z)(e=>{let{inputRef:n,...r}=e,{className:o,...s}=r;return(0,t.jsx)(l.oc,{className:(0,i.cn)(o,"input-mask"),inputRef:n,...s})});n.Z=o},6958:function(e,n,r){"use strict";r.d(n,{Z:function(){return i}});var t=r(7879),l=r(2945);function i(){return(0,t.useCallback)(e=>{let n=(0,l.HK)(e);return(null==n?void 0:n.gte(1e16))?"\uD83D\uDE13":(null==n?void 0:n.gte(1e15))?"千万亿":(null==n?void 0:n.gte(1e14))?"百万亿":(null==n?void 0:n.gte(1e13))?"十万亿":(null==n?void 0:n.gte(1e12))?"万亿":(null==n?void 0:n.gte(1e11))?"千亿":(null==n?void 0:n.gte(1e10))?"百亿":(null==n?void 0:n.gte(1e9))?"十亿":(null==n?void 0:n.gte(1e8))?"亿":(null==n?void 0:n.gte(1e7))?"千万":(null==n?void 0:n.gte(1e6))?"百万":(null==n?void 0:n.gte(1e5))?"十万":(null==n?void 0:n.gte(1e4))?"万":(null==n?void 0:n.gte(1e3))?"千":(null==n?void 0:n.gte(100))?"百":(null==n?void 0:n.gte(10))?"十":(null==n?void 0:n.gte(1))?"元":void 0},[])}},8963:function(e,n,r){"use strict";r.d(n,{cn:function(){return i}});var t=r(1488),l=r(689);function i(){for(var e=arguments.length,n=Array(e),r=0;r<e;r++)n[r]=arguments[r];return(0,l.m6)((0,t.W)(n))}},9050:function(e,n,r){"use strict";r.d(n,{C:function(){return s}});var t=r(6943),l=r(8737);r(7879);var i=r(8963);let o=(0,l.j)("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",{variants:{variant:{default:"border-transparent bg-primary text-primary-foreground hover:bg-primary/80",secondary:"border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",destructive:"border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",outline:"text-foreground"}},defaultVariants:{variant:"default"}});function s(e){let{className:n,variant:r,...l}=e;return(0,t.jsx)("div",{className:(0,i.cn)(o({variant:r}),n),...l})}},1047:function(e,n,r){"use strict";r.d(n,{Ol:function(){return s},SZ:function(){return d},Zb:function(){return o},aY:function(){return a},ll:function(){return u}});var t=r(6943),l=r(7879),i=r(8963);let o=l.forwardRef((e,n)=>{let{className:r,...l}=e;return(0,t.jsx)("div",{className:(0,i.cn)("rounded-lg border bg-card text-card-foreground shadow-sm",r),ref:n,...l})});o.displayName="Card";let s=l.forwardRef((e,n)=>{let{className:r,...l}=e;return(0,t.jsx)("div",{className:(0,i.cn)("flex flex-col space-y-1.5 p-6",r),ref:n,...l})});s.displayName="CardHeader";let u=l.forwardRef((e,n)=>{let{className:r,...l}=e;return(0,t.jsx)("h3",{className:(0,i.cn)("text-2xl font-semibold leading-none tracking-tight",r),ref:n,...l})});u.displayName="CardTitle";let d=l.forwardRef((e,n)=>{let{className:r,...l}=e;return(0,t.jsx)("p",{className:(0,i.cn)("text-sm text-muted-foreground",r),ref:n,...l})});d.displayName="CardDescription";let a=l.forwardRef((e,n)=>{let{className:r,...l}=e;return(0,t.jsx)("div",{className:(0,i.cn)("p-6 pt-0",r),ref:n,...l})});a.displayName="CardContent",l.forwardRef((e,n)=>{let{className:r,...l}=e;return(0,t.jsx)("div",{className:(0,i.cn)("flex items-center p-6 pt-0",r),ref:n,...l})}).displayName="CardFooter"},1253:function(e,n,r){"use strict";r.d(n,{_:function(){return d}});var t=r(6943),l=r(1080),i=r(8737),o=r(7879),s=r(8963);let u=(0,i.j)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),d=o.forwardRef((e,n)=>{let{className:r,...i}=e;return(0,t.jsx)(l.f,{className:(0,s.cn)(u(),r),ref:n,...i})});d.displayName=l.f.displayName},2945:function(e,n,r){"use strict";r.d(n,{HK:function(){return o},NX:function(){return u},mH:function(){return s}});var t=r(710),l=r(2107),i=r.n(l);let o=e=>{if(!i().isNil(e))try{let n=new t.Z(e);return n.isFinite()?n:void 0}catch(e){return}},s=e=>{var n;return null!==(n=o(e))&&void 0!==n?n:new t.Z(0)},u=e=>{var n;return null!==(n=o(e))&&void 0!==n?n:new t.Z(1)}},7638:function(e,n,r){"use strict";r.d(n,{x:function(){return t}});let t=function(e){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return new RegExp(0===n?"^\\d{0,".concat(e,"}$"):"^\\d{0,".concat(e,"}(\\.\\d{0,").concat(n,"})?$"))}}},function(e){e.O(0,[495,176,984,710,276,922,465,744],function(){return e(e.s=2970)}),_N_E=e.O()}]);