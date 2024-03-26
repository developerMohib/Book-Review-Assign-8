const ListedBooks = () => {
  return (
    <div>
      <div className="text-center " >
        <h1 className="text-3xl p-10 bg-gray-100 rounded-lg text-black "> Books </h1>
        <select className="select  w-full max-w-xs text-white bg-[#23BE0A] ">
          <option selected> Sort By </option>
          <option> Rating </option>
          <option>Number of pages</option>
          <option>Publisher year</option>
        </select>
      </div>
      <div>
        <div className="card card-side bg-base-100 shadow-xl border border-gray-300 my-10 ">
          <figure>
            <img
              src="https://i.postimg.cc/c4vY4CXz/pngwing-1.png"
              alt="Movie"
            />
          </figure>
          <div className="card-body">
            <div className="border-b border-gray-300 space-y-1">
              <h2 className="card-title">New movie is released!</h2>
              <p> By: author </p>
              <p>
                {" "}
                <span className="font-semibold text-xl"> Tag </span>: Tag Name
                publishedDate{" "}
              </p>
              <p>
                {" "}
                <span className="font-semibold text-xl">
                  {" "}
                  publisher{" "}
                </span> page{" "}
              </p>
              <p className="mb-2">Click the button to watch on Jetflix app.</p>
            </div>

            <div className="flex justify-start items-center ">
              <p>
                {" "}
                <span className="text-[#328EFF] bg-[#328eff5d] rounded-full ">
                  {" "}
                  category{" "}
                </span>{" "}
              </p>
              <p>
                <span className="text-[#328EFF] bg-[#328eff5d] rounded-full ">
                  {" "}
                  ratings{" "}
                </span>
              </p>
              <button className="btn btn-outline rounded-full">Watch</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListedBooks;
