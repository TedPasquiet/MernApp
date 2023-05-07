import { express } from "express";
import { getFeedPosts, getUserPosts, likePost } from "../controllers/posts.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

/* READ */
router.get("/", verifyToken, getFeedPosts); // Not really suitable for prod
router.get("/:userId/post", verifyToken, getUserPosts);
/* UPDATES */
router.patch("/:id/like", verifyToken, likePost);

export default router;
