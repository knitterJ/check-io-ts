 // This function should take two positive numbers
 // (length and width) as inputs and return the perimeter of a rectangle.
import myImage from './perimeter.png'
const imageElement = <img src={myImage} alt="My Image" />;
function rectanglePerimeter(length: number, width: number): number {
    return length*2+width*2;
}

console.log(rectanglePerimeter(3, 2));
console.log(rectanglePerimeter(0.5, 2));
