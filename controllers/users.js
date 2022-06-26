import { v4 as uuidv4 } from 'uuid'
import fs from 'fs'
let users=null

fs.readFile('MOCK_DATA.json', (err, data) => {
    if (err) throw err;
    users = JSON.parse(data);
});




export const getUsers= (req, res) =>{
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




}

export const getUser= (req, res) =>{
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

}

