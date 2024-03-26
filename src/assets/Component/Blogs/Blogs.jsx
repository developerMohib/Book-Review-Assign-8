import { useState, useEffect } from "react";

const Blogs = () => {
  const [bookBlog, setBookBlog] = useState([]);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/developerMohib/Blog-Book-Review-Json/master/NewTextDocument.txt"
    )
      .then((res) => res.json())
      .then((data) => setBookBlog(data));
  }, []);
  console.log(bookBlog, "from blog page");

  return (
    <div>
      <div className="md:grid grid-cols-4 gap-5 my-5">
        {bookBlog?.map((bblog) => (
          <div key={bblog.blogId}>
            <div className="card bg-base-100 shadow-xl">
              <figure>
                <img
                  src={bblog.imageURL}
                  alt="Shoes"
                />
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
    </div>
  );
};

export default Blogs;
