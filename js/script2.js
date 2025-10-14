const modoescuro= document.getElementById("modoescuro");
modoescuro.onclick  = () => {
    document.body.classList.toggle("dark-mode");
  modoescuro.textContent = document.body.classList.contains("dark-mode") ? "☀️" : "🌙 ";
};

let idiomaAtual=pt;

const traducoes = {
  pt:{



    footer_credit1: "Site desenvolvido pelo um grupo do IFPR",
    footer_credit2: "Direitos e créditos: Luiz Gustavo,",
    footer_credit3: "Lucas Ferreira, Kayo Motta",
    footer_contact: "Fale conosco",
    footer_email: "Email: sitenaescola1@gmail.com",
  },
  en:{

  },
  es:{

  }
};