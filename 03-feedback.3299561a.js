!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},r=e.parcelRequire4c75;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in o){var r=o[e];delete o[e];var n={id:e,exports:{}};return t[e]=n,r.call(n.exports,n,n.exports),n.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){o[e]=t},e.parcelRequire4c75=r);var n=r("1WSnx");const a=document.querySelector(".feedback-form"),l="feedback-form-state",{elements:{email:s,message:i}}=a;!function(){try{const e=localStorage.getItem(l),t=JSON.parse(e);console.log(t),s.value=t.email||"",i.value=t.message||""}catch(e){console.log("Get error state",e.message)}}(),a.addEventListener("input",(0,n.throttle)((e=>{let t=localStorage.getItem(l);t=JSON.parse(t)||{},t[e.target.name]=e.target.value,console.log(t),localStorage.setItem(l,JSON.stringify(t))}),500)),a.addEventListener("submit",(function(e){e.preventDefault(),console.log(JSON.parse(localStorage.getItem(l))),localStorage.removeItem(l),e.currentTarget.reset()}))}();
//# sourceMappingURL=03-feedback.3299561a.js.map
