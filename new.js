//variables
const mayowa = document.querySelector(".mayowa"),
      btn = document.querySelector(".btn"),
       close = document.querySelector(".close");

 btn.addEventListener("click", openMayowa);
 close.addEventListener("click",closeMayowa);
 mayowa.addEventListener("click",closeMayowa); 
 window.addEventListener("keyup",closeMayowa);   

 //open mmodal
 function openMayowa(e){
    e.preventDefault();
    mayowa.style.display = "block";
 }
 //close mmodal
 function closeMayowa(event){
    if(event.key){
        if(event.key==="Escape"){
            mayowa.style.display = "none";
        }
        
    } else{
        mayowa.style.display = "none";

    }
    

 }