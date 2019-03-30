function lightbox(this_t, identifier){
  $("#lightbox-wrapper").show();
  var enlarge_source = this_t.children[0].children[0].src;
  console.log(enlarge_source);
  switch(identifier){
    case 'wanted': identifier = '<iframe width="560" height="315" src="https://www.youtube.com/embed/edpEspHOeVU?rel=0&amp;controls=0&amp;showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'; break;
    case 'smith': identifier = '<iframe width="560" height="315" src="https://www.youtube.com/embed/CZ0B22z22pI?rel=0&amp;controls=0&amp;showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'; break;
    case 'tourist': identifier = '<iframe width="560" height="315" src="https://www.youtube.com/embed/5XtbLezJtMg?rel=0&amp;controls=0&amp;showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'; break;
    case 'salt': identifier = '<iframe width="560" height="315" src="https://www.youtube.com/embed/QZ40WlshNwU?rel=0&amp;controls=0&amp;showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'; break;
  }
  $('iframe').remove();
  $('#video-enlarge').append(identifier);
  //document.getElementById('video-enlarge-video').load();
  //play_pause_video();
  $("#nav-bar").hide();
  play_pause = true;
}

function lightbox_close(){
  $("#lightbox-wrapper").hide();
  $("#nav-bar").show();
  //play_pause_video();
  //document.getElementById('video-enlarge-video').currentTime = 0;
  //document.getElementById('video-enlarge-video').load();
}

var play_pause = false;

function play_pause_video(){
  if(play_pause){
      document.getElementById('video-enlarge-video').pause();
      play_pause = !play_pause;
  } else {
      document.getElementById('video-enlarge-video').play();
      play_pause = !play_pause;
  }
}

function modal_close(){
  $('#modal-container').fadeOut();
  $('.nav-bar').show();
}

var div1y = document.getElementById("layer1").offsetTop,
  div2y = document.getElementById("layer2").offsetTop,
  div3y = document.getElementById("layer3").offsetTop,
  div4y = document.getElementById("layer4").offsetTop,
  div5y = document.getElementById("layer5").offsetTop,
  div6y = document.getElementById("layer6").offsetTop;

  $(window).on("mousewheel", function(e) {
    var lastScrollTop = window.pageYOffset,
    scrollDirection,
    targetUp,
    targetDown,
    targetElement;
    lastScrollTop = Math.ceil(lastScrollTop);
  
    if (e.deltaY > 0 || e.originalEvent.deltaY > 0){
      scrollDirection = "down";
    } else if (e.deltaY <= 0 || e.originalEvent.deltaY <= 0){
      scrollDirection = "up";
    }
    e.preventDefault();

    if (lastScrollTop === div1y) {
      targetUp = "layer6";
      targetDown = "layer2";
    } else if (lastScrollTop === div2y) {
      targetUp = "layer1";
      targetDown = "layer3";
    } else if (lastScrollTop === div3y) {
      targetUp = "layer2";
      targetDown = "layer4";
    } else if (lastScrollTop === div4y) {
      targetUp = "layer3";
      targetDown = "layer5";
    } else if (lastScrollTop === div5y) {
      targetUp = "layer4";
      targetDown = "layer6";
    } else if (lastScrollTop === div6y) {
      targetUp = "layer5";
      targetDown = "layer1";
    } else if (lastScrollTop < div2y) {
      targetUp = "layer1";
      targetDown = "layer2";
    } else if (lastScrollTop < div3y) {
      targetUp = "layer2";
      targetDown = "layer3";
    } else if (lastScrollTop < div4y) {
      targetUp = "layer3";
      targetDown = "layer4";
    } else if (lastScrollTop < div5y) {
      targetUp = "layer4";
      targetDown = "layer5";
    } else if (lastScrollTop < div6y) {
      targetUp = "layer5";
      targetDown = "layer6";
    } else if (lastScrollTop > div6y) {
      targetUp = "layer6";
      targetDown = "layer1";
    }

    if (scrollDirection === "down") {
      targetElement = targetDown;
    } else if (scrollDirection === "up") {
      targetElement = targetUp;
    }
    smooth_scroll(targetElement);
  });

