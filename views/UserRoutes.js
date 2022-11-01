/* A router for the user model. */

const express = require('express')
const router = express.Router()

const User = require('../models/user')

const db = require('../db/db')


//CRUD READ


    //Get the mail if a user
router.get('/findID/:mail', (req, res) => {
    let mail = req.params.mail
    User.findByPk(mail)
    .then(resp => {
        res.send(resp)
    })
})

//CRUD CREATE

    
    //Creating a new user
router.post('/register', async (req, res) => {
    try {
        let data = req.body
        let resp = await User.create({
            mail: data.mail,
            picture: data.picture,
            gender: data.gender,
            age: data.age,
            telephone: data.telephone,
            password: data.password
        })

        res.send(resp)
    } catch(error) {
        res.send(error)
    }
})

// CRUD UPDATE


    //Updating the user details
router.put('/updateUser', async (req, res) => {
    try{
        let data = req.body

        let resp = await User.update(
            {
                picture: data.picture,
                gender: data.gender,
                age: data.age,
                telephone: data.telefono,
                password: data.password
            }, 
            {
                where: { mail: data.mail}
            })

        res.send({
            resp: resp,
            message: "User details updated!",
            id: data.mail
        })

    } catch(error){
        res.send(error)
    }
})

// CRUD DELETE


    //Deleting the user from the database
router.delete('/deleteUser/:mail', async (req, res) => {
    try{
        
        let mail = req.params.mail
        let resp = await User.destroy({
            where: { mail: mail }
        })
        console.log(resp)
        if(resp == 1){
            res.send("User has been deleted")
        } else {
            res.send("Unable to delete user")
        }
        
    } catch(error){
        res.send(error)
    }
})


module.exports = router