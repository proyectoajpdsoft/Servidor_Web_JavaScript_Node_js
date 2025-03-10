// Ejemplo de servidor web en JavaScript - ProyectoA

// Importamos el método createServer de node:http
import { createServer } from 'node:http';

const PUERTO = 8888

// Usamos el método createServer de Node.js para crear una instancia de servidor web
const servidorWeb = createServer((req, res) =>
{
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end('Mi primer servidor web en Node.js<br><br>Por <b>ProyectoA</b>.');
});

// Iniciamos el servidor web en el puerto establecido
servidorWeb.listen(PUERTO, error =>
{
  // Si se produce un error, lo mostramos
  if (error)
  {
    return console.error(error);
  }
  // Si no se produce error, mostramos por consola el estado del servidor web
  console.log(`Iniciado servidor web, escuchando en 127.0.0.1:${PUERTO}`);
});