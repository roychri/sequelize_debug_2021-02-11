FROM node:lts-alpine

ARG NODE_ENV=production

RUN apk add --no-cache tini
ENTRYPOINT ["/sbin/tini", "--"]

WORKDIR /app

COPY package*.json ./

RUN if [ "$NODE_ENV" = "production" ]; then npm ci --only=production; else npm install; fi

COPY src/ ./src/

CMD [ "node", "src/index.js" ]

USER node
