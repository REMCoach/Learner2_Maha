const router = require("express").Router();
const cmsContent = require("./cms.controller");
const config = require("../../config");


router.route("/data/pass").get(cmsContent.A);
router.route("/sandbox/test").get(cmsContent.sandboxtest);

router.route("/add/:tablename").post(cmsContent.addMaster)


//router
 //.route("/getFullFreedom/getFreedom/:tableName?")
//  .put(cmsContent.getFreedom);

module.exports = router;
