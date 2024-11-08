import express from "express";
import { Users } from "../models/user.models";
import bcrypt from "bcryptjs";

const login = async (req, res) => {
  const { Email, password, userrole } = req.body;
  console.log(Email, password);

  try {
    const user = await Users.find({ Email: Email });

    if (user.userrole == userrole) {
      const match = await bcrypt.compare(user.password, password);
      if (match) {
        res.json({
          user: user,
          message: "Success",
        });
      } else {
        res.status(400).json({ message: "Passsword Incorrect" });
      }
    } else {
      res
        .status(400)
        .json({ message: "User not found Or You are not a Admin" });
    }
  } catch (error) {
    res.status(404).json("Server Error");
  }
};

const Signup = async (req, res) => {
  const { Username, Email,Phone, password } = req.body;
  try {
    const existingUser = await Users.findOne({ Email: Email });
    if (existingUser) {
      return res
        .status(400)
        .json({ message: "User already exists ..Please Login" });
    } else {
      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = new Users({
        Name: Username,
        Email: Email,
        PhoneNumber:Phone,
        password: hashedPassword,
      });
      await newUser.save();
      res.json({ message: "User registered successfully" });
    }
  } catch (error) {
    res.status(500).json("Server Error");
  }
};

const SignupAdmin = async (req, res) => {
  const { Username, Email,Phone, password } = req.body;
  try {
    const existingUser = await Users.findOne({ Email: Email });
    if (existingUser) {
      return res
        .status(400)
        .json({ message: "Staff already exists .." });
    } else {
      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = new Users({
        Name: Username,
        Email: Email,
        PhoneNumber:Phone,
        password: hashedPassword,
        userRole:"Department Staff"
      });
      await newUser.save();
      res.json({ message: "Staff registered successfully" });
    }
  } catch (error) {
    res.status(500).json("Server Error");
  }
};

const SignupInvertoryStaff= async (req, res) => {
  const { Username, Email,Phone, password } = req.body;
  try {
    const existingUser = await Users.findOne({ Email: Email });
    if (existingUser) {
      return res
        .status(400)
        .json({ message: "User already exists .." ,
            existingUser
        });
    } else {
      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = new Users({
        Name: Username,
        Email: Email,
        PhoneNumber:Phone,
        password: hashedPassword,
        userRole:"Invertory Staff"
      });
      await newUser.save();
      res.json({ message: "Staff registered successfully" });
    }
  } catch (error) {
    res.status(500).json("Server Error");
  }
};

export default { login, Signup ,SignupInvertoryStaff,SignupAdmin};
