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
          alert(otheruid);
        });
        return false;
      }
