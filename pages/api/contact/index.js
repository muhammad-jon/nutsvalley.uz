const nodemailer = require("nodemailer");

export default function handler(req, res) {
    const { name, email, theme, phone, message } = req.body;
    try {
        const mailTransporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: "nutsvalleyuz@gmail.com",
                pass: "xvdatqidliupxytj",
            },
            secure: true,
        });

        const details = {
            from: email,
            to: "nutsvalleyuz@gmail.com",
            subject: `Имя ${name}`,
            text: `
            Тел номер: ${theme}.
            phone: ${phone}.
            Почта: ${message}.
            `,
        };

        mailTransporter.sendMail(details, (err) => {
            if (err) {
                res.status(500).send({ error: "sending message Error" });
            } else {
                res.status(200).send({ send: "send message" });
            }
        });
    } catch (err) {
        console.log("Catch Error" + err);
        res.status(500).send({ error: "failed to fetch data" });
    }
}
