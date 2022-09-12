const users = require("../dataBase/users.json");
module.exports = {
    userValidator: async (req, res) => {
        if (Number.isNaN(+userId) || +userId < 0 ){
            res.status(400).json('wrong user id')
            return;
        }

        if (!user){
            res.status(404).json('users not found')
            return;

            res.json(user)
        }
    }
}