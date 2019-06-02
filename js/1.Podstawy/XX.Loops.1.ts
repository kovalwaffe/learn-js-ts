// 1. For in loop
// Iterate over array, object key manually
{
  //iterating over an array
  let arr = [1, 2, 3, 4, 5];
  for (let index in arr) {
    console.log(arr[index]);
  }
  // Output: 1,2,3,4,5

  //iterating over object keys
  let obj = { id: 1, msg: 'hello' };
  for (let key in obj) {
    console.log(obj[key]);
  }
  // Output: 1, hello
}

// 2. For of look
// Uzyskanie wartości o konkretnym indeksie
{
  let arr = [1, 2, 3, 4, 5];
  
  for (let val of arr) {
    console.log(val)
  }
  // Output: 1,2,3,4,5
}