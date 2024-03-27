import { useEffect, useState } from "react";
import { getSaveData } from "../LocalStorageSet/LocalStorageSet";
import ListBookCard from "../ListBookCard/ListBookCard";

const ListedBooks = () => {

  const [ book, setBook ] = useState([]);
  useEffect( ( ) => {
    setBook(getSaveData())
  } ,[])

  console.log(book, 'book from local storage');

  return (
    <div>
      
      <div className="text-center ">
        <h1 className="text-3xl p-10 bg-gray-100 rounded-lg text-black ">
          {" "}
          Books{" "}
        </h1>
        <select className="select  w-full max-w-xs text-white bg-[#23BE0A] my-10 ">
          <option selected> Sort By </option>
          <option> Rating </option>
          <option>Number of pages</option>
          <option>Publisher year</option>
        </select>
      </div>

      {
        book.map(item => <ListBookCard key={item.bookId} item = {item} > </ListBookCard> )
      }
    </div>
  );
};

export default ListedBooks;
