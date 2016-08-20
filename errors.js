function logError(error) {
  console.error(error);
  return;
}
function displayError(error) {
  logError(error);
  document.getElementById("error_container").innerHTML = "<p style='color:red;'>"+error+"</p>";
  return;
}
