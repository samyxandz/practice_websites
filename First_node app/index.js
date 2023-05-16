const express=require('express');
const path =require('path')
const app = express();
const reddit_data=require('./data.json')


app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'))

app.get('/',(req,res)=>{
    res.render('home')})

app.get('/rand',(req,res)=>{
    const num=Math.floor(Math.random()*100);
    res.render('random',{rand:num})
})
app.get('/cats',(req,res)=>{
    const cats=['Blue','Rocket','pinky']

    res.render('cats',{cats})
})
app.get('/r/:subreddit',(req,res)=>{
    const {subreddit}=req.params;
    const data=reddit_data[subreddit]
    if (data){
    res.render(`subreddit`,{...data})
    }
    else {
        res.render('notfound',{subreddit})
    }
})
app.listen(8000,()=>{
    console.log("listening to port 8000")
})