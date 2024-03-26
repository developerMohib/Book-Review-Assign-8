import { useEffect, useState } from "react";
import BookCard from "../BookCard/BookCard";

const BooksPage = () => {
    const [ books, setBooks ] = useState( [] );
    const [ initialBooks, setInitialBooks ] = useState( 6 );

    useEffect( () =>{
        fetch('https://raw.githubusercontent.com/developerMohib/Book-Review-JSON-Data-A8/master/Json-For-Book-Data')
        .then(res => res.json())
        .then(data => setBooks(data))
      } ,[])

console.log(books, 'from useState');
console.log(initialBooks, 'initial books');

      const handleBookLength = () => {
        setInitialBooks(books.length);
    }

    return (
        <div className="my-10">
           <div className="md:grid grid-cols-3 gap-5" >
           {
                books?.slice(0, initialBooks).map( (book, idx) => <BookCard key={idx} book = {book} > </BookCard> )
            }
           </div>
      <div className={ initialBooks === books.length && 'hidden' }>
        <div className="text-center">
        <button onClick={handleBookLength} className="btn btn-outline">Load More</button>
        </div>
      </div>
        </div>
    );
};

export default BooksPage;