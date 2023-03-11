function ReadingBar(){const e=[1,10,15,20,30,50,100,200,300,400,500];let t=this;function i(e,t,i,r=!1,o=!1){return scriptInjector.canExecuteScript().then((()=>pdfDoc.isOnlinePdf())).then((a=>new Promise((c=>{a?c():(r&&extension.beingReadTabId>0&&e!==extension.beingReadTabId&&reader.stop(),chrome.tabs.sendMessage(e,{fn:"getHasReadingBar"},(function(r){if(chrome.runtime.lastError)return scriptInjector.executeScriptsForReader(e,t).then((()=>n(e))).then((()=>scriptInjector.executeScriptsForReadingBar(e))).then((()=>{extension.beingReadTabId=e,extension.beingReadWindowId=extension.activeWindowId,chrome.tabs.sendMessage(e,{message:"injectReadingBar",showOnboard:extension.showOnboard,isEmail:o,tabId:e,activeTabId:extension.activeTabId},(function(e){chrome.runtime.lastError,c()})),s(e,t)}));r?(extension.beingReadTabId=e,chrome.tabs.sendMessage(e,{fn:"toggleReadingBar",toShow:i,tabId:e,beingReadTabId:extension.beingReadTabId,activeTabId:extension.activeTabId,isEmail:o},(()=>{chrome.runtime.lastError})),c()):chrome.tabs.sendMessage(e,{message:"injectReadingBar",showOnboard:extension.showOnboard,isEmail:o,tabId:e,activeTabId:extension.activeTabId},(function(e){chrome.runtime.lastError,c()}))})))})))).catch((e=>{}))}function s(e,t){chrome.tabs.sendMessage(e,{fn:"getHasIcon"},(function(i){chrome.runtime.lastError?o(e,t):i||o(e,t)}))}function n(e){return new Promise((t=>{chrome.tabs.sendMessage(e,{fn:"getHasCC"},(async function(i){chrome.runtime.lastError?(await r(e),t()):(i||await r(e),t())}))})).catch((e=>{}))}function r(e){return new Promise((i=>{chrome.scripting.executeScript({target:{tabId:e},files:["injected/nr-ext-cc/nr-ext-cc.js"]},(function(){chrome.runtime.lastError&&i(),chrome.tabs.sendMessage(e,{message:"injectCC",toShow:t.settings.isCC&&"reading"===readingBar.settings.readerState,isCC:t.settings.isCC},(function(e){chrome.runtime.lastError&&i(),i()}))}))})).catch((e=>{}))}function o(e,i){chrome.scripting.executeScript({target:{tabId:e},files:["assets/js/jquery-3.6.0.min.js"]},(()=>{chrome.runtime.lastError,chrome.scripting.executeScript({target:{tabId:e},files:["injected/nr-ext-text-processor/nr-ext-text-processor.js"]},(()=>{chrome.runtime.lastError,"googleDoc"===i?chrome.scripting.executeScript({target:{tabId:e},files:["injected/nr-ext-text-processor/google-doc-utils.js"]},(()=>{chrome.runtime.lastError,chrome.scripting.executeScript({target:{tabId:e},files:["injected/nr-ext-dom/nr-ext-dom-detector.js"]},(()=>{chrome.runtime.lastError,chrome.tabs.sendMessage(e,{message:"injectSD",value:{iconState:t.settings.readIcon,LimitedReadSelectionOn:t.settings.LimitedReadSelectionOn,LimitedReadSelectionCharAmount:t.settings.LimitedReadSelectionCharAmount}},(()=>{chrome.runtime.lastError}))}))})):chrome.scripting.executeScript({target:{tabId:e},files:["injected/nr-ext-dom/nr-ext-dom-detector.js"]},(()=>{chrome.runtime.lastError,chrome.tabs.sendMessage(e,{message:"injectSD",value:{iconState:t.settings.readIcon,LimitedReadSelectionOn:t.settings.LimitedReadSelectionOn,LimitedReadSelectionCharAmount:t.settings.LimitedReadSelectionCharAmount}},(()=>{chrome.runtime.lastError}))}))}))}))}t.injectReadingBar=i,t.initSliders=function(e,t,i){const s=t.tab.id;return scriptInjector.executeScriptsForReadingBarSliders(s).then((()=>{i(!0)})).catch((e=>{i(!1)}))},t.injectSD=s,t.injectQuickStart=function(e,i){("html"===i&&t.settings.isQuickStartWebpage||"googleDoc"===i&&t.settings.isQuickStartGoogleDocs)&&!(extension.activeTab.origin in t.settings.quickStartBlackList)&&"https://www.naturalreaders.com/ext/"!==extension.activeTab.href&&extension.activeTab.origin in t.settings.mostListenedWebsites&&chrome.tabs.sendMessage(e,{fn:"getHasQuickStart"},(function(s){if(!(extension.activeTab.origin in t.settings.quickStartBlackList)){if(chrome.runtime.lastError)return scriptInjector.executeScriptsForQuickStart(e,i).then((()=>{chrome.tabs.sendMessage(e,{fn:"injectQuickStart",docType:i,isQuickStartShowFullText:readingBar.settings.isQuickStartShowFullText},(()=>{chrome.runtime.lastError}))}));if(!s)return scriptInjector.executeScriptsForQuickStart(e,i).then((()=>{chrome.tabs.sendMessage(e,{fn:"injectQuickStart",docType:i,isQuickStartShowFullText:readingBar.settings.isQuickStartShowFullText},(()=>{chrome.runtime.lastError}))}))}}))},t.injectCC=n,t.injectEmailIcon=function(e,i){if(("outlookMail"===i||"gmail"===i)&&t.settings.isQuickStartEmail)return chrome.runtime.lastError,scriptInjector.executeScriptsForEmailIcon(e,i)},t.setReadingBarUI=function(e){e&&chrome.tabs.sendMessage(e,{fn:"getHasReadingBar"},(function(t){chrome.runtime.lastError,t&&chrome.tabs.sendMessage(e,{fn:"setReadingBarUI"},(()=>{chrome.runtime.lastError}))}))},t.setReadingBarSetting=function(e,i,s){const n=extension.beingReadTabId?extension.beingReadTabId:extension.activeTabId;if("beHighlighted"===e.key)chrome.tabs.sendMessage(n,{message:"beHighlightedOnChange",beHighlighted:e.value,highlightColour:t.settings.highlightColour},(()=>{chrome.runtime.lastError}));else if("highlightColour"===e.key)chrome.tabs.sendMessage(n,{message:"highlightColourOnChange",highlightColour:e.value,oldHighlightColour:t.settings.highlightColour,beHighlighted:t.settings.beHighlighted,readerState:t.settings.readerState},(()=>{chrome.runtime.lastError}));else if("isAutoScroll"===e.key)chrome.tabs.sendMessage(n,{message:"isAutoScrollOnChange",isAutoScroll:e.value},(()=>{chrome.runtime.lastError}));else if("LimitedReadSelectionCharAmount"===e.key)chrome.tabs.sendMessage(n,{message:"setLimit",value:e.value},(()=>{chrome.runtime.lastError}));else if("isVisible"===e.key)chrome.tabs.sendMessage(n,{message:"isVisibleOnChange",isVisible:e.value,mode:t.settings.mode},(()=>{chrome.runtime.lastError}));else if("readerState"===e.key&&i.tab.id!==extension.beingReadTabId)return;t.settings[e.key]=e.value;let r={};r[e.key]=e.value;storage.set(r,"sync")},t.addQuickStartBlackList=function(e,i,s){t.settings.quickStartBlackList[i.origin]=!0;const n={};n.quickStartBlackList=t.settings.quickStartBlackList,storage.set(n)},t.removeQuickStartBlackList=function(e,i,s){delete t.settings.quickStartBlackList[i.origin];const n={};n.quickStartBlackList=t.settings.quickStartBlackList,storage.set(n)},t.addMostListenedWebsite=function(e,i,s){const n=e.origin;n in t.settings.mostListenedWebsites?(t.settings.mostListenedWebsites[n].time=Date.now(),t.settings.mostListenedWebsites[n].num=t.settings.mostListenedWebsites[n].num+1):t.settings.mostListenedWebsites[n]={time:Date.now(),num:1};const r=Object.keys(t.settings.mostListenedWebsites);if(r.length>10){const e=[];for(let i=0;i<r.length;i++){const s=t.settings.mostListenedWebsites[r[i]];e.push([r[i],s.num,s.time])}e.sort((function(e,t){return e[1]-t[1]||e[2]-t[2]})),delete t.settings.mostListenedWebsites[e[0][0]]}},t.defaultSettings={isVisible:!1,mode:"max",readerState:"init",voiceType:"prem",speed:180,volume:.75,freeVoice:null,readIcon:!0,beHighlighted:[],isAutoScroll:!0,isCC:!1,isQuickStartWebpage:!0,isQuickStartPdf:!0,isQuickStartGoogleDocs:!0,isQuickStartEmail:!0,quickStartBlackList:{},mostListenedWebsites:{},isDyslexic:!1,isClickToRead:!0,theme:"light",systemTheme:"light",isAutoSelectVoice:!1,preferredVoicesByLang:{},prevVoiceTypeBeforeAutoSelectsFree:"",showReadSelectionToPageEndOption:!0,readSelectionOption:"selection",highlightColour:"light",userInfo:{licNum:0,licCode:"0",license:"0",pwLicCode:"0",pwLicNum:"0",email:"user@naturalreaders.com",session:null},loggedIn:0,LimitedReadSelectionOn:!1,LimitedReadSelectionCharAmount:20,backwardStep:0,forwardStep:0,backwardSkipNumber:[1,2],forwardSkipNumber:[2,4],returnNormalSkipTime:2e3,isMaxModeOpenedBefore:!1,isImmersiveTextSpacing:!1,immersiveTextSize:1,messageType:"signup",messageTime:null,messageFirstDay:null,isShowMobileMessage:!0,isShowRateMessage:!0,shouldCheckForPreviewMode:!0},t.settings=t.defaultSettings,t.isAsyncFunction=function(e){return!!t.asyncFunctions.includes(e)},t.asyncFunctions=["getReadingBarSettings","initSliders"],t.getReadingBarSettings=function(e,i,s){e.key?s(t.settings[e.key]):s(t.settings)},chrome.runtime.onMessage.addListener((function(e,s,n){if(t[e.fn]){if(t[e.fn](e,s,n),t.isAsyncFunction(e.fn))return!0}else"systemThemeOnChange"===e.message?t.settings.systemTheme=e.value:"injectReadingBar"===e.message?i(s.tab.id,e.docType,null,!0):"setReadingBarSetting"===e.message&&e.tabId&&chrome.tabs.sendMessage(e.tabId,{message:e.message,key:e.key,value:e.value,data:e.data},(()=>{chrome.runtime.lastError}))})),chrome.storage.sync.get(null,(i=>{chrome.runtime.lastError,t.settings.mode=i&&i.mode?i.mode:"max",t.settings.voiceType=i&&i.voiceType?i.voiceType:"prem",t.settings.freeVoice=i&&i.freeVoice?i.freeVoice:null,t.settings.premVoice=i&&i.premVoice?i.premVoice:null,t.settings.plusVoice=i&&i.plusVoice?i.plusVoice:null,t.settings.preset1Voice=i&&i.preset1Voice?i.preset1Voice:null,t.settings.preset2Voice=i&&i.preset2Voice?i.preset2Voice:null,t.settings.beHighlighted=i&&i.beHighlighted?i.beHighlighted:["sentence","word"],t.settings.highlightColour=i&&i.highlightColour?i.highlightColour:"light",t.settings.readIcon=!i||null==i.readIcon||i.readIcon,t.settings.isAutoScroll=!i||!("isAutoScroll"in i)||i.isAutoScroll,t.settings.isCC=!(!i||!("isCC"in i))&&i.isCC,t.settings.isQuickStartWebpage=!i||!("isQuickStartWebpage"in i)||i.isQuickStartWebpage,t.settings.isQuickStartPdf=!i||!("isQuickStartPdf"in i)||i.isQuickStartPdf,t.settings.isQuickStartGoogleDocs=!i||!("isQuickStartGoogleDocs"in i)||i.isQuickStartGoogleDocs,t.settings.isQuickStartEmail=!i||!("isQuickStartEmail"in i)||i.isQuickStartEmail,t.settings.quickStartBlackList=i&&"quickStartBlackList"in i?i.quickStartBlackList:{},t.settings.mostListenedWebsites=i&&"mostListenedWebsites"in i?i.mostListenedWebsites:{},t.settings.isDyslexic=!(!i||!("isDyslexic"in i))&&i.isDyslexic,t.settings.isClickToRead=!i||!("isClickToRead"in i)||i.isClickToRead;const s=!(!i||!("isDarkTheme"in i))&&i.isDarkTheme;t.settings.theme=i&&"theme"in i?i.theme:"light",s&&(t.settings.theme="dark"),t.settings.isAutoSelectVoice=!(!i||!("isAutoSelectVoice"in i))&&i.isAutoSelectVoice,t.settings.preferredVoicesByLang=i&&"preferredVoicesByLang"in i?i.preferredVoicesByLang:{},t.settings.prevVoiceTypeBeforeAutoSelectsFree=i&&"prevVoiceTypeBeforeAutoSelectsFree"in i?i.prevVoiceTypeBeforeAutoSelectsFree:"",t.settings.readSelectionOption=i&&i.readSelectionOption?i.readSelectionOption:"selection",t.settings.showReadSelectionToPageEndOption=!i||null==i.showReadSelectionToPageEndOption||i.showReadSelectionToPageEndOption,t.settings.LimitedReadSelectionOn=!i||null==i.LimitedReadSelectionOn||i.LimitedReadSelectionOn,t.settings.LimitedReadSelectionCharAmount=i&&i.LimitedReadSelectionCharAmount&&e.indexOf(parseInt(i.LimitedReadSelectionCharAmount))>-1?i.LimitedReadSelectionCharAmount:20,t.settings.speed=i&&i.speed?i.speed:180,t.settings.speed<40&&(t.settings.speed=180),t.settings.volume=i&&"volume"in i?i.volume:.75,t.settings.userInfo=i&&i.userInfo?i.userInfo:{licNum:0,licCode:"0",license:"0",pwLicCode:"0",pwLicNum:"0",email:"user@naturalreaders.com",session:null},t.settings.loggedIn=i&&"loggedIn"in i?i.loggedIn:0,t.settings.backwardStep=t.defaultSettings.backwardStep,t.settings.forwardStep=t.defaultSettings.forwardStep,t.settings.backwardSkipNumber=i&&i.backwardSkipNumber?i.backwardSkipNumber:t.defaultSettings.backwardSkipNumber,t.settings.forwardSkipNumber=i&&i.forwardSkipNumber?i.forwardSkipNumber:t.defaultSettings.forwardSkipNumber,t.settings.returnNormalSkipTime=i&&i.returnNormalSkipTime?i.returnNormalSkipTime:t.defaultSettings.returnNormalSkipTime,t.settings.isMaxModeOpenedBefore=!(!i||!("isMaxModeOpenedBefore"in i))&&i.isMaxModeOpenedBefore,t.settings.isImmersiveTextSpacing=!(!i||!("isImmersiveTextSpacing"in i))&&i.isImmersiveTextSpacing,t.settings.immersiveTextSize=i&&"immersiveTextSize"in i?i.immersiveTextSize:1,t.settings.messageType=i&&i.messageType?i.messageType:"signup",t.settings.messageTime=i&&i.messageTime?i.messageTime:null,t.settings.messageFirstDay=i&&i.messageFirstDay?i.messageFirstDay:Date.now(),t.settings.isShowMobileMessage=!i||!("isShowMobileMessage"in i)||i.isShowMobileMessage,t.settings.isShowRateMessage=!i||!("isShowRateMessage"in i)||i.isShowRateMessage,t.settings.shouldCheckForPreviewMode=!i||!("shouldCheckForPreviewMode"in i)||i.shouldCheckForPreviewMode}))}const readingBar=new ReadingBar;