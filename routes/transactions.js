const express = require('express');
const router = express.Router();
const { getTransactions, getAllTransactions, addTransaction, deleteTransaction } = require('../controllers/transactions');

router
  .route('/')
  .get(getTransactions)
  .get(getAllTransactions)
  .post(addTransaction);

router
  .route('/:id')
  .delete(deleteTransaction);

module.exports = router;