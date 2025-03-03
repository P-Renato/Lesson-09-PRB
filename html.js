/*
    Here we need to generate a new html file based on a template
*/

import fs from "fs";

// This time the template will be stored in a variable
const template_html = `
<html>
    <head>
        <style>
            div {
                display: flex;
                flex-wrap: wrap;
                border: 5px solid red;
            }
            img {
                flex-basis: 150px;
                flex-grow: 1;
                flex-shrink: 1;
                height: 250px;
                object-fit: cover;
                border: 5px solid red;
            }
        </style>
    </head>
    <body>
        <div>{{images}}</div>
    </body>
</html>
`;

/*
in the variable above we are going to substitute {{images}} with the img tags
We don't have them yet.. so far all we have i an array of image NAMES.
We need to prepare the image tags and add the src to it
*/

// Now we create a variable holding the structure of a generic image tag

const template_image = `<img src="{{image}}">`;

/*
Now wew write a function that recieves the img name (which is also
 the path in this case)
 This function will them replace {{image}} with the actual image name/path
 and return the whole <img> tag
*/

function prepareImage( image_path ){ 
    return template_image.replace("{{image}}", image_path)
}

/*
    Now we create a function that genreates an html file in a 
    specific location.
    The html file must include the image TAGS.
*/

function writeHtml( imagesPath, imageElements ){
    // console.log(imagesPath)
    // console.log(imageElements)
    /*
        I create a variable that will hold the template where {{images}}
        has been replaced with the content of the array all joined together
    */
   const html = template_html.replace("{{images}}", imageElements.join("")); // here we are replacing the first part for the second
    // console.log( html )

    // Now it's time to generate our new html file
    // The file will appear in the images folder... not ideal.. for learning purposes..
    const path = imagesPath + "images.html";
    // console.log(path)

    // In order to generate a new file i will use the fs module
    fs.writeFileSync( path, html );
}


export { prepareImage, writeHtml };