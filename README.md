# **TripleSports**

# **Para acessar o deploy:**
https://triplesports.netlify.app/

Este é um projeto desenvolvido com **React** que permite aos usuários se cadastrar e fazer login, realizar requisições em uma API de eventos, salvar eventos e visualizar apenas os eventos salvos através de um filtro. O projeto utiliza o **localStorage** para armazenar dados localmente no navegador.

## **Tabela de Conteúdos**
- [Sobre o Projeto](#sobre-o-projeto)
- [Funcionalidades](#funcionalidades)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Pré-Requisitos](#pré-requisitos)
- [Instalação](#instalação)
- [Como Usar](#como-usar)
---

## **Sobre o Projeto**

Este projeto é um **site de rastreamento de eventos**, onde os usuários podem:
- **Cadastrar-se** e **fazer login** no sistema.
- Consultar uma lista de eventos obtida através de uma API externa.
- **Salvar eventos** de interesse no localStorage.
- Filtrar e visualizar apenas os **eventos salvos**.

A aplicação utiliza o **localStorage** para armazenar os eventos salvos localmente, e o usuário pode acessar esses eventos mesmo após recarregar a página ou fechar o navegador.

---

## **Funcionalidades**

- **Cadastro e Login de Usuário**: O usuário pode criar uma conta e realizar login, com os dados sendo armazenados no **localStorage**.
- **Exibição de Eventos**: A lista de eventos é carregada a partir de uma API externa.
- **Salvar Eventos**: O usuário pode salvar eventos em seu perfil.
- **Filtragem de Eventos**: O usuário pode visualizar apenas os eventos salvos com um filtro.
- **Uso de localStorage**: Dados como o estado de login e eventos salvos são armazenados no navegador do usuário, garantindo persistência de dados entre sessões.

---

## **Tecnologias Utilizadas**

- **React**: Biblioteca JavaScript para construção da interface de usuário.
- **localStorage**: Armazenamento local para dados persistentes.
- **CSS**: Estilização do layout e componentes.
- **API de Eventos**: API externa para trazer os eventos em tempo real (substitua com a URL real da API que você está usando).

---

## **Pré-Requisitos**

Antes de rodar o projeto, é necessário ter as seguintes ferramentas instaladas no seu ambiente de desenvolvimento:

- **Node.js** (v12 ou superior)
- **npm**

---

## **Instalação**

1. **Clone o repositório:**
   ```bash
   git clone git@github.com:VtaZinn/project-frontend.git
   ```


   Entre no diretório do projeto:

2. **Entre no diretório do projeto:**
```
cd projeto-frontend
```

3. **Instale as dependências:**
Se você estiver usando o npm:
```
npm install
```
4. **Inicie o servidor de desenvolvimento:**
 Se estiver usando o npm:
```
npm start
```

Isso irá abrir o aplicativo no seu navegador, geralmente na URL http://localhost:3000.

### Como usar:

1. **Clone o repositório** usando o comando `git clone` (substitua a URL pelo seu repositório).
2. **Entre no diretório do projeto** com o comando `cd`.
3. Instale as dependências com `npm install` ou `yarn install`.
4. Inicie o servidor com `npm start` ou `yarn start` para rodar o aplicativo localmente.
