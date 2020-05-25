
document.addEventListener('DOMContentLoaded', function () {
  particleground(document.getElementById('particles'), {
    density: 7000, 
    dotColor: '#7489d8',
    lineColor: '#7489d8',
    particleRadius: 5,
    parallax: false,

  });
  var intro = document.getElementById('intro');
  intro.style.marginTop = - intro.offsetHeight / 2 + 'px';
}, false);
