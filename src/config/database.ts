import * as mongoose from 'mongoose';
import constants from "./constants";

mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);

mongoose.connect(constants.MONGO_URL).catch(() => {
    mongoose.createConnection(constants.MONGO_URL);
});

mongoose.connection
    .once('open', () => {
        console.log(`Mongodb running`);
    }).on('error', (err) => {
    throw err;
});
