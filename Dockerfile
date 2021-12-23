FROM node:16-alpine

COPY yarn.lock package.json ./

RUN yarn install

COPY . .

CMD node index.js
EXPOSE 3000