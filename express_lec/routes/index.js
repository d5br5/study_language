var express = require('express')
var router = express.Router()
const template = require('../lib/template');
const auth=require('../lib/auth');

router.get('/', (req, res) => { 
  console.log('/',req.user);
  var title = 'Welcome';
  var description = 'Hello, Node.js';
  var list = template.list(req.list);
  var html = template.HTML(title, list,
    `<h2>${title}</h2>${description}<img src="./images/hello.jpg" style="width:200px; display:block; margin:30px">`,
    `<a href="/topic/create">create</a>`, auth.StatusUI(req,res)
  );
  res.send(html);

});


module.exports = router;