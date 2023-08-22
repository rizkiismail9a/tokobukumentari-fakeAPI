const express = require("express");
const router = express.Router();
const { getBooks, searchBook } = require("../controllers/books");
const { register, login, logout, refresh, getUser, editUser } = require("../controllers/authControllers");
const auth = require("../middleware/auth");
router.get("/books", getBooks);
router.post("/search", searchBook);
router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);
router.post("/refresh", refresh);
router.get("/getUser", auth, getUser);
router.post("/editUser", auth, editUser);
module.exports = router;
