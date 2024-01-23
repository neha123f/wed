module.exports = function(config) {
  config.set({
    browsers: ['Chrome'],
    plugins: ['karma-chrome-launcher'],
    reporters: ['progress', 'html'],

    htmlReporter: {
      outputFile: 'test-results/test-report.html',
      // other configuration options
    },
    // ... other configurations
  });
};
