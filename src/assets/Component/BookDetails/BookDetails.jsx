// import { useLoaderData } from "react-router-dom";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const BookDetails = () => {
    const [allBooks, setAllBooks] = useState([]);
    const [findBook, setFindBook] = useState(  )
    // const bookLoader = useLoaderData(  );
    const bookId = useParams();
    const id = bookId.bookId ;

    console.log(id, 'how it typeOf ');
    console.log(allBooks, 'aalllaall ')
    
    useEffect(()=> {
        fetch('https://raw.githubusercontent.com/developerMohib/Book-Review-JSON-Data-A8/master/Json-For-Book-Data')
        .then(res => res.json())
        .then(data => setAllBooks(data))
    },[])

    useEffect(()=>{
        const booksID = parseInt(id)
        console.log(booksID);
        if(allBooks.length > 0){
            const findBooks = allBooks?.find(book => (book.bookId) === booksID );
            setFindBook(findBooks);
        }
    } ,[allBooks,id])
    
    console.log(findBook, ' f array');

    return (
        <div>
            <h1>heoooo</h1>
            <div>
                {
                    // allBooks.map( book => (
                    //     <div key={book.bookId} className="card lg:card-side bg-base-100 shadow-xl">
                    //     <div>
                    //         <img src={book.image} alt="" />
                    //     </div>
                    //     <div className="card-body">
                    //         <h2 className="card-title">New album is released!</h2>
                    //         <p>Click the button to listen on Spotiwhy app.</p>
                    //         <div className="card-actions justify-end">
                    //         <button className="btn btn-primary">Listen</button>
                    //         </div>
                    //     </div>
                    //     </div>
                    // ) )
                }
            </div>

        </div>
    );
};

export default BookDetails;