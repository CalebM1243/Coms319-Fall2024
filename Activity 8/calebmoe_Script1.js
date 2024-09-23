function maxOfTwo(num1, num2){
    return Math.max(num1,num2);
}
function maxOfArray(array){
    max = Number.MIN_VALUE;
    array.forEach(element => {
        if (element > max){
            max = element
        }
    });
    return max
}
function showProperties(movie){
    console.log("List Of Keys :")
    for (let key in movie){
        console.log(key)
    }
    console.log("List Of Values :")
    for(let key in movie){
        console.log(movie[key])
    }
}

function calculateAverageGrade(grades){
    total = 0;
    count = 0;
    for ( let key in grades){
        count+=1;
        total += grades[key];
    }
    return total/count;
}

function calculateAverageGradePerStudent(students){
    ret = {};
    
    students.forEach(student => {
        for(let key in student){
            average = calculateAverageGrade(student[key]);
            ret[key] = average;
        }
    });
    return ret;
}
console.log("Exercise 1");
console.log("------------");
let n1 = 11;
let n2 = 10;
console.log(`The max between ${n1} and ${n2} is :`, maxOfTwo(n1,n2));
console.log("Exercise 2");
console.log("------------");
let array = [10,11,1024,125,9,201];
console.log(maxOfArray(array));
console.log("Exercise 3");
console.log("------------");
const movie = {
    title : 'Some movie',
    releaseYear: 2018,
    rating: 4.5,
    director: 'Steven Spielberg'
    };
showProperties(movie);
console.log("Exercise 4");
console.log("------------");

class Circle {
    constructor(radius) {
        this.radiusValue = radius;
    }
    area(){
        return Math.PI * this.radiusValue * this.radiusValue;
    }
    get radius(){
        return this.radiusValue;
    }
    set radius(val){
        this.radiusValue = val;
    }
    getRadiusValue(){
        return this.radiusValue;
    }
    setRadiusValue(value){
        this.radiusValue = value;
    }
}
circle = new Circle(2);
console.log(`The area of the circle is : ${circle.area().toFixed(2)}`);

console.log("Exercise 5");
console.log("------------");
circle2 = new Circle(2);
console.log(`Area with ${circle2.radiusValue} :`,circle2.area());
circle2.radiusValue = 3;
console.log(`Area with ${circle2.radiusValue} :`,circle2.area());

console.log("Exercise 6");
console.log("------------");
circle3 = new Circle(2);
console.log(`Area with ${circle3.getRadiusValue()} :`,circle3.area());
circle3.setRadiusValue(3);
console.log(`Area with ${circle3.getRadiusValue()} :`,circle3.area());

console.log("Exercise 7");
console.log("------------");
const grades = {
    math: 85,
    science: 90,
    history: 75,
    literature: 88
};
console.log(calculateAverageGrade(grades));

console.log("Exercise 8");
console.log("------------");

const students = [
    {
    Fer:{
        math: 85,
        science: 90,
        history: 75,
        literature: 88
    }
    },
    {
    Alex: {
        math: 99,
        science: 97,
        history: 94,
        literature: 90
    }
    },
    {
    Mary: {
        math: 79,
        science: 72,
        history: 81,
        literature: 79
    }
    }
];

console.log(calculateAverageGradePerStudent(students));