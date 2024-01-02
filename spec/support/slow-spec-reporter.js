// To enable, add as a helper in your jasmine config file
const slowSpecsReporter = {
    specStarted: function(result) {
      this.specStartTime = Date.now()
    },
    specDone: function(result) {
      const seconds = (Date.now() - this.specStartTime) / 1000
      if (seconds > 0.5) {
        console.log('WARNING - This spec took ' + seconds + ' seconds: "' + result.fullName + '"')
      }
    },
  }
jasmine.getEnv().addReporter(slowSpecsReporter);