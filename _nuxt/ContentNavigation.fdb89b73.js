import{u}from"./asyncData.64b754c1.js";import{f as c,a5 as d,t as l,ac as f,ad as v,a6 as _,s as g,ae as y,l as p,J as h}from"./entry.a5bb9e8e.js";import"./ContentSlot.75999590.js";/* empty css                  *//* empty css                  *//* empty css                       *//* empty css                    *//* empty css                      *//* empty css                       *//* empty css                      *//* empty css                      *//* empty css                     *//* empty css                 *//* empty css                    *//* empty css                    *//* empty css                       *//* empty css                            *//* empty css                    *//* empty css                       *//* empty css                    *//* empty css                   *//* empty css                     *//* empty css                        *//* empty css                           *//* empty css                      *//* empty css                 *//* empty css                     *//* empty css                       *//* empty css                    *//* empty css                                     *//* empty css                                    *//* empty css                                *//* empty css                          *//* empty css                   *//* empty css                            *//* empty css                      *//* empty css                    *//* empty css                    *//* empty css                    *//* empty css                    *//* empty css                    *//* empty css                    *//* empty css                    *//* empty css                     *//* empty css                    *//* empty css                    *//* empty css                        *//* empty css                    *//* empty css                               *//* empty css                    */const _t=c({name:"ContentNavigation",props:{query:{type:Object,required:!1,default:void 0}},async setup(n){const{query:t}=d(n),r=l(()=>{var o;return typeof((o=t.value)==null?void 0:o.params)=="function"?t.value.params():t.value});if(!r.value&&f("dd-navigation").value){const{navigation:o}=v();return{navigation:o}}const{data:a}=await u(`content-navigation-${_(r.value)}`,()=>y(r.value));return{navigation:a}},render(n){const t=g(),{navigation:r}=n,a=i=>p(h,{to:i._path},()=>i.title),o=(i,m)=>p("ul",m?{"data-level":m}:null,i.map(e=>e.children?p("li",null,[a(e),o(e.children,m+1)]):p("li",null,a(e)))),s=i=>o(i,0);return t!=null&&t.default?t.default({navigation:r,...this.$attrs}):s(r)}});export{_t as default};
