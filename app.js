window.onload = function () {
  const world = document.getElementById("world");
  const canvas = world.closest(".myEye");
  let intuitionElement = document.getElementById("intuitionInput");
  let planElement = document.getElementById("planInput");

  document.addEventListener("keydown", (e) => {
    if (e.key === "PrintScreen") {
      let mindfulness = Math.random();
      let plan = howItWorks(planElement.value);
      let insight = Math.random();
      let intuition = parseFloat(intuitionElement.value);
      let timing = (Math.random() + insight) / 2;
      let luck = Math.random();
      if (
        mindfulness + plan + insight + intuition + timing + luck > 4 ||
        luck > 0.9
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
