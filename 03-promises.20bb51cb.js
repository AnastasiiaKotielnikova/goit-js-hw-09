var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},n={},t=e.parcelRequired7c6;null==t&&((t=function(e){if(e in o)return o[e].exports;if(e in n){var t=n[e];delete n[e];var r={id:e,exports:{}};return o[e]=r,t.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,o){n[e]=o},e.parcelRequired7c6=t);var r=t("iQIUW");const i=document.querySelector(".form");document.querySelector('[name = "delay"]'),document.querySelector('[name = "stop"]'),document.querySelector('[name = "amount"]');function l(e,o){Math.random()>.3?resolve({position:e,delay:o}):reject({position:e,delay:o})}i.addEventListener("submit",l),l(2,1500).then((({position:e,delay:o})=>{r.Notify.success(`✅ Fulfilled promise ${e} in ${o}ms`)})).catch((({position:e,delay:o})=>{r.Notify.failure(`❌ Rejected promise ${e} in ${o}ms`)}));
//# sourceMappingURL=03-promises.20bb51cb.js.map
