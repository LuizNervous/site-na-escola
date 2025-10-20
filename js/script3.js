const modoescuro = document.getElementById("modoescuro");
modoescuro.onclick = () => {
  document.body.classList.toggle("dark-mode");
  modoescuro.textContent = document.body.classList.contains("dark-mode") ? "☀️" : "🌙 ";
};

let idiomaAtual = "pt";

const traducoes = {
  pt: {
    title: "Sinalizações",
    main_title: "Sinalizações",
    botaoback: "Clique aqui para voltar",
    main_title: "Sinais de Mão dos Ciclistas",
    main_p1: "Os sinais de mão são uma forma essencial de comunicação no trânsito para quem pedala. Eles servem para indicar as intenções do ciclista aos motoristas e pedestres, ajudando a evitar acidentes.",
    main_p2: "➡️ Braço esquerdo estendido: conversão à esquerda.➡️ Braço direito estendido: conversão à direita.✋ Braço levantado: atenção ou parada.🖐️ Braço balançando para cima e para baixo: obstáculo à frente.👉 Braço direito levemente apontado para frente: seguindo em frente no cruzamento.",
    main_p3: "Respeitar e utilizar corretamente esses sinais é fundamental para garantir segurança e harmonia no trânsito",
    cliquetovideo: "Clique para ver um video sobre isso !",
    here: "aqui",
    footer_credit1: "Site desenvolvido pelo um grupo do IFPR",
    footer_credit2: "Direitos e créditos: Luiz Gustavo,",
    footer_credit3: "Lucas Ferreira, Kayo Motta",
    footer_contact: "Fale conosco",
    footer_email: "Email: sitenaescola1@gmail.com",
  },
  en: {
    title: "Signages",
    main_title: "Signs",
    botaoback: "Click here to go back",
    main_title: "Cyclists' Hand Signals",
    main_p1: "Hand signals are an essential form of communication in traffic for cyclists. They serve to signal the cyclist's intentions to drivers and pedestrians, helping to prevent accidents.",
    main_p2: "➡️ Left arm extended: left turn.➡️ Right arm extended: right turn.✋ Arm raised: attention or stop.🖐️ Arm swinging up and down: obstacle ahead.👉 Right arm slightly pointed forward: moving straight ahead at the intersection.",
    main_p3: "Respecting and using these signs correctly is essential to ensure safety and harmony in traffic.",
    cliquetovideo: "Click to see a video about it!",
    here: "here",
    footer_credit1: "Website developed by a group from IFPR",
    footer_credit2: "Rights and credits: Luiz Gustavo,",
    footer_credit3: "Lucas Ferreira, Kayo Motta",
    footer_contact: "Contact us",
    footer_email: "E-mail: sitenaescola1@gmail.com",
  },
  es: {
    title: "Señalizaciones",
    main_title: "Señales",
    botaoback: "Haga clic aquí para volver atrás",
    main_title: "Señales manuales de los ciclistas",
    main_p1: "Las señales manuales son una forma esencial de comunicación para los ciclistas en el tráfico. Sirven para indicar sus intenciones a conductores y peatones, ayudando a prevenir accidentes.",
    main_p2: "➡️ Brazo izquierdo extendido: giro a la izquierda. ➡️ Brazo derecho extendido: giro a la derecha. ✋ Brazo levantado: atención o parada.🖐️ Brazo balanceándose hacia arriba y hacia abajo: obstáculo adelante. 👉 Brazo derecho ligeramente apuntado hacia adelante: avanzar en línea recta en la intersección.",
    main_p3: "Respetar y utilizar correctamente estas señales es fundamental para garantizar la seguridad y la armonía en la circulación.",
    cliquetovideo: "¡Haga clic para ver un vídeo al respecto!",
    here: "aquí",
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
