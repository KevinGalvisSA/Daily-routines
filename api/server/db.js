const mongoose = require('mongoose');
const connectDB = async () => {
    try {
        const conection = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        return conection
    } catch (error) {
        console.error('Error al conectar a MongoDB:', error.message);
        process.exit(1);
    }
};
module.exports = connectDB;
