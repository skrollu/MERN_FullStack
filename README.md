# MERN-project

MERN-Project that contains informations about movies. 

a file .env for sensibles informations.
simple client interface and one call to a mongo database with mongoose **don't forget** to add **.env** file with a MONGO_DB_CLUSTER0_PSW.

Le projet est composé d'un server side qui utilise: *express*, *mongoose*, *node.js*, et *concurrently* (afin de démarrer facilement le projet server et client side).

Le client side est lui un application react avec utilisation de *react*, *react-dom*, *react-router-dom*, *react-scripts*, *react-css-module*.

### Redux Version without MONGO
This version does not include Redux
[Click Here For Redux Version](https://github.com/bradtraversy/react_redux_express_starter) 

## Quick Start

``` bash
# Install dependencies for server
npm install

# Install dependencies for client
npm run client-install

# Run the client & server with concurrently
npm run dev

# Run the Express server only
npm run server

# Run the React client only
npm run client

# Server runs on http://localhost:5000 and client on http://localhost:3000
```
