# Back-End Developer - Mimo

Projetos relacionados ao curso "Back-End Developer" da Mimo — coleção de exercícios práticos e projetos educacionais para aprendizagem de desenvolvimento back-end. Ideal para estudantes que desejam aprimorar suas habilidades em desenvolvimento backend.

## Conteúdo principal
- Projetos focados em problemas práticos e didáticos para aprendizagem de desenvolvimento back-end.
- Estrutura organizada por tópicos e tecnologias.
- Exemplos de APIs REST, manipulação de dados e integração de serviços.

## Badges
![Licença](https://img.shields.io/github/license/GiovanniJorge/back-end-developer-mimo?style=flat-square)

## Sumário
- [Visão geral](#visão-geral)
- [Estrutura do repositório](#estrutura-do-repositório)
- [Pré-requisitos](#pré-requisitos)
- [Como instalar e executar](#como-instalar-e-executar)
- [Contribuindo](#contribuindo)
- [Licença](#licença)
- [Autor / Contato](#autor--contato)

## Visão geral
Este repositório organiza projetos em JavaScript que exemplificam conceitos de desenvolvimento back-end, incluindo manipulação de APIs, estruturação de dados, padrões de design e resolução de problemas práticos do curso.

## Estrutura do repositório
Top-level:
```text
├── README.md
├── LICENSE
├── .gitignore
├── .gitattributes
└── projetos-finais/              # Projetos finais do curso
    └── quiz/                     # Projeto de Quiz com API REST
        ├── app.js
        ├── Question.js
        ├── Quiz.js
        ├── database.js
        └── quizRoutes.js
```

### Como se encaixa:
- O repositório contém projetos práticos desenvolvidos durante o curso Back-End Developer da Mimo.
- Cada projeto está localizado em sua própria pasta dentro de `projetos-finais/`.
- Os arquivos incluem classes, rotas de API, configuração de banco de dados e arquivo principal da aplicação.
- Execute diretamente usando Node.js sem necessidade de arquivo de configuração separado em cada projeto.

## Pré-requisitos
- **Node.js** (v14 ou superior)
- **npm** ou **yarn** como gerenciador de pacotes

## Como instalar e executar

### Instalação geral
```bash
git clone https://github.com/GiovanniJorge/back-end-developer-mimo.git
cd back-end-developer-mimo
```

### Executar um projeto específico
Navegue até a pasta do projeto desejado dentro de `projetos-finais/`:
```bash
cd projetos-finais/quiz
```

Execute o projeto:
```bash
node app.js
```

### Exemplo prático:
```bash
cd projetos-finais/quiz
node app.js
```

## Contribuindo
Contribuições são bem-vindas (ex.: correções, melhorias de código, novos projetos, documentação). Fluxo sugerido:
1. Fork do repositório.
2. Criar branch com nome descritivo: `feature/nome-da-feature` ou `fix/descricao-do-fix`.
3. Fazer commits atômicos com mensagens claras seguindo padrões (ex: `feat: adiciona autenticação`).
4. Abrir Pull Request descrevendo as mudanças e o contexto.

## Licença
Este repositório utiliza a licença MIT — consulte o arquivo [LICENSE](LICENSE) na raiz.

## Autor / Contato
- **Autor:** Giovanni Jorge  
- **Repositório:** [https://github.com/GiovanniJorge/back-end-developer-mimo](https://github.com/GiovanniJorge/back-end-developer-mimo)
