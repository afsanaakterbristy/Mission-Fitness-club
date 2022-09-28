// use local storage to manage cart data
const addToDb = id =>{
    let breakTime = {};

    //get the shopping cart from local storage
    const storedTime = localStorage.getItem('time');
    if(storedTime){
        breakTime = JSON.parse(storedTime);
    }

    // add quantity
    const quantity = breakTime[id];
    if(quantity){
        const newQuantity = quantity + 1;
        breakTime[id] = newQuantity;
    }
    else{
        breakTime[id] = 1;
    }
    localStorage.setItem('time', JSON.stringify(breakTime));
}

const getStoredTime = () => {
        let breakTime = {};

    //get the shopping cart from local storage
    const storedTime = localStorage.getItem('time');
    if(storedTime){
        breakTime = JSON.parse(storedTime);
        return breakTime;
    }
}



export {
    addToDb,
    getStoredTime
   
}