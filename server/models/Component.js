const { Schema, model } = require('mongoose');

const componentSchema = new Schema({
    id: {
        type: String,
        required: true,
        trim: true,
    },

    compClass: {
        type: String,
        required: true,
    },
    compValue: {
        type: String,
    },
    compStyle: {
        type: String,
    },

});

const Component = model('Component', componentSchema);

module.exports = Component;





