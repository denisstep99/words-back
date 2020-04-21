import * as express from 'express';

const app: express.Application = express();
const PORT = 3010;

app.listen(PORT, (err) => {
    if (err) {
        throw err;
    } else {
        console.log(
            `Server running on port: ${PORT} ` +
            `Running mode ${process.env.NODE_ENV}`
        )
    }
});
