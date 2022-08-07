/* eslint-disable guard-for-in */
const mongoose = require("mongoose");
const { MongoMemoryServer } = require("mongodb-memory-server");

let mongod;

// connection to mongodb memory server
module.exports.connect = async () => {
    mongod = await MongoMemoryServer.create();
    const uri = mongod.getUri();
    const mongooseOpts = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    };
    mongoose.connect(uri, mongooseOpts);
};

// disconnect mongodb memory server
module.exports.closeDatabse = async () => {
    if (mongod) {
        await mongoose.connection.dropDatabase();
        await mongoose.connection.close();
        await mongod.stop();
    }
};

// clear mongodb memory server
module.exports.clearDatabase = async () => {
    if (mongod) {
        const collections = await mongoose.connection.db.collections();
        // eslint-disable-next-line no-restricted-syntax
        for (const collection of collections) {
            // eslint-disable-next-line no-await-in-loop
            await collection.deleteMany();
        }
    }
};
