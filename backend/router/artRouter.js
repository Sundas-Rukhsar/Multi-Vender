const express = require("express")
const {getArt, postArt, updateArt, deleteArt, getArtDetails} = require("../controller/artController")
const upload = require("../middleware/imgMulter")
const router = express.Router()

// code
// const multer = require("multer");
// const formModel = require("../models/artModel");
// const upload = multer({ dest: 'uploads/' })

// router.post("/new", upload.single("image"), async (req, res) => {
// 	try {
// 		const { title, description, artType } = req.body;
// 		const image = req.file.filename;
// 		const form = await formModel({ title, description, artType, image });
// 		await form.save();
// 		res.send(form);
// 	} catch (error) {
// 		console.log(error);
// 	}
// });


router.route("/").get(getArt)

router.route("/new").post(upload,postArt ) 

router.route("/:id").put(updateArt).delete(deleteArt).get(getArtDetails)


module.exports = router