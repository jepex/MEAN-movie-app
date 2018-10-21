const mongoose = require('mongoose');

const dbURI = 'mongodb://dbuser:ankkalinna10@ds038319.mlab.com:38319/listing';

mongoose.connect(dbURI);

require('./appSchemas');
