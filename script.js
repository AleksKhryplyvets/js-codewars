//1.
function makeNegative(num) {
  if (num => 1){
    return -Math.abs(num);
 } else {
   return num;
 }
}

//2.

function goals (laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
  const sum = laLigaGoals + copaDelReyGoals + championsLeagueGoals;
  return sum;
}

//3.

function move (position, roll) {
  const result = position + (roll*2);
  return result;
}

//4.

function greet (name, owner) {
  if ( name == owner ){
    return 'Hello boss';
  } else {
    return 'Hello guest';
  }
}

//5. 

return Mart.floor ( time \ 2 )

//6.

function lovefunc(flower1, flower2){
  if ((flower1 + flower2) % 2 === 0){
    return false;
  } else {
    return true;
  }
}

//7.


function stringToArray(string){
  return string.split(' ');
}

//8.

function DNAtoRNA(dna) {
  let letterT = /T/g;
  return dna.replace(letterT , 'U');
}

//9.

let min = function(list){
  
  
    return Math.min(...list);
}

let max = function(list){
    
    return Math.max(...list);
}


//10.

function maps(x){
  return x.map(n => n * 2);
}

//11.

function firstNonConsecutive (arr) {
for(let i=0;i<arr.length;i++){
  if(arr[i] + 1 !== arr[i+1]){
    return arr[i+1];
  }
  }
  return null;
}


