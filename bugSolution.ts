function add(a: number, b: number): number {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Both arguments must be numbers');
  }
  return a + b;
}

let result = add(1, 2); // This works correctly.

try {
  let result2 = add("hello", 2); // This will now throw an error
} catch (e) {
  console.error(e);
}

//Alternatively use a more stricter type guard
function isNumber(value: any): value is number {
    return typeof value === 'number'
}

function addStrict(a: any, b: any): number {
    if(!isNumber(a) || !isNumber(b)){
        throw new Error("Both arguments must be numbers")
    }
    return a + b
}

let result3 = addStrict(1, 2) // this works correctly

try {
    let result4 = addStrict("hello", 2) // this throws an error
} catch (e) {
    console.error(e)
}