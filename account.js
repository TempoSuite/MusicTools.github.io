//init variables
var signedOut = true;
var displayName,email,uid,photoURL,provider,providerUID;

var signInWithRedirect = function() {
  window.location.assign('/widget');
};

/**
 * Displays the UI for a signed in user.
 */
var handleSignedInUser = function(user) {
  signedOut = false;
  if (user != null) {
    displayName = user.displayName;
    email = user.email;
    uid = user.uid;
    photoURL = user.photoURL;
    user.providerData.forEach(function (profile) {
      provider = profile.providerId;
      providerUID = profile.uid;
      if (profile.photoURL != null && photoURL == null) {
        photoURL = profile.photoURL;
        user.updateProfile({
          displayName: user.displayName,
          photoURL: photoURL
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
  console.log("Sign in handled");
  writeUserData(uid, displayName, email, photoURL, provider, providerUID);
  onAuthInit();
  handleSignIn(); 
};


/**
 * Displays the UI for a signed out user.
 */
var handleSignedOutUser = function() {
  //TODO add signed out thing.
  signedOut = true;
  console.log("Sign out handled");
  onAuthInit();
  handleSignOut();
};

// Listen to change in auth state so it displays the correct UI for when
// the user is signed in or not.
firebase.auth().onAuthStateChanged(function(user) {
  user ? handleSignedInUser(user) : handleSignedOutUser();
});


/**
 * Initializes the app.
 */
var initApp = function() {
  //document.getElementById('sign-in-with-redirect').addEventListener(
  //    'click', signInWithRedirect);
};

window.addEventListener('load', initApp);

function writeUserData(userId, name, email, imageUrl, provider, providerUID) {
  var now = Date.now();
  console.log("Writing to database at "+now);
  firebase.database().ref('users/' + userId).update({
    name: name,
    email: email,
    profilepicture : imageUrl,
    provider: provider,
    provider_uid : providerUID,
    last_updated : now
  });
  console.log("Done writing to database.")
}
