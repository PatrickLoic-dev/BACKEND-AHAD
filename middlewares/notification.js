const nodemailer = require('nodemailer');

async function sendConfirmationEmail(transaction) {
    // Créer un transporteur SMTP réutilisable à l'aide des informations d'identification de votre compte Gmail
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'lilkewell@gmail.com',
            pass: 'kewell237'
        }
    });

    // Définir les options de l'e-mail
    let mailOptions = {
        from: 'lilkewell@gmail.com',
        to: transaction.email,
        subject: 'Confirmation de transaction',
        text: `Cher(e) ${transaction.nom},\n\nVotre transaction a été confirmée avec succès.`
    };

    try {
        // Envoyer l'e-mail
        let info = await transporter.sendMail(mailOptions);
        console.log('E-mail envoyé :', info.messageId);
    } catch (error) {
        console.error('Erreur lors de l\'envoi de l\'e-mail :', error);
    }
}

// Exemple d'utilisation de la fonction
const transaction = {
    nom: 'John Doe',
    email: 'john.doe@example.com'
};

sendConfirmationEmail(transaction);