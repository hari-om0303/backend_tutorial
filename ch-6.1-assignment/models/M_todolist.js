const Schema = require('mongoose').Schema;

const todolistSchema = new Schema({
    task : {type: String, required : true},
    expence_name :{type : String, required : true},
    amount : {type :Number, required : true , min:[0,'greater than 0']},
    date : {type : Date},
    discount : {type : Number, min:[0,'greater than 0'], max:[100,'less than 100']},
    type : {type : String, enum:['personal','work','other'], default:'personal'} 
})

exports.Todolist = require('mongoose').model('Todolist', todolistSchema);  