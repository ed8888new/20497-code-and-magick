'use strict';

window.renderStatistics = function (ctx, names, times) {

  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(110, 20, 420, 270);


  ctx.fillStyle = 'white';
  ctx.strokeRect(100, 10, 420, 270);
  ctx.fillRect(100, 10, 420, 270);

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';

  ctx.fillText('Ура вы победили!', 120, 40);
  ctx.fillText('Список результатов:', 120, 60);

  var max = -1;

  for (var i = 0; i < times.length; i++) {
    var time = times[i];
    if (time > max) {
      max = time;
      maxIndex = i;
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
    var a = 1 * Math.random();
    return 'rgba(' + r + ', ' + g + ', ' + b + ', ' + a + ')';
  };

  ctx.textBaseline = 'top'; // положение надписи от левого верхнего угла
  for (i = 0; i < times.length; i++) {
    ctx.fillStyle = 'black';
    ctx.fillText(Math.floor(times[i]), initialX + indent * i, (histogramWidth - times[i] * step) + indent * 0.85);
    ctx.fillText(names[i], initialX + indent * i, histogramWidth + initialY);
    if (names[i] === you) {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = colors();
    }
    ctx.fillRect(initialX + indent * i, (histogramWidth - times[i] * step) + initialY, barHeigth, times[i] * step);
  }
};
