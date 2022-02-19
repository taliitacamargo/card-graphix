const { Schema, model } = require('mongoose');

const cardSchema = new Schema({

    // id: {
    //     type: String,
    //     required: true,
    //     trim: true,
    // },

    logo: {
        type: String,
        required: false,
    },

    components: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Component',
        },
    ],

    ProfileId: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Profile',
        }
    ]


});

const Card = model('Card', cardSchema);

module.exports = Card;