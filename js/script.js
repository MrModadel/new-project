import {
   movies,
   sayHi
} from './db.js'

let movies_ul = document.querySelector('.promo__interactive-list');
let genres_ul = document.querySelector('.promo__menu-list ul');
let searchInp = document.querySelector('#search');
let promo_bg = document.querySelector('.promo__bg');
let form  = searchInp.parentNode;
form.classList.add('form-sec');






let genres = ['All', ...new Set(movies.map(item => item.Genre))]

form.addEventListener('click' , function(){
   if (this.offsetWidth - event.offsetX <= 35&&this.offsetWidth - event.offsetX >= 12) {
      console.log('efcdwx');
      let val = searchInp.value.toLowerCase().trim();
      let filtered = movies.filter(item => {
         let title = item.Title.toLowerCase().trim();
         if (title.includes(val)) {
            return item
         }
      })
      if (filtered.length > 0) {
         reload(filtered, movies_ul)
      }
   }

})


function reload(arr, place) {
   place.innerHTML = ""

   setMovie(arr[Math.floor(Math.random() * arr.length)])

   for (let item of arr) {
      let li = document.createElement('li')
      let del = document.createElement('div')
      del.classList.add('delete')
      li.classList.add('promo__interactive-item')
      li.innerHTML = item.Title
      li.append(del)
      place.append(li)
   }

}

function reload_genres(arr, place) {
   place.innerHTML = ""

   for (let item of arr) {
      let li = document.createElement('li')
      let a = document.createElement('a')

      if (item === 'All') {
         a.classList.add('promo__menu-item_active')
      }

      a.classList.add('promo__menu-item')
      a.innerHTML = item
      a.href = "#"

      li.append(a)
      place.append(li)
   }

   let lis = place.querySelectorAll('li')
   lis.forEach(li => {
      li.onclick = () => {
         lis.forEach(el => el.querySelector('a').classList.remove('promo__menu-item_active'));
         let a = li.querySelector('a');
         a.classList.add('promo__menu-item_active');
         let arrGen = [];
         movies.filter(item => {
            if (item.Genre === a.innerHTML) {
               arrGen.push(item);
            } else if (a.innerHTML === 'All') {
               arrGen.push(item);
            }
         })
         reload(arrGen, movies_ul);
      }
   })
}

function setMovie({ Poster }) {
   promo_bg.style.backgroundImage = `url(${Poster})`
}



reload(movies, movies_ul)
reload_genres(genres, genres_ul)