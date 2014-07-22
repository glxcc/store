/**
 * Created by xuejiaowang on 22/07/2014.
 */

/**
 * Noodles module
 */

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;


var NoodleSchema = new Schema({
    title:{
        type: String,
        required:true,
        trim:true
    },
    description:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true,
        trim:true
    },
    price:{
        type:Number,
        required:true,
        get:getPrice,
        set:setPrice
    }
})


/**
 * validation
 */

NoodleSchema.path('title').validate(function(title){
    return !!title;
}, 'Title can not be blank')


function getPrice(num){
    return (num/100).toFixed(2);
}

function setPrice(num){
    return num*100;
}