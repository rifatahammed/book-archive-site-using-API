const loadBooks = () => {
  const searchText = document.getElementById("search-field").value;
  fetch(`http://openlibrary.org/search.json?q=${searchText}`)
    .then((response) => response.json())
    // .then((data) => showBookName(data));
    .then((data) => console.log(data));
};

// const showBookName = (books) => {
//   booksArray = books.docs;
//   //   console.log(booksArray);
//   booksArray.forEach((singlebook) => console.log(singlebook.title));
// };
