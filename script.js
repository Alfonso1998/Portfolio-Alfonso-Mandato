const home=document.getElementById("home");
const about=document.getElementById("about");
const progetti=document.getElementById("progetti");
const contatti=document.getElementById("contatti");
const skill=document.getElementById("skill");
const hamburger=document.getElementById("hamburger");
const menu=document.getElementById("menu");





/*COLORE DI DEFAULT DELLA PAGINA :GIALLO*/

window.addEventListener('scroll', function() {
        
    if(window.pageYOffset<=630 ){
        home.style.backgroundColor="#ffff00d6";
        home.style.borderRadius="15px";
        about.style.backgroundColor="";
        skill.style.backgroundColor="";
        progetti.style.backgroundColor="";
        contatti.style.backgroundColor="";
    
}else if(window.pageYOffset>630 && window.pageYOffset<1350){
    about.style.backgroundColor="#ffff00d6";
    about.style.borderRadius="15px";
    home.style.backgroundColor="";
    skill.style.backgroundColor="";
    progetti.style.backgroundColor="";
    contatti.style.backgroundColor="";


}else if(window.pageYOffset>1350 && window.pageYOffset<2300){
    about.style.backgroundColor="";
    home.style.backgroundColor="";
    skill.style.backgroundColor="#ffff00d6";
    skill.style.borderRadius="15px"; 
    progetti.style.backgroundColor="";
    contatti.style.backgroundColor="";


}else if(window.pageYOffset>2300 && window.pageYOffset<4578){
    about.style.backgroundColor="";
    home.style.backgroundColor="";
    progetti.style.backgroundColor="#ffff00d6";
    progetti.style.borderRadius="15px"; 
    skill.style.backgroundColor="";
    contatti.style.backgroundColor="";


}else if(window.pageYOffset>4578 && window.pageYOffset<5000){
  about.style.backgroundColor="";
  home.style.backgroundColor="";
  contatti.style.backgroundColor="#ffff00d6";
  contatti.style.borderRadius="15px"; 
  skill.style.backgroundColor="";
  progetti.style.backgroundColor="";
}
   
  })


  function verificaEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }
  
  function controlloForm() {
    
    var email = document.forms["formmail"]["email"].value;
   
    var msg = document.forms["formmail"]["msg"].value;
  
    if (email == "" || msg == "") {
      alert("I campi Email e Messaggio sono obbligatori!");
      return false;
    }
    else if (verificaEmail(email) !== true) {
      alert("L'indirizzo email non sembra corretto!");
      return false;  
    }else{
      return true;
    }
  }



/*HAMBURGER APRI/CHIUDI MENU' */

hamburger.addEventListener("click",()=>{
menu.classList.toggle("open");
});





