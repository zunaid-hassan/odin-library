const lg = console.log;

const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.id = self.crypto.randomUUID();
}

function addBookToLibrary() {}

const book1 = new Book("hobbit", "tolkien", 299);
const book2 = new Book("harry potter", "rowling", 152);

myLibrary.push(book1);
myLibrary.push(book2);

lg(myLibrary);
