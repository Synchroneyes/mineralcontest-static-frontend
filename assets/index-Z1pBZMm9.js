import{a as _,V as d}from"./VContainer-DLe9O4u1.js";import{V as f,a as m}from"./VRow-DDGD2PrQ.js";import{V as p,a as V,b as g}from"./VCard-cyYrkiSt.js";import{d as c,r as h,o as B,a as s,c as l,w as a,b as o,g as C,F as x,i as L,f as w,t as y,j as k,h as v}from"./index-B-AnKxHY.js";const b=c({__name:"BlogList",setup(u){const t=h([]);return B(async()=>{try{const r=await _.getBlogList();t.value=r.data,t.value.forEach(e=>{e.slug=e.article_title.toLowerCase().replace(" ","-"),e.url=`/blog/${e.slug}`.replace(" ","-")}),console.log(t.value)}catch(r){console.error("Error fetching articles:",r)}}),(r,e)=>(s(),l(d,null,{default:a(()=>[o(f,null,{default:a(()=>[(s(!0),C(x,null,L(t.value,(n,i)=>(s(),l(m,{key:i,cols:"12",sm:"6",md:"4"},{default:a(()=>[o(p,{class:"ma-2"},{default:a(()=>[o(V,null,{default:a(()=>[w("h3",null,y(n.article_title),1)]),_:2},1024),o(g,null,{default:a(()=>[o(k,{href:n.url,color:"primary"},{default:a(()=>e[0]||(e[0]=[v(" Lire l'article ")])),_:2},1032,["href"])]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1}))}}),$=c({__name:"index",setup(u){return(t,r)=>{const e=b;return s(),l(e)}}});export{$ as default};