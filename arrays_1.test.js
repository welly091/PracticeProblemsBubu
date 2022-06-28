/*-----------------------------------
This part is for testing. DO NOT TOUCH.
-----------------------------------*/

const arrays1 = require('./problems/arrays_1');

describe('arraySum' ,() =>{
    test('Return the sum of each all items', () => {
    expect(arrays1.arraySum([1,2,3,4,5])).toStrictEqual(15);
    expect(arrays1.arraySum([1,-2,0,2,-1])).toStrictEqual(0);
  });
})

describe('oddPos', () =>{
    test('Return odd positions', () => {
    expect(arrays1.oddPos([1,2,3,4,5])).toStrictEqual([1,3,5]);
    expect(arrays1.oddPos([2,4,6,8,10])).toStrictEqual([2,6,10]);
  });
})

describe('oddPosPlusOne', () =>{
    test('Return odd positions items and plus one', () => {
    expect(arrays1.oddPosPlusOne([1,2,3,4,5])).toStrictEqual([2,4,6]);
    expect(arrays1.oddPosPlusOne([2,4,6,8,10])).toStrictEqual([3,7,11]);
  });
})

describe('lengthOfArray', () =>{
    test('Array length', () =>{
    expect(arrays1.lengthOfArray([12, 2, 16, 20, 99])).toStrictEqual(5);
    expect(arrays1.lengthOfArray([])).toStrictEqual(0);
  });
})

describe('oddOrEven', () =>{
    test('Return odd or even for each item', () => {
    expect(arrays1.oddOrEven([1,2,3,4,5])).toStrictEqual(['odd', 'even', 'odd', 'even', 'odd']);
    expect(arrays1.oddOrEven([2,4,6,7,8])).toStrictEqual(['even', 'even', 'even', 'odd', 'even']);
    expect(arrays1.oddOrEven([0,0,1])).toStrictEqual(['even', 'even', 'odd']);
  });
})

describe('isIdentical', () =>{
    test('Check if two arrays are the same', () =>{
    expect(arrays1.isIdentical([1,2,3], [1,2,3])).toStrictEqual(true);
    expect(arrays1.isIdentical([1,2,3], [1,2,3,4])).toStrictEqual(false);
    expect(arrays1.isIdentical([],[])).toStrictEqual(true);
  })
})

describe('countTwo', () =>{
    test('Count how many 2 are there', () =>{
    expect(arrays1.countTwo([1,2,3,2,2,6,7,8,2])).toStrictEqual(4);
    expect(arrays1.countTwo([2,2,2,2,2,2,2,3])).toStrictEqual(7);
    expect(arrays1.countTwo([])).toStrictEqual(0);
  })
})

describe('reverse3', () =>{
    test('Reverse an array of three items', () =>{
      expect(arrays1.reverse3([1,5,8])).toStrictEqual([8,5,1]);
      expect(arrays1.reverse3([10,22,100])).toStrictEqual([100,22,10]);
    })
})

describe('checkAllTheSameType', () => { 
  test('Check all items are the same type', () =>{
    expect(arrays1.checkAllTheSameType([1, 'w', 2, 3, 'oppo'])).toStrictEqual(false);
    expect(arrays1.checkAllTheSameType([1, 87, 900])).toStrictEqual(true);
    expect(arrays1.checkAllTheSameType(['a', 'b', 'c'])).toStrictEqual(true);
    expect(arrays1.checkAllTheSameType(['1', 2, 3])).toStrictEqual(false);
  })
})

describe('countGivenNumber', () =>{
  test('Count items matches given n', () =>{
    expect(arrays1.countGivenNumber([9, 6, 88, 1, 35, 20, 9], 9)).toStrictEqual(2);
    expect(arrays1.countGivenNumber([1,2,3,2,1,5,1,1,4,1,2,1,3], 1)).toStrictEqual(6);
    expect(arrays1.countGivenNumber([], 9)).toStrictEqual(0);
  })
})

describe('findLongestArray', () =>{
  test('Find longest array from three given arrays', () =>{
    expect(arrays1.findLongestArray([1,2,3,2,1], [4,5,6], ['m', 'p'])).toStrictEqual([1,2,3,2,1]);
    expect(arrays1.findLongestArray(['medical', 'pharm'], ['bee', 'spider', 'ant', 'mouse', 'scorpion'], ['dog', 3, 'music'])).toStrictEqual(['bee', 'spider', 'ant', 'mouse', 'scorpion']);
  })
})

