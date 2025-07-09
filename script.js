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
    intro_p1: "Este site tem como objetivo informar ciclistas, motoristas e pedestres sobre as leis de trânsito que envolvemo uso da bicicleta no Brasil. Abordamos os principais direitos e deveres dos ciclistas, regras de segurança, ecomo garantir uma convivência harmônica nas vias públicas",
    intro_p2: "As bicicletas são veículos previstos no Código de Trânsito Brasileiro e merecem respeito e proteção. Umtrânsito seguro depende da consciência de todos. Aqui, mostramos como todos podem contribuir para vias maishumanas e organizadas.",
    intro_p3: "Nosso compromisso é promover a educação no trânsito, reforçando a importância da empatia e docompartilhamento responsável do espaço público. Seja você um ciclista experiente, alguém que está começando apedalar, um motorista ou um pedestre, encontrará aqui informações claras e atualizadas para tomar decisõesmais seguras e conscientes no dia a dia.",
    intro_p4: "Além de orientações sobre normas e condutas, também destacamos boas práticas de convivência e iniciativasbem-sucedidas em mobilidade urbana. Acreditamos que a bicicleta é uma aliada na construção de cidades maissustentáveis, acessíveis e saudáveis — e que a informação é a melhor ferramenta para transformar o trânsito em um ambiente mais justo e colaborativo.",
    intro_p5: "Explore nossos conteúdos, compartilhe com sua comunidade e ajude a fortalecer a cultura da paz no trânsito.Juntos, podemos fazer a diferença.",
    rights_title: "Direitos e Deveres dos Ciclistas",
    rights_p1: "O Código de Trânsito Brasileiro (CTB) reconhece o ciclista como parte integrante do trânsito, com direitos e deveres assim como os demais usuários das vias públicas. O ciclista tem direito ao uso da via e deve ser respeitado por motoristas e pedestres. Quando houver ciclovias, ciclofaixas ou acostamentos apropriados, os ciclistas devem utilizá-los, promovendo maior segurança para todos. Nas vias compartilhadas, é essencial o respeito mútuo entre motoristas e ciclistas, sendo obrigatória a manutenção de uma distância lateral mínima de 1,5 metro durante ultrapassagens, conforme determina o CTB.",
    rights_p2: "Além dos direitos, os ciclistas também possuem responsabilidades. É fundamental que respeitem as sinalizações de trânsito, não trafeguem na contramão, e sinalizem com antecedência qualquer mudança de direção, contribuindo para um trânsito mais previsível e seguro. O uso de equipamentos obrigatórios, como campainha, espelho retrovisor do lado esquerdo e sinalização noturna (refletores dianteiros, traseiros e laterais), é indispensável, especialmente ao pedalar em horários de pouca visibilidade ou à noite.",
    rights_p3: "A segurança no trânsito é um compromisso coletivo. Motoristas, ciclistas e pedestres devem agir com atenção e empatia, reconhecendo que todos têm o direito de ir e vir com segurança. Promover a convivência harmoniosa entre os diversos modos de transporte é essencial para a construção de cidades mais humanas e sustentáveis.",
    safety_title: "Segurança no Trânsito",
    safety_p1: "O uso de equipamentos de segurança é essencial para a proteção do ciclista. Itens como capacete, luzes dianteiras e traseiras, refletores nas rodas e na parte traseira da bicicleta, além de coletes ou faixas refletivas, são fundamentais para aumentar a visibilidade e reduzir os riscos de acidentes. Embora o capacete não seja obrigatório por lei em todas as situações, seu uso é altamente recomendado, pois protege contra impactos em caso de queda ou colisão.",
    safety_p2: "Adotar atitudes responsáveis no trânsito também é parte importante da segurança. Respeitar o fluxo da via, ou seja, circular sempre no mesmo sentido dos veículos, é uma regra básica que previne conflitos e colisões. Evitar pedalar sobre calçadas — exceto onde for expressamente permitido ou onde houver sinalização específica — contribui para a segurança dos pedestres e evita multas. Sinalizar com os braços antes de fazer conversões ou parar, assim como indicar presença com a campainha, são gestos simples que melhoram a comunicação no trânsito.",
    safety_p3: "A visibilidade do ciclista, especialmente no período noturno, é um fator determinante para evitar acidentes. Manter as luzes acesas e utilizar roupas claras ou com elementos refletivos ajuda os motoristas a perceberem a presença do ciclista a tempo de tomar decisões seguras. Além disso, é importante estar atento a buracos, irregularidades no asfalto, bueiros abertos e portas de carros estacionados que possam ser abertas inesperadamente.",
    safety_p4: "Veículos de grande porte, como ônibus e caminhões, apresentam pontos cegos em que o ciclista pode não ser visto. Por isso, é fundamental manter uma distância segura desses veículos, evitando ultrapassagens arriscadas ou deslocamentos muito próximos. Conduzir com atenção, manter as duas mãos no guidão e os olhos atentos ao entorno é a chave para um trajeto seguro e tranquilo. O cuidado com a própria segurança também contribui para a segurança de todos no trânsito.",
    prevention_title: "Prevenção de Acidentes",
    prevention_p1: "Evitar comportamentos de risco é fundamental para promover um trânsito mais seguro e harmonioso para todos. Motoristas jamais devem ameaçar, pressionar ou “fechar” ciclistas — essas atitudes além de desrespeitosas, são extremamente perigosas e configuram infrações graves segundo o Código de Trânsito Brasileiro. A pressa ou a impaciência nunca justificam colocar a vida de alguém em risco. O mesmo vale para os pedestres, que devem evitar caminhar sobre ciclovias e ciclofaixas, locais exclusivos para o trânsito de bicicletas, salvo em casos de travessia sinalizada ou onde a legislação permitir.",
    prevention_p2: "A base de um trânsito seguro está na educação, no respeito mútuo e na empatia entre todos os usuários da via. Cada um tem seu espaço e seu tempo, e reconhecer isso é o primeiro passo para reduzir conflitos e acidentes. Promover atitudes positivas, como a cortesia e a paciência, ajuda a criar um ambiente urbano mais amigável e acessível, incentivando o uso da bicicleta como meio de transporte sustentável.",
    prevention_p3: "Medidas simples, porém eficazes, podem salvar vidas. Manter distância segura de outros veículos e obstáculos, evitar o uso do celular ou fones de ouvido enquanto pedala (para manter a atenção total no ambiente), e realizar revisões periódicas na bicicleta — como checar os freios, pneus, correntes e iluminação — são cuidados básicos que fazem toda a diferença. Uma bicicleta em boas condições técnicas é essencial para evitar falhas durante o trajeto.",
    prevention_p4: "Além das atitudes individuais, ações coletivas como campanhas de conscientização, programas educativos em escolas e empresas, e a melhoria da infraestrutura urbana são indispensáveis. Sinalização clara, ciclovias bem planejadas, iluminação adequada e fiscalização efetiva contribuem diretamente para a redução de acidentes e para a valorização da mobilidade ativa. Quando todos fazem sua parte, o trânsito se torna mais seguro, humano e eficiente.",
    curiosities_title: "Curiosidades",
    curiosities_p1: "🚴 **Você sabia que o uso diário da bicicleta pode reduzir em até 40% o risco de doenças cardíacas?** Pedalar regularmente é uma excelente forma de exercício aeróbico, que fortalece o coração, melhora a circulação sanguínea e ajuda a controlar o colesterol e a pressão arterial. Além disso, o ciclismo também contribui para o controle do peso, o aumento da resistência física e a liberação de endorfinas, que promovem a sensação de bem-estar. Ou seja, ao adotar a bicicleta como parte da rotina, você cuida da saúde do corpo e da mente. ",
    curiosities_p2: "🌍 **Em cidades como Amsterdã, na Holanda, e Copenhague, na Dinamarca, mais da metade da população usa a bicicleta como principal meio de transporte.** Esses locais são exemplos de planejamento urbano voltado para a sustentabilidade, com infraestrutura de alta qualidade, como ciclovias bem sinalizadas, estacionamentos para bicicletas e políticas públicas que incentivam o uso da bike. O resultado é uma redução significativa na emissão de poluentes, menos congestionamentos e uma melhor qualidade de vida para a população. Esses modelos demonstram que investir em mobilidade ativa é uma escolha inteligente para o futuro das cidades.",
    curiosities_p3: "🔧 **A manutenção preventiva da bicicleta é essencial para garantir segurança e desempenho.** É recomendável verificar regularmente os freios, que devem estar firmes e responsivos; os pneus, que precisam estar calibrados e sem desgaste excessivo; e a corrente, que deve estar limpa e lubrificada. Pequenos cuidados como esses evitam falhas mecânicas inesperadas, reduzem o risco de acidentes e aumentam a durabilidade da bicicleta. Ter uma rotina de revisão, mesmo básica, é fundamental para quem pedala com frequência.",
    curiosities_p4: "🚦 **No Brasil, o Código de Trânsito Brasileiro (CTB) reconhece o ciclista como parte do trânsito e estabelece leis específicas para sua proteção.** Por exemplo, os veículos devem manter uma distância mínima de 1,5 metro ao ultrapassar bicicletas, e os ciclistas têm direito de circular em ciclovias, ciclofaixas e, na ausência delas, no canto direito da pista. No entanto, o que realmente faz a diferença é o respeito mútuo entre motoristas, ciclistas e pedestres. A empatia, a paciência e a consciência coletiva são fundamentais para tornar o trânsito mais seguro e harmonioso para todos.",
    references_title: "Referências",
    references_li1: "Código de Trânsito Brasileiro - CTB",
    references_li2: "Detran SP",
    references_li3: "Conselho Nacional de Trânsito - CONTRAN ",
    references_li4: "Observatório Nacional de Segurança Viária",
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
    intro_p1: "This website aims to inform cyclists, drivers, and pedestrians about traffic laws involving the use of bicycles in Brazil. We cover the main rights and duties of cyclists, safety rules, and how to ensure harmonious coexistence on public roads.",
    intro_p2: "Bicycles are recognized as vehicles under the Brazilian Traffic Code and deserve respect and protection. Safe traffic depends on everyone's awareness. Here, we show how everyone can contribute to more humane and organized roads.",
    intro_p3: "Our commitment is to promote traffic education, reinforcing the importance of empathy and the responsible sharing of public space. Whether you're an experienced cyclist, just starting out, a driver, or a pedestrian, you'll find clear and up-to-date information here to make safer and more informed decisions every day.",
    intro_p4: "In addition to guidance on rules and conduct, we also highlight good coexistence practices and successful urban mobility initiatives. We believe that the bicycle is an ally in building more sustainable, accessible, and healthy cities — and that information is the best tool for transforming traffic into a fairer and more collaborative environment.",
    intro_p5: "Explore our content, share it with your community, and help strengthen a culture of peace in traffic. Together, we can make a difference.",
    rights_title: "Rights and Duties of Cyclists",
    rights_p1: "The Brazilian Traffic Code (CTB) recognizes cyclists as integral parts of traffic, with rights and duties just like other users of public roads. Cyclists have the right to use the road and must be respected by drivers and pedestrians. When there are bike lanes, cycle paths, or suitable shoulders, cyclists should use them to promote greater safety for all. On shared roads, mutual respect between drivers and cyclists is essential, and a minimum lateral distance of 1.5 meters must be maintained during overtaking, as required by the CTB.",
    rights_p2: "In addition to rights, cyclists also have responsibilities. It is essential that they obey traffic signs, avoid riding against traffic, and signal any changes in direction in advance, contributing to more predictable and safer traffic. The use of mandatory equipment, such as a bell, left-side rearview mirror, and nighttime visibility items (front, rear, and side reflectors), is crucial, especially when cycling at night or in low-visibility conditions.",
    rights_p3: "Traffic safety is a collective responsibility. Drivers, cyclists, and pedestrians must act with attention and empathy, recognizing that everyone has the right to move around safely. Promoting harmonious coexistence among different modes of transport is essential to building more humane and sustainable cities.",
    safety_title: "Traffic Safety",
    safety_p1: "Using safety equipment is essential for cyclists' protection. Items such as helmets, front and rear lights, wheel and rear reflectors, and reflective vests or bands are key to increasing visibility and reducing accident risks. Although wearing a helmet is not legally required in all situations, it is highly recommended, as it provides protection in the event of a fall or collision.",
    safety_p2: "Adopting responsible behavior in traffic is also a key part of safety. Respecting traffic flow — that is, always riding in the same direction as other vehicles — is a basic rule that prevents conflicts and collisions. Avoid riding on sidewalks — except where expressly allowed or signposted — to ensure pedestrian safety and avoid fines. Signaling with your arms before turning or stopping, as well as indicating your presence with a bell, are simple gestures that improve communication in traffic.",
    safety_p3: "Cyclist visibility, especially at night, is a key factor in preventing accidents. Keeping lights on and wearing light-colored or reflective clothing helps drivers see cyclists in time to make safe decisions. It's also important to watch out for potholes, uneven pavement, open manholes, and car doors that might suddenly open.",
    safety_p4: "Large vehicles like buses and trucks have blind spots where cyclists may not be seen. Thats why its crucial to keep a safe distance from these vehicles, avoiding risky overtaking or riding too closely. Paying attention, keeping both hands on the handlebars, and being alert to your surroundings are the keys to a safe and smooth ride. Taking care of your own safety also helps keep everyone safer in traffic.",
    prevention_title: "Accident Prevention",
    prevention_p1: "Avoiding risky behavior is essential to promote safer and more harmonious traffic for everyone. Drivers should never threaten, pressure, or cut off cyclists — these actions are not only disrespectful but also extremely dangerous and are considered serious violations under the Brazilian Traffic Code. Being in a hurry or impatient never justifies endangering someone's life. The same applies to pedestrians, who should avoid walking in bike lanes or paths, except when crossing at marked or permitted points.",
    prevention_p2: "The foundation of safe traffic lies in education, mutual respect, and empathy among all road users. Everyone has their space and their timing, and recognizing this is the first step toward reducing conflicts and accidents. Promoting positive behaviors, such as courtesy and patience, helps create a more friendly and accessible urban environment, encouraging the use of bicycles as a sustainable mode of transport.",
    prevention_p3: "Simple yet effective measures can save lives. Keeping a safe distance from other vehicles and obstacles, avoiding using cell phones or headphones while cycling (to maintain full attention), and performing regular bicycle maintenance — such as checking brakes, tires, chains, and lights — are basic precautions that make a big difference. A bicycle in good working condition is essential to avoid malfunctions during the ride.",
    prevention_p4: "In addition to individual actions, collective efforts such as awareness campaigns, educational programs in schools and workplaces, and improved urban infrastructure are indispensable. Clear signage, well-planned bike lanes, proper lighting, and effective enforcement contribute directly to reducing accidents and promoting active mobility. When everyone does their part, traffic becomes safer, more humane, and more efficient.",
    curiosities_title: "Curiosities",
    curiosities_p1: "🚴 **Did you know that daily bicycle use can reduce the risk of heart disease by up to 40%?** Regular cycling is an excellent form of aerobic exercise that strengthens the heart, improves blood circulation, and helps control cholesterol and blood pressure. Additionally, cycling contributes to weight management, increased physical endurance, and the release of endorphins, which promote a sense of well-being. In short, by making cycling part of your routine, you're taking care of both your body and mind.",
    curiosities_p2: "🌍 **In cities like Amsterdam (Netherlands) and Copenhagen (Denmark), more than half the population uses bicycles as their main means of transportation.** These cities are examples of sustainable urban planning, with high-quality infrastructure such as well-marked bike lanes, bike parking areas, and public policies that encourage cycling. The result is significantly lower emissions, less traffic congestion, and a better quality of life for residents. These models show that investing in active mobility is a smart choice for the future of cities.",
    curiosities_p3: "🔧 **Preventive bicycle maintenance is essential to ensure safety and performance.** It's recommended to regularly check the brakes (which should be firm and responsive), tires (which should be properly inflated and not overly worn), and the chain (which should be clean and lubricated). Small precautions like these prevent mechanical failures, reduce accident risks, and increase your bikes lifespan. Having a basic maintenance routine is fundamental for frequent riders.",
    curiosities_p4: "🚦 **In Brazil, the Brazilian Traffic Code (CTB) recognizes cyclists as part of traffic and establishes specific laws for their protection.** For example, vehicles must maintain a minimum distance of 1.5 meters when overtaking bicycles, and cyclists have the right to ride in bike lanes, cycle paths, or, in their absence, on the right side of the road. However, what truly makes a difference is mutual respect among drivers, cyclists, and pedestrians. Empathy, patience, and collective awareness are key to making traffic safer and more harmonious for everyone.",
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