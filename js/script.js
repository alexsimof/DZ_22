
let div = document.getElementById('year')
let input = document.getElementById('input')
let btn = document.getElementById('btn')
btn.onclick = function () {

  let year = input.value;

  if (year >= 1900 && year <= 2100) {
    if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
      div.innerText = `Да, ${year} високосный год`;

    } else {
      div.innerText = `Нет, ${year} не високосный год`;
    }
  } else {
      div.innerText = `Введите дату в промежутке с 1900 по 2100 год`;
  }

};

//


let activeButtonRed = document.getElementById('red')
let activeButtonBlack = document.getElementById('black')
let text = document.getElementById('text')
let bet = document.getElementById('bet')
let button = document.getElementById('go')

activeButtonRed.onclick = function () {
  this.classList.add('active')
  activeButtonBlack.setAttribute("disabled", "disabled");
  bet.setAttribute("disabled", "disabled");
  text.innerText = 'Ставки сделаны, ставок больше нет!'
  button.classList.remove('show')
  activeButtonRed = true
};

activeButtonBlack.onclick = function () {
  this.classList.add('active')
  activeButtonRed.setAttribute("disabled", "disabled");
  bet.setAttribute("disabled", "disabled");
  text.innerText = 'Ставки сделаны, ставок больше нет!'
  button.classList.remove('show')
  activeButtonBlack = true
};


button.onclick = function () {
  function randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  }
  let colors = ['#fd0000', '#000000'];
  let randomColor = colors[randomInteger(0, colors.length - 1)];
  let finish = document.getElementById('finish');

  if (activeButtonRed == true) {
    if (randomColor == '#fd0000') {
      finish.innerText = 'Ура! Вы выйграли!'
    } else {
      finish.innerText = 'Сожалеем! Вы проиграли!'
    }
  } else {
    finish.innerText = 'Сожалеем! Вы проиграли!'
  }

  if (activeButtonBlack == true) {
    if (randomColor == '#000000') {
      finish.innerText = 'Ура! Вы выйграли!'
    } else {
      finish.innerText = 'Сожалеем! Вы проиграли!'
    }
  } else {
    finish.innerText = 'Сожалеем! Вы проиграли!'
  }
}

// знаю что этот код не идеален)) но как его улучшить не знаю... ((