import http from 'http';

const server = {};

server.httpServer = http.createServer((req, res) => {
const baseUrl = `http${req.socket.encryption ? 's' : ''}://${req.headers.host}`;
const parsedUrl = new URL(req.url, baseUrl);
const httpMethod = req.method.toLocaleLowerCase();
const parsedPathName = parsedUrl.pathname;
const trimmedPath = parsedPathName.replace(/^\/+|\/+$/g, '');
const header = req.headers;
console.log('bandom atidaryti: ' ,trimmedPath);
console.log(header);
});

server.init = () => {
    
    console.log('trying to running...');
    const port = 3000;
    server.httpServer.listen(port, () => {
        console.log(`Tavo serveris sukasi ant http://localhost:${port}`);
    });
};

export { server };