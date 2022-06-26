import fs from 'fs'
let users=null
fs.readFile('MOCK_DATA.json', (err, data) => {
    if (err) throw err;
    users = JSON.parse(data);
});



export const logIn=(req, res)=>{
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