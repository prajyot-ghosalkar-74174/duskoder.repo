const express = require('express');
const router = express.Router();
const db = require('../db');

router.get('/', (request, response) => {
  const statement = `SELECT * FROM Book_Tb`;
  db.query(statement, (error, data) => {
    if (error) {
      response.send('error');
    } else {
      response.send(data);
    }
  });
});

router.post('/', (request, response) => {
  const { id, b_name, author, book_type, price, publishedDate, language } = request.body;
  const statement = `INSERT INTO Book_Tb (id, b_name, author, book_type, price, publishedDate, language) VALUES (?, ?, ?, ?, ?, ?, ?)`;
  db.query(statement, [id, b_name, author, book_type, price, publishedDate, language], (error, data) => {
    if (error) {
      console.error(error);
      response.send('error');
    } else {
      response.send('book added successfully');
    }
  });
});

router.put('/:id', (request, response) => {
  const idToUpdate = request.params.id;
  const { b_name, author, book_type, price, publishedDate, language } = request.body;
  const statement = `UPDATE Book_Tb SET id = ?, b_name = ?, author = ?, book_type = ?, price = ?, publishedDate = ?, language = ? WHERE id = ?`;
  db.query(statement, [idToUpdate, b_name, author, book_type, price, publishedDate, language, idToUpdate], (error, data) => {
    if (error) {
      console.error(error);
      response.send('error');
    } else {
      response.send('Book updated successfully');
    }
  });
});

module.exports = router;