const express = require('express');
const connectDB = require('./config');
const Usuario = require('./model');

const app = express();
const port = 3000;
   
connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.post('/login', async (req, res) => {
    const { nombre, clave } = req.body;

    console.log("Datos recibidos:", nombre, clave);

    const usuarios = await Usuario.find();
    console.log("Usuarios en BD:", usuarios);

    const usuario = await Usuario.findOne({
        nombre: nombre.trim(),
        clave: clave.trim()
    });

    console.log("Resultado búsqueda:", usuario);

    if (usuario) {
        res.send('Inicio de sesión exitoso');
    } else {
        res.status(401).send('Credenciales incorrectas');
    }
});
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});


