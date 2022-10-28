const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const path = require('path');

const app = express()

app.set('port', 3000)

 mongoose.connect('mongodb://localhost:27017/mevn-course', { useNewUrlParser: true })
 .then(db => console.log('[OK] DB is connected'))
 .catch(err => console.error(err))

 app.use(express.json());
 app.use(express.urlencoded({extended: false}));
 app.use(morgan('dev'));

 app.use('/api/records', require('./routes/records'));
 app.use('/', express.static(path.join(__dirname, '../dist')));