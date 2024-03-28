const wishLishGetSaveData = () => {
    const getData = localStorage.getItem("wishLishReadBooks");
    if (getData) {
      return JSON.parse(getData);
    }
    return [];
  };
  
  const wishLishSaveToLocalStorage = (data) => {
    let getData = wishLishGetSaveData();
  
    const existingData = getData.find((savedId) => savedId.bookId == data.bookId);
  
    if (!existingData) {
      getData.push(data);
      localStorage.setItem("wishLishReadBooks", JSON.stringify(getData));
    }
  };
  
  export { wishLishSaveToLocalStorage, wishLishGetSaveData };
  