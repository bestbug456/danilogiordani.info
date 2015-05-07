$(document).ready(

    function () {
        $('#attr1').fadeIn(1000);


        $('#showPortfolio').click(function(){
            $('html, body').animate({
           'scrollTop':   $('#anchorPortfolio').offset().top
         }, 2000);
        });
        $('#showLavori').click(function(){
            $('html, body').animate({
           'scrollTop':   $('#anchorLavori').offset().top
         }, 2000);
        });
        $('#showScuola').click(function(){
            $('html, body').animate({
           'scrollTop':   $('#anchorScuola').offset().top
         }, 2000);
        });
        $('#showContatti').click(function(){
            $('html, body').animate({
           'scrollTop':   $('#anchorContatti').offset().top
         }, 2000);
        });
        $('#showChangefix').click(function(){
            $('html, body').animate({
           'scrollTop':   $('#anchorChangefix').offset().top
         }, 2000);
        });

        $('#showPortfoliomobile').click(function(){
            $('html, body').animate({
           'scrollTop':   $('#anchorPortfolio').offset().top
         }, 2000);
        });
        $('#showLavorimobile').click(function(){
            $('html, body').animate({
           'scrollTop':   $('#anchorLavori').offset().top
         }, 2000);
        });
        $('#showScuolamobile').click(function(){
            $('html, body').animate({
           'scrollTop':   $('#anchorScuola').offset().top
         }, 2000);
        });
        $('#showContattimobile').click(function(){
            $('html, body').animate({
           'scrollTop':   $('#anchorContatti').offset().top
         }, 2000);
        });
        $('#showChangefixmobile').click(function(){
            $('html, body').animate({
           'scrollTop':   $('#anchorChangefix').offset().top
         }, 2000);
        });

        var $element = '#attr';
        var $MAX_ELE = 4;
        var $i=1;
        var $actualEle="";
        var $nextEle="";
        setInterval(function () {
            if ($i==$MAX_ELE){
                $($('#attr4')).fadeOut(1500);
                $i=1;
                $nextEle =$($element+$i);
                $nextEle.delay(1500).fadeIn(1500);
            }else{
                $actualEle = $($element + $i);
                $nextEle =$($element+($i+1));
                $i = $i +1;

                $actualEle.fadeOut(1500);
                $nextEle.delay(1500).fadeIn(1500);
            }
        }, 4000);
        
    }
);


//WIP
/*
(function ($) {



  var getUnqueuedOpts = function (opts) {
    return {
      queue: false,
      duration: opts.duration,
      easing: opts.easing
    };
  };
  $.fn.fadeOutLeft = function (opts) {
    opts = opts || {};
    $(this).show().slideUp(opts).animate({ opacity: 0 }, getUnqueuedOpts(opts));
    /*hide().slideDown(opts).animate({ opacity: 1 }, getUnqueuedOpts(opts));
  };
  $.fn.fadeInRight = function (opts) {
    opts = opts || {};
    $(this).animate({ opacity: 1 }, opts).show("slide", { direction: "right" }, opts);
    /*show("slide", { direction: "right" }, opts).animate({ opacity: 1 }, opts);
    /*show().slideUp(opts).animate({ opacity: 0 }, getUnqueuedOpts(opts));
  };
  $.fn.verticalFade = function (opts) {
    opts = opts || {};
    if ($(this).is(':visible')) {
      $(this).hideUp(opts);
    } else {
      $(this).showDown(opts);
    }
  };
}(jQuery));*/



