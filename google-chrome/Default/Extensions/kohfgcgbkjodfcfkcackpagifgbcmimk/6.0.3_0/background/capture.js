function Capture(){let e=this;function n(e,n=1,t){try{chrome.tabs.captureVisibleTab(extension.beingReadWindowId,{format:"png",quality:100},(function(e){chrome.runtime.lastError&&t("ERR_MAX_CAPTURE_VISIBLE_TAB_CALLS_PER_SECOND"),t(e)}))}catch(e){}}e.isAsyncFunction=function(n){return e.asyncFunctions.includes(n)},e.captureRect=function(t,i,c){try{chrome.tabs.query({active:!0,windowId:extension.beingReadWindowId},(function(i){return i[0].id!==extension.beingReadTabId?(e.previousActiveTabId=i[0].id,chrome.tabs.update(extension.beingReadTabId,{active:!0}),n(t.rect,t.devicePixelRatio,c)):n(t.rect,t.devicePixelRatio,c)}))}catch(e){c("ERR")}},e.setPreviousTabActive=function(){null!=e.previousActiveTabId&&(chrome.tabs.update(e.previousActiveTabId,{active:!0}),e.previousActiveTabId=null)},e.asyncFunctions=["captureRect"],e.waitingForTab=!1,e.previousActiveTabId=null,chrome.runtime.onMessage.addListener((function(n,t,i){if(e[n.fn]&&(e[n.fn](n,t,i),e.isAsyncFunction(n.fn)))return!0}))}const capture=new Capture;