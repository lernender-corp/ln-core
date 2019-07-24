const sourceContext = require.context('./src', true, /.js$/);
/*
 * Create a context for all tests files below the src folder and all sub-folders.
 */
const unitContext = require.context('./unit', true, /.js$/);
/*
 * For each file, call the context function that will require the file and load it up here.
 */
sourceContext.keys().forEach(sourceContext);
unitContext.keys().forEach(unitContext);
