"use strict";

// #1
function getDifferenceBetweenNumbers(arr = []) {
  if (arr.length <= 1) return 0;
  return Math.max(...arr) - Math.min(...arr);
}

// console.log(getDifferenceBetweenNumbers([1, 2, 3, -4]));
// console.log(getDifferenceBetweenNumbers([1, 2, 3, 8]));
// console.log(getDifferenceBetweenNumbers([16]));
// console.log(getDifferenceBetweenNumbers([]));

// #2

const getWordsLongerThanNumber = (string, number) =>
  string.split(" ").filter((item) => item.length > number);

// console.log(getWordsLongerThanNumber("функція приймає рядок та число", 5));

// #3

const isEndsWithSubstr = (str, endStr) => str.endsWith(endStr);
// console.log(isEndsWithSubstr("abc", "bc"));
// console.log(isEndsWithSubstr("abc", "dc"));

// #4

function getAverages(arr) {
  const averages = [];
  for (let i = 0; i < arr.length; i++) {
    if (i < arr.length - 1) averages.push((arr[i] + arr[i + 1]) / 2);
  }
  return averages;
}
// console.log(getAverages([2, -2, 2, -2, 2]));
// console.log(getAverages([1, 3, 5, 1, -10]));

// #5

function countVowels(str) {
  const vowels = ["a", "e", "i", "o", "u"];
  return str.split("").filter((item) => vowels.includes(item)).length;
}
// console.log(countVowels("Celebration"));
// console.log(countVowels("Palm"));

function removeABC(str) {
  const abc = ["a", "b", "c"];
  let strChars = str.split("");
  const abcDelete = abc.filter((item) => strChars.includes(item));

  return abcDelete.length == 0
    ? null
    : strChars.filter((item) => !abcDelete.includes(item)).join("");
}
// console.log(removeABC("This might be a bit hard"));
// console.log(removeABC("hello world!"));

// #6

function difference(arr1, arr2) {
  return Object.keys(
    [...arr1, ...arr2]
      .sort((a, b) => a - b)
      .reduce((res, item) => ({ ...res, [+item]: 0 }), {})
  );
}
// console.log(difference([1, 2, 3], [100, 2, 1, 10]));
// console.log(difference([251, 22, 13, 10], [102, 22, 1, 10]));

// #7

function getConvertedObject(obj) {
  return Object.entries(obj).reduce(
    (res, item) => ({ ...res, [item[1]]: item[0] }),
    {}
  );
}
// console.log(
//   getConvertedObject({ red: "#FF0000", green: "#00FF00", white: "#FFFFFF" })
// );
// console.log(getConvertedObject({ name: "ivan", age: "250", job: "driver" }));

// #8
function calculateDifference(property, limit) {
  if (!Object.keys(property)) return 0;
  const propertySum = Object.values(property).reduce(
    (sum, item) => (sum += item),
    0
  );
  return propertySum > limit ? propertySum - limit : 0;
}

// console.log(calculateDifference({ "baseball bat": 20 }, 5));
// console.log(calculateDifference({ skate: 10, painting: 20 }, 19));
// console.log(calculateDifference({ skate: 200, painting: 200, shoes: 1 }, 400));
// console.log(calculateDifference({ skate: 200, painting: 200, shoes: 1 }, 2000));

// #11

function getFileName(path) {
  const start = path.includes("/")
    ? path.lastIndexOf("/")
    : path.lastIndexOf("\\");

  const end = path.lastIndexOf(".");

  console.log(start, end);
  return path.slice(start + 1, end);
}
console.log(getFileName(`www\\myfile.txt`));
console.log(getFileName(`www/myfile.txt`));
