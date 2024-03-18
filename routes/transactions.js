const express = require('express');
const User = require('../models/user');
const authentification = require('../middlewares/authentification.js');
const router = express.Router();


/* Ensembles de routes lié à l'utilisateur */
router.post('/users', async (req, res, next) => {
                const user = new User(req.body);

                try {
                    const saveUser = await user.save();
                    res.status(200).send(saveUser);
                } catch (error) {
                    res.status(400).send(error);
                }
})

//Route de connexion utilisateur
.post('/users/login', async (req, res) => {
    try {
        const user = await User.findUser(req.body.mail, req.body.password);
        const authToken = await user.generateAuthTokenAndSaveUser();
        res.send({user, authToken});
    } catch (error) {
        res.status(400).send(error);
    }
})

//Route de déconnexion utilisateur
.post('/users/logout', authentification, async (req, res) => {
    try {
        req.user.authTokens = req.user.authTokens.filter((authToken) => {
            return authToken.authToken !== req.authToken;
        });

        await req.user.save();
        res.send();
    } catch (error) {
        res.status(500).send(error);
    }
})

//Route de déconnexion utilisateur en supprimant l'ensemble des tokens
.post('/users/logout/all', authentification, async (req, res) => {
    try {
        req.user.authTokens = []
        await req.user.save();
        res.send();
    } catch (error) {
        res.status(500).send(error);
    }
})

//Obtention de la liste des utilisateurs
.get('/users', authentification, async (req, res, next) => {
    try {
        const users = await User.find();
        res.send(users);
    } catch (error) {
        res.status(500).send(error);
    }
})

//Obtention du profil
.get('/users/me', authentification, async (req, res, next) => {
    res.send(req.user);
})

//Obtention d'un utilisateur via son id 
.get('/users/:id', authentification, async (req, res, next) => {
    const userId = req.params.id;

    try {
        const user = await User.findById(userId);

        if(!user) return res.status(404).send('User not found');
        res.send(user);
    } catch (error) {
        res.status(500).send(error);
    }
})

//Modification des données d'un utilisateur
.patch('/users/me', authentification, async (req, res, next) => {
    const updatedInfo = Object.keys(req.body);


    try {

        updatedInfo.forEach(update => req.user[update] = req.body[update]);
        await req.user.save();

        res.send(req.user);
    } catch (error) {
        res.status(500).send(error);
    }
})

//Supression d'un utilisateur spécifique par son id
.delete('/users/:id', authentification, async (req, res, next) =>{
    const userId = req.params.id;

    try {
        const user = await User.findByIdAndDelete(userId);
        
        if(!user) return res.status(404).send('User not found');
        res.send(user);
    } catch (error) {
        res.status(500).send(error);
    }
})

//Supression d'un utilisateur spécifique de son propre chef
.delete('/users/me', authentification, async (req, res, next) =>{

    try {
        await req.user.remove();
        
        res.send(req.user);
    } catch (error) {
        res.status(500).send(error);
    }
})

module.exports = router;