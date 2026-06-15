#  UniFECAF Flix API

API REST desenvolvida em Node.js para gerenciamento e consulta de filmes da plataforma fictícia **UniFECAF Flix**.

O projeto foi desenvolvido como atividade acadêmica da disciplina de **Web Programming for Back End**, utilizando arquitetura **MVC (Model-View-Controller)**, banco de dados **MySQL** e padrão **REST**.

---

##  Tecnologias Utilizadas

* Node.js
* Express.js
* MySQL
* MySQL2
* CORS
* Git e GitHub
* Postman

---

##  Estrutura do Projeto

```text
unifecaf-flix-api/
│
├── src/
│   ├── controller/
│   │   └── filmeController.js
│   │
│   ├── model/
│   │   └── filmeModel.js
│   │
│   ├── routes/
│   │   └── filmeRoutes.js
│   │
│   └── database/
│       └── connection.js
│
├── app.js
├── package.json
├── package-lock.json
└── .gitignore
```

---

##  Banco de Dados

O projeto utiliza MySQL para armazenamento dos dados dos filmes.

Tabela utilizada:

```sql
CREATE TABLE tbl_filmes (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(255) NOT NULL,
    sinopse TEXT NOT NULL,
    duracao INT NOT NULL,
    ano_lancamento INT NOT NULL
);
```

---

##  Endpoints

### Listar todos os filmes

```http
GET /v1/controle-filmes/filme
```

### Buscar filme por ID

```http
GET /v1/controle-filmes/filme/:id
```

Exemplo:

```http
GET /v1/controle-filmes/filme/1
```

### Filtrar filmes por nome ou sinopse

```http
GET /v1/controle-filmes/filtro/filme?nome=Batman
```

---

##  Exemplo de Resposta

```json
{
  "quantidade": 5,
  "filmes": [
    {
      "id": 1,
      "nome": "Interestelar",
      "sinopse": "Um grupo de astronautas viaja através de um buraco de minhoca...",
      "duracao": 169,
      "ano_lancamento": 2014
    }
  ]
}
```

---

##  Como Executar o Projeto

### Clonar o repositório

```bash
git clone https://github.com/Bruno2906/unifecaf-flix-api.git
```

### Acessar a pasta do projeto

```bash
cd unifecaf-flix-api
```

### Instalar dependências

```bash
npm install
```

### Configurar conexão com MySQL

Editar o arquivo:

```js
src/database/connection.js
```

Informando usuário, senha e banco de dados MySQL.

### Executar a aplicação

```bash
node app.js
```

Servidor disponível em:

```text
http://localhost:3000
```

---

##  Testes

Os endpoints foram testados utilizando o Postman, validando:

* Listagem de filmes;
* Busca por ID;
* Filtro por nome;
* Tratamento de erro (404);
* Retorno de status HTTP adequados.

---

##  Conceitos Aplicados

* API REST
* Arquitetura MVC
* Integração com Banco de Dados
* Tratamento de Erros
* Status HTTP
* Modularização de Código
* Versionamento com Git e GitHub

---

##  Autor

**Bruno Martins Rosa**

Estudante de Análise e Desenvolvimento de Sistemas (ADS)

Projeto desenvolvido para fins acadêmicos.
