if(!self.define){let e,r={};const s=(s,t)=>(s=new URL(s+".js",t).href,r[s]||new Promise((r=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=r,document.head.appendChild(e)}else e=s,importScripts(s),r()})).then((()=>{let e=r[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(t,i)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(r[n])return;let o={};const c=e=>s(e,n),l={module:{uri:n},exports:o,require:c};r[n]=Promise.all(t.map((e=>l[e]||c(e)))).then((e=>(i(...e),o)))}}define(["./workbox-db5fc017"],(function(e){"use strict";e.setCacheNameDetails({prefix:"smart-expert"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/smart-expert/css/about.370f75bc.css",revision:null},{url:"/smart-expert/css/app.908092ef.css",revision:null},{url:"/smart-expert/index.html",revision:"fca179ac2db3dc6122ef00c057657d77"},{url:"/smart-expert/js/about.a936f932.js",revision:null},{url:"/smart-expert/js/app.47ca0019.js",revision:null},{url:"/smart-expert/js/chunk-vendors.0a5e72c3.js",revision:null},{url:"/smart-expert/manifest.json",revision:"7e58372a2eb90ea35504e465e98d9fee"},{url:"/smart-expert/mockServiceWorker.js",revision:"f821317ac4a90df41ec5ca84c86b1e4c"},{url:"/smart-expert/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
