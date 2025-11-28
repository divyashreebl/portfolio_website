// Smooth scroll helper (optional)
function scrollToSection(id){
  const el = document.getElementById(id);
  if(el){
    el.scrollIntoView({ behavior: "smooth" });
  }
}

console.log("Divyashri Portfolio Loaded");
