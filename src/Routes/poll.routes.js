import { Router } from "express";
import { authValidation } from "../Middlewares/authorization.js";
import validateSchema from "../Middlewares/validateSchema.js";
import { createPoll, getPolls } from "../Controllers/poll.controllers";

const pollRouter= Router();

pollRouter.post("/poll", validateSchema, createPoll);

pollRouter.get("/poll", getPolls)