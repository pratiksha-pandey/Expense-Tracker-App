const express = require('express');
const router = express.Router();
const { getTransactions, getAllTransactions, addTransaction, deleteTransaction } = require('../controllers/transactions');

router.get("/", getTransactions);

router.get("/all", getAllTransactions);

router.post("/", addTransaction);

router.route("/:id").delete(deleteTransaction);

module.exports = router;