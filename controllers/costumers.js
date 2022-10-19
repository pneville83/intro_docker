import Costumer from "../models/costumer.js";


// GET que me traiga todos los clientes 

export const getCostumer = async (req, res) => {
  try {
    const costumer = await Costumer.findAll();
    res.send(school);
  } catch (err) {
    console.log(err);
  }
}

// Get me traiga los clientes por ID

export const getCostumerById = async (req, res) => {
  try {
    const costumer = await Costumer.findByPk(req.params.id);
    if (!costumer) {
      res.status(404).send({
        message: `No Costumer found with id ${req.params.id}`
      })
    }
    res.send(costumer);
  } catch (err) {
    console.log (err);
  }
}

// Crear un nuevo Cliente

export const createCostumer = async (req, res) => {
  try {
    await Costumer.create(req.body);
    res.json ({
      "message": "Costumer Created",
    });
  } catch (err) {
    console.log (err);
  }
}

// Modificar o Actualizar un cliente

export const updateCostumer = async (req, res) => {
  try {
    const costumer = await Costumer.findByPk(req.params.id);
    if (!costumer) {
      res.status(404).send({
        message: `No Costumer found with id ${req.params.id}`
      });
      return;
    }
    await Costumer.update(req.body, {
      where: {
        id: req.params.id
      }
    });
    res.jason({
      "message": "Costumer Updated"
    });
  } catch (err) {
    console.log (err);
  }
}

// Borrar clientes por ID

export const deleteCostumer = async (req, res) => {
  try {
    const costumer = await Costumer.findByPk(req.params.id);
    if (!costumer){
      res.status(400).send({
        message: `No Costumer found with id ${req.params.is}`
      });
      return;
    }
    await Costumer.destroy({
      where: {
        id: req.params.id
      }
    });
    res.jason({
      "message": "Costumer Deleted"
    });
  } catch (err) {
    console.log (err);
  }
}
  