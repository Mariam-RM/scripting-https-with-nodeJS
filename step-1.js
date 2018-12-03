function getAndPrintHTMLChunks () {

  var https = require('https');

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };

  https.get(requestOptions, function (response) {



    response.on('data', function (data) {
      console.log(data);
      // console.log('/n');
    });

    response.on('end', function() {
      console.log('Response stream complete.');
    });

  });
}

getAndPrintHTMLChunks();