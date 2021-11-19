const express = require ("express");
const app = express();


app.get('/users/list', (req, res) => {
  res.send({ test: 'tudo ok' });
});

app.post('/users/create', (req, res) => {
  res.send({teste: 'tudo ok para created'})
})

app.listen(5000);

module.exports = app;