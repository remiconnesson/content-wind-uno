import{S as v,r as m,T as P,U as x,V as D,N as w,u as b,W as C,M as O}from"./entry.a5bb9e8e.js";const k=()=>null;function A(...s){var p;const l=typeof s[s.length-1]=="string"?s.pop():void 0;typeof s[0]!="string"&&s.unshift(l);let[t,u,e={}]=s;if(typeof t!="string")throw new TypeError("[nuxt] [asyncData] key must be a string.");if(typeof u!="function")throw new TypeError("[nuxt] [asyncData] handler must be a function.");e.server=e.server??!0,e.default=e.default??k,e.lazy=e.lazy??!1,e.immediate=e.immediate??!0;const a=v(),f=()=>a.isHydrating?a.payload.data[t]:a.static.data[t],d=()=>f()!==void 0;a._asyncData[t]||(a._asyncData[t]={data:m(f()??((p=e.default)==null?void 0:p.call(e))??null),pending:m(!d()),error:P(a.payload._errors,t)});const r={...a._asyncData[t]};r.refresh=r.execute=(i={})=>{if(a._asyncDataPromises[t]){if(i.dedupe===!1)return a._asyncDataPromises[t];a._asyncDataPromises[t].cancelled=!0}if(i._initial&&d())return f();r.pending.value=!0;const c=new Promise((n,o)=>{try{n(u(a))}catch(g){o(g)}}).then(n=>{if(c.cancelled)return a._asyncDataPromises[t];let o=n;e.transform&&(o=e.transform(n)),e.pick&&(o=M(o,e.pick)),r.data.value=o,r.error.value=null}).catch(n=>{var o;if(c.cancelled)return a._asyncDataPromises[t];r.error.value=n,r.data.value=b(((o=e.default)==null?void 0:o.call(e))??null)}).finally(()=>{c.cancelled||(r.pending.value=!1,a.payload.data[t]=r.data.value,r.error.value&&(a.payload._errors[t]=C(r.error.value)),delete a._asyncDataPromises[t])});return a._asyncDataPromises[t]=c,a._asyncDataPromises[t]};const y=()=>r.refresh({_initial:!0}),_=e.server!==!1&&a.payload.serverRendered;{const i=O();if(i&&!i._nuxtOnBeforeMountCbs){i._nuxtOnBeforeMountCbs=[];const n=i._nuxtOnBeforeMountCbs;i&&(x(()=>{n.forEach(o=>{o()}),n.splice(0,n.length)}),D(()=>n.splice(0,n.length)))}_&&a.isHydrating&&d()?r.pending.value=!1:i&&(a.payload.serverRendered&&a.isHydrating||e.lazy)&&e.immediate?i._nuxtOnBeforeMountCbs.push(y):e.immediate&&y(),e.watch&&w(e.watch,()=>r.refresh());const c=a.hook("app:data:refresh",n=>{if(!n||n.includes(t))return r.refresh()});i&&D(c)}const h=Promise.resolve(a._asyncDataPromises[t]).then(()=>r);return Object.assign(h,r),h}async function E(s){const l=s?Array.isArray(s)?s:[s]:void 0;await v().hooks.callHookParallel("app:data:refresh",l)}function M(s,l){const t={};for(const u of l)t[u]=s[u];return t}export{E as r,A as u};
