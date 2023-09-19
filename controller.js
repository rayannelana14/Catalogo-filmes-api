const sqlite3 = require('sqlite3').verbose();


const db = new sqlite3.Database('filmes.db', (err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err.message);
  } else {
    console.log('Conectado ao banco de dados SQLite');
  }
});


function getAllFilmes(callback) {
  db.all('SELECT * FROM filmes', (err, rows) => {
    if (err) {
      return callback(err, null);
    }
    return callback(null, rows);
  });
}


function getFilmeById(id, callback) {
  db.get('SELECT * FROM filmes WHERE id = ?', [id], (err, row) => {
    if (err) {
      return callback(err, null);
    }
    return callback(null, row);
  });
}


function createFilme(filme, callback) {
  const { titulo, diretor, ano, atores, premios } = filme;
  db.run(
    'INSERT INTO filmes (titulo, diretor, ano, atores, premios) VALUES (?, ?, ?, ?, ?)',
    [titulo, diretor, ano, atores, premios],
    function (err) {
      if (err) {
        return callback(err, null);
      }
      return callback(null, { id: this.lastID });
    }
  );
}

function updateFilme(id, filme, callback) {
  const { titulo, diretor, ano, atores, premios } = filme;
  db.run(
    'UPDATE filmes SET titulo = ?, diretor = ?, ano = ?, atores = ?, premios = ? WHERE id = ?',
    [titulo, diretor, ano, atores, premios, id],
    function (err) {
      if (err) {
        return callback(err, null);
      }
      return callback(null, { changes: this.changes });
    }
  );
}


function deleteFilme(id, callback) {
  db.run('DELETE FROM filmes WHERE id = ?', [id], function (err) {
    if (err) {
      return callback(err, null);
    }
    return callback(null, { changes: this.changes });
  });
}

module.exports = {
  getAllFilmes,
  getFilmeById,
  createFilme,
  updateFilme,
  deleteFilme,
};
