
module.exports = function getHTML (options, callback) {

    var https = require('https');

    https.get(options, function (response) {
        response.setEncoding('utf8');
        var buffer = "";

        response.on('data', function (data) {
          buffer += data
        });

        response.on('end', function() {
          console.log(buffer)
          console.log('Response stream complete.');
        });

    })

};