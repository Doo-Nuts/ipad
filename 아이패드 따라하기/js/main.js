import ipad from '../data/ipads.js'


// 장바구니
const basketStaterEl = document.querySelector('header .basket-starter')
const basketEl = basketStaterEl.querySelector('.basket')


basketStaterEl.addEventListener('click', function (event) {
  event.stopPropagation()  // basketStater 클릭시 상위 요소까지 전파되지 않음
 if (basketEl.classList.contains('show')) {
  // hide
    hideBasket()
 } else {
  // show
    showBasket()
 }s
})

// 드롭다운 메뉴가 클릭 되었을때 꺼지지 사라지지 않게 함
// basketEl을 클릭했을 때 basketStarter까지 전파되지 않게 함
basketEl.addEventListener('click', function(event) {
  event.stopPropagation()
})

// 윈도우를 클릭 했을 때 드롭다운이 사라지게 함
window.addEventListener('click', function () {
  hideBasket()
})

function showBasket() {
  basketEl.classList.add('show')
}
function hideBasket() {
  basketEl.classList.remove('show')
}


// 검색!
const headerEl = document.querySelector('header')
const headerMenuEls = [...headerEl.querySelectorAll('ul.menu > li')]  // 전개연산자, 얕은 복사
const searchWrapEl = headerEl.querySelector('.search-wrap')
const searchStarterEl = headerEl.querySelector('.search-starter')
const searchCloserEl = searchWrapEl.querySelector('.search-closer')
const searchShadowEl = searchWrapEl.querySelector('.shadow')
const searchInputEl = searchWrapEl.querySelector('input')
const searchDelayEls = [...searchWrapEl.querySelectorAll('li')]

searchStarterEl.addEventListener('click', showSearch)
searchCloserEl.addEventListener('click', hideSearch)
searchShadowEl.addEventListener('click', hideSearch)

function showSearch() {
  headerEl.classList.add('searching')
  document.documentElement.classList.add('fixed') // documentElement : 최상위 요소 즉 html
  // 검색 클릭시 메뉴 오른쪽부터 사라짐
  headerMenuEls.reverse().forEach(function (el, index) {
    el.style.transitionDelay = index * .4 / headerMenuEls.length + 's'
  })
  searchDelayEls.forEach(function (el, index) {
    el.style.transitionDelay = index * .4 / searchDelayEls.length + 's'
  })
  setTimeout(() => {
    searchInputEl.focus()
  }, 600);  // 600 : css에서 search 애니메이션 효과가 0.6초 뒤에 나타나기 때문
}
function hideSearch() {
  headerEl.classList.remove('searching')
  document.documentElement.classList.remove('fixed')
  // 검색 클릭시 메뉴 왼쪽부터 나타남
  headerMenuEls.reverse().forEach(function (el, index) {
    el.style.transitionDelay = index * .4 / headerMenuEls.length + 's'
  })
  searchDelayEls.reverse().forEach(function (el, index) {
    el.style.transitionDelay = index * .4 / searchDelayEls.length + 's'
  })
  searchDelayEls.reverse()
  searchInputEl.value = '' // 검색 했던 텍스트를 닫으면 초기화
}


// 요소의 가시성 관찰

const io = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    if (!entry.isIntersecting) {
      return
    }
    entry.target.classList.add('show')
  })
})
const infoEls = document.querySelectorAll('.info')
infoEls.forEach(function (el) {
  io.observe(el)
})


// 비디오 재생!
const video = document.querySelector('.stage video')
const playBtn = document.querySelector('.stage .controller--play')
const pauseBtn = document.querySelector('.stage .controller--pause')

playBtn.addEventListener('click', function () {
  video.play()
  playBtn.classList.add('hide')
  pauseBtn.classList.remove('hide')
})
pauseBtn.addEventListener('click', function () {
  video.pause()
  playBtn.classList.remove('hide')
  pauseBtn.classList.add('hide')
})


//  '당신에게 맞는 iPad는?' 랜더링!
const itemsEl = document.querySelector('.section.compare .items')

// ipads.forEach(function (ipad) {
//   const itemEl = document.createElement('div')
//   itemEl.classList.add('item')

//   let colorList = ''
//   ipad.colors.forEach(function (color) {
//     colorList += `<li style="background-color: ${color};"></li>`
//   })
  
//   itemEl.innerHTML = /* html */ `
//   <div class="thumbnail">
//     <img src="${ipad.thumbnail}" alt="${ipad.name}" />
//   </div>
//   <ul class="colors">
//     ${colorList}
//   </ul>
//   <h3 class="name">${ipad.name}</h3>
//   <p class="tagline">${ipad.tagline}</p>
//   <p class="price">₩${ipad.price.toLocaleString('en-US')}부터</p>
//   <button class="btn">구입하기</button>
//   <a href="${ipad.url}" class="link">더 알아보기</a>
//   `

//   itemsEl.append(itemEl)
// })

console.log(itemsEl)