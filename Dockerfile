FROM node:latest

WORKDIR /src

COPY package*.json ./

RUN npm install

COPY . .

CMD ["sh", "-c", "npm run build && npm run start"]
