import express from "express";
import{getusers , createuser , updateuser , deleteuser,getUserById} from '../controllers/users.js'
const router = express.Router();  // to make api 

router.get("/users", getusers);
router.post("/users", createuser);
router.put("/users/:id", updateuser);
router.delete("/users/:id", deleteuser);
router.get("/users/:id", getUserById);

export default router;