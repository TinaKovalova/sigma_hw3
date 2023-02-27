// #9------------------

const form = document.querySelector('#taskNine');
const btn = form.querySelector('button')
 
form.addEventListener('submit', (event)=>{
    event.preventDefault();
    let{height:{value :a}, width:{value :b}, depth:{value :c},holeHeight:{value :h}, holeWidth:{value :w} } = form.elements;
    console.log(`doesBrickFit(${a}, ${b}, ${c}, ${w}, ${h})`,doesBrickFit(a, b, c, w, h));
    event.currentTarget.reset();
    })

function doesBrickFit(a, b, c, w, h){
    const isFit =(x, y, dw=w, dh=h)=> x<=dw && y<=dh || x<=dh && y<=dw? true : false;
    return isFit(a, b) || isFit(a, c)|| isFit(c, b) || isFit(b, c);
}

// #13-------------------

function convertStr(str) {
  const regexpLink = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/gi;
  const regexpEmail = /\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,6}/gi;
  const regexpThreeDigit = /\d{3,}/gi;
  const wordArr = (str[0].toUpperCase() + str.slice(1)).split(" ");

  const arr = wordArr.map((item) => {
    if (regexpLink.test(item)) return "[посилання заборонено]";
    if (regexpThreeDigit.test(item)) return "";
    if (regexpEmail.test(item)) return "[контакти заборонені]";
    return item;
  });
  const result = arr.join(" ");
  if (result.length > str.length) setInterval(() => alert("чи потрібна нам допомога?"), 5000);
  return result;
}


// #14------------------
const bracketsForm = document.querySelector('#taskFourteen');
const resultBlock= document.querySelector('#taskFourteenResult');
bracketsForm.addEventListener('submit', (event)=>{
    event.preventDefault();
    const text = bracketsForm.elements.bracketsText.value;
    const isBalanced =bracketsBalance(text);
    if(isBalanced) {
      createBracketsBalanceElement(text);
    }else{
      resultBlock.innerHTML='';
    }
})

function createBracketsBalanceElement(elementText){
    resultBlock.style.margin='50px';
    resultBlock.style.padding='20px';
    resultBlock.style.userSelect='none';
    resultBlock.innerHTML=`<p>${elementText}</p><p>В заданому тексті баланс круглих дужок дотримується.</p>`;
}

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
        if(brackets[stack[0]] ==='close') break;
      }else{
        stack.pop();
      }
    }
    return stack.length === 0;
  }
  

// #15------------------

const modal = document.getElementById("modal");
function createList() {
  let text;
  let charCode;
  do {
    text = prompt("ввести якусь фразу", "");
  } while (!text);
  if (/[A-Za-z]/gi.test(text)) {
    charCode = 97;
  } else if (/[А-Яа-я]/gi.test(text)) {
    charCode = 1072;
  }
  const countA = text.toLowerCase().split("").filter((item) => item.codePointAt(0) === charCode).length;
  let words = text.split(" ");
  const list = document.createElement("ul");
  list.style.margin='50px';
  list.style.padding='20px';
  let listItem, itemText;
  words.forEach((word, index, arr) => {
    listItem = document.createElement("li");
    if (index === 0) {
      itemText = word.toUpperCase();
    } else if (index >= arr.length - 2) {
      itemText = word.toLowerCase();
    } else {
      itemText = word;
    }
    listItem.textContent = itemText;
    list.append(listItem);
  });
  document.body.prepend(list);

  if (document.querySelector("ul")) {
    new Promise((resolve, reject) => {
      setTimeout(() => {
        alert(`кількість усіх літер "а" ${countA}`);
        resolve();
      }, 3000);
    }).then(() => checkInactivity());
  }
}

function checkInactivity() {
  let timerId, timerVisible;
  const setNewTimer = () => {
    clearTimeout(timerId);
    clearTimeout(timerVisible);
    modal.style.visibility = "hidden";
    const promise = new Promise((resolve, reject)=>{
      timerId=setTimeout(() => {
        modal.style.visibility = "visible";
        resolve()
      }, 300000);
    }).then(new Promise((resolve, reject)=>{
      timerVisible = setTimeout(() => {
        window.close();
      }, 60000);
    }))
  };

  document.documentElement.addEventListener("mousemove", setNewTimer);
  document.documentElement.addEventListener("click", setNewTimer);
  document.documentElement.addEventListener("keydown", setNewTimer);
  document.documentElement.addEventListener("touchstart", setNewTimer);
}

createList();
