
import './App.css';

import Book from './component/Book/Book'

import BookRecords from  './database/Book'

function App() {
  console.log(BookRecords.map((book)=>book.id))
  return (
    <div className="App">
      <h1 className='book-title'>Hogwartz Book Store</h1>
      <div className="Books">
      { BookRecords.map(
        (book)=>
        <Book image = {book.image} book={book.title} author={book.author}/>) }

      </div>
      

      
     
    </div>
  );
}

export default App;
