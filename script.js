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
 
    const translations = {
  pt: {
    main_title: "Leis de Trânsito para Ciclistas",
    dark_mode: "🌙 Modo Escuro",
    nav_intro: "Introdução",
    nav_rights: "Direitos",
    nav_safety: "Segurança",
    nav_prevention: "Prevenção",
    nav_curiosities: "Curiosidades",
    intro_title: "Introdução",
    intro_p1: "Este site tem como objetivo informar ciclistas, motoristas e pedestres sobre as leis de trânsito que envolvem o uso da bicicleta no Brasil.",
    intro_p2: "As bicicletas são veículos previstos no Código de Trânsito Brasileiro e merecem respeito e proteção.",
    intro_p3: "Nosso compromisso é promover a educação no trânsito, reforçando a importância da empatia e do compartilhamento responsável do espaço público.",
    intro_p4: "Além de orientações sobre normas e condutas, também destacamos boas práticas de convivência e iniciativas bem-sucedidas em mobilidade urbana.",
    intro_p5: "Explore nossos conteúdos, compartilhe com sua comunidade e ajude a fortalecer a cultura da paz no trânsito.",
    rights_title: "Direitos e Deveres dos Ciclistas",
    rights_p1: "O Código de Trânsito Brasileiro reconhece o ciclista como parte integrante do trânsito.",
    rights_p2: "Além dos direitos, os ciclistas também possuem responsabilidades.",
    rights_p3: "A segurança no trânsito é um compromisso coletivo.",
    safety_title: "Segurança no Trânsito",
    safety_p1: "O uso de equipamentos de segurança é essencial para a proteção do ciclista.",
    safety_p2: "Adotar atitudes responsáveis no trânsito também é parte importante da segurança.",
    safety_p3: "A visibilidade do ciclista, especialmente no período noturno, é um fator determinante para evitar acidentes.",
    safety_p4: "Veículos de grande porte apresentam pontos cegos em que o ciclista pode não ser visto.",
    prevention_title: "Prevenção de Acidentes",
    prevention_p1: "Evitar comportamentos de risco é fundamental para promover um trânsito mais seguro.",
    prevention_p2: "A base de um trânsito seguro está na educação, no respeito mútuo e na empatia.",
    prevention_p3: "Medidas simples, porém eficazes, podem salvar vidas.",
    prevention_p4: "Além das atitudes individuais, ações coletivas também são indispensáveis.",
    curiosities_title: "Curiosidades",
    curiosities_p1: "Você sabia que o uso diário da bicicleta pode reduzir em até 40% o risco de doenças cardíacas?",
    curiosities_p2: "Em cidades como Amsterdã e Copenhague, mais da metade da população usa a bicicleta como principal meio de transporte.",
    curiosities_p3: "A manutenção preventiva da bicicleta é essencial para garantir segurança e desempenho.",
    curiosities_p4: "No Brasil, o Código de Trânsito Brasileiro reconhece o ciclista como parte do trânsito e estabelece leis específicas.",
    references_title: "Referências",
    references_li1:"Código de Trânsito Brasileiro - CTB",
    references_li2:"Detran SP",
    references_li3:"Conselho Nacional de Trânsito - CONTRAN ",
    references_li4:"Observatório Nacional de Segurança Viária",
    footer_credit1: "Site desenvolvido pelo um grupo do IFPR",
    footer_credit2: "Direitos e créditos: Luiz Gustavo,",
    footer_credit3: "Lucas Ferreira, Kayo Motta",
    footer_contact: "Fale conosco",
    footer_phone: "Telefone",
    footer_email: "Email",
  },
  en: {
    main_title: "Traffic Laws for Cyclists",
    dark_mode: "🌙 Dark Mode",
    nav_intro: "Introduction",
    nav_rights: "Rights",
    nav_safety: "Safety",
    nav_prevention: "Prevention",
    nav_curiosities: "Curiosities",
    intro_title: "Introduction",
    intro_p1: "This site aims to inform cyclists, drivers, and pedestrians about traffic laws involving bicycles in Brazil.",
    intro_p2: "Bicycles are considered vehicles under the Brazilian Traffic Code and deserve respect and protection.",
    intro_p3: "Our mission is to promote traffic education, reinforcing the importance of empathy and responsible sharing of public space.",
    intro_p4: "In addition to guidance on rules and conduct, we also highlight good coexistence practices and successful urban mobility initiatives.",
    intro_p5: "Explore our content, share with your community, and help strengthen the culture of peace in traffic.",
    rights_title: "Cyclists' Rights and Duties",
    rights_p1: "The Brazilian Traffic Code recognizes cyclists as part of the traffic system.",
    rights_p2: "In addition to rights, cyclists also have responsibilities.",
    rights_p3: "Traffic safety is a collective commitment.",
    safety_title: "Traffic Safety",
    safety_p1: "Using safety equipment is essential for the protection of cyclists.",
    safety_p2: "Taking responsible actions in traffic is also an important part of safety.",
    safety_p3: "The visibility of cyclists, especially at night, is crucial to avoid accidents.",
    safety_p4: "Large vehicles have blind spots where cyclists may not be seen.",
    prevention_title: "Accident Prevention",
    prevention_p1: "Avoiding risky behaviors is essential to promote safer traffic.",
    prevention_p2: "The foundation of safe traffic lies in education, mutual respect, and empathy.",
    prevention_p3: "Simple yet effective measures can save lives.",
    prevention_p4: "Besides individual actions, collective initiatives are also essential.",
    curiosities_title: "Curiosities",
    curiosities_p1: "Did you know that daily cycling can reduce the risk of heart disease by up to 40%?",
    curiosities_p2: "In cities like Amsterdam and Copenhagen, more than half the population uses bicycles as their main mode of transport.",
    curiosities_p3: "Preventive maintenance of the bicycle is essential to ensure safety and performance.",
    curiosities_p4: "In Brazil, the Traffic Code recognizes cyclists as part of traffic and establishes specific laws.",
    references_title: "References",
    footer_credit1: "Site developed by a group from IFPR",
    footer_credit2: "Credits: Luiz Gustavo,",
    footer_credit3: "Lucas Ferreira, Kayo Motta",
    footer_contact: "Contact us",
    footer_phone: "Phone",
    footer_email: "Email",
    top_button: "⬆"
  }
};