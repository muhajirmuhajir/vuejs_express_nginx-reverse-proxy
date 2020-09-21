FROM node:12.18.4-alpine3.11

WORKDIR /usr/app

COPY package.json ./
COPY package-lock.json ./
RUN npm install

COPY ./ ./

RUN apk add --no-cache bash


CMD ["npm", "run", "serve"]
