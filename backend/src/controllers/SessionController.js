const connection = require('../database/connection');

module.exports = {
    async create(request,response){
        const { id } = request.body;

        const ong = await connection('ongs')
            .where('id', id)
            .select('name')
            .first();//retorna somente o nome da ong do id encontrado

        if(!ong){
            //caso não encontre a Ong com o id
            return response.status(400).json({error: 'No ONG found with this ID'});
        }

        return response.json(ong);

    }

}