FROM node:18

RUN npm install -g nodemon

WORKDIR /home/node/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 5001

CMD ["npm", "start"]