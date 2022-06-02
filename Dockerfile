FROM node:18.2.0-alpine
WORKDIR /app
COPY package.json package-lock.json /app/
RUN npm install
COPY . /app/
EXPOSE 3000
ENTRYPOINT [ "npm", "start" ]