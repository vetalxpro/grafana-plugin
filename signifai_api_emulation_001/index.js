"use strict";
var express = require("express");
var bodyParser = require("body-parser");
var app = express();
app.listen(3001, () => {
    console.log('server listening at http://localhost:3001');
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
//Magick :)
app.all('*', function (req, res, next) {
    res.set('Access-Control-Allow-Origin', '*');
    res.set('Access-Control-Allow-Credentials', true);
    res.set('Access-Control-Allow-Methods', 'GET, POST, DELETE, PUT, UPDATE');
    res.set('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Authorization');
    if ('OPTIONS' == req.method)
        return res.sendStatus(200);
    next();
});
var random = function (low, high) {
    return (Math.random() * (high - low) + low).toPrecision(2);
};
app.post('/v2/metrics', function (req, res) {
    return res.status(200).send({
        "metrics": [
            {
                "name": "io.signifai.metrics.web.pubsub.IncidentListener.pubsub.fetch.m1_rate",
                "timestamp": +new Date(),
                "attributes": {
                    "hostname": "metrics-2016-05-09-nq5j9"
                },
                "value": random(1, 1.50),
                "type": "DOUBLE"
            },
            {
                "name": "io.signifai.metrics.web.pubsub.MetricEventListener.processMessage.stddev",
                "timestamp": +new Date(),
                "attributes": {
                    "hostname": "metrics-2016-05-09-nq5j9"
                },
                "value": random(0.0, 2.50),
                "type": "DOUBLE"
            },
            {
                "name": "io.signifai.metrics.web.pubsub.SubscriptionListener.process_message.m5_rate",
                "timestamp": +new Date(),
                "attributes": {
                    "hostname": "metrics-2016-05-09-nq5j9"
                },
                "value": random(0.0, 2.50),
                "type": "DOUBLE"
            },
            {
                "name": "io.signifai.metrics.web.service.MetricService.persist.p75",
                "timestamp": +new Date(),
                "attributes": {
                    "hostname": "metrics-2016-05-09-nq5j9"
                },
                "value": random(10, 50),
                "type": "DOUBLE"
            },
            {
                "name": "io.signifai.metrics.web.service.MetricService.persist.p95",
                "timestamp": +new Date(),
                "attributes": {
                    "hostname": "metrics-2016-05-09-nq5j9"
                },
                "value": random(60, 150),
                "type": "DOUBLE"
            },
            {
                "name": "io.signifai.metrics.web.service.MetricService.persist.p99",
                "timestamp": +new Date(),
                "attributes": {
                    "hostname": "metrics-2016-05-09-nq5j9"
                },
                "value": random(250, 450),
                "type": "DOUBLE"
            },
            {
                "name": "io.signifai.metrics.web.service.MetricService.persist.success.min",
                "timestamp": +new Date(),
                "attributes": {
                    "hostname": "metrics-2016-05-09-nq5j9"
                },
                "value": random(250, 450),
                "type": "DOUBLE"
            },
            {
                "name": "io.signifai.metrics.web.service.MetricService.persist.success.p95",
                "timestamp": +new Date(),
                "attributes": {
                    "hostname": "metrics-2016-05-09-nq5j9"
                },
                "value": random(250, 450),
                "type": "DOUBLE"
            },
            {
                "name": "io.signifai.metrics.web.service.PubSubNotifier.notify.p75",
                "timestamp": +new Date(),
                "attributes": {
                    "hostname": "metrics-2016-05-09-nq5j9"
                },
                "value": random(250, 450),
                "type": "DOUBLE"
            },
            {
                "name": "io.signifai.metrics.web.service.PubSubNotifier.notify.p95",
                "timestamp": +new Date(),
                "attributes": {
                    "hostname": "metrics-2016-05-09-nq5j9"
                },
                "value": random(50, 150),
                "type": "DOUBLE"
            }
        ],
        "page": "eyJuYW1lIjoiaW8uc2lnbmlmYWkubWV0cmljcy53ZWIuc2VydmljZS5QdWJTdWJOb3RpZmllci5ub3RpZnkucDk1IiwibWV0cmljX3R5cGUiOiJET1VCTEUiLCJ0aW1lc3RhbXAiOjE0NzY5MTE1MDAwMDB9"
    });
});

app.get('/', (req, res) => {
    res.send('Emulation of Signifai API');
});