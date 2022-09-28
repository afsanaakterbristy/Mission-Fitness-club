
const addToDb = time =>{
    let breakTime = {};

   
    const storedTime = localStorage.getItem('time');
    if(storedTime){
        breakTime = JSON.parse(storedTime);
    }

   
    const quantity = breakTime[time];
    if(quantity){
        const newQuantity = quantity + 1;
        breakTime[time] = newQuantity;
    }
    else{
        breakTime[time] = 1;
    }
    localStorage.setItem('time', JSON.stringify(breakTime));
}

const getStoredTime = () => {
        let breakTime = {};

    
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