if (document.getElementById("sort_by") != null) {
  document.querySelector("#sort_by").addEventListener("change", function (e) {
    var url = new URL(window.location.href);
    url.searchParams.set("sort_by", e.currentTarget.value);

    window.location = url.href;
  });
}

if (document.getElementById("AddressCountryNew") != null) {
  document
    .getElementById("AddressCountryNew")
    .addEventListener("change", function (e) {
      var provinces =
        this.options[this.selectedIndex].getAttribute("data-provinces");
      var provincesSelector = document.getElementById("AddressProvinceNew");
      var provincesArray = JSON.parse(provinces);
      console.log(provincesArray);

      if (provincesArray.length < 1) {
        provincesSelector.setAttribute("disabled", "disabled");
      } else {
        provincesSelector.removeAttribute("disabled");
      }
      provincesSelector.innerHTML = " ";
      var options = " ";
      for (var i = 0; i < provincesArray.length; i++) {
        options +=
          '<option value="' +
          provincesArray[i][0] +
          '">' +
          provincesArray[i][0] +
          "</option>";
      }
      provincesSelector.innerHTML = options;
    });
}
