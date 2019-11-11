const userRoutes = (app, fs) => {

    // variables
    const dataPath = './info/.json';

    // READ
    app.get('/info', (req, res) => {
        fs.readFile(dataPath, 'utf8', (err, data) => {
            if (err) {
                throw err;
            }

            res.send(JSON.parse(data));
        });
    });


module.exports = userRoutes;