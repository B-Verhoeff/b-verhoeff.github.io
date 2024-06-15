let keys = document.querySelector(".keys");
keys.addEventListener("click", function () {
  keys = alert("Je hebt de sleutel!");
  window.location.assign("/room-4pt4.html");
});

let kluis = document.querySelector(".kluis");
kluis.addEventListener("click", function () {
  kluis = alert("Je hebt de kluis geopend! Er ligt een kaart in");
  window.location.assign("/room-4pt6.html");
});


