const express = require("express");
const book = require("./controllers/book");
const router = express();
router.use(express.json())

router.post("/book", book.insertBook);
router.get("/book/:id", book.listBook);
router.get("/book", book.listBooks);
router.put("/book/:id", book.updateBook);
router.delete("/book/:id", book.deleteBook);

module.exports = router;
