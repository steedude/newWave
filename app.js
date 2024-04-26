window.onload = function () {
  // const element = document.getElementById("myInput");

  // element.addEventListener("click", () => {
  //   const randomNum = Math.random();

  //   if (randomNum < 0.5) {
  //     element.blur();
  //   } else {
  //     element.focus();
  //   }
  // });
  document.getElementById("myInput").onclick = function () {
    console.log("clicked");
  };
};
