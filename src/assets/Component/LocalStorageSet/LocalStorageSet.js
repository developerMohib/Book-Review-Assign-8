import { toast } from "react-toastify";

const getSaveData = () => {
    let getData = JSON.parse(localStorage.getItem('read-books')) || [];
    return getData;
}

const SaveToLocalStorage = (data) => {
    let saveData = JSON.parse(localStorage.getItem('read-books')) || [];

    const existingData = saveData.find(book => book.bookId == data.bookId);
    // console.log(data , 'paramiter data');

    if (!existingData) {
        saveData.push(data);
        localStorage.setItem('read-books', JSON.stringify(saveData)); 
    } else {
        // return toast ("already added from local set js!");
    }
}


export { SaveToLocalStorage, getSaveData};
