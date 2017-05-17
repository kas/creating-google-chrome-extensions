//region {variables and functions}
//Note this from the extensions page
var extensionId = 'lconbphjmfkpdopdnadkdfiiflajajgg';
var sendMessageButtonId = 'send_message';
var greeting = 'Hello World!';
var message = 'Test message X';
function responseCallback(responseObject) {
  console.log('Message', responseObject.message, 'from Sender', responseObject.sender);
}
//end-region

//region {calls}
console.log(greeting);
document.addEventListener('DOMContentLoaded', function(dcle) {
  var buttonId = document.getElementById(sendMessageButtonId);
  buttonId.addEventListener('click', function(ce) {
    //This message will be intercepted by event_script.js
    chrome.runtime.sendMessage(extensionId, message, responseCallback);
  });
});
//end-region