$(function() {

   var $template = $(
      '<div class="error-popup"><div class="error-header"><div class="error-headline"> 404: This doesn\'t exist!</div><a class="error-close">✕</a></div><div class="error-body"><div class="error-icon"><img src="/images/404/error_icon.jpg"></div><div class="error-copy"><div class="error-message">How did you fuck this up?</div><a href="http://austindehaven.com" class="error-leave">Return</></div></div></div>'
    ); // defines Div to inject


    for (var popupAmount = 0; popupAmount < 200; popupAmount += 10) { // for loop
      var clone = $template.clone(); // makes a copy
      $(clone).css({
        top: 20 + popupAmount,
        left: 150 + popupAmount
      }); // changes the clones position
      $("body").append(clone); // adds it to the DOM
    }

  // this is for the drag feature
    $(".error-popup, .desktop-icons").draggable({
      start: bringtotop,
      containment: "window"
    });


  // this is the start menu Blue Screen
  $('.footer-left, .desktop-icons').click(function() {
    $('.bluescreen').css({
        'display': 'flex',
    });
    $("body").keypress(function() {
      window.location.href = "/";
    });
  });

  // bring to top on click
  var bringTop = 0
    $(".error-popup").click(bringtotop);

    function bringtotop() {
      bringTop++;
      $(this).css({"z-index": bringTop});
    }

  // play audio file on page load
  var audio = new Audio('/images/404/windows-error.mp3');
  audio.play();

  // close popup window on click of the close button
  $("body").on("click", ".error-close", function() {
      const audio = new Audio('/images/404/windows-error.mp3');

      $(this).parents('div').hide();
      var clone = $template.clone(); // makes a copy
      audio.play();
      $(clone).css({
        top: Math.random() * (window.innerHeight - 180),
        left: Math.random() * (window.innerWidth - 400)
      }); // randomizes its position
      $("body").append(clone); // adds it to the DOM
      $(".error-popup").draggable();
      $(".error-popup").click(function() {
      bringTop++;
      $(this).css({"z-index": bringTop});
    });
  });

  });
