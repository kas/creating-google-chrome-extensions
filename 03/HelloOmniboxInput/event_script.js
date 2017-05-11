//region {variables and functions}
var ON_INPUT_ENTERED_DISPOSITION = {
  "CURRENT_TAB": "currentTab",
  "NEW_FOREGROUND_TAB": "newForegroundTab",
  "NEW_BACKGROUND_TAB": "newBackgroundTab"
};
var suggestResultOne = {
  "content": "Some content",
  "description": "Description"
};
var suggestResults = [suggestResultOne];
var searchService = 'https://www.google.com/';
searchService += 'search?q=chrome+extensions+developers+';
function createWindow(url) {
  var windowCreateData = {"url": ""};
  windowCreateData.url = url;
  chrome.windows.create(windowCreateData)
}
//end-region

//region {calls}
chrome.omnibox.onInputStarted.addListener(function() {
  console.log('<InputStarted>');
});
chrome.omnibox.onInputChanged.addListener(function(text, suggest) {
  console.log('<InputChanged> Text:', text);
  //suggest(suggestResults);
  suggest(getSuggestResults(text));
});
chrome.omnibox.onInputEntered.addListener(function(text, disposition) {
  console.log('<InputEntered> Text:', text);
  createWindow(searchService + text);
  //default disposition is ON_INPUT_ENTERED_DISPOSITION.CURRENT_TAB
});
chrome.omnibox.setDefaultSuggestion(
  {"description": "Search on developer.chrome.com"}
);
//end-region