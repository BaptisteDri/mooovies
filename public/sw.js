if(!self.define){let e,s={};const n=(n,a)=>(n=new URL(n+".js",a).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(a,i)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let _={};const c=e=>n(e,r),o={module:{uri:r},exports:_,require:c};s[r]=Promise.all(a.map((e=>o[e]||c(e)))).then((e=>(i(...e),_)))}}define(["./workbox-50de5c5d"],(function(e){"use strict";importScripts("fallback-2JWaytr4GkK9oibzXzHEQ.js"),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/2JWaytr4GkK9oibzXzHEQ/_buildManifest.js",revision:"cb4ab032d2426060549ced0a0ea18184"},{url:"/_next/static/2JWaytr4GkK9oibzXzHEQ/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/180-595f699d2379fdc9.js",revision:"595f699d2379fdc9"},{url:"/_next/static/chunks/483-dbfa741c9d05c1e8.js",revision:"dbfa741c9d05c1e8"},{url:"/_next/static/chunks/943-1f713e1dccc18266.js",revision:"1f713e1dccc18266"},{url:"/_next/static/chunks/framework-63157d71ad419e09.js",revision:"63157d71ad419e09"},{url:"/_next/static/chunks/main-ad054197275b11d2.js",revision:"ad054197275b11d2"},{url:"/_next/static/chunks/pages/_app-b5c4d6504a1abe35.js",revision:"b5c4d6504a1abe35"},{url:"/_next/static/chunks/pages/_error-54de1933a164a1ff.js",revision:"54de1933a164a1ff"},{url:"/_next/static/chunks/pages/_offline-32aef570bd755cb9.js",revision:"32aef570bd755cb9"},{url:"/_next/static/chunks/pages/add-movie-58f4ef217ed0f06c.js",revision:"58f4ef217ed0f06c"},{url:"/_next/static/chunks/pages/index-9ea693986c785dca.js",revision:"9ea693986c785dca"},{url:"/_next/static/chunks/pages/movie/%5Bid%5D-590f077d5345c79a.js",revision:"590f077d5345c79a"},{url:"/_next/static/chunks/pages/movies/%5BuserId%5D-29ca7f1b038d0c7c.js",revision:"29ca7f1b038d0c7c"},{url:"/_next/static/chunks/pages/settings-d09d5c3edea1b49c.js",revision:"d09d5c3edea1b49c"},{url:"/_next/static/chunks/pages/sign-in-8bdcece765fe8f3f.js",revision:"8bdcece765fe8f3f"},{url:"/_next/static/chunks/pages/sign-up-818bab261fd37df7.js",revision:"818bab261fd37df7"},{url:"/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js",revision:"79330112775102f91e1010318bae2bd3"},{url:"/_next/static/chunks/webpack-6ef43a8d4a395f49.js",revision:"6ef43a8d4a395f49"},{url:"/_next/static/css/d52dd02ee28a475e.css",revision:"d52dd02ee28a475e"},{url:"/_offline",revision:"2JWaytr4GkK9oibzXzHEQ"},{url:"/favicons/apple-touch-icon.png",revision:"1490a56c92316853f8de512438af1725"},{url:"/favicons/favicon-16x16.png",revision:"a3400a2da824fdafa04670128beaccc6"},{url:"/favicons/favicon-32x32.png",revision:"2f595eb995501c30c28b59f87d562177"},{url:"/favicons/favicon.ico",revision:"41559b04ff5232d896d7f8343e9732f4"},{url:"/manifest.json",revision:"e88a11d85daf4e91501ce511de889e02"},{url:"/mooovies_logo.svg",revision:"78346033954824d9fadf27c09e270dfe"},{url:"/splash_screens/10.2__iPad_landscape.png",revision:"da780142510c845460fa40c6caed5ae3"},{url:"/splash_screens/10.2__iPad_portrait.png",revision:"7234546c50ba32fe75156cb069880f84"},{url:"/splash_screens/10.5__iPad_Air_landscape.png",revision:"d7213c9259aec5285ae3f4468edef711"},{url:"/splash_screens/10.5__iPad_Air_portrait.png",revision:"0a1d389676841285f28c952f0c8c8005"},{url:"/splash_screens/10.9__iPad_Air_landscape.png",revision:"91bf175f5be44e9eec0c290f6c4b9dfb"},{url:"/splash_screens/10.9__iPad_Air_portrait.png",revision:"12e2d8c9a420d7a67679d88b4f3edef7"},{url:"/splash_screens/11__iPad_Pro__10.5__iPad_Pro_landscape.png",revision:"19ad055b27907cf4ddcc0c0009d09cfa"},{url:"/splash_screens/11__iPad_Pro__10.5__iPad_Pro_portrait.png",revision:"6c0d55677bd9283b40c7eb19b1e6ac16"},{url:"/splash_screens/12.9__iPad_Pro_landscape.png",revision:"6db59905ada068c1fa826a102fca823a"},{url:"/splash_screens/12.9__iPad_Pro_portrait.png",revision:"78086f7e9b1dc80476a2e5fdb7fca20b"},{url:"/splash_screens/4__iPhone_SE__iPod_touch_5th_generation_and_later_landscape.png",revision:"8e3b2709c14bf49927cc4c4df345d934"},{url:"/splash_screens/4__iPhone_SE__iPod_touch_5th_generation_and_later_portrait.png",revision:"61965da01147f99b7de52441fc7d885b"},{url:"/splash_screens/8.3__iPad_Mini_landscape.png",revision:"d745508a2c05c7bdee588d208ac49738"},{url:"/splash_screens/8.3__iPad_Mini_portrait.png",revision:"442e5368b98801c79bc612530c3e08c8"},{url:"/splash_screens/9.7__iPad_Pro__7.9__iPad_mini__9.7__iPad_Air__9.7__iPad_landscape.png",revision:"45002eaa183f8536048ce167b1e7cd97"},{url:"/splash_screens/9.7__iPad_Pro__7.9__iPad_mini__9.7__iPad_Air__9.7__iPad_portrait.png",revision:"b6ef4b515889b7481c9c61e7126d57d9"},{url:"/splash_screens/iPhone_11_Pro_Max__iPhone_XS_Max_landscape.png",revision:"ec6ec3b20e8120d9a7b74f4114bad551"},{url:"/splash_screens/iPhone_11_Pro_Max__iPhone_XS_Max_portrait.png",revision:"e1ca0af84bba6063b33da43270638c31"},{url:"/splash_screens/iPhone_11__iPhone_XR_landscape.png",revision:"a9c5ac191529c457848c876f8e8e6696"},{url:"/splash_screens/iPhone_11__iPhone_XR_portrait.png",revision:"e256f4cc7c50cd8d059c73021c299096"},{url:"/splash_screens/iPhone_13_mini__iPhone_12_mini__iPhone_11_Pro__iPhone_XS__iPhone_X_landscape.png",revision:"9900fdb911e9c60838db329ea20fec52"},{url:"/splash_screens/iPhone_13_mini__iPhone_12_mini__iPhone_11_Pro__iPhone_XS__iPhone_X_portrait.png",revision:"fe0e119287a5745690b9aa5324b52957"},{url:"/splash_screens/iPhone_14_Plus__iPhone_13_Pro_Max__iPhone_12_Pro_Max_landscape.png",revision:"134ba1e1d0aea38d2e7b193da5d0b045"},{url:"/splash_screens/iPhone_14_Plus__iPhone_13_Pro_Max__iPhone_12_Pro_Max_portrait.png",revision:"21cc0befcd71ecda5e1b1383c80b7c40"},{url:"/splash_screens/iPhone_14_Pro_Max_landscape.png",revision:"948d55052f9a4b6db98fbc6766b4358a"},{url:"/splash_screens/iPhone_14_Pro_Max_portrait.png",revision:"9d3d304060c3138e04f98f525dd86717"},{url:"/splash_screens/iPhone_14_Pro_landscape.png",revision:"0ce8877cccc40576b5adf6592e3f6c1b"},{url:"/splash_screens/iPhone_14_Pro_portrait.png",revision:"42d382242429e59d3bb4ff673fe65e03"},{url:"/splash_screens/iPhone_14__iPhone_13_Pro__iPhone_13__iPhone_12_Pro__iPhone_12_landscape.png",revision:"f8a160cd15fc7f6f358560958b7f84df"},{url:"/splash_screens/iPhone_14__iPhone_13_Pro__iPhone_13__iPhone_12_Pro__iPhone_12_portrait.png",revision:"029ded2a5d152287803efaa8a169ec89"},{url:"/splash_screens/iPhone_8_Plus__iPhone_7_Plus__iPhone_6s_Plus__iPhone_6_Plus_landscape.png",revision:"b88303c8eac2635e7a834a06b8794cdf"},{url:"/splash_screens/iPhone_8_Plus__iPhone_7_Plus__iPhone_6s_Plus__iPhone_6_Plus_portrait.png",revision:"1a6aecee14c287f8ac831e6a01f7d71f"},{url:"/splash_screens/iPhone_8__iPhone_7__iPhone_6s__iPhone_6__4.7__iPhone_SE_landscape.png",revision:"884e06ca282355de330545adbc579d1a"},{url:"/splash_screens/iPhone_8__iPhone_7__iPhone_6s__iPhone_6__4.7__iPhone_SE_portrait.png",revision:"87465411fcceaaf7fe97a57240fce305"},{url:"/splash_screens/icon.png",revision:"38b67ed51fe27edb5a39a0bdcdd09435"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:n,state:a})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s},{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET")}));
