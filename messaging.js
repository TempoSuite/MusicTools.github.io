function sendMessage() {
        console.log("Sending message...");
        var messageEmail = document.getElementById("message_email").value;
        var subject = document.getElementById("subject").value;
        var messageContent = document.getElementById("message_content").value;
        alert(messageEmail);
        alert(subject);
        alert(messageContent);
        var punctuationless = messageEmail.replace(/['!"#$%&\\'()\*+,\-\.\/:;<=>?@\[\\\]\^_`{|}‌​~']/g,"");
        var messageEmailWithoutPunctuation = punctuationless.replace(/\s{2,}/g,"");
        var userId = firebase.auth().currentUser.uid;
        firebase.database().ref('/publicusers/' + messageEmailWithoutPunctuation).once('value').then(function(snapshot) {
          if(snapshot.val() != null) {
            var otheruid = snapshot.val().uid;
          } else {
            alert("The email address you entered is not registered with MusicTools.");
            return false;
          }
          console.log("Updating message database...");
          var pushData = {
            content:messageContent,
            title:subject,
            from:uid,
            fromemail:email
          };
          var pushData2 = {
            content:messageContent,
            title:subject,
            to:otheruid,
            toemail:messageEmail
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
                addMessageElement(data.key, data.val().title, data.val().content, data.val().fromemail);
                console.log("Done calling add");
           },function (errorObject) {
                console.log("The read failed: " + errorObject.code);
           });
           console.log("Listener attached");
      }
      function addMessageElement(thekey, thetitle, thecontent, fromtheemail) {
             console.log("Creating new message element");
             var para = document.createElement("P");
             var para2 = document.createElement("P");
             var para3 = document.createElement("P");
             var fromText = document.createTextNode(fromtheemail);
             para.appendChild(fromText);
             document.getElementById("messages").appendChild(para);  
             var titleText = document.createTextNode(thetitle);      
             para2.appendChild(titleText);
             document.getElementById("messages").appendChild(para2);  
             var contentText = document.createTextNode(thecontent);
             para3.appendChild(contentText);
             document.getElementById("messages").appendChild(para3);
             console.log("Done");
      }
