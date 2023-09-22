var loadTime;

function pageLoading() {
  loadTime = setTimeout(showContent, 2000);
}

function showContent() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("content").style.display = "block";
}
