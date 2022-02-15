const { Schema, model } = require('mongoose');

const ComponentSchema = new Schema ({
   id: {
       type: String,
   },
   class: {
       type: String,
   },
   value: {
       type: String,
   },
   style: {
    // make it an array of variables since cards 
    // will not have the same style 
    // some cards may or may not have all phone numbers for example 
    
   },
})