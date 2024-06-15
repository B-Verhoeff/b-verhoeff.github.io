//Declaring tip button
const tipButton = document.querySelector("#tip-button");

//Tip button function

tipButton.addEventListener("click", function () {
  if (this.dataset.clicked) {
    alert("Probeer de sleutel van het luik te vinden ");
  } else {
    let findCode = alert("Vind het geheime luikje");
  }
  this.dataset.clicked = true;
});

//Declaring the puzzles

const correctHatchLock = document.querySelector("#lock-1");
const falseHatchLock1 = document.querySelector("#lock-2");
const falseHatchLock2 = document.querySelector("#lock-3");
const falseHatchLock3 = document.querySelector("#lock-4");
const falseHatchLock4 = document.querySelector("#lock-5");
const corpse = document.querySelector("#corpse");
const key = document.querySelector("#key");
const keyOnDesk = document.querySelector("#key-on-desk");
const blackKeyOnKeychain = document.querySelector("#black-key-on-keychain");
const goldenKeyOnKeychain = document.querySelector("#golden-key-on-keychain");
const blueKeyOnKeychain = document.querySelector("#blue-key-on-keychain");
const doorKeypad = document.querySelector("#door-keypad");
const door = document.querySelector("#door");

//Clickevent for the correct hatch

correctHatchLock.addEventListener("click", function () {
  if (key.disabled == false) {
    alert(
      "Je hebt het geheime luik gevonden! Probeer de sleutel te vinden en open dan het luik opnieuw."
    );
  }
  if (key.disabled == true) {
    alert("Je gaat door het luik heen, goed gedaan!");
    window.location.assign("room-3a.html");
  }
});

//Clickevent for the first false hatchlock

falseHatchLock1.addEventListener("click", function () {
  alert("Goede keus, maar helaas zit hier een lijk in opgesloten");
});

//Clickevent for the second false hatchlock

falseHatchLock2.addEventListener("click", function () {
  alert(
    "Nee dit is zeker niet het geheime luik, er zit hier een man in die is overleden op 21 oktober 2023. Hij had een Nederlandse afkomst en was een gepensioneerde levensgenieter"
  );
});

//Clickevent for the third false hatchlock

falseHatchLock3.addEventListener("click", function () {
  alert("Het is geen geheime luik, maar er zit ook niemand in");
});

//Clickevent for the fourth false hatchlock

falseHatchLock4.addEventListener("click", function () {
  alert(
    "Oke maar was hoe dacht je uberhaupt door dit luik te gaan, als het de juiste was? Het zit ten eerste veel te hoog en ten tweede, wie maakt er nou een geheime luik die helemaal boven is?"
  );
});

//Clickevent for the corpse

corpse.addEventListener("click", function () {
  alert(
    "Gadverdamme, je hebt echt serieus een lijk aangeraakt omdat je misschien dacht dat hier het geheime luik was..?"
  );
});

//Clickevent for the correct key

key.addEventListener("click", function () {
  alert("Je hebt de sleutel gevonden, probeer het luik nu te openen");
  key.disabled = true;
});

//Clickevent for the key on the desk

keyOnDesk.addEventListener("click", function () {
  alert(
    "Dit is helaas niet de sleutel die in het slot past, zoek een andere sleutel!"
  );
});

//Clickevent for the black key on keychain

blackKeyOnKeychain.addEventListener("click", function () {
  alert("De zwarte sleutel is niet de juiste sleutel voor het geheime luik");
});

//Clickevent for the golden key on keychain

goldenKeyOnKeychain.addEventListener("click", function () {
  alert("JA! De gouden sleutel is de juiste sleutel! NEE NATUURLIJK NIET");
});

//Clickevent for the blue key on keychain

blueKeyOnKeychain.addEventListener("click", function () {
  alert("Ja de blauwe sleutel is ook niet de juiste sleutel ahhahahahah");
});

//Clickevent for the door keypad

doorKeypad.addEventListener("click", function () {
  const goBack = confirm(
    "Wil je nou echt terug naar de vorige ruimte? Het heeft niet echt zin maar alles kan"
  );
  if (goBack == true) {
    doorKeypad.disabled = true;
  } else if (goBack == false) {
    doorKeypad.disabled = false;
  }
});

//Clickevent for the door

door.addEventListener("click", function () {
  if (doorKeypad.disabled == true) {
    window.location.assign("room-2-first.html");
  } else if (doorKeypad.disabled == false) {
    alert("Voer eerst de code van de deur in op de codepad!");
  }
});
