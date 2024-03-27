import { Link, useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './BookDetails.css'
import { SaveToLocalStorage } from "../LocalStorageSet/LocalStorageSet";

const BookDetails = () => {

  const bookLoader = useLoaderData();
  // console.log(bookLoader, 'book loader');
  const { bookId } = useParams();

  const book = bookLoader?.find((book) => book.bookId == bookId);

  const handleRead = () => {
    // console.log('read button paici');
    toast("Wow so easy!");
    SaveToLocalStorage(book)
  }
  const handleWish = () => {
    toast("Wow so easy! 222 ");
    
    console.log('wish button paici');
  }

  // console.log(book, "data");
  const {
    authorName,
    bookName,
    category,
    image,
    tags,
    rating,
    publisher,
    review,
    totalPages,
    yearOfPublishing,
  } = book;

  return (
    <div>
      <h1 className="text-center font-bold my-10 md:text-5xl text-3xl ">Book Details</h1>
      <div>
        <div className="md:grid grid-cols-2 gap-4">

          <div className="book-details" >
            <img className="w-60 " src= {image}  alt="" />
          </div>

          <div>

            <div className="border-b border-gray-400">
            <h1 className="text-3xl font-bold "> {bookName} </h1>
            <h1> By : {authorName} </h1>
            </div>
                <h1 className="border-b border-gray-400" > {category} </h1>
            <div className="border-b border-gray-400">
                <h1> <span className="font-bold" > Review: </span> {review} </h1>
                <h1 className="text-green-500 " > <span className="font-bold text-black" > Tag: </span> #{tags[0]} #{tags[1]} </h1>
            </div>
            <div>
                <h1> Number of Page : {totalPages} </h1>
                <h1> Publisher : {publisher} </h1>
                <p>Ratings : {rating} </p>
                <p> Year Of Publishing : {yearOfPublishing} </p>
            </div>
                <div>
                     <Link  > <button onClick={handleRead} className="btn bg-white text-black hover:bg-[#23BE0A] btn-outline " > Read </button> </Link>
                     <Link> <button onClick={handleWish} className="btn bg-[#23BE0A] " > Wishlist </button> </Link>
                     <Link to = '/listedBooks' > <button onClick={handleWish} className="btn bg-[#23BE0A] " > Go Listed Books </button> </Link>
                </div>
      <ToastContainer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