function smooth_scroll(targetId){
  duration = 1000;
  var start = null;
  var targetPosition = document.getElementById(targetId).offsetTop;
  var startPosition = window.pageYOffset;
  var distance = targetPosition - startPosition;

  window.requestAnimationFrame(step);

  function step(timestamp) {
    if (!start) start = timestamp;
    var progress = timestamp - start;
    window.scrollTo(0, easeInOutCubic(progress, startPosition, distance, duration));

    if (progress < duration) window.requestAnimationFrame(step);
  }

  window.requestAnimationFrame(step);
  switch(targetId){
    case 'layer1': 
      $("#layer-1-header").addClass("animated fadeIn delay-0s");
      setTimeout(function(){
        remove_animation_layer1();
      }, 3000);
      remove_animation_layer2();
      remove_animation_layer3();
      remove_animation_layer4();
      remove_animation_layer5();
      remove_animation_layer6();
      break;
    case 'layer2':
      $("#about-img").addClass("animated jello delay-500ms");
      setTimeout(function(){
        remove_animation_layer2();
      }, 3000);
      remove_animation_layer1();
      remove_animation_layer3();
      remove_animation_layer4();
      remove_animation_layer5();
      remove_animation_layer6();
      break;
    case 'layer3':
      $("#msg-from-jolie-img").addClass("animated fadeIn delay-200ms");
      $("#msg-from-jolie-heading").addClass("animated bounceInDown delay-200ms");
      $("#msg-from-jolie-content").addClass("animated bounceInUp delay-200ms");
      setTimeout(function(){
        remove_animation_layer3();
      }, 3000);
      remove_animation_layer1();
      remove_animation_layer2();
      remove_animation_layer4();
      remove_animation_layer5();
      remove_animation_layer6();
      break;
    case 'layer4':
      $("#reel-and-more-heading").addClass("animated fadeIn delay-500ms");
      $("#video-wrapper").addClass("animated fadeInLeft delay-500ms");
      $("#video1").addClass("animated fadeInDown delay-500ms");
      $("#video2").addClass("animated fadeInUp delay-500ms");
      $("#video3").addClass("animated fadeInDown delay-500ms");
      $("#video4").addClass("animated fadeInUp delay-500ms");
      $("#praise-for-jolie").addClass("animated fadeIn delay-500ms");
      setTimeout(function(){
        remove_animation_layer4();
      }, 3000);
      remove_animation_layer1();
      remove_animation_layer2();
      remove_animation_layer3();
      remove_animation_layer5();
      remove_animation_layer6();
      break;
    case 'layer5':
      $("#layer-5-header").addClass("animated fadeInLeft faster delay-500ms");
      $("#photos-left").addClass("animated fadeInLeft fast delay-200ms");
      $("#photos-middle-1").addClass("animated fadeInDown fast delay-200ms");
      $("#photos-middle-2").addClass("animated fadeInUp fast delay-200ms");
      $("#photos-right").addClass("animated fadeInRight fast delay-200ms");
      setTimeout(function(){
        remove_animation_layer5();
      }, 3000);
      remove_animation_layer1();
      remove_animation_layer2();
      remove_animation_layer3();
      remove_animation_layer4();
      remove_animation_layer6();
      break;
    case 'layer6':
      $("#layer-6-header").addClass("animated tada delay-500ms");
      setTimeout(function(){
        remove_animation_layer6();
      }, 3000);
      remove_animation_layer1();
      remove_animation_layer2();
      remove_animation_layer3();
      remove_animation_layer4();
      remove_animation_layer5();
  }
}

function remove_animation_layer1() {
  $("#layer-1-header").removeClass("animated fadeIn delay-0s");
}
function remove_animation_layer2(){  
  $("#about-img").removeClass("animated jello delay-0s");
}
function remove_animation_layer3(){
  $("#msg-from-jolie-img").removeClass("animated fadeIn delay-0s");
  $("#msg-from-jolie-heading").removeClass("animated bounceInDown delay-0s");
  $("#msg-from-jolie-content").removeClass("animated bounceInUp delay-0s");
}
function remove_animation_layer4(){
  $("#reel-and-more-heading").removeClass("animated fadeIn delay-0s");
  $("#video-wrapper").removeClass("animated fadeInLeft delay-0s");
  $("#video1").removeClass("animated fadeInDown delay-500ms");
  $("#video2").removeClass("animated fadeInUp delay-500ms");
  $("#video3").removeClass("animated fadeInDown delay-500ms");
  $("#video4").removeClass("animated fadeInUp delay-500ms");
  $("#praise-for-jolie").removeClass("animated fadeIn delay-500ms");
}
function remove_animation_layer5(){
  $("#layer-5-header").removeClass("animated fadeInLeft faster delay-500ms");
  $("#photos-left").removeClass("animated fadeInLeft fast delay-0s");
  $("#photos-middle-1").removeClass("animated fadeInDown fast delay-0s");
  $("#photos-middle-2").removeClass("animated fadeInUp fast delay-0s");
  $("#photos-right").removeClass("animated fadeInRight fast delay-0s");
}
function remove_animation_layer6(){
  $("#layer-6-header").removeClass("animated tada delay-500ms");
}

easeInOutCubic = function (t, b, c, d) {
	t /= d/2;
	if (t < 1) return c/2*t*t*t + b;
	t -= 2;
	return c/2*(t*t*t + 2) + b;
};

$(document).ready(function(){
  $("#layer-1-header").addClass("animated fadeIn delay-1s");
  $("#nav-icon").click(function(){
    if (document.documentElement.clientWidth >= 800){
      $("#nav-icon").toggleClass("nav-icon-click");
      $("#nav-icon-div-1").toggleClass("nav-icon-div-1-click");
      $("#nav-icon-div-2").toggleClass("nav-icon-div-2-click");
      $("#links").animate({height: 'toggle'});
    }
    else {
      $("#nav-icon").toggleClass("nav-icon-click");
      $("#nav-icon-div-1").toggleClass("nav-icon-div-1-click");
      $("#nav-icon-div-2").toggleClass("nav-icon-div-2-click");
      $("#side-nav-bar").animate({height: 'toggle'});
    }
  });

  $("#video-enlarge-close-button").click(function(){
    lightbox_close();
  });

  document.getElementById('video-enlarge-video').onclick = function(){ play_pause_video();};

  document.getElementById('lightbox-wrapper').onclick = function(event){
    if(document.getElementById("lightbox-wrapper").style.display === "block" && event.target.id != "video-enlarge-video") lightbox_close();
  };

  //-----Disable-Right-Click-Menu-On-Image----------------------------------------------------------------------
  $("body").on("contextmenu", "img", function (e) {
    return false;
  });

  //-----Disable-Alt+Left+Arrow----and------Disbale-Alt+Right+Arrow--------------------------------------------------------------
  document.onkeydown = function (e) {
    if (e.altKey && e.which == 37 || e.altKey && e.which == 39) e.preventDefault();
  };
});