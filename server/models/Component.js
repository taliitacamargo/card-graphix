const { Schema, model } = require('mongoose');

const ComponentSchema = new Schema({
    id: {
        type: String,
    },

    class: {
        type: String,
    },
    value: {
        type: String,
    },
    style: [
        {
        // make it an array of variables since cards 
        // will not have the same style 
        // some cards may or may not have all phone numbers for example 
        // may use JSON.stringify (how to store an object in mongoose schema)
        // either figure out a way to make this an array so that we go through all the data at once
        // or we make another model for style (not the best option)
        },
    ],

})