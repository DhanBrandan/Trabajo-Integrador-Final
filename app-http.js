//Importacion de Modulos
//require('');

//Exportacion de Modulos
//module.exports = ;

const http = require ('http');

//usamos metodo para usar servidor - call back

http.createServer( (req, res) => {
    //Peticion de URL
    if (req.url === "/home"){
    //Responde
        res.write("SERVER MODIFICADO CON EXPRESS")
        res.end()
        return;
    }

    if(req.url === "/user"){

        const user = [ { user: "dhanbrandan", rol: "Developer" } ]
        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.write(JSON.stringify(user));
        return res.end(); 
    }
    
    res.write("RUTA NO ENCONTRADA" + req.url)
    res.end
}).listen(3000, () => console.log("Servidor ON en http://localhost:3000"))


