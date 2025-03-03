/*
here we can start our application
*/

import { prepareImage, writeHtml } from "./html.js";
import getImages from "./Images.js";

// We creat a variable and store the path to the images folder
const imagesPath = "./Images/";

// Now we are going to use the getImages function 
// to retrieve the content of the folder
const images = getImages( imagesPath );

console.log( images )






const imageElements = [];

for (let i=0; i < images.length; i++){
    imageElements.push(prepareImage( images[i] ));
}


console.log(prepareImage)
console.log(imageElements)


writeHtml( imagesPath, imageElements);