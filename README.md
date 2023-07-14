## Employee Directory

### The challenge:

This is a Scrimba solo project using HTML, CSS and JavaScript to create a Tinder app for dogs. Solving this project using JS class (Object Oriented Programming OOP)

#### Consider:

- Make this project my own by creating cat profiles
- Use dataset
- Use a reset button when user has clicked through till the end
- generate cards on the end screen to view all matches in touch e.g. with .map()

### The requirements:

![screenshot](images/requirements.png)

### Visually Depicting Flow:

![screenshot](images/tindog-flow.png)

### How does the app work?

- When clicking on either the x or heart icon a badge appears on top of the image that states either "Like" or "Nope".
- Another dog is displayed after a few seconds
- After having clicked through the images, a page appears with the images that the user has liked.

### Process

- Consult Figma design files
- Create draft of README file
- Create .gitignore file and check that meta tag is included
- Create Github repository
- Work on HTML, CSS and JS files
- Check final code and accessibility
- Finalize README file
- Publish live URL

### Questions and Challenges when building the app

- Came across unset to display the badges when clicking the buttons.

```js
nopeElement.style.display = "unset";
```

- The image on the end page takes a long time to load.

- Are the keys hasBeenSwiped and hasBeenLiked needed?

### Useful code snippets and tips

- Good example of how to use ternary operator

```js
//end page and show number of matches
function endPageHtml() {
  if (likedDogsCount >= 1) {
    const match = likedDogsCount === 1 ? "match" : "matches";
    dogProfileEl.innerHTML = `
      <div class="end-page">
        <h1>You have ${likedDogsCount} ${match}!</h1>
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
          <h1>Zero matches.</h1>
          <img
          class="dog-img"
          height=700
          id="dog-img"
          src="./images/unhappy.png"
          alt="unhappy dog"
          />
      </div>`;
  }

  nopeBtn.style.visibility = "hidden";
  likeBtn.style.visibility = "hidden";
}
```

```js
import Dog from "./Dog.js";
import dogsData from "./data.js";

let index = 0;
let newDog = new Dog(dogsData[index]);

function getNewDog() {
  index++;

  if (index < dogsData.length) {
    newDog = new Dog(dogsData[index]);
    render();
  } else {
    endPageHtml();
  }
}
```

- Prevent layout shift: Add a min-height attribute on the dog image height="700"

### Inspiring Resources for this project and future ones:

- [Josh Comeau's custom css reset](https://www.joshwcomeau.com/css/custom-css-reset/)

- [Amir from Scrimba showing the difference between using an array of objects instead of an object of objects](https://www.loom.com/share/2e61c3a728cc4474b4523fc5778b6fdf?sid=2fbe7f38-b6db-4530-933e-31a7490a3594)

- [Gina, Scrimba Code Review about datasets](https://scrimba.com/scrim/co77b416c831d889035dda6d1)

- [Using unset in JavaScript - any explicit value set for "display" for example will be removed](https://developer.mozilla.org/en-US/docs/Web/CSS/unset)
