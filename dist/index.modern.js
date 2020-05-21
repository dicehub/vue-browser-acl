import e from"browser-acl";const t=[HTMLButtonElement,HTMLFieldSetElement,HTMLInputElement,HTMLOptGroupElement,HTMLOptionElement,HTMLSelectElement,HTMLTextAreaElement],o=[HTMLInputElement,HTMLTextAreaElement];export default class{install(r,n,a,i={}){const l="function"==typeof n?n:()=>n,s=Boolean(i.strict),c=Object.assign({acl:{strict:s},aliases:["role"],assumeGlobal:!s,caseMode:!0,debug:!1,directive:"can",failRoute:"/",helper:!0,strict:!1},i),u=(e=>t=>[e.directive,...e.aliases||[]].map(e=>t[e]).filter(Boolean).shift())(c);let m=new e(c.acl);"function"==typeof a?a(m):a instanceof e&&(m=a),m.router=function(t){c.router=t;const o=(e,t,...o)=>t&&m.can(l(),e,t,...o)||!t&&!c.strict;t.beforeEach((t,r,n)=>{const a=((t,r,n)=>{let a=null;const i=t.reduce((t,i)=>t.then(t=>{if(!0!==t)return t;"string"==typeof i.fail&&(a=i.fail);const l=u(i),s="function"==typeof l?l(r,n,o):Promise.resolve(o(...(t=>{const[o,r=(c.assumeGlobal?e.GlobalRule:null)]=t.split(" ");return[o,r]})(l)));if(c.strict&&!(s instanceof Promise))throw new Error("$route.meta.can must return a promise in strict mode");return s}).catch(e=>(c.debug&&console.error(e),!1)),Promise.resolve(!0));return i.getFail=()=>a,i})(t.matched.filter(e=>e.meta&&u(e.meta)).map(e=>e.meta),t,r);a.then(e=>{if(!0===e)return n();let o=a.getFail()||c.failRoute;"$from"===o&&(o=r.path),n("function"==typeof o?o(t,r):o)})})},c.router&&m.router(c.router);const d=function(r,n,a){const i=void 0!==(s=n.modifiers).disable?"disable":void 0!==s.readonly?"readonly":"hide";var s;let u,d,f,p;if(d=n.arg,Array.isArray(n.value)&&n.expression.startsWith("[")?[u,f,p]=n.modifiers.global?(({arg:t,value:o})=>[t||o[0],e.GlobalRule,t?o:o.slice(1)])(n):(({arg:e,value:t})=>[e||t[0],e?t[0]:t[1],t.slice(e?1:2)])(n):"string"==typeof n.value?[u,f,p]=(({arg:e,value:t,modifiers:o},r,n)=>{let[a,i]=e?[e,t]:t.split(" ");if(i&&o.global)throw new Error("You cannot provide subject and use global modifier at the same time");return"string"==typeof i&&n.caseMode&&i[0].match(/[a-z]/)&&"object"==typeof r.context&&(i=r.context.$data[i]),[a,i,[]]})(n,a,c):d&&"object"==typeof n.value?(u=d,f=n.value,p=[]):void 0===n.value&&!n.modifiers.global&&c.assumeGlobal&&(u=d,f=e.GlobalRule,p=[]),c.assumeGlobal&&!f&&(f=e.GlobalRule,p=p||[],u=u||d),!u||!f)throw new Error("Missing verb or subject");const b=m[(n.modifiers.some?"some":n.modifiers.every&&"every")||"can"](l(),u,f,...p),v=n.modifiers.not,y=function(e){return!!t.some(t=>e instanceof t)&&e}(r),h=function(e){return!!o.some(t=>e instanceof t)&&e}(r);y&&(y.disabled=!1),h&&(h.readOnly=!1),(b&&v||!b&&!v)&&("hide"===i?function(e,t){const o=document.createComment(" ");Object.defineProperty(o,"setAttribute",{value:()=>{}}),t.text=" ",t.elm=o,t.isComment=!0,t.tag=void 0,t.data=t.data||{},t.data.directives=void 0,t.componentInstance&&(t.componentInstance.$el=o),e.parentNode&&e.parentNode.replaceChild(o,e)}(r,a):"disable"===i&&y?y.disabled=!0:"readonly"===i&&h&&(h.readOnly=!0))};if([c.directive,...c.aliases].forEach(e=>r.directive(e,d)),c.helper){const e="$"+c.directive;r.prototype[e]=function(e,t,...o){return m.can(l(),e,t,...o)},r.prototype[e].not=function(e,t,...o){return!m.can(l(),e,t,...o)},r.prototype[e].every=function(e,t,...o){return m.every(l(),e,t,...o)},r.prototype[e].some=function(e,t,...o){return m.some(l(),e,t,...o)}}}}
//# sourceMappingURL=index.modern.js.map