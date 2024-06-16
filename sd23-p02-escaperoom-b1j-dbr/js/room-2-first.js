//Alert that will show up after you clicked on the tip button

const tipButton = document.querySelector("#tip-button");

tipButton.addEventListener("click", function () {
  if (this.dataset.clicked) {
    alert(
      "Als u dit ziet heeft u om nog een tip gevraagd, en dat betekend dat u echt een NOOB bent :). GRAPJE. U kunt de cijfers van de code vinden door te klikken op (alle) objecten, als je de viercijferige code hebt kan je deze invullen bij de codepad op de deur. Wat de volgorde van de code is, is aan u :D"
    );
  } else {
    let findCode = alert(
      "Het cijfer boven de deur is het eerste cijfer van de code"
    );
  }
  this.dataset.clicked = true;
});

//Declaring all the buttons for he puzzles

const stackOfPapers = document.querySelector("#stack-of-papers");
const notebook = document.querySelector("#notebook");
const doorKeypad = document.querySelector("#door-keypad");
const door = document.querySelector("#door");
const wood = document.querySelector("#wood");
const pinkPencil = document.querySelector("#pink-pencil");
const whitePencil = document.querySelector("#white-pencil");
const eraser = document.querySelector("#eraser");

//Clickevent for stack of papers

stackOfPapers.addEventListener("click", function () {
  alert(
    "Hoeveel stukken papier zitten er eigenlijk op deze stapel? Meer dan 9? 🤔"
  );
});

//Clickecent for notebook

notebook.addEventListener("click", function () {
  alert(
    "Hmm, laat ik zeggen dat er in dit schrift wel minstens 37 bladzijdes zitten :)"
  );
});

//Clickevent for door keypad

doorKeypad.addEventListener("click", function () {
  //Prompt which will ask for the doorcode

  const doorCode = prompt("Voer de code van de deur in");

  //If else statement

  if (doorCode == 5379) {
    alert(
      "Succes in het mortuarium, zorg ervoor dat u zelf niet in een lijkenkist terecht komt en open de deur nu maar :)"
    );
    doorKeypad.disabled = true;
  } else if (doorCode != 5379) {
    alert("HAHA, compleet verkeerd. Grapje, probeer het nog een keer");
  }
});

//Clickevent for the door

door.addEventListener("click", function () {
  if (doorKeypad.disabled == true) {
    alert(
      "Je hebt de deur naar het mortuarium geopend, succes! (Succes omdat het daar ijskoud is)"
    );
    window.location.assign("room-2-second.html");
  } else if (doorKeypad.disabled == false) {
    alert(
      "Het is geen feest helaas, je moet eerst de juiste code invoeren van de deur. Dacht je nou echt dat het zo makkelijk was?"
    );
  }
});

//Clickevent for a random piece of wood

wood.addEventListener("click", function () {
  alert(
    "Als u een verhaal zou horen dat een persoon een stuk hout uit de muur heeft gehaald om een cijfer te zoeken van een code, wat zou u dan denken? Ik vind het een beetje raar, wilt u wel zo vriendelijk zijn om de kosten te betalen voor de zware schade die u heeft aangericht?"
  );
});

//Clickevent for the pink pencil

pinkPencil.addEventListener("click", function () {
  alert("Hier staat geen cijfer op hoor");
});

//Clickevent for the white pencil

whitePencil.addEventListener("click", function () {
  alert("Het cijfer is: ER IS GEEN CIJFER LOL. Ga door met zoeken");
});

//Clickevent for eraser

eraser.addEventListener("click", function () {
  alert(
    "Dit is een gum, een gum gebruik je om geschreven text (wat uitgumbaar is natuurlijk) te gummen. Denkt u nou echt dat hier dan ineens een cijfer opstaat?"
  );
});
