import{f as _,r as l,Z as k,o as s,b as p,h as y,e as C,p as w,c as f,u as m,a0 as S,i as h,j as b,G as $,H as x,a as v,C as I,A as P,k as z}from"./entry.a5bb9e8e.js";import{u as A,o as N}from"./index.d33757fe.js";/* empty css                      */const V=e=>($("data-v-75636234"),e=e(),x(),e),M=V(()=>y("span",{class:"sr-only"},"Copy to clipboard",-1)),R={class:"icon-wrapper"},T=_({__name:"ProseCodeCopyButton",props:{content:{type:String,default:""},show:{type:Boolean,default:!1}},setup(e){const n=e,a=l(),{copy:t}=A();N(a,()=>{o.value==="copied"&&(o.value="init")});const{prose:c}=k(),o=l("init"),g=B=>{t(n.content).then(()=>{o.value="copied"}).catch(i=>{console.warn("Couldn't copy to clipboard!",i)})};return(B,i)=>{const r=b;return s(),p("button",{ref_key:"copyButtonRef",ref:a,class:h([(e.show||o.value==="copied")&&"show"]),onClick:g},[M,y("span",R,[C(S,{name:"fade"},{default:w(()=>{var u,d;return[o.value==="copied"?(s(),f(r,{key:0,name:(u=m(c).copyButton)==null?void 0:u.iconCopied,size:"18",class:"copied"},null,8,["name"])):(s(),f(r,{key:1,name:(d=m(c).copyButton)==null?void 0:d.iconCopy,size:"18"},null,8,["name"]))]}),_:1})])],2)}}}),j=v(T,[["__scopeId","data-v-75636234"]]),D={key:0,class:"filename"},E=_({__name:"ProseCode",props:{code:{type:String,default:""},language:{type:String,default:null},filename:{type:String,default:null},highlights:{type:Array,default:()=>[]}},setup(e){const n=l(!1);return(a,t)=>{const c=j;return s(),p("div",{class:h([[`highlight-${e.language}`],"prose-code"]),onMouseenter:t[0]||(t[0]=o=>n.value=!0),onMouseleave:t[1]||(t[1]=o=>n.value=!1)},[e.filename?(s(),p("span",D,I(e.filename),1)):P("",!0),z(a.$slots,"default",{},void 0,!0),C(c,{show:n.value,content:e.code,class:"copy-button"},null,8,["show","content"])],34)}}}),Z=v(E,[["__scopeId","data-v-bfc7416e"]]);export{Z as default};
