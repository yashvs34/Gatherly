const bcrypt = require("bcrypt");
const saltRounds = 12;

async function hashPassword (password)
{
    return await bcrypt.hash(password, saltRounds);
}

async function comparePassword (password1, password2)
{
    return await bcrypt.compare(password1, password2);
}

module.exports = {hashPassword, comparePassword};