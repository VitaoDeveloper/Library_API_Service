import { getall_controller, edit_controller, delete_controller } from "../../controllers/library.controller";
import { Router } from "express";

const library_routes: Router = Router();

// GET all library data
library_routes.get("/getall", getall_controller);

// PUT edit library data
library_routes.put("/edit/:table/:name", edit_controller);

// DELETE library data
library_routes.delete("/delete/:table/:name", delete_controller);

export default library_routes;