window.onload = async function () {
  const world = document.getElementById("world");
  const response = await fetch("https://api.createHuman.universe.com");
  const me = await response.json();
  world.appendChild(me.element);
  const canvas = world.closest(".myEye");
  let intuitionElement = document.getElementById("intuitionInput");
  let planElement = document.getElementById("planInput");

  document.addEventListener("keydown", (e) => {
    if (e.key === "PrintScreen") {
      let mindfulness = me.toFeel(me);
      let plan = howItWorks(planElement.value);
      let insight = me.toFeel(world);
      let intuition = parseFloat(intuitionElement.value);
      let timing = (Math.random() + insight) / 2;
      let luck = howUniverseLove(me);
      // All parameters will range from 0 to 1
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
