const EmailTemplate = require('../models/emailTemplate');
const path = require('path');
const bodyParser = require('body-parser');
const express = require('express');
const app = express();





app.use(express.urlencoded({extended:true}));
// Get layout HTML
exports.getEmailLayout = (req, res) => {
  res.render('layout',{title : null ,content : null ,footer : null , imageUrl : null});
};

exports.image = (req,res) =>{
  console.log("Camed image upload get route");
  
  res.render("editor");
};

// Upload image
exports.uploadImage = async (req, res) => {
  console.log("Camed image upload post route");
  
  
  
  // try {
  //   const uploadResponse = await cloudUpload(req.file); // Replace with your upload logic
  //   console.log(uploadResponse); // Inspect the response

  //   // Redirect after extracting the URL or ID
  //   res.redirect(`/success?fileUrl=${uploadResponse.secure_url}`);
  // } catch (error) {
  //   console.error(error);
  //   res.status(500).send('Upload failed');
  // }


  const file = req.file;
  if (!file) return res.status(400).send('No file uploaded');
  
  let imageUrl = file.path;
  
  res.cookie("imageUrl", imageUrl, {
    httpOnly: true,      
  });
  console.log("cookie ", req.cookies.imageUrl);
  
  res.render('layout', {imageUrl});
  // res.send("post upload");
};





// Save template
exports.saveEmailConfig = async (req, res) => {
  try {
    const { title, content,  titleSize , titleColor , contentSize , contentColor } = req.body;
    const imageUrl = req.cookies.imageUrl;
   
    
    let settings = {
      titleSize,
      titleColor,
      contentSize,
      contentColor
    };
    res.clearCookie('imageUrl');
    res.cookie("data", { title, content , imageUrl , settings }, {
      httpOnly: true,
    });
    
    res.redirect("/renderAndDownloadTemplate");
  } catch (err) {
    res.send("Data not ");
  }
};

// Render template
exports.renderAndDownloadTemplate = async (req, res) => {
  const data = req.cookies.data;

  res.render('success',{data} );
};
