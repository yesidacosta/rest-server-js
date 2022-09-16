const express = require('express')
const cors = require('cors')

class Server {
    constructor(){ 
        this.app = express();
        this.port = process.env.PORT;
        this.usuarioPath = '/api/usuario'
        this.middleware();
        this.routes();
    }

    middleware(){
        /*CORS*/
        this.app.use(cors());

        /*Directorio publico */
        this.app.use(express.static('public'));
        
        /*Lectura y parseo del body */
        this.app.use(express.json())
    }

    routes() {
        this.app.use('/api/usuario', require('../routes/user'))
     
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log("Example Listening");
        })
    }
}

module.exports = Server;