// variable to select button
const start = document.querySelector(".start");
const stop = document.querySelector(".stop");
const reset = document.querySelector(".reset");

// hr min sec milisec
const hr = document.querySelector(".hr");
const min = document.querySelector(".min");
const sec = document.querySelector(".sec");
const mili = document.querySelector(".mili");

// variable to update stopwatch counts
let hrCount = 0;
let minCount = 0;
let secCount = 0;
let count = 0;

// variable for stopwatch to start
let timer = false;

// function to start stopwatch
start.addEventListener("click", function () {
  timer = true;
  stopWatch();
});

// function to pause stopwatch
stop.addEventListener("click", function () {
  timer = false;
});

// function to reset stopwatch
reset.addEventListener("click", function () {
  timer = false;
  hrCount = 0;
  minCount = 0;
  secCount = 0;
  count = 0;
  hr.textContent = hrCount;
  min.textContent = minCount;
  sec.textContent = secCount;
  mili.textContent = count;
});

// actual stopwatch functionality
function stopWatch() {
  if (timer) {
    count++;
    mili.textContent = count;

    setTimeout("stopWatch()", 0.10);
  }
  if (count === 99) {
    secCount++;
    sec.textContent = secCount;
    count = 0;
    mili.textContent = count;
  }
  if (secCount === 59) {
    minCount++;
    min.textContent = minCount;
    secCount = 0;
    count = 0;
    sec.textContent = secCount;
    mili.textContent = count;
  }
  if( minCount === 59){
      hrCount++;
      hr.textContent = hrCount;
      minCount = 0;
      secCount = 0;
      count = 0;
      min.textContent = minCount;
      sec.textContent = secCount;
      mili.textContent = count;
  }
}
