// require glob: npm i glob
const path = require('path');
const glob = require('glob');
const fs = require('fs');
const fse = require('fs-extra');

/**
 * console.clear()
 * @type {{clear: clear}}
 */
exports.clear = function() {
  process.stdout.write('\033c');
};

/**
 * delete()
 * @param pattern
 * @param cb
 * @returns {*}
 */
exports.delete = function(pattern, cb) {
  return (glob(pattern, function (err, files) {
    if (files) {
      files.forEach(function (file) {
        fs.unlink(file, cb);
      });
    }
  }));
};

/**
 * copy()
 * @param src
 * @param destination
 */
exports.copy = function(src, destination) {
  fse.copySync(src, destination);
};

/**
 * errors()
 * @param err
 */
exports.errors = function(err) {
  if (err) {
    console.log(`Error: ${err}`);
  }
};
