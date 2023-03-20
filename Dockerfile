FROM node:14-alpine3.9

ENV NODE_ENV production
WORKDIR /usr/src/app
COPY ["package.json", "package-lock.json*", "./"]
RUN npm install --production --silent && mv node_modules ../

COPY . .
EXPOSE 5000
CMD npm start


