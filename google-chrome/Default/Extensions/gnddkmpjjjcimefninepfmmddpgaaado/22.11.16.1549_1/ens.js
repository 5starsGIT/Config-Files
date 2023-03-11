

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
(function (global){(function (){
var lastEvent=(new Date).getTime(),lastLines=[];module.exports=async function(){var e="["+Math.round((new Date).getTime()-lastEvent)+" ms]";if(lastEvent=(new Date).getTime(),0===arguments.length)return lastLines.reverse().join("\n");if("undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope)for(var t=0;t<arguments.length;t++)postMessage(["message",arguments[t]]),"object"!=typeof arguments[t]&&lastLines.unshift(e+" "+arguments[t]);else if("undefined"==typeof window){if(void 0===global.DEBUG||!0===global.DEBUG)for(t=0;t<arguments.length;t++)console.log(e,arguments[t]),"object"!=typeof arguments[t]&&lastLines.unshift(e+" "+arguments[t])}else if(void 0!==window.DEBUG&&!0===window.DEBUG)for(t=0;t<arguments.length;t++)console.log(e,arguments[t]),"object"!=typeof arguments[t]&&lastLines.unshift(e+" "+arguments[t]);lastLines.length>200&&(lastLines.length=200)};

}).call(this)}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}],2:[function(require,module,exports){
const url=new URL(window.location.href),nodesArray=JSON.parse(decodeURIComponent(url.searchParams.get("nodes"))),debug=require("./debugConsole"),storage=require("./storagePromise");document.addEventListener("DOMContentLoaded",function(){document.getElementById("printAction").addEventListener("click",function(){!function(){debug("enter");const e=document.getElementById("node_select").value;if(e.length>0){let n="";for(let t=0;t<nodesArray.length;t++)nodesArray[t].id===e&&(n=nodesArray[t].name);debug("selected id "+e+", name:"+n),storage.local.set({nodeSelection:{id:e,name:n}}),debug("send message"),chrome.runtime.sendMessage({command:"refreshPrinterList"}),debug("done"),window.close()}}()});const e=document.getElementById("basicOptionList");e.innerHTML="";const n=document.createElement("li");n.className="listItem";const t=document.createElement("span");t.innerHTML="Select Edge Node",n.appendChild(t);const d=document.createElement("select");d.className="select",d.id="node_select";for(let e=0;e<nodesArray.length;e++){const n=document.createElement("option");n.text=nodesArray[e].name,n.value=nodesArray[e].id,d.add(n)}n.appendChild(d),e.appendChild(n)});

},{"./debugConsole":1,"./storagePromise":3}],3:[function(require,module,exports){
var storage=function(){var e={sync:{},local:{}};e.sync.set=function(e){return n(e,"sync")},e.sync.get=function(e){return r(e,"sync")},e.local.set=function(e){return n(e,"local")},e.local.get=function(e){return r(e,"local")},e.local.remove=function(e){return o(e,"local")},e.sync.remove=function(e){return o(e,"sync")};var o=function(e,o){return new Promise(function(n,r){"undefined"!=typeof chrome&&chrome.storage&&chrome.storage[o]?chrome.storage[o].remove(e,function(){n()}):(console.log("Stubbed storage remove"),n())})},n=function(e,o){return new Promise(function(n,r){"undefined"!=typeof chrome&&chrome.storage&&chrome.storage[o]?chrome.storage[o].set(e,function(){n()}):(console.log("Stubbed storage write"),n())})},r=function(e,o){return new Promise(function(n,r){"undefined"!=typeof chrome&&chrome.storage&&chrome.storage[o]?chrome.storage[o].get(e,function(e){n(e)}):(console.log("Stubbed storage ready"),n({}))})};return e}(),module=module||{};module.exports=storage;

},{}]},{},[2])
