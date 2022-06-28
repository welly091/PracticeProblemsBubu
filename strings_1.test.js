/*-----------------------------------
This part is for testing. DO NOT TOUCH.
-----------------------------------*/

const strings = require('./problems/strings_1');

describe('printString' ,() =>{
    test('Return the given string', () => {
    expect(strings.printString("Bill")).toStrictEqual("Bill");
    expect(strings.printString("Pig")).toStrictEqual("Pig");
  });
})

describe('helloName', () =>{
    test('Return greeting and the name', () => {
    expect(strings.helloName("Bob")).toStrictEqual("Hello Bob!");
    expect(strings.helloName("Alice")).toStrictEqual("Hello Alice!");
    expect(strings.helloName("Hello")).toStrictEqual("Hello Hello!")
  });
})

describe('stringToUpper', () =>{
    test('Return upper case of the given string', () => {
    expect(strings.stringToUpper("kiss")).toStrictEqual("KISS");
    expect(strings.stringToUpper("avocado")).toStrictEqual("AVOCADO");
  });
})

describe('makeCombine', () =>{
    test('Return the combination of two given strings', () =>{
    expect(strings.makeCombine("Hi", "Bye")).toStrictEqual("HiBye");
    expect(strings.makeCombine("Yo", "Alice")).toStrictEqual("YoAlice");
    expect(strings.makeCombine("What", "Up")).toStrictEqual("WhatUp");
  });
})

describe('lowerCombine', () =>{
    test('Return the lower case of the first string and the second string', () => {
    expect(strings.lowerCombine("KISS", "me")).toStrictEqual("kissme");
    expect(strings.lowerCombine("OHMYGOD", "really?")).toStrictEqual("ohmygodreally?");
    expect(strings.lowerCombine("", "")).toStrictEqual("");
  });
})

describe('noFirst', () =>{
    test('Return the given string without first character', () =>{
    expect(strings.noFirst("HelloWorld")).toStrictEqual("elloWorld");
    expect(strings.noFirst("Nothing")).toStrictEqual("othing");
    expect(strings.noFirst("")).toStrictEqual("");
  })
})

describe('makeCombineReversed', () =>{
    test('Return the reversed comination of three strings', () =>{
    expect(strings.makeCombineReversed("Hi", "Bill", "Bye")).toStrictEqual("ByeBillHi");
    expect(strings.makeCombineReversed("Yo", "Alice", "Sup")).toStrictEqual("SupAliceYo");
    expect(strings.makeCombineReversed("", "", "")).toStrictEqual("");
  })
})

describe('makeOutWord', () =>{
    test('First string should wrap the second string', () =>{
      expect(strings.makeOutWord("<<>>", "Yay")).toStrictEqual("<<Yay>>");
      expect(strings.makeOutWord("<<>>", "WooHoo") ).toStrictEqual("<<WooHoo>>");
      expect(strings.makeOutWord("[[]]", "word")).toStrictEqual("[[word]]");
      expect(strings.makeOutWord("()", "thing")).toStrictEqual("(thing)");
      expect(strings.makeOutWord("", "HI")).toStrictEqual("HI");
      expect(strings.makeOutWord("[[<<>>]]", "Yay")).toStrictEqual("[[<<Yay>>]]");
    })
})

describe('extraEnd', () => { 
  test('Make 3 copies of last 2 chars', () =>{
    expect(strings.extraEnd("Hello")).toStrictEqual("lololo");
    expect(strings.extraEnd("ab")).toStrictEqual("ababab");
    expect(strings.extraEnd("Hi")).toStrictEqual("HiHiHi");
    expect(strings.extraEnd("")).toStrictEqual("");
  })
})

describe('firstTwoCombine', () =>{
  test('Return combination of first two chars in each string', () =>{
    expect(strings.firstTwoCombine("Hello", "Sup") ).toStrictEqual("HeSu");
    expect(strings.firstTwoCombine("Cry", "Angry")).toStrictEqual("CrAn");
    expect(strings.firstTwoCombine("CC","AA")).toStrictEqual("CCAA");
  })
})

