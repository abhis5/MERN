const User = require("../models/user");

var express = require("express");
var router = express.Router();
const {getUser  , getUserById , updateUser , userPurchaseList } = require("../controllers/user");
const { isSignedIn , isAuthenticated ,isAdmin } = require("../controllers/auth");



router.param("userId" , getUserById);

router.get("/user/:userId" ,isSignedIn, isAuthenticated , getUser );
router.put("/user/:userId" ,isSignedIn, isAuthenticated , updateUser );


 router.get("/orders/user/:userId" ,isSignedIn, isAuthenticated , userPurchaseList );



module.exports = router;
