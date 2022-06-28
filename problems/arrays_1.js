/*-----------------------------------*/
//Given an array and return the sum those elements in the array.
/*
    e.g.
        arraySum([1,2,3,4,5]) -> 15
        arraySum([1,-2,0,2,-1]) -> 0
*/
function arraySum(){

}

/*-----------------------------------*/
//Given an array and return a new array that contains items at odd positions in original array.
//Hint: use .push()
/*
    e.g.
        oddPos([1,2,3,4,5]) -> [1,3,5]
        oddPos([2,4,6,8,10]) -> [2,6,10]
*/
function oddPos(){

}

/*-----------------------------------*/
//Given an array and return a new array that contains items at even positions plus one in original array.
/*
    e.g.
        oddPosPlusOne([1,2,3,4,5]) ->[2,4,6]
        oddPosPlusOne([2,4,6,8,10]) ->[3,7,11]
*/
function oddPosPlusOne(){

}

/*-----------------------------------*/
//Given an array and return the array length
/*
    e.g.
        lengthOfArray([12, 2, 16, 20, 99]) -> 5
*/
function lengthOfArray(){

}

/*-----------------------------------*/
//Given an array and check each item is either odd or even. Return a new array that stores the results.
/*
    e.g.
        oddOrEven([1,2,3,4,5]) -> ['odd', 'even', 'odd', 'even', 'odd']
        oddOrEven([2,4,6,7,8]) -> ['even', 'even', 'even', 'odd', 'even']
*/
function oddOrEven(){

}

/*-----------------------------------*/
//Given two array of numbers and check if they are identical.
/*
    e.g.
        isIdentical([1,2,3], [1,2,3]) -> true
        isIdentical([1,2,3], [1,2,3,4]) -> false
*/
function isIdentical(){

}

/*-----------------------------------*/
//Given an array and count how many '2' are there.
/*
    e.g.
        countTwo([1,2,3,2,2,6,7,8,2]) -> 4
        countTwo([2,2,2,2,2,2,2,3]) -> 7
*/

function countTwo(){

}

/*-----------------------------------*/
//Given an array of ints length 3, return a new array with the elements in reverse order, so [1,2,3] becomes [3,2,1]
/*
    e.g.
        reverse3([1,5,8]) -> [8,5,1]
*/
function reverse3(){

}

/*-----------------------------------*/
//Given an array that contains numbers and strings. Return true if all items are either numbers or strings.
//Hint: use typeof
/*
    e.g.
        checkAllTheSameType([1, 'w', 2, 3, 'oppo']) -> false
        checkAllTheSameType([1, 87, 900]) -> true
        checkAllTheSameType(['a', 'b', 'c']) -> true
        checkAllTheSameType(['1', 2, 3]) -> false
*/
function checkAllTheSameType(){

}

/*-----------------------------------*/
//Given an array and a number. Check how many items are as same as the given number.
/*
    e.g.
        countGivenNumber([9, 6, 88, 1, 35, 20, 9], 9) -> 2
        countGivennumber([1,2,3,2,1,5,1,1,4,1,2,1,3], 1) -> 6
*/
function countGivenNumber(){

}

/*-----------------------------------*/
//Given three arrays and compare their length. Return the longest array.
/*
    e.g. 
        findLongestArray([1,2,3,2,1], [4,5,6], ['m', 'p']) -> [1,2,3,2,1]
        findLongestArray(['medical', 'pharm'], ['bee', 'spider', 'ant', 'mouse', 'scorpion'], ['dog', 3, 'music']) -> ['bee', 'spider', 'ant', 'mouse', 'scorpion']
*/
function findLongestArray(){

}

/*-----------------------------------*/
//Given an array and return a new array that each item is twice larger than the original item.
/*
    e.g.
        twiceArray([2,4,6]) ->[4,8,12]
*/
function twiceArray(){

}

/*-----------------------------------*/
//Given an array and return a new array that does not have first and last items. Assuming the array has at least three items.
/*
    e.g.
        removeLastAndFirst([1,2,3,4,5]) -> [2,3,4]
*/
function removeLastAndFirst(){

}

/*-----------------------------------*/
//We'll say that a 1 immediately followed by a 3 in an array is an "unlucky" 1. 
//Return true if the given array contains an unlucky 1 in the first 2 or last 2 positions in the array.
/*
    e.g.
        unlucky1([1, 3, 4, 5]) → true
        unlucky1([2, 1, 3, 4, 5]) → true
        unlucky1([1, 1, 1]) → false
*/
function unlucky1(){

}

/*-----------------------------------*/
//Given two arrays and concatenate them.
//Hint: use arr1.concat(arr2) method
/*
    twoIntoOne([1,2,3], [4,5,6]) -> [1,2,3,4,5,6]
*/
function twoIntoOne(){

}

/*-----------------------------------*/
//Given an array of string and add '<div></div>' to each item. Return a new array of the result.
/*
    addDiv(['Hello', 'World']) -> ['<div>Hello</div>', '<div>World</div>']
*/ 
function addDiv(){

}

/*-----------------------------------*/
//Given two same length arrays containing numbers and return a new array with sum of same position items in those two original arrays.
/*
    sumEachItem([1,2,3], [11, 8, 77]) -> [12,10,80]
*/
function sumEachItem(){

}

/*-----------------------------------*/
//Given an array of strings and return the longest length of items.
/*
    longestLengthItem(['Willy', 'Pooh', 'Ben', 'Washington', 'Joe']) -> 10
*/
function longestLengthItem(){

}

/*-----------------------------------*/
//Given two arrays of numbers and compare numbers in same position. Store the larger item into a new array.
/*
    e.g.
        largerItemArray([2,3,0], [1,2,3]) -> [2,3,3]
        largerItemArray([14,6,59,3,80], [4,7,40,99,11,76,100]) ->[14,7,59,99,80,76,100]
        largerItemArray([],[1,2,3]) -> [1,2,3]
*/
function largerItemArray(){
    
}

/*-----------------------------------*/
//Return a version of the given array where each zero value in the array is replaced by the largest odd value to the right of the zero in the array. 
//If there is no odd value to the right of the zero, leave the zero as a zero.
/*
    e.g.
        zeroMax([0, 5, 0, 3]) → [5, 5, 3, 3]
        zeroMax([0, 4, 0, 3]) → [3, 4, 3, 3]
        zeroMax([0, 1, 0]) → [1, 1, 0]
*/
function zeroMax(){

}


/*-----------------------------------*/
//Given an array of numbers and return a new sorted array
/*
    sortArray([1,5,4,7,2]) -> [1,2,4,5,7]
*/
function sortArray(){

}

/*-----------------------------------
This part below is for testing. DO NOT TOUCH.
-----------------------------------*/

module.exports = {
    arraySum,
    oddPos,
    oddPosPlusOne,
    lengthOfArray,
    oddOrEven,
    isIdentical,
    countTwo,
    reverse3,
    checkAllTheSameType,
    countGivenNumber,
    findLongestArray,
    twiceArray,
    removeLastAndFirst,
    unlucky1,
    twoIntoOne,
    addDiv,
    sumEachItem,
    longestLengthItem,
    largerItemArray,
    zeroMax,
    sortArray
}