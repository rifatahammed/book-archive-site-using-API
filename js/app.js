// const loadBooks = () => {
//   const searchText = document.getElementById("search-box").value;
//   fetch(`http://openlibrary.org/search.json?q=${searchText}`)
//     .then((response) => response.json())
//     .then((data) => showBookName(data));
//   // .then((data) => console.log(data));
// };

// const showBookName = (books) => {
//   booksArray = books.docs;
//   //   console.log(booksArray);
//   booksArray.forEach((singlebook) => console.log(singlebook.title));
// };
document.getElementById("error-message").style.display = "none";
const loadBooks = () => {
  const searchField = document.getElementById("search-field");
  const searchText = searchField.value;
  // clear data
  searchField.value = "";
  document.getElementById("error-message").style.display = "none";
  if (searchText == "") {
    // please write something to display
  } else {
    // load data
    const url = `http://openlibrary.org/search.json?q=${searchText}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => displaySearchResult(data));
  }
};
// .catch((error) => displayError(error));
const displayError = (error) => {
  document.getElementById("error-message").style.display = "block";
};

const displaySearchResult = (allBooks) => {
  const books = allBooks.docs;
  const searchResult = document.getElementById("search-result");
  searchResult.textContent = "";
  if (books.length == 0) {
    // show no result found;
  }
  books.forEach((book) => {
    // console.log(books);
    const div = document.createElement("div");
    div.classList.add("col");
    div.innerHTML = `
        <div class="card h-100">
        <h5 class="card-title">${book.title}</h5>
        <img src="https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg" class="card-img-top" alt="...">
            <div class="card-body">
            <h6>Author: ${book.author_name}</h6>
            <p class="card-text">
            publisher: ${book.publisher[0]}
            first published: ${book.first_publish_year}</p>
            </div>
        </div>
        `;
    searchResult.appendChild(div);
  });
};

// const loadBookDetail = (mealId) => {
//   const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
//   fetch(url)
//     .then((res) => res.json())
//     .then((data) => displayMealDetail(data.meals[0]));
// };

// const displayMealDetail = (meal) => {
//   console.log(meal);
//   const mealDetails = document.getElementById("meal-details");
//   const div = document.createElement("div");
//   div.classList.add("card");
//   div.innerHTML = `
//     <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
//     <div class="card-body">
//         <h5 class="card-title">${meal.strMeal}</h5>
//         <p class="card-text">${meal.strInstructions.slice(0, 150)}</p>
//         <a href="${meal.strYoutube}" class="btn btn-primary">Go somewhere</a>
//     </div>
//     `;
//   mealDetails.appendChild(div);
// };
