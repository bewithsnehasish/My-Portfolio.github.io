 // Sticky Navigation Bar
 let nav = document.querySelector("nav")

 let val;

 window.onscroll = function(){
     if(document.documentElement.scrollTop > 20){
         nav.classList.add("sticky");
     }else{
         nav.classList.remove("sticky")
     }
 }

 // Side Navigation Bar js
 let body = document.querySelector("body");
 let navBar = document.querySelector(".navbar");
 let menuBtn = document.querySelector(".menu-btn");
 let cancelBtn = document.querySelector(".cancel-btn");

 menuBtn.onclick = function (){
     navBar.classList.add("active");
     menuBtn.style.opacity= "0";
     menuBtn.style.pointerEvents= "none";
     body.style.overflowX="hidden";
 }

 cancelBtn.onclick = function (){
     navBar.classList.remove("active");
     menuBtn.style.opacity = "1";
     menuBtn.style.pointerEvents = "auto" ;
     body.style.overfIowX = "auto";

 }

 // Side Navigation Bar Close While we Click the Navigation Bar
 let navLinks = document.querySelectorAll(".menu li a ")
 for(var i = 0; i < navLinks.length; i++){
     navLinks[i].addEventListener("click" , function(){
         navBar.classList.remove("active");
         menuBtn.style.opacity = "1";
         menuBtn.style.pointerEvents = "auto";
     })

 }

