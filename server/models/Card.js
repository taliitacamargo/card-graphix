const { Schema, model } = require('mongoose');

const cardSchema = new Schema({

    id: {
        type: String,
        required: true,
        trim: true,
    },

    components: [
        {
            name: {
                type: String,
                required: true,
                trim: true,
            },
            title: {
                type: String,
                required: true,
            },
            phone: {
                type: Number,
                required: true,
            },
            address: {
                type: String, 
                required: true,
            },
            email: {
                type: String,
                required: true,
            },
            website: {
                type: String, 
                required: false,
            },
            logo: {
                type: String, 
                required: false, 
            },
            // add an image  field ( call it logo)
            //  as well  for business card background
            // we are using cloudinary url for logos
            // component array should hold all cardBuilder info 
        },
    ],

});

const Card = model('Card', cardSchema);

module.exports = Card;