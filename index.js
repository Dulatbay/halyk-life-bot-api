const express = require('express')
const bodyParser = require('body-parser')
const cors = require( "cors");
const getStreamingCompletion = require("./getStreamingCompletion")
require('./db')
const {router} = require('./routes/people');

const app = express();
const port = 2000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors());
app.use(express.static('public'))


app.use('/api/people', router);

app.post("/aiCompletion", async (req, res) => {
    const data = req.body;
    const stream = await getStreamingCompletion({userPrompt: data?.userPrompt});
    for await (const part of stream) {
        res.write(part.choices[0]?.delta.content || "");
    }
    res.end();
});


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});