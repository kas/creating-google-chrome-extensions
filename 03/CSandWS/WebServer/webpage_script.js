//region {variables and functions}
var sendMessageButtonId = 'send_message';
var greeting = 'Hello World!';
//var targetOrigin = window.location.origin;
//var message = 'Test message Y';
//end-region

//region {calls}
console.log(greeting);
document.addEventListener('DOMContentLoaded', function(dcle) {
  var buttonId = document.getElementById(sendMessageButtonId);
  buttonId.addEventListener('click', function(ce) {
    //window.postMessage(message, targetOrigin);
  });
});
window.addEventListener('message', function(me) {
  console.log('message:', me.data);
});
//end-region