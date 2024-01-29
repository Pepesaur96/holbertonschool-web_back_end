# Using map, filter, and reduce on Arrays:

## Map:

map applies a function to each element of an array and returns a new array with the results.

    const arr = [1, 2, 3, 4, 5];

    const doubled = arr.map(num => num * 2);
    // doubled: [2, 4, 6, 8, 10]

## Filter:

filter creates a new array with all elements that pass the test implemented by the provided function.

    const evenNumbers = arr.filter(num => num % 2 === 0);
    // evenNumbers: [2, 4]

## Reduce:

reduce applies a function against an accumulator and each element in the array to reduce it to a single value.

    const sum = arr.reduce((acc, curr) => acc + curr, 0);
    // sum: 15

# Using Typed Arrays:

Typed arrays are arrays of simple data types, like Int8Array, Uint8Array, etc., which provide a way to handle binary data.

    const typedArray = new Int8Array([1, 2, 3, 4, 5]);

    const doubledTyped = typedArray.map(num => num * 2);
    // doubledTyped: Int8Array [2, 4, 6, 8, 10]

# Using Set, Map, and WeakMap:

## Set:

Set objects allow you to store unique values of any type, whether primitive values or object references.

    const set = new Set();

    set.add(1);
    set.add(2);
    set.add(3);
    set.add(2); // won't be added as it's a duplicate

    console.log(set); // Set {1, 2, 3}

## Map:

Map objects hold key-value pairs and remember the original insertion order of the keys.

    const map = new Map();

    map.set('a', 1);
    map.set('b', 2);
    map.set('c', 3);

    console.log(map.get('b')); // 2

## WeakMap:

WeakMap is a collection of key/value pairs where the keys are weakly referenced. This means that if there are no references to the keys elsewhere, they can be garbage collected.

    const weakMap = new WeakMap();

    const key = {};
    weakMap.set(key, 'value');

    console.log(weakMap.get(key)); // 'value'

These are powerful data structures in JavaScript that can be used for various purposes, ranging from efficient data storage to managing relationships between objects.
