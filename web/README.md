
## INSTALL Global Dependencies.

Run in a terminal at root of this document:

_To install each dependency individually:_

 * __npm install --global webpack@^4.18.0__
 * __npm install --global webpack-cli@3.1.0__
 * __npm install --global express@^4.16.3__
 * __npm install --global @babel/cli__
 * __npm install --global @babel/core__
 * __npm install --global @babel/node__

 Or use the __install_globals__ script in the package.json

 __npm run install_globals__

![Run globals command](https://i.imgur.com/X8R5rWq.png)

## INSTALL Local Dependencies.

_Run in a terminal at root of this document:_

__npm install__

![npm install command](https://i.imgur.com/IzRUOJi.png)

## Stack Server-Side

### Server
* This application has no server for production. A NodeJS ExpressJS server is used for development.

### View Engine
* ~~The server uses a view engine known as PUG~~
* The dev server uses a view engine known as PUG. 
* The production files has an index.html file which should be referenced.

## Stack Client-side
The Front end is built using React JS. 

### All API calls will transfer JSON for communication. 
* All Scripts are bundled with Webpack
* All Styles are bundled with Webpack
* All Images are bundled with Webpack
* All client-side code is located in ./src

## ENV file
* __ENV__=**development** 
    * Webpack dev server is enabled
    * Webpack hot reload is enabled
    * Webpack is compiled automatically
    * CORS is disabled. 
    * PUG View Engine is used.
* __ENV__=**production** 
    * Webpack dev server is disabled
    * Webpack hot reload is disabled
    * Expects build to be ran 
    * CORS is enabled. 
    * All bundled files get rendered to the /public directory. 
    * An html file is used to view the content.

# Requirements
* NodeJS > v6
* expressjs v4.x
* webpack v4.18.0


## Helpful links
* https://medium.com/@addyosmani/progressive-web-apps-with-react-js-part-i-introduction-50679aef2b12