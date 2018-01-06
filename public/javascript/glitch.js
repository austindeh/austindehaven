//******** GLITCH IMAGE HOVER ***********

var data
var $glitchImgs = $('.glitch-hover')

$glitchImgs.each(function(i, ele) {
  var img = $(ele)[0]
  var src = $(ele).attr('src')
  var canvas = document.createElement('canvas')
  var ctx = canvas.getContext('2d')

  canvas.width = img.width
  canvas.height = img.height

  ctx.drawImage(img, 0, 0, img.width, img.height)
  var data = canvas.toDataURL()
  $(ele).attr('src', data)
})

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



// var $images = $('.project-img')
// var $canvases = $('.project-canvas')

// var imgWidth= 920;
// var imgHeight= 600;

// $(window).resize(function() {
//   $canvases.each(function(i, ele) {
//     var image = $images[i]
//     var canvas = $(ele)[0]
//     var ctx = canvas.getContext('2d')
//     canvas.width = image.width
//     canvas.height = image.height
//     $(ele).css({width: image.width, height: image.height})
//     ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
//   })
// })

// $images.each(function (i, ele) {
//   var img = $(ele)[0]
//   var canvas = $canvases[i]
//   var ctx = canvas.getContext('2d')
//   canvas.width = img.width;
//   canvas.height = img.height;
//   ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

//   var dataURL = canvas.toDataURL(img.src, 1.0);
//   var iid

//   $(canvas).hover(function () {
//     var data = dataURL
//     var protectedOffset = 0;
//     var fps = 24;
//     var maxMaxGlitch = 500;
//     var offset = 100;
//     var minNoGlitchChance = 0.005;
//     var maxGlitch = 10;
//     var noGlitchChance = 0.7;
//     var icount = 0;
//     var protectedData = data.substring(0, protectedOffset);
//     var noGlitchChanceStart = noGlitchChance * 10000;

//     iid = setInterval((function () {
//       var corrupted, glitch, i, j, p, ref;
//       corrupted = data;
//       icount = icount + 1;

//       if (maxGlitch < maxMaxGlitch) {
//         maxGlitch = maxGlitch * 1.01;
//       }
//       if (noGlitchChance > minNoGlitchChance) {
//         noGlitchChance = (noGlitchChanceStart - Math.pow(1.012, icount)) / 10000;
//       }
//       if (Math.random() > noGlitchChance) {
//         glitch = Math.round(Math.random() * maxGlitch);
//         for (i = j = 0, ref = glitch; 0 <= ref ? j < ref : j > ref; i = 0 <= ref ? ++j : --j) {
//           p = offset + Math.round(Math.random() * (corrupted.length - offset - 1));
//           corrupted = corrupted.substr(0, p) + corrupted.charAt(p + 1) + corrupted.charAt(p) + corrupted.substr(p + 2);
//         }
//       }
//       var corruptedPatched = protectedData + corrupted.substring(protectedOffset, corrupted.length - 6) + "//2Q==";

//       var img = new Image();
//       img.onload=function(){
//         ctx.rect(0, 0, canvas.width, canvas.height);
//         ctx.fillStyle = 'white';
//         ctx.fill();
//         ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
//       }
//       img.src = corruptedPatched
//     }), 1000 / fps);

//   }, function () {
//     if (iid) {
//       clearInterval(iid)
//     }
//     canvas.width = imgWidth;
//     canvas.height = imgHeight;
//     ctx.clearRect(0, 0, canvas.width, canvas.height)
//     ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
//   });
// })
