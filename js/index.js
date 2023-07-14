// default imports
import Dog from "./Dog.js";
import dogsData from "./data.js";
console.log(Dog);
console.log(dogsData);

// Variables
const dogProfileEl = document.getElementById("dog-profile-container");
const nopeBtn = document.getElementById("nope-btn");
const likeBtn = document.getElementById("like-btn");

let index = 0;
let newDog = new Dog(dogsData[index]);
let likedDogsCount = 0;

// Functions
// Render the dogs
function render() {
  dogProfileEl.innerHTML = newDog.getDogHtml();
}
render();

// Get new dog
function getNewDog() {
  index++;

  if (index < dogsData.length) {
    newDog = new Dog(dogsData[index]);
    render();
  } else {
    endPageHtml();
  }
}

// End page
function endPageHtml() {
  if (likedDogsCount >= 1) {
    const match = likedDogsCount === 1 ? "match" : "matches";
    dogProfileEl.innerHTML = `
      <div class="end-page">
        <h1>You have ${likedDogsCount} ${match} 🥳</h1>
        <img
          class="dog-img"
          height=700
          id="dog-img"
          src="./images/happy.png"
          alt="happy dog"
          />
      </div>`;
  } else {
    dogProfileEl.innerHTML = `
      <div class="end-page">
          <h1>Zero matches 😞</h1>
          <img
          class="dog-img"
          height=700
          id="dog-img"
          src="./images/unhappy.png"
          alt="sad dog"
          />
      </div>`;
  }

  nopeBtn.style.visibility = "hidden";
  likeBtn.style.visibility = "hidden";
}

// Eventlistener - clicking on cross or heart
document.addEventListener("click", function (e) {
  let target = e.target.id;
  const nopeBadge = document.querySelector(".nope-badge");
  const likeBadge = document.querySelector(".like-badge");

  if (target === "no-icon") {
    nopeBadge.style.display = "unset";

    setTimeout(() => {
      getNewDog();
    }, 1000);
  } else if (target === "like-icon") {
    likeBadge.style.display = "unset";
    likedDogsCount++;
    setTimeout(() => {
      getNewDog();
    }, 1000);
  }
});

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
