const mongoose = require('mongoose');
const monggoURL = "mongodb+srv://foodie:rammodi00@cluster0.tt8to4r.mongodb.net/foodie?retryWrites=true&w=majority"

const mongodb = async () => {
  await mongoose.connect(monggoURL, {
    useNewUrlParser: true
  }).then(async () => {
    console.log("connection succesfull");

    const SampleModel = mongoose.model("Sample", new mongoose.Schema({}), "sample");
    const data = await SampleModel.find({});
    // console.log(data);
  }).catch((err) => { 
    console.log(err);
  })
}
module.exports = mongodb;