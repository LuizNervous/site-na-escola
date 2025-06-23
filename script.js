 lucide.createIcons();

    const topBtn = document.getElementById("topBtn");
    window.onscroll = () => {
      topBtn.style.display = window.scrollY > 200 ? "block" : "none";
    };
    topBtn.onclick = () => window.scrollTo({ top: 0, behavior: "smooth" });

    const toggleTheme = document.getElementById("modoescuro");
    toggleTheme.onclick = () => {
      document.body.classList.toggle("dark-mode");
      toggleTheme.textContent = document.body.classList.contains("dark-mode") ? "☀️ Modo Claro" : "🌙 Modo Escuro";
    };