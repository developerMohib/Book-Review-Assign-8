import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";

const Blogs = () => {
  const [bookBlog, setBookBlog] = useState([]);
  const [loading, setLoading] = useState(false);
  const [blogLen, setBlogLen] = useState(4);

  useEffect(() => {
    setLoading(true);
    fetch(
      "https://raw.githubusercontent.com/developerMohib/Blog-Book-Review-Json/master/NewTextDocument.txt"
    )
      .then((res) => res.json())
      .then((data) => setBookBlog(data));
    setLoading(false);
  }, []);
  // console.log(bookBlog, loading, "from blog page");

  return (
    <div>
      <div className="md:grid grid-cols-4 gap-5 my-5">
        {bookBlog?.slice(0, blogLen).map((bblog) => (
          <div key={bblog.blogId} className=" flex flex-grow">
            <div className="card bg-base-100 shadow-xl">
              <figure>
                <img src={bblog.imageURL} alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title"> {bblog.blogTitle} !</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <p> {bblog.blogCategory} </p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Read Now</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div
        className={`my-10 text-center ${
          blogLen == bookBlog.length && "hidden"
        } `}
      >
        <button
          onClick={() => setBlogLen(bookBlog.length)}
          className="btn btn-outline"
        >
          {" "}
          load more{" "}
        </button>
      </div>
    </div>
  );
};

export default Blogs;
