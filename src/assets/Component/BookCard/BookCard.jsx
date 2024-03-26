import PropTypes from "prop-types";

const BookCard = ({ book }) => {
  const { bookId, bookName, authorName, category, tags, rating, image } = book;
  return (
    <div>
      <div>
        <div className="card bg-base-100 shadow-xl p-10 border border-gray-400">
          <figure>
            <img
              src={image}
              alt="Book"
            />
          </figure>
          <div className="card-body">
            <div className="flex justify-start" >
                <p> {tags[0] } </p>
                <p> {tags[1]} </p>
            </div>
            <h2 className="card-title">
              {bookName}
            </h2>
            <p> By : {authorName} </p>
            <p> Book Id : {bookId} </p>
            <div className="card-actions justify-between">
              <div className="badge badge-outline"> {category} </div>
              <div className="badge badge-outline"> {rating} </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

BookCard.propTypes = {
  book: PropTypes.object,
};

export default BookCard;
