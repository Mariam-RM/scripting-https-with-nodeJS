function getAndPrintHTMLChunks () {

  var https = require('https');

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };

  https.get(requestOptions, function (response) {

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

getAndPrintHTMLChunks();