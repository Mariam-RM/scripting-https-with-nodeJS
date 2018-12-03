function getAndPrintHTMLChunks (options) {

  var https = require('https');

  https.get(options, function (response) {

    var buffer = "";

    response.on('data', function (data) {
      buffer += data
    });

    response.on('end', function() {
      console.log(buffer)
      console.log('Response stream complete.');
    });

  });
}

  var options = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };

getAndPrintHTMLChunks(options);