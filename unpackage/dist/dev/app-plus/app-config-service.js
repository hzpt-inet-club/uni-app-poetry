
var isReady=false;var onReadyCallbacks=[];
var isServiceReady=false;var onServiceReadyCallbacks=[];
var __uniConfig = {"pages":["pages/index/index","pages/chat/index","pages/myself/index","pages/message/index","pages/history/index","pages/articleshow/index","pages/video/index","pages/mapshow/index","pages/maparticle/index","pages/rostrum/index","pages/vidershow/index","pages/historyimage/index","pages/heros/index","pages/heroshow/index","pages/rostrunshow/index","pages/imgshow/index","pages/login/login","pages/register/register","pages/change_password/change_password","pages/chnagesuccess/chnagesuccess","pages/movies/movies","pages/button/button","pages/guide/guide","pages/guide/judge"],"window":{"navigationStyle":"default","pullToRefresh":true,"titleView":false},"tabBar":{"backgroundColor":"#FFFFFF","list":[{"pagePath":"pages/index/index","iconPath":"static/default_home.png","selectedIconPath":"static/select_home.png"},{"pagePath":"pages/historyimage/index","iconPath":"static/default_find.png","selectedIconPath":"static/select_find.png"},{"pagePath":"pages/video/index","iconPath":"static/video2.png","selectedIconPath":"static/video%20(2).png"},{"pagePath":"pages/myself/index","iconPath":"static/default_myself.png","selectedIconPath":"static/select_myself.png"}]},"nvueCompiler":"uni-app","nvueStyleCompiler":"uni-app","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"uni-app-poetry","compilerVersion":"3.1.16","entryPagePath":"pages/guide/judge","entryPageQuery":"","realEntryPagePath":"pages/index/index","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000}};
var __uniRoutes = [{"path":"/pages/index/index","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationStyle":"custom"}},{"path":"/pages/chat/index","meta":{},"window":{"navigationBarBackgroundColor":"#bc1a32","navigationBarTitleText":"消息","navigationBarTextStyle":"black","titleNView":{"buttons":[{"type":"menu"}]}}},{"path":"/pages/myself/index","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"我的","navigationBarBackgroundColor":"#bc1a32","navigationBarTextStyle":"white","titleNView":{"buttons":[{"text":"","fontSrc":"/static/icon.ttf","fontSize":"22px"}]}}},{"path":"/pages/message/index","meta":{},"window":{"navigationBarBackgroundColor":"#bc1a32","navigationBarTitleText":"","navigationBarTextStyle":"white","titleNView":{"buttons":[{"type":"menu"}]}}},{"path":"/pages/history/index","meta":{},"window":{"navigationBarTitleText":"党史百科","navigationBarBackgroundColor":"#bc1a32","navigationBarTextStyle":"white"}},{"path":"/pages/articleshow/index","meta":{},"window":{"navigationBarTitleText":"展示","navigationBarBackgroundColor":"#bc1a32","navigationBarTextStyle":"white"}},{"path":"/pages/video/index","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"百年征程","navigationBarBackgroundColor":"#bc1a32","navigationBarTextStyle":"white"}},{"path":"/pages/mapshow/index","meta":{},"window":{"navigationBarTitleText":"红色足迹","navigationBarBackgroundColor":"#bc1a32","navigationBarTextStyle":"white"}},{"path":"/pages/maparticle/index","meta":{},"window":{"navigationBarTitleText":"","navigationBarBackgroundColor":"#bc1a32","navigationBarTextStyle":"white"}},{"path":"/pages/rostrum/index","meta":{},"window":{"navigationBarTitleText":"浙江讲坛","navigationBarBackgroundColor":"#bc1a32","navigationBarTextStyle":"white"}},{"path":"/pages/vidershow/index","meta":{},"window":{"navigationStyle":"custom"}},{"path":"/pages/historyimage/index","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"峥嵘岁月","navigationBarBackgroundColor":"#bc1a32","navigationBarTextStyle":"white"}},{"path":"/pages/heros/index","meta":{},"window":{"navigationBarTitleText":"英雄人物","navigationBarBackgroundColor":"#bc1a32","navigationBarTextStyle":"white"}},{"path":"/pages/heroshow/index","meta":{},"window":{"navigationBarTitleText":"","navigationBarBackgroundColor":"#bc1a32","navigationBarTextStyle":"white"}},{"path":"/pages/rostrunshow/index","meta":{},"window":{"navigationBarTitleText":"","navigationBarBackgroundColor":"#bc1a32","navigationBarTextStyle":"white"}},{"path":"/pages/imgshow/index","meta":{},"window":{"navigationBarTitleText":"","navigationBarBackgroundColor":"#bc1a32","navigationBarTextStyle":"white"}},{"path":"/pages/login/login","meta":{},"window":{"navigationStyle":"custom"}},{"path":"/pages/register/register","meta":{},"window":{"navigationStyle":"custom"}},{"path":"/pages/change_password/change_password","meta":{},"window":{"navigationStyle":"custom"}},{"path":"/pages/chnagesuccess/chnagesuccess","meta":{},"window":{"navigationStyle":"custom"}},{"path":"/pages/movies/movies","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pages/button/button","meta":{},"window":{"navigationBarTitleText":"小浙","navigationBarBackgroundColor":"#bc1a32","navigationBarTextStyle":"white"}},{"path":"/pages/guide/guide","meta":{},"window":{"enablePullDownRefresh":false,"onReachBottomDistance":100,"navigationStyle":"custom","contentAdjust":false,"bounce":"none"}},{"path":"/pages/guide/judge","meta":{},"window":{"enablePullDownRefresh":false,"onReachBottomDistance":100,"navigationStyle":"custom","contentAdjust":false,"bounce":"none"}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
__uniConfig.onServiceReady=function(callback){if(__uniConfig.serviceReady){callback()}else{onServiceReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"serviceReady",{get:function(){return isServiceReady},set:function(val){isServiceReady=val;if(!isServiceReady){return}const callbacks=onServiceReadyCallbacks.slice(0);onServiceReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:void 0,window:void 0,document:void 0,frames:void 0,self:void 0,location:void 0,navigator:void 0,localStorage:void 0,history:void 0,Caches:void 0,screen:void 0,alert:void 0,confirm:void 0,prompt:void 0,fetch:void 0,XMLHttpRequest:void 0,WebSocket:void 0,webkit:void 0,print:void 0}}}});
