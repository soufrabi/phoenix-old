if(!self.define){let e,i={};const s=(s,n)=>(s=new URL(s+".js",n).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(n,r)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(i[t])return;let o={};const d=e=>s(e,t),c={module:{uri:t},exports:o,require:d};i[t]=Promise.all(n.map((e=>c[e]||d(e)))).then((e=>(r(...e),o)))}}define(["./workbox-3e911b1d"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-cVFFuW0m.js",revision:null},{url:"assets/index-pHacF2_s.css",revision:null},{url:"index.html",revision:"7e4f9d14e487f5f0e6c3addc18ed7b8e"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"pwa-192x192.png",revision:"26528f74f63ba5ddbc6c2146c3078782"},{url:"pwa-512x512.png",revision:"8ce845de0948b5556d127047c2687ba3"},{url:"manifest.webmanifest",revision:"3b51a0700d2bf97e892933dc038e2340"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
