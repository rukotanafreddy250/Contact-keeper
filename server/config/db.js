const mongoose = require('mongoose');

const ConnectDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/contact-keeper', {
        useNewUrlParser: true,
        useUnifiedTopology: false
    })
    console.log(`DB Connected...`);
    } catch (error) {
        err => {
            console.error(`error Connecting to DB ${err.message}`);
            process.exit(1);
        }
    }
}

module.exports = ConnectDB;






// mongoose.connect('mongodb://localhost:27017/contact-keeper', {
//         useNewUrlParser: true,
//         useUnifiedTopology: false
//     })
//     .then( () => {
//         console.log('DB Connected...');
//     })
//     .catch( err => {
//         console.error(`error Connecting to DB ${err.message}`);
//         process.exit(1);
//     });


// module.exports = mongoose;