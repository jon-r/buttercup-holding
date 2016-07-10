var gallery = [
  //'riding_01',
  //'garden_01',
  'riding_02',
  'view_01',
  'riding_03',
  'view_02',
  'riding_04',
  'weekend_break_01',
  'riding_05',
],
  fullCount = gallery.length,
  slider = document.getElementById('js_gallery'),
  slides = slider.children,
  currCount = slides.length,
  slideTime = 7000,
  tickerInt = 0,
  loaded = false;

//count up slides
function ticker() {

  window.setTimeout(function() {

    if (tickerInt == fullCount ) {
      tickerInt = 0;
      loaded = true;
    } else {
      tickerInt++;
    }

   // console.log(tickerInt);

    slideGo(tickerInt)

    ticker();

  }, slideTime);

}

function slideGo(n) {
  if (!loaded && n < fullCount) {
    var newEl = document.createElement('div');

    newEl.style.backgroundImage = 'url(img/buttercup_stables_' + gallery[n] + '.jpg)';
    newEl.className = 'is-overlay';
    slider.appendChild(newEl);
    currCount++;
    console.log(currCount);
  }

  for (i = 0; i < currCount; i++) {
    if (i == n) {
      slides[i].classList.add('is-active');
    } else {
      slides[i].classList.remove('is-active');
    }
  }
}


ticker();
