if(!self.define){let e,i={};const n=(n,o)=>(n=new URL(n+".js",o).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(o,r)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(i[c])return;let f={};const s=e=>n(e,c),d={module:{uri:c},exports:f,require:s};i[c]=Promise.all(o.map((e=>d[e]||s(e)))).then((e=>(r(...e),f)))}}define(["./workbox-3e911b1d"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-LmWEdWSa.js",revision:null},{url:"index.html",revision:"a364115df0f7d48ccbd9bcfae94ab557"},{url:"registerSW.js",revision:"6a9f1cc8f4c444788df7990274570bdc"},{url:"./favicon_io/android-chrome-192x192.png",revision:"3b768f5e4c7a8ec7b32e2b55ab78835f"},{url:"./favicon_io/android-chrome-512x512.png",revision:"4317d41933e76b2d701e7d7a2c573421"},{url:"favicon_io/apple-touch-icon.png",revision:"9740fa8aa91db2b704f030c8c1f1ebe4"},{url:"favicon_io/favicon-16x16.png",revision:"e28e7fee39d83159fef840257d45f156"},{url:"favicon_io/favicon-32x32.png",revision:"30c21bb817ca092ed13ca065c3026db1"},{url:"favicon_io/favicon.ico",revision:"20868a910277516ef0dde9832708d860"},{url:"manifest.webmanifest",revision:"8093b6c0f4628409ab7d978803ca8938"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
