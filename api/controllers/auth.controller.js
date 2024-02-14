import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";
import jwt from "jsonwebtoken";

export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;

  // Check if all fields have been included

  if (
    !username ||
    !email ||
    !password ||
    email === "" ||
    password === "" ||
    username === ""
  ) {
    return next(errorHandler(400, "All fileds are required!"));
  }

  // Begin Hashing Password

  const hashSalt = 10;
  const hashedPassword = bcryptjs.hashSync(password, hashSalt);

  const newUser = new User({ username, email, password: hashedPassword });
  try {
    await newUser.save();
    res.status(201).json("User was created successfully!");
  } catch (err) {
    next(err);
  }
};