const { Router } = require('express');

const cmsContent = require('./api/cmsContent/cms.routes');

const router = Router();

router.get('https://dis89.csb.app/', (req, res) => {
  res.statusCode = 302;
  res.setHeader('Location', 'google.com');
  res.end();
});

          
router.use('/cmsContent', cmsContent);

module.exports = router;
