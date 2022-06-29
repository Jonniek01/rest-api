

const data  = require('../MOCK_DATA.json')
const poolPromise = require('../config/poolPromise')
const { user } = require('../config/config')


module.exports = {
    
    getUsers: async(req, res)=>{

            let pool = await poolPromise()
            pool.query(`select * FROM users`).then(results=>{
                res.json({
                    status:200,
                    success: true,
                    message: "success",
                    results:results.recordset})
            }

            )
        

        
    },

    getUser: async(req, res)=>{

        const {email} = req.params
        let pool = await poolPromise()
        pool.query(`select * FROM users WHERE email='${email}'`).then(results=>{
            let user=results.recordset[0]
            if(user){
                return res.status(200).json({
                    status:200,
                    success: true,
                    message: "success",
                    results:user})}

                res.status(404).json({
                    status:404,
                    success: false,
                    message: "not found",
                    results:{}})
                    }

                    )


    
    

                
    },

    logIn: async (req, res)=>{
        const {email, password} = req.body
        let pool = await poolPromise()
        pool.query(`select * FROM users WHERE email='${email}'`).then(results=>{
            let user=results.recordset[0]
            if(user){
                let pass=user.password
                if(password===pass){
                        return res.json({
                            status:200,
                            success: true,
                            message: "Logged in successfully",
                            results:user})

                }
                        res.status(401).json({
                        status:401,
                        success: false,
                        message: "Wrong password",
                        results:{}})


                
                
                
                }

                res.status(404).json({
                    status:404,
                    success: false,
                    message: "Invalid email",
                    results:{}})


        })


        
    },

    create: async(req, res)=>{
        let {id, first_name, last_name, email, gender, Password} = req.body
            let pool = await poolPromise()
       
            pool.query(`insert into users 
                        VALUES('${id}', '${first_name}', '${last_name}', '${email}', '${gender}', '${Password}')`)
                        .then(results=>{
                            if(results.rowsAffected){
                                res.send("user added")
                                console.log("user added")
                            }})
              
        }   
}





