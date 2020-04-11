var express = require("express");
var router = express.Router();


const {getCategoryById ,createCategory , getCategory , getAllCategory ,updateCategory , removeCategory} = require ("../controllers/category");
const { isAuthenticated ,  isSignedIn , isAdmin} = require ("../controllers/auth");
const {getUserById } = require ("../controllers/user");


//params
router.param("userId" , getUserById);
router.param("categoryId" , getCategoryById);



//actual routes
router.post("/category/create/:userId", isSignedIn , isAuthenticated, isAdmin, createCategory);


//read
router.get("/category/:categoryId", getCategory);
router.get("/categories", getAllCategory);


router.put(
    "/category/:categoryId/:userId",
    isSignedIn,
    isAuthenticated,
    isAdmin,
    updateCategory
  );
  

  router.delete(
    "/category/:categoryId/:userId",
    isSignedIn,
    isAuthenticated,
    isAdmin,
    removeCategory
  );
  

module.exports = router;