var url = require('url');
var fs = require('fs');

module.exports.get = function(req, res) {
  req.requrl = url.parse(req.url, true);
  var path = req.requrl.pathname;
  if (/.(css)$/.test(path)) {
    res.writeHead(200, {
      'Content-Type': 'text/css'
    });
    fs.readFile(__dirname + path, 'utf8', function(err, data) {
      if (err) throw err;
      res.write(data, 'utf8');
      res.end();
    });
  } else {
    switch(path){
      case '/':case '/kolay':{require('./controller/sudoku.js').get(req, res);break;}
      case '/orta':{require('./controller/sudokuOrta.js').get(req, res);break;}
      case '/zor':{require('./controller/sudokuZor.js').get(req, res);break;}
      case '/cok-zor':{require('./controller/sudokuCokZor.js').get(req, res);break;}
      case '/uzman':{require('./controller/sudokuUzman.js').get(req, res);break;}
      default:{
        res.end();
        break;
      }
    }    
  }
}; 