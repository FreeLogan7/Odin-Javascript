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

