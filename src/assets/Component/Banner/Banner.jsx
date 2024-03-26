import { NavLink } from "react-router-dom";

const Banner = () => {

  return (
    <div>
      <div>
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div>
            <img src='https://i.postimg.cc/c4vY4CXz/pngwing-1.png' border='0' alt='pngwing-1'/>
            </div>
            <div className="">
              <h1 className="md:text-5xl text-2xl font-bold "> Books to freshen <br/> up your bookshelf </h1>
              <p className="py-6 md:w-1/2 ">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
              <NavLink to="./listedBooks"> 
              <button className="btn btn-primary bg-[#23BE0A] text-white border-none"> View the list </button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
