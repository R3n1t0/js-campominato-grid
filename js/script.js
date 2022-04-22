

const container = document.querySelector(".rl-container");
const numberList = [];


init();


// Inizializzo inserendo i box generati nel contenitore e creo un evento al click solo per il box cliccato.
function init(){

  for (let i = 0; i < 64; i++){

    const bx = boxGenerator(container)

    bx.addEventListener("click", function(){
      this.classList.add('clicked');
    })
    
  }

}


// Creo la funzione che serve a generare i box dandogli una classe e inserendo il numero corrispondente. 
function boxGenerator(target){

  const bx = document.createElement("div");
  bx.className = "box";
  const number = unicRandomNumber(1, 64);
  bx.innerHTML = `<span>${number}</span>`;
  bx.classList.add(pariDsiapri(number))
  target.append(bx);
  return bx;
}


// Creo la funzione che genera i numeri UNICI inserendoli nella numberList.
function unicRandomNumber(min, max){
  
  let number, valid;

  while(!valid){
    number = randomNumber(min, max);

    if(!numberList.includes(number)){
      numberList.push(number);
      valid = true;
    }
    
  }

  return number;
}


//Creo la funzione per generare numeri RANDOM.
function randomNumber(min, max){

  return Math.floor(Math.random() * (max - min + 1) + min);

}


//Creo la funzione pari dispari da assegnare poi ai box.
function pariDsiapri(n){
  if(n % 2) return 'pari';
  return 'dispari';
}