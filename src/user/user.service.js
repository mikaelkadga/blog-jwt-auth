const bcrypt = require('bcrypt');
const userRepo = require('./user.repo');

const createUser = async({fullName, email, password}) => {
    const hashPassword = await bcrypt.hash(password, 10);
    return await userRepo.createUser({fullName, email, password: hashPassword})
}

const userService = {
    createUser
}

module.exports = userService;