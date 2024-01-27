function openClose(){
  console.log('RAWTEST')
  if (document.body.classList.contains("menu-hide")) {
    // Si la tiene, removerla
    document.body.classList.remove("menu-hide");
    document.body.classList.add("menu-open");
    console.log("r1")
  }

  if (document.body.classList.contains("menu-open")) {
    // Si la tiene, removerla
    document.body.classList.remove("menu-open");
    document.body.classList.add("menu-hide");
    console.log("r2")
  }
}
