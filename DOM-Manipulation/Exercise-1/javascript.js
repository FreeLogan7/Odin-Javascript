const container = document.querySelector("#container");

//CLASS CONTENT
const content = document.createElement("div");
content.classList.add("content");
content.textContent = "Adding Text Content via Javascript File!";

container.appendChild(content);


//CLASS RED
const red = document.createElement("p");
red.classList.add("red");
red.textContent = "Hey I'm red!";
red.style.color = "red";

container.appendChild(red);

//CLASS blue
const blue = document.createElement("h3");
blue.classList.add("blue");
blue.textContent = "I'm a blue h3";
blue.style.cssText = "color: blue;";

container.appendChild(blue);

//CLASS multipleElements
const multipleElements = document.createElement("div")
multipleElements.classList.add("border");
multipleElements.style.backgroundColor = "pink";
multipleElements.style.border = "solid black"; 

//Title of pink border
const borderTitle = document.createElement("h1");
borderTitle.textContent = "I'm in a div";
multipleElements.appendChild(borderTitle);

//Header of pink border
const borderHeader = document.createElement("p");
borderHeader.textContent = "ME TOO!";
multipleElements.appendChild(borderHeader);

//Connect whole div to main container 
container.appendChild(multipleElements);


