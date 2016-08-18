/**
 * Redirects to the FirebaseUI widget.
 */
var signInWithRedirect2 = function() {
  window.location.assign('/widget');
};


/**
 * Open a popup with the FirebaseUI widget.
 */
var signInWithPopup2 = function() {
  window.open('/widget', 'Sign In', 'width=985,height=735');
};


/**
 * Displays the UI for a signed in user.
 */
var handleSignedInUser2 = function(user) {
var photoURL2;
if (user != null) {
  user.providerData.forEach(function (profile) {
    //alert("Sign-in provider: "+profile.providerId);
    //alert("  Provider-specific UID: "+profile.uid);
    //alert("  Name: "+profile.displayName);
    //alert("  Email: "+profile.email);
    //alert("  Photo URL: "+profile.photoURL);
    if (profile.photoURL != null && user.photoURL == null) {
      photoURL2 = profile.photoURL;
      user.updateProfile({
        displayName: user.displayName,
        photoURL: photoURL2
      }).then(function() {
      // Update successful.
      console.log("User imageURL updated successfully");
    }, function(error) {
      // An error happened.
      console.log("Error in updating user imageURL: "+error);
    });
  }
});
}
  document.getElementById('user-signed-in').style.display = 'block';
  document.getElementById('user-signed-out').style.display = 'none';
  document.getElementById('name').textContent = user.displayName;
  document.getElementById('email').textContent = user.email;
  if(photoURL2 == undefined || photoURL2 == null) {
    photoURL2 = user.photoURL;
  }
  if (photoURL2){
    document.getElementById('photo').src = photoURL;
    document.getElementById('photo').style.display = 'block';
  } else {
    document.getElementById('photo').style.display = 'none';
  }
};


/**
 * Displays the UI for a signed out user.
 */
var handleSignedOutUser2 = function() {
  document.getElementById('user-signed-in').style.display = 'none';
  document.getElementById('user-signed-out').style.display = 'block';
};

// Listen to change in auth state so it displays the correct UI for when
// the user is signed in or not.
firebase.auth().onAuthStateChanged(function(user) {
  user ? handleSignedInUser(user) : handleSignedOutUser();
});


/**
 * Initializes the app.
 */
var initApp2 = function() {
  document.getElementById('sign-in-with-redirect').addEventListener(
      'click', signInWithRedirect2);
  document.getElementById('sign-out').addEventListener('click', function() {
    firebase.auth().signOut();
  });
  document.getElementById('delete-account').addEventListener(
      'click', function() {
        firebase.auth().currentUser.delete();
      });
};

window.addEventListener('load', initApp2);
