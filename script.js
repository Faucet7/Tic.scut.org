let generatorEnabled = true;
let currentRandomNumber = 0;

function generateRandomNumber() {
  if (generatorEnabled) {
    currentRandomNumber = Math.floor(Math.random() * 100) + 1;
    updateRandomNumber();
  } else {
    alert('Generator is disabled. Enable it to generate random numbers.');
  }
}

function incrementRandomNumber() {
  if (generatorEnabled) {
    currentRandomNumber += 1;
    updateRandomNumber();
  } else {
    alert('Generator is disabled. Enable it to increment the random number.');
  }
}

function updateRandomNumber() {
  document.getElementById('random-number').innerText = `Random Number: ${currentRandomNumber}`;
}

function toggleGenerator() {
  generatorEnabled = !generatorEnabled;
  const statusMessage = generatorEnabled ? 'Generator Enabled' : 'Generator Disabled';
  alert(statusMessage);
}

// 给按钮和开关添加点击事件监听器
document.getElementById('generateButton').addEventListener('click', generateRandomNumber);
document.getElementById('incrementButton').addEventListener('click', incrementRandomNumber);
document.getElementById('toggleButton').addEventListener('change', toggleGenerator);
