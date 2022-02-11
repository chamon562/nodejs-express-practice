import express from "express"
const router = express.Router()
// if going to localhost:8000/users will say cannot get /users
// because in server.js added /users to all routes for the users.js 
// so it in order to get to this route it would like localhost:8000/users/users 
// so going to take out /users from ther users.js file
router.get("/", (req,res) =>{
    res.send("Hello this is users get")
})



// module.exports = router
export default router