describe('twiceArray', () =>{
  test('Return an array that each item is twice larger than original array', () =>{
    expect(arrays1.twiceArray([2,4,6])).toStrictEqual([4,8,12]);
    expect(arrays1.twiceArray([])).toStrictEqual([]);
  })
})

describe('removeLastAndFirst', () =>{
  test('Remove last and first item', () =>{
    expect(arrays1.removeLastAndFirst([1,2,3,4,5])).toStrictEqual([2,3,4]);
    expect(arrays1.removeLastAndFirst(['a','b','c','d'])).toStrictEqual('b','c');
    expect(arrays1.removeLastAndFirst(['Joe','Biden'])).toStrictEqual([]);
  })
})

describe('unlucky1', () =>{
  test('Check if it is an unlucky1 array', () =>{
    expect(arrays1.unlucky1([1, 3, 4, 5])).toStrictEqual(true);
    expect(arrays1.unlucky1([2, 1, 3, 4, 5]) ).toStrictEqual(true);
    expect(arrays1.unlucky1([1, 1, 1])).toStrictEqual(false);
    expect(arrays1.unlucky1([])).toStrictEqual(false);
  })
})

describe('twoIntoOne', () =>{
  test('Combine two arrays', () =>{
    expect(arrays1.twoIntoOne([1,2,3], [4,5,6])).toStrictEqual([1,2,3,4,5,6]);
    expect(arrays1.twoIntoOne([],[])).toStrictEqual([]);
    expect(arrays1.twoIntoOne(['a','b'], ['Olive', 'Frame'])).toStrictEqual(['a', 'b', 'Olive', 'Frame']);
  })
})

describe('addDiv', () =>{
  test('Add <div></div> to each item', () =>{
    expect(arrays1.addDiv(['Hello', 'World'])).toStrictEqual(['<div>Hello</div>', '<div>World</div>']);
    expect(arrays1.addDiv([''])).toStrictEqual(['<div></div>']);
  })
})

describe('sumEachItem', () =>{
  test('Sum two arrays item that contains same position', () =>{
    expect(arrays1.sumEachItem([1,2,3], [11, 8, 77])).toStrictEqual([12,10,80]);
    expect(arrays1.sumEachItem([],[])).toStrictEqual([]);
  })
})

describe('longestLengthItem', () =>{
  test('Find the longest length of items', () =>{
    expect(arrays1.longestLengthItem(['Willy', 'Pooh', 'Ben', 'Washington', 'Joe'])).toStrictEqual(10);
    expect(arrays1.longestLengthItem([])).toStrictEqual(0);
    expect(arrays1.longestLengthItem(['J', ''])).toStrictEqual(1);
  })
})

describe('largerItemArray', () =>{
    test('Compare items with same position and store larger item into an new array', () =>{
      expect(arrays1.largerItemArray([2,3,0], [1,2,3])).toStrictEqual([2,3,3]);
      expect(arrays1.largerItemArray([14,6,59,3,80], [4,7,40,99,11,76,100])).toStrictEqual([14,7,59,99,80,76,100]);
      expect(arrays1.largerItemArray([],[1,2,3])).toStrictEqual([1,2,3]);
    })
  })


describe('zeroMax', () =>{
  test('Replace 0 with largest odd number at right', () =>{
    expect(arrays1.zeroMax([0, 5, 0, 3])).toStrictEqual([5, 5, 3, 3]);
    expect(arrays1.zeroMax([0, 4, 0, 3])).toStrictEqual([3, 4, 3, 3]);
    expect(arrays1.zeroMax([0, 1, 0])).toStrictEqual([1, 1, 0]);
  })
})

describe('sortArray', () =>{
  test('Sort the array', () =>{
    expect(arrays1.sortArray([1,5,4,7,2])).toStrictEqual([1,2,4,5,7]);
    expect(arrays1.sortArray([8,-1,3])).toStrictEqual([-1,3,8]);
  })
})

/*-----------------------------------
This part is for testing. DO NOT TOUCH.
-----------------------------------*/