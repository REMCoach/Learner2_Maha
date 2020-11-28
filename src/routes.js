const { Router } = require('express');

const cmsContent = require('./api/cmsContent/cms.routes');

const router = Router();

router.get('https://dxw85.csb.app/Registration', (req, res) => {
  res.statusCode = 302;
  res.setHeader('Location', 'google.com');
  res.end();
});

          
router.use('/cmsContent', cmsContent);

module.exports = router;
