# Back-End Developer - Mimo

<p align="center">
    <a href="https://nodejs.org/">
        <img src="https://img.shields.io/badge/Node.js-18.x-339933?logo=node.js&logoColor=white" alt="Node.js">
    </a>
    <a href="https://expressjs.com/pt-br/">
        <img src="https://img.shields.io/badge/Express-4.x-000000?logo=express&logoColor=white" alt="Express">
    </a>
    <a href="https://www.sqlite.org/">
        <img src="https://img.shields.io/badge/SQLite-better--sqlite3-003B57?logo=sqlite&logoColor=white" alt="SQLite">
    </a>
    <a href="#">
        <img alt="Status" src="https://img.shields.io/badge/status-concluído-brightgreen" />
    </a>
    <a href="LICENSE">
        <img src="https://img.shields.io/badge/license-MIT-blue" alt="License">
    </a>
</p>

## Sumário

- [Descrição do Projeto](#descrição-do-projeto)
- [Arquitetura e Estrutura do Repositório](#arquitetura-e-estrutura-do-repositório)
- [Como Executar Localmente](#como-executar-localmente)
- [Uso e Exemplos](#uso-e-exemplos)
- [Troubleshooting / FAQ](#troubleshooting--faq)
- [Contribuição](#contribuição)
- [Autor](#autor)
- [Licença](#licença)

## Descrição do Projeto

Este repositório reúne projetos práticos do curso de desenvolvimento back-end da Mimo, com foco em aprender conceitos fundamentais de construção de APIs, lógica de negócio, organização de código e persistência de dados. O objetivo principal é consolidar a prática com exemplos executáveis e bem estruturados.

O projeto principal presente no repositório é uma API de quiz em Node.js, que utiliza Express para servir endpoints HTTP e SQLite para armazenar perguntas e validar respostas. A proposta é demonstrar, de forma didática, como separar responsabilidades em módulos e como implementar uma aplicação backend simples, funcional e fácil de evoluir.

## Arquitetura e Estrutura do Repositório

A organização do repositório é a seguinte:

```text
back-end-developer-mimo/
├── LICENSE
├── README.md
├── .gitignore
├── .gitattributes
└── projetos-finais/
    └── quiz/
        ├── app.js
        ├── Question.js
        ├── Quiz.js
        ├── database.js
        ├── quizRoutes.js
        └── README.md
```

### Componentes principais

- `app.js`: inicia o servidor Express e registra as rotas da aplicação.
- `quizRoutes.js`: define os endpoints da API.
- `Quiz.js`: contém a lógica principal de seleção aleatória de perguntas e validação de respostas.
- `Question.js`: representa o modelo da pergunta.
- `database.js`: cria e popula a base SQLite com dados iniciais.

### Fluxo de dados

O fluxo da aplicação é simples e direto:

1. O cliente envia uma requisição para a API.
2. A rota correspondente em `quizRoutes.js` recebe a chamada.
3. `Quiz.js` consulta o banco SQLite por meio de `database.js`.
4. O resultado é convertido em JSON e devolvido ao cliente.

## Como Executar Localmente

### Pré-requisitos

- Node.js 18 ou superior
- npm ou yarn
- Terminal local

### Configuração de Ambiente

Este projeto não utiliza arquivo `.env` para execução local. A configuração do banco SQLite é feita diretamente no código, usando o caminho `/tmp/quiz.db`.

### Instalação

1. Clone o repositório:

```bash
git clone https://github.com/GiovanniJorge/back-end-developer-mimo.git
```

2. Acesse a pasta do projeto:

```bash
cd back-end-developer-mimo/projetos-finais/quiz
```

3. Instale as dependências:

```bash
npm install express better-sqlite3
```

### Execução

Inicie a API com:

```bash
node app.js
```

A aplicação ficará disponível em:

```text
http://localhost:3000
```

## Uso e Exemplos

### Buscar uma pergunta aleatória

```bash
curl -X GET http://localhost:3000/quiz/question
```

Resposta esperada:

```json
{
  "id": 1,
  "question": "What is the capital of France?",
  "options": "Paris, Rome, Berlin, Madrid"
}
```

### Enviar resposta

```bash
curl -X POST http://localhost:3000/quiz/submit-answer \
  -H "Content-Type: application/json" \
  -d '{"questionId":1,"answer":"Paris"}'
```

Resposta esperada:

```json
{
  "correct": true
}
```

## Troubleshooting / FAQ

### Problema: erro ao rodar `node app.js`
**Solução:** verifique se as dependências foram instaladas com `npm install express better-sqlite3`.

### Problema: porta 3000 já está em uso
**Solução:** encerre o processo que está usando a porta ou altere a porta configurada em `app.js`.

### Problema: banco não é criado ou não persiste
**Solução:** o projeto usa `/tmp/quiz.db`; em alguns ambientes esse diretório pode ser temporário. Ajuste o caminho em `database.js` conforme necessidade.

### Problema: módulo não encontrado
**Solução:** confirme que você está dentro da pasta do projeto e que as dependências foram instaladas corretamente.

## Contribuição

Contribuições são bem-vindas. Para participar:

1. Faça um fork do repositório.
2. Crie uma branch para sua modificação:
   ```bash
   git checkout -b feature/nova-funcionalidade
   ```
3. Faça commits claros e objetivos.
4. Abra um Pull Request descrevendo a melhoria ou correção.

## Autor

- Nome: Giovanni Jorge
- GitHub: [@GiovanniJorge](https://github.com/GiovanniJorge)

## Licença

Este projeto está licenciado sob a licença MIT. Consulte o arquivo [LICENSE](LICENSE) na raiz do repositório para mais detalhes.
