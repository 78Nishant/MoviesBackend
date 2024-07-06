require('dotenv').config()
const cors=require('cors'); //this should be defined at the top always
const express=require('express');
const server=express();
const movieRouter=require('./routes/movie')
server.use(cors());

const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(process.env.CONNECT_URI);

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
server.use('/',movieRouter.router)

const port=process.env.PORT || 4000
server.listen(port,()=>{
    console.log(`server started at ${port}`)
})

