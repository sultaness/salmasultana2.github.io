!function(e){var t=e.getElementsByTagName("meta"),n=function(e){for(var n=0;n<t.length;n++)"viewport"==t[n].name&&(t[n].content=e)},i=function(){n("width=device-width, minimum-scale=1.0, maximum-scale=1.0")},a=function(){n("width=device-width, minimum-scale=0.25, maximum-scale=1.6")},m=function(){i()};navigator.userAgent.match(/iPhone/i)&&(i(),e.addEventListener("touchstart",a,!1),e.addEventListener("touchend",m,!1))}(document);