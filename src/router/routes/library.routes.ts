import library_controller from "../../controllers/library.controller";
import { Router } from "express";

const library_routes: Router = Router();

// GET all library data
library_routes.get("/getall", library_controller);

export default library_routes;