import PropTypes from 'prop-types';

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
              <p>
                {" "}
                <span className="font-semibold text-xl"> Tag </span>: {tags[0]} {tags[1]}
                publishedDate : {yearOfPublishing}
              </p>
              <p>
                {" "}
                <span className="font-semibold text-xl">
                  {" "}
                  publisher : {publisher}
                </span> page : {totalPages}
              </p>
              <p className="mb-2">Click the button to watch on Jetflix app.</p>
            </div>

            <div className="flex justify-start items-center ">
              <p>
                {" "}
                <span className="text-[#328EFF] bg-[#328eff5d] rounded-full p-3 ">
                  {" "}
                  category{category }
                </span>{" "}
              </p>
              <p>
                <span className="text-[#328EFF] bg-[#328eff5d] rounded-full p-3">
                  {" "}
                  ratings {rating}
                </span>
              </p>
              <button className="btn btn-outline rounded-full"> View Details </button>
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
