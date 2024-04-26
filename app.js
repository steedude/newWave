window.onload = function () {
  const world = document.getElementById("world");
  const myView = world.closest(".myEye");

  myView.addEventListener("keydown", (e) => {
    if (e.key === "PrintScreen") {
      const randomNum = Math.random();

      if (randomNum < 0.5) {
        element.blur();
      } else {
        element.focus();
      }
    }
  });
};
// var canvas = document.createElement('canvas');
// var ctx = canvas.getContext('2d');

// // 設置 canvas 的尺寸
// canvas.width = 800;
// canvas.height = 600;

// // 畫一些內容到 canvas（這裡只是一個例子）
// ctx.fillStyle = 'red';
// ctx.fillRect(10, 10, 100, 50);

// // 轉換為 JPG
// var imageUrl = canvas.toDataURL('image/jpeg');

// // 下載圖像
// var link = document.createElement('a');
// link.href = imageUrl;
// link.download = 'example.jpg';
// link.click();
