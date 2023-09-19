const knex = require('knex')({
    client: 'sqlite3',
    connection: {
      filename: './filmes.db',
    },
    useNullAsDefault: true,
  });
  
  (async () => {
    try {
      await knex('filmes').insert([
        {
          titulo: 'Pulp Fiction',
          diretor: 'Quentin Tarantino',
          ano: 1994,
          atores: 'John Travolta, Uma Thurman, Samuel L. Jackson',
          premios: 'Vencedor de vários prêmios, incluindo Palma de Ouro em Cannes',
        },
        {
          titulo: 'Kill Bill: Vol. 1',
          diretor: 'Quentin Tarantino',
          ano: 2003,
          atores: 'Uma Thurman, Lucy Liu, David Carradine',
          premios: 'Indicações ao Oscar',
        },
        {
          titulo: 'Forrest Gump',
          diretor: 'Robert Zemeckis',
          ano: 1994,
          atores: 'Tom Hanks, Robin Wright, Gary Sinise',
          premios: 'Vencedor de vários Oscars',
        },
        {
          titulo: 'The Shawshank Redemption',
          diretor: 'Frank Darabont',
          ano: 1994,
          atores: 'Tim Robbins, Morgan Freeman',
          premios: 'Indicações ao Oscar',
        },
        {
          titulo: 'The Godfather',
          diretor: 'Francis Ford Coppola',
          ano: 1972,
          atores: 'Marlon Brando, Al Pacino, James Caan',
          premios: 'Vencedor de vários Oscars',
        },
        {
          titulo: 'Inception',
          diretor: 'Christopher Nolan',
          ano: 2010,
          atores: 'Leonardo DiCaprio, Ellen Page, Joseph Gordon-Levitt',
          premios: 'Vencedor de quatro Oscars',
        },
        // Você pode adicionar mais filmes aqui
      ]);
      console.log('Registros de filmes inseridos com sucesso.');
    } catch (error) {
      console.error('Erro ao inserir registros de filmes:', error);
    } finally {
      await knex.destroy();
    }
  })();
  