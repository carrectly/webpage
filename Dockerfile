FROM node:latest

WORKDIR /app

COPY . /app

ENV PATH ./.env:/app/.env:$PATH

RUN npm i 

EXPOSE 3000
CMD  npm run dev