import { Router } from "express";
import handler_routes from "./routes/handler.routes";
import library_routes from "./routes/library.routes";

const router: Router = Router();

router.use(library_routes);
router.use(handler_routes);

export default router;