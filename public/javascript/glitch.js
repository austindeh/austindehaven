if(window.innerWidth >= 479) {

  (function($) {
    //******** GLITCH IMAGE HOVER ***********

    var data

    $('.project-hover').mouseenter(function() {
      var img, maxGlitch, offset;

      img = $(this).find('.glitch-hover');
      data = img.attr('src');
      protectedOffset = 0;
      fps = 24;
      maxMaxGlitch = 0;
      offset = 5;
      minNoGlitchChance = 1.0;
      maxGlitch = 1;
      noGlitchChance = 2;

      icount = 0;
      protectedData = data.substring(0, protectedOffset);
      noGlitchChanceStart = noGlitchChance * 1;

      window.glitchInterval = setInterval((function() {
        var corrupted, glitch, i, j, p, ref;
        corrupted = data;
        icount = icount + 1;
        if (maxGlitch < maxMaxGlitch) {
          maxGlitch = maxGlitch * 1.01;
        }
        if (noGlitchChance > minNoGlitchChance) {
          noGlitchChance = (noGlitchChanceStart - Math.pow(1.012, icount)) / 10000;
        }
        if (Math.random() > noGlitchChance) {
          glitch = Math.round(Math.random() * maxGlitch);
          for (i = j = 0, ref = glitch; 0 <= ref ? j < ref : j > ref; i = 0 <= ref ? ++j : --j) {
            p = offset + Math.round(Math.random() * (corrupted.length - offset - 1));
            corrupted = corrupted.substr(0, p) + corrupted.charAt(p + 1) + corrupted.charAt(p) + corrupted.substr(p + 2);
          }
        }
        corruptedPatched = protectedData + corrupted.substring(protectedOffset, corrupted.length - 6) + "//2Q==";
        return img.attr('src', corruptedPatched);
      }), 1000 / fps);

    })


    //******** START MOUSELEAVE  ***********


    $('.project-hover').mouseleave(function() {
      if(window.glitchInterval){
        clearInterval(window.glitchInterval)
      }
      $(this).find('.glitch-hover').attr('src', data)
    })
  })(jQuery);
}