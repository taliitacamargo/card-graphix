const { Schema, model } = require('mongoose');

const cardSchema = new Schema({

    id: {
        type: String,
        required: true,
        trim: true,
    },

    components: [
        {
            type: String,
            trim: true,
        },
    ],

});

const Card = model('Card', cardSchema);

module.exports = Card;