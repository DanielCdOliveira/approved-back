# <p align = "center"> Projeto Approved </p>

<p align = "center">
   <img src="https://img.shields.io/badge/author-Daniel Oliveira-4dae71?style=flat-square" />
   <img src="https://img.shields.io/github/languages/count/DanielCdOliveira/projeto20-repoprovas?color=4dae71&style=flat-square" />
</p>

# :clipboard: Descrição

## Já ficou perdido tentando se organizar na hora dos estudos?

## Approved é uma aplicação para planejamento de estudo. Nela você pode:

- Agrupar matéria e tópicos por pastas;
- Criar um planner de estudos semanal
- Salvar os conteúdos estudados no dia
- Marcar tópicos como concluídos
- Agendar revisão de tópicos

---

## :computer: Tecnologias e Conceitos

- REST APIs
- JWTs
- Node.js
- TypeScript
- Postgresql
- Prisma
- Jest
- Heroku

---

## :rocket: Deploy

- [Deploy no Heroku (back-end)](https://approved-back.herokuapp.com)
- [Deploy na Vercel (front-end)](https://approved-front.vercel.app/)

---

## :rocket: Rotas

### Rotas de autenticação

```yml
POST /signup
    - Rota para cadastrar um novo usuário
    - headers: {}
    - body:{
        "email": "lorem@gmail.com",
        "senha": "loremipsum",
        "name": "loremipsum"
}
```
```yml
POST /sign-in
    - Rota para fazer login
    - headers: {}
    - body: {
    "email": "lorem@gmail.com",
    "senha": "loremipsum"
    }
```

### Rotas de pastas

```yml
POST /folder (autenticada)
    - Rota para criar pasta de estudos
    - headers: {"Authorization": "Bearer $token" }
    - body: {
        "name": "Nome da pasta"
}
```
```yml
GET /folder (autenticada)
    - Rota para listar pastas do usuário
    - headers: { "Authorization": "Bearer $token" }
    - body: {}
```
```yml
GET /folder/:id (autenticada)
    - Rota para listar pasta (pelo id)
    - headers: { "Authorization": "Bearer $token" }
    - body: {}
```
```yml
DELETE /folder/:id (autenticada)
    - Rota para deletar pasta (pelo id)
    - headers: { "Authorization": "Bearer $token" }
    - body: {}
```

### Rotas de matérias

```yml
POST /subject (autenticada)
    - Rota para criar matéria
    - headers: {"Authorization": "Bearer $token" }
    - body: {
        "name": "Nome da matéria",
        "folderId": <id da pasta (Int)>,
        "isDone": boolean
}
```
```yml
DELETE /subject/:id (autenticada)
    - Rota para deletar matéria (pelo id)
    - headers: { "Authorization": "Bearer $token" }
    - body: {}
```
### Rotas de tópicos
```yml
POST /topic (autenticada)
    - Rota para criar matéria
    - headers: {"Authorization": "Bearer $token" }
    - body: {
        "name": "Nome da matéria",
        "folderId": <id da pasta (Int)>,
        "subjectId": <id da matéria (Int)>
        "isDone": boolean
}
```
```yml
POST /topic/:id (autenticada)
    - Rota para concluir tópico
    - headers: {"Authorization": "Bearer $token" }
    - body: {}
```
```yml
DELETE /topic/:id (autenticada)
    - Rota para deletar matéria (pelo id)
    - headers: { "Authorization": "Bearer $token" }
    - body: {}
```

### Rotas de estudos

```yml
POST /study (autenticada)
    - Rota para criar matéria
    - headers: {"Authorization": "Bearer $token" }
    - body: {
        "folderId": <id da pasta (Int)>,
        "subjectId": <id da matéria (Int)>,
        "topicId": <id do tópico (Int)>
}
```
```yml
GET /study/:id (autenticada)
    - Rota para lista todos estudos de uma pasta pelo seu id
    - headers: {"Authorization": "Bearer $token" }
    - body: {}
```
```yml
DELETE /study/:id (autenticada)
    - Rota para deletar estudo (pelo id)
    - headers: { "Authorization": "Bearer $token" }
    - body: {}
```

### Rotas de planners

```yml
POST /planner (autenticada)
    - Rota para criar planner
    - headers: {"Authorization": "Bearer $token" }
    - body: {
        "folderId": <id da pasta (Int)>,
        "subjectId": <id da matéria (Int)>,
        "topicId": <id do tópico (Int)>,
        "weekDay": <dia da semana (Int, 0=domingo)>
}
```
```yml
GET /planner/:id (autenticada)
    - Rota para lista todos planner de uma pasta pelo seu id
    - headers: {"Authorization": "Bearer $token" }
    - body: {}
```
```yml
GET /planner (autenticada)
    - Rota para lista todos planner de um usuario pelo seu token
    - headers: {"Authorization": "Bearer $token" }
    - body: {}
```
```yml
DELETE /planner/:id (autenticada)
    - Rota para deletar planners (pelo id)
    - headers: { "Authorization": "Bearer $token" }
    - body: {}
```

### Rotas de revisões

```yml
POST /review (autenticada)
    - Rota para criar revisão
    - headers: {"Authorization": "Bearer $token" }
    - body: {
        "folderId": <id da pasta (Int)>,
        "subjectId": <id da matéria (Int)>,
        "topicId": <id do tópico (Int)>,
        "date": <data DD/MM/YYYY>
}
```
```yml
GET /review (autenticada)
    - Rota para lista todas revisões de um usuario pelo seu token
    - headers: {"Authorization": "Bearer $token" }
    - body: {}
```
```yml
DELETE /review/:id (autenticada)
    - Rota para deletar revisão (pelo id)
    - headers: { "Authorization": "Bearer $token" }
    - body: {}
```

---

## 🏁 Rodando a aplicação

Certifique-se que voce tem a ultima versão estável do [Node.js](https://nodejs.org/en/download/) e [npm](https://www.npmjs.com/) rodando localmente.

Primeiro, faça o clone desse repositório na sua maquina:

```
git clone https://github.com/DanielCdOliveira/approved-back.git
```
ou
```
git clone git@github.com:DanielCdOliveira/approved-back.git
```

## Back-end


```
npm install
```

Finalizado o processo, é só inicializar o servidor:

> Para subir a aplicação em ambiente de desenvolvimento:

```
npm run dev
```

> Para subir a aplicação de testes de integração:

- é necessario criar um arquivo **.env.test** para rodar esse comando

```
npm run test
```

> Para subir a aplicação de testes unitários:

- é necessario criar um arquivo **.env.test** para rodar esse comando

```
npm run test:unit
```

> Para subir a aplicação para testes com cypress(front-end):

- é necessario criar um arquivo **.env.test** para rodar esse comando

```
npm run dev:test
```

> Para rodar a build do projeto com typescript:

```
npm run build
```

> Para subir a aplicação após o build:

```
npm run start
```

## Front-end



## Acesse o repositório do front-end[ aqui](https://github.com/DanielCdOliveira/approved-front)

## Thunder client

- Para testes manuais é possível importar o arquivo **thunder-collection_approved.json**
