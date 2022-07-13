//接收消息并处理
chrome.runtime.onMessage.addListener(function() 
{
});
//监听页面刷新 
chrome.tabs.onUpdated.addListener(function() {
});

// 监听消息 - 当窗口中的当前标签页更改时产生
chrome.tabs.onActivated.addListener(function() {
});

//监听点击（tab）
chrome.action.onClicked.addListener(function() {
});

//监听cookie
chrome.cookies.onChanged.addListener(function() {
});
//插件初次安装
chrome.runtime.onInstalled.addListener(function() {
});