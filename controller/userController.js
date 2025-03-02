const { User } = require('../model/userModel')
const insert = async (req, res, next) => {
    const { firstName, lastName, email, password } = req.body;
    // const userData = await User.create({ firstName, lastName, email, password })


    

    // await userData.save();
    // res.status(200).json({ message: "User inserted sucess" })


     try {
        const { firstName, email } = req.body;

        const [updatedRows] = await User.update(
            { firstName: firstName },
            { where: { email: email } }
        );

        if (updatedRows === 0) {
            return res.status(404).json({ message: "User not found" });
        }

        res.status(200).json({ message: "User updated successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}

module.exports = { insert }