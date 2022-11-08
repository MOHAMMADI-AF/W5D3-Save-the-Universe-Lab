console.log("Hello Akbar");

// HERO SHIPS
//===========
class USS_Schwarzenegger {
  constructor() {
    this.hull = 20;
    this.firepower = 5;
    this.accuracy = 0.7;
  }

  attack() {
    let rand = Math.random();
    if (rand < this.accuracy) {
      invader.hull -= this.firepower;
      console.log(
        "`YOUR ATTACK WAS SUCCESSFUL! \n\n PREPARE FOR INCOMING ATTACK..."
      );
    } else {
      console.log("YOUR ATTACK FAILED! \n\n PREPARE FOR INCOMING ATTACK...");
      console.log;
    }
  }
}

const defender = new USS_Schwarzenegger();

// ALIEN SHIPS
//============
class Alien {
  constructor() {
    this.hull = Math.floor(Math.random() * (7 - 3) + 3);
    this.firepower = Math.floor(Math.random() * (5 - 2) + 2);
    this.accuracy = Math.random() * (0.8 - 0.6) + 0.6;
  }
  attack() {
    let rand = Math.random();
    if (rand < this.accuracy) {
      defender.hull -= this.firepower;
      console.log("YOU HAVE BEEN HIT");
    } else {
      console.log("YOU ARE DOING GREAT ALIEN COULD NOT EVEN REACH YOU.");
    }
  }
}

const invader = new Alien();

// TO CALL/DISPLAY THE MODALS AND CLOSE THEM
//==========================================

const modalTriggerButton = document.getElementById("start-button");
const modal = document.querySelector(".modal");
const modalCloseButton = document.querySelector(".modal-close");
const modalStartButton = document.getElementById("yes");
const modalShCap = document.querySelector(".modalShipCap");
const modalFireButton = document.getElementById("attack");
const modalShCapCloseButton = document.getElementById("close");
const gameStatusDisplay = document.getElementById("status");

modalTriggerButton.addEventListener("click", (event) => {
  modal.style.display = "flex";
  document.body.style.overflow = "hidden";
});

modalCloseButton.addEventListener("click", (event) => {
  modal.style.display = "none";
  document.body.style.overflow = "initial";
});

yes.addEventListener("click", (event) => {
  modal.style.display = "none";
  modalShCap.style.display = "flex";
  document.body.style.overflow = "hidden";
});

modalShCapCloseButton.addEventListener("click", (event) => {
  modalShCap.style.display = "none";
  document.body.style.overflow = "initial";
});

const init = () => {
  const response = prompt(`ENTER 'p' TO ATTACK OR 'q' TO QUIT`);
  if (response.toLowerCase() === "q") {
    alert(`Good-bye!`);
  } else if (response.toLowerCase() === "p") {
    console.log("ATTACK BEFORE ALIENS ATTACK YOU!");
    lockAndLoad();
  } else {
    console.log("INVALID INPUT\n\n TRY ONCE MORE!");
  }
};

//CHECK AND CONSOLE THE STATUS
//============================

const status = () => {
  console.log(
    `Your Status >>> HULL: ${defender.hull} | FIREPOWER: ${
      defender.firepower
    } | ACCURACY: ${
      defender.accuracy * 100
    }%\n\nAlien#${invaderCount} Status >>> HULL: ${invader.hull} | FIREPOWER: ${
      invader.firepower
    } | ACCURACY: ${Math.floor(invader.accuracy * 100)}%`
  );
};

//THE BATTLE
//==========

invaderCount = 6;

const lockAndLoad = () => {
  status();

  while (invaderCount > 0) {
    if (invader.hull < 1) {
      invaderCount--;
    }

    if (invaderCount > 0 && defender.hull > 0) {
      invader.hull = Math.floor(Math.random() * (7 - 3) + 3);
      invader.firepower = Math.floor(Math.random() * (5 - 2) + 2);
      invader.accuracy = Math.random() * (0.8 - 0.6) + 0.6;
    } else if (invaderCount < 1 && defender.hull < 1) {
      return console.log("TIE GAME YOU NEED MORE PRACTICE");
    } else if (invaderCount < 1 && defender.hull > 0) {
      return console.log("YOU HAVE SUCCESSFULLY COMPLETED THE MISSION!");
    } else {
      return console.log("YOU LOST");
    }

    const response = prompt(`ENTER 'a' TO ATTACK OR 'q' TO QUIT`);
    if (response.toLowerCase() === "q") {
      console.log("YOU DID NOT PLAYED");
      defender.hull = 0;
      defender.firepower = 0;
      defender.accuracy = 0;
      status();
    } else if (response.toLowerCase() === "a") {
      engage();
    } else {
      console.log("INVALID INPUT\n\n TRY ONCE MORE!");
    }
  }
};

// START THE BATTLE
//=================

const engage = () => {
  defender.attack();
  invader.attack();
  lockAndLoad();
};

attack.addEventListener("click", (event) => {
  init();
});

//init(); // Initialize

// console.log(USS_Schwarzenegger);
// console.log(invaderCount);
// console.log(engage);
// console.log(status);
// console.log(defender.attack());
// console.log(invader.attack());
//console.log(lockAndLoad());
