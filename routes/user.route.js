const {Router} = require('express')
const {getUser, getUsers, postUser, putUser ,deleteUser} = require("../controllers/user.controller");
const middleware = require("../middlewares/user.middleware");

const userRouter = Router();

userRouter.get('/', middleware.userValidator, getUsers);

userRouter.get('/:userId', getUser);

userRouter.post('/', postUser);

userRouter.put('/:userId', putUser);

userRouter.delete('/:userId', deleteUser);

module.exports = userRouter