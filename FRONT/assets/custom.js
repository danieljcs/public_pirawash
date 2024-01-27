function openClose(){
  console.log('RAWTEST')
  if (document.body.classList.contains("menu-close")) {
    // Si la tiene, removerla
    document.body.classList.remove("menu-close");
    document.body.classList.add("menu-open");
  }

  if (document.body.classList.contains("menu-open")) {
    // Si la tiene, removerla
    document.body.classList.remove("menu-open");
    document.body.classList.add("menu-close");
  }
}
