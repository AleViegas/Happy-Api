import { Request, Response } from 'express'
import { getRepository } from 'typeorm'
import * as Yup from 'yup'

import Orphanage from '../models/orphanages'

import orphanageView from '../views/orphanages_view'

// controller é comum usar metodos index, create, update, delete, show

export default {
    async index(request: Request, response: Response) {
        // listagem dos orfanatos
        const orphanagesRepository = getRepository(Orphanage)
        // getRepository do orm que linka uma classe a uma tabela
        const orphanages = await orphanagesRepository.find({
            relations: ['images']
        })
        // metodo de procura, é possivel utilizar parametros dentro

        return response.json(orphanageView.renderMany(orphanages))
    },

    async show(request: Request, response: Response) {
        const { id } = request.params
        
        const orphanagesRepository = getRepository(Orphanage)
        
        const orphanage = await orphanagesRepository.findOneOrFail(id, {
            relations: ['images']
        })
        
        return response.json(orphanageView.render(orphanage))
    },

    async create(request: Request, response: Response) {
        const {
            name,
            latitude,
            longitude,
            about,
            instructions,
            opening_hours,
            open_on_weekends,
        } = request.body;
        
        const orphanagesRepository = getRepository(Orphanage)

        // todas as images uploaded vem no request.files
        const requestImages = request.files as Express.Multer.File[];

        const images = requestImages.map(image => {
            return { path: image.filename }
        })
    
        const data = {
            name,
            latitude,
            longitude,
            about,
            instructions,
            opening_hours,
            open_on_weekends: open_on_weekends === "true",
            images
        }

        // modelo de validação
        const schema = Yup.object().shape({
            name: Yup.string().required(),
            latitude: Yup.number().required(),
            longitude: Yup.number().required(),
            about: Yup.string().required().max(300),
            instructions: Yup.string().required(),
            opening_hours: Yup.string().required(),
            open_on_weekends: Yup.boolean().required(),
            images:Yup.array(
                Yup.object().shape({
                    path: Yup.string().required()
                })
            ).required()
        });

        await schema.validate(data, {
            abortEarly: false,
        })

        const orphanage = orphanagesRepository.create(data);
    
        await orphanagesRepository.save(orphanage)
    
        return response.status(201).json(orphanage)
    }
}