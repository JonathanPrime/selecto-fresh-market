let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');
let header = document.querySelector('.header-2');

menu.addEventListener('click', () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');

    if(window.scrollY > 150){
        header.classList.add('active');
    }else{
        header.classList.remove('active');
    }

}


popupWhatsApp = () => {
  
   let btnClosePopup = document.querySelector('.closePopup');
   let btnOpenPopup = document.querySelector('.whatsapp-button');
   let popup = document.querySelector('.popup-whatsapp');
   let sendBtn = document.getElementById('send-btn');
 
   btnClosePopup.addEventListener("click",  () => {
     popup.classList.toggle('is-active-whatsapp-popup')
   })
   
   btnOpenPopup.addEventListener("click",  () => {
     popup.classList.toggle('is-active-whatsapp-popup')
      popup.style.animation = "fadeIn .6s 0.0s both";
   })
   
   sendBtn.addEventListener("click", () => {
   let msg = document.getElementById('whats-in').value;
   let relmsg = msg.replace(/ /g,"%20");
     //just change the numbers "1515551234567" for your number. Don't use +001-(555)1234567     
    window.open('https://wa.me/573158902557?text='+relmsg, '_blank'); 
   
   });
 
   /* Open pop-up in 15 seconds */
   /* setTimeout(() => {
     popup.classList.toggle('is-active-whatsapp-popup');
   }, 15000); */
 
 }

popupWhatsApp();