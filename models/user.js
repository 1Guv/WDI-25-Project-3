const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const reviewSchema = new mongoose.Schema({
  content: { type: String, required: true },
  addedBy: { type: mongoose.Schema.ObjectId, ref: 'User', required: true }
}, {
  timestamps: true
});

reviewSchema.methods.ownedBy = function ownedBy(user) {
  return this.addedBy.id === user.id;
};

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: {type: String, required: true, unique: true },
  profilePic: {type: String},
  password: {type: String, required: true },
  lat: {type: Number },
  lng: {type: Number },
  skills: [{
    language: { type: mongoose.Schema.ObjectId, ref: 'Skill' },
    level: { type: String, enum: ['Beginner', 'Intermediate', 'Advanced'] }
  }],
  reviews: [ reviewSchema ]
});

userSchema
  .virtual('passwordConfirmation')
  .set(function setPasswordConfirmation(passwordConfirmation) {
    this._passwordConfirmation = passwordConfirmation;
  });

userSchema.pre('validate', function checkPassword(next) {
  if(!this._passwordConfirmation || this._passwordConfirmation !== this.password) {
    this.invalidate('passwordConfirmation', 'does not match');
  }
  next();
});

userSchema.pre('save', function hashPassword(next) {
  if(this.isModified('password')) {
    this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync(8));
  }
  next();
});

userSchema.methods.validatePassword = function validatePassword(password) {
  return bcrypt.compareSync(password, this.password);
};

module.exports = mongoose.model('User', userSchema);
