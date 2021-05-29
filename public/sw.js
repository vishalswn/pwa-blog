//console.warn('sw from from public forlder');
let cacheData = "appV1"

this.addEventListener("install",(event)=>{
    event.waitUntil(
        caches.open(cacheData).then((cache)=>{
            cache.addAll([
                "/static/js/bundle.js",
                "/static/js/main.chunk.js",
                "/static/js/vendors~main.chunk.js",
                "/static/js/0.chunk.js",
                "/index.html",
                "/",
                "/users",

            ])
        })
    )
})
this.addEventListener("fetch",(event)=>{
   

        if(!navigator.onLine)
        {
            if(event.request.url==="http://localhost:3000/static/js/vendors~main.chunk.js"){
                event.waitUntil(this.registration.showNotification("Noti",{
                    body:"internet is not working",
                    icon:"https://www.pngjoy.com/pngm/826/9766605_react-logo-react-js-logo-svg-transparent-png.png"
                }));
            }
            event.respondWith(
                caches.match(event.request).then((result)=>{
                    if(result){
                        return result   
                     }
                     let requestUrl=event.request.clone();
                     return fetch(requestUrl);
                })
            )
        }
       
})