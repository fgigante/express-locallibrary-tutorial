var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var GenreSchema = new Schema(
  {
    //name: {type: String, required: true, enum: ['Fiction', 'Non-fiction', 'Romance', 'Military', 'History', 'Fantasy', 'Science Fiction', 'French Poetry'], default: 'Romance', min: 3, max: 100}
    name: {type: String, required: true, min: 3, max: 100}
  }
);

// Virtual for bookinstance's URL
GenreSchema
.virtual('url')
.get(function () {
  return '/catalog/genre/' + this._id;
});

//Export model
module.exports = mongoose.model('Genre', GenreSchema);
