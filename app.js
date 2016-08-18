/**
 * Redirects to the FirebaseUI widget.
 */
function signIn() {
  window.location.assign('/widget');
  console.log("Sign In Flow Started...");
};

function signOut() {
  firebase.auth().signOut();
  console.log("Signed Out");
}

function deleteAccount() {
  firebase.auth().currentUser.delete();
  console.log("Account Deleted");
}
