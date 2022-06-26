FROM node:latest

WORKDIR /app

COPY . /app

RUN npm i 

EXPOSE 3000

RUN npm run build

CMD ["npm", "start"]