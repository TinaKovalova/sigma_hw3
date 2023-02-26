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

// #10

function getFileName(path) {
  const start = path.includes("/")
    ? path.lastIndexOf("/")
    : path.lastIndexOf("\\");

  const end = path.lastIndexOf(".");

  console.log(start, end);
  return path.slice(start + 1, end);
}
// console.log(getFileName(`www\\myfile.txt`));
// console.log(getFileName(`www/myfile.txt`));

// #11

function canGetFirstFromSecond(str1, str2) {
  console.log(str1, str2);
  if (!str1 || !str2 || str1.length !== str2.length) return false;
  let subStr, index, converted;
  for (let i = 0; i < str2.length - 1; i++) {
    if (!str1.includes(str2[i])) return false;
    subStr = str2.slice(i);
    index = str1.indexOf(subStr);
    if (index < 0) continue;
    converted = str1.slice(index) + str1.slice(0, index);
    console.log(i, converted, str1);
    if (str1 === converted) return true;
  }
  return false;
}
// console.log(canGetFirstFromSecond("kate", "teka"));
// console.log(canGetFirstFromSecond("foods", "dlfoo"));
// console.log(canGetFirstFromSecond("foods", "dloo"));

// #12
function sortArray(...elements) {
  const b = [];
  const c = [];
  let first,firstIndex, second, difference;
  const sorted = [...elements].sort((a, b) => a - b);
  const getDifference = (a, b) => (a < b ? b - a : a - b);
  const setTmpValues= (elem1, elem2, index) => {
    first = elem1;
    firstIndex = index;
    second = elem2;
    difference=getDifference(first,second);
  }
  do{
      for(let i = 0; i < sorted.length; i++){
        if(i===0){
          setTmpValues(sorted[i],sorted[i+1], i);
          if(difference=== 0) break;
        }else if(difference > getDifference(sorted[i],sorted[i+1])){
          setTmpValues(sorted[i],sorted[i+1], i);
          if(difference=== 0) break;
        }
      }
      b.push(Math.min(first,second))
      c.push(Math.max(first,second))
      sorted.splice(firstIndex, 2);
     }while(sorted.length !== 0)
     return [b, c];

}
console.log(sortArray(5, 7, 8, 6, 5, 2, 3, 6));

// #13

function convertStr(str) {
  const regexpLink = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/gi;
  const regexpEmail = /\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,6}/gi;
  const regexpThreeDigit = /\d{3,}/gi;

  const wordArr = (str[0].toUpperCase() + str.slice(1)).split(" ");

  let arr = wordArr.map((item) => {
    if (regexpLink.test(item)) return "[посилання заборонено]";
    if (regexpThreeDigit.test(item)) return "";
    if (regexpEmail.test(item)) return "[контакти заборонені]";
    return item;
  });
  let result = arr.join(" ");
  if (result.length > str.length)
    setInterval(() => alert("чи потрібна нам допомога?"), 5000);

  return result;
}

// console.log(convertStr(`усі 5556 посилання https://wesbos.com/ всі email gft@gmao.con видаляються`));

// #14

function bracketsBalance( str ){
  const brackets = {
    '(': 'open',
    ')': 'close'
  };
  const stack = [];

for(let i=0; i < str.length; i++){
    if (!(str[i] in brackets)) continue;
    if(stack.length === 0 || stack[stack.length-1] === str[i]){
      stack.push(str[i]);
      if(brackets[stack[0]]==='close') break;
    }else{
      stack.pop();
    }
  }
  return stack.length===0;
}


// console.log(`(())`,  bracketsBalance(`(())`));
// console.log(`()())`,  bracketsBalance(`()())`));
// console.log(`(()`, bracketsBalance(`(()`));
// console.log(`((()`,  bracketsBalance(`((()`));
// console.log(`)(()`,  bracketsBalance(`)(()`));


// #16

const generateDigitCode = () =>Math.floor(Math.random()*(57-48+1)+48);//0-9
const generateUpperCharCode = () => Math.floor(Math.random()*(90-65+1)+65);//A-Z
const generateLowerCharCode = () => Math.floor(Math.random()*(122-97+1)+97);//a-z
const generateSymbolCode = () => Math.floor(Math.random()*(38-35+1)+35);   //#$%&
const getUnderscoreCode= () => 95 //_

function createPassword(){
  const passLength=Math.floor(Math.random()*(20-6)+6);
  console.log('passLength', passLength)
 
  const setChar=[
    generateUpperCharCode,
    generateLowerCharCode, 
    generateSymbolCode, 
    generateDigitCode, 
    getUnderscoreCode
  ];
  let randomFunc;
  let password=[];
  let stack=[];
  let funcRange=4;
  let countDigit=0;
  let countUpperCh=0;
  let countType=(type)=> stack.filter(fun=>fun===type).length

  for(let i=0; i < passLength; i++){
    do{
      randomFunc= Math.floor(Math.random()*(funcRange+1));
      if(randomFunc=== 4) funcRange--;
    
    }while(stack[stack.length-1]===randomFunc || countDigit===5 && randomFunc===3 )

  
    stack.push(randomFunc);
    countDigit=countType(3);
  

    password.push(setChar[randomFunc]());
    }
    countUpperCh=countType(0);
    // if(countUpperCh<2){
    

      
    // }
    console.log(stack);
    console.log(String.fromCharCode(...password))
  };

// console.log(createPassword())

// #17

function  sortElements(arr){
  let elements=[...arr];
  let min;
  let n=elements.length;
  let left=[], rigth =[];
  let i=0;

while( n > 0){
  min= Math.min(...elements);
  let index = elements.indexOf(min);
  let element= elements.splice(index,1);
  if(i%2!==0 ){
    rigth.unshift(element[0]);
  }else{
    left.push(element[0]);
  }
  n--;
  i++;
}

  return [...left, ...rigth]
}

// console.log(sortElements([6, 2, 5, 4, 1]));
// console.log(sortElements([1,2,3,4,5,6]));
