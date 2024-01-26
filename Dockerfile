FROM node
WORKDIR /contacts-app
COPY . .
RUN npm install
EXPOSE 3000
CMD [ "node", "./server.js"]