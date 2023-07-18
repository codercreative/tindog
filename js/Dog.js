class Dog {
  constructor(data) {
    Object.assign(this, data);
  }

  getDogHtml() {
    let dogFeed = "";
    const { name, avatar, age, bio } = this;

    dogFeed = `
      <div class="dog-card">
        <img
          class="dog-img"
         
          id="dog-img"
          src="${avatar}"
          alt="dog with the name of ${name}"
        />
        <div class="dog-info">
          <h1>${name}, <span>${age}</span></h1>
          <p class="bio">${bio}</p>
        </div>
        <img 
        class="nope-badge"
        src="./images/badge-nope.png"
        alt="nope-badge"
        /> 
        <img
        class="like-badge"
        src="./images/badge-like.png"
        alt="like-badge"
      />`;

    return dogFeed;
  }

  likedDogsHtml() {
    let likedFeed = "";
    const { name, avatar, age } = this;

    likedFeed = `
      <div class="liked-dog-card">
        <img
          class="liked-img"
          height=200
          id="dog-img"
          src="${avatar}"
          alt="dog with the name of ${name}"
        />`;

    return likedFeed;
  }
}

export default Dog;
