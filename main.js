//#region sorting the items of an array.
// let numbers = [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ];
// numbers.sort(function(a, b){return a - b});
// console.log(numbers);
//#endregion

//#region to compute the union of two arrays.
// var array1 = [1, 2, 3, 5, 6, 7];
// var array2 = [3,5,10];
// var union = [...new Set([...array1, ...array2])];
// console.log(union);
//#endregion

//#region removing 'null', '0', '""', 'false', 'undefined' and 'NaN' values from an array.
// const array1 = [NaN, 0, 15, false, -22, '',undefined, 47, null]
// for (var iterator of array1) {
//     if(iterator > 0){
//         console.log(iterator);
//     }
//     if(iterator < 0){
//         console.log(iterator);
//     }
// }
//#endregion

//#region sorting array by its title value.
// let library = [
//     { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254}, 
//     { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264}, 
//     { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245} 
//     ];
//     const titles = library.map(obj => obj.title);
//     titles.sort()
//     console.log(titles);
//#endregion

//#region  checking if an array is a factor chain or not.
// function isFactor(arr) {  //i checked out these cases: is there a copy of any number? and "0" case
// for (let index = 0; index < arr.length - 1; index++) {
//     if (arr[index] == arr[index+1]){
//         console.log("THERE IS A DUPLICATION,YOU NAUGHTY");
//         return false; 
//     }
// }
// for (let index = 0; index < arr.length - 1; index++){
//     if (arr[index+1] % arr[index] != 0 || arr[arr.length-1] == 0) {   
//         return false;
//     }
// }
//  return true;
// }
//   console.log(isFactor([2,4,8,16,128]));
//#endregion