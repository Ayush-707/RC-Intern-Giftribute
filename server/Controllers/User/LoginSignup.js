const myUser = require("../../Database/Models/UserAccounts");

exports.userLogin = async (req, res) => {
    try {
      const {userEmail, userPassword} = req.body
    } catch (error) {
      console.error(error);
      res.status(400).json({ error: "Error While Loggin In" });
    }
  };
  