describe('getThird', () =>{
  test('Return the third char. Return "Too short" if no third char', () =>{
    expect(strings.getThird("Hello")).toStrictEqual("l");
    expect(strings.getThird("abcdfeg")).toStrictEqual("c");
    expect(strings.getThird("Hi")).toStrictEqual("Too short");
    expect(strings.getThird("H")).toStrictEqual("Too short");
    expect(strings.getThird("")).toStrictEqual("Too short");
  })
})

describe('getOddChar', () =>{
  test('Return odd chars', () =>{
    expect(strings.getOddChar("abcdefg")).toStrictEqual("aceg");
    expect(strings.getOddChar("Brenda")).toStrictEqual("Bed");
    expect(strings.getOddChar("H")).toStrictEqual("H");
    expect(strings.getOddChar("")).toStrictEqual("");
  })
})

describe('makeTags', () =>{
  test('Wrap given string with given HTML tag', () =>{
    expect(strings.makeTags("i", "Yay")).toStrictEqual("<i>Yay</i>");
    expect(strings.makeTags("i", "Hello")).toStrictEqual("<i>Hello</i>");
    expect(strings.makeTags("cite", "Yay")).toStrictEqual("<cite>Yay</cite>");
  })
})

describe('nonStart', () =>{
  test('Combine two strings with no first char of each string', () =>{
    expect(strings.nonStart("Hello", "There")).toStrictEqual("ellohere");
    expect(strings.nonStart("java", "code") ).toStrictEqual("avaode");
    expect(strings.nonStart("shotl", "java")).toStrictEqual("hotlava");
    expect(strings.nonStart("A", "B")).toStrictEqual("");
  })
})

describe('shouldPrint', () =>{
  test('Return given string if given boolean is true', () =>{
    expect(strings.shouldPrint("Hello", true)).toStrictEqual("Hello");
    expect(strings.shouldPrint("Hello", false)).toStrictEqual("");
    expect(strings.shouldPrint("May", false)).toStrictEqual("");
    expect(strings.shouldPrint("", true)).toStrictEqual("");
  })
})

describe('middleTwo', () =>{
  test('Return middle two chars', () =>{
    expect(strings.middleTwo("string")).toStrictEqual("ri");
    expect(strings.middleTwo("code")).toStrictEqual("od");
    expect(strings.middleTwo("Practice")).toStrictEqual("ct");
    expect(strings.middleTwo("CD")).toStrictEqual("CD");
    expect(strings.middleTwo("CCD")).toStrictEqual("");
    expect(strings.middleTwo("CCD")).toStrictEqual("");
  })
})

describe('nTwice', () =>{
  test('Return first and last n chars.', () =>{
    expect(strings.nTwice("Trouble", 2)).toStrictEqual("Trle");
    expect(strings.nTwice("Chocolate", 3)).toStrictEqual("Choate");
    expect(strings.nTwice("Chocolate", 1)).toStrictEqual("Ce");
    expect(strings.nTwice("ABC",2)).toStrictEqual("ABBC")
    expect(strings.nTwice("Whale", 5)).toStrictEqual("WhaleWhale")
  })
})

describe('middleThree', () =>{
  test('Return middle three chars.', () =>{
    expect(strings.middleThree("Candy")).toStrictEqual("and");
    expect(strings.middleThree("and")).toStrictEqual("and");
    expect(strings.middleThree("solving")).toStrictEqual("lvi");
    expect(strings.middleThree("Hi I am Joe")).toStrictEqual(" am");
  })
})

describe('atFirst', () =>{
  test('Return first two chars. Add "@" for missing chars if less than two chars', () =>{
    expect(strings.atFirst("hello")).toStrictEqual("he");
    expect(strings.atFirst("hi")).toStrictEqual("hi");
    expect(strings.atFirst("h")).toStrictEqual("h@");
    expect(strings.atFirst("")).toStrictEqual("@@");
  })
})

describe('seeBlue', () =>{
  test('Return true if given string has "blue"', () =>{
    expect(strings.seeBlue("bluecolor")).toStrictEqual(true);
    expect(strings.seeBlue("nothinggreen")).toStrictEqual(false);
    expect(strings.seeBlue("purpleredblue")).toStrictEqual(true);
    expect(strings.seeBlue("blule")).toStrictEqual(false);
  })
})

/*-----------------------------------
This part is for testing. DO NOT TOUCH.
-----------------------------------*/