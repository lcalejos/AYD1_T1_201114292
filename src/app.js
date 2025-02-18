const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());


let canciones = [];

app.post('/canciones', (req, res) => {
    const { nombre, artista, genero } = req.body;

    const nuevaCancion = {
        id: canciones.length + 1, // ID autoincremental
        nombre,
        artista,
        genero
    };

    canciones.push(nuevaCancion);

    res.status(201).json(nuevaCancion);
});

app.get('/info', (req, res) => {
    const datos = {
        nombre: 'Luis Carlos Alejos Avila',
        carnet: '201114292'  
    };

    res.json(datos);
});
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});