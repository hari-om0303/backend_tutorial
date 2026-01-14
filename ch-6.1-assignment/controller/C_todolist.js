const Todolist = require('../models/M_todolist').Todolist;


// create todolist
exports.create = async (req ,res)=>{
   try{ const newtodolist = new Todolist(req.body);
    const savedtodolist = await newtodolist.save();
    res.status(201).json(savedtodolist);
}catch(err){
     res.status(400).json({
      message: err.message,
      errors: err.errors
})
}};

// insertion of multiple todolists without error handling
exports.createMany = async (req ,res)=>{
    const newtodolists = await Todolist.insertMany(req.body);
    res.status(201).json(newtodolists);
   }
// insertion of multiple todolists with error handling
// exports.createMany = async (req, res) => {
//   try {
//     const savedTodolists = await Todolist.insertMany(req.body);

//     res.status(201).json({
//       message: "Multiple todolists created successfully",
//       count: savedTodolists.length,
//       data: savedTodolists
//     });

//   } catch (err) {
//     res.status(400).json({
//       message: err.message,
//       errors: err.errors
//     });
//   }
// };

// get a single todolist by id
exports.getTodolist = async (req , res)=>{
    const id = req.params.id;
    const todolits = await Todolist.findById(id);
    res.json(todolits);
}

// get all todolists
exports.getAllTodolists = async (req , res) =>{
    const todolists = await Todolist.find();
    res.json(todolists);
}


exports.updateTodolist = async (req, res) => {
    const id = req.params.id;
    const data = await Todolist.findOneAndReplace({_id: id} , req.body , {new : true});
    res.json(data);
}

exports.updateTodolist2 = async (req, res) => {
    const id = req.params.id;
    const data = await Todolist.findOneAndUpdate({_id: id} , req.body , {new : true});
    res.json(data);
}

// delete todolist
exports.deleteTodolist = async (req , res) =>{
    const id = req.params.id;
    const data = await Todolist.findOneAndDelete({_id: id});
    res.json(data);
}