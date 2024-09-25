const rectangle = {
    type: "rectangle",
    width: 5,
    height: 10
};
    // Define an object representing a circle
const circle = {
    type: "circle",
    radius: 7
};

function setRectangleWidthAndHeight(newWidth,newHeight){
    rectangle.height = newHeight;
    rectangle.width= newWidth;
}
function setCircleRadius(newRadius){
    circle.radius = newRadius;
}
function getCircleRadius(){
    return circle.radius;
}
function getRectangleMeasurement(){
    return [rectangle.height, rectangle.width];
}
function getRectangleArea(){
    return rectangle.height* rectangle.width;
}
function getCircleArea(){
    return Math.PI * circle.radius*circle.radius;
}

const w = prompt("Enter width:");
const h = prompt("Enter height:");
console.log(`Updating rectangle with ${w} and ${h}`);
setRectangleWidthAndHeight(w,h);
console.log(`Updated rectangle with ${getRectangleMeasurement()[0]} and ${getRectangleMeasurement()[1]}`);
console.log(`The area of ${typeof(rectangle)} with height ${getRectangleMeasurement()[0]} and ${getRectangleMeasurement()[1]} is ${getRectangleArea()}`);

const r = prompt("Enter radius:");
console.log(`Updating circle with ${r}`);
setCircleRadius(r);
console.log(`Updated rectangle with ${getCircleRadius()}`);
console.log(`The area of ${typeof(circle)} with radius ${getCircleRadius()} is ${getCircleArea().toFixed(2)}`);