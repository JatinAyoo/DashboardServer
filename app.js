import express from 'express';

import 'dotenv/config';

import cors from 'cors';
import reportRouter from './routes/index.js'
import { mongoDB } from './database/index.js'

import { reportModel } from './models/index.js';
const app = express();

// require("dotenv").config();

// require("dotenv").config();
console.log(process.env.PORT);
const PORT = process.env.PORT || 8000
mongoDB();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
    // origin: "*",
    origin: [process.env.FRONTEND_URL]
    // methods: ["GET", "POST", "PUT", "DELETE"],
    // credentials: true,
}))

app.use("/api/data", reportRouter)

app.get("/", (req, res) => {
    return res.send(`<div style = "background:magenta;padding:100px;"><h2>Welcome to Data Virtualization Server</h2>
    <p>Below are the some examples of supported routes...</p>
        <div><ul>
            <li>GET all data from the database - /api/data</li>
            <li>GET data filtered by year - /api/data/year/:year</li>
            <li>GET data filtered by region - /api/data/region/:region</li>
            <li>Much more...</li>
        </ul></div>
    </div>`)
})

app.listen(PORT, (req, res) => {
    console.log(`Server is active on Port ${PORT}`)
})

// try {
//     const addData = await reportModel.create({
//         "end_year": "",
//             "intensity": 6,
//             "sector": "Energy",
//             "topic": "gas",
//             "insight": "Annual Energy Outlook",
//             "url": "http://www.eia.gov/outlooks/aeo/pdf/0383(2017).pdf",
//             "region": "Northern America",
//             "start_year": "",
//             "impact": "",
//             "added": "January, 20 2017 03:51:25",
//             "published": "January, 09 2017 00:00:00",
//             "country": "United States of America",
//             "relevance": 2,
//             "pestle": "Industries",
//             "source": "EIA",
//             "title": "U.S. natural gas consumption is expected to increase during much of the projection period.",
//             "likelihood": 3
//     });

//     console.log(addData);

// } catch (error) {
//     console.log(error);
// }

