function loadScript(){let o=document.querySelector(".tabs"),s=o.querySelectorAll(".tabs__button");s.forEach(t=>{t.addEventListener("click",a=>{!function r(t){const a=[...s].indexOf(t);s.forEach(e=>{e.setAttribute("aria-selected",e!==t?"false":"true");var c=$(e).attr("aria-controls");e==t&&($(".show").removeClass("show"),$(".active").removeClass("active"),document.getElementById(c).classList.add("show"),document.getElementById(c).classList.add("active"))}),o.style.setProperty("--background-offset",100*a+"%")}(t)})})}