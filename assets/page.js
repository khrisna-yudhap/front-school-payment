var loadTime;

function pageLoading() {
  loadTime = setTimeout(showContent, 2000);
}

function showContent() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("content").style.display = "block";
}

// select table row

$(document).ready(function () {
  $("#bill-table")
    .find("tbody")
    .on("click", "tr", function () {
      if ($(this).find(":checkbox").is(":checked")) {
        $(this).find(":checkbox").prop("checked", false);
      } else {
        $(this).find(":checkbox").prop("checked", true);
      }
    });

  $("#bill-table")
    .find("tbody")
    .on("click", ":checkbox", function () {
      if ($(this).is(":checked")) {
        $(this).prop("checked", false);
      } else if ($(this).not(":checked")) {
        $(this).prop("checked", true);
      }
    });
});
