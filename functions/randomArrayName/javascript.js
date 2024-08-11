const names = ['Chris', 'Li Kang', 'Anne', 'Francesca', 'Mustafa', 'Tina', 'Bert', 'Jada']
const para = document.createElement('p');

// Add your code here
function random(min, max){
range = max - min;
randomRange = (Math.random() * range) + min;
randomNumber = Math.floor(randomRange);
return randomNumber;
}

function chooseName (number){
    name = names[number];
    return name;
}

randNum = random(0,names.length);
nameFound = chooseName(randNum);


para.textContent = nameFound;


document.body.innerHTML = ' ';

document.body.appendChild(para);
    


// answer = Math.random() ;
// answer2 = (answer * (5-2)) + 2;
// answer3 = Math.floor(answer2);

// para.textContent = "rand = " + answer + " multiplied= " + answer2 + "floor= " + answer3;
