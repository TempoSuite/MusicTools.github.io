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
          firebase.database().ref('/to/'+otheruid).push({
            content:messageContent,
            title:subject,
            from:uid,
            fromemail:email
          },handleError(error));
          firebase.database().ref('/from/'+uid).push({
            content:messageContent,
            title:subject,
            to:otheruid,
            toemail:messageEmail
          },handleError(error));
          console.log("Done updating message database.")
        });
        return false;
      }
      function handleError(error) {
              if(error == null) {
                      return;
              } else {
                      alert(error);
              }
      }
