const express = require('express')
const router = express.Router()
const User = require('../model/user');
const jwt = require('jsonwebtoken');
const config =  require('../config')



router.post('/login', function(req, res){
    const { email, password } = req.body

    if(!email) {
        return res.status(422).send({ errors: [{ title: 'User error', detail: 'Please fill email' }] })
    }
    if(!password) {
        return res.status(422).send({ errors: [{ title: 'User error', detail: 'Please fill password' }] })
    }

    User.findOne({email}, function(err, foundUser){
        if(err){
            return res.status(422).send({ errors: [{ title: 'User error', detail: 'Something went wrong' }] })
        }
        if(!foundUser) {
            return res.status(422).send({ errors: [{ title: 'User error', detail: 'User is not exist' }] })
        }
    const { email, password } = req.body
        if(!foundUser.hasSamePassword(password)){
            return res.status(422).send({ errors: [{ title: 'User error', detail: 'Incorrect password' }] })
        }

        const token = jwt.sign({
            userId: foundUser.id, 
            username: foundUser.username
          }, config.SECRET, { expiresIn: '1h' });

        return res.json(token)
    })

})

router.post('/register', function(req, res){
    const { username, email, password, confirmPassword } = req.body

    // 上と同じ意味
    // const username = req.body.username
    // const email = req.body.email
    // const password = req.body.password
    // const confirmPassword = req.body.confirmPassword
    
    if(!username) {
        return res.status(422).send({ errors: [{ title: 'User error', detail: 'Please fill username' }] })
    }
    if(!email) {
        return res.status(422).send({ errors: [{ title: 'User error', detail: 'Please fill email' }] })
    }
    if(!password) {
        return res.status(422).send({ errors: [{ title: 'User error', detail: 'Please fill password' }] })
    }
    if(password !== confirmPassword) {
        return res.status(422).send({ errors: [{ title: 'User error', detail: 'Please check password' }] })
    }

    User.findOne({email}, function(err,foundUser){
        if(err){
            return res.status(422).send({ errors: [{ title: 'User error', detail: 'Something went wrong' }] })
        }
        if(foundUser) {
            return res.status(422).send({ errors: [{ title: 'User error', detail: 'User already exist' }] })
        }
    
        const user = new User({username, email, password})
        user.save(function(err){
            if(err){
                return res.status(422).send({ errors: [{ title: 'User error', detail: 'Something went Wrong' }] })
            }
            return res.json({"registerd": true})
        })
        router.use(express.json())
    })

    // Product.findById(productId, function(err,foundProduct){
    // if(err) {
    //     return res.status(422).send({errors: [{title: 'Product error', detail: 'Product not found!'}]})
    // }
        // return res.json({username, email, password})
    // })
})

module.exports = router