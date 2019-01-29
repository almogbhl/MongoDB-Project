const mongoose    = require('mongoose');
const color_logger = require('../utils/color_logger');
const p = color_logger('connection.js');

// set Promise provider to bluebird
mongoose.Promise = require('bluebird');

const { DB_HOST, DB_PORT, DB_NAME } = process.env

const url = `mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`

const options = {
    autoIndex: false, // Don't build indexes
    reconnectTries: Number.MAX_VALUE, // Never stop trying to reconnect
    reconnectInterval: 500, // Reconnect every 500ms
    poolSize: 10, // Maintain up to 10 socket connections
    // If not connected, return errors immediately rather than waiting for reconnect
    bufferMaxEntries: 0,
    useNewUrlParser: true 
  };
  
  const connect = async ()=> {
    try{
        await mongoose.connect(url, options)
        p.magenta(' ✨  Connected to Mongo DB ✨ ')
    }catch(error){
        p.error(error)
    }
}

module.exports = {connect};
