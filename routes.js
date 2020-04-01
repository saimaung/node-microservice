
function routesHandler(req, res) {
    //console.log(req.url, req.method, req.headers);
    res.setHeader('Content-Type', 'text/html');
    if (req.url === '/') {
        res.write('<html><head><title>Sai</title></head><body><p>Greeting from Sai</p>');
        res.write('<form action="/create-user" method="POST"><input type="text" name="message"><button type="submit">Send</button></form>');
        res.write('</body></html>');
        return res.end();
    }
    if (req.url === '/users') {
        res.write('<html><head><title>Sai</title></head><body><div><ul><li>Sai</li></ul></div></body></html>');
        return res.end();
    }
    if (req.url === '/create-user') {
        const body = [];
        req.on('data', (chunk) => {
            body.push(chunk);
        });
        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody.split('=')[1]);
        });
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end()
    }
};

module.exports = routesHandler;