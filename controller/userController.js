const insert = (req, res, next) => {
    const { firstName, lastName, email, password } = req.body;
    res.status(200).json({ message: "User inserted sucess" })
}

module.exports = { insert }