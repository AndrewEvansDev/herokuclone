
// $(".pegBar img").mouseup(function(){
//     $(this).removeClass("btnDown")
// })


const questionArray = [];
const $sName = $('#sName');
const $sEmail = $('#sEmail');
const $sTextarea = $('#sTextarea');
const $submitBtn = $('#reqInfo');

class InfoRequest{
    constructor(name,email,msg){
        this.name = name;
        this.email = email;
        this.msg = msg;
    }
}

$submitBtn.click(reqInfo)
function reqInfo(){
    if($sName.val() !="" && $sEmail.val() !="" && $sTextarea.val()!=""){
        var question = new InfoRequest($sName.val(),$sEmail.val(),$sTextarea.val())
        console.log(question);
        questionArray.push(question);
        $(':input').val('');
        $('#sent').show();
        setTimeout(function(){
            $('#sent').hide();
        },3000)

    } else{
        $('#fail').show();
        setTimeout(function(){
            $('#fail').hide();
        },5000)
    }
}