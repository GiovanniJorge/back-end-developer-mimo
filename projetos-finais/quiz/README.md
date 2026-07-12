# Quiz

Descrição
--------
Este é um projeto de API de quiz desenvolvido em **Node.js**, utilizando **Express** e **SQLite** (via `better-sqlite3`).  
A aplicação fornece endpoints para obter uma pergunta aleatória e validar respostas enviadas pelo usuário.

O projeto foi criado como exercício prático de back-end, com foco em:
- criação de rotas REST,
- organização em módulos,
- persistência de dados com banco relacional,
- e lógica de validação de respostas.

Funcionalidades
--------------
- API HTTP com Express.
- Endpoint para buscar uma pergunta aleatória.
- Endpoint para enviar resposta e verificar se está correta.
- Banco SQLite com criação automática da tabela de perguntas.
- Inserção inicial (seed) de perguntas padrão.
- Estrutura em classes (`Question` e `Quiz`) para separar responsabilidades.

Como usar (Local)
--------

### Pré-requisitos
Certifique-se de ter instalado:
- **Node.js** (versão 14.0 ou superior)
- **npm**

Verifique no terminal:
```bash
node --version
npm --version
```

### Instalação e Execução

1. Clone o repositório e acesse a pasta do projeto:
```bash
git clone https://github.com/GiovanniJorge/back-end-developer-mimo.git
cd back-end-developer-mimo/projetos-finais/quiz
```

2. Instale as dependências:
```bash
npm install
```

3. Inicie a aplicação:
```bash
node app.js
```

4. A API estará disponível em:
```text
http://localhost:3000
```

### Parando o servidor
Para encerrar, pressione `Ctrl + C` no terminal.

Como funciona
---------------------
A aplicação possui cinco arquivos principais:

1. `app.js`  
   Inicializa o Express, habilita JSON e registra as rotas em `/quiz`.

2. `quizRoutes.js`  
   Define os endpoints:
   - `GET /quiz/question`
   - `POST /quiz/submit-answer`

3. `Quiz.js`  
   Implementa a lógica de negócio:
   - busca pergunta aleatória no banco;
   - verifica se a resposta enviada está correta.

4. `Question.js`  
   Classe de modelo para representar cada pergunta com:
   - `id`
   - `question`
   - `options`
   - `correctAnswer`

5. `database.js`  
   Conecta no SQLite (`/tmp/quiz.db`), cria a tabela `questions` e insere perguntas iniciais se ainda não existirem.

API Endpoints
-------------
### `GET /quiz/question`
Retorna uma pergunta aleatória.

**Exemplo de resposta:**
```json
{
  "id": 1,
  "question": "What is the capital of France?",
  "options": "Paris, Rome, Berlin, Madrid"
}
```

### `POST /quiz/submit-answer`
Valida a resposta enviada para uma pergunta.

**Body (JSON):**
```json
{
  "questionId": 1,
  "answer": "Paris"
}
```

**Exemplo de resposta:**
```json
{
  "correct": true
}
```

Exemplos de uso com cURL
------------------------
Buscar pergunta:
```bash
curl -X GET http://localhost:3000/quiz/question
```

Enviar resposta:
```bash
curl -X POST http://localhost:3000/quiz/submit-answer \
  -H "Content-Type: application/json" \
  -d '{"questionId":1,"answer":"Paris"}'
```

Arquivos principais
-------------------
- `app.js` — inicialização do servidor e configuração das rotas.
- `quizRoutes.js` — endpoints da API.
- `Quiz.js` — lógica de seleção de pergunta e correção.
- `Question.js` — classe de estrutura da pergunta.
- `database.js` — configuração do banco SQLite e seed inicial.

Tecnologias
-----------
- **JavaScript (Node.js)**
- **Express**
- **better-sqlite3** (SQLite)

Estrutura do Projeto
--------------------
```text
projetos-finais/quiz/
├── app.js
├── quizRoutes.js
├── Quiz.js
├── Question.js
└── database.js
```

Possíveis melhorias
-------------------
- Retornar `options` como array em vez de string separada por vírgulas.
- Criar endpoint para cadastrar novas perguntas.
- Adicionar pontuação por sessão de usuário.
- Implementar testes automatizados.
- Tratar melhor cenários de erro (ex.: pergunta inexistente).

Solução de Problemas
--------------------
**Problema:** erro ao iniciar com `node app.js`  
- **Solução:** verifique se as dependências foram instaladas com `npm install`.

**Problema:** porta 3000 já está em uso  
- **Solução:** encerre o processo que está usando a porta ou altere a porta no `app.js`.

**Problema:** banco não persiste entre ambientes  
- **Solução:** o caminho atual é `/tmp/quiz.db`; em alguns sistemas esse diretório pode ser temporário. Considere usar um caminho local do projeto.

Licença
-------
Nenhuma licença específica foi adicionada até o momento.  
Se quiser permitir reuso explícito, adicione um arquivo `LICENSE` (ex.: MIT).

Autor
-----
Giovanni Jorge — [GiovanniJorge/back-end-developer-mimo](https://github.com/GiovanniJorge/back-end-developer-mimo)
