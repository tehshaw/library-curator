const librarianSearchHandler = async (event) => {
    event.preventDefault();


  
    const bookTitle = document.getElementById('bookInput').value.trim()
    console.log(bookTitle);
  
    if (bookTitle) {
      location.href = 'librarian/bookmanager/search/' + bookTitle
    
    }
  };

  document
  .querySelector('.search-form')
  .addEventListener('submit', librarianSearchHandler);