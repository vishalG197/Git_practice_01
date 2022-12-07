function checkprime(num){
let count=0;
for(let i=0;i<num;i++){
if(num%2==0){
count++;
}else{
return false;
}
}
}
console.log(checkprime(17));