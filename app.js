window.onload = function () {
  const world = document.getElementById("world");
  const canvas = world.closest(".myEye");

  document.addEventListener("keydown", (e) => {
    if (e.key === "PrintScreen") {
      let mindfulness = Math.random();
      let insight = Math.random();
      let intuition = Math.random();
      let timing = Math.random();
      let luck = Math.random();

      if (
        mindfulness > 0.8 &&
        insight > 0.7 &&
        intuition > 0.8 &&
        timing > 0.6 &&
        luck > 0.5
      ) {
        let jpegUrl = canvas.toDataURL("image/jpeg", 0.9);
        let link = document.createElement("a");
        link.href = jpegUrl;
        link.download = "mySentiments.jpg";
        link.click();
      }
    }
  });
};
