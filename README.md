# Revamping-the-City-of-Ottawa
Revamping the city of Ottawa app using microservice architecture.

    This is a project that build with micrioservices architecture to improve the current 
    city of Ottawa application.  
    Current function contains sign in, location service, news service and report an issue service.
    Each service has a Docker container running in the backend and has a different portal 
    which means we also have seperate databases back up.

* Backend technology: `node.js`, `GraphQL`, `MYSQL`, `Docker`, and `Sequelize`

* Frontend technology: `React`


Basic dependency installation:

(Whenever you want to implement a new service, this will be the basic workflow to get going)

* `yarn init -y`

* `yarn add -D babel-watch`

    Watch out changes of local code 

* `yarn add @babel/core @babel/polyfill @babel/preset-env babel-plugin-module-resolver`

    Babel is a JavaScript compiler 

* `yarn add dotenv`

    add environment variables

### For more details of the dependencies, check `package.json` file.

Set up docker-compose.yaml file and run container 

    docker-compose up

Then migrate database with `MYSQL` anf `Sequelize`

    yarn add mysql2 sequelize sequelize-cli


## Troubleshooting:

If your docker container running have issue, run 

    docker-compose down -v

Then run 

    docker-compose up

## References:

* [Microservice Architecture](https://microservices.io)
