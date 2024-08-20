
let banner = [{
    id : "I1",
    imageLink : "images/image-1.png",
    title:"title 1",
    description: "random description 1"
},
{
    id : "I2",
    imageLink : "images/image-2.png",
    title:"title 2",
    description: "random description 2"
},
{
    id : "I3",
    imageLink : "images/image-3.png",
    title:"title 3",
    description: "random description 3"
},
{
    id : "I4",
    imageLink : "images/image-4.png",
    title:"title 4",
    description: "random description 4"
}];

// Use the map method to extract titles
let titles = banner.map(function(bannerItem) {
    return bannerItem.id;
});

// Output the new array
console.log(titles);

// Get the container element
const container = document.getElementById('banner-container');

// Iterate through the banner array and create HTML elements
banner.map( bannerItem => {
    // Create a div for each banner item
    const bannerDiv = document.createElement('div');
    bannerDiv.classList.add('banner-item');
    
    // Create and append the h1 element
    const title = document.createElement('h1');
    title.textContent = bannerItem.title;
    bannerDiv.appendChild(title);
    
    // Create and append the p element
    const description = document.createElement('p');
    description.textContent = bannerItem.description;
    bannerDiv.appendChild(description);
    
    // Create and append the img element
    const image = document.createElement('img');
    image.src = bannerItem.imageLink;
    image.alt = bannerItem.title; // Alternative text for the image
    bannerDiv.appendChild(image);
    
    // Append the banner item to the container
    container.appendChild(bannerDiv);
});

let newProduct = [
    {
    id: "NP1",
    title: "product 1",
    description: "this product is",
    imageLink: "./images/image-1.png"
},
{
    id: "NP2",
    title: "product 2",
    description: "this product is",
    imageLink: "./images/image-2.png"
},
{
    id: "NP3",
    title: "product 3",
    description: "this product is",
    imageLink: "./images/image-1.png"
},
{
    id: "NP4",
    title: "product 4",
    description: "this product is",
    imageLink: "./images/image-4.png"
},
{
    id: "NP5",
    title: "product 5",
    description: "this product is",
    imageLink: "./images/image-5.png"
},
{
    id: "NP6",
    title: "product 6",
    description: "this product is",
    imageLink: "./images/image-6.png"
},
{
    id: "NP7",
    title: "product 7",
    description: "this product is",
    imageLink: "./images/image-7.png"
}
]





