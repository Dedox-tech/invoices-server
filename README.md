# App de facturas

Este repositorio contiene el código del back-end usado para el proyecto final del JavaScript Top Gun Lab, de TEAM International. Para el deployment, se utilizó la plataforma Heroku, cuya API es expuesta y manejada desde el cliente.

## Base de datos
En el presente proyecto, se optó por la base de datos no relacional MongoDB. En ese sentido, se trabajó con el ODM (Object Data Modeling) Mongoose, para dar un esquema a nuestros datos. La base de datos se desplegó de manera independiente, usando el servicio MongoDB atlas.

## Servicios

La presente API siguió, en mayor medida, el paradigma REST en el desarrollo de la misma. Se estructuraron dos servicios principales, uno para las facturas y el otro para los usuarios.

![Invoice Service](https://dl.dropboxusercontent.com/s/12xxp9t1jegom9u/Service%20Invoices%20%282%29.png?dl=0)

## Autenticación

Para los procesos de autenticación y autorización, se decidió integrar la API con un proveedor de autenticación externo ([SuperTokens.io](https://supertokens.com/)), el cual es open source y maneja las sesiones por defecto.

![Auth Explanation](https://dl.dropboxusercontent.com/s/boz36qfl6t1b28d/Autenticaci%C3%B3n.png?dl=0)

## Tecnologías utilizadas

- Node.js
- Express.js
- MongoDB
- Mongoose
- Jest
- Mongodb Memory Server
- SuperTokens.io

## Correr localmente

Para correr la API de manera local, se deben seguir los siguientes pasos:

```
git clone https://github.com/Dedox-tech/invoices-server.git
cd invoices-server
npm start
```

No obstante, se necesitan una serie de variables locales, que deben ser añadidos en el repositorio local (archivo .env):

```
CLIENT_DOMAIN = "http://localhost:3000"
API_DOMAIN = "http://localhost:5000"
```

Respecto a las variables de entorno `CONNECTION_URI`, `API_KEY` y `PASSWORD_DB`, debido a su naturaleza, estas podrán ser compartidas de manera privada bajo petición por los desarrolladores. 
