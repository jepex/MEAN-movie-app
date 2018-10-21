const mongoose = require('mongoose');

const moviesSchema = new mongoose.Schema({year:String, name:String});
const seriesSchema = new mongoose.Schema({year:String, name:String, seasons:String});

mongoose.model('movies', moviesSchema);
mongoose.model('series', seriesSchema);
