window.onload = function () {
  const world = document.getElementById("world");
  const canvas = world.closest(".myEye");

  document.addEventListener("keydown", (e) => {
    if (e.key === "PrintScreen") {
      let rightTime = Math.random();
      let rightPlace = Math.random();
      let rightMood = Math.random();
      let luck = Math.random();

      if (
        rightTime > 0.6 &&
        rightPlace > 0.4 &&
        rightMood > 0.7 &&
        luck > 0.8
      ) {
        let jpegUrl = canvas.toDataURL("image/jpeg", 0.9);
        let link = document.createElement("a");
        link.href = jpegUrl;
        link.download = "whatIFeel.jpg";
        link.click();
      }
    }
  });
};
