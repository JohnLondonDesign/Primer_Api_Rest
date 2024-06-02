const express = require("express"); // se importa el paquete
const app = express();
const mongoose = require("mongoose"); // se importa el paquete
const bodyParser = require("body-parser"); // se importa el paquete

app.use(bodyParser.json()); // Llamar al body-parser
const postRoute = require('./routes/post'); // Importar las rutas
app.use('/servicios', postRoute);

//Se crean las rutas
app.get("/", (req, res) => { 
  res.send("conexión al servidor exitosa"); // Ruta por defecto
});

//conexion de MongoDB
mongoose.connect(
  'mongodb+srv://johnalondono:pNFbM4ek7n1Psze4@bdtecnology.uwhdcuj.mongodb.net/?retryWrites=true&w=majority&appName=bdtecnology',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

const connection = mongoose.connection;
connection.once("open", () => {
  console.log(
    'Mongo database connection estabblisshed successfully\n(conexion exitosa a la base de datos)'
  )
})

app.listen(10000);
