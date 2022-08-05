const {User} = require("../database/models")

const createUser = async ({fullName, email, password}) => {
    return await User.create({
        fullName,
        email,
        password
    })
}

const userRepo = {
    createUser
}

module.exports = userRepo;