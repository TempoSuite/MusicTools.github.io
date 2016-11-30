//Copyright 2016 Matthew Whitaker/Sub 6 Resources
function toolbar(title, color) {
  
}
function updateMHTMLObjects() {
  document.getElementsByTagName("body")[0].style.padding = "0";
  document.getElementsByTagName("body")[0].style.margin = "0";
  document.getElementsByTagName("body")[0].style.boxSizing = "border-box";
  document.getElementsByTagName("body")[0].style.marginTop = "60px";
  var materialAccentColor = document.querySelectorAll('[type="accentColor"]')[0].getAttribute("color");
  var toolbars = document.getElementsByTagName("toolbar");
  var contents = document.getElementsByTagName("content");
  var copyrights = document.getElementsByTagName("copyright");
  var buttons = document.getElementsByTagName("mbutton");
  var fabs = document.getElementsByTagName("fab");
  var actions = document.getElementsByTagName("action");
  var materialBackgroundColor = "#eeeeee";
  var materialSecondaryColor = "#002E9D";
  var materialTextColor = "#FFFFFF";
  for(i = 0; i < fabs.length; i++) {
    var readable = i+1;
    fabs[i].innerHTML = '<div onClick="fab'+readable+'Click()" id="fab'+readable+'" style="padding-top:15px; cursor:pointer; font-size:24px; width:56px; -webkit-box-shadow: 0px 3px 15px 0px rgba(0,0,0,0.26); -moz-box-shadow: 0px 3px 15px 0px rgba(0,0,0,0.26); box-shadow: 0px 3px 15px 0px rgba(0,0,0,0.26);height: 56px; border-radius:100%; background-color:'+materialAccentColor+'; color:'+materialTextColor+'; position:fixed; bottom:23px; right:23px; text-align:center;"><i class="material-icons">'+fabs[i].innerHTML+'</i></div>';
  }
  for(i = 0; i < actions.length; i++) {
    var buffer = i * 42;
    var totalbuffer = buffer + 36;
    var methodToCall = actions[i].getAttribute("clickFunction");
    actions[i].innerHTML = '<i style="color:'+materialTextColor+';position:fixed; right:'+totalbuffer+'px; top:18px; cursor:pointer;" onClick="'+methodToCall+'" class="material-icons">'+actions[i].innerHTML+'</i>';
  }
  for(i = 0; i < contents.length; i++) {
    contents[i].innerHTML = '<div id="content" style="width:100%; font-family: \'Roboto\', sans-serif; padding-left:100px; padding-right:100px;">'+contents[i].innerHTML+'</div>';
  }
  for(i = 0; i < buttons.length; i++) {
    buttons[i].innerHTML = '<button style="padding:10px; margin:10px; background-color:'+materialAccentColor+'; color:'+materialTextColor+'; -webkit-box-shadow: 0px 3px 3px 0px rgba(0,0,0,0.4); -moz-box-shadow: 0px 3px 3px 0px rgba(0,0,0,0.4); box-shadow: 0px 3px 3px 0px rgba(0,0,0,0.4); border:none; font-family: \'Roboto\', sans-serif; font-weight:bold; cursor:pointer; text-transform:uppercase;">'+buttons[i].innerHTML+'</button>';
  }
  //Iterate through all toolbars and convert them to cool-looking toolbars!!!
  for(i = 0; i < toolbars.length; i++) {
    var toolbarTextText = toolbars[i].getAttribute("title");
    var hamburger = toolbars[i].getAttribute("hamburger");
    if(!hamburger) {
    toolbars[i].innerHTML = '<div style="width:100%; box-sizing: border-box; background-color:'+materialAccentColor+'; color:'+materialTextColor+'; font-family: \'Roboto\', sans-serif; font-weight:400; font-size: 18px; padding:21px; -webkit-box-shadow: 0px 2px 5px 0px rgba(0,0,0,0.26); -moz-box-shadow: 0px 2px 5px 0px rgba(0,0,0,0.26); box-shadow: 0px 2px 5px 0px rgba(0,0,0,0.26); position:fixed; top:0;">'+toolbarTextText+'</div>';
    } else {
    toolbars[i].style.color = materialTextColor;
    toolbars[i].innerHTML = '<div style="width:100%; box-sizing: border-box; background-color:'+materialAccentColor+'; font-family: \'Roboto\', sans-serif; font-weight:400; font-size: 18px; padding:21px; padding-left:72px; -webkit-box-shadow: 0px 2px 5px 0px rgba(0,0,0,0.26); -moz-box-shadow: 0px 2px 5px 0px rgba(0,0,0,0.26); box-shadow: 0px 2px 5px 0px rgba(0,0,0,0.26); position:fixed; top:0;">'+toolbarTextText+'</div><i onClick="openHamburger()" style="position:fixed; font-size: 24px; cursor:pointer; left: 24px; top:32px; margin:0px; font-family:\'Material Icons\'; font-style:normal; line-height:0;" >menu</i>';
    }
    
    //alert("Material Styles Added");
  }
  for(i = 0; i < copyrights.length; i++) {
    copyrights[i].innerHTML = '<div style="background-color:'+materialAccentColor+'; font-family: \'Roboto\', sans-serif; font-weight:300; color:'+materialTextColor+'; width:100%; padding:10px; text-align:center">'+copyrights[i].innerHTML+"</div>";
  }
}

function openHamburger() {
  alert("Hamburger button clicked!");
}
updateMHTMLObjects();
