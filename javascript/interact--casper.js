// ######################################################
// This is an example module provided by Wraith.
// Feel free to amend for your own requirements.
// ######################################################
module.exports = function (casper, ready) {
    // test interaction on the page
    casper.wait(1000, function() {
        this.mouse.click('#main-menu-button');
        ready();
   });
}
