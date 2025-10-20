const modoescuro = document.getElementById("modoescuro");
modoescuro.onclick = () => {
  document.body.classList.toggle("dark-mode");
  modoescuro.textContent = document.body.classList.contains("dark-mode") ? "☀️" : "🌙 ";
};

let idiomaAtual = "pt";

const traducoes = {
  pt: {
    title: "Nossos Curriculos",
    main_title: "Nossos Curriculos",
    bottonback: "Clique aqui para voltar",
    name1: "Luiz Gustavo Castro Neves",
    h2_name1: "Curriculo",
    name2: "Lucas Ferreira dos Santos",
    h2_name2: "Curriculo",
    name3: "Kayo Malmsteen Gabriel Ferreira Motta",
    h2_name3: "Curriculo",
    footer_credit1: "Site desenvolvido pelo um grupo do IFPR",
    footer_credit2: "Direitos e créditos: Luiz Gustavo,",
    footer_credit3: "Lucas Ferreira, Kayo Motta",
    footer_contact: "Fale conosco",
    footer_email: "Email: sitenaescola1@gmail.com",

  },
  en: {
    title: "Our Curricula",
    main_title: "Our Curricula",
    bottonback: "Click here to go back",
    name1: "Luiz Gustavo Castro Neves",
    h2_name1: "Curriculum",
    name2: "Lucas Ferreira dos Santos",
    h2_name2: "Curriculum",
    name3: "Kayo Malmsteen Gabriel Ferreira Motta",
    h2_name3: "Curriculum",
    footer_credit1: "Website developed by a group from IFPR",
    footer_credit2: "Rights and credits: Luiz Gustavo,",
    footer_credit3: "Lucas Ferreira, Kayo Motta",
    footer_contact: "Contact us",
    footer_email: "E-mail: sitenaescola1@gmail.com",
  },
  es: {
    title: "Nuestros planes de estudio",
    main_title: "Nuestros planes de estudio",
    bottonback: "Haga clic aquí para volver atrás",
    name1: "Luiz Gustavo Castro Neves",
    h2_name1: "plan de estudios",
    name2: "Lucas Ferreira dos Santos",
    h2_name2: "plan de estudios",
    name3: "Kayo Malmsteen Gabriel Ferreira Motta",
    h2_name3: "plan de estudios",
    footer_credit1: "Sitio web desarrollado por un grupo del IFPR",
    footer_credit2: "Derechos y créditos: Luiz Gustavo,",
    footer_credit3: "Lucas Ferreira, Kayo Motta",
    footer_contact: "Contáctenos",
    footer_email: "Correo: sitenaescola1@gmail.com",
  }
};
function trocarIdioma(idioma) {
  idiomaAtual = idioma;
  const t = traducoes[idiomaAtual];

  document.querySelectorAll('[data-translate]').forEach(el => {
    const chave = el.getAttribute('data-translate');
    if (t[chave]) el.textContent = t[chave];
  });
}
document.getElementById('TrocarIdioma').addEventListener('change', (e) => {
  trocarIdioma(e.target.value);
});