'use strict';

window.renderStatistics = function (ctx, names, times) {

  var players = createPlayers(names, times);

  ctx.fillStyle = 'rgba(256, 256, 256, 1.0)';
  ctx.fillRect(100, 10, 420, 270);
  ctx.strokeRect(100, 10, 420, 270);
  ctx.fillStyle = '#000'; // black;
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!\nСписок результатов:', 120, 40);

  printChart(ctx, players);
};

function printChart(ctx, arr) {
  var max = -1;
  var maxIndex = -1;

  for (var i = 0; i < arr.length; i++) {
    var time = arr[i].time;
    if (time > max) {
      max = time;
      maxIndex = i;
    }
  }

  printText(ctx, max.toFixed(2), arr[maxIndex].name);

  ctx.fillText('Худшее время: ' + max.toFixed(0) + 'мс у игрока ' + arr[maxIndex].name, 120, 60);
  var histogramWidth = -100; // px;
  var step = histogramWidth / (max - 0); // px;
  var barWidth = 40; // px;
  var indent = 90; // px;
  var initialX = 140; // px;
  var initialY = 220; // px;
  var lineHeight = 50; // px;

  for (var i = 0; i < arr.length; i++) {
    if (arr[i].name === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = 'rgba(0, 0, 255, ' + getRandom() + ')';
    };

    ctx.fillRect(initialX + indent * i, initialY, barWidth, arr[i].time * step);
    ctx.fillStyle = '#000'; // black;
    ctx.font = '16px PT Mono';
    ctx.fillText(arr[i].name, initialX + indent * i, initialY + 20);
    ctx.fillText(arr[i].time.toFixed(0), initialX + indent * i, initialY + arr[i].time * step - 10);
  }
}

function getRandom() {
  return Math.random();
}

function printText(canvas, time, name) {}

function createPlayers(names, times) {
  var result = [],
    obj = {},
    i;

  for (i = times.length; i--;) {
    obj.name = names[i];
    obj.time = times[i];
    result.push(obj);
    obj = {};
  }
  return result;
}
