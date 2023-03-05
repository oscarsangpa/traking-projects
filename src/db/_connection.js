import mongoose from "mongoose";

export function _connect() {
    const MONGO_HOST = "localhost"
    const MONGO_DB = "mongo-db"

    const URI = `mongodb://${MONGO_HOST}/${MONGO_DB}`

    mongoose.connect(URI,
        {useNewUrlParser: true},
        {useUnifiedTopology: true}
        )

        .then(db => console.log("Connection ready to use", db.connection.port))
        .catch(err => console.log(err))
}