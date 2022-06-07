//method 1: toString()

//because of the automatic type interference arrayOne is of type string[]
// let arrayOne = ['admin', 'superuser', 'guest'];
//to return the entire array as comma seperated string 
//doesnt alter original array

// let resultArray = arrayOne.toString();
// console.log(arrayOne);

//method 2: join()
//join() is much like toString() but here we can specify the seperator as well

// console.log(arrayOne.join('/'));

//method 3: pop() & push()

//pop() - will remove last element from array and return the same element i.e the element that was popped out, also this method alters the original array

// console.log(arrayOne.pop());
// console.log(arrayOne);

//push() - will insert a new array at the end of array and will return the length of array after pushing in new element

// console.log(arrayOne.push('sudouser'));
// console.log(arrayOne);



///////shifting elements

//shifting is similar to pop push but here we work on first element rather than last element

//shift() - similar to pop() but removes element at first index and returns the element deleted and shifts array, alters the original array

// console.log(arrayOne.shift());
// console.log(arrayOne);

//unshift() - similar to push() but here we push an element at first index and shift other elements to higher order, returns new array length and alters original array

// console.log(arrayOne.unshift('sudouser'));
// console.log(arrayOne);




//delete() - we can delete array elements at certain index with : delete arrayOne[0] but deleting this way will leave undefined holes in array

// delete arrayOne[1];
// console.log(arrayOne.length);


//merging arrays with concat(), it merges the arrays and returns new array which has bveen merged, doesnt change original array, can take any number of arguments, can also take string as argument

// let arrayTwo = ['sudouser', 'normaluser'];
// let arrayThree: string[];

// arrayThree = arrayOne.concat(arrayTwo);
// console.log(arrayThree);


//splicing and slicing

/****splice() - used to add new items to array, 
 
1st arg: position where to add new elements
2nd arg: how many elements to be deleted
rest of the args are elements to add
alters the original array

using splice to remove elements: we can remove elements with splice without leaving undefined holes in it
when deleting we just specify first two arguments
***/

// console.log(arrayOne);
// arrayOne.splice(1, 2, 'sudouser', 'normaluser');
// console.log(arrayOne);


//slice() - simply slices out the part of array and returns in the new array, doesnt change original array
//takes two arguments ex (1, 3) -> starts slicing from 1 index to 3 but doesnt include 3, if end arg is omitted then starts from 1 and goes until the last index which is also included

// console.log(arrayOne.slice(1, 2));

let arrayOne = [1,1,1,2,2,3,3,3,3,4,8,8,99,99,100];
const duplicateValueArray: number[] = [];

arrayOne.forEach(
    (value, index) => {
        arrayOne.slice(index+1).forEach(
            (valueIn) => {
                if(value===valueIn){
                    if(!duplicateValueArray.includes(valueIn)){
                        duplicateValueArray.push(value);
                    }
                }
            }
        );
    }
);


console.log(duplicateValueArray.join('*'));



