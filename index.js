const express = require('express');
const bodyParser = require('body-parser');
const controller = require('./controller'); // Importe as funções de controle do arquivo controller.js

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());


app.get('/filmes', (req, res) => {
  controller.getAllFilmes((err, filmes) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    return res.json({ filmes });
  });
});


app.get('/filmes/:id', (req, res) => {
  const { id } = req.params;
  controller.getFilmeById(id, (err, filme) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    if (!filme) {
      return res.status(404).json({ error: 'Filme não encontrado' });
    }
    return res.json({ filme });
  });
});


app.post('/filmes', (req, res) => {
  const novoFilme = req.body;
  controller.createFilme(novoFilme, (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    return res.json(result);
  });
});


app.put('/filmes/:id', (req, res) => {
  const { id } = req.params;
  const filmeAtualizado = req.body;
  controller.updateFilme(id, filmeAtualizado, (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    if (result.changes === 0) {
      return res.status(404).json({ error: 'Filme não encontrado' });
    }
    return res.json(result);
  });
});


app.delete('/filmes/:id', (req, res) => {
  const { id } = req.params;
  controller.deleteFilme(id, (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    if (result.changes === 0) {
      return res.status(404).json({ error: 'Filme não encontrado' });
    }
    return res.json(result);
  });
});

app.listen(port, () => {
  console.log(`Servidor Express rodando na porta ${port}`);
});
