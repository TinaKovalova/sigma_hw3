// #9

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




// #15

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
  document.body.append(list);

  if (document.querySelector("ul")) {
    new Promise((resolve) => {
      setTimeout(() => {
        alert(`кількість усіх літер "а" ${countA}`);
        resolve();
      }, 500);
    }).then(() => checkInactivity());
  }
}

function checkInactivity() {
  let timerId, timerVisible;
  const setNewTimer = () => {
    clearTimeout(timerId);
    clearTimeout(timerVisible);
    const modal = document.getElementById("modal");
    modal.style.visibility = "hidden";
    timerId = setTimeout(() => {
      modal.style.visibility = "visible";
      timerVisible = setTimeout(() => {
        window.close();
      }, 10000);
    }, 3000);
  };

  document.documentElement.addEventListener("mousemove", setNewTimer);
  document.documentElement.addEventListener("click", setNewTimer);
  document.documentElement.addEventListener("keydown", setNewTimer);
  document.documentElement.addEventListener("touchstart", setNewTimer);
}

// createList();
