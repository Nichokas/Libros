const books = document.querySelectorAll('.book');
books.forEach(book => {
    book.addEventListener('click', () => {
        window.open('https://www.dropbox.com/home');
    });
});