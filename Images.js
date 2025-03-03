
/* 
we need to read and grab the content if the images folder
for that we are going to use the fs module 
*/

import fs from "fs";

/*
We need a function that recieves an image path, goes to that location and
grabs all file names and returns them.
We can easily achieve that using fs.readdirSync
*/

function getImages ( imagesPath){
    try {
    return fs.readdirSync( imagesPath);
    } catch ( error ) {
        console.error(`Error reading images from ${imagesPath}: ${error}`);
        process.exit();
    }
}

export default getImages;