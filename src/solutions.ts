
const multiplyValue = (value : number, multiplier?: number) : number =>{
    if(value === 0 || multiplier === 0){
        return 0;
    }
    else if(multiplier === undefined){
        return value * 2;
    }
    else{
        return value * multiplier;
    }
}


