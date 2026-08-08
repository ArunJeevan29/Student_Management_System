const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");
const {
  registerUser,
  loginUser,
  getCurrentUser,
} = require("../controllers/authController");

router.post("/login", loginUser);
router.post("/register", registerUser);
router.get("/me", authMiddleware, getCurrentUser);

module.exports = router;
