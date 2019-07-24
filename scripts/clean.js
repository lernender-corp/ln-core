const util = require('./util');
const rimraf = require('rimraf');
/**
 * _response
 * @param e
 * @private
 */
const _response = function (e) {
  if (e) {
    console.info(`info:`, e);
  }
};
//
// Clear Console
//
util.clear();
//
// Remove following directories:
//
rimraf('coverage', _response);
rimraf('dist', _response);
