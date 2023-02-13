const Users = require('../model/user.model')
const passwordUtils = require('../utils/helpers')
const signToken = require('../utils/helpers')
const verifyToken = require('../utils/helpers')

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
async function signin (request, response) {
  const {userName, password} = request.body;
   if ( !userName || !password )return response.status(400).send({message: "invalid input parameter", });
   const userDb = await Users.findOne({ userName });
   if (!userDb) return response. send(401);
   const isValid = await passwordUtils.comparePassword(password, userDb.password);
   console.log(isValid);

   if(isValid){
    console.log("authenticated sucessfully")
    const jwt = await passwordUtils.signToken(userDb.id, userDb.userName, userDb.email ,userDb.role, userDb.status )
    return response.status(200).send({
      status : "successful",
      message: "logged in sucessfully",
      data: {userDetails: userDb, token: jwt}
    });
   }else{
    console.log("failed to authenticate")
    return response.status(401).send({
      message: "login failed"
    })
   }
   
}
async function getAllUsers(request, response) {
  console.log('user');
  try{
      const users= await  Users.find()
      response.status(200).send({
          status : "success",
          message: "items fetched succesfully",
          data: users 
      })


  }catch(err){
      console.log(err)
      response.status(500).send({
          status : "error",
          message: "server error",
          data: null
      })
  }

};


async function updateUserStatus (request, response) {
  try {
    const userId = request.params.userId
    console.log(userId);
    const query = {_id: userId}
    const user = await Users.updateOne(query, request.body)
    
    response.status(200).send({
      status : "success",
      message:"User updated Successfully",
  });

}catch(err){
  console.log(err)
  response.status(500).send({
      status : "error",
      message: "Signup failed",
      data: null
   })
}
}

async function getUserid (request, response) {
  try {
    const userId = request.params.userId
    console.log(userId);
    const query = {userId : userId}
    const users = await Users.findOne(query)

    response.status(200).send({
      status : "success",
      message:"User sucessfully created",
      data: saveUser
  })

}catch(err){
  console.log(err)
  response.status(500).send({
      status : "error",
      message: "Could not get user id",
      data: null
   })
}
}
module.exports = {userSignup, updateUserStatus, getUserid, signin, getAllUsers };

