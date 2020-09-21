FROM node:12.18.4-alpine3.11

WORKDIR /usr/app

COPY package.json ./
RUN npm install

COPY ./ ./

RUN apk add --no-cache bash

EXPOSE 7000


CMD ["node", "service.js"]
