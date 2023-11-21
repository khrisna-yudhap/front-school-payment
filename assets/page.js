var loadTime;

function pageLoading() {
  loadTime = setTimeout(showContent, 2000);
}

function showContent() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("content").style.display = "block";
}

function removeRadioSelection() {
  // Get all radio buttons with name "nominal"
  var radioButtons = document.getElementsByName("nominal");

  // Loop through radio buttons to uncheck them
  for (var i = 0; i < radioButtons.length; i++) {
    radioButtons[i].checked = false;
  }
}

function formatCurrency(input) {
  // Remove non-numeric characters
  let inputValue = input.value.replace(/[^0-9]/g, "");

  let formattedValue = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(inputValue);

  // Update the input value with the formatted currency
  input.value = formattedValue;

  // Update the hidden input with the raw numeric value
  document.getElementById("hiddenNominal").value = inputValue;

  // Get all radio buttons with name "nominal"
  var radioButtons = document.getElementsByName("nominal");

  // Loop through radio buttons to uncheck them
  for (var i = 0; i < radioButtons.length; i++) {
    radioButtons[i].checked = false;
  }
}
