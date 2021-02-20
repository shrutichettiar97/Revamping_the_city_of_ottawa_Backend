1. Add script watch to watch, pick up local changes and migrate databases

2. Build babel config file 

3. Build Dockerfile 

4. Add src/index.js to test yarn watch runing 

5. Build docker container 

    `docker build .`

6. Check running containers and get container ID

    `docker ps`

7. Excecute docker container with container ID

    `docker exec -it c1 bash` 

8. Add dependencies 
   
    `yarn add express cors body-parser`
