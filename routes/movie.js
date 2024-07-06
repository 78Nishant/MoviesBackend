const express=require('express');
const moviecontroller=require('../controller/movie');
const seriescontroller=require('../controller/series');
const router=express.Router();

router
.get('/movie',moviecontroller.getProduct)
.get('/movie/:id',moviecontroller.rankProduct)
.get('/movie/:name',moviecontroller.nameProduct)
.get('/series',seriescontroller.getProduct)
.get('/series/:id',seriescontroller.rankProduct)

exports.router=router;
