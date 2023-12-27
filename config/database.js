const mongoose = require('mongoose');
require('dotenv').config();

exports.dbConnect = () => {
    mongoose.connect(process.env.MONGODB_URL, {
        // useNewUrlParser: true,
        // useUnifiedTopology: true,
    })
    .then(() => {
        console.log("Db connected successfully");
    })
    .catch((error) => {
        console.log("Db connection error");
        console.error(error);
        process.exit(1);
    });
};
