import { CiBookmark } from "react-icons/ci";
import { GoBook } from "react-icons/go";
import { useState } from "react";
import { Link } from "react-router-dom";

const Tabs = () => {
    const [tabIndex, setTabIndex] = useState(0)
  return (
    <div>
      <div className="flex items-center -mx-4 my-10 overflow-x-auto overflow-y-hidden sm:justify-center flex-nowrap dark:bg-gray-100 dark:text-gray-800">
        <Link onClick={() => setTabIndex(0)}
        to = ''
        className= {`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tabIndex === 0 ? 'border border-b-0 ' : 'border' } dark:border-gray-600 dark:text-gray-600`}
        >
          <CiBookmark />
          <span>Read Books</span>
        </Link>

        <Link onClick={() => setTabIndex(1)}
        to = {'wishListBooks'}
          className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tabIndex === 1 ? 'border border-b-0 ' : 'border' } dark:border-gray-600 dark:text-gray-600`}
        >
          <GoBook />
          <span>Wishlist Books</span>
        </Link>
      </div>
    </div>
  );
};

export default Tabs;
