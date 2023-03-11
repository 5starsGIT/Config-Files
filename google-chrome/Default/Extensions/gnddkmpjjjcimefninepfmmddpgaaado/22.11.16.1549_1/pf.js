

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
document.addEventListener("DOMContentLoaded",function(){document.getElementById("printAction").addEventListener("click",function(){chrome.runtime.sendMessage({command:"restartPolling"}),window.close()})});

},{}]},{},[1])
