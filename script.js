const lg = console.log;
const lt = console.table;

const myLibrary = [];

function Book(title, author, pages, readStatus) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.readStatus = readStatus;
  this.id = self.crypto.randomUUID();
}

function addBookToLibrary(title, author, pages, readStatus) {
  const id = self.crypto.randomUUID();
  const newBook = new Book(title, author, pages, readStatus, id);
  myLibrary.push(newBook);
}

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
  for (const book of library) {
    const booksContainer = document.querySelector(".books-container");

    const bookCard = document.createElement("div");
    bookCard.classList.add("book-card", "grid");

    displayBookTitle(book, bookCard);
    displayBookAuthor(book, bookCard);
    displayBookPages(book, bookCard);
    displayReadStatus(book, bookCard);

    booksContainer.appendChild(bookCard);
  }
}

function displayBookTitle(book, bookCard) {
  const bookTitle = document.createElement("h2");
  bookTitle.classList.add("book-title");
  bookTitle.textContent = book["title"];

  bookCard.appendChild(bookTitle);
}

function displayBookAuthor(book, bookCard) {
  const bookAuthorLabel = document.createElement("div");
  bookAuthorLabel.classList.add("author", "label");
  bookAuthorLabel.textContent = "Author:";

  const bookAuthor = document.createElement("div");
  bookAuthor.classList.add("author");
  bookAuthor.textContent = book["author"];

  bookCard.appendChild(bookAuthorLabel);
  bookCard.appendChild(bookAuthor);
}

function displayBookPages(book, bookCard) {
  const bookPagesLabel = document.createElement("div");
  bookPagesLabel.classList.add("pages", "label");
  bookPagesLabel.textContent = "Pages:";

  const bookPages = document.createElement("div");
  bookPages.classList.add("pages");
  bookPages.textContent = book["pages"];

  bookCard.appendChild(bookPagesLabel);
  bookCard.appendChild(bookPages);
}

function displayReadStatus(book, bookCard) {
  const bookReadStatusLabel = document.createElement("div");
  bookReadStatusLabel.classList.add("read-status", "label");
  bookReadStatusLabel.textContent = "Read status:";

  const bookReadStatus = document.createElement("div");
  bookReadStatus.classList.add("read-status");
  bookReadStatus.textContent = book["readStatus"];

  bookCard.appendChild(bookReadStatusLabel);
  bookCard.appendChild(bookReadStatus);
}

displayBooks(myLibrary);

// lg(myLibrary[0]["title"]);

// const bookTitle = document.createElement("h2");
// bookTitle.textContent = myLibrary[0]["title"];

// const bookCard = document.createElement("div");
// bookCard.classList.add("book-card", "grid");

// const bookContainer = document.querySelector(".book-container");

// bookCard.appendChild(bookTitle);
// bookContainer.appendChild(bookCard);

//
//
//
//
//
//
//
//
//
//
//
//
//
//
// STYLING STUFF
const hoverLetters = document.querySelector(".hover-letters");
const hoverText = hoverLetters.textContent;
hoverLetters.textContent = "";

for (let letter of hoverText) {
  const span = document.createElement("span");
  span.classList = "hover-letter";
  span.textContent = letter;
  hoverLetters.appendChild(span);
}
