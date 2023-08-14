const nodemailer = require("nodemailer");
const Mailgen = require('mailgen');
const mailperform1 = async (req, res) => {
    let testAccount = await nodemailer.createTestAccount();
    let transporter = await nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        auth: {
            user: 'quentin.strosin@ethereal.email',
            pass: '1xK2VaVuNnY2FfRX6q',
        },
    });
    let info = await transporter.sendMail({
        from: '"Nikhil Gupta" <itsganeshlko02@gmail.com>',
        to: "karangupta1907@gmail.com",
        subject: "Hello Greetings",
        text: "Hello good afternoon bhaiji",
        html: "<b> Hello Bhaiji</b>",
    });
    console.log("msg id is : %s", info.messageId);
    res.send("I m sending mail");

}
const mailperform2 = async (req, res) => {
    //'ukxxeyhhugokhgcs'
    //'itsganeshlko02@gmail.com'
    //const { userEmail } = 'karangupta1907@gmail.com';
    const { userEmail } = 'niraj.official89@gmail.com';
    let config = {
        service: 'gmail',
        auth: {
            user: 'itsganeshlko02@gmail.com',
            pass: 'ukxxeyhhugokhgcs',
        }
    }
    let transporter = nodemailer.createTransport(config);
    let MailGenerator = new Mailgen({
        theme: "default",
        product: {
            name: "JAVA TUTORIAL",
            link: 'https://mailgen.js/'
        }
    })
    let response = {
        body: {
            name: "Java tutorial point",
            intro: "Java full data structure Course",
            table: {
                data: [
                    {
                        item: "98 videos each more than 20 minutes",
                        description: "Video by Nikhil Gupta",
                        price: "$100.00",
                    }
                ]
            },
            outro: "looking forword to do more business"
        }
    }
    let mail = MailGenerator.generate(response)
    let message = {
        from: 'itsganeshlko02@gmail.com',
        //to: 'karangupta1907@gmail.com',
        to: 'niraj.official89@gmail.com',
        subject: "Course Advertisement",
        html: mail,
    }
    transporter.sendMail(message).then(() => {
        return res.status(201).json({
            msg: "you should recieve an mail"
        })
    }).catch(error => {
        return res.status(500).json({ error })
    })
}

module.exports = { mailperform1, mailperform2 };