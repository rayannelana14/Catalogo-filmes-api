
# API de Catálogo de Filmes

Esta é uma API simples de catálogo de filmes que permite realizar operações CRUD (Create, Read, Update, Delete) em uma coleção de filmes. Ela foi construída em Node.js e usa um banco de dados SQLite para armazenar os dados dos filmes.

## Configuração

Antes de usar a API, siga estas etapas:

1. Certifique-se de ter o Node.js instalado no seu sistema.

2. Clone este repositório:

   ```bash
   git clone https://github.com/rayannelana14/Catalogo-filmes-api.git
   cd Catalogo-filmes-api
   ```

3. Instale as dependências:

   ```bash
   npm install
   ```

4. Crie o banco de dados SQLite e execute as migrações:

   ```bash
   npx knex migrate:latest
   ```

5. Inicie o servidor:

   ```bash
   npm start
   ```

A API estará em execução em `http://localhost:3000`.

Essa API Está disponível no endereço

http://productserve.vps.webdock.cloud:3000

## Rotas

A API possui as seguintes rotas:

- `GET /filmes`: Obtém todos os filmes no catálogo.
- `GET /filmes/:id`: Obtém um filme específico por ID.
- `POST /filmes`: Cria um novo filme.
- `PUT /filmes/:id`: Atualiza um filme existente por ID.
- `DELETE /filmes/:id`: Exclui um filme por ID.

## Exemplos de Uso

### Exemplo de Solicitação POST para Criar um Filme

```bash
curl -X POST -H "Content-Type: application/json" -d '{
  "titulo": "Pulp Fiction",
  "diretor": "Quentin Tarantino",
  "ano": 1994,
  "atores": "John Travolta, Uma Thurman, Samuel L. Jackson",
  "premios": "Vencedor de vários prêmios, incluindo Palma de Ouro em Cannes"
}' http://productserve.vps.webdock.cloud:3000/filmes

```

### Exemplo de Solicitação GET para Obter Todos os Filmes

```bash
curl http://productserve.vps.webdock.cloud:3000/filmes
```

### Exemplo de Solicitação PUT para Atualizar um Filme por ID

```bash
curl -X PUT -H "Content-Type: application/json" -d '{
  "titulo": "Pulp Fiction (Atualizado)",
  "diretor": "Quentin Tarantino",
  "ano": 1994,
  "atores": "John Travolta, Uma Thurman, Samuel L. Jackson",
  "premios": "Vencedor de vários prêmios, incluindo Palma de Ouro em Cannes"
}' http://productserve.vps.webdock.cloud:3000/filmes/1
```

### Exemplo de Solicitação DELETE para Excluir um Filme por ID

```bash
curl -X DELETE http://productserve.vps.webdock.cloud:3000/filmes/1
```

## Contribuição

Sinta-se à vontade para contribuir para este projeto. Você pode abrir problemas (issues) ou enviar pull requests com melhorias.
