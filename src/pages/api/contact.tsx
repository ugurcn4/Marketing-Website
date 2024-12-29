import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';//E-posta göndermek için kullanılır.

// E-posta gönderme işlemi için handler fonksiyonu oluşturuldu.
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        // Kullanıcıdan gelen form verileri alındı.
        const { name, email, product, message } = req.body;

        // Nodemailer için transporter oluşturuldu.
        //E-mail bilgileri .env dosyasında bulunmaktadır.
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.GMAIL_USER, // Gmail kullanıcı adı
                pass: process.env.GMAIL_PASS, // Gmail şifresi veya uygulama şifresi 
            },
        });

        // Gönderilecek e-posta içeriği
        const mailOptions = {
            from: email, // Kullanıcının e-posta adresi
            to: process.env.GMAIL_USER, // Hedef e-posta adresi 
            subject: `New message about ${product}`, // E-posta başlığı
            html: `Name: ${name}\nEmail: ${email}\nProduct: ${product}\nMessage: ${message}`, // E-posta içeriği
        };

        try {
            // E-posta gönderimi
            await transporter.sendMail(mailOptions);
            res.status(200).json({ message: 'Email sent successfully' }); // Başarılı mesajı
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Failed to send email' }); // Hata mesajı
        }
    } else {
        // Sadece POST isteklerine izin verildi.
        res.status(405).json({ message: 'Method Not Allowed' }); // Yöntem hatası mesajı
    }
}