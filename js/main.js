( () => {
  //stu
  console.log('Fired!');

  //select elements with JavaScript
  let svgGraphic = document.getElementById("badgeSVG")
  let mainHeadLine = document.querySelector(".main-headline")
  let secondHeadline = document.querySelector("#second-line")

  function logMyId() {
    mainHeadLine.textContent = "Now you are something else"
    secondHeadline.textContent = "Wow! It is something else now!"
    console.log(this.id);
    this.style.opacity = 1
  }

  svgGraphic.addEventListener("click", logMyId);

  let jpgGraphic = document.getElementById("badgeJPG")
  jpgGraphic.addEventListener("click", logMyId);



})();
