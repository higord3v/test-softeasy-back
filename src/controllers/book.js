const database = require("../ORM/conexao");
const Book = require("../ORM/book");

database.sync().then((response) => {
  console.log('syncronized');
});

const insertBook = async (req, res) => {
  const { name, author, description, rating } = req.body;

  if (!name)
    return res.status(400).json({
      message: "Please, insert a name",
    });

  if (!author)
    return res.status(400).json({
      message: "Please, insert an author",
    });

  if (!description)
    return res.status(400).json({
      message: "Please, insert a description",
    });

  if (!rating)
    return res.status(400).json({
      message: "Please, insert a rating",
    });

  try {
    const newBook = await Book.create({
      name,
      author,
      description,
      rating,
    });

    return res.status(200).json(newBook);
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

const listBook = async (req, res) => {
  const { id } = req.params;

  try {
    const book = await Book.findByPk(id);

    if (!book) return res.status(404).json("Not found.");

    return res.status(200).json(book);
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

const listBooks = async (req, res) => {
  try {
    const books = await Book.findAll();

    return res.status(200).json(books);
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

const updateBook = async (req, res) => {
  const { id } = req.params
  try {
    const updatedBook = await Book.update(req.body, {
      where: {
        id
      }
    });
    if (!updatedBook[0]) return res.status(400).json({
      message: 'Could not update.'
    })

    return res.status(200).json(updatedBook) 
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

const deleteBook = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedBook = await Book.destroy({
      where: {
        id,
      },
    });

    if (!deletedBook) return res.status(404).json("Not found.");

    return res.status(200).json(deletedBook);
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  insertBook,
  listBooks,
  listBook,
  updateBook,
  deleteBook,
};
