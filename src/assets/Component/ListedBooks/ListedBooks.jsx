import { useEffect, useState } from "react";
import { getSaveData } from "../LocalStorageSet/LocalStorageSet";
import ListBookCard from "../ListBookCard/ListBookCard";
import Tabs from "./Tab/Tabs";
// import { Outlet } from "react-router-dom";

const ListedBooks = () => {

  const [ book, setBook ] = useState([]);
  const [displyBooks, setDisplayJBooks] = useState([book]);

  console.log(displyBooks, 'disple bol')

  const handleFiter = (filterBook) => {
    if(filterBook == 'rating'){
      const findBook = book.filter(item => item.rating == 'rating');
      setDisplayJBooks(findBook);
    }
    else if(filterBook == 'totalPages'){
      const findBook = book.filter(item => item.rating == 'totalPages');
      setDisplayJBooks(findBook);
    }
    else if(filterBook == 'yearOfPublishing'){
      const findBook = book.filter(item => item.yearOfPublishing == 'yearOfPublishing');
      setDisplayJBooks(findBook);
    }
  }

  const sortRating = () =>{
    book.sort((r1, r2) => (r1.rating > r2.rating) ? 1 : (r1.rating < r2.rating) ? -1 : 0);
  }
  console.log(sortRating() ,'sotty')  
  useEffect( ( ) => {
    setBook(getSaveData())
  } ,[])

  return (
    <div>
      
      <div className="text-center ">
        <h1 className="text-3xl p-10 bg-gray-100 rounded-lg text-black ">
          {" "}
          Books{" "}
        </h1>
        <select className="select  w-full max-w-xs text-white bg-[#23BE0A] my-10 ">
          <option selected> Sort By </option>
          <option onClick={() => handleFiter('rating')} > Rating </option>
          <option onClick={() => handleFiter()} >Number of pages</option>
          <option onClick={() => handleFiter()} >Publisher year</option>
        </select>
      </div>
      {/* Tabs Here */}
      <Tabs></Tabs>

      {
      book?.map(item => <ListBookCard key={item.bookId} item = {item} > </ListBookCard> )
      }
    </div>
  );
};

export default ListedBooks;
