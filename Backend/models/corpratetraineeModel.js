const mongoose = require ('mongoose');
const Schema = mongoose.Schema;
const copratetraineeSchema = new Schema({
    Username: {
      type: String,
      required: true,
    },
    Password: {
      type: String,
      required: true
    }});

    const copratetrainee = mongoose.model('copratetraineeModel', copratetraineeSchema);
    module.exports = copratetrainee;