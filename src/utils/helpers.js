const bcrypt = require('bcryptjs');

exports.hashPassword=(userPassword) => {
    console.log(userPassword);
    convertedUserPassword = userPassword.toString()


    return bcrypt.hash(convertedUserPassword, 10);
}

exports.comparePassword=(password, hashedPassword) => {
    convertedUserPassword = password.toString()

    return bcrypt.compare(convertedUserPassword, hashedPassword);
}


// function hashPassword(password) {
//     const salt = bcrypt.genSaltSync();
//     return bcrypt.hashSync(password, salt);
// }

// function comparePassword(raw, hash){
//     return bcrypt.compareSync(raw, hash)
// }
// module.exports = {
//     hashPassword, comparePassword
// }
