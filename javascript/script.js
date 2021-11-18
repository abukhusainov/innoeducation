$(function(){
    $('.owl-carousel').owlCarousel({
        stagePadding: 50,
        loop:true,
        margin:10,
        nav:true,
        navText:['<div class="control"><i class="fal fa-angle-left"></i></div>','<div class="control"><i class="fal fa-angle-right"></i></div>'],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:6
            }
        }
    });


    

    $('.lang').click(function(){
        $('.dropdown-itemm').toggleClass('drop_active');
        $('.icon').toggleClass('rotate');



        if($('.dropdown-itemm2').hasClass('drop_active2')){
            $('.dropdown-itemm2').removeClass('drop_active2');
            $('.first-line').removeClass('first-line-active');
            $('.second-line').removeClass('second-line-active');
        }



    }); 
    
    $('.burger').click(function(){
    $('.first-line').toggleClass('first-line-active');
    $('.second-line').toggleClass('second-line-active');
    $('.dropdown-itemm2').toggleClass('drop_active2');




    if($('.dropdown-itemm').hasClass('drop_active')){
        $('.dropdown-itemm').removeClass('drop_active');
        $('.icon').removeClass('rotate');
    };





   if ($(window).width() < 1200) {
        $('.dropdown-itemm2').removeClass('dropdown-itemm2');
        $('.dropdown-child').addClass('dsnone');
    };

        $('.menu_ul').toggleClass('active');
        $('.menu_ul').click(function(){
            $('.menu_ul').removeClass('active');
            $('.burger').removeClass('burger_active');
            $('.first-line').removeClass('first-line-active');
            $('.second-line').removeClass('second-line-active');
        });
});

function removeClassesChangeWidth() {  
    if ( $(window).width() < 357) { 
        $('.for-display-none').removeClass('dsnone');
        $('.for-displ').addClass('dsnone'); 
        }
}    
removeClassesChangeWidth()
});


$('.count').each(function () {
    $(this).prop('Counter',0).animate({
            Counter: $(this).text()
    }, {
            duration: 4000,
            easing: 'swing',
            step: function (now) {
                    $(this).text(Math.ceil(now));
            }
    });
});


$('.play_pause').click(function () {
    var mediaVideo = $("#video").get(0);
    if (mediaVideo.paused) {
        mediaVideo.play();
        $('.button-controls2').removeClass('dsnone');
        $('.button-controls1').addClass('dsnone');
    } else {
        mediaVideo.pause();
        $('.button-controls1').removeClass('dsnone');
        $('.button-controls2').addClass('dsnone');
   };

});


$('.play_pause2').click(function () {
    var mediaVideo = $("#video2").get(0);
    if (mediaVideo.paused) {
        mediaVideo.play();
        $('.button-controls2').removeClass('dsnone');
        $('.button-controls1').addClass('dsnone');
    } else {
        mediaVideo.pause();
        $('.button-controls1').removeClass('dsnone');
        $('.button-controls2').addClass('dsnone');
        
   };

});

$(document).ready(function(){

    $('#video').on('ended',function(){
        $('.button-controls1').removeClass('dsnone');
        $('.button-controls2').addClass('dsnone');
    
    });
    });
    $('.video').click(function(){
        $('.play-pause').toggleClass('dsnone');
        });
        $('.video').click(function(){
            $('.play-pause2').toggleClass('dsnone');
            });
            
    $(function() {
	
  

        class tab{
            constructor(argument1){
                $(argument1).find('.answer').hide();
                $(argument1).find('.accordions').click(function (){
                     $(argument1).find(this).next().slideToggle(200);
                });
                
            }
        }
        let wrapper = $('.accordion'); 
     
        for(let i of wrapper){
           i = new tab(i)
        }

        class tabs{
            constructor(argument){
                $(argument).find('.angel').click(function(){
                    $(argument).find('.angel').toggleClass('activer').not($(this)).removeClass('activer');
                });
            }
        }

        let wrap = $('.accordion'); 
     
        for(let i of wrap){
           i = new tabs(i)
        }
    });
    $(document).ready(function(){
    $('.members').tilt({
        maxTilt:3,
        glare: true,
        maxGlare: .5,
    });
})









