FROM node:22

WORKDIR /user/src/app

COPY package.json ./

RUN npm install


EXPOSE 3000

CMD ["npm", "start"]