/* -----------------------------------------------------
hiding all later information segments 
 for initial condition 
 -------------------------------------------------------*/
document.getElementById("spinner").style.display = "none";
document.getElementById("error-message").style.display = "none";
document.getElementById("result-analysis").style.display = "none";
document.getElementById("no-result").style.display = "none";
/* -----------------------------------------------------
handle the searched string for finding books 
 -------------------------------------------------------*/
const loadBooks = () => {
  const searchField = document.getElementById("search-field");
  const searchText = searchField.value;
  // clear the input field
  searchField.value = "";
  document.getElementById("spinner").style.display = "block";
  document.getElementById("error-message").style.display = "none";
  document.getElementById("result-analysis").style.display = "none";
  if (searchText === "") {
    // stop spinner for empty field
    document.getElementById("spinner").style.display = "none";
  } else {
    // fetch all the data from api
    const url = `https://openlibrary.org/search.json?q=${searchText}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => displaySearchResult(data))
      .catch((error) => displayError(error));
  }
};

/* -----------------------------------------------------
handle the errors 
 -------------------------------------------------------*/
const displayError = (error) => {
  document.getElementById("error-message").style.display = "block";
  document.getElementById("spinner").style.display = "none";
};

/* -----------------------------------------------------
showing all the fetch books in the form of cards where they have 
Book's Name
Cover image
Author's name
Publisher's name
First published year
 -------------------------------------------------------*/
const displaySearchResult = (allBooks) => {
  const found = allBooks.numFound;
  document.getElementById("books-found").innerText = found;
  document.getElementById("spinner").style.display = "none";
  document.getElementById("result-analysis").style.display = "block";
  // taking only 20 books from the collection
  const books = allBooks.docs.slice(0, 20);
  const searchResult = document.getElementById("search-result");
  searchResult.textContent = "";
  if (books.length === 0) {
    document.getElementById("no-result").style.display = "block";
    document.getElementById("result-analysis").style.display = "none";
  }
  // looping through the searched result array to show them
  books.forEach((book) => {
    const div = document.createElement("div");
    div.classList.add("col");

    div.innerHTML = `
        <div class="card h-100 rounded-3 border border-primary border-5 p-1">
        <h5 class="card-title">Book Name:${book.title}</h5>
        
        <img src="https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg" class="card-img-top"  alt="...">
            <div class="card-body">
            <h6 class="fw-bold">Author: ${book.author_name}</h6>
            <p class="card-text ">
            publisher: ${book.publisher[0]}
            <br/>
            first published: ${book.first_publish_year}</p>
            </div>
        </div>
        `;
    searchResult.appendChild(div);
  });
};
