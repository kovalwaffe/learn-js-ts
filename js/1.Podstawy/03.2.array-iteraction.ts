// for in loop
//
// iterating over an array
let arr: number[] = [1, 2, 3, 4, 5];
for (let index in arr) {
  console.log(arr[index]);
}
// Output: 1,2,3,4,5

// iterating over object keys
let obj2: any = { id: 1, msg: 'hello' };
for (let key in obj2) {
  console.log(obj2[key]);
}
// Output: 1, hello

// for of loop
// Using this loop you can get the value at a particular index. This loop only works on arrays.

for (let val of arr) {
  console.log(val)
}
// Output: 1,2,3,4,5
