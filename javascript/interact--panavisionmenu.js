// ######################################################
// This clicks on menu hamburger.
// ######################################################

  module.exports = function (casper, ready) {
    casper.wait(2000, function() {
        this.mouse.click('#main-menu-button');
        casper.wait(1000, ready); // required 
    });
  }
