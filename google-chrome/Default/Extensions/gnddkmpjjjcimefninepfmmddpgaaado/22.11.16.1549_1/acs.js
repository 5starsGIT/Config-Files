

/*
------------------------------------------------------------------------
Copyright (C) Youmebee Limited / directprint.io 2022 All Rights Reserved
Unauthorized copying of this file, via any medium is strictly prohibited
Proprietary and confidential
Author: Youmebee Limited t/a directprint.io <help@directprint.io> 2022
------------------------------------------------------------------------

This software uses 3rd party libraries, please see LICENSES.TXT or the
'Software Licenses' link for details.

*/

(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
const url=new URL(window.location.href),jobID=url.searchParams.get("id"),codeString=url.searchParams.get("codes"),defaultCode=url.searchParams.get("default"),printerID=url.searchParams.get("printerID"),debug=require("./debugConsole"),storage=require("./storagePromise");function doCancel(){chrome.runtime.sendMessage({command:"cancelJob",jobID})}document.addEventListener("DOMContentLoaded",function(){document.getElementById("printAction").addEventListener("click",function(){!function(){debug("enter");const e=document.getElementById("code_select").value;e.length>0&&(debug("selected "+e),storage.local.set({[printerID+"_defaultAccCode"]:e}),debug("send message"),chrome.runtime.sendMessage({command:"accountingCodeSelected",jobID,accountingCode:e}),debug("done"),window.close())}()}),document.getElementById("cancelAction").addEventListener("click",function(){doCancel(),window.close()});const e=document.getElementById("basicOptionList");e.innerHTML="";const t=document.createElement("li");t.className="listItem";let n=void 0;if(0===codeString.length){const e=document.createElement("label");e.className="accounting-code-label",e.innerHTML="Enter an accounting code",t.appendChild(e),(n=document.createElement("input")).className="input-control",n.setAttribute("type","text"),n.id="code_select",defaultCode&&(n.value=defaultCode),n.onkeyup=(e=>{"Enter"!==e.key&&13!==e.keyCode||document.getElementById("printAction").click()})}else{const e=document.createElement("span");e.innerHTML="Select Accounting Code",t.appendChild(e),(n=document.createElement("select")).className="select",n.id="code_select";const d=codeString.split(",");for(var c=!1,o=0;o<d.length;o++)defaultCode===d[o]&&(c=!0);if(!1===c){const e=document.createElement("option");e.text="select code",e.value="",e.selected=!0,n.add(e)}for(o=0;o<d.length;o++){const e=document.createElement("option");e.text=d[o],e.value=d[o],defaultCode===d[o]&&(e.selected=!0),n.add(e)}}t.appendChild(n),e.appendChild(t),n.focus()});

},{"./debugConsole":2,"./storagePromise":3}],2:[function(require,module,exports){
(function (global){(function (){
var lastEvent=(new Date).getTime(),lastLines=[];module.exports=async function(){var e="["+Math.round((new Date).getTime()-lastEvent)+" ms]";if(lastEvent=(new Date).getTime(),0===arguments.length)return lastLines.reverse().join("\n");if("undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope)for(var t=0;t<arguments.length;t++)postMessage(["message",arguments[t]]),"object"!=typeof arguments[t]&&lastLines.unshift(e+" "+arguments[t]);else if("undefined"==typeof window){if(void 0===global.DEBUG||!0===global.DEBUG)for(t=0;t<arguments.length;t++)console.log(e,arguments[t]),"object"!=typeof arguments[t]&&lastLines.unshift(e+" "+arguments[t])}else if(void 0!==window.DEBUG&&!0===window.DEBUG)for(t=0;t<arguments.length;t++)console.log(e,arguments[t]),"object"!=typeof arguments[t]&&lastLines.unshift(e+" "+arguments[t]);lastLines.length>200&&(lastLines.length=200)};

}).call(this)}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}],3:[function(require,module,exports){
var storage=function(){var e={sync:{},local:{}};e.sync.set=function(e){return n(e,"sync")},e.sync.get=function(e){return r(e,"sync")},e.local.set=function(e){return n(e,"local")},e.local.get=function(e){return r(e,"local")},e.local.remove=function(e){return o(e,"local")},e.sync.remove=function(e){return o(e,"sync")};var o=function(e,o){return new Promise(function(n,r){"undefined"!=typeof chrome&&chrome.storage&&chrome.storage[o]?chrome.storage[o].remove(e,function(){n()}):(console.log("Stubbed storage remove"),n())})},n=function(e,o){return new Promise(function(n,r){"undefined"!=typeof chrome&&chrome.storage&&chrome.storage[o]?chrome.storage[o].set(e,function(){n()}):(console.log("Stubbed storage write"),n())})},r=function(e,o){return new Promise(function(n,r){"undefined"!=typeof chrome&&chrome.storage&&chrome.storage[o]?chrome.storage[o].get(e,function(e){n(e)}):(console.log("Stubbed storage ready"),n({}))})};return e}(),module=module||{};module.exports=storage;

},{}]},{},[1])
