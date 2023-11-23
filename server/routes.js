const express = require("express")
const router = express.Router();
router.use(express.json())
const {createUrl, getUrl} = require("../controllers/urls")


async function getUrlHandler(req, res) {
    const { id } = req.params; // 'id' contains the parameter value

    try {
        await getUrl(id, req, res);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}

router.route("/api/").post(createUrl)
router.route("/:id").get(getUrlHandler);

module.exports = router;