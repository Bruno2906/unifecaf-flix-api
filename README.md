# UniFECAF Flix API

API REST desenvolvida em Node.js para gerenciamento e consulta de filmes da plataforma fictícia **UniFECAF Flix**.

O projeto foi desenvolvido como atividade acadêmica da disciplina de **Web Programming for Back End**, utilizando arquitetura **MVC (Model-View-Controller)**, banco de dados **MySQL** e padrão **REST**.

## Preview

<img width="2559" height="1439" alt="Preview da API no Postman" src="https://github.com/user-attachments/assets/cf6fa842-8340-42aa-8d91-9680703d832d" />

## Tecnologias Utilizadas

- Node.js
- Express.js
- MySQL
- MySQL2
- CORS
- Git e GitHub
- Postman

## Estrutura do Projeto

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

## Banco de Dados

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

## Endpoints

| Método | Rota | Descrição |
|---|---|---|
| GET | `/v1/controle-filmes/filme` | Lista todos os filmes |
| GET | `/v1/controle-filmes/filme/:id` | Busca um filme por ID |
| GET | `/v1/controle-filmes/filtro/filme?nome=Batman` | Filtra filmes por nome ou sinopse |

## Exemplos de Requisição

### Listar todos os filmes

```http
GET /v1/controle-filmes/filme
```

### Buscar filme por ID

```http
GET /v1/controle-filmes/filme/1
```

### Filtrar filmes por nome

```http
GET /v1/controle-filmes/filtro/filme?nome=Batman
```

## Exemplo de Resposta

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

## Como Executar o Projeto

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

Edite o arquivo:

```text
src/database/connection.js
```

Informe usuário, senha e banco de dados MySQL conforme sua configuração local.

### Executar a aplicação

```bash
node app.js
```

Servidor disponível em:

```text
http://localhost:3000
```

## Testes

Os endpoints foram testados utilizando o Postman, validando:

- Listagem de filmes
- Busca por ID
- Filtro por nome
- Tratamento de erro 404
- Retorno de status HTTP adequados

<img width="2559" height="1389" alt="Teste da API no Postman" src="https://github.com/user-attachments/assets/f5e83dda-771a-43b5-b785-7fbcd0fe6608" />

## Conceitos Aplicados

- API REST
- Arquitetura MVC
- Integração com banco de dados
- Tratamento de erros
- Status HTTP
- Modularização de código
- Versionamento com Git e GitHub

## Autor

**Bruno Martins Rosa**

Estudante de Análise e Desenvolvimento de Sistemas (ADS)
