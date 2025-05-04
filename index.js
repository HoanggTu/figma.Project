// let title = document.getElementById("title");
// console.log("h1 ne")


document.addEventListener("DOMContentLoaded", function(){
    const menuToggle = document.getElementById("menu-toggle");
    const mobileNav = document.getElementById("mobile-nav");
    const openIcon = document.getElementById("open-icon");
    const closeIcon = document.getElementById("close-icon");
    menuToggle.addEventListener("click", function (){
        mobileNav.classList.toggle("active");
        if(mobileNav.classList.contains("active")){
            openIcon.style.display ="none";
            closeIcon.style.display ="block";
        }else{
            openIcon.style.display ="block";
            closeIcon.style.display ="none";
        }
    });
// });
// document.addEventListener("DOMContentLoaded", function(){
    let scrollButton = document.querySelector("#scroll-button");
    scrollButton.addEventListener("click", function (event){
        event.preventDefault();    
        window.scrollTo({
          top:0,
          behavior:"smooth",
        });
    });
});
