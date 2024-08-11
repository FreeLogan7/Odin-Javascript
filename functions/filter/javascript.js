const names = [
    "Chris",
    "Li Kang",
    "Anne",
    "Francesca",
    "Mustafa",
    "Tina",
    "Bert",
    "Jada",
  ];

  const para = document.createElement("p");
  
  const shortNames = names.filter((name) => name.length < 5);
  

  const formattedShortNames = shortNames.join(" ");
  para.textContent = formattedShortNames;

  document.body.innerHTML = " ";
  document.body.appendChild(para);