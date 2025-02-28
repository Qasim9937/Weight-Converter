const form1 = document.getElementById('form1');
const input1 = document.getElementById('input1');

const form2 = document.getElementById('form2');
const input2 = document.getElementById('input2');

const result = document.getElementById('result');
const instruction = document.getElementById('instruction');
const kgToG = document.getElementById('kg-g');
const gToKg = document.getElementById('g-kg');

form1.addEventListener('submit', calculateKgToG);
form2.addEventListener('submit', calculateGToKg);

kgToG.addEventListener('click', convertToGrams);
gToKg.addEventListener('click', convertToKg);


function calculateKgToG(event){
    event.preventDefault();
    const userInput = input1.value;

    if(userInput == ''){
        alert('Please enter a number');
    }
    else{ 
      const weightInGram = userInput * 1000;
      result.innerHTML = `<p id='weight-in-g'>${weightInGram}</p> <p id='gram'>grammes(g)</p>`;
    }
}

function calculateGToKg(event){
    event.preventDefault();
    const userInput = input2.value;

    if(userInput == ''){
        alert('Please enter a number');
    }
    else{ 
      const weightInKg = (userInput / 1000);
      result.innerHTML = `<p id='weight-in-kg'>${weightInKg}</p> <p id='gram'>Kg</p>`;
    }
}


function convertToKg(){
    instruction.innerText = 'Enter weight in gram (g)';
    form1.style.display = 'none';
    form2.style.display = 'block';
    kgToG.style.backgroundColor = 'gray'
    gToKg.style.backgroundColor = 'navy' 
}

function convertToGrams(){
    instruction.innerText = 'Enter weight in Kilogram (Kg)';
    form1.style.display = 'block';
    form2.style.display = 'none'; 
    kgToG.style.backgroundColor = 'navy'
    gToKg.style.backgroundColor = 'gray' 
}

