'use strict';

window.renderStatistics = function (ctx, names, times) {

  var drawRect = function (color, x, y, width, heigth) {
    ctx.fillStyle = color || '#000';
    ctx.strokeRect(x, y, width, heigth);
    ctx.fillRect(x, y, width, heigth);
  };

  drawRect('rgba(0, 0, 0, 0.7)', 110, 20, 420, 270);
  drawRect('white', 100, 10, 420, 270);

  var writeText = function (text, x, y, color, font) {
    ctx.fillStyle = color || '#000';
    ctx.font = font || '16px PT Mono';
    ctx.fillText(text, x, y);
  }

  writeText('Ура вы победили!', 120, 40);
  writeText('Список результатов:', 120, 60);

  var max = -1;

  for (var i = 0; i < times.length; i++) {
    var time = times[i];
    if (time > max) {
      max = time;
    }
  }

  var histogramWidth = 150;
  var step = histogramWidth / (max - 0);

  var barHeigth = 40;
  var indent = 90;
  var initialX = 140;
  var initialY = 100;
  var you = 'Вы';
  var colors = function () {
    var r = 2;
    var g = 14;
    var b = 134;
    var a = 1 * Math.random().toFixed(1);
    return 'rgba(' + r + ', ' + g + ', ' + b + ', ' + a + ')';
  };

  ctx.textBaseline = 'top'; // положение надписи от левого верхнего угла
  for (i = 0; i < times.length; i++) {
    ctx.fillStyle = 'black';
    ctx.fillText(Math.floor(times[i]), initialX + indent * i, (histogramWidth - times[i] * step) + indent * 0.85);
    ctx.fillText(names[i], initialX + indent * i, histogramWidth + initialY);
    ctx.fillStyle = (names[i] === you) ? 'rgba(255, 0, 0, 1)' : colors();
    ctx.fillRect(initialX + indent * i, (histogramWidth - times[i] * step) + initialY, barHeigth, times[i] * step);
  }
};
