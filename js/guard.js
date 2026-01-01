(function () {
  if (
    localStorage.getItem("_x9A1") !== "1" ||
    sessionStorage.getItem("_x9A1") !== "1"
  ) {
    location.replace("verify.html");
  }
})();
