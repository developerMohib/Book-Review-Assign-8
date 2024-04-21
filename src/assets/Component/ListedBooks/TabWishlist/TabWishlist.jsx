
const TabWishlist = () => {
  const getItemFromWishLish = localStorage.getItem("wishLishReadBooks");
  const parsGetItem = JSON.parse(getItemFromWishLish);
  console.log(parsGetItem, "pases ase ");
  return (
    <div>

      <div className="testiddd">
        {parsGetItem?.map((item) => (
          <div
            key={item.bookId}
            className="card card-side bg-base-100 shadow-xl border border-gray-300 my-10 "
          >
            <figure>
              <img src={item.image} alt="Movie" />
            </figure>
            <div className="card-body">
              <div className="border-b border-gray-300 space-y-1">
                <h2 className="card-title"> {"bookName"} </h2>
                <p> By: {"authorName"} </p>

                <div className="flex justify-start">
                  <p>
                    {" "}
                    <span className="font-semibold text-xl"> Tag </span>: taggg{" "}
                  </p>
                  <p>Year Of Publishing : {item.yearOfPublishing}</p>
                </div>

                <div className=" flex justify-start">
                  <p> Page : {item.totalPages} </p>
                  <p className="font-semibold text-xl">
                    {" "}
                    publisher : {item.publisher}
                  </p>
                </div>
              </div>

              <div className="md:flex justify-start items-center ">
                <p>
                  {" "}
                  <span className="text-[#328EFF] bg-[#328eff5d] rounded-full p-3 ">
                    {" "}
                    category : {item.category}
                  </span>{" "}
                </p>
                <p>
                  <span className="text-[#328EFF] bg-[#328eff5d] rounded-full p-3">
                    {" "}
                    ratings {item.rating}
                  </span>
                </p>
                <button className="btn btn-outline rounded-full">
                  {" "}
                  View Details{" "}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TabWishlist;
