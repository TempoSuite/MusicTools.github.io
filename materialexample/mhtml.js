//Copyright 2016 Matthew Whitaker/Sub 6 Resources
function toolbar(title, color) {
  
}
function updateMHTMLObjects() {
  document.getElementsByTagName("body")[0].style.padding = "0";
  document.getElementsByTagName("body")[0].style.margin = "0";
  
  var toolbars = document.getElementsByTagName("toolbar");
  var contents = document.getElementsByTagName("content");
  var copyrights = document.getElementsByTagName("copyright");
  var materialBackgroundColor = "#eeeeee";
  var materialAccentColor = "#001E8D";
  var materialSecondaryColor = "#002E9D";
  var materialTextColor = "#EEEEEE";
  //Iterate through all toolbars and convert them to cool-looking toolbars!!!
  for(i = 0; i < toolbars.length; i++) {
    var toolbarTextText = toolbars[i].getAttribute("title");
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
    
    toolbars[i].innerHTML = '<div style="width:100%; background-color:'+materialAccentColor+'; color:'+materialTextColor+'; font-family: \'Roboto\', sans-serif; font-weight:100; text-size: 40px; padding:10px;">'+toolbarTextText+'</div>';
    
    alert("Material Styles Added");
  }
}
updateMHTMLObjects();
