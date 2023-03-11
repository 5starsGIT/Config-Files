

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
(function (Buffer){(function (){
!function(){var t={};!function(t){var r=function(){return r.cache.hasOwnProperty(arguments[0])||(r.cache[arguments[0]]=r.parse(arguments[0])),r.format.call(null,r.cache[arguments[0]],arguments)};r.format=function(t,n){var o,a,u,s,f,b,h,w=1,p=t.length,c="",l=[];for(a=0;a<p;a++)if("string"===(c=e(t[a])))l.push(t[a]);else if("array"===c){if((s=t[a])[2])for(o=n[w],u=0;u<s[2].length;u++){if(!o.hasOwnProperty(s[2][u]))throw r('[sprintf] property "%s" does not exist',s[2][u]);o=o[s[2][u]]}else o=s[1]?n[s[1]]:n[w++];if(/[^s]/.test(s[8])&&"number"!=e(o))throw r("[sprintf] expecting number but found %s",e(o));switch(s[8]){case"b":o=o.toString(2);break;case"c":o=String.fromCharCode(o);break;case"d":o=parseInt(o,10);break;case"e":o=s[7]?o.toExponential(s[7]):o.toExponential();break;case"f":o=s[7]?parseFloat(o).toFixed(s[7]):parseFloat(o);break;case"o":o=o.toString(8);break;case"s":o=(o=String(o))&&s[7]?o.substring(0,s[7]):o;break;case"u":o>>>=0;break;case"x":o=o.toString(16);break;case"X":o=o.toString(16).toUpperCase()}o=/[def]/.test(s[8])&&s[3]&&o>=0?"+"+o:o,b=s[4]?"0"==s[4]?"0":s[4].charAt(1):" ",h=s[6]-String(o).length,f=s[6]?i(b,h):"",l.push(s[5]?o+f:f+o)}return l.join("")},r.cache={},r.parse=function(t){for(var r=t,e=[],i=[],n=0;r;){if(null!==(e=/^[^\x25]+/.exec(r)))i.push(e[0]);else if(null!==(e=/^\x25{2}/.exec(r)))i.push("%");else{if(null===(e=/^\x25(?:([1-9]\d*)\$|\(([^\)]+)\))?(\+)?(0|'[^$])?(-)?(\d+)?(?:\.(\d+))?([b-fosuxX])/.exec(r)))throw"[sprintf] huh?";if(e[2]){n|=1;var o=[],a=e[2],u=[];if(null===(u=/^([a-z_][a-z_\d]*)/i.exec(a)))throw"[sprintf] huh?";for(o.push(u[1]);""!==(a=a.substring(u[0].length));)if(null!==(u=/^\.([a-z_][a-z_\d]*)/i.exec(a)))o.push(u[1]);else{if(null===(u=/^\[(\d+)\]/.exec(a)))throw"[sprintf] huh?";o.push(u[1])}e[2]=o}else n|=2;if(3===n)throw"[sprintf] mixing positional and named placeholders is not (yet) supported";i.push(e)}r=r.substring(e[0].length)}return i};function e(t){return Object.prototype.toString.call(t).slice(8,-1).toLowerCase()}function i(t,r){for(var e=[];r>0;e[--r]=t);return e.join("")}t.sprintf=r,t.vsprintf=function(t,e,i){return(i=e.slice(0)).splice(0,0,t),r.apply(null,i)}}(t);var r=t.sprintf,e=!0;function i(t){e||("undefined"!=typeof importScripts?postMessage({log:t,reason:"log"}):"undefined"!=typeof console&&console.log(t))}function n(){var t=this,r=1024,e=new Uint8Array(r),i=0,n=0,o=0,a=0;function u(){f&&f.write(e,0,i),a+=i,i=0}function s(){do{i>=r&&u();var t=o>>24&255;255!=t?(e[i++]=t,o<<=8,n-=8):(o&=16777215,e[i++]=255)}while(n>=8)}var f,b=function(){h(),n>=8&&(s(),u())},h=function(){t.putbits(255,32-n&7)};this.getWrittenBytes=function(){return a},this.end=function(){u()},this.putbits=function(t,r){n>16&&s(),function(t,r){o|=(t&(1<<r)-1)<<32-n-r,n+=r}(t,r)},this.align=function(){h()},this.setByteWriter=function(t){f=t},this.putshort=function(t){b(),e[i++]=(65535&t)>>>8,e[i++]=255&t},this.putbyte=function(t){b(),e[i++]=t}}var o=new Uint32Array([0,0,1,5,1,1,1,1,1,1,0,0,0,0,0,0,0]),a=new Uint32Array([0,1,2,3,4,5,6,7,8,9,10,11]),u=new Uint32Array([0,0,2,1,3,3,2,4,3,5,5,4,4,0,0,1,125]),s=new Uint32Array([1,2,3,0,4,17,5,18,33,49,65,6,19,81,97,7,34,113,20,50,129,145,161,8,35,66,177,193,21,82,209,240,36,51,98,114,130,9,10,22,23,24,25,26,37,38,39,40,41,42,52,53,54,55,56,57,58,67,68,69,70,71,72,73,74,83,84,85,86,87,88,89,90,99,100,101,102,103,104,105,106,115,116,117,118,119,120,121,122,131,132,133,134,135,136,137,138,146,147,148,149,150,151,152,153,154,162,163,164,165,166,167,168,169,170,178,179,180,181,182,183,184,185,186,194,195,196,197,198,199,200,201,202,210,211,212,213,214,215,216,217,218,225,226,227,228,229,230,231,232,233,234,241,242,243,244,245,246,247,248,249,250]),f=new Uint32Array([0,0,3,1,1,1,1,1,1,1,1,1,0,0,0,0,0]),b=new Uint32Array([0,1,2,3,4,5,6,7,8,9,10,11]),h=new Uint32Array([0,0,2,1,2,4,4,3,4,7,5,4,4,0,1,2,119]),w=new Uint32Array([0,1,2,3,17,4,5,33,49,6,18,65,81,7,97,113,19,34,50,129,8,20,66,145,161,177,193,9,35,51,82,240,21,98,114,209,10,22,36,52,225,37,241,23,24,25,26,38,39,40,41,42,53,54,55,56,57,58,67,68,69,70,71,72,73,74,83,84,85,86,87,88,89,90,99,100,101,102,103,104,105,106,115,116,117,118,119,120,121,122,130,131,132,133,134,135,136,137,138,146,147,148,149,150,151,152,153,154,162,163,164,165,166,167,168,169,170,178,179,180,181,182,183,184,185,186,194,195,196,197,198,199,200,201,202,210,211,212,213,214,215,216,217,218,226,227,228,229,230,231,232,233,234,242,243,244,245,246,247,248,249,250]),p=new Uint32Array([0,1,8,16,9,2,3,10,17,24,32,25,18,11,4,5,12,19,26,33,40,48,41,34,27,20,13,6,7,14,21,28,35,42,49,56,57,50,43,36,29,22,15,23,30,37,44,51,58,59,52,45,38,31,39,46,53,60,61,54,47,55,62,63,63,63,63,63,63,63,63,63,63,63,63,63,63,63,63,63]),c=new Uint32Array([0,1,5,6,14,15,27,28,2,4,7,13,16,26,29,42,3,8,12,17,25,30,41,43,9,11,18,24,31,40,44,53,10,19,23,32,39,45,52,54,20,22,33,38,46,51,55,60,21,34,37,47,50,56,59,61,35,36,48,49,57,58,62,63]),l=new Float64Array([1,1.387039845,1.306562965,1.175875602,1,.785694958,.5411961,.275899379]),y=new Uint32Array([16,11,10,16,24,40,51,61,12,12,14,19,26,58,60,55,14,13,16,24,40,57,69,56,14,17,22,29,51,87,80,62,18,22,37,56,68,109,103,77,24,35,55,64,81,104,113,92,49,64,78,87,103,121,120,101,72,92,95,98,112,100,103,99]),d=new Uint32Array([17,18,24,47,99,99,99,99,18,21,26,66,99,99,99,99,24,26,56,99,99,99,99,99,47,66,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99]);function g(){var t,g=new Float64Array(64),v=new Float64Array(64),A=new Float64Array(64),m=new Float64Array(64),x=new Float64Array(64),U=(new Int32Array(64),new Int32Array(64)),S=new Int32Array(64),k=new Int32Array(64);function B(){this.val=0,this.len=0}var W=new Array(256),P=new Array(256),E=new Array(256),I=new Array(256),_=function(t){var r,e,i;for(r=0;r<64;++r){var n=.01*(y[r]*t+50)|0;n<1?n=1:n>255&&(n=255),U[c[r]]=n}for(r=0;r<64;r++){var o=.01*(d[r]*t+50)|0;o<1?o=1:o>255&&(o=255),S[c[r]]=o}for(r=0,e=0;e<8;++e)for(i=0;i<8;++i)g[r]=1/(U[c[r]]*l[e]*l[i]*8),v[r]=1/(S[c[r]]*l[e]*l[i]*8),r++},C=function(t,r,e){var i,n,o=0,a=0;for(i=0;i<256;i++)(u=new B).val=0,u.len=0,e[i]=u;for(i=1;i<=16;++i){for(n=1;n<=t[i];++n){var u;(u=new B).val=o,u.len=i,e[r[a]]=u,a++,o++}o<<=1}};function F(t,r){return t<0?t+(1<<r)-1:t}function D(t,r){for(r=0;0!=t;)t>>=1,r++;return r}function j(t){return t>0?t:-t}function G(t,r,e,i,n){var o,a,u=function(t,r){var e,i,n,o,a,u,s,f,b,h,w=0;for(b=0;b<8;++b){e=t[w],i=t[w+1],n=t[w+2],o=t[w+3],a=t[w+4],u=t[w+5],s=t[w+6];var p=e+(f=t[w+7]),c=e-f,l=i+s,y=i-s,d=n+u,g=n-u,v=o+a,A=o-a,m=p+v,x=p-v,U=l+d,S=l-d;t[w]=m+U,t[w+4]=m-U;var B=.707106781*(S+x);t[w+2]=x+B,t[w+6]=x-B;var W=.382683433*((m=A+g)-(S=y+c)),P=.5411961*m+W,E=1.306562965*S+W,I=.707106781*(U=g+y),_=c+I,C=c-I;t[w+5]=C+P,t[w+3]=C-P,t[w+1]=_+E,t[w+7]=_-E,w+=8}for(w=0,b=0;b<8;++b){e=t[w],i=t[w+8],n=t[w+16],o=t[w+24],a=t[w+32],u=t[w+40],s=t[w+48];var F=e+(f=t[w+56]),D=e-f,j=i+s,G=i-s,z=n+u,J=n-u,q=o+a,O=o-a,T=F+q,M=F-q,X=j+z,L=j-z;t[w]=T+X,t[w+32]=T-X;var V=.707106781*(L+M);t[w+16]=M+V,t[w+48]=M-V;var $=.382683433*((T=O+J)-(L=G+D)),H=.5411961*T+$,K=1.306562965*L+$,N=.707106781*(X=J+G),Q=D+N,R=D-N;t[w+40]=R+H,t[w+24]=R-H,t[w+8]=Q+K,t[w+56]=Q-K,w++}for(b=0;b<64;++b)h=t[b]*r[b],k[b]=h>0?h+.5|0:h-.5|0;return k}(t,r);o=u[0]-e|0,a=u[0];var s,f,b=0;b=D(j(o),b),bitwriter.putbits(i[b].val,i[b].len),b&&(o=F(o,b),bitwriter.putbits(o,b));for(var h=0,w=0;;){for(w++,s=0;0==(f=u[p[w]])&&w<64;w++,s++);if(w>=64)break;for(;s>=16;)bitwriter.putbits(n[240].val,n[240].len),s-=16;var c=0,l=s<<4|(c=D(j(f),c));bitwriter.putbits(n[l].val,n[l].len),c&&(f=F(f,c),bitwriter.putbits(f,c)),h=w}return 63!=h&&bitwriter.putbits(n[0].val,n[0].len),a}function z(r,e){var i,n,o,a,u,s,f=t.getPixels(r,e,8,8),b=f.buf,h=0;if(8==f.w&&8==f.h)for(n=0;n<8;n++)for(i=0;i<8;i++)a=b[o=f.offset+n*f.stride+4*i],u=b[o+1],s=b[o+2],A[h]=.299*a+.587*u+.114*s-128,m[h]=-.16874*a+-.33126*u+.5*s,x[h++]=.5*a+-.41869*u+-.08131*s;else for(n=0;n<8;n++)for(i=0;i<8;i++){var w=i,p=n;i>=f.w&&(w=f.w-1),n>=f.h&&(p=f.h-1),a=b[o=f.offset+p*f.stride+4*w],u=b[o+1],s=b[o+2],A[h]=.299*a+.587*u+.114*s-128,m[h]=-.16874*a+-.33126*u+.5*s,x[h++]=.5*a+-.41869*u+-.08131*s}}this.version=function(){return"petitóJPEG 0.4"},this.setVerbosity=function(t){e=!t},this.ByteWriter=function(){var t="",r=0;this._write=function(t,e,i){for(var n=0;n<i&&r+n<bufsize;n++)buf[r+n]=t[e+n];r+=n},this.write=function(e,i,n){t+=String.fromCharCode.apply(null,e.subarray(0,n)),r+=n},this.___write=function(t,e,i){docArr.push(String.fromCharCode.apply(null,t.subarray(0,i))),r+=i},this.getBase64Data=function(){return function(t){for(var r,e,i,n,o,a,u,s="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",f="",b=0;b<t.length;){if(n=(r=t[b++])>>>2,o=(3&r)<<4|(e=b<t.length?t[b++]:0)>>>4,a=(15&e)<<2|(i=b<t.length?t[b++]:0)>>>6,u=63&i,b>=t.length){var h=t.length%3;2==h&&(u=64),1==h&&(a=u=64)}f=f+s.charAt(n)+s.charAt(o)+s.charAt(a)+s.charAt(u)}return f}(buf.subarray(0,r))},this.getImgUrl=function(){return"data:image/jpeg;base64,"+this.getBase64Data()},this.getBytes=function(){return new Buffer(buf.subarray(0,r))},this.getString=function(){return t},this.__getString=function(){return docArr.join()},this.getWrittenBytes=function(){return r}},this.dlog=i,this.pttImage=function(t){var r=t.width,e=t.height,i=t.data;this.width=r,this.height=e,this.mcuPixels=function(){this.buf=null,this.offset=0,this.stride=0,this.xpos=0,this.ypos=0,this.w=0,this.h=0},this.getPixels=function(t,n,o,a){var u=new this.mcuPixels;return u.buf=i,u.stride=4*r,u.offset=n*u.stride+4*t,u.xpos=t,u.ypos=n,u.w=t+o>r?r-t:o,u.h=n+a>e?e-n:a,u}};var J=0;this.getEncodeTime=function(){return J},this.encode=function(e,p,c){p||i("input image not provided. aborting encode"),c||i("byte writer not provided. aborting encode"),i(r("pttjpeg_encode  qual:%d,  %dx%d",e,p.width,p.height));var l=(new Date).getTime();!function(t){t<=0&&(t=1),t>100&&(t=100),_(t<50?5e3/t|0:200-(t<<1)|0)}(e),bitwriter=new n,bitwriter.setByteWriter(c),t=p,bitwriter.putshort(65496),bitwriter.putshort(65504),bitwriter.putshort(16),bitwriter.putbyte(74),bitwriter.putbyte(70),bitwriter.putbyte(73),bitwriter.putbyte(70),bitwriter.putbyte(0),bitwriter.putbyte(1),bitwriter.putbyte(1),bitwriter.putbyte(0),bitwriter.putshort(1),bitwriter.putshort(1),bitwriter.putbyte(0),bitwriter.putbyte(0),function(){var t;for(bitwriter.putshort(65499),bitwriter.putshort(132),bitwriter.putbyte(0),t=0;t<64;++t)bitwriter.putbyte(U[t]);for(bitwriter.putbyte(1),t=0;t<64;++t)bitwriter.putbyte(S[t])}(),function(t,r){bitwriter.putshort(65472),bitwriter.putshort(11),bitwriter.putbyte(8),bitwriter.putshort(r),bitwriter.putshort(t),bitwriter.putbyte(1),bitwriter.putbyte(1),bitwriter.putbyte(17),bitwriter.putbyte(0)}(p.width,p.height),function(){var t;for(bitwriter.putshort(65476),bitwriter.putshort(418),bitwriter.putbyte(0),t=0;t<16;++t)bitwriter.putbyte(o[t+1]);for(t=0;t<=11;++t)bitwriter.putbyte(a[t]);for(bitwriter.putbyte(16),t=0;t<16;++t)bitwriter.putbyte(u[t+1]);for(t=0;t<=161;++t)bitwriter.putbyte(s[t]);for(bitwriter.putbyte(1),t=0;t<16;++t)bitwriter.putbyte(f[t+1]);for(t=0;t<=11;++t)bitwriter.putbyte(b[t]);for(bitwriter.putbyte(17),t=0;t<16;++t)bitwriter.putbyte(h[t+1]);for(t=0;t<=161;++t)bitwriter.putbyte(w[t])}(),bitwriter.putshort(65498),bitwriter.putshort(8),bitwriter.putbyte(1),bitwriter.putbyte(1),bitwriter.putbyte(0),bitwriter.putbyte(0),bitwriter.putbyte(63),bitwriter.putbyte(0),i("wrote headers");var y,d,v=0,m=p.width,x=p.height;for(y=0;y<x;y+=8)for(d=0;d<m;d+=8)z(d,y),v=G(A,g,v,W,E);bitwriter.align(),bitwriter.putshort(65497),bitwriter.end(),i(r("wrote EOI. %d bytes written",bitwriter.getWrittenBytes()));var k=(new Date).getTime();i(r("%d ms",J=k-l))};C(o,a,W),C(f,b,P),C(u,s,E),C(h,w,I)}if("undefined"!=typeof exports)exports.pttJPEG=g;else if("undefined"!=typeof importScripts)try{var v=new g;v.dlog("petitoJPEG WebWorker started"),v.dlog(v.version()),onmessage=function(t){var r=new g;r.dlog("petitoJPEG WebWorker: Got image "+t.data.width+"x"+t.data.height),t.data.imageData.width=t.data.width,t.data.imageData.height=t.data.height;var e=new r.pttImage(t.data.imageData),i=new r.ByteWriter;r.encode(t.data.quality,e,i);var n={url:i.getImgUrl(),bw:i.getWrittenBytes(),reason:"image",width:t.data.width,height:t.data.height,quality:t.data.quality,encodetime:r.getEncodeTime()};postMessage(n)}}catch(t){i(r("Caught exception: %s",t))}else null!=typeof define&&define.amd?define([],function(){return g}):"undefined"!=typeof window&&(window.pttJPEG=g)}();

}).call(this)}).call(this,require("buffer").Buffer)

},{"buffer":5}],2:[function(require,module,exports){
(function (Buffer){(function (){
!function(){var t={};!function(t){var r=function(){return r.cache.hasOwnProperty(arguments[0])||(r.cache[arguments[0]]=r.parse(arguments[0])),r.format.call(null,r.cache[arguments[0]],arguments)};r.format=function(t,n){var o,a,u,s,b,f,w,p=1,h=t.length,c="",y=[];for(a=0;a<h;a++)if("string"===(c=e(t[a])))y.push(t[a]);else if("array"===c){if((s=t[a])[2])for(o=n[p],u=0;u<s[2].length;u++){if(!o.hasOwnProperty(s[2][u]))throw r('[sprintf] property "%s" does not exist',s[2][u]);o=o[s[2][u]]}else o=s[1]?n[s[1]]:n[p++];if(/[^s]/.test(s[8])&&"number"!=e(o))throw r("[sprintf] expecting number but found %s",e(o));switch(s[8]){case"b":o=o.toString(2);break;case"c":o=String.fromCharCode(o);break;case"d":o=parseInt(o,10);break;case"e":o=s[7]?o.toExponential(s[7]):o.toExponential();break;case"f":o=s[7]?parseFloat(o).toFixed(s[7]):parseFloat(o);break;case"o":o=o.toString(8);break;case"s":o=(o=String(o))&&s[7]?o.substring(0,s[7]):o;break;case"u":o>>>=0;break;case"x":o=o.toString(16);break;case"X":o=o.toString(16).toUpperCase()}o=/[def]/.test(s[8])&&s[3]&&o>=0?"+"+o:o,f=s[4]?"0"==s[4]?"0":s[4].charAt(1):" ",w=s[6]-String(o).length,b=s[6]?i(f,w):"",y.push(s[5]?o+b:b+o)}return y.join("")},r.cache={},r.parse=function(t){for(var r=t,e=[],i=[],n=0;r;){if(null!==(e=/^[^\x25]+/.exec(r)))i.push(e[0]);else if(null!==(e=/^\x25{2}/.exec(r)))i.push("%");else{if(null===(e=/^\x25(?:([1-9]\d*)\$|\(([^\)]+)\))?(\+)?(0|'[^$])?(-)?(\d+)?(?:\.(\d+))?([b-fosuxX])/.exec(r)))throw"[sprintf] huh?";if(e[2]){n|=1;var o=[],a=e[2],u=[];if(null===(u=/^([a-z_][a-z_\d]*)/i.exec(a)))throw"[sprintf] huh?";for(o.push(u[1]);""!==(a=a.substring(u[0].length));)if(null!==(u=/^\.([a-z_][a-z_\d]*)/i.exec(a)))o.push(u[1]);else{if(null===(u=/^\[(\d+)\]/.exec(a)))throw"[sprintf] huh?";o.push(u[1])}e[2]=o}else n|=2;if(3===n)throw"[sprintf] mixing positional and named placeholders is not (yet) supported";i.push(e)}r=r.substring(e[0].length)}return i};function e(t){return Object.prototype.toString.call(t).slice(8,-1).toLowerCase()}function i(t,r){for(var e=[];r>0;e[--r]=t);return e.join("")}t.sprintf=r,t.vsprintf=function(t,e,i){return(i=e.slice(0)).splice(0,0,t),r.apply(null,i)}}(t);var r=t.sprintf,e=!0;function i(t){e||("undefined"!=typeof importScripts?postMessage({log:t,reason:"log"}):"undefined"!=typeof console&&console.log(t))}function n(){var t=this,r=1024,e=new Uint8Array(r),i=0,n=0,o=0,a=0;function u(){b&&b.write(e,0,i),a+=i,i=0}function s(){do{i>=r&&u();var t=o>>24&255;255!=t?(e[i++]=t,o<<=8,n-=8):(o&=16777215,e[i++]=255)}while(n>=8)}var b,f=function(){w(),n>=8&&(s(),u())},w=function(){t.putbits(255,32-n&7)};this.getWrittenBytes=function(){return a},this.end=function(){u()},this.putbits=function(t,r){n>16&&s(),function(t,r){o|=(t&(1<<r)-1)<<32-n-r,n+=r}(t,r)},this.align=function(){w()},this.setByteWriter=function(t){b=t},this.putshort=function(t){f(),e[i++]=(65535&t)>>>8,e[i++]=255&t},this.putbyte=function(t){f(),e[i++]=t}}var o=new Uint32Array([0,0,1,5,1,1,1,1,1,1,0,0,0,0,0,0,0]),a=new Uint32Array([0,1,2,3,4,5,6,7,8,9,10,11]),u=new Uint32Array([0,0,2,1,3,3,2,4,3,5,5,4,4,0,0,1,125]),s=new Uint32Array([1,2,3,0,4,17,5,18,33,49,65,6,19,81,97,7,34,113,20,50,129,145,161,8,35,66,177,193,21,82,209,240,36,51,98,114,130,9,10,22,23,24,25,26,37,38,39,40,41,42,52,53,54,55,56,57,58,67,68,69,70,71,72,73,74,83,84,85,86,87,88,89,90,99,100,101,102,103,104,105,106,115,116,117,118,119,120,121,122,131,132,133,134,135,136,137,138,146,147,148,149,150,151,152,153,154,162,163,164,165,166,167,168,169,170,178,179,180,181,182,183,184,185,186,194,195,196,197,198,199,200,201,202,210,211,212,213,214,215,216,217,218,225,226,227,228,229,230,231,232,233,234,241,242,243,244,245,246,247,248,249,250]),b=new Uint32Array([0,0,3,1,1,1,1,1,1,1,1,1,0,0,0,0,0]),f=new Uint32Array([0,1,2,3,4,5,6,7,8,9,10,11]),w=new Uint32Array([0,0,2,1,2,4,4,3,4,7,5,4,4,0,1,2,119]),p=new Uint32Array([0,1,2,3,17,4,5,33,49,6,18,65,81,7,97,113,19,34,50,129,8,20,66,145,161,177,193,9,35,51,82,240,21,98,114,209,10,22,36,52,225,37,241,23,24,25,26,38,39,40,41,42,53,54,55,56,57,58,67,68,69,70,71,72,73,74,83,84,85,86,87,88,89,90,99,100,101,102,103,104,105,106,115,116,117,118,119,120,121,122,130,131,132,133,134,135,136,137,138,146,147,148,149,150,151,152,153,154,162,163,164,165,166,167,168,169,170,178,179,180,181,182,183,184,185,186,194,195,196,197,198,199,200,201,202,210,211,212,213,214,215,216,217,218,226,227,228,229,230,231,232,233,234,242,243,244,245,246,247,248,249,250]),h=new Uint32Array([0,1,8,16,9,2,3,10,17,24,32,25,18,11,4,5,12,19,26,33,40,48,41,34,27,20,13,6,7,14,21,28,35,42,49,56,57,50,43,36,29,22,15,23,30,37,44,51,58,59,52,45,38,31,39,46,53,60,61,54,47,55,62,63,63,63,63,63,63,63,63,63,63,63,63,63,63,63,63,63]),c=new Uint32Array([0,1,5,6,14,15,27,28,2,4,7,13,16,26,29,42,3,8,12,17,25,30,41,43,9,11,18,24,31,40,44,53,10,19,23,32,39,45,52,54,20,22,33,38,46,51,55,60,21,34,37,47,50,56,59,61,35,36,48,49,57,58,62,63]),y=new Float64Array([1,1.387039845,1.306562965,1.175875602,1,.785694958,.5411961,.275899379]),l=new Uint32Array([16,11,10,16,24,40,51,61,12,12,14,19,26,58,60,55,14,13,16,24,40,57,69,56,14,17,22,29,51,87,80,62,18,22,37,56,68,109,103,77,24,35,55,64,81,104,113,92,49,64,78,87,103,121,120,101,72,92,95,98,112,100,103,99]),d=new Uint32Array([17,18,24,47,99,99,99,99,18,21,26,66,99,99,99,99,24,26,56,99,99,99,99,99,47,66,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99]);function g(){var t,g=new Float64Array(64),v=new Float64Array(64),A=new Float64Array(64),m=new Float64Array(64),x=new Float64Array(64),U=(new Int32Array(64),new Int32Array(64)),S=new Int32Array(64),k=new Int32Array(64);function B(){this.val=0,this.len=0}var W=new Array(256),P=new Array(256),E=new Array(256),I=new Array(256),_=function(t){var r,e,i;for(r=0;r<64;++r){var n=.01*(l[r]*t+50)|0;n<1?n=1:n>255&&(n=255),U[c[r]]=n}for(r=0;r<64;r++){var o=.01*(d[r]*t+50)|0;o<1?o=1:o>255&&(o=255),S[c[r]]=o}for(r=0,e=0;e<8;++e)for(i=0;i<8;++i)g[r]=1/(U[c[r]]*y[e]*y[i]*8),v[r]=1/(S[c[r]]*y[e]*y[i]*8),r++},C=function(t,r,e){var i,n,o=0,a=0;for(i=0;i<256;i++)(u=new B).val=0,u.len=0,e[i]=u;for(i=1;i<=16;++i){for(n=1;n<=t[i];++n){var u;(u=new B).val=o,u.len=i,e[r[a]]=u,a++,o++}o<<=1}};function F(t,r){return t<0?t+(1<<r)-1:t}function D(t,r){for(r=0;0!=t;)t>>=1,r++;return r}function j(t){return t>0?t:-t}function G(t,r,e,i,n){var o,a,u=function(t,r){var e,i,n,o,a,u,s,b,f,w,p=0;for(f=0;f<8;++f){e=t[p],i=t[p+1],n=t[p+2],o=t[p+3],a=t[p+4],u=t[p+5],s=t[p+6];var h=e+(b=t[p+7]),c=e-b,y=i+s,l=i-s,d=n+u,g=n-u,v=o+a,A=o-a,m=h+v,x=h-v,U=y+d,S=y-d;t[p]=m+U,t[p+4]=m-U;var B=.707106781*(S+x);t[p+2]=x+B,t[p+6]=x-B;var W=.382683433*((m=A+g)-(S=l+c)),P=.5411961*m+W,E=1.306562965*S+W,I=.707106781*(U=g+l),_=c+I,C=c-I;t[p+5]=C+P,t[p+3]=C-P,t[p+1]=_+E,t[p+7]=_-E,p+=8}for(p=0,f=0;f<8;++f){e=t[p],i=t[p+8],n=t[p+16],o=t[p+24],a=t[p+32],u=t[p+40],s=t[p+48];var F=e+(b=t[p+56]),D=e-b,j=i+s,G=i-s,z=n+u,J=n-u,q=o+a,O=o-a,T=F+q,M=F-q,X=j+z,L=j-z;t[p]=T+X,t[p+32]=T-X;var V=.707106781*(L+M);t[p+16]=M+V,t[p+48]=M-V;var $=.382683433*((T=O+J)-(L=G+D)),H=.5411961*T+$,K=1.306562965*L+$,N=.707106781*(X=J+G),Q=D+N,R=D-N;t[p+40]=R+H,t[p+24]=R-H,t[p+8]=Q+K,t[p+56]=Q-K,p++}for(f=0;f<64;++f)w=t[f]*r[f],k[f]=w>0?w+.5|0:w-.5|0;return k}(t,r);o=u[0]-e|0,a=u[0];var s,b,f=0;f=D(j(o),f),bitwriter.putbits(i[f].val,i[f].len),f&&(o=F(o,f),bitwriter.putbits(o,f));for(var w=0,p=0;;){for(p++,s=0;0==(b=u[h[p]])&&p<64;p++,s++);if(p>=64)break;for(;s>=16;)bitwriter.putbits(n[240].val,n[240].len),s-=16;var c=0,y=s<<4|(c=D(j(b),c));bitwriter.putbits(n[y].val,n[y].len),c&&(b=F(b,c),bitwriter.putbits(b,c)),w=p}return 63!=w&&bitwriter.putbits(n[0].val,n[0].len),a}function z(r,e){var i,n,o,a,u,s,b=t.getPixels(r,e,8,8),f=b.buf,w=0;if(8==b.w&&8==b.h)for(n=0;n<8;n++)for(i=0;i<8;i++)a=f[o=b.offset+n*b.stride+4*i],u=f[o+1],s=f[o+2],A[w]=.299*a+.587*u+.114*s-128,m[w]=-.16874*a+-.33126*u+.5*s,x[w++]=.5*a+-.41869*u+-.08131*s;else for(n=0;n<8;n++)for(i=0;i<8;i++){var p=i,h=n;i>=b.w&&(p=b.w-1),n>=b.h&&(h=b.h-1),a=f[o=b.offset+h*b.stride+4*p],u=f[o+1],s=f[o+2],A[w]=.299*a+.587*u+.114*s-128,m[w]=-.16874*a+-.33126*u+.5*s,x[w++]=.5*a+-.41869*u+-.08131*s}}this.version=function(){return"petitóJPEG 0.4"},this.setVerbosity=function(t){e=!t},this.ByteWriter=function(){var t="",r=0;this._write=function(t,e,i){for(var n=0;n<i&&r+n<bufsize;n++)buf[r+n]=t[e+n];r+=n},this.write=function(e,i,n){t+=String.fromCharCode.apply(null,e.subarray(0,n)),r+=n},this.___write=function(t,e,i){docArr.push(String.fromCharCode.apply(null,t.subarray(0,i))),r+=i},this.getBase64Data=function(){return function(t){for(var r,e,i,n,o,a,u,s="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",b="",f=0;f<t.length;){if(n=(r=t[f++])>>>2,o=(3&r)<<4|(e=f<t.length?t[f++]:0)>>>4,a=(15&e)<<2|(i=f<t.length?t[f++]:0)>>>6,u=63&i,f>=t.length){var w=t.length%3;2==w&&(u=64),1==w&&(a=u=64)}b=b+s.charAt(n)+s.charAt(o)+s.charAt(a)+s.charAt(u)}return b}(buf.subarray(0,r))},this.getImgUrl=function(){return"data:image/jpeg;base64,"+this.getBase64Data()},this.getBytes=function(){return new Buffer(buf.subarray(0,r))},this.getString=function(){return t},this.__getString=function(){return docArr.join()},this.getWrittenBytes=function(){return r}},this.dlog=i,this.pttImage=function(t){var r=t.width,e=t.height,i=t.data;this.width=r,this.height=e,this.mcuPixels=function(){this.buf=null,this.offset=0,this.stride=0,this.xpos=0,this.ypos=0,this.w=0,this.h=0},this.getPixels=function(t,n,o,a){var u=new this.mcuPixels;return u.buf=i,u.stride=4*r,u.offset=n*u.stride+4*t,u.xpos=t,u.ypos=n,u.w=t+o>r?r-t:o,u.h=n+a>e?e-n:a,u}};var J=0;this.getEncodeTime=function(){return J},this.encode=function(e,h,c){h||i("input image not provided. aborting encode"),c||i("byte writer not provided. aborting encode"),i(r("pttjpeg_encode  qual:%d,  %dx%d",e,h.width,h.height));var y=(new Date).getTime();!function(t){t<=0&&(t=1),t>100&&(t=100),_(t<50?5e3/t|0:200-(t<<1)|0)}(e),bitwriter=new n,bitwriter.setByteWriter(c),t=h,bitwriter.putshort(65496),bitwriter.putshort(65504),bitwriter.putshort(16),bitwriter.putbyte(74),bitwriter.putbyte(70),bitwriter.putbyte(73),bitwriter.putbyte(70),bitwriter.putbyte(0),bitwriter.putbyte(1),bitwriter.putbyte(1),bitwriter.putbyte(0),bitwriter.putshort(1),bitwriter.putshort(1),bitwriter.putbyte(0),bitwriter.putbyte(0),function(){var t;for(bitwriter.putshort(65499),bitwriter.putshort(132),bitwriter.putbyte(0),t=0;t<64;++t)bitwriter.putbyte(U[t]);for(bitwriter.putbyte(1),t=0;t<64;++t)bitwriter.putbyte(S[t])}(),function(t,r){bitwriter.putshort(65472),bitwriter.putshort(17),bitwriter.putbyte(8),bitwriter.putshort(r),bitwriter.putshort(t),bitwriter.putbyte(3),bitwriter.putbyte(1),bitwriter.putbyte(17),bitwriter.putbyte(0),bitwriter.putbyte(2),bitwriter.putbyte(17),bitwriter.putbyte(1),bitwriter.putbyte(3),bitwriter.putbyte(17),bitwriter.putbyte(1)}(h.width,h.height),function(){var t;for(bitwriter.putshort(65476),bitwriter.putshort(418),bitwriter.putbyte(0),t=0;t<16;++t)bitwriter.putbyte(o[t+1]);for(t=0;t<=11;++t)bitwriter.putbyte(a[t]);for(bitwriter.putbyte(16),t=0;t<16;++t)bitwriter.putbyte(u[t+1]);for(t=0;t<=161;++t)bitwriter.putbyte(s[t]);for(bitwriter.putbyte(1),t=0;t<16;++t)bitwriter.putbyte(b[t+1]);for(t=0;t<=11;++t)bitwriter.putbyte(f[t]);for(bitwriter.putbyte(17),t=0;t<16;++t)bitwriter.putbyte(w[t+1]);for(t=0;t<=161;++t)bitwriter.putbyte(p[t])}(),bitwriter.putshort(65498),bitwriter.putshort(12),bitwriter.putbyte(3),bitwriter.putbyte(1),bitwriter.putbyte(0),bitwriter.putbyte(2),bitwriter.putbyte(17),bitwriter.putbyte(3),bitwriter.putbyte(17),bitwriter.putbyte(0),bitwriter.putbyte(63),bitwriter.putbyte(0),i("wrote headers");var l,d,k=0,B=0,C=0,F=h.width,D=h.height;for(l=0;l<D;l+=8)for(d=0;d<F;d+=8)z(d,l),B=G(A,g,B,W,E),k=G(m,v,k,P,I),C=G(x,v,C,P,I);bitwriter.align(),bitwriter.putshort(65497),bitwriter.end(),i(r("wrote EOI. %d bytes written",bitwriter.getWrittenBytes()));var j=(new Date).getTime();i(r("%d ms",J=j-y))};C(o,a,W),C(b,f,P),C(u,s,E),C(w,p,I)}if("undefined"!=typeof exports)exports.pttJPEG=g;else if("undefined"!=typeof importScripts)try{var v=new g;v.dlog("petitoJPEG WebWorker started"),v.dlog(v.version()),onmessage=function(t){var r=new g;r.dlog("petitoJPEG WebWorker: Got image "+t.data.width+"x"+t.data.height),t.data.imageData.width=t.data.width,t.data.imageData.height=t.data.height;var e=new r.pttImage(t.data.imageData),i=new r.ByteWriter;r.encode(t.data.quality,e,i);var n={url:i.getImgUrl(),bw:i.getWrittenBytes(),reason:"image",width:t.data.width,height:t.data.height,quality:t.data.quality,encodetime:r.getEncodeTime()};postMessage(n)}}catch(t){i(r("Caught exception: %s",t))}else null!=typeof define&&define.amd?define([],function(){return g}):"undefined"!=typeof window&&(window.pttJPEG=g)}();

}).call(this)}).call(this,require("buffer").Buffer)

},{"buffer":5}],3:[function(require,module,exports){
/*
 * base64-arraybuffer
 * https://github.com/niklasvh/base64-arraybuffer
 *
 * Copyright (c) 2012 Niklas von Hertzen
 * Licensed under the MIT license.
 */
(function(){
  "use strict";

  var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";

  // Use a lookup table to find the index.
  var lookup = new Uint8Array(256);
  for (var i = 0; i < chars.length; i++) {
    lookup[chars.charCodeAt(i)] = i;
  }

  exports.encode = function(arraybuffer) {
    var bytes = new Uint8Array(arraybuffer),
    i, len = bytes.length, base64 = "";

    for (i = 0; i < len; i+=3) {
      base64 += chars[bytes[i] >> 2];
      base64 += chars[((bytes[i] & 3) << 4) | (bytes[i + 1] >> 4)];
      base64 += chars[((bytes[i + 1] & 15) << 2) | (bytes[i + 2] >> 6)];
      base64 += chars[bytes[i + 2] & 63];
    }

    if ((len % 3) === 2) {
      base64 = base64.substring(0, base64.length - 1) + "=";
    } else if (len % 3 === 1) {
      base64 = base64.substring(0, base64.length - 2) + "==";
    }

    return base64;
  };

  exports.decode =  function(base64) {
    var bufferLength = base64.length * 0.75,
    len = base64.length, i, p = 0,
    encoded1, encoded2, encoded3, encoded4;

    if (base64[base64.length - 1] === "=") {
      bufferLength--;
      if (base64[base64.length - 2] === "=") {
        bufferLength--;
      }
    }

    var arraybuffer = new ArrayBuffer(bufferLength),
    bytes = new Uint8Array(arraybuffer);

    for (i = 0; i < len; i+=4) {
      encoded1 = lookup[base64.charCodeAt(i)];
      encoded2 = lookup[base64.charCodeAt(i+1)];
      encoded3 = lookup[base64.charCodeAt(i+2)];
      encoded4 = lookup[base64.charCodeAt(i+3)];

      bytes[p++] = (encoded1 << 2) | (encoded2 >> 4);
      bytes[p++] = ((encoded2 & 15) << 4) | (encoded3 >> 2);
      bytes[p++] = ((encoded3 & 3) << 6) | (encoded4 & 63);
    }

    return arraybuffer;
  };
})();

},{}],4:[function(require,module,exports){
'use strict'

exports.byteLength = byteLength
exports.toByteArray = toByteArray
exports.fromByteArray = fromByteArray

var lookup = []
var revLookup = []
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i]
  revLookup[code.charCodeAt(i)] = i
}

// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
revLookup['-'.charCodeAt(0)] = 62
revLookup['_'.charCodeAt(0)] = 63

function getLens (b64) {
  var len = b64.length

  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4')
  }

  // Trim off extra bytes after placeholder bytes are found
  // See: https://github.com/beatgammit/base64-js/issues/42
  var validLen = b64.indexOf('=')
  if (validLen === -1) validLen = len

  var placeHoldersLen = validLen === len
    ? 0
    : 4 - (validLen % 4)

  return [validLen, placeHoldersLen]
}

// base64 is 4/3 + up to two characters of the original data
function byteLength (b64) {
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function _byteLength (b64, validLen, placeHoldersLen) {
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function toByteArray (b64) {
  var tmp
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]

  var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen))

  var curByte = 0

  // if there are placeholders, only get up to the last complete 4 chars
  var len = placeHoldersLen > 0
    ? validLen - 4
    : validLen

  var i
  for (i = 0; i < len; i += 4) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 18) |
      (revLookup[b64.charCodeAt(i + 1)] << 12) |
      (revLookup[b64.charCodeAt(i + 2)] << 6) |
      revLookup[b64.charCodeAt(i + 3)]
    arr[curByte++] = (tmp >> 16) & 0xFF
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 2) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 2) |
      (revLookup[b64.charCodeAt(i + 1)] >> 4)
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 1) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 10) |
      (revLookup[b64.charCodeAt(i + 1)] << 4) |
      (revLookup[b64.charCodeAt(i + 2)] >> 2)
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  return arr
}

function tripletToBase64 (num) {
  return lookup[num >> 18 & 0x3F] +
    lookup[num >> 12 & 0x3F] +
    lookup[num >> 6 & 0x3F] +
    lookup[num & 0x3F]
}

function encodeChunk (uint8, start, end) {
  var tmp
  var output = []
  for (var i = start; i < end; i += 3) {
    tmp =
      ((uint8[i] << 16) & 0xFF0000) +
      ((uint8[i + 1] << 8) & 0xFF00) +
      (uint8[i + 2] & 0xFF)
    output.push(tripletToBase64(tmp))
  }
  return output.join('')
}

function fromByteArray (uint8) {
  var tmp
  var len = uint8.length
  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
  var parts = []
  var maxChunkLength = 16383 // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)))
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1]
    parts.push(
      lookup[tmp >> 2] +
      lookup[(tmp << 4) & 0x3F] +
      '=='
    )
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + uint8[len - 1]
    parts.push(
      lookup[tmp >> 10] +
      lookup[(tmp >> 4) & 0x3F] +
      lookup[(tmp << 2) & 0x3F] +
      '='
    )
  }

  return parts.join('')
}

},{}],5:[function(require,module,exports){
(function (Buffer){(function (){
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */

'use strict'

var base64 = require('base64-js')
var ieee754 = require('ieee754')

exports.Buffer = Buffer
exports.SlowBuffer = SlowBuffer
exports.INSPECT_MAX_BYTES = 50

var K_MAX_LENGTH = 0x7fffffff
exports.kMaxLength = K_MAX_LENGTH

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Print warning and recommend using `buffer` v4.x which has an Object
 *               implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * We report that the browser does not support typed arrays if the are not subclassable
 * using __proto__. Firefox 4-29 lacks support for adding new properties to `Uint8Array`
 * (See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438). IE 10 lacks support
 * for __proto__ and has a buggy typed array implementation.
 */
Buffer.TYPED_ARRAY_SUPPORT = typedArraySupport()

if (!Buffer.TYPED_ARRAY_SUPPORT && typeof console !== 'undefined' &&
    typeof console.error === 'function') {
  console.error(
    'This browser lacks typed array (Uint8Array) support which is required by ' +
    '`buffer` v5.x. Use `buffer` v4.x if you require old browser support.'
  )
}

function typedArraySupport () {
  // Can typed array instances can be augmented?
  try {
    var arr = new Uint8Array(1)
    arr.__proto__ = { __proto__: Uint8Array.prototype, foo: function () { return 42 } }
    return arr.foo() === 42
  } catch (e) {
    return false
  }
}

Object.defineProperty(Buffer.prototype, 'parent', {
  enumerable: true,
  get: function () {
    if (!Buffer.isBuffer(this)) return undefined
    return this.buffer
  }
})

Object.defineProperty(Buffer.prototype, 'offset', {
  enumerable: true,
  get: function () {
    if (!Buffer.isBuffer(this)) return undefined
    return this.byteOffset
  }
})

function createBuffer (length) {
  if (length > K_MAX_LENGTH) {
    throw new RangeError('The value "' + length + '" is invalid for option "size"')
  }
  // Return an augmented `Uint8Array` instance
  var buf = new Uint8Array(length)
  buf.__proto__ = Buffer.prototype
  return buf
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */

function Buffer (arg, encodingOrOffset, length) {
  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new TypeError(
        'The "string" argument must be of type string. Received type number'
      )
    }
    return allocUnsafe(arg)
  }
  return from(arg, encodingOrOffset, length)
}

// Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
if (typeof Symbol !== 'undefined' && Symbol.species != null &&
    Buffer[Symbol.species] === Buffer) {
  Object.defineProperty(Buffer, Symbol.species, {
    value: null,
    configurable: true,
    enumerable: false,
    writable: false
  })
}

Buffer.poolSize = 8192 // not used by this implementation

function from (value, encodingOrOffset, length) {
  if (typeof value === 'string') {
    return fromString(value, encodingOrOffset)
  }

  if (ArrayBuffer.isView(value)) {
    return fromArrayLike(value)
  }

  if (value == null) {
    throw TypeError(
      'The first argument must be one of type string, Buffer, ArrayBuffer, Array, ' +
      'or Array-like Object. Received type ' + (typeof value)
    )
  }

  if (isInstance(value, ArrayBuffer) ||
      (value && isInstance(value.buffer, ArrayBuffer))) {
    return fromArrayBuffer(value, encodingOrOffset, length)
  }

  if (typeof value === 'number') {
    throw new TypeError(
      'The "value" argument must not be of type number. Received type number'
    )
  }

  var valueOf = value.valueOf && value.valueOf()
  if (valueOf != null && valueOf !== value) {
    return Buffer.from(valueOf, encodingOrOffset, length)
  }

  var b = fromObject(value)
  if (b) return b

  if (typeof Symbol !== 'undefined' && Symbol.toPrimitive != null &&
      typeof value[Symbol.toPrimitive] === 'function') {
    return Buffer.from(
      value[Symbol.toPrimitive]('string'), encodingOrOffset, length
    )
  }

  throw new TypeError(
    'The first argument must be one of type string, Buffer, ArrayBuffer, Array, ' +
    'or Array-like Object. Received type ' + (typeof value)
  )
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer.from = function (value, encodingOrOffset, length) {
  return from(value, encodingOrOffset, length)
}

// Note: Change prototype *after* Buffer.from is defined to workaround Chrome bug:
// https://github.com/feross/buffer/pull/148
Buffer.prototype.__proto__ = Uint8Array.prototype
Buffer.__proto__ = Uint8Array

function assertSize (size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be of type number')
  } else if (size < 0) {
    throw new RangeError('The value "' + size + '" is invalid for option "size"')
  }
}

function alloc (size, fill, encoding) {
  assertSize(size)
  if (size <= 0) {
    return createBuffer(size)
  }
  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpretted as a start offset.
    return typeof encoding === 'string'
      ? createBuffer(size).fill(fill, encoding)
      : createBuffer(size).fill(fill)
  }
  return createBuffer(size)
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer.alloc = function (size, fill, encoding) {
  return alloc(size, fill, encoding)
}

function allocUnsafe (size) {
  assertSize(size)
  return createBuffer(size < 0 ? 0 : checked(size) | 0)
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer.allocUnsafe = function (size) {
  return allocUnsafe(size)
}
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(size)
}

function fromString (string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8'
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('Unknown encoding: ' + encoding)
  }

  var length = byteLength(string, encoding) | 0
  var buf = createBuffer(length)

  var actual = buf.write(string, encoding)

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    buf = buf.slice(0, actual)
  }

  return buf
}

function fromArrayLike (array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0
  var buf = createBuffer(length)
  for (var i = 0; i < length; i += 1) {
    buf[i] = array[i] & 255
  }
  return buf
}

function fromArrayBuffer (array, byteOffset, length) {
  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('"offset" is outside of buffer bounds')
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('"length" is outside of buffer bounds')
  }

  var buf
  if (byteOffset === undefined && length === undefined) {
    buf = new Uint8Array(array)
  } else if (length === undefined) {
    buf = new Uint8Array(array, byteOffset)
  } else {
    buf = new Uint8Array(array, byteOffset, length)
  }

  // Return an augmented `Uint8Array` instance
  buf.__proto__ = Buffer.prototype
  return buf
}

function fromObject (obj) {
  if (Buffer.isBuffer(obj)) {
    var len = checked(obj.length) | 0
    var buf = createBuffer(len)

    if (buf.length === 0) {
      return buf
    }

    obj.copy(buf, 0, 0, len)
    return buf
  }

  if (obj.length !== undefined) {
    if (typeof obj.length !== 'number' || numberIsNaN(obj.length)) {
      return createBuffer(0)
    }
    return fromArrayLike(obj)
  }

  if (obj.type === 'Buffer' && Array.isArray(obj.data)) {
    return fromArrayLike(obj.data)
  }
}

function checked (length) {
  // Note: cannot use `length < K_MAX_LENGTH` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= K_MAX_LENGTH) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + K_MAX_LENGTH.toString(16) + ' bytes')
  }
  return length | 0
}

function SlowBuffer (length) {
  if (+length != length) { // eslint-disable-line eqeqeq
    length = 0
  }
  return Buffer.alloc(+length)
}

Buffer.isBuffer = function isBuffer (b) {
  return b != null && b._isBuffer === true &&
    b !== Buffer.prototype // so Buffer.isBuffer(Buffer.prototype) will be false
}

Buffer.compare = function compare (a, b) {
  if (isInstance(a, Uint8Array)) a = Buffer.from(a, a.offset, a.byteLength)
  if (isInstance(b, Uint8Array)) b = Buffer.from(b, b.offset, b.byteLength)
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError(
      'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
    )
  }

  if (a === b) return 0

  var x = a.length
  var y = b.length

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i]
      y = b[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

Buffer.isEncoding = function isEncoding (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.concat = function concat (list, length) {
  if (!Array.isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers')
  }

  if (list.length === 0) {
    return Buffer.alloc(0)
  }

  var i
  if (length === undefined) {
    length = 0
    for (i = 0; i < list.length; ++i) {
      length += list[i].length
    }
  }

  var buffer = Buffer.allocUnsafe(length)
  var pos = 0
  for (i = 0; i < list.length; ++i) {
    var buf = list[i]
    if (isInstance(buf, Uint8Array)) {
      buf = Buffer.from(buf)
    }
    if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    }
    buf.copy(buffer, pos)
    pos += buf.length
  }
  return buffer
}

function byteLength (string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length
  }
  if (ArrayBuffer.isView(string) || isInstance(string, ArrayBuffer)) {
    return string.byteLength
  }
  if (typeof string !== 'string') {
    throw new TypeError(
      'The "string" argument must be one of type string, Buffer, or ArrayBuffer. ' +
      'Received type ' + typeof string
    )
  }

  var len = string.length
  var mustMatch = (arguments.length > 2 && arguments[2] === true)
  if (!mustMatch && len === 0) return 0

  // Use a for loop to avoid recursion
  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len
      case 'utf8':
      case 'utf-8':
        return utf8ToBytes(string).length
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2
      case 'hex':
        return len >>> 1
      case 'base64':
        return base64ToBytes(string).length
      default:
        if (loweredCase) {
          return mustMatch ? -1 : utf8ToBytes(string).length // assume utf8
        }
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}
Buffer.byteLength = byteLength

function slowToString (encoding, start, end) {
  var loweredCase = false

  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.

  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
  if (start === undefined || start < 0) {
    start = 0
  }
  // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.
  if (start > this.length) {
    return ''
  }

  if (end === undefined || end > this.length) {
    end = this.length
  }

  if (end <= 0) {
    return ''
  }

  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0
  start >>>= 0

  if (end <= start) {
    return ''
  }

  if (!encoding) encoding = 'utf8'

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase()
        loweredCase = true
    }
  }
}

// This property is used by `Buffer.isBuffer` (and the `is-buffer` npm package)
// to detect a Buffer instance. It's not possible to use `instanceof Buffer`
// reliably in a browserify context because there could be multiple different
// copies of the 'buffer' package in use. This method works even for Buffer
// instances that were created from another copy of the `buffer` package.
// See: https://github.com/feross/buffer/issues/154
Buffer.prototype._isBuffer = true

function swap (b, n, m) {
  var i = b[n]
  b[n] = b[m]
  b[m] = i
}

Buffer.prototype.swap16 = function swap16 () {
  var len = this.length
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits')
  }
  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1)
  }
  return this
}

Buffer.prototype.swap32 = function swap32 () {
  var len = this.length
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits')
  }
  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3)
    swap(this, i + 1, i + 2)
  }
  return this
}

Buffer.prototype.swap64 = function swap64 () {
  var len = this.length
  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits')
  }
  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7)
    swap(this, i + 1, i + 6)
    swap(this, i + 2, i + 5)
    swap(this, i + 3, i + 4)
  }
  return this
}

Buffer.prototype.toString = function toString () {
  var length = this.length
  if (length === 0) return ''
  if (arguments.length === 0) return utf8Slice(this, 0, length)
  return slowToString.apply(this, arguments)
}

Buffer.prototype.toLocaleString = Buffer.prototype.toString

Buffer.prototype.equals = function equals (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return true
  return Buffer.compare(this, b) === 0
}

Buffer.prototype.inspect = function inspect () {
  var str = ''
  var max = exports.INSPECT_MAX_BYTES
  str = this.toString('hex', 0, max).replace(/(.{2})/g, '$1 ').trim()
  if (this.length > max) str += ' ... '
  return '<Buffer ' + str + '>'
}

Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
  if (isInstance(target, Uint8Array)) {
    target = Buffer.from(target, target.offset, target.byteLength)
  }
  if (!Buffer.isBuffer(target)) {
    throw new TypeError(
      'The "target" argument must be one of type Buffer or Uint8Array. ' +
      'Received type ' + (typeof target)
    )
  }

  if (start === undefined) {
    start = 0
  }
  if (end === undefined) {
    end = target ? target.length : 0
  }
  if (thisStart === undefined) {
    thisStart = 0
  }
  if (thisEnd === undefined) {
    thisEnd = this.length
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index')
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0
  }
  if (thisStart >= thisEnd) {
    return -1
  }
  if (start >= end) {
    return 1
  }

  start >>>= 0
  end >>>= 0
  thisStart >>>= 0
  thisEnd >>>= 0

  if (this === target) return 0

  var x = thisEnd - thisStart
  var y = end - start
  var len = Math.min(x, y)

  var thisCopy = this.slice(thisStart, thisEnd)
  var targetCopy = target.slice(start, end)

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i]
      y = targetCopy[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1

  // Normalize byteOffset
  if (typeof byteOffset === 'string') {
    encoding = byteOffset
    byteOffset = 0
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000
  }
  byteOffset = +byteOffset // Coerce to Number.
  if (numberIsNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : (buffer.length - 1)
  }

  // Normalize byteOffset: negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
  if (byteOffset >= buffer.length) {
    if (dir) return -1
    else byteOffset = buffer.length - 1
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0
    else return -1
  }

  // Normalize val
  if (typeof val === 'string') {
    val = Buffer.from(val, encoding)
  }

  // Finally, search either indexOf (if dir is true) or lastIndexOf
  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
  } else if (typeof val === 'number') {
    val = val & 0xFF // Search for a byte value [0-255]
    if (typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
      }
    }
    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
  }

  throw new TypeError('val must be string, number or Buffer')
}

function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
  var indexSize = 1
  var arrLength = arr.length
  var valLength = val.length

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase()
    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
        encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1
      }
      indexSize = 2
      arrLength /= 2
      valLength /= 2
      byteOffset /= 2
    }
  }

  function read (buf, i) {
    if (indexSize === 1) {
      return buf[i]
    } else {
      return buf.readUInt16BE(i * indexSize)
    }
  }

  var i
  if (dir) {
    var foundIndex = -1
    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
      } else {
        if (foundIndex !== -1) i -= i - foundIndex
        foundIndex = -1
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
    for (i = byteOffset; i >= 0; i--) {
      var found = true
      for (var j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false
          break
        }
      }
      if (found) return i
    }
  }

  return -1
}

Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1
}

Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
}

Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
}

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  var strLen = string.length

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16)
    if (numberIsNaN(parsed)) return i
    buf[offset + i] = parsed
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function asciiWrite (buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length)
}

function latin1Write (buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length)
}

function base64Write (buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length)
}

function ucs2Write (buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
}

Buffer.prototype.write = function write (string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8'
    length = this.length
    offset = 0
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset
    length = this.length
    offset = 0
  // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset >>> 0
    if (isFinite(length)) {
      length = length >>> 0
      if (encoding === undefined) encoding = 'utf8'
    } else {
      encoding = length
      length = undefined
    }
  } else {
    throw new Error(
      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
    )
  }

  var remaining = this.length - offset
  if (length === undefined || length > remaining) length = remaining

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds')
  }

  if (!encoding) encoding = 'utf8'

  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length)

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length)

      case 'ascii':
        return asciiWrite(this, string, offset, length)

      case 'latin1':
      case 'binary':
        return latin1Write(this, string, offset, length)

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.toJSON = function toJSON () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  end = Math.min(buf.length, end)
  var res = []

  var i = start
  while (i < end) {
    var firstByte = buf[i]
    var codePoint = null
    var bytesPerSequence = (firstByte > 0xEF) ? 4
      : (firstByte > 0xDF) ? 3
        : (firstByte > 0xBF) ? 2
          : 1

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte
          }
          break
        case 2:
          secondByte = buf[i + 1]
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint
            }
          }
          break
        case 3:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint
            }
          }
          break
        case 4:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          fourthByte = buf[i + 3]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD
      bytesPerSequence = 1
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000
      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
      codePoint = 0xDC00 | codePoint & 0x3FF
    }

    res.push(codePoint)
    i += bytesPerSequence
  }

  return decodeCodePointsArray(res)
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000

function decodeCodePointsArray (codePoints) {
  var len = codePoints.length
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  var res = ''
  var i = 0
  while (i < len) {
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
    )
  }
  return res
}

function asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F)
  }
  return ret
}

function latin1Slice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i])
  }
  return ret
}

function hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; ++i) {
    out += toHex(buf[i])
  }
  return out
}

function utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + (bytes[i + 1] * 256))
  }
  return res
}

Buffer.prototype.slice = function slice (start, end) {
  var len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len
    if (start < 0) start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0) end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start) end = start

  var newBuf = this.subarray(start, end)
  // Return an augmented `Uint8Array` instance
  newBuf.__proto__ = Buffer.prototype
  return newBuf
}

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }

  return val
}

Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length)
  }

  var val = this[offset + --byteLength]
  var mul = 1
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul
  }

  return val
}

Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 1, this.length)
  return this[offset]
}

Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 2, this.length)
  return this[offset] | (this[offset + 1] << 8)
}

Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 2, this.length)
  return (this[offset] << 8) | this[offset + 1]
}

Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
}

Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] * 0x1000000) +
    ((this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    this[offset + 3])
}

Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var i = byteLength
  var mul = 1
  var val = this[offset + --i]
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 1, this.length)
  if (!(this[offset] & 0x80)) return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
}

Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset] | (this[offset + 1] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset + 1] | (this[offset] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset]) |
    (this[offset + 1] << 8) |
    (this[offset + 2] << 16) |
    (this[offset + 3] << 24)
}

Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] << 24) |
    (this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    (this[offset + 3])
}

Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, true, 23, 4)
}

Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, false, 23, 4)
}

Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, true, 52, 8)
}

Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, false, 52, 8)
}

function checkInt (buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
}

Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var mul = 1
  var i = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var i = byteLength - 1
  var mul = 1
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  this[offset] = (value & 0xff)
  this[offset + 1] = (value >>> 8)
  return offset + 2
}

Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  this[offset] = (value >>> 8)
  this[offset + 1] = (value & 0xff)
  return offset + 2
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  this[offset + 3] = (value >>> 24)
  this[offset + 2] = (value >>> 16)
  this[offset + 1] = (value >>> 8)
  this[offset] = (value & 0xff)
  return offset + 4
}

Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  this[offset] = (value >>> 24)
  this[offset + 1] = (value >>> 16)
  this[offset + 2] = (value >>> 8)
  this[offset + 3] = (value & 0xff)
  return offset + 4
}

Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) {
    var limit = Math.pow(2, (8 * byteLength) - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = 0
  var mul = 1
  var sub = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) {
    var limit = Math.pow(2, (8 * byteLength) - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = byteLength - 1
  var mul = 1
  var sub = 0
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
  if (value < 0) value = 0xff + value + 1
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  this[offset] = (value & 0xff)
  this[offset + 1] = (value >>> 8)
  return offset + 2
}

Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  this[offset] = (value >>> 8)
  this[offset + 1] = (value & 0xff)
  return offset + 2
}

Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  this[offset] = (value & 0xff)
  this[offset + 1] = (value >>> 8)
  this[offset + 2] = (value >>> 16)
  this[offset + 3] = (value >>> 24)
  return offset + 4
}

Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (value < 0) value = 0xffffffff + value + 1
  this[offset] = (value >>> 24)
  this[offset + 1] = (value >>> 16)
  this[offset + 2] = (value >>> 8)
  this[offset + 3] = (value & 0xff)
  return offset + 4
}

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
  if (offset < 0) throw new RangeError('Index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4)
  return offset + 4
}

Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
}

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8)
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!Buffer.isBuffer(target)) throw new TypeError('argument should be a Buffer')
  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (targetStart >= target.length) targetStart = target.length
  if (!targetStart) targetStart = 0
  if (end > 0 && end < start) end = start

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('Index out of range')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start
  }

  var len = end - start

  if (this === target && typeof Uint8Array.prototype.copyWithin === 'function') {
    // Use built-in when available, missing from IE11
    this.copyWithin(targetStart, start, end)
  } else if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (var i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start]
    }
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, end),
      targetStart
    )
  }

  return len
}

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill (val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start
      start = 0
      end = this.length
    } else if (typeof end === 'string') {
      encoding = end
      end = this.length
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string')
    }
    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding)
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0)
      if ((encoding === 'utf8' && code < 128) ||
          encoding === 'latin1') {
        // Fast path: If `val` fits into a single byte, use that numeric value.
        val = code
      }
    }
  } else if (typeof val === 'number') {
    val = val & 255
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index')
  }

  if (end <= start) {
    return this
  }

  start = start >>> 0
  end = end === undefined ? this.length : end >>> 0

  if (!val) val = 0

  var i
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val
    }
  } else {
    var bytes = Buffer.isBuffer(val)
      ? val
      : Buffer.from(val, encoding)
    var len = bytes.length
    if (len === 0) {
      throw new TypeError('The value "' + val +
        '" is invalid for argument "value"')
    }
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len]
    }
  }

  return this
}

// HELPER FUNCTIONS
// ================

var INVALID_BASE64_RE = /[^+/0-9A-Za-z-_]/g

function base64clean (str) {
  // Node takes equal signs as end of the Base64 encoding
  str = str.split('=')[0]
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = str.trim().replace(INVALID_BASE64_RE, '')
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return ''
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '='
  }
  return str
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (string, units) {
  units = units || Infinity
  var codePoint
  var length = string.length
  var leadSurrogate = null
  var bytes = []

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i)

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        }

        // valid lead
        leadSurrogate = codePoint

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
        leadSurrogate = codePoint
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
    }

    leadSurrogate = null

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint)
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str, units) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break

    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(base64clean(str))
}

function blitBuffer (src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i]
  }
  return i
}

// ArrayBuffer or Uint8Array objects from other contexts (i.e. iframes) do not pass
// the `instanceof` check but they should be treated as of that type.
// See: https://github.com/feross/buffer/issues/166
function isInstance (obj, type) {
  return obj instanceof type ||
    (obj != null && obj.constructor != null && obj.constructor.name != null &&
      obj.constructor.name === type.name)
}
function numberIsNaN (obj) {
  // For IE11 support
  return obj !== obj // eslint-disable-line no-self-compare
}

}).call(this)}).call(this,require("buffer").Buffer)

},{"base64-js":4,"buffer":5,"ieee754":6}],6:[function(require,module,exports){
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var nBits = -7
  var i = isLE ? (nBytes - 1) : 0
  var d = isLE ? -1 : 1
  var s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; e = (e * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = (m * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var i = isLE ? 0 : (nBytes - 1)
  var d = isLE ? 1 : -1
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = ((value * c) - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}

},{}],7:[function(require,module,exports){
var encode = require('./lib/encoder'),
    decode = require('./lib/decoder');

module.exports = {
  encode: encode,
  decode: decode
};

},{"./lib/decoder":8,"./lib/encoder":9}],8:[function(require,module,exports){
(function (Buffer){(function (){
/* -*- tab-width: 2; indent-tabs-mode: nil; c-basic-offset: 2 -*- /
/* vim: set shiftwidth=2 tabstop=2 autoindent cindent expandtab: */
/*
   Copyright 2011 notmasteryet

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/

// - The JPEG specification can be found in the ITU CCITT Recommendation T.81
//   (www.w3.org/Graphics/JPEG/itu-t81.pdf)
// - The JFIF specification can be found in the JPEG File Interchange Format
//   (www.w3.org/Graphics/JPEG/jfif3.pdf)
// - The Adobe Application-Specific JPEG markers in the Supporting the DCT Filters
//   in PostScript Level 2, Technical Note #5116
//   (partners.adobe.com/public/developer/en/ps/sdk/5116.DCT_Filter.pdf)

var JpegImage = (function jpegImage() {
  "use strict";
  var dctZigZag = new Int32Array([
     0,
     1,  8,
    16,  9,  2,
     3, 10, 17, 24,
    32, 25, 18, 11, 4,
     5, 12, 19, 26, 33, 40,
    48, 41, 34, 27, 20, 13,  6,
     7, 14, 21, 28, 35, 42, 49, 56,
    57, 50, 43, 36, 29, 22, 15,
    23, 30, 37, 44, 51, 58,
    59, 52, 45, 38, 31,
    39, 46, 53, 60,
    61, 54, 47,
    55, 62,
    63
  ]);

  var dctCos1  =  4017   // cos(pi/16)
  var dctSin1  =   799   // sin(pi/16)
  var dctCos3  =  3406   // cos(3*pi/16)
  var dctSin3  =  2276   // sin(3*pi/16)
  var dctCos6  =  1567   // cos(6*pi/16)
  var dctSin6  =  3784   // sin(6*pi/16)
  var dctSqrt2 =  5793   // sqrt(2)
  var dctSqrt1d2 = 2896  // sqrt(2) / 2

  function constructor() {
  }

  function buildHuffmanTable(codeLengths, values) {
    var k = 0, code = [], i, j, length = 16;
    while (length > 0 && !codeLengths[length - 1])
      length--;
    code.push({children: [], index: 0});
    var p = code[0], q;
    for (i = 0; i < length; i++) {
      for (j = 0; j < codeLengths[i]; j++) {
        p = code.pop();
        p.children[p.index] = values[k];
        while (p.index > 0) {
          if (code.length === 0)
            throw new Error('Could not recreate Huffman Table');
          p = code.pop();
        }
        p.index++;
        code.push(p);
        while (code.length <= i) {
          code.push(q = {children: [], index: 0});
          p.children[p.index] = q.children;
          p = q;
        }
        k++;
      }
      if (i + 1 < length) {
        // p here points to last code
        code.push(q = {children: [], index: 0});
        p.children[p.index] = q.children;
        p = q;
      }
    }
    return code[0].children;
  }

  function decodeScan(data, offset,
                      frame, components, resetInterval,
                      spectralStart, spectralEnd,
                      successivePrev, successive, opts) {
    var precision = frame.precision;
    var samplesPerLine = frame.samplesPerLine;
    var scanLines = frame.scanLines;
    var mcusPerLine = frame.mcusPerLine;
    var progressive = frame.progressive;
    var maxH = frame.maxH, maxV = frame.maxV;

    var startOffset = offset, bitsData = 0, bitsCount = 0;
    function readBit() {
      if (bitsCount > 0) {
        bitsCount--;
        return (bitsData >> bitsCount) & 1;
      }
      bitsData = data[offset++];
      if (bitsData == 0xFF) {
        var nextByte = data[offset++];
        if (nextByte) {
          throw new Error("unexpected marker: " + ((bitsData << 8) | nextByte).toString(16));
        }
        // unstuff 0
      }
      bitsCount = 7;
      return bitsData >>> 7;
    }
    function decodeHuffman(tree) {
      var node = tree, bit;
      while ((bit = readBit()) !== null) {
        node = node[bit];
        if (typeof node === 'number')
          return node;
        if (typeof node !== 'object')
          throw new Error("invalid huffman sequence");
      }
      return null;
    }
    function receive(length) {
      var n = 0;
      while (length > 0) {
        var bit = readBit();
        if (bit === null) return;
        n = (n << 1) | bit;
        length--;
      }
      return n;
    }
    function receiveAndExtend(length) {
      var n = receive(length);
      if (n >= 1 << (length - 1))
        return n;
      return n + (-1 << length) + 1;
    }
    function decodeBaseline(component, zz) {
      var t = decodeHuffman(component.huffmanTableDC);
      var diff = t === 0 ? 0 : receiveAndExtend(t);
      zz[0]= (component.pred += diff);
      var k = 1;
      while (k < 64) {
        var rs = decodeHuffman(component.huffmanTableAC);
        var s = rs & 15, r = rs >> 4;
        if (s === 0) {
          if (r < 15)
            break;
          k += 16;
          continue;
        }
        k += r;
        var z = dctZigZag[k];
        zz[z] = receiveAndExtend(s);
        k++;
      }
    }
    function decodeDCFirst(component, zz) {
      var t = decodeHuffman(component.huffmanTableDC);
      var diff = t === 0 ? 0 : (receiveAndExtend(t) << successive);
      zz[0] = (component.pred += diff);
    }
    function decodeDCSuccessive(component, zz) {
      zz[0] |= readBit() << successive;
    }
    var eobrun = 0;
    function decodeACFirst(component, zz) {
      if (eobrun > 0) {
        eobrun--;
        return;
      }
      var k = spectralStart, e = spectralEnd;
      while (k <= e) {
        var rs = decodeHuffman(component.huffmanTableAC);
        var s = rs & 15, r = rs >> 4;
        if (s === 0) {
          if (r < 15) {
            eobrun = receive(r) + (1 << r) - 1;
            break;
          }
          k += 16;
          continue;
        }
        k += r;
        var z = dctZigZag[k];
        zz[z] = receiveAndExtend(s) * (1 << successive);
        k++;
      }
    }
    var successiveACState = 0, successiveACNextValue;
    function decodeACSuccessive(component, zz) {
      var k = spectralStart, e = spectralEnd, r = 0;
      while (k <= e) {
        var z = dctZigZag[k];
        var direction = zz[z] < 0 ? -1 : 1;
        switch (successiveACState) {
        case 0: // initial state
          var rs = decodeHuffman(component.huffmanTableAC);
          var s = rs & 15, r = rs >> 4;
          if (s === 0) {
            if (r < 15) {
              eobrun = receive(r) + (1 << r);
              successiveACState = 4;
            } else {
              r = 16;
              successiveACState = 1;
            }
          } else {
            if (s !== 1)
              throw new Error("invalid ACn encoding");
            successiveACNextValue = receiveAndExtend(s);
            successiveACState = r ? 2 : 3;
          }
          continue;
        case 1: // skipping r zero items
        case 2:
          if (zz[z])
            zz[z] += (readBit() << successive) * direction;
          else {
            r--;
            if (r === 0)
              successiveACState = successiveACState == 2 ? 3 : 0;
          }
          break;
        case 3: // set value for a zero item
          if (zz[z])
            zz[z] += (readBit() << successive) * direction;
          else {
            zz[z] = successiveACNextValue << successive;
            successiveACState = 0;
          }
          break;
        case 4: // eob
          if (zz[z])
            zz[z] += (readBit() << successive) * direction;
          break;
        }
        k++;
      }
      if (successiveACState === 4) {
        eobrun--;
        if (eobrun === 0)
          successiveACState = 0;
      }
    }
    function decodeMcu(component, decode, mcu, row, col) {
      var mcuRow = (mcu / mcusPerLine) | 0;
      var mcuCol = mcu % mcusPerLine;
      var blockRow = mcuRow * component.v + row;
      var blockCol = mcuCol * component.h + col;
      // If the block is missing and we're in tolerant mode, just skip it.
      if (component.blocks[blockRow] === undefined && opts.tolerantDecoding)
        return;
      decode(component, component.blocks[blockRow][blockCol]);
    }
    function decodeBlock(component, decode, mcu) {
      var blockRow = (mcu / component.blocksPerLine) | 0;
      var blockCol = mcu % component.blocksPerLine;
      // If the block is missing and we're in tolerant mode, just skip it.
      if (component.blocks[blockRow] === undefined && opts.tolerantDecoding)
        return;
      decode(component, component.blocks[blockRow][blockCol]);
    }

    var componentsLength = components.length;
    var component, i, j, k, n;
    var decodeFn;
    if (progressive) {
      if (spectralStart === 0)
        decodeFn = successivePrev === 0 ? decodeDCFirst : decodeDCSuccessive;
      else
        decodeFn = successivePrev === 0 ? decodeACFirst : decodeACSuccessive;
    } else {
      decodeFn = decodeBaseline;
    }

    var mcu = 0, marker;
    var mcuExpected;
    if (componentsLength == 1) {
      mcuExpected = components[0].blocksPerLine * components[0].blocksPerColumn;
    } else {
      mcuExpected = mcusPerLine * frame.mcusPerColumn;
    }
    if (!resetInterval) resetInterval = mcuExpected;

    var h, v;
    while (mcu < mcuExpected) {
      // reset interval stuff
      for (i = 0; i < componentsLength; i++)
        components[i].pred = 0;
      eobrun = 0;

      if (componentsLength == 1) {
        component = components[0];
        for (n = 0; n < resetInterval; n++) {
          decodeBlock(component, decodeFn, mcu);
          mcu++;
        }
      } else {
        for (n = 0; n < resetInterval; n++) {
          for (i = 0; i < componentsLength; i++) {
            component = components[i];
            h = component.h;
            v = component.v;
            for (j = 0; j < v; j++) {
              for (k = 0; k < h; k++) {
                decodeMcu(component, decodeFn, mcu, j, k);
              }
            }
          }
          mcu++;

          // If we've reached our expected MCU's, stop decoding
          if (mcu === mcuExpected) break;
        }
      }

      if (mcu === mcuExpected) {
        // Skip trailing bytes at the end of the scan - until we reach the next marker
        do {
          if (data[offset] === 0xFF) {
            if (data[offset + 1] !== 0x00) {
              break;
            }
          }
          offset += 1;
        } while (offset < data.length - 2);
      }

      // find marker
      bitsCount = 0;
      marker = (data[offset] << 8) | data[offset + 1];
      if (marker < 0xFF00) {
        throw new Error("marker was not found");
      }

      if (marker >= 0xFFD0 && marker <= 0xFFD7) { // RSTx
        offset += 2;
      }
      else
        break;
    }

    return offset - startOffset;
  }

  function buildComponentData(frame, component) {
    var lines = [];
    var blocksPerLine = component.blocksPerLine;
    var blocksPerColumn = component.blocksPerColumn;
    var samplesPerLine = blocksPerLine << 3;
    // Only 1 used per invocation of this function and garbage collected after invocation, so no need to account for its memory footprint.
    var R = new Int32Array(64), r = new Uint8Array(64);

    // A port of poppler's IDCT method which in turn is taken from:
    //   Christoph Loeffler, Adriaan Ligtenberg, George S. Moschytz,
    //   "Practical Fast 1-D DCT Algorithms with 11 Multiplications",
    //   IEEE Intl. Conf. on Acoustics, Speech & Signal Processing, 1989,
    //   988-991.
    function quantizeAndInverse(zz, dataOut, dataIn) {
      var qt = component.quantizationTable;
      var v0, v1, v2, v3, v4, v5, v6, v7, t;
      var p = dataIn;
      var i;

      // dequant
      for (i = 0; i < 64; i++)
        p[i] = zz[i] * qt[i];

      // inverse DCT on rows
      for (i = 0; i < 8; ++i) {
        var row = 8 * i;

        // check for all-zero AC coefficients
        if (p[1 + row] == 0 && p[2 + row] == 0 && p[3 + row] == 0 &&
            p[4 + row] == 0 && p[5 + row] == 0 && p[6 + row] == 0 &&
            p[7 + row] == 0) {
          t = (dctSqrt2 * p[0 + row] + 512) >> 10;
          p[0 + row] = t;
          p[1 + row] = t;
          p[2 + row] = t;
          p[3 + row] = t;
          p[4 + row] = t;
          p[5 + row] = t;
          p[6 + row] = t;
          p[7 + row] = t;
          continue;
        }

        // stage 4
        v0 = (dctSqrt2 * p[0 + row] + 128) >> 8;
        v1 = (dctSqrt2 * p[4 + row] + 128) >> 8;
        v2 = p[2 + row];
        v3 = p[6 + row];
        v4 = (dctSqrt1d2 * (p[1 + row] - p[7 + row]) + 128) >> 8;
        v7 = (dctSqrt1d2 * (p[1 + row] + p[7 + row]) + 128) >> 8;
        v5 = p[3 + row] << 4;
        v6 = p[5 + row] << 4;

        // stage 3
        t = (v0 - v1+ 1) >> 1;
        v0 = (v0 + v1 + 1) >> 1;
        v1 = t;
        t = (v2 * dctSin6 + v3 * dctCos6 + 128) >> 8;
        v2 = (v2 * dctCos6 - v3 * dctSin6 + 128) >> 8;
        v3 = t;
        t = (v4 - v6 + 1) >> 1;
        v4 = (v4 + v6 + 1) >> 1;
        v6 = t;
        t = (v7 + v5 + 1) >> 1;
        v5 = (v7 - v5 + 1) >> 1;
        v7 = t;

        // stage 2
        t = (v0 - v3 + 1) >> 1;
        v0 = (v0 + v3 + 1) >> 1;
        v3 = t;
        t = (v1 - v2 + 1) >> 1;
        v1 = (v1 + v2 + 1) >> 1;
        v2 = t;
        t = (v4 * dctSin3 + v7 * dctCos3 + 2048) >> 12;
        v4 = (v4 * dctCos3 - v7 * dctSin3 + 2048) >> 12;
        v7 = t;
        t = (v5 * dctSin1 + v6 * dctCos1 + 2048) >> 12;
        v5 = (v5 * dctCos1 - v6 * dctSin1 + 2048) >> 12;
        v6 = t;

        // stage 1
        p[0 + row] = v0 + v7;
        p[7 + row] = v0 - v7;
        p[1 + row] = v1 + v6;
        p[6 + row] = v1 - v6;
        p[2 + row] = v2 + v5;
        p[5 + row] = v2 - v5;
        p[3 + row] = v3 + v4;
        p[4 + row] = v3 - v4;
      }

      // inverse DCT on columns
      for (i = 0; i < 8; ++i) {
        var col = i;

        // check for all-zero AC coefficients
        if (p[1*8 + col] == 0 && p[2*8 + col] == 0 && p[3*8 + col] == 0 &&
            p[4*8 + col] == 0 && p[5*8 + col] == 0 && p[6*8 + col] == 0 &&
            p[7*8 + col] == 0) {
          t = (dctSqrt2 * dataIn[i+0] + 8192) >> 14;
          p[0*8 + col] = t;
          p[1*8 + col] = t;
          p[2*8 + col] = t;
          p[3*8 + col] = t;
          p[4*8 + col] = t;
          p[5*8 + col] = t;
          p[6*8 + col] = t;
          p[7*8 + col] = t;
          continue;
        }

        // stage 4
        v0 = (dctSqrt2 * p[0*8 + col] + 2048) >> 12;
        v1 = (dctSqrt2 * p[4*8 + col] + 2048) >> 12;
        v2 = p[2*8 + col];
        v3 = p[6*8 + col];
        v4 = (dctSqrt1d2 * (p[1*8 + col] - p[7*8 + col]) + 2048) >> 12;
        v7 = (dctSqrt1d2 * (p[1*8 + col] + p[7*8 + col]) + 2048) >> 12;
        v5 = p[3*8 + col];
        v6 = p[5*8 + col];

        // stage 3
        t = (v0 - v1 + 1) >> 1;
        v0 = (v0 + v1 + 1) >> 1;
        v1 = t;
        t = (v2 * dctSin6 + v3 * dctCos6 + 2048) >> 12;
        v2 = (v2 * dctCos6 - v3 * dctSin6 + 2048) >> 12;
        v3 = t;
        t = (v4 - v6 + 1) >> 1;
        v4 = (v4 + v6 + 1) >> 1;
        v6 = t;
        t = (v7 + v5 + 1) >> 1;
        v5 = (v7 - v5 + 1) >> 1;
        v7 = t;

        // stage 2
        t = (v0 - v3 + 1) >> 1;
        v0 = (v0 + v3 + 1) >> 1;
        v3 = t;
        t = (v1 - v2 + 1) >> 1;
        v1 = (v1 + v2 + 1) >> 1;
        v2 = t;
        t = (v4 * dctSin3 + v7 * dctCos3 + 2048) >> 12;
        v4 = (v4 * dctCos3 - v7 * dctSin3 + 2048) >> 12;
        v7 = t;
        t = (v5 * dctSin1 + v6 * dctCos1 + 2048) >> 12;
        v5 = (v5 * dctCos1 - v6 * dctSin1 + 2048) >> 12;
        v6 = t;

        // stage 1
        p[0*8 + col] = v0 + v7;
        p[7*8 + col] = v0 - v7;
        p[1*8 + col] = v1 + v6;
        p[6*8 + col] = v1 - v6;
        p[2*8 + col] = v2 + v5;
        p[5*8 + col] = v2 - v5;
        p[3*8 + col] = v3 + v4;
        p[4*8 + col] = v3 - v4;
      }

      // convert to 8-bit integers
      for (i = 0; i < 64; ++i) {
        var sample = 128 + ((p[i] + 8) >> 4);
        dataOut[i] = sample < 0 ? 0 : sample > 0xFF ? 0xFF : sample;
      }
    }

    requestMemoryAllocation(samplesPerLine * blocksPerColumn * 8);

    var i, j;
    for (var blockRow = 0; blockRow < blocksPerColumn; blockRow++) {
      var scanLine = blockRow << 3;
      for (i = 0; i < 8; i++)
        lines.push(new Uint8Array(samplesPerLine));
      for (var blockCol = 0; blockCol < blocksPerLine; blockCol++) {
        quantizeAndInverse(component.blocks[blockRow][blockCol], r, R);

        var offset = 0, sample = blockCol << 3;
        for (j = 0; j < 8; j++) {
          var line = lines[scanLine + j];
          for (i = 0; i < 8; i++)
            line[sample + i] = r[offset++];
        }
      }
    }
    return lines;
  }

  function clampTo8bit(a) {
    return a < 0 ? 0 : a > 255 ? 255 : a;
  }

  constructor.prototype = {
    load: function load(path) {
      var xhr = new XMLHttpRequest();
      xhr.open("GET", path, true);
      xhr.responseType = "arraybuffer";
      xhr.onload = (function() {
        // TODO catch parse error
        var data = new Uint8Array(xhr.response || xhr.mozResponseArrayBuffer);
        this.parse(data);
        if (this.onload)
          this.onload();
      }).bind(this);
      xhr.send(null);
    },
    parse: function parse(data) {
      var maxResolutionInPixels = this.opts.maxResolutionInMP * 1000 * 1000;
      var offset = 0, length = data.length;
      function readUint16() {
        var value = (data[offset] << 8) | data[offset + 1];
        offset += 2;
        return value;
      }
      function readDataBlock() {
        var length = readUint16();
        var array = data.subarray(offset, offset + length - 2);
        offset += array.length;
        return array;
      }
      function prepareComponents(frame) {
        var maxH = 0, maxV = 0;
        var component, componentId;
        for (componentId in frame.components) {
          if (frame.components.hasOwnProperty(componentId)) {
            component = frame.components[componentId];
            if (maxH < component.h) maxH = component.h;
            if (maxV < component.v) maxV = component.v;
          }
        }
        var mcusPerLine = Math.ceil(frame.samplesPerLine / 8 / maxH);
        var mcusPerColumn = Math.ceil(frame.scanLines / 8 / maxV);
        for (componentId in frame.components) {
          if (frame.components.hasOwnProperty(componentId)) {
            component = frame.components[componentId];
            var blocksPerLine = Math.ceil(Math.ceil(frame.samplesPerLine / 8) * component.h / maxH);
            var blocksPerColumn = Math.ceil(Math.ceil(frame.scanLines  / 8) * component.v / maxV);
            var blocksPerLineForMcu = mcusPerLine * component.h;
            var blocksPerColumnForMcu = mcusPerColumn * component.v;
            var blocksToAllocate = blocksPerColumnForMcu * blocksPerLineForMcu;
            var blocks = [];

            // Each block is a Int32Array of length 64 (4 x 64 = 256 bytes)
            requestMemoryAllocation(blocksToAllocate * 256);

            for (var i = 0; i < blocksPerColumnForMcu; i++) {
              var row = [];
              for (var j = 0; j < blocksPerLineForMcu; j++)
                row.push(new Int32Array(64));
              blocks.push(row);
            }
            component.blocksPerLine = blocksPerLine;
            component.blocksPerColumn = blocksPerColumn;
            component.blocks = blocks;
          }
        }
        frame.maxH = maxH;
        frame.maxV = maxV;
        frame.mcusPerLine = mcusPerLine;
        frame.mcusPerColumn = mcusPerColumn;
      }
      var jfif = null;
      var adobe = null;
      var pixels = null;
      var frame, resetInterval;
      var quantizationTables = [], frames = [];
      var huffmanTablesAC = [], huffmanTablesDC = [];
      var fileMarker = readUint16();
      this.comments = [];
      if (fileMarker != 0xFFD8) { // SOI (Start of Image)
        throw new Error("SOI not found");
      }

      fileMarker = readUint16();
      while (fileMarker != 0xFFD9) { // EOI (End of image)
        var i, j, l;
        switch(fileMarker) {
          case 0xFF00: break;
          case 0xFFE0: // APP0 (Application Specific)
          case 0xFFE1: // APP1
          case 0xFFE2: // APP2
          case 0xFFE3: // APP3
          case 0xFFE4: // APP4
          case 0xFFE5: // APP5
          case 0xFFE6: // APP6
          case 0xFFE7: // APP7
          case 0xFFE8: // APP8
          case 0xFFE9: // APP9
          case 0xFFEA: // APP10
          case 0xFFEB: // APP11
          case 0xFFEC: // APP12
          case 0xFFED: // APP13
          case 0xFFEE: // APP14
          case 0xFFEF: // APP15
          case 0xFFFE: // COM (Comment)
            var appData = readDataBlock();

            if (fileMarker === 0xFFFE) {
              var comment = String.fromCharCode.apply(null, appData);
              this.comments.push(comment);
            }

            if (fileMarker === 0xFFE0) {
              if (appData[0] === 0x4A && appData[1] === 0x46 && appData[2] === 0x49 &&
                appData[3] === 0x46 && appData[4] === 0) { // 'JFIF\x00'
                jfif = {
                  version: { major: appData[5], minor: appData[6] },
                  densityUnits: appData[7],
                  xDensity: (appData[8] << 8) | appData[9],
                  yDensity: (appData[10] << 8) | appData[11],
                  thumbWidth: appData[12],
                  thumbHeight: appData[13],
                  thumbData: appData.subarray(14, 14 + 3 * appData[12] * appData[13])
                };
              }
            }
            // TODO APP1 - Exif
            if (fileMarker === 0xFFE1) {
              if (appData[0] === 0x45 &&
                appData[1] === 0x78 &&
                appData[2] === 0x69 &&
                appData[3] === 0x66 &&
                appData[4] === 0) { // 'EXIF\x00'
                this.exifBuffer = appData.subarray(5, appData.length);
              }
            }

            if (fileMarker === 0xFFEE) {
              if (appData[0] === 0x41 && appData[1] === 0x64 && appData[2] === 0x6F &&
                appData[3] === 0x62 && appData[4] === 0x65 && appData[5] === 0) { // 'Adobe\x00'
                adobe = {
                  version: appData[6],
                  flags0: (appData[7] << 8) | appData[8],
                  flags1: (appData[9] << 8) | appData[10],
                  transformCode: appData[11]
                };
              }
            }
            break;

          case 0xFFDB: // DQT (Define Quantization Tables)
            var quantizationTablesLength = readUint16();
            var quantizationTablesEnd = quantizationTablesLength + offset - 2;
            while (offset < quantizationTablesEnd) {
              var quantizationTableSpec = data[offset++];
              requestMemoryAllocation(64 * 4);
              var tableData = new Int32Array(64);
              if ((quantizationTableSpec >> 4) === 0) { // 8 bit values
                for (j = 0; j < 64; j++) {
                  var z = dctZigZag[j];
                  tableData[z] = data[offset++];
                }
              } else if ((quantizationTableSpec >> 4) === 1) { //16 bit
                for (j = 0; j < 64; j++) {
                  var z = dctZigZag[j];
                  tableData[z] = readUint16();
                }
              } else
                throw new Error("DQT: invalid table spec");
              quantizationTables[quantizationTableSpec & 15] = tableData;
            }
            break;

          case 0xFFC0: // SOF0 (Start of Frame, Baseline DCT)
          case 0xFFC1: // SOF1 (Start of Frame, Extended DCT)
          case 0xFFC2: // SOF2 (Start of Frame, Progressive DCT)
            readUint16(); // skip data length
            frame = {};
            frame.extended = (fileMarker === 0xFFC1);
            frame.progressive = (fileMarker === 0xFFC2);
            frame.precision = data[offset++];
            frame.scanLines = readUint16();
            frame.samplesPerLine = readUint16();
            frame.components = {};
            frame.componentsOrder = [];

            var pixelsInFrame = frame.scanLines * frame.samplesPerLine;
            if (pixelsInFrame > maxResolutionInPixels) {
              var exceededAmount = Math.ceil((pixelsInFrame - maxResolutionInPixels) / 1e6);
              throw new Error(`maxResolutionInMP limit exceeded by ${exceededAmount}MP`);
            }

            var componentsCount = data[offset++], componentId;
            var maxH = 0, maxV = 0;
            for (i = 0; i < componentsCount; i++) {
              componentId = data[offset];
              var h = data[offset + 1] >> 4;
              var v = data[offset + 1] & 15;
              var qId = data[offset + 2];
              frame.componentsOrder.push(componentId);
              frame.components[componentId] = {
                h: h,
                v: v,
                quantizationIdx: qId
              };
              offset += 3;
            }
            prepareComponents(frame);
            frames.push(frame);
            break;

          case 0xFFC4: // DHT (Define Huffman Tables)
            var huffmanLength = readUint16();
            for (i = 2; i < huffmanLength;) {
              var huffmanTableSpec = data[offset++];
              var codeLengths = new Uint8Array(16);
              var codeLengthSum = 0;
              for (j = 0; j < 16; j++, offset++) {
                codeLengthSum += (codeLengths[j] = data[offset]);
              }
              requestMemoryAllocation(16 + codeLengthSum);
              var huffmanValues = new Uint8Array(codeLengthSum);
              for (j = 0; j < codeLengthSum; j++, offset++)
                huffmanValues[j] = data[offset];
              i += 17 + codeLengthSum;

              ((huffmanTableSpec >> 4) === 0 ?
                huffmanTablesDC : huffmanTablesAC)[huffmanTableSpec & 15] =
                buildHuffmanTable(codeLengths, huffmanValues);
            }
            break;

          case 0xFFDD: // DRI (Define Restart Interval)
            readUint16(); // skip data length
            resetInterval = readUint16();
            break;

          case 0xFFDC: // Number of Lines marker
            readUint16() // skip data length
            readUint16() // Ignore this data since it represents the image height
            break;
            
          case 0xFFDA: // SOS (Start of Scan)
            var scanLength = readUint16();
            var selectorsCount = data[offset++];
            var components = [], component;
            for (i = 0; i < selectorsCount; i++) {
              component = frame.components[data[offset++]];
              var tableSpec = data[offset++];
              component.huffmanTableDC = huffmanTablesDC[tableSpec >> 4];
              component.huffmanTableAC = huffmanTablesAC[tableSpec & 15];
              components.push(component);
            }
            var spectralStart = data[offset++];
            var spectralEnd = data[offset++];
            var successiveApproximation = data[offset++];
            var processed = decodeScan(data, offset,
              frame, components, resetInterval,
              spectralStart, spectralEnd,
              successiveApproximation >> 4, successiveApproximation & 15, this.opts);
            offset += processed;
            break;

          case 0xFFFF: // Fill bytes
            if (data[offset] !== 0xFF) { // Avoid skipping a valid marker.
              offset--;
            }
            break;

          default:
            if (data[offset - 3] == 0xFF &&
                data[offset - 2] >= 0xC0 && data[offset - 2] <= 0xFE) {
              // could be incorrect encoding -- last 0xFF byte of the previous
              // block was eaten by the encoder
              offset -= 3;
              break;
            }
            throw new Error("unknown JPEG marker " + fileMarker.toString(16));
        }
        fileMarker = readUint16();
      }
      if (frames.length != 1)
        throw new Error("only single frame JPEGs supported");

      // set each frame's components quantization table
      for (var i = 0; i < frames.length; i++) {
        var cp = frames[i].components;
        for (var j in cp) {
          cp[j].quantizationTable = quantizationTables[cp[j].quantizationIdx];
          delete cp[j].quantizationIdx;
        }
      }

      this.width = frame.samplesPerLine;
      this.height = frame.scanLines;
      this.jfif = jfif;
      this.adobe = adobe;
      this.components = [];
      for (var i = 0; i < frame.componentsOrder.length; i++) {
        var component = frame.components[frame.componentsOrder[i]];
        this.components.push({
          lines: buildComponentData(frame, component),
          scaleX: component.h / frame.maxH,
          scaleY: component.v / frame.maxV
        });
      }
    },
    getData: function getData(width, height) {
      var scaleX = this.width / width, scaleY = this.height / height;

      var component1, component2, component3, component4;
      var component1Line, component2Line, component3Line, component4Line;
      var x, y;
      var offset = 0;
      var Y, Cb, Cr, K, C, M, Ye, R, G, B;
      var colorTransform;
      var dataLength = width * height * this.components.length;
      requestMemoryAllocation(dataLength);
      var data = new Uint8Array(dataLength);
      switch (this.components.length) {
        case 1:
          component1 = this.components[0];
          for (y = 0; y < height; y++) {
            component1Line = component1.lines[0 | (y * component1.scaleY * scaleY)];
            for (x = 0; x < width; x++) {
              Y = component1Line[0 | (x * component1.scaleX * scaleX)];

              data[offset++] = Y;
            }
          }
          break;
        case 2:
          // PDF might compress two component data in custom colorspace
          component1 = this.components[0];
          component2 = this.components[1];
          for (y = 0; y < height; y++) {
            component1Line = component1.lines[0 | (y * component1.scaleY * scaleY)];
            component2Line = component2.lines[0 | (y * component2.scaleY * scaleY)];
            for (x = 0; x < width; x++) {
              Y = component1Line[0 | (x * component1.scaleX * scaleX)];
              data[offset++] = Y;
              Y = component2Line[0 | (x * component2.scaleX * scaleX)];
              data[offset++] = Y;
            }
          }
          break;
        case 3:
          // The default transform for three components is true
          colorTransform = true;
          // The adobe transform marker overrides any previous setting
          if (this.adobe && this.adobe.transformCode)
            colorTransform = true;
          else if (typeof this.opts.colorTransform !== 'undefined')
            colorTransform = !!this.opts.colorTransform;

          component1 = this.components[0];
          component2 = this.components[1];
          component3 = this.components[2];
          for (y = 0; y < height; y++) {
            component1Line = component1.lines[0 | (y * component1.scaleY * scaleY)];
            component2Line = component2.lines[0 | (y * component2.scaleY * scaleY)];
            component3Line = component3.lines[0 | (y * component3.scaleY * scaleY)];
            for (x = 0; x < width; x++) {
              if (!colorTransform) {
                R = component1Line[0 | (x * component1.scaleX * scaleX)];
                G = component2Line[0 | (x * component2.scaleX * scaleX)];
                B = component3Line[0 | (x * component3.scaleX * scaleX)];
              } else {
                Y = component1Line[0 | (x * component1.scaleX * scaleX)];
                Cb = component2Line[0 | (x * component2.scaleX * scaleX)];
                Cr = component3Line[0 | (x * component3.scaleX * scaleX)];

                R = clampTo8bit(Y + 1.402 * (Cr - 128));
                G = clampTo8bit(Y - 0.3441363 * (Cb - 128) - 0.71413636 * (Cr - 128));
                B = clampTo8bit(Y + 1.772 * (Cb - 128));
              }

              data[offset++] = R;
              data[offset++] = G;
              data[offset++] = B;
            }
          }
          break;
        case 4:
          if (!this.adobe)
            throw new Error('Unsupported color mode (4 components)');
          // The default transform for four components is false
          colorTransform = false;
          // The adobe transform marker overrides any previous setting
          if (this.adobe && this.adobe.transformCode)
            colorTransform = true;
          else if (typeof this.opts.colorTransform !== 'undefined')
            colorTransform = !!this.opts.colorTransform;

          component1 = this.components[0];
          component2 = this.components[1];
          component3 = this.components[2];
          component4 = this.components[3];
          for (y = 0; y < height; y++) {
            component1Line = component1.lines[0 | (y * component1.scaleY * scaleY)];
            component2Line = component2.lines[0 | (y * component2.scaleY * scaleY)];
            component3Line = component3.lines[0 | (y * component3.scaleY * scaleY)];
            component4Line = component4.lines[0 | (y * component4.scaleY * scaleY)];
            for (x = 0; x < width; x++) {
              if (!colorTransform) {
                C = component1Line[0 | (x * component1.scaleX * scaleX)];
                M = component2Line[0 | (x * component2.scaleX * scaleX)];
                Ye = component3Line[0 | (x * component3.scaleX * scaleX)];
                K = component4Line[0 | (x * component4.scaleX * scaleX)];
              } else {
                Y = component1Line[0 | (x * component1.scaleX * scaleX)];
                Cb = component2Line[0 | (x * component2.scaleX * scaleX)];
                Cr = component3Line[0 | (x * component3.scaleX * scaleX)];
                K = component4Line[0 | (x * component4.scaleX * scaleX)];

                C = 255 - clampTo8bit(Y + 1.402 * (Cr - 128));
                M = 255 - clampTo8bit(Y - 0.3441363 * (Cb - 128) - 0.71413636 * (Cr - 128));
                Ye = 255 - clampTo8bit(Y + 1.772 * (Cb - 128));
              }
              data[offset++] = 255-C;
              data[offset++] = 255-M;
              data[offset++] = 255-Ye;
              data[offset++] = 255-K;
            }
          }
          break;
        default:
          throw new Error('Unsupported color mode');
      }
      return data;
    },
    copyToImageData: function copyToImageData(imageData, formatAsRGBA) {
      var width = imageData.width, height = imageData.height;
      var imageDataArray = imageData.data;
      var data = this.getData(width, height);
      var i = 0, j = 0, x, y;
      var Y, K, C, M, R, G, B;
      switch (this.components.length) {
        case 1:
          for (y = 0; y < height; y++) {
            for (x = 0; x < width; x++) {
              Y = data[i++];

              imageDataArray[j++] = Y;
              imageDataArray[j++] = Y;
              imageDataArray[j++] = Y;
              if (formatAsRGBA) {
                imageDataArray[j++] = 255;
              }
            }
          }
          break;
        case 3:
          for (y = 0; y < height; y++) {
            for (x = 0; x < width; x++) {
              R = data[i++];
              G = data[i++];
              B = data[i++];

              imageDataArray[j++] = R;
              imageDataArray[j++] = G;
              imageDataArray[j++] = B;
              if (formatAsRGBA) {
                imageDataArray[j++] = 255;
              }
            }
          }
          break;
        case 4:
          for (y = 0; y < height; y++) {
            for (x = 0; x < width; x++) {
              C = data[i++];
              M = data[i++];
              Y = data[i++];
              K = data[i++];

              R = 255 - clampTo8bit(C * (1 - K / 255) + K);
              G = 255 - clampTo8bit(M * (1 - K / 255) + K);
              B = 255 - clampTo8bit(Y * (1 - K / 255) + K);

              imageDataArray[j++] = R;
              imageDataArray[j++] = G;
              imageDataArray[j++] = B;
              if (formatAsRGBA) {
                imageDataArray[j++] = 255;
              }
            }
          }
          break;
        default:
          throw new Error('Unsupported color mode');
      }
    }
  };


  // We cap the amount of memory used by jpeg-js to avoid unexpected OOMs from untrusted content.
  var totalBytesAllocated = 0;
  var maxMemoryUsageBytes = 0;
  function requestMemoryAllocation(increaseAmount = 0) {
    var totalMemoryImpactBytes = totalBytesAllocated + increaseAmount;
    if (totalMemoryImpactBytes > maxMemoryUsageBytes) {
      var exceededAmount = Math.ceil((totalMemoryImpactBytes - maxMemoryUsageBytes) / 1024 / 1024);
      throw new Error(`maxMemoryUsageInMB limit exceeded by at least ${exceededAmount}MB`);
    }

    totalBytesAllocated = totalMemoryImpactBytes;
  }

  constructor.resetMaxMemoryUsage = function (maxMemoryUsageBytes_) {
    totalBytesAllocated = 0;
    maxMemoryUsageBytes = maxMemoryUsageBytes_;
  };

  constructor.getBytesAllocated = function () {
    return totalBytesAllocated;
  };

  constructor.requestMemoryAllocation = requestMemoryAllocation;

  return constructor;
})();

if (typeof module !== 'undefined') {
	module.exports = decode;
} else if (typeof window !== 'undefined') {
	window['jpeg-js'] = window['jpeg-js'] || {};
	window['jpeg-js'].decode = decode;
}

function decode(jpegData, userOpts = {}) {
  var defaultOpts = {
    // "undefined" means "Choose whether to transform colors based on the image’s color model."
    colorTransform: undefined,
    useTArray: false,
    formatAsRGBA: true,
    tolerantDecoding: true,
    maxResolutionInMP: 100, // Don't decode more than 100 megapixels
    maxMemoryUsageInMB: 512, // Don't decode if memory footprint is more than 512MB
  };

  var opts = {...defaultOpts, ...userOpts};
  var arr = new Uint8Array(jpegData);
  var decoder = new JpegImage();
  decoder.opts = opts;
  // If this constructor ever supports async decoding this will need to be done differently.
  // Until then, treating as singleton limit is fine.
  JpegImage.resetMaxMemoryUsage(opts.maxMemoryUsageInMB * 1024 * 1024);
  decoder.parse(arr);

  var channels = (opts.formatAsRGBA) ? 4 : 3;
  var bytesNeeded = decoder.width * decoder.height * channels;
  try {
    JpegImage.requestMemoryAllocation(bytesNeeded);
    var image = {
      width: decoder.width,
      height: decoder.height,
      exifBuffer: decoder.exifBuffer,
      data: opts.useTArray ?
        new Uint8Array(bytesNeeded) :
        Buffer.alloc(bytesNeeded)
    };
    if(decoder.comments.length > 0) {
      image["comments"] = decoder.comments;
    }
  } catch (err){
    if (err instanceof RangeError){
      throw new Error("Could not allocate enough memory for the image. " +
                      "Required: " + bytesNeeded);
    } else {
      throw err;
    }
  }

  decoder.copyToImageData(image, opts.formatAsRGBA);

  return image;
}

}).call(this)}).call(this,require("buffer").Buffer)

},{"buffer":5}],9:[function(require,module,exports){
(function (Buffer){(function (){
/*
  Copyright (c) 2008, Adobe Systems Incorporated
  All rights reserved.

  Redistribution and use in source and binary forms, with or without 
  modification, are permitted provided that the following conditions are
  met:

  * Redistributions of source code must retain the above copyright notice, 
    this list of conditions and the following disclaimer.
  
  * Redistributions in binary form must reproduce the above copyright
    notice, this list of conditions and the following disclaimer in the 
    documentation and/or other materials provided with the distribution.
  
  * Neither the name of Adobe Systems Incorporated nor the names of its 
    contributors may be used to endorse or promote products derived from 
    this software without specific prior written permission.

  THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS
  IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO,
  THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR
  PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR 
  CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
  PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
  PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
  SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
/*
JPEG encoder ported to JavaScript and optimized by Andreas Ritter, www.bytestrom.eu, 11/2009

Basic GUI blocking jpeg encoder
*/

var btoa = btoa || function(buf) {
  return Buffer.from(buf).toString('base64');
};

function JPEGEncoder(quality) {
  var self = this;
	var fround = Math.round;
	var ffloor = Math.floor;
	var YTable = new Array(64);
	var UVTable = new Array(64);
	var fdtbl_Y = new Array(64);
	var fdtbl_UV = new Array(64);
	var YDC_HT;
	var UVDC_HT;
	var YAC_HT;
	var UVAC_HT;
	
	var bitcode = new Array(65535);
	var category = new Array(65535);
	var outputfDCTQuant = new Array(64);
	var DU = new Array(64);
	var byteout = [];
	var bytenew = 0;
	var bytepos = 7;
	
	var YDU = new Array(64);
	var UDU = new Array(64);
	var VDU = new Array(64);
	var clt = new Array(256);
	var RGB_YUV_TABLE = new Array(2048);
	var currentQuality;
	
	var ZigZag = [
			 0, 1, 5, 6,14,15,27,28,
			 2, 4, 7,13,16,26,29,42,
			 3, 8,12,17,25,30,41,43,
			 9,11,18,24,31,40,44,53,
			10,19,23,32,39,45,52,54,
			20,22,33,38,46,51,55,60,
			21,34,37,47,50,56,59,61,
			35,36,48,49,57,58,62,63
		];
	
	var std_dc_luminance_nrcodes = [0,0,1,5,1,1,1,1,1,1,0,0,0,0,0,0,0];
	var std_dc_luminance_values = [0,1,2,3,4,5,6,7,8,9,10,11];
	var std_ac_luminance_nrcodes = [0,0,2,1,3,3,2,4,3,5,5,4,4,0,0,1,0x7d];
	var std_ac_luminance_values = [
			0x01,0x02,0x03,0x00,0x04,0x11,0x05,0x12,
			0x21,0x31,0x41,0x06,0x13,0x51,0x61,0x07,
			0x22,0x71,0x14,0x32,0x81,0x91,0xa1,0x08,
			0x23,0x42,0xb1,0xc1,0x15,0x52,0xd1,0xf0,
			0x24,0x33,0x62,0x72,0x82,0x09,0x0a,0x16,
			0x17,0x18,0x19,0x1a,0x25,0x26,0x27,0x28,
			0x29,0x2a,0x34,0x35,0x36,0x37,0x38,0x39,
			0x3a,0x43,0x44,0x45,0x46,0x47,0x48,0x49,
			0x4a,0x53,0x54,0x55,0x56,0x57,0x58,0x59,
			0x5a,0x63,0x64,0x65,0x66,0x67,0x68,0x69,
			0x6a,0x73,0x74,0x75,0x76,0x77,0x78,0x79,
			0x7a,0x83,0x84,0x85,0x86,0x87,0x88,0x89,
			0x8a,0x92,0x93,0x94,0x95,0x96,0x97,0x98,
			0x99,0x9a,0xa2,0xa3,0xa4,0xa5,0xa6,0xa7,
			0xa8,0xa9,0xaa,0xb2,0xb3,0xb4,0xb5,0xb6,
			0xb7,0xb8,0xb9,0xba,0xc2,0xc3,0xc4,0xc5,
			0xc6,0xc7,0xc8,0xc9,0xca,0xd2,0xd3,0xd4,
			0xd5,0xd6,0xd7,0xd8,0xd9,0xda,0xe1,0xe2,
			0xe3,0xe4,0xe5,0xe6,0xe7,0xe8,0xe9,0xea,
			0xf1,0xf2,0xf3,0xf4,0xf5,0xf6,0xf7,0xf8,
			0xf9,0xfa
		];
	
	var std_dc_chrominance_nrcodes = [0,0,3,1,1,1,1,1,1,1,1,1,0,0,0,0,0];
	var std_dc_chrominance_values = [0,1,2,3,4,5,6,7,8,9,10,11];
	var std_ac_chrominance_nrcodes = [0,0,2,1,2,4,4,3,4,7,5,4,4,0,1,2,0x77];
	var std_ac_chrominance_values = [
			0x00,0x01,0x02,0x03,0x11,0x04,0x05,0x21,
			0x31,0x06,0x12,0x41,0x51,0x07,0x61,0x71,
			0x13,0x22,0x32,0x81,0x08,0x14,0x42,0x91,
			0xa1,0xb1,0xc1,0x09,0x23,0x33,0x52,0xf0,
			0x15,0x62,0x72,0xd1,0x0a,0x16,0x24,0x34,
			0xe1,0x25,0xf1,0x17,0x18,0x19,0x1a,0x26,
			0x27,0x28,0x29,0x2a,0x35,0x36,0x37,0x38,
			0x39,0x3a,0x43,0x44,0x45,0x46,0x47,0x48,
			0x49,0x4a,0x53,0x54,0x55,0x56,0x57,0x58,
			0x59,0x5a,0x63,0x64,0x65,0x66,0x67,0x68,
			0x69,0x6a,0x73,0x74,0x75,0x76,0x77,0x78,
			0x79,0x7a,0x82,0x83,0x84,0x85,0x86,0x87,
			0x88,0x89,0x8a,0x92,0x93,0x94,0x95,0x96,
			0x97,0x98,0x99,0x9a,0xa2,0xa3,0xa4,0xa5,
			0xa6,0xa7,0xa8,0xa9,0xaa,0xb2,0xb3,0xb4,
			0xb5,0xb6,0xb7,0xb8,0xb9,0xba,0xc2,0xc3,
			0xc4,0xc5,0xc6,0xc7,0xc8,0xc9,0xca,0xd2,
			0xd3,0xd4,0xd5,0xd6,0xd7,0xd8,0xd9,0xda,
			0xe2,0xe3,0xe4,0xe5,0xe6,0xe7,0xe8,0xe9,
			0xea,0xf2,0xf3,0xf4,0xf5,0xf6,0xf7,0xf8,
			0xf9,0xfa
		];
	
	function initQuantTables(sf){
			var YQT = [
				16, 11, 10, 16, 24, 40, 51, 61,
				12, 12, 14, 19, 26, 58, 60, 55,
				14, 13, 16, 24, 40, 57, 69, 56,
				14, 17, 22, 29, 51, 87, 80, 62,
				18, 22, 37, 56, 68,109,103, 77,
				24, 35, 55, 64, 81,104,113, 92,
				49, 64, 78, 87,103,121,120,101,
				72, 92, 95, 98,112,100,103, 99
			];
			
			for (var i = 0; i < 64; i++) {
				var t = ffloor((YQT[i]*sf+50)/100);
				if (t < 1) {
					t = 1;
				} else if (t > 255) {
					t = 255;
				}
				YTable[ZigZag[i]] = t;
			}
			var UVQT = [
				17, 18, 24, 47, 99, 99, 99, 99,
				18, 21, 26, 66, 99, 99, 99, 99,
				24, 26, 56, 99, 99, 99, 99, 99,
				47, 66, 99, 99, 99, 99, 99, 99,
				99, 99, 99, 99, 99, 99, 99, 99,
				99, 99, 99, 99, 99, 99, 99, 99,
				99, 99, 99, 99, 99, 99, 99, 99,
				99, 99, 99, 99, 99, 99, 99, 99
			];
			for (var j = 0; j < 64; j++) {
				var u = ffloor((UVQT[j]*sf+50)/100);
				if (u < 1) {
					u = 1;
				} else if (u > 255) {
					u = 255;
				}
				UVTable[ZigZag[j]] = u;
			}
			var aasf = [
				1.0, 1.387039845, 1.306562965, 1.175875602,
				1.0, 0.785694958, 0.541196100, 0.275899379
			];
			var k = 0;
			for (var row = 0; row < 8; row++)
			{
				for (var col = 0; col < 8; col++)
				{
					fdtbl_Y[k]  = (1.0 / (YTable [ZigZag[k]] * aasf[row] * aasf[col] * 8.0));
					fdtbl_UV[k] = (1.0 / (UVTable[ZigZag[k]] * aasf[row] * aasf[col] * 8.0));
					k++;
				}
			}
		}
		
		function computeHuffmanTbl(nrcodes, std_table){
			var codevalue = 0;
			var pos_in_table = 0;
			var HT = new Array();
			for (var k = 1; k <= 16; k++) {
				for (var j = 1; j <= nrcodes[k]; j++) {
					HT[std_table[pos_in_table]] = [];
					HT[std_table[pos_in_table]][0] = codevalue;
					HT[std_table[pos_in_table]][1] = k;
					pos_in_table++;
					codevalue++;
				}
				codevalue*=2;
			}
			return HT;
		}
		
		function initHuffmanTbl()
		{
			YDC_HT = computeHuffmanTbl(std_dc_luminance_nrcodes,std_dc_luminance_values);
			UVDC_HT = computeHuffmanTbl(std_dc_chrominance_nrcodes,std_dc_chrominance_values);
			YAC_HT = computeHuffmanTbl(std_ac_luminance_nrcodes,std_ac_luminance_values);
			UVAC_HT = computeHuffmanTbl(std_ac_chrominance_nrcodes,std_ac_chrominance_values);
		}
	
		function initCategoryNumber()
		{
			var nrlower = 1;
			var nrupper = 2;
			for (var cat = 1; cat <= 15; cat++) {
				//Positive numbers
				for (var nr = nrlower; nr<nrupper; nr++) {
					category[32767+nr] = cat;
					bitcode[32767+nr] = [];
					bitcode[32767+nr][1] = cat;
					bitcode[32767+nr][0] = nr;
				}
				//Negative numbers
				for (var nrneg =-(nrupper-1); nrneg<=-nrlower; nrneg++) {
					category[32767+nrneg] = cat;
					bitcode[32767+nrneg] = [];
					bitcode[32767+nrneg][1] = cat;
					bitcode[32767+nrneg][0] = nrupper-1+nrneg;
				}
				nrlower <<= 1;
				nrupper <<= 1;
			}
		}
		
		function initRGBYUVTable() {
			for(var i = 0; i < 256;i++) {
				RGB_YUV_TABLE[i]      		=  19595 * i;
				RGB_YUV_TABLE[(i+ 256)>>0] 	=  38470 * i;
				RGB_YUV_TABLE[(i+ 512)>>0] 	=   7471 * i + 0x8000;
				RGB_YUV_TABLE[(i+ 768)>>0] 	= -11059 * i;
				RGB_YUV_TABLE[(i+1024)>>0] 	= -21709 * i;
				RGB_YUV_TABLE[(i+1280)>>0] 	=  32768 * i + 0x807FFF;
				RGB_YUV_TABLE[(i+1536)>>0] 	= -27439 * i;
				RGB_YUV_TABLE[(i+1792)>>0] 	= - 5329 * i;
			}
		}
		
		// IO functions
		function writeBits(bs)
		{
			var value = bs[0];
			var posval = bs[1]-1;
			while ( posval >= 0 ) {
				if (value & (1 << posval) ) {
					bytenew |= (1 << bytepos);
				}
				posval--;
				bytepos--;
				if (bytepos < 0) {
					if (bytenew == 0xFF) {
						writeByte(0xFF);
						writeByte(0);
					}
					else {
						writeByte(bytenew);
					}
					bytepos=7;
					bytenew=0;
				}
			}
		}
	
		function writeByte(value)
		{
			//byteout.push(clt[value]); // write char directly instead of converting later
      byteout.push(value);
		}
	
		function writeWord(value)
		{
			writeByte((value>>8)&0xFF);
			writeByte((value   )&0xFF);
		}
		
		// DCT & quantization core
		function fDCTQuant(data, fdtbl)
		{
			var d0, d1, d2, d3, d4, d5, d6, d7;
			/* Pass 1: process rows. */
			var dataOff=0;
			var i;
			var I8 = 8;
			var I64 = 64;
			for (i=0; i<I8; ++i)
			{
				d0 = data[dataOff];
				d1 = data[dataOff+1];
				d2 = data[dataOff+2];
				d3 = data[dataOff+3];
				d4 = data[dataOff+4];
				d5 = data[dataOff+5];
				d6 = data[dataOff+6];
				d7 = data[dataOff+7];
				
				var tmp0 = d0 + d7;
				var tmp7 = d0 - d7;
				var tmp1 = d1 + d6;
				var tmp6 = d1 - d6;
				var tmp2 = d2 + d5;
				var tmp5 = d2 - d5;
				var tmp3 = d3 + d4;
				var tmp4 = d3 - d4;
	
				/* Even part */
				var tmp10 = tmp0 + tmp3;	/* phase 2 */
				var tmp13 = tmp0 - tmp3;
				var tmp11 = tmp1 + tmp2;
				var tmp12 = tmp1 - tmp2;
	
				data[dataOff] = tmp10 + tmp11; /* phase 3 */
				data[dataOff+4] = tmp10 - tmp11;
	
				var z1 = (tmp12 + tmp13) * 0.707106781; /* c4 */
				data[dataOff+2] = tmp13 + z1; /* phase 5 */
				data[dataOff+6] = tmp13 - z1;
	
				/* Odd part */
				tmp10 = tmp4 + tmp5; /* phase 2 */
				tmp11 = tmp5 + tmp6;
				tmp12 = tmp6 + tmp7;
	
				/* The rotator is modified from fig 4-8 to avoid extra negations. */
				var z5 = (tmp10 - tmp12) * 0.382683433; /* c6 */
				var z2 = 0.541196100 * tmp10 + z5; /* c2-c6 */
				var z4 = 1.306562965 * tmp12 + z5; /* c2+c6 */
				var z3 = tmp11 * 0.707106781; /* c4 */
	
				var z11 = tmp7 + z3;	/* phase 5 */
				var z13 = tmp7 - z3;
	
				data[dataOff+5] = z13 + z2;	/* phase 6 */
				data[dataOff+3] = z13 - z2;
				data[dataOff+1] = z11 + z4;
				data[dataOff+7] = z11 - z4;
	
				dataOff += 8; /* advance pointer to next row */
			}
	
			/* Pass 2: process columns. */
			dataOff = 0;
			for (i=0; i<I8; ++i)
			{
				d0 = data[dataOff];
				d1 = data[dataOff + 8];
				d2 = data[dataOff + 16];
				d3 = data[dataOff + 24];
				d4 = data[dataOff + 32];
				d5 = data[dataOff + 40];
				d6 = data[dataOff + 48];
				d7 = data[dataOff + 56];
				
				var tmp0p2 = d0 + d7;
				var tmp7p2 = d0 - d7;
				var tmp1p2 = d1 + d6;
				var tmp6p2 = d1 - d6;
				var tmp2p2 = d2 + d5;
				var tmp5p2 = d2 - d5;
				var tmp3p2 = d3 + d4;
				var tmp4p2 = d3 - d4;
	
				/* Even part */
				var tmp10p2 = tmp0p2 + tmp3p2;	/* phase 2 */
				var tmp13p2 = tmp0p2 - tmp3p2;
				var tmp11p2 = tmp1p2 + tmp2p2;
				var tmp12p2 = tmp1p2 - tmp2p2;
	
				data[dataOff] = tmp10p2 + tmp11p2; /* phase 3 */
				data[dataOff+32] = tmp10p2 - tmp11p2;
	
				var z1p2 = (tmp12p2 + tmp13p2) * 0.707106781; /* c4 */
				data[dataOff+16] = tmp13p2 + z1p2; /* phase 5 */
				data[dataOff+48] = tmp13p2 - z1p2;
	
				/* Odd part */
				tmp10p2 = tmp4p2 + tmp5p2; /* phase 2 */
				tmp11p2 = tmp5p2 + tmp6p2;
				tmp12p2 = tmp6p2 + tmp7p2;
	
				/* The rotator is modified from fig 4-8 to avoid extra negations. */
				var z5p2 = (tmp10p2 - tmp12p2) * 0.382683433; /* c6 */
				var z2p2 = 0.541196100 * tmp10p2 + z5p2; /* c2-c6 */
				var z4p2 = 1.306562965 * tmp12p2 + z5p2; /* c2+c6 */
				var z3p2 = tmp11p2 * 0.707106781; /* c4 */
	
				var z11p2 = tmp7p2 + z3p2;	/* phase 5 */
				var z13p2 = tmp7p2 - z3p2;
	
				data[dataOff+40] = z13p2 + z2p2; /* phase 6 */
				data[dataOff+24] = z13p2 - z2p2;
				data[dataOff+ 8] = z11p2 + z4p2;
				data[dataOff+56] = z11p2 - z4p2;
	
				dataOff++; /* advance pointer to next column */
			}
	
			// Quantize/descale the coefficients
			var fDCTQuant;
			for (i=0; i<I64; ++i)
			{
				// Apply the quantization and scaling factor & Round to nearest integer
				fDCTQuant = data[i]*fdtbl[i];
				outputfDCTQuant[i] = (fDCTQuant > 0.0) ? ((fDCTQuant + 0.5)|0) : ((fDCTQuant - 0.5)|0);
				//outputfDCTQuant[i] = fround(fDCTQuant);

			}
			return outputfDCTQuant;
		}
		
		function writeAPP0()
		{
			writeWord(0xFFE0); // marker
			writeWord(16); // length
			writeByte(0x4A); // J
			writeByte(0x46); // F
			writeByte(0x49); // I
			writeByte(0x46); // F
			writeByte(0); // = "JFIF",'\0'
			writeByte(1); // versionhi
			writeByte(1); // versionlo
			writeByte(0); // xyunits
			writeWord(1); // xdensity
			writeWord(1); // ydensity
			writeByte(0); // thumbnwidth
			writeByte(0); // thumbnheight
		}

		function writeAPP1(exifBuffer) {
			if (!exifBuffer) return;

			writeWord(0xFFE1); // APP1 marker

			if (exifBuffer[0] === 0x45 &&
					exifBuffer[1] === 0x78 &&
					exifBuffer[2] === 0x69 &&
					exifBuffer[3] === 0x66) {
				// Buffer already starts with EXIF, just use it directly
				writeWord(exifBuffer.length + 2); // length is buffer + length itself!
			} else {
				// Buffer doesn't start with EXIF, write it for them
				writeWord(exifBuffer.length + 5 + 2); // length is buffer + EXIF\0 + length itself!
				writeByte(0x45); // E
				writeByte(0x78); // X
				writeByte(0x69); // I
				writeByte(0x66); // F
				writeByte(0); // = "EXIF",'\0'
			}

			for (var i = 0; i < exifBuffer.length; i++) {
				writeByte(exifBuffer[i]);
			}
		}

		function writeSOF0(width, height)
		{
			writeWord(0xFFC0); // marker
			writeWord(17);   // length, truecolor YUV JPG
			writeByte(8);    // precision
			writeWord(height);
			writeWord(width);
			writeByte(3);    // nrofcomponents
			writeByte(1);    // IdY
			writeByte(0x11); // HVY
			writeByte(0);    // QTY
			writeByte(2);    // IdU
			writeByte(0x11); // HVU
			writeByte(1);    // QTU
			writeByte(3);    // IdV
			writeByte(0x11); // HVV
			writeByte(1);    // QTV
		}
	
		function writeDQT()
		{
			writeWord(0xFFDB); // marker
			writeWord(132);	   // length
			writeByte(0);
			for (var i=0; i<64; i++) {
				writeByte(YTable[i]);
			}
			writeByte(1);
			for (var j=0; j<64; j++) {
				writeByte(UVTable[j]);
			}
		}
	
		function writeDHT()
		{
			writeWord(0xFFC4); // marker
			writeWord(0x01A2); // length
	
			writeByte(0); // HTYDCinfo
			for (var i=0; i<16; i++) {
				writeByte(std_dc_luminance_nrcodes[i+1]);
			}
			for (var j=0; j<=11; j++) {
				writeByte(std_dc_luminance_values[j]);
			}
	
			writeByte(0x10); // HTYACinfo
			for (var k=0; k<16; k++) {
				writeByte(std_ac_luminance_nrcodes[k+1]);
			}
			for (var l=0; l<=161; l++) {
				writeByte(std_ac_luminance_values[l]);
			}
	
			writeByte(1); // HTUDCinfo
			for (var m=0; m<16; m++) {
				writeByte(std_dc_chrominance_nrcodes[m+1]);
			}
			for (var n=0; n<=11; n++) {
				writeByte(std_dc_chrominance_values[n]);
			}
	
			writeByte(0x11); // HTUACinfo
			for (var o=0; o<16; o++) {
				writeByte(std_ac_chrominance_nrcodes[o+1]);
			}
			for (var p=0; p<=161; p++) {
				writeByte(std_ac_chrominance_values[p]);
			}
		}
	
		function writeSOS()
		{
			writeWord(0xFFDA); // marker
			writeWord(12); // length
			writeByte(3); // nrofcomponents
			writeByte(1); // IdY
			writeByte(0); // HTY
			writeByte(2); // IdU
			writeByte(0x11); // HTU
			writeByte(3); // IdV
			writeByte(0x11); // HTV
			writeByte(0); // Ss
			writeByte(0x3f); // Se
			writeByte(0); // Bf
		}
		
		function processDU(CDU, fdtbl, DC, HTDC, HTAC){
			var EOB = HTAC[0x00];
			var M16zeroes = HTAC[0xF0];
			var pos;
			var I16 = 16;
			var I63 = 63;
			var I64 = 64;
			var DU_DCT = fDCTQuant(CDU, fdtbl);
			//ZigZag reorder
			for (var j=0;j<I64;++j) {
				DU[ZigZag[j]]=DU_DCT[j];
			}
			var Diff = DU[0] - DC; DC = DU[0];
			//Encode DC
			if (Diff==0) {
				writeBits(HTDC[0]); // Diff might be 0
			} else {
				pos = 32767+Diff;
				writeBits(HTDC[category[pos]]);
				writeBits(bitcode[pos]);
			}
			//Encode ACs
			var end0pos = 63; // was const... which is crazy
			for (; (end0pos>0)&&(DU[end0pos]==0); end0pos--) {};
			//end0pos = first element in reverse order !=0
			if ( end0pos == 0) {
				writeBits(EOB);
				return DC;
			}
			var i = 1;
			var lng;
			while ( i <= end0pos ) {
				var startpos = i;
				for (; (DU[i]==0) && (i<=end0pos); ++i) {}
				var nrzeroes = i-startpos;
				if ( nrzeroes >= I16 ) {
					lng = nrzeroes>>4;
					for (var nrmarker=1; nrmarker <= lng; ++nrmarker)
						writeBits(M16zeroes);
					nrzeroes = nrzeroes&0xF;
				}
				pos = 32767+DU[i];
				writeBits(HTAC[(nrzeroes<<4)+category[pos]]);
				writeBits(bitcode[pos]);
				i++;
			}
			if ( end0pos != I63 ) {
				writeBits(EOB);
			}
			return DC;
		}

		function initCharLookupTable(){
			var sfcc = String.fromCharCode;
			for(var i=0; i < 256; i++){ ///// ACHTUNG // 255
				clt[i] = sfcc(i);
			}
		}
		
		this.encode = function(image,quality) // image data object
		{
			var time_start = new Date().getTime();
			
			if(quality) setQuality(quality);
			
			// Initialize bit writer
			byteout = new Array();
			bytenew=0;
			bytepos=7;
	
			// Add JPEG headers
			writeWord(0xFFD8); // SOI
			writeAPP0();
			writeAPP1(image.exifBuffer);
			writeDQT();
			writeSOF0(image.width,image.height);
			writeDHT();
			writeSOS();

	
			// Encode 8x8 macroblocks
			var DCY=0;
			var DCU=0;
			var DCV=0;
			
			bytenew=0;
			bytepos=7;
			
			
			this.encode.displayName = "_encode_";

			var imageData = image.data;
			var width = image.width;
			var height = image.height;

			var quadWidth = width*4;
			var tripleWidth = width*3;
			
			var x, y = 0;
			var r, g, b;
			var start,p, col,row,pos;
			while(y < height){
				x = 0;
				while(x < quadWidth){
				start = quadWidth * y + x;
				p = start;
				col = -1;
				row = 0;
				
				for(pos=0; pos < 64; pos++){
					row = pos >> 3;// /8
					col = ( pos & 7 ) * 4; // %8
					p = start + ( row * quadWidth ) + col;		
					
					if(y+row >= height){ // padding bottom
						p-= (quadWidth*(y+1+row-height));
					}

					if(x+col >= quadWidth){ // padding right	
						p-= ((x+col) - quadWidth +4)
					}
					
					r = imageData[ p++ ];
					g = imageData[ p++ ];
					b = imageData[ p++ ];
					
					
					/* // calculate YUV values dynamically
					YDU[pos]=((( 0.29900)*r+( 0.58700)*g+( 0.11400)*b))-128; //-0x80
					UDU[pos]=(((-0.16874)*r+(-0.33126)*g+( 0.50000)*b));
					VDU[pos]=((( 0.50000)*r+(-0.41869)*g+(-0.08131)*b));
					*/
					
					// use lookup table (slightly faster)
					YDU[pos] = ((RGB_YUV_TABLE[r]             + RGB_YUV_TABLE[(g +  256)>>0] + RGB_YUV_TABLE[(b +  512)>>0]) >> 16)-128;
					UDU[pos] = ((RGB_YUV_TABLE[(r +  768)>>0] + RGB_YUV_TABLE[(g + 1024)>>0] + RGB_YUV_TABLE[(b + 1280)>>0]) >> 16)-128;
					VDU[pos] = ((RGB_YUV_TABLE[(r + 1280)>>0] + RGB_YUV_TABLE[(g + 1536)>>0] + RGB_YUV_TABLE[(b + 1792)>>0]) >> 16)-128;

				}
				
				DCY = processDU(YDU, fdtbl_Y, DCY, YDC_HT, YAC_HT);
				DCU = processDU(UDU, fdtbl_UV, DCU, UVDC_HT, UVAC_HT);
				DCV = processDU(VDU, fdtbl_UV, DCV, UVDC_HT, UVAC_HT);
				x+=32;
				}
				y+=8;
			}
			
			
			////////////////////////////////////////////////////////////////
	
			// Do the bit alignment of the EOI marker
			if ( bytepos >= 0 ) {
				var fillbits = [];
				fillbits[1] = bytepos+1;
				fillbits[0] = (1<<(bytepos+1))-1;
				writeBits(fillbits);
			}
	
			writeWord(0xFFD9); //EOI

			if (typeof module === 'undefined') return new Uint8Array(byteout);
      return Buffer.from(byteout);

			var jpegDataUri = 'data:image/jpeg;base64,' + btoa(byteout.join(''));
			
			byteout = [];
			
			// benchmarking
			var duration = new Date().getTime() - time_start;
    		//console.log('Encoding time: '+ duration + 'ms');
    		//
			
			return jpegDataUri			
	}
	
	function setQuality(quality){
		if (quality <= 0) {
			quality = 1;
		}
		if (quality > 100) {
			quality = 100;
		}
		
		if(currentQuality == quality) return // don't recalc if unchanged
		
		var sf = 0;
		if (quality < 50) {
			sf = Math.floor(5000 / quality);
		} else {
			sf = Math.floor(200 - quality*2);
		}
		
		initQuantTables(sf);
		currentQuality = quality;
		//console.log('Quality set to: '+quality +'%');
	}
	
	function init(){
		var time_start = new Date().getTime();
		if(!quality) quality = 50;
		// Create tables
		initCharLookupTable()
		initHuffmanTbl();
		initCategoryNumber();
		initRGBYUVTable();
		
		setQuality(quality);
		var duration = new Date().getTime() - time_start;
    	//console.log('Initialization '+ duration + 'ms');
	}
	
	init();
	
};

if (typeof module !== 'undefined') {
	module.exports = encode;
} else if (typeof window !== 'undefined') {
	window['jpeg-js'] = window['jpeg-js'] || {};
	window['jpeg-js'].encode = encode;
}

function encode(imgData, qu) {
  if (typeof qu === 'undefined') qu = 50;
  var encoder = new JPEGEncoder(qu);
	var data = encoder.encode(imgData, qu);
  return {
    data: data,
    width: imgData.width,
    height: imgData.height
  };
}

// helper function to get the imageData of an existing image on the current page.
function getImageDataFromImage(idOrElement){
	var theImg = (typeof(idOrElement)=='string')? document.getElementById(idOrElement):idOrElement;
	var cvs = document.createElement('canvas');
	cvs.width = theImg.width;
	cvs.height = theImg.height;
	var ctx = cvs.getContext("2d");
	ctx.drawImage(theImg,0,0);
	
	return (ctx.getImageData(0, 0, cvs.width, cvs.height));
}

}).call(this)}).call(this,require("buffer").Buffer)

},{"buffer":5}],10:[function(require,module,exports){
// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };

},{}],11:[function(require,module,exports){
'use strict';

function undefsafe(obj, path, value, __res) {
  // I'm not super keen on this private function, but it's because
  // it'll also be use in the browser and I wont *one* function exposed
  function split(path) {
    var res = [];
    var level = 0;
    var key = '';

    for (var i = 0; i < path.length; i++) {
      var c = path.substr(i, 1);

      if (level === 0 && (c === '.' || c === '[')) {
        if (c === '[') {
          level++;
          i++;
          c = path.substr(i, 1);
        }

        if (key) {
          // the first value could be a string
          res.push(key);
        }
        key = '';
        continue;
      }

      if (c === ']') {
        level--;
        key = key.slice(0, -1);
        continue;
      }

      key += c;
    }

    res.push(key);

    return res;
  }

  // bail if there's nothing
  if (obj === undefined || obj === null) {
    return undefined;
  }

  var parts = split(path);
  var key = null;
  var type = typeof obj;
  var root = obj;
  var parent = obj;

  var star =
    parts.filter(function(_) {
      return _ === '*';
    }).length > 0;

  // we're dealing with a primitive
  if (type !== 'object' && type !== 'function') {
    return obj;
  } else if (path.trim() === '') {
    return obj;
  }

  key = parts[0];
  var i = 0;
  for (; i < parts.length; i++) {
    key = parts[i];
    parent = obj;

    if (key === '*') {
      // loop through each property
      var prop = '';
      var res = __res || [];

      for (prop in parent) {
        var shallowObj = undefsafe(
          obj[prop],
          parts.slice(i + 1).join('.'),
          value,
          res
        );
        if (shallowObj && shallowObj !== res) {
          if ((value && shallowObj === value) || value === undefined) {
            if (value !== undefined) {
              return shallowObj;
            }

            res.push(shallowObj);
          }
        }
      }

      if (res.length === 0) {
        return undefined;
      }

      return res;
    }

    if (Object.getOwnPropertyNames(obj).indexOf(key) == -1) {
      return undefined;
    }

    obj = obj[key];
    if (obj === undefined || obj === null) {
      break;
    }
  }

  // if we have a null object, make sure it's the one the user was after,
  // if it's not (i.e. parts has a length) then give undefined back.
  if (obj === null && i !== parts.length - 1) {
    obj = undefined;
  } else if (!star && value) {
    key = path.split('.').pop();
    parent[key] = value;
  }
  return obj;
}

if (typeof module !== 'undefined') {
  module.exports = undefsafe;
}

},{}],12:[function(require,module,exports){
(function (process){(function (){

;(function(){
var UPNG = {};

// Make available for import by `require()`
var pako;
if (typeof module == "object") {module.exports = UPNG;}  else {window.UPNG = UPNG;}
if (typeof require == "function") {pako = require("pako");}  else {pako = window.pako;}
function log() { if (typeof process=="undefined" || process.env.NODE_ENV=="development") console.log.apply(console, arguments);  }
(function(UPNG, pako){

	

	

UPNG.toRGBA8 = function(out)
{
	var w = out.width, h = out.height;
	if(out.tabs.acTL==null) return [UPNG.toRGBA8.decodeImage(out.data, w, h, out).buffer];
	
	var frms = [];
	if(out.frames[0].data==null) out.frames[0].data = out.data;
	
	var img, empty = new Uint8Array(w*h*4);
	for(var i=0; i<out.frames.length; i++)
	{
		var frm = out.frames[i];
		var fx=frm.rect.x, fy=frm.rect.y, fw = frm.rect.width, fh = frm.rect.height;
		var fdata = UPNG.toRGBA8.decodeImage(frm.data, fw,fh, out);
		
		if(i==0) img = fdata;
		else if(frm.blend  ==0) UPNG._copyTile(fdata, fw, fh, img, w, h, fx, fy, 0);
		else if(frm.blend  ==1) UPNG._copyTile(fdata, fw, fh, img, w, h, fx, fy, 1);
		
		frms.push(img.buffer);  img = img.slice(0);
		
		if     (frm.dispose==0) {}
		else if(frm.dispose==1) UPNG._copyTile(empty, fw, fh, img, w, h, fx, fy, 0);
		else if(frm.dispose==2) {
			var pi = i-1;
			while(out.frames[pi].dispose==2) pi--;
			img = new Uint8Array(frms[pi]).slice(0);
		}
	}
	return frms;
}
UPNG.toRGBA8.decodeImage = function(data, w, h, out)
{
	var area = w*h, bpp = UPNG.decode._getBPP(out);
	var bpl = Math.ceil(w*bpp/8);	// bytes per line

	var bf = new Uint8Array(area*4), bf32 = new Uint32Array(bf.buffer);
	var ctype = out.ctype, depth = out.depth;
	var rs = UPNG._bin.readUshort;
	
	//console.log(ctype, depth);

	if     (ctype==6) { // RGB + alpha
		var qarea = area<<2;
		if(depth== 8) for(var i=0; i<qarea;i++) {  bf[i] = data[i];  /*if((i&3)==3 && data[i]!=0) bf[i]=255;*/ }
		if(depth==16) for(var i=0; i<qarea;i++) {  bf[i] = data[i<<1];  }
	}
	else if(ctype==2) {	// RGB
		var ts=out.tabs["tRNS"], tr=-1, tg=-1, tb=-1;
		if(ts) {  tr=ts[0];  tg=ts[1];  tb=ts[2];  }
		if(depth== 8) for(var i=0; i<area; i++) {  var qi=i<<2, ti=i*3;  bf[qi] = data[ti];  bf[qi+1] = data[ti+1];  bf[qi+2] = data[ti+2];  bf[qi+3] = 255;
			if(tr!=-1 && data[ti]   ==tr && data[ti+1]   ==tg && data[ti+2]   ==tb) bf[qi+3] = 0;  }
		if(depth==16) for(var i=0; i<area; i++) {  var qi=i<<2, ti=i*6;  bf[qi] = data[ti];  bf[qi+1] = data[ti+2];  bf[qi+2] = data[ti+4];  bf[qi+3] = 255;
			if(tr!=-1 && rs(data,ti)==tr && rs(data,ti+2)==tg && rs(data,ti+4)==tb) bf[qi+3] = 0;  }
	}
	else if(ctype==3) {	// palette
		var p=out.tabs["PLTE"], ap=out.tabs["tRNS"], tl=ap?ap.length:0;
		//console.log(p, ap);
		if(depth==1) for(var y=0; y<h; y++) {  var s0 = y*bpl, t0 = y*w;
			for(var i=0; i<w; i++) { var qi=(t0+i)<<2, j=((data[s0+(i>>3)]>>(7-((i&7)<<0)))& 1), cj=3*j;  bf[qi]=p[cj];  bf[qi+1]=p[cj+1];  bf[qi+2]=p[cj+2];  bf[qi+3]=(j<tl)?ap[j]:255;  }
		}
		if(depth==2) for(var y=0; y<h; y++) {  var s0 = y*bpl, t0 = y*w;
			for(var i=0; i<w; i++) { var qi=(t0+i)<<2, j=((data[s0+(i>>2)]>>(6-((i&3)<<1)))& 3), cj=3*j;  bf[qi]=p[cj];  bf[qi+1]=p[cj+1];  bf[qi+2]=p[cj+2];  bf[qi+3]=(j<tl)?ap[j]:255;  }
		}
		if(depth==4) for(var y=0; y<h; y++) {  var s0 = y*bpl, t0 = y*w;
			for(var i=0; i<w; i++) { var qi=(t0+i)<<2, j=((data[s0+(i>>1)]>>(4-((i&1)<<2)))&15), cj=3*j;  bf[qi]=p[cj];  bf[qi+1]=p[cj+1];  bf[qi+2]=p[cj+2];  bf[qi+3]=(j<tl)?ap[j]:255;  }
		}
		if(depth==8) for(var i=0; i<area; i++ ) {  var qi=i<<2, j=data[i]                      , cj=3*j;  bf[qi]=p[cj];  bf[qi+1]=p[cj+1];  bf[qi+2]=p[cj+2];  bf[qi+3]=(j<tl)?ap[j]:255;  }
	}
	else if(ctype==4) {	// gray + alpha
		if(depth== 8)  for(var i=0; i<area; i++) {  var qi=i<<2, di=i<<1, gr=data[di];  bf[qi]=gr;  bf[qi+1]=gr;  bf[qi+2]=gr;  bf[qi+3]=data[di+1];  }
		if(depth==16)  for(var i=0; i<area; i++) {  var qi=i<<2, di=i<<2, gr=data[di];  bf[qi]=gr;  bf[qi+1]=gr;  bf[qi+2]=gr;  bf[qi+3]=data[di+2];  }
	}
	else if(ctype==0) {	// gray
		var tr = out.tabs["tRNS"] ? out.tabs["tRNS"] : -1;
		if(depth== 1) for(var i=0; i<area; i++) {  var gr=255*((data[i>>3]>>(7 -((i&7)   )))& 1), al=(gr==tr*255)?0:255;  bf32[i]=(al<<24)|(gr<<16)|(gr<<8)|gr;  }
		if(depth== 2) for(var i=0; i<area; i++) {  var gr= 85*((data[i>>2]>>(6 -((i&3)<<1)))& 3), al=(gr==tr* 85)?0:255;  bf32[i]=(al<<24)|(gr<<16)|(gr<<8)|gr;  }
		if(depth== 4) for(var i=0; i<area; i++) {  var gr= 17*((data[i>>1]>>(4 -((i&1)<<2)))&15), al=(gr==tr* 17)?0:255;  bf32[i]=(al<<24)|(gr<<16)|(gr<<8)|gr;  }
		if(depth== 8) for(var i=0; i<area; i++) {  var gr=data[i  ] , al=(gr           ==tr)?0:255;  bf32[i]=(al<<24)|(gr<<16)|(gr<<8)|gr;  }
		if(depth==16) for(var i=0; i<area; i++) {  var gr=data[i<<1], al=(rs(data,i<<1)==tr)?0:255;  bf32[i]=(al<<24)|(gr<<16)|(gr<<8)|gr;  }
	}
	return bf;
}



UPNG.decode = function(buff)
{
	var data = new Uint8Array(buff), offset = 8, bin = UPNG._bin, rUs = bin.readUshort, rUi = bin.readUint;
	var out = {tabs:{}, frames:[]};
	var dd = new Uint8Array(data.length), doff = 0;	 // put all IDAT data into it
	var fd, foff = 0;	// frames
	
	var mgck = [0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a];
	for(var i=0; i<8; i++) if(data[i]!=mgck[i]) throw "The input is not a PNG file!";

	while(offset<data.length)
	{
		var len  = bin.readUint(data, offset);  offset += 4;
		var type = bin.readASCII(data, offset, 4);  offset += 4;
		//log(type,len);
		
		if     (type=="IHDR")  {  UPNG.decode._IHDR(data, offset, out);  }
		else if(type=="IDAT") {
			for(var i=0; i<len; i++) dd[doff+i] = data[offset+i];
			doff += len;
		}
		else if(type=="acTL")  {
			out.tabs[type] = {  num_frames:rUi(data, offset), num_plays:rUi(data, offset+4)  };
			fd = new Uint8Array(data.length);
		}
		else if(type=="fcTL")  {
			if(foff!=0) {  var fr = out.frames[out.frames.length-1];
				fr.data = UPNG.decode._decompress(out, fd.slice(0,foff), fr.rect.width, fr.rect.height);  foff=0;
			}
			var rct = {x:rUi(data, offset+12),y:rUi(data, offset+16),width:rUi(data, offset+4),height:rUi(data, offset+8)};
			var del = rUs(data, offset+22);  del = rUs(data, offset+20) / (del==0?100:del);
			var frm = {rect:rct, delay:Math.round(del*1000), dispose:data[offset+24], blend:data[offset+25]};
			//console.log(frm);
			out.frames.push(frm);
		}
		else if(type=="fdAT") {
			for(var i=0; i<len-4; i++) fd[foff+i] = data[offset+i+4];
			foff += len-4;
		}
		else if(type=="pHYs") {
			out.tabs[type] = [bin.readUint(data, offset), bin.readUint(data, offset+4), data[offset+8]];
		}
		else if(type=="cHRM") {
			out.tabs[type] = [];
			for(var i=0; i<8; i++) out.tabs[type].push(bin.readUint(data, offset+i*4));
		}
		else if(type=="tEXt") {
			if(out.tabs[type]==null) out.tabs[type] = {};
			var nz = bin.nextZero(data, offset);
			var keyw = bin.readASCII(data, offset, nz-offset);
			var text = bin.readASCII(data, nz+1, offset+len-nz-1);
			out.tabs[type][keyw] = text;
		}
		else if(type=="iTXt") {
			if(out.tabs[type]==null) out.tabs[type] = {};
			var nz = 0, off = offset;
			nz = bin.nextZero(data, off);
			var keyw = bin.readASCII(data, off, nz-off);  off = nz + 1;
			var cflag = data[off], cmeth = data[off+1];  off+=2;
			nz = bin.nextZero(data, off);
			var ltag = bin.readASCII(data, off, nz-off);  off = nz + 1;
			nz = bin.nextZero(data, off);
			var tkeyw = bin.readUTF8(data, off, nz-off);  off = nz + 1;
			var text  = bin.readUTF8(data, off, len-(off-offset));
			out.tabs[type][keyw] = text;
		}
		else if(type=="PLTE") {
			out.tabs[type] = bin.readBytes(data, offset, len);
		}
		else if(type=="hIST") {
			var pl = out.tabs["PLTE"].length/3;
			out.tabs[type] = [];  for(var i=0; i<pl; i++) out.tabs[type].push(rUs(data, offset+i*2));
		}
		else if(type=="tRNS") {
			if     (out.ctype==3) out.tabs[type] = bin.readBytes(data, offset, len);
			else if(out.ctype==0) out.tabs[type] = rUs(data, offset);
			else if(out.ctype==2) out.tabs[type] = [ rUs(data,offset),rUs(data,offset+2),rUs(data,offset+4) ];
			//else console.log("tRNS for unsupported color type",out.ctype, len);
		}
		else if(type=="gAMA") out.tabs[type] = bin.readUint(data, offset)/100000;
		else if(type=="sRGB") out.tabs[type] = data[offset];
		else if(type=="bKGD")
		{
			if     (out.ctype==0 || out.ctype==4) out.tabs[type] = [rUs(data, offset)];
			else if(out.ctype==2 || out.ctype==6) out.tabs[type] = [rUs(data, offset), rUs(data, offset+2), rUs(data, offset+4)];
			else if(out.ctype==3) out.tabs[type] = data[offset];
		}
		else if(type=="IEND") {
			if(foff!=0) {  var fr = out.frames[out.frames.length-1];
				fr.data = UPNG.decode._decompress(out, fd.slice(0,foff), fr.rect.width, fr.rect.height);  foff=0;
			}	
			out.data = UPNG.decode._decompress(out, dd, out.width, out.height);  break;
		}
		//else {  log("unknown chunk type", type, len);  }
		offset += len;
		var crc = bin.readUint(data, offset);  offset += 4;
	}
	delete out.compress;  delete out.interlace;  delete out.filter;
	return out;
}

UPNG.decode._decompress = function(out, dd, w, h) {
	if(out.compress ==0) dd = UPNG.decode._inflate(dd);

	if     (out.interlace==0) dd = UPNG.decode._filterZero(dd, out, 0, w, h);
	else if(out.interlace==1) dd = UPNG.decode._readInterlace(dd, out);
	return dd;
}

UPNG.decode._inflate = function(data) {  return pako["inflate"](data);  }

UPNG.decode._readInterlace = function(data, out)
{
	var w = out.width, h = out.height;
	var bpp = UPNG.decode._getBPP(out), cbpp = bpp>>3, bpl = Math.ceil(w*bpp/8);
	var img = new Uint8Array( h * bpl );
	var di = 0;

	var starting_row  = [ 0, 0, 4, 0, 2, 0, 1 ];
	var starting_col  = [ 0, 4, 0, 2, 0, 1, 0 ];
	var row_increment = [ 8, 8, 8, 4, 4, 2, 2 ];
	var col_increment = [ 8, 8, 4, 4, 2, 2, 1 ];

	var pass=0;
	while(pass<7)
	{
		var ri = row_increment[pass], ci = col_increment[pass];
		var sw = 0, sh = 0;
		var cr = starting_row[pass];  while(cr<h) {  cr+=ri;  sh++;  }
		var cc = starting_col[pass];  while(cc<w) {  cc+=ci;  sw++;  }
		var bpll = Math.ceil(sw*bpp/8);
		UPNG.decode._filterZero(data, out, di, sw, sh);

		var y=0, row = starting_row[pass];
		while(row<h)
		{
			var col = starting_col[pass];
			var cdi = (di+y*bpll)<<3;

			while(col<w)
			{
				if(bpp==1) {
					var val = data[cdi>>3];  val = (val>>(7-(cdi&7)))&1;
					img[row*bpl + (col>>3)] |= (val << (7-((col&3)<<0)));
				}
				if(bpp==2) {
					var val = data[cdi>>3];  val = (val>>(6-(cdi&7)))&3;
					img[row*bpl + (col>>2)] |= (val << (6-((col&3)<<1)));
				}
				if(bpp==4) {
					var val = data[cdi>>3];  val = (val>>(4-(cdi&7)))&15;
					img[row*bpl + (col>>1)] |= (val << (4-((col&1)<<2)));
				}
				if(bpp>=8) {
					var ii = row*bpl+col*cbpp;
					for(var j=0; j<cbpp; j++) img[ii+j] = data[(cdi>>3)+j];
				}
				cdi+=bpp;  col+=ci;
			}
			y++;  row += ri;
		}
		if(sw*sh!=0) di += sh * (1 + bpll);
		pass = pass + 1;
	}
	return img;
}

UPNG.decode._getBPP = function(out) {
	var noc = [1,null,3,1,2,null,4][out.ctype];
	return noc * out.depth;
}

UPNG.decode._filterZero = function(data, out, off, w, h)
{
	var bpp = UPNG.decode._getBPP(out), bpl = Math.ceil(w*bpp/8), paeth = UPNG.decode._paeth;
	bpp = Math.ceil(bpp/8);

	for(var y=0; y<h; y++)  {
		var i = off+y*bpl, di = i+y+1;
		var type = data[di-1];

		if     (type==0) for(var x=  0; x<bpl; x++) data[i+x] = data[di+x];
		else if(type==1) {
			for(var x=  0; x<bpp; x++) data[i+x] = data[di+x];
			for(var x=bpp; x<bpl; x++) data[i+x] = (data[di+x] + data[i+x-bpp])&255;
		}
		else if(y==0) {
			for(var x=  0; x<bpp; x++) data[i+x] = data[di+x];
			if(type==2) for(var x=bpp; x<bpl; x++) data[i+x] = (data[di+x])&255;
			if(type==3) for(var x=bpp; x<bpl; x++) data[i+x] = (data[di+x] + (data[i+x-bpp]>>1) )&255;
			if(type==4) for(var x=bpp; x<bpl; x++) data[i+x] = (data[di+x] + paeth(data[i+x-bpp], 0, 0) )&255;
		}
		else {
			if(type==2) { for(var x=  0; x<bpl; x++) data[i+x] = (data[di+x] + data[i+x-bpl])&255;  }

			if(type==3) { for(var x=  0; x<bpp; x++) data[i+x] = (data[di+x] + (data[i+x-bpl]>>1))&255;
			              for(var x=bpp; x<bpl; x++) data[i+x] = (data[di+x] + ((data[i+x-bpl]+data[i+x-bpp])>>1) )&255;  }

			if(type==4) { for(var x=  0; x<bpp; x++) data[i+x] = (data[di+x] + paeth(0, data[i+x-bpl], 0))&255;
						  for(var x=bpp; x<bpl; x++) data[i+x] = (data[di+x] + paeth(data[i+x-bpp], data[i+x-bpl], data[i+x-bpp-bpl]) )&255;  }
		}
	}
	return data;
}

UPNG.decode._paeth = function(a,b,c)
{
	var p = a+b-c, pa = Math.abs(p-a), pb = Math.abs(p-b), pc = Math.abs(p-c);
	if (pa <= pb && pa <= pc)  return a;
	else if (pb <= pc)  return b;
	return c;
}

UPNG.decode._IHDR = function(data, offset, out)
{
	var bin = UPNG._bin;
	out.width  = bin.readUint(data, offset);  offset += 4;
	out.height = bin.readUint(data, offset);  offset += 4;
	out.depth     = data[offset];  offset++;
	out.ctype     = data[offset];  offset++;
	out.compress  = data[offset];  offset++;
	out.filter    = data[offset];  offset++;
	out.interlace = data[offset];  offset++;
}

UPNG._bin = {
	nextZero   : function(data,p)  {  while(data[p]!=0) p++;  return p;  },
	readUshort : function(buff,p)  {  return (buff[p]<< 8) | buff[p+1];  },
	writeUshort: function(buff,p,n){  buff[p] = (n>>8)&255;  buff[p+1] = n&255;  },
	readUint   : function(buff,p)  {  return (buff[p]*(256*256*256)) + ((buff[p+1]<<16) | (buff[p+2]<< 8) | buff[p+3]);  },
	writeUint  : function(buff,p,n){  buff[p]=(n>>24)&255;  buff[p+1]=(n>>16)&255;  buff[p+2]=(n>>8)&255;  buff[p+3]=n&255;  },
	readASCII  : function(buff,p,l){  var s = "";  for(var i=0; i<l; i++) s += String.fromCharCode(buff[p+i]);  return s;    },
	writeASCII : function(data,p,s){  for(var i=0; i<s.length; i++) data[p+i] = s.charCodeAt(i);  },
	readBytes  : function(buff,p,l){  var arr = [];   for(var i=0; i<l; i++) arr.push(buff[p+i]);   return arr;  },
	pad : function(n) { return n.length < 2 ? "0" + n : n; },
	readUTF8 : function(buff, p, l) {
		var s = "", ns;
		for(var i=0; i<l; i++) s += "%" + UPNG._bin.pad(buff[p+i].toString(16));
		try {  ns = decodeURIComponent(s); }
		catch(e) {  return UPNG._bin.readASCII(buff, p, l);  }
		return  ns;
	}
}
UPNG._copyTile = function(sb, sw, sh, tb, tw, th, xoff, yoff, mode)
{
	var w = Math.min(sw,tw), h = Math.min(sh,th);
	var si=0, ti=0;
	for(var y=0; y<h; y++)
		for(var x=0; x<w; x++)
		{
			if(xoff>=0 && yoff>=0) {  si = (y*sw+x)<<2;  ti = (( yoff+y)*tw+xoff+x)<<2;  }
			else                   {  si = ((-yoff+y)*sw-xoff+x)<<2;  ti = (y*tw+x)<<2;  }
			
			if     (mode==0) {  tb[ti] = sb[si];  tb[ti+1] = sb[si+1];  tb[ti+2] = sb[si+2];  tb[ti+3] = sb[si+3];  }
			else if(mode==1) {
				var fa = sb[si+3]*(1/255), fr=sb[si]*fa, fg=sb[si+1]*fa, fb=sb[si+2]*fa; 
				var ba = tb[ti+3]*(1/255), br=tb[ti]*ba, bg=tb[ti+1]*ba, bb=tb[ti+2]*ba; 
				
				var ifa=1-fa, oa = fa+ba*ifa, ioa = (oa==0?0:1/oa);
				tb[ti+3] = 255*oa;  
				tb[ti+0] = (fr+br*ifa)*ioa;  
				tb[ti+1] = (fg+bg*ifa)*ioa;   
				tb[ti+2] = (fb+bb*ifa)*ioa;  
			}
			else if(mode==2){	// copy only differences, otherwise zero
				var fa = sb[si+3], fr=sb[si], fg=sb[si+1], fb=sb[si+2]; 
				var ba = tb[ti+3], br=tb[ti], bg=tb[ti+1], bb=tb[ti+2]; 
				if(fa==ba && fr==br && fg==bg && fb==bb) {  tb[ti]=0;  tb[ti+1]=0;  tb[ti+2]=0;  tb[ti+3]=0;  }
				else {  tb[ti]=fr;  tb[ti+1]=fg;  tb[ti+2]=fb;  tb[ti+3]=fa;  }
			}
			else if(mode==3){	// check if can be blended
				var fa = sb[si+3], fr=sb[si], fg=sb[si+1], fb=sb[si+2]; 
				var ba = tb[ti+3], br=tb[ti], bg=tb[ti+1], bb=tb[ti+2]; 
				if(fa==ba && fr==br && fg==bg && fb==bb) continue;
				//if(fa!=255 && ba!=0) return false;
				if(fa<220 && ba>20) return false;
			}
		}
	return true;
}



UPNG.encode = function(bufs, w, h, ps, dels, forbidPlte)
{
	if(ps==null) ps=0;
	if(forbidPlte==null) forbidPlte = false;
	var data = new Uint8Array(bufs[0].byteLength*bufs.length+100);
	var wr=[0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a];
	for(var i=0; i<8; i++) data[i]=wr[i];
	var offset = 8,  bin = UPNG._bin, crc = UPNG.crc.crc, wUi = bin.writeUint, wUs = bin.writeUshort, wAs = bin.writeASCII;

	var nimg = UPNG.encode.compressPNG(bufs, w, h, ps, forbidPlte);

	wUi(data,offset, 13);     offset+=4;
	wAs(data,offset,"IHDR");  offset+=4;
	wUi(data,offset,w);  offset+=4;
	wUi(data,offset,h);  offset+=4;
	data[offset] = nimg.depth;  offset++;  // depth
	data[offset] = nimg.ctype;  offset++;  // ctype
	data[offset] = 0;  offset++;  // compress
	data[offset] = 0;  offset++;  // filter
	data[offset] = 0;  offset++;  // interlace
	wUi(data,offset,crc(data,offset-17,17));  offset+=4; // crc

	// 9 bytes to say, that it is sRGB
	wUi(data,offset, 1);      offset+=4;
	wAs(data,offset,"sRGB");  offset+=4;
	data[offset] = 1;  offset++;
	wUi(data,offset,crc(data,offset-5,5));  offset+=4; // crc

	var anim = bufs.length>1;
	if(anim) {
		wUi(data,offset, 8);      offset+=4;
		wAs(data,offset,"acTL");  offset+=4;
		wUi(data,offset, bufs.length);      offset+=4;
		wUi(data,offset, 0);      offset+=4;
		wUi(data,offset,crc(data,offset-12,12));  offset+=4; // crc
	}

	if(nimg.ctype==3) {
		var dl = nimg.plte.length;
		wUi(data,offset, dl*3);  offset+=4;
		wAs(data,offset,"PLTE");  offset+=4;
		for(var i=0; i<dl; i++){
			var ti=i*3, c=nimg.plte[i], r=(c)&255, g=(c>>8)&255, b=(c>>16)&255;
			data[offset+ti+0]=r;  data[offset+ti+1]=g;  data[offset+ti+2]=b;
		}
		offset+=dl*3;
		wUi(data,offset,crc(data,offset-dl*3-4,dl*3+4));  offset+=4; // crc

		if(nimg.gotAlpha) {
			wUi(data,offset, dl);  offset+=4;
			wAs(data,offset,"tRNS");  offset+=4;
			for(var i=0; i<dl; i++)  data[offset+i]=(nimg.plte[i]>>24)&255;
			offset+=dl;
			wUi(data,offset,crc(data,offset-dl-4,dl+4));  offset+=4; // crc
		}
	}
	
	var fi = 0;
	for(var j=0; j<nimg.frames.length; j++)
	{
		var fr = nimg.frames[j];
		if(anim) {
			wUi(data,offset, 26);     offset+=4;
			wAs(data,offset,"fcTL");  offset+=4;
			wUi(data, offset, fi++);   offset+=4;
			wUi(data, offset, fr.rect.width );   offset+=4;
			wUi(data, offset, fr.rect.height);   offset+=4;
			wUi(data, offset, fr.rect.x);   offset+=4;
			wUi(data, offset, fr.rect.y);   offset+=4;
			wUs(data, offset, dels[j]);   offset+=2;
			wUs(data, offset,  1000);   offset+=2;
			data[offset] = fr.dispose;  offset++;	// dispose
			data[offset] = fr.blend  ;  offset++;	// blend
			wUi(data,offset,crc(data,offset-30,30));  offset+=4; // crc
		}
				
		var imgd = fr.cimg, dl = imgd.length;
		wUi(data,offset, dl+(j==0?0:4));     offset+=4;
		var ioff = offset;
		wAs(data,offset,(j==0)?"IDAT":"fdAT");  offset+=4;
		if(j!=0) {  wUi(data, offset, fi++);  offset+=4;  }
		for(var i=0; i<dl; i++) data[offset+i] = imgd[i];
		offset += dl;
		wUi(data,offset,crc(data,ioff,offset-ioff));  offset+=4; // crc
	}

	wUi(data,offset, 0);     offset+=4;
	wAs(data,offset,"IEND");  offset+=4;
	wUi(data,offset,crc(data,offset-4,4));  offset+=4; // crc

	return data.buffer.slice(0,offset);
}

UPNG.encode.compressPNG = function(bufs, w, h, ps, forbidPlte)
{
	var out = UPNG.encode.compress(bufs, w, h, ps, false, forbidPlte);
	for(var i=0; i<bufs.length; i++) {
		var frm = out.frames[i], nw=frm.rect.width, nh=frm.rect.height, bpl=frm.bpl, bpp=frm.bpp;
		var fdata = new Uint8Array(nh*bpl+nh);
		frm.cimg = UPNG.encode._filterZero(frm.img,nh,bpp,bpl,fdata);
	}	
	return out;
}

UPNG.encode.compress = function(bufs, w, h, ps, forGIF, forbidPlte)
{
	if(forbidPlte==null) forbidPlte = false;
	
	var ctype = 6, depth = 8, bpp = 4, alphaAnd=255
	
	for(var j=0; j<bufs.length; j++)  {  // when not quantized, other frames can contain colors, that are not in an initial frame
		var img = new Uint8Array(bufs[j]), ilen = img.length;
		for(var i=0; i<ilen; i+=4) alphaAnd &= img[i+3];
	}
	var gotAlpha = (alphaAnd)!=255;
	
	var cmap={}, plte=[];  if(bufs.length!=0) {  cmap[0]=0;  plte.push(0);  if(ps!=0) ps--;  } 
	
	
	if(ps!=0) {
		var qres = UPNG.quantize(bufs, ps, forGIF);  bufs = qres.bufs;
		for(var i=0; i<qres.plte.length; i++) {  var c=qres.plte[i].est.rgba;  if(cmap[c]==null) {  cmap[c]=plte.length;  plte.push(c);  }     }
	}
	else {
		// what if ps==0, but there are <=256 colors?  we still need to detect, if the palette could be used
		for(var j=0; j<bufs.length; j++)  {  // when not quantized, other frames can contain colors, that are not in an initial frame
			var img32 = new Uint32Array(bufs[j]), ilen = img32.length;
			for(var i=0; i<ilen; i++) {
				var c = img32[i];
				if((i<w || (c!=img32[i-1] && c!=img32[i-w])) && cmap[c]==null) {  cmap[c]=plte.length;  plte.push(c);  if(plte.length>=300) break;  }
			}
		}
	}
	
	var brute = gotAlpha ? forGIF : false;		// brute : frames can only be copied, not "blended"
	var cc=plte.length;  //console.log(cc);
	if(cc<=256 && forbidPlte==false) {
		if(cc<= 2) depth=1;  else if(cc<= 4) depth=2;  else if(cc<=16) depth=4;  else depth=8;
		if(forGIF) depth=8;
		gotAlpha = true;
	}
	
	
	var frms = [];
	for(var j=0; j<bufs.length; j++)
	{
		var cimg = new Uint8Array(bufs[j]), cimg32 = new Uint32Array(cimg.buffer);
		
		var nx=0, ny=0, nw=w, nh=h, blend=0;
		if(j!=0 && !brute) {
			var tlim = (forGIF || j==1 || frms[frms.length-2].dispose==2)?1:2, tstp = 0, tarea = 1e9;
			for(var it=0; it<tlim; it++)
			{
				var pimg = new Uint8Array(bufs[j-1-it]), p32 = new Uint32Array(bufs[j-1-it]);
				var mix=w,miy=h,max=-1,may=-1;
				for(var y=0; y<h; y++) for(var x=0; x<w; x++) {
					var i = y*w+x;
					if(cimg32[i]!=p32[i]) {
						if(x<mix) mix=x;  if(x>max) max=x;
						if(y<miy) miy=y;  if(y>may) may=y;
					}
				}
				var sarea = (max==-1) ? 1 : (max-mix+1)*(may-miy+1);
				if(sarea<tarea) {
					tarea = sarea;  tstp = it;  
					if(max==-1) {  nx=ny=0;  nw=nh=1;  }
					else {  nx = mix; ny = miy; nw = max-mix+1; nh = may-miy+1;  }
				}
			}
			
			var pimg = new Uint8Array(bufs[j-1-tstp]);
			if(tstp==1) frms[frms.length-1].dispose = 2;
			
			var nimg = new Uint8Array(nw*nh*4), nimg32 = new Uint32Array(nimg.buffer);
			UPNG.   _copyTile(pimg,w,h, nimg,nw,nh, -nx,-ny, 0);
			if(UPNG._copyTile(cimg,w,h, nimg,nw,nh, -nx,-ny, 3)) {
				UPNG._copyTile(cimg,w,h, nimg,nw,nh, -nx,-ny, 2);  blend = 1;
			}
			else {
				UPNG._copyTile(cimg,w,h, nimg,nw,nh, -nx,-ny, 0);  blend = 0;
			}
			cimg = nimg;  cimg32 = new Uint32Array(cimg.buffer);
		}
		var bpl = 4*nw;
		if(cc<=256 && forbidPlte==false) {
			bpl = Math.ceil(depth*nw/8);
			var nimg = new Uint8Array(bpl*nh);
			for(var y=0; y<nh; y++) {  var i=y*bpl, ii=y*nw;
				if     (depth==8) for(var x=0; x<nw; x++) nimg[i+(x)   ]   =  (cmap[cimg32[ii+x]]             );
				else if(depth==4) for(var x=0; x<nw; x++) nimg[i+(x>>1)]  |=  (cmap[cimg32[ii+x]]<<(4-(x&1)*4));
				else if(depth==2) for(var x=0; x<nw; x++) nimg[i+(x>>2)]  |=  (cmap[cimg32[ii+x]]<<(6-(x&3)*2));
				else if(depth==1) for(var x=0; x<nw; x++) nimg[i+(x>>3)]  |=  (cmap[cimg32[ii+x]]<<(7-(x&7)*1));
			}
			cimg=nimg;  ctype=3;  bpp=1;
		}
		else if(gotAlpha==false && bufs.length==1) {	// some next "reduced" frames may contain alpha for blending
			var nimg = new Uint8Array(nw*nh*3), area=nw*nh;
			for(var i=0; i<area; i++) { var ti=i*3, qi=i*4;  nimg[ti]=cimg[qi];  nimg[ti+1]=cimg[qi+1];  nimg[ti+2]=cimg[qi+2];  }
			cimg=nimg;  ctype=2;  bpp=3;  bpl=3*nw;
		}
		frms.push({rect:{x:nx,y:ny,width:nw,height:nh}, img:cimg, bpl:bpl, bpp:bpp, blend:blend, dispose:brute?1:0});
	}
	return {ctype:ctype, depth:depth, plte:plte, gotAlpha:gotAlpha, frames:frms  };
}

UPNG.encode._filterZero = function(img,h,bpp,bpl,data)
{
	var fls = [];
	for(var t=0; t<5; t++) {  if(h*bpl>500000 && (t==2 || t==3 || t==4)) continue;
		for(var y=0; y<h; y++) UPNG.encode._filterLine(data, img, y, bpl, bpp, t);
		fls.push(pako["deflate"](data));  if(bpp==1) break;
	}
	var ti, tsize=1e9;
	for(var i=0; i<fls.length; i++) if(fls[i].length<tsize) {  ti=i;  tsize=fls[i].length;  }
	return fls[ti];
}
UPNG.encode._filterLine = function(data, img, y, bpl, bpp, type)
{
	var i = y*bpl, di = i+y, paeth = UPNG.decode._paeth
	data[di]=type;  di++;

	if(type==0) for(var x=0; x<bpl; x++) data[di+x] = img[i+x];
	else if(type==1) {
		for(var x=  0; x<bpp; x++) data[di+x] =  img[i+x];
		for(var x=bpp; x<bpl; x++) data[di+x] = (img[i+x]-img[i+x-bpp]+256)&255;
	}
	else if(y==0) {
		for(var x=  0; x<bpp; x++) data[di+x] = img[i+x];

		if(type==2) for(var x=bpp; x<bpl; x++) data[di+x] = img[i+x];
		if(type==3) for(var x=bpp; x<bpl; x++) data[di+x] = (img[i+x] - (img[i+x-bpp]>>1) +256)&255;
		if(type==4) for(var x=bpp; x<bpl; x++) data[di+x] = (img[i+x] - paeth(img[i+x-bpp], 0, 0) +256)&255;
	}
	else {
		if(type==2) { for(var x=  0; x<bpl; x++) data[di+x] = (img[i+x]+256 - img[i+x-bpl])&255;  }
		if(type==3) { for(var x=  0; x<bpp; x++) data[di+x] = (img[i+x]+256 - (img[i+x-bpl]>>1))&255;
					  for(var x=bpp; x<bpl; x++) data[di+x] = (img[i+x]+256 - ((img[i+x-bpl]+img[i+x-bpp])>>1))&255;  }
		if(type==4) { for(var x=  0; x<bpp; x++) data[di+x] = (img[i+x]+256 - paeth(0, img[i+x-bpl], 0))&255;
					  for(var x=bpp; x<bpl; x++) data[di+x] = (img[i+x]+256 - paeth(img[i+x-bpp], img[i+x-bpl], img[i+x-bpp-bpl]))&255;  }
	}
}

UPNG.crc = {
	table : ( function() {
	   var tab = new Uint32Array(256);
	   for (var n=0; n<256; n++) {
			var c = n;
			for (var k=0; k<8; k++) {
				if (c & 1)  c = 0xedb88320 ^ (c >>> 1);
				else        c = c >>> 1;
			}
			tab[n] = c;  }
		return tab;  })(),
	update : function(c, buf, off, len) {
		for (var i=0; i<len; i++)  c = UPNG.crc.table[(c ^ buf[off+i]) & 0xff] ^ (c >>> 8);
		return c;
	},
	crc : function(b,o,l)  {  return UPNG.crc.update(0xffffffff,b,o,l) ^ 0xffffffff;  }
}


UPNG.quantize = function(bufs, ps, roundAlpha)
{	
	var imgs = [], totl = 0;
	for(var i=0; i<bufs.length; i++) {  imgs.push(UPNG.encode.alphaMul(new Uint8Array(bufs[i]), roundAlpha));  totl+=bufs[i].byteLength;  }
	
	var nimg = new Uint8Array(totl), nimg32 = new Uint32Array(nimg.buffer), noff=0;
	for(var i=0; i<imgs.length; i++) {
		var img = imgs[i], il = img.length;
		for(var j=0; j<il; j++) nimg[noff+j] = img[j];
		noff += il;
	}
	
	var root = {i0:0, i1:nimg.length, bst:null, est:null, tdst:0, left:null, right:null };  // basic statistic, extra statistic
	root.bst = UPNG.quantize.stats(  nimg,root.i0, root.i1  );  root.est = UPNG.quantize.estats( root.bst );
	var leafs = [root];
	
	while(leafs.length<ps)
	{
		var maxL = 0, mi=0;
		for(var i=0; i<leafs.length; i++) if(leafs[i].est.L > maxL) {  maxL=leafs[i].est.L;  mi=i;  }
		if(maxL<1e-3) break;
		var node = leafs[mi];
		
		var s0 = UPNG.quantize.splitPixels(nimg,nimg32, node.i0, node.i1, node.est.e, node.est.eMq255);
		
		var ln = {i0:node.i0, i1:s0, bst:null, est:null, tdst:0, left:null, right:null };  ln.bst = UPNG.quantize.stats( nimg, ln.i0, ln.i1 );  
		ln.est = UPNG.quantize.estats( ln.bst );
		var rn = {i0:s0, i1:node.i1, bst:null, est:null, tdst:0, left:null, right:null };  rn.bst = {R:[], m:[], N:node.bst.N-ln.bst.N};
		for(var i=0; i<16; i++) rn.bst.R[i] = node.bst.R[i]-ln.bst.R[i];
		for(var i=0; i< 4; i++) rn.bst.m[i] = node.bst.m[i]-ln.bst.m[i];
		rn.est = UPNG.quantize.estats( rn.bst );
		
		node.left = ln;  node.right = rn;
		leafs[mi]=ln;  leafs.push(rn);
	}
	leafs.sort(function(a,b) {  return b.bst.N-a.bst.N;  });
	
	for(var ii=0; ii<imgs.length; ii++) {
		var planeDst = UPNG.quantize.planeDst;
		var sb = new Uint8Array(imgs[ii].buffer), tb = new Uint32Array(imgs[ii].buffer), len = sb.length;
		
		var stack = [], si=0;
		for(var i=0; i<len; i+=4) {
			var r=sb[i]*(1/255), g=sb[i+1]*(1/255), b=sb[i+2]*(1/255), a=sb[i+3]*(1/255);
			
			//  exact, but too slow :(
			//var nd = UPNG.quantize.getNearest(root, r, g, b, a);
			var nd = root;
			while(nd.left) nd = (planeDst(nd.est,r,g,b,a)<=0) ? nd.left : nd.right;
			
			tb[i>>2] = nd.est.rgba;
		}
		imgs[ii]=tb.buffer;
	}
	return {  bufs:imgs, plte:leafs  };
}
UPNG.quantize.getNearest = function(nd, r,g,b,a)
{
	if(nd.left==null) {  nd.tdst = UPNG.quantize.dist(nd.est.q,r,g,b,a);  return nd;  }
	var planeDst = UPNG.quantize.planeDst(nd.est,r,g,b,a);
	
	var node0 = nd.left, node1 = nd.right;
	if(planeDst>0) {  node0=nd.right;  node1=nd.left;  }
	
	var ln = UPNG.quantize.getNearest(node0, r,g,b,a);
	if(ln.tdst<=planeDst*planeDst) return ln;
	var rn = UPNG.quantize.getNearest(node1, r,g,b,a);
	return rn.tdst<ln.tdst ? rn : ln;
}
UPNG.quantize.planeDst = function(est, r,g,b,a) {  var e = est.e;  return e[0]*r + e[1]*g + e[2]*b + e[3]*a - est.eMq;  }
UPNG.quantize.dist     = function(q,   r,g,b,a) {  var d0=r-q[0], d1=g-q[1], d2=b-q[2], d3=a-q[3];  return d0*d0+d1*d1+d2*d2+d3*d3;  }

UPNG.quantize.splitPixels = function(nimg, nimg32, i0, i1, e, eMq)
{
	var vecDot = UPNG.quantize.vecDot;
	i1-=4;
	var shfs = 0;
	while(i0<i1)
	{
		while(vecDot(nimg, i0, e)<=eMq) i0+=4;
		while(vecDot(nimg, i1, e)> eMq) i1-=4;
		if(i0>=i1) break;
		
		var t = nimg32[i0>>2];  nimg32[i0>>2] = nimg32[i1>>2];  nimg32[i1>>2]=t;
		
		i0+=4;  i1-=4;
	}
	while(vecDot(nimg, i0, e)>eMq) i0-=4;
	return i0+4;
}
UPNG.quantize.vecDot = function(nimg, i, e)
{
	return nimg[i]*e[0] + nimg[i+1]*e[1] + nimg[i+2]*e[2] + nimg[i+3]*e[3];
}
UPNG.quantize.stats = function(nimg, i0, i1){
	var R = [0,0,0,0,  0,0,0,0,  0,0,0,0,  0,0,0,0];
	var m = [0,0,0,0];
	var N = (i1-i0)>>2;
	for(var i=i0; i<i1; i+=4)
	{
		var r = nimg[i]*(1/255), g = nimg[i+1]*(1/255), b = nimg[i+2]*(1/255), a = nimg[i+3]*(1/255);
		//var r = nimg[i], g = nimg[i+1], b = nimg[i+2], a = nimg[i+3];
		m[0]+=r;  m[1]+=g;  m[2]+=b;  m[3]+=a;
		
		R[ 0] += r*r;  R[ 1] += r*g;  R[ 2] += r*b;  R[ 3] += r*a;  
		               R[ 5] += g*g;  R[ 6] += g*b;  R[ 7] += g*a; 
		                              R[10] += b*b;  R[11] += b*a;  
		                                             R[15] += a*a;  
	}
	R[4]=R[1];  R[8]=R[2];  R[12]=R[3];  R[9]=R[6];  R[13]=R[7];  R[14]=R[11];
	
	return {R:R, m:m, N:N};
}
UPNG.quantize.estats = function(stats){
	var R = stats.R, m = stats.m, N = stats.N;
	
	var m0 = m[0], m1 = m[1], m2 = m[2], m3 = m[3], iN = (N==0 ? 0 : 1/N);
	var Rj = [
		R[ 0] - m0*m0*iN,  R[ 1] - m0*m1*iN,  R[ 2] - m0*m2*iN,  R[ 3] - m0*m3*iN,  
		R[ 4] - m1*m0*iN,  R[ 5] - m1*m1*iN,  R[ 6] - m1*m2*iN,  R[ 7] - m1*m3*iN,
		R[ 8] - m2*m0*iN,  R[ 9] - m2*m1*iN,  R[10] - m2*m2*iN,  R[11] - m2*m3*iN,  
		R[12] - m3*m0*iN,  R[13] - m3*m1*iN,  R[14] - m3*m2*iN,  R[15] - m3*m3*iN 
	];
	
	var A = Rj, M = UPNG.M4;
	var b = [0.5,0.5,0.5,0.5], mi = 0, tmi = 0;
	
	if(N!=0)
	for(var i=0; i<10; i++) {
		b = M.multVec(A, b);  tmi = Math.sqrt(M.dot(b,b));  b = M.sml(1/tmi,  b);
		if(Math.abs(tmi-mi)<1e-9) break;  mi = tmi;
	}	
	//b = [0,0,1,0];  mi=N;
	var q = [m0*iN, m1*iN, m2*iN, m3*iN];
	var eMq255 = M.dot(M.sml(255,q),b);
	
	var ia = (q[3]<0.001) ? 0 : 1/q[3];
	
	return {  Cov:Rj, q:q, e:b, L:mi,  eMq255:eMq255, eMq : M.dot(b,q),
				rgba: (((Math.round(255*q[3])<<24) | (Math.round(255*q[2]*ia)<<16) |  (Math.round(255*q[1]*ia)<<8) | (Math.round(255*q[0]*ia)<<0))>>>0)  };
}
UPNG.M4 = {
	multVec : function(m,v) {
			return [
				m[ 0]*v[0] + m[ 1]*v[1] + m[ 2]*v[2] + m[ 3]*v[3],
				m[ 4]*v[0] + m[ 5]*v[1] + m[ 6]*v[2] + m[ 7]*v[3],
				m[ 8]*v[0] + m[ 9]*v[1] + m[10]*v[2] + m[11]*v[3],
				m[12]*v[0] + m[13]*v[1] + m[14]*v[2] + m[15]*v[3]
			];
	},
	dot : function(x,y) {  return  x[0]*y[0]+x[1]*y[1]+x[2]*y[2]+x[3]*y[3];  },
	sml : function(a,y) {  return [a*y[0],a*y[1],a*y[2],a*y[3]];  }
}

UPNG.encode.alphaMul = function(img, roundA) {
	var nimg = new Uint8Array(img.length), area = img.length>>2; 
	for(var i=0; i<area; i++) {
		var qi=i<<2, ia=img[qi+3];   
		if(roundA) ia = ((ia<128))?0:255;
		var a = ia*(1/255);
		nimg[qi+0] = img[qi+0]*a;  nimg[qi+1] = img[qi+1]*a;  nimg[qi+2] = img[qi+2]*a;  nimg[qi+3] = ia;
	}
	return nimg;
}

	
	
	
	
	


})(UPNG, pako);
})();


}).call(this)}).call(this,require('_process'))

},{"_process":10,"pako":13}],13:[function(require,module,exports){
// Top level file is just a mixin of submodules & constants
'use strict';

var assign    = require('./lib/utils/common').assign;

var deflate   = require('./lib/deflate');
var inflate   = require('./lib/inflate');
var constants = require('./lib/zlib/constants');

var pako = {};

assign(pako, deflate, inflate, constants);

module.exports = pako;

},{"./lib/deflate":14,"./lib/inflate":15,"./lib/utils/common":16,"./lib/zlib/constants":19}],14:[function(require,module,exports){
'use strict';


var zlib_deflate = require('./zlib/deflate');
var utils        = require('./utils/common');
var strings      = require('./utils/strings');
var msg          = require('./zlib/messages');
var ZStream      = require('./zlib/zstream');

var toString = Object.prototype.toString;

/* Public constants ==========================================================*/
/* ===========================================================================*/

var Z_NO_FLUSH      = 0;
var Z_FINISH        = 4;

var Z_OK            = 0;
var Z_STREAM_END    = 1;
var Z_SYNC_FLUSH    = 2;

var Z_DEFAULT_COMPRESSION = -1;

var Z_DEFAULT_STRATEGY    = 0;

var Z_DEFLATED  = 8;

/* ===========================================================================*/


/**
 * class Deflate
 *
 * Generic JS-style wrapper for zlib calls. If you don't need
 * streaming behaviour - use more simple functions: [[deflate]],
 * [[deflateRaw]] and [[gzip]].
 **/

/* internal
 * Deflate.chunks -> Array
 *
 * Chunks of output data, if [[Deflate#onData]] not overridden.
 **/

/**
 * Deflate.result -> Uint8Array|Array
 *
 * Compressed result, generated by default [[Deflate#onData]]
 * and [[Deflate#onEnd]] handlers. Filled after you push last chunk
 * (call [[Deflate#push]] with `Z_FINISH` / `true` param)  or if you
 * push a chunk with explicit flush (call [[Deflate#push]] with
 * `Z_SYNC_FLUSH` param).
 **/

/**
 * Deflate.err -> Number
 *
 * Error code after deflate finished. 0 (Z_OK) on success.
 * You will not need it in real life, because deflate errors
 * are possible only on wrong options or bad `onData` / `onEnd`
 * custom handlers.
 **/

/**
 * Deflate.msg -> String
 *
 * Error message, if [[Deflate.err]] != 0
 **/


/**
 * new Deflate(options)
 * - options (Object): zlib deflate options.
 *
 * Creates new deflator instance with specified params. Throws exception
 * on bad params. Supported options:
 *
 * - `level`
 * - `windowBits`
 * - `memLevel`
 * - `strategy`
 * - `dictionary`
 *
 * [http://zlib.net/manual.html#Advanced](http://zlib.net/manual.html#Advanced)
 * for more information on these.
 *
 * Additional options, for internal needs:
 *
 * - `chunkSize` - size of generated data chunks (16K by default)
 * - `raw` (Boolean) - do raw deflate
 * - `gzip` (Boolean) - create gzip wrapper
 * - `to` (String) - if equal to 'string', then result will be "binary string"
 *    (each char code [0..255])
 * - `header` (Object) - custom header for gzip
 *   - `text` (Boolean) - true if compressed data believed to be text
 *   - `time` (Number) - modification time, unix timestamp
 *   - `os` (Number) - operation system code
 *   - `extra` (Array) - array of bytes with extra data (max 65536)
 *   - `name` (String) - file name (binary string)
 *   - `comment` (String) - comment (binary string)
 *   - `hcrc` (Boolean) - true if header crc should be added
 *
 * ##### Example:
 *
 * ```javascript
 * var pako = require('pako')
 *   , chunk1 = Uint8Array([1,2,3,4,5,6,7,8,9])
 *   , chunk2 = Uint8Array([10,11,12,13,14,15,16,17,18,19]);
 *
 * var deflate = new pako.Deflate({ level: 3});
 *
 * deflate.push(chunk1, false);
 * deflate.push(chunk2, true);  // true -> last chunk
 *
 * if (deflate.err) { throw new Error(deflate.err); }
 *
 * console.log(deflate.result);
 * ```
 **/
function Deflate(options) {
  if (!(this instanceof Deflate)) return new Deflate(options);

  this.options = utils.assign({
    level: Z_DEFAULT_COMPRESSION,
    method: Z_DEFLATED,
    chunkSize: 16384,
    windowBits: 15,
    memLevel: 8,
    strategy: Z_DEFAULT_STRATEGY,
    to: ''
  }, options || {});

  var opt = this.options;

  if (opt.raw && (opt.windowBits > 0)) {
    opt.windowBits = -opt.windowBits;
  }

  else if (opt.gzip && (opt.windowBits > 0) && (opt.windowBits < 16)) {
    opt.windowBits += 16;
  }

  this.err    = 0;      // error code, if happens (0 = Z_OK)
  this.msg    = '';     // error message
  this.ended  = false;  // used to avoid multiple onEnd() calls
  this.chunks = [];     // chunks of compressed data

  this.strm = new ZStream();
  this.strm.avail_out = 0;

  var status = zlib_deflate.deflateInit2(
    this.strm,
    opt.level,
    opt.method,
    opt.windowBits,
    opt.memLevel,
    opt.strategy
  );

  if (status !== Z_OK) {
    throw new Error(msg[status]);
  }

  if (opt.header) {
    zlib_deflate.deflateSetHeader(this.strm, opt.header);
  }

  if (opt.dictionary) {
    var dict;
    // Convert data if needed
    if (typeof opt.dictionary === 'string') {
      // If we need to compress text, change encoding to utf8.
      dict = strings.string2buf(opt.dictionary);
    } else if (toString.call(opt.dictionary) === '[object ArrayBuffer]') {
      dict = new Uint8Array(opt.dictionary);
    } else {
      dict = opt.dictionary;
    }

    status = zlib_deflate.deflateSetDictionary(this.strm, dict);

    if (status !== Z_OK) {
      throw new Error(msg[status]);
    }

    this._dict_set = true;
  }
}

/**
 * Deflate#push(data[, mode]) -> Boolean
 * - data (Uint8Array|Array|ArrayBuffer|String): input data. Strings will be
 *   converted to utf8 byte sequence.
 * - mode (Number|Boolean): 0..6 for corresponding Z_NO_FLUSH..Z_TREE modes.
 *   See constants. Skipped or `false` means Z_NO_FLUSH, `true` means Z_FINISH.
 *
 * Sends input data to deflate pipe, generating [[Deflate#onData]] calls with
 * new compressed chunks. Returns `true` on success. The last data block must have
 * mode Z_FINISH (or `true`). That will flush internal pending buffers and call
 * [[Deflate#onEnd]]. For interim explicit flushes (without ending the stream) you
 * can use mode Z_SYNC_FLUSH, keeping the compression context.
 *
 * On fail call [[Deflate#onEnd]] with error code and return false.
 *
 * We strongly recommend to use `Uint8Array` on input for best speed (output
 * array format is detected automatically). Also, don't skip last param and always
 * use the same type in your code (boolean or number). That will improve JS speed.
 *
 * For regular `Array`-s make sure all elements are [0..255].
 *
 * ##### Example
 *
 * ```javascript
 * push(chunk, false); // push one of data chunks
 * ...
 * push(chunk, true);  // push last chunk
 * ```
 **/
Deflate.prototype.push = function (data, mode) {
  var strm = this.strm;
  var chunkSize = this.options.chunkSize;
  var status, _mode;

  if (this.ended) { return false; }

  _mode = (mode === ~~mode) ? mode : ((mode === true) ? Z_FINISH : Z_NO_FLUSH);

  // Convert data if needed
  if (typeof data === 'string') {
    // If we need to compress text, change encoding to utf8.
    strm.input = strings.string2buf(data);
  } else if (toString.call(data) === '[object ArrayBuffer]') {
    strm.input = new Uint8Array(data);
  } else {
    strm.input = data;
  }

  strm.next_in = 0;
  strm.avail_in = strm.input.length;

  do {
    if (strm.avail_out === 0) {
      strm.output = new utils.Buf8(chunkSize);
      strm.next_out = 0;
      strm.avail_out = chunkSize;
    }
    status = zlib_deflate.deflate(strm, _mode);    /* no bad return value */

    if (status !== Z_STREAM_END && status !== Z_OK) {
      this.onEnd(status);
      this.ended = true;
      return false;
    }
    if (strm.avail_out === 0 || (strm.avail_in === 0 && (_mode === Z_FINISH || _mode === Z_SYNC_FLUSH))) {
      if (this.options.to === 'string') {
        this.onData(strings.buf2binstring(utils.shrinkBuf(strm.output, strm.next_out)));
      } else {
        this.onData(utils.shrinkBuf(strm.output, strm.next_out));
      }
    }
  } while ((strm.avail_in > 0 || strm.avail_out === 0) && status !== Z_STREAM_END);

  // Finalize on the last chunk.
  if (_mode === Z_FINISH) {
    status = zlib_deflate.deflateEnd(this.strm);
    this.onEnd(status);
    this.ended = true;
    return status === Z_OK;
  }

  // callback interim results if Z_SYNC_FLUSH.
  if (_mode === Z_SYNC_FLUSH) {
    this.onEnd(Z_OK);
    strm.avail_out = 0;
    return true;
  }

  return true;
};


/**
 * Deflate#onData(chunk) -> Void
 * - chunk (Uint8Array|Array|String): output data. Type of array depends
 *   on js engine support. When string output requested, each chunk
 *   will be string.
 *
 * By default, stores data blocks in `chunks[]` property and glue
 * those in `onEnd`. Override this handler, if you need another behaviour.
 **/
Deflate.prototype.onData = function (chunk) {
  this.chunks.push(chunk);
};


/**
 * Deflate#onEnd(status) -> Void
 * - status (Number): deflate status. 0 (Z_OK) on success,
 *   other if not.
 *
 * Called once after you tell deflate that the input stream is
 * complete (Z_FINISH) or should be flushed (Z_SYNC_FLUSH)
 * or if an error happened. By default - join collected chunks,
 * free memory and fill `results` / `err` properties.
 **/
Deflate.prototype.onEnd = function (status) {
  // On success - join
  if (status === Z_OK) {
    if (this.options.to === 'string') {
      this.result = this.chunks.join('');
    } else {
      this.result = utils.flattenChunks(this.chunks);
    }
  }
  this.chunks = [];
  this.err = status;
  this.msg = this.strm.msg;
};


/**
 * deflate(data[, options]) -> Uint8Array|Array|String
 * - data (Uint8Array|Array|String): input data to compress.
 * - options (Object): zlib deflate options.
 *
 * Compress `data` with deflate algorithm and `options`.
 *
 * Supported options are:
 *
 * - level
 * - windowBits
 * - memLevel
 * - strategy
 * - dictionary
 *
 * [http://zlib.net/manual.html#Advanced](http://zlib.net/manual.html#Advanced)
 * for more information on these.
 *
 * Sugar (options):
 *
 * - `raw` (Boolean) - say that we work with raw stream, if you don't wish to specify
 *   negative windowBits implicitly.
 * - `to` (String) - if equal to 'string', then result will be "binary string"
 *    (each char code [0..255])
 *
 * ##### Example:
 *
 * ```javascript
 * var pako = require('pako')
 *   , data = Uint8Array([1,2,3,4,5,6,7,8,9]);
 *
 * console.log(pako.deflate(data));
 * ```
 **/
function deflate(input, options) {
  var deflator = new Deflate(options);

  deflator.push(input, true);

  // That will never happens, if you don't cheat with options :)
  if (deflator.err) { throw deflator.msg || msg[deflator.err]; }

  return deflator.result;
}


/**
 * deflateRaw(data[, options]) -> Uint8Array|Array|String
 * - data (Uint8Array|Array|String): input data to compress.
 * - options (Object): zlib deflate options.
 *
 * The same as [[deflate]], but creates raw data, without wrapper
 * (header and adler32 crc).
 **/
function deflateRaw(input, options) {
  options = options || {};
  options.raw = true;
  return deflate(input, options);
}


/**
 * gzip(data[, options]) -> Uint8Array|Array|String
 * - data (Uint8Array|Array|String): input data to compress.
 * - options (Object): zlib deflate options.
 *
 * The same as [[deflate]], but create gzip wrapper instead of
 * deflate one.
 **/
function gzip(input, options) {
  options = options || {};
  options.gzip = true;
  return deflate(input, options);
}


exports.Deflate = Deflate;
exports.deflate = deflate;
exports.deflateRaw = deflateRaw;
exports.gzip = gzip;

},{"./utils/common":16,"./utils/strings":17,"./zlib/deflate":21,"./zlib/messages":26,"./zlib/zstream":28}],15:[function(require,module,exports){
'use strict';


var zlib_inflate = require('./zlib/inflate');
var utils        = require('./utils/common');
var strings      = require('./utils/strings');
var c            = require('./zlib/constants');
var msg          = require('./zlib/messages');
var ZStream      = require('./zlib/zstream');
var GZheader     = require('./zlib/gzheader');

var toString = Object.prototype.toString;

/**
 * class Inflate
 *
 * Generic JS-style wrapper for zlib calls. If you don't need
 * streaming behaviour - use more simple functions: [[inflate]]
 * and [[inflateRaw]].
 **/

/* internal
 * inflate.chunks -> Array
 *
 * Chunks of output data, if [[Inflate#onData]] not overridden.
 **/

/**
 * Inflate.result -> Uint8Array|Array|String
 *
 * Uncompressed result, generated by default [[Inflate#onData]]
 * and [[Inflate#onEnd]] handlers. Filled after you push last chunk
 * (call [[Inflate#push]] with `Z_FINISH` / `true` param) or if you
 * push a chunk with explicit flush (call [[Inflate#push]] with
 * `Z_SYNC_FLUSH` param).
 **/

/**
 * Inflate.err -> Number
 *
 * Error code after inflate finished. 0 (Z_OK) on success.
 * Should be checked if broken data possible.
 **/

/**
 * Inflate.msg -> String
 *
 * Error message, if [[Inflate.err]] != 0
 **/


/**
 * new Inflate(options)
 * - options (Object): zlib inflate options.
 *
 * Creates new inflator instance with specified params. Throws exception
 * on bad params. Supported options:
 *
 * - `windowBits`
 * - `dictionary`
 *
 * [http://zlib.net/manual.html#Advanced](http://zlib.net/manual.html#Advanced)
 * for more information on these.
 *
 * Additional options, for internal needs:
 *
 * - `chunkSize` - size of generated data chunks (16K by default)
 * - `raw` (Boolean) - do raw inflate
 * - `to` (String) - if equal to 'string', then result will be converted
 *   from utf8 to utf16 (javascript) string. When string output requested,
 *   chunk length can differ from `chunkSize`, depending on content.
 *
 * By default, when no options set, autodetect deflate/gzip data format via
 * wrapper header.
 *
 * ##### Example:
 *
 * ```javascript
 * var pako = require('pako')
 *   , chunk1 = Uint8Array([1,2,3,4,5,6,7,8,9])
 *   , chunk2 = Uint8Array([10,11,12,13,14,15,16,17,18,19]);
 *
 * var inflate = new pako.Inflate({ level: 3});
 *
 * inflate.push(chunk1, false);
 * inflate.push(chunk2, true);  // true -> last chunk
 *
 * if (inflate.err) { throw new Error(inflate.err); }
 *
 * console.log(inflate.result);
 * ```
 **/
function Inflate(options) {
  if (!(this instanceof Inflate)) return new Inflate(options);

  this.options = utils.assign({
    chunkSize: 16384,
    windowBits: 0,
    to: ''
  }, options || {});

  var opt = this.options;

  // Force window size for `raw` data, if not set directly,
  // because we have no header for autodetect.
  if (opt.raw && (opt.windowBits >= 0) && (opt.windowBits < 16)) {
    opt.windowBits = -opt.windowBits;
    if (opt.windowBits === 0) { opt.windowBits = -15; }
  }

  // If `windowBits` not defined (and mode not raw) - set autodetect flag for gzip/deflate
  if ((opt.windowBits >= 0) && (opt.windowBits < 16) &&
      !(options && options.windowBits)) {
    opt.windowBits += 32;
  }

  // Gzip header has no info about windows size, we can do autodetect only
  // for deflate. So, if window size not set, force it to max when gzip possible
  if ((opt.windowBits > 15) && (opt.windowBits < 48)) {
    // bit 3 (16) -> gzipped data
    // bit 4 (32) -> autodetect gzip/deflate
    if ((opt.windowBits & 15) === 0) {
      opt.windowBits |= 15;
    }
  }

  this.err    = 0;      // error code, if happens (0 = Z_OK)
  this.msg    = '';     // error message
  this.ended  = false;  // used to avoid multiple onEnd() calls
  this.chunks = [];     // chunks of compressed data

  this.strm   = new ZStream();
  this.strm.avail_out = 0;

  var status  = zlib_inflate.inflateInit2(
    this.strm,
    opt.windowBits
  );

  if (status !== c.Z_OK) {
    throw new Error(msg[status]);
  }

  this.header = new GZheader();

  zlib_inflate.inflateGetHeader(this.strm, this.header);

  // Setup dictionary
  if (opt.dictionary) {
    // Convert data if needed
    if (typeof opt.dictionary === 'string') {
      opt.dictionary = strings.string2buf(opt.dictionary);
    } else if (toString.call(opt.dictionary) === '[object ArrayBuffer]') {
      opt.dictionary = new Uint8Array(opt.dictionary);
    }
    if (opt.raw) { //In raw mode we need to set the dictionary early
      status = zlib_inflate.inflateSetDictionary(this.strm, opt.dictionary);
      if (status !== c.Z_OK) {
        throw new Error(msg[status]);
      }
    }
  }
}

/**
 * Inflate#push(data[, mode]) -> Boolean
 * - data (Uint8Array|Array|ArrayBuffer|String): input data
 * - mode (Number|Boolean): 0..6 for corresponding Z_NO_FLUSH..Z_TREE modes.
 *   See constants. Skipped or `false` means Z_NO_FLUSH, `true` means Z_FINISH.
 *
 * Sends input data to inflate pipe, generating [[Inflate#onData]] calls with
 * new output chunks. Returns `true` on success. The last data block must have
 * mode Z_FINISH (or `true`). That will flush internal pending buffers and call
 * [[Inflate#onEnd]]. For interim explicit flushes (without ending the stream) you
 * can use mode Z_SYNC_FLUSH, keeping the decompression context.
 *
 * On fail call [[Inflate#onEnd]] with error code and return false.
 *
 * We strongly recommend to use `Uint8Array` on input for best speed (output
 * format is detected automatically). Also, don't skip last param and always
 * use the same type in your code (boolean or number). That will improve JS speed.
 *
 * For regular `Array`-s make sure all elements are [0..255].
 *
 * ##### Example
 *
 * ```javascript
 * push(chunk, false); // push one of data chunks
 * ...
 * push(chunk, true);  // push last chunk
 * ```
 **/
Inflate.prototype.push = function (data, mode) {
  var strm = this.strm;
  var chunkSize = this.options.chunkSize;
  var dictionary = this.options.dictionary;
  var status, _mode;
  var next_out_utf8, tail, utf8str;

  // Flag to properly process Z_BUF_ERROR on testing inflate call
  // when we check that all output data was flushed.
  var allowBufError = false;

  if (this.ended) { return false; }
  _mode = (mode === ~~mode) ? mode : ((mode === true) ? c.Z_FINISH : c.Z_NO_FLUSH);

  // Convert data if needed
  if (typeof data === 'string') {
    // Only binary strings can be decompressed on practice
    strm.input = strings.binstring2buf(data);
  } else if (toString.call(data) === '[object ArrayBuffer]') {
    strm.input = new Uint8Array(data);
  } else {
    strm.input = data;
  }

  strm.next_in = 0;
  strm.avail_in = strm.input.length;

  do {
    if (strm.avail_out === 0) {
      strm.output = new utils.Buf8(chunkSize);
      strm.next_out = 0;
      strm.avail_out = chunkSize;
    }

    status = zlib_inflate.inflate(strm, c.Z_NO_FLUSH);    /* no bad return value */

    if (status === c.Z_NEED_DICT && dictionary) {
      status = zlib_inflate.inflateSetDictionary(this.strm, dictionary);
    }

    if (status === c.Z_BUF_ERROR && allowBufError === true) {
      status = c.Z_OK;
      allowBufError = false;
    }

    if (status !== c.Z_STREAM_END && status !== c.Z_OK) {
      this.onEnd(status);
      this.ended = true;
      return false;
    }

    if (strm.next_out) {
      if (strm.avail_out === 0 || status === c.Z_STREAM_END || (strm.avail_in === 0 && (_mode === c.Z_FINISH || _mode === c.Z_SYNC_FLUSH))) {

        if (this.options.to === 'string') {

          next_out_utf8 = strings.utf8border(strm.output, strm.next_out);

          tail = strm.next_out - next_out_utf8;
          utf8str = strings.buf2string(strm.output, next_out_utf8);

          // move tail
          strm.next_out = tail;
          strm.avail_out = chunkSize - tail;
          if (tail) { utils.arraySet(strm.output, strm.output, next_out_utf8, tail, 0); }

          this.onData(utf8str);

        } else {
          this.onData(utils.shrinkBuf(strm.output, strm.next_out));
        }
      }
    }

    // When no more input data, we should check that internal inflate buffers
    // are flushed. The only way to do it when avail_out = 0 - run one more
    // inflate pass. But if output data not exists, inflate return Z_BUF_ERROR.
    // Here we set flag to process this error properly.
    //
    // NOTE. Deflate does not return error in this case and does not needs such
    // logic.
    if (strm.avail_in === 0 && strm.avail_out === 0) {
      allowBufError = true;
    }

  } while ((strm.avail_in > 0 || strm.avail_out === 0) && status !== c.Z_STREAM_END);

  if (status === c.Z_STREAM_END) {
    _mode = c.Z_FINISH;
  }

  // Finalize on the last chunk.
  if (_mode === c.Z_FINISH) {
    status = zlib_inflate.inflateEnd(this.strm);
    this.onEnd(status);
    this.ended = true;
    return status === c.Z_OK;
  }

  // callback interim results if Z_SYNC_FLUSH.
  if (_mode === c.Z_SYNC_FLUSH) {
    this.onEnd(c.Z_OK);
    strm.avail_out = 0;
    return true;
  }

  return true;
};


/**
 * Inflate#onData(chunk) -> Void
 * - chunk (Uint8Array|Array|String): output data. Type of array depends
 *   on js engine support. When string output requested, each chunk
 *   will be string.
 *
 * By default, stores data blocks in `chunks[]` property and glue
 * those in `onEnd`. Override this handler, if you need another behaviour.
 **/
Inflate.prototype.onData = function (chunk) {
  this.chunks.push(chunk);
};


/**
 * Inflate#onEnd(status) -> Void
 * - status (Number): inflate status. 0 (Z_OK) on success,
 *   other if not.
 *
 * Called either after you tell inflate that the input stream is
 * complete (Z_FINISH) or should be flushed (Z_SYNC_FLUSH)
 * or if an error happened. By default - join collected chunks,
 * free memory and fill `results` / `err` properties.
 **/
Inflate.prototype.onEnd = function (status) {
  // On success - join
  if (status === c.Z_OK) {
    if (this.options.to === 'string') {
      // Glue & convert here, until we teach pako to send
      // utf8 aligned strings to onData
      this.result = this.chunks.join('');
    } else {
      this.result = utils.flattenChunks(this.chunks);
    }
  }
  this.chunks = [];
  this.err = status;
  this.msg = this.strm.msg;
};


/**
 * inflate(data[, options]) -> Uint8Array|Array|String
 * - data (Uint8Array|Array|String): input data to decompress.
 * - options (Object): zlib inflate options.
 *
 * Decompress `data` with inflate/ungzip and `options`. Autodetect
 * format via wrapper header by default. That's why we don't provide
 * separate `ungzip` method.
 *
 * Supported options are:
 *
 * - windowBits
 *
 * [http://zlib.net/manual.html#Advanced](http://zlib.net/manual.html#Advanced)
 * for more information.
 *
 * Sugar (options):
 *
 * - `raw` (Boolean) - say that we work with raw stream, if you don't wish to specify
 *   negative windowBits implicitly.
 * - `to` (String) - if equal to 'string', then result will be converted
 *   from utf8 to utf16 (javascript) string. When string output requested,
 *   chunk length can differ from `chunkSize`, depending on content.
 *
 *
 * ##### Example:
 *
 * ```javascript
 * var pako = require('pako')
 *   , input = pako.deflate([1,2,3,4,5,6,7,8,9])
 *   , output;
 *
 * try {
 *   output = pako.inflate(input);
 * } catch (err)
 *   console.log(err);
 * }
 * ```
 **/
function inflate(input, options) {
  var inflator = new Inflate(options);

  inflator.push(input, true);

  // That will never happens, if you don't cheat with options :)
  if (inflator.err) { throw inflator.msg || msg[inflator.err]; }

  return inflator.result;
}


/**
 * inflateRaw(data[, options]) -> Uint8Array|Array|String
 * - data (Uint8Array|Array|String): input data to decompress.
 * - options (Object): zlib inflate options.
 *
 * The same as [[inflate]], but creates raw data, without wrapper
 * (header and adler32 crc).
 **/
function inflateRaw(input, options) {
  options = options || {};
  options.raw = true;
  return inflate(input, options);
}


/**
 * ungzip(data[, options]) -> Uint8Array|Array|String
 * - data (Uint8Array|Array|String): input data to decompress.
 * - options (Object): zlib inflate options.
 *
 * Just shortcut to [[inflate]], because it autodetects format
 * by header.content. Done for convenience.
 **/


exports.Inflate = Inflate;
exports.inflate = inflate;
exports.inflateRaw = inflateRaw;
exports.ungzip  = inflate;

},{"./utils/common":16,"./utils/strings":17,"./zlib/constants":19,"./zlib/gzheader":22,"./zlib/inflate":24,"./zlib/messages":26,"./zlib/zstream":28}],16:[function(require,module,exports){
'use strict';


var TYPED_OK =  (typeof Uint8Array !== 'undefined') &&
                (typeof Uint16Array !== 'undefined') &&
                (typeof Int32Array !== 'undefined');

function _has(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

exports.assign = function (obj /*from1, from2, from3, ...*/) {
  var sources = Array.prototype.slice.call(arguments, 1);
  while (sources.length) {
    var source = sources.shift();
    if (!source) { continue; }

    if (typeof source !== 'object') {
      throw new TypeError(source + 'must be non-object');
    }

    for (var p in source) {
      if (_has(source, p)) {
        obj[p] = source[p];
      }
    }
  }

  return obj;
};


// reduce buffer size, avoiding mem copy
exports.shrinkBuf = function (buf, size) {
  if (buf.length === size) { return buf; }
  if (buf.subarray) { return buf.subarray(0, size); }
  buf.length = size;
  return buf;
};


var fnTyped = {
  arraySet: function (dest, src, src_offs, len, dest_offs) {
    if (src.subarray && dest.subarray) {
      dest.set(src.subarray(src_offs, src_offs + len), dest_offs);
      return;
    }
    // Fallback to ordinary array
    for (var i = 0; i < len; i++) {
      dest[dest_offs + i] = src[src_offs + i];
    }
  },
  // Join array of chunks to single array.
  flattenChunks: function (chunks) {
    var i, l, len, pos, chunk, result;

    // calculate data length
    len = 0;
    for (i = 0, l = chunks.length; i < l; i++) {
      len += chunks[i].length;
    }

    // join chunks
    result = new Uint8Array(len);
    pos = 0;
    for (i = 0, l = chunks.length; i < l; i++) {
      chunk = chunks[i];
      result.set(chunk, pos);
      pos += chunk.length;
    }

    return result;
  }
};

var fnUntyped = {
  arraySet: function (dest, src, src_offs, len, dest_offs) {
    for (var i = 0; i < len; i++) {
      dest[dest_offs + i] = src[src_offs + i];
    }
  },
  // Join array of chunks to single array.
  flattenChunks: function (chunks) {
    return [].concat.apply([], chunks);
  }
};


// Enable/Disable typed arrays use, for testing
//
exports.setTyped = function (on) {
  if (on) {
    exports.Buf8  = Uint8Array;
    exports.Buf16 = Uint16Array;
    exports.Buf32 = Int32Array;
    exports.assign(exports, fnTyped);
  } else {
    exports.Buf8  = Array;
    exports.Buf16 = Array;
    exports.Buf32 = Array;
    exports.assign(exports, fnUntyped);
  }
};

exports.setTyped(TYPED_OK);

},{}],17:[function(require,module,exports){
// String encode/decode helpers
'use strict';


var utils = require('./common');


// Quick check if we can use fast array to bin string conversion
//
// - apply(Array) can fail on Android 2.2
// - apply(Uint8Array) can fail on iOS 5.1 Safari
//
var STR_APPLY_OK = true;
var STR_APPLY_UIA_OK = true;

try { String.fromCharCode.apply(null, [ 0 ]); } catch (__) { STR_APPLY_OK = false; }
try { String.fromCharCode.apply(null, new Uint8Array(1)); } catch (__) { STR_APPLY_UIA_OK = false; }


// Table with utf8 lengths (calculated by first byte of sequence)
// Note, that 5 & 6-byte values and some 4-byte values can not be represented in JS,
// because max possible codepoint is 0x10ffff
var _utf8len = new utils.Buf8(256);
for (var q = 0; q < 256; q++) {
  _utf8len[q] = (q >= 252 ? 6 : q >= 248 ? 5 : q >= 240 ? 4 : q >= 224 ? 3 : q >= 192 ? 2 : 1);
}
_utf8len[254] = _utf8len[254] = 1; // Invalid sequence start


// convert string to array (typed, when possible)
exports.string2buf = function (str) {
  var buf, c, c2, m_pos, i, str_len = str.length, buf_len = 0;

  // count binary size
  for (m_pos = 0; m_pos < str_len; m_pos++) {
    c = str.charCodeAt(m_pos);
    if ((c & 0xfc00) === 0xd800 && (m_pos + 1 < str_len)) {
      c2 = str.charCodeAt(m_pos + 1);
      if ((c2 & 0xfc00) === 0xdc00) {
        c = 0x10000 + ((c - 0xd800) << 10) + (c2 - 0xdc00);
        m_pos++;
      }
    }
    buf_len += c < 0x80 ? 1 : c < 0x800 ? 2 : c < 0x10000 ? 3 : 4;
  }

  // allocate buffer
  buf = new utils.Buf8(buf_len);

  // convert
  for (i = 0, m_pos = 0; i < buf_len; m_pos++) {
    c = str.charCodeAt(m_pos);
    if ((c & 0xfc00) === 0xd800 && (m_pos + 1 < str_len)) {
      c2 = str.charCodeAt(m_pos + 1);
      if ((c2 & 0xfc00) === 0xdc00) {
        c = 0x10000 + ((c - 0xd800) << 10) + (c2 - 0xdc00);
        m_pos++;
      }
    }
    if (c < 0x80) {
      /* one byte */
      buf[i++] = c;
    } else if (c < 0x800) {
      /* two bytes */
      buf[i++] = 0xC0 | (c >>> 6);
      buf[i++] = 0x80 | (c & 0x3f);
    } else if (c < 0x10000) {
      /* three bytes */
      buf[i++] = 0xE0 | (c >>> 12);
      buf[i++] = 0x80 | (c >>> 6 & 0x3f);
      buf[i++] = 0x80 | (c & 0x3f);
    } else {
      /* four bytes */
      buf[i++] = 0xf0 | (c >>> 18);
      buf[i++] = 0x80 | (c >>> 12 & 0x3f);
      buf[i++] = 0x80 | (c >>> 6 & 0x3f);
      buf[i++] = 0x80 | (c & 0x3f);
    }
  }

  return buf;
};

// Helper (used in 2 places)
function buf2binstring(buf, len) {
  // On Chrome, the arguments in a function call that are allowed is `65534`.
  // If the length of the buffer is smaller than that, we can use this optimization,
  // otherwise we will take a slower path.
  if (len < 65534) {
    if ((buf.subarray && STR_APPLY_UIA_OK) || (!buf.subarray && STR_APPLY_OK)) {
      return String.fromCharCode.apply(null, utils.shrinkBuf(buf, len));
    }
  }

  var result = '';
  for (var i = 0; i < len; i++) {
    result += String.fromCharCode(buf[i]);
  }
  return result;
}


// Convert byte array to binary string
exports.buf2binstring = function (buf) {
  return buf2binstring(buf, buf.length);
};


// Convert binary string (typed, when possible)
exports.binstring2buf = function (str) {
  var buf = new utils.Buf8(str.length);
  for (var i = 0, len = buf.length; i < len; i++) {
    buf[i] = str.charCodeAt(i);
  }
  return buf;
};


// convert array to string
exports.buf2string = function (buf, max) {
  var i, out, c, c_len;
  var len = max || buf.length;

  // Reserve max possible length (2 words per char)
  // NB: by unknown reasons, Array is significantly faster for
  //     String.fromCharCode.apply than Uint16Array.
  var utf16buf = new Array(len * 2);

  for (out = 0, i = 0; i < len;) {
    c = buf[i++];
    // quick process ascii
    if (c < 0x80) { utf16buf[out++] = c; continue; }

    c_len = _utf8len[c];
    // skip 5 & 6 byte codes
    if (c_len > 4) { utf16buf[out++] = 0xfffd; i += c_len - 1; continue; }

    // apply mask on first byte
    c &= c_len === 2 ? 0x1f : c_len === 3 ? 0x0f : 0x07;
    // join the rest
    while (c_len > 1 && i < len) {
      c = (c << 6) | (buf[i++] & 0x3f);
      c_len--;
    }

    // terminated by end of string?
    if (c_len > 1) { utf16buf[out++] = 0xfffd; continue; }

    if (c < 0x10000) {
      utf16buf[out++] = c;
    } else {
      c -= 0x10000;
      utf16buf[out++] = 0xd800 | ((c >> 10) & 0x3ff);
      utf16buf[out++] = 0xdc00 | (c & 0x3ff);
    }
  }

  return buf2binstring(utf16buf, out);
};


// Calculate max possible position in utf8 buffer,
// that will not break sequence. If that's not possible
// - (very small limits) return max size as is.
//
// buf[] - utf8 bytes array
// max   - length limit (mandatory);
exports.utf8border = function (buf, max) {
  var pos;

  max = max || buf.length;
  if (max > buf.length) { max = buf.length; }

  // go back from last position, until start of sequence found
  pos = max - 1;
  while (pos >= 0 && (buf[pos] & 0xC0) === 0x80) { pos--; }

  // Very small and broken sequence,
  // return max, because we should return something anyway.
  if (pos < 0) { return max; }

  // If we came to start of buffer - that means buffer is too small,
  // return max too.
  if (pos === 0) { return max; }

  return (pos + _utf8len[buf[pos]] > max) ? pos : max;
};

},{"./common":16}],18:[function(require,module,exports){
'use strict';

// Note: adler32 takes 12% for level 0 and 2% for level 6.
// It isn't worth it to make additional optimizations as in original.
// Small size is preferable.

// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.

function adler32(adler, buf, len, pos) {
  var s1 = (adler & 0xffff) |0,
      s2 = ((adler >>> 16) & 0xffff) |0,
      n = 0;

  while (len !== 0) {
    // Set limit ~ twice less than 5552, to keep
    // s2 in 31-bits, because we force signed ints.
    // in other case %= will fail.
    n = len > 2000 ? 2000 : len;
    len -= n;

    do {
      s1 = (s1 + buf[pos++]) |0;
      s2 = (s2 + s1) |0;
    } while (--n);

    s1 %= 65521;
    s2 %= 65521;
  }

  return (s1 | (s2 << 16)) |0;
}


module.exports = adler32;

},{}],19:[function(require,module,exports){
'use strict';

// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.

module.exports = {

  /* Allowed flush values; see deflate() and inflate() below for details */
  Z_NO_FLUSH:         0,
  Z_PARTIAL_FLUSH:    1,
  Z_SYNC_FLUSH:       2,
  Z_FULL_FLUSH:       3,
  Z_FINISH:           4,
  Z_BLOCK:            5,
  Z_TREES:            6,

  /* Return codes for the compression/decompression functions. Negative values
  * are errors, positive values are used for special but normal events.
  */
  Z_OK:               0,
  Z_STREAM_END:       1,
  Z_NEED_DICT:        2,
  Z_ERRNO:           -1,
  Z_STREAM_ERROR:    -2,
  Z_DATA_ERROR:      -3,
  //Z_MEM_ERROR:     -4,
  Z_BUF_ERROR:       -5,
  //Z_VERSION_ERROR: -6,

  /* compression levels */
  Z_NO_COMPRESSION:         0,
  Z_BEST_SPEED:             1,
  Z_BEST_COMPRESSION:       9,
  Z_DEFAULT_COMPRESSION:   -1,


  Z_FILTERED:               1,
  Z_HUFFMAN_ONLY:           2,
  Z_RLE:                    3,
  Z_FIXED:                  4,
  Z_DEFAULT_STRATEGY:       0,

  /* Possible values of the data_type field (though see inflate()) */
  Z_BINARY:                 0,
  Z_TEXT:                   1,
  //Z_ASCII:                1, // = Z_TEXT (deprecated)
  Z_UNKNOWN:                2,

  /* The deflate compression method */
  Z_DEFLATED:               8
  //Z_NULL:                 null // Use -1 or null inline, depending on var type
};

},{}],20:[function(require,module,exports){
'use strict';

// Note: we can't get significant speed boost here.
// So write code to minimize size - no pregenerated tables
// and array tools dependencies.

// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.

// Use ordinary array, since untyped makes no boost here
function makeTable() {
  var c, table = [];

  for (var n = 0; n < 256; n++) {
    c = n;
    for (var k = 0; k < 8; k++) {
      c = ((c & 1) ? (0xEDB88320 ^ (c >>> 1)) : (c >>> 1));
    }
    table[n] = c;
  }

  return table;
}

// Create table on load. Just 255 signed longs. Not a problem.
var crcTable = makeTable();


function crc32(crc, buf, len, pos) {
  var t = crcTable,
      end = pos + len;

  crc ^= -1;

  for (var i = pos; i < end; i++) {
    crc = (crc >>> 8) ^ t[(crc ^ buf[i]) & 0xFF];
  }

  return (crc ^ (-1)); // >>> 0;
}


module.exports = crc32;

},{}],21:[function(require,module,exports){
'use strict';

// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.

var utils   = require('../utils/common');
var trees   = require('./trees');
var adler32 = require('./adler32');
var crc32   = require('./crc32');
var msg     = require('./messages');

/* Public constants ==========================================================*/
/* ===========================================================================*/


/* Allowed flush values; see deflate() and inflate() below for details */
var Z_NO_FLUSH      = 0;
var Z_PARTIAL_FLUSH = 1;
//var Z_SYNC_FLUSH    = 2;
var Z_FULL_FLUSH    = 3;
var Z_FINISH        = 4;
var Z_BLOCK         = 5;
//var Z_TREES         = 6;


/* Return codes for the compression/decompression functions. Negative values
 * are errors, positive values are used for special but normal events.
 */
var Z_OK            = 0;
var Z_STREAM_END    = 1;
//var Z_NEED_DICT     = 2;
//var Z_ERRNO         = -1;
var Z_STREAM_ERROR  = -2;
var Z_DATA_ERROR    = -3;
//var Z_MEM_ERROR     = -4;
var Z_BUF_ERROR     = -5;
//var Z_VERSION_ERROR = -6;


/* compression levels */
//var Z_NO_COMPRESSION      = 0;
//var Z_BEST_SPEED          = 1;
//var Z_BEST_COMPRESSION    = 9;
var Z_DEFAULT_COMPRESSION = -1;


var Z_FILTERED            = 1;
var Z_HUFFMAN_ONLY        = 2;
var Z_RLE                 = 3;
var Z_FIXED               = 4;
var Z_DEFAULT_STRATEGY    = 0;

/* Possible values of the data_type field (though see inflate()) */
//var Z_BINARY              = 0;
//var Z_TEXT                = 1;
//var Z_ASCII               = 1; // = Z_TEXT
var Z_UNKNOWN             = 2;


/* The deflate compression method */
var Z_DEFLATED  = 8;

/*============================================================================*/


var MAX_MEM_LEVEL = 9;
/* Maximum value for memLevel in deflateInit2 */
var MAX_WBITS = 15;
/* 32K LZ77 window */
var DEF_MEM_LEVEL = 8;


var LENGTH_CODES  = 29;
/* number of length codes, not counting the special END_BLOCK code */
var LITERALS      = 256;
/* number of literal bytes 0..255 */
var L_CODES       = LITERALS + 1 + LENGTH_CODES;
/* number of Literal or Length codes, including the END_BLOCK code */
var D_CODES       = 30;
/* number of distance codes */
var BL_CODES      = 19;
/* number of codes used to transfer the bit lengths */
var HEAP_SIZE     = 2 * L_CODES + 1;
/* maximum heap size */
var MAX_BITS  = 15;
/* All codes must not exceed MAX_BITS bits */

var MIN_MATCH = 3;
var MAX_MATCH = 258;
var MIN_LOOKAHEAD = (MAX_MATCH + MIN_MATCH + 1);

var PRESET_DICT = 0x20;

var INIT_STATE = 42;
var EXTRA_STATE = 69;
var NAME_STATE = 73;
var COMMENT_STATE = 91;
var HCRC_STATE = 103;
var BUSY_STATE = 113;
var FINISH_STATE = 666;

var BS_NEED_MORE      = 1; /* block not completed, need more input or more output */
var BS_BLOCK_DONE     = 2; /* block flush performed */
var BS_FINISH_STARTED = 3; /* finish started, need only more output at next deflate */
var BS_FINISH_DONE    = 4; /* finish done, accept no more input or output */

var OS_CODE = 0x03; // Unix :) . Don't detect, use this default.

function err(strm, errorCode) {
  strm.msg = msg[errorCode];
  return errorCode;
}

function rank(f) {
  return ((f) << 1) - ((f) > 4 ? 9 : 0);
}

function zero(buf) { var len = buf.length; while (--len >= 0) { buf[len] = 0; } }


/* =========================================================================
 * Flush as much pending output as possible. All deflate() output goes
 * through this function so some applications may wish to modify it
 * to avoid allocating a large strm->output buffer and copying into it.
 * (See also read_buf()).
 */
function flush_pending(strm) {
  var s = strm.state;

  //_tr_flush_bits(s);
  var len = s.pending;
  if (len > strm.avail_out) {
    len = strm.avail_out;
  }
  if (len === 0) { return; }

  utils.arraySet(strm.output, s.pending_buf, s.pending_out, len, strm.next_out);
  strm.next_out += len;
  s.pending_out += len;
  strm.total_out += len;
  strm.avail_out -= len;
  s.pending -= len;
  if (s.pending === 0) {
    s.pending_out = 0;
  }
}


function flush_block_only(s, last) {
  trees._tr_flush_block(s, (s.block_start >= 0 ? s.block_start : -1), s.strstart - s.block_start, last);
  s.block_start = s.strstart;
  flush_pending(s.strm);
}


function put_byte(s, b) {
  s.pending_buf[s.pending++] = b;
}


/* =========================================================================
 * Put a short in the pending buffer. The 16-bit value is put in MSB order.
 * IN assertion: the stream state is correct and there is enough room in
 * pending_buf.
 */
function putShortMSB(s, b) {
//  put_byte(s, (Byte)(b >> 8));
//  put_byte(s, (Byte)(b & 0xff));
  s.pending_buf[s.pending++] = (b >>> 8) & 0xff;
  s.pending_buf[s.pending++] = b & 0xff;
}


/* ===========================================================================
 * Read a new buffer from the current input stream, update the adler32
 * and total number of bytes read.  All deflate() input goes through
 * this function so some applications may wish to modify it to avoid
 * allocating a large strm->input buffer and copying from it.
 * (See also flush_pending()).
 */
function read_buf(strm, buf, start, size) {
  var len = strm.avail_in;

  if (len > size) { len = size; }
  if (len === 0) { return 0; }

  strm.avail_in -= len;

  // zmemcpy(buf, strm->next_in, len);
  utils.arraySet(buf, strm.input, strm.next_in, len, start);
  if (strm.state.wrap === 1) {
    strm.adler = adler32(strm.adler, buf, len, start);
  }

  else if (strm.state.wrap === 2) {
    strm.adler = crc32(strm.adler, buf, len, start);
  }

  strm.next_in += len;
  strm.total_in += len;

  return len;
}


/* ===========================================================================
 * Set match_start to the longest match starting at the given string and
 * return its length. Matches shorter or equal to prev_length are discarded,
 * in which case the result is equal to prev_length and match_start is
 * garbage.
 * IN assertions: cur_match is the head of the hash chain for the current
 *   string (strstart) and its distance is <= MAX_DIST, and prev_length >= 1
 * OUT assertion: the match length is not greater than s->lookahead.
 */
function longest_match(s, cur_match) {
  var chain_length = s.max_chain_length;      /* max hash chain length */
  var scan = s.strstart; /* current string */
  var match;                       /* matched string */
  var len;                           /* length of current match */
  var best_len = s.prev_length;              /* best match length so far */
  var nice_match = s.nice_match;             /* stop if match long enough */
  var limit = (s.strstart > (s.w_size - MIN_LOOKAHEAD)) ?
      s.strstart - (s.w_size - MIN_LOOKAHEAD) : 0/*NIL*/;

  var _win = s.window; // shortcut

  var wmask = s.w_mask;
  var prev  = s.prev;

  /* Stop when cur_match becomes <= limit. To simplify the code,
   * we prevent matches with the string of window index 0.
   */

  var strend = s.strstart + MAX_MATCH;
  var scan_end1  = _win[scan + best_len - 1];
  var scan_end   = _win[scan + best_len];

  /* The code is optimized for HASH_BITS >= 8 and MAX_MATCH-2 multiple of 16.
   * It is easy to get rid of this optimization if necessary.
   */
  // Assert(s->hash_bits >= 8 && MAX_MATCH == 258, "Code too clever");

  /* Do not waste too much time if we already have a good match: */
  if (s.prev_length >= s.good_match) {
    chain_length >>= 2;
  }
  /* Do not look for matches beyond the end of the input. This is necessary
   * to make deflate deterministic.
   */
  if (nice_match > s.lookahead) { nice_match = s.lookahead; }

  // Assert((ulg)s->strstart <= s->window_size-MIN_LOOKAHEAD, "need lookahead");

  do {
    // Assert(cur_match < s->strstart, "no future");
    match = cur_match;

    /* Skip to next match if the match length cannot increase
     * or if the match length is less than 2.  Note that the checks below
     * for insufficient lookahead only occur occasionally for performance
     * reasons.  Therefore uninitialized memory will be accessed, and
     * conditional jumps will be made that depend on those values.
     * However the length of the match is limited to the lookahead, so
     * the output of deflate is not affected by the uninitialized values.
     */

    if (_win[match + best_len]     !== scan_end  ||
        _win[match + best_len - 1] !== scan_end1 ||
        _win[match]                !== _win[scan] ||
        _win[++match]              !== _win[scan + 1]) {
      continue;
    }

    /* The check at best_len-1 can be removed because it will be made
     * again later. (This heuristic is not always a win.)
     * It is not necessary to compare scan[2] and match[2] since they
     * are always equal when the other bytes match, given that
     * the hash keys are equal and that HASH_BITS >= 8.
     */
    scan += 2;
    match++;
    // Assert(*scan == *match, "match[2]?");

    /* We check for insufficient lookahead only every 8th comparison;
     * the 256th check will be made at strstart+258.
     */
    do {
      /*jshint noempty:false*/
    } while (_win[++scan] === _win[++match] && _win[++scan] === _win[++match] &&
             _win[++scan] === _win[++match] && _win[++scan] === _win[++match] &&
             _win[++scan] === _win[++match] && _win[++scan] === _win[++match] &&
             _win[++scan] === _win[++match] && _win[++scan] === _win[++match] &&
             scan < strend);

    // Assert(scan <= s->window+(unsigned)(s->window_size-1), "wild scan");

    len = MAX_MATCH - (strend - scan);
    scan = strend - MAX_MATCH;

    if (len > best_len) {
      s.match_start = cur_match;
      best_len = len;
      if (len >= nice_match) {
        break;
      }
      scan_end1  = _win[scan + best_len - 1];
      scan_end   = _win[scan + best_len];
    }
  } while ((cur_match = prev[cur_match & wmask]) > limit && --chain_length !== 0);

  if (best_len <= s.lookahead) {
    return best_len;
  }
  return s.lookahead;
}


/* ===========================================================================
 * Fill the window when the lookahead becomes insufficient.
 * Updates strstart and lookahead.
 *
 * IN assertion: lookahead < MIN_LOOKAHEAD
 * OUT assertions: strstart <= window_size-MIN_LOOKAHEAD
 *    At least one byte has been read, or avail_in == 0; reads are
 *    performed for at least two bytes (required for the zip translate_eol
 *    option -- not supported here).
 */
function fill_window(s) {
  var _w_size = s.w_size;
  var p, n, m, more, str;

  //Assert(s->lookahead < MIN_LOOKAHEAD, "already enough lookahead");

  do {
    more = s.window_size - s.lookahead - s.strstart;

    // JS ints have 32 bit, block below not needed
    /* Deal with !@#$% 64K limit: */
    //if (sizeof(int) <= 2) {
    //    if (more == 0 && s->strstart == 0 && s->lookahead == 0) {
    //        more = wsize;
    //
    //  } else if (more == (unsigned)(-1)) {
    //        /* Very unlikely, but possible on 16 bit machine if
    //         * strstart == 0 && lookahead == 1 (input done a byte at time)
    //         */
    //        more--;
    //    }
    //}


    /* If the window is almost full and there is insufficient lookahead,
     * move the upper half to the lower one to make room in the upper half.
     */
    if (s.strstart >= _w_size + (_w_size - MIN_LOOKAHEAD)) {

      utils.arraySet(s.window, s.window, _w_size, _w_size, 0);
      s.match_start -= _w_size;
      s.strstart -= _w_size;
      /* we now have strstart >= MAX_DIST */
      s.block_start -= _w_size;

      /* Slide the hash table (could be avoided with 32 bit values
       at the expense of memory usage). We slide even when level == 0
       to keep the hash table consistent if we switch back to level > 0
       later. (Using level 0 permanently is not an optimal usage of
       zlib, so we don't care about this pathological case.)
       */

      n = s.hash_size;
      p = n;
      do {
        m = s.head[--p];
        s.head[p] = (m >= _w_size ? m - _w_size : 0);
      } while (--n);

      n = _w_size;
      p = n;
      do {
        m = s.prev[--p];
        s.prev[p] = (m >= _w_size ? m - _w_size : 0);
        /* If n is not on any hash chain, prev[n] is garbage but
         * its value will never be used.
         */
      } while (--n);

      more += _w_size;
    }
    if (s.strm.avail_in === 0) {
      break;
    }

    /* If there was no sliding:
     *    strstart <= WSIZE+MAX_DIST-1 && lookahead <= MIN_LOOKAHEAD - 1 &&
     *    more == window_size - lookahead - strstart
     * => more >= window_size - (MIN_LOOKAHEAD-1 + WSIZE + MAX_DIST-1)
     * => more >= window_size - 2*WSIZE + 2
     * In the BIG_MEM or MMAP case (not yet supported),
     *   window_size == input_size + MIN_LOOKAHEAD  &&
     *   strstart + s->lookahead <= input_size => more >= MIN_LOOKAHEAD.
     * Otherwise, window_size == 2*WSIZE so more >= 2.
     * If there was sliding, more >= WSIZE. So in all cases, more >= 2.
     */
    //Assert(more >= 2, "more < 2");
    n = read_buf(s.strm, s.window, s.strstart + s.lookahead, more);
    s.lookahead += n;

    /* Initialize the hash value now that we have some input: */
    if (s.lookahead + s.insert >= MIN_MATCH) {
      str = s.strstart - s.insert;
      s.ins_h = s.window[str];

      /* UPDATE_HASH(s, s->ins_h, s->window[str + 1]); */
      s.ins_h = ((s.ins_h << s.hash_shift) ^ s.window[str + 1]) & s.hash_mask;
//#if MIN_MATCH != 3
//        Call update_hash() MIN_MATCH-3 more times
//#endif
      while (s.insert) {
        /* UPDATE_HASH(s, s->ins_h, s->window[str + MIN_MATCH-1]); */
        s.ins_h = ((s.ins_h << s.hash_shift) ^ s.window[str + MIN_MATCH - 1]) & s.hash_mask;

        s.prev[str & s.w_mask] = s.head[s.ins_h];
        s.head[s.ins_h] = str;
        str++;
        s.insert--;
        if (s.lookahead + s.insert < MIN_MATCH) {
          break;
        }
      }
    }
    /* If the whole input has less than MIN_MATCH bytes, ins_h is garbage,
     * but this is not important since only literal bytes will be emitted.
     */

  } while (s.lookahead < MIN_LOOKAHEAD && s.strm.avail_in !== 0);

  /* If the WIN_INIT bytes after the end of the current data have never been
   * written, then zero those bytes in order to avoid memory check reports of
   * the use of uninitialized (or uninitialised as Julian writes) bytes by
   * the longest match routines.  Update the high water mark for the next
   * time through here.  WIN_INIT is set to MAX_MATCH since the longest match
   * routines allow scanning to strstart + MAX_MATCH, ignoring lookahead.
   */
//  if (s.high_water < s.window_size) {
//    var curr = s.strstart + s.lookahead;
//    var init = 0;
//
//    if (s.high_water < curr) {
//      /* Previous high water mark below current data -- zero WIN_INIT
//       * bytes or up to end of window, whichever is less.
//       */
//      init = s.window_size - curr;
//      if (init > WIN_INIT)
//        init = WIN_INIT;
//      zmemzero(s->window + curr, (unsigned)init);
//      s->high_water = curr + init;
//    }
//    else if (s->high_water < (ulg)curr + WIN_INIT) {
//      /* High water mark at or above current data, but below current data
//       * plus WIN_INIT -- zero out to current data plus WIN_INIT, or up
//       * to end of window, whichever is less.
//       */
//      init = (ulg)curr + WIN_INIT - s->high_water;
//      if (init > s->window_size - s->high_water)
//        init = s->window_size - s->high_water;
//      zmemzero(s->window + s->high_water, (unsigned)init);
//      s->high_water += init;
//    }
//  }
//
//  Assert((ulg)s->strstart <= s->window_size - MIN_LOOKAHEAD,
//    "not enough room for search");
}

/* ===========================================================================
 * Copy without compression as much as possible from the input stream, return
 * the current block state.
 * This function does not insert new strings in the dictionary since
 * uncompressible data is probably not useful. This function is used
 * only for the level=0 compression option.
 * NOTE: this function should be optimized to avoid extra copying from
 * window to pending_buf.
 */
function deflate_stored(s, flush) {
  /* Stored blocks are limited to 0xffff bytes, pending_buf is limited
   * to pending_buf_size, and each stored block has a 5 byte header:
   */
  var max_block_size = 0xffff;

  if (max_block_size > s.pending_buf_size - 5) {
    max_block_size = s.pending_buf_size - 5;
  }

  /* Copy as much as possible from input to output: */
  for (;;) {
    /* Fill the window as much as possible: */
    if (s.lookahead <= 1) {

      //Assert(s->strstart < s->w_size+MAX_DIST(s) ||
      //  s->block_start >= (long)s->w_size, "slide too late");
//      if (!(s.strstart < s.w_size + (s.w_size - MIN_LOOKAHEAD) ||
//        s.block_start >= s.w_size)) {
//        throw  new Error("slide too late");
//      }

      fill_window(s);
      if (s.lookahead === 0 && flush === Z_NO_FLUSH) {
        return BS_NEED_MORE;
      }

      if (s.lookahead === 0) {
        break;
      }
      /* flush the current block */
    }
    //Assert(s->block_start >= 0L, "block gone");
//    if (s.block_start < 0) throw new Error("block gone");

    s.strstart += s.lookahead;
    s.lookahead = 0;

    /* Emit a stored block if pending_buf will be full: */
    var max_start = s.block_start + max_block_size;

    if (s.strstart === 0 || s.strstart >= max_start) {
      /* strstart == 0 is possible when wraparound on 16-bit machine */
      s.lookahead = s.strstart - max_start;
      s.strstart = max_start;
      /*** FLUSH_BLOCK(s, 0); ***/
      flush_block_only(s, false);
      if (s.strm.avail_out === 0) {
        return BS_NEED_MORE;
      }
      /***/


    }
    /* Flush if we may have to slide, otherwise block_start may become
     * negative and the data will be gone:
     */
    if (s.strstart - s.block_start >= (s.w_size - MIN_LOOKAHEAD)) {
      /*** FLUSH_BLOCK(s, 0); ***/
      flush_block_only(s, false);
      if (s.strm.avail_out === 0) {
        return BS_NEED_MORE;
      }
      /***/
    }
  }

  s.insert = 0;

  if (flush === Z_FINISH) {
    /*** FLUSH_BLOCK(s, 1); ***/
    flush_block_only(s, true);
    if (s.strm.avail_out === 0) {
      return BS_FINISH_STARTED;
    }
    /***/
    return BS_FINISH_DONE;
  }

  if (s.strstart > s.block_start) {
    /*** FLUSH_BLOCK(s, 0); ***/
    flush_block_only(s, false);
    if (s.strm.avail_out === 0) {
      return BS_NEED_MORE;
    }
    /***/
  }

  return BS_NEED_MORE;
}

/* ===========================================================================
 * Compress as much as possible from the input stream, return the current
 * block state.
 * This function does not perform lazy evaluation of matches and inserts
 * new strings in the dictionary only for unmatched strings or for short
 * matches. It is used only for the fast compression options.
 */
function deflate_fast(s, flush) {
  var hash_head;        /* head of the hash chain */
  var bflush;           /* set if current block must be flushed */

  for (;;) {
    /* Make sure that we always have enough lookahead, except
     * at the end of the input file. We need MAX_MATCH bytes
     * for the next match, plus MIN_MATCH bytes to insert the
     * string following the next match.
     */
    if (s.lookahead < MIN_LOOKAHEAD) {
      fill_window(s);
      if (s.lookahead < MIN_LOOKAHEAD && flush === Z_NO_FLUSH) {
        return BS_NEED_MORE;
      }
      if (s.lookahead === 0) {
        break; /* flush the current block */
      }
    }

    /* Insert the string window[strstart .. strstart+2] in the
     * dictionary, and set hash_head to the head of the hash chain:
     */
    hash_head = 0/*NIL*/;
    if (s.lookahead >= MIN_MATCH) {
      /*** INSERT_STRING(s, s.strstart, hash_head); ***/
      s.ins_h = ((s.ins_h << s.hash_shift) ^ s.window[s.strstart + MIN_MATCH - 1]) & s.hash_mask;
      hash_head = s.prev[s.strstart & s.w_mask] = s.head[s.ins_h];
      s.head[s.ins_h] = s.strstart;
      /***/
    }

    /* Find the longest match, discarding those <= prev_length.
     * At this point we have always match_length < MIN_MATCH
     */
    if (hash_head !== 0/*NIL*/ && ((s.strstart - hash_head) <= (s.w_size - MIN_LOOKAHEAD))) {
      /* To simplify the code, we prevent matches with the string
       * of window index 0 (in particular we have to avoid a match
       * of the string with itself at the start of the input file).
       */
      s.match_length = longest_match(s, hash_head);
      /* longest_match() sets match_start */
    }
    if (s.match_length >= MIN_MATCH) {
      // check_match(s, s.strstart, s.match_start, s.match_length); // for debug only

      /*** _tr_tally_dist(s, s.strstart - s.match_start,
                     s.match_length - MIN_MATCH, bflush); ***/
      bflush = trees._tr_tally(s, s.strstart - s.match_start, s.match_length - MIN_MATCH);

      s.lookahead -= s.match_length;

      /* Insert new strings in the hash table only if the match length
       * is not too large. This saves time but degrades compression.
       */
      if (s.match_length <= s.max_lazy_match/*max_insert_length*/ && s.lookahead >= MIN_MATCH) {
        s.match_length--; /* string at strstart already in table */
        do {
          s.strstart++;
          /*** INSERT_STRING(s, s.strstart, hash_head); ***/
          s.ins_h = ((s.ins_h << s.hash_shift) ^ s.window[s.strstart + MIN_MATCH - 1]) & s.hash_mask;
          hash_head = s.prev[s.strstart & s.w_mask] = s.head[s.ins_h];
          s.head[s.ins_h] = s.strstart;
          /***/
          /* strstart never exceeds WSIZE-MAX_MATCH, so there are
           * always MIN_MATCH bytes ahead.
           */
        } while (--s.match_length !== 0);
        s.strstart++;
      } else
      {
        s.strstart += s.match_length;
        s.match_length = 0;
        s.ins_h = s.window[s.strstart];
        /* UPDATE_HASH(s, s.ins_h, s.window[s.strstart+1]); */
        s.ins_h = ((s.ins_h << s.hash_shift) ^ s.window[s.strstart + 1]) & s.hash_mask;

//#if MIN_MATCH != 3
//                Call UPDATE_HASH() MIN_MATCH-3 more times
//#endif
        /* If lookahead < MIN_MATCH, ins_h is garbage, but it does not
         * matter since it will be recomputed at next deflate call.
         */
      }
    } else {
      /* No match, output a literal byte */
      //Tracevv((stderr,"%c", s.window[s.strstart]));
      /*** _tr_tally_lit(s, s.window[s.strstart], bflush); ***/
      bflush = trees._tr_tally(s, 0, s.window[s.strstart]);

      s.lookahead--;
      s.strstart++;
    }
    if (bflush) {
      /*** FLUSH_BLOCK(s, 0); ***/
      flush_block_only(s, false);
      if (s.strm.avail_out === 0) {
        return BS_NEED_MORE;
      }
      /***/
    }
  }
  s.insert = ((s.strstart < (MIN_MATCH - 1)) ? s.strstart : MIN_MATCH - 1);
  if (flush === Z_FINISH) {
    /*** FLUSH_BLOCK(s, 1); ***/
    flush_block_only(s, true);
    if (s.strm.avail_out === 0) {
      return BS_FINISH_STARTED;
    }
    /***/
    return BS_FINISH_DONE;
  }
  if (s.last_lit) {
    /*** FLUSH_BLOCK(s, 0); ***/
    flush_block_only(s, false);
    if (s.strm.avail_out === 0) {
      return BS_NEED_MORE;
    }
    /***/
  }
  return BS_BLOCK_DONE;
}

/* ===========================================================================
 * Same as above, but achieves better compression. We use a lazy
 * evaluation for matches: a match is finally adopted only if there is
 * no better match at the next window position.
 */
function deflate_slow(s, flush) {
  var hash_head;          /* head of hash chain */
  var bflush;              /* set if current block must be flushed */

  var max_insert;

  /* Process the input block. */
  for (;;) {
    /* Make sure that we always have enough lookahead, except
     * at the end of the input file. We need MAX_MATCH bytes
     * for the next match, plus MIN_MATCH bytes to insert the
     * string following the next match.
     */
    if (s.lookahead < MIN_LOOKAHEAD) {
      fill_window(s);
      if (s.lookahead < MIN_LOOKAHEAD && flush === Z_NO_FLUSH) {
        return BS_NEED_MORE;
      }
      if (s.lookahead === 0) { break; } /* flush the current block */
    }

    /* Insert the string window[strstart .. strstart+2] in the
     * dictionary, and set hash_head to the head of the hash chain:
     */
    hash_head = 0/*NIL*/;
    if (s.lookahead >= MIN_MATCH) {
      /*** INSERT_STRING(s, s.strstart, hash_head); ***/
      s.ins_h = ((s.ins_h << s.hash_shift) ^ s.window[s.strstart + MIN_MATCH - 1]) & s.hash_mask;
      hash_head = s.prev[s.strstart & s.w_mask] = s.head[s.ins_h];
      s.head[s.ins_h] = s.strstart;
      /***/
    }

    /* Find the longest match, discarding those <= prev_length.
     */
    s.prev_length = s.match_length;
    s.prev_match = s.match_start;
    s.match_length = MIN_MATCH - 1;

    if (hash_head !== 0/*NIL*/ && s.prev_length < s.max_lazy_match &&
        s.strstart - hash_head <= (s.w_size - MIN_LOOKAHEAD)/*MAX_DIST(s)*/) {
      /* To simplify the code, we prevent matches with the string
       * of window index 0 (in particular we have to avoid a match
       * of the string with itself at the start of the input file).
       */
      s.match_length = longest_match(s, hash_head);
      /* longest_match() sets match_start */

      if (s.match_length <= 5 &&
         (s.strategy === Z_FILTERED || (s.match_length === MIN_MATCH && s.strstart - s.match_start > 4096/*TOO_FAR*/))) {

        /* If prev_match is also MIN_MATCH, match_start is garbage
         * but we will ignore the current match anyway.
         */
        s.match_length = MIN_MATCH - 1;
      }
    }
    /* If there was a match at the previous step and the current
     * match is not better, output the previous match:
     */
    if (s.prev_length >= MIN_MATCH && s.match_length <= s.prev_length) {
      max_insert = s.strstart + s.lookahead - MIN_MATCH;
      /* Do not insert strings in hash table beyond this. */

      //check_match(s, s.strstart-1, s.prev_match, s.prev_length);

      /***_tr_tally_dist(s, s.strstart - 1 - s.prev_match,
                     s.prev_length - MIN_MATCH, bflush);***/
      bflush = trees._tr_tally(s, s.strstart - 1 - s.prev_match, s.prev_length - MIN_MATCH);
      /* Insert in hash table all strings up to the end of the match.
       * strstart-1 and strstart are already inserted. If there is not
       * enough lookahead, the last two strings are not inserted in
       * the hash table.
       */
      s.lookahead -= s.prev_length - 1;
      s.prev_length -= 2;
      do {
        if (++s.strstart <= max_insert) {
          /*** INSERT_STRING(s, s.strstart, hash_head); ***/
          s.ins_h = ((s.ins_h << s.hash_shift) ^ s.window[s.strstart + MIN_MATCH - 1]) & s.hash_mask;
          hash_head = s.prev[s.strstart & s.w_mask] = s.head[s.ins_h];
          s.head[s.ins_h] = s.strstart;
          /***/
        }
      } while (--s.prev_length !== 0);
      s.match_available = 0;
      s.match_length = MIN_MATCH - 1;
      s.strstart++;

      if (bflush) {
        /*** FLUSH_BLOCK(s, 0); ***/
        flush_block_only(s, false);
        if (s.strm.avail_out === 0) {
          return BS_NEED_MORE;
        }
        /***/
      }

    } else if (s.match_available) {
      /* If there was no match at the previous position, output a
       * single literal. If there was a match but the current match
       * is longer, truncate the previous match to a single literal.
       */
      //Tracevv((stderr,"%c", s->window[s->strstart-1]));
      /*** _tr_tally_lit(s, s.window[s.strstart-1], bflush); ***/
      bflush = trees._tr_tally(s, 0, s.window[s.strstart - 1]);

      if (bflush) {
        /*** FLUSH_BLOCK_ONLY(s, 0) ***/
        flush_block_only(s, false);
        /***/
      }
      s.strstart++;
      s.lookahead--;
      if (s.strm.avail_out === 0) {
        return BS_NEED_MORE;
      }
    } else {
      /* There is no previous match to compare with, wait for
       * the next step to decide.
       */
      s.match_available = 1;
      s.strstart++;
      s.lookahead--;
    }
  }
  //Assert (flush != Z_NO_FLUSH, "no flush?");
  if (s.match_available) {
    //Tracevv((stderr,"%c", s->window[s->strstart-1]));
    /*** _tr_tally_lit(s, s.window[s.strstart-1], bflush); ***/
    bflush = trees._tr_tally(s, 0, s.window[s.strstart - 1]);

    s.match_available = 0;
  }
  s.insert = s.strstart < MIN_MATCH - 1 ? s.strstart : MIN_MATCH - 1;
  if (flush === Z_FINISH) {
    /*** FLUSH_BLOCK(s, 1); ***/
    flush_block_only(s, true);
    if (s.strm.avail_out === 0) {
      return BS_FINISH_STARTED;
    }
    /***/
    return BS_FINISH_DONE;
  }
  if (s.last_lit) {
    /*** FLUSH_BLOCK(s, 0); ***/
    flush_block_only(s, false);
    if (s.strm.avail_out === 0) {
      return BS_NEED_MORE;
    }
    /***/
  }

  return BS_BLOCK_DONE;
}


/* ===========================================================================
 * For Z_RLE, simply look for runs of bytes, generate matches only of distance
 * one.  Do not maintain a hash table.  (It will be regenerated if this run of
 * deflate switches away from Z_RLE.)
 */
function deflate_rle(s, flush) {
  var bflush;            /* set if current block must be flushed */
  var prev;              /* byte at distance one to match */
  var scan, strend;      /* scan goes up to strend for length of run */

  var _win = s.window;

  for (;;) {
    /* Make sure that we always have enough lookahead, except
     * at the end of the input file. We need MAX_MATCH bytes
     * for the longest run, plus one for the unrolled loop.
     */
    if (s.lookahead <= MAX_MATCH) {
      fill_window(s);
      if (s.lookahead <= MAX_MATCH && flush === Z_NO_FLUSH) {
        return BS_NEED_MORE;
      }
      if (s.lookahead === 0) { break; } /* flush the current block */
    }

    /* See how many times the previous byte repeats */
    s.match_length = 0;
    if (s.lookahead >= MIN_MATCH && s.strstart > 0) {
      scan = s.strstart - 1;
      prev = _win[scan];
      if (prev === _win[++scan] && prev === _win[++scan] && prev === _win[++scan]) {
        strend = s.strstart + MAX_MATCH;
        do {
          /*jshint noempty:false*/
        } while (prev === _win[++scan] && prev === _win[++scan] &&
                 prev === _win[++scan] && prev === _win[++scan] &&
                 prev === _win[++scan] && prev === _win[++scan] &&
                 prev === _win[++scan] && prev === _win[++scan] &&
                 scan < strend);
        s.match_length = MAX_MATCH - (strend - scan);
        if (s.match_length > s.lookahead) {
          s.match_length = s.lookahead;
        }
      }
      //Assert(scan <= s->window+(uInt)(s->window_size-1), "wild scan");
    }

    /* Emit match if have run of MIN_MATCH or longer, else emit literal */
    if (s.match_length >= MIN_MATCH) {
      //check_match(s, s.strstart, s.strstart - 1, s.match_length);

      /*** _tr_tally_dist(s, 1, s.match_length - MIN_MATCH, bflush); ***/
      bflush = trees._tr_tally(s, 1, s.match_length - MIN_MATCH);

      s.lookahead -= s.match_length;
      s.strstart += s.match_length;
      s.match_length = 0;
    } else {
      /* No match, output a literal byte */
      //Tracevv((stderr,"%c", s->window[s->strstart]));
      /*** _tr_tally_lit(s, s.window[s.strstart], bflush); ***/
      bflush = trees._tr_tally(s, 0, s.window[s.strstart]);

      s.lookahead--;
      s.strstart++;
    }
    if (bflush) {
      /*** FLUSH_BLOCK(s, 0); ***/
      flush_block_only(s, false);
      if (s.strm.avail_out === 0) {
        return BS_NEED_MORE;
      }
      /***/
    }
  }
  s.insert = 0;
  if (flush === Z_FINISH) {
    /*** FLUSH_BLOCK(s, 1); ***/
    flush_block_only(s, true);
    if (s.strm.avail_out === 0) {
      return BS_FINISH_STARTED;
    }
    /***/
    return BS_FINISH_DONE;
  }
  if (s.last_lit) {
    /*** FLUSH_BLOCK(s, 0); ***/
    flush_block_only(s, false);
    if (s.strm.avail_out === 0) {
      return BS_NEED_MORE;
    }
    /***/
  }
  return BS_BLOCK_DONE;
}

/* ===========================================================================
 * For Z_HUFFMAN_ONLY, do not look for matches.  Do not maintain a hash table.
 * (It will be regenerated if this run of deflate switches away from Huffman.)
 */
function deflate_huff(s, flush) {
  var bflush;             /* set if current block must be flushed */

  for (;;) {
    /* Make sure that we have a literal to write. */
    if (s.lookahead === 0) {
      fill_window(s);
      if (s.lookahead === 0) {
        if (flush === Z_NO_FLUSH) {
          return BS_NEED_MORE;
        }
        break;      /* flush the current block */
      }
    }

    /* Output a literal byte */
    s.match_length = 0;
    //Tracevv((stderr,"%c", s->window[s->strstart]));
    /*** _tr_tally_lit(s, s.window[s.strstart], bflush); ***/
    bflush = trees._tr_tally(s, 0, s.window[s.strstart]);
    s.lookahead--;
    s.strstart++;
    if (bflush) {
      /*** FLUSH_BLOCK(s, 0); ***/
      flush_block_only(s, false);
      if (s.strm.avail_out === 0) {
        return BS_NEED_MORE;
      }
      /***/
    }
  }
  s.insert = 0;
  if (flush === Z_FINISH) {
    /*** FLUSH_BLOCK(s, 1); ***/
    flush_block_only(s, true);
    if (s.strm.avail_out === 0) {
      return BS_FINISH_STARTED;
    }
    /***/
    return BS_FINISH_DONE;
  }
  if (s.last_lit) {
    /*** FLUSH_BLOCK(s, 0); ***/
    flush_block_only(s, false);
    if (s.strm.avail_out === 0) {
      return BS_NEED_MORE;
    }
    /***/
  }
  return BS_BLOCK_DONE;
}

/* Values for max_lazy_match, good_match and max_chain_length, depending on
 * the desired pack level (0..9). The values given below have been tuned to
 * exclude worst case performance for pathological files. Better values may be
 * found for specific files.
 */
function Config(good_length, max_lazy, nice_length, max_chain, func) {
  this.good_length = good_length;
  this.max_lazy = max_lazy;
  this.nice_length = nice_length;
  this.max_chain = max_chain;
  this.func = func;
}

var configuration_table;

configuration_table = [
  /*      good lazy nice chain */
  new Config(0, 0, 0, 0, deflate_stored),          /* 0 store only */
  new Config(4, 4, 8, 4, deflate_fast),            /* 1 max speed, no lazy matches */
  new Config(4, 5, 16, 8, deflate_fast),           /* 2 */
  new Config(4, 6, 32, 32, deflate_fast),          /* 3 */

  new Config(4, 4, 16, 16, deflate_slow),          /* 4 lazy matches */
  new Config(8, 16, 32, 32, deflate_slow),         /* 5 */
  new Config(8, 16, 128, 128, deflate_slow),       /* 6 */
  new Config(8, 32, 128, 256, deflate_slow),       /* 7 */
  new Config(32, 128, 258, 1024, deflate_slow),    /* 8 */
  new Config(32, 258, 258, 4096, deflate_slow)     /* 9 max compression */
];


/* ===========================================================================
 * Initialize the "longest match" routines for a new zlib stream
 */
function lm_init(s) {
  s.window_size = 2 * s.w_size;

  /*** CLEAR_HASH(s); ***/
  zero(s.head); // Fill with NIL (= 0);

  /* Set the default configuration parameters:
   */
  s.max_lazy_match = configuration_table[s.level].max_lazy;
  s.good_match = configuration_table[s.level].good_length;
  s.nice_match = configuration_table[s.level].nice_length;
  s.max_chain_length = configuration_table[s.level].max_chain;

  s.strstart = 0;
  s.block_start = 0;
  s.lookahead = 0;
  s.insert = 0;
  s.match_length = s.prev_length = MIN_MATCH - 1;
  s.match_available = 0;
  s.ins_h = 0;
}


function DeflateState() {
  this.strm = null;            /* pointer back to this zlib stream */
  this.status = 0;            /* as the name implies */
  this.pending_buf = null;      /* output still pending */
  this.pending_buf_size = 0;  /* size of pending_buf */
  this.pending_out = 0;       /* next pending byte to output to the stream */
  this.pending = 0;           /* nb of bytes in the pending buffer */
  this.wrap = 0;              /* bit 0 true for zlib, bit 1 true for gzip */
  this.gzhead = null;         /* gzip header information to write */
  this.gzindex = 0;           /* where in extra, name, or comment */
  this.method = Z_DEFLATED; /* can only be DEFLATED */
  this.last_flush = -1;   /* value of flush param for previous deflate call */

  this.w_size = 0;  /* LZ77 window size (32K by default) */
  this.w_bits = 0;  /* log2(w_size)  (8..16) */
  this.w_mask = 0;  /* w_size - 1 */

  this.window = null;
  /* Sliding window. Input bytes are read into the second half of the window,
   * and move to the first half later to keep a dictionary of at least wSize
   * bytes. With this organization, matches are limited to a distance of
   * wSize-MAX_MATCH bytes, but this ensures that IO is always
   * performed with a length multiple of the block size.
   */

  this.window_size = 0;
  /* Actual size of window: 2*wSize, except when the user input buffer
   * is directly used as sliding window.
   */

  this.prev = null;
  /* Link to older string with same hash index. To limit the size of this
   * array to 64K, this link is maintained only for the last 32K strings.
   * An index in this array is thus a window index modulo 32K.
   */

  this.head = null;   /* Heads of the hash chains or NIL. */

  this.ins_h = 0;       /* hash index of string to be inserted */
  this.hash_size = 0;   /* number of elements in hash table */
  this.hash_bits = 0;   /* log2(hash_size) */
  this.hash_mask = 0;   /* hash_size-1 */

  this.hash_shift = 0;
  /* Number of bits by which ins_h must be shifted at each input
   * step. It must be such that after MIN_MATCH steps, the oldest
   * byte no longer takes part in the hash key, that is:
   *   hash_shift * MIN_MATCH >= hash_bits
   */

  this.block_start = 0;
  /* Window position at the beginning of the current output block. Gets
   * negative when the window is moved backwards.
   */

  this.match_length = 0;      /* length of best match */
  this.prev_match = 0;        /* previous match */
  this.match_available = 0;   /* set if previous match exists */
  this.strstart = 0;          /* start of string to insert */
  this.match_start = 0;       /* start of matching string */
  this.lookahead = 0;         /* number of valid bytes ahead in window */

  this.prev_length = 0;
  /* Length of the best match at previous step. Matches not greater than this
   * are discarded. This is used in the lazy match evaluation.
   */

  this.max_chain_length = 0;
  /* To speed up deflation, hash chains are never searched beyond this
   * length.  A higher limit improves compression ratio but degrades the
   * speed.
   */

  this.max_lazy_match = 0;
  /* Attempt to find a better match only when the current match is strictly
   * smaller than this value. This mechanism is used only for compression
   * levels >= 4.
   */
  // That's alias to max_lazy_match, don't use directly
  //this.max_insert_length = 0;
  /* Insert new strings in the hash table only if the match length is not
   * greater than this length. This saves time but degrades compression.
   * max_insert_length is used only for compression levels <= 3.
   */

  this.level = 0;     /* compression level (1..9) */
  this.strategy = 0;  /* favor or force Huffman coding*/

  this.good_match = 0;
  /* Use a faster search when the previous match is longer than this */

  this.nice_match = 0; /* Stop searching when current match exceeds this */

              /* used by trees.c: */

  /* Didn't use ct_data typedef below to suppress compiler warning */

  // struct ct_data_s dyn_ltree[HEAP_SIZE];   /* literal and length tree */
  // struct ct_data_s dyn_dtree[2*D_CODES+1]; /* distance tree */
  // struct ct_data_s bl_tree[2*BL_CODES+1];  /* Huffman tree for bit lengths */

  // Use flat array of DOUBLE size, with interleaved fata,
  // because JS does not support effective
  this.dyn_ltree  = new utils.Buf16(HEAP_SIZE * 2);
  this.dyn_dtree  = new utils.Buf16((2 * D_CODES + 1) * 2);
  this.bl_tree    = new utils.Buf16((2 * BL_CODES + 1) * 2);
  zero(this.dyn_ltree);
  zero(this.dyn_dtree);
  zero(this.bl_tree);

  this.l_desc   = null;         /* desc. for literal tree */
  this.d_desc   = null;         /* desc. for distance tree */
  this.bl_desc  = null;         /* desc. for bit length tree */

  //ush bl_count[MAX_BITS+1];
  this.bl_count = new utils.Buf16(MAX_BITS + 1);
  /* number of codes at each bit length for an optimal tree */

  //int heap[2*L_CODES+1];      /* heap used to build the Huffman trees */
  this.heap = new utils.Buf16(2 * L_CODES + 1);  /* heap used to build the Huffman trees */
  zero(this.heap);

  this.heap_len = 0;               /* number of elements in the heap */
  this.heap_max = 0;               /* element of largest frequency */
  /* The sons of heap[n] are heap[2*n] and heap[2*n+1]. heap[0] is not used.
   * The same heap array is used to build all trees.
   */

  this.depth = new utils.Buf16(2 * L_CODES + 1); //uch depth[2*L_CODES+1];
  zero(this.depth);
  /* Depth of each subtree used as tie breaker for trees of equal frequency
   */

  this.l_buf = 0;          /* buffer index for literals or lengths */

  this.lit_bufsize = 0;
  /* Size of match buffer for literals/lengths.  There are 4 reasons for
   * limiting lit_bufsize to 64K:
   *   - frequencies can be kept in 16 bit counters
   *   - if compression is not successful for the first block, all input
   *     data is still in the window so we can still emit a stored block even
   *     when input comes from standard input.  (This can also be done for
   *     all blocks if lit_bufsize is not greater than 32K.)
   *   - if compression is not successful for a file smaller than 64K, we can
   *     even emit a stored file instead of a stored block (saving 5 bytes).
   *     This is applicable only for zip (not gzip or zlib).
   *   - creating new Huffman trees less frequently may not provide fast
   *     adaptation to changes in the input data statistics. (Take for
   *     example a binary file with poorly compressible code followed by
   *     a highly compressible string table.) Smaller buffer sizes give
   *     fast adaptation but have of course the overhead of transmitting
   *     trees more frequently.
   *   - I can't count above 4
   */

  this.last_lit = 0;      /* running index in l_buf */

  this.d_buf = 0;
  /* Buffer index for distances. To simplify the code, d_buf and l_buf have
   * the same number of elements. To use different lengths, an extra flag
   * array would be necessary.
   */

  this.opt_len = 0;       /* bit length of current block with optimal trees */
  this.static_len = 0;    /* bit length of current block with static trees */
  this.matches = 0;       /* number of string matches in current block */
  this.insert = 0;        /* bytes at end of window left to insert */


  this.bi_buf = 0;
  /* Output buffer. bits are inserted starting at the bottom (least
   * significant bits).
   */
  this.bi_valid = 0;
  /* Number of valid bits in bi_buf.  All bits above the last valid bit
   * are always zero.
   */

  // Used for window memory init. We safely ignore it for JS. That makes
  // sense only for pointers and memory check tools.
  //this.high_water = 0;
  /* High water mark offset in window for initialized bytes -- bytes above
   * this are set to zero in order to avoid memory check warnings when
   * longest match routines access bytes past the input.  This is then
   * updated to the new high water mark.
   */
}


function deflateResetKeep(strm) {
  var s;

  if (!strm || !strm.state) {
    return err(strm, Z_STREAM_ERROR);
  }

  strm.total_in = strm.total_out = 0;
  strm.data_type = Z_UNKNOWN;

  s = strm.state;
  s.pending = 0;
  s.pending_out = 0;

  if (s.wrap < 0) {
    s.wrap = -s.wrap;
    /* was made negative by deflate(..., Z_FINISH); */
  }
  s.status = (s.wrap ? INIT_STATE : BUSY_STATE);
  strm.adler = (s.wrap === 2) ?
    0  // crc32(0, Z_NULL, 0)
  :
    1; // adler32(0, Z_NULL, 0)
  s.last_flush = Z_NO_FLUSH;
  trees._tr_init(s);
  return Z_OK;
}


function deflateReset(strm) {
  var ret = deflateResetKeep(strm);
  if (ret === Z_OK) {
    lm_init(strm.state);
  }
  return ret;
}


function deflateSetHeader(strm, head) {
  if (!strm || !strm.state) { return Z_STREAM_ERROR; }
  if (strm.state.wrap !== 2) { return Z_STREAM_ERROR; }
  strm.state.gzhead = head;
  return Z_OK;
}


function deflateInit2(strm, level, method, windowBits, memLevel, strategy) {
  if (!strm) { // === Z_NULL
    return Z_STREAM_ERROR;
  }
  var wrap = 1;

  if (level === Z_DEFAULT_COMPRESSION) {
    level = 6;
  }

  if (windowBits < 0) { /* suppress zlib wrapper */
    wrap = 0;
    windowBits = -windowBits;
  }

  else if (windowBits > 15) {
    wrap = 2;           /* write gzip wrapper instead */
    windowBits -= 16;
  }


  if (memLevel < 1 || memLevel > MAX_MEM_LEVEL || method !== Z_DEFLATED ||
    windowBits < 8 || windowBits > 15 || level < 0 || level > 9 ||
    strategy < 0 || strategy > Z_FIXED) {
    return err(strm, Z_STREAM_ERROR);
  }


  if (windowBits === 8) {
    windowBits = 9;
  }
  /* until 256-byte window bug fixed */

  var s = new DeflateState();

  strm.state = s;
  s.strm = strm;

  s.wrap = wrap;
  s.gzhead = null;
  s.w_bits = windowBits;
  s.w_size = 1 << s.w_bits;
  s.w_mask = s.w_size - 1;

  s.hash_bits = memLevel + 7;
  s.hash_size = 1 << s.hash_bits;
  s.hash_mask = s.hash_size - 1;
  s.hash_shift = ~~((s.hash_bits + MIN_MATCH - 1) / MIN_MATCH);

  s.window = new utils.Buf8(s.w_size * 2);
  s.head = new utils.Buf16(s.hash_size);
  s.prev = new utils.Buf16(s.w_size);

  // Don't need mem init magic for JS.
  //s.high_water = 0;  /* nothing written to s->window yet */

  s.lit_bufsize = 1 << (memLevel + 6); /* 16K elements by default */

  s.pending_buf_size = s.lit_bufsize * 4;

  //overlay = (ushf *) ZALLOC(strm, s->lit_bufsize, sizeof(ush)+2);
  //s->pending_buf = (uchf *) overlay;
  s.pending_buf = new utils.Buf8(s.pending_buf_size);

  // It is offset from `s.pending_buf` (size is `s.lit_bufsize * 2`)
  //s->d_buf = overlay + s->lit_bufsize/sizeof(ush);
  s.d_buf = 1 * s.lit_bufsize;

  //s->l_buf = s->pending_buf + (1+sizeof(ush))*s->lit_bufsize;
  s.l_buf = (1 + 2) * s.lit_bufsize;

  s.level = level;
  s.strategy = strategy;
  s.method = method;

  return deflateReset(strm);
}

function deflateInit(strm, level) {
  return deflateInit2(strm, level, Z_DEFLATED, MAX_WBITS, DEF_MEM_LEVEL, Z_DEFAULT_STRATEGY);
}


function deflate(strm, flush) {
  var old_flush, s;
  var beg, val; // for gzip header write only

  if (!strm || !strm.state ||
    flush > Z_BLOCK || flush < 0) {
    return strm ? err(strm, Z_STREAM_ERROR) : Z_STREAM_ERROR;
  }

  s = strm.state;

  if (!strm.output ||
      (!strm.input && strm.avail_in !== 0) ||
      (s.status === FINISH_STATE && flush !== Z_FINISH)) {
    return err(strm, (strm.avail_out === 0) ? Z_BUF_ERROR : Z_STREAM_ERROR);
  }

  s.strm = strm; /* just in case */
  old_flush = s.last_flush;
  s.last_flush = flush;

  /* Write the header */
  if (s.status === INIT_STATE) {

    if (s.wrap === 2) { // GZIP header
      strm.adler = 0;  //crc32(0L, Z_NULL, 0);
      put_byte(s, 31);
      put_byte(s, 139);
      put_byte(s, 8);
      if (!s.gzhead) { // s->gzhead == Z_NULL
        put_byte(s, 0);
        put_byte(s, 0);
        put_byte(s, 0);
        put_byte(s, 0);
        put_byte(s, 0);
        put_byte(s, s.level === 9 ? 2 :
                    (s.strategy >= Z_HUFFMAN_ONLY || s.level < 2 ?
                     4 : 0));
        put_byte(s, OS_CODE);
        s.status = BUSY_STATE;
      }
      else {
        put_byte(s, (s.gzhead.text ? 1 : 0) +
                    (s.gzhead.hcrc ? 2 : 0) +
                    (!s.gzhead.extra ? 0 : 4) +
                    (!s.gzhead.name ? 0 : 8) +
                    (!s.gzhead.comment ? 0 : 16)
        );
        put_byte(s, s.gzhead.time & 0xff);
        put_byte(s, (s.gzhead.time >> 8) & 0xff);
        put_byte(s, (s.gzhead.time >> 16) & 0xff);
        put_byte(s, (s.gzhead.time >> 24) & 0xff);
        put_byte(s, s.level === 9 ? 2 :
                    (s.strategy >= Z_HUFFMAN_ONLY || s.level < 2 ?
                     4 : 0));
        put_byte(s, s.gzhead.os & 0xff);
        if (s.gzhead.extra && s.gzhead.extra.length) {
          put_byte(s, s.gzhead.extra.length & 0xff);
          put_byte(s, (s.gzhead.extra.length >> 8) & 0xff);
        }
        if (s.gzhead.hcrc) {
          strm.adler = crc32(strm.adler, s.pending_buf, s.pending, 0);
        }
        s.gzindex = 0;
        s.status = EXTRA_STATE;
      }
    }
    else // DEFLATE header
    {
      var header = (Z_DEFLATED + ((s.w_bits - 8) << 4)) << 8;
      var level_flags = -1;

      if (s.strategy >= Z_HUFFMAN_ONLY || s.level < 2) {
        level_flags = 0;
      } else if (s.level < 6) {
        level_flags = 1;
      } else if (s.level === 6) {
        level_flags = 2;
      } else {
        level_flags = 3;
      }
      header |= (level_flags << 6);
      if (s.strstart !== 0) { header |= PRESET_DICT; }
      header += 31 - (header % 31);

      s.status = BUSY_STATE;
      putShortMSB(s, header);

      /* Save the adler32 of the preset dictionary: */
      if (s.strstart !== 0) {
        putShortMSB(s, strm.adler >>> 16);
        putShortMSB(s, strm.adler & 0xffff);
      }
      strm.adler = 1; // adler32(0L, Z_NULL, 0);
    }
  }

//#ifdef GZIP
  if (s.status === EXTRA_STATE) {
    if (s.gzhead.extra/* != Z_NULL*/) {
      beg = s.pending;  /* start of bytes to update crc */

      while (s.gzindex < (s.gzhead.extra.length & 0xffff)) {
        if (s.pending === s.pending_buf_size) {
          if (s.gzhead.hcrc && s.pending > beg) {
            strm.adler = crc32(strm.adler, s.pending_buf, s.pending - beg, beg);
          }
          flush_pending(strm);
          beg = s.pending;
          if (s.pending === s.pending_buf_size) {
            break;
          }
        }
        put_byte(s, s.gzhead.extra[s.gzindex] & 0xff);
        s.gzindex++;
      }
      if (s.gzhead.hcrc && s.pending > beg) {
        strm.adler = crc32(strm.adler, s.pending_buf, s.pending - beg, beg);
      }
      if (s.gzindex === s.gzhead.extra.length) {
        s.gzindex = 0;
        s.status = NAME_STATE;
      }
    }
    else {
      s.status = NAME_STATE;
    }
  }
  if (s.status === NAME_STATE) {
    if (s.gzhead.name/* != Z_NULL*/) {
      beg = s.pending;  /* start of bytes to update crc */
      //int val;

      do {
        if (s.pending === s.pending_buf_size) {
          if (s.gzhead.hcrc && s.pending > beg) {
            strm.adler = crc32(strm.adler, s.pending_buf, s.pending - beg, beg);
          }
          flush_pending(strm);
          beg = s.pending;
          if (s.pending === s.pending_buf_size) {
            val = 1;
            break;
          }
        }
        // JS specific: little magic to add zero terminator to end of string
        if (s.gzindex < s.gzhead.name.length) {
          val = s.gzhead.name.charCodeAt(s.gzindex++) & 0xff;
        } else {
          val = 0;
        }
        put_byte(s, val);
      } while (val !== 0);

      if (s.gzhead.hcrc && s.pending > beg) {
        strm.adler = crc32(strm.adler, s.pending_buf, s.pending - beg, beg);
      }
      if (val === 0) {
        s.gzindex = 0;
        s.status = COMMENT_STATE;
      }
    }
    else {
      s.status = COMMENT_STATE;
    }
  }
  if (s.status === COMMENT_STATE) {
    if (s.gzhead.comment/* != Z_NULL*/) {
      beg = s.pending;  /* start of bytes to update crc */
      //int val;

      do {
        if (s.pending === s.pending_buf_size) {
          if (s.gzhead.hcrc && s.pending > beg) {
            strm.adler = crc32(strm.adler, s.pending_buf, s.pending - beg, beg);
          }
          flush_pending(strm);
          beg = s.pending;
          if (s.pending === s.pending_buf_size) {
            val = 1;
            break;
          }
        }
        // JS specific: little magic to add zero terminator to end of string
        if (s.gzindex < s.gzhead.comment.length) {
          val = s.gzhead.comment.charCodeAt(s.gzindex++) & 0xff;
        } else {
          val = 0;
        }
        put_byte(s, val);
      } while (val !== 0);

      if (s.gzhead.hcrc && s.pending > beg) {
        strm.adler = crc32(strm.adler, s.pending_buf, s.pending - beg, beg);
      }
      if (val === 0) {
        s.status = HCRC_STATE;
      }
    }
    else {
      s.status = HCRC_STATE;
    }
  }
  if (s.status === HCRC_STATE) {
    if (s.gzhead.hcrc) {
      if (s.pending + 2 > s.pending_buf_size) {
        flush_pending(strm);
      }
      if (s.pending + 2 <= s.pending_buf_size) {
        put_byte(s, strm.adler & 0xff);
        put_byte(s, (strm.adler >> 8) & 0xff);
        strm.adler = 0; //crc32(0L, Z_NULL, 0);
        s.status = BUSY_STATE;
      }
    }
    else {
      s.status = BUSY_STATE;
    }
  }
//#endif

  /* Flush as much pending output as possible */
  if (s.pending !== 0) {
    flush_pending(strm);
    if (strm.avail_out === 0) {
      /* Since avail_out is 0, deflate will be called again with
       * more output space, but possibly with both pending and
       * avail_in equal to zero. There won't be anything to do,
       * but this is not an error situation so make sure we
       * return OK instead of BUF_ERROR at next call of deflate:
       */
      s.last_flush = -1;
      return Z_OK;
    }

    /* Make sure there is something to do and avoid duplicate consecutive
     * flushes. For repeated and useless calls with Z_FINISH, we keep
     * returning Z_STREAM_END instead of Z_BUF_ERROR.
     */
  } else if (strm.avail_in === 0 && rank(flush) <= rank(old_flush) &&
    flush !== Z_FINISH) {
    return err(strm, Z_BUF_ERROR);
  }

  /* User must not provide more input after the first FINISH: */
  if (s.status === FINISH_STATE && strm.avail_in !== 0) {
    return err(strm, Z_BUF_ERROR);
  }

  /* Start a new block or continue the current one.
   */
  if (strm.avail_in !== 0 || s.lookahead !== 0 ||
    (flush !== Z_NO_FLUSH && s.status !== FINISH_STATE)) {
    var bstate = (s.strategy === Z_HUFFMAN_ONLY) ? deflate_huff(s, flush) :
      (s.strategy === Z_RLE ? deflate_rle(s, flush) :
        configuration_table[s.level].func(s, flush));

    if (bstate === BS_FINISH_STARTED || bstate === BS_FINISH_DONE) {
      s.status = FINISH_STATE;
    }
    if (bstate === BS_NEED_MORE || bstate === BS_FINISH_STARTED) {
      if (strm.avail_out === 0) {
        s.last_flush = -1;
        /* avoid BUF_ERROR next call, see above */
      }
      return Z_OK;
      /* If flush != Z_NO_FLUSH && avail_out == 0, the next call
       * of deflate should use the same flush parameter to make sure
       * that the flush is complete. So we don't have to output an
       * empty block here, this will be done at next call. This also
       * ensures that for a very small output buffer, we emit at most
       * one empty block.
       */
    }
    if (bstate === BS_BLOCK_DONE) {
      if (flush === Z_PARTIAL_FLUSH) {
        trees._tr_align(s);
      }
      else if (flush !== Z_BLOCK) { /* FULL_FLUSH or SYNC_FLUSH */

        trees._tr_stored_block(s, 0, 0, false);
        /* For a full flush, this empty block will be recognized
         * as a special marker by inflate_sync().
         */
        if (flush === Z_FULL_FLUSH) {
          /*** CLEAR_HASH(s); ***/             /* forget history */
          zero(s.head); // Fill with NIL (= 0);

          if (s.lookahead === 0) {
            s.strstart = 0;
            s.block_start = 0;
            s.insert = 0;
          }
        }
      }
      flush_pending(strm);
      if (strm.avail_out === 0) {
        s.last_flush = -1; /* avoid BUF_ERROR at next call, see above */
        return Z_OK;
      }
    }
  }
  //Assert(strm->avail_out > 0, "bug2");
  //if (strm.avail_out <= 0) { throw new Error("bug2");}

  if (flush !== Z_FINISH) { return Z_OK; }
  if (s.wrap <= 0) { return Z_STREAM_END; }

  /* Write the trailer */
  if (s.wrap === 2) {
    put_byte(s, strm.adler & 0xff);
    put_byte(s, (strm.adler >> 8) & 0xff);
    put_byte(s, (strm.adler >> 16) & 0xff);
    put_byte(s, (strm.adler >> 24) & 0xff);
    put_byte(s, strm.total_in & 0xff);
    put_byte(s, (strm.total_in >> 8) & 0xff);
    put_byte(s, (strm.total_in >> 16) & 0xff);
    put_byte(s, (strm.total_in >> 24) & 0xff);
  }
  else
  {
    putShortMSB(s, strm.adler >>> 16);
    putShortMSB(s, strm.adler & 0xffff);
  }

  flush_pending(strm);
  /* If avail_out is zero, the application will call deflate again
   * to flush the rest.
   */
  if (s.wrap > 0) { s.wrap = -s.wrap; }
  /* write the trailer only once! */
  return s.pending !== 0 ? Z_OK : Z_STREAM_END;
}

function deflateEnd(strm) {
  var status;

  if (!strm/*== Z_NULL*/ || !strm.state/*== Z_NULL*/) {
    return Z_STREAM_ERROR;
  }

  status = strm.state.status;
  if (status !== INIT_STATE &&
    status !== EXTRA_STATE &&
    status !== NAME_STATE &&
    status !== COMMENT_STATE &&
    status !== HCRC_STATE &&
    status !== BUSY_STATE &&
    status !== FINISH_STATE
  ) {
    return err(strm, Z_STREAM_ERROR);
  }

  strm.state = null;

  return status === BUSY_STATE ? err(strm, Z_DATA_ERROR) : Z_OK;
}


/* =========================================================================
 * Initializes the compression dictionary from the given byte
 * sequence without producing any compressed output.
 */
function deflateSetDictionary(strm, dictionary) {
  var dictLength = dictionary.length;

  var s;
  var str, n;
  var wrap;
  var avail;
  var next;
  var input;
  var tmpDict;

  if (!strm/*== Z_NULL*/ || !strm.state/*== Z_NULL*/) {
    return Z_STREAM_ERROR;
  }

  s = strm.state;
  wrap = s.wrap;

  if (wrap === 2 || (wrap === 1 && s.status !== INIT_STATE) || s.lookahead) {
    return Z_STREAM_ERROR;
  }

  /* when using zlib wrappers, compute Adler-32 for provided dictionary */
  if (wrap === 1) {
    /* adler32(strm->adler, dictionary, dictLength); */
    strm.adler = adler32(strm.adler, dictionary, dictLength, 0);
  }

  s.wrap = 0;   /* avoid computing Adler-32 in read_buf */

  /* if dictionary would fill window, just replace the history */
  if (dictLength >= s.w_size) {
    if (wrap === 0) {            /* already empty otherwise */
      /*** CLEAR_HASH(s); ***/
      zero(s.head); // Fill with NIL (= 0);
      s.strstart = 0;
      s.block_start = 0;
      s.insert = 0;
    }
    /* use the tail */
    // dictionary = dictionary.slice(dictLength - s.w_size);
    tmpDict = new utils.Buf8(s.w_size);
    utils.arraySet(tmpDict, dictionary, dictLength - s.w_size, s.w_size, 0);
    dictionary = tmpDict;
    dictLength = s.w_size;
  }
  /* insert dictionary into window and hash */
  avail = strm.avail_in;
  next = strm.next_in;
  input = strm.input;
  strm.avail_in = dictLength;
  strm.next_in = 0;
  strm.input = dictionary;
  fill_window(s);
  while (s.lookahead >= MIN_MATCH) {
    str = s.strstart;
    n = s.lookahead - (MIN_MATCH - 1);
    do {
      /* UPDATE_HASH(s, s->ins_h, s->window[str + MIN_MATCH-1]); */
      s.ins_h = ((s.ins_h << s.hash_shift) ^ s.window[str + MIN_MATCH - 1]) & s.hash_mask;

      s.prev[str & s.w_mask] = s.head[s.ins_h];

      s.head[s.ins_h] = str;
      str++;
    } while (--n);
    s.strstart = str;
    s.lookahead = MIN_MATCH - 1;
    fill_window(s);
  }
  s.strstart += s.lookahead;
  s.block_start = s.strstart;
  s.insert = s.lookahead;
  s.lookahead = 0;
  s.match_length = s.prev_length = MIN_MATCH - 1;
  s.match_available = 0;
  strm.next_in = next;
  strm.input = input;
  strm.avail_in = avail;
  s.wrap = wrap;
  return Z_OK;
}


exports.deflateInit = deflateInit;
exports.deflateInit2 = deflateInit2;
exports.deflateReset = deflateReset;
exports.deflateResetKeep = deflateResetKeep;
exports.deflateSetHeader = deflateSetHeader;
exports.deflate = deflate;
exports.deflateEnd = deflateEnd;
exports.deflateSetDictionary = deflateSetDictionary;
exports.deflateInfo = 'pako deflate (from Nodeca project)';

/* Not implemented
exports.deflateBound = deflateBound;
exports.deflateCopy = deflateCopy;
exports.deflateParams = deflateParams;
exports.deflatePending = deflatePending;
exports.deflatePrime = deflatePrime;
exports.deflateTune = deflateTune;
*/

},{"../utils/common":16,"./adler32":18,"./crc32":20,"./messages":26,"./trees":27}],22:[function(require,module,exports){
'use strict';

// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.

function GZheader() {
  /* true if compressed data believed to be text */
  this.text       = 0;
  /* modification time */
  this.time       = 0;
  /* extra flags (not used when writing a gzip file) */
  this.xflags     = 0;
  /* operating system */
  this.os         = 0;
  /* pointer to extra field or Z_NULL if none */
  this.extra      = null;
  /* extra field length (valid if extra != Z_NULL) */
  this.extra_len  = 0; // Actually, we don't need it in JS,
                       // but leave for few code modifications

  //
  // Setup limits is not necessary because in js we should not preallocate memory
  // for inflate use constant limit in 65536 bytes
  //

  /* space at extra (only when reading header) */
  // this.extra_max  = 0;
  /* pointer to zero-terminated file name or Z_NULL */
  this.name       = '';
  /* space at name (only when reading header) */
  // this.name_max   = 0;
  /* pointer to zero-terminated comment or Z_NULL */
  this.comment    = '';
  /* space at comment (only when reading header) */
  // this.comm_max   = 0;
  /* true if there was or will be a header crc */
  this.hcrc       = 0;
  /* true when done reading gzip header (not used when writing a gzip file) */
  this.done       = false;
}

module.exports = GZheader;

},{}],23:[function(require,module,exports){
'use strict';

// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.

// See state defs from inflate.js
var BAD = 30;       /* got a data error -- remain here until reset */
var TYPE = 12;      /* i: waiting for type bits, including last-flag bit */

/*
   Decode literal, length, and distance codes and write out the resulting
   literal and match bytes until either not enough input or output is
   available, an end-of-block is encountered, or a data error is encountered.
   When large enough input and output buffers are supplied to inflate(), for
   example, a 16K input buffer and a 64K output buffer, more than 95% of the
   inflate execution time is spent in this routine.

   Entry assumptions:

        state.mode === LEN
        strm.avail_in >= 6
        strm.avail_out >= 258
        start >= strm.avail_out
        state.bits < 8

   On return, state.mode is one of:

        LEN -- ran out of enough output space or enough available input
        TYPE -- reached end of block code, inflate() to interpret next block
        BAD -- error in block data

   Notes:

    - The maximum input bits used by a length/distance pair is 15 bits for the
      length code, 5 bits for the length extra, 15 bits for the distance code,
      and 13 bits for the distance extra.  This totals 48 bits, or six bytes.
      Therefore if strm.avail_in >= 6, then there is enough input to avoid
      checking for available input while decoding.

    - The maximum bytes that a single length/distance pair can output is 258
      bytes, which is the maximum length that can be coded.  inflate_fast()
      requires strm.avail_out >= 258 for each loop to avoid checking for
      output space.
 */
module.exports = function inflate_fast(strm, start) {
  var state;
  var _in;                    /* local strm.input */
  var last;                   /* have enough input while in < last */
  var _out;                   /* local strm.output */
  var beg;                    /* inflate()'s initial strm.output */
  var end;                    /* while out < end, enough space available */
//#ifdef INFLATE_STRICT
  var dmax;                   /* maximum distance from zlib header */
//#endif
  var wsize;                  /* window size or zero if not using window */
  var whave;                  /* valid bytes in the window */
  var wnext;                  /* window write index */
  // Use `s_window` instead `window`, avoid conflict with instrumentation tools
  var s_window;               /* allocated sliding window, if wsize != 0 */
  var hold;                   /* local strm.hold */
  var bits;                   /* local strm.bits */
  var lcode;                  /* local strm.lencode */
  var dcode;                  /* local strm.distcode */
  var lmask;                  /* mask for first level of length codes */
  var dmask;                  /* mask for first level of distance codes */
  var here;                   /* retrieved table entry */
  var op;                     /* code bits, operation, extra bits, or */
                              /*  window position, window bytes to copy */
  var len;                    /* match length, unused bytes */
  var dist;                   /* match distance */
  var from;                   /* where to copy match from */
  var from_source;


  var input, output; // JS specific, because we have no pointers

  /* copy state to local variables */
  state = strm.state;
  //here = state.here;
  _in = strm.next_in;
  input = strm.input;
  last = _in + (strm.avail_in - 5);
  _out = strm.next_out;
  output = strm.output;
  beg = _out - (start - strm.avail_out);
  end = _out + (strm.avail_out - 257);
//#ifdef INFLATE_STRICT
  dmax = state.dmax;
//#endif
  wsize = state.wsize;
  whave = state.whave;
  wnext = state.wnext;
  s_window = state.window;
  hold = state.hold;
  bits = state.bits;
  lcode = state.lencode;
  dcode = state.distcode;
  lmask = (1 << state.lenbits) - 1;
  dmask = (1 << state.distbits) - 1;


  /* decode literals and length/distances until end-of-block or not enough
     input data or output space */

  top:
  do {
    if (bits < 15) {
      hold += input[_in++] << bits;
      bits += 8;
      hold += input[_in++] << bits;
      bits += 8;
    }

    here = lcode[hold & lmask];

    dolen:
    for (;;) { // Goto emulation
      op = here >>> 24/*here.bits*/;
      hold >>>= op;
      bits -= op;
      op = (here >>> 16) & 0xff/*here.op*/;
      if (op === 0) {                          /* literal */
        //Tracevv((stderr, here.val >= 0x20 && here.val < 0x7f ?
        //        "inflate:         literal '%c'\n" :
        //        "inflate:         literal 0x%02x\n", here.val));
        output[_out++] = here & 0xffff/*here.val*/;
      }
      else if (op & 16) {                     /* length base */
        len = here & 0xffff/*here.val*/;
        op &= 15;                           /* number of extra bits */
        if (op) {
          if (bits < op) {
            hold += input[_in++] << bits;
            bits += 8;
          }
          len += hold & ((1 << op) - 1);
          hold >>>= op;
          bits -= op;
        }
        //Tracevv((stderr, "inflate:         length %u\n", len));
        if (bits < 15) {
          hold += input[_in++] << bits;
          bits += 8;
          hold += input[_in++] << bits;
          bits += 8;
        }
        here = dcode[hold & dmask];

        dodist:
        for (;;) { // goto emulation
          op = here >>> 24/*here.bits*/;
          hold >>>= op;
          bits -= op;
          op = (here >>> 16) & 0xff/*here.op*/;

          if (op & 16) {                      /* distance base */
            dist = here & 0xffff/*here.val*/;
            op &= 15;                       /* number of extra bits */
            if (bits < op) {
              hold += input[_in++] << bits;
              bits += 8;
              if (bits < op) {
                hold += input[_in++] << bits;
                bits += 8;
              }
            }
            dist += hold & ((1 << op) - 1);
//#ifdef INFLATE_STRICT
            if (dist > dmax) {
              strm.msg = 'invalid distance too far back';
              state.mode = BAD;
              break top;
            }
//#endif
            hold >>>= op;
            bits -= op;
            //Tracevv((stderr, "inflate:         distance %u\n", dist));
            op = _out - beg;                /* max distance in output */
            if (dist > op) {                /* see if copy from window */
              op = dist - op;               /* distance back in window */
              if (op > whave) {
                if (state.sane) {
                  strm.msg = 'invalid distance too far back';
                  state.mode = BAD;
                  break top;
                }

// (!) This block is disabled in zlib defaults,
// don't enable it for binary compatibility
//#ifdef INFLATE_ALLOW_INVALID_DISTANCE_TOOFAR_ARRR
//                if (len <= op - whave) {
//                  do {
//                    output[_out++] = 0;
//                  } while (--len);
//                  continue top;
//                }
//                len -= op - whave;
//                do {
//                  output[_out++] = 0;
//                } while (--op > whave);
//                if (op === 0) {
//                  from = _out - dist;
//                  do {
//                    output[_out++] = output[from++];
//                  } while (--len);
//                  continue top;
//                }
//#endif
              }
              from = 0; // window index
              from_source = s_window;
              if (wnext === 0) {           /* very common case */
                from += wsize - op;
                if (op < len) {         /* some from window */
                  len -= op;
                  do {
                    output[_out++] = s_window[from++];
                  } while (--op);
                  from = _out - dist;  /* rest from output */
                  from_source = output;
                }
              }
              else if (wnext < op) {      /* wrap around window */
                from += wsize + wnext - op;
                op -= wnext;
                if (op < len) {         /* some from end of window */
                  len -= op;
                  do {
                    output[_out++] = s_window[from++];
                  } while (--op);
                  from = 0;
                  if (wnext < len) {  /* some from start of window */
                    op = wnext;
                    len -= op;
                    do {
                      output[_out++] = s_window[from++];
                    } while (--op);
                    from = _out - dist;      /* rest from output */
                    from_source = output;
                  }
                }
              }
              else {                      /* contiguous in window */
                from += wnext - op;
                if (op < len) {         /* some from window */
                  len -= op;
                  do {
                    output[_out++] = s_window[from++];
                  } while (--op);
                  from = _out - dist;  /* rest from output */
                  from_source = output;
                }
              }
              while (len > 2) {
                output[_out++] = from_source[from++];
                output[_out++] = from_source[from++];
                output[_out++] = from_source[from++];
                len -= 3;
              }
              if (len) {
                output[_out++] = from_source[from++];
                if (len > 1) {
                  output[_out++] = from_source[from++];
                }
              }
            }
            else {
              from = _out - dist;          /* copy direct from output */
              do {                        /* minimum length is three */
                output[_out++] = output[from++];
                output[_out++] = output[from++];
                output[_out++] = output[from++];
                len -= 3;
              } while (len > 2);
              if (len) {
                output[_out++] = output[from++];
                if (len > 1) {
                  output[_out++] = output[from++];
                }
              }
            }
          }
          else if ((op & 64) === 0) {          /* 2nd level distance code */
            here = dcode[(here & 0xffff)/*here.val*/ + (hold & ((1 << op) - 1))];
            continue dodist;
          }
          else {
            strm.msg = 'invalid distance code';
            state.mode = BAD;
            break top;
          }

          break; // need to emulate goto via "continue"
        }
      }
      else if ((op & 64) === 0) {              /* 2nd level length code */
        here = lcode[(here & 0xffff)/*here.val*/ + (hold & ((1 << op) - 1))];
        continue dolen;
      }
      else if (op & 32) {                     /* end-of-block */
        //Tracevv((stderr, "inflate:         end of block\n"));
        state.mode = TYPE;
        break top;
      }
      else {
        strm.msg = 'invalid literal/length code';
        state.mode = BAD;
        break top;
      }

      break; // need to emulate goto via "continue"
    }
  } while (_in < last && _out < end);

  /* return unused bytes (on entry, bits < 8, so in won't go too far back) */
  len = bits >> 3;
  _in -= len;
  bits -= len << 3;
  hold &= (1 << bits) - 1;

  /* update state and return */
  strm.next_in = _in;
  strm.next_out = _out;
  strm.avail_in = (_in < last ? 5 + (last - _in) : 5 - (_in - last));
  strm.avail_out = (_out < end ? 257 + (end - _out) : 257 - (_out - end));
  state.hold = hold;
  state.bits = bits;
  return;
};

},{}],24:[function(require,module,exports){
'use strict';

// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.

var utils         = require('../utils/common');
var adler32       = require('./adler32');
var crc32         = require('./crc32');
var inflate_fast  = require('./inffast');
var inflate_table = require('./inftrees');

var CODES = 0;
var LENS = 1;
var DISTS = 2;

/* Public constants ==========================================================*/
/* ===========================================================================*/


/* Allowed flush values; see deflate() and inflate() below for details */
//var Z_NO_FLUSH      = 0;
//var Z_PARTIAL_FLUSH = 1;
//var Z_SYNC_FLUSH    = 2;
//var Z_FULL_FLUSH    = 3;
var Z_FINISH        = 4;
var Z_BLOCK         = 5;
var Z_TREES         = 6;


/* Return codes for the compression/decompression functions. Negative values
 * are errors, positive values are used for special but normal events.
 */
var Z_OK            = 0;
var Z_STREAM_END    = 1;
var Z_NEED_DICT     = 2;
//var Z_ERRNO         = -1;
var Z_STREAM_ERROR  = -2;
var Z_DATA_ERROR    = -3;
var Z_MEM_ERROR     = -4;
var Z_BUF_ERROR     = -5;
//var Z_VERSION_ERROR = -6;

/* The deflate compression method */
var Z_DEFLATED  = 8;


/* STATES ====================================================================*/
/* ===========================================================================*/


var    HEAD = 1;       /* i: waiting for magic header */
var    FLAGS = 2;      /* i: waiting for method and flags (gzip) */
var    TIME = 3;       /* i: waiting for modification time (gzip) */
var    OS = 4;         /* i: waiting for extra flags and operating system (gzip) */
var    EXLEN = 5;      /* i: waiting for extra length (gzip) */
var    EXTRA = 6;      /* i: waiting for extra bytes (gzip) */
var    NAME = 7;       /* i: waiting for end of file name (gzip) */
var    COMMENT = 8;    /* i: waiting for end of comment (gzip) */
var    HCRC = 9;       /* i: waiting for header crc (gzip) */
var    DICTID = 10;    /* i: waiting for dictionary check value */
var    DICT = 11;      /* waiting for inflateSetDictionary() call */
var        TYPE = 12;      /* i: waiting for type bits, including last-flag bit */
var        TYPEDO = 13;    /* i: same, but skip check to exit inflate on new block */
var        STORED = 14;    /* i: waiting for stored size (length and complement) */
var        COPY_ = 15;     /* i/o: same as COPY below, but only first time in */
var        COPY = 16;      /* i/o: waiting for input or output to copy stored block */
var        TABLE = 17;     /* i: waiting for dynamic block table lengths */
var        LENLENS = 18;   /* i: waiting for code length code lengths */
var        CODELENS = 19;  /* i: waiting for length/lit and distance code lengths */
var            LEN_ = 20;      /* i: same as LEN below, but only first time in */
var            LEN = 21;       /* i: waiting for length/lit/eob code */
var            LENEXT = 22;    /* i: waiting for length extra bits */
var            DIST = 23;      /* i: waiting for distance code */
var            DISTEXT = 24;   /* i: waiting for distance extra bits */
var            MATCH = 25;     /* o: waiting for output space to copy string */
var            LIT = 26;       /* o: waiting for output space to write literal */
var    CHECK = 27;     /* i: waiting for 32-bit check value */
var    LENGTH = 28;    /* i: waiting for 32-bit length (gzip) */
var    DONE = 29;      /* finished check, done -- remain here until reset */
var    BAD = 30;       /* got a data error -- remain here until reset */
var    MEM = 31;       /* got an inflate() memory error -- remain here until reset */
var    SYNC = 32;      /* looking for synchronization bytes to restart inflate() */

/* ===========================================================================*/



var ENOUGH_LENS = 852;
var ENOUGH_DISTS = 592;
//var ENOUGH =  (ENOUGH_LENS+ENOUGH_DISTS);

var MAX_WBITS = 15;
/* 32K LZ77 window */
var DEF_WBITS = MAX_WBITS;


function zswap32(q) {
  return  (((q >>> 24) & 0xff) +
          ((q >>> 8) & 0xff00) +
          ((q & 0xff00) << 8) +
          ((q & 0xff) << 24));
}


function InflateState() {
  this.mode = 0;             /* current inflate mode */
  this.last = false;          /* true if processing last block */
  this.wrap = 0;              /* bit 0 true for zlib, bit 1 true for gzip */
  this.havedict = false;      /* true if dictionary provided */
  this.flags = 0;             /* gzip header method and flags (0 if zlib) */
  this.dmax = 0;              /* zlib header max distance (INFLATE_STRICT) */
  this.check = 0;             /* protected copy of check value */
  this.total = 0;             /* protected copy of output count */
  // TODO: may be {}
  this.head = null;           /* where to save gzip header information */

  /* sliding window */
  this.wbits = 0;             /* log base 2 of requested window size */
  this.wsize = 0;             /* window size or zero if not using window */
  this.whave = 0;             /* valid bytes in the window */
  this.wnext = 0;             /* window write index */
  this.window = null;         /* allocated sliding window, if needed */

  /* bit accumulator */
  this.hold = 0;              /* input bit accumulator */
  this.bits = 0;              /* number of bits in "in" */

  /* for string and stored block copying */
  this.length = 0;            /* literal or length of data to copy */
  this.offset = 0;            /* distance back to copy string from */

  /* for table and code decoding */
  this.extra = 0;             /* extra bits needed */

  /* fixed and dynamic code tables */
  this.lencode = null;          /* starting table for length/literal codes */
  this.distcode = null;         /* starting table for distance codes */
  this.lenbits = 0;           /* index bits for lencode */
  this.distbits = 0;          /* index bits for distcode */

  /* dynamic table building */
  this.ncode = 0;             /* number of code length code lengths */
  this.nlen = 0;              /* number of length code lengths */
  this.ndist = 0;             /* number of distance code lengths */
  this.have = 0;              /* number of code lengths in lens[] */
  this.next = null;              /* next available space in codes[] */

  this.lens = new utils.Buf16(320); /* temporary storage for code lengths */
  this.work = new utils.Buf16(288); /* work area for code table building */

  /*
   because we don't have pointers in js, we use lencode and distcode directly
   as buffers so we don't need codes
  */
  //this.codes = new utils.Buf32(ENOUGH);       /* space for code tables */
  this.lendyn = null;              /* dynamic table for length/literal codes (JS specific) */
  this.distdyn = null;             /* dynamic table for distance codes (JS specific) */
  this.sane = 0;                   /* if false, allow invalid distance too far */
  this.back = 0;                   /* bits back of last unprocessed length/lit */
  this.was = 0;                    /* initial length of match */
}

function inflateResetKeep(strm) {
  var state;

  if (!strm || !strm.state) { return Z_STREAM_ERROR; }
  state = strm.state;
  strm.total_in = strm.total_out = state.total = 0;
  strm.msg = ''; /*Z_NULL*/
  if (state.wrap) {       /* to support ill-conceived Java test suite */
    strm.adler = state.wrap & 1;
  }
  state.mode = HEAD;
  state.last = 0;
  state.havedict = 0;
  state.dmax = 32768;
  state.head = null/*Z_NULL*/;
  state.hold = 0;
  state.bits = 0;
  //state.lencode = state.distcode = state.next = state.codes;
  state.lencode = state.lendyn = new utils.Buf32(ENOUGH_LENS);
  state.distcode = state.distdyn = new utils.Buf32(ENOUGH_DISTS);

  state.sane = 1;
  state.back = -1;
  //Tracev((stderr, "inflate: reset\n"));
  return Z_OK;
}

function inflateReset(strm) {
  var state;

  if (!strm || !strm.state) { return Z_STREAM_ERROR; }
  state = strm.state;
  state.wsize = 0;
  state.whave = 0;
  state.wnext = 0;
  return inflateResetKeep(strm);

}

function inflateReset2(strm, windowBits) {
  var wrap;
  var state;

  /* get the state */
  if (!strm || !strm.state) { return Z_STREAM_ERROR; }
  state = strm.state;

  /* extract wrap request from windowBits parameter */
  if (windowBits < 0) {
    wrap = 0;
    windowBits = -windowBits;
  }
  else {
    wrap = (windowBits >> 4) + 1;
    if (windowBits < 48) {
      windowBits &= 15;
    }
  }

  /* set number of window bits, free window if different */
  if (windowBits && (windowBits < 8 || windowBits > 15)) {
    return Z_STREAM_ERROR;
  }
  if (state.window !== null && state.wbits !== windowBits) {
    state.window = null;
  }

  /* update state and reset the rest of it */
  state.wrap = wrap;
  state.wbits = windowBits;
  return inflateReset(strm);
}

function inflateInit2(strm, windowBits) {
  var ret;
  var state;

  if (!strm) { return Z_STREAM_ERROR; }
  //strm.msg = Z_NULL;                 /* in case we return an error */

  state = new InflateState();

  //if (state === Z_NULL) return Z_MEM_ERROR;
  //Tracev((stderr, "inflate: allocated\n"));
  strm.state = state;
  state.window = null/*Z_NULL*/;
  ret = inflateReset2(strm, windowBits);
  if (ret !== Z_OK) {
    strm.state = null/*Z_NULL*/;
  }
  return ret;
}

function inflateInit(strm) {
  return inflateInit2(strm, DEF_WBITS);
}


/*
 Return state with length and distance decoding tables and index sizes set to
 fixed code decoding.  Normally this returns fixed tables from inffixed.h.
 If BUILDFIXED is defined, then instead this routine builds the tables the
 first time it's called, and returns those tables the first time and
 thereafter.  This reduces the size of the code by about 2K bytes, in
 exchange for a little execution time.  However, BUILDFIXED should not be
 used for threaded applications, since the rewriting of the tables and virgin
 may not be thread-safe.
 */
var virgin = true;

var lenfix, distfix; // We have no pointers in JS, so keep tables separate

function fixedtables(state) {
  /* build fixed huffman tables if first call (may not be thread safe) */
  if (virgin) {
    var sym;

    lenfix = new utils.Buf32(512);
    distfix = new utils.Buf32(32);

    /* literal/length table */
    sym = 0;
    while (sym < 144) { state.lens[sym++] = 8; }
    while (sym < 256) { state.lens[sym++] = 9; }
    while (sym < 280) { state.lens[sym++] = 7; }
    while (sym < 288) { state.lens[sym++] = 8; }

    inflate_table(LENS,  state.lens, 0, 288, lenfix,   0, state.work, { bits: 9 });

    /* distance table */
    sym = 0;
    while (sym < 32) { state.lens[sym++] = 5; }

    inflate_table(DISTS, state.lens, 0, 32,   distfix, 0, state.work, { bits: 5 });

    /* do this just once */
    virgin = false;
  }

  state.lencode = lenfix;
  state.lenbits = 9;
  state.distcode = distfix;
  state.distbits = 5;
}


/*
 Update the window with the last wsize (normally 32K) bytes written before
 returning.  If window does not exist yet, create it.  This is only called
 when a window is already in use, or when output has been written during this
 inflate call, but the end of the deflate stream has not been reached yet.
 It is also called to create a window for dictionary data when a dictionary
 is loaded.

 Providing output buffers larger than 32K to inflate() should provide a speed
 advantage, since only the last 32K of output is copied to the sliding window
 upon return from inflate(), and since all distances after the first 32K of
 output will fall in the output data, making match copies simpler and faster.
 The advantage may be dependent on the size of the processor's data caches.
 */
function updatewindow(strm, src, end, copy) {
  var dist;
  var state = strm.state;

  /* if it hasn't been done already, allocate space for the window */
  if (state.window === null) {
    state.wsize = 1 << state.wbits;
    state.wnext = 0;
    state.whave = 0;

    state.window = new utils.Buf8(state.wsize);
  }

  /* copy state->wsize or less output bytes into the circular window */
  if (copy >= state.wsize) {
    utils.arraySet(state.window, src, end - state.wsize, state.wsize, 0);
    state.wnext = 0;
    state.whave = state.wsize;
  }
  else {
    dist = state.wsize - state.wnext;
    if (dist > copy) {
      dist = copy;
    }
    //zmemcpy(state->window + state->wnext, end - copy, dist);
    utils.arraySet(state.window, src, end - copy, dist, state.wnext);
    copy -= dist;
    if (copy) {
      //zmemcpy(state->window, end - copy, copy);
      utils.arraySet(state.window, src, end - copy, copy, 0);
      state.wnext = copy;
      state.whave = state.wsize;
    }
    else {
      state.wnext += dist;
      if (state.wnext === state.wsize) { state.wnext = 0; }
      if (state.whave < state.wsize) { state.whave += dist; }
    }
  }
  return 0;
}

function inflate(strm, flush) {
  var state;
  var input, output;          // input/output buffers
  var next;                   /* next input INDEX */
  var put;                    /* next output INDEX */
  var have, left;             /* available input and output */
  var hold;                   /* bit buffer */
  var bits;                   /* bits in bit buffer */
  var _in, _out;              /* save starting available input and output */
  var copy;                   /* number of stored or match bytes to copy */
  var from;                   /* where to copy match bytes from */
  var from_source;
  var here = 0;               /* current decoding table entry */
  var here_bits, here_op, here_val; // paked "here" denormalized (JS specific)
  //var last;                   /* parent table entry */
  var last_bits, last_op, last_val; // paked "last" denormalized (JS specific)
  var len;                    /* length to copy for repeats, bits to drop */
  var ret;                    /* return code */
  var hbuf = new utils.Buf8(4);    /* buffer for gzip header crc calculation */
  var opts;

  var n; // temporary var for NEED_BITS

  var order = /* permutation of code lengths */
    [ 16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15 ];


  if (!strm || !strm.state || !strm.output ||
      (!strm.input && strm.avail_in !== 0)) {
    return Z_STREAM_ERROR;
  }

  state = strm.state;
  if (state.mode === TYPE) { state.mode = TYPEDO; }    /* skip check */


  //--- LOAD() ---
  put = strm.next_out;
  output = strm.output;
  left = strm.avail_out;
  next = strm.next_in;
  input = strm.input;
  have = strm.avail_in;
  hold = state.hold;
  bits = state.bits;
  //---

  _in = have;
  _out = left;
  ret = Z_OK;

  inf_leave: // goto emulation
  for (;;) {
    switch (state.mode) {
      case HEAD:
        if (state.wrap === 0) {
          state.mode = TYPEDO;
          break;
        }
        //=== NEEDBITS(16);
        while (bits < 16) {
          if (have === 0) { break inf_leave; }
          have--;
          hold += input[next++] << bits;
          bits += 8;
        }
        //===//
        if ((state.wrap & 2) && hold === 0x8b1f) {  /* gzip header */
          state.check = 0/*crc32(0L, Z_NULL, 0)*/;
          //=== CRC2(state.check, hold);
          hbuf[0] = hold & 0xff;
          hbuf[1] = (hold >>> 8) & 0xff;
          state.check = crc32(state.check, hbuf, 2, 0);
          //===//

          //=== INITBITS();
          hold = 0;
          bits = 0;
          //===//
          state.mode = FLAGS;
          break;
        }
        state.flags = 0;           /* expect zlib header */
        if (state.head) {
          state.head.done = false;
        }
        if (!(state.wrap & 1) ||   /* check if zlib header allowed */
          (((hold & 0xff)/*BITS(8)*/ << 8) + (hold >> 8)) % 31) {
          strm.msg = 'incorrect header check';
          state.mode = BAD;
          break;
        }
        if ((hold & 0x0f)/*BITS(4)*/ !== Z_DEFLATED) {
          strm.msg = 'unknown compression method';
          state.mode = BAD;
          break;
        }
        //--- DROPBITS(4) ---//
        hold >>>= 4;
        bits -= 4;
        //---//
        len = (hold & 0x0f)/*BITS(4)*/ + 8;
        if (state.wbits === 0) {
          state.wbits = len;
        }
        else if (len > state.wbits) {
          strm.msg = 'invalid window size';
          state.mode = BAD;
          break;
        }
        state.dmax = 1 << len;
        //Tracev((stderr, "inflate:   zlib header ok\n"));
        strm.adler = state.check = 1/*adler32(0L, Z_NULL, 0)*/;
        state.mode = hold & 0x200 ? DICTID : TYPE;
        //=== INITBITS();
        hold = 0;
        bits = 0;
        //===//
        break;
      case FLAGS:
        //=== NEEDBITS(16); */
        while (bits < 16) {
          if (have === 0) { break inf_leave; }
          have--;
          hold += input[next++] << bits;
          bits += 8;
        }
        //===//
        state.flags = hold;
        if ((state.flags & 0xff) !== Z_DEFLATED) {
          strm.msg = 'unknown compression method';
          state.mode = BAD;
          break;
        }
        if (state.flags & 0xe000) {
          strm.msg = 'unknown header flags set';
          state.mode = BAD;
          break;
        }
        if (state.head) {
          state.head.text = ((hold >> 8) & 1);
        }
        if (state.flags & 0x0200) {
          //=== CRC2(state.check, hold);
          hbuf[0] = hold & 0xff;
          hbuf[1] = (hold >>> 8) & 0xff;
          state.check = crc32(state.check, hbuf, 2, 0);
          //===//
        }
        //=== INITBITS();
        hold = 0;
        bits = 0;
        //===//
        state.mode = TIME;
        /* falls through */
      case TIME:
        //=== NEEDBITS(32); */
        while (bits < 32) {
          if (have === 0) { break inf_leave; }
          have--;
          hold += input[next++] << bits;
          bits += 8;
        }
        //===//
        if (state.head) {
          state.head.time = hold;
        }
        if (state.flags & 0x0200) {
          //=== CRC4(state.check, hold)
          hbuf[0] = hold & 0xff;
          hbuf[1] = (hold >>> 8) & 0xff;
          hbuf[2] = (hold >>> 16) & 0xff;
          hbuf[3] = (hold >>> 24) & 0xff;
          state.check = crc32(state.check, hbuf, 4, 0);
          //===
        }
        //=== INITBITS();
        hold = 0;
        bits = 0;
        //===//
        state.mode = OS;
        /* falls through */
      case OS:
        //=== NEEDBITS(16); */
        while (bits < 16) {
          if (have === 0) { break inf_leave; }
          have--;
          hold += input[next++] << bits;
          bits += 8;
        }
        //===//
        if (state.head) {
          state.head.xflags = (hold & 0xff);
          state.head.os = (hold >> 8);
        }
        if (state.flags & 0x0200) {
          //=== CRC2(state.check, hold);
          hbuf[0] = hold & 0xff;
          hbuf[1] = (hold >>> 8) & 0xff;
          state.check = crc32(state.check, hbuf, 2, 0);
          //===//
        }
        //=== INITBITS();
        hold = 0;
        bits = 0;
        //===//
        state.mode = EXLEN;
        /* falls through */
      case EXLEN:
        if (state.flags & 0x0400) {
          //=== NEEDBITS(16); */
          while (bits < 16) {
            if (have === 0) { break inf_leave; }
            have--;
            hold += input[next++] << bits;
            bits += 8;
          }
          //===//
          state.length = hold;
          if (state.head) {
            state.head.extra_len = hold;
          }
          if (state.flags & 0x0200) {
            //=== CRC2(state.check, hold);
            hbuf[0] = hold & 0xff;
            hbuf[1] = (hold >>> 8) & 0xff;
            state.check = crc32(state.check, hbuf, 2, 0);
            //===//
          }
          //=== INITBITS();
          hold = 0;
          bits = 0;
          //===//
        }
        else if (state.head) {
          state.head.extra = null/*Z_NULL*/;
        }
        state.mode = EXTRA;
        /* falls through */
      case EXTRA:
        if (state.flags & 0x0400) {
          copy = state.length;
          if (copy > have) { copy = have; }
          if (copy) {
            if (state.head) {
              len = state.head.extra_len - state.length;
              if (!state.head.extra) {
                // Use untyped array for more convenient processing later
                state.head.extra = new Array(state.head.extra_len);
              }
              utils.arraySet(
                state.head.extra,
                input,
                next,
                // extra field is limited to 65536 bytes
                // - no need for additional size check
                copy,
                /*len + copy > state.head.extra_max - len ? state.head.extra_max : copy,*/
                len
              );
              //zmemcpy(state.head.extra + len, next,
              //        len + copy > state.head.extra_max ?
              //        state.head.extra_max - len : copy);
            }
            if (state.flags & 0x0200) {
              state.check = crc32(state.check, input, copy, next);
            }
            have -= copy;
            next += copy;
            state.length -= copy;
          }
          if (state.length) { break inf_leave; }
        }
        state.length = 0;
        state.mode = NAME;
        /* falls through */
      case NAME:
        if (state.flags & 0x0800) {
          if (have === 0) { break inf_leave; }
          copy = 0;
          do {
            // TODO: 2 or 1 bytes?
            len = input[next + copy++];
            /* use constant limit because in js we should not preallocate memory */
            if (state.head && len &&
                (state.length < 65536 /*state.head.name_max*/)) {
              state.head.name += String.fromCharCode(len);
            }
          } while (len && copy < have);

          if (state.flags & 0x0200) {
            state.check = crc32(state.check, input, copy, next);
          }
          have -= copy;
          next += copy;
          if (len) { break inf_leave; }
        }
        else if (state.head) {
          state.head.name = null;
        }
        state.length = 0;
        state.mode = COMMENT;
        /* falls through */
      case COMMENT:
        if (state.flags & 0x1000) {
          if (have === 0) { break inf_leave; }
          copy = 0;
          do {
            len = input[next + copy++];
            /* use constant limit because in js we should not preallocate memory */
            if (state.head && len &&
                (state.length < 65536 /*state.head.comm_max*/)) {
              state.head.comment += String.fromCharCode(len);
            }
          } while (len && copy < have);
          if (state.flags & 0x0200) {
            state.check = crc32(state.check, input, copy, next);
          }
          have -= copy;
          next += copy;
          if (len) { break inf_leave; }
        }
        else if (state.head) {
          state.head.comment = null;
        }
        state.mode = HCRC;
        /* falls through */
      case HCRC:
        if (state.flags & 0x0200) {
          //=== NEEDBITS(16); */
          while (bits < 16) {
            if (have === 0) { break inf_leave; }
            have--;
            hold += input[next++] << bits;
            bits += 8;
          }
          //===//
          if (hold !== (state.check & 0xffff)) {
            strm.msg = 'header crc mismatch';
            state.mode = BAD;
            break;
          }
          //=== INITBITS();
          hold = 0;
          bits = 0;
          //===//
        }
        if (state.head) {
          state.head.hcrc = ((state.flags >> 9) & 1);
          state.head.done = true;
        }
        strm.adler = state.check = 0;
        state.mode = TYPE;
        break;
      case DICTID:
        //=== NEEDBITS(32); */
        while (bits < 32) {
          if (have === 0) { break inf_leave; }
          have--;
          hold += input[next++] << bits;
          bits += 8;
        }
        //===//
        strm.adler = state.check = zswap32(hold);
        //=== INITBITS();
        hold = 0;
        bits = 0;
        //===//
        state.mode = DICT;
        /* falls through */
      case DICT:
        if (state.havedict === 0) {
          //--- RESTORE() ---
          strm.next_out = put;
          strm.avail_out = left;
          strm.next_in = next;
          strm.avail_in = have;
          state.hold = hold;
          state.bits = bits;
          //---
          return Z_NEED_DICT;
        }
        strm.adler = state.check = 1/*adler32(0L, Z_NULL, 0)*/;
        state.mode = TYPE;
        /* falls through */
      case TYPE:
        if (flush === Z_BLOCK || flush === Z_TREES) { break inf_leave; }
        /* falls through */
      case TYPEDO:
        if (state.last) {
          //--- BYTEBITS() ---//
          hold >>>= bits & 7;
          bits -= bits & 7;
          //---//
          state.mode = CHECK;
          break;
        }
        //=== NEEDBITS(3); */
        while (bits < 3) {
          if (have === 0) { break inf_leave; }
          have--;
          hold += input[next++] << bits;
          bits += 8;
        }
        //===//
        state.last = (hold & 0x01)/*BITS(1)*/;
        //--- DROPBITS(1) ---//
        hold >>>= 1;
        bits -= 1;
        //---//

        switch ((hold & 0x03)/*BITS(2)*/) {
          case 0:                             /* stored block */
            //Tracev((stderr, "inflate:     stored block%s\n",
            //        state.last ? " (last)" : ""));
            state.mode = STORED;
            break;
          case 1:                             /* fixed block */
            fixedtables(state);
            //Tracev((stderr, "inflate:     fixed codes block%s\n",
            //        state.last ? " (last)" : ""));
            state.mode = LEN_;             /* decode codes */
            if (flush === Z_TREES) {
              //--- DROPBITS(2) ---//
              hold >>>= 2;
              bits -= 2;
              //---//
              break inf_leave;
            }
            break;
          case 2:                             /* dynamic block */
            //Tracev((stderr, "inflate:     dynamic codes block%s\n",
            //        state.last ? " (last)" : ""));
            state.mode = TABLE;
            break;
          case 3:
            strm.msg = 'invalid block type';
            state.mode = BAD;
        }
        //--- DROPBITS(2) ---//
        hold >>>= 2;
        bits -= 2;
        //---//
        break;
      case STORED:
        //--- BYTEBITS() ---// /* go to byte boundary */
        hold >>>= bits & 7;
        bits -= bits & 7;
        //---//
        //=== NEEDBITS(32); */
        while (bits < 32) {
          if (have === 0) { break inf_leave; }
          have--;
          hold += input[next++] << bits;
          bits += 8;
        }
        //===//
        if ((hold & 0xffff) !== ((hold >>> 16) ^ 0xffff)) {
          strm.msg = 'invalid stored block lengths';
          state.mode = BAD;
          break;
        }
        state.length = hold & 0xffff;
        //Tracev((stderr, "inflate:       stored length %u\n",
        //        state.length));
        //=== INITBITS();
        hold = 0;
        bits = 0;
        //===//
        state.mode = COPY_;
        if (flush === Z_TREES) { break inf_leave; }
        /* falls through */
      case COPY_:
        state.mode = COPY;
        /* falls through */
      case COPY:
        copy = state.length;
        if (copy) {
          if (copy > have) { copy = have; }
          if (copy > left) { copy = left; }
          if (copy === 0) { break inf_leave; }
          //--- zmemcpy(put, next, copy); ---
          utils.arraySet(output, input, next, copy, put);
          //---//
          have -= copy;
          next += copy;
          left -= copy;
          put += copy;
          state.length -= copy;
          break;
        }
        //Tracev((stderr, "inflate:       stored end\n"));
        state.mode = TYPE;
        break;
      case TABLE:
        //=== NEEDBITS(14); */
        while (bits < 14) {
          if (have === 0) { break inf_leave; }
          have--;
          hold += input[next++] << bits;
          bits += 8;
        }
        //===//
        state.nlen = (hold & 0x1f)/*BITS(5)*/ + 257;
        //--- DROPBITS(5) ---//
        hold >>>= 5;
        bits -= 5;
        //---//
        state.ndist = (hold & 0x1f)/*BITS(5)*/ + 1;
        //--- DROPBITS(5) ---//
        hold >>>= 5;
        bits -= 5;
        //---//
        state.ncode = (hold & 0x0f)/*BITS(4)*/ + 4;
        //--- DROPBITS(4) ---//
        hold >>>= 4;
        bits -= 4;
        //---//
//#ifndef PKZIP_BUG_WORKAROUND
        if (state.nlen > 286 || state.ndist > 30) {
          strm.msg = 'too many length or distance symbols';
          state.mode = BAD;
          break;
        }
//#endif
        //Tracev((stderr, "inflate:       table sizes ok\n"));
        state.have = 0;
        state.mode = LENLENS;
        /* falls through */
      case LENLENS:
        while (state.have < state.ncode) {
          //=== NEEDBITS(3);
          while (bits < 3) {
            if (have === 0) { break inf_leave; }
            have--;
            hold += input[next++] << bits;
            bits += 8;
          }
          //===//
          state.lens[order[state.have++]] = (hold & 0x07);//BITS(3);
          //--- DROPBITS(3) ---//
          hold >>>= 3;
          bits -= 3;
          //---//
        }
        while (state.have < 19) {
          state.lens[order[state.have++]] = 0;
        }
        // We have separate tables & no pointers. 2 commented lines below not needed.
        //state.next = state.codes;
        //state.lencode = state.next;
        // Switch to use dynamic table
        state.lencode = state.lendyn;
        state.lenbits = 7;

        opts = { bits: state.lenbits };
        ret = inflate_table(CODES, state.lens, 0, 19, state.lencode, 0, state.work, opts);
        state.lenbits = opts.bits;

        if (ret) {
          strm.msg = 'invalid code lengths set';
          state.mode = BAD;
          break;
        }
        //Tracev((stderr, "inflate:       code lengths ok\n"));
        state.have = 0;
        state.mode = CODELENS;
        /* falls through */
      case CODELENS:
        while (state.have < state.nlen + state.ndist) {
          for (;;) {
            here = state.lencode[hold & ((1 << state.lenbits) - 1)];/*BITS(state.lenbits)*/
            here_bits = here >>> 24;
            here_op = (here >>> 16) & 0xff;
            here_val = here & 0xffff;

            if ((here_bits) <= bits) { break; }
            //--- PULLBYTE() ---//
            if (have === 0) { break inf_leave; }
            have--;
            hold += input[next++] << bits;
            bits += 8;
            //---//
          }
          if (here_val < 16) {
            //--- DROPBITS(here.bits) ---//
            hold >>>= here_bits;
            bits -= here_bits;
            //---//
            state.lens[state.have++] = here_val;
          }
          else {
            if (here_val === 16) {
              //=== NEEDBITS(here.bits + 2);
              n = here_bits + 2;
              while (bits < n) {
                if (have === 0) { break inf_leave; }
                have--;
                hold += input[next++] << bits;
                bits += 8;
              }
              //===//
              //--- DROPBITS(here.bits) ---//
              hold >>>= here_bits;
              bits -= here_bits;
              //---//
              if (state.have === 0) {
                strm.msg = 'invalid bit length repeat';
                state.mode = BAD;
                break;
              }
              len = state.lens[state.have - 1];
              copy = 3 + (hold & 0x03);//BITS(2);
              //--- DROPBITS(2) ---//
              hold >>>= 2;
              bits -= 2;
              //---//
            }
            else if (here_val === 17) {
              //=== NEEDBITS(here.bits + 3);
              n = here_bits + 3;
              while (bits < n) {
                if (have === 0) { break inf_leave; }
                have--;
                hold += input[next++] << bits;
                bits += 8;
              }
              //===//
              //--- DROPBITS(here.bits) ---//
              hold >>>= here_bits;
              bits -= here_bits;
              //---//
              len = 0;
              copy = 3 + (hold & 0x07);//BITS(3);
              //--- DROPBITS(3) ---//
              hold >>>= 3;
              bits -= 3;
              //---//
            }
            else {
              //=== NEEDBITS(here.bits + 7);
              n = here_bits + 7;
              while (bits < n) {
                if (have === 0) { break inf_leave; }
                have--;
                hold += input[next++] << bits;
                bits += 8;
              }
              //===//
              //--- DROPBITS(here.bits) ---//
              hold >>>= here_bits;
              bits -= here_bits;
              //---//
              len = 0;
              copy = 11 + (hold & 0x7f);//BITS(7);
              //--- DROPBITS(7) ---//
              hold >>>= 7;
              bits -= 7;
              //---//
            }
            if (state.have + copy > state.nlen + state.ndist) {
              strm.msg = 'invalid bit length repeat';
              state.mode = BAD;
              break;
            }
            while (copy--) {
              state.lens[state.have++] = len;
            }
          }
        }

        /* handle error breaks in while */
        if (state.mode === BAD) { break; }

        /* check for end-of-block code (better have one) */
        if (state.lens[256] === 0) {
          strm.msg = 'invalid code -- missing end-of-block';
          state.mode = BAD;
          break;
        }

        /* build code tables -- note: do not change the lenbits or distbits
           values here (9 and 6) without reading the comments in inftrees.h
           concerning the ENOUGH constants, which depend on those values */
        state.lenbits = 9;

        opts = { bits: state.lenbits };
        ret = inflate_table(LENS, state.lens, 0, state.nlen, state.lencode, 0, state.work, opts);
        // We have separate tables & no pointers. 2 commented lines below not needed.
        // state.next_index = opts.table_index;
        state.lenbits = opts.bits;
        // state.lencode = state.next;

        if (ret) {
          strm.msg = 'invalid literal/lengths set';
          state.mode = BAD;
          break;
        }

        state.distbits = 6;
        //state.distcode.copy(state.codes);
        // Switch to use dynamic table
        state.distcode = state.distdyn;
        opts = { bits: state.distbits };
        ret = inflate_table(DISTS, state.lens, state.nlen, state.ndist, state.distcode, 0, state.work, opts);
        // We have separate tables & no pointers. 2 commented lines below not needed.
        // state.next_index = opts.table_index;
        state.distbits = opts.bits;
        // state.distcode = state.next;

        if (ret) {
          strm.msg = 'invalid distances set';
          state.mode = BAD;
          break;
        }
        //Tracev((stderr, 'inflate:       codes ok\n'));
        state.mode = LEN_;
        if (flush === Z_TREES) { break inf_leave; }
        /* falls through */
      case LEN_:
        state.mode = LEN;
        /* falls through */
      case LEN:
        if (have >= 6 && left >= 258) {
          //--- RESTORE() ---
          strm.next_out = put;
          strm.avail_out = left;
          strm.next_in = next;
          strm.avail_in = have;
          state.hold = hold;
          state.bits = bits;
          //---
          inflate_fast(strm, _out);
          //--- LOAD() ---
          put = strm.next_out;
          output = strm.output;
          left = strm.avail_out;
          next = strm.next_in;
          input = strm.input;
          have = strm.avail_in;
          hold = state.hold;
          bits = state.bits;
          //---

          if (state.mode === TYPE) {
            state.back = -1;
          }
          break;
        }
        state.back = 0;
        for (;;) {
          here = state.lencode[hold & ((1 << state.lenbits) - 1)];  /*BITS(state.lenbits)*/
          here_bits = here >>> 24;
          here_op = (here >>> 16) & 0xff;
          here_val = here & 0xffff;

          if (here_bits <= bits) { break; }
          //--- PULLBYTE() ---//
          if (have === 0) { break inf_leave; }
          have--;
          hold += input[next++] << bits;
          bits += 8;
          //---//
        }
        if (here_op && (here_op & 0xf0) === 0) {
          last_bits = here_bits;
          last_op = here_op;
          last_val = here_val;
          for (;;) {
            here = state.lencode[last_val +
                    ((hold & ((1 << (last_bits + last_op)) - 1))/*BITS(last.bits + last.op)*/ >> last_bits)];
            here_bits = here >>> 24;
            here_op = (here >>> 16) & 0xff;
            here_val = here & 0xffff;

            if ((last_bits + here_bits) <= bits) { break; }
            //--- PULLBYTE() ---//
            if (have === 0) { break inf_leave; }
            have--;
            hold += input[next++] << bits;
            bits += 8;
            //---//
          }
          //--- DROPBITS(last.bits) ---//
          hold >>>= last_bits;
          bits -= last_bits;
          //---//
          state.back += last_bits;
        }
        //--- DROPBITS(here.bits) ---//
        hold >>>= here_bits;
        bits -= here_bits;
        //---//
        state.back += here_bits;
        state.length = here_val;
        if (here_op === 0) {
          //Tracevv((stderr, here.val >= 0x20 && here.val < 0x7f ?
          //        "inflate:         literal '%c'\n" :
          //        "inflate:         literal 0x%02x\n", here.val));
          state.mode = LIT;
          break;
        }
        if (here_op & 32) {
          //Tracevv((stderr, "inflate:         end of block\n"));
          state.back = -1;
          state.mode = TYPE;
          break;
        }
        if (here_op & 64) {
          strm.msg = 'invalid literal/length code';
          state.mode = BAD;
          break;
        }
        state.extra = here_op & 15;
        state.mode = LENEXT;
        /* falls through */
      case LENEXT:
        if (state.extra) {
          //=== NEEDBITS(state.extra);
          n = state.extra;
          while (bits < n) {
            if (have === 0) { break inf_leave; }
            have--;
            hold += input[next++] << bits;
            bits += 8;
          }
          //===//
          state.length += hold & ((1 << state.extra) - 1)/*BITS(state.extra)*/;
          //--- DROPBITS(state.extra) ---//
          hold >>>= state.extra;
          bits -= state.extra;
          //---//
          state.back += state.extra;
        }
        //Tracevv((stderr, "inflate:         length %u\n", state.length));
        state.was = state.length;
        state.mode = DIST;
        /* falls through */
      case DIST:
        for (;;) {
          here = state.distcode[hold & ((1 << state.distbits) - 1)];/*BITS(state.distbits)*/
          here_bits = here >>> 24;
          here_op = (here >>> 16) & 0xff;
          here_val = here & 0xffff;

          if ((here_bits) <= bits) { break; }
          //--- PULLBYTE() ---//
          if (have === 0) { break inf_leave; }
          have--;
          hold += input[next++] << bits;
          bits += 8;
          //---//
        }
        if ((here_op & 0xf0) === 0) {
          last_bits = here_bits;
          last_op = here_op;
          last_val = here_val;
          for (;;) {
            here = state.distcode[last_val +
                    ((hold & ((1 << (last_bits + last_op)) - 1))/*BITS(last.bits + last.op)*/ >> last_bits)];
            here_bits = here >>> 24;
            here_op = (here >>> 16) & 0xff;
            here_val = here & 0xffff;

            if ((last_bits + here_bits) <= bits) { break; }
            //--- PULLBYTE() ---//
            if (have === 0) { break inf_leave; }
            have--;
            hold += input[next++] << bits;
            bits += 8;
            //---//
          }
          //--- DROPBITS(last.bits) ---//
          hold >>>= last_bits;
          bits -= last_bits;
          //---//
          state.back += last_bits;
        }
        //--- DROPBITS(here.bits) ---//
        hold >>>= here_bits;
        bits -= here_bits;
        //---//
        state.back += here_bits;
        if (here_op & 64) {
          strm.msg = 'invalid distance code';
          state.mode = BAD;
          break;
        }
        state.offset = here_val;
        state.extra = (here_op) & 15;
        state.mode = DISTEXT;
        /* falls through */
      case DISTEXT:
        if (state.extra) {
          //=== NEEDBITS(state.extra);
          n = state.extra;
          while (bits < n) {
            if (have === 0) { break inf_leave; }
            have--;
            hold += input[next++] << bits;
            bits += 8;
          }
          //===//
          state.offset += hold & ((1 << state.extra) - 1)/*BITS(state.extra)*/;
          //--- DROPBITS(state.extra) ---//
          hold >>>= state.extra;
          bits -= state.extra;
          //---//
          state.back += state.extra;
        }
//#ifdef INFLATE_STRICT
        if (state.offset > state.dmax) {
          strm.msg = 'invalid distance too far back';
          state.mode = BAD;
          break;
        }
//#endif
        //Tracevv((stderr, "inflate:         distance %u\n", state.offset));
        state.mode = MATCH;
        /* falls through */
      case MATCH:
        if (left === 0) { break inf_leave; }
        copy = _out - left;
        if (state.offset > copy) {         /* copy from window */
          copy = state.offset - copy;
          if (copy > state.whave) {
            if (state.sane) {
              strm.msg = 'invalid distance too far back';
              state.mode = BAD;
              break;
            }
// (!) This block is disabled in zlib defaults,
// don't enable it for binary compatibility
//#ifdef INFLATE_ALLOW_INVALID_DISTANCE_TOOFAR_ARRR
//          Trace((stderr, "inflate.c too far\n"));
//          copy -= state.whave;
//          if (copy > state.length) { copy = state.length; }
//          if (copy > left) { copy = left; }
//          left -= copy;
//          state.length -= copy;
//          do {
//            output[put++] = 0;
//          } while (--copy);
//          if (state.length === 0) { state.mode = LEN; }
//          break;
//#endif
          }
          if (copy > state.wnext) {
            copy -= state.wnext;
            from = state.wsize - copy;
          }
          else {
            from = state.wnext - copy;
          }
          if (copy > state.length) { copy = state.length; }
          from_source = state.window;
        }
        else {                              /* copy from output */
          from_source = output;
          from = put - state.offset;
          copy = state.length;
        }
        if (copy > left) { copy = left; }
        left -= copy;
        state.length -= copy;
        do {
          output[put++] = from_source[from++];
        } while (--copy);
        if (state.length === 0) { state.mode = LEN; }
        break;
      case LIT:
        if (left === 0) { break inf_leave; }
        output[put++] = state.length;
        left--;
        state.mode = LEN;
        break;
      case CHECK:
        if (state.wrap) {
          //=== NEEDBITS(32);
          while (bits < 32) {
            if (have === 0) { break inf_leave; }
            have--;
            // Use '|' instead of '+' to make sure that result is signed
            hold |= input[next++] << bits;
            bits += 8;
          }
          //===//
          _out -= left;
          strm.total_out += _out;
          state.total += _out;
          if (_out) {
            strm.adler = state.check =
                /*UPDATE(state.check, put - _out, _out);*/
                (state.flags ? crc32(state.check, output, _out, put - _out) : adler32(state.check, output, _out, put - _out));

          }
          _out = left;
          // NB: crc32 stored as signed 32-bit int, zswap32 returns signed too
          if ((state.flags ? hold : zswap32(hold)) !== state.check) {
            strm.msg = 'incorrect data check';
            state.mode = BAD;
            break;
          }
          //=== INITBITS();
          hold = 0;
          bits = 0;
          //===//
          //Tracev((stderr, "inflate:   check matches trailer\n"));
        }
        state.mode = LENGTH;
        /* falls through */
      case LENGTH:
        if (state.wrap && state.flags) {
          //=== NEEDBITS(32);
          while (bits < 32) {
            if (have === 0) { break inf_leave; }
            have--;
            hold += input[next++] << bits;
            bits += 8;
          }
          //===//
          if (hold !== (state.total & 0xffffffff)) {
            strm.msg = 'incorrect length check';
            state.mode = BAD;
            break;
          }
          //=== INITBITS();
          hold = 0;
          bits = 0;
          //===//
          //Tracev((stderr, "inflate:   length matches trailer\n"));
        }
        state.mode = DONE;
        /* falls through */
      case DONE:
        ret = Z_STREAM_END;
        break inf_leave;
      case BAD:
        ret = Z_DATA_ERROR;
        break inf_leave;
      case MEM:
        return Z_MEM_ERROR;
      case SYNC:
        /* falls through */
      default:
        return Z_STREAM_ERROR;
    }
  }

  // inf_leave <- here is real place for "goto inf_leave", emulated via "break inf_leave"

  /*
     Return from inflate(), updating the total counts and the check value.
     If there was no progress during the inflate() call, return a buffer
     error.  Call updatewindow() to create and/or update the window state.
     Note: a memory error from inflate() is non-recoverable.
   */

  //--- RESTORE() ---
  strm.next_out = put;
  strm.avail_out = left;
  strm.next_in = next;
  strm.avail_in = have;
  state.hold = hold;
  state.bits = bits;
  //---

  if (state.wsize || (_out !== strm.avail_out && state.mode < BAD &&
                      (state.mode < CHECK || flush !== Z_FINISH))) {
    if (updatewindow(strm, strm.output, strm.next_out, _out - strm.avail_out)) {
      state.mode = MEM;
      return Z_MEM_ERROR;
    }
  }
  _in -= strm.avail_in;
  _out -= strm.avail_out;
  strm.total_in += _in;
  strm.total_out += _out;
  state.total += _out;
  if (state.wrap && _out) {
    strm.adler = state.check = /*UPDATE(state.check, strm.next_out - _out, _out);*/
      (state.flags ? crc32(state.check, output, _out, strm.next_out - _out) : adler32(state.check, output, _out, strm.next_out - _out));
  }
  strm.data_type = state.bits + (state.last ? 64 : 0) +
                    (state.mode === TYPE ? 128 : 0) +
                    (state.mode === LEN_ || state.mode === COPY_ ? 256 : 0);
  if (((_in === 0 && _out === 0) || flush === Z_FINISH) && ret === Z_OK) {
    ret = Z_BUF_ERROR;
  }
  return ret;
}

function inflateEnd(strm) {

  if (!strm || !strm.state /*|| strm->zfree == (free_func)0*/) {
    return Z_STREAM_ERROR;
  }

  var state = strm.state;
  if (state.window) {
    state.window = null;
  }
  strm.state = null;
  return Z_OK;
}

function inflateGetHeader(strm, head) {
  var state;

  /* check state */
  if (!strm || !strm.state) { return Z_STREAM_ERROR; }
  state = strm.state;
  if ((state.wrap & 2) === 0) { return Z_STREAM_ERROR; }

  /* save header structure */
  state.head = head;
  head.done = false;
  return Z_OK;
}

function inflateSetDictionary(strm, dictionary) {
  var dictLength = dictionary.length;

  var state;
  var dictid;
  var ret;

  /* check state */
  if (!strm /* == Z_NULL */ || !strm.state /* == Z_NULL */) { return Z_STREAM_ERROR; }
  state = strm.state;

  if (state.wrap !== 0 && state.mode !== DICT) {
    return Z_STREAM_ERROR;
  }

  /* check for correct dictionary identifier */
  if (state.mode === DICT) {
    dictid = 1; /* adler32(0, null, 0)*/
    /* dictid = adler32(dictid, dictionary, dictLength); */
    dictid = adler32(dictid, dictionary, dictLength, 0);
    if (dictid !== state.check) {
      return Z_DATA_ERROR;
    }
  }
  /* copy dictionary to window using updatewindow(), which will amend the
   existing dictionary if appropriate */
  ret = updatewindow(strm, dictionary, dictLength, dictLength);
  if (ret) {
    state.mode = MEM;
    return Z_MEM_ERROR;
  }
  state.havedict = 1;
  // Tracev((stderr, "inflate:   dictionary set\n"));
  return Z_OK;
}

exports.inflateReset = inflateReset;
exports.inflateReset2 = inflateReset2;
exports.inflateResetKeep = inflateResetKeep;
exports.inflateInit = inflateInit;
exports.inflateInit2 = inflateInit2;
exports.inflate = inflate;
exports.inflateEnd = inflateEnd;
exports.inflateGetHeader = inflateGetHeader;
exports.inflateSetDictionary = inflateSetDictionary;
exports.inflateInfo = 'pako inflate (from Nodeca project)';

/* Not implemented
exports.inflateCopy = inflateCopy;
exports.inflateGetDictionary = inflateGetDictionary;
exports.inflateMark = inflateMark;
exports.inflatePrime = inflatePrime;
exports.inflateSync = inflateSync;
exports.inflateSyncPoint = inflateSyncPoint;
exports.inflateUndermine = inflateUndermine;
*/

},{"../utils/common":16,"./adler32":18,"./crc32":20,"./inffast":23,"./inftrees":25}],25:[function(require,module,exports){
'use strict';

// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.

var utils = require('../utils/common');

var MAXBITS = 15;
var ENOUGH_LENS = 852;
var ENOUGH_DISTS = 592;
//var ENOUGH = (ENOUGH_LENS+ENOUGH_DISTS);

var CODES = 0;
var LENS = 1;
var DISTS = 2;

var lbase = [ /* Length codes 257..285 base */
  3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31,
  35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0
];

var lext = [ /* Length codes 257..285 extra */
  16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18,
  19, 19, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72, 78
];

var dbase = [ /* Distance codes 0..29 base */
  1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193,
  257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145,
  8193, 12289, 16385, 24577, 0, 0
];

var dext = [ /* Distance codes 0..29 extra */
  16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22,
  23, 23, 24, 24, 25, 25, 26, 26, 27, 27,
  28, 28, 29, 29, 64, 64
];

module.exports = function inflate_table(type, lens, lens_index, codes, table, table_index, work, opts)
{
  var bits = opts.bits;
      //here = opts.here; /* table entry for duplication */

  var len = 0;               /* a code's length in bits */
  var sym = 0;               /* index of code symbols */
  var min = 0, max = 0;          /* minimum and maximum code lengths */
  var root = 0;              /* number of index bits for root table */
  var curr = 0;              /* number of index bits for current table */
  var drop = 0;              /* code bits to drop for sub-table */
  var left = 0;                   /* number of prefix codes available */
  var used = 0;              /* code entries in table used */
  var huff = 0;              /* Huffman code */
  var incr;              /* for incrementing code, index */
  var fill;              /* index for replicating entries */
  var low;               /* low bits for current root entry */
  var mask;              /* mask for low root bits */
  var next;             /* next available space in table */
  var base = null;     /* base value table to use */
  var base_index = 0;
//  var shoextra;    /* extra bits table to use */
  var end;                    /* use base and extra for symbol > end */
  var count = new utils.Buf16(MAXBITS + 1); //[MAXBITS+1];    /* number of codes of each length */
  var offs = new utils.Buf16(MAXBITS + 1); //[MAXBITS+1];     /* offsets in table for each length */
  var extra = null;
  var extra_index = 0;

  var here_bits, here_op, here_val;

  /*
   Process a set of code lengths to create a canonical Huffman code.  The
   code lengths are lens[0..codes-1].  Each length corresponds to the
   symbols 0..codes-1.  The Huffman code is generated by first sorting the
   symbols by length from short to long, and retaining the symbol order
   for codes with equal lengths.  Then the code starts with all zero bits
   for the first code of the shortest length, and the codes are integer
   increments for the same length, and zeros are appended as the length
   increases.  For the deflate format, these bits are stored backwards
   from their more natural integer increment ordering, and so when the
   decoding tables are built in the large loop below, the integer codes
   are incremented backwards.

   This routine assumes, but does not check, that all of the entries in
   lens[] are in the range 0..MAXBITS.  The caller must assure this.
   1..MAXBITS is interpreted as that code length.  zero means that that
   symbol does not occur in this code.

   The codes are sorted by computing a count of codes for each length,
   creating from that a table of starting indices for each length in the
   sorted table, and then entering the symbols in order in the sorted
   table.  The sorted table is work[], with that space being provided by
   the caller.

   The length counts are used for other purposes as well, i.e. finding
   the minimum and maximum length codes, determining if there are any
   codes at all, checking for a valid set of lengths, and looking ahead
   at length counts to determine sub-table sizes when building the
   decoding tables.
   */

  /* accumulate lengths for codes (assumes lens[] all in 0..MAXBITS) */
  for (len = 0; len <= MAXBITS; len++) {
    count[len] = 0;
  }
  for (sym = 0; sym < codes; sym++) {
    count[lens[lens_index + sym]]++;
  }

  /* bound code lengths, force root to be within code lengths */
  root = bits;
  for (max = MAXBITS; max >= 1; max--) {
    if (count[max] !== 0) { break; }
  }
  if (root > max) {
    root = max;
  }
  if (max === 0) {                     /* no symbols to code at all */
    //table.op[opts.table_index] = 64;  //here.op = (var char)64;    /* invalid code marker */
    //table.bits[opts.table_index] = 1;   //here.bits = (var char)1;
    //table.val[opts.table_index++] = 0;   //here.val = (var short)0;
    table[table_index++] = (1 << 24) | (64 << 16) | 0;


    //table.op[opts.table_index] = 64;
    //table.bits[opts.table_index] = 1;
    //table.val[opts.table_index++] = 0;
    table[table_index++] = (1 << 24) | (64 << 16) | 0;

    opts.bits = 1;
    return 0;     /* no symbols, but wait for decoding to report error */
  }
  for (min = 1; min < max; min++) {
    if (count[min] !== 0) { break; }
  }
  if (root < min) {
    root = min;
  }

  /* check for an over-subscribed or incomplete set of lengths */
  left = 1;
  for (len = 1; len <= MAXBITS; len++) {
    left <<= 1;
    left -= count[len];
    if (left < 0) {
      return -1;
    }        /* over-subscribed */
  }
  if (left > 0 && (type === CODES || max !== 1)) {
    return -1;                      /* incomplete set */
  }

  /* generate offsets into symbol table for each length for sorting */
  offs[1] = 0;
  for (len = 1; len < MAXBITS; len++) {
    offs[len + 1] = offs[len] + count[len];
  }

  /* sort symbols by length, by symbol order within each length */
  for (sym = 0; sym < codes; sym++) {
    if (lens[lens_index + sym] !== 0) {
      work[offs[lens[lens_index + sym]]++] = sym;
    }
  }

  /*
   Create and fill in decoding tables.  In this loop, the table being
   filled is at next and has curr index bits.  The code being used is huff
   with length len.  That code is converted to an index by dropping drop
   bits off of the bottom.  For codes where len is less than drop + curr,
   those top drop + curr - len bits are incremented through all values to
   fill the table with replicated entries.

   root is the number of index bits for the root table.  When len exceeds
   root, sub-tables are created pointed to by the root entry with an index
   of the low root bits of huff.  This is saved in low to check for when a
   new sub-table should be started.  drop is zero when the root table is
   being filled, and drop is root when sub-tables are being filled.

   When a new sub-table is needed, it is necessary to look ahead in the
   code lengths to determine what size sub-table is needed.  The length
   counts are used for this, and so count[] is decremented as codes are
   entered in the tables.

   used keeps track of how many table entries have been allocated from the
   provided *table space.  It is checked for LENS and DIST tables against
   the constants ENOUGH_LENS and ENOUGH_DISTS to guard against changes in
   the initial root table size constants.  See the comments in inftrees.h
   for more information.

   sym increments through all symbols, and the loop terminates when
   all codes of length max, i.e. all codes, have been processed.  This
   routine permits incomplete codes, so another loop after this one fills
   in the rest of the decoding tables with invalid code markers.
   */

  /* set up for code type */
  // poor man optimization - use if-else instead of switch,
  // to avoid deopts in old v8
  if (type === CODES) {
    base = extra = work;    /* dummy value--not used */
    end = 19;

  } else if (type === LENS) {
    base = lbase;
    base_index -= 257;
    extra = lext;
    extra_index -= 257;
    end = 256;

  } else {                    /* DISTS */
    base = dbase;
    extra = dext;
    end = -1;
  }

  /* initialize opts for loop */
  huff = 0;                   /* starting code */
  sym = 0;                    /* starting code symbol */
  len = min;                  /* starting code length */
  next = table_index;              /* current table to fill in */
  curr = root;                /* current table index bits */
  drop = 0;                   /* current bits to drop from code for index */
  low = -1;                   /* trigger new sub-table when len > root */
  used = 1 << root;          /* use root table entries */
  mask = used - 1;            /* mask for comparing low */

  /* check available table space */
  if ((type === LENS && used > ENOUGH_LENS) ||
    (type === DISTS && used > ENOUGH_DISTS)) {
    return 1;
  }

  /* process all codes and make table entries */
  for (;;) {
    /* create table entry */
    here_bits = len - drop;
    if (work[sym] < end) {
      here_op = 0;
      here_val = work[sym];
    }
    else if (work[sym] > end) {
      here_op = extra[extra_index + work[sym]];
      here_val = base[base_index + work[sym]];
    }
    else {
      here_op = 32 + 64;         /* end of block */
      here_val = 0;
    }

    /* replicate for those indices with low len bits equal to huff */
    incr = 1 << (len - drop);
    fill = 1 << curr;
    min = fill;                 /* save offset to next table */
    do {
      fill -= incr;
      table[next + (huff >> drop) + fill] = (here_bits << 24) | (here_op << 16) | here_val |0;
    } while (fill !== 0);

    /* backwards increment the len-bit code huff */
    incr = 1 << (len - 1);
    while (huff & incr) {
      incr >>= 1;
    }
    if (incr !== 0) {
      huff &= incr - 1;
      huff += incr;
    } else {
      huff = 0;
    }

    /* go to next symbol, update count, len */
    sym++;
    if (--count[len] === 0) {
      if (len === max) { break; }
      len = lens[lens_index + work[sym]];
    }

    /* create new sub-table if needed */
    if (len > root && (huff & mask) !== low) {
      /* if first time, transition to sub-tables */
      if (drop === 0) {
        drop = root;
      }

      /* increment past last table */
      next += min;            /* here min is 1 << curr */

      /* determine length of next table */
      curr = len - drop;
      left = 1 << curr;
      while (curr + drop < max) {
        left -= count[curr + drop];
        if (left <= 0) { break; }
        curr++;
        left <<= 1;
      }

      /* check for enough space */
      used += 1 << curr;
      if ((type === LENS && used > ENOUGH_LENS) ||
        (type === DISTS && used > ENOUGH_DISTS)) {
        return 1;
      }

      /* point entry in root table to sub-table */
      low = huff & mask;
      /*table.op[low] = curr;
      table.bits[low] = root;
      table.val[low] = next - opts.table_index;*/
      table[low] = (root << 24) | (curr << 16) | (next - table_index) |0;
    }
  }

  /* fill in remaining table entry if code is incomplete (guaranteed to have
   at most one remaining entry, since if the code is incomplete, the
   maximum code length that was allowed to get this far is one bit) */
  if (huff !== 0) {
    //table.op[next + huff] = 64;            /* invalid code marker */
    //table.bits[next + huff] = len - drop;
    //table.val[next + huff] = 0;
    table[next + huff] = ((len - drop) << 24) | (64 << 16) |0;
  }

  /* set return parameters */
  //opts.table_index += used;
  opts.bits = root;
  return 0;
};

},{"../utils/common":16}],26:[function(require,module,exports){
'use strict';

// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.

module.exports = {
  2:      'need dictionary',     /* Z_NEED_DICT       2  */
  1:      'stream end',          /* Z_STREAM_END      1  */
  0:      '',                    /* Z_OK              0  */
  '-1':   'file error',          /* Z_ERRNO         (-1) */
  '-2':   'stream error',        /* Z_STREAM_ERROR  (-2) */
  '-3':   'data error',          /* Z_DATA_ERROR    (-3) */
  '-4':   'insufficient memory', /* Z_MEM_ERROR     (-4) */
  '-5':   'buffer error',        /* Z_BUF_ERROR     (-5) */
  '-6':   'incompatible version' /* Z_VERSION_ERROR (-6) */
};

},{}],27:[function(require,module,exports){
'use strict';

// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.

/* eslint-disable space-unary-ops */

var utils = require('../utils/common');

/* Public constants ==========================================================*/
/* ===========================================================================*/


//var Z_FILTERED          = 1;
//var Z_HUFFMAN_ONLY      = 2;
//var Z_RLE               = 3;
var Z_FIXED               = 4;
//var Z_DEFAULT_STRATEGY  = 0;

/* Possible values of the data_type field (though see inflate()) */
var Z_BINARY              = 0;
var Z_TEXT                = 1;
//var Z_ASCII             = 1; // = Z_TEXT
var Z_UNKNOWN             = 2;

/*============================================================================*/


function zero(buf) { var len = buf.length; while (--len >= 0) { buf[len] = 0; } }

// From zutil.h

var STORED_BLOCK = 0;
var STATIC_TREES = 1;
var DYN_TREES    = 2;
/* The three kinds of block type */

var MIN_MATCH    = 3;
var MAX_MATCH    = 258;
/* The minimum and maximum match lengths */

// From deflate.h
/* ===========================================================================
 * Internal compression state.
 */

var LENGTH_CODES  = 29;
/* number of length codes, not counting the special END_BLOCK code */

var LITERALS      = 256;
/* number of literal bytes 0..255 */

var L_CODES       = LITERALS + 1 + LENGTH_CODES;
/* number of Literal or Length codes, including the END_BLOCK code */

var D_CODES       = 30;
/* number of distance codes */

var BL_CODES      = 19;
/* number of codes used to transfer the bit lengths */

var HEAP_SIZE     = 2 * L_CODES + 1;
/* maximum heap size */

var MAX_BITS      = 15;
/* All codes must not exceed MAX_BITS bits */

var Buf_size      = 16;
/* size of bit buffer in bi_buf */


/* ===========================================================================
 * Constants
 */

var MAX_BL_BITS = 7;
/* Bit length codes must not exceed MAX_BL_BITS bits */

var END_BLOCK   = 256;
/* end of block literal code */

var REP_3_6     = 16;
/* repeat previous bit length 3-6 times (2 bits of repeat count) */

var REPZ_3_10   = 17;
/* repeat a zero length 3-10 times  (3 bits of repeat count) */

var REPZ_11_138 = 18;
/* repeat a zero length 11-138 times  (7 bits of repeat count) */

/* eslint-disable comma-spacing,array-bracket-spacing */
var extra_lbits =   /* extra bits for each length code */
  [0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0];

var extra_dbits =   /* extra bits for each distance code */
  [0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13];

var extra_blbits =  /* extra bits for each bit length code */
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7];

var bl_order =
  [16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];
/* eslint-enable comma-spacing,array-bracket-spacing */

/* The lengths of the bit length codes are sent in order of decreasing
 * probability, to avoid transmitting the lengths for unused bit length codes.
 */

/* ===========================================================================
 * Local data. These are initialized only once.
 */

// We pre-fill arrays with 0 to avoid uninitialized gaps

var DIST_CODE_LEN = 512; /* see definition of array dist_code below */

// !!!! Use flat array instead of structure, Freq = i*2, Len = i*2+1
var static_ltree  = new Array((L_CODES + 2) * 2);
zero(static_ltree);
/* The static literal tree. Since the bit lengths are imposed, there is no
 * need for the L_CODES extra codes used during heap construction. However
 * The codes 286 and 287 are needed to build a canonical tree (see _tr_init
 * below).
 */

var static_dtree  = new Array(D_CODES * 2);
zero(static_dtree);
/* The static distance tree. (Actually a trivial tree since all codes use
 * 5 bits.)
 */

var _dist_code    = new Array(DIST_CODE_LEN);
zero(_dist_code);
/* Distance codes. The first 256 values correspond to the distances
 * 3 .. 258, the last 256 values correspond to the top 8 bits of
 * the 15 bit distances.
 */

var _length_code  = new Array(MAX_MATCH - MIN_MATCH + 1);
zero(_length_code);
/* length code for each normalized match length (0 == MIN_MATCH) */

var base_length   = new Array(LENGTH_CODES);
zero(base_length);
/* First normalized length for each code (0 = MIN_MATCH) */

var base_dist     = new Array(D_CODES);
zero(base_dist);
/* First normalized distance for each code (0 = distance of 1) */


function StaticTreeDesc(static_tree, extra_bits, extra_base, elems, max_length) {

  this.static_tree  = static_tree;  /* static tree or NULL */
  this.extra_bits   = extra_bits;   /* extra bits for each code or NULL */
  this.extra_base   = extra_base;   /* base index for extra_bits */
  this.elems        = elems;        /* max number of elements in the tree */
  this.max_length   = max_length;   /* max bit length for the codes */

  // show if `static_tree` has data or dummy - needed for monomorphic objects
  this.has_stree    = static_tree && static_tree.length;
}


var static_l_desc;
var static_d_desc;
var static_bl_desc;


function TreeDesc(dyn_tree, stat_desc) {
  this.dyn_tree = dyn_tree;     /* the dynamic tree */
  this.max_code = 0;            /* largest code with non zero frequency */
  this.stat_desc = stat_desc;   /* the corresponding static tree */
}



function d_code(dist) {
  return dist < 256 ? _dist_code[dist] : _dist_code[256 + (dist >>> 7)];
}


/* ===========================================================================
 * Output a short LSB first on the stream.
 * IN assertion: there is enough room in pendingBuf.
 */
function put_short(s, w) {
//    put_byte(s, (uch)((w) & 0xff));
//    put_byte(s, (uch)((ush)(w) >> 8));
  s.pending_buf[s.pending++] = (w) & 0xff;
  s.pending_buf[s.pending++] = (w >>> 8) & 0xff;
}


/* ===========================================================================
 * Send a value on a given number of bits.
 * IN assertion: length <= 16 and value fits in length bits.
 */
function send_bits(s, value, length) {
  if (s.bi_valid > (Buf_size - length)) {
    s.bi_buf |= (value << s.bi_valid) & 0xffff;
    put_short(s, s.bi_buf);
    s.bi_buf = value >> (Buf_size - s.bi_valid);
    s.bi_valid += length - Buf_size;
  } else {
    s.bi_buf |= (value << s.bi_valid) & 0xffff;
    s.bi_valid += length;
  }
}


function send_code(s, c, tree) {
  send_bits(s, tree[c * 2]/*.Code*/, tree[c * 2 + 1]/*.Len*/);
}


/* ===========================================================================
 * Reverse the first len bits of a code, using straightforward code (a faster
 * method would use a table)
 * IN assertion: 1 <= len <= 15
 */
function bi_reverse(code, len) {
  var res = 0;
  do {
    res |= code & 1;
    code >>>= 1;
    res <<= 1;
  } while (--len > 0);
  return res >>> 1;
}


/* ===========================================================================
 * Flush the bit buffer, keeping at most 7 bits in it.
 */
function bi_flush(s) {
  if (s.bi_valid === 16) {
    put_short(s, s.bi_buf);
    s.bi_buf = 0;
    s.bi_valid = 0;

  } else if (s.bi_valid >= 8) {
    s.pending_buf[s.pending++] = s.bi_buf & 0xff;
    s.bi_buf >>= 8;
    s.bi_valid -= 8;
  }
}


/* ===========================================================================
 * Compute the optimal bit lengths for a tree and update the total bit length
 * for the current block.
 * IN assertion: the fields freq and dad are set, heap[heap_max] and
 *    above are the tree nodes sorted by increasing frequency.
 * OUT assertions: the field len is set to the optimal bit length, the
 *     array bl_count contains the frequencies for each bit length.
 *     The length opt_len is updated; static_len is also updated if stree is
 *     not null.
 */
function gen_bitlen(s, desc)
//    deflate_state *s;
//    tree_desc *desc;    /* the tree descriptor */
{
  var tree            = desc.dyn_tree;
  var max_code        = desc.max_code;
  var stree           = desc.stat_desc.static_tree;
  var has_stree       = desc.stat_desc.has_stree;
  var extra           = desc.stat_desc.extra_bits;
  var base            = desc.stat_desc.extra_base;
  var max_length      = desc.stat_desc.max_length;
  var h;              /* heap index */
  var n, m;           /* iterate over the tree elements */
  var bits;           /* bit length */
  var xbits;          /* extra bits */
  var f;              /* frequency */
  var overflow = 0;   /* number of elements with bit length too large */

  for (bits = 0; bits <= MAX_BITS; bits++) {
    s.bl_count[bits] = 0;
  }

  /* In a first pass, compute the optimal bit lengths (which may
   * overflow in the case of the bit length tree).
   */
  tree[s.heap[s.heap_max] * 2 + 1]/*.Len*/ = 0; /* root of the heap */

  for (h = s.heap_max + 1; h < HEAP_SIZE; h++) {
    n = s.heap[h];
    bits = tree[tree[n * 2 + 1]/*.Dad*/ * 2 + 1]/*.Len*/ + 1;
    if (bits > max_length) {
      bits = max_length;
      overflow++;
    }
    tree[n * 2 + 1]/*.Len*/ = bits;
    /* We overwrite tree[n].Dad which is no longer needed */

    if (n > max_code) { continue; } /* not a leaf node */

    s.bl_count[bits]++;
    xbits = 0;
    if (n >= base) {
      xbits = extra[n - base];
    }
    f = tree[n * 2]/*.Freq*/;
    s.opt_len += f * (bits + xbits);
    if (has_stree) {
      s.static_len += f * (stree[n * 2 + 1]/*.Len*/ + xbits);
    }
  }
  if (overflow === 0) { return; }

  // Trace((stderr,"\nbit length overflow\n"));
  /* This happens for example on obj2 and pic of the Calgary corpus */

  /* Find the first bit length which could increase: */
  do {
    bits = max_length - 1;
    while (s.bl_count[bits] === 0) { bits--; }
    s.bl_count[bits]--;      /* move one leaf down the tree */
    s.bl_count[bits + 1] += 2; /* move one overflow item as its brother */
    s.bl_count[max_length]--;
    /* The brother of the overflow item also moves one step up,
     * but this does not affect bl_count[max_length]
     */
    overflow -= 2;
  } while (overflow > 0);

  /* Now recompute all bit lengths, scanning in increasing frequency.
   * h is still equal to HEAP_SIZE. (It is simpler to reconstruct all
   * lengths instead of fixing only the wrong ones. This idea is taken
   * from 'ar' written by Haruhiko Okumura.)
   */
  for (bits = max_length; bits !== 0; bits--) {
    n = s.bl_count[bits];
    while (n !== 0) {
      m = s.heap[--h];
      if (m > max_code) { continue; }
      if (tree[m * 2 + 1]/*.Len*/ !== bits) {
        // Trace((stderr,"code %d bits %d->%d\n", m, tree[m].Len, bits));
        s.opt_len += (bits - tree[m * 2 + 1]/*.Len*/) * tree[m * 2]/*.Freq*/;
        tree[m * 2 + 1]/*.Len*/ = bits;
      }
      n--;
    }
  }
}


/* ===========================================================================
 * Generate the codes for a given tree and bit counts (which need not be
 * optimal).
 * IN assertion: the array bl_count contains the bit length statistics for
 * the given tree and the field len is set for all tree elements.
 * OUT assertion: the field code is set for all tree elements of non
 *     zero code length.
 */
function gen_codes(tree, max_code, bl_count)
//    ct_data *tree;             /* the tree to decorate */
//    int max_code;              /* largest code with non zero frequency */
//    ushf *bl_count;            /* number of codes at each bit length */
{
  var next_code = new Array(MAX_BITS + 1); /* next code value for each bit length */
  var code = 0;              /* running code value */
  var bits;                  /* bit index */
  var n;                     /* code index */

  /* The distribution counts are first used to generate the code values
   * without bit reversal.
   */
  for (bits = 1; bits <= MAX_BITS; bits++) {
    next_code[bits] = code = (code + bl_count[bits - 1]) << 1;
  }
  /* Check that the bit counts in bl_count are consistent. The last code
   * must be all ones.
   */
  //Assert (code + bl_count[MAX_BITS]-1 == (1<<MAX_BITS)-1,
  //        "inconsistent bit counts");
  //Tracev((stderr,"\ngen_codes: max_code %d ", max_code));

  for (n = 0;  n <= max_code; n++) {
    var len = tree[n * 2 + 1]/*.Len*/;
    if (len === 0) { continue; }
    /* Now reverse the bits */
    tree[n * 2]/*.Code*/ = bi_reverse(next_code[len]++, len);

    //Tracecv(tree != static_ltree, (stderr,"\nn %3d %c l %2d c %4x (%x) ",
    //     n, (isgraph(n) ? n : ' '), len, tree[n].Code, next_code[len]-1));
  }
}


/* ===========================================================================
 * Initialize the various 'constant' tables.
 */
function tr_static_init() {
  var n;        /* iterates over tree elements */
  var bits;     /* bit counter */
  var length;   /* length value */
  var code;     /* code value */
  var dist;     /* distance index */
  var bl_count = new Array(MAX_BITS + 1);
  /* number of codes at each bit length for an optimal tree */

  // do check in _tr_init()
  //if (static_init_done) return;

  /* For some embedded targets, global variables are not initialized: */
/*#ifdef NO_INIT_GLOBAL_POINTERS
  static_l_desc.static_tree = static_ltree;
  static_l_desc.extra_bits = extra_lbits;
  static_d_desc.static_tree = static_dtree;
  static_d_desc.extra_bits = extra_dbits;
  static_bl_desc.extra_bits = extra_blbits;
#endif*/

  /* Initialize the mapping length (0..255) -> length code (0..28) */
  length = 0;
  for (code = 0; code < LENGTH_CODES - 1; code++) {
    base_length[code] = length;
    for (n = 0; n < (1 << extra_lbits[code]); n++) {
      _length_code[length++] = code;
    }
  }
  //Assert (length == 256, "tr_static_init: length != 256");
  /* Note that the length 255 (match length 258) can be represented
   * in two different ways: code 284 + 5 bits or code 285, so we
   * overwrite length_code[255] to use the best encoding:
   */
  _length_code[length - 1] = code;

  /* Initialize the mapping dist (0..32K) -> dist code (0..29) */
  dist = 0;
  for (code = 0; code < 16; code++) {
    base_dist[code] = dist;
    for (n = 0; n < (1 << extra_dbits[code]); n++) {
      _dist_code[dist++] = code;
    }
  }
  //Assert (dist == 256, "tr_static_init: dist != 256");
  dist >>= 7; /* from now on, all distances are divided by 128 */
  for (; code < D_CODES; code++) {
    base_dist[code] = dist << 7;
    for (n = 0; n < (1 << (extra_dbits[code] - 7)); n++) {
      _dist_code[256 + dist++] = code;
    }
  }
  //Assert (dist == 256, "tr_static_init: 256+dist != 512");

  /* Construct the codes of the static literal tree */
  for (bits = 0; bits <= MAX_BITS; bits++) {
    bl_count[bits] = 0;
  }

  n = 0;
  while (n <= 143) {
    static_ltree[n * 2 + 1]/*.Len*/ = 8;
    n++;
    bl_count[8]++;
  }
  while (n <= 255) {
    static_ltree[n * 2 + 1]/*.Len*/ = 9;
    n++;
    bl_count[9]++;
  }
  while (n <= 279) {
    static_ltree[n * 2 + 1]/*.Len*/ = 7;
    n++;
    bl_count[7]++;
  }
  while (n <= 287) {
    static_ltree[n * 2 + 1]/*.Len*/ = 8;
    n++;
    bl_count[8]++;
  }
  /* Codes 286 and 287 do not exist, but we must include them in the
   * tree construction to get a canonical Huffman tree (longest code
   * all ones)
   */
  gen_codes(static_ltree, L_CODES + 1, bl_count);

  /* The static distance tree is trivial: */
  for (n = 0; n < D_CODES; n++) {
    static_dtree[n * 2 + 1]/*.Len*/ = 5;
    static_dtree[n * 2]/*.Code*/ = bi_reverse(n, 5);
  }

  // Now data ready and we can init static trees
  static_l_desc = new StaticTreeDesc(static_ltree, extra_lbits, LITERALS + 1, L_CODES, MAX_BITS);
  static_d_desc = new StaticTreeDesc(static_dtree, extra_dbits, 0,          D_CODES, MAX_BITS);
  static_bl_desc = new StaticTreeDesc(new Array(0), extra_blbits, 0,         BL_CODES, MAX_BL_BITS);

  //static_init_done = true;
}


/* ===========================================================================
 * Initialize a new block.
 */
function init_block(s) {
  var n; /* iterates over tree elements */

  /* Initialize the trees. */
  for (n = 0; n < L_CODES;  n++) { s.dyn_ltree[n * 2]/*.Freq*/ = 0; }
  for (n = 0; n < D_CODES;  n++) { s.dyn_dtree[n * 2]/*.Freq*/ = 0; }
  for (n = 0; n < BL_CODES; n++) { s.bl_tree[n * 2]/*.Freq*/ = 0; }

  s.dyn_ltree[END_BLOCK * 2]/*.Freq*/ = 1;
  s.opt_len = s.static_len = 0;
  s.last_lit = s.matches = 0;
}


/* ===========================================================================
 * Flush the bit buffer and align the output on a byte boundary
 */
function bi_windup(s)
{
  if (s.bi_valid > 8) {
    put_short(s, s.bi_buf);
  } else if (s.bi_valid > 0) {
    //put_byte(s, (Byte)s->bi_buf);
    s.pending_buf[s.pending++] = s.bi_buf;
  }
  s.bi_buf = 0;
  s.bi_valid = 0;
}

/* ===========================================================================
 * Copy a stored block, storing first the length and its
 * one's complement if requested.
 */
function copy_block(s, buf, len, header)
//DeflateState *s;
//charf    *buf;    /* the input data */
//unsigned len;     /* its length */
//int      header;  /* true if block header must be written */
{
  bi_windup(s);        /* align on byte boundary */

  if (header) {
    put_short(s, len);
    put_short(s, ~len);
  }
//  while (len--) {
//    put_byte(s, *buf++);
//  }
  utils.arraySet(s.pending_buf, s.window, buf, len, s.pending);
  s.pending += len;
}

/* ===========================================================================
 * Compares to subtrees, using the tree depth as tie breaker when
 * the subtrees have equal frequency. This minimizes the worst case length.
 */
function smaller(tree, n, m, depth) {
  var _n2 = n * 2;
  var _m2 = m * 2;
  return (tree[_n2]/*.Freq*/ < tree[_m2]/*.Freq*/ ||
         (tree[_n2]/*.Freq*/ === tree[_m2]/*.Freq*/ && depth[n] <= depth[m]));
}

/* ===========================================================================
 * Restore the heap property by moving down the tree starting at node k,
 * exchanging a node with the smallest of its two sons if necessary, stopping
 * when the heap property is re-established (each father smaller than its
 * two sons).
 */
function pqdownheap(s, tree, k)
//    deflate_state *s;
//    ct_data *tree;  /* the tree to restore */
//    int k;               /* node to move down */
{
  var v = s.heap[k];
  var j = k << 1;  /* left son of k */
  while (j <= s.heap_len) {
    /* Set j to the smallest of the two sons: */
    if (j < s.heap_len &&
      smaller(tree, s.heap[j + 1], s.heap[j], s.depth)) {
      j++;
    }
    /* Exit if v is smaller than both sons */
    if (smaller(tree, v, s.heap[j], s.depth)) { break; }

    /* Exchange v with the smallest son */
    s.heap[k] = s.heap[j];
    k = j;

    /* And continue down the tree, setting j to the left son of k */
    j <<= 1;
  }
  s.heap[k] = v;
}


// inlined manually
// var SMALLEST = 1;

/* ===========================================================================
 * Send the block data compressed using the given Huffman trees
 */
function compress_block(s, ltree, dtree)
//    deflate_state *s;
//    const ct_data *ltree; /* literal tree */
//    const ct_data *dtree; /* distance tree */
{
  var dist;           /* distance of matched string */
  var lc;             /* match length or unmatched char (if dist == 0) */
  var lx = 0;         /* running index in l_buf */
  var code;           /* the code to send */
  var extra;          /* number of extra bits to send */

  if (s.last_lit !== 0) {
    do {
      dist = (s.pending_buf[s.d_buf + lx * 2] << 8) | (s.pending_buf[s.d_buf + lx * 2 + 1]);
      lc = s.pending_buf[s.l_buf + lx];
      lx++;

      if (dist === 0) {
        send_code(s, lc, ltree); /* send a literal byte */
        //Tracecv(isgraph(lc), (stderr," '%c' ", lc));
      } else {
        /* Here, lc is the match length - MIN_MATCH */
        code = _length_code[lc];
        send_code(s, code + LITERALS + 1, ltree); /* send the length code */
        extra = extra_lbits[code];
        if (extra !== 0) {
          lc -= base_length[code];
          send_bits(s, lc, extra);       /* send the extra length bits */
        }
        dist--; /* dist is now the match distance - 1 */
        code = d_code(dist);
        //Assert (code < D_CODES, "bad d_code");

        send_code(s, code, dtree);       /* send the distance code */
        extra = extra_dbits[code];
        if (extra !== 0) {
          dist -= base_dist[code];
          send_bits(s, dist, extra);   /* send the extra distance bits */
        }
      } /* literal or match pair ? */

      /* Check that the overlay between pending_buf and d_buf+l_buf is ok: */
      //Assert((uInt)(s->pending) < s->lit_bufsize + 2*lx,
      //       "pendingBuf overflow");

    } while (lx < s.last_lit);
  }

  send_code(s, END_BLOCK, ltree);
}


/* ===========================================================================
 * Construct one Huffman tree and assigns the code bit strings and lengths.
 * Update the total bit length for the current block.
 * IN assertion: the field freq is set for all tree elements.
 * OUT assertions: the fields len and code are set to the optimal bit length
 *     and corresponding code. The length opt_len is updated; static_len is
 *     also updated if stree is not null. The field max_code is set.
 */
function build_tree(s, desc)
//    deflate_state *s;
//    tree_desc *desc; /* the tree descriptor */
{
  var tree     = desc.dyn_tree;
  var stree    = desc.stat_desc.static_tree;
  var has_stree = desc.stat_desc.has_stree;
  var elems    = desc.stat_desc.elems;
  var n, m;          /* iterate over heap elements */
  var max_code = -1; /* largest code with non zero frequency */
  var node;          /* new node being created */

  /* Construct the initial heap, with least frequent element in
   * heap[SMALLEST]. The sons of heap[n] are heap[2*n] and heap[2*n+1].
   * heap[0] is not used.
   */
  s.heap_len = 0;
  s.heap_max = HEAP_SIZE;

  for (n = 0; n < elems; n++) {
    if (tree[n * 2]/*.Freq*/ !== 0) {
      s.heap[++s.heap_len] = max_code = n;
      s.depth[n] = 0;

    } else {
      tree[n * 2 + 1]/*.Len*/ = 0;
    }
  }

  /* The pkzip format requires that at least one distance code exists,
   * and that at least one bit should be sent even if there is only one
   * possible code. So to avoid special checks later on we force at least
   * two codes of non zero frequency.
   */
  while (s.heap_len < 2) {
    node = s.heap[++s.heap_len] = (max_code < 2 ? ++max_code : 0);
    tree[node * 2]/*.Freq*/ = 1;
    s.depth[node] = 0;
    s.opt_len--;

    if (has_stree) {
      s.static_len -= stree[node * 2 + 1]/*.Len*/;
    }
    /* node is 0 or 1 so it does not have extra bits */
  }
  desc.max_code = max_code;

  /* The elements heap[heap_len/2+1 .. heap_len] are leaves of the tree,
   * establish sub-heaps of increasing lengths:
   */
  for (n = (s.heap_len >> 1/*int /2*/); n >= 1; n--) { pqdownheap(s, tree, n); }

  /* Construct the Huffman tree by repeatedly combining the least two
   * frequent nodes.
   */
  node = elems;              /* next internal node of the tree */
  do {
    //pqremove(s, tree, n);  /* n = node of least frequency */
    /*** pqremove ***/
    n = s.heap[1/*SMALLEST*/];
    s.heap[1/*SMALLEST*/] = s.heap[s.heap_len--];
    pqdownheap(s, tree, 1/*SMALLEST*/);
    /***/

    m = s.heap[1/*SMALLEST*/]; /* m = node of next least frequency */

    s.heap[--s.heap_max] = n; /* keep the nodes sorted by frequency */
    s.heap[--s.heap_max] = m;

    /* Create a new node father of n and m */
    tree[node * 2]/*.Freq*/ = tree[n * 2]/*.Freq*/ + tree[m * 2]/*.Freq*/;
    s.depth[node] = (s.depth[n] >= s.depth[m] ? s.depth[n] : s.depth[m]) + 1;
    tree[n * 2 + 1]/*.Dad*/ = tree[m * 2 + 1]/*.Dad*/ = node;

    /* and insert the new node in the heap */
    s.heap[1/*SMALLEST*/] = node++;
    pqdownheap(s, tree, 1/*SMALLEST*/);

  } while (s.heap_len >= 2);

  s.heap[--s.heap_max] = s.heap[1/*SMALLEST*/];

  /* At this point, the fields freq and dad are set. We can now
   * generate the bit lengths.
   */
  gen_bitlen(s, desc);

  /* The field len is now set, we can generate the bit codes */
  gen_codes(tree, max_code, s.bl_count);
}


/* ===========================================================================
 * Scan a literal or distance tree to determine the frequencies of the codes
 * in the bit length tree.
 */
function scan_tree(s, tree, max_code)
//    deflate_state *s;
//    ct_data *tree;   /* the tree to be scanned */
//    int max_code;    /* and its largest code of non zero frequency */
{
  var n;                     /* iterates over all tree elements */
  var prevlen = -1;          /* last emitted length */
  var curlen;                /* length of current code */

  var nextlen = tree[0 * 2 + 1]/*.Len*/; /* length of next code */

  var count = 0;             /* repeat count of the current code */
  var max_count = 7;         /* max repeat count */
  var min_count = 4;         /* min repeat count */

  if (nextlen === 0) {
    max_count = 138;
    min_count = 3;
  }
  tree[(max_code + 1) * 2 + 1]/*.Len*/ = 0xffff; /* guard */

  for (n = 0; n <= max_code; n++) {
    curlen = nextlen;
    nextlen = tree[(n + 1) * 2 + 1]/*.Len*/;

    if (++count < max_count && curlen === nextlen) {
      continue;

    } else if (count < min_count) {
      s.bl_tree[curlen * 2]/*.Freq*/ += count;

    } else if (curlen !== 0) {

      if (curlen !== prevlen) { s.bl_tree[curlen * 2]/*.Freq*/++; }
      s.bl_tree[REP_3_6 * 2]/*.Freq*/++;

    } else if (count <= 10) {
      s.bl_tree[REPZ_3_10 * 2]/*.Freq*/++;

    } else {
      s.bl_tree[REPZ_11_138 * 2]/*.Freq*/++;
    }

    count = 0;
    prevlen = curlen;

    if (nextlen === 0) {
      max_count = 138;
      min_count = 3;

    } else if (curlen === nextlen) {
      max_count = 6;
      min_count = 3;

    } else {
      max_count = 7;
      min_count = 4;
    }
  }
}


/* ===========================================================================
 * Send a literal or distance tree in compressed form, using the codes in
 * bl_tree.
 */
function send_tree(s, tree, max_code)
//    deflate_state *s;
//    ct_data *tree; /* the tree to be scanned */
//    int max_code;       /* and its largest code of non zero frequency */
{
  var n;                     /* iterates over all tree elements */
  var prevlen = -1;          /* last emitted length */
  var curlen;                /* length of current code */

  var nextlen = tree[0 * 2 + 1]/*.Len*/; /* length of next code */

  var count = 0;             /* repeat count of the current code */
  var max_count = 7;         /* max repeat count */
  var min_count = 4;         /* min repeat count */

  /* tree[max_code+1].Len = -1; */  /* guard already set */
  if (nextlen === 0) {
    max_count = 138;
    min_count = 3;
  }

  for (n = 0; n <= max_code; n++) {
    curlen = nextlen;
    nextlen = tree[(n + 1) * 2 + 1]/*.Len*/;

    if (++count < max_count && curlen === nextlen) {
      continue;

    } else if (count < min_count) {
      do { send_code(s, curlen, s.bl_tree); } while (--count !== 0);

    } else if (curlen !== 0) {
      if (curlen !== prevlen) {
        send_code(s, curlen, s.bl_tree);
        count--;
      }
      //Assert(count >= 3 && count <= 6, " 3_6?");
      send_code(s, REP_3_6, s.bl_tree);
      send_bits(s, count - 3, 2);

    } else if (count <= 10) {
      send_code(s, REPZ_3_10, s.bl_tree);
      send_bits(s, count - 3, 3);

    } else {
      send_code(s, REPZ_11_138, s.bl_tree);
      send_bits(s, count - 11, 7);
    }

    count = 0;
    prevlen = curlen;
    if (nextlen === 0) {
      max_count = 138;
      min_count = 3;

    } else if (curlen === nextlen) {
      max_count = 6;
      min_count = 3;

    } else {
      max_count = 7;
      min_count = 4;
    }
  }
}


/* ===========================================================================
 * Construct the Huffman tree for the bit lengths and return the index in
 * bl_order of the last bit length code to send.
 */
function build_bl_tree(s) {
  var max_blindex;  /* index of last bit length code of non zero freq */

  /* Determine the bit length frequencies for literal and distance trees */
  scan_tree(s, s.dyn_ltree, s.l_desc.max_code);
  scan_tree(s, s.dyn_dtree, s.d_desc.max_code);

  /* Build the bit length tree: */
  build_tree(s, s.bl_desc);
  /* opt_len now includes the length of the tree representations, except
   * the lengths of the bit lengths codes and the 5+5+4 bits for the counts.
   */

  /* Determine the number of bit length codes to send. The pkzip format
   * requires that at least 4 bit length codes be sent. (appnote.txt says
   * 3 but the actual value used is 4.)
   */
  for (max_blindex = BL_CODES - 1; max_blindex >= 3; max_blindex--) {
    if (s.bl_tree[bl_order[max_blindex] * 2 + 1]/*.Len*/ !== 0) {
      break;
    }
  }
  /* Update opt_len to include the bit length tree and counts */
  s.opt_len += 3 * (max_blindex + 1) + 5 + 5 + 4;
  //Tracev((stderr, "\ndyn trees: dyn %ld, stat %ld",
  //        s->opt_len, s->static_len));

  return max_blindex;
}


/* ===========================================================================
 * Send the header for a block using dynamic Huffman trees: the counts, the
 * lengths of the bit length codes, the literal tree and the distance tree.
 * IN assertion: lcodes >= 257, dcodes >= 1, blcodes >= 4.
 */
function send_all_trees(s, lcodes, dcodes, blcodes)
//    deflate_state *s;
//    int lcodes, dcodes, blcodes; /* number of codes for each tree */
{
  var rank;                    /* index in bl_order */

  //Assert (lcodes >= 257 && dcodes >= 1 && blcodes >= 4, "not enough codes");
  //Assert (lcodes <= L_CODES && dcodes <= D_CODES && blcodes <= BL_CODES,
  //        "too many codes");
  //Tracev((stderr, "\nbl counts: "));
  send_bits(s, lcodes - 257, 5); /* not +255 as stated in appnote.txt */
  send_bits(s, dcodes - 1,   5);
  send_bits(s, blcodes - 4,  4); /* not -3 as stated in appnote.txt */
  for (rank = 0; rank < blcodes; rank++) {
    //Tracev((stderr, "\nbl code %2d ", bl_order[rank]));
    send_bits(s, s.bl_tree[bl_order[rank] * 2 + 1]/*.Len*/, 3);
  }
  //Tracev((stderr, "\nbl tree: sent %ld", s->bits_sent));

  send_tree(s, s.dyn_ltree, lcodes - 1); /* literal tree */
  //Tracev((stderr, "\nlit tree: sent %ld", s->bits_sent));

  send_tree(s, s.dyn_dtree, dcodes - 1); /* distance tree */
  //Tracev((stderr, "\ndist tree: sent %ld", s->bits_sent));
}


/* ===========================================================================
 * Check if the data type is TEXT or BINARY, using the following algorithm:
 * - TEXT if the two conditions below are satisfied:
 *    a) There are no non-portable control characters belonging to the
 *       "black list" (0..6, 14..25, 28..31).
 *    b) There is at least one printable character belonging to the
 *       "white list" (9 {TAB}, 10 {LF}, 13 {CR}, 32..255).
 * - BINARY otherwise.
 * - The following partially-portable control characters form a
 *   "gray list" that is ignored in this detection algorithm:
 *   (7 {BEL}, 8 {BS}, 11 {VT}, 12 {FF}, 26 {SUB}, 27 {ESC}).
 * IN assertion: the fields Freq of dyn_ltree are set.
 */
function detect_data_type(s) {
  /* black_mask is the bit mask of black-listed bytes
   * set bits 0..6, 14..25, and 28..31
   * 0xf3ffc07f = binary 11110011111111111100000001111111
   */
  var black_mask = 0xf3ffc07f;
  var n;

  /* Check for non-textual ("black-listed") bytes. */
  for (n = 0; n <= 31; n++, black_mask >>>= 1) {
    if ((black_mask & 1) && (s.dyn_ltree[n * 2]/*.Freq*/ !== 0)) {
      return Z_BINARY;
    }
  }

  /* Check for textual ("white-listed") bytes. */
  if (s.dyn_ltree[9 * 2]/*.Freq*/ !== 0 || s.dyn_ltree[10 * 2]/*.Freq*/ !== 0 ||
      s.dyn_ltree[13 * 2]/*.Freq*/ !== 0) {
    return Z_TEXT;
  }
  for (n = 32; n < LITERALS; n++) {
    if (s.dyn_ltree[n * 2]/*.Freq*/ !== 0) {
      return Z_TEXT;
    }
  }

  /* There are no "black-listed" or "white-listed" bytes:
   * this stream either is empty or has tolerated ("gray-listed") bytes only.
   */
  return Z_BINARY;
}


var static_init_done = false;

/* ===========================================================================
 * Initialize the tree data structures for a new zlib stream.
 */
function _tr_init(s)
{

  if (!static_init_done) {
    tr_static_init();
    static_init_done = true;
  }

  s.l_desc  = new TreeDesc(s.dyn_ltree, static_l_desc);
  s.d_desc  = new TreeDesc(s.dyn_dtree, static_d_desc);
  s.bl_desc = new TreeDesc(s.bl_tree, static_bl_desc);

  s.bi_buf = 0;
  s.bi_valid = 0;

  /* Initialize the first block of the first file: */
  init_block(s);
}


/* ===========================================================================
 * Send a stored block
 */
function _tr_stored_block(s, buf, stored_len, last)
//DeflateState *s;
//charf *buf;       /* input block */
//ulg stored_len;   /* length of input block */
//int last;         /* one if this is the last block for a file */
{
  send_bits(s, (STORED_BLOCK << 1) + (last ? 1 : 0), 3);    /* send block type */
  copy_block(s, buf, stored_len, true); /* with header */
}


/* ===========================================================================
 * Send one empty static block to give enough lookahead for inflate.
 * This takes 10 bits, of which 7 may remain in the bit buffer.
 */
function _tr_align(s) {
  send_bits(s, STATIC_TREES << 1, 3);
  send_code(s, END_BLOCK, static_ltree);
  bi_flush(s);
}


/* ===========================================================================
 * Determine the best encoding for the current block: dynamic trees, static
 * trees or store, and output the encoded block to the zip file.
 */
function _tr_flush_block(s, buf, stored_len, last)
//DeflateState *s;
//charf *buf;       /* input block, or NULL if too old */
//ulg stored_len;   /* length of input block */
//int last;         /* one if this is the last block for a file */
{
  var opt_lenb, static_lenb;  /* opt_len and static_len in bytes */
  var max_blindex = 0;        /* index of last bit length code of non zero freq */

  /* Build the Huffman trees unless a stored block is forced */
  if (s.level > 0) {

    /* Check if the file is binary or text */
    if (s.strm.data_type === Z_UNKNOWN) {
      s.strm.data_type = detect_data_type(s);
    }

    /* Construct the literal and distance trees */
    build_tree(s, s.l_desc);
    // Tracev((stderr, "\nlit data: dyn %ld, stat %ld", s->opt_len,
    //        s->static_len));

    build_tree(s, s.d_desc);
    // Tracev((stderr, "\ndist data: dyn %ld, stat %ld", s->opt_len,
    //        s->static_len));
    /* At this point, opt_len and static_len are the total bit lengths of
     * the compressed block data, excluding the tree representations.
     */

    /* Build the bit length tree for the above two trees, and get the index
     * in bl_order of the last bit length code to send.
     */
    max_blindex = build_bl_tree(s);

    /* Determine the best encoding. Compute the block lengths in bytes. */
    opt_lenb = (s.opt_len + 3 + 7) >>> 3;
    static_lenb = (s.static_len + 3 + 7) >>> 3;

    // Tracev((stderr, "\nopt %lu(%lu) stat %lu(%lu) stored %lu lit %u ",
    //        opt_lenb, s->opt_len, static_lenb, s->static_len, stored_len,
    //        s->last_lit));

    if (static_lenb <= opt_lenb) { opt_lenb = static_lenb; }

  } else {
    // Assert(buf != (char*)0, "lost buf");
    opt_lenb = static_lenb = stored_len + 5; /* force a stored block */
  }

  if ((stored_len + 4 <= opt_lenb) && (buf !== -1)) {
    /* 4: two words for the lengths */

    /* The test buf != NULL is only necessary if LIT_BUFSIZE > WSIZE.
     * Otherwise we can't have processed more than WSIZE input bytes since
     * the last block flush, because compression would have been
     * successful. If LIT_BUFSIZE <= WSIZE, it is never too late to
     * transform a block into a stored block.
     */
    _tr_stored_block(s, buf, stored_len, last);

  } else if (s.strategy === Z_FIXED || static_lenb === opt_lenb) {

    send_bits(s, (STATIC_TREES << 1) + (last ? 1 : 0), 3);
    compress_block(s, static_ltree, static_dtree);

  } else {
    send_bits(s, (DYN_TREES << 1) + (last ? 1 : 0), 3);
    send_all_trees(s, s.l_desc.max_code + 1, s.d_desc.max_code + 1, max_blindex + 1);
    compress_block(s, s.dyn_ltree, s.dyn_dtree);
  }
  // Assert (s->compressed_len == s->bits_sent, "bad compressed size");
  /* The above check is made mod 2^32, for files larger than 512 MB
   * and uLong implemented on 32 bits.
   */
  init_block(s);

  if (last) {
    bi_windup(s);
  }
  // Tracev((stderr,"\ncomprlen %lu(%lu) ", s->compressed_len>>3,
  //       s->compressed_len-7*last));
}

/* ===========================================================================
 * Save the match info and tally the frequency counts. Return true if
 * the current block must be flushed.
 */
function _tr_tally(s, dist, lc)
//    deflate_state *s;
//    unsigned dist;  /* distance of matched string */
//    unsigned lc;    /* match length-MIN_MATCH or unmatched char (if dist==0) */
{
  //var out_length, in_length, dcode;

  s.pending_buf[s.d_buf + s.last_lit * 2]     = (dist >>> 8) & 0xff;
  s.pending_buf[s.d_buf + s.last_lit * 2 + 1] = dist & 0xff;

  s.pending_buf[s.l_buf + s.last_lit] = lc & 0xff;
  s.last_lit++;

  if (dist === 0) {
    /* lc is the unmatched char */
    s.dyn_ltree[lc * 2]/*.Freq*/++;
  } else {
    s.matches++;
    /* Here, lc is the match length - MIN_MATCH */
    dist--;             /* dist = match distance - 1 */
    //Assert((ush)dist < (ush)MAX_DIST(s) &&
    //       (ush)lc <= (ush)(MAX_MATCH-MIN_MATCH) &&
    //       (ush)d_code(dist) < (ush)D_CODES,  "_tr_tally: bad match");

    s.dyn_ltree[(_length_code[lc] + LITERALS + 1) * 2]/*.Freq*/++;
    s.dyn_dtree[d_code(dist) * 2]/*.Freq*/++;
  }

// (!) This block is disabled in zlib defaults,
// don't enable it for binary compatibility

//#ifdef TRUNCATE_BLOCK
//  /* Try to guess if it is profitable to stop the current block here */
//  if ((s.last_lit & 0x1fff) === 0 && s.level > 2) {
//    /* Compute an upper bound for the compressed length */
//    out_length = s.last_lit*8;
//    in_length = s.strstart - s.block_start;
//
//    for (dcode = 0; dcode < D_CODES; dcode++) {
//      out_length += s.dyn_dtree[dcode*2]/*.Freq*/ * (5 + extra_dbits[dcode]);
//    }
//    out_length >>>= 3;
//    //Tracev((stderr,"\nlast_lit %u, in %ld, out ~%ld(%ld%%) ",
//    //       s->last_lit, in_length, out_length,
//    //       100L - out_length*100L/in_length));
//    if (s.matches < (s.last_lit>>1)/*int /2*/ && out_length < (in_length>>1)/*int /2*/) {
//      return true;
//    }
//  }
//#endif

  return (s.last_lit === s.lit_bufsize - 1);
  /* We avoid equality with lit_bufsize because of wraparound at 64K
   * on 16 bit machines and because stored blocks are restricted to
   * 64K-1 bytes.
   */
}

exports._tr_init  = _tr_init;
exports._tr_stored_block = _tr_stored_block;
exports._tr_flush_block  = _tr_flush_block;
exports._tr_tally = _tr_tally;
exports._tr_align = _tr_align;

},{"../utils/common":16}],28:[function(require,module,exports){
'use strict';

// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.

function ZStream() {
  /* next input byte */
  this.input = null; // JS specific, because we have no pointers
  this.next_in = 0;
  /* number of bytes available at input */
  this.avail_in = 0;
  /* total number of input bytes read so far */
  this.total_in = 0;
  /* next output byte should be put there */
  this.output = null; // JS specific, because we have no pointers
  this.next_out = 0;
  /* remaining free space at output */
  this.avail_out = 0;
  /* total number of bytes output so far */
  this.total_out = 0;
  /* last error message, NULL if no error */
  this.msg = ''/*Z_NULL*/;
  /* not visible by applications */
  this.state = null;
  /* best guess about the data type: binary or text */
  this.data_type = 2/*Z_UNKNOWN*/;
  /* adler32 value of the uncompressed data */
  this.adler = 0;
}

module.exports = ZStream;

},{}],29:[function(require,module,exports){
var bundleFn = arguments[3];
var sources = arguments[4];
var cache = arguments[5];

var stringify = JSON.stringify;

module.exports = function (fn, options) {
    var wkey;
    var cacheKeys = Object.keys(cache);

    for (var i = 0, l = cacheKeys.length; i < l; i++) {
        var key = cacheKeys[i];
        var exp = cache[key].exports;
        // Using babel as a transpiler to use esmodule, the export will always
        // be an object with the default export as a property of it. To ensure
        // the existing api and babel esmodule exports are both supported we
        // check for both
        if (exp === fn || exp && exp.default === fn) {
            wkey = key;
            break;
        }
    }

    if (!wkey) {
        wkey = Math.floor(Math.pow(16, 8) * Math.random()).toString(16);
        var wcache = {};
        for (var i = 0, l = cacheKeys.length; i < l; i++) {
            var key = cacheKeys[i];
            wcache[key] = key;
        }
        sources[wkey] = [
            'function(require,module,exports){' + fn + '(self); }',
            wcache
        ];
    }
    var skey = Math.floor(Math.pow(16, 8) * Math.random()).toString(16);

    var scache = {}; scache[wkey] = wkey;
    sources[skey] = [
        'function(require,module,exports){' +
            // try to call default if defined to also support babel esmodule exports
            'var f = require(' + stringify(wkey) + ');' +
            '(f.default ? f.default : f)(self);' +
        '}',
        scache
    ];

    var workerSources = {};
    resolveSources(skey);

    function resolveSources(key) {
        workerSources[key] = true;

        for (var depPath in sources[key][1]) {
            var depKey = sources[key][1][depPath];
            if (!workerSources[depKey]) {
                resolveSources(depKey);
            }
        }
    }

    var src = '(' + bundleFn + ')({'
        + Object.keys(workerSources).map(function (key) {
            return stringify(key) + ':['
                + sources[key][0]
                + ',' + stringify(sources[key][1]) + ']'
            ;
        }).join(',')
        + '},{},[' + stringify(skey) + '])'
    ;

    var URL = window.URL || window.webkitURL || window.mozURL || window.msURL;

    var blob = new Blob([src], { type: 'text/javascript' });
    if (options && options.bare) { return blob; }
    var workerUrl = URL.createObjectURL(blob);
    var worker = new Worker(workerUrl);
    worker.objectURL = workerUrl;
    return worker;
};

},{}],30:[function(require,module,exports){
(function (global){(function (){
var lastEvent=(new Date).getTime(),lastLines=[];module.exports=async function(){var e="["+Math.round((new Date).getTime()-lastEvent)+" ms]";if(lastEvent=(new Date).getTime(),0===arguments.length)return lastLines.reverse().join("\n");if("undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope)for(var t=0;t<arguments.length;t++)postMessage(["message",arguments[t]]),"object"!=typeof arguments[t]&&lastLines.unshift(e+" "+arguments[t]);else if("undefined"==typeof window){if(void 0===global.DEBUG||!0===global.DEBUG)for(t=0;t<arguments.length;t++)console.log(e,arguments[t]),"object"!=typeof arguments[t]&&lastLines.unshift(e+" "+arguments[t])}else if(void 0!==window.DEBUG&&!0===window.DEBUG)for(t=0;t<arguments.length;t++)console.log(e,arguments[t]),"object"!=typeof arguments[t]&&lastLines.unshift(e+" "+arguments[t]);lastLines.length>200&&(lastLines.length=200)};

}).call(this)}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}],31:[function(require,module,exports){
const debug=require("../../debugConsole");var functionWebWorkifyPromise=function(e,a,t,r){var o=require("webworkify")(e);debug("Setting up webworker"),o.addEventListener("message",function(e){"update"===e.data[0]?(e.data.shift(),r&&r(e.data)):"done"===e.data[0]?(e.data.shift(),a(e.data)):"error"===e.data[0]?t("There was an error:"+e.data[1]):"aborted"===e.data[0]?t("Successfully aborted"):"message"===e.data[0]&&debug("Message from webworker "+e.data[1])}),o.postMessage(["start",arguments[4],arguments[5],arguments[6],arguments[7],arguments[8]])};module.exports=functionWebWorkifyPromise;

},{"../../debugConsole":30,"webworkify":29}],32:[function(require,module,exports){
function drawChart(e,t){const i=require("../../debugConsole");if(console.log(e),void 0===e)return;var a={width:60,spacer:30,margin:30,maxHeight:180,frameHeight:220,maxWidth:440,yOffset:40,y:"#FFFF00",m:"#FF00FF",c:"#00FFFF",k:"#000000",unknownColor:"#999999",textColor:"#000",color:function(e,t){var i=e.createLinearGradient(t,0,t+this.width,0);return i.addColorStop(0,"rgba(0, 255, 255, 1.000)"),i.addColorStop(.5,"rgba(255, 0, 255, 1.000)"),i.addColorStop(1,"rgba(255, 255, 0, 1.000)"),i}};const r=["c","m","y","k"];var f=document.getElementById(t),l=f.getContext("2d");if(l.clearRect(0,0,f.width,f.height),l.fillStyle="#f9f9f9",l.fillRect(0,0,f.width,f.height),a.width=(a.maxWidth-a.spacer*(e.names.length+1))/e.names.length,0===e.names.length)l.clearRect(0,0,405,140),l.fillStyle="#000000",l.font="16px sans-serif",l.fillText("No levels data from printer",120,a.frameHeight/2-20);else for(var o=0;o<e.names.length;o++){var s=a.margin+a.spacer+o*(a.width+a.spacer);e.names[o].toLowerCase().indexOf("color")>-1?l.fillStyle=a.color(l,s):e.colours[o]?l.fillStyle=e.colours[o]:l.fillStyle=a.unknownColor;var n=0;e.levels[r[o]]>0&&e.highs[r[o]]>0&&(n=100*e.levels[r[o]]/e.highs[r[o]]);var h=n<101?n:100;if(l.fillRect(s,a.frameHeight-a.yOffset,a.width,-a.maxHeight*h/100),i("Rendering "+e.names[o]+" "+n+" x "+s),l.font="16px sans-serif",l.fillStyle=e.nameColours[o],l.fillText(e.names[o],s+a.width/2-4,a.frameHeight-a.yOffset-15),l.font="12px sans-serif",l.fillStyle="#554455",e.highs[r[o]]>0){var m=100-n,g=m<0?"% increase":"% saving";m<0&&(m*=-1),l.fillText(""+Math.floor(m)+g,s+4,a.frameHeight-a.yOffset+20)}else l.fillText("Zero used",s+12,a.frameHeight-a.yOffset+20)}l.lineWidth=.5,l.strokeStyle="#cdcdcd",l.setLineDash([6,6]),l.beginPath(),l.moveTo(a.margin+a.spacer,a.frameHeight-a.maxHeight/2-a.yOffset),l.lineTo(a.maxWidth,a.frameHeight-a.maxHeight/2-a.yOffset),l.moveTo(a.margin+a.spacer,a.frameHeight-a.maxHeight/4*3-a.yOffset),l.lineTo(a.maxWidth,a.frameHeight-a.maxHeight/4*3-a.yOffset),l.moveTo(a.margin+a.spacer,a.frameHeight-a.maxHeight/4-a.yOffset),l.lineTo(a.maxWidth,a.frameHeight-a.maxHeight/4-a.yOffset),l.stroke(),l.beginPath(),l.setLineDash([]),l.strokeStyle="#cdcdcd",l.moveTo(a.margin+a.spacer,a.frameHeight-a.yOffset),l.lineTo(a.maxWidth,a.frameHeight-a.yOffset),l.stroke(),l.fillStyle=a.unknownColor,l.font="10px sans-serif",l.fillText("25%",a.margin+2,a.frameHeight-a.maxHeight/4-a.yOffset+2),l.fillText("50%",a.margin+2,a.frameHeight-a.maxHeight/2-a.yOffset+2),l.fillText("75%",a.margin+2,a.frameHeight-a.maxHeight/4*3-a.yOffset+2),l.fillText("0%",a.margin+2,a.frameHeight-a.yOffset+2),l.stroke()}module.exports=drawChart;

},{"../../debugConsole":30}],33:[function(require,module,exports){
"use strict";var Sha256={hash:function(t){t=unescape(encodeURIComponent(t));for(var r=[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298],a=[1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225],e=(t+=String.fromCharCode(128)).length/4+2,o=Math.ceil(e/16),n=new Array(o),h=0;h<o;h++){n[h]=new Array(16);for(var S=0;S<16;S++)n[h][S]=t.charCodeAt(64*h+4*S)<<24|t.charCodeAt(64*h+4*S+1)<<16|t.charCodeAt(64*h+4*S+2)<<8|t.charCodeAt(64*h+4*S+3)}n[o-1][14]=8*(t.length-1)/Math.pow(2,32),n[o-1][14]=Math.floor(n[o-1][14]),n[o-1][15]=8*(t.length-1)&4294967295;var u,f,c,R,i,d,x,O,T=new Array(64);for(h=0;h<o;h++){for(var C=0;C<16;C++)T[C]=n[h][C];for(C=16;C<64;C++)T[C]=Sha256.octa1(T[C-2])+T[C-7]+Sha256.octa0(T[C-15])+T[C-16]&4294967295;u=a[0],f=a[1],c=a[2],R=a[3],i=a[4],d=a[5],x=a[6],O=a[7];for(C=0;C<64;C++){var H=O+Sha256.eta1(i)+Sha256.Ch(i,d,x)+r[C]+T[C],l=Sha256.eta0(u)+Sha256.Maj(u,f,c);O=x,x=d,d=i,i=R+H&4294967295,R=c,c=f,f=u,u=H+l&4294967295}a[0]=a[0]+u&4294967295,a[1]=a[1]+f&4294967295,a[2]=a[2]+c&4294967295,a[3]=a[3]+R&4294967295,a[4]=a[4]+i&4294967295,a[5]=a[5]+d&4294967295,a[6]=a[6]+x&4294967295,a[7]=a[7]+O&4294967295}return Sha256.toHexStr(a[0])+Sha256.toHexStr(a[1])+Sha256.toHexStr(a[2])+Sha256.toHexStr(a[3])+Sha256.toHexStr(a[4])+Sha256.toHexStr(a[5])+Sha256.toHexStr(a[6])+Sha256.toHexStr(a[7])},ROTR:function(t,r){return r>>>t|r<<32-t},eta0:function(t){return Sha256.ROTR(2,t)^Sha256.ROTR(13,t)^Sha256.ROTR(22,t)},eta1:function(t){return Sha256.ROTR(6,t)^Sha256.ROTR(11,t)^Sha256.ROTR(25,t)},octa0:function(t){return Sha256.ROTR(7,t)^Sha256.ROTR(18,t)^t>>>3},octa1:function(t){return Sha256.ROTR(17,t)^Sha256.ROTR(19,t)^t>>>10},Ch:function(t,r,a){return t&r^~t&a},Maj:function(t,r,a){return t&r^t&a^r&a},toHexStr:function(t){for(var r="",a=7;a>=0;a--)r+=(t>>>4*a&15).toString(16);return r}};"undefined"!=typeof module&&module.exports&&(module.exports=Sha256),"function"==typeof define&&define.amd&&define([],function(){return Sha256});

},{}],34:[function(require,module,exports){
function encode(r,o,f,n,e,a){const i=0,t=128,c=0;var u=0;const s=3;function v(r){a[u++]=r}function l(o,f){return f<0?e[o+0]===r[o+0]&&e[o+1]===r[o+1]&&e[o+2]===r[o+2]:r[o]===r[f]&&r[o+1]===r[f+1]&&r[o+2]===r[f+2]}function h(o){n[0]=r[o],n[1]=r[o+1],n[2]=r[o+2]}function m(r){return r-o*s}for(var d=0;d<f;d++){for(var M=d*o*s,b=M+o*s-s,y=0;M<=b;){for(var g=0,k=0,p=0;M<=b&&l(M,m(M));)g++,M+=s;var x=M,C=x,j=x;if(x<=b){for(;C<b&&!l(C,m(C));)k++,C+=s;if(0===k)for(;j<b&&l(j,m(j));)p++,j+=s}if(x>b)if(y+=g,g>=3){for(v(q=t|c|24),g-=3;g>=255;)v(255),g-=255;v(g)}else{v(q=t|c|g<<3)}else{var q,w=0;p>0?(y+=g+p,w=p-2,q=t,M+=p*s):(y+=g+(w=Math.min(k,6))+1,q=i,M+=s);var z=c;m(x+s);if(v(q|z|Math.min(g,3)<<3|Math.min(w,7)),g>=3){for(g-=3;g>=255;)v(255),g-=255;v(g)}if(z===c&&(v(r[x]),v(r[x+1]),v(r[x+2]),h(x)),w&&q===i)for(var A=0;A<w;A++)v(r[M]),v(r[M+1]),v(r[M+2]),h(M),M+=s;if(q===t&&w>=7){for(w-=7;w>=255;)v(255),w-=255;v(w)}}}y!==o&&console.log("Check err "+y)}return e=r.subarray((f-1)*o*3,f*o*3),a.subarray(0,u)}module.exports=encode;

},{}],35:[function(require,module,exports){
const pttJPEG=require("../../../../../3rdParty/petitoJPEG/pttjpeg.js"),pttJPEGMono=require("../../../../../3rdParty/petitoJPEG/pttjpeg-mono.js"),debug=require("../../../debugConsole");function encode_petitio(t,e){var i=new pttJPEG.pttJPEG,o=new i.ByteWriter;return i.encode(e,new i.pttImage(t.toRGBA()),o),{data:o.getString(),width:t.width,height:t.height,dpi:t.dpi}}function encode_petitio_mono(t,e){var i=new pttJPEGMono.pttJPEG,o=new i.ByteWriter;return i.encode(e,new i.pttImage(t.toRGBA()),o),{data:o.getString(),width:t.width,height:t.height,dpi:t.dpi}}function encode_jpegjs(t,e){var i=jpeg_js.encode(this.getPageDataRGBA(),e||90);return i.dpi=this.dpi(),i}module.exports={encode:encode_petitio_mono};

},{"../../../../../3rdParty/petitoJPEG/pttjpeg-mono.js":1,"../../../../../3rdParty/petitoJPEG/pttjpeg.js":2,"../../../debugConsole":30}],36:[function(require,module,exports){
const pttJPEG=require("../../../../../3rdParty/petitoJPEG/pttjpeg.js"),debug=require("../../../debugConsole");function encode_petitio(e,t){var i=new pttJPEG.pttJPEG,n=new i.ByteWriter;return i.encode(t,new i.pttImage(e.toRGBA()),n),{data:n.getString(),width:e.width,height:e.height,dpi:e.dpi}}function encode_jpegjs(e,t){var i=jpeg_js.encode(this.getPageDataRGBA(),t||90);return i.dpi=this.dpi(),i}module.exports={encode:encode_petitio};

},{"../../../../../3rdParty/petitoJPEG/pttjpeg.js":2,"../../../debugConsole":30}],37:[function(require,module,exports){
function encode(n){const r=n.Bpp,o=1,t=2,e=127;var u=0,f=0,i=0,c="",a=n.width,d=n.height,v=n.data;require("../../../debugConsole");function l(n){c+=String.fromCharCode(n)}function h(n){let o=4===r?3:r;for(var t=0;t<o;t++)l(v[n+t])}function g(){return i=u*a*r+f*r,f++,i}function p(n){if(n>0){var o=i-(n+1)*r;1===n?(l(0),h(o)):(l(257-n),function(n,o){for(var t=0;t<o;t++)h(n+t*r)}(o,n))}}function s(n,r){n>0&&(l(n-1),h(r))}function C(n,o){if(null===n||null===o)return!1;for(var t=0;t<r;t++)if(v[n+t]!==v[o+t])return!1;return!0}return function(){for(var n=0,r=0,i=0,c=0;c<d;c++){l(0),f=0;var v=o;r=g(),i=g();for(var h=0;f<=a;)C(r,i)?v===o?(p(h),h=1,v=t):(h===e&&(s(h,r),h=0),h++,v=t):v===o?(h===e&&(p(h),h=0),h++):(s(++h,r),v=o,h=0),n=r,r=i,i=g();v===o?p(++h):s(++h,n),u++}}(),c}module.exports={encode};

},{"../../../debugConsole":30}],38:[function(require,module,exports){
module.exports=function(r){for(var o,e="",n=r.length,t=0;t<n;){for(o=1;t<n-1&&o<256&&r[t]===r[t+1];)o++,t++;e+=String.fromCharCode(o-1),e+=String.fromCharCode(r[t]),t++}return e};

},{}],39:[function(require,module,exports){
module.exports=function(r,o){for(var f,e,n=r.length-1,t=0,u=0,i=0;t<n;){for(f=1,e=0;t<n&&f<127&&r[t]===r[t+1];)f++,t++;if(1===f){for(u=i,i++;t<n&&e<127&&r[t]!==r[t+1];)o[i++]=r[t],e++,t++;t--}f>1?(o[i++]=-1*(f-1),o[i++]=r[t]):o[u]=e-1,t++}return i};

},{}],40:[function(require,module,exports){
const debug=require("../debugConsole");class Decoder{constructor(e){debug("Decoder super constructor"),this._documentData=e,this._currentPage=0,this._pageCount=0,this._pageFingerprints=[],this._colorSpace=-1,this._collate=-1,this._width=0,this._height=0,this._bpp=0,this._dpi=0,this._duplex=0,this._startingDuplex="NO_DUPLEX",this._isMono=!1,this._ticketCopies=0}getFingerprint(e){return e?this._pageFingerprints[e-1]:this._pageFingerprints[this._currentPage]}currentPage(){return this._currentPage}get pageCount(){return this._pageCount}fingerPrints(){return this._pageFingerprints}get colorSpace(){return this._colorSpace}get height(){return this._height}get width(){return this._width}get dpi(){return this._dpi}get bpp(){return this._bpp}get isMono(){return!0===this._isMono}get isColor(){return!1===this._isMono}get startingDuplex(){return this._startingDuplex}get ticketCopies(){return this._ticketCopies}get collate(){return this._collate}finish(){this._documentData=null}getPageDataRGBA(){throw debug("decoder base getPageDataRGBA() called"),new Error("Implement getPageDataRGBA in child class")}getPageDataRGBAScaled(e,t){throw debug("decoder base getPageDataRGBAScaled(scaleFactor, noSmooth) called with params"),debug(e),debug(t),new Error("Implement getPageDataRGBAScaled in child class")}getPageDataMIFF(){throw debug("decoder base getPageDataMIFF() called"),new Error("Implement getPageDataMIFF in child class")}isValid(){throw debug("decoder base isValid() called"),new Error("Implement isValid in child class")}gotoPage(e){throw debug("decoder base gotoPage(pageNum) called"),debug(e),new Error("Implement gotoPage in child class")}type(){throw debug("decoder base type() called"),new Error("Implement type in child class")}}module.exports=Decoder;

},{"../debugConsole":30}],41:[function(require,module,exports){
const debug=require("../debugConsole");class Encoder{constructor(i,t,e,o,s,p,r){debug("[Encoder] constructor entry"),this._pages=i,this._duplex=t,this._dpioConfig=e,this._printTicket=o,this._ippInfo=s,this._mode=p,this._type=r,this._collate=this._printTicket&&this._printTicket.print&&void 0!==this._printTicket.print.collate&&!0===this._printTicket.print.collate.collate||!1,this._copies=this._printTicket&&this._printTicket.print&&this._printTicket.print.copies&&this._printTicket.print.copies.copies&&parseInt(this._printTicket.print.copies.copies)||1,this._dpioConfig&&("disable"===this._dpioConfig.directprint_pdl_config_options_pdlcopies&&(this._copies=1,debug("[Encoder] dpioconfig disabled pdl copies")),"disable"===this._dpioConfig.directprint_pdl_config_options_pdlcopiescollate&&!0===this._collate&&(this._copies=1,debug("[Encoder] dpioconfig disabled pdl copies as collate = true"))),this._mono=!1,o&&o.dpio&&o.dpio.mono&&!0===o.dpio.mono&&(this._mono=!0),this._output="",this._pageCount=0,debug("[Encoder] constucted:",this)}_push(i,t){if(t){var e=String.fromCharCode.apply(null,i.subarray(0,t));this._output+=e}else"string"==typeof i?this._output+=i:"number"==typeof i?this._output+=String.fromCharCode(i):"object"==typeof i&&(this._output+=String.fromCharCode(i))}_cmd(i,...t){if(this._push(i[0]),i.length>1)for(var e=0,o=1;o<i.length;o++)"#"===i[o]?this._push(t[e++]):this._push(i[o])}get mode(){return this._mode}get type(){return this._type}addImagePage(i){throw debug("base encoder addImagePage called with param"),debug(i),new Error("Implement add image page in child class")}finalise(){throw debug("base encoder finalise called"),new Error("Implement finalize in child class")}getTicketMediaOrientation(){let i=this._printTicket.print.media_size.height_microns>this._printTicket.print.media_size.width_microns?"portrait":"landscape";return i=this._printTicket.print.media_size.height_microns===this._printTicket.print.media_size.width_microns?"square":i}}module.exports=Encoder;

},{"../debugConsole":30}],42:[function(require,module,exports){
var filterProfiles={normal:{filters:[[]],saving:[0,0,0]},mono:{filters:[["grayscale"]],saving:[100,100,0]},imperceptable:{filters:[["brightness",10]],saving:[4,4,0]},draft:{filters:[["grayscale"],["brightness",20]],saving:[100,20,0]},superdraft:{filters:[["grayscale"],["brightness",30]],saving:[100,30,0]},"filter-blanks":{preApply:["normal"],filters:[["pixelThreshold",0]],saving:[0,0,5]},"filter-near-blanks":{preApply:["normal"],filters:[["pixelThreshold",.6]],saving:[0,0,10]},"remove-images":{filters:[["brightness",4],["patchBlank"]],saving:[30,30,0]},"bright-images":{filters:[["brightness",1],["patchBright",null,5]],saving:[30,30,0]},"draft-remove-images":{preApply:["draft"],filters:[["patchBlank"]],saving:[100,40,0]},ultradraft:{filters:[["grayscale"],["whiteout"],["brightness",30]],saving:[100,50,0]},whiteout:{filters:[["whiteout"]],saving:[30,30,0]}};module.exports=filterProfiles;

},{}],43:[function(require,module,exports){
function wupsImage(t,i){const h=require("../../debugConsole");var s=require("./filterProfiles"),a=require("../coders/jpeg/jpeg"),r=require("./resize2");const e=[255,255,255],n=[225,0,225];var p={};p.imgType=1,p.print=!0,p.width=t.width,p.height=t.height,p.pixelCount=t.width*t.height,p.bpp=t.bpp,p.dpi=t.dpi,p.fingerprint=t.fingerprint,p.orientation=t.height>t.width?"portrait":"landscape",p.orientation=t.height===t.width?"square":p.orientation,p.whitePixel=255,i?(h("Creating image copy"),p.data=t.data.slice()):p.data=t.data,t.bpp?24===t.bpp?p.imgType=2:32===t.bpp?p.imgType=1:(h("unknown image depth"),p.imgType=0):(t.bpp=32,h("Assuming 32 bpp")),p.Bpp=t.bpp/8,p.length=function(){return this.height*this.width*this.Bpp},p.byteLength=p.length,p.isRGBA=function(){return 1===this.imgType},p.isRGB=function(){return 2===this.imgType},p.isRGBx=function(){return this.isRGB()||this.isRGBA()},p.inkUsage=function(){return this.CYMKTotals()},p.isGreyscale=function(){if(8===this.imgType)return!0;if(this.isRGBx()){let i=this.length();for(var t=0;t<i;t+=this.Bpp)if(this.data[t+0]!==this.data[t+1]||this.data[t+1]!==this.data[t+2]||this.data[t+0]!==this.data[t+2])return h("Image is not grayscale (color)"),!1;return h("Image is grayscale"),!0}},p.isGrayscale=p.isGreyscale,p.isBlank=function(){if(this.isRGBx()){for(var t=0;t<this.length();t+=this.Bpp)if(255!==this.data[t]||255!==this.data[t+1]||255!==this.data[t+2])return!1;return!0}console.log("Missing code to detect CMY blank pages")},p.isPortrait=function(){return this.height>this.width},p.isLandscape=function(){return this.width>this.height},p.isSquare=function(){return this.width===this.height},p.dimensions=function(){let t=this.width/this.dpi,i=this.height/this.dpi;return{width:this.width,height:this.height,widthIn:t,heightIn:i,widthPts:72*t,heightPts:72*i,widthMM:25.4*t,heightMM:25.4*i,widthMicrons:25400*t,heightMicrons:25400*i}},p.blank=function(){for(var t=this.length(),i=0;i<t;i++)this.data[i]=255;this.twoUpCounter=0,!0},p.blankToY=function(){let t=0,i=this.width*this.height*this.Bpp-this.Bpp;for(;t<i&&255===this.data[t]&&255===this.data[t+1]&&255===this.data[t+2];)t+=this.Bpp;return Math.floor(t/(this.Bpp*this.width))},p.blankFromY=function(){let t=this.width*this.height*this.Bpp-this.Bpp;for(;t>0&&255===this.data[t]&&255===this.data[t+1]&&255===this.data[t+2];)t-=this.Bpp;return Math.floor(t/(this.Bpp*this.width))},p.rotate=function(t){return 90===t?this.rotateC90():270===t?this.rotateCC90():180===t?this.flip():(h("Requested rotate angle not supported"),this)},p.rotateC90=function(){h("rotating C90");for(var t=new ArrayBuffer(this.length()),i=0;i<this.height;i++)for(var s=0;s<this.width;s++)for(var a=this.height-i,r=s,e=this.height*r*this.Bpp+a*this.Bpp,n=0;n<this.Bpp;n++)t[e+n]=this.data[i*this.width*this.Bpp+s*this.Bpp+n];var p=this.width;return this.width=this.height,this.height=p,this.data=t,this.orientation=this.height>this.width?"portrait":"landscape",this.orientation=this.height===this.width?"square":this.orientation,!0,this},p.rotateCC90=function(){h("rotating CC90");for(var t=new ArrayBuffer(this.length()),i=0;i<this.height;i++)for(var s=0;s<this.width;s++)for(var a=i,r=this.width-s,e=this.height*r*this.Bpp+a*this.Bpp,n=0;n<this.Bpp;n++)t[e+n]=this.data[i*this.width*this.Bpp+s*this.Bpp+n];var p=this.width;return this.width=this.height,this.height=p,this.data=t,this.orientation=this.height>this.width?"portrait":"landscape",this.orientation=this.height===this.width?"square":this.orientation,!0,this},p.rotate180=function(){h("Rotating image 180");for(var t,i,s=new ArrayBuffer(this.Bpp),a=this.length()/2,r=this.length(),e=0;e<a;e+=this.Bpp)t=e,i=r-e,s[0]=this.data[t+0],s[1]=this.data[t+1],s[2]=this.data[t+2],this.data[t+0]=this.data[i+0],this.data[t+1]=this.data[i+1],this.data[t+2]=this.data[i+2],this.data[i+0]=s[0],this.data[i+1]=s[1],this.data[i+2]=s[2];return!0,h("Done rotating image 180"),this},p.flip=p.rotate180,p.twoUpCounter=0,p.pushTwoUpPage=function(t,i){0===this.twoUpCounter?this.twoUp(t,null,i,null):1===this.twoUpCounter?this.twoUp(null,t,null,i):h("You have tried to push too many pages to a 2-up "+this.twoUpCounter),this.twoUpCounter++},p.twoUpFull=function(){return 2===this.twoUpCounter},p.twoUp=function(t,i,h,s){var a,r,e;if(i&&!s)for(var n=0;n<i.width;n++)for(var p=0;p<i.height;p++){a=p,r=i.width-n,e=a*this.Bpp+r*this.width*this.Bpp;for(var d=0;d<this.Bpp;d++)this.data[e+d]=i.data[p*i.width*i.Bpp+n*i.Bpp+d]}if(t&&!h)for(n=0;n<t.width;n++)for(p=0;p<t.height;p++){a=p,r=Math.floor(this.height/2)+(t.width-n),e=a*this.Bpp+r*this.width*this.Bpp;for(d=0;d<this.Bpp;d++)this.data[e+d]=t.data[p*t.width*t.Bpp+n*t.Bpp+d]}if(i&&s)for(n=0;n<i.width;n++)for(p=0;p<i.height;p++){r=n,e=(a=i.height-p)*this.Bpp+r*this.width*this.Bpp;for(d=0;d<this.Bpp;d++)this.data[e+d]=i.data[p*i.width*i.Bpp+n*i.Bpp+d]}if(t&&h)for(n=0;n<t.width;n++)for(p=0;p<t.height;p++){a=t.height-p,r=Math.floor(this.height/2)+n,e=a*this.Bpp+r*this.width*this.Bpp;for(d=0;d<this.Bpp;d++)this.data[e+d]=t.data[p*t.width*t.Bpp+n*t.Bpp+d]}return!0,this},p.fourUp=function(){},p.CYMKTotals=function(){for(var t,i,h,s,a=0,r=0,e=0,n=0,p=0,d=0,o=0,f=0,g=this.length(),u=0;u<g;u+=this.Bpp)t=this.data[u],i=this.data[u+1],h=this.data[u+2],255===t&&255===i&&255===h&&a++,o=1-i/255,f=1-h/255,r+=255*((d=1-t/255)-(s=Math.min(d,Math.min(o,f))))/(1-s)>>0,e+=255*(o-s)/(1-s)>>0,n+=255*(f-s)/(1-s)>>0,p+=255*s>>0;return function(t,i,h,s,a,r){return{c:t,m:i,y:h,k:s,blank:a,total:r,coverage:(r-a)/r*100}}(r,e,n,p,a,this.pixelCount)},p.pixelThreshold=function(t){this.coverage<t&&(this.print=!1)},p.coverage=function(){if(this.isRGBx()){for(var t=0,i=this.length(),h=0;h<i;h+=this.Bpp)255===this.data[h]&&255===this.data[h+1]&&255===this.data[h+2]||t++;return t/this.pixelCount*100}console.log("Missing code to detect CMY blank pages")},p.toRGBInplace=function(){if(h("To RGB, inplace"),3===this.Bpp&&2===this.imgType)return h("No conversion required"),this;for(var t=0;t<this.width*this.height;t++)this.data[3*t+0]=this.data[4*t+0],this.data[3*t+1]=this.data[4*t+1],this.data[3*t+2]=this.data[4*t+2];return this.Bpp=3,this.bpp=24,this.imgType=2,this.whitePixel=255,!0,this},p.toRGB=function(){if(h("To RGB"),3===this.Bpp&&2===this.imgType)return h("No conversion required"),this;for(var t=new ArrayBuffer(this.height*this.width*3),i=0,s=0;s<this.length();s+=this.Bpp)t[i++]=this.data[s],t[i++]=this.data[s+1],t[i++]=this.data[s+2];return this.Bpp=3,this.bpp=24,this.imgType=2,this.data=t,this.whitePixel=255,!0,this},p.toRGBA=function(){if(4===this.Bpp&&1===this.imgType)return this;for(var t=new ArrayBuffer(this.height*this.width*4),i=0;i<this.length();i+=this.Bpp)t[i]=this.data[i],t[i+1]=this.data[i+1],t[i+2]=this.data[i+2],t[i+3]=255;return this.data=t,this.Bpp=4,this.bpp=32,this.imgType=1,this.whitePixel=255,!0,this},p.toKCMY=function(){if(4===this.Bpp&&7===this.imgType)return this;h("Converting to KCMY");for(var t=0;t<this.length();t+=this.Bpp){var i=1-this.data[t+0]/255,s=1-this.data[t+1]/255,a=1-this.data[t+2]/255,r=Math.min(i,s,a);this.data[t]=255*r,this.data[t+1]=(i-r)/(1-r)*255,this.data[t+2]=(s-r)/(1-r)*255,this.data[t+3]=(a-r)/(1-r)*255}return this.Bpp=4,this.bpp=32,this.imgType=7,this.whitePixel=0,!0,this},p.grayscale=function(){h("Grayscale");for(var t,i=this.width*this.height*this.Bpp,s=0;s<i;s+=this.Bpp)t=Math.ceil(.2126*this.data[s]+.7152*this.data[s+1]+.0722*this.data[s+2]),this.data[s]=this.data[s+1]=this.data[s+2]=t;return!0,h("Grayscale done"),this},p.greyscale=p.grayscale,p.toSGRAY_8=function(){h("toSGRAY_8");for(var t=new Uint8Array(this.width*this.height),i=this.width*this.height,s=0;s<i;s++)t[s]=Math.ceil(.2126*this.data[s*this.Bpp]+.7152*this.data[s*this.Bpp+1]+.0722*this.data[s*this.Bpp+2]);return!0,h("toSGRAY_8 done"),this.data=t,this.Bpp=1,this.bpp=8,this.imgType=8,this.whitePixel=255,!0,this},p.planarDitherFloydS=function(){h("planar dither");for(var t=0;t<this.height;t++)for(var i=0;i<this.width;i++)for(var s=0;s<4;s++){let h=s+4*(t*this.width+i),a=this.data[h]<129?0:255,r=Math.floor((this.data[h]-a)/16);this.data[h]=a,this.data[h+4]+=7*r,this.data[h+4*this.width-4]+=3*r,this.data[h+4*this.width]+=5*r,this.data[h+4*this.width+4]+=1*r}},p.planarDitherBayer=function(){const t=[[15,135,45,165],[195,75,225,105],[60,180,30,150],[240,120,210,90]];h("Bayer planar dither");for(var i=0;i<this.height;i++)for(var s=0;s<this.width;s++)for(var a=0;a<4;a++){let h=4*(i*this.width+s),r=h/4%this.width,e=Math.floor(h/4/this.width),n=Math.floor((this.data[h+a]+t[r%4][e%4])/2);this.data[h+a]=n<129?0:255}},p.planarDitherAtkinson=function(){h("planar dither");for(var t=0;t<this.height;t++)for(var i=0;i<this.width;i++)for(var s=0;s<4;s++){let h=s+4*(t*this.width+i),a=this.data[h]<129?0:255,r=Math.floor((this.data[h]-a)/8);this.data[h]=a,this.data[h+4]+=r,this.data[h+8]+=r,this.data[h+4*this.width-4]+=r,this.data[h+4*this.width]+=r,this.data[h+4*this.width+4]+=r,this.data[h+8*this.width]+=r}},p.binaryFilter=function(){h("Binary filter");for(var t=0;t<this.length();t+=this.Bpp){var i=255;(this.data[t]-255||this.data[t+1]-255||this.data[t+2]-255)&&(i=0),this.data[t]=i,this.data[t+1]=i,this.data[t+2]=i}return!0,this},p.binaryFilterThreshold=function(t){h("Binary threshold filter");for(var i=0;i<this.length();i+=this.Bpp){let h=Math.ceil(.2126*this.data[i]+.7152*this.data[i+1]+.0722*this.data[i+2]);this.data[i]=this.data[i+1]=this.data[i+2]=h>t?255:0}return!0,this},p.dither=function(t,i){h("[ImgFilter] Dither "+i);const s=[[15,135,45,165],[195,75,225,105],[60,180,30,150],[240,120,210,90]];for(var a=[],r=[],e=[],n=0;n<256;n++)a[n]=.299*n,r[n]=.587*n,e[n]=.114*n;for(n=0;n<=this.length();n+=4)this.data[n]=Math.floor(a[this.data[n]]+r[this.data[n+1]]+e[this.data[n+2]]);var p={threshold:function(i){this.data[i]=this.data[i]<t?0:255},undefined:function(i){this.data[i]=this.data[i]<t?0:255},bayer:function(i){let h=i/4%this.width,a=Math.floor(i/4/this.width),r=Math.floor((this.data[i]+s[h%4][a%4])/2);this.data[i]=r<t?0:255},floyds:function(t){let i=this.data[t]<129?0:255,h=Math.floor((this.data[t]-i)/16);this.data[t]=i,this.data[t+4]+=7*h,this.data[t+4*this.width-4]+=3*h,this.data[t+4*this.width]+=5*h,this.data[t+4*this.width+4]+=1*h},atkinson:function(t){let i=this.data[t]<129?0:255,h=Math.floor((this.data[t]-i)/8);this.data[t]=i,this.data[t+4]+=h,this.data[t+8]+=h,this.data[t+4*this.width-4]+=h,this.data[t+4*this.width]+=h,this.data[t+4*this.width+4]+=h,this.data[t+8*this.width]+=h}}[i].bind(this);for(n=0;n<this.length();n+=4)p(n),this.data[n+1]=this.data[n+2]=this.data[n];return this},p.bayerDither=function(){return this.dither(128,"bayer")},p.atkinsonDither=function(){h("Atkinson ditering image to mono");for(var t=this.length(),i=0;i<=t;i+=this.Bpp){var s=255;(this.data[i]+this.data[i+1]+this.data[i+2])/3<=128&&(s=0);var a=parseInt((this.data[i]-s)/8,10);this.data[i]=this.data[i+1]=this.data[i+2]=s,this.data[i+this.Bpp]+=a,this.data[i+2*this.Bpp]+=a,this.data[i+this.Bpp*this.width-this.Bpp]+=a,this.data[i+this.Bpp*this.width]+=a,this.data[i+this.Bpp*this.width+this.Bpp]+=a,this.data[i+2*this.Bpp*this.width]+=a}return!0,this},p.brightness=function(t){h("Brightness "+t);var i=Math.round(2.55*t);h("adjustment "+i);for(var s=this.length(),a=this.Bpp,r=0;r<s;r+=a)this.data[r+0]+=i,this.data[r+1]+=i,this.data[r+2]+=i;return!0,this},p.blur=function(){for(var t=0;t<this.height;t++)for(var i=0;i<this.width;i++){var h=t*this.width*this.Bpp+i*this.Bpp;0===i?(ra=this.data[h+this.Bpp],ga=this.data[h+1+this.Bpp],ba=this.data[h+2+this.Bpp],this.data[h]=(this.data[h]+1*ra)/2,this.data[h+1]=(this.data[h+1]+1*ga)/2,this.data[h+2]=(this.data[h+2]+1*ba)/2):i===this.width-this.Bpp?(rb=this.data[h-this.Bpp],gb=this.data[h+1-this.Bpp],bb=this.data[h+2-this.Bpp],this.data[h]=(this.data[h]+1*rb)/2,this.data[h+1]=(this.data[h+1]+1*gb)/2,this.data[h+2]=(this.data[h+2]+1*bb)/2):(ra=this.data[h+this.Bpp],ga=this.data[h+1+this.Bpp],ba=this.data[h+2+this.Bpp],rb=this.data[h-this.Bpp],gb=this.data[h+1-this.Bpp],bb=this.data[h+2-this.Bpp],this.data[h]=(this.data[h]+1*rb+1*ra)/3,this.data[h+1]=(this.data[h+1]+1*gb+1*ga)/3,this.data[h+2]=(this.data[h+2]+1*bb+1*ba)/3)}!0},p.sharpen=function(t){t=t||1;var i=[0,-1,0,-1,5,-1,0,-1,0],h=Math.round(Math.sqrt(i.length)),s=.5*h|0,a=this.height,r=new Uint8Array(this.width*this.height*this.Bpp);for(r.fill(255);a--;)for(x=this.width;x--;){for(var e=a,n=x,p=(a*this.width+x)*this.Bpp,d=0,o=0,f=0,g=0;g<h;g++)for(var u=0;u<h;u++){var l=e+g-s,B=n+u-s;if(l>=0&&l<this.height&&B>=0&&B<this.width){var w=(l*this.width+B)*this.Bpp,c=i[g*h+u];d+=this.data[w]*c,o+=this.data[w+1]*c,f+=this.data[w+2]*c}}r[p]=d*t+this.data[p]*(1-t),r[p+1]=o*t+this.data[p+1]*(1-t),r[p+2]=f*t+this.data[p+2]*(1-t)}return this.data=r,this};var d=0;p.nextLine=function(){if(d===this.height)return"";for(var t="",i=0;i<this.width*this.Bpp;i++)t+=String.fromCharCode(this.data[d*(this.width*this.Bpp)+i]);return d++,t},p.nextLineArr=function(t){d===this.height&&(d=0);for(var i=0;i<this.width*this.Bpp;i++)t[i]=this.data[d*(this.width*this.Bpp)+i];return d++,t},p.getJPEGStrip=function(t,i,h){let s=(h=h||0)*this.Bpp*this.width+this.Bpp*this.width*i*t;return this.data.subarray(s,s+this.width*i*this.Bpp)},p.getStrip=function(t,i){for(var h=i*this.width*this.height*this.Bpp,s=0;s<t.data.length;s++)t.data[s]=this.data[h+s];return t},p.getStrip2=function(t){var i=this.Bpp*this.width*128*t;return this.data.subarray(i,i+128*this.width*this.Bpp)},p.getStrip3=function(t,i){for(var h=new Uint8Array(3*t*128),s=128*i*this.width*this.Bpp,a=0;a<128;a++)for(var r=0;r<t;r++)for(var e=0;e<3;e++)h[a*t*3+3*r+e]=this.data[s+a*this.width*this.Bpp+r*this.Bpp+e];return h},p.getStrip4=function(t,i,h,s,a){let r=Math.floor(a/s),e=Math.floor(this.height/r),n=t*e*this.width*this.Bpp,p=this.width;for(let t=0;t<s;t++)for(let a=0;a<h;a++){let r=(t*h+a)*this.Bpp,d=n+(Math.round(t*e/s)*p+Math.round(a*p/h))*this.Bpp;i[r++]=this.data[d++],i[r++]=this.data[d++],i[r++]=this.data[d++]}return i},p.getStrip5=function(t,i,h,s,a){var e=a/128,n=this.height/e,p=(this.width,this.Bpp,this.Bpp*this.width*n*t),d={width:this.width,height:n,data:this.data.subarray(p,p+this.width*n*this.Bpp)},o={height:128,width:h,data:i};return r.bicubicInterpolation(d,o),i},p.nextLine1BitArr=function(t){t.fill(0),d===this.height&&(d=0);for(var i,h,s=d*this.width*this.Bpp,a=0;a<Math.min(this.width*this.Bpp,8*t.length*this.Bpp);a+=this.Bpp)h=parseInt(a/this.Bpp/8),i=7-a/this.Bpp%8,255!==this.data[s+a]&&(t[h]=t[h]|1<<i);return d++,t},p.nextLineRGBArr=function(t){if(t.fill(255),d===this.height)return t;for(var i=0,h=d*this.width*this.Bpp,s=0;s<this.width*this.Bpp;s+=this.Bpp)t[i]=this.data[h+s],t[++i]=this.data[h+s+1],t[++i]=this.data[h+s+2],i++;return d++,t},p.nextLineKCMYArr=function(t){if(t.fill(0),d===this.height)return t;for(var i=0,h=d*this.width*this.Bpp,s=0;s<this.width*this.Bpp;s+=this.Bpp)t[i]=this.data[h+s],t[++i]=this.data[h+s+1],t[++i]=this.data[h+s+2],t[++i]=this.data[h+s+3],i++;return d++,t},p.resetLines=function(){d=0},p.nextLineRGBArr2=function(){if(d===this.height)return d=0,new Uint8Array(0);var t=d*this.width*this.Bpp,i=t+this.width*this.Bpp;return d++,this.data.subarray(t,i)},p.nextLineRGBPlanarArr=function(t){if(d===this.height)return[];for(var i=0;i<this.width;i++)t[i]=this.data[d*(this.width*this.Bpp)+i*this.Bpp],t[i+t.length/3]=this.data[d*(this.width*this.Bpp)+i*this.Bpp+1],t[i+2*t.length/3]=this.data[d*(this.width*this.Bpp)+i*this.Bpp+2];return d++,t},p.toBinString=function(){for(var t="",i=0;i<this.length();i++)t+=String.fromCharCode(this.data[i]);return t},p.toPBM_P4=function(t,i){let h="";t&&(h+=`P4\n${this.width} ${this.height}\n`);let s=parseInt(this.width/8)+(this.width%8==0?0:1),a=new Uint8Array(s);for(var r=0;r<this.height;r++){if(this.nextLine1BitArr(a),i)for(const t in a)a[t]=~a[t];h+=String.fromCharCode.apply(null,a)}return h},p.toJPEGDataURI=function(t){t=t||90;var i=a.encode(this,t);return h(this.height,this.width,typeof this.data,this.data.length),"data:image/jpeg;base64,"+btoa(i.data)},p.pixelMatch=function(t,i,h){h||(h=0);for(var s=0;s<i.length;s++){if(Math.abs(t[s]-i[s])>h)return!1}return!0},p.getPixel=function(t,i){var h=t*this.Bpp+i*this.width*this.Bpp;return[this.data[h],this.data[h+1],this.data[h+2],this.data[h+3]]},p.putPixel=function(t,i,h){var s=t*this.Bpp+i*this.width*this.Bpp;if(s>this.data.length)return!1;for(var a=0;a<h.length;a++)this.data[s+a]=h[a];return!0},p.getArea=function(t,i,h,s){for(var a=new Uint8Array(h*s*this.Bpp),r=0;r<s;r++)for(var e=0;e<h;e++)for(var n=0;n<this.Bpp;n++)a[r*h*this.Bpp+e*this.Bpp+n]=this.data[t*this.Bpp+i*this.width*this.Bpp+r*h*this.Bpp+e*this.Bpp+n];return a},p.adjustPixel=function(t,i,h){var s,a=t*this.Bpp+i*this.width*this.Bpp;if(a>this.data.length)return!1;for(var r=0;r<h.length;r++)this.data[a+r]=(s=this.data[a+r]+h[r])>255?255:s;return!0},p.fillBoundingBox=function(t,i){return this.fillArea(t[0],t[1],t[2],t[3],i),this},p.brightBoundingBox=function(t,i){return this.brightArea(t[0],t[1],t[2],t[3],i),this},p.brightArea=function(t,i,h,s,a){for(var r=Math.round(2.55*a),e=0;e<=s;e++)for(var n=0;n<=h;n++){var p=this.getPixel(t+n,i+e);p[0]=p[0]+r,p[1]=p[1]+r,p[2]=p[2]+r,this.putPixel(t+n,i+e,p)}!0},p.fillArea=function(t,i,h,s,a){for(var r=0;r<s;r++)for(var e=0;e<h;e++)this.putPixel(t+e,i+r,a);!0},p.fillX=function(t,i,h,s,a){for(var r=0;r<h;r++)this.putPixel(t+r,i,a);!0},p.overlay=function(t,i,h){for(var s=0;s<t.height;s++)for(var a=0;a<t.width;a++)this.putPixel(i+a,h+s,t.getPixel(a,s));!0},p.maxBoundingBox=function(t){for(var i=this.width,h=this.height,s=0,a=0,r=0;r<t.length;r++){var e=t[r],n=e[0],p=e[1],d=e[0]+e[2],o=e[1]+e[3];n<i&&(i=n),p<h&&(h=p),d>s&&(s=d),o>a&&(a=o)}return[i,h,s-i,a-h]};var o=function(t,i,h){var s=0;do{for(var a=!0,r=++s;r<=s;r++)for(var e=s;e<=s;e++)a=!p.pixelMatch(p.getPixel(t+r,i+e),h,0)}while(a);return[t,i,s,s]};return p.objDetect=function(t){var i=[];t=t||50;for(var h=[],s=this.height,a=this.width,r=0;r<s;r++)for(var n=0;n<a;)(h=o(n,r,e))[2]>t&&h[3]>t?(i.push(h),n+=h[2]):n++;return i},p.patchBlank=function(t,i){h("Start patch images with "+(i=i||n)+" "+t);var s=this.objDetect(t);h("Total bounding boxes "+s.length);for(var a=0;a<s.length;a++)this.fillBoundingBox(s[a],i);return h("End patch images with blank"),!0,this},p.whiteout=function(){for(var t=0;t<this.height;t++)for(var i=this.width;i--;){for(var h=0;i-h>0&&!this.pixelMatch(this.getPixel(i-h,t),[255,255,255],2);)h++;if(h>Math.round(this.width/35)){for(var s=i-h;h--;)this.adjustPixel(i-h,t,[170,170,170]);i=s}else i-=h}return!0,this},p.patchBright=function(t,i){t=t||2*Math.ceil(Math.sqrt(Math.sqrt(Math.sqrt(this.width*this.height)))),h("Start bright images with "+(i=i||2)+" "+t);var s=this.objDetect(t);h("Total bounding boxes "+s.length);for(var a=0;a<s.length;a++)this.brightBoundingBox(s[a],i);return h("End patch images with blank"),!0,this},p.blankBiggestImage=function(){return this.fillBoundingBox(this.maxBoundingBox(this.objDetect()),e),this},p.getPageBounds=function(t){let i,s,a=0,r=this.height;h(`[getPageBounds] Pixel threshold ${t=t||255}`);let e=this.width*this.height*this.Bpp-this.Bpp;for(;(e-=this.Bpp)&&!(this.data[e]<t||this.data[e+1]<t||this.data[e+2]<t););for(r=Math.ceil(e/(this.width*this.Bpp)),e=0;(e+=this.Bpp)&&!(this.data[e]<t||this.data[e+1]<t||this.data[e+2]<t););a=Math.floor(e/(this.width*this.Bpp));for(let h=0;h<this.width;h++){for(let s=a;s<r&&((this.data[s*this.width*this.Bpp+h*this.bpp]<t||this.data[s*this.width*this.Bpp+h*this.bpp+1]<t||this.data[s*this.width*this.Bpp+h*this.bpp+2]<t)&&(i=h),!i);s++);if(i)break}i>0&&i--;for(let i=this.width-1;i>=0;i--){for(let h=a;h<r&&((this.data[h*this.width*this.Bpp+i*this.bpp]<t||this.data[h*this.width*this.Bpp+i*this.bpp+1]<t||this.data[h*this.width*this.Bpp+i*this.bpp+2]<t)&&(s=i),!s);h++);if(s)break}return s<this.width-1&&s++,h(`[getPageBounds] Bounds: ${i}, ${a}, ${s}, ${r}`),[i,a,s,r]},p._getPageBounds=function(){var t,i,h=this.height,s=this.width,a=(new Uint32Array(this.data),s),r=h,e=0,n=0;for(i=0;i<h;i++)for(t=0;t<s;t++)this.pixelMatch(this.getPixel(t,i),[255,255,255])||t<a&&(a=t);for(i=0;i<h;i++)for(t=s;t>=0;t--)this.pixelMatch(this.getPixel(t,i),[255,255,255])||t>e&&(e=t);for(t=0;t<s;t++)for(i=0;i<h;i++)this.pixelMatch(this.getPixel(t,i),[255,255,255])||i<r&&(r=i);for(t=0;t<s;t++)for(i=h;i>=0;i--)this.pixelMatch(this.getPixel(t,i),[255,255,255])||i>n&&(n=i);return[a,r,e-a,n-r]},p.cropToPageBounds=function(t){let i=this.getPageBounds(t),s=i[2]-i[0],a=i[3]-i[1],r=new Uint8Array(s*a*this.Bpp);r.fill(255);for(var e=0;e<a;e++)for(var n=0;n<s;n++){let t=e*s*this.Bpp+n*this.Bpp;r[t]=this.data[(i[1]+e)*this.width*this.Bpp+(i[0]+n)*this.Bpp],r[t+1]=this.data[(i[1]+e)*this.width*this.Bpp+(i[0]+n)*this.Bpp+1],r[t+2]=this.data[(i[1]+e)*this.width*this.Bpp+(i[0]+n)*this.Bpp+2]}return h(`Crop: original ${this.width} x ${this.height}, cropped: ${s} x ${a}`),this.data=r,this.height=a,this.width=s,this},p.trimToBottomOfImage=function(){let t=this.width*this.height*this.Bpp-this.Bpp;for(;(t-=this.Bpp)&&255===this.data[t]&&255===this.data[t+1]&&255===this.data[t+2];);h(`Trim: Old height ${this.height}`),this.height=Math.ceil(t/(this.width*this.Bpp)),h(`Trim: New height ${this.height}`)},p.resizeToWidth=function(t){let i=Math.ceil(this.height/(this.width/t));h("Source "+this.width+" "+this.height),h("Dest   "+t+" "+i);var s={height:i,width:t,data:new Uint8Array(t*i*this.Bpp)};return s.data.fill(255),r.bezierInterpolation(this,s),this.data=s.data,this.height=i,this.width=t,this},p.resizeToFixedHeight=function(t,i){if(this.height>t)return this.height=t,this;if(this.height===t)return this;{let s=new Uint8Array(this.width*t*this.Bpp);s.fill(255);let a=this.length(),r=0;for(i&&(r=Math.floor((t-this.height)/2)*this.width*this.Bpp);a--;)s[a+r]=this.data[a];return this.data=s,this.height=t,h(`ResizeToFixedHeight: New height ${this.height} (existing width ${this.width}) center ${i}`),this}},p.scaleAndCenter=function(t){let i=this.height,s=this.width,a=Math.floor(this.width*(t/100)),r=s-a;h(`scale and center to ${a}`),this.resizeToWidth(a);let e=i-this.height,n=Math.round(r/2),p=r-n,d=Math.round(e/2),o=e-d;return this.addMargins(n,p,d,o),this},p.shiftRight=function(t){h(`Shifting right by ${t} pixels`);for(var i=0;i<this.height;i++){let h=i*this.width*this.Bpp;for(var s=(this.width-t)*this.Bpp;s>=0;s--)this.data[h+t*this.Bpp+s]=this.data[h+s];for(var a=0;a<=t*this.Bpp;a++)this.data[h+a]=255}return this},p.addMargins=function(t,i,s,a){let r=this.width+t+i,e=this.height+s+a,n=new Uint8Array(r*e*this.Bpp);n.fill(255),h(`Remargin from ${this.width} x ${this.height} to ${r} x ${e}`);for(var p=0;p<this.height;p++){let i=p*this.width*this.Bpp,h=(p+s)*r*this.Bpp;for(var d=this.width*this.Bpp;d>=0;d--)n[h+t*this.Bpp+d]=this.data[i+d]}return this.width=r,this.height=e,this.data=n,this.modified=!0,this},p.runFilter=function(t){"function"==typeof this[t]?(h("Calling "+t),this[t](arguments[1],arguments[2],arguments[3],arguments[4],arguments[5]),!0):h("Sorry, your filter "+t+" was not found")},p.applyProfile=function(t){if(s.hasOwnProperty(t)){if(s[t].hasOwnProperty("preApply"))for(var i=0;i<s[t].preApply.length;i++)h("Pre applying "+s[t].preApply[i]),this.applyProfile.call(this,s[t].preApply[i]);if(s[t].hasOwnProperty("filters"))for(i=0;i<s[t].filters.length;i++)h("Calling "+s[t].filters[i]),this.runFilter.apply(this,s[t].filters[i])}else h("Error with profile "+t);!0},p}module.exports=wupsImage;

},{"../../debugConsole":30,"../coders/jpeg/jpeg":36,"./filterProfiles":42,"./resize2":44}],44:[function(require,module,exports){
(function (Buffer){(function (){
module.exports={nearestNeighbor:function(t,r){for(var a=t.width,o=t.height,n=r.width,h=r.height,i=t.data,e=r.data,f=0;f<h;f++)for(var u=0;u<n;u++){var M=4*(f*n+u),l=4*(Math.round(f*o/h)*a+Math.round(u*a/n));e[M++]=i[l++],e[M++]=i[l++],e[M++]=i[l++],e[M++]=i[l++]}},bilinearInterpolation:function(t,r){for(var a=t.width,o=t.height,n=r.width,h=r.height,i=t.data,e=r.data,f=function(t,r,a,o,n){return r===o?a:Math.round((t-r)*n+(o-t)*a)},u=function(t,r,o,n,h,u,M,l){var d=4*(M*a+n)+r,v=4*(M*a+h)+r,c=f(o,n,i[d],h,i[v]);if(l===M)e[t+r]=c;else{v=4*(l*a+h)+r;var m=f(o,n,i[d=4*(l*a+n)+r],h,i[v]);e[t+r]=f(u,M,c,l,m)}},M=0;M<h;M++)for(var l=0;l<n;l++){var d=4*(M*n+l),v=l*a/n,c=Math.floor(v),m=Math.min(Math.ceil(v),a-1),p=M*o/h,g=Math.floor(p),s=Math.min(Math.ceil(p),o-1);u(d,0,v,c,m,p,g,s),u(d,1,v,c,m,p,g,s),u(d,2,v,c,m,p,g,s),u(d,3,v,c,m,p,g,s)}},_interpolate2D:function(t,r,a,o){for(var n=t.data,h=r.data,i=t.width,e=t.height,f=r.width,u=r.height,M=Math.max(1,Math.floor(i/f)),l=f*M,d=Math.max(1,Math.floor(e/u)),v=u*d,c=Buffer.alloc(l*e*4),m=0;m<e;m++)for(var p=0;p<l;p++)for(var g=(L=p*(i-1)/l)-(O=Math.floor(L)),s=4*(m*i+O),w=4*(m*l+p),x=0;x<4;x++){var b=s+x,D=O>0?n[b-4]:2*n[b]-n[b+4],I=n[b],_=n[b+4],B=O<i-2?n[b+8]:2*n[b+4]-n[b];c[w+x]=o(D,I,_,B,g)}var z=Buffer.alloc(l*v*4);for(m=0;m<v;m++)for(p=0;p<l;p++){g=(J=m*(e-1)/v)-(K=Math.floor(J)),w=4*(K*l+p);var N=4*(m*l+p);for(x=0;x<4;x++){b=w+x;var j=K>0?c[b-4*l]:2*c[b]-c[b+4*l],k=c[b],q=c[b+4*l],y=K<e-2?c[b+8*l]:2*c[b+4*l]-c[b];z[N+x]=o(j,k,q,y,g)}}var A=M*d;if(A>1)for(m=0;m<u;m++)for(p=0;p<f;p++){for(var C=0,E=0,F=0,G=0,H=0,J=0;J<d;J++)for(var K=m*d+J,L=0;L<M;L++){var O,P=4*(K*l+(O=p*M+L)),Q=z[P+3];Q&&(C+=z[P],E+=z[P+1],F+=z[P+2],H++),G+=Q}var R=4*(m*f+p);h[R]=H?Math.round(C/H):0,h[R+1]=H?Math.round(E/H):0,h[R+2]=H?Math.round(F/H):0,h[R+3]=Math.round(G/A)}else r.data=z},bicubicInterpolation:function(t,r,a){return this._interpolate2D(t,r,a,function(t,r,a,o,n){var h=o-a-t+r,i=t-r-h,e=a-t,f=r;return Math.max(0,Math.min(255,h*(n*n*n)+i*(n*n)+e*n+f))})},hermiteInterpolation:function(t,r,a){return this._interpolate2D(t,r,a,function(t,r,a,o,n){var h=r,i=.5*(a-t),e=t-2.5*r+2*a-.5*o,f=.5*(o-t)+1.5*(r-a);return Math.max(0,Math.min(255,Math.round(((f*n+e)*n+i)*n+h)))})},bezierInterpolation:function(t,r,a){return this._interpolate2D(t,r,a,function(t,r,a,o,n){var h=1-n,i=r*h*h*h,e=3*(r+(a-t)/4)*h*h*n,f=3*(a-(o-r)/4)*h*n*n,u=a*n*n*n;return Math.max(0,Math.min(255,Math.round(i+e+f+u)))})}};

}).call(this)}).call(this,require("buffer").Buffer)

},{"buffer":5}],45:[function(require,module,exports){
const upng=require("upng-js"),debug=require("../../../debugConsole"),Decoder=require("../../decoder"),Filter=require("../../filters/imageFilter"),SYNC_WORD_BYTES=[68,80,73,79,95,74,79,66,66,89],TICKET_SCAN_SIZE_BYTES=100,TICKET_COPIES="copies:",TICKET_DUPLEX="duplex:",TICKET_COLLATE="collate:",TICKET_COLOR="color:",TOTAL_TICKET_ITEMS=4,NEW_PAGE="::data:",DUPLEX_MODE={1:"NO_DUPLEX",2:"LONG_EDGE",3:"SHORT_EDGE",undefined:"NO_DUPLEX"};function isDPIO(t){for(var e=new Uint8Array(t),a=!0,r=0;r<SYNC_WORD_BYTES.length;r++)e[r]!==SYNC_WORD_BYTES[r]&&(a=!1);return e=null,a}class DPIODecoder extends Decoder{constructor(t,e){super(t),this._dataArray=new Uint8Array(this._documentData),debug("[DPIO Decoder] constructor entry"),this._pngHandler=e||upng,this._currentPage=1,this._pages=[],this._validData=!0,this._dpi=300,this._bpp=32,this._devmodeB64="",this._scanTicket(),this._scanData(),debug("[DPIO Decoder] constructed:",this)}_scanTicketItem(t,e,a){let r=0,i=!0;for(let r=0;r<t.length;r++)if(a[e+r]!==t.charCodeAt(r)){i=!1;break}if(i){let i=t.length+e,h=i;for(;a[h]!==":".charCodeAt(0)&&h<TICKET_SCAN_SIZE_BYTES;)h+=1;h!==TICKET_SCAN_SIZE_BYTES&&(r=this._getTextNum(i,h))}return{found:i,value:r}}_scanTicket(){let t=SYNC_WORD_BYTES.length,e=!0,a=0;for(;e&&t<TICKET_SCAN_SIZE_BYTES;){let r=this._scanTicketItem(TICKET_COPIES,t,this._dataArray);r.found&&(debug("found ticket copies : "+r.value),this._ticketCopies=r.value,a+=1),(r=this._scanTicketItem(TICKET_DUPLEX,t,this._dataArray)).found&&(debug("found ticket duplex : "+r.value),this._startingDuplex=DUPLEX_MODE[r.value],a+=1),(r=this._scanTicketItem(TICKET_COLLATE,t,this._dataArray)).found&&(debug("found ticket collate : "+r.value),this._collate=r.value,a+=1),(r=this._scanTicketItem(TICKET_COLOR,t,this._dataArray)).found&&(debug("found ticket bpp : "+r.value),0!==r.value&&(this._isMono=8===r.value),a+=1),a===TOTAL_TICKET_ITEMS&&(e=!1),t++}for(let t=this._dataArray.length-5;t<this._dataArray.length;t++)this._dataArray[t]!==":".charCodeAt(0)&&(this._validData=!1)}_getTextNum(t,e){let a=e-t,r=0,i=0;for(;r<a;){i+=(this._dataArray[t+r]-48)*10**(a-(r+1)),r+=1}return i}_scanData(){debug("scanning data length "+this._dataArray.length);let t=SYNC_WORD_BYTES.length;for(;t<this._dataArray.length-7;)if(this._dataArray[t]===NEW_PAGE.charCodeAt(0)&&this._dataArray[t+1]===NEW_PAGE.charCodeAt(1)&&this._dataArray[t+2]===NEW_PAGE.charCodeAt(2)&&this._dataArray[t+3]===NEW_PAGE.charCodeAt(3)&&this._dataArray[t+4]===NEW_PAGE.charCodeAt(4)&&this._dataArray[t+5]===NEW_PAGE.charCodeAt(5)&&this._dataArray[t+6]===NEW_PAGE.charCodeAt(6)){debug("found page "+this._pages.length+1);let e=t+7,a=e;for(;this._dataArray[a]!==":".charCodeAt(0)&&a<this._dataArray.length;)a+=1;if(a!==this._dataArray.length){let r=a+2,i=this._getTextNum(e,a);debug("pageData @"+r+", len:"+i),this._pages.push({pageDataStart:r,pageDataLength:i}),debug("set page start to "+(t=r+i))}}else t++;this._pageCount=this._pages.length,debug("[DPIODecoder] DPIO pages parsed, "+this._pageCount+" found")}getPageDataRGBA(){return this.getPageDataRGBAScaled(1,!0)}getPageDataRGBAScaled(t,e){let a=this._currentPage-1;if(0!==this._pageCount&&a>this._pageCount)return void debug("[DPIODecoder] No more data - cannot get next page");let r=this._pages[a].pageDataStart,i=this._pages[a].pageDataLength;debug("create buffer from range "+r+":"+i);let h=new Uint8Array(this._documentData.slice(r,r+i),0,i),d=this._pngHandler.decode(h),n=d.data,s=d.width,_=d.height;debug("[DPIODecoder] page image data width :"+s+", height:"+_),0===this._height&&(this._height=_,this._width=s);let g=0,o=0,u=0,l=0,c=0,E=0;for(let t=0;t<n.length;t+=4)if(0===n[t+3])n[t]=255,n[t+1]=255,n[t+2]=255,n[t+3]=255,c+=1;else if(255===n[t]&&255===n[t+1]&&255===n[t+2])c+=1;else{let e=1-n[t]/255,a=1-n[t+1]/255,r=1-n[t+2]/255;g+=255*(e-(E=Math.min(e,Math.min(a,r))))/(1-E)>>0,o+=255*(a-E)/(1-E)>>0,u+=255*(r-E)/(1-E)>>0,l+=255*E>>0}this._currentPage+=1;let D={data:n,width:s,height:_,bpp:32,dpi:300,fingerprint:this._generateFingerprint(a+1,g,o,u,l,c,s*_)};if(1!==t){debug("[DPIO Decoder] handle scaling, factor "+t);let e=new Filter(D,!1),a=s/t;debug("[DPIO Decoder] handle scaling new width "+a),e.resizeToWidth(Math.floor(a)),D.data=Uint8ClampedArray.from(e.data),D.width=e.width,D.height=e.height}return this._pageFingerprints.push(D.fingerprint),D}gotoPage(t){return t>0&&t<=this._pageCount?(this._currentPage=t,!0):(debug("[DPIODecoder] unknown page "+t+", range: 1 - "+this._pageCount),!1)}isValid(){return this._validData}get type(){return"dpio"}finish(){this._dataArray=null,super.finish()}_generateFingerprint(t,e,a,r,i,h,d){return{page:t,c:e,m:a,y:r,k:i,blank:h,total:d,coverage:(d-h)/d*100}}}module.exports={isDPIO,DPIODecoder};

},{"../../../debugConsole":30,"../../decoder":40,"../../filters/imageFilter":43,"upng-js":12}],46:[function(require,module,exports){
module.exports={SET_TAPE_COLOUR_BW:[27,67,0],SET_DOT_TAB_ZERO:[27,66,0],RESET_PRINTER:[27,64],TRANSFER_PRINT_DATA:[22],SHORT_FF:[27,71],LINE_FEED:[27,69],LINE_TAB:[27,81]};

},{}],47:[function(require,module,exports){
module.exports=function(e,r,i,t){const n=require("../../../../debugConsole"),o=require("./commands"),a=84;var s={},p="",d=400,h=960;function f(e,r){if(r){var i=String.fromCharCode.apply(null,e.subarray(0,r));p+=i}else"string"==typeof e?p+=e:"number"==typeof e?p+=String.fromCharCode(e):"object"==typeof e&&(p+=String.fromCharCode(e))}function m(e){f(e[0]);var r=1;if(e.length>1)for(var i=1;i<e.length;i++)"#"===e[i]?f(arguments[r++]):f(e[i])}return t&&t.print&&t.print.media_size&&t.print.media_size&&(d=8*Math.round(.0393701*(t.print.media_size.width_microns/1e3-2)*300/8),h=8*Math.round(.935*Math.floor(t.print.media_size.height_microns/1e3-2)*.0393701*300/8)),n(`[Dymo450] ${d}x${h}`),m(o.RESET_PRINTER),s.finalise=function(){m(o.SHORT_FF),m(o.LINE_FEED),m(o.LINE_TAB);let e=p;if(t&&t.print&&t.print.copies&&t.print.copies.copies){let r=parseInt(t.print.copies.copies);for(let i=1;i<r;i++)e+=p}return e},s.addImagePage=function(e){e.cropToPageBounds(),e.resizeToWidth(d),e.binaryFilterThreshold(128),e.resizeToFixedHeight(h,!0);var r=Math.min(a,parseInt(e.width/8)+(e.width%8==0?0:1)),i=new Uint8Array(r);n("[Dymo450] Bytes per line: "+r),m(o.SET_TAPE_COLOUR_BW),m(o.SET_DOT_TAB_ZERO);for(var t=0;t<e.height;t++)e.nextLine1BitArr(i),m([27,68,r]),m(o.TRANSFER_PRINT_DATA),f(i,r);n("[Dymo450] Dymo page done")},s};

},{"../../../../debugConsole":30,"./commands":46}],48:[function(require,module,exports){
module.exports={GET_STATUS:[27,65,1],GET_STATUS2:[27,65,0],COUNTER:[27,115,1,0,0,0],SET_PRINT_DENSITY:[27,67,100],SET_LABEL_LENGTH_PROPER:[27,76,"#","#"],SET_PRINT_QUALITY:[27,104],SET_MEDIA_TYPE:[27,77,0,0,0,0,0,0,0,0],TEXT_SPEED_MODE:[27,104],BARCODE_GFX_MODE:[27,105],LABEL_INDEX:[27,110,1,0],BITMAP_SPEC_PROPER:[27,68,1,2,"#","#","#","#","#","#","#","#"],SHORT_FF:[27,71],LINE_FEED:[27,69],LINE_TAB:[27,81]};

},{}],49:[function(require,module,exports){
module.exports=function(e,i,r,t){const n=require("../../../../debugConsole"),o=require("./commands");var h={},a="",d=400,T=960;function _(e,i){if(i){var r=String.fromCharCode.apply(null,e.subarray(0,i));a+=r}else"string"==typeof e?a+=e:"number"==typeof e?a+=String.fromCharCode(e):"object"==typeof e&&(a+=String.fromCharCode(e))}function E(e){_(e[0]);var i=1;if(e.length>1)for(var r=1;r<e.length;r++)"#"===e[r]?_(arguments[i++]):_(e[r])}return t&&t.print&&t.print.media_size&&t.print.media_size&&(d=8*Math.round(.0393701*(t.print.media_size.width_microns/1e3-2)*300/8),T=8*Math.round(.935*Math.floor(t.print.media_size.height_microns/1e3-2)*.0393701*300/8)),n(`[DymoWireless] ${d}x${T}`),E(o.GET_STATUS),h.finalise=function(){return E(o.SHORT_FF),E(o.GET_STATUS2),E(o.LINE_FEED),E(o.LINE_TAB),a},h.addImagePage=function(e){e.cropToPageBounds(),e.resizeToWidth(d),e.binaryFilterThreshold(128),e.resizeToFixedHeight(T,!0);var i=parseInt(e.width/8)+(e.width%8==0?0:1);new Uint8Array(i),E(o.COUNTER),E(o.SET_PRINT_DENSITY),E(o.SET_LABEL_LENGTH_PROPER,2*e.height&255,2*e.height>>8&255),E(o.SET_PRINT_QUALITY),E(o.SET_MEDIA_TYPE),E(o.TEXT_SPEED_MODE),E(o.LABEL_INDEX),E(o.BITMAP_SPEC_PROPER,255&e.height,e.height>>8&255,e.height>>16&255,e.height>>24&255,255&e.width,e.width>>8&255,e.width>>16&255,e.width>>24&255),_(e.toPBM_P4(!1)),n("Dymo page done")},h};

},{"../../../../debugConsole":30,"./commands":48}],50:[function(require,module,exports){
module.exports={ESC:27,GS:29,FF:12,LF:10,INIT:[27,"@"],RASTER_NORMAL:[29,118,48,0]};

},{}],51:[function(require,module,exports){
module.exports=function(e,r,t){const i=require("../../../debugConsole");require("./commands");var n={},o="";const h=496;function a(e,r){if(r){var t=String.fromCharCode.apply(null,e.subarray(0,r));o+=t}else"string"==typeof e?o+=e:"number"==typeof e?o+=String.fromCharCode(e):"object"==typeof e&&(o+=String.fromCharCode(e))}function d(){o+="",a("@")}return d(),n.finalise=function(){return o+="",a(86),a(0),d(),o},n.addImagePage=function(e){e.cropToPageBounds(249),e.resizeToWidth(h),i("New escpos");let r=128;t&&t.dither_threshold&&(r=parseInt(t.dither_threshold)),t&&t.printer_config_dither&&"bayer"===t.printer_config_dither?e.dither(r,"bayer"):e.binaryFilterThreshold(r);var n=parseInt(e.width/8)+(e.width%8==0?0:1),o=new Uint8Array(n);a(new Uint8Array([29,118,48,0]),4),a(e.width>>3&255),a(e.width>>3>>8&255),a(255&e.height),a(e.height>>8&255);for(var d=0;d<e.height;d++)e.nextLine1BitArr(o),a(o,n);i("ESCPOS done page")},n};

},{"../../../debugConsole":30,"./commands":50}],52:[function(require,module,exports){
const base64Arraybuffer=require("base64-arraybuffer");var jpeg=require("jpeg-js");module.exports=function(e){var r=e,a=-1,o={getPageDataRGBA:function(){return console.log("Decodign jpeg"),a++,jpeg.decode(base64Arraybuffer.decode(r[a]),!0)}};return o};

},{"base64-arraybuffer":3,"jpeg-js":7}],53:[function(require,module,exports){
(function (Buffer){(function (){
const debug=require("../../../debugConsole"),Decoder=require("../../decoder"),HEADER_SIZE=1796,SYNC_WORD_BYTES=[82,97,83,50],PWGRASTER="PwgRaster",PAGE_HEADER_OFFSETS={PwgRaster:[0,8],Duplex:[272,4],DotsPerInch1:[283,1],DotsPerInch2:[287,1],BitsPerPixel:[388,4],TotalPageCount:[452,4],Width:[372,4],Height:[376,4],Tumble:[368,4],HWResolution:[276,8],ColorSpace:[400,4],CrossFeedTransform:[456,4],FeedTransform:[460,4]},RGBA=4,SGREY_8=18,SRGB_8=19,DUPLEX_MODE={"00":"NO_DUPLEX",10:"LONG_EDGE",11:"SHORT_EDGE","01":"NO_DUPLEX",undefined:"NO_DUPLEX"};function isPWG(t){for(var e=new Uint8Array(t),r=!0,i=0;i<SYNC_WORD_BYTES.length;i++)e[i]!==SYNC_WORD_BYTES[i]&&(r=!1);return e=null,r}class PWGDecoder extends Decoder{constructor(t){super(t),debug("[PWGDecoder] constructor entry"),this._dataView=new DataView(this._documentData),this._dataArray=new Uint8Array(this._documentData),this._offset=4,this._currentPage=1,this._pageOffsets={0:0,1:4},this._colorSpace=this._getUintValue("ColorSpace"),this._isMono=this._colorSpace===SGREY_8,this._height=this._getUintValue("Height"),this._width=this._getUintValue("Width"),this._dpi=this._getUintValue("HWResolution"),this._bpp=this._getUintValue("BitsPerPixel"),this._pageCount=this._getUintValue("TotalPageCount"),this._duplex=this._getUintValue("Duplex"),this._tumble=this._getUintValue("Tumble"),this._crossfeedtransform=this._getIntValue("CrossFeedTransform"),this._feedtransform=this._getIntValue("FeedTransform"),this._startingDuplex=DUPLEX_MODE[`${this._duplex}${this._tumble}`],0===this._pageCount&&(this._pageCount=this._scanDocumentForPageCount()),debug("[PWGDecoder] constucted:",this),debug("[PWGDecoder] Duplex on PWG:",this._startingDuplex)}_getUintValue(t){debug("[PWGDecoder] get uint value by key "+t);const e=this._dataView.getUint32(PAGE_HEADER_OFFSETS[t][0]+this._offset);return debug("[PWGDecoder] return val "+e),e}_getIntValue(t){debug("[PWGDecoder] get sint value by key "+t);const e=this._dataView.getInt32(PAGE_HEADER_OFFSETS[t][0]+this._offset);return debug("[PWGDecoder] return val "+e),e}_scanDocumentForPageCount(){for(var t=0,e=0;e<this._dataArray.length-8;e++)this._dataArray[e]===PWGRASTER.charCodeAt(0)&&this._dataArray[e+1]===PWGRASTER.charCodeAt(1)&&this._dataArray[e+2]===PWGRASTER.charCodeAt(2)&&this._dataArray[e+3]===PWGRASTER.charCodeAt(3)&&this._dataArray[e+4]===PWGRASTER.charCodeAt(4)&&this._dataArray[e+5]===PWGRASTER.charCodeAt(5)&&this._dataArray[e+6]===PWGRASTER.charCodeAt(6)&&this._dataArray[e+7]===PWGRASTER.charCodeAt(7)&&this._dataArray[e+8]===PWGRASTER.charCodeAt(8)&&t++;return t}_generateFingerprint(t,e,r,i,a,s){return{page:this._currentPage,c:t,m:e,y:r,k:i,blank:a,total:s,coverage:(s-a)/s*100}}getPageDataRGBA(){return this.getPageDataRGBAScaled(1,!0)}getPageDataRGBAScaled(t,e){const r=RGBA;if(0!==this._pageCount&&this._currentPage>this._pageCount)debug("[PWGDecoder] No more data - cannot get next page");else{var i=this._offset+HEADER_SIZE;if(!(i>this._dataArray.len)){var a=0,s=0,h=0,o=0,n=0,_=0,d=0,g=0,u=new Uint8Array(this._documentData,i,this._dataArray.len),f=this._bpp/8,l=this._width*r,c=Buffer.alloc(l),P=Math.floor(this._width/t),D=Math.floor(this._height/t);debug("[PWGDecoder] New height "+D),debug("[PWGDecoder] New width "+P);var p=Buffer.alloc(P*r);debug("[PWGDecoder] Creating framebuffer scaled by "+t),debug("[PWGDecoder] Line data modulus "+p.length%r);var A=new Uint8ClampedArray(D*P*r);debug("[PWGDecoder] Done creating framebuffer");var E,G,R,b,w=Buffer.alloc(r),S=0,W=0,y=0,m=0,C=0,T=0,v=0,U=0,O=0,B=0;do{g=_,S=0,W=0,y=0,m=0,C=0;var V=u[a]+1;a++,s=0;do{const t=u[a]<<24>>24;if(a++,t>=0&&t<=127){for(n=t+1,w[3]=255,o=0;o<f;++o)w[o]=u[a],a++;var F;for(this._colorSpace===SGREY_8&&(w[1]=w[2]=w[0]),h=0;h<n&&(c[F=4*s]=w[0],c[F+1]=w[1],c[F+2]=w[2],!(++s>=this._width));++h);if(255===w[0]&&255===w[1]&&255===w[2]?C+=n:(E=1-w[0]/255,G=1-w[1]/255,R=1-w[2]/255,S+=n*(255*(E-(b=Math.min(E,Math.min(G,R))))/(1-b)>>0),W+=n*(255*(G-b)/(1-b)>>0),y+=n*(255*(R-b)/(1-b)>>0),m+=n*(255*b>>0)),s>=this._width)break}else{for(n=-1*t+1,h=0;h<n;++h){let t=4*s;for(o=0;o<f;++o)c[t+o]=u[a],a++;if(this._colorSpace===SGREY_8&&(c[t+1]=c[t+2]=c[t]),255===c[t]&&255===c[t+1]&&255===c[t+2]?C+=1:(E=1-c[t]/255,G=1-c[t+1]/255,R=1-c[t+2]/255,S+=255*(E-(b=Math.min(E,Math.min(G,R))))/(1-b)>>0,W+=255*(G-b)/(1-b)>>0,y+=255*(R-b)/(1-b)>>0,m+=255*b>>0),++s>=this._width)break}if(s>=this._width)break}}while(s<this._width);if(1!==t){for(h=3;h<p.length;h+=4)p[h]=255;var Y=f+1;let r=p.length;var x,M,N,k,H,I;for(h=0;h<r;h+=Y){var L=4*(h/4*t|0);e?(p[h]=c[L],p[h+1]=c[L+1],p[h+2]=c[L+2]):0===h?(x=c[L+Y],M=c[L+1+Y],N=c[L+2+Y],p[h]=(c[L]+1*x)/2,p[h+1]=(c[L+1]+1*M)/2,p[h+2]=(c[L+2]+1*N)/2):h===r-Y?(k=c[L-Y],H=c[L+1-Y],I=c[L+2-Y],p[h]=(c[L]+1*k)/2,p[h+1]=(c[L+1]+1*H)/2,p[h+2]=(c[L+2]+1*I)/2):(x=c[L+Y],M=c[L+1+Y],N=c[L+2+Y],k=c[L-Y],H=c[L+1-Y],I=c[L+2-Y],p[h]=(c[L]+1*k+1*x)/3,p[h+1]=(c[L+1]+1*H+1*M)/3,p[h+2]=(c[L+2]+1*I+1*N)/3)}for(h=0;h<V;++h){if(d/_<1/t)for(var X=0;X<Math.max(Math.floor(1/t),1);X++){for(let t=0;t<r;t++)A[d*r+t]=p[t];d++}++_,T+=S,v+=W,U+=y,O+=m,B+=C}}else{let t=c.length;for(h=0;h<V;++h){for(let e=0;e<t;e++)A[_*t+e]=c[e];++_,T+=S,v+=W,U+=y,O+=m,B+=C}}}while(_<this._height&&g!==_);var Z=a+i;this._offset=Z,this._pageOffsets[this._currentPage+1]=Z;var q={};return q.data=A,q.bpp=8*RGBA,q.dpi=this._dpi,q.width=P,q.height=D,q.fingerprint=this._generateFingerprint(T,v,U,O,B,this._width*this._height),this._pageFingerprints.push(q.fingerprint),debug("[PWGDecoder] Decoded page "+this._currentPage+": width "+q.width+", height "+q.height+", bpp "+q.bpp+", dpi "+q.dpi+" fingerprint C:"+T+", M:"+v+", Y:"+U+", K:"+O+", B:"+B),this._currentPage++,q}debug("[PWGDecoder] No more pages")}}getPageDataMIFF(){var t=this._offset+HEADER_SIZE,e=0,r=0,i=0,a=0,s=0,h=0,o=new Uint8Array(this._documentData,t,this._dataArray.len),n=new Int8Array(this._documentData,t,this._dataArray.len),_=this._bpp/8;do{var d=o[e]+1;e++,r=0;do{const t=n[e];if(e++,t>=0&&t<=127){for(s=t+1,a=0;a<_;++a)e++;for(i=0;i<s&&!(++r>=this._width);++i);if(r>=this._width)break}else if(t>-128&&t<0){for(s=-1*t+1,i=0;i<s;++i){for(a=0;a<_;++a)e++;if(++r>=this._width)break}if(r>=this._width)break}}while(r<this._width);for(i=0;i<d;++i)++h}while(h<this._height);var g=e+t,u=g-t,f=new Uint8Array(u),l=new Uint8Array(this._documentData,t,u);return f.set(l),this._offset=g,f}isValid(){for(var t=0;t<SYNC_WORD_BYTES.length;t++)if(this._dataArray[t]!==SYNC_WORD_BYTES[t])return!1;return!(this._bpp>48)}gotoPage(t){return this._pageOffsets[t]?(this._offset=this._pageOffsets[t],debug("[PWGDecoder] Going to page "+t+" offset is now"+this._offset),debug(this._pageOffsets),this._currentPage=t,!0):(debug("[PWGDecoder] Error going to page "+t+" offset as yet unknown"),!1)}get type(){return"pwg"}finish(){this._dataView=null,this._dataArray=null,super.finish()}}module.exports={PWGDecoder,isPWG};

}).call(this)}).call(this,require("buffer").Buffer)

},{"../../../debugConsole":30,"../../decoder":40,"buffer":5}],54:[function(require,module,exports){
(function (Buffer){(function (){
function pwgDecoder(e){const t=require("../../../debugConsole"),r=1796,o=[82,97,83,50],a="PwgRaster",i={PwgRaster:[0,8],Duplex:[272,4],DotsPerInch1:[283,1],DotsPerInch2:[287,1],BitsPerPixel:[388,4],TotalPageCount:[452,4],Width:[372,4],Height:[376,4],HWResolution:[276,8],ColorSpace:[400,4]},n=4,f=18;var c=4,u=1,h=[],g={0:0,1:4},l=new DataView(e),d=new Uint8Array(e);function p(e){return l.getUint32(i[e][0]+c)}function s(){return p("ColorSpace")}function C(){return p("Height")}function b(){return p("Width")}function w(){return p("HWResolution")}function P(){return p("BitsPerPixel")}function k(){let e=p("TotalPageCount");return 0===e&&(e=function(){for(var e=0,t=0;t<d.length-8;t++)d[t]===a.charCodeAt(0)&&d[t+1]===a.charCodeAt(1)&&d[t+2]===a.charCodeAt(2)&&d[t+3]===a.charCodeAt(3)&&d[t+4]===a.charCodeAt(4)&&d[t+5]===a.charCodeAt(5)&&d[t+6]===a.charCodeAt(6)&&d[t+7]===a.charCodeAt(7)&&d[t+8]===a.charCodeAt(8)&&e++;return e}()),e}t("PWGDecoder: pages "+k()+", width "+b()+", height "+C()+", bpp "+P()+", dpi "+w()+", cspace "+s());var v={getPageDataRGBA:function(){return this.getPageDataRGBAScaled(1,!0)}};return v.getPageDataRGBAScaled=function(o,a){const i=n;if(0!==this.pageCount&&u>this.pageCount)t("No more data - cannot get next page");else{var l=c+r;if(!(l>d.len)){var C=0,b=0,P=0,k=0,v=0,A=0,D=0,m=0,B=new Uint8Array(e,l,d.len),x=p("Width"),M=p("Height"),y=p("BitsPerPixel"),U=w(),W=y/8,R=s(),S=x*i,G=Buffer.alloc(S),H=Math.floor(x/o),V=Math.floor(M/o);t("New height "+V),t("New width "+H);var I=Buffer.alloc(H*i);t("Creating framebuffer scaled by "+o),t("Line data modulus "+I.length%i);var N=new Uint8ClampedArray(V*H*i);t("Done creating framebuffer");var F,T,q,E,K=Buffer.alloc(i),L=0,Y=0,j=0,z=0,J=0,O=0,Q=0,X=0,Z=0,$=0;do{m=A,L=0,Y=0,j=0,z=0,J=0;var _=B[C]+1;C++,b=0;do{if(packbitCode=B[C]<<24>>24,C++,packbitCode>=0&&packbitCode<=127){var ee;for(v=packbitCode+1,K[3]=255,k=0;k<W;++k)K[k]=B[C],C++;for(R===f&&(K[1]=K[2]=K[0]),P=0;P<v&&(G[ee=4*b]=K[0],G[ee+1]=K[1],G[ee+2]=K[2],!(++b>=x));++P);if(255===K[0]&&255===K[1]&&255===K[2]?J+=v:(F=1-K[0]/255,T=1-K[1]/255,q=1-K[2]/255,L+=v*(255*(F-(E=Math.min(F,Math.min(T,q))))/(1-E)>>0),Y+=v*(255*(T-E)/(1-E)>>0),j+=v*(255*(q-E)/(1-E)>>0),z+=v*(255*E>>0)),b>=x)break}else{for(v=-1*packbitCode+1,P=0;P<v;++P){let e=4*b;for(k=0;k<W;++k)G[e+k]=B[C],C++;if(R===f&&(G[e+1]=G[e+2]=G[e]),255===G[e]&&255===G[e+1]&&255===G[e+2]?J+=v:(F=1-G[e]/255,T=1-G[e+1]/255,q=1-G[e+2]/255,L+=v*(255*(F-(E=Math.min(F,Math.min(T,q))))/(1-E)>>0),Y+=v*(255*(T-E)/(1-E)>>0),j+=v*(255*(q-E)/(1-E)>>0),z+=v*(255*E>>0)),++b>=x)break}if(b>=x)break}}while(b<x);if(1!==o){for(P=3;P<I.length;P+=4)I[P]=255;var te,re,oe,ae,ie,ne,fe=W+1,ce=I.length;for(P=0;P<ce;P+=fe){var ue=4*(P/4*o|0);a?(I[P]=G[ue],I[P+1]=G[ue+1],I[P+2]=G[ue+2]):0===P?(te=G[ue+fe],re=G[ue+1+fe],oe=G[ue+2+fe],I[P]=(G[ue]+1*te)/2,I[P+1]=(G[ue+1]+1*re)/2,I[P+2]=(G[ue+2]+1*oe)/2):P===ce-fe?(ae=G[ue-fe],ie=G[ue+1-fe],ne=G[ue+2-fe],I[P]=(G[ue]+1*ae)/2,I[P+1]=(G[ue+1]+1*ie)/2,I[P+2]=(G[ue+2]+1*ne)/2):(te=G[ue+fe],re=G[ue+1+fe],oe=G[ue+2+fe],ae=G[ue-fe],ie=G[ue+1-fe],ne=G[ue+2-fe],I[P]=(G[ue]+1*ae+1*te)/3,I[P+1]=(G[ue+1]+1*ie+1*re)/3,I[P+2]=(G[ue+2]+1*ne+1*oe)/3)}for(P=0;P<_;++P){if(D/A<1/o)for(var he=0;he<Math.max(Math.floor(1/o),1);he++){for(var ge=0;ge<ce;ge++)N[D*ce+ge]=I[ge];D++}++A,O+=L,Q+=Y,X+=j,Z+=z,$+=J}}else for(ce=G.length,P=0;P<_;++P){for(ge=0;ge<ce;ge++)N[A*ce+ge]=G[ge];++A,O+=L,Q+=Y,X+=j,Z+=z,$+=J}}while(A<M&&m!==A);var le=C+l;c=le,g[u+1]=le;var de={};return de.data=N,de.bpp=8*n,de.dpi=U,de.width=H,de.height=V,de.fingerprint=function(e,t,r,o,a,i){return{page:u,c:e,m:t,y:r,k:o,blank:a,total:i,coverage:(i-a)/i*100}}(O,Q,X,Z,$,x*M),h.push(de.fingerprint),t("PWGDecoder: Decoded page "+u+": width "+de.width+", height "+de.height+", bpp "+de.bpp+", dpi "+de.dpi+" fingerprint C:"+O+", M:"+Q+", Y:"+X+", K:"+Z+", B:"+$),u++,de}t("No more pages")}},v.getPageDataMIFF=function(){var t=c+r,o=0,a=0,i=0,n=0,f=0,u=0,h=new Uint8Array(e,t,d.len),g=new Int8Array(e,t,d.len),l=this.getUintValue("Width"),p=this.getUintValue("Height"),s=this.getUintValue("BitsPerPixel")/8;do{var C=h[o]+1;o++,a=0;do{if(packbitCode=g[o],o++,packbitCode>=0&&packbitCode<=127){for(f=packbitCode+1,n=0;n<s;++n)o++;for(i=0;i<f&&!(++a>=l);++i);if(a>=l)break}else if(packbitCode>-128&&packbitCode<0){for(f=-1*packbitCode+1,i=0;i<f;++i){for(n=0;n<s;++n)o++;if(++a>=l)break}if(a>=l)break}}while(a<l);for(i=0;i<C;++i)++u}while(u<p);var b=o+t,w=b-t,P=new Uint8Array(w),k=new Uint8Array(e,t,w);return P.set(k),c=b,P},v.isValid=function(){for(var e=0;e<o.length;e++)if(d[e]!==o[e])return!1;return!(P()>48)},v.gotoPage=function(e){return g[e]?(c=g[e],t("Going to page "+e+" offset is now"+c),t(g),u=e,!0):(t("Error going to page "+e+" offset as yet unknown"),!1)},v.width=b(),v.height=C(),v.colorSpace=s(),v.bpp=p("BitsPerPixel"),v.duplex=p("Duplex"),v.isMono=v.colorSpace===f,v.isColor=19===v.colorSpace,v.dpi=w(),v.pageCount=k(),v.getFingerprint=function(e){return t(h[e-1]),e?h[e-1]:h[u]},v.fingerprints=function(){return h},v.currentPage=function(){return u},v}module.exports=pwgDecoder;

}).call(this)}).call(this,require("buffer").Buffer)

},{"../../../debugConsole":30,"buffer":5}],55:[function(require,module,exports){
module.exports={ESC:27,GS:29,FF:12,LF:10,INIT:[27,"@"],PRINTABLE_WIDTH_72:[27,30,"A",0],PRINTABLE_WIDTH_50:[27,30,"A",1],RASTER_MODE_START:[27,"*","r","R",27,"*","r","A"],PRINT_SPEED_STANDARD:[27,"*","r","Q","0",0],PAGE_TYPE_RECEIPT:[27,"*","r","P","0",0],PAGE_CUT_TYPE_NO_CUT:[27,"*","r","F","1",0],DOC_CUT_TYPE_COMMAND_NO_CUT:[27,"*","r","E","1",0],DOC_CUT_TYPE_COMMAND_PARTIAL_CUT:[27,"*","r","E","1","3",0],START_PAGE_COMMAND:[0],END_PAGE_COMMAND:[27,"*","r","Y","1",0,27,12],END_JOB_COMMAND:[4,27,"*","r","B"],HORIZONTAL_PIXEL_RESOLOUTION_80:640,HORIZONTAL_PIXEL_RESOLOUTION_72:576,HORIZONTAL_PIXEL_RESOLOUTION_50:400};

},{}],56:[function(require,module,exports){
module.exports=function(r,e,t){const i=require("../../../debugConsole"),n=require("./commands");var _={},o="",T=72;function a(r,e){if(e){var t=String.fromCharCode.apply(null,r.subarray(0,e));o+=t}else"string"==typeof r?o+=r:"number"==typeof r?o+=String.fromCharCode(r):"object"==typeof r&&(o+=String.fromCharCode(r))}function h(r){a(r[0]);var e=1;if(r.length>1)for(var t=1;t<r.length;t++)"#"===r[t]?a(arguments[e++]):a(r[t])}return t&&t.printer_config_rollwidth&&"fifty"===t.printer_config_rollwidth&&(T=50),h(n.INIT),h(50===T?n.PRINTABLE_WIDTH_50:n.PRINTABLE_WIDTH_72),h(n.RASTER_MODE_START),h(n.PRINT_SPEED_STANDARD),h(n.INIT),h(n.PAGE_TYPE_RECEIPT),h(n.PAGE_CUT_TYPE_NO_CUT),h(n.DOC_CUT_TYPE_COMMAND_PARTIAL_CUT),_.finalise=function(){return h(n.END_JOB_COMMAND),o},_.addImagePage=function(r){r.cropToPageBounds();let e=128;t&&t.dither_threshold&&(e=parseInt(t.dither_threshold)),50===T?r.resizeToWidth(n.HORIZONTAL_PIXEL_RESOLOUTION_50):r.resizeToWidth(n.HORIZONTAL_PIXEL_RESOLOUTION_72),t&&t.printer_config_dither&&"bayer"===t.printer_config_dither?r.dither(e,"bayer"):r.binaryFilterThreshold(e);var _=parseInt(r.width/8)+(r.width%8==0?0:1),o=_/256&255,d=_%256,f=new Uint8Array(_);h(n.START_PAGE_COMMAND);for(var A=0;A<r.height;A++)r.nextLine1BitArr(f),a("b"),a(d),a(o),a(f,_);h(n.END_PAGE_COMMAND),i("Star Graphix done page")},_};

},{"../../../debugConsole":30,"./commands":55}],57:[function(require,module,exports){
const{isPWG,PWGDecoder}=require("./full-job/pwg/PWGDecocerCls"),{isDPIO,DPIODecoder}=require("./full-job/dpio/DPIODecoder"),debug=require("../debugConsole");module.exports=function(){const e={pwg:PWGDecoder,dpio:DPIODecoder,jpeg_array:require("./full-job/jpg/jpgArrayDecoder")},r={stargraphics:require("./full-job/star-graphics/star-graphics"),escpos:require("./full-job/escpos/escpos"),dymowireless:require("./full-job/dymo/dymo-wireless/dymo-wireless"),dymo450:require("./full-job/dymo/dymo-lw-450/dymo-lw-450"),pclm:require("./streaming/pclm/pclmStreamingEncoder"),pdf:require("./streaming/pdf/pdfStreamingEncoder"),pwg:require("./streaming/pwg/pwgStreamingEncoder"),pcl6:require("./streaming/pcl/pcl6/pcl6StreamingEncoder"),pcl6jr:require("./streaming/pcl/pcl6/pxljrStreamingEncoder"),ps3:require("./streaming/ps/psStreamingEncoder2"),ps3_legacy:require("./streaming/ps/psStreamingEncoder"),pcl5mono:require("./streaming/pcl/pcl5-mono/pcl5MonoStreamingEncoder"),pcl5:require("./streaming/pcl/pcl5/pcl5StreamingEncoder"),urf:require("./streaming/urf/urfStreamingEncoder_v2"),pcl3gui:require("./streaming/pcl/pcl3GUI/pcl3GUIEncoder_v4"),epl:require("./streaming/epl/EPLEncoder"),zpl:require("./streaming/zpl2/ZPLEncoder"),sbpl:require("./streaming/sbpl/SBPLEncoder")};let o=Object.keys(r).join(", ");debug("PDL registered encoders: "+o);let n=Object.keys(e).join(", ");debug("PDL registered decoders: "+n);var c={createEncoder:function(e,o,n,c,i,s){return r[e]?new r[e](o,n,c,i,s):(debug(`Print fatal error - encoder ${e} not found`),null)},detectAndCreateDecoder:function(e){const r=isPWG(e)?"pwg":isDPIO(e)?"dpio":"unknown";return this.createDecoder(r,e)},createDecoder:function(r,o){return e[r]?new e[r](o):(debug(`Print fatal error - decoder ${r} not found`),null)},isEncoderStreaming:function(e){return"stargraphics"!==e&&"escpos"!==e&&"dymowireless"!==e&&"dymo450"!==e}};return c}();

},{"../debugConsole":30,"./full-job/dpio/DPIODecoder":45,"./full-job/dymo/dymo-lw-450/dymo-lw-450":47,"./full-job/dymo/dymo-wireless/dymo-wireless":49,"./full-job/escpos/escpos":51,"./full-job/jpg/jpgArrayDecoder":52,"./full-job/pwg/PWGDecocerCls":53,"./full-job/star-graphics/star-graphics":56,"./streaming/epl/EPLEncoder":58,"./streaming/pcl/pcl3GUI/pcl3GUIEncoder_v4":60,"./streaming/pcl/pcl5-mono/pcl5MonoStreamingEncoder":61,"./streaming/pcl/pcl5/pcl5StreamingEncoder":62,"./streaming/pcl/pcl6/pcl6StreamingEncoder":64,"./streaming/pcl/pcl6/pxljrStreamingEncoder":65,"./streaming/pclm/pclmStreamingEncoder":66,"./streaming/pdf/pdfStreamingEncoder":67,"./streaming/ps/psStreamingEncoder":69,"./streaming/ps/psStreamingEncoder2":70,"./streaming/pwg/pwgStreamingEncoder":71,"./streaming/sbpl/SBPLEncoder":72,"./streaming/urf/urfStreamingEncoder_v2":73,"./streaming/zpl2/ZPLEncoder":74}],58:[function(require,module,exports){
const Encoder=require("../../encoder"),debug=require("../../../debugConsole"),MM_TO_INCHES=.0393701;class EPLStreamingEncoder extends Encoder{constructor(i,t,e,r,n){super(i,t,e,r,n,"streaming","epl"),debug("[EPLStreamingEncoder] constructor enter"),this._dpi=203,this._dpioConfig&&this._dpioConfig.printer_config_dpi&&(this._dpi=parseInt(this._dpioConfig.printer_config_dpi)),debug("[EPLStreamingEncoder] constucted:",this)}_addLine(i){this._push(i+"\n")}addImagePage(i){this._printTicket&&this._printTicket.print&&this._printTicket.print.media_size&&this._printTicket.print.media_size?(debug("[EPLStreamingEncoder] Print ticket has dimensions"),this._width=Math.round(MM_TO_INCHES*(this._printTicket.print.media_size.width_microns/1e3)),i.orientation!==this.getTicketMediaOrientation()&&(debug("ticket and raster orientation mismatch: rotate 90"),i.rotate(90))):(debug("[EPLStreamingEncoder] Calculating label input width dimension from image size"),this._width=i.dimensions().widthIn),this._output="",this._addLine("N"),i.resizeToWidth(Math.floor(this._width*this._dpi));var t=128;this._dpioConfig&&this._dpioConfig.dither_threshold&&(t=parseInt(this._dpioConfig.dither_threshold)),this._dpioConfig&&this._dpioConfig.printer_config_dither&&"bayer"===this._dpioConfig.printer_config_dither?i.dither(t,"bayer"):i.binaryFilterThreshold(t);var e=parseInt(i.width/8)+(i.width%8==0?0:1),r=new Uint8Array(e);this._push(`GW0,0,${e},${i.height},`);for(var n=0;n<i.height;n++){i.nextLine1BitArr(r);for(let i=0;i<e;i++)r[i]=~r[i];this._push(r,e)}this._push(10),this._addLine("P");for(var d=this._output,o=1;o<this._copies;o++)d+=this._output;return debug("[EPLStreamingEncoder] page done"),d}finalise(){debug("[EPLStreamingEncoder] print done")}}module.exports=EPLStreamingEncoder;

},{"../../../debugConsole":30,"../../encoder":41}],59:[function(require,module,exports){
module.exports={ESC:27,FF:12,enter:{pjl:["%-12345X"]},reset_and_test:{reset:["E"]},modes:{enter_hp_rtl_mode:["%0A"],enter_hp_gl2_mode:["%0B"]},rtl:{turn_off_source_transparency:["*v1N"],turn_off_pattern_transparency:["*v1O"],no_negative_motion:["&a1N"],configure_raster_data:["*g","#","W"]},page:{horizontal_position:["&a","#","H"],vertical_position:["&a","#","V"],horizontal_column_spacing:["&k","#","H"],set_lpi:["&l","#","D"],job_margin_top_no_lines:["&l","#","E"],job_margin_left_no_lines:["&a","#","L"],portrait:["&l0O"],page_length_lines:["&l","#","P"],media_type:["&l","#","M"]},raster:{dpi:["*t","#","R"],start_at_left_margin:["*r0A"],start_at_cur_cursor:["*r1A"],start_at_cur_cursor_with_scaling:["*r3A"],laserjet_landscape:["*r3F"],width:["*r","#","S"],height:["*r","#","T"],destination_width:["*r","#","H"],destination_height:["*r","#","V"],width_height:["*r","#","s","#","T"],end_graphics:["*rB"],end_graphics_two:["*rC"],move_x_raster_lines:["*b","#","Y"],uncompressed:["*b0M"],rle:["*b1M"],tiff:["*b2M"],num_graphics_data_bytes:["*b","#","W"],num_graphics_data_bytes_plane:["*b","#","V"],skip_raster_lines:["*b","#","Y"],driver_config:["*o","#","W"]},pcl_color:{image_bytes:["*v","6","W",0,3,0,8,8,8],image_bytes_planar:["*v","6","W",0,2,0,8,8,8]},deskjet:{print_quality:["*o","#","M"],cymk:["*r-4U"],cym:["*r-3U"]},pcl_paper_control:{tray1:["&l4H"],tray2:["&l1H"],tray3:["&l5H"],tray4:["&l8H"],simplex:["&l0S"],duplex_long_edge:["&l1S"],duplex_short_edge:["&l2S"],next_face:["&a0G"],front_face:["&a1G"],rear_face:["&a2G"],source_auto:["&l7H"],plain_paper:["&l0M"],quality_normal:["*o0M"],page_size_a4:["&l26A"],page_size:["&l","#","A"],top_margin_0:["&l0E"],perforation_skip_disable:["&l0L"],unit_of_measure_300:["&u300D"],copies:["&l","#","X"]},paper:{a4:["&l26A"]},matchPaperSize:function(e,r,a){const t={eLetterPaper:{id:2,size:"8.5 x 11"},eLegalPaper:{id:3,size:"8.5 x 14"},eExecPaper:{id:1,size:"7 x 10"},eLedgerPaper:{id:6,size:"17 x 11"},eA3Paper:{id:27,size:"297 x 420"},eA4Paper:{id:26,size:"210 x 297"},eA5Paper:{id:25,size:"148 x 210"},eJB4Paper:{id:46,size:"257 × 364"},eJB5Paper:{id:45,size:"182 × 257"},eCOM10Envelope:{id:81,size:"4.125 x 9.5"},eMonarchEnvelope:{id:80,size:"3.875 x 7.5"},eC5Envelope:{id:91,size:"229 x 162"},eDLEnvelope:{id:90,size:"4.313 x 8.625"},eB5Envelope:{id:100,size:"176 x 250"},eJPostcard:{id:71,size:"148 x 105"}};a=a||300;var i=t.eLetterPaper.id;return Object.keys(t).some(function(_){var s=t[_].size.split(" x "),n=parseFloat(s[0]),l=parseFloat(s[1]);if((n>100||l>100)&&(n/=25.4,l/=25.4),n=Math.ceil(n*a),l=Math.ceil(l*a),e<n+.02*n&&e>n-.02*n&&r<l+.02*l&&r>l-.02*l)return i=t[_].id,!0}),i}};

},{}],60:[function(require,module,exports){
const debug=require("../../../../debugConsole");function pcl3GUIEncoder(e,r,t,n){const a=require("../../../coders/tiff/tiff_v4b"),i=require("../../../../debugConsole"),o=require("../commands");var p={mode:"streaming"},s="",l=0;const c=64,d=n&&n.print&&n.print.copies&&n.print.copies.copies&&parseInt(n.print.copies.copies)||1;function _(e,r){if(r){var t=String.fromCharCode.apply(null,e.subarray(0,r));s+=t}else"string"==typeof e?s+=e:"number"==typeof e?s+=String.fromCharCode(e):"object"==typeof e&&(s+=String.fromCharCode(e))}function g(e){_(o.ESC),_(e[0]);var r=1;if(e.length>1)for(var t=1;t<e.length;t++)"#"===e[t]?(i("push arg "+r+" from "+JSON.stringify(arguments)),_(arguments[r++])):_(e[t])}i(`[PCL3GUI encoder] New encoder: Duplex ${r}, copies ${d}`);for(var f=0;f<1200;f++)_(0);return g(o.reset_and_test.reset),p.finalise=function(){return s="",g(o.reset_and_test.reset),s},p.addImagePage=function(e){l>0&&(s=""),g(o.page.set_lpi,"6"),g(o.page.horizontal_column_spacing,"12"),g(o.page.portrait),g(o.paper.a4),g(o.page.page_length_lines,"70"),g(o.pcl_paper_control.perforation_skip_disable),g(o.pcl_paper_control.top_margin_0),g(o.deskjet.print_quality,"1"),g(o.page.media_type,"0"),d&&d>1&&(i("[PCL3GUI encoder] Setting copies"),g(o.pcl_paper_control.copies,`${d}`)),!0===r?(i("[PCL3GUI encoder] Duplex on"),g(o.pcl_paper_control.duplex_long_edge)):i("[PCL3GUI encoder] Duplex off"),i("[PCL3GUI encoder] Encoder mode: TIFF"),g(o.raster.dpi,e.dpi.toString()),g(o.deskjet.cymk),g(o.raster.tiff),g(o.page.horizontal_position,"0"),g(o.page.vertical_position,"0"),g(o.raster.width,e.width.toString()),g(o.raster.height,e.height.toString());var t=a,n=0;let p=Math.ceil(e.width/8);var f=new Uint8ClampedArray(p),u=new Uint8ClampedArray(p),h=new Uint8ClampedArray(p),m=new Uint8ClampedArray(p),C=new Uint8ClampedArray(4*e.width),y=new Uint8Array(2*e.width);g(o.raster.start_at_cur_cursor),e.brightness(10),e.toKCMY(),e.planarDitherBayer();for(var w=0;w<e.height;w++){e.nextLineKCMYArr(C),f.fill(0),u.fill(0),h.fill(0),m.fill(0);for(var U=0;U<e.width;U++){let e=parseInt(U/8),r=7-U%8;C[4*U+0]>c?m[e]=m[e]|1<<r:(C[4*U+1]>c&&(f[e]=f[e]|1<<r),C[4*U+2]>c&&(u[e]=u[e]|1<<r),C[4*U+3]>c&&(h[e]=h[e]|1<<r))}let r;r=t(m,y),g(o.raster.num_graphics_data_bytes_plane,r.toString()),r>0&&_(y,r),n+=r,r=t(f,y),g(o.raster.num_graphics_data_bytes_plane,r.toString()),r>0&&_(y,r),n+=r,r=t(u,y),g(o.raster.num_graphics_data_bytes_plane,r.toString()),r>0&&_(y,r),n+=r,r=t(h,y),g(o.raster.num_graphics_data_bytes,r.toString()),r>0&&_(y,r),n+=r}return g(o.raster.end_graphics_two),g(o.pcl_paper_control.next_face),l++,i("[PCL3GUI encoder] Encoded data length: "+n),s},p}module.exports=pcl3GUIEncoder;

},{"../../../../debugConsole":30,"../../../coders/tiff/tiff_v4b":39,"../commands":59}],61:[function(require,module,exports){
function pclEncoder(e,r,t,n){const o=require("../../../coders/tiff/tiff_v4b"),i=require("../../../coders/rle/rle"),a=require("../../../../debugConsole"),c=require("../commands");var p={mode:"streaming"},s="",d=0;const g=1,l=0,m=2,_=n&&n.print&&n.print.copies&&n.print.copies.copies&&parseInt(n.print.copies.copies)||1;function f(e,r){if(r){var t=String.fromCharCode.apply(null,e.subarray(0,r));s+=t}else"string"==typeof e?s+=e:"number"==typeof e?s+=String.fromCharCode(e):"object"==typeof e&&(s+=String.fromCharCode(e))}function h(e){f(c.ESC),f(e[0]);var r=1;if(e.length>1)for(var t=1;t<e.length;t++)"#"===e[t]?f(arguments[r++]):f(e[t])}return h(c.reset_and_test.reset),!0===r?(a("[PCL-mono Streaming encoder] Duplex on"),h(c.pcl_paper_control.duplex_long_edge)):a("[PCL-mono Streaming encoder] New encoder, duplex off"),p.finalise=function(){return s="",h(c.reset_and_test.reset),s},p.addImagePage=function(e,t){var p;void 0===t&&(t=m),e.atkinsonDither(),0===d?function(e,r){h(c.raster.laserjet_landscape),a("[PCL-mono Streaming encoder] New page, width: "+e.width.toString()+" height: "+e.height.toString()),h(c.raster.width_height,e.width.toString(),e.height.toString()),h(c.raster.dpi,e.dpi.toString());let t=c.matchPaperSize(e.width,e.height,e.dpi)||2;h(c.pcl_paper_control.page_size,`${t}`),a(`[PCL-mono Streaming encoder] Page size code ${t}`),!1===(n&&n.print&&void 0!==n.print.collate&&!0===n.print.collate.collate||!1)&&_&&_>1&&(a("[PCL-mono Streaming encoder] Setting copies"),h(c.pcl_paper_control.copies,`${_}`)),h(c.page.job_margin_top_no_lines,"0"),h(c.page.job_margin_left_no_lines,"0")}(e):s="",a("[PCL-mono Streaming encoder] Encoder mode: "+(t===g?"RLE":"TIFF")),r?1&d?(a("[PCL-mono Streaming encoder] Rear face"),h(c.pcl_paper_control.rear_face)):(a("[PCL-mono Streaming encoder] Font face"),h(c.pcl_paper_control.front_face)):a("[PCL-mono Streaming encoder] Will use form-feed to signal next sheet (simplex)"),t===m?p=o:t===g?p=i:t===l&&(p=function(e){for(var r="",t=0;t<e.length;t++)r+=String.fromCharCode(e[t]);return r});var u=parseInt(e.width/8)+(e.width%8==0?0:1),S=new Array(u),C=new Uint8Array(3*e.width),P=0;h(c.raster.start_at_left_margin),h(c.raster.move_x_raster_lines,"0"),t&&0!==t?t&&1===t?h(c.raster.rle):t&&2===t&&h(c.raster.tiff):h(c.raster.uncompressed);for(var L=0;L<e.height;L++){var v=0;e.nextLine1BitArr(S),v=p(S,C),h(c.raster.num_graphics_data_bytes,v.toString()),P+=v,f(C,v)}return a("[PCL-mono Streaming encoder] PCL Mono page length",P),h(c.raster.end_graphics),r||(a("[PCL-mono Streaming encoder] Sending FF (simplex only)"),f(c.FF)),d++,s},p}module.exports=pclEncoder;

},{"../../../../debugConsole":30,"../../../coders/rle/rle":38,"../../../coders/tiff/tiff_v4b":39,"../commands":59}],62:[function(require,module,exports){
function pclEncoder(e,r,t,n){const o=require("../../../coders/tiff/tiff_v4b"),i=require("../../../coders/rle/rle"),a=require("../../../../debugConsole"),s=require("../commands");var c={mode:"streaming"},p="",l=0;const d=1,g=0,_=2,f=["UNCOMPRESSED","RLE","TIFF"],m=n&&n.print&&n.print.copies&&n.print.copies.copies&&parseInt(n.print.copies.copies)||1;function u(e,r){if(r){var t=String.fromCharCode.apply(null,e.subarray(0,r));p+=t}else"string"==typeof e?p+=e:"number"==typeof e?p+=String.fromCharCode(e):"object"==typeof e&&(p+=String.fromCharCode(e))}function h(e){u(s.ESC),u(e[0]);var r=1;if(e.length>1)for(var t=1;t<e.length;t++)"#"===e[t]?u(arguments[r++]):u(e[t])}function C(e){return String.fromCharCode.apply(null,e)}return h(s.reset_and_test.reset),!0===r?(a("[PCL streaming encoder] New encoder, duplex on"),h(s.pcl_paper_control.duplex_long_edge)):a("[PCL streaming encoder] New encoder, duplex off"),c.finalise=function(){return p="",h(s.reset_and_test.reset),p},c.addImagePage=function(e,t){var c;void 0===t&&(t=_),0===l?function(e,r,t,o){h(s.raster.laserjet_landscape),a("[PCL streaming encoder] New page, width: "+e+" height: "+r),h(s.raster.width_height,e,r),h(s.raster.dpi,t);let i=s.matchPaperSize(e,r,t)||2;h(s.pcl_paper_control.page_size,`${i}`),a(`[PCL streaming encoder] Page size code ${i}`),!1===(n&&n.print&&void 0!==n.print.collate&&!0===n.print.collate.collate||!1)&&m&&m>1&&(a("[PCL streaming encoder] Setting copies"),h(s.pcl_paper_control.copies,`${m}`)),h(s.page.job_margin_top_no_lines,"0"),h(s.page.job_margin_left_no_lines,"0"),h(s.pcl_color.image_bytes)}(e.width.toString(),e.height.toString(),e.dpi.toString()):p="",a("[PCL streaming encoder] Mode: "+f[t]),r?1&l?(a("[PCL streaming encoder] Rear face"),h(s.pcl_paper_control.rear_face)):(a("[PCL streaming encoder] Font face"),h(s.pcl_paper_control.front_face)):a("[PCL streaming encoder] Will use form-feed to signal next sheet (simplex)"),t===_?c=o:t===d?c=i:t===g&&(c=C);var P=0,L=new Uint8Array(3*e.width),S=new Uint8Array(4*e.width);h(s.raster.start_at_left_margin),h(s.raster.move_x_raster_lines,"0"),t&&0!==t?t&&1===t?h(s.raster.rle):t&&2===t&&h(s.raster.tiff):h(s.raster.uncompressed);for(var v=0;v<e.height;v++){var y=0;e.nextLineRGBArr(L),y=c(L,S),h(s.raster.num_graphics_data_bytes,y.toString()),u(S,y),P+=y}return h(s.raster.end_graphics),a("[PCL streaming encoder] PCL encoded data length: "+P),r||(a("[PCL streaming encoder] Sending FF (simplex only)"),u(s.FF)),l++,p},c}module.exports=pclEncoder;

},{"../../../../debugConsole":30,"../../../coders/rle/rle":38,"../../../coders/tiff/tiff_v4b":39,"../commands":59}],63:[function(require,module,exports){
module.exports=function(){var e={PCL_DATA_TYPES:{attr_ubyte:248,attr_uint16:249,embedded_data:250,embedded_data_byte:251,real32:197,real32_array:205,real32_box:229,real32_xy:213,sint16:195,sint16_array:203,sint16_box:227,sint16_xy:211,sint32:196,sint32_array:204,sint32_box:228,sint32_xy:212,ubyte:192,ubyte_array:200,ubyte_box:224,ubyte_xy:208,uint16:193,uint16_array:201,uint16_box:225,uint16_xy:209,uint32:194,uint32_array:202,uint32_box:226,uint32_xy:210},PCL_ATTR:{1:"",2:"PaletteDepth",3:"ColorSpace",4:"NullBrush",5:"NullPen",6:"PaletteData",7:"",8:"PatternSelectID",9:"GrayLevel",10:"",11:"RGBColor",12:"PatternOrigin",13:"NewDestinationSize",14:"PrimaryArray",15:"PrimaryDepth",16:"",17:"",18:"",19:"",20:"",21:"",22:"",23:"",24:"",25:"",26:"",27:"",28:"",29:"",30:"",31:"",32:"",33:"DeviceMatrix",34:"DitherMatrixDataType",35:"DitherOrigin",36:"",37:"MediaSize",38:"MediaSource",39:"MediaType",40:"Orientation",41:"PageAngle",42:"PageOrigin",43:"PageScale",44:"ROP3",45:"TxMode",46:"",47:"CustomMediaSize",48:"CustomMediaSizeUnits",49:"PageCopies",50:"DitherMatrixSize",51:"DitherMatrixDepth",52:"SimplexPageMode",53:"DuplexPageMode",54:"DuplexPageSide",55:"",56:"",57:"",58:"",59:"",60:"",61:"",62:"",63:"",64:"",65:"ArcDirection",66:"BoundingBox",67:"DashOffset",68:"EllipseDimension",69:"EndPoint",70:"FillMode",71:"LineCapStyle",72:"LineJoinStyle",73:"MiterLength",74:"LineDashStyle",75:"PenWidth",76:"Point",77:"NumberOfPoints",78:"SolidLine",79:"StartPoint",80:"PointType",81:"ControlPoint1",82:"ControlPoint2",83:"ClipRegion",84:"ClipMode",85:"",86:"",87:"",88:"",89:"",90:"",91:"",92:"",93:"",94:"",95:"",96:"",97:"",98:"ColorDepth",99:"BlockHeight",100:"ColorMapping",101:"CompressMode",102:"DestinationBox",103:"DestinationSize",104:"PatternPersistence",105:"PatternDefineID",106:"",107:"SourceHeight",108:"SourceWidth",109:"StartLine",110:"PadBytesMultiple",111:"BlockByteLength",112:"",113:"",114:"",115:"NumberOfScanLines",116:"",117:"",118:"",119:"",120:"",121:"",122:"",123:"",124:"",125:"",126:"",127:"",128:"",129:"CommentData",130:"DataOrg",131:"",132:"",133:"",134:"Measure",135:"",136:"SourceType",137:"UnitsPerMeasure",138:"",139:"StreamName",140:"StreamDataLength",141:"",142:"",143:"ErrorReport",144:"",145:"JRExtension",146:"JRDataLength",147:"JRStripCount",148:"JRStripHeight",149:"JRVersion",150:"JRTextObjectType",151:"JRColorMode",152:"JRColorEnumeration",153:"Reserved",154:"Reserved",155:"Reserved",156:"Reserved",157:"Reserved",158:"Reserved",159:"Reserved",160:"",161:"CharAngle",162:"CharCode",163:"CharDataSize",164:"CharScale",165:"CharShear",166:"CharSize",167:"FontHeaderLength",168:"FontName",169:"FontFormat",170:"SymbolSet",171:"TextData",172:"CharSubModeArray",173:"",174:"",175:"XSpacingData",176:"YSpacingData",177:"CharBoldValue",178:"",179:""},PCL_OPERATORS:{ArcPath:145,BeginChar:82,BeginFontHeader:79,BeginImage:176,BeginPage:67,JetReady:70,BeginRastPattern:179,BeginScan:182,BeginSession:65,BeginStream:91,BezierPath:147,BezierRelPath:149,Chord:150,ChordPath:151,CloseDataSource:73,CloseSubPath:132,Comment:71,Ellipse:152,EllipsePath:153,EndChar:84,EndFontHeader:81,EndImage:178,EndPage:68,EndRastPattern:181,EndScan:184,EndSession:66,EndStream:93,ExecStream:94,LinePath:155,LineRelPath:157,NewPath:133,OpenDataSource:72,PaintPath:134,Pie:158,PiePath:159,PopGS:96,PushGS:97,ReadChar:83,ReadFontHeader:80,ReadImage:177,ReadRastPattern:180,ReadStream:92,Rectangle:160,RectanglePath:161,RemoveFont:85,SetCharAttributes:86,RemoveStream:95,RoundRectangle:162,RoundRectanglePath:163,ScanLineRel:185,SetClipReplace:98,SetBrushSource:99,SetCharAngle:100,SetCharBoldValue:125,SetCharScale:101,SetCharShear:102,SetCharSubMode:129,SetClipIntersect:103,SetClipMode:127,SetClipRectangle:104,SetClipToPage:105,SetColorSpace:106,SetCursor:107,SetCursorRel:108,SetHalftoneMethod:109,SetFillMode:110,SetFont:111,SetLineCap:113,SetLineDash:112,SetLineJoin:114,SetMiterLimit:115,SetPageDefaultCTM:116,SetPageOrigin:117,SetPageRotation:118,SetPageScale:119,SetPathToClip:128,SetPatternTxMode:120,SetPenSource:121,SetPenWidth:122,SetROP:123,SetSourceTxMode:124,Text:168,TextPath:169},VALUES:{ePortraitOrientation:0,eLandscapeOrientation:1,eBinaryLowByteFirst:1,eLetterPaper:0,eLegalPaper:1,eA4Paper:2,eGray:1,eRGB:2,eJRColorSpace:6,eDirectPixel:0,e8Bit:2,eNoCompression:0,eRLECompression:1,eJPEGCompression:2,thirtyTwoBits:4,eInch:0,eMillimeter:1,eNWErrorPage:2,eDefaultDataSource:0,eDuplexHorizontalBinding:0,eDuplexVerticalBinding:1},JETREADY:{BeginImage:1752186880,ReadImage:1752186881,EndImage:1752186882,JrQuantTableHeader:[0,128,0,3,0,0],JRControlHeader_color:[1,128,44,0,0,0,1,224,20,102,1,0,0,0,0,32,0,0,0,0,0,0,0,0,0,0,0,32,0,0,0,224,0,0,0,0,0,0,0,32,0,0,0,0,0,0,0,224,0,0],JRQuantTable:[2,3,4,5,5,5,5,5,3,6,5,8,5,8,5,8,4,5,5,5,5,5,5,5,5,8,5,8,5,8,5,8,5,5,5,5,5,5,5,5,5,8,5,8,5,8,5,8,5,5,5,5,5,5,5,5,5,8,5,8,5,8,5,8]},PAPER_ENUMS:{eLetterPaper:{id:0,size:"8.5 x 11"},eLegalPaper:{id:1,size:"8.5 x 14"},eA4Paper:{id:2,size:"210 x 297"},eExecPaper:{id:3,size:"7 x 10"},eLedgerPaper:{id:4,size:"11 x 17"},eA3Paper:{id:5,size:"297 x 420"},eCOM10Envelope:{id:6,size:"4.125 x 9.5"},eMonarchEnvelope:{id:7,size:"3.875 x 7.5"},eC5Envelope:{id:8,size:"162 x 229"},eDLEnvelope:{id:9,size:"4.313 x 8.625"},eJB4Paper:{id:10,size:"257 × 364"},eJB5Paper:{id:11,size:"182 × 257"},eB5Envelope:{id:12,size:"176 x 250"},eJPostcard:{id:14,size:"105 x 148"},eA5Paper:{id:16,size:"148 x 210"},eA6Paper:{id:17,size:"105 x 148"},eJB6Paper:{id:18,size:"128 × 182"}},matchPaperSize:function(t,a,i){i=i||300;var r=e.PAPER_ENUMS.eLetterPaper.id;return Object.keys(e.PAPER_ENUMS).some(function(n){var o=e.PAPER_ENUMS[n].size.split(" x "),P=parseFloat(o[0]),S=parseFloat(o[1]);if((P>100||S>100)&&(P/=25.4,S/=25.4),P=Math.ceil(P*i),S=Math.ceil(S*i),t<P+.02*P&&t>P-.02*P&&a<S+.02*S&&a>S-.02*S)return r=e.PAPER_ENUMS[n].id,!0}),r},PCL_ATTRIBUTES:{}};return Object.keys(e.PCL_ATTR).forEach(function(t){e.PCL_ATTRIBUTES[e.PCL_ATTR[t]]=parseInt(t)}),e.DATA_TYPES_MAP={},Object.keys(e.PCL_DATA_TYPES).forEach(function(t){e.DATA_TYPES_MAP[e.PCL_DATA_TYPES[t]]=t}),e.VALUES_MAP={},Object.keys(e.VALUES).forEach(function(t){e.VALUES_MAP[e.VALUES[t]]=t}),e.OPS_MAP={},Object.keys(e.PCL_OPERATORS).forEach(function(t){e.OPS_MAP[e.PCL_OPERATORS[t]]=t}),e.JETREADY_MAP={},Object.keys(e.JETREADY).forEach(function(t){e.JETREADY_MAP[e.JETREADY[t]]=t}),e}();

},{}],64:[function(require,module,exports){
module.exports=function(e,t,i,o){const n=require("./pcl6Constants"),r=require("../../../coders/jpeg/jpeg"),a=require("../../../coders/jpeg/jpeg-mono"),d=(require("../../../coders/tiff/tiff_v4b"),require("../../../../debugConsole")),p=require("../../../filters/imageFilter");var u=!1,g=1,c=1,s=!1,l=!1,h=!1,S=!0,P={mode:"streaming"},E=`) HP-PCL XL;2;0;Comment directprint.io PCL6 implementation copyright ${(new Date).getFullYear()}`+"\n";function L(e,t){t=t||1;for(var i=0;i<t;)E+=String.fromCharCode(e>>8*i++&255)}function f(e){L(n.PCL_OPERATORS[e])}function C(e,t,i){L(n.PCL_DATA_TYPES[i]);var o,r=1;i.indexOf("16")>-1?r=2:i.indexOf("32")>-1&&(r=4),Array.isArray(t)?t.forEach(function(e){L(e,r)}):L(t,r),o=e,L(n.PCL_DATA_TYPES.attr_ubyte),L(n.PCL_ATTRIBUTES[o])}function y(e){L(n.PCL_DATA_TYPES.embedded_data),L(e.length,n.VALUES.thirtyTwoBits),E+=e}function A(e,t){if(C("Point",[0,t],"sint16_xy"),f("SetCursor"),C("ColorMapping",n.VALUES.eDirectPixel,"ubyte"),C("ColorDepth",n.VALUES.e8Bit,"ubyte"),C("SourceWidth",Math.round(e.width),"uint16"),C("SourceHeight",Math.round(e.height),"uint16"),C("DestinationSize",[Math.round(e.width),Math.round(e.height)],"uint16_xy"),f("BeginImage"),C("StartLine",0,"uint16"),C("BlockHeight",e.height,"uint16"),C("CompressMode",n.VALUES.eJPEGCompression,"ubyte"),f("ReadImage"),"string"==typeof e.data)y(e.data);else{d("Converting img object to string"),y(function(e){var t,i=e.length,o="";for(t=0;t<i;t++)o+=String.fromCharCode(e[t]);return o}(e.data))}e=null,f("EndImage")}return c=o&&o.print&&o.print.copies&&o.print.copies.copies&&parseInt(o.print.copies.copies)||1,o&&o.dpio&&!0===o.dpio.mono&&(u=!0),i&&"disable"===i.directprint_pdl_config_options_pdlcopies?(c=1,d("[PCL6] Config has disabled PCL6 PDL copies")):i&&"enable"===i.directprint_pdl_config_options_pdlcopiescollate?(d("[PCL6] Config has enabled PCL6 PDL copies as collate is enabled"),d(`[PCL6] Retaining ${c} in PDL`)):(s=o&&o.print&&void 0!==o.print.collate&&!0===o.print.collate.collate||!1)&&(c=1,d("[PCL6] Disabled copies in PDL as collate set")),i&&"enable"===i.directprint_pdl_config_options_pdlusestripencoder&&(d("[PCL6] Using strip encoding (vs fullpage)"),h=!0),i&&"enable"===i.directprint_pdl_config_options_pdlincludeffateof&&(d("[PCL6] Including extra FF at EOF"),l=!0),i&&"color"===i.directprint_pdl_config_options_pdlforcejpegencodertype&&(d("[PCL6] Disabling mono JPEG encoder, forcing color encoding"),S=!1),d(`[PCL6] Encoder created: copies: ${c}, collate: ${s}, mono: ${u}, FF@EOF: ${l}, strip encode: ${h}`),P.addImagePage=function(e){d("[PCL6] Page: "+g+" res "+e.width+" x "+e.height+" duplex = "+t),1===g?(C("Measure",n.VALUES.eInch,"ubyte"),C("UnitsPerMeasure",[e.dpi,e.dpi],"uint16_xy"),C("ErrorReport",n.VALUES.eNWErrorPage,"ubyte"),f("BeginSession"),C("SourceType",n.VALUES.eDefaultDataSource,"ubyte"),C("DataOrg",n.VALUES.eBinaryLowByteFirst,"ubyte"),f("OpenDataSource")):E="",C("Orientation",n.VALUES.ePortraitOrientation,"ubyte");var i,o=n.matchPaperSize(e.width,e.height,e.dpi);if(d(`Papersize code ${o}`),C("MediaSize",o,"ubyte"),void 0!==t&&("LONG_EDGE"===t?C("DuplexPageMode",n.VALUES.eDuplexVerticalBinding,"ubyte"):"SHORT_EDGE"===t&&C("DuplexPageMode",n.VALUES.eDuplexHorizontalBinding,"ubyte")),f("BeginPage"),C("Point",[0,0],"sint16_xy"),f("SetCursor"),C("ColorSpace",u&&S?n.VALUES.eGray:n.VALUES.eRGB,"ubyte"),f("SetColorSpace"),C("ColorMapping",n.VALUES.eDirectPixel,"ubyte"),C("ColorDepth",n.VALUES.e8Bit,"ubyte"),C("SourceWidth",Math.round(e.width),"uint16"),C("SourceHeight",Math.round(e.height),"uint16"),C("DestinationSize",[Math.round(e.width),Math.round(e.height)],"uint16_xy"),f("BeginImage"),C("StartLine",0,"uint16"),C("BlockHeight",e.height,"uint16"),C("CompressMode",n.VALUES.eJPEGCompression,"ubyte"),f("ReadImage"),"string"==typeof(i=u&&S?a.encode(e.toRGBA(),90):r.encode(e.toRGBA(),90)).data)d("No string conversion necessary"),y(i.data);else{d("Converting img object to string"),y(function(e){var t,i=e.length,o="";for(t=0;t<i;t++)o+=String.fromCharCode(e[t]);return o}(i.data)),d(i.data)}return i=null,f("EndImage"),d("copies: "+c),C("PageCopies",c,"uint16"),f("EndPage"),g++,E},P.addImagePageStripEncoder=function(e){d("[PCL6] Page strip encoder: "+g+" res "+e.width+" x "+e.height+" duplex = "+t),1===g?(C("Measure",n.VALUES.eInch,"ubyte"),C("UnitsPerMeasure",[e.dpi,e.dpi],"uint16_xy"),C("ErrorReport",n.VALUES.eNWErrorPage,"ubyte"),f("BeginSession"),C("SourceType",n.VALUES.eDefaultDataSource,"ubyte"),C("DataOrg",n.VALUES.eBinaryLowByteFirst,"ubyte"),f("OpenDataSource")):E="",C("Orientation",n.VALUES.ePortraitOrientation,"ubyte");var i=n.matchPaperSize(e.width,e.height,e.dpi);d(`Papersize code ${i}`),C("MediaSize",i,"ubyte"),void 0!==t&&("LONG_EDGE"===t?C("DuplexPageMode",n.VALUES.eDuplexVerticalBinding,"ubyte"):"SHORT_EDGE"===t&&C("DuplexPageMode",n.VALUES.eDuplexHorizontalBinding,"ubyte")),f("BeginPage"),C("ColorSpace",u&&S?n.VALUES.eGray:n.VALUES.eRGB,"ubyte"),f("SetColorSpace");let o=Math.floor(e.height/64),s=e.height%64;if(d(`[PCL6] Strips: ${o}, 1st strip ${s}`),s>=8){let t,i=new p({data:e.getJPEGStrip(0,s),width:e.width,height:s,bpp:32,Bpp:4,dpi:300});A(t=u&&S?a.encode(i.toRGBA(),90):r.encode(i.toRGBA(),90),i.height-s)}else d(`[PCL6] skipping first strip smaller than minimum JPEG height ${s}`);for(let t=0;t<o;t++){let i,o=new p({data:e.getJPEGStrip(t,64,s),width:e.width,height:64,bpp:32,Bpp:4,dpi:300});A(i=u&&S?a.encode(o.toRGBA(),90):r.encode(o.toRGBA(),90),s+64*t)}return d("copies: "+c),C("PageCopies",c,"uint16"),f("EndPage"),g++,E},P.finalise=function(){return E="",f("CloseDataSource"),f("EndSession"),!0===l&&(E+="\f",d("[PLC6] Appending FF: Use of PCL6 form feed (0x0c) requires validation")),E},!0===h&&(P.addImagePage=P.addImagePageStripEncoder),P};

},{"../../../../debugConsole":30,"../../../coders/jpeg/jpeg":36,"../../../coders/jpeg/jpeg-mono":35,"../../../coders/tiff/tiff_v4b":39,"../../../filters/imageFilter":43,"./pcl6Constants":63}],65:[function(require,module,exports){
module.exports=function(e,t,r,n){const i=require("./pcl6Constants"),a=require("../../../coders/desert/desertEncoder_opt1"),o=(require("../../../filters/imageFilter"),require("../../../../debugConsole")),u={[Number.parseFloat(8.5/11).toFixed(2)]:{type:i.VALUES.eLetterPaper,x:4928,y:6400},[Number.parseFloat(21/29.7).toFixed(2)]:{type:i.VALUES.eA4Paper,x:4768,y:6784},[Number.parseFloat(8.25/14).toFixed(2)]:{type:i.VALUES.eLegalPaper,x:4768,y:8064}};var y={mode:"streaming"},d=") HP-PCL XL;3;0;Comment PCL-XL JetReady generator\n",g=1;function S(e,t){t=t||1;for(var r=0;r<t;)d+=String.fromCharCode(e>>8*r++&255)}function p(e){S(i.PCL_OPERATORS[e])}function s(e,t,r){S(i.PCL_DATA_TYPES[r]);var n,a=1;r.indexOf("16")>-1?a=2:r.indexOf("32")>-1&&(a=4),Array.isArray(t)?t.forEach(function(e){S(e,a)}):S(t,a),n=e,S(i.PCL_DATA_TYPES.attr_ubyte),S(i.PCL_ATTRIBUTES[n])}return y.addImagePage=function(e){o("[PCL6] Page: "+g+" res "+e.width+" x "+e.height+" duplex = "+t+" dpi "+e.dpi),1===g?(s("Measure",i.VALUES.eInch,"ubyte"),s("UnitsPerMeasure",[600,600],"uint16_xy"),s("ErrorReport",i.VALUES.eNWErrorPage,"ubyte"),p("BeginSession"),s("SourceType",i.VALUES.eDefaultDataSource,"ubyte"),s("DataOrg",i.VALUES.eBinaryLowByteFirst,"ubyte"),p("OpenDataSource")):d="",s("Orientation",i.VALUES.ePortraitOrientation,"ubyte");var r,n,y,l=(r=e.width,n=e.height,y=Number.parseFloat(r/n).toFixed(2),o("Paper type: "+u[y]+" ratio "+y),u[y]||{type:i.VALUES.eLetterPaper,x:4928,y:6400});s("MediaSize",l.type,"ubyte"),t&&!0===t&&s("DuplexPageMode",i.VALUES.eDuplexVerticalBinding,"ubyte"),p("BeginPage"),s("PageOrigin",[100,100],"sint16_xy"),p("SetPageOrigin"),s("Point",[0,0],"sint16_xy"),p("SetCursor"),s("ColorSpace",i.VALUES.eJRColorSpace,"ubyte"),p("SetColorSpace"),s("JRExtension",i.JETREADY.BeginImage,"uint32"),o("Rounded width and height: w"+l.x+" h "+l.y),s("SourceWidth",l.x,"uint16"),s("SourceHeight",l.y,"uint16");var E=Math.round(Math.floor(l.y/128));s("JRStripCount",E,"uint16"),s("JRStripHeight",128,"uint16"),s("JRVersion",262144,"uint32"),s("JRColorMode",4,"ubyte"),s("JRColorEnumeration",0,"ubyte"),s("JRDataLength",0,"uint32"),p("JetReady");var x=new Uint8Array(3);x.fill(255);var c=new Uint8Array(3*l.x+3);c.fill(255);var R=new Uint8Array(128*l.x*3),A=new Uint8Array(3145728);e.toRGBInplace();for(var L=0;L<E;L++){o("Source "+e.width+"x"+e.height+" target "+l.x+"x"+l.y),e.getStrip4(L,R,l.x,128,l.y);var P=a(R,l.x,128,x,c,A);s("JRExtension",i.JETREADY.ReadImage,"uint32");var h=P.length;s("JRDataLength",h+6,"uint32"),s("StartLine",128*L,"uint16"),s("BlockHeight",128,"uint16"),s("JRVersion",262144,"uint32"),s("JRTextObjectType",0,"ubyte"),p("JetReady"),S(17,1),S(144,1),S(h,4);const t=10240;for(var C=0;h>0;){var f=h<t?h:t;d+=String.fromCharCode.apply(null,P.subarray(C,C+f)),C+=f,h-=f}}return s("JRExtension",i.JETREADY.EndImage,"uint32"),s("JRVersion",262144,"uint32"),p("JetReady"),p("EndPage"),g++,d},y.finalise=function(){return d="",p("CloseDataSource"),p("EndSession"),d},o("pxljrStreamingEncoder init"),y};

},{"../../../../debugConsole":30,"../../../coders/desert/desertEncoder_opt1":34,"../../../filters/imageFilter":43,"./pcl6Constants":63}],66:[function(require,module,exports){
var pdfEncoder=function(e,t,n,i){const r=require("../../coders/jpeg/jpeg"),o=(require("../../../debugConsole"),require("../../filters/imageFilter")),h="\n",a=90,g=600;var l=16;if(n&&n.pclm_strip_height){let e=parseInt(n.pclm_strip_height);e<8&&(l=8),e%8!=0&&(l=16)}var d,u={},s=0,c=0,p="",f=[],m=[],$=0;function C(e,t,n){return n=n||"0",(e+="").length>=t?e:new Array(t-e.length+1).join(n)+e}function D(e){p+=e}function P(e){D(e+h)}function R(e){P(e+" 0 obj"),j()}function j(){D("<< ")}function b(){P(">>")}function w(){P("endobj")}function I(){f.push(C(c+p.length,10))}var M=0;return P("%PDF-1.3"),P("%PCLm 1.0"),u.addImagePage=function(t){s>0&&(p="");let n=Math.floor(t.height/l)*l;t.resizeToFixedHeight(n,!0);let i=Math.ceil(t.width/t.dpi*72),u=Math.ceil(t.height/t.dpi*72);var f=Math.floor(t.height/l);I(),R(++$),m.push($),D("/Contents [ "+($+1)+" 0 R ] "),D("/MediaBox [ 0 0 "+i+" "+u+" ] "),D(`/Parent ${2+e*(2*f+2)} 0 R `),D("/Resources "),j(),D("/XObject "),j();for(let e=0;e<f;e++)D(`/Image${C(e,3)} ${$+2+2*e} 0 R `);b(),b(),P("/Type /Page"),b(),w();let M=[];M.push("0.120000 0 0 0.120000 0 0 cm");let T=t.height-l;for(let e=0;e<f;e++){M.push("/P <</MCID 0>> BDC q");let n=Math.round(g/t.dpi);M.push(`${t.width*n} 0 0 ${l*n} 0 ${T*n} cm`),M.push(`/Image${C(e,3)} Do Q`),T-=l}let v=M.join(h);I(),R(++$),P(`/Length ${v.length}`),b(),P("stream"),P(v),P("endstream"),w(),T=t.height;for(let e=0;e<f;e++){let n,i=new o({data:t.getJPEGStrip(e,l),width:t.width,height:l,bpp:32,Bpp:4});n=i.isBlank()?d||(d=r.encode(i,a)):r.encode(i,a),I(),R(++$),D("/BitsPerComponent 8 "),D("/ColorSpace /DeviceRGB "),D("/Filter /DCTDecode "),D(`/Height ${l} `),D("/Subtype /Image "),D("/Type /XObject "),D(`/Width ${n.width} `),D(`/Length ${n.data.length} `),b(),P("stream"),D(n.data),P("endstream"),w(),I(),R(++$),P("/Length 14"),b(),P("stream"),P("q /image Do Q"),P("endstream"),w(),T-=l}return s++,c+=p.length,p},u.finalise=function(){p="",I(),R(++$),M=$,D(`/Pages ${$+1} 0 R `),D("/Type /Catalog"),b(),w(),I(),R(++$),P("/Count "+s),P("/Kids [ "+m.join(" 0 R ")+" 0 R ]"),P("/Type /Pages"),b(),w();let e=c+p.length;return function(){P("xref"),P(`0 ${f.length+1}`),P("0000000000 65535 f ");for(let e=0;e<f.length;e++)P(f[e]+" 00000 n ")}(),function(e){D("trailer "),j(),P(`/Root ${M} 0 R`),P("/Size "+(f.length+1)+" ");let t=(new Date).getTime().toString(16).substring(3);P(`/ID [<${t}${t}${t}${t}><${t}${t}${t}${t}>] `),b(),P("startxref"),P(e),P("%%EOF")}(e),p},u.mode="streaming",u},module=module||{};module.exports=pdfEncoder;

},{"../../../debugConsole":30,"../../coders/jpeg/jpeg":36,"../../filters/imageFilter":43}],67:[function(require,module,exports){
var pdfEncoder=function(e,n,t,o){const r=require("../../coders/jpeg/jpeg"),i=require("../../../debugConsole"),a=require("../../coders/jpeg/jpeg-mono");var c=!1;t&&t.directprint_pdl_config_options_pdlpdfperpagecolor&&(c="enable"===t.directprint_pdl_config_options_pdlpdfperpagecolor);const d="\n",l=90;var g={},p=0,u=1,s=0,f="",m=[],h=0;function C(e){f+=e}function P(e){C(e+d)}function R(e){P(e+" 0 obj"),j()}function j(){C("<< ")}function v(){P(">>")}function y(){P("endobj")}function D(){var e,n,t;m.push((e=s+f.length,t=t||"0",(e+="").length>=(n=10)?e:new Array(n-e.length+1).join(t)+e))}return function(){P("%PDF-1.3"),D(),R(++h),P("/Type /Catalog"),P("/Pages "+(h+1)+" 0 R"),v(),y(),D(),R(++h),P("/Type /Pages"),P("/Count "+e);let n="";for(let t=0;t<e;t++)n+=4*t+(h+1)+" 0 R ";P("/Kids ["+(n=n.slice(0,-1))+"]"),v(),y()}(),g.addImagePage=function(e){let n=c&&e.isGreyscale();i(`[PDF Encoder] page is ${n?"mono":"Colour"}`),p>0&&(f="");let t=e.width/e.dpi*72,o=e.height/e.dpi*72;D(),R(++h),P("/Type /Page"),P("/Parent 2 0 R"),P("/MediaBox [0 0 "+t+" "+o+"]"),P("/Contents "+(h+1)+" 0 R"),P("/Resources "+(h+2)+" 0 R"),v(),y(),D(),R(++h);let d="1 0 0 -1 0 "+o+" cm\nq\n"+t+" 0 0 -"+o+" 0 "+o+" cm\n/I"+u+" Do\nQ\n";P("/Length "+d.length),v(),P("stream"),C(d),P("endstream"),y(),D(),R(++h),P("/ProcSet [/PDF /Text /ImageB /ImageC /ImageI]"),P("/XObject <<"),P("/I"+u+" "+(h+1)+" 0 R"),v(),v(),y();let g=(n?a:r).encode(e,l);return D(),R(++h),P("/Type /XObject"),P("/Subtype /Image"),P("/BitsPerComponent 8"),P("/Width "+g.width),P("/Height "+g.height),P(n?"/ColorSpace /DeviceGray":"/ColorSpace /DeviceRGB"),P("/Filter /DCTDecode"),P("/Length "+g.data.length),v(),P("stream"),P(g.data),P("endstream"),u++,y(),p++,s+=f.length,f},g.finalise=function(){f="";let e=function(){var e=s;P("xref"),P("0 "+ ++h),P("0000000000 65535 f ");for(let e=0;e<m.length;e++)P(m[e]+" 00000 n ");return e}();var n;return n=e,P("trailer"),j(),P("/Size "+h),P("/Root 1 0 R"),v(),P("startxref"),P(n),C("%%EOF"),f},g.mode="streaming",g},module=module||{};module.exports=pdfEncoder;

},{"../../../debugConsole":30,"../../coders/jpeg/jpeg":36,"../../coders/jpeg/jpeg-mono":35}],68:[function(require,module,exports){
(function (Buffer){(function (){
"use strict";var _BufferFrom=Buffer.from||function(){switch(arguments.length){case 1:return Buffer.alloc(arguments[0]);case 2:return Buffer.alloc(arguments[0],arguments[1]);case 3:return Buffer.alloc(arguments[0],arguments[1],arguments[2]);default:throw new Error("unexpected call.")}},stringBuffer=function(){var I={},_=[];return I.write=function(I,A){return _.push(I),A},I.finalise=function(){return _.join("")},I},ASCII85_BASE=85,ASCII85_CODE_START=33,ASCII85_CODE_END=ASCII85_CODE_START+ASCII85_BASE,ASCII85_NULL=String.fromCharCode(0),ASCII85_NULL_STRING=ASCII85_NULL+ASCII85_NULL+ASCII85_NULL+ASCII85_NULL,ASCII85_ZERO="z",ASCII85_ZERO_VALUE=ASCII85_ZERO.charCodeAt(0),ASCII85_PADDING_VALUE="u".charCodeAt(0),ASCII85_ENCODING_GROUP_LENGTH=4,ASCII85_DECODING_GROUP_LENGTH=5,ASCII85_BLOCK_START="<~",ASCII85_BLOCK_START_LENGTH=ASCII85_BLOCK_START.length,ASCII85_BLOCK_START_VALUE=_BufferFrom(ASCII85_BLOCK_START).readUInt16BE(0),ASCII85_BLOCK_END="~>",ASCII85_BLOCK_END_LENGTH=ASCII85_BLOCK_END.length,ASCII85_BLOCK_END_VALUE=_BufferFrom(ASCII85_BLOCK_END).readUInt16BE(0),ASCII85_GROUP_SPACE="y",ASCII85_GROUP_SPACE_VALUE=ASCII85_GROUP_SPACE.charCodeAt(0),ASCII85_GROUP_SPACE_CODE=538976288,ASCII85_GROUP_SPACE_STRING="    ",ASCII85_DEFAULT_ENCODING_TABLE=function(){var I,_=new Array(ASCII85_BASE);for(I=0;I<ASCII85_BASE;I++)_[I]=String.fromCharCode(ASCII85_CODE_START+I);return _}(),ASCII85_DEFAULT_DECODING_TABLE=function(){var I,_=new Array(256);for(I=0;I<ASCII85_BASE;I++)_[ASCII85_CODE_START+I]=I;return _}();function Ascii85(I){var _;I=I||{},this._options=I,Array.isArray(I.table)&&(_=[],I.table.forEach(function(I,A){_[I.charCodeAt(0)]=A}),I.encodingTable=I.table,I.decodingTable=_)}var defaultCodec=module.exports=new Ascii85;Ascii85.prototype.encode=function(I,_){var A,C,r,e,S,E,t,i,o,N,O,n,G=new Uint8Array(5),L=this._options;for(_=_||{},Array.isArray(_)?(r=_,e=L.delimiter||!1,S=L.groupSpace||!1):(r=_.table||L.encodingTable||ASCII85_DEFAULT_ENCODING_TABLE,e=void 0===_.delimiter?L.delimiter||!1:!!_.delimiter,S=void 0===_.groupSpace?L.groupSpace||!1:!!_.groupSpace),C=0,O=Math.ceil(I.length*ASCII85_DECODING_GROUP_LENGTH/ASCII85_ENCODING_GROUP_LENGTH)+ASCII85_ENCODING_GROUP_LENGTH+(e?ASCII85_BLOCK_START_LENGTH+ASCII85_BLOCK_END_LENGTH:0),A=stringBuffer(O),i=E=t=0,O=I.length;i<O;i++)if(t*=256,t+=I.charCodeAt(i),!(++E%ASCII85_ENCODING_GROUP_LENGTH)){if(S&&t===ASCII85_GROUP_SPACE_CODE)C+=A.write(ASCII85_GROUP_SPACE,C);else if(t){for(o=ASCII85_ENCODING_GROUP_LENGTH;o>=0;o--)N=t%ASCII85_BASE,G[o]=N,t=(t-N)/ASCII85_BASE;for(o=0;o<ASCII85_DECODING_GROUP_LENGTH;o++)C+=A.write(r[G[o]],C)}else C+=A.write(ASCII85_ZERO,C);t=0,E=0}if(E)if(t){for(n=ASCII85_ENCODING_GROUP_LENGTH-E,i=ASCII85_ENCODING_GROUP_LENGTH-E;i>0;i--)t*=256;for(o=ASCII85_ENCODING_GROUP_LENGTH;o>=0;o--)N=t%ASCII85_BASE,G[o]=N,t=(t-N)/ASCII85_BASE;for(o=0;o<ASCII85_DECODING_GROUP_LENGTH;o++)C+=A.write(r[G[o]],C);C-=n}else for(i=0;i<E+1;i++)C+=A.write(r[0],C);return e&&(C+=A.write(ASCII85_BLOCK_END,C)),A.finalise()},defaultCodec.PostScript=new Ascii85({delimiter:!0}),defaultCodec.Ascii85=Ascii85;

}).call(this)}).call(this,require("buffer").Buffer)

},{"buffer":5}],69:[function(require,module,exports){
var psEncoder=function(e,t,o,i){const n=require("../../coders/jpeg/jpeg"),r=require("../../coders/jpeg/jpeg-mono"),d=require("./ascii85-dj.js").PostScript,c=require("../../../debugConsole");var a={mode:"streaming"},p=e,s=0,l="";const g="\n";var u,f,m=i&&i.print&&i.print.copies&&i.print.copies.copies&&parseInt(i.print.copies.copies)||1,v=i&&i.print&&void 0!==i.print.collate&&!0===i.print.collate.collate||!1,h=!1;function P(e){!function(e){l+=e}(e+g)}function D(e,o,n,r){var d=Math.round(e/n*72),c=Math.round(o/n*72);0===s&&function(e,o){P("%%BeginSetup"),t&&!0===t&&P("<< /Duplex true /Tumble false >> setpagedevice"),P(`<< /PageSize [${e} ${o}] /ImagingBBox null >> setpagedevice`),P(`<</NumCopies ${m} >> setpagedevice`),v&&P("<</Collate true >> setpagedevice"),i&&i.dpio&&i.dpio.mono&&!0===i.dpio.mono&&P("<</ProcessColorModel /DeviceGray>>systemdict /setpagedevice get exec"),P("%%EndSetup")}(d,c),P("%%Page: "+ ++s+" "+p),P("%%BeginPageSetup"),P("%%PageOrientation: Portrait"),!0===h&&(i&&i.dpio&&i.dpio.mono&&!0===i.dpio.mono||P(r?"<</ProcessColorModel /DeviceGray>>systemdict /setpagedevice get exec":"<</ProcessColorModel /DeviceRGB>>systemdict /setpagedevice get exec")),P("%%EndPageSetup")}return o&&o.directprint_pdl_config_options_pdlpostscriptperpagecolor&&(h="enable"===o.directprint_pdl_config_options_pdlpostscriptperpagecolor),P("%!PS-Adobe-3.0"),u=(new Date).toString().split(" "),f=u[3],u[3]=u[4],u[4]=f,P("%%Creator: directprint.io "+u[4]+" (https://directprint.io)"),P("%%CreationDate: "+u.slice(0,5).join(" ")),P("%%Pages: "+p),P("%%DocumentData: Clean7Bit"),P("%%LanguageLevel: 3"),P("%%EndComments"),P("%%BeginProlog"),P("/languagelevel where"),P("{ pop languagelevel } { 1 } ifelse"),P("3 lt { /Helvetica findfont 12 scalefont setfont 50 500 moveto"),P("  (This print job requires a PostScript Language Level 3 printer.) show"),P("  showpage quit } if"),P("/q { gsave } bind def"),P("/Q { grestore } bind def"),P("%%EndProlog"),c("[PSStreamingEncoder] Init"),a.addImagePage=function(e){let t=e.isGreyscale();return s>0&&(l=""),D(e.width,e.height,e.dpi,t),function(e,t){P("q");var o=(72/e.dpi).toFixed(2);P("[ "+o+" 0 0 "+o+" 0 0] concat "),P(!0===h&&t?"/DeviceGray setcolorspace":"/DeviceRGB setcolorspace"),P("8 dict dup begin"),P("  /ImageType 1 def"),P("  /Width "+e.width+" def"),P("  /Height "+e.height+" def"),P("  /Interpolate true def"),P("  /BitsPerComponent 8 def"),P(!0===h&&t?"  /Decode [ 0 1 ] def":"  /Decode [ 0 1 0 1 0 1 ] def"),P("  /DataSource currentfile /ASCII85Decode filter /DCTDecode filter def"),P("  /ImageMatrix [ 1 0 0 -1 0 "+e.height+" ] def"),P("end"),P("image"),P(d.encode(e.data)),P("Q")}(!0===h&&t?r.encode(e.toRGBA(),90):n.encode(e.toRGBA(),90),t),P("showpage"),e=null,l},a.finalise=function(){return l="",P("%%Trailer"),P("%%EOF"),l},a},module=module||{};module.exports=psEncoder;

},{"../../../debugConsole":30,"../../coders/jpeg/jpeg":36,"../../coders/jpeg/jpeg-mono":35,"./ascii85-dj.js":68}],70:[function(require,module,exports){
var psEncoder=function(e,o,t,i){const n=require("../../coders/jpeg/jpeg"),r=require("../../coders/jpeg/jpeg-mono"),c=require("../../../debugConsole"),a=require("../../filters/imageFilter");var d={mode:"streaming"},p=e,l=0,g="";const s="\n",m=64,u=90,f=8;c("[PSStreamingEncoder2] Init");var S=i&&i.print&&i.print.copies&&i.print.copies.copies&&parseInt(i.print.copies.copies)||1,h=i&&i.print&&void 0!==i.print.collate&&!0===i.print.collate.collate||!1,P=!0;if(t&&t.directprint_pdl_config_options_collate)switch(t.directprint_pdl_config_options_collate){case"omit":c("[PSStreamingEncoder2] Omitting collate command"),P=!1;break;case"force_disable":c("[PSStreamingEncoder2] Forcing collate command off"),h=!1;break;case"force_enable":c("[PSStreamingEncoder2] Forcing collate command on"),h=!0;break;default:c("[PSStreamingEncoder2] Collate command unchanged by PDL config")}var v=!1;t&&t.directprint_pdl_config_options_pdlpostscriptperpagecolor&&(v="enable"===t.directprint_pdl_config_options_pdlpostscriptperpagecolor),c(`[PSStreamingEncoder2] Include collate command ${P}, collate: ${h}`);var E,_,b=!0;if(t&&t.directprint_pdl_config_options_copies)switch(t.directprint_pdl_config_options_copies){case"omit":c("[PSStreamingEncoder2] Ommiting copies command"),b=!1;break;case"one":c("[PSStreamingEncoder2] Setting copies to one"),S=1;break;default:c("[PSStreamingEncoder2] Copies command unchanged by PDL config")}function D(e){!function(e){g+=e}(e+s)}function w(e,t,n,r){var a=Math.round(e/n*72),d=Math.round(t/n*72);0===l&&function(e,t){D("%%BeginSetup"),o&&!0===o?D("<< /Duplex true /Tumble false >> setpagedevice"):c("[PSStreamingEncoder2] Excluding duplex command (no duplex request in job)"),D(`<< /PageSize [${e} ${t}] /ImagingBBox null >> setpagedevice`),b?D(`<</NumCopies ${S} >> setpagedevice`):c("[PSStreamingEncoder2] Excluding copies command (PDL config driven)"),P?h?D("<</Collate true >> setpagedevice"):c("[PSStreamingEncoder2] Excluding collate command (no collation request in job)"):c("[PSStreamingEncoder2] Excluding collate command (PDL config driven)"),i&&i.dpio&&i.dpio.mono&&!0===i.dpio.mono&&D("<</ProcessColorModel /DeviceGray>>systemdict /setpagedevice get exec"),D("%%EndSetup")}(a,d),D("%%Page: "+ ++l+" "+p),D("%%BeginPageSetup"),D("%%PageOrientation: Portrait"),!0===v&&(i&&i.dpio&&i.dpio.mono&&!0===i.dpio.mono||D(r?"<</ProcessColorModel /DeviceGray>>systemdict /setpagedevice get exec":"<</ProcessColorModel /DeviceRGB>>systemdict /setpagedevice get exec")),D("%%EndPageSetup")}function C(e,o,t){let i=(72/e.dpi).toFixed(2);D("q"),D(`[ ${i} 0 0 ${i} 0 0] concat `),D(`0 ${o} translate`),D(!0===v&&t?"/DeviceGray setcolorspace":"/DeviceRGB setcolorspace"),D("8 dict dup begin"),D("  /ImageType 1 def"),D(`  /Width ${e.width} def`),D(`  /Height ${e.height} def`),D("  /Interpolate true def"),D("  /BitsPerComponent 8 def"),D(!0===v&&t?"  /Decode [ 0 1 ] def":"  /Decode [ 0 1 0 1 0 1 ] def"),D("  /DataSource currentfile /DCTDecode filter def"),D(`  /ImageMatrix [ 1 0 0 -1 0 ${e.height} ] def`),D("end"),D("image"),D(e.data),D("Q")}return c(`[PSStreamingEncoder2] Include copies command ${b}, PDL Copies: ${S}`),D("%!PS-Adobe-3.0"),E=(new Date).toString().split(" "),_=E[3],E[3]=E[4],E[4]=_,D("%%Creator: directprint.io "+E[4]+" (https://directprint.io)"),D("%%CreationDate: "+E.slice(0,5).join(" ")),D("%%Pages: "+p),D("%%DocumentData: Clean7Bit"),D("%%LanguageLevel: 3"),D("%%EndComments"),D("%%BeginProlog"),D("/languagelevel where"),D("{ pop languagelevel } { 1 } ifelse"),D("3 lt { /Helvetica findfont 12 scalefont setfont 50 500 moveto"),D("  (This print job requires a PostScript Language Level 3 printer.) show"),D("  showpage quit } if"),D("/q { gsave } bind def"),D("/Q { grestore } bind def"),D("%%EndProlog"),d.addImagePage=function(e){l>0&&(g="");let o=e.isGreyscale(),t=Math.floor(e.height/m),i=e.height%m;if(c(`[PSStreamingEncoder2] Strips: ${t}, 1st strip ${i}`),w(e.width,e.height,e.dpi,o),i>=f){let o=new a({data:e.getJPEGStrip(0,i),width:e.width,height:i,bpp:32,Bpp:4,dpi:300});C(n.encode(o,u),e.height-i)}for(let c=0;c<t;c++){let t=new a({data:e.getJPEGStrip(c,m,i),width:e.width,height:m,bpp:32,Bpp:4,dpi:300});C(!0===v&&o?r.encode(t,u):n.encode(t,u),e.height-(i+(c+1)*m),o)}return D("showpage"),g},d.finalise=function(){return g="",D("%%Trailer"),D("%%EOF"),g},d},module=module||{};module.exports=psEncoder;

},{"../../../debugConsole":30,"../../coders/jpeg/jpeg":36,"../../coders/jpeg/jpeg-mono":35,"../../filters/imageFilter":43}],71:[function(require,module,exports){
var pwgEncoder=function(e,r,t,o){const i=require("../../coders/packbits/packbits4"),a=require("../../../debugConsole"),n=e||0;var s=0,g="";const d={PwgRaster:[0,8],Duplex:[272,4],DotsPerInch1:[276,1],DotsPerInch2:[280,1],Reserved1:[284,1],Reserved2:[288,1],Reserved3:[292,1],Reserved4:[296,1],NumCopies:[340,1],PageSize1:[352,1],PageSize2:[356,1],Width:[372,4],Height:[376,4],BitsPerColor:[384,4],BitsPerPixel:[388,4],BytesPerLine:[392,4],NumColors:[420,4],TotalPageCount:[452,4],ImageBoxLeft:[464,4],ImageBoxTop:[468,4],ImageBoxRight:[472,4],ImageBoxBottom:[476,4],AlternatePrimary:[480,4],ColorSpace:[400,4],PageSizeName:[1732,0]},P=1796;function m(e){"string"==typeof e?g+=e:"number"==typeof e?g+=String.fromCharCode(e):"object"==typeof e&&(g+=String.fromCharCode(e))}var c={mode:"streaming"},f=new ArrayBuffer(P),h=new Uint8Array(f),u=new DataView(f);function l(e,r){u.setUint32(d[e][0],r)}function p(e){s>0&&(g=""),h.fill(0);var r;!function(e,r){for(var t=0;t<e.length;t++)u.setUint8(r+t,e.charCodeAt(t))}("PwgRaster",d.PwgRaster[0]),l("DotsPerInch1",e.dpi),l("DotsPerInch2",e.dpi),l("BitsPerColor",8),l("BitsPerPixel",24),l("Width",e.width),l("Height",e.height),l("ColorSpace",19),l("NumColors",3),l("TotalPageCount",n||0),l("Reserved1",18),l("Reserved2",18),l("Reserved3",577),l("Reserved4",824),l("NumCopies",0),l("PageSize1",e.width/e.dpi*72),l("PageSize2",e.height/e.dpi*72),l("BytesPerLine",(r=(24*e.width+7)/8,Math[r<0?"ceil":"floor"](r))),l("ImageBoxLeft",0),l("ImageBoxLeft",0),l("ImageBoxRight",0),l("ImageBoxBottom",0),l("AlternatePrimary",16777215);for(var t=0;t<P;t++)g+=String.fromCharCode(h[t])}return a("[PDL] PWG Streamining encoder init"),m(82),m(97),m(83),m(50),c.finalise=function(){},c.addImagePage=function(e){return p(e),e.toRGBA(),m(i.encode(e)),s++,g},c};module.exports=pwgEncoder;

},{"../../../debugConsole":30,"../../coders/packbits/packbits4":37}],72:[function(require,module,exports){
const Encoder=require("../../encoder"),debug=require("../../../debugConsole"),MM_TO_INCHES=.0393701,ESC="",zeroPad=(i,t)=>String(i).padStart(t,"0");class SBPLStreamingEncoder extends Encoder{constructor(i,t,e,s,o){super(i,t,e,s,o,"streaming","sbpl"),debug("[SBPLStreamingEncoder] constructor enter"),this._dpi=203,this._collatedOutput="",this._dpioConfig&&this._dpioConfig.printer_config_dpi&&(this._dpi=parseInt(this._dpioConfig.printer_config_dpi)),debug("[SBPLStreamingEncoder] constucted:",this)}_escCmd(i){this._push(ESC+i)}addImagePage(i){this._printTicket&&this._printTicket.print&&this._printTicket.print.media_size&&this._printTicket.print.media_size?(debug("[SBPLStreamingEncoder] Print ticket has dimensions"),this._width=Math.round(MM_TO_INCHES*(this._printTicket.print.media_size.width_microns/1e3)),i.orientation!==this.getTicketMediaOrientation()&&(debug("ticket and raster orientation mismatch: rotate 90"),i.rotate(90))):(debug("[SBPLStreamingEncoder] Calculating label input width dimension from image size"),this._width=i.dimensions().widthIn),this._output="",this._escCmd("A"),this._escCmd("H0000"),this._escCmd("V0000");let t=i.width/i.dpi*this._dpi,e=Math.floor(t/8);t=8*e;let s=Math.floor(i.height/8),o=8*s;i.resizeToWidth(t),i.resizeToFixedHeight(o);var r=128;return this._dpioConfig&&this._dpioConfig.dither_threshold&&(r=parseInt(this._dpioConfig.dither_threshold)),this._dpioConfig&&this._dpioConfig.printer_config_dither&&"bayer"===this._dpioConfig.printer_config_dither?i.dither(r,"bayer"):i.binaryFilterThreshold(r),this._escCmd("G"),this._push("B"),this._push(zeroPad(e,3)),this._push(zeroPad(s,3)),this._push(i.toPBM_P4(!1)),this._copies>1&&!1===this._collate?this._escCmd(`Q${this._copies}`):this._escCmd("Q1"),this._escCmd("Z"),this._copies>1&&!0===this._collate&&(this._collatedOutput+=this._output),debug("[SBPLStreamingEncoder] page done"),this._output}finalise(){if(this._copies>1&&!0===this._collate){let i="";for(let t=1;t<this._copies;t++)i+=this._collatedOutput;return debug(`[SBPLStreamingEncoder] Softcopies creating an additional ${this._copies-1} collated copies / print done`),i}debug("[SBPLStreamingEncoder] print done")}}module.exports=SBPLStreamingEncoder;

},{"../../../debugConsole":30,"../../encoder":41}],73:[function(require,module,exports){
function urfEncoder(r,t,e,i,n){const a=require("../../coders/packbits/packbits4"),o=require("../../../debugConsole");var d={mode:"streaming"},h="",g=0;const u={SGRAY:0,SGREY:0,SRGB24:1,CMYK:2};function p(r){"string"==typeof r?h+=r:"number"==typeof r?h+=String.fromCharCode(r):"object"==typeof r&&(h+=String.fromCharCode(r))}var c=u.SRGB24,s=24;return n&&n._raw&&n._raw["printer-attributes-tag"]&&n._raw["printer-attributes-tag"]["urf-supported"]&&Array.isArray(n._raw["printer-attributes-tag"]["urf-supported"])&&-1===n._raw["printer-attributes-tag"]["urf-supported"].indexOf("SRGB24")&&(o("Changing colorspace and BPP according to driver capability"),o(n._raw["printer-attributes-tag"]["urf-supported"]),c=u.SGRAY,s=8),p("U"),p("N"),p("I"),p("R"),p("A"),p("S"),p("T"),p("\0"),p(0),p(0),p(0),p(r),o("[URF Streaming encoder] New encoder"),d.finalise=function(){},d.addImagePage=function(r){var t;return g>0&&(h=""),c===u.SGRAY?r.toSGRAY_8():r.toRGBA(),t=r,p(s),p(c),p(0),p(4),p(0),p(0),p(0),p(0),p(0),p(0),p(0),p(0),p(0),p(0),o("width8 "+(t.width>>>8)),o("width0 "+(t.width>>>0)),o("width8 "+String.fromCharCode(t.width>>>8)),o("width0 "+String.fromCharCode(t.width>>>0)),p(t.width>>>8),p(t.width>>>0),p(0),p(0),o("height8 "+(t.height>>>8)),o("height0 "+(t.height>>>0)),o("height8 "+String.fromCharCode(t.height>>>8)),o("height0 "+String.fromCharCode(t.height>>>0)),p(t.height>>>8),p(t.height>>>0),p(0),p(0),p((t.dpi||150)>>>8),p((t.dpi||150)>>>0),p(0),p(0),p(0),p(0),p(0),p(0),p(0),p(0),o("[URF Streaming encoder] Entering packbits"),p(a.encode(r)),o("[URF Streaming encoder] Finished packbits"),g++,h},d}module.exports=urfEncoder;

},{"../../../debugConsole":30,"../../coders/packbits/packbits4":37}],74:[function(require,module,exports){
const Encoder=require("../../encoder"),debug=require("../../../debugConsole"),MM_TO_INCHES=.0393701;class ZPLStreamingEncoder extends Encoder{constructor(i,t,e,n,r){super(i,t,e,n,r,"streaming","zpl"),debug("[ZPLStreamingEncoder] constructor enter"),this._dpi=203,this._dpioConfig&&this._dpioConfig.printer_config_dpi&&(this._dpi=parseInt(this._dpioConfig.printer_config_dpi)),debug("[ZPLStreamingEncoder] constructed:",this)}_addLine(i){this._push(i+"\n")}addImagePage(i){this._printTicket&&this._printTicket.print&&this._printTicket.print.media_size&&this._printTicket.print.media_size?(debug("[ZPLStreamingEncoder] Print ticket has dimensions"),this._width=Math.round(MM_TO_INCHES*(this._printTicket.print.media_size.width_microns/1e3)),i.orientation!==this.getTicketMediaOrientation()&&(debug("ticket and raster orientation mismatch: rotate 90"),i.rotate(90))):(debug("[ZPLStreamingEncoder] Calculating label input width dimension from image size"),this._width=i.dimensions().widthIn),this._output="",this._addLine("^XA"),i.resizeToWidth(Math.floor(this._width*this._dpi));var t=128;this._dpioConfig&&this._dpioConfig.dither_threshold&&(t=parseInt(this._dpioConfig.dither_threshold)),this._dpioConfig&&this._dpioConfig.printer_config_dither&&"bayer"===this._dpioConfig.printer_config_dither?i.dither(t,"bayer"):i.binaryFilterThreshold(t);const e=parseInt(i.width/8)+(i.width%8==0?0:1),n=new Uint8Array(e),r=i.height*e;this._addLine("^FO0,0"),this._push(`^GFB,${r},${r},${e},`);for(var d=0;d<i.height;d++)i.nextLine1BitArr(n),this._push(n,e);this._addLine("^FS"),this._addLine("^XZ");let o=this._output;for(var s=1;s<this._copies;s++)o+=this._output;return debug("[ZPLStreamingEncoder] done page",o),o}finalise(){debug("[ZPLStreamingEncoder] print done")}}module.exports=ZPLStreamingEncoder;

},{"../../../debugConsole":30,"../../encoder":41}],75:[function(require,module,exports){
module.exports=function(e){const a=require("../full-job/pwg/pwgDecoder"),t=require("../filters/imageFilter"),s=require("../../debugConsole");var r=new XMLHttpRequest,n=!1;e.addEventListener("message",function(o){"start"===o.data[0]?(r.onload=function(g){var d;s("Generating thumbs and scanning for changes"),n=!1,"image/pwg-raster"===o.data[2]?d=a(r.response):e.postMessage(["error","source document not recognised"]);var i=o.data[3],p=o.data[4],u=o.data[5];s("Page "+i+" scale "+p+" flip odd "+u);for(var l=1;l<=i;l++){(new Date).getTime();if(!0===n)return;s("Entering conversion, page "+l);var c=new t(d.getPageDataRGBAScaled(p,!1));u&&!(1&l)&&c.flip(),e.postMessage(["update",c.toJPEGDataURI()])}e.postMessage(["done",d.fingerprints()]),close()},s("[TNG] Attempting to open "+o.data[1]),r.open("GET",o.data[1],!0),r.responseType="arraybuffer",r.send(null)):"abort"===o.data[0]&&(n=!0,e.postMessage(["aborted"]),close())}),e.postMessage(["message","Thumbnail webworker setup successfully"])};

},{"../../debugConsole":30,"../filters/imageFilter":43,"../full-job/pwg/pwgDecoder":54}],76:[function(require,module,exports){
const Filter=require("./pdl/filters/imageFilter"),PDL=require("./pdl"),debug=require("./debugConsole"),chart=require("./features/printNudge/levelsChart"),sha256=require("./hashing/sha256"),tng=require("./pdl/workers/tng"),undefsafe=require("undefsafe"),functionWebWorkify=require("./features/printNudge/functionWebWorkify"),ENABLED=!0,ON=!0,DISABLED=!1,OFF=!1;DEBUG=!1;const TIMEOUT=19,TWENTY_FOUR_HOURS_MS=864e5,PRINT_MODES=["","normal","imperceptable","whiteout","mono","draft","superdraft","ultradraft"],PRINT_MODE_IDS=["","best_option","saver_option","zap_option","mono_option","draft_option","superdraft_option","ultradraft_option"],preview_w=300,preview_h=400,preview_ratio=preview_w/preview_h;var canvas=document.getElementById("preview"),ctx=canvas.getContext("2d");ctx.imageSmoothingQuality="high";var halfSize,source,before=[],currentPage=1,totalPages=1,thumbs=[],fp=[],params=null,diffs=[];let blankCount=0,nearBlankCount=0;const reduceFactor=3;var url=new URL(window.location.href),jobID=url.searchParams.get("id"),policyProfile=url.searchParams.get("policyProfile");function urlSearchParamUndefinedTrue(e){switch(url.searchParams.get(e)){case null:return!0;case"false":return!1;default:return!0}}chrome.runtime||(chrome.runtime={},chrome.runtime.onMessage={},chrome.runtime.onMessage.addListener=function(e){debug("message listener added")}),chrome.i18n||(chrome.i18n={},chrome.i18n.getMessage=function(e){debug('i18n.getMessage("'+e+'")')}),chrome.storage||(chrome.storage={},chrome.storage.local={},chrome.storage.managed={},chrome.storage.local.get=function(e,t){switch(debug("local get of key "+e),e){case"printerCapabilityCache":default:t()}},chrome.storage.local.set=function(e){debug("setting object "+JSON.stringify(e))},chrome.storage.managed.get=function(e){debug("managed get"),e()},chrome.storage.onChanged={},chrome.storage.onChanged.addListener=function(e){debug("onChanged listener added")});var UIConfig={showInkSave:urlSearchParamUndefinedTrue("showPrintModeSelector"),showPaperSave:urlSearchParamUndefinedTrue("showPaperSaveoptions"),enableReprintDetection:urlSearchParamUndefinedTrue("enableReprintDetection")};debug(UIConfig),debug("Init params "+window.location.href);var docURL=url.searchParams.get("docURL"),icon=new Image;icon.onload=function(){debug("Icon ready")},icon.src="icons/icon_128_v2.png";var noprint=new Image;function renderPage(e){source.gotoPage(e),halfSize=null,halfSize=new Filter(source.getPageDataRGBAScaled(reduceFactor)),before=halfSize.inkUsage()}function updatePageCounter(){1===totalPages?(document.getElementById("next").style.visibility="hidden",document.getElementById("prev").style.visibility="hidden"):1===currentPage?(document.getElementById("next").style.visibility="visible",document.getElementById("prev").style.visibility="hidden"):currentPage===totalPages?(document.getElementById("next").style.visibility="hidden",document.getElementById("prev").style.visibility="visible"):(document.getElementById("next").style.visibility="visible",document.getElementById("prev").style.visibility="visible"),document.getElementById("pageXofX").innerHTML=currentPage+" / "+totalPages}function doPrint(e){let t=totalPages;!0===document.getElementById("nearly").checked?t-=blankCount+nearBlankCount:!0===document.getElementById("blank").checked&&(t-=blankCount),document.getElementById("twoup").checked&&(t=Math.round(t/2)),e=e||{profileName:PRINT_MODES[parseInt(document.getElementById("print_mode").value)],twoUp:document.getElementById("twoup").checked,filterBlank:document.getElementById("blank").checked,filterNearlyBlank:document.getElementById("nearly").checked,saveLocally:!1,print:!0,pageModifier:null,expectedPageCount:t},debug("OK let's print!",e),chrome.runtime.sendMessage({command:"setJobFilterAndPrint",printMode:e,jobID},function(e){}),window.close()}function reprint(e){!0===("STANDARD_MONOCHROME"===undefsafe(params,"ticket.print.color.type"))&&(debug("Forcing/preselecting mono"),selectProfileInternal("mono"));var t=blanks="";blankCount=0,nearBlankCount=0;for(var n=0;n<totalPages;n++)0===e[n].coverage?(blanks+=blanks.length>0?", ":"",blanks+=n+1,blankCount+=1):e[n].coverage<.05&&(t+=t.length>0?", ":"",t+=n+1,nearBlankCount+=1);t.length>0?document.getElementById("nBlankText").innerHTML=chrome.i18n.getMessage("ink_save_dont_print_nblank")+"("+nearBlankCount+")":document.getElementById("nBlankText").innerHTML=chrome.i18n.getMessage("ink_save_dont_print_nblank"),blanks.length>0?document.getElementById("blankText").innerHTML=chrome.i18n.getMessage("ink_save_dont_print_blank")+"("+blankCount+")":document.getElementById("blankText").innerHTML=chrome.i18n.getMessage("ink_save_dont_print_blank"),upadatePrintCount(),debug("Blanking",blanks,t);let o=!1;e.length>1&&loadHistory(function(t){let n=(new Date).getTime();var r=t.filter(function(e){return n-e.convertEnd<TWENTY_FOUR_HOURS_MS});debug("prints in last 24 hours : "+r.length);for(let t=0;t<r.length;t++)if(!1===o){let n=r[t];if(debug("checking last "+t),n.pages.length>1){debug("enough pages");var a=[];let t=0;for(var i=0;i<e.length;i++)for(var l=0;l<n.pages.length;l++)e[i].c===n.pages[l].CMYKBefore.c&&e[i].m===n.pages[l].CMYKBefore.m&&e[i].y===n.pages[l].CMYKBefore.y&&e[i].k===n.pages[l].CMYKBefore.k&&e[i].blank===n.pages[l].CMYKBefore.blank&&(a.push(e[i].page),0!==e[i].c&&0!==e[i].m&&0!==e[i].y&&0!==e[i].k&&(t+=1));if(a.length-t>=2)if(debug("reprint!"),document.getElementById("reprintItem").style.display="inline",document.getElementById("loading").style.display="none",o=!0,!0===n.twoUp&&(document.getElementById("twoup").checked=!0,document.getElementById("chartItem").style.display="none",document.getElementById("printDeltasAction").style.display="none",selectTwoUp(e)),a.length===e.length)debug("all match!"),document.getElementById("deltaList").innerHTML='no document changes detected <br><b> Do you really need to re-print?</b><br><img src="icons/leaf.png" width="50" height="50">',document.getElementById("chartItem").style.display="none",document.getElementById("printDeltasAction").style.display="none";else{var d=[];for(i=0;i<e.length;i++)-1===a.indexOf(e[i].page)&&d.push(e[i].page);diffs=d;var c="<b>[";for(i=0;i<d.length;i++)c+=" "+d[i],i<d.length-1?c+=",":c+="&nbsp;";c+="]</b>",document.getElementById("onlyPages").innerHTML=d.length>1?"only pages&nbsp;":"only page&nbsp;",document.getElementById("hasChanged").innerHTML=d.length>1?"&nbsp;have changes":"&nbsp;has changed",document.getElementById("deltaList").innerHTML=c,document.getElementById("chartItem").style.display="none",document.getElementById("printDeltasAction").style.display="inline"}}}}),!1===o&&(debug("no reprint"),document.getElementById("loading").style.display="none",!0===UIConfig.showInkSave&&(document.getElementById("chartItem").style.display="inline"))}function nudge(e){debug("Looking for job",e),!0===("STANDARD_MONOCHROME"===undefsafe(params,"ticket.print.color.type"))?(debug("Forcing/preselecting mono"),selectProfileInternal("mono")):policyProfile&&""!==policyProfile?(debug("Selecting policy defined profile: "+policyProfile),selectProfileInternal(policyProfile)):loadHistory(function(t){var n=t.filter(function(t){return t.titleHash===sha256.hash(e.title)});if(n.length>0){debug("Total previous prints of this page ",n.length);var o=n.reduce(function(e,t){return e.convertEnd>t.convertEnd?e:t});debug("Last filter used",o.printConfig.profileName),selectProfileInternal(o.printConfig.profileName)}else debug("default profiles"),before[4]>10?selectProfileInternal("whiteout"):selectProfileInternal("imperceptable"),document.getElementById("loading").style.display="none",!0===UIConfig.showInkSave&&(document.getElementById("chartItem").style.display="inline")})}function selectProfileFromSelect(e){document.getElementById("reprintItem").style.display="none",document.getElementById("chartItem").style.display="inline",stopTimer(),applyProfile(e)}function selectProfileInternal(e){debug("select profile : "+e);for(var t=1,n=1;n<PRINT_MODES.length;n++)PRINT_MODES[n]===e&&(t=n,document.getElementById(PRINT_MODE_IDS[n]).removeAttribute("data-selected"));document.getElementById(PRINT_MODE_IDS[t]).setAttribute("data-selected","true"),getmdlSelect.init(".getmdl-select"),applyProfile(e)}function loadHistory(e){chrome.storage.local.get("history",function(t){var n=t.history||[];e(n)})}function calcSavings(e){for(var t=["c","m","y","k"],n=[],o=0;o<t.length;o++){var r=Math.round(100*(1-e[t[o]]/before[t[o]]),2);isFinite(r)||(r=0),n[o]=r,r<0&&(r="+")}var a=.74692*before.coverage;n[0],n[1],n[2],n[3];chart({names:["C","M","Y","K"],colours:["#00FFFF","#FF00FF","#FFFF00","#000000"],nameColours:["#000","#000","#000","#fff"],types:["inkCartridge","inkCartridge","inkCartridge","inkCartridge"],lows:[0,0,0,0],highs:before,levels:e},"chartAfter")}function previewImage(e,t=0,n=0){let o=null;o=0===t?getImageDimensionsForPreview(e.width,e.height):getImageDimensionsForPreview(t,n),ctx.clearRect(0,0,preview_w,preview_h),ctx.drawImage(e,o.x,o.y,o.w,o.h)}noprint.src="images/noprint.png",chrome.runtime.onMessage.addListener(function(e,t,n){debug(t,e),e.jobID===jobID&&("ping"===e.command?chrome.runtime.sendMessage({command:"pong",jobID},function(e){}):"cancel"===e.command&&window.close())}),document.title="Print options";var lastProfile="normal";function applyProfile(e){var t;if(document.body.style.cursor="progress",fp.length>0&&document.getElementById("blank").checked&&0===fp[currentPage-1].coverage)debug("Skipping blank preview page "+currentPage),previewImage(noprint);else if(fp.length>0&&document.getElementById("nearly").checked&&fp[currentPage-1].coverage<.05)debug("Skipping nearly blank preview page "+currentPage),previewImage(noprint);else{var n="LONG_EDGE"===(undefsafe(params,"ticket.print.duplex.type")||"NO_DUPLEX")&&1&source.currentPage();t=new Filter(halfSize,!0),n&&t.flip(),e=lastProfile=e||lastProfile,t.applyProfile(e),debug("Blitting"),createImageBitmap(new ImageData(t.data,t.width,t.height)).then(function(e){previewImage(e,t.width,t.height)}),!0===UIConfig.showInkSave&&calcSavings(t.inkUsage())}document.body.style.cursor="default"}function getImageDimensionsForPreview(e,t){let n=0,o=0,r=preview_w,a=preview_h;if(e/t>preview_ratio){a=t*(r/e),o=Math.round((preview_h-a)/2)}else{r=e*(a/t),n=Math.round((preview_w-r)/2)}return{x:n,y:o,w:r,h:a}}let printInterval;function stopTimer(){clearInterval(printInterval),document.getElementById("printAction").innerHTML="Print"}function printTimeout(){var e;e=TIMEOUT,printInterval=setInterval(function(){document.getElementById("printAction").innerHTML="Print: &nbsp;"+e,e--||clearInterval(printInterval)||doPrint()},1e3)}function selectTwoUp(e){var t="LONG_EDGE"===(undefsafe(params,"ticket.print.duplex.type")||"NO_DUPLEX");halfSize.blank();for(var n=[],o=1;o<=totalPages;)document.getElementById("blank").checked&&0===e[o-1].coverage||document.getElementById("nearly").checked&&e[o-1].coverage<.05||n.push(o),o++;debug("Pages will render",n,currentPage);var r=1,a=n.indexOf(currentPage);if(a>-1){for(r=1&a?n[a-1]:n[a],debug("Pages start render",r),source.gotoPage(r);r<=totalPages&&!halfSize.twoUpFull();){if(document.getElementById("blank").checked&&0===e[r-1].coverage)debug("Skipping blank preview page "+r),source.getPageDataRGBAScaled(1);else if(document.getElementById("nearly").checked&&e[r-1].coverage<.05)debug("Skipping nearly blank preview page "+r),source.getPageDataRGBAScaled(1);else{debug("Adding page "+r+" to preview");var i=t&&!(1&source.currentPage()),l=new Filter(source.getPageDataRGBAScaled(reduceFactor*(source.height/source.width)));halfSize.pushTwoUpPage(l,i),before=halfSize.inkUsage(),applyProfile()}r++}createImageBitmap(new ImageData(halfSize.data,halfSize.width,halfSize.height)).then(function(e){previewImage(e,halfSize.width,halfSize.height)})}}function upadatePrintCount(){debug("update print count");let e=totalPages;!0===document.getElementById("nearly").checked?e-=blankCount+nearBlankCount:!0===document.getElementById("blank").checked&&(e-=blankCount),debug("with text : Printing "+e+" of "+totalPages+" pages"),document.getElementById("feedback").innerHTML=chrome.i18n.getMessage("ink_save_printing_xofx",[e,totalPages])}window.onload=function(){if(debug("[Main] Page loaded - init"),!1===UIConfig.showInkSave&&(document.getElementById("printChoice").style.display="none",policyProfile="normal"),!1===UIConfig.showPaperSave&&(document.getElementById("paperSave").style.display="none"),document.getElementById("loading").style.display="inline",url.searchParams.get("blobURL")){var e=new XMLHttpRequest;e.onload=function(t){debug("Creating decoder"),source=PDL.detectAndCreateDecoder(e.response),debug("About to decode"),halfSize=new Filter(source.getPageDataRGBAScaled(reduceFactor)),before=halfSize.inkUsage(),params=JSON.parse(url.searchParams.get("ticket")),debug(params),nudge(params),DEBUG||printTimeout(),totalPages=source.pageCount,updatePageCounter();var n="LONG_EDGE"===(undefsafe(params,"ticket.print.duplex.type")||"NO_DUPLEX");functionWebWorkify(tng,function(e){debug("Webworker done"),fp=e[0],!0===UIConfig.enableReprintDetection?reprint(e[0]):document.getElementById("loading").style.display="none"},function(e){debug(e)},function(e){thumbs.push(e[0]),updatePageCounter()},url.searchParams.get("blobURL"),"image/pwg-raster",source.pageCount,18,n);e.onload=null},debug(url.searchParams.get("blobURL")),e.open("GET",url.searchParams.get("blobURL"),!0),e.responseType="arraybuffer",e.send(null)}else debug("no blob url, in dev mode?");document.getElementById("blankText").addEventListener("click",function(e){document.getElementById("blank").click()}),document.getElementById("nBlankText").addEventListener("click",function(e){document.getElementById("nearly").click()}),document.getElementById("twoUpText").addEventListener("click",function(e){document.getElementById("twoup").click()}),document.getElementById("blank").addEventListener("click",function(e){stopTimer(),document.getElementById("twoup").checked&&selectTwoUp(fp),upadatePrintCount()}),document.getElementById("nearly").addEventListener("click",function(e){stopTimer(),document.getElementById("twoup").checked&&selectTwoUp(fp),upadatePrintCount()}),document.getElementById("twoup").addEventListener("click",function(e){stopTimer(),debug("Twoup checked"),currentPage=1,updatePageCounter(),source.gotoPage(1),document.getElementById("twoup").checked?selectTwoUp(fp):(halfSize=new Filter(source.getPageDataRGBAScaled(reduceFactor)),before=halfSize.inkUsage(),selectProfileInternal("imperceptable"))}),document.getElementById("printAction").addEventListener("click",function(e){doPrint()}),document.getElementById("printDeltasAction").addEventListener("click",function(e){doPrint({profileName:PRINT_MODES[parseInt(document.getElementById("print_mode").value)],twoUp:document.getElementById("twoup").checked,filterBlank:document.getElementById("blank").checked,filterNearlyBlank:document.getElementById("nearly").checked,saveLocally:!1,print:!0,pageModifier:diffs,expectedPageCount:diffs.length})}),document.getElementById("next").addEventListener("click",function(e){currentPage++,updatePageCounter(),document.getElementById("twoup").checked?selectTwoUp(fp):(renderPage(currentPage),applyProfile())}),document.getElementById("prev").addEventListener("click",function(e){currentPage--,updatePageCounter(),document.getElementById("twoup").checked?selectTwoUp(fp):(renderPage(currentPage),applyProfile())}),document.getElementById("cancelAction").addEventListener("click",function(e){chrome.runtime.sendMessage({command:"cancelJob",jobID},function(e){}),window.close()}),document.getElementById("estimated_text_div").innerHTML=chrome.i18n.getMessage("ink_save_estimated_saving"),document.getElementById("best_option").setAttribute("title",chrome.i18n.getMessage("ink_save_tooltip_best")),document.getElementById("best_option").innerHTML+=chrome.i18n.getMessage("ink_save_best"),document.getElementById("best_option").addEventListener("click",()=>{selectProfileFromSelect(PRINT_MODES[1])}),document.getElementById("saver_option").setAttribute("title",chrome.i18n.getMessage("ink_save_tooltip_saver")),document.getElementById("saver_option").innerHTML+=chrome.i18n.getMessage("ink_save_saver"),document.getElementById("saver_option").addEventListener("click",()=>{selectProfileFromSelect(PRINT_MODES[2])}),document.getElementById("zap_option").setAttribute("title",chrome.i18n.getMessage("ink_save_tooltip_zap")),document.getElementById("zap_option").innerHTML+=chrome.i18n.getMessage("ink_save_zap"),document.getElementById("zap_option").addEventListener("click",()=>{selectProfileFromSelect(PRINT_MODES[3])}),document.getElementById("mono_option").setAttribute("title",chrome.i18n.getMessage("ink_save_tooltip_mono")),document.getElementById("mono_option").innerHTML+=chrome.i18n.getMessage("ink_save_mono"),document.getElementById("mono_option").addEventListener("click",()=>{selectProfileFromSelect(PRINT_MODES[4])}),document.getElementById("draft_option").setAttribute("title",chrome.i18n.getMessage("ink_save_tooltip_draft")),document.getElementById("draft_option").innerHTML+=chrome.i18n.getMessage("ink_save_draft"),document.getElementById("draft_option").addEventListener("click",()=>{selectProfileFromSelect(PRINT_MODES[5])}),document.getElementById("superdraft_option").setAttribute("title",chrome.i18n.getMessage("ink_save_tooltip_superdraft")),document.getElementById("superdraft_option").innerHTML+=chrome.i18n.getMessage("ink_save_superdraft"),document.getElementById("superdraft_option").addEventListener("click",()=>{selectProfileFromSelect(PRINT_MODES[6])}),document.getElementById("ultradraft_option").setAttribute("title",chrome.i18n.getMessage("ink_save_tooltip_ultradraft")),document.getElementById("ultradraft_option").innerHTML+=chrome.i18n.getMessage("ink_save_ultradraft"),document.getElementById("ultradraft_option").addEventListener("click",()=>{selectProfileFromSelect(PRINT_MODES[7])}),debug("[Main] Init complete")};

},{"./debugConsole":30,"./features/printNudge/functionWebWorkify":31,"./features/printNudge/levelsChart":32,"./hashing/sha256":33,"./pdl":57,"./pdl/filters/imageFilter":43,"./pdl/workers/tng":75,"undefsafe":11}]},{},[76])
