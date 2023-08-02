

pushInStart('.push-in');


// loader
let valueDisplays = document.querySelectorAll(".num");
let interval = 5000;
function fun_loader(valueDisplay) {
  valueDisplays.forEach((valueDisplay) => {
    let startValue = 0;
    let endValue = parseInt(valueDisplay.getAttribute("data-val"));
    let duration = Math.floor(interval / endValue);
    let counter = setInterval(function () {
      startValue += 1;
      valueDisplay.textContent = startValue + "K+";
      if (startValue == endValue) {
        clearInterval(counter);
      }
    }, duration);
  });
}
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      valueDisplays.forEach((valueDisplay) => {
        let startValue = 0;
        let endValue = parseInt(valueDisplay.getAttribute("data-val"));
        let duration = Math.floor(interval / endValue);
        let counter = setInterval(function () {
          startValue += 1;
          valueDisplay.textContent = startValue + "K+";
          if (startValue == endValue) {
            clearInterval(counter);
          }
        }, duration);
      });
      return;
    }

  });
});
observer.observe(document.querySelector(".container-loader span"));

//  end of the Fun Fact Loader.

// animation on scroll
AOS.init();



