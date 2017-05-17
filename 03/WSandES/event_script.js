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
chrome.runtime.onMessageExternal.addListener(
  function(message, sender, sendResponse) {
    //Will get called from the script where sendResponse is defined
    sendResponse(responseObject);
    console.log(getFormattedMessageString(message, sender));
  }
);
//end-region