import PropTypes from "prop-types";
import { IoMdStarHalf } from "react-icons/io";
import { Link } from "react-router-dom";

const BookCard = ({ book }) => {
  const { bookId, bookName, authorName, category, tags, rating, image } = book;
  
  return (
    <div >
      <div >
      <Link to= {`books/${bookId}`}  > 
        <div className="card bg-base-100 shadow-xl md:p-10 p-3 border border-gray-400 my-3 ">
          <figure>
            <img
              src={image}
              alt="Book"
            />
            {/* </Link> */}
          </figure>
          <div className="card-body p-3 ">
            <div className="flex justify-around" >
                <p className="bg-gray-200 mx-2 rounded-full text-center text-[#23BE0A] " > {tags[0] } </p>
                <p className="bg-gray-200 mx-2 rounded-full text-center text-[#23BE0A] " > {tags[1]} </p>
            </div>
            <h2 className="card-title">
              {bookName}
            </h2>
            <p> By : {authorName} </p>
            <p> Book Id : {bookId} </p>
            <div className="card-actions justify-between">
              <div className="badge badge-outline"> {category} </div>
              <div className="badge badge-outline"> {rating } <IoMdStarHalf /> </div>
            </div>
          </div>
        </div>
        </Link>
      </div>
    </div>
  );
};

BookCard.propTypes = {
  book: PropTypes.object,
};


export default BookCard;
