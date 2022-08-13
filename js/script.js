window.onload = getAdvice;

async function getAdvice() {
  const response = await fetch("https://api.adviceslip.com/advice");
  const data = await response.json();
  displayAdvice(data.slip);
}

function displayAdvice(data) {
  const adviceText = document.querySelector("p.advice");
  const adviceId = document.querySelector("span.advice-id");
  adviceText.innerText = `" ${data.advice} "`;
  adviceId.innerText = data.id;
}

document.querySelector(".dice").addEventListener("click", getAdvice);

window.addEventListener("resize", () => {
  if (window.screen.width >= 1440) {
    document.querySelector("img.patternDivisor").src =
      "images/pattern-divider-desktop.svg";
  } else {
    document.querySelector("img.patternDivisor").src =
      "images/pattern-divider-mobile.svg";
  }
});
