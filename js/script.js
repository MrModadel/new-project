/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
   movies: [
      "Логан",
      "Лига справедливости",
      "Ла-ла лэнд",
      "Одержимость",
      "Скотт Пилигрим против...",

   ]
};
let gener = document.querySelector('.promo__genre');
gener.innerHTML = 'драма';
let imgs = document.querySelectorAll('.promo__adv img');
imgs.forEach(img => img.remove())
let fon = document.querySelector('.promo__bg');
fon.style.background = 'url(./img/bg.jpg) center center/cover no-repeat'
let listes = document.querySelectorAll('.promo__interactive-item');
listes.forEach(k => k.remove())
let ul = document.querySelector('.promo__interactive-list');
listes.forEach((item, index) => {
   let newItems = document.createElement('li');
   let delet = document.createElement('div'); delet.classList.add('delete');
   newItems.classList.add(item.classList);
   newItems.innerHTML = `${index + 1}.&nbsp;${movieDB.movies[index]}`;
   ul.appendChild(newItems);
   newItems.appendChild(delet);
})
let newLister = document.querySelectorAll('.promo__interactive-item');
newLister.forEach(item => {
   let del = item.querySelector('.delete');
   del.onclick = () => {
      let c = confirm('удалить?');
      if (c) {
         item.remove()
      }
   }
})


let form = document.querySelector('.add');
form.onsubmit = (e) => {
   e.preventDefault();
   let inp = form.querySelector('input[type="text"]');
   let chec = form.querySelector('input[type="checkbox"]');
   if (inp.value !== '') {
      if (chec.checked === true) {
         movieDB.movies.push(`❤️${inp.value}`)
         console.log('asd');
      } else {
         movieDB.movies.push(`${inp.value}`)
      }
   }
   console.log(movieDB.movies);
}
//promo__menu-item_active
let list = document.querySelectorAll('.promo__menu-list ul li a');
list.forEach(item => {
   item.onclick = () => {
      list.forEach(k => k.classList.remove('promo__menu-item_active'));
      item.classList.add('promo__menu-item_active')
   }
})
let inputSearch = document.querySelector('.header__search input');
inputSearch.onkeyup = () => {
   for (let b of movieDB.movies) {
      for (let k of b) {
         for (let inp of inputSearch.value) {
            if (k === inp) {
               console.log(b);
               
            }
         }
      }
   }
}