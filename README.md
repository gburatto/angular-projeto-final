# Projeto Final - Angular - Restaurante

O projeto consiste de um website de um restaurante, onde pode ser consultado o seu cardápio online e o preço de cada prato. Há botões para filtrar pelo tipo de prato (Prato Principal, Porção ou Sobremesa). Quando logado, o usuário também pode editar ou adicionar novos pratos ao cardápio. Há também uma página **Sobre**, com informações da aplicação. A aplicação é responsiva, se adaptando a telas menores.

* **Integrantes:**
    * Gustavo Buratto ([@gburatto](https://github.com/gburatto))
* **Disciplina:**
    * Framework Front End Angular (CEFWM - UTFPR)
* **Pré-requisitos e tecnologias utilizadas:**
    * Arquitetura MEAN Stack (Angular + ExpressJS + MongoDB + NodeJS);
    * NX Monorepo;
    * Conteinerizado em Docker;
    * Autenticação com token JWT;
    * Utiliza a biblioteca Angular Material UI;
    * Requer computador com sistema operacional Windows ou Linux, com Docker já instalado e configurado, para a execução da aplicação.

## Critérios de avaliação
* **Pipes:**
    * `VegetarianoPipe`: A partir de um valor booleano fornecido pelo banco de dados, retorna o texto "Vegetariano" ou "Não Vegetariano" e a classe correspondente para estilização do CSS.
    * `FiltrarPorTipoPipe`: Filtra os resultados, mostrando apenas os pratos do tipo especificado pelo usuário (Prato Principal, Porção ou Sobremesa).
    * Demais pipes nativas utilizadas: `async`, `currency`.
* **Diretivas:**
    * `MostrarInformacaoDirective`: Mostra uma informação adicional ao passar o mouse sobre um elemento. Utilizado na página **Sobre**, exibindo informação sobre o desenvolvedor da aplicação ao passar o mouse sobre o texto da página.
    * Demais diretivas nativas utilizadas: `*ngIf`, `*ngFor`.
* **Rota de login:**
    * `/auth`: Rota do formulário de login;
    * `/auth/login`: Rota de login.
* **Outras rotas:**
    * `/cardapio`: Rota principal da aplicação, que contém o cardápio do restaurante. Ao acessar a rota raiz `/`, o usuário também é redirecionado para a rota `/cardapio`;
    * `/sobre`: Exibe informações da aplicação. Também é a rota para a qual o usuário é redirecionado ao tentar acessar uma rota inválida;
    * `/prato-edicao`: Rota do formulário de adição de um novo prato;
    * `/prato-edicao/:id`: Rota do formulário de edição de um prato existente, para o `id` especificado;
* **Model de domínio de negócio:**
    * `Prato`, implementado através da interface `IPrato`, que contém:
        * `_id`: Identificador único do prato;
        * `imagem`: URL da imagem que ilustra o prato;
        * `nome`: Nome do prato;
        * `tipo`: Tipo do prato;
        * `descricao`: Descrição do prato;
        * `vegetariano`: Booleano que indica se é um prato vegetariano ou não;
        * `preco`: Preço do prato.
* **Formulários:**
    * `FormPratoComponent`: Formulário de edição/adição de um prato;
    * `AuthComponent`: Formulário de login.

## Antes de executar

### ⚠ IMPORTANTE ⚠
Abrir o projeto como Dev Container. Antes de executar as aplicações front-end e back-end pela primeira vez, executar os playgrounds `pratos.mongodb` e `usuarios.mongodb`, disponíveis na pasta `db`, para a conexão `angular-projeto-final_devcontainer-db-1` do MongoDB.

## Comandos para execução

* Instalar dependências:
```
npm install
```

* Executar o front-end:
```
npm run start:front
```

* Executar o back-end:
```
npm run start:api
```
