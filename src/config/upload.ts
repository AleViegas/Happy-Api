import multer from 'multer'
import path from 'path'

// config do multer - upload de arquivo 
// vai ser instanciado na routes.ts
export default {
    storage: multer.diskStorage({
        // tem diversas maneiras de armazenar
        destination: path.join(__dirname, '..', '..', 'uploads'),
        filename: (request, file, cb) => {
            const fileName = `${Date.now()}-${file.originalname}`;

            cb(null ,fileName)
        }
    })
}