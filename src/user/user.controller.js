const userRepo = require("./user.repo")
const userService = require("./user.service")

const createUser = async (req, res) => {
    const {fullName, email, password} = req.body
    try {
        const createdUser = await userService.createUser({fullName, email, password})
        return res.json(createdUser)
    } catch (error) {
        return res.status(500).json({ message: "Create user failed!" })
    }   
    
}

const userController = {
    createUser
}

module.exports = userController