import { SERVER } from './conf/serverconf';
import { app } from './common/lib/core/app';
import http from 'http';

const HTTP_SERVER = http.createServer(app);
const PORT = process.env.PORT || SERVER.PORT_HTTP;

HTTP_SERVER.on('listening', () => console.log(`listen on port: ${PORT}`));
HTTP_SERVER.on('clientError', (error, socket) => {
      socket.end('HTTP/1.1 400 Bad Request\r\n\r\n');
      console.log({'in server':error});
});
HTTP_SERVER.listen(PORT);
