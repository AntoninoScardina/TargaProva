const server = require('express')();
const filippo  = require('./api');

server.get('/', 
    async (req, res) => {
        try {
            const url = await filippo();
            res.send(`<img src=\'${url}\'>`);
        } catch (e) {
            console.log(e);
        }
    }
);

server.listen(8080);
