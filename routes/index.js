
/*
 * GET home page.
 */

exports.index = function(req, res){
  //res.render('index', { title: 'Express' });
    res.render('index.html');
    //res.sendfile('index.html');
    res.sendfile('socket.io.js')
};