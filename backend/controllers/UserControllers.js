import express from "express";
import { Users } from "../models/user.models.js";
import bcrypt from "bcryptjs";

const login = async (req, res) => {
  const { Email, Password, userRole } = req.body;
    console.log(req.body)
    console.log(Password)

  // console.log(Email, Password, userRole);

  try {
    const user=await Users.findOne({Email:Email})
    // console.log(user)
    if(user){
      if(user.userRole!=userRole){
        return res.json(`You are Not authorized to access`)
      }
      const isMatch=await bcrypt.compare(Password,user.Password)
      console.log(isMatch)
      if(isMatch){
        res.json({
          user:user,
          message:"Success"
        })
      }else{
        res.json("Password Incorrect")
      }
    }else{
      res.json("Invalid Credentials")
    }
  } catch (error) {
    console.error(error);
    res.status(500).json("Server Error",error.message);
  }


    
};

const Signup = async (req, res) => {
  const { Username, Email, Phone,Department, password } = req.body;
  console.log("Request body:", req.body);

  console.log("Password ", password);

  try {
    // Check if the user already exists
    const existingUser = await Users.findOne({ Email });
    if (existingUser) {
      return res.status(500).json({message:"User already exists. Please log in."});
    }

    // Hash the password
    const saltRounds = 10; // Recommended number of salt rounds
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // Create the new user
    await Users.create({
      Name: Username,
      Email,
      Department: Department,
      PhoneNumber: Phone,
      Password: hashedPassword,
    });

    // Respond with success
    res.json( "User registered successfully" );
  } catch (error) {
    console.error("Error during signup:", error.message);

    // Respond with an error
    res.status(500).json({message: "Error during signup:", error:error.message})
  }
};

const SignupAdmin = async (req, res) => {
  const { Username, Email, Department, Phone, Password } = req.body;
  try {
    const existingUser = await Users.findOne({ Email: Email });
    if (existingUser) {
      return res.status(500).json({message: "Staff already exists .." });
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
        res.status(200).json({message:"Staff registered successfully"});
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({message:"Server Error"});
  }
};

const SignupInvertoryStaff = async (req, res) => {
  const { Username, Email, Department, Phone, Password } = req.body;
  try {
    const existingUser = await Users.findOne({ Email: Email });
    if (existingUser) {
      return res
        .status(400)
        .json({message:"User already exists .."});
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
        res.status(200).json({message:"Staff registered successfully"});
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({message:"Server Error",error:error.message});
  }
};

export default { login, Signup, SignupInvertoryStaff, SignupAdmin };
