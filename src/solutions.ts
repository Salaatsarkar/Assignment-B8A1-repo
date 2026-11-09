
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







const pluckValues = <T, K extends keyof T> ( items: T[], key: K ) : T[K][] =>{
    return items.map(item => item[key]);

}







class Employee {
    protected name: string ;
    private _baseSalary: number;

    constructor(name: string, _baseSalary: number){
        this.name = name;
        this._baseSalary = _baseSalary;


    }

    getDetails(){
        return JSON.stringify( `Employee: ${this.name}, Base Salary: ${this._baseSalary}`)
    }

}

class Manager extends Employee{
    
    constructor(name: string, _baseSalary: number, private department: string){
         super(name, _baseSalary)
         this.department= department;
    }

    getRoleInfo(){
        return JSON.stringify(`Manager of ${this.department}: ${this.name}`)
    }

}








 export{}
const validateAgeAsync = async(age: number) : Promise<string> =>{
  
      return new Promise ((resolve,reject) =>{
       
            if(age >= 18){
                setTimeout(() => {
                      resolve (JSON.stringify( "Access Granted"))  
                }, 1000);
            
            }
         else{
                
             reject(new Error("Access Denied: Must be 18 or older"))

            }
    })

    }
     



   









