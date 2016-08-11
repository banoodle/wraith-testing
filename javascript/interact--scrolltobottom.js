// ######################################################
// This scrolls to bottom of page for footer capture..
// ######################################################

  module.exports = function (casper, ready) {
    casper.wait(2000, function() {
      this.scrollToBottom();
    casper.wait(1000, ready); // required
   });
}
