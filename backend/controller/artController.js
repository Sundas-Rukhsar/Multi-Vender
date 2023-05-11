const Art = require("../models/artModel");

// get
const getArt = async (req, res) => {
  let artData = await Art.find();
  // let result = artData.json()
  if (artData.length > 0) {
    res.send(artData);
  } else {
    res.send({ msg: "No art Data found in Database" });
  }
};

// post
// const postArt = async(req, res)=>{
//     let art = new Art(req.body)
//     let result = await art.save();
//     res.send(result);
// }

const postArt = async (req, res) => {
  try {
    const post = new Art({
      title: req.body.title,
      description: req.body.description,
      price: req.body.price,
      image: req.file.filename, //image can be sent
    });
    await post.save();
    res.json(post);
  } catch (error) {
    console.log(error);
  }
};

// update
const updateArt = async (req, resp) => {
  let data = await Art.updateOne({ _id: req.params.id }, { $set: req.body });
  resp.send(data);
};

// delete
const deleteArt = async (req, resp) => {
  // resp.send(req.params)
  let art = await Art.deleteOne({ _id: req.params.id });
  if (art) {
    resp.send(art);
  } else {
    resp.send({ msg: "No record found" });
  }
};
// get art details

const getArtDetails = async (req, resp) => {
  let result = await Art.findOne({ _id: req.params.id });
  if (result) {
    resp.send(result);
  } else {
    resp.send({ msg: "No user found" });
  }
};

module.exports = { getArt, postArt, updateArt, deleteArt, getArtDetails };
