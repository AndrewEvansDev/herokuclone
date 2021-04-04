const salon={
    name:'The Pampered Pup',
    address:{
        city:'Kelso',
        street:'West Main St',
        number:'300',
        state:'WA'
    },
    hours:{
        open:'9:00 am',
        close:'5:00 pm'
    },
    pets:[]
}


var {name,address:{city,street,number,state},hours:{open,close}}=salon; 

$('.footer-container').html(`
    <div class="footer-item"><img src="img/pamperedpuplogo.webp"></div>
    <div class="footer-item"><a href="https://www.google.com/maps/dir//300%20West%20Main%20St,%20Kelso,%20WA%2098626" target="_blank">${number} ${street}, ${city}, ${state}</a></div>
    <div class="footer-item">Hours: ${open} to ${close}</div>
    `);

c=0;
class Pet{
    constructor(name,age,gender,breed,service,owner,phone,type){
        this.name=name;
        this.age=age;
        this.gender=gender;
        this.breed=breed;
        this.service=service;
        this.owner=owner;
        this.phone=phone;
        this.price=0;
        this.type=type;
        this.id=c++;
    }
}

//create register function


// get the value from inputs and store them in vars
var txtName=document.getElementById('petName');
var txtAge=document.getElementById('petAge');
var txtBreed=document.getElementById('petBreed');
var txtGender=document.getElementById('petGender');
var txtService=document.getElementById('petService');
var txtOwner=document.getElementById('ownerName');
var txtPhone=document.getElementById('ownerPhone');
var txtType=document.getElementById('type');



function register(){
    if(txtName.value !="" && txtAge.value !="" && txtBreed.value!=""){
        var thePet=new Pet(txtName.value,txtAge.value,txtGender.value,txtBreed.value,txtService.value,txtOwner.value,txtPhone.value,txtType.value);
        salon.pets.push(thePet);
        displayTable(thePet);
        clear();
        $('#alert-box').removeClass('inactive');
        setTimeout(function(){
            $('#alert-box').addClass('inactive');
        },3000)
    }else{
        alert("finish the form!");
    }
}

function clear(){
    txtName.value="";
    txtAge.value="";
    txtBreed.value="";
    txtService.value="";
    txtOwner.value="";
    txtPhone.value="";
}

function profitCalculation(){
    var sum=0;
    for(var i=0;i<salon.pets.length;i++){
        sum=sum+salon.pets[i].price;
    }
    document.getElementById('profits').innerHTML=`<p id="profit" class="profit">Profits: $${sum}</p>`;
}

function deletePet(petId){
    console.log(petId+'deleted');
    //select row with the pet
    
    var tr=$('#'+petId)
    var indexDelete;
    //search for it

    for(let i = 0;i<salon.pets.length;i++){
        var selected=salon.pets[i];
        if(selected.id===petId){
            indexDelete=i;
        }
    }
    //delete from array
    salon.pets.splice(indexDelete,1);
    //delete from html
    tr.remove();
    $('#delete-box').removeClass('inactive');
        setTimeout(function(){
            $('#delete-box').addClass('inactive');
        },3000)
}

function searchPet(){
    var ss = $('#searchPet').val();
    var searchString=ss.toLowerCase();
    salon.pets.forEach((aPet)=>{
        if(aPet.name.toLowerCase().includes(searchString)||aPet.type.toLowerCase().includes(searchString)){
            $('#'+aPet.id).removeClass('inactive');
        }else{
            $('#'+aPet.id).addClass('inactive');
        }
    }
)}



function init(){
    
    var scooby=new Pet("Scooby",50,"Male","Dane","full","Shaggy","555-555-555","dog",1);
    var scrapy=new Pet("Scrappy",40,"Male","Dane","shower","Shaggy","555-555-555","dog",2);
    var lassie=new Pet("Lassie",50,"Female","Golden Retriever","full","Jeff Baskins","555-555-555","dog",2);
    var irwin=new Pet("Irwin",10,"Male","Australian","nails","Simon Bolivar","555-555-555","dog",2);
    salon.pets.push(scooby);
    salon.pets.push(scrapy);
    salon.pets.push(lassie);
    salon.pets.push(irwin)
    // create pets 
    displayTable(scooby);
    displayTable(scrapy);
    displayTable(irwin);
    displayTable(lassie);
    profitCalculation();
    $('#registerBtn').on('click',register);
    $('#searchBtn').on('click',searchPet);
    $('#alert-box').addClass('inactive');
    $('#delete-box').addClass('inactive');
    $('#searchPet').keypress(function(e){
        if(e.key==="Enter"){
            searchPet();
        }
    })
}
    $('#searchPet').on('keyup',searchPet)

window.onload=init;

