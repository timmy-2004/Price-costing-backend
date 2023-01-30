const Users = require('../model/user.model')

async function adminSignup  ()  {

  try{
    const superAdmin =  await Users.findOne({ email: "akandeozavize@gmail.com"} )

     if(!superAdmin){
        const createAdmin = await  Users.create({
            "userName": "Akande Ozavize",
            "email":"akandeozavize@gamil.com",
            "password":"12345678",
            "role":"super_admin",
            "status": "approved",
        })
 
     }
    

  }catch(err){
    console.log(err) 
    
  }
};

module.exports = {adminSignup} 