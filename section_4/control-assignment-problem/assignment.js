const randomNumber1 = Math.random(); // produces random number between 0 (including) and 
const randomNumber2 = Math.random();

if(randomNumber1>0.7 && randomNumber2>0.7){
  alert('both greater '+randomNumber2+' '+randomNumber1);
}else if(randomNumber1>0.2 || randomNumber2>0.2){
  alert('not greater '+randomNumber2+' '+randomNumber1);  
}
else{
  alert(randomNumber2+' '+randomNumber1)
}

