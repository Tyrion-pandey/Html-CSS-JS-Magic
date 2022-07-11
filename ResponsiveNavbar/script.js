let menu = document.querySelector(".menubar");
      let btn = document.querySelector(".fas");
    btn.addEventListener("click",function(){
        menu.classList.add("menuopen");
        menu.classList.toggle("visible");
    })