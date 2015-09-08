'use strict';

// Set default node environment to development
var env = process.env.NODE_ENV = process.env.NODE_ENV || 'production';

if(env === 'development') {
    // Register the Babel require hook
    require('babel-core/register');
    
    // Export the application
    exports = module.exports = require('src/sort');
} else {
	// Export the application
	exports = module.exports = require('dist/sort');
}
