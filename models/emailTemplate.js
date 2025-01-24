const mongoose = require('mongoose');

const emailTemplateSchema = new mongoose.Schema({
  title: String,
  content: String,
  
  imageUrl: String,
  settings : {
    titleSize : String,
    titleColor : String,
    contentSize : String,
    contentColor : String
  }
});

module.exports = mongoose.model('EmailTemplate', emailTemplateSchema);
