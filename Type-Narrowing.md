# Exploring Type Narrowing in TypeScript

Introduction : Type Narrowing is a helpful process in Typescript.When a variable has multiple possible types , It helps to identify specific type of this variable. It allows us to work safely with different types of values. we can easily handle data types with type narrowing in typescript.

## Using typeof Operator in Typescript :

The typeof operator helps to check data type of a variable.It is commonly used with primitive types like string, number,boolean.

**Example of typeof Operator :**
```ts
function checkValue(value: string | number) {
    if (typeof value === "string") {
        return value.toUpperCase();
    }
    return value * 2;
}
```
## using instanceof Operator in Typescript :

The instanceof operator helps us check if an object belongs to a specific class. It is useful when we work with more than one class. Sometimes, we need to check which class an object belongs to before using its methods. We can do this with the instanceof operator and if-else conditions. It helps us understand the object type and use the correct method easily.

**Example of instanceof Operator :**
```ts
class Animal {}

const myAnimal = new Animal();

console.log(myAnimal instanceof Animal);
```

## using in Operator in Typescript :

The in operator helps us check if a property exists inside an object or not. We can use it with if-else conditions to identify the object type. It helps us access the correct properties based on the object type.

**Example of in Operator :**
```ts
const car = {
    brand: "Toyota",
    color: "Black"
};
console.log("brand" in car);
```


Conclusion : Type Narrowing is a useful feature in TypeScript. It helps us check the actual type of a value. By using typeof, instanceof, and the in operator, we can easily work with different types of data. It makes our code easier to understand and helps us avoid type errors.

