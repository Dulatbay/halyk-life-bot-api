import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import {getStreamingCompletion} from "./getStreamingCompletion.js";
import './db.js'
import peopleRouter from './routes/people.js';


const app = express();
const port = 2000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors());


app.use('/api/people', peopleRouter);

app.post("/aiCompletion", async (req, res) => {
    const data = req.body;
    const stream = await getStreamingCompletion({userPrompt: data?.userPrompt});
    for await (const part of stream) {
        res.write(part.choices[0]?.delta.content || "");
    }
    res.end();
});

app()

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});