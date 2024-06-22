let tablinks =document.getElementsByClassName("tab-links");
let tabcontents=document.getElementsByClassName("tab-contents");
let navbar=document.getElementById("sidemenu");


function opentab(tabname){
    for(let tablink of tablinks){

        tablink.classList.remove("active-link");
        
    }

    for(let tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
        document.getElementById(tabname).classList.add("active-tab")
    }
   event.target.classList.add("active-link");

}
function closemenu(){
    navbar.style.right="-200px";
}
function openmenu(){
    navbar.style.right="0px";

}