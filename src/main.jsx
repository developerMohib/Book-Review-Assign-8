
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import "./index.css";

import Root from './assets/Component/Root/Root.jsx';
import ErrorPage from './ErrorPage.jsx';
import Home from './assets/Component/Home/Home.jsx';
import Blogs from './assets/Component/Blogs/Blogs.jsx';
import ListedBooks from './assets/Component/ListedBooks/ListedBooks.jsx';
import ReadBooks from './assets/Component/ReadBooks/ReadBooks.jsx';
import About from './assets/Component/About/About.jsx';
import Contact from './assets/Component/Contact/Contact.jsx';
import BookDetails from './assets/Component/BookDetails/BookDetails.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root> </Root>,
    errorElement: <ErrorPage> </ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home> </Home>,
      },
      {
        path: "/listedBooks",
        element: <ListedBooks> </ListedBooks>,
      },
      {
        path: "/readBooks",
        element: <ReadBooks> </ReadBooks> ,
      },
      {
        path: "/blogs",
        element: <Blogs> </Blogs>,
      },
      {
        path: "/about",
        element: <About> </About>,
      },
      {
        path: "/contact",
        element: <Contact> </Contact>,
      },
      {
        path:'./listedBooks/:bookdetails',
        loader : () => fetch('https://raw.githubusercontent.com/developerMohib/Book-Review-JSON-Data-A8/master/Json-For-Book-Data') ,
        element: <BookDetails> </BookDetails>
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <RouterProvider router={router} />
  </>,
)
