const newBookBtn = document.querySelector('#new-book');
const formWraper = document.querySelector('#form');
const closeBtn = document.querySelector('#close-button');
const form = document.querySelector('form');
const myLibrary = [];

function Book(title, author, read) {
  this.title = title;
  this.author = author;
  this.read = read;
}

function addBookToLibrary (e) {
  e.preventDefault();
  let title = document.getElementsByName('title')[0].value;
  let author = document.getElementsByName('author')[0].value;
  let read;
  const checkbox = document.querySelector('#read');
  if (checkbox.checked)
     read = true;
  else
     read = false;
  let book = new Book (title, author, read);
  myLibrary.push(book);
}

function iterateMyLibrary (book) {
  
}
function closeForm(e) {
  e.preventDefault();
  formWraper.classList.add('form-wraper-hidden');
}
function createBookForm() {
    formWraper.classList.remove('form-wraper-hidden');
}

closeBtn.addEventListener('click', closeForm);
newBookBtn.addEventListener('click', createBookForm);
form.addEventListener('submit', addBookToLibrary)