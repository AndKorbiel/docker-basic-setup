The repository contains a simple representation of the communication scheme between three applications:

1. Two applications running in the same network as they are build with docker compose (client and service1)
2. A single application running as a separate container (service2)

To build and run two applications based on docker compose simply run this command:
docker compose up

To build separate application use following command scheme:
docker build -t [tagname] [path to Dockerfile]
i.e.:
docker build -t service2 ./service2

To run separate application, publish exposed port and set to 'hot reload mode' do as follows:
docker run -p 5001:5001 -v [absolute path to working dir]:/home/node/app --network=microserv-containers_default service2

Details from command above:
-p 5001:5001 - publish exposed ports
-v [paths] - bind volues from local machine
--network [name of the network] - we have to connect standalone container to same network as composed containers to make communication possible

Important:

- as standalone container is working in a 'hot reload' (matching volumes) mode you have to firstly install modules (run npm install) in service2 app
- we don't have to connect standalone container to default network of composed containers and insted we can create custom network and connect both to it:
  https://docs.docker.com/network/network-tutorial-standalone/
  https://sparkbyexamples.com/docker/get-docker-container-ip-address-from-the-host/
- we have to make sure that correct IP address is provided in client's server config for service2
