const router = require("express").Router();

router.get("/logout", (req, res) => {
    req.logout();
    res.redirect("http://localhost:3000/");
});

module.exports = router;
