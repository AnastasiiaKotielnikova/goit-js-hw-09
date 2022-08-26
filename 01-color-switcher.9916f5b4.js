const t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]"),r=document.querySelector("body");function n(){return`#${Math.floor(16777215*Math.random()).toString(16)}`}let l=null;t.addEventListener("click",(()=>{l=setInterval((()=>{r.fillStyle=n}),1e3)})),e.addEventListener("click",(()=>{clearInterval(l)}));
//# sourceMappingURL=01-color-switcher.9916f5b4.js.map
