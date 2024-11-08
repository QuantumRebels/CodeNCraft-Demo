import express from "express";
import { Users } from "../models/user.models.js";
import bcrypt from "bcryptjs";

const login = async (req, res) => {
  const { Email, Password, userRole } = req.body;
  //   console.log(req.body)

  console.log(Email, Password, userRole);

  if (!Email || !Password) {
    return res.status(400).json({ message: "Please enter all fields" });
  }

  if (userRole == "Admin") {
    try {
      const user = await Users.find({ Email: Email });

      if (user) {
        if (user[0].userRole == "Admin") {
          const match = await bcrypt.compare(user[0].Password, Password);
          if (match) {
            res.json({
              user,
              message: "Success",
            });
          } else {
            res.json("Password incorrect");
          }
        } else {
          res.json("You are not an Admin");
        }
      }
    } catch (error) {
      res.status(404).json("Server Error", error.message);
    }
  }

  if (userRole === "Department Staff") {
    console.log("found");
    console.log(Password);
    try {
      const user = await Users.find({ Email: Email });

      if (user) {
        if (user[0].userRole === "Department Staff") {
          const match = await bcrypt.compare(user[0].Password, Password);
          console.log(match);
          if (match) {
            res.status(200).json({
              user,
              message: "Success",
            });
          } else {
            res.json("Password Incorrect");
          }
        } else {
          res.json(
            "your are not regitstered... please ask for your credentials "
          );
        }
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Server Error", error: error.message });
    }
  }

  if (userRole === "Inventory Department") {
    console.log("found");
    try {
      const user = await Users.find({ Email: Email });

      if (user) {
        if (user[0].userRole === "Inventory Department") {
          const match = await bcrypt.compare(user[0].Password, Password);
          if (match) {
            res.json({
              user: user,
              message: "Success",
            });
          } else {
            res.json("Password Incorrect");
          }
        } else {
          res.json(
            "Your are not of Inventory Department .. Please ask your credentials to senior"
          );
        }
      }
    } catch (error) {
      res.status(500).json({ message: "Server Error", error: error.message });
    }
  }
};

const Signup = async (req, res) => {
  const { Username, Email, Phone, password } = req.body;
  console.log("Request body:", req.body);

  console.log("Password ", password);

  try {
    // Check if the user already exists
    const existingUser = await Users.findOne({ Email });
    if (existingUser) {
      return res
        .status(400)
        .json({ message: "User already exists. Please log in." });
    }

    // Hash the password
    const saltRounds = 10; // Recommended number of salt rounds
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // Create the new user
    await Users.create({
      Name: Username,
      Email,
      PhoneNumber: Phone,
      Password: hashedPassword,
    });

    // Respond with success
    res.status(200).json({ message: "User registered successfully" });
  } catch (error) {
    console.error("Error during signup:", error.message);

    // Respond with an error
    res.status(500).json({
      message: "Server Error",
      error: error.message,
    });
  }
};

const SignupAdmin = async (req, res) => {
  const { Username, Email,Department, Phone, Password } = req.body;
  try {
    const existingUser = await Users.findOne({ Email: Email });
    if (existingUser) {
      return res.status(400).json({ message: "Staff already exists .." });
    } else {
      const hashedPassword = await bcrypt.hash(Password, 5);
      await Users({
        Name: Username,
        Email: Email,
        Department: Department,
        PhoneNumber: Phone,
        Password: hashedPassword,
        userRole: "Department Staff",
      }).then(() => {
        res.json("Staff registered successfully");
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json("Server Error");
  }
};

const SignupInvertoryStaff = async (req, res) => {
  const { Username, Email,Department, Phone, Password } = req.body;
  try {
    const existingUser = await Users.findOne({ Email: Email });
    if (existingUser) {
      return res
        .status(400)
        .json({ message: "User already exists ..", existingUser });
    } else {
      const hashedPassword = await bcrypt.hash(Password, 5);
      await Users.create({
        Name: Username,
        Email: Email,
        Department: Department,
        PhoneNumber: Phone,
        Password: hashedPassword,
        userRole: "Inventory Department",
      }).then(() => {
        res.json("Staff registered successfully");
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json("Server Error");
  }
};

export default { login, Signup, SignupInvertoryStaff, SignupAdmin };
