// default imports
import Dog from "./Dog.js";
import dogsData from "./data.js";

// Variables
const dogProfileEl = document.getElementById("dog-profile-container");
const nopeBtn = document.getElementById("nope-btn");
const likeBtn = document.getElementById("like-btn");
const resetBtn = document.getElementById("reset-btn");
const swipeIconsContainer = document.querySelector(".swipe-icons-container");
const swipeIconsContainerHtml = document.querySelector(
  ".swipe-icons-container"
).innerHTML;

let index = 0;
let currentDog = new Dog(dogsData[index]);
let likedDogsCount = 0;
let likedArray = [];

// Functions

// Get new dog
function getNewDog() {
  index++;

  if (index < dogsData.length) {
    currentDog = new Dog(dogsData[index]);
    render();
  } else {
    endPageHtml();
  }
}

// End page
function endPageHtml() {
  let endPageHtmlContent = "";

  if (likedDogsCount >= 1) {
    const match = likedDogsCount === 1 ? "match" : "matches";
    endPageHtmlContent = `
      <div class="end-text">
        <h1>You have ${likedDogsCount} ${match} 🥳</h1>
      </div>`;
    // Show container for liked dogs
    const likedDogCardsHtml = likedArray
      .map((dog) => dog.likedDogsHtml())
      .join("");
    endPageHtmlContent += likedDogCardsHtml;
  } else {
    // Show a message when no matches are found
    endPageHtmlContent = `
      <div class="end-text">
          <h1>You have no matches 😞</h1>
          <img
          class="dog-img"
          height=700
          id="dog-img"
          src="./images/unhappy.png"
          alt="sad dog"
          />
      </div>`;
  }

  dogProfileEl.innerHTML = endPageHtmlContent;
  nopeBtn.style.visibility = "hidden";
  likeBtn.style.visibility = "hidden";
  resetBtn.style.display = "block";
}

function resetApp() {
  // Reset variables and state
  index = 0;
  likedDogsCount = 0;
  likedArray = [];

  // Check if Bella exists in the dogsData array and set currentDog to Bella
  const bella = dogsData.find((dog) => dog.name === "Bella");

  currentDog = bella ? new Dog(bella) : new Dog(dogsData[0]);

  // Render the initial dog
  render();

  // Show the nope and like buttons
  nopeBtn.style.visibility = "visible";
  likeBtn.style.visibility = "visible";

  //  Re-render the swipe buttons
  swipeIconsContainer.innerHTML = swipeIconsContainerHtml;
  swipeIconsContainer.style.display = "flex";

  // Hide the reset button
  resetBtn.style.display = "none";
  // dogProfileEl.innerHTML = currentDog.getDogHtml();
}

// Eventlistener to the reset button
resetBtn.addEventListener("click", resetApp);

// Render the dogs
function render() {
  if (currentDog) {
    dogProfileEl.innerHTML = currentDog.getDogHtml();
  }
}

render();

function handleButtonClick(target) {
  const nopeBadge = document.querySelector(".nope-badge");
  const likeBadge = document.querySelector(".like-badge");

  if (target === "no-icon" || target === "nope-btn") {
    nopeBadge.style.display = "unset";
    currentDog.hasBeenSwiped = true;
  } else if (target === "like-icon" || target === "like-btn") {
    likeBadge.style.display = "unset";
    likedDogsCount++;
    currentDog.hasBeenLiked = true;

    likedArray.push(currentDog);
  }

  // Transition to the next dog
  setTimeout(() => {
    getNewDog();
  }, 1000);
}

document.addEventListener("click", (e) => {
  const target = e.target.id;
  if (target !== "reset-btn") {
    handleButtonClick(target);
  }
});

// Eventlistener - clicking on cross or heart
// document.addEventListener("click", function (e) {
//   let target = e.target.id;
//   const nopeBadge = document.querySelector(".nope-badge");
//   const likeBadge = document.querySelector(".like-badge");

//   if (target === "no-icon" || target === "nope-btn") {
//     nopeBadge.style.display = "unset";

//     currentDog.hasBeenSwiped = true;
//     setTimeout(() => {
//       getNewDog();
//     }, 1000);
//     console.log("swiped: " + currentDog.hasBeenSwiped);
//   } else if (target === "like-icon" || target === "like-btn") {
//     likeBadge.style.display = "unset";
//     likedDogsCount++;

//     currentDog.hasBeenLiked = true;
//     console.log("liked " + currentDog.hasBeenLiked);
//     likedArray.push(currentDog);

//     // Transition to the next dog
//     setTimeout(() => {
//       getNewDog();
//     }, 1000);
//   }
// });

// Pseudocode:
//✅Render the page when loaded
//✅Create eventlistener for clicking either cross or heart
//✅Make nope or like badge appear when clicking on the buttons
//✅Set time out for transition to new dog
//✅Show the next dog after a few seconds
//✅Create an end page
//✅Remove the like and nope buttons from end page
//Perhaps add pictures of all liked profiles

//Adjust message in case none of the images have been liked
// Reset the app
