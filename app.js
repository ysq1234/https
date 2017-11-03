/**
 * Created by robert on 2017/11/2.
 */
const express = require('express')
const path = require('path')
const app = express()
const https = require('https');
const fs = require("fs");

app.use(express.static(path.join(__dirname, 'public')))

// app.listen(8080, () => {
//     console.log(`App listening at port 8080`)
// })
const options = {
    key: fs.readFileSync('./privatekey.pem'),
    cert: fs.readFileSync('./certificate.pem')
};

https.createServer(options, app).listen(3011, function () {
    console.log('Https server listening on port ' + 3011);
});