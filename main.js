"use strict";
let _= require('lodash');

// #1-------------------
function getDifferenceBetweenNumbers(arr = []) {
  if (arr.length <= 1) return 0;
  return Math.max(...arr) - Math.min(...arr);
}

function getDifferenceBetweenNumbersL(arr = []){
  if (arr.length <= 1) return 0;
  return _.subtract(_.max(arr), _.min(arr));
}

// #2-------------------

const getWordsLongerThanNumber = (string, number) => string.split(" ").filter((item) => item.length > number);
const getWordsLongerThanNumberL = (string, number) =>_.filter(_.words(string),(word)=>word.length>number);

// #3-------------------

const isEndsWithSubstr = (str, endStr) => str.endsWith(endStr);
const isEndsWithSubstrL = (str, endStr) => _.endsWith(str, endStr);

// #4-------------------

function getAverages(arr) {
  const averages = [];
  for (let i = 0; i < arr.length; i++) {
    if (i < arr.length - 1) averages.push((arr[i] + arr[i + 1]) / 2);
  }
  return averages;
}
function getAveragesL(arr) {
  const averages = [];
  for (let i = 0; i < arr.length; i++) {
    averages.push(_.mean([arr[i], arr[i + 1]]));
    if (i + 1 === arr.length - 1) break;
  }
 
  return averages;
}

// #5-------------------

function countVowels(str) {
  const vowels = ["a", "e", "i", "o", "u"];
  return str.split("").filter((item) => vowels.includes(item)).length;
}

// #5.2-------------------

function removeABC(str) {
  const abc = ["a", "b", "c"];
  let strChars = str.split("");
  const abcDelete = abc.filter((item) => strChars.includes(item));
  return abcDelete.length == 0 ? null : strChars.filter((item) => !abcDelete.includes(item)).join("");
}

// #6-------------------

function difference(arr1, arr2) {
  return Object.keys(
    [...arr1, ...arr2]
      .sort((a, b) => a - b)
      .reduce((res, item) => ({ ...res, [+item]: 0 }), {})
  );
}

function differenceL(arr1, arr2) {
  return   _.map(_.orderBy(_.union(arr1, arr2)),(element)=> String(element));
}

// #7-------------------

function getConvertedObject(obj) {
  return Object.entries(obj).reduce(
    (res, item) => ({ ...res, [item[1]]: item[0] }),
    {}
  );
}


// #8-------------------
function calculateDifference(property, limit) {
  if (!Object.keys(property)) return 0;
  const propertySum = Object.values(property)
    .reduce((sum, item) => (sum += item),0);
  return propertySum > limit ? propertySum - limit : 0;
}

// #10-------------------

function getFileName(path) {
  const start = path.includes("/")? path.lastIndexOf("/") : path.lastIndexOf("\\");
  if(start < 0){
    console.log('Невіний формат шляху');
    return;
  } 
  const end = path.lastIndexOf(".");
  return path.slice(start + 1, end);
}

// #11-------------------

function canGetFirstFromSecond(str1, str2) {
  if (!str1 || !str2 || str1.length !== str2.length) return false;
  let subStr, index, converted;
  for (let i = 0; i < str2.length - 1; i++) {
    if (!str1.includes(str2[i])) return false;
    subStr = str2.slice(i);
    index = str1.indexOf(subStr);
    if (index < 0) continue;
    converted = str1.slice(index) + str1.slice(0, index);
    if (str1 === converted) return true;
  }
  return false;
}

// #12-------------------

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
        if(i === 0){
          setTmpValues(sorted[i], sorted[i+1], i);
          if(difference === 0) break;
        }else if(difference > getDifference(sorted[i], sorted[i+1])){
          setTmpValues(sorted[i], sorted[i+1], i);
          if(difference === 0) break;
        }
      }
      b.push(Math.min(first, second));
      c.push(Math.max(first, second));
      sorted.splice(firstIndex, 2);
     }while(sorted.length !== 0)
     return [b, c];

}

// #16-------------------

const generateDigitCode = () =>Math.floor(Math.random()*(57-48+1)+48);//0-9
const generateUpperCharCode = () => Math.floor(Math.random()*(90-65+1)+65);//A-Z
const generateLowerCharCode = () => Math.floor(Math.random()*(122-97+1)+97);//a-z
const generateSymbolCode = () => Math.floor(Math.random()*(38-35+1)+35);   //#$%&
const getUnderscoreCode= () => 95 //_

function createPassword(){
  let password=[];
  const stack=[];
  let randomFunc;
  let funcRange=4;
  let countDigit=0;
  let countUpperCh=0;
  const passLength=Math.floor(Math.random()*(20-6)+6);
  const setChar=[
    generateUpperCharCode,
    generateLowerCharCode, 
    generateSymbolCode, 
    generateDigitCode, 
    getUnderscoreCode
  ];
  const countType=(type)=> stack.filter(fun=>fun===type).length;
  const changeLowerCharToUpper = (dataArr,countChar, action)=>{
    let count = countChar;
    const arr=[...dataArr];
    for(let i = 0; i < arr.length; i++){
      if(arr[i]>=97 && arr[i] <=122){
        arr[i]= action();
        if(--count === 0) break;
      }     
    }
    return arr;
  }

  for(let i=0; i < passLength; i++){
    do{
      randomFunc= Math.floor(Math.random()*(funcRange+1));
      if(randomFunc=== 4) funcRange--;

    }while(stack[stack.length-1] === randomFunc || countDigit === 5 && randomFunc === 3)
    stack.push(randomFunc);
    countDigit = countType(3);
    password.push(setChar[randomFunc]());
    }
    countUpperCh = countType(0);
    if(countUpperCh < 2 && countUpperCh!==0){
      password = changeLowerCharToUpper(password, 2-countUpperCh , setChar[0]);
    }
    return String.fromCharCode(...password);
  };

// #17------------------

function  sortElements(arr){
  let elements=[...arr];
  let min;
  let n=elements.length;
  const left=[], rigth =[];
  let i=0;

while( n > 0){
  min= Math.min(...elements);
  const index = elements.indexOf(min);
  const element= elements.splice(index,1);
  if(i%2!==0 ){
    rigth.unshift(element[0]);
  }else{
    left.push(element[0]);
  }
  n--;
  i++;
}
  return [...left, ...rigth];
}
