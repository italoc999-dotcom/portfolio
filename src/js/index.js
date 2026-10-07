// Variáveis 
const botaoMostrarProjetos = document.querySelector('.btn-mostrar-projetos');
const botaoProjetosMobile = document.querySelector('.btn-mostrar-projetos-mobile');
const botaoProjetosWeb = document.querySelector('.btn-mostrar-projetos-web');
const botaoProjetosPython = document.querySelector('.btn-mostrar-projetos-logica');
const projetos = document.querySelectorAll('.projeto');
const projetosMobile = document.querySelectorAll('.projeto.mobile');
const projetosWeb = document.querySelectorAll('.projeto.web');
const projetosPython = document.querySelectorAll('.projeto.python');

// Funções Toogle 
botaoProjetosMobile.addEventListener('click', () => {
    projetosMobile.forEach(projeto => {
        projeto.classList.toggle('mobile-ativo');
    });
    botaoProjetosMobile.classList.toggle('selecionado');
});

botaoProjetosWeb.addEventListener('click', () => {
    projetosWeb.forEach(projeto => {
        projeto.classList.toggle('web-ativo');
    });
    botaoProjetosWeb.classList.toggle('selecionado');
});


botaoProjetosPython.addEventListener('click', () => {
    projetosPython.forEach(projeto => {
        projeto.classList.toggle('python-ativo');
    });
    botaoProjetosPython.classList.toggle('selecionado');
});

// Função Para Adicionar Todos os Projetos
botaoMostrarProjetos.addEventListener('click', () => {
    const todosAtivos = botaoMostrarProjetos.classList.contains('todos-ativos');

    if (todosAtivos) {
        projetos.forEach(projeto => {
            projeto.classList.remove('web-ativo');
        });

        botaoMostrarProjetos.classList.remove('todos-ativos');

        botaoMostrarProjetos.innerHTML = 'Mostrar Todos os Projetos';

    } else {
        projetos.forEach(projeto => {
            projeto.classList.add('web-ativo');
        });

        botaoMostrarProjetos.classList.add('todos-ativos');

        botaoMostrarProjetos.innerHTML = 'Mostrar Menos';

    }
});
