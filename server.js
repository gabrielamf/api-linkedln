const express = require('express');
const app = express();
const server = app.listen(3000, encender);

function encender() {
  console.log('Mi servidor esta encendido');
}
app.use(express.static('public'));
