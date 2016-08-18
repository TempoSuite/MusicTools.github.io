/**
 * Redirects to the FirebaseUI widget.
 */
function signIn() {
  window.location.assign('/widget');
};

function signOut() {
  firebase.auth().signOut();
}

function deleteAccount() {
  firebase.auth().currentUser.delete();
}
