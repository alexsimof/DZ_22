
let div = document.getElementById('year')
let input = document.getElementById('input')
let btn = document.getElementById('btn')
btn.onclick = function () {

  let year = input.value;

  if (year >= 1900 && year <= 2100) {
    if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
      div.innerHTML = `Да, ${year} високосный год`;
    } else {
      div.innerHTML = `Нет, ${year} не високосный год`;
    }
  } else {
      div.innerHTML = `Введите дату в промежутке с 1900 по 2100 год`;
  }

}