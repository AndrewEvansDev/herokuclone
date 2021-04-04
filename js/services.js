const questionArr = [];
const $qName = $('#qName');
const $qEmail = $('#qEmail');
const $qTextarea = $('#qTextarea');
const $submitBtn = $('#submitQuestion');


class Question{
    constructor(name,email,msg){
        this.name = name;
        this.email = email;
        this.msg = msg;
    }
}

$(document).keypress(function(e) {
    if(e.keyCode==13){addQuestion};
})


$submitBtn.click(addQuestion)
function addQuestion(){
    if($qName.val() !="" && $qEmail.val() !="" && $qTextarea.val()!=""){
        var dQuestion = new Question($qName.val(),$qEmail.val(),$qTextarea.val())
        console.log(dQuestion);
        questionArr.push(dQuestion);
        $(':input').val('');
        $('#msgSent').show();
        setTimeout(function(){
            $('#msgSent').hide();
        },3000)

    } else{
        $('#msgFail').show();
        setTimeout(function(){
            $('#msgFail').hide();
        },5000)
    }
}

const $fullServBtn = $('#fullServIcon');
const $basicCutBtn = $('#basicCutIcon');
const $showerBtn = $('#showerIcon');
const $nailClipBtn = $('#nailClipIcon');

const $infoRequestTab = $('#infoRequestTab')
const $fullServTab = $('#fullServTab');
const $basicCutTab = $('#basicCutTab');
const $showerTab = $('#showerTab');
const $nailClipTab = $('#nailClipTab');

const $fullServMsg = $('#fullServMsg');
const $basicCutMsg = $('#basicCutMsg');
const $nailClipMsg = $('#nailClipMsg');
const $showerMsg = $('#showerMsg');
const $requestInfo = $('#requestInfo');

$($fullServBtn).click(function(){
    $fullServMsg.show();
    $basicCutMsg.hide();
    $nailClipMsg.hide();
    $showerMsg.hide();
    $(':root').css('--prim-color','#553d2d').css('--sec-color','#aac2d2');
})
$($basicCutBtn).click(function(){
    $fullServMsg.hide();
    $basicCutMsg.show();
    $nailClipMsg.hide();
    $showerMsg.hide();
    $(':root').css('--prim-color','#A77757').css('--sec-color','#5888a8');
})

$($showerBtn).click(function(){
    $fullServMsg.hide();
    $basicCutMsg.hide();
    $nailClipMsg.hide();
    $showerMsg.show();
    $(':root').css('--prim-color','#855f46').css('--sec-color','#7aa0b9');
})
$($nailClipBtn).click(function(){
    $fullServMsg.hide();
    $basicCutMsg.hide();
    $nailClipMsg.show();
    $showerMsg.hide();
    $(':root').css('--prim-color', '#422f23').css('--sec-color','#bdd0dc');
})
$($fullServTab).click(function(){
    $fullServMsg.show();
    $basicCutMsg.hide();
    $nailClipMsg.hide();
    $showerMsg.hide();
    $requestInfo.hide();
    $(':root').css('--prim-color','#553D2D').css('--sec-color','#aac2d2');
})
$($basicCutTab).click(function(){
    $fullServMsg.hide();
    $basicCutMsg.show();
    $nailClipMsg.hide();
    $showerMsg.hide();
    $requestInfo.hide();
    $(':root').css('--prim-color','#A77757').css('--sec-color','#5888a8');
})
$($nailClipTab).click(function(){
    $fullServMsg.hide();
    $basicCutMsg.hide();
    $showerMsg.hide();    
    $nailClipMsg.show();
    $requestInfo.hide();
    $(':root').css('--prim-color','#422f23').css('--sec-color','#bdd0dc');
})
$($showerTab).click(function(){
    $fullServMsg.hide();
    $basicCutMsg.hide();
    $showerMsg.show();    
    $nailClipMsg.hide();
    $requestInfo.hide();
    $(':root').css('--prim-color', '#855f46').css('--sec-color','#7aa0b9');
})
$($infoRequestTab).click(function(){
    $fullServMsg.hide();
    $basicCutMsg.hide();
    $showerMsg.hide();    
    $nailClipMsg.hide();
    $requestInfo.show();
    $(':root').css('--prim-color', '#644634').css('--sec-color','#ede3dd');
})

$('.serviceText p').mousedown(function(){
    $('.serviceText p').css('cursor','grabbing')
})
$('.serviceText p').mouseup(function(){
    $('.serviceText p').css('cursor','grab')
})

$("#todoText").keypress(function(e){
    if(e.key ==="Enter"){
        saveTodo()
    }
})






