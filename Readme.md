# Sorting Array Using For Loop

_**Table of Contents**_
1. Definition
2. Built-in function
    * Error associated with built in function
3. Using for loop
4. License
5. Author

## Definition

**For Loop** can run a block of code repeatedly or a   number of times returning a different value at each time.

Javascript has different kinds of loops namely:
* for - which executes or loops through a block of code  a number of times.
<!-- * for/in - loops through propeties of an object. -->
* for/of - loops through the values of an iterable object.

**An Array** is a single special variable that can store multiple variables.
Instead of declaring different variables for each of the values, an array can store them together.

## Built-In Function

> What if you are asked to sort an array bearing a couple of negative values (arrange them from the lowest value to the highest value)?

if we have an array of multiple numbers with negative values
```
//sort an array of numbers
Let _array = [-2,-7,-1,-5, -3, 1, 4, 6, 5]

let result = _array.sort()
```
### Error associated with built-in function

The above javascript method will return an array as follows:

```
result = [-1,-2,-3,-5,-7,1,4,5,6]
```
> Undoubtedly, -1 is greater than -2 or -7 so can not be the smallest value, the result should be;

```
let SortedArray = sortArray([1,2,3,-2,-5,-7])

```

## Using For Loop

```
 for (let i of _arr) {
    if (i < init) {
      newArray.unshift(i);
      init = i;
    } else {
      lastIndex = newArray[newArray.length - 1];
      //if the last index of the array is greater or equal to the current item in the loop
      if (lastIndex >= i) {
        newArray.pop();
        reverseArray = [...newArray].reverse();
        if (reverseArray[0] >= i) {
          newArray.pop();
          newArray.push(i);
          newArray.push(reverseArray[0]);
          newArray.push(lastIndex);
        } else {
          newArray.push(i);
          newArray.push(lastIndex);
        }
        //after removal
      } else {
        newArray.push(i);
      }
    }
  }
```

## License

MIT License

## Authors

(https://about.me/victoriroka)Victor Iroka and Gilbert James (https://www.linkedin.com/in/gilbert-james-ace/)
(Vicmie Inc.) 


