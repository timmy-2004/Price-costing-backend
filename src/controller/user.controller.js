const Users = require('../model/user.model')
const passwordUtils = require('../utils/helpers')


async function userSignup  (request, response)  {
    // console.log('Login');
    // response.status(200).send("Logged in successfully")
  try{
    let data = request.body

    let hashedPassword = await passwordUtils.hashPassword(data.password)
    console.log(hashedPassword);
      data.password = hashedPassword
      const userDetails = await Users.findOne({ email: data.email } )

      console.log(userDetails);
     if(userDetails) return response.status(400).send({
        status: "error",
        message: "User already exists",
        data: null
     })
    const saveUser = await  Users.create(data)
 
    response.status(200).send({
        status : "success",
        message:"User sucessfully created",
        data: saveUser
    });
  
  }catch(err){
    console.log(err)
    response.status(500).send({
        status : "error",
        message: "Signup failed",
        data: null
     })
  }
};
async function userLogin (request, response) {
   if ( userName || !password )return response.send(200);
   const userDb = await newUser.findOne({ userName })
   if (!userDb) return response.send(401);
}

module.exports = {userSignup,userLogin};

