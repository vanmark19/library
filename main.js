const newBookBtn = document.querySelector('#new-book');
const formWraper = document.querySelector('#form');
const closeBtn = document.querySelector('#close-button');
const form = document.querySelector('form');
let removeBtns = document.querySelectorAll('.remove');
let readBtns = document.querySelectorAll('read');
const myLibrary = [{
                    title : 'Example',
                    author : 'Author',
                    pages: 200,
                    read : false
                    }];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function submitForm (e) {
  e.preventDefault();
  let title = document.getElementsByName('title')[0].value;
  let author = document.getElementsByName('author')[0].value;
  let pages = document.getElementsByName('pages')[0].value;
  console.log(pages);
  let read;
  const checkbox = document.querySelector('#read');
  if (checkbox.checked)
     read = true;
  else
     read = false;
  if(author.length > 16) 
    author = author.slice(0, 13) + '...';
  let book = new Book (title, author, pages, read);
  myLibrary.push(book);
  formWraper.classList.add('form-wraper-hidden');
  iterateMyLibrary(); 
}

function buildLibrary() {
  document.querySelector('main').innerHTML = '';
  myLibrary.forEach( book => {

    if(!book.read) {
      document.querySelector('main').innerHTML += ` <div class = 'book'>
      <div class="top"></div>
      <div class="book-content">
        <div class = "book-text">
          <div class="title">${book.title}</div>
          <div>by,</div>
          <div class="author">${book.author}</div>
          <div class = 'pages'> ${book.pages} pages</div>
        </div>
        <div class = "book-buttons">
          <button class="remove remove-btn">Remove</button>
          <button class="read read-btn">Read</button>  
        </div>
      </div>
    </div>`
    } else {
      document.querySelector('main').innerHTML += `<div class = 'book'>
      <div class="top-read"></div>
      <div class="book-content">
        <div class = "book-text">
          <div class="title">${book.title}</div>
          <div>by,</div>
          <div class="author">${book.author}</div>
          <div class = 'pages'> ${book.pages} pages</div>
        </div>
        <div class = "book-buttons">
          <button class="remove-read remove-btn">Remove</button>
          <button class="read-read read-btn">Unread</button>  
        </div>
      </div>
    </div>`
    }
    
     
    
  });
}

function updateButons (){
 
  readBtns = document.querySelectorAll('.read-btn');

  removeBtns = document.querySelectorAll('.remove-btn');
  readBtns.forEach((btn, i) => {
      btn.addEventListener('click', () => {

        if(myLibrary[i].read) 
          myLibrary[i].read = false;
        else
          myLibrary[i].read = true;
        
          iterateMyLibrary();
      });
     });

  removeBtns.forEach((btn, i) => {
    btn.addEventListener('click', () => {
      myLibrary.splice(i, 1);
      iterateMyLibrary(); 
    });
  }); 

}

function iterateMyLibrary () {
  buildLibrary(); 
  updateButons();
}



function closeForm(e) {
  e.preventDefault();
  formWraper.classList.add('form-wraper-hidden');
}
function createBookForm() {
    document.querySelectorAll('input[type = "text"]').forEach(input => {
      input.value = '';
    });
    formWraper.classList.remove('form-wraper-hidden');
}

iterateMyLibrary();
closeBtn.addEventListener('click', closeForm);
newBookBtn.addEventListener('click', createBookForm);
form.addEventListener('submit', submitForm);