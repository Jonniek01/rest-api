const fs =require('fs')
let users=null

fs.readFile('MOCK_DATA.json', (err, data) => {
    if (err) throw err;
    users = JSON.parse(data);
});

module.exports = {

getUsers: (req, res) =>{
   if (users){
    return res.status(200).send({
        status:200,
        success:true,
        message:"users succesfully fetched",
        data:users
    })
   }
    res.status(400).send({
        status:400,
        success:false,
        message:"failed to get users",
        data:[]
    })

},

getUser: (req, res) =>{
    const {email} = req.params
   const foundUser = users.filter((user) => user.email==email)
   if (foundUser.length>0){
    return res.status(200).send({
        status:200,
        success:true,
        message:"user succesfully fetched",
        data:foundUser
    })
   }
    res.status(404).send({
        status:404,
        success:false,
        message:"USER NOT FOUND",
        data:[]
    })

},

 logIn:(req, res)=>{
    const {email,password} = req.body
    const user=users.find(user=>user.email===email)
    


         if (user.Password===password){
            return res.status(200).send({
              status:200,
              success:true,
              message:"SUCCESFULLY LOGGED IN",
              data:user
          })
         }
         res.status(401).send({
              status:401,
              success:false,
              message:"LOG IN FAILED",
              data:[]
          })
      

}
}


