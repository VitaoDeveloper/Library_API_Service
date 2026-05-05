import { Router } from "express";
import library_routes from "./routes/library.routes";

const router: Router = Router();

router.use(library_routes);

export default router;