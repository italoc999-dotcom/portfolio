// Constante para cada idioma
const translations = {
    pt: {
      titulo: "Olá, Sou o Ítalo Silva",
      descricao: "Estudante de programação, me identifiquei com a área, ainda no estágio, trabalhando muito com JS.",
      descricao1: "Desenvolvedor Full-Stack em formação, apaixonado por tecnologia e sempre buscando mais conhecimento.",
      descricao2: "Sempre procurando aprender com desafios e novos projetos, seja Back ou Front-end.",
      descricao3: "Sou fã de música, animes, games e HQs.",
      contato: "Entre em contato",
      formacaoTitulo: "Formações",
      formacao: "Sou formado em Automação Industrial, pela ETEC de São José dos Campos - Aquarius.",
      formacao1: "Também, formado em Técnico em Desenvolvimento de Sistemas, também pela ETEC.",
      formacao2: "Além disso, possuo vários cursos na área de programação, feitos na Alura, sendo Front-end e Back-end. Também pela Data Science Academy, sendo Python para Data Science e Fundamentos da Engenharia De Dados.",
      meusProjetos: "Meus Projetos",
      sobreMim: "Sobre Mim",
      formacoes: "Formações",
      webProjects: "Projetos Web",
      mobileProjects: "Projetos Mobile",
      logicProjects: "Lógica de Programação",
      showAllProjects: "Mostrar Todos os Projetos",
    },
en: {
    titulo: "Hello, I'm Ítalo Silva",
    descricao: "A programming student who discovered a passion for technology. Currently working as an intern, gaining hands-on experience with JavaScript.",
    descricao1: "Aspiring Full-Stack Developer, passionate about technology and always eager to expand my knowledge.",
    descricao2: "Always looking to learn through challenges and new projects, working on both front-end and back-end development.",
    descricao3: "I'm a fan of music, anime, video games, and comics.",
    contato: "Get in Touch",
    formacaoTitulo: "Education",
    formacao: "I have a technical degree in Industrial Automation from ETEC São José dos Campos – Aquarius.",
    formacao1: "I also hold a technical degree in Systems Development from ETEC.",
    formacao2: "Additionally, I have completed several programming courses at Alura, covering both front-end and back-end development. At Data Science Academy, I have also studied Python for Data Science and Fundamentals of Data Engineering.",
    meusProjetos: "My Projects",
    sobreMim: "About Me",
    formacoes: "Education",
    webProjects: "Web Projects",
    mobileProjects: "Mobile Projects",
    logicProjects: "Python",
    showAllProjects: "View All Projects",
},

es: {
    titulo: "Hola, soy Ítalo Silva",
    descricao: "Estudiante de programación que descubrió su pasión por la tecnología. Actualmente estoy realizando prácticas profesionales y adquiriendo experiencia con JavaScript.",
    descricao1: "Desarrollador Full-Stack en formación, apasionado por la tecnología y siempre dispuesto a ampliar mis conocimientos.",
    descricao2: "Siempre busco aprender a través de nuevos retos y proyectos, tanto en el desarrollo front-end como en el back-end.",
    descricao3: "Soy fan de la música, el anime, los videojuegos y los cómics.",
    contato: "Ponte en contacto",
    formacaoTitulo: "Formación académica",
    formacao: "Tengo formación técnica en Automatización Industrial por la ETEC São José dos Campos – Aquarius.",
    formacao1: "También tengo formación técnica en Desarrollo de Sistemas por la ETEC.",
    formacao2: "Además, he realizado varios cursos de programación en Alura, tanto de desarrollo front-end como back-end. En Data Science Academy, también he estudiado Python para Ciencia de Datos y Fundamentos de Ingeniería de Datos.",
    meusProjetos: "Mis proyectos",
    sobreMim: "Sobre mí",
    formacoes: "Formación académica",
    webProjects: "Proyectos web",
    mobileProjects: "Proyectos móviles",
    logicProjects: "Python",
    showAllProjects: "Ver todos los proyectos",
}
};

const languageSelector = document.getElementById("idioma");

languageSelector.addEventListener("change", (event) => {
  const selectedLang = event.target.value;
  translatePage(selectedLang);
});

function translatePage(lang) {
  const elements = document.querySelectorAll("[data-i18n]");
  
  elements.forEach((element) => {
    const key = element.getAttribute("data-i18n");
    element.textContent = translations[lang][key];
  });
}
  