$(document).ready(function () {
        
    $('.historyNav li:eq(0)').find('a').addClass('spy');

    $('.history').find('.his2020s').addClass('boxMove')

    var smh= $('.historyNav').offset().top;  
    var h1= $('.his2010s').offset().top-50;
    var h2= $('.his2000s').offset().top-50;
    var h3= $('.his1990s').offset().top-50;
    var h4= $('.his1980s').offset().top-50;
    
    //sticky
    $(window).on('scroll',function(){
        var scroll = $(window).scrollTop();
     
        // $('.text').text(scroll);
        
        //sticky menu 
        if(scroll>smh-10){ 
            $('.historyNav').addClass('navOn'); 
            $('header').hide();
        }else{
            $('.historyNav').removeClass('navOn');
            $('header').show();
        }


    
    //spy
    $('.historyNav li').find('a').removeClass('spy');
    
         if(scroll>=0 && scroll<h1){ 
            $('.historyNav li:eq(0)').find('a').addClass('spy');
         
            $('.his2020s').addClass('boxMove');
   
        }else if(scroll>=h1 && scroll<h2){
            $('.historyNav li:eq(1)').find('a').addClass('spy');
         
            $('.his2010s').addClass('boxMove');

        }else if(scroll>=h2 && scroll<h3){
            $('.historyNav li:eq(2)').find('a').addClass('spy');
  
            $('.his2000s').addClass('boxMove');

        }else if(scroll>=h3 && scroll<h4){
            $('.historyNav li:eq(3)').find('a').addClass('spy');
      
            $('.his1990s').addClass('boxMove');

        }else if(scroll>=h4){
            $('.historyNav li:eq(4)').find('a').addClass('spy');

            $('.his1980s').addClass('boxMove');}
         
        });

        $('.historyNav ul li a').click(function(e){ 
            e.preventDefault(); 
    
            var value=0;
    
            if($(this).hasClass('link1')){ 
                value= $('.his2020s').offset().top-50;  
            }else if($(this).hasClass('link2')){
                value= $('.his2010s').offset().top-50;
            }else if($(this).hasClass('link3')){
                value= $('.his2000s').offset().top-50; 
            }else if($(this).hasClass('link4')){
                value= $('.his1990s').offset().top-50; 
            }else if($(this).hasClass('link5')){
                value= $('.his1980s').offset().top-50; 
            }


            $("html,body").stop().animate({"scrollTop":value},1000);
        });
});