import http from 'http';

const server = {};

server.httpServer = http.createServer((req, res) => {
    const baseUrl = `http${req.socket.encryption ? 's' : ''}://${req.headers.host}`;
    const parsedUrl = new URL(req.url, baseUrl);
    const httpMethod = req.method.toLocaleLowerCase();
    const parsedPathName = parsedUrl.pathname;
    const trimmedPath = parsedPathName.replace(/^\/+|\/+$/g, '');
    const header = req.headers;
    console.log('bandom atidaryti:',trimmedPath);

    req.on('data', () => {
        console.log('Klientas atsiunte duomenu...');
    });

    req.on('end', () => {
        console.log('Uzklausa gauta. Klientas nori ...');
        
        const HTML = `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
        </head>
        <body>
            <h1>Labas</h1>
            <p>Kaip tau sekasi?</p>
            <p>PSL: ${trimmedPath}</p>
        </body>
        </html>`;

res.end(HTML);

    });

});

server.init = () => {
    
    console.log('trying to running...');
    const port = 3000;
    server.httpServer.listen(port, () => {
        console.log(`Tavo serveris sukasi ant http://localhost:${port}`);
    });
};

export { server };