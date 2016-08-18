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
  console.log("Nulling variables...");
  displayName = undefined;
  photoURL = null;
  uid = undefined;
  email = undefined;
  provider = undefined;
  providerUID = undefined;
  console.log("Variable null finished.");
  console.log("UI update started...");
  onAuthInit();
  console.log("UI update finished.");
}

function deleteAccount() {
  console.log("Deleting Account...")
  firebase.auth().currentUser.delete();
  console.log("Account Deleted");
  console.log("Nulling variables...");
  displayName = undefined;
  photoURL = null;
  uid = undefined;
  email = undefined;
  provider = undefined;
  providerUID = undefined;
  console.log("Variable null finished.");
  console.log("UI update started...");
  onAuthInit();
  console.log("UI update finished.");
  alert("Account Deleted");
}

function accountDelete() {
  var randomNumber = Math.floor(Math.random() * 20000000);
  var a = prompt("Are you sure you want to delete your account? This is a permanent action and cannot be undone! If you are one hundred percent sure that you want to do this, type in this number: "+randomNumber);
  if(a==randomNumber) {
    deleteAccount();
  } else {
    return;
  }
}
