// function drawImageProp(ctx, img, x, y, w, h, offsetX, offsetY) {
//   if (arguments.length === 2) {
//       x = y = 0;
//       w = ctx.canvas.width;
//       h = ctx.canvas.height;
//   }

//   // default offset is center
//   offsetX = typeof offsetX === "number" ? offsetX : 0.5;
//   offsetY = typeof offsetY === "number" ? offsetY : 0.5;

//   // keep bounds [0.0, 1.0]
//   if (offsetX < 0) offsetX = 0;
//   if (offsetY < 0) offsetY = 0;
//   if (offsetX > 1) offsetX = 1;
//   if (offsetY > 1) offsetY = 1;

//   var iw = img.width,
//       ih = img.height,
//       r = Math.min(w / iw, h / ih),
//       nw = iw * r,   // new prop. width
//       nh = ih * r,   // new prop. height
//       cx, cy, cw, ch, ar = 1;

//   // decide which gap to fill
//   if (nw < w) ar = w / nw;
//   if (Math.abs(ar - 1) < 1e-14 && nh < h) ar = h / nh;  // updated
//   nw *= ar;
//   nh *= ar;

//   // calc source rectangle
//   cw = iw / (nw / w);
//   ch = ih / (nh / h);

//   cx = (iw - cw) * offsetX;
//   cy = (ih - ch) * offsetY;

//   // make sure source rectangle is valid
//   if (cx < 0) cx = 0;
//   if (cy < 0) cy = 0;
//   if (cw > iw) cw = iw;
//   if (ch > ih) ch = ih;

//   // fill image in dest. rectangle
//   ctx.drawImage(img, cx, cy, cw, ch,  x, y, w, h);
// }

//******** GLITCH IMAGE HOVER ***********


var data

$('.glitch-hover').mouseenter(function() {
  var img, maxGlitch, offset;

  img = $(this);
  data = img.attr('src');
  protectedOffset = 0;
  fps = 24;
  maxMaxGlitch = 500;
  offset = 100;
  minNoGlitchChance = 0.005;
  maxGlitch = 10;
  noGlitchChance = 0.7;

  icount = 0;
  protectedData = data.substring(0, protectedOffset);
  noGlitchChanceStart = noGlitchChance * 10000;

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


$('.glitch-hover').mouseleave(function() {
  if(window.glitchInterval){
    clearInterval(window.glitchInterval)
  }
  $(this).attr('src', data)
})


$(function() {
  // DOM ready...just in case.
  // var body = $("body")
  // var canvases = $('.project-canvas')
  // var images = $('.project-img')

  // var rafID = 0
  // var hovering = false

  // function glitchCanvas(ele, i) {
  //   var source = images[i]
  //   var ctx = ele.getContext('2d')

  //   // glitch({
  //   //   seed: Math.floor(Math.random() * 99),
  //   //   quality: Math.floor(Math.random() * 99),
  //   //   amount: Math.floor(Math.random() * 99)
  //   // }).fromImage(source).toImageData()
  //   // .then(function(img) {
  //   //   ctx.putImageData(img, 0, 0)
  //   // })
  //   // .catch(function(err) {

  //   // })

  //   if (hovering) {
  //     rafID = requestAnimationFrame(function() { glitchCanvas(ele, i) })
  //   } else cancelAnimationFrame(rafID)
  // }

  // $('.project-canvas').each(function(i, ele) {
  //   var image = images[i]
  //   $(ele).css({width: image.width, height: image.height})

  //   $(ele).hover(function() {
  //     hovering = true
  //     glitchCanvas(ele, i)
  //     $(ele).css("opacity", 1)
  //   }, function() {
  //     hovering = false
  //     $(ele).css("opacity", 0)
  //   })
  // })

  // $(window).resize(function() {
  //   canvases.each(function(i, ele) {
  //     var image = images[i]
  //     $(ele).css({width: image.width, height: image.height})
  //   })
  // })

})
