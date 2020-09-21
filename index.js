//an array with negative values

const SortArray = (_arr = []) => {
    /**
     * @description sorting an array including negative values using the for loop method.
     * @function SortArray when called logs the values of the new array in the console using node index.js.
     */
    //initial number
    let init = 0;
    
    //empty array
    let newArray = [];
    let reverseArray = [];
    let lastIndex = 0;

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
  return newArray;
};

let u = SortArray([1,2,3,4,-1,-5,-7]);