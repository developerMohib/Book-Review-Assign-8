import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ListBookCard = ( {item} ) => {
    const {
        authorName,
        bookName,
        category,
        image,
        tags,
        rating,
        publisher,
        totalPages,
        yearOfPublishing,
        bookId
      } = item; 
  return (
    <div>
      <div>
        <div className="card card-side bg-base-100 shadow-xl border border-gray-300 my-10 ">
          <figure>
            <img
              src={image}
              alt="Movie"
            />
          </figure>
          <div className="card-body">
            <div className="border-b border-gray-300 space-y-1">
              <h2 className="card-title"> {bookName} </h2>
              <p> By: {authorName} </p>

              <div className='md:flex justify-start' >
                <p> <span className="font-semibold text-xl"> Tag </span>: {tags[0]} {tags[1]} </p>
              <p>
                Year Of Publishing : {yearOfPublishing}
              </p>
              </div>

              <div className=' flex justify-start'>
                <p> Page : {totalPages} </p>
              <p className="font-semibold text-xl">
                  {" "}
                  publisher : {publisher}
              </p>
              </div>
            </div>

            <div className="flex justify-start items-center ">
              <p>
                {" "}
                <span className="text-[#328EFF] bg-[#328eff5d] rounded-full p-3 ">
                  {" "}
                  category : {category }
                </span>{" "}
              </p>
              <p>
                <span className="text-[#328EFF] bg-[#328eff5d] rounded-full p-3">
                  {" "}
                  ratings {rating}
                </span>
              </p>
              
              <Link to= {`books/${bookId}`} >
              <button className="btn btn-outline rounded-full"> View Details </button> 
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
ListBookCard.propTypes = {
    item: PropTypes.object
}
export default ListBookCard;
