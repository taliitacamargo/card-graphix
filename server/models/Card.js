const { Schema, model } = require('mongoose');

const cardSchema = new Schema({

    id: {
        type: String,
        required: true,
        trim: true,
    },

    components: [
        {
            NameValue: {
                type: String,
                required: true,
                trim: true,
            },
            TitleValue: {
                type: String,
                required: true,
            },
            Phone1Value: {
                type: Number,
                required: true,
            },
            phoneNum2Field: {
                type: Number,
                required: false,
            },
            emailField: {
                type: String,
                required: true,
            },
            websiteField: {
                type: String, 
                required: false,
            },
            logo: {
                type: String, 
                required: false, 
            },
            // add an image  field ( call it logo)
            //  as well  for business card background
            // we are using claudinary url for logos
            // component array should hold all cardBuilder info 

        },
    ],

});

const Card = model('Card', cardSchema);

module.exports = Card;