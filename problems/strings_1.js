/*-----------------------------------*/
//Given a string, return the given string.
/*
  e.g.
    printString("Bill") -> "Bill"
    printString("Pig") -> "Pig"
*/
function printString(){
  
}

/*-----------------------------------*/
//Given a string name, e.g. "Bob", return a greeting of the form "Hello Bob!".
/*
  e.g. 
    helloName("Bob") -> "Hello Bob!"
    helloName("Alice") -> "Hello Alice!"
*/
function helloName() {

}

/*-----------------------------------*/
//Given a string, return upper case of that string.
/*
  e.g.
    stringToUpper("kiss") -> "KISS"
    stringToUpper("avocado") -> "AVOCADO"
*/
function stringToUpper(){

}

/*-----------------------------------*/
//Given two strings, a and b, return the result of putting them together in the order abba, e.g. "Hi" and "Bye" returns "HiByeByeHi".
/* 
  e.g.
    makeCombine("Hi", "Bye") → "HiBye"
    makeCombine("Yo", "Alice") → "YoAlice"
    makeCombine("What", "Up") → "WhatUp"
*/
function makeCombine() {

}

/*-----------------------------------*/
//Given two strings, a and b, lower case the first string and return the combination of the two strings
/*
  e.g.
    lowerCombine("KISS", "me") -> "kissme"
    lowerCombine("OHMYGOD", "really?") -> "ohmygodreally?"
*/
function lowerCombine(){

}

/*-----------------------------------*/
//Given a string, return the string without the first character.
//Hint: use str.substr(i,j) to get substrings in a string
/*
  noFirst("HelloWorld") -> "elloWorld"
  noFirst("Nothing") -> "othing"
*/
function noFirst(){

}

/*-----------------------------------*/
//Given three strings, a, b, and c, return reversed combination of these three strings.
/*
  e.g.
    makeCombineReversed("Hi", "Bill", "Bye") -> "ByeBillHi"
    makeCombineReversed("Yo", "Alice", "Sup") -> "SupAliceYo"
*/
function makeCombineReversed(){

}

/*-----------------------------------*/
//Given an "out" string length 4, such as "<<>>", and a word, return a new string where the word is in the middle of the out string, e.g. "<<word>>".
/*
  makeOutWord("<<>>", "Yay") → "<<Yay>>"
  makeOutWord("<<>>", "WooHoo") → "<<WooHoo>>"
  makeOutWord("[[]]", "word") → "[[word]]"
*/
function makeOutWord() {

}

/*-----------------------------------*/
//Given a string, return a new string made of 3 copies of the last 2 chars of the original string. 
//The string length will be at least 2.
//Hint: use for-loop
/*
  e.g.
    extraEnd("Hello") → "lololo"
    extraEnd("ab") → "ababab"
    extraEnd("Hi") → "HiHiHi"
*/
function extraEnd(){

}

/*-----------------------------------*/
//Given two strings, return the combination of first two characters of each string. Assume each string length has at least 2.
/*
  e.g.
    firstTwoCombine("Hello", "Sup") -> "HeSu"
    firstTwoCombine("Cry", "Angry") -> "CrAn"
*/
function firstTwoCombine(){

}

/*-----------------------------------*/
//Given a string, return the third character of a string. 
//If the string has less than 3 characters, return "Too short"
//Hint: use str[i] to get specific charactor and if/else
/*
  e.g. 
    getThird("Hello") -> "l"
    getThird("abcdfeg") -> "c"
    getThird("Hi") -> "Too short"
*/ 
function getThird(){

}

/*-----------------------------------*/
//Given a string, return the odd characters of a string. e.g. "abcdefg" will return "aceg"
//Hint: use str[i] and for loop
/*
  e.g.
  getOddChar("abcdefg") -> "aceg"
  getOddChar("Brenda") -> "Bed" 
  getOddChar("H") -> "H"
*/
function getOddChar(){

}

/*-----------------------------------*/
//The web is built with HTML strings like "<i>Yay</i>" which draws Yay as italic text.
//In this example, the "i" tag makes <i> and </i> which surround the word "Yay".
//Given tag and word strings, create the HTML string with tags around the word, e.g. "<i>Yay</i>".
/*
  e.g.
    makeTags("i", "Yay") → "<i>Yay</i>"
    makeTags("i", "Hello") → "<i>Hello</i>"
    makeTags("cite", "Yay") → "<cite>Yay</cite>"
*/
function makeTags() {

}

/*-----------------------------------*/
//Given 2 strings, return their concatenation, except omit the first char of each. The strings will be at least length 1.
//Hint: use str.substr(i,j) to get substrings in a string
/*
  e.g.
    nonStart("Hello", "There") → "ellohere"
    nonStart("java", "code") → "avaode"
    nonStart("shotl", "java") → "hotlava"
*/
function nonStart(){

}

/*-----------------------------------*/
//Given a string and a boolean, return the string if the boolean is true. Otherwise, return nothing.
//Hint: use if/else
/*
  e.g.
    shouldPrint("Hello", true) -> "Hello"
    shouldPrint("Hello", false) -> ""
    shouldPrint("May", false) -> ""
*/

function shouldPrint(){

}

/*-----------------------------------*/
//Given a string, if the string has even length, return a string made of the middle two chars, so the string "string" yields "ri". 
//If the string has odd length, return nothing.
//Hint: use str.substr(i,j) and a math operator
/*
  e.g.
    middleTwo("string") → "ri"
    middleTwo("code") → "od"
    middleTwo("Practice") → "ct"
*/
function middleTwo(){
}

/*-----------------------------------*/
//Given a string and an int n, return a string made of the first and last n chars from the string. The string length will be at least n.
/*
  e.g.
    nTwice("Trouble", 2) → "Trle"
    nTwice("Chocolate", 3) → "Choate"
    nTwice("Chocolate", 1) → "Ce"
*/
function nTwice(){

}

/*-----------------------------------*/
//Given a string of odd length, return the string length 3 from its middle, so "Candy" yields "and". The string length will be at least 3.
/*
  e.g.
    middleThree("Candy") → "and"
    middleThree("and") → "and"
    middleThree("solving") → "lvi"
*/
function middleThree(){

}

/*-----------------------------------*/
//Given a string, return a string length 2 made of its first 2 chars. If the string length is less than 2, use '@' for the missing chars.
/*
  e.g.
    atFirst("hello") → "he"
    atFirst("hi") → "hi"
    atFirst("h") → "h@"
*/
function atFirst(){

}

/*-----------------------------------*/
//Given a string, if the string contains "blue", return true. Otherwise, return false;
/*
  seeBlue("bluecolor") -> return true
  seeBlue("nothinggreen") -> return false
  seeBlue("purpleredblue") -> return true
*/
function seeBlue(){

}

/*-----------------------------------
This part below is for testing. DO NOT TOUCH.
-----------------------------------*/

module.exports = {
  printString,
  helloName,
  stringToUpper,
  makeCombine,
  lowerCombine,
  noFirst,
  makeCombineReversed,
  makeOutWord,
  extraEnd,
  firstTwoCombine,
  getThird,
  getOddChar,
  makeTags,
  nonStart,
  shouldPrint,
  middleTwo,
  nTwice,
  middleThree,
  atFirst,
  seeBlue,
};
