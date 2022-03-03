const { Schema, model } = require('mongoose');

const componentSchema = new Schema({
    compValue: {
        type: String,
    },
    compClass: {
        type: String,
        required: true,
    },
    compStyle: {
        type: Object,
    },
});

const Component = model('Component', componentSchema);

module.exports = Component;





