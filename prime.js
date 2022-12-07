//Check Prime Number Using Functions.
function checkprime(number){
  let count = 0;
  let nonprime = 0;
  for(let i = 2; i <= number; i++){
    if(number % i === 0){
      count++
    }
    else{
      nonprime++
    }
  }
  if (count === 1){
    return number + ' ' + 'is a Prime Number';
  }
  else{
    return number + ' ' + 'is not a Prime Number';
  }
}
console.log(checkprime(7))