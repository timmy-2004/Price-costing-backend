const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


exports.hashPassword=(userPassword) => {
    console.log(userPassword);
    convertedUserPassword = userPassword.toString()


    return bcrypt.hash(convertedUserPassword, 10);
}

exports.comparePassword=(password, hashedPassword) => {
    convertedUserPassword = password.toString()

    return bcrypt.compare(convertedUserPassword, hashedPassword);
}

 exports.signToken = (id, username, email ,role ,status) => {
    const key = process.env.SECRET_KEY || "";
    const token = jwt.sign( { id,username,email, role,status},
      key,
      { expiresIn: "10000d" }
    );
    return token;
  };

  exports.verifyToken = (req, res, next) => {
    const key = process.env.SECRET_KEY || "";
    const token = req.headers.authorization || req.params.token;
    if (!token) {
      return res.status(403).json({ status: 403, error: "No token provided" });
    }
    jwt.verify(token, key, (error , decoded) => {
      if (error) {
        console.log(error);
        res.status(401).json({ status: 401, error: "Unauthorized" });
      } else {
        console.log("decoded");
        console.log(decoded);
        if (decoded.status != "Approved") {
          console.log("User has been disabled");
          res.status(401).json({
            status: 401,
            error:
              "User status is pending, contact the admin to enable your account",
          });
        } else {
          req.user = decoded;
          next();
        }
      }
    });
  };