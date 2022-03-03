const { Schema, model } = require('mongoose');

const cardSchema = new Schema({
    logo: {
        type: String,
        required: false,
    },
    selectedLayoutField: {
        type: Number,
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