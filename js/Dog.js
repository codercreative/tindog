class Dog {
  constructor(data) {
    Object.assign(this, data);
  }

  getDogHtml() {
    const { name } = this;
    return `  
    <div class="profile-container">
      <h1>${this.name}</h1>
    </div>      
`;
  }
}

export default Dog;
