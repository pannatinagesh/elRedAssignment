FROM node:alpine
WORKDIR /app

COPY ./build ./

CMD ["npx", "serve", "-p", "80"]