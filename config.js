const mongoose = require('mongoose');
const { use } = require('react');

const connectDB = async () => {
    try {
  await mongoose.connect('mongodb+srv://angyzpao_db_user:angy10ariza12@cluster0.ewdr0ww.mongodb.net/Login');
      

    console.log('Base de datos conectada');
    } catch (err) {
        console.error('Error al conectar:', err);
        process.exit(1); // salir del proceso si no se puede conectar
    }
}

module.exports = connectDB;