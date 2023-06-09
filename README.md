# Clínica La Vie

Um grupo de psicólogos se juntaram e criaram a clínica La Vie - Saúde Mental que oferece diversos tipos de terapia.

Para ajudar nos atendimentos, eles precisam de uma API que permita criar registros de psicólogos, pacientes e prontuários. Em uma conversa com os Front-end e os PO foram decididos alguns grupos de endpoints que devem ser criados.

---

## 🧑‍💼 Gerenciamento do projeto

Usamos o notion para gerenciar o projeto. Centralizando todas as informações necessárias e utilizando Kanban para andamento das tarefas.

[Acessar notion](https://rodrigobruno.notion.site/Desafio-3-5fa253a022cf4c09aa26d07f89925a2b)

---

## 📁 Executar o projeto

### Caso deseje criar o banco manualmente:

1.  Crie um novo banco de dados;
2.  Renomei o arquivo na raiz do projeto `.env.example` para `.env`;
3.  Preenchas as informações do arquivo `.env`;
4.  No terminal use o comando abaixo para instalar as dependências:

```
npm install
```

5.  No terminal use o comando abaixo para iniciar o projeto:

```
npm start
```

### Caso deseje que a aplicação crie o banco e já preencha as tabelas com alguns valores:

1.  Renomei o arquivo na raiz do projeto `.env.example` para `.env`;
2.  Preenchas as informações do arquivo `.env`;
3.  No terminal use o comando abaixo para instalar as dependências:

```
npm install
```

4.  No terminal use o comando abaixo para iniciar o projeto:

```
npm run db
```

5.  Nas próximas vezes para iniciar o projeto use o comando:

```
npm start
```

Caso deseje o comando abaixo faz com que o projeto use o --watch:

```
npm run dev
```

## 💻 Tecnologias utilizadas

-   NodeJs
    -   Express
    -   Sequelize
-   MySQL

---

## 💾 Banco de dados

![DER do banco de dados](https://raw.githubusercontent.com/rodrigobruno/clinica-la-vie/main/banco-de-dados/clinica-la-vie-der.png 'DER do banco de dados')

-   [Script SQL que gera o banco de dados](https://raw.githubusercontent.com/rodrigobruno/clinica-la-vie-grupo-3/main/banco-de-dados/clinica-la-vie-der.sql)

---

## 📑 Documentação

[Ver a documentação](https://documenter.getpostman.com/view/7321693/2s93Xx1jaY)

[![Executar no Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/7321693-f4e9ed1c-90f1-4b5f-b454-1f41a7c293fa?action=collection%2Ffork&collection-url=entityId%3D7321693-f4e9ed1c-90f1-4b5f-b454-1f41a7c293fa%26entityType%3Dcollection%26workspaceId%3Da5be3193-335d-46ce-a870-0210c3ee5cfe)

---

## ✒️ Autores

Grupo 3

-   [Francisco Oliveira](https://github.com/)
-   [Manuela Torres](https://github.com/mtavidal)
-   [Marjorie Caroline Tristão Ferreira](https://github.com/)
-   [Rodrigo Bruno](https://github.com/rodrigobruno/)
