
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
import TabWishlist from './assets/Component/ListedBooks/TabWishlist/TabWishlist.jsx';


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

        children: [
          {
            index: true,
            element: <ListedBooks> </ListedBooks>,
          },
          {
            path: 'wishListBooks',
            element: <TabWishlist> </TabWishlist>
          }
        ]
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
        path:'books/:bookId',
        loader: () => fetch('/books.json') ,
        element: <BookDetails> </BookDetails>,
        
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <RouterProvider router={router} />
  </>,
)
