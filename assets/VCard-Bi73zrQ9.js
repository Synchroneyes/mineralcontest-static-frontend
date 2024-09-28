import{E as i,v as s,N as q,S as c,e as n,q as y,B as f,bl as w,I as m,x,F as p,aJ as P,a5 as S,aH as V,s as J,an as Q,y as G,aK as U,bm as W,bn as X,z as Y,ax as Z,C as $,D as ee,a1 as ae,K as te,ay as ne,az as de,a7 as le,ao as ie,aA as se,aL as ce,bo as re,bp as ue,aB as oe,aE as ve,P as h,a3 as me,a4 as ye,f as be,aQ as ge,aF as ke,T as Ce}from"./index-CcvxvtiC.js";const Ve=i()({name:"VCardActions",props:s(),setup(e,d){let{slots:t}=d;return q({VBtn:{slim:!0,variant:"text"}}),c(()=>{var a;return n("div",{class:["v-card-actions",e.class],style:e.style},[(a=t.default)==null?void 0:a.call(t)])}),{}}}),fe=y({opacity:[Number,String],...s(),...f()},"VCardSubtitle"),Ie=i()({name:"VCardSubtitle",props:fe(),setup(e,d){let{slots:t}=d;return c(()=>n(e.tag,{class:["v-card-subtitle",e.class],style:[{"--v-card-subtitle-opacity":e.opacity},e.style]},t)),{}}}),Ae=w("v-card-title"),pe=y({appendAvatar:String,appendIcon:m,prependAvatar:String,prependIcon:m,subtitle:[String,Number],title:[String,Number],...s(),...x()},"VCardItem"),Pe=i()({name:"VCardItem",props:pe(),setup(e,d){let{slots:t}=d;return c(()=>{var u;const a=!!(e.prependAvatar||e.prependIcon),b=!!(a||t.prepend),r=!!(e.appendAvatar||e.appendIcon),g=!!(r||t.append),k=!!(e.title!=null||t.title),C=!!(e.subtitle!=null||t.subtitle);return n("div",{class:["v-card-item",e.class],style:e.style},[b&&n("div",{key:"prepend",class:"v-card-item__prepend"},[t.prepend?n(V,{key:"prepend-defaults",disabled:!a,defaults:{VAvatar:{density:e.density,image:e.prependAvatar},VIcon:{density:e.density,icon:e.prependIcon}}},t.prepend):n(p,null,[e.prependAvatar&&n(P,{key:"prepend-avatar",density:e.density,image:e.prependAvatar},null),e.prependIcon&&n(S,{key:"prepend-icon",density:e.density,icon:e.prependIcon},null)])]),n("div",{class:"v-card-item__content"},[k&&n(Ae,{key:"title"},{default:()=>{var l;return[((l=t.title)==null?void 0:l.call(t))??e.title]}}),C&&n(Ie,{key:"subtitle"},{default:()=>{var l;return[((l=t.subtitle)==null?void 0:l.call(t))??e.subtitle]}}),(u=t.default)==null?void 0:u.call(t)]),g&&n("div",{key:"append",class:"v-card-item__append"},[t.append?n(V,{key:"append-defaults",disabled:!r,defaults:{VAvatar:{density:e.density,image:e.appendAvatar},VIcon:{density:e.density,icon:e.appendIcon}}},t.append):n(p,null,[e.appendIcon&&n(S,{key:"append-icon",density:e.density,icon:e.appendIcon},null),e.appendAvatar&&n(P,{key:"append-avatar",density:e.density,image:e.appendAvatar},null)])])])}),{}}}),Se=y({opacity:[Number,String],...s(),...f()},"VCardText"),he=i()({name:"VCardText",props:Se(),setup(e,d){let{slots:t}=d;return c(()=>n(e.tag,{class:["v-card-text",e.class],style:[{"--v-card-text-opacity":e.opacity},e.style]},t)),{}}}),xe=y({appendAvatar:String,appendIcon:m,disabled:Boolean,flat:Boolean,hover:Boolean,image:String,link:{type:Boolean,default:void 0},prependAvatar:String,prependIcon:m,ripple:{type:[Boolean,Object],default:!0},subtitle:[String,Number],text:[String,Number],title:[String,Number],...J(),...s(),...x(),...Q(),...G(),...U(),...W(),...X(),...Y(),...Z(),...f(),...$(),...ee({variant:"elevated"})},"VCard"),Be=i()({name:"VCard",directives:{Ripple:ae},props:xe(),setup(e,d){let{attrs:t,slots:a}=d;const{themeClasses:b}=te(e),{borderClasses:r}=ne(e),{colorClasses:g,colorStyles:k,variantClasses:C}=de(e),{densityClasses:u}=le(e),{dimensionStyles:l}=ie(e),{elevationClasses:T}=se(e),{loaderClasses:B}=ce(e),{locationStyles:D}=re(e),{positionClasses:L}=ue(e),{roundedClasses:N}=oe(e),o=ve(e,t),_=h(()=>e.link!==!1&&o.isLink.value),v=h(()=>!e.disabled&&e.link!==!1&&(e.link||o.isClickable.value));return c(()=>{const F=_.value?"a":e.tag,R=!!(a.title||e.title!=null),E=!!(a.subtitle||e.subtitle!=null),z=R||E,H=!!(a.append||e.appendAvatar||e.appendIcon),K=!!(a.prepend||e.prependAvatar||e.prependIcon),M=!!(a.image||e.image),O=z||K||H,j=!!(a.text||e.text!=null);return me(n(F,Ce({class:["v-card",{"v-card--disabled":e.disabled,"v-card--flat":e.flat,"v-card--hover":e.hover&&!(e.disabled||e.flat),"v-card--link":v.value},b.value,r.value,g.value,u.value,T.value,B.value,L.value,N.value,C.value,e.class],style:[k.value,l.value,D.value,e.style],onClick:v.value&&o.navigate,tabindex:e.disabled?-1:void 0},o.linkProps),{default:()=>{var I;return[M&&n("div",{key:"image",class:"v-card__image"},[a.image?n(V,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},a.image):n(be,{key:"image-img",cover:!0,src:e.image},null)]),n(ge,{name:"v-card",active:!!e.loading,color:typeof e.loading=="boolean"?void 0:e.loading},{default:a.loader}),O&&n(Pe,{key:"item",prependAvatar:e.prependAvatar,prependIcon:e.prependIcon,title:e.title,subtitle:e.subtitle,appendAvatar:e.appendAvatar,appendIcon:e.appendIcon},{default:a.item,prepend:a.prepend,title:a.title,subtitle:a.subtitle,append:a.append}),j&&n(he,{key:"text"},{default:()=>{var A;return[((A=a.text)==null?void 0:A.call(a))??e.text]}}),(I=a.default)==null?void 0:I.call(a),a.actions&&n(Ve,null,{default:a.actions}),ke(v.value,"v-card")]}}),[[ye("ripple"),v.value&&e.ripple]])}),{}}});export{Be as V,Ae as a,Ve as b,he as c,Ie as d};
