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

### Questions

### Challenges

### Improvements/Enhancements to Consider

### Useful code snippets and tips

- Good example of how to use ternary operator

```js
//no more dogs and show number of matches
function end() {
  const matches = likedArray.length == 1 ? "match" : "matches";
  document.getElementById("dog").innerHTML = `
    <div class="end-state">
        <h1>You had ${likedArray.length} ${matches}!</h1>
        <h1>Click Paw to reload!</h1>
    </div>`;
}
```

- Adding a min-height attribute on the dog image height="700" => prevents layout shift

- adding custom class hidden to remove the buttons on the end screen

### Inspiring Resources for this projects and future ones:

- [Josh Comeau's custom css reset](https://www.joshwcomeau.com/css/custom-css-reset/)

- [reset svg icon for css](https://www.svgrepo.com/show/343263/reset.svg)

- [Paul review of Amir's Tindog project](https://scrimba.com/scrim/co6b14e72abccab9623aca991)

- [Amir from Scrimba showing the difference between using an array of objects instead of an object of objects](https://www.loom.com/share/2e61c3a728cc4474b4523fc5778b6fdf?sid=2fbe7f38-b6db-4530-933e-31a7490a3594)

- [Gina, Scrimba Code Review about datasets](https://scrimba.com/scrim/co77b416c831d889035dda6d1)
