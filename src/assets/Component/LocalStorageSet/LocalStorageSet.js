const getSaveData = () => {
    const getData = localStorage.getItem("readBooks");
    if (getData) {
      return JSON.parse(getData);
    }
    return [];
  };
  
  const SaveToLocalStorage = (data) => {
    let getData = getSaveData();
  
    const existingData = getData.find((savedId) => savedId.bookId == data.bookId);
  
    if (!existingData) {
      getData.push(data);
      localStorage.setItem("readBooks", JSON.stringify(getData));
    }
  };
  
  export { SaveToLocalStorage, getSaveData };
  