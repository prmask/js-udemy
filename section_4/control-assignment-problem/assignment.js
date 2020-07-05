const randomNumber1 = Math.random(); // produces random number between 0 (including) and 
const randomNumber2 = Math.random();

if(randomNumber1>0.7 && randomNumber2>0.7){
  alert('both greater '+randomNumber2+' '+randomNumber1);
}else if(randomNumber1>0.2 || randomNumber2>0.2){
  alert('not greater '+randomNumber2+' '+randomNumber1);  
}
else{
  alert('both not ture =>  '+randomNumber2+' '+randomNumber1)
}

const arr = [1,2,3,4,5,6,7,8,9,10,11];

for(let i = arr.length; i>=0; i--){
  console.log(arr[i]+' <=');
}

// for(const el of arr){
//   console.log(el+' <<');
// }