import paciente from '../../models/pacientes/pacientesModel.js';
import psicologo from '../../models/psicologos/psicologosModel.js';
//importar atendimento
import { ValidationError } from 'sequelize';

export default class DashboardController {
    static async findTotalPacientes(request, response) {
        try {
            const totalPacientes = await paciente.count();
            response
                .status(200)
                .json({ message: "Operação bem sucedida!", Total_Pacientes: totalPacientes });
        } catch (error) {
            console.log("Erro ao recuperar o total de pacientes: ", error);
            response
                .status(500)
                .json({ message: "Falha na operação", data: [] });
        }
    }

    static async findTotalPsicologos(request, response) {
        try {
            const totalPsicologos = await psicologo.count();
            response
                .status(200)
                .json({ message: "Operação bem sucedida!", total_Psicologos: totalPsicologos });
        } catch (error) {
            console.log("Erro ao recuperar o total de psicologos: ", error);
            response
                .status(500)
                .json({ message: "Falha na operação", data: [] });
        }
    }
    static async findTotalAtendimentos(request, response) {
        response.status(501).send();
        // GET /numero-de-atendimentos
        // try {
        //     const totalPsicologos = await psicologo.count();
        //     response
        //         .status(200)
        //         .json({ message: "Operação bem sucedida!", total_Psicologos: totalPsicologos });
        // } catch (error) {
        //     console.log("Erro ao recuperar o total de psicologos: ", error);
        //     response
        //         .status(500)
        //         .json({ message: "Falha na operação", data: [] });
        // }
    }
    
    static async findMediaAtendimento(request, response) {
        response.status(501).send();
        //GET /media-de-atendimentos-por-psicologos
        // try {
        //     const totalPsicologos = await psicologo.count();
        //     response
        //         .status(200)
        //         .json({ message: "Operação bem sucedida!", total_Psicologos: totalPsicologos });
        // } catch (error) {
        //     console.log("Erro ao recuperar o total de psicologos: ", error);
        //     response
        //         .status(500)
        //         .json({ message: "Falha na operação", data: [] });
        // }
    }
}