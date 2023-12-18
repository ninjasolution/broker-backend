const service = require("../service")

exports.loanRequest = async (req, res) => {

  try {
    await service.loanRequest(req.body);
    return res.status(200).send({ message: "Success." });
  } catch (error) {
    return res.status(500).send({ message: error, status: "errors" });
  }
};


exports.contactRequest = async (req, res) => {

  try {
    await service.contactRequest(req.body);
    return res.status(200).send({ message: "Success." });
  } catch (error) {
    console.log(error)
    return res.status(500).send({ message: error, status: "errors" });
  }
};


