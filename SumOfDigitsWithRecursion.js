function sumOfDigits(num){
	let sum = 0; 
  function addToSum(num){
      if(num>0){
        sum = sum + num%10;
        addToSum(num/10);
     } 
  }
  addToSum(num);
  return Math.floor(sum);
}

let newNum = 123;
let result = sumOfDigits(newNum)
document.write(result);
