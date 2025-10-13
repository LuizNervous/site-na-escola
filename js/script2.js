const modoescuro= document.getElementById("modoescuro");
modoescuro.onclick  = ()=>{
    document.body.classList.toggle("dark-mode");
  toggleTheme.textContent = document.body.classList.contains("dark-mode") ? "☀️" : "🌙 ";
};