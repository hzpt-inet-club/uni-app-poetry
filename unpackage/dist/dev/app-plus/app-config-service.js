
var isReady=false;var onReadyCallbacks=[];
var isServiceReady=false;var onServiceReadyCallbacks=[];
var __uniConfig = {"pages":["pages/index/index","pages/video/index","pages/chat/index","pages/push/index","pages/myself/index","pages/message/index","pages/myself/register/index","pages/myself/signIn/index"],"window":{"navigationStyle":"default","pullToRefresh":true,"titleView":false},"tabBar":{"backgroundColor":"#FFFFFF","list":[{"pagePath":"pages/index/index","iconPath":"static/default_home.png","selectedIconPath":"static/select_home.png"},{"pagePath":"pages/video/index","iconPath":"static/default_find.png","selectedIconPath":"static/select_find.png"},{"pagePath":"pages/chat/index","iconPath":"static/default_chat.png","selectedIconPath":"static/select_chat.png"},{"pagePath":"pages/myself/index","iconPath":"static/default_myself.png","selectedIconPath":"static/select_myself.png"}],"midButton":{"iconPath":"static/default_push.png","iconWidth":"64px"}},"nvueCompiler":"uni-app","nvueStyleCompiler":"uni-app","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"uni-app-poetry","compilerVersion":"3.1.22","entryPagePath":"pages/chat/index","entryPageQuery":"","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000}};
var __uniRoutes = [{"path":"/pages/index/index","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationStyle":"custom"}},{"path":"/pages/video/index","meta":{"isQuit":true,"isTabBar":true},"window":{}},{"path":"/pages/chat/index","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarBackgroundColor":"#FB7575","navigationBarTitleText":"消息","navigationBarTextStyle":"black","titleNView":{"buttons":[{"type":"menu"}]}}},{"path":"/pages/push/index","meta":{},"window":{}},{"path":"/pages/myself/index","meta":{"isQuit":true,"isTabBar":true},"window":{}},{"path":"/pages/message/index","meta":{},"window":{"navigationBarBackgroundColor":"#FB7575","navigationBarTitleText":"","navigationBarTextStyle":"white","titleNView":{"buttons":[{"type":"menu"}]}}},{"path":"/pages/myself/register/index","meta":{},"window":{"navigationStyle":"custom","background":"#000000"}},{"path":"/pages/myself/signIn/index","meta":{},"window":{"navigationStyle":"custom","background":"#000000"}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
__uniConfig.onServiceReady=function(callback){if(__uniConfig.serviceReady){callback()}else{onServiceReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"serviceReady",{get:function(){return isServiceReady},set:function(val){isServiceReady=val;if(!isServiceReady){return}const callbacks=onServiceReadyCallbacks.slice(0);onServiceReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:void 0,window:void 0,document:void 0,frames:void 0,self:void 0,location:void 0,navigator:void 0,localStorage:void 0,history:void 0,Caches:void 0,screen:void 0,alert:void 0,confirm:void 0,prompt:void 0,fetch:void 0,XMLHttpRequest:void 0,WebSocket:void 0,webkit:void 0,print:void 0}}}});
