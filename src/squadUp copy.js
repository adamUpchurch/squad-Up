function promptGamerTags() {
  var url;
  var gamer = prompt("Enter Gamer: ");
  url = `file:///Users/AdamMacPro/squadUp/testStream.html?key=${gamer}`;
  window.open(url)
}
