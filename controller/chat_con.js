const Chat = require("../models/chat_model");


// Get all todos
const getChats = async (req, res) => {
  try {
    const todos = await Chat.find();
    res.status(200).json(todos);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch todos' });
  }
}

const saveChats = async (req, res) => {
  try {
    let data = req.body
    const todos = await Chat.insertOne(data);
    res.status(201).json(todos);
  } catch (err) {
    res.status(500).json({ error: 'Failed to create todos' });
  }
}

// const removeTodo = async (req, res) => {
//   try {
//     let data = req.body
//     const todos = await Chat.deleteOne(data);
//     res.status(200).json(todos);
//   } catch (err) {
//     res.status(500).json({ error: 'Failed to delete todo' });
//   }
// }

// const updateTodo = async (req, res) => {
//   try {
//     let data = req.body
//     const todos = await Chat.findOneAndUpdate({_id:data._id},data);
//     res.status(200).json(todos);
//   } catch (err) {
//     res.status(500).json({ error: 'Failed to delete todo' });
//   }
// }

module.exports = {getChats, saveChats};

