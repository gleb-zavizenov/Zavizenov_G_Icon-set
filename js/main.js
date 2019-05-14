( () => {
  //stu
  console.log('Fired!');

  //select elements with JavaScript
  let svgGraphic = document.getElementById("badgeSVG")

  function logMyId() {
    console.log(this.id);
    this.style.opacity = 0.5
  }

  svgGraphic.addEventListener("click", logMyId);

  let jpgGraphic = document.getElementById("badgeJPG")
  jpgGraphic.addEventListener("click", logMyId);

})();
