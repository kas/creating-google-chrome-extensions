//region {variables and functions}
var greeting = 'Hello World!';
var responseObject = {
  message: "Test message Y",
  sender: "event_script.js"
};
function getFormattedMessageString(message, sender) {
  return 'Message', message, 'from Sender', sender.url;
}
//end-region

//region {calls}
console.log(greeting);
chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
  //Will get called from the script where sendResponse is defined
  sendResponse(responseObject);
  console.log(getFormattedMessageString);
});
/*
chrome.runtime.onConnect.addListener(function(port) {
  port.onMessage.addListener(function(message){console.log(message);});
  port.postMessage('...');
});
*/
//end-region