// /pages/api/signup.ts
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { username, email, password } = req.body;

        if (!username || !email || !password) {
            return res.status(400).json({ message: 'Eksik alanlar var.' });
        }

        try {
            return res.status(200).json({ message: 'Kayıt başarıyla oluşturuldu!' });
        } catch (error) {
            return res.status(500).json({ message: 'Bir hata oluştu.' });
        }
    } else {
        res.status(404).json({ message: 'API endpoint not found.' });
    }
}
