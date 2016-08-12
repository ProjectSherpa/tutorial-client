const bcrypt = require('bcrypt');
const Promise = require('bluebird').Promise;
Promise.promisifyAll(bcrypt, { context: bcrypt });

module.exports = {
  comparePassword,
  hashPassword
};

// salt and hash plain-text password 
function hashPassword(password) {
  return bcrypt.genSaltAsync(10)
  .then(salt => bcrypt.hashAsync(password, salt));
}


// check that plain-text password matches salted and hashed version
function comparePassword(plaintext, hash) {
  return bcrypt.compareAsync(plaintext, hash);
}