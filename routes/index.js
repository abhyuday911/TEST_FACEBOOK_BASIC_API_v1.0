var express = require('express');
var router = express.Router();

const fetch = require('node-fetch');

// this dude gets tags //

router.get('/tag', async function (req, res, next) {
  url = 'https://www.instagram.com/explore/tags/coding/?__a=1&__d=dis'

  fetch(url)
    .then(response => response.json())
    .then(json => { console.log(json), res.send(json) })
    .catch(err => console.error('error:' + err));
});

// this dude is useless

router.get('/', async function (req, res, next) {
  url = 'https://www.instagram.com/abhyuday911/?__a=1&__d=dis'

  // https.get(url,(res)=>{

  // res.on('data', (d) => {
  //   process.stdout.write(d);
  // });

  // }).on('error', (e) => {
  //   console.error(e);
  // });

  fetch(url)
    .then(response => response.json())
    .then(json => { console.log(json), res.send(json) })
    .catch(err => console.error('error:' + err));

  // axios.get(url)
  //   .then(response => {
  //     res.send(response)
  //   })
  //   .catch(err => console.error('error:' + err)); 
});

router.get('/test/:username', (req, res) => {
  urll = 'https://graph.instagram.com/v15.0/me/media?fields=id,media_url&access_token=IGQVJVdFdNczNGZAWFyckgyS0h4VkdjemZARTzdhM0o0WFhPMnVJSXUyTkVPeHcxRE5qaG9qaDN5a2dhdTNUNWxyeU9YSlVZAMlptdjdzQXZAtX0NMdGVnekpLZAlhyR0RrbnY1MGJzLXowMWo4LVpfZAVBTdgZDZD'
  fetch(urll)
    .then(response => response.json())
    .then(json => { console.log(json), res.send(json) })
    .catch(err => console.error('error:' + err));

});

module.exports = router; 