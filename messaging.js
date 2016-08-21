function sendMessage() {
        console.log("Sending message...");
        var messageEmail = document.getElementById("message_email").value;
        var subject = document.getElementById("subject").value;
        var messageContent = document.getElementById("message_content").value;
        var messagePreview = messageContent.substring(0,35);
        //alert(messageEmail);
        //alert(subject);
        //alert(messageContent);
        var punctuationless = messageEmail.replace(/['!"#$%&\\'()\*+,\-\.\/:;<=>?@\[\\\]\^_`{|}‌​~']/g,"");
        var messageEmailWithoutPunctuation = punctuationless.replace(/\s{2,}/g,"");
        var userId = firebase.auth().currentUser.uid;
        firebase.database().ref('/publicusers/' + messageEmailWithoutPunctuation).once('value').then(function(snapshot) {
          if(snapshot.val() != null) {
            var otheruid = snapshot.val().uid;
          } else {
            displayError("The email address you entered is not registered with MusicTools.");
            return false;
          }
          console.log("Updating message database...");
          var pushData = {
            content:messageContent,
            title:subject,
            from:uid,
            fromemail:email,
            messagepreview:messagePreview
          };
          var pushData2 = {
            content:messageContent,
            title:subject,
            to:otheruid,
            toemail:messageEmail,
            messagepreview:messagePreview
          };
          var uniquekey = firebase.database().ref('messages/to/'+otheruid).push().key;
          console.log("Unique key generated");
          firebase.database().ref('messages/to/'+otheruid+"/"+uniquekey).update(pushData);
          console.log("To generated successfully");
          firebase.database().ref('messages/from/'+uid+"/"+uniquekey).update(pushData2);
          console.log("From generated successfully");
          console.log("Done updating message database.");
          alert("Message Sent");
        });
        return false;
      }
      function attachMessageListener() {
           console.log("Attaching listener to messages/to/"+uid);
           var messagesRef = firebase.database().ref('messages/to/' + uid);
           messagesRef.on('child_added', function(data) {
                if(data == null) {
                    console.log("Data is null!");
                }
                console.log("Calling element add");
                addMessageElement(data.key, data.val().title, data.val().content, data.val().fromemail, data.val().messagepreview);
                console.log("Done calling add");
                console.log("Message preview: "+data.val().messagepreview);
           },function (errorObject) {
                logError("The read failed: " + errorObject.code+" stack: "+errorObject);
                displayError(errorObject.code);
           });
           console.log("Listener attached");
      }
      function addMessageElement(thekey, thetitle, thecontent, fromtheemail, thecontentpreview) {
              alert(thecontent);
             console.log("Creating new message element");
             //alert(thekey);
             var para = document.createElement("span");
             var para2 = document.createElement("span");
             var para3 = document.createElement("span");
             var fromText = document.createTextNode(fromtheemail+" ---- ");
             var final = document.createElement("div");
             final.setAttribute("onClick","openMessage('"+thekey+"')");
             para.appendChild(fromText);
             para.setAttribute("class","fromEmail");
             final.appendChild(para);  
             var titleText = document.createTextNode(thetitle+" ");      
             para2.appendChild(titleText);
             para2.setAttribute("class","subjectPreview");
             final.appendChild(para2);  
             var contentText = document.createTextNode(" "+thecontentpreview);
             para3.appendChild(contentText);
             para3.setAttribute("class","contentPreview");
             final.appendChild(para3);
             document.getElementById("messages").appendChild(final);
             console.log("Done");
             addBigMessage(thekey,thetitle,thecontent,fromtheemail);
      }
        function addBigMessage(lekey,letitle,lecontent,leemail) {
                console.log("Adding big message...");
                var messageElement = document.createElement("div");
                //add attributes
                    messageElement.setAttribute("style","display:none");
                    messageElement.setAttribute("class","bigMessage");
                    messageElement.setAttribute("id",lekey);
                //create header div
                        var headerDiv = document.createElement("div");
                        headerDiv.setAttribute("class","headerDiv");
                        //create children elements
                                var messageText = document.createTextNode("Message");
                                var closeImage = document.createElement("img");
                                //add img attributes
                                    closeImage.setAttribute("src","x.svg"); //TODO add src
                                    closeImage.setAttribute("onClick","closeMessage('"+lekey+"')");
                                    closeImage.setAttribute("width","25px");
                            headerDiv.appendChild(messageText);
                            headerDiv.appendChild(closeImage);
                    messageElement.appendChild(headerDiv);
                //create email div
                        var emailDiv = document.createElement("div");
                        emailDiv.setAttribute("class","emailDiv");
                        var emailTextText = document.createTextNode("From: "+leemail);
                        emailDiv.appendChild(emailTextText);
                    messageElement.appendChild(emailDiv);
                //create subject div
                        var subjectDiv = document.createElement("div");
                        subjectDiv.setAttribute("class","subjectDiv");
                        var subjectTextText = document.createTextNode("Subject: "+letitle);
                        subjectDiv.appendChild(subjectTextText);
                    messageElement.appendChild(subjectDiv);
                //create content div
                        var contentDiv = document.createElement("div");
                        contentDiv.setAttribute("class","contentDiv");
                        var lineBreaks = lecontent.split("\n");
                        for(i=0;i<lineBreaks.length;i++) {
                            contentDiv.appendChild(createTextNode(lineBreaks[i]));
                            contentDiv.appendChild(createElement("br"));
                        }
                        //var contentTextText = document.createTextNode(lecontent);
                        //contentDiv.appendChild(contentTextText);
                    messageElement.appendChild(contentDiv);
            //add message to document
            document.getElementById("bigmessages").appendChild(messageElement);
            console.log("Done creating big message element");
        }
        function openMessage(messageKey) {
                document.getElementById(""+messageKey).style.display = "block";
        }
        function closeMessage(messageKey) {
                document.getElementById(""+messageKey).style.display = "none";
        }
        function openNewMessage() {
                document.getElementById("new_message").style.display = "block";
        }
        function closeNewMessage() {
                document.getElementById("new_message").style.display = "none";
        }
