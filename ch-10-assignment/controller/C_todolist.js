import { Todolist } from '../models/M_todolist.js';
import ejs from 'ejs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const getAllTodo = async (req, res) => {
  const todolists = await Todolist.find();
  ejs.renderFile(
    path.resolve(__dirname, '../pages/todo.ejs'),
    { todolists },
    (err, str) => {
      if (err) return res.status(500).send(err.message);
      res.send(str);
    }
  );
};

// // create todolist
// exports.create = async (req ,res)=>{
//    try{ const newtodolist = new Todolist(req.body);
//     const savedtodolist = await newtodolist.save();
//     res.status(201).json(savedtodolist);
// }catch(err){
//      res.status(400).json({
//       message: err.message,
//       errors: err.errors
// })
// }};

// // insertion of multiple todolists without error handling
// exports.createMany = async (req ,res)=>{
//     const newtodolists = await Todolist.insertMany(req.body);
//     res.status(201).json(newtodolists);
//    }

// // get a single todolist by id
// exports.getTodolist = async (req , res)=>{
//     const id = req.params.id;
//     const todolits = await Todolist.findById(id);
//     res.json(todolits);
// }

// // get all todolists
// exports.getAllTodolists = async (req , res) =>{
//     const todolists = await Todolist.find();
//     res.json(todolists);
// }


// exports.updateTodolist = async (req, res) => {
//     const id = req.params.id;
//     const data = await Todolist.findOneAndReplace({_id: id} , req.body , {new : true});
//     res.json(data);
// }

// exports.updateTodolist2 = async (req, res) => {
//     const id = req.params.id;
//     const data = await Todolist.findOneAndUpdate({_id: id} , req.body , {new : true});
//     res.json(data);
// }

// // delete todolist
// exports.deleteTodolist = async (req , res) =>{
//     const id = req.params.id;
//     const data = await Todolist.findOneAndDelete({_id: id});
//     res.json(data);
// }