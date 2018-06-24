function largeSecond(arr){
	let large1 = arr[0]>arr[1]? arr[0] : arr [1];
  let large2 = arr[0]<arr[1]? arr[0] : arr [1];
  for(let i=2; i<arr.length; i++){
  	if(arr[i]>large1){
    	large2 = large1;
    	large1 = arr[i];
    }
  }
	return large2;
}

let newArr = [1250, 420, 150, 2050, 112, 120, 130];
let result = (largeSecond(newArr));
document.write(result);
