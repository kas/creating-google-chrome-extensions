//region {variables and functions}
var consoleGreeting = 'Hello World! - from popup_script.js';
//Active-URL can also be cached
//var activeUrl = '';
var noteElementId = 'note';
var saveButtonId = 'save_button';
var removeButtonId = 'remove_button';
var noteElement = null;
var saveButton = null;
var removeButton = null;
var queryInfo = {"active": true};
function logSuccess(task) {
  console.log('%s Successful!', task);
  chrome.browserAction.setBadgeText({"text": localStorage.length.toString()});
}
//function logFailure(task) {console.log('%s Failed!', task);}
function loadNoteForActiveUrl(noteElement) {
  chrome.tabs.query(queryInfo, function(tabs) {
    var activeUrl = tabs[0].url;
    noteElement.value = localStorage.getItem(activeUrl);
    logSuccess('Get-Storage');
  });
}
function softSave(noteText) {} //appends the text
function hardSave(noteText) { //overwrites the text
  chrome.tabs.query(queryInfo, function(tabs){
    var activeUrl = tabs[0].url;
    localStorage.setItem(activeUrl, noteText);
    logSuccess('Set-Storage');
  });
}
function removeNote() {
  chrome.tabs.query(queryInfo, function(tabs) {
    var activeUrl = tabs[0].url;
    localStorage.removeItem(activeUrl);
    logSuccess('Remove-Storage');
  });
}
//end-region

//region {calls}
console.log(consoleGreeting);
document.addEventListener('DOMContentLoaded', function(dcle) {
  saveButton = document.getElementById(saveButtonId);
  removeButton = document.getElementById(removeButtonId);
  noteElement = document.getElementById(noteElementId);

  //Load note for active URL (if it was stored before)
  loadNoteForActiveUrl(noteElement);
  chrome.browserAction.setBadgeBackgroundColor({"color": [255, 0, 0, 255]})
  //Add listeners to buttons
  saveButton.addEventListener('click', function(ce) {
    var noteText = noteElement.value;
    if (noteText.length > 0) hardSave(noteText);
  });
  removeButton.addEventListener('click', function(ce) {
    removeNote();
  });
});
//end-region