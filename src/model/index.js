const CONFIG = require('../../config');
let mongoose = require('mongoose');

mongoose.Promise = require('bluebird');
mongoose = mongoose.createConnection(CONFIG.MONGO);

module.exports.Product = mongoose.model('Product', require('../model/Product'));