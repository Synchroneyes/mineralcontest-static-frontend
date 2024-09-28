import{a as k,V as C}from"./VContainer-ZYgNhadV.js";import{d as g,r as v,o as B,a as h,c as z,w as t,b as e,V as N,e as A,f as o,_ as y,g as E,h as I}from"./index-7_zjMLdC.js";import{V as L,a as r}from"./VRow-DH1Q4fxz.js";import{V as a}from"./VCard-WNJvpPFS.js";import{V as l}from"./VOverlay-BrTRm-97.js";const M="/assets/mc_logo_front-CyQVr2a1.png",O=g({__name:"Homepage",setup(b){const p=v({plugins:{}}),i=v({file_url:""});B(async()=>{try{const n=await k.getFilesList();p.value=n.data;let s=p.value.plugins;i.value=c(s)}catch(n){console.error("Failed to fetch files:",n)}finally{}});function c(n){const w=Object.keys(n).sort((x,V)=>{const u=x.split(".").map(Number),m=V.split(".").map(Number);for(let d=0;d<Math.max(u.length,m.length);d++){const f=u[d]||0,_=m[d]||0;if(f!==_)return _-f}return 0})[0];return n[w]}return(n,s)=>(h(),z(C,{class:"fill-height",style:{position:"relative",overflow:"hidden"},width:"900"},{default:t(()=>[e(N,{class:"align-center fill-height mx-auto",style:{position:"relative","z-index":"1"}},{default:t(()=>[e(A,{class:"mb-4",height:"250",src:M}),s[0]||(s[0]=o("div",{class:"text-center"},[o("div",{class:"text-body-2 font-weight-light mb-n1"},"Bienvenue sur le site"),o("h1",{class:"text-h2 font-weight-bold text-white"},"Mineral Contest"),o("div",{class:"text-body-2 font-weight-light mb-n1"},"Par Synchroneyes")],-1)),s[1]||(s[1]=o("div",{class:"py-4"},null,-1)),e(L,null,{default:t(()=>[e(r,{cols:"12"},{default:t(()=>[e(a,{"prepend-icon":"mdi-rocket-launch-outline",class:"py-4",href:i.value.file_url,"append-icon":"mdi-download",rel:"noopener noreferrer",rounded:"lg",subtitle:"Cliquez ici et téléchargez simplement la dernière version du plugin.",title:"Un plugin gratuit et Open-Source",variant:"outlined"},{default:t(()=>[e(l,{opacity:".2",scrim:"primary-darken-1",contained:"","model-value":"",persistent:""})]),_:1},8,["href"])]),_:1}),e(r,{cols:"6"},{default:t(()=>[e(a,{"append-icon":"mdi-open-in-new",class:"py-4",href:"/blog","prepend-icon":"mdi-post",rel:"noopener noreferrer",rounded:"lg",subtitle:"Explorez la liste des cartes disponible.",title:"Blog",variant:"text"},{default:t(()=>[e(l,{opacity:".2",scrim:"warning",contained:"","model-value":"",persistent:""})]),_:1})]),_:1}),e(r,{cols:"6"},{default:t(()=>[e(a,{"append-icon":"mdi-open-in-new",class:"py-4",href:"/maps","prepend-icon":"mdi-map",rel:"noopener noreferrer",rounded:"lg",subtitle:"Explorez la liste des cartes disponible.",title:"Cartes",variant:"text"},{default:t(()=>[e(l,{opacity:".2",scrim:"primary-darken-1",contained:"","model-value":"",persistent:""})]),_:1})]),_:1}),e(r,{cols:"6"},{default:t(()=>[e(a,{"append-icon":"mdi-open-in-new",class:"py-4",href:"/files","prepend-icon":"mdi-widgets-outline",rel:"noopener noreferrer",rounded:"lg",subtitle:"Téléchargez la version qui vous convient.",title:"Plugins",variant:"text"},{default:t(()=>[e(l,{opacity:".2",scrim:"primary-darken-1",contained:"","model-value":"",persistent:""})]),_:1})]),_:1}),e(r,{cols:"6"},{default:t(()=>[e(a,{"append-icon":"mdi-open-in-new",class:"py-4",href:"https://discord.vuetifyjs.com","prepend-icon":"mdi-account-group-outline",rel:"noopener noreferrer",rounded:"lg",subtitle:"La communauté est active sur Discord.",target:"_blank",title:"Communauté",variant:"text"},{default:t(()=>[e(l,{opacity:".2",scrim:"warning",contained:"","model-value":"",persistent:""})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}))}}),R=y(O,[["__scopeId","data-v-8c04e508"]]),S="/assets/background-video-DdR-ASyw.webm",j={style:{position:"relative",overflow:"hidden","min-height":"100vh"}},q={style:{position:"relative"}},D=g({__name:"index",setup(b){return(p,i)=>{const c=R;return h(),E("div",j,[i[0]||(i[0]=o("video",{autoplay:"",muted:"",loop:"",playsinline:"",class:"background-video"},[o("source",{src:S,type:"video/mp4"}),I(" Your browser does not support the video tag. ")],-1)),o("div",q,[e(c)])])}}}),U=y(D,[["__scopeId","data-v-681a4535"]]);export{U as default};