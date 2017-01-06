//Pancake intro effect -----------------------------

var looper;
var degrees = 0;
var timer = 0;
var test = true;
var cookie = Cookies.get("animated");

function rotateAnimation(el,speed){ 
    
    if (cookie == 1){
        
        var hide = $("#spinning").attr("src", "pics/pancake.png");
        
        hide.addClass("hidden");
        
        looper = setTimeout('rotateAnimation(\''+el+'\','+speed+')',speed);
        degrees++;
        
        $("#tray").delay(50).animate({top: 20}, 1500,
            function(){setTimeout(hidden, 50);});       
        
        
   } else {      
        

        var elem = document.getElementById(el);
        if(navigator.userAgent.match("Chrome")){
            elem.style.WebkitTransform = "rotate("+degrees+"deg)";
        } else if(navigator.userAgent.match("Firefox")){
            elem.style.MozTransform = "rotate("+degrees+"deg)";
        } else if(navigator.userAgent.match("MSIE")){
            elem.style.msTransform = "rotate("+degrees+"deg)";
        } else if(navigator.userAgent.match("Opera")){
            elem.style.OTransform = "rotate("+degrees+"deg)";
        } else {
            elem.style.transform = "rotate("+degrees+"deg)";
        }

        looper = setTimeout('rotateAnimation(\''+el+'\','+speed+')',speed);
        degrees++;
        
        if(degrees > 359){
            degrees = 1;
            timer++;
        }
        if(timer >= 1){
            $("#move").animate({left: 0}, 3000);
            $("#tray").delay(3000).animate({top: 20}, 2000,
            function(){setTimeout(hidden, 50);});
        } 
    }

}


//Tray display & pancake hide---------------------

function hidden(){   
    
    var hide = $("#spinning").attr("src", "pics/pancake.gif");
    
    $("#menu").removeClass("hidden");    
    
    setTimeout(function(){
        hide.addClass("hidden");
    }, 5000);
    
}

//Mobile menu-------------------------------------------
$(document).ready(function(){
    $('#launch').click( function(){ 
        
        if ($('#mobile-menu').hasClass('collapsed')){
            
            $('#mobile-menu').removeClass('collapsed').slideDown('fast');       $('#mobile-menu-ul').removeClass('hidden');
            
        } else {
            $('#mobile-menu').addClass('collapsed');
            $('#mobile-menu-ul').addClass('hidden');
        }           
            
    });
});



    















