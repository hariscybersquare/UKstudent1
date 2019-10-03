const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const fetch = require('node-fetch')

require('dotenv').config();

const app = express();

app.use(morgan('tiny'));
app.use(cors());
const url = "https://api-sandbox.starlingbank.com/api/v2/accounts";
const bearer = 'Bearer ' + process.env.TOKEN;
app.get('/accounts', (req, res) => {
    fetch(url, {
            method: 'GET',
            withCredentials: true,
            credentials: 'include',
            headers: {
                'Authorization': bearer,
                'X-FP-API-KEY': 'iphone', //it can be iPhone or your any other attribute
                'Content-Type': 'application/json'
            }
        }).then(response => response.json())
        .then(json => {
            res.json(json);
        })
        .catch(error => this.setState({
            isLoading: false,
            message: 'Something bad happened ' + error
        }));
});
urlperson = "https://api-sandbox.starlingbank.com/api/v2/account-holder/individual"
app.get('/personal', (req, res) => {
    fetch(urlperson, {
            method: 'GET',
            withCredentials: true,
            credentials: 'include',
            headers: {
                'Authorization': bearer,
                'X-FP-API-KEY': 'iphone', //it can be iPhone or your any other attribute
                'Content-Type': 'application/json'
            }
        }).then(response => response.json())
        .then(json => {
            res.json(json);
        })
        .catch(error => this.setState({
            isLoading: false,
            message: 'Something bad happened ' + error
        }));
});

urlgetsavegoals = "https://api-sandbox.starlingbank.com/api/v2/account/86cf2c86-5c21-48c0-8ce9-ff80187fdb96/savings-goals"
app.get('/getsavegoals', (req, res) => {
    fetch(urlgetsavegoals, {
            method: 'GET',
            withCredentials: true,
            credentials: 'include',
            headers: {
                'Authorization': bearer,
                'X-FP-API-KEY': 'iphone', //it can be iPhone or your any other attribute
                'Content-Type': 'application/json'
            }
        }).then(response => response.json())
        .then(json => {
            res.json(json);
        })
        .catch(error => this.setState({
            isLoading: false,
            message: 'Something bad happened ' + error
        }));
});


function notFound(req, res, next){
    res.status(404);
    const error = new Error('Not Found');
    next(error);
}

function errorHandler(error, req, res, next){
    res.status(res.statusCode || 500);
    res.json({
        message: error.message
    });
}

app.use(notFound);
app.use(errorHandler);

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log("Listening on port ", port); 
})