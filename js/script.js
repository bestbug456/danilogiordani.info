$(document).ready(

    function () {
        $('#attr1').fadeIn(1000);

        $('#showPortfolio').click(function(){

            var divToFadeOut = ''

            
            if($('#portfolio').css("display") == 'block'){
              divToFadeOut = '#portfolio';
            }
            if($('#changefix').css("display") == 'block'){
              divToFadeOut = '#changefix';
            }
            if($('#scuola').css("display") == 'block'){
              divToFadeOut = '#scuola';
            }
            if($('#lavori').css("display") == 'block'){
              divToFadeOut = '#lavori';
            }
            if($('#contatti').css("display") == 'block'){
              divToFadeOut = '#contatti';
            }
            
            if (divToFadeOut != '') {
              $(divToFadeOut).fadeOutLeft(1000);
            };
            $('#portfolio').fadeInRight(1000);
            if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
                $("html, body").animate({ scrollTop: 510 }, 5000);
            }

            
        });
        $('#showChangefix').click(function(){
            var divToFadeOut = ''

            
            if($('#portfolio').css("display") == 'block'){
              divToFadeOut = '#portfolio';
            }
            if($('#changefix').css("display") == 'block'){
              divToFadeOut = '#changefix';
            }
            if($('#scuola').css("display") == 'block'){
              divToFadeOut = '#scuola';
            }
            if($('#lavori').css("display") == 'block'){
              divToFadeOut = '#lavori';
            }
            if($('#contatti').css("display") == 'block'){
              divToFadeOut = '#contatti';
            }
            
            if (divToFadeOut != '') {
              $(divToFadeOut).fadeOutLeft(1000);
            };

            

            $('#changefix').fadeInRight(1000);
            if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
                $("html, body").animate({ scrollTop: 510 }, 5000);
            }
        });

        $('#showLavori').click(function(){
            var divToFadeOut = ''

            
            if($('#portfolio').css("display") == 'block'){
              divToFadeOut = '#portfolio';
            }
            if($('#changefix').css("display") == 'block'){
              divToFadeOut = '#changefix';
            }
            if($('#scuola').css("display") == 'block'){
              divToFadeOut = '#scuola';
            }
            if($('#lavori').css("display") == 'block'){
              divToFadeOut = '#lavori';
            }
            if($('#contatti').css("display") == 'block'){
              divToFadeOut = '#contatti';
            }
            
            if (divToFadeOut != '') {
              $(divToFadeOut).fadeOutLeft(1000);
            };

            $('#lavori').fadeInRight(1000);
            if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
                $("html, body").animate({ scrollTop: 510 }, 5000);
            }
        });
        $('#showScuola').click(function(){
            var divToFadeOut = ''
            if($('#portfolio').css("display") == 'block'){
              divToFadeOut = '#portfolio';
            }
            if($('#changefix').css("display") == 'block'){
              divToFadeOut = '#changefix';
            }
            if($('#scuola').css("display") == 'block'){
              divToFadeOut = '#scuola';
            }
            if($('#lavori').css("display") == 'block'){
              divToFadeOut = '#lavori';
            }
            if($('#contatti').css("display") == 'block'){
              divToFadeOut = '#contatti';
            }
            
            if (divToFadeOut != '') {
              $(divToFadeOut).fadeOutLeft(1000);
            };

            

            $('#scuola').fadeInRight(1000);
            if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
                $("html, body").animate({ scrollTop: 310 }, 5000);
            }
        });
        $('#showContatti').click(function(){
            var divToFadeOut = ''
            if($('#portfolio').css("display") == 'block'){
              divToFadeOut = '#portfolio';
            }
            if($('#changefix').css("display") == 'block'){
              divToFadeOut = '#changefix';
            }
            if($('#scuola').css("display") == 'block'){
              divToFadeOut = '#scuola';
            }
            if($('#lavori').css("display") == 'block'){
              divToFadeOut = '#lavori';
            }
            if($('#contatti').css("display") == 'block'){
              divToFadeOut = '#contatti';
            }
            
            if (divToFadeOut != '') {
              $(divToFadeOut).fadeOutLeft(1000);
            };

            

            $('#contatti').fadeInRight(1000);
            if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
                $("html, body").animate({ scrollTop: 510 }, 5000);
            }
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
               // $actualEle.toggle("slide").animate({ opacity: 0 }, 1000);
               // $nextEle.animate({ opacity: 1 }, 1000).show("slide", { direction: "right" }, 1000);
        }, 4000);
        
    }
);

//WIP

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
    /*hide().slideDown(opts).animate({ opacity: 1 }, getUnqueuedOpts(opts));*/
  };
  $.fn.fadeInRight = function (opts) {
    opts = opts || {};
    $(this).animate({ opacity: 1 }, opts).show("slide", { direction: "right" }, opts);
    /*show("slide", { direction: "right" }, opts).animate({ opacity: 1 }, opts);
    /*show().slideUp(opts).animate({ opacity: 0 }, getUnqueuedOpts(opts));*/
  };
  $.fn.verticalFade = function (opts) {
    opts = opts || {};
    if ($(this).is(':visible')) {
      $(this).hideUp(opts);
    } else {
      $(this).showDown(opts);
    }
  };
}(jQuery));



