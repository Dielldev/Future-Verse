const btns = document.querySelectorAll(".nav-btn");
const sliders = document.querySelectorAll(".video-slide");
var slideNav = function(manual){

    btns.forEach((btn) =>{
        btn.classList.remove("active")
    });
   
     sliders.forEach((btn) =>{
        btn.classList.remove("active")
     });

    btns[manual].classList.add('active');
    sliders[manual].classList.add('active');
    }
     
    btns.forEach((btn, i) =>{
        btn.addEventListener("click", () =>{
            slideNav(i);
        })
     });

    window.addEventListener("scroll", function(){
        var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
    })

  