//1

function createArray(start, end) {
   let result = [];
   for (let i=start; i<= end; i++) {
    result.push(i);
   }
   console.log(result);
}
createArray(2, 9);

//або 2й варіант
function createArray(start, end) {
    let result = [];
    for (let i = start; i <= end; i++) {
      result.push(i);
    }
    return result;
  }
  
  let arr = createArray(2, 9);
  console.log(arr);


//2
function nums(a, b) {
    let result = '';

    for (let i = a; i <= b; i++) {
        for (let j = 0; j < i - a + 1; j++) {
            result = result + i + ' ';
        }
    }
    console.log(result);
}
nums(1, 8);
nums(2, 9);

//3
function randArray (k) {
    let array = [];

    for (let i = 0; i < k; i++) {
    let value = Math.floor(Math.random() * 500) + 1;
    array.push(value);
} 
    console.log(array);
}
randArray(5);


//4
function compact (array) {
    let newArray = [];

    for (let i = 0; i < array.length; i++) {
      if (!newArray.includes(array[i])) {
        newArray.push(array[i]);
      }
    }
  console.log(newArray);
  }

let arr = [1, 4, 6, 6, 6, 4, 9, 1];
let arr2 = [5, 3, 4, 5, 6, 7, 3]
compact(arr);
compact(arr2);


//5
function separateArray (array) {
 let newArray = {};
 for (let item of array) {
    let itemType = typeof item;
    if (!newArray[itemType]) {
        newArray[itemType] = [];
    }
        newArray[itemType].push(item);
    } 
        console.log(newArray);
    }

let arr = [5, "Limit", 12, "a", "3", 99, 2, [2, 4, 3, "33", "a", "text"], "strong", "broun"];
separateArray(arr);


//6
function calc (a, b, op) {
    let result;

    switch(op) {
    case 1:
        result = a - b;
        break;
    case 2:
        result = a * b;
        break;
    case 3:
        result = a / b;
        break;
    default:
        result = a + b;   
    } 
    console.log(result);

}
calc(3, 5, 2); //15
calc(2, 4, 6); //6
calc(8, 5, 1); //3
calc(20, 5, 3);//4



//7
function findUnique(arr) {
for (let i = 0; i < arr.length; i++){
    for (let j = i + 1; j < arr.length; j++) {
        if( arr[i] === arr[j]) {
            return false;
        }
    } 
}
return true;
}

let arr1 = [1, 2, 3, 4, 5, 6, 7];
let arr2 = [ 1, 2, 3, 3, 3, 4];

console.log(findUnique(arr1)); //true
console.log(findUnique(arr2)); //false
