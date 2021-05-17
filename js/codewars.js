/*Very simple, given a number, find its opposite.

Examples:

1: -1
14: -14
-34: 34
*/

function opposite(number) {
  return -number;
}

console.log((opposite(1), -1));

console.log ('-------------------');

const areaOrPerimeter = (l , w) => l === w ? l * w:  (l + w) * 2;

console.log(areaOrPerimeter(10, 2));
console.log(areaOrPerimeter(5, 5));
console.log(areaOrPerimeter(7, 4 ));
console.log(areaOrPerimeter(3, 3));

console.log ('-------------------');

function differenceInAges(ages){
    let young = Infinity;
    let old = 0;

    for ( let i=0; i < ages.length; i++) {
      if (ages[i] < young) {
        young = ages[i];
      }
      if (ages[i] > old){
        old = ages[i];
      }
    }
    return [young, old, old-young]
  }


console.log(differenceInAges([82, 15, 6, 38, 35]), [6, 82, 76]);
console.log(differenceInAges([57, 99, 14, 32]), [14, 99, 85]);

console.log('----------------------- Reversed String-------------------------')

function solution(str){
  
}

assert.strictEqual(solution('world'), 'dlrow');
assert.strictEqual(solution('hello'), 'olleh');
assert.strictEqual(solution(''), '');
assert.strictEqual(solution('h'), 'h');