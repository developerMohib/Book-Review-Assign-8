
const getSaveData = () => {
    // let getData = JSON.parse(localStorage.getItem('read-books')) || [];
    const getData = localStorage.getItem('readBooks');
    if(getData){
        return JSON.parse(getData)
    }
    return [];
}

const SaveToLocalStorage = (book) => {
    let getData = getSaveData();
    // let getData = JSON.parse(localStorage.getItem('readBooks')) || [];

    const existingData = getData?.find(book => book.bookId == book.bookId);

    if (!existingData) {
        getData.push(book);
        localStorage.setItem('readBooks', JSON.stringify(getData)); 
    }
}


export { SaveToLocalStorage, getSaveData};
