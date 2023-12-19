const express = require("express");
const router = express.Router();
const formController = require("../controllers/form.controller");

router.post("/loan-request", formController.loanRequest)
router.post("/loan-2-request", formController.loan2Request)
router.post("/contact-request", formController.contactRequest)

module.exports = router;
