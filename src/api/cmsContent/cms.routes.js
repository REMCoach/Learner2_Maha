const router = require("express").Router();
const cmsContent = require("./cms.controller");
const config = require("../../config");

var whitelist = ["35.169.94.138:3006"];

const corsOptionsDelegate = (req, res, next) => {
  try {
    console.log(req.headers.origin);
    if (req.headers.origin !== undefined) {
      const splitReferer = req.headers.referer.split("/");
      const splitOrgin = req.headers.origin.split("/");
      const reqOrgin = splitOrgin[2];
      const reqReferer = splitReferer[2];
      // console.log(splitReferer[2] + '->' + splitOrgin[2]);
      if (
        whitelist.indexOf(reqOrgin) !== -1 &&
        whitelist.indexOf(reqReferer) !== -1
      ) {
        next();
      }
    } else {
      return res.status(400).json("Unauthorized Routes");
    }
  } catch (error) {
    return res.status(401).json({
      status: 401,
      message: "Invalid Request"
    });
  }
};

// const authCheck = (req, res, next) => {
//   try {
//     const auth_token = req.header('auth_token');
//     if (!auth_token) return res.status(400).json('Unauthorized Routes');
//     const verifyToken = jwt.verify(auth_token, config.TOKEN_SECRET);
//     if (verifyToken) {
//       next();
//     }
//   } catch (error) {
//     return res.status(401).json({
//       status: 401,
//       message: 'Invalid token'
//     });
//   }
// };

// router
 //.route("/master/:tableName/:id?/:order?")
 // .post(corsOptionsDelegate, cmsContent.addMaster)
// .get(corsOptionsDelegate, cmsContent.getMasterValues)
//.put(corsOptionsDelegate, cmsContent.updateMaster)
//  .delete(corsOptionsDelegate, cmsContent.deleteMaster);
router.route("/data/pass").get(cmsContent.A);
router.route("/sandbox/test").get(cmsContent.sandboxtest);

router.route("/add/:tablename").post(cmsContent.addMaster)
router.route("/email/pass").get(cmsContent.sendmail);

//router
 //.route("/getFullFreedom/getFreedom/:tableName?")
//  .put(cmsContent.getFreedom);

module.exports = router;
