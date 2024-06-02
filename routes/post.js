const express = require("express");
const router = express.Router();
const Post = require("../models/Post"); // llamar la ruta del esquema

// CONSULTAR
// obtener la informacion de la base de datos, por un dato expecifico.
router.get('/:cedula', async(req, res)=> {
    try{
        const post = await Post.findOne({cedula: req.params.cedula});
        res.json(post);
    }catch (error){
        res.json({message:error});
    }
}); 

// CONSULTAR
//obtener toda la informacion de la base de datos, con get.
router.get("/", async (req, res) => {
  try {
    const post = await Post.find();
    res.json(post);
  } catch (error) {
    res.json({ message: error });
  }
});

// CREAR
router.post("/", async (req, res) => {
    const post = new Post({
    nombre: req.body.nombre,
    apellido: req.body.apellido,
    cedula: req.body.cedula,
    telefono: req.body.telefono,
    pais: req.body.pais,
    ciudad: req.body.ciudad,
    direccion: req.body.direccion,
    fecha: req.body.fecha,
  });
  try {
    const savedPost = await post.save(); // método que guarda en la BD
    res.json(savedPost);
  } catch (error) {
    res.json({ message: error });
  }
});

// ACTUALIZAR
router.patch("/:cedula", async (req, res) => {
  try {
    const updatePost = await Post.findOneAndUpdate(
      { cedula: req.params.cedula },
      {
        $set: {
          nombre: req.body.nombre,
          apellido: req.body.apellido,
          cedula: req.body.cedula,
          telefono: req.body.telefono,
          pais: req.body.pais,
          ciudad: req.body.ciudad,
          direccion: req.body.direccion,
          fecha: req.body.fecha
        }
      }
    );
    res.json(updatePost);
  } catch (error) {
    res.json({ message: error });
  }
});

// ELIMINAR
router.delete("/:cedula", async (req, res) => {
  try {
    const removedPost = await Post.findOneAndDelete({
      cedula: req.params.cedula,
    });
    if (!removedPost) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }
    res.json({ message: "Usuario fue eliminado exitosamente" });
  } catch (error) {
    res.status(500).json({ message:"Error de conexión" });
  }
});

// Devuelve como módulo lo que se le asigna a route.
module.exports = router;
