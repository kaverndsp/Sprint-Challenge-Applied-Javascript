// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

const grab = document.querySelector('.cards-container');


axios
.get('https://lambda-times-backend.herokuapp.com/articles')
.then(response => {
    const data = response.data.articles;
    data.javascript.forEach(item =>{
        grab.append(Card(item));
    })

    data.bootstrap.forEach(item => {
        grab.append(Card(item));
    })
    
    data.technology.forEach(item => {
        grab.append(Card(item));
    })

    data.jquery.forEach(item => {
        grab.append(Card(item));
    })
    
    data.node.forEach(item => {
        grab.append(Card(item));
    })
console.log(response.data.articles);
})

function Card(data){
    const newCard = document.createElement('div');
    const newHeadline = document.createElement('div');
    const newAuthor = document.createElement('div');
    const newImgCont = document.createElement('div');
    const newImg = document.createElement('img');
    const newName = document.createElement('span');

    newCard.append(newHeadline);
    newCard.append(newAuthor);
    newAuthor.append(newImgCont);
    newImgCont.append(newImg);
    newAuthor.append(newName);

    newCard.classList.add('card');
    newHeadline.classList.add('headline');
    newAuthor.classList.add('author');
    newImgCont.classList.add('img-container');

    newHeadline.textContent = data.headline;
    newImg.src = data.authorPhoto;
    newName.textContent = data.authorName;

    return newCard;

    

}