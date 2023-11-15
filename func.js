function changecolor() {
    var elem = document.getElementById("num2");
    var currentColor = window.getComputedStyle(elem).color; // 获取当前颜色
    var randomColor = getRandomColor(); // 生成一个随机颜色
    elem.style.color = randomColor;
  }
  
 function addone() {
    var elem = document.getElementById("num1");
    var present = parseInt(elem.value) || 0;
    elem.value = present + 1;
  }

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
