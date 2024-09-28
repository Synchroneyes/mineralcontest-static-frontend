import{C as l,q as s,L as q,Q as c,b as n,p as y,z as V,I as m,s as x,F as A,a3 as P,aF as f,n as Q,al as U,v as $,aS as G,bc as J,bd as K,x as W,av as X,A as Y,B as Z,$ as ee,H as ae,aw as te,ax as ne,a5 as de,am as ie,ay as le,aT as se,be as ce,bf as re,az as ue,aC as oe,N as S,a1 as ve,a2 as me,e as ye,aU as be,aD as ge,R as ke}from"./index-B-AnKxHY.js";import{c as Ce,b as h}from"./VContainer-DLe9O4u1.js";const fe=l()({name:"VCardActions",props:s(),setup(e,d){let{slots:t}=d;return q({VBtn:{slim:!0,variant:"text"}}),c(()=>{var a;return n("div",{class:["v-card-actions",e.class],style:e.style},[(a=t.default)==null?void 0:a.call(t)])}),{}}}),Ve=y({opacity:[Number,String],...s(),...V()},"VCardSubtitle"),Ie=l()({name:"VCardSubtitle",props:Ve(),setup(e,d){let{slots:t}=d;return c(()=>n(e.tag,{class:["v-card-subtitle",e.class],style:[{"--v-card-subtitle-opacity":e.opacity},e.style]},t)),{}}}),pe=Ce("v-card-title"),Ae=y({appendAvatar:String,appendIcon:m,prependAvatar:String,prependIcon:m,subtitle:[String,Number],title:[String,Number],...s(),...x()},"VCardItem"),Pe=l()({name:"VCardItem",props:Ae(),setup(e,d){let{slots:t}=d;return c(()=>{var u;const a=!!(e.prependAvatar||e.prependIcon),b=!!(a||t.prepend),r=!!(e.appendAvatar||e.appendIcon),g=!!(r||t.append),k=!!(e.title!=null||t.title),C=!!(e.subtitle!=null||t.subtitle);return n("div",{class:["v-card-item",e.class],style:e.style},[b&&n("div",{key:"prepend",class:"v-card-item__prepend"},[t.prepend?n(f,{key:"prepend-defaults",disabled:!a,defaults:{VAvatar:{density:e.density,image:e.prependAvatar},VIcon:{density:e.density,icon:e.prependIcon}}},t.prepend):n(A,null,[e.prependAvatar&&n(h,{key:"prepend-avatar",density:e.density,image:e.prependAvatar},null),e.prependIcon&&n(P,{key:"prepend-icon",density:e.density,icon:e.prependIcon},null)])]),n("div",{class:"v-card-item__content"},[k&&n(pe,{key:"title"},{default:()=>{var i;return[((i=t.title)==null?void 0:i.call(t))??e.title]}}),C&&n(Ie,{key:"subtitle"},{default:()=>{var i;return[((i=t.subtitle)==null?void 0:i.call(t))??e.subtitle]}}),(u=t.default)==null?void 0:u.call(t)]),g&&n("div",{key:"append",class:"v-card-item__append"},[t.append?n(f,{key:"append-defaults",disabled:!r,defaults:{VAvatar:{density:e.density,image:e.appendAvatar},VIcon:{density:e.density,icon:e.appendIcon}}},t.append):n(A,null,[e.appendIcon&&n(P,{key:"append-icon",density:e.density,icon:e.appendIcon},null),e.appendAvatar&&n(h,{key:"append-avatar",density:e.density,image:e.appendAvatar},null)])])])}),{}}}),Se=y({opacity:[Number,String],...s(),...V()},"VCardText"),he=l()({name:"VCardText",props:Se(),setup(e,d){let{slots:t}=d;return c(()=>n(e.tag,{class:["v-card-text",e.class],style:[{"--v-card-text-opacity":e.opacity},e.style]},t)),{}}}),xe=y({appendAvatar:String,appendIcon:m,disabled:Boolean,flat:Boolean,hover:Boolean,image:String,link:{type:Boolean,default:void 0},prependAvatar:String,prependIcon:m,ripple:{type:[Boolean,Object],default:!0},subtitle:[String,Number],text:[String,Number],title:[String,Number],...Q(),...s(),...x(),...U(),...$(),...G(),...J(),...K(),...W(),...X(),...V(),...Y(),...Z({variant:"elevated"})},"VCard"),De=l()({name:"VCard",directives:{Ripple:ee},props:xe(),setup(e,d){let{attrs:t,slots:a}=d;const{themeClasses:b}=ae(e),{borderClasses:r}=te(e),{colorClasses:g,colorStyles:k,variantClasses:C}=ne(e),{densityClasses:u}=de(e),{dimensionStyles:i}=ie(e),{elevationClasses:T}=le(e),{loaderClasses:B}=se(e),{locationStyles:D}=ce(e),{positionClasses:L}=re(e),{roundedClasses:N}=ue(e),o=oe(e,t),_=S(()=>e.link!==!1&&o.isLink.value),v=S(()=>!e.disabled&&e.link!==!1&&(e.link||o.isClickable.value));return c(()=>{const R=_.value?"a":e.tag,F=!!(a.title||e.title!=null),w=!!(a.subtitle||e.subtitle!=null),z=F||w,E=!!(a.append||e.appendAvatar||e.appendIcon),H=!!(a.prepend||e.prependAvatar||e.prependIcon),M=!!(a.image||e.image),O=z||H||E,j=!!(a.text||e.text!=null);return ve(n(R,ke({class:["v-card",{"v-card--disabled":e.disabled,"v-card--flat":e.flat,"v-card--hover":e.hover&&!(e.disabled||e.flat),"v-card--link":v.value},b.value,r.value,g.value,u.value,T.value,B.value,L.value,N.value,C.value,e.class],style:[k.value,i.value,D.value,e.style],onClick:v.value&&o.navigate,tabindex:e.disabled?-1:void 0},o.linkProps),{default:()=>{var I;return[M&&n("div",{key:"image",class:"v-card__image"},[a.image?n(f,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},a.image):n(ye,{key:"image-img",cover:!0,src:e.image},null)]),n(be,{name:"v-card",active:!!e.loading,color:typeof e.loading=="boolean"?void 0:e.loading},{default:a.loader}),O&&n(Pe,{key:"item",prependAvatar:e.prependAvatar,prependIcon:e.prependIcon,title:e.title,subtitle:e.subtitle,appendAvatar:e.appendAvatar,appendIcon:e.appendIcon},{default:a.item,prepend:a.prepend,title:a.title,subtitle:a.subtitle,append:a.append}),j&&n(he,{key:"text"},{default:()=>{var p;return[((p=a.text)==null?void 0:p.call(a))??e.text]}}),(I=a.default)==null?void 0:I.call(a),a.actions&&n(fe,null,{default:a.actions}),ge(v.value,"v-card")]}}),[[me("ripple"),v.value&&e.ripple]])}),{}}});export{De as V,pe as a,fe as b,he as c,Ie as d};
