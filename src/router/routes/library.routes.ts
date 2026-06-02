import { getall_controller, edit_controller, delete_controller, create_controller } from "../../controllers/library.controller";
import { Router } from "express";

const library_routes: Router = Router();

// GET fetch library data
library_routes.get("/getall", getall_controller);

// POST create library data
library_routes.post("/create/:table/", create_controller);

// PUT edit library data
library_routes.patch("/edit/:table/:id", edit_controller);

// DELETE library data
library_routes.delete("/delete/:table/:id", delete_controller);

export default library_routes;