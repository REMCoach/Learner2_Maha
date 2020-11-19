const { Router } = require('express');

const cmsContent = require('./api/cmsContent/cms.routes');

const router = Router();

router.get('/', (req, res) => {
  res.statusCode = 302;
  res.setHeader('Location', '');
  res.end();
});
const fetch("data/pass", {
    body: new FormData(document.getElementById("form")),
    headers: {
        //"Content-Type": "application/x-www-form-urlencoded",
        "Content-Type": "multipart/form-data",
    },
    method: "post",
});

          
router.use('/cmsContent', cmsContent);

module.exports = router;
