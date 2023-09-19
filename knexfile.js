module.exports = {
    development: {
      client: 'sqlite3',
      connection: {
        filename: './filmes.db',
      },
      useNullAsDefault: true,
    },
  };
  