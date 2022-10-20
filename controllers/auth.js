import jwt from 'jsonwebtoken'
import User from "../models/user.js";
import bcrypt from 'bcrypt';

export const register = async (req, res) => {
  try {
    const user = await User.create({
      userName: req.body.userName,
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password, 8)
    });
    res.status(201).json({
      "message": "User Created",
      "userId": user.id
    });
  } catch (err) {
    console.log(err);
  }
}

export const login = async (req, res) => {
  try {
    const user = await User.findOne({
      where: {
        email: req.body.email
      }
    })
    if (!user) {
      return res.status(404).send({
        message: `No user found with email ${req.body.email}`
      });
    }

    const passwordIsValid = bcrypt.compareSync(
      req.body.password,
      user.password
    );

    if(!passwordIsValid) {
      return res.status(401)
      .send({
        message: "Invalid Password"
      });
    }

    const token = jwt.sign({
      id: user.id,
      name: user.userName,
    }, 'secret-key', {
      expiresIn: 86400
    });
    
    res.status(200)
    .send({
      user: {
        id: user.id,
        email: user.email,
        name: user.userName,
      },
      message: "Login Successfull",
      accessToken: token,
    });
  } catch (err) {
    console.log(err);
  }
}