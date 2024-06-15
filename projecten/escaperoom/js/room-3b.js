//computer
let computer = document.querySelector(".computer");
computer.addEventListener("click", function () {
  computer = alert("Dit is een computer");
});

//Monitor
let monitor = document.querySelector(".monitor");
monitor.addEventListener("click", function () {
  code = prompt("I have keys but no locks. I have a space but no room. You can enter, but can't go outside. What am I?");
  if (code == "A keyboard") {
    alert("The answer was right")
    window.location.href = "room-3c.html";
  } else {
    alert("The answer was wrong");
  }
});

//Door
let door = document.querySelector(".door");
door.addEventListener("click", function () {
  door = alert("Dit is een deur. Ik denk dat je hiermee naar de volgende kamer kunt gaan");
});

//painting
let painting = document.querySelector(".painting");
painting.addEventListener("click", function () {
  painting = alert("Dit is een schilderij");
});

//Staff buttons
let staff1 = document.querySelector(".staff-1");
staff1.addEventListener("click", function () {
  staff1 = alert(
    "S. Bechoe moet op woensdag werken maar ze komt nooit opdagen"
  );
});

let staff2 = document.querySelector(".staff-2");
staff2.addEventListener("click", function () {
  staff2 = alert("D. Nunes moet op maandag werken. Hij betaalt ons €3.50 per uur");
});

let staff3 = document.querySelector(".staff-3");
staff3.addEventListener("click", function () {
  staff3 = alert("R. Kalloe moet op zaterdag werken voor €3.50 per uur");
});

let staff4 = document.querySelector(".staff-4");
staff4.addEventListener("click", function () {
  staff4 = alert(
    "B. Verhoeff moet op dinsdag als schoonmaker werken (Hij denkt dat hij B Veldhuizen is)"
  );
});

let staff5 = document.querySelector(".staff-5");
staff5.addEventListener("click", function () {
  staff5 = alert("B. Veldhuizen moet op zondag als teamleider werken");
});

let staff6 = document.querySelector(".staff-6");
staff6.addEventListener("click", function () {
  staff6 = alert("D. Mangal moet op vrijdag werken voor €350 per uur");
});

let staff7 = document.querySelector(".staff-7");
staff7.addEventListener("click", function () {
  staff7 = alert("T. Bevens moet op donderdag als tosti maker werken");
});

///Staff buttons
