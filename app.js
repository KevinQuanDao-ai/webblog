const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const ejs = require("ejs");
const mongoose = require("mongoose");

const app = express();
app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended:  false,}));
app.use(express.static("public"));

mongoose.connect('mongodb://localhost:27017/postDB', {useNewUrlParser: true});


// built collection for story post
var storyPostSchema = {
  title: String,
  main: String,
  image: String,
}
var StoryPostModel = mongoose.model('storyPost',storyPostSchema)

// built collection for knowledge post
var knowPostSchema = {
  title: String,
  main: String,
  image: String,
}
var KnowPostModel = mongoose.model('knowPost',knowPostSchema)

const storyPosts = [];
const knowledgePosts = [];

const sampleStory = new StoryPostModel({
  title: "story1",
  main: "this is the best story",
  image: "imgs1",
})

const sampleKnow = new KnowPostModel({
  title: "knowledge1",
  main: "this is the best knowledge",
  image: "imgk1",
})

sampleKnow.save()
sampleStory.save()
// get and post in home
//1. left panel
//1.1 story
//1.1.1 Big story
var storyPostMain1 = 'storyPostMain1'
var storyPostTitle1 = 'storyPostTitle1'
var storyPostImg1 = 'pic1.jpeg'
//1.1.2 Small story
// -1
var storyPostMain2 = 'storyPostMain2'
var storyPostTitle2 = 'storyPostTitle2'
var storyPostImg2 = 'pic2.jpeg'
// -2
var storyPostMain3 = 'storyPostMain3'
var storyPostTitle3 = 'storyPostTitle3'
var storyPostImg3 = 'pic2.jpeg'
//1.2 knowledge
//1.2.1 Big knowledge
var knowPostMain1 = 'knowPostMain1'
var knowPostTitle1 = 'knowPostTitle1'
var knowPostImg1 = 'pic1.jpeg'
//1.2.2 Small knowledge
// -1
var knowPostMain2 = 'knowPostMain2'
var knowPostTitle2 = 'knowPostTitle2'
var knowPostImg2 = 'pic2.jpeg'
// -2
var knowPostMain3 = 'knowPostMain3'
var knowPostTitle3 = 'knowPostTitle3'
var knowPostImg3 = 'pic2.jpeg'

//2. right panel
app.get("/",function (req,res){
  const renderInjectedInfor = {
    storyPostTitle1EJS: storyPostTitle1,
    storyPostMain1EJS: storyPostMain1,
    storyPostImg1EJS: storyPostImg1,
    storyPostTitle2EJS: storyPostTitle2,
    storyPostMain2EJS: storyPostMain2,
    storyPostImg2EJS: storyPostImg2,
    storyPostTitle3EJS: storyPostTitle3,
    storyPostMain3EJS: storyPostMain3,
    storyPostImg3EJS: storyPostImg3,

    knowPostTitle1EJS: knowPostTitle1,
    knowPostMain1EJS: knowPostMain1,
    knowPostImg1EJS: knowPostImg1,
    knowPostTitle2EJS: knowPostTitle2,
    knowPostMain2EJS: knowPostMain2,
    knowPostImg2EJS: knowPostImg2,
    knowPostTitle3EJS: knowPostTitle3,
    knowPostMain3EJS: knowPostMain3,
    knowPostImg3EJS: knowPostImg3,
  }

  res.render("main",renderInjectedInfor);
})

// get and post in compose
app.get("/compose", function (req,res){
  res.render("compose",{})
})

app.post("/compose", function (req,res){
  console.log(req.body);
  res.redirect("/");
})

// get and post in about
//1. left panel
//2. right panel
app.get("/about", function (req,res){
  res.render("about",{})
})

// get and post in story
//1. left panel
//2. right panel
app.get("/story", function (req, res){
  res.render("story",{})
})

// get and post in post
//1. left panel
//2. right panel
app.get("/posts/:postTilte", function (req,res){
  res.render("post",{})
})

// listen to websites
app.listen(3000, function () {
  console.log("Listenning at port 3000");
});
