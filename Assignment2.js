// Q1-Implement Binary Search
// Ans 1-
function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;
  
    while (left <= right) {
      let mid = Math.floor((left + right) / 2);
  
      if (arr[mid] === target) {
        return mid;
      } else if (arr[mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  
    return -1;
  }
  // FOR EXAMPLE-
  let arr = [1, 2, 3, 4, 5, 6, 7];
let target = 4;
let result = binarySearch(arr, target);

console.log(result); 
// Q2-Implement Merge Sort
// Ans 2-
function mergeSort(arr1) {
  if (arr1.length <= 1) {
    return arr1;
  }

  let middle = Math.floor(arr1.length / 2);
  let left = arr1.slice(0, middle);
  let right = arr1.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }

  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}
// FOR EXAMPLE-
let arr1 = [5, 2, 4, 7, 1, 3, 2, 6];
let sortedArr = mergeSort(arr1);

console.log(sortedArr);
// Q3-Implement Quick Sort
// Ans 3- 
function quickSort(arr2, left = 0, right = arr2.length - 1) {
    if (left < right) {
      let pivotIndex = partition(arr2, left, right);
      quickSort(arr2, left, pivotIndex - 1);
      quickSort(arr2, pivotIndex + 1, right);
    }
  
    return arr2;
  }
  
  function partition(arr2, left, right) {
    let pivotIndex = Math.floor((left + right) / 2);
    let pivotValue = arr2[pivotIndex];
    let i = left;
    let j = right;
  
    while (i <= j) {
      while (arr2[i] < pivotValue) {
        i++;
      }
  
      while (arr2[j] > pivotValue) {
        j--;
      }
  
      if (i <= j) {
        swap(arr2, i, j);
        i++;
        j--;
      }
    }
  
    return i;
  }
  
  function swap(arr2, i, j) {
    let temp = arr2[i];
    arr2[i] = arr2[j];
    arr2[j] = temp;
  }
  // FOR EXAMPLE-
  let arr2 = [5, 2, 4, 7, 1, 3, 2, 6];
let sortedArr1 = quickSort(arr2);

console.log(sortedArr1); 

// Q4-Implement Insertion Sort
// Ans 4-
function insertionSort(arr3) {
  for (let i = 1; i < arr3.length; i++) {
    let j = i - 1;
    let temp = arr3[i];
    while (j >= 0 && arr3[j] > temp) {
      arr3[j + 1] = arr3[j];
      j--;
    }
    arr3[j + 1] = temp;
  }
  return arr3;
}
// FOR EXAMPLE-
let arr3 = [5, 2, 4, 6, 1, 3];
console.log(insertionSort(arr3)); 

// Q5-Write a program to sort list of strings (similar to that of dictionary)
// Ans 5-
let words = ["apple", "cat", "banana", "fish", "dog", "elephant", "girl", "honey"];
words.sort();
console.log(words);





