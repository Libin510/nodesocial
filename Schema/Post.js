const mongoose = require('mongoose');


const  postSchema=mongoose.Schema({

  title:{type:String} ,
  content:{type:String} ,
  caption:{type:String},
  author:{type:String}
  
})


const Post = mongoose.model('Post', postSchema);

module.exports = Post;
