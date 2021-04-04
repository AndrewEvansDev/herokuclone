$(document).ready(function() {
    $("div#img-slide div.slide:first").show();
    setInterval(function(){ Next($('div#img-slide div.slide:visible'))}, 10000);

});
function Next(slide) {
    slide.fadeOut(0);
    if(slide.next().length != '0') {
        slide.next().fadeIn();
    } else {
        $('div#img-slide div.slide:first').fadeIn();
    }
}

$('#ba1').show();
$('#s1').click(function(){
    $('#pupbuttonSlide img:visible').hide();
    $('#ba1').show();
})
$('#s2').click(function(){
    $('#pupbuttonSlide img:visible').hide();
    $('#ba2').show();
})
$('#s3').click(function(){
    $('#pupbuttonSlide img:visible').hide();
    $('#ba3').show();
})
$('#s4').click(function(){
    $('#pupbuttonSlide img:visible').hide();
    $('#ba4').show();
})
$('#s5').click(function(){
    $('#pupbuttonSlide img:visible').hide();
    $('#ba5').show();
    
})
$('#s6').click(function(){
    $('#pupbuttonSlide img:visible').hide();
    $('#ba6').show();
})
$(".pegBar img").hover(
    function() {
        $(this).addClass("spinner");
    }, function() {
        $(this).removeClass("spinner");
    }
);
$(".pegBar img").mousedown(function(){
    $(this).addClass("btnDown")
})
