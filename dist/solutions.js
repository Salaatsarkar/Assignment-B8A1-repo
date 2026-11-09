const multiplyValue = (value, multiplier) => {
    if (value === 0 || multiplier === 0) {
        return 0;
    }
    else if (multiplier === undefined) {
        return Math.abs(value * 2);
    }
    else {
        return value * multiplier;
    }
};
const processInput = (value) => {
    if (typeof value === 'string') {
        return JSON.stringify(value.trim().toLowerCase());
    }
    else if (typeof value === 'number') {
        return Math.abs(value * 10);
    }
    else if (typeof value === 'boolean') {
        if (value) {
            return JSON.stringify("Active");
        }
        else {
            return JSON.stringify("Inactive");
        }
    }
    else {
        const neverValue = value;
        return neverValue;
    }
};
const formatCoordinate = (location) => {
    const [latitude, longitude, locationName] = location;
    return JSON.stringify(`Location: ${locationName} (${latitude}, ${longitude})`);
};
const concatenateArrays = (...arrays) => {
    return arrays.flat();
};
const getPopularCourses = (courses, minStudents) => {
    const getCourse = [];
    for (const course of courses) {
        if (course.isPublished && course.students >= minStudents) {
            getCourse.push(course);
        }
    }
    return getCourse;
};
const pluckValues = (items, key) => {
    return items.map(item => item[key]);
};
class Employee {
    name;
    _baseSalary;
    constructor(name, _baseSalary) {
        this.name = name;
        this._baseSalary = _baseSalary;
    }
    getDetails() {
        return JSON.stringify(`Employee: ${this.name}, Base Salary: ${this._baseSalary}`);
    }
}
class Manager extends Employee {
    department;
    constructor(name, _baseSalary, department) {
        super(name, _baseSalary);
        this.department = department;
        this.department = department;
    }
    getRoleInfo() {
        return JSON.stringify(`Manager of ${this.department}: ${this.name}`);
    }
}
const validateAgeAsync = async (age) => {
    return new Promise((resolve, reject) => {
        if (age >= 18) {
            setTimeout(() => {
                resolve(JSON.stringify("Access Granted"));
            }, 1000);
        }
        else {
            reject(new Error("Access Denied: Must be 18 or older"));
        }
    });
};
export {};
