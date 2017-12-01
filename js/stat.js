'use strict';
var fireballSize = 22;
var getFireballSpeed = function (left) {
  return left ? 5 : 2;
};
var wizardSpeed = 3;
var wizardWidth = 70;
var getWizardHeight = function () {
  return 1.337 * wizardWidth
};
var getWizardX = function (width) {
  return (width - wizardWidth) / 2;
};
var getWizardY = function (height) {
  return (height - wizardWidth) * 2 / 3;
}
window.renderStatistics = function (ctx, names, times) {
    var players = createPlayers(names, times);
    ctx.fillStyle = 'rgba(256, 256, 256, 1.0)';
    ctx.fillRect(100, 10, 420, 270);
    ctx.strokeRect(100, 10, 420, 270);
    ctx.fillStyle = '#000'; // black;
    ctx.font = '16px PT Mono';
    ctx.fillText('Ура вы победили', 120, 40);
    ctx.fillText('Список результатов:', 120, 60);
    printChart(ctx, players);
};
var histogramWidth = -100; // px;

function printChart(ctx, arr) {

    var max = counter1(arr);

    counter2(arr, ctx, max);
}

function counter1(arr) {
    var max = -1;
    var maxIndex = -1;

    for (var i = 0; i < arr.length; i++) {
        var time = arr[i].time;
        if (time > max) {
            max = time;
            maxIndex = i;
        }
    }
    return max;
}

function counter2(arr, ctx, max) {
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
            ctx.fillStyle = 'rgba(0, 0, 255, ' + getRandomInRange(0.2, 1) + ')';
        };

        ctx.fillRect(initialX + indent * i, initialY, barWidth, arr[i].time * step);
        ctx.fillStyle = '#000'; // black;
        ctx.font = '16px PT Mono';
        ctx.fillText(arr[i].name, initialX + indent * i, initialY + 20);
        ctx.fillText(arr[i].time.toFixed(0), initialX + indent * i, initialY + arr[i].time * step - 10);
    }
}

function getRandomInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


function printText(canvas, time, name) {
    (ctx, max.toFixed(2), arr[maxIndex].name);
}

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
