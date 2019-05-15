// Because classes are not hoisted you will need to start your code at the bottom of the page.  Look for the comment "START HERE"

class Article {
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

    // stretch task (close button)
    const headline = this.domElement.querySelector("h2")
    const close = document.createElement("div")
    close.className = "close"
    headline.appendChild(close)
    close.addEventListener("click", () => this.closeArticle())
  }

  expandArticle() {
    // Using our reference to the domElement, toggle a class to expand or hide the article.
    this.domElement.classList.toggle("article-open")
  }
  // stretch task (close button)
  closeArticle(){
    this.domElement.classList.add("close-fade")
    setTimeout(() => this.domElement.style.display = "none", 1100)
    
  }
}

/* START HERE: 

- Select all classes named ".article" and assign that value to the articles variable.  

- With your selection in place, now chain .forEach() on to the articles variable to iterate over the articles NodeList and create a new instance of Article by passing in each article as a parameter to the Article class.

*/

let articles = document.querySelectorAll(".article");
articles.forEach( article => new Article(article))