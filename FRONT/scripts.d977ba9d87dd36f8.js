function openClose(){alert("RAWTEST"),alert(document.body.classList),document.body.classList.contains("menu-hide")?(document.body.classList.remove("menu-hide"),document.body.classList.add("menu-open"),console.log("r1")):(document.body.classList.remove("menu-open"),document.body.classList.add("menu-hide"),console.log("r2"))}function loadScript(){let s=document.querySelector(".tabs"),o=s.querySelectorAll(".tabs__button");o.forEach(e=>{e.addEventListener("click",c=>{!function a(e){const c=[...o].indexOf(e);o.forEach(t=>{t.setAttribute("aria-selected",t!==e?"false":"true");var n=$(t).attr("aria-controls");t==e&&($(".show").removeClass("show"),$(".active").removeClass("active"),document.getElementById(n).classList.add("show"),document.getElementById(n).classList.add("active"))}),s.style.setProperty("--background-offset",100*c+"%")}(e)})})}