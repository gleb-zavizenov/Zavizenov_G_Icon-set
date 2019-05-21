( () => {
  //stu
  console.log('Working');

  //select elements with JavaScript
  let svgGraphic = document.getElementById("badgeSVG");
  let mainHeadLine = document.querySelector(".main-headline");
  let secondHeadline = document.querySelector("#second-line");
  let switchButton = document.querySelector(".switch-type");
  let jpgGraphic = document.getElementById("badgeJPG");

  function logMyId() {
    console.log(this.id);
  }

  function changeHeadline() {
    mainHeadLine.textContent = "Now you are something else";
    secondHeadline.textContent = "Wow! It is something else now!";
  }

  function addActiveClass() {
    mainHeadLine.classList.toggle("active");
  }

  svgGraphic.addEventListener("mouseover", logMyId);
  switchButton.addEventListener("click", changeHeadline);
  jpgGraphic.addEventListener("click", logMyId);
  jpgGraphic.addEventListener("click", addActiveClass);

})();
