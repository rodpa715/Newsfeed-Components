// Because classes are not hoisted you will need to start your code at the bottom of the page. Look for the comment "START HERE"

/*class Article {
  constructor(domElement) {
    // assign this.domElement to the passed in domElement
    this.domElement = domElement
    // create a reference to the ".expandButton" class.
    const expandButton = this.domElement.querySelector(".expandButton");
    // Using your expandButton reference, update the text on your expandButton to say "expand"
    expandButton.textContent = "expand"
    // Set a click handler on the expandButton reference, calling the expandArticle method.

    // same effect as below
    // this.expandArticle = this.expandArticle.bind(this)
    // expandButton.addEventListener("click", this.expandArticle)

    expandButton.addEventListener("click", () => this.expandArticle())
    this.createCloseButton();
  }

  expandArticle() {
    // Using our reference to the domElement, toggle a class to expand or hide the article.
    this.domElement.classList.toggle("article-open")
  }

  // stretch task (close button)
  createCloseButton(){
    const headline = this.domElement.querySelector("h2")
    const close = document.createElement("div")
    close.className = "close"
    headline.appendChild(close)
    close.addEventListener("click", () => this.closeArticle())
  }

  closeArticle(){
    this.domElement.classList.add("close-fade")
    setTimeout(() => this.domElement.style.display = "none", 1000)
    
  }
}

/* START HERE: 

- Select all classes named ".article" and assign that value to the articles variable. 

- With your selection in place, now chain .forEach() on to the articles variable to iterate over the articles NodeList and create a new instance of Article by passing in each article as a parameter to the Article class.


const articles = document.querySelectorAll(".article");
articles.forEach( article => new Article(article))
*/

///// STRETCH TASK Component Constructor -- Articles

// comment out the code above and the articles in html 


const articles2 = [
  {
    date: "31 February 2013",
    headline: "Lorem ipsum o primeiro",
    paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n Vivamus dictum pharetra iaculis.Mauris ut mauris eu libero tincidunt varius.Sed ullamcorper, felis non dignissim fringilla, justo odio cursus eros, ut tempor sem dolor quis metus.Etiam luctus, massa vel convallis tincidunt, nisi odio eleifend nisi, ut commodo massa nulla quis massa.Donec ultrices cursus ante, a tristique tortor commodo sit amet.Proin commodo congue quam id consectetur.Quisque eget felis vitae orci laoreet lacinia.Fusce ut enim ac augue finibus vulputate.Etiam ut rhoncus enim.Donec vitae eros nec libero ornare venenatis.Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
  },
  {
    date: "31 February 2013",
    headline: "Lorem ipsum o segundo",
    paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Vivamus dictum pharetra iaculis.Mauris ut mauris eu libero tincidunt varius.Sed ullamcorper, felis non dignissim fringilla, justo odio cursus eros, ut tempor sem dolor quis metus.Etiam luctus, massa vel convallis tincidunt, nisi odio eleifend nisi, ut commodo massa nulla quis massa.Donec ultrices cursus ante, a tristique tortor commodo sit amet.Proin commodo congue quam id consectetur.Quisque eget felis vitae orci laoreet lacinia.Fusce ut enim ac augue finibus vulputate.Etiam ut rhoncus enim.Donec vitae eros nec libero ornare venenatis.Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas."
},
{
  date: "31 February 2013",
  headline: "Lorem ipsum fixe",
  paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Vivamus dictum pharetra iaculis.Mauris ut mauris eu libero tincidunt varius.Sed ullamcorper, felis non dignissim fringilla, justo odio cursus eros, ut tempor sem dolor quis metus.Etiam luctus, massa vel convallis tincidunt, nisi odio eleifend nisi, ut commodo massa nulla quis massa.Donec ultrices cursus ante, a tristique tortor commodo sit amet.Proin commodo congue quam id consectetur.Quisque eget felis vitae orci laoreet lacinia.Fusce ut enim ac augue finibus vulputate.Etiam ut rhoncus enim.Donec vitae eros nec libero ornare venenatis.Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas."
},
{
  date: "31 February 2013",
  headline: "Lorem ipsum fantastico",
  paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Vivamus dictum pharetra iaculis.Mauris ut mauris eu libero tincidunt varius.Sed ullamcorper, felis non dignissim fringilla, justo odio cursus eros, ut tempor sem dolor quis metus.Etiam luctus, massa vel convallis tincidunt, nisi odio eleifend nisi, ut commodo massa nulla quis massa.Donec ultrices cursus ante, a tristique tortor commodo sit amet.Proin commodo congue quam id consectetur.Quisque eget felis vitae orci laoreet lacinia.Fusce ut enim ac augue finibus vulputate.Etiam ut rhoncus enim.Donec vitae eros nec libero ornare venenatis.Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas."
}]
class ArticleGenerator{
  constructor(articlesContainer, data){
    this.articlesContainer = articlesContainer;
    this.data = data;
    this.createArticle();
    this.createExpandButton();
    this.createHeadline();
    this.createDate();
    this.createParagraph();
    this.createCloseButton();
  }
  createArticle(){
    this.articleDiv = document.createElement("div")
    this.articleDiv.className ="article"
    this.articlesContainer.appendChild(this.articleDiv)
  }
  
  createHeadline(){
    this.headline = document.createElement("h2")
    this.headline.textContent = this.data.headline;
    this.articleDiv.appendChild(this.headline)
  }
  createDate(){
    this.date = document.createElement("p")
    this.date.textContent = this.data.date;
    this.date.className = "date"
    this.articleDiv.appendChild(this.date)
  }
  createParagraph(){
    this.paragraph = document.createElement("p")
    this.paragraph.innerText = this.data.paragraph;
    this.articleDiv.appendChild(this.paragraph)
  }

  createExpandButton(){
    const expandButton = document.createElement("span");
    expandButton.textContent = "Read More"
    expandButton.className = "expandButton";
    this.articleDiv.appendChild(expandButton);
    expandButton.addEventListener("click", () => this.expandArticle())
  }
  expandArticle() {
    this.articleDiv.classList.toggle("article-open")
  }
  // stretch task (close button)
  createCloseButton(){
    const close = document.createElement("div")
    close.className = "close"
    this.headline.appendChild(close)
    close.addEventListener("click", () => this.closeArticle())
  }
  closeArticle(){
    this.articleDiv.classList.add("close-fade")
    setTimeout(() => this.articleDiv.style.display = "none", 1000)
  }
}


const articlesContainer = document.querySelector(".articles");
articles2.forEach( (container, index) => {
  new ArticleGenerator(articlesContainer, articles2[index])
})

