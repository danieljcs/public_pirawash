

function openClose(){

  if(!document.body.classList.contains("menu-open") && !document.body.classList.contains("menu-hide")){
    document.body.classList.add("menu-hide");
  }
  if(document.body.classList.contains("vertical-compact-menu")){
    document.body.classList.remove("vertical-compact-menu");
    document.body.classList.add("vertical-overlay-menu");
  }

  if (document.body.classList.contains("menu-hide")) {
    document.body.classList.remove("menu-hide");
    document.body.classList.add("menu-open");
  }else {
    document.body.classList.remove("menu-open");
    document.body.classList.add("menu-hide");
  }
}
