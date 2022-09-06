const users = require("../dataBase/users.json");

const fileService = require("../services/file.service")


module.exports = {
    getUsers: async (req, res) => {
        res.json(users)
    },

    getUser: async (req, res) => {
        const {userId} = req.params

        if (Number.isNaN(+userId) || +userId < 0 ){
            res.status(400).json('wrong user id')
            return;
        }
        const user = (users[userId])
        if (!user){
            res.status(404).json('users not found')
            return;
        }

        res.json(user)

    },

    postUser: async (req, res)=>{
        const {name, age} = req.body;

        if (typeof name == 'number' ||  typeof age == 'string' || age <= 0){
            res.status(400 ).json('wrong')
            return;
        }
        users.push({name , age})
        res.status(201).json('ok')
    },

    putUser:  async (req, res) => {
        const { userId } = req.params;
        const { name, age } = req.body;

        if (Number.isNaN(+userId) || +userId < 0) {
            res.status(400).json('Wrong user id');
            return;
        }

        const userObject = {};
        if (age) userObject.age = age;
        if (name) userObject.name = name;

        const user = await fileService.updateUser(+userId, userObject);

        if (!user) {
            res.status(404).json('User not found');
            return;
        }
        res.status(201).json(user);
    },

    deleteUser:  async (req, res) => {
        const { userId } = req.params;

        if (Number.isNaN(+userId) || +userId < 0) {
            res.status(400).json('Wrong user id');
            return;
        }

        const user = await fileService.deleteOneUser(+userId);

        if (!user) {
            res.status(404).json('User not found');
            return;
        }

        res.sendStatus(204);
    }
}