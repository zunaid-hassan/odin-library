const lg = console.log;
const lt = console.table;

const myLibrary = [];

function Book(title, author, pages, read, id) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.id = self.crypto.randomUUID();
}

function addBookToLibrary(title, author, pages, read) {
  id = self.crypto.randomUUID();
  const newBook = new Book(title, author, pages, read, id);
  myLibrary.push(newBook);
}

// const book1 = new Book("hobbit", "tolkien", 299);
// const book2 = new Book("harry potter", "rowling", 152);

addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 310, "read");
addBookToLibrary(
  "Harry Potter and the Sorcerer's Stone",
  "J.K. Rowling",
  309,
  "unread",
);

addBookToLibrary("To Kill a Mockingbird", "Harper Lee", 281, "read");
addBookToLibrary("1984", "George Orwell", 328, "read");
addBookToLibrary("The Great Gatsby", "F. Scott Fitzgerald", 180, "unread");
addBookToLibrary("Pride and Prejudice", "Jane Austen", 279, "read");
addBookToLibrary("Dune", "Frank Herbert", 412, "unread");

// lt(myLibrary);

function displayBooks(library) {
  for (book of library) {
    lg(book);
  }
}

displayBooks(myLibrary);
