import express from 'express';
import bent from 'bent';
import morgan from 'morgan';
import cors from 'cors';
import { ResponseCodes as status } from './responseCodes';
import { darkSkyApiKey } from '../conf/secret';


const app = express();
const port = process.env.PORT || 9999;
const getJSON = bent('json');

// middleware
app.use(morgan('tiny'));
app.use(cors({
    origin: 'http://localhost:3000'
}));


// routes
app.get('/weather', async (req, res) => {
    const lat = req.query.lat;
    const lon = req.query.lon;

    // validation
    if (lat === undefined || lon === undefined) {
        return res.status(status.BAD_REQUEST)
            .end('Query params lat & lon are required!');
    }

    // proxy request
    try {
        const darkskyurl = `https://api.darksky.net/forecast/${darkSkyApiKey}/${lat},${lon}`;
        const forecast = await getJSON(darkskyurl);
        res.status(status.SUCCESS).json(forecast);
    } catch (err) {
        res.status(status.INTERNAL_SERVER_ERROR).end('Something went wrong!');
    }
})


// start
app.listen(port, () => { console.log(`Server is listening on port ${port} ...`); });
