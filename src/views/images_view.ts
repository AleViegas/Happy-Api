// tratamento dos dados que vieram do banco de dados, a fim de envia-los ao front-end numa melhor maneira

import Image from '../models/images'

export default {
    render(image: Image) {
        return {
            id: image.id,
            url: `https://aleviegas-happy-api.herokuapp.com/uploads/${image.path}`
        } 
    },

    renderMany(images: Image[]) {
        return images.map(image => this.render(image))
    }
}
