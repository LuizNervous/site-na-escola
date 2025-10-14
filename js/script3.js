const modoescuro= document.getElementById("modoescuro");
modoescuro.onclick  = () => {
    document.body.classList.toggle("dark-mode");
  modoescuro.textContent = document.body.classList.contains("dark-mode") ? "☀️" : "🌙 ";
};

let idiomaAtual=pt;

const traducoes = {
  pt:{
    title:"Sinalizações",
    botaoback:"Clique aqui para voltar",
    main_title:"Sinais de Mão dos Ciclistas",
    main_p1:"Os sinais de mão são uma forma essencial de comunicação no trânsito para quem pedala. Eles servem para indicar as intenções do ciclista aos motoristas e pedestres, ajudando a evitar acidentes.",
    main_p2:"➡️ Braço esquerdo estendido: conversão à esquerda.➡️ Braço direito estendido: conversão à direita.✋ Braço levantado: atenção ou parada.🖐️ Braço balançando para cima e para baixo: obstáculo à frente.👉 Braço direito levemente apontado para frente: seguindo em frente no cruzamento.",
    main_p3:"Respeitar e utilizar corretamente esses sinais é fundamental para garantir segurança e harmonia no trânsito",
    cliquetovideo:"Clique para ver um video sobre isso !",
    here:"aqui",
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
function trocarIdioma(idioma) {
  idiomaAtual = idioma;
  const t = traducoes[idiomaAtual];

  document.querySelectorAll('[data-translate]').forEach(el => {
    const chave = el.getAttribute('data-translate');
    if (t[chave]) el.textContent = t[chave];
  });
}

// Detecta mudança no seletor
document.getElementById('TrocarIdioma').addEventListener('change', (e) => {
  trocarIdioma(e.target.value);
});
