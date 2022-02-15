const { Schema, model } = require('mongoose');

const CardSchema = new Schema ({

    id: {
        type: String,
        required: true, 
        trim:true,
    },

    components: [
        {
        type: String,
        trim: true,
    },
],

});