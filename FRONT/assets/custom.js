

function openClose(){

  alert(document.body.classList.contains("menu-open"))
  if(!document.body.classList.contains("menu-open") && !document.body.classList.contains("menu-hide")){
    document.body.classList.add("menu-hide");
    alert("RAW1")
  }
  if(document.body.classList.contains("vertical-compact-menu")){
    document.body.classList.remove("vertical-compact-menu");
    document.body.classList.add("vertical-overlay-menu");
    alert("RAW2")
  }

  if (document.body.classList.contains("menu-hide")) {
    document.body.classList.remove("menu-hide");
    document.body.classList.add("menu-open");
    alert("RAW3")
  }else {
    document.body.classList.remove("menu-open");
    document.body.classList.add("menu-hide");
    alert("RAW4")
  }
  alert(document.body.classList.contains("menu-open"))
}
