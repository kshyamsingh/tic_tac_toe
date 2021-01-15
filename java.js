const statusdiv =document.querySelector('.status');
const resetdiv =document.querySelector('.reset');
const celldiv =document.querySelectorAll('.game-cell');
//console.log(resetdiv);

//game variables x and 0
const xsymbol='X';
const osymbol='O';
let gameislive=true;
let xisnext=true;

const handlewin=(letter)=>{
    gameislive=false;
    if(letter==='X')
       statusdiv.innerHTML= '<span>X</span> has won!';
    else
       statusdiv.innerHTML='<span>O</span> has won!';
};

const checkGameStatus=()=> {

 const topleft=celldiv[0].classList[1];
 const topmiddle=celldiv[1].classList[1];
 const topright=celldiv[2].classList[1];
 const middleleft=celldiv[3].classList[1];
 const middlemiddle=celldiv[4].classList[1];
 const middleright=celldiv[5].classList[1];
 const bottomleft=celldiv[6].classList[1];
 const bottommiddle=celldiv[7].classList[1];
 const bottomright=celldiv[8].classList[1];
 //check winner
 if(topleft&&topleft===topmiddle&&topleft===topright){
    handlewin(topleft);
    celldiv[0].classList.add('won');
    celldiv[1].classList.add('won');
    celldiv[2].classList.add('won');
 }else if(middleleft&&middleleft===middlemiddle&&middleleft===middleright){
    handlewin(middleleft);
    celldiv[3].classList.add('won');
    celldiv[4].classList.add('won');
    celldiv[5].classList.add('won');
 }else if(bottomleft&&bottomleft===bottommiddle&&bottomleft===bottomright){
    handlewin(bottomleft);
    celldiv[6].classList.add('won');
    celldiv[7].classList.add('won');
    celldiv[8].classList.add('won');
 }else if(bottomleft&&bottomleft===middleleft&&bottomleft===topleft){
    handlewin(bottomleft);
    celldiv[0].classList.add('won');
    celldiv[3].classList.add('won');
    celldiv[6].classList.add('won');
 }else if(bottommiddle&&bottommiddle===middlemiddle&&bottommiddle===topmiddle){
    handlewin(bottommiddle);
    celldiv[1].classList.add('won');
    celldiv[4].classList.add('won');
    celldiv[7].classList.add('won');
 }else if(bottomright&&bottomright===middleright&&bottomright===topright){
    handlewin(bottomright);
    celldiv[2].classList.add('won');
    celldiv[5].classList.add('won');
    celldiv[8].classList.add('won');
 }else if(bottomleft&&bottomleft===middlemiddle&&bottomleft===topright){
     handlewin(bottomleft);
     celldiv[2].classList.add('won');
     celldiv[4].classList.add('won');
     celldiv[6].classList.add('won');
 }else if(bottomright&&bottomright===middlemiddle&&bottomright===topleft){
    handlewin(bottomright);
    celldiv[0].classList.add('won');
    celldiv[4].classList.add('won');
    celldiv[8].classList.add('won');
 }else if(bottomleft&&bottomright&&bottommiddle&&topleft&&topmiddle&&topright&&middleleft&&middlemiddle&&middleright){
     gameislive=false; 
     statusdiv.innerHTML='Game is Tied';
 }else{
       xisnext=!xisnext;
     if(xisnext)statusdiv.innerHTML='X is next';
     else statusdiv.innerHTML=' O is next';

 }
};




//event handlers
const handlereset=(e)=>{
    xisnext=true;
    statusdiv.innerHTML='X is next';
    for(i of celldiv){
        i.classList.remove('X');
        i.classList.remove('O');
        i.classList.remove('won');
    }
    gameislive=true;
};

//onclick
const gamecellclick=(e)=>{
    const classList=e.target.classList;

   if(!gameislive||classList[1]==='X'||classList[1]==='O'){
       return;
   }
    if(xisnext){
        classList.add('X');
        checkGameStatus(); 
    }
    else{
        classList.add('O');
        checkGameStatus();  
    }
};

//event listeners
resetdiv.addEventListener('click',handlereset);

for(const i of celldiv)
{
   i.addEventListener('click',gamecellclick);
}

