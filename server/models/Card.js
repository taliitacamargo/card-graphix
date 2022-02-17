const { Schema, model } = require('mongoose');

const cardSchema = new Schema({

    id: {
        type: String,
        required: true,
        trim: true,
    },

    logo: {
        type: String,
        required: false,
        // add an image  field ( call it logo)
        //  as well  for business card background
        // we are using cloudinary url for logos
        // component array should hold all cardBuilder info 
    },

    components: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Component',
        },
    ],

});

const Card = model('Card', cardSchema);

module.exports = Card;