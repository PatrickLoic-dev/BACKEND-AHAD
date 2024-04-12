const express = require('express');
const User = require('../models/user/user');
const Rubrique = require('../models/rubrique/rubrique')
const authentification = require('../middlewares/authentification.js');
const Pret = require('../models/pret/pret.js');
const Cotisation = require('../models/cotisation/cotisation.js');
const upload = require('../middlewares/upload.js');
const Paiment = require('../models/paiement/paiment.js');
const router = express.Router();


/* Ensembles de routes lié à l'utilisateur */
router.post('/users', upload.single('avatar'), async (req, res, next) => {
                const user = new User(req.body);
                    if(req.file) {
                        user.avatar = req.file.path;
                    }
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
        const user = await User.findUser(req.body.email, req.body.password);
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
        const users = await User.find().populate('rubriques');
        res.send(users);
    } catch (error) {
        res.status(500).send(error);
    }
})

//Obtention du profil
.get('/users/me', authentification, async (req, res, next) => {
    const users = await User.findOne(req.user._id).populate('rubriques')
    res.send(users);
})

//Obtention d'un utilisateur via son id 
.get('/users/:id', authentification, async (req, res, next) => {
    const userId = req.params.id;

    try {
        const user = await User.findById(userId).populate('rubriques');

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

/* Ensembles des routes lié aux rubriques */
.get('/rubriques', authentification, async (req, res, next) => {
    try {
        const rubriques = await Rubrique.find();
        res.send(rubriques);
    } catch (error) {
        res.status(500).send(error);
    }
})

.post('/rubriques', authentification, async (req, res, next) => {
    const rubrique = new Rubrique(req.body);

    try {
        const saveRubrique = await rubrique.save();
        res.status(200).send(saveRubrique);
    } catch (error) {
        res.status(400).send(error);
    }
})

.post('/users/add-rubriques', authentification, async (req, res) => {
    try {
        const rubrique = new Rubrique(req.body);
        req.user.rubriques.push( rubrique );
        await req.user.save();
        res.send("Rubrique(s) ajouté");
    } catch (error) {
        res.status(400).send(error);
    }
})


/* Endpoints pour l'envoie de creation d'une demande de prêt */
.post('/pret', [authentification, upload.array('preuves')],async (req, res) => {
    const pret = new Pret(req.body);
    pret.userId = req.user._id;
    if(req.files) {
        let path = '';
        req.files.forEach(function(files, index, arr) {
            path = path + files.path + ',';
        })
        path = path.substring(0, path.lastIndexOf(","));
        pret.preuves = req.file.path;
    }
    try {
        const savePret = await pret.save();
        res.status(200).send(savePret);
    } catch (error) {
        res.status(400).send(error);
    }
})




/* Endpoints de cotisation */

.post('/cotisation/Init', authentification, async(req, res) => {
    const user = req.user;
    const rubrique = await Rubrique.findOne(req.rubrique)

    const cotisation = new Cotisation(
        userId = user._id,
        montant = req.body.montant,
        rubrique = req.rubrique
    ); 
    if(req.montant < rubrique.montant) {
        res.status(400).send("Montant insuffisant !")
    }  
    try {
        const saveCotisation = await cotisation.save();
        res.status(200).send(saveCotisation);
    } catch (error) {
        res.status(400).send(error);
    }
})

.get('/cotisation', authentification, async(req, res) => {
    const cotisations = await Cotisation.find(req.user)
if(cotisations == null){
    res.status(200).send("Aucune cotisations trouvé pour cet utilisateur")
}else{
    res.status(200).send(cotisations)
}

})

.get('/cotisations/rubrique/:id', authentification, async (req, res) => {
    const rubriqueId = req.params.id;
    try {
        const transactions = await Cotisation.find({ rubrique: rubriqueId, userId : user._id  });
        let totalAmount = 0;
        transactions.forEach(transaction => {
            totalAmount += transaction.amount;
        });
        res.send({ totalAmount });
    } catch (error) {
        res.status(500).send(error);
    }
})

.get('/cotisations/rubrique/:id', authentification, async (req, res) => {
    const rubriqueId = req.params.id;
    try {
        const transactions = await Cotisation.find({ rubrique: rubriqueId }).populate('user', 'name avatar');
        let totalAmount = 0;
        const users = transactions.map(transaction => {
            totalAmount += transaction.amount;
            return {
                name: transaction.user.name,
                avatar: transaction.user.avatar
            };
        });
        res.send({ totalAmount, users });
    } catch (error) {
        res.status(500).send(error);
    }
})

.get('/cotisations/rubrique/:id', authentification, async (req, res) => {
    const user = req.user;
    const rubriqueId = req.params.id;
    try {
        const transactions = await Cotisation.find({ rubrique: rubriqueId, userId : user._id }).populate('user', 'name avatar');
        res.send(transactions);
    } catch (error) {
        res.status(500).send(error);
    }
})

// Endpoint pour le webhook de paiement
.post('/webhook', async (req, res) => {
    const event = req.body;
    const paiment = new Paiment();
    
    try {
        // Retrieve the request's body
        // Sauvegarder les données de paiement dans la base de données
        paiement.save(event);
        // res.status(200).send("Données de paiement sauvegardées avec succès");
    } catch (error) {
        console.log('Event : '+ event);
        res.status(500).send(error);
        console.log('Erreur : '+ error);
    }
})




module.exports = router;