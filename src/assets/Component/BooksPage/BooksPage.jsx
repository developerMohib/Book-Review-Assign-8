import { useEffect, useState } from "react";
import BookCard from "../BookCard/BookCard";

const BooksPage = () => {
  const [books, setBooks] = useState([]);
  const [initialBooks, setInitialBooks] = useState(6);

  useEffect(() => {
    fetch('/books.json')
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);

  // console.log(books, "from useState");
  // console.log(initialBooks, "initial books");

  const handleBookLength = () => {
    setInitialBooks(books.length);
  };

  return (
    <div className="my-10" >
      
      <div>
        <h1 className=" text-3xl md:text-5xl font-bold text-center my-10 "> My Books </h1>
      </div>

      <div className="md:grid grid-cols-3 gap-5">
        {books?.slice(0, initialBooks).map((book, idx) => (
          <BookCard key={idx} book={book}>
            {" "}
          </BookCard>
        ))}
      </div>
      <div className={` ${initialBooks === books.length && "hidden"} `}>
        <div className="text-center">
          <button
            onClick={handleBookLength}
            className="btn btn-outline hover:bg-[#23BE0A] "
          >
            Load More
          </button>
        </div>
      </div>
    </div>
  );
};

export default BooksPage;
