function sumOfDigits(num){
	let sum = 0; 
  if(num==1){
  	return 1;
  }else{
  	function addToSum(num){
      if(num>0){ 
      	sum = sum + num%10;
        addToSum(parseInt(num/10));
     } 
  	}
  	addToSum(num);
  	return (Math.floor(sum));
  }
}

let newNum = 12345;
let result = sumOfDigits(newNum)
document.write(result);
