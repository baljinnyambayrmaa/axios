import express from "express";
import { getUserByEmailService } from "../controllers/usersController.js";

const userRouter = express.Router();

//  Get

userRouter.get("/users/:email", getUserByEmailService);

// post

// put

// delete
export default userRouter;
