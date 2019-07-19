const express = require('express');
var rp = require('request-promise');
const Joi = require('@hapi/joi');
const util = require('util');

const app = express();
app.use(express.json());

const port = process.env.BE_PORT || 8080;


//data = {
//	text : "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve at my best."
//}
//promise_t = axios.post('http://localhost:30003/', data);
//promise_j = axios.post('http://localhost:30004/', data);


app.post('/', (req, res) => {
    var schema = {
        text: Joi.string().min(10).required(),
    };
    const { error } = Joi.validate(req.body, schema);
    if (error) return res.status(400).send(error.details[0].message);

    var options_i = {
        method: 'POST',
        uri: 'http://localhost:30001',
        body: {
            text: `${req.body.text}`
        },
        json: true,
    };

    var promise_i = rp(options_i);

    var options_n = {
        method: 'POST',
        uri: 'http://localhost:30002',
        body: {
            text: `${req.body.text}`
        },
        json: true,
    };

    var promise_n = rp(options_n);

    //console.log(`${options}`);

    //promise_i.then(result => res.send(result)).catch(error => console.log(error));

    Promise.all([promise_i, promise_n])
       .then(result => res.send(result))
       .catch(new Error('Cos sie stalo...'));
});
 
app.listen(port, 'localhost', () => {
    console.log(`Listening on port ${port}...`);
});

//promise_t.then(result => console.log(result.data));
