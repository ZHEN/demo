module.exports = function (app) {
    app.use('/', require('./all'));
    app.use('/all', require('./all'));
    app.use('/skill', require('./skill'));
    app.use('/work', require('./work'));
    app.use('/about', require('./about'));
    app.use('/connect', require('./connect'));
    app.post('/connect', (req, res) => {
        console.log('返回的值', req.body);
        res.json(req.body)
    })
    
    };