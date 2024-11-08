import express from 'express';
import UserControllers from '../controllers/UserControllers';

const UserRouter=express.Router();

UserRouter.post('/login',UserControllers.login)

UserRouter.post('/register',UserControllers.Signup)
UserRouter.post('/registerAdmin',UserControllers.SignupAdmin)

UserRouter.post('/registerInventoryStaff',UserControllers.SignupInvertoryStaff)

export default UserRouter;