//Copyright 2016 Matthew Whitaker/Sub 6 Resources
function toolbar(title, color) {
  
}
function updateMHTMLObjects() {
  var toolbars = document.getElementsByTagName("toolbar");
  var contents = document.getElementsByTagName("content");
  var copyrights = document.getElementsByTagName("copyright");
  var materialBackgroundColor = "#eeeeee";
  var materialAccentColor = "#001E8D";
  var materialSecondaryColor = "#002E9D";
  var materialTextColor = "#EEEEEE";
  //Iterate through all toolbars and convert them to cool-looking toolbars!!!
  for(i = 0; i < toolbars.length; i++) {
    var toolbarText = toolbars[i].getAttribute("title");
    var iconOne = toolbars[i].getAttribute("iconOneURL");
    var iconTwo = toolbars[i].getAttribute("iconTwoURL");
    var iconThree = toolbars[i].getAttribute("iconThreeURL");
    var iconFour = toolbars[i].getAttribute("iconFourURL");
    var iconFive = toolbars[i].getAttribute("iconFiveURL");
    var iconSix = toolbars[i].getAttribute("iconSixURL");
    var iconSeven = toolbars[i].getAttribute("iconSevenURL");
    var iconEight = toolbars[i].getAttribute("iconEightURL");
    var iconNine = toolbars[i].getAttribute("iconNineURL");
    var iconTen = toolbars[i].getAttribute("iconTenURL");
    
    var toolbarChildDiv = document.createElement("div");
    var toolbarText = document.createElement("span");
    toolbarText.style.color = materialTextColor;
    toolbarText.style.textSize = "30px";
    toolbarText.style.fontFamily = "'Roboto', sans-serif";
    toolbarText.style.fontWeight = "100";
    //TODO add imgs for icons.
    toolbarChildDiv.appendChild(toolbarText);
    toolbars[i].appendChild(toolbarChildDiv);
    toolbars[i].style.width = "100%";
    toolbars[i].style.backgroundColor = materialAccentColor;
    toolbars[i].style.color = materialTextColor;
    toolbars[i].innerHTML = toolbarText;
    
    alert("Material Styles Added");
  }
}
updateMHTMLObjects();
