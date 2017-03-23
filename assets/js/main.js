function animateBars() {
  // var bar1 = document.getElementById('hide');
  // bar1.style.display = 'none';
  // bar2.style.transition = 'display';
  $(function() {
    $('body .container .anim-menu .bar-1').toggleClass('hide');
    $('body .container .anim-menu .bar-2').toggleClass('rotateSec');
    $('body .container .anim-menu .bar-3').toggleClass('rotateThird');
  });
}
