import { default as PsicologoRepository } from '../../models/psicologos/psicologosModel.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();
const jwtsecret = process.env.JWT_SECRET;

export default class AuthController {
    static async login(request, response) {
        try {
            const { email, senha } = request.body;
            const user = await PsicologoRepository.findOne({
                where: {
                    email,
                },
            });

            if (!user)
                return response.status(404).json({
                    message: 'Falha na operação',
                    data: 'Usuário não encontrado',
                });

            if (!senha)
                return response.status(400).json({
                    message: 'Falha na operação',
                    data: `É necessario preencher a senha`,
                });

            const passwordIsValid = bcrypt.compareSync(senha, user.senha);

            if (!passwordIsValid) {
                return response.status(401).json({
                    message: 'Falha na operação',
                    data: 'Usuário não autorizado',
                });
            }

            const token = jwt.sign(
                { id: user.id, email: user.email, nome: user.nome },
                jwtsecret,
                { expiresIn: 86400 }
            );

            return response.status(200).json({
                message: 'Operação bem-sucedida!',
                data: [token],
            });
        } catch (error) {
            console.error('Erro na operaçnao de login: ', error);
            return response
                .status(500)
                .json({ message: 'Falha na operação', data: {} });
        }
    }
}
