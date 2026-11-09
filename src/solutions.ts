
const multiplyValue = (value : number, multiplier?: number) : number =>{

    if(value === 0 || multiplier === 0){
        return 0;
    }
    else if(multiplier === undefined){
        return Math.abs( value * 2);
    }
    else{
         return value * multiplier;  
    }
}



type Value = string | number | boolean

const processInput = (value : Value) : Value =>{
    if(typeof value === 'string'){
        return JSON.stringify(value.trim().toLowerCase());
    }
    else if (typeof value === 'number'){
        return Math.abs(value * 10);
    }
    else if(typeof value === 'boolean'){
        if( value){
            return JSON.stringify("Active")
        }
        else{
            return JSON.stringify("Inactive")
        }
    }
    else{
        const neverValue : never = value;
        return neverValue;
    }
}




type TupleLocation = readonly [number, number, string];

const formatCoordinate = (location :  TupleLocation) : string  =>{

    const [latitude, longitude, locationName] = location;

    return JSON.stringify(`Location: ${locationName} (${latitude}, ${longitude})`);

}



const concatenateArrays = <T> (...arrays: T[][]) : T[] =>{

     return arrays.flat() ;
   
}





interface Course {
    title : string;
    students: number ;
    isPublished : boolean
}

const getPopularCourses = (courses : Course[] , minStudents : number) : Course[] => {

    const getCourse : Course[] = [];
    for(const course of courses){
        if(course.isPublished  && course.students >= minStudents){
            getCourse.push(course)
        
        }

    }

    return getCourse;

}

