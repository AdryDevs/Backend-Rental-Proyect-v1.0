const User = require('../models/user');

const userControllers = { postUser, getUser, deleteUser, updateUser };

userControllers.postUser = async (req, res) => {
    const { email, password } = req.body;
    const newUser = new User({ email, password });
    await newUser.save();
    res.json({ message: 'User saved' });
}

userControllers.getUser = async (req, res) => {
    const user = await User.findById(req.params.id);
    res.json(user);
}

userControllers.deleteUser = async (req, res) => {
    await User.findByIdAndDelete(req.params.id);
    res.json({ message: 'User deleted' });
}

userControllers.updateUser = async (req, res) => {
    const { email, password } = req.body;
    await User.findByIdAndUpdate(req.params.id, {
        email,
        password
    });
    res.json({ message: 'User updated' });
}

module.exports = userControllers;