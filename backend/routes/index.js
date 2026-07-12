var express = require('express');
var router = express.Router();
var userModel=require("../models/userModel");
var bcrypt=require('bcryptjs');
const multer  = require('multer');
const path= require('path');
const Blog = require("../models/blogModel");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post("/signUp", async (req,res)=>{
  let{username,name, email,password}=req.body;
  let emailCon=await userModel.findOne({email:email});
  if(emailCon){
  return res.json({
      success:false,
      msg:"Email already exists"
    });
  }
  else{
    bcrypt.genSalt(12, (err, salt) => {
    bcrypt.hash(password, salt, async function (err, hash) {
      if(err)throw err;
      let user=await userModel.create({
        username:username,
        name:name,
        email:email,
        password:hash,
      });
      return res.json({
        success:true,
        msg:"User created successfully",

      })
    
   });
      });
  }
});
 router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await userModel.findOne({ email });

    if (!user) {
      return res.status(404).json({
        success: false,
        msg: "User not found"
      });
    }

    bcrypt.compare(password, user.password, (err, result) => {
      if (err) {
        return res.status(500).json({
          success: false,
          msg: "Error comparing password"
        });
      }

      if (!result) {
        return res.status(401).json({
          success: false,
          msg: "Invalid password"
        });
      }

      return res.status(200).json({
        success: true,
        msg: "Login successful",
        user
      });
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      msg: "Server error"
    });
  }
}); 
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    const extName=path.extname(file.originalname);
    cb(null, file.fieldname + "-" + uniqueSuffix + extName)
  }
})
 const upload = multer({ storage: storage });

router.post("/uploadBlog", upload.single("image"), async (req, res) => {
  try {
    const { title, description, content, author } = req.body;

    // uploaded image file
    const image = req.file ? req.file.filename : null;

    // validation
    if (!title || !description || !content || !author || !image) {
      return res.status(400).json({
        success: false,
        message: "All fields are required"
      });
    }

    // save to database
    const newBlog = new Blog({
      title,
      description,
      content,
      author,
      image
    });

    await newBlog.save();

    res.status(201).json({
      success: true,
      message: "Blog uploaded successfully",
      data: newBlog
    });

  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Server Error"
    });
  }
});     
module.exports = router;


 